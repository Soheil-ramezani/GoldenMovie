<template>
<header class="site-header w-100 d-block position-relative">
      <div class="header-bg position-absolute w-100 h-100">
        <div class="pic position-absolute w-100 h-100"></div>
      </div>
      <div class="main-header-user position-absolute w-100 h-100">
        <div class="head-user-side w-100 position-absolute text-end">
          <div class="main d-flex align-items-center">
            <div class="switch-mode">
              <i class="fa-solid fa-moon"></i>
              <i class="fa-solid fa-sun"></i>
            </div>
            <div  class="notifications d-inline-flex align-items-center justify-content-center position-relative">
              <a  href="#"  class="icon d-flex align-items-center justify-content-center position-relative">
                <i class="fa-sharp fa-solid fa-bell"></i>
                <span  class="count-unread position-absolute d-flex align-items-center justify-content-center"  >2</span
                >
              </a>
              <div class="list position-absolute text-start">
                <li class="read-notification item w-100 d-block" data-id="36">
                  <span class="title w-100 d-flex align-items-center">
                    <i class="fa-sharp fa-solid fa-bell"></i>  آپدیت جدید 2.0.1</span>
                  <p class="description w-100 d-block text-end">
                    قالب دیجی مدیا به نسخه 2.0.1 بروزرسانی شد از پنل کاربری
                    راستچین اقدام به بروزرسانی نمایید
                  </p>
                  <div class="info w-100 d-flex justify-content-between">
                    <span class="time">2 سال قبل</span>
                  </div>
                </li>
                <li class="read-notification item w-100 d-block" data-id="36">
                  <span class="title w-100 d-flex align-items-center">
                    <i class="fa-sharp fa-solid fa-bell"></i>
                    آپدیت جدید 2.0.1</span
                  >
                  <p class="description w-100 d-block text-end">
                    قالب دیجی مدیا به نسخه 2.0.1 بروزرسانی شد از پنل کاربری
                    راستچین اقدام به بروزرسانی نمایید
                  </p>
                  <div class="info w-100 d-flex justify-content-between">
                    <span class="time">2 سال قبل</span>
                  </div>
                </li>
                <a  href="#"  class="show-all w-100 d-block text-center"  >مشاهده همه</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-header-side position-absolute w-100">
        <div class="main h-100">
          <div class="header-info d-flex w-100 align-items-center h-100">
            <div class="site-logo position-relative d-inline-block h-100">
              <a  href="/"  title="دیجی مدیا"  class="w-100 d-flex align-items-center justify-content-center h-100">
                <img  src="../images/Untitled-1 y.png"  alt="دیجی مدیا"  class="dark d-block"  style="height: 50px"/>
              </a>
            </div>
            <nav  class="header-nav-info h-100 d-flex align-items-center justify-content-between position-relative">
              <ul  id="menu-%d9%81%d9%87%d8%b1%d8%b3%d8%aa-%d9%87%d8%af%d8%b1"  class="header-menu d-flex position-relative">
                <li class="d-inline-block">
                  <a  href="#"  class="item d-flex align-items-center text-nowrap">
                    <div class="icon d-inline-block">
                      <i class="fa-solid fa-house"></i>
                    </div>
                    <div class="title d-inline-block">
                      <span class="w-100 d-block">خانه</span>
                      <samp class="w-100 d-block">HOME</samp>
                    </div>
                  </a>
                </li>
                <li class="d-inline-block">
                  <a
                    href="#"
                    class="item d-flex align-items-center text-nowrap"
                  >
                    <div class="icon d-inline-block">
                      <i class="fa-solid fa-film"></i>
                    </div>
                    <div class="title d-inline-block">
                      <span class="w-100 d-block">فیلم ها</span>
                      <samp class="w-100 d-block">MOVIES</samp>
                    </div>
                  </a>
                  <div class="dropdown-menu-m position-absolute w-100">
                    <div class="inner-drop d-flex justify-content-between">
                      <ul class="dropdown-list w-100 d-inline-block">
                        <li   class="item d-inline-flex position-realative align-items-center" >
                          <a  href="#"  class="link"  >تمامی فیلم ها</a>
                        </li>
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >جدول باکس آفیس</a>
                        </li>
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >250 فیلم برتر IMDb</a>
                        </li>
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >کالکشن ها</a>
                        </li>
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >جوایز اسکار</a>
                        </li>
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >جوایز گلدن گلوب</a>
                        </li>
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >فیلم های دوبله فارسی</a>
                        </li>
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >فیلم های زیرنویس فارسی</a>
                        </li>
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >فیلم های دارای پخش آنلاین</a>
                        </li>
                      </ul>
                      <div  class="dropdown-pic d-inline-block position-relative">
                        <img  src="https://demo.novinwp.com/digimedia/wp-content/uploads/2022/06/dropmenu-pic.png"  alt="فیلم ها"  class="d-block w-100 position-absolute object-fit-contain bottom-0"/>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="d-inline-block">
                  <a  href="#"  class="item d-flex align-items-center text-nowrap">
                    <div class="icon d-inline-block">
                      <i class="fa-solid fa-tv"></i>
                    </div>
                    <div class="title d-inline-block">
                      <span class="w-100 d-block">سریال ها</span>
                      <samp class="w-100 d-block">SERIES</samp>
                    </div>
                  </a>
                  <div class="dropdown-menu-m position-absolute w-100">
                    <div class="inner-drop d-flex justify-content-between">
                      <ul class="dropdown-list w-100 d-inline-block">
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >تمامی سریال ها</a>
                        </li>
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >250 سریال برتر IMDb</a>
                        </li>
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >سریال های دوبله فارسی</a>
                        </li>
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >سریال های زیرنویس فارسی</a>
                        </li>
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >سریال های دارای پخش آنلاین</a>
                        </li>
                      </ul>
                      <div  class="dropdown-pic d-inline-block position-relative">
                        <img  src="https://demo.novinwp.com/digimedia/wp-content/uploads/2022/06/dropmenu-pic2.png"  alt="سریال ها"  class="d-block w-100 position-absolute object-fit-contain bottom-0"/>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="d-inline-block">
                  <a  href="#"  class="item d-flex align-items-center text-nowrap">
                    <div class="icon d-inline-block">
                      <i class="fa-solid fa-masks-theater"></i>
                    </div>
                    <div class="title d-inline-block">
                      <span class="w-100 d-block">هنرمندان</span>
                      <samp class="w-100 d-block">ARTISTS</samp>
                    </div>
                  </a>
                  <div class="dropdown-menu-m position-absolute w-100">
                    <div class="inner-drop d-flex justify-content-between">
                      <ul class="dropdown-list w-100 d-inline-block">
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >ستارگان</a>
                        </li>
                        <li  class="item d-inline-flex position-realative align-items-center">
                          <a  href="#"  class="link"  >کارگردان ها</a>
                        </li>
                      </ul>
                      <div  class="dropdown-pic d-inline-block position-relative">
                        <img  src="https://demo.novinwp.com/digimedia/wp-content/uploads/2022/06/dropmenu-pic3.png"  alt="هنرمندان"  class="d-block w-100 position-absolute object-fit-contain bottom-0"/>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="d-inline-block">
                  <a  href="#"  class="item d-flex align-items-center text-nowrap">
                    <div class="icon d-inline-block">
                      <i class="fa-solid fa-headset"></i>
                    </div>
                    <div class="title d-inline-block">
                      <span class="w-100 d-block">تماس با ما</span>
                      <samp class="w-100 d-block">CONTACT</samp>
                    </div>
                  </a>
                </li>
              </ul>
              <div class="search-box d-inline-block position-relative">
                <form  action=""  data-active="true"  class="w-100 d-flex align-items-center justify-content-between">
                  <input  type="text"  placeholder="جستجو..."  name="s"  autocomplete="off"  class="border-0"/>
                  <button  type="submit"  class="border-0 d-inline-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div class="user-panel position-absolute d-inline-block">
                <div class="login-register w-100 d-block">
                  <a href="#"  title="ورود/عضویت"  class="btn d-flex align-items-center text-nowrap">
                    <!-- <i class="fa-regular fa-user-pen"></i> -->
                    <svg  stroke="currentColor"  fill="currentColor"  stroke-width="0"  viewBox="0 0 640 512"  height="20px"  width="20px"  xmlns="http://www.w3.org/2000/svg">
                      <path  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"></path>
                    </svg>
                    <!-- <i class="fa-solid fa-user-pen"></i> -->
                    <span class="title d-inline-block">ورود/عضویت</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
name:"MainHeader",
}
</script>

<style scope>

</style>