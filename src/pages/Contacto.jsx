import { useState } from 'react'
import { CORREO_DESTINO } from '../config.js'

const URL_ENVIO = `https://formsubmit.co/ajax/${CORREO_DESTINO}`

const formularioVacio = { nombre: '', email: '', asunto: '', mensaje: '' }

function Contacto() {
  const [datos, setDatos] = useState(formularioVacio)
  const [estado, setEstado] = useState('')

  const manejarCambio = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }

  const manejarEnvio = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    try {
      const respuesta = await fetch(URL_ENVIO, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nombre: datos.nombre,
          email: datos.email,
          _subject: datos.asunto || 'Nuevo mensaje desde el sitio web',
          mensaje: datos.mensaje,
          _template: 'table',
        }),
      })
      if (!respuesta.ok) throw new Error()
      setEstado('ok')
      setDatos(formularioVacio)
    } catch {
      setEstado('error')
    }
  }

  return (
    <section>
      <h1>Contacto</h1>
      <p className="subtitulo">Completá el formulario y te responderé a la brevedad.</p>

      <div className="contacto">
        <form className="formulario" onSubmit={manejarEnvio}>
          <label>
            Nombre
            <input type="text" name="nombre" value={datos.nombre}
              onChange={manejarCambio} required />
          </label>
          <label>
            Correo electrónico
            <input type="email" name="email" value={datos.email}
              onChange={manejarCambio} required />
          </label>
          <label>
            Asunto
            <input type="text" name="asunto" value={datos.asunto}
              onChange={manejarCambio} />
          </label>
          <label>
            Mensaje
            <textarea name="mensaje" rows="6" value={datos.mensaje}
              onChange={manejarCambio} required />
          </label>

          <button type="submit" disabled={estado === 'enviando'}>
            {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {estado === 'ok' && <p className="mensaje ok">¡Mensaje enviado con éxito!</p>}
          {estado === 'error' && (
            <p className="mensaje error">No se pudo enviar el mensaje. Intentá nuevamente.</p>
          )}
        </form>

        <div className="mapa">
          <iframe
            title="Mapa de ubicación"
            src="https://www.google.com/maps?q=Obelisco,+Buenos+Aires,+Argentina&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contacto
