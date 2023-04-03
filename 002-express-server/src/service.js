const data = require('./data');

const getUser = () => data.users;

const getUserById = ({ id }) => {
    const user = data.users.find((user) => user.id === id);
    if (!user) {
        throw new Error('user not found');
    }
    return { name: user.name, age: user.age };
};

module.exports = { getUser, getUserById };