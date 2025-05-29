import logoFooter from "../assets/img/logoFooter.png"
import igFooter from "../assets/img/igFooter.png"
import wpFooter from "../assets/img/wpFooter.png"
import faceFooter from "../assets/img/faceFooter.png"


export const Footer = () => (
	<footer className="footer py-3 text-center">
		<div className="row footerTop">
			<div className="col-2 footerLogo mb-3">
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
				<div className="row justify-content-center">
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
		<div className="row justify-content-center footerBottom">
			<div className="col-2 d-flex align-items-end imgFooterBottom">
				<img
					src={igFooter}
					className="igFooter"
					alt="..."
					style={{
						width: "43.5px",
						height: "43.5px",

					}}
				/>
				<img
					src={faceFooter}
					className="faceFooter mx-3 mb-2"
					alt="..."
					style={{
						width: "28px",
						height: "28px",

					}}
				/>
				<img
					src={wpFooter}
					className="wpFooter"
					alt="..."
					style={{
						width: "43.5px",
						height: "43.5px",

					}}
				/>
			</div>
		</div>
	</footer>
);
