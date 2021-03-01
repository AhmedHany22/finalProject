import "./AdminProducts.css";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, deleteProduct, listProducts } from '../../store/actions/ProductActions';
import { PRODUCT_CREATE_RESET, PRODUCT_DELETE_RESET } from '../../store/types/productConstants';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';

export default function ProductListScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { loading, error, data } = productList;
  const productCreate = useSelector((state) => state.productCreate);
  const productDelete = useSelector((state) => state.productDelete);
  const { loading: loadingDelete, error: errorDelete, success: successDelete, } = productDelete;
  const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct, } = productCreate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push(`/product/${createdProduct._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(listProducts());
  }, [createdProduct, dispatch, props.history, successCreate, successDelete]);

  const createHandler = () => {
    dispatch(createProduct());
  };

  const deleteHandler = (product) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteProduct(product._id));
    }
  };


  console.log(productList.products);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column mb-5 sectioH">
        <div className="container text-center">
          <div className="mb-5 text-center text-white">
            <h1>Producsts List</h1>
          </div>
        </div>
        <button type="button" className="btn btn-success" onClick={createHandler}>
          Create Product
        </button>
        {loadingCreate && <LoadingBox></LoadingBox>}
        {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
        {loadingDelete && <LoadingBox></LoadingBox>}
        {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      </div>

      <div className="mx-5 text-center mt-5">
        <table className="table table-striped table-bordered table-dark">
          <thead>
            <tr>
              <th className="h5">#No</th>
              <th className="h5">ID</th>
              <th className="h5">NAME</th>
              <th className="h5">PRICE</th>
              <th className="h5">CATEGORY</th>
              <th className="h5">Brand</th>
              <th className="h5">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {productList.loading? (<LoadingBox/>)
            :productList.error?(<MessageBox variant="danger">{productList.error}</MessageBox>)
            :(
              productList.products.data.map((product,index)=>{
                return(
                  <tr key={product._id}>
                    <td>{index}</td>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
                      <button type="button" className="btn btn-primary mr-2"onClick={()=>props.history.push(`/product/${product._id}/edit`)}>Edit</button>
                      <button type="button" className="btn btn-danger" onClick={() => deleteHandler(product)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
