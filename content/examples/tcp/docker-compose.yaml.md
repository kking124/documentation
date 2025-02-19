```yaml title="docker-compose.md"
version: "3"
services:
  pomerium:
    image: pomerium/pomerium:main
    volumes:
      - ./_wildcard.localhost.pomerium.io.pem:/pomerium/cert.pem:ro
      - ./_wildcard.localhost.pomerium.io-key.pem:/pomerium/key.pem:ro
      - ./config.yaml:/pomerium/config.yaml:ro
    ports:
      - 443:443

  redis:
    image: redis:latest
    expose:
      - 6379

  ssh:
    image: linuxserver/openssh-server:latest
    expose:
      - 2222
    environment:
      PASSWORD_ACCESS: "true"
      USER_PASSWORD: supersecret
      USER_NAME: user

  pgsql:
    image: postgres
    restart: always
    environment:
      POSTGRES_PASSWORD: supersecret
    expose:
      - 5432
```
