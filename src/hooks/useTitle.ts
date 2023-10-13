import { useEffect, useRef } from 'react'

export const useTitle = (title: string) => {
    const defaulTitle = useRef<string>(document.title)

    useEffect (() => {
        document.title  || defaulTitle.current
    }, [title])
}
