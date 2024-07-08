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

4. Para sincronizar o `schema.prisma` com o Postgres (criar tabelas):
	```bash
	npx prisma migrate dev --name init
	```

---

5. Para gerar o Prisma Client:
	```bash
	npx prisma generate
	```

6. Para iniciar o Prisma Client:
	```javascript
	import { PrismaClient } from '@prisma/client'
	const prisma = new PrismaClient()
	```

7. [Como fazer o seeding do Postgres](https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding):
- no `package.json`:
	```javascript
	"prisma": {
	  "seed": "node prisma/seed.js"
	},
	```
- criar o `prisma/seed.js`;
- no terminal:
	```bash
	npx prisma db seed
	```
