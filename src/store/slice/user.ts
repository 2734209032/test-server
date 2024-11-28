// src/features/counter/userSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { getUserInfoRequest, Login_async } from '@/api/user'
const initialState: UserInfo = {
  name: {},
  token: undefined
}
export type UserInfo = {
  name: object
  token: string | undefined
}
export const get_user_info = createAsyncThunk<UserInfo>('get/user_info', async () => {
  const res = await getUserInfoRequest()

  return res.data
})
export const Login = createAsyncThunk('/Login', async (data: any, _) => {
  const res = await Login_async(data)
  return res
})
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: state => {
      state.token = state + ''
    }
  },
  extraReducers: builder => {
    // 请求完成成功后的处理
    builder.addCase(get_user_info.fulfilled, (state, action) => {
      state.name = action.payload
    })
    // 请求失败后的处理
    builder.addCase(get_user_info.rejected, (state, action) => {
      state.name = action
    })
    // 请求中的处理
    builder.addCase(get_user_info.pending, state => {
      state.name = {}
    })
    builder.addCase(Login.fulfilled, (state, action) => {
      state.token = action.payload.token
    })
  }
})
export const select_count = (state: RootState) => state.user.value
export const { increment } = userSlice.actions
export default userSlice.reducer
