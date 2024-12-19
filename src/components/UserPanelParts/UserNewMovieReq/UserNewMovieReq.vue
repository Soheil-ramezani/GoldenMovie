<template>
  <div class="panel-content">
    <div class="headline-title">
      <nav class="breadcrumbs">
        <a href="https://demo.novinwp.com/digimedia/panel">داشبورد</a>
        <a href="https://demo.novinwp.com/digimedia/panel/requests">درخواست فیلم و سریال</a>
      </nav>
      <div class="title-box">
        <h1 class="title">درخواست فیلم و سریال</h1>
        <a href="https://demo.novinwp.com/digimedia/panel/requests" class="sub-link">درخواست ها</a>
      </div>
    </div>
    <div class="content-box">
      <section class="section_content panel-new-request new-request">
        <form
          action="https://demo.novinwp.com/digimedia/panel/requests/new-request/"
          method="POST"
          class="form"
        >
          <div class="loader-box none">
            <div class="dot-loader">
              <div class="dot-item"></div>
              <div class="dot-item second-dot"></div>
              <div class="dot-item third-dot"></div>
            </div>
          </div>
          <div class="input">
            <label for="">نام فیلم یا سریال</label>
            <input type="text" name="title" />
          </div>
          <div class="input">
            <label for="">سال انتشار</label>
            <select name="release" class="nice" style="display: none">
              <option value="0">انتخاب</option>
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
            <div class="nice-select nice" tabindex="0">
              <span class="current">انتخاب</span>
              <ul class="list">
                <li v-for="year in years" :key="year" :data-value="year" class="option">
                  {{ year }}
                </li>
              </ul>
            </div>
          </div>
          <div class="input last">
            <label for="">دسته بندی</label>
            <div class="switch-item">
              <span class="item active" data-value="movie">فیلم</span>
              <span class="item" data-value="serie">سریال</span>
              <input type="hidden" value="movie" name="type" />
            </div>
          </div>
          <div class="input submit">
            <button>ارسال درخواست</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewMovieReq',
  data() {
    return {
      years: this.generateYears(1900, new Date().getFullYear()) // Generate years from 1900 to the current year
    }
  },
  methods: {
    generateYears(start, end) {
      const years = []
      for (let year = start; year <= end; year++) {
        years.push(year)
      }
      return years
    }
  }
}
</script>

<style>
</style>