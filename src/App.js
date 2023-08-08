import "./App.css";
import Board from "./Component/Board";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div>
      <Navbar title="Tic-Tac-Toe"/>
      <Board />
      <Footer/>
    </div>
  );
}

export default App;

