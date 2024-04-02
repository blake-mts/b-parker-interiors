import React, {
    Context,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from 'react';

export class Contextinator<S> {
    StateContext: Context<S>;

    DispatchContext: Context<Dispatch<SetStateAction<S>>>;

    constructor(public initialState: S) {
        this.StateContext = createContext(initialState);

        this.DispatchContext = createContext(((_state: S) => {}) as Dispatch<
            SetStateAction<S>
        >);
    }

    useState() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useContext(this.StateContext);
    }

    useDispatch() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useContext(this.DispatchContext);
    }
}

interface ContextProviderProps extends PropsWithChildren {
    contexts: Contextinator<any> | Contextinator<any>[];
}

interface ContextCreatorProviderProps<S> extends PropsWithChildren {
    createdContext: Contextinator<S>;
}

function ContextCreatorProvider<S>({
    createdContext,

    children,
}: ContextCreatorProviderProps<S>) {
    const { StateContext, DispatchContext, initialState } = createdContext;

    const [state, setState] = useState<S>(initialState);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={setState}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

export function ContextProvider(props: ContextProviderProps) {
    const { contexts, children } = props;

    let createdContext: Contextinator<any>;

    let remainingContexts: Contextinator<any>[] = [];

    if (Array.isArray(contexts)) {
        if (contexts.length === 0) {
            return children;
        }

        createdContext = contexts[0];

        remainingContexts = contexts.slice(1);
    } else {
        createdContext = contexts;
    }

    return (
        <ContextCreatorProvider createdContext={createdContext}>
            <ContextProvider contexts={remainingContexts}>
                {children}
            </ContextProvider>
        </ContextCreatorProvider>
    );
}
