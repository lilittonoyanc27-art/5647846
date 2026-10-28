import { FigureDeepDive } from './types.ts';

export const FIGURES_DEEP_DIVE: FigureDeepDive[] = [
  // 1. ALITERACIÓN
  {
    id: 'aliteracion',
    name: 'Aliteración',
    nameHy: 'Բաղաձայնույթ (ալիտերացիա)',
    level: 'fónico',
    definitionEs: 'La aliteración es la reiteración deliberada y perceptible de sonidos consonánticos idénticos o semejantes en palabras cercanas de un verso o enunciado.',
    definitionHy: 'Բաղաձայնույթը միևնույն կամ նմանատիպ բաղաձայն հնչյունների կանխամտածված և նկատելի կրկնությունն է բանաստեղծական տողի կամ նախադասության մոտ գտնվող բառերում:',
    simpleExplanationEs: 'Consiste en repetir la misma consonante varias veces seguidas para que la frase suene con ritmo y recuerde un ruido real (el viento, el agua, una tormenta).',
    simpleExplanationHy: 'Այն կայանում է նույն բաղաձայնը մի քանի անգամ իրար ետևից կրկնելու մեջ, որպեսզի արտահայտությունը հնչի ռիթմիկ և հիշեցնի իրական ձայն (քամի, ջուր, փոթորիկ):',
    howToRecognizeEs: 'Lee la frase en voz alta con atención: fíjate si una consonante (la r, la s, la l, la b) golpea tu oído insistentemente en casi todas las palabras.',
    howToRecognizeHy: 'Կարդա՛ արտահայտությունը բարձրաձայն. ուշադրությո՛ւն դարձրու, թե արդյոք որևէ բաղաձայն (r, s, l, b) համառորեն զարնվում է ականջիդ գրեթե բոլոր բառերում:',
    confusedWithEs: 'Se confunde habitualmente con la onomatopeya o con la paronomasia.',
    confusedWithHy: 'Սովորաբար շփոթվում է բնաձայնության (onomatopeya) կամ հարանունության (paronomasia) հետ:',
    howToDistinguishEs: 'La aliteración usa palabras normales que tienen su propio significado (como «ruido rueda ronca»), mientras que la onomatopeya inventa ruidos directos («guau», «tic-tac»). Y en la paronomasia se comparan dos palabras concretas casi idénticas («espumas/espuelas»).',
    howToDistinguishHy: 'Բաղաձայնույթն օգտագործում է սովորական իմաստ ունեցող բառեր («ruido rueda ronca»), մինչդեռ բնաձայնությունը հորինում է ուղիղ ձայներ («guau», «tic-tac»): Իսկ հարանունության մեջ համեմատվում են երկու կոնկրետ գրեթե նույնական բառեր («espumas/espuelas»):',
    examples: [
      {
        text: '«El ruido con que rueda la ronca tempestad».',
        textHy: '«Աղմուկը, որով գլորվում է խռպոտ փոթորիկը»:',
        breakdownEs: 'Repetición del sonido /r/ en «ruido», «rueda», «ronca». Evoca el trueno ensordecedor.',
        breakdownHy: '/r/ հնչյունի կրկնություն «ruido», «rueda», «ronca» բառերում: Վերստեղծում է որոտի խլացուցիչ ձայնը:',
        highlight: 'r'
      },
      {
        text: '«En el silencio solo se escuchaba un susurro de abejas que sonaba».',
        textHy: '«Լռության մեջ լսվում էր միայն մեղուների շշուկը, որ հնչում էր»:',
        breakdownEs: 'Repetición del fonema /s/ en «silencio», «solo», «se», «escuchaba», «susurro», «sonaba». Imita el zumbido de las abejas.',
        breakdownHy: '/s/ հնչյունի կրկնություն: Նմանակում է մեղուների մեղմ բզզոցը:',
        highlight: 's'
      },
      {
        text: '«Los claros clarines de pronto levantan sus sones».',
        textHy: '«Պայծառ շեփորները հանկարծ բարձրացնում են իրենց հնչյունները»:',
        breakdownEs: 'Repetición de /kl/ en «claros clarines», sugiriendo el sonido marcial del clarín.',
        breakdownHy: '/kl/ հնչյունի կրկնություն «claros clarines» բառերում՝ հիշեցնելով շեփորի զորական հնչյունը:',
        highlight: 'cl'
      },
      {
        text: '«Mi mamá me mima mucho».',
        textHy: '«Իմ մայրիկը ինձ շատ է փայփայում»:',
        breakdownEs: 'Aliteración cotidiana del fonema /m/, produciendo un ritmo dulce y cariñoso.',
        breakdownHy: '/m/ հնչյունի առօրյա բաղաձայնույթ, որն ստեղծում է քնքուշ և սիրալիր ռիթմ:',
        highlight: 'm'
      },
      {
        text: '«Bajo el ala aleve del leve abanico».',
        textHy: '«Թեթև հովհարի դավաճան թևի տակ»:',
        breakdownEs: 'Repetición de los fonemas /l/ y /b/ transmitiendo ligereza y aire suave.',
        breakdownHy: '/l/ և /b/ հնչյունների կրկնություն՝ փոխանցելով թեթևություն և նուրբ օդ:',
        highlight: 'l'
      },
      {
        text: '«Tres tristes tigres tragaban trigo en un trigal».',
        textHy: '«Երեք տխուր վագրեր ցորեն էին խժռում ցորենի արտում»:',
        breakdownEs: 'Trabalenguas basado íntegramente en la aliteración del grupo consonántico /tr/.',
        breakdownHy: 'Շուտասելուկ՝ ամբողջությամբ կառուցված /tr/ բաղաձայնների կապակցության վրա:',
        highlight: 'tr'
      },
      {
        text: '«Con el ala alelí de la luna».',
        textHy: '«Լուսնի գիշերաբույսի թևով»:',
        breakdownEs: 'Repetición de la consonante líquida /l/, que aporta una melodía etérea.',
        breakdownHy: '/l/ հնչյունի կրկնություն, որը հաղորդում է եթերային մեղեդայնություն:',
        highlight: 'l'
      },
      {
        text: '«La libélula vaga de la vaga ilusión».',
        textHy: '«Անորոշ պատրանքի թափառող ճպուռը»:',
        breakdownEs: 'Repetición cruzada de /l/ y /b/ evocando el vuelo flotante y ondulante del insecto.',
        breakdownHy: '/l/ և /b/ հնչյունների խաչաձև կրկնություն՝ ակնարկելով միջատի ճախրող թռիչքը:',
        highlight: 'l / b'
      }
    ],
    miniTestQuestions: [
      {
        id: 'ali-q1',
        topicId: 'tema-9',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué figura literaria destaca en «El ruido con que rueda la ronca tempestad»?',
        questionHy: 'Ո՞ր գեղարվեստական պատկերն է առանձնանում «El ruido con que rueda la ronca tempestad» տողում:',
        options: [
          { id: 'opt-a', text: 'Aliteración', textHy: 'Բաղաձայնույթ' },
          { id: 'opt-b', text: 'Hipérbaton', textHy: 'Հիպերբատոն' },
          { id: 'opt-c', text: 'Asíndeton', textHy: 'Անշաղկապություն' },
          { id: 'opt-d', text: 'Metáfora', textHy: 'Փոխաբերություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Es una aliteración porque se repite insistentemente el sonido de la letra «r» para sugerir el ruido de la tormenta.',
        explanationHy: 'Սա բաղաձայնույթ է, որովհետև համառորեն կրկնվում է «r» հնչյունը՝ փոթորկի աղմուկն ակնարկելու համար:',
        memoryTipEs: 'Aliteración = repetición de sonidos consonánticos.',
        memoryTipHy: 'Բաղաձայնույթ = բաղաձայն հնչյունների կրկնություն:'
      },
      {
        id: 'ali-q2',
        topicId: 'tema-9',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'choice',
        question: '¿A qué nivel de la lengua pertenece la aliteración?',
        questionHy: 'Լեզվի ո՞ր մակարդակին է պատկանում բաղաձայնույթը:',
        options: [
          { id: 'opt-a', text: 'Nivel fónico (de los sonidos)', textHy: 'Հնչյունական մակարդակ (հնչյունների)' },
          { id: 'opt-b', text: 'Nivel semántico (del significado)', textHy: 'Իմաստային մակարդակ (իմաստի)' },
          { id: 'opt-c', text: 'Nivel morfosintáctico (del orden)', textHy: 'Շարահյուսական մակարդակ (կարգի)' },
          { id: 'opt-d', text: 'Nivel métrico exclusivo', textHy: 'Բացառապես տաղաչափական մակարդակ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La aliteración juega con el sonido de las palabras, por eso pertenece al nivel fónico.',
        explanationHy: 'Բաղաձայնույթը խաղում է բառերի հնչյունների հետ, այդ պատճառով պատկանում է հնչյունական մակարդակին:'
      },
      {
        id: 'ali-q3',
        topicId: 'tema-9',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'identify',
        question: 'En el verso «un susurro de abejas que sonaba», ¿qué sonido se repite para evocar a los insectos?',
        questionHy: '«Un susurro de abejas que sonaba» տողում ո՞ր հնչյունն է կրկնվում միջատներին ակնարկելու համար:',
        options: [
          { id: 'opt-a', text: 'El sonido /s/', textHy: '/s/ հնչյունը' },
          { id: 'opt-b', text: 'El sonido /p/', textHy: '/p/ հնչյունը' },
          { id: 'opt-c', text: 'El sonido /t/', textHy: '/t/ հնչյունը' },
          { id: 'opt-d', text: 'El sonido /g/', textHy: '/g/ հնչյունը' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Se repite el sonido de la /s/ (susurro, abejas, sonaba) imitando el zumbido suave.',
        explanationHy: 'Կրկնվում է /s/ հնչյունը (susurro, sonaba)՝ նմանակելով մեղմ բզզոցը:'
      },
      {
        id: 'ali-q4',
        topicId: 'tema-9',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'compare',
        question: '¿Cuál es la diferencia entre aliteración y onomatopeya?',
        questionHy: 'Ո՞րն է տարբերությունը բաղաձայնույթի և բնաձայնության միջև:',
        options: [
          { id: 'opt-a', text: 'La aliteración repite sonidos en palabras con significado; la onomatopeya imita un ruido real directamente.', textHy: 'Բաղաձայնույթը կրկնում է հնչյուններ իմաստ ունեցող բառերում, իսկ բնաձայնությունն ուղղակիորեն նմանակում է իրական աղմուկը:' },
          { id: 'opt-b', text: 'Son exactamente lo mismo.', textHy: 'Դրանք ճիշտ նույնն են:' },
          { id: 'opt-c', text: 'La aliteración solo existe en prosa.', textHy: 'Բաղաձայնույթը գոյություն ունի միայն արձակում:' },
          { id: 'opt-d', text: 'La onomatopeya altera el orden de la frase.', textHy: 'Բնաձայնությունը փոխում է նախադասության կարգը:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La aliteración usa palabras comunes repartiendo un fonema; la onomatopeya reproduce acústicamente un ruido («pum», «miau»).',
        explanationHy: 'Բաղաձայնույթն օգտագործում է սովորական բառեր՝ բաշխելով հնչյունը, իսկ բնաձայնությունը լսողականորեն վերարտադրում է աղմուկը:'
      },
      {
        id: 'ali-q5',
        topicId: 'tema-9',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'matchexample',
        question: '¿Cuál de los siguientes ejemplos contiene una clara aliteración?',
        questionHy: 'Հետևյալ օրինակներից ո՞րն է պարունակում ակնհայտ բաղաձայնույթ:',
        options: [
          { id: 'opt-a', text: '«Bajo el ala aleve del leve abanico»', textHy: '«Bajo el ala aleve del leve abanico»' },
          { id: 'opt-b', text: '«Lo vi con mis propios ojos»', textHy: '«Lo vi con mis propios ojos»' },
          { id: 'opt-c', text: '«Tus ojos son luceros»', textHy: '«Tus ojos son luceros»' },
          { id: 'opt-d', text: '«Llegué, vi, vencí»', textHy: '«Llegué, vi, vencí»' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'En «Bajo el ala aleve del leve abanico» de Rubén Darío destaca la aliteración de los sonidos /l/ y /b/.',
        explanationHy: 'Այս տողում առանձնանում է /l/ և /b/ հնչյունների բաղաձայնույթը:'
      },
      {
        id: 'ali-q6',
        topicId: 'tema-9',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'truefalse',
        question: 'Verdadero o Falso: «Tres tristes tigres» es un ejemplo popular de aliteración.',
        questionHy: 'Ճի՞շտ է, թե՞ Սխալ. «Tres tristes tigres»-ը բաղաձայնույթի ժողովրդական օրինակ է:',
        options: [
          { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
          { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
          { id: 'opt-c', text: 'Solo si está en una novela culta', textHy: 'Միայն եթե հեղինակային վեպում է' },
          { id: 'opt-d', text: 'Depende de la rima', textHy: 'Կախված է հանգից' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Verdadero. La repetición insistente del grupo /tr/ es una aliteración evidente.',
        explanationHy: 'Ճիշտ է: /tr/ կապակցության համառ կրկնությունն ակնհայտ բաղաձայնույթ է:'
      },
      {
        id: 'ali-q7',
        topicId: 'tema-9',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'finderror',
        question: 'Encuentra el error en esta definición: «La aliteración consiste en repetir una palabra entera al inicio y final del verso».',
        questionHy: 'Գտի՛ր սխալն այս սահմանման մեջ. «Բաղաձայնույթը կայանում է ամբողջական բառը տողի սկզբում և վերջում կրկնելու մեջ»:',
        options: [
          { id: 'opt-a', text: 'Esa es la definición de epanadiplosis, no de aliteración.', textHy: 'Դա էպանադիպլոզիսի սահմանումն է, ոչ թե բաղաձայնույթի:' },
          { id: 'opt-b', text: 'La aliteración solo usa vocales.', textHy: 'Բաղաձայնույթն օգտագործում է միայն ձայնավորներ:' },
          { id: 'opt-c', text: 'No hay ningún error.', textHy: 'Ոչ մի սխալ չկա:' },
          { id: 'opt-d', text: 'Se llama asíndeton.', textHy: 'Դա կոչվում է անշաղկապություն:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Repetir la palabra entera al principio y al final es epanadiplosis. La aliteración repite sonidos consonánticos.',
        explanationHy: 'Ամբողջական բառը սկզբում և վերջում կրկնելը էպանադիպլոզիս է: Բաղաձայնույթը կրկնում է բաղաձայն հնչյուններ:'
      },
      {
        id: 'ali-q8',
        topicId: 'tema-9',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'complete',
        question: 'Completa: La aliteración busca un efecto expresivo y ________ imitando sensaciones de la realidad.',
        questionHy: 'Լրացրո՛ւ. Բաղաձայնույթը ձգտում է արտահայտիչ և ________ ազդեցության՝ նմանակելով իրականության զգացողությունները:',
        options: [
          { id: 'opt-a', text: 'sonoro o acústico', textHy: 'հնչյունային կամ լսողական' },
          { id: 'opt-b', text: 'gramaticalmente incorrecto', textHy: 'քերականորեն սխալ' },
          { id: 'opt-c', text: 'histórico documentado', textHy: 'պատմականորեն փաստագրված' },
          { id: 'opt-d', text: 'completamente silencioso', textHy: 'լիովին լուռ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La aliteración pertenece al plano fónico y crea efectos sonoros y musicales.',
        explanationHy: 'Բաղաձայնույթը պատկանում է հնչյունային մակարդակին և ստեղծում է հնչյունային ու երաժշտական ազդեցություն:'
      },
      {
        id: 'ali-q9',
        topicId: 'tema-9',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'identify',
        question: '¿Qué sonido se reitera en «La dama dorada duerme de día»?',
        questionHy: 'Ո՞ր հնչյունն է կրկնվում «La dama dorada duerme de día» նախադասության մեջ:',
        options: [
          { id: 'opt-a', text: 'El sonido /d/', textHy: '/d/ հնչյունը' },
          { id: 'opt-b', text: 'El sonido /m/', textHy: '/m/ հնչյունը' },
          { id: 'opt-c', text: 'El sonido /r/', textHy: '/r/ հնչյունը' },
          { id: 'opt-d', text: 'El sonido /k/', textHy: '/k/ հնչյունը' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La letra «d» abre cinco palabras consecutivas creando aliteración.',
        explanationHy: '«d» տառը բացում է հինգ հաջորդական բառեր՝ ստեղծելով բաղաձայնույթ:'
      },
      {
        id: 'ali-q10',
        topicId: 'tema-9',
        bloqueId: 4,
        difficulty: 'experto',
        questionType: 'classify',
        question: '¿Por qué la aliteración es un recurso muy utilizado en trabalenguas y poesía infantil?',
        questionHy: 'Ինչո՞ւ է բաղաձայնույթը շատ օգտագործվող հնարք շուտասելուկներում և մանկական պոեզիայում:',
        options: [
          { id: 'opt-a', text: 'Porque su juego rítmico y sonoro facilita el aprendizaje y ejercita la articulación.', textHy: 'Որովհետև նրա ռիթմիկ և հնչյունային խաղը հեշտացնում է ուսուցումը և մարզում արտասանությունը:' },
          { id: 'opt-b', text: 'Porque no tiene reglas gramaticales.', textHy: 'Որովհետև չունի քերականական կանոններ:' },
          { id: 'opt-c', text: 'Porque sustituye a los sustantivos.', textHy: 'Որովհետև փոխարինում է գոյականներին:' },
          { id: 'opt-d', text: 'Porque impide la rima.', textHy: 'Որովհետև խանգարում է հանգին:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La repetición constante de sonidos similares entrena la pronunciación y aporta gran sonoridad lúdica.',
        explanationHy: 'Նմանատիպ հնչյունների մշտական կրկնությունը մարզում է արտասանությունը և հաղորդում խաղային մեծ հնչեղություն:'
      }
    ]
  },

  // 2. ONOMATOPEYA
  {
    id: 'onomatopeya',
    name: 'Onomatopeya',
    nameHy: 'Բնաձայնություն (օնոմատոպեա)',
    level: 'fónico',
    definitionEs: 'La onomatopeya es la representación o imitación gráfica y fonética de un sonido de la naturaleza, de un animal o de un objeto material.',
    definitionHy: 'Բնաձայնությունը բնության, կենդանու կամ նյութական առարկայի ձայնի գրաֆիկական և հնչյունական ներկայացումն է կամ նմանակումը:',
    simpleExplanationEs: 'Es escribir con letras un ruido del mundo real para que el lector lo oiga en su mente («tic-tac», «guau», «pum»).',
    simpleExplanationHy: 'Դա իրական աշխարհի աղմուկը տառերով գրելն է, որպեսզի ընթերցողն այն լսի իր մտքում («տիկ-տակ», «հաֆ», «բում»):',
    howToRecognizeEs: 'Busca palabras que no son nombres comunes ordinarios, sino imitaciones directas de ruidos físicos o voces de animales.',
    howToRecognizeHy: 'Փնտրի՛ր բառեր, որոնք սովորական գոյականներ չեն, այլ ֆիզիկական աղմուկների կամ կենդանիների ձայների ուղղակի նմանակումներ:',
    confusedWithEs: 'Se confunde con la aliteración.',
    confusedWithHy: 'Շփոթվում է բաղաձայնույթի հետ:',
    howToDistinguishEs: 'En la onomatopeya la palabra en sí representa el ruido directo. En la aliteración son palabras normales de la lengua que repiten una consonante.',
    howToDistinguishHy: 'Բնաձայնության մեջ բառն ինքնին ներկայացնում է ուղիղ աղմուկը: Իսկ բաղաձայնույթում դրանք լեզվի սովորական բառեր են, որոնք կրկնում են բաղաձայնը:',
    examples: [
      {
        text: '«Tic-tac, tic-tac, pasaba la medianoche».',
        textHy: '«Տիկ-տակ, տիկ-տակ, անցնում էր կեսգիշերը»:',
        breakdownEs: 'Imita el sonido mecánico del péndulo de un reloj.',
        breakdownHy: 'Նմանակում է ժամացույցի ճոճանակի մեխանիկական ձայնը:',
        highlight: 'tic-tac'
      },
      {
        text: '«El perro avisaba en la tiniebla: ¡guau, guau!».',
        textHy: '«Շունը զգուշացնում էր խավարում. հա՛ֆ, հա՛ֆ»:',
        breakdownEs: 'Reproduce el ladrido canino de alarma.',
        breakdownHy: 'Վերարտադրում է շան տագնապալի հաչոցը:',
        highlight: 'guau, guau'
      },
      {
        text: '«Un disparo en la colina: ¡pum!».',
        textHy: '«Կրակոց բլրի վրա. բո՛ւմ»:',
        breakdownEs: 'Imitación del estampido súbito de un arma de fuego.',
        breakdownHy: 'Հրազենի հանկարծակի որոտի նմանակում:',
        highlight: 'pum'
      },
      {
        text: '«Kikirikí, cantaba el gallo al amanecer».',
        textHy: '«Ծուղրուղո՛ւ, երգում էր աքաղաղը լուսաբացին»:',
        breakdownEs: 'Sonido onomatopéyico del canto del gallo en español.',
        breakdownHy: 'Իսպաներենում աքաղաղի կանչի բնաձայնությունը:',
        highlight: 'kikirikí'
      },
      {
        text: '«El gato dormilón soltó un suave miau».',
        textHy: '«Քնկոտ կատուն մի մեղմ մլավոց արձակեց՝ միա՛ու»:',
        breakdownEs: 'Imitación de la voz del felino doméstico.',
        breakdownHy: 'Ընտանի կատվի ձայնի նմանակում:',
        highlight: 'miau'
      },
      {
        text: '«¡Chas! Se quebró la rama seca bajo sus pies».',
        textHy: '«Չա՛ս: Չոր ճյուղը կոտրվեց նրա ոտքերի տակ»:',
        breakdownEs: 'Imitación del crujido repentino de la madera.',
        breakdownHy: 'Փայտի հանկարծակի ճտճտոցի նմանակում:',
        highlight: 'chas'
      },
      {
        text: '«El agua hacía glu-glu al vaciarse la botella».',
        textHy: '«Ջուրը գլու-գլու էր անում, երբ շիշը դատարկվում էր»:',
        breakdownEs: 'Imitación del líquido al salir a borbotones.',
        breakdownHy: 'Հեղուկի բխկբխկոցի նմանակումը դուրս գալիս:',
        highlight: 'glu-glu'
      },
      {
        text: '«¡Plof! La manzana madura cayó en la hierba fresca».',
        textHy: '«Փլո՛ֆ: Հասած խնձորն ընկավ թարմ խոտի մեջ»:',
        breakdownEs: 'Sonido sordo de una caída blanda.',
        breakdownHy: 'Փափուկ անկման խուլ ձայնը:',
        highlight: 'plof'
      }
    ],
    miniTestQuestions: [
      {
        id: 'ono-q1',
        topicId: 'tema-10',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué figura literaria es «¡pum!» en «Se oyó un ¡pum! en la calle»?',
        questionHy: 'Ի՞նչ գեղարվեստական պատկեր է «¡pum!»-ը «Se oyó un ¡pum! en la calle» նախադասության մեջ:',
        options: [
          { id: 'opt-a', text: 'Onomatopeya', textHy: 'Բնաձայնություն' },
          { id: 'opt-b', text: 'Aliteración', textHy: 'Բաղաձայնույթ' },
          { id: 'opt-c', text: 'Hipérbaton', textHy: 'Հիպերբատոն' },
          { id: 'opt-d', text: 'Pleonasmo', textHy: 'Պլեոնազմ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«¡Pum!» es una onomatopeya porque reproduce el sonido físico de un golpe o explosión.',
        explanationHy: '«¡Pum!»-ը բնաձայնություն է, որովհետև վերարտադրում է հարվածի կամ պայթյունի ֆիզիկական ձայնը:'
      },
      {
        id: 'ono-q2',
        topicId: 'tema-10',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'choice',
        question: '¿Cuál de las siguientes palabras es una onomatopeya?',
        questionHy: 'Հետևյալ բառերից ո՞րն է բնաձայնություն:',
        options: [
          { id: 'opt-a', text: 'Tic-tac', textHy: 'Տիկ-տակ' },
          { id: 'opt-b', text: 'Montaña', textHy: 'Լեռ' },
          { id: 'opt-c', text: 'Hermoso', textHy: 'Գեղեցիկ' },
          { id: 'opt-d', text: 'Caminar', textHy: 'Քայլել' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Tic-tac» imita el sonido del reloj, por lo tanto es una onomatopeya.',
        explanationHy: '«Tic-tac»-ը նմանակում է ժամացույցի ձայնը, ուստի բնաձայնություն է:'
      },
      {
        id: 'ono-q3',
        topicId: 'tema-10',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'truefalse',
        question: 'Verdadero o Falso: Los verbos como «tictaquear» o «cacarear» proceden de onomatopeyas.',
        questionHy: 'Ճի՞շտ է, թե՞ Սխալ. «Tictaquear» կամ «cacarear» նման բայերը ծագում են բնաձայնություններից:',
        options: [
          { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
          { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
          { id: 'opt-c', text: 'Solo en latín', textHy: 'Միայն լատիներենում' },
          { id: 'opt-d', text: 'Son metáforas', textHy: 'Դրանք փոխաբերություններ են' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Verdadero. La lengua crea verbos a partir de la imitación del sonido original.',
        explanationHy: 'Ճիշտ է: Լեզուն բայեր է ստեղծում սկզբնական ձայնի նմանակման հիման վրա:'
      },
      {
        id: 'ono-q4',
        topicId: 'tema-10',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'identify',
        question: '¿Qué sonido reproduce la onomatopeya «kikirikí»?',
        questionHy: 'Ի՞նչ ձայն է վերարտադրում «kikirikí» բնաձայնությունը:',
        options: [
          { id: 'opt-a', text: 'El canto del gallo', textHy: 'Աքաղաղի կանչը' },
          { id: 'opt-b', text: 'El ladrido del perro', textHy: 'Շան հաչոցը' },
          { id: 'opt-c', text: 'El motor de un coche', textHy: 'Մեքենայի շարժիչը' },
          { id: 'opt-d', text: 'El viento entre las hojas', textHy: 'Քամին տերևների մեջ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Kikirikí» es la onomatopeya tradicional del gallo al amanecer.',
        explanationHy: '«Kikirikí»-ն աքաղաղի լուսաբացի ավանդական բնաձայնությունն է:'
      },
      {
        id: 'ono-q5',
        topicId: 'tema-10',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'compare',
        question: 'En la frase «Oí un ¡chof! al caer la piedra en el charco», la palabra «¡chof!» es:',
        questionHy: '«Oí un ¡chof! al caer la piedra en el charco» նախադասության մեջ «¡chof!» բառը հանդիսանում է՝',
        options: [
          { id: 'opt-a', text: 'Una onomatopeya que imita el golpe del agua.', textHy: 'Բնաձայնություն, որը նմանակում է ջրի ճողփյունը:' },
          { id: 'opt-b', text: 'Una metáfora impura.', textHy: 'Ոչ մաքուր փոխաբերություն:' },
          { id: 'opt-c', text: 'Un hipérbaton de lugar.', textHy: 'Տեղի հիպերբատոն:' },
          { id: 'opt-d', text: 'Un romance octosílabo.', textHy: 'Ութավանկ ռոմանս:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«¡Chof!» imita el impacto contra el agua líquida.',
        explanationHy: '«¡Chof!»-ը նմանակում է հարվածը հեղուկ ջրին:'
      },
      {
        id: 'ono-q6',
        topicId: 'tema-10',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'choice',
        question: '¿A qué nivel de las figuras retóricas pertenece la onomatopeya?',
        questionHy: 'Գեղարվեստական պատկերների ո՞ր մակարդակին է պատկանում բնաձայնությունը:',
        options: [
          { id: 'opt-a', text: 'Nivel fónico', textHy: 'Հնչյունական մակարդակ' },
          { id: 'opt-b', text: 'Nivel semántico', textHy: 'Իմաստային մակարդակ' },
          { id: 'opt-c', text: 'Nivel morfosintáctico', textHy: 'Շարահյուսական մակարդակ' },
          { id: 'opt-d', text: 'Nivel pragmático', textHy: 'Պրագմատիկ մակարդակ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Pertenece al nivel fónico porque se fundamenta en los sonidos perceptibles.',
        explanationHy: 'Պատկանում է հնչյունական մակարդակին, քանի որ հիմնված է ընկալելի հնչյունների վրա:'
      },
      {
        id: 'ono-q7',
        topicId: 'tema-10',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'matchexample',
        question: '¿Qué ruido imita la onomatopeya «ring-ring»?',
        questionHy: 'Ի՞նչ աղմուկ է նմանակում «ring-ring» բնաձայնությունը:',
        options: [
          { id: 'opt-a', text: 'El timbre del teléfono o de una campana', textHy: 'Հեռախոսի զանգը կամ զանգակի ղողանջը' },
          { id: 'opt-b', text: 'El maullido de un gato', textHy: 'Կատվի մլավոցը' },
          { id: 'opt-c', text: 'La lluvia al caer', textHy: 'Անձրևի կաթկթոցը' },
          { id: 'opt-d', text: 'El galope de un caballo', textHy: 'Ձիու դոփյունը' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Ring-ring» reproduce el sonido metálico continuo de un timbre.',
        explanationHy: '«Ring-ring»-ը վերարտադրում է զանգակի շարունակական մետաղական ձայնը:'
      },
      {
        id: 'ono-q8',
        topicId: 'tema-10',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'finderror',
        question: '¿Cuál de estas afirmaciones sobre la onomatopeya es FALSA?',
        questionHy: 'Բնաձայնության վերաբերյալ այս պնդումներից ո՞րն է ՍԽԱԼ:',
        options: [
          { id: 'opt-a', text: 'La onomatopeya consiste siempre en cambiar el orden del sujeto y el verbo.', textHy: 'Բնաձայնությունը միշտ կայանում է ենթակայի և բայի կարգը փոխելու մեջ:' },
          { id: 'opt-b', text: 'Imita sonidos reales de animales u objetos.', textHy: 'Նմանակում է կենդանիների կամ իրերի իրական ձայները:' },
          { id: 'opt-c', text: 'Es muy frecuente en el cómic y la literatura infantil.', textHy: 'Շատ հաճախադեպ է կոմիքսներում և մանկական գրականության մեջ:' },
          { id: 'opt-d', text: 'Pertenece al plano fónico.', textHy: 'Պատկանում է հնչյունական մակարդակին:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Cambiar el orden sintáctico es el hipérbaton, no la onomatopeya.',
        explanationHy: 'Շարահյուսական կարգը փոխելը հիպերբատոնն է, ոչ թե բնաձայնությունը:'
      },
      {
        id: 'ono-q9',
        topicId: 'tema-10',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'classify',
        question: 'En los cómics, palabras como «BOOM», «CRASH» o «ZAS» son:',
        questionHy: 'Կոմիքսներում «BOOM», «CRASH» կամ «ZAS» բառերը հանդիսանում են՝',
        options: [
          { id: 'opt-a', text: 'Onomatopeyas visuales y auditivas', textHy: 'Տեսողական և լսողական բնաձայնություններ' },
          { id: 'opt-b', text: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' },
          { id: 'opt-c', text: 'Polisíndeton', textHy: 'Բազմաշաղկապություն' },
          { id: 'opt-d', text: 'Pleonasmos', textHy: 'Պլեոնազմներ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Son las onomatopeyas más universales empleadas para ilustrar ruidos de golpes y explosiones.',
        explanationHy: 'Դրանք հարվածների ու պայթյունների ձայները պատկերող ամենատարածված բնաձայնություններն են:'
      },
      {
        id: 'ono-q10',
        topicId: 'tema-10',
        bloqueId: 4,
        difficulty: 'experto',
        questionType: 'identify',
        question: '¿Qué sonido reproduce «achís»?',
        questionHy: 'Ի՞նչ ձայն է վերարտադրում «achís» բնաձայնությունը:',
        options: [
          { id: 'opt-a', text: 'Un estornudo humano', textHy: 'Մարդկային փռշտոցը' },
          { id: 'opt-b', text: 'El canto de un pájaro', textHy: 'Թռչնի երգը' },
          { id: 'opt-c', text: 'El goteo de un grifo', textHy: 'Ծորակի կաթկթոցը' },
          { id: 'opt-d', text: 'El paso de un tren', textHy: 'Գնացքի անցնելը' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Achís» es la onomatopeya que representa el sonido de un estornudo.',
        explanationHy: '«Achís»-ը փռշտոցի ձայնը ներկայացնող բնաձայնությունն է:'
      }
    ]
  },

  // 3. PARONOMASIA
  {
    id: 'paronomasia',
    name: 'Paronomasia',
    nameHy: 'Հարանունություն (պարոնոմազիա)',
    level: 'fónico',
    definitionEs: 'La paronomasia es la proximidad inmediata en un texto de dos vocablos que se asemejan grandemente en su forma sonora, pero que expresan conceptos divergentes.',
    definitionHy: 'Հարանունությունը տեքստում երկու բառերի անմիջական մերձավորությունն է, որոնք շատ նման են հնչողությամբ, բայց արտահայտում են տարբեր հասկացություններ:',
    simpleExplanationEs: 'Es un juego de palabras usando términos casi idénticos en sonido donde solo varía una letra («hombre / hambre», «presa / prisa»).',
    simpleExplanationHy: 'Դա բառախաղ է գրեթե նույնական հնչող բառերով, որտեղ փոխվում է միայն մեկ տառ («hombre / hambre», «presa / prisa»):',
    howToRecognizeEs: 'Busca dos palabras colocadas muy cerca en la misma frase que suenan prácticamente igual pero significan cosas distintas.',
    howToRecognizeHy: 'Փնտրի՛ր նույն նախադասության մեջ իրար մոտ գտնվող երկու բառեր, որոնք հնչում են գրեթե նույն կերպ, բայց նշանակում են տարբեր բաներ:',
    confusedWithEs: 'Se confunde con la aliteración.',
    confusedWithHy: 'Շփոթվում է բաղաձայնույթի հետ:',
    howToDistinguishEs: 'La paronomasia compara dos palabras precisas con forma parecida («espumas/espuelas»). La aliteración es un sonido repetido a lo largo del verso sin buscar parónimos.',
    howToDistinguishHy: 'Հարանունությունը համեմատում է նման ձև ունեցող երկու կոնկրետ բառեր («espumas/espuelas»): Իսկ բաղաձայնույթը տողի ընթացքում կրկնվող հնչյուն է առանց հարանուններ որոնելու:',
    examples: [
      {
        text: '«Se calzan de espumas por espuelas».',
        author: 'Luis de Góngora',
        textHy: '«Նրանք խթանների փոխարեն փրփուր են հագնում»:',
        breakdownEs: 'Paronomasia nítida entre «espumas» y «espuelas».',
        breakdownHy: 'Հստակ հարանունություն «espumas» (փրփուրներ) և «espuelas» (խթաններ) բառերի միջև:',
        highlight: 'espumas / espuelas'
      },
      {
        text: '«Vendado que me has vendido».',
        author: 'Luis de Góngora',
        textHy: '«Աչքերը կապած, որ ինձ ծախել ես»:',
        breakdownEs: 'Juego sonoro entre «vendado» (ojos cubiertos) y «vendido» (traicionado).',
        breakdownHy: 'Հնչյունային խաղ «vendado» (աչքակապ) և «vendido» (դավաճանված) բառերով:',
        highlight: 'vendado / vendido'
      },
      {
        text: '«Tanta prisa por ver a su presa».',
        textHy: '«Այնքան շտապողականություն՝ իր որսին տեսնելու»:',
        breakdownEs: 'Parónimos «prisa» (urgencia) y «presa» (víctima cazada).',
        breakdownHy: 'Հարանուններ՝ «prisa» (շտապողականություն) և «presa» (որս):',
        highlight: 'prisa / presa'
      },
      {
        text: '«Milicia contra malicia».',
        textHy: '«Զորքն ընդդեմ չարամտության»:',
        breakdownEs: 'Contraste entre «milicia» (ejército) y «malicia» (maldad).',
        breakdownHy: 'Հակադրություն «milicia» (զորք) և «malicia» (չարամտություն) բառերի միջև:',
        highlight: 'milicia / malicia'
      },
      {
        text: '«El erizo se eriza de risa».',
        textHy: '«Ոզնին ծիծաղից ցցվում է»:',
        breakdownEs: 'Juego acústico entre «erizo», «eriza» y «risa».',
        breakdownHy: 'Լսողական խաղ «erizo» (ոզնի), «eriza» (փշաքաղվել) և «risa» (ծիծաղ) բառերով:',
        highlight: 'erizo / eriza / risa'
      },
      {
        text: '«Un hombre de gran hambre».',
        textHy: '«Մեծ քաղց ունեցող մի մարդ»:',
        breakdownEs: 'Variación de la vocal central entre «hombre» y «hambre».',
        breakdownHy: 'Կենտրոնական ձայնավորի փոփոխություն «hombre» (մարդ) և «hambre» (քաղց) բառերի միջև:',
        highlight: 'hombre / hambre'
      },
      {
        text: '«Presidiendo la presa en la prisión».',
        textHy: '«Ղեկավարելով բանտում գտնվող որսը»:',
        breakdownEs: 'Paronomasia múltiple entre «presa» y «prisión».',
        breakdownHy: 'Բազմակի հարանունություն «presa» և «prisión» բառերով:',
        highlight: 'presa / prisión'
      },
      {
        text: '«Con dados ganan condados».',
        textHy: '«Զառերով շահում են կոմսություններ»:',
        breakdownEs: 'Juego fonético ingenioso entre «con dados» y «condados».',
        breakdownHy: 'Հնարամիտ հնչյունական խաղ «con dados» (զառերով) և «condados» (կոմսություններ) արտահայտությունների միջև:',
        highlight: 'con dados / condados'
      }
    ],
    miniTestQuestions: [
      {
        id: 'par-q1',
        topicId: 'tema-11',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué figura literaria hay en «Se calzan de espumas por espuelas»?',
        questionHy: 'Ի՞նչ գեղարվեստական պատկեր կա «Se calzan de espumas por espuelas» տողում:',
        options: [
          { id: 'opt-a', text: 'Paronomasia', textHy: 'Հարանունություն' },
          { id: 'opt-b', text: 'Asíndeton', textHy: 'Անշաղկապություն' },
          { id: 'opt-c', text: 'Pleonasmo', textHy: 'Պլեոնազմ' },
          { id: 'opt-d', text: 'Polisíndeton', textHy: 'Բազմաշաղկապություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Es una paronomasia por la similitud fonética entre «espumas» y «espuelas».',
        explanationHy: 'Սա հարանունություն է «espumas» և «espuelas» բառերի հնչյունական նմանության պատճառով:'
      },
      {
        id: 'par-q2',
        topicId: 'tema-11',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'choice',
        question: '¿Qué define a las palabras que forman una paronomasia?',
        questionHy: 'Ի՞նչն է բնորոշում հարանունություն կազմող բառերին:',
        options: [
          { id: 'opt-a', text: 'Suenan de forma muy parecida pero tienen significados diferentes.', textHy: 'Շատ նման են հնչում, բայց ունեն տարբեր իմաստներ:' },
          { id: 'opt-b', text: 'Son sinónimos exactos.', textHy: 'Ճշգրիտ հոմանիշներ են:' },
          { id: 'opt-c', text: 'Empiezan obligatoriamente por la letra A.', textHy: 'Պարտադիր սկսվում են A տառով:' },
          { id: 'opt-d', text: 'Son siempre verbos en pasado.', textHy: 'Միշտ անցյալ ժամանակի բայեր են:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La paronomasia se basa en la semejanza fonética y la disparidad semántica.',
        explanationHy: 'Հարանունությունը հիմնված է հնչյունական նմանության և իմաստային տարբերության վրա:'
      },
      {
        id: 'par-q3',
        topicId: 'tema-11',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'identify',
        question: 'En «Vendado que me has vendido», ¿cuáles son las palabras parónimas?',
        questionHy: '«Vendado que me has vendido» արտահայտության մեջ որո՞նք են հարանուն բառերը:',
        options: [
          { id: 'opt-a', text: 'Vendado y vendido', textHy: 'Vendado և vendido' },
          { id: 'opt-b', text: 'Que y me', textHy: 'Que և me' },
          { id: 'opt-c', text: 'Has y vendido', textHy: 'Has և vendido' },
          { id: 'opt-d', text: 'Vendado y que', textHy: 'Vendado և que' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Vendado» y «vendido» solo se diferencian en una vocal pero cambian radicalmente de significado.',
        explanationHy: '«Vendado»-ն և «vendido»-ն տարբերվում են միայն մեկ ձայնավորով, բայց արմատապես փոխում են իմաստը:'
      },
      {
        id: 'par-q4',
        topicId: 'tema-11',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'matchexample',
        question: '¿Cuál de los siguientes enunciados es una paronomasia?',
        questionHy: 'Հետևյալ նախադասություններից ո՞րն է հարանունություն:',
        options: [
          { id: 'opt-a', text: '«Milicia contra malicia»', textHy: '«Milicia contra malicia»' },
          { id: 'opt-b', text: '«Tic-tac hace el reloj»', textHy: '«Tic-tac hace el reloj»' },
          { id: 'opt-c', text: '«Verde que te quiero verde»', textHy: '«Verde que te quiero verde»' },
          { id: 'opt-d', text: '«Subir arriba rápidamente»', textHy: '«Subir arriba rápidamente»' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Milicia» y «malicia» forman paronomasia por su gran parecido acústico.',
        explanationHy: '«Milicia»-ն և «malicia»-ն կազմում են հարանունություն իրենց մեծ լսողական նմանությամբ:'
      },
      {
        id: 'par-q5',
        topicId: 'tema-11',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'truefalse',
        question: 'Verdadero o Falso: «Hombre» y «hambre» en la misma frase pueden crear una paronomasia.',
        questionHy: 'Ճի՞շտ է, թե՞ Սխալ. «Hombre» և «hambre» բառերը նույն նախադասության մեջ կարող են հարանունություն ստեղծել:',
        options: [
          { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
          { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
          { id: 'opt-c', text: 'Solo en poesía culta', textHy: 'Միայն բարձրաշխարհիկ պոեզիայում' },
          { id: 'opt-d', text: 'Solo si riman al final', textHy: 'Միայն եթե հանգավորվում են վերջում' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Verdadero: son parónimos perfectos (solo cambia la o por la a).',
        explanationHy: 'Ճիշտ է. դրանք կատարյալ հարանուններ են (միայն o-ն է փոխվում a-ով):'
      },
      {
        id: 'par-q6',
        topicId: 'tema-11',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'finderror',
        question: 'Señala el error: «En la paronomasia se repite exactamente la misma palabra con el mismo significado».',
        questionHy: 'Նշի՛ր սխալը. «Հարանունության մեջ ճշգրտորեն կրկնվում է նույն բառը նույն իմաստով»:',
        options: [
          { id: 'opt-a', text: 'Falso: las palabras deben ser distintas aunque de sonido semejante.', textHy: 'Սխալ է. բառերը պետք է լինեն տարբեր, թեև նմանահունչ:' },
          { id: 'opt-b', text: 'Falso: es una figura de nivel semántico exclusivamente.', textHy: 'Սխալ է. այն բացառապես իմաստային մակարդակի պատկեր է:' },
          { id: 'opt-c', text: 'No hay error.', textHy: 'Սխալ չկա:' },
          { id: 'opt-d', text: 'Solo ocurre con verbos.', textHy: 'Միայն բայերի հետ է տեղի ունենում:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Si fuera la misma palabra repetida sería anáfora o epanadiplosis. En la paronomasia son palabras diferentes.',
        explanationHy: 'Եթե նույն բառը կրկնվեր, կլիներ անաֆորա կամ էպանադիպլոզիս: Հարանունության մեջ դրանք տարբեր բառեր են:'
      },
      {
        id: 'par-q7',
        topicId: 'tema-11',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'complete',
        question: 'La paronomasia es un recurso muy utilizado para crear ________ y dobles sentidos.',
        questionHy: 'Հարանունությունը շատ օգտագործվող հնարք է ________ և երկիմաստություններ ստեղծելու համար:',
        options: [
          { id: 'opt-a', text: 'juegos de palabras humorísticos o ingeniosos', textHy: 'հումորային կամ հնարամիտ բառախաղեր' },
          { id: 'opt-b', text: 'historias de terror medievales', textHy: 'միջնադարյան սարսափ պատմություններ' },
          { id: 'opt-c', text: 'textos científicos sin figuras', textHy: 'գիտական տեքստեր՝ առանց պատկերների' },
          { id: 'opt-d', text: 'listas de compras', textHy: 'գնումների ցուցակներ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Los autores del Siglo de Oro como Góngora y Quevedo la usaban para brillantes juegos de ingenio.',
        explanationHy: 'Ոսկեդարի հեղինակները, ինչպիսիք են Գոնգորան և Կևեդոն, այն օգտագործում էին հնարամտության փայլուն խաղերի համար:'
      },
      {
        id: 'par-q8',
        topicId: 'tema-11',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'identify',
        question: 'En «El erizo se eriza de risa», ¿qué fenómeno retórico destaca?',
        questionHy: '«El erizo se eriza de risa» արտահայտության մեջ ո՞ր հռետորական երևույթն է առանձնանում:',
        options: [
          { id: 'opt-a', text: 'Paronomasia múltiple', textHy: 'Բազմակի հարանունություն' },
          { id: 'opt-b', text: 'Metáfora pura', textHy: 'Մաքուր փոխաբերություն' },
          { id: 'opt-c', text: 'Hipérbaton continuo', textHy: 'Շարունակական հիպերբատոն' },
          { id: 'opt-d', text: 'Polisíndeton', textHy: 'Բազմաշաղկապություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Las palabras «erizo», «eriza» y «risa» comparten una raíz y sonido casi gemelos.',
        explanationHy: '«Erizo», «eriza» և «risa» բառերը կիսում են գրեթե երկվորյակ արմատ և հնչողություն:'
      },
      {
        id: 'par-q9',
        topicId: 'tema-11',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'choice',
        question: '¿Qué tienen en común «adaptar» y «adoptar» si se usan juntas en un poema?',
        questionHy: 'Ի՞նչ ընդհանուր բան ունեն «adaptar» և «adoptar» բառերը, եթե միասին օգտագործվեն բանաստեղծության մեջ:',
        options: [
          { id: 'opt-a', text: 'Forman una paronomasia', textHy: 'Կազմում են հարանունություն' },
          { id: 'opt-b', text: 'Forman una anáfora', textHy: 'Կազմում են անաֆորա' },
          { id: 'opt-c', text: 'Son onomatopeyas', textHy: 'Բնաձայնություններ են' },
          { id: 'opt-d', text: 'Son antónimos directos', textHy: 'Ուղիղ հականիշներ են' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Son parónimos en español y su uso cercano produce paronomasia.',
        explanationHy: 'Դրանք իսպաներենում հարանուններ են, և դրանց մոտ օգտագործումն առաջացնում է հարանունություն:'
      },
      {
        id: 'par-q10',
        topicId: 'tema-11',
        bloqueId: 4,
        difficulty: 'experto',
        questionType: 'classify',
        question: 'La paronomasia pertenece principalmente al nivel:',
        questionHy: 'Հարանունությունը գլխավորապես պատկանում է հետևյալ մակարդակին՝',
        options: [
          { id: 'opt-a', text: 'Fónico, aunque con fuerte impacto en el sentido', textHy: 'Հնչյունական, թեև մեծ ազդեցությամբ իմաստի վրա' },
          { id: 'opt-b', text: 'Morfosintáctico de orden de palabras', textHy: 'Բառերի կարգի շարահյուսական' },
          { id: 'opt-c', text: 'Métrico de rima asonante', textHy: 'Ասոնանս հանգի տաղաչափական' },
          { id: 'opt-d', text: 'Dialectal popular', textHy: 'Ժողովրդական բարբառային' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Nace del parecido sonoro de las palabras (nivel fónico), generando sorpresa semántica.',
        explanationHy: 'Ծնվում է բառերի հնչյունական նմանությունից (հնչյունական մակարդակ)՝ առաջացնելով իմաստային զարմանք:'
      }
    ]
  },

  // 4. EPANADIPLOSIS
  {
    id: 'epanadiplosis',
    name: 'Epanadiplosis',
    nameHy: 'Էպանադիպլոզիս',
    level: 'fónico',
    definitionEs: 'El epanadiplosis es una figura retórica consistente en la repetición de una misma palabra al principio y al final de un mismo verso o frase.',
    definitionHy: 'Էպանադիպլոզիսը հռետորական պատկեր է, որը կայանում է նույն բառը նույն բանաստեղծական տողի կամ նախադասության սկզբում և վերջում կրկնելու մեջ:',
    simpleExplanationEs: 'Empiezas con una palabra y terminas la misma frase exactamente con esa misma palabra (ejemplo: «Verde que te quiero verde»).',
    simpleExplanationHy: 'Սկսում ես մի բառով և նույն նախադասությունն ավարտում ես ճիշտ նույն բառով (օրինակ՝ «Verde que te quiero verde»):',
    howToRecognizeEs: 'Comprueba la PRIMERA y la ÚLTIMA palabra de la MISMA LÍNEA. Si coinciden palabra por palabra, ¡es epanadiplosis sin duda!',
    howToRecognizeHy: 'Ստուգի՛ր ՆՈՒՅՆ ՏՈՂԻ ԱՌԱՋԻՆ և ՎԵՐՋԻՆ բառը: Եթե դրանք բառ առ բառ համընկնում են, ապա դա անկասկած էպանադիպլոզիս է:',
    confusedWithEs: 'Se confunde muy frecuentemente con la anáfora.',
    confusedWithHy: 'Շատ հաճախ շփոթվում է անաֆորայի հետ:',
    howToDistinguishEs: 'La anáfora repite palabras al principio de versos distintos (en vertical). El epanadiplosis repite al principio y al final de un único y mismo verso (en horizontal).',
    howToDistinguishHy: 'Անաֆորան կրկնում է բառերը տարբեր տողերի սկզբում (ուղղահայաց): Էպանադիպլոզիսը կրկնում է մեկ և նույն տողի սկզբում և վերջում (հորիզոնական):',
    examples: [
      {
        text: '«Verde que te quiero verde».',
        author: 'Federico García Lorca',
        textHy: '«Կանաչ, ինչքան եմ քեզ սիրում, կանաչ»:',
        breakdownEs: 'La palabra «verde» abre el verso y lo cierra.',
        breakdownHy: '«Verde» բառը բացում է տողը և փակում այն:',
        highlight: 'Verde ... verde'
      },
      {
        text: '«Silencio de la noche, doloroso silencio».',
        author: 'Rubén Darío',
        textHy: '«Գիշերվա լռություն, ցավոտ լռություն»:',
        breakdownEs: 'Inicia con «silencio» y termina con «silencio».',
        breakdownHy: 'Սկսվում է «silencio»-ով և ավարտվում «silencio»-ով:',
        highlight: 'Silencio ... silencio'
      },
      {
        text: '«Palabras, solo me quedan palabras».',
        textHy: '«Բառեր, ինձ միայն բառեր են մնացել»:',
        breakdownEs: 'Estructura circular envolviendo el dolor con «palabras».',
        breakdownHy: 'Շրջանաձև կառուցվածք՝ ցավը պարուրելով «palabras» (բառեր) բառով:',
        highlight: 'Palabras ... palabras'
      },
      {
        text: '«¡Hurra, cosacos del desierto, hurra!».',
        author: 'Rubén Darío',
        textHy: '«Ուռա՜, անապատի կազակներ, ուռա՜»:',
        breakdownEs: 'El grito «hurra» abre y concluye la exclamación bélica.',
        breakdownHy: '«Hurra» բացականչությունը բացում և ավարտում է ռազմական կանչը:',
        highlight: 'Hurra ... hurra'
      },
      {
        text: '«Perderte fue mi castigo, perderte».',
        textHy: '«Քեզ կորցնելն իմ պատիժն էր, քեզ կորցնելը»:',
        breakdownEs: 'El infinitivo con pronombre abre y cierra el lamento.',
        breakdownHy: 'Դերանունով անորոշ դերբայը բացում և փակում է ողբը:',
        highlight: 'Perderte ... perderte'
      },
      {
        text: '«Amor que todo lo puedes, amor».',
        textHy: '«Սեր, որ ամեն ինչ կարող ես, սեր»:',
        breakdownEs: 'Invocación que encierra la plegaria amorosa.',
        breakdownHy: 'Կոչ, որն ամփոփում է սիրո աղոթքը:',
        highlight: 'Amor ... amor'
      },
      {
        text: '«Llora la guitarra, llora».',
        textHy: '«Լալիս է կիթառը, լալիս է»:',
        breakdownEs: 'Repetición del verbo al inicio y al final del verso corto.',
        breakdownHy: 'Բայի կրկնություն կարճ տողի սկզբում և վերջում:',
        highlight: 'Llora ... llora'
      },
      {
        text: '«Nada queda en esta casa, nada».',
        textHy: '«Ոչինչ չի մնացել այս տան մեջ, ոչինչ»:',
        breakdownEs: 'El pronombre indefinido enfatiza el vacío desolador.',
        breakdownHy: 'Անորոշ դերանունն ընդգծում է ամայացնող դատարկությունը:',
        highlight: 'Nada ... nada'
      }
    ],
    miniTestQuestions: [
      {
        id: 'epa-q1',
        topicId: 'tema-12',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué figura literaria aparece en «Verde que te quiero verde»?',
        questionHy: 'Ի՞նչ գեղարվեստական պատկեր է հանդիպում «Verde que te quiero verde» տողում:',
        options: [
          { id: 'opt-a', text: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' },
          { id: 'opt-b', text: 'Anáfora', textHy: 'Անաֆորա' },
          { id: 'opt-c', text: 'Hipérbaton', textHy: 'Հիպերբատոն' },
          { id: 'opt-d', text: 'Aliteración', textHy: 'Բաղաձայնույթ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Es epanadiplosis porque la palabra «verde» se sitúa al principio y al final del mismo verso.',
        explanationHy: 'Էպանադիպլոզիս է, քանի որ «verde» բառը գտնվում է նույն տողի սկզբում և վերջում:'
      },
      {
        id: 'epa-q2',
        topicId: 'tema-12',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'compare',
        question: '¿En qué se diferencian la anáfora y el epanadiplosis?',
        questionHy: 'Ինչո՞վ են տարբերվում անաֆորան և էպանադիպլոզիսը:',
        options: [
          { id: 'opt-a', text: 'La anáfora repite al inicio de varios versos; el epanadiplosis al principio y final del mismo verso.', textHy: 'Անաֆորան կրկնում է մի քանի տողերի սկզբում, իսկ էպանադիպլոզիսը՝ նույն տողի սկզբում և վերջում:' },
          { id: 'opt-b', text: 'Son nombres sinónimos para el mismo recurso.', textHy: 'Դրանք նույն հնարքի հոմանիշ անվանումներն են:' },
          { id: 'opt-c', text: 'El epanadiplosis solo usa números.', textHy: 'Էպանադիպլոզիսն օգտագործում է միայն թվեր:' },
          { id: 'opt-d', text: 'La anáfora solo se usa en prosa.', textHy: 'Անաֆորան օգտագործվում է միայն արձակում:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La anáfora es vertical (inicio de varios versos), mientras que el epanadiplosis enmarca un solo verso circularmente.',
        explanationHy: 'Անաֆորան ուղղահայաց է (մի քանի տողերի սկիզբ), իսկ էպանադիպլոզիսը շրջանակում է մեկ տողը շրջանաձև:'
      },
      {
        id: 'epa-q3',
        topicId: 'tema-12',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'matchexample',
        question: '¿Cuál de los siguientes versos es un epanadiplosis?',
        questionHy: 'Հետևյալ տողերից ո՞րն է էպանադիպլոզիս:',
        options: [
          { id: 'opt-a', text: '«Silencio de la noche, doloroso silencio»', textHy: '«Silencio de la noche, doloroso silencio»' },
          { id: 'opt-b', text: '«Temprano madrugó la madrugada»', textHy: '«Temprano madrugó la madrugada»' },
          { id: 'opt-c', text: '«Veni, vidi, vici»', textHy: '«Veni, vidi, vici»' },
          { id: 'opt-d', text: '«Subir arriba rápidamente»', textHy: '«Subir arriba rápidamente»' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Empieza por «silencio» y termina por «silencio» en la misma línea.',
        explanationHy: 'Սկսվում է «silencio»-ով և ավարտվում «silencio»-ով նույն տողում:'
      },
      {
        id: 'epa-q4',
        topicId: 'tema-12',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'choice',
        question: '¿Qué esquema representa mejor al epanadiplosis?',
        questionHy: 'Ո՞ր սխեման է լավագույնս ներկայացնում էպանադիպլոզիսը:',
        options: [
          { id: 'opt-a', text: '[Palabra A ... ... ... Palabra A]', textHy: '[Բառ A ... ... ... Բառ A]' },
          { id: 'opt-b', text: '[Palabra A ... / Palabra A ...]', textHy: '[Բառ A ... / Բառ A ...]' },
          { id: 'opt-c', text: '[... Palabra A / ... Palabra A]', textHy: '[... Բառ A / ... Բառ A]' },
          { id: 'opt-d', text: '[Palabra A / Palabra B / Palabra C]', textHy: '[Բառ A / Բառ B / Բառ C]' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Abre y cierra el mismo verso con la misma palabra exacta.',
        explanationHy: 'Բացում և փակում է նույն տողը ճիշտ նույն բառով:'
      },
      {
        id: 'epa-q5',
        topicId: 'tema-12',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'truefalse',
        question: 'Verdadero o Falso: En «¡Hurra, cosacos del desierto, hurra!» hay epanadiplosis.',
        questionHy: 'Ճի՞շտ է, թե՞ Սխալ. «¡Hurra, cosacos del desierto, hurra!» նախադասության մեջ կա էպանադիպլոզիս:',
        options: [
          { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
          { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
          { id: 'opt-c', text: 'Es un hipérbaton', textHy: 'Դա հիպերբատոն է' },
          { id: 'opt-d', text: 'Es una leyenda', textHy: 'Դա լեգենդ է' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Verdadero: «hurra» está al inicio y al final de la frase.',
        explanationHy: 'Ճիշտ է. «hurra»-ն արտահայտության սկզբում և վերջում է:'
      },
      {
        id: 'epa-q6',
        topicId: 'tema-12',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'finderror',
        question: 'Encuentra el error: «Para que haya epanadiplosis, la palabra debe rimar en consonante con el verso siguiente».',
        questionHy: 'Գտի՛ր սխալը. «Որպեսզի լինի էպանադիպլոզիս, բառը պետք է կոնսոնանս հանգավորվի հաջորդ տողի հետ»:',
        options: [
          { id: 'opt-a', text: 'Falso: no depende de la rima externa, sino de repetirse al inicio y final del mismo verso.', textHy: 'Սխալ է. այն կախված չէ արտաքին հանգից, այլ նույն տողի սկզբում և վերջում կրկնվելուց:' },
          { id: 'opt-b', text: 'Falso: solo ocurre en latín.', textHy: 'Սխալ է. միայն լատիներենում է լինում:' },
          { id: 'opt-c', text: 'Es totalmente correcto.', textHy: 'Լիովին ճիշտ է:' },
          { id: 'opt-d', text: 'Se llama sinalefa.', textHy: 'Դա կոչվում է սինալեֆա:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El epanadiplosis no depende del verso siguiente; es un fenómeno interno del propio verso.',
        explanationHy: 'Էպանադիպլոզիսը կախված չէ հաջորդ տողից. այն բուն տողի ներքին երևույթ է:'
      },
      {
        id: 'epa-q7',
        topicId: 'tema-12',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'identify',
        question: '¿Qué palabra crea el epanadiplosis en «Perderte fue mi gran dolor, perderte»?',
        questionHy: 'Ո՞ր բառն է ստեղծում էպանադիպլոզիսը «Perderte fue mi gran dolor, perderte» տողում:',
        options: [
          { id: 'opt-a', text: 'Perderte', textHy: 'Perderte' },
          { id: 'opt-b', text: 'Gran', textHy: 'Gran' },
          { id: 'opt-c', text: 'Dolor', textHy: 'Dolor' },
          { id: 'opt-d', text: 'Fue', textHy: 'Fue' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Perderte» es la palabra idéntica que abre y cierra la oración.',
        explanationHy: '«Perderte»-ն նույնական բառն է, որը բացում և փակում է նախադասությունը:'
      },
      {
        id: 'epa-q8',
        topicId: 'tema-12',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'complete',
        question: 'El epanadiplosis produce una estructura ________ que encierra el mensaje.',
        questionHy: 'Էպանադիպլոզիսն առաջացնում է ________ կառուցվածք, որն ամփոփում է միտքը:',
        options: [
          { id: 'opt-a', text: 'circular o de marco', textHy: 'շրջանաձև կամ շրջանակային' },
          { id: 'opt-b', text: 'incompleta y caótica', textHy: 'թերի և քաոսային' },
          { id: 'opt-c', text: 'en prosa científica', textHy: 'գիտական արձակի' },
          { id: 'opt-d', text: 'sin ningún sentido', textHy: 'առանց որևէ իմաստի' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Al empezar y terminar igual, el verso dibuja un círculo poético cerrado.',
        explanationHy: 'Սկսվելով և ավարտվելով նույն կերպ՝ տողը գծում է փակ բանաստեղծական շրջան:'
      },
      {
        id: 'epa-q9',
        topicId: 'tema-12',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'identify',
        question: 'En «Llora, corazón desolado, llora», ¿qué figura literaria predomina?',
        questionHy: '«Llora, corazón desolado, llora» տողում ո՞ր գեղարվեստական պատկերն է գերիշխում:',
        options: [
          { id: 'opt-a', text: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' },
          { id: 'opt-b', text: 'Asíndeton', textHy: 'Անշաղկապություն' },
          { id: 'opt-c', text: 'Onomatopeya', textHy: 'Բնաձայնություն' },
          { id: 'opt-d', text: 'Hipérbaton', textHy: 'Հիպերբատոն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Llora» abre y cierra el enunciado, constituyendo un epanadiplosis.',
        explanationHy: '«Llora» բառը բացում և փակում է արտահայտությունը՝ կազմելով էպանադիպլոզիս:'
      },
      {
        id: 'epa-q10',
        topicId: 'tema-12',
        bloqueId: 4,
        difficulty: 'experto',
        questionType: 'classify',
        question: '¿Quién escribió el verso más famoso de epanadiplosis en la literatura española: «Verde que te quiero verde»?',
        questionHy: 'Ո՞վ է գրել իսպանական գրականության ամենահայտնի էպանադիպլոզիսի տողը՝ «Verde que te quiero verde»:',
        options: [
          { id: 'opt-a', text: 'Federico García Lorca (Romance sonámbulo)', textHy: 'Ֆեդերիկո Գարսիա Լորկա (Լուսնոտի ռոմանս)' },
          { id: 'opt-b', text: 'Miguel de Cervantes', textHy: 'Միգել դե Սերվանտես' },
          { id: 'opt-c', text: 'Gustavo Adolfo Bécquer', textHy: 'Գուստավո Ադոլֆո Բեկեր' },
          { id: 'opt-d', text: 'Lope de Vega', textHy: 'Լոպե դե Վեգա' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Federico García Lorca en su inmortal «Romancero gitano» inmortalizó este epanadiplosis.',
        explanationHy: 'Ֆեդերիկո Գարսիա Լորկան իր անմահ «Գնչուական ռոմանսերո» գրքում անմահացրեց այս էպանադիպլոզիսը:'
      }
    ]
  },

  // 5. HIPÉRBATON
  {
    id: 'hiperbaton',
    name: 'Hipérbaton',
    nameHy: 'Հիպերբատոն (շարադասության խախտում)',
    level: 'morfosintáctico',
    definitionEs: 'El hipérbaton es la transposición intencionada del orden sintáctico habitual y lógico que las palabras tienen en la cláusula o frase.',
    definitionHy: 'Հիպերբատոնը նախադասության մեջ բառերի ունեցած սովորական և տրամաբանական շարահյուսական կարգի միտումնավոր տեղաշարժն է:',
    simpleExplanationEs: 'Consiste en desordenar el orden normal de la frase (Sujeto + Verbo + Complementos) para que suene más poético o encaje en el verso.',
    simpleExplanationHy: 'Այն կայանում է նախադասության սովորական կարգը (Ենթակա + Բայ + Լրացումներ) խախտելու մեջ՝ ավելի բանաստեղծական հնչելու կամ տողին հարմարվելու համար:',
    howToRecognizeEs: 'Reordena la frase en tu cabeza: si el verbo está al principio de todo y el sujeto al final, o los complementos están separados por la mitad, es hipérbaton.',
    howToRecognizeHy: 'Վերադասավորի՛ր նախադասությունը մտքումդ. եթե բայը բոլորից առաջ է, իսկ ենթական՝ վերջում, կամ լրացումները մեջտեղից կտրված են, ապա դա հիպերբատոն է:',
    confusedWithEs: 'A veces se confunde con el asíndeton o simplemente con un error de redacción.',
    confusedWithHy: 'Երբեմն շփոթվում է անշաղկապության կամ պարզապես շարադրանքի սխալի հետ:',
    howToDistinguishEs: 'El asíndeton quita conjunciones («y, ni»). El hipérbaton no quita palabras, solo cambia su posición de sitio.',
    howToDistinguishHy: 'Անշաղկապությունը հանում է շաղկապները («y, ni»): Հիպերբատոնը բառեր չի հանում, այլ միայն փոխում է դրանց տեղը:',
    examples: [
      {
        text: '«Volverán las oscuras golondrinas en tu balcón sus nidos a colgar».',
        author: 'Gustavo Adolfo Bécquer',
        textHy: '«Կվերադառնան մութ ծիծեռնակները քո պատշգամբում իրենց բները կախելու»:',
        breakdownEs: 'Orden normal: «Las oscuras golondrinas volverán a colgar sus nidos en tu balcón». El verbo va al inicio y el balcón se intercala en la perífrasis.',
        breakdownHy: 'Սովորական կարգ. «Las oscuras golondrinas volverán a colgar sus nidos en tu balcón»: Բայը դրված է սկզբում, իսկ պատշգամբը ներմուծված է հարադրության մեջ:',
        highlight: 'Volverán ... a colgar'
      },
      {
        text: '«De verdes sauces hay una espesura».',
        author: 'Garcilaso de la Vega',
        textHy: '«Կանաչ ուռիների կա մի խիտ թավուտ»:',
        breakdownEs: 'Orden normal: «Hay una espesura de verdes sauces». El complemento del nombre se antepone al núcleo y al verbo.',
        breakdownHy: 'Սովորական կարգ. «Hay una espesura de verdes sauces»: Որոշիչը առաջ է ընկնում որոշյալից և բայից:',
        highlight: 'De verdes sauces hay...'
      },
      {
        text: '«Cerca del Tajo en soledad amena».',
        author: 'Garcilaso de la Vega',
        textHy: '«Տախոյի մոտ՝ հաճելի մենության մեջ»:',
        breakdownEs: 'Orden normal: «En soledad amena cerca del Tajo». Desplaza los complementos circunstanciales.',
        breakdownHy: 'Սովորական կարգ. «En soledad amena cerca del Tajo»: Տեղաշարժում է տեղի պարագաները:',
        highlight: 'Cerca del Tajo...'
      },
      {
        text: '«Pasos de un peregrino son, errante».',
        author: 'Luis de Góngora',
        textHy: '«Ուխտավորի քայլեր են դրանք, թափառող»:',
        breakdownEs: 'Orden normal: «Son pasos de un peregrino errante». Separa «peregrino» de su adjetivo «errante».',
        breakdownHy: 'Սովորական կարգ. «Son pasos de un peregrino errante»: Բաժանում է «peregrino» գոյականն իր «errante» ածականից:',
        highlight: 'Pasos ... errante'
      },
      {
        text: '«Inés, tus bellos ojos ya no me miran».',
        textHy: '«Ինե՛ս, քո գեղեցիկ աչքերն այլևս ինձ չեն նայում»:',
        breakdownEs: 'El orden está levemente invertido para abrir con la invocación poética.',
        breakdownHy: 'Կարգը թեթևակի շրջված է՝ բանաստեղծական կոչով բացելու համար:',
        highlight: 'Inés, tus bellos ojos...'
      },
      {
        text: '«Del monte en la ladera por mi mano plantado tengo un huerto».',
        author: 'Fray Luis de León',
        textHy: '«Լեռան լանջին իմ ձեռքով տնկված մի այգի ունեմ»:',
        breakdownEs: 'Orden normal: «Tengo un huerto plantado por mi mano en la ladera del monte». Hipérbaton complejo bellísimo.',
        breakdownHy: 'Սովորական կարգ. «Tengo un huerto plantado por mi mano en la ladera del monte»: Շատ գեղեցիկ բարդ հիպերբատոն:',
        highlight: 'Del monte en la ladera...'
      },
      {
        text: '«A Dafne ya los brazos le crecían».',
        author: 'Garcilaso de la Vega',
        textHy: '«Դաֆնեի արդեն թևերն էին աճում»:',
        breakdownEs: 'Orden normal: «Los brazos ya le crecían a Dafne». El objeto indirecto se antepone al sujeto.',
        breakdownHy: 'Սովորական կարգ. «Los brazos ya le crecían a Dafne»: Հանգման անուղղակի խնդիրը դրված է ենթակայից առաջ:',
        highlight: 'A Dafne ya...'
      },
      {
        text: '«Pidiendo perdón al cielo llegó el viajero».',
        textHy: '«Երկնքից ներում հայցելով եկավ ճանապարհորդը»:',
        breakdownEs: 'Orden habitual: «El viajero llegó pidiendo perdón al cielo». El gerundio y el verbo preceden al sujeto.',
        breakdownHy: 'Սովորական կարգ. «El viajero llegó pidiendo perdón al cielo»: Համակատար դերբայը և բայը նախորդում են ենթակային:',
        highlight: 'Pidiendo ... llegó el viajero'
      }
    ],
    miniTestQuestions: [
      {
        id: 'hip-q1',
        topicId: 'tema-13',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué figura literaria altera el orden habitual de las palabras en la oración?',
        questionHy: 'Ո՞ր գեղարվեստական պատկերն է խախտում նախադասության մեջ բառերի սովորական կարգը:',
        options: [
          { id: 'opt-a', text: 'Hipérbaton', textHy: 'Հիպերբատոն' },
          { id: 'opt-b', text: 'Aliteración', textHy: 'Բաղաձայնույթ' },
          { id: 'opt-c', text: 'Onomatopeya', textHy: 'Բնաձայնություն' },
          { id: 'opt-d', text: 'Pleonasmo', textHy: 'Պլեոնազմ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El hipérbaton es la figura que modifica la sintaxis usual.',
        explanationHy: 'Հիպերբատոնն այն պատկերն է, որը փոփոխում է սովորական շարահյուսությունը:'
      },
      {
        id: 'hip-q2',
        topicId: 'tema-13',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'identify',
        question: 'En «Volverán las oscuras golondrinas en tu balcón sus nidos a colgar», ¿cuál sería el orden natural?',
        questionHy: '«Volverán las oscuras golondrinas en tu balcón sus nidos a colgar» տողում ո՞րը կլիներ բնական կարգը:',
        options: [
          { id: 'opt-a', text: 'Las oscuras golondrinas volverán a colgar sus nidos en tu balcón.', textHy: 'Las oscuras golondrinas volverán a colgar sus nidos en tu balcón.' },
          { id: 'opt-b', text: 'Sus nidos volverán en tu balcón colgar golondrinas oscuras.', textHy: 'Sus nidos volverán en tu balcón colgar golondrinas oscuras.' },
          { id: 'opt-c', text: 'En tu balcón volverán las golondrinas nidos oscuras.', textHy: 'En tu balcón volverán las golondrinas nidos oscuras.' },
          { id: 'opt-d', text: 'Colgar volverán nidos golondrinas balcón.', textHy: 'Colgar volverán nidos golondrinas balcón.' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Sujeto (Las oscuras golondrinas) + Verbo (volverán a colgar) + Objeto directo (sus nidos) + Complemento circunstancial (en tu balcón).',
        explanationHy: 'Ենթակա + Բայ + Ուղիղ խնդիր + Տեղի պարագա:'
      },
      {
        id: 'hip-q3',
        topicId: 'tema-13',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'choice',
        question: '¿A qué nivel de las figuras retóricas pertenece el hipérbaton?',
        questionHy: 'Գեղարվեստական պատկերների ո՞ր մակարդակին է պատկանում հիպերբատոնը:',
        options: [
          { id: 'opt-a', text: 'Nivel morfosintáctico (gramática y orden)', textHy: 'Շարահյուսական մակարդակ (քերականություն և կարգ)' },
          { id: 'opt-b', text: 'Nivel fónico (sonidos)', textHy: 'Հնչյունական մակարդակ (հնչյուններ)' },
          { id: 'opt-c', text: 'Nivel semántico (significado figurado)', textHy: 'Իմաստային մակարդակ (փոխաբերական իմաստ)' },
          { id: 'opt-d', text: 'Nivel léxico popular', textHy: 'Ժողովրդական բառային մակարդակ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Al modificar la sintaxis de la frase, se encuadra en el nivel morfosintáctico.',
        explanationHy: 'Նախադասության շարահյուսությունը փոխելով՝ այն դասվում է շարահյուսական մակարդակին:'
      },
      {
        id: 'hip-q4',
        topicId: 'tema-13',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'matchexample',
        question: '¿Cuál de estos versos presenta un hipérbaton?',
        questionHy: 'Այս տողերից ո՞րն է պարունակում հիպերբատոն:',
        options: [
          { id: 'opt-a', text: '«De verdes sauces hay una espesura»', textHy: '«De verdes sauces hay una espesura»' },
          { id: 'opt-b', text: '«Miau, miau decía el gato»', textHy: '«Miau, miau decía el gato»' },
          { id: 'opt-c', text: '«Lo vi con mis propios ojos»', textHy: '«Lo vi con mis propios ojos»' },
          { id: 'opt-d', text: '«Y ríe y canta y baila»', textHy: '«Y ríe y canta y baila»' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«De verdes sauces hay una espesura» antepone el complemento preposicional al verbo y al sujeto.',
        explanationHy: 'Այս տողում նախդիրավոր լրացումը դրված է բայից և ենթակայից առաջ:'
      },
      {
        id: 'hip-q5',
        topicId: 'tema-13',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'truefalse',
        question: 'Verdadero o Falso: El hipérbaton se usaba mucho en la poesía clásica para imitar la sintaxis del latín.',
        questionHy: 'Ճի՞շտ է, թե՞ Սխալ. Հիպերբատոնը շատ էր օգտագործվում դասական պոեզիայում լատիներենի շարահյուսությունը նմանակելու համար:',
        options: [
          { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
          { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
          { id: 'opt-c', text: 'Solo en prosa moderna', textHy: 'Միայն ժամանակակից արձակում' },
          { id: 'opt-d', text: 'Nunca se usó en España', textHy: 'Երբեք չի օգտագործվել Իսպանիայում' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Verdadero: los poetas renacentistas y barrocos lo empleaban para dar prestigio latino al castellano.',
        explanationHy: 'Ճիշտ է. Վերածննդի և բարոկկոյի բանաստեղծներն այն կիրառում էին կաստիլերենին լատինական հեղինակություն հաղորդելու համար:'
      },
      {
        id: 'hip-q6',
        topicId: 'tema-13',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'finderror',
        question: 'Señala la afirmación errónea sobre el hipérbaton:',
        questionHy: 'Նշի՛ր հիպերբատոնի մասին սխալ պնդումը:',
        options: [
          { id: 'opt-a', text: 'El hipérbaton consiste en inventar palabras nuevas que no existen en el diccionario.', textHy: 'Հիպերբատոնը կայանում է բառարանում գոյություն չունեցող նոր բառեր հորինելու մեջ:' },
          { id: 'opt-b', text: 'Modifica el orden sintáctico habitual.', textHy: 'Փոխում է սովորական շարահյուսական կարգը:' },
          { id: 'opt-c', text: 'Sirve para destacar la palabra que se adelanta.', textHy: 'Ծառայում է առաջ բերված բառն ընդգծելուն:' },
          { id: 'opt-d', text: 'Bécquer lo utilizó en sus famosas rimas.', textHy: 'Բեկերն այն օգտագործել է իր հայտնի հանգերում:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El hipérbaton no inventa palabras (eso sería neologismo), solo cambia de sitio palabras existentes.',
        explanationHy: 'Հիպերբատոնը նոր բառեր չի հորինում, այլ միայն փոխում է գոյություն ունեցող բառերի տեղը:'
      },
      {
        id: 'hip-q7',
        topicId: 'tema-13',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'identify',
        question: 'En «Del monte en la ladera por mi mano plantado tengo un huerto», ¿qué figura literaria predomina?',
        questionHy: '«Del monte en la ladera por mi mano plantado tengo un huerto» տողում ո՞ր գեղարվեստական պատկերն է գերիշխում:',
        options: [
          { id: 'opt-a', text: 'Hipérbaton', textHy: 'Հիպերբատոն' },
          { id: 'opt-b', text: 'Polisíndeton', textHy: 'Բազմաշաղկապություն' },
          { id: 'opt-c', text: 'Onomatopeya', textHy: 'Բնաձայնություն' },
          { id: 'opt-d', text: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Es un hipérbaton mayúsculo de Fray Luis de León con los complementos totalmente adelantados.',
        explanationHy: 'Ֆրայ Լուիս դե Լեոնի հսկայական հիպերբատոնն է՝ լրացումները լիովին առաջ բերված:'
      },
      {
        id: 'hip-q8',
        topicId: 'tema-13',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'complete',
        question: 'El orden habitual de la oración en español es ________ + Verbo + Complementos.',
        questionHy: 'Իսպաներենում նախադասության սովորական կարգն է՝ ________ + Բայ + Լրացումներ:',
        options: [
          { id: 'opt-a', text: 'Sujeto', textHy: 'Ենթակա' },
          { id: 'opt-b', text: 'Interjección', textHy: 'Ձայնարկություն' },
          { id: 'opt-c', text: 'Punto y coma', textHy: 'Կետ-ստորակետ' },
          { id: 'opt-d', text: 'Onomatopeya', textHy: 'Բնաձայնություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El orden lógico neutro en castellano es Sujeto + Verbo + Complementos.',
        explanationHy: 'Իսպաներենում չեզոք տրամաբանական կարգն է Ենթակա + Բայ + Լրացումներ:'
      },
      {
        id: 'hip-q9',
        topicId: 'tema-13',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'classify',
        question: '¿Qué personaje popular de la cultura del cine habla con continuo hipérbaton?',
        questionHy: 'Կինոմշակույթի ո՞ր հայտնի կերպարն է խոսում մշտական հիպերբատոնով:',
        options: [
          { id: 'opt-a', text: 'Yoda (Star Wars)', textHy: 'Յոդան (Աստղային պատերազմներ)' },
          { id: 'opt-b', text: 'Harry Potter', textHy: 'Հարրի Փոթերը' },
          { id: 'opt-c', text: 'Sherlock Holmes', textHy: 'Շերլոկ Հոլմսը' },
          { id: 'opt-d', text: 'Don Quijote', textHy: 'Դոն Կիխոտը' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El maestro Yoda utiliza siempre hipérbaton alterando el orden del verbo y complementos.',
        explanationHy: 'Յոդա վարպետը միշտ հիպերբատոն է կիրառում՝ փոխելով բայի և լրացումների կարգը:'
      },
      {
        id: 'hip-q10',
        topicId: 'tema-13',
        bloqueId: 4,
        difficulty: 'experto',
        questionType: 'identify',
        question: 'En «A Dafne ya los brazos le crecían», ¿cuál es el sujeto gramatical de la oración?',
        questionHy: '«A Dafne ya los brazos le crecían» նախադասության մեջ ո՞րն է քերականական ենթական:',
        options: [
          { id: 'opt-a', text: 'Los brazos', textHy: 'Los brazos (թևերը)' },
          { id: 'opt-b', text: 'A Dafne', textHy: 'A Dafne (Դաֆնեին)' },
          { id: 'opt-c', text: 'Ya', textHy: 'Ya (արդեն)' },
          { id: 'opt-d', text: 'Le', textHy: 'Le' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El sujeto son «los brazos» (concuerda en plural con «crecían»). Está colocado tras el complemento indirecto por hipérbaton.',
        explanationHy: 'Ենթական «los brazos»-ն է (համաձայնում է հոգնակի թվով «crecían»-ի հետ): Հիպերբատոնի պատճառով դրված է անուղղակի խնդրից հետո:'
      }
    ]
  },

  // 6. ANÁFORA
  {
    id: 'anafora',
    name: 'Anáfora',
    nameHy: 'Անաֆորա (առաջնակրկնություն)',
    level: 'morfosintáctico',
    definitionEs: 'La anáfora es la reiteración sistemática de una o varias palabras al comienzo de dos o más versos, estrofas o frases sucesivas.',
    definitionHy: 'Անաֆորան մեկ կամ մի քանի բառերի համակարգված կրկնությունն է երկու կամ ավելի հաջորդական տողերի, տների կամ նախադասությունների սկզբում:',
    simpleExplanationEs: 'Consiste en empezar varios versos seguidos con la misma palabra exacta (ej: verso 1 empieza por «Temprano...», verso 2 por «Temprano...»).',
    simpleExplanationHy: 'Այն կայանում է մի քանի հաջորդական տողեր ճիշտ նույն բառով սկսելու մեջ (օր.՝ տող 1-ը սկսվում է «Temprano...», տող 2-ը՝ «Temprano...»):',
    howToRecognizeEs: 'Mira verticalmente el inicio de cada verso: si la primera palabra se repite renglón tras renglón, es anáfora.',
    howToRecognizeHy: 'Ուղղահայաց նայի՛ր յուրաքանչյուր տողի սկզբին. եթե առաջին բառը կրկնվում է տող առ տող, ապա դա անաֆորա է:',
    confusedWithEs: 'Se confunde habitualmente con el epanadiplosis.',
    confusedWithHy: 'Սովորաբար շփոթվում է էպանադիպլոզիսի հետ:',
    howToDistinguishEs: 'La anáfora se repite en VERSOS DISTINTOS al principio de cada uno. El epanadiplosis ocurre al principio y al final del MISMO VERSO.',
    howToDistinguishHy: 'Անաֆորան կրկնվում է ՏԱՐԲԵՐ ՏՈՂԵՐԻ սկզբում: Իսկ էպանադիպլոզիսը տեղի է ունենում ՆՈՒՅՆ ՏՈՂԻ սկզբում և վերջում:',
    examples: [
      {
        text: '«Temprano levantó la muerte el vuelo,\ntemprano madrugó la madrugada,\ntemprano estás rodando por el suelo».',
        author: 'Miguel Hernández',
        textHy: '«Վաղ բարձրացրեց մահը թռիչքը,\nվաղ լուսացավ լուսաբացը,\nվաղ ես գլորվում գետնին»:',
        breakdownEs: 'Tres versos consecutivos inician con el adverbio «temprano», transmitiendo desgarrador dolor.',
        breakdownHy: 'Երեք հաջորդական տողեր սկսվում են «temprano» մակբայով՝ փոխանցելով սրտաճմլիկ ցավ:',
        highlight: 'Temprano ... / temprano ... / temprano ...'
      },
      {
        text: '«Salid fuera sin duelo,\nsalid sin duelo, lágrimas corriendo».',
        author: 'Garcilaso de la Vega',
        textHy: '«Դո՛ւրս ելեք առանց վշտի,\nդո՛ւրս ելեք առանց վշտի, արցունքներ հոսող»:',
        breakdownEs: 'Ambos versos comienzan con la misma forma verbal «salid».',
        breakdownHy: 'Երկու տողերն էլ սկսվում են նույն «salid» բայաձևով:',
        highlight: 'Salid ... / salid ...'
      },
      {
        text: '«Por ti la verde hierba, el fresco viento,\npor ti el dulce murmurar del agua».',
        author: 'Garcilaso de la Vega',
        textHy: '«Քեզ համար՝ կանաչ խոտը, զով քամին,\nքեզ համար՝ ջրի քաղցր մրմունջը»:',
        breakdownEs: 'Repetición anafórica de la locución «por ti» al inicio de cada línea.',
        breakdownHy: '«Por ti» (քեզ համար) կապակցության անաֆորիկ կրկնություն յուրաքանչյուր տողի սկզբում:',
        highlight: 'Por ti ... / por ti ...'
      },
      {
        text: '«No perdono a la muerte enamorada,\nno perdono a la vida desatenta,\nno perdono a la tierra ni a la nada».',
        author: 'Miguel Hernández',
        textHy: '«Չեմ ներում սիրահարված մահվանը,\nչեմ ներում անուշադիր կյանքին,\nչեմ ներում հողին և ոչ էլ ոչնչին»:',
        breakdownEs: 'Repetición de la fórmula «no perdono» enfatizando la rebelión contra el destino.',
        breakdownHy: '«No perdono» (չեմ ներում) բանաձևի կրկնություն՝ ընդգծելով ըմբոստությունը ճակատագրի դեմ:',
        highlight: 'No perdono ...'
      },
      {
        text: '«Mientras el corazón y la cabeza batallando prosigan;\nmientras los ojos desconsolados lloren;\nmientras haya un misterio para el hombre...».',
        author: 'Gustavo Adolfo Bécquer',
        textHy: '«Քանի դեռ սիրտն ու գլուխը կռվելով կշարունակեն,\nքանի դեռ անմխիթար աչքերը լաց կլինեն,\nքանի դեռ մարդու համար գաղտնիք կա...»:',
        breakdownEs: 'Anáfora con la conjunción temporal «mientras».',
        breakdownHy: 'Անաֆորա «mientras» (քանի դեռ) ժամանակի շաղկապով:',
        highlight: 'Mientras ...'
      },
      {
        text: '«Aquí me pongo a cantar,\naquí me pongo a soñar».',
        textHy: '«Այստեղ ես սկսում եմ երգել,\nայստեղ ես սկսում եմ երազել»:',
        breakdownEs: 'Repetición del adverbio deíctico «aquí».',
        breakdownHy: '«Aquí» (այստեղ) ցուցական մակբայի կրկնություն:',
        highlight: 'Aquí ...'
      },
      {
        text: '«Quién supiera escribir,\nquién pudiera decir...».',
        textHy: '«Ով իմանար գրել,\nով կարողանար ասել...»:',
        breakdownEs: 'Inicio idéntico con el pronombre interrogativo/exclamativo «quién».',
        breakdownHy: 'Նույնական սկիզբ «quién» դերանունով:',
        highlight: 'Quién ...'
      },
      {
        text: '«Todo lo llena tu recuerdo,\ntodo lo calla tu ausencia».',
        textHy: '«Ամեն ինչ լցնում է քո հիշատակը,\nամեն ինչ լռեցնում է քո բացակայությունը»:',
        breakdownEs: 'Anáfora con el pronombre «todo».',
        breakdownHy: 'Անաֆորա «todo» (ամեն ինչ) դերանունով:',
        highlight: 'Todo ...'
      }
    ],
    miniTestQuestions: [
      {
        id: 'ana-q1',
        topicId: 'tema-14',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué figura literaria consiste en repetir palabras al inicio de versos consecutivos?',
        questionHy: 'Ո՞ր գեղարվեստական պատկերն է կայանում հաջորդական տողերի սկզբում բառեր կրկնելու մեջ:',
        options: [
          { id: 'opt-a', text: 'Anáfora', textHy: 'Անաֆորա' },
          { id: 'opt-b', text: 'Hipérbaton', textHy: 'Հիպերբատոն' },
          { id: 'opt-c', text: 'Onomatopeya', textHy: 'Բնաձայնություն' },
          { id: 'opt-d', text: 'Metáfora', textHy: 'Փոխաբերություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La anáfora repite palabras al comienzo de dos o más versos.',
        explanationHy: 'Անաֆորան կրկնում է բառերը երկու կամ ավելի տողերի սկզբում:'
      },
      {
        id: 'ana-q2',
        topicId: 'tema-14',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: 'En los versos de Miguel Hernández:\n«Temprano levantó la muerte el vuelo,\ntemprano madrugó la madrugada»,\n¿qué figura literaria aparece?',
        questionHy: 'Միգել Էրնանդեսի այս տողերում ո՞ր գեղարվեստական պատկերն է հանդիպում:',
        options: [
          { id: 'opt-a', text: 'Anáfora', textHy: 'Անաֆորա' },
          { id: 'opt-b', text: 'Asíndeton', textHy: 'Անշաղկապություն' },
          { id: 'opt-c', text: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' },
          { id: 'opt-d', text: 'Paronomasia', textHy: 'Հարանունություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Aparece la palabra «temprano» al inicio de ambos versos, constituyendo anáfora.',
        explanationHy: '«Temprano» բառը հայտնվում է երկու տողերի սկզբում՝ կազմելով անաֆորա:'
      },
      {
        id: 'ana-q3',
        topicId: 'tema-14',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'compare',
        question: '¿Por qué «Verde que te quiero verde» NO es una anáfora?',
        questionHy: 'Ինչո՞ւ «Verde que te quiero verde»-ն անաֆորա ՉԷ:',
        options: [
          { id: 'opt-a', text: 'Porque la repetición ocurre en el mismo verso (inicio y final), lo cual es epanadiplosis.', textHy: 'Որովհետև կրկնությունը տեղի է ունենում նույն տողում (սկզբում և վերջում), ինչը էպանադիպլոզիս է:' },
          { id: 'opt-b', text: 'Porque la palabra verde es un adjetivo.', textHy: 'Որովհետև verde բառն ածական է:' },
          { id: 'opt-c', text: 'Porque está en minúscula.', textHy: 'Որովհետև փոքրատառով է:' },
          { id: 'opt-d', text: 'Porque es una novela.', textHy: 'Որովհետև դա վեպ է:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La anáfora exige versos distintos; el epanadiplosis ocurre al abrir y cerrar la misma línea.',
        explanationHy: 'Անաֆորան պահանջում է տարբեր տողեր. էպանադիպլոզիսը տեղի է ունենում նույն տողը բացելիս և փակելիս:'
      },
      {
        id: 'ana-q4',
        topicId: 'tema-14',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'matchexample',
        question: '¿Cuál de estos ejemplos contiene anáfora?',
        questionHy: 'Այս օրինակներից ո՞րն է պարունակում անաֆորա:',
        options: [
          { id: 'opt-a', text: '«Por ti el silencio, / por ti el suspiro»', textHy: '«Por ti el silencio, / por ti el suspiro»' },
          { id: 'opt-b', text: '«Veni, vidi, vici»', textHy: '«Veni, vidi, vici»' },
          { id: 'opt-c', text: '«El tic-tac del reloj»', textHy: '«El tic-tac del reloj»' },
          { id: 'opt-d', text: '«De verdes sauces hay espesura»', textHy: '«De verdes sauces hay espesura»' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Ambos versos inician con la locución «por ti».',
        explanationHy: 'Երկու տողերն էլ սկսվում են «por ti» կապակցությամբ:'
      },
      {
        id: 'ana-q5',
        topicId: 'tema-14',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'choice',
        question: '¿A qué nivel de las figuras retóricas pertenece la anáfora?',
        questionHy: 'Գեղարվեստական պատկերների ո՞ր մակարդակին է պատկանում անաֆորան:',
        options: [
          { id: 'opt-a', text: 'Nivel morfosintáctico (repetición estructural)', textHy: 'Շարահյուսական մակարդակ (կառուցվածքային կրկնություն)' },
          { id: 'opt-b', text: 'Nivel fónico exclusivo', textHy: 'Բացառապես հնչյունական մակարդակ' },
          { id: 'opt-c', text: 'Nivel semántico de metáfora', textHy: 'Փոխաբերության իմաստային մակարդակ' },
          { id: 'opt-d', text: 'Nivel métrico de rima', textHy: 'Հանգի տաղաչափական մակարդակ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La anáfora es una figura de repetición sintáctica al inicio de cláusulas.',
        explanationHy: 'Անաֆորան շարահյուսական կրկնության պատկեր է նախադասությունների սկզբում:'
      },
      {
        id: 'ana-q6',
        topicId: 'tema-14',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'truefalse',
        question: 'Verdadero o Falso: La anáfora puede repetir más de una palabra (por ejemplo una locución entera como «No perdono a»).',
        questionHy: 'Ճի՞շտ է, թե՞ Սխալ. Անաֆորան կարող է կրկնել մեկից ավելի բառ (օրինակ՝ ամբողջական կապակցություն, ինչպես «No perdono a»):',
        options: [
          { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
          { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
          { id: 'opt-c', text: 'Solo en oraciones interrogativas', textHy: 'Միայն հարցական նախադասություններում' },
          { id: 'opt-d', text: 'Solo si tiene 8 sílabas', textHy: 'Միայն եթե ունի 8 վանկ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Verdadero: puede ser una sola palabra o una frase entera repetida al inicio.',
        explanationHy: 'Ճիշտ է. կարող է լինել մեկ բառ կամ սկզբում կրկնվող մի ամբողջ արտահայտություն:'
      },
      {
        id: 'ana-q7',
        topicId: 'tema-14',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'finderror',
        question: '¿Qué afirmación sobre la anáfora es incorrecta?',
        questionHy: 'Անաֆորայի մասին ո՞ր պնդումն է անճիշտ:',
        options: [
          { id: 'opt-a', text: 'La anáfora solo puede ocurrir al final del poema, nunca en los primeros versos.', textHy: 'Անաֆորան կարող է տեղի ունենալ միայն բանաստեղծության վերջում, երբեք՝ առաջին տողերում:' },
          { id: 'opt-b', text: 'Sirve para enfatizar una emoción o concepto.', textHy: 'Ծառայում է հույզը կամ հասկացությունն ընդգծելուն:' },
          { id: 'opt-c', text: 'Aporta un ritmo musical y solemne.', textHy: 'Հաղորդում է երաժշտական և հանդիսավոր ռիթմ:' },
          { id: 'opt-d', text: 'Puede repetirse en dos, tres o más versos.', textHy: 'Կարող է կրկնվել երկու, երեք կամ ավելի տողերում:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La anáfora puede aparecer en cualquier estrofa del poema.',
        explanationHy: 'Անաֆորան կարող է հայտնվել բանաստեղծության ցանկացած տան մեջ:'
      },
      {
        id: 'ana-q8',
        topicId: 'tema-14',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'complete',
        question: 'En la anáfora, la repetición de palabras se sitúa siempre al ________ de los versos.',
        questionHy: 'Անաֆորայում բառերի կրկնությունը միշտ գտնվում է տողերի ________:',
        options: [
          { id: 'opt-a', text: 'comienzo o inicio', textHy: 'սկզբում' },
          { id: 'opt-b', text: 'final', textHy: 'վերջում' },
          { id: 'opt-c', text: 'centro exacto', textHy: 'ճիշտ կենտրոնում' },
          { id: 'opt-d', text: 'subtítulo', textHy: 'ենթավերնագրում' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La anáfora es por definición una repetición inicial.',
        explanationHy: 'Անաֆորան ըստ սահմանման սկզբնական կրկնություն է:'
      },
      {
        id: 'ana-q9',
        topicId: 'tema-14',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'identify',
        question: 'En «No duerme nadie por el cielo. Nadie, nadie. / No duerme nadie», ¿qué figura literaria de repetición observas?',
        questionHy: 'Այս տողերում կրկնության ո՞ր գեղարվեստական պատկերն ես նկատում:',
        options: [
          { id: 'opt-a', text: 'Anáfora con «No duerme nadie»', textHy: 'Անաֆորա «No duerme nadie» արտահայտությամբ' },
          { id: 'opt-b', text: 'Asíndeton puro', textHy: 'Մաքուր անշաղկապություն' },
          { id: 'opt-c', text: 'Hipérbaton de lugar', textHy: 'Տեղի հիպերբատոն' },
          { id: 'opt-d', text: 'Onomatopeya de sueño', textHy: 'Քնի բնաձայնություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Ambos versos comienzan con «No duerme nadie».',
        explanationHy: 'Երկու տողերն էլ սկսվում են «No duerme nadie» (ոչ ոք չի քնում) արտահայտությամբ:'
      },
      {
        id: 'ana-q10',
        topicId: 'tema-14',
        bloqueId: 4,
        difficulty: 'experto',
        questionType: 'classify',
        question: '¿Qué efecto psicológico causa la anáfora en el oyente?',
        questionHy: 'Ի՞նչ հոգեբանական ազդեցություն է թողնում անաֆորան ունկնդրի վրա:',
        options: [
          { id: 'opt-a', text: 'Refuerza la insistencia emotiva y fija el mensaje en la memoria.', textHy: 'Ուժեղացնում է հուզական համառությունը և տպավորում միտքը հիշողության մեջ:' },
          { id: 'opt-b', text: 'Hace que el poema sea incomprensible.', textHy: 'Բանաստեղծությունը դարձնում է անհասկանալի:' },
          { id: 'opt-c', text: 'Elimina las rimas del romance.', textHy: 'Վերացնում է ռոմանսի հանգերը:' },
          { id: 'opt-d', text: 'Convierte el poema en prosa.', textHy: 'Բանաստեղծությունը վերածում է արձակի:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La reiteración rítmica machaca la idea intensificando su carga afectiva.',
        explanationHy: 'Ռիթմիկ կրկնությունը շեշտում է գաղափարը՝ ուժեղացնելով նրա զգացմունքային լիցքը:'
      }
    ]
  },

  // 7. ASÍNDETON
  {
    id: 'asindeton',
    name: 'Asíndeton',
    nameHy: 'Անշաղկապություն (ասինդետոն)',
    level: 'morfosintáctico',
    definitionEs: 'El asíndeton es la omisión intencionada de las conjunciones coordinantes copulativas («y», «e», «ni») entre palabras, sintagmas u oraciones.',
    definitionHy: 'Անշաղկապությունը բառերի, բառակապակցությունների կամ նախադասությունների միջև համադասական շաղկապների («y», «e», «ni») միտումնավոր բացթողումն է:',
    simpleExplanationEs: 'Consiste en quitar las «y» de una enumeración y poner solo comas para que la frase vaya muy rápida y dinámica.',
    simpleExplanationHy: 'Այն կայանում է թվարկումից «y» (և) շաղկապները հանելու և միայն ստորակետներ դնելու մեջ, որպեսզի արտահայտությունն ընթանա շատ արագ և դինամիկ:',
    howToRecognizeEs: 'Busca una lista de palabras separadas únicamente por comas sin ninguna «y» antes de la última palabra («Llegué, vi, vencí»).',
    howToRecognizeHy: 'Փնտրի՛ր միայն ստորակետներով բաժանված բառերի ցուցակ՝ առանց որևէ «y»-ի վերջին բառից առաջ («Եկա, տեսա, հաղթեցի»):',
    confusedWithEs: 'Se confunde directamente con el polisíndeton.',
    confusedWithHy: 'Ուղղակիորեն շփոթվում է պոլիսինդետոնի (բազմաշաղկապության) հետ:',
    howToDistinguishEs: 'Son contrarios totales: Asíndeton = CERO conjunciones (solo comas, da rapidez). Polisíndeton = MUCHAS conjunciones repetidas («y... y... y...», da lentitud).',
    howToDistinguishHy: 'Դրանք լրիվ հակադրություններ են. Ասինդետոն = ԶՐՈ շաղկապ (միայն ստորակետներ, տալիս է արագություն): Պոլիսինդետոն = ՇԱՏ կրկնվող շաղկապներ («y... y... y...», տալիս է դանդաղություն):',
    examples: [
      {
        text: '«Veni, vidi, vici (Llegué, vi, vencí)».',
        author: 'Julio César',
        textHy: '«Եկա, տեսա, հաղթեցի»:',
        breakdownEs: 'Tres verbos separados solo por comas: rapidez fulgurante.',
        breakdownHy: 'Երեք բայեր՝ բաժանված միայն ստորակետներով. կայծակնային արագություն:',
        highlight: 'Llegué, vi, vencí'
      },
      {
        text: '«Desmayarse, atreverse, estar furioso,\náspero, tierno, liberal, esquivo...».',
        author: 'Lope de Vega',
        textHy: '«Ուշաթափվել, համարձակվել, կատաղած լինել,\nկոշտ, նուրբ, առատաձեռն, խուսափող...»:',
        breakdownEs: 'Acumulación vertiginosa de adjetivos y verbos sin nexos de unión.',
        breakdownHy: 'Ածականների և բայերի սրընթաց կուտակում՝ առանց միացնող շաղկապների:',
        highlight: 'Desmayarse, atreverse, estar furioso...'
      },
      {
        text: '«Rendí, rompí, derribé, rajé, deshice».',
        textHy: '«Հնազանդեցրի, ջարդեցի, տապալեցի, պատռեցի, ոչնչացրի»:',
        breakdownEs: 'Cinco acciones bélicas consecutivas a toda velocidad.',
        breakdownHy: 'Հինգ հաջորդական ռազմական գործողություններ ամբողջ արագությամբ:',
        highlight: 'Rendí, rompí, derribé...'
      },
      {
        text: '«Corre, vuela, traspasa la alta sierra».',
        author: 'Fray Luis de León',
        textHy: '«Վազի՛ր, թռի՛ր, անցի՛ր բարձր լեռնաշղթան»:',
        breakdownEs: 'Tres órdenes imperativas urgentes unidas sin conjunción.',
        breakdownHy: 'Երեք հրատապ հրամայականներ՝ միավորված առանց շաղկապի:',
        highlight: 'Corre, vuela, traspasa'
      },
      {
        text: '«Día, noche, poniente, madrugada».',
        textHy: '«Ցերեկ, գիշեր, մայրամուտ, լուսաբաց»:',
        breakdownEs: 'El paso del tiempo acelerado mediante asíndeton.',
        breakdownHy: 'Ժամանակի արագացված ընթացքը անշաղկապության միջոցով:',
        highlight: 'Día, noche, poniente...'
      },
      {
        text: '«Fuego, humo, cenizas, nada».',
        textHy: '«Կրակ, ծուխ, մոխիր, ոչինչ»:',
        breakdownEs: 'Destrucción instantánea enumerada sin conjunciones.',
        breakdownHy: 'Ակնթարթային ոչնչացում՝ թվարկված առանց շաղկապների:',
        highlight: 'Fuego, humo, cenizas...'
      },
      {
        text: '«Mira, escucha, calla, aprende».',
        textHy: '«Նայի՛ր, լսի՛ր, լռի՛ր, սովորի՛ր»:',
        breakdownEs: 'Consejos rápidos transmitidos con dinamismo asindético.',
        breakdownHy: 'Արագ խորհուրդներ՝ փոխանցված անշաղկապ դինամիզմով:',
        highlight: 'Mira, escucha, calla...'
      },
      {
        text: '«Tierras, casas, haciendas, todo lo perdió».',
        textHy: '«Հողեր, տներ, կալվածքներ, ամեն ինչ կորցրեց»:',
        breakdownEs: 'Pérdida sucesiva e implacable sin partículas de enlace.',
        breakdownHy: 'Հաջորդական և անողոք կորուստ՝ առանց կապող մասնիկների:',
        highlight: 'Tierras, casas, haciendas...'
      }
    ],
    miniTestQuestions: [
      {
        id: 'asi-q1',
        topicId: 'tema-15',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué figura literaria elimina las conjunciones como «y» para dar rapidez?',
        questionHy: 'Ո՞ր գեղարվեստական պատկերն է վերացնում «y» նման շաղկապները արագություն հաղորդելու համար:',
        options: [
          { id: 'opt-a', text: 'Asíndeton', textHy: 'Անշաղկապություն' },
          { id: 'opt-b', text: 'Polisíndeton', textHy: 'Բազմաշաղկապություն' },
          { id: 'opt-c', text: 'Metáfora', textHy: 'Փոխաբերություն' },
          { id: 'opt-d', text: 'Onomatopeya', textHy: 'Բնաձայնություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El asíndeton suprime las conjunciones copulativas sustituyéndolas por comas.',
        explanationHy: 'Անշաղկապությունը վերացնում է համադասական շաղկապները՝ դրանք փոխարինելով ստորակետներով:'
      },
      {
        id: 'asi-q2',
        topicId: 'tema-15',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'matchexample',
        question: '¿Cuál de las siguientes frases es un ejemplo claro de asíndeton?',
        questionHy: 'Հետևյալ նախադասություններից ո՞րն է անշաղկապության հստակ օրինակ:',
        options: [
          { id: 'opt-a', text: '«Llegué, vi, vencí»', textHy: '«Llegué, vi, vencí»' },
          { id: 'opt-b', text: '«Y ríe y llora y canta»', textHy: '«Y ríe y llora y canta»' },
          { id: 'opt-c', text: '«Verde que te quiero verde»', textHy: '«Verde que te quiero verde»' },
          { id: 'opt-d', text: '«El tic-tac del reloj»', textHy: '«El tic-tac del reloj»' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Llegué, vi, vencí» no tiene ninguna conjunción entre los verbos.',
        explanationHy: 'Այս արտահայտության բայերի միջև չկա ոչ մի շաղկապ:'
      },
      {
        id: 'asi-q3',
        topicId: 'tema-15',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'compare',
        question: '¿Qué efecto rítmico produce el asíndeton frente al polisíndeton?',
        questionHy: 'Ի՞նչ ռիթմիկ ազդեցություն է թողնում անշաղկապությունը՝ ի տարբերություն բազմաշաղկապության:',
        options: [
          { id: 'opt-a', text: 'Aporta rapidez, dinamismo y agilidad; el polisíndeton aporta lentitud y solemnidad.', textHy: 'Հաղորդում է արագություն, դինամիզմ և ճարպկություն, իսկ բազմաշաղկապությունը՝ դանդաղություն և հանդիսավորություն:' },
          { id: 'opt-b', text: 'Ambos hacen que la frase sea muy lenta.', textHy: 'Երկուսն էլ արտահայտությունը դարձնում են շատ դանդաղ:' },
          { id: 'opt-c', text: 'El asíndeton inventa palabras nuevas.', textHy: 'Անշաղկապությունը նոր բառեր է հորինում:' },
          { id: 'opt-d', text: 'No producen ningún efecto perceptible.', textHy: 'Ոչ մի նկատելի ազդեցություն չեն թողնում:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Al no tener nexos («y»), la lectura no se frena y fluye con velocidad impaciente.',
        explanationHy: 'Չունենալով շաղկապներ («y»)՝ ընթերցումը չի արգելակվում և հոսում է անհամբեր արագությամբ:'
      },
      {
        id: 'asi-q4',
        topicId: 'tema-15',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'choice',
        question: 'El prefijo «a-» en «asíndeton» significa:',
        questionHy: '«Asíndeton» բառի «a-» նախածանցը նշանակում է՝',
        options: [
          { id: 'opt-a', text: 'Sin (privación o falta de nexos)', textHy: 'Առանց (շաղկապների ժխտում կամ բացակայություն)' },
          { id: 'opt-b', text: 'Muchos', textHy: 'Շատ' },
          { id: 'opt-c', text: 'Antiguo', textHy: 'Հնագույն' },
          { id: 'opt-d', text: 'Poético', textHy: 'Բանաստեղծական' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Procede del griego «a-» (sin) y «syndeton» (atado con conjunciones): sin conjunciones.',
        explanationHy: 'Ծագում է հունարեն «a-» (առանց) և «syndeton» (շաղկապներով կապված) բառերից՝ առանց շաղկապների:'
      },
      {
        id: 'asi-q5',
        topicId: 'tema-15',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'truefalse',
        question: 'Verdadero o Falso: En una frase con asíndeton los elementos van separados únicamente por signos de puntuación como comas.',
        questionHy: 'Ճի՞շտ է, թե՞ Սխալ. Անշաղկապությամբ նախադասության մեջ տարրերն առանձնացվում են միայն կետադրական նշաններով, օրինակ՝ ստորակետներով:',
        options: [
          { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
          { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
          { id: 'opt-c', text: 'Solo si tiene rima asonante', textHy: 'Միայն եթե ունի ասոնանս հանգ' },
          { id: 'opt-d', text: 'Solo en prosa medieval', textHy: 'Միայն միջնադարյան արձակում' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Verdadero: las comas sustituyen formalmente a las conjunciones omitidas.',
        explanationHy: 'Ճիշտ է. ստորակետները ձևականորեն փոխարինում են բաց թողնված շաղկապներին:'
      },
      {
        id: 'asi-q6',
        topicId: 'tema-15',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'identify',
        question: 'En «Corre, vuela, traspasa la alta sierra», ¿qué recurso retórico acelera el ritmo?',
        questionHy: '«Corre, vuela, traspasa la alta sierra» տողում ո՞ր հռետորական հնարքն է արագացնում ռիթմը:',
        options: [
          { id: 'opt-a', text: 'Asíndeton', textHy: 'Անշաղկապություն' },
          { id: 'opt-b', text: 'Polisíndeton', textHy: 'Բազմաշաղկապություն' },
          { id: 'opt-c', text: 'Paronomasia', textHy: 'Հարանունություն' },
          { id: 'opt-d', text: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Los tres verbos van sin conjunción («y») para infundir urgencia.',
        explanationHy: 'Երեք բայերը գրված են առանց շաղկապի («y»)՝ հրատապություն հաղորդելու համար:'
      },
      {
        id: 'asi-q7',
        topicId: 'tema-15',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'complete',
        question: 'El asíndeton pertenece al nivel ________ porque afecta a la coordinación de las oraciones.',
        questionHy: 'Անշաղկապությունը պատկանում է ________ մակարդակին, որովհետև ազդում է նախադասությունների համադասության վրա:',
        options: [
          { id: 'opt-a', text: 'morfosintáctico', textHy: 'շարահյուսական' },
          { id: 'opt-b', text: 'fónico', textHy: 'հնչյունական' },
          { id: 'opt-c', text: 'semántico', textHy: 'իմաստային' },
          { id: 'opt-d', text: 'ortográfico', textHy: 'ուղղագրական' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Afecta a la estructura sintáctica de unión entre palabras.',
        explanationHy: 'Ազդում է բառերի միջև կապի շարահյուսական կառուցվածքի վրա:'
      },
      {
        id: 'asi-q8',
        topicId: 'tema-15',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'finderror',
        question: '¿Qué afirmación sobre el asíndeton es incorrecta?',
        questionHy: 'Անշաղկապության մասին ո՞ր պնդումն է անճիշտ:',
        options: [
          { id: 'opt-a', text: 'El asíndeton consiste en repetir muchas veces la conjunción «y».', textHy: 'Անշաղկապությունը կայանում է «y» շաղկապը շատ անգամներ կրկնելու մեջ:' },
          { id: 'opt-b', text: 'Suprime nexos.', textHy: 'Վերացնում է շաղկապները:' },
          { id: 'opt-c', text: 'Genera dinamismo.', textHy: 'Առաջացնում է դինամիզմ:' },
          { id: 'opt-d', text: 'Usa comas en lugar de nexos copulativos.', textHy: 'Օգտագործում է ստորակետներ համադասական շաղկապների փոխարեն:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Repetir muchas veces la conjunción «y» es el polisíndeton, justo lo contrario.',
        explanationHy: '«Y» շաղկապը բազմիցս կրկնելը պոլիսինդետոնն է՝ ճիշտ հակառակը:'
      },
      {
        id: 'asi-q9',
        topicId: 'tema-15',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'identify',
        question: 'Si transformamos «Compró manzanas y peras y uvas» en «Compró manzanas, peras, uvas», hemos creado:',
        questionHy: 'Եթե «Compró manzanas y peras y uvas» նախադասությունը վերածենք «Compró manzanas, peras, uvas»-ի, ապա ստեղծել ենք՝',
        options: [
          { id: 'opt-a', text: 'Un asíndeton', textHy: 'Անշաղկապություն' },
          { id: 'opt-b', text: 'Un polisíndeton', textHy: 'Բազմաշաղկապություն' },
          { id: 'opt-c', text: 'Un hipérbaton', textHy: 'Հիպերբատոն' },
          { id: 'opt-d', text: 'Una onomatopeya', textHy: 'Բնաձայնություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Hemos suprimido las conjunciones «y», convirtiéndolo en asíndeton.',
        explanationHy: 'Մենք հանել ենք «y» շաղկապները՝ այն վերածելով անշաղկապության:'
      },
      {
        id: 'asi-q10',
        topicId: 'tema-15',
        bloqueId: 4,
        difficulty: 'experto',
        questionType: 'classify',
        question: 'En el verso de Lope de Vega «áspero, tierno, liberal, esquivo», ¿qué clases de palabras forman el asíndeton?',
        questionHy: 'Լոպե դե Վեգայի «áspero, tierno, liberal, esquivo» տողում խոսքի ո՞ր մասերն են կազմում անշաղկապությունը:',
        options: [
          { id: 'opt-a', text: 'Adjetivos calificativos', textHy: 'Որակական ածականներ' },
          { id: 'opt-b', text: 'Verbos en futuro', textHy: 'Ապառնի ժամանակի բայեր' },
          { id: 'opt-c', text: 'Pronombres personales', textHy: 'Անձնական դերանուններ' },
          { id: 'opt-d', text: 'Onomatopeyas fónicas', textHy: 'Հնչյունական բնաձայնություններ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Son cuatro adjetivos antagónicos yuxtapuestos sin conjunciones.',
        explanationHy: 'Դրանք չորս հակադիր ածականներ են՝ դրված կողք կողքի առանց շաղկապների:'
      }
    ]
  },

  // 8. POLISÍNDETON
  {
    id: 'polisindeton',
    name: 'Polisíndeton',
    nameHy: 'Բազմաշաղկապություն (պոլիսինդետոն)',
    level: 'morfosintáctico',
    definitionEs: 'El polisíndeton es la repetición deliberada y reiterada de conjunciones coordinantes (habitualmente «y», «ni» o «o») para enlazar términos en una serie.',
    definitionHy: 'Բազմաշաղկապությունը համադասական շաղկապների (սովորաբար «y», «ni» կամ «o») միտումնավոր և բազմակի կրկնությունն է շարքի անդամները միացնելու համար:',
    simpleExplanationEs: 'Consiste en poner muchas «y» o «ni» seguidas entre palabras para hacer que la frase suene lenta, solemne y pesada.',
    simpleExplanationHy: 'Այն կայանում է բառերի միջև շատ «y» (և) կամ «ni» (ոչ) դնելու մեջ, որպեսզի նախադասությունը հնչի դանդաղ, հանդիսավոր և ծանրակշիռ:',
    howToRecognizeEs: 'Busca la presencia insistente de la letra «y» o «ni» repetida antes de cada elemento de una lista («Y ríe y canta y baila y sueña»).',
    howToRecognizeHy: 'Փնտրի՛ր «y» կամ «ni» տառի համառ առկայությունը՝ կրկնված ցուցակի յուրաքանչյուր տարրից առաջ («Եվ ծիծաղում է, և երգում է, և պարում է, և երազում»):',
    confusedWithEs: 'Se confunde con el asíndeton o con la enumeración simple.',
    confusedWithHy: 'Շփոթվում է անշաղկապության կամ պարզ թվարկման հետ:',
    howToDistinguishEs: 'En una lista normal solo hay una «y» al final (ej: «pan, queso y vino»). En el polisíndeton hay «y» en TODOS los elementos («Y pan y queso y vino»). Y el asíndeton no tiene ninguna.',
    howToDistinguishHy: 'Սովորական ցանկում կա միայն մեկ «y» վերջում («pan, queso y vino»): Բազմաշաղկապության մեջ «y» կա ԲՈԼՈՐ տարրերի միջև («Y pan y queso y vino»): Իսկ անշաղկապության մեջ չկա ոչ մեկը:',
    examples: [
      {
        text: '«Y hay un palacio y un río y un lago y un puente viejo...».',
        textHy: '«Եվ կա մի պալատ, և մի գետ, և մի լիճ, և մի հին կամուրջ...»:',
        breakdownEs: 'Repetición de la conjunción «y» que obliga a pausar en cada monumento.',
        breakdownHy: '«Y» (և) շաղկապի կրկնություն, որն ստիպում է դադար տալ յուրաքանչյուր կառույցի մոտ:',
        highlight: 'Y ... y ... y ... y ...'
      },
      {
        text: '«Ni me importa el oro, ni busco la gloria, ni temo a la muerte».',
        textHy: '«Ո՛չ ոսկին է ինձ պետք, ո՛չ փառքն եմ փնտրում, ո՛չ էլ մահից եմ վախենում»:',
        breakdownEs: 'Polisíndeton negativo mediante la reiteración de «ni».',
        breakdownHy: 'Ժխտական բազմաշաղկապություն «ni»-ի կրկնությամբ:',
        highlight: 'Ni ... ni ... ni ...'
      },
      {
        text: '«Y los dejó, y cayó en despeñadero, y el río se los llevó».',
        textHy: '«Եվ նրանց թողեց, և ընկավ անդունդը, և գետը նրանց տարավ»:',
        breakdownEs: 'Acumula las desgracias con gravedad solemne y pesada.',
        breakdownHy: 'Կուտակում է դժբախտությունները հանդիսավոր և ծանր լրջությամբ:',
        highlight: 'Y ... y ... y ...'
      },
      {
        text: '«El prado y las flores y los árboles y el arroyo cantaban».',
        textHy: '«Մարգագետինը, և ծաղիկները, և ծառերը, և առվակը երգում էին»:',
        breakdownEs: 'Une cada elemento de la naturaleza individualizándolo.',
        breakdownHy: 'Միացնում է բնության յուրաքանչյուր տարր՝ այն առանձնացնելով:',
        highlight: 'y ... y ... y ...'
      },
      {
        text: '«Porque es pura y es blanca y es santa y es perfecta».',
        textHy: '«Որովհետև նա մաքուր է, և սպիտակ է, և սուրբ է, և կատարյալ է»:',
        breakdownEs: 'Exalta las virtudes espirituales con devoción pausada.',
        breakdownHy: 'Գովերգում է հոգևոր առաքինությունները դանդաղ երկրպագությամբ:',
        highlight: 'y es ... y es ... y es ...'
      },
      {
        text: '«Ni el viento ni la lluvia ni la noche detendrán mi marcha».',
        textHy: '«Ո՛չ քամին, ո՛չ անձրևը, ո՛չ գիշերը չեն կանգնեցնի իմ ընթացքը»:',
        breakdownEs: 'Tres obstáculos unidos por la conjunción copulativa negativa.',
        breakdownHy: 'Երեք խոչընդոտներ՝ միացված ժխտական համադասական շաղկապով:',
        highlight: 'Ni ... ni ... ni ...'
      },
      {
        text: '«Y sueña y espera y suspira y calla en su soledad».',
        textHy: '«Եվ երազում է, և սպասում է, և հառաչում է, և լռում իր մենության մեջ»:',
        breakdownEs: 'Cuatro verbos hilados con la conjunción «y».',
        breakdownHy: 'Չորս բայեր՝ հյուսված «y» շաղկապով:',
        highlight: 'Y ... y ... y ... y ...'
      },
      {
        text: '«O callas o sales o aceptas las normas».',
        textHy: '«Կա՛մ լռում ես, կա՛մ դուրս ես գալիս, կա՛մ ընդունում ես կանոնները»:',
        breakdownEs: 'Polisíndeton disyuntivo con la conjunción «o».',
        breakdownHy: 'Տրոհական բազմաշաղկապություն «o» (կամ) շաղկապով:',
        highlight: 'O ... o ... o ...'
      }
    ],
    miniTestQuestions: [
      {
        id: 'pol-q1',
        topicId: 'tema-16',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué figura literaria repite muchas conjunciones como «y» o «ni»?',
        questionHy: 'Ո՞ր գեղարվեստական պատկերն է կրկնում բազմաթիվ շաղկապներ, ինչպիսիք են «y» կամ «ni»:',
        options: [
          { id: 'opt-a', text: 'Polisíndeton', textHy: 'Բազմաշաղկապություն' },
          { id: 'opt-b', text: 'Asíndeton', textHy: 'Անշաղկապություն' },
          { id: 'opt-c', text: 'Hipérbaton', textHy: 'Հիպերբատոն' },
          { id: 'opt-d', text: 'Aliteración', textHy: 'Բաղաձայնույթ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El polisíndeton multiplica intencionadamente las conjunciones.',
        explanationHy: 'Բազմաշաղկապությունը միտումնավոր բազմապատկում է շաղկապները:'
      },
      {
        id: 'pol-q2',
        topicId: 'tema-16',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'choice',
        question: '¿Qué significa el prefijo «poli-» de «polisíndeton»?',
        questionHy: 'Ի՞նչ է նշանակում «polisíndeton» բառի «poli-» նախածանցը:',
        options: [
          { id: 'opt-a', text: 'Muchos (muchas conjunciones)', textHy: 'Շատ (շատ շաղկապներ)' },
          { id: 'opt-b', text: 'Ninguno', textHy: 'Ոչ մեկը' },
          { id: 'opt-c', text: 'Falso', textHy: 'Կեղծ' },
          { id: 'opt-d', text: 'Rápido', textHy: 'Արագ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Poli-» significa muchos en griego (como polígono o polifacético).',
        explanationHy: '«Poli-» հունարեն նշանակում է շատ (ինչպես պոլիգոն):'
      },
      {
        id: 'pol-q3',
        topicId: 'tema-16',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'matchexample',
        question: '¿Cuál de las siguientes frases es un polisíndeton?',
        questionHy: 'Հետևյալ նախադասություններից ո՞րն է բազմաշաղկապություն:',
        options: [
          { id: 'opt-a', text: '«Y sueña y espera y suspira»', textHy: '«Y sueña y espera y suspira»' },
          { id: 'opt-b', text: '«Sueña, espera, suspira»', textHy: '«Sueña, espera, suspira»' },
          { id: 'opt-c', text: '«Verde que te quiero verde»', textHy: '«Verde que te quiero verde»' },
          { id: 'opt-d', text: '«Guau guau ladró el perro»', textHy: '«Guau guau ladró el perro»' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La repetición constante de la «y» es la marca del polisíndeton.',
        explanationHy: '«Y»-ի մշտական կրկնությունը բազմաշաղկապության նշանն է:'
      },
      {
        id: 'pol-q4',
        topicId: 'tema-16',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'compare',
        question: '¿Es «Compré manzanas, peras y plátanos» un polisíndeton?',
        questionHy: 'Արդյո՞ք «Compré manzanas, peras y plátanos» նախադասությունը բազմաշաղկապություն է:',
        options: [
          { id: 'opt-a', text: 'No, es una enumeración común con la «y» final obligatoria.', textHy: 'Ոչ, դա սովորական թվարկում է վերջին պարտադիր «y»-ով:' },
          { id: 'opt-b', text: 'Sí, porque tiene una «y».', textHy: 'Այո, որովհետև ունի մեկ «y»:' },
          { id: 'opt-c', text: 'Es un asíndeton.', textHy: 'Դա անշաղկապություն է:' },
          { id: 'opt-d', text: 'Es un romance.', textHy: 'Դա ռոմանս է:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Para ser polisíndeton debe haber reiteración estilística innecesaria: «Y manzanas y peras y plátanos».',
        explanationHy: 'Բազմաշաղկապություն լինելու համար պետք է լինի ոչ պարտադիր ոճական կրկնություն: «Y manzanas y peras y plátanos»:'
      },
      {
        id: 'pol-q5',
        topicId: 'tema-16',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'truefalse',
        question: 'Verdadero o Falso: El polisíndeton ralentiza el ritmo de lectura para dar mayor peso a cada elemento.',
        questionHy: 'Ճի՞շտ է, թե՞ Սխալ. Բազմաշաղկապությունը դանդաղեցնում է ընթերցման ռիթմը՝ յուրաքանչյուր տարրին ավելի մեծ կշիռ հաղորդելու համար:',
        options: [
          { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
          { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
          { id: 'opt-c', text: 'Solo en teatro cómico', textHy: 'Միայն կատակերգական թատրոնում' },
          { id: 'opt-d', text: 'Solo con nombres propios', textHy: 'Միայն հատուկ անուններով' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Verdadero: cada conjunción exige una pausa articulada.',
        explanationHy: 'Ճիշտ է. յուրաքանչյուր շաղկապ պահանջում է արտասանական դադար:'
      },
      {
        id: 'pol-q6',
        topicId: 'tema-16',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'identify',
        question: 'En «Ni me importa el oro, ni busco la gloria, ni temo a la muerte», ¿qué conjunción genera el polisíndeton?',
        questionHy: 'Այս արտահայտության մեջ ո՞ր շաղկապն է ստեղծում բազմաշաղկապությունը:',
        options: [
          { id: 'opt-a', text: 'La conjunción «ni»', textHy: '«Ni» (ոչ) շաղկապը' },
          { id: 'opt-b', text: 'La conjunción «que»', textHy: '«Que» շաղկապը' },
          { id: 'opt-c', text: 'El verbo «busco»', textHy: '«Busco» բայը' },
          { id: 'opt-d', text: 'El sustantivo «oro»', textHy: '«Oro» գոյականը' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La conjunción negativa «ni» encabeza tres proposiciones sucesivas.',
        explanationHy: 'Ժխտական «ni» շաղկապը գլխավորում է երեք հաջորդական նախադասություններ:'
      },
      {
        id: 'pol-q7',
        topicId: 'tema-16',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'choice',
        question: '¿A qué nivel de las figuras literarias pertenece el polisíndeton?',
        questionHy: 'Գեղարվեստական պատկերների ո՞ր մակարդակին է պատկանում բազմաշաղկապությունը:',
        options: [
          { id: 'opt-a', text: 'Nivel morfosintáctico', textHy: 'Շարահյուսական մակարդակ' },
          { id: 'opt-b', text: 'Nivel fónico', textHy: 'Հնչյունական մակարդակ' },
          { id: 'opt-c', text: 'Nivel semántico', textHy: 'Իմաստային մակարդակ' },
          { id: 'opt-d', text: 'Nivel métrico', textHy: 'Տաղաչափական մակարդակ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Modifica la estructura sintáctica de conexión oracional.',
        explanationHy: 'Փոխում է նախադասությունների կապակցման շարահյուսական կառուցվածքը:'
      },
      {
        id: 'pol-q8',
        topicId: 'tema-16',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'finderror',
        question: 'Encuentra el error: «El polisíndeton acelera vertiginosamente la acción suprimiendo todas las comas».',
        questionHy: 'Գտի՛ր սխալը. «Բազմաշաղկապությունը սրընթաց արագացնում է գործողությունը՝ վերացնելով բոլոր ստորակետները»:',
        options: [
          { id: 'opt-a', text: 'Falso: el polisíndeton frena y ralentiza el ritmo; quien acelera es el asíndeton.', textHy: 'Սխալ է. բազմաշաղկապությունը դանդաղեցնում է ռիթմը, իսկ արագացնողը անշաղկապությունն է:' },
          { id: 'opt-b', text: 'Falso: solo se usa en versos de 14 sílabas.', textHy: 'Սխալ է. միայն 14 վանկանի տողերում է օգտագործվում:' },
          { id: 'opt-c', text: 'Es completamente verdadero.', textHy: 'Լիովին ճիշտ է:' },
          { id: 'opt-d', text: 'Se llama epíteto.', textHy: 'Դա կոչվում է մակդիր:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El polisíndeton frena la marcha mediante repetición de nexos copulativos.',
        explanationHy: 'Բազմաշաղկապությունը դանդաղեցնում է ընթացքը շաղկապների կրկնությամբ:'
      },
      {
        id: 'pol-q9',
        topicId: 'tema-16',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'complete',
        question: 'El contrario exacto del polisíndeton es el ________.',
        questionHy: 'Բազմաշաղկապության ճշգրիտ հակառակն է ________:',
        options: [
          { id: 'opt-a', text: 'asíndeton', textHy: 'անշաղկապությունը (asíndeton)' },
          { id: 'opt-b', text: 'pleonasmo', textHy: 'պլեոնազմը' },
          { id: 'opt-c', text: 'romance', textHy: 'ռոմանսը' },
          { id: 'opt-d', text: 'cuento', textHy: 'հեքիաթը' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Uno quita conjunciones (asíndeton) y el otro las repite copiosamente (polisíndeton).',
        explanationHy: 'Մեկը հանում է շաղկապները (ասինդետոն), իսկ մյուսն առատորեն կրկնում է (պոլիսինդետոն):'
      },
      {
        id: 'pol-q10',
        topicId: 'tema-16',
        bloqueId: 4,
        difficulty: 'experto',
        questionType: 'identify',
        question: 'En «O compras o vendes o te marchas», ¿qué tipo de polisíndeton tenemos?',
        questionHy: '«O compras o vendes o te marchas» արտահայտության մեջ ի՞նչ տեսակի բազմաշաղկապություն ունենք:',
        options: [
          { id: 'opt-a', text: 'Polisíndeton disyuntivo con «o»', textHy: 'Տրոհական բազմաշաղկապություն «o»-ով' },
          { id: 'opt-b', text: 'Asíndeton puro sin nexos', textHy: 'Մաքուր անշաղկապություն առանց շաղկապների' },
          { id: 'opt-c', text: 'Aliteración en /p/', textHy: 'Բաղաձայնույթ /p/-ով' },
          { id: 'opt-d', text: 'Metáfora continuada', textHy: 'Շարունակական փոխաբերություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La conjunción disyuntiva «o» se repite al inicio de cada opción.',
        explanationHy: 'Տրոհական «o» (կամ) շաղկապը կրկնվում է յուրաքանչյուր տարբերակի սկզբում:'
      }
    ]
  },

  // 9. ENUMERACIÓN
  {
    id: 'enumeracion',
    name: 'Enumeración',
    nameHy: 'Թվարկում (էնումերացիա)',
    level: 'morfosintáctico',
    definitionEs: 'La enumeración es la acumulación coordinada de una serie sucesiva de palabras o partes sintácticas equivalentes (sustantivos, adjetivos, verbos).',
    definitionHy: 'Թվարկումը համարժեք շարահյուսական մասերի (գոյականներ, ածականներ, բայեր) հաջորդական շարքի համադասական կուտակումն է:',
    simpleExplanationEs: 'Es hacer una lista de elementos del mismo tipo para describir detalladamente un lugar, un personaje o un hecho.',
    simpleExplanationHy: 'Դա նույն տեսակի տարրերի ցուցակ կազմելն է՝ վայրը, կերպարը կամ դեպքը մանրամասն նկարագրելու համար:',
    howToRecognizeEs: 'Comprueba si hay una serie continuada de varios sustantivos seguidos, o varios adjetivos seguidos, o varios verbos seguidos.',
    howToRecognizeHy: 'Ստուգի՛ր, թե արդյոք կա մի քանի հաջորդական գոյականների, ածականների կամ բայերի շարունակական շարք:',
    confusedWithEs: 'Se confunde con el asíndeton o el polisíndeton.',
    confusedWithHy: 'Շփոթվում է անշաղկապության կամ բազմաշաղկապության հետ:',
    howToDistinguishEs: 'La enumeración es la LISTA en sí misma. El asíndeton y el polisíndeton son la FORMA de unir esa lista (con puras comas o con muchas «y»).',
    howToDistinguishHy: 'Թվարկումը բուն ՑՈՒՑԱԿՆ է: Իսկ անշաղկապությունն ու բազմաշաղկապությունը այդ ցուցակը միացնելու ԵՂԱՆԱԿՆ են (զուտ ստորակետներով կամ շատ «y»-երով):',
    examples: [
      {
        text: '«En tierra, en humo, en polvo, en sombra, en nada».',
        author: 'Luis de Góngora',
        textHy: '«Հողի մեջ, ծխի մեջ, փոշու մեջ, ստվերի մեջ, ոչնչի մեջ»:',
        breakdownEs: 'Enumeración gradativa descendente que reduce la belleza corporal a la nada absoluta.',
        breakdownHy: 'Նվազող աստիճանավորմամբ թվարկում, որը մարմնական գեղեցկությունը հասցնում է բացարձակ ոչնչի:',
        highlight: 'tierra, humo, polvo, sombra, nada'
      },
      {
        text: '«Había libros, plumas, pergaminos, mapas y lupas sobre la mesa».',
        textHy: '«Սեղանին կային գրքեր, գրիչներ, մագաղաթներ, քարտեզներ և խոշորացույցներ»:',
        breakdownEs: 'Enumeración descriptiva de objetos de un sabio.',
        breakdownHy: 'Իմաստունի առարկաների նկարագրական թվարկում:',
        highlight: 'libros, plumas, pergaminos...'
      },
      {
        text: '«Era alegre, vivaz, risueña, bondadosa e incansable».',
        textHy: '«Նա ուրախ էր, կենսուրախ, ժպտերես, բարի և անհոգնելի»:',
        breakdownEs: 'Enumeración de adjetivos para retratar una personalidad entrañable.',
        breakdownHy: 'Ածականների թվարկում՝ սիրելի անհատականությունը պատկերելու համար:',
        highlight: 'alegre, vivaz, risueña...'
      },
      {
        text: '«Gritaban, corrían, tropezaban, caían en la confusión del fuego».',
        textHy: '«Գոռում էին, վազում էին, սայթաքում էին, ընկնում էին կրակի խառնաշփոթի մեջ»:',
        breakdownEs: 'Enumeración de verbos de acción simultánea.',
        breakdownHy: 'Միաժամանակյա գործողության բայերի թվարկում:',
        highlight: 'Gritaban, corrían, tropezaban...'
      },
      {
        text: '«El río lleva ramas, hojas, flores y ramas secas».',
        textHy: '«Գետը տանում է ճյուղեր, տերևներ, ծաղիկներ և չոր ոստեր»:',
        breakdownEs: 'Enumeración caótica fluvial.',
        breakdownHy: 'Գետային տարերային թվարկում:',
        highlight: 'ramas, hojas, flores...'
      },
      {
        text: '«Valles, cerros, llanuras y ríos componen la comarca».',
        textHy: '«Հովիտներ, բլուրներ, հարթավայրեր և գետեր են կազմում գավառը»:',
        breakdownEs: 'Enumeración geográfica topográfica.',
        breakdownHy: 'Աշխարհագրական տեղագրական թվարկում:',
        highlight: 'Valles, cerros, llanuras...'
      },
      {
        text: '«Lloró la madre, el padre, los hermanos y los amigos leales».',
        textHy: '«Լաց եղավ մայրը, հայրը, եղբայրները և հավատարիմ ընկերները»:',
        breakdownEs: 'Enumeración de personas allegadas afectadas por el dolor.',
        breakdownHy: 'Ցավից հուզված մտերիմ անձանց թվարկում:',
        highlight: 'la madre, el padre, los hermanos...'
      },
      {
        text: '«Llegó el frío, la nieve, el hielo y la desolación».',
        textHy: '«Եկավ ցուրտը, ձյունը, սառույցը և ամայությունը»:',
        breakdownEs: 'Enumeración climática y emocional.',
        breakdownHy: 'Կլիմայական և հուզական թվարկում:',
        highlight: 'el frío, la nieve, el hielo...'
      }
    ],
    miniTestQuestions: [
      {
        id: 'enu-q1',
        topicId: 'tema-17',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué figura literaria consiste en una serie continuada de elementos de la misma categoría gramatical?',
        questionHy: 'Ո՞ր գեղարվեստական պատկերն է կայանում նույն քերականական կարգի տարրերի շարունակական շարքի մեջ:',
        options: [
          { id: 'opt-a', text: 'Enumeración', textHy: 'Թվարկում' },
          { id: 'opt-b', text: 'Aliteración', textHy: 'Բաղաձայնույթ' },
          { id: 'opt-c', text: 'Onomatopeya', textHy: 'Բնաձայնություն' },
          { id: 'opt-d', text: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La enumeración reúne miembros afines consecutivamente.',
        explanationHy: 'Թվարկումը հաջորդաբար միավորում է նմանատիպ անդամներ:'
      },
      {
        id: 'enu-q2',
        topicId: 'tema-17',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: 'En «En tierra, en humo, en polvo, en sombra, en nada», ¿qué tipo de enumeración observamos?',
        questionHy: 'Այս հայտնի տողում ի՞նչ տեսակի թվարկում ենք դիտարկում:',
        options: [
          { id: 'opt-a', text: 'Enumeración gradativa descendente', textHy: 'Նվազող աստիճանավորմամբ թվարկում' },
          { id: 'opt-b', text: 'Aliteración exclusiva', textHy: 'Բացառապես բաղաձայնույթ' },
          { id: 'opt-c', text: 'Metáfora pura', textHy: 'Մաքուր փոխաբերություն' },
          { id: 'opt-d', text: 'Pleonasmo vulgar', textHy: 'Խոսակցական պլեոնազմ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Góngora ordena los términos de mayor a menor materia hasta llegar a la «nada».',
        explanationHy: 'Գոնգորան դասավորում է եզրույթները ավելի մեծից դեպի ավելի փոքր նյութականը մինչև «ոչինչ»:'
      },
      {
        id: 'enu-q3',
        topicId: 'tema-17',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'compare',
        question: '¿Pueden coexistir una enumeración y un asíndeton en la misma frase?',
        questionHy: 'Կարո՞ղ են թվարկումը և անշաղկապությունը համատեղվել նույն նախադասության մեջ:',
        options: [
          { id: 'opt-a', text: 'Sí: la enumeración es la lista de cosas, y el asíndeton es que se unan sin conjunciones.', textHy: 'Այո. թվարկումը իրերի ցուցակն է, իսկ անշաղկապությունը՝ դրանք առանց շաղկապների միացնելը:' },
          { id: 'opt-b', text: 'No, son incompatibles.', textHy: 'Ոչ, դրանք անհամատեղելի են:' },
          { id: 'opt-c', text: 'Solo en canciones infantiles.', textHy: 'Միայն մանկական երգերում:' },
          { id: 'opt-d', text: 'Solo en catalán.', textHy: 'Միայն կատալաներենում:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Efectivamente, una lista de palabras sin «y» es al mismo tiempo enumeración y asíndeton.',
        explanationHy: 'Իսկապես, առանց «y»-ի բառերի ցանկը միաժամանակ և՛ թվարկում է, և՛ անշաղկապություն:'
      },
      {
        id: 'enu-q4',
        topicId: 'tema-17',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'matchexample',
        question: '¿Cuál de los siguientes ejemplos es una enumeración de adjetivos?',
        questionHy: 'Հետևյալ օրինակներից ո՞րն է ածականների թվարկում:',
        options: [
          { id: 'opt-a', text: '«Era alto, delgado, silencioso y melancólico»', textHy: '«Era alto, delgado, silencioso y melancólico»' },
          { id: 'opt-b', text: '«Compró pan, agua y sal»', textHy: '«Compró pan, agua y sal»' },
          { id: 'opt-c', text: '«Corrió, saltó y gritó»', textHy: '«Corrió, saltó y gritó»' },
          { id: 'opt-d', text: '«Tic-tac hace el reloj»', textHy: '«Tic-tac hace el reloj»' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Todos los elementos listados («alto, delgado, silencioso, melancólico») son adjetivos.',
        explanationHy: 'Թվարկված բոլոր տարրերն ածականներ են:'
      },
      {
        id: 'enu-q5',
        topicId: 'tema-17',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'choice',
        question: '¿A qué nivel de las figuras retóricas pertenece la enumeración?',
        questionHy: 'Գեղարվեստական պատկերների ո՞ր մակարդակին է պատկանում թվարկումը:',
        options: [
          { id: 'opt-a', text: 'Nivel morfosintáctico', textHy: 'Շարահյուսական մակարդակ' },
          { id: 'opt-b', text: 'Nivel fónico', textHy: 'Հնչյունական մակարդակ' },
          { id: 'opt-c', text: 'Nivel semántico', textHy: 'Իմաստային մակարդակ' },
          { id: 'opt-d', text: 'Nivel ortográfico', textHy: 'Ուղղագրական մակարդակ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Pertenece al nivel morfosintáctico por afectar a la sintaxis y agrupación de oraciones.',
        explanationHy: 'Պատկանում է շարահյուսական մակարդակին նախադասությունների շարահյուսության վրա ազդելու համար:'
      },
      {
        id: 'enu-q6',
        topicId: 'tema-17',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'truefalse',
        question: 'Verdadero o Falso: Una enumeración puede ser de verbos («Llegaron, cantaron, rieron y partieron»).',
        questionHy: 'Ճի՞շտ է, թե՞ Սխալ. Թվարկումը կարող է լինել բայերի («Llegaron, cantaron, rieron y partieron»):',
        options: [
          { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
          { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
          { id: 'opt-c', text: 'Solo en latín', textHy: 'Միայն լատիներենում' },
          { id: 'opt-d', text: 'Solo de sustantivos', textHy: 'Միայն գոյականների' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Verdadero: se pueden enumerar sustantivos, adjetivos, verbos o proposiciones enteras.',
        explanationHy: 'Ճիշտ է. կարելի է թվարկել գոյականներ, ածականներ, բայեր կամ ամբողջական նախադասություններ:'
      },
      {
        id: 'enu-q7',
        topicId: 'tema-17',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'identify',
        question: 'En «Gritaban, corrían, tropezaban y caían», ¿qué se enumera?',
        questionHy: 'Այս արտահայտության մեջ ի՞նչ է թվարկվում:',
        options: [
          { id: 'opt-a', text: 'Verbos de acción en pretérito imperfecto', textHy: 'Անցյալ անկատարի գործողության բայեր' },
          { id: 'opt-b', text: 'Nombres de animales', textHy: 'Կենդանիների անուններ' },
          { id: 'opt-c', text: 'Adjetivos superlativos', textHy: 'Գերադրական ածականներ' },
          { id: 'opt-d', text: 'Onomatopeyas', textHy: 'Բնաձայնություններ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Se enumera una serie sucesiva de acciones verbales.',
        explanationHy: 'Թվարկվում է բայական գործողությունների հաջորդական շարք:'
      },
      {
        id: 'enu-q8',
        topicId: 'tema-17',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'complete',
        question: 'La enumeración sirve frecuentemente en literatura para hacer una ________ detallada de la realidad.',
        questionHy: 'Թվարկումը գրականության մեջ հաճախ ծառայում է իրականության մանրամասն ________ կատարելուն:',
        options: [
          { id: 'opt-a', text: 'descripción o retrato', textHy: 'նկարագրություն կամ դիմանկար' },
          { id: 'opt-b', text: 'destrucción métrica', textHy: 'տաղաչափական ոչնչացում' },
          { id: 'opt-c', text: 'rima asonante obligada', textHy: 'պարտադիր ասոնանս հանգ' },
          { id: 'opt-d', text: 'traducción fonética', textHy: 'հնչյունական թարգմանություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Permite pintar con palabras acumulando pormenores descriptivos.',
        explanationHy: 'Թույլ է տալիս բառերով նկարել՝ կուտակելով նկարագրական մանրամասներ:'
      },
      {
        id: 'enu-q9',
        topicId: 'tema-17',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'finderror',
        question: '¿Qué diferencia a la enumeración del pleonasmo?',
        questionHy: 'Ինչո՞վ է թվարկումը տարբերվում պլեոնազմից:',
        options: [
          { id: 'opt-a', text: 'La enumeración añade elementos nuevos distintos; el pleonasmo repite una idea ya dicha de forma redundante.', textHy: 'Թվարկումն ավելացնում է նոր տարբեր տարրեր, իսկ պլեոնազմը կրկնում է արդեն ասված միտքը ավելորդ կերպով:' },
          { id: 'opt-b', text: 'Son exactamente idénticos.', textHy: 'Դրանք ճիշտ նույնական են:' },
          { id: 'opt-c', text: 'La enumeración solo usa palabras en latín.', textHy: 'Թվարկումն օգտագործում է միայն լատիներեն բառեր:' },
          { id: 'opt-d', text: 'El pleonasmo no existe en español.', textHy: 'Պլեոնազմը գոյություն չունի իսպաներենում:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La enumeración acumula datos o términos nuevos a una lista; el pleonasmo reitera lo ya sabido («lo vi con mis ojos»).',
        explanationHy: 'Թվարկումը ցուցակին ավելացնում է նոր տվյալներ, իսկ պլեոնազմը կրկնում է արդեն հայտնին («տեսա իմ աչքերով»):'
      },
      {
        id: 'enu-q10',
        topicId: 'tema-17',
        bloqueId: 4,
        difficulty: 'experto',
        questionType: 'classify',
        question: 'Una enumeración donde los elementos van de mayor a menor importancia o tamaño se denomina:',
        questionHy: 'Այն թվարկումը, որտեղ տարրերը գնում են մեծից դեպի փոքր կարևորություն կամ չափ, կոչվում է՝',
        options: [
          { id: 'opt-a', text: 'Gradativa descendente o degradación', textHy: 'Նվազող աստիճանավորմամբ (դեգրադացիա)' },
          { id: 'opt-b', text: 'Polisindética caótica', textHy: 'Քաոսային բազմաշաղկապ' },
          { id: 'opt-c', text: 'Onomatopéyica fónica', textHy: 'Հնչյունական բնաձայնային' },
          { id: 'opt-d', text: 'Hipérbaton inverso', textHy: 'Շրջուն հիպերբատոն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Cuando la lista decrece en orden de magnitud se llama gradación descendente.',
        explanationHy: 'Երբ ցուցակը նվազում է ըստ մեծության կարգի, կոչվում է նվազող աստիճանավորում:'
      }
    ]
  },

  // 10. PLEONASMO
  {
    id: 'pleonasmo',
    name: 'Pleonasmo',
    nameHy: 'Պլեոնազմ (ավելաբանություն)',
    level: 'morfosintáctico',
    definitionEs: 'El pleonasmo es el empleo intencionado de palabras conceptualmente redundantes o innecesarias para enriquecer la fuerza expresiva del enunciado.',
    definitionHy: 'Պլեոնազմը հասկացութայնորեն ավելորդ բառերի միտումնավոր գործածումն է նախադասության արտահայտչական ուժը հարստացնելու համար:',
    simpleExplanationEs: 'Consiste en decir algo que ya se sabe con palabras extra («lo vi con mis propios ojos», «subir arriba») para dar emoción o seguridad rotunda.',
    simpleExplanationHy: 'Այն կայանում է լրացուցիչ բառերով արդեն հայտնի բան ասելու մեջ («տեսա իմ սեփական աչքերով», «վերև բարձրանալ»)՝ հույզ կամ կտրուկ վստահություն հաղորդելու համար:',
    howToRecognizeEs: 'Busca palabras que no añaden información nueva porque el verbo ya las incluye («llorar de los ojos», «entrar adentro», «volar por el aire»).',
    howToRecognizeHy: 'Փնտրի՛ր բառեր, որոնք նոր տեղեկություն չեն ավելացնում, քանի որ բայն արդեն ներառում է դրանք («աչքերից լաց լինել», «ներս մտնել», «օդով թռչել»):',
    confusedWithEs: 'Se confunde con una falta gramatical o incorrección vulgar.',
    confusedWithHy: 'Շփոթվում է քերականական սխալի կամ խոսակցական անճշտության հետ:',
    howToDistinguishEs: 'En la calle suele ser una incorrección torpe («sube arriba»). En la literatura es un recurso poético noble que subraya la intensidad del dolor o la verdad de un hecho («De sus ojos tan fuertemente llorando»).',
    howToDistinguishHy: 'Փողոցում այն սովորաբար կոպիտ սխալ է («sube arriba»): Գրականության մեջ դա ազնիվ բանաստեղծական հնարք է, որն ընդգծում է ցավի ինտենսիվությունը կամ փաստի ճշմարտացիությունը («De sus ojos tan fuertemente llorando»):',
    examples: [
      {
        text: '«Lo vi con mis propios ojos».',
        textHy: '«Տեսա իմ սեփական աչքերով»:',
        breakdownEs: 'Ver siempre se hace con los ojos: la redundancia enfatiza la certeza absoluta del testigo.',
        breakdownHy: 'Տեսնում են միշտ աչքերով. ավելորդությունն ընդգծում է վկայի բացարձակ վստահությունը:',
        highlight: 'con mis propios ojos'
      },
      {
        text: '«De los sus ojos tan fuertemente llorando».',
        author: 'Cantar de mio Cid',
        textHy: '«Իր աչքերից այնքան ուժգին արցունք թափելով»:',
        breakdownEs: 'Pleonasmo épico medieval que conmueve al lector con el llanto del héroe desterrado.',
        breakdownHy: 'Միջնադարյան էպիկական պլեոնազմ, որը հուզում է ընթերցողին վտարված հերոսի լացով:',
        highlight: 'De los sus ojos ... llorando'
      },
      {
        text: '«Ciego que no ve nada en la oscuridad».',
        textHy: '«Կույր, որ ոչինչ չի տեսնում խավարում»:',
        breakdownEs: 'Ser ciego implica no ver; añade dramatismo a la soledad del invidente.',
        breakdownHy: 'Կույր լինելը ենթադրում է չտեսնել. դրամատիզմ է ավելացնում կույրի մենությանը:',
        highlight: 'Ciego que no ve'
      },
      {
        text: '«Volaba por los aires el pájaro libre».',
        textHy: '«Թռչում էր օդով ազատ թռչունը»:',
        breakdownEs: 'El vuelo solo puede suceder por el aire: refuerza la sensación de espacio infinito.',
        breakdownHy: 'Թռիչքը կարող է տեղի ունենալ միայն օդում. ուժեղացնում է անսահման տարածության զգացումը:',
        highlight: 'Volaba por los aires'
      },
      {
        text: '«Se lo dije a él en su propia cara».',
        textHy: '«Ես դա նրան ասացի իր իսկ դեմքին»:',
        breakdownEs: 'Pleonasmo coloquial que subraya la valentía del hablante.',
        breakdownHy: 'Խոսակցական պլեոնազմ, որն ընդգծում է խոսողի խիզախությունը:',
        highlight: 'en su propia cara'
      },
      {
        text: '«Calla la boca y no repliques más».',
        textHy: '«Բերանդ փակի՛ր և այլևս մի՛ պատասխանիր»:',
        breakdownEs: 'Callar se realiza con la boca; enfatiza la orden imperativa tajante.',
        breakdownHy: 'Լռում են բերանով. շեշտում է կտրուկ հրամայական կարգը:',
        highlight: 'Calla la boca'
      },
      {
        text: '«Mano huesuda con cinco dedos huesudos».',
        textHy: '«Ոսկրոտ ձեռք՝ հինգ ոսկրոտ մատներով»:',
        breakdownEs: 'La mano humana tiene siempre cinco dedos: insiste en la decrepitud física.',
        breakdownHy: 'Մարդու ձեռքը միշտ ունի հինգ մատ. շեշտում է ֆիզիկական տկարությունը:',
        highlight: 'cinco dedos'
      },
      {
        text: '«Bajar abajo al sótano oscuro».',
        textHy: '«Ներքև իջնել մութ նկուղը»:',
        breakdownEs: 'Redundancia cotidiana usada a veces en literatura para recalcar el descenso.',
        breakdownHy: 'Առօրյա ավելորդություն, որը գրականության մեջ երբեմն կիրառվում է իջնելը շեշտելու համար:',
        highlight: 'Bajar abajo'
      }
    ],
    miniTestQuestions: [
      {
        id: 'ple-q1',
        topicId: 'tema-18',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué figura literaria consiste en usar palabras aparentemente innecesarias para reforzar la expresión?',
        questionHy: 'Ո՞ր գեղարվեստական պատկերն է կայանում առերևույթ ավելորդ բառեր օգտագործելու մեջ արտահայտությունն ուժեղացնելու համար:',
        options: [
          { id: 'opt-a', text: 'Pleonasmo', textHy: 'Պլեոնազմ' },
          { id: 'opt-b', text: 'Hipérbaton', textHy: 'Հիպերբատոն' },
          { id: 'opt-c', text: 'Asíndeton', textHy: 'Անշաղկապություն' },
          { id: 'opt-d', text: 'Aliteración', textHy: 'Բաղաձայնույթ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El pleonasmo añade palabras redundantes con intención poética o expresiva.',
        explanationHy: 'Պլեոնազմն ավելացնում է ավելորդ բառեր բանաստեղծական կամ արտահայտչական նպատակով:'
      },
      {
        id: 'ple-q2',
        topicId: 'tema-18',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'matchexample',
        question: '¿Cuál de los siguientes es un ejemplo clásico de pleonasmo?',
        questionHy: 'Հետևյալներից ո՞րն է պլեոնազմի դասական օրինակ:',
        options: [
          { id: 'opt-a', text: '«Lo vi con mis propios ojos»', textHy: '«Lo vi con mis propios ojos»' },
          { id: 'opt-b', text: '«Tus ojos son luceros»', textHy: '«Tus ojos son luceros»' },
          { id: 'opt-c', text: '«Veni, vidi, vici»', textHy: '«Veni, vidi, vici»' },
          { id: 'opt-d', text: '«Tic-tac del reloj»', textHy: '«Tic-tac del reloj»' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Con mis propios ojos» es redundante porque «ver» siempre se efectúa con los ojos.',
        explanationHy: '«Իմ սեփական աչքերով»-ը ավելորդ է, որովհետև «տեսնելը» միշտ կատարվում է աչքերով:'
      },
      {
        id: 'ple-q3',
        topicId: 'tema-18',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'truefalse',
        question: 'Verdadero o Falso: En el Cantar de mio Cid aparece el famoso pleonasmo «De los sus ojos tan fuertemente llorando».',
        questionHy: 'Ճի՞շտ է, թե՞ Սխալ. «Իմ Սիդի երգը» պոեմում հանդիպում է հայտնի պլեոնազմը՝ «De los sus ojos tan fuertemente llorando»:',
        options: [
          { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
          { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
          { id: 'opt-c', text: 'Solo en prosa moderna', textHy: 'Միայն ժամանակակից արձակում' },
          { id: 'opt-d', text: 'Fue censurado en la Edad Media', textHy: 'Այն գրաքննվել է միջնադարում' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Verdadero: es uno de los ejemplos más célebres de la literatura castellana medieval.',
        explanationHy: 'Ճիշտ է. միջնադարյան կաստիլական գրականության ամենահայտնի օրինակներից է:'
      },
      {
        id: 'ple-q4',
        topicId: 'tema-18',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'choice',
        question: '¿Por qué un autor utiliza un pleonasmo en una obra literaria culta?',
        questionHy: 'Ինչո՞ւ է հեղինակը պլեոնազմ օգտագործում գեղարվեստական գործում:',
        options: [
          { id: 'opt-a', text: 'Para enfatizar la verdad de lo dicho y añadir dramatismo o intensidad.', textHy: 'Ասվածի ճշմարտությունն ընդգծելու և դրամատիզմ կամ ինտենսիվություն հաղորդելու համար:' },
          { id: 'opt-b', text: 'Porque no sabe hablar castellano correctamente.', textHy: 'Որովհետև չգիտի ճիշտ խոսել կաստիլերեն:' },
          { id: 'opt-c', text: 'Para que rime con el romance.', textHy: 'Որպեսզի հանգավորվի ռոմանսի հետ:' },
          { id: 'opt-d', text: 'Para contar sílabas de más.', textHy: 'Ավելորդ վանկեր հաշվելու համար:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'El pleonasmo literario es intencionado y busca un efecto emotivo potente.',
        explanationHy: 'Գրական պլեոնազմը նպատակադիր է և ձգտում է հզոր զգացմունքային ազդեցության:'
      },
      {
        id: 'ple-q5',
        topicId: 'tema-18',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'choice',
        question: '¿A qué nivel de las figuras retóricas pertenece el pleonasmo?',
        questionHy: 'Գեղարվեստական պատկերների ո՞ր մակարդակին է պատկանում պլեոնազմը:',
        options: [
          { id: 'opt-a', text: 'Nivel morfosintáctico', textHy: 'Շարահյուսական մակարդակ' },
          { id: 'opt-b', text: 'Nivel fónico', textHy: 'Հնչյունական մակարդակ' },
          { id: 'opt-c', text: 'Nivel semántico puro', textHy: 'Մաքուր իմաստային մակարդակ' },
          { id: 'opt-d', text: 'Nivel dialectal', textHy: 'Բարբառային մակարդակ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Pertenece al nivel morfosintáctico por afectar a la estructura de la frase.',
        explanationHy: 'Պատկանում է շարահյուսական մակարդակին նախադասության կառուցվածքի վրա ազդելու համար:'
      },
      {
        id: 'ple-q6',
        topicId: 'tema-18',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'finderror',
        question: 'Encuentra el error: «En el habla vulgar diaria, decir “subir arriba” se considera un elegante recurso literario que todos aplauden».',
        questionHy: 'Գտի՛ր սխալը. «Առօրյա խոսակցականում “subir arriba” ասելը համարվում է նրբագեղ գրական հնարք, որին բոլորը ծափահարում են»:',
        options: [
          { id: 'opt-a', text: 'Falso: en el habla diaria se considera una redundancia vulgar incorrecta que debe evitarse.', textHy: 'Սխալ է. առօրյա խոսքում դա համարվում է կոպիտ ավելորդություն, որից պետք է խուսափել:' },
          { id: 'opt-b', text: 'Falso: “subir arriba” es una metáfora.', textHy: 'Սխալ է. “subir arriba”-ն փոխաբերություն է:' },
          { id: 'opt-c', text: 'Es completamente verdadero.', textHy: 'Լիովին ճիշտ է:' },
          { id: 'opt-d', text: 'Es un hipérbaton culto.', textHy: 'Դա հեղինակային հիպերբատոն է:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'En el habla corriente es una incorrección; solo en poesía con intención estética es figura literaria.',
        explanationHy: 'Սովորական խոսքում դա անճշտություն է. միայն պոեզիայում գեղագիտական նպատակով է գրական պատկեր:'
      },
      {
        id: 'ple-q7',
        topicId: 'tema-18',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'identify',
        question: 'En «Volaba por los aires el halcón veloz», ¿qué elemento es pleonástico?',
        questionHy: '«Volaba por los aires el halcón veloz» նախադասության մեջ ո՞ր տարրն է պլեոնաստիկ (ավելաբանական):',
        options: [
          { id: 'opt-a', text: '«por los aires», porque volar solo se puede hacer por el aire.', textHy: '«por los aires» (օդով), որովհետև թռչելը հնարավոր է միայն օդով:' },
          { id: 'opt-b', text: '«el halcón»', textHy: '«el halcón»' },
          { id: 'opt-c', text: '«veloz»', textHy: '«veloz»' },
          { id: 'opt-d', text: 'No hay pleonasmo.', textHy: 'Պլեոնազմ չկա:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Volar lleva implícito el medio aéreo.',
        explanationHy: 'Թռչելն արդեն ենթադրում է օդային միջավայրը:'
      },
      {
        id: 'ple-q8',
        topicId: 'tema-18',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'complete',
        question: 'El pleonasmo utiliza términos que desde la lógica pura son ________, pero que transmiten fuerza afectiva.',
        questionHy: 'Պլեոնազմն օգտագործում է եզրույթներ, որոնք զուտ տրամաբանությունից ________ են, բայց փոխանցում են զգացմունքային ուժ:',
        options: [
          { id: 'opt-a', text: 'redundantes o innecesarios', textHy: 'ավելորդ կամ ոչ պարտադիր' },
          { id: 'opt-b', text: 'completamente obligatorios', textHy: 'լիովին պարտադիր' },
          { id: 'opt-c', text: 'en lengua extranjera', textHy: 'օտար լեզվով' },
          { id: 'opt-d', text: 'imposibles de pronunciar', textHy: 'անարտասանելի' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La lógica estricta no los necesita, pero la emoción poética sí.',
        explanationHy: 'Խիստ տրամաբանությանը դրանք պետք չեն, բայց բանաստեղծական հույզին՝ այո:'
      },
      {
        id: 'ple-q9',
        topicId: 'tema-18',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'identify',
        question: '¿Qué figura aparece en «Calla la boca y escucha»?',
        questionHy: 'Ի՞նչ պատկեր է հանդիպում «Calla la boca y escucha» արտահայտության մեջ:',
        options: [
          { id: 'opt-a', text: 'Pleonasmo', textHy: 'Պլեոնազմ' },
          { id: 'opt-b', text: 'Metáfora pura', textHy: 'Մաքուր փոխաբերություն' },
          { id: 'opt-c', text: 'Asíndeton', textHy: 'Անշաղկապություն' },
          { id: 'opt-d', text: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«La boca» es redundante con «callar», reforzando la orden con vehemencia.',
        explanationHy: '«La boca»-ն ավելորդ է «callar»-ի հետ՝ եռանդով ուժեղացնելով հրամանը:'
      },
      {
        id: 'ple-q10',
        topicId: 'tema-18',
        bloqueId: 4,
        difficulty: 'experto',
        questionType: 'classify',
        question: '¿Cómo clasificarías «Lo besó con sus labios ardientes»?',
        questionHy: 'Ինչպե՞ս կդասակարգեիր «Lo besó con sus labios ardientes» նախադասությունը:',
        options: [
          { id: 'opt-a', text: 'Pleonasmo poético amoroso', textHy: 'Սիրային բանաստեղծական պլեոնազմ' },
          { id: 'opt-b', text: 'Onomatopeya fónica', textHy: 'Հնչյունական բնաձայնություն' },
          { id: 'opt-c', text: 'Paronomasia cómica', textHy: 'Կատակերգական հարանունություն' },
          { id: 'opt-d', text: 'Romance heroico', textHy: 'Հերոսական ռոմանս' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Besar se efectúa con los labios: la mención resalta la sensualidad y pasión.',
        explanationHy: 'Համբուրում են շուրթերով. նշելն ընդգծում է զգացմունքայնությունն ու կիրքը:'
      }
    ]
  },

  // 11. METÁFORA
  {
    id: 'metafora',
    name: 'Metáfora',
    nameHy: 'Փոխաբերություն (մետաֆորա)',
    level: 'semántico',
    definitionEs: 'La metáfora es la identificación poética directa entre un término real (A) y un término imaginario (B), fundada en una semejanza o analogía común entre ambos.',
    definitionHy: 'Փոխաբերությունն ուղղակի բանաստեղծական նույնացումն է իրական եզրույթի (A) և երևակայական եզրույթի (B) միջև՝ հիմնված նրանց միջև ընդհանուր նմանության վրա:',
    simpleExplanationEs: 'Consiste en decir que una cosa ES otra cosa distinta porque se parecen en algo («sus ojos son estrellas», «las perlas de su boca»). A diferencia de la comparación, ¡NO lleva «como»!',
    simpleExplanationHy: 'Այն կայանում է ասելու մեջ, որ մի բանը ՄԵԿ ԱՅԼ բան Է, որովհետև ինչ-որ բանով նման են («նրա աչքերը աստղեր են», «նրա բերանի մարգարիտները»): Ի տարբերություն համեմատության՝ «ինչպես» (como) ՉՈՒՆԻ՛:',
    howToRecognizeEs: 'Busca una frase donde se afirme que algo del mundo real es transformado en algo bello o imaginario. Comprueba si NO lleva «como»: si no lleva «como», ¡es metáfora!',
    howToRecognizeHy: 'Փնտրի՛ր նախադասություն, որտեղ պնդվում է, որ իրական աշխարհի մի բան վերածվել է գեղեցիկ կամ երևակայական բանի: Ստուգի՛ր՝ արդյոք ՉՈՒՆԻ՞ «como». եթե չունի «como», ապա փոխաբերություն է:',
    confusedWithEs: 'Se confunde casi siempre con el símil o comparación.',
    confusedWithHy: 'Գրեթե միշտ շփոթվում է համեմատության (símil / comparación) հետ:',
    howToDistinguishEs: 'REGLA DE ORO: Si tiene «como», «parece» o «semejante a», es COMPARACIÓN (ej: «Sus ojos son COMO estrellas»). Si NO tiene «como» e identifica directamente a los dos, es METÁFORA (ej: «Sus ojos SON estrellas» o «Las estrellas de su rostro»).',
    howToDistinguishHy: 'ՈՍԿԵ ԿԱՆՈՆ. Եթե ունի «como» (ինչպես), «parece» (կարծես) կամ «semejante a» (նման), ապա ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ Է: Եթե ՉՈՒՆԻ «como» և ուղղակիորեն նույնացնում է երկուսը, ապա ՓՈԽԱԲԵՐՈՒԹՅՈՒՆ Է:',
    examples: [
      {
        text: '«Tus ojos son dos estrellas en la noche».',
        textHy: '«Քո աչքերը երկու աստղ են գիշերվա մեջ»:',
        breakdownEs: 'Forma A es B: Término real A = ojos. Término imaginario B = estrellas. Semejanza: el brillo resplandeciente.',
        breakdownHy: 'Կառուցվածք A es B. Իրական եզրույթ A = աչքեր: Երևակայական եզրույթ B = աստղեր: Նմանությունը՝ շողշողուն փայլը:',
        highlight: 'ojos son dos estrellas'
      },
      {
        text: '«Las perlas de su boca brillaban al sonreír».',
        textHy: '«Նրա բերանի մարգարիտները փայլում էին ժպտալիս»:',
        breakdownEs: 'Metáfora pura (B en lugar de A): Término imaginario B = perlas. Término real elidido A = dientes. Semejanza: blancura y redondez.',
        breakdownHy: 'Մաքուր փոխաբերություն (B-ն A-ի փոխարեն). B = մարգարիտներ, բաց թողնված A = ատամներ: Նմանությունը՝ սպիտակությունն ու կլորությունը:',
        highlight: 'Las perlas de su boca'
      },
      {
        text: '«El manto de nieve cubría la pradera».',
        textHy: '«Ձյան թիկնոցը ծածկում էր մարգագետինը»:',
        breakdownEs: 'Metáfora B de A: Término imaginario B = manto. Término real A = nieve. Semejanza: capa protectora y blanca.',
        breakdownHy: 'Կառուցվածք B de A. B = թիկնոց, A = ձյուն: Նմանությունը՝ սպիտակ պաշտպանիչ շերտը:',
        highlight: 'El manto de nieve'
      },
      {
        text: '«El tiempo es oro, no lo malgastes».',
        textHy: '«Ժամանակը ոսկի է, մի՛ վատնիր այն»:',
        breakdownEs: 'A es B: A = tiempo, B = oro. Semejanza: valor supremo insustituible.',
        breakdownHy: 'A es B. A = ժամանակ, B = ոսկի: Նմանությունը՝ գերագույն անփոխարինելի արժեքը:',
        highlight: 'El tiempo es oro'
      },
      {
        text: '«Su cabello son hilos de oro al viento».',
        textHy: '«Նրա մազերը ոսկե թելեր են քամու մեջ»:',
        breakdownEs: 'A es B: A = cabello rubio, B = hilos de oro. Semejanza: color dorado brillante.',
        breakdownHy: 'A es B. A = շիկահեր մազեր, B = ոսկե թելեր: Նմանությունը՝ շողացող ոսկեգույնը:',
        highlight: 'cabello son hilos de oro'
      },
      {
        text: '«El tambor de su pecho latía con furia desbocada».',
        textHy: '«Նրա կրծքի թմբուկը բաբախում էր անսանձ կատաղությամբ»:',
        breakdownEs: 'Metáfora B de A: B = tambor, A = pecho/corazón. Semejanza: golpe rítmico acelerado.',
        breakdownHy: 'B de A. B = թմբուկ, A = կուրծք/սիրտ: Նմանությունը՝ ռիթմիկ արագացված զարկերը:',
        highlight: 'El tambor de su pecho'
      },
      {
        text: '«El cielo llora lágrimas de cristal sobre la ciudad».',
        textHy: '«Երկինքը բյուրեղյա արցունքներ է լալիս քաղաքի վրա»:',
        breakdownEs: 'Metáfora pura: lágrimas de cristal = gotas de lluvia.',
        breakdownHy: 'Մաքուր փոխաբերություն. բյուրեղյա արցունքներ = անձրևի կաթիլներ:',
        highlight: 'lágrimas de cristal'
      },
      {
        text: '«Nuestras vidas son los ríos que van a dar en la mar».',
        author: 'Jorge Manrique',
        textHy: '«Մեր կյանքերը գետերն են, որ գնում են ծովը թափվելու»:',
        breakdownEs: 'A es B alegórica célebre: A = vidas, B = ríos (la mar = la muerte). Semejanza: flujo continuo e inevitable.',
        breakdownHy: 'Հայտնի փոխաբերություն. A = կյանքեր, B = գետեր (ծովը = մահ): Նմանությունը՝ անընդհատ և անխուսափելի հոսքը:',
        highlight: 'Nuestras vidas son los ríos'
      }
    ],
    miniTestQuestions: [
      {
        id: 'met-q1',
        topicId: 'tema-19',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'identify',
        question: '¿Qué figura literaria identifica un término real (A) con uno imaginario (B) sin usar nexos comparativos?',
        questionHy: 'Ո՞ր գեղարվեստական պատկերն է նույնացնում իրական եզրույթը (A) երևակայականի (B) հետ՝ առանց համեմատական շաղկապների:',
        options: [
          { id: 'opt-a', text: 'Metáfora', textHy: 'Փոխաբերություն' },
          { id: 'opt-b', text: 'Comparación o símil', textHy: 'Համեմատություն' },
          { id: 'opt-c', text: 'Hipérbaton', textHy: 'Հիպերբատոն' },
          { id: 'opt-d', text: 'Aliteración', textHy: 'Բաղաձայնույթ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La metáfora afirma la identidad poética directa entre A y B sin nexos comparativos.',
        explanationHy: 'Փոխաբերությունը հաստատում է ուղղակի բանաստեղծական նույնությունը A-ի և B-ի միջև առանց համեմատական շաղկապների:'
      },
      {
        id: 'met-q2',
        topicId: 'tema-19',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'compare',
        question: '¿Cuál es la diferencia fundamental entre metáfora y comparación?',
        questionHy: 'Ո՞րն է հիմնարար տարբերությունը փոխաբերության և համեմատության միջև:',
        options: [
          { id: 'opt-a', text: 'La comparación usa nexos explícitos («como», «parece»); la metáfora identifica directamente sin nexos.', textHy: 'Համեմատությունն օգտագործում է բացահայտ շաղկապներ («ինչպես», «կարծես»), իսկ փոխաբերությունն ուղղակիորեն նույնացնում է առանց շաղկապների:' },
          { id: 'opt-b', text: 'Son exactamente la misma figura literaria.', textHy: 'Դրանք ճիշտ նույն գրական պատկերն են:' },
          { id: 'opt-c', text: 'La metáfora solo existe en prosa.', textHy: 'Փոխաբերությունը գոյություն ունի միայն արձակում:' },
          { id: 'opt-d', text: 'La comparación no tiene significado.', textHy: 'Համեմատությունը չունի իմաստ:' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Tus ojos son como estrellas» es comparación; «Tus ojos son estrellas» es metáfora.',
        explanationHy: '«Tus ojos son como estrellas» համեմատություն է, իսկ «Tus ojos son estrellas»՝ փոխաբերություն:'
      },
      {
        id: 'met-q3',
        topicId: 'tema-19',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'identify',
        question: 'En la metáfora «Las perlas de su boca», ¿cuál es el término real elidido?',
        questionHy: '«Las perlas de su boca» փոխաբերության մեջ ո՞րն է բաց թողնված իրական եզրույթը:',
        options: [
          { id: 'opt-a', text: 'Los dientes blancos', textHy: 'Սպիտակ ատամները' },
          { id: 'opt-b', text: 'Los ojos verdes', textHy: 'Կանաչ աչքերը' },
          { id: 'opt-c', text: 'Las palabras tristes', textHy: 'Տխուր բառերը' },
          { id: 'opt-d', text: 'Los cabellos rubios', textHy: 'Շիկահեր մազերը' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«Perlas» sustituye metafóricamente a los dientes por su blancura y brillo.',
        explanationHy: '«Perlas» (մարգարիտներ) բառը փոխաբերաբար փոխարինում է ատամներին իրենց սպիտակության և փայլի համար:'
      },
      {
        id: 'met-q4',
        topicId: 'tema-19',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'matchexample',
        question: '¿Cuál de los siguientes enunciados es una METÁFORA y NO una comparación?',
        questionHy: 'Հետևյալ նախադասություններից ո՞րն է ՓՈԽԱԲԵՐՈՒԹՅՈՒՆ և ՈՉ ԹԵ համեմատություն:',
        options: [
          { id: 'opt-a', text: '«El tiempo es oro»', textHy: '«El tiempo es oro»' },
          { id: 'opt-b', text: '«Corre tan rápido como un leopardo»', textHy: '«Corre tan rápido como un leopardo»' },
          { id: 'opt-c', text: '«Su piel era blanca como la nieve»', textHy: '«Su piel era blanca como la nieve»' },
          { id: 'opt-d', text: '«Parece un oso dormilón»', textHy: '«Parece un oso dormilón»' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: '«El tiempo es oro» es estructura A es B sin nexos comparativos.',
        explanationHy: '«El tiempo es oro»-ն A es B կառուցվածք է առանց համեմատական շաղկապների:'
      },
      {
        id: 'met-q5',
        topicId: 'tema-19',
        bloqueId: 4,
        difficulty: 'facil',
        questionType: 'choice',
        question: '¿A qué nivel de las figuras literarias pertenece la metáfora?',
        questionHy: 'Գեղարվեստական պատկերների ո՞ր մակարդակին է պատկանում փոխաբերությունը:',
        options: [
          { id: 'opt-a', text: 'Nivel semántico (del significado)', textHy: 'Իմաստային մակարդակ (իմաստի)' },
          { id: 'opt-b', text: 'Nivel fónico (de los sonidos)', textHy: 'Հնչյունական մակարդակ (հնչյունների)' },
          { id: 'opt-c', text: 'Nivel morfosintáctico (del orden)', textHy: 'Շարահյուսական մակարդակ (կարգի)' },
          { id: 'opt-d', text: 'Nivel ortográfico', textHy: 'Ուղղագրական մակարդակ' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Al operar sobre el significado de las palabras pertenece al nivel semántico.',
        explanationHy: 'Բառերի իմաստի հետ աշխատելով՝ այն պատկանում է իմաստային մակարդակին:'
      },
      {
        id: 'met-q6',
        topicId: 'tema-19',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'truefalse',
        question: 'Verdadero o Falso: En la metáfora con estructura «A es B», aparecen tanto el término real como el imaginario.',
        questionHy: 'Ճի՞շտ է, թե՞ Սխալ. «A es B» կառուցվածքով փոխաբերության մեջ հանդիպում են և՛ իրական, և՛ երևակայական եզրույթները:',
        options: [
          { id: 'opt-a', text: 'Verdadero', textHy: 'Ճիշտ է' },
          { id: 'opt-b', text: 'Falso', textHy: 'Սխալ է' },
          { id: 'opt-c', text: 'Solo si tiene rima consonante', textHy: 'Միայն եթե ունի կոնսոնանս հանգ' },
          { id: 'opt-d', text: 'Solo en romances populares', textHy: 'Միայն ժողովրդական ռոմանսներում' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Verdadero: en «Tus ojos (A) son luceros (B)» ambos términos son explícitos.',
        explanationHy: 'Ճիշտ է. «Tus ojos (A) son luceros (B)» նախադասության մեջ երկու եզրույթներն էլ բացահայտ են:'
      },
      {
        id: 'met-q7',
        topicId: 'tema-19',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'identify',
        question: 'En «El manto de nieve cubría la sierra», ¿qué tipo de metáfora encontramos?',
        questionHy: '«El manto de nieve cubría la sierra» նախադասության մեջ ի՞նչ տեսակի փոխաբերություն ենք գտնում:',
        options: [
          { id: 'opt-a', text: 'Metáfora preposicional con estructura «B de A»', textHy: 'Նախդիրավոր փոխաբերություն «B de A» կառուցվածքով' },
          { id: 'opt-b', text: 'Metáfora pura sin término imaginario', textHy: 'Մաքուր փոխաբերություն առանց երևակայական եզրույթի' },
          { id: 'opt-c', text: 'Asíndeton fónico', textHy: 'Հնչյունական անշաղկապություն' },
          { id: 'opt-d', text: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'B = manto (imaginario), A = nieve (real), unidos por la preposición «de».',
        explanationHy: 'B = թիկնոց (երևակայական), A = ձյուն (իրական), միացված «de» նախդիրով:'
      },
      {
        id: 'met-q8',
        topicId: 'tema-19',
        bloqueId: 4,
        difficulty: 'medio',
        questionType: 'complete',
        question: 'El fundamento de una metáfora es la cualidad de ________ que comparten el término real y el imaginario.',
        questionHy: 'Փոխաբերության հիմքն այն ________ հատկանիշն է, որը կիսում են իրական և երևակայական եզրույթները:',
        options: [
          { id: 'opt-a', text: 'semejanza o analogía', textHy: 'նմանության կամ համաբանության' },
          { id: 'opt-b', text: 'ortografía idéntica', textHy: 'նույնական ուղղագրության' },
          { id: 'opt-c', text: 'rima en asonante', textHy: 'ասոնանս հանգի' },
          { id: 'opt-d', text: 'número de sílabas', textHy: 'վանկերի քանակի' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La mente une A y B porque guardan un parecido evidente o sugerido.',
        explanationHy: 'Միտքը միացնում է A-ն և B-ն, որովհետև նրանք ունեն ակնհայտ կամ ակնարկված նմանություն:'
      },
      {
        id: 'met-q9',
        topicId: 'tema-19',
        bloqueId: 4,
        difficulty: 'dificil',
        questionType: 'identify',
        question: 'En los versos de Jorge Manrique «Nuestras vidas son los ríos / que van a dar en la mar, / que es el morir», ¿qué representa «la mar»?',
        questionHy: 'Խորխե Մանրիկեի այս տողերում ի՞նչ է ներկայացնում «la mar» (ծովը):',
        options: [
          { id: 'opt-a', text: 'La muerte inevitable (término real elidido A)', textHy: 'Անխուսափելի մահը (իրական եզրույթ A)' },
          { id: 'opt-b', text: 'Las vacaciones de verano', textHy: 'Ամառային արձակուրդները' },
          { id: 'opt-c', text: 'El dinero acumulado', textHy: 'Կուտակված գումարը' },
          { id: 'opt-d', text: 'Una leyenda popular', textHy: 'Ժողովրդական լեգենդը' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'La mar representa la muerte donde desembocan todas las vidas humanas.',
        explanationHy: 'Ծովը ներկայացնում է մահը, որտեղ թափվում են բոլոր մարդկային կյանքերը:'
      },
      {
        id: 'met-q10',
        topicId: 'tema-19',
        bloqueId: 4,
        difficulty: 'experto',
        questionType: 'classify',
        question: 'Cuando un poeta dice «peinaba sus hilos de oro» (sin mencionar la palabra pelo o cabello), ha creado:',
        questionHy: 'Երբ բանաստեղծն ասում է «peinaba sus hilos de oro» (առանց մազ կամ վարս բառը նշելու), նա ստեղծել է՝',
        options: [
          { id: 'opt-a', text: 'Una metáfora pura (B en lugar de A)', textHy: 'Մաքուր փոխաբերություն (B-ն A-ի փոխարեն)' },
          { id: 'opt-b', text: 'Una comparación con «como»', textHy: 'Համեմատություն «como»-ով' },
          { id: 'opt-c', text: 'Un hipérbaton fónico', textHy: 'Հնչյունական հիպերբատոն' },
          { id: 'opt-d', text: 'Una onomatopeya de brillo', textHy: 'Փայլի բնաձայնություն' }
        ],
        correctOptionId: 'opt-a',
        explanationEs: 'Solo se expresa el término imaginario B («hilos de oro»), suprimiendo el real A («cabellos»). Es una metáfora pura.',
        explanationHy: 'Արտահայտվում է միայն երևակայական եզրույթը B («ոսկե թելեր»)՝ բաց թողնելով իրական A-ն («մազեր»): Դա մաքուր փոխաբերություն է:'
      }
    ]
  }
];

export const ALL_FIGURES = FIGURES_DEEP_DIVE;
