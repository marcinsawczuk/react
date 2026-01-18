import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Vendor } from '../../enums/vendor.enum'
import type { ApiName } from '../../enums/api.enum'

interface FormState {
  vendor?: Vendor
  api?: ApiName
  data: Record<string, unknown>
}

const initialState: FormState = { data: {} }

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setVendor: (state, action: PayloadAction<Vendor>) => {
      state.vendor = action.payload
      state.api = undefined     // <-- reset API
      state.data = {}           // <-- reset danych formularza
    },
    setApi: (state, action: PayloadAction<ApiName>) => {
      state.api = action.payload
      state.data = {}           // <-- reset danych przy zmianie API
    },
    updateField: (
      state,
      action: PayloadAction<{ key: string; value: unknown }>
    ) => {
      state.data[action.payload.key] = action.payload.value
    },
  },
})

export const { setVendor, setApi, updateField } = formSlice.actions
export default formSlice.reducer
