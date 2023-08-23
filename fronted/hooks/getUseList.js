
import axios from 'axios';

export const getUserList = async () => {
    const client = axios.create({
        baseURL: "http://localhost:3001/" 
      });
    let response = [];
    let data = await client.get("users")
    return data.data
    // console.log("retirnn,n", response)
    // return response;
}