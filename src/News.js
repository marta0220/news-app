import React, { useState } from "react";
import axios from "axios";

export default function News(props) {
  let [date, setDate] = useState(props.today);
  let [query, setQuery] = useState(props.defaultQuery);
  let [ready, setReady] = useState(false);
  let [info, setInfo] = useState(null);
  function showResponse(response) {
    setInfo(response);
    setReady(true);
  }
  function search() {
    const apiKey = "360923cb9fe142a48e497febd7713fd8";
    const apiURL = `https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=popularity&apiKey=${apiKey}`;
    axios.get(apiURL).then(showResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function changeDate(event) {
    event.preventDefault();
    setDate(event.target.value);
  }
  function changeQuery(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }
  if (ready) {
    return (
      <div className="News">
        <h1>What news are you looking for?</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" required onChange={changeQuery} />

          <input type="date" required onChange={changeDate} />

          <input type="submit" />
        </form>
        {info.data.articles[0].title}
      </div>
    );
  } else {
    search();
    return null;
  }
}
