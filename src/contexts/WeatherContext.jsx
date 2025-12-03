import { createContext, useContext, useState, useEffect } from 'react'

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const location = { lat: 21.0285, lng: 105.8542 }
                const today = new Date().toISOString().split('T')[0]
                const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Asia/Bangkok&start_date=${today}&end_date=${today}`

                const response = await fetch(url)
                const data = await response.json()

                if (data.daily) {
                    setWeather({
                        code: data.daily.weathercode[0],
                        tempMax: data.daily.temperature_2m_max[0],
                        tempMin: data.daily.temperature_2m_min[0]
                    })
                }
            } catch (error) {
                console.error('Failed to fetch weather:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchWeather()
    }, [])

    const getWeatherTheme = (code) => {
        if (!code) return 'default'
        if (code === 0) return 'sunny'
        if (code >= 1 && code <= 3) return 'cloudy'
        if (code >= 45 && code <= 48) return 'foggy'
        if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return 'rainy'
        if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return 'snowy'
        if (code >= 95 && code <= 99) return 'stormy'
        return 'default'
    }

    const theme = getWeatherTheme(weather?.code)

    return (
        <WeatherContext.Provider value={{ weather, loading, theme }}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = () => {
    const context = useContext(WeatherContext)
    if (!context) {
        throw new Error('useWeather must be used within WeatherProvider')
    }
    return context
}
