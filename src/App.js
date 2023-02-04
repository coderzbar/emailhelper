import './App.css';
import Index from './Pages/Index';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          
          <Route path="/" element={<Index />}/>
          <Route path="/terms" element={<Terms />}/>
          <Route path="/privacy" element={<Privacy />}/>
        </Routes>
      </BrowserRouter>
    </> 
       );
}


// function App() {
//   return (
//     <>
//     <Navbarmain />
//     <Index />
//     <Footer />
//     </>
//   );
// }

export default App;
