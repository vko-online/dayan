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
  Decimal: any;
  Upload: any;
};

export type Activity = {
  __typename?: 'Activity';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type ActivityCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
};

export type ActivityCreateManyUserInputEnvelope = {
  data: Array<ActivityCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActivityCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ActivityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ActivityCreateWithoutUserInput>>;
  createMany?: InputMaybe<ActivityCreateManyUserInputEnvelope>;
};

export type ActivityCreateOrConnectWithoutUserInput = {
  create: ActivityCreateWithoutUserInput;
  where: ActivityWhereUniqueInput;
};

export type ActivityCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
};

export type ActivityListRelationFilter = {
  every?: InputMaybe<ActivityWhereInput>;
  none?: InputMaybe<ActivityWhereInput>;
  some?: InputMaybe<ActivityWhereInput>;
};

export type ActivityOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ActivityOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ActivityScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Text = 'text',
  UserId = 'userId'
}

export type ActivityScalarWhereInput = {
  AND?: InputMaybe<Array<ActivityScalarWhereInput>>;
  NOT?: InputMaybe<Array<ActivityScalarWhereInput>>;
  OR?: InputMaybe<Array<ActivityScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ActivityUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActivityUpdateManyWithWhereWithoutUserInput = {
  data: ActivityUpdateManyMutationInput;
  where: ActivityScalarWhereInput;
};

export type ActivityUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ActivityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ActivityCreateWithoutUserInput>>;
  createMany?: InputMaybe<ActivityCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ActivityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ActivityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ActivityWhereUniqueInput>>;
  set?: InputMaybe<Array<ActivityWhereUniqueInput>>;
  update?: InputMaybe<Array<ActivityUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ActivityUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ActivityUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ActivityUpdateWithWhereUniqueWithoutUserInput = {
  data: ActivityUpdateWithoutUserInput;
  where: ActivityWhereUniqueInput;
};

export type ActivityUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActivityUpsertWithWhereUniqueWithoutUserInput = {
  create: ActivityCreateWithoutUserInput;
  update: ActivityUpdateWithoutUserInput;
  where: ActivityWhereUniqueInput;
};

export type ActivityWhereInput = {
  AND?: InputMaybe<Array<ActivityWhereInput>>;
  NOT?: InputMaybe<Array<ActivityWhereInput>>;
  OR?: InputMaybe<Array<ActivityWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ActivityWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateConversation = {
  __typename?: 'AggregateConversation';
  _count?: Maybe<ConversationCountAggregate>;
  _max?: Maybe<ConversationMaxAggregate>;
  _min?: Maybe<ConversationMinAggregate>;
};

export type AggregateEvent = {
  __typename?: 'AggregateEvent';
  _avg?: Maybe<EventAvgAggregate>;
  _count?: Maybe<EventCountAggregate>;
  _max?: Maybe<EventMaxAggregate>;
  _min?: Maybe<EventMinAggregate>;
  _sum?: Maybe<EventSumAggregate>;
};

export type AggregateFile = {
  __typename?: 'AggregateFile';
  _avg?: Maybe<FileAvgAggregate>;
  _count?: Maybe<FileCountAggregate>;
  _max?: Maybe<FileMaxAggregate>;
  _min?: Maybe<FileMinAggregate>;
  _sum?: Maybe<FileSumAggregate>;
};

export type AggregateInteraction = {
  __typename?: 'AggregateInteraction';
  _count?: Maybe<InteractionCountAggregate>;
  _max?: Maybe<InteractionMaxAggregate>;
  _min?: Maybe<InteractionMinAggregate>;
};

export type AggregateMessage = {
  __typename?: 'AggregateMessage';
  _count?: Maybe<MessageCountAggregate>;
  _max?: Maybe<MessageMaxAggregate>;
  _min?: Maybe<MessageMinAggregate>;
};

export type AggregatePool = {
  __typename?: 'AggregatePool';
  _count?: Maybe<PoolCountAggregate>;
  _max?: Maybe<PoolMaxAggregate>;
  _min?: Maybe<PoolMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Float'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
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
  _count?: Maybe<ConversationCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  lastMessageAuthor?: Maybe<Scalars['String']>;
  lastMessageContent?: Maybe<Scalars['String']>;
  lastMessageDate?: Maybe<Scalars['DateTime']>;
  members: Array<User>;
  messages: Array<Message>;
};


export type ConversationMembersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type ConversationMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};

export type ConversationCount = {
  __typename?: 'ConversationCount';
  members: Scalars['Int'];
  messages: Scalars['Int'];
};

export type ConversationCountAggregate = {
  __typename?: 'ConversationCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  lastMessageAuthor: Scalars['Int'];
  lastMessageContent: Scalars['Int'];
  lastMessageDate: Scalars['Int'];
};

export type ConversationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastMessageAuthor?: InputMaybe<SortOrder>;
  lastMessageContent?: InputMaybe<SortOrder>;
  lastMessageDate?: InputMaybe<SortOrder>;
};

export type ConversationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  lastMessageAuthor?: InputMaybe<Scalars['String']>;
  lastMessageContent?: InputMaybe<Scalars['String']>;
  lastMessageDate?: InputMaybe<Scalars['DateTime']>;
  members?: InputMaybe<UserCreateNestedManyWithoutConversationsInput>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutConversationInput>;
};

export type ConversationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  lastMessageAuthor?: InputMaybe<Scalars['String']>;
  lastMessageContent?: InputMaybe<Scalars['String']>;
  lastMessageDate?: InputMaybe<Scalars['DateTime']>;
};

export type ConversationCreateNestedManyWithoutMembersInput = {
  connect?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConversationCreateOrConnectWithoutMembersInput>>;
  create?: InputMaybe<Array<ConversationCreateWithoutMembersInput>>;
};

export type ConversationCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<ConversationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConversationCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<ConversationCreateWithoutMessagesInput>;
};

export type ConversationCreateOrConnectWithoutMembersInput = {
  create: ConversationCreateWithoutMembersInput;
  where: ConversationWhereUniqueInput;
};

export type ConversationCreateOrConnectWithoutMessagesInput = {
  create: ConversationCreateWithoutMessagesInput;
  where: ConversationWhereUniqueInput;
};

export type ConversationCreateWithoutMembersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  lastMessageAuthor?: InputMaybe<Scalars['String']>;
  lastMessageContent?: InputMaybe<Scalars['String']>;
  lastMessageDate?: InputMaybe<Scalars['DateTime']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutConversationInput>;
};

export type ConversationCreateWithoutMessagesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  lastMessageAuthor?: InputMaybe<Scalars['String']>;
  lastMessageContent?: InputMaybe<Scalars['String']>;
  lastMessageDate?: InputMaybe<Scalars['DateTime']>;
  members?: InputMaybe<UserCreateNestedManyWithoutConversationsInput>;
};

export type ConversationGroupBy = {
  __typename?: 'ConversationGroupBy';
  _count?: Maybe<ConversationCountAggregate>;
  _max?: Maybe<ConversationMaxAggregate>;
  _min?: Maybe<ConversationMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  lastMessageAuthor?: Maybe<Scalars['String']>;
  lastMessageContent?: Maybe<Scalars['String']>;
  lastMessageDate?: Maybe<Scalars['DateTime']>;
};

export type ConversationInput = {
  content: Scalars['String'];
  conversationId: Scalars['String'];
};

export type ConversationListRelationFilter = {
  every?: InputMaybe<ConversationWhereInput>;
  none?: InputMaybe<ConversationWhereInput>;
  some?: InputMaybe<ConversationWhereInput>;
};

export type ConversationMaxAggregate = {
  __typename?: 'ConversationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  lastMessageAuthor?: Maybe<Scalars['String']>;
  lastMessageContent?: Maybe<Scalars['String']>;
  lastMessageDate?: Maybe<Scalars['DateTime']>;
};

export type ConversationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastMessageAuthor?: InputMaybe<SortOrder>;
  lastMessageContent?: InputMaybe<SortOrder>;
  lastMessageDate?: InputMaybe<SortOrder>;
};

export type ConversationMinAggregate = {
  __typename?: 'ConversationMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  lastMessageAuthor?: Maybe<Scalars['String']>;
  lastMessageContent?: Maybe<Scalars['String']>;
  lastMessageDate?: Maybe<Scalars['DateTime']>;
};

export type ConversationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastMessageAuthor?: InputMaybe<SortOrder>;
  lastMessageContent?: InputMaybe<SortOrder>;
  lastMessageDate?: InputMaybe<SortOrder>;
};

export type ConversationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ConversationOrderByWithAggregationInput = {
  _count?: InputMaybe<ConversationCountOrderByAggregateInput>;
  _max?: InputMaybe<ConversationMaxOrderByAggregateInput>;
  _min?: InputMaybe<ConversationMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastMessageAuthor?: InputMaybe<SortOrder>;
  lastMessageContent?: InputMaybe<SortOrder>;
  lastMessageDate?: InputMaybe<SortOrder>;
};

export type ConversationOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastMessageAuthor?: InputMaybe<SortOrder>;
  lastMessageContent?: InputMaybe<SortOrder>;
  lastMessageDate?: InputMaybe<SortOrder>;
  members?: InputMaybe<UserOrderByRelationAggregateInput>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
};

export type ConversationRelationFilter = {
  is?: InputMaybe<ConversationWhereInput>;
  isNot?: InputMaybe<ConversationWhereInput>;
};

export enum ConversationScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  LastMessageAuthor = 'lastMessageAuthor',
  LastMessageContent = 'lastMessageContent',
  LastMessageDate = 'lastMessageDate'
}

export type ConversationScalarWhereInput = {
  AND?: InputMaybe<Array<ConversationScalarWhereInput>>;
  NOT?: InputMaybe<Array<ConversationScalarWhereInput>>;
  OR?: InputMaybe<Array<ConversationScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  lastMessageAuthor?: InputMaybe<StringNullableFilter>;
  lastMessageContent?: InputMaybe<StringNullableFilter>;
  lastMessageDate?: InputMaybe<DateTimeNullableFilter>;
};

export type ConversationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ConversationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ConversationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ConversationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastMessageAuthor?: InputMaybe<StringNullableWithAggregatesFilter>;
  lastMessageContent?: InputMaybe<StringNullableWithAggregatesFilter>;
  lastMessageDate?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
};

export type ConversationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastMessageAuthor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutConversationsNestedInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutConversationNestedInput>;
};

export type ConversationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastMessageAuthor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ConversationUpdateManyWithWhereWithoutMembersInput = {
  data: ConversationUpdateManyMutationInput;
  where: ConversationScalarWhereInput;
};

export type ConversationUpdateManyWithoutMembersNestedInput = {
  connect?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ConversationCreateOrConnectWithoutMembersInput>>;
  create?: InputMaybe<Array<ConversationCreateWithoutMembersInput>>;
  delete?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ConversationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  set?: InputMaybe<Array<ConversationWhereUniqueInput>>;
  update?: InputMaybe<Array<ConversationUpdateWithWhereUniqueWithoutMembersInput>>;
  updateMany?: InputMaybe<Array<ConversationUpdateManyWithWhereWithoutMembersInput>>;
  upsert?: InputMaybe<Array<ConversationUpsertWithWhereUniqueWithoutMembersInput>>;
};

export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
  connect?: InputMaybe<ConversationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ConversationCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<ConversationCreateWithoutMessagesInput>;
  update?: InputMaybe<ConversationUpdateWithoutMessagesInput>;
  upsert?: InputMaybe<ConversationUpsertWithoutMessagesInput>;
};

export type ConversationUpdateWithWhereUniqueWithoutMembersInput = {
  data: ConversationUpdateWithoutMembersInput;
  where: ConversationWhereUniqueInput;
};

export type ConversationUpdateWithoutMembersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastMessageAuthor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutConversationNestedInput>;
};

export type ConversationUpdateWithoutMessagesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastMessageAuthor?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageContent?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastMessageDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutConversationsNestedInput>;
};

export type ConversationUpsertWithWhereUniqueWithoutMembersInput = {
  create: ConversationCreateWithoutMembersInput;
  update: ConversationUpdateWithoutMembersInput;
  where: ConversationWhereUniqueInput;
};

export type ConversationUpsertWithoutMessagesInput = {
  create: ConversationCreateWithoutMessagesInput;
  update: ConversationUpdateWithoutMessagesInput;
};

export type ConversationWhereInput = {
  AND?: InputMaybe<Array<ConversationWhereInput>>;
  NOT?: InputMaybe<Array<ConversationWhereInput>>;
  OR?: InputMaybe<Array<ConversationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  lastMessageAuthor?: InputMaybe<StringNullableFilter>;
  lastMessageContent?: InputMaybe<StringNullableFilter>;
  lastMessageDate?: InputMaybe<DateTimeNullableFilter>;
  members?: InputMaybe<UserListRelationFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
};

export type ConversationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']>;
  divide?: InputMaybe<Scalars['Decimal']>;
  increment?: InputMaybe<Scalars['Decimal']>;
  multiply?: InputMaybe<Scalars['Decimal']>;
  set?: InputMaybe<Scalars['Decimal']>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export enum Decision {
  Dislike = 'DISLIKE',
  Like = 'LIKE',
  Skip = 'SKIP'
}

export type DiscoverInput = {
  ageEnd?: InputMaybe<Scalars['Float']>;
  ageStart?: InputMaybe<Scalars['Float']>;
  distance?: InputMaybe<Scalars['Float']>;
  online?: InputMaybe<Scalars['Boolean']>;
};

export type EnumDecisionFieldUpdateOperationsInput = {
  set?: InputMaybe<Decision>;
};

export type EnumDecisionFilter = {
  equals?: InputMaybe<Decision>;
  in?: InputMaybe<Array<Decision>>;
  not?: InputMaybe<NestedEnumDecisionFilter>;
  notIn?: InputMaybe<Array<Decision>>;
};

export type EnumDecisionWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumDecisionFilter>;
  _min?: InputMaybe<NestedEnumDecisionFilter>;
  equals?: InputMaybe<Decision>;
  in?: InputMaybe<Array<Decision>>;
  not?: InputMaybe<NestedEnumDecisionWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Decision>>;
};

export type EnumEventActivityNullableListFilter = {
  equals?: InputMaybe<Array<EventActivity>>;
  has?: InputMaybe<EventActivity>;
  hasEvery?: InputMaybe<Array<EventActivity>>;
  hasSome?: InputMaybe<Array<EventActivity>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumEventTimeNullableListFilter = {
  equals?: InputMaybe<Array<EventTime>>;
  has?: InputMaybe<EventTime>;
  hasEvery?: InputMaybe<Array<EventTime>>;
  hasSome?: InputMaybe<Array<EventTime>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumEventTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<EventType>;
};

export type EnumEventTypeFilter = {
  equals?: InputMaybe<EventType>;
  in?: InputMaybe<Array<EventType>>;
  not?: InputMaybe<NestedEnumEventTypeFilter>;
  notIn?: InputMaybe<Array<EventType>>;
};

export type EnumEventTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumEventTypeFilter>;
  _min?: InputMaybe<NestedEnumEventTypeFilter>;
  equals?: InputMaybe<EventType>;
  in?: InputMaybe<Array<EventType>>;
  not?: InputMaybe<NestedEnumEventTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<EventType>>;
};

export type EnumEventWeekdayNullableListFilter = {
  equals?: InputMaybe<Array<EventWeekday>>;
  has?: InputMaybe<EventWeekday>;
  hasEvery?: InputMaybe<Array<EventWeekday>>;
  hasSome?: InputMaybe<Array<EventWeekday>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumIdentityNullableFilter = {
  equals?: InputMaybe<Identity>;
  in?: InputMaybe<Array<Identity>>;
  not?: InputMaybe<NestedEnumIdentityNullableFilter>;
  notIn?: InputMaybe<Array<Identity>>;
};

export type EnumIdentityNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumIdentityNullableFilter>;
  _min?: InputMaybe<NestedEnumIdentityNullableFilter>;
  equals?: InputMaybe<Identity>;
  in?: InputMaybe<Array<Identity>>;
  not?: InputMaybe<NestedEnumIdentityNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Identity>>;
};

export type EnumNotificationTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<NotificationType>;
};

export type EnumNotificationTypeFilter = {
  equals?: InputMaybe<NotificationType>;
  in?: InputMaybe<Array<NotificationType>>;
  not?: InputMaybe<NestedEnumNotificationTypeFilter>;
  notIn?: InputMaybe<Array<NotificationType>>;
};

export type EnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumRoleNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumRoleNullableFilter>;
  _min?: InputMaybe<NestedEnumRoleNullableFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type Event = {
  __typename?: 'Event';
  _count?: Maybe<EventCount>;
  address: Scalars['String'];
  archived: Scalars['Boolean'];
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  id: Scalars['String'];
  latitude: Scalars['Decimal'];
  longitude: Scalars['Decimal'];
  participants: Array<User>;
  type: EventType;
};


export type EventParticipantsArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum EventActivity {
  Cinema = 'CINEMA',
  Drinking = 'DRINKING',
  Food = 'FOOD',
  JustChatting = 'JUST_CHATTING',
  Other = 'OTHER',
  Pub = 'PUB'
}

export type EventAvgAggregate = {
  __typename?: 'EventAvgAggregate';
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
};

export type EventAvgOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type EventCount = {
  __typename?: 'EventCount';
  participants: Scalars['Int'];
};

export type EventCountAggregate = {
  __typename?: 'EventCountAggregate';
  _all: Scalars['Int'];
  address: Scalars['Int'];
  archived: Scalars['Int'];
  city: Scalars['Int'];
  country: Scalars['Int'];
  createdAt: Scalars['Int'];
  date: Scalars['Int'];
  id: Scalars['Int'];
  latitude: Scalars['Int'];
  longitude: Scalars['Int'];
  type: Scalars['Int'];
};

export type EventCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  archived?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type EventCreateInput = {
  address: Scalars['String'];
  archived: Scalars['Boolean'];
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  latitude: Scalars['Decimal'];
  longitude: Scalars['Decimal'];
  participants?: InputMaybe<UserCreateNestedManyWithoutEventsInput>;
  type: EventType;
};

export type EventCreateManyInput = {
  address: Scalars['String'];
  archived: Scalars['Boolean'];
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  latitude: Scalars['Decimal'];
  longitude: Scalars['Decimal'];
  type: EventType;
};

export type EventCreateNestedManyWithoutParticipantsInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutParticipantsInput>>;
  create?: InputMaybe<Array<EventCreateWithoutParticipantsInput>>;
};

export type EventCreateOrConnectWithoutParticipantsInput = {
  create: EventCreateWithoutParticipantsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateWithoutParticipantsInput = {
  address: Scalars['String'];
  archived: Scalars['Boolean'];
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  latitude: Scalars['Decimal'];
  longitude: Scalars['Decimal'];
  type: EventType;
};

export type EventGroupBy = {
  __typename?: 'EventGroupBy';
  _avg?: Maybe<EventAvgAggregate>;
  _count?: Maybe<EventCountAggregate>;
  _max?: Maybe<EventMaxAggregate>;
  _min?: Maybe<EventMinAggregate>;
  _sum?: Maybe<EventSumAggregate>;
  address: Scalars['String'];
  archived: Scalars['Boolean'];
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  id: Scalars['String'];
  latitude: Scalars['Decimal'];
  longitude: Scalars['Decimal'];
  type: EventType;
};

export type EventListRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventMaxAggregate = {
  __typename?: 'EventMaxAggregate';
  address?: Maybe<Scalars['String']>;
  archived?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
  type?: Maybe<EventType>;
};

export type EventMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  archived?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type EventMinAggregate = {
  __typename?: 'EventMinAggregate';
  address?: Maybe<Scalars['String']>;
  archived?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
  type?: Maybe<EventType>;
};

export type EventMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  archived?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type EventOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EventOrderByWithAggregationInput = {
  _avg?: InputMaybe<EventAvgOrderByAggregateInput>;
  _count?: InputMaybe<EventCountOrderByAggregateInput>;
  _max?: InputMaybe<EventMaxOrderByAggregateInput>;
  _min?: InputMaybe<EventMinOrderByAggregateInput>;
  _sum?: InputMaybe<EventSumOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  archived?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type EventOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  archived?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  participants?: InputMaybe<UserOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
};

export enum EventScalarFieldEnum {
  Address = 'address',
  Archived = 'archived',
  City = 'city',
  Country = 'country',
  CreatedAt = 'createdAt',
  Date = 'date',
  Id = 'id',
  Latitude = 'latitude',
  Longitude = 'longitude',
  Type = 'type'
}

export type EventScalarWhereInput = {
  AND?: InputMaybe<Array<EventScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventScalarWhereInput>>;
  OR?: InputMaybe<Array<EventScalarWhereInput>>;
  address?: InputMaybe<StringFilter>;
  archived?: InputMaybe<BoolFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<DecimalFilter>;
  longitude?: InputMaybe<DecimalFilter>;
  type?: InputMaybe<EnumEventTypeFilter>;
};

export type EventScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EventScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EventScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EventScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringWithAggregatesFilter>;
  archived?: InputMaybe<BoolWithAggregatesFilter>;
  city?: InputMaybe<StringWithAggregatesFilter>;
  country?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  date?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  latitude?: InputMaybe<DecimalWithAggregatesFilter>;
  longitude?: InputMaybe<DecimalWithAggregatesFilter>;
  type?: InputMaybe<EnumEventTypeWithAggregatesFilter>;
};

export type EventSumAggregate = {
  __typename?: 'EventSumAggregate';
  latitude?: Maybe<Scalars['Decimal']>;
  longitude?: Maybe<Scalars['Decimal']>;
};

export type EventSumOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export enum EventTime {
  Evening = 'EVENING',
  Morning = 'MORNING',
  Night = 'NIGHT'
}

export enum EventType {
  BlindDate = 'BLIND_DATE',
  SpeedDate = 'SPEED_DATE'
}

export type EventUpdateInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  longitude?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  participants?: InputMaybe<UserUpdateManyWithoutEventsNestedInput>;
  type?: InputMaybe<EnumEventTypeFieldUpdateOperationsInput>;
};

export type EventUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  longitude?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumEventTypeFieldUpdateOperationsInput>;
};

export type EventUpdateManyWithWhereWithoutParticipantsInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithoutParticipantsNestedInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutParticipantsInput>>;
  create?: InputMaybe<Array<EventCreateWithoutParticipantsInput>>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutParticipantsInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutParticipantsInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutParticipantsInput>>;
};

export type EventUpdateWithWhereUniqueWithoutParticipantsInput = {
  data: EventUpdateWithoutParticipantsInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithoutParticipantsInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  archived?: InputMaybe<BoolFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  longitude?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumEventTypeFieldUpdateOperationsInput>;
};

export type EventUpsertWithWhereUniqueWithoutParticipantsInput = {
  create: EventCreateWithoutParticipantsInput;
  update: EventUpdateWithoutParticipantsInput;
  where: EventWhereUniqueInput;
};

export enum EventWeekday {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  address?: InputMaybe<StringFilter>;
  archived?: InputMaybe<BoolFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<DecimalFilter>;
  longitude?: InputMaybe<DecimalFilter>;
  participants?: InputMaybe<UserListRelationFilter>;
  type?: InputMaybe<EnumEventTypeFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Feedback = {
  __typename?: 'Feedback';
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  text: Scalars['String'];
  type: FeedbackType;
};

export type FeedbackInput = {
  email?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  type: FeedbackType;
};

export enum FeedbackType {
  Bug = 'BUG',
  Feature = 'FEATURE',
  Idea = 'IDEA'
}

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type FileAvgAggregate = {
  __typename?: 'FileAvgAggregate';
  size?: Maybe<Scalars['Float']>;
};

export type FileAvgOrderByAggregateInput = {
  size?: InputMaybe<SortOrder>;
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  path: Scalars['Int'];
  size: Scalars['Int'];
  type: Scalars['Int'];
  userId: Scalars['Int'];
};

export type FileCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type FileCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  user?: InputMaybe<UserCreateNestedOneWithoutImagesInput>;
};

export type FileCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type FileCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
};

export type FileCreateManyUserInputEnvelope = {
  data: Array<FileCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FileCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
  createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
};

export type FileCreateOrConnectWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
};

export type FileGroupBy = {
  __typename?: 'FileGroupBy';
  _avg?: Maybe<FileAvgAggregate>;
  _count?: Maybe<FileCountAggregate>;
  _max?: Maybe<FileMaxAggregate>;
  _min?: Maybe<FileMinAggregate>;
  _sum?: Maybe<FileSumAggregate>;
  id: Scalars['String'];
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};

export type FileListRelationFilter = {
  every?: InputMaybe<FileWhereInput>;
  none?: InputMaybe<FileWhereInput>;
  some?: InputMaybe<FileWhereInput>;
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type FileMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type FileMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type FileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FileOrderByWithAggregationInput = {
  _avg?: InputMaybe<FileAvgOrderByAggregateInput>;
  _count?: InputMaybe<FileCountOrderByAggregateInput>;
  _max?: InputMaybe<FileMaxOrderByAggregateInput>;
  _min?: InputMaybe<FileMinOrderByAggregateInput>;
  _sum?: InputMaybe<FileSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type FileOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum FileScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Path = 'path',
  Size = 'size',
  Type = 'type',
  UserId = 'userId'
}

export type FileScalarWhereInput = {
  AND?: InputMaybe<Array<FileScalarWhereInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereInput>>;
  OR?: InputMaybe<Array<FileScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type FileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  path?: InputMaybe<StringWithAggregatesFilter>;
  size?: InputMaybe<IntWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type FileSumAggregate = {
  __typename?: 'FileSumAggregate';
  size?: Maybe<Scalars['Int']>;
};

export type FileSumOrderByAggregateInput = {
  size?: InputMaybe<SortOrder>;
};

export type FileUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutImagesNestedInput>;
};

export type FileUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileUpdateManyWithWhereWithoutUserInput = {
  data: FileUpdateManyMutationInput;
  where: FileScalarWhereInput;
};

export type FileUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
  createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<FileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
  update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FileUpdateWithWhereUniqueWithoutUserInput = {
  data: FileUpdateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  path?: InputMaybe<StringFieldUpdateOperationsInput>;
  size?: InputMaybe<IntFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileUpsertWithWhereUniqueWithoutUserInput = {
  create: FileCreateWithoutUserInput;
  update: FileUpdateWithoutUserInput;
  where: FileWhereUniqueInput;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type FileWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum Identity {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Interaction = {
  __typename?: 'Interaction';
  author: User;
  authorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  decision: Decision;
  id: Scalars['String'];
  matched: Scalars['Boolean'];
  target: User;
  targetId: Scalars['String'];
};

export type InteractionCountAggregate = {
  __typename?: 'InteractionCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  createdAt: Scalars['Int'];
  decision: Scalars['Int'];
  id: Scalars['Int'];
  matched: Scalars['Int'];
  targetId: Scalars['Int'];
};

export type InteractionCountOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  decision?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matched?: InputMaybe<SortOrder>;
  targetId?: InputMaybe<SortOrder>;
};

export type InteractionCreateInput = {
  author: UserCreateNestedOneWithoutInteractionsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decision: Decision;
  id?: InputMaybe<Scalars['String']>;
  matched?: InputMaybe<Scalars['Boolean']>;
  target: UserCreateNestedOneWithoutInteractorsInput;
};

export type InteractionCreateManyAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decision: Decision;
  id?: InputMaybe<Scalars['String']>;
  matched?: InputMaybe<Scalars['Boolean']>;
  targetId: Scalars['String'];
};

export type InteractionCreateManyAuthorInputEnvelope = {
  data: Array<InteractionCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InteractionCreateManyInput = {
  authorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decision: Decision;
  id?: InputMaybe<Scalars['String']>;
  matched?: InputMaybe<Scalars['Boolean']>;
  targetId: Scalars['String'];
};

export type InteractionCreateManyTargetInput = {
  authorId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decision: Decision;
  id?: InputMaybe<Scalars['String']>;
  matched?: InputMaybe<Scalars['Boolean']>;
};

export type InteractionCreateManyTargetInputEnvelope = {
  data: Array<InteractionCreateManyTargetInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type InteractionCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InteractionCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<InteractionCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<InteractionCreateManyAuthorInputEnvelope>;
};

export type InteractionCreateNestedManyWithoutTargetInput = {
  connect?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InteractionCreateOrConnectWithoutTargetInput>>;
  create?: InputMaybe<Array<InteractionCreateWithoutTargetInput>>;
  createMany?: InputMaybe<InteractionCreateManyTargetInputEnvelope>;
};

export type InteractionCreateOrConnectWithoutAuthorInput = {
  create: InteractionCreateWithoutAuthorInput;
  where: InteractionWhereUniqueInput;
};

export type InteractionCreateOrConnectWithoutTargetInput = {
  create: InteractionCreateWithoutTargetInput;
  where: InteractionWhereUniqueInput;
};

export type InteractionCreateWithoutAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decision: Decision;
  id?: InputMaybe<Scalars['String']>;
  matched?: InputMaybe<Scalars['Boolean']>;
  target: UserCreateNestedOneWithoutInteractorsInput;
};

export type InteractionCreateWithoutTargetInput = {
  author: UserCreateNestedOneWithoutInteractionsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decision: Decision;
  id?: InputMaybe<Scalars['String']>;
  matched?: InputMaybe<Scalars['Boolean']>;
};

export type InteractionGroupBy = {
  __typename?: 'InteractionGroupBy';
  _count?: Maybe<InteractionCountAggregate>;
  _max?: Maybe<InteractionMaxAggregate>;
  _min?: Maybe<InteractionMinAggregate>;
  authorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  decision: Decision;
  id: Scalars['String'];
  matched: Scalars['Boolean'];
  targetId: Scalars['String'];
};

export type InteractionInput = {
  decision: Decision;
  targetId: Scalars['String'];
};

export type InteractionListRelationFilter = {
  every?: InputMaybe<InteractionWhereInput>;
  none?: InputMaybe<InteractionWhereInput>;
  some?: InputMaybe<InteractionWhereInput>;
};

export type InteractionMaxAggregate = {
  __typename?: 'InteractionMaxAggregate';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  decision?: Maybe<Decision>;
  id?: Maybe<Scalars['String']>;
  matched?: Maybe<Scalars['Boolean']>;
  targetId?: Maybe<Scalars['String']>;
};

export type InteractionMaxOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  decision?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matched?: InputMaybe<SortOrder>;
  targetId?: InputMaybe<SortOrder>;
};

export type InteractionMinAggregate = {
  __typename?: 'InteractionMinAggregate';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  decision?: Maybe<Decision>;
  id?: Maybe<Scalars['String']>;
  matched?: Maybe<Scalars['Boolean']>;
  targetId?: Maybe<Scalars['String']>;
};

export type InteractionMinOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  decision?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matched?: InputMaybe<SortOrder>;
  targetId?: InputMaybe<SortOrder>;
};

export type InteractionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type InteractionOrderByWithAggregationInput = {
  _count?: InputMaybe<InteractionCountOrderByAggregateInput>;
  _max?: InputMaybe<InteractionMaxOrderByAggregateInput>;
  _min?: InputMaybe<InteractionMinOrderByAggregateInput>;
  authorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  decision?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matched?: InputMaybe<SortOrder>;
  targetId?: InputMaybe<SortOrder>;
};

export type InteractionOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  decision?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  matched?: InputMaybe<SortOrder>;
  target?: InputMaybe<UserOrderByWithRelationInput>;
  targetId?: InputMaybe<SortOrder>;
};

export enum InteractionScalarFieldEnum {
  AuthorId = 'authorId',
  CreatedAt = 'createdAt',
  Decision = 'decision',
  Id = 'id',
  Matched = 'matched',
  TargetId = 'targetId'
}

export type InteractionScalarWhereInput = {
  AND?: InputMaybe<Array<InteractionScalarWhereInput>>;
  NOT?: InputMaybe<Array<InteractionScalarWhereInput>>;
  OR?: InputMaybe<Array<InteractionScalarWhereInput>>;
  authorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  decision?: InputMaybe<EnumDecisionFilter>;
  id?: InputMaybe<StringFilter>;
  matched?: InputMaybe<BoolFilter>;
  targetId?: InputMaybe<StringFilter>;
};

export type InteractionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InteractionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<InteractionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<InteractionScalarWhereWithAggregatesInput>>;
  authorId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  decision?: InputMaybe<EnumDecisionWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  matched?: InputMaybe<BoolWithAggregatesFilter>;
  targetId?: InputMaybe<StringWithAggregatesFilter>;
};

export type InteractionUpdateInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutInteractionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decision?: InputMaybe<EnumDecisionFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  matched?: InputMaybe<BoolFieldUpdateOperationsInput>;
  target?: InputMaybe<UserUpdateOneRequiredWithoutInteractorsNestedInput>;
};

export type InteractionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decision?: InputMaybe<EnumDecisionFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  matched?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type InteractionUpdateManyWithWhereWithoutAuthorInput = {
  data: InteractionUpdateManyMutationInput;
  where: InteractionScalarWhereInput;
};

export type InteractionUpdateManyWithWhereWithoutTargetInput = {
  data: InteractionUpdateManyMutationInput;
  where: InteractionScalarWhereInput;
};

export type InteractionUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InteractionCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<InteractionCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<InteractionCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InteractionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  set?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  update?: InputMaybe<Array<InteractionUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<InteractionUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<InteractionUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type InteractionUpdateManyWithoutTargetNestedInput = {
  connect?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InteractionCreateOrConnectWithoutTargetInput>>;
  create?: InputMaybe<Array<InteractionCreateWithoutTargetInput>>;
  createMany?: InputMaybe<InteractionCreateManyTargetInputEnvelope>;
  delete?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InteractionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  set?: InputMaybe<Array<InteractionWhereUniqueInput>>;
  update?: InputMaybe<Array<InteractionUpdateWithWhereUniqueWithoutTargetInput>>;
  updateMany?: InputMaybe<Array<InteractionUpdateManyWithWhereWithoutTargetInput>>;
  upsert?: InputMaybe<Array<InteractionUpsertWithWhereUniqueWithoutTargetInput>>;
};

export type InteractionUpdateWithWhereUniqueWithoutAuthorInput = {
  data: InteractionUpdateWithoutAuthorInput;
  where: InteractionWhereUniqueInput;
};

export type InteractionUpdateWithWhereUniqueWithoutTargetInput = {
  data: InteractionUpdateWithoutTargetInput;
  where: InteractionWhereUniqueInput;
};

export type InteractionUpdateWithoutAuthorInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decision?: InputMaybe<EnumDecisionFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  matched?: InputMaybe<BoolFieldUpdateOperationsInput>;
  target?: InputMaybe<UserUpdateOneRequiredWithoutInteractorsNestedInput>;
};

export type InteractionUpdateWithoutTargetInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutInteractionsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decision?: InputMaybe<EnumDecisionFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  matched?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type InteractionUpsertWithWhereUniqueWithoutAuthorInput = {
  create: InteractionCreateWithoutAuthorInput;
  update: InteractionUpdateWithoutAuthorInput;
  where: InteractionWhereUniqueInput;
};

export type InteractionUpsertWithWhereUniqueWithoutTargetInput = {
  create: InteractionCreateWithoutTargetInput;
  update: InteractionUpdateWithoutTargetInput;
  where: InteractionWhereUniqueInput;
};

export type InteractionWhereInput = {
  AND?: InputMaybe<Array<InteractionWhereInput>>;
  NOT?: InputMaybe<Array<InteractionWhereInput>>;
  OR?: InputMaybe<Array<InteractionWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  decision?: InputMaybe<EnumDecisionFilter>;
  id?: InputMaybe<StringFilter>;
  matched?: InputMaybe<BoolFilter>;
  target?: InputMaybe<UserRelationFilter>;
  targetId?: InputMaybe<StringFilter>;
};

export type InteractionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type LiveUser = {
  __typename?: 'LiveUser';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  online: Scalars['Boolean'];
};

export type Message = {
  __typename?: 'Message';
  author: User;
  authorId: Scalars['String'];
  content: Scalars['String'];
  conversation: Conversation;
  conversationId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  readByIds: Array<Scalars['String']>;
  receivedByIds: Array<Scalars['String']>;
};

export type MessageCountAggregate = {
  __typename?: 'MessageCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  content: Scalars['Int'];
  conversationId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  readByIds: Scalars['Int'];
  receivedByIds: Scalars['Int'];
};

export type MessageCountOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  readByIds?: InputMaybe<SortOrder>;
  receivedByIds?: InputMaybe<SortOrder>;
};

export type MessageCreateInput = {
  author: UserCreateNestedOneWithoutMessagesInput;
  content: Scalars['String'];
  conversation: ConversationCreateNestedOneWithoutMessagesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  readByIds?: InputMaybe<MessageCreatereadByIdsInput>;
  receivedByIds?: InputMaybe<MessageCreatereceivedByIdsInput>;
};

export type MessageCreateManyAuthorInput = {
  content: Scalars['String'];
  conversationId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  readByIds?: InputMaybe<MessageCreatereadByIdsInput>;
  receivedByIds?: InputMaybe<MessageCreatereceivedByIdsInput>;
};

export type MessageCreateManyAuthorInputEnvelope = {
  data: Array<MessageCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateManyConversationInput = {
  authorId: Scalars['String'];
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  readByIds?: InputMaybe<MessageCreatereadByIdsInput>;
  receivedByIds?: InputMaybe<MessageCreatereceivedByIdsInput>;
};

export type MessageCreateManyConversationInputEnvelope = {
  data: Array<MessageCreateManyConversationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateManyInput = {
  authorId: Scalars['String'];
  content: Scalars['String'];
  conversationId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  readByIds?: InputMaybe<MessageCreatereadByIdsInput>;
  receivedByIds?: InputMaybe<MessageCreatereceivedByIdsInput>;
};

export type MessageCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<MessageCreateManyAuthorInputEnvelope>;
};

export type MessageCreateNestedManyWithoutConversationInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutConversationInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutConversationInput>>;
  createMany?: InputMaybe<MessageCreateManyConversationInputEnvelope>;
};

export type MessageCreateOrConnectWithoutAuthorInput = {
  create: MessageCreateWithoutAuthorInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateOrConnectWithoutConversationInput = {
  create: MessageCreateWithoutConversationInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateWithoutAuthorInput = {
  content: Scalars['String'];
  conversation: ConversationCreateNestedOneWithoutMessagesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  readByIds?: InputMaybe<MessageCreatereadByIdsInput>;
  receivedByIds?: InputMaybe<MessageCreatereceivedByIdsInput>;
};

export type MessageCreateWithoutConversationInput = {
  author: UserCreateNestedOneWithoutMessagesInput;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  readByIds?: InputMaybe<MessageCreatereadByIdsInput>;
  receivedByIds?: InputMaybe<MessageCreatereceivedByIdsInput>;
};

export type MessageCreatereadByIdsInput = {
  set: Array<Scalars['String']>;
};

export type MessageCreatereceivedByIdsInput = {
  set: Array<Scalars['String']>;
};

export type MessageGroupBy = {
  __typename?: 'MessageGroupBy';
  _count?: Maybe<MessageCountAggregate>;
  _max?: Maybe<MessageMaxAggregate>;
  _min?: Maybe<MessageMinAggregate>;
  authorId: Scalars['String'];
  content: Scalars['String'];
  conversationId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  readByIds?: Maybe<Array<Scalars['String']>>;
  receivedByIds?: Maybe<Array<Scalars['String']>>;
};

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

export type MessageMaxAggregate = {
  __typename?: 'MessageMaxAggregate';
  authorId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  conversationId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
};

export type MessageMaxOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type MessageMinAggregate = {
  __typename?: 'MessageMinAggregate';
  authorId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  conversationId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
};

export type MessageMinOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type MessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithAggregationInput = {
  _count?: InputMaybe<MessageCountOrderByAggregateInput>;
  _max?: InputMaybe<MessageMaxOrderByAggregateInput>;
  _min?: InputMaybe<MessageMinOrderByAggregateInput>;
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  readByIds?: InputMaybe<SortOrder>;
  receivedByIds?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithRelationInput = {
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  conversation?: InputMaybe<ConversationOrderByWithRelationInput>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  readByIds?: InputMaybe<SortOrder>;
  receivedByIds?: InputMaybe<SortOrder>;
};

export enum MessageScalarFieldEnum {
  AuthorId = 'authorId',
  Content = 'content',
  ConversationId = 'conversationId',
  CreatedAt = 'createdAt',
  Id = 'id',
  ReadByIds = 'readByIds',
  ReceivedByIds = 'receivedByIds'
}

export type MessageScalarWhereInput = {
  AND?: InputMaybe<Array<MessageScalarWhereInput>>;
  NOT?: InputMaybe<Array<MessageScalarWhereInput>>;
  OR?: InputMaybe<Array<MessageScalarWhereInput>>;
  authorId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  conversationId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  readByIds?: InputMaybe<StringNullableListFilter>;
  receivedByIds?: InputMaybe<StringNullableListFilter>;
};

export type MessageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MessageScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MessageScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MessageScalarWhereWithAggregatesInput>>;
  authorId?: InputMaybe<StringWithAggregatesFilter>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  conversationId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  readByIds?: InputMaybe<StringNullableListFilter>;
  receivedByIds?: InputMaybe<StringNullableListFilter>;
};

export type MessageUpdateInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutMessagesNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversation?: InputMaybe<ConversationUpdateOneRequiredWithoutMessagesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  readByIds?: InputMaybe<MessageUpdatereadByIdsInput>;
  receivedByIds?: InputMaybe<MessageUpdatereceivedByIdsInput>;
};

export type MessageUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  readByIds?: InputMaybe<MessageUpdatereadByIdsInput>;
  receivedByIds?: InputMaybe<MessageUpdatereceivedByIdsInput>;
};

export type MessageUpdateManyWithWhereWithoutAuthorInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithWhereWithoutConversationInput = {
  data: MessageUpdateManyMutationInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<MessageCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<MessageUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type MessageUpdateManyWithoutConversationNestedInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutConversationInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutConversationInput>>;
  createMany?: InputMaybe<MessageCreateManyConversationInputEnvelope>;
  delete?: InputMaybe<Array<MessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  set?: InputMaybe<Array<MessageWhereUniqueInput>>;
  update?: InputMaybe<Array<MessageUpdateWithWhereUniqueWithoutConversationInput>>;
  updateMany?: InputMaybe<Array<MessageUpdateManyWithWhereWithoutConversationInput>>;
  upsert?: InputMaybe<Array<MessageUpsertWithWhereUniqueWithoutConversationInput>>;
};

export type MessageUpdateWithWhereUniqueWithoutAuthorInput = {
  data: MessageUpdateWithoutAuthorInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
  data: MessageUpdateWithoutConversationInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithoutAuthorInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversation?: InputMaybe<ConversationUpdateOneRequiredWithoutMessagesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  readByIds?: InputMaybe<MessageUpdatereadByIdsInput>;
  receivedByIds?: InputMaybe<MessageUpdatereceivedByIdsInput>;
};

export type MessageUpdateWithoutConversationInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutMessagesNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  readByIds?: InputMaybe<MessageUpdatereadByIdsInput>;
  receivedByIds?: InputMaybe<MessageUpdatereceivedByIdsInput>;
};

export type MessageUpdatereadByIdsInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type MessageUpdatereceivedByIdsInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type MessageUpsertWithWhereUniqueWithoutAuthorInput = {
  create: MessageCreateWithoutAuthorInput;
  update: MessageUpdateWithoutAuthorInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
  create: MessageCreateWithoutConversationInput;
  update: MessageUpdateWithoutConversationInput;
  where: MessageWhereUniqueInput;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  conversation?: InputMaybe<ConversationRelationFilter>;
  conversationId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  readByIds?: InputMaybe<StringNullableListFilter>;
  receivedByIds?: InputMaybe<StringNullableListFilter>;
};

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
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
  createManyConversation: AffectedRowsOutput;
  createManyEvent: AffectedRowsOutput;
  createManyFile: AffectedRowsOutput;
  createManyInteraction: AffectedRowsOutput;
  createManyMessage: AffectedRowsOutput;
  createManyPool: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneConversation: Conversation;
  createOneEvent: Event;
  createOneFile: File;
  createOneInteraction: Interaction;
  createOneMessage: Message;
  createOnePool: Pool;
  createOneUser: User;
  dateQueueCancel: Scalars['Float'];
  dateQueueStart: Pool;
  deleteImage?: Maybe<File>;
  deleteManyConversation: AffectedRowsOutput;
  deleteManyEvent: AffectedRowsOutput;
  deleteManyFile: AffectedRowsOutput;
  deleteManyInteraction: AffectedRowsOutput;
  deleteManyMessage: AffectedRowsOutput;
  deleteManyPool: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneConversation?: Maybe<Conversation>;
  deleteOneEvent?: Maybe<Event>;
  deleteOneFile?: Maybe<File>;
  deleteOneInteraction?: Maybe<Interaction>;
  deleteOneMessage?: Maybe<Message>;
  deleteOnePool?: Maybe<Pool>;
  deleteOneUser?: Maybe<User>;
  interact: Interaction;
  markAsRead: BatchPayload;
  markAsReceived: BatchPayload;
  onboard: User;
  sendFeedback?: Maybe<Feedback>;
  sendMessage: Message;
  sendOTP: SendCodePayload;
  signOut?: Maybe<Scalars['Boolean']>;
  updateImage: Array<File>;
  updateManyConversation: AffectedRowsOutput;
  updateManyEvent: AffectedRowsOutput;
  updateManyFile: AffectedRowsOutput;
  updateManyInteraction: AffectedRowsOutput;
  updateManyMessage: AffectedRowsOutput;
  updateManyPool: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneConversation?: Maybe<Conversation>;
  updateOneEvent?: Maybe<Event>;
  updateOneFile?: Maybe<File>;
  updateOneInteraction?: Maybe<Interaction>;
  updateOneMessage?: Maybe<Message>;
  updateOnePool?: Maybe<Pool>;
  updateOneUser?: Maybe<User>;
  updatePresence: Scalars['Boolean'];
  updateProfile: User;
  updateState?: Maybe<Scalars['Boolean']>;
  uploadImage: Array<File>;
  upsertOneConversation: Conversation;
  upsertOneEvent: Event;
  upsertOneFile: File;
  upsertOneInteraction: Interaction;
  upsertOneMessage: Message;
  upsertOnePool: Pool;
  upsertOneUser: User;
};


export type MutationCheckOtpArgs = {
  input: CheckCodeInput;
};


export type MutationCreateManyConversationArgs = {
  data: Array<ConversationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyEventArgs = {
  data: Array<EventCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFileArgs = {
  data: Array<FileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyInteractionArgs = {
  data: Array<InteractionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyMessageArgs = {
  data: Array<MessageCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPoolArgs = {
  data: Array<PoolCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneConversationArgs = {
  data: ConversationCreateInput;
};


export type MutationCreateOneEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateOneFileArgs = {
  data: FileCreateInput;
};


export type MutationCreateOneInteractionArgs = {
  data: InteractionCreateInput;
};


export type MutationCreateOneMessageArgs = {
  data: MessageCreateInput;
};


export type MutationCreateOnePoolArgs = {
  data: PoolCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDateQueueCancelArgs = {
  type: EventType;
};


export type MutationDateQueueStartArgs = {
  input: PoolQueueInput;
};


export type MutationDeleteImageArgs = {
  id: Scalars['String'];
};


export type MutationDeleteManyConversationArgs = {
  where?: InputMaybe<ConversationWhereInput>;
};


export type MutationDeleteManyEventArgs = {
  where?: InputMaybe<EventWhereInput>;
};


export type MutationDeleteManyFileArgs = {
  where?: InputMaybe<FileWhereInput>;
};


export type MutationDeleteManyInteractionArgs = {
  where?: InputMaybe<InteractionWhereInput>;
};


export type MutationDeleteManyMessageArgs = {
  where?: InputMaybe<MessageWhereInput>;
};


export type MutationDeleteManyPoolArgs = {
  where?: InputMaybe<PoolWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneConversationArgs = {
  where: ConversationWhereUniqueInput;
};


export type MutationDeleteOneEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteOneFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationDeleteOneInteractionArgs = {
  where: InteractionWhereUniqueInput;
};


export type MutationDeleteOneMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type MutationDeleteOnePoolArgs = {
  where: PoolWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationInteractArgs = {
  input: InteractionInput;
};


export type MutationMarkAsReadArgs = {
  messageIds: Array<Scalars['String']>;
};


export type MutationMarkAsReceivedArgs = {
  messageIds: Array<Scalars['String']>;
};


export type MutationOnboardArgs = {
  input: OnboardInput;
};


export type MutationSendFeedbackArgs = {
  input: FeedbackInput;
};


export type MutationSendMessageArgs = {
  input: ConversationInput;
};


export type MutationSendOtpArgs = {
  input: SendCodeInput;
};


export type MutationUpdateImageArgs = {
  input: UpdateImageInput;
};


export type MutationUpdateManyConversationArgs = {
  data: ConversationUpdateManyMutationInput;
  where?: InputMaybe<ConversationWhereInput>;
};


export type MutationUpdateManyEventArgs = {
  data: EventUpdateManyMutationInput;
  where?: InputMaybe<EventWhereInput>;
};


export type MutationUpdateManyFileArgs = {
  data: FileUpdateManyMutationInput;
  where?: InputMaybe<FileWhereInput>;
};


export type MutationUpdateManyInteractionArgs = {
  data: InteractionUpdateManyMutationInput;
  where?: InputMaybe<InteractionWhereInput>;
};


export type MutationUpdateManyMessageArgs = {
  data: MessageUpdateManyMutationInput;
  where?: InputMaybe<MessageWhereInput>;
};


export type MutationUpdateManyPoolArgs = {
  data: PoolUpdateManyMutationInput;
  where?: InputMaybe<PoolWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneConversationArgs = {
  data: ConversationUpdateInput;
  where: ConversationWhereUniqueInput;
};


export type MutationUpdateOneEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateOneFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpdateOneInteractionArgs = {
  data: InteractionUpdateInput;
  where: InteractionWhereUniqueInput;
};


export type MutationUpdateOneMessageArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpdateOnePoolArgs = {
  data: PoolUpdateInput;
  where: PoolWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdatePresenceArgs = {
  input: PresenceInput;
};


export type MutationUpdateProfileArgs = {
  input: ProfileInput;
};


export type MutationUpdateStateArgs = {
  input: StateInput;
};


export type MutationUploadImageArgs = {
  input: Array<Scalars['Upload']>;
};


export type MutationUpsertOneConversationArgs = {
  create: ConversationCreateInput;
  update: ConversationUpdateInput;
  where: ConversationWhereUniqueInput;
};


export type MutationUpsertOneEventArgs = {
  create: EventCreateInput;
  update: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpsertOneFileArgs = {
  create: FileCreateInput;
  update: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpsertOneInteractionArgs = {
  create: InteractionCreateInput;
  update: InteractionUpdateInput;
  where: InteractionWhereUniqueInput;
};


export type MutationUpsertOneMessageArgs = {
  create: MessageCreateInput;
  update: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpsertOnePoolArgs = {
  create: PoolCreateInput;
  update: PoolUpdateInput;
  where: PoolWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedEnumDecisionFilter = {
  equals?: InputMaybe<Decision>;
  in?: InputMaybe<Array<Decision>>;
  not?: InputMaybe<NestedEnumDecisionFilter>;
  notIn?: InputMaybe<Array<Decision>>;
};

export type NestedEnumDecisionWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumDecisionFilter>;
  _min?: InputMaybe<NestedEnumDecisionFilter>;
  equals?: InputMaybe<Decision>;
  in?: InputMaybe<Array<Decision>>;
  not?: InputMaybe<NestedEnumDecisionWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Decision>>;
};

export type NestedEnumEventTypeFilter = {
  equals?: InputMaybe<EventType>;
  in?: InputMaybe<Array<EventType>>;
  not?: InputMaybe<NestedEnumEventTypeFilter>;
  notIn?: InputMaybe<Array<EventType>>;
};

export type NestedEnumEventTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumEventTypeFilter>;
  _min?: InputMaybe<NestedEnumEventTypeFilter>;
  equals?: InputMaybe<EventType>;
  in?: InputMaybe<Array<EventType>>;
  not?: InputMaybe<NestedEnumEventTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<EventType>>;
};

export type NestedEnumIdentityNullableFilter = {
  equals?: InputMaybe<Identity>;
  in?: InputMaybe<Array<Identity>>;
  not?: InputMaybe<NestedEnumIdentityNullableFilter>;
  notIn?: InputMaybe<Array<Identity>>;
};

export type NestedEnumIdentityNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumIdentityNullableFilter>;
  _min?: InputMaybe<NestedEnumIdentityNullableFilter>;
  equals?: InputMaybe<Identity>;
  in?: InputMaybe<Array<Identity>>;
  not?: InputMaybe<NestedEnumIdentityNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Identity>>;
};

export type NestedEnumNotificationTypeFilter = {
  equals?: InputMaybe<NotificationType>;
  in?: InputMaybe<Array<NotificationType>>;
  not?: InputMaybe<NestedEnumNotificationTypeFilter>;
  notIn?: InputMaybe<Array<NotificationType>>;
};

export type NestedEnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumRoleNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumRoleNullableFilter>;
  _min?: InputMaybe<NestedEnumRoleNullableFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Notification = {
  __typename?: 'Notification';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: NotificationType;
  url?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type NotificationCreateManyUserInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type: NotificationType;
  url?: InputMaybe<Scalars['String']>;
};

export type NotificationCreateManyUserInputEnvelope = {
  data: Array<NotificationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NotificationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
};

export type NotificationCreateOrConnectWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateWithoutUserInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type: NotificationType;
  url?: InputMaybe<Scalars['String']>;
};

export type NotificationListRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum NotificationScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  ImageUrl = 'imageUrl',
  Title = 'title',
  Type = 'type',
  Url = 'url',
  UserId = 'userId'
}

export type NotificationScalarWhereInput = {
  AND?: InputMaybe<Array<NotificationScalarWhereInput>>;
  NOT?: InputMaybe<Array<NotificationScalarWhereInput>>;
  OR?: InputMaybe<Array<NotificationScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  imageUrl?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumNotificationTypeFilter>;
  url?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum NotificationType {
  BlindDate = 'BLIND_DATE',
  Liked = 'LIKED',
  Match = 'MATCH',
  Promo = 'PROMO',
  SpeedDate = 'SPEED_DATE',
  System = 'SYSTEM'
}

export type NotificationUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumNotificationTypeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type NotificationUpdateManyWithWhereWithoutUserInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<NotificationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<NotificationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<NotificationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumNotificationTypeFieldUpdateOperationsInput>;
  url?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  update: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  imageUrl?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumNotificationTypeFilter>;
  url?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type NotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableEnumIdentityFieldUpdateOperationsInput = {
  set?: InputMaybe<Identity>;
};

export type NullableEnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type OnboardInput = {
  ageEnd?: InputMaybe<Scalars['Float']>;
  ageStart?: InputMaybe<Scalars['Float']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dob: Scalars['DateTime'];
  files: Array<Scalars['Upload']>;
  identity: Identity;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  looking: Identity;
  name: Scalars['String'];
  pushId?: InputMaybe<Scalars['String']>;
};

export type Pool = {
  __typename?: 'Pool';
  active: Scalars['Boolean'];
  activities: Array<EventActivity>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  times: Array<EventTime>;
  type: EventType;
  user: User;
  userId: Scalars['String'];
  weekdays: Array<EventWeekday>;
};

export type PoolCountAggregate = {
  __typename?: 'PoolCountAggregate';
  _all: Scalars['Int'];
  active: Scalars['Int'];
  activities: Scalars['Int'];
  city: Scalars['Int'];
  country: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  times: Scalars['Int'];
  type: Scalars['Int'];
  userId: Scalars['Int'];
  weekdays: Scalars['Int'];
};

export type PoolCountOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  activities?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  times?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  weekdays?: InputMaybe<SortOrder>;
};

export type PoolCreateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activities?: InputMaybe<PoolCreateactivitiesInput>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  times?: InputMaybe<PoolCreatetimesInput>;
  type: EventType;
  user: UserCreateNestedOneWithoutPoolsInput;
  weekdays?: InputMaybe<PoolCreateweekdaysInput>;
};

export type PoolCreateManyInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activities?: InputMaybe<PoolCreateactivitiesInput>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  times?: InputMaybe<PoolCreatetimesInput>;
  type: EventType;
  userId: Scalars['String'];
  weekdays?: InputMaybe<PoolCreateweekdaysInput>;
};

export type PoolCreateManyUserInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activities?: InputMaybe<PoolCreateactivitiesInput>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  times?: InputMaybe<PoolCreatetimesInput>;
  type: EventType;
  weekdays?: InputMaybe<PoolCreateweekdaysInput>;
};

export type PoolCreateManyUserInputEnvelope = {
  data: Array<PoolCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PoolCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PoolWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PoolCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PoolCreateWithoutUserInput>>;
  createMany?: InputMaybe<PoolCreateManyUserInputEnvelope>;
};

export type PoolCreateOrConnectWithoutUserInput = {
  create: PoolCreateWithoutUserInput;
  where: PoolWhereUniqueInput;
};

export type PoolCreateWithoutUserInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  activities?: InputMaybe<PoolCreateactivitiesInput>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  times?: InputMaybe<PoolCreatetimesInput>;
  type: EventType;
  weekdays?: InputMaybe<PoolCreateweekdaysInput>;
};

export type PoolCreateactivitiesInput = {
  set: Array<EventActivity>;
};

export type PoolCreatetimesInput = {
  set: Array<EventTime>;
};

export type PoolCreateweekdaysInput = {
  set: Array<EventWeekday>;
};

export type PoolGroupBy = {
  __typename?: 'PoolGroupBy';
  _count?: Maybe<PoolCountAggregate>;
  _max?: Maybe<PoolMaxAggregate>;
  _min?: Maybe<PoolMinAggregate>;
  active: Scalars['Boolean'];
  activities?: Maybe<Array<EventActivity>>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  times?: Maybe<Array<EventTime>>;
  type: EventType;
  userId: Scalars['String'];
  weekdays?: Maybe<Array<EventWeekday>>;
};

export type PoolListRelationFilter = {
  every?: InputMaybe<PoolWhereInput>;
  none?: InputMaybe<PoolWhereInput>;
  some?: InputMaybe<PoolWhereInput>;
};

export type PoolMaxAggregate = {
  __typename?: 'PoolMaxAggregate';
  active?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<EventType>;
  userId?: Maybe<Scalars['String']>;
};

export type PoolMaxOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PoolMinAggregate = {
  __typename?: 'PoolMinAggregate';
  active?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<EventType>;
  userId?: Maybe<Scalars['String']>;
};

export type PoolMinOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PoolOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PoolOrderByWithAggregationInput = {
  _count?: InputMaybe<PoolCountOrderByAggregateInput>;
  _max?: InputMaybe<PoolMaxOrderByAggregateInput>;
  _min?: InputMaybe<PoolMinOrderByAggregateInput>;
  active?: InputMaybe<SortOrder>;
  activities?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  times?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  weekdays?: InputMaybe<SortOrder>;
};

export type PoolOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  activities?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  times?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  weekdays?: InputMaybe<SortOrder>;
};

export type PoolQueueInput = {
  activities: Array<EventActivity>;
  times: Array<EventTime>;
  type: EventType;
  weekdays: Array<EventWeekday>;
};

export enum PoolScalarFieldEnum {
  Active = 'active',
  Activities = 'activities',
  City = 'city',
  Country = 'country',
  CreatedAt = 'createdAt',
  Id = 'id',
  Times = 'times',
  Type = 'type',
  UserId = 'userId',
  Weekdays = 'weekdays'
}

export type PoolScalarWhereInput = {
  AND?: InputMaybe<Array<PoolScalarWhereInput>>;
  NOT?: InputMaybe<Array<PoolScalarWhereInput>>;
  OR?: InputMaybe<Array<PoolScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  activities?: InputMaybe<EnumEventActivityNullableListFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  times?: InputMaybe<EnumEventTimeNullableListFilter>;
  type?: InputMaybe<EnumEventTypeFilter>;
  userId?: InputMaybe<StringFilter>;
  weekdays?: InputMaybe<EnumEventWeekdayNullableListFilter>;
};

export type PoolScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PoolScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PoolScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PoolScalarWhereWithAggregatesInput>>;
  active?: InputMaybe<BoolWithAggregatesFilter>;
  activities?: InputMaybe<EnumEventActivityNullableListFilter>;
  city?: InputMaybe<StringWithAggregatesFilter>;
  country?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  times?: InputMaybe<EnumEventTimeNullableListFilter>;
  type?: InputMaybe<EnumEventTypeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  weekdays?: InputMaybe<EnumEventWeekdayNullableListFilter>;
};

export type PoolUpdateInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<PoolUpdateactivitiesInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  times?: InputMaybe<PoolUpdatetimesInput>;
  type?: InputMaybe<EnumEventTypeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPoolsNestedInput>;
  weekdays?: InputMaybe<PoolUpdateweekdaysInput>;
};

export type PoolUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<PoolUpdateactivitiesInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  times?: InputMaybe<PoolUpdatetimesInput>;
  type?: InputMaybe<EnumEventTypeFieldUpdateOperationsInput>;
  weekdays?: InputMaybe<PoolUpdateweekdaysInput>;
};

export type PoolUpdateManyWithWhereWithoutUserInput = {
  data: PoolUpdateManyMutationInput;
  where: PoolScalarWhereInput;
};

export type PoolUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<PoolWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PoolCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PoolCreateWithoutUserInput>>;
  createMany?: InputMaybe<PoolCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<PoolWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PoolScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PoolWhereUniqueInput>>;
  set?: InputMaybe<Array<PoolWhereUniqueInput>>;
  update?: InputMaybe<Array<PoolUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PoolUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PoolUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PoolUpdateWithWhereUniqueWithoutUserInput = {
  data: PoolUpdateWithoutUserInput;
  where: PoolWhereUniqueInput;
};

export type PoolUpdateWithoutUserInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  activities?: InputMaybe<PoolUpdateactivitiesInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  times?: InputMaybe<PoolUpdatetimesInput>;
  type?: InputMaybe<EnumEventTypeFieldUpdateOperationsInput>;
  weekdays?: InputMaybe<PoolUpdateweekdaysInput>;
};

export type PoolUpdateactivitiesInput = {
  push?: InputMaybe<Array<EventActivity>>;
  set?: InputMaybe<Array<EventActivity>>;
};

export type PoolUpdatetimesInput = {
  push?: InputMaybe<Array<EventTime>>;
  set?: InputMaybe<Array<EventTime>>;
};

export type PoolUpdateweekdaysInput = {
  push?: InputMaybe<Array<EventWeekday>>;
  set?: InputMaybe<Array<EventWeekday>>;
};

export type PoolUpsertWithWhereUniqueWithoutUserInput = {
  create: PoolCreateWithoutUserInput;
  update: PoolUpdateWithoutUserInput;
  where: PoolWhereUniqueInput;
};

export type PoolWhereInput = {
  AND?: InputMaybe<Array<PoolWhereInput>>;
  NOT?: InputMaybe<Array<PoolWhereInput>>;
  OR?: InputMaybe<Array<PoolWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  activities?: InputMaybe<EnumEventActivityNullableListFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  times?: InputMaybe<EnumEventTimeNullableListFilter>;
  type?: InputMaybe<EnumEventTypeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  weekdays?: InputMaybe<EnumEventWeekdayNullableListFilter>;
};

export type PoolWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PresenceInput = {
  online?: InputMaybe<Scalars['Boolean']>;
};

export type ProfileInput = {
  ageEnd?: InputMaybe<Scalars['Float']>;
  ageStart?: InputMaybe<Scalars['Float']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  identity?: InputMaybe<Identity>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  looking?: InputMaybe<Identity>;
  name?: InputMaybe<Scalars['String']>;
  pushId?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateConversation: AggregateConversation;
  aggregateEvent: AggregateEvent;
  aggregateFile: AggregateFile;
  aggregateInteraction: AggregateInteraction;
  aggregateMessage: AggregateMessage;
  aggregatePool: AggregatePool;
  aggregateUser: AggregateUser;
  /** @deprecated use userDateStatus instead */
  blindDatesMatched?: Maybe<Event>;
  /** @deprecated use userDateStatus instead */
  blindDatesQueued: Scalars['Boolean'];
  conversation?: Maybe<Conversation>;
  conversations: Array<Conversation>;
  discover?: Maybe<User>;
  event?: Maybe<Event>;
  events: Array<Event>;
  file?: Maybe<File>;
  files: Array<File>;
  findFirstConversation?: Maybe<Conversation>;
  findFirstConversationOrThrow?: Maybe<Conversation>;
  findFirstEvent?: Maybe<Event>;
  findFirstEventOrThrow?: Maybe<Event>;
  findFirstFile?: Maybe<File>;
  findFirstFileOrThrow?: Maybe<File>;
  findFirstInteraction?: Maybe<Interaction>;
  findFirstInteractionOrThrow?: Maybe<Interaction>;
  findFirstMessage?: Maybe<Message>;
  findFirstMessageOrThrow?: Maybe<Message>;
  findFirstPool?: Maybe<Pool>;
  findFirstPoolOrThrow?: Maybe<Pool>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  getConversation?: Maybe<Conversation>;
  getEvent?: Maybe<Event>;
  getFile?: Maybe<File>;
  getInteraction?: Maybe<Interaction>;
  getMessage?: Maybe<Message>;
  getPool?: Maybe<Pool>;
  getUser?: Maybe<User>;
  groupByConversation: Array<ConversationGroupBy>;
  groupByEvent: Array<EventGroupBy>;
  groupByFile: Array<FileGroupBy>;
  groupByInteraction: Array<InteractionGroupBy>;
  groupByMessage: Array<MessageGroupBy>;
  groupByPool: Array<PoolGroupBy>;
  groupByUser: Array<UserGroupBy>;
  interaction?: Maybe<Interaction>;
  interactions: Array<Interaction>;
  me?: Maybe<User>;
  message?: Maybe<Message>;
  messages: Array<Message>;
  myConversations: Array<Conversation>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  /** @deprecated use userDateStatus instead */
  speedDatesQueued: Scalars['Boolean'];
  user?: Maybe<User>;
  userDateStatus: UserDateStatus;
  users: Array<User>;
};


export type QueryAggregateConversationArgs = {
  cursor?: InputMaybe<ConversationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type QueryAggregateEventArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryAggregateFileArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryAggregateInteractionArgs = {
  cursor?: InputMaybe<InteractionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InteractionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InteractionWhereInput>;
};


export type QueryAggregateMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryAggregatePoolArgs = {
  cursor?: InputMaybe<PoolWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryConversationArgs = {
  where: ConversationWhereUniqueInput;
};


export type QueryConversationsArgs = {
  cursor?: InputMaybe<ConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type QueryDiscoverArgs = {
  input: DiscoverInput;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryFilesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstConversationArgs = {
  cursor?: InputMaybe<ConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type QueryFindFirstConversationOrThrowArgs = {
  cursor?: InputMaybe<ConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type QueryFindFirstEventArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFindFirstEventOrThrowArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFindFirstFileArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstFileOrThrowArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstInteractionArgs = {
  cursor?: InputMaybe<InteractionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InteractionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InteractionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InteractionWhereInput>;
};


export type QueryFindFirstInteractionOrThrowArgs = {
  cursor?: InputMaybe<InteractionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InteractionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InteractionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InteractionWhereInput>;
};


export type QueryFindFirstMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindFirstMessageOrThrowArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindFirstPoolArgs = {
  cursor?: InputMaybe<PoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<PoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolWhereInput>;
};


export type QueryFindFirstPoolOrThrowArgs = {
  cursor?: InputMaybe<PoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<PoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetConversationArgs = {
  where: ConversationWhereUniqueInput;
};


export type QueryGetEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryGetFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryGetInteractionArgs = {
  where: InteractionWhereUniqueInput;
};


export type QueryGetMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryGetPoolArgs = {
  where: PoolWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByConversationArgs = {
  by: Array<ConversationScalarFieldEnum>;
  having?: InputMaybe<ConversationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type QueryGroupByEventArgs = {
  by: Array<EventScalarFieldEnum>;
  having?: InputMaybe<EventScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EventOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryGroupByFileArgs = {
  by: Array<FileScalarFieldEnum>;
  having?: InputMaybe<FileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryGroupByInteractionArgs = {
  by: Array<InteractionScalarFieldEnum>;
  having?: InputMaybe<InteractionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<InteractionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InteractionWhereInput>;
};


export type QueryGroupByMessageArgs = {
  by: Array<MessageScalarFieldEnum>;
  having?: InputMaybe<MessageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MessageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryGroupByPoolArgs = {
  by: Array<PoolScalarFieldEnum>;
  having?: InputMaybe<PoolScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PoolOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryInteractionArgs = {
  where: InteractionWhereUniqueInput;
};


export type QueryMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryPoolArgs = {
  where: PoolWhereUniqueInput;
};


export type QueryPoolsArgs = {
  cursor?: InputMaybe<PoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<PoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserDateStatusArgs = {
  type: EventType;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SendCodeInput = {
  phone: Scalars['String'];
};

export type SendCodePayload = {
  __typename?: 'SendCodePayload';
  success: Scalars['Boolean'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StateInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  online: Scalars['Boolean'];
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newMatch: Interaction;
  newMessage: MessageWithTargetIds;
};


export type SubscriptionNewMatchArgs = {
  currentUserId: Scalars['String'];
};


export type SubscriptionNewMessageArgs = {
  currentUserId: Scalars['String'];
};

export type UpdateImageInput = {
  file: Scalars['Upload'];
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  activities: Array<Activity>;
  ageEnd?: Maybe<Scalars['Int']>;
  ageStart?: Maybe<Scalars['Int']>;
  avatar?: Maybe<File>;
  bio?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  conversations: Array<Conversation>;
  country: Scalars['String'];
  dob?: Maybe<Scalars['DateTime']>;
  events: Array<Event>;
  id: Scalars['String'];
  identity?: Maybe<Identity>;
  images: Array<File>;
  interactions: Array<Interaction>;
  interactors: Array<Interaction>;
  languageCode?: Maybe<Scalars['String']>;
  location: LiveUser;
  looking?: Maybe<Identity>;
  messages: Array<Message>;
  name?: Maybe<Scalars['String']>;
  notifications: Array<Notification>;
  phone: Scalars['String'];
  pools: Array<Pool>;
  pushEnabled?: Maybe<Scalars['Boolean']>;
  pushId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  sensitiveFilterEnabled?: Maybe<Scalars['Boolean']>;
};


export type UserActivitiesArgs = {
  cursor?: InputMaybe<ActivityWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActivityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActivityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActivityWhereInput>;
};


export type UserConversationsArgs = {
  cursor?: InputMaybe<ConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ConversationWhereInput>;
};


export type UserEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type UserImagesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type UserInteractionsArgs = {
  cursor?: InputMaybe<InteractionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InteractionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InteractionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InteractionWhereInput>;
};


export type UserInteractorsArgs = {
  cursor?: InputMaybe<InteractionWhereUniqueInput>;
  distinct?: InputMaybe<Array<InteractionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InteractionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InteractionWhereInput>;
};


export type UserMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type UserNotificationsArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type UserPoolsArgs = {
  cursor?: InputMaybe<PoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<PoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PoolWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  ageEnd?: Maybe<Scalars['Float']>;
  ageStart?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  ageEnd?: InputMaybe<SortOrder>;
  ageStart?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  activities: Scalars['Int'];
  conversations: Scalars['Int'];
  events: Scalars['Int'];
  images: Scalars['Int'];
  interactions: Scalars['Int'];
  interactors: Scalars['Int'];
  messages: Scalars['Int'];
  notifications: Scalars['Int'];
  pools: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  ageEnd: Scalars['Int'];
  ageStart: Scalars['Int'];
  bio: Scalars['Int'];
  city: Scalars['Int'];
  country: Scalars['Int'];
  dob: Scalars['Int'];
  id: Scalars['Int'];
  identity: Scalars['Int'];
  languageCode: Scalars['Int'];
  looking: Scalars['Int'];
  name: Scalars['Int'];
  phone: Scalars['Int'];
  pushEnabled: Scalars['Int'];
  pushId: Scalars['Int'];
  role: Scalars['Int'];
  sensitiveFilterEnabled: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  ageEnd?: InputMaybe<SortOrder>;
  ageStart?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identity?: InputMaybe<SortOrder>;
  languageCode?: InputMaybe<SortOrder>;
  looking?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  pushEnabled?: InputMaybe<SortOrder>;
  pushId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  sensitiveFilterEnabled?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  activities?: InputMaybe<ActivityCreateNestedManyWithoutUserInput>;
  ageEnd?: InputMaybe<Scalars['Int']>;
  ageStart?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conversations?: InputMaybe<ConversationCreateNestedManyWithoutMembersInput>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  events?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  images?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  interactions?: InputMaybe<InteractionCreateNestedManyWithoutAuthorInput>;
  interactors?: InputMaybe<InteractionCreateNestedManyWithoutTargetInput>;
  languageCode?: InputMaybe<Scalars['String']>;
  looking?: InputMaybe<Identity>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  phone: Scalars['String'];
  pools?: InputMaybe<PoolCreateNestedManyWithoutUserInput>;
  pushEnabled?: InputMaybe<Scalars['Boolean']>;
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  sensitiveFilterEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateManyInput = {
  ageEnd?: InputMaybe<Scalars['Int']>;
  ageStart?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  languageCode?: InputMaybe<Scalars['String']>;
  looking?: InputMaybe<Identity>;
  name?: InputMaybe<Scalars['String']>;
  phone: Scalars['String'];
  pushEnabled?: InputMaybe<Scalars['Boolean']>;
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  sensitiveFilterEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutConversationsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutConversationsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutConversationsInput>>;
};

export type UserCreateNestedManyWithoutEventsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutEventsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutEventsInput>>;
};

export type UserCreateNestedOneWithoutImagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutImagesInput>;
  create?: InputMaybe<UserCreateWithoutImagesInput>;
};

export type UserCreateNestedOneWithoutInteractionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInteractionsInput>;
  create?: InputMaybe<UserCreateWithoutInteractionsInput>;
};

export type UserCreateNestedOneWithoutInteractorsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInteractorsInput>;
  create?: InputMaybe<UserCreateWithoutInteractorsInput>;
};

export type UserCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<UserCreateWithoutMessagesInput>;
};

export type UserCreateNestedOneWithoutPoolsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPoolsInput>;
  create?: InputMaybe<UserCreateWithoutPoolsInput>;
};

export type UserCreateOrConnectWithoutConversationsInput = {
  create: UserCreateWithoutConversationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEventsInput = {
  create: UserCreateWithoutEventsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutImagesInput = {
  create: UserCreateWithoutImagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutInteractionsInput = {
  create: UserCreateWithoutInteractionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutInteractorsInput = {
  create: UserCreateWithoutInteractorsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMessagesInput = {
  create: UserCreateWithoutMessagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPoolsInput = {
  create: UserCreateWithoutPoolsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutConversationsInput = {
  activities?: InputMaybe<ActivityCreateNestedManyWithoutUserInput>;
  ageEnd?: InputMaybe<Scalars['Int']>;
  ageStart?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  events?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  images?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  interactions?: InputMaybe<InteractionCreateNestedManyWithoutAuthorInput>;
  interactors?: InputMaybe<InteractionCreateNestedManyWithoutTargetInput>;
  languageCode?: InputMaybe<Scalars['String']>;
  looking?: InputMaybe<Identity>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  phone: Scalars['String'];
  pools?: InputMaybe<PoolCreateNestedManyWithoutUserInput>;
  pushEnabled?: InputMaybe<Scalars['Boolean']>;
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  sensitiveFilterEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateWithoutEventsInput = {
  activities?: InputMaybe<ActivityCreateNestedManyWithoutUserInput>;
  ageEnd?: InputMaybe<Scalars['Int']>;
  ageStart?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conversations?: InputMaybe<ConversationCreateNestedManyWithoutMembersInput>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  images?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  interactions?: InputMaybe<InteractionCreateNestedManyWithoutAuthorInput>;
  interactors?: InputMaybe<InteractionCreateNestedManyWithoutTargetInput>;
  languageCode?: InputMaybe<Scalars['String']>;
  looking?: InputMaybe<Identity>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  phone: Scalars['String'];
  pools?: InputMaybe<PoolCreateNestedManyWithoutUserInput>;
  pushEnabled?: InputMaybe<Scalars['Boolean']>;
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  sensitiveFilterEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateWithoutImagesInput = {
  activities?: InputMaybe<ActivityCreateNestedManyWithoutUserInput>;
  ageEnd?: InputMaybe<Scalars['Int']>;
  ageStart?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conversations?: InputMaybe<ConversationCreateNestedManyWithoutMembersInput>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  events?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  interactions?: InputMaybe<InteractionCreateNestedManyWithoutAuthorInput>;
  interactors?: InputMaybe<InteractionCreateNestedManyWithoutTargetInput>;
  languageCode?: InputMaybe<Scalars['String']>;
  looking?: InputMaybe<Identity>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  phone: Scalars['String'];
  pools?: InputMaybe<PoolCreateNestedManyWithoutUserInput>;
  pushEnabled?: InputMaybe<Scalars['Boolean']>;
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  sensitiveFilterEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateWithoutInteractionsInput = {
  activities?: InputMaybe<ActivityCreateNestedManyWithoutUserInput>;
  ageEnd?: InputMaybe<Scalars['Int']>;
  ageStart?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conversations?: InputMaybe<ConversationCreateNestedManyWithoutMembersInput>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  events?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  images?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  interactors?: InputMaybe<InteractionCreateNestedManyWithoutTargetInput>;
  languageCode?: InputMaybe<Scalars['String']>;
  looking?: InputMaybe<Identity>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  phone: Scalars['String'];
  pools?: InputMaybe<PoolCreateNestedManyWithoutUserInput>;
  pushEnabled?: InputMaybe<Scalars['Boolean']>;
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  sensitiveFilterEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateWithoutInteractorsInput = {
  activities?: InputMaybe<ActivityCreateNestedManyWithoutUserInput>;
  ageEnd?: InputMaybe<Scalars['Int']>;
  ageStart?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conversations?: InputMaybe<ConversationCreateNestedManyWithoutMembersInput>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  events?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  images?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  interactions?: InputMaybe<InteractionCreateNestedManyWithoutAuthorInput>;
  languageCode?: InputMaybe<Scalars['String']>;
  looking?: InputMaybe<Identity>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  phone: Scalars['String'];
  pools?: InputMaybe<PoolCreateNestedManyWithoutUserInput>;
  pushEnabled?: InputMaybe<Scalars['Boolean']>;
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  sensitiveFilterEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateWithoutMessagesInput = {
  activities?: InputMaybe<ActivityCreateNestedManyWithoutUserInput>;
  ageEnd?: InputMaybe<Scalars['Int']>;
  ageStart?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conversations?: InputMaybe<ConversationCreateNestedManyWithoutMembersInput>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  events?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  images?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  interactions?: InputMaybe<InteractionCreateNestedManyWithoutAuthorInput>;
  interactors?: InputMaybe<InteractionCreateNestedManyWithoutTargetInput>;
  languageCode?: InputMaybe<Scalars['String']>;
  looking?: InputMaybe<Identity>;
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  phone: Scalars['String'];
  pools?: InputMaybe<PoolCreateNestedManyWithoutUserInput>;
  pushEnabled?: InputMaybe<Scalars['Boolean']>;
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  sensitiveFilterEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateWithoutPoolsInput = {
  activities?: InputMaybe<ActivityCreateNestedManyWithoutUserInput>;
  ageEnd?: InputMaybe<Scalars['Int']>;
  ageStart?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  conversations?: InputMaybe<ConversationCreateNestedManyWithoutMembersInput>;
  country?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  events?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Identity>;
  images?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
  interactions?: InputMaybe<InteractionCreateNestedManyWithoutAuthorInput>;
  interactors?: InputMaybe<InteractionCreateNestedManyWithoutTargetInput>;
  languageCode?: InputMaybe<Scalars['String']>;
  looking?: InputMaybe<Identity>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  phone: Scalars['String'];
  pushEnabled?: InputMaybe<Scalars['Boolean']>;
  pushId?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  sensitiveFilterEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type UserDateStatus = {
  __typename?: 'UserDateStatus';
  event?: Maybe<Event>;
  pool?: Maybe<Pool>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  ageEnd?: Maybe<Scalars['Int']>;
  ageStart?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  dob?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  identity?: Maybe<Identity>;
  languageCode?: Maybe<Scalars['String']>;
  looking?: Maybe<Identity>;
  name?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  pushEnabled?: Maybe<Scalars['Boolean']>;
  pushId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  sensitiveFilterEnabled?: Maybe<Scalars['Boolean']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  ageEnd?: Maybe<Scalars['Int']>;
  ageStart?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  identity?: Maybe<Identity>;
  languageCode?: Maybe<Scalars['String']>;
  looking?: Maybe<Identity>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pushEnabled?: Maybe<Scalars['Boolean']>;
  pushId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  sensitiveFilterEnabled?: Maybe<Scalars['Boolean']>;
};

export type UserMaxOrderByAggregateInput = {
  ageEnd?: InputMaybe<SortOrder>;
  ageStart?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identity?: InputMaybe<SortOrder>;
  languageCode?: InputMaybe<SortOrder>;
  looking?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  pushEnabled?: InputMaybe<SortOrder>;
  pushId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  sensitiveFilterEnabled?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  ageEnd?: Maybe<Scalars['Int']>;
  ageStart?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  identity?: Maybe<Identity>;
  languageCode?: Maybe<Scalars['String']>;
  looking?: Maybe<Identity>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  pushEnabled?: Maybe<Scalars['Boolean']>;
  pushId?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  sensitiveFilterEnabled?: Maybe<Scalars['Boolean']>;
};

export type UserMinOrderByAggregateInput = {
  ageEnd?: InputMaybe<SortOrder>;
  ageStart?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identity?: InputMaybe<SortOrder>;
  languageCode?: InputMaybe<SortOrder>;
  looking?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  pushEnabled?: InputMaybe<SortOrder>;
  pushId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  sensitiveFilterEnabled?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  ageEnd?: InputMaybe<SortOrder>;
  ageStart?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identity?: InputMaybe<SortOrder>;
  languageCode?: InputMaybe<SortOrder>;
  looking?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  pushEnabled?: InputMaybe<SortOrder>;
  pushId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  sensitiveFilterEnabled?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  activities?: InputMaybe<ActivityOrderByRelationAggregateInput>;
  ageEnd?: InputMaybe<SortOrder>;
  ageStart?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  conversations?: InputMaybe<ConversationOrderByRelationAggregateInput>;
  country?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  events?: InputMaybe<EventOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  identity?: InputMaybe<SortOrder>;
  images?: InputMaybe<FileOrderByRelationAggregateInput>;
  interactions?: InputMaybe<InteractionOrderByRelationAggregateInput>;
  interactors?: InputMaybe<InteractionOrderByRelationAggregateInput>;
  languageCode?: InputMaybe<SortOrder>;
  looking?: InputMaybe<SortOrder>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  notifications?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  phone?: InputMaybe<SortOrder>;
  pools?: InputMaybe<PoolOrderByRelationAggregateInput>;
  pushEnabled?: InputMaybe<SortOrder>;
  pushId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  sensitiveFilterEnabled?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  AgeEnd = 'ageEnd',
  AgeStart = 'ageStart',
  Bio = 'bio',
  City = 'city',
  Country = 'country',
  Dob = 'dob',
  Id = 'id',
  Identity = 'identity',
  LanguageCode = 'languageCode',
  Looking = 'looking',
  Name = 'name',
  Phone = 'phone',
  PushEnabled = 'pushEnabled',
  PushId = 'pushId',
  Role = 'role',
  SensitiveFilterEnabled = 'sensitiveFilterEnabled'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  ageEnd?: InputMaybe<IntNullableFilter>;
  ageStart?: InputMaybe<IntNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  dob?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  identity?: InputMaybe<EnumIdentityNullableFilter>;
  languageCode?: InputMaybe<StringNullableFilter>;
  looking?: InputMaybe<EnumIdentityNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringFilter>;
  pushEnabled?: InputMaybe<BoolNullableFilter>;
  pushId?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleNullableFilter>;
  sensitiveFilterEnabled?: InputMaybe<BoolNullableFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  ageEnd?: InputMaybe<IntNullableWithAggregatesFilter>;
  ageStart?: InputMaybe<IntNullableWithAggregatesFilter>;
  bio?: InputMaybe<StringNullableWithAggregatesFilter>;
  city?: InputMaybe<StringWithAggregatesFilter>;
  country?: InputMaybe<StringWithAggregatesFilter>;
  dob?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  identity?: InputMaybe<EnumIdentityNullableWithAggregatesFilter>;
  languageCode?: InputMaybe<StringNullableWithAggregatesFilter>;
  looking?: InputMaybe<EnumIdentityNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
  pushEnabled?: InputMaybe<BoolNullableWithAggregatesFilter>;
  pushId?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleNullableWithAggregatesFilter>;
  sensitiveFilterEnabled?: InputMaybe<BoolNullableWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  ageEnd?: Maybe<Scalars['Int']>;
  ageStart?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  ageEnd?: InputMaybe<SortOrder>;
  ageStart?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  activities?: InputMaybe<ActivityUpdateManyWithoutUserNestedInput>;
  ageEnd?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ageStart?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversations?: InputMaybe<ConversationUpdateManyWithoutMembersNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
  interactions?: InputMaybe<InteractionUpdateManyWithoutAuthorNestedInput>;
  interactors?: InputMaybe<InteractionUpdateManyWithoutTargetNestedInput>;
  languageCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pools?: InputMaybe<PoolUpdateManyWithoutUserNestedInput>;
  pushEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  sensitiveFilterEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  ageEnd?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ageStart?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  languageCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  sensitiveFilterEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutConversationsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutEventsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutConversationsNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutConversationsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutConversationsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutConversationsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutConversationsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutConversationsInput>>;
};

export type UserUpdateManyWithoutEventsNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutEventsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutEventsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutEventsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutEventsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutEventsInput>>;
};

export type UserUpdateOneRequiredWithoutInteractionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInteractionsInput>;
  create?: InputMaybe<UserCreateWithoutInteractionsInput>;
  update?: InputMaybe<UserUpdateWithoutInteractionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutInteractionsInput>;
};

export type UserUpdateOneRequiredWithoutInteractorsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInteractorsInput>;
  create?: InputMaybe<UserCreateWithoutInteractorsInput>;
  update?: InputMaybe<UserUpdateWithoutInteractorsInput>;
  upsert?: InputMaybe<UserUpsertWithoutInteractorsInput>;
};

export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<UserCreateWithoutMessagesInput>;
  update?: InputMaybe<UserUpdateWithoutMessagesInput>;
  upsert?: InputMaybe<UserUpsertWithoutMessagesInput>;
};

export type UserUpdateOneRequiredWithoutPoolsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPoolsInput>;
  create?: InputMaybe<UserCreateWithoutPoolsInput>;
  update?: InputMaybe<UserUpdateWithoutPoolsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPoolsInput>;
};

export type UserUpdateOneWithoutImagesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutImagesInput>;
  create?: InputMaybe<UserCreateWithoutImagesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutImagesInput>;
  upsert?: InputMaybe<UserUpsertWithoutImagesInput>;
};

export type UserUpdateWithWhereUniqueWithoutConversationsInput = {
  data: UserUpdateWithoutConversationsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutEventsInput = {
  data: UserUpdateWithoutEventsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutConversationsInput = {
  activities?: InputMaybe<ActivityUpdateManyWithoutUserNestedInput>;
  ageEnd?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ageStart?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
  interactions?: InputMaybe<InteractionUpdateManyWithoutAuthorNestedInput>;
  interactors?: InputMaybe<InteractionUpdateManyWithoutTargetNestedInput>;
  languageCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pools?: InputMaybe<PoolUpdateManyWithoutUserNestedInput>;
  pushEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  sensitiveFilterEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutEventsInput = {
  activities?: InputMaybe<ActivityUpdateManyWithoutUserNestedInput>;
  ageEnd?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ageStart?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversations?: InputMaybe<ConversationUpdateManyWithoutMembersNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
  interactions?: InputMaybe<InteractionUpdateManyWithoutAuthorNestedInput>;
  interactors?: InputMaybe<InteractionUpdateManyWithoutTargetNestedInput>;
  languageCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pools?: InputMaybe<PoolUpdateManyWithoutUserNestedInput>;
  pushEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  sensitiveFilterEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutImagesInput = {
  activities?: InputMaybe<ActivityUpdateManyWithoutUserNestedInput>;
  ageEnd?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ageStart?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversations?: InputMaybe<ConversationUpdateManyWithoutMembersNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  interactions?: InputMaybe<InteractionUpdateManyWithoutAuthorNestedInput>;
  interactors?: InputMaybe<InteractionUpdateManyWithoutTargetNestedInput>;
  languageCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pools?: InputMaybe<PoolUpdateManyWithoutUserNestedInput>;
  pushEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  sensitiveFilterEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutInteractionsInput = {
  activities?: InputMaybe<ActivityUpdateManyWithoutUserNestedInput>;
  ageEnd?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ageStart?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversations?: InputMaybe<ConversationUpdateManyWithoutMembersNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
  interactors?: InputMaybe<InteractionUpdateManyWithoutTargetNestedInput>;
  languageCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pools?: InputMaybe<PoolUpdateManyWithoutUserNestedInput>;
  pushEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  sensitiveFilterEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutInteractorsInput = {
  activities?: InputMaybe<ActivityUpdateManyWithoutUserNestedInput>;
  ageEnd?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ageStart?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversations?: InputMaybe<ConversationUpdateManyWithoutMembersNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
  interactions?: InputMaybe<InteractionUpdateManyWithoutAuthorNestedInput>;
  languageCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pools?: InputMaybe<PoolUpdateManyWithoutUserNestedInput>;
  pushEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  sensitiveFilterEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMessagesInput = {
  activities?: InputMaybe<ActivityUpdateManyWithoutUserNestedInput>;
  ageEnd?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ageStart?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversations?: InputMaybe<ConversationUpdateManyWithoutMembersNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
  interactions?: InputMaybe<InteractionUpdateManyWithoutAuthorNestedInput>;
  interactors?: InputMaybe<InteractionUpdateManyWithoutTargetNestedInput>;
  languageCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pools?: InputMaybe<PoolUpdateManyWithoutUserNestedInput>;
  pushEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  sensitiveFilterEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPoolsInput = {
  activities?: InputMaybe<ActivityUpdateManyWithoutUserNestedInput>;
  ageEnd?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  ageStart?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  conversations?: InputMaybe<ConversationUpdateManyWithoutMembersNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identity?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  images?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
  interactions?: InputMaybe<InteractionUpdateManyWithoutAuthorNestedInput>;
  interactors?: InputMaybe<InteractionUpdateManyWithoutTargetNestedInput>;
  languageCode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  looking?: InputMaybe<NullableEnumIdentityFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserNestedInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  pushEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  pushId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumRoleFieldUpdateOperationsInput>;
  sensitiveFilterEnabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutConversationsInput = {
  create: UserCreateWithoutConversationsInput;
  update: UserUpdateWithoutConversationsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutEventsInput = {
  create: UserCreateWithoutEventsInput;
  update: UserUpdateWithoutEventsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutImagesInput = {
  create: UserCreateWithoutImagesInput;
  update: UserUpdateWithoutImagesInput;
};

export type UserUpsertWithoutInteractionsInput = {
  create: UserCreateWithoutInteractionsInput;
  update: UserUpdateWithoutInteractionsInput;
};

export type UserUpsertWithoutInteractorsInput = {
  create: UserCreateWithoutInteractorsInput;
  update: UserUpdateWithoutInteractorsInput;
};

export type UserUpsertWithoutMessagesInput = {
  create: UserCreateWithoutMessagesInput;
  update: UserUpdateWithoutMessagesInput;
};

export type UserUpsertWithoutPoolsInput = {
  create: UserCreateWithoutPoolsInput;
  update: UserUpdateWithoutPoolsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  activities?: InputMaybe<ActivityListRelationFilter>;
  ageEnd?: InputMaybe<IntNullableFilter>;
  ageStart?: InputMaybe<IntNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringFilter>;
  conversations?: InputMaybe<ConversationListRelationFilter>;
  country?: InputMaybe<StringFilter>;
  dob?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  identity?: InputMaybe<EnumIdentityNullableFilter>;
  images?: InputMaybe<FileListRelationFilter>;
  interactions?: InputMaybe<InteractionListRelationFilter>;
  interactors?: InputMaybe<InteractionListRelationFilter>;
  languageCode?: InputMaybe<StringNullableFilter>;
  looking?: InputMaybe<EnumIdentityNullableFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  notifications?: InputMaybe<NotificationListRelationFilter>;
  phone?: InputMaybe<StringFilter>;
  pools?: InputMaybe<PoolListRelationFilter>;
  pushEnabled?: InputMaybe<BoolNullableFilter>;
  pushId?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleNullableFilter>;
  sensitiveFilterEnabled?: InputMaybe<BoolNullableFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type InteractMutationVariables = Exact<{
  input: InteractionInput;
}>;


export type InteractMutation = { __typename?: 'Mutation', interact: { __typename?: 'Interaction', matched: boolean, id: string } };

export type MessagePartsFragment = { __typename?: 'Message', id: string, content: string, createdAt: any, readByIds: Array<string>, receivedByIds: Array<string>, author: { __typename?: 'User', id: string, name?: string | null, avatar?: { __typename?: 'File', path: string } | null } };

export type ProfileMinimalPartsFragment = { __typename?: 'User', id: string, dob?: any | null, name?: string | null, bio?: string | null, images: Array<{ __typename?: 'File', id: string, path: string }>, location: { __typename?: 'LiveUser', online: boolean, latitude?: number | null, longitude?: number | null } };

export type UpdateProfileMutationVariables = Exact<{
  input: ProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'User', id: string } };

export type UpdateUserPresenceMutationVariables = Exact<{
  input: PresenceInput;
}>;


export type UpdateUserPresenceMutation = { __typename?: 'Mutation', updatePresence: boolean };

export type CheckOtpMutationVariables = Exact<{
  input: CheckCodeInput;
}>;


export type CheckOtpMutation = { __typename?: 'Mutation', checkOTP: { __typename?: 'CheckCodePayload', token: string, user: { __typename?: 'User', id: string, name?: string | null, phone: string } } };

export type OnboardMutationVariables = Exact<{
  input: OnboardInput;
}>;


export type OnboardMutation = { __typename?: 'Mutation', onboard: { __typename?: 'User', id: string, name?: string | null } };

export type SendOtpMutationVariables = Exact<{
  input: SendCodeInput;
}>;


export type SendOtpMutation = { __typename?: 'Mutation', sendOTP: { __typename?: 'SendCodePayload', success: boolean } };

export type DateQueueCancelMutationVariables = Exact<{
  type: EventType;
}>;


export type DateQueueCancelMutation = { __typename?: 'Mutation', dateQueueCancel: number };

export type DateQueueStartMutationVariables = Exact<{
  input: PoolQueueInput;
}>;


export type DateQueueStartMutation = { __typename?: 'Mutation', dateQueueStart: { __typename?: 'Pool', id: string, createdAt: any } };

export type UserDateStatusQueryVariables = Exact<{
  type: EventType;
}>;


export type UserDateStatusQuery = { __typename?: 'Query', userDateStatus: { __typename?: 'UserDateStatus', pool?: { __typename?: 'Pool', id: string, createdAt: any, type: EventType } | null, event?: { __typename?: 'Event', id: string, type: EventType } | null } };

export type FeedbackMutationVariables = Exact<{
  input: FeedbackInput;
}>;


export type FeedbackMutation = { __typename?: 'Mutation', sendFeedback?: { __typename?: 'Feedback', id: string } | null };

export type MarkAsReadMutationVariables = Exact<{
  messageIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type MarkAsReadMutation = { __typename?: 'Mutation', markAsRead: { __typename?: 'BatchPayload', count: number } };

export type SendMessageMutationVariables = Exact<{
  input: ConversationInput;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'Message', id: string, content: string, createdAt: any, readByIds: Array<string>, receivedByIds: Array<string>, author: { __typename?: 'User', id: string, name?: string | null, avatar?: { __typename?: 'File', path: string } | null } } };

export type MyConversationsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyConversationsQuery = { __typename?: 'Query', myConversations: Array<{ __typename?: 'Conversation', id: string, lastMessageContent?: string | null, lastMessageAuthor?: string | null, lastMessageDate?: any | null, members: Array<{ __typename?: 'User', id: string, name?: string | null, avatar?: { __typename?: 'File', path: string } | null }> }> };

export type MessagesQueryVariables = Exact<{
  where?: InputMaybe<MessageWhereInput>;
  orderBy?: InputMaybe<Array<MessageOrderByWithRelationInput> | MessageOrderByWithRelationInput>;
}>;


export type MessagesQuery = { __typename?: 'Query', messages: Array<{ __typename?: 'Message', id: string, content: string, createdAt: any, readByIds: Array<string>, receivedByIds: Array<string>, author: { __typename?: 'User', id: string, name?: string | null, avatar?: { __typename?: 'File', path: string } | null } }> };

export type InteractionsQueryVariables = Exact<{ [key: string]: never; }>;


export type InteractionsQuery = { __typename?: 'Query', interactions: Array<{ __typename?: 'Interaction', id: string, createdAt: any, matched: boolean, decision: Decision, target: { __typename?: 'User', name?: string | null, images: Array<{ __typename?: 'File', path: string }> } }> };

export type NearbyQueryVariables = Exact<{
  input: DiscoverInput;
}>;


export type NearbyQuery = { __typename?: 'Query', discover?: { __typename?: 'User', id: string, dob?: any | null, name?: string | null, bio?: string | null, images: Array<{ __typename?: 'File', id: string, path: string }>, location: { __typename?: 'LiveUser', online: boolean, latitude?: number | null, longitude?: number | null } } | null };

export type MePushQueryVariables = Exact<{ [key: string]: never; }>;


export type MePushQuery = { __typename?: 'Query', me?: { __typename?: 'User', pushEnabled?: boolean | null, pushId?: string | null, notifications: Array<{ __typename?: 'Notification', id: string, title: string, createdAt: any, content: string, url?: string | null, imageUrl?: string | null, type: NotificationType }> } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, dob?: any | null, name?: string | null, city: string, phone: string, pushEnabled?: boolean | null, pushId?: string | null, country: string, ageStart?: number | null, ageEnd?: number | null, bio?: string | null, looking?: Identity | null, identity?: Identity | null, images: Array<{ __typename?: 'File', id: string, path: string, type: string }> } | null };

export type ProfileQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProfileQuery = { __typename?: 'Query', findFirstUser?: { __typename?: 'User', id: string, dob?: any | null, name?: string | null, bio?: string | null, images: Array<{ __typename?: 'File', id: string, path: string }>, location: { __typename?: 'LiveUser', online: boolean, latitude?: number | null, longitude?: number | null } } | null };

export type MarkAsReceivedMutationVariables = Exact<{
  messageIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type MarkAsReceivedMutation = { __typename?: 'Mutation', markAsReceived: { __typename?: 'BatchPayload', count: number } };

export type NewMessageSubscriptionVariables = Exact<{
  currentUserId: Scalars['String'];
}>;


export type NewMessageSubscription = { __typename?: 'Subscription', newMessage: { __typename?: 'MessageWithTargetIds', targetId: string, conversationId: string, message: { __typename?: 'Message', id: string, content: string, createdAt: any, readByIds: Array<string>, receivedByIds: Array<string>, author: { __typename?: 'User', id: string, name?: string | null, avatar?: { __typename?: 'File', path: string } | null } } } };

export const MessagePartsFragmentDoc = gql`
    fragment MessageParts on Message {
  id
  content
  author {
    id
    name
    avatar {
      path
    }
  }
  createdAt
  readByIds
  receivedByIds
}
    `;
export const ProfileMinimalPartsFragmentDoc = gql`
    fragment ProfileMinimalParts on User {
  id
  dob
  name
  bio
  images {
    id
    path
  }
  location {
    online
    latitude
    longitude
  }
}
    `;
export const InteractDocument = gql`
    mutation interact($input: InteractionInput!) {
  interact(input: $input) {
    matched
    id
  }
}
    `;
export type InteractMutationFn = Apollo.MutationFunction<InteractMutation, InteractMutationVariables>;

/**
 * __useInteractMutation__
 *
 * To run a mutation, you first call `useInteractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInteractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [interactMutation, { data, loading, error }] = useInteractMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInteractMutation(baseOptions?: Apollo.MutationHookOptions<InteractMutation, InteractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InteractMutation, InteractMutationVariables>(InteractDocument, options);
      }
export type InteractMutationHookResult = ReturnType<typeof useInteractMutation>;
export type InteractMutationResult = Apollo.MutationResult<InteractMutation>;
export type InteractMutationOptions = Apollo.BaseMutationOptions<InteractMutation, InteractMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation updateProfile($input: ProfileInput!) {
  updateProfile(input: $input) {
    id
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UpdateUserPresenceDocument = gql`
    mutation updateUserPresence($input: PresenceInput!) {
  updatePresence(input: $input)
}
    `;
export type UpdateUserPresenceMutationFn = Apollo.MutationFunction<UpdateUserPresenceMutation, UpdateUserPresenceMutationVariables>;

/**
 * __useUpdateUserPresenceMutation__
 *
 * To run a mutation, you first call `useUpdateUserPresenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPresenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPresenceMutation, { data, loading, error }] = useUpdateUserPresenceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserPresenceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserPresenceMutation, UpdateUserPresenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserPresenceMutation, UpdateUserPresenceMutationVariables>(UpdateUserPresenceDocument, options);
      }
export type UpdateUserPresenceMutationHookResult = ReturnType<typeof useUpdateUserPresenceMutation>;
export type UpdateUserPresenceMutationResult = Apollo.MutationResult<UpdateUserPresenceMutation>;
export type UpdateUserPresenceMutationOptions = Apollo.BaseMutationOptions<UpdateUserPresenceMutation, UpdateUserPresenceMutationVariables>;
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
export const OnboardDocument = gql`
    mutation onboard($input: OnboardInput!) {
  onboard(input: $input) {
    id
    name
  }
}
    `;
export type OnboardMutationFn = Apollo.MutationFunction<OnboardMutation, OnboardMutationVariables>;

/**
 * __useOnboardMutation__
 *
 * To run a mutation, you first call `useOnboardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOnboardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onboardMutation, { data, loading, error }] = useOnboardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOnboardMutation(baseOptions?: Apollo.MutationHookOptions<OnboardMutation, OnboardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OnboardMutation, OnboardMutationVariables>(OnboardDocument, options);
      }
export type OnboardMutationHookResult = ReturnType<typeof useOnboardMutation>;
export type OnboardMutationResult = Apollo.MutationResult<OnboardMutation>;
export type OnboardMutationOptions = Apollo.BaseMutationOptions<OnboardMutation, OnboardMutationVariables>;
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
export const DateQueueCancelDocument = gql`
    mutation dateQueueCancel($type: EventType!) {
  dateQueueCancel(type: $type)
}
    `;
export type DateQueueCancelMutationFn = Apollo.MutationFunction<DateQueueCancelMutation, DateQueueCancelMutationVariables>;

/**
 * __useDateQueueCancelMutation__
 *
 * To run a mutation, you first call `useDateQueueCancelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDateQueueCancelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dateQueueCancelMutation, { data, loading, error }] = useDateQueueCancelMutation({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useDateQueueCancelMutation(baseOptions?: Apollo.MutationHookOptions<DateQueueCancelMutation, DateQueueCancelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DateQueueCancelMutation, DateQueueCancelMutationVariables>(DateQueueCancelDocument, options);
      }
export type DateQueueCancelMutationHookResult = ReturnType<typeof useDateQueueCancelMutation>;
export type DateQueueCancelMutationResult = Apollo.MutationResult<DateQueueCancelMutation>;
export type DateQueueCancelMutationOptions = Apollo.BaseMutationOptions<DateQueueCancelMutation, DateQueueCancelMutationVariables>;
export const DateQueueStartDocument = gql`
    mutation dateQueueStart($input: PoolQueueInput!) {
  dateQueueStart(input: $input) {
    id
    createdAt
  }
}
    `;
export type DateQueueStartMutationFn = Apollo.MutationFunction<DateQueueStartMutation, DateQueueStartMutationVariables>;

/**
 * __useDateQueueStartMutation__
 *
 * To run a mutation, you first call `useDateQueueStartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDateQueueStartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dateQueueStartMutation, { data, loading, error }] = useDateQueueStartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDateQueueStartMutation(baseOptions?: Apollo.MutationHookOptions<DateQueueStartMutation, DateQueueStartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DateQueueStartMutation, DateQueueStartMutationVariables>(DateQueueStartDocument, options);
      }
export type DateQueueStartMutationHookResult = ReturnType<typeof useDateQueueStartMutation>;
export type DateQueueStartMutationResult = Apollo.MutationResult<DateQueueStartMutation>;
export type DateQueueStartMutationOptions = Apollo.BaseMutationOptions<DateQueueStartMutation, DateQueueStartMutationVariables>;
export const UserDateStatusDocument = gql`
    query userDateStatus($type: EventType!) {
  userDateStatus(type: $type) {
    pool {
      id
      createdAt
      type
    }
    event {
      id
      type
    }
  }
}
    `;

/**
 * __useUserDateStatusQuery__
 *
 * To run a query within a React component, call `useUserDateStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDateStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDateStatusQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useUserDateStatusQuery(baseOptions: Apollo.QueryHookOptions<UserDateStatusQuery, UserDateStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserDateStatusQuery, UserDateStatusQueryVariables>(UserDateStatusDocument, options);
      }
export function useUserDateStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDateStatusQuery, UserDateStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserDateStatusQuery, UserDateStatusQueryVariables>(UserDateStatusDocument, options);
        }
export type UserDateStatusQueryHookResult = ReturnType<typeof useUserDateStatusQuery>;
export type UserDateStatusLazyQueryHookResult = ReturnType<typeof useUserDateStatusLazyQuery>;
export type UserDateStatusQueryResult = Apollo.QueryResult<UserDateStatusQuery, UserDateStatusQueryVariables>;
export const FeedbackDocument = gql`
    mutation feedback($input: FeedbackInput!) {
  sendFeedback(input: $input) {
    id
  }
}
    `;
export type FeedbackMutationFn = Apollo.MutationFunction<FeedbackMutation, FeedbackMutationVariables>;

/**
 * __useFeedbackMutation__
 *
 * To run a mutation, you first call `useFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [feedbackMutation, { data, loading, error }] = useFeedbackMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<FeedbackMutation, FeedbackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FeedbackMutation, FeedbackMutationVariables>(FeedbackDocument, options);
      }
export type FeedbackMutationHookResult = ReturnType<typeof useFeedbackMutation>;
export type FeedbackMutationResult = Apollo.MutationResult<FeedbackMutation>;
export type FeedbackMutationOptions = Apollo.BaseMutationOptions<FeedbackMutation, FeedbackMutationVariables>;
export const MarkAsReadDocument = gql`
    mutation markAsRead($messageIds: [String!]!) {
  markAsRead(messageIds: $messageIds) {
    count
  }
}
    `;
export type MarkAsReadMutationFn = Apollo.MutationFunction<MarkAsReadMutation, MarkAsReadMutationVariables>;

/**
 * __useMarkAsReadMutation__
 *
 * To run a mutation, you first call `useMarkAsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkAsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markAsReadMutation, { data, loading, error }] = useMarkAsReadMutation({
 *   variables: {
 *      messageIds: // value for 'messageIds'
 *   },
 * });
 */
export function useMarkAsReadMutation(baseOptions?: Apollo.MutationHookOptions<MarkAsReadMutation, MarkAsReadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkAsReadMutation, MarkAsReadMutationVariables>(MarkAsReadDocument, options);
      }
export type MarkAsReadMutationHookResult = ReturnType<typeof useMarkAsReadMutation>;
export type MarkAsReadMutationResult = Apollo.MutationResult<MarkAsReadMutation>;
export type MarkAsReadMutationOptions = Apollo.BaseMutationOptions<MarkAsReadMutation, MarkAsReadMutationVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($input: ConversationInput!) {
  sendMessage(input: $input) {
    ...MessageParts
  }
}
    ${MessagePartsFragmentDoc}`;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const MyConversationsDocument = gql`
    query MyConversations {
  myConversations {
    id
    members {
      id
      name
      avatar {
        path
      }
    }
    lastMessageContent
    lastMessageAuthor
    lastMessageDate
  }
}
    `;

/**
 * __useMyConversationsQuery__
 *
 * To run a query within a React component, call `useMyConversationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyConversationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyConversationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyConversationsQuery(baseOptions?: Apollo.QueryHookOptions<MyConversationsQuery, MyConversationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyConversationsQuery, MyConversationsQueryVariables>(MyConversationsDocument, options);
      }
export function useMyConversationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyConversationsQuery, MyConversationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyConversationsQuery, MyConversationsQueryVariables>(MyConversationsDocument, options);
        }
export type MyConversationsQueryHookResult = ReturnType<typeof useMyConversationsQuery>;
export type MyConversationsLazyQueryHookResult = ReturnType<typeof useMyConversationsLazyQuery>;
export type MyConversationsQueryResult = Apollo.QueryResult<MyConversationsQuery, MyConversationsQueryVariables>;
export const MessagesDocument = gql`
    query Messages($where: MessageWhereInput, $orderBy: [MessageOrderByWithRelationInput!]) {
  messages(where: $where, take: 10, orderBy: $orderBy) {
    ...MessageParts
  }
}
    ${MessagePartsFragmentDoc}`;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useMessagesQuery(baseOptions?: Apollo.QueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
      }
export function useMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesQuery, MessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessagesQuery, MessagesQueryVariables>(MessagesDocument, options);
        }
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<typeof useMessagesLazyQuery>;
export type MessagesQueryResult = Apollo.QueryResult<MessagesQuery, MessagesQueryVariables>;
export const InteractionsDocument = gql`
    query interactions {
  interactions {
    id
    createdAt
    matched
    decision
    target {
      name
      images {
        path
      }
    }
  }
}
    `;

/**
 * __useInteractionsQuery__
 *
 * To run a query within a React component, call `useInteractionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInteractionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInteractionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useInteractionsQuery(baseOptions?: Apollo.QueryHookOptions<InteractionsQuery, InteractionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InteractionsQuery, InteractionsQueryVariables>(InteractionsDocument, options);
      }
export function useInteractionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InteractionsQuery, InteractionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InteractionsQuery, InteractionsQueryVariables>(InteractionsDocument, options);
        }
export type InteractionsQueryHookResult = ReturnType<typeof useInteractionsQuery>;
export type InteractionsLazyQueryHookResult = ReturnType<typeof useInteractionsLazyQuery>;
export type InteractionsQueryResult = Apollo.QueryResult<InteractionsQuery, InteractionsQueryVariables>;
export const NearbyDocument = gql`
    query nearby($input: DiscoverInput!) {
  discover(input: $input) {
    ...ProfileMinimalParts
  }
}
    ${ProfileMinimalPartsFragmentDoc}`;

/**
 * __useNearbyQuery__
 *
 * To run a query within a React component, call `useNearbyQuery` and pass it any options that fit your needs.
 * When your component renders, `useNearbyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNearbyQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNearbyQuery(baseOptions: Apollo.QueryHookOptions<NearbyQuery, NearbyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NearbyQuery, NearbyQueryVariables>(NearbyDocument, options);
      }
export function useNearbyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NearbyQuery, NearbyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NearbyQuery, NearbyQueryVariables>(NearbyDocument, options);
        }
export type NearbyQueryHookResult = ReturnType<typeof useNearbyQuery>;
export type NearbyLazyQueryHookResult = ReturnType<typeof useNearbyLazyQuery>;
export type NearbyQueryResult = Apollo.QueryResult<NearbyQuery, NearbyQueryVariables>;
export const MePushDocument = gql`
    query mePush {
  me {
    pushEnabled
    pushId
    notifications {
      id
      title
      createdAt
      content
      url
      imageUrl
      type
    }
  }
}
    `;

/**
 * __useMePushQuery__
 *
 * To run a query within a React component, call `useMePushQuery` and pass it any options that fit your needs.
 * When your component renders, `useMePushQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMePushQuery({
 *   variables: {
 *   },
 * });
 */
export function useMePushQuery(baseOptions?: Apollo.QueryHookOptions<MePushQuery, MePushQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MePushQuery, MePushQueryVariables>(MePushDocument, options);
      }
export function useMePushLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MePushQuery, MePushQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MePushQuery, MePushQueryVariables>(MePushDocument, options);
        }
export type MePushQueryHookResult = ReturnType<typeof useMePushQuery>;
export type MePushLazyQueryHookResult = ReturnType<typeof useMePushLazyQuery>;
export type MePushQueryResult = Apollo.QueryResult<MePushQuery, MePushQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    dob
    name
    city
    phone
    pushEnabled
    pushId
    country
    ageStart
    ageEnd
    bio
    images {
      id
      path
      type
    }
    looking
    identity
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ProfileDocument = gql`
    query profile($id: String!) {
  findFirstUser(where: {id: {equals: $id}}) {
    ...ProfileMinimalParts
  }
}
    ${ProfileMinimalPartsFragmentDoc}`;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProfileQuery(baseOptions: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
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