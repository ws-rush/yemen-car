/// <reference types="vite/client" />

declare module '@/assets/*'
declare module '@/content/*'
declare module 'virtual:routes'

type Status = 'New' | 'Used' | 'Damaged'
type Gearbox = 'Manual' | 'Automatic'
type Fule = 'Ethanol' | 'Diesel' | 'Gas' | 'Hydrogen' | 'Electric' | 'Petrol'

interface Car {
  id: string
  model: string
  company: string
  description: string
  price: number
  images: string[]
  seller: string
  gearbox: Gearbox
  fuel: Fule
  milage: number
  status: Status
}
