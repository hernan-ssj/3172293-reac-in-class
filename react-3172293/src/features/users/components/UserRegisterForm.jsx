//UserRegisterForm componente para registrar un usuario

import { useState,useEffect } from "react"
import {Input, Select, Checkbox, Button, IconButton} from "@/shared";
import { getDocumentTypes } from "@/services/selectService";
import {useNavigate} from "react-router-dom";
import { userSchema } from "../shemas/userShemas";
// import { Square, SquareCode } from "lucide";

export default function UserRegisterForm (){
    
    // estado

    //navegacio
    const Navigate = useNavigate();

    //estadodel error
    const [ errors, setErrors] = useState({})

    //estado del formulario
    const[FormData, setFormData]=useState({
        userName : "",
        userEmail: "",
        userPhone: "",
        userDocumentTypes: "",
        userDocumentNumber: "",
        userPassword: "",
        

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = userSchema.safeParse(FormData);

        if(!result.success){
            const fieldErrors = {};

            result.error.issues.forEach((issue) => {

                fieldErrors[issue.path[0]] = issue.message;
            });

            setErrors(fieldErrors);
            // Cortamos la ejecucion: NO se envia nada al backend
            return;
        }

        // Si la validacion pasa, limpiaamos errores previos
        setErrors({});

        // Activamos estado de envio (útil para deshabilitar el boton)
        // setIsSubmitting(true);

        try {
            // LLamamos al s
            // 
            // const response = await createStaticRouter(result.data);

            // console.log("usuario creado", response)
            // 
            alert("Usuario creado correctamente")
            //navigate(-1) equivale a"volver a atras"
            // navigate(-1);
        } catch (error) {
            // Capturamos errore de red o errores lanzados por el service
            console.error("Error", error.message);

            // mostramos el mensage del error al usuario
            alert(error.message)
        } finally {
            // Pase lo que pase, desactivamos el estado de envio
            // setIsSubmitting(false);
        }
    }

    // Handele NameChange
    // const handleNameChange = (e) =>{
    //     const value = e.target.value.trim();

    //     if (value === "") {
    //         console.log("el nombre puede no estar vacio ")
    //     }
    // }

    const [documentTypes, setDocumentTypes] = useState([])


    useEffect(()=>{
        getDocumentTypes().then(setDocumentTypes)
    },[])

    return (
        <div className="grid items-center justify-center">
            <h1 className="mx-auto my-10  text-title font-heading font-bold">
                Registro de usuario
            </h1>
            {/* Formulario */}
            <form 
                action=""
                onSubmit={handleSubmit}
            >

              <Input
                  label="Nombre"
                  name="userName"
                  type="text"
                  value={FormData.userName}
                  placeholder="Escribe tu nombre"
                  htmlFor="user-name"
                  onChange={handleChange}
                  error={errors.userName}
                  
                />
              <Input
                  label="Correo"
                  name="userEmail"
                  type="email"
                  value={FormData.userEmail}
                  placeholder="Escribe tu Correo Electrónico"
                  htmlFor="user-email"
                  onChange={handleChange}
                  error={errors.userEmail}
                  
                />
              <Input
                  label="Teléfono"
                  name="userPhone"
                  type="tel"
                  value={FormData.userPhone}
                  placeholder="Escribe tu Numero de telefono"
                  htmlFor="user-phone"
                  onChange={handleChange}
                  error={errors.userPhone}
                  
                /> 
                <Select
                label="tipos de documento"
                name="userDocumentTypes"
                value={FormData.userDocumentTypes}
                htmlFor="userDocumenTypes"
                options={documentTypes}
                onChange={handleChange}
                error={errors.userDocumentTypes}
                />
                 <Input
                  label="Documento"
                  name="userDocumentNumber"
                  type="text"
                  value={FormData.userDocumentNumber}
                  placeholder="Escribe tu número de documento"
                  htmlFor="user-document-number"
                  onChange={handleChange}
                  error={errors.userDocumentNumber}
                />
                
                 <Input
                  label="Contraseña"
                  name="userPassword"
                  type="password"
                  value={FormData.userPassword}
                  placeholder="Escribe tu número de documento"
                  htmlFor="user-password"
                  onChange={handleChange}
                  error={errors.userPassword}
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
                    checked={FormData.isActive}
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
                    <IconButton>
                        variant="primary"
                        onClick= {() => Navigate(-1)}
                        {/* <SquareCode/> */}
                    </IconButton>
                </div>
                </form>
              
        </div>
        
        
    )
}