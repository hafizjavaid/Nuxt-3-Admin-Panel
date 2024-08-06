export default defineEventHandler((event) => {
    // ใช้ชื่อพารามิเตอร์เป็นสตริง
    const keyword = getRouterParam(event, 'keyword') || '';
    const keywordDecode = decodeURIComponent(keyword);
    return {
        message: `search name News ${keyword}`,
        keyword: keywordDecode
    };
});
