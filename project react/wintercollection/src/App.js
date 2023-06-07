// import logo from './logo.svg';
// import './App.css';

// import Header from "./Components/Header";
import Router from './Router';
import './Asserts/style/Header.css';

// import Banner from './Components/Banner'

function App() {
  return (
    <div className="App container-fluid" style={{marginTop: '10px'}}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Header/> */}
      <Router/>
      {/* <Banner/> */}
    </div>
  );
}

export default App;
