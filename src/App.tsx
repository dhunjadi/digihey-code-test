import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import EncodePage from './pages/EncodePage';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/encode" element={<EncodePage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
