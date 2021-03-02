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
    const [sellerName, setsellerName] = useState('');
    const [sellerLogo, setsellerLogo] = useState('');
    const [sellerDescription, setsellerDescription] = useState('');


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
            if(userDetails?.user.seller){
                setsellerName(userDetails?.user?.seller.name);
                setsellerLogo(userDetails?.user?.seller.logo);
                setsellerDescription(userDetails?.user.seller?.description);
            }
            
        }
    },[dispatch,userSignin?.userInfo._id,userDetails?.user]);

    const SubmitHandler=(e)=>{
        e.preventDefault();
        // dispatch update profile
        if(password!=confirmPassword){
            alert('Password And Confirm Password Are Not Matched')
        }
        else{
            dispatch(updateUserProfile({userId: userDetails.user._id, name, email, password ,sellerName,sellerLogo,sellerDescription,}))
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
                    {
                        userDetails?.user?.isSeller && (
                            <>
                            <h2>Seller</h2>
                            <div>
                            <label htmlFor="sellerName">Seller Name</label>
                            <input id="sellerName" type="text" placeholder="Enter Seller Name"
                            value={sellerName} onChange={(e) => setsellerName(e.target.value)}></input>
                            </div>
                            <div>
                            <label htmlFor="sellerLogo">Seller Logo</label>
                            <input id="sellerLogo" type="text" placeholder="Enter Seller Logo"
                            value={sellerLogo} onChange={(e) => setsellerLogo(e.target.value)}></input>
                            </div>
                            <div>
                            <label htmlFor="sellerDescription">Seller Description</label>
                            <input id="sellerDescription" type="text" placeholder="Enter Seller Description"
                            value={sellerDescription} onChange={(e) => setsellerDescription(e.target.value)}></input>
                            </div>
                            </>
                        )
                    }
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