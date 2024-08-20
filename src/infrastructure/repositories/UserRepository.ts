import { injectable } from 'inversify';
import { IUserRepository } from '@domain/repositories';
import { User } from '@domain/entities';

@injectable()
export class UserRepository implements IUserRepository {
    private users: Map<number, User> = new Map();

    async save(user: User): Promise<void> {
        this.users.set(user.id, user);
        console.log(this.users);
    }
}
