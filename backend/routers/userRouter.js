import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../../Techno/src/data.js'
import User from '../models/userModel.js';
import { generateToken, isAdmin, isAuth } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/',isAuth,isAdmin,expressAsyncHandler(async(req, res)=>{
  const users=User.find({});
  res.send(users)
  
}));

userRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        await User.remove({})
        const createdUsers = await User.insertMany(data.users);
        res.send({ createdUsers });
}));

//signin api
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
                    isSeller: user.isSeller,
                    token: generateToken(user),
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid email or password' });
    })
);
//router for signup
userRouter.post('/signup', expressAsyncHandler(async (req, res) => {
    const user = new User({
        name: req.body.name, email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        isSeller: user.isSeller,
        token: generateToken(createdUser),
    });
})
);

//redister

userRouter.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      const createdUser = await user.save();
      res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        isSeller: user.isSeller,
        token: generateToken(createdUser),
      });
    })
  );

  userRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );
    
/////////////////update user profile
userRouter.put('/profile', isAuth, expressAsyncHandler(async (req,res)=>{
    const user= await User.findById(req.user._id);
    console.log(user);
    if(user){
        user.name= req.body.name;
        user.email= req.body.email;
        if (user.isSeller) {
          user.seller.name = req.body.sellerName;
          user.seller.logo = req.body.sellerLogo;
          user.seller.description =req.body.sellerDescription;
        }
        if(req.user.password){
            user.password= bcrypt.hashSync(req.body.password)
        }

        const updateUser= await user.save();
        res.send(
           { _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
            isSeller: user.isSeller,
            token: generateToken(updateUser)

           }
        )
    }
}))

////////////////////////////delete user in admin

userRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.email === 'admin@example.com') {
        res.status(400).send({ message: 'Can Not Delete Admin User' });
        return;
      }
      const deleteUser = await user.remove();
      console.log(deleteUser);
      res.send({ message: 'User Deleted', user: deleteUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);


/////////////update user admin

userRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    console.log(user);
    if (user) {
      user.name = req.body.name;
      user.email = req.body.email;
      user.isSeller = req.body.isSeller;
      user.isAdmin = req.body.isAdmin;
      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
); 

export default userRouter;