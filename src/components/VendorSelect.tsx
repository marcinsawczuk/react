import { useDispatch } from 'react-redux'
import { Vendor } from '../enums/vendor.enum'
import { setVendor } from '../features/form/formSlice'

export default function VendorSelect() {
  const dispatch = useDispatch()

  return (
    <select onChange={e => dispatch(setVendor(e.target.value as Vendor))}>
      <option value="">-- wybierz vendora --</option>
      {Object.values(Vendor).map(v => (
        <option key={v} value={v}>
          {v}
        </option>
      ))}
    </select>
  )
}
