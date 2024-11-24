<template>
  <div class="right-side d-inline-block">
    <section class="site-posts d-block w-100">
      <div ref="movies"></div>
    </section>
    <section class="site-posts d-block w-100">
      <div ref="pagination" class="pagination w-100 d-flex flex-wrap justify-content-center"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeMovieList',
  data() {
    return {
      movies: [
        {
          id: 1,
          title: 'The Shawshank Redemption',
          isSerial: false,

          time: '142 دقیقه',
          year: 1994,
          imdbScore: 9.3,
          country: 'آمریکا',
          director: 'Frank Darabont',
          stars: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
          genre: ['درام'],
          quality: [480, 720, 1080],
          Isdubbed: true,
          summery:
            'در فیلم رستگاری در شاوشنک : اندی دوفرین بانکدار جوانی است که به جرم قتل همسر اش به حبس ابد در زندان ایالتی شائوشنک محکوم می شود. وی تأکید می کند که جرمی مرتکب نشده، ولی قاضی او را گناهکار اعلام میکند. او سالهای زیادی را در این زندان می گذراند. آلیس بوید رِدینگ یکی از زندانی های سیاه پوست است که به این شهرت دارد که می تواند هر چیزی را در زندان فراهم کند و ...',
          IsTopFilm: true,
          img: '../images/post-film/3.jpg',
          poster:
            'https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_QL75_UX484.5_.jpg',
          url: 'https://www.uptvs.com/play2?e=78950&dub=%D8%B1%D8%B3%D8%AA%DA%AF%D8%A7%D8%B1%DB%8C%20%D8%AF%D8%B1%20%D8%B4%D8%A7%D9%88%D8%B4%D9%86%DA%A9'
        },
        {
          id: 2,
          title: 'The Godfather',
          isSerial: false,

          time: ' 175 دقیقه ',
          year: 1972,
          imdbScore: 9.2,
          country: 'آمریکا',
          IsTopFilm: true,
          director: 'Francis Ford Coppola',
          stars: ['Francis Ford Coppola', 'Al Pacino'],
          genre: ['درام', 'تراژدی', 'جنایی'],
          quality: [480, 720, 1080],
          Isdubbed: true,
          summery:
            'فیلم در جشن عروسی کانی، دختر دون ویتو کورلئونه، در لانگ بیچ نیویورک، لانگ آیلند شروع می شود. وقت پدرخوانده برای شنیدن خواهش های دوستان و زیردستان چاپلوس پر شده است. یکی از این خواهش ها را پسرخوانده ی او، جانی فونتی خواننده مطرح می کند. آن خواهش چیست؟',
          img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/the-godfather-poster.jpeg',
          poster:
            'https://assets.mubicdn.net/images/artworks/550926/images-original.png?1686641973',
          url: 'https://www.uptvs.com/play2?e=67604&dub=%D9%BE%D8%AF%D8%B1%D8%AE%D9%88%D8%A7%D9%86%D8%AF%D9%87'
        },
        {
          id: 3,
          title: "Schindler's List",
          isSerial: false,

          time: ' 195 دقیقه ',
          year: 1993,
          imdbScore: 9.0,
          country: 'آمریکا',
          IsTopFilm: true,
          director: '    Steven Spielberg',
          stars: ['Liam Neeson', 'Ralph Fiennes'],
          genre: ['درام', 'زندگینامه', 'تاریخی'],
          quality: [480, 720, 1080],
          Isdubbed: true,
          summery:
            ' اسکار شیندلر طی سال‌های جنگ جهانی دوم در لهستان که به دست آلمان اشغال شده تلاش می‌کند تا کارگران یهودی خود را نجات داده و از اعزام آنها به اردوگاه‌های کار اجباری جلوگیری کند و...',
          poster: '../images/post-film/1-poster.webp',
          img: '../images/post-film/2.jpg',
          url: 'https://www.uptvs.com/play2?e=107623&dub=%D9%81%D9%87%D8%B1%D8%B3%D8%AA%20%D8%B4%DB%8C%D9%86%D8%AF%D9%84%D8%B1'
        },
        {
          id: 4,
          title: 'Forrest Gump',
          isSerial: false,

          time: '	142',
          IsTopFilm: true,
          year: 1994,
          imdbScore: 8.8,
          director: 'Robert Zemeckis',
          stars: ['Tom Hanks', 'Robin Wright'],
          genre: ['زندگینامه', 'درام', 'رمانتیک'],
          country: 'آمریکا',
          quality: [480, 720, 1080],
          Isdubbed: true,
          summery:
            ' آی کیوی او در خردسالی زیر حد معمولی (۷۵) بود، شخصیت شیرین و عزیزی دارد و نسبت به عزیزان و وظایف خود از خود گذشته‌است. صفات شخصیتی او باعث می‌شود که موقعیت‌هایی برایش پیش آید که مسیر زندگیش را تغییر دهد. با پیش آمدن چنین موقعیت‌هایی او با رخدادها و شخصیت‌های برجسته تاریخ معاصر آمریکا مواجه می‌شود.',
          poster:
            'https://m.media-amazon.com/images/S/pv-target-images/0ad69b0fc33c51c85f1874652d0663a9c2b5063ae5b78580d5d4530c6917fc27._SX1080_FMjpg_.jpg',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaNwbILJZZrhqpXUECVrPf1m8h3mw8dQWwA&s',
          url: 'https://www.uptvs.com/play2?e=96738&dub=%D9%81%D8%A7%D8%B1%D8%B3%D8%AA%20%DA%AF%D8%A7%D9%85%D9%BE'
        },
        {
          id: 5,
          title: 'Fight Club',
          isSerial: false,

          time: '139 دقیقه ',
          year: 1999,
          IsTopFilm: true,
          imdbScore: 8.8,
          director: 'David Fincher',
          stars: [' Brad Pitt', 'Edward Norton'],
          genre: ['درام'],
          country: 'آلمان',
          quality: [720, 1080],
          Isdubbed: true,
          summery:
            ' «راوی»، جوانی پریشان، پی می‌برد که به کمک مشت‌بازی با دست‌های برهنه، بیش از هر زمان دیگری احساس زنده بودن می‌کند. او و «تایلر» که به دوستانی صمیمی تبدیل شده‌اند، هفته‌ای یک بار با هم ملاقات می‌کنند تا با هم مشت بازی کنند. در حالی که افراد دیگری هم به باشگاه‌شان می‌پیوندند، محفل‌شان به رغم آن که مخفی است بین شرکت کننده‌هایش، شهرت و محبوبیت یک باشگاه زیرزمینی را پیدا می‌کند و...',
          poster:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanu-m1-UXm-Cbt0TPM313JoTHCA7aGRD3Hw&s',
          img: 'https://media.posterlounge.com/img/products/770000/764906/764906_poster.jpg',
          url: 'https://www.uptvs.com/play2?e=81354&dub=%D8%A8%D8%A7%D8%B4%DA%AF%D8%A7%D9%87%20%D9%85%D8%B4%D8%AA%20%D8%B2%D9%86%DB%8C'
        },
        //
        {
          id: 6,
          title: '12 Angry Men',
          isSerial: false,

          time: '96 دقیقه ',
          year: 1957,
          imdbScore: 9,
          IsTopFilm: true,
          genre: ['جنایی', 'درام'],
          country: '	آمریکا ',
          Isdubbed: true,
          quality: [480, 720, 1080],
          director: 'Sidney Lumet',
          stars: ['Henry Fonda', 'Lee J. Cobb'],
          summery:
            'فیلم درباره‌ی دوازده مرد در هیات منصفه یک دادگاه است که در زمان تنفس و قبل از اخذ رای نهایی دورهم جمع می‌شوند. همه اعضا معتقدند که مظنون گناهکار است. او یک پسر هجده ساله‌است که گمان می‌رود پدر خود را به قتل رسانده‌. یکی از اعضای هیات منصفه به‌نام دیوید با رای گناهکار بودن موافق نیست و شک‌هایی دارد باتوجه به این‌که تمام حقایق اثبات می‌کند که فرد مظنون گناهکار است، اعضا کنجکاو می‌شوند که چگونه دیوید دراین مورد مشکوک است و او دلایل خود را توضیح می‌دهد…',
          img: 'https://musicart.xboxlive.com/7/b7805100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
          poster:
            'https://m.media-amazon.com/images/M/MV5BNGRlZjVhNWMtOTUxYi00MTYxLWEzOWUtMTM1NDc3ZWRjMDZjXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg',
          url: 'https://www.uptvs.com/play2?e=91610&dub=12%20%D9%85%D8%B1%D8%AF%20%D8%AE%D8%B4%D9%85%DA%AF%DB%8C%D9%86'
        },
        {
          id: 7,
          title: 'Se7en',
          isSerial: false,

          time: ' 127 دقیقه ',
          year: 1995,
          imdbScore: 8.6,
          IsTopFilm: true,
          genre: ['جنایی', ' درام '],
          country: 'آمریکا',
          Isdubbed: true,
          quality: [480, 720, 1080],
          director: 'David Fincher',
          stars: [' Brad Pitt', 'Morgan Freeman'],
          summery:
            ' بازرس نیلز جوان به قسمت جنایی اداره پلیس انتقال یافته و جانشین ویلیامز افسر مجرب پلیس می گردد. وقوع قتلهای زنجیره ای فجیع و ناتوانی او در امر دستگیری عامل آن باعث می شود كه ویلیامز به كمك او بشتابد.اما...',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnYEQx15eUJpQU1BnEsuhSJeTGX_2EBSFdQ&s',
          poster:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxB-4Lcxybi3gU9Alq0HeF5aS7Nrt_QR-nGA&s',
          url: 'https://www.uptvs.com/play2?e=78821&dub=%D9%87%D9%81%D8%AA'
        },
        {
          id: 8,
          title: 'Gladiator',
          isSerial: false,

          time: '155 دقیقه ',
          year: 2000,
          imdbScore: 8.5,
          IsTopFilm: true,
          genre: ['اکشن', 'درام'],
          country: 'آمریکا',
          Isdubbed: true,
          quality: [480, 720, 1080],
          director: 'Ridley Scott',
          stars: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
          summery: '',
          img: '../images/post-film/1.jpg',
          poster: './images/post-film/2-poster.webp',
          url: ''
        },
        {
          id: 9,
          title: 'The Silence of the Lambs',
          isSerial: false,

          time: ' 118 دقیقه ',
          year: 1991,
          imdbScore: 8.6,
          IsTopFilm: true,
          genre: ['جنایی', ' درام '],
          country: 'آمریکا',
          Isdubbed: true,
          quality: [720, 1080],
          director: 'Jonathan Demme',
          stars: ['Jodie Foster', 'Anthony Hopkins'],
          summery:
            'در فیلم سکوت بره‌ها کلاریس استارلینگ، کارآموز جوان FBI توسط جک کرافورد مأموریت می‌یابد که با هانیبال لکتر گفتگو نماید، زیرا ممکن است بتواند به آن‌ها در پیدا کردن بیل بوفالو که آدم‌کشی زنجیره‌ای است و پوست قربانیانش را از تن جدا می‌نماید، کمک نماید.',
          img: 'https://play-lh.googleusercontent.com/NN4OtSReaguunuEfZftynIypKWaDBwA-AqmWdl8JKO0UrE3izMM9qoKH3q2ToIsn7Zw',
          poster:
            'https://www.indiependent.co.uk/wp-content/uploads/2021/01/silence-of-the-lambs-the-1991-007-anthony-hopkins-across-cell-glass-from-jodie-foster_1000x750.jpg',
          url: 'https://www.uptvs.com/play2?e=75871&dub=%D8%B3%DA%A9%D9%88%D8%AA%20%D8%A8%D8%B1%D9%87%E2%80%8C%D9%87%D8%A7'
        },
        {
          id: 10,
          title: 'The Irishman',
          isSerial: false,

          time: '209 دقیقه ',
          year: 2019,
          imdbScore: 7.8,
          IsTopFilm: false,
          genre: ['بیوگرافی', 'جنایی'],
          country: 'آمریکا',
          Isdubbed: true,
          quality: [480, 720, 1080],
          director: 'Martin Scorsese',
          stars: ['Al Pacino', '    Robert De Niro'],
          summery:
            ' طی دهه ۱۹۵۰ میلادی، یک راننده کامیون به نام فرانک شیرن، بخشی از محموله خود را به گانگسترهای محلی می‌فروشد و از این طریق با رهبر خانواده مافیایی بوفالینو ارتباط برقرار می‌کند. در ادامه، او همکاری خود را با این باند تبهکار آغاز می‌کند و...',
          img: 'https://www.uptvs.com/wp-contents/uploads/2020/01/The-Irishman-2019.jpg',
          poster: 'https://cdn.sargarme.com/uploads/2019/12/Irishman-Shakhes.jpg',
          url: 'https://www.uptvs.com/play2?e=91907&upd=%D9%85%D8%B1%D8%AF%20%D8%A7%DB%8C%D8%B1%D9%84%D9%86%D8%AF%DB%8C'
        },
        {
          id: 11,
          isSerial: true,
          title: 'Chernobyl',
          time: '60 دقیقه ',
          imdbScore: 9.3,
          IsTopseries: true,
          day: 'شنبه',
          genre: ['درام', 'تاریخی', 'حادثه ای'],
          country: 'انگلستان',
          Isdubbed: true,
          quality: [480, 720, 1080, 'FullHD'],
          director: 'Johan Renck ',
          stars: ['Jessie Buckley', 'Jared Harris'],
          notif: 'قسمت 5 فصل 1 اضافه شد',
          summery:
            'در سریال چرنوبیل در آوریل 1986، انفجاری در تاسیسات هسته‌ای چرنوبیل در اوکراین رخ داد که باعث به وجود آمدن یکی از بدترین فجایع بشری در طول تاریخ شد و... «والری» نقشه‌ای دقیق را برای برطرف کردن آلودگی نیروگاه هسته‌ای چرنوبیل تدارک می‌بیند. از سوی دیگر، «لیودمیلا» هشدارهای مربوط به قرار گرفتن آتش‌نشان‌ها در معرض تشعشعات رادیواکتیو را نادیده می‌گیرد و...',
          img: 'https://m.media-amazon.com/images/M/MV5BOTJiOWExNWEtYzE1ZS00NDJmLWFiY2ItYTNjMWZiNTQ2ZDIwXkEyXkFqcGc@._V1_.jpg',
          poster:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYi9FHwbRaJL6WSFzvtAK2vfuzjqBNdxlijg&s',
          url: 'https://www.imdb.com/video/vi3724524825/?playlistId=tt7366338&ref_=tt_ov_vi'
        },
        {
          id: 12,
          title: 'Breaking Bad',
          isSerial: true,

          time: '45دقیقه ',
          imdbScore: 9.5,
          IsTopseries: true,
          day: 'یکشنبه',
          genre: ['علمی', 'درام', 'جنایی'],
          country: 'آمریکا',
          Isdubbed: true,
          quality: [480, 720, 1080],
          director: 'Vince Gilligan',
          stars: ['Bryan Cranston', 'Aaron Paul', ''],
          notif: 'قسمت آخر فصل پنجم قرار گرفت',
          summery:
            ' درباره یک معلم شیمی میانسال است که متوجه می شود که دارای سرطان ریه است و ۲ سال بیشتر وقت برای زندگی ندارد. او که وضع مالی خوبی ندارد و دارای همسر و پسری معلول می باشد، به این فکر می افتد که باید قبل از مردن زندگی خانواده خود را تامین کند. پس با توجه به آشناییش به علم شیمی، همراه با یکی از شاگردان سابقش شروع به ساخت و فروش مواد مخدر می کند…',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdq0vuCeWF7fBJ7Dqc3kAzptsczMi_-1_ZXA&s',
          poster:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzbgcDjlt5Ng1oZrf8KvueF-QUKoAAFSF3g&s',
          url: 'https://trailer.uptvs.com/trailer/Breaking-Bad-Trailer.mp4'
        },
        {
          id: 13,
          title: 'The Sopranos',
          isSerial: true,

          time: '60 دقیقه ',
          imdbScore: 9.2,
          IsTopseries: true,
          day: 'شنبه',
          genre: ['جنایی', ' درام '],
          country: 'آمریکا',
          Isdubbed: false,
          quality: [720, 1080],
          director: 'David Chase',
          stars: ['James Gandolfini', 'Lorraine Bracco'],
          notif: 'فصل ششم قسمت 7 اضافه شد',
          summery:
            'سریال سوپرانو The Sopranos در مورد یک رئیس مافیای ایتالیایی آمریکایی به نام تونی سوپرانو است که با مسائل شخصی و کاری خود در زندگی دست و پنجه نرم می‌کند. حال این موضوع که بر وضعیت روانی سوپرانو تأثیر گذاشته است، وی را به سمت کمک از یک روانپزشک به نام جنیفر ملفی سوق می‌دهد و…',
          img: 'https://m.media-amazon.com/images/M/MV5BZTZkMWVkNTEtYzMxMC00MzQzLTg5NjUtNTNmN2M2NzEwNzI0XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_.jpg',
          poster:
            'https://observer.case.edu/wp-content/uploads/2021/08/MV5BM2NmZDNmYTItZGM0OS00NDVmLTgwMjUtZDdmYjg0OWNiODE2XkEyXkFqcGdeQXVyNDIyNjA2MTk@._V1_-900x506.jpg',
          url: 'https://www.imdb.com/video/vi2751070489/?playlistId=tt0141842&ref_=tt_pr_ov_vi'
        },
        {
          id: 14,
          title: 'The Perfect Couple',
          isSerial: false,

          time: '60 دقیقه ',
          imdbScore: 6.6,
          IsTopseries: false,
          day: 'دوشنبه',
          genre: ['جنایی', 'درام', 'معمایی'],
          country: 'آمریکا',
          Isdubbed: false,
          quality: [480, 720, 1080],
          director: 'Jenna Lamia',
          stars: ['Nicole Kidman', 'Liev Schreiber'],
          notif: 'قسمت آخر اضافه شد',
          summery:
            'در سریال زوج کامل The Perfect Couple 2024 آملیا در شرف ازدواج با یکی از ثروتمندترین خانواده‌های نانتاکت (یک جزیره در ایالات متحده) است، اما در این میان یک مرگ ناگهانی، عروسی را به هم می‌زند و همه را به مظنون تبدیل می‌کند و…',
          img: 'https://m.media-amazon.com/images/M/MV5BMTRmNDBjNWEtODc5My00YjEyLWJlY2EtODhmYTcxYTcyMzRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
          poster:
            'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQRTYumBVvJUdTtnyS8HxCcisN0wOtz7VplS1vDHWidYgxGR0CUb1ZFKcMJcybtEOkeKuO-rC2_S1b9ABtdLY3lR8Uht2OKP2D_nA2l-XdQToCCuq3skAEAshL-j2jc52OAyA5N4M5bDSSP42GXGPpCU3HmM.jpg?r=6cb',
          url: 'https://www.imdb.com/video/vi3093677593/?playlistId=tt11514868&ref_=tt_pr_ov_vi'
        },
        {
          id: 15,
          title: 'Kaos',
          isSerial: false,

          time: '60 دقیقه ',
          imdbScore: 7.5,
          IsTopseries: false,
          day: 'سه شنبه',
          genre: ['کمدی', 'فانتزی'],
          country: 'انگلستان',
          Isdubbed: false,
          quality: [480, 720, 1080],
          director: '    Charlie Covell',
          stars: ['Jeff Goldblum', 'Janet McTeer'],
          notif: 'فصل اول اضافه شد',
          summery:
            'داستان سریال “Kaos” با زئوس، خدای قدرتمند ولی ناامن آغاز می‌شود. او وقتی متوجه یک چین و چروک روی پیشانی خود می‌شود، دچار ترس و پارانویا می‌گردد. زئوس باور دارد که این نشانه‌ای از پایان سلطنتش و در نهایت، پایان جهان است. این ترس او را به یک موجود انتقام‌جو تبدیل می‌کند. در همین حال، سه انسان به‌تدریج ارتباطات خود با یکدیگر و دخالت‌های خدایان یونانی در سرنوشتشان را کشف می‌کنند. این سه نفر باید با چالش‌های فراوانی روبرو شوند تا بتوانند مسیر درست را در برابر توطئه‌های بزرگ خدایان پیدا کنند.',
          img: 'https://whsvikingtimes.com/wp-content/uploads/2024/09/625cd2bf-kaos__1200_1200__32-128-1030-1126.jpg',
          poster:
            'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVGXT54topivEhiSdMTNRRmq7fBqF4iBg4Zc637-39vTMioTFimvzsHzujlU4mOZA-1RxLbr44PVCl8jv62M1toaCUcLQSblmsSV.jpg?r=e8f',
          url: 'https://www.imdb.com/video/vi896976409/?playlistId=tt8550732&ref_=tt_pr_ov_vi'
        },
        {
          id: 16,
          title: 'The Old Man',
          isSerial: false,

          time: '61 دقیقه ',
          imdbScore: 7.6,
          IsTopseries: false,
          day: 'چهارشنبه',
          genre: ['اکشن', 'جاسوسی'],
          country: 'آمریکا',
          Isdubbed: false,
          quality: [480, 720, 1080],
          director: 'Robert Levine  & Jonathan E. Steinberg',
          stars: ['Jeff Bridges', 'John Lithgow'],
          notif: 'قسمت 2 فصل دوم اضافه شد',
          summery:
            ' یک مامور سابق سیا و کهنه‌سرباز افغانستان که به مدت سی سال به دور از شبکه در ورمونت زندگی می‌کند. زندگی آرام چیس زمانی به هم می‌ریزد که او به طور ناخواسته مجبور به کشتن یک مزاحم می‌شود که به خانه‌اش نفوذ کرده است. این حادثه باعث می‌شود که چیس مجبور به مخفی شدن شود و زندگی او به دنیای پیچیده و پرخطر جاسوسی بازگردد.',
          img: 'https://m.media-amazon.com/images/M/MV5BZmMxNjU4YjgtYTNjOS00MzcxLWEyNjMtZmRjNDkxYjNlNGVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
          poster: 'https://ntvb.tmsimg.com/assets/p22067988_b_h8_aa.jpg?w=960&h=540',
          url: 'https://www.imdb.com/video/vi3748709913/?playlistId=tt5645432&ref_=tt_ov_vi'
        },
        {
          id: 17,
          title: 'Shōgun',
          isSerial: true,
          year: 2024,
          time: '60 دقیقه ',
          imdbScore: 8.6,
          IsTopseries: true,
          day: 'پنج شنبه',
          genre: ['ماجراجویی', 'اکشن', 'تاریخی'],
          country: 'آمریکا',
          Isdubbed: true,
          quality: [480, 720, 1080],
          director: 'nerson',
          stars: ['Cosmo Jarvis', 'Anna Sawai'],
          notif: 'قسمت 10 فصل اول اضافه شد',
          summery:
            'در داستان “شوگان”، دو مرد جاه‌طلب از دو جهان مختلف و یک سامورایی زن مرموز دنبال می‌شوند. جان بلکثورن، ملوان انگلیسی ریسک‌پذیر که در آخرین پرواز خود به ژاپن غرق می‌شود و به یک سرزمین ناآشنا کشیده می‌شود. لرد توراناگا، یک زیرک دایمیو قدرتمند، در تقابل با رقبای خطرناک و سیاسی خود قرار دارد. و لیدی ماریکو، زنی با مهارت‌های ارزشمند، اما در مواجهه با روابط خانوادگی بی‌شرف قرار دارد و باید ارزش و وفاداری خود را ثابت کند.',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkJDzWJ9S2bVvncWUVjjKA3NFlPex0ppGvA&s',
          poster:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3APa8rnjfxaHY3p1410WIUC-8R-EEZ3SFyPGg3b2C8mN6F4pm4EgUVlPP3pD6iSoLok&usqp=CAU',
          url: 'https://www.imdb.com/video/vi2821244441/?playlistId=tt2788316&ref_=tt_ov_vi'
        }
      ],

      currentPage: 1,
      rowsCount: 6,
      //functions Values
      startIndex:null,
      endIndex:null,
      paginatedMovies:null,
      itemDiv:null,
      btn:null,
      btn2:null,
      prevPage:null,
      pageCount:null,
    }
  },
  methods: {
    displayUserList(allMovieArray, moviesContainer, rowsCount, currentPage) {
      moviesContainer.innerHTML = ''

       this.endIndex = rowsCount * currentPage
      this.startIndex = this.endIndex - rowsCount

      this.paginatedMovies = allMovieArray.slice(this.startIndex, this.endIndex)

      this.paginatedMovies.forEach((item) => {
        this.itemDiv = document.createElement('div')
        this.itemDiv.innerHTML = `<article  class="post w-100 d-flex position-realative justify-content-between">
                  <div class="right-side-post d-inline-block">
                    <div  class="headline w-100 d-flex justify-content-between align-items-center">
                      <h2 class="title d-inline-flex align-items-center">
                        <a  class="d-inline-block"  href="#"  >دانلود  ${item.title}</a>
                      </h2>
                      <div class="left-info d-inline-flex align-items-center">
                        <div  class="notification post-notification rounded-circle d-inline-flex align-items-center justify-content-center"  data-post="1444">
                          <i class="fa-solid fa-bell plus"></i>
                          <i class="fa-solid fa-bell check"></i>
                        </div>
                        <span class="age d-inline-flex text-nowrap">TV-14</span>
                      </div>
                    </div>
                    <div class="post-excerpt d-block w-100">
                      <div class="switch-type d-inline-flex">
                        <span data-id="FA" class="active">FA</span>
                        <span data-id="EN" class="">EN</span>
                      </div>
                      <div class="excerpt d-inline">
                        <div class="title d-inline-block">
                          <i class="fa-solid fa-comment-dots"></i>
                          خلاصه داستان :
                        </div>
                        <p class="desc d-inline" data-id="FA">
                        ${item.summery}
                        </p>
                      </div>
                    </div>
                    <ul class="post-info w-100 d-block">
                      <li class="d-flex align-items-center w-100">
                        <span  class="title d-inline-flex text-center overflow-hidden">
                          <div  class="iconic h-100 d-inline-flex align-items-center justify-content-center position-relative">
                            <i class="fa-regular fa-clock"></i>
                          </div>
                          <samp  class="info-badge d-inline-flex align-items-center justify-content-center text-center"  >زمان</samp>
                        </span>
                        <i class="seprator"></i>
                        <div  class="info d-inline-block overflow-hidden text-nowrap text-start"> ${item.time} </div>
                      </li>
                      <li class="d-flex align-items-center w-100">
                        <span  class="title d-inline-flex text-center overflow-hidden">
                          <div  class="iconic h-100 d-inline-flex align-items-center justify-content-center position-relative">
                            <i class="fa-solid fa-masks-theater"></i>
                          </div>
                          <samp  class="info-badge d-inline-flex align-items-center justify-content-center text-center"  >ژانر</samp>
                        </span>
                        <i class="seprator"></i>
                        <div  class="info d-inline-block overflow-hidden text-nowrap text-start">
                          <a  href="#"  target="_blank"  rel="category tag"  >${item.genre[0]}</a>
                          <a  href="#"  target="_blank"  rel="category tag"  >${item.genre[1]}</a>  
                        </div>
                      </li>
                      <li class="d-flex align-items-center w-100">
                        <span  class="title d-inline-flex text-center overflow-hidden">
                          <div  class="iconic h-100 d-inline-flex align-items-center justify-content-center position-relative">
                            <i class="fa-solid fa-crown"></i>
                          </div>
                          <samp  class="info-badge d-inline-flex align-items-center justify-content-center text-center"  >کارگردان</samp>
                        </span>
                        <i class="seprator"></i>
                        <div  class="info d-inline-block overflow-hidden text-nowrap text-start">
                          <a  href="#"  target="_blank"  rel="category tag"  >${item.director}</a>
                        </div>
                      </li>
                      <li class="d-flex align-items-center w-100">
                        <span  class="title d-inline-flex text-center overflow-hidden">
                          <div  class="iconic h-100 d-inline-flex align-items-center justify-content-center position-relative">
                            <i class="fa-solid fa-user"></i>
                          </div>
                          <samp  class="info-badge d-inline-flex align-items-center justify-content-center text-center"  >ستارگان</samp>
                        </span>
                        <i class="seprator"></i>
                        <div  class="info d-inline-block overflow-hidden text-nowrap text-start">
                          <a  href="https://demo.novinwp.com/digimedia/actor/benedict-cumberbatch/"  target="_blank"  rel="category tag"  >${item.stars[0]}</a>
                          <a  href="https://demo.novinwp.com/digimedia/actor/martin-freeman/"  target="_blank"  rel="category tag"  >${item.stars[2]}</a>
                        </div>
                      </li>
                      <li class="d-flex align-items-center w-100">
                        <span  class="title d-inline-flex text-center overflow-hidden">
                          <div  class="iconic h-100 d-inline-flex align-items-center justify-content-center position-relative">
                            <i class="fa-solid fa-globe"></i>
                          </div>
                          <samp  class="info-badge d-inline-flex align-items-center justify-content-center text-center"  >محصول</samp>
                        </span>
                        <i class="seprator"></i>
                        <div  class="info d-inline-block overflow-hidden text-nowrap text-start">
                          <a  href="#"  target="_blank"  rel="category tag"  >${item.country}</a>
                        </div>
                      </li>
                      <li class="d-flex align-items-center w-100">
                        <span  class="title d-inline-flex text-center overflow-hidden quality">
                          <div  class="iconic h-100 d-inline-flex align-items-center justify-content-center position-relative">
                            <i class="fa-solid fa-tv"></i>
                          </div>
                          <samp  class="info-badge d-inline-flex align-items-center justify-content-center text-center"  >کیفیت ها</samp>
                        </span>
                        <i class="seprator"></i>
                        <div  class="info d-inline-block overflow-hidden text-nowrap text-start">
                          <span class="quality-item">480</span>
                          <span class="quality-item">720</span>
                          <span class="quality-item">1080</span>
                        </div>
                      </li>
                      <li class="d-flex align-items-center w-100">
                        <span  class="title d-inline-flex text-center overflow-hidden">
                          <div  class="iconicsvg h-100 d-inline-flex align-items-center justify-content-center position-relative">
                            <svg class="icon">
                              <use xlink:href="#metacritic">
                                <symbol  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 29.4 29.7"  id="metacritic">
                                  <title>Page 1</title>
                                  <path  d="M29.4 14.8c0 8.2-6.7 14.9-14.9 14.9S-.3 23-.3 14.8C-.3 6.7 6.3 0 14.5 0s14.9 6.7 14.9 14.8"  fill="#ffcc34"></path>
                                  <path  d="M26.5 14.8c0 6.6-5.3 11.9-11.9 11.9S2.7 21.4 2.7 14.8 8 2.9 14.6 2.9c6.5 0 11.9 5.3 11.9 11.9"  fill="#333"></path>
                                  <path  d="M6.8 18.9c-1-1-1.9-1.9-2.7-2.6l2.2-2.2 1.2 1 .1-.1c-.2-.8-.3-2.3 1.1-3.7 1.1-1.1 2.5-1.4 3.7-.8-.1-.8-.1-1.5.1-2.1.2-.7.6-1.4 1.2-2 1.6-1.6 3.9-1.7 6.4.8l4.9 4.9-2.5 2.5-4.5-4.5c-1.2-1.2-2.3-1.5-3.1-.7-.6.6-.6 1.4-.3 2.1.1.2.4.5.6.7l4.9 4.9-2.5 2.5L13 15c-1-1-2.1-1.4-3-.5-.7.7-.5 1.6-.3 2.1.1.3.3.5.6.8l4.8 4.8-2.5 2.5-5.8-5.8z"  fill="#fefefe"></path>
                                  <path  d="M34.8 13.2c0-1.3 0-2.5-.1-3.4h2.8l.1 1.5h.1c.5-.7 1.4-1.7 3.2-1.7 1.4 0 2.5.7 2.9 1.8.4-.6.9-1 1.4-1.3.6-.3 1.3-.5 2-.5 2.1 0 3.6 1.4 3.6 4.7v6.3h-3.2v-5.9c0-1.6-.5-2.5-1.6-2.5-.8 0-1.3.5-1.6 1.2-.1.2-.1.6-.1.8v6.3h-3.2v-6c0-1.3-.5-2.3-1.6-2.3-.9 0-1.4.7-1.6 1.2-.1.3-.1.6-.1.9v6.2h-3.2v-7.3h.2zm25.4.7c0-.8-.4-2.2-1.9-2.2-1.4 0-2 1.3-2.1 2.2h4zm-3.9 2.3c.1 1.4 1.5 2.1 3 2.1 1.1 0 2.1-.2 3-.5l.4 2.3c-1.1.5-2.4.7-3.9.7-3.6 0-5.7-2.1-5.7-5.5 0-2.7 1.7-5.7 5.4-5.7 3.5 0 4.8 2.7 4.8 5.4 0 .6-.1 1.1-.1 1.3l-6.9-.1zM69 6.9v2.9h2.4v2.5H69v3.9c0 1.3.3 1.9 1.3 1.9.5 0 .7 0 1-.1v2.5c-.4.2-1.2.3-2.2.3-1.1 0-2-.4-2.5-.9-.6-.7-.9-1.7-.9-3.2v-4.4h-1.4V9.8h1.4v-2l3.3-.9zm10 8.6c-1.8 0-3.1.4-3.1 1.7 0 .9.6 1.3 1.3 1.3.8 0 1.5-.5 1.7-1.2 0-.2.1-.4.1-.6v-1.2zm3.3 2.5c0 1 0 2 .2 2.6h-3l-.2-1.1h-.1c-.7.9-1.8 1.3-3.1 1.3-2.2 0-3.5-1.6-3.5-3.3 0-2.8 2.5-4.1 6.3-4.1v-.1c0-.6-.3-1.4-2-1.4-1.1 0-2.3.4-3 .8l-.6-2.1c.7-.4 2.2-1 4.2-1 3.6 0 4.7 2.1 4.7 4.6l.1 3.8zM93 20.3c-.6.3-1.7.5-3 .5-3.5 0-5.7-2.1-5.7-5.5 0-3.1 2.2-5.7 6.1-5.7.9 0 1.8.2 2.5.4l-.5 2.5c-.4-.2-1-.3-1.9-.3-1.8 0-2.9 1.3-2.9 3 0 2 1.3 3 2.9 3 .8 0 1.4-.1 1.9-.4l.6 2.5zm1.8-7c0-1.6 0-2.6-.1-3.5h2.9l.1 2h.1c.5-1.6 1.8-2.2 2.9-2.2.3 0 .5 0 .7.1v3.1c-.3 0-.5-.1-.9-.1-1.2 0-2.1.6-2.3 1.7 0 .2-.1.5-.1.7v5.4h-3.3v-7.2zm8.3 7.2h3.3V9.8h-3.3v10.7zm1.7-12.1c-1.1 0-1.8-.8-1.8-1.8s.7-1.8 1.9-1.8c1.1 0 1.8.8 1.9 1.8-.1 1-.9 1.8-2 1.8zm8.1-1.5v2.9h2.4v2.5h-2.4v3.9c0 1.3.3 1.9 1.3 1.9.5 0 .7 0 1-.1v2.5c-.4.2-1.2.3-2.2.3-1.1 0-2-.4-2.5-.9-.6-.6-.9-1.7-.9-3.2v-4.4h-1.4V9.8h1.4v-2l3.3-.9zm4.3 13.6h3.3V9.8h-3.3v10.7zm1.6-12.1c-1.1 0-1.8-.8-1.8-1.8s.7-1.8 1.9-1.8c1.1 0 1.8.8 1.9 1.8-.1 1-.8 1.8-2 1.8zm12.4 11.9c-.6.3-1.7.5-3 .5-3.5 0-5.7-2.1-5.7-5.5 0-3.1 2.2-5.7 6.1-5.7.9 0 1.8.2 2.5.4l-.5 2.5c-.4-.2-1-.3-1.9-.3-1.8 0-2.9 1.3-2.9 3 0 2 1.3 3 2.9 3 .8 0 1.4-.1 1.9-.4l.6 2.5z"></path>
                                </symbol>
                              </use>
                            </svg>
                          </div>
                          <samp  class="info-badge d-inline-flex align-items-center justify-content-center text-center"  >امتیاز منتقدین</samp>
                        </span>
                        <i class="seprator"></i>
                        <div  class="info d-inline-block overflow-hidden text-nowrap text-start">
                          ${item.imdbScore}
                        </div>
                      </li>
                    </ul>
                    <div class="bottom-post d-flex w-100">
                      <a  href="../html/single-film.html"  class="more d-inline-flex align-items-center"  >ادامه
                        <span class="d-inline-flex align-items-center h-100"  >دانلود</span>
                      </a>
                    </div>
                  </div>
                  <div  class="left-side-post position-relative d-inline-flex align-items-center" >
                    <div  class="post-bg position-absolute start-0 top-0 w-100 bottom-0"  style="    background-image:url(${item.img});  "></div>
                    <div class="content position-relative w-100 d-block">
                      <div class="imdb text-center">
                        <span class="imdb-rate">${item.imdbScore}</span>
                        <a  href="#"  class="imdb-btn position-relative d-inline-block"  target="_blank"  rel="noopener nofollow"  >IMDb</a>
                      </div>
                      <a  href="#"  class="thumb w-100 d-block">
                        <div class="serie-bg">
                          <div  class="bg first-bg"  style="    background-image: url(${item.img});  "></div>
                          <div  class="bg second-bg"  style="    background-image: url(${item.img});  "></div>
                        </div>
                        <div  class="post-image w-100 d-block position-relative overflow-hidden">
                          <img  width="207"  height="310"  src="${item.img}"  class="attachment-post_cover size-post_cover wp-post-image w-100 h-100 d-block"  alt=""  loading="lazy"  sizes="(max-width: 207px) 100vw, 207px"/>
                          <div  class="img-cover position-absolute top-0 end-0 w-100 h-100 d-block overflow-hidden" >
                            <div  class="playicon w-100 h-100 top-0 end-0 d-flex align-items-center justify-content-center position-absolute">
                              <i class="fa-solid fa-play icon"></i>
                            </div>
                            <div  class="bottom-content w-100 position-absolute bottom-0 end-0 d-flex justify-content-between align-items-center">
                              <div class="popular-rate d-flex">
                                <i class="fa-solid fa-thumbs-up"></i>
                                <span>100%</span>
                              </div>
                              <div class="imdb-rate">
                                <span>${item.imdbScore}</span>
                                <small>/10</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div  class="watchlist-slid w-100 d-flex justify-content-center position-relative">
                          <div  class="watchlist-btn d-inline-flex align-items-center justify-content-center"  data-post="1444">
                            <i class="fa-solid fa-bookmark light"></i>
                            <i class="fa-solid fa-bookmark solid"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </article>`
        moviesContainer.appendChild(this.itemDiv)
      })
    },
    paginationBtnGenerator(page, allMovieArray) {
      this.btn = document.createElement('a')
      this.btn.innerHTML = page

      if (page === this.currentPage) {
        this.btn.classList.add('activePage')
      }

      this.btn.addEventListener('click', () => {
        this.currentPage = page

        this.displayUserList(
          allMovieArray,
          this.userMovieConatiner,
          this.rowsCount,
          this.currentPage
        )

        this.prevPage = document.querySelector('a.activePage')
        this.prevPage.classList.remove('activePage')
        this.btn.classList.add('activePage')
      })

      return this.btn
    },
    setupPagination(allMovieArray, pagesContainer, rowsCount) {
      pagesContainer.innerHTML = ''

      this.pageCount = Math.ceil(allMovieArray.length / rowsCount)

      for (let i = 1; i < this.pageCount + 1; i++) {
        this.btn2 = this.paginationBtnGenerator(i, allMovieArray)
        pagesContainer.appendChild(this.btn2)
      }
    },
    showMovies() {
      this.displayUserList(this.movies, this.$refs.movies, this.rowsCount, this.currentPage)
      this.setupPagination(this.movies, this.$refs.pagination, this.rowsCount)
      console.log("added")
    
  }
},
mounted(){
  this.showMovies()
}
}
</script>

<style>
</style>
