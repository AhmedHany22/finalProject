import React ,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {detailsUser} from  '../../store/actions/userActions'
export default function SellerScreen(props) {
   const sellerId = props.match.params.id;
   const dispatch = useDispatch();
   useEffect(() => {
       dispatch(detailsUser(sellerId));
       dispatch(listProducts({seller: sellerId}));
   }, [dispatch, sellerId]);
    return (
        <div className="row top">
        <div className="col-1">

        </div>
        <div className="col-3">
        
        </div>
            
        </div>
    )
}
