import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/form";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Formredirect from "./components/formredirect";


function App() {
  return (
    <div className="App bg-white">
      <Router>
        <Navbar />

        <Routes>

          <Route exact path="/" element={<Formredirect />} />
          <Route exact path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
