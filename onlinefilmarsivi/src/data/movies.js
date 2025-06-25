import shawshank from '../assets/shawshank.jpg';
import godfather from '../assets/godfather.jpg';
import darkknight from '../assets/darkknight.jpg';
import pulpfiction from '../assets/pulpfiction.jpg';
import fightclub from '../assets/fightclub.jpg';
import forrestgump from '../assets/forrestgump.jpg';
import inception from '../assets/inception.jpg';
import lordpfrings from '../assets/lordofrings.jpg';
import socialnetwork from '../assets/socialnetwork.jpg';
import gladiator from '../assets/gladiator.jpg';
import whiplash from '../assets/whiplash.jpg';
import parasite from '../assets/parasite.jpg';
import interstellar from '../assets/interstellar.jpg';
import greenmile from '../assets/greenmile.jpg';
import prestige from '../assets/prestige.jpg';
import truman from '../assets/truman.jpg';
import django from '../assets/django.jpeg';
import coco from '../assets/coco.jpg';
import wolf from '../assets/wolf.jpg';
import walle from '../assets/walle.jpg';
import madmax from '../assets/madmax.jpg';
import budapest from '../assets/budapest.jpg';
import revenant from '../assets/revenant.jpg';
import blackswan from '../assets/blackswan.jpg';
import imitation from '../assets/imitation.jpg';
import beautifulmind from '../assets/beautifulmind.jpg';
import departed from '../assets/departed.jpg';
import pianist from '../assets/pianist.jpg';
import hunt from '../assets/hunt.jpg';
import deadpoets from '../assets/deadpoets.jpg';
import onenineseven from '../assets/1917.jpg';
import her from '../assets/her.jpg';
import shutter from '../assets/shutter.jpg';


const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    imdbRating: 9.3,
    genre: "Dram",
    description: "Haksız yere ömür boyu hapis cezasına çarptırılan bir adamın, Shawshank hapishanesindeki hayatı ve özgürlük mücadelesi.",
    poster: shawshank
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    imdbRating: 9.2,
    genre: "Suç, Dram",
    description: "İtalyan-Amerikan mafya ailesi Corleone'nin hikayesini anlatan ve suç dünyasının karanlık yapısını gözler önüne seren bir başyapıt.",
    poster: godfather
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    imdbRating: 9.0,
    genre: "Aksiyon, Suç, Dram",
    description: "Batman, Gotham'ı anarşiden kurtarmaya çalışırken, kaosun vücut bulmuş hali Joker ile karşı karşıya gelir.",
    poster: darkknight
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    imdbRating: 8.9,
    genre: "Suç, Dram",
    description: "Birbirine bağlı hikâyelerle dolu bu film, suç dünyasında geçen absürt ve karanlık olayları stilize bir şekilde anlatır.",
    poster: pulpfiction
  },
  {
    id: 5,
    title: "Fight Club",
    year: 1999,
    imdbRating: 8.8,
    genre: "Dram",
    description: "Kimlik bunalımı yaşayan bir adam ve gizemli dostu, modern yaşamın boşluğuna karşı yeraltı dövüş kulübü kurar.",
    poster: fightclub
  },
  {
    id: 6,
    title: "Forrest Gump",
    year: 1994,
    imdbRating: 8.8,
    genre: "Dram, Romantik",
    description: "Düşük IQ'lu ama iyi yürekli Forrest, ABD tarihinin önemli olaylarına tanıklık ederken hayatın anlamını keşfeder.",
    poster: forrestgump
  },
  {
    id: 7,
    title: "Inception",
    year: 2010,
    imdbRating: 8.8,
    genre: "Aksiyon, Macera, Bilim Kurgu",
    description: "Rüyaların içine girerek bilgi çalan bir hırsız, bu kez bir fikri yerleştirme görevini üstlenir.",
    poster: inception
  },
  {
    id: 8,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    imdbRating: 9.0,
    genre: "Macera, Fantastik",
    description: "Frodo, yüzüğü yok etmek için yolculuğun son adımlarını atarken, Orta Dünya büyük bir savaşa hazırlanır.",
    poster: lordpfrings
  },
  {
    id: 9,
    title: "The Social Network",
    year: 2010,
    imdbRating: 7.8,
    genre: "Biyografi, Dram",
    description: "Facebook'un kuruluş hikayesi, dostluk, ihanet ve başarı temalarıyla anlatılıyor.",
    poster: socialnetwork
  },
  {
    id: 10,
    title: "Gladiator",
    year: 2000,
    imdbRating: 8.5,
    genre: "Aksiyon, Macera, Dram",
    description: "Roma İmparatorluğu döneminde general olan Maximus, ihanete uğrayıp gladyatöre dönüşür ve intikam için savaşır.",
    poster: gladiator
  },
  {
    id: 11,
    title: "Whiplash",
    year: 2014,
    imdbRating: 8.5,
    genre: "Dram, Müzik",
    description: "Genç bir davulcu, acımasız bir müzik eğitmeniyle mükemmelliğe ulaşmak için sınırlarını zorlar.",
    poster: whiplash
  },
  {
    id: 12,
    title: "Parasite",
    year: 2019,
    imdbRating: 8.5,
    genre: "Dram, Gerilim",
    description: "Fakir bir ailenin, zengin bir ailenin hayatına sızarak yaşadıkları beklenmedik olaylar zinciri.",
    poster: parasite
  },
  {
    id: 13,
    title: "Interstellar",
    year: 2014,
    imdbRating: 8.6,
    genre: "Macera, Dram, Bilim Kurgu",
    description: "İnsanlığın geleceğini kurtarmak için bir grup astronot, zaman ve mekân ötesi bir yolculuğa çıkar.",
    poster: interstellar
  },
  {
    id: 14,
    title: "The Green Mile",
    year: 1999,
    imdbRating: 8.6,
    genre: "Suç, Dram, Fantastik",
    description: "Bir gardiyan, doğaüstü güçlere sahip bir mahkumla tanışır ve insanlık hakkında çok şey öğrenir.",
    poster: greenmile
  },
  {
    id: 15,
    title: "The Prestige",
    year: 2006,
    imdbRating: 8.5,
    genre: "Dram, Gizem, Bilim Kurgu",
    description: "İki sihirbaz arasındaki ölümcül rekabet, sırlarla dolu bir mücadeleye dönüşür.",
    poster: prestige
  },
  {
    id: 16,
    title: "The Truman Show",
    year: 1998,
    imdbRating: 8.2,
    genre: "Komedi, Dram, Bilim Kurgu",
    description: "Truman, hayatının bir televizyon şovunun parçası olduğunu fark ettiğinde gerçeklik sorgulanır.",
    poster: truman
  },
  {
    id: 17,
    title: "Django Unchained",
    year: 2012,
    imdbRating: 8.5,
    genre: "Dram, Western",
    description: "Bir köle, özgürlüğünü kazanmak için acımasız bir plan yapar.",
    poster: django
  },
  {
    id: 18,
    title: "Coco",
    year: 2017,
    imdbRating: 8.4,
    genre: "Animasyon, Macera, Aile",
    description: "Müzik tutkusu peşinde koşan Miguel, Ölüler Diyarı’na unutulmaz bir yolculuk yapar.",
    poster: coco
  },
  {
    id: 19,
    title: "The Wolf of Wall Street",
    year: 2013,
    imdbRating: 8.2,
    genre: "Biyografi, Komedi, Suç",
    description: "Jordan Belfort’un çalkantılı borsa kariyeri ve çılgın hayat tarzı.",
    poster: wolf
  },
  {
    id: 20,
    title: "WALL·E",
    year: 2008,
    imdbRating: 8.4,
    genre: "Animasyon, Macera, Bilim Kurgu",
    description: "Yalnız bir temizlik robotu, insanlığı yeniden yaşanabilir bir dünyaya döndürme umudu olur.",
    poster: walle
  },
  {
    id: 21,
    title: "Mad Max: Fury Road",
    year: 2015,
    imdbRating: 8.1,
    genre: "Aksiyon, Macera, Bilim Kurgu",
    description: "Çorak topraklarda hayatta kalma mücadelesi veren Max, güçlü Furiosa ile ittifak kurar.",
    poster: madmax
  },
  {
    id: 22,
    title: "The Grand Budapest Hotel",
    year: 2014,
    imdbRating: 8.1,
    genre: "Macera, Komedi, Suç",
    description: "Otel görevlisi ve genç çırağının başına gelen ilginç ve suç dolu macera.",
    poster: budapest
  },
  {
    id: 23,
    title: "The Revenant",
    year: 2015,
    imdbRating: 8.0,
    genre: "Aksiyon, Macera, Dram",
    description: "Hayatta kalmak için mücadele eden bir adamın doğayla ve düşmanla savaşı.",
    poster: revenant
  },
  {
    id: 24,
    title: "Black Swan",
    year: 2010,
    imdbRating: 8.0,
    genre: "Dram, Gerilim",
    description: "Bir balerinin mükemmellik arayışı, psikolojik sınırlarını zorlar.",
    poster: blackswan
  },
  {
    id: 25,
    title: "The Imitation Game",
    year: 2014,
    imdbRating: 8.0,
    genre: "Biyografi, Dram, Gerilim",
    description: "Alan Turing’in Enigma’yı kırarak savaşın kaderini değiştirmesi.",
    poster: imitation
  },
  {
    id: 26,
    title: "A Beautiful Mind",
    year: 2001,
    imdbRating: 8.2,
    genre: "Biyografi, Dram",
    description: "Dahi matematikçi John Nash’in gerçek yaşam öyküsü.",
    poster: beautifulmind
  },
  {
    id: 27,
    title: "The Departed",
    year: 2006,
    imdbRating: 8.5,
    genre: "Suç, Dram, Gerilim",
    description: "Polis ve mafya arasındaki köstebek oyunu iç içe geçer.",
    poster: departed
  },
  {
    id: 28,
    title: "The Pianist",
    year: 2002,
    imdbRating: 8.5,
    genre: "Biyografi, Dram, Müzik",
    description: "Polonyalı bir piyanistin Nazi işgali altındaki hayatta kalma mücadelesi.",
    poster: pianist
  },
  {
    id: 29,
    title: "The Hunt",
    year: 2012,
    imdbRating: 8.3,
    genre: "Dram",
    description: "Bir adam, işlemediği bir suçla hayatının kararmasına tanıklık eder.",
    poster: hunt
  },
  {
    id: 30,
    title: "Dead Poets Society",
    year: 1989,
    imdbRating: 8.1,
    genre: "Dram",
    description: "Bir öğretmen, öğrencilerine hayatı farklı yaşamayı öğretir.",
    poster: deadpoets
  },
  {
    id: 31,
    title: "1917",
    year: 2019,
    imdbRating: 8.3,
    genre: "Dram, Savaş",
    description: "İki asker, imkansız bir görevle düşman hattını geçmek zorundadır.",
    poster:  onenineseven
  },
  {
    id: 32,
    title: "Her",
    year: 2013,
    imdbRating: 8.0,
    genre: "Dram, Romantik, Bilim Kurgu",
    description: "Yapay zekâ ile duygusal bir bağ kuran yalnız bir adamın hikayesi.",
    poster: her
  },
  {
    id: 33,
    title: "Shutter Island",
    year: 2010,
    imdbRating: 8.2,
    genre: "Gizem, Gerilim",
    description: "Bir adadaki akıl hastanesine yapılan ziyaret, beklenmedik sırları açığa çıkarır.",
    poster: shutter
  }
];

export default movies;
