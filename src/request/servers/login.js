import {request} from '../http'

const logins =   {
  getTestData(params){
    return request({
      method: 'Get',
      url:'testApi',
      params:params
    })
  }
}
export default  login
