const { Router } = require('express');

const userController = require('./controller/userController');

const router = Router();

router.post('/user-create', userController.createUser)
router.put('/user-update/:id', userController.updateUser)
router.get('/user-list', userController.listUsers)
router.delete('/user-delete/:id', userController.deleteUser)

module.exports = router;