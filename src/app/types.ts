interface rootItemData {
  type: string
  label: string
  required?: boolean
  description?: string
  placeholder?: string
}

export interface InputData extends rootItemData {
  type: 'input'
  value?: string
  extraValues?: string[]
}

export interface SelectData extends rootItemData {
  type: 'select'
  choices: string[]
  currentChoice?: number
}

export interface NumberData extends rootItemData {
  type: 'number'
  value: string
}

export interface CheckboxData extends rootItemData {
  type: 'checkbox'
  choices: { label: string, checked: boolean }[]
}

export type FormData = (InputData | SelectData | NumberData | CheckboxData)[]

export interface IForm {
  id: string
  data: FormData
}
