import { userMutations } from "./resources/user/user.schema";
import { tokenMutation } from "./resources/token/token.schema";

const Mutation = `
    type Mutation {
        ${userMutations}
        ${tokenMutation}
    }
`;

export {
    Mutation
}