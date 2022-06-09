import "./App.css";
import Images from "./Images.js";
import db from "./db.json";

const data_arr = db.db;

function App() {
  return (
    <div className="App">
      {data_arr.map((item) => (
        <Images img_url={item[2]} title={item[1]} name={item[0]} />
      ))}
    </div>
  );
}

export default App;
