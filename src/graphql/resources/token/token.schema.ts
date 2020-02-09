const tokenTypes = `
    type Token {
        token: String
    }
`;

const tokenMutation = `
    tokenCreate(email: String!, password: String!): Token
`;

export {
    tokenTypes,
    tokenMutation
}
