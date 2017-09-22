# Laravel 5 y Angular 4 integrados en el mismo servidor

## Instalacion

```
composer install
npm install
```

Modificar el fichero .env y borrar la clave de aplicacion y crear una nueva
Modificar ademas la informacion de la base de datos
```
php artisan key:generate
```

## Compilar el proyecto de Angular cada vez que se modifique

```
ng build
```

## Servir la aplicacion

```
php artisan serve
```
