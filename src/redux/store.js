import { configureStore } from '@reduxjs/toolkit';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer from './contactsReducer';

const contactsPersistConfig = {
    key: 'phonebook',
    storage,
    blacklist: ['filter'],
};

const persistedContactsReducer = persistReducer(contactsPersistConfig, phonebookReducer);

export const store = configureStore({
    reducer: persistedContactsReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);