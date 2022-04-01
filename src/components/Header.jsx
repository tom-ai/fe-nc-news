import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="pa3">
      <Link to="/" className="f4 f5-m b pointer_default dark-red no-underline">
        TH News
      </Link>
    </div>
  );
}

export default Header;
