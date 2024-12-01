import './App.css';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
