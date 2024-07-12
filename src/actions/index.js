'use server'

import { revalidatePath } from "next/cache";
import db from "../../prisma/db";

export async function incrementThumbsUp(post) {

	await new Promise((resolve) => setTimeout(resolve, 1000));

	await db.post.update({
		where: {
			id: post.id
		},
		data: {
			likes: {
				increment: 1
			}
		}
	});

	revalidatePath('/');
	revalidatePath(`/posts/${post.slug}`);
}

export async function postComment(post, formData) {
	//console.log(formData) // FormData { text: 'Muito legal esse post.' }
	const author = await db.user.findFirst({
		where: {
			username: 'anabeatriz_dev'
		}
	})

	await db.comment.create({
		data: {
			text: formData.get('text'),
			authorId: author.id,
			postId: post.id	
		}
	})

	revalidatePath('/');
	revalidatePath(`/posts/${post.slug}`);
}