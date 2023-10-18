import mongoose, { Document, Schema } from 'mongoose';
<<<<<<< HEAD:src/modules/users/domain/entities/Roles.entity.ts
import { IRole } from '../../domain/interfaces/IRoles.interface';
=======
import { IRole } from '../interfaces/IRoles.interface';
>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/domain/entities/Roles.entity.ts

export const roleEntity = ()=>{
    let roleSchema = new Schema<IRole>({
        name: {
            type: String,
            required: true,
            unique: true
        } 
    }, {
        versionKey: false, // Disable the '__v' field
    })
    return mongoose.models.Roles || mongoose.model<IRole>('Roles', roleSchema);
};






