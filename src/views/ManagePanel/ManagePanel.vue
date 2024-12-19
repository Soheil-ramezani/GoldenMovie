<script setup>
import DashboardPage from '@/views/ManagePanel/DashBoard/dashboardPage.vue'
import MovieList from '@/views/ManagePane/MovieList/MovieList.vue'
import AddMovie from '@/views/ManagePanel/addMovie/AddMovie.vue'
import InFoReForm from '@/views/ManagePane/InfoReForm/InfoReForm.vue'
import UsersList from '@/views/ManagePane/UserList/UsersList.vue'
import UsersTickets from '@/views/ManagePane/tickets/UsersTickets.vue'
</script>
<template>
  <div>
    <main class="d-flex flex-row">
      <!-- sidebar -->
      <aside
        ref="sideBar"
        class="sideBar d-flex h-100 dark-bg flex-column align-items-center justify-content-center box-bg"
      >
        <!-- closeBtn -->
        <div class="closeDiv align-self-end">
          <button class="closeBtn box-bg" @click="showSidebar()">
            <img src="../../assets/img/free_icon_1.svg" alt="" />
          </button>
        </div>
        <!-- admindetails -->
        <div class="AdminDetails m-5 mb-2 mt-0 d-flex flex-column align-items-center justify-content-center p-2">
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
            class="SideBarLink w-100 mt-2 mb-2 d-flex flex-column align-items-start justify-content-center"
          >
            <button
              class="SideBarBtn box-bg p-3 justify-content-center align-items-center mt-3"
              :class="{
                activeBtn: this.ShowingPage == 'DashboardPage',
              }"
              @click="ChangeMainPage(DashboardPage)"
            >
              <lord-icon
                v-if="this.ShowingPage == 'DashboardPage'"
                src="https://cdn.lordicon.com/fcyboqbm.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#121331,secondary:#DDDDDD"
                style="width: 30px; height: 30px"
              >
              </lord-icon>
              <lord-icon
                v-else
                src="https://cdn.lordicon.com/fcyboqbm.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#29b6f6,secondary:#29b6f6"
                style="width: 30px; height: 30px; padding-top: 11px"
              >
              </lord-icon>
              <span
                class="white-text dashboardBtn SideBarSpan"
                >داشبورد</span
              >
            </button>
          </div>
          <!-- مدیریت محتوا-->
          <div
            class="SideBarLink w-100 mt-3 mb-2 d-flex flex-column align-items-start justify-content-center"
          >
            <button class="SideBarBtn box-bg text-center p-2" @click="showAddMovieBtn()">
              <lord-icon
                src="https://cdn.lordicon.com/ogjpwrxe.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#29b6f6,secondary:#29b6f6"
                style="width: 30px; height: 30px; padding-top: 11px"
              >
              </lord-icon>
              <span class="white-text SideBarSpan">مدیریت محتوا</span>
            </button>
          </div>
          <!-- فیلم و سریال -->
          <div class="dropdownLinks d-none flex-column" ref="MediaBtn">
            <!-- افزودن  فیلم و سریال -->
            <div
              class="SideBarLink w-100 mt-3 mb-2 d-flex flex-column align-items-center justify-content-center"
            >
              <button class="SideBarBtn box-bg p-2"  :class="{
                activeBtn: this.ShowingPage == 'AddMovie',
              }" @click="ChangeMainPage(AddMovie)">
                <span class="white-text SideBarSpan">افزودن فیلم و سریال</span>
              </button>
            </div>
            <!--  لیست فیلم ها و سریال ها -->
            <div
              class="SideBarLink w-100 mt-3 mb-2 d-flex flex-column align-items-center justify-content-center"
            >
              <button class="SideBarBtn box-bg p-2" :class="{
                activeBtn: this.ShowingPage == 'MovieList',
              }"  @click="ChangeMainPage(MovieList)">
                <span class="white-text SideBarSpan"> لیست فیلم ها و سریال ها</span>
              </button>
            </div>
          </div>

          <!-- تیکت ها-->
          <div
            class="SideBarLink w-100 mt-3 mb-2 d-flex flex-column align-items-start justify-content-center"
          >
            <button class="SideBarBtn box-bg p-2" :class="{
                activeBtn: this.ShowingPage == 'UsersTickets',
              }" @click="ChangeMainPage(UsersTickets)">
              <lord-icon v-if="this.ShowingPage == 'UsersTickets'"
                src="https://cdn.lordicon.com/jdgfsfzr.json"
                trigger="hover"
                stroke="bold"
                state="hover-conversation-alt"
                colors="primary:#DDDDDD,secondary:#DDDDDD"
                style="width: 30px; height: 30px; padding-top: 11px"
              >
              </lord-icon>
              <lord-icon v-else
                src="https://cdn.lordicon.com/jdgfsfzr.json"
                trigger="hover"
                stroke="bold"
                state="hover-conversation-alt"
                colors="primary:#29b6f6,secondary:#29b6f6"
                style="width: 30px; height: 30px; padding-top: 11px"
              >
              </lord-icon>
              <span class="white-text SideBarSpan">تیکت ها</span>
            </button>
          </div>
          <!-- کاربران -->
          <div
            class="SideBarLink w-100 mt-3 mb-2 d-flex flex-column align-items-start justify-content-center"
          >
            <button class="SideBarBtn box-bg p-2" :class="{
                activeBtn: this.ShowingPage == 'UsersList',
              }" @click="ChangeMainPage(UsersList)">
              <lord-icon v-if=" this.ShowingPage == 'UsersList'"
                src="https://cdn.lordicon.com/knzzcfyy.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#DDDDDD,secondary:#DDDDDD"
                style="width: 30px; height: 30px; padding-top: 11px"
              >
              </lord-icon>
              <lord-icon v-else
                src="https://cdn.lordicon.com/knzzcfyy.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#29b6f6,secondary:#29b6f6"
                style="width: 30px; height: 30px; padding-top: 11px"
              >
              </lord-icon>
              <span class="white-text SideBarSpan"> کاربران</span>
            </button>
          </div>
          <!-- لیست ادمینها -->
          <div
            class="SideBarLink w-100 mt-3 mb-2 d-flex flex-column align-items-start justify-content-center"
          >
            <button class="SideBarBtn box-bg p-2">
              <lord-icon
                src="https://cdn.lordicon.com/shcfcebj.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#29b6f6,secondary:#29b6f6"
                style="width: 30px; height: 30px; padding-top: 11px"
              >
              </lord-icon>
              <span class="white-text SideBarSpan"> لیست ادمین ها</span>
            </button>
          </div>
          <!-- ویرایش اطلاعات -->
          <div
            class="SideBarLink w-100 mt-3 mb-4 d-flex flex-column align-items-start justify-content-center"
          >
            <button class="SideBarBtn box-bg p-2" :class="{
                activeBtn: this.ShowingPage == 'InFoReForm',
              }" @click="ChangeMainPage(InFoReForm)">
              <lord-icon v-if="this.ShowingPage == 'InFoReForm'"
                src="https://cdn.lordicon.com/exymduqj.json"
                trigger="hover"
                stroke="bold"
                state="hover-line"
                colors="primary:#DDDDDD,secondary:#DDDDDD"
                style="width: 30px; height: 30px; padding-top: 11px"
              >
              </lord-icon>
              <lord-icon 
                src="https://cdn.lordicon.com/exymduqj.json"
                trigger="hover"
                stroke="bold"
                state="hover-line"
                colors="primary:#29b6f6,secondary:#29b6f6"
                style="width: 30px; height: 30px; padding-top: 11px"
              >
              </lord-icon>
              <span class="white-text SideBarSpan">ویرایش اطلاعات</span>
            </button>
          </div>
        </div>
        <!--  -->
      </aside>
      <!-- sidebarBtn -->
      <div
        class="sidebarShowBtn d-none justify-content-end align-items-start pt-4"
        ref="hamburgerbtn"
        style="min-width: 45px"
      >
        <button class="sidebarbtn p-2" @click="showSidebar()">
          <img src="../../assets/img/png_hrrys.png" alt="" />
        </button>
      </div>
      <!--  -->
      <DashboardPage v-if="ShowingPage == 'DashboardPage'" />
      <MovieList v-if="ShowingPage == 'MovieList'" />
      <AddMovie v-if="ShowingPage == 'AddMovie'" />
      <InFoReForm v-if="ShowingPage == 'InFoReForm'" />
      <UsersList v-if="ShowingPage == 'UsersList'" />
      <UsersTickets v-if="ShowingPage == 'UsersTickets'" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'ManagementPanel',
  data() {
    return {
      showSidebarBtn: false,
      ShowingPage: 'DashboardPage'
    }
  },
  // functions
  methods: {
    ChangeMainPage(ComponentName) {
      this.ShowingPage = ComponentName.name
    },
    showSidebar() {
      this.$refs.sideBar.classList.toggle('showSidebar')
      this.$refs.sideBar.classList.toggle('d-none')
      this.$refs.hamburgerbtn.classList.toggle('d-flex')
      this.$refs.hamburgerbtn.classList.toggle('d-none')

      if (this.showSidebarBtn === false) {
        this.showSidebarBtn = true
      } else if (this.showSidebarBtn === true) {
        this.showSidebarBtn = false
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
<style scoped>
.SideBarSpan {
  position: relative;
}
.dashboardBtn {
  bottom: 5px;
}

</style>