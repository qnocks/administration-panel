class Auth {
  static readonly baseAuth = 'auth';
  static readonly login = `login`;
}

class Home {
  static readonly baseHome = 'home';
}

class Params {
  static readonly loginRedirectUrlName = 'returnUrl';
}

export class Routing {
  static readonly AUTH = Auth;
  static readonly HOME = Home;
  static readonly PARAMS = Params;
}
