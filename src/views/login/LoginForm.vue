<template>
  <div class="d-flex justify-content-center align-items-center bg-img">
    <div class="section backdropFilter">
      <div class="container">
        <div class="row full-height justify-content-center">
          <div class="col-12 text-center align-self-center py-5">
            <div class="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 class="mb-0 pb-3">
                <span :class="{ activeCard: this.ShowCard == 'Front' }" style="cursor: pointer;" @click="ShowCards('Front')" >ورود </span>
                <span :class="{ activeCard: this.ShowCard == 'Back' }" style="cursor: pointer;"  @click="ShowCards('Back')">ثبت نام</span></h6>
              <div class="card-3d-wrap mx-auto">
                <div class="card-3d-wrapper">
                  <!-- card-front -->
                  <div v-if="this.ShowCard=='Front'" class="card-front center">
                    <div class="center-wrap">
                      <div
                        class="section text-center d-flex align-items-center justify-content-center flex-column"
                      >
                        <div class="inputbox">
                          <input type="text" required="required" v-model="Manager" />
                          <span>نام کاربری</span>
                        </div>
                        <div class="inputbox">
                          <input type="text" required="required" />
                          <span>رمز ورود</span>
                        </div>

                        <RouterLink v-if="this.Manager=='Manager'" :to="{name:'ManagementPanel'}" class="button mt-4">ورود ادمین</RouterLink>
                        <RouterLink v-else :to="{name:'UserPanel'}" class="button mt-4">ثبت</RouterLink>
                        <p class="mb-0 mt-4 text-center">
                          <a href="#0" class="link">فراموشی رمز ورود</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- card-back -->
                  <div  v-if="this.ShowCard=='Back'"  class="card-front center">
                    <div class="center-wrap">
                      <div
                        class="section text-center d-flex align-items-center justify-content-center flex-column"
                      >
                        <div class="inputbox ">
                          <input type="text" required="required" />
                          <span>نام کاربری</span>
                        </div>
                        <div class="inputbox">
                          <input type="text" required="required" />
                          <span>رمز ورود</span>
                        </div>
                        <div class="inputbox">
                          <input type="text" required="required" />
                          <span> تکرار رمز ورود</span>
                        </div>
                        <RouterLink :to="{name:'UserPanel'}" class="button mt-4">ثبت</RouterLink>
                        <p class="mb-0 mt-4 text-center">
                          <a href="#0" class="link">فراموشی رمز ورود</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data() {
    return {
      ShowCard: 'Front',
      Manager:''
    }
  },
  methods: {
    ShowCards(card) {
      this.ShowCard = card
    }
  }
}
</script>

<style scope>
body {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  color: #c4c3ca;
}
a {
  cursor: pointer;
  transition: all 200ms linear;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7;
}
h6 span {
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: #29b6f6;
}
.bg-img {
  background-image: url(../../assets/img/Untitled.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
}
.backdropFilter {
  backdrop-filter: blur(10px);
}
.activeCard{
  background-color: #29b6f6;
  padding: 5px;
  color: #c4c3ca;
  border-radius: 5px;
  transition: 2s ease-in;
}
</style>
