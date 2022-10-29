import "./App.css";
import News from "./News.js";

function App() {
  let now = new Date();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let year = now.getFullYear();
  let today = `${year}-${month}-${day}`;

  return (
    <div className="container">
      <News defaultQuery="ukraine" today={today} />
    </div>
  );
}

export default App;
