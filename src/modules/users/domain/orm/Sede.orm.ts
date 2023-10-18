import mongoose from "mongoose";
import { sedeEntity } from "../entities/Sede.entity";
<<<<<<< HEAD:src/modules/users/domain/orm/Sede.orm.ts
import { LogError, LogSuccess, LogWarning } from "../../../../utils/logger";
import { ISede } from "../interfaces/ISede.interface";
import { clientEntity } from "../entities/Client.entity";
=======
import { LogError, LogSuccess, LogWarning } from "../../utils/logger";
import { ISede } from "../interfaces/ISede.interface";
>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/domain/orm/Sede.orm.ts

export const getAllSedes = async (page: number, limit: number): Promise<any[] | undefined> => {
    try {
        let sedeModel = sedeEntity();
<<<<<<< HEAD:src/modules/users/domain/orm/Sede.orm.ts
        let clientModel = clientEntity();
=======

>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/domain/orm/Sede.orm.ts
        let response: any = {};

        await sedeModel
            .find({}, { _id: 0 })
            .limit(limit)
            .skip((page - 1) * limit)
<<<<<<< HEAD:src/modules/users/domain/orm/Sede.orm.ts
            .select('_id sede_nombre sede_address sede_telefono sede_email id_client') // Agrega el campo id_client para la referencia
            .populate({
                path: 'id_client', // Nombre del campo de referencia en el modelo
                model: clientModel, // Modelo de referencia
                select: 'client_name client_nit client_address client_telefono client_email', // Campos que deseas seleccionar
            })
            .exec()
            .then((sedes: any[]) => {
=======
            .select('_id sede_nombre sede_address sede_telefono sede_email')
            .exec()
            .then((sedes: ISede[]) => {
>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/domain/orm/Sede.orm.ts
                response.sedes = sedes;
            });

        await sedeModel.countDocuments().then((total: number) => {
            response.totalPages = Math.ceil(total / limit);
            response.currentPage = page;
        });

        return response;
    } catch (error) {
        LogError(`[ORM ERROR]: Getting All Sedes: ${error}`);
    }
};

export const getSedeByID = async (id: string): Promise<any | undefined> => {
    try {
        let sedeModel = sedeEntity();
<<<<<<< HEAD:src/modules/users/domain/orm/Sede.orm.ts
        let clientModel = clientEntity();

        return await sedeModel.findById(id)
            .select('_id sede_nombre sede_address sede_telefono sede_email id_client') // Agrega el campo id_client para la referencia
            .populate({
                path: 'id_client', // Nombre del campo de referencia en el modelo
                model: clientModel, // Modelo de referencia
                select: 'client_name client_nit client_address client_telefono client_email', // Campos que deseas seleccionar
            })
=======

        return await sedeModel.findById(id)
            .select('_id sede_nombre sede_address sede_telefono sede_email')
>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/domain/orm/Sede.orm.ts
            .exec();
    } catch (error) {
        LogError(`[ORM ERROR]: Getting Sede By ID: ${error}`);
    }
};

<<<<<<< HEAD:src/modules/users/domain/orm/Sede.orm.ts
=======
export const createSede = async (sedeData: ISede): Promise<any | undefined> => {
    try {
        let sedeModel = sedeEntity();

        return await sedeModel.create(sedeData);
    } catch (error) {
        LogError('[ORM ERROR]: Creating Sede');
    }
};
>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/domain/orm/Sede.orm.ts

export const deleteSedeByID = async (id: string): Promise<any | undefined> => {
    try {
        let sedeModel = sedeEntity();
<<<<<<< HEAD:src/modules/users/domain/orm/Sede.orm.ts
        
=======

>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/domain/orm/Sede.orm.ts
        return await sedeModel.deleteOne({ _id: id });
    } catch (error) {
        LogError('[ORM ERROR]: Deleting Sede By ID');
    }
};

export const updateSedeByID = async (id: string, sedeData: ISede): Promise<any | undefined> => {
    try {
        let sedeModel = sedeEntity();
<<<<<<< HEAD:src/modules/users/domain/orm/Sede.orm.ts
        
=======

>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/domain/orm/Sede.orm.ts
        return await sedeModel.findByIdAndUpdate(id, sedeData);
    } catch (error) {
        LogError(`[ORM ERROR]: Updating Sede ${id}: ${error}`);
    }
};
<<<<<<< HEAD:src/modules/users/domain/orm/Sede.orm.ts

export const createSede = async (sedeData: ISede): Promise<any | undefined> => {
    try {
        let sedeModel = sedeEntity();
        const createdSede = await sedeModel.create(sedeData);

        if (createdSede) {
            return {
                success: true,
                message: "Sede created successfully",
                sedeData: createdSede // Devolver la sede recién creada
            };
        } else {
            return {
                success: false,
                message: "An error occurred while creating the sede"
            };
        }
    } catch (error) {
        LogError(`[ORM ERROR]: Creating Sede: ${error}`);
        return {
            success: false,
            message: "An error occurred while creating the sede"
        };
    }
};


// * THIS PART BELOW COMPLEMENTS CREATESEDE FUNCTION

export const getClientByName = async (name: string): Promise<any | null> => {
    try {
      const clientModel = clientEntity();
  
      // Buscar el cliente por nombre
      const client = await clientModel.findOne({ client_name: name });
  
      return client;
    } catch (error) {
      LogError(`[ORM ERROR]: Getting Client by Name: ${error}`);
      return null;
    }
  }
  
=======
>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/domain/orm/Sede.orm.ts
