import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Float'];
};

export type Category = {
  __typename?: 'Category';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
};

export type CategoryQueryInput = {
  text: Scalars['String'];
};

export type CheckCodeInput = {
  code: Scalars['String'];
  deviceOS?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
};

export type CheckCodePayload = {
  __typename?: 'CheckCodePayload';
  token: Scalars['String'];
  user: User;
};

export type Conversation = {
  __typename?: 'Conversation';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  lastMessageAuthor?: Maybe<Scalars['String']>;
  lastMessageContent?: Maybe<Scalars['String']>;
  lastMessageDate?: Maybe<Scalars['DateTime']>;
  members: Array<UserPartial>;
  messages: Array<Message>;
};

export type ConversationInput = {
  content: Scalars['String'];
  conversationId: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Float'];
  type: Scalars['String'];
};

export type GeoLocation = {
  __typename?: 'GeoLocation';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type LocationWithAltitudeInput = {
  altitude: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Message = {
  __typename?: 'Message';
  author: UserPartial;
  authorId: Scalars['String'];
  content: Scalars['String'];
  conversationId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  files: Array<Scalars['String']>;
  id: Scalars['String'];
  readByIds: Array<Scalars['String']>;
  receivedByIds: Array<Scalars['String']>;
};

export type MessageWithTargetIds = {
  __typename?: 'MessageWithTargetIds';
  conversationId: Scalars['String'];
  message: Message;
  targetId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  checkOTP: CheckCodePayload;
  createTask: Task;
  markAsRead: BatchPayload;
  markAsReceived: BatchPayload;
  sendMessage: Message;
  sendNotification: Scalars['Float'];
  sendOTP: SendCodePayload;
  signOut?: Maybe<Scalars['Boolean']>;
  updateImage: Array<File>;
  updatePresence: Scalars['Boolean'];
  updateState?: Maybe<Scalars['Boolean']>;
  uploadImage: Array<File>;
};


export type MutationCheckOtpArgs = {
  input: CheckCodeInput;
};


export type MutationCreateTaskArgs = {
  data: TaskInput;
};


export type MutationMarkAsReadArgs = {
  messageIds: Array<Scalars['String']>;
};


export type MutationMarkAsReceivedArgs = {
  messageIds: Array<Scalars['String']>;
};


export type MutationSendMessageArgs = {
  input: ConversationInput;
};


export type MutationSendNotificationArgs = {
  input: PushCampaignInput;
};


export type MutationSendOtpArgs = {
  input: SendCodeInput;
};


export type MutationUpdateImageArgs = {
  input: UpdateImageInput;
};


export type MutationUpdatePresenceArgs = {
  input: PresenceInput;
};


export type MutationUpdateStateArgs = {
  input: StateInput;
};


export type MutationUploadImageArgs = {
  input: Array<Scalars['Upload']>;
};

export type PresenceInput = {
  online?: InputMaybe<Scalars['Boolean']>;
};

export type PushCampaignInput = {
  content: Scalars['String'];
  title: Scalars['String'];
  userIds: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  availableTasks: Array<Task>;
  conversations: Array<Conversation>;
  me?: Maybe<User>;
  searchCategory: Array<Category>;
};


export type QuerySearchCategoryArgs = {
  input: CategoryQueryInput;
};

export type SendCodeInput = {
  phone: Scalars['String'];
};

export type SendCodePayload = {
  __typename?: 'SendCodePayload';
  success: Scalars['Boolean'];
};

export type StateInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  online: Scalars['Boolean'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newMessage: MessageWithTargetIds;
};


export type SubscriptionNewMessageArgs = {
  currentUserId: Scalars['String'];
};

export type Task = {
  __typename?: 'Task';
  addresss?: Maybe<Scalars['String']>;
  author: UserPartial;
  authorId: Scalars['String'];
  categoryId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  date?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  executorId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images: Array<Scalars['String']>;
  location?: Maybe<TaskLocation>;
  payment?: Maybe<TaskPayment>;
  paymentType?: Maybe<TaskPaymentType>;
  price?: Maybe<Scalars['Float']>;
  state?: Maybe<TaskState>;
  status?: Maybe<TaskStatus>;
  title: Scalars['String'];
};

export type TaskInput = {
  address?: InputMaybe<Scalars['String']>;
  categoryId?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  images?: InputMaybe<Array<Scalars['Upload']>>;
  location?: InputMaybe<LocationWithAltitudeInput>;
  paymentType?: InputMaybe<TaskPaymentType>;
  price?: InputMaybe<Scalars['Float']>;
};

export type TaskLocation = {
  __typename?: 'TaskLocation';
  altitude: Scalars['Float'];
  id: Scalars['String'];
  location: GeoLocation;
  taskId: Scalars['String'];
};

export enum TaskPayment {
  ApplePay = 'APPLE_PAY',
  BankTransfer = 'BANK_TRANSFER',
  Cash = 'CASH'
}

export enum TaskPaymentType {
  Fixed = 'FIXED',
  Flexible = 'FLEXIBLE',
  Hourly = 'HOURLY',
  Negotiatable = 'NEGOTIATABLE'
}

export enum TaskState {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export enum TaskStatus {
  AwaitingReview = 'AWAITING_REVIEW',
  Created = 'CREATED',
  Finished = 'FINISHED',
  InProgress = 'IN_PROGRESS'
}

export type UpdateImageInput = {
  file: Scalars['Upload'];
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  categoryIds?: Maybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  pushId?: Maybe<Scalars['String']>;
  verification?: Maybe<Verification>;
  verificationId?: Maybe<Scalars['String']>;
};

export type UserPartial = {
  __typename?: 'UserPartial';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
};

export type Verification = {
  __typename?: 'Verification';
  id: Scalars['String'];
  status: VerificationStatus;
};

/** Auth code verification status */
export enum VerificationStatus {
  Unverified = 'UNVERIFIED',
  VerificationInProgress = 'VERIFICATION_IN_PROGRESS',
  Verified = 'VERIFIED'
}

export type MessagePartsFragment = { __typename?: 'Message', id: string, content: string, createdAt: any, readByIds: Array<string>, receivedByIds: Array<string>, author: { __typename?: 'UserPartial', id: string, name?: string | null } };

export type ProfilePartsFragment = { __typename?: 'User', id: string, name?: string | null };

export type CheckOtpMutationVariables = Exact<{
  input: CheckCodeInput;
}>;


export type CheckOtpMutation = { __typename?: 'Mutation', checkOTP: { __typename?: 'CheckCodePayload', token: string, user: { __typename?: 'User', id: string, name?: string | null, phone: string } } };

export type SendOtpMutationVariables = Exact<{
  input: SendCodeInput;
}>;


export type SendOtpMutation = { __typename?: 'Mutation', sendOTP: { __typename?: 'SendCodePayload', success: boolean } };

export type SearchCategoryQueryVariables = Exact<{
  input: CategoryQueryInput;
}>;


export type SearchCategoryQuery = { __typename?: 'Query', searchCategory: Array<{ __typename?: 'Category', id: string, name: string, description?: string | null, image?: string | null }> };

export type MarkAsReceivedMutationVariables = Exact<{
  messageIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type MarkAsReceivedMutation = { __typename?: 'Mutation', markAsReceived: { __typename?: 'BatchPayload', count: number } };

export type NewMessageSubscriptionVariables = Exact<{
  currentUserId: Scalars['String'];
}>;


export type NewMessageSubscription = { __typename?: 'Subscription', newMessage: { __typename?: 'MessageWithTargetIds', targetId: string, conversationId: string, message: { __typename?: 'Message', id: string, content: string, createdAt: any, readByIds: Array<string>, receivedByIds: Array<string>, author: { __typename?: 'UserPartial', id: string, name?: string | null } } } };

export const MessagePartsFragmentDoc = gql`
    fragment MessageParts on Message {
  id
  content
  author {
    id
    name
  }
  createdAt
  readByIds
  receivedByIds
}
    `;
export const ProfilePartsFragmentDoc = gql`
    fragment ProfileParts on User {
  id
  name
}
    `;
export const CheckOtpDocument = gql`
    mutation checkOTP($input: CheckCodeInput!) {
  checkOTP(input: $input) {
    token
    user {
      id
      name
      phone
    }
  }
}
    `;
export type CheckOtpMutationFn = Apollo.MutationFunction<CheckOtpMutation, CheckOtpMutationVariables>;

/**
 * __useCheckOtpMutation__
 *
 * To run a mutation, you first call `useCheckOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkOtpMutation, { data, loading, error }] = useCheckOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCheckOtpMutation(baseOptions?: Apollo.MutationHookOptions<CheckOtpMutation, CheckOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckOtpMutation, CheckOtpMutationVariables>(CheckOtpDocument, options);
      }
export type CheckOtpMutationHookResult = ReturnType<typeof useCheckOtpMutation>;
export type CheckOtpMutationResult = Apollo.MutationResult<CheckOtpMutation>;
export type CheckOtpMutationOptions = Apollo.BaseMutationOptions<CheckOtpMutation, CheckOtpMutationVariables>;
export const SendOtpDocument = gql`
    mutation sendOTP($input: SendCodeInput!) {
  sendOTP(input: $input) {
    success
  }
}
    `;
export type SendOtpMutationFn = Apollo.MutationFunction<SendOtpMutation, SendOtpMutationVariables>;

/**
 * __useSendOtpMutation__
 *
 * To run a mutation, you first call `useSendOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendOtpMutation, { data, loading, error }] = useSendOtpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendOtpMutation(baseOptions?: Apollo.MutationHookOptions<SendOtpMutation, SendOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendOtpMutation, SendOtpMutationVariables>(SendOtpDocument, options);
      }
export type SendOtpMutationHookResult = ReturnType<typeof useSendOtpMutation>;
export type SendOtpMutationResult = Apollo.MutationResult<SendOtpMutation>;
export type SendOtpMutationOptions = Apollo.BaseMutationOptions<SendOtpMutation, SendOtpMutationVariables>;
export const SearchCategoryDocument = gql`
    query SearchCategory($input: CategoryQueryInput!) {
  searchCategory(input: $input) {
    id
    name
    description
    image
  }
}
    `;

/**
 * __useSearchCategoryQuery__
 *
 * To run a query within a React component, call `useSearchCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCategoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchCategoryQuery(baseOptions: Apollo.QueryHookOptions<SearchCategoryQuery, SearchCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCategoryQuery, SearchCategoryQueryVariables>(SearchCategoryDocument, options);
      }
export function useSearchCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCategoryQuery, SearchCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCategoryQuery, SearchCategoryQueryVariables>(SearchCategoryDocument, options);
        }
export type SearchCategoryQueryHookResult = ReturnType<typeof useSearchCategoryQuery>;
export type SearchCategoryLazyQueryHookResult = ReturnType<typeof useSearchCategoryLazyQuery>;
export type SearchCategoryQueryResult = Apollo.QueryResult<SearchCategoryQuery, SearchCategoryQueryVariables>;
export const MarkAsReceivedDocument = gql`
    mutation markAsReceived($messageIds: [String!]!) {
  markAsReceived(messageIds: $messageIds) {
    count
  }
}
    `;
export type MarkAsReceivedMutationFn = Apollo.MutationFunction<MarkAsReceivedMutation, MarkAsReceivedMutationVariables>;

/**
 * __useMarkAsReceivedMutation__
 *
 * To run a mutation, you first call `useMarkAsReceivedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAsReceivedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAsReceivedMutation, { data, loading, error }] = useMarkAsReceivedMutation({
 *   variables: {
 *      messageIds: // value for 'messageIds'
 *   },
 * });
 */
export function useMarkAsReceivedMutation(baseOptions?: Apollo.MutationHookOptions<MarkAsReceivedMutation, MarkAsReceivedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkAsReceivedMutation, MarkAsReceivedMutationVariables>(MarkAsReceivedDocument, options);
      }
export type MarkAsReceivedMutationHookResult = ReturnType<typeof useMarkAsReceivedMutation>;
export type MarkAsReceivedMutationResult = Apollo.MutationResult<MarkAsReceivedMutation>;
export type MarkAsReceivedMutationOptions = Apollo.BaseMutationOptions<MarkAsReceivedMutation, MarkAsReceivedMutationVariables>;
export const NewMessageDocument = gql`
    subscription newMessage($currentUserId: String!) {
  newMessage(currentUserId: $currentUserId) {
    targetId
    conversationId
    message {
      ...MessageParts
    }
  }
}
    ${MessagePartsFragmentDoc}`;

/**
 * __useNewMessageSubscription__
 *
 * To run a query within a React component, call `useNewMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessageSubscription({
 *   variables: {
 *      currentUserId: // value for 'currentUserId'
 *   },
 * });
 */
export function useNewMessageSubscription(baseOptions: Apollo.SubscriptionHookOptions<NewMessageSubscription, NewMessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewMessageSubscription, NewMessageSubscriptionVariables>(NewMessageDocument, options);
      }
export type NewMessageSubscriptionHookResult = ReturnType<typeof useNewMessageSubscription>;
export type NewMessageSubscriptionResult = Apollo.SubscriptionResult<NewMessageSubscription>;