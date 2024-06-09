/// <reference types="vite/client" />

declare module '@/assets/*'
declare module '@/content/*'
declare module 'virtual:routes'

type Status = 'New' | 'Used' | 'Damaged' | null | {}
type Gearbox = 'Manual' | 'Automatic' | null | {}
type Fule =
  | 'Ethanol'
  | 'Diesel'
  | 'Gas'
  | 'Hydrogen'
  | 'Electric'
  | 'Petrol'
  | null
  | {}

interface Car {
  id: string
  model: string
  company: string
  description: string
  price: number
  images: string[]
  seller: string
  gearbox: Gearbox
  fule: Fule
  milage: number
  status: Status
  seats: number
}

interface Filter {
  q?: string | null
  status?: Status | null
  fule?: Fule | null
  gearbox?: Gearbox | null
}
