import shawshank from "../assets/shawshank.jpg";
import godfather from "../assets/godfather.jpg";
import darkknight from "../assets/darkknight.jpg";
import pulpfiction from "../assets/pulpfiction.jpg";
import fightclub from "../assets/fightclub.jpg";
import forrestgump from "../assets/forrestgump.jpg";
import inception from "../assets/inception.jpg";
import lordpfrings from "../assets/lordofrings.jpg";
import socialnetwork from "../assets/socialnetwork.jpg";
import gladiator from "../assets/gladiator.jpg";
import whiplash from "../assets/whiplash.jpg";
import parasite from "../assets/parasite.jpg";
import interstellar from "../assets/interstellar.jpg";
import greenmile from "../assets/greenmile.jpg";
import prestige from "../assets/prestige.jpg";
import truman from "../assets/truman.jpg";
import django from "../assets/django.jpeg";
import coco from "../assets/coco.jpg";
import wolf from "../assets/wolf.jpg";
import walle from "../assets/walle.jpg";
import madmax from "../assets/madmax.jpg";
import budapest from "../assets/budapest.jpg";
import revenant from "../assets/revenant.jpg";
import blackswan from "../assets/blackswan.jpg";
import imitation from "../assets/imitation.jpg";
import beautifulmind from "../assets/beautifulmind.jpg";
import departed from "../assets/departed.jpg";
import pianist from "../assets/pianist.jpg";
import hunt from "../assets/hunt.jpg";
import deadpoets from "../assets/deadpoets.jpg";
import onenineseven from "../assets/1917.jpg";
import her from "../assets/her.jpg";
import shutter from "../assets/shutter.jpg";
import handmaiden from "../assets/handmaiden.jpg";
import livesofothers from "../assets/livesofothers.jpg";
import childrenofmen from "../assets/childrenofmen.jpg";
import amelie from "../assets/amelie.jpg";
import enemy from "../assets/enemy.jpg";
import nightcrawler from "../assets/nightcrawler.jpg";
import secretintheireyes from "../assets/secretintheireyes.jpg";
import panslabyrinth from "../assets/panslabyrinth.jpg";
import manfromearth from "../assets/manfromearth.jpg";

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    imdbRating: 9.3,
    genre: "Dram",
    country: "ABD",
    duration: "142 dakika",
    description:
      "Haksız yere ömür boyu hapse mahkum edilen Andy Dufresne’in Shawshank Hapishanesi’ndeki mücadelesi, insan ruhunun direnci ve umudu üzerine epik bir anlatı sunar. Zamanla diğer mahkumlarla dostluk kurar ve özellikle Red ile özel bir bağ geliştirir. Andy’nin zekası ve inadı, hapishanenin gri duvarları arasında bile özgür bir ruhun yeşermesine olanak tanır. Film, adalet sistemi, suçluluk ve kefaret gibi evrensel temaları işlerken unutulmaz replikler ve sahneler barındırır. Frank Darabont’un yönetmenliğiyle, sinema tarihinin en dokunaklı ve ilham verici hikayelerinden biri haline gelir.",
    poster: shawshank,
    director: "Frank Darabont",
    cast: [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton",
      "William Sadler",
      "Clancy Brown",
    ],
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    imdbRating: 9.2,
    genre: "Suç, Dram",
    country: "ABD",
    duration: "175 dakika",
    description:
      "Mafya ailesi Corleone'nin güç, sadakat ve ihanetle dolu yükselişini anlatan The Godfather, suç sinemasının zirvesidir. Don Vito Corleone'nin ailesini korumak adına verdiği kararlar, güç dengelerini değiştirir. Michael Corleone’nin soğukkanlı dönüşümü, aile bağlarının hem koruyucu hem yıkıcı yönünü gözler önüne serer. Film, gelenek, göçmen kimliği ve Amerikan rüyası üzerine de derin yorumlar sunar. Coppola'nın karanlık ve büyüleyici atmosferiyle, her kare bir tablo gibi akılda kalır.",
    poster: godfather,
    director: "Francis Ford Coppola",
    cast: [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Robert Duvall",
      "Diane Keaton",
    ],
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    imdbRating: 9.0,
    genre: "Aksiyon, Suç, Dram",
    country: "ABD",
    duration: "152 dakika",
    description:
      "Gotham'ın koruyucusu Batman, Joker adlı kaosun vücut bulmuş haliyle ölümcül bir mücadeleye girer. Joker’in planları, şehrin düzenini ve insan ruhunun karanlık yanını ortaya çıkarır. Film, kahramanlık kavramını sorgular ve fedakarlığın bedelini gözler önüne serer. Heath Ledger’ın unutulmaz Joker performansı, gerilimi zirveye taşır. Christopher Nolan’ın karanlık atmosferi ve derin karakter çözümlemeleri ile türünün en iyi örneklerinden biri olarak öne çıkar.",
    poster: darkknight,
    director: "Christopher Nolan",
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhaal",
    ],
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    imdbRating: 8.9,
    genre: "Suç, Dram",
    country: "ABD",
    duration: "154 dakika",
    description:
      "Birbirine bağlı farklı hikayeleri kara mizah ve şiddetle harmanlayan Pulp Fiction, Los Angeles’ın yeraltı dünyasına stilize bir pencere açar. Vincent Vega ve Jules’un felsefi sohbetleri, Butch’un kaçış hikayesi ve Mia Wallace'ın başına gelenler çarpıcı biçimde iç içe geçer. Tarantino'nun zekice diyalogları ve parçalı anlatımı, klasik anlatı yapısını altüst eder. Absürt mizah ve ani şiddet patlamaları ile türün sınırlarını zorlar. Sinema tarihinin en etkili ve kült filmlerinden biri olarak anılır.",
    poster: pulpfiction,
    director: "Quentin Tarantino",
    cast: [
      "John Travolta",
      "Samuel L. Jackson",
      "Uma Thurman",
      "Bruce Willis",
      "Ving Rhames",
    ],
  },
  {
    id: 5,
    title: "Fight Club",
    year: 1999,
    imdbRating: 8.8,
    genre: "Dram",
    country: "ABD",
    duration: "139 dakika",
    description:
      "Modern hayatın anlamsızlığı ve tüketim çılgınlığına başkaldıran isimsiz anlatıcı, karizmatik Tyler Durden ile tanışır ve yeraltı dövüş kulübünü kurar. Kimlik, erkeklik krizi ve nihilizm üzerine derin bir inceleme sunar. Anlatıcı'nın delilik ve özgürlük arasındaki yolculuğu, şaşırtıcı bir finalle noktalanır. David Fincher’ın karanlık görselliği ve Chuck Palahniuk'un kışkırtıcı metni birleşerek kült bir başyapıta dönüşür. İzleyiciyi rahatsız eden ve düşündüren bir anti-kahraman hikayesi.",
    poster: fightclub,
    director: "David Fincher",
    cast: [
      "Brad Pitt",
      "Edward Norton",
      "Helena Bonham Carter",
      "Meat Loaf",
      "Jared Leto",
    ],
  },
  {
    id: 6,
    title: "Forrest Gump",
    year: 1994,
    imdbRating: 8.8,
    genre: "Dram, Romantik",
    country: "ABD",
    duration: "142 dakika",
    description:
      "Düşük IQ'suna rağmen olağanüstü bir hayat süren Forrest, Amerika'nın tarihindeki önemli anlara tanıklık eder. Vietnam Savaşı'ndan ping pong diplomasisine, aşkı Jenny'ye olan sadakatine kadar dolu dolu bir öykü anlatır. Tom Hanks'in içten performansı, karakterin naifliğini ve iyiliğini öne çıkarır. Film sevgi, kader, azim ve kabullenme temalarını sıcak bir mizahla harmanlar. İnsanların hayatını değiştiren basit ama anlamlı sözleriyle hafızalara kazınır.",
    poster: forrestgump,
    director: "Robert Zemeckis",
    cast: [
      "Tom Hanks",
      "Robin Wright",
      "Gary Sinise",
      "Mykelti Williamson",
      "Sally Field",
    ],
  },
  {
    id: 7,
    title: "Inception",
    year: 2010,
    imdbRating: 8.8,
    genre: "Aksiyon, Macera, Bilim Kurgu",
    country: "ABD",
    duration: "148 dakika",
    description:
      "Profesyonel bir rüya hırsızı olan Cobb, imkansız bir görev için ekibini toplar: Bir fikri bilinçaltına yerleştirmek. Katmanlı rüya dünyaları, zamanın bükülmesi ve suçluluk duygusuyla dolu bir zihinsel labirent kurar. Christopher Nolan’ın yenilikçi yönetimi, izleyiciyi gerçeklik ve hayal arasında bırakır. Hans Zimmer’in müzikleri gerilimi artırırken, Leonardo DiCaprio’nun duygusal yükü karaktere derinlik katar. Bilim kurgu, aksiyon ve felsefi sorgulamaların eşsiz birleşimi.",
    poster: inception,
    director: "Christopher Nolan",
    cast: [
      "Leonardo DiCaprio",
      "Joseph Gordon‑Levitt",
      "Elliot Page",
      "Ken Watanabe",
      "Tom Hardy",
    ],
  },
  {
    id: 8,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    imdbRating: 9.0,
    genre: "Macera, Fantastik",
    country: "Yeni Zelanda, ABD",
    duration: "201 dakika",
    description:
      "Frodo yüzüğü yok etmek için Mordor’a son bir yolculuğa çıkarken, Orta Dünya büyük bir savaşa hazırlanır. Aragorn, insanların kralı olarak yükselir ve umut ateşini yeniden yakar. Epik savaş sahneleri, dostluk ve fedakarlık üzerine unutulmaz dersler verir. Peter Jackson’ın görsel dünyası, J.R.R. Tolkien’in metnini büyük bir saygıyla beyaz perdeye taşır. Film, fantastik türünün sınırlarını genişleten destansı bir final sunar.",
    poster: lordpfrings,
    director: "Peter Jackson",
    cast: [
      "Elijah Wood",
      "Viggo Mortensen",
      "Ian McKellen",
      "Orlando Bloom",
      "Liv Tyler",
    ],
  },
  {
    id: 9,
    title: "The Social Network",
    year: 2010,
    imdbRating: 7.8,
    genre: "Biyografi, Dram",
    country: "ABD",
    duration: "120 dakika",
    description:
      "Harvardlı genç Mark Zuckerberg, Facebook'u yaratırken dostlukları ve etik sınırları aşarak bir milyarder olur. Film, deha ve ihanet arasındaki ince çizgiyi ustalıkla işler. David Fincher'ın karanlık, hızlı anlatımı modern başarı öyküsüne eleştirel bir bakış atar. Aaron Sorkin'in keskin diyalogları ve karakterlerin karmaşıklığı öne çıkar. Teknoloji çağının ahlaki ikilemlerini ve güç oyunlarını sorgulayan bir anlatı.",
    poster: socialnetwork,
    director: "David Fincher",
    cast: [
      "Jesse Eisenberg",
      "Andrew Garfield",
      "Justin Timberlake",
      "Armie Hammer",
      "Rooney Mara",
    ],
  },
  {
    id: 10,
    title: "Gladiator",
    year: 2000,
    imdbRating: 8.5,
    genre: "Aksiyon, Macera, Dram",
    country: "ABD, İngiltere",
    duration: "155 dakika",
    description:
      "Roma İmparatorluğu'nun güçlü generali Maximus, ihanetle köleleştirilir ve arenalarda bir gladyatör olarak hayatta kalmaya çalışır. İntikam ve onur mücadelesi, Roma'nın ihtişamlı ama acımasız yüzünü ortaya koyar. Ridley Scott'ın epik yönetimi ve Hans Zimmer’ın müziği atmosferi büyüleyici kılar. Russell Crowe’un karizmatik performansı, karakterin duygusal derinliğini güçlendirir. İmparatorluk, aile ve intikam üçgeninde klasik bir kahraman hikayesi.",
    poster: gladiator,
    director: "Ridley Scott",
    cast: [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen",
      "Oliver Reed",
      "Richard Harris",
    ],
  },
  {
    id: 11,
    title: "Whiplash",
    year: 2014,
    imdbRating: 8.5,
    genre: "Dram, Müzik",
    country: "ABD",
    duration: "107 dakika",
    description:
      "Genç bir davulcu olan Andrew, ülkenin en prestijli müzik okulunda acımasız öğretmeni Fletcher'ın sınıfına katılır. Mükemmellik takıntısı, psikolojik terörle sınırlarını zorlayan bir eğitim metoduna dönüşür. Film, sanatın fedakarlık, takıntı ve acı arasındaki ince çizgisini çarpıcı bir şekilde işler. Karakterlerin çatışması gerilimli bir dansa benzerken, caz müziğin ritmi bu savaşın nabzını tutar. Damien Chazelle’in minimalist ama yoğun anlatımı, izleyiciyi koltuğa çiviler.",
    poster: whiplash,
    director: "Damien Chazelle",
    cast: [
      "Miles Teller",
      "J.K. Simmons",
      "Melissa Benoist",
      "Paul Reiser",
      "Caitlin Carmichael",
    ],
  },
  {
    id: 12,
    title: "Parasite",
    year: 2019,
    imdbRating: 8.5,
    genre: "Dram, Gerilim",
    country: "Güney Kore",
    duration: "132 dakika",
    description:
      "Fakir Kim ailesi, zengin Park ailesinin evine sızarak hayatlarını değiştirecek bir plan yapar. Sınıf ayrımı ve toplumsal adaletsizlik, ince mizah ve kara gerilimle harmanlanır. Bong Joon-ho'nun ustaca mizansenleri, hikayenin katmanlarını açarken izleyiciye rahatsız edici sorular sorar. Beklenmedik şiddet patlamaları ve sembolik detaylar, toplumsal eleştiriyi unutulmaz kılar. Oscar ödüllü bu film, türler arasında gezinen sarsıcı bir başyapıt.",
    poster: parasite,
    director: "Bong Joon Ho",
    cast: [
      "Song Kang‑ho",
      "Lee Sun‑kyun",
      "Cho Yeo‑jeong",
      "Choi Woo‑shik",
      "Park So‑dam",
    ],
  },
  {
    id: 13,
    title: "Interstellar",
    year: 2014,
    imdbRating: 8.6,
    genre: "Macera, Dram, Bilim Kurgu",
    country: "ABD, İngiltere",
    duration: "169 dakika",
    description:
      "İnsanlığın yok oluşla yüz yüze geldiği bir gelecekte, Cooper adlı eski bir pilot yeni bir yaşam aramak için galaksiler arası bir yolculuğa çıkar. Zaman bükülmesi, kara delikler ve boyutlar ötesi sevgi temaları iç içe geçer. Nolan’ın bilimsel detaylara sadakati ve duygusal anlatımı dengeler. Hans Zimmer’ın etkileyici müzikleriyle evrenin sonsuzluğu izleyiciye hissettirilir. Babayla kızı arasındaki bağ, filmi evrensel bir sevgi hikayesine dönüştürür.",
    poster: interstellar,
    director: "Christopher Nolan",
    cast: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Michael Caine",
      "Bill Irwin",
    ],
  },
  {
    id: 14,
    title: "The Green Mile",
    year: 1999,
    imdbRating: 8.6,
    genre: "Suç, Dram, Fantastik",
    country: "ABD",
    duration: "189 dakika",
    description:
      "1930'larda bir hapishanenin ölüm hücresinde görevli gardiyan Paul Edgecomb, doğaüstü güçlere sahip mahkum John Coffey ile tanışır. İyilik, inanç ve adalet kavramlarını sarsıcı bir biçimde sorgulayan bir öykü gelişir. Coffey’nin saflığı ve mucizeleri insanlığın en karanlık yanlarını aydınlatır. Stephen King’in romanından uyarlanan film, hümanizmi ve trajediyi ustalıkla harmanlar. Tom Hanks ve Michael Clarke Duncan’ın unutulmaz performansları duygusal bir şölen sunar.",
    poster: greenmile,
    director: "Frank Darabont",
    cast: [
      "Tom Hanks",
      "Michael Clarke Duncan",
      "David Morse",
      "Bonnie Hunt",
      "Doug Hutchison",
    ],
  },
  {
    id: 15,
    title: "The Prestige",
    year: 2006,
    imdbRating: 8.5,
    genre: "Dram, Gizem, Bilim Kurgu",
    country: "ABD, İngiltere",
    duration: "130 dakika",
    description:
      "İki rakip sihirbaz, sahne illüzyonlarını mükemmelleştirme yarışı uğruna hayatlarını ve sevdiklerini feda eder. Takıntı, hırs ve fedakarlık temaları katmanlı bir anlatıda çözülür. Christopher Nolan, izleyiciyi kandıran yapısıyla sihirbazlık numarası gibi kurar filmi. Christian Bale ve Hugh Jackman'ın karakterleri, etik sınırların ötesine geçer. Bilim, sanat ve takıntı üzerine karanlık ve zihin açıcı bir masal.",
    poster: prestige,
    director: "Christopher Nolan",
    cast: [
      "Christian Bale",
      "Hugh Jackman",
      "Scarlett Johansson",
      "Michael Caine",
      "Rebecca Hall",
    ],
  },
  {
    id: 16,
    title: "The Truman Show",
    year: 1998,
    imdbRating: 8.2,
    genre: "Komedi, Dram, Bilim Kurgu",
    country: "ABD",
    duration: "103 dakika",
    description:
      "Truman Burbank, hayatının aslında dev bir televizyon şovunun parçası olduğunu fark eder. Her anı kameralarla izlenen Truman, gerçekliği sorgulamaya başlar ve özgürlüğünü kazanmak için cesur bir mücadeleye atılır. Film, medya ve mahremiyet kavramlarını eleştirirken, bireysel özgürlük ve kader temalarını işler. Jim Carrey’nin alışılmadık dramatik performansı, filmi unutulmaz kılar. Peter Weir’in yönettiği bu yapım, modern toplumun gözetim kültürüne keskin bir bakış sunar.",
    poster: truman,
    director: "Peter Weir",
    cast: [
      "Jim Carrey",
      "Laura Linney",
      "Ed Harris",
      "Noah Emmerich",
      "Natascha McElhone",
    ],
  },
  {
    id: 17,
    title: "Django Unchained",
    year: 2012,
    imdbRating: 8.5,
    genre: "Dram, Western",
    country: "ABD",
    duration: "165 dakika",
    description:
      "Esaret altında olan Django, özgürlüğünü ve eşini kurtarmak için acımasız ödül avcısı Dr. King Schultz ile güçlerini birleştirir. Quentin Tarantino’nun imzasını taşıyan film, Amerikan kölelik tarihine sert ve şiddet dolu bir bakış sunar. Karanlık mizah ve aksiyonun harmanlandığı yapımda, adalet ve intikam temaları ön plandadır. Christoph Waltz ve Jamie Foxx’un performansları övgü toplar. Görsel açıdan çarpıcı ve anlatımı cesur bir western klasiği.",
    poster: django,
    director: "Quentin Tarantino",
    cast: [
      "Jamie Foxx",
      "Christoph Waltz",
      "Leonardo DiCaprio",
      "Kerry Washington",
      "Samuel L. Jackson",
    ],
  },
  {
    id: 18,
    title: "Coco",
    year: 2017,
    imdbRating: 8.4,
    genre: "Animasyon, Macera, Aile",
    country: "ABD",
    duration: "105 dakika",
    description:
      "Müzik tutkunu genç Miguel, Ölüler Diyarı’na yanlışlıkla giderek ailesinin sırlarını keşfeder. Aile bağları, kültür ve hayaller üzerine dokunaklı bir hikaye anlatır. Renkli ve canlı animasyonlar, Meksika'nın geleneksel Dia de los Muertos festivalini büyüleyici şekilde yansıtır. Pixar’ın duygusal anlatımı, hem çocuklar hem yetişkinler için evrensel mesajlar taşır. Film, ölüm ve yaşamın anlamına dair umut dolu bir bakış sunar.",
    poster: coco,
    director: "Lee Unkrich",
    cast: [
      "Anthony Gonzalez",
      "Gael García Bernal",
      "Benjamin Bratt",
      "Alanna Ubach",
      "Renee Victor",
    ],
  },
  {
    id: 19,
    title: "The Wolf of Wall Street",
    year: 2013,
    imdbRating: 8.2,
    genre: "Biyografi, Komedi, Suç",
    country: "ABD",
    duration: "180 dakika",
    description:
      "Jordan Belfort’un hızlı yükselişi, zenginliği ve düşüşü, Wall Street’in çılgın dünyasında sansasyonel bir şekilde anlatılır. Martin Scorsese’nin yönettiği film, aşırı tüketim, ahlaksızlık ve hırsı acımasızca gözler önüne serer. Leonardo DiCaprio’nun enerjik performansı, karakterin karmaşıklığını ve çalkantılı hayatını yansıtır. Film, hızla değişen finans dünyasının karanlık yanlarını ironik bir dille eleştirir. Eğlenceli ve çarpıcı sahneleriyle unutulmaz bir biyografik yapım.",
    poster: wolf,
    director: "Martin Scorsese",
    cast: [
      "Leonardo DiCaprio",
      "Jonah Hill",
      "Margot Robbie",
      "Matthew McConaughey",
      "Kyle Chandler",
    ],
  },
  {
    id: 20,
    title: "WALL·E",
    year: 2008,
    imdbRating: 8.4,
    genre: "Animasyon, Macera, Bilim Kurgu",
    country: "ABD",
    duration: "98 dakika",
    description:
      "Dünyada yalnız kalan temizlik robotu WALL·E, insanlığın geleceğine dair umut taşır. Sevgi ve keşif temaları etrafında gelişen hikaye, çevre sorunlarına duyarlı bir mesaj verir. Pixar’ın yaratıcı anlatımı ve görsel efektleri, teknoloji ve insan doğası arasındaki ilişkiyi incelikle işler. WALL·E’nin masumiyeti ve merakı, izleyicilere unutulmaz duygusal anlar sunar. Film, animasyon türünde yeni standartlar belirleyen bir başyapıttır.",
    poster: walle,
    director: "Andrew Stanton",
    cast: [
      "Ben Burtt",
      "Elissa Knight",
      "Jeff Garlin",
      "Fred Willard",
      "John Ratzenberger",
    ],
  },
  {
    id: 21,
    title: "Mad Max: Fury Road",
    year: 2015,
    imdbRating: 8.1,
    genre: "Aksiyon, Macera, Bilim Kurgu",
    country: "Avustralya, ABD",
    duration: "120 dakika",
    description:
      "Çorak bir çöl dünyasında hayatta kalmaya çalışan Max, güçlü ve asi Furiosa ile yolları kesişir. Kaçış ve özgürlük mücadelesi, yüksek tempolu aksiyon sahneleriyle nefes kesici bir hal alır. George Miller’ın yönetmenliği, görsel efektlerle desteklenen vahşi bir post-apokaliptik evren yaratır. Film, insanlık, umut ve direniş temalarını güçlü bir biçimde işler. Baş döndürücü takip sahneleri ve güçlü karakterleriyle modern aksiyon sinemasının zirvesindendir.",
    poster: madmax,
    director: "George Miller",
    cast: [
      "Tom Hardy",
      "Charlize Theron",
      "Nicholas Hoult",
      "Hugh Keays‑Byrne",
      "Riley Keough",
    ],
  },
  {
    id: 22,
    title: "The Grand Budapest Hotel",
    year: 2014,
    imdbRating: 8.1,
    genre: "Macera, Komedi, Suç",
    country: "ABD, Almanya",
    duration: "99 dakika",
    description:
      "Fiktif bir Avrupa otelinde geçen film, otel görevlisi Gustave ve genç çırağı Zero'nun maceralarını anlatır. Wes Anderson’un kendine özgü stilinde, renkli karakterler ve mizahi diyaloglarla dolu bir dünya yaratılır. Film, dostluk, sadakat ve kayıp üzerine sıcak ve eğlenceli bir hikaye sunar. Sanatsal görselliği ve özgün anlatımıyla eleştirmenlerden tam not almıştır. Mizah ve dramı ustaca harmanlayan benzersiz bir yapım.",
    poster: budapest,
    director: "Wes Anderson",
    cast: [
      "Ralph Fiennes",
      "Tony Revolori",
      "F. Murray Abraham",
      "Saoirse Ronan",
      "Adrien Brody",
    ],
  },
  {
    id: 23,
    title: "The Revenant",
    year: 2015,
    imdbRating: 8.0,
    genre: "Aksiyon, Macera, Dram",
    country: "ABD",
    duration: "156 dakika",
    description:
      "Doğada hayatta kalma mücadelesi veren Hugh Glass, hain bir saldırı sonrası intikam yoluna çıkar. Gerçek hayattan esinlenen hikaye, insanın doğaya ve kendi sınırlarına karşı verdiği amansız savaşı anlatır. Alejandro González Iñárritu’nun ustalıklı yönetimi ve Leonardo DiCaprio’nun yoğun performansı filmi unutulmaz kılar. Film, doğanın sertliğini ve insanın direncini etkileyici görsellerle yansıtır. Sürükleyici ve dokunaklı bir epik macera.",
    poster: revenant,
    director: "Alejandro González Iñárritu",
    cast: [
      "Leonardo DiCaprio",
      "Tom Hardy",
      "Will Poulter",
      "Domhnall Gleeson",
      "Paul Anderson",
    ],
  },
  {
    id: 24,
    title: "Black Swan",
    year: 2010,
    imdbRating: 8.0,
    genre: "Dram, Gerilim",
    country: "ABD",
    duration: "108 dakika",
    description:
      "Bir balerin olan Nina, mükemmelliğe ulaşmak için hem fiziksel hem psikolojik sınırlarını zorlar. Dönüşümü ve içsel çatışmaları, gerilim dolu bir psikolojik drama dönüşür. Darren Aronofsky’nin karanlık ve etkileyici yönetimi, izleyiciyi karakterin zihinsel dünyasına çeker. Film, güzellik, takıntı ve yıkım temalarını inceler. Natalie Portman’ın performansı, filme Oscar kazandırmıştır.",
    poster: blackswan,
    director: "Darren Aronofsky",
    cast: [
      "Natalie Portman",
      "Mila Kunis",
      "Vincent Cassel",
      "Barbara Hershey",
      "Winona Ryder",
    ],
  },
  {
    id: 25,
    title: "The Imitation Game",
    year: 2014,
    imdbRating: 8.0,
    genre: "Biyografi, Dram, Gerilim",
    country: "İngiltere, ABD",
    duration: "113 dakika",
    description:
      "İkinci Dünya Savaşı sırasında Enigma şifrelerini kıran Alan Turing'in hikayesi. Matematik dehası ve eşcinsel kimliğiyle yüzleşirken, savaşın kaderini değiştirecek çalışmalara imza atar. Film, bilim, gizem ve insan hakları temalarını ustalıkla işler. Benedict Cumberbatch’in güçlü performansı karakterin karmaşıklığını ortaya koyar. Tarihin gizli kahramanlarından birinin unutulmaz portresi.",
    poster: imitation,
    director: "Morten Tyldum",
    cast: [
      "Benedict Cumberbatch",
      "Keira Knightley",
      "Matthew Goode",
      "Mark Strong",
      "Allen Leech",
    ],
  },
  {
    id: 26,
    title: "A Beautiful Mind",
    year: 2001,
    imdbRating: 8.2,
    genre: "Biyografi, Dram",
    country: "ABD",
    duration: "135 dakika",
    description:
      "Dahi matematikçi John Nash’in gerçek yaşam öyküsü. Şizofreniyle mücadele ederken bilimsel dehasını ortaya koyar ve Nobel Ödülü kazanır. Film, zihinsel hastalık, sevgi ve azim temalarını derinlemesine işler. Russell Crowe’un etkileyici performansı ve Ron Howard’ın yönetimi, duygusal ve ilham verici bir yapım sunar. İnsan zihninin karmaşıklığını başarılı şekilde yansıtan unutulmaz bir biyografi.",
    poster: beautifulmind,
    director: "Ron Howard",
    cast: [
      "Russell Crowe",
      "Jennifer Connelly",
      "Ed Harris",
      "Paul Bettany",
      "Adam Goldberg",
    ],
  },
  {
    id: 27,
    title: "The Departed",
    year: 2006,
    imdbRating: 8.5,
    genre: "Suç, Dram, Gerilim",
    country: "ABD",
    duration: "151 dakika",
    description:
      "Boston polis teşkilatı ile mafya arasında süregelen köstebek savaşını konu alır. İki taraf da birbirinin içine sızmış casuslarla doludur. Martin Scorsese’nin yönettiği gerilim dolu yapım, karmaşık karakterler ve sürükleyici hikayesiyle öne çıkar. Leonardo DiCaprio, Matt Damon ve Jack Nicholson gibi yıldız oyuncular performanslarıyla filmi zenginleştirir. Güven, ihanet ve kimlik temalarını başarılı şekilde işler.",
    poster: departed,
    director: "Martin Scorsese",
    cast: [
      "Leonardo DiCaprio",
      "Matt Damon",
      "Jack Nicholson",
      "Mark Wahlberg",
      "Martin Sheen",
    ],
  },
  {
    id: 28,
    title: "The Pianist",
    year: 2002,
    imdbRating: 8.5,
    genre: "Biyografi, Dram, Müzik",
    country: "Fransa, Almanya, Polonya",
    duration: "150 dakika",
    description:
      "II. Dünya Savaşı sırasında Varşova gettosunda hayatta kalmaya çalışan piyanist Władysław Szpilman’ın gerçek hikayesi. Müzik ve insan ruhunun direnci temalarını dokunaklı şekilde işler. Roman Polanski’nin yönetmenliği ve Adrien Brody’nin performansı unutulmazdır. Film, savaşın acımasız yüzünü ve insanlık dramını güçlü görsellerle anlatır. Tarihin karanlık dönemlerine ışık tutan bir başyapıt.",
    poster: pianist,
    director: "Roman Polanski",
    cast: [
      "Adrien Brody",
      "Thomas Kretschmann",
      "Frank Finlay",
      "Emilia Fox",
      "Malgorzata Zajaczkowska",
    ],
  },
  {
    id: 29,
    title: "The Hunt",
    year: 2012,
    imdbRating: 8.3,
    genre: "Dram",
    country: "Danimarka",
    duration: "115 dakika",
    description:
      "Masum bir adam, küçük bir yalan yüzünden toplum tarafından dışlanır ve hayatı alt üst olur. Thomas Vinterberg’in yönettiği film, insan doğasının karanlık ve aydınlık yanlarını sorgular. Mads Mikkelsen’in güçlü performansı, karakterin çaresizliğini ve direncini çarpıcı şekilde yansıtır. Sosyal izolasyon ve adalet temaları üzerine derinlemesine bir inceleme sunar. İzleyiciyi güçlü duygusal deneyimlere sürükler.",
    poster: hunt,
    director: "Thomas Vinterberg",
    cast: [
      "Mads Mikkelsen",
      "Annika Wedderkopp",
      "Thomas Bo Larsen",
      "Lasse Fogelstrøm",
      "Susse Wold",
    ],
  },
  {
    id: 30,
    title: "Dead Poets Society",
    year: 1989,
    imdbRating: 8.1,
    genre: "Dram",
    country: "ABD",
    duration: "128 dakika",
    description:
      "Öğrencilerine farklı düşünmeyi ve hayatı dolu dolu yaşamayı öğreten yenilikçi öğretmen John Keating’in hikayesi. Özgürlük, bireysellik ve cesaret temaları üzerinde durur. Robin Williams’ın unutulmaz performansı, filme sıcaklık ve derinlik katar. Film, eğitim sistemine eleştirel bakış ve gençlik ruhunun keşfi üzerine güçlü mesajlar verir. Duygusal ve ilham verici bir klasik.",
    poster: deadpoets,
    director: "Peter Weir",
    cast: [
      "Robin Williams",
      "Robert Sean Leonard",
      "Ethan Hawke",
      "Josh Charles",
      "Gale Hansen",
    ],
  },
  {
    id: 31,
    title: "1917",
    year: 2019,
    imdbRating: 8.3,
    genre: "Dram, Savaş",
    country: "İngiltere, ABD",
    duration: "119 dakika",
    description:
      "Birinci Dünya Savaşı sırasında, iki genç İngiliz asker imkansız bir görevi yerine getirmek için düşman hatlarını geçmek zorundadır. Film, kesintisiz tek çekim tekniğiyle izleyiciyi savaşın yoğun atmosferine sokar. Sam Mendes’in yönetmenliği, kahramanlık, fedakarlık ve insan ruhunun direncini güçlü biçimde yansıtır. Savaşın dehşeti ve insanın umut ışığı arasındaki ince çizgiyi ustaca işler.",
    poster: onenineseven,
    director: "Sam Mendes",
    cast: [
      "George MacKay",
      "Dean-Charles Chapman",
      "Mark Strong",
      "Andrew Scott",
      "Richard Madden",
    ],
  },
  {
    id: 32,
    title: "Her",
    year: 2013,
    imdbRating: 8.0,
    genre: "Dram, Romantik, Bilim Kurgu",
    country: "ABD",
    duration: "126 dakika",
    description:
      "Yalnız bir adam, gelişmiş yapay zekaya sahip bir işletim sistemi ile beklenmedik bir aşk yaşar. Film, insan-makine ilişkilerini, yalnızlık ve sevgi temalarını derinlemesine sorgular. Spike Jonze’un özgün senaryosu ve Joaquin Phoenix’in duygusal performansı, geleceğe dair düşündürücü bir vizyon sunar. Modern teknolojinin insan duygularına etkisi üzerine etkileyici ve melankolik bir yapım.",
    poster: her,
    director: "Spike Jonze",
    cast: [
      "Joaquin Phoenix",
      "Scarlett Johansson",
      "Amy Adams",
      "Rooney Mara",
      "Chris Pratt",
    ],
  },
  {
    id: 33,
    title: "Shutter Island",
    year: 2010,
    imdbRating: 8.2,
    genre: "Gizem, Gerilim",
    country: "ABD",
    duration: "138 dakika",
    description:
      "İki ABD Marshalı, kaybolan bir hastayı bulmak için izole bir akıl hastanesine giderler. Film, psikolojik gerilim ve şaşırtıcı dönemeçlerle doludur. Martin Scorsese’nin ustalıklı yönetimi ve Leonardo DiCaprio’nun yoğun performansı, izleyiciyi sürekli şüphe ve belirsizlik içinde tutar. Gerçeklik algısının sorgulandığı, karanlık ve atmosferik bir hikaye.",
    poster: shutter,
    director: "Martin Scorsese",
    cast: [
      "Leonardo DiCaprio",
      "Mark Ruffalo",
      "Ben Kingsley",
      "Michelle Williams",
      "Emily Mortimer",
    ],
  },
  {
  id: 34,
  title: "The Handmaiden",
  year: 2016,
  imdbRating: 8.1,
  genre: "Dram, Romantik, Gerilim",
  country: "Güney Kore",
  duration: "145 dk",
  description:
    "1930'larda Japon işgali altındaki Kore'de geçen bu hikâyede, genç bir hizmetçi zengin bir Japon varisine yardım ederken karmaşık bir dolandırıcılık planına karışır. Ancak ikili arasında gelişen ilişki, olayların seyrini tamamen değiştirir.",
  poster: handmaiden,
  director: "Park Chan-wook",
  cast: [
    "Kim Min-hee",
    "Ha Jung-woo",
    "Kim Tae-ri"
  ],
},
{
  id: 35,
  title: "The Lives of Others",
  year: 2006,
  imdbRating: 8.4,
  genre: "Dram, Gerilim",
  country: "Almanya",
  duration: "137 dk",
  description:
    "1984 Doğu Almanya’sında, bir Stasi ajanı bir yazar ve sevgilisini gözetlemekle görevlendirilir. Ancak zamanla, onların hayatı onun üzerinde beklenmedik duygusal etkiler bırakır. Film, bireylerin baskı altındaki yaşamlarını derinlemesine inceler.",
  poster: livesofothers,
  director: "Florian Henckel von Donnersmarck",
  cast: [
    "Ulrich Mühe",
    "Martina Gedeck",
    "Sebastian Koch"
  ],
},
{
  id: 36,
  title: "Children of Men",
  year: 2006,
  imdbRating: 7.9,
  genre: "Aksiyon, Bilim Kurgu, Dram",
  country: "İngiltere",
  duration: "109 dk",
  description:
    "Gelecekteki distopik bir dünyada insanlık doğurganlığını kaybetmiştir. Umutsuzluk içindeki bu toplumda, hamile bir kadın insanlığın kaderini değiştirme umudu olarak ortaya çıkar. Film, çarpıcı atmosferiyle dikkat çeker.",
  poster: childrenofmen,
  director: "Alfonso Cuarón",
  cast: [
    "Clive Owen",
    "Julianne Moore",
    "Chiwetel Ejiofor"
  ],
},
{
  id: 37,
  title: "Amélie",
  year: 2001,
  imdbRating: 8.3,
  genre: "Komedi, Romantik",
  country: "Fransa",
  duration: "122 dakika",
  description:
    "Amélie, Paris'te yaşayan utangaç bir genç kadındır. Çevresindekilerin hayatını iyileştirmeye çalışırken kendi yalnızlığıyla da yüzleşir. Hayal gücüyle dolu anlatımı ve sıcak atmosferiyle izleyenlere umut ve neşe verir.",
  poster: amelie,
  director: "Jean-Pierre Jeunet",
  cast: [
    "Audrey Tautou",
    "Mathieu Kassovitz",
    "Rufus",
    "Serge Merlin",
    "Yolande Moreau"
  ],
},
{
  id: 38,
  title: "Enemy",
  year: 2013,
  imdbRating: 6.9,
  genre: "Gerilim, Gizem, Dram",
  country: "Kanada",
  duration: "91 dk",
  description:
    "Bir üniversite profesörü, bir film izledikten sonra kendisine tıpatıp benzeyen bir adamın varlığını keşfeder. Bu keşif, onun hayatında geri dönülmez bir psikolojik çatışmayı başlatır. Film, bilinçaltı korkularla yüzleşmeyi konu alır.",
  poster: enemy,
  director: "Denis Villeneuve",
  cast: [
    "Jake Gyllenhaal",
    "Mélanie Laurent",
    "Sarah Gadon"
  ],
},
{
  id: 39,
  title: "Nightcrawler",
  year: 2014,
  imdbRating: 7.9,
  genre: "Suç, Dram, Gerilim",
  country: "ABD",
  duration: "117 dakika",
  description:
    "Bir adam, gece haberlerini yakalayıp satarak başarıya ulaşmak ister. Ancak etik çizgileri aşarak karanlık bir yola girer. Jake Gyllenhaal'un unutulmaz performansıyla medya etiğini ve toplumun şiddete olan merakını sorgulayan çarpıcı bir yapım.",
  poster: nightcrawler,
  director: "Dan Gilroy",
  cast: [
    "Jake Gyllenhaal",
    "Rene Russo",
    "Riz Ahmed",
    "Bill Paxton",
    "Ann Cusack"
  ],
},
{
  id: 40,
  title: "The Secret in Their Eyes",
  year: 2009,
  imdbRating: 8.2,
  genre: "Suç, Dram, Gizem",
  country: "Arjantin",
  duration: "129 dk",
  description:
    "Emekli bir müfettiş, yıllar önce çözülemeyen bir cinayet vakasını yeniden araştırmaya karar verir. Bu süreçte geçmişte yaşanan olaylar ve kayıp bir aşk yeniden gün yüzüne çıkar. Film, hafıza ve adalet temasını ustaca işler.",
  poster: secretintheireyes,
  director: "Juan José Campanella",
  cast: [
    "Ricardo Darín",
    "Soledad Villamil",
    "Pablo Rago"
  ],
},
{
  id: 41,
  title: "Pan's Labyrinth",
  year: 2006,
  imdbRating: 8.2,
  genre: "Dram, Fantastik, Savaş",
  country: "İspanya",
  duration: "118 dk",
  description:
    "1944 yılında İspanya’da geçen bu masalsı hikâyede, küçük bir kız acımasız gerçeklerden kaçmak için gizemli bir labirente sığınır. Film, fantastik ögelerle tarihi gerçeklik arasında etkileyici bir denge kurar.",
  poster: panslabyrinth,
  director: "Guillermo del Toro",
  cast: [
    "Ivana Baquero",
    "Sergi López",
    "Maribel Verdú"
  ],
},
{
  id: 42,
  title: "The Man from Earth",
  year: 2007,
  imdbRating: 7.9,
  genre: "Dram, Bilim Kurgu",
  country: "ABD",
  duration: "87 dk",
  description:
    "Bir üniversite profesörü, emeklilik partisi sırasında arkadaşlarına 14.000 yıldır yaşadığını iddia eder. Bu iddia, odadaki herkesin inançlarını ve bilgi sınırlarını zorlayan felsefi bir tartışmaya dönüşür.",
  poster: manfromearth,
  director: "Richard Schenkman",
  cast: [
    "David Lee Smith",
    "Tony Todd",
    "John Billingsley"
  ],
},
]

export default movies;
