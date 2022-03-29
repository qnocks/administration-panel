import { environment } from '../../../environments/environment';

class Auth {
  private static readonly baseAuth = 'auth';
  static readonly LOGIN = `${environment.baseApiUrl}/${Auth.baseAuth}/login?trace=true`;
  static readonly LOGOUT = `${environment.baseApiUrl}/${Auth.baseAuth}/logout?trace=true`;
  static readonly REFRESH = `${environment.baseApiUrl}/${Auth.baseAuth}/refresh?trace=true`;
}

export class Endpoints {
  static readonly AUTH = Auth;
}
