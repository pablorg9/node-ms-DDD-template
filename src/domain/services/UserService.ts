import { injectable, inject } from 'inversify';
import { IUserRepository } from '@domain/repositories';
import { User } from '@domain/entities';
import { USER_REPOSITORY } from '@setup/Symbols';

@injectable()
export class UserService {
    constructor(@inject(USER_REPOSITORY) private _userRepository: IUserRepository) {}

    async createUser(user: User): Promise<void> {
        // Aquí puede ir lógica adicional, como verificar el email, etc.
        await this._userRepository.save(user);
    }
}
