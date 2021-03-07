import "./productItem.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from '../../Rating/Rating';
import data from '../../../data';
import { useState } from "react";
import ProductModal from "../productModal/productModal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  let discountPresent = 10;
  const { product } = props;
  const category = data.category;
  console.log(product);

  if (product) { discountPresent = Math.round((product.discount / product.price) * 100); }
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="col-4 col-lg-4 col-md-6 col-sm-6">
        <div className="card" key={product._id}>
          <img className="card-img-top" src={product.image} alt={product.name} />
          <div className="card-img-overlay image3 imgHeight">
            <div className="present">{discountPresent}%</div>
            <div className="show vImage3" data-toggle="modal" data-target="#myModal"><a className="fas"> QUICK VIEW</a></div>
          </div>
          <div className="card-body">
            <div className="pb-2" style={{height:'50px'}}>
            <Link className="card-text" to={`/details/${product._id}`}>{(i18n.language == "en") ? product.name : product.nameAr}</Link>,
            <a href="/shop">{(i18n.language == "en") ? product.category.toUpperCase() : product.categoryAr}</a>
            </div>
            <div>
              <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
              <Link className="fa fa-eye float-right text-secondary mr-2 mt-2" to={`/details/${product._id}`}></Link>
            </div>
            <hr/>
            <div>
              <p>${product ? product.price - product.discount : 2000}{" "}<span>${product ? product.price : 2500}</span></p>
              <link to={`/seller/${product?.seller?.seller?._id}`}>
                {product?.seller?.seller?.name}
              </link>
            </div>
          </div>
        </div>
      </div>
      <ProductModal className="modal fade" id="myModal" product={product}></ProductModal>

    </>

  )
}