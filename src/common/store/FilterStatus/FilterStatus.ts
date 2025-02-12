import { create } from 'zustand'
type Store = {
    region?: string,
    platform?: string,
    min_price?: string,
    max_price?: string,
    changeMinPrice: (min_price: string) => void,
    changeMaxPrice: (max_price: string) => void,
    changePlatform: (platform: string) => void,
    changeRegion: (regin: string) => void,
}
export const FilterStore = create<Store>()((set) => ({
    region: '',
    changeRegion: (region) => set((state) => ({region: region})),
    platform: '',
    changePlatform: (platform) => set((state) => ({platform: platform})),
    max_price: '',
    changeMaxPrice: (max) => set((state) => ({max_price: max})),
    min_price: '',
    changeMinPrice: (min) => set({ min_price: min }),
}))

