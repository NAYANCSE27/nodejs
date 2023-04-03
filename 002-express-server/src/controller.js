const Service = require('./service');

const getUser = (req, res) => res.status(200).json(Service.getUser());

const getUserById = (req, res) => {
    res.status(200).json(Service.getUserById({
        id: req.params.id,
    }));
}

module.exports = {
    getUser,
    getUserById,
}