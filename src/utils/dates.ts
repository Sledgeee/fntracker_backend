import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

export abstract class Dates {
	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date
}
