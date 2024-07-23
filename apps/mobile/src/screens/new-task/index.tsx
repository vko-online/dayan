import React, { useEffect, useState } from 'react'
import { Pressable, ScrollView } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { Button, List, Text, TextInput, useTheme } from 'react-native-paper'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { formatDate } from 'date-fns'
import { useFormik } from 'formik'
import * as yup from 'yup'

import Box from 'src/components/Box'
import { TaskInput, TaskPaymentType } from 'src/generated/graphql'
import { NewTaskStackParamList } from 'src/navigation/types'

import { CategoryItem } from './category-selection'
import MapInput from './map-input'

const validationSchema: yup.ObjectSchema<TaskInput> = yup.object().shape({
  address: yup.string().optional(),
  categoryId: yup.string().optional(),
  location: yup
    .object()
    .shape({
      latitude: yup.number().required('Latitude is required'),
      longitude: yup.number().required('Longitude is required'),
      altitude: yup.number().required('Altitude is required')
    })
    .optional(),
  paymentType: yup.string<TaskPaymentType>().optional(),
  images: yup.array().optional(),
  price: yup.number().optional(),
  description: yup.string().defined(),
  date: yup.date().optional()
})

const NewTaskScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<NewTaskStackParamList, 'Index'>>()
  const route = useRoute<RouteProp<NewTaskStackParamList, 'Index'>>()
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [category, setCategory] = useState<CategoryItem>()

  const { values, handleChange, setFieldValue } = useFormik<TaskInput>({
    initialValues: {
      date: new Date(),
      description: '',
      categoryId: '',
      price: 0,
      images: [],
      paymentType: TaskPaymentType.Fixed,
      address: '',
      location: {
        altitude: 0,
        latitude: 0,
        longitude: 0
      }
    },
    validationSchema,
    onSubmit: console.log
  })

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  // const handleConfirm = (date: Date) => {
  //   console.warn('A date has been picked: ', date)
  //   hideDatePicker()
  // }

  useEffect(() => {
    console.log('category', route.params?.category)
    if (route.params?.category) {
      setFieldValue('categoryId', route.params.category.id)
      setCategory(route.params.category)
    }
  }, [route.params?.category, setFieldValue])

  const { colors } = useTheme()
  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentInsetAdjustmentBehavior='always'>
      <Box paddingHorizontal={10} paddingTop={20} paddingBottom={10}>
        <MapInput
          location={route.params?.location}
          onPress={() =>
            navigation.navigate('MapSelection', {
              location: route.params?.location
            })
          }
        />
        {/* <Text variant='labelMedium'>Description</Text> */}
        <TextInput
          multiline
          label='Description'
          placeholder='Task name'
          mode='outlined'
          value={values.description}
          onChangeText={handleChange('description')}
        />
        <Box marginTop={15}>
          <Text variant='labelMedium'>Category</Text>
          <Pressable onPress={() => navigation.navigate('CategorySelection')}>
            <List.Item
              title={category?.name ?? 'Select category'}
              left={props => category?.image && <List.Icon {...props} icon={category?.image} />}
              right={props => <List.Icon {...props} icon='chevron-right' />}
            />
          </Pressable>
        </Box>
        <Box marginTop={15}>
          <TextInput
            placeholder='Date'
            mode='outlined'
            label='Date'
            value={formatDate(values.date, 'dd/MM/yyyy')}
            onPress={showDatePicker}
          />
        </Box>
        <Box marginTop={15}>
          <TextInput
            placeholder='Price'
            mode='outlined'
            label='Price'
            clearButtonMode='while-editing'
            value={String(values.price)}
            onChangeText={text => setFieldValue('price', Number(text))}
          />
        </Box>
        <Text variant='bodyMedium'>Average price for this task 300$</Text>
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
          <Button icon='file-image' mode='contained-tonal'>
            Add your photos
          </Button>
        </Box>
        <Box flex={1} />

        <Button mode='contained' onPress={() => {}}>
          Create task
        </Button>
      </Box>
    </ScrollView>
  )
}

export default NewTaskScreen
