import mongoose, { Schema, Document } from "mongoose";
import { IEquipo } from "../../domain/interfaces/IEquipo.interface";

export const equipoEntity = () => {
  const equipoSchema = new mongoose.Schema<IEquipo>(
    
    {
      id_sede: {
        type: Schema.Types.ObjectId,
        ref: "Sedes", 
        required: false,
      },
      modelo_equipos: {
        type: Schema.Types.ObjectId,
        ref: "Modelo_Equipos",
        required: true,
      },
      id_area: {
        type: Schema.Types.ObjectId,
        ref: "Areas_Equipos",
        required: true,
      },
      id_tipo: {
        type: Schema.Types.ObjectId,
        ref: "Tipos_Equipos",
        required: true,
      },
      serie: { type: String, required: true },
      ubicacion: { type: String, required: true },
      frecuencia: { type: Number, required: true },
    },
    { versionKey: false, toJSON: { virtuals: true } }
  );

  // Define relaciones virtuales
  equipoSchema.virtual("modeloEquipo", {
    ref: "Modelo_Equipos",
    localField: "modelo_equipos",
    foreignField: "_id",
  });

  equipoSchema.virtual("areaEquipo", {
    ref: "Areas_Equipos",
    localField: "id_area",
    foreignField: "_id",
  });

  equipoSchema.virtual("tipoEquipo", {
    ref: "Tipos_Equipos",
    localField: "id_tipo",
    foreignField: "_id",
  });
  equipoSchema.virtual("sedeEquipo", {
    ref: "Sedes",
    localField: "id_sede",
    foreignField: "_id",
  });

  return mongoose.models.Equipos || mongoose.model<IEquipo>("Equipos", equipoSchema);
};
