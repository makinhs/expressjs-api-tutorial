export interface CRUD {
    list: (limit: number, page: number) => any,
    create: (resource: any) => string,
    updateById: (resourceId: any) => string,
    readById: (resourceId: any) => any,
    deleteById: (resourceId: any) => string,
    patchById: (resourceId: any) => string,
}