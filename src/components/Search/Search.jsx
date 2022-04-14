import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./Search.scss";

export default function Search(props) {
  let { onSubmit } = props;
  let [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);
  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;
    //debounce technical
    // SET -- 100 -- CLEAR, SET -- 300 ---> SUBMIT
    // SET -- 300 ---> SUBMIT
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      // const formValues = {
      //   searchTerm: value,
      // };
      onSubmit(value);
    }, 300);
  };
  return (
    <div className="search-form d-flex justify-content-center my-5">
      <input
        className="inputSearch"
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search book..."
      />
    </div>
  );
}
