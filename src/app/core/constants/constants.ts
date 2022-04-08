class TokenStorage {
  static readonly USER_KEY = 'username';
}

class NotifierKey {
  static readonly SUCCESS = 'success';
  static readonly ERROR = 'error';
}

class I18n {
  static readonly HELPER_KEY = 'dummy';
}

class Transaction {
  static readonly TABLE_COLUMNS = [
    'id',
    'externalId',
    'provider',
    'status',
    'amount',
    'currency',
    'commissionAmount',
    'commissionCurrency',
    'user'
  ];

}

export class Constants {
  static readonly TOKEN_STORAGE = TokenStorage;
  static readonly NOTIFIER_KEY = NotifierKey;
  static readonly I18N = I18n;
  static readonly TRANSACTION = Transaction;
  static readonly INTERCEPTOR_SKIP_HEADER = 'skip';
}
