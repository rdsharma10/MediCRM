export const mockDevices = [
  { id: 'DVC001', type: 'ECG Monitor', facility: 'City Hospital', status: 'Online', battery: 85, lastService: '2024-05-01', lastInstallation: '2023-12-15', contract: 'AMC (2024-12-31)' },
  { id: 'DVC002', type: 'Infusion Pump', facility: 'Metro Clinic', status: 'Maintenance', battery: 60, lastService: '2024-04-10', lastInstallation: '2023-11-20', contract: 'CMC (2025-03-15)' },
];

export const mockInstallations = [
  { id: 'INST001', deviceId: 'DVC001', facility: 'City Hospital', date: '2024-05-10', status: 'Completed', photos: [], checklist: 'Checked all cables', training: 'Completed' },
];

export const mockServices = [
  { id: 'SRV001', notes: 'Routine check', date: '2024-05-15', engineer: 'John Doe', purpose: 'Preventive', attachments: [] },
];

export const mockContracts = [
  { id: 'CON001', deviceId: 'DVC001', contractType: 'AMC', startDate: '2023-12-31', endDate: '2024-12-31', status: 'Active' },
  { id: 'CON002', deviceId: 'DVC002', contractType: 'CMC', startDate: '2024-01-15', endDate: '2025-01-15', status: 'Active' },
  { id: 'CON003', deviceId: 'DVC003', contractType: 'AMC', startDate: '2023-06-01', endDate: '2024-06-01', status: 'Expiring Soon' },
  { id: 'CON004', deviceId: 'DVC004', contractType: 'CMC', startDate: '2022-09-10', endDate: '2023-09-10', status: 'Expired' },
];

export const mockAlerts = [
  { id: 'ALT001', deviceId: 'DVC002', alertType: 'Battery Low', description: 'Battery below 20%', photos: [], status: 'Open' },
];

export const mockFacilities = [
  { id: 'FAC001', name: 'City Hospital' },
  { id: 'FAC002', name: 'Metro Clinic' },
]; 