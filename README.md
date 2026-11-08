# Sistema de incidencias

Proyecto de la práctica de laboratorio N.º 13 del curso Herramientas de Desarrollo. Valida incidencias informáticas y comprueba automáticamente su funcionamiento mediante GitHub Actions.

## Integrantes
- Integrante 1: [Nombre completo]
- Integrante 2: [Nombre completo]
- Sección: [Sección]

## Archivos
- `incidencias.js`: valida código, descripción y prioridad.
- `test.js`: contiene tres pruebas automatizadas.
- `package.json`: define el comando de pruebas.
- `.github/workflows/ci.yml`: ejecuta las pruebas al recibir cambios.

## Procedimiento
1. Crear el repositorio `sistema-incidencias` e invitar al colaborador.
2. Subir los archivos y comprobar en Actions que las tres pruebas pasan.
3. Agregar temporalmente `urgente` a las prioridades permitidas y crear un commit.
4. Comprobar el fallo de la prueba `rechaza prioridad desconocida` y guardar la captura.
5. Restaurar las prioridades originales, crear otro commit y guardar la captura de la ejecución correcta.
6. Verificar que cada integrante tenga al menos un commit identificable.

## Ejecuciones
- Ejecución fallida: [Pegar enlace]
- Ejecución exitosa: [Pegar enlace]

## Preguntas técnicas
**¿Qué evento activa el workflow?** Los eventos `push` y `pull_request`.

**¿Qué verifica la prueba automatizada?** Que una incidencia válida sea aceptada, una prioridad desconocida sea rechazada y una descripción vacía sea rechazada.

**¿Qué diferencia existe entre un commit y una ejecución de Actions?** Un commit registra una versión de los cambios; una ejecución de Actions ejecuta automáticamente el flujo configurado para verificar el proyecto.

**¿Qué ventaja ofrece detectar un error antes de integrar más cambios?** Permite corregirlo oportunamente, evitar que se propague y reducir el trabajo de diagnóstico.
