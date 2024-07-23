import React, { useCallback, useState } from 'react'
import { Button, FlatList } from 'react-native'
import { Divider, List, Searchbar } from 'react-native-paper'
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native'

import Box from 'src/components/Box'
import { useAppTheme } from 'src/components/themes'
import {
  SearchCategoryQuery,
  useSearchCategoryLazyQuery,
  useSearchCategoryQuery
} from 'src/generated/graphql'
import { NewTaskStackParamList } from 'src/navigation/types'

export type CategoryItem = SearchCategoryQuery['searchCategory'][0]
export default function CategorySelection() {
  const { data: initialData } = useSearchCategoryQuery({
    variables: {
      input: {
        text: ''
      }
    }
  })
  const navigation = useNavigation<NavigationProp<NewTaskStackParamList, 'CategorySelection'>>()
  const [query, { data, loading }] = useSearchCategoryLazyQuery()
  const { colors } = useAppTheme()
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState<CategoryItem>()

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerLeft: () => (
          <Button
            title='Back'
            onPress={async () => {
              navigation.navigate('Index', {
                category: selected
              })
            }}
          />
        )
      })
    }, [navigation, selected])
  )

  const updateSearch = useCallback(
    (text: string) => {
      setValue(text)
      query({
        variables: {
          input: {
            text
          }
        }
      })
    },
    [query]
  )

  const handleSelect = useCallback((item: CategoryItem) => {
    setSelected(item)
  }, [])

  return (
    <Box flex={1} backgroundColor={colors.background}>
      <Searchbar
        placeholder='Type Here...'
        placeholderTextColor={colors.placeholder}
        onChangeText={updateSearch}
        value={value}
        loading={loading}
        mode='view'
      />
      <FlatList
        data={data?.searchCategory ?? initialData?.searchCategory}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Divider}
        renderItem={({ item }) => (
          <List.Item
            onPress={() => handleSelect(item)}
            title={item.name}
            description={item.description}
            left={props => item.image && <List.Icon {...props} icon={item.image} />}
            right={props => selected?.id === item.id && <List.Icon {...props} icon='check' />}
          />
        )}
      />
    </Box>
  )
}
