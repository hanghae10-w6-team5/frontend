import { Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage';
import TopBar from './components/TopBar';
import UserPage from './components/UserPage';
import SignUp from './components/SignUpPage';
import Login from './components/LoginPage';

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
