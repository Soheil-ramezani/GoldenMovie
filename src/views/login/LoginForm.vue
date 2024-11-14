<template>
  <div class="section">
    <div class="container">
      <div class="row full-height justify-content-center">
        <div class="col-12 text-center align-self-center py-5">
          <div class="section  pb-5 pt-5 pt-sm-2 text-center">
            <h4 class="  mb-0 pb-3">
              <span>ثبت نام</span>
              <span>ورود</span>
            </h4>
            <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
            <label for="reg-log"></label>
            <div class="card-3d-wrap mx-auto">
              <div class="card-3d-wrapper">
                <!-- card-front -->
                <div class="card-front center">
                  <div class="center-wrap">
                    <div
                      class="section text-center d-flex align-items-center justify-content-center flex-column"
                    >
                      <div class="inputbox">
                        <input type="text" required="required" />
                        <span>نام کاربری</span>
                      </div>
                      <div class="inputbox">
                        <input type="text" required="required" />
                        <span>رمز ورود</span>
                      </div>

                      <a href="#" class="button mt-4">ثبت</a>
                      <p class="mb-0 mt-4 text-center">
                        <a href="#0" class="link">فراموشی رمز ورود</a>
                      </p>
                    </div>
                  </div>
                </div>
                <!-- card back -->
                <div class="card-back center">
                  <div class="center-wrap">
                    <div
                      class="section text-center d-flex align-items-center justify-content-center flex-column pt-4"
                    >
                      <div class="inputbox">
                        <input type="text" required="required" />
                        <span>نام کاربری</span>
                      </div>
                      <!--  -->
                      <div class="inputbox">
                        <input type="text" required="required" />
                        <span>رمز ورود</span>
                      </div>
                      <!--  -->
                      <div class="inputbox">
                        <input type="text" required="required" />
                        <span>تکرار رمز ورود</span>
                      </div>
                      <a href="#" class="button mt-4">ثبت</a>
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
  name: 'LogIn'
}
</script>

<style scope>
body {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  color: #c4c3ca;
  background-image: url(../../assets/img/Untitled.jpg);
  backdrop-filter: blur(5px);
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
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
h4 span {
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: #29b6f6;
}
</style>