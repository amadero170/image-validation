import "./App.css";
import Images from "./Images.js";
import db from "./db.json";
import { useState } from "react";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { useState } from "react";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyALvtbcfz7xBpqTmbRwTZbwVaUAz6UsulY",
//   authDomain: "primer-proyecto-firebase-f46f5.firebaseapp.com",
//   projectId: "primer-proyecto-firebase-f46f5",
//   storageBucket: "primer-proyecto-firebase-f46f5.appspot.com",
//   messagingSenderId: "796584806312",
//   appId: "1:796584806312:web:6a7392614190e883ad3f9d",
//   measurementId: "G-ZSLHTLY13K",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const data_arr = db.db;
let arr = [];

function App() {
  const [data, setData] = useState("");
  arr.push(`${data}, `);

  const changeImage = (childdata) => {
    setData(childdata);
  };
  return (
    <div className="App">
      <p>{arr}</p>
      {data_arr.map((item, i) => (
        <Images
          key={i}
          index={i}
          img_url={item[2]}
          title={item[1]}
          name={item[0]}
          changeImage={changeImage}
        />
      ))}
    </div>
  );
}

export default App;
