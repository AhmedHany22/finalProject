import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, signin } from '../../store/actions/userActions';
import "./SignUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';

const SignUp = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');


  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignup = useSelector((state) => state.userSignup);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== confirmpassword){
      alert('password and confirm password are not match')
    }
    else
    {
      dispatch(register(name,email, password))

    }
  };

  useEffect(() => {
    if (userSignup?.userInfo) {
      props.history.push(redirect);
    }
  },[props.history,redirect ,userSignup?.userInfo]);

  return (
    <>
      <div className="container-fluid bgd mb-0">
        <div className="signup-form mb-0">
          <form action="/examples/actions/confirmation.php" method="post" onSubmit={submitHandler}>
            <h2>Sign Up</h2>
            {userSignup?.loading && <LoadingBox/>}
            {userSignup?.error && <MessageBox variant="danger">{userSignup?.error}</MessageBox>}
            {userSignup?.userInfo && <MessageBox variant="success">{`Welcome ${userSignup?.userInfo?.name}`}</MessageBox>}

            <p>Please fill in this form to create an account!</p>
            <hr></hr>
            <div className="form-group">
              <input type="text" className="form-control" name="name" placeholder="Enter Full Name" required="required"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required="required"
                onChange={(e) => setEmail(e.target.value)}
              />
           
              <br></br>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
                onChange={(e) => setPassword(e.target.value)} 
              />
            
              <br></br>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label className="form-check-label">
                <input type="checkbox" required="required" classNameName="mr-2" />I
                accept the <a href="#">Terms of Use</a> &amp;
                <a href="#">Privacy Policy</a>
              </label>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                
              >
                Sign Up
              </button>
            </div>
            <div className="hint-text">
              Already have an account?
              <a href={`/signin?redirect=${redirect}`} className="text-decoration-none text-primary">
                Login here
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;