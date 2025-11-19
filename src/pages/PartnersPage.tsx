import { Building2, Handshake, Target, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

export function PartnersPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Pozytywny wpływ społeczny",
      description: "Wspieraj edukację młodzieży i buduj pozytywny wizerunek marki",
    },
    {
      icon: Users,
      title: "Dotarcie do młodej grupy",
      description: "Bezpośredni kontakt z tysiącami młodych ludzi i ich rodzin",
    },
    {
      icon: Award,
      title: "Widoczność marki",
      description: "Twoje logo na materiałach edukacyjnych i podczas wydarzeń",
    },
    {
      icon: Target,
      title: "Raportowanie transparentne",
      description: "Regularne raporty z wpływu i rezultatów współpracy",
    },
  ];

  const partnershipLevels = [
    {
      name: "Partner Strategiczny",
      price: "20,000+ PLN/rok",
      features: [
        "Logo na wszystkich materiałach",
        "Dedykowane wydarzenia firmowe",
        "Współtworzenie programu warsztatów",
        "Priorytetowa komunikacja",
        "Roczne raporty z wpływu",
      ],
      highlight: true,
    },
    {
      name: "Partner Główny",
      price: "10,000-20,000 PLN/rok",
      features: [
        "Logo na stronie i materiałach",
        "Współorganizacja 2 warsztatów",
        "Kwartalne raporty",
        "Udział w wydarzeniach",
      ],
    },
    {
      name: "Partner Wspierający",
      price: "5,000-10,000 PLN/rok",
      features: [
        "Logo na stronie internetowej",
        "Wspólne media społecznościowe",
        "Półroczne raporty",
        "Certyfikat partnera",
      ],
    },
  ];

  const currentPartners = [
    { name: "Fundacja Edukacji Cyfrowej", type: "Partner strategiczny" },
    { name: "Miasto Warszawa", type: "Partner instytucjonalny" },
    { name: "Tech for Good Foundation", type: "Partner technologiczny" },
    { name: "Ministerstwo Edukacji", type: "Partner merytoryczny" },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c30406]/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-[#c30406]/10 border border-[#c30406]/30 rounded-full text-[#c30406] mb-8">
              Współpraca i partnerstwa
            </div>
            
            <h1 className="text-5xl lg:text-7xl text-white mb-8 tracking-tight">
              Wspólnie zmieniamy <span className="text-[#c30406]">przyszłość</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300">
              Dołącz do grona partnerów i pomóż nam dotrzeć do jeszcze większej liczby
              młodych ludzi z edukacją o świadomym korzystaniu z technologii.
            </p>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl text-white mb-12 text-center">
              Nasi <span className="text-[#c30406]">partnerzy</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {currentPartners.map((partner, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c30406]/50 transition-all text-center group"
                >
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#c30406]/20 to-transparent border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:from-[#c30406]/30 transition-colors">
                    <Building2 className="text-[#c30406]" size={32} />
                  </div>
                  
                  <h3 className="text-lg text-white mb-2">{partner.name}</h3>
                  <p className="text-sm text-[#c30406]">{partner.type}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-6">Zaufało nam już ponad 25 organizacji i firm</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-40">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="w-32 h-16 rounded-lg bg-white/5 border border-white/10" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl text-white mb-6 text-center">
              Dlaczego warto zostać <span className="text-[#c30406]">partnerem?</span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Partnerstwo z nami to nie tylko wsparcie społeczności, ale także realne korzyści
              dla Twojej organizacji.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-[#c30406]/50 transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#c30406]/10 flex items-center justify-center mb-6">
                      <Icon className="text-[#c30406]" size={28} />
                    </div>
                    
                    <h3 className="text-2xl text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300 text-lg">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Levels */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl text-white mb-6 text-center">
              Poziomy <span className="text-[#c30406]">partnerstwa</span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Wybierz poziom zaangażowania odpowiedni dla Twojej organizacji
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {partnershipLevels.map((level, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl border ${
                    level.highlight
                      ? "bg-gradient-to-br from-[#c30406]/10 to-transparent border-[#c30406] shadow-xl shadow-[#c30406]/10"
                      : "bg-white/5 border-white/10"
                  } relative`}
                >
                  {level.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c30406] text-[#faf6ef] rounded-full text-sm">
                      Polecany
                    </div>
                  )}
                  
                  <h3 className="text-2xl text-white mb-2">{level.name}</h3>
                  <p className="text-[#c30406] mb-8">{level.price}</p>
                  
                  <ul className="space-y-4">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c30406]/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#c30406]" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl text-white mb-16 text-center">
              Nasz <span className="text-[#c30406]">zasięg</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                <div className="text-5xl text-[#c30406] mb-3">12,547</div>
                <p className="text-gray-300 text-lg">Uczestników dotychczas</p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                <div className="text-5xl text-[#c30406] mb-3">87</div>
                <p className="text-gray-300 text-lg">Szkół w programie</p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                <div className="text-5xl text-[#c30406] mb-3">34</div>
                <p className="text-gray-300 text-lg">Miast w Polsce</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#c30406]/10 to-transparent border border-[#c30406]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#c30406]/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <Handshake className="text-[#c30406]" size={48} />
                </div>
                
                <h2 className="text-4xl lg:text-5xl text-white mb-6 text-center">
                  Zostań <span className="text-[#c30406]">partnerem</span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-10 text-center max-w-3xl mx-auto">
                  Skontaktuj się z nami, aby omówić możliwości współpracy i dopasować
                  pakiet partnerski do Twoich potrzeb.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/kontakt"
                    className="px-10 py-5 bg-[#c30406] text-[#faf6ef] rounded-lg hover:bg-[#a50305] transition-all hover:shadow-lg hover:shadow-[#c30406]/20 inline-flex items-center justify-center gap-2"
                  >
                    Skontaktuj się
                    <span>→</span>
                  </Link>
                  <a
                    href="mailto:partnerstwa@zaduzoniczeego.pl"
                    className="px-10 py-5 bg-white/5 text-white rounded-lg hover:bg-white/10 border border-white/10 transition-all inline-flex items-center justify-center"
                  >
                    partnerstwa@zaduzoniczeego.pl
                  </a>
                </div>

                <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10 text-center">
                  <p className="text-gray-300">
                    Jesteś organizacją non-profit? Skontaktuj się z nami, aby poznać
                    specjalne warunki współpracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}