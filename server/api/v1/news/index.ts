// ตัวอย่าง middleware ที่ถูกต้อง
export default defineEventHandler((event) => {
    // ตรวจสอบและดำเนินการบางอย่าง
    return {
        hello: 'nuxt3'
    }; // หรือส่งค่าที่เหมาะสม
});
