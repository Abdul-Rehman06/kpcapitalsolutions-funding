import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertTriangle, ArrowLeft, Check, ChevronRight, Lock } from 'lucide-react';
import { useCalculatorStore } from '../store';
import { calculateScore, getFundingRange, getPrograms, getTier } from '../scoring';

const questions = [
  {
    step: 1,
    title: 'How long has your business been operating?',
    field: 'businessAge',
    options: ['Under 1 Year', '1-2 Years', '2-5 Years', '5+ Years'],
  },
  {
    step: 2,
    title: 'What is your average monthly revenue?',
    field: 'monthlyRevenue',
    options: ['Under 10K', '10K-25K', '25K-50K', '50K-100K', '100K-250K', '250K+'],
  },
  {
    step: 3,
    title: 'What is your annual personal income?',
    field: 'personalIncome',
    options: ['Under 50K', '50K-100K', '100K+'],
  },
  {
    step: 4,
    title: 'Do you own your primary residence?',
    field: 'ownResidence',
    options: ['Yes', 'No'],
  },
  {
    step: 5,
    title: 'What is your estimated credit score?',
    field: 'creditScore',
    options: ['Below 600', '600-649', '650-699', '700-749', '750+'],
  },
  {
    step: 6,
    title: 'Do you have recent business bank statements?',
    field: 'bankStatements',
    options: ['Yes', 'No'],
  },
  {
    step: 7,
    title: 'What will the funding be used for? (Select all that apply)',
    field: 'fundingPurpose',
    options: ['Working Capital', 'Equipment', 'Real Estate', 'Payroll', 'Expansion', 'Acquisition'],
    multiple: true,
  },
  {
    step: 8,
    title: 'How much funding are you seeking?',
    field: 'fundingAmount',
    options: ['Under 50K', '50K-100K', '100K-250K', '250K-500K', '500K+'],
  },
] as const;

type LeadFormValues = {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  phone: string;
  fundingNeeded: string;
  revenue: string;
  credit: string;
  notes: string;
};

export function CalculatorPage() {
  const { step, nextStep, prevStep, setAnswer, togglePurpose, ...state } = useCalculatorStore();
  const totalSteps = questions.length;
  const currentQuestion = questions.find((question) => question.step === step);
  const isResult = step > totalSteps;

  const canProceed = useMemo(() => {
    if (!currentQuestion) return false;
    if ('multiple' in currentQuestion && currentQuestion.multiple) {
      return state.fundingPurpose.length > 0;
    }
    return Boolean((state as Record<string, unknown>)[currentQuestion.field]);
  }, [currentQuestion, state]);

  const handleOptionClick = (option: string) => {
    if (currentQuestion && 'multiple' in currentQuestion && currentQuestion.multiple) {
      togglePurpose(option as never);
      return;
    }

    if (!currentQuestion) return;

    setAnswer(currentQuestion.field, option);
    window.setTimeout(() => {
      nextStep();
    }, 220);
  };

  if (isResult) {
    return <CalculatorResult />;
  }

  return (
    <main className="min-h-[calc(100vh-120px)] flex-grow bg-[#fafafa] pb-24 pt-16 text-navy-900">
      <div className="mb-12 px-6 text-center">
        <div className="mb-4 inline-block rounded-full bg-gold-500/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-gold-600">
          Free Assessment
        </div>
        <h1 className="mb-3 font-serif text-3xl font-bold text-navy-900 md:text-4xl">Funding Eligibility Calculator</h1>
        <p className="mx-auto max-w-lg text-sm text-gray-500">
          Answer a few questions. Get a personalized capital stack estimate based on your actual business profile.
        </p>
      </div>

      <div className="mx-auto w-full max-w-xl px-6">
        <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl shadow-navy-900/5">
          <div className="h-1.5 w-full bg-gray-100">
            <motion.div
              className="h-full bg-gold-500"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8 flex items-center">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="mr-4 text-gray-400 transition-colors hover:text-navy-900"
                  aria-label="Previous step"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
              ) : null}
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Step {step} of {totalSteps}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="mb-8 font-serif text-2xl font-bold text-navy-900">{currentQuestion?.title}</h2>

                <div className="space-y-3">
                  {currentQuestion?.options.map((option) => {
                    const selectedValue =
                      currentQuestion ? (state as unknown as Record<string, unknown>)[currentQuestion.field] : undefined;
                    const isSelected =
                      currentQuestion && 'multiple' in currentQuestion && currentQuestion.multiple
                        ? state.fundingPurpose.includes(option as never)
                        : selectedValue === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleOptionClick(option)}
                        className={`group flex w-full items-center justify-between rounded-md border-2 px-6 py-4 text-left transition-all duration-200 ${
                          isSelected ? 'border-gold-500 bg-gold-500/5' : 'border-gray-200 hover:border-navy-900 hover:bg-gray-50'
                        }`}
                      >
                        <span className={`text-sm font-semibold ${isSelected ? 'text-navy-900' : 'text-gray-600 group-hover:text-navy-900'}`}>
                          {option}
                        </span>
                        <div
                          className={`flex h-5 w-5 items-center justify-center border-2 transition-colors ${
                            currentQuestion && 'multiple' in currentQuestion && currentQuestion.multiple ? 'rounded-sm' : 'rounded-full'
                          } ${
                            isSelected ? 'border-gold-500 bg-gold-500 text-white' : 'border-gray-300 group-hover:border-navy-900'
                          }`}
                        >
                          {isSelected ? <Check className="h-3 w-3" strokeWidth={3} /> : null}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {currentQuestion && 'multiple' in currentQuestion && currentQuestion.multiple ? (
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canProceed}
                      className={`flex w-full items-center justify-center gap-2 rounded-md py-4 text-sm font-bold uppercase tracking-widest transition-all ${
                        canProceed ? 'bg-gold-500 text-white hover:bg-gold-400' : 'cursor-not-allowed bg-gray-200 text-gray-400'
                      }`}
                    >
                      Continue
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}

function CalculatorResult() {
  const state = useCalculatorStore();
  const score = calculateScore(state);
  const tier = getTier(score);
  const estimatedFunding = getFundingRange(tier);
  const qualifiedPrograms = getPrograms(tier, state);

  const unlockedPrograms = qualifiedPrograms.slice(0, Math.min(qualifiedPrograms.length, 4));
  const lockedPrograms = [
    'Commercial Real Estate',
    'Business Acquisition',
    'Premium SBA Programs',
    'Strategic Bridge Debt',
  ].filter((program) => !qualifiedPrograms.includes(program));

  const recommendations = [
    state.businessAge === 'Under 1 Year' ? 'Startup Programs Limited' : null,
    state.creditScore === 'Below 600' ? 'Focus on Credit Improvement' : null,
    state.bankStatements === 'No' ? 'Prioritize Revenue Funding and Alternative Capital' : null,
    state.monthlyRevenue === '100K-250K' || state.monthlyRevenue === '250K+' ? 'Premium Programs Unlocked' : null,
  ].filter(Boolean) as string[];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    defaultValues: {
      fundingNeeded: state.fundingAmount,
      revenue: state.monthlyRevenue,
      credit: state.creditScore,
    },
  });

  const onSubmit = async (lead: LeadFormValues) => {
    const payload = {
      score,
      tier,
      estimatedFunding,
      qualifiedPrograms,
      answers: state,
      recommendations,
      lead,
    };

    console.log('GoHighLevel payload', payload);
    await new Promise((resolve) => setTimeout(resolve, 600));
    window.alert('Application submitted! We will contact you shortly.');
  };

  return (
    <main className="flex-grow bg-[#fafafa] pb-24 pt-12">
      <div className="bg-navy-900 px-6 py-16 text-center text-white">
        <div className="mb-4 inline-block rounded-full bg-gold-500/20 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-gold-500">
          Free Assessment
        </div>
        <h1 className="mb-3 font-serif text-3xl font-bold md:text-4xl">Funding Eligibility Calculator</h1>
        <p className="mx-auto max-w-lg text-sm text-gray-400">
          Answer a few questions. Get a personalized capital stack estimate based on your actual business profile.
        </p>
      </div>

      <div className="-mt-8 mx-auto max-w-2xl space-y-6 px-6">
        {recommendations.length > 0 ? (
          <div className="flex gap-4 rounded-lg border border-orange-100 bg-orange-50 p-6 shadow-sm">
            <div className="mt-1 text-orange-500">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="mb-1 text-sm font-bold text-orange-900">Profile Warning</h4>
              <p className="text-xs leading-relaxed text-orange-800/80">{recommendations.join(' • ')}</p>
            </div>
          </div>
        ) : null}

        <div className="rounded-lg bg-navy-900 p-8 text-white shadow-xl">
          <div className="mb-6 flex items-start justify-between">
            <div className="rounded bg-white/10 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest">{tier} Profile</div>
            <Check className="h-5 w-5 text-gold-500" />
          </div>
          <div className="mb-2 text-xs uppercase tracking-widest text-gray-400">Estimated Funding Range</div>
          <div className="mb-2 font-serif text-4xl font-bold text-white">{estimatedFunding}</div>
          <div className="text-xs text-gray-400">Qualification score: {score} | Based on {qualifiedPrograms.length} qualifying programs</div>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
          <h3 className="mb-2 font-serif text-lg font-bold text-navy-900">Your Qualifying Programs</h3>
          <p className="mb-6 text-xs text-gray-500">Unlocked programs are visible below. Full lender sequencing is included after lead capture.</p>

          <div className="space-y-3">
            {unlockedPrograms.map((program) => (
              <div key={program} className="flex items-center justify-between border-b border-gray-100 py-3">
                <span className="text-sm font-semibold text-gray-700">{program}</span>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-emerald-700">
                  Unlocked
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-dashed border-gray-200 bg-gray-50 p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-navy-900">
              <Lock className="h-4 w-4 text-gold-500" />
              Locked Programs
            </div>
            <div className="flex flex-wrap gap-2">
              {lockedPrograms.map((program) => (
                <span key={program} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-500 shadow-sm">
                  {program}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-navy-900 p-8 text-white shadow-xl">
          <h3 className="mb-2 font-serif text-xl font-bold">Unlock Your Full Capital Stack Report</h3>
          <p className="mb-8 text-xs leading-relaxed text-gray-400">
            Complete the short application below. A funding advisor will review your profile and reach out within 1 business day.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="rounded bg-white p-8 text-navy-900">
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="First Name *" error={errors.firstName?.message}>
                  <input
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none"
                  />
                </FormField>
                <FormField label="Last Name *" error={errors.lastName?.message}>
                  <input
                    {...register('lastName', { required: 'Last name is required' })}
                    className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none"
                  />
                </FormField>
              </div>

              <FormField label="Business Name *" error={errors.businessName?.message}>
                <input
                  {...register('businessName', { required: 'Business name is required' })}
                  className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none"
                />
              </FormField>

              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="Email Address *" error={errors.email?.message}>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none"
                  />
                </FormField>
                <FormField label="Phone Number *" error={errors.phone?.message}>
                  <input
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none"
                  />
                </FormField>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <FormField label="Funding Needed *" error={errors.fundingNeeded?.message}>
                  <input
                    {...register('fundingNeeded', { required: 'Funding amount is required' })}
                    className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none"
                  />
                </FormField>
                <FormField label="Revenue">
                  <input
                    {...register('revenue')}
                    className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none"
                  />
                </FormField>
                <FormField label="Credit">
                  <input
                    {...register('credit')}
                    className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none"
                  />
                </FormField>
              </div>

              <FormField label="Notes">
                <textarea
                  rows={4}
                  {...register('notes')}
                  className="w-full rounded border border-gray-200 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none"
                />
              </FormField>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded bg-gold-500 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : 'Unlock Report'}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-[0.65rem] text-gray-500">No obligation. We only get paid when you get funded.</div>
        </div>
      </div>
    </main>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-700">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
