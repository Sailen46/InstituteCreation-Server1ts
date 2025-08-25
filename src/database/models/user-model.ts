import {Table, Column, Model, DataType} from "sequelize-typescript"

@Table({
    tableName: "users",
    modelName: "User",
    timestamps: true
})

class User extends Model{
    @Column({
        type: DataType.UUID,
        autoIncrement: true,
        primaryKey: true,
        defaultValue: DataType.UUIDV4
    })
    declare id: string;
    
    @Column({
        type: DataType.STRING,
    })
    declare username: string;

    @Column({
        type: DataType.STRING,
    })
    declare email: string;

    @Column({
        type: DataType.STRING,
    })
    declare password: string;


    @Column({
        type: DataType.ENUM('super-admin', 'admin' , 'institute','teacher', 'student'),
        defaultValue: 'student'
    })
    declare role: string; 

}

export default User

