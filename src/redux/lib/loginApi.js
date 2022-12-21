import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export const __login = createAsyncThunk('login', async (payload, thunkAPI) => {
    // const navigate = useNavigate;
    try {
        await axios
            .post(`https://dev-jn.shop/api/users/login`, payload)
            .then((res) => {
                if (res.status === 200) {
                    alert('로그인에 성공하였습니다!');
                    // navigate('/login');
                } else if (res.status === 401) {
                    alert('로그인에 실패하였습니다!!');
                }
                localStorage.setItem('authentication', res.data.authentication);
            });
        // .finally((res) => console.log(res));
    } catch (e) {
        alert(e);
    }
});
