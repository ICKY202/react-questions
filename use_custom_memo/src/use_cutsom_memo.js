import {useEffect, useRef} from "react"

const areEqual = (prevDeps, currDeps) => {
    if(prevDeps === null) return false;
    if(prevDeps.length !== currDeps.length) return false;

    for(let i=0; i<currDeps.length; i++) {
        if(prevDeps[i] !== currDeps[i]) {
            return false;
        }
    }

    return true;
}
const useCustomMemo = (cb, deps) => {
    console.log(deps);
    const memoizedRef = useRef();

    if(!memoizedRef.current || !areEqual(memoizedRef.current.deps, deps)) {
        memoizedRef.current = {
            value: cb(),
            deps
        }
    }
    useEffect(() => {
        return () => {
            memoizedRef.current = null
        }
    }, [])
    
    return memoizedRef.current.value;
}

export default useCustomMemo;