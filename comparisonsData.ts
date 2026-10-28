import { ComparisonItem } from './types.ts';

export const COMPARISONS_DATA: ComparisonItem[] = [
  // 1. Aliteración VS Onomatopeya
  {
    id: 'ali-vs-ono',
    title: 'Aliteración VS Onomatopeya',
    titleHy: 'Բաղաձայնույթն ընդդեմ Բնաձայնության',
    conceptA: 'Aliteración',
    conceptB: 'Onomatopeya',
    table: [
      {
        aspect: 'Definición esencial',
        aspectHy: 'Հիմնական սահմանում',
        conceptA: 'Repetición intencionada de sonidos semejantes en palabras con significado.',
        conceptAHy: 'Իմաստ ունեցող բառերում նմանատիպ հնչյունների կանխամտածված կրկնություն:',
        conceptB: 'Palabra o expresión que imita o copia directamente un ruido real.',
        conceptBHy: 'Բառ կամ արտահայտություն, որն ուղղակիորեն նմանակում կամ կրկնօրինակում է իրական աղմուկը:'
      },
      {
        aspect: 'Tipo de vocabulario',
        aspectHy: 'Բառապաշարի տեսակ',
        conceptA: 'Palabras habituales del idioma (ruido, rueda, ronca).',
        conceptAHy: 'Լեզվի սովորական բառեր (ruido, rueda, ronca):',
        conceptB: 'Vocablos fónicos imitativos especiales (tic-tac, guau, miau, pum).',
        conceptBHy: 'Հատուկ նմանակող հնչյունական բառեր (tic-tac, guau, miau, pum):'
      },
      {
        aspect: 'Efecto estético',
        aspectHy: 'Գեղագիտական ազդեցություն',
        conceptA: 'Sugiere musicalidad y evoca acústicamente un ambiente poético.',
        conceptAHy: 'Ակնարկում է երաժշտականություն և լսողականորեն արթնացնում բանաստեղծական մթնոլորտ:',
        conceptB: 'Provoca el impacto sonoro directo del ruido en la mente.',
        conceptBHy: 'Մտքում առաջացնում է աղմուկի անմիջական հնչյունական ազդեցությունը:'
      }
    ],
    examples: [
      {
        text: '«El ruido con que rueda la ronca tempestad».',
        textHy: '«Աղմուկը, որով գլորվում է խռպոտ փոթորիկը»:',
        belongsTo: 'Aliteración',
        reasonEs: 'Repite la consonante «r» en palabras normales para evocar el trueno.',
        reasonHy: 'Կրկնում է «r» բաղաձայնը սովորական բառերում որոտն ակնարկելու համար:'
      },
      {
        text: '«El tic-tac del reloj en la sala vacía».',
        textHy: '«Ժամացույցի տիկ-տակը դատարկ սրահում»:',
        belongsTo: 'Onomatopeya',
        reasonEs: '«Tic-tac» es una palabra creada expresamente para imitar el sonido mecánico.',
        reasonHy: '«Tic-tac»-ը հատուկ ստեղծված բառ է մեխանիկական ձայնը նմանակելու համար:'
      },
      {
        text: '«Un susurro de abejas que sonaba».',
        textHy: '«Մեղուների շշուկը, որ հնչում էր»:',
        belongsTo: 'Aliteración',
        reasonEs: 'La repetición de la «s» evoca el zumbido pero con vocablos del diccionario.',
        reasonHy: '«S»-ի կրկնությունն ակնարկում է բզզոցը, բայց բառարանային բառերով:'
      },
      {
        text: '«¡Pum, pum! Se oyeron los disparos lejanos».',
        textHy: '«Բո՛ւմ, բո՛ւմ: Լսվեցին հեռավոր կրակոցները»:',
        belongsTo: 'Onomatopeya',
        reasonEs: 'Reproduce el estampido del proyectil directamente.',
        reasonHy: 'Ուղղակիորեն վերարտադրում է արկի պայթյունը:'
      },
      {
        text: '«Los claros clarines ya suenan».',
        textHy: '«Պայծառ շեփորներն արդեն հնչում են»:',
        belongsTo: 'Aliteración',
        reasonEs: 'Repite el sonido /kl/ en palabras españolas válidas.',
        reasonHy: 'Կրկնում է /kl/ հնչյունը կանոնավոր իսպաներեն բառերում:'
      },
      {
        text: '«El gato dormilón maulló: ¡miau!».',
        textHy: '«Քնկոտ կատուն մլավեց՝ միա՛ու»:',
        belongsTo: 'Onomatopeya',
        reasonEs: 'Imita la voz del animal de compañía.',
        reasonHy: 'Նմանակում է ընտանի կենդանու ձայնը:'
      },
      {
        text: '«Bajo el ala aleve del leve abanico».',
        textHy: '«Թեթև հովհարի դավաճան թևի տակ»:',
        belongsTo: 'Aliteración',
        reasonEs: 'Juego musical con los sonidos /l/ y /b/.',
        reasonHy: 'Երաժշտական խաղ /l/ և /b/ հնչյուններով:'
      },
      {
        text: '«¡Toc, toc! Llamaron a la puerta con prisa».',
        textHy: '«Տո՛կ, տո՛կ: Դուռը թակեցին շտապողականությամբ»:',
        belongsTo: 'Onomatopeya',
        reasonEs: 'Representación escrita de un golpe en la madera.',
        reasonHy: 'Փայտին հասցվող հարվածի գրավոր պատկերում:'
      },
      {
        text: '«Tres tristes tigres tragaban trigo».',
        textHy: '«Երեք տխուր վագրեր ցորեն էին խժռում»:',
        belongsTo: 'Aliteración',
        reasonEs: 'Repetición continuada del grupo consonántico /tr/.',
        reasonHy: '/tr/ բաղաձայնների կապակցության շարունակական կրկնություն:'
      },
      {
        text: '«El agua cayó con un ¡chof! sonoro».',
        textHy: '«Ջուրն ընկավ հնչեղ չո՛ֆ-ով»:',
        belongsTo: 'Onomatopeya',
        reasonEs: 'Imita el choque líquido contra el suelo.',
        reasonHy: 'Նմանակում է հեղուկի բախումը գետնին:'
      }
    ],
    commonMistakes: [
      {
        es: 'Error frecuente: pensar que «El susurro de abejas» es onomatopeya porque la palabra susurro suena suave. Es aliteración porque son palabras comunes del idioma, no ruidos transcritos.',
        hy: 'Տարածված սխալ. կարծել, որ «մեղուների շշուկը» բնաձայնություն է, քանի որ susurro բառը մեղմ է հնչում: Դա բաղաձայնույթ է, քանի որ լեզվի սովորական բառեր են, ոչ թե գրի առնված աղմուկներ:'
      }
    ],
    exercises: [
      {
        id: 'comp-ao-1',
        topicId: 'tema-9',
        bloqueId: 5,
        difficulty: 'facil',
        questionType: 'compare',
        question: 'En «El suave susurro silbaba en la sierra», ¿cuál de las dos figuras literarias está presente?',
        questionHy: 'Այս տողում երկու գեղարվեստական պատկերներից ո՞րն է առկա:',
        options: [
          { id: 'opt-a', text: 'Aliteración (repite la letra s)', textHy: 'Բաղաձայնույթ (կրկնում է s տառը)' },
          { id: 'opt-b', text: 'Onomatopeya (imita un ladrido)', textHy: 'Բնաձայնություն (նմանակում է հաչոց)' },
          { id: 'opt-c', text: 'Ambas figuras simultáneas', textHy: 'Երկու պատկերները միաժամանակ' },
          { id: 'opt-d', text: 'Ninguna de las dos', textHy: 'Ոչ մեկը' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Es una aliteración porque el fonema /s/ se reitera en cuatro palabras sucesivas.',
        explanationHy: 'Բաղաձայնույթ է, քանի որ /s/ հնչյունը կրկնվում է չորս հաջորդական բառերում:'
      },
      {
        id: 'comp-ao-2',
        topicId: 'tema-10',
        bloqueId: 5,
        difficulty: 'facil',
        questionType: 'compare',
        question: 'Si en un cómic leemos «¡ZAS! en toda la cara», la expresión «¡ZAS!» es:',
        questionHy: 'Եթե կոմիքսում կարդում ենք «¡ZAS! en toda la cara», ապա «¡ZAS!» արտահայտությունը հանդիսանում է՝',
        options: [
          { id: 'opt-a', text: 'Una onomatopeya de impacto', textHy: 'Հարվածի բնաձայնություն' },
          { id: 'opt-b', text: 'Una aliteración de la z', textHy: 'Z տառի բաղաձայնույթ' },
          { id: 'opt-c', text: 'Un pleonasmo', textHy: 'Պլեոնազմ' },
          { id: 'opt-d', text: 'Un hipérbaton', textHy: 'Հիպերբատոն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Zas» copia directamente el ruido de una bofetada o golpe seco.',
        explanationHy: '«Zas»-ն ուղղակիորեն կրկնօրինակում է ապտակի կամ չոր հարվածի ձայնը:'
      }
    ]
  },

  // 2. Anáfora VS Epanadiplosis
  {
    id: 'ana-vs-epa',
    title: 'Anáfora VS Epanadiplosis',
    titleHy: 'Անաֆորան ընդդեմ Էպանադիպլոզիսի',
    conceptA: 'Anáfora',
    conceptB: 'Epanadiplosis',
    table: [
      {
        aspect: 'Posición de las palabras repetidas',
        aspectHy: 'Կրկնվող բառերի դիրքը',
        conceptA: 'Al principio de dos o más versos distintos (en vertical).',
        conceptAHy: 'Երկու կամ ավելի տարբեր տողերի սկզբում (ուղղահայաց):',
        conceptB: 'Al principio y al final del mismo verso (en horizontal).',
        conceptBHy: 'Նույն տողի սկզբում և վերջում (հորիզոնական):'
      },
      {
        aspect: 'Estructura geométrica',
        aspectHy: 'Երկրաչափական կառուցվածք',
        conceptA: 'Columnar o vertical repetitiva.',
        conceptAHy: 'Սյունակաձև կամ ուղղահայաց կրկնվող:',
        conceptB: 'Circular, en forma de anillo cerrado [X ...... X].',
        conceptBHy: 'Շրջանաձև, փակ օղակի տեսքով [X ...... X]:'
      },
      {
        aspect: 'Ejemplo emblemático',
        aspectHy: 'Խորհրդանշական օրինակ',
        conceptA: '«Temprano levantó... / temprano madrugó...».',
        conceptAHy: '«Temprano levantó... / temprano madrugó...»:',
        conceptB: '«Verde que te quiero verde».',
        conceptBHy: '«Verde que te quiero verde»:'
      }
    ],
    examples: [
      {
        text: '«Verde que te quiero verde».',
        textHy: '«Կանաչ, ինչքան եմ քեզ սիրում, կանաչ»:',
        belongsTo: 'Epanadiplosis',
        reasonEs: 'La palabra «verde» abre y cierra el mismo verso.',
        reasonHy: '«Verde» բառը բացում և փակում է նույն տողը:'
      },
      {
        text: '«Salid fuera sin duelo,\nsalid sin duelo, lágrimas corriendo».',
        textHy: '«Դուրս ելեք առանց վշտի,\nդուրս ելեք առանց վշտի, արցունքներ հոսող»:',
        belongsTo: 'Anáfora',
        reasonEs: '«Salid» encabeza dos versos seguidos.',
        reasonHy: '«Salid» բառը գլխավորում է երկու հաջորդական տողեր:'
      },
      {
        text: '«Silencio de la noche, doloroso silencio».',
        textHy: '«Գիշերվա լռություն, ցավոտ լռություն»:',
        belongsTo: 'Epanadiplosis',
        reasonEs: '«Silencio» está en la primera y última posición del verso.',
        reasonHy: '«Silencio»-ն գտնվում է տողի առաջին և վերջին դիրքում:'
      },
      {
        text: '«Por ti el viento suave,\npor ti la flor temprana».',
        textHy: '«Քեզ համար՝ մեղմ քամին,\nքեզ համար՝ վաղահաս ծաղիկը»:',
        belongsTo: 'Anáfora',
        reasonEs: 'La expresión «por ti» abre dos líneas sucesivas.',
        reasonHy: '«Por ti» արտահայտությունը բացում է երկու հաջորդական տողեր:'
      },
      {
        text: '«Palabras, solo me quedan palabras».',
        textHy: '«Բառեր, ինձ միայն բառեր են մնացել»:',
        belongsTo: 'Epanadiplosis',
        reasonEs: '«Palabras» inicia y concluye la misma frase.',
        reasonHy: '«Palabras»-ը սկսում և ավարտում է նույն նախադասությունը:'
      },
      {
        text: '«No perdono a la muerte,\nno perdono a la vida».',
        textHy: '«Չեմ ներում մահվանը,\nչեմ ներում կյանքին»:',
        belongsTo: 'Anáfora',
        reasonEs: 'Reiteración inicial «no perdono».',
        reasonHy: 'Սկզբնական կրկնություն՝ «no perdono»:'
      },
      {
        text: '«Hurra, cosacos del desierto, hurra».',
        textHy: '«Ուռա, անապատի կազակներ, ուռա»:',
        belongsTo: 'Epanadiplosis',
        reasonEs: 'Grito idéntico al principio y al final de la línea.',
        reasonHy: 'Նույնական բացականչություն տողի սկզբում և վերջում:'
      },
      {
        text: '«Aquí me tienes rendido,\naquí me tienes llorando».',
        textHy: '«Ահա ինձ ունես հանձնված,\nահա ինձ ունես լաց լինելիս»:',
        belongsTo: 'Anáfora',
        reasonEs: '«Aquí me tienes» en ambos comienzos.',
        reasonHy: '«Aquí me tienes» երկու տողերի սկզբում:'
      },
      {
        text: '«Llora, corazón herido, llora».',
        textHy: '«Լաց եղիր, վիրավոր սիրտ, լաց եղիր»:',
        belongsTo: 'Epanadiplosis',
        reasonEs: 'El verbo «llora» enmarca la línea.',
        reasonHy: '«Llora» բայը շրջանակում է տողը:'
      },
      {
        text: '«Quién supiera reír,\nquién pudiera cantar».',
        textHy: '«Ով իմանար ծիծաղել,\nով կարողանար երգել»:',
        belongsTo: 'Anáfora',
        reasonEs: 'Inicio idéntico con «quién».',
        reasonHy: 'Նույնական սկիզբ «quién»-ով:'
      }
    ],
    commonMistakes: [
      {
        es: 'El error más grave del examen es llamar anáfora a «Verde que te quiero verde». Es epanadiplosis porque todo sucede en un único verso.',
        hy: 'Քննության ամենալուրջ սխալն է «Verde que te quiero verde»-ն անվանել անաֆորա: Դա էպանադիպլոզիս է, որովհետև ամեն ինչ տեղի է ունենում մեկ տողի մեջ:'
      }
    ],
    exercises: [
      {
        id: 'comp-ae-1',
        topicId: 'tema-12',
        bloqueId: 5,
        difficulty: 'facil',
        questionType: 'compare',
        question: 'En «Amor que todo lo llenas, amor», ¿qué figura literaria exacta encontramos?',
        questionHy: 'Այս տողում ո՞ր ճշգրիտ գեղարվեստական պատկերն ենք գտնում:',
        options: [
          { id: 'opt-a', text: 'Epanadiplosis (abre y cierra el mismo verso con «amor»)', textHy: 'Էպանադիպլոզիս (բացում և փակում է նույն տողը «amor»-ով)' },
          { id: 'opt-b', text: 'Anáfora (repite al inicio de dos versos)', textHy: 'Անաֆորա (կրկնում է երկու տողերի սկզբում)' },
          { id: 'opt-c', text: 'Aliteración en /r/', textHy: 'Բաղաձայնույթ /r/-ով' },
          { id: 'opt-d', text: 'Onomatopeya de amor', textHy: 'Սիրո բնաձայնություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La palabra «amor» abre y concluye el mismo verso, esquema propio del epanadiplosis.',
        explanationHy: '«Amor» բառը բացում և ավարտում է նույն տողը՝ էպանադիպլոզիսի բնորոշ սխեմայով:'
      }
    ]
  },

  // 3. Asíndeton VS Polisíndeton
  {
    id: 'asi-vs-pol',
    title: 'Asíndeton VS Polisíndeton',
    titleHy: 'Անշաղկապությունն ընդդեմ Բազմաշաղկապության',
    conceptA: 'Asíndeton',
    conceptB: 'Polisíndeton',
    table: [
      {
        aspect: 'Presencia de conjunciones',
        aspectHy: 'Շաղկապների առկայություն',
        conceptA: 'Supresión total de conjunciones copulativas (cero nexos, puras comas).',
        conceptAHy: 'Համադասական շաղկապների լիակատար վերացում (զրո շաղկապ, զուտ ստորակետներ):',
        conceptB: 'Abundancia reiterada e intencionada de conjunciones («y», «ni», «o»).',
        conceptBHy: 'Շաղկապների միտումնավոր և բազմակի առատություն («y», «ni», «o»):'
      },
      {
        aspect: 'Efecto sobre el ritmo de lectura',
        aspectHy: 'Ազդեցությունը ընթերցման ռիթմի վրա',
        conceptA: 'Rapidez vertiginosa, precipitación, agilidad y dinamismo.',
        conceptAHy: 'Սրընթաց արագություն, շտապողականություն, ճարպկություն և դինամիզմ:',
        conceptB: 'Lentitud solemne, pesadez, gravedad y pausa reflexiva.',
        conceptBHy: 'Հանդիսավոր դանդաղություն, ծանրություն, լրջություն և խոհուն դադար:'
      },
      {
        aspect: 'Etimología griega de ayuda',
        aspectHy: 'Հունարեն ստուգաբանություն օգնության համար',
        conceptA: '«A-» (sin) + «syndeton» (atado con nexo) = SIN CONJUNCIONES.',
        conceptAHy: '«A-» (առանց) + «syndeton» (կապված) = ԱՌԱՆՑ ՇԱՂԿԱՊՆԵՐԻ:',
        conceptB: '«Poli-» (muchos) + «syndeton» (nexo) = MUCHAS CONJUNCIONES.',
        conceptBHy: '«Poli-» (շատ) + «syndeton» (շաղկապ) = ՇԱՏ ՇԱՂԿԱՊՆԵՐ:'
      }
    ],
    examples: [
      {
        text: '«Llegué, vi, vencí».',
        textHy: '«Եկա, տեսա, հաղթեցի»:',
        belongsTo: 'Asíndeton',
        reasonEs: 'Sin nexos, tres acciones fulgurantes.',
        reasonHy: 'Առանց շաղկապների, երեք կայծակնային գործողություններ:'
      },
      {
        text: '«Y ríe y baila y canta y sueña».',
        textHy: '«Եվ ծիծաղում է, և պարում է, և երգում է, և երազում»:',
        belongsTo: 'Polisíndeton',
        reasonEs: 'Cuatro «y» que ralentizan el enunciado.',
        reasonHy: 'Չորս «y», որոնք դանդաղեցնում են նախադասությունը:'
      },
      {
        text: '«Desmayarse, atreverse, estar furioso».',
        textHy: '«Ուշաթափվել, համարձակվել, կատաղած լինել»:',
        belongsTo: 'Asíndeton',
        reasonEs: 'Comas directas sin conjunción.',
        reasonHy: 'Ուղղակի ստորակետներ առանց շաղկապի:'
      },
      {
        text: '«Ni el dinero ni la fama ni el poder le importaban».',
        textHy: '«Ո՛չ փողը, ո՛չ փառքը, ո՛չ իշխանությունը նրան չէին հետաքրքրում»:',
        belongsTo: 'Polisíndeton',
        reasonEs: 'Reiteración copulativa negativa de «ni».',
        reasonHy: '«Ni»-ի ժխտական կրկնություն:'
      },
      {
        text: '«Corre, vuela, traspasa el valle».',
        textHy: '«Վազի՛ր, թռի՛ր, անցի՛ր հովիտը»:',
        belongsTo: 'Asíndeton',
        reasonEs: 'Órdenes sin partículas de enlace.',
        reasonHy: 'Հրամաններ առանց կապող մասնիկների:'
      },
      {
        text: '«Y hay un río y un puente y un castillo».',
        textHy: '«Եվ կա մի գետ, և մի կամուրջ, և մի ամրոց»:',
        belongsTo: 'Polisíndeton',
        reasonEs: 'La conjunción «y» individualiza los elementos.',
        reasonHy: '«Y» շաղկապն առանձնացնում է տարրերը:'
      },
      {
        text: '«Día, noche, amanecer, ocaso».',
        textHy: '«Ցերեկ, գիշեր, լուսաբաց, մայրամուտ»:',
        belongsTo: 'Asíndeton',
        reasonEs: 'Paso acelerado de las horas sin nexos.',
        reasonHy: 'Ժամերի արագացված ընթացք առանց շաղկապների:'
      },
      {
        text: '«Porque es buena y es pura y es santa».',
        textHy: '«Որովհետև նա բարի է, և մաքուր է, և սուրբ է»:',
        belongsTo: 'Polisíndeton',
        reasonEs: 'Insistencia devota con «y».',
        reasonHy: 'Երկրպագու համառություն «y»-ով:'
      },
      {
        text: '«Rendí, rompí, derribé, vencí».',
        textHy: '«Հնազանդեցրի, ջարդեցի, տապալեցի, հաղթեցի»:',
        belongsTo: 'Asíndeton',
        reasonEs: 'Velocidad bélica implacable.',
        reasonHy: 'Անողոք ռազմական արագություն:'
      },
      {
        text: '«O callas o sales o aceptas».',
        textHy: '«Կա՛մ լռում ես, կա՛մ դուրս ես գալիս, կա՛մ ընդունում ես»:',
        belongsTo: 'Polisíndeton',
        reasonEs: 'Repetición de la conjunción disyuntiva «o».',
        reasonHy: 'Տրոհական «o» շաղկապի կրկնություն:'
      }
    ],
    commonMistakes: [
      {
        es: 'No recordar cuál es cuál. Aplica la regla: A-síndeton = CERO conjunciones; Poli-síndeton = MUCHAS conjunciones.',
        hy: 'Չհիշել, թե որն ինչ է: Կիրառի՛ր կանոնը՝ A-síndeton = ԶՐՈ շաղկապ, Poli-síndeton = ՇԱՏ շաղկապներ:'
      }
    ],
    exercises: [
      {
        id: 'comp-ap-1',
        topicId: 'tema-15',
        bloqueId: 5,
        difficulty: 'facil',
        questionType: 'compare',
        question: 'En «Gritó, saltó, corrió, escapó», ¿qué figura literaria hay?',
        questionHy: 'Այս արտահայտության մեջ ի՞նչ գեղարվեստական պատկեր կա:',
        options: [
          { id: 'opt-a', text: 'Asíndeton (omite conjunciones y da rapidez)', textHy: 'Անշաղկապություն (բաց է թողնում շաղկապները և արագություն տալիս)' },
          { id: 'opt-b', text: 'Polisíndeton (repite conjunciones)', textHy: 'Բազմաշաղկապություն (կրկնում է շաղկապներ)' },
          { id: 'opt-c', text: 'Pleonasmo', textHy: 'Պլեոնազմ' },
          { id: 'opt-d', text: 'Onomatopeya', textHy: 'Բնաձայնություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Los verbos están separados solo por comas sin ninguna «y», por lo que es asíndeton.',
        explanationHy: 'Բայերն առանձնացված են միայն ստորակետներով առանց որևէ «y»-ի, ուստի անշաղկապություն է:'
      }
    ]
  },

  // 4. Metáfora VS Comparación (Símil)
  {
    id: 'met-vs-sim',
    title: 'Metáfora VS Comparación (Símil)',
    titleHy: 'Փոխաբերությունն ընդդեմ Համեմատության (Símil)',
    conceptA: 'Metáfora',
    conceptB: 'Comparación (Símil)',
    table: [
      {
        aspect: 'Presencia de nexo comparativo',
        aspectHy: 'Համեմատական շաղկապի առկայություն',
        conceptA: 'NO lleva nexos comparativos (nunca usa «como», «parece», «semejante a»).',
        conceptAHy: 'ՉՈՒՆԻ՛ համեմատական շաղկապներ (երբեք չի օգտագործում «como», «parece», «semejante a»):',
        conceptB: 'SÍ lleva obligatoriamente un nexo comparativo explícito («como», «igual que»).',
        conceptBHy: 'ՊԱՐՏԱԴԻՐ ՈՒՆԻ բացահայտ համեմատական շաղկապ («como», «igual que»):'
      },
      {
        aspect: 'Relación entre términos',
        aspectHy: 'Եզրույթների միջև կապը',
        conceptA: 'Identidad absoluta: afirma que A ES B («Tus ojos son estrellas»).',
        conceptAHy: 'Բացարձակ նույնություն. պնդում է, որ A-ն B Է («Քո աչքերը աստղեր են»):',
        conceptB: 'Semejanza aproximada: dice que A se parece a B («Tus ojos son como estrellas»).',
        conceptBHy: 'Մոտավոր նմանություն. ասում է, որ A-ն նման է B-ին («Քո աչքերն ինչպես աստղեր են»):'
      }
    ],
    examples: [
      {
        text: '«Tus ojos son dos luceros».',
        textHy: '«Քո աչքերը երկու լուսատու են»:',
        belongsTo: 'Metáfora',
        reasonEs: 'Afirma que los ojos SON luceros directamente.',
        reasonHy: 'Ուղղակիորեն պնդում է, որ աչքերը լուսատուներ ԵՆ:'
      },
      {
        text: '«Tus ojos brillan como dos luceros».',
        textHy: '«Քո աչքերը փայլում են ինչպես երկու լուսատու»:',
        belongsTo: 'Comparación (Símil)',
        reasonEs: 'Utiliza el nexo «como».',
        reasonHy: 'Օգտագործում է «como» (ինչպես) շաղկապը:'
      },
      {
        text: '«El tiempo es oro».',
        textHy: '«Ժամանակը ոսկի է»:',
        belongsTo: 'Metáfora',
        reasonEs: 'Estructura A es B sin nexos.',
        reasonHy: 'A es B կառուցվածք առանց շաղկապների:'
      },
      {
        text: '«El tiempo es tan valioso como el oro».',
        textHy: '«Ժամանակն այնքան թանկ է, որքան ոսկին»:',
        belongsTo: 'Comparación (Símil)',
        reasonEs: 'Lleva la estructura comparativa «tan... como».',
        reasonHy: 'Ունի «tan... como» համեմատական կառուցվածքը:'
      },
      {
        text: '«Las perlas de tu boca».',
        textHy: '«Քո բերանի մարգարիտները»:',
        belongsTo: 'Metáfora',
        reasonEs: 'Metáfora pura donde «perlas» sustituye a dientes.',
        reasonHy: 'Մաքուր փոխաբերություն, որտեղ «մարգարիտները» փոխարինում է ատամներին:'
      },
      {
        text: '«Dientes blancos como perlas finas».',
        textHy: '«Սպիտակ ատամներ՝ ինչպես նուրբ մարգարիտներ»:',
        belongsTo: 'Comparación (Símil)',
        reasonEs: 'Mantiene «como» uniendo los dos objetos.',
        reasonHy: 'Պահպանում է «como»-ն՝ միացնելով երկու առարկաները:'
      },
      {
        text: '«Ese hombre es un león en la batalla».',
        textHy: '«Այդ մարդն առյուծ է մարտում»:',
        belongsTo: 'Metáfora',
        reasonEs: 'Identificación directa del guerrero con el animal.',
        reasonHy: 'Ռազմիկի ուղղակի նույնացում կենդանու հետ:'
      },
      {
        text: '«Luchó con la bravura de un león».',
        textHy: '«Կռվեց առյուծի քաջությամբ»:',
        belongsTo: 'Comparación (Símil)',
        reasonEs: 'Compara la forma de luchar mediante analogía.',
        reasonHy: 'Համեմատում է կռվելու ձևը համաբանությամբ:'
      },
      {
        text: '«El río es una serpiente de plata».',
        textHy: '«Գետն արծաթե օձ է»:',
        belongsTo: 'Metáfora',
        reasonEs: 'A es B: no hay nexos.',
        reasonHy: 'A es B. չկան շաղկապներ:'
      },
      {
        text: '«El río serpentea igual que una culebra».',
        textHy: '«Գետը ոլորվում է ճիշտ ինչպես օձը»:',
        belongsTo: 'Comparación (Símil)',
        reasonEs: 'Usa el nexo explícito «igual que».',
        reasonHy: 'Օգտագործում է «igual que» (ճիշտ ինչպես) բացահայտ շաղկապը:'
      }
    ],
    commonMistakes: [
      {
        es: 'Marcar metáfora en una frase que tiene la palabra «como». ¡REGLA ABSOLUTA: si tiene «como», es COMPARACIÓN!',
        hy: 'Փոխաբերություն նշել «como» բառն ունեցող նախադասության մեջ: ԲԱՑԱՐՁԱԿ ԿԱՆՈՆ. եթե ունի «como», դա ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ Է:'
      }
    ],
    exercises: [
      {
        id: 'comp-ms-1',
        topicId: 'tema-19',
        bloqueId: 5,
        difficulty: 'facil',
        questionType: 'compare',
        question: 'En «Su piel era suave como la seda», ¿qué figura literaria tenemos?',
        questionHy: 'Այս արտահայտության մեջ ի՞նչ գեղարվեստական պատկեր ունենք:',
        options: [
          { id: 'opt-a', text: 'Comparación o símil (porque lleva el nexo «como»)', textHy: 'Համեմատություն կամ símil (քանի որ ունի «como» շաղկապը)' },
          { id: 'opt-b', text: 'Metáfora pura', textHy: 'Մաքուր փոխաբերություն' },
          { id: 'opt-c', text: 'Hipérbaton', textHy: 'Հիպերբատոն' },
          { id: 'opt-d', text: 'Aliteración', textHy: 'Բաղաձայնույթ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La presencia de «como» convierte el enunciado en una comparación o símil.',
        explanationHy: '«Como»-ի առկայությունը նախադասությունը վերածում է համեմատության:'
      }
    ]
  },

  // 5. Enumeración VS Asíndeton
  {
    id: 'enu-vs-asi',
    title: 'Enumeración VS Asíndeton',
    titleHy: 'Թվարկումն ընդդեմ Անշաղկապության',
    conceptA: 'Enumeración',
    conceptB: 'Asíndeton',
    table: [
      {
        aspect: 'Qué describe',
        aspectHy: 'Ինչ է նկարագրում',
        conceptA: 'El contenido: la lista o serie de cosas acumuladas.',
        conceptAHy: 'Բովանդակությունը. կուտակված իրերի ցուցակը կամ շարքը:',
        conceptB: 'La forma de unión: supresión de conjunciones copulativas.',
        conceptBHy: 'Միացման ձևը. համադասական շաղկապների բացթողումը:'
      },
      {
        aspect: 'Pueden coexistir',
        aspectHy: 'Կարո՞ղ են համատեղվել',
        conceptA: 'Sí, una lista puede llevar «y» (conjunción) o no llevarla.',
        conceptAHy: 'Այո, ցուցակը կարող է ունենալ «y» կամ չունենալ:',
        conceptB: 'Sí, cuando la lista prescinde de nexos copulativos.',
        conceptBHy: 'Այո, երբ ցուցակը զերծ է մնում շաղկապներից:'
      }
    ],
    examples: [
      {
        text: '«Compró manzanas, peras, uvas y plátanos».',
        textHy: '«Գնեց խնձորներ, տանձեր, խաղողներ և բանաններ»:',
        belongsTo: 'Enumeración',
        reasonEs: 'Es una enumeración con nexo regular al final; no es asíndeton.',
        reasonHy: 'Թվարկում է վերջում կանոնավոր շաղկապով, անշաղկապություն չէ:'
      },
      {
        text: '«Llegó, vio, venció».',
        textHy: '«Եկավ, տեսավ, հաղթեց»:',
        belongsTo: 'Asíndeton',
        reasonEs: 'Se omiten los nexos por completo.',
        reasonHy: 'Շաղկապներն ամբողջությամբ բաց են թողնված:'
      }
    ],
    commonMistakes: [
      {
        es: 'Creer que toda lista es asíndeton: si lleva «y» al final de la lista, es solo enumeración normal.',
        hy: 'Կարծել, թե յուրաքանչյուր ցուցակ անշաղկապություն է. եթե վերջում ունի «y», դա սովորական թվարկում է:'
      }
    ],
    exercises: [
      {
        id: 'comp-ea-1',
        topicId: 'tema-17',
        bloqueId: 5,
        difficulty: 'medio',
        questionType: 'compare',
        question: 'En «Había cuadros, lámparas, alfombras y jarrones», ¿por qué NO es un asíndeton?',
        questionHy: 'Այս արտահայտությունն ինչո՞ւ անշաղկապություն ՉԷ:',
        options: [
          { id: 'opt-a', text: 'Porque contiene la conjunción «y» antes de jarrones.', textHy: 'Որովհետև jarrones-ից առաջ պարունակում է «y» շաղկապը:' },
          { id: 'opt-b', text: 'Porque está en plural.', textHy: 'Որովհետև հոգնակի թվով է:' },
          { id: 'opt-c', text: 'Porque es una metáfora.', textHy: 'Որովհետև փոխաբերություն է:' },
          { id: 'opt-d', text: 'Porque habla de muebles.', textHy: 'Որովհետև կահույքի մասին է խոսում:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El asíndeton requiere la supresión de las conjunciones copulativas.',
        explanationHy: 'Անշաղկապությունը պահանջում է համադասական շաղկապների բացակայություն:'
      }
    ]
  },

  // 6. Hipérbaton VS Orden habitual
  {
    id: 'hip-vs-ord',
    title: 'Hipérbaton VS Orden habitual',
    titleHy: 'Հիպերբատոնն ընդդեմ Սովորական կարգի',
    conceptA: 'Hipérbaton',
    conceptB: 'Orden habitual',
    table: [
      {
        aspect: 'Estructura oracional',
        aspectHy: 'Նախադասության կառուցվածք',
        conceptA: 'Alterada, con elementos descolocados voluntariamente.',
        conceptAHy: 'Փոփոխված՝ կանխամտածված տեղաշարժված տարրերով:',
        conceptB: 'Canónica y lógica: [Sujeto + Verbo + Complementos].',
        conceptBHy: 'Կանոնական և տրամաբանական՝ [Ենթակա + Բայ + Լրացումներ]:'
      },
      {
        aspect: 'Ámbito de uso',
        aspectHy: 'Կիրառման ոլորտ',
        conceptA: 'Poesía lírica culta para encajar rima o enfatizar.',
        conceptAHy: 'Հեղինակային քնարերգություն՝ հանգին հարմարվելու կամ շեշտելու համար:',
        conceptB: 'Habla cotidiana, prensa, textos informativos y científicos.',
        conceptBHy: 'Առօրյա խոսք, մամուլ, տեղեկատվական և գիտական տեքստեր:'
      }
    ],
    examples: [
      {
        text: '«Volverán las oscuras golondrinas».',
        textHy: '«Կվերադառնան մութ ծիծեռնակները»:',
        belongsTo: 'Hipérbaton',
        reasonEs: 'Verbo antes que el sujeto.',
        reasonHy: 'Բայը դրված է ենթակայից առաջ:'
      },
      {
        text: '«Las oscuras golondrinas volverán en primavera».',
        textHy: '«Մութ ծիծեռնակները կվերադառնան գարնանը»:',
        belongsTo: 'Orden habitual',
        reasonEs: 'Sujeto + Verbo + Complemento circunstancial.',
        reasonHy: 'Ենթակա + Բայ + Ժամանակի պարագա:'
      }
    ],
    commonMistakes: [
      {
        es: 'Creer que el hipérbaton es hablar mal: es un recurso de estilo muy refinado propio de grandes poetas.',
        hy: 'Կարծել, թե հիպերբատոնը վատ խոսելն է. դա մեծ բանաստեղծներին բնորոշ շատ նրբագեղ ոճական հնարք է:'
      }
    ],
    exercises: [
      {
        id: 'comp-ho-1',
        topicId: 'tema-13',
        bloqueId: 5,
        difficulty: 'facil',
        questionType: 'compare',
        question: 'En «De verdes sauces hay una espesura», ¿qué figura altera el orden neutro?',
        questionHy: 'Այս տողում ո՞ր պատկերն է խախտում չեզոք կարգը:',
        options: [
          { id: 'opt-a', text: 'Hipérbaton', textHy: 'Հիպերբատոն' },
          { id: 'opt-b', text: 'Asíndeton', textHy: 'Անշաղկապություն' },
          { id: 'opt-c', text: 'Metáfora', textHy: 'Փոխաբերություն' },
          { id: 'opt-d', text: 'Polisíndeton', textHy: 'Բազմաշաղկապություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El complemento se antepone al núcleo «espesura» y al verbo «hay».',
        explanationHy: 'Լրացումը դրված է «espesura» գոյականից և «hay» բայից առաջ:'
      }
    ]
  },

  // 7. Literatura popular VS Literatura culta
  {
    id: 'pop-vs-cul',
    title: 'Literatura popular VS Literatura culta',
    titleHy: 'Ժողովրդական գրականությունն ընդդեմ Հեղինակայինի',
    conceptA: 'Literatura popular',
    conceptB: 'Literatura culta',
    table: [
      {
        aspect: 'Autoría',
        aspectHy: 'Հեղինակային պատկանելություն',
        conceptA: 'Autor anónimo; la obra pertenece a la colectividad popular.',
        conceptAHy: 'Անանուն հեղինակ. գործը պատկանում է ժողովրդական հանրույթին:',
        conceptB: 'Autor conocido con nombre propio y orgullo de su obra.',
        conceptBHy: 'Հայտնի հեղինակ իր անունով և հպարտությամբ իր գործի հանդեպ:'
      },
      {
        aspect: 'Vía de transmisión',
        aspectHy: 'Փոխանցման ուղի',
        conceptA: 'Transmisión oral de boca en boca a través de generaciones.',
        conceptAHy: 'Բանավոր փոխանցում բերանից բերան սերունդների միջով:',
        conceptB: 'Transmisión escrita (manuscritos, libros impresos, internet).',
        conceptBHy: 'Գրավոր փոխանցում (ձեռագրեր, տպագիր գրքեր, ինտերնետ):'
      },
      {
        aspect: 'Estabilidad del texto',
        aspectHy: 'Տեքստի կայունություն',
        conceptA: 'Varias versiones cambiantes según la memoria del cantor.',
        conceptAHy: 'Մի քանի փոփոխվող տարբերակներ՝ ըստ երգչի հիշողության:',
        conceptB: 'Texto fijo, inmutable y único tal como lo escribió el autor.',
        conceptBHy: 'Հաստատուն, անփոփոխ և միասնական տեքստ, ինչպես գրել է հեղինակը:'
      },
      {
        aspect: 'Lenguaje y estilo',
        aspectHy: 'Լեզու և ոճ',
        conceptA: 'Sencillo, coloquial, con estribillos y repeticiones nemotécnicas.',
        conceptAHy: 'Պարզ, խոսակցական, կրկներգերով և հիշողության համար կրկնություններով:',
        conceptB: 'Elaborado, culto, con vocabulario rico y recursos complejos.',
        conceptBHy: 'Մշակված, հարուստ, ընտրյալ բառապաշարով և բարդ հնարքներով:'
      }
    ],
    examples: [
      {
        text: '«Tres morillas me enamoran en Jaén: Axa y Fátima y Marién».',
        textHy: '«Խաենում երեք մավրուհիներ ինձ սիրահարեցրին...»:',
        belongsTo: 'Literatura popular',
        reasonEs: 'Canción anónima tradicional transmitida de viva voz.',
        reasonHy: 'Ավանդական անանուն երգ՝ փոխանցված կենդանի խոսքով:'
      },
      {
        text: '«En un lugar de la Mancha, de cuyo nombre no quiero acordarme...».',
        author: 'Miguel de Cervantes',
        textHy: '«Լա Մանչայի մի գյուղում, որի անունը չեմ ցանկանում հիշել...»:',
        belongsTo: 'Literatura culta',
        reasonEs: 'Obra escrita por un autor conocido universalmente.',
        reasonHy: 'Համաշխարհային ճանաչում ունեցող հեղինակի գրավոր գործ:'
      }
    ],
    commonMistakes: [
      {
        es: 'Creer que «anónimo» significa que nunca nadie lo inventó. Toda obra tuvo un primer creador, pero su nombre se olvidó porque el pueblo la adoptó.',
        hy: 'Կարծել, թե «անանուն» նշանակում է, որ երբեք ոչ ոք չի հորինել: Յուրաքանչյուր գործ ունեցել է առաջին ստեղծող, բայց նրա անունը մոռացվել է, քանի որ ժողովուրդն է այն յուրացրել:'
      }
    ],
    exercises: [
      {
        id: 'comp-pc-1',
        topicId: 'tema-1',
        bloqueId: 5,
        difficulty: 'facil',
        questionType: 'compare',
        question: '¿Cuál es la diferencia fundamental entre una canción popular y un poema de Garcilaso?',
        questionHy: 'Ո՞րն է հիմնարար տարբերությունը ժողովրդական երգի և Գարսիլասոյի բանաստեղծության միջև:',
        options: [
          { id: 'opt-a', text: 'La canción popular es anónima y oral; el poema de Garcilaso es culto y escrito.', textHy: 'Ժողովրդական երգն անանուն է և բանավոր, իսկ Գարսիլասոյի բանաստեղծությունը՝ հեղինակային և գրավոր:' },
          { id: 'opt-b', text: 'Garcilaso no sabía escribir.', textHy: 'Գարսիլասոն գրել չգիտեր:' },
          { id: 'opt-c', text: 'La popular siempre está en latín.', textHy: 'Ժողովրդականը միշտ լատիներեն է:' },
          { id: 'opt-d', text: 'Son exactamente lo mismo.', textHy: 'Դրանք ճիշտ նույնն են:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La autoría y el canal de transmisión definen ambos mundos.',
        explanationHy: 'Հեղինակությունը և փոխանցման ուղին սահմանում են այդ երկու աշխարհները:'
      }
    ]
  },

  // 8. Mito VS Leyenda
  {
    id: 'mit-vs-ley',
    title: 'Mito VS Leyenda',
    titleHy: 'Առասպելն ընդդեմ Լեգենդի (ավանդազրույցի)',
    conceptA: 'Mito',
    conceptB: 'Leyenda',
    table: [
      {
        aspect: 'Personajes protagonistas',
        aspectHy: 'Գլխավոր կերպարները',
        conceptA: 'Dioses inmortales, titanes, seres divinos y semidioses.',
        conceptAHy: 'Անմահ աստվածներ, տիտաններ, աստվածային էակներ և կիսաստվածներ:',
        conceptB: 'Seres humanos reales (reyes, caballeros, vecinos) con rasgos extraordinarios.',
        conceptBHy: 'Իրական մարդկային էակներ (թագավորներ, ասպետներ, բնակիչներ)՝ արտասովոր գծերով:'
      },
      {
        aspect: 'Marco temporal y espacial',
        aspectHy: 'Ժամանակային և տարածական շրջանակ',
        conceptA: 'Tiempo sagrado primigenio e intemporal; lugares cósmicos (Olimpo).',
        conceptAHy: 'Սրբազան նախնադարյան անժամանակ շրջան, տիեզերական վայրեր (Օլիմպոս):',
        conceptB: 'Tiempo histórico reconocible; lugares geográficos reales en el mapa.',
        conceptBHy: 'Ճանաչելի պատմական ժամանակ, քարտեզի վրա իրական աշխարհագրական վայրեր:'
      },
      {
        aspect: 'Propósito fundamental',
        aspectHy: 'Հիմնական նպատակ',
        conceptA: 'Explicar el origen del mundo, los fenómenos naturales y las leyes cósmicas.',
        conceptAHy: 'Բացատրել աշխարհի ծագումը, բնական երևույթները և տիեզերական օրենքները:',
        conceptB: 'Transmitir un suceso memorable local o una enseñanza moral con base real.',
        conceptBHy: 'Փոխանցել տեղական հիշարժան դեպք կամ բարոյախրատական ուսուցում իրական հիմքով:'
      }
    ],
    examples: [
      {
        text: '«Zeus castigó a Prometeo por entregar el fuego a la humanidad».',
        textHy: '«Զևսը պատժեց Պրոմեթևսին մարդկությանը կրակը նվիրելու համար»:',
        belongsTo: 'Mito',
        reasonEs: 'Dioses olímpicos explicando el origen cósmico del fuego.',
        reasonHy: 'Օլիմպիական աստվածներ, որոնք բացատրում են կրակի տիեզերական ծագումը:'
      },
      {
        text: '«En el puente de San Martín de Toledo, la esposa del arquitecto quemó la cimbra de noche para salvar a su marido».',
        textHy: '«Տոլեդոյի Սան Մարտին կամրջի վրա ճարտարապետի կինը գիշերը հրդեհեց կամարամածը՝ ամուսնուն փրկելու համար»:',
        belongsTo: 'Leyenda',
        reasonEs: 'Lugar real (Toledo) y personas humanas con un hecho misterioso histórico.',
        reasonHy: 'Իրական վայր (Տոլեդո) և մարդկային կերպարներ՝ պատմական խորհրդավոր դեպքով:'
      }
    ],
    commonMistakes: [
      {
        es: 'Llamar mito a una historia que sucede en una ciudad concreta de España (como Toledo o Sevilla). Si el lugar existe en el mapa terrestre, ¡es LEYENDA!',
        hy: 'Առասպել անվանել այն պատմությանը, որը տեղի է ունենում Իսպանիայի կոնկրետ քաղաքում (օրինակ՝ Տոլեդոյում կամ Սևիլիայում): Եթե վայրը գոյություն ունի երկրային քարտեզի վրա, ապա դա ԼԵԳԵՆԴ Է:'
      }
    ],
    exercises: [
      {
        id: 'comp-ml-1',
        topicId: 'tema-4',
        bloqueId: 5,
        difficulty: 'facil',
        questionType: 'compare',
        question: 'Una narración sobre la diosa Atenea y cómo nació de la cabeza de Zeus es un:',
        questionHy: 'Աթենաս աստվածուհու և Զևսի գլխից նրա ծնվելու մասին պատմությունը հանդիսանում է՝',
        options: [
          { id: 'opt-a', text: 'Mito (protagonizado por divinidades)', textHy: 'Առասպել (գլխավոր հերոսներն աստվածություններն են)' },
          { id: 'opt-b', text: 'Leyenda toledana', textHy: 'Տոլեդոյի լեգենդ' },
          { id: 'opt-c', text: 'Romance medieval', textHy: 'Միջնադարյան ռոմանս' },
          { id: 'opt-d', text: 'Cuento de hadas anónimo', textHy: 'Անանուն փերիների հեքիաթ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Los mitos versan sobre dioses y explicaciones del cosmos sagrado.',
        explanationHy: 'Առասպելները պատմում են աստվածների և սրբազան տիեզերքի բացատրությունների մասին:'
      }
    ]
  },

  // 9. Cuento VS Leyenda
  {
    id: 'cue-vs-ley',
    title: 'Cuento VS Leyenda',
    titleHy: 'Հեքիաթն / Պատմվածքն ընդդեմ Լեգենդի',
    conceptA: 'Cuento',
    conceptB: 'Leyenda',
    table: [
      {
        aspect: 'Pretensión de veracidad histórica',
        aspectHy: 'Պատմական ճշմարտացիության հավակնություն',
        conceptA: 'Ficción pura asumida por todos; no pretende que nadie lo crea como histórico.',
        conceptAHy: 'Բոլորի կողմից ընդունված զուտ հորինվածք. չի հավակնում, որ որևէ մեկը հավատա որպես պատմության:',
        conceptB: 'Presentada como un hecho que realmente ocurrió en un lugar y tiempo concretos.',
        conceptBHy: 'Ներկայացվում է որպես փաստ, որն իրականում տեղի է ունեցել կոնկրետ վայրում և ժամանակում:'
      },
      {
        aspect: 'Localización de los hechos',
        aspectHy: 'Դեպքերի տեղորոշում',
        conceptA: 'Indeterminada y fantástica («En un reino muy lejano...»).',
        conceptAHy: 'Անորոշ և հեքիաթային («Մի հեռավոր թագավորությունում...»):',
        conceptB: 'Muy precisa en el espacio real (castillos, catedrales, ríos conocidos).',
        conceptBHy: 'Շատ ճշգրիտ իրական տարածության մեջ (ամրոցներ, տաճարներ, հայտնի գետեր):'
      }
    ],
    examples: [
      {
        text: '«Había una vez un ogro verde en un bosque encantado...».',
        textHy: '«Ժուկով-ժամանակով մի կախարդված անտառում կար մի կանաչ մարդակեր...»:',
        belongsTo: 'Cuento',
        reasonEs: 'Ficción pura sin base histórica en lugar imaginario.',
        reasonHy: 'Զուտ հորինվածք առանց պատմական հիմքի երևակայական վայրում:'
      },
      {
        text: '«En la iglesia del Salvador de Sevilla, se conserva una cruz misteriosa de la que brotaron flores en 1600».',
        textHy: '«Սևիլիայի Փրկչի եկեղեցում պահպանվում է մի խորհրդավոր խաչ, որից 1600 թվականին ծաղիկներ աճեցին»:',
        belongsTo: 'Leyenda',
        reasonEs: 'Ubicación física exacta en Sevilla vinculada a una creencia local.',
        reasonHy: 'Ճշգրիտ ֆիզիկական տեղադրություն Սևիլիայում՝ կապված տեղական հավատալիքի հետ:'
      }
    ],
    commonMistakes: [
      {
        es: 'Pensar que la leyenda es solo un cuento: la leyenda busca convencer al oyente de que algo sucedió en su propia ciudad.',
        hy: 'Կարծել, թե լեգենդը պարզապես հեքիաթ է. լեգենդը փորձում է համոզել ունկնդրին, որ ինչ-որ բան տեղի է ունեցել հենց իր սեփական քաղաքում:'
      }
    ],
    exercises: [
      {
        id: 'comp-cl-1',
        topicId: 'tema-5',
        bloqueId: 5,
        difficulty: 'facil',
        questionType: 'compare',
        question: 'Un relato que comienza con «Había una vez en un bosque que nadie sabía dónde estaba» es con certeza:',
        questionHy: 'Այն պատմությունը, որն սկսվում է «Ժուկով-ժամանակով մի անտառում, որտեղ ոչ ոք չգիտեր որտեղ էր», հաստատապես հանդիսանում է՝',
        options: [
          { id: 'opt-a', text: 'Un cuento (ficción en espacio indefinido)', textHy: 'Հեքիաթ (հորինվածք անորոշ տարածության մեջ)' },
          { id: 'opt-b', text: 'Una leyenda histórica', textHy: 'Պատմական լեգենդ' },
          { id: 'opt-c', text: 'Un mito sagrado', textHy: 'Սրբազան առասպել' },
          { id: 'opt-d', text: 'Un romance', textHy: 'Ռոմանս' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La fórmula mágica atemporal y la falta de geografía real son típicas del cuento.',
        explanationHy: 'Անժամանակ կախարդական բանաձևը և իրական աշխարհագրության բացակայությունը բնորոշ են հեքիաթին:'
      }
    ]
  },

  // 10. Prosa VS Verso
  {
    id: 'pro-vs-ver',
    title: 'Prosa VS Verso',
    titleHy: 'Արձակն ընդդեմ Չափածոյի',
    conceptA: 'Prosa',
    conceptB: 'Verso',
    table: [
      {
        aspect: 'Disposición visual en la página',
        aspectHy: 'Տեսողական դասավորությունը էջում',
        conceptA: 'Ocupa todo el renglón continuo de izquierda a derecha hasta el margen.',
        conceptAHy: 'Զբաղեցնում է ամբողջ շարունակական տողը ձախից աջ մինչև լուսանցք:',
        conceptB: 'Líneas cortas e independientes que no llegan al final de la página.',
        conceptBHy: 'Կարճ և ինքնուրույն տողեր, որոնք չեն հասնում էջի վերջին:'
      },
      {
        aspect: 'Métrica y rima obligatorias',
        aspectHy: 'Պարտադիր տաղաչափություն և հանգ',
        conceptA: 'No tiene cómputo de sílabas fijo ni esquema de rima preceptivo.',
        conceptAHy: 'Չունի վանկերի հաստատուն հաշվարկ կամ հանգի պարտադիր սխեմա:',
        conceptB: 'Sometido al cómputo de sílabas métricas, ritmo de acentos y rima.',
        conceptBHy: 'Ենթարկվում է տաղաչափական վանկերի հաշվարկին, շեշտերի ռիթմին և հանգին:'
      },
      {
        aspect: 'Unidad de agrupación',
        aspectHy: 'Խմբավորման միավոր',
        conceptA: 'Se organiza en párrafos separados por puntos y aparte.',
        conceptAHy: 'Կազմակերպվում է պարբերությունների մեջ՝ բաժանված նոր տողերով:',
        conceptB: 'Se organiza en versos que forman estrofas (cuartetos, romances, etc.).',
        conceptBHy: 'Կազմակերպվում է տողերի մեջ, որոնք կազմում են տներ:'
      }
    ],
    examples: [
      {
        text: '«El caballero cabalgó toda la noche a través del bosque solitario sin encontrar posada alguna donde guarecerse».',
        textHy: '«Ասպետը ձիավարեց ողջ գիշեր միայնակ անտառի միջով՝ չգտնելով ոչ մի իջևանատուն ապաստանելու համար»:',
        belongsTo: 'Prosa',
        reasonEs: 'Texto narrativo continuo a renglón tendido.',
        reasonHy: 'Շարունակական պատմողական տեքստ ամբողջ տողով:'
      },
      {
        text: '«Cabalgaba el caballero\npor la senda del pinar,\nbajo la luna de plata\nque guiaba su marchar».',
        textHy: '«Ձիավարում էր ասպետը\nսոճու անտառի արահետով,\nարծաթե լուսնի տակ,\nոր առաջնորդում էր նրա ընթացքը»:',
        belongsTo: 'Verso',
        reasonEs: 'Líneas poéticas octosílabas con ritmo y rima asonante.',
        reasonHy: 'Ութավանկ բանաստեղծական տողեր՝ ռիթմով և ասոնանս հանգով:'
      }
    ],
    commonMistakes: [
      {
        es: 'Pensar que la prosa poética es verso: aunque un texto en prosa use metáforas muy bellas, si ocupa todo el renglón continuo, sigue siendo PROSA.',
        hy: 'Կարծել, թե բանաստեղծական արձակը չափածո է. թեև արձակ տեքստն օգտագործում է շատ գեղեցիկ փոխաբերություններ, եթե այն զբաղեցնում է ամբողջ շարունակական տողը, միևնույն է ԱՐՁԱԿ Է:'
      }
    ],
    exercises: [
      {
        id: 'comp-pv-1',
        topicId: 'tema-8',
        bloqueId: 5,
        difficulty: 'facil',
        questionType: 'compare',
        question: 'Si un texto está estructurado en estrofas con rima y líneas cortas, está escrito en:',
        questionHy: 'Եթե տեքստը կառուցված է տներով՝ հանգով և կարճ տողերով, ապա գրված է՝',
        options: [
          { id: 'opt-a', text: 'Verso', textHy: 'Չափածո (Verso)' },
          { id: 'opt-b', text: 'Prosa narrativa pura', textHy: 'Մաքուր պատմողական արձակ' },
          { id: 'opt-c', text: 'Prosa periodística', textHy: 'Լրագրողական արձակ' },
          { id: 'opt-d', text: 'Diccionario', textHy: 'Բառարան' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Las estrofas y las líneas cortas medidas son la definición técnica del verso.',
        explanationHy: 'Տները և չափված կարճ տողերը չափածոյի տեխնիկական սահմանումն են:'
      }
    ]
  }
];

export const ALL_COMPARISONS = COMPARISONS_DATA;
