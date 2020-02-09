const userTypes = `
    type User {
        _id: ID
        name: String
        email: String
        photo: String
    }

    input UserCreateInput {
        name: String!
        email: String!
        password: String!
        photo: String
    }

    input UserUpdateInput {
        name: String
        email: String
        photo: String
    }
`;

const userQueries = `
    getUsers: [ User! ]
    getUser: User
`;

const userMutations = `
    userCreate(input: UserCreateInput): User!
    userUpdate(input: UserUpdateInput): User!
    userUpdatePassword(password: String!): User!
    deleteUser: User!
`;

export { userQueries, userMutations, userTypes };
