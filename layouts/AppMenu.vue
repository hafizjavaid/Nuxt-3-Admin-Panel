<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';
import useAuthStore from '../stores/auth.store';
const authStore = useAuthStore();
const model = ref([
    {
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        items: [{ label: 'User', icon: 'pi pi-fw pi-user', to: '/user/' }]
    },
    {
        items: [{ label: 'Team', icon: 'pi pi-fw pi-users', to: '/team/' }]
    },
    {
        items: [{ label: 'News', icon: 'pi pi-fw pi-file', to: '/news' }]
    },
    {
        items: [{ label: 'Ads', icon: 'pi pi-fw pi-amazon', to: '/' }]
    },
    {
        items: [{
            label: 'Categories', icon: 'pi pi-fw pi-align-justify', to: '/' }]
    },
    {
        items: [{ label: 'Privilege', icon: 'pi pi-fw pi-bookmark', to: '/' }]
    },
    {
        items: [{ label: 'Logout', icon: 'pi pi-fw pi-sign-out', to: '/', command: await authStore.logout }]
    }
]);

</script>

<template>
    <ul class="layout-menu">
        <li v-for="(item, i) in model" :key="i">
            <app-menu-item  class="menu-item" :item="item" :index="i"></app-menu-item>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    
</style>
