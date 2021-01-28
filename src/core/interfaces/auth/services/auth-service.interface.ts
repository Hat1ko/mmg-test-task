export interface IAuthService {
  verifyUser(authValue: string): boolean
}
