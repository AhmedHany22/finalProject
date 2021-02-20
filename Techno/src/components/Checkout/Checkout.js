import "./Checkout.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Checkout = () => {

  return (
    <>
      <section className="jumbotron text-white text-center header-section">
        <div className="container col-lg-5 col-md-6 col-sm-8 col-9 py-4 bg-white text-center myBorder">
          <h1 className="mb-3 text-dark">Checkout</h1>
          <div className="msg">
            Missed something ?<a href="/" className="text-secondary">Continue shopping</a>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="row adjustRow">
          <div className="col-lg-8 col-md-12 mt-4 bg-white">
            <nav className="text-secondary text-uppercase">
              <ul className="nav nav-tabs nav-justified h5">
                <li className="nav-item text-center">
                  <a data-toggle="tab" href="#Billing"className="nav-link custmizeAnchor titles active">
                    Billing Address
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a data-toggle="tab" href="#Shipping" className="nav-link custmizeAnchor titles">
                    Shipping Method
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a data-toggle="tab" href="#Payment" className="nav-link custmizeAnchor titles">
                    Payment Method
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a data-toggle="tab" href="#Orders" className="nav-link custmizeAnchor titles">
                    Orders Review
                  </a>
                </li>
              </ul>
            </nav>
            <div className="tab-content text-left text-secondary">
              <div className="tab-pane active" id="Billing">
                <h4>Billing Details</h4>
                <hr />
                <form role="form" method="post" action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 cust-billing">
                      <div className="form-group">
                        <label for="inputFirstName" className="control-label">
                          First Name:<span className="text-error">*</span>
                        </label>
                        <div>
                          <input type="text" className="form-control" id="inputFirstName" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputLastName" className="control-label">
                          Last Name:<span className="text-error">*</span>
                        </label>
                        <div>
                          <input type="text" className="form-control" id="inputLastName" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputEMail" className="control-label">
                          E-Mail:<span className="text-error">*</span>
                        </label>
                        <div>
                          <input type="email" className="form-control" id="inputEMail" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputPhone" className="control-label">Phone:</label>
                        <div>
                          <input type="text" className="form-control" id="inputPhone" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputFax" className="control-label">Fax:</label>
                        <div>
                          <input type="text" className="form-control" id="inputFax" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 cust-billing">
                      <div className="form-group">
                        <label for="inputCompany" className="control-label">Company:</label>
                        <div>
                          <input type="text" className="form-control" id="inputCompany" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputAdress1" className="control-label">
                          Address /1:<span className="text-error">*</span>
                        </label>
                        <div>
                          <input type="text" className="form-control" id="inputAdress1" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputCity"className="control-label">
                          City:<span className="text-error">*</span>
                        </label>
                        <div>
                          <input type="text" className="form-control" id="inputCity" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputPostCode" className="control-label">
                          Post Code:<span className="text-error">*</span>
                        </label>
                        <div>
                          <input type="text" className="form-control" id="inputPostCode" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">
                              Contury:<span className="text-error">*</span>
                            </label>
                            <div>
                              <select name="inputContury" className="form-control">
                                <option value="#">-Conturies-</option>
                                <option value="#">Contury1</option>
                                <option value="#">Contury2</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">Region:
                          <span className="text-error">*</span></label>
                            <div>
                              <select name="inputRegion" className="form-control">
                                <option value="#">-Regions-</option>
                                <option value="#">Region1</option>
                                <option value="#">Region2</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <hr />
                <a href="/shoppingCart" className="btn rounded-0 btn-outline-dark">Back</a>
                <a href="#Shipping" className="btn rounded-0 btn-outline-dark active">Next</a>
                <br />
                <br />
              </div>
              <div className="tab-pane" id="Shipping">
                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <h4>Free</h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                    <div className="radio">
                      <label>
                        <input type="radio" name="shipping" value="0" />Free
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <h4>Standart</h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                    <div className="radio">
                      <label><input type="radio" name="shipping" value="0" />$5 Rate</label>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <h4>Speed</h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                    <div className="radio">
                      <label><input type="radio" name="shipping" value="0" />$15 Rate</label>
                    </div>
                  </div>
                </div>
                <hr />
                <a href="#Billing" className="btn rounded-0 btn-outline-dark">Back</a>
                <a href="#Payment" className="btn rounded-0 btn-outline-dark active">Next</a>
                <br />
                <br />
              </div>
              <div className="tab-pane" id="Payment">
                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <h4>Pay Pal</h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                    <div className="radio">
                      <label className="color-active">
                        <input type="radio" name="payment" id="payment1" value="0" />Pay Pal
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <h4>Visa Card</h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                    <div className="radio">
                      <label className="color-active">
                        <input type="radio" name="payment" id="payment2" value="0" />Visa Card
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <h4>Stripe</h4>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit ollit anim id est laborum.</p>
                    <div className="radio">
                      <label className="color-active">
                        <input type="radio" name="payment" id="payment3" value="0" />Stripe
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <a href="Shopping-Cart.html" className="btn rounded-0 btn-outline-dark">Back</a>
                <a href="#" className="btn rounded-0 btn-outline-dark active">Next</a>
                <br />
                <br />
              </div>
              <div className="tab-pane" id="Orders">
                <h4 className="reviewTitle">Review</h4>
                <div className="col-md-12">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="hide">Image</th>
                        <th className="hide">Product Name</th>
                        <th className="hide">Model</th>
                        <th className="hide">Quantity</th>
                        <th className="hide">Unit Price</th>
                        <th className="hide">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="/"><img alt="Product Name" src="./assets/Product_1.jpg" /></a>
                        </td>
                        <td>
                          <a href="/">Product Name</a>
                        </td>
                        <td>Pro 1</td>
                        <td>
                          <div className="quantity">
                            <input type="number" min="1" max="9" step="1" value="1" />
                          </div>
                        </td>
                        <td>$77.00</td>
                        <td>$77.00</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/"><img alt="Product Name" src="./assets/Product_1.jpg" /></a>
                        </td>
                        <td>
                          <a href="/">Product Name</a>
                        </td>
                        <td>Pro 2</td>
                        <td>
                          <div className="quantity">
                            <input type="number" min="1" max="9" step="1" value="1" />
                          </div>
                        </td>
                        <td>$777.00</td>
                        <td>$777.00</td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/"><img alt="Product Name" src="./assets/Product_1.jpg" /></a>
                        </td>
                        <td>
                          <a href="/">Product Name</a>
                        </td>
                        <td>Pro 3</td>
                        <td>
                          <div className="quantity">
                            <input type="number" min="1" max="9" step="1" value="1" />
                          </div>
                        </td>
                        <td>$7.00</td>
                        <td>$7.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr />
                <a href="Shopping-Cart.html" classNameName="btn rounded-0 btn-outline-dark">Back</a>
                <a href="#" className="btn rounded-0 btn-outline-dark active">Next</a>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mt-4 pt-4 bg-white text-left text-uppercase bill">
            <div className="block-form block-order-total visible" data-wow-duration="1s" >
              <h3 className="">Total</h3>
              <hr />
              <ul className="list-unstyled">
                <li>Sub Total :
              <strong className="float-right">$500.00</strong>
                </li>
                <li>Pricing Sharge :
              <strong className="float-right">$10.00</strong>
                </li>
                <li>Promotion Discound :
              <strong className="float-right">$5.00</strong>
                </li>
                <li>VAT :
              <strong className="float-right">$10.00</strong>
                </li>
                <li><hr /></li>
                <li className="color-active">
                  <b>Total :</b>
                  <strong className="float-right">$520.00</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Checkout;
