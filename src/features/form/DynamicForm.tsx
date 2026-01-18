import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'
import { apiConfig } from '../../config/apiConfig'
import { useState } from 'react'

export default function DynamicForm() {
  const { vendor, api, data } = useSelector((state: RootState) => state.form)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<any>(null)

  if (!vendor || !api) return null

  const config = apiConfig[vendor]?.[api]
  const FormComponent = config?.component
  if (!FormComponent) return <div>Brak formularza</div>

  const handleSubmit = async () => {
    if (!config) return
    console.log('Dane do wysłania:', data)
    setLoading(true)
    try {
      const res = await fetch(config.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      setResponse(json)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <FormComponent key={`${vendor}-${api}`} />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Wysyłanie...' : 'Wyślij'}
      </button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  )
}
