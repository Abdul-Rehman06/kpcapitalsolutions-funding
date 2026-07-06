import type { CalculatorState } from './store';

export const calculateScore = (state: CalculatorState) => {
  let score = 0;

  // Business Age
  switch (state.businessAge) {
    case 'Under 1 Year': score += 5; break;
    case '1-2 Years': score += 15; break;
    case '2-5 Years': score += 30; break;
    case '5+ Years': score += 40; break;
  }

  // Revenue
  switch (state.monthlyRevenue) {
    case 'Under 10K': score += 5; break;
    case '10K-25K': score += 20; break;
    case '25K-50K': score += 35; break;
    case '50K-100K': score += 50; break;
    case '100K-250K': score += 65; break;
    case '250K+': score += 80; break;
  }

  // Income
  switch (state.personalIncome) {
    case 'Under 50K': score += 10; break;
    case '50K-100K': score += 25; break;
    case '100K+': score += 40; break;
  }

  // Residence
  if (state.ownResidence === 'Yes') score += 20;

  // Credit
  switch (state.creditScore) {
    case 'Below 600': score += 5; break;
    case '600-649': score += 15; break;
    case '650-699': score += 30; break;
    case '700-749': score += 45; break;
    case '750+': score += 60; break;
  }

  // Statements
  if (state.bankStatements === 'Yes') score += 30;

  // Funding Purpose
  const purposePoints = Math.min(state.fundingPurpose.length * 5, 30);
  score += purposePoints;

  return score;
};

export const getTier = (score: number) => {
  if (score <= 80) return 'Bronze';
  if (score <= 140) return 'Silver';
  if (score <= 190) return 'Gold';
  return 'Platinum';
};

export const getFundingRange = (tier: string) => {
  switch (tier) {
    case 'Bronze': return '$10K - $50K';
    case 'Silver': return '$50K - $100K';
    case 'Gold': return '$100K - $250K';
    case 'Platinum': return '$250K - $500K+';
    default: return '$0';
  }
};

export const getPrograms = (tier: string, state: CalculatorState) => {
  let programs: string[] = [];

  switch (tier) {
    case 'Bronze':
      programs = ['Merchant Cash Advance', 'Starter Working Capital'];
      break;
    case 'Silver':
      programs = ['Business Line of Credit', 'Equipment Financing', 'Revenue Financing'];
      break;
    case 'Gold':
      programs = ['SBA Express', 'Business LOC', 'Equipment Financing', 'Bridge Loans'];
      break;
    case 'Platinum':
      programs = ['SBA 7a', 'SBA 504', 'Business Acquisition', 'Commercial Real Estate', 'Working Capital', 'Equipment Financing', 'Bridge Loans', 'Business LOC'];
      break;
  }

  // Smart Logic Overrides
  if (state.bankStatements === 'No') {
    programs = programs.filter(p => !p.includes('SBA'));
    if (!programs.includes('Revenue Financing') && (tier === 'Silver' || tier === 'Gold' || tier === 'Platinum')) {
      programs.push('Revenue Financing');
    }
  }

  if (state.monthlyRevenue === 'Under 10K') {
    programs = programs.filter(p => p !== 'SBA 7a' && p !== 'SBA 504');
  }

  return programs;
};
