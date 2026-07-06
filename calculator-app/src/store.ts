import { create } from 'zustand';

export type FundingPurpose = 'Working Capital' | 'Equipment' | 'Real Estate' | 'Payroll' | 'Expansion' | 'Acquisition';

export interface CalculatorState {
  step: number;
  businessAge: string;
  monthlyRevenue: string;
  personalIncome: string;
  ownResidence: string;
  creditScore: string;
  bankStatements: string;
  fundingPurpose: FundingPurpose[];
  fundingAmount: string;
  
  // Actions
  nextStep: () => void;
  prevStep: () => void;
  setAnswer: (field: string, value: any) => void;
  togglePurpose: (purpose: FundingPurpose) => void;
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  step: 1,
  businessAge: '',
  monthlyRevenue: '',
  personalIncome: '',
  ownResidence: '',
  creditScore: '',
  bankStatements: '',
  fundingPurpose: [],
  fundingAmount: '',

  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })),
  setAnswer: (field, value) => set({ [field]: value }),
  togglePurpose: (purpose) => set((state) => {
    const exists = state.fundingPurpose.includes(purpose);
    if (exists) {
      return { fundingPurpose: state.fundingPurpose.filter(p => p !== purpose) };
    } else {
      return { fundingPurpose: [...state.fundingPurpose, purpose] };
    }
  }),
}));
