import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {

  return (
    <>
      <div className="container table pt-5">
        <div className="row" >
          <div className="col-lg-5 col-sm-12 col-md-12 info">
            <i className="fas fa-quote-left"></i>
            <h2>
              The trouble with programmers is that you can never too late. The future belongs of person with.
            </h2>
            <p>
              It would be great to hear from you! If you got any questions, please
              do not hesitate to send us a message. We are looking forward to hearing
              please do not hesitate to send us a message. It would be great to hear
              from you! If you got any questions, please do not hesitate to send us a message.
            </p>
            <p>
              We are looking forward to hearing please do not hesitate to send us a message.
              We are looking forward to hearing from you!
            </p>
          </div>
          <div className="col-lg-7 col-sm-12 col-md-12">
            <div className="contact">
              <form action="" className="contact-form ">
                <h1 className="contact-heading">contact us</h1>
                <div className="input-group">
                  <label>full name *</label>
                  <input type="text" className="contact-input" placeholder="Enter Your Name" />
                </div>
                <div className="input-groups emaildisplay" >
                  <div className="input-group">
                    <label>email *</label>
                    <input type="email" className="contact-input" placeholder="Enter Your Email" />
                  </div>
                  <div className="input-group">
                    <label>phone*</label>
                    <input type="text" className="contact-input" placeholder="Enter Phone Number" />
                  </div>
                </div>
                <div className="input-group">
                  <label>Message</label>
                  <textarea placeholder="your Message Here...."cols="30"rows="10"className="form-textarea"></textarea>
                </div>
                <input type="submit" value="submit" className="form-btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid contactBody">
        <div className="row address">
          <div className="col-12 my-auto px-4">
            <div>
              <h2 className="mb-3">New york</h2>
            </div>
            <div>
              <div className="row">
                <div className="col-4">
                  <i className="fas fa-map-marked-alt"></i>
                  <div className="addrText">
                    <h5>ADDRESS</h5>
                    <p>17504 Carlton Cuevas Rd, Gulfport, MS, 39503</p>
                  </div>
                </div>
                <div className="col-4 flex">
                  <i className="fas fa-mobile-alt ml-3"></i>
                  <div className="addrText">
                    <h5>PHONE</h5>
                    <p>+(704) 279-1249</p>
                  </div>
                </div>
                <div className="col-4 flex">
                  <i className="far fa-envelope"></i>
                  <div className="addrText">
                    <h5>EMAIL</h5>
                    <p>letstalk@webster.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row address">
          <div className="col-12 my-auto px-4">
            <div>
              <h2 className="mb-3">New york</h2>
            </div>
            <div>
              <div className="row">
                <div className="col-4">
                  <i className="fas fa-map-marked-alt"></i>
                  <div className="addrText">
                    <h5>ADDRESS</h5>
                    <p>17504 Carlton Cuevas Rd, Gulfport, MS, 39503</p>
                  </div>
                </div>
                <div className="col-4 flex">
                  <i className="fas fa-mobile-alt ml-3"></i>
                  <div className="addrText">
                    <h5>PHONE</h5>
                    <p>+(704) 279-1249</p>
                  </div>
                </div>
                <div className="col-4 flex">
                  <i className="far fa-envelope"></i>
                  <div className="addrText">
                    <h5>EMAIL</h5>
                    <p>letstalk@webster.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact;
