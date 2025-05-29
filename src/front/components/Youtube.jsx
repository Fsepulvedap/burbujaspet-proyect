
export const Youtube = () => {

    return (
        <div className="container-fluid youtube">
            <div className="row">
                <div className="col-6 video1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Lyt_EABkh5Y?si=Yu0wTktuYeuGJc4T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="col-6 texto1">
                    <h1>
                        ¿Quiénes Somos?
                    </h1>
                    <br/>
                    <p className="mx-auto">
                        BurbujasPet, nació de la pasión por los animales y la necesidad de ofrecer un servicio de baño que esté centrado en el bienestar de las mascotas y la comodidad de sus dueños. Nos dimos cuenta de que muchas personas desean bañar a sus mascotas ellos mismos, pero a menudo se enfrentan a dificultades como la falta de espacio, equipos inadecuados o simplemente la incomodidad de hacerlo en casa.
                    </p>
                </div>
            </div>
        </div>
    );
}; 