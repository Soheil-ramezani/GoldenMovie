<script setup>
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import UserDashboard from './userDashboard/UserDashboard.vue'
import CustomMovieList from './UserCustomMovieList/CustomMovieList.vue'
import ParticipationPlans from './participation/ParticipationPlans.vue'
import UserComments from './UserComments/UserComments.vue'
import UserTicketsList from './UserTicketsList/UserTicketsList.vue'
import UserNewTicket from './UserNewTicket/UserNewTicket.vue'
import NewMovieReq from './UserNewMovieReq/UserNewMovieReq.vue'
import UserMovieReqList from'./UserMovieReqList/UserMovieReqList.vue'
import PersonalMovieList from'./UserPersonalMovieList/PersonalMovieList.vue'
import UserEditProfile from'./UserEditProfile/UserEditProfile.vue'
</script>
<template>
  <div>
    <Header/>
     <main class="main">
    <div class="main-userpanel">
      <aside class="panel-sidebar">
        <div class="sidebar-bg"></div>
        <div class="inner-side">
          <div class="user-pic">
            <figure class="profile">
              <img
                alt=""
                src="https://secure.gravatar.com/avatar/d7a1e14b32549086d191e5a050315af9?s=50&amp;d=mm&amp;r=g"
                srcset="
                  https://secure.gravatar.com/avatar/d7a1e14b32549086d191e5a050315af9?s=100&amp;d=mm&amp;r=g 2x
                "
                class="avatar avatar-50 photo"
                height="50"
                width="50"
                decoding="async"
              />
            </figure>
          </div>
          <div class="name">کاربر</div>
          <ul class="panelside-menu">
            <li class="item active">
              <div class="headline-title">
                <a href="#" class="title">
                  <i class="fa-solid fa-grip"></i>
                  <span>داشبورد</span>
                </a>
              </div>
            </li>
            <li class="item has_child none">
              <div class="headline-title">
                <div class="title">
                  <i class="fa-solid fa-heart"></i>
                  <span>لیست تماشا</span>
                </div>
                <span class="open-icon">
                  <i class="fa-solid fa-angle-left"></i>
                </span>
              </div>
              <ul class="sub-menu" style="display: none">
                <li class="item">
                  <a href="./user-panel-save-movie.html">لیست تماشا خصوصی</a>
                </li>
                <li class="item">
                  <a href="./user-panel-list-movie.html">لیست تماشا سفارشی</a>
                </li>
              </ul>
            </li>
            <li class="item">
              <div class="headline-title">
                <a href="./user-panel-subs.html" class="title">
                  <i class="fa-solid fa-wand-sparkles"></i>
                  <span>خرید اشتراک</span>
                </a>
              </div>
            </li>
            <li class="item">
              <div class="headline-title">
                <a href="./user-panel-comments.html" class="title">
                  <i class="fa-solid fa-comments"></i>
                  <span>دیدگاه ها</span>
                </a>
              </div>
            </li>
            <li class="item has_child none">
              <div class="headline-title">
                <div class="title">
                  <i class="fa-solid fa-ticket"></i>
                  <span>تیکت ها</span>
                </div>
                <span class="open-icon">
                  <i class="fa-solid fa-angle-left"></i>
                </span>
              </div>
              <ul class="sub-menu" style="display: none">
                <li class="item">
                  <a href="./user-panel-create-ticket.html">تیکت جدید</a>
                </li>
                <li class="item">
                  <a href="./user-panel-ticket-list.html">لیست تیکت ها</a>
                </li>
              </ul>
            </li>
            <li class="item has_child none">
              <div class="headline-title">
                <div class="title">
                  <i class="fa-solid fa-circle-plus"></i>
                  <span>درخواست فیلم و سریال</span>
                </div>
                <span class="open-icon">
                  <i class="fa-solid fa-angle-left"></i>
                </span>
              </div>
              <ul class="sub-menu" style="display: none">
                <li class="item">
                  <a href="./user-panel-new-req-film.html">درخواست جدید</a>
                </li>
                <li class="item">
                  <a href="./user-panel-req-film-list.html">لیست درخواست ها</a>
                </li>
              </ul>
            </li>
            <li class="item">
              <div class="headline-title">
                <a href="./user-panel-edit-profile.html" class="title">
                  <i class="fa-solid fa-user-pen"></i>
                  <span>ویرایش پروفایل</span>
                </a>
              </div>
            </li>
            <li class="item">
              <div class="headline-title">
                <a
                  href="https://demo.novinwp.com/digimedia/wp-login.php?action=logout&amp;redirect_to=https%3A%2F%2Fdemo.novinwp.com%2Fdigimedia&amp;_wpnonce=384984e850"
                  class="title"
                >
                  <i class="fa-solid fa-power-off"></i>
                  <span>خروج</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <!-- <UserDashboard/> -->
      <!-- <CustomMovieList/> -->
      <!-- <ParticipationPlans/> -->
      <!-- <UserComments/> -->
      <!-- <UserTicketsList/> -->
      
      <!-- <UserNewTicket /> -->
        <!-- <NewMovieReq/> -->
         <!-- <UserMovieReqList/> -->
          <!-- <PersonalMovieList/> -->
           <!-- <UserEditProfile/> -->
          
    </div>
  </main>
  <Footer/>
  </div>
 
</template>

<script>
export default {
  name: 'UserPanel'
}
</script>

<style>
</style>