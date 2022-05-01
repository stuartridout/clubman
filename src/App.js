import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import FindPlayer from "./FindPlayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindPlayerResults from "./FindPlayerResults";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={[
              <>
                {" "}
                <Header />
                <h1>Checkout Page</h1>
              </>,
            ]}
          />
          <Route
            path="/find"
            element={[
              <>
                {" "}
                <Header />
                <FindPlayer />
              </>,
            ]}
          />
          <Route
            path="/results"
            element={[
              <>
                {" "}
                <Header />
                <FindPlayerResults />
              </>,
            ]}
          />
          <Route path="/login" element={[<Login />]} />
          <Route
            path="/"
            element={[
              <>
                {" "}
                <Header />
                <Home />
              </>,
            ]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
