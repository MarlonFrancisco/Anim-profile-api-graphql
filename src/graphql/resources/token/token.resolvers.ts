import { IContext } from "../../../repository/context";
import { Jwt } from "../../../utils/Jwt";

export const tokenResolvers = {
    Mutation: {
        tokenCreate: async (
            parent: any,
            args: { email: string; password: string },
            { User }: IContext,
        ) => {
            const user = await User.find(args);

            if (!user) {
                throw new Error("Unauthorized, verify email or password!");
            }
            return {
                token: Jwt.create({
                    sub: user._id,
                    exp: 6000000,
                }),
            };
        },
    },
};
