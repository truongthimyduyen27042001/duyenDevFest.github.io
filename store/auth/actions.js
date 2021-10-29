// See docs on how should we handle the API
// https://vuex.vuejs.org/#what-is-a-state-management-pattern
export default {
  async signinAsCompany({ commit }, form) {
    const { data } = await await this.$axios.$post('/auth/company/signin', form);
    localStorage.setItem('auth', data)
    commit('SET_AUTH', data) // Mutating to store for client rendering
    return data
  },

  async signinAsEmployee({ commit }, form) {
    const { data } = await await this.$axios.$post('/auth/employee/signin', form);
    localStorage.setItem('auth', data)
    commit('SET_AUTH', data) // Mutating to store for client rendering
    return data
  },
};
