import React from "react";
import ProfileCard from "../components/ProfileCard";

function Home() {
  return (
    <>
      <section>
        <div className="container">
          <header>
            <h1>Devfinder</h1>

            <div className="theme">
              <h5>DARK</h5>
              <img src="images/002-sun.png" alt="" />
            </div>
          </header>
        </div>

        <div className="hero container">
          <p>Discover Developers, One Click at a Time!</p>
        </div>

        <div className="container">
          <div className="search-field">
            <div className="srch">
              <img src="images/Combined Shape.png" alt="" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Search GitHub username…"
              />
            </div>

            <button>Search</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
