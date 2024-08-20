import { IEnvironments } from '@setup/interfaces';

export const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'dev';

export const ENVIRONMENTS: IEnvironments = {
    MYSQL: {
        DATABASE: process.env.DB_MYSQL_DATABASE || '',
        PORT: process.env.DB_MYSQL_PORT || '',
        HOST: process.env.DB_MYSQL_HOST || '',
        PASSWORD: process.env.DB_MYSQL_PASSWORD || '',
        USER: process.env.DB_MYSQL_USER || '',
    },
    SECRETJWT: process.env.SECRETJWT || '',
};
