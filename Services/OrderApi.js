import apiClient from "../Utils/api-client";

export function PayPall(){
    return apiClient.post('/order/checkout')
}
export function GetOrder(){
        return apiClient.get('/order')
}