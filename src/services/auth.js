import { clientApi } from '@/core/apis/client'

export class AuthService {
  signinAsCompany = (form) => clientApi.post('/auth/company/signin', form)
  signinAsEmployee = (form) => clientApi.post('/auth/employee/signin', form)
}
