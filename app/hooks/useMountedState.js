import {useEffect, useMemo, useRef} from 'react'

const useMountedState = () => {
    const mountedRef = useRef(false)

    useEffect(() => {
        mountedRef.current = true

        return () => {
            mountedRef.current = false
        }
    }, [])

    const isMounted = useMemo(() => !!mountedRef.current, [mountedRef])

    return {isMounted}
}

export default useMountedState
