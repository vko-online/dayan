import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { PURGE } from 'redux-persist'

export interface AuthState {
  currentUserId: string | null
  token: string | null
  name: string | null | undefined // store name for onboarding check
}

const initialState: AuthState = { currentUserId: null, token: null, name: null }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onAuthSuccess(state, action: PayloadAction<AuthState>) {
      state.currentUserId = action.payload.currentUserId
      state.token = action.payload.token
      state.name = action.payload.name
    },
    onLogout(state) {
      state.currentUserId = null
      state.token = null
      state.name = null
    },
    onOnboardSuccess(state, action: PayloadAction<Pick<AuthState, 'name'>>) {
      state.name = action.payload.name
    }
  },
  extraReducers: builder => {
    // store token
    // navigate to root
    // builder.addMatcher(authSlice.actions.onAuthSuccess.match, async () => {
    //   await AsyncStorage.setItem(
    //     AUTH_STORAGE_KEY,
    //     data.signIn.token
    //   )
    // })
    builder.addCase(PURGE, state => {
      state.currentUserId = null
      state.token = null
      state.name = null
    })
  }
})

export const { onAuthSuccess, onOnboardSuccess, onLogout } = authSlice.actions
export default authSlice.reducer
