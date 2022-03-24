import { environment } from '../../../environments/environment';

class Auth {
  private static readonly baseAuth = 'auth';
  static readonly login = `${environment.baseApiUrl}/${Auth.baseAuth}/login`;
  static readonly logout = `${environment.baseApiUrl}/${Auth.baseAuth}/logout?trace=true`;
}

export class Endpoints {
  static readonly AUTH = Auth;
}
