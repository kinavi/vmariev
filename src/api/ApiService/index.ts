import { ApiController } from '../ApiController';
import { Auth } from './domains/Auth';

export class ApiService {
  controller: ApiController;
  domains: {
    auth: Auth;
  };
  constructor() {
    const baseUrl = process.env.REACT_APP_API_URL;
    if (!baseUrl) {
      throw new Error('not set REACT_APP_API_URL');
    }
    this.controller = new ApiController(baseUrl);
    this.domains = {
      auth: new Auth(this.controller),
    };
  }
}
