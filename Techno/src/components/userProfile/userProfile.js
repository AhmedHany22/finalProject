import "./userProfile.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux'
import { detailsUser, updateUserProfile } from '../../store/actions/userActions'
import LoadingBox from '../LoadingBox'
import MessageBox from '../MessageBox'
import { USER_UPDATE_PROFILE_RESET } from "../../store/types/userConstants";

const UserProfile=()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userSignin=useSelector(state=> state.userSignin)
    const dispatch=useDispatch()
    const userDetails=useSelector(state=> state.userDetails)
    const userUpateProfile=useSelector(state=> state.userUpateProfile)

    console.log(userUpateProfile);
    // debugger
    console.log(userSignin);

    useEffect(()=>{
        if(!userDetails?.user){
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(detailsUser(userSignin?.userInfo?._id))
        }
        else{
            setName(userDetails?.user?.name);
            setEmail(userDetails?.user?.email);
        }
    },[dispatch,userSignin?.userInfo._id,userDetails?.user]);

    const SubmitHandler=(e)=>{
        e.preventDefault();
        // dispatch update profile
        if(password!=confirmPassword){
            alert('Password And Confirm Password Are Not Matched')
        }
        else{
            dispatch(updateUserProfile({userId: userDetails.user._id, name, email, password}))
        }

    }
      
    return(
        
        <div className="container bodyLogin">
        <div className="row">
                <div className="login bg-white ">
                <div className="profileImage">
                    <i className="fas fa-user-circle"></i>
                </div>
                <h1>My Profile</h1>
                <form className="form" onSubmit={SubmitHandler}>
                {userDetails?.loading? <LoadingBox></LoadingBox>
                :
                userDetails?.error? (<MessageBox variant="danger">{userDetails?.error}</MessageBox>)
                :(
                    <>
                    {userUpateProfile?.loading && <LoadingBox></LoadingBox>}
                    {userUpateProfile?.error && <MessageBox variant="danger">{userUpateProfile?.error}</MessageBox>}
                    {userUpateProfile?.success && <MessageBox variant="success">Profile Update Successfully</MessageBox>}

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                        id="name"
                        className="form-control" 
                        type="text" 
                        placeholder="Enter Name" 
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                        id="email"
                        className="form-control" 
                        type="text" 
                        placeholder="Enter Email" 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                        id="password"
                        className="form-control" 
                        type="text" 
                        placeholder="Enter Password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                        id="confirmPassword"
                        className="form-control" 
                        type="text" 
                        placeholder="Enter Email"
                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                        />
                    </div>
                    
                    <button className="btn btn-primary" type="submit">Update</button>
                    </>
                )}
                </form>
                </div>
        </div>
        </div>
    )
}

export default UserProfile;