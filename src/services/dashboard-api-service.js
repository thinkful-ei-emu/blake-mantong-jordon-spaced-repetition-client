import config from '../config'
import TokenService from './token-service'


const DashboardService = {
  getLanguageAndWords(){
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res => res.json())
    .then(data => {
      return data;
    });
  }

}
export default DashboardService;
