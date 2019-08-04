import axios from 'axios';
const APIKey = '13196765-4298ecde5709bfcd49e695be0';

export default axios.create({
    baseURL: "https://pixabay.com",
    params: {
        apiKey: APIKey
    }
});