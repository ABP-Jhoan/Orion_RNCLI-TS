// themeSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ThemeStateType {
  theme: boolean
}

const initialState: ThemeStateType = {
  theme: true,
}

// Acción asíncrona para leer el estado inicial desde AsyncStorage
export const readInitialStateAsync = createAsyncThunk('theme/readInitialStateAsync', async () => {
  try {
    const storeValue = await AsyncStorage.getItem('theme')
    return storeValue !== null ? JSON.parse(storeValue) : true
  } catch (error) {
    console.log('Error al obtener el estado inicial ' + error)
    throw error
  }
})

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.theme = action.payload
    },
    changeState: (state, action) => {
      state.theme = action.payload
      // Almacena el nuevo estado en AsyncStorage al cambiarlo
      AsyncStorage.setItem('theme', JSON.stringify(action.payload)).catch((error) => {
        console.log('Error al almacenar el estado en AsyncStorage:', error)
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(readInitialStateAsync.fulfilled, (state, action) => {
      state.theme = action.payload
    })
  },
})

export const { setInitialState, changeState } = themeSlice.actions

export default themeSlice.reducer
