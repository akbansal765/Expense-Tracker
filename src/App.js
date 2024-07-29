// import './App.css';

import Header from "./Components/Header";
import History from "./Components/HIstory";
import IncomeExpense from "./Components/IncomeExpense";
import NewTransaction from "./Components/NewTransaction";
import YourBalance from "./Components/YourBalance";
import State from "./Contexts/state";


function App() {

  return (
    <>
   <State>
    <div className="App">
      <Header />
      <YourBalance/>
      <IncomeExpense/>
      <History />
      <NewTransaction />
    </div>
  </State>
    </>
  );
}

export default App;
