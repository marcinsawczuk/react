import { useDispatch } from 'react-redux'
import { updateField } from '../formSlice'

export default function VendorB_CreateOrder() {
  const dispatch = useDispatch()

  return (
    <>
      <input
        placeholder="Order name Vendor2"
        onChange={e =>
          dispatch(updateField({ key: 'orderNamer', value: e.target.value }))
        }
      />
       <input
        placeholder="Order Value Vendor2"
        onChange={e =>
          dispatch(updateField({ key: 'orderNamek', value: e.target.value }))
        }
      />
    </>
  )
}
