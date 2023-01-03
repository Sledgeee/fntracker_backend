import { IsEmail, IsNotEmpty } from 'class-validator'

export class RegisterDto {
	@IsNotEmpty()
	@IsEmail()
	email: string

	@IsNotEmpty()
	password: string

	@IsNotEmpty()
	country: string

	@IsNotEmpty()
	egsId: string
}