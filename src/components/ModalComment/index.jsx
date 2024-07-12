'use client'

import { useRef } from "react"
import { IconButton } from "@/app/components/IconButton"
import { Modal } from "@/components/Modal"
import { Chat } from "@/app/components/icons/Chat"
import { Textarea } from "@/components/Textarea"
import { SubmitButton } from "@/components/SubmitButton"
import { Subheading } from "@/components/Subheading"

import styles from './commentmodal.module.css'

export const ModalComment = ({ action }) => {
	const modalRef = useRef(null)
	return (
		<>
			<Modal ref={modalRef}>
				<form action={action} onSubmit={() => modalRef.current.closeModal()}>
					<Subheading>Deixe seu comentário sobre o post:</Subheading>
					<Textarea required rows={8} name="text" placeholder="Digite aqui..." />
					<div className={styles.footer}>
						<SubmitButton>
							Comentar
						</SubmitButton>
					</div>
				</form>
			</Modal>
			<IconButton
				onClick={() => modalRef.current.openModal()}
			>
				<Chat />
			</IconButton>
		</>
	)
}