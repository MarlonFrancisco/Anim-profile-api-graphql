import { UserRepository } from "../UserRepository"

export interface IContext {
    User: UserRepository;
}

export default {
    User: new UserRepository()
}