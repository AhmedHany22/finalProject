import Axios from "axios";
import {
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
} from "../types/userConstants";
// export const SignUp = (name, email, password) => async (dispatch) => {
//     dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
//     try {
//         const { data } = await Axios.post("/api/users/signup", { name, email, password });
//         dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
//         dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });

//         localStorage.setItem('userInfo', JSON.stringify(data));
//     } catch (error) {
//         dispatch({
//             type: USER_REGISTER_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message,
//         });
//     }
// };
export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post("/api/users/signin", { email, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};



export const SignUp = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_SIGNOUT });
}
