import { environment } from '../../../environments/environment';

export class Endpoints {
  static baseApiUrl = environment.baseApiUrl;
  // TODO: change url to /auth/login when dealing with real API
  static readonly login = () => `${Endpoints.baseApiUrl}/auth`;
}
