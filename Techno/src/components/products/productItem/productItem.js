
import "./productItem.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from '../../Rating/Rating';
import data from '../../../data';
import { useState } from "react";
import ProductModal from "../productModal/productModal";

export default function ProductItem(props) {
  let discountPresent = 10;
  const { product }  = props;
  const category = data.category;
  console.log(product);
  if (product) { discountPresent = Math.round((product.discount / product.price) * 100); }

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
          <a className="card-text" href={`/details/${product._id}`}>{product.name.toUpperCase()}</a>
          , 
          <a href="/shop"> {product.category.toUpperCase()}</a>
          <div>
            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
            <a className="fa fa-eye float-right text-secondary mr-2 mt-2"></a>
          </div>
          <hr/>
          <div>
            <p>${product.price - product.discount}{" "}<span>${product.price}</span></p>
            <link to={`/seller/${product?.seller?._id}`}>
            {product?.seller?.name}
            </link>
          </div>
          </div>
      </div>
    </div>
    <ProductModal className="modal fade" id="myModal" product={product}></ProductModal>
    

  </>
  )
}
