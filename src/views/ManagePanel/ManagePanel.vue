<script setup>
// import DashboardPage from './dashboardPage.vue'
// import MovieList from './MovieList.vue'
// import AddMovie from "./AddMovie.vue"
// import InFoReForm from "./InfoReForm.vue"
import UsersList from "./UsersList.vue"

</script>
<template>
  <main class="d-flex flex-lg-row-reverse flex-xl-row-reverse">
    <!-- sidebar -->
    <div
      ref="sideBar"
      class="sideBar d-flex h-100 dark-bg flex-column align-items-center justify-content-center box-bg"
    >
      <!-- closeBtn -->
      <div class="closeDiv align-self-start">
        <button class="closeBtn box-bg" @click="showSidebar()">
          <img src="../../assets/img/free_icon_1.svg" alt="" />
        </button>
      </div>
      <!-- admindetails -->
      <div class="AdminDetails m-5 mt-0 d-flex align-items-center justify-content-center p-2">
        <div class="adminImg blue-bg">
          <lord-icon
            src="https://cdn.lordicon.com/kdduutaw.json"
            trigger="hover"
            stroke="bold"
            state="hover-looking-around"
            colors="primary:#ffffff,secondary:#ffffff"
            style="width: 50px; height: 50px"
          >
          </lord-icon>
        </div>
        <div class="adminName m-2">
          <h5 class="blue-text">AdminName</h5>
        </div>
      </div>
      <!-- Links -->
      <div
        class="AdminPages w-100 h-100 d-flex flex-column align-items-center justify-content-center"
        ref="AdminPages"
      >
        <!-- داشبورد -->
        <div
          class="SideBarLink w-100 mt-2 mb-2 d-flex flex-column align-items-end justify-content-center"
        >
          <button
            class="SideBarBtn box-bg p-3 text-center justify-content-center align-items-center"
          >
            <span class="white-text SideBarSpan">داشبورد</span>
            <lord-icon
              src="https://cdn.lordicon.com/fcyboqbm.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#29b6f6,secondary:#29b6f6"
              style="width: 30px; height: 30px; padding-top: 11px"
            >
            </lord-icon>
          </button>
        </div>
        <!-- مدیریت محتوا-->
        <div
          class="SideBarLink w-100 mt-3 mb-2 d-flex flex-column align-items-end justify-content-center"
        >
          <button class="SideBarBtn box-bg text-center p-2" @click="showAddMovieBtn()">
            <span class="white-text SideBarSpan">مدیریت محتوا</span>
            <lord-icon
              src="https://cdn.lordicon.com/ogjpwrxe.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#29b6f6,secondary:#29b6f6"
              style="width: 30px; height: 30px; padding-top: 11px"
            >
            </lord-icon>
          </button>
        </div>
        <!-- فیلم و سریال -->
        <div class="dropdownLinks d-none flex-column" ref="MediaBtn">
          <!-- افزودن  فیلم و سریال -->
          <div
            class="SideBarLink w-100 mt-3 mb-2 d-flex flex-column align-items-center justify-content-center"
          >
            <button class="SideBarBtn box-bg p-2">
              <span class="white-text SideBarSpan">افزودن فیلم و سریال</span>
            </button>
          </div>
          <!--  لیست فیلم ها و سریال ها -->
          <div
            class="SideBarLink w-100 mt-3 mb-2 d-flex flex-column align-items-center justify-content-center"
          >
            <button class="SideBarBtn box-bg p-2">
              <span class="white-text SideBarSpan"> لیست فیلم ها و سریال ها</span>
            </button>
          </div>
        </div>

        <!-- تیکت ها-->
        <div
          class="SideBarLink w-100 mt-3 mb-2 d-flex flex-column align-items-end justify-content-center"
        >
          <button class="SideBarBtn box-bg p-2">
            <span class="white-text SideBarSpan">تیکت ها</span>
            <lord-icon
              src="https://cdn.lordicon.com/jdgfsfzr.json"
              trigger="hover"
              stroke="bold"
              state="hover-conversation-alt"
              colors="primary:#29b6f6,secondary:#29b6f6"
              style="width: 30px; height: 30px; padding-top: 11px"
            >
            </lord-icon>
          </button>
        </div>
        <!-- کاربران -->
        <div
          class="SideBarLink w-100 mt-3 mb-2 d-flex flex-column align-items-end justify-content-center"
        >
          <button class="SideBarBtn box-bg p-2">
            <span class="white-text SideBarSpan"> کاربران</span>
            <lord-icon
              src="https://cdn.lordicon.com/knzzcfyy.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#29b6f6,secondary:#29b6f6"
              style="width: 30px; height: 30px; padding-top: 11px"
            >
            </lord-icon>
          </button>
        </div>
        <!-- لیست ادمینها -->
        <div
          class="SideBarLink w-100 mt-3 mb-2 d-flex flex-column align-items-end justify-content-center"
        >
          <button class="SideBarBtn box-bg p-2">
            <span class="white-text SideBarSpan"> لیست ادمین ها</span>
            <lord-icon
              src="https://cdn.lordicon.com/shcfcebj.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#29b6f6,secondary:#29b6f6"
              style="width: 30px; height: 30px; padding-top: 11px"
            >
            </lord-icon>
          </button>
        </div>
        <!-- ویرایش اطلاعات -->
        <div
          class="SideBarLink w-100 mt-3 mb-4 d-flex flex-column align-items-end justify-content-center"
        >
          <button class="SideBarBtn box-bg p-2">
            <span class="white-text SideBarSpan">ویرایش اطلاعات</span>
            <lord-icon
              src="https://cdn.lordicon.com/exymduqj.json"
              trigger="hover"
              stroke="bold"
              state="hover-line"
              colors="primary:#29b6f6,secondary:#29b6f6"
              style="width: 30px; height: 30px; padding-top: 11px"
            >
            </lord-icon>
          </button>
        </div>
      </div>
      <!--  -->
    </div>
    <!-- sidebarBtn --> 
    <div class="sidebarShowBtn d-none justify-content-end align-items-start pt-4 " ref="hamburgerbtn" style="min-width: 45px;">
        <button class="sidebarbtn p-2" @click="showSidebar()">
          <img src="../../assets/img/png_hrrys.png" alt="" />
        </button>
      </div>
      <!--  -->
    <!-- <DashboardPage  /> -->
     <!-- <MovieList/> -->
      <!-- <AddMovie/> -->
       <!-- <InFoReForm/> -->
        <UsersList/>

  </main>
</template>

<script>

export default {
  name:'ManagePanel',
  data() {
    return {
      showSidebarBtn:false
    }
  },
  // functions
  methods: {
    showSidebar() {
      this.$refs.sideBar.classList.toggle('showSidebar')
      this.$refs.sideBar.classList.toggle('d-none')
      this.$refs.hamburgerbtn.classList.toggle('d-flex')
      this.$refs.hamburgerbtn.classList.toggle('d-none')

      if(this.showSidebarBtn===false){
        this.showSidebarBtn= true
      }else if(this.showSidebarBtn===true){
        this.showSidebarBtn= false
      }

    },
    showAddMovieBtn() {
       this.$refs.MediaBtn.classList.toggle('d-none')
       this.$refs.MediaBtn.classList.toggle('d-flex')
       this.$refs.AdminPages.classList.toggle('adminPagesTopP')
    }
  }
}
</script>

