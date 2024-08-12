import { uploadImage } from '../../services/upload-file-service';
import { defineEventHandler } from 'h3';
export default defineEventHandler(async (event) => {
    const formData = await readMultipartFormData(event);
    const file = formData.length ? formData[0] : null;

    if (file) {
        uploadImage(file, { id: 2, image: 'test.jpg' });
    }
    return {
        result: 'sucess'
    };
});
