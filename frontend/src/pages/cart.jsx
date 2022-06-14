import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../reducer/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/cart-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        items: cart.map((c) => c),
        totalPrice: cart.reduce((a, c) => a + c.price, 0),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.location.replace("/checkout-success");
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div id="Cart">
      <div className="container">
        <h1 className="text-center position-relative py-5">Checkout</h1>
        <div className="row">
          <div className="dataForm col-md-6">
            <h2 className=" mb-5 font-weight-bold">Billing Address</h2>
            <form onSubmit={handleSubmit}>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">First Name</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Last Name</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input
                    required
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="phone">Phone</label>
                  <input
                    required
                    type="tel"
                    class="form-control"
                    name="phone"
                    id="phone"
                    placeholder="03xx-xxxxxx"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress">Address</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input
                  required
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    id="inputCity"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>Sindh</option>
                    <option>Punjab</option>
                    <option>KPK</option>
                    <option>Balochistan</option>
                    <option>Azad Kashmir</option>
                    <option>Federally Administered Tribal Areas</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    id="inputZip"
                  />
                </div>
              </div>

              <hr />
              <h3>Payment Method</h3>

              <div className="form-group">
                <div class="form-check">
                  <input
                    required
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Cash On Delivery
                  </label>
                </div>
              </div>

              <hr />

              <div class="form-group">
                <div class="form-check">
                  <input
                    required
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label" for="gridCheck">
                    I have read and agree to the website{" "}
                    <Link to="/" className="text-decoration-none">
                      terms and conditions
                    </Link>
                  </label>
                </div>
              </div>
              <div id="checkDiv" className="text-center m-4">
                <button type="submit" className="checkBtn d-block col-12">
                  Place Order
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 cartInfo">
            <h2 className=" mb-5 font-weight-bold">Your Cart</h2>
            <table className="table table-bordered table-hover ">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              {cart.length > 0 &&
                cart.map((c, i) => (
                  <tr key={i}>
                    <td>{c?.title}</td>
                    <td className="itemPrice">{c?.price} PKR</td>
                  </tr>
                ))}
              <tr className="bg-warning">
                <td>Delivery Charges</td>
                <td className="">250 PKR</td>
                {/* dummy delivery charges 250 */}
              </tr>
              <tr className="bg-success">
                <td>Total</td>
                <td className="">
                  {cart.length > 0
                    ? cart.reduce(
                        (accumulator, currentValue) =>
                          accumulator + currentValue.price,
                        0
                      )
                    : 0}{" "}
                  PKR
                </td>
                {/* total money should be calculated */}
              </tr>
            </table>
          <span className=" offset-9 bg-dark text-white rounded p-2">Empty cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
