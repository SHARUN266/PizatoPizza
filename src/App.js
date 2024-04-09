
import Trending from "./components/Trending";
import Body from "./components/Body";

import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";


function App() {
  return (
    <>
      <Trending />
      <Routes>
        <Route
          path="/"
          element={
            <>
            
              <Body />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
