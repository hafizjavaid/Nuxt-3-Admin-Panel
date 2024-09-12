<template>
    <div class="mt-5">
        <!-- แสดงข่าวที่มีคนดู 10 อันดับแรกตามช่วงเวลา -->
        <h4>Top 10 News - {{ period }}</h4>
        <DataTable :value="topNews" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single"
            sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px">
            <Column field="TITLE" header="TITLE" style="min-width: 300px"></Column>
            <Column field="PICTURE" header="PICTURE" style="min-width: 50px">
            </Column>
            <Column field="VIEW" header="VIEW" style="min-width: 100px"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';


const props = defineProps({
    period: String
});

const topNews = ref([]);

const fetchTopNews = async (period) => {
    try {
        const response = []; //await axios.get(`/api/news/top?period=${period}`);
        topNews.value = response.data;
    } catch (error) {
        console.error('Failed to fetch top news:', error);
    }
};

watch(() => props.period, (newPeriod) => {
    fetchTopNews(newPeriod);
}, { immediate: true });
</script>
