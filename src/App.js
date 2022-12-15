import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/login' element={ <Login />} />
          </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
