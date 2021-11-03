import { useState } from "react"

const useAutoCounter = (end: number, duration: number) => {

    const [number, setNumber] = useState(0)

    setInterval(() => {
        setNumber(n => {
            if(n!==end) {
                return n+1
            }
            return n
        })
    }, duration)

    return number
}

export default useAutoCounter