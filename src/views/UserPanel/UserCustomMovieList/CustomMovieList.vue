<template>
  <div class="panel-content">
          <div class="headline-title">
            <nav class="breadcrumbs">
              <a href="https://demo.novinwp.com/digimedia/panel">داشبورد</a>
              <a href="https://demo.novinwp.com/digimedia/panel/lists"  >لیست تماشا سفارشی</a>
            </nav>
            <div class="title-box">
              <h1 class="title">لیست تماشا سفارشی</h1>
            </div>
          </div>
          <div class="content-box">
            <section class="section_content panel-public-list edit-items">
              <div class="loader-box none">
                <div class="dot-loader">
                  <div class="dot-item"></div>
                  <div class="dot-item second-dot"></div>
                  <div class="dot-item third-dot"></div>
                </div>
              </div>
              <div class="edit-items-head">
                <div  class="headline-choose"  data-active="true"  data-type="movies">
                  <span class="title">نام فیلم</span>
                  <input type="text" class="input" />
                  <button class="btn">جستجو</button>
                  <ul class="result-list none"></ul>
                </div>
                <div class="save-items">
                  <button class="save" data-list="23">ذخیره اطلاعات</button>
                </div>
              </div>

              <div class="edit-items-body">
                <ul class="list"></ul>
              </div>
            </section>
          </div>
        </div>
</template>

<script>
export default {
name:'CustomMovieList'
}
</script>

<style>

</style>