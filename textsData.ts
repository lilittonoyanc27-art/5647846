import { TextAnalysisItem } from './types.ts';

export const TEXTS_ANALYSIS_DATA: TextAnalysisItem[] = [
  // ==========================================
  // POEMAS (10 POEMAS)
  // ==========================================
  {
    id: 'poema-1',
    category: 'poema',
    title: 'Romance del conde Olinos',
    author: 'Romancero tradicional anónimo',
    sentences: [
      {
        es: 'Madrugaba el conde Olinos, mañanita de San Juan, a dar agua a su caballo a las orillas del mar.',
        hy: 'Լուսաբացին կոմս Օլինոսը՝ Սուրբ Հովհաննեսի առավոտյան, գնաց իր ձիուն ջուր տալու ծովի ափերին:'
      },
      {
        es: 'Mientras el caballo bebe, canta un hermoso cantar: las aves que van volando se paraban a escuchar.',
        hy: 'Մինչ ձին ջուր էր խմում, նա երգում էր մի գեղեցիկ երգ. թռչող թռչունները կանգ էին առնում լսելու:'
      },
      {
        es: 'Caminante que camina olvida su caminar, navegante que navega la nave vuelve hacia allá.',
        hy: 'Ճամփորդող ճանապարհորդը մոռանում է իր ճամփան, նավարկող նավաստին իր նավը շրջում է դեպի այնտեղ:'
      }
    ],
    contextNoteEs: 'Uno de los romances líricos más hermosos del Romancero Viejo de transmisión oral popular.',
    contextNoteHy: 'Հին ռոմանսերոյի բանավոր ժողովրդական փոխանցման ամենագեղեցիկ քնարական ռոմանսներից մեկը:',
    questions: [
      {
        id: 'p1-q1',
        topicId: 'tema-2',
        bloqueId: 1,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué tipo de composición poética es el texto?',
        questionHy: 'Ի՞նչ տեսակի բանաստեղծական կառուցվածք է այս տեքստը:',
        options: [
          { id: 'opt-a', text: 'Un romance tradicional', textHy: 'Ավանդական ռոմանս' },
          { id: 'opt-b', text: 'Una novela en prosa', textHy: 'Արձակ վեպ' },
          { id: 'opt-c', text: 'Un mito sagrado griego', textHy: 'Հունական սրբազան առասպել' },
          { id: 'opt-d', text: 'Una fábula con animales que hablan', textHy: 'Առակ խոսող կենդանիներով' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Tiene versos octosílabos con rima asonante en versos pares («mar», «cantar», «escuchar», «caminar», «allá»).',
        explanationHy: 'Ունի ութավանկ տողեր զույգ տողերի ասոնանս հանգով:'
      },
      {
        id: 'p1-q2',
        topicId: 'tema-2',
        bloqueId: 1,
        difficulty: 'medio',
        questionType: 'identify',
        question: '¿Cuántas sílabas métricas tienen los versos de este poema?',
        questionHy: 'Քանի՞ տաղաչափական վանկ ունեն այս բանաստեղծության տողերը:',
        options: [
          { id: 'opt-a', text: '8 sílabas (octosílabos)', textHy: '8 վանկ (ութավանկ)' },
          { id: 'opt-b', text: '11 sílabas (endecasílabos)', textHy: '11 վանկ' },
          { id: 'opt-c', text: '4 sílabas (tetrasílabos)', textHy: '4 վանկ' },
          { id: 'opt-d', text: '14 sílabas (alejandrinos)', textHy: '14 վանկ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Los romances castellanos se componen invariablemente en versos octosílabos de arte menor.',
        explanationHy: 'Կաստիլական ռոմանսները կազմվում են անփոփոխ կերպով ութավանկ տողերով:'
      },
      {
        id: 'p1-q3',
        topicId: 'tema-1',
        bloqueId: 1,
        difficulty: 'medio',
        questionType: 'choice',
        question: '¿A qué bloque literario pertenece esta obra?',
        questionHy: 'Ո՞ր գրական բաժնին է պատկանում այս գործը:',
        options: [
          { id: 'opt-a', text: 'Literatura popular tradicional anónima', textHy: 'Ավանդական անանուն ժողովրդական գրականություն' },
          { id: 'opt-b', text: 'Literatura culta con autor conocido registrado', textHy: 'Հեղինակային գրականություն հայտնի հեղինակով' },
          { id: 'opt-c', text: 'Tratado científico del Renacimiento', textHy: 'Վերածննդի գիտական տրակտատ' },
          { id: 'opt-d', text: 'Mito del Olimpo', textHy: 'Օլիմպոսի առասպել' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El Romance del conde Olinos es anónimo y se transmitió oralmente por el pueblo.',
        explanationHy: 'Կոմս Օլինոսի ռոմանսն անանուն է և ժողովրդի կողմից փոխանցվել է բանավոր:'
      },
      {
        id: 'p1-q4',
        topicId: 'tema-11',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'identify',
        question: 'En «Caminante que camina... navegante que navega», ¿qué figura literaria de derivación se percibe?',
        questionHy: 'Այս տողերում ո՞ր գեղարվեստական պատկերն է նկատվում:',
        options: [
          { id: 'opt-a', text: 'Paronomasia / Políptoton de palabras de la misma raíz', textHy: 'Հարանունություն / նույն արմատի բառերի խաղ' },
          { id: 'opt-b', text: 'Onomatopeya de lluvia', textHy: 'Անձրևի բնաձայնություն' },
          { id: 'opt-c', text: 'Asíndeton puro', textHy: 'Մաքուր անշաղկապություն' },
          { id: 'opt-d', text: 'Hipérbaton latino', textHy: 'Լատինական հիպերբատոն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Empareja términos de sonido y raíz emparentada (caminante/camina, navegante/navega).',
        explanationHy: 'Միավորում է ազգակից հնչողությամբ և արմատով բառեր:'
      },
      {
        id: 'p1-q5',
        topicId: 'tema-2',
        bloqueId: 1,
        difficulty: 'medio',
        questionType: 'choice',
        question: '¿Qué tipo de rima presentan los versos pares «mar», «cantar», «escuchar»?',
        questionHy: 'Ի՞նչ տեսակի հանգ ունեն զույգ տողերը («mar», «cantar», «escuchar»):',
        options: [
          { id: 'opt-a', text: 'Rima asonante en «a» con palabras agudas (+1 sílaba)', textHy: 'Ասոնանս հանգ «a»-ով սուր բառերում (+1 վանկ)' },
          { id: 'opt-b', text: 'Rima consonante en «-esa»', textHy: 'Կոնսոնանս հանգ «-esa»-ով' },
          { id: 'opt-c', text: 'No riman en absoluto', textHy: 'Ընդհանրապես չեն հանգավորվում' },
          { id: 'opt-d', text: 'Son versos libres sin medida', textHy: 'Ազատ տողեր են առանց չափի' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Al ser palabras agudas terminadas en vocal tónica «a», riman en asonante cumpliendo la norma del romance.',
        explanationHy: 'Լինելով շեշտված «a»-ով ավարտվող սուր բառեր՝ հանգավորվում են ասոնանսով ռոմանսի կանոնով:'
      }
    ]
  },

  // Poema 2
  {
    id: 'poema-2',
    category: 'poema',
    title: 'Rima LIII — Volverán las oscuras golondrinas',
    author: 'Gustavo Adolfo Bécquer',
    sentences: [
      {
        es: 'Volverán las oscuras golondrinas en tu balcón sus nidos a colgar, y otra vez con el ala a sus cristales jugando llamarán.',
        hy: 'Կվերադառնան մութ ծիծեռնակները քո պատշգամբում իրենց բները կախելու, և նորից թևով քո ապակիներին խաղալով կթակեն:'
      },
      {
        es: 'Pero aquellas que el vuelo refrenaban tu hermosura y mi dicha a contemplar, aquellas que aprendieron nuestros nombres... ¡esas no volverán!',
        hy: 'Բայց նրանք, որոնք թռիչքը դանդաղեցնում էին քո գեղեցկությունն ու իմ երջանկությունը դիտելու համար, նրանք, որոնք սովորեցին մեր անունները... նրա՛նք չեն վերադառնա:'
      }
    ],
    contextNoteEs: 'Poema lírico romántico de Gustavo Adolfo Bécquer sobre el paso irrepetible del amor.',
    contextNoteHy: 'Գուստավո Ադոլֆո Բեկերի քնարական ռոմանտիկ բանաստեղծությունը սիրո անկրկնելի ընթացքի մասին:',
    questions: [
      {
        id: 'p2-q1',
        topicId: 'tema-13',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué figura literaria célebre aparece en «Volverán las oscuras golondrinas en tu balcón sus nidos a colgar»?',
        questionHy: 'Ո՞ր հայտնի գեղարվեստական պատկերն է հանդիպում այս տողում:',
        options: [
          { id: 'opt-a', text: 'Hipérbaton (altera el orden natural de la frase)', textHy: 'Հիպերբատոն (խախտում է նախադասության բնական կարգը)' },
          { id: 'opt-b', text: 'Onomatopeya de pájaros', textHy: 'Թռչունների բնաձայնություն' },
          { id: 'opt-c', text: 'Polisíndeton con «y»', textHy: 'Բազմաշաղկապություն «y»-ով' },
          { id: 'opt-d', text: 'Pleonasmo vulgar', textHy: 'Խոսակցական պլեոնազմ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El orden lógico es «Las oscuras golondrinas volverán a colgar sus nidos en tu balcón». Al anteponer el verbo y descolocar la frase hay hipérbaton.',
        explanationHy: 'Տրամաբանական կարգն է՝ ենթական, բայը և լրացումները: Բայը առաջ բերելով՝ ստացվում է հիպերբատոն:'
      },
      {
        id: 'p2-q2',
        topicId: 'tema-14',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'identify',
        question: 'En «aquellas que el vuelo refrenaban... aquellas que aprendieron nuestros nombres», ¿qué recurso de repetición se emplea?',
        questionHy: 'Այս հատվածում կրկնության ո՞ր հնարքն է կիրառվում:',
        options: [
          { id: 'opt-a', text: 'Anáfora (repite «aquellas que» al inicio de verso)', textHy: 'Անաֆորա (կրկնում է «aquellas que» տողասկզբում)' },
          { id: 'opt-b', text: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' },
          { id: 'opt-c', text: 'Asíndeton', textHy: 'Անշաղկապություն' },
          { id: 'opt-d', text: 'Paronomasia', textHy: 'Հարանունություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Ambos versos comienzan anafóricamente con «aquellas que».',
        explanationHy: 'Երկու տողերն էլ անաֆորիկ կերպով սկսվում են «aquellas que»-ով:'
      },
      {
        id: 'p2-q3',
        topicId: 'tema-6',
        bloqueId: 2,
        difficulty: 'facil',
        questionType: 'choice',
        question: 'Este poema de Gustavo Adolfo Bécquer es un ejemplo indiscutible de:',
        questionHy: 'Բեկերի այս բանաստեղծությունը հանդիսանում է անվիճելի օրինակ՝',
        options: [
          { id: 'opt-a', text: 'Literatura culta con autor conocido y transmisión escrita', textHy: 'Հեղինակային գրականության՝ հայտնի հեղինակով և գրավոր փոխանցմամբ' },
          { id: 'opt-b', text: 'Literatura popular anónima', textHy: 'Անանուն ժողովրդական գրականության' },
          { id: 'opt-c', text: 'Mito prehistórico', textHy: 'Նախապատմական առասպելի' },
          { id: 'opt-d', text: 'Cuento popular infantil', textHy: 'Մանկական ժողովրդական հեքիաթի' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Bécquer es uno de los poetas cultos más célebres del siglo XIX español.',
        explanationHy: 'Բեկերը 19-րդ դարի Իսպանիայի ամենահայտնի հեղինակային բանաստեղծներից է:'
      },
      {
        id: 'p2-q4',
        topicId: 'tema-8',
        bloqueId: 3,
        difficulty: 'facil',
        questionType: 'choice',
        question: '¿En qué forma de elocución está escrito el texto de Bécquer?',
        questionHy: 'Խոսքի ո՞ր ձևով է գրված Բեկերի տեքստը:',
        options: [
          { id: 'opt-a', text: 'En verso (líneas cortas con ritmo y rima)', textHy: 'Չափածո (կարճ տողեր ռիթմով և հանգով)' },
          { id: 'opt-b', text: 'En prosa continua ocupando el renglón', textHy: 'Շարունակական արձակով' },
          { id: 'opt-c', text: 'En diálogo teatral cómico', textHy: 'Կատակերգական թատերական երկխոսությամբ' },
          { id: 'opt-d', text: 'En prosa científica', textHy: 'Գիտական արձակով' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Es un poema lírico estructurado en versos endecasílabos y heptasílabos.',
        explanationHy: 'Քնարական բանաստեղծություն է՝ կառուցված չափածո տողերով:'
      },
      {
        id: 'p2-q5',
        topicId: 'tema-7',
        bloqueId: 3,
        difficulty: 'medio',
        questionType: 'choice',
        question: '¿Cuál es la función fundamental del lenguaje en este poema?',
        questionHy: 'Ո՞րն է լեզվի հիմնական գործառույթն այս բանաստեղծության մեջ:',
        options: [
          { id: 'opt-a', text: 'Función poética o estética (crear belleza y conmover)', textHy: 'Բանաստեղծական կամ գեղագիտական գործառույթ (գեղեցկություն ստեղծել և հուզել)' },
          { id: 'opt-b', text: 'Función informativa sobre la biología de las aves', textHy: 'Թռչունների կենսաբանության մասին տեղեկատվական գործառույթ' },
          { id: 'opt-c', text: 'Función apelativa para vender balcones', textHy: 'Պատշգամբներ վաճառելու կոչի գործառույթ' },
          { id: 'opt-d', text: 'Función metalingüística de gramática', textHy: 'Քերականության լեզվաբանական գործառույթ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El lenguaje literario busca la emoción y el goce estético del lector.',
        explanationHy: 'Գրական լեզուն ձգտում է ընթերցողի հույզերին և գեղագիտական վայելքին:'
      }
    ]
  },

  // ==========================================
  // CUENTOS (5 CUENTOS)
  // ==========================================
  {
    id: 'cuento-1',
    category: 'cuento',
    title: 'El pescador y el pez de oro',
    author: 'Cuento popular tradicional',
    sentences: [
      {
        es: 'Había una vez un anciano pescador que vivía con su esposa en una humilde choza junto a la orilla del mar.',
        hy: 'Ժուկով-ժամանակով մի ծեր ձկնորս կար, ով իր կնոջ հետ ապրում էր ծովափի մի խոնարհ խրճիթում:'
      },
      {
        es: 'Un día tempestuoso, atrapó en sus redes a un diminuto pez de oro que le suplicó con voz humana: «¡Libérame, buen anciano, y te concederé cuanto me pidas!».',
        hy: 'Մի փոթորկոտ օր նա իր ցանցերում բռնեց մի փոքրիկ ոսկե ձկնիկ, որը մարդկային ձայնով աղաչեց. «Ազատի՛ր ինձ, բարի ծերուկ, և ես կտամ քեզ այն ամենը, ինչ խնդրես»:'
      },
      {
        es: 'El pescador compadecido lo arrojó de vuelta a las olas sin pedir nada a cambio.',
        hy: 'Խղճացած ձկնորսը նրան հետ նետեց ալիքների մեջ՝ փոխարենը ոչինչ չխնդրելով:'
      },
      {
        es: 'Pero su ambiciosa mujer, enterada del suceso, comenzó a exigir palacios, joyas y coronas imperiales, hasta pedir convertirse en la reina del mar.',
        hy: 'Բայց նրա ագահ կինը, իմանալով եղելությունը, սկսեց պահանջել պալատներ, զարդեր և կայսերական թագեր՝ մինչև իսկ պահանջելով դառնալ ծովի թագուհին:'
      },
      {
        es: 'Al final, el pez dorado se sumergió para siempre en el océano embravecido y la codiciosa mujer se encontró de nuevo sentada frente a su vieja choza rota.',
        hy: 'Ի վերջո, ոսկե ձկնիկը հավերժ սուզվեց կատաղած օվկիանոսի մեջ, իսկ ագահ կինը կրկին հայտնվեց իր հին ջարդված խրճիթի դիմաց նստած:'
      }
    ],
    contextNoteEs: 'Cuento popular universal sobre los peligros de la ambición desmedida.',
    contextNoteHy: 'Համամարդկային ժողովրդական հեքիաթ անսանձ ագահության վտանգների մասին:',
    questions: [
      {
        id: 'c1-q1',
        topicId: 'tema-5',
        bloqueId: 1,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué tipo de texto narrativo es este fragmento?',
        questionHy: 'Ի՞նչ տեսակի պատմողական տեքստ է այս հատվածը:',
        options: [
          { id: 'opt-a', text: 'Un cuento en prosa con estructura de inicio, nudo y desenlace', textHy: 'Արձակ հեքիաթ՝ սկզբի, հանգույցի և հանգուցալուծման կառուցվածքով' },
          { id: 'opt-b', text: 'Un romance octosílabo con rima asonante', textHy: 'Ութավանկ ռոմանս ասոնանս հանգով' },
          { id: 'opt-c', text: 'Un mito sagrado de la antigua Grecia', textHy: 'Հին Հունաստանի սրբազան առասպել' },
          { id: 'opt-d', text: 'Una biografía histórica documentada', textHy: 'Փաստագրված պատմական կենսագրություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Es un cuento popular tradicional en prosa, con fórmula inicial típica («Había una vez») y moraleja final.',
        explanationHy: 'Արձակ ավանդական ժողովրդական հեքիաթ է՝ բնորոշ սկզբով և ավարտական բարոյախրատով:'
      },
      {
        id: 'c1-q2',
        topicId: 'tema-5',
        bloqueId: 1,
        difficulty: 'medio',
        questionType: 'identify',
        question: '¿En qué parte de la estructura se sitúa la exigencia de la mujer de convertirse en reina del mar?',
        questionHy: 'Կառուցվածքի ո՞ր մասում է գտնվում կնոջ պահանջը՝ դառնալու ծովի թագուհի:',
        options: [
          { id: 'opt-a', text: 'En el nudo (conflicto y desarrollo de la tensión)', textHy: 'Հանգույցում (բախում և լարվածության զարգացում)' },
          { id: 'opt-b', text: 'En el planteamiento inicial de calma', textHy: 'Նախնական հանգիստ նախադրության մեջ' },
          { id: 'opt-c', text: 'En el desenlace pacífico resuelto', textHy: 'Լուծված խաղաղ հանգուցալուծման մեջ' },
          { id: 'opt-d', text: 'En el título', textHy: 'Վերնագրում' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El conflicto se desata y agrava durante el nudo de la narración.',
        explanationHy: 'Բախումը բռնկվում և սրվում է պատմության հանգույցի ընթացքում:'
      },
      {
        id: 'c1-q3',
        topicId: 'tema-8',
        bloqueId: 3,
        difficulty: 'facil',
        questionType: 'choice',
        question: '¿Por qué sabemos que este texto está escrito en prosa y no en verso?',
        questionHy: 'Ինչո՞ւ գիտենք, որ այս տեքստը գրված է արձակով և ոչ թե չափածո:',
        options: [
          { id: 'opt-a', text: 'Porque ocupa todo el renglón continuo sin métrica de sílabas ni rima', textHy: 'Որովհետև զբաղեցնում է ամբողջ տողը՝ առանց վանկերի չափի կամ հանգի' },
          { id: 'opt-b', text: 'Porque tiene versos octosílabos pares', textHy: 'Որովհետև ունի զույգ ութավանկ տողեր' },
          { id: 'opt-c', text: 'Porque es una canción cantada', textHy: 'Որովհետև երգվող երգ է' },
          { id: 'opt-d', text: 'Porque tiene estribillo', textHy: 'Որովհետև ունի կրկներգ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La prosa se redacta a renglón tendido en párrafos narrativos continuos.',
        explanationHy: 'Արձակը շարադրվում է ամբողջ տողով շարունակական պատմողական պարբերություններով:'
      },
      {
        id: 'c1-q4',
        topicId: 'tema-1',
        bloqueId: 1,
        difficulty: 'medio',
        questionType: 'choice',
        question: '¿Qué rasgo propio de la literatura popular aparece al comienzo del relato?',
        questionHy: 'Ժողովրդական գրականությանը բնորոշ ո՞ր գիծն է հանդիպում պատմության սկզբում:',
        options: [
          { id: 'opt-a', text: 'La fórmula mágica atemporal «Había una vez»', textHy: 'Անժամանակ կախարդական բանաձևը՝ «Había una vez» (Ժուկով-ժամանակով)' },
          { id: 'opt-b', text: 'Un hipérbaton de Quevedo', textHy: 'Կևեդոյի հիպերբատոնը' },
          { id: 'opt-c', text: 'Una fecha exacta con año y día de calendario', textHy: 'Ճշգրիտ ամսաթիվ օրացուցային տարով ու օրով' },
          { id: 'opt-d', text: 'La firma del autor', textHy: 'Հեղինակի ստորագրությունը' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Había una vez» es la fórmula de inicio canónica de la narrativa oral popular.',
        explanationHy: '«Había una vez»-ը բանավոր ժողովրդական պատմության կանոնական սկզբնական բանաձևն է:'
      },
      {
        id: 'c1-q5',
        topicId: 'tema-5',
        bloqueId: 1,
        difficulty: 'dificil',
        questionType: 'compare',
        question: '¿Qué diferencia a este cuento de una leyenda toledana?',
        questionHy: 'Ինչո՞վ է այս հեքիաթը տարբերվում Տոլեդոյի լեգենդից:',
        options: [
          { id: 'opt-a', text: 'El cuento no tiene localización real verificable en el mapa ni base histórica.', textHy: 'Հեքիաթը չունի քարտեզի վրա ստուգելի իրական վայր կամ պատմական հիմք:' },
          { id: 'opt-b', text: 'La leyenda nunca tiene personajes humanos.', textHy: 'Լեգենդը երբեք չունի մարդկային կերպարներ:' },
          { id: 'opt-c', text: 'El cuento siempre está escrito en verso octosílabo.', textHy: 'Հեքիաթը միշտ գրված է ութավանկ տողերով:' },
          { id: 'opt-d', text: 'Son exactamente idénticos en geografía e historia.', textHy: 'Լիովին նույնական են աշխարհագրությամբ և պատմությամբ:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La leyenda se ubica en lugares geográficos auténticos; el cuento sucede en un espacio indeterminado.',
        explanationHy: 'Լեգենդը տեղակայվում է իրական աշխարհագրական վայրերում, իսկ հեքիաթը տեղի է ունենում անորոշ տարածության մեջ:'
      }
    ]
  },

  // ==========================================
  // LEYENDAS (5 LEYENDAS)
  // ==========================================
  {
    id: 'leyenda-1',
    category: 'leyenda',
    title: 'La peña de los enamorados (Antequera)',
    author: 'Leyenda popular andaluza',
    sentences: [
      {
        es: 'En la hermosa ciudad andaluza de Antequera se alza un imponente peñón calizo con el perfil de un rostro humano dormido.',
        hy: 'Անդալուսիայի գեղեցիկ Անտեկերա քաղաքում բարձրանում է մի վիթխարի կրաքարե ժայռ՝ քնած մարդկային դեմքի ուրվագծով:'
      },
      {
        es: 'Cuenta la leyenda que durante las guerras medievales entre cristianos y musulmanes, un joven caballero cristiano llamado Tello fue capturado y cayó rendidamente enamorado de la princesa mora Tazgona.',
        hy: 'Լեգենդը պատմում է, որ քրիստոնյաների և մուսուլմանների միջև միջնադարյան պատերազմների ժամանակ մի երիտասարդ քրիստոնյա ասպետ՝ Տելյո անունով, գերի ընկավ և սիրահարվեց մավր արքայադուստր Տազգոնային:'
      },
      {
        es: 'Al descubrirse su romance prohibido, los enamorados huyeron perseguidos de cerca por los soldados del rey moro.',
        hy: 'Երբ նրանց արգելված սերը բացահայտվեց, սիրահարները փախան՝ մավր թագավորի զինվորների կողմից հետապնդվելով:'
      },
      {
        es: 'Acorralados en la cima del precipicio más escarpado, sellaron su amor con un último y eterno abrazo.',
        hy: 'Շրջապատված լինելով ամենազառիթափ անդունդի գագաթին՝ նրանք կնքեցին իրենց սերը վերջին և հավերժական գրկախառնությամբ:'
      },
      {
        es: 'Antes de ser separados por la fuerza, se arrojaron juntos al vacío, dando nombre eterno a la Peña de los Enamorados.',
        hy: 'Նախքան ուժով բաժանվելը, նրանք միասին նետվեցին անդունդը՝ հավերժական անուն տալով «Սիրահարների ժայռին»:'
      }
    ],
    contextNoteEs: 'Famosa leyenda andaluza ambientada en la Reconquista con base geográfica visible.',
    contextNoteHy: 'Հայտնի անդալուսական լեգենդ Ռեկոնկիստայի ժամանակներից՝ տեսանելի աշխարհագրական հիմքով:',
    questions: [
      {
        id: 'l1-q1',
        topicId: 'tema-3',
        bloqueId: 1,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Por qué este relato se clasifica inequívocamente como LEYENDA?',
        questionHy: 'Ինչո՞ւ է այս պատմությունը միանշանակ դասակարգվում որպես ԼԵԳԵՆԴ:',
        options: [
          { id: 'opt-a', text: 'Porque combina un lugar geográfico real (Antequera) con hechos heroicos tradicionales humanos', textHy: 'Որովհետև համատեղում է իրական աշխարհագրական վայրը (Անտեկերա) մարդկային ավանդական հերոսական փաստերի հետ' },
          { id: 'opt-b', text: 'Porque está protagonizada por dioses inmortales del Olimpo', textHy: 'Որովհետև գլխավոր հերոսներն Օլիմպոսի անմահ աստվածներն են' },
          { id: 'opt-c', text: 'Porque está escrita en versos octosílabos pares', textHy: 'Որովհետև գրված է զույգ ութավանկ տողերով' },
          { id: 'opt-d', text: 'Porque no tiene personajes', textHy: 'Որովհետև կերպարներ չունի' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La leyenda transcurre en un lugar real existente en el mapa (Antequera) y está protagonizada por seres humanos.',
        explanationHy: 'Լեգենդը տեղի է ունենում քարտեզի վրա գոյություն ունեցող իրական վայրում և նրա հերոսները մարդիկ են:'
      },
      {
        id: 'l1-q2',
        topicId: 'tema-3',
        bloqueId: 1,
        difficulty: 'medio',
        questionType: 'choice',
        question: '¿En qué época histórica verosímil se ambienta esta leyenda?',
        questionHy: 'Ո՞ր պատմական դարաշրջանում է տեղի ունենում այս լեգենդը:',
        options: [
          { id: 'opt-a', text: 'La Edad Media española durante las luchas de frontera', textHy: 'Իսպանական միջնադարում՝ սահմանային մարտերի ժամանակ' },
          { id: 'opt-b', text: 'El futuro del siglo XXV', textHy: '25-րդ դարի ապագայում' },
          { id: 'opt-c', text: 'El origen del universo anterior a los hombres', textHy: 'Մարդկանցից առաջ տիեզերքի սկզբում' },
          { id: 'opt-d', text: 'La Prehistoria con cavernícolas', textHy: 'Քարանձավային նախապատմությունում' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Las leyendas siempre se enmarcan en un tiempo histórico concreto y cercano a la memoria colectiva.',
        explanationHy: 'Լեգենդները միշտ շրջանակվում են կոնկրետ պատմական ժամանակում:'
      },
      {
        id: 'l1-q3',
        topicId: 'tema-4',
        bloqueId: 1,
        difficulty: 'dificil',
        questionType: 'compare',
        question: '¿Cuál es la diferencia principal entre esta leyenda y el mito de Apolo y Dafne?',
        questionHy: 'Ո՞րն է գլխավոր տարբերությունը այս լեգենդի և Ապոլոնի ու Դաֆնեի առասպելի միջև:',
        options: [
          { id: 'opt-a', text: 'La leyenda la protagonizan personas humanas en un sitio real; el mito lo protagonizan dioses sobrenaturales.', textHy: 'Լեգենդի հերոսները մարդիկ են իրական վայրում, իսկ առասպելինը՝ գերբնական աստվածները:' },
          { id: 'opt-b', text: 'El mito siempre rima en asonante.', textHy: 'Առասպելը միշտ հանգավորվում է ասոնանսով:' },
          { id: 'opt-c', text: 'La leyenda solo se canta con guitarra.', textHy: 'Լեգենդը միայն կիթառով է երգվում:' },
          { id: 'opt-d', text: 'No existe ninguna diferencia.', textHy: 'Ոչ մի տարբերություն գոյություն չունի:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Los personajes divinos y el sentido cosmológico definen al mito frente a los humanos de la leyenda.',
        explanationHy: 'Աստվածային կերպարներն ու տիեզերական իմաստը սահմանում են առասպելը լեգենդի մարդկանց համեմատ:'
      },
      {
        id: 'l1-q4',
        topicId: 'tema-8',
        bloqueId: 3,
        difficulty: 'facil',
        questionType: 'choice',
        question: 'El texto de la leyenda está redactado en:',
        questionHy: 'Լեգենդի տեքստը շարադրված է՝',
        options: [
          { id: 'opt-a', text: 'Prosa narrativa', textHy: 'Պատմողական արձակով' },
          { id: 'opt-b', text: 'Verso octosílabo de romance', textHy: 'Ռոմանսի ութավանկ չափածոյով' },
          { id: 'opt-c', text: 'Estrofas de cuatro versos', textHy: 'Չորս տողանի տներով' },
          { id: 'opt-d', text: 'Soneto italiano', textHy: 'Իտալական սոնետով' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Es prosa narrativa continua sin esquema métrico.',
        explanationHy: 'Շարունակական պատմողական արձակ է առանց տաղաչափական սխեմայի:'
      },
      {
        id: 'l1-q5',
        topicId: 'tema-1',
        bloqueId: 1,
        difficulty: 'medio',
        questionType: 'choice',
        question: '¿Qué función cumple la leyenda en la comunidad local de Antequera?',
        questionHy: 'Ի՞նչ գործառույթ է կատարում լեգենդը Անտեկերայի տեղական համայնքում:',
        options: [
          { id: 'opt-a', text: 'Explicar de forma poética y memorable el origen del nombre de un monumento geográfico real.', textHy: 'Բանաստեղծական և հիշարժան ձևով բացատրել իրական աշխարհագրական կոթողի անվան ծագումը:' },
          { id: 'opt-b', text: 'Enseñar matemáticas avanzadas.', textHy: 'Բարձրագույն մաթեմատիկա սովորեցնել:' },
          { id: 'opt-c', text: 'Dar leyes tributarias obligatorias.', textHy: 'Հարկային պարտադիր օրենքներ սահմանել:' },
          { id: 'opt-d', text: 'Describir la composición química del peñón.', textHy: 'Նկարագրել ժայռի քիմիական բաղադրությունը:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Las leyendas populares dotan de alma, historia y emoción a los elementos del paisaje.',
        explanationHy: 'Ժողովրդական լեգենդները հոգի, պատմություն և հույզ են հաղորդում բնապատկերի տարրերին:'
      }
    ]
  },

  // ==========================================
  // MITOS (5 MITOS)
  // ==========================================
  {
    id: 'mito-1',
    category: 'mito',
    title: 'El mito de Dédalo e Ícaro',
    author: 'Mitología clásica griega',
    sentences: [
      {
        es: 'Encerrados en el Laberinto de Creta por orden del rey Minos, el sabio arquitecto Dédalo fabricó dos pares de alas con plumas de aves y cera de abejas para escapar volando con su joven hijo Ícaro.',
        hy: 'Մինոս արքայի հրամանով Կրետեի լաբիրինթոսում փակված լինելով՝ իմաստուն ճարտարապետ Դեդալոսը թռչունների փետուրներից և մեղրամոմից պատրաստեց երկու զույգ թևեր՝ իր երիտասարդ որդի Իկարոսի հետ թռչելով փախչելու համար:'
      },
      {
        es: 'Antes de remontar el vuelo, el padre aconsejó con insistencia: «Hijo mío, mantén un rumbo medio; si vuelas demasiado bajo la humedad del mar mojará tus alas, y si vuelas demasiado alto el sol abrasará la cera».',
        hy: 'Նախքան թռիչքի բարձրանալը հայրը համառորեն խրատեց. «Որդի՛ս, միջին ուղղություն պահպանիր. եթե չափազանց ցածր թռչես, ծովի խոնավությունը կթրջի թևերդ, իսկ եթե չափազանց բարձր թռչես, արևը կհալեցնի մոմը»:'
      },
      {
        es: 'Embriagado por la fascinante sensación de libertad celeste, Ícaro desoyó las advertencias y ascendió temerariamente hacia el carro ardiente del dios Helios.',
        hy: 'Երկնային ազատության հմայիչ զգացումից արբեցած՝ Իկարոսն արհամարհեց նախազգուշացումները և անխոհեմորեն բարձրացավ դեպի Հելիոս աստծո բոցավառ կառքը:'
      },
      {
        es: 'Los rayos del sol derritieron la cera y el muchacho se precipitó sin remedio en las profundidades de las aguas.',
        hy: 'Արևի ճառագայթները հալեցրին մոմը, և տղան անխուսափելիորեն գահավիժեց ջրերի խորքերը:'
      }
    ],
    contextNoteEs: 'Célebre mito griego sobre la desmesura (hibris) y el castigo por desafiar los límites.',
    contextNoteHy: 'Հայտնի հունական առասպել անչափավորության և սահմանները մարտահրավեր նետելու պատժի մասին:',
    questions: [
      {
        id: 'm1-q1',
        topicId: 'tema-4',
        bloqueId: 1,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Por qué este relato se define como un MITO?',
        questionHy: 'Ինչո՞ւ է այս պատմությունը սահմանվում որպես ԱՌԱՍՊԵԼ:',
        options: [
          { id: 'opt-a', text: 'Porque pertenece a las creencias sagradas de la antigüedad y transmite una verdad universal simbólica', textHy: 'Որովհետև պատկանում է հնադարի սրբազան հավատալիքներին և փոխանցում է խորհրդանշական համամարդկային ճշմարտություն' },
          { id: 'opt-b', text: 'Porque es una noticia periodística de ayer', textHy: 'Որովհետև երեկվա լրագրողական լուր է' },
          { id: 'opt-c', text: 'Porque está rimado en romance octosílabo', textHy: 'Որովհետև հանգավորված է ութավանկ ռոմանսով' },
          { id: 'opt-d', text: 'Porque no tiene personajes de ninguna clase', textHy: 'Որովհետև ոչ մի տեսակի կերպարներ չունի' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Los mitos son relatos sagrados de civilizaciones antiguas que explican la condición humana y el cosmos.',
        explanationHy: 'Առասպելները հին քաղաքակրթությունների սրբազան պատմություններն են, որոնք բացատրում են մարդկային վիճակն ու տիեզերքը:'
      },
      {
        id: 'm1-q2',
        topicId: 'tema-4',
        bloqueId: 1,
        difficulty: 'medio',
        questionType: 'choice',
        question: '¿Qué dios aparece mencionado indirectamente como fuerza cósmica?',
        questionHy: 'Ո՞ր աստվածն է անուղղակիորեն հիշատակվում որպես տիեզերական ուժ:',
        options: [
          { id: 'opt-a', text: 'Helios (el dios Sol y su carro ardiente)', textHy: 'Հելիոս (Արևի աստվածը և նրա բոցավառ կառքը)' },
          { id: 'opt-b', text: 'Poseidón en el fondo del mar', textHy: 'Պոսեյդոնը ծովի հատակում' },
          { id: 'opt-c', text: 'Hades en el inframundo', textHy: 'Հադեսը ստորգետնյա աշխարհում' },
          { id: 'opt-d', text: 'Ares el dios de la guerra', textHy: 'Արեսը՝ պատերազմի աստվածը' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Helios simboliza el poder abrasador divino del sol.',
        explanationHy: 'Հելիոսը խորհրդանշում է արևի կիզիչ աստվածային զորությունը:'
      },
      {
        id: 'm1-q3',
        topicId: 'tema-3',
        bloqueId: 1,
        difficulty: 'dificil',
        questionType: 'compare',
        question: '¿En qué se diferencia fundamentalmente un mito de una leyenda?',
        questionHy: 'Ինչո՞վ է առասպելը հիմնարար կերպով տարբերվում լեգենդից:',
        options: [
          { id: 'opt-a', text: 'El mito explica el universo y trata sobre dioses; la leyenda tiene base histórica en sitios reales con humanos.', textHy: 'Առասպելը բացատրում է տիեզերքը և աստվածների մասին է, իսկ լեգենդն ունի պատմական հիմք իրական վայրերում մարդկանցով:' },
          { id: 'opt-b', text: 'El mito siempre se escribe en verso; la leyenda en inglés.', textHy: 'Առասպելը միշտ գրվում է չափածո, իսկ լեգենդը՝ անգլերեն:' },
          { id: 'opt-c', text: 'La leyenda es siempre inventada por Cervantes.', textHy: 'Լեգենդը միշտ հորինված է Սերվանտեսի կողմից:' },
          { id: 'opt-d', text: 'No existe ninguna diferencia.', textHy: 'Ոչ մի տարբերություն գոյություն չունի:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El carácter cosmológico y sagrado distingue al mito de la leyenda histórica.',
        explanationHy: 'Տիեզերաբանական և սրբազան բնույթն առասպելն առանձնացնում է պատմական լեգենդից:'
      },
      {
        id: 'm1-q4',
        topicId: 'tema-19',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'identify',
        question: 'La expresión «el carro ardiente del sol» es una:',
        questionHy: '«El carro ardiente del sol» արտահայտությունը հանդիսանում է՝',
        options: [
          { id: 'opt-a', text: 'Metáfora mitológica del astro rey', textHy: 'Արեգակի դիցաբանական փոխաբերություն' },
          { id: 'opt-b', text: 'Onomatopeya de calor', textHy: 'Ջերմության բնաձայնություն' },
          { id: 'opt-c', text: 'Asíndeton sin comas', textHy: 'Անշաղկապություն առանց ստորակետների' },
          { id: 'opt-d', text: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Identifica poéticamente al sol con un carro llameante.',
        explanationHy: 'Բանաստեղծորեն նույնացնում է արևը բոցավառ կառքի հետ:'
      },
      {
        id: 'm1-q5',
        topicId: 'tema-8',
        bloqueId: 3,
        difficulty: 'facil',
        questionType: 'choice',
        question: 'Este relato mítico nos ha llegado redactado en:',
        questionHy: 'Այս առասպելական պատմությունը մեզ է հասել շարադրված՝',
        options: [
          { id: 'opt-a', text: 'Prosa narrativa fluida', textHy: 'Սահուն պատմողական արձակով' },
          { id: 'opt-b', text: 'Romance cantado con laúd', textHy: 'Երգվող ռոմանսով' },
          { id: 'opt-c', text: 'Estrofas de arte menor', textHy: 'Փոքր արվեստի տներով' },
          { id: 'opt-d', text: 'Poema lírico puro', textHy: 'Մաքուր քնարական բանաստեղծությամբ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Está redactado en prosa en párrafos continuos.',
        explanationHy: 'Շարադրված է արձակով շարունակական պարբերություններով:'
      }
    ]
  },

  // ==========================================
  // FRAGMENTOS PARA IDENTIFICACIÓN DE FIGURAS
  // ==========================================
  {
    id: 'figura-1',
    category: 'figura',
    title: 'Análisis de figuras — Fray Luis de León',
    author: 'Fray Luis de León (Oda a la vida retirada)',
    sentences: [
      {
        es: '¡Qué descansada vida la del que huye del mundanal ruido, y sigue la escondida senda por donde han ido los pocos sabios que en el mundo han sido!',
        hy: 'Ինչպիսի՜ հանգիստ կյանք է նրանը, ով փախչում է աշխարհիկ աղմուկից և հետևում թաքուն արահետին, որով գնացել են աշխարհում եղած այն սակավաթիվ իմաստունները:'
      },
      {
        es: 'Un no rompido sueño, un día puro, alegre, libre quiero; no quiero ver el ceño vanamente severo de quien la sangre ensalza o el dinero.',
        hy: 'Մի անխաթար քուն, մի մաքուր, ուրախ, ազատ օր եմ ցանկանում. չեմ ցանկանում տեսնել ունայնորեն խստադեմ հայացքը նրա, ում փառաբանում է ազնվական ծագումը կամ դրամը:'
      }
    ],
    contextNoteEs: 'Fragmento cumbre de la poesía culta renacentista española repleto de recursos de estilo.',
    contextNoteHy: 'Իսպանական Վերածննդի հեղինակային պոեզիայի գագաթնակետային հատված՝ հարուստ ոճական հնարքներով:',
    questions: [
      {
        id: 'f1-q1',
        topicId: 'tema-15',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'identify',
        question: 'En «un día puro, alegre, libre quiero», ¿qué figura literaria une los tres adjetivos?',
        questionHy: '«Un día puro, alegre, libre quiero» տողում ո՞ր գեղարվեստական պատկերն է միավորում երեք ածականները:',
        options: [
          { id: 'opt-a', text: 'Asíndeton (separados por comas sin «y»)', textHy: 'Անշաղկապություն (բաժանված են ստորակետներով առանց «y»-ի)' },
          { id: 'opt-b', text: 'Polisíndeton', textHy: 'Բազմաշաղկապություն' },
          { id: 'opt-c', text: 'Onomatopeya', textHy: 'Բնաձայնություն' },
          { id: 'opt-d', text: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Los adjetivos «puro, alegre, libre» van sin conjunciones, creando agilidad asindética.',
        explanationHy: 'Ածականները գրված են առանց շաղկապների՝ ստեղծելով անշաղկապ ճարպկություն:'
      },
      {
        id: 'f1-q2',
        topicId: 'tema-13',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'identify',
        question: 'En «un día puro, alegre, libre quiero», el verbo «quiero» va al final del verso. ¿Qué figura es?',
        questionHy: 'Այս տողում «quiero» բայը գնում է տողի վերջ: Ի՞նչ պատկեր է դա:',
        options: [
          { id: 'opt-a', text: 'Hipérbaton (orden habitual: «Quiero un día puro...»)', textHy: 'Հիպերբատոն (սովորական կարգ՝ «Quiero un día puro...»)' },
          { id: 'opt-b', text: 'Aliteración fónica', textHy: 'Հնչյունական բաղաձայնույթ' },
          { id: 'opt-c', text: 'Paronomasia burlesca', textHy: 'Ծաղրական հարանունություն' },
          { id: 'opt-d', text: 'Romance octosílabo', textHy: 'Ութավանկ ռոմանս' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El complemento directo se antepone al verbo «quiero», alterando el orden sintáctico neutro.',
        explanationHy: 'Ուղիղ խնդիրը դրված է «quiero» բայից առաջ՝ խախտելով չեզոք շարահյուսական կարգը:'
      },
      {
        id: 'f1-q3',
        topicId: 'tema-14',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'identify',
        question: 'En el verso «no quiero ver el ceño...», frente al anterior «libre quiero», la proximidad del verbo genera:',
        questionHy: 'Բայի մոտիկությունը ստեղծում է՝',
        options: [
          { id: 'opt-a', text: 'Juego de antítesis y repetición léxica («quiero / no quiero»)', textHy: 'Հակադրության և բառային կրկնության խաղ («quiero / no quiero»)' },
          { id: 'opt-b', text: 'Onomatopeya de enfado', textHy: 'Զայրույթի բնաձայնություն' },
          { id: 'opt-c', text: 'Poesía popular tradicional', textHy: 'Ավանդական ժողովրդական պոեզիա' },
          { id: 'opt-d', text: 'Cuento anónimo', textHy: 'Անանուն հեքիաթ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Contrapone el deseo del alma frente al rechazo de las vanidades cortesanas.',
        explanationHy: 'Հակադրում է հոգու ցանկությունը պալատական ունայնության մերժմանը:'
      },
      {
        id: 'f1-q4',
        topicId: 'tema-6',
        bloqueId: 2,
        difficulty: 'facil',
        questionType: 'choice',
        question: 'La obra de Fray Luis de León pertenece a:',
        questionHy: 'Ֆրայ Լուիս դե Լեոնի գործը պատկանում է՝',
        options: [
          { id: 'opt-a', text: 'Literatura culta del Siglo de Oro', textHy: 'Ոսկեդարի հեղինակային գրականությանը' },
          { id: 'opt-b', text: 'Cancionero popular anónimo medieval', textHy: 'Միջնադարյան ժողովրդական անանուն երգարանին' },
          { id: 'opt-c', text: 'Mito griego prehistórico', textHy: 'Նախապատմական հունական առասպելին' },
          { id: 'opt-d', text: 'Cuento de hadas infantil', textHy: 'Մանկական փերիների հեքիաթին' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Fray Luis de León es uno de los máximos exponentes de la poesía culta renacentista.',
        explanationHy: 'Ֆրայ Լուիս դե Լեոնը Վերածննդի հեղինակային պոեզիայի խոշորագույն ներկայացուցիչներից է:'
      },
      {
        id: 'f1-q5',
        topicId: 'tema-9',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'identify',
        question: 'En «sigue la escondida senda por donde han ido los pocos sabios», ¿qué sonido suave se repite?',
        questionHy: 'Այս հատվածում ո՞ր մեղմ հնչյունն է կրկնվում:',
        options: [
          { id: 'opt-a', text: 'Aliteración suave del sonido /s/', textHy: '/s/ հնչյունի մեղմ բաղաձայնույթ' },
          { id: 'opt-b', text: 'Onomatopeya de trueno', textHy: 'Որոտի բնաձայնություն' },
          { id: 'opt-c', text: 'Epanadiplosis perfecta', textHy: 'Կատարյալ էպանադիպլոզիս' },
          { id: 'opt-d', text: 'Polisíndeton disyuntivo', textHy: 'Տրոհական բազմաշաղկապություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El fonema /s/ en «sigue», «escondida», «senda», «sabios» evoca recogimiento silencioso.',
        explanationHy: '/s/ հնչյունն այս բառերում հիշեցնում է լուռ խոկում:'
      }
    ]
  }
];

export const ALL_TEXTS = TEXTS_ANALYSIS_DATA;
