# Usuarios Web
Aplicación creada con el fin de demostrar conocimientos sobre gestión de usuarios en aplicaciones web.

## Contenidos
- [Ejecución](#Ejecucion)
- [Tecnologías](#Tecnologias)
- [Base de datos](#Base/de/datos)
- [Modelos](#Modelos)
- [Backend](#Backend)
- [Frontend](#Frontend)

# Ejecucion
Para correr la aplicación en el equipo local se deberan seguir los siguientes pasos: 
- Clonar el repositorio de git:
```bash
git clone https://github.com/nicolima02/usuarios.git
```
- Abrir una terminal para el entorno de backend y otra para frontend.
- En la terminal del entorno Backend:
```bash
cd bACK
npm run dev
```
- En la terminal del Frontend:
```bash
cd fRONT/usuariosweb
npm run start
```
Con estos comandos la aplicación ya estaría levantada en http://localhost:3000

# Tecnologias
Las tecnologías que se utilizaron para el desarrollo de aplicación son framework Reactjs para el frontend y express para el servidor backend.

# Base/de/datos
La base de datos utilizada es MongoDB. En ella se almacenan los datos de los usuarios (nombre de usuario y contraseña) y las auditorias(inicio y registros) de cada usuario.

# Modelos
Se utilizaron modelos de usuario y auditorias para la inserción de regitros en la base de datos. 
Los usuarios cuentan con los campos:
- user : Es el nombre de usuario elegido por la persona que se registra.
- password : Es la contraseña que debera ingresar el usuario para acceder a su cuenta.
- createdAt: Es la fecha en que se registró el usuario.
- expiresAt: Es la fecha en que se destruye el registro de la base de datos.
Los usuarios, por tema de espacio, fueron configurado con una duración de 12hs. A excepción del usuario administrador que permanecera indefinidamente.

Las auditorias cuentan con los campos:
- accion : Es la operación que realiza el usuario.
- user : Nombre del usuario que realiza una acción.
- fecha : Fecha y hora en la que se registra el acto.
--------------------------
# Backend

## Contenidos:
- [Controladores](#Controladores)
- [ORM](#ORM)
- [Servicios Back](#Servicios/Back)
- [Endpoints](#Endpoints)
- [Bibliotecas Back](#Bibliotecas/Back)

# Controladores

# ORM

# Servicios/Back

# Endpoints

# Bibliotecas/Back
--------------------------
# Frontend

## Contenidos
- [Componentes](#Componentes)
    - [Nav](#Nav)
    - [Inicio](#Inicio)
    - [Login](#Login)
    - [Auditorias](#Auditorias)
    - [Registrar](#Registrar)
- [Servicios Front](#Servicios/Front)
- [Estilos](#Estilos)
- [Bibliotecas Front](#Bibliotecas/Front)


# Componentes

 - # Nav
 - # Inicio
 - # Login
 - # Auditorias
 - # Registrar

# Servicios/Front

# Estilos

# Bibliotecas/Front