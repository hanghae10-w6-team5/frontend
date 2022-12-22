import { Route, Routes } from 'react-router-dom';

import MainPage from './routes/MainPage';
import TopBar from './components/layout/TopBar';
import UserPage from './routes/UserPage';
import SignUp from './routes/SignUpPage';
import Login from './routes/LoginPage';
import Detail from './routes/Detail';
import DetailForm from './routes/DetailForm';

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
                <Route
                    path="/detailform"
                    element={
                        <div>
                            <TopBar />
                            <DetailForm />
                        </div>
                    }
                ></Route>
                {/* <Route path="/detail" element={<Detail />}></Route> */}
                <Route
                    path="/:id"
                    element={
                        <div>
                            <TopBar />
                            <Detail />
                        </div>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
