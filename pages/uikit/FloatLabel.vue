<script setup>
import { CountryService } from '@/service/CountryService';
import { onMounted, ref } from 'vue';

const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
const countries = ref();
const filteredCountries = ref();
const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const value4 = ref(null);
const value5 = ref(null);
const value6 = ref(null);
const value7 = ref(null);
const value8 = ref(null);
const value9 = ref(null);
const value10 = ref(null);

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const searchCountry = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
};
</script>

<template>
    <div class="card">
        <h5>Float Label</h5>
        <div class="grid p-fluid mt-3">
            <div class="field col-12 md:col-4">
                <span class="p-float-label">
                    <InputText id="inputtext" v-model="value1" type="text" />
                    <label for="inputtext">InputText</label>
                </span>
            </div>
            <div class="field col-12 md:col-4">
                <span class="p-float-label">
                    <AutoComplete id="autocomplete" v-model="value2" optionLabel="name" :suggestions="filteredCountries" @complete="searchCountry" />
                    <label for="autocomplete">AutoComplete</label>
                </span>
            </div>
            <div class="field col-12 md:col-4">
                <span class="p-float-label">
                    <Calendar v-model="value3" inputId="calendar"></Calendar>
                    <label for="calendar">Calendar</label>
                </span>
            </div>
            <div class="field col-12 md:col-4">
                <span class="p-float-label">
                    <Chips v-model="value4" inputId="chips"></Chips>
                    <label for="chips">Chips</label>
                </span>
            </div>
            <div class="field col-12 md:col-4">
                <span class="p-float-label">
                    <InputMask id="inputmask" v-model="value5" mask="99/99/9999"></InputMask>
                    <label for="inputmask">InputMask</label>
                </span>
            </div>
            <div class="field col-12 md:col-4">
                <span class="p-float-label">
                    <InputNumber id="inputnumber" v-model="value6"></InputNumber>
                    <label for="inputnumber">InputNumber</label>
                </span>
            </div>
            <div class="field col-12 md:col-4">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-user"></i>
                    </span>
                    <span class="p-float-label">
                        <InputText id="inputgroup" v-model="value7" type="text" />
                        <label for="inputgroup">InputGroup</label>
                    </span>
                </div>
            </div>
            <div class="field col-12 md:col-4">
                <span class="p-float-label">
                    <Dropdown id="dropdown" v-model="value8" :options="cities" optionLabel="name"></Dropdown>
                    <label for="dropdown">Dropdown</label>
                </span>
            </div>
            <div class="field col-12 md:col-4">
                <span class="p-float-label">
                    <MultiSelect id="multiselect" v-model="value9" :options="cities" optionLabel="name" :filter="false"></MultiSelect>
                    <label for="multiselect">MultiSelect</label>
                </span>
            </div>
            <div class="field col-12 md:col-4">
                <span class="p-float-label">
                    <Textarea v-model="value10" inputId="textarea" rows="3" cols="30"></Textarea>
                    <label for="textarea">Textarea</label>
                </span>
            </div>
        </div>
    </div>
</template>
