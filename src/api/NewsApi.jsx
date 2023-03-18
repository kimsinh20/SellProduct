import axiosClient from "./axiosClient";

const NewsApi = {
    get4News: (params) => {
        const url = "/api/v1/news";
        return axiosClient.get(url, { params });
    }
}
export default NewsApi;