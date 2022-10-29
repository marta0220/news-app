import React, { useState } from "react";
import axios from "axios";

export default function News(props) {
  let [date, setDate] = useState(props.today);
  let [query, setQuery] = useState(props.defaultQuery);

  function search() {
    const apiKey = "360923cb9fe142a48e497febd7713fd8";
    const apiURL = `https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=popularity&apiKey=${apiKey}`;
  }
  function changeDate(event) {
    event.preventDefault();
    setDate(event.target.value);
  }
  function changeQuery(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }
  search();
  return (
    <div className="News">
      <h1>What news are you looking for?</h1>
      <form>
        <input type="text" required onChange={changeQuery} />

        <input type="date" required onChange={changeDate} />

        <input type="submit" />
      </form>
    </div>
  );
}
