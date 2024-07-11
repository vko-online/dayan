import React, { forwardRef, useCallback } from 'react'
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native'
import { Icon, Text, useTheme } from '@rneui/themed'

import BlurredBackground from 'src/components/BlurredBackground'
import Box from 'src/components/Box'
import { CARD_HANDLE_HEIGHT, CardHandle } from 'src/components/CardHandle'
import { Request } from 'src/graphql/types'
interface CardSegmentProps {
  onClose: () => void
  onTitlePress: () => void
  onRespond: () => void
  item?: Request
}
const CardSegment = forwardRef<BottomSheetModal, CardSegmentProps>(
  (
    { item, onClose, onTitlePress, onRespond }: CardSegmentProps,
    ref: React.ForwardedRef<BottomSheetModal>
  ) => {
    const { theme } = useTheme()
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
        handleHeight={CARD_HANDLE_HEIGHT}
        handleComponent={props => (
          <CardHandle
            {...props}
            onPress={onTitlePress}
            title={item?.title}
            subtitle={item?.category}
            onClose={onClose}
          />
        )}
        backgroundComponent={BlurredBackground}>
        <Box paddingHorizontal={15} paddingTop={10}>
          <Box flexDirection='row' gap={15} marginBottom={10}>
            <Pressable
              style={[s.button, { backgroundColor: theme.colors.primary, width: 100 }]}
              onPress={onRespond}>
              <Icon name='select-all' type='matarialicons' />
              <Text>Respond</Text>
            </Pressable>
            <Pressable style={[s.button, { backgroundColor: theme.colors.grey5 }]}>
              <Icon name='call' type='matarialicons' />
              <Text>Call</Text>
            </Pressable>
            <Pressable style={[s.button, { backgroundColor: theme.colors.grey5 }]}>
              <Icon name='message' type='matarialicons' />
              <Text>Text</Text>
            </Pressable>
            <Pressable style={[s.button, { backgroundColor: theme.colors.grey5 }]}>
              <Icon name='more-horiz' type='matarialicons' />
            </Pressable>
          </Box>
          <View style={[s.divider, { backgroundColor: theme.colors.divider }]} />
          <Box flexDirection='row'>
            <View style={[s.info, { paddingLeft: 0 }]}>
              <Text style={s.caption}>Price</Text>
              <Text style={s.value}>{item?.price} $</Text>
            </View>
            <View style={[s.dividerVertical, { backgroundColor: theme.colors.divider }]} />
            <View style={s.info}>
              <Text style={s.caption}>Duration</Text>
              <Text style={s.value}>30 min</Text>
            </View>
            <View style={[s.dividerVertical, { backgroundColor: theme.colors.divider }]} />
            <View style={s.info}>
              <Text style={s.caption}>Views</Text>
              <Text style={s.value}>234</Text>
            </View>
            <View style={[s.dividerVertical, { backgroundColor: theme.colors.divider }]} />
            <View style={[s.info, { paddingRight: 0 }]}>
              <Text style={s.caption}>Distance</Text>
              <Text style={s.value}>200 m</Text>
            </View>
          </Box>
          <View style={[s.divider, { backgroundColor: theme.colors.divider }]} />

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
          <View style={[s.block, { backgroundColor: theme.colors.grey5 }]}>
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
  caption: {
    color: '#999',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  value: {
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default CardSegment
