// Componente Select

export default function Select ({
    label,
    error,
    htmlFor,
    name,
    onChange,
    value,
    options = [],
}){

    return(
        <div>
            {/* Label solo se muestra si es Truthy un uno logico */}
            {label &&(
                <label 
                    htmlFor={htmlFor}
                    className="
                        block 
                        text-caption
                        text-secondary
                    "
                
                >
                    {label}
                </label>
            )}
            <select 
                name={name}
                onChange={onChange} 
                value={value}
                id={htmlFor}
                className="
                    w-80
                    h-10
                    rounded-md
                    border
                    px-4

                    hover
                    hover:border-2
                    hover:border-focus-border

                "
                >
                <option value="">Seleccione una opcion</option>

                {options.map((option)=> (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}

            </select>
            {error && (
                <p className="text-caption text-red-800 place-self-start mt-1">{error}</p>
            )}
        </div>
    )

}