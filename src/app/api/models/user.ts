/* tslint:disable */
import { Note } from './note';
import { IdentityUserClaimString } from './identity-user-claim-string';
import { IdentityUserLoginString } from './identity-user-login-string';
import { IdentityUserTokenString } from './identity-user-token-string';
import { TwoFactorRecoveryCode } from './two-factor-recovery-code';
export interface User {
  email?: string;
  id?: string;
  notes?: Array<Note>;
  authenticatorKey?: string;
  roles?: Array<string>;
  claims?: Array<IdentityUserClaimString>;
  logins?: Array<IdentityUserLoginString>;
  tokens?: Array<IdentityUserTokenString>;
  recoveryCodes?: Array<TwoFactorRecoveryCode>;
  userName?: string;
  normalizedUserName?: string;
  name?: string;
  normalizedEmail?: string;
  emailConfirmed?: boolean;
  passwordHash?: string;
  securityStamp?: string;
  concurrencyStamp?: string;
  phoneNumber?: string;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  lockoutEnd?: string;
  lockoutEnabled?: boolean;
  accessFailedCount?: number;
}
