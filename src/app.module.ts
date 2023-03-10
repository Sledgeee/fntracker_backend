import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getTypeOrmConfig } from './config'
import { UserModule } from './user'
import { AuthModule } from './auth'
import { APP_GUARD } from '@nestjs/core'
import { AtGuard } from './common/guards'
import { MailModule } from './mail'
import { SubscriptionModule } from './subscription'
import { ScheduleModule } from '@nestjs/schedule'
import { ProfileModule } from './profile'
import { CookieResolver, I18nModule } from 'nestjs-i18n'
import { PrModule } from './pr'
import * as path from 'path'
import { OtpModule } from './otp/otp.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `${process.env.NODE_ENV}.env`
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTypeOrmConfig
		}),
		I18nModule.forRoot({
			fallbackLanguage: 'en',
			loaderOptions: {
				path: path.join(__dirname, '/i18n/'),
				watch: true
			},
			resolvers: [{ use: CookieResolver, options: ['fntracker-locale'] }]
		}),
		ScheduleModule.forRoot(),
		UserModule,
		SubscriptionModule,
		AuthModule,
		MailModule,
		ProfileModule,
		PrModule,
		OtpModule
	],
	providers: [
		{
			provide: APP_GUARD,
			useClass: AtGuard
		}
	]
})
export class AppModule {}
