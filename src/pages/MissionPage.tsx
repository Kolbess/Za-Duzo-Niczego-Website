import { Brain, Eye, Lightbulb, Shield, Zap, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function MissionPage() {
  const problems = [
    {
      title: "Uzależnienie behawioralne",
      description: "Social media są zaprojektowane, by nas uzależniać. Algorytmy optymalizują czas spędzony w aplikacji, nie nasze dobro.",
    },
    {
      title: "Fragmentacja uwagi",
      description: "Notyfikacje i wielozadaniowość niszczą zdolność do głębokiej pracy i koncentracji.",
    },
    {
      title: "Porównywanie się",
      description: "Nierealistyczne standardy w social media prowadzą do niskiej samooceny i problemów ze zdrowiem psychicznym.",
    },
    {
      title: "FOMO i lęk",
      description: "Strach przed pominięciem czegoś ważnego prowadzi do ciągłego sprawdzania telefonu.",
    },
  ];

  const missions = [
    {
      icon: Brain,
      title: "Edukacja o mechanizmach mózgu",
      description: "Uczymy, jak działa system nagrody w mózgu i dlaczego tak trudno się oderwać od ekranu.",
    },
    {
      icon: Eye,
      title: "Budowanie świadomości",
      description: "Pokazujemy, jak rozpoznać własne wzorce używania technologii i ich wpływ na życie.",
    },
    {
      icon: Shield,
      title: "Narzędzia do ochrony",
      description: "Dzielimy się praktycznymi strategiami ograniczania czasu ekranowego i budowania lepszych nawyków.",
    },
  ];

  const impacts = [
    {
      icon: Lightbulb,
      number: "10,000+",
      label: "uczniów przeszkolonych",
    },
    {
      icon: Zap,
      number: "50+",
      label: "szkół objętych programem",
    },
    {
      icon: Heart,
      number: "85%",
      label: "uczestników zauważyło poprawę",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c30406]/20 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-[#c30406]/10 border border-[#c30406]/30 rounded-full text-[#c30406] mb-8">
              Nasza misja
            </div>
            
            <h1 className="text-5xl lg:text-7xl text-white mb-8 tracking-tight">
              Odzyskajmy <span className="text-[#c30406]">kontrolę</span> nad naszą uwagą
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300">
              Naszym celem jest wyposażenie młodzieży w wiedzę i narzędzia potrzebne
              do świadomego korzystania z technologii cyfrowej.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl text-white mb-6">Problem, który rozwiązujemy</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Współczesna młodzież stoi przed wyzwaniami, których poprzednie pokolenia
                nie znały. Oto główne zagrożenia:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-[#c30406]/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#c30406]/10 flex items-center justify-center text-[#c30406] mt-1">
                      ⚠
                    </div>
                    <div>
                      <h3 className="text-xl text-white mb-3">{problem.title}</h3>
                      <p className="text-gray-300">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl text-white mb-8">
                Nasze <span className="text-[#c30406]">podejście</span>
              </h2>
              
              <div className="space-y-8">
                {missions.map((mission, index) => {
                  const Icon = mission.icon;
                  return (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#c30406]/10 flex items-center justify-center">
                        <Icon className="text-[#c30406]" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl text-white mb-3">{mission.title}</h3>
                        <p className="text-gray-300 text-lg">{mission.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#c30406]/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759456629213-3db5a7bb53ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHdvcmtzaG9wJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MTM5MjM0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students workshop"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Impact */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl text-white mb-6">Nasz wpływ</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Od początku projektu osiągnęliśmy znaczące rezultaty w edukacji młodzieży
                o świadomym korzystaniu z technologii.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {impacts.map((impact, index) => {
                const Icon = impact.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
                  >
                    <div className="w-16 h-16 rounded-xl bg-[#c30406]/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="text-[#c30406]" size={32} />
                    </div>
                    <div className="text-5xl text-[#c30406] mb-3">{impact.number}</div>
                    <p className="text-gray-300 text-lg">{impact.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Vision Statement */}
            <div className="p-12 rounded-3xl bg-gradient-to-br from-[#c30406]/10 to-transparent border border-[#c30406]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c30406]/10 rounded-full blur-3xl" />
              
              <div className="relative text-center">
                <h3 className="text-3xl lg:text-4xl text-white mb-6">
                  Do 2026 roku chcemy dotrzeć do{" "}
                  <span className="text-[#c30406]">100,000</span> młodych ludzi
                </h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Wierzymy, że każdy młody człowiek zasługuje na prawo do świadomego wyboru
                  — jak spędza czas, na czym skupia uwagę i jakie relacje z technologią buduje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl text-white mb-16 text-center">
              Trzy filary naszej <span className="text-[#c30406]">misji</span>
            </h2>

            <div className="space-y-16">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-[#c30406] to-[#a50305] flex items-center justify-center text-3xl text-white">
                  1
                </div>
                <div className="pt-4">
                  <h3 className="text-3xl text-white mb-4">Edukacja bez osądzania</h3>
                  <p className="text-lg text-gray-300">
                    Nie mówimy "telefon zły". Pokazujemy fakty, mechanizmy psychologiczne
                    i pozwalamy młodzieży samodzielnie wyciągać wnioski. Szanujemy ich inteligencję.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-[#c30406] to-[#a50305] flex items-center justify-center text-3xl text-white">
                  2
                </div>
                <div className="pt-4">
                  <h3 className="text-3xl text-white mb-4">Praktyczne narzędzia</h3>
                  <p className="text-lg text-gray-300">
                    Nie wystarczy wiedzieć, że coś jest problemem. Uczymy konkretnych technik:
                    jak ograniczyć czas ekranowy, jak budować lepsze nawyki, jak radzić sobie
                    z FOMO.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-[#c30406] to-[#a50305] flex items-center justify-center text-3xl text-white">
                  3
                </div>
                <div className="pt-4">
                  <h3 className="text-3xl text-white mb-4">Budowanie społeczności</h3>
                  <p className="text-lg text-gray-300">
                    Zmiana jest łatwiejsza, gdy nie jesteś sam. Tworzymy przestrzeń, gdzie młodzi
                    ludzie mogą dzielić się swoimi wyzwaniami, sukcesami i wspierać się nawzajem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -top-8 -left-4 text-[#c30406]/20 text-9xl">"</div>
              <blockquote className="text-3xl lg:text-5xl text-white relative z-10 mb-8">
                Technologia powinna służyć ludziom, a nie odwrotnie.
              </blockquote>
              <div className="h-1 w-24 bg-[#c30406] mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
