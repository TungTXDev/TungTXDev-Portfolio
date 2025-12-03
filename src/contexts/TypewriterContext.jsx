import { createContext, useContext, useState, useEffect } from 'react'

const TypewriterContext = createContext()

export const TypewriterProvider = ({ children, loopDelay = 8000 }) => {
    const [shouldReset, setShouldReset] = useState(false)
    const [completedCount, setCompletedCount] = useState(0)
    const [totalTexts, setTotalTexts] = useState(0)

    useEffect(() => {
        if (completedCount > 0 && completedCount === totalTexts) {
            // All texts completed, wait then reset
            const timeout = setTimeout(() => {
                setShouldReset(true)
                setCompletedCount(0)
                setTimeout(() => setShouldReset(false), 100)
            }, loopDelay)
            return () => clearTimeout(timeout)
        }
    }, [completedCount, totalTexts, loopDelay])

    const registerText = () => {
        setTotalTexts(prev => prev + 1)
    }

    const markComplete = () => {
        setCompletedCount(prev => prev + 1)
    }

    return (
        <TypewriterContext.Provider value={{ shouldReset, registerText, markComplete }}>
            {children}
        </TypewriterContext.Provider>
    )
}

export const useTypewriter = () => {
    const context = useContext(TypewriterContext)
    if (!context) {
        return { shouldReset: false, registerText: () => { }, markComplete: () => { } }
    }
    return context
}
