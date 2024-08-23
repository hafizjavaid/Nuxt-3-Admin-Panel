import { login } from '../services/api/auth-api-service';
export const useApi = () => {
    return {
        login
    };
};
