// import './App.css';

import Header from "./Components/Header";
import History from "./Components/HIstory";
import IncomeExpense from "./Components/IncomeExpense";
import Navbar from "./Components/Navbar";
import NewTransaction from "./Components/NewTransaction";
import Table from "./Components/Table";
import YourBalance from "./Components/YourBalance";
import State from "./Contexts/state";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  return (
    <>
   <State>
    <Router>
      <Navbar />
    <Routes>
      <Route path="/" element={<div className="App">
                                  <Header />
                                  <YourBalance/>
                                  <IncomeExpense/>
                                  <History />
                                  <NewTransaction />
                                </div>} />
      <Route path="/table" element={<Table />} />
    </Routes>
    </Router>
  </State>
    </>
  );
}

export default App;
