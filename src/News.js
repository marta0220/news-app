import React, { useState } from "react";
import axios from "axios";

export default function News(props) {
  let [date, setDate] = useState(props.today);
  function search() {
    const apiKey = "360923cb9fe142a48e497febd7713fd8";
    const apiURL = `https://newsapi.org/v2/everything?q=${props.dafaultQuery}&from=${date}&sortBy=popularity&apiKey=${apiKey}`;
    console.log(apiURL);
  }
  search();
  return (
    <div className="News">
      <h1>What news are you looking for?</h1>
      <form>
        <input type="text" required />
        <input type="submit" />
      </form>
    </div>
  );
}
