import React from "react";
import "./InfoBook.scss";
export default function InfoBook(props) {
  let { infoBook } = props;
  let moment = require("moment");
  if (infoBook) {
    return (
      <div
        className="infobook-container"
        style={{
          background: `url(${infoBook.image}) fixed`,
        }}
      >
        <div className="infobook-row container">
          <div className="infobook-image">
            <img src={infoBook.image} alt={infoBook.image} />
          </div>
          <div className="infobook-context">
            <h4 className="content-title">
              <span>Title :</span>
              {infoBook.title}
            </h4>
            <p className="context-item">
              <span>Author :</span>
              {infoBook.author}
            </p>
            <p className="context-item">
              <span>Genre :</span>
              {infoBook.genre}
            </p>
            <p className="context-item">
              <span>Upload by :</span>
              {infoBook.username}
            </p>
            <p className="context-item">
              <span>Upload Date :</span>
              {moment(infoBook.createdAt).format("DD MMM yyyy")}
            </p>
            <p className="context-item">
              <span>Last update :</span>
              {moment(infoBook.updatedAt).format("DD MMM yyyy")}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
