import { UserRepository } from "../../../repository/UserRepository";
import { UserDto } from "../../../dto/UserDto";

interface IContext {
    User: UserRepository
}

export const userResolvers = {
    Query: {
        getUsers: (parent: any, {}, { User }: IContext) => {
            return User.findAll();
        },
        getUser: (parent: any, { id }: {id: string}, { User }: IContext ) => {
            return User.findById(id);
        }
    },
    Mutation: {
        userCreate: (parent: any, args: any, { User }: IContext) => {
            const entity = UserDto.fromBody(args.input);
            return User.save(entity);
        },
        deleteUser: (parent: any, { id }: { id: string }, { User }: IContext) => {
            return User.delete(id);
        },
        userUpdate: (parent: any, args: any, { User }: IContext) => {
            const entity = UserDto.fromBody(args.input);
            return User.save(entity);
        },
        userUpdatePassword: (parent: any, { id, password }: {id: string, password: string}, { User }: IContext) => {
            return User.updatePassword(id, password);
        }
    }
}