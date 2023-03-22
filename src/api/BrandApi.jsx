import axiosClient from "./axiosClient";

const BrandApi = {
    getAll: (params) => {
        const url = "/api/v1/brand";
        return axiosClient.get(url, { params });
    }
}
export default BrandApi;