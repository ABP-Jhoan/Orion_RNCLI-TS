import {useState} from 'react'
export function loading() {
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => {
        setIsLoading(false)
    },2000)
    return isLoading
}