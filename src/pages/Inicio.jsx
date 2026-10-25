import { useEffect, useState } from 'react'

// API pública utilizada: The Rick and Morty API (no requiere clave)
// Documentación: https://rickandmortyapi.com/documentation
const URL_API = 'https://rickandmortyapi.com/api/character'

function Inicio() {
  const [personajes, setPersonajes] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(URL_API)
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('No se pudieron obtener los datos')
        return respuesta.json()
      })
      .then((datos) => {
        setPersonajes(datos.results)
        setCargando(false)
      })
      .catch((err) => {
        setError(err.message)
        setCargando(false)
      })
  }, [])

  return (
    <section>
      <h1>Personajes de Rick and Morty</h1>
      <p className="subtitulo">
        Datos obtenidos en tiempo real desde una API pública (rickandmortyapi.com).
      </p>

      {cargando && <p className="mensaje">Cargando personajes...</p>}
      {error && <p className="mensaje error">Error: {error}</p>}

      <div className="grilla">
        {personajes.map((personaje) => (
          <article className="tarjeta" key={personaje.id}>
            <img src={personaje.image} alt={personaje.name} />
            <div className="tarjeta-cuerpo">
              <h3>{personaje.name}</h3>
              <p>
                <span className={`estado estado-${personaje.status.toLowerCase()}`}></span>
                {personaje.status} — {personaje.species}
              </p>
              <p><strong>Género:</strong> {personaje.gender}</p>
              <p><strong>Origen:</strong> {personaje.origin.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Inicio
