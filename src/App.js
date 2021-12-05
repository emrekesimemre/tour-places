import './App.css';
import Cards from './companent/cards/Card';
import Header from './companent/header/Header';
import Navbar from './companent/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cards />
    </div>
  );
}

export default App;
