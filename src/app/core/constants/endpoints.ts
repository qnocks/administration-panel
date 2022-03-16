import { environment } from '../../../environments/environment';

export class Endpoints {
  static baseApiUrl = environment.baseApiUrl;

  private static Login = class {
    static readonly login = `${Endpoints.baseApiUrl}/auth/login`;
  };

  static readonly LOGIN = Endpoints.Login;
}
