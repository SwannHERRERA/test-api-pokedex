export const state = () => ({
  currentPage: 1,
  maxPage: 60,
})

export const mutations = {
  increment(state) {
    if (state.currentPage >= state.maxPage) return
    state.currentPage += 1
  },
  decrement(state) {
    if (state.currentPage <= 1) return

    state.currentPage -= 1
  },
  setPage(state, page) {
    state.currentPage = page
  },
}

export const getters = {
  get(state) {
    return { currentPage: state.currentPage, maxPage: state.maxPage }
  },
}
