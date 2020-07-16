import { endpoint } from "../../config";
const postData = async (route, data) => {
    console.log(`${endpoint}${route}`);
    const response = await fetch(`${endpoint}${route}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        credentials: 'include',
        body: JSON.stringify(data)
    });
    return response;
};
export default postData;