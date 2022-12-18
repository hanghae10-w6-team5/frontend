import { Route, Routes } from 'react-router-dom';

import TopBar from './components/layout/TopBar';
import MainPage from './routes/MainPage';
import UserPage from './routes/UserPage';
import SignUp from './routes/SignUpPage';
import Login from './routes/LoginPage';

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <TopBar />
                            <MainPage />
                        </div>
                    }
                ></Route>
                <Route
                    path="/user"
                    element={
                        <div>
                            <TopBar />
                            <UserPage />
                        </div>
                    }
                ></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element></Route>
            </Routes>
        </div>
    );
}

export default App;
