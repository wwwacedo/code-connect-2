import logger from "@/logger"
import { remark } from 'remark';
import html from 'remark-html';

import styles from './page.module.css'
import { CardPost } from "@/components/CardPost";
import db from "../../../../prisma/db";


async function getPostBySlug(slug) {
	try {
		const post = await db.post.findUnique({
			where: {
				slug: slug
			},
			include: {
				author: true
			}
		})

		logger.info('Posts obtidos com sucesso')

		const processedContent = await remark()
		    .use(html)
		    .process(post.markdown);
		const contentHtml = processedContent.toString();

		post.markdown = contentHtml

		return post

	} catch (error) {
		logger.error('Ops, alguma coisa correu mal')
		return {}
	}
	// const url = `http://localhost:3042/posts?slug=${slug}`
	// const response = await fetch(url)
	// if (!response.ok) {
	//     logger.error('Ops, alguma coisa correu mal')
	//     return {}
	// }
	// logger.info('Posts obtidos com sucesso')
	// const data = await response.json()
	// if (data.length == 0) {
	//     return {}
	// }

	// const post = data[0];

	// const processedContent = await remark()
	//     .use(html)
	//     .process(post.markdown);
	// const contentHtml = processedContent.toString();

	// post.markdown = contentHtml

	// return post
}

const PagePost = async ({ params }) => {
	const post = await getPostBySlug(params.slug)
	return (<div>
		<CardPost post={post} highlight />
		<h3 className={styles.subtitle}>Código:</h3>
		<div className={styles.code}>
			<div dangerouslySetInnerHTML={{ __html: post.markdown }} />
		</div>
	</div>)
}

export default PagePost