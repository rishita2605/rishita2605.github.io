
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
          
          <section>
            <div class="isolate">
              <div class="noise"></div>
              <div class="overlay"></div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
