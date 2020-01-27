import {CommonRoutesConfig, configureRoutes} from '../common/common.routes.config';
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig implements configureRoutes{
    constructor(app: express.Application) {
        super(app, 'UsersRoute');
        this.configureRoutes();
    }

    configureRoutes() {
        this.app.get(`/users`, (req: express.Request, res: express.Response) => {
            res.status(200).send(`List of users`);
        });

        this.app.post(`/users`, (req: express.Request, res: express.Response) => {
            res.status(200).send(`Post to users`);
        });

        this.app.put(`/users/:userId`, (req: express.Request, res: express.Response) => {
            res.status(200).send(`Put to ${req.params.userId}`);
        });

        this.app.patch(`/users/:userId`, (req: express.Request, res: express.Response) => {
            res.status(200).send(`Patch to ${req.params.userId}`);
        });

        this.app.delete(`/users/:userId`, (req: express.Request, res: express.Response) => {
            res.status(200).send(`Delete to ${req.params.userId}`);
        });
        this.app.get(`/users/:userId`, (req: express.Request, res: express.Response) => {
            res.status(200).send(`Get to ${req.params.userId}`);
        });
    }


}