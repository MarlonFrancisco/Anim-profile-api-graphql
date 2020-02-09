import User, { IUserModel } from "../models/User";
import { MongoRepository } from "./base/MongoRepository";
import { UserDto } from "../shared/dto/UserDto";

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

    public findById(id: string, fields: string[]) {
        return User.findById(id).select(fields).exec();
    }

    public findAll(fields: string[]) {
        return User.find().select(fields).exec();
    }

    public find(params: any, fields: string[]) {
        return User.findOne(params).select(fields).exec();
    }

    public delete(id: string, fields: string[]) {
        return User.findByIdAndDelete(id).select(fields).exec();
    }

    public updatePassword(id: string, password: string) {
        return User.findByIdAndUpdate(id, {
            $set: {
                password,
            }
        }).exec();
    }

}
