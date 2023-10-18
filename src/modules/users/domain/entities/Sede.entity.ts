import mongoose, { Schema, Document } from "mongoose";
<<<<<<< HEAD:src/modules/users/domain/entities/Sede.entity.ts
import { ISede } from "../../domain/interfaces/ISede.interface";
=======
import { ISede } from "../interfaces/ISede.interface";
>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/domain/entities/Sede.entity.ts

export const sedeEntity = () => {
    let sedeSchema = new mongoose.Schema<ISede>(
        {
            sede_nombre: { type: String, required: true },
            sede_address: { type: String, required: true },
            sede_telefono: { type: String, required: true },
            sede_email: { type: String, required: true },
<<<<<<< HEAD:src/modules/users/domain/entities/Sede.entity.ts
            id_client: { type: Schema.Types.ObjectId, ref: "Clients", required: false }, // Agrega la relación con la entidad Clients
=======
            
>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/domain/entities/Sede.entity.ts
        },
        { versionKey: false }
    );

    return mongoose.models.Sedes || mongoose.model<ISede>('Sedes', sedeSchema);
}
<<<<<<< HEAD:src/modules/users/domain/entities/Sede.entity.ts

=======
>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/domain/entities/Sede.entity.ts
