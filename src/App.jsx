
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Header/>
        <Main/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
