import { TransactionAmount } from './transaction-amount';

export interface Transaction {
  id: string;
  externalId: string;
  provider: string;
  status: string;
  amount?: TransactionAmount;
  commissionAmount?: TransactionAmount;
  user: string;
  timestamp?: number;
  providerTimestamp?: number;
  additionalData?: string;
}
