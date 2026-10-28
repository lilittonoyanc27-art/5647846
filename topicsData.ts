import { Topic } from './types.ts';

export const TOPICS: Topic[] = [
  // ==========================================
  // BLOQUE 1: LA LITERATURA
  // ==========================================
  {
    id: 'tema-1',
    bloqueId: 1,
    bloqueTitle: 'Bloque 1 — La Literatura',
    bloqueTitleHy: 'Բաժին 1 — Գրականություն',
    number: 1,
    title: 'La literatura popular',
    titleHy: 'Ժողովրդական գրականություն',
    subtitle: 'Obras anónimas, transmisión oral y características del pueblo',
    subtitleHy: 'Անանուն գործեր, բանավոր փոխանցում և ժողովրդի առանձնահատկություններ',
    iconName: 'BookOpen',
    summary: [
      {
        es: 'La literatura popular es el conjunto de obras literarias que pertenecen a toda la colectividad y se transmiten de boca en boca a lo largo del tiempo.',
        hy: 'Ժողովրդական գրականությունը այն գրական ստեղծագործությունների ամբողջությունն է, որոնք պատկանում են ողջ հանրույթին և ժամանակի ընթացքում բերանից բերան են փոխանցվում:'
      },
      {
        es: 'Estas obras son anónimas porque su creador original se ha olvidado y la propia comunidad las ha hecho suyas modificándolas en cada época.',
        hy: 'Այդ գործերն անանուն են, քանի որ դրանց սկզբնական ստեղծողը մոռացվել է, իսկ հանրույթը դրանք յուրացրել է՝ յուրաքանչյուր դարաշրջանում փոփոխելով:'
      }
    ],
    sections: [
      {
        title: '¿Qué es la literatura popular y por qué pertenece al pueblo?',
        titleHy: 'Ի՞նչ է ժողովրդական գրականությունը և ինչո՞ւ է այն պատկանում ժողովրդին',
        content: [
          {
            es: 'La literatura popular reúne todas aquellas creaciones artísticas que nacen en el seno del pueblo llano para expresar sus sentimientos, vivencias, miedos y alegrías.',
            hy: 'Ժողովրդական գրականությունը միավորում է այն բոլոր գեղարվեստական ստեղծագործությունները, որոնք ծնվում են հասարակ ժողովրդի գրկում՝ արտահայտելու նրա զգացմունքները, ապրումները, վախերն ու ուրախությունները:'
          },
          {
            es: 'Decimos que pertenece al pueblo porque no es propiedad de un escritor individual, sino patrimonio de toda la sociedad que la escucha y la repite.',
            hy: 'Մենք ասում ենք, որ այն պատկանում է ժողովրդին, քանի որ այն մեկ առանձին գրողի սեփականությունը չէ, այլ ողջ հասարակության ժառանգությունը, որը լսում և կրկնում է այն:'
          },
          {
            es: 'En el pasado, la gran mayoría de la población no sabía leer ni escribir, por lo que la literatura se difundía exclusivamente a través de la voz.',
            hy: 'Անցյալում բնակչության ճնշող մեծամասնությունը չգիտեր կարդալ և գրել, ուստի գրականությունը տարածվում էր բացառապես ձայնի միջոցով:'
          }
        ]
      },
      {
        title: 'El carácter anónimo y las modificaciones constantes',
        titleHy: 'Անանուն բնույթը և մշտական փոփոխությունները',
        content: [
          {
            es: 'Una obra es anónima cuando se desconoce quién fue la primera persona que la compuso.',
            hy: 'Ստեղծագործությունն անանուն է, երբ անհայտ է, թե ով է եղել այն առաջինը հորինողը:'
          },
          {
            es: 'Al transmitirse oralmente de una generación a otra, cada narrador o cantor añade, quita o cambia detalles según su memoria y sus gustos.',
            hy: 'Սերնդեսերունդ բանավոր փոխանցվելիս յուրաքանչյուր պատմող կամ երգիչ ավելացնում, հանում կամ փոխում է մանրամասները՝ ըստ իր հիշողության և ճաշակի:'
          },
          {
            es: 'Por esta razón, de una misma canción o de un mismo romance popular existen numerosas versiones distintas en diferentes regiones de España.',
            hy: 'Այս պատճառով միևնույն ժողովրդական երգի կամ ռոմանսի բազմաթիվ տարբերակներ գոյություն ունեն Իսպանիայի տարբեր շրջաններում:'
          }
        ]
      },
      {
        title: 'Transmisión oral frente a transmisión escrita',
        titleHy: 'Բանավոր փոխանցումն ընդդեմ գրավոր փոխանցման',
        content: [
          {
            es: 'La transmisión oral depende de la memoria de las personas, del canto y de la recitación en plazas, celebraciones o reuniones familiares.',
            hy: 'Բանավոր փոխանցումը կախված է մարդկանց հիշողությունից, երգեցողությունից և հրապարակներում, տոնակատարություններում կամ ընտանեկան հավաքույթներում արտասանելուց:'
          },
          {
            es: 'La transmisión escrita, en cambio, fija el texto en papel o soporte digital para que no varíe con el paso de los siglos.',
            hy: 'Իսկ գրավոր փոխանցումը, ընդհակառակը, ամրագրում է տեքստը թղթի կամ թվային կրիչի վրա, որպեսզի այն դարերի ընթացքում չփոփոխվի:'
          },
          {
            es: 'Muchas obras populares lograron conservarse hasta nuestros días gracias a eruditos que las recopilaron por escrito en cancioneros y romanceros.',
            hy: 'Շատ ժողովրդական գործեր կարողացան պահպանվել մինչև մեր օրերը գիտնականների շնորհիվ, ովքեր դրանք գրի առան երգարաններում և ռոմանսների ժողովածուներում:'
          }
        ]
      },
      {
        title: 'Rasgos de estilo: brevedad, música, onomatopeyas y estribillos',
        titleHy: 'Ոճական հատկանիշներ՝ հակիրճություն, երաժշտություն, բնաձայնություններ և կրկներգեր',
        content: [
          {
            es: 'Las obras populares suelen ser breves para facilitar que la gente las memorice con rapidez.',
            hy: 'Ժողովրդական գործերը սովորաբար կարճ են, որպեսզի մարդիկ հեշտությամբ և արագ անգիր անեն:'
          },
          {
            es: 'La música acompaña con frecuencia a estos textos, aportando un ritmo pegadizo que ayuda a recordar los versos.',
            hy: 'Երաժշտությունը հաճախ ուղեկցում է այս տեքստերին՝ հաղորդելով տպավորիչ ռիթմ, որն օգնում է հիշել տողերը:'
          },
          {
            es: 'Utilizan un lenguaje coloquial muy cercano al habla diaria, con expresiones espontáneas y giros propios del pueblo.',
            hy: 'Դրանք օգտագործում են առօրյա-խոսակցական լեզու, որը շատ մոտ է ամենօրյա խոսքին՝ ժողովրդին բնորոշ անկեղծ արտահայտություններով:'
          },
          {
            es: 'Aparecen constantes llamadas de atención al oyente, como «oíd, señores» o «mirad bien», para mantener el interés del público.',
            hy: 'Հաճախ հանդիպում են ունկնդրի ուշադրությունը գրավող կոչեր, օրինակ՝ «լսե՛ք, պարոնայք» կամ «լավ նայե՛ք», հանդիսատեսի հետաքրքրությունը պահպանելու համար:'
          },
          {
            es: 'El estribillo es un verso o conjunto de versos que se repite periódicamente al final de cada estrofa, reforzando la estructura musical.',
            hy: 'Կրկներգը տող կամ տողերի խումբ է, որը պարբերաբար կրկնվում է յուրաքանչյուր տան վերջում՝ ուժեղացնելով երաժշտական կառուցվածքը:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«Tres morillas me enamoran en Jaén: Axa y Fátima y Marién. Tres morillas tan garridas iban a coger olivas, y hallábanlas cogidas en Jaén: Axa y Fátima y Marién».',
        textHy: '«Խաենում երեք մավրուհիներ ինձ սիրահարեցրին՝ Աշան, Ֆաթիման և Մարիենը: Երեք գեղեցկուհի մավրուհիներ գնացին ձիթապտուղ հավաքելու, բայց այն արդեն հավաքված գտան Խաենում՝ Աշան, Ֆաթիման և Մարիենը»:',
        analysis: 'Canción lírica popular tradicional. Presenta versos cortos, repetición de estribillo («Axa y Fátima y Marién»), musicalidad y temática cotidiana.',
        analysisHy: 'Ավանդական ժողովրդական քնարական երգ: Աչքի է ընկնում կարճ տողերով, կրկներգի կրկնությամբ, երաժշտականությամբ և առօրյա թեմայով:'
      },
      {
        text: '«Aserrín, aserrán, los maderos de San Juan, piden pan, no les dan, piden queso, les dan un hueso».',
        textHy: '«Սղոց-սղոց, Սան Խուանի գերաններ, հաց են ուզում՝ չեն տալիս, պանիր են ուզում՝ ոսկոր են տալիս»:',
        analysis: 'Rima infantil tradicional transmitida oralmente. Utiliza onomatopeyas y ritmo marcado.',
        analysisHy: 'Մանկական ավանդական հանգ, որը փոխանցվել է բանավոր: Օգտագործում է բնաձայնություն և շեշտված ռիթմ:'
      }
    ],
    examTips: [
      {
        es: 'En el examen, si te preguntan por las tres claves de la literatura popular, responde siempre: autor anónimo, transmisión oral y existencia de múltiples versiones.',
        hy: 'Քննության ժամանակ, եթե հարցնեն ժողովրդական գրականության երեք հիմնասյուները, միշտ պատասխանիր՝ անանուն հեղինակ, բանավոր փոխանցում և բազմաթիվ տարբերակների առկայություն:'
      },
      {
        es: 'No confundas autor anónimo con autor desconocido por falta de documentos: la obra popular es anónima porque pertenece a la colectividad.',
        hy: 'Մի՛ շփոթիր անանուն հեղինակը փաստաթղթերի բացակայության պատճառով անհայտ հեղինակի հետ. ժողովրդական գործն անանուն է, որովհետև պատկանում է ողջ հանրույթին:'
      }
    ],
    commonPitfalls: [
      {
        es: 'Creer que la literatura popular solo está escrita en verso: también existen cuentos y leyendas populares en prosa.',
        hy: 'Կարծել, թե ժողովրդական գրականությունը միայն չափածո է. կան նաև ժողովրդական հեքիաթներ ու ավանդազրույցներ արձակով:'
      }
    ]
  },

  // ==========================================
  // Tema 2: El romance
  // ==========================================
  {
    id: 'tema-2',
    bloqueId: 1,
    bloqueTitle: 'Bloque 1 — La Literatura',
    bloqueTitleHy: 'Բաժին 1 — Գրականություն',
    number: 2,
    title: 'El romance',
    titleHy: 'Ռոմանսը',
    subtitle: 'Métrica octosílaba, rima asonante en versos pares y tradición oral',
    subtitleHy: 'Ութավանկ տաղաչափություն, զույգ տողերի ասոնանս հանգ և բանավոր ավանդույթ',
    iconName: 'Music',
    summary: [
      {
        es: 'El romance es una composición poética tradicional española formada por una serie indefinida de versos octosílabos (de 8 sílabas).',
        hy: 'Ռոմանսը իսպանական ավանդական բանաստեղծական կառուցվածք է, որը կազմված է անորոշ քանակությամբ ութավանկ (8 վանկանի) տողերից:'
      },
      {
        es: 'Tiene rima asonante en los versos pares, mientras que los versos impares quedan sueltos, es decir, sin rima.',
        hy: 'Այն ունի ասոնանս հանգ զույգ տողերում, մինչդեռ կենտ տողերը մնում են ազատ, այսինքն՝ առանց հանգի:'
      }
    ],
    sections: [
      {
        title: 'Estructura métrica exacta del romance',
        titleHy: 'Ռոմանսի ճշգրիտ տաղաչափական կառուցվածքը',
        content: [
          {
            es: 'Todos los versos del romance son de arte menor porque tienen ocho sílabas métricas (octosílabos).',
            hy: 'Ռոմանսի բոլոր տողերը պատկանում են փոքր արվեստին (arte menor), քանի որ ունեն ութ տաղաչափական վանկ (ութավանկ են):'
          },
          {
            es: 'El número de versos no es fijo: puede tener veinte, cincuenta o más de cien versos seguidos sin separarse en estrofas cerradas.',
            hy: 'Տողերի քանակը հաստատուն չէ. կարող է ունենալ քսան, հիսուն կամ հարյուրից ավելի հաջորդական տողեր՝ առանց փակ տների բաժանվելու:'
          },
          {
            es: 'La rima es asonante: a partir de la última vocal acentuada de cada verso par, solo coinciden los sonidos vocálicos.',
            hy: 'Հանգը ասոնանս է. յուրաքանչյուր զույգ տողի վերջին շեշտված ձայնավորից սկսած համընկնում են միայն ձայնավոր հնչյունները:'
          },
          {
            es: 'Los versos impares (el primero, el tercero, el quinto...) no riman con ningún otro verso; se llaman versos sueltos o libres.',
            hy: 'Կենտ տողերը (առաջինը, երրորդը, հինգերորդը...) չեն հանգավորվում որևէ այլ տողի հետ. դրանք կոչվում են ազատ տողեր:'
          }
        ]
      },
      {
        title: 'Cómo contar las sílabas de un verso en español',
        titleHy: 'Ինչպես հաշվել բանաստեղծական տողի վանկերը իսպաներենում',
        content: [
          {
            es: 'Regla 1 — Sinalefa: cuando una palabra termina en vocal y la siguiente empieza por vocal o «h», se unen en una sola sílaba métrica.',
            hy: 'Կանոն 1 — Սինալեֆա. երբ բառն ավարտվում է ձայնավորով, իսկ հաջորդը սկսվում է ձայնավորով կամ «h»-ով, դրանք միաձուլվում են մեկ տաղաչափական վանկի մեջ:'
          },
          {
            es: 'Regla 2 — Palabra final aguda: si la última palabra del verso es aguda (acento en la última sílaba), se suma obligatoriamente una sílaba (+1).',
            hy: 'Կանոն 2 — Վերջին բառը սուր (aguda). եթե տողի վերջին բառի շեշտը ընկած է վերջին վանկի վրա, պարտադիր գումարվում է մեկ վանկ (+1):'
          },
          {
            es: 'Regla 3 — Palabra final llana: si la última palabra es llana (acento en la penúltima sílaba), el número de sílabas se queda exactamente igual.',
            hy: 'Կանոն 3 — Վերջին բառը հարթ (llana). եթե վերջին բառի շեշտը նախավերջին վանկի վրա է, վանկերի քանակը մնում է նույնը:'
          },
          {
            es: 'Regla 4 — Palabra final esdrújula: si la última palabra es esdrújula (acento en la antepenúltima sílaba), se resta obligatoriamente una sílaba (-1).',
            hy: 'Կանոն 4 — Վերջին բառը վերջընթերց (esdrújula). եթե վերջին բառի շեշտը երրորդ վանկի վրա է վերջից, պարտադիր հանվում է մեկ վանկ (-1):'
          }
        ]
      },
      {
        title: 'Diferencia esencial: rima asonante frente a rima consonante',
        titleHy: 'Էական տարբերություն. ասոնանս հանգն ընդդեմ կոնսոնանս հանգի',
        content: [
          {
            es: 'En la rima asonante solo se repiten las vocales a partir de la última vocal tónica (ejemplo: «barco» y «brazo» riman en a-o).',
            hy: 'Ասոնանս հանգում կրկնվում են միայն ձայնավորները վերջին շեշտված ձայնավորից սկսած (օրինակ՝ «barco» և «brazo» հանգավորվում են a-o ձայնավորներով):'
          },
          {
            es: 'En la rima consonante se repiten exactamente todos los sonidos, tanto vocales como consonantes (ejemplo: «casa» y «pasa»).',
            hy: 'Կոնսոնանս հանգում ճշգրտորեն կրկնվում են բոլոր հնչյունները՝ ինչպես ձայնավորները, այնպես էլ բաղաձայնները (օրինակ՝ «casa» և «pasa»):'
          },
          {
            es: 'El romance emplea siempre rima asonante en los versos pares.',
            hy: 'Ռոմանսը միշտ օգտագործում է ասոնանս հանգ զույգ տողերում:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«Que por mayo era, por mayo, (8 -)\ncuando hace la calor, (7+1 = 8 a)\ncuando los trigos encañan (8 -)\ny están los campos en flor, (7+1 = 8 a)\ncuando los enamorados (8 -)\nvan a servir al amor». (7+1 = 8 a)',
        textHy: '«Մայիս ամիսն էր, մայիսը,\nերբ շոգ է լինում,\nերբ ցորենն է հասկակալում,\nու դաշտերը ծաղկունքի մեջ են,\nերբ սիրահարվածները\nգնում են սիրուն ծառայելու»:',
        analysis: 'Romance del prisionero. Todos los versos son octosílabos. Los versos pares (calor, flor, amor) riman en asonante con la vocal «o» (palabras agudas +1).',
        analysisHy: 'Բանտարկյալի ռոմանսը: Բոլոր տողերն ութավանկ են: Զույգ տողերը (calor, flor, amor) հանգավորվում են ասոնանսով «o» ձայնավորով (սուր բառեր են, ուստի +1):'
      }
    ],
    examTips: [
      {
        es: 'Si te dan un poema en el examen y ves versos de 8 sílabas con rima solo en las líneas 2, 4, 6, 8... es un ROMANCE sin duda.',
        hy: 'Եթե քննությանը քեզ տան բանաստեղծություն և տեսնես 8 վանկանի տողեր, որոնք հանգավորվում են միայն 2, 4, 6, 8 տողերում... դա անկասկած ՌՈՄԱՆՍ է:'
      }
    ],
    commonPitfalls: [
      {
        es: 'Olvidar sumar una sílaba cuando el verso termina en palabra aguda o monosílaba (como flor, sol, pan).',
        hy: 'Մոռանալ գումարել մեկ վանկ, երբ տողն ավարտվում է սուր կամ միավանկ բառով (ինչպես flor, sol, pan):'
      }
    ]
  },

  // ==========================================
  // Tema 3: La leyenda
  // ==========================================
  {
    id: 'tema-3',
    bloqueId: 1,
    bloqueTitle: 'Bloque 1 — La Literatura',
    bloqueTitleHy: 'Բաժին 1 — Գրականություն',
    number: 3,
    title: 'La leyenda',
    titleHy: 'Ավանդազրույցը (լեգենդը)',
    subtitle: 'Hechos reales combinados con elementos fantásticos y arraigo local',
    subtitleHy: 'Իրական փաստեր՝ միախառնված հրաշապատում տարրերով և տեղային արմատներով',
    iconName: 'Compass',
    summary: [
      {
        es: 'La leyenda es una narración tradicional que relata hechos basados en personajes, lugares o sucesos históricos reales pero transformados por la fantasía popular.',
        hy: 'Լեգենդը ավանդական պատմություն է, որը պատմում է իրական պատմական կերպարների, վայրերի կամ դեպքերի վրա հիմնված փաստեր, բայց վերափոխված ժողովրդական երևակայությամբ:'
      },
      {
        es: 'A diferencia del mito, la leyenda transcurre en un tiempo histórico concreto y en un lugar geográfico identificable en el mapa.',
        hy: 'Ի տարբերություն առասպելի՝ լեգենդը տեղի է ունենում կոնկրետ պատմական ժամանակաշրջանում և քարտեզի վրա նույնականացվող աշխարհագրական վայրում:'
      }
    ],
    sections: [
      {
        title: 'Características definitorias de la leyenda',
        titleHy: 'Լեգենդի բնորոշ հատկանիշները',
        content: [
          {
            es: 'Base real o histórica: suele partir de un acontecimiento auténtico, de un personaje que existió o de un monumento antiguo como un castillo o una cueva.',
            hy: 'Իրական կամ պատմական հիմք. այն սովորաբար սկիզբ է առնում իրական դեպքից, գոյություն ունեցած անձից կամ հնագույն կառույցից, ինչպիսին է ամրոցը կամ քարանձավը:'
          },
          {
            es: 'Elementos sobrenaturales: con el tiempo se incorporan apariciones, milagros, maldiciones, monstruos o sucesos mágicos inexplicables.',
            hy: 'Գերբնական տարրեր. ժամանակի ընթացքում ավելանում են ուրվականների հայտնություններ, հրաշքներ, անեծքներ, հրեշներ կամ անբացատրելի կախարդական դեպքեր:'
          },
          {
            es: 'Localización geográfica precisa: la narración menciona ciudades, montañas, ríos o calles reales (por ejemplo, Toledo, el río Tajo o Sevilla).',
            hy: 'Ճշգրիտ աշխարհագրական տեղորոշում. պատմությունը հիշատակում է իրական քաղաքներ, լեռներ, գետեր կամ փողոցներ (օրինակ՝ Տոլեդոն, Տախո գետը կամ Սևիլյան):'
          },
          {
            es: 'Enseñanza o advertencia moral: con frecuencia la leyenda transmite una moraleja o explica el origen de una costumbre popular local.',
            hy: 'Բարոյախրատական ուսուցում կամ զգուշացում. հաճախ լեգենդը փոխանցում է խրատ կամ բացատրում տեղական ժողովրդական սովորույթի ծագումը:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«En la ciudad de Toledo, se cuenta que en el Callejón del Beso dos jóvenes enamorados de familias enemigas se asomaban a balcones opuestos. Una noche trágica, una sombra misteriosa acabó con sus vidas, y los vecinos afirman que aún se oye un susurro al anochecer».',
        textHy: '«Տոլեդո քաղաքում պատմում են, որ Համբույրի նրբանցքում թշնամի ընտանիքների երկու սիրահար երիտասարդներ դուրս էին գալիս դիմացի պատշգամբներ: Մի ողբերգական գիշեր խորհրդավոր ստվերը վերջ դրեց նրանց կյանքին, և հարևանները պնդում են, որ մայրամուտին դեռ լսվում է նրանց շշուկը»:',
        analysis: 'Es una leyenda: tiene localización real exacta (Toledo, callejón), personajes humanos y un desenlace misterioso con componente fantástico popular.',
        analysisHy: 'Սա լեգենդ է. ունի ճշգրիտ իրական վայր (Տոլեդո, նրբանցք), մարդկային կերպարներ և խորհրդավոր ավարտ՝ ժողովրդական ֆանտաստիկ տարրով:'
      }
    ],
    examTips: [
      {
        es: 'Para identificar una leyenda en el examen, busca siempre si el lugar existe en la realidad (ciudades, monumentos) y si los protagonistas son seres humanos.',
        hy: 'Քննության ժամանակ լեգենդը ճանաչելու համար միշտ փնտրիր, թե արդյոք վայրը գոյություն ունի իրականում (քաղաքներ, հուշարձաններ) և արդյոք գլխավոր հերոսները մարդիկ են:'
      }
    ],
    commonPitfalls: [
      {
        es: 'Confundir leyenda con mito: el mito lo protagonizan dioses y explica la creación del universo; la leyenda la protagonizan humanos en lugares reales.',
        hy: 'Շփոթել լեգենդը առասպելի հետ. առասպելի գլխավոր հերոսներն աստվածներն են և այն բացատրում է տիեզերքի ստեղծումը, իսկ լեգենդի հերոսները մարդիկ են իրական վայրերում:'
      }
    ]
  },

  // ==========================================
  // Tema 4: El mito
  // ==========================================
  {
    id: 'tema-4',
    bloqueId: 1,
    bloqueTitle: 'Bloque 1 — La Literatura',
    bloqueTitleHy: 'Բաժին 1 — Գրականություն',
    number: 4,
    title: 'El mito',
    titleHy: 'Առասպելը (միֆը)',
    subtitle: 'Dioses, héroes sobrenaturales y explicación del cosmos',
    subtitleHy: 'Աստվածներ, գերբնական հերոսներ և տիեզերքի բացատրություն',
    iconName: 'Sparkles',
    summary: [
      {
        es: 'El mito es un relato sagrado tradicional que intenta dar una respuesta imaginativa al origen del mundo, del ser humano y de las fuerzas naturales.',
        hy: 'Առասպելը ավանդական սրբազան պատմություն է, որը փորձում է երևակայական պատասխան տալ աշխարհի, մարդու և բնության ուժերի ծագմանը:'
      },
      {
        es: 'Sus personajes principales no son humanos comunes, sino dioses inmortales, semidioses y héroes legendarios con poderes sobrehumanos.',
        hy: 'Նրա գլխավոր հերոսները սովորական մարդիկ չեն, այլ անմահ աստվածներ, կիսաստվածներ և գերմարդկային ուժեր ունեցող լեգենդար հերոսներ:'
      }
    ],
    sections: [
      {
        title: 'Rasgos fundamentales del mito',
        titleHy: 'Առասպելի հիմնարար հատկանիշները',
        content: [
          {
            es: 'Tiempo sagrado e indeterminado: los mitos suceden en una época remota anterior a la historia humana conocida.',
            hy: 'Սրբազան և անորոշ ժամանակաշրջան. առասպելները տեղի են ունենում հեռավոր դարաշրջանում՝ հայտնի մարդկային պատմությունից առաջ:'
          },
          {
            es: 'Función explicativa: explican por qué existe el fuego, por qué llueve, por qué se suceden las estaciones del año o cómo se formó la tierra.',
            hy: 'Բացատրողական գործառույթ. դրանք բացատրում են, թե ինչու գոյություն ունի կրակը, ինչու է անձրև գալիս, ինչու են հաջորդում տարվա եղանակները կամ ինչպես է առաջացել երկիրը:'
          },
          {
            es: 'Carácter religioso y sagrado: formaban parte de las creencias y cultos de pueblos antiguos como griegos, romanos o egipcios.',
            hy: 'Կրոնական և սրբազան բնույթ. դրանք հնագույն ժողովուրդների (հույների, հռոմեացիների, եգիպտացիների) հավատալիքների ու պաշտամունքի մասն էին:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«Prometeo robó el fuego divino del Olimpo para entregárselo a los hombres mortales. El dios Zeus, enfurecido por la desobediencia, lo encadenó a una roca del monte Cáucaso donde un águila le devoraba eternamente el hígado».',
        textHy: '«Պրոմեթևսը Օլիմպոսից գողացավ աստվածային կրակը՝ մահկանացու մարդկանց նվիրելու համար: Զևս աստվածը, զայրացած այդ անհնազանդությունից, նրան շղթայեց Կովկասյան լեռների ժայռին, որտեղ արծիվը հավերժ կտցահարում էր նրա լյարդը»:',
        analysis: 'Es un mito clásico. Explica el origen del fuego y del progreso humano con dioses (Zeus) y titanes (Prometeo).',
        analysisHy: 'Դասական առասպել է: Բացատրում է կրակի և մարդկային առաջընթացի ծագումը աստվածների (Զևս) և տիտանների (Պրոմեթևս) միջոցով:'
      }
    ],
    examTips: [
      {
        es: 'Si el texto menciona dioses del Olimpo o responde a cómo se creó el mundo o un fenómeno universal, la respuesta es MITO.',
        hy: 'Եթե տեքստը հիշատակում է Օլիմպոսի աստվածներին կամ պատասխանում է աշխարհի կամ տիեզերական երևույթի ստեղծմանը, պատասխանն է՝ ԱՌԱՍՊԵԼ (MITO):'
      }
    ],
    commonPitfalls: [
      {
        es: 'No recordar que el mito no tiene base histórica comprobada; es una explicación simbólica del universo.',
        hy: 'Չհիշել, որ առասպելը չունի ապացուցված պատմական հիմք. այն տիեզերքի խորհրդանշական բացատրությունն է:'
      }
    ]
  },

  // ==========================================
  // Tema 5: El cuento
  // ==========================================
  {
    id: 'tema-5',
    bloqueId: 1,
    bloqueTitle: 'Bloque 1 — La Literatura',
    bloqueTitleHy: 'Բաժին 1 — Գրականություն',
    number: 5,
    title: 'El cuento',
    titleHy: 'Հեքիաթը / Պատմվածքը',
    subtitle: 'Narración breve, argumento lineal y estructura tripartita',
    subtitleHy: 'Կարճ պատմություն, գծային սյուժե և եռամաս կառուցվածք',
    iconName: 'Bookmark',
    summary: [
      {
        es: 'El cuento es una narración breve de ficción en prosa, caracterizada por tener un argumento sencillo y pocos personajes.',
        hy: 'Հեքիաթը/պատմվածքը գեղարվեստական կարճ արձակ պատմություն է, որը բնութագրվում է պարզ սյուժեով և քիչ կերպարներով:'
      },
      {
        es: 'Sigue una estructura clásica fija dividida en tres partes indispensables: inicio o planteamiento, nudo o conflicto, y desenlace final.',
        hy: 'Այն հետևում է դասական անփոփոխ կառուցվածքին՝ բաժանված երեք անհրաժեշտ մասերի՝ սկիզբ կամ նախադրություն, հանգույց կամ բախում, և վերջնական հանգուցալուծում:'
      }
    ],
    sections: [
      {
        title: 'Las tres partes de la estructura del cuento',
        titleHy: 'Հեքիաթի/պատմվածքի կառուցվածքի երեք մասերը',
        content: [
          {
            es: '1. Inicio (Planteamiento): se sitúa la acción, se presenta la época y el lugar, y conocemos al protagonista en su situación inicial de calma.',
            hy: '1. Սկիզբ (Նախադրություն). տեղադրվում է գործողությունը, ներկայացվում են ժամանակն ու վայրը, և ծանոթանում ենք գլխավոր հերոսի հետ նրա սկզբնական հանգիստ իրավիճակում:'
          },
          {
            es: '2. Nudo: surge un problema, obstáculo o misión que rompe el equilibrio anterior y obliga a los personajes a actuar para superarlo.',
            hy: '2. Հանգույց. ծագում է խնդիր, խոչընդոտ կամ առաջադրանք, որը խախտում է նախկին հավասարակշռությունը և ստիպում հերոսներին գործել այն հաղթահարելու համար:'
          },
          {
            es: '3. Desenlace: se resuelve de forma definitiva el conflicto del nudo, restableciendo un nuevo orden pacífico (favorable o desfavorable).',
            hy: '3. Հանգուցալուծում. վերջնականապես լուծվում է հանգույցի հակամարտությունը՝ վերականգնելով նոր խաղաղ կարգ (բարեհաջող կամ անբարեհաջող):'
          }
        ]
      },
      {
        title: 'Cuentos populares frente a cuentos de autor (literarios)',
        titleHy: 'Ժողովրդական հեքիաթներն ընդդեմ հեղինակային պատմվածքների',
        content: [
          {
            es: 'El cuento popular es anónimo, se transmitió de forma oral durante siglos y contiene fórmulas mágicas repetitivas como «Había una vez».',
            hy: 'Ժողովրդական հեքիաթն անանուն է, դարեր շարունակ փոխանցվել է բանավոր և պարունակում է կրկնվող կախարդական բանաձևեր, ինչպիսին է «Ժուկով-ժամանակով»-ը:'
          },
          {
            es: 'El cuento literario tiene un autor conocido concreto, se difunde por escrito y suele presentar un estilo personal más cuidado y elaborado.',
            hy: 'Գրական պատմվածքն ունի կոնկրետ հայտնի հեղինակ, տարածվում է գրավոր և սովորաբար ունի ավելի մշակված ու անհատական ոճ:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«Había una vez un leñador que perdió su hacha en el río. Mientras lloraba, un hada emergió del agua con un hacha de oro. El hombre honrado dijo que no era suya. El hada, premiando su sinceridad, le regaló el hacha dorada y la de plata».',
        textHy: '«Ժուկով-ժամանակով մի փայտահատ կար, ով գետում կորցրեց իր կացինը: Մինչ նա լաց էր լինում, ջրից մի փերի հայտնվեց ոսկե կացնով: Ազնիվ մարդն ասաց, որ դա իրենը չէ: Փերին, պարգևատրելով նրա անկեղծությունը, նրան նվիրեց և՛ ոսկե, և՛ արծաթե կացինը»:',
        analysis: 'Estructura nítida de cuento popular: inicio («Había una vez»), nudo (pérdida del hacha) y desenlace premiando la virtud del protagonista.',
        analysisHy: 'Ժողովրդական հեքիաթի հստակ կառուցվածք. սկիզբ («Ժուկով-ժամանակով»), հանգույց (կացնի կորուստ) և հանգուցալուծում՝ գլխավոր հերոսի առաքինությունը պարգևատրելով:'
      }
    ],
    examTips: [
      {
        es: 'Recuerda que un cuento siempre está escrito en PROSA y nunca en verso. Si ves versos octosílabos, no es un cuento, es un romance.',
        hy: 'Հիշի՛ր, որ պատմվածքը կամ հեքիաթը միշտ գրված է ԱՐՁԱԿՈՎ և երբեք՝ չափածո: Եթե տեսնում ես ութավանկ տողեր, դա հեքիաթ չէ, այլ ռոմանս:'
      }
    ],
    commonPitfalls: [
      {
        es: 'Confundir el inicio con el nudo: el nudo empieza justo cuando algo altera la rutina o surge el obstáculo.',
        hy: 'Շփոթել սկիզբը հանգույցի հետ. հանգույցն սկսվում է հենց այն պահին, երբ ինչ-որ բան խախտում է սովորական ընթացքը կամ խոչընդոտ է ծագում:'
      }
    ]
  },

  // ==========================================
  // BLOQUE 2: LA LITERATURA CULTA
  // ==========================================
  {
    id: 'tema-6',
    bloqueId: 2,
    bloqueTitle: 'Bloque 2 — La Literatura Culta',
    bloqueTitleHy: 'Բաժին 2 — Գեղարվեստական/Հեղինակային գրականություն',
    number: 6,
    title: 'La literatura culta',
    titleHy: 'Գրական (հեղինակային) գրականություն',
    subtitle: 'Autor conocido, transmisión escrita y elaboración formal exquisita',
    subtitleHy: 'Հայտնի հեղինակ, գրավոր փոխանցում և նրբագեղ ձևական մշակում',
    iconName: 'Feather',
    summary: [
      {
        es: 'La literatura culta es aquella creada por autores con formación intelectual reconocida que fijan sus obras por escrito con un lenguaje muy elaborado.',
        hy: 'Գրական (կուլտուրական) գրականությունն այն է, որը ստեղծվել է ճանաչված մտավորական հեղինակների կողմից, ովքեր իրենց գործերն ամրագրում են գրավոր՝ շատ մշակված լեզվով:'
      },
      {
        es: 'A diferencia de la literatura popular, la obra culta tiene autor conocido y un texto fijo e invariable que perdura a través de manuscritos o libros impresos.',
        hy: 'Ի տարբերություն ժողովրդական գրականության՝ հեղինակային գործն ունի հայտնի հեղինակ և հաստատուն, անփոփոխ տեքստ, որը պահպանվում է ձեռագրերի կամ տպագիր գրքերի միջոցով:'
      }
    ],
    sections: [
      {
        title: 'Rasgos esenciales de la literatura culta',
        titleHy: 'Հեղինակային գրականության էական հատկանիշները',
        content: [
          {
            es: 'Autor conocido: cada poema, novela o ensayo lleva la firma de un creador individual que se siente orgulloso de su autoría.',
            hy: 'Հայտնի հեղինակ. յուրաքանչյուր բանաստեղծություն, վեպ կամ էսսե կրում է անհատ ստեղծագործողի ստորագրությունը, ով հպարտանում է իր հեղինակությամբ:'
          },
          {
            es: 'Transmisión escrita: desde su origen se concibe sobre el papel; antes de la imprenta circulaba en códices manuscritos y después en libros impresos.',
            hy: 'Գրավոր փոխանցում. իր սկզբից ի վեր այն ստեղծվում է թղթի վրա. տպագրությունից առաջ տարածվում էր ձեռագիր մատյաններով, իսկ հետո՝ տպագիր գրքերով:'
          },
          {
            es: 'Texto fijo e inmutable: nadie puede alterar el texto original del autor; no existen múltiples versiones como ocurre en la literatura popular.',
            hy: 'Հաստատուն և անփոփոխ տեքստ. ոչ ոք չի կարող փոփոխել հեղինակի բնօրինակ տեքստը. չկան բազմաթիվ տարբերակներ, ինչպես ժողովրդական գրականության մեջ:'
          },
          {
            es: 'Lenguaje riguroso y selecto: el vocabulario es amplio y preciso, empleando figuras retóricas complejas y una sintaxis cuidadosamente planificada.',
            hy: 'Խիստ և ընտրյալ լեզու. բառապաշարը հարուստ է ու ճշգրիտ՝ կիրառելով բարդ հռետորական պատկերներ և մանրակրկիտ պլանավորված շարահյուսություն:'
          }
        ]
      },
      {
        title: 'Tabla comparativa fundamental: Popular VS Culta',
        titleHy: 'Հիմնարար համեմատական աղյուսակ. Ժողովրդական ընդդեմ Հեղինակայինի',
        content: [
          {
            es: 'Autor: en la popular es anónimo y colectivo; en la culta es un autor conocido con nombre propio.',
            hy: 'Հեղինակ. ժողովրդականում անանուն է և հավաքական, իսկ հեղինակայինում՝ հայտնի հեղինակ իր անունով:'
          },
          {
            es: 'Canal de transmisión: en la popular es la voz y el oído (oral); en la culta es el papel y la lectura (escrito).',
            hy: 'Փոխանցման ուղի. ժողովրդականում ձայնն ու լսողությունն են (բանավոր), իսկ հեղինակայինում՝ թուղթն ու ընթերցումը (գրավոր):'
          },
          {
            es: 'Variaciones: la obra popular tiene muchas versiones cambiantes; la culta tiene un único texto fijo e idéntico.',
            hy: 'Տարբերակներ. ժողովրդական գործն ունի բազմաթիվ փոփոխվող տարբերակներ, իսկ հեղինակայինը՝ մեկ միասնական, հաստատուն և նույնական տեքստ:'
          },
          {
            es: 'Estilo: la popular usa lenguaje sencillo, espontáneo y estribillos; la culta usa lenguaje selecto, culto y recursos sofisticados.',
            hy: 'Ոճ. ժողովրդականն օգտագործում է պարզ, անկաշկանդ լեզու և կրկներգեր, իսկ հեղինակայինը՝ ընտրյալ, բարձրաշխարհիկ լեզու և բարդ հնարքներ:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor».',
        author: 'Miguel de Cervantes (Don Quijote de la Mancha)',
        textHy: '«Լա Մանչայի մի գյուղում, որի անունը չեմ ցանկանում հիշել, ոչ վաղ անցյալում ապրում էր մի իդալգո՝ նրանցից, ովքեր նիզակ ունեն բնիկի մեջ, հնաոճ վահան, նիհար ձի և արագավազ որսաշուն»:',
        analysis: 'Ejemplo supremo de literatura culta: autor universalmente conocido (Cervantes), prosa culta, vocabulario selecto y fijado por escrito.',
        analysisHy: 'Հեղինակային գրականության բարձրագույն օրինակ. աշխարհահռչակ հեղինակ (Սերվանտես), մշակված արձակ, ընտրյալ բառապաշար և գրավոր ամրագրված:'
      }
    ],
    examTips: [
      {
        es: 'Si en el examen ves el nombre de un autor como Garcilaso, Cervantes o Quevedo, se trata obligatoriamente de LITERATURA CULTA.',
        hy: 'Եթե քննության մեջ տեսնես այնպիսի հեղինակի անուն, ինչպիսիք են Գարսիլասոն, Սերվանտեսը կամ Կևեդոն, դա պարտադիր ՀԵՂԻՆԱԿԱՅԻՆ ԳՐԱԿԱՆՈՒԹՅՈՒՆ Է (LITERATURA CULTA):'
      }
    ],
    commonPitfalls: [
      {
        es: 'Creer que un romance culto no existe: los poetas cultos también escribieron romances, pero con su firma y por escrito.',
        hy: 'Կարծել, թե հեղինակային ռոմանս գոյություն չունի. բանիմաց գրողները նույնպես գրել են ռոմանսներ, բայց իրենց ստորագրությամբ և գրավոր:'
      }
    ]
  },

  // ==========================================
  // BLOQUE 3: EL LENGUAJE LITERARIO
  // ==========================================
  {
    id: 'tema-7',
    bloqueId: 3,
    bloqueTitle: 'Bloque 3 — El Lenguaje Literario',
    bloqueTitleHy: 'Բաժին 3 — Գրական լեզուն',
    number: 7,
    title: 'El lenguaje literario',
    titleHy: 'Գրական լեզուն',
    subtitle: 'Finalidad estética, búsqueda de belleza y desviación creadora',
    subtitleHy: 'Գեղագիտական նպատակ, գեղեցկության որոնում և ստեղծագործական շեղում',
    iconName: 'Sparkle',
    summary: [
      {
        es: 'El lenguaje literario es una forma especial de utilizar las palabras con el propósito fundamental de crear belleza y provocar emociones en el lector.',
        hy: 'Գրական լեզուն բառերի օգտագործման հատուկ եղանակ է, որի հիմնական նպատակն է ստեղծել գեղեցկություն և ընթերցողի մեջ հույզեր առաջացնել:'
      },
      {
        es: 'A diferencia del lenguaje cotidiano, que busca transmitir información de manera rápida y clara, el lenguaje literario cuida la forma de la expresión artística.',
        hy: 'Ի տարբերություն առօրյա լեզվի, որը ձգտում է տեղեկատվությունը փոխանցել արագ և պարզ, գրական լեզուն հոգ է տանում գեղարվեստական արտահայտման ձևի մասին:'
      }
    ],
    sections: [
      {
        title: 'Lenguaje cotidiano frente a lenguaje literario',
        titleHy: 'Առօրյա լեզուն ընդդեմ գրական լեզվի',
        content: [
          {
            es: 'En el lenguaje cotidiano decimos simplemente: «Hoy está lloviendo muy fuerte y se moja el campo».',
            hy: 'Առօրյա լեզվում մենք պարզապես ասում ենք. «Այսօր շատ ուժեղ անձրև է գալիս, և դաշտը թրջվում է»:'
          },
          {
            es: 'En el lenguaje literario embellecemos la frase: «El cielo llora lágrimas de cristal que acarician la hierba dormida».',
            hy: 'Իսկ գրական լեզվում մենք գեղեցկացնում ենք նախադասությունը. «Երկինքը բյուրեղյա արցունքներ է լալիս, որոնք շոյում են քնած խոտը»:'
          },
          {
            es: 'El lenguaje literario llama la atención sobre sí mismo a través del ritmo, la musicalidad, la connotación y las figuras retóricas.',
            hy: 'Գրական լեզուն ուշադրություն է գրավում իր վրա ռիթմի, երաժշտականության, ենթատեքստի և հռետորական պատկերների միջոցով:'
          }
        ]
      }
    ],
    examples: [
      {
        text: 'Cotidiano: «La luna ilumina la noche oscura».\nLiterario: «Blanca perla suspendida en el manto de terciopelo de la noche».',
        textHy: 'Առօրյա. «Լուսինը լուսավորում է մութ գիշերը»:\nԳրական. «Գիշերվա թավշյա թիկնոցում կախված սպիտակ մարգարիտ»:',
        analysis: 'El texto literario utiliza la metáfora («blanca perla», «manto de terciopelo») para generar una impresión estética inolvidable.',
        analysisHy: 'Գրական տեքստն օգտագործում է փոխաբերություն («սպիտակ մարգարիտ», «թավշյա թիկնոց»)՝ անմոռանալի գեղագիտական տպավորություն ստեղծելու համար:'
      }
    ],
    examTips: [
      {
        es: 'La función principal del lenguaje literario es la función poética o estética: embellecer el mensaje para conmover al lector.',
        hy: 'Գրական լեզվի գլխավոր գործառույթը բանաստեղծական կամ գեղագիտական գործառույթն է՝ գեղեցկացնել հաղորդագրությունը ընթերցողին հուզելու համար:'
      }
    ],
    commonPitfalls: [
      {
        es: 'Pensar que el lenguaje literario solo sirve para comunicar datos objetivos: su fin primordial es estético y sensorial.',
        hy: 'Մտածել, թե գրական լեզուն ծառայում է միայն օբյեկտիվ տվյալներ հաղորդելուն. նրա առաջնային նպատակը գեղագիտական է և զգայական:'
      }
    ]
  },

  // ==========================================
  // Tema 8: La prosa y el verso
  // ==========================================
  {
    id: 'tema-8',
    bloqueId: 3,
    bloqueTitle: 'Bloque 3 — El Lenguaje Literario',
    bloqueTitleHy: 'Բաժին 3 — Գրական լեզուն',
    number: 8,
    title: 'La prosa y el verso',
    titleHy: 'Արձակը և չափածոն (բանաստեղծությունը)',
    subtitle: 'Diferencias estructurales, ritmo visual, renglón y métrica',
    subtitleHy: 'Կառուցվածքային տարբերություններ, տեսողական ռիթմ, տող և տաղաչափություն',
    iconName: 'AlignLeft',
    summary: [
      {
        es: 'La literatura puede manifestarse de dos maneras fundamentales: en prosa (la forma natural y continua del lenguaje) o en verso (con ritmo y medida fija).',
        hy: 'Գրականությունը կարող է դրսևորվել երկու հիմնարար ձևով՝ արձակ (լեզվի բնական և շարունակական ձևը) կամ չափածո (ռիթմով և հաստատուն չափով):'
      },
      {
        es: 'Visualmente, la prosa ocupa todo el ancho de la página hasta el margen, mientras que los versos se escriben en líneas cortas e independientes.',
        hy: 'Տեսողականորեն արձակը զբաղեցնում է էջի ամբողջ լայնությունը մինչև լուսանցք, իսկ չափածո տողերը գրվում են կարճ և ինքնուրույն տողերով:'
      }
    ],
    sections: [
      {
        title: 'Características de la prosa',
        titleHy: 'Արձակի հատկանիշները',
        content: [
          {
            es: 'No tiene una medida de sílabas predeterminada ni se somete a esquemas obligatorios de rima.',
            hy: 'Չունի նախապես որոշված վանկերի չափ և չի ենթարկվում հանգի պարտադիր սխեմաների:'
          },
          {
            es: 'Las oraciones se agrupan en párrafos separados por puntos y aparte.',
            hy: 'Նախադասությունները խմբավորվում են պարբերությունների մեջ՝ բաժանված նոր տողերով:'
          },
          {
            es: 'Es la forma habitual de géneros narrativos como la novela, el cuento largo, la biografía y la leyenda.',
            hy: 'Սա պատմողական ժանրերի սովորական ձևն է, ինչպիսիք են վեպը, երկար պատմվածքը, կենսագրությունը և լեգենդը:'
          }
        ]
      },
      {
        title: 'Características del verso',
        titleHy: 'Չափածոյի (բանաստեղծության) հատկանիշները',
        content: [
          {
            es: 'Cada línea de la composición poética es un verso con una cadencia sonora intencionada.',
            hy: 'Բանաստեղծական ստեղծագործության յուրաքանչյուր գիծ մի տող (վերս) է՝ միտումնավոր հնչյունային ներդաշնակությամբ:'
          },
          {
            es: 'Presenta ritmo regular basado en el cómputo silábico, la distribución de los acentos y la presencia de rima.',
            hy: 'Ունի կանոնավոր ռիթմ՝ հիմնված վանկերի հաշվարկի, շեշտերի բաշխման և հանգի առկայության վրա:'
          },
          {
            es: 'Los versos se organizan habitualmente en conjuntos llamados estrofas.',
            hy: 'Տողերը սովորաբար կազմակերպվում են տների (estrofas) մեջ:'
          }
        ]
      }
    ],
    examples: [
      {
        text: 'PROSA: «El viento soplaba con fuerza sobre los tejados de la aldea solitaria durante toda la noche de invierno».',
        textHy: 'ԱՐՁԱԿ. «Քամին ուժգին փչում էր ձմեռային ողջ գիշերվա ընթացքում միայնակ գյուղի տանիքների վրայով»:',
        analysis: 'Texto continuo que ocupa todo el renglón sin métrica ni rima.',
        analysisHy: 'Շարունակական տեքստ, որը զբաղեցնում է ամբողջ տողը՝ առանց տաղաչափության կամ հանգի:'
      },
      {
        text: 'VERSO:\n«El viento soplaba\ncon furia y clamor,\nla noche temblaba\ncon hondo dolor».',
        textHy: 'ՉԱՓԱԾՈ.\n«Քամին փչում էր\nկատաղությամբ ու աղաղակով,\nգիշերը դողում էր\nխորը ցավով»:',
        analysis: 'Líneas cortas con número medido de sílabas y rima alternada abab.',
        analysisHy: 'Կարճ տողեր՝ վանկերի չափված քանակով և խաչաձև abab հանգով:'
      }
    ],
    examTips: [
      {
        es: 'Fíjate en cómo termina la línea: si llega al margen derecho es PROSA; si se corta a mitad de página con ritmo es VERSO.',
        hy: 'Ուշադրությո՛ւն դարձրու տողի ավարտին. եթե հասնում է աջ լուսանցքին, ապա ԱՐՁԱԿ Է, եթե կտրվում է էջի մեջտեղում ռիթմով, ապա ՉԱՓԱԾՈ Է:'
      }
    ],
    commonPitfalls: [
      {
        es: 'Creer que todo el verso tiene que rimar por fuerza: existen versos blancos o libres que no riman pero siguen siendo versos por su ritmo.',
        hy: 'Կարծել, թե յուրաքանչյուր բանաստեղծական տող պետք է անպայման հանգավորվի. կան ազատ տողեր, որոնք չեն հանգավորվում, բայց մնում են չափածո իրենց ռիթմի շնորհիվ:'
      }
    ]
  },

  // ==========================================
  // BLOQUE 4: LAS FIGURAS LITERARIAS
  // NIVEL FÓNICO
  // ==========================================
  {
    id: 'tema-9',
    bloqueId: 4,
    bloqueTitle: 'Bloque 4 — Las Figuras Literarias (Nivel Fónico)',
    bloqueTitleHy: 'Բաժին 4 — Գեղարվեստական պատկերներ (Հնչյունական մակարդակ)',
    number: 9,
    title: 'La aliteración',
    titleHy: 'Բաղաձայնույթը (ալիտերացիան)',
    subtitle: 'Repetición intencionada de sonidos consonánticos para evocar sensaciones',
    subtitleHy: 'Բաղաձայն հնչյունների միտումնավոր կրկնություն՝ զգացողություններ արթնացնելու համար',
    iconName: 'Volume2',
    summary: [
      {
        es: 'La aliteración es un recurso literario de nivel fónico consistente en la repetición deliberada de uno o varios sonidos semejantes a lo largo de un verso o frase.',
        hy: 'Բաղաձայնույթը հնչյունական մակարդակի գրական հնարք է, որը կայանում է մեկ կամ մի քանի նմանատիպ հնչյունների միտումնավոր կրկնության մեջ տողի կամ նախադասության ընթացքում:'
      },
      {
        es: 'Su finalidad es producir un efecto estético musical y sugerir acústicamente aquello de lo que se está hablando (el trueno, el agua, el viento).',
        hy: 'Նրա նպատակն է ստեղծել գեղագիտական երաժշտական ազդեցություն և լսողականորեն ակնարկել այն երևույթը, որի մասին խոսվում է (որոտ, ջուր, քամի):'
      }
    ],
    sections: [
      {
        title: 'Cómo reconocer la aliteración en el examen',
        titleHy: 'Ինչպես ճանաչել բաղաձայնույթը քննության ժամանակ',
        content: [
          {
            es: 'Lee la frase en voz alta y presta atención a qué consonante se repite insistentemente en palabras seguidas.',
            hy: 'Կարդա՛ նախադասությունը բարձրաձայն և ուշադրությո՛ւն դարձրու, թե որ բաղաձայնն է համառորեն կրկնվում հաջորդական բառերում:'
          },
          {
            es: 'En el verso inmortal «El ruido con que rueda la ronca tempestad» de Zorrilla, el sonido de la «r» se repite cinco veces evocando la furia ensordecedora del temporal.',
            hy: 'Սորիլյայի անմահ «El ruido con que rueda la ronca tempestad» տողում «r» հնչյունը կրկնվում է հինգ անգամ՝ արթնացնելով փոթորկի խլացուցիչ կատաղությունը:'
          },
          {
            es: 'En «En el silencio solo se escuchaba un susurro de abejas que sonaba» de Garcilaso, la repetición del sonido «s» sugiere el zumbido suave y continuo de los insectos.',
            hy: 'Գարսիլասոյի «En el silencio solo se escuchaba un susurro de abejas que sonaba» տողում «s» հնչյունի կրկնությունն ակնարկում է մեղուների նուրբ ու շարունակական բզզոցը:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«El ruido con que rueda la ronca tempestad».',
        textHy: '«Աղմուկը, որով գլորվում է խռպոտ փոթորիկը»:',
        analysis: 'Repetición persistente del fonema /r/ para sugerir acústicamente la violencia del trueno.',
        analysisHy: '/r/ հնչյունի համառ կրկնություն՝ որոտի դաժանությունը լսողականորեն ակնարկելու համար:',
        highlightWords: ['ruido', 'rueda', 'ronca']
      },
      {
        text: '«Los claros clarines de pronto levantan sus sones».',
        textHy: '«Պայծառ շեփորները հանկարծ բարձրացնում են իրենց հնչյունները»:',
        analysis: 'Aliteración en /kl/ y /s/ imitando el toque brillante y estridente del instrumento marcial.',
        analysisHy: 'Բաղաձայնույթ /kl/ և /s/ հնչյուններով՝ նմանակելով ռազմական գործիքի պայծառ և սուր հնչողությունը:'
      }
    ],
    examTips: [
      {
        es: 'No te limites a contar letras: comprueba que los sonidos transmiten una sensación relacionada con el tema del poema.',
        hy: 'Մի՛ սահմանափակվիր տառերը հաշվելով. համոզվի՛ր, որ հնչյունները փոխանցում են բանաստեղծության թեմայի հետ կապված որևէ զգացողություն:'
      }
    ],
    commonPitfalls: [
      {
        es: 'Confundir la aliteración con la onomatopeya: la aliteración repite sonidos dentro de palabras normales; la onomatopeya imita un ruido real mediante vocablos específicos como «miau» o «pum».',
        hy: 'Շփոթել բաղաձայնույթը բնաձայնության հետ. բաղաձայնույթը կրկնում է հնչյուններ սովորական բառերի մեջ, իսկ բնաձայնությունը նմանակում է իրական աղմուկը հատուկ բառերով, ինչպիսիք են «միաու» կամ «բում»:'
      }
    ]
  },

  // ==========================================
  // Tema 10: La onomatopeya
  // ==========================================
  {
    id: 'tema-10',
    bloqueId: 4,
    bloqueTitle: 'Bloque 4 — Las Figuras Literarias (Nivel Fónico)',
    bloqueTitleHy: 'Բաժին 4 — Գեղարվեստական պատկերներ (Հնչյունական մակարդակ)',
    number: 10,
    title: 'La onomatopeya',
    titleHy: 'Բնաձայնությունը (օնոմատոպեան)',
    subtitle: 'Imitación lingüística directa de sonidos del mundo real',
    subtitleHy: 'Իրական աշխարհի ձայների ուղղակի լեզվական նմանակում',
    iconName: 'BellRing',
    summary: [
      {
        es: 'La onomatopeya es una palabra o expresión que imita o reproduce por escrito un sonido de la realidad física, como voces de animales o ruidos de objetos.',
        hy: 'Բնաձայնությունը բառ կամ արտահայտություն է, որը գրավոր նմանակում կամ վերարտադրում է ֆիզիկական իրականության ձայնը, ինչպիսիք են կենդանիների ձայները կամ իրերի աղմուկը:'
      },
      {
        es: 'Constituye un recurso fónico directo que traslada la sensación acústica inmediata a la mente del receptor.',
        hy: 'Այն իրենից ներկայացնում է ուղիղ հնչյունական հնարք, որն անմիջական լսողական զգացողությունը փոխանցում է ընկալողի մտքին:'
      }
    ],
    sections: [
      {
        title: 'Tipos de sonidos reproducidos por la onomatopeya',
        titleHy: 'Բնաձայնությամբ վերարտադրվող ձայների տեսակները',
        content: [
          {
            es: 'Sonidos de animales: el ladrido del perro («¡guau, guau!»), el maullido del gato («¡miau!»), el canto del gallo («¡quiquiriquí!»).',
            hy: 'Կենդանիների ձայներ. շան հաչոցը («հա՛ֆ-հա՛ֆ»), կատվի մլավոցը («միա՛ու»), աքաղաղի կանչը («ծուղրուղո՛ւ»):'
          },
          {
            es: 'Sonidos de objetos y acciones: el reloj («tic-tac»), un golpe en la puerta («toc-toc»), un disparo («¡pum!») o el crujido («chas»).',
            hy: 'Իրերի և գործողությունների ձայներ. ժամացույցը («տիկ-տակ»), դռան թակոցը («տոկ-տոկ»), կրակոցը («բո՛ւմ») կամ ճտճտոցը («չաս»):'
          },
          {
            es: 'Verbos derivados de onomatopeyas: el español ha creado verbos oficiales a partir de ellas, como «tictaquear», «susurrar», «murmurar» o «chapotear».',
            hy: 'Բնաձայնություններից ծագած բայեր. իսպաներենը դրանցից ստեղծել է պաշտոնական բայեր, ինչպիսիք են «tictaquear» (տիկտակել), «susurrar» (շշնջալ), «murmurar» (փնթփնթալ) կամ «chapotear» (ճողփյուն հանել):'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«El tic-tac del reloj rompía el silencio de la solitaria habitación».',
        textHy: '«Ժամացույցի տիկ-տակը կոտրում էր միայնակ սենյակի լռությունը»:',
        analysis: 'Onomatopeya pura que reproduce el sonido mecánico de las manecillas del reloj.',
        analysisHy: 'Մաքուր բնաձայնություն, որը վերարտադրում է ժամացույցի սլաքների մեխանիկական ձայնը:'
      },
      {
        text: '«Llamaron a la puerta con apremio: ¡toc, toc, toc!».',
        textHy: '«Դուռը թակեցին շտապողականությամբ. տո՛կ, տո՛կ, տո՛կ»:',
        analysis: 'Onomatopeya del impacto repetido sobre la madera.',
        analysisHy: 'Փայտին հասցվող կրկնվող հարվածի բնաձայնություն:'
      }
    ],
    examTips: [
      {
        es: 'La onomatopeya siempre imita un RUIDO concreto. Si la palabra representa un sonido real directamente (como «kikirikí» o «bum»), es onomatopeya.',
        hy: 'Բնաձայնությունը միշտ նմանակում է կոնկրետ ԱՂՄՈՒԿ: Եթե բառն ուղղակիորեն ներկայացնում է իրական ձայն (օրինակ՝ «կիկիրիկի» կամ «բում»), ապա դա բնաձայնություն է:'
      }
    ],
    commonPitfalls: [
      {
        es: 'No confundirla con la aliteración: la aliteración repite fonemas en palabras con significado propio; la onomatopeya nace para copiar el ruido acústico.',
        hy: 'Չշփոթել այն բաղաձայնույթի հետ. բաղաձայնույթը կրկնում է հնչյուններ սեփական իմաստ ունեցող բառերում, իսկ բնաձայնությունը ծնվում է լսողական աղմուկը կրկնօրինակելու համար:'
      }
    ]
  },

  // ==========================================
  // Tema 11: La paronomasia
  // ==========================================
  {
    id: 'tema-11',
    bloqueId: 4,
    bloqueTitle: 'Bloque 4 — Las Figuras Literarias (Nivel Fónico)',
    bloqueTitleHy: 'Բաժին 4 — Գեղարվեստական պատկերներ (Հնչյունական մակարդակ)',
    number: 11,
    title: 'La paronomasia',
    titleHy: 'Հարանունությունը (պարոնոմազիան)',
    subtitle: 'Palabras de sonido semejante pero significado radicalmente distinto',
    subtitleHy: 'Նմանահունչ, բայց արմատապես տարբեր իմաստ ունեցող բառեր',
    iconName: 'Copy',
    summary: [
      {
        es: 'La paronomasia consiste en colocar próximas en una misma frase dos o más palabras que suenan de forma casi idéntica (parónimos), pero cuyos significados son totalmente diferentes.',
        hy: 'Հարանունությունը կայանում է մեկ նախադասության մեջ գրեթե նույնական հնչողություն ունեցող (հարանուն), բայց բոլորովին տարբեր իմաստներ ունեցող երկու կամ ավելի բառեր կողք կողքի դնելու մեջ:'
      },
      {
        es: 'Crea un llamativo juego verbal que sorprende al lector por el contraste semántico entre términos fonéticamente gemelos.',
        hy: 'Այն ստեղծում է ուշագրավ բառախաղ, որը զարմացնում է ընթերցողին հնչյունական երկվորյակների իմաստային հակադրությամբ:'
      }
    ],
    sections: [
      {
        title: 'Cómo identificar la paronomasia',
        titleHy: 'Ինչպես նույնականացնել հարանունությունը',
        content: [
          {
            es: 'Busca parejas de palabras contiguas donde solo cambie una vocal o una consonante: «espumas / espuelas», «hombre / hambre», «presa / prisa».',
            hy: 'Փնտրի՛ր կից բառերի զույգեր, որտեղ փոխվում է միայն մեկ ձայնավոր կամ բաղաձայն՝ «espumas / espuelas», «hombre / hambre», «presa / prisa»:'
          },
          {
            es: 'En el famoso verso de Góngora: «Vendado que me has vendido», la cercanía de «vendado» (con ojos tapados) y «vendido» (traicionado) deslumbra por su juego sonoro.',
            hy: 'Գոնգորայի հայտնի տողում՝ «Vendado que me has vendido», «vendado» (աչքերը կապած) և «vendido» (դավաճանված) բառերի մերձավորությունը հիացնում է իր հնչյունային խաղով:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«Se calzan de espumas por espuelas».',
        author: 'Luis de Góngora',
        textHy: '«Նրանք խթանների փոխարեն փրփուր են հագնում»:',
        analysis: 'Juego entre «espumas» y «espuelas»: las palabras suenan casi igual pero evocan conceptos totalmente distintos.',
        analysisHy: 'Խաղ «espumas» (փրփուրներ) և «espuelas» (խթաններ) բառերի միջև. բառերը հնչում են գրեթե նույն կերպ, բայց արտահայտում են լրիվ տարբեր հասկացություններ:'
      },
      {
        text: '«Entre el clavel y la rosa, su majestad escoja».',
        author: 'Francisco de Quevedo',
        textHy: '«Մեխակի և վարդի միջև ձերդ գերազանցությունը թող ընտրի»:',
        analysis: 'Doble sentido paronomásico burlesco entre «escoja» (elegir) y «es coja» (que cojea).',
        analysisHy: 'Ծաղրական հարանունական երկիմաստություն «escoja» (ընտրեք) և «es coja» (կաղ է) արտահայտությունների միջև:'
      }
    ],
    examTips: [
      {
        es: 'La clave de la paronomasia son DOS PALABRAS que se parecen en sonido pero no son la misma palabra. Si es la misma palabra repetida, no es paronomasia.',
        hy: 'Հարանունության գաղտնիքը ԵՐԿՈՒ ԲԱՌԵՐՆ ԵՆ, որոնք նման են հնչողությամբ, բայց նույն բառը չեն: Եթե նույն բառը կրկնվում է, ապա դա հարանունություն չէ:'
      }
    ],
    commonPitfalls: [
      {
        es: 'Confundirla con la aliteración: en la paronomasia se comparan dos palabras concretas parecidas; en la aliteración es un sonido que se reparte por muchas palabras.',
        hy: 'Շփոթել այն բաղաձայնույթի հետ. հարանունության մեջ համեմատվում են երկու կոնկրետ նման բառեր, իսկ բաղաձայնույթում հնչյունը բաշխված է բազմաթիվ բառերի վրա:'
      }
    ]
  },

  // ==========================================
  // Tema 12: El epanadiplosis
  // ==========================================
  {
    id: 'tema-12',
    bloqueId: 4,
    bloqueTitle: 'Bloque 4 — Las Figuras Literarias (Nivel Fónico / Sintáctico)',
    bloqueTitleHy: 'Բաժին 4 — Գեղարվեստական պատկերներ (Հնչյունական / Շարահյուսական)',
    number: 12,
    title: 'El epanadiplosis',
    titleHy: 'Էպանադիպլոզիսը',
    subtitle: 'Repetición de la misma palabra al principio y al final del mismo verso',
    subtitleHy: 'Նույն բառի կրկնությունը նույն տողի սկզբում և վերջում',
    iconName: 'Repeat',
    summary: [
      {
        es: 'El epanadiplosis es una figura retórica que consiste en empezar y terminar un mismo verso o frase con la misma palabra exacta.',
        hy: 'Էպանադիպլոզիսը հռետորական պատկեր է, որը կայանում է նույն բանաստեղծական տողը կամ նախադասությունը ճիշտ նույն բառով սկսելու և ավարտելու մեջ:'
      },
      {
        es: 'Crea una estructura circular perfecta que envuelve el mensaje y enfatiza intensamente el término repetido.',
        hy: 'Այն ստեղծում է կատարյալ շրջանաձև կառուցվածք, որը պարուրում է միտքը և խորապես շեշտում կրկնվող եզրույթը:'
      }
    ],
    sections: [
      {
        title: 'Fórmula matemática del epanadiplosis: [X ...... X]',
        titleHy: 'Էպանադիպլոզիսի մաթեմատիկական բանաձևը՝ [X ...... X]',
        content: [
          {
            es: 'El esquema visual es inconfundible: una palabra abre el verso y esa misma palabra lo clausura al final.',
            hy: 'Տեսողական սխեման անսխալական է. մի բառը բացում է տողը, և նույն բառն այն փակում է վերջում:'
          },
          {
            es: 'Ejemplo celebérrimo de Federico García Lorca: «Verde que te quiero verde». La palabra «verde» abre y cierra la línea poética.',
            hy: 'Ֆեդերիկո Գարսիա Լորկայի հանրահայտ օրինակը՝ «Verde que te quiero verde»: «Verde» բառը բացում և փակում է բանաստեղծական տողը:'
          },
          {
            es: 'Otro ejemplo de Rubén Darío: «¡Hurra, cosacos del desierto, hurra!». Comienza con «hurra» y concluye con «hurra».',
            hy: 'Ռուբեն Դարիոյի մեկ այլ օրինակ՝ «¡Hurra, cosacos del desierto, hurra!»: Սկսվում է «hurra»-ով և ավարտվում «hurra»-ով:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«Verde que te quiero verde».',
        author: 'Federico García Lorca',
        textHy: '«Կանաչ, ինչքան եմ քեզ սիրում, կանաչ»:',
        analysis: 'Epanadiplosis paradigmático: la palabra «verde» se ubica al principio y al final del mismo verso.',
        analysisHy: 'Դասական էպանադիպլոզիս. «verde» բառը գտնվում է նույն տողի սկզբում և վերջում:'
      },
      {
        text: '«Silencio de la noche, doloroso silencio».',
        author: 'Rubén Darío',
        textHy: '«Գիշերվա լռություն, ցավոտ լռություն»:',
        analysis: 'El sustantivo «silencio» abre la frase y la cierra, reforzando la atmósfera sobrecogedora.',
        analysisHy: '«Silencio» (լռություն) գոյականը բացում է նախադասությունը և փակում այն՝ ուժեղացնելով ցնցող մթնոլորտը:'
      }
    ],
    examTips: [
      {
        es: 'Regla de oro: mira la PRIMERA y la ÚLTIMA palabra del MISMO verso. Si son idénticas, es epanadiplosis.',
        hy: 'Ոսկե կանոն. նայիր ՆՈՒՅՆ տողի ԱՌԱՋԻՆ և ՎԵՐՋԻՆ բառին: Եթե դրանք նույնական են, ապա դա էպանադիպլոզիս է:'
      }
    ],
    commonPitfalls: [
      {
        es: 'NO CONFUNDIR CON ANÁFORA: la anáfora repite palabras al principio de VERSOS DIFERENTES; el epanadiplosis ocurre al principio y al final del MISMO verso.',
        hy: 'ՄԻ՛ ՇՓՈԹԻՐ ԱՆԱՖՈՐԱՅԻ ՀԵՏ. անաֆորան կրկնում է բառերը ՏԱՐԲԵՐ ՏՈՂԵՐԻ սկզբում, իսկ էպանադիպլոզիսը տեղի է ունենում ՆՈՒՅՆ տողի սկզբում և վերջում:'
      }
    ]
  },

  // ==========================================
  // NIVEL MORFOSINTÁCTICO
  // ==========================================
  {
    id: 'tema-13',
    bloqueId: 4,
    bloqueTitle: 'Bloque 4 — Las Figuras Literarias (Nivel Morfosintáctico)',
    bloqueTitleHy: 'Բաժին 4 — Գեղարվեստական պատկերներ (Շարահյուսական մակարդակ)',
    number: 13,
    title: 'El hipérbaton',
    titleHy: 'Հիպերբատոնը (շարադասության խախտումը)',
    subtitle: 'Alteración del orden sintáctico habitual de la oración',
    subtitleHy: 'Նախադասության սովորական շարահյուսական կարգի փոփոխությունը',
    iconName: 'Shuffle',
    summary: [
      {
        es: 'El hipérbaton consiste en cambiar o desordenar la disposición habitual y lógica de las palabras dentro de una oración.',
        hy: 'Հիպերբատոնը կայանում է նախադասության ներսում բառերի սովորական և տրամաբանական դասավորությունը փոխելու կամ խախտելու մեջ:'
      },
      {
        es: 'En español, el orden neutro es [Sujeto + Verbo + Complementos]. El hipérbaton desplaza elementos para resaltar una palabra o encajar la rima.',
        hy: 'Իսպաներենում չեզոք կարգն է [Ենթակա + Բայ + Լրացումներ]: Հիպերբատոնը տեղափոխում է տարրերը՝ որևէ բառ ընդգծելու կամ հանգին հարմարեցնելու համար:'
      }
    ],
    sections: [
      {
        title: 'Comparativa: orden habitual frente a hipérbaton',
        titleHy: 'Համեմատություն. սովորական կարգն ընդդեմ հիպերբատոնի',
        content: [
          {
            es: 'Verso con hipérbaton de Gustavo Adolfo Bécquer: «Volverán las oscuras golondrinas en tu balcón sus nidos a colgar».',
            hy: 'Բեկերի տողը հիպերբատոնով. «Volverán las oscuras golondrinas en tu balcón sus nidos a colgar»:'
          },
          {
            es: 'Orden habitual lógico y cotidiano: «Las oscuras golondrinas volverán a colgar sus nidos en tu balcón».',
            hy: 'Տրամաբանական և առօրյա սովորական կարգ. «Las oscuras golondrinas volverán a colgar sus nidos en tu balcón» (Մութ ծիծեռնակները կվերադառնան կախելու իրենց բները քո պատշգամբում):'
          },
          {
            es: 'Bécquer alteró la posición del verbo («volverán») colocándolo al principio, y separó la perífrasis verbal («volverán a colgar») intercalando el balcón.',
            hy: 'Բեկերը փոխեց բայի («volverán») դիրքը՝ այն դնելով սկզբում, և բաժանեց բայական հարադրությունը («volverán a colgar»)՝ ներմուծելով պատշգամբը:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«Volverán las oscuras golondrinas en tu balcón sus nidos a colgar».',
        author: 'Gustavo Adolfo Bécquer',
        textHy: '«Կվերադառնան մութ ծիծեռնակները քո պատշգամբում իրենց բները կախելու»:',
        analysis: 'El sujeto («las oscuras golondrinas») va después del verbo, y el complemento circunstancial («en tu balcón») se adelanta a la acción.',
        analysisHy: 'Ենթական գալիս է բայից հետո, իսկ տեղի պարագան («en tu balcón») առաջ է ընկնում գործողությունից:'
      },
      {
        text: '«De verdes sauces hay una espesura».',
        author: 'Garcilaso de la Vega',
        textHy: '«Կանաչ ուռիների կա մի խիտ թավուտ»:',
        analysis: 'Orden normal: «Hay una espesura de verdes sauces». El complemento preposicional se antepone al verbo «hay».',
        analysisHy: 'Սովորական կարգ. «Hay una espesura de verdes sauces»: Նախդիրավոր լրացումը դրված է «hay» բայից առաջ:'
      }
    ],
    examTips: [
      {
        es: 'Para descubrir un hipérbaton en el examen, intenta reordenar la frase mentalmente. Si suena como habla el maestro Yoda de Star Wars, ¡es un hipérbaton!',
        hy: 'Քննության ժամանակ հիպերբատոնը բացահայտելու համար փորձի՛ր մտքում վերադասավորել նախադասությունը: Եթե այն հնչում է «Աստղային պատերազմների» Յոդայի խոսքի պես, ուրեմն դա հիպերբատոն է:'
      }
    ],
    commonPitfalls: [
      {
        es: 'No confundir el hipérbaton con una falta de ortografía o error gramatical: es una figura voluntaria y culta para enriquecer el verso.',
        hy: 'Չշփոթել հիպերբատոնը ուղղագրական կամ քերականական սխալի հետ. դա կանխամտածված և բանիմաց հնարք է բանաստեղծական տողը հարստացնելու համար:'
      }
    ]
  },

  // ==========================================
  // Tema 14: La anáfora
  // ==========================================
  {
    id: 'tema-14',
    bloqueId: 4,
    bloqueTitle: 'Bloque 4 — Las Figuras Literarias (Nivel Morfosintáctico)',
    bloqueTitleHy: 'Բաժին 4 — Գեղարվեստական պատկերներ (Շարահյուսական մակարդակ)',
    number: 14,
    title: 'La anáfora',
    titleHy: 'Անաֆորան (առաջնակրկնությունը)',
    subtitle: 'Repetición de palabras al comienzo de dos o más versos seguidos',
    subtitleHy: 'Բառերի կրկնությունը երկու կամ ավելի հաջորդական տողերի սկզբում',
    iconName: 'ListOrdered',
    summary: [
      {
        es: 'La anáfora consiste en repetir una o varias palabras al inicio de dos o más versos, estrofas u oraciones consecutivas.',
        hy: 'Անաֆորան կայանում է մեկ կամ մի քանի բառեր երկու կամ ավելի հաջորդական տողերի, տների կամ նախադասությունների սկզբում կրկնելու մեջ:'
      },
      {
        es: 'Genera un ritmo insistente y solemne que graba la idea central en la conciencia del lector.',
        hy: 'Այն առաջացնում է համառ և հանդիսավոր ռիթմ, որը կենտրոնական գաղափարը դրոշմում է ընթերցողի գիտակցության մեջ:'
      }
    ],
    sections: [
      {
        title: 'Cómo distinguir claramente la anáfora',
        titleHy: 'Ինչպես հստակորեն տարբերել անաֆորան',
        content: [
          {
            es: 'Observa la primera palabra de la línea 1 y compárala con la primera palabra de la línea 2.',
            hy: 'Նայի՛ր 1-ին տողի առաջին բառին և համեմատի՛ր այն 2-րդ տողի առաջին բառի հետ:'
          },
          {
            es: 'Ejemplo de Garcilaso: «Salid fuera sin duelo, / salid sin duelo, lágrimas corriendo». Ambos versos arrancan con la orden «Salid».',
            hy: 'Գարսիլասոյի օրինակը. «Salid fuera sin duelo, / salid sin duelo, lágrimas corriendo»: Երկու տողերն էլ սկսվում են «Salid» հրամայականով:'
          },
          {
            es: 'Ejemplo de Miguel Hernández: «Temprano levantó la muerte el vuelo, / temprano madrugó la madrugada, / temprano estás rodando por el suelo». La palabra «temprano» inicia tres versos seguidos.',
            hy: 'Միգել Էրնանդեսի օրինակը. «Temprano levantó la muerte el vuelo, / temprano madrugó la madrugada, / temprano estás rodando por el suelo»: «Temprano» (վաղ) բառը բացում է երեք հաջորդական տողեր:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«Temprano levantó la muerte el vuelo,\ntemprano madrugó la madrugada,\ntemprano estás rodando por el suelo».',
        author: 'Miguel Hernández',
        textHy: '«Վաղ բարձրացրեց մահը թռիչքը,\nվաղ լուսացավ լուսաբացը,\nվաղ ես գլորվում գետնին»:',
        analysis: 'Anáfora triple con el adverbio «temprano», transmitiendo la angustia por una muerte prematura.',
        analysisHy: 'Եռակի անաֆորա «temprano» մակբայով՝ փոխանցելով վաղաժամ մահվան տագնապը:'
      }
    ],
    examTips: [
      {
        es: 'La anáfora SIEMPRE opera en VERTICAL: mira hacia abajo al principio de cada verso.',
        hy: 'Անաֆորան ՄԻՇՏ գործում է ՈՒՂՂԱՀԱՅԱՑ. նայիր ներքև՝ յուրաքանչյուր տողի սկզբին:'
      }
    ],
    commonPitfalls: [
      {
        es: 'Confundir anáfora con epanadiplosis: en la anáfora se repite al inicio de varias líneas; en el epanadiplosis se repite al principio y al final de una sola línea.',
        hy: 'Շփոթել անաֆորան էպանադիպլոզիսի հետ. անաֆորայում կրկնվում է մի քանի տողերի սկզբում, իսկ էպանադիպլոզիսում՝ մեկ տողի սկզբում և վերջում:'
      }
    ]
  },

  // ==========================================
  // Tema 15: El asíndeton
  // ==========================================
  {
    id: 'tema-15',
    bloqueId: 4,
    bloqueTitle: 'Bloque 4 — Las Figuras Literarias (Nivel Morfosintáctico)',
    bloqueTitleHy: 'Բաժին 4 — Գեղարվեստական պատկերներ (Շարահյուսական մակարդակ)',
    number: 15,
    title: 'El asíndeton',
    titleHy: 'Անշաղկապությունը (ասինդետոնը)',
    subtitle: 'Supresión total de conjunciones para dar rapidez y dinamismo vertiginoso',
    subtitleHy: 'Շաղկապների լիակատար վերացում՝ արագություն և սրընթաց դինամիզմ հաղորդելու համար',
    iconName: 'Zap',
    summary: [
      {
        es: 'El asíndeton consiste en eliminar deliberadamente las conjunciones coordinantes (como «y», «e», «ni») que unirían los elementos de una enumeración.',
        hy: 'Անշաղկապությունը կայանում է համադասական շաղկապները (ինչպիսիք են «և», «ու», «ոչ») միտումնավոր բաց թողնելու մեջ, որոնք պետք է միացնեին թվարկման տարրերը:'
      },
      {
        es: 'En su lugar, los términos se separan únicamente mediante comas, creando una sensación de agilidad, velocidad impaciente y vértigo.',
        hy: 'Դրանց փոխարեն եզրույթներն առանձնացվում են միայն ստորակետներով՝ ստեղծելով ճարպկության, անհամբեր արագության և հորձանուտի զգացողություն:'
      }
    ],
    sections: [
      {
        title: 'Efecto de dinamismo y precipitación',
        titleHy: 'Դինամիզմի և արագացման ազդեցությունը',
        content: [
          {
            es: 'Frase célebre de Julio César: «Veni, vidi, vici» (Llegué, vi, vencí). No hay ninguna «y»; las victorias se suceden a velocidad fulgurante.',
            hy: 'Հուլիոս Կեսարի հանրահայտ արտահայտությունը. «Veni, vidi, vici» (Եկա, տեսա, հաղթեցի): Չկա ոչ մի «և». հաղթանակները հաջորդում են կայծակնային արագությամբ:'
          },
          {
            es: 'En el verso de Lope de Vega: «Desmayarse, atreverse, estar furioso, áspero, tierno, liberal, esquivo...», las acciones y emociones se amontonan frenéticamente.',
            hy: 'Լոպե դե Վեգայի տողում՝ «Desmayarse, atreverse, estar furioso, áspero, tierno, liberal, esquivo...» (Ուշաթափվել, համարձակվել, կատաղած լինել, կոշտ, նուրբ, առատաձեռն, խուսափող...), գործողություններն ու հույզերը կուտակվում են մոլեգնորեն:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«Desmayarse, atreverse, estar furioso,\náspero, tierno, liberal, esquivo,\nalentado, mortal, difunto, vivo,\nleal, traidor, cobarde y animoso».',
        author: 'Lope de Vega (Definición del amor)',
        textHy: '«Ուշաթափվել, համարձակվել, կատաղած լինել,\nկոշտ, նուրբ, առատաձեռն, խուսափող,\nքաջալերված, մահկանացու, մեռած, ողջ,\nհավատարիմ, դավաճան, վախկոտ և առնական»:',
        analysis: 'Asíndeton masivo: las comas sustituyen a los nexos provocando una cascada incontenible de sentimientos.',
        analysisHy: 'Հսկայական անշաղկապություն. ստորակետները փոխարինում են շաղկապներին՝ առաջացնելով զգացմունքների անզուսպ կասկադ:'
      },
      {
        text: '«Rendí, rompí, derribé,\nrajé, deshice, prendí».',
        textHy: '«Հնազանդեցրի, ջարդեցի, տապալեցի,\nպատռեցի, ոչնչացրի, գերեցի»:',
        analysis: 'Sucesión veloz de seis verbos en pasado sin una sola conjunción copulativa.',
        analysisHy: 'Անցյալ ժամանակի վեց բայերի սրընթաց հաջորդականություն՝ առանց որևէ միացնող շաղկապի:'
      }
    ],
    examTips: [
      {
        es: 'Truco nemotécnico: «Asíndeton» empieza por «A-» (privación, SIN nexos). Es una enumeración con puras comas.',
        hy: 'Հիշողության հնարք. «Asíndeton»-ը սկսվում է «A-»-ով (ժխտում, ԱՌԱՆՑ շաղկապների): Դա թվարկում է զուտ ստորակետներով:'
      }
    ],
    commonPitfalls: [
      {
        es: 'Confundir con polisíndeton: son contrarios exactos. Asíndeton QUITA las «y»; Polisíndeton PONE MUCHAS «y».',
        hy: 'Շփոթել պոլիսինդետոնի հետ. դրանք ուղիղ հակադրություններ են: Ասինդետոնը ՀԱՆՈՒՄ Է «y»-երը, իսկ Պոլիսինդետոնը ԴՆՈՒՄ Է ՇԱՏ «y»-եր:'
      }
    ]
  },

  // ==========================================
  // Tema 16: El polisíndeton
  // ==========================================
  {
    id: 'tema-16',
    bloqueId: 4,
    bloqueTitle: 'Bloque 4 — Las Figuras Literarias (Nivel Morfosintáctico)',
    bloqueTitleHy: 'Բաժին 4 — Գեղարվեստական պատկերներ (Շարահյուսական մակարդակ)',
    number: 16,
    title: 'El polisíndeton',
    titleHy: 'Բազմաշաղկապությունը (պոլիսինդետոնը)',
    subtitle: 'Repetición intencionada de conjunciones copulativas para ralentizar el ritmo',
    subtitleHy: 'Շաղկապների միտումնավոր կրկնություն՝ ռիթմը դանդաղեցնելու և կշիռ հաղորդելու համար',
    iconName: 'PlusCircle',
    summary: [
      {
        es: 'El polisíndeton consiste en repetir reiterada e innecesariamente conjunciones como «y», «ni» o «que» entre los miembros de una serie.',
        hy: 'Բազմաշաղկապությունը կայանում է շարքի անդամների միջև այնպիսի շաղկապների բազմակի և միտումնավոր կրկնության մեջ, ինչպիսիք են «y» (և), «ni» (ոչ) կամ «que» (որ):'
      },
      {
        es: 'Produce un efecto de lentitud solemne, pesadez emocional y detención reflexiva en cada uno de los elementos mencionados.',
        hy: 'Այն առաջացնում է հանդիսավոր դանդաղության, հուզական ծանրության և նշված յուրաքանչյուր տարրի վրա մտածված կանգ առնելու տպավորություն:'
      }
    ],
    sections: [
      {
        title: 'Efecto de solemnidad y acumulación',
        titleHy: 'Հանդիսավորության և կուտակման ազդեցությունը',
        content: [
          {
            es: 'En lugar de decir «Había un palacio, un río, un lago y un puente», el poeta escribe: «Y hay un palacio y un río y un lago y un puente...».',
            hy: '«Կար պալատ, գետ, լիճ և կամուրջ» ասելու փոխարեն բանաստեղծը գրում է. «Եվ կա մի պալատ, և մի գետ, և մի լիճ, և մի կամուրջ...»:'
          },
          {
            es: 'Cada «y» obliga a hacer una pequeña pausa en la lectura, otorgando peso individual a cada objeto de la descripción.',
            hy: 'Յուրաքանչյուր «y» (և) ստիպում է ընթերցման մեջ մի փոքր դադար տալ՝ նկարագրության յուրաքանչյուր առարկային առանձին կշիռ հաղորդելով:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«Y los dejó, y cayó en despeñadero,\ny el río se los llevó, y el viento los arrastró».',
        textHy: '«Եվ նրանց թողեց, և ընկավ անդունդը,\nև գետը նրանց տարավ, և քամին նրանց քշեց»:',
        analysis: 'La conjunción «y» encabeza cada verbo multiplicando la sensación de catástrofe implacable.',
        analysisHy: '«Y» (և) շաղկապը գլխավորում է յուրաքանչյուր բայ՝ բազմապատկելով անխուսափելի աղետի զգացումը:'
      },
      {
        text: '«Ni me importa el oro, ni busco la gloria, ni temo a la muerte».',
        textHy: '«Ո՛չ ոսկին է ինձ պետք, ո՛չ փառքն եմ փնտրում, ո՛չ էլ մահից եմ վախենում»:',
        analysis: 'Polisíndeton negativo con la repetición de la conjunción «ni».',
        analysisHy: 'Ժխտական բազմաշաղկապություն «ni» (ոչ) շաղկապի կրկնությամբ:'
      }
    ],
    examTips: [
      {
        es: 'Truco nemotécnico: «Poli-» significa «muchos» (como polígono). Polisíndeton = MUCHAS conjunciones («y», «ni»).',
        hy: 'Հիշողության հնարք. «Poli-» նշանակում է «շատ» (ինչպես պոլիգոն): Պոլիսինդետոն = ՇԱՏ շաղկապներ («y», «ni»):'
      }
    ],
    commonPitfalls: [
      {
        es: 'No confundir con una simple «y» final obligatoria en una lista normal (ej: manzanas, peras y plátanos no es polisíndeton; «y manzanas y peras y plátanos» sí lo es).',
        hy: 'Չշփոթել սովորական ցուցակի վերջում գտնվող մեկ պարտադիր «y»-ի հետ («manzanas, peras y plátanos» պոլիսինդետոն չէ, իսկ «y manzanas y peras y plátanos»-ը պոլիսինդետոն է):'
      }
    ]
  },

  // ==========================================
  // Tema 17: La enumeración
  // ==========================================
  {
    id: 'tema-17',
    bloqueId: 4,
    bloqueTitle: 'Bloque 4 — Las Figuras Literarias (Nivel Morfosintáctico)',
    bloqueTitleHy: 'Բաժին 4 — Գեղարվեստական պատկերներ (Շարահյուսական մակարդակ)',
    number: 17,
    title: 'La enumeración',
    titleHy: 'Թվարկումը (էնումերացիան)',
    subtitle: 'Sucesión coordinada de elementos de la misma categoría gramatical',
    subtitleHy: 'Նույն քերականական կարգի տարրերի համադասական հաջորդականություն',
    iconName: 'ListChecks',
    summary: [
      {
        es: 'La enumeración es la acumulación sucesiva de varias palabras o sintagmas que pertenecen a una misma categoría gramatical o función sintáctica.',
        hy: 'Թվարկումը միևնույն քերականական խմբին կամ շարահյուսական գործառույթին պատկանող մի քանի բառերի կամ բառակապակցությունների հաջորդական կուտակումն է:'
      },
      {
        es: 'Permite describir de manera exhaustiva un paisaje, el carácter de un personaje o el desarrollo pormenorizado de una escena.',
        hy: 'Այն թույլ է տալիս սպառիչ կերպով նկարագրել բնապատկերը, կերպարի բնավորությունը կամ տեսարանի մանրամասն զարգացումը:'
      }
    ],
    sections: [
      {
        title: 'Tipos de enumeraciones según la categoría',
        titleHy: 'Թվարկումների տեսակներն ըստ կարգի',
        content: [
          {
            es: 'Enumeración de sustantivos: «Había libros, papeles, plumas, tinteros y mapas sobre el escritorio».',
            hy: 'Գոյականների թվարկում. «Գրասեղանին կային գրքեր, թղթեր, գրիչներ, թանաքամաններ և քարտեզներ»:'
          },
          {
            es: 'Enumeración de adjetivos: «Era una mujer alta, esbelta, silenciosa, prudente y bondadosa».',
            hy: 'Ածականների թվարկում. «Նա բարձրահասակ, սլացիկ, լռակյաց, խոհեմ և բարի կին էր»:'
          },
          {
            es: 'Enumeración de verbos: «Gritaron, saltaron, corrieron y celebraron hasta el amanecer».',
            hy: 'Բայերի թվարկում. «Գոռացին, ցատկեցին, վազեցին և տոնեցին մինչև լուսաբաց»:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«En tierra, en humo, en polvo, en sombra, en nada».',
        author: 'Luis de Góngora',
        textHy: '«Հողի մեջ, ծխի մեջ, փոշու մեջ, ստվերի մեջ, ոչնչի մեջ»:',
        analysis: 'Enumeración gradativa descendente donde cada elemento reduce la existencia hasta la nada.',
        analysisHy: 'Նվազող աստիճանավորմամբ թվարկում, որտեղ յուրաքանչյուր տարր նվազեցնում է գոյությունը մինչև ոչինչ:'
      }
    ],
    examTips: [
      {
        es: 'Comprueba que todos los elementos forman parte de una LISTA del mismo tipo (todos nombres, todos adjetivos o todos verbos).',
        hy: 'Ստուգի՛ր, որ բոլոր տարրերը կազմում են նույն տեսակի ՑՈՒՑԱԿ (բոլորը գոյականներ, բոլորը ածականներ կամ բոլորը բայեր):'
      }
    ],
    commonPitfalls: [
      {
        es: 'No confundir enumeración con asíndeton: la enumeración es la lista de elementos en sí; el asíndeton es cómo se unen (si no llevan conjunciones). Pueden coexistir.',
        hy: 'Չշփոթել թվարկումը անշաղկապության հետ. թվարկումը բուն տարրերի ցուցակն է, իսկ անշաղկապությունը՝ դրանց միացման եղանակը (առանց շաղկապների): Դրանք կարող են համատեղվել:'
      }
    ]
  },

  // ==========================================
  // Tema 18: El pleonasmo
  // ==========================================
  {
    id: 'tema-18',
    bloqueId: 4,
    bloqueTitle: 'Bloque 4 — Las Figuras Literarias (Nivel Morfosintáctico)',
    bloqueTitleHy: 'Բաժին 4 — Գեղարվեստական պատկերներ (Շարահյուսական մակարդակ)',
    number: 18,
    title: 'El pleonasmo',
    titleHy: 'Պլեոնազմը (ավելաբանությունը)',
    subtitle: 'Uso de palabras redundantes para añadir intensidad y fuerza expresiva',
    subtitleHy: 'Ավելորդ բառերի օգտագործում՝ արտահայտչական ուժ և ինտենսիվություն հաղորդելու համար',
    iconName: 'Maximize2',
    summary: [
      {
        es: 'El pleonasmo consiste en emplear en la oración palabras innecesarias desde el punto de vista puramente lógico porque su significado ya está sobreentendido.',
        hy: 'Պլեոնազմը կայանում է նախադասության մեջ զուտ տրամաբանական տեսանկյունից ավելորդ բառեր օգտագործելու մեջ, քանի որ դրանց իմաստն արդեն իսկ ենթադրվում է:'
      },
      {
        es: 'En literatura no es un error vulgar (redundancia torpe), sino un recurso consciente para dar vehemencia, emoción o solemnidad a la afirmación.',
        hy: 'Գրականության մեջ դա կոպիտ սխալ (անհաջող ավելորդություն) չէ, այլ գիտակցված հնարք՝ պնդմանը եռանդ, հույզ կամ հանդիսավորություն հաղորդելու համար:'
      }
    ],
    sections: [
      {
        title: 'Recurso expresivo literario frente a incorrección vulgar',
        titleHy: 'Գեղարվեստական արտահայտիչ հնարքն ընդդեմ խոսակցական սխալի',
        content: [
          {
            es: 'En el habla vulgar diaria, decir «subir arriba», «bajar abajo» o «entrar adentro» se considera una redundancia innecesaria que debe evitarse.',
            hy: 'Առօրյա խոսակցականում «վերև բարձրանալ», «ներքև իջնել» կամ «ներս մտնել» ասելը համարվում է ավելորդություն, որից պետք է խուսափել:'
          },
          {
            es: 'Sin embargo, en literatura, frases como «Lo vi con mis propios ojos» aportan un testimonio irrefutable de autenticidad y dramatismo.',
            hy: 'Սակայն գրականության մեջ «Ես տեսա իմ սեփական աչքերով» նման արտահայտություններն ավելացնում են անհերքելի վկայություն, իսկություն և դրամատիզմ:'
          },
          {
            es: 'En el Cantar de mio Cid: «De los sos ojos tan fuertemente llorando». Llorar siempre se hace con los ojos, pero la mención explícita conmueve.',
            hy: '«Իմ Սիդի երգը» պոեմում՝ «De los sos ojos tan fuertemente llorando» (Իր աչքերից այնքան ուժգին լաց լինելով): Լաց են լինում միշտ աչքերով, բայց բացահայտ նշելը հուզում է ընթերցողին:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«Lo vi con mis propios ojos y nadie me lo puede negar».',
        textHy: '«Ես դա տեսա իմ սեփական աչքերով, և ոչ ոք չի կարող հերքել ինձ»:',
        analysis: 'Pleonasmo que enfatiza la veracidad absoluta del testimonio del hablante.',
        analysisHy: 'Պլեոնազմ, որն ընդգծում է խոսողի վկայության բացարձակ ճշմարտացիությունը:'
      },
      {
        text: '«De los sus ojos tan fuertemente llorando».',
        author: 'Cantar de mio Cid',
        textHy: '«Իր աչքերից այնքան ուժգին արցունք թափելով»:',
        analysis: 'Pleonasmo épico medieval para transmitir el profundo dolor de la despedida del Cid.',
        analysisHy: 'Միջնադարյան էպիկական պլեոնազմ՝ Սիդի հրաժեշտի խորը ցավը փոխանցելու համար:'
      }
    ],
    examTips: [
      {
        es: 'Si un término repite una información obvia que ya está incluida en el verbo («llorar con los ojos», «volar por el aire», «ver con los ojos»), es un PLEONASMO.',
        hy: 'Եթե եզրույթը կրկնում է ակնհայտ տեղեկատվություն, որն արդեն ներառված է բայի մեջ («աչքերով լաց լինել», «օդով թռչել», «աչքերով տեսնել»), ապա դա ՊԼԵՈՆԱԶՄ Է:'
      }
    ],
    commonPitfalls: [
      {
        es: 'Pensar que siempre es un fallo: en literatura es una figura de insistencia expresiva muy valorada.',
        hy: 'Կարծել, թե դա միշտ սխալ է. գրականության մեջ այն շատ գնահատված արտահայտչական շեշտադրման հնարք է:'
      }
    ]
  },

  // ==========================================
  // NIVEL SEMÁNTICO: LA METÁFORA
  // ==========================================
  {
    id: 'tema-19',
    bloqueId: 4,
    bloqueTitle: 'Bloque 4 — Las Figuras Literarias (Nivel Semántico)',
    bloqueTitleHy: 'Բաժին 4 — Գեղարվեստական պատկերներ (Իմաստային մակարդակ)',
    number: 19,
    title: 'La metáfora',
    titleHy: 'Փոխաբերությունը (մետաֆորան)',
    subtitle: 'Identificación entre Término Real (A) y Término Imaginario (B) por semejanza',
    subtitleHy: 'Իրական եզրույթի (A) և Երևակայական եզրույթի (B) նույնացում նմանության հիման վրա',
    iconName: 'Flame',
    summary: [
      {
        es: 'La metáfora es la reina de las figuras literarias: consiste en identificar un término real (A) con un término imaginario (B) basándose en una relación de semejanza entre ambos.',
        hy: 'Փոխաբերությունը գրական պատկերների թագուհին է. այն կայանում է իրական եզրույթը (A) երևակայական եզրույթի (B) հետ նույնացնելու մեջ՝ հիմնվելով նրանց միջև եղած նմանության վրա:'
      },
      {
        es: 'A diferencia de la comparación, la metáfora NO utiliza nexos comparativos como «como», «parece» o «semejante a»; afirma directamente la identidad poética.',
        hy: 'Ի տարբերություն համեմատության՝ փոխաբերությունը ՉԻ օգտագործում համեմատական շաղկապներ, ինչպիսիք են «ինչպես», «կարծես» կամ «նման». այն ուղղակիորեն հաստատում է բանաստեղծական նույնությունը:'
      }
    ],
    sections: [
      {
        title: 'Los dos elementos indispensables: Término Real (A) e Imaginario (B)',
        titleHy: 'Երկու անհրաժեշտ տարրերը. Իրական եզրույթ (A) և Երևակայական եզրույթ (B)',
        content: [
          {
            es: 'El Término Real (A) es el objeto, persona o concepto del mundo real del que estamos hablando.',
            hy: 'Իրական եզրույթը (A) իրական աշխարհի առարկան, մարդը կամ հասկացությունն է, որի մասին մենք խոսում ենք:'
          },
          {
            es: 'El Término Imaginario (B) es la imagen evocadora con la que comparamos o sustituimos a A por compartir alguna cualidad común.',
            hy: 'Երևակայական եզրույթը (B) այն պատկերն է, որի հետ համեմատում կամ որով փոխարինում ենք A-ն՝ որևէ ընդհանուր հատկանիշ կիսելու շնորհիվ:'
          },
          {
            es: 'El Fundamento es la cualidad compartida: por ejemplo, entre «dientes» (A) y «perlas» (B), el fundamento es la blancura brillante y la perfección.',
            hy: 'Հիմքը (fundamento) ընդհանուր հատկանիշն է. օրինակ՝ «ատամներ» (A) և «մարգարիտներ» (B) միջև հիմքը փայլուն սպիտակությունն է և կատարելությունը:'
          }
        ]
      },
      {
        title: 'Las tres estructuras principales de la metáfora',
        titleHy: 'Փոխաբերության երեք հիմնական կառուցվածքները',
        content: [
          {
            es: '1. Estructura «A es B» (Metáfora impura o explícita): aparecen los dos términos unidos por el verbo ser. Ejemplo: «Tus ojos son dos luceros». (A = ojos, B = luceros).',
            hy: '1. Կառուցվածք «A es B» (Բացահայտ փոխաբերություն). երկու եզրույթներն էլ առկա են՝ միացված «ser» (լինել) բայով: Օրինակ՝ «Tus ojos son dos luceros» (Քո աչքերը երկու լուսատու են): (A = աչքեր, B = լուսատուներ):'
          },
          {
            es: '2. Estructura «B en lugar de A» (Metáfora pura): el término real desaparece y solo se nombra el imaginario. Ejemplo: «Las perlas de su boca brillaban». (B = perlas; el lector sabe que se refiere a los dientes A).',
            hy: '2. Կառուցվածք «B en lugar de A» (Մաքուր փոխաբերություն). իրական եզրույթն անհետանում է, և նշվում է միայն երևակայականը: Օրինակ՝ «Las perlas de su boca brillaban» (Նրա բերանի մարգարիտները փայլում էին): (B = մարգարիտներ. ընթերցողը հասկանում է, որ խոսքը ատամների՝ A-ի մասին է):'
          },
          {
            es: '3. Estructura «B de A» (Metáfora preposicional): el término imaginario se une al real mediante la preposición «de». Ejemplo: «El fuego de una pasión» o «El tambor de su pecho».',
            hy: '3. Կառուցվածք «B de A» (Նախդիրավոր փոխաբերություն). երևակայական եզրույթը միանում է իրականին «de» նախդիրով: Օրինակ՝ «El fuego de una pasión» (Կրքի կրակը) կամ «El tambor de su pecho» (Նրա կրծքի թմբուկը = սիրտը):'
          }
        ]
      },
      {
        title: 'Diferencia crucial: Metáfora VS Símil (Comparación)',
        titleHy: 'Վճռորոշ տարբերություն. Փոխաբերությունն ընդդեմ Համեմատության (Símil)',
        content: [
          {
            es: 'Si lleva la palabra «como», «parece», «semejante a» o «igual que», es una COMPARACIÓN O SÍMIL: «Tus dientes son como perlas».',
            hy: 'Եթե պարունակում է «como» (ինչպես), «parece» (կարծես), «semejante a» (նման) բառերը, ապա դա ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ Է (SÍMIL). «Tus dientes son como perlas» (Քո ատամներն ինչպես մարգարիտներ են):'
          },
          {
            es: 'Si ELIMINAS el nexo «como» y afirmas la identidad directa, se convierte en METÁFORA: «Tus dientes son perlas» o «Las perlas de tu boca».',
            hy: 'Եթե ՀԱՆՈՒՄ ԵՍ «como» շաղկապը և ուղղակիորեն նույնացնում ես, այն վերածվում է ՓՈԽԱԲԵՐՈՒԹՅԱՆ. «Tus dientes son perlas» կամ «Las perlas de tu boca»:'
          }
        ]
      }
    ],
    examples: [
      {
        text: '«Tus ojos son dos estrellas en la noche».',
        textHy: '«Քո աչքերը երկու աստղ են գիշերվա մեջ»:',
        analysis: 'Estructura A es B: Término real A = ojos; Término imaginario B = estrellas. Fundamento: el brillo en la oscuridad.',
        analysisHy: 'Կառուցվածք A es B. Իրական եզրույթ A = աչքեր, Երևակայական եզրույթ B = աստղեր: Հիմքը՝ փայլը մթության մեջ:'
      },
      {
        text: '«Peinaba los hilos de oro que caían sobre sus hombros».',
        textHy: '«Սանրում էր ոսկե թելերը, որոնք թափվում էին ուսերին»:',
        analysis: 'Metáfora pura (B en lugar de A): Término imaginario B = hilos de oro; Término real A elidido = cabellos rubios.',
        analysisHy: 'Մաքուր փոխաբերություն (B-ն A-ի փոխարեն). Երևակայական B = ոսկե թելեր, Բաց թողնված իրական A = շիկահեր մազեր:'
      },
      {
        text: '«El manto de nieve cubría la montaña dormida».',
        textHy: '«Ձյան թիկնոցը ծածկում էր քնած լեռը»:',
        analysis: 'Metáfora preposicional B de A: B = manto, A = nieve. La nieve actúa como una capa protectora blanca.',
        analysisHy: 'Նախդիրավոր փոխաբերություն B de A. B = թիկնոց, A = ձյուն: Ձյունը գործում է որպես սպիտակ պաշտպանիչ շերտ:'
      },
      {
        text: '«El tiempo es oro».',
        textHy: '«Ժամանակը ոսկի է»:',
        analysis: 'A es B: A = tiempo, B = oro. Fundamento: el incalculable valor y la imposibilidad de recuperarlo.',
        analysisHy: 'A es B. A = ժամանակ, B = ոսկի: Հիմքը՝ անգնահատելի արժեքը և այն ետ բերելու անհնարինությունը:'
      }
    ],
    examTips: [
      {
        es: 'Pregúntate siempre: ¿Tiene «como»? Si tiene «como», marca COMPARACIÓN. Si no tiene «como» y dice que algo ES otra cosa fantástica, marca METÁFORA.',
        hy: 'Միշտ ինքդ քեզ հարցրո՛ւ. արդյոք ունի՞ «como»: Եթե ունի «como», նշի՛ր ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ (COMPARACIÓN): Եթե չունի «como» և ասում է, որ ինչ-որ բան ՄԵԿ ԱՅԼ բան Է, նշի՛ր ՓՈԽԱԲԵՐՈՒԹՅՈՒՆ (METÁFORA):'
      }
    ],
    commonPitfalls: [
      {
        es: 'No identificar el término imaginario cuando el real no aparece (metáfora pura). Recuerda pensar qué objeto real de la naturaleza o del cuerpo encaja en el contexto.',
        hy: 'Չկարողանալ ճանաչել երևակայական եզրույթը, երբ իրականը բացակայում է (մաքուր փոխաբերություն): Հիշի՛ր մտածել, թե բնության կամ մարմնի որ իրական առարկան է համապատասխանում համատեքստին:'
      }
    ]
  }
];

export const ALL_TOPICS = TOPICS;
