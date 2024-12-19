<template>
  <div class="panel-content">
          <div class="headline-title">
            <nav class="breadcrumbs">
              <a href="#">داشبورد</a>
              <a href="#"  >تیکت ها</a>
            </nav>
            <div class="title-box">
              <h1 class="title">تیکت ها</h1>
            </div>
          </div>
          <div class="content-box">
            <section class="section_content panel-requests tickets">
              <div class="responsive-table">
                <table class="table-list">
                  <thead>
                    <tr>
                      <th>شناسه</th>
                      <th class="title">عنوان</th>
                      <th>دپارتمان</th>
                      <th>تاریخ ثبت</th>
                      <th>بروز شده</th>
                      <th>عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10#</td>
                      <td class="title">
                        <div class="title-box">
                          <a  href="#"  class="link-to-ticket"  >error</a>
                          <span class="ticket-status pending"  >در انتظار پاسخ</span>
                        </div>
                      </td>
                      <td>پشتیبانی فنی</td>
                      <td>۲۳:۵۴:۴۸ - ۱۴۰۳/۰۷/۱۰</td>
                      <td>۲۳:۵۴:۴۸ - ۱۴۰۳/۰۷/۱۰</td>
                      <td>
                        <div class="manage-btns">
                          <a  href="./user-panel-ticket-show.html">
                            <i class="fa-solid fa-eye"></i>
                            مشاهده
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>9#</td>
                      <td class="title">
                        <div class="title-box">
                          <a  href="#"  class="link-to-ticket"  >newFilm</a>
                          <span class="ticket-status pending"  >در انتظار پاسخ</span>
                        </div>
                      </td>
                      <td>پشتیبانی فنی</td>
                      <td>۲۲:۰۱:۳۳ - ۱۴۰۳/۰۷/۰۹</td>
                      <td>۲۲:۰۱:۳۳ - ۱۴۰۳/۰۷/۰۹</td>
                      <td>
                        <div class="manage-btns">
                          <a  href="./user-panel-ticket-show.html">
                            <i class="fa-solid fa-eye"></i>
                            مشاهده
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
</template>

<script>
export default {
name:'UserTicketsList'
}
</script>

<style>

</style>