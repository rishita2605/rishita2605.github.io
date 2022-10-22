
import { useState, useEffect } from "react";
import Loader from "./components/loader/loader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      
      {loading ? (
        <Loader />
      ) : (
        <div className="App">
            <div className="background background--isolate">
              <div className="background__noise"></div>
              <div className="background__overlay"></div>
            </div>
        </div>
      )}
    </div>
  );
}

export default App;
