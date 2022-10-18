import "./App.css";
import { useState, useEffect } from "react";
import Loader from "./components/loader/loader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div> {loading ? <Loader /> : <div className="App"> hehehasne </div>} </div>
  );
}

export default App;
