import { ArrowRight, Check, ChevronLeft, ChevronRight, Clock3, Mail, MapPin, MonitorPlay, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const homeStats = [
  { value: '$500K+', label: 'Average Funding Amount' },
  { value: '72hrs', label: 'Fastest Loan Approval' },
  { value: '100%', label: 'Funding Commitment' },
  { value: '$25M+', label: 'Funding Capital Deployed' },
];

const operatorMarkets = [
  'Real Estate Investors',
  'E-Commerce',
  'Real Estate Developers',
  'Healthcare Practices',
  'Business Acquisitions',
  'Manufacturing',
  'Trades & Contractors',
  'Professional Services',
];

const capitalStackCards = [
  {
    title: 'SBA 7(a) Loans',
    cap: 'UP TO $5M',
    body: 'The most versatile SBA loan program. Ideal for businesses with strong revenue history looking to fund major growth initiatives, acquisitions, or real estate.',
  },
  {
    title: 'SBA 504 Loans',
    cap: 'UP TO $10M+',
    body: 'Long-term, fixed-rate financing for major fixed assets. If you are buying a building or major equipment, this is the most cost-effective structure available.',
  },
  {
    title: 'Business Lines of Credit',
    cap: 'UP TO $500K',
    body: 'Revolving access to capital for operational needs. We have relationships with regional and national banks that most business owners cannot access on their own.',
  },
  {
    title: 'Equipment Financing',
    cap: 'UP TO $5M',
    body: 'Finance any business equipment with the asset as collateral. Trucks, machinery, technology, medical equipment if it is used for business, we can finance it.',
  },
  {
    title: 'Working Capital',
    cap: 'UP TO $500K',
    body: 'Short-term capital for payroll, inventory, marketing, and operational gaps. Fast approvals for qualified businesses with consistent revenue.',
  },
  {
    title: '0% APR Credit Stacking',
    cap: 'UP TO $250K',
    body: 'Strategic deployment of 0% introductory business credit cards to maximize total approved limits when used correctly.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Onboard & Prep',
    body: 'We review your current financials and profile for single admission across multiple lenders. No hard pulls, clear picture of your position.',
  },
  {
    number: '02',
    title: 'Strategy & Sequencing',
    body: 'We design your custom capital stack with the exact order of operations, banks, tiers, and lenders to target based on your criteria.',
  },
  {
    number: '03',
    title: 'The Bank Run Applications',
    body: 'Our team interfaces directly with bank reps, management, and lenders to push your file through to maximum total funding approval.',
  },
];

const services = [
  {
    title: 'SBA 7(a) Loans',
    amount: '$150K-$5M',
    timeline: '10-30 days',
    eyebrow: 'Ideal for: established businesses with 2+ years in operation',
    body: 'The most versatile SBA loan program. Ideal for businesses with strong revenue history looking to fund major growth initiatives, acquisitions, or real estate.',
    bullets: [
      'Working capital, equipment, real estate, acquisitions',
      'Up to 25 year repayment terms',
      'Competitive interest rates',
      'Partial personal guarantee may apply',
      'We manage the entire application and underwriting process',
    ],
  },
  {
    title: 'SBA 504 Loans',
    amount: '$150K-$20M',
    timeline: '10-45 days',
    eyebrow: 'Ideal for: businesses purchasing commercial real estate or heavy equipment',
    body: 'Long-term, fixed-rate financing for major fixed assets. If you are buying a building or major equipment, this is the most cost-effective structure available.',
    bullets: [
      'Fixed, below-market interest rates',
      '10, 20, or 25 year terms',
      'Only 10% down payment required',
      'Cannot be used for working capital',
      'Ideal for owner-occupied commercial real estate',
    ],
  },
  {
    title: 'Business Lines of Credit',
    amount: '$25K-$500K',
    timeline: '1-10 days',
    eyebrow: 'Ideal for: businesses with strong bank statement history',
    body: 'Revolving access to capital for operational needs. We have relationships with regional and national banks that most business owners cannot access on their own.',
    bullets: [
      'Revolving access - draw and repay as needed',
      'Regional and national bank relationships',
      'No collateral required for many programs',
      '12-36 month terms, renewable',
      'We coordinate directly with bank representatives',
    ],
  },
  {
    title: 'Equipment Financing',
    amount: '$25K-$5M',
    timeline: '1-10 days',
    eyebrow: 'Ideal for: any business purchasing business-use equipment',
    body: 'Finance any business equipment with the asset as collateral. Trucks, machinery, technology, medical equipment if it is used for business, we can finance it.',
    bullets: [
      'Equipment serves as collateral',
      'Preserve cash flow and working capital',
      'New and used equipment eligible',
      'Soft costs often included',
      'Rates from 5-10% depending on profile',
    ],
  },
  {
    title: 'Working Capital',
    amount: '$25K-$500K',
    timeline: '24-72 hours',
    eyebrow: 'Ideal for: businesses with 6+ months in operation and consistent revenue',
    body: 'Short-term capital for payroll, inventory, marketing, and operational gaps. Fast approvals for qualified businesses with consistent revenue.',
    bullets: [
      'Term loan and line of credit options',
      'Minimal documentation required',
      'Fast approvals for qualified businesses',
      '6-24 month terms',
      'Bridge to longer-term financing',
    ],
  },
  {
    title: '0% APR Credit Stacking',
    amount: '$50K-$250K',
    timeline: '15-30 days',
    eyebrow: 'Ideal for: business owners with high personal credit',
    body: 'One of the most powerful tools in the capital stack when used correctly. Strategic deployment of 0% introductory business credit cards.',
    bullets: [
      '0% introductory APR for 12-21 months',
      'Multiple issuers, properly sequenced',
      'No impact to business credit',
      'Ideal for marketing, inventory, vendor payments',
      'Strategic deployment - not a standalone strategy',
    ],
  },
  {
    title: 'Business Acquisition Financing',
    amount: '$100K-$5M',
    timeline: '30-60 days',
    eyebrow: 'Ideal for: buyers with industry experience and strong personal credit',
    body: 'Buying an existing business is one of the fastest paths to scale. We structure the financing, identify the right lenders, and manage the process from LOI to close.',
    bullets: [
      'SBA 7(a) is the primary vehicle',
      'Seller financing structures',
      'Partial down payment programs',
      'We review the deal structure before application',
      'Lender relationships across acquisition-focused banks',
    ],
  },
  {
    title: 'Bridge & Construction Financing',
    amount: '$100K-$10M',
    timeline: '14-45 days',
    eyebrow: 'Ideal for: real estate developers and construction businesses',
    body: 'For real estate developers and construction businesses that need fast, flexible capital to close deals and fund projects before permanent financing is in place.',
    bullets: [
      'Short-term bridge loans for time-sensitive deals',
      'Construction draw schedules',
      'Interest-only payment periods',
      'Transition to permanent financing',
      'Hard money and conventional bridge options',
    ],
  },
];

const valueCards = [
  {
    title: 'Transparency First',
    body: 'We tell you exactly what we can access, what we cannot, and why. No false promises, no wasted time.',
  },
  {
    title: 'We Only Win When You Win',
    body: 'We do not charge up-front fees. Our compensation is tied directly to your successful funding.',
  },
  {
    title: 'Relationships Over Algorithms',
    body: 'We have built real relationships with bank representatives, underwriters, and lenders that most business owners cannot access.',
  },
  {
    title: 'Sequence is Everything',
    body: 'We have spent years learning the exact order, timing, and positioning that maximizes total approved capital.',
  },
];

function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`mb-6 flex items-center gap-4 ${center ? 'justify-center' : ''}`}>
      <div className="h-px w-8 bg-gold-500" />
      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-500">{children}</span>
      {center ? <div className="h-px w-8 bg-gold-500" /> : null}
    </div>
  );
}

function ArrowLink({ to, children, outline = false }: { to: string; children: React.ReactNode; outline?: boolean }) {
  const className = outline ? 'btn-outline border-white/30 hover:border-white' : 'btn-primary';

  return (
    <Link to={to} className={className}>
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
}

export function HomePage() {
  return (
    <main className="flex-grow">
      <section className="relative overflow-hidden bg-navy-900 pb-48 pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20commercial%20office%20boardroom%2C%20African%20American%20male%20executive%20in%20tailored%20navy%20suit%20seated%20at%20conference%20table%2C%20floor%20to%20ceiling%20windows%2C%20city%20skyline%2C%20cinematic%20lighting%2C%20premium%20fintech%20editorial%20photography%2C%20realistic%2C%20professional%2C%20deep%20blue%20tones&image_size=landscape_16_9"
            alt="Executive in office"
            className="h-full w-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Eyebrow>The Business Deserves | A Dedicated...</Eyebrow>
            <h1 className="mb-8 text-5xl font-bold leading-tight md:text-6xl">
              Your Business
              <br />
              Deserves
              <br />
              <span className="font-medium italic text-gold-500">A Dedicated Funding Department.</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-300">
              We are the off-site funding department for established businesses looking for scale. Establish credit,
              decrease your capital stack, inventory acquisitions, and manage every lender relationship so you can
              focus on running your business.
            </p>
            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <ArrowLink to="/contact">Check Eligibility</ArrowLink>
              <ArrowLink to="/book-call" outline>
                Book Strategy Call
              </ArrowLink>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400">
              {['No Upfront Fees', 'Direct Lending Relationships', '100% Success For Clients'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-navy-900/80 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-6 text-center md:grid-cols-4">
            {homeStats.map((item) => (
              <div key={item.label} className="px-4 py-8">
                <div className="mb-2 font-serif text-3xl font-bold text-gold-500">{item.value}</div>
                <div className="text-[0.65rem] uppercase tracking-widest text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-navy-900">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <Eyebrow>Who We Serve</Eyebrow>
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              Built for Operators,
              <br />
              <span className="italic text-gray-500">Not Startups.</span>
            </h2>
            <div className="mb-10 space-y-6 border-l-4 border-gold-500 pl-6 text-lg leading-relaxed text-gray-600">
              <p>
                If you are generating $25k-$250k per month, you have already proven your model. The question is not
                whether your business qualifies for capital it is whether you have the right team running the process.
              </p>
              <p>
                Most business owners are turned down by local banks or pay exorbitant interest on short-term cash not
                because they do not qualify, but because they are applying to the wrong lenders in the wrong order.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm font-semibold">
              {operatorMarkets.map((market) => (
                <div key={market} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-gold-500" />
                  <span>{market}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=confident%20African%20American%20male%20founder%20wearing%20luxury%20camel%20plaid%20coat%20standing%20against%20white%20brick%20wall%2C%20editorial%20portrait%2C%20premium%20business%20brand%20photography%2C%20realistic%2C%20sharp%20detail&image_size=portrait_4_3"
              alt="Solomon Woods"
              className="w-full rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 max-w-md bg-navy-900 p-8 text-white shadow-2xl">
              <p className="mb-4 font-serif text-lg italic">"We build the business. We build the capital stack that funds it even better."</p>
              <div className="text-[0.65rem] font-bold uppercase tracking-widest text-gold-500">— Solomon Woods, Founder</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-navy-800 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Eyebrow center>Our Solutions</Eyebrow>
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Every Tool in the Capital Stack</h2>
            <p className="text-lg text-gray-400">
              We are not a single-product shop. We access every layer of the capital stack and deploy the right
              combination for your specific business profile.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capitalStackCards.map((card) => (
              <div
                key={card.title}
                className="group border border-white/10 bg-navy-900 p-8 transition-colors hover:border-gold-500/50"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="font-serif text-xl font-bold transition-colors group-hover:text-gold-500">{card.title}</h3>
                  <span className="rounded bg-gold-500/10 px-2 py-1 text-xs font-semibold text-gold-500">{card.cap}</span>
                </div>
                <p className="text-sm text-gray-400">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <ArrowLink to="/services">See All Funding Solutions</ArrowLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-navy-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Eyebrow center>Process</Eyebrow>
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Done-For-You. Start to Finish.</h2>
            <p className="text-lg text-gray-600">We handle the entire process from intake to wire so you can run your business.</p>
          </div>

          <div className="relative mb-16 grid gap-8 md:grid-cols-3">
            <div className="absolute left-[10%] right-[10%] top-12 z-0 hidden h-px bg-gray-200 md:block" />
            {processSteps.map((step) => (
              <div key={step.number} className="relative z-10 border border-gray-100 bg-gray-50 p-10 transition-shadow hover:shadow-xl">
                <div className="mb-6 font-serif text-6xl text-gray-200 opacity-50">{step.number}</div>
                <h3 className="mb-4 font-serif text-xl font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <ArrowLink to="/contact">Start Your Application</ArrowLink>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-navy-900 py-24">
        <div className="capital-grid-bg absolute inset-0 opacity-10" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Eyebrow center>Calculator</Eyebrow>
          <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
            How Much Capital Can Your
            <br />
            Business Access?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-400">
            Answer 8 questions for a personalized funding estimate and see which programs your business qualifies for
            in under 2 minutes.
          </p>

          <div className="mx-auto mb-12 grid max-w-2xl gap-6 text-left text-sm text-gray-300 sm:grid-cols-2">
            <div className="space-y-4">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-white">What you'll discover:</div>
              {['Estimated total funding limits', 'Which programs you qualify for', 'Clear next steps and timelines'].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-gold-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-white">Our commitment:</div>
              {['No hard credit checks', '100% confidential and secure', 'Real, actionable data immediately'].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-gold-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <ArrowLink to="/free-calculator">Calculate Funding Eligibility</ArrowLink>
            <ArrowLink to="/book-call" outline>
              Skip Ahead - Book A Call
            </ArrowLink>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-navy-800 py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Ready to Build Your Capital Stack?</h2>
          <p className="mb-10 text-lg text-gray-400">
            Book a 20-minute Funding Strategy Call. We will review your profile, identify your capital opportunity, and
            tell you exactly what we can access for your business.
          </p>
          <ArrowLink to="/book-call">Book Your Strategy Call</ArrowLink>
        </div>
      </section>
    </main>
  );
}

export function ServicesPage() {
  return (
    <main className="flex-grow">
      <section className="bg-navy-900 pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Funding Solutions</Eyebrow>
          <h1 className="mb-8 font-serif text-5xl font-bold leading-tight md:text-6xl">
            Every Tool in the Capital
            <br />
            Stack
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
            We are not a single-product shop. We access every layer of the capital stack and deploy the right
            combination for your specific business profile.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 text-navy-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="border border-gray-200 bg-gray-50/50 p-10 transition-shadow hover:shadow-xl">
                <div className="mb-6 flex items-start justify-between gap-6">
                  <h2 className="font-serif text-2xl font-bold text-navy-900">{service.title}</h2>
                  <div className="text-right">
                    <div className="font-bold text-gold-600">{service.amount}</div>
                    <div className="text-[0.65rem] uppercase tracking-widest text-gray-500">{service.timeline}</div>
                  </div>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">{service.body}</p>
                <div className="text-[0.65rem] font-bold uppercase tracking-widest text-gold-600">{service.eyebrow}</div>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-navy-800 py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Not Sure Which Solution Fits Your Business?</h2>
          <p className="mb-10 text-lg text-gray-400">
            That is exactly what the Funding Strategy Call is for. We review your profile and tell you exactly which
            products you qualify for and how much we can access.
          </p>
          <ArrowLink to="/book-call">Book Your Strategy Call</ArrowLink>
        </div>
      </section>
    </main>
  );
}

export function AboutPage() {
  return (
    <main className="flex-grow">
      <section className="relative overflow-hidden bg-navy-900 pb-40 pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20glass%20office%20tower%20interior%20with%20tall%20windows%2C%20deep%20blue%20architectural%20tones%2C%20luxury%20corporate%20environment%2C%20cinematic%20commercial%20photography%2C%20realistic&image_size=landscape_16_9"
            alt="Office building"
            className="h-full w-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>About</Eyebrow>
            <h1 className="mb-8 font-serif text-5xl font-bold leading-tight md:text-6xl">The Team Behind Your Capital</h1>
            <p className="text-lg leading-relaxed text-gray-300">
              The Funding Dept. was built on one belief: established business owners deserve a dedicated funding team,
              not a loan broker, not an algorithm, not a bank that does not know their name.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-navy-900">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <img
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=confident%20African%20American%20male%20founder%20wearing%20luxury%20camel%20plaid%20coat%20standing%20against%20white%20brick%20wall%2C%20editorial%20portrait%2C%20premium%20business%20brand%20photography%2C%20realistic%2C%20sharp%20detail&image_size=portrait_4_3"
              alt="Solomon Woods"
              className="w-full rounded-sm shadow-xl"
            />
          </div>
          <div>
            <Eyebrow>Founder</Eyebrow>
            <h2 className="mb-2 font-serif text-4xl font-bold">Solomon Woods</h2>
            <div className="mb-8 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-gray-400">
              Solomon Woods, Founder & Lead Funding Advisor - Katy, TX
            </div>
            <div className="mb-8 border-l-2 border-gold-500 pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-gray-700">
                "I built The Funding Dept. because I kept watching great business owners get turned down not because
                they did not qualify, but because nobody was running the process for them."
              </p>
            </div>
            <div className="mb-10 space-y-6 text-sm leading-relaxed text-gray-600">
              <p>
                Solomon Woods has spent years at the intersection of business credit, commercial lending, and financial
                strategy working with franchise operators, home service businesses, real estate developers, healthcare
                practices, and growth-stage companies across the country.
              </p>
              <p>
                After seeing the same patterns repeat, Solomon built The Funding Dept. to solve the problem at its
                root: most business owners do not have a dedicated funding team.
              </p>
              <p>
                Based in Katy, TX, The Funding Dept. serves established businesses nationwide. Solomon personally
                oversees every client engagement and maintains direct relationships with the bank representatives,
                underwriters, and lenders that matter.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-navy-900">
              {['SBA Loan Specialist', 'Business Credit Expert', 'Capital Stack Strategist', 'Katy, TX Based'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-gold-500" />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-navy-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Eyebrow center>Our Values</Eyebrow>
            <h2 className="font-serif text-4xl font-bold md:text-5xl">How We Operate</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {valueCards.map((card) => (
              <div key={card.title} className="border border-white/5 bg-navy-800 p-10">
                <h3 className="mb-4 font-serif text-xl font-bold text-gold-500">{card.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-center text-navy-900">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Ready to Work With Us?</h2>
          <p className="mb-10 text-lg text-gray-600">
            Book a 20-minute Funding Strategy Call with Solomon. We will review your profile and tell you exactly what
            capital we can access for your business.
          </p>
          <ArrowLink to="/book-call">Book Your Strategy Call</ArrowLink>
        </div>
      </section>
    </main>
  );
}

export function ContactPage() {
  return (
    <main className="flex-grow bg-gray-50">
      <section className="bg-navy-900 pb-20 pt-32 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow center>Get In Touch</Eyebrow>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-5xl">Apply For A Funding Strategy Call</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
            Tell us about your business and we will reach out to schedule your call within one business day.
          </p>
        </div>
      </section>

      <section className="py-20 text-navy-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-4">
              <div>
                <h2 className="mb-8 font-serif text-2xl font-bold">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'info@thefundingdept.com', href: 'mailto:info@thefundingdept.com' },
                    { icon: MapPin, label: 'Location', value: 'Katy, TX', subtext: 'Serving businesses nationwide' },
                    { icon: Phone, label: 'Phone', value: '(979) 356-3927', href: 'tel:9793563927' },
                    { icon: Clock3, label: 'Response Time', value: 'Within 1 business day' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-navy-900 text-white">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="mb-1 text-[0.65rem] font-bold uppercase tracking-widest text-gray-500">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-semibold transition-colors hover:text-gold-500">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-semibold">{item.value}</div>
                        )}
                        {'subtext' in item ? <div className="mt-1 text-xs text-gray-500">{item.subtext}</div> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy-900 p-8 text-white">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gold-500">Who We Work With</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  We work exclusively with established businesses generating $25,000 or more per month in revenue. If
                  that is you, we want to hear from you.
                </p>
              </div>

              <div className="text-center">
                <p className="mb-4 text-xs text-gray-500">Prefer to book directly?</p>
                <ArrowLink to="/book-call">Book Strategy Call Now</ArrowLink>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="flex min-h-[600px] flex-col bg-white shadow-2xl">
                <div className="bg-navy-800 p-6 text-white">
                  <h2 className="mb-2 font-serif text-xl font-bold">Funding Strategy Call Application</h2>
                  <p className="text-xs text-gray-400">
                    Tell us about your business. We will review your profile and reach out within 1 business day.
                  </p>
                </div>
                <div className="flex flex-grow items-center justify-center bg-gray-100 p-12">
                  <div className="w-full max-w-md bg-white shadow-lg">
                    <div className="p-10 text-center">
                      <label htmlFor="funding-amount" className="mb-8 block text-lg font-bold text-navy-900">
                        How much funding are you seeking? *
                      </label>
                      <input
                        id="funding-amount"
                        type="text"
                        placeholder="$"
                        className="mb-8 w-full border-b-2 border-gray-300 py-2 text-center text-xl transition-colors placeholder-gray-300 focus:border-gold-500 focus:outline-none"
                      />
                    </div>
                    <button
                      type="button"
                      className="flex w-full items-center justify-center gap-2 bg-gold-500 py-4 font-bold text-white transition-colors hover:bg-gold-400"
                    >
                      <span>NEXT</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function BookCallPage() {
  return (
    <main className="flex-grow bg-gray-50">
      <section className="bg-navy-900 pb-20 pt-32 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow center>Free Consultation</Eyebrow>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight md:text-5xl">
            Book Your Funding Strategy
            <br />
            Call
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
            A 20-minute call where we review your profile, identify your capital opportunity, and tell you exactly what
            we can access for your business.
          </p>
        </div>
      </section>

      <section className="py-20 text-navy-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-5">
              <div>
                <h2 className="mb-8 font-serif text-2xl font-bold">What to Expect</h2>
                <ul className="space-y-4 text-sm text-gray-600">
                  {[
                    'We review your current business profile and revenue',
                    'We identify your capital stack opportunity',
                    'We tell you exactly which products you qualify for',
                    'We give you a realistic funding range for your business',
                    'No pressure, no obligation just clarity.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-gold-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-gold-500 bg-navy-900 p-8 text-white shadow-xl">
                <p className="mb-4 font-serif text-lg italic leading-relaxed">
                  "We only get paid when you get funded. This call costs you nothing and could unlock six figures in
                  capital for your business."
                </p>
                <div className="text-[0.65rem] font-bold uppercase tracking-widest text-gold-500">— Solomon Woods, Founder</div>
              </div>

              <ul className="list-inside list-disc space-y-3 pl-2 text-xs text-gray-500">
                <li>20-minute call</li>
                <li>No cost, no obligation</li>
                <li>For businesses doing $25K+ per month</li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-sm border border-gray-100 bg-white shadow-2xl">
                <div className="border-b border-navy-800 bg-navy-900 p-6 text-white">
                  <h3 className="text-lg font-bold">Schedule With Solomon</h3>
                  <p className="text-xs text-gray-400">Select a date and time that works for you</p>
                </div>

                <div className="p-8">
                  <h2 className="mb-6 font-serif text-2xl font-bold text-navy-900">The Funding Department Consultation</h2>
                  <div className="mb-8 flex flex-col gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      <Clock3 className="h-5 w-5" />
                      <span>20 min</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MonitorPlay className="h-5 w-5" />
                      <span>Web conferencing details provided upon confirmation.</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-8">
                    <h4 className="mb-6 font-bold">Select Date & Time</h4>
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <div className="mb-4 flex items-center justify-between">
                          <button type="button" className="rounded-full p-1 transition-colors hover:bg-gray-100">
                            <ChevronLeft className="h-5 w-5 text-gray-400" />
                          </button>
                          <div className="font-bold">July 2026</div>
                          <button type="button" className="rounded-full p-1 transition-colors hover:bg-gray-100">
                            <ChevronRight className="h-5 w-5 text-navy-900" />
                          </button>
                        </div>

                        <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs text-gray-500">
                          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                            <div key={day}>{day}</div>
                          ))}
                        </div>

                        <div className="grid grid-cols-7 gap-1 text-center text-sm">
                          {['28', '29', '30', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '1'].map(
                            (day, index) => {
                              const isMuted = index < 3 || index === 34;
                              const isSelected = day === '6';
                              const isSoftSelected = day === '7';
                              return (
                                <div
                                  key={`${day}-${index}`}
                                  className={`p-2 ${
                                    isSelected
                                      ? 'rounded-full bg-navy-900 font-bold text-white shadow-md'
                                      : isSoftSelected
                                        ? 'rounded-full bg-gray-100 font-bold text-navy-900'
                                        : isMuted
                                          ? 'text-gray-300'
                                          : 'cursor-pointer rounded-full font-bold text-navy-900 hover:bg-gray-100'
                                  }`}
                                >
                                  {day}
                                </div>
                              );
                            },
                          )}
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-xs font-bold text-gray-500">
                          <MonitorPlay className="h-4 w-4" />
                          <span>Central Time - US & Canada</span>
                        </div>
                      </div>

                      <div className="custom-scrollbar flex h-64 flex-col gap-3 overflow-y-auto pr-2">
                        <div className="mb-2 text-sm font-bold text-gray-500">Monday, July 6</div>
                        {['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '01:00 PM', '01:30 PM'].map((time) => (
                          <button
                            key={time}
                            type="button"
                            className="w-full rounded-sm border border-navy-900 py-3 text-sm font-bold text-navy-900 transition-all hover:border-2 hover:bg-gray-50"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
