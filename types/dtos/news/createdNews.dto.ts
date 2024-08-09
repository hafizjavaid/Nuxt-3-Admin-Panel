export type CreatedNewsDto = {
    id: number;
    newsId: number; // Use camelCase for consistency
    languageId: string; // Use camelCase for consistency
    title: string;
    coverPicture: string; // Use camelCase for consistency
    detail: string;
    view: number;
    userId: number; // Use camelCase for consistency
    approved: boolean;
    reference: string;
    url: string;
    style: string;
    editorData: string; // Use camelCase for consistency
    createdAt: date;
    updatedAt: date;
};
