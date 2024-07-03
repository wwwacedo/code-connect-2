# [Code Connect 2](https://cursos.alura.com.br/course/next-js-construa-aplicacoes-postgres-prisma/task)

1. Para levantar o Postgres:
```bash
docker compose up -d
```

2. Para iniciar a configuração do Prisma:
```bash
npx prisma init
```

3. Para instalar o Prisma:
```bash
npm i prisma
```

4. Para sincronizar o `schema.prisma` com o Postgres:
```bash
npx prisma migrate dev --name init
```
