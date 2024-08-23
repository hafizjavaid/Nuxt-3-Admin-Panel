<script setup>
import { useLayout } from '@/layouts/composables/layout';
import { onMounted, reactive, ref, watch } from 'vue';
const { isDarkTheme } = useLayout();
const products = ref(null);
const lineData = reactive(
        {
            name: 'First Dataset',
            name_picture: 'testKai.jpg',
            detail: 'คู่มันหยุดโลก เจ้านำแดงไก่จากชัยภูมิ พบกับ เจ้าแข่งทองจากอุบณฯ',
            money: '1,000,000',
            date_fighter: '01-01-2024',
            roun_fighter: 5,
        },
        {
            name: 'First Dataset',
            name_picture: 'testKai.jpg',
            detail: 'คู่มันหยุดโลก เจ้านำแดงไก่จากชัยภูมิ พบกับ เจ้าแข่งทองจากอุบณฯ',
            money: '1,000,000',
            date_fighter: '01-01-2024',
            roun_fighter: 5,
        },
        {
            name: 'First Dataset',
            name_picture: 'testKai.jpg',
            detail: 'คู่มันหยุดโลก เจ้านำแดงไก่จากชัยภูมิ พบกับ เจ้าแข่งทองจากอุบณฯ',
            money: '1,000,000',
            date_fighter: '01-01-2024',
            roun_fighter: 5,
        },
        {
            name: 'First Dataset',
            name_picture: 'testKai.jpg',
            detail: 'คู่มันหยุดโลก เจ้านำแดงไก่จากชัยภูมิ พบกับ เจ้าแข่งทองจากอุบณฯ',
            money: '1,000,000',
            date_fighter: '01-01-2024',
            roun_fighter: 5,
        }
);
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
       
        <div class="col-12 lg:col-6 xl:col-3 cursor-pointer" @click="test">
            <div class="card">
                <span class="text-green-500 font-medium">สนามไก่ชนมหาลาภ</span>
                <div class="flex justify-content-between mb-6">
                    <div class="mt-1">
                        <img height="100" src="../public/demo/images/kai/testKai.jpg">ใส่รูปไก่
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round"></div>

                </div>
                <span class="text-green-500 font-medium">24-08-2024 </span>
                <span class="text-500">ชิงเงินรางวัล 1,000,000 B</span>
            </div>
        </div>
        
    </div>
</template>
