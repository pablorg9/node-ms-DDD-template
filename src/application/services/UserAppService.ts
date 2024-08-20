import { injectable, inject } from 'inversify';
import { UserService } from '@domain/services';
import { User } from '@domain/entities/User';
import { IUserDTO } from '@interfaces/DTOs';

@injectable()
export class UserAppService {
    constructor(@inject(UserService) private _userService: UserService) {}

    async createUser(userDTO: IUserDTO): Promise<User> {
        const user = new User(userDTO.id, userDTO.name);
        await this._userService.createUser(user);
        return user;
    }
}
