import NavLinks from "./NavLinks";
import MyMovies from "./MyMovies";
import "./header.css";

const Header = () => {
  return (
    <div className="headerContent">
      <h1>MovieDB</h1>
      <div className="rightContent">
        <NavLinks />
        <MyMovies />
      </div>
    </div>
  );
};

export default Header;
