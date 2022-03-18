import { environment } from '../../../environments/environment';

class Login {
  static readonly login = `${environment.baseApiUrl}/auth/login`;
}

export class Endpoints {
  static readonly LOGIN = Login;
}
