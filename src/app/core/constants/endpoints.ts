import { environment } from '../../../environments/environment';

class Auth {
  private static readonly baseAuth = 'auth';
  static readonly LOGIN = `${environment.baseApiUrl}/${Auth.baseAuth}/login`;
  static readonly LOGOUT = `${environment.baseApiUrl}/${Auth.baseAuth}/logout`;
}

export class Endpoints {
  static readonly AUTH = Auth;
}
