import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { Button, Divider, Icon, Input, Slider, useTheme } from '@rneui/themed'
import { formatDate } from 'date-fns'
import { Formik } from 'formik'
import * as yup from 'yup'

import Box from 'src/components/Box'
import Surface from 'src/components/Surface'
import { Text } from 'src/components/Text'

const validationSchema = yup.object().shape({
  description: yup.string().required('Description is required'),
  date: yup.date().required('Date is required')
})

const NewTaskScreen: React.FC = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: Date) => {
    console.warn('A date has been picked: ', date)
    hideDatePicker()
  }
  const { theme } = useTheme()
  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background }}
      contentInsetAdjustmentBehavior='always'>
      <Formik
        initialValues={{
          date: new Date(),
          description: '',
          price: '0',
          address: '',
          location: {
            altitude: 0,
            latitude: 0,
            longitude: 0
          }
        }}
        onSubmit={console.log}>
        {({ values, handleChange, setFieldValue }) => (
          <Box padding={10}>
            <Text label>Description</Text>
            <Surface marginBottom={10} padding={0}>
              <Input
                multiline
                inputStyle={{ minHeight: 80 }}
                clearButtonMode='while-editing'
                placeholder='Task name'
                value={values.description}
                onChangeText={handleChange('description')}
              />
            </Surface>
            <Box marginTop={15}>
              <Text label>Category</Text>
              <Surface justifyContent='center' flexDirection='row'>
                <Box flex={1} gap={10} flexDirection='row' alignItems='center'>
                  <Icon name='directions-car' />
                  <Text body>Transport</Text>
                </Box>
                <Icon name='chevron-right' />
              </Surface>
            </Box>
            <Box marginTop={15}>
              <Text label>When</Text>
              <Surface padding={0}>
                <Input
                  leftIcon={{ name: 'calendar-today', color: theme.colors.black }}
                  placeholder='Date'
                  value={formatDate(values.date, 'dd/MM/yyyy')}
                  onPress={showDatePicker}
                />
              </Surface>
            </Box>
            <Box marginTop={15}>
              <Text label>Price</Text>
              <Surface padding={0}>
                <Input
                  leftIcon={{ name: 'money', color: theme.colors.black }}
                  placeholder='Price'
                  clearButtonMode='while-editing'
                  value={values.price}
                  onChangeText={handleChange('price')}
                />
              </Surface>
            </Box>
            <Text caption>Average price for this task 300$</Text>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode='date'
              onConfirm={(date: Date) => {
                setFieldValue('date', date)
                hideDatePicker()
              }}
              onCancel={hideDatePicker}
            />
            <Box marginTop={15}>
              <Surface padding={0}>
                <Button icon={{ name: 'photo', color: theme.colors.black }} type='clear'>
                  Add your photos
                </Button>
              </Surface>
            </Box>
            <Box flex={1} />

            <Button onPress={() => {}} title='Create task' />
          </Box>
        )}
      </Formik>
    </ScrollView>
  )
}

export default NewTaskScreen
