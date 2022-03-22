class TokenStorage {
  static readonly usernameKey = 'username';
  static readonly tokenKey = 'token';
}

class NotifierKey {
  static readonly successKey = 'success';
  static readonly errorKey = 'error';
}

export class Constants {
  static readonly TOKEN_STORAGE = TokenStorage;
  static readonly NOTIFIER_KEY = NotifierKey;
}
