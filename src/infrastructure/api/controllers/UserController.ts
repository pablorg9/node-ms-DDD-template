import 'reflect-metadata';
import { inject } from 'inversify';
import { Request } from 'express';
import { controller, interfaces, httpPost, request } from 'inversify-express-utils';
import { UserAppService } from '@application/services';
import { ApiSuccessResponse } from '@utils';
import { IUserDTO } from '@interfaces/DTOs';
import { createUserSchema, validate } from '../validators';

@controller('/users')
export class UserController implements interfaces.Controller {
    constructor(@inject(UserAppService) private _userAppService: UserAppService) {}

    // @httpGet('/:id')
    // async getUserById(@requestParam('id') id: string) {
    //     const user = await this._userAppService.getUserById(id);
    //     const response = new ApiSuccessResponse<typeof user>(201, user);

    //     return response;
    // }

    @httpPost('/', validate(createUserSchema))
    async createUser(@request() req: Request) {
        const userDTO: IUserDTO = req.body;
        const user = await this._userAppService.createUser(userDTO);
        const response = new ApiSuccessResponse<typeof user>(201, user);

        return response;
    }
}
