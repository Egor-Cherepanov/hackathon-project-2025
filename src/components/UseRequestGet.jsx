import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context.js'


// Custom hook - получение заметок
export const useRequestGet = () => {
    const { setStore } = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:3000/members')
            .then((loadedData) => loadedData.json())
            .then((noteData) => setStore(noteData))

            .finally(() => {
                setIsLoading(false)
            })
    }, [setStore])

    return {
        isLoading,
    }
}
