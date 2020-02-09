import { GraphQLFieldResolver } from "graphql";
import { ComposerResolver } from "./composable.resolvers";
import { Jwt } from "../../utils/Jwt";

export const Auth: ComposerResolver<any, any> = (
    resolver: GraphQLFieldResolver<any, any>,
): GraphQLFieldResolver<any, any> => {
    return (parent, args, context, info) => {
        let result: GraphQLFieldResolver<any, any>;
        if (!context.token) {
            throw new Error("Unathorized, Token not provided");
        }

        Jwt.verify(context.token, (err, decoded) => {
            if (err) {
                throw new Error(err.message);
            }

            args.id = decoded.sub;

            result = resolver(parent, args, context, info);
        });

        return result;
    };
};
