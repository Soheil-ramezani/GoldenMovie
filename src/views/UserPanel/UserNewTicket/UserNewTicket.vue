<template>
  <div class="panel-content">
          <div class="headline-title">
            <nav class="breadcrumbs">
              <a href="https://demo.novinwp.com/digimedia/panel">داشبورد</a>
              <a href="https://demo.novinwp.com/digimedia/panel/tickets"  >تیکت ها</a>
            </nav>
            <div class="title-box">
              <h1 class="title">تیکت ها</h1>
            </div>
          </div>
          <div class="content-box">
            <section class="section_content panel-new-request new-ticket">
              <form  action="https://demo.novinwp.com/digimedia/panel/tickets/new-ticket/"  method="POST"  class="form">
                <div class="loader-box none">
                  <div class="dot-loader">
                    <div class="dot-item"></div>
                    <div class="dot-item second-dot"></div>
                    <div class="dot-item third-dot"></div>
                  </div>
                </div>
                <div class="input">
                  <label for="title">موضوع</label>
                  <input type="text" name="title" id="title" />
                </div>
                <div class="input">
                  <label for="department">دپارتمان</label>
                  <select  name="department"  id="department"  class="nice"  style="display: none">
                    <option value="0">انتخاب</option>
                    <option value="1">واحد مالی</option>
                    <option value="2">پشتیبانی فنی</option>
                    <option value="3">سوالات قبل از خرید</option>
                  </select>
                  <div class="nice-select nice" tabindex="0">
                    <span class="current">سوالات قبل از خرید</span>
                    <ul class="list">
                      <li data-value="1" class="option">واحد مالی</li>
                      <li data-value="2" class="option focus">پشتیبانی فنی</li>
                      <li data-value="3" class="option selected">  سوالات قبل از خرید</li>
                    </ul>
                  </div>
                </div>
                <div class="input last">
                  <label for="content">توضیحات</label>
                  <textarea name="content" id="content"></textarea>
                </div>
                <div class="input submit">
                  <button>ارسال تیکت</button>
                </div>
              </form>
            </section>
          </div>
        </div>
</template>

<script>
export default {
name:'UserNewTicket'
}
</script>

<style>

</style>