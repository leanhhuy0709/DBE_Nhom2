import axios from 'axios';

//No token, nếu có update sau!
export const Post = async (Url, Data) => {
 
    const result = await axios.post(
        Url,
        Data
    );
    return result.data;

}
//
export const Get = async (Url) => {
    const result = await axios.get(Url);
    return result;
}
const Test = () => {console.log("Test Axios called!")};
export default Test;