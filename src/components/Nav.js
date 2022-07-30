import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <div style={{ display: "flex" }}>
        <img
          style={{ paddingRight: "1.5rem", width: "3.7rem" }}
          src="../sound-wave.svg"
          alt=""
        />
        <h1>Vibrations</h1>
      </div>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
