import { useApi } from './../composables/useApi';
import { useAuthStore } from './auth.store';
import { FetchingStatus } from '~/types/enums/FetchingStatus'; // ตรวจสอบการนำเข้าที่ถูกต้อง
import { TSession } from '~/types/sessions/session.type'; // ตรวจสอบการนำเข้าที่ถูกต้อง

export const useAuthStore = defineStore('auth', () => {
    const userName = useCookie(server.USERNAME);
    const token = useCookie(server.TOKEN_KEY);
    const fetchingStatus = ref<FetchingStatus>(FetchingStatus.init);
    const session = reactive<TSession>({ isLoggedIn: false, userName: undefined });
    const router = useRouter();
    const api = useApi();

    const restoreSession = () => {
        if (!!token.value && !!userName.value) {
            session.isLoggedIn = true;
            session.userName = userName.value!;
        } else {
            session.isLoggedIn = false;
        }
    };

    const login = async (loginDto: LoginDto) => {
        try {
            fetchingStatus.value = FetchingStatus.fetching;
            await new Promise((resolve) => setTimeout(resolve, 100));
            const { result, data } = await api.login(loginDto);
            console.log('testxx');
            if (result === 'ok') {
                token.value = 'DUMP TOKEN';
                userName.value = data.userName;
                fetchingStatus.value = FetchingStatus.success;
                session.isLoggedIn = true;
            } else {
                session.isLoggedIn = false;
                fetchingStatus.value = FetchingStatus.failed;
            }
            window.open('/', '_self');
        } catch (error) {
            fetchingStatus.value = FetchingStatus.failed;
            console.error(error);
        }
    };

    return { session, login, restoreSession }; // Return the functions and state that you need
});

export default useAuthStore;
