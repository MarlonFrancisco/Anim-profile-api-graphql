import { GraphQLResolveInfo } from "graphql";
import graphFields from "graphql-fields";

export class Ast {
    public static getFields(info: GraphQLResolveInfo): string[] {
        return Object.keys(graphFields(info));
    }
}
