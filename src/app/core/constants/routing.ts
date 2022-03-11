export class Routing {

  private static Login = class {
    static readonly login = 'login';
  };

  static readonly LOGIN = Routing.Login;

  static Params = class {
    static readonly loginRedirectUrlName = 'returnUrl';
  };
}
