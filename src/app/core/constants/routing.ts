class Auth {
  static readonly BASE = 'auth';
  static readonly LOGIN = `login`;
  static readonly ABSOLUTE_LOGIN = `${Auth.BASE}/${Auth.LOGIN}`;
}

class Home {
  static readonly BASE = 'home';
}

class Transaction {
  static readonly BASE = 'transactions';
}

class Params {
  static readonly LOGIN_REDIRECT_URL_NAME = 'returnUrl';
  static readonly ERROR_CODE_PARAM = 'statusCode';
}

export class Routing {
  static readonly AUTH = Auth;
  static readonly HOME = Home;
  static readonly TRANSACTION = Transaction;
  static readonly PARAMS = Params;
  static readonly ERROR = 'error';
}
