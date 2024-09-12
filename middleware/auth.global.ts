import { defineNuxtRouteMiddleware, navigateTo } from '#app';
import { useAuthStore } from '../stores/auth.store';

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();

    // เรียก restoreSession เพื่อเรียกคืนข้อมูล session
    await authStore.restoreSession();

    const isLoggedIn = authStore.session.isLoggedIn;

    // ตรวจสอบการเข้าสู่ระบบ
    if (isLoggedIn) {
        console.log('User is logged in');
        if (to.path === '/auth/Login') {
            return navigateTo('/');
        }
    } else {
        console.log('User is not logged in');
        if (to.path !== '/auth/Login') {
            return navigateTo('/auth/Login');
        }
    }
});
