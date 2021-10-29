// GET /api/v1/companies/:id // Token required
// PUT /api/v1/companies/:id // Token required

export const Company = () => {
  return {
    companyId: 'companyId', // Backend tự gen
    companyName: 'companyName', // Required
    companyEmail: 'companyEmail', // Required
    companyPhone: 'companyPhone', // Required
    companyAddress: 'companyAddress', // Required
    managerName: 'managerName', // Required
    managerPhone: 'managerPhone', // Required
    managerEmail: 'managerEmail', // Required
    managerIdNumber: 'managerIdNumber', // Required
    createdAt: new Date(), // Backend tự gen
  }
}
