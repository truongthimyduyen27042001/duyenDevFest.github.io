import { AuthService } from '@/services/auth'

const authService = new AuthService()

export const actions = {
  async signinAsCompany({ commit }, form) {
    const { data } = await authService.signinAsCompany(form)
    localStorage.setItem('auth', data)
    commit('SET_AUTH', data) // Mutating to store for client rendering
    return data
  },

  async signinAsEmployee({ commit }, form) {
    const { data } = await authService.signinAsEmployee(form)
    localStorage.setItem('auth', data)
    commit('SET_AUTH', data) // Mutating to store for client rendering
    return data
  },

  signout({ commit }) {
    localStorage.removeItem('auth')
    commit('SET_AUTH', null)
  },
}
