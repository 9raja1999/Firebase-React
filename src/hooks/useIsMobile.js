import React, { useEffect, useState } from 'react'

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false)


    useEffect(() => {
        function handleResie() {
            setIsMobile(window.innerWidth < 550)
        }

        window.addEventListener('resize', handleResie())

        return () => {
            window.removeEventListener('resize')
        }

    }, [])

    return { isMobile }
}

export default useIsMobile