export const ApiName = {
  CREATE_ORDER: 'CREATE_ORDER',
} as const

export type ApiName = typeof ApiName[keyof typeof ApiName]