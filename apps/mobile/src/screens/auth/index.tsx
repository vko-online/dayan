import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { type ApolloError } from '@apollo/client'
import { Button, Divider, Input, Text as RneText, useTheme } from '@rneui/themed'
import { Formik } from 'formik'
import isEmpty from 'lodash/isEmpty'
import * as yup from 'yup'

import Box from 'src/components/Box'
import { Text } from 'src/components/Text'
import { useSendOtpMutation } from 'src/generated/graphql'
import { type AuthStackScreenProps } from 'src/navigation/types'

const schema = yup.object().shape({
  phone: yup.string().required('Enter valid phone number')
})

export default function Auth({ navigation }: AuthStackScreenProps<'Index'>): JSX.Element {
  const [sendOtpAsync, { loading }] = useSendOtpMutation()
  const { theme } = useTheme()
  return (
    <Box padding={10} flex={1} justifyContent='center' backgroundColor={theme.colors.background}>
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
            <RneText h1 style={s.title}>
              DAYAN
            </RneText>
            <Input
              value={values.phone}
              onChangeText={handleChange('phone')}
              label='Phone'
              keyboardType='number-pad'
              renderErrorMessage={touched.phone === true && !isEmpty(errors.phone)}
              errorMessage={errors.phone}
            />
            {touched.phone === true && !isEmpty(errors.phone) ? <Text>{errors.phone}</Text> : null}
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
