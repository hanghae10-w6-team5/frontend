export const getToken = () => {
    return localStorage.getItem('authentication');
};

export const setToken = (TOKEN) => {
    localStorage.setItem('authentication', TOKEN);
};

export const removeToken = () => {
    localStorage.removeItem('authentication');
};
