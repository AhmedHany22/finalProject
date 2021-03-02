import "./ProductDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../../assets/4.jpg";
import ProductItem from "../productItem/productItem";
import data from '../../../data'
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux'
import { detailsProducts, listProducts } from "../../../store/actions/ProductActions";
import LoadingBox from "../../LoadingBox";
import MessageBox from "../../MessageBox";

const ProductDetail = (props) => {
  const dispatchList=useDispatch();
  const productList=useSelector((state)=> state.productList)
  useEffect(()=>{dispatchList(listProducts());},[]);

  console.log(productList.products);

  const productId=props.match.params.id;
  const dispatch=useDispatch();
  const productDetails= useSelector(state=> state.productDetails);
  useEffect(()=>{ dispatch(detailsProducts(productId)) },[dispatch,productId]);

  const [counter, setCounter] = useState(1);
  const increment =()=> {setCounter(counter +1)};
  const decrement =()=> { counter > 1? setCounter(counter -1):setCounter(counter)};

  const addToCartHandler = () => {
    props.history.push(`/shoppingCart/${productId}?qty=${counter}`);
  };

  return (
    <>
    {productDetails?.error?(<MessageBox variant="danger">{productDetails?.error}</MessageBox>)
    :(
    <div className="section">
      <div className="mycontainer">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div id="custCarousel" className="carousel slide" data-ride="carousel" data-interval="2000">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {" "}
                  {console.log(productDetails?.product?.data?.image)}
                  <img src={productDetails?.product?.data?.image} />{" "}
                </div>
                <div className="carousel-item">
                  {" "}
                  <img src={productDetails?.product?.data?.image} />{" "}
                </div>
                <div className="carousel-item">
                  {" "}
                  <img src={productDetails?.product?.data?.image} />{" "}
                </div>
                <div className="carousel-item">
                  {" "}
                  <img src={productDetails?.product?.data?.image} />{" "}
                </div>
                <div className="carousel-item">
                  {" "}
                  <img src={productDetails?.product?.data?.image} />{" "}
                </div>
                <div className="carousel-item">
                  {" "}
                  <img src={productDetails?.product?.data?.image} />{" "}
                </div>
              </div>
              <ol className="carousel-indicators">
                <li
                  data-target="#custCarousel"
                  data-slide-to="0"
                  className="active"
                >
                  <img src={productDetails?.product?.data?.image} />
                </li>
                <li data-target="#custCarousel" data-slide-to="1">
                  <img src={productDetails?.product?.data?.image} />
                </li>
                <li data-target="#custCarousel" data-slide-to="2">
                  <img src={productDetails?.product?.data?.image} />
                </li>
                <li data-target="#custCarousel" data-slide-to="3">
                  <img src={productDetails?.product?.data?.image} />
                </li>
                <li data-target="#custCarousel" data-slide-to="4">
                  <img src={productDetails?.product?.data?.image} />
                </li>
                <li data-target="#custCarousel" data-slide-to="5">
                  <img src={productDetails?.product?.data?.image} />
                </li>
              </ol>
            </div>
            <a
              className="left carousel-control"
              href="#custCarousel"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a
              className="right carousel-control"
              href="custCarousel"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="home">
              <div class="head">
                <a href="/">Home</a>/
                <a href="/shop">{productDetails?.product?.data?.name}</a>/ {productDetails?.product?.data?.description}
              </div>
              <h1 className="details">{productDetails?.product?.data?.description.toUpperCase()}</h1>
              <div className="view">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <a href="#">{productDetails?.product?.data?.numReviews} Reviews</a>
              </div>
              <h2 className="paragraph">${productDetails?.product?.data?.discount? productDetails?.product?.data?.price-productDetails?.product?.data?.discount: productDetails?.product?.data?.price}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet.
              </p>
            </div>
            <div id="addTo">
              <a className="is-minus" onClick={decrement}>-</a>
              <input className="quantity-input" type="text" value={counter} />
              <a className="quantity-button is-plus" onClick={increment}>+</a>
              <a className="btnCard" onClick={addToCartHandler}>
                <div>ADD TO CARD</div>
              </a>
            </div>
            <hr />
            <div className="layout">
              <div>
                <h4>SKU</h4>
                <h4>Categories</h4>
                <h4>Tags</h4>
              </div>
              <div class="info">82934
                <br /><br />
                <a href="/shop">Armhair</a>,{" "}
                <a href="/shop">Wooden Leg</a>,{" "}
                <a href="/shop">Satin</a>
                <br /><br />
                <a href="/shop">Tosca</a>,{" "}
                <a href="/shop">Living Room</a>,{" "}
                <a href="/shop">Modern</a>
              </div>
            </div>
            <hr />
            <div class="delivery">
              <a href="" class="fas fa-map-marker-alt">{" "}Store availability</a>
              <a href="" class="fas fa-sync-alt">{" "}Delivery and return</a>
              <a href="/contact" class="fas fa-comments">{" "}Ask a question</a>
            </div>
            <hr />
            <div class="share">
              <a href="/shoppingCart" class="far fa-heart">&nbsp; Add to wishlist</a>
              <div>
                <p className="share">Share</p>
                <a
                  href="https://www.facebook.com/"
                  className="fab fa-facebook-f"
                ></a>
                <a href="https://www.twitter.com/" className="fab fa-twitter"></a>
                <a
                  href="https://www.linkedin.com/"
                  className="fab fa-linkedin-in"
                ></a>
                <a
                  href="https://www.instagram.com/"
                  className="fab fa-instagram"
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 description">
            <div className="tabs">
              <ul className="nav nav-tabs">
                <li className="active">
                  <a data-toggle="tab" href="#home">
                    Description
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#menu1">
                    Additional Information
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#menu2">
                    Reviews ({productDetails?.product?.data?.numReviews})
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div id="home" className="tab-pane active">
                <p>
                  Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel
                  augue laoreet rutrum faucibus dolor auctor. Integer posuere
                  erat a ante venenatis dapibus posuere velit aliquet.
                  Vestibulum id ligula porta felis euismod semper. Integer
                  posuere erat a ante venenatis dapibus posuere velit aliquet.
                </p>
                <p>
                  Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac
                  facilisis in, egestas eget quam. Aenean eu leo quam.
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  Vestibulum id ligula porta felis euismod semper.
                </p>
              </div>
              <div id="menu1" className="tab-pane fade">
                <div className="addInfo">
                  <p>Ram</p>
                  <p>Screen Resolution </p>
                  <p>Storage</p>
                  <p>Battery</p>
                  <p>Color</p>
                </div>
                <div>
                  <p>8G</p>
                  <p>Full HD </p>
                  <p>500G</p>
                  <p>10 Hours</p>
                  <p>Black, seliver, White</p>
                </div>
              </div>
              <div id="menu2" className="tab-pane fade">
                <div className="veiw1">
                  <div className="info">
                    <img src={image} alt="" />
                    <div>
                      <h4>Walter Cook</h4>
                      <p>June 07, 2020</p>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="badge badge-light">Verified Buyer</span>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere. Maecenas faucibus mollis
                    interdum.Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Aenean lacinia bibendum
                  </p>
                </div>
                <div className="veiw1">
                  <div className="info">
                    <img src={image} alt="" />
                    <div>
                      <h4>Sacha Kariono</h4>
                      <p>June 27, 2020</p>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="badge badge-light">Verified Buyer</span>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container destance ">
        <div className="row rProudt ">
          <h2>Related products</h2>
        </div>
        <div className="row">
          {productList?.products?.data?.slice(1, 5).map((product, index) => {
            return (
                <div className="c-product-thumb" key={index}>
                <ProductItem product={product} />
              </div>
            )
          })}
        </div>
      </div>
    </div>)}
    
    </>
  );
};
export default ProductDetail;
