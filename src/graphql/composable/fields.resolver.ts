import { GraphQLFieldResolver } from "graphql";
import { ComposerResolver } from "./composable.resolvers";
import { Ast } from "../ast";

export const Fields: ComposerResolver<any, any> = (resolver: GraphQLFieldResolver<any, any>): GraphQLFieldResolver<any, any> => {
    return (parent, args, context, info) => {
        const fields = Ast.getFields(info);
        return resolver(parent, { ...args, fields }, context, info);
    }
}