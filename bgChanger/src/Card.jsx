import { useState } from "react"
function Card(){
    function addColor(newColor){
        document.body.style.backgroundColor = newColor;
        
    }
    return (
        <>

        <div className="flex justify-center gap-4.5 fixed inset-x-0 bottom-2">
        <button className="border-2 border-yellow-400 rounded-full w-20 p-2 text-center" onClick={ ()=> addColor("Yellow")}> Yellow
        </button> 
        <button className="border-2 border-red-400 rounded-full w-20 p-2 text-center" onClick={ ()=> addColor("Red")}>
            Red
        </button>

        <button className="border-2 border-green-400 rounded-full w-20 p-2 text-center">
            Green
        </button>

        <button className="border-2 border-blue-400 rounded-full w-20 p-2 text-center">
            Blue
        </button>

        <button className="border-2 border-white rounded-full w-20 p-2 text-center">
            White
        </button>

        <button className="border-2 border-black rounded-full w-20 p-2 text-center">
            Black
        </button>
        </div>

        </>
    )
}

export default Card