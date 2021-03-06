import mongoose from 'mongoose';

const { Schema, model} = mongoose;

//definir el esquema:
const objectivesSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
    },
    tipo: {
        type: String, 
        enum: ["GENERAL", "ESPECIFICO"],
        required: true,
    },
});

// se define el modelo:
const ObjectiveModel = model("Objective", objectivesSchema, "Objectives");

export { ObjectiveModel } ;