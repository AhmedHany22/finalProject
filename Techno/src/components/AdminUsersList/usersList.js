import '../AdminProducts/AdminProducts.css'
import react, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser, listUsers } from '../../store/actions/userActions'
import { USER_DETAILS_RESET } from '../../store/types/userConstants';
import LoadingBox from '../LoadingBox'
import MessageBox from '../MessageBox'

export default function UsersList(props){
    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;
  
    const userDelete = useSelector((state) => state.userDelete);
    const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = userDelete;

    const dispatch=useDispatch()
    useEffect(() => {
        dispatch({
          type: USER_DETAILS_RESET,
        });
        dispatch(listUsers());
        
    }, [dispatch, successDelete]);

    const deleteHandler = (user) => {
        if (window.confirm('Are you sure?')) {
          dispatch(deleteUser(user._id));
        }
    };

    return(
        <div>
            <div className="d-flex justify-content-center align-items-center flex-column mb-5 sectioH">
                <div className="container text-center">
                    <div className="mb-5 text-center text-white">
                        <h1>Users List</h1>
                    </div>
                    {loadingDelete && <LoadingBox></LoadingBox>}
                    {errorDelete && <MessageBox variant="danger">{userDelete?.error}</MessageBox>}
                    {successDelete && (
                        <MessageBox variant="success">User Deleted Successfully</MessageBox>
                    )}
                </div>
            </div>

            <div className="mx-5 text-center mt-5">
                <table className="table table-striped table-bordered table-dark">
                <thead>
                    <tr>
                    <th className="h5">#No</th>
                    <th className="h5">ID</th>
                    <th className="h5">NAME</th>
                    <th className="h5">Email</th>
                    <th className="h5">Is Seller</th>
                    <th className="h5">Is Admin</th>
                    <th className="h5">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {loading? (<LoadingBox/>)
                    :error?(<MessageBox variant="danger">{error}</MessageBox>)
                    :(
                        users?.createdUsers?.map((user,index)=>{
                        return(
                        <tr key={user._id}>
                            <td>{index+1}</td>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.isSeller? 'Yes': 'No'}</td>
                            <td>{user.isAdmin? 'Yes': 'No'}</td>
                            <td>
                            <button type="button" className="btn btn-primary mr-2" onClick={()=>props.history.push(`/user/${user._id}/edit`)}>Edit</button>
                            <button type="button" className="btn btn-danger" onClick={() => deleteHandler(user)}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                    )}
                </tbody>
                </table>
            </div>

        </div>
    )
}