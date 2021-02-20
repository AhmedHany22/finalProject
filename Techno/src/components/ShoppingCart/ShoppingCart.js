import "./ShoppingCart.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ShoppingCart = () => {

  return (
    <>

      <section class="jumbotron text-white text-center header-section">
        <div class="container col-lg-5 col-md-6 col-sm-8 col-9 py-4 bg-white text-center myBorder">
          <h1 class="mb-3 text-dark">Shopping Cart</h1>
          <div class="msg">Missed something ?
            <a href="/" class="text-secondary">Continue shopping</a>
          </div>
        </div>
      </section>
      <div class="container p-0">
        <div class="row mx-1 my-4 bg-white Cart_Row">
          <div class="col-md-2 col-6 pl-1 border-right">
            <img src="./assets/Product_1.jpg" class="mt-2 cart_img" />
          </div>
          <div class="mt-2 col-md-4 col-6 text-left">
            <p><a href="#" class="seller_name"> Suspensions</a></p>
            <p><a href="/details" class="product_name">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></p>
          </div>
          <div class="col-md-6 col-12 row pr-0">
            <div class="mt-2 col-4">
              <p class="item_header">Price</p>
              <p class="price">200$</p>
            </div>
            <div class="mt-2 col-4">
              <p class="item_header">Quantity</p>
              <div class="quantity"><input type="number"min="1"max="9"step="1"value="1"/></div>
            </div>
            <div class="mt-2 col-4">
              <p class="item_header">Order amount</p>
              <p class="price">200$</p>
            </div>
            <div class="col-12 row p-0">
              <div class="col-4 p-0">
                <i class="fa fa-star-o" title="5"></i>
                <i class="fa fa-star-o" title="4"></i>
                <i class="fa fa-star-o" title="3"></i>
                <i class="fa fa-star-o" title="2"></i>
                <i class="fa fa-star-o" title="1"></i>
              </div>
              <p class="col-4"><span>89</span>reviews</p>
              <p class="col-4 p-0"><a href="#" class="text-danger">Remove from cart</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="container p-0">
        <div class="row mx-1 my-4 bg-white Cart_Row">
          <div class="col-md-2 col-6 pl-1 border-right"><img src="./assets/Product_1.jpg"class="mt-2 cart_img"/></div>
          <div class="mt-2 col-md-4 col-6 text-left">
            <p><a href="#" class="seller_name">Suspensions</a></p>
            <p>
              <a href="/details" class="product_name">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
            </p>
          </div>
          <div class="col-md-6 col-12 row pr-0">
            <div class="mt-2 col-4">
              <p class="item_header">Price</p>
              <p class="price">200$</p>
            </div>
            <div class="mt-2 col-4">
              <p class="item_header">Quantity</p>
              <div class="quantity"><input type="number"min="1"max="9"step="1"value="1"/></div>
            </div>
            <div class="mt-2 col-4">
              <p class="item_header">Order amount</p>
              <p class="price">200$</p>
            </div>
            <div class="col-12 row p-0">
              <div class="col-4 p-0">
                <i class="fa fa-star-o" title="5"></i>
                <i class="fa fa-star-o" title="4"></i>
                <i class="fa fa-star-o" title="3"></i>
                <i class="fa fa-star-o" title="2"></i>
                <i class="fa fa-star-o" title="1"></i>
              </div>
              <p class="col-4"><span>89</span>reviews</p>
              <p class="col-4 p-0"><a href="#" class="text-danger">Remove from cart</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="container p-0">
        <div class="row mx-1 my-4 bg-white Cart_Row">
          <div class="col-md-2 col-6 pl-1 border-right">
            <img src="./assets/Product_1.jpg" class="mt-2 cart_img" />
          </div>
          <div class="mt-2 col-md-4 col-6 text-left">
            <p><a href="#" class="seller_name">Suspensions</a></p>
            <p>
              <a href="/details" class="product_name">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
            </p>
          </div>
          <div class="col-md-6 col-12 row pr-0">
            <div class="mt-2 col-4">
              <p class="item_header">Price</p>
              <p class="price">200$</p>
            </div>
            <div class="mt-2 col-4">
              <p class="item_header">Quantity</p>
              <div class="quantity"><input type="number"min="1"max="9"step="1"value="1"/></div>
            </div>
            <div class="mt-2 col-4">
              <p class="item_header">Order amount</p>
              <p class="price">200$</p>
            </div>
            <div class="col-12 row p-0">
              <div class="col-4 p-0">
                <i class="fa fa-star-o" title="5"></i>
                <i class="fa fa-star-o" title="4"></i>
                <i class="fa fa-star-o" title="3"></i>
                <i class="fa fa-star-o" title="2"></i>
                <i class="fa fa-star-o" title="1"></i>
              </div>
              <p class="col-4"><span>89</span>reviews</p>
              <p class="col-4 p-0"><a href="#" class="text-danger">Remove from cart</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="container p-0">
        <div class="row mx-1 my-4 bg-white Cart_Row">
          <div class="col-md-2 col-6 pl-1 border-right">
            <img src="./assets/Product_1.jpg" class="mt-2 cart_img" />
          </div>
          <div class="mt-2 col-md-4 col-6 text-left">
            <p><a href="#" class="seller_name">Suspensions</a></p>
            <p>
              <a href="/details" class="product_name">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
            </p>
          </div>
          <div class="col-md-6 col-12 row pr-0">
            <div class="mt-2 col-4">
              <p class="item_header">Price</p>
              <p class="price">200$</p>
            </div>
            <div class="mt-2 col-4">
              <p class="item_header">Quantity</p>
              <div class="quantity"><input type="number"min="1"max="9"step="1"value="1"/></div>
            </div>
            <div class="mt-2 col-4">
              <p class="item_header">Order amount</p>
              <p class="price">200$</p>
            </div>
            <div class="col-12 row p-0">
              <div class="col-4 p-0">
                <i class="fa fa-star-o" title="5"></i>
                <i class="fa fa-star-o" title="4"></i>
                <i class="fa fa-star-o" title="3"></i>
                <i class="fa fa-star-o" title="2"></i>
                <i class="fa fa-star-o" title="1"></i>
              </div>
              <p class="col-4"><span>89</span>reviews</p>
              <p class="col-4 p-0"><a href="#" class="text-danger">Remove from cart</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="row discount_section bg-light Cart_Row py-0">
        <div class="col-md-6 pt-3 text-left bg-white">
          <h4>DISCOUNT CODES</h4>
          <p>Enter your coupon code if you have one.</p>
          <div class="form-group">
            <input type="text"placeholder="Apply Coupon *"class="form-control"name="name"/>
            <button class="btn rounded-0 btn-outline-dark mt-2 mr-3"type="button">Apply Coupon</button>
            <button class="btn rounded-0 btn-outline-dark mt-2" type="button">proceed to Checkout</button>
          </div>
        </div>
        <div class="col-md-6 pt-4 bg-dark">
          <div class="row text-white">
            <div class="col-6 py-2"><span>Subtotal</span></div>
            <div class="col-6 py-2"><span>$241.00</span></div>
            <div class="col-6 py-4"><span>Discount</span></div>
            <div class="col-6 py-4"><span>$12.00</span></div>
            <div class="col-6 py-2"><span>Grand Total</span></div>
            <div class="col-6 py-2"><span>$229.00</span></div>
          </div>
        </div>
      </div>
    </>
    )
}
export default ShoppingCart;
