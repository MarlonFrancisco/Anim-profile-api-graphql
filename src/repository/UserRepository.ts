import User, { IUserModel } from "../models/User";
import { MongoRepository } from "./base/MongoRepository";
import { UserDto } from "../dto/UserDto";

export class UserRepository extends MongoRepository<IUserModel, UserDto> {
    public save(entity: IUserModel | UserDto) {
        if (entity.id) {
            return User.findByIdAndUpdate(entity.id, {
                $set: {
                    ...entity
                }
            }, { new: true }).exec();
        }
        return User.create(entity);
    }

    public findById(id: string) {
        return User.findById(id).exec();
    }

    public findAll() {
        return User.find().exec();
    }

    public delete(id: string) {
        return User.findByIdAndDelete(id).exec();
    }

    public updatePassword(id: string, password: string) {
        return User.findByIdAndUpdate(id, {
            $set: {
                password,
            }
        }).exec();
    }
}
