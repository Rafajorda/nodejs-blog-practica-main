# Proyecto Node.js Blog

Este proyecto utiliza el framework **Next.js** y tiene integrado un flujo de trabajo de GitHub Actions que automatiza varias tareas importantes como la ejecución de linters, pruebas con Cypress, la actualización del README con un badge de resultados de las pruebas y el despliegue a **Vercel**.

## RESULTADOS DE LOS ÚLTIMOS TESTS

---

## Introducción Teórica: GitHub Actions

**GitHub Actions** es una herramienta de integración continua y entrega continua (CI/CD) que se integra directamente en GitHub para automatizar tareas dentro de tus repositorios. Esta herramienta te permite crear flujos de trabajo automáticos para compilar, probar y desplegar tu código en función de ciertos eventos, como un `push` a una rama, la creación de un `pull request`, o incluso cuando un `issue` es abierto o cerrado.

Con **GitHub Actions**, puedes definir un archivo de configuración llamado **workflow** (que generalmente se encuentra en el directorio `.github/workflows/`). Un workflow consta de una serie de **jobs**, y cada job contiene una serie de **steps**.

### Componentes Principales de GitHub Actions

- **Workflow**: Un workflow es un conjunto de jobs que se ejecutan en una máquina virtual (VM) dentro de un contenedor o sistema operativo específico. Los workflows se definen en archivos YAML y son ejecutados automáticamente por GitHub en función de eventos específicos.

- **Jobs**: Los jobs son unidades de trabajo que se ejecutan de manera independiente en un entorno determinado. Cada job tiene sus propios pasos a seguir y puede ejecutarse en paralelo con otros jobs o de forma secuencial.

- **Steps**: Un step es una acción individual dentro de un job. Pueden ser comandos que se ejecutan en la máquina virtual, como la instalación de dependencias, o bien acciones prediseñadas (por ejemplo, `actions/checkout@v3` para hacer el checkout del código).

- **Actions**: Las actions son pequeños fragmentos de código que puedes reutilizar para automatizar tareas dentro de tu workflow. Existen acciones que realizan tareas comunes como instalar dependencias, desplegar a plataformas como Vercel, o ejecutar pruebas con Cypress. GitHub también permite crear tus propias actions, como la acción para enviar un correo electrónico con los resultados de los tests que hemos implementado en este proyecto.

### Beneficios de usar GitHub Actions

1. **Automatización**: GitHub Actions permite automatizar tareas repetitivas como la ejecución de tests, la validación de código o el despliegue en plataformas de producción, lo que te permite ahorrar tiempo y evitar errores humanos.

2. **Integración continua (CI)**: Permite ejecutar automáticamente pruebas en tu código cada vez que realices un cambio, asegurándote de que el código que subes está libre de errores.

3. **Despliegue continuo (CD)**: GitHub Actions también facilita el despliegue de tu aplicación en entornos de producción como **Vercel** o **Heroku**, con solo realizar un push al repositorio.

4. **Facilidad de uso**: GitHub Actions se integra directamente con GitHub, por lo que no necesitas herramientas externas. Todo se gestiona dentro de la misma plataforma.

5. **Flexibilidad**: Puedes configurar workflows para que se ejecuten en diferentes sistemas operativos (Linux, macOS, Windows), lo que es útil cuando quieres asegurarte de que tu aplicación funciona correctamente en distintas plataformas.

Con estas características, GitHub Actions es una herramienta poderosa para mejorar la calidad del código, garantizar que tu aplicación se despliegue correctamente y mantener una integración continua sin complicaciones.

## Flujo de trabajo de GitHub Actions

El workflow se compone de varios **jobs** que se ejecutan secuencialmente o en paralelo, dependiendo de su configuración. En este proyecto, se definieron los siguientes jobs:

1. **Linter Job**: Ejecuta el linter para verificar la sintaxis del código y garantizar que no haya errores de formato.
2. **Cypress Job**: Ejecuta las pruebas automatizadas con Cypress. En caso de error, se continúa con el flujo para realizar otras tareas.
3. **Add Badge Job**: Agrega un badge al README indicando el resultado de las pruebas de Cypress.
4. **Deploy Job**: Despliega el proyecto en **Vercel** para su visualización pública.
5. **Notification Job**: Envía un correo electrónico con los resultados de los diferentes jobs para notificar a los responsables del proyecto.

## Archivos de configuración

Los archivos de configuración se encuentran en el directorio `.github/workflows/`. El archivo principal es `workflow.yml`, que contiene la definición de todos los jobs y pasos.

## Badge en README

Al finalizar las pruebas de Cypress, se actualiza el archivo `README.md` con un **badge** que indica si las pruebas fueron exitosas o fallaron. Este badge es generado automáticamente por el job **Add Badge Job** dentro del flujo de trabajo de GitHub Actions.

