import { useDispatch } from 'react-redux'
import { ApiName } from '../enums/api.enum'
import { setApi } from '../features/form/formSlice'

export default function ApiSelect() {
  const dispatch = useDispatch()

  return (
    <select onChange={e => dispatch(setApi(e.target.value as ApiName))}>
      <option value="">-- wybierz api --</option>
      {Object.values(ApiName).map(a => (
        <option key={a} value={a}>
          {a}
        </option>
      ))}
    </select>
  )
}
