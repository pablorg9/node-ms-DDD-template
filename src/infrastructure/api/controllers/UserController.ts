import 'reflect-metadata';
import { inject } from 'inversify';
import { Request } from 'express';
import {
    controller,
    interfaces,
    httpPost,
    request,
    httpGet,
    requestParam,
    httpPut,
    httpDelete,
} from 'inversify-express-utils';
import { UserAppService } from '@application/services';
import { ApiSuccessResponse } from '@utils';
import { IUserDTO } from '@interfaces/DTOs';
import { createUserSchema, updateUserSchema, validate } from '../validators';

@controller('/users')
export class UserController implements interfaces.Controller {
    constructor(@inject(UserAppService) private _userAppService: UserAppService) {}

    @httpGet('/:id')
    async getUserById(@requestParam('id') id: string) {
        const user = await this._userAppService.getUserById(id);
        const response = new ApiSuccessResponse<typeof user>(201, user);

        return response;
    }

    @httpPost('/', validate(createUserSchema))
    async createUser(@request() req: Request) {
        const userDTO: IUserDTO = req.body;
        const user = await this._userAppService.createUser(userDTO);
        const response = new ApiSuccessResponse<typeof user>(201, user);

        return response;
    }

    @httpPut('/', validate(updateUserSchema))
    async updateUser(@request() req: Request) {
        const userDTO: IUserDTO = req.body;
        const user = await this._userAppService.updateUser(userDTO);
        const response = new ApiSuccessResponse<typeof user>(200, user);

        return response;
    }

    @httpDelete('/:id')
    async deleteUser(@requestParam('id') id: string) {
        await this._userAppService.deleteUser(id);
        const response = new ApiSuccessResponse(200);

        return response;
    }
}
