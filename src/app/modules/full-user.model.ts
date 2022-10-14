import { Account } from './account';
import { User } from './user.model';
export interface FullUser {
  account: Account;
  user: User;
}
