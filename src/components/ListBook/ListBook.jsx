import React from "react";
import "./ListBook.scss";
import { NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";
export default function ListBook(props) {
  let { listBookSearch, loading } = props;
  console.log(listBookSearch);
  const renderListBook = () => {
    return listBookSearch.map((item, index) => {
      return (
        <div className="listbook-item mb-5" key={index}>
          <NavLink className="item-link" to={`/detail-book/${item._id}`}>
            <div className="all-form">
              <div className="img-wrapper">
                <img src={item.image} alt={item.image} />
              </div>
              <div className="info-wrapper">
                <h5 className="info-title">{item.title}</h5>
                <p className="info-author">{item.author}</p>
              </div>
            </div>
          </NavLink>
        </div>
      );
    });
  };

  if (loading || listBookSearch.length === 0) {
    return <Loading />;
  } else {
    return (
      <div className="listbook-container container">
        <div className="listbook-row">{renderListBook()}</div>
      </div>
    );
  }
}
