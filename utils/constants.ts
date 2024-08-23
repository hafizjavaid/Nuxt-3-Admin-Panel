export const NETWORK_CONNECTION_MESSAGE = 'Cannot connect to server, Please try again';
export const NETWORK_TIMOUT_MESSAGE = 'A network timeout has occurred, Please try again';
export const NOT_CONNECT_NETWORK = 'Not connect network';
export const UPLOAND_PHOTO_FAIL_MESSAGE = 'An error has occurred. The photo was unable to upload.';
export const apiUrl = import.meta.env.VITE_BACKEND_BASE_URL + '/api/v1';
export const imgUrl = import.meta.env.VITE_BACKEND_BASE_URL + '/images/news';

export const server = {
    LOGIN_URL: `login/login`,
    NEWS_URL: `News`,
    TRANSACTION_URL: `transaction`,
    TOKEN_KEY: `token`,
    USERNAME: `userName`
};
