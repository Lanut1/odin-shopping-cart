import { meatItems } from "./mockItems"
import { MeatItem } from "./types"

export const fetchMeatItems = (): Promise<MeatItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(meatItems)
    }, 500)
  })
}