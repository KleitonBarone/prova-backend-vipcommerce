
# Prova Backend do VipCommerce

## Requisitos

Ter o Docker e Docker Compose instalados

## Configurando ambiente

  

Normalmente teríamos que configurar o .env porém como esse projeto é somente um teste resolvi deixar o .env já montado por questão de facilidade então, tendo o .env já configurado rode o comando:

  

```

docker compose up -d --build

```

e o subirá o ambiente de desenvolvimento junto com o banco de dados mysql


## Testes Unitários 

Para rodar os testes unitários digite o comando:

```
yarn test
```

E para ver o coverage:
```
yarn test:cov
```

## Postman

Para testar a aplicação, após configurar e subir o docker, importe o arquivo "Desafio Backend.postman_collection.json" no seu postman onde tem todos os endpoints disponíveis

## Open API (Swagger)

Ao Rodar a Aplicação a rota "/api" é onde fica disponível a documentação Open API (Swagger) do Projeto