export interface CRUD {
    list: (limit: number, page: number) => any,
    create: (resource: any) => any,
    updateById: (resourceId: any) => any,
    readById: (resourceId: any) => any,
    deleteById: (resourceId: any) => any,
    patchById: (resourceId: any) => any,
}