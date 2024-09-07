import { useFetcher } from '~/composables/useFetcher';
import { server, apiUrl } from '~/utils/constants';
import type { TLogin } from '~/types/login/login.type';
import type { LoginDto } from '~/types/dtos/login.dto';

const { fetch } = useFetcher();

export const login = async (loginDto: LoginDto) => {
    try {
        console.log('page auth-api-service');
        const result = (await fetch(`${server.LOGIN_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginDto)
        })) as Promise<TLogin>;
        return result;
    } catch (error) {
        console.error('Error:', error);
        throw {
            code: 'Not connect network',
            message: 'Cannot connect to server, please try again'
        };
    }
};
