import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import { Store } from './store/Store';


export const JournalApp = () => {
    return (
        <Provider store={Store}>
            <AppRouter />
        </Provider>
    )
}
