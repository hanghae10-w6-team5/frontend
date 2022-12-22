// src/redux/lib/token.js

// token 불러오기
export const getToken = () => {
    return localStorage.getItem('authentication');
};

// token 저장하기
export const setToken = (TOKEN) => {
    localStorage.setItem('authentication', TOKEN);
};

// token 삭제하기
export const removeToken = () => {
    localStorage.removeItem('authentication');
};
