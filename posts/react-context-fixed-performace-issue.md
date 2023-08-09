---
title: 'React context: Fixed a performace issue'
subtitle: 'How react context creates a performence issue and how to fix it?'
date: '2023-08-09'
---

I had to provide some states in one project and classically I implemented a Context in my react app but then I found a performance issue after some testing with React dev tools. It took quite some time to solve it which I found the issue totally worth it to write about. So this is how my context looks like:

```javascript
import { createContext, useReducer } from 'react'
import { getInitialProducts } from './lib/products'
import { reducer } from './lib/reducert'

const ProductsContext = createContext({})

const ProductsProvider = ({children}) => {
    const [products, dispatch] = useReducer(reducer, getInitialProducts())

    return (
    <ProductsContext.Provider value={{ products, dispatch }}>
        {children}
)   </ProductsContext.Provider>
}

export default ProductsProvider
```

​Classic, right!? What could be the problem just right after implementing the context although not always the values of the context gonna change! Weird, right! In my case, well products and dispatch might be the same but the point is that at any time the object that we're passing as a value is always a brand new one and it invalidates all the checks in React memo (in case you have any). So in my case, the value of products changes often but not necessarily the dispatch. That's why by creating the second context and wrapping it around the ProductsContext I can separate these two and hopefully I solved the bug.

```javascript
import { createContext, useReducer } from 'react'
import { getInitialProducts } from './lib/products'
import { reducer } from './lib/reducert'

export const ProductsContext = createContext({})
export const ActionsContext = createContext({})

const ProductsProvider = ({children}) => {
    const [products, dispatch] = useReducer(reducer, getInitialProducts())

    return (
        <ActionsContext.Provider value={dispatch}> // does not change
            <ProductsContext.Provider value={products}> // does change
                {children}
            </ProductsContext.Provider>
        </ActionsContext>
    )

}

export default ProductsProvider
```
It's important that we keep the order. I mean that we keep the one that does not change above the one which changes.