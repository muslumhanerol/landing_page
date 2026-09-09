import { useEffect } from "react";

export function useAutoRotate(setter, itemsLenght, delayMs){
    useEffect(() => {
        const interval = setInterval(() => {
            setter((prev) => (prev + 1) % itemsLenght)
        }, delayMs)

        return () => clearInterval(interval)

    }, [setter, itemsLenght, delayMs])
}