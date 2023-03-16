import { useState,useEffect } from "react";

const useWindowSize = () =>{
    const [windowSize, setWindowSize] = useState({
        width:undefined,
        height:undefined
    });

    useEffect(()=>{
        const handleResize = () =>{
            setWindowSize({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        handleResize();

        window.addEventListener("resize",handleResize);

        /*
        const clearUp = () =>{
            //console.log('run if a useEffect dep changes');
            window.removeEventListener("resize",handleResize);
        }
        return clearUp;
        */
        return () => window.removeEventListener("resize",handleResize);
    },[]);
    return windowSize;
}

export default useWindowSize;