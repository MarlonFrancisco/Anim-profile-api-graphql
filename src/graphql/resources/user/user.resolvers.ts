
import { IContext } from "../../../repository/context";
import { composer } from "../../composable/composable.resolvers";
import { Auth } from "../../composable/auth.resolver";
import { GraphQLResolveInfo } from "graphql";
import { Ast } from "../../ast";
import { UserDto } from "../../../shared/dto/UserDto";
import { Fields } from "../../composable/fields.resolver";


export const userResolvers = {
    Query: {
        getUsers: composer(Auth, Fields)((parent: any, args, { User }: IContext, info: GraphQLResolveInfo) => {
            return User.findAll(args.fields);
        }),
        getUser: composer(Auth, Fields)((parent: any, { id, fields }, { User }: IContext, info: GraphQLResolveInfo) => {
            return User.findById(id, fields);
        })
    },
    Mutation: {
        userCreate: (parent: any, args: any, { User }: IContext) => {
            const entity = UserDto.fromBody(args.input);
            return User.save(entity);
        },
        deleteUser: composer(Auth, Fields)((parent: any, { id, fields }, { User }: IContext) => {
            return User.delete(id, fields);
        }),
        userUpdate: composer(Auth)((parent: any, args: any, { User }: IContext) => {
            const entity = UserDto.fromBody(args.input);
            return User.save(entity);
        }),
        userUpdatePassword: composer(Auth)((parent: any, { id, password }: {id: string, password: string}, { User }: IContext) => {
            return User.updatePassword(id, password);
        })
    }
}