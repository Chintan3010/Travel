import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;



// import LoginPage from './components/LoginPage';

// function App() {
//   return <LoginPage />;
// }

// export default App;


// import React from "react";
// import LoginPage from "./components/LoginPage";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "@fortawesome/fontawesome-free/css/all.min.css";

// function App() {
//   return <LoginPage />;
// }

// export default App;
