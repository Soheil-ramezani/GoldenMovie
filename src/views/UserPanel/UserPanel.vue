<script setup>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import UserDashboard from '@/components/UserPanelParts/userDashboard/UserDashboard.vue'
import CustomMovieList from '@/components/UserPanelParts/UserCustomMovieList/CustomMovieList.vue'
import ParticipationPlans from '@/components/UserPanelParts/participation/ParticipationPlans.vue'
import UserComments from '@/components/UserPanelParts/UserComments/UserComments.vue'
import UserTicketsList from '@/components/UserPanelParts/UserTicketsList/UserTicketsList.vue'
import UserNewTicket from '@/components/UserPanelParts/UserNewTicket/UserNewTicket.vue'
import NewMovieReq from '@/components/UserPanelParts/UserNewMovieReq/UserNewMovieReq.vue'
import UserMovieReqList from '@/components/UserPanelParts/UserMovieReqList/UserMovieReqList.vue'
import PrivateMovieList from '@/components/UserPanelParts/UserPrivateMovieList/PrivateMovieList.vue'
import UserEditProfile from '@/components/UserPanelParts/UserEditProfile/UserEditProfile.vue'
</script>
<template>
  <div>
    <Header />
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
              <li
                class="item"
                :class="{ active: this.currentComponent == 'dashboard' }"
                @click="changeContent('dashboard')"
              >
                <div class="headline-title">
                  <a href="#" class="title">
                    <i class="fa-solid fa-grip"></i>
                    <span>داشبورد</span>
                  </a>
                </div>
              </li>
              <li class="item has_child none">
                <div class="headline-title">
                  <div
                    class="title"
                  >
                    <i class="fa-solid fa-heart"></i>
                    <span>لیست تماشا</span>
                  </div>
                  <span class="open-icon">
                    <i class="fa-solid fa-angle-left"></i>
                  </span>
                </div>
                <ul class="sub-menu" style="display: none">
                  <li class="item"  :class="{actived:this.currentComponent == 'PrivateMovieList'}"
                         @click="changeContent('PrivateMovieList')">
                    <a href="#">لیست تماشا خصوصی</a>
                  </li>
                  <li class="item" :class="{actived:this.currentComponent == 'customMovieList'}" @click="changeContent('customMovieList')">
                    <a href="#">لیست تماشا سفارشی</a>
                  </li>
                </ul>
              </li>
              <li
                class="item"
                :class="{ active: this.currentComponent == 'participationPlans' }"
                @click="changeContent('participationPlans')"
              >
                <div class="headline-title">
                  <a href="#" class="title">
                    <i class="fa-solid fa-wand-sparkles"></i>
                    <span>خرید اشتراک</span>
                  </a>
                </div>
              </li>
              <li
                class="item"
                :class="{ active: this.currentComponent == 'userComments' }"
                @click="changeContent('userComments')"
              >
                <div class="headline-title">
                  <a href="#" class="title">
                    <i class="fa-solid fa-comments"></i>
                    <span>دیدگاه ها</span>
                  </a>
                </div>
              </li>
              <li class="item has_child none">
                <div class="headline-title">
                  <div
                    class="title"
                  >
                    <i class="fa-solid fa-ticket"></i>
                    <span>تیکت ها</span>
                  </div>
                  <span class="open-icon">
                    <i class="fa-solid fa-angle-left"></i>
                  </span>
                </div>
                <ul class="sub-menu" style="display: none">
                  <li
                    class="item"
                    :class="{ actived: this.currentComponent == 'userNewTicket' }"
                    @click="changeContent('userNewTicket')"
                  >
                    <a href="#">تیکت جدید</a>
                  </li>
                  <li class="item" :class="{actived:this.currentComponent == 'userTicketsList'}" @click="changeContent('userTicketsList')">
                    <a href="#">لیست تیکت ها</a>
                  </li>
                </ul>
              </li>
              <li class="item has_child none">
                <div class="headline-title">
                  <div
                    class="title active"
                  >
                    <i class="fa-solid fa-circle-plus"></i>
                    <span>درخواست فیلم و سریال</span>
                  </div>
                  <span class="open-icon">
                    <i class="fa-solid fa-angle-left"></i>
                  </span>
                </div>
                <ul class="sub-menu" style="display: none">
                  <li class="item">
                    <a href="#" :class="{actived:this.currentComponent == 'newMovieReq'}" @click="changeContent('newMovieReq')">درخواست جدید</a>
                  </li>
                  <li class="item">
                    <a href="#" :class="{actived:this.currentComponent == 'userMovieReqList'}" @click="changeContent('userMovieReqList')">لیست درخواست ها</a>
                  </li>
                </ul>
              </li>
              <li
                class="item"
                :class="{ active: this.currentComponent == 'userEditProfile' }"
                @click="changeContent('userEditProfile')"
              >
                <div class="headline-title">
                  <a href="#" class="title">
                    <i class="fa-solid fa-user-pen"></i>
                    <span>ویرایش پروفایل</span>
                  </a>
                </div>
              </li>
              <li class="item">
                <div class="headline-title">
                  <RouterLink :to="{ name: 'HomePage' }" class="title">
                    <i class="fa-solid fa-power-off"></i>
                    <span>خروج</span>
                  </RouterLink>
                </div>
              </li>
            </ul>
          </div>
        </aside>
        <!-- Conditional rendering of components -->
        <UserDashboard v-if="this.currentComponent == 'dashboard'" />
        <CustomMovieList v-else-if="this.currentComponent == 'customMovieList'" />
        <ParticipationPlans v-else-if="this.currentComponent == 'participationPlans'" />
        <UserComments v-else-if="this.currentComponent == 'userComments'" />
        <UserTicketsList v-else-if="this.currentComponent == 'userTicketsList'" />
        <UserNewTicket v-else-if="this.currentComponent == 'userNewTicket'" />
        <NewMovieReq v-else-if="this.currentComponent == 'newMovieReq'" />
        <UserMovieReqList v-else-if="this.currentComponent == 'userMovieReqList'" />
        <PrivateMovieList v-else-if="this.currentComponent == 'PrivateMovieList'" />
        <UserEditProfile v-else-if="this.currentComponent == 'userEditProfile'" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'UserPanel',
  data() {
    return {
      currentComponent: 'dashboard' // Set the default component to render
    }
  },
  methods: {
    changeContent(PageName) {
      this.currentComponent = PageName
      console.log(typeof PageName)
    }
  }
}
</script>

<style scope>
.actived {
  background-color: #29b6f6;
  color: #fff !important;
  border-radius: 10px;
  padding:10px ;
}
.actived a {
  color: #fff !important;
}
</style>