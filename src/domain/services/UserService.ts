import { injectable, inject } from 'inversify';
import { IUserRepository } from '@domain/repositories';
import { User } from '@domain/entities';
import { USER_REPOSITORY } from '@setup/Symbols';

@injectable()
export class UserService {
    constructor(@inject(USER_REPOSITORY) private _userRepository: IUserRepository) {}

    async getUserById(id: string): Promise<User> {
        return this._userRepository.getUserById(id);
    }

    async createUser(user: User): Promise<void> {
        await this._userRepository.save(user);
    }

    async updateUser(user: User): Promise<User> {
        return this._userRepository.update(user);
    }

    async deleteUser(id: string): Promise<void> {
        await this._userRepository.delete(id);
    }
}
