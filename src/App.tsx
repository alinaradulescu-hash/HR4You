import React, { useState } from 'react';
import {
  Users,
  CheckCircle2,
  Award,
  TrendingUp,
  Clock,
  Briefcase,
  Layers,
  ShieldCheck,
  ArrowRight,
  Phone,
  Mail,
  Linkedin,
  Star,
  Cpu,
  Sparkles,
  Calculator,
  HelpCircle,
  Send,
  Quote,
  Building2,
  Target,
  Zap,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
  Check
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCareTab, setActiveCareTab] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [projectCategory, setProjectCategory] = useState('toate');

  // Interactive Subscription Calculator state
  const [teamSize, setTeamSize] = useState<'1-15' | '16-50' | '51-150' | '150+'>('16-50');
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    'recrutare',
    'evaluare',
    'diagnoza'
  ]);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    teamSize: '16-50',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleNeed = (needId: string) => {
    if (selectedNeeds.includes(needId)) {
      setSelectedNeeds(selectedNeeds.filter((n) => n !== needId));
    } else {
      setSelectedNeeds([...selectedNeeds, needId]);
    }
  };

  const calculateHours = () => {
    let base = 12;
    if (teamSize === '1-15') base = 10;
    else if (teamSize === '16-50') base = 20;
    else if (teamSize === '51-150') base = 35;
    else if (teamSize === '150+') base = 50;

    const extra = selectedNeeds.length * 4;
    const total = base + extra;
    return {
      min: Math.max(10, total - 5),
      max: total + 5
    };
  };

  const hoursEstimate = calculateHours();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const carePillars = [
    {
      letter: 'C',
      title: 'CONCRETIZEAZĂ',
      subtitle: 'Soluții pragmatice cu aplicabilitate imediată',
      desc: 'Asigură și implementează la client soluțiile de consultanță și bune practici în toată aria de capital uman. Fără teorii abstracte, doar acțiuni ancorate în realitatea operațională.',
      icon: Target,
      color: 'from-sky-500 to-blue-600',
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      letter: 'A',
      title: 'AGIL',
      subtitle: 'Adaptabilitate la dinamica și prioritățile tale',
      desc: 'Soluțiile de optimizare capital uman sunt perfect adaptate priorităților companiei și strategiei de business, ținând cont în detaliu de specificul industriei și de cultura internă.',
      icon: Zap,
      color: 'from-teal-500 to-emerald-600',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      letter: 'R',
      title: 'RESPONSABIL',
      subtitle: 'Asumare directă de la idee la rezultat',
      desc: 'Specialistul de In-house HR nu este doar consultantul senior care oferă soluția la nevoia clientului, ci este și responsabilul direct de implementare a soluțiilor propuse în organizația client.',
      icon: ShieldCheck,
      color: 'from-indigo-500 to-violet-600',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      letter: 'E',
      title: 'EXECUTĂ',
      subtitle: 'Garanția rezolvării complete end-to-end',
      desc: 'Clientul are siguranța că nevoia sa în raport cu oamenii din companie este corect identificată, asumată și rezolvată profesional până la capăt, cu metrici clari de progres.',
      icon: CheckCircle2,
      color: 'from-amber-500 to-orange-600',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

  const pillarsDifference = [
    {
      nr: '1',
      title: 'BUSINESS',
      desc: 'Asigură prezență constantă alături de client și înțelegerea profundă a modelului și specificului de business.',
      icon: Building2
    },
    {
      nr: '2',
      title: 'AGILITATE',
      desc: 'Propune și ajustează misiuni alături de client, cu scop și timp bine definit, care răspund nevoilor specifice.',
      icon: Zap
    },
    {
      nr: '3',
      title: 'EFICIENȚĂ',
      desc: 'Buget accesibil și predictibil prin abonament lunar agreat într-un număr prestabilit de ore, fără costuri fixe supradimensionate.',
      icon: TrendingUp
    },
    {
      nr: '4',
      title: 'PREZENȚĂ',
      desc: 'Asigură prezență flexibilă în organizația client, atât onsite (la sediul companiei) cât și online.',
      icon: Users
    },
    {
      nr: '5',
      title: 'EXPERTIZĂ',
      desc: 'Aveți „în casă” expertul senior responsabil de internalizarea soluțiilor concrete de gestionare a capitalului uman.',
      icon: Award
    },
    {
      nr: '6',
      title: 'REZOLVARE',
      desc: 'Identifică prompt nevoia reală și o rezolvă “end to end” — de la audit și strategie până la implementarea operațională.',
      icon: CheckCircle2
    }
  ];

  const projects = [
    {
      id: 1,
      nr: '01',
      title: 'Management Capital Uman & Certificări',
      category: 'consultanta',
      lead: 'Standarde profesionale ANC și bune practici în HR',
      desc: 'Asigur și implementez la client soluțiile de consultanță și bune practici în toată aria de capital uman (HR4YOU). Am derulat în ultimii 4 ani 2 proiecte majore de certificare Manager Resurse Umane pe standard ANC, formând cu succes 96 de absolvenți pregătiți pentru provocările pieței.',
      stats: '96 de absolvenți certificați ANC'
    },
    {
      id: 2,
      nr: '02',
      title: 'Managementul Schimbării — Scandia Food',
      category: 'transformare',
      lead: 'Relocare, inovație și restructurarea culturii organizaționale',
      desc: 'Scandia Food — companie de referință din industria alimentară cu tradiție de peste 90 de ani în producție și inovație conserve. A fost coordonat un program strategic complex de 4 ani în echipă mixtă ce a presupus destructurarea – schimbarea – restructurarea culturii organizaționale, facilitat de relocarea într-o fabrică nouă ultramodernă și repoziționarea modelului de business.',
      stats: 'Program strategic pe 4 ani în echipă mixtă'
    },
    {
      id: 3,
      nr: '03',
      title: 'Recrutare C-Level & Evaluare Performanță',
      category: 'recrutare',
      lead: 'Poziții cheie și sisteme de performanță aplicate',
      desc: 'Derularea în ultimii 5 ani de procese de recrutare end-to-end pentru poziții strategice de CEO, CFO și specialiști de nișă în domeniul IT. Implementarea unor sisteme riguroase de management al performanței în servicii (Seatbelt), FMCG (Scandia), IT (Teamnet) și industria auto (Lavmi Perla — Furnizor Tier 1 Renault).',
      stats: 'Proiecte executive în FMCG, IT, Servicii & Auto'
    },
    {
      id: 4,
      nr: '04',
      title: 'Management Talente & Academii Interne',
      category: 'dezvoltare',
      lead: 'Assessment Centers și programe de internship continue',
      desc: 'Definirea și implementarea de programe de identificare talente (cu modele avansate de Assessment Center) și dezvoltare de competențe pe structura academiilor interne în organizații precum MBRo, Biofarm, Scandia. Programe de internship derulate activ în fiecare an de peste 15 ani consecutiv.',
      stats: 'Assessment Centers & 15+ ani de internship'
    },
    {
      id: 5,
      nr: '05',
      title: 'Analiză de Cultură Organizațională și Climat',
      category: 'transformare',
      lead: 'Diagnoză climat, studii validate și remăsurare anuală',
      desc: 'În strânsă corelare cu proiectele de management al schimbării, au fost implementate studii aprofundate de cultură și diagnoză climat organizațional (model Human Synergistics sau AON, precum și metodologii personalizate pe specificul fiecărui client), însoțite de planuri concrete de acțiune și remăsurare anuală a progresului.',
      stats: 'Studii Human Synergistics, AON & acțiuni anuale'
    },
    {
      id: 6,
      nr: '06',
      title: 'Integrare Tehnologie în Procesele de HR',
      category: 'tehnologie',
      lead: 'Digitalizarea capitalului uman prin sisteme HCM',
      desc: 'Pasiune autentică pentru optimizarea organizării Human Capital cu sprijinul sistemelor informatice moderne. Au fost implementate cap-coadă 5 sisteme software complexe de HCM (Human Capital Management), realizate sub analiză, configurare și coordonare directă.',
      stats: '5 sisteme HCM implementate full'
    }
  ];

  const testimonials = [
    {
      author: 'Bogdan Neagu',
      role: 'General Manager',
      company: 'Seatbelt Consulting',
      logoText: 'Seatbelt Consulting',
      accentColor: 'border-l-sky-500',
      text: 'SEATBELT CONSULTING colaborează cu echipa HR4you pentru serviciile de gestionare capital uman încă din anul 2018. Pentru dezvoltarea unei culturi sănătoase în rândul angajaților, precum și pentru o conformare față de cerințele legislației în vigoare, ne-a luat ceva timp să găsim un furnizor în standardele SEATBELT. Echipa HR4you și Alina Rădulescu s-au remarcat prin profesionalism, promptitudine, prin claritatea și originalitatea soluțiilor oferite la situațiile specifice firmei noastre pe toate componentele de HR: Recrutare, Integrare, Evaluare, Dezvoltare, Transformare capital uman. Aspectele practice și interactive au constituit un avantaj net superior, iar promptitudinea ne-a demonstrat că își onorează obligațiile la cel mai înalt nivel. Recomand cu încredere echipa HR4you ca fiind un partener profesionist!'
    },
    {
      author: 'Florin Cordiș',
      role: 'General Manager',
      company: 'LifeArt',
      logoText: 'LifeArt',
      accentColor: 'border-l-teal-500',
      text: 'Apreciez colaborarea cu Alina Rădulescu pentru că are un impact pozitiv atât asupra mea, cât și a întregii echipe. Am observat o clarificare promptă a obiectivelor și o îmbunătățire vizibilă a motivației oamenilor. Este o reală plăcere să lucrezi cu un profesionist desăvârșit!'
    },
    {
      author: 'Maria Bogde',
      role: 'HR Manager',
      company: 'Biofarm',
      logoText: 'Biofarm',
      accentColor: 'border-l-indigo-500',
      text: 'Pentru mine colaborarea cu Alina este o călătorie ghidată, Alina fiind desigur ghidul care mă însoțește. Un profesionist excelent alături de care am parcurs un drum în care toate procesele de HR s-au dezvăluit rând pe rând, au căpătat structură și am găsit noi moduri de a le așeza în organizație. Am câștigat pe toate planurile, atât profesional, și mai ales personal, Alina fiind un coach foarte bun și un fin psiholog. Cu maximă apreciere și recunoștință!'
    },
    {
      author: 'Luminița Țălnaru',
      role: 'Training Manager',
      company: 'Equatorial Gaming – Bittnet Group',
      logoText: 'Equatorial – Bittnet Group',
      accentColor: 'border-l-amber-500',
      text: 'Dezvoltarea de competențe în management și leadership, construirea și implementarea programelor de formare, înțelegerea nevoilor organizațiilor au adus un impact puternic al proiectelor implementate cu ajutorul Alinei și sunt un punct de referință în dezvoltarea resurselor umane. O recomandăm pe Alina Rădulescu ca având experiența și competențele necesare derulării și susținerii unor astfel de programe, cu o calitate ridicată a actului de formare, implicare și flexibilitate, orientată spre găsirea celei mai potrivite soluții pentru client.'
    }
  ];

  const clientLogos = [
    'Scandia Food',
    'Seatbelt Consulting',
    'Biofarm',
    'Equatorial Gaming (Bittnet Group)',
    'Vinci Energies',
    'Sistec',
    'Diverta',
    'Ymens Cloud',
    'Teamnet',
    'Mega\'Gen',
    'Office Express',
    'LifeArt',
    'Elegance Decor',
    'RTC Holding',
    'Ranco Promotional Products',
    'Insei Staff',
    'AcAdvice',
    'TCE'
  ];

  const filteredProjects =
    projectCategory === 'toate'
      ? projects
      : projects.filter((p) => p.category === projectCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-white">Disponibilitate pentru noi colaborări In-House HR</span>
            <span className="hidden md:inline text-slate-400">| Asistență strategică & operațională de capital uman</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+40749270027"
              className="hover:text-sky-400 transition flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>+0749 270 027</span>
            </a>
            <a
              href="mailto:alina.radulescu@hr4you.ro"
              className="hover:text-sky-400 transition flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>alina.radulescu@hr4you.ro</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-teal-500 p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-black text-2xl tracking-tighter text-white">
                <span className="text-sky-400">H</span>
                <span className="text-xs text-amber-400 ml-0.5 font-bold">4U</span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                <span>HR4</span>
                <span className="text-sky-600">YOU</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Managementul Capitalului Uman
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#de-ce-inhouse" className="hover:text-sky-600 transition">
              De ce In-House HR?
            </a>
            <a href="#concept-care" className="hover:text-sky-600 transition">
              Conceptul We CARE
            </a>
            <a href="#ce-facem-diferit" className="hover:text-sky-600 transition">
              Ce facem diferit
            </a>
            <a href="#alina-radulescu" className="hover:text-sky-600 transition">
              Despre noi
            </a>
            <a href="#proiecte" className="hover:text-sky-600 transition">
              Proiecte
            </a>
            <a href="#testimoniale" className="hover:text-sky-600 transition">
              Testimoniale
            </a>
            <a href="#calculator" className="hover:text-sky-600 transition">
              Calculator
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-semibold text-sm shadow-md shadow-sky-600/20 hover:shadow-lg transition transform active:scale-95"
            >
              <span>Discută cu Alina</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <a
              href="#de-ce-inhouse"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-sky-600"
            >
              De ce In-House HR?
            </a>
            <a
              href="#concept-care"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-sky-600"
            >
              Conceptul We CARE
            </a>
            <a
              href="#ce-facem-diferit"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-sky-600"
            >
              Ce facem diferit
            </a>
            <a
              href="#alina-radulescu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-sky-600"
            >
              Despre Alina Rădulescu
            </a>
            <a
              href="#proiecte"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-sky-600"
            >
              Exemple de Proiecte
            </a>
            <a
              href="#testimoniale"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-sky-600"
            >
              Testimoniale Clienți
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-sky-600"
            >
              Calculator Abonament
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block px-5 py-3 rounded-xl bg-sky-600 text-white font-semibold shadow-md"
              >
                Programează o Discuție
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Decorative ambient gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs sm:text-sm font-semibold tracking-wide">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Specialistul tău în managementul Capitalului Uman</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12]">
                Soluția de <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300">In-House HR</span> dedicată succesului companiei tale.
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Consultantul tău dedicat de Resurse Umane, integrat direct în echipa ta, într-un buget accesibil pe bază de abonament lunar agreat într-un număr prestabilit de ore de asistență.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold text-base shadow-xl shadow-sky-500/25 transition transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Programează o discuție de diagnoză</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#calculator"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition"
                >
                  <Calculator className="w-5 h-5 text-sky-400" />
                  <span>Estimează abonamentul</span>
                </a>
              </div>

              {/* Motto highlight */}
              <div className="pt-4 border-t border-slate-800/80 text-sm text-slate-400 italic">
                „Adding value through people management side by side with your teams!”
              </div>
            </div>

            {/* Right Column: Hero Card with Senior Consultant highlight */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-700/70">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 shadow-lg flex-shrink-0">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center overflow-hidden">
                      <Users className="w-8 h-8 text-sky-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Alina Rădulescu</h3>
                    <p className="text-sm text-sky-400 font-medium">Managing Partner HR4YOU</p>
                    <p className="text-xs text-slate-400 mt-0.5">Top Manager & Senior HR Consultant</p>
                  </div>
                </div>

                {/* Key Metrics Mini Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                    <div className="text-2xl font-black text-sky-400">28+ ani</div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">Experiență HR & Management</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                    <div className="text-2xl font-black text-teal-400">150+</div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">Proiecte conduse în industrii cheie</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                    <div className="text-2xl font-black text-indigo-400">500+</div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">Recrutări bottom to top level</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                    <div className="text-2xl font-black text-amber-400">10+</div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">Premii naționale de HR</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>3000+ ore de coaching executiv și de echipă</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>1000+ ore de formare profesională în Resurse Umane</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>FMCG, IT, Producție, BPO, Transport, Construcții, Retail</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-700/70 flex items-center justify-between text-xs text-slate-400">
                  <span>București, România</span>
                  <a
                    href="https://www.linkedin.com/in/radulescu-alina-99a5b713/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>Profil LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: DE CE IN-HOUSE HR? (Page 2) */}
      <section id="de-ce-inhouse" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-sky-600 tracking-wider uppercase mb-2">
              Provocările tale reale
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Te regăsești în aceste întrebări legate de oamenii din compania ta?
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Antreprenorii și managerii se confruntă zilnic cu presiunea gestionării talentelor, costurilor și conformității.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-5 group-hover:scale-105 transition">
                ?
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Ai nevoie de un HR profesionist în echipa ta?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Afacerea se dezvoltă, dar procesele de resurse umane au rămas în urmă sau sunt delegate haotic între manageri.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl mb-5 group-hover:scale-105 transition">
                ?
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Este greu de găsit și atras în companie?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Piața de recrutare pentru specialiști de HR de calibru este extrem de competitivă și necesită timp îndelungat.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mb-5 group-hover:scale-105 transition">
                ?
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Nu ai bugetul pentru un nivel înalt de competență?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Un director de HR full-time implică un cost salarial ridicat, adesea nejustificat ca volum permanent de muncă.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center font-bold text-xl mb-5 group-hover:scale-105 transition">
                ?
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Nu știi cum să validezi impactul în business?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Este dificil să măsori profesionalismul în resurse umane și să transformi inițiativele de HR în rezultate palpabile.
              </p>
            </div>
          </div>

          {/* Solution Banner */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-sky-900 via-indigo-900 to-slate-900 p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-md bg-sky-500/20 text-sky-300 font-bold text-xs uppercase tracking-wider mb-3">
                Răspunsul HR4YOU
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Îți răspundem cu drag la aceste nevoi prin soluția de In-House HR:
              </h3>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Consultantul tău dedicat, într-un buget accesibil pe bază de abonament lunar agreat într-un număr de ore de asistență. Beneficiezi de competența unui Director de HR cu peste 28 de ani de experiență, integrat direct în organizația ta!
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4 relative z-10">
              <a
                href="#calculator"
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition shadow-lg"
              >
                Configurează abonamentul companiei
              </a>
              <a
                href="#concept-care"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition"
              >
                Află cum funcționează
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CONCEPTUL WE CARE (Page 3) */}
      <section id="concept-care" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-sky-600 tracking-wider uppercase mb-2">
              Despre noi
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Conceptul de In-House HR: <span className="text-sky-600 font-black">We CARE</span>
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              O abordare integrată, centrată pe execuție responsabilă și adaptabilitate la prioritățile strategice ale fiecărei companii.
            </p>
          </div>

          {/* We CARE 4 Pillars Grid */}
          <div className="grid lg:grid-cols-4 gap-6">
            {carePillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isActive = activeCareTab === idx;
              return (
                <div
                  key={pillar.letter}
                  onClick={() => setActiveCareTab(idx)}
                  className={`cursor-pointer rounded-3xl p-7 transition-all duration-300 relative flex flex-col justify-between border ${
                    isActive
                      ? 'bg-white shadow-xl border-sky-400 scale-[1.02] ring-2 ring-sky-400/20'
                      : 'bg-white/80 hover:bg-white border-slate-200 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl text-white shadow-md bg-gradient-to-br ${pillar.color}`}
                      >
                        {pillar.letter}
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${pillar.badgeBg}`}>
                        Pilon {idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                      {pillar.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600">
                    <span>{isActive ? 'Pilon selectat' : 'Află mai multe'}</span>
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Deep-dive Card */}
          <div className="mt-10 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Diferența esențială We CARE:
                </h4>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                  Specialistul de In-House HR nu este un simplu consultant extern care predă un dosar și pleacă. Noi intrăm direct în organizație, preluăm responsabilitatea și implementăm soluțiile propuse alături de oamenii tăi.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm whitespace-nowrap transition flex items-center gap-2"
            >
              <span>Discută o misiune</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: CE FACE DIFERIT CONSULTANTUL IN-HOUSE HR? (Page 4) */}
      <section id="ce-facem-diferit" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-sky-600 tracking-wider uppercase mb-2">
              Despre noi
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ce face diferit consultantul <span className="text-sky-600">In-House HR</span>?
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              6 avantaje fundamentale care transformă modul în care compania ta gestionează oamenii și performanța.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillarsDifference.map((p) => {
              const IconComp = p.icon;
              return (
                <div
                  key={p.nr}
                  className="relative p-8 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:bg-white hover:border-sky-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-bold shadow-md shadow-sky-600/20 group-hover:scale-110 transition">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-sky-500 transition">
                      0{p.nr}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: MISIUNEA NOASTRA (Page 5) */}
      <section className="py-20 bg-gradient-to-r from-sky-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-400 mb-6">
            <Quote className="w-7 h-7" />
          </div>
          <span className="block text-xs font-bold text-sky-300 uppercase tracking-widest mb-4">
            Misiunea Noastră
          </span>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug sm:leading-tight tracking-tight text-slate-100 max-w-4xl mx-auto">
            „Să sprijinim proactiv antreprenorii, managerii și angajații companiilor în dezvoltarea maximă a potențialului lor profesional și personal prin procese, metode, instrumente perfect adaptate nevoilor și în linie cu evoluția tehnologică.”
          </blockquote>
          <p className="mt-6 text-sm text-sky-300 font-semibold tracking-wide">
            HR4YOU — Partenerul tău de încredere în capital uman
          </p>
        </div>
      </section>

      {/* SECTION: SENIOR CONSULTANT — ALINA RADULESCU (Page 6) */}
      <section id="alina-radulescu" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual Avatar / Identity Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="rounded-3xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-teal-500 p-1 shadow-2xl">
                  <div className="bg-slate-900 rounded-[22px] p-8 text-white text-center">
                    <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-1 shadow-inner mb-5">
                      <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center font-black text-3xl text-white">
                        AR
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white">Alina Rădulescu</h3>
                    <p className="text-sky-400 font-semibold text-sm mt-1">Managing Partner HR4YOU</p>
                    <p className="text-xs text-slate-400 mt-0.5">Top Manager & Consultant Senior de Resurse Umane</p>

                    <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col gap-2.5 text-xs text-left text-slate-300">
                      <a
                        href="tel:+40749270027"
                        className="flex items-center gap-2 hover:text-sky-300 transition"
                      >
                        <Phone className="w-4 h-4 text-sky-400" />
                        <span>M: +0749 270 027</span>
                      </a>
                      <a
                        href="mailto:alina.radulescu@hr4you.ro"
                        className="flex items-center gap-2 hover:text-sky-300 transition"
                      >
                        <Mail className="w-4 h-4 text-sky-400" />
                        <span>alina.radulescu@hr4you.ro</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/radulescu-alina-99a5b713/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition font-medium"
                      >
                        <Linkedin className="w-4 h-4 text-sky-400" />
                        <span>linkedin.com/in/radulescu-alina</span>
                        <ExternalLink className="w-3 h-3 ml-auto" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Badge overlay */}
                <div className="absolute -bottom-4 right-4 bg-emerald-500 text-slate-950 font-black text-xs px-4 py-2 rounded-xl shadow-lg border border-emerald-300">
                  28+ Ani Experiență
                </div>
              </div>
            </div>

            {/* Profile Credentials and Track Record */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  Despre noi • Consultant Senior
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Expertiză dovedită în conducerea și transformarea capitalului uman
                </h2>
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold">28+ ani de experiență</strong> în managementul resurselor umane ca top manager sau consultant în companii de top din România și internațional.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold">10+ premii naționale</strong> obținute cu proiecte de HR și propria experiență antreprenorială ca Managing Partner în HR4YOU.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold">150+ proiecte de HR</strong> conduse în diverse industrii: FMCG, IT, Producție, BPO, Transport, Construcții, Consultanță, Retail.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold">500+ proiecte de recrutare</strong> derulate în diferite industrii pentru întregul portofoliu de niveluri ierarhice de la bottom la top management.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold">1000+ ore de formare</strong> și dezvoltare competențe în Resurse Umane și Management.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold">3000+ ore de coaching</strong> executiv, de carieră și de echipă.
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Competențe Cheie & Arii de Expertiză
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Management Capital Uman',
                    'Managementul Schimbării',
                    'Recrutare & Evaluare Performanță',
                    'Training & Dezvoltare Competențe',
                    'Management Talente',
                    'Project Management',
                    'Dezvoltare Personală',
                    'Coaching Executiv'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: EXEMPLE DE PROIECTE (Page 7) */}
      <section id="proiecte" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-sky-600 tracking-wider uppercase mb-2">
              Despre noi
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Exemple de Proiecte Implementate
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Inițiative concrete de anvergură derulate cu succes în companii de top din industrii variate.
            </p>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {[
                { id: 'toate', label: 'Toate proiectele' },
                { id: 'transformare', label: 'Managementul Schimbării' },
                { id: 'recrutare', label: 'Recrutare & Performanță' },
                { id: 'consultanta', label: 'Management Capital Uman' },
                { id: 'dezvoltare', label: 'Talente & Internship' },
                { id: 'tehnologie', label: 'Tehnologie HR' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setProjectCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    projectCategory === cat.id
                      ? 'bg-sky-600 text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-sky-600 px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
                      PROIECT {project.nr}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      HR4YOU Case Study
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-4">
                    {project.lead}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{project.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: TESTIMONIALE (Pages 8 & 9) */}
      <section id="testimoniale" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-sky-600 tracking-wider uppercase mb-2">
              Despre noi
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ce spun clienții noștri
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Feedback autentic din partea liderilor care au experimentat impactul soluției de In-House HR.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border-l-4 ${t.accentColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-extrabold text-sm text-slate-900 tracking-wide bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs">
                      {t.logoText}
                    </span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    „{t.text}”
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.author}</h4>
                    <p className="text-xs text-slate-500">
                      {t.role}, <span className="font-medium text-slate-700">{t.company}</span>
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 font-black text-xs flex items-center justify-center">
                    {t.author.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CLIENT ROSTER / PORTOFOLIU (Page 10) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-sky-600 tracking-wider uppercase mb-2">
              Încredere și continuitate
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dintre clienții și partenerii noștri
            </p>
            <p className="mt-4 text-base text-slate-600">
              Colaborări strategice de lungă durată cu lideri de piață din diverse sectoare de activitate.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clientLogos.map((client) => (
              <div
                key={client}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-sky-300 transition flex items-center justify-center text-center"
              >
                <span className="font-bold text-xs sm:text-sm text-slate-700">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CALCULATOR ABONAMENT IN-HOUSE HR */}
      <section id="calculator" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-wide mb-3">
              <Calculator className="w-4 h-4 text-sky-600" />
              <span>Configurator Transparent</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Calculator estimativ de asistență In-House HR
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Alege dimensiunea companiei și prioritățile de capital uman pentru a vizualiza numărul estimativ de ore de asistență lunară recomandat.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="space-y-8">
              {/* Step 1: Team size */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  1. Câți angajați are compania în prezent?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: '1-15', label: '1 – 15', desc: 'Start-up & Mică' },
                    { id: '16-50', label: '16 – 50', desc: 'În creștere' },
                    { id: '51-150', label: '51 – 150', desc: 'Medie' },
                    { id: '150+', label: '150+', desc: 'Mare / Complexă' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setTeamSize(s.id as any)}
                      className={`p-4 rounded-2xl border text-center transition ${
                        teamSize === s.id
                          ? 'bg-sky-600 text-white border-sky-600 shadow-md'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-sky-300'
                      }`}
                    >
                      <div className="text-lg font-black">{s.label}</div>
                      <div className={`text-xs mt-0.5 ${teamSize === s.id ? 'text-sky-100' : 'text-slate-400'}`}>
                        {s.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Needs */}
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-3">
                  2. Ce arii de resurse umane necesită asistență prioritară?
                </label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { id: 'recrutare', label: 'Recrutare poziții cheie' },
                    { id: 'evaluare', label: 'Managementul performanței & KPI' },
                    { id: 'diagnoza', label: 'Diagnoză climat & cultură' },
                    { id: 'transformare', label: 'Managementul schimbării' },
                    { id: 'talente', label: 'Dezvoltare talente & internship' },
                    { id: 'tehnologie', label: 'Digitalizare & Software HCM' },
                    { id: 'coaching', label: 'Coaching executiv & training' },
                    { id: 'conformare', label: 'Conformare legislație & proceduri' },
                    { id: 'retentie', label: 'Retenție & motivare echipe' }
                  ].map((need) => {
                    const isChecked = selectedNeeds.includes(need.id);
                    return (
                      <button
                        key={need.id}
                        type="button"
                        onClick={() => toggleNeed(need.id)}
                        className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold flex items-center justify-between transition ${
                          isChecked
                            ? 'bg-sky-50 border-sky-400 text-sky-900 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>{need.label}</span>
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${
                            isChecked
                              ? 'bg-sky-600 border-sky-600 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Output Result Box */}
              <div className="mt-8 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase font-bold text-sky-400 tracking-wider block mb-1">
                    Recomandare estimativă abonament lunar
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white">
                    {hoursEstimate.min} – {hoursEstimate.max}{' '}
                    <span className="text-lg font-normal text-slate-300">ore / lună</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 max-w-md">
                    * Orele se pot distribui flexibil onsite și online, conform priorităților convenite lunar alături de Alina Rădulescu.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="w-full md:w-auto px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm whitespace-nowrap transition shadow-lg text-center"
                >
                  Solicită oferta detaliată
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CONTACT & BOOKING (Page 11) */}
      <section id="contact" className="py-20 lg:py-28 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
                Contact Direct
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Hai să discutăm despre oamenii și viitorul companiei tale!
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Stabilește o întâlnire inițială de diagnoză gratuită cu Alina Rădulescu. Vom analiza împreună situația actuală și opțiunile optime de intervenție prin abonamentul In-House HR.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href="tel:+40749270027"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-sky-400 hover:bg-slate-800 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 transition flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Telefon / WhatsApp</div>
                    <div className="text-base font-bold text-white group-hover:text-sky-300 transition">
                      +0749 270 027
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:alina.radulescu@hr4you.ro"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-sky-400 hover:bg-slate-800 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 transition flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email</div>
                    <div className="text-base font-bold text-white group-hover:text-sky-300 transition">
                      alina.radulescu@hr4you.ro
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/radulescu-alina-99a5b713/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-sky-400 hover:bg-slate-800 transition group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-110 transition flex-shrink-0">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Conectare Profesională</div>
                    <div className="text-base font-bold text-white group-hover:text-sky-300 transition flex items-center gap-1.5">
                      <span>Alina Rădulescu pe LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-xs text-slate-400 leading-relaxed">
                📍 <strong>HR4YOU</strong> — Servicii disponibile la nivel național în România (București, Cluj, Timișoara, Iași, Sibiu, Brașov și alte orașe), cu asistență hibridă onsite și online.
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Mulțumim pentru mesaj!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Solicitarea ta a fost transmisă cu succes către Alina Rădulescu. Te vom contacta în cel mai scurt timp pentru a stabili o discuție de diagnoză.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition"
                    >
                      Trimite o altă solicitare
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Trimite un mesaj sau solicită o ofertă
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Nume și Prenume *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, name: e.target.value })
                          }
                          placeholder="ex. Mihai Ionescu"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Compania *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.company}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, company: e.target.value })
                          }
                          placeholder="ex. Alpha Solutions SRL"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Email corporativ *
                        </label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, email: e.target.value })
                          }
                          placeholder="nume@companie.ro"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Număr de telefon *
                        </label>
                        <input
                          type="tel"
                          required
                          value={contactForm.phone}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, phone: e.target.value })
                          }
                          placeholder="07xx xxx xxx"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Număr estimativ de angajați
                      </label>
                      <select
                        value={contactForm.teamSize}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, teamSize: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      >
                        <option value="1-15">1 – 15 angajați</option>
                        <option value="16-50">16 – 50 angajați</option>
                        <option value="51-150">51 – 150 angajați</option>
                        <option value="150+">Peste 150 angajați</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Descrie pe scurt nevoia sau provocarea principală
                      </label>
                      <textarea
                        rows={3}
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, message: e.target.value })
                        }
                        placeholder="ex. Avem nevoie de recrutare pe 3 poziții cheie și restructurarea sistemului de evaluare a performanței..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold text-sm shadow-xl shadow-sky-500/20 transition flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Trimite solicitarea de diagnoză</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-400">
                      🔒 Datele tale sunt strict confidențiale și vor fi utilizate exclusiv pentru comunicarea directă.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white font-black text-lg">
                H
              </div>
              <div>
                <span className="text-lg font-black text-white">HR4YOU</span>
                <span className="block text-[11px] text-slate-400 font-medium">
                  Specialistul tău în managementul Capitalului Uman
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 font-medium text-slate-400">
              <a href="#de-ce-inhouse" className="hover:text-white transition">
                De ce In-House HR
              </a>
              <a href="#concept-care" className="hover:text-white transition">
                Conceptul We CARE
              </a>
              <a href="#alina-radulescu" className="hover:text-white transition">
                Alina Rădulescu
              </a>
              <a href="#proiecte" className="hover:text-white transition">
                Proiecte
              </a>
              <a href="#testimoniale" className="hover:text-white transition">
                Testimoniale
              </a>
              <a href="#calculator" className="hover:text-white transition">
                Calculator
              </a>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} HR4YOU & Alina Rădulescu. Toate drepturile rezervate.
            </p>
            <p className="italic">
              „Adding value through people management side by side with your teams!”
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
