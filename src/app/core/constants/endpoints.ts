import { environment } from '../../../environments/environment';

class Login {
  static readonly login = `${environment.baseApiUrl}/auth/admin`;
}

export class Endpoints {
  static readonly LOGIN = Login;
}
