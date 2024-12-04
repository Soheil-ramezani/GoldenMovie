<template>
  <main class="main-site">
    <div class="main-single">
      <!-- moviePoster&infos -->
      <!-- <section class="movies-h-single w-100 d-block position-relative">
        <div
          class="main-head-cover w-100 h-100 position-absolute d-block overflow-hidden top-0 end-0"
        >
          <div class="head-cover" :style="{ backgroundImage: 'url(' + item.poster + ')' }"></div>
        </div>
        <div class="main main-h-content">
          <div class="toping-head">
            <nav class="breadcrumbs">
              <i class="bread-icon fa-solid fa-location-dot"></i>
              <a href="#">خانه</a>
              <a href="#" rel="category tag">فیلم ها</a>
              <a href="#" rel="tag">Joker</a>
            </nav>
          </div>
          <div class="movies-h-info">
            <div class="right-h-content">
              <div class="imdb-rate">
                <a
                  href="#"
                  class="imdb-btn"
                  target="_blank"
                  rel="noopener nofollow"
                  >IMDb</a
                >
                <span class="rate">{{ item.imdbScore }}</span>
              </div>
              <figure class="thumb">
                <div class="post-image">
                  <img
                    width="210"
                    height="310"
                    :src="item.img"
                    class="attachment-post_cover size-post_cover wp-post-image"
                    alt=""
                    decoding="async"
                    fetchpriority="high"
                    sizes="(max-width: 210px) 100vw, 210px"
                  />
                  <a
                    :href="item.url"
                    target="_blank"
                    class="trailer-link"
                  >
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
                    <i class="fa-solid fa-bookmark light"></i>
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
                  <h1>{{ item.title }}</h1>
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
                    <li class="genre" v-for="genre in item.genre" :key="genre">
                      <a
                        href="#"
                        rel="category tag"
                        >{{ genre }}</a
                      >
                    </li>
                  </ul>
                  <div class="post-excerpt">
                    <i class="fa-light fa-file-lines"></i>
                    <p>
                      {{ item.summery }}
                    </p>
                  </div>
                  <div class="imdb-scores">
                    <div class="item metacritic">
                      <svg class="icon">
                        <use xlink:href="#metacritic"></use>
                      </svg>
                      <span class="title">امتیاز منتقدین</span>
                      <samp class="text">{{ item.imdbScore * 10 }}</samp>
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
                    <a :href="item.url" target="_blank" class="btn play">
                      <i class="fa-solid fa-play"></i>
                      <span>پخش آنلاین</span>
                    </a>
                    <div class="btn notification post-notification" data-post="1113">
                      <i class="fa-solid fa-bell plus"></i>
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
                      <div class="item-info">ندارد</div>
                    </li>
                    <li class="item">
                      <span class="title"><i class="fa-solid fa-microphone"></i> دوبله :</span>
                      <div class="item-info" v-if="item.Isdubbed">دارد</div>
                      <div class="item-info" v-else>ندارد</div>
                    </li>
                    <li class="item">
                      <span class="title"><i class="fa-solid fa-clock"></i> زمان :</span>
                      <div class="item-info">{{ item.time }} دقیقه</div>
                    </li>
                    <li class="item country">
                      <span class="title"><i class="fa-solid fa-globe"></i> محصول :</span>
                      <div class="item-info">
                        <a
                          href="#"
                          rel="tag"
                          >{{ item.country }}</a
                        >
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
                        <a href="#" rel="tag">{{
                          item.year
                        }}</a>
                      </div>
                    </li>
                    <li class="item">
                      <span class="title"><i class="fa-solid fa-calendar-day"></i> زبان :</span>
                      <div class="item-info">
                        <a href="#" rel="tag"
                          >English</a
                        >
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> -->
      <p>{{ item.title }}</p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'FilmMain',
  props: ['item']
}
</script>

<style>
</style>