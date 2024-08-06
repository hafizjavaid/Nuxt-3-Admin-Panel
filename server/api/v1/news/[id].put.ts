export default defineEventHandler((event) => {
    const id = getRouterParam(event, 'id');
    return {
        message: 'update news',
        Id: id
    };
});
