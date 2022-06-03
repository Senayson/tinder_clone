// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header.jsx';
// import { RemoveCircleOutlineSharp } from '@mui/icons-material';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <Routes>
        <Route exact path="/chat" element={<>
        <h1>I am chatpage</h1>
          <p>
            I am the body of chatpage
          </p>
        </>
        }/>
        <Route exact path="/" element={
          <TinderCards/>
        }/>
      </Routes>
        
      </Router>

    </div>
  );
}

export default App;

{/* <Header/> */}
{/* header */}
{/* tinder cards */}
{/* buttons below tinder cards */}
{/* chats screen */}
{/* Individual chat screen */}