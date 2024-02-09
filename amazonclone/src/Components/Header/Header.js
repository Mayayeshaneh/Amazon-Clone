import React from "react";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo */}
          <div className={classes.logo__container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
              />
            </a>
            {/* Delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="" key="">
                All
              </option>
            </select>
            <input type="text" placeholder="search product" />
            <BsSearch size={25} />
          </div>

          {/* right side link */}
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="American Flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            {/* Sign in */}
            <a href="/">
              <p>Sign In</p>
              <span>Accounts & Lists </span>
            </a>

            {/* orders */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>

            {/* cart */}
            <a to={"/cart"} className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
