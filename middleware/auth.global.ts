export default defineNuxtRouteMiddleware(async (to, from) => {
    // const authStore = useAuthStore();

    // authStore.restoreSession();

    // if (to.meta.layout === 'default' || to.meta.layout === undefined) {
    //     if (authStore.session.isLoggedIn) {
    //         if (to.path === '/') return await navigateTo('/stock');
    //         return;
    //     }
    //     return await navigateTo('/login');
    // }
    // if (authStore.session.isLoggedIn) {
    //     return await navigateTo('/stock');
    // }
    return;
});
