export type CouponDto = {
    id: number;
    shop_id?: number;
    code?: string;
    amount?: number;
    url: string;
    status?: string;
    publish_date: Date;
    stop_date: Date;
    createdAt?: Date;
    updatedAt?: Date;
};
