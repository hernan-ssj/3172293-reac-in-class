export default function Input({
    label,
    error,
    htmlFor,
    type= "text",
    variant = "secondary",
    size = "secondary",
    ...props
}){
    const variants = {
        // Estos valores debe ser con variables
        primary:`
              border border-brand
              bg-yellow-950
        `,
        secondary:`
                border-red-950
                bg-gray-300
        `,
        tertiary:`
                border-green-950
                
        `,
    }
    const sizes = {
        sm:`
            h-8
        `,
        mg:`
            h-10

        `,
        lg:`
            h-12
               
        `,
    }

    return(
        <div className="w-80">
        

            {/* Label */}
            <label 
                htmlFor={htmlFor}
                className={`
                block
                text-caption
                text-secondary
                ${sizes === "sm"? "-mb-2": size === "md"? "mb-0":"mb-1"}
                ${error ? " border-red-800" : "text-caption"}
                `}
                >
                {label}
            </label>

            {/* Contenedor de input */}
            <div
                className="
                    relativo
                    h-12
                    flex
                    items-center
                "
                
            >
                    {/* Área interactiva invisible (48px) */}
                <div
                    // className="
                    //     absolute inset-0
                    // "
                    onMouseDown={(e)=>{
                        e.preventDefault();
                        e.currentTarget.nextSibling.focus();
                    }}
                />
                    
                    {/* Input visual */}
                    <input
                        // htmlFor con kebab-case
                        id={htmlFor}
                        type={type}
                        className={`
                            relative
                            w-full
                            rounded-md
                            border
                            px-4
                            text-body
                            focus:outline-none
                            focus:ring-2
                            focus:ring-ring
                            focus:ring-brand
                            ${variants[variant]}
                            ${sizes[size]}
                            ${error ? " border-red-800" : "border border-border"}

                        `}
                        {...props}
                    />
            </div>
            {/* Feedback */}
            {error && (
                <p className="text-caption text-red-800 place-content-start">{error}</p>
            )}
        </div>
    )
}