import React from "react";
import { Link } from "react-router-dom";



const Cart = () => {
  return (
    <div id="Cart">
        <div className="container">
            <h1 className="text-center position-relative py-5">Checkout</h1>
      <div className="row">
          <div className="dataForm col-md-6">
            <h2 className=" mb-5 font-weight-bold">Billing Address</h2>
          <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="text" class="form-control" placeholder="First name" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="text" class="form-control" placeholder="First name" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div class="form-group col-md-6">
    <label for="phone">Phone</label>
    <input type="tel" class="form-control" name="phone" id="phone" placeholder="03xx-xxxxxx" value="" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" />
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
      <input type="text" class="form-control" id="inputZip" />
    </div>
  </div>

    <hr />
    <h3>Payment Method</h3>
    

    <div className="form-group">
    <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
  <label class="form-check-label" for="exampleRadios1">
    Cash On Delivery
  </label>
</div>
</div>

<hr />

  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" required/>
      <label class="form-check-label" for="gridCheck">
        I have read and agree to the website <Link  to="/" className="text-decoration-none">terms and conditions</Link> 
      </label>
    </div>
  </div>
    <div id="checkDiv" className="text-center m-4">
  <button type="submit" className="checkBtn d-block col-12">Place Order</button>
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
          <tr>
            <td>Product Name</td>
            <td className="itemPrice">150 PKR</td>
            
          </tr>
          <tr>
            <td>Land Cruiser Golden Bumper</td>
            <td className="itemPrice">50000 PKR</td>
            {/* tables rows should increase or decrease depends on how many items in cart, if 3 items so 3 rows */}
          </tr>
          <tr className="bg-warning">
            <td>Delivery Charges</td>
            <td className="">250 PKR</td>
            {/* dummy delivery charges 250 */}
          </tr>
          <tr className="bg-success">
            <td>Total</td>
            <td className="">50400 PKR</td> 
            {/* total money should be calculated */}
          </tr>
          </table>

          </div>

      </div>
      </div>
    </div>
  );
};

export default Cart;
