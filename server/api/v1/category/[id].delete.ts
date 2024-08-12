export default defineEventHandler((event) => {
    const id = getRouterParam(event, 'id');
    return {
        message: `Delete ${id}`,
        id: id
    };
});
