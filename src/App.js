// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import Columns from './components/Columns';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-section">
        <ImageGrid />
        <Columns />
      </div>
      <Footer />
    </div>
  );
}

export default App;
