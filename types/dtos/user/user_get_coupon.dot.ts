export type UserGetCouponDot = {
    id: number;
    user_id: number;
    coupon_id: number;
    get_date: Date;
    get_time: string; // ใช้ string สำหรับเวลา ถ้าคุณต้องการแยกเวลาออกมาเป็น string
    status: string;
    createdAt: Date;
    updatedAt: Date;
};
