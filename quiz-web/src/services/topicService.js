import { get} from "../utils/request";   


export const getListTopic = async () => { 
    const result = await get(`topics`);
    return result;
}


export const getTopic = async (id) => { 
    const result = await get(`topics/${id}`); //dùng khi đường dẫn động, còn cách dùng query(? ...) kh tìm kiếm và lọc dữ liệu, có hỗ trợ lọc nhiều điều kiện
    return result;
}
