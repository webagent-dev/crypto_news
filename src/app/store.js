import { configureStore} from '@reduxjs/toolkit'
import { setupListeners  } from '@reduxjs/toolkit/dist/query'
import { cryptoApi  } from '../services/cryptoApis'
import { newApis } from '../services/newApis'


export const store = configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [newApis.reducerPath]: newApis.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware)
})


setupListeners(store.dispatch)