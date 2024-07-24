import React, { forwardRef, useCallback } from 'react'
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native'
import { Icon, Text } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native'

import BlurredBackground from 'src/components/BlurredBackground'
import Box from 'src/components/Box'
import { CardHandle } from 'src/components/CardHandle'
import { HANDLE_HEIGHT } from 'src/components/GenericHandle'
import { useAppTheme } from 'src/components/themes'
import { TasksQuery } from 'src/generated/graphql'
interface CardSegmentProps {
  onClose: () => void
  onTitlePress: () => void
  onRespond: () => void
  item?: TasksQuery['tasks'][0]
}
const CardSegment = forwardRef<BottomSheetModal, CardSegmentProps>(
  (
    { item, onClose, onTitlePress, onRespond }: CardSegmentProps,
    ref: React.ForwardedRef<BottomSheetModal>
  ) => {
    const { colors } = useAppTheme()
    const { top } = useSafeAreaInsets()

    const navigation = useNavigation()
    const handleImagePress = useCallback(() => {
      navigation.navigate('GalleryPreview')
    }, [navigation])

    return (
      <BottomSheetModal
        ref={ref}
        key='profileSheet'
        name='profileSheet'
        snapPoints={['40%', '100%']}
        topInset={top}
        handleHeight={HANDLE_HEIGHT}
        handleComponent={props => (
          <CardHandle
            {...props}
            onPress={onTitlePress}
            title={item?.title}
            subtitle={item?.category?.name}
            onClose={onClose}
          />
        )}
        backgroundComponent={BlurredBackground}>
        <Box paddingHorizontal={15} paddingTop={10}>
          <Box flexDirection='row' gap={15}>
            <Pressable
              style={[s.button, { backgroundColor: colors.primary, width: 100 }]}
              onPress={onRespond}>
              <Icon source='select-all' size={18} />
              <Text>Respond</Text>
            </Pressable>
            <Pressable style={[s.button, { backgroundColor: colors.divider }]}>
              <Icon source='phone' size={18} />
              <Text>Call</Text>
            </Pressable>
            <Pressable style={[s.button, { backgroundColor: colors.divider }]}>
              <Icon source='message' size={18} />
              <Text>Text</Text>
            </Pressable>
            <Pressable style={[s.button, { backgroundColor: colors.divider }]}>
              <Icon source='dots-horizontal' size={18} />
            </Pressable>
          </Box>
          <View style={[s.divider, { backgroundColor: colors.divider }]} />
          <Box flexDirection='row'>
            <View style={s.info}>
              <Text variant='labelSmall'>Price</Text>
              <Text style={s.value}>{item?.price} $</Text>
            </View>
            <View style={[s.dividerVertical, { backgroundColor: colors.divider }]} />
            <View style={s.info}>
              <Text variant='labelSmall'>Duration</Text>
              <Text style={s.value}>30 min</Text>
            </View>
            <View style={[s.dividerVertical, { backgroundColor: colors.divider }]} />
            <View style={s.info}>
              <Text variant='labelSmall'>Views</Text>
              <Text style={s.value}>234</Text>
            </View>
            <View style={[s.dividerVertical, { backgroundColor: colors.divider }]} />
            <View style={[s.info, { paddingRight: 0 }]}>
              <Text variant='labelSmall'>Distance</Text>
              <Text style={s.value}>200 m</Text>
            </View>
          </Box>
          <View style={[s.divider, { backgroundColor: colors.divider }]} />

          <FlatList
            data={item?.images}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            renderItem={({ item }) => (
              <Pressable onPress={handleImagePress}>
                <Image style={s.image} source={{ uri: item }} />
              </Pressable>
            )}
          />
          <View style={[s.block, { backgroundColor: colors.elevation.level2 }]}>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, incidunt.</Text>
          </View>
        </Box>
      </BottomSheetModal>
    )
  }
)

CardSegment.displayName = 'CardSegment'

const s = StyleSheet.create({
  button: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 5,
    gap: 5,
    minHeight: 60
  },
  info: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 5,
    gap: 5,
    minHeight: 60
  },
  block: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10
  },
  image: {
    width: 120,
    height: 200,
    borderRadius: 10
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    marginVertical: 10
  },
  dividerVertical: {
    width: StyleSheet.hairlineWidth
  },
  value: {
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default CardSegment
