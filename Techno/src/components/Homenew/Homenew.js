import "./Homenew.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imge from "../../assets/4.jpg";
import ProductItem from "../products/productItem/productItem";
import data from '../../data'
const Homenew = () => {
  const products = data.products;

  return (
   <div>
  {/* first colums of product */}
  <div className="container-fluid backdround mt-1">
    <div className="row d-flex  mx-4 py-5  d-flex justify-content-center ">
      <div className="col-12 col-sm-12 col-md-8">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" style={{width: 10, height: 10, borderRadius: '100%'}} />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} style={{width: 10, height: 10, borderRadius: '100%'}} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} style={{width: 10, height: 10, borderRadius: '100%'}} />
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="img-fluid" src={imge} alt="First slide" height="530px" />
              <div className="text-primary carousel-caption  d-none d-md-block">
                <h1>New Collection Will Coming</h1>
                <h1>Lenovo 330-15AST Laptop</h1>
                <h4>10% OFF</h4>
                <button type="button" className="btn btn-primary">BUY NOW</button>
              </div>
            </div>
            <div className="carousel-item">
              <img className="img-fluid" src={imge} alt="Second slide" height="530px" />
              <div className="text-primary carousel-caption d-none d-md-block">
                <h1>New Collection Will Coming</h1>
                <h1>HP 15-da2365ne Laptop</h1>
                <h4>10% OFF</h4>
                <button type="button" className="btn btn-primary">BUY NOW</button>
              </div>
            </div>
            <div className="carousel-item">
              <img className="img-fluid" src={imge} alt="Third slide" height="530px" />
              <div className="text-primary carousel-caption d-none d-md-block">
                <h1>New Collection Will Coming</h1>
                <h1>DELL 15-3593 Laptop</h1>
                <h4>10% OFF</h4>
                <button type="button" className="btn btn-primary">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-0 col-10 col-sm-8 col-md-4 " style={{position: 'relative'}}>
        <div className="card img-fluid">
          <img className="img-fluid" src={imge} alt="Card image" style={{width: '100%'}} />
          <div className="card-img-overlay">
            <h4 className="card-title text-primary bottom-left">DELL G5</h4>
            <p className="card-text text-primary bottom-left1">Browse collection</p>
          </div>
        </div>
        <div className="card img-fluid mt-3">
          <img className="img-fluid" src={imge} alt="Card image" style={{width: '100%'}} />
          <div className="card-img-overlay">
            <h4 className="card-title text-primary bottom-left">Lenovo V15-IWL</h4>
            <p className="card-text text-primary bottom-left1">Browse collection</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4 justify-content-md-center">
      <div className="jumbotron jumbotron-fluid" style={{backgroundColor: 'white'}}>
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-2">
              <img src={imge} className="img-fluid" style={{width: '100%'}} />
            </div>
            <div className=" col-6 col-sm-6 col-md-2">
              <h5>laptops</h5>
              <ul className="typesOfLaps">
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  Dell</li>
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  lenovo</li>
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  acer</li>
              </ul>
              <a href="../Aisha/shop.html">View all
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
              <p />
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <img src={imge} className="img-fluid" style={{width: '100%'}} />
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <h5>laptops</h5>
              <ul className="typesOfLaps">
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  Dell</li>
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  lenovo</li>
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  acer</li>
              </ul>
              <a href="../Aisha/shop.html">View all
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <img src={imge} className="img-fluid " style={{width: '100%'}} />
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <h5>laptops</h5>
              <ul className="typesOfLaps">
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  Dell</li>
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  lenovo</li>
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  acer</li>
              </ul>
              <a href="../Aisha/shop.html">View all
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid mt-5 ml-4">
    <div class="row justify-content-md-center">
      <h2 className="mb-5">New Arrivals Products</h2>
    </div>
    <div class="row">
    {products.slice(products.length - 4, products.length).map((product, index) => {
      return (
        <div className="col-12  col-sm-12 col-md-3" key={index}>
          <ProductItem product={product} />
        </div>
      )
    })}
    </div>
  </div>
  {/* fourth colums of products */}
  <div className="container-fluid backdround">
    <div className="row justify-content-md-center">
      <h2 className="mt-5 ml-3">Our Product</h2>
      {/* style="margin-top:100px;" */}
    </div>
    <div className="row justify-content-md-center">
      <p className="ml-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
    </div>
    <div className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img src={imge} className="gallery__img" alt="Image 1" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img src={imge} className="gallery__img" alt="Image 2" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img src={imge} className="gallery__img " alt="Image 3" />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img src={imge} className="gallery__img" alt="Image 4" />
      </figure>
    </div>
  </div>
  <div class="container-fluid mt-5 ml-4">
    <div class="row justify-content-md-center">
      <h2 className="mb-5">Special discount products</h2>
    </div>
    <div class="row">
    {products.slice(products.length - 4, products.length).map((product, index) => {
      return (
        <div className="col-12  col-sm-12 col-md-3" key={index}>
          <ProductItem product={product} />
        </div>
      )
    })}
    </div>
  </div>

  <div className="backdround p-5 mb-5 w-100 d-flex flex-column align-items-center justify-content-center">
    <h3 className="pt-5 text-center pb-3">Subscribe to our Newsletter and get 40% off on all products</h3>
    <div className="text-center pb-5">
      <input className="e p-3" type="text" placeholder="Enter your email address" />
      <button className="btn text-white">Subscribe</button>
    </div>
  </div>
</div>
  )
}
export default Homenew;
