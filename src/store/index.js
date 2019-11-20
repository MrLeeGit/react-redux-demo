import { createStore } from 'redux';
import rootReduer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(
        rootReduer,
        initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined,
    )

    return store;
};
