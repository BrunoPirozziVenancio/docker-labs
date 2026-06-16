# Python Flask App com Docker

Aplicação simples em Flask containerizada com Docker.

## Como usar

### Build da imagem
```bash
docker build -t python-flask-app .
```

### Rodar o container
```bash
docker run -p 5000:5000 python-flask-app
```

### Acessar no navegador
http://localhost:5000
