import { WordLookup } from './types.ts';

export const DICTIONARY: Record<string, WordLookup> = {
  // Literary Terms & Figures
  aliteracion: {
    word: 'aliteración',
    lemma: 'aliteración',
    pos: 'sustantivo femenino',
    meaningHy: 'բաղաձայնույթ (նույն կամ նմանատիպ հնչյունների կրկնություն)',
    contextExampleEs: 'La aliteración crea un efecto sonoro y musical en el verso.',
    contextExampleHy: 'Բաղաձայնույթը բանաստեղծական տողում ստեղծում է հնչյունային և երաժշտական ազդեցություն:'
  },
  onomatopeya: {
    word: 'onomatopeya',
    lemma: 'onomatopeya',
    pos: 'sustantivo femenino',
    meaningHy: 'բնաձայնություն (բնական կամ իրական ձայների նմանակում)',
    contextExampleEs: 'El «tic-tac» del reloj es una onomatopeya clásica.',
    contextExampleHy: 'Ժամացույցի «տիկ-տակ»-ը դասական բնաձայնություն է:'
  },
  paronomasia: {
    word: 'paronomasia',
    lemma: 'paronomasia',
    pos: 'sustantivo femenino',
    meaningHy: 'հարանունություն / պարոնոմազիա (նմանահունչ, բայց տարբեր իմաստ ունեցող բառերի գործածում)',
    contextExampleEs: 'En la paronomasia se colocan palabras de sonido muy parecido pero distinto significado.',
    contextExampleHy: 'Հարանունության մեջ օգտագործվում են շատ նման հնչողությամբ, բայց տարբեր իմաստով բառեր:'
  },
  epanadiplosis: {
    word: 'epanadiplosis',
    lemma: 'epanadiplosis',
    pos: 'sustantivo femenino',
    meaningHy: 'էպանադիպլոզիս (նույն բառի կրկնություն տողի սկզբում և վերջում)',
    contextExampleEs: '«Verde que te quiero verde» es el ejemplo más famoso de epanadiplosis.',
    contextExampleHy: '«Կանաչ, ինչքան եմ քեզ սիրում, կանաչ»-ը էպանադիպլոզիսի ամենահայտնի օրինակն է:'
  },
  anafora: {
    word: 'anáfora',
    lemma: 'anáfora',
    pos: 'sustantivo femenino',
    meaningHy: 'անաֆորա / առաջնակրկնություն (մի քանի տողերի սկզբում նույն բառի կրկնություն)',
    contextExampleEs: 'La anáfora repite una o más palabras al comienzo de varios versos sucesivos.',
    contextExampleHy: 'Անաֆորան կրկնում է մեկ կամ մի քանի բառ հաջորդական տողերի սկզբում:'
  },
  hiperbaton: {
    word: 'hipérbaton',
    lemma: 'hipérbaton',
    pos: 'sustantivo masculino',
    meaningHy: 'հիպերբատոն / շարադասության խախտում (նախադասության բառերի սովորական կարգի փոփոխություն)',
    contextExampleEs: 'El hipérbaton altera el orden habitual de las palabras por motivos expresivos o métricos.',
    contextExampleHy: 'Հիպերբատոնը փոխում է բառերի սովորական շարադասությունը արտահայտչական կամ չափական նպատակներով:'
  },
  asindeton: {
    word: 'asíndeton',
    lemma: 'asíndeton',
    pos: 'sustantivo masculino',
    meaningHy: 'անշաղկապություն / ասինդետոն (շաղկապների բացթողում արագության և դինամիզմի համար)',
    contextExampleEs: 'El asíndeton elimina las conjunciones para dar rapidez y dinamismo al ritmo.',
    contextExampleHy: 'Անշաղկապությունը վերացնում է շաղկապները՝ ռիթմին արագություն և դինամիզմ հաղորդելու համար:'
  },
  polisindeton: {
    word: 'polisíndeton',
    lemma: 'polisíndeton',
    pos: 'sustantivo masculino',
    meaningHy: 'բազմաշաղկապություն / պոլիսինդետոն (շաղկապների միտումնավոր կրկնություն ծանրության կամ հանդիսավորության համար)',
    contextExampleEs: 'El polisíndeton usa conjunciones repetidas como «y», «ni» o «que».',
    contextExampleHy: 'Բազմաշաղկապությունն օգտագործում է կրկնվող շաղկապներ, ինչպիսիք են «և», «ոչ» կամ «որ»:'
  },
  enumeracion: {
    word: 'enumeración',
    lemma: 'enumeración',
    pos: 'sustantivo femenino',
    meaningHy: 'թվարկում (համասեռ անդամների կամ մտքերի հաջորդական շարադրանք)',
    contextExampleEs: 'La enumeración acumula elementos sucesivos como sustantivos, adjetivos o acciones.',
    contextExampleHy: 'Թվարկումը կուտակում է հաջորդական տարրեր, օրինակ՝ գոյականներ, ածականներ կամ գործողություններ:'
  },
  pleonasmo: {
    word: 'pleonasmo',
    lemma: 'pleonasmo',
    pos: 'sustantivo masculino',
    meaningHy: 'պլեոնազմ / ավելաբանություն (իմաստով ավելորդ բառերի գործածում՝ արտահայտչական շեշտադրման համար)',
    contextExampleEs: '«Lo vi con mis propios ojos» es un pleonasmo que refuerza la afirmación.',
    contextExampleHy: '«Տեսա սեփական աչքերով»-ը պլեոնազմ է, որն ուժեղացնում է պնդումը:'
  },
  metafora: {
    word: 'metáfora',
    lemma: 'metáfora',
    pos: 'sustantivo femenino',
    meaningHy: 'փոխաբերություն / մետաֆոր (հատկանիշի տեղափոխում նմանության հիման վրա)',
    contextExampleEs: 'La metáfora identifica un término real (A) con uno imaginario (B) por su semejanza.',
    contextExampleHy: 'Փոխաբերությունը նմանության հիման վրա նույնացնում է իրական եզրույթը (A) երևակայականի (B) հետ:'
  },
  simil: {
    word: 'símil',
    lemma: 'símil',
    pos: 'sustantivo masculino',
    meaningHy: 'համեմատություն (երկու հասկացությունների բացահայտ համեմատում «como» կամ նման բառերով)',
    contextExampleEs: 'El símil utiliza nexos comparativos como «como», «parece» o «igual que».',
    contextExampleHy: 'Համեմատությունն օգտագործում է համեմատական շաղկապներ, օրինակ՝ «ինչպես», «կարծես» կամ «նման»:'
  },
  comparacion: {
    word: 'comparación',
    lemma: 'comparación',
    pos: 'sustantivo femenino',
    meaningHy: 'համեմատություն (երկու երևույթների առերես համեմատություն)',
    contextExampleEs: 'La comparación explícita no es una metáfora pura porque mantiene el nexo «como».',
    contextExampleHy: 'Բացահայտ համեմատությունը մաքուր փոխաբերություն չէ, որովհետև պահպանում է «ինչպես» շաղկապը:'
  },
  romance: {
    word: 'romance',
    lemma: 'romance',
    pos: 'sustantivo masculino',
    meaningHy: 'ռոմանս (իսպանական ավանդական քնարա-էպիկական բանաստեղծություն, 8-վանկանի տողերով)',
    contextExampleEs: 'El romance tiene versos octosílabos con rima asonante en los versos pares.',
    contextExampleHy: 'Ռոմանսն ունի ութավանկ տողեր՝ զույգ տողերում բաղաձայնային (ասոնանս) հանգով:'
  },
  octosilabo: {
    word: 'octosílabo',
    lemma: 'octosílabo',
    pos: 'adjetivo / sustantivo',
    meaningHy: 'ութավանկ (8 վանկից բաղկացած բանաստեղծական տող)',
    contextExampleEs: 'El verso octosílabo es el más representativo de la poesía popular española.',
    contextExampleHy: 'Ութավանկ տողը իսպանական ժողովրդական պոեզիայի ամենաբնորոշ չափն է:'
  },
  rima: {
    word: 'rima',
    lemma: 'rima',
    pos: 'sustantivo femenino',
    meaningHy: 'հանգ (տողավերջի հնչյունների համահունչ կրկնություն)',
    contextExampleEs: 'La rima puede ser asonante o consonante según los sonidos que coincidan.',
    contextExampleHy: 'Հանգը կարող է լինել ասոնանս (ձայնավորային) կամ կոնսոնանս (լրիվ)՝ ըստ համընկնող հնչյունների:'
  },
  asonante: {
    word: 'asonante',
    lemma: 'asonante',
    pos: 'adjetivo',
    meaningHy: 'ասոնանսային / ձայնավորային հանգ (համընկնում են միայն ձայնավորները վերջին շեշտված վանկից սկսած)',
    contextExampleEs: 'En la rima asonante solo coinciden las vocales a partir de la última vocal tónica.',
    contextExampleHy: 'Ասոնանս հանգում համընկնում են միայն ձայնավորները՝ վերջին շեշտված ձայնավորից սկսած:'
  },
  consonante: {
    word: 'consonante',
    lemma: 'consonante',
    pos: 'adjetivo',
    meaningHy: 'կոնսոնանսային / լրիվ հանգ (համընկնում են և՛ ձայնավորները, և՛ բաղաձայնները)',
    contextExampleEs: 'En la rima consonante coinciden todos los sonidos vocálicos y consonánticos.',
    contextExampleHy: 'Կոնսոնանս հանգում համընկնում են բոլոր ձայնավոր և բաղաձայն հնչյունները:'
  },
  leyenda: {
    word: 'leyenda',
    lemma: 'leyenda',
    pos: 'sustantivo femenino',
    meaningHy: 'ավանդազրույց / լեգենդ (իրական պատմական հիմք ունեցող, բայց հրաշապատում տարրերով հարստացված պատմություն)',
    contextExampleEs: 'La leyenda mezcla hechos históricos o reales con elementos fantásticos y sobrenaturales.',
    contextExampleHy: 'Լեգենդը խառնում է պատմական կամ իրական փաստերը ֆանտաստիկ ու գերբնական տարրերի հետ:'
  },
  mito: {
    word: 'mito',
    lemma: 'mito',
    pos: 'sustantivo masculino',
    meaningHy: 'առասպել / միֆ (աստվածների, աշխարհի ու բնական երևույթների ծագումը բացատրող սրբազան պատմություն)',
    contextExampleEs: 'El mito explica el origen del universo, los dioses y los fenómenos de la naturaleza.',
    contextExampleHy: 'Առասպելը բացատրում է տիեզերքի, աստվածների և բնության երևույթների ծագումը:'
  },
  cuento: {
    word: 'cuento',
    lemma: 'cuento',
    pos: 'sustantivo masculino',
    meaningHy: 'հեքիաթ / կարճ պատմվածք (հորինված, հակիրճ արձակ պատմություն՝ քիչ կերպարներով)',
    contextExampleEs: 'El cuento es una narración breve de ficción con argumento sencillo y estructura clara.',
    contextExampleHy: 'Հեքիաթը/պատմվածքը հորինված կարճ պատմություն է՝ պարզ սյուժեով և հստակ կառուցվածքով:'
  },
  anonimo: {
    word: 'anónimo',
    lemma: 'anónimo',
    pos: 'adjetivo',
    meaningHy: 'անանուն (հեղինակը հայտնի չէ, պատկանում է ողջ ժողովրդին)',
    contextExampleEs: 'Las obras de la literatura popular son anónimas porque su autor original se ha olvidado.',
    contextExampleHy: 'Ժողովրդական գրականության ստեղծագործություններն անանուն են, քանի որ սկզբնական հեղինակը մոռացվել է:'
  },
  oral: {
    word: 'oral',
    lemma: 'oral',
    pos: 'adjetivo',
    meaningHy: 'բանավոր (խոսքով, բերանացի փոխանցվող)',
    contextExampleEs: 'La transmisión oral se realiza de viva voz de padres a hijos a través del tiempo.',
    contextExampleHy: 'Բանավոր փոխանցումը կատարվում է կենդանի խոսքով՝ ծնողներից զավակներին ժամանակի ընթացքում:'
  },
  estribillo: {
    word: 'estribillo',
    lemma: 'estribillo',
    pos: 'sustantivo masculino',
    meaningHy: 'կրկներգ (բանաստեղծության կամ երգի մեջ պարբերաբար կրկնվող տող կամ տներ)',
    contextExampleEs: 'El estribillo se repite al final de cada estrofa y facilita recordar la canción.',
    contextExampleHy: 'Կրկներգը կրկնվում է յուրաքանչյուր տան վերջում և հեշտացնում է երգը հիշելը:'
  },
  prosa: {
    word: 'prosa',
    lemma: 'prosa',
    pos: 'sustantivo femenino',
    meaningHy: 'արձակ (բնական շարադրանք՝ առանց տողաչափական խիստ կանոնների և հանգի)',
    contextExampleEs: 'La prosa se escribe ocupando todo el renglón sin sujetarse a medida métrica fija.',
    contextExampleHy: 'Արձակը գրվում է ամբողջ տողը զբաղեցնելով՝ առանց հաստատուն չափական կանոնների:'
  },
  verso: {
    word: 'verso',
    lemma: 'verso',
    pos: 'sustantivo masculino',
    meaningHy: 'տող / չափածո տող (բանաստեղծական առանձին տող՝ որոշակի չափով և ռիթմով)',
    contextExampleEs: 'Cada línea de un poema es un verso y suele tener un ritmo y número de sílabas concreto.',
    contextExampleHy: 'Բանաստեղծության յուրաքանչյուր տող կոչվում է վերս և սովորաբար ունի որոշակի ռիթմ և վանկերի քանակ:'
  },
  estrofa: {
    word: 'estrofa',
    lemma: 'estrofa',
    pos: 'sustantivo femenino',
    meaningHy: 'տուն (բանաստեղծական տողերի խումբ, որոնք միավորված են հանգով կամ կառուցվածքով)',
    contextExampleEs: 'Los poemas suelen dividirse en estrofas separadas por espacios en blanco.',
    contextExampleHy: 'Բանաստեղծությունները սովորաբար բաժանվում են տների՝ առանձնացված դատարկ տարածություններով:'
  },
  metrica: {
    word: 'métrica',
    lemma: 'métrica',
    pos: 'sustantivo femenino',
    meaningHy: 'տաղաչափություն (տողերի վանկերի հաշվարկման և հանգավորման կանոնների համակարգ)',
    contextExampleEs: 'La métrica estudia la medida de los versos y la estructura de las estrofas.',
    contextExampleHy: 'Տաղաչափությունն ուսումնասիրում է տողերի չափը և տների կառուցվածքը:'
  },
  sinalefa: {
    word: 'sinalefa',
    lemma: 'sinalefa',
    pos: 'sustantivo femenino',
    meaningHy: 'սինալեֆա (նախորդ բառի վերջին ձայնավորի և հաջորդ բառի սկզբնական ձայնավորի միաձուլումը մեկ վանկի մեջ)',
    contextExampleEs: 'La sinalefa une la vocal final de una palabra con la inicial de la siguiente.',
    contextExampleHy: 'Սինալեֆան միացնում է բառի վերջին ձայնավորը հաջորդ բառի սկզբնական ձայնավորի հետ մեկ վանկում:'
  },
  culta: {
    word: 'culta',
    lemma: 'culto',
    pos: 'adjetivo',
    meaningHy: 'գրական / բարձրաշխարհիկ / հեղինակային (կրթված հեղինակի կողմից գրված)',
    contextExampleEs: 'La literatura culta tiene autor conocido y un lenguaje muy cuidado y elaborado.',
    contextExampleHy: 'Գրական (հեղինակային) գրականությունն ունի հայտնի հեղինակ և շատ մշակված ու հարուստ լեզու:'
  },
  popular: {
    word: 'popular',
    lemma: 'popular',
    pos: 'adjetivo',
    meaningHy: 'ժողովրդական (ժողովրդի կողմից ստեղծված և սերնդեսերունդ փոխանցվող)',
    contextExampleEs: 'La literatura popular nace del pueblo y se transmite oralmente de generación en generación.',
    contextExampleHy: 'Ժողովրդական գրականությունը ծնվում է ժողովրդից և բանավոր փոխանցվում սերնդեսերունդ:'
  },
  desenlace: {
    word: 'desenlace',
    lemma: 'desenlace',
    pos: 'sustantivo masculino',
    meaningHy: 'հանգուցալուծում (պատմվածքի կամ դրամայի ավարտական փուլը, որտեղ լուծվում է կոնֆլիկտը)',
    contextExampleEs: 'En el desenlace se resuelve el conflicto principal planteado en el nudo.',
    contextExampleHy: 'Հանգուցալուծման մեջ լուծվում է հանգույցում առաջացած հիմնական հակամարտությունը:'
  },
  nudo: {
    word: 'nudo',
    lemma: 'nudo',
    pos: 'sustantivo masculino',
    meaningHy: 'հանգույց / զարգացում (պատմվածքի կենտրոնական մասը, որտեղ ծավալվում է գործողությունը)',
    contextExampleEs: 'El nudo es la parte central de la narración donde surge el problema o conflicto.',
    contextExampleHy: 'Հանգույցը պատմության կենտրոնական մասն է, որտեղ ծագում է խնդիրը կամ հակամարտությունը:'
  },
  planteamiento: {
    word: 'planteamiento',
    lemma: 'planteamiento',
    pos: 'sustantivo masculino',
    meaningHy: 'նախաբան / սկիզբ (պատմվածքի սկիզբը, որտեղ ներկայացվում են կերպարները, տեղը և ժամանակը)',
    contextExampleEs: 'En el planteamiento se presentan los personajes, el lugar y la situación inicial.',
    contextExampleHy: 'Նախաբանում ներկայացվում են հերոսները, վայրը և սկզբնական իրավիճակը:'
  }
};

export function lookupWord(cleanWord: string): WordLookup | null {
  const normalized = cleanWord
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');

  if (DICTIONARY[normalized]) {
    return DICTIONARY[normalized];
  }

  // Also check direct entries
  for (const key of Object.keys(DICTIONARY)) {
    if (key === normalized || DICTIONARY[key].lemma === cleanWord.toLowerCase()) {
      return DICTIONARY[key];
    }
  }

  return null;
}
