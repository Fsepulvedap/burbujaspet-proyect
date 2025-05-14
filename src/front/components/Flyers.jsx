import TOP_SALE from "../assets/img/TOP_SALE.png"
import DESCUENTO from "../assets/img/DESCUENTO.png"


export const Flyers = () => {

    return (
        <div className="container flyers">
            <img 
                src={TOP_SALE} 
                className="topSale" 
                alt="..." 
                style={{					
					width: "600px",
					height: "400px",
			    }}
            />
            <img 
                src={DESCUENTO} 
                className="descuento" 
                alt="..." 
                style={{					
					width: "600px",
					height: "400px",
				}}
            /> 
        </div>
    );
}; 