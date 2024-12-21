<template>
  <!-- users -->
  <div
    class="users w-100 box-bg p-xl-5 p-lg-5 p-xxl-5 d-flex align-items-center flex-column custom-box-shadow"
  >
    <h5 class="light-Gray-text mb-4">لیست کاربران</h5>
    <hr class="w-75" />
    <table class="usersLis w-100" ref="usersList"></table>
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  data() {
    return {
      userElem: null,
      randomNum: null,
      newUsersList: null
    }
  },
  methods: {
    UserElem(user) {
      this.userElem = ` <tr class="user d-flex  align-items-center justify-content-between custom-box-shadow w-100 p-3" ref="Userslist">
                <td class="UserDetails d-flex align-items-center">
                    <!-- img -->
                <div class="userimg d-flex justify-content-center align-items-center ">
        <lord-icon src="https://cdn.lordicon.com/kdduutaw.json" trigger="in" delay="500" state="in-reveal" colors="primary:#242424,secondary:#242424" style="width:25px;height:25px"></lord-icon>
                </div>
                <!--name  -->
                <h6 class="userName light-Gray-text">${user.firstName + user.lastName} </h6>
                </td>
                <!-- Email -->
                <td class="UserEmailDiv">
                  <h6 class="UserEmailDiv light-Gray-text" > ${user.email}</h6>
                </td>
                <!-- buttons -->
                 <td class="buttons d-flex flex-row">
                    <button class="userbtn white-text p-2 pb-2 m-1 d-flex justify-content-center align-items-center"><span>مسدود </span></button>
                    <button class="userbtn white-text p-2 pb-2 m-1 d-flex justify-content-center align-items-center"> <span>حذف </span></button>
                 </td>
                 
            </tr>`
      this.$refs.usersList.insertAdjacentHTML('beforeend', this.userElem)
    }
  },
  beforeMount() {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        const users = data.users.map((user) => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }))
        this.randomNum = Math.floor(Math.random() * 100)
        this.newUsersList = users.slice(0, this.randomNum)
        this.newUsersList.map((user) => this.UserElem(user))
      })
      .catch((error) => console.error('Error fetching users:', error))
  }
}
</script>

<style>
</style>