# Hooks
## useTranstion
```
import React, { useState, useTransition } from 'react'

export default function Hooks() {
    const [inputValue, setInputValue] = useState()
    const [isPending, startTransition] = useTransition()
    const [list, setList] = useState([])
    const handleInput = (e) => {
        setInputValue(e.target.value)
        startTransition(() => {
            let l = []
            for (let i = 0; i < 10000; i++) {
                l.push(e.target.value)
            }
            setList(l)
        })
    }
    return (
        <div>
            <input value={inputValue} onChange={(e) => handleInput(e)} type="text" />
            {isPending ? "loading..." : list.map((item) => {
                return <div> {item} </div>
            })}
        </div>
    )
}
```
## useDeferredValue
```
export default function Hooks() {
    const [inputValue, setInputValue] = useState("")

    return (
        <div>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" />
            <NestedComponent input={inputValue} />
        </div>
    )
}
```
```
export default function NestedComponent({ input }) {
    const difvalue = useDeferredValue(input)
    const list = useMemo(() => {
        let l = []
        for (let i = 0; i < 10000; i++) {
            l.push(<div key={i}>{difvalue}</div>)
        }
        return l
    }, [difvalue])
    return list
}
```
## useTranstion vs useDeferredValue
***useTansition*** delay rerender but still update the state where as ***useDeferredValue*** delay state update which will be usefull if feching data base on userinput as you do not have to fetch on every key stroke.

## useContext
```
import { createContext, useState } from 'react';
import NestedComponent from './NestedComponent';
export const ThemeContext = createContext('light');

export default function Hooks() {
    const [theme, setTheme] = useState("light")
    return (
        <div>
            <button onClick={() => (theme === "light") ? setTheme("dark") : setTheme("light")}>change theme</button>
            <ThemeContext.Provider value={theme}>
                <NestedComponent />
            </ThemeContext.Provider>
        </div>
    )
}
```
### Consume Context
```
import React, { useContext } from 'react'
import { ThemeContext } from './Hooks'

export default function NestedComponent() {
    const theme = useContext(ThemeContext)
    return <div>{theme}</div>
}
```
## UseReducer
```
import React, { useReducer } from 'react'

const ACTIONS = {
    ADD: "increment",
    SUBTRACT: "dicrement"
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD:
            return { count: state.count + 1 };
        case ACTIONS.SUBTRACT:
            return { count: state.count - 1 };
        default:
            return state
    }
}

export default function Hooks() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const add = () => {
        dispatch({ type: ACTIONS.ADD })
    }
    const subtract = () => {
        dispatch({ type: ACTIONS.SUBTRACT })
    }
    return (
        <div>
            {state.count}
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
        </div>
    )
}
```
## useId
generate unique id to be used in for html id 
```
const id = useId()
```
## useMemo
usememo cache value of given function 
```
const val = useMemo(()=>{
    //code here
})
```
## useCallback
usememo cache function of given function and only change when dependency change
```
const fnc = useCallback(()=>{
    //code here
},[dependency]) 
```
## useEvent
usememo cache function of given function it will not rerender for any dependency
```
const fnc = useEvent(()=>{
    //code here
})
```
## useEffectEvent
**experimental**
remove annoying error when do not want to give everything a dependency.
```
 const onUrlchange = useEffectEvent((url) => {
        console.log(`on ${url}${cart}`)
    })
    useEffect(() => {
        onUrlchange(url)
    }, [url])
```

# Tricks
get element coodinates
```
const { bottom } = btn.current.getBoundingClientRect()
```

