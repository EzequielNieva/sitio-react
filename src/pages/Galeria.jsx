import fotos from '../data/fotos.js'

function Galeria() {
  return (
    <section>
      <h1>Galería de fotografías</h1>
      <p className="subtitulo">
        Datos obtenidos de un array de objetos guardado localmente en el proyecto.
      </p>

      <div className="grilla">
        {fotos.map((foto) => (
          <article className="tarjeta" key={foto.id}>
            <img src={foto.imagen} alt={foto.titulo} />
            <div className="tarjeta-cuerpo">
              <span className="etiqueta">{foto.categoria}</span>
              <h3>{foto.titulo}</h3>
              <p>{foto.descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Galeria
