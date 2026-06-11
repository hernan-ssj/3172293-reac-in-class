//UserRegisterForm componente para registrar un usuario

import { useState,useEffect } from "react"
import {Input, Select, Checkbox, Button} from "@/shared";
import { getDocumentTypes } from "@/services/selectService";

export default function UserRegisterForm (){

    //estado del formulario
    const[FormData, setFormData]=useState({
        userName : "",
        userEmail: "",
        userPhone: "",
        userdocumentType: "",
        userDocumentNumber: "",
        userPassword: "",
        userImage: [],

        isStaff:false,
        isActive: true,
        isSuperUser: false

    })
        // handle generico
    const handleChange = (e) => {
        const{name, value, type, checked} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const result = userSchema.safeParse(FormData);

    //     if(!result.success){
    //         const fieldErrors = {};

    //         result.error.issues.forEach((issue) => {

    //             fieldErrors[issue.path[0]] = issue.message;
    //         });

    //         setErrors(fieldErrors);
    //         // Cortamos la ejecucion: NO se envia nada al backend
    //         return;
    //     }

    //     // Si la validacion pasa, limpiaamos errores previos
    //     setErrors({});

    //     // Activamos estado de envio (útil para deshabilitar el boton)
    //     setIsSubmitting(true);

    //     try {
    //         // LLamamos al s
    //         // 
    //         const response = await createStaticRouter(result.data);

    //         // 
    //         alert("Usuario creado correctamente")
    //         //navigate(-1) equivale a"volver a atras"
    //         navigate(-1);
    //     } catch (error) {
    //         // Capturamos errore de red o errores lanzados por el service
    //         console.error("Errror", error.message);

    //         // mostramos el mensage del error al usuario
    //         alert(error.message)
    //     } finally {
    //         // Pase lo que pase, desactivamos el estado de envio
    //         setIsSubmitting(false);
    //     }
    // }

    // Handele NameChange
    const handleNameChange = (e) =>{
        const value = e.target.value.trim();

        if (value === "") {
            console.log("el nombre puede no estar vacio ")
        }
    }

    const [documentTypes, setDocumentTypes] = useState([])


    useEffect(()=>{
        getDocumentTypes().then(setDocumentTypes)
    },[])

    return (
        <div className="grid items-center justify-center">
            <h1 className="mx-auto my-10  text-title font-heading font-bold ">Registro de usuario</h1>
            {/* Formulario */}
            <form action="">
              <Input
                  label="Nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  htmlFor="user-name"
                  onChange={handleNameChange}
                  
                />
              <Input
                  label="Correo"
                  type="email"
                  placeholder="Escribe tu Correo Electrónico"
                  htmlFor="user-email"
                  
                />
              <Input
                  label="Teléfono"
                  type="tel"
                  placeholder="Escribe tu Numero de telefono"
                  htmlFor="user-phone"
                  
                /> 
                <Select
                label="tipos de documento"
                name="userDocumentypes"
                htmlFor="userDocumenTypes"
                options={documentTypes}
                />
                 <Input
                  label="Documento"
                  type="text"
                  placeholder="Escribe tu número de documento"
                  htmlFor="user-document-number"
                />
                 <Input
                  label="Contraseña"
                  type="password"
                  placeholder="Escribe tu número de documento"
                  htmlFor="user-password"
                />
                {/* Checkbox */}
                <div className="grid gap-4 my-2"> 
                <Checkbox
                    id="isSuperUser"
                    name="isSuperUser"
                    label="Es super usuario"
                    checked={FormData.isSuperUser}
                    onChange={handleChange}
                />
                <Checkbox
                    id="isStaff"
                    name="isStaff"
                    label="Es staff"
                    checked={FormData.isStaff}
                    onChange={handleChange}
                />
                <Checkbox
                    id="isActive"
                    name="isAvtive"
                    label="Esta Activo"
                    checked={FormData.isactivo}
                    onChange={handleChange}
                />

                </div>
              
                
                 {/* Actions */}
                <div className="flex gap-6  items-center ">
                    <Button
                        variant="secondary"                  
                        size="sm"
                        type="submit"
                        onClick={() => console.log ("se oprimio el subit")}
                        >Cancelar
                    </Button>
                    <Button
                        variant="primary"                  
                        size="md"
                        type="submit"
                        onClick={() => console.log ("se oprimio el subit")}
                        >Guardar
                    </Button>
                 
                </div>
                </form>
              
        </div>
        
        
    )
}