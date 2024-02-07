import React from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <section>
      <section>
        <div>
          {/* logo */}
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </a>
          {/* Delivery */}
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>
        <div>
          {/* Search bar */}
          <select name="" id="">
            <option value="" key="">
              All
            </option>
          </select>
          <input type="text" placeholder="search product" />
          <BsSearch />
        </div>
        {/* right side link */}
        <div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
              alt="American Flag"
            />
            <section>
              <option value="" key="">
                EN
              </option>
            </section>
          </div>
          {/* three components */}
          <a href="/">
            <div>
              <p>Sign In</p>
              <span>Accounts & Lists </span>
            </div>
          </a>

          {/* orders */}
          <a href="">
            <p>returns</p>
            <span>& Orders</span>
          </a>

          {/* cart */}
          <a to={"/cart"}>
            <BiCart />
            <span>0</span>
          </a>
        </div>
      </section>
    </section>
  );
}

export default Header;
