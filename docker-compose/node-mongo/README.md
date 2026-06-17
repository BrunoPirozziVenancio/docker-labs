# Node.js + MongoDB com Docker Compose

Stack com aplicacao Node.js conectada ao MongoDB, orquestrada com Docker Compose.

## Servicos

- app: Node.js 18 na porta 3000
- mongo: MongoDB 6 na porta 27017

## Como usar

### Subir os containers
docker compose up -d

### Verificar containers rodando
docker compose ps

### Ver logs
docker compose logs -f

### Derrubar os containers
docker compose down
