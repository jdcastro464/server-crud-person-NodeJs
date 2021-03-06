# API CRUD de Personas

Espero que aprendan a crear un crud simple guiandose de este proyecto personal... Animo! 馃挭

## De que se trata el proyecto 馃殌

- El proyecto es dise帽ado para poder realizar las consultas basicas de una tabla _LISTAR_, _AGREGAR_, _ACTUALIZAR_ y _ELIMINAR_
- La organizaci贸n del proyecto se realizar de la siguiente forma: 
    1. ***RA脥Z ./***
        - **.env** donde tenemos las variables globales necesarias para el funcionamiento del proyecto
        - **config.js** variables para la conexi贸n a la base de datos Mysql
        - **test_crud.sql** base de datos Mysql
        - **server.js** nuestro archivo servidor iniciador del server HTTP
    2. ***NETWORK ./network***
        - **connection.js** solo nuestra conexi贸n a la base de datos Mysql
        - **log.js morgan.js** archivos para generar registro de la actividad de nuestro proyecto en .logs
        - **response.js** respuestas de rutas din谩micas
        - **routes.js** donde agrupamos todas las rutas de cada componente para un mayor orden
    3. ***SERVICES ./services***
        - **Middleware.js Schemas.js** archivos para crear Schemas de validaci贸n de datos antes de que una ruta le envie la informaci贸n al controller de cada componente
    4. ***LOGS ./logs***
        - **all-logs.log** archivo de registro de activadad del proyecto creado con ayuda de _log.js morgan.js_
    5. ***COMPONENTS /.components***
        - Antes de explicar los archivos, deben tener claro que un componente hace referencia a un modulo dentro de un proyecto en donde se maneja toda una informaci贸n relevante a ese modulo o componente.
        - Solo explicare los archivos del primero modulo debido a que seria la misma explicaci贸n para el otro modulo y as铆 con cualquier otro modulo futuro.
        - **network.js** nuestro archivo de rutas solo para el modulo especifico en este caso _Person_ estas rutas son visibles para ser utilizadas o consumidas.
        - **controller.js** es la parte logica de la informaci贸n proporcionada por una ruta "network.js"
        - **store.js** se encarga de recibir la informaci贸n de nuestro controller y enviarsela al modelo
        - **model.js** es una Clase del componente espeficico el cual contiene todos los metodos necesarios para ser usados en las rutas del componente.
- *隆Nota Importante!* para poder hacer uso de las rutas es necesario contar con un token este se obtiene de la ruta _http://localhost:[PORT]/validate/token_ y este recibe un Object con user y pass el cual por defecto es { "user": "administrador", "pass": "admin2021**" }

### Requisitos 馃摜

```
1. Instalar Node
```

### Instalaci贸n 鈿? 馃捊

```
1. Instalar dependencias: npm install
2. Inicar el proyecto development: npm run dev
```

### Pruebas Unitarias 馃搵馃洜

Es un test con _Jest_ y _supertest_ para validar cada una de las rutas de este proyecto.

```
npm run test
```

### Recuerda

Nunca dejes de seguir **Aprendiendo** 馃馃И馃捇, si tienes dudas contactame a jdcastro464@gmail.com 鉁掟煋?
