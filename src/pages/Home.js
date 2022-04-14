import React, { useState, useEffect } from "react";
import { bookManagement } from "../services/BookServices";
import ListBook from "../components/ListBook/ListBook";
import Search from "../components/Search/Search";
export default function Home() {
  let [listBook, setListBook] = useState([]);
  let [loading, setLoading] = useState(true);
  let [newFilter, setNewFilter] = useState("");
  let [listBookSearch, setListBookSearch] = useState([]);
  useEffect(() => {
    bookManagement
      .getBooks()
      .then((res) => {
        setListBook(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const handleFiltersChange = (data) => {
    if (data) {
      setLoading(false);
      setNewFilter(data);
    }
  };
  useEffect(() => {
    const results = listBook.filter((book) => {
      return book.title.toLowerCase().includes(newFilter.toLowerCase());
    });
    setListBookSearch(results);
  }, [newFilter, listBook]);

  return (
    <div className="mr-0" style={{ marginTop: "64px" }}>
      <Search onSubmit={handleFiltersChange} />
      <ListBook
        listBookSearch={listBookSearch}
        loading={loading}
      />
    </div>
  );
}
