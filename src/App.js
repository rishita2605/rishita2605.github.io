import { useState, useEffect } from "react";
import Loader from "./components/loader/loader";
import "./App.css";
import HomePage from "./components/home-page/home-page";

function App() {
  const [loading, setLoading] = useState(false); // Set to false to enable loader

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="App">
          <div className="background-text">
            <div className="background-text__left">Bok</div>
            <div className="background-text__right">etto</div>
          </div>
          <HomePage />
          {/* <!-- To get the grainy effect -->
          <div className="background background--isolate">
            <div className="background__noise"></div>
            <div className="main background__overlay grid">
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default App;
