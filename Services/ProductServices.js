import apiClient from "../Utils/api-client";

export function getSugesstion(search){
    return apiClient.get(`/products/suggestions?search=${search}`)
}