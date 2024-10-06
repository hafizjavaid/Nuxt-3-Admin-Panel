<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <div class="row">
                    <div class="custom-row">
                        <div class="custom-col">
                            <h4 class="text-gray">Management Team</h4>
                        </div>
                        <div class="custom-col input-container">
                            <InputText type="text" name="search" placeholder="Search" class="underline-input"
                                 />
                            <i class="pi pi-search search-icon" @click="search"></i>
                        </div>
                        <div class="custom-col rigthB">
                            <Button label="Add User" icon="pi pi-plus" severity="success" outlined
                                class="custom-button-size" @click="open" />
                        </div>
                    </div>
                    <div>
                        <DataTable :value="dataTeams" :scrollable="true" :paginator="true" scrollHeight="400px"
                            :loading="loading2" scrollDirection="both" class="mt-3">
                            <Column field="userName" header="Username" style="min-width: 150px" frozen></Column>
                            <Column field="name" header="Name" style="min-width: 150px" :frozen="idFrozen"></Column>
                            <Column field="email" header="Email" style="min-width: 150px"></Column>
                            <Column field="phone" header="Phone" style="min-width: 100px"></Column>
                            <Column field="userType" header="User Type" style="min-width: 100px"></Column>
                            <Column field="gender" header="Gender" style="min-width: 100px"></Column>
                            <Column field="picture" header="picture" style="min-width: 100px">
                                <template #body="{ data }">
                                    <div class="flex align-items-center gap-2">
                                        <img :alt="data.representative.name" :src="`/${data.representative.image}`"
                                            style="width: 32px" />
                                    </div>
                                </template>
                            </Column>
                            <Column field="actions" header="Actions" style="min-width: 100px" frozen
                                alignFrozen="right">
                                <template #body="{ data }">
                                    {{ data }}
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid">
        <div class="col-12 lg:col-6">
            <Dialog :header="isEditMode ? 'Edit User' : 'New User'" v-model:visible="display"
                :breakpoints="{ '960px': '70vw' }" :style="{ width: '40vw', height: '80vh' }" :modal="true">
                <hr>
                <div style="margin-left: 20px;">
                    <div class="grid align-items-center" style="display: flex; align-items: center;">

                        <h5 style="margin-right: 10px; padding-top: 10px;">User Type :</h5>

                        <div class="col-12 md:col-2">
                            <div class="field-radiobutton mb-0">
                                <RadioButton id="option1" name="option" value="editor" v-model="formData.userType" />
                                <label for="option1">Editor</label>
                            </div>
                        </div>
                        <div class="col-12 md:col-4">
                            <div class="field-radiobutton mb-0">
                                <RadioButton id="option2" name="option" value="admin" v-model="formData.userType" />
                                <label for="option2">Admin</label>
                            </div>
                        </div>
                    </div>
                    <div class="grid align-items-center mt-2" style="display: flex; align-items: center;">
                        <h5 style="margin-right: 10px; padding-top: 10px;">Gender :</h5>
                        <div class="col-12 md:col-2">
                            <div class="field-radiobutton mb-0" style="margin-right: 10px;">
                                <RadioButton id="option1" name="option" value="editor" v-model="formData.gender" />
                                <label for="option1">Man</label>
                            </div>
                        </div>
                        <div class="col-12 md:col-4">
                            <div class="field-radiobutton mb-0">
                                <RadioButton id="option2" name="option" value="admin" v-model="formData.gender" />
                                <label for="option2">Female</label>
                            </div>
                        </div>
                    </div>
                    <div class="grid align-items-center mt-2" style="display: flex; align-items: center;">
                        <h5 style="margin-right: 0px; padding-top: 20px;">Username:</h5>
                        <div class="col-12 mb-2 lg:col-8 lg:mb-0">
                            <InputText type="text" placeholder="Username" v-model="formData.username"
                                :style="{ border: 'none', borderBottom: '1px solid #ccc', borderRadius: '0', width: '100%' }" />
                        </div>

                    </div>
                    <div class="grid align-items-center mt-2" style="display: flex; align-items: center;">
                        <h5 style="margin-right: 0px; padding-top: 20px;">Name:</h5>
                        <div class="col-12 mb-2 lg:col-8 lg:mb-0">
                            <InputText type="text" placeholder="Name" v-model="formData.name"
                                :style="{ border: 'none', borderBottom: '1px solid #ccc', borderRadius: '0', width: '100%' }" />
                        </div>
                    </div>
                    <div class="grid align-items-center mt-2" style="display: flex; align-items: center;">
                        <h5 style="margin-right: 0px; padding-top: 20px;">Password:</h5>
                        <div class="col-12 mb-2 lg:col-8 lg:mb-0">
                            <InputText type="password" placeholder="Password" v-model="formData.password"
                                :style="{ border: 'none', borderBottom: '1px solid #ccc', borderRadius: '0', width: '100%' }" />
                        </div>
                    </div>
                    <div class="grid align-items-center mt-2" style="display: flex; align-items: center;">
                        <h5 style="margin-right: 0px; padding-top: 20px;">Email:</h5>
                        <div class="col-12 mb-2 lg:col-8 lg:mb-0">
                            <InputText type="email" placeholder="Email" v-model="formData.email"
                                :style="{ border: 'none', borderBottom: '1px solid #ccc', borderRadius: '0', width: '100%' }" />
                        </div>
                    </div>
                    <div class="grid align-items-center mt-2" style="display: flex; align-items: center;">
                        <h5 style="margin-right: 0px; padding-top: 20px;">Phone:</h5>
                        <div class="col-12 mb-2 lg:col-8 lg:mb-0">
                            <InputText type="text" placeholder="Phone" v-model="formData.phone"
                                :style="{ border: 'none', borderBottom: '1px solid #ccc', borderRadius: '0', width: '100%' }" />
                        </div>
                    </div>
                    <div class="grid align-items-center mt-2" style="display: flex; align-items: center;">
                        <h5 style="margin-right: 0px; padding-top: 20px;">File</h5>
                        <div class="col-12 mb-2 lg:col-8 lg:mb-0">
                            <FileUpload mode="basic" name="userPicture" accept="image/*" :maxFileSize="1000000"
                                @uploader="onUpload" customUpload />
                        </div>
                    </div>

                </div>
                <div class="mt-2" style="text-align: right;">
                    <Button label="Cancel" @click="close" icon="pi pi-times" class="p-button-outlined"
                        :style="{ color: 'red', borderColor: 'red', marginRight: '10px' }" />
                    <Button label="Save" @click="close" icon="pi pi-check" class="p-button-outlined" />
                </div>

            </Dialog>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm';

const display = ref(false);
const isEditMode = ref(false);
const dataTeams = ref(null);
const formData = ref({
    userType: '',
    gender: '',
    username: '',
    name: '',
    password: '',
    email: '',
    phone: '',
    picture: ''
});
 
const open = () => {
    display.value = true;
};
const close = () => {
    display.value = false;
};

const openDialog = (userData) => {
    if (userData) {
        isEditMode.value = true;
        formData.value = { ...userData };
    } else {
        isEditMode.value = false;
        resetForm();
    }
    display.value = true;
};

const resetForm = () => {
    formData.value = {
        userType: '',
        gender: '',
        username: '',
        name: '',
        password: '',
        email: '',
        phone: ''
    };
    file.value = null;
};

const handleFileUpload = (event) => {
    file.value = event.files[0];
};

const save = () => {
    const formDataObject = new FormData();
    formDataObject.append('file', file.value);
    formDataObject.append('body', JSON.stringify(formData.value));

    isEditMode.value ? updateUser(formDataObject) : addUser(formDataObject);
};

const addUser = (formDataObject) => {
    // API สำหรับเพิ่มข้อมูลใหม่
    // สมมุติว่าคุณมี `$http` หรือฟังก์ชันที่ใช้ส่งข้อมูล
    console.log('Adding user...', formDataObject);
    close();
};

const updateUser = (formDataObject) => {
    // API สำหรับแก้ไขข้อมูล
    console.log('Updating user...', formDataObject);
    close();
};
</script>

<style scoped>
.custom-row {
    display: flex;
    justify-content: space-between;
}

.custom-col {
    flex: 1;
    padding: 10px;
}

.input-container {
    position: relative;
    width: 200px;
    align-items: flex-end;
}

.underline-input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #ebe5e5;
    /* เพิ่มความหนาของเส้น */
    outline: none;
    padding-right: 40px;
    box-shadow: none;
    /* ลบเงาเพื่อไม่ให้เส้นโค้ง */
    border-radius: 0;
    align-items: flex-end;
    /* ลบการโค้งของมุม */
}

.underline-input::placeholder {
    font-size: 1.6rem;
    /* ขนาดของ placeholder */
    color: #999;
    /* สีของ placeholder */
}

.search-icon {
    position: absolute;
    right: 0;
    top: 40%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    color: #999;
    cursor: pointer;
    align-items: flex-end;
}

.rigthB {
    display: flex;
    justify-content: flex-end;
}

.p-button {
    margin-right: 0;
    align-items: flex-end;
    /* ลบ margin ขวาออกหากมี */
}

.custom-button-size {
    display: flex;
    /* ใช้ flexbox เพื่อจัดตำแหน่ง */
    align-items: center;
    /* จัดแนวไอคอนและข้อความในแนวตั้ง */
    justify-content: center;
    /* จัดตำแหน่งเนื้อหาทั้งหมดให้อยู่ตรงกลาง */
    padding: 0.5rem 1rem;
    /* ปรับขนาด padding ของปุ่ม */
    font-size: 1rem;
    /* ปรับขนาดตัวอักษรของปุ่ม */
    height: auto;
    /* ปรับความสูงให้เหมาะสม */
}

.custom-button-size .pi {
    font-size: 2rem;
    /* ปรับขนาดไอคอน */
    margin-right: 0.5rem;
    /* เพิ่มระยะห่างระหว่างไอคอนกับข้อความ */
}

.text-gray {
    color: #808080;
    /* หรือสีเทาอื่น ๆ ตามที่คุณต้องการ */
}

input[type="text"] {
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    outline: none;
    /* ลบเส้นขอบที่แสดงเมื่อ focus */
}

input[type="text"]:hover {
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
}

input[type="text"]:focus {
    border: none;
    border-bottom: 1px solid #007bff;
    /* หรือสีที่คุณต้องการเมื่อ focus */
    border-radius: 0;
    outline: none;
    /* ลบเส้นขอบที่แสดงเมื่อ focus */
}

input[type="password"] {
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    outline: none;
    /* ลบเส้นขอบที่แสดงเมื่อ focus */
}

input[type="email"] {
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    outline: none;
    /* ลบเส้นขอบที่แสดงเมื่อ focus */
}
</style>