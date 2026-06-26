# Monitoramento de Infraestrutura com Grafana e Docker Compose

Stack completa de observabilidade simulando 5 servidores com Docker Compose, monitorados pelo Prometheus e Grafana.

## Arquitetura

- srv-database: MySQL 8.0 simulando servidor de banco de dados
- srv-backend-1, 2 e 3: aplicacao Node.js alimentando o banco
- srv-proxy: Nginx fazendo reverse proxy para os backends
- node-exporter: exporta metricas do host
- prometheus: coleta e armazena as metricas
- grafana: exibe os dashboards

## Metricas monitoradas

- Disponibilidade de cada container
- CPU: percentual de uso e load average
- RAM: total, usada e disponivel
- Disco: uso percentual, leitura/escrita e IOPS
- Rede: trafego de entrada e saida
- Sistema: uptime, processos e conexoes abertas

## Como usar

### Subir todos os containers
docker compose up -d

### Verificar se estao rodando
docker compose ps

### Ver logs
docker compose logs -f

### Acessar o Grafana
http://localhost:3000

Login:
- Usuario: admin
- Senha: admin

### Acessar o Prometheus
http://localhost:9090

### Acessar a aplicacao via proxy
http://localhost:8080

### Derrubar todos os containers
docker compose down

## Tecnologias

- Docker Compose: orquestracao dos containers
- MySQL: banco de dados
- Node.js: aplicacao backend
- Nginx: reverse proxy
- Prometheus: coleta de metricas
- Node Exporter: metricas do sistema
- Grafana: visualizacao dos dashboards
