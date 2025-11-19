import { ArrowRight, Target, Lightbulb, TrendingUp, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HomePage() {
  const stats = [
    { value: "78%", label: "młodzieży używa social media ponad 4h dziennie" },
    { value: "63%", label: "odczuwa niepokój bez telefonu" },
    { value: "42%", label: "ma problem z koncentracją" },
  ];

  const steps = [
    {
      icon: Brain,
      title: "Edukujemy",
      description: "Przeprowadzamy warsztaty i wykłady o uzależnieniu od dopaminy w szkołach",
    },
    {
      icon: Target,
      title: "Badamy",
      description: "Zbieramy dane poprzez ankiety, aby zrozumieć skalę problemu",
    },
    {
      icon: Lightbulb,
      title: "Inspirujemy",
      description: "Pokazujemy alternatywy i zachęcamy do świadomego korzystania z technologii",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c30406]/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-6 py-3 bg-[#c30406]/10 border border-[#c30406]/30 rounded-full text-[#c30406]">
                Projekt społeczny dla młodzieży
              </div>
              
              <h1 className="text-5xl lg:text-7xl text-white tracking-tight">
                Uzależnienie od dopaminy to{" "}
                <span className="text-[#c30406]">problem naszych czasów</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-xl">
                Pomagamy młodzieży w wieku 10-20 lat zrozumieć mechanizmy uzależnienia od social media
                i odzyskać kontrolę nad swoim życiem cyfrowym.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/o-nas"
                  className="px-8 py-4 bg-[#c30406] text-[#faf6ef] rounded-lg hover:bg-[#a50305] transition-all hover:shadow-lg hover:shadow-[#c30406]/20 inline-flex items-center justify-center gap-2 group"
                >
                  Dołącz do projektu
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/ankieta"
                  className="px-8 py-4 bg-white/5 text-white rounded-lg hover:bg-white/10 border border-white/10 transition-all inline-flex items-center justify-center"
                >
                  Wypełnij ankietę
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c30406]/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1690656111993-9e57cf407923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHNvY2lhbCUyMG1lZGlhJTIwcGhvbmV8ZW58MXx8fHwxNjc2MTM5MjM0NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Youth using social media"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-transparent to-[#152030]/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-6xl text-white mb-6">Co robimy?</h2>
            <p className="text-xl text-gray-300">
              Nasz projekt łączy edukację, badania i inspirację, aby pomóc młodym ludziom
              w świadomym korzystaniu z technologii.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-[#c30406]/50 transition-all hover:shadow-xl hover:shadow-[#c30406]/10"
                >
                  <div className="absolute top-4 right-4 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">
                    0{index + 1}
                  </div>
                  
                  <div className="w-14 h-14 rounded-xl bg-[#c30406]/10 flex items-center justify-center mb-6 group-hover:bg-[#c30406]/20 transition-colors">
                    <Icon className="text-[#c30406]" size={28} />
                  </div>
                  
                  <h3 className="text-2xl text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl text-white mb-8">
                Dlaczego to <span className="text-[#c30406]">ważne?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Statystyki pokazują skalę problemu, z którym boryka się współczesna młodzież.
                Nadmierne użytkowanie social media i uzależnienie od natychmiastowej gratyfikacji
                wpływa na zdrowie psychiczne, relacje i rozwój osobisty.
              </p>
              
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#c30406]/10 flex items-center justify-center">
                      <TrendingUp className="text-[#c30406]" size={24} />
                    </div>
                    <div>
                      <div className="text-3xl text-[#c30406] mb-1">{stat.value}</div>
                      <div className="text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#c30406]/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1550623827-2335c2fdf938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGhhbmRzfGVufDF8fHx8MTc2MTM5MjM0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Digital technology"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-6xl text-white mb-6">Jak działamy?</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#c30406] to-[#3e3fb6] flex items-center justify-center text-2xl">
                1
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl text-white mb-3">Docieramy do szkół</h3>
                <p className="text-gray-300 text-lg">
                  Organizujemy warsztaty i wykłady w szkołach podstawowych i średnich, edukując
                  młodzież o mechanizmach uzależnienia.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#c30406] to-[#3e3fb6] flex items-center justify-center text-2xl">
                2
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl text-white mb-3">Prowadzimy badania</h3>
                <p className="text-gray-300 text-lg">
                  Zbieramy dane poprzez ankiety, aby lepiej zrozumieć potrzeby młodzieży
                  i dostosować nasze działania.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#c30406] to-[#3e3fb6] flex items-center justify-center text-2xl">
                3
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl text-white mb-3">Tworzymy społeczność</h3>
                <p className="text-gray-300 text-lg">
                  Budujemy sieć wsparcia, gdzie młodzi ludzie mogą dzielić się swoimi
                  doświadczeniami i motywować się nawzajem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -top-8 -left-4 text-[#c30406]/20 text-9xl">"</div>
              <blockquote className="text-3xl lg:text-5xl text-white relative z-10 mb-8">
                Nie chodzi o to, by wyrzucić telefon. Chodzi o to, by odzyskać kontrolę nad
                swoim życiem.
              </blockquote>
              <div className="h-1 w-24 bg-[#c30406] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#c30406]/10 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl text-white mb-6">
              Dołącz do <span className="text-[#c30406]">ruchu</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Weź udział w naszej ankiecie i pomóż nam lepiej zrozumieć potrzeby młodzieży.
              Twoje odpowiedzi są anonimowe i pomogą kształtować przyszłość projektu.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ankieta"
                className="px-10 py-5 bg-[#c30406] text-[#faf6ef] rounded-lg hover:bg-[#a50305] transition-all hover:shadow-lg hover:shadow-[#c30406]/20 inline-flex items-center justify-center gap-2 group"
              >
                Wypełnij ankietę
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/kontakt"
                className="px-10 py-5 bg-white/5 text-white rounded-lg hover:bg-white/10 border border-white/10 transition-all inline-flex items-center justify-center"
              >
                Skontaktuj się z nami
              </Link>
            </div>

            {/* Newsletter */}
            <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl text-white mb-4">Otrzymuj aktualizacje</h3>
              <p className="text-gray-300 mb-6">
                Zapisz się do newslettera i bądź na bieżąco z naszymi działaniami.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Twój adres email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#c30406] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#c30406] text-[#faf6ef] rounded-lg hover:bg-[#a50305] transition-all whitespace-nowrap"
                >
                  Zapisz się
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}