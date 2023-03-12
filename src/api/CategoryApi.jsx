import axiosClient from "./axiosClient";

const CategoryApi = {
    getAll: (params) => {
        const url = "/category";
        return axiosClient.get(url, { params });
    }
}
export default CategoryApi;