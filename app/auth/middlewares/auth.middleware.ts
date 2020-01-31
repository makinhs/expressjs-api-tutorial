import express from 'express';
import {UsersService} from '../../users/services/user.services';
import {SecurePass} from 'argon2-pass';

export class AuthMiddleware {
    private static instance: AuthMiddleware;

    static getInstance() {
        if (!AuthMiddleware.instance) {
            AuthMiddleware.instance = new AuthMiddleware();
        }
        return AuthMiddleware.instance;
    }

    async validateBodyRequest(req: express.Request, res: express.Response, next: express.NextFunction) {
        if(req.body && req.body.email && req.body.password){
            next();
        }else{
            res.status(400).send({error: 'Missing body fields: email, password'});
        }
    }

    async verifyUserPassword(req: express.Request, res: express.Response, next: express.NextFunction) {
        const userService = UsersService.getInstance();
        const user: any = await userService.getByEmail(req.body.email);
        if (user) {
            let passwordHash = user.password;
            const sp = new SecurePass();
            const passwordBuffer = Buffer.from(passwordHash, 'utf8');
            const requestPassword = Buffer.from(req.body.password, 'utf8');
            const result = await sp.verifyHash(requestPassword, passwordBuffer);
            if (SecurePass.isValid(result)) {
                req.body = {
                    userId: user.id,
                    email: user.email,
                    provider: 'email',
                    permissionLevel: user.permissionLevel,
                };
                return next();
            } else {
                res.status(400).send({errors: `Invalid e-mail and/or password`});
            }
        } else {
            res.status(400).send({errors: `Invalid e-mail and/or password`});
        }
    }
}