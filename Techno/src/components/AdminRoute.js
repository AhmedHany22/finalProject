
// import { useSelector } from 'react-redux'
// import { Redirect, Route} from 'react-router-dom'

// export default function AdminRoute({component: Component, ...rest}){
//     const userSingin=useSelector(state => state.userSingin)

//     return(
//         <Route {...rest}
//          render={(props)=> 
//             userSingin.userInfo && isAdmin.userInfo ? (
//                 <Component {...props}></Component>
//                 ):(
//             <Redirect to="/signin" />
//         )
//         }></Route>
//     )
// }