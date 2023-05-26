import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./searchLocation.css";

const SearchLocation = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="center searchCont">
      <div className="location">
        <input
          id="location"
          type="text"
          className="inputLocation f4 pa2 w-100"
          value={location}
          onChange={(event) =>
            // Please expand your knowledge of arrow functions
            // In case of 1 raw handler no need to create extra func - anonymous is totally fine
            setLocation(event.target?.value || null)
          }
          placeholder="Input Location"
        />
      </div>
      <div className="btnSearch br2">
        <Link
          to={`/${location}`}
          className="linkSearch f4 pa2 w-100"
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default SearchLocation;
