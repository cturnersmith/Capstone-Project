const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/', ctrl.user.createUser);

router.get('/all', ctrl.user.showUsers)

router.get('/:id', ctrl.user.showUser);
router.delete('/:id', ctrl.user.deleteUser);
router.put('/:id', ctrl.user.updateUser);

module.exports = router;