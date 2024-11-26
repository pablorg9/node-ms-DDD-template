import { injectable, inject } from 'inversify';
import { UserService } from '@domain/services';
import { User } from '@domain/entities/User';
import { IUserDTO } from '@interfaces/DTOs';
import { v4 } from 'uuid';

@injectable()
export class UserAppService {
    constructor(@inject(UserService) private _userService: UserService) {}

    async getUserById(id: string): Promise<User> {
        const user = await this._userService.getUserById(id);
        return user;
    }

    async createUser(userDTO: IUserDTO): Promise<User> {
        const user = this.mapUserDTOToEntity(userDTO);
        await this._userService.createUser(user);
        return user;
    }

    async updateUser(userDTO: IUserDTO): Promise<User> {
        const user = this.mapUserDTOToEntity(userDTO);
        const userUpdated = await this._userService.updateUser(user);
        return userUpdated;
    }

    async deleteUser(id: string): Promise<void> {
        await this._userService.deleteUser(id);
    }

    private mapUserDTOToEntity = (dto: IUserDTO): User => {
        const id = dto.id ? dto.id : v4();
        const { name, address, email, phone } = dto;

        return new User(id, name, email, address, phone);
    };
}
