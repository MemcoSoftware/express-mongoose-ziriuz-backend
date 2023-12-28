export interface ICampos_TiposController {
    getCamposTipos(page: number, limit: number, id?: string): Promise<any>;
    deleteCamposTipos(id?: string): Promise<any>;
    updateCamposTipos(id: string, camposTiposData: any): Promise<any>;
    createCamposTipos(camposTiposData: any): Promise<any>;
}