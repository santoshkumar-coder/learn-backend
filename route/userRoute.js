const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');``


// crud
router.post('/post', userController.createUser
);
router.post('/login', userController.userlogin
);



router.get('/get-all-users', userController.getAllUser
)



router.get('/get-user/:id', userController.getSpecificUser
)



router.put('/update-user/:id',  userController.userUpdate
)


router.delete('/delete-user/:id',  userController.userDelete
)

module.exports = router;
