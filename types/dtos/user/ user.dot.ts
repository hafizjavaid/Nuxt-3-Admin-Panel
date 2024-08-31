export type UserDto = {
    id: number;
    userName: string | null;
    password: string | null;
    email: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
    is_admin: boolean;
    is_shop: boolean;
    picture: string | null;
    gender: string | null;
    email_verified: boolean;
    is_editor: boolean;
};
