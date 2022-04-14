import React, { useState, useEffect } from "react";
import { bookManagement } from "../services/BookServices";
import InfoBook from "../components/InfoBook/InfoBook";
import ContentBook from "../components/ContentBook/ContentBook";
import Loading from "../components/Loading/Loading";
export default function DetailBook(props) {
  let [book, setBook] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    bookManagement.getInfoBook(props.match.params.bookid).then((res) => {
      setBook(res.data);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    });
  }, [props.match.params.bookid]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div style={{ marginTop: "64px" }}>
        <InfoBook infoBook={book} />
        <ContentBook infoBook={book} />
      </div>
    );
  }
}
