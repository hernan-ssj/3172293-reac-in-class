import React  from "react";
import clsx from "clsx";

/**
 * IconButton
 * - Área tactil (hit area): tamaño del botón
 * - Área visible: tamaño del icono (controlado por wrapper interno) 
 */

//React.forwardRef"puente para que el padre controle el DOM interno".

export const IconButton =React.forwardRef(function IconButton(
    {
        children,
        onClick,
        disable = false,
        className = "",
        variant = "default",

        //  Tamaños 
        hitSize = 48,
        iconSize = 24,

        // Accesibilidad
        ariaLabel,
        
        // estados 
        isActive = false,

        ...props
    },
    ref
){
    const baseStyles = `
    incline-flex itemns-center justtify-center
    rounded-full
    transition-colors duration-200
    focus:outline-none focus-visible:ring-2 focus:visivle:ring-offset-2
    disable:opacity-50 disable:pointer-events-none
    `;

    const variants = {
        default:`
            text-neutral-700
            hover:bg-neutral-100
            focus-visible:ring-neutral-300
        `,
        ghost:`
        text-neutral-700
        hover:bg-neutral-200
        focus-viible:ring-neutral-400
        `,
        primary:`
        text-white bg-blue-600
        hover :bg-blue-700
        focus-visible:ring-blue-500
        `,
    };
    return (
        <button
            ref={ref}
            type="button"
            aria-label={ariaLabel}
            disabled={disable}
            onClick={onClick}
            className={clsx(baseStyles, variants[variant], className,{"bg-neutral-300": isActive,
            })}
            style={{
                width: `${hitSize}px`,
                height: `${hitSize}px`,
            }}
            {...props}
        >
            <span
            style={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
            }}
            >
                {children}
            </span>
        </button>
    );
});

export  default IconButton