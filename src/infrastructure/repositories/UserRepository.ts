import { injectable } from 'inversify';
import { IUserRepository } from '@domain/repositories';
import { User } from '@domain/entities';

@injectable()
export class UserRepository implements IUserRepository {
    private users: Map<string, User> = new Map();

    async getUserById(id: string): Promise<User> {
        const user = this.users.get(id);

        if (!user) {
            if (!user) {
                throw new Error(`User with ID ${id} not found`);
            }
        }

        return user!;
    }

    async save(user: User): Promise<void> {
        this.users.set(user.id, user);
    }

    async update(user: User): Promise<User> {
        const existingUser = this.users.get(user.id);

        if (!existingUser) {
            throw new Error(`User with ID ${user.id} not found`);
        }

        const updatedUser: any = { ...existingUser };
        for (const key of Object.keys(user) as (keyof User)[]) {
            if (user[key] !== null && user[key] !== undefined) {
                updatedUser[key] = user[key];
            }
        }

        this.users.set(user.id, updatedUser);

        return updatedUser;
    }

    async delete(id: string): Promise<void> {
        const userExists = this.users.has(id);

        if (!userExists) {
            throw new Error(`User with ID ${id} not found`);
        }

        this.users.delete(id);
    }
}
