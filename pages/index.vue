<script setup>
import { useLayout } from '@/layouts/composables/layout';
import { onMounted, reactive, ref, watch } from 'vue';
const { isDarkTheme } = useLayout();
const products = ref(null);

const items = ref([
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
]);
const lineOptions = ref(null);

onMounted(() => {
    
});

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const applyLightTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };
};

const applyDarkTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            },
            y: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            }
        }
    };
};

watch(
    isDarkTheme,
    (val) => {
        if (val) {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    },
    { immediate: true }
);

function test() {
    alert('test');
}
</script>

<template>
    <div class="grid">
        <!-- การ์ดที่ 1 -->
        <div class="col-12 lg:col-4 cursor-pointer" @click="test">
            <div class="card">
                <div class="flex justify-content-between mb-6">
                    <div class="mt-1">
                        <img height="80" src="@/assets/images/dashboard/ads.png">
                    </div>
                </div>
                <hr>
                <div class="flex items-center">
                    <i class="pi pi-fw pi-eye"></i>
                    <span class="text-gray-500 font-medium ml-2">Ads total 222</span>
                </div>
            </div>
        </div>

        <!-- การ์ดที่ 2 -->
        <div class="col-12 lg:col-4 cursor-pointer" @click="test">
            <div class="card">

                <div class="flex justify-content-between mb-6">
                    <div class="mt-1">
                        <img height="80" src="@/assets/images/dashboard/news.png">
                    </div>
                </div>
                <hr>
                <div class="flex items-center">
                    <i class="pi pi-fw pi-eye"></i>
                    <span class="text-gray-500 font-medium ml-2">News total 222</span>
                </div>
            </div>
        </div>

        <!-- การ์ดที่ 3 -->
        <div class="col-12 lg:col-4 cursor-pointer" @click="test">
            <div class="card">
                <div class="flex justify-content-between mb-6">
                    <div class="mt-1">
                        <img height="80" src="@/assets/images/dashboard/user.png">
                    </div>
                </div>
                <hr>
                <div class="flex items-center">
                    <i class="pi pi-fw pi-eye"></i>
                    <span class="text-gray-500 font-medium ml-2">User total 222</span>
                </div>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Summary Top10</h5>
                <TabView>
                    <TabPanel header="DAILY">
                        <SUMMARY period="daily" />
                    </TabPanel>
                    <TabPanel header="WEEKLY">
                        <SUMMARY period="weekly" />
                    </TabPanel>
                    <TabPanel header="MONTHLY">
                        <SUMMARY period="monthly" />
                    </TabPanel>
                    <TabPanel header="YEARLY">
                        <SUMMARY period="yearly" />
                    </TabPanel>
                    <TabPanel header="TOTAL">
                        <SUMMARY period="all" />
                    </TabPanel>
                </TabView>
            </div>
        </div>
    </div>
</template>
