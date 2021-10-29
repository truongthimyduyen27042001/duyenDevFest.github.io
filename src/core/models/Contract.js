// GET /api/v1/contracts // Token required
// GET /api/v1/contracts/:id // Token required
// POST /api/v1/contracts // Token required
// PUT /api/v1/contracts/:id // Token required
// DELETE /api/v1/contracts/:id // Token required

export const Contract = () => {
  return {
    contractId: 'contractId', // Backend tự generate
    contractCode: 'contractCode', // Backend tự generate
    contractName: 'contractName', // Required
    contractDescription: 'contractDescription',
    contractType: 'contractType', // Required
    contractStatus: 'contractStatus', // Backend tự generate, PENDING, ACCEPTED, REJECTED
    contractStartDate: 'contractStartDate', // Required
    contractEndDate: 'contractEndDate', // Nếu null thì là hợp đồng vô hạn
    employeeId: 'employeeId', // Required
    employeeSignedAt: new Date(),
    employeeSignature: 'employeeSignature', // Base 64 string
    companyId: 'companyId', // Required
    companySignedAt: new Date(),
    companySignature: 'companySignature', // Base 64 string
    contractFields: [
      {
        sectionName: 'Điều khoản chung', // Required
        sectionFields: [
          {
            key: '',
            label: 'Địa điểm làm việc',
            type: 'INPUT_TEXT',
            value: '',
            style: {
              width: '100%',
            },
          },
          {
            key: '',
            label: 'Bộ phận công tác',
            type: 'INPUT_TEXT',
            value: '',
            style: {
              width: '100%',
            },
          },
          {
            key: '',
            label: 'Chức danh chuyên môn (vị trí công tác)',
            type: 'INPUT_TEXT',
            value: '',
            style: {
              width: '100%',
            },
          },
          {
            key: '',
            label: '',
            type: 'DISPLAY_TEXT',
            value:
              'Thực hiện công việc theo đúng chức danh chuyên môn của mình dưới sự quản lý, điều hành của người có thẩm quyền.',
            style: {
              width: '100%',
            },
          },
          {
            key: '',
            label: '',
            type: 'DISPLAY_TEXT',
            value:
              'Phối hợp cùng với các bộ phận, phòng ban khác trong Công ty để phát huy tối đa hiệu quả công việc.',
            style: {
              width: '100%',
            },
          },
        ],
      },
      {
        sectionName: 'Quyền và nghĩa vụ của người lao động', // Required
        sectionFields: [
          {
            key: '',
            label: '1. Quyền của người lao động',
            type: 'DISPLAY_TEXT',
            value: '',
            style: {
              fontWeight: 'bold',
              width: '100%',
            },
          },
          {
            key: '',
            label: 'a) Tiền lương và phụ cấp:',
            type: 'DISPLAY_TEXT',
            value: '',
            style: {
              width: '100%',
            },
          },
          {
            key: '',
            label: 'Mức lương/Thù lao chính:',
            type: 'INPUT_TEXT',
            value: '',
            style: {
              width: '100%',
            },
          },
          {
            key: '',
            label: 'Phụ cấp trách nhiệm (nếu có):',
            type: 'INPUT_TEXT',
            value: '',
            style: {
              width: '100%',
            },
          },
          {
            key: '',
            label: '',
            type: 'DISPLAY_TEXT',
            value:
              'Phụ cấp hiệu suất công việc (nếu có): Theo đánh giá của quản lý.',
            style: {
              width: '100%',
            },
          },
          {
            key: '',
            label: '',
            type: 'DISPLAY_TEXT',
            value:
              'Lương hiệu quả (nếu có): Theo quy định của phòng ban, công ty.',
            style: {
              width: '100%',
            },
          },
        ],
      },
    ],
    createdAt: new Date(),
  }
}
