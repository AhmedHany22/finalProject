
import "./productItem.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from '../../Rating/Rating';
import data from '../../../data';

export default function ProductItem(props) {
  let discountPresent = 10;
  const { product }  = props;
  const category = data.category;
  const cateName = category.find( ({ _id }) => _id == product.categoryId.id);
  if (product) { discountPresent = Math.round((product.discount / product.price) * 100); }

  return (
    <div className="col-4 col-lg-4 col-md-6 col-sm-6">
      <div className="card" key={product._id}>
        <img className="card-img-top" src={product.imagesUrls} alt={product.data[0].name} />
        <div className="card-img-overlay image3 imgHeight">
          <div className="present">{product ? discountPresent : 10}%</div>
          <div className="show vImage3" data-toggle="modal" data-target="#myModal"><a className="fas"> QUICK VIEW</a></div>
        </div>
        <div className="card-body">
          <a className="card-text" href={`/details/${product._id}`}>{product ? product.data[0].name.toUpperCase() : "Name"}</a>
          , <a href="/shop">{product ? cateName.name : "Cat"}</a>
          <div>
            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
            <a className="fa fa-eye float-right text-secondary mr-2 mt-2"></a>
          </div>
          <hr/>
          <p>${product ? product.price - product.discount : 2000}{" "}<span>${product ? product.price : 2500}</span></p>
        </div>
      </div>
    </div>

    )
}
