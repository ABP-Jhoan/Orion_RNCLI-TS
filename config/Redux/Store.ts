//? Imports de librerías.
import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
//? Imports propios
//import licenseSlice from "./slices/licenceSlice"

export const store = configureStore({
    reducer: {
        //licence : licenseSlice
    }
})

// Definición de tipos para RootState y AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// Ganchos personalizados para usar dispatch y selector con tipos específicos
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector