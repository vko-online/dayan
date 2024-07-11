// import { useEffect, useRef } from 'react'
// import { Platform } from 'react-native'
// import { useSelector } from 'react-redux'
// import { useNavigation } from '@react-navigation/native'
// import { type Subscription } from 'expo-modules-core'
// import * as Notifications from 'expo-notifications'

// import {
//   MessagesDocument,
//   type MessagesQuery,
//   MyConversationsDocument,
//   type MyConversationsQuery,
//   SortOrder,
//   useMarkAsReceivedMutation,
//   useNewMessageSubscription
// } from 'src/generated/graphql'
// import { type RootState } from 'src/store'

// /*
// what it does
// receive msgs +
// update store +
// mark as received +
//   2 options:
//      send N+1 request from frontend
//      modify on backend, but we don't know if subscription was successful, so stick to option 1
// mark as read should be implemented in Conversation view screen
// */
// export default function Messaging(): JSX.Element | null {
//   const notificationListener = useRef<Subscription>()
//   const responseListener = useRef<Subscription>()
//   const navigation = useNavigation()
//   useSubscriptionToBackend()
//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       void Notifications.setNotificationChannelAsync('default', {
//         name: 'default',
//         importance: Notifications.AndroidImportance.MAX,
//         vibrationPattern: [0, 250, 250, 250],
//         lightColor: '#FF231F7C'
//       })
//     }
//     notificationListener.current = Notifications.addNotificationReceivedListener(
//       async notification => {
//         console.log('notification', notification)
//       }
//     )

//     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//       const notificationType = response.notification.request.content.data.type
//       if (notificationType === 'PROMO') {
//         navigation.navigate('Notifications')
//       }
//       if (notificationType === 'NEW_MESSAGE') {
//         navigation.navigate('Root', { screen: 'Messages' })
//       }
//     })

//     return () => {
//       Notifications.removeNotificationSubscription(notificationListener.current as Subscription)
//       Notifications.removeNotificationSubscription(responseListener.current as Subscription)
//     }
//   }, [])
//   return null
// }

// export function useSubscriptionToBackend(): void {
//   const [markAsReceived] = useMarkAsReceivedMutation({
//     ignoreResults: true
//   })
//   const userId = useSelector((state: RootState) => state.auth.currentUserId)
//   useNewMessageSubscription({
//     skip: userId == null,
//     variables: {
//       currentUserId: userId as string
//     },
//     onData: async options => {
//       const client = options.client
//       const newMessage = options.data?.data?.newMessage

//       // update messages
//       const existingMessages = client.readQuery<MessagesQuery>({
//         query: MessagesDocument,
//         variables: {
//           where: {
//             conversationId: {
//               equals: newMessage?.conversationId
//             }
//           },
//           orderBy: {
//             createdAt: SortOrder.Desc
//           }
//         }
//       })

//       const updatedMessages = [...(existingMessages?.messages ?? [])]
//       if (newMessage?.message != null) {
//         const exists = updatedMessages.findIndex(v => v.id === newMessage.message.id)
//         if (exists === -1) {
//           updatedMessages.unshift(newMessage.message)
//           // fire and forget
//           void markAsReceived({
//             variables: {
//               messageIds: [newMessage.message.id]
//             }
//           })
//           client.writeQuery<MessagesQuery>({
//             query: MessagesDocument,
//             variables: {
//               where: {
//                 conversationId: {
//                   equals: newMessage?.conversationId
//                 }
//               },
//               orderBy: {
//                 createdAt: SortOrder.Desc
//               }
//             },
//             data: {
//               messages: updatedMessages
//             }
//           })
//         }
//       }

//       // update conversation last message
//       const existingConversations = client.readQuery<MyConversationsQuery>({
//         query: MyConversationsDocument
//       })

//       if (existingConversations?.myConversations != null) {
//         const index = existingConversations?.myConversations.findIndex(
//           v => v.id === newMessage?.conversationId
//         )
//         if (index > -1) {
//           const updatedConversations: MyConversationsQuery = {
//             ...existingConversations,
//             myConversations: [
//               ...existingConversations.myConversations.slice(0, index),
//               {
//                 ...existingConversations.myConversations[index],
//                 lastMessageAuthor: newMessage?.message.author.name,
//                 lastMessageContent: newMessage?.message.content,
//                 lastMessageDate: newMessage?.message.createdAt
//               },
//               ...existingConversations.myConversations.slice(Number(index) + 1)
//             ]
//           }
//           client.writeQuery<MyConversationsQuery>({
//             query: MyConversationsDocument,
//             data: updatedConversations
//           })
//         }
//       }
//     }
//   })
// }
