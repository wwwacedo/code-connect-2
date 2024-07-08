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

---

## [Deploy na Vercel](https://vercel.com/docs/storage/vercel-postgres/using-an-orm#prisma)

8. Usar variáveis de ambiente no `schema.prisma`:
- Antes:

	```javascript
	datasource db {
		provider = "postgresql"
		url      = env("DATABASE_URL")
	}
	```

- Depois:
	```javascript
	datasource db {
		provider = "postgresql"
		// Uses connection pooling
		url = env("POSTGRES_PRISMA_URL")
		// Uses direct connection, ⚠️ make sure to keep this to `POSTGRES_URL_NON_POOLING`
		// or you'll have dangling databases from migrations
		directUrl = env("POSTGRES_URL_NON_POOLING")
	}
	```

9. Alterar o `.env`:
- Antes:
	```javascript
	DATABASE_URL=
	```
- Depois:
	```javascript
	POSTGRES_PRISMA_URL=
	POSTGRES_URL_NON_POOLING=
	```

10. Atualizar o `script build` no `package.json`:
- Antes:
	```javascript
	"scripts": {
			"build": "next build",
		},
	```
- Depois:
	```javascript
	"scripts": {
			"build": "prisma migrate dev && prisma generate && prisma db seed && next build",
		},
	```