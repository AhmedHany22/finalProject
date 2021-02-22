export default function productModal(){
    return(
        <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
            <div className="modal-body">
              <div className="container">
                <div className="row d-flex align-items-center" className="first">
                  <div
                    className="col-6 col-sm-12 col-lg-6 justify-content-center"
                    className="second"
                  >
                    <div id="myCarousel" className="carousel slide">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div className="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div className="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div className="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div className="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                        <div className="carousel-item">
                          {" "}
                          <img src={image} />{" "}
                        </div>
                      </div>

                      <ol className="carousel-indicators">
                        <li
                          data-target="#myCarousel"
                          data-slide-to="0"
                          className="active"
                        ></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                        <li data-target="#myCarousel" data-slide-to="4"></li>
                        <li data-target="#myCarousel" data-slide-to="5"></li>
                      </ol>

                      <a
                        className="carousel-control-prev"
                        href="#myCarousel"
                        role="button"
                        data-slide="prev"
                      >
                        <span className="fas fa-chevron-left"></span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#myCarousel"
                        role="button"
                        data-slide="next"
                      >
                        <span className="fas fa-chevron-right"></span>
                      </a>
                    </div>
                  </div>

                  <div className="sPart col-6 col-sm-12 col-lg-6">
                    <div className="home">
                      <h1 className="icons">Albert Armchair, Nubuck White</h1>
                      <div className="view">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                      <h2 className="para">$120</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </p>
                    </div>
                    <div id="addTo">
                      <a className="is-minus">-</a>
                      <input className="quantity-input" type="text" value="1" />
                      <a className="quantity-button is-plus">+</a>
                      <a className="btnCard">
                        <div>ADD TO CARD</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}