import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { }
})

export default authSlice.reducer