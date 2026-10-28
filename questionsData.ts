import { Question } from './types.ts';
import { FIGURES_DEEP_DIVE } from './figuresData.ts';
import { COMPARISONS_DATA } from './comparisonsData.ts';
import { TEXTS_ANALYSIS_DATA } from './textsData.ts';

// Extract all mini-test questions from figures
const figureQuestions: Question[] = FIGURES_DEEP_DIVE.flatMap((f) => f.miniTestQuestions);

// Extract all comparison exercises
const comparisonQuestions: Question[] = COMPARISONS_DATA.flatMap((c) => c.exercises);

// Extract all text analysis questions
const textQuestions: Question[] = TEXTS_ANALYSIS_DATA.flatMap((t) => t.questions);

// Core Questions Bank for Temas 1 to 8 + General
const coreQuestions: Question[] = [
  // ================= TEMA 1: LITERATURA POPULAR =================
  {
    id: 'pop-q1',
    topicId: 'tema-1',
    bloqueId: 1,
    difficulty: 'facil',
    questionType: 'choice',
    question: '¿Qué significa que una obra de la literatura popular sea anónima?',
    questionHy: 'Ի՞նչ է նշանակում, որ ժողովրդական գրականության ստեղծագործությունն անանուն է:',
    options: [
      { id: 'opt-a', text: 'Que su creador original se ha olvidado y pertenece al pueblo', textHy: 'Որ նրա սկզբնական ստեղծողը մոռացվել է և այն պատկանում է ժողովրդին' },
      { id: 'opt-b', text: 'Que el autor no tenía nombre propio', textHy: 'Որ հեղինակը չուներ սեփական անուն' },
      { id: 'opt-c', text: 'Que fue escrita por un rey en secreto', textHy: 'Որ այն գաղտնի գրվել է թագավորի կողմից' },
      { id: 'opt-d', text: 'Que está prohibida por la ley', textHy: 'Որ այն արգելված է օրենքով' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La literatura popular es anónima porque se transmitió oralmente y la colectividad la asumió como propia.',
    explanationHy: 'Ժողովրդական գրականությունն անանուն է, քանի որ փոխանցվել է բանավոր, և հանրույթը դարձրել է այն իրենը:',
    memoryTipEs: 'Popular = del pueblo = anónima y oral.',
    memoryTipHy: 'Ժողովրդական = ժողովրդին պատկանող = անանուն և բանավոր:'
  },
  {
    id: 'pop-q2',
    topicId: 'tema-1',
    bloqueId: 1,
    difficulty: 'facil',
    questionType: 'choice',
    question: '¿Cómo se transmitían tradicionalmente las obras de la literatura popular?',
    questionHy: 'Ինչպե՞ս էին ավանդաբար փոխանցվում ժողովրդական գրականության գործերը:',
    options: [
      { id: 'opt-a', text: 'Por vía oral, de viva voz de padres a hijos', textHy: 'Բանավոր կերպով՝ կենդանի խոսքով ծնողներից զավակներին' },
      { id: 'opt-b', text: 'Exclusivamente por libros impresos de imprenta', textHy: 'Բացառապես տպագիր գրքերով' },
      { id: 'opt-c', text: 'Mediante correos electrónicos', textHy: 'Էլեկտրոնային նամակներով' },
      { id: 'opt-d', text: 'A través de pergaminos sellados en latín', textHy: 'Լատիներեն կնքված մագաղաթներով' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La inmensa mayoría de la gente no sabía leer, por lo que la transmisión era oral mediante la voz y el canto.',
    explanationHy: 'Մարդկանց ճնշող մեծամասնությունը կարդալ չգիտեր, ուստի փոխանցումը բանավոր էր՝ ձայնի և երգեցողության միջոցով:'
  },
  {
    id: 'pop-q3',
    topicId: 'tema-1',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'choice',
    question: '¿Por qué existen tantas versiones diferentes de una misma canción o romance popular?',
    questionHy: 'Ինչո՞ւ գոյություն ունեն նույն ժողովրդական երգի կամ ռոմանսի այնքան շատ տարբերակներ:',
    options: [
      { id: 'opt-a', text: 'Porque en la transmisión oral cada persona añade, quita o modifica detalles según su memoria', textHy: 'Որովհետև բանավոր փոխանցման ժամանակ յուրաքանչյուր մարդ ավելացնում, հանում կամ փոխում է մանրամասներն ըստ իր հիշողության' },
      { id: 'opt-b', text: 'Porque el gobierno cambiaba las leyes de rima', textHy: 'Որովհետև կառավարությունը փոխում էր հանգի օրենքները' },
      { id: 'opt-c', text: 'Porque los autores escribían diez versiones a máquina', textHy: 'Որովհետև հեղինակները գրամեքենայով տասը տարբերակ էին գրում' },
      { id: 'opt-d', text: 'Porque no había suficientes palabras en castellano', textHy: 'Որովհետև կաստիլերենում բավարար բառեր չկային' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La memoria humana es flexible; al recitarse de pueblo en pueblo, la obra sufre variantes naturales.',
    explanationHy: 'Մարդկային հիշողությունը ճկուն է. գյուղից գյուղ արտասանվելիս գործը բնական փոփոխություններ է կրում:'
  },
  {
    id: 'pop-q4',
    topicId: 'tema-1',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'identify',
    question: 'En una canción popular, el verso que se repite al final de cada estrofa se llama:',
    questionHy: 'Ժողովրդական երգում յուրաքանչյուր տան վերջում կրկնվող տողը կոչվում է՝',
    options: [
      { id: 'opt-a', text: 'Estribillo', textHy: 'Կրկներգ (estribillo)' },
      { id: 'opt-b', text: 'Hipérbaton', textHy: 'Հիպերբատոն' },
      { id: 'opt-c', text: 'Mito', textHy: 'Առասպել' },
      { id: 'opt-d', text: 'Sinalefa', textHy: 'Սինալեֆա' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'El estribillo es la repetición periódica que refuerza la musicalidad y ayuda a recordar la canción.',
    explanationHy: 'Կրկներգը պարբերական կրկնությունն է, որն ուժեղացնում է երաժշտականությունը և օգնում հիշել երգը:'
  },
  {
    id: 'pop-q5',
    topicId: 'tema-1',
    bloqueId: 1,
    difficulty: 'facil',
    questionType: 'truefalse',
    question: 'Verdadero o Falso: La literatura popular solo incluye textos en verso, nunca en prosa.',
    questionHy: 'Ճի՞շտ է, թե՞ Սխալ. Ժողովրդական գրականությունը ներառում է միայն չափածո տեքստեր, երբեք՝ արձակ:',
    options: [
      { id: 'opt-a', text: 'Falso (también hay cuentos populares y leyendas en prosa)', textHy: 'Սխալ է (կան նաև ժողովրդական հեքիաթներ և լեգենդներ արձակով)' },
      { id: 'opt-b', text: 'Verdadero', textHy: 'Ճիշտ է' },
      { id: 'opt-c', text: 'Solo en el siglo XXI', textHy: 'Միայն 21-րդ դարում' },
      { id: 'opt-d', text: 'Depende de la música', textHy: 'Կախված է երաժշտությունից' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Falso: los cuentos populares («Había una vez...») y muchas leyendas se narran en prosa.',
    explanationHy: 'Սխալ է. ժողովրդական հեքիաթները և շատ լեգենդներ պատմվում են արձակով:'
  },
  {
    id: 'pop-q6',
    topicId: 'tema-1',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'choice',
    question: '¿Qué rasgo de lenguaje predomina en la literatura popular?',
    questionHy: 'Լեզվի ո՞ր հատկանիշն է գերիշխում ժողովրդական գրականության մեջ:',
    options: [
      { id: 'opt-a', text: 'Lenguaje coloquial y cercano al habla cotidiana del pueblo', textHy: 'Առօրյա-խոսակցական լեզու՝ մոտ ժողովրդի խոսքին' },
      { id: 'opt-b', text: 'Vocabulario científico y términos en latín', textHy: 'Գիտական բառապաշար և լատիներեն եզրույթներ' },
      { id: 'opt-c', text: 'Sintaxis extremadamente difícil e indescifrable', textHy: 'Չափազանց բարդ և անհասկանալի շարահյուսություն' },
      { id: 'opt-d', text: 'Formulaciones matemáticas', textHy: 'Մաթեմատիկական բանաձևեր' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Al nacer del pueblo, utiliza expresiones espontáneas y giros coloquiales comprensibles para todos.',
    explanationHy: 'Ժողովրդից ծնվելով՝ այն օգտագործում է անկեղծ արտահայտություններ և բոլորի համար հասկանալի խոսակցական դարձվածքներ:'
  },
  {
    id: 'pop-q7',
    topicId: 'tema-1',
    bloqueId: 1,
    difficulty: 'dificil',
    questionType: 'identify',
    question: 'Expresiones como «Oíd, señores» o «Bien oiréis lo que dirá» son:',
    questionHy: '«Oíd, señores» կամ «Bien oiréis lo que dirá» արտահայտությունները հանդիսանում են՝',
    options: [
      { id: 'opt-a', text: 'Llamadas de atención al receptor u oyente típicas del juglar', textHy: 'Ունկնդրի ուշադրությունը գրավող կոչեր՝ բնորոշ գուսաններին (ժուգլարներին)' },
      { id: 'opt-b', text: 'Insultos medievales', textHy: 'Միջնադարյան վիրավորանքներ' },
      { id: 'opt-c', text: 'Definiciones de metáfora', textHy: 'Փոխաբերության սահմանումներ' },
      { id: 'opt-d', text: 'Rimas esdrújulas', textHy: 'Վերջընթերց հանգեր' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'El juglar o recitador popular usaba estas frases para captar el silencio y la atención en plazas públicas.',
    explanationHy: 'Գուսանը կամ ժողովրդական արտասանողն այս արտահայտություններն օգտագործում էր հրապարակում լռություն և ուշադրություն գրավելու համար:'
  },
  {
    id: 'pop-q8',
    topicId: 'tema-1',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'choice',
    question: '¿Cómo lograron conservarse muchas obras de la literatura popular hasta nuestros días?',
    questionHy: 'Ինչպե՞ս հաջողվեց ժողովրդական գրականության շատ գործեր պահպանել մինչև մեր օրերը:',
    options: [
      { id: 'opt-a', text: 'Porque eruditos y coleccionistas las recopilaron por escrito en cancioneros y romanceros', textHy: 'Որովհետև գիտնականներն ու հավաքորդները դրանք գրի առան երգարաններում և ռոմանսերոներում' },
      { id: 'opt-b', text: 'Porque estaban grabadas en piedras mágicas', textHy: 'Որովհետև փորագրված էին կախարդական քարերի վրա' },
      { id: 'opt-c', text: 'Porque se inventaron ayer', textHy: 'Որովհետև երեկ են հորինվել' },
      { id: 'opt-d', text: 'Por grabaciones de audio medievales', textHy: 'Միջնադարյան աուդիոձայնագրություններով' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La escritura permitió fijar en papel lo que antes solo vivía en la memoria efímera de la voz.',
    explanationHy: 'Գիրը թույլ տվեց թղթին ամրագրել այն, ինչ նախկինում ապրում էր միայն ձայնի անցողիկ հիշողության մեջ:'
  },

  // ================= TEMA 2: EL ROMANCE =================
  {
    id: 'rom-q1',
    topicId: 'tema-2',
    bloqueId: 1,
    difficulty: 'facil',
    questionType: 'choice',
    question: '¿Qué número de sílabas métricas tienen los versos de un romance?',
    questionHy: 'Քանի՞ տաղաչափական վանկ ունեն ռոմանսի տողերը:',
    options: [
      { id: 'opt-a', text: 'Ocho sílabas (octosílabos)', textHy: 'Ութ վանկ (ութավանկ)' },
      { id: 'opt-b', text: 'Once sílabas (endecasílabos)', textHy: 'Տասնմեկ վանկ' },
      { id: 'opt-c', text: 'Catorce sílabas (alejandrinos)', textHy: 'Տասնչորս վանկ' },
      { id: 'opt-d', text: 'Siete sílabas (heptasílabos)', textHy: 'Յոթ վանկ' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'El romance español está compuesto siempre en versos octosílabos (8 sílabas).',
    explanationHy: 'Իսպանական ռոմանսը միշտ կազմված է ութավանկ տողերով (8 վանկ):'
  },
  {
    id: 'rom-q2',
    topicId: 'tema-2',
    bloqueId: 1,
    difficulty: 'facil',
    questionType: 'choice',
    question: '¿Qué tipo de rima tiene el romance tradicional?',
    questionHy: 'Ի՞նչ տեսակի հանգ ունի ավանդական ռոմանսը:',
    options: [
      { id: 'opt-a', text: 'Rima asonante en los versos pares', textHy: 'Ասոնանս հանգ զույգ տողերում' },
      { id: 'opt-b', text: 'Rima consonante en todos los versos', textHy: 'Կոնսոնանս հանգ բոլոր տողերում' },
      { id: 'opt-c', text: 'Rima libre sin ningún sonido coincidente', textHy: 'Ազատ հանգ առանց որևէ համընկնող հնչյունի' },
      { id: 'opt-d', text: 'Rima asonante en los versos impares', textHy: 'Ասոնանս հանգ կենտ տողերում' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La norma métrica del romance establece rima asonante en los versos pares (2, 4, 6, 8...) y versos sueltos en los impares.',
    explanationHy: 'Ռոմանսի տաղաչափական կանոնը սահմանում է ասոնանս հանգ զույգ տողերում և ազատ կենտ տողեր:'
  },
  {
    id: 'rom-q3',
    topicId: 'tema-2',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'choice',
    question: 'Los versos impares (1.º, 3.º, 5.º...) de un romance:',
    questionHy: 'Ռոմանսի կենտ տողերը (1-ին, 3-րդ, 5-րդ...):',
    options: [
      { id: 'opt-a', text: 'Quedan sueltos (sin rima)', textHy: 'Մնում են ազատ (առանց հանգի)' },
      { id: 'opt-b', text: 'Riman en consonante obligatoria', textHy: 'Հանգավորվում են պարտադիր կոնսոնանսով' },
      { id: 'opt-c', text: 'Tienen diez sílabas', textHy: 'Ունեն տասը վանկ' },
      { id: 'opt-d', text: 'Se escriben en mayúsculas', textHy: 'Գրվում են մեծատառերով' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'El esquema del romance es: 8-, 8a, 8-, 8a, 8-, 8a...',
    explanationHy: 'Ռոմանսի սխեման է՝ 8-, 8a, 8-, 8a, 8-, 8a... (կենտ տողերն առանց հանգի են):'
  },
  {
    id: 'rom-q4',
    topicId: 'tema-2',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'choice',
    question: 'Si la última palabra de un verso es aguda (ej: «corazón», «mar»), en el cómputo silábico:',
    questionHy: 'Եթե տողի վերջին բառը սուր է (շեշտը վերջին վանկին է), վանկերի հաշվարկում՝',
    options: [
      { id: 'opt-a', text: 'Se suma obligatoriamente una sílaba (+1)', textHy: 'Պարտադիր գումարվում է մեկ վանկ (+1)' },
      { id: 'opt-b', text: 'Se resta una sílaba (-1)', textHy: 'Հանվում է մեկ վանկ (-1)' },
      { id: 'opt-c', text: 'El número queda exactamente igual', textHy: 'Թիվը մնում է ճիշտ նույնը' },
      { id: 'opt-d', text: 'Se divide entre dos', textHy: 'Բաժանվում է երկուսի' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Regla del acento final en español: palabra aguda o monosílaba final suma una sílaba (+1).',
    explanationHy: 'Իսպաներենի տողավերջի շեշտի կանոնը. սուր կամ միավանկ բառը տողավերջում գումարում է մեկ վանկ (+1):'
  },
  {
    id: 'rom-q5',
    topicId: 'tema-2',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'identify',
    question: '¿Qué es la sinalefa?',
    questionHy: 'Ի՞նչ է սինալեֆան:',
    options: [
      { id: 'opt-a', text: 'La unión en una sola sílaba métrica de la vocal final de una palabra y la inicial de la siguiente', textHy: 'Մեկ տաղաչափական վանկի մեջ բառի վերջին ձայնավորի և հաջորդի սկզբնական ձայնավորի միաձուլումը' },
      { id: 'opt-b', text: 'Una figura que cambia el orden de las palabras', textHy: 'Պատկեր, որը փոխում է բառերի կարգը' },
      { id: 'opt-c', text: 'Un tipo de rima consonante', textHy: 'Կոնսոնանս հանգի տեսակ' },
      { id: 'opt-d', text: 'Un cuento con personajes animales', textHy: 'Հեքիաթ կենդանի կերպարներով' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La sinalefa fusiona vocales en contacto entre palabras contiguas al recitar.',
    explanationHy: 'Սինալեֆան արտասանելիս միաձուլում է կից բառերի շփվող ձայնավորները:'
  },
  {
    id: 'rom-q6',
    topicId: 'tema-2',
    bloqueId: 1,
    difficulty: 'dificil',
    questionType: 'matchexample',
    question: 'En «cuando hace la calor», ¿cuántas sílabas métricas hay?',
    questionHy: '«Cuando hace la calor» տողում քանի՞ տաղաչափական վանկ կա:',
    options: [
      { id: 'opt-a', text: '8 sílabas (7 sílabas gramaticales + 1 por ser «calor» aguda)', textHy: '8 վանկ (7 քերականական վանկ + 1, քանի որ «calor»-ը սուր բառ է)' },
      { id: 'opt-b', text: '6 sílabas', textHy: '6 վանկ' },
      { id: 'opt-c', text: '11 sílabas', textHy: '11 վանկ' },
      { id: 'opt-d', text: '5 sílabas', textHy: '5 վանկ' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Cuan-do ha-ce la ca-lor (con sinalefa «do ha»: 1-2-3-4-5-6-7 + 1 por aguda = 8 sílabas).',
    explanationHy: 'Cuan-do ha-ce la ca-lor (սինալեֆայով «do ha». 7 վանկ + 1 սուր բառի համար = 8 վանկ):'
  },
  {
    id: 'rom-q7',
    topicId: 'tema-2',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'compare',
    question: '¿Qué diferencia a la rima asonante de la consonante?',
    questionHy: 'Ինչո՞վ է ասոնանս հանգը տարբերվում կոնսոնանսից:',
    options: [
      { id: 'opt-a', text: 'En la asonante solo coinciden las vocales; en la consonante coinciden vocales y consonantes.', textHy: 'Ասոնանսում համընկնում են միայն ձայնավորները, իսկ կոնսոնանսում՝ ձայնավորներն ու բաղաձայնները:' },
      { id: 'opt-b', text: 'Son exactamente lo mismo.', textHy: 'Ճիշտ նույնն են:' },
      { id: 'opt-c', text: 'La asonante solo se usa en inglés.', textHy: 'Ասոնանսն օգտագործվում է միայն անգլերենում:' },
      { id: 'opt-d', text: 'La consonante no tiene vocales.', textHy: 'Կոնսոնանսը չունի ձայնավորներ:' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: '«Barco / brazo» riman en asonante (a-o); «casa / pasa» riman en consonante (-asa).',
    explanationHy: '«Barco / brazo» հանգավորվում են ասոնանսով (a-o), իսկ «casa / pasa»՝ կոնսոնանսով (-asa):'
  },

  // ================= TEMA 3: LA LEYENDA =================
  {
    id: 'ley-q1',
    topicId: 'tema-3',
    bloqueId: 1,
    difficulty: 'facil',
    questionType: 'choice',
    question: 'La leyenda es una narración tradicional que mezcla:',
    questionHy: 'Լեգենդը ավանդական պատմություն է, որը միախառնում է՝',
    options: [
      { id: 'opt-a', text: 'Acontecimientos reales o históricos con elementos fantásticos y sobrenaturales', textHy: 'Իրական կամ պատմական դեպքերը ֆանտաստիկ և գերբնական տարրերի հետ' },
      { id: 'opt-b', text: 'Fórmulas matemáticas con química', textHy: 'Մաթեմատիկական բանաձևերը քիմիայի հետ' },
      { id: 'opt-c', text: 'Solo datos comprobados científicamente', textHy: 'Միայն գիտականորեն ապացուցված տվյալներ' },
      { id: 'opt-d', text: 'Leyes de tráfico', textHy: 'Երթևեկության կանոններ' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La leyenda parte de un núcleo histórico o geográfico real que la fantasía popular enriquece.',
    explanationHy: 'Լեգենդը սկսվում է իրական պատմական կամ աշխարհագրական կորիզից, որը ժողովրդական երևակայությունը հարստացնում է:'
  },
  {
    id: 'ley-q2',
    topicId: 'tema-3',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'choice',
    question: 'A diferencia del mito, la leyenda transcurre en:',
    questionHy: 'Ի տարբերություն առասպելի՝ լեգենդը տեղի է ունենում՝',
    options: [
      { id: 'opt-a', text: 'Un tiempo histórico concreto y un lugar geográfico real reconocible', textHy: 'Կոնկրետ պատմական ժամանակում և ճանաչելի իրական աշխարհագրական վայրում' },
      { id: 'opt-b', text: 'Un tiempo anterior a la creación del planeta', textHy: 'Մոլորակի ստեղծումից առաջ ժամանակում' },
      { id: 'opt-c', text: 'El Olimpo entre los dioses', textHy: 'Օլիմպոսում՝ աստվածների միջև' },
      { id: 'opt-d', text: 'Un planeta imaginario de otra galaxia', textHy: 'Այլ գալակտիկայի երևակայական մոլորակում' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Las leyendas siempre mencionan ciudades (Toledo, Sevilla), castillos o accidentes geográficos reales.',
    explanationHy: 'Լեգենդները միշտ հիշատակում են իրական քաղաքներ (Տոլեդո, Սևիլիա), ամրոցներ կամ աշխարհագրական վայրեր:'
  },
  {
    id: 'ley-q3',
    topicId: 'tema-3',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'choice',
    question: '¿Quiénes suelen ser los personajes de una leyenda?',
    questionHy: 'Ովքե՞ր են սովորաբար լեգենդի կերպարները:',
    options: [
      { id: 'opt-a', text: 'Seres humanos (caballeros, damas, reyes o habitantes locales)', textHy: 'Մարդիկ (ասպետներ, տիկնայք, թագավորներ կամ տեղի բնակիչներ)' },
      { id: 'opt-b', text: 'Dioses inmortales exclusivamente', textHy: 'Բացառապես անմահ աստվածները' },
      { id: 'opt-c', text: 'Titanes que crearon el sol', textHy: 'Տիտաններ, որոնք ստեղծել են արևը' },
      { id: 'opt-d', text: 'Robots del futuro', textHy: 'Ապագայի ռոբոտներ' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Los personajes de la leyenda son mortales humanos vinculados a la historia del lugar.',
    explanationHy: 'Լեգենդի կերպարները մահկանացու մարդիկ են՝ կապված տվյալ վայրի պատմության հետ:'
  },
  {
    id: 'ley-q4',
    topicId: 'tema-3',
    bloqueId: 1,
    difficulty: 'dificil',
    questionType: 'identify',
    question: '¿Qué autor español del siglo XIX escribió famosas leyendas literarias en prosa como «El rayo de luna» o «Maese Pérez el organista»?',
    questionHy: '19-րդ դարի ո՞ր իսպանացի հեղինակն է գրել հայտնի արձակ գրական լեգենդներ, ինչպիսիք են «Լուսնի ճառագայթը» կամ «Վարպետ Պերես երգեհոնահարը»:',
    options: [
      { id: 'opt-a', text: 'Gustavo Adolfo Bécquer', textHy: 'Գուստավո Ադոլֆո Բեկեր' },
      { id: 'opt-b', text: 'Federico García Lorca', textHy: 'Ֆեդերիկո Գարսիա Լորկա' },
      { id: 'opt-c', text: 'Miguel de Cervantes', textHy: 'Միգել դե Սերվանտես' },
      { id: 'opt-d', text: 'Garcilaso de la Vega', textHy: 'Գարսիլասո դե լա Վեգա' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Bécquer inmortalizó las leyendas tradicionales recogidas en Toledo, Soria y Sevilla.',
    explanationHy: 'Բեկերն անմահացրեց Տոլեդոյում, Սորիայում և Սևիլիայում հավաքված ավանդական լեգենդները:'
  },
  {
    id: 'ley-q5',
    topicId: 'tema-3',
    bloqueId: 1,
    difficulty: 'facil',
    questionType: 'truefalse',
    question: 'Verdadero o Falso: Una leyenda pretende explicar de manera fantástica un hecho o monumento de una comunidad local.',
    questionHy: 'Ճի՞շտ է, թե՞ Սխալ. Լեգենդը նպատակ ունի ֆանտաստիկ կերպով բացատրել տեղական համայնքի որևէ իրադարձություն կամ հուշարձան:',
    options: [
      { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
      { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
      { id: 'opt-c', text: 'Solo en mitología griega', textHy: 'Միայն հունական դիցաբանությունում' },
      { id: 'opt-d', text: 'Solo si tiene 10 versos', textHy: 'Միայն եթե ունի 10 տող' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Verdadero: las leyendas dotan de misterio y orgullo a los lugares y costumbres de los pueblos.',
    explanationHy: 'Ճիշտ է. լեգենդները խորհրդավորություն և հպարտություն են հաղորդում ժողովուրդների վայրերին և սովորույթներին:'
  },

  // ================= TEMA 4: EL MITO =================
  {
    id: 'mit-q1',
    topicId: 'tema-4',
    bloqueId: 1,
    difficulty: 'facil',
    questionType: 'choice',
    question: '¿Qué es un mito?',
    questionHy: 'Ի՞նչ է առասպելը (միֆը):',
    options: [
      { id: 'opt-a', text: 'Un relato sagrado tradicional que explica el origen del mundo, del ser humano y de las fuerzas cósmicas', textHy: 'Ավանդական սրբազան պատմություն, որը բացատրում է աշխարհի, մարդու և տիեզերական ուժերի ծագումը' },
      { id: 'opt-b', text: 'Una biografía de un futbolista actual', textHy: 'Ներկայիս ֆուտբոլիստի կենսագրություն' },
      { id: 'opt-c', text: 'Un poema de ocho sílabas con rima', textHy: 'Ութ վանկանի բանաստեղծություն հանգով' },
      { id: 'opt-d', text: 'Una ley votada en el parlamento', textHy: 'Խորհրդարանում քվեարկված օրենք' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'El mito es una explicación cosmológica y religiosa de la creación del universo.',
    explanationHy: 'Առասպելը տիեզերքի ստեղծման տիեզերաբանական և կրոնական բացատրությունն է:'
  },
  {
    id: 'mit-q2',
    topicId: 'tema-4',
    bloqueId: 1,
    difficulty: 'facil',
    questionType: 'choice',
    question: '¿Quiénes protagonizan los mitos clásicos?',
    questionHy: 'Ովքե՞ր են դասական առասպելների գլխավոր հերոսները:',
    options: [
      { id: 'opt-a', text: 'Dioses inmortales, semidioses y héroes sobrenaturales', textHy: 'Անմահ աստվածներ, կիսաստվածներ և գերբնական հերոսներ' },
      { id: 'opt-b', text: 'Vecinos comunes de una aldea moderna', textHy: 'Ժամանակակից գյուղի սովորական բնակիչներ' },
      { id: 'opt-c', text: 'Científicos del laboratorio', textHy: 'Լաբորատորիայի գիտնականներ' },
      { id: 'opt-d', text: 'Periodistas', textHy: 'Լրագրողներ' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Los mitos griegos y romanos están poblados por Zeus, Poseidón, Apolo, Hércules y otras deidades.',
    explanationHy: 'Հունական և հռոմեական առասպելները բնակեցված են Զևսով, Պոսեյդոնով, Ապոլոնով, Հերկուլեսով և այլ աստվածություններով:'
  },
  {
    id: 'mit-q3',
    topicId: 'tema-4',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'identify',
    question: 'El relato donde Prometeo roba el fuego sagrado a los dioses del Olimpo para dárselo a los hombres es un:',
    questionHy: 'Պատմությունը, որտեղ Պրոմեթևսը Օլիմպոսի աստվածներից գողանում է սրբազան կրակը մարդկանց տալու համար, հանդիսանում է՝',
    options: [
      { id: 'opt-a', text: 'Mito', textHy: 'Առասպել (Mito)' },
      { id: 'opt-b', text: 'Romance octosílabo', textHy: 'Ութավանկ ռոմանս' },
      { id: 'opt-c', text: 'Leyenda de Toledo', textHy: 'Տոլեդոյի լեգենդ' },
      { id: 'opt-d', text: 'Novela culta renacentista', textHy: 'Վերածննդի հեղինակային վեպ' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Involucra dioses y titanes y explica el origen del progreso técnico y el fuego humano.',
    explanationHy: 'Ներգրավում է աստվածների ու տիտանների և բացատրում տեխնիկական առաջընթացի ու մարդկային կրակի ծագումը:'
  },
  {
    id: 'mit-q4',
    topicId: 'tema-4',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'compare',
    question: '¿Por qué un mito no se considera una leyenda histórica?',
    questionHy: 'Ինչո՞ւ առասպելը չի համարվում պատմական լեգենդ:',
    options: [
      { id: 'opt-a', text: 'Porque no tiene base histórica ni lugar geográfico real comprobable; transcurre en un tiempo sagrado intemporal.', textHy: 'Որովհետև չունի պատմական հիմք կամ ստուգելի իրական աշխարհագրական վայր. այն տեղի է ունենում սրբազան անժամանակ շրջանում:' },
      { id: 'opt-b', text: 'Porque los mitos se escribieron en inglés.', textHy: 'Որովհետև առասպելները գրվել են անգլերեն:' },
      { id: 'opt-c', text: 'Porque una leyenda solo tiene dos líneas.', textHy: 'Որովհետև լեգենդն ունի ընդամենը երկու տող:' },
      { id: 'opt-d', text: 'Porque los mitos no tienen personajes.', textHy: 'Որովհետև առասպելները կերպարներ չունեն:' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'El mito es simbólico y universal; la leyenda es local y tiene un anclaje geográfico e histórico concreto.',
    explanationHy: 'Առասպելը խորհրդանշական է և համամարդկային, իսկ լեգենդը՝ տեղային և ունի կոնկրետ աշխարհագրական ու պատմական խարիսխ:'
  },
  {
    id: 'mit-q5',
    topicId: 'tema-4',
    bloqueId: 1,
    difficulty: 'facil',
    questionType: 'choice',
    question: '¿Qué fenómeno explicaba el mito griego de Perséfone y Deméter?',
    questionHy: 'Ի՞նչ երևույթ էր բացատրում Պերսեփոնեի և Դեմետրայի հունական առասպելը:',
    options: [
      { id: 'opt-a', text: 'El origen de las cuatro estaciones del año y la agricultura', textHy: 'Տարվա չորս եղանակների և գյուղատնտեսության ծագումը' },
      { id: 'opt-b', text: 'La invención de los barcos de vapor', textHy: 'Շոգենավերի գյուտը' },
      { id: 'opt-c', text: 'La construcción del puente de Toledo', textHy: 'Տոլեդոյի կամրջի կառուցումը' },
      { id: 'opt-d', text: 'Las reglas del fútbol', textHy: 'Ֆուտբոլի կանոնները' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Cuando Perséfone sube del inframundo la tierra florece (primavera/verano); cuando baja, la tierra se seca (otoño/invierno).',
    explanationHy: 'Երբ Պերսեփոնեն բարձրանում է ստորգետնյա աշխարհից, երկիրը ծաղկում է (գարուն/ամառ), երբ իջնում է՝ չորանում (աշուն/ձմեռ):'
  },

  // ================= TEMA 5: EL CUENTO =================
  {
    id: 'cue-q1',
    topicId: 'tema-5',
    bloqueId: 1,
    difficulty: 'facil',
    questionType: 'choice',
    question: '¿Cuáles son las tres partes fijas e indispensables de la estructura de un cuento?',
    questionHy: 'Որո՞նք են հեքիաթի/պատմվածքի կառուցվածքի երեք անփոփոխ և անհրաժեշտ մասերը:',
    options: [
      { id: 'opt-a', text: 'Inicio (planteamiento), nudo (conflicto) y desenlace (resolución)', textHy: 'Սկիզբ (նախադրություն), հանգույց (բախում) և հանգուցալուծում (լուծում)' },
      { id: 'opt-b', text: 'Prólogo, índice y bibliografía', textHy: 'Նախաբան, բովանդակություն և մատենագրություն' },
      { id: 'opt-c', text: 'Estrofa, verso y rima', textHy: 'Տուն, տող և հանգ' },
      { id: 'opt-d', text: 'Metáfora, asíndeton e hipérbaton', textHy: 'Փոխաբերություն, անշաղկապություն և հիպերբատոն' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Todo cuento canónico sigue el esquema tripartito: presentación de la situación, ruptura del equilibrio con un conflicto, y resolución.',
    explanationHy: 'Յուրաքանչյուր կանոնական հեքիաթ հետևում է եռամաս սխեմային՝ իրավիճակի ներկայացում, հավասարակշռության խախտում բախումով և լուծում:'
  },
  {
    id: 'cue-q2',
    topicId: 'tema-5',
    bloqueId: 1,
    difficulty: 'facil',
    questionType: 'choice',
    question: 'El cuento es una narración caracterizada por ser:',
    questionHy: 'Հեքիաթը/պատմվածքը բնութագրվում է որպես՝',
    options: [
      { id: 'opt-a', text: 'Breve, en prosa, de ficción y con número reducido de personajes', textHy: 'Կարճ, արձակ, հորինված և քիչ կերպարներով' },
      { id: 'opt-b', text: 'Extensa de mil páginas en verso', textHy: 'Հազար էջանոց ընդարձակ չափածո' },
      { id: 'opt-c', text: 'Un texto científico sin imaginación', textHy: 'Գիտական տեքստ առանց երևակայության' },
      { id: 'opt-d', text: 'Un poema de amor para cantar', textHy: 'Երգելու սիրային բանաստեղծություն' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La brevedad, la prosa, la ficción y la economía de personajes son sus rasgos definitorios.',
    explanationHy: 'Հակիրճությունը, արձակը, հորինվածքը և կերպարների սակավությունը նրա բնորոշ գծերն են:'
  },
  {
    id: 'cue-q3',
    topicId: 'tema-5',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'identify',
    question: 'En un cuento, la parte donde se resuelve definitivamente el problema planteado se denomina:',
    questionHy: 'Հեքիաթում այն մասը, որտեղ վերջնականապես լուծվում է առաջադրված խնդիրը, կոչվում է՝',
    options: [
      { id: 'opt-a', text: 'Desenlace', textHy: 'Հանգուցալուծում (Desenlace)' },
      { id: 'opt-b', text: 'Nudo', textHy: 'Հանգույց (Nudo)' },
      { id: 'opt-c', text: 'Inicio', textHy: 'Սկիզբ (Inicio)' },
      { id: 'opt-d', text: 'Sinalefa', textHy: 'Սինալեֆա' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'El desenlace cierra la historia y establece el orden final.',
    explanationHy: 'Հանգուցալուծումը փակում է պատմությունը և հաստատում վերջնական կարգը:'
  },
  {
    id: 'cue-q4',
    topicId: 'tema-5',
    bloqueId: 1,
    difficulty: 'medio',
    questionType: 'choice',
    question: '¿Qué diferencia a un cuento popular de un cuento literario moderno?',
    questionHy: 'Ինչո՞վ է ժողովրդական հեքիաթը տարբերվում ժամանակակից գրական պատմվածքից:',
    options: [
      { id: 'opt-a', text: 'El popular es anónimo y tradicional; el literario tiene un autor conocido y estilo individual fijado por escrito.', textHy: 'Ժողովրդականն անանուն է և ավանդական, իսկ գրականն ունի հայտնի հեղինակ և գրավոր ամրագրված անհատական ոճ:' },
      { id: 'opt-b', text: 'El cuento popular siempre está en latín.', textHy: 'Ժողովրդական հեքիաթը միշտ լատիներեն է:' },
      { id: 'opt-c', text: 'El literario solo tiene una frase.', textHy: 'Գրականն ունի ընդամենը մեկ նախադասություն:' },
      { id: 'opt-d', text: 'No existe ninguna diferencia.', textHy: 'Ոչ մի տարբերություն գոյություն չունի:' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La autoría conocida y la transmisión escrita distinguen al cuento literario.',
    explanationHy: 'Հայտնի հեղինակությունը և գրավոր փոխանցումն առանձնացնում են գրական պատմվածքը:'
  },
  {
    id: 'cue-q5',
    topicId: 'tema-5',
    bloqueId: 1,
    difficulty: 'facil',
    questionType: 'truefalse',
    question: 'Verdadero o Falso: «Caperucita Roja» y «Blancanieves» son ejemplos universales de cuentos populares.',
    questionHy: 'Ճի՞շտ է, թե՞ Սխալ. «Կարմիր գլխարկը» և «Սպիտակաձյունիկը» ժողովրդական հեքիաթների համամարդկային օրինակներ են:',
    options: [
      { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
      { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
      { id: 'opt-c', text: 'Son mitos griegos del Olimpo', textHy: 'Օլիմպոսի հունական առասպելներ են' },
      { id: 'opt-d', text: 'Son romances de 8 sílabas', textHy: '8 վանկանի ռոմանսներ են' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Verdadero: nacieron de la tradición oral anónima y fueron recopilados posteriormente.',
    explanationHy: 'Ճիշտ է. ծնվել են անանուն բանավոր ավանդույթից և ավելի ուշ գրի են առնվել:'
  },

  // ================= TEMA 6: LITERATURA CULTA =================
  {
    id: 'cul-q1',
    topicId: 'tema-6',
    bloqueId: 2,
    difficulty: 'facil',
    questionType: 'choice',
    question: '¿Cuál es la característica principal de la literatura culta?',
    questionHy: 'Ո՞րն է հեղինակային գրականության (literatura culta) գլխավոր առանձնահատկությունը:',
    options: [
      { id: 'opt-a', text: 'Tiene autor conocido, transmisión escrita y lenguaje muy cuidado y elaborado', textHy: 'Ունի հայտնի հեղինակ, գրավոր փոխանցում և շատ մշակված ու խնամված լեզու' },
      { id: 'opt-b', text: 'Es anónima y cambia de letra cada día', textHy: 'Անանուն է և ամեն օր փոխում է բառերը' },
      { id: 'opt-c', text: 'Solo se canta en plazas públicas', textHy: 'Միայն երգվում է հրապարակներում' },
      { id: 'opt-d', text: 'Está prohibido imprimirla en libros', textHy: 'Արգելված է գրքերում տպագրել' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La literatura culta nace del autor culto individual que busca la perfección formal por escrito.',
    explanationHy: 'Հեղինակային գրականությունը ծնվում է կիրթ անհատ հեղինակից, ով ձգտում է գրավոր ձևական կատարելության:'
  },
  {
    id: 'cul-q2',
    topicId: 'tema-6',
    bloqueId: 2,
    difficulty: 'medio',
    questionType: 'choice',
    question: 'En la literatura culta, ¿existen diferentes versiones populares que cambian el texto?',
    questionHy: 'Հեղինակային գրականության մեջ արդյո՞ք կան տեքստը փոխող տարբեր ժողովրդական տարբերակներ:',
    options: [
      { id: 'opt-a', text: 'No, el texto es fijo, inmutable y único tal como lo concibió el autor', textHy: 'Ոչ, տեքստը հաստատուն է, անփոփոխ և միասնական, ինչպես ստեղծել է հեղինակը' },
      { id: 'opt-b', text: 'Sí, cada lector inventa su propio final', textHy: 'Այո, յուրաքանչյուր ընթերցող հորինում է իր սեփական ավարտը' },
      { id: 'opt-c', text: 'Solo cambian los nombres de los personajes', textHy: 'Միայն հերոսների անուններն են փոխվում' },
      { id: 'opt-d', text: 'Depende del clima', textHy: 'Կախված է եղանակից' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Al estar fijada por escrito en manuscrito o imprenta, la obra culta no sufre modificaciones de boca en boca.',
    explanationHy: 'Ձեռագրով կամ տպագրությամբ գրավոր ամրագրված լինելով՝ հեղինակային գործը բերանից բերան փոփոխությունների չի ենթարկվում:'
  },
  {
    id: 'cul-q3',
    topicId: 'tema-6',
    bloqueId: 2,
    difficulty: 'facil',
    questionType: 'identify',
    question: '«Don Quijote de la Mancha» de Miguel de Cervantes es una obra cumbre de la:',
    questionHy: 'Միգել դե Սերվանտեսի «Դոն Կիխոտ»-ը հանդիսանում է գագաթնակետային գործ՝',
    options: [
      { id: 'opt-a', text: 'Literatura culta universal', textHy: 'Համաշխարհային հեղինակային գրականության' },
      { id: 'opt-b', text: 'Literatura popular anónima', textHy: 'Անանուն ժողովրդական գրականության' },
      { id: 'opt-c', text: 'Mitología mesopotámica', textHy: 'Միջագետքի դիցաբանության' },
      { id: 'opt-d', text: 'Poesía infantil cantada', textHy: 'Երգվող մանկական պոեզիայի' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Cervantes es el autor individual con firma y texto impreso inmutable.',
    explanationHy: 'Սերվանտեսն անհատ հեղինակն է՝ իր ստորագրությամբ և անփոփոխ տպագիր տեքստով:'
  },
  {
    id: 'cul-q4',
    topicId: 'tema-6',
    bloqueId: 2,
    difficulty: 'dificil',
    questionType: 'compare',
    question: '¿Puede un poeta culto componer un romance?',
    questionHy: 'Կարո՞ղ է հեղինակային բանաստեղծը ռոմանս հորինել:',
    options: [
      { id: 'opt-a', text: 'Sí, se llama romance culto o artístico (como los de Góngora o Lorca)', textHy: 'Այո, այն կոչվում է հեղինակային կամ գեղարվեստական ռոմանս (ինչպես Գոնգորայի կամ Լորկայի գործերը)' },
      { id: 'opt-b', text: 'No, está prohibido por las leyes de métrica', textHy: 'Ոչ, արգելված է տաղաչափության կանոններով' },
      { id: 'opt-c', text: 'Solo si el poeta es anónimo', textHy: 'Միայն եթե բանաստեղծն անանուն է' },
      { id: 'opt-d', text: 'Solo en prosa', textHy: 'Միայն արձակով' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Los grandes poetas cultos adoptaron el molde del romance popular para crear obras cultas extraordinarias.',
    explanationHy: 'Մեծ հեղինակային բանաստեղծները վերցրին ժողովրդական ռոմանսի կաղապարը՝ ստեղծելու հիասքանչ հեղինակային գործեր:'
  },
  {
    id: 'cul-q5',
    topicId: 'tema-6',
    bloqueId: 2,
    difficulty: 'medio',
    questionType: 'choice',
    question: '¿Qué invento del siglo XV facilitó la difusión masiva de la literatura culta?',
    questionHy: '15-րդ դարի ո՞ր գյուտը հեշտացրեց հեղինակային գրականության զանգվածային տարածումը:',
    options: [
      { id: 'opt-a', text: 'La imprenta de tipos móviles (Gutenberg)', textHy: 'Շարժական տպագրահաստոցը (Գուտենբերգ)' },
      { id: 'opt-b', text: 'La radio', textHy: 'Ռադիոն' },
      { id: 'opt-c', text: 'El teléfono móvil', textHy: 'Բջջային հեռախոսը' },
      { id: 'opt-d', text: 'La televisión', textHy: 'Հեռուստատեսությունը' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La imprenta permitió multiplicar copias idénticas exactas del texto original del autor.',
    explanationHy: 'Տպագրությունը թույլ տվեց բազմացնել հեղինակի բնօրինակ տեքստի ճշգրիտ նույնական օրինակները:'
  },

  // ================= TEMA 7: EL LENGUAJE LITERARIO =================
  {
    id: 'lit-q1',
    topicId: 'tema-7',
    bloqueId: 3,
    difficulty: 'facil',
    questionType: 'choice',
    question: '¿Cuál es la finalidad primordial del lenguaje literario?',
    questionHy: 'Ո՞րն է գրական լեզվի առաջնային նպատակը:',
    options: [
      { id: 'opt-a', text: 'Crear belleza, suscitar emociones y llamar la atención sobre la forma del mensaje (función poética)', textHy: 'Գեղեցկություն ստեղծել, հույզեր արթնացնել և ուշադրություն գրավել հաղորդագրության ձևի վրա (բանաստեղծական գործառույթ)' },
      { id: 'opt-b', text: 'Transmitir datos de tráfico rápidamente', textHy: 'Երթևեկության տվյալներն արագ հաղորդել' },
      { id: 'opt-c', text: 'Vender productos en el supermercado', textHy: 'Սուպերմարկետում ապրանքներ վաճառել' },
      { id: 'opt-d', text: 'Redactar contratos legales fríos', textHy: 'Սառը իրավաբանական պայմանագրեր կազմել' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'El arte literario se distingue por la función poética o estética del lenguaje.',
    explanationHy: 'Գրական արվեստն առանձնանում է լեզվի բանաստեղծական կամ գեղագիտական գործառույթով:'
  },
  {
    id: 'lit-q2',
    topicId: 'tema-7',
    bloqueId: 3,
    difficulty: 'medio',
    questionType: 'identify',
    question: 'En lugar de decir «Llueve», el autor escribe «El cielo desata sus lágrimas cristalinas». ¿Qué tipo de lenguaje usa?',
    questionHy: '«Անձրև է գալիս» ասելու փոխարեն հեղինակը գրում է՝ «Երկինքն արձակում է իր բյուրեղյա արցունքները»: Ի՞նչ տեսակի լեզու է օգտագործում:',
    options: [
      { id: 'opt-a', text: 'Lenguaje literario o poético con recursos expresivos', textHy: 'Գրական կամ բանաստեղծական լեզու՝ արտահայտչական հնարքներով' },
      { id: 'opt-b', text: 'Lenguaje cotidiano vulgar', textHy: 'Առօրյա խոսակցական լեզու' },
      { id: 'opt-c', text: 'Lenguaje matemático', textHy: 'Մաթեմատիկական լեզու' },
      { id: 'opt-d', text: 'Lenguaje administrativo', textHy: 'Վարչական լեզու' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'El uso de la metáfora y el embellecimiento figurado son propios del lenguaje literario.',
    explanationHy: 'Փոխաբերության օգտագործումը և պատկերավոր գեղեցկացումը բնորոշ են գրական լեզվին:'
  },
  {
    id: 'lit-q3',
    topicId: 'tema-7',
    bloqueId: 3,
    difficulty: 'medio',
    questionType: 'choice',
    question: '¿Qué instrumentos utiliza el escritor para transformar el lenguaje común en literario?',
    questionHy: 'Ի՞նչ գործիքներ է օգտագործում գրողը սովորական լեզուն գրականի վերածելու համար:',
    options: [
      { id: 'opt-a', text: 'Las figuras retóricas, el ritmo, la musicalidad y las asociaciones sugerentes', textHy: 'Հռետորական պատկերները, ռիթմը, երաժշտականությունը և ակնարկող զուգորդությունները' },
      { id: 'opt-b', text: 'Faltas de ortografía continuas', textHy: 'Շարունակական ուղղագրական սխալներ' },
      { id: 'opt-c', text: 'Traducciones automáticas de internet', textHy: 'Ինտերնետային ավտոմատ թարգմանություններ' },
      { id: 'opt-d', text: 'Términos exclusivos de medicina', textHy: 'Բացառապես բժշկական եզրույթներ' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Los recursos retóricos potencian el valor estético del texto.',
    explanationHy: 'Հռետորական հնարքները հզորացնում են տեքստի գեղագիտական արժեքը:'
  },
  {
    id: 'lit-q4',
    topicId: 'tema-7',
    bloqueId: 3,
    difficulty: 'facil',
    questionType: 'truefalse',
    question: 'Verdadero o Falso: El lenguaje cotidiano busca la claridad y la rapidez para comunicar información práctica inmediata.',
    questionHy: 'Ճի՞շտ է, թե՞ Սխալ. Առօրյա լեզուն ձգտում է պարզության և արագության՝ անմիջական գործնական տեղեկատվություն հաղորդելու համար:',
    options: [
      { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
      { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
      { id: 'opt-c', text: 'Solo en poesía', textHy: 'Միայն պոեզիայում' },
      { id: 'opt-d', text: 'Solo si tiene rima consonante', textHy: 'Միայն եթե ունի կոնսոնանս հանգ' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Verdadero: el lenguaje cotidiano es funcional y utilitario; el literario es artístico.',
    explanationHy: 'Ճիշտ է. առօրյա լեզուն գործառնական է և օգտապաշտական, իսկ գրականը՝ արվեստ:'
  },

  // ================= TEMA 8: LA PROSA Y EL VERSO =================
  {
    id: 'pro-q1',
    topicId: 'tema-8',
    bloqueId: 3,
    difficulty: 'facil',
    questionType: 'choice',
    question: 'Visualmente, ¿cómo se distingue la prosa del verso en una página?',
    questionHy: 'Տեսողականորեն ինչպե՞ս է արձակը տարբերվում չափածոյից էջի վրա:',
    options: [
      { id: 'opt-a', text: 'La prosa ocupa todo el renglón hasta el margen; el verso se escribe en líneas cortas que no llegan al final', textHy: 'Արձակը զբաղեցնում է ամբողջ տողը մինչև լուսանցք, իսկ չափածո տողերը կարճ են և չեն հասնում վերջին' },
      { id: 'opt-b', text: 'La prosa se escribe siempre en círculos', textHy: 'Արձակը միշտ գրվում է շրջաններով' },
      { id: 'opt-c', text: 'El verso solo lleva números romanos', textHy: 'Չափածոն ունի միայն հռոմեական թվեր' },
      { id: 'opt-d', text: 'No hay ninguna diferencia visual', textHy: 'Ոչ մի տեսողական տարբերություն չկա' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La disposición tipográfica en líneas cortas independientes con pausas es la marca visible del verso.',
    explanationHy: 'Տպագրական դասավորությունը դադարներով կարճ անկախ տողերով չափածոյի տեսանելի նշանն է:'
  },
  {
    id: 'pro-q2',
    topicId: 'tema-8',
    bloqueId: 3,
    difficulty: 'medio',
    questionType: 'choice',
    question: '¿Qué elementos componen el ritmo característico del verso?',
    questionHy: 'Ո՞ր տարրերն են կազմում չափածոյի բնորոշ ռիթմը:',
    options: [
      { id: 'opt-a', text: 'El número medido de sílabas, la posición de los acentos y la presencia de rima', textHy: 'Վանկերի չափված քանակը, շեշտերի դիրքը և հանգի առկայությունը' },
      { id: 'opt-b', text: 'Las imágenes fotográficas a color', textHy: 'Գունավոր լուսանկարչական պատկերները' },
      { id: 'opt-c', text: 'El peso del papel', textHy: 'Թղթի ծանրությունը' },
      { id: 'opt-d', text: 'El precio del libro', textHy: 'Գրքի գինը' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La métrica combina cómputo silábico, acentuación y rima sonora.',
    explanationHy: 'Տաղաչափությունը միավորում է վանկերի հաշվարկը, շեշտադրությունը և հնչյունական հանգը:'
  },
  {
    id: 'pro-q3',
    topicId: 'tema-8',
    bloqueId: 3,
    difficulty: 'facil',
    questionType: 'identify',
    question: 'Las novelas, las noticias, los cuentos tradicionales y las biografías suelen escribirse en:',
    questionHy: 'Վեպերը, նորությունները, ավանդական հեքիաթները և կենսագրությունները սովորաբար գրվում են՝',
    options: [
      { id: 'opt-a', text: 'Prosa', textHy: 'Արձակով (Prosa)' },
      { id: 'opt-b', text: 'Verso alejandrino de 14 sílabas', textHy: '14 վանկանի ալեքսանդրյան չափածոյով' },
      { id: 'opt-c', text: 'Romance cantado', textHy: 'Երգվող ռոմանսով' },
      { id: 'opt-d', text: 'Onomatopeyas', textHy: 'Բնաձայնություններով' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'La prosa es la forma natural y continua del lenguaje narrativo.',
    explanationHy: 'Արձակը պատմողական լեզվի բնական և շարունակական ձևն է:'
  },
  {
    id: 'pro-q4',
    topicId: 'tema-8',
    bloqueId: 3,
    difficulty: 'medio',
    questionType: 'identify',
    question: 'Un conjunto ordenado de varios versos que comparten una estructura de rima se denomina:',
    questionHy: 'Չափածո մի քանի տողերի կարգավորված խումբը, որոնք կիսում են հանգի կառուցվածքը, կոչվում է՝',
    options: [
      { id: 'opt-a', text: 'Estrofa', textHy: 'Տուն (Estrofa)' },
      { id: 'opt-b', text: 'Párrafo', textHy: 'Պարբերություն (Párrafo)' },
      { id: 'opt-c', text: 'Sinalefa', textHy: 'Սինալեֆա' },
      { id: 'opt-d', text: 'Hipérbaton', textHy: 'Հիպերբատոն' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Los versos se agrupan en estrofas (como cuarteto, terceto, etc.). Los textos en prosa se agrupan en párrafos.',
    explanationHy: 'Տողերը խմբավորվում են տների մեջ: Իսկ արձակ տեքստերը խմբավորվում են պարբերությունների մեջ:'
  },
  {
    id: 'pro-q5',
    topicId: 'tema-8',
    bloqueId: 3,
    difficulty: 'dificil',
    questionType: 'truefalse',
    question: 'Verdadero o Falso: Un texto en prosa puede tener gran belleza poética y metáforas sin convertirse en verso.',
    questionHy: 'Ճի՞շտ է, թե՞ Սխալ. Արձակ տեքստը կարող է ունենալ մեծ բանաստեղծական գեղեցկություն և փոխաբերություններ՝ առանց չափածո դառնալու:',
    options: [
      { id: 'opt-a', text: 'Verdadero (se llama prosa poética)', textHy: 'Ճիշտ է (կոչվում է բանաստեղծական արձակ)' },
      { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
      { id: 'opt-c', text: 'Solo en latín', textHy: 'Միայն լատիներենում' },
      { id: 'opt-d', text: 'Solo si tiene estribillo', textHy: 'Միայն եթե ունի կրկներգ' }
    ],
    correctOptionId: 'opt-a',
    explanationEs: 'Verdadero: la prosa poética (como «Platero y yo» de Juan Ramón Jiménez) usa recursos líricos ocupando todo el renglón.',
    explanationHy: 'Ճիշտ է. բանաստեղծական արձակն օգտագործում է քնարական հնարքներ՝ զբաղեցնելով ամբողջ տողը:'
  }
];

// Combine all sources into a single master bank of questions
export const ALL_QUESTIONS: Question[] = [
  ...coreQuestions,
  ...figureQuestions,
  ...comparisonQuestions,
  ...textQuestions
];

// Helper to shuffle an array immutably
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Prepare question for display by shuffling its options
export function prepareQuestionForDisplay(q: Question): Question {
  return {
    ...q,
    options: shuffleArray(q.options)
  };
}

// Get questions by topic
export function getQuestionsByTopic(topicId: string, limit: number = 30): Question[] {
  const filtered = ALL_QUESTIONS.filter((q) => q.topicId === topicId);
  const shuffled = shuffleArray(filtered);
  return shuffled.slice(0, limit).map(prepareQuestionForDisplay);
}

// Generate the 100 question mock exam with the EXACT distribution required:
// - Literatura popular — 8
// - Romance — 7
// - Leyenda — 5
// - Mito — 5
// - Cuento — 5
// - Literatura culta — 8
// - Lenguaje literario — 7
// - Prosa y verso — 5
// - Figuras fónico — 12
// - Figuras morfosintáctico — 15
// - Metáfora — 10
// - Comparaciones — 8
// - Análisis de textos — 5
// Total = 100 questions!
export function generateExamQuestions(
  count: 20 | 50 | 100,
  errorQuestionIds?: string[]
): Question[] {
  if (errorQuestionIds && errorQuestionIds.length > 0) {
    const errorQuestions = ALL_QUESTIONS.filter((q) => errorQuestionIds.includes(q.id));
    if (errorQuestions.length >= count) {
      return shuffleArray(errorQuestions).slice(0, count).map(prepareQuestionForDisplay);
    }
    // If not enough error questions, take all errors and fill with random
    const remainingNeeded = count - errorQuestions.length;
    const others = ALL_QUESTIONS.filter((q) => !errorQuestionIds.includes(q.id));
    const combined = [...errorQuestions, ...shuffleArray(others).slice(0, remainingNeeded)];
    return shuffleArray(combined).map(prepareQuestionForDisplay);
  }

  if (count === 100) {
    // Specific quota generator
    const getQuota = (filterFn: (q: Question) => boolean, target: number): Question[] => {
      const pool = ALL_QUESTIONS.filter(filterFn);
      const shuffled = shuffleArray(pool);
      if (shuffled.length >= target) {
        return shuffled.slice(0, target);
      }
      return shuffled;
    };

    const qPopular = getQuota((q) => q.topicId === 'tema-1', 8);
    const qRomance = getQuota((q) => q.topicId === 'tema-2', 7);
    const qLeyenda = getQuota((q) => q.topicId === 'tema-3', 5);
    const qMito = getQuota((q) => q.topicId === 'tema-4', 5);
    const qCuento = getQuota((q) => q.topicId === 'tema-5', 5);
    const qCulta = getQuota((q) => q.topicId === 'tema-6', 8);
    const qLenguaje = getQuota((q) => q.topicId === 'tema-7', 7);
    const qProsaVerso = getQuota((q) => q.topicId === 'tema-8', 5);
    const qFonico = getQuota(
      (q) => ['tema-9', 'tema-10', 'tema-11', 'tema-12'].includes(q.topicId),
      12
    );
    const qMorfo = getQuota(
      (q) => ['tema-13', 'tema-14', 'tema-15', 'tema-16', 'tema-17', 'tema-18'].includes(q.topicId),
      15
    );
    const qMetafora = getQuota((q) => q.topicId === 'tema-19', 10);
    const qComparaciones = getQuota((q) => q.bloqueId === 5, 8);
    const qTextos = getQuota((q) => q.id.startsWith('p') || q.id.startsWith('c') || q.id.startsWith('l') || q.id.startsWith('m') || q.id.startsWith('f'), 5);

    const fullExamPool = [
      ...qPopular,
      ...qRomance,
      ...qLeyenda,
      ...qMito,
      ...qCuento,
      ...qCulta,
      ...qLenguaje,
      ...qProsaVerso,
      ...qFonico,
      ...qMorfo,
      ...qMetafora,
      ...qComparaciones,
      ...qTextos
    ];

    // Ensure we reach exactly 100 questions without duplicate IDs
    const uniqueMap = new Map<string, Question>();
    for (const q of fullExamPool) {
      uniqueMap.set(q.id, q);
    }

    if (uniqueMap.size < 100) {
      const remainingPool = shuffleArray(ALL_QUESTIONS.filter((q) => !uniqueMap.has(q.id)));
      for (const q of remainingPool) {
        if (uniqueMap.size >= 100) break;
        uniqueMap.set(q.id, q);
      }
    }

    const finalQuestions = Array.from(uniqueMap.values()).slice(0, 100);
    return shuffleArray(finalQuestions).map(prepareQuestionForDisplay);
  }

  // For 20 or 50 questions: balanced random sample across all topics
  const shuffledAll = shuffleArray(ALL_QUESTIONS);
  return shuffledAll.slice(0, count).map(prepareQuestionForDisplay);
}

export function getAllQuestions(): Question[] {
  return ALL_QUESTIONS;
}


