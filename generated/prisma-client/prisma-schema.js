module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateIndustry {
  count: Int!
}

type AggregatePosting {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Industry {
  id: ID!
  name: String!
  postings(where: PostingWhereInput, orderBy: PostingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Posting!]
}

type IndustryConnection {
  pageInfo: PageInfo!
  edges: [IndustryEdge]!
  aggregate: AggregateIndustry!
}

input IndustryCreateInput {
  id: ID
  name: String!
  postings: PostingCreateManyWithoutIndustryInput
}

input IndustryCreateOneWithoutPostingsInput {
  create: IndustryCreateWithoutPostingsInput
  connect: IndustryWhereUniqueInput
}

input IndustryCreateWithoutPostingsInput {
  id: ID
  name: String!
}

type IndustryEdge {
  node: Industry!
  cursor: String!
}

enum IndustryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type IndustryPreviousValues {
  id: ID!
  name: String!
}

type IndustrySubscriptionPayload {
  mutation: MutationType!
  node: Industry
  updatedFields: [String!]
  previousValues: IndustryPreviousValues
}

input IndustrySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IndustryWhereInput
  AND: [IndustrySubscriptionWhereInput!]
  OR: [IndustrySubscriptionWhereInput!]
  NOT: [IndustrySubscriptionWhereInput!]
}

input IndustryUpdateInput {
  name: String
  postings: PostingUpdateManyWithoutIndustryInput
}

input IndustryUpdateManyMutationInput {
  name: String
}

input IndustryUpdateOneRequiredWithoutPostingsInput {
  create: IndustryCreateWithoutPostingsInput
  update: IndustryUpdateWithoutPostingsDataInput
  upsert: IndustryUpsertWithoutPostingsInput
  connect: IndustryWhereUniqueInput
}

input IndustryUpdateWithoutPostingsDataInput {
  name: String
}

input IndustryUpsertWithoutPostingsInput {
  update: IndustryUpdateWithoutPostingsDataInput!
  create: IndustryCreateWithoutPostingsInput!
}

input IndustryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  postings_every: PostingWhereInput
  postings_some: PostingWhereInput
  postings_none: PostingWhereInput
  AND: [IndustryWhereInput!]
  OR: [IndustryWhereInput!]
  NOT: [IndustryWhereInput!]
}

input IndustryWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Mutation {
  createIndustry(data: IndustryCreateInput!): Industry!
  updateIndustry(data: IndustryUpdateInput!, where: IndustryWhereUniqueInput!): Industry
  updateManyIndustries(data: IndustryUpdateManyMutationInput!, where: IndustryWhereInput): BatchPayload!
  upsertIndustry(where: IndustryWhereUniqueInput!, create: IndustryCreateInput!, update: IndustryUpdateInput!): Industry!
  deleteIndustry(where: IndustryWhereUniqueInput!): Industry
  deleteManyIndustries(where: IndustryWhereInput): BatchPayload!
  createPosting(data: PostingCreateInput!): Posting!
  updatePosting(data: PostingUpdateInput!, where: PostingWhereUniqueInput!): Posting
  updateManyPostings(data: PostingUpdateManyMutationInput!, where: PostingWhereInput): BatchPayload!
  upsertPosting(where: PostingWhereUniqueInput!, create: PostingCreateInput!, update: PostingUpdateInput!): Posting!
  deletePosting(where: PostingWhereUniqueInput!): Posting
  deleteManyPostings(where: PostingWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Posting {
  id: ID!
  coach: String!
  title: String!
  industry: Industry!
  location: String!
  price: Int!
  description: String!
  createdAt: DateTime!
}

type PostingConnection {
  pageInfo: PageInfo!
  edges: [PostingEdge]!
  aggregate: AggregatePosting!
}

input PostingCreateInput {
  id: ID
  coach: String!
  title: String!
  industry: IndustryCreateOneWithoutPostingsInput!
  location: String!
  price: Int!
  description: String!
}

input PostingCreateManyWithoutIndustryInput {
  create: [PostingCreateWithoutIndustryInput!]
  connect: [PostingWhereUniqueInput!]
}

input PostingCreateWithoutIndustryInput {
  id: ID
  coach: String!
  title: String!
  location: String!
  price: Int!
  description: String!
}

type PostingEdge {
  node: Posting!
  cursor: String!
}

enum PostingOrderByInput {
  id_ASC
  id_DESC
  coach_ASC
  coach_DESC
  title_ASC
  title_DESC
  location_ASC
  location_DESC
  price_ASC
  price_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostingPreviousValues {
  id: ID!
  coach: String!
  title: String!
  location: String!
  price: Int!
  description: String!
  createdAt: DateTime!
}

input PostingScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  coach: String
  coach_not: String
  coach_in: [String!]
  coach_not_in: [String!]
  coach_lt: String
  coach_lte: String
  coach_gt: String
  coach_gte: String
  coach_contains: String
  coach_not_contains: String
  coach_starts_with: String
  coach_not_starts_with: String
  coach_ends_with: String
  coach_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [PostingScalarWhereInput!]
  OR: [PostingScalarWhereInput!]
  NOT: [PostingScalarWhereInput!]
}

type PostingSubscriptionPayload {
  mutation: MutationType!
  node: Posting
  updatedFields: [String!]
  previousValues: PostingPreviousValues
}

input PostingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostingWhereInput
  AND: [PostingSubscriptionWhereInput!]
  OR: [PostingSubscriptionWhereInput!]
  NOT: [PostingSubscriptionWhereInput!]
}

input PostingUpdateInput {
  coach: String
  title: String
  industry: IndustryUpdateOneRequiredWithoutPostingsInput
  location: String
  price: Int
  description: String
}

input PostingUpdateManyDataInput {
  coach: String
  title: String
  location: String
  price: Int
  description: String
}

input PostingUpdateManyMutationInput {
  coach: String
  title: String
  location: String
  price: Int
  description: String
}

input PostingUpdateManyWithoutIndustryInput {
  create: [PostingCreateWithoutIndustryInput!]
  delete: [PostingWhereUniqueInput!]
  connect: [PostingWhereUniqueInput!]
  set: [PostingWhereUniqueInput!]
  disconnect: [PostingWhereUniqueInput!]
  update: [PostingUpdateWithWhereUniqueWithoutIndustryInput!]
  upsert: [PostingUpsertWithWhereUniqueWithoutIndustryInput!]
  deleteMany: [PostingScalarWhereInput!]
  updateMany: [PostingUpdateManyWithWhereNestedInput!]
}

input PostingUpdateManyWithWhereNestedInput {
  where: PostingScalarWhereInput!
  data: PostingUpdateManyDataInput!
}

input PostingUpdateWithoutIndustryDataInput {
  coach: String
  title: String
  location: String
  price: Int
  description: String
}

input PostingUpdateWithWhereUniqueWithoutIndustryInput {
  where: PostingWhereUniqueInput!
  data: PostingUpdateWithoutIndustryDataInput!
}

input PostingUpsertWithWhereUniqueWithoutIndustryInput {
  where: PostingWhereUniqueInput!
  update: PostingUpdateWithoutIndustryDataInput!
  create: PostingCreateWithoutIndustryInput!
}

input PostingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  coach: String
  coach_not: String
  coach_in: [String!]
  coach_not_in: [String!]
  coach_lt: String
  coach_lte: String
  coach_gt: String
  coach_gte: String
  coach_contains: String
  coach_not_contains: String
  coach_starts_with: String
  coach_not_starts_with: String
  coach_ends_with: String
  coach_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  industry: IndustryWhereInput
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [PostingWhereInput!]
  OR: [PostingWhereInput!]
  NOT: [PostingWhereInput!]
}

input PostingWhereUniqueInput {
  id: ID
}

type Query {
  industry(where: IndustryWhereUniqueInput!): Industry
  industries(where: IndustryWhereInput, orderBy: IndustryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Industry]!
  industriesConnection(where: IndustryWhereInput, orderBy: IndustryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IndustryConnection!
  posting(where: PostingWhereUniqueInput!): Posting
  postings(where: PostingWhereInput, orderBy: PostingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Posting]!
  postingsConnection(where: PostingWhereInput, orderBy: PostingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostingConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  industry(where: IndustrySubscriptionWhereInput): IndustrySubscriptionPayload
  posting(where: PostingSubscriptionWhereInput): PostingSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    