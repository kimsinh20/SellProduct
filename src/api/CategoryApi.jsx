import axiosClient from "./axiosClient";

const CategoryApi = {
    getAll: (params) => {
        const url = "/api/v1/category";
        return axiosClient.get(url, { params });
    }
}
export default CategoryApi;