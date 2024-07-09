import apiClient from "./api-client";
export default function setAuth(token){
    if(token){
        apiClient.defaults.headers.common["x-auth-token"] = token
    }else{
      delete apiClient.defaults.headers.common["x-auth-token"]
    }
}