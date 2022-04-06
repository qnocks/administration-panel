import { environment } from '../../../environments/environment';

class Auth {
  static readonly BASE = 'auth';
  static readonly LOGIN = `${environment.baseApiUrl}/${Auth.BASE}/login`;
  static readonly LOGOUT = `${environment.baseApiUrl}/${Auth.BASE}/logout`;
  static readonly REFRESH = `${environment.baseApiUrl}/${Auth.BASE}/refresh`;
}

export class Endpoints {
  static readonly AUTH = Auth;
}
