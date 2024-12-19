<template>
    <div class="dashboardPage w-100 h-100 gray-bg p-5 pt-3">
      <div
        id="MoviesList"
        class="usersList box-bg p-5 d-flex align-items-center flex-column custom-box-shadow"
      >
        <h5 class="light-Gray-text mb-4">مشخصات فیلم ها</h5>
        <hr class="w-75" />
        <!-- MovieElem -->
        <div class="MoviesList" ref="MoviesList">
          <div 
            class="movieElem mt-4 d-flex flex-md-row custom-box-shadow p-4 w-100 row-cols-3"
            v-for="(movie, id) in moviesList" 
            :key="id"
          >
            <div class="movieImg d-flex justify-content-center align-items-center">
              <img :src="movie.img" alt="moviePic">
            </div>
            <!-- MovieTitle -->
            <div class="MovieTitle m-4 d-flex justify-content-center align-items-center">
              <h3 class="light-Gray-text">{{ movie.title }}</h3>
            </div>
            <!-- movieControlBtn -->
            <div class="MovieBtn d-flex flex-md-row justify-content-center align-items-center">
              <button @click="deletemovieElem" class="userbtn white-text p-2 pb-3 m-2 d-flex justify-content-center align-items-center">
                حذف
              </button>
              <button class="userbtn white-text p-2 pb-3 m-2 d-flex justify-content-center align-items-center">
                ویرایش اطلاعات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>

export default {
  name: 'MovieList',
  data() {
    return {
      moviesList:{
        movie1:{
        title: "The Shawshank Redemption", time: "142 دقیقه", year: 1994, imdbScore: 9.3, country: "آمریکا", director: "Frank Darabont", stars: ["Tim Robbins", "https://variety.com/wp-content/uploads/2023/04/Collage-Maker-26-Apr-2023-04-23-PM-2572.jpg", "Morgan Freeman", "https://historyuk.s3.eu-west-2.amazonaws.com/s3fs-public/styles/768x432/public/2022-01/morgan%20freeman-min.jpg?itok=yEZRDGSQ", "Bob Gunton", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKDMy5LjN43ddR5H3loNJhnppVStBDCVUWw&s"], genre: ["درام"], quality: [480, 720, 1080], Isdubbed: true, summery: "در فیلم رستگاری در شاوشنک : اندی دوفرین بانکدار جوانی است که به جرم قتل همسر اش به حبس ابد در زندان ایالتی شائوشنک محکوم می شود. وی تأکید می کند که جرمی مرتکب نشده، ولی قاضی او را گناهکار اعلام میکند. او سالهای زیادی را در این زندان می گذراند. آلیس بوید رِدینگ یکی از زندانی های سیاه پوست است که به این شهرت دارد که می تواند هر چیزی را در زندان فراهم کند و ...", IsTopFilm: true, img: "https://www.imdb.com/title/tt0111161/mediaviewer/rm1690056449/?ref_=tt_ov_i", poster: "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_QL75_UX484.5_.jpg", url: "https://www.uptvs.com/play2?e=78950&dub=%D8%B1%D8%B3%D8%AA%DA%AF%D8%A7%D8%B1%DB%8C%20%D8%AF%D8%B1%20%D8%B4%D8%A7%D9%88%D8%B4%D9%86%DA%A9"
    },
    movie2:
    {
        title: "The Godfather", time: " 175 دقیقه ", year: 1972, imdbScore: 9.2, country: "آمریکا", IsTopFilm: true, director: "Francis Ford Coppola", stars: ["Francis Ford Coppola", "https://ca-times.brightspotcdn.com/dims4/default/67f759a/2147483647/strip/true/crop/3600x4505+0+0/resize/2000x2503!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F20%2F7b%2F43fa1c104895b17943be44b53b8f%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1506423441", "Al Pacino", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFmdRCUk9PH5c-BJYBRHYGRsosYe180t57g&s"], genre: ["درام", "تراژدی", "جنایی"], quality: [480, 720, 1080], Isdubbed: true, summery: "فیلم در جشن عروسی کانی، دختر دون ویتو کورلئونه، در لانگ بیچ نیویورک، لانگ آیلند شروع می شود. وقت پدرخوانده برای شنیدن خواهش های دوستان و زیردستان چاپلوس پر شده است. یکی از این خواهش ها را پسرخوانده ی او، جانی فونتی خواننده مطرح می کند. آن خواهش چیست؟", img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/the-godfather-poster.jpeg", poster: "https://assets.mubicdn.net/images/artworks/550926/images-original.png?1686641973", url: "https://www.uptvs.com/play2?e=67604&dub=%D9%BE%D8%AF%D8%B1%D8%AE%D9%88%D8%A7%D9%86%D8%AF%D9%87"
    },
    movie3:  {
        title: "Schindler's List", time: " 195 دقیقه ", year: 1993, imdbScore: 9.0, country: "آمریکا", IsTopFilm: true, director: "    Steven Spielberg", stars: ["Liam Neeson", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqjKu4hpofDyQmiiV8G-GTIWWoTV0IQRLQQ&s", "Ralph Fiennes", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS17jD_DiWAhBc4sRW5g-KdxZJ5WmS7tu3OQ&s"], genre: ["درام", "زندگینامه", "تاریخی"], quality: [480, 720, 1080], Isdubbed: true, summery: " اسکار شیندلر طی سال‌های جنگ جهانی دوم در لهستان که به دست آلمان اشغال شده تلاش می‌کند تا کارگران یهودی خود را نجات داده و از اعزام آنها به اردوگاه‌های کار اجباری جلوگیری کند و...", poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smithsonianmag.com%2Fhistory%2Fhow-schindlers-list-transformed-americans-understanding-of-the-holocaust-180983408%2F&psig=AOvVaw2PNPp0S9Y2-AIt1n-ihv11&ust=1726989674589000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKDowJHA04gDFQAAAAAdAAAAABAJ", img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FSchindlers-List-Liam-Neeson%2Fdp%2FB07JJ5WH62&psig=AOvVaw2PNPp0S9Y2-AIt1n-ihv11&ust=1726989674589000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKDowJHA04gDFQAAAAAdAAAAABAE", url: "https://www.uptvs.com/play2?e=107623&dub=%D9%81%D9%87%D8%B1%D8%B3%D8%AA%20%D8%B4%DB%8C%D9%86%D8%AF%D9%84%D8%B1"
    },
    movie4:
    {
        title: "Forrest Gump", time: "	142 دقیقه ", IsTopFilm: true, year: 1994, imdbScore: 8.8, director: "Robert Zemeckis", stars: ["Tom Hanks", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kennedy-center.org%2Fartists%2Fh%2Fha-hn%2Ftom-hanks%2F&psig=AOvVaw2lW2DTy5UrgRjpL8EMHfDA&ust=1726992246928000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiX_NvJ04gDFQAAAAAdAAAAABAE", "Robin Wright", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMQeoA3IlQ1I2-vANlJu53FZPfALeixbdjg&s"], genre: ["زندگینامه", "درام", "رمانتیک"], country: "آمریکا", quality: [480, 720, 1080], Isdubbed: true, summery: " آی کیوی او در خردسالی زیر حد معمولی (۷۵) بود، شخصیت شیرین و عزیزی دارد و نسبت به عزیزان و وظایف خود از خود گذشته‌است. صفات شخصیتی او باعث می‌شود که موقعیت‌هایی برایش پیش آید که مسیر زندگیش را تغییر دهد. با پیش آمدن چنین موقعیت‌هایی او با رخدادها و شخصیت‌های برجسته تاریخ معاصر آمریکا مواجه می‌شود.", poster: "https://m.media-amazon.com/images/S/pv-target-images/0ad69b0fc33c51c85f1874652d0663a9c2b5063ae5b78580d5d4530c6917fc27._SX1080_FMjpg_.jpg", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaNwbILJZZrhqpXUECVrPf1m8h3mw8dQWwA&s", url: "https://www.uptvs.com/play2?e=96738&dub=%D9%81%D8%A7%D8%B1%D8%B3%D8%AA%20%DA%AF%D8%A7%D9%85%D9%BE"
    },
    movie5:{
        title: "Fight Club", time: "139 دقیقه ", year: 1999, IsTopFilm: true, imdbScore: 8.8, director: "David Fincher", stars: [" Brad Pitt", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbtBP6gWiUX1gxHahE59fWRf8B2pv-egVSQ&s", "Edward Norton", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZOi9XZcRhgzBUc_fN8s3VkUbrNsgM9RGgQ&s"], genre: ["درام"], country: "آلمان", quality: [720, 1080], Isdubbed: true, summery: " «راوی»، جوانی پریشان، پی می‌برد که به کمک مشت‌بازی با دست‌های برهنه، بیش از هر زمان دیگری احساس زنده بودن می‌کند. او و «تایلر» که به دوستانی صمیمی تبدیل شده‌اند، هفته‌ای یک بار با هم ملاقات می‌کنند تا با هم مشت بازی کنند. در حالی که افراد دیگری هم به باشگاه‌شان می‌پیوندند، محفل‌شان به رغم آن که مخفی است بین شرکت کننده‌هایش، شهرت و محبوبیت یک باشگاه زیرزمینی را پیدا می‌کند و...", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanu-m1-UXm-Cbt0TPM313JoTHCA7aGRD3Hw&s", img: "https://media.posterlounge.com/img/products/770000/764906/764906_poster.jpg", url: "https://www.uptvs.com/play2?e=81354&dub=%D8%A8%D8%A7%D8%B4%DA%AF%D8%A7%D9%87%20%D9%85%D8%B4%D8%AA%20%D8%B2%D9%86%DB%8C"
    }
      },
      movieElem : null
    }
  },
  methods: {
    deletemovieElem() {
     this.movieElem = event.target.closest('.movieElem'); // Find the closest parent with class .movieElem
    if (this.movieElem) {
        this.movieElem.remove(); // Remove the movie element from the DOM
    }
},
  }
}
</script>

<style>
</style>