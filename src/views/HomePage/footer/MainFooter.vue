<template>
  <footer dir="rtl" class="p-5 d-flex flex-column justify-content-start align-items-center">
    <!-- row1 -->
    <div
      class="footer-row1 d-flex justify-content-start justify-content-sm-around align-items-center flex-row"
    >
      <div
        class="footerlogo justify-content-center align-items-center align-self-start flex-column p-4 pt-3"
      >
        <a href="#">
          <img src="../../../assets/img/FooterLogo.jpg" alt="footerlogo" class="footerlogo mb-2" />
        </a>
        <p class="mb-3 white-text">
          ما انواع مختلفی از معابر موجود داریم که اکثریت آنها دچار تغییر شده اند به نوعی با تزریق
          کلمات طنز باورپذیر.
        </p>
      </div>
      <!-- columns -->
      <div class="footerbox d-flex justify-content-start align-self-start pt-3 p-4 flex-column">
        <h5 class="footerbox-title white-text">
          موپلی
          <div class="footerBox-title-lines d-flex align-items-center justify-content-start">
            <hr style="width: 20px; height: 5px" />
            <hr style="width: 5px; height: 5px; margin-right: 0.5rem" />
          </div>
        </h5>

        <ul class="footer-list">
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text white-space-nowrap"> درباره ما </a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text white-space-nowrap"> شاهدات </a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text white-space-nowrap">ارتباط با ما</a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text white-space-nowrap">شرایط خدمات</a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="# " class="white-text white-space-nowrap">خط مشی رازداری</a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text white-space-nowrap">اخبار به‌روزرسانی</a>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="footerbox d-flex justify-content-start align-self-start pt-3 p-4 flex-column">
        <h5 class="footerbox-title white-text">
          ژانر
          <div class="footerBox-title-lines d-flex align-items-center justify-content-start">
            <hr style="width: 20px; height: 5px" />
            <hr style="width: 5px; height: 5px; margin-right: 0.5rem" />
          </div>
        </h5>

        <ul class="footer-list">
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text"> اکشن </a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text"> بیوگرافی </a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text">مستند</a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text">ماجراجویی</a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="# " class="white-text">وحشت</a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text">درام</a>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="footerbox d-flex justify-content-start align-self-start pt-3 p-4 flex-column">
        <h5 class="footerbox-title white-text">
          پشتیبانی
          <div class="footerBox-title-lines d-flex align-items-center justify-content-start">
            <hr style="width: 20px; height: 5px" />
            <hr style="width: 5px; height: 5px; margin-right: 0.5rem" />
          </div>
        </h5>

        <ul class="footer-list">
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text white-space-nowrap"> مرکز راهنمایی </a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text white-space-nowrap"> سؤالات متداول </a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text white-space-nowrap">حساب من</a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text white-space-nowrap">درخواست فیلم</a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="# " class="white-text white-space-nowrap">پشتیبانی</a>
          </li>
          <li class="footerbox-item mb-2">
            <a href="#" class="white-text white-space-nowrap">مرکز رسانه</a>
          </li>
        </ul>
      </div>
      <!-- user email form -->
      <div class="footer-widget d-flex justify-content-start align-self-start pt-3 p-4 flex-column">
        <h5 class="footerbox-title white-text">
          خبرنامه
          <div class="footerBox-title-lines d-flex align-items-center justify-content-start">
            <hr style="width: 20px; height: 5px" />
            <hr style="width: 5px; height: 5px; margin-right: 0.5rem" />
          </div>
        </h5>
        <p class="white-text">برای دریافت آخرین به روز رسانی و اخبار، در خبرنامه ما مشترک شوید</p>
        <div class="form w-100">
          <input type="email" name="userEmail" autocomplete="off" dir="ltr" required />
          <label for="text" class="label-name">
            <span class="content-name white-text w-100"> نشانی ایمیل </span>
          </label>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button type="submit" class="footer-widget-btn mt-4 p-2 w-75 white-text redbtn">
            عضویت
          </button>
        </div>
      </div>
    </div>
    <!-- row2 -->
    <div class="footer-top-link d-flex justify-content-start align-items-center flex-wrap mt-4">
      <a href="#">IMDB برتر</a>
      <a href="#">شبکه خانگی</a>
      <a href="#">نمایش‌های تلویزیونی</a>
      <a href="#">فانتزی</a>
      <a href="#">انیمیشن</a>
      <a href="#">موزیکال</a>
      <a href="#">وحشتناک</a>
      <a href="#">جنایی</a>
      <a href="#">ورزشی</a>
      <a href="#">درام</a>
      <a href="#">بیوگرافی</a>
      <a href="#">شو کمدی</a>
      <a href="#">کمدی </a>
      <a href="#">حادثه ای</a>
      <a href="#">جنگی</a>
      <a href="#">تاریخی</a>
      <a href="#">علمی تخیلی</a>
      <a href="#">وسترن</a>
    </div>
    <!-- socialmediaLinks -->
    <div
      class="socialmediaLinks d-flex justify-content-md-end align-items-end justify-content-sm-center w-100 mt-3"
    >
      <a href="#" class="d-flex align-content-center p-1">
        <lord-icon
          src="https://cdn.lordicon.com/iqagrlso.json"
          trigger="hover"
          stroke="light"
          state="hover-roll"
          colors="primary:#29b6f6,secondary:#29b6f6"
          style="width: 30px; height: 30px"
        >
        </lord-icon>
      </a>
      <a href="#" class="d-flex align-content-center p-1">
        <lord-icon
          src="https://cdn.lordicon.com/lhscugaw.json"
          trigger="hover"
          stroke="light"
          state="hover-draw"
          colors="primary:#29b6f6,secondary:#29b6f6"
          style="width: 30px; height: 30px"
        >
        </lord-icon>
      </a>
      <a href="#" class="d-flex align-content-center p-1">
        <lord-icon
          src="https://cdn.lordicon.com/gewhxiwb.json"
          trigger="hover"
          stroke="light"
          colors="primary:#29b6f6,secondary:#29b6f6"
          style="width: 30px; height: 30px"
        >
        </lord-icon>
      </a>
      <a href="#" class="d-flex align-content-center p-1">
        <lord-icon
          src="https://cdn.lordicon.com/ewswvzmw.json"
          trigger="hover"
          stroke="light"
          state="hover-rotate"
          colors="primary:#29b6f6,secondary:#29b6f6"
          style="width: 30px; height: 30px"
        >
        </lord-icon>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
    name:"MainFooter",
}
</script>

<style>

</style>