# Monitoramento de Infraestrutura com Grafana e Docker Compose

Stack completa de observabilidade simulando 5 servidores com Docker Compose, monitorados pelo Prometheus e Grafana.

Este projeto faz parte de uma serie de 3 implementacoes do mesmo sistema de monitoramento em ambientes diferentes. O dashboard e identico nas 3 versoes, o que muda e onde a infraestrutura roda:

- docker-compose (este projeto): tudo roda localmente na sua maquina, ideal para testes e estudo
- aws-infra/terraform/aws-grafana-monitoring: os servidores sao instancias EC2 reais na AWS
- oci-infra/terraform/projects/oci-grafana-monitoring: os servidores sao instancias Compute reais na OCI

## Arquitetura

- srv-database: MySQL 8.0 simulando servidor de banco de dados
- srv-backend-1, 2 e 3: aplicacao Node.js alimentando o banco
- srv-proxy: Nginx fazendo reverse proxy para os backends
- node-exporter: exporta metricas do host
- prometheus: coleta e armazena as metricas
- grafana: exibe os dashboards

## Metricas monitoradas

- Disponibilidade de cada container
- CPU: percentual de uso e load average (1m, 5m, 15m)
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
