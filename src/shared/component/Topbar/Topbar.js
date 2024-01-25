import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function Topbar() {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue !== "") {
      return navigate(`/search?q=${inputValue}`);
    } else {
      return navigate(`/`);
    }
  };

  return (
    <div className="topbar-maincomponent">
      <div className="topbar-sub1">
        <Link to="/">
          <span
            style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
          >
            Nimap_MovieDb
          </span>
        </Link>
      </div>
      <div className="topbar-sub2">
        <div className="topbar-category">
          <Link to="/">
            <div style={{ color: "white" }}>Popular</div>
          </Link>

          <Link to="movies/top">
            <div style={{ color: "white" }}>Top Rated</div>
          </Link>
          <Link to="movies/upcoming">
            <div style={{ color: "white" }}>Upcoming</div>
          </Link>
        </div>
        <div className="topbar-search-container">
          <input
            type="text"
            placeholder="Movie name"
            value={inputValue}
            onChange={handleInputChange}
            style={{
              padding: "5px",
              borderRadius: "4px",
              outline: "none",
              border: 0,
              height: "20px",
            }}
          />

          <div className="topbar-search">
            <button className="topbar-search-button" onClick={handleSubmit}>
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
