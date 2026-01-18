import { useDispatch } from 'react-redux'
import { updateField } from '../formSlice'

export default function VendorA_CreateOrder() {
  const dispatch = useDispatch()

  return (
    <>
      <input
        placeholder="Order name"
        onChange={e =>
          dispatch(updateField({ key: 'orderName12', value: e.target.value }))
        }
      />
      <input
        placeholder="Order name"
        onChange={e =>
          dispatch(updateField({ key: 'orderName13', value: e.target.value }))
        }
      />
    </>
  )
}
