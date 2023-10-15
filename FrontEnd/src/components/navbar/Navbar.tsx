import { NavBarWrapper } from "./navbar-style";
import {
  BiHomeAlt2,
  BiCategory,
  BiSearch,
  BiCartAlt,
  BiSun,
  BiLogOut,
} from "react-icons/bi";
export const Navbar = () => {
  return (
    <NavBarWrapper>
      <ul className="upper">
        <li className="active">
          <BiHomeAlt2 className="icon" />
          <span>Home</span>
        </li>
        <li>
          <BiCategory className="icon" />
          <span>CAT</span>
        </li>
        <li>
          <BiSearch className="icon" />
          <span>Search</span>
        </li>
        <li>
          <BiCartAlt className="icon" />
          <span>Cart</span>
        </li>
      </ul>
      <ul className="bottom">
        <li>
          <BiSun className="icon" />
          <span>Light mode</span>
        </li>
        <li className="logout">
          <BiLogOut className="icon" />
          <span>Logout</span>
        </li>
      </ul>
    </NavBarWrapper>
  );
};
