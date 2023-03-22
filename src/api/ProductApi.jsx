import axiosClient from "./axiosClient";

const ProductApi = {
    getAll: (params) => {
        const url = "/api/v1/products";
        return axiosClient.get(url, { params });
    },
    getProductTrending : (params) => {
     const url = "/api/v1/products/trending";
     return axiosClient.get(url,{params});
    },
    getProductId: (id) => {
        const url = "/api/v1/products/" + id;
        return axiosClient.get(url);
    },
    getProductIdv2: (id) => {
        const url = "/products/" + id;
        return axiosClient.get(url);
    }
}
export default ProductApi;