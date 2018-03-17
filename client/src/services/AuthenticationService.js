import Api from "@/services/Api"

export default {
  register ( credentals ) {
    return Api().post('register', credentals)
  }
}

// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })