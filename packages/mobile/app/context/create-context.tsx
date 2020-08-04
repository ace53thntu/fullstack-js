import React, {Reducer, Dispatch, useContext} from 'react';

export function createContext<S, A>(defaultValue: S, reducer: Reducer<S, A>) {
  const defaultDispatch: Dispatch<A> = () => defaultValue;
  const StateCtx = React.createContext(defaultValue);
  const DispatchCtx = React.createContext(defaultDispatch);

  function useStateCtx<K extends keyof S>(property: K) {
    const state = useContext(StateCtx);
    return state[property];
  }

  function useDispatchCtx() {
    return useContext(DispatchCtx);
  }

  function Provider({children}: React.PropsWithChildren<{}>) {
    const [state, dispatch] = React.useReducer(reducer, defaultValue);

    return (
      <DispatchCtx.Provider value={dispatch}>
        <StateCtx.Provider value={state}>{children}</StateCtx.Provider>
      </DispatchCtx.Provider>
    );
  }

  return [useStateCtx, useDispatchCtx, Provider] as const;
}
