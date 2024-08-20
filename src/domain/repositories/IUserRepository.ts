import { User } from '@domain/entities';

export interface IUserRepository {
    save(_user: User): Promise<void>;
}
