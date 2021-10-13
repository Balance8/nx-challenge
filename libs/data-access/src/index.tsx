import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BigInt custom scalar type */
  BigInt: any;
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** Json custom scalar type */
  Json: any;
};

export type AggregateTicket = {
  __typename?: 'AggregateTicket';
  _avg?: Maybe<TicketAvgAggregateOutputType>;
  _count?: Maybe<TicketCountAggregateOutputType>;
  _max?: Maybe<TicketMaxAggregateOutputType>;
  _min?: Maybe<TicketMinAggregateOutputType>;
  _sum?: Maybe<TicketSumAggregateOutputType>;
  avg?: Maybe<TicketAvgAggregateOutputType>;
  count?: Maybe<TicketCountAggregateOutputType>;
  max?: Maybe<TicketMaxAggregateOutputType>;
  min?: Maybe<TicketMinAggregateOutputType>;
  sum?: Maybe<TicketSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregateOutputType>;
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  _sum?: Maybe<UserSumAggregateOutputType>;
  avg?: Maybe<UserAvgAggregateOutputType>;
  count?: Maybe<UserCountAggregateOutputType>;
  max?: Maybe<UserMaxAggregateOutputType>;
  min?: Maybe<UserMinAggregateOutputType>;
  sum?: Maybe<UserSumAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};


export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  max?: Maybe<NestedBoolFilter>;
  min?: Maybe<NestedBoolFilter>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};



export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntFilter>;
};


export type Mutation = {
  __typename?: 'Mutation';
  createOneTicket: Ticket;
  createOneUser: User;
  deleteManyTicket: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneTicket?: Maybe<Ticket>;
  deleteOneUser?: Maybe<User>;
  updateManyTicket: BatchPayload;
  updateManyUser: BatchPayload;
  updateOneTicket: Ticket;
  updateOneUser: User;
  upsertOneTicket: Ticket;
  upsertOneUser: User;
};


export type MutationCreateOneTicketArgs = {
  data: TicketCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyTicketArgs = {
  where?: Maybe<TicketWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneTicketArgs = {
  where: TicketWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyTicketArgs = {
  data: TicketUpdateManyMutationInput;
  where?: Maybe<TicketWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateOneTicketArgs = {
  data: TicketUpdateInput;
  where: TicketWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneTicketArgs = {
  create: TicketCreateInput;
  update: TicketUpdateInput;
  where: TicketWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  max?: Maybe<NestedBoolFilter>;
  min?: Maybe<NestedBoolFilter>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateTicket?: Maybe<AggregateTicket>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstTicket?: Maybe<Ticket>;
  findFirstUser?: Maybe<User>;
  findManyTicket: Array<Ticket>;
  findManyTicketCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueTicket?: Maybe<Ticket>;
  findUniqueUser?: Maybe<User>;
};


export type QueryAggregateTicketArgs = {
  cursor?: Maybe<TicketWhereUniqueInput>;
  distinct?: Maybe<TicketScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<TicketOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TicketWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstTicketArgs = {
  cursor?: Maybe<TicketWhereUniqueInput>;
  distinct?: Maybe<TicketScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<TicketOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TicketWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyTicketArgs = {
  cursor?: Maybe<TicketWhereUniqueInput>;
  distinct?: Maybe<TicketScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<TicketOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TicketWhereInput>;
};


export type QueryFindManyTicketCountArgs = {
  cursor?: Maybe<TicketWhereUniqueInput>;
  distinct?: Maybe<TicketScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<TicketOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TicketWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindUniqueTicketArgs = {
  where: TicketWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  completed: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type TicketAvgAggregateOutputType = {
  __typename?: 'TicketAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type TicketCountAggregateOutputType = {
  __typename?: 'TicketCountAggregateOutputType';
  _all: Scalars['Int'];
  completed: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TicketCreateInput = {
  completed?: Maybe<Scalars['Boolean']>;
  description: Scalars['String'];
  title: Scalars['String'];
  user: UserCreateNestedOneWithoutTicketsInput;
};

export type TicketCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TicketWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TicketCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TicketCreateWithoutUserInput>>>;
};

export type TicketCreateOrConnectWithoutUserInput = {
  create: TicketUncheckedCreateWithoutUserInput;
  where: TicketWhereUniqueInput;
};

export type TicketCreateWithoutUserInput = {
  completed?: Maybe<Scalars['Boolean']>;
  description: Scalars['String'];
  title: Scalars['String'];
};

export type TicketListRelationFilter = {
  every?: Maybe<TicketWhereInput>;
  none?: Maybe<TicketWhereInput>;
  some?: Maybe<TicketWhereInput>;
};

export type TicketMaxAggregateOutputType = {
  __typename?: 'TicketMaxAggregateOutputType';
  completed?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TicketMinAggregateOutputType = {
  __typename?: 'TicketMinAggregateOutputType';
  completed?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TicketOrderByInput = {
  completed?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum TicketScalarFieldEnum {
  Completed = 'completed',
  Description = 'description',
  Id = 'id',
  Title = 'title',
  UserId = 'userId'
}

export type TicketScalarWhereInput = {
  AND?: Maybe<Array<Maybe<TicketScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TicketScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<TicketScalarWhereInput>>>;
  completed?: Maybe<BoolFilter>;
  description?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  userId?: Maybe<IntFilter>;
};

export type TicketScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<TicketScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<TicketScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<TicketScalarWhereWithAggregatesInput>>>;
  completed?: Maybe<BoolWithAggregatesFilter>;
  description?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<IntWithAggregatesFilter>;
};

export type TicketSumAggregateOutputType = {
  __typename?: 'TicketSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TicketUncheckedCreateInput = {
  completed?: Maybe<Scalars['Boolean']>;
  description: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  userId: Scalars['Int'];
};

export type TicketUncheckedCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TicketWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TicketCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TicketCreateWithoutUserInput>>>;
};

export type TicketUncheckedCreateWithoutUserInput = {
  completed?: Maybe<Scalars['Boolean']>;
  description: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type TicketUncheckedUpdateInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TicketUncheckedUpdateManyInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  userId?: Maybe<IntFieldUpdateOperationsInput>;
};

export type TicketUncheckedUpdateManyWithoutTicketsInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TicketUncheckedUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TicketWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TicketCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TicketCreateWithoutUserInput>>>;
  delete?: Maybe<Array<Maybe<TicketWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TicketScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TicketWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TicketWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TicketUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<TicketUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<TicketUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type TicketUncheckedUpdateWithoutUserInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TicketUpdateInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutTicketsInput>;
};

export type TicketUpdateManyMutationInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TicketUpdateManyWithWhereWithoutUserInput = {
  data: TicketUncheckedUpdateManyWithoutTicketsInput;
  where: TicketScalarWhereInput;
};

export type TicketUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<Maybe<TicketWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<TicketCreateOrConnectWithoutUserInput>>>;
  create?: Maybe<Array<Maybe<TicketCreateWithoutUserInput>>>;
  delete?: Maybe<Array<Maybe<TicketWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<TicketScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<TicketWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<TicketWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<TicketUpdateWithWhereUniqueWithoutUserInput>>>;
  updateMany?: Maybe<Array<Maybe<TicketUpdateManyWithWhereWithoutUserInput>>>;
  upsert?: Maybe<Array<Maybe<TicketUpsertWithWhereUniqueWithoutUserInput>>>;
};

export type TicketUpdateWithWhereUniqueWithoutUserInput = {
  data: TicketUncheckedUpdateWithoutUserInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpdateWithoutUserInput = {
  completed?: Maybe<BoolFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TicketUpsertWithWhereUniqueWithoutUserInput = {
  create: TicketUncheckedCreateWithoutUserInput;
  update: TicketUncheckedUpdateWithoutUserInput;
  where: TicketWhereUniqueInput;
};

export type TicketWhereInput = {
  AND?: Maybe<Array<Maybe<TicketWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TicketWhereInput>>>;
  OR?: Maybe<Array<Maybe<TicketWhereInput>>>;
  completed?: Maybe<BoolFilter>;
  description?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type TicketWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCountOutputType>;
  id: Scalars['Int'];
  name: Scalars['String'];
  tickets: Array<Ticket>;
};


export type UserTicketsArgs = {
  cursor?: Maybe<TicketWhereUniqueInput>;
  distinct?: Maybe<TicketScalarFieldEnum>;
  orderBy?: Maybe<TicketOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TicketWhereInput>;
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type UserCountOutputType = {
  __typename?: 'UserCountOutputType';
  tickets: Scalars['Int'];
};

export type UserCreateInput = {
  name: Scalars['String'];
  tickets?: Maybe<TicketCreateNestedManyWithoutUserInput>;
};

export type UserCreateNestedOneWithoutTicketsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTicketsInput>;
  create?: Maybe<UserUncheckedCreateWithoutTicketsInput>;
};

export type UserCreateOrConnectWithoutTicketsInput = {
  create: UserUncheckedCreateWithoutTicketsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutTicketsInput = {
  name: Scalars['String'];
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type UserUncheckedCreateInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  tickets?: Maybe<TicketUncheckedCreateNestedManyWithoutUserInput>;
};

export type UserUncheckedCreateWithoutTicketsInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type UserUncheckedUpdateInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  tickets?: Maybe<TicketUncheckedUpdateManyWithoutUserInput>;
};

export type UserUncheckedUpdateManyInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutTicketsInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  tickets?: Maybe<TicketUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutTicketsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutTicketsInput>;
  create?: Maybe<UserUncheckedCreateWithoutTicketsInput>;
  update?: Maybe<UserUncheckedUpdateWithoutTicketsInput>;
  upsert?: Maybe<UserUpsertWithoutTicketsInput>;
};

export type UserUpdateWithoutTicketsInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutTicketsInput = {
  create: UserUncheckedCreateWithoutTicketsInput;
  update: UserUncheckedUpdateWithoutTicketsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  tickets?: Maybe<TicketListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type TicketFieldsFragment = { __typename?: 'Ticket', id: number, description: string, userId: number, completed: boolean, title: string };

export type TicketFragment = { __typename?: 'Ticket', id: number, description: string, userId: number, completed: boolean, title: string, user: { __typename?: 'User', id: number, name: string } };

export type FindUniqueTicketQueryVariables = Exact<{
  where: TicketWhereUniqueInput;
}>;


export type FindUniqueTicketQuery = { __typename?: 'Query', findUniqueTicket?: Maybe<{ __typename?: 'Ticket', id: number, description: string, userId: number, completed: boolean, title: string, user: { __typename?: 'User', id: number, name: string } }> };

export type FindManyTicketQueryVariables = Exact<{
  where?: Maybe<TicketWhereInput>;
  orderBy?: Maybe<Array<TicketOrderByInput> | TicketOrderByInput>;
  cursor?: Maybe<TicketWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyTicketQuery = { __typename?: 'Query', findManyTicket: Array<{ __typename?: 'Ticket', id: number, description: string, userId: number, completed: boolean, title: string, user: { __typename?: 'User', id: number, name: string } }> };

export type FindManyTicketCountQueryVariables = Exact<{
  where?: Maybe<TicketWhereInput>;
  orderBy?: Maybe<Array<TicketOrderByInput> | TicketOrderByInput>;
  cursor?: Maybe<TicketWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyTicketCountQuery = { __typename?: 'Query', findManyTicketCount: number };

export type CreateOneTicketMutationVariables = Exact<{
  data: TicketCreateInput;
}>;


export type CreateOneTicketMutation = { __typename?: 'Mutation', createOneTicket: { __typename?: 'Ticket', id: number, description: string, userId: number, completed: boolean, title: string, user: { __typename?: 'User', id: number, name: string } } };

export type UpdateOneTicketMutationVariables = Exact<{
  where: TicketWhereUniqueInput;
  data: TicketUpdateInput;
}>;


export type UpdateOneTicketMutation = { __typename?: 'Mutation', updateOneTicket: { __typename?: 'Ticket', id: number, description: string, userId: number, completed: boolean, title: string, user: { __typename?: 'User', id: number, name: string } } };

export type DeleteOneTicketMutationVariables = Exact<{
  where: TicketWhereUniqueInput;
}>;


export type DeleteOneTicketMutation = { __typename?: 'Mutation', deleteOneTicket?: Maybe<{ __typename?: 'Ticket', id: number, description: string, userId: number, completed: boolean, title: string, user: { __typename?: 'User', id: number, name: string } }> };

export type DeleteManyTicketMutationVariables = Exact<{
  where?: Maybe<TicketWhereInput>;
}>;


export type DeleteManyTicketMutation = { __typename?: 'Mutation', deleteManyTicket: { __typename?: 'BatchPayload', count: number } };

export type UpdateManyTicketMutationVariables = Exact<{
  where?: Maybe<TicketWhereInput>;
  data: TicketUpdateManyMutationInput;
}>;


export type UpdateManyTicketMutation = { __typename?: 'Mutation', updateManyTicket: { __typename?: 'BatchPayload', count: number } };

export type UserFieldsFragment = { __typename?: 'User', id: number, name: string };

export type UserFragment = { __typename?: 'User', id: number, name: string };

export type FindUniqueUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type FindUniqueUserQuery = { __typename?: 'Query', findUniqueUser?: Maybe<{ __typename?: 'User', id: number, name: string }> };

export type FindManyUserQueryVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput> | UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyUserQuery = { __typename?: 'Query', findManyUser: Array<{ __typename?: 'User', id: number, name: string }> };

export type FindManyUserCountQueryVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput> | UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyUserCountQuery = { __typename?: 'Query', findManyUserCount: number };

export type CreateOneUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateOneUserMutation = { __typename?: 'Mutation', createOneUser: { __typename?: 'User', id: number, name: string } };

export type UpdateOneUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type UpdateOneUserMutation = { __typename?: 'Mutation', updateOneUser: { __typename?: 'User', id: number, name: string } };

export type DeleteOneUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type DeleteOneUserMutation = { __typename?: 'Mutation', deleteOneUser?: Maybe<{ __typename?: 'User', id: number, name: string }> };

export type DeleteManyUserMutationVariables = Exact<{
  where?: Maybe<UserWhereInput>;
}>;


export type DeleteManyUserMutation = { __typename?: 'Mutation', deleteManyUser: { __typename?: 'BatchPayload', count: number } };

export type UpdateManyUserMutationVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  data: UserUpdateManyMutationInput;
}>;


export type UpdateManyUserMutation = { __typename?: 'Mutation', updateManyUser: { __typename?: 'BatchPayload', count: number } };

export const TicketFieldsFragmentDoc = gql`
    fragment TicketFields on Ticket {
  id
  description
  userId
  completed
  title
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
  name
}
    `;
export const TicketFragmentDoc = gql`
    fragment Ticket on Ticket {
  ...TicketFields
  user {
    ...UserFields
  }
}
    ${TicketFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  ...UserFields
}
    ${UserFieldsFragmentDoc}`;
export const FindUniqueTicketDocument = gql`
    query findUniqueTicket($where: TicketWhereUniqueInput!) {
  findUniqueTicket(where: $where) {
    ...Ticket
  }
}
    ${TicketFragmentDoc}`;

/**
 * __useFindUniqueTicketQuery__
 *
 * To run a query within a React component, call `useFindUniqueTicketQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueTicketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueTicketQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindUniqueTicketQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueTicketQuery, FindUniqueTicketQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueTicketQuery, FindUniqueTicketQueryVariables>(FindUniqueTicketDocument, options);
      }
export function useFindUniqueTicketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueTicketQuery, FindUniqueTicketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueTicketQuery, FindUniqueTicketQueryVariables>(FindUniqueTicketDocument, options);
        }
export type FindUniqueTicketQueryHookResult = ReturnType<typeof useFindUniqueTicketQuery>;
export type FindUniqueTicketLazyQueryHookResult = ReturnType<typeof useFindUniqueTicketLazyQuery>;
export type FindUniqueTicketQueryResult = Apollo.QueryResult<FindUniqueTicketQuery, FindUniqueTicketQueryVariables>;
export const FindManyTicketDocument = gql`
    query findManyTicket($where: TicketWhereInput, $orderBy: [TicketOrderByInput!], $cursor: TicketWhereUniqueInput, $skip: Int, $take: Int) {
  findManyTicket(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...Ticket
  }
}
    ${TicketFragmentDoc}`;

/**
 * __useFindManyTicketQuery__
 *
 * To run a query within a React component, call `useFindManyTicketQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyTicketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyTicketQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyTicketQuery(baseOptions?: Apollo.QueryHookOptions<FindManyTicketQuery, FindManyTicketQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyTicketQuery, FindManyTicketQueryVariables>(FindManyTicketDocument, options);
      }
export function useFindManyTicketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyTicketQuery, FindManyTicketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyTicketQuery, FindManyTicketQueryVariables>(FindManyTicketDocument, options);
        }
export type FindManyTicketQueryHookResult = ReturnType<typeof useFindManyTicketQuery>;
export type FindManyTicketLazyQueryHookResult = ReturnType<typeof useFindManyTicketLazyQuery>;
export type FindManyTicketQueryResult = Apollo.QueryResult<FindManyTicketQuery, FindManyTicketQueryVariables>;
export const FindManyTicketCountDocument = gql`
    query findManyTicketCount($where: TicketWhereInput, $orderBy: [TicketOrderByInput!], $cursor: TicketWhereUniqueInput, $skip: Int, $take: Int) {
  findManyTicketCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;

/**
 * __useFindManyTicketCountQuery__
 *
 * To run a query within a React component, call `useFindManyTicketCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyTicketCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyTicketCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyTicketCountQuery(baseOptions?: Apollo.QueryHookOptions<FindManyTicketCountQuery, FindManyTicketCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyTicketCountQuery, FindManyTicketCountQueryVariables>(FindManyTicketCountDocument, options);
      }
export function useFindManyTicketCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyTicketCountQuery, FindManyTicketCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyTicketCountQuery, FindManyTicketCountQueryVariables>(FindManyTicketCountDocument, options);
        }
export type FindManyTicketCountQueryHookResult = ReturnType<typeof useFindManyTicketCountQuery>;
export type FindManyTicketCountLazyQueryHookResult = ReturnType<typeof useFindManyTicketCountLazyQuery>;
export type FindManyTicketCountQueryResult = Apollo.QueryResult<FindManyTicketCountQuery, FindManyTicketCountQueryVariables>;
export const CreateOneTicketDocument = gql`
    mutation createOneTicket($data: TicketCreateInput!) {
  createOneTicket(data: $data) {
    ...Ticket
  }
}
    ${TicketFragmentDoc}`;

/**
 * __useCreateOneTicketMutation__
 *
 * To run a mutation, you first call `useCreateOneTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneTicketMutation, { data, loading, error }] = useCreateOneTicketMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneTicketMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneTicketMutation, CreateOneTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneTicketMutation, CreateOneTicketMutationVariables>(CreateOneTicketDocument, options);
      }
export type CreateOneTicketMutationHookResult = ReturnType<typeof useCreateOneTicketMutation>;
export type CreateOneTicketMutationResult = Apollo.MutationResult<CreateOneTicketMutation>;
export type CreateOneTicketMutationOptions = Apollo.BaseMutationOptions<CreateOneTicketMutation, CreateOneTicketMutationVariables>;
export const UpdateOneTicketDocument = gql`
    mutation updateOneTicket($where: TicketWhereUniqueInput!, $data: TicketUpdateInput!) {
  updateOneTicket(where: $where, data: $data) {
    ...Ticket
  }
}
    ${TicketFragmentDoc}`;

/**
 * __useUpdateOneTicketMutation__
 *
 * To run a mutation, you first call `useUpdateOneTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneTicketMutation, { data, loading, error }] = useUpdateOneTicketMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneTicketMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneTicketMutation, UpdateOneTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneTicketMutation, UpdateOneTicketMutationVariables>(UpdateOneTicketDocument, options);
      }
export type UpdateOneTicketMutationHookResult = ReturnType<typeof useUpdateOneTicketMutation>;
export type UpdateOneTicketMutationResult = Apollo.MutationResult<UpdateOneTicketMutation>;
export type UpdateOneTicketMutationOptions = Apollo.BaseMutationOptions<UpdateOneTicketMutation, UpdateOneTicketMutationVariables>;
export const DeleteOneTicketDocument = gql`
    mutation deleteOneTicket($where: TicketWhereUniqueInput!) {
  deleteOneTicket(where: $where) {
    ...Ticket
  }
}
    ${TicketFragmentDoc}`;

/**
 * __useDeleteOneTicketMutation__
 *
 * To run a mutation, you first call `useDeleteOneTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneTicketMutation, { data, loading, error }] = useDeleteOneTicketMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneTicketMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneTicketMutation, DeleteOneTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneTicketMutation, DeleteOneTicketMutationVariables>(DeleteOneTicketDocument, options);
      }
export type DeleteOneTicketMutationHookResult = ReturnType<typeof useDeleteOneTicketMutation>;
export type DeleteOneTicketMutationResult = Apollo.MutationResult<DeleteOneTicketMutation>;
export type DeleteOneTicketMutationOptions = Apollo.BaseMutationOptions<DeleteOneTicketMutation, DeleteOneTicketMutationVariables>;
export const DeleteManyTicketDocument = gql`
    mutation deleteManyTicket($where: TicketWhereInput) {
  deleteManyTicket(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyTicketMutation__
 *
 * To run a mutation, you first call `useDeleteManyTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyTicketMutation, { data, loading, error }] = useDeleteManyTicketMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyTicketMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyTicketMutation, DeleteManyTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyTicketMutation, DeleteManyTicketMutationVariables>(DeleteManyTicketDocument, options);
      }
export type DeleteManyTicketMutationHookResult = ReturnType<typeof useDeleteManyTicketMutation>;
export type DeleteManyTicketMutationResult = Apollo.MutationResult<DeleteManyTicketMutation>;
export type DeleteManyTicketMutationOptions = Apollo.BaseMutationOptions<DeleteManyTicketMutation, DeleteManyTicketMutationVariables>;
export const UpdateManyTicketDocument = gql`
    mutation updateManyTicket($where: TicketWhereInput, $data: TicketUpdateManyMutationInput!) {
  updateManyTicket(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyTicketMutation__
 *
 * To run a mutation, you first call `useUpdateManyTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyTicketMutation, { data, loading, error }] = useUpdateManyTicketMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyTicketMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManyTicketMutation, UpdateManyTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateManyTicketMutation, UpdateManyTicketMutationVariables>(UpdateManyTicketDocument, options);
      }
export type UpdateManyTicketMutationHookResult = ReturnType<typeof useUpdateManyTicketMutation>;
export type UpdateManyTicketMutationResult = Apollo.MutationResult<UpdateManyTicketMutation>;
export type UpdateManyTicketMutationOptions = Apollo.BaseMutationOptions<UpdateManyTicketMutation, UpdateManyTicketMutationVariables>;
export const FindUniqueUserDocument = gql`
    query findUniqueUser($where: UserWhereUniqueInput!) {
  findUniqueUser(where: $where) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindUniqueUserQuery__
 *
 * To run a query within a React component, call `useFindUniqueUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindUniqueUserQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueUserQuery, FindUniqueUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueUserQuery, FindUniqueUserQueryVariables>(FindUniqueUserDocument, options);
      }
export function useFindUniqueUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueUserQuery, FindUniqueUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueUserQuery, FindUniqueUserQueryVariables>(FindUniqueUserDocument, options);
        }
export type FindUniqueUserQueryHookResult = ReturnType<typeof useFindUniqueUserQuery>;
export type FindUniqueUserLazyQueryHookResult = ReturnType<typeof useFindUniqueUserLazyQuery>;
export type FindUniqueUserQueryResult = Apollo.QueryResult<FindUniqueUserQuery, FindUniqueUserQueryVariables>;
export const FindManyUserDocument = gql`
    query findManyUser($where: UserWhereInput, $orderBy: [UserOrderByInput!], $cursor: UserWhereUniqueInput, $skip: Int, $take: Int) {
  findManyUser(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindManyUserQuery__
 *
 * To run a query within a React component, call `useFindManyUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyUserQuery(baseOptions?: Apollo.QueryHookOptions<FindManyUserQuery, FindManyUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyUserQuery, FindManyUserQueryVariables>(FindManyUserDocument, options);
      }
export function useFindManyUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyUserQuery, FindManyUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyUserQuery, FindManyUserQueryVariables>(FindManyUserDocument, options);
        }
export type FindManyUserQueryHookResult = ReturnType<typeof useFindManyUserQuery>;
export type FindManyUserLazyQueryHookResult = ReturnType<typeof useFindManyUserLazyQuery>;
export type FindManyUserQueryResult = Apollo.QueryResult<FindManyUserQuery, FindManyUserQueryVariables>;
export const FindManyUserCountDocument = gql`
    query findManyUserCount($where: UserWhereInput, $orderBy: [UserOrderByInput!], $cursor: UserWhereUniqueInput, $skip: Int, $take: Int) {
  findManyUserCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;

/**
 * __useFindManyUserCountQuery__
 *
 * To run a query within a React component, call `useFindManyUserCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyUserCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyUserCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyUserCountQuery(baseOptions?: Apollo.QueryHookOptions<FindManyUserCountQuery, FindManyUserCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyUserCountQuery, FindManyUserCountQueryVariables>(FindManyUserCountDocument, options);
      }
export function useFindManyUserCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyUserCountQuery, FindManyUserCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyUserCountQuery, FindManyUserCountQueryVariables>(FindManyUserCountDocument, options);
        }
export type FindManyUserCountQueryHookResult = ReturnType<typeof useFindManyUserCountQuery>;
export type FindManyUserCountLazyQueryHookResult = ReturnType<typeof useFindManyUserCountLazyQuery>;
export type FindManyUserCountQueryResult = Apollo.QueryResult<FindManyUserCountQuery, FindManyUserCountQueryVariables>;
export const CreateOneUserDocument = gql`
    mutation createOneUser($data: UserCreateInput!) {
  createOneUser(data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useCreateOneUserMutation__
 *
 * To run a mutation, you first call `useCreateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneUserMutation, { data, loading, error }] = useCreateOneUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneUserMutation, CreateOneUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneUserMutation, CreateOneUserMutationVariables>(CreateOneUserDocument, options);
      }
export type CreateOneUserMutationHookResult = ReturnType<typeof useCreateOneUserMutation>;
export type CreateOneUserMutationResult = Apollo.MutationResult<CreateOneUserMutation>;
export type CreateOneUserMutationOptions = Apollo.BaseMutationOptions<CreateOneUserMutation, CreateOneUserMutationVariables>;
export const UpdateOneUserDocument = gql`
    mutation updateOneUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
  updateOneUser(where: $where, data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useUpdateOneUserMutation__
 *
 * To run a mutation, you first call `useUpdateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneUserMutation, { data, loading, error }] = useUpdateOneUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneUserMutation, UpdateOneUserMutationVariables>(UpdateOneUserDocument, options);
      }
export type UpdateOneUserMutationHookResult = ReturnType<typeof useUpdateOneUserMutation>;
export type UpdateOneUserMutationResult = Apollo.MutationResult<UpdateOneUserMutation>;
export type UpdateOneUserMutationOptions = Apollo.BaseMutationOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>;
export const DeleteOneUserDocument = gql`
    mutation deleteOneUser($where: UserWhereUniqueInput!) {
  deleteOneUser(where: $where) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useDeleteOneUserMutation__
 *
 * To run a mutation, you first call `useDeleteOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneUserMutation, { data, loading, error }] = useDeleteOneUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneUserMutation, DeleteOneUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneUserMutation, DeleteOneUserMutationVariables>(DeleteOneUserDocument, options);
      }
export type DeleteOneUserMutationHookResult = ReturnType<typeof useDeleteOneUserMutation>;
export type DeleteOneUserMutationResult = Apollo.MutationResult<DeleteOneUserMutation>;
export type DeleteOneUserMutationOptions = Apollo.BaseMutationOptions<DeleteOneUserMutation, DeleteOneUserMutationVariables>;
export const DeleteManyUserDocument = gql`
    mutation deleteManyUser($where: UserWhereInput) {
  deleteManyUser(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyUserMutation__
 *
 * To run a mutation, you first call `useDeleteManyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyUserMutation, { data, loading, error }] = useDeleteManyUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteManyUserMutation, DeleteManyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteManyUserMutation, DeleteManyUserMutationVariables>(DeleteManyUserDocument, options);
      }
export type DeleteManyUserMutationHookResult = ReturnType<typeof useDeleteManyUserMutation>;
export type DeleteManyUserMutationResult = Apollo.MutationResult<DeleteManyUserMutation>;
export type DeleteManyUserMutationOptions = Apollo.BaseMutationOptions<DeleteManyUserMutation, DeleteManyUserMutationVariables>;
export const UpdateManyUserDocument = gql`
    mutation updateManyUser($where: UserWhereInput, $data: UserUpdateManyMutationInput!) {
  updateManyUser(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyUserMutation__
 *
 * To run a mutation, you first call `useUpdateManyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyUserMutation, { data, loading, error }] = useUpdateManyUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManyUserMutation, UpdateManyUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateManyUserMutation, UpdateManyUserMutationVariables>(UpdateManyUserDocument, options);
      }
export type UpdateManyUserMutationHookResult = ReturnType<typeof useUpdateManyUserMutation>;
export type UpdateManyUserMutationResult = Apollo.MutationResult<UpdateManyUserMutation>;
export type UpdateManyUserMutationOptions = Apollo.BaseMutationOptions<UpdateManyUserMutation, UpdateManyUserMutationVariables>;