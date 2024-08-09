import { IAnimal } from '@/modules/CatsOOP/components/Animal/interfaces'

export interface IEvolvedAnimal extends IAnimal {
  onClick: () => void
}
