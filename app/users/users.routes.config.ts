import {CommonRoutesConfig, configureRoutes} from '../common/common.routes.config';
import {UsersController} from './controllers/users.controller';
import {UsersMiddleware} from './middlewares/users.middleware';
import {CommonPermissionMiddleware} from '../common/middlewares/common.permission.middleware';
import {JwtMiddleware} from '../auth/middlewares/jwt.middleware';

import express from 'express';

export class UsersRoutes extends CommonRoutesConfig implements configureRoutes {
    constructor(app: express.Application) {
        super(app, 'UsersRoute');
        this.configureRoutes();
    }

    configureRoutes() {
        const usersController = new UsersController();
        const usersMiddleware = UsersMiddleware.getInstance();
        const jwtMiddleware = JwtMiddleware.getInstance();
        const commonPermissionMiddleware = new CommonPermissionMiddleware();
        this.app.get(`/users`, [
            jwtMiddleware.validJWTNeeded,
            commonPermissionMiddleware.onlyAdminCanDoThisAction,
            usersController.listUsers
        ]);

        this.app.post(`/users`, [
            usersMiddleware.validateRequiredCreateUserBodyFields,
            usersMiddleware.validateSameEmailDoesntExist,
            usersController.createUser
        ]);

        this.app.put(`/users/:userId`, [
            jwtMiddleware.validJWTNeeded,
            commonPermissionMiddleware.minimumPermissionLevelRequired(CommonPermissionMiddleware.BASIC_PERMISSION),
            commonPermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            usersController.put
        ]);

        this.app.patch(`/users/:userId`, [
            jwtMiddleware.validJWTNeeded,
            commonPermissionMiddleware.minimumPermissionLevelRequired(CommonPermissionMiddleware.BASIC_PERMISSION),
            commonPermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            usersController.patch
        ]);

        this.app.delete(`/users/:userId`, [
            jwtMiddleware.validJWTNeeded,
            commonPermissionMiddleware.minimumPermissionLevelRequired(CommonPermissionMiddleware.BASIC_PERMISSION),
            commonPermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            usersController.removeUser
        ]);
        this.app.get(`/users/:userId`, [
            jwtMiddleware.validJWTNeeded,
            commonPermissionMiddleware.minimumPermissionLevelRequired(CommonPermissionMiddleware.BASIC_PERMISSION),
            commonPermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
            usersMiddleware.validateUserExists,
            usersMiddleware.extractUserId,
            usersController.getUserById
        ]);
    }


}