export class GenericInMemoryDao {
    private static instance: GenericInMemoryDao;
    users: any = [];

    constructor() {
        console.log('Created new instance of GenericInMemoryDao');
    }

    static getInstance(): GenericInMemoryDao {
        if (!GenericInMemoryDao.instance) {
            GenericInMemoryDao.instance = new GenericInMemoryDao();
        }
        return GenericInMemoryDao.instance;
    }

    addUser(user: any) {
        return this.users.push(user);
    }

    getUsers() {
        return this.users;
    }

    getUserById(userId: string) {
        return this.users.find((user: { id: string; }) => user.id === userId);
    }

    putUserById(user: any) {
        const objIndex = this.users.findIndex((obj: { id: any; }) => obj.id === user.id);
        const updatedUsers = [
            ...this.users.slice(0, objIndex),
            user,
            ...this.users.slice(objIndex + 1),
        ];
        this.users = updatedUsers;
        return `${user.id} updated via put`;
    }

    patchUserById(user: any) {
        const objIndex = this.users.findIndex((obj: { id: any; }) => obj.id === user.id);
        let currentUser = this.users[objIndex];
        for (let i in user) {
            if (i !== 'id') {
                currentUser[i] = user[i];
            }
        }
        this.users = [
            ...this.users.slice(0, objIndex),
            currentUser,
            ...this.users.slice(objIndex + 1),
        ];
        return `${user.id} patched`;
    }


    removeUserById(userId: string) {
        const objIndex = this.users.findIndex((obj: { id: any; }) => obj.id === userId);
        this.users = this.users.splice(objIndex, 1);
        return `${userId} removed`;
    }

}
