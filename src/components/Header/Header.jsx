import NavLinks from "../NavLinks/NavLinks";
import MyMovies from "../MyMovies/MyMovies";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>
        Movie<span>DB</span>
      </h1>
      <div className="rightContent">
        <NavLinks />
        <MyMovies />
      </div>
    </header>
  );
};

export default Header;
