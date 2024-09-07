import { apiUrl, NOT_CONNECT_NETWORK, NETWORK_CONNECTION_MESSAGE } from '~/utils/constants';
import Swal from 'sweetalert2';
const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

const fetchConfig = {
    headers: {}
};

export const setAuthorizationHeader = (token: string) => {
    // @ts-ignore
    fetchConfig.headers.Authorization = `Bearer ${token}`;
};

export const clearAuthorizationHeader = () => {
    // @ts-ignore
    delete fetchConfig.headers.Authorization;
};

export const useFetcher = () => {
    // const isLoading = ref(false)

    const fetcher = async (url: string, options?: RequestInit | any) => {
        // isLoading.value = true

        try {
            //* Check first url start with slash or not

            url = url.startsWith('/') ? url : `/${url}`;

            const absoluteUrl = isAbsoluteURLRegex.test(url) ? url : `${apiUrl}${url}`;

            const response = (await $fetch(absoluteUrl, {
                ...fetchConfig,
                ...options
            })) as any;

            return await response;
        } catch (error: any) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid userName or Password'
            });
            throw error;
        }
    };

    return {
        fetch: fetcher
        // isLoading
    };
};
