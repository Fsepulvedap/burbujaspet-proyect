
import LOGO_01 from "./LOGO_01.png"
import BT_LUPA from "./BT_LUPA.png"
import BT_CARRITO from "./BT_CARRITO.png"
import BT_USUARIO from "./BT_USUARIO.png"

export const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg bg-transparent m-3 position-fixed w-100 top-0">
			<div className="container-fluid">
				<div>
					<a className="navbar-brand" href="/">
						<img
							src={LOGO_01}
							alt="Our Logo"
							style={{
								width: "235px",
								height: "97px",
							}}
						/>
					</a>
				</div>
				<div className="collapse navbar-collapse d-flex justify-content-center menu" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item mx-3">
							<a className="nav-link" aria-current="page" href="/">INICIO</a>
						</li>
						<li className="nav-item mx-3">
							<a className="nav-link" href="/demo">SERVICIOS</a>
						</li>
						<li className="nav-item mx-3">
							<a className="nav-link" href="/single">ACCESORIOS</a>
						</li>
						<li className="nav-item mx-3">
							<a className="nav-link" href="#">CITAS</a>
						</li>
						<li className="nav-item mx-3">
							<a className="nav-link" href="#">OTROS</a>
						</li>
						<li className="nav-item mx-3">
							<a className="nav-link" href="#">BLOG</a>
						</li>
					</ul>
				</div>
				<div className="me-5">
					<a className="navbar-brand" href="/">
						<img
							src={BT_LUPA}
							alt="Our Logo"
							style={{
								width: "38px",
								height: "51px",
							}}
						/>
					</a>
					<a className="navbar-brand" href="/">
						<img
							src={BT_CARRITO}
							alt="Our Logo"
							style={{
								width: "38px",
								height: "38px",
							}}
						/>
					</a>				
					<a className="navbar-brand" href="/">
						<img
							src={BT_USUARIO}
							alt="Our Logo"
							style={{
								width: "38px",
								height: "38px",
							}}
						/>
					</a>
				</div>
			</div>
		</nav>
	);
};