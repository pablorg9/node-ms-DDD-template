/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from 'express';
import { ApiErrorResponse, ErrorCode } from '@utils';

export const errorMiddleware = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any,
    _req: Request,
    res: Response,
    _next: NextFunction,
): Response | void => {
    if (error.status && error.status === 401) {
        return new ApiErrorResponse(401, ErrorCode.INVALID_ACCESS_TOKEN, error.message).send(res);
    }
    return new ApiErrorResponse(500, ErrorCode.UNKNOWN, error.message).send(res);
};