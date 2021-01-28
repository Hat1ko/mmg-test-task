import { FactoryProvider } from '@nestjs/common'
import { AUTH_SERVICE, CONFIG_SERVICE, IConfigService } from 'src/core'
import { AuthService } from '../services'

export const AuthServiceProvider: FactoryProvider = {
  provide: AUTH_SERVICE,
  inject: [CONFIG_SERVICE],
  useFactory: (configService: IConfigService) => new AuthService(configService.get('AUTH_TOKEN')),
}
