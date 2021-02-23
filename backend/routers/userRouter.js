import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../../Techno/src/data.js'
import User from '../models/userModel.js';
import {generateToken} from '../utils.js';

const userRouter = express.Router();
userRouter.get(
<<<<<<< HEAD
    '/seed',
    expressAsyncHandler(async (req, res) => {
        await User.remove({})
        const createdUsers = await User.insertMany(data.users);
        res.send({ createdUsers });
    }));

userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user),
                });
                return;
            }
        }
        res.status(401).send({message:'Invalid email or password'});
    })
);
=======
    '/seed' ,
    expressAsyncHandler (async(req,res) => {
        await User.remove({})
        const createdUsers = await User.insertMany(data.users);
        res.send({createdUsers});
}));
>>>>>>> 13c2efae4ef7d59bd85d290decb810fbd3e3990f

export default userRouter;