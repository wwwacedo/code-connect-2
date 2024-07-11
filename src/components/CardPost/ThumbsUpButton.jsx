"use client";

import { IconButton } from "@/app/components/IconButton";
import { ThumbsUp } from "@/app/components/icons/ThumbsUp";
import { Spinner } from "@/app/components/Spinner";

import { useFormStatus } from "react-dom";

export const ThumbsUpButton = () => {

	const { pending } = useFormStatus();

	return (
		<IconButton disabled={pending}>
			{ pending ? <Spinner /> : <ThumbsUp />}
		</IconButton>
	);
}