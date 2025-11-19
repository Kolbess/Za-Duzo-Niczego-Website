import { Heart, Sparkles, Target, Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Empatia",
      description: "Rozumiemy wyzwania, przed którymi stoi współczesna młodzież",
    },
    {
      icon: Sparkles,
      title: "Świadomość",
      description: "Edukujemy o mechanizmach uzależnienia i ich wpływie na życie",
    },
    {
      icon: Target,
      title: "Rozwój",
      description: "Wspieramy młodych ludzi w budowaniu zdrowych nawyków cyfrowych",
    },
    {
      icon: Users,
      title: "Społeczność",
      description: "Tworzymy przestrzeń do dzielenia się doświadczeniami i wzajemnego wsparcia",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c30406]/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-[#c30406]/10 border border-[#c30406]/30 rounded-full text-[#c30406] mb-8">
              O projekcie
            </div>
            
            <h1 className="text-5xl lg:text-7xl text-white mb-8 tracking-tight">
              Walczymy z <span className="text-[#c30406]">niewidzialnym</span> uzależnieniem
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Za dużo niczego to projekt społeczny, który powstał z potrzeby rozmowy
              o problemie, który dotyka miliony młodych ludzi, ale często pozostaje niezauważony.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#c30406]/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHlvdW5nJTIwcGVvcGxlfGVufDF8fHx8MTc2MTM5MjM0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team meeting"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl text-white">Jak to się zaczęło?</h2>
              
              <p className="text-lg text-gray-300">
                Projekt narodził się z obserwacji, jak bardzo zmienił się świat młodzieży
                w ostatnich latach. Social media, notyfikacje, nieskończone scrollowanie
                — wszystko to stało się normą.
              </p>
              
              <p className="text-lg text-gray-300">
                Zauważyliśmy, że coraz więcej młodych ludzi boryka się z problemami koncentracji,
                lękiem odłączenia od telefonu i poczuciem, że "nie nadążają" za ilością treści.
              </p>
              
              <p className="text-lg text-gray-300">
                Postanowiliśmy działać. Nie po to, by demonizować technologię, ale by pomóc
                młodzieży zrozumieć, jak działa ich mózg i jak odzyskać kontrolę nad swoim
                czasem i uwagą.
              </p>
              
              <div className="pt-6">
                <Link
                  to="/misja"
                  className="inline-flex items-center gap-2 text-[#c30406] hover:gap-3 transition-all"
                >
                  Poznaj naszą misję
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-6xl text-white mb-6">Nasz zespół</h2>
            <p className="text-xl text-gray-300">
              Jesteśmy grupą pasjonatów edukacji, psychologii i technologii,
              którzy wierzą w siłę świadomości i autorefleksji.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div
                key={member}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-[#c30406]/50 transition-all text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#c30406]/20 to-transparent border border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="text-4xl">👤</div>
                </div>
                
                <h3 className="text-xl text-white mb-2">Członek zespołu {member}</h3>
                <p className="text-[#c30406] mb-4">Rola w projekcie</p>
                <p className="text-gray-400 text-sm">
                  Pasjonat edukacji i zmian społecznych
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-6xl text-white mb-6">Nasze wartości</h2>
            <p className="text-xl text-gray-300">
              To, co napędza naszą pracę i określa sposób, w jaki działamy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-[#c30406]/50 transition-all hover:shadow-xl hover:shadow-[#c30406]/10"
                >
                  <div className="w-16 h-16 rounded-xl bg-[#c30406]/10 flex items-center justify-center mb-6 group-hover:bg-[#c30406]/20 transition-colors">
                    <Icon className="text-[#c30406]" size={32} />
                  </div>
                  
                  <h3 className="text-2xl text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 text-lg">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Vision */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#c30406]/10 to-transparent border border-[#c30406]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#c30406]/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <h2 className="text-4xl lg:text-5xl text-white mb-8">
                  Nasza <span className="text-[#c30406]">wizja</span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-6">
                  Wierzymy w świat, w którym młodzi ludzie świadomie korzystają z technologii,
                  mają kontrolę nad swoją uwagą i czasem, i mogą skupić się na tym, co naprawdę
                  ważne — relacjach, rozwoju osobistym i spełnianiu marzeń.
                </p>
                
                <p className="text-xl text-gray-300 mb-8">
                  Nie chcemy walczyć z technologią. Chcemy nauczyć młodzież, jak ją oswajać.
                </p>
                
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#c30406] text-[#faf6ef] rounded-lg hover:bg-[#a50305] transition-all hover:shadow-lg hover:shadow-[#c30406]/20"
                >
                  Dołącz do nas
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
