import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="logo">
        <img src="/logo.png" alt="book logo"  />
      </div>
    </Link>
  );
}

export default Logo;
