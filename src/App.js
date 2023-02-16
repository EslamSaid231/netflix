import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import HomePages from "./Homepage/HomePages";
import { withRouter } from "react-router-dom";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePages />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
