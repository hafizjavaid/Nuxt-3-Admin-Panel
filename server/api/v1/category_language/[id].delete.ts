import CategoryLanguage from '@/server/models/category_language.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const result = await CategoryLanguage.update({ status: 'inactive' }, { where: { id } });
    return {
        status: 'success'
    };
});
