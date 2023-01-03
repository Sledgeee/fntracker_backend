import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const GetUser = createParamDecorator(
	(data: string | undefined, context: ExecutionContext) => {
		const request = context.switchToHttp().getRequest()
		return data ? request.user[data] : request.user
	}
)
