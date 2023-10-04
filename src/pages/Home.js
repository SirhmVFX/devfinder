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

        <div className="container">
          <div className="search-field">
            <div>
              <img src="images/Combined Shape.png" alt="" />
              <input type="text" name="" id="" />
            </div>

            <button>Search</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
