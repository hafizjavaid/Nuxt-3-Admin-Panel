import Ads from '@/server/models/ads.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const result = await Ads.update({ status: 'inactive' }, { where: { id } });
    return {
        status: 'success'
    };
});
