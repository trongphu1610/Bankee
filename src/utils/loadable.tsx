import React, { lazy, Suspense } from 'react'
/* eslint-disable  @typescript-eslint/no-explicit-any */

interface Opts {
  fallback: React.ReactNode
}
type Unpromisify<T> = T extends Promise<infer P> ? P : never

// eslint-disable-next-line require-jsdoc
export const lazyLoad = <
  T extends Promise<any>,
  U extends React.ComponentType<any>,
>(
  importFunc: () => T,
  selectorFunc?: (s: Unpromisify<T>) => U,
  opts: Opts = { fallback: null },
) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc

  if (selectorFunc) {
    lazyFactory = () =>
      importFunc().then(module => ({ default: selectorFunc(module) }))
  }

  const LazyComponent = lazy(lazyFactory)

  return (props: React.ComponentProps<U>): JSX.Element => (
    <Suspense fallback={opts.fallback!}>
      <LazyComponent {...props} />
    </Suspense>
  )
}
