import logo from "../logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/3cab6663-7cd8-4365-b8a6-4a1d89305f6a")
      .then((response) => response.json())
      .then((data) => setArtists(data.all_artists));
  }, []);

  return (
    <header className="header">
      <div className="page">
        <Link to="/" className="logo">
          <img src={logo} alt="Viberate" />
        </Link>

        <nav className="navigation-primary">
          <ul className="menu-sys">
            <li>
              <button className="btn btn-menu search">Search</button>
            </li>
            <li>
              <button className="btn btn-menu more">More</button>
            </li>
          </ul>

          <ul className="menu">
            {artists.map((element) => {
              return (
                <li key={element.artist_uuid}>
                  <Link to={element.artist_uuid}>{element.artist_name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
