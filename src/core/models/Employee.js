// GET /api/v1/employees/:id // Token required
// PUT /api/v1/employees/:id // Token required

export const Employee = () => {
  return {
    employeeId: 'employeeId', // Backend tự gen
    employeeName: 'employeeName', // Required
    employeeEmail: 'employeeEmail', // Required
    employeePhone: 'employeePhone', // Required
    employeeAddress: 'employeeAddress', // Required
    employeeBirthday: 'employeeBirthday', // Required
    employeeIdNumber: 'employeeIdNumber', // Required
    createdAt: new Date(), // Backend tự gen
  }
}
