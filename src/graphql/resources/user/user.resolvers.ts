import { UserDto } from "../../../dto/UserDto";
import { IContext } from "../../../repository/context";
import { composer } from "../../composable/composable.resolvers";
import { Auth } from "../../composable/auth.resolver";


export const userResolvers = {
    Query: {
        getUsers: composer(Auth)((parent: any, {}, { User }: IContext) => {
            return User.findAll();
        }),
        getUser: composer(Auth)(async (parent: any, { id }: {id: string}, { User }: IContext ) => {
            return await User.findById(id);
        })
    },
    Mutation: {
        userCreate: (parent: any, args: any, { User }: IContext) => {
            const entity = UserDto.fromBody(args.input);
            return User.save(entity);
        },
        deleteUser: composer(Auth)((parent: any, { id }: { id: string }, { User }: IContext) => {
            return User.delete(id);
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