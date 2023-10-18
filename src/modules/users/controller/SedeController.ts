import { Get, Query, Route, Tags, Delete, Post, Put, Body } from "tsoa";
import { ISedeController } from "./interfaces";
<<<<<<< HEAD:src/modules/users/controller/SedeController.ts
import { LogSuccess, LogError, LogWarning } from "../../../utils/logger";
import { deleteSedeByID, getAllSedes, getSedeByID, updateSedeByID, createSede, getClientByName } from "../domain/orm/Sede.orm";
=======
import { LogSuccess, LogError, LogWarning } from "../utils/logger";
import { deleteSedeByID, getAllSedes, getSedeByID, updateSedeByID, createSede } from "../domain/orm/Sede.orm";
>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/controller/SedeController.ts
import { BasicResponse } from "./types";
import { ISede } from "../domain/interfaces/ISede.interface";

@Route("/api/sedes")
@Tags("SedeController")
export class SedeController implements ISedeController {

    @Get("/")
    public async getSedes(page: number, limit: number, @Query() id?: string): Promise<any> {
        let response: any = '';
        if (id) {
            LogSuccess(`[/api/sedes] Get Sede By ID: ${id}`)
            response = await getSedeByID(id);
        } else {
            LogSuccess('[/api/sedes] Get All Sedes Request')
            response = await getAllSedes(page, limit);
        }
        return response;
    }

    @Post("/")
<<<<<<< HEAD:src/modules/users/controller/SedeController.ts
public async createSede(@Body() sedeData: any): Promise<any> {
  try {
    // Extraer el nombre del cliente de los datos de la sede
    const clientName: string = sedeData.id_client;

    // Buscar el cliente por nombre
    const client = await getClientByName(clientName);

    if (!client) {
      return {
        success: false,
        message: "El cliente no se encontró en la base de datos."
      };
    }

    // Asociar el cliente a la sede
    sedeData.id_client = client._id;

    // Crear la sede con las relaciones establecidas
    const response = await createSede(sedeData);

    if (response.success) {
      return {
        success: true,
        message: "Sede created successfully",
        sedeData: response // Devolver la sede recién creada
      };
    } else {
      LogError(`[Controller ERROR]: Creating Sede: ${response.message}`);
      return {
        success: false,
        message: "An error occurred while creating the sede"
      };
    }
  } catch (error) {
    LogError(`[Controller ERROR]: Creating Sede: ${error}`);
    return {
      success: false,
      message: "An error occurred while creating the sede"
    };
  }
}

    

    
    





=======
    public async createSede(@Body() sedeData: ISede): Promise<any> {
        let response: any = '';
        try {
            LogSuccess('[/api/sedes] Create Sede Request')
            response = await createSede(sedeData);
        } catch (error) {
            LogError('[ORM ERROR]: Creating Sede');
            response = {
                message: 'Invalid format/entity'
            }
        }
        return response;
    }

>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/controller/SedeController.ts
    @Delete("/")
    public async deleteSede(@Query() id?: string): Promise<any> {
        let response: any = '';
        if (id) {
            try {
                await deleteSedeByID(id);
                response = {
                    message: `Sede with ID: ${id} deleted successfully`
                };
            } catch (error) {
                response = {
                    message: `Error deleting sede with ID: ${id}`
                };
            }
        } else {
            LogWarning('[/api/sedes] Delete Sede Request WITHOUT ID ');
            response = {
                message: 'Please, provide an ID to remove from DB'
            };
        }
        return response;
    }

    @Put("/")
<<<<<<< HEAD:src/modules/users/controller/SedeController.ts
public async updateSede(@Query() id: string, @Body() sedeData: any): Promise<any> {
    try {
        LogSuccess(`[/api/sedes] Update Sede By ID: ${id}`);

        // Extraer el nombre del cliente de los datos de la sede
        const clientName: string = sedeData.id_client;

        // Buscar el cliente por nombre
        const client = await getClientByName(clientName);

        if (!client) {
            return {
                success: false,
                message: "El cliente no se encontró en la base de datos."
            };
        }

        // Asociar el cliente a la sede
        sedeData.id_client = client._id;

        const response = await updateSedeByID(id, sedeData);

        if (response) {
            return {
                success: true,
                message: `Sede with ID ${id} updated successfully`
            };
        } else {
            LogError(`[Controller ERROR]: Updating Sede: ${id}`);
            return {
                success: false,
                message: `Error updating sede with ID: ${id}`
            };
        }
    } catch (error) {
        LogError(`[Controller ERROR]: Updating Sede: ${error}`);
        return {
            success: false,
            message: "An error occurred while updating the sede"
        };
    }
}

    


}

=======
    public async updateSede(@Query() id: string, @Body() sedeData: ISede): Promise<any> {
        let response: any = '';
        if (id) {
            LogSuccess(`[/api/sedes] Update Sede By ID: ${id}`)
            await updateSedeByID(id, sedeData).then((r) => {
                response = {
                    message: `Sede with ID ${id} updated successfully`
                }
            })
        } else {
            LogWarning('[/api/sedes] Update Sede Request WITHOUT ID')
            response = {
                message: 'Please, provide an Id to update an existing Sede'
            }
        }
        return response;
    }
}

>>>>>>> f407100a3881c8f3855b9832f4b4009ee4e080cb:src/controller/SedeController.ts



