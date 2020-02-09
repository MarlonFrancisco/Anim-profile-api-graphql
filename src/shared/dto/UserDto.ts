export class UserDto {
    public id?: string;
    public name: string;
    public email: string;
    public password?: string;
    public photo: string;

    public static fromBody(args: any): UserDto {
        const user = new UserDto();

        user.name = args.name;
        user.email = args.email;
        user.password = args.password;
        user.photo = args.photo;

        return user;
    }
}
