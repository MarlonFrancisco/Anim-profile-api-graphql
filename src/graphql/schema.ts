import { makeExecutableSchema } from "graphql-tools";
import { Query } from "./query";
import { Mutation } from "./mutation";
import { userTypes } from "./resources/user/user.schema";
import { postTypes } from "./resources/post/post.schema";
import { commentTypes } from "./resources/comment/comment.schema";
import { merge } from "lodash";
import { userResolvers } from "./resources/user/user.resolvers";
import { tokenResolvers } from "./resources/token/token.resolvers";
import { tokenTypes } from "./resources/token/token.schema";

const resolvers = merge(
    userResolvers,
    tokenResolvers
);

const SchemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`;

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        Query,
        Mutation,
        tokenTypes,
        userTypes,
    ],
    resolvers
});