import { useFetcher } from '~/composables/useFetcher';
import { server, apiUrl } from '~/utils/constants';
import { UserDto } from '~/types/dtos/dtos/user/user.dot';

const { fetch } = useFetcher();

export const getUser = async () => {
    const result = await fetch(server.USER_URL);
    return result;
};

export const getUserById = async () => {
    const result = await fetch(`${server.USER_URL}/${id}`);
    return result;
};

export const cerateUser = async (user: UserDto) => {
    const result = await fetch(server.USER_URL, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return result;
};

export const updateUser = async (id: string, user: UserDto) => {
    const result = await fetch(`${server.USER_URL}/${id}`, {
        method: 'PUT',
        herder: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
};

export const deleteUser = async (id: string) => {
    const result = await fetch(`${server.USER_URL}/${id}`, {
        method: 'DELETE',
        herder: {
            'Content-Type': 'application/json'
        }
    });
    return result;
};
