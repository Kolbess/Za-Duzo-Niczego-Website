import { Users, School, MapPin, Calendar, TrendingUp, Award } from "lucide-react";

export function ProgressPage() {
  const stats = [
    {
      icon: Users,
      number: "12,547",
      label: "Uczestników warsztatów",
      trend: "+2,341 w tym roku",
    },
    {
      icon: School,
      number: "87",
      label: "Szkół w programie",
      trend: "+23 w tym roku",
    },
    {
      icon: MapPin,
      number: "34",
      label: "Miast objętych projektem",
      trend: "+8 w tym roku",
    },
    {
      icon: Calendar,
      number: "156",
      label: "Zorganizowanych warsztatów",
      trend: "+45 w tym roku",
    },
  ];

  const timeline = [
    {
      year: "2024",
      month: "Grudzień",
      events: [
        "Konferencja w Warszawie - 500 uczestników",
        "Partnerstwo z 5 nowymi szkołami",
      ],
    },
    {
      year: "2024",
      month: "Październik",
      events: [
        "Warsztaty w 12 szkołach średnich",
        "Wdrożenie nowej ankiety cyfrowej",
      ],
    },
    {
      year: "2024",
      month: "Sierpień",
      events: [
        "Letnie warsztaty dla młodzieży",
        "Rozpoczęcie programu mentorskiego",
      ],
    },
    {
      year: "2024",
      month: "Maj",
      events: [
        "Ekspansja do 10 nowych miast",
        "Współpraca z Ministerstwem Edukacji",
      ],
    },
    {
      year: "2024",
      month: "Marzec",
      events: [
        "Pierwsza kampania medialna",
        "Dotarcie do 10,000 uczestnika",
      ],
    },
    {
      year: "2023",
      month: "Grudzień",
      events: [
        "Uruchomienie strony internetowej",
        "Pierwsze warsztaty pilotażowe",
      ],
    },
  ];

  const cities = [
    { name: "Warszawa", schools: 15, participants: 2340 },
    { name: "Kraków", schools: 12, participants: 1890 },
    { name: "Wrocław", schools: 10, participants: 1560 },
    { name: "Poznań", schools: 9, participants: 1420 },
    { name: "Gdańsk", schools: 8, participants: 1230 },
    { name: "Łódź", schools: 7, participants: 1050 },
    { name: "Katowice", schools: 6, participants: 890 },
    { name: "Szczecin", schools: 5, participants: 730 },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Nagroda za innowację społeczną 2024",
      description: "Wyróżnienie od Fundacji Rozwoju Społeczeństwa Obywatelskiego",
    },
    {
      icon: TrendingUp,
      title: "85% pozytywnych opinii",
      description: "Uczestników zauważyło poprawę w zarządzaniu czasem ekranowym",
    },
    {
      icon: Users,
      title: "Certyfikat jakości edukacji",
      description: "Potwierdzenie wysokich standardów programu przez ekspertów",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c30406]/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-[#c30406]/10 border border-[#c30406]/30 rounded-full text-[#c30406] mb-8">
              Postęp projektu
            </div>
            
            <h1 className="text-5xl lg:text-7xl text-white mb-8 tracking-tight">
              Zmieniamy życie <span className="text-[#c30406]">tysięcy</span> młodych ludzi
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300">
              Zobacz, jak rozwijamy się i jakie rezultaty osiągamy w całej Polsce.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-[#c30406]/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#c30406]/10 flex items-center justify-center mb-6 group-hover:bg-[#c30406]/20 transition-colors">
                    <Icon className="text-[#c30406]" size={28} />
                  </div>
                  
                  <div className="text-4xl lg:text-5xl text-white mb-2">{stat.number}</div>
                  <p className="text-gray-300 mb-3">{stat.label}</p>
                  <p className="text-sm text-[#c30406]">{stat.trend}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl text-white mb-16 text-center">
              Nasza <span className="text-[#c30406]">podróż</span>
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c30406] via-[#c30406]/50 to-transparent" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 lg:left-1/2 w-4 h-4 -ml-[7px] lg:-ml-2 mt-2 rounded-full bg-[#c30406] border-4 border-[#0c1b2a] z-10" />

                    {/* Content */}
                    <div className={`flex-1 pl-12 lg:pl-0 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                      <div className="inline-block px-3 py-1 bg-[#c30406]/10 border border-[#c30406]/20 rounded-full text-[#c30406] text-sm mb-3">
                        {item.month} {item.year}
                      </div>
                      
                      <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                        <ul className="space-y-2">
                          {item.events.map((event, eventIndex) => (
                            <li key={eventIndex} className="text-gray-300">
                              {event}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="hidden lg:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Map Visualization */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-6xl text-white mb-6 text-center">
              Jesteśmy w <span className="text-[#c30406]">całej Polsce</span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Nasz program dotarł do 34 miast w Polsce. Sprawdź, czy jesteśmy w Twoim mieście!
            </p>

            {/* Map Placeholder */}
            <div className="mb-12 p-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 text-center">
              <MapPin className="text-[#c30406] mx-auto mb-4" size={48} />
              <p className="text-gray-300">Wizualizacja mapy Polski z zaznaczonymi miastami</p>
              <p className="text-gray-400 text-sm mt-2">(Interaktywna mapa będzie dostępna wkrótce)</p>
            </div>

            {/* Cities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#c30406]/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-[#c30406]" size={20} />
                    <h3 className="text-xl text-white">{city.name}</h3>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Szkoły:</span>
                      <span className="text-white">{city.schools}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Uczestnicy:</span>
                      <span className="text-[#c30406]">{city.participants}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-6xl text-white mb-16 text-center">
              Nasze <span className="text-[#c30406]">osiągnięcia</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
                  >
                    <div className="w-16 h-16 rounded-xl bg-[#c30406]/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="text-[#c30406]" size={32} />
                    </div>
                    
                    <h3 className="text-xl text-white mb-3">{achievement.title}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#152030]/50 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#c30406]/10 to-transparent border border-[#c30406]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#c30406]/10 rounded-full blur-3xl" />
              
              <div className="relative text-center">
                <h2 className="text-4xl lg:text-5xl text-white mb-8">
                  Pomogliśmy <span className="text-[#c30406]">12,547</span> młodym ludziom
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Każdy warsztat, każda rozmowa, każda zmiana nawyku — to wszystko się liczy.
                  I to dopiero początek.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div>
                    <div className="text-5xl text-[#c30406] mb-2">92%</div>
                    <p className="text-gray-300">Poleciłoby warsztat znajomym</p>
                  </div>
                  <div>
                    <div className="text-5xl text-[#c30406] mb-2">78%</div>
                    <p className="text-gray-300">Wdrożyło nowe nawyki</p>
                  </div>
                  <div>
                    <div className="text-5xl text-[#c30406] mb-2">85%</div>
                    <p className="text-gray-300">Czuje się lepiej psychicznie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
