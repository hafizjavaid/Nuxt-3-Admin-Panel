import AdsLanguage from '@/server/models/ads_language.model';
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const result = await AdsLanguage.update({ status: 'inactive' }, { where: { id } });
    return {
        status: 'success'
    };
});
