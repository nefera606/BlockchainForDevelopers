# BlockchainForDevelopers

Descargar y ejecutar:
```
$ npm install
```
Esto expone una API muy sencilla en el puerto 3000

##/send
tipo: POST
Body (Ejemplo):
```
{
	"amount" : "100",
	"address" : "0x206461a63321bc9ce7b42cffbe3d7bd1af8e2b31",
	"sender" : "0xac1d0413c917e00a040ea934c46c6c6138ff01ee"
}
```

##/balanceOf:address
tipo:GET
Argumento: address sin "0x"
