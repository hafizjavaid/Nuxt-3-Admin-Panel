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
                                v-model="searchQuery" />
                            <i class="pi pi-search search-icon" @click="search"></i>
                        </div>
                        <div class="custom-col rigthB">
                            <Button label="Add User" icon="pi pi-plus" severity="success" outlined
                                class="custom-button-size" />

                        </div>
                    </div>
                    <div>
                        <DataTable :value="customer2" :scrollable="true" :paginator="true" scrollHeight="400px"
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
</template>

<script setup lang="ts">

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
</style>