const User = require('../models').User;

const createUser = (req, res) => {
    User.create(req.body, (err, createdUser) => {
        if(err){
            return res.status(500).json(err);
        }
        res.status(200).json(createdUser);
    });
}

const showUser = (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(200).json(foundUser)
    })
}

const showUsers = (req, res) => {
    Users.find({}, (err,  foundUsers) => {
        if(err){
            return res.status(500).json(err);
        }
        res.status(200).json(foundUsers)
    })
}

const deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(200).json(deletedSUser)
    })
}

const updateUser = (req,res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser) => {
        if(err){
            return res.status(500).json(err);
        }
        res.status(200).json(updatedUser)
    })
}

module.exports = {
    createUser,
    showUser,
    showUsers,
    deleteUser,
    updateUser
}