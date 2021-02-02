import express from 'express';
import {UsersService} from '../services/user.services';
import argon2 from 'argon2'

export class UsersController {
    constructor() {
    }

    async listUsers(req: express.Request, res: express.Response) {
        const usersService = UsersService.getInstance();
        const users = await usersService.list(100, 0);
        res.status(200).send(users);
    }

    async getUserById(req: express.Request, res: express.Response) {
        const usersService = UsersService.getInstance();
        const user = await usersService.readById(req.params.userId);
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response) {
        const usersService = UsersService.getInstance();
        req.body.password = argon2.hash(req.body.password);
        req.body.permissionLevel = 1 + 2 + 4 + 8;
        const userId = await usersService.create(req.body);
        res.status(201).send({_id: userId});
    }

    async patch(req: express.Request, res: express.Response) {
        const usersService = UsersService.getInstance();
        await usersService.patchById(req.body);
        res.status(204).send(``);
    }

    async put(req: express.Request, res: express.Response) {
        const usersService = UsersService.getInstance();
        await usersService.updateById(req.body);
        res.status(204).send(``);
    }

    async removeUser(req: express.Request, res: express.Response) {
        const usersService = UsersService.getInstance();
        await usersService.deleteById(req.params.userId);
        res.status(204).send(``);
    }

}