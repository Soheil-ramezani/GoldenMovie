<script setup>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
</script>
<template>
  <div>
    <Header />
    <main class="main-site">
      <div class="main-single">
        <!-- moviePoster&infos -->
        <!-- movieInfoTopBox -->
        <section class="movies-h-single w-100 d-block position-relative">
          <div
            class="main-head-cover w-100 h-100 position-absolute d-block overflow-hidden top-0 end-0"
          >
            <div class="head-cover" :style="{ backgroundImage: `url(${movieQuery.img})` }"></div>
          </div>
          <div class="main main-h-content">
            <div class="toping-head">
              <nav class="breadcrumbs">
                <i class="bread-icon fa-solid fa-location-dot"></i>
                <a href="#">خانه</a>
                <a href="#" rel="category tag">فیلم ها</a>
                <a href="#" rel="tag">{{ movieQuery.title }}</a>
              </nav>
            </div>
            <div class="movies-h-info">
              <div class="right-h-content">
                <div class="imdb-rate">
                  <a
                    href="https://www.imdb.com"
                    class="imdb-btn"
                    target="_blank"
                    rel="noopener nofollow"
                    >IMDb</a
                  >
                  <span class="rate">{{ movieQuery.imdbScore }}</span>
                </div>
                <figure class="thumb">
                  <div class="post-image">
                    <img
                      width="210"
                      height="310"
                      :src="movieQuery.img"
                      class="attachment-post_cover size-post_cover wp-post-image"
                      alt=""
                      decoding="async"
                      fetchpriority="high"
                      sizes="(max-width: 210px) 100vw, 210px"
                    />
                    <a :href="movieQuery.url" target="_blank" class="trailer-link">
                      <div class="content">
                        <div class="play-icon">
                          <i class="fa-solid fa-play"></i>
                        </div>
                        <span class="text">مشاهده تریلر</span>
                      </div>
                    </a>
                  </div>
                  <div class="watchlist-slid">
                    <div class="watchlist-btn" data-post="1113">
                      <i class="fa-solid fa-bookmark solid"></i>
                    </div>
                  </div>
                </figure>
                <div class="site-rating">
                  <div class="rate-btns" data-post="1113">
                    <span class="bt like" data-type="like">
                      <div class="bt-icon">
                        <i class="fa-solid fa-thumbs-up"></i>
                      </div>
                    </span>
                    <span class="bt dislike" data-type="dislike">
                      <div class="bt-icon">
                        <i class="fa-solid fa-thumbs-up"></i>
                      </div>
                    </span>
                  </div>
                  <div class="rates-result">
                    <samp>100%</samp>
                    <i class="fa-light fa-thumbs-up"></i>
                  </div>
                </div>
              </div>
              <div class="left-h-content">
                <div class="headline-title">
                  <div class="title">
                    <h1>{{ movieQuery.title }}</h1>
                  </div>
                  <div class="site-rating">
                    <div class="rate-btns" data-post="1113">
                      <span class="bt like" data-type="like">
                        <div class="bt-icon">
                          <i class="fa-solid fa-thumbs-up"></i>
                        </div>
                        <span class="bt-title">پسندیدن</span>
                      </span>
                      <span class="bt dislike" data-type="dislike">
                        <span class="bt-title">نپسندیدن</span>
                        <div class="bt-icon">
                          <i class="fa-solid fa-thumbs-up"></i>
                        </div>
                      </span>
                    </div>
                    <div class="rates-result">
                      <span class="count">(1 رای)</span>
                      <samp>100%</samp>
                      <i class="fa-solid fa-thumbs-up"></i>
                    </div>
                  </div>
                </div>
                <div class="real-content">
                  <div class="side right-box">
                    <ul class="genres">
                      <li class="genre" v-for="genre in movieQuery.genre" :key="genre">
                        <a href="#" rel="category tag">{{ genre }}</a>
                      </li>
                    </ul>
                    <div class="post-excerpt">
                      <p>{{ movieQuery.summery }}</p>
                    </div>
                    <div class="imdb-scores">
                      <div class="item metacritic">
                        <svg class="icon">
                          <use xlink:href="#metacritic"></use>
                        </svg>
                        <span class="title">امتیاز منتقدین</span>
                        <samp class="text">78</samp>
                      </div>
                      <div class="item scores">
                        <svg class="icon">
                          <use xlink:href="#fly-star"></use>
                        </svg>
                        <span class="title">رای کاربران IMDb</span>
                        <samp class="text">1,515,277</samp>
                      </div>
                    </div>
                    <div class="post-btns">
                      <a
                        href="https://demo.novinwp.com/digimedia2/play/1113"
                        target="_blank"
                        class="btn play"
                      >
                        <i class="fa-solid fa-play"></i>
                        <span>پخش آنلاین</span>
                      </a>
                      <div class="btn notification post-notification" data-post="1113">
                        <i class="fa-solid fa-bell check"></i>
                        <span>اعلان فیلم</span>
                      </div>
                    </div>
                  </div>
                  <div class="side left-box">
                    <ul class="post-meta">
                      <li class="item">
                        <span class="title"
                          ><i class="fa-solid fa-closed-captioning"></i> زیرنویس :</span
                        >
                        <div class="item-info" v-if="movieQuery.Isdubbed">ندارد</div>
                        <div class="item-info" v-else>دارد</div>
                      </li>
                      <li class="item">
                        <span class="title"><i class="fa-solid fa-microphone"></i> دوبله :</span>
                        <div class="item-info" v-if="movieQuery.Isdubbed">دارد</div>
                        <div class="item-info" v-else>ندارد</div>
                      </li>
                      <li class="item">
                        <span class="title"><i class="fa-solid fa-clock"></i> زمان :</span>
                        <div class="item-info">{{ movieQuery.time }} دقیقه</div>
                      </li>
                      <li class="item country">
                        <span class="title"><i class="fa-solid fa-globe"></i> محصول :</span>
                        <div class="item-info">
                          <a href="#" rel="tag">{{ movieQuery.country }}</a>
                        </div>
                      </li>
                      <li class="item">
                        <span class="title"><i class="fa-solid fa-user-plus"></i> رده سنی :</span>
                        <div class="item-info">R</div>
                      </li>
                      <li class="item">
                        <span class="title"
                          ><i class="fa-solid fa-calendar-day"></i> سال تولید :</span
                        >
                        <div class="item-info">
                          <a href="#" rel="tag">{{ movieQuery.year }}</a>
                        </div>
                      </li>
                      <li class="item">
                        <span class="title"><i class="fa-solid fa-calendar-day"></i> زبان :</span>
                        <div class="item-info">
                          <a href="#" rel="tag" v-if="movieQuery.Isdubbed">فارسی</a>
                          <a href="#" rel="tag" v-else>English</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- MovieInfos&DownloadBox&userComments -->
        <section class="movies-body">
          <div class="main">
            <div class="main-side-item main-post-info">
              <div class="item-box">
                <h3 class="title">
                  <i class="icon fa-solid fa-users"></i>
                  <span>بازیگران</span>
                  <i class="seprator"></i>
                </h3>
                <div class="main-list-slider act-sld">
                  <div class="s-nav">
                    <span
                      class="next swiper-button-disabled"
                      tabindex="-1"
                      role="button"
                      aria-label="Next slide"
                      aria-controls="swiper-wrapper-4070ea989c771437"
                      aria-disabled="true"
                      ><i class="fa-solid fa-arrow-left"></i
                    ></span>
                    <span
                      class="prev swiper-button-disabled"
                      tabindex="-1"
                      role="button"
                      aria-label="Previous slide"
                      aria-controls="swiper-wrapper-4070ea989c771437"
                      aria-disabled="true"
                      ><i class="fa-solid fa-arrow-right"></i
                    ></span>
                  </div>
                  <div
                    class="swiper-container acts-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-backface-hidden"
                  >
                    <div
                      class="swiper-wrapper"
                      style="transform: translate3d(0px, 0px, 0px)"
                      id="swiper-wrapper-4070ea989c771437"
                      aria-live="polite"
                    >
                      <div
                        v-if="movieQuery.stars[0]"
                        class="swiper-slide swiper-slide-active"
                        style="width: 123.667px; margin-left: 10px"
                        role="group"
                        aria-label="1 / 3"
                      >
                        <a href="#" rel="tag" target="_blank" class="item">
                          <figure class="pic">
                            <img :src="movieQuery.star1_img" :alt="movieQuery.stars[0]" />
                          </figure>
                          <div class="list-content">
                            <h2 class="name">{{ movieQuery.stars[0] }}</h2>
                            <span class="desc">ستاره</span>
                          </div>
                        </a>
                      </div>
                      <div
                        v-if="movieQuery.stars[1]"
                        class="swiper-slide swiper-slide-next"
                        style="width: 123.667px; margin-left: 10px"
                        role="group"
                        aria-label="2 / 3"
                      >
                        <a href="#" rel="tag" target="_blank" class="item">
                          <figure class="pic">
                            <img :src="movieQuery.star2_img" :alt="movieQuery.stars[1]" />
                          </figure>
                          <div class="list-content">
                            <h2 class="name">{{ movieQuery.stars[1] }}</h2>
                            <span class="desc">ستاره</span>
                          </div>
                        </a>
                      </div>
                      <div
                        v-if="movieQuery.stars[2]"
                        class="swiper-slide"
                        style="width: 123.667px; margin-left: 10px"
                        role="group"
                        aria-label="3 / 3"
                      >
                        <a href="#" rel="tag" target="_blank" class="item">
                          <figure class="pic">
                            <img :src="movieQuery.star3_img" :alt="movieQuery.stars[2]" />
                          </figure>
                          <div class="list-content">
                            <h2 class="name">{{ movieQuery.stars[2] }}</h2>
                            <span class="desc">ستاره</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span
                      class="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="item-box">
                <h3 class="title">
                  <i class="icon fa-solid fa-user"></i>
                  <span>کارگردانان</span>
                  <i class="seprator"></i>
                </h3>
                <div class="main-list-slider dirct-sld">
                  <div class="s-nav">
                    <span
                      class="next swiper-button-disabled"
                      tabindex="-1"
                      role="button"
                      aria-label="Next slide"
                      aria-controls="swiper-wrapper-445571918cfc91f6"
                      aria-disabled="true"
                      ><i class="fa-solid fa-arrow-left"></i
                    ></span>
                    <span
                      class="prev swiper-button-disabled"
                      tabindex="-1"
                      role="button"
                      aria-label="Previous slide"
                      aria-controls="swiper-wrapper-445571918cfc91f6"
                      aria-disabled="true"
                      ><i class="fa-solid fa-arrow-right"></i
                    ></span>
                  </div>
                  <div
                    class="swiper-container acts-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-backface-hidden"
                  >
                    <div
                      class="swiper-wrapper"
                      style="transform: translate3d(0px, 0px, 0px)"
                      id="swiper-wrapper-445571918cfc91f6"
                      aria-live="polite"
                    >
                      <div
                        class="swiper-slide swiper-slide-active"
                        style="width: 123.667px; margin-left: 10px"
                        role="group"
                        aria-label="1 / 1"
                      >
                        <a href="#" rel="tag" target="_blank" class="item">
                          <figure class="pic">
                            <img :src="movieQuery.director_img" :alt="movieQuery.director" />
                          </figure>
                          <div class="list-content">
                            <h2 class="name">{{ movieQuery.director }}</h2>
                            <span class="desc">بازیگر</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span
                      class="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="item-box awards">
                <h3 class="title">
                  <i class="icon fa-solid fa-trophy"></i>
                  <span>امتیازات</span>
                  <i class="seprator"></i>
                </h3>
                <ul class="list">
                  <li class="list-item">
                    <div class="info-item awards">
                      <h5 class="title">جوایز</h5>
                      <div class="content">120 بار برنده جایزه و 245 بار نامزد دریافت جایزه</div>
                    </div>
                  </li>
                  <li class="list-item">
                    <div class="info-item imdb-rate">
                      <h5 class="title">رتبه</h5>
                      <div class="content">
                        <span class="desc">جزو 250 فیلم برتر با رتبه</span>
                        <span class="imdb-rate-id">83</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="main">
            <div class="main-side-item download-box movies">
              <div class="headline-title">
                <h3 class="title">
                  <i
                    class="fa-solid fa-download"
                    style="font-size: 15px; margin-left: 5px; color: #29b6f6"
                  ></i>
                  <span>باکس دانلود</span>
                  <i class="seprator"></i>
                </h3>
                <div class="desc">
                  <i class="icon-nim fa-solid fa-star"></i>
                  دانلود شما بصورت
                  <span class="item">تمام بها</span>
                  محاسبه میشود
                </div>
              </div>
              <div class="dl-box">
                <ul class="type-list" data-type="sub" style="display: block">
                  <li class="item-type">
                    <div class="side">
                      <span class="q-info type sub">زیرنویس</span>
                      <span class="q-info">کیفیت : 1080p</span>
                      <span class="q-info">حجم : 1.54 گیگابایت</span>
                      <span class="q-info">انکودر : GalaxyRG</span>
                      <span class="q-info sub-type">SoftSub</span>
                    </div>
                    <div class="side">
                      <a
                        href="https://traffic.upera.tv/2985909-0-720.mp4?ref=wL1t"
                        target="_blank"
                        class="btn dllink"
                      >
                        <i class="fa-light fa-arrow-down-to-arc"></i>
                        <span>لینک دانلود</span>
                      </a>
                    </div>
                  </li>
                  <li class="item-type">
                    <div class="side">
                      <span class="q-info type sub">زیرنویس</span>
                      <span class="q-info">کیفیت : 720p</span>
                      <span class="q-info">حجم : 1.11 گیگابایت</span>
                      <span class="q-info">انکودر : RMTeam</span>
                      <span class="q-info sub-type">SoftSub</span>
                    </div>
                    <div class="side">
                      <a
                        href="https://traffic.upera.tv/2985909-0-720.mp4?ref=wL1t"
                        target="_blank"
                        class="btn dllink"
                      >
                        <i class="fa-light fa-arrow-down-to-arc"></i>
                        <span>لینک دانلود</span>
                      </a>
                    </div>
                  </li>
                  <li class="item-type">
                    <div class="side">
                      <span class="q-info type sub">زیرنویس</span>
                      <span class="q-info">کیفیت : 480p</span>
                      <span class="q-info">حجم : 642 مگابایت</span>
                      <span class="q-info">انکودر : Remux</span>
                      <span class="q-info sub-type">SoftSub</span>
                    </div>
                    <div class="side">
                      <a
                        href="https://traffic.upera.tv/2985909-0-720.mp4?ref=wL1t"
                        target="_blank"
                        class="btn dllink"
                      >
                        <i class="fa-light fa-arrow-down-to-arc"></i>
                        <span>لینک دانلود</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="main-side-item single-lists">
              <h3 class="title">
                <i class="fa-solid fa-table"></i>
                <span>لیست های مرتبط کاربران</span>
                <i class="seprator"></i>
              </h3>
              <ul class="user-list-listed">
                <li class="list-item">
                  <a href="#" target="_blank" class="thumbs">
                    <div class="picture">
                      <img
                        src="https://demo.novinwp.com/digimedia2/wp-content/uploads/2022/06/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX500-210x310.jpg"
                        alt="دانلود فیلم Spider-Man: No Way Home 2021"
                      />
                    </div>
                    <div class="picture">
                      <img
                        src="https://demo.novinwp.com/digimedia2/wp-content/uploads/2022/06/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500-210x288.jpg"
                        alt="دانلود فیلم Spider-Man 2 2004"
                      />
                    </div>
                    <div class="picture">
                      <img
                        src="https://demo.novinwp.com/digimedia2/wp-content/uploads/2022/06/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX500-210x310.jpg"
                        alt="دانلود فیلم Spider-Man 3 2007"
                      />
                    </div>
                    <div class="picture">
                      <img
                        src="https://demo.novinwp.com/digimedia2/wp-content/uploads/2024/07/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX500-210x310.jpg"
                        alt="دانلود فیلم Oppenheimer 2023"
                      />
                      <div class="cover">
                        <span class="count">
                          <div>8</div>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a href="#" class="title">
                    <h2 class="list-title">فیلم هایی که دیدم</h2>
                  </a>
                  <div class="bottom-content">
                    <span class="creator">
                      <i class="fa-solid fa-user"></i>
                      توسط: محمد زیدوند
                    </span>
                    <samp class="date">۱۴۰۳ / ۰۵ / ۰۸</samp>
                  </div>
                </li>
              </ul>
            </div>
            <div class="main-side-item movie-tags">
              <div class="headline">
                <div class="title">
                  <i class="fa-solid fa-tags"></i>
                  <span>برچسب ها</span>
                </div>
                <div class="open-icon">
                  <i class="fa-solid fa-angles-left"></i>
                </div>
              </div>
              <div class="info">
                <a href="#" rel="tag" title=""> {{ movieQuery.title }}({{ movieQuery.year }})</a>
                <a href="#" rel="tag" title="دانلود فیلم">دانلود فیلم</a>
                <a href="#" rel="tag" title="دانلود فیلم Joker"
                  >دانلود فیلم {{ movieQuery.title }}</a
                >
              </div>
            </div>
          </div>
          <div class="main-side-item related-movies">
            <div class="main">
              <div class="heading">
                <i class="icon fa-light fa-face-smile-relaxed"></i>
                <h4 class="title">پیشنهاد میکنیم تماشا کنید</h4>
              </div>
              <div
                class="pagination-related-movies swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <span
                  class="swiper-pagination-bullet swiper-pagination-bullet-active"
                  tabindex="0"
                  role="button"
                  aria-label="Go to slide 1"
                  aria-current="true"
                ></span>
              </div>
              <div
                class="swiper-container slider-box swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-backface-hidden"
              >
                <div
                  class="swiper-wrapper"
                  id="swiper-wrapper-a767295adeae5999"
                  aria-live="off"
                  style="transform: translate3d(0px, 0px, 0px)"
                >
                  <div
                    class="swiper-slide swiper-slide-active"
                    style="width: 208.429px"
                    role="group"
                    aria-label="1 / 5"
                  >
                    <a href="#" class="item" title="Oppenheimer" rel="bookmark">
                      <figure>
                        <img
                          width="210"
                          height="310"
                          src="https://demo.novinwp.com/digimedia2/wp-content/uploads/2024/07/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX500-210x310.jpg"
                          class="attachment-post_cover size-post_cover wp-post-image"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          sizes="(max-width: 210px) 100vw, 210px"
                        />
                      </figure>
                      <div class="title-box">
                        <h2>Oppenheimer</h2>
                      </div>
                      <div class="cover-content">
                        <div class="playicon">
                          <svg class="icon">
                            <use xlink:href="#playb_icon"></use>
                          </svg>
                        </div>
                        <div class="bottom-content">
                          <div class="popular-rate">
                            <i class="fa-light fa-thumbs-up"></i>
                            <span>100%</span>
                          </div>
                          <div class="imdb-rate">
                            <span>8.3</span>
                            <small>/10</small>
                          </div>
                        </div>
                        <ul class="badges">
                          <li class="badge-item">
                            <svg class="icon">
                              <use xlink:href="#microphone_icon"></use>
                            </svg>
                            <span class="title">دوبله</span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div
                    class="swiper-slide swiper-slide-next"
                    style="width: 208.429px"
                    role="group"
                    aria-label="2 / 5"
                  >
                    <a href="#" class="item" title="Iron Man 3" rel="bookmark">
                      <figure>
                        <img
                          width="210"
                          height="300"
                          src="https://demo.novinwp.com/digimedia2/wp-content/uploads/2022/06/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX500-210x300.jpg"
                          class="attachment-post_cover size-post_cover wp-post-image"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          sizes="(max-width: 210px) 100vw, 210px"
                        />
                      </figure>
                      <div class="title-box">
                        <h2>Iron Man 3</h2>
                      </div>
                      <div class="cover-content">
                        <div class="playicon">
                          <svg class="icon">
                            <use xlink:href="#playb_icon"></use>
                          </svg>
                        </div>
                        <div class="bottom-content">
                          <div class="popular-rate">
                            <i class="fa-light fa-thumbs-up"></i>
                            <span>88%</span>
                          </div>
                          <div class="imdb-rate">
                            <span>7.1</span>
                            <small>/10</small>
                          </div>
                        </div>
                        <ul class="badges">
                          <li class="badge-item">
                            <svg class="icon">
                              <use xlink:href="#microphone_icon"></use>
                            </svg>
                            <span class="title">دوبله</span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div
                    class="swiper-slide"
                    style="width: 208.429px"
                    role="group"
                    aria-label="3 / 5"
                  >
                    <a href="#" class="item" title="Parasite" rel="bookmark">
                      <figure>
                        <img
                          width="210"
                          height="310"
                          src="https://demo.novinwp.com/digimedia2/wp-content/uploads/2024/07/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX500-210x310.jpg"
                          class="attachment-post_cover size-post_cover wp-post-image"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          sizes="(max-width: 210px) 100vw, 210px"
                        />
                      </figure>
                      <div class="title-box">
                        <h2>Parasite</h2>
                      </div>
                      <div class="cover-content">
                        <div class="playicon">
                          <svg class="icon">
                            <use xlink:href="#playb_icon"></use>
                          </svg>
                        </div>
                        <div class="bottom-content">
                          <div class="popular-rate">
                            <i class="fa-light fa-thumbs-up"></i>
                            <span>100%</span>
                          </div>
                          <div class="imdb-rate">
                            <span>8.5</span>
                            <small>/10</small>
                          </div>
                        </div>
                        <ul class="badges">
                          <li class="badge-item">
                            <svg class="icon">
                              <use xlink:href="#microphone_icon"></use>
                            </svg>
                            <span class="title">دوبله</span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div
                    class="swiper-slide"
                    style="width: 208.429px"
                    role="group"
                    aria-label="4 / 5"
                  >
                    <a href="#" class="item" title="Avengers: Endgame" rel="bookmark">
                      <figure>
                        <img
                          width="210"
                          height="310"
                          src="https://demo.novinwp.com/digimedia2/wp-content/uploads/2022/06/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX500-210x310.jpg"
                          class="attachment-post_cover size-post_cover wp-post-image"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          sizes="(max-width: 210px) 100vw, 210px"
                        />
                      </figure>
                      <div class="title-box">
                        <h2>Avengers: Endgame</h2>
                      </div>
                      <div class="cover-content">
                        <div class="playicon">
                          <svg class="icon">
                            <use xlink:href="#playb_icon"></use>
                          </svg>
                        </div>
                        <div class="bottom-content">
                          <div class="popular-rate">
                            <i class="fa-light fa-thumbs-up"></i>
                            <span>100%</span>
                          </div>
                          <div class="imdb-rate">
                            <span>8.4</span>
                            <small>/10</small>
                          </div>
                        </div>
                        <ul class="badges">
                          <li class="badge-item">
                            <svg class="icon">
                              <use xlink:href="#subtitle_icon"></use>
                            </svg>
                            <span class="title">زیرنویس</span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                  <div
                    class="swiper-slide"
                    style="width: 208.429px"
                    role="group"
                    aria-label="5 / 5"
                  >
                    <a href="#" class="item" title="The Lord of the Rings" rel="bookmark">
                      <figure>
                        <img
                          width="210"
                          height="310"
                          src="https://demo.novinwp.com/digimedia2/wp-content/uploads/2024/07/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX500-210x310.jpg"
                          class="attachment-post_cover size-post_cover wp-post-image"
                          alt=""
                          decoding="async"
                          loading="lazy"
                          sizes="(max-width: 210px) 100vw, 210px"
                        />
                      </figure>
                      <div class="title-box">
                        <h2>The Lord of the Rings</h2>
                      </div>
                      <div class="cover-content">
                        <div class="playicon">
                          <svg class="icon">
                            <use xlink:href="#playb_icon"></use>
                          </svg>
                        </div>
                        <div class="bottom-content">
                          <div class="popular-rate">
                            <i class="fa-light fa-thumbs-up"></i>
                            <span>100%</span>
                          </div>
                          <div class="imdb-rate">
                            <span>9</span>
                            <small>/10</small>
                          </div>
                        </div>
                        <ul class="badges">
                          <li class="badge-item">
                            <svg class="icon">
                              <use xlink:href="#microphone_icon"></use>
                            </svg>
                            <span class="title">دوبله</span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
              </div>
            </div>
          </div>
          <div class="main">
            <div class="box comments-box">
              <div class="comment-form">
                <i class="fa-regular fa-comment" style="margin-left: 5px; color: #29b6f6"></i>
                <h4 class="title">دیدگاه های کاربران</h4>
                <div class="count-comment">
                  <i class="fa-solid fa-comments bg-icon"></i>
                  <div class="title">
                    <span class="count">1</span>
                    <samp class="title">نظر</samp>
                  </div>
                </div>
                <form action="" class="form post_comment_form" data-active="true" method="post">
                  <input
                    type="hidden"
                    name="parent_comment_id"
                    value=""
                    class="parent_comment_id"
                  />
                  <input type="hidden" name="post_id" value="1113" />
                  <input
                    type="hidden"
                    id="security_comment"
                    name="security_comment"
                    value="5779426964"
                  />
                  <input
                    type="hidden"
                    name="_wp_http_referer"
                    value="/digimedia2/movies/tt7286456/"
                  />
                  <div class="user-pic">
                    <img
                      alt=""
                      src="https://secure.gravatar.com/avatar/?s=50&amp;d=mm&amp;r=g"
                      class="avatar avatar-50 photo avatar-default"
                      height="50"
                      width="50"
                      decoding="async"
                    />
                  </div>
                  <div class="inputs">
                    <div class="top">
                      <textarea
                        name="content_comment"
                        class="content_comment"
                        placeholder="دیدگاه خود را بنویسید ...."
                      ></textarea>
                      <span class="cancel-reply none">انصراف</span>
                    </div>
                    <div class="bottom">
                      <div class="inner-bottom">
                        <div class="input-item">
                          <input type="text" placeholder="ایمیل ..." name="author_email" />
                        </div>
                        <div class="input-item">
                          <input
                            type="text"
                            placeholder="نام و نام خانوادگی ..."
                            name="author_comment"
                          />
                        </div>
                        <div class="input-item spoil">
                          <label class="spoil-comment">
                            <span>دیدگاه حاوی اسپویل</span>
                            <input type="checkbox" name="spoil_comment" />
                            <div class="custom-check"></div>
                          </label>
                        </div>
                        <div class="input-item send">
                          <button type="submit">ارسال دیدگاه</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <ul class="comment-list">
                <li
                  class="comment byuser comment-author-alirezaie even thread-even depth-1 comment-item"
                  data-commentid="52"
                >
                  <div class="user-pic">
                    <img
                      alt=""
                      src="https://secure.gravatar.com/avatar/912fb2e2c3eb40892c8f1110885ccb78?s=50&amp;d=mm&amp;r=g"
                      class="avatar avatar-50 photo"
                      height="50"
                      width="50"
                      decoding="async"
                    />
                  </div>
                  <div class="content">
                    <div class="right-side">
                      <span class="name">علی</span>
                      <div class="comment-content">
                        <p>این فیلم عالی بود</p>
                      </div>
                      <div class="reply_elem"></div>
                    </div>
                    <div class="left-side">
                      <div class="likecm-box">
                        <div class="btn dislike" data-type="dislike">
                          <i class="fa-solid fa-thumbs-up"></i>
                          <span class="count">0</span>
                        </div>
                        <div class="btn like" data-type="like">
                          <span class="count">0</span>
                          <i class="fa-solid fa-thumbs-up"></i>
                        </div>
                      </div>
                      <span class="date">2 روز قبل</span>
                      <div class="reply-box">
                        <span class="reply-cm">پاسخ</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'FilmPage',
  data() {
    return {
      movieQuery: null
    }
  },
  beforeMount() {
    const movie = JSON.parse(this.$route.query.movie)
    this.movieQuery = movie // Now you can use the movie object//for parsing queries
  }
}
</script>