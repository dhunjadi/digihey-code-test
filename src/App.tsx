import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import EncodePage from './pages/EncodePage';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/encode" element={<EncodePage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
