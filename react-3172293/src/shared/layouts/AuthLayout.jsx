import { useState, useEffect } from "react";


import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-1.png";
import {
  Input,
  Button, 
  DeleteCounter2,
  Select,
  Checkbox
} from '@/shared';
import { getDocumentTypes } from "../../services/selectService";


export default function AuthLayout() {

  // Estado para los tipos de documento
  const[documentTypes, setDocumentTypes] = useState([])

  // uso del estado useEffect
  useEffect(()=>{
    getDocumentTypes().then(setDocumentTypes);
  },[])
    return (
        
        <>

          <div
            className="min-h-screen w-full"
            style={{
                backgroundImage: `url(${authBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
          >
            <main className="mx-auto">
                <Input
                  label="Nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  htmlFor="user-name"
                  variant="primary"
                  size="sm"
                />
                <Input
                  label="Correo"
                  type="email"
                  placeholder="Escribe tu correo"
                  htmlFor="user-email"
                  variant="secondary"
                />
                <Input
                  label="Telefono"
                  type="tel"
                  placeholder="Escribe tu numero de telefono"
                  htmlFor="user-phone"
                />
               <Input
                  label="Borrar tipo de documento "
                  type="text"
                  placeholder="Escribe tu nombre"
                  htmlFor="user-document-numbe"
                />
                <Input
                  label="Documento"
                  type="text"
                  placeholder="Escribe tu número de documento"
                  htmlFor="user-document-number"
                />
                {/* Actions */}
                <div className="flex gap-6  items-center ">
                  <Button
                    variant="primary"                  
                    size="sm"
                    type="submit"
                    onClick={() => console.log ("se oprimio el subit")}
                  >Guardar
                  </Button>
                  <Button
                    variant="secondary"                  
                    size="md"
                    type="submit"
                    onClick={() => console.log ("se oprimio el subit")}
                  >Cancelar
                  </Button>
                  <div>
                    <h1>ejemplo1</h1>
                    <DeleteCounter2/>
                  </div>
                  {/* {implementacion de useEfect} */}
                  {/* <div className="mt-12">
                    <h1>este es mi useEfect</h1>
                    <EffectDemo/>
                  </div> */}
                </div>
                {/* <h1>Hola Gente</h1>
                <CounterEffect/> */}

                <Select
                label="tipos de documento"
                name="userDocumentypes"
                htmlFor="userDocumenTypes"
                options={documentTypes}
                />
                <Checkbox
                />
              <Outlet/>
            </main>

          </div>
        </>
    );
}