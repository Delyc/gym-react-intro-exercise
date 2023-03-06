import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Exercise2 from "./Exercise2";
import Home from "./Home";
import Exercise3 from "./Exercise3/Exercise3";
import Exercise4 from "./Exercise4";
import Exercise5 from "./Exercise5";
import Exercise6 from "./exercise6/Exercise6";
import Exercise7 from "./Exercise7";
import Exercise8 from "./Exercise8";
import Exercise9 from "./exercise9/Exercise9";
import Exercise1 from "./Exercsise1";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercise2" element={<Exercise2 />}></Route>
        <Route path="/exercise1" element={<Exercise1 />}></Route>
        <Route path="/exercise3" element={<Exercise3 />}></Route>
        <Route path="/exercise4" element={<Exercise4 />}></Route>
        <Route path="/exercise5" element={<Exercise5 />}></Route>
        <Route path="/exercise6" element={<Exercise6 />}></Route>
        <Route path="/exercise7" element={<Exercise7 />}></Route>
        <Route path="/exercise8" element={<Exercise8 />}></Route>
        <Route path="/exercise9" element={<Exercise9 />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
