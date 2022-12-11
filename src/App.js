import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import TestJSX from './components/TestJSX'
import Condition from './components/Condition'
import AffichageBoucle from './components/AffichageBoucle'
import Personnages from './components/Personnages'
import Calculatrice from './components/Calculatrice'

function App() {
    return (
        <div className="App">
            <Link to="/">Accueil (TestJSX)</Link>
            <Link to="/condition">Condition</Link>
            <Link to="/boucle">Affichage Boucle</Link>
            <Link to="/personnages">Personnages</Link>
            <Link to="/calculatrice">Calculatrice</Link>

            <Routes>
                <Route path="/"          element={<TestJSX />} />
                <Route path="/condition" element={<Condition />} />
                <Route path="/boucle"    element={<AffichageBoucle />} />
                <Route path="/personnages"  element={<Personnages />} />
                <Route path="/calculatrice" element={<Calculatrice />} />
            </Routes>
        </div>
    );
}

export default App;
