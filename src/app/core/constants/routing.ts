class Auth {
  static readonly BASE = 'auth';
  static readonly LOGIN = `login`;
}

class Home {
  static readonly BASE = 'home';
}

class Params {
  static readonly LOGIN_REDIRECT_URL_NAME = 'returnUrl';
}

export class Routing {
  static readonly AUTH = Auth;
  static readonly HOME = Home;
  static readonly PARAMS = Params;
}
