export const isAuth = (): string => {
    if (localStorage.getItem('auth')) {
        return localStorage.getItem('auth')
    } else {
        return "";
    }
};