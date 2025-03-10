import { get, post} from "../utils/request";   

export const login = async (email, password) => { //get thông tin từ API về xem có đúng có tài khoản này không? 
    const result = await get(`users?email=${email}&password=${password}`); //BE làm khác nhưng kh có BE thì fix cứng để test tạm
    return result;
}

export const register = async (options) => {
    const result = await post("users", options);
    return result;
}

export const checkExist = async (key, value) => {
    const result = await get(`users?${key}=?${value}`); // cái này như kiểu filter
    return result;
}

