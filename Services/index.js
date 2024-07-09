import apiClient from "../Utils/api-client";

export   function SignUp(user, profiel){
    const body = new FormData()
    body.append("name", user.name)
    body.append("email", user.email)
    body.append("password", user.password)
    body.append("deliveryAddress", user.address)
    body.append("profilePic", profiel)

  return   apiClient.post('/user/signup',body)


}
export  function SignIn(user){

 return apiClient.post(`/user/login `,user)

}