/* Barcelona May 2026 — landing + map + day cards. Photos: Unsplash CDN + CSS backgrounds (no broken <img> icons). */
const IMG_Q = "auto=format&w=1200&q=80";
const IMG = {
  sagrada: `https://images.unsplash.com/photo-1583422409516-2895a77efded?${IMG_Q}`,
  parkGuell: `https://images.unsplash.com/photo-1562883676-8c7feb83f09b?${IMG_Q}`,
  passeig: `https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?${IMG_Q}`,
  skyline: `https://images.unsplash.com/photo-1539037116277-4db20889f2d4?${IMG_Q}`,
  beach: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?${IMG_Q}`,
  market: `https://images.unsplash.com/photo-1542838132-92c53300491e?${IMG_Q}`,
  airport: `https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&w=800&q=80`,
  harbor: `https://images.unsplash.com/photo-1539037116277-4db20889f2d4?${IMG_Q}`,
  montjuic: `https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?${IMG_Q}`,
  gothic: `https://images.unsplash.com/photo-1544735716-392fe2489ffa?${IMG_Q}`,
  bunkers: `https://images.unsplash.com/photo-1539037116277-4db20889f2d4?${IMG_Q}`,
  batllo: `https://images.unsplash.com/photo-1555881400-74d7acaacd8b?${IMG_Q}`,
  catalunya: `https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?${IMG_Q}`,
  palau: `https://images.unsplash.com/photo-1507838153414-b4b713384a76?${IMG_Q}`,
  stadium: `https://images.unsplash.com/photo-1574629810360-7efbbe195018?${IMG_Q}`,
  glories: `https://images.unsplash.com/photo-1514565131-fce0801e5785?${IMG_Q}`,
  graciaSol: `https://images.unsplash.com/photo-1569154941061-e231b4725ef1?${IMG_Q}`
};

const TRIP = {
  title: { en: "Barcelona", ru: "Барселона" },
  subtitle: { en: "May 2026 · Poble-sec base", ru: "Май 2026 · база Poble-sec" },
  dates: { en: "May 2–9 • 8 days", ru: "2–9 мая • 8 дней" },
  heroTitle: {
    en: "Barcelona",
    ru: "Барселона"
  },
  heroLead: {
    en: "Architecture, sea air, Passeig de Gràcia, and slow Catalan evenings — eight days in the city and by the water.",
    ru: "Архитектура, морской воздух, Passeig de Gràcia и неспешные каталонские вечера — восемь дней в городе и у воды."
  },
  collage: {
    a: { en: "Passeig nights", ru: "Вечер на Passeig" },
    b: { en: "Gaudí icons", ru: "Символы Гауди" },
    c: { en: "Sea & tapas", ru: "Море и тапас" },
    d: { en: "Markets & paella", ru: "Рынки и паэлья" }
  },
  tripNote: {
    en: "Flights: Moldova dep. 12:00 → Barcelona arr. 14:25 · Return Barcelona dep. 15:25 → Moldova arr. 19:50 (local times).",
    ru: "Рейсы: Молдова вылет 12:00 → Барселона прилёт 14:25 · Обратно Барселона 15:25 → Молдова 19:50 (местное время)."
  },
  footerTitle: { en: "Barcelona Trip — May 2026", ru: "Поездка в Барселону — май 2026" },
  highlights: [
    {
      title: { en: "Gaudí overload (in a good way)", ru: "Гауди без устали" },
      meta: { en: "Sagrada Família · Casa Batlló · Park Güell", ru: "Sagrada Família · Casa Batlló · Park Güell" },
      image: {
        url: IMG.sagrada,
        alt: { en: "Sagrada Família, Barcelona", ru: "Sagrada Família, Барселона" }
      },
      body: {
        en: "The famous trio: forest-like basilica, dragon-scale house, and mosaic park above the city.",
        ru: "Три знаковых места: «лес» базилики, «дом-дракон» и мозаичный парк над городом."
      },
      pills: [{ en: "Book timed tickets", ru: "Билеты со временем" }, { en: "Comfortable shoes", ru: "Удобная обувь" }]
    },
    {
      title: { en: "Mediterranean blue hour", ru: "Средиземное море" },
      meta: { en: "Barceloneta · seafood · slow Poblenou", ru: "Barceloneta · морепродукты · Poblenou" },
      image: {
        url: IMG.beach,
        alt: { en: "Barceloneta beach", ru: "Пляж Barceloneta" }
      },
      body: {
        en: "Salt air, wide beaches, then pick-your-seafood energy — classic Barcelona by the water.",
        ru: "Солёный воздух, пляжи и рыба «выбери на витрине» — классическая Барселона у воды."
      },
      pills: [{ en: "La Paradeta vibe", ru: "Формат La Paradeta" }, { en: "Sun cream", ru: "Крем от солнца" }]
    },
    {
      title: { en: "Neighbourhood rhythm", ru: "Ритм кварталов" },
      meta: { en: "Born · Gràcia · Poble-sec", ru: "Born · Gràcia · Poble-sec" },
      image: {
        url: IMG.gothic,
        alt: { en: "Barcelona Cathedral, Gothic Quarter", ru: "Собор, Готический квартал" }
      },
      body: {
        en: "Small squares, terraces, and streets made for wandering between the big sights.",
        ru: "Площади, террасы и улочки между главными точками маршрута."
      },
      pills: [{ en: "Montjuïc views", ru: "Виды с Montjuïc" }, { en: "Bunkers sunset", ru: "Закат на Bunkers" }]
    }
  ],
  tips: [
    {
      title: { en: "Metro + walking", ru: "Метро и пешком" },
      body: {
        en: "T10/T-casual cards work well; Poble-sec is well connected — save legs for Park Güell and the stadium day.",
        ru: "T10/T-casual удобны; от Poble-sec легко добраться — берегите ноги в день Park Güell и стадиона."
      }
    },
    {
      title: { en: "Meal times", ru: "Время еды" },
      body: {
        en: "Lunch ~14:00 and dinner ~21:00 are normal — our plan already follows Catalan rhythm.",
        ru: "Обед около 14:00 и ужин около 21:00 — норма; план уже под это подстроен."
      }
    },
    {
      title: { en: "Camp Nou in 2026", ru: "Camp Nou в 2026" },
      body: {
        en: "Renovation means museum + immersive visit, not a full pitch walk — still fun if you love football.",
        ru: "Реконструкция: музей и иммерсив, не полный выход на поле — зайдёт, если любите футбол."
      }
    },
    {
      title: { en: "Pickpockets & crowds", ru: "Толпы и карманы" },
      body: {
        en: "Watch bags on the beach strip, La Rambla, and metro — nothing dramatic, just big-city habits.",
        ru: "Следите за сумками у пляжа, на La Rambla и в метро — обычная большегородская внимательность."
      }
    }
  ],
  days: [
    {
      day: 1,
      date: { en: "Sat 2 May", ru: "Сб 2 мая" },
      title: { en: "Arrival & paella", ru: "Прилёт и паэлья" },
      base: { en: "Barcelona", ru: "Барселона" },
      tags: [{ en: "arrival", ru: "прилёт" }, { en: "shopping", ru: "шопинг" }],
      center: { lat: 41.2871, lng: 2.0784 },
      stops: [
        {
          time: { en: "12:00–14:25", ru: "12:00–14:25" },
          title: { en: "Flight Moldova → Barcelona", ru: "Рейс Молдова → Барселона" },
          desc: { en: "Local times each end. Then transfer toward Poble-sec.", ru: "Местное время в каждом городе. Далее трансфер к Poble-sec." },
          coord: { lat: 41.2871, lng: 2.0784 },
          img: {
            url: IMG.airport,
            alt: { en: "Barcelona airport", ru: "Аэропорт Барселоны" }
          }
        },
        {
          time: { en: "Afternoon", ru: "День" },
          title: { en: "Check-in · Poble-sec", ru: "Заселение · Poble-sec" },
          desc: {
            en: "Coffee near Paral·lel or Nømad before heading uptown.",
            ru: "Кофе у Paral·lel или Nømad перед выходом в центр."
          },
          coord: { lat: 41.3729, lng: 2.1686 }
        },
        {
          time: { en: "18:00–19:30", ru: "18:00–19:30" },
          title: { en: "Passeig de Gràcia preview", ru: "Passeig de Gràcia" },
          desc: { en: "Uniqlo · Massimo Dutti — modernist façades at golden hour.", ru: "Uniqlo · Massimo Dutti — модернистские фасады." },
          coord: { lat: 41.3916, lng: 2.1687 },
          img: {
            url: IMG.passeig,
            alt: { en: "Passeig de Gràcia", ru: "Passeig de Gràcia" }
          }
        },
        {
          time: { en: "20:30 dinner", ru: "20:30 ужин" },
          title: { en: "Can Solé", ru: "Can Solé" },
          desc: { en: "Paella and rice by the old port — “we’re in Barcelona” energy.", ru: "Паэлья у старого порта — атмосфера «мы в Барселоне»." },
          coord: { lat: 41.3789, lng: 2.1895 },
          img: {
            url: IMG.harbor,
            alt: { en: "Port Vell", ru: "Port Vell" }
          }
        }
      ],
      why: {
        en: "Land, settle, preview the grand boulevard, and end with harbour lights.",
        ru: "Прилёт, заселение, знакомство с бульваром и вечер у гавани."
      }
    },
    {
      day: 2,
      date: { en: "Sun 3 May", ru: "Вс 3 мая" },
      title: { en: "Montjuïc, Born, BESTA", ru: "Montjuïc, Born, BESTA" },
      base: { en: "Barcelona", ru: "Барселона" },
      tags: [{ en: "walks", ru: "прогулки" }, { en: "lunch", ru: "обед" }],
      center: { lat: 41.3635, lng: 2.1653 },
      stops: [
        {
          time: { en: "08:30 coffee", ru: "08:30 кофе" },
          title: { en: "Poble-sec / Sant Antoni", ru: "Poble-sec / Sant Antoni" },
          desc: { en: "Bar Calders (Parlament) or Satan’s toward Born.", ru: "Bar Calders (Parlament) или Satan’s к Born." },
          coord: { lat: 41.3789, lng: 2.164 }
        },
        {
          time: { en: "09:45–11:15", ru: "09:45–11:15" },
          title: { en: "Montjuïc", ru: "Montjuïc" },
          desc: { en: "Hill park, gardens, castle views — soft morning before the old town.", ru: "Холм, сады, виды — мягкое утро." },
          coord: { lat: 41.3635, lng: 2.1653 },
          img: {
            url: IMG.montjuic,
            alt: { en: "Montjuïc castle", ru: "Замок Montjuïc" }
          }
        },
        {
          time: { en: "11:30–13:30", ru: "11:30–13:30" },
          title: { en: "El Born & Gothic Quarter", ru: "El Born и Готика" },
          desc: { en: "Medieval lanes, cathedral square, wine bars.", ru: "Средневековые улочки, собор, бары." },
          coord: { lat: 41.384, lng: 2.176 },
          img: {
            url: IMG.gothic,
            alt: { en: "Cathedral", ru: "Собор" }
          }
        },
        {
          time: { en: "14:00 lunch", ru: "14:00 обед" },
          title: { en: "Besta", ru: "Besta" },
          desc: { en: "The headline Catalan lunch of the week.", ru: "Главный каталонский обед недели." },
          coord: { lat: 41.395, lng: 2.1618 }
        },
        {
          time: { en: "16:30–18:30", ru: "16:30–18:30" },
          title: { en: "Poble-sec stroll", ru: "Прогулка Poble-sec" },
          desc: { en: "Carrer de Blai terraces — easy pace.", ru: "Террасы Carrer de Blai." },
          coord: { lat: 41.3729, lng: 2.1686 }
        },
        {
          time: { en: "Optional", ru: "По желанию" },
          title: { en: "Bunkers del Carmel", ru: "Bunkers del Carmel" },
          desc: { en: "360° city and sea — sunset spot.", ru: "Панорама 360° — закат." },
          coord: { lat: 41.4194, lng: 2.161 },
          img: {
            url: IMG.bunkers,
            alt: { en: "View from Bunkers del Carmel", ru: "Вид с Bunkers del Carmel" }
          }
        }
      ],
      why: {
        en: "Green hill, Gothic stone, a serious lunch, and an optional cinematic sunset.",
        ru: "Зелёный холм, готика, сильный обед и опциональный закат как в кино."
      }
    },
    {
      day: 3,
      date: { en: "Mon 4 May", ru: "Пн 4 мая" },
      title: { en: "Gaudí morning & Gràcia", ru: "Утро Гауди и Gràcia" },
      base: { en: "Barcelona", ru: "Барселона" },
      tags: [{ en: "modernisme", ru: "модернизм" }],
      center: { lat: 41.4036, lng: 2.1744 },
      stops: [
        {
          time: { en: "Morning", ru: "Утро" },
          title: { en: "Sagrada Família", ru: "Sagrada Família" },
          desc: { en: "Timed entry — forest columns and stained glass.", ru: "Вход по времени — колонны и стекло." },
          coord: { lat: 41.4036, lng: 2.1744 },
          img: {
            url: IMG.sagrada,
            alt: { en: "Sagrada Família", ru: "Sagrada Família" }
          }
        },
        {
          time: { en: "13:30 lunch", ru: "13:30 обед" },
          title: { en: "Near Sagrada", ru: "Рядом с Sagrada" },
          desc: { en: "La Llesca (Provença) or menú on Carrer de Sardenya.", ru: "La Llesca или menú на Sardenya." },
          coord: { lat: 41.402, lng: 2.173 }
        },
        {
          time: { en: "Afternoon", ru: "День" },
          title: { en: "Recinte Modernista de Sant Pau", ru: "Sant Pau модернист" },
          desc: { en: "Domènech pavilions — quieter than the basilica crowds.", ru: "Павильоны Доменека — спокойнее толпы у базилики." },
          coord: { lat: 41.4117, lng: 2.1743 },
          img: {
            url: IMG.parkGuell,
            alt: { en: "Sant Pau modernist site", ru: "Комплекс Sant Pau" }
          }
        },
        {
          time: { en: "Evening", ru: "Вечер" },
          title: { en: "Gràcia & coffee", ru: "Gràcia и кофе" },
          desc: { en: "Plaça del Sol terraces.", ru: "Террасы Plaça del Sol." },
          coord: { lat: 41.4003, lng: 2.1587 }
        }
      ],
      why: {
        en: "Two modernisme masterpieces bookend a village-like evening.",
        ru: "Два шедевра модернизма и вечер в духе деревушки."
      }
    },
    {
      day: 4,
      date: { en: "Tue 5 May", ru: "Вт 5 мая" },
      title: { en: "Batlló & shopping", ru: "Batlló и шопинг" },
      base: { en: "Barcelona", ru: "Барселона" },
      tags: [{ en: "architecture", ru: "архитектура" }, { en: "shopping", ru: "шопинг" }],
      center: { lat: 41.3917, lng: 2.165 },
      stops: [
        {
          time: { en: "Morning", ru: "Утро" },
          title: { en: "Casa Batlló", ru: "Casa Batlló" },
          desc: { en: "Gaudí on Passeig de Gràcia.", ru: "Гауди на Passeig de Gràcia." },
          coord: { lat: 41.3917, lng: 2.165 },
          img: {
            url: IMG.batllo,
            alt: { en: "Casa Batlló", ru: "Casa Batlló" }
          }
        },
        {
          time: { en: "13:00 lunch", ru: "13:00 обед" },
          title: { en: "Eixample", ru: "Eixample" },
          desc: { en: "El Nacional or tapas at Cervecería Catalana / Ciudad Condal.", ru: "El Nacional или тапас в Cervecería Catalana / Ciudad Condal." },
          coord: { lat: 41.3879, lng: 2.1683 }
        },
        {
          time: { en: "14:00–17:30", ru: "14:00–17:30" },
          title: { en: "Shopping", ru: "Шопинг" },
          desc: { en: "Uniqlo Plaça Catalunya · Massimo Dutti · COS · & Other Stories.", ru: "Те же магазины на Plaça Catalunya и Passeig de Gràcia." },
          coord: { lat: 41.387, lng: 2.17 },
          img: {
            url: IMG.catalunya,
            alt: { en: "Plaça de Catalunya", ru: "Plaça de Catalunya" }
          }
        },
        {
          time: { en: "Optional eve", ru: "Вечер опционально" },
          title: { en: "Palau de la Música Catalana", ru: "Palau de la Música" },
          desc: { en: "Modernista concert hall — check tickets.", ru: "Концертный зал модернизма — билеты заранее." },
          coord: { lat: 41.3876, lng: 2.1752 },
          img: {
            url: IMG.palau,
            alt: { en: "Palau de la Música", ru: "Palau de la Música" }
          }
        }
      ],
      why: {
        en: "Dragon scales in the morning, bags in the afternoon, music optional at night.",
        ru: "Утром Гауди, днём сумки, вечером по желанию музыка."
      }
    },
    {
      day: 5,
      date: { en: "Wed 6 May", ru: "Ср 6 мая" },
      title: { en: "Camp Nou & Can Cortada", ru: "Camp Nou и Can Cortada" },
      base: { en: "Barcelona", ru: "Барселона" },
      tags: [{ en: "football", ru: "футбол" }, { en: "local", ru: "местное" }],
      center: { lat: 41.3809, lng: 2.1228 },
      stops: [
        {
          time: { en: "10:30–12:00", ru: "10:30–12:00" },
          title: { en: "Spotify Camp Nou", ru: "Spotify Camp Nou" },
          desc: {
            en: "2026 renovation: museum + immersive, partial views — ~60–90 min.",
            ru: "Реконструкция 2026: музей + иммерсив, частичные виды — ~60–90 мин."
          },
          coord: { lat: 41.3809, lng: 2.1228 },
          img: {
            url: IMG.stadium,
            alt: { en: "Camp Nou", ru: "Camp Nou" }
          }
        },
        {
          time: { en: "12:15", ru: "12:15" },
          title: { en: "Coffee · Les Corts", ru: "Кофе · Les Corts" },
          desc: { en: "Cortado on Travessera de les Corts.", ru: "Cortado на Travessera de les Corts." },
          coord: { lat: 41.385, lng: 2.126 }
        },
        {
          time: { en: "13:30 lunch", ru: "13:30 обед" },
          title: { en: "Can Cortada", ru: "Can Cortada" },
          desc: { en: "Villa, garden, Catalan cooking — local gem.", ru: "Вилла, сад, каталонская кухня." },
          coord: { lat: 41.3861, lng: 2.1118 }
        },
        {
          time: { en: "15:00–17:00", ru: "15:00–17:00" },
          title: { en: "Easy afternoon", ru: "Спокойный день" },
          desc: { en: "Les Corts walk or back to centre — light evening.", ru: "Прогулка по Les Corts или в центр — лёгкий вечер." },
          coord: { lat: 41.3874, lng: 2.1686 }
        }
      ],
      why: {
        en: "Stadium story + countryside-on-the-edge lunch without tourist-trap noise.",
        ru: "Стадион и обед «как за городом» без туристических ловушек."
      }
    },
    {
      day: 6,
      date: { en: "Thu 7 May", ru: "Чт 7 мая" },
      title: { en: "Beach & seafood", ru: "Пляж и морепродукты" },
      base: { en: "Barcelona", ru: "Барселона" },
      tags: [{ en: "sea", ru: "море" }],
      center: { lat: 41.3784, lng: 2.1925 },
      stops: [
        {
          time: { en: "Morning", ru: "Утро" },
          title: { en: "Barceloneta", ru: "Barceloneta" },
          desc: { en: "Beach walk · Baluard for coffee/pastry.", ru: "Пляж · Baluard на кофе/выпечку." },
          coord: { lat: 41.3784, lng: 2.1925 },
          img: {
            url: IMG.beach,
            alt: { en: "Barceloneta", ru: "Barceloneta" }
          }
        },
        {
          time: { en: "14:00–16:00", ru: "14:00–16:00" },
          title: { en: "La Paradeta", ru: "La Paradeta" },
          desc: { en: "Pick seafood at the counter — they cook it.", ru: "Выбор на витрине — готовят на месте." },
          coord: { lat: 41.378, lng: 2.1905 },
          img: {
            url: IMG.market,
            alt: { en: "Barcelona market vibe", ru: "Рыночная атмосфера" }
          }
        },
        {
          time: { en: "Afternoon", ru: "День" },
          title: { en: "Poblenou", ru: "Poblenou" },
          desc: { en: "Slower, post-industrial calm by the sea.", ru: "Спокойный квартал у моря." },
          coord: { lat: 41.403, lng: 2.2 },
          img: {
            url: IMG.glories,
            alt: { en: "Poblenou / Glòries", ru: "Poblenou" }
          }
        }
      ],
      why: {
        en: "Sand, salt, seafood theatre, then a breezy creative quarter.",
        ru: "Песок, соль, «театр» с рыбой и креативный квартал."
      }
    },
    {
      day: 7,
      date: { en: "Fri 8 May", ru: "Пт 8 мая" },
      title: { en: "Park Güell & last shops", ru: "Park Güell и шопинг" },
      base: { en: "Barcelona", ru: "Барселона" },
      tags: [{ en: "Gaudí", ru: "Гауди" }],
      center: { lat: 41.4145, lng: 2.1527 },
      stops: [
        {
          time: { en: "Morning", ru: "Утро" },
          title: { en: "Park Güell", ru: "Park Güell" },
          desc: { en: "Mosaic terraces — book ahead.", ru: "Мозаичные террасы — билеты заранее." },
          coord: { lat: 41.4145, lng: 2.1527 },
          img: {
            url: IMG.parkGuell,
            alt: { en: "Park Güell", ru: "Park Güell" }
          }
        },
        {
          time: { en: "13:30 lunch", ru: "13:30 обед" },
          title: { en: "Gràcia", ru: "Gràcia" },
          desc: { en: "La Pepita or Bar Bodega Quimet.", ru: "La Pepita или Bar Bodega Quimet." },
          coord: { lat: 41.399, lng: 2.158 },
          img: {
            url: IMG.graciaSol,
            alt: { en: "Gràcia square", ru: "Площадь в Gràcia" }
          }
        },
        {
          time: { en: "Afternoon", ru: "День" },
          title: { en: "Final shopping", ru: "Финальный шопинг" },
          desc: { en: "Passeig de Gràcia / Plaça Catalunya pass.", ru: "Последний круг по центральным магазинам." },
          coord: { lat: 41.3916, lng: 2.1687 },
          img: {
            url: IMG.passeig,
            alt: { en: "Passeig de Gràcia", ru: "Passeig de Gràcia" }
          }
        }
      ],
      why: {
        en: "Finish on Gaudí’s hilltop garden, then squeeze in anything still on the list.",
        ru: "Финал на холме Гауди и последние покупки."
      }
    },
    {
      day: 8,
      date: { en: "Sat 9 May", ru: "Сб 9 мая" },
      title: { en: "Departure", ru: "Вылет" },
      base: { en: "Barcelona", ru: "Барселона" },
      tags: [{ en: "travel", ru: "дорога" }],
      center: { lat: 41.2871, lng: 2.0784 },
      stops: [
        {
          time: { en: "Morning", ru: "Утро" },
          title: { en: "Coffee · Sants", ru: "Кофе · Sants" },
          desc: { en: "Last cortado before the airport run.", ru: "Последний cortado перед аэропортом." },
          coord: { lat: 41.379, lng: 2.1404 }
        },
        {
          time: { en: "15:25 flight", ru: "15:25 рейс" },
          title: { en: "Barcelona → Moldova", ru: "Барселона → Молдова" },
          desc: { en: "Arrive Moldova 19:50 local. Allow time for security.", ru: "Прилёт в Молдову 19:50 местное. Запас на security." },
          coord: { lat: 41.2871, lng: 2.0784 },
          img: {
            url: IMG.airport,
            alt: { en: "Airport", ru: "Аэропорт" }
          }
        }
      ],
      why: {
        en: "Simple exit: coffee, buffer, and home with the Mediterranean still in your head.",
        ru: "Спокойный выезд: кофе, запас времени — и домой с морем в памяти."
      }
    }
  ]
};

const I18N = {
  en: {
    mapTitle: "Where everything is",
    mapSubtitle: "Interactive map with the route and key stops. Click pins to jump to the day plan.",
    highlightsTitle: "The “wow” moments",
    highlightsSubtitle: "A short list of emotional peaks — the kind that makes you smile even months later.",
    itineraryTitle: "Day-by-day plan",
    itinerarySubtitle: "Simple, readable cards. Each day has a base zone + key stops + “why it’s worth it”.",
    tipsTitle: "Trip-friendly tips",
    tipsSubtitle: "Practical stuff that makes the week smoother.",
    backToTop: "Back to top",
    footerMeta: "Open in any browser. Works best with internet (map tiles).",
    legendPrefix: "Day",
    openMap: "Show on map",
    whyLabel: "Why this day is great:"
  },
  ru: {
    mapTitle: "Где всё находится",
    mapSubtitle: "Интерактивная карта маршрута и точек. Нажимайте пины — и переходите к нужному дню.",
    highlightsTitle: "Моменты «вау»",
    highlightsSubtitle: "Короткий список эмоциональных пиков — то, что будет вспоминаться с улыбкой.",
    itineraryTitle: "План по дням",
    itinerarySubtitle: "Понятные карточки: зона дня, ключевые точки и «почему это круто».",
    tipsTitle: "Советы на неделю",
    tipsSubtitle: "Практичные вещи для спокойной поездки.",
    backToTop: "Наверх",
    footerMeta: "Открывается в любом браузере. Для карты нужен интернет (тайлы).",
    legendPrefix: "День",
    openMap: "Показать на карте",
    whyLabel: "Почему этот день классный:"
  }
};

let currentLang = "en";
let map;
let markerLayer;
let routeLayer;
let cityLayer;
let markerIndexByDay = new Map();

function t(obj) {
  if (obj == null) return "";
  if (typeof obj === "string") return obj;
  if (typeof obj === "object") return obj[currentLang] ?? obj.en ?? Object.values(obj)[0] ?? "";
  return String(obj);
}

function coverDiv(className, url, label) {
  const grad = "linear-gradient(180deg, rgba(0,0,0,.14), rgba(0,0,0,.38))";
  return el("div", {
    class: className,
    role: "img",
    "aria-label": label,
    style: `background-image: ${grad}, url("${url}")`
  });
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
    else node.setAttribute(k, v);
  });
  for (const c of children) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  return node;
}

function renderTop() {
  document.getElementById("tripTitle").textContent = t(TRIP.title);
  document.getElementById("tripSubtitle").textContent = t(TRIP.subtitle);
  document.getElementById("tripDates").textContent = t(TRIP.dates);
  document.getElementById("heroTitle").textContent = t(TRIP.heroTitle);
  document.getElementById("heroLead").textContent = t(TRIP.heroLead);
  document.getElementById("tileA").textContent = t(TRIP.collage.a);
  document.getElementById("tileB").textContent = t(TRIP.collage.b);
  document.getElementById("tileC").textContent = t(TRIP.collage.c);
  document.getElementById("tileD").textContent = t(TRIP.collage.d);

  const noteEl = document.getElementById("note");
  if (noteEl) noteEl.textContent = t(TRIP.tripNote);

  document.getElementById("footerTitle").textContent = t(TRIP.footerTitle);

  const ui = I18N[currentLang];
  document.getElementById("mapTitle").textContent = ui.mapTitle;
  document.getElementById("mapSubtitle").textContent = ui.mapSubtitle;
  document.getElementById("highlightsTitle").textContent = ui.highlightsTitle;
  document.getElementById("highlightsSubtitle").textContent = ui.highlightsSubtitle;
  document.getElementById("itineraryTitle").textContent = ui.itineraryTitle;
  document.getElementById("itinerarySubtitle").textContent = ui.itinerarySubtitle;
  document.getElementById("tipsTitle").textContent = ui.tipsTitle;
  document.getElementById("tipsSubtitle").textContent = ui.tipsSubtitle;
  document.getElementById("backToTop").textContent = ui.backToTop;
  document.getElementById("footerMeta").textContent = ui.footerMeta;
}

function renderStats() {
  const root = document.getElementById("stats");
  root.innerHTML = "";
  const stopsCount = TRIP.days.reduce((acc, d) => acc + (d.stops?.length ?? 0), 0);
  const stats = [
    { k: currentLang === "ru" ? "Дней" : "Days", v: String(TRIP.days.length) },
    { k: currentLang === "ru" ? "База" : "Home base", v: "Poble-sec" },
    { k: currentLang === "ru" ? "Остановок" : "Stops", v: String(stopsCount) }
  ];
  for (const s of stats) {
    root.appendChild(
      el("div", { class: "stat" }, [
        el("div", { class: "stat__k" }, [s.k]),
        el("div", { class: "stat__v" }, [s.v])
      ])
    );
  }
}

function renderHighlights() {
  const root = document.getElementById("highlightsGrid");
  root.innerHTML = "";
  TRIP.highlights.forEach((h) => {
    const media = h.image?.url
      ? coverDiv("card__media", h.image.url, t(h.image.alt) || t(h.title))
      : null;
    const pills = el(
      "div",
      { class: "pillRow" },
      (h.pills ?? []).map((p) => el("div", { class: "pill" }, [t(p)]))
    );
    root.appendChild(
      el("div", { class: "card" }, [
        ...(media ? [media] : []),
        el("h3", { class: "card__title" }, [t(h.title)]),
        el("p", { class: "card__meta" }, [t(h.meta)]),
        el("div", { class: "card__body" }, [t(h.body)]),
        pills
      ])
    );
  });
}

function renderTips() {
  const root = document.getElementById("tipsGrid");
  root.innerHTML = "";
  TRIP.tips.forEach((tip) => {
    root.appendChild(
      el("div", { class: "card" }, [
        el("h3", { class: "card__title" }, [t(tip.title)]),
        el("div", { class: "card__body" }, [t(tip.body)])
      ])
    );
  });
}

function dayAnchor(dayNum) {
  return `day-${dayNum}`;
}

function panToDay(dayNum) {
  const entry = markerIndexByDay.get(dayNum);
  if (!entry || !map) return;
  const { latlng, marker } = entry;
  map.setView(latlng, Math.max(map.getZoom(), 13), { animate: true, duration: 0.6 });
  marker.openPopup();
  const target = document.getElementById(dayAnchor(dayNum));
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderDays() {
  const root = document.getElementById("days");
  root.innerHTML = "";
  const ui = I18N[currentLang];
  TRIP.days.forEach((d) => {
    const tags = (d.tags ?? []).map((tag) => el("div", { class: "mini" }, [t(tag)]));
    const jumpBtn = el(
      "button",
      { class: "btn btn--ghost", type: "button", onClick: () => panToDay(d.day) },
      [ui.openMap]
    );
    const list = el(
      "div",
      { class: "list" },
      (d.stops ?? []).map((s) =>
        el("div", { class: "item" }, [
          ...(s.img?.url
            ? [coverDiv("thumb", s.img.url, t(s.img.alt) || t(s.title))]
            : []),
          el("div", { class: "time" }, [t(s.time)]),
          el("div", { class: "item__main" }, [
            el("p", { class: "item__title" }, [t(s.title)]),
            el("p", { class: "item__desc" }, [t(s.desc)])
          ])
        ])
      )
    );
    const why = el("div", { class: "why" }, [el("strong", {}, [ui.whyLabel]), " ", t(d.why)]);
    root.appendChild(
      el("article", { class: "day", id: dayAnchor(d.day) }, [
        el("div", { class: "day__top" }, [
          el("div", { class: "day__left" }, [
            el("div", { class: "badge" }, [String(d.day)]),
            el("div", {}, [
              el("h3", { class: "day__title" }, [t(d.title)]),
              el("div", { class: "day__meta" }, [d.date ? `${t(d.date)} • ${t(d.base)}` : t(d.base)])
            ])
          ]),
          el("div", { class: "day__right" }, [...tags, jumpBtn])
        ]),
        el("div", { class: "day__body" }, [list, why])
      ])
    );
  });
}

function initMap() {
  const start = TRIP.days[0]?.center ?? { lat: 41.3874, lng: 2.1686 };
  map = L.map("leafletMap", { zoomControl: true }).setView([start.lat, start.lng], 12);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);
  routeLayer = L.layerGroup().addTo(map);
  cityLayer = L.layerGroup().addTo(map);
}

function markerColorByDay(dayNum) {
  const palette = ["#7C3AED", "#06B6D4", "#F97316", "#22C55E", "#E11D48", "#F59E0B", "#60A5FA", "#A78BFA"];
  return palette[(dayNum - 1) % palette.length];
}

function makeDotIcon(color) {
  const svg = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
      <defs>
        <filter id="s" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="rgba(0,0,0,.45)"/>
        </filter>
      </defs>
      <circle cx="17" cy="17" r="10" fill="${color}" filter="url(#s)"/>
      <circle cx="17" cy="17" r="14" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="2"/>
    </svg>`
  );
  return L.icon({
    iconUrl: `data:image/svg+xml,${svg}`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -12]
  });
}

function renderCityLabels() {
  if (!cityLayer) return;
  cityLayer.clearLayers();
  const cities = [{ name: { en: "Barcelona", ru: "Барселона" }, lat: 41.3874, lng: 2.1686 }];
  const icon = (label) =>
    L.divIcon({
      className: "cityLabel",
      html: `<div class="cityLabel__bubble">${escapeHtml(label)}</div>`,
      iconSize: [1, 1]
    });
  for (const c of cities) {
    L.marker([c.lat, c.lng], { icon: icon(t(c.name)), interactive: false }).addTo(cityLayer);
  }
}

function renderMapOverlays() {
  if (!map) initMap();
  markerLayer.clearLayers();
  routeLayer.clearLayers();
  cityLayer?.clearLayers?.();
  markerIndexByDay.clear();
  const ui = I18N[currentLang];
  const routePoints = [];
  for (const d of TRIP.days) {
    const firstStop = d.stops?.find((s) => s.coord);
    const latlng = firstStop?.coord
      ? [firstStop.coord.lat, firstStop.coord.lng]
      : d.center
        ? [d.center.lat, d.center.lng]
        : null;
    if (!latlng) continue;
    routePoints.push(latlng);
    const color = markerColorByDay(d.day);
    const icon = makeDotIcon(color);
    const popupTitle = `${ui.legendPrefix} ${d.day}: ${t(d.base)}`;
    const popupBody = t(d.title);
    const marker = L.marker(latlng, { icon })
      .addTo(markerLayer)
      .bindPopup(
        `<div style="font-weight:900;margin-bottom:4px">${escapeHtml(popupTitle)}</div><div style="color:rgba(255,255,255,.78)">${escapeHtml(popupBody)}</div>`
      );
    marker.on("click", () => {
      const target = document.getElementById(dayAnchor(d.day));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    markerIndexByDay.set(d.day, { latlng: L.latLng(latlng[0], latlng[1]), marker });
  }
  if (routePoints.length >= 2) {
    L.polyline(routePoints, {
      color: "rgba(255,255,255,.75)",
      weight: 3,
      opacity: 0.8,
      dashArray: "6 8"
    }).addTo(routeLayer);
    map.fitBounds(routePoints, { padding: [40, 40] });
  } else if (routePoints.length === 1) {
    map.setView(routePoints[0], 12);
  }
  renderCityLabels();
  renderLegend();
}

function renderLegend() {
  const ui = I18N[currentLang];
  const root = document.getElementById("mapLegend");
  root.innerHTML = "";
  TRIP.days.forEach((d) => {
    const color = markerColorByDay(d.day);
    const dot = el("div", {
      class: "dot",
      style: `background:${color}; box-shadow: 0 0 0 4px ${hexToRgba(color, 0.18)}`
    });
    const text = el("div", { class: "legendItem__text" }, [`${ui.legendPrefix} ${d.day} • ${t(d.base)}`]);
    const item = el("button", { class: "legendItem", type: "button", onClick: () => panToDay(d.day) }, [dot, text]);
    root.appendChild(item);
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function hexToRgba(hex, a) {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const num = parseInt(full, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r},${g},${b},${a})`;
}

function rerenderAll() {
  renderTop();
  renderStats();
  renderHighlights();
  renderTips();
  renderDays();
  renderMapOverlays();
  if (map) requestAnimationFrame(() => map.invalidateSize());
}

function init() {
  document.body.id = "top";
  try {
    const saved = localStorage.getItem("bcn-lang");
    if (saved === "ru" || saved === "en") currentLang = saved;
  } catch (_) {}
  document.documentElement.lang = currentLang === "ru" ? "ru" : "en";
  document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ru" : "en";
    document.documentElement.lang = currentLang === "ru" ? "ru" : "en";
    try {
      localStorage.setItem("bcn-lang", currentLang);
    } catch (_) {}
    rerenderAll();
  });
  rerenderAll();
}

document.addEventListener("DOMContentLoaded", init);
