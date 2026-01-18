import { Vendor } from '../enums/vendor.enum'
import { ApiName } from '../enums/api.enum'
import VendorAForm from '../features/form/forms/VendorA_CreateOrder'
import VendorBForm from '../features/form/forms/VendorB_CreateOrder'
import type { JSX } from 'react'

type ApiConfigType = {
  [V in Vendor]: {
    [A in ApiName]: {
      url: string
      component: () => JSX.Element
    }
  }
}

export const apiConfig: ApiConfigType = {
  [Vendor.VENDOR_A]: {
    [ApiName.CREATE_ORDER]: { url: '/api/vendor-a/create', component: VendorAForm },
  },
  [Vendor.VENDOR_B]: {
    [ApiName.CREATE_ORDER]: { url: '/api/vendor-b/create', component: VendorBForm },
  },
}
