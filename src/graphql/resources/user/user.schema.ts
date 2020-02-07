const userTypes = `
    input UserInput {
        id: ID
        name: String
        email: String
        photo: String
    }
    
    type User {
        id: ID
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
    getUser(id: ID!): User
`;

const userMutations = `
    userCreate(input: UserCreateInput): User!
    userUpdate(id: ID!, input: UserUpdateInput): User!
    userUpdatePassword(id: ID!, password: String!): User!
    deleteUser(id: ID!): User!
`;

export {
    userQueries,
    userMutations,
    userTypes
};
