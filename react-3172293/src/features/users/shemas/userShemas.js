import { z } from "zod";
import { fileSchema } from "@/shared";

export const userSchema = z.object({
    userName: z
        .string()
        .min(3,"el nombre debe tener minimo 3 caracteres")
        .max(60, "El  nombre es demaciad largo"),

    userEmail: z
        .email()
        .regex(/^[^\s@]+@[^\s@]+[^\s@]+$/, "Debe ingresear un email valido"),
    
    userPhone: z
        .string()
        .regex(/^[0-9]{10}$/, "El telefono tener 10 digitos"),
    
    userDocumentType: z.string().min(1, "Debe selecionun tipo de documento"),

    userDocumentNumber: z
        .string()
        .min(5, "Numero de documento invalido")
        .max(20, "Numerode documento demaasiado largo"),

    userPassword: z
        .string()
        .min(8, "Contraseña debe tener minimo 8 caracteres")
        .regex(/[A-Z]/, "Debe contener al menos una mayuscula")
        .regex(/[a-z]/, "Debe contener al menos una minuscula")
        .regex(/[^A-Za-z0-9]/, "Debe contener al menos un caracter especial"),

    isStaff:z.boolean(),
    isActive: z.boolean(),
    isSuperUser: z.boolean
}) 
