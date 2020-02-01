export class CommonPermissionMiddleware {

    public static MAX_PERMISSION = 4096 * 2;
    public static BASIC_PERMISSION = 1;

    constructor() {

    }

    minimumPermissionLevelRequired(requiredPermissionLevel: any) {
        return (req: any, res: any, next: any) => {
            try {
                let userPermissionLevel = parseInt(req.jwt.permissionLevel);
                if (userPermissionLevel & Number.parseInt(requiredPermissionLevel)) {
                    next();
                } else {
                    res.status(403).send({});
                }
            } catch (e) {
                console.log(e);
            }

        };
    };

    async onlySameUserOrAdminCanDoThisAction(req: any, res: any, next: any) {
        let userPermissionLevel = parseInt(req.jwt.permissionLevel);
        let userId = req.jwt.userId;
        if (req.params && req.params.userId && userId === req.params.userId) {
            return next();
        } else {
            if (userPermissionLevel & CommonPermissionMiddleware.MAX_PERMISSION) {
                return next();
            } else {
                return res.status(403).send({});
            }
        }
    };

    async onlyAdminCanDoThisAction(req: any, res: any, next: any) {
        let userPermissionLevel = parseInt(req.jwt.permissionLevel);
        if (userPermissionLevel & CommonPermissionMiddleware.MAX_PERMISSION) {
            return next();
        } else {
            return res.status(403).send({});
        }
    };

}
