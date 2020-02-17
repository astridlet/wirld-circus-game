export const login = () => {
    localStorage.setItem('logged', true);
}

export const logout = () => {
    localStorage.removeItem('logged');
}

export const isLogin = () => {
    if (localStorage.getItem('logged')) {
        return true;
    }
    return false;
}