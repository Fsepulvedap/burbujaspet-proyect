import autoBañado from "../assets/img/autoBañado.png"
import productos from "../assets/img/productos.png"
import secado from "../assets/img/secado.png"
import accesorios from "../assets/img/accesorios.png"


export const Menu = () => {

    return (
        <div className="container menu1">
            <img 
                src={autoBañado} 
                className="autoBañado" 
                alt="..." 
                style={{					
                    width: "286px",
                    height: "325px",
                }}
            />
            <img 
                src={productos} 
                className="accesorios" 
                alt="..." 
                style={{					
                    width: "286px",
                    height: "325px",
                }}
            /> 
            <img 
                src={secado} 
                className="secado" 
                alt="..." 
                style={{					
                    width: "286px",
                    height: "325px",
                }}
            />
            <img 
                src={accesorios} 
                className="autoBañado" 
                alt="..." 
                style={{					
                    width: "286px",
                    height: "325px",
                }}
            />
        </div>
    );
}; 