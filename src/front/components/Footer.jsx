import logoFooter from "../assets/img/logoFooter.png"


export const Footer = () => (
	<footer className="footer py-3 text-center">
		<div className="row footerTop">
			<div className="col-2 footerLogo">
				<img
					src={logoFooter}
					className="logoFooter"
					alt="..."
					style={{
						width: "141px",
						height: "197px",

					}}
				/>
			</div>
			<div className="col-10 footerInfo">
				<div className="row">
					<div className="col-4 text-light ayuda">
						<h5>TE AYUDAMOS</h5>
						<p>Devoluciones y cambios</p>
						<p>Revisar pedidos</p>
					</div>
					<div className="col-4 text-light contacto">
						<h5>CONTACTO</h5>
						<p>Contacto</p>
						<p>Teléfono</p>
						<p>Dirección</p>
					</div>
					<div className="col-4 text-light info">
						<h5>INFORMACIÓN</h5>
						<p>Envíos</p>
						<p>Métodos de pago</p>						
					</div>
				</div>
			</div>
		</div>
	</footer>
);
