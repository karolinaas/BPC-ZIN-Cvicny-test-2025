const questions = [
    {
        question: "Jaký saxofon je na obrázku?",
        questionImage: "media/alt sax.jpg",
        options: ["barytonový", "altový", "tenorový"],
        answer: "altový"
    },
    {
        question: "Na ukázce hraje nástroj",
        audio: "media/ukazka 5.mp3",
        options: ["violoncello", "kontrabas", "viola"],
        answer: "violoncello"
    },
    {
        question: "Struny u křídla se v těle nekříží.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Pizz. v případě kontrabasu znamená",
        options: ["použij piezzo elektrický snímač", "hraj na prázdné struně", "hraj prsty pravé ruky"],
        answer: "hraj prsty pravé ruky"
    },
    {
        question: "Trup smyčcového nástroje v symfonickém orchestru se skládá:",
        options: ["Z basového trámce, duše, horního a spodního víka a lubů", "Z horního a spodního víka, duše a otvorů \"vé\"", "Z duše, horního a spodního víka, basového trámce a smyčce"],
        answer: "Z basového trámce, duše, horního a spodního víka a lubů"
    },
    {
        question: "V polouzavřené trubici vznikají liché i sudé harmonické složky.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Struny u houslí jsou",
        options: ["g, d, a, opředené, e celokovové", "g, d, opředené, c, e celokovové", "g, d opředené, a, e celokovové"],
        answer: "g, d, a, opředené, e celokovové"
    },
    {
        question: "Basové ukulele má jiné intervalové ladění než sopránové a tenorové.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Který z klíčů platí pro violu?",
        images: ["media/housl kl.png", "media/tenor kl.jpg", "media/viol kl.jpg", "media/bas kl.jpg"],
        answer: "media/viol kl.jpg"
    },
    {
        question: "V Taylorově vzorci označuje písmeno",
        questionImage: "media/2.jpg",
        options: ["F - tahovou sílu", "D - vychýlení amplitudy", "L - poloměr struny"],
        answer: "F - tahovou sílu"
    },
    {
        question: "Na obrázku je",
        questionImage: "media/trn.png",
        options: ["flautová píšťala varhan", "trn cembala", "jazýčková píšťala"],
        answer: "trn cembala"
    },
    {
        question: "Podpružené struny u violy jsou:",
        options: ["C, D", "d, a", "a, e"],
        answer: "C, D"
    },
    {
        question: "Ve zvukové ukázce hrají",
        audio: "media/ukazka 1.mp3",
        options: ["housle", "viola", "violoncello"],
        answer: "housle"
    },
    {
        question: "Rozsah a rejstříky na obrázku platí",
        questionImage: "media/cl range.jpg",
        options: ["pro příčnou flétnu", "pro altový saxofon", "pro klarinet"],
        answer: "pro klarinet"
    },
    {
        question: "Na ukázce hraje nástroj",
        audio: "media/ukázka 4.mp3",
        options: ["viola", "housle", "violoncello"],
        answer: "viola"
    },
    {
        question: "Na cimbál se hraje paličkami různé tvrdosti.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Pasáž je hrána artikulací",
        audio: "media/ukazka 2.mp3",
        options: ["spicato", "legato", "pizzicato", "sautille"],
        answer: "spicato"
    },
    {
        question: "Sul ponticello znamená",
        options: ["Hraj u kobylky", "Hraj nad hmatníkem", "Orať smyčec a hraj prutem"],
        answer: "Hraj u kobylky"
    },
    {
        question: "Rozsah na obrázku zhruba platí pro",
        questionImage: "media/irish flt.png",
        options: ["altovou sopránovou flétnu", "altovou sopránovou flétnu", "irskou - sopránovou a zobcovou - sopránovou flétnu"],
        answer: "irskou - sopránovou a zobcovou - sopránovou flétnu"
    },
    {
        question: "Viola je spíše nástroj",
        options: ["Altový", "Sopránový", "Basový"],
        answer: "Altový"
    },
    {
        question: "Na ukázce hraje nástroj",
        audio: "media/ukazka 6.mp3",
        options: ["kontrabas pizzicato", "kontrabas smyčcem", "violoncello smyčcem", "kontrabas smyčcem"],
        answer: "kontrabas pizzicato"
    },
    {
        question: "Harfa",
        options: ["je schopna udělat arpeggio, ale už ne glissando", "je schopna udělat glissando, už ne ale arpeggio", "je schopna udělat glissando i arpeggio"],
        answer: "je schopna udělat glissando i arpeggio"
    },
    {
        question: "Harfa obsahuje části těla: hlavici, koleno, krk",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Tenor saxofon zní",
        options: ["o oktávu níže, jak se píše", "stejně, jak se píše", "o velkou sekundu níže, jak se píše", "o nónu níže, jak se píše", "o sextu níže, jak se píše"],
        answer: "o nónu níže, jak se píše"
    },
    {
        question: "Pasáž je hrána artikulací",
        audio: "media/ukazka 3.mp3",
        options: ["staccato", "pizzicato", "spicato"],
        answer: "pizzicato"
    },
    {
        question: "Mandolína má podobné ladění jako",
        options: ["housle", "banjo", "viola"],
        answer: "housle"
    },
    {
        question: "Na ukázce hraje nástroj",
        audio: "media/ukázka 7.mp3",
        options: ["pikola ve vysoké poloze", "housle ve vysoké poloze", "viola ve vysoké poloze"],
        answer: "housle ve vysoké poloze"
    },
    {
        question: "Část violoncella, o který je nástroj opírá, se nazývá",
        options: ["ořech", "špička", "bodec"],
        answer: "bodec"
    },
    {
        question: "Viola de gamba má obvykle",
        options: ["Nemá pražce", "6 strun a pražce", "8 strun a má pražce"],
        answer: "6 strun a pražce"
    },
    {
        question: "Jak se jmenuje nástroj a jeho nepopsaná část",
        questionImage: "media/hlavice.jpg",
        options: ["irská flétna a \"breath hole\"", "pikola a roztrub", "příčná flétna a hlavice"],
        answer: "příčná flétna a hlavice"
    },
    {
        question: "Klarinet je vyroben ze středně těžkého, dubového dřeva.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Na obrázku je spektrum",
        questionImage: "media/cl sp.jpg",
        options: ["klarinetu", "hoboje", "cembala"],
        answer: "klarinetu"
    },
    {
        question: "Mandolína má",
        options: ["8 strun laděných po kvintách a primách", "4 struny laděné po kvintách", "4 struny laděné po kvartách"],
        answer: "8 strun laděných po kvintách a primách"
    },
    {
        question: "Nejsnadněji se flétnistovi hraje trylek na klapkách, které ovládá malíček",
        questionImage: "media/flt trylek.jpg",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Ve 4. poloze u houslí strunu drží",
        options: ["Malíček", "Prostředníček", "Ukazováček"],
        answer: "Prostředníček"
    },
    {
        question: "Struny houslí jsou laděny",
        options: ["v kvintách", "v kvintách a terciích", "v kvartách", "v kvartách a terciích"],
        answer: "v kvintách"
    },
    {
        question: "Pravá ruka u hry na banjo používá prstýnky a hraje převážně homofonní, tj. nerozkládané akordy.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Spektrum na obrázku je typické pro",
        questionImage: "media/sax_sp.jpg",
        options: ["klarinet", "flažolet", "saxofon"],
        answer: "saxofon"
    },
    {
        question: "Es klarinet zní",
        options: ["o malou tercii výše", "jak se píše", "o sekundu níže", "o velkou tercii výše"],
        answer: "o malou tercii výše"
    },
    {
        question: "Struna, která u houslí nejčastěji vybočuje a nezapadá do barvy orchestru, je",
        options: ["e", "g", "d"],
        answer: "e"
    },
    {
        question: "Adolf Sax hlavně inovoval nástroje tím, že",
        options: ["experimentoval s kónickým tvarem trubic", "měnil hustotu rezonátorů", "prodlužoval jejich korpus"],
        answer: "experimentoval s kónickým tvarem trubic"
    },
    {
        question: "Na obrázku je část klarinetu zvaná",
        questionImage: "media/ozvuc.jpg",
        options: ["ozvučník", "ligatura", "hlavice"],
        answer: "ozvučník"
    },
    {
        question: "Smyk je veden",
        questionImage: "media/smyk.jpg",
        options: ["od kobylky ku špičce", "od žabky ku špičce", "od špičky k žabce"],
        answer: "od žabky ku špičce"
    },
    {
        question: "Na obrázku je",
        questionImage: "media/Sordini.jpg",
        options: ["k srovnání žíní u smyčce", "k čistění strun", "k zatížení kobylky, jedná se o dusítko (sordini)"],
        answer: "k zatížení kobylky, jedná se o dusítko (sordini)"
    },
    {
        question: "Pikola se píše o oktávu výše než flétna",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Při saxofonové artikulaci Slap jazyk svou špičkou prudce vystřelí proti plátku a a při artikulaci Tongue Ram se plátku mírně dotkne plochou.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Délka klavírního křídla může být",
        options: ["od 130 do 220 cm", "od 180 až do 290 cm", "od 180 do 320 cm"],
        answer: "od 180 až do 290 cm"
    },
    {
        question: "Pomocí Besselových funkcí určujeme hlavně, jaké bude mít klarinet spektrum.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Theorba je",
        options: ["basová loutna", "arabský smyčcový nástroj", "indická píšťala"],
        answer: "basová loutna"
    },
    {
        question: "Zobcová flétna má malé dírky, a proto",
        options: ["Má méně harmonických složek než příčná, ale s větším odstupem od šumu", "Má stejně harmonických složek než příčná, ale s větším odstupem od šumu", "Má více harmonických složek než příčná a s větším odstupem od šumu"],
        answer: "Má více harmonických složek než příčná a s větším odstupem od šumu"
    },
    {
        question: "Část klavíru, na které leží vzadu struny, se jmenuje",
        options: ["kolík", "rám", "kobylka"],
        answer: "kobylka"
    },
    {
        question: "Parametry, které ovlivňují témbr píšťaly, jsou: rozměry – délka a průměr, tvar a materiál (hustota a pružnost)",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Na citeru hráč hraje tak, že",
        options: ["levou rukou vybrnkává a pravou mačká struny na hmatníku", "oběma rukama vybrnkává", "pravou rukou vybrnkává a levou mačká struny na hmatníku"],
        answer: "pravou rukou vybrnkává a levou mačká struny na hmatníku"
    },
    {
        question: "Kolik pedálů má harfa?",
        options: ["3", "7", "10"],
        answer: "7"
    },
    {
        question: "Tón klavíru dlouho zní a dýchá,",
        options: ["jsou-li struny v trojchóru mírně rozladěny", "jsou-li struny v čtyřchóru 2 naprosto sladěny a 2 mírně rozladěny", "jsou-li struny v dvojchóru naprosto totožně sladěny"],
        answer: "jsou-li struny v trojchóru mírně rozladěny"
    },
    {
        question: "Na obrázku je",
        questionImage: "media/spinet.jpg",
        options: ["část klavíru", "barytonový druh cembala", "spinet"],
        answer: "spinet"
    },
    {
        question: "Nejzpěvnější a nejpronikavější struna u violoncella je",
        options: ["C, ale nijak se neodlišuje od stejné polohy kontrabasu", "a, ta se výrazně odlišuje od stejných poloh houslí a viol", "G"],
        answer: "a, ta se výrazně odlišuje od stejných poloh houslí a viol"
    },
    {
        question: "Citár má rezonanční struny",
        options: ["jako bordunové strruny", "u nepohyblivých pražců - čikarí", "pod pražci"],
        answer: "pod pražci"
    },
    {
        question: "Citera má část prázdných strun laděných do",
        options: ["do sekundového kruhu", "kvartového kruhu", "kvintového kruhu"],
        answer: "kvintového kruhu"
    },
    {
        question: "Na obrázku je",
        questionImage: "media/ind flt.jpg",
        options: ["barokní flétna", "irská flétna", "indická flétna"],
        answer: "indická flétna"
    },
    {
        question: "Loutna má trup",
        options: ["rovnoběžný dole z tvrdého dřeva, nahoře s deskou z měkkého dřeva", "dole vydutý, krk je nelomený", "dole vydutý z tvrdého dřeva, nahoře s deskou z měkkého dřeva"],
        answer: "dole vydutý z tvrdého dřeva, nahoře s deskou z měkkého dřeva"
    },
    {
        question: "Který z následujících vzorců platí pro rozsah houslí?",
        images: ["media/vla.png", "media/bass.png", "media/vno.png"],
        answer: "media/vno.png"
    },
    {
        question: "V případě čísla 21 bude obvykle ve smyčcovém orchestru",
        options: ["8 prim, 6 sekund, 3 violy, 2 cella a 2 konatrabasy", "3 primy, 3 sekundy, 7 viol, 7 cell, 1 kontrabas", "6 prim, 5 sekund, 4 violy, 4 cella a 2 kontrabasy"],
        answer: "6 prim, 5 sekund, 4 violy, 4 cella a 2 kontrabasy"
    },
    {
        question: "Klarinet patří mezi",
        options: ["jednoplátkové nástroje", "nástroje, kde zvuk vzniká lomením o hranu.", "dvojplátkové nástroje"],
        answer: "jednoplátkové nástroje"
    },
    {
        question: "Líný jazýček u klarinetu generuje signál ve tvaru obdélníku, hbitý jazýček signál ve tvaru trojúhelníku.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Indická flétna má větší dírky než zobcová.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Flétna přefukuje do",
        options: ["oktávy", "kvinty", "duodecimy"],
        answer: "oktávy"
    },
    {
        question: "Mezi smyky neopouštějící strunu patří:",
        options: ["Detaché, legato a tenuto", "Legato, detaché a sautillé", "Spiccato, tenuto a detaché"],
        answer: "Detaché, legato a tenuto"
    },
    {
        question: "Rozsah violy je",
        options: ["od c po e3", "od c po e2", "od g po g3", "od c1 po c4"],
        answer: "od c po e3"
    },
    {
        question: "Na obrázku je rozsah",
        questionImage: "media/klav_rozsah.png",
        options: ["klavíru", "cembala", "cimbálu"],
        answer: "klavíru"
    },
    {
        question: "Které ladění platí pro loutnu?",
        images: ["media/lad_balalaj.png", "media/lad_kyt.png", "media/zadne z obrazku.png"],
        answer: "media/zadne z obrazku.png"
    },
    {
        question: "V případě španělské kytary pravá ruka",
        options: ["vybrnkává bas palcem", "používá prstýnky", "vybrnkává bas prostředníčkem a prsteníčkem"],
        answer: "vybrnkává bas palcem"
    },
    {
        question: "Balalajka je laděná do",
        options: ["tercie a malé sekundy", "kvarty a malé sekundy", "kvinty a malé sekundy"],
        answer: "kvarty a malé sekundy"
    },
    {
        question: "Výšku tónu u flétny lze ovlivnit",
        questionImage: "media/sterbina.jpg",
        options: ["tlakem vzduchu z úst a velikostí štěrbiny", "jen tlakem vzduchu z úst", "velikostí štěrbiny"],
        answer: "tlakem vzduchu z úst a velikostí štěrbiny"
    },
    {
        question: "Ladění u banja:",
        options: ["první struna bývá naladěna obvykle stejně jako pátá struna", "první struna bývá naladěna nejvýše"],
        answer: "první struna bývá naladěna nejvýše"
    },
    {
        question: "Struna g u houslí má velmi tichý fundament, protože",
        options: ["Protože jej korpus není schopen při své velikosti podpořit celou vlnovou délku fundamentu", "Protože jej korpus není schopen při své velikosti podpořit čtvrtinovou vlnovou délku fundamentu", "Smyčec jej není schopen v této poloze vygenerovat"],
        answer: "Protože jej korpus není schopen při své velikosti podpořit čtvrtinovou vlnovou délku fundamentu"
    },
    {
        question: "Panovu flétnu dolaďujeme výše",
        options: ["prodlužováním trubic", "zvyšováním průměrů trubic", "zkracováním trubic"],
        answer: "zkracováním trubic"
    },
    {
        question: "Která značka nepatří mezi výrobce klavírů?",
        options: ["Kawai", "Fazioli", "Tama"],
        answer: "Tama"
    },
    {
        question: "Nultý pražec u kytary se nazývá",
        options: ["hlava", "ořech", "žebro"],
        answer: "ořech"
    },
    {
        question: "Saz je",
        options: ["arabský nástroj, má 7 strun, 3 bývají ztrojené a 2 zdvojené", "japonský nástroj, má 6 strun, všechny bývají zdvojené", "italský nástroj, má 4 struny, 2 jsou zdvojené"],
        answer: "arabský nástroj, má 7 strun, 3 bývají ztrojené a 2 zdvojené"
    },
    {
        question: "Na obrázku je",
        questionImage: "media/alt flt.png",
        options: ["basová příčná flétna", "sopránová příčná flétna", "altová příčná flétna"],
        answer: "altová příčná flétna"
    },
    {
        question: "O jaký smyk se jedná?",
        questionImage: "media/tenuto.png",
        options: ["Detache", "Staccato", "Tenuto", "Spiccato", "Legato"],
        answer: "Tenuto"
    },
    {
        question: "Který z nástrojů je violoncello?",
        images: ["media/vcllo.png", "media/vla.jpg", "media/cb.jpg"],
        answer: "media/vcllo.png"
    },
    {
        question: "Balalajky mají",
        options: ["trojúhelníková těla a 3 struny", "oválná těla a 4 struny", "trojúhelníková těla a 4 struny"],
        answer: "trojúhelníková těla a 3 struny"
    },
    {
        question: "Mezi rezonanční módy kytary patří: rezonance skříňky, rezonance krku, rezonance horní desky, rezonance spodní desky. mezi nimi ještě chybí.....",
        options: ["vzdušná rezonance", "rezonance strun", "rezonance žebroví"],
        answer: "vzdušná rezonance"
    },
    {
        question: "Vrchní díl klarinetu nejblíže ústům se nazývá",
        options: ["hubička", "ozvučník", "soudek"],
        answer: "hubička"
    },
    {
        question: "Horní rejstříky pikoly jsou velmi hlasité a nedoporučují se pro dlouhé noty.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Který z níže uvedených je Taylorův vzorec?",
        images: ["media/2 1.jpg", "media/1.jpg", "media/3.jpg"],
        answer: "media/2 1.jpg"
    },
    {
        question: "Koto je východoasijský nástroj s pevně umístěnými kobylkami.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Ve vzorci pro vznik třecích tónů chybí veličina",
        questionImage: "media/treci ton.jpg",
        options: ["u – vzdálenost hrany od štěrbiny", "l - délka píšťaly", "ϱ - hustota"],
        answer: "u – vzdálenost hrany od štěrbiny"
    },
    {
        question: "Na kontrabas",
        options: ["nezahrajeme stisknutím struny již tón a3", "nelze hrát flažolety", "při jemném dotyku ve třetině struny g zazní tón e1"],
        answer: "nezahrajeme stisknutím struny již tón a3"
    },
    {
        question: "Koncertní kontrabas zní",
        options: ["o m2 výše", "o v2 výše", "o m2 níže"],
        answer: "o v2 výše"
    },
    {
        question: "Kladívka u křídla jsou všechny stejně velká.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Na obrázku je",
        questionImage: "media/theorba.jpg",
        options: ["tenorová loutna", "theorba", "citár"],
        answer: "theorba"
    },
    {
        question: "Ukulele má struny",
        options: ["celokovové", "z nylonu", "část celokovových a část kovových opředených"],
        answer: "z nylonu"
    },
    {
        question: "Pedály harfy mohou změnit polohu",
        options: ["půl o tři úrovně - půltóny a půl o dvě úrovně - celé tóny", "všechny o tři úrovně - půltóny", "všechny o čtyři úrovně - půltóny"],
        answer: "všechny o tři úrovně - půltóny"
    },
    {
        question: "Cembalo nemůže pracovat s rejstříky",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "tenorová zobcová flétna zní",
        options: ["o oktávu níže než sopránová", "o duodecimu níže než sopránová", "o kvintu níže než sopránová"],
        answer: "o oktávu níže než sopránová"
    },
    {
        question: "Intonér klavíru pracuje jen se sladěním strun.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Harfa nemá rezonanční skříň",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Na obrázku je",
        questionImage: "media/shamizen.jpg",
        options: ["saz", "shamizen", "ruský typ banja"],
        answer: "shamizen"
    },
    {
        question: "O jakou smyčcovou artikulaci se jedná?",
        questionImage: "media/tremolo.png",
        options: ["Tremolo", "Tenuto", "Pizzicato"],
        answer: "Tremolo"
    },
    {
        question: "Saxofony mají jen B ladění.",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Saz má temperovaně laděné pražce",
        options: ["Pravda", "Nepravda"],
        answer: "Nepravda"
    },
    {
        question: "Na obrázku jsou",
        questionImage: "media/sham_trs.jpg",
        options: ["trsátka na shamizen", "trsátka na saz", "trsátka na různé balalajky"],
        answer: "trsátka na shamizen"
    },
    {
        question: "Rezonanční deska klavíru",
        questionImage: "media/rez_deska.jpg",
        options: ["je mírně prohnutá díky žebroví a tím i lépe rezonuje", "je rovná, žebroví ji zpevňuje", "je rovná, žebroví má za úkol vytvořit rezonanční módy"],
        answer: "je mírně prohnutá díky žebroví a tím i lépe rezonuje"
    },
    {
        question: "Na obrázku je",
        questionImage: "media/oud.jpg",
        options: ["Oud", "Loutna"],
        answer: "Oud"
    },
    {
        question: "Noty s laděním prázdných strun platí pro",
        questionImage: "media/ukul.png",
        options: ["ukulele", "banjo", "mandolínu"],
        answer: "ukulele"
    },
    {
        question: "Kytara kombinuje",
        options: ["kvartové a sekundové ladění a zní, jak se píše", "kvartové a terciové ladění a zní o oktávu níže", "kvartové a terciové ladění a zní, jak se píše"],
        answer: "kvartové a terciové ladění a zní o oktávu níže"
    },
    {
        question: "Basové ukulele má jiné intervalové ladění než sopránové a tenorové.",
        options: ["Pravda", "Nepravda"],
        answer: "Pravda"
    },
    {
        question: "Kontrabas má oproti baskytaře",
        options: ["Výraznější formantové oblasti díky módům rezonanční skříně", "Méně výrazné formantové oblasti", "Někdy výraznější formantové oblasti, ale nevíme proč"],
        answer: "Výraznější formantové oblasti díky módům rezonanční skříně"
    }
];
