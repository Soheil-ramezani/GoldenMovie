<template>
  <div class="right-side d-inline-block">
    <section class="site-posts d-block w-100">
      <div ref="movies">
        <article
          v-for="item in paginatedItems"
          :key="item.id"
          class="post w-100 d-flex position-realative justify-content-between"
        >
          <div class="right-side-post d-inline-block">
            <div class="headline w-100 d-flex justify-content-between align-items-center">
              <h2 class="title d-inline-flex align-items-center">
                <a class="d-inline-block" href="#">دانلود {{ item.title }}</a>
              </h2>
              <div class="left-info d-inline-flex align-items-center">
                <div
                  class="notification post-notification rounded-circle d-inline-flex align-items-center justify-content-center"
                  data-post="1444"
                >
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
                <p class="desc d-inline" data-id="FA">{{ item.summery }}</p>
              </div>
            </div>
            <ul class="post-info w-100 d-block">
              <li class="d-flex align-items-center w-100">
                <span class="title d-inline-flex text-center overflow-hidden">
                  <div
                    class="iconic h-100 d-inline-flex align-items-center justify-content-center position-relative"
                  >
                    <i class="fa-regular fa-clock"></i>
                  </div>
                  <samp
                    class="info-badge d-inline-flex align-items-center justify-content-center text-center"
                    >زمان</samp
                  >
                </span>
                <i class="seprator"></i>
                <div class="info d-inline-block overflow-hidden text-nowrap text-start">
                  {{ item.time }}
                </div>
              </li>
              <li class="d-flex align-items-center w-100">
                <span class="title d-inline-flex text-center overflow-hidden">
                  <div
                    class="iconic h-100 d-inline-flex align-items-center justify-content-center position-relative"
                  >
                    <i class="fa-solid fa-masks-theater"></i>
                  </div>
                  <samp
                    class="info-badge d-inline-flex align-items-center justify-content-center text-center"
                    >ژانر</samp
                  >
                </span>
                <i class="seprator"></i>
                <div class="info d-inline-block overflow-hidden text-nowrap text-start">
                  <a href="#" target="_blank" rel="category tag">{{ item.genre[0] }}</a>
                  <a href="#" target="_blank" rel="category tag">{{ item.genre[1] }}</a>
                </div>
              </li>
              <li class="d-flex align-items-center w-100">
                <span class="title d-inline-flex text-center overflow-hidden">
                  <div
                    class="iconic h-100 d-inline-flex align-items-center justify-content-center position-relative"
                  >
                    <i class="fa-solid fa-crown"></i>
                  </div>
                  <samp
                    class="info-badge d-inline-flex align-items-center justify-content-center text-center"
                    >کارگردان</samp
                  >
                </span>
                <i class="seprator"></i>
                <div class="info d-inline-block overflow-hidden text-nowrap text-start">
                  <a href="#" target="_blank" rel="category tag">{{ item.director }}</a>
                </div>
              </li>
              <li class="d-flex align-items-center w-100">
                <span class="title d-inline-flex text-center overflow-hidden">
                  <div
                    class="iconic h-100 d-inline-flex align-items-center justify-content-center position-relative"
                  >
                    <i class="fa-solid fa-user"></i>
                  </div>
                  <samp
                    class="info-badge d-inline-flex align-items-center justify-content-center text-center"
                    >ستارگان</samp
                  >
                </span>
                <i class="seprator"></i>
                <div class="info d-inline-block overflow-hidden text-nowrap text-start">
                  <a
                    href="https://demo.novinwp.com/digimedia/actor/benedict-cumberbatch/"
                    target="_blank"
                    rel="category tag"
                    >{{ item.stars[0] }}</a
                  >
                  <a
                    href="https://demo.novinwp.com/digimedia/actor/martin-freeman/"
                    target="_blank"
                    rel="category tag"
                    >{{ item.stars[2] }}</a
                  >
                </div>
              </li>
              <li class="d-flex align-items-center w-100">
                <span class="title d-inline-flex text-center overflow-hidden">
                  <div
                    class="iconic h-100 d-inline-flex align-items-center justify-content-center position-relative"
                  >
                    <i class="fa-solid fa-globe"></i>
                  </div>
                  <samp
                    class="info-badge d-inline-flex align-items-center justify-content-center text-center"
                    >محصول</samp
                  >
                </span>
                <i class="seprator"></i>
                <div class="info d-inline-block overflow-hidden text-nowrap text-start">
                  <a href="#" target="_blank" rel="category tag">{{ item.country }}</a>
                </div>
              </li>
              <li class="d-flex align-items-center w-100">
                <span class="title d-inline-flex text-center overflow-hidden quality">
                  <div
                    class="iconic h-100 d-inline-flex align-items-center justify-content-center position-relative"
                  >
                    <i class="fa-solid fa-tv"></i>
                  </div>
                  <samp
                    class="info-badge d-inline-flex align-items-center justify-content-center text-center"
                    >کیفیت ها</samp
                  >
                </span>
                <i class="seprator"></i>
                <div class="info d-inline-block overflow-hidden text-nowrap text-start">
                  <span class="quality-item">480</span>
                  <span class="quality-item">720</span>
                  <span class="quality-item">1080</span>
                </div>
              </li>
              <li class="d-flex align-items-center w-100">
                <span class="title d-inline-flex text-center overflow-hidden">
                  <div
                    class="iconicsvg h-100 d-inline-flex align-items-center justify-content-center position-relative"
                  >
                    <svg class="icon">
                      <use xlink:href="#metacritic">
                        <symbol
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 29.4 29.7"
                          id="metacritic"
                        >
                          <title>Page 1</title>
                          <path
                            d="M29.4 14.8c0 8.2-6.7 14.9-14.9 14.9S-.3 23-.3 14.8C-.3 6.7 6.3 0 14.5 0s14.9 6.7 14.9 14.8"
                            fill="#ffcc34"
                          ></path>
                          <path
                            d="M26.5 14.8c0 6.6-5.3 11.9-11.9 11.9S2.7 21.4 2.7 14.8 8 2.9 14.6 2.9c6.5 0 11.9 5.3 11.9 11.9"
                            fill="#333"
                          ></path>
                          <path
                            d="M6.8 18.9c-1-1-1.9-1.9-2.7-2.6l2.2-2.2 1.2 1 .1-.1c-.2-.8-.3-2.3 1.1-3.7 1.1-1.1 2.5-1.4 3.7-.8-.1-.8-.1-1.5.1-2.1.2-.7.6-1.4 1.2-2 1.6-1.6 3.9-1.7 6.4.8l4.9 4.9-2.5 2.5-4.5-4.5c-1.2-1.2-2.3-1.5-3.1-.7-.6.6-.6 1.4-.3 2.1.1.2.4.5.6.7l4.9 4.9-2.5 2.5L13 15c-1-1-2.1-1.4-3-.5-.7.7-.5 1.6-.3 2.1.1.3.3.5.6.8l4.8 4.8-2.5 2.5-5.8-5.8z"
                            fill="#fefefe"
                          ></path>
                          <path
                            d="M34.8 13.2c0-1.3 0-2.5-.1-3.4h2.8l.1 1.5h.1c.5-.7 1.4-1.7 3.2-1.7 1.4 0 2.5.7 2.9 1.8.4-.6.9-1 1.4-1.3.6-.3 1.3-.5 2-.5 2.1 0 3.6 1.4 3.6 4.7v6.3h-3.2v-5.9c0-1.6-.5-2.5-1.6-2.5-.8 0-1.3.5-1.6 1.2-.1.2-.1.6-.1.8v6.3h-3.2v-6c0-1.3-.5-2.3-1.6-2.3-.9 0-1.4.7-1.6 1.2-.1.3-.1.6-.1.9v6.2h-3.2v-7.3h.2zm25.4.7c0-.8-.4-2.2-1.9-2.2-1.4 0-2 1.3-2.1 2.2h4zm-3.9 2.3c.1 1.4 1.5 2.1 3 2.1 1.1 0 2.1-.2 3-.5l.4 2.3c-1.1.5-2.4.7-3.9.7-3.6 0-5.7-2.1-5.7-5.5 0-2.7 1.7-5.7 5.4-5.7 3.5 0 4.8 2.7 4.8 5.4 0 .6-.1 1.1-.1 1.3l-6.9-.1zM69 6.9v2.9h2.4v2.5H69v3.9c0 1.3.3 1.9 1.3 1.9.5 0 .7 0 1-.1v2.5c-.4.2-1.2.3-2.2.3-1.1 0-2-.4-2.5-.9-.6-.7-.9-1.7-.9-3.2v-4.4h-1.4V9.8h1.4v-2l3.3-.9zm10 8.6c-1.8 0-3.1.4-3.1 1.7 0 .9.6 1.3 1.3 1.3.8 0 1.5-.5 1.7-1.2 0-.2.1-.4.1-.6v-1.2zm3.3 2.5c0 1 0 2 .2 2.6h-3l-.2-1.1h-.1c-.7.9-1.8 1.3-3.1 1.3-2.2 0-3.5-1.6-3.5-3.3 0-2.8 2.5-4.1 6.3-4.1v-.1c0-.6-.3-1.4-2-1.4-1.1 0-2.3.4-3 .8l-.6-2.1c.7-.4 2.2-1 4.2-1 3.6 0 4.7 2.1 4.7 4.6l.1 3.8zM93 20.3c-.6.3-1.7.5-3 .5-3.5 0-5.7-2.1-5.7-5.5 0-3.1 2.2-5.7 6.1-5.7.9 0 1.8.2 2.5.4l-.5 2.5c-.4-.2-1-.3-1.9-.3-1.8 0-2.9 1.3-2.9 3 0 2 1.3 3 2.9 3 .8 0 1.4-.1 1.9-.4l.6 2.5zm1.8-7c0-1.6 0-2.6-.1-3.5h2.9l.1 2h.1c.5-1.6 1.8-2.2 2.9-2.2.3 0 .5 0 .7.1v3.1c-.3 0-.5-.1-.9-.1-1.2 0-2.1.6-2.3 1.7 0 .2-.1.5-.1.7v5.4h-3.3v-7.2zm8.3 7.2h3.3V9.8h-3.3v10.7zm1.7-12.1c-1.1 0-1.8-.8-1.8-1.8s.7-1.8 1.9-1.8c1.1 0 1.8.8 1.9 1.8-.1 1-.9 1.8-2 1.8zm8.1-1.5v2.9h2.4v2.5h-2.4v3.9c0 1.3.3 1.9 1.3 1.9.5 0 .7 0 1-.1v2.5c-.4.2-1.2.3-2.2.3-1.1 0-2-.4-2.5-.9-.6-.6-.9-1.7-.9-3.2v-4.4h-1.4V9.8h1.4v-2l3.3-.9zm4.3 13.6h3.3V9.8h-3.3v10.7zm1.6-12.1c-1.1 0-1.8-.8-1.8-1.8s.7-1.8 1.9-1.8c1.1 0 1.8.8 1.9 1.8-.1 1-.8 1.8-2 1.8zm12.4 11.9c-.6.3-1.7.5-3 .5-3.5 0-5.7-2.1-5.7-5.5 0-3.1 2.2-5.7 6.1-5.7.9 0 1.8.2 2.5.4l-.5 2.5c-.4-.2-1-.3-1.9-.3-1.8 0-2.9 1.3-2.9 3 0 2 1.3 3 2.9 3 .8 0 1.4-.1 1.9-.4l.6 2.5z"
                          ></path>
                        </symbol>
                      </use>
                    </svg>
                  </div>
                  <samp
                    class="info-badge d-inline-flex align-items-center justify-content-center text-center"
                    >امتیاز منتقدین</samp
                  >
                </span>
                <i class="seprator"></i>
                <div class="info d-inline-block overflow-hidden text-nowrap text-start">
                  {{ item.imdbScore }}
                </div>
              </li>
            </ul>
            <div class="bottom-post d-flex w-100">
              <a href="../html/single-film.html" class="more d-inline-flex align-items-center"
                >ادامه
                <span class="d-inline-flex align-items-center h-100">دانلود</span>
              </a>
            </div>
          </div>
          <div class="left-side-post position-relative d-inline-flex align-items-center">
            <div
              class="post-bg position-absolute start-0 top-0 w-100 bottom-0"
              :style="{ backgroundImage: 'url(' + item.img + ')' }"
            ></div>
            <div class="content position-relative w-100 d-block">
              <div class="imdb text-center">
                <span class="imdb-rate">{{ item.imdbScore }}</span>
                <a
                  href="#"
                  class="imdb-btn position-relative d-inline-block"
                  target="_blank"
                  rel="noopener nofollow"
                  >IMDb</a
                >
              </div>
              <a href="#" class="thumb w-100 d-block">
                <div class="serie-bg">
                  <div
                    class="bg first-bg"
                    :style="{ backgroundImage: 'url(' + item.img + ')' }"
                  ></div>
                  <div
                    class="bg second-bg"
                    :style="{ backgroundImage: 'url(' + item.img + ')' }"
                  ></div>
                </div>
                <div class="post-image w-100 d-block position-relative overflow-hidden">
                  <img
                    width="207"
                    height="310"
                    :src="item.img"
                    class="attachment-post_cover size-post_cover wp-post-image w-100 h-100 d-block"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 207px) 100vw, 207px"
                  />
                  <div
                    class="img-cover position-absolute top-0 end-0 w-100 h-100 d-block overflow-hidden"
                  >
                    <div
                      class="playicon w-100 h-100 top-0 end-0 d-flex align-items-center justify-content-center position-absolute"
                    >
                      <i class="fa-solid fa-play icon"></i>
                    </div>
                    <div
                      class="bottom-content w-100 position-absolute bottom-0 end-0 d-flex justify-content-between align-items-center"
                    >
                      <div class="popular-rate d-flex">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>100%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>{{ item.imdbScore }}</span>
                        <small>/10</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="watchlist-slid w-100 d-flex justify-content-center position-relative">
                  <div
                    class="watchlist-btn d-inline-flex align-items-center justify-content-center"
                    data-post="1444"
                  >
                    <i class="fa-solid fa-bookmark light"></i>
                    <i class="fa-solid fa-bookmark solid"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
    <section class="site-posts d-block w-100">
      <div ref="pagination" class="pagination w-100 d-flex flex-wrap justify-content-center">
        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeMovieList', 
  data() {
    return {
      items: [
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
          img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/the-godfather-poster.jpeg',
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
          poster: 'data:image/jpeg;base64,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',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQob7v4AGhOSXc2WT5Fc9DfDF5lWxZ6d6kMVw&s',
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
          summery: 'ارتش روم به رهبری ژنرال ماکسیموس، روم را نجات می دهد. امپراتور بدون توجه به پسر کثیفش، کومودوس، از ماکسیموس می خواهد تا زمام امور را به دست گیرد و یک جمهوری مستقل پدید آورَد. کومودوس پدر را به قتل می رسانَد و دستور اعدام ماکسیموس و خانواده او را در اسپانیا صادر می کند. ولی ماکسیموس ...',
          img: 'https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg',
          poster: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/10/maximus-dream-family-gladiator.jpg',
          url: 'https://www.uptvs.com/play2?e=77632&sub=%DA%AF%D9%84%D8%A7%D8%AF%DB%8C%D8%A7%D8%AA%D9%88%D8%B1'
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
       itemsPerPage: 5, // Adjust this number as needed
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.items.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
 
}
</script>

<style>
</style>
