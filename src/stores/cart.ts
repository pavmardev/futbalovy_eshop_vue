import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      productList: [],
      
    }
  },
  actions: {
    loadProducts() {
      this.productList = []
      for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            const value = sessionStorage.getItem(key);
            this.productList.push(JSON.parse(value))
    }
  },
  removeProduct(product: Number) {
     sessionStorage.removeItem(String(product))
    this.loadProducts()
  },
  addProduct(product: {id: number}) {
    sessionStorage.setItem(String(product.id), JSON.stringify(product))
    this.loadProducts()
  }
  },
  getters: {
    getListLength(state) {
      return state.productList.length
    }
  }
})
