<template>
  <div class="panel-content">
          <div class="headline-title">
            <nav class="breadcrumbs">
              <a href="#">داشبورد</a>
              <a href="#"  >ویرایش پروفایل</a>
            </nav>
            <div class="title-box">
              <h1 class="title">ویرایش پروفایل</h1>
            </div>
          </div>
          <div class="content-box">
            <section class="section_content">
              <form action="#" class="edit-profile-form">
                <div class="loader-box none">
                  <div class="dot-loader">
                    <div class="dot-item"></div>
                    <div class="dot-item second-dot"></div>
                    <div class="dot-item third-dot"></div>
                  </div>
                </div>
                <div class="input-profile">
                  <figure class="preview">
                    <img  alt=""  src="https://secure.gravatar.com/avatar/d7a1e14b32549086d191e5a050315af9?s=50&amp;d=mm&amp;r=g"  srcset="    https://secure.gravatar.com/avatar/d7a1e14b32549086d191e5a050315af9?s=100&amp;d=mm&amp;r=g 2x  "  class="avatar avatar-50 photo"  height="50"  width="50"  decoding="async"/>
                  </figure>
                  <span class="desc">تصویر پروفایل از
                    <a  href="https://en.gravatar.com/"  class="link"  target="_blank"  rel="noopener nofollow"  >Gravatar</a>
                    استفاده میکند
                    </span>
                </div>
                <div class="form-inputs">
                  <div class="input-box">
                    <label for="user_firstname">نام</label>
                    <div class="input">
                      <i class="fa-solid fa-user"></i>
                      <input  type="text"  value=""  id="user_firstname"  name="user_firstname"/>
                    </div>
                  </div>
                  <div class="input-box">
                    <label for="user_lastname">نام خانوادگی</label>
                    <div class="input">
                      <i class="fa-solid fa-user"></i>
                      <input  type="text"  value=""  id="user_lastname"  name="user_lastname"/>
                    </div>
                  </div>
                  <div class="input-box">
                    <label for="">پست الکترونیک</label>
                    <div class="input">
                      <i class="fa-solid  fa-at"></i>
                      <input  type="text"  value="erfanhosseini824@yahoo.com"  disabled=""/>
                    </div>
                  </div>
                  <div class="input-box">
                    <label for="user_displayname">نام نمایشی</label>
                    <div class="input">
                      <i class="fa-solid  fa-address-card"></i>
                      <input  type="text"  value="rgdrer"  name="user_displayname"  id="user_displayname"/>
                    </div>
                  </div>
                  <div class="input-box">
                    <label for="user_city">شهر</label>
                    <div class="input">
                      <i class="fa-solid fa-location-dot"></i>
                      <input  type="text"  value=""  name="user_city"  id="user_city"/>
                    </div>
                  </div>
                  <div class="input-box">
                    <label for="user_phone">شماره تماس</label>
                    <div class="input">
                      <i class="fa-solid fa-mobile"></i>
                      <input  type="text"  value=""  name="user_phone"  id="user_phone"/>
                    </div>
                  </div>
                  <div class="input-box textarea">
                    <label for="user_bio">درباره من</label>
                    <textarea name="user_bio" id="user_bio"></textarea>
                  </div>
                  <div class="change-pass-box">
                    <div class="headline">
                      <span class="title"  >آیا میخواهید رمز عبور را تغییر دهید؟</span>
                      <i class="fa-duotone fa-angles-left"></i>
                    </div>
                    <div class="change-body" style="display: none">
                      <div class="input-pass last-pass">
                        <label for="last_pass">رمز عبور قبلی</label>
                        <input  type="password"  name="last_pass"  id="last_pass"/>
                      </div>
                      <div class="input-pass">
                        <label for="new_pass1">رمز عبور جدید</label>
                        <input  type="password"  name="new_pass1"  id="new_pass1"/>
                      </div>
                      <div class="input-pass">
                        <label for="new_pass2">تکرار رمز عبور جدید</label>
                        <input  type="password"  name="new_pass2"  id="new_pass2"/>
                      </div>
                    </div>
                  </div>
                  <div class="input-box btn">
                    <button type="submit" class="save-profile">
                      ذخیره اطلاعات
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
</template>

<script>
export default {
name:"UserEditProfile"
}
</script>

<style>

</style>