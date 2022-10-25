import { useState, useEffect } from "react";
import Loader from "./components/loader/loader";
import "./App.css";
import ProfilePicture from "./components/profile-picture/profile-picture";

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
          <div className="background background--isolate">
            <div className="background__noise"></div>
            <div className="main background__overlay">
              <ProfilePicture />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
