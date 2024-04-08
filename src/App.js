import Header from "./componants/Header"
import './App.css';
import OneHundred from './componants/OneHundred';
import Types from "./componants/Types"
import FeuEauPlante from "./componants/FeuEauPlante";

function App() {
  return (
    <div className="App">
      <Header/>
      <OneHundred/>
      <Types/>
      <FeuEauPlante/>
    </div>
  );
}

export default App;
