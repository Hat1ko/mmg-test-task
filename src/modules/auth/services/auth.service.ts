import { IAuthService } from 'src/core'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService implements IAuthService {
  private readonly authValue: string

  constructor(authValue: string) {
    this.authValue = authValue
  }

  verifyUser(authValue: string): boolean {
    const token = authValue.substring('Bearer '.length)
    return token === this.authValue
  }
}
