import Category from '@/server/models/category.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    console.log(id);
    const result = await Category.update({ status: 'inactive' }, { where: { id } });
    return {
        status: 'success'
    };
});
