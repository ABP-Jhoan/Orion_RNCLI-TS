import { createSlice } from '@reduxjs/toolkit'

interface ThemeStateType {
  show: boolean;
}

const initialState: ThemeStateType = {
  show: false,
}

export const showModalSlice = createSlice({
    name: 'showModal',
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.show = action.payload
        }
    }
})

export const {showModal} = showModalSlice.actions
export default showModalSlice.reducer