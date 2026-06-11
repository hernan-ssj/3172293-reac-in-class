// Ejemplo de un contador sin usar estados

export default  function   DeleteCounter2(){

    let count = 0;

    const increment = () =>{
        count + 1
        console.log("el nuevo valor es: ", count)
    }
    return(
        <div>
            <p>Contandor:{count}</p>
            <button onClick={increment}className="border p-6 rounded-md bg-yellow-500">
                incrementar</button>
        </div>
    )
}