# BlockchainForDevelopers

Partimos del entorno creado en el manual.

Descargar y ejecutar:
```
$ npm install
```
Despues ejecutar:
```
$ ganache-cli --port 8545
```
Y en otro terminal
```
$ truffle migrate
$ node main.js
```
Esto expone una API muy sencilla en el puerto 3000

## /send
tipo: POST

Body (Ejemplo):
```
{
	"amount" : "100",
	"address" : "0x206461a63321bc9ce7b42cffbe3d7bd1af8e2b31",
	"sender" : "0xac1d0413c917e00a040ea934c46c6c6138ff01ee"
}
```

## /balanceOf:address
tipo: GET

Argumento: address sin "0x"

*Manual del curso*
https://docs.google.com/document/d/1WfB6a6yXWmdtRu7RM96kR2TZi-cyLycjP2DMKt5SiDQ/edit
