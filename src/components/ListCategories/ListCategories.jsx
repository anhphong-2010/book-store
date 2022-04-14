import React from "react";
import "./ListCategories.scss";
import { useState } from "react";
import { useEffect } from "react";
import { bookManagement } from "../../services/BookServices";
export default function ListCategories() {
  let [bookCategories, setBookCategories] = useState([]);
  useEffect(() => {
    bookManagement.getBookCategories().then((res) => {
      setBookCategories(res.data);
    });
  }, []);

  const renderBookCategories = () => {
    return bookCategories?.map((item, index) => {
      return (
        <a
          className="nav-link"
          id="v-pills-home-tab"
          data-toggle="pill"
          href="#v-pills-home"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
          key={index}
        >
          {item.genre}
        </a>
      );
    });
  };
  return (
    <div className="category-container">
      <h4 className="category-title">Categories</h4>
      <ul className="category-list">{renderBookCategories()}</ul>
    </div>
  );
}
