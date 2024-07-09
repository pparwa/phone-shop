import apiClient from "../Utils/api-client";
export function AddCart(id,quantity){
console.log(id)
    return apiClient.post(`/cart/${id}`,{quantity})
}
export function GetCart(){
    return apiClient.get(`/cart`)
}
export function RemoveCart(id){
    console.log(id)
    return apiClient.patch(`/cart/remove/${id}`)
}