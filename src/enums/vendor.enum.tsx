export const Vendor = {
  VENDOR_A: 'VENDOR_A',
  VENDOR_B: 'VENDOR_B',
   VENDOR_C: 'VENDOR_C',
} as const

export type Vendor = typeof Vendor[keyof typeof Vendor]
