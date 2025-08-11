import { Button, Spinner } from 'flowbite-react'
import React from 'react'

export default function AppButton({ children, isLoading, onClick }) {
    // console.log({ children });

    return (<Button type="submit" onClick={onClick}>
        {isLoading && <Spinner size="sm" aria-label="Info spinner example" className="me-3" light />}
        {children}
    </Button>)
}
