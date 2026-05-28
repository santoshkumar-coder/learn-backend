const User = require('../model/userModel');
const bcrypt = require('bcrypt');

const userController = {

    createUser : async (req, res) => {
        // // res.send('Hello World!');
        // // console.log('Post request received');
        // let user = await User.create({
        //     name: 'testUSer1',
        //     age: 121,
        //     email: 'test@exvzfmail.com'
        // });



        const { name, age, email, password } = req.body;

        const existUser = await User.find({ email });
        console.log('Exist User : ', existUser);
        if (existUser.length > 0) {
             return res.status(400).json({
                success: false,
                message: 'User already exist'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

         let user = await User.create({
            name,
            age,
            email,
            password:hashedPassword
        });
        res.send(user);
        console.log('Post request received', user);
    },
    getAllUser: async (req, res) => {
        const allUser = await User.find();
        console.log('All USer ', allUser);
        // res.send(allUser)
        res.status(200).json({
            success: true,
            data: allUser
        })
    },
    getSpecificUser :async (req, res) => {
        const userId = req.params.id;
        console.log('id : ', userId);
        const user = await User.findById(userId);
        console.log('User : ', user);
        res.status(200).json({
            success: true,
            data: user
        })
    
    
    },


    userUpdate : async (req, res) => {
        const userId = req.params.id;
        const updateuser = await User.findByIdAndUpdate(userId, {
            name: 'testuSer',
        },
            { new: true }
        );
        res.send(updateuser);
        console.log('User updated : ', updateuser);
    },


    userDelete : async (req, res) => {
        const userId = req.params.id;
        const deleteuser = await User.findByIdAndDelete(userId);
        res.send(deleteuser);
        console.log('User deleted : ', deleteuser);
    },
    userlogin : async(req, res)=>{
        const { email, password } = req.body;
        const existUser = await User.find({ email });
        console.log('Exist User : ', existUser);
        if (existUser.length === 0) {
             return res.status(400).json({
                success: false,
                message: 'User not exist'
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, existUser[0].password);
        console.log('isPasswordMatch : ', isPasswordMatch);

        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid password'
            });
        }
        res.send('user login sucessfully...')


    }

};

module.exports = userController;