import logoFooter from "../assets/img/logoFooter.png"


export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<img 
			src={logoFooter} 
			className="logoFooter" 
			alt="..." 
			style={{					
				width: "141px",
				height: "197px",
				
			}}
		/>
	</footer>
);
