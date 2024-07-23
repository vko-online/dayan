import { StyleSheet } from 'react-native'
import { Button, Divider, HelperText, Text, TextInput, useTheme } from 'react-native-paper'
import { type ApolloError } from '@apollo/client'
import { Formik } from 'formik'
import isEmpty from 'lodash/isEmpty'
import * as yup from 'yup'

import Box from 'src/components/Box'
import { useSendOtpMutation } from 'src/generated/graphql'
import { type AuthStackScreenProps } from 'src/navigation/types'

const schema = yup.object().shape({
  phone: yup.string().required('Enter valid phone number')
})

export default function Auth({ navigation }: AuthStackScreenProps<'Index'>): JSX.Element {
  const [sendOtpAsync, { loading }] = useSendOtpMutation()
  const { colors } = useTheme()
  return (
    <Box padding={10} flex={1} justifyContent='center' backgroundColor={colors.background}>
      <Formik
        initialValues={{
          phone: ''
        }}
        validateOnMount
        onSubmit={async ({ phone }, actions) => {
          try {
            const { data } = await sendOtpAsync({
              variables: {
                input: {
                  phone
                }
              }
            })
            // actions.resetForm()
            if (data?.sendOTP.success === true) {
              navigation.navigate('OneTimePin', { phone })
            } else {
              actions.setFieldError('phone', 'Failed to send OTP')
            }
          } catch (e) {
            const error = e as ApolloError
            actions.setFieldError('phone', error.message)
          }
        }}
        validationSchema={schema}>
        {({ values, handleChange, handleSubmit, touched, errors, isValid }) => (
          <Box>
            <Text variant='displayLarge' style={s.title}>
              DAYAN
            </Text>
            <TextInput
              value={values.phone}
              onChangeText={handleChange('phone')}
              label='Phone'
              keyboardType='number-pad'
              error={touched.phone === true && !isEmpty(errors.phone)}
            />
            <HelperText type='error' visible={touched.phone === true && !isEmpty(errors.phone)}>
              {errors.phone}
            </HelperText>
            <Divider style={s.divider} />
            <Button loading={loading} disabled={!isValid || loading} onPress={() => handleSubmit()}>
              Continue
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  )
}

const s = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20
  },
  divider: {
    marginVertical: 10
  }
})
