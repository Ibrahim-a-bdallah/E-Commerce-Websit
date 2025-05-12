//Redux
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

//Slices
import auth from "./signInAuth/authSlice.js";
import toasts from "./toasts/ToastsSlice";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import cart from "./Cart/CartSlice";
import wishlist from "./wishlist/wishlistSlice";
import paymob from "./paymob/paymobSlice";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart", "auth"], // only navigation will be persisted
};

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "accessToken"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  categories,
  toasts,
  products,
  cart: persistReducer(cartPersistConfig, cart),
  wishlist,
  paymob,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);
export { store, persistor };

export default persistReducer(rootPersistConfig, rootReducer);
