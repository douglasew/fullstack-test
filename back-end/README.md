## Installation

Clone repository:
```sh
git clone https://github.com/douglasew/fullstack-test.git
```
Install dependencies:
```sh
composer install
```
Command to generate your app key:
```sh
php artisan key:generate
```
## Database
Create your database and add the name in ".env"

![settings of connection with database](https://cdn.discordapp.com/attachments/331545069423165440/845492439191126047/unknown.png)

Command to generate a migrate:
```sh
php artisan migrate
```
Make seeder
```sh
php artisan db:seed
```
Run server:
```sh
php artisan serve
```
Open [http://localhost/8000](http://localhost/example-api/public/api/) to view

## Database
Create your database and add the name in ".env"

![settings of connection with database](https://cdn.discordapp.com/attachments/331545069423165440/845492439191126047/unknown.png)

Command to generate a migrate:
```sh
php artisan migrate
```
Run server:
```sh
php artisan serve
```
## API Client
Open [http://localhost/example-api/public/api/](http://localhost/example-api/public/api/) to view

### APIs endpoints

GET  [/pacientes](http://localhost/example-api/public/api/clientes)  [todos os pacientes]  
POST  [/paciente](http://localhost/example-api/public/api/cliente)  [criar um paciente]
DELETE  [/paciente/{id}](http://localhost/example-api/public/api/clientes/id)  [deletar um paciente]

POST  [/atendimento](http://localhost/example-api/public/api/clientes/id)  [atendimento de um paciente]  
DELETE  [/atendimento/{id}](http://localhost/example-api/public/api/clientes/id)  [deletar um atendimento]

