import React from 'react'
import { ActivityIndicator, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field'
import { type ApolloError } from '@apollo/client'
import { CommonActions } from '@react-navigation/native'
import { useFormik } from 'formik'
import isEmpty from 'lodash/isEmpty'
import * as yup from 'yup'

import Box from 'src/components/Box'
import { Text } from 'src/components/Text'
import { useCheckOtpMutation } from 'src/generated/graphql'
import { type AuthStackScreenProps } from 'src/navigation/types'
import { useAppDispatch } from 'src/store'
import { onAuthSuccess } from 'src/store/slices/auth'

const CELL_COUNT = 4
const schema = yup.object().shape({
  phone: yup.string().required(),
  oneTimePin: yup.string().required('Enter One Time Pin')
})

export default function Auth({
  navigation,
  route
}: AuthStackScreenProps<'OneTimePin'>): JSX.Element {
  const { phone } = route.params
  const dispatch = useAppDispatch()
  const { values, handleSubmit, setFieldError, errors, touched, setFieldValue } = useFormik({
    initialValues: {
      phone,
      oneTimePin: ''
    },
    validationSchema: schema,
    onSubmit: async (values, actions) => {
      try {
        const { data } = await checkOTPAsync({
          variables: {
            input: {
              code: values.oneTimePin,
              phone: values.phone,
              deviceOS: Platform.OS
            }
          }
        })
        console.log('data', data)
        if (data?.checkOTP.token != null) {
          // can switch to RTK
          // that way we can avoid using boilerplate like this
          // and use redirects inside actions
          dispatch(
            onAuthSuccess({
              name: data.checkOTP.user.name,
              currentUserId: data.checkOTP.user.id,
              token: data.checkOTP.token
            })
          )
          actions.resetForm()
          navigation.goBack()
          navigation.dispatch(CommonActions.navigate('Main'))
        }
      } catch (e) {
        const error = e as ApolloError
        setFieldError('oneTimePin', error.message)
      }
    }
  })
  const ref = useBlurOnFulfill({ value: values.oneTimePin, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: values.oneTimePin,
    setValue: async (val: string) => await setFieldValue('oneTimePin', val)
  })
  const [checkOTPAsync, { loading }] = useCheckOtpMutation()
  return (
    <KeyboardAvoidingView style={s.root} behavior='height'>
      <Box justifyContent='center' alignItems='center'>
        <Text style={s.title}>Two-Factor Authentication</Text>
        <Text style={s.text}>
          A message with a verification code has been sent to your device. Please enter the code to
          continue
        </Text>
        <CodeField
          ref={ref}
          {...props}
          value={values.oneTimePin}
          onChangeText={async text => {
            await setFieldValue('oneTimePin', text)
            if (text?.length === CELL_COUNT) {
              handleSubmit()
            }
          }}
          cellCount={CELL_COUNT}
          rootStyle={s.codeFieldRoot}
          keyboardType='number-pad'
          textContentType='oneTimeCode'
          renderCell={({ index, symbol, isFocused }) => (
            <View
              // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[s.cellRoot, isFocused && s.focusCell]}>
              <Text style={s.cellText}>{symbol ?? (isFocused ? <Cursor /> : null)}</Text>
            </View>
          )}
        />
        {touched.oneTimePin === true && !isEmpty(errors.oneTimePin) ? (
          <Text>{errors.oneTimePin}</Text>
        ) : (
          <Text> </Text>
        )}
        <View style={s.loading}>{loading ? <ActivityIndicator size='large' /> : null}</View>
      </Box>
    </KeyboardAvoidingView>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    textAlign: 'center',
    marginBottom: 20
  },
  codeFieldRoot: {
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center'
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 3
  },
  loading: {
    height: 50
  }
})
