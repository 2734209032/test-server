// src/store.ts
import { configureStore, Reducer, ThunkAction, Action } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const modules = import.meta.glob('./slice/*.ts', { eager: true })

// 定义 Reducer 类型
type ReducersMapObject = {
  [key: string]: Reducer<any, any>
}

const reducers: ReducersMapObject = {}

for (const path in modules) {
  const slice = modules[path] as { default: Reducer<any, any> }
  const name = path.split('/').pop()?.split('.')[0]
  if (name) {
    reducers[name] = slice.default
  }
}
const store = configureStore({
  reducer: reducers
})

export default store
// 只是加上了类型定义
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
