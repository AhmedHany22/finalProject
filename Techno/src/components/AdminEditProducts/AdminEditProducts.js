import "./AdminEditProducts.css";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProducts, updateProduct } from '../../store/actions/ProductActions';
import { PRODUCT_UPDATE_RESET } from '../../store/types/productConstants';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { useTranslation } from "react-i18next";

export default function AdminEditProducts(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [discount, setDiscount] = useState('');

  const productId = props.match.params.id;
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);

  const productUpdate = useSelector((state) => state.productUpdate);
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate, } = productUpdate;
  const { product } = productDetails;

  useEffect(() => {
    if (successUpdate) {
      props.history.push('/productlist');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProducts(productId));
      setName(productDetails?.product?.data?.name);
      setPrice(productDetails?.product?.data?.price);
      setImage(productDetails?.product?.data?.image);
      setCategory(productDetails?.product?.data?.category);
      setCountInStock(productDetails?.product?.data?.countInStock);
      setBrand(productDetails?.product?.data?.brand);
      setDescription(productDetails?.product?.data?.description);
      setDiscount(productDetails?.product?.data?.discount);
    }

  }, [dispatch, productId, successUpdate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        category,
        brand,
        countInStock,
        description,
      })
    );
    props.history.push('/AdminProducts')
  };
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center flex-column mb-5 sectioH">
        <div className="container text-center">
          <div className="text-center text-white">
            <h1>{t("Product Details")}</h1>
            <h1 className="mt-5">{t("Edit Product")}: {productId}</h1>
          </div>
        </div>
      </div>
      <form className="form container w-50" onSubmit={submitHandler}>
        {productDetails?.loading ? (<LoadingBox />)
          : productDetails?.error ? (<MessageBox variant="danger">{productDetails?.error}</MessageBox>)
            : (
              <>
                <div className="form-group">
                  <label For="name" dir="auto" style={{textAlign: 'end'}}><strong>{t("Name")}</strong></label>
                  <input id="name" className="form-control" type="text" placeholder={t("Enter name")} value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className="form-group">
                  <label For="price"><strong>{t("Price")}</strong></label>
                  <input id="price" className="form-control" type="text" placeholder={t("Enter price")} value={price} onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <div className="form-group">
                  <label For="image"><strong>{t("Image")}</strong></label>
                  <input id="image" className="form-control" type="text" placeholder={t("Enter image")} value={image} onChange={(e) => setImage(e.target.value)}></input>
                </div>
                <div className="form-group">
                  <label For="category"><strong>{t("Category")}</strong></label>
                  <input id="category" className="form-control" type="text" placeholder={t("Enter category")} value={category} onChange={(e) => setCategory(e.target.value)}></input>
                </div>
                <div className="form-group">
                  <label For="brand"><strong>{t("Brand")}</strong></label>
                  <input id="brand" className="form-control" type="text" placeholder={t("Enter brand")} value={brand} onChange={(e) => setBrand(e.target.value)}></input>
                </div>
                <div className="form-group">
                  <label For="countInStock"><strong>{t("Count In Stock")}</strong></label>
                  <input id="countInStock" className="form-control" type="text" placeholder={t("Enter countInStock")} value={countInStock} onChange={(e) => setCountInStock(e.target.value)}></input>
                </div>
                <div className="form-group">
                  <label For="description"><strong>{t("Description")}</strong></label>
                  <textarea id="description" className="form-control" rows="2" type="text" placeholder={t("Enter description")} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                  <label For="discount" ><strong>{t("Discount")}</strong></label>
                  <input id="discount" className="form-control" type="discount" placeholder={t("Enter discount")} value={discount} onChange={(e) => setDiscount(e.target.value)}></input>
                </div>
                <div className="form-group text-center mb-5">
                  <label></label>
                  <button className="btn btn-warning w-50" type="submit"><strong>{t("Update")}</strong></button>
                </div>
                {loadingUpdate && <LoadingBox></LoadingBox>}
                {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
              </>
            )}
      </form>
    </div>
  );
}