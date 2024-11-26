import { User } from '@domain/entities';

export interface IUserRepository {
    getUserById(_id: string): Promise<User>;
    save(_user: User): Promise<void>;
    update(_user: User): Promise<User>;
    delete(_id: string): Promise<void>;
}
