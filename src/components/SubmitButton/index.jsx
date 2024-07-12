'use client';

import { useFormStatus } from 'react-dom'
import { Spinner } from "@/app/components/Spinner";
import { ArrowForward } from "@/app/components/icons/ArrowForward";
import { Button } from "@/components/Button";

export const SubmitButton = ({children}) => {
    const { pending } = useFormStatus();
    return (
        <Button aria-disabled={pending} type="submit">
             {pending ? <Spinner /> : <>{children} <ArrowForward /></>}
        </Button>
    )
}