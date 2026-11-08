function validarIncidencia(incidencia) {
  return Boolean(
    incidencia &&
    typeof incidencia.codigo === 'string' && incidencia.codigo.trim() &&
    typeof incidencia.descripcion === 'string' && incidencia.descripcion.trim() &&
    ['urgente', 'media', 'baja'].includes(incidencia.prioridad)
  );
}
module.exports = { validarIncidencia };
