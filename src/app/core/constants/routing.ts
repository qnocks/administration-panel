class Auth {
  static readonly BASE = 'auth';
  static readonly LOGIN = `login`;
  static readonly ABSOLUTE_LOGIN = `${Auth.BASE}/${Auth.LOGIN}`;
}

class Home {
  static readonly BASE = 'home';
}

class Error {
  static readonly BASE = 'error';
}

class Params {
  static readonly LOGIN_REDIRECT_URL_NAME = 'returnUrl';
  static readonly ERROR_CODE_PARAM = 'statusCode';
}

export class Routing {
  static readonly AUTH = Auth;
  static readonly HOME = Home;
  static readonly ERROR = Error;
  static readonly PARAMS = Params;
}
