import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common'
import { AUTH_SERVICE, IAuthService } from 'src/core'

@Injectable()
export class AuthGuard implements CanActivate {
  @Inject(AUTH_SERVICE)
  private readonly authService: IAuthService

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const authValue = request.headers?.authorization
    if (!authValue) {
      return false
    }

    return this.authService.verifyUser(authValue)
  }
}
