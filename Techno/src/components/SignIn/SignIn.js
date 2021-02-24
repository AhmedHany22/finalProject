import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../store/actions/userActions';
import "./SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';

const SignIn = (props) => {

  // let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // const [registerForm, setRegisterForm] = useState({ email: "", password: ""});
  // const [registerErrors, setRegisterErrors] = useState({ emailErrors: null, passwordErrors: null});

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo ,loading ,error} = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password))
  }

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  },[props.history,redirect ,userInfo]);

  return (
    <>
      <div className="container bodyLogin">
        <div className="row">

          <div className="login bg-white ">
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
              <div className="form-group">
                <label for="email">Email</label>
                <input className="form-control" type="email" id="email" name="email" placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)} />

                {/* className={`form-control mt-2 ${registerErrors.emailErrors ? "border-danger" : ""}`}
                value={registerForm.email} onChange={handleFormChange}
                <small className="text-danger mt-2">{registerErrors.emailErrors}</small>*/}
              </div>
              <div className="form-group">
                <label for="pwd">Password</label>
                <input className="form-control" type="password" id="pwd" placeholder="Enter your password"

                  onChange={(e) => setPassword(e.target.value)} />
                {/* className={`form-control mt-2 ${registerErrors.passwordErrors ? "border-danger" : ""}`}
                value={registerForm.password}
                <small className="text-danger mt-2">{registerErrors.passwordErrors}</small>*/}
              </div>
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" />Remember me
                </label>
              </div>
              <button className="btn btn-primary" type="submit">Sign In</button>
              {/*onClick={handleSubmit}*/}
            </form>
            <p><a href="/signup"> Forgot your password ?</a></p>

          </div>
        </div>
      </div>

    </>

  );
};
export default SignIn;