<template>
  <!-- dashboardPage -->
  <div class="dashboardPage w-100 h-100 gray-bg pt-4 pb-4">
    <div class="box-bg pt-2 p-3 mt-2 m-4 d-flex flex-column">
      <!-- sidebarBtn -->
      <div class="sidebarShowBtn d-none justify-content-end align-items-center" id="hamburgerbtn">
        <button class="sidebarbtn p-2" onclick="showSidebar()">
          <img src="./assets/png_hrrys.png" alt="" />
        </button>
      </div>
      <!-- statistics -->
      <div class="MediasNums d-flex justify-content-around align-items-center">
        <!-- movies -->
        <div
          class="MediaBox m-2 custom-box-shadow d-flex flex-column align-items-center box-bg p-4"
        >
          <h5 class="blue-text m-1">:تعداد فیلم ها</h5>
          <h2 class="white-text">321</h2>
        </div>
        <!-- series -->
        <div
          class="MediaBox m-2 custom-box-shadow d-flex flex-column align-items-center box-bg p-4"
        >
          <h6 class="blue-text m-1">:تعداد سریال ها</h6>
          <h2 class="white-text">240</h2>
        </div>
        <!-- users -->
        <div
          class="MediaBox m-2 custom-box-shadow d-flex flex-column align-items-center box-bg p-4"
        >
          <h5 class="blue-text m-1">:تعداد کاربران</h5>
          <h2 class="white-text">825</h2>
        </div>
      </div>
      <!-- userEntranceChart -->
      <div
        class="userEnters custom-box-shadow d-flex align-items-center justify-content-center box-bg pt-4 pb-4 m-3"
      >
        <canvas id="myChart" class="myChart"></canvas>
      </div>
      <!-- new users and mediasChart  -->
      <div class="dashboard-footer mt-5 d-flex justify-content-around align-items-center">
        <!-- new users list -->
        <div
          class="NewUsersList custom-box-shadow box-bg p-md-5 p-xl-5 p-lg-5 p-xxl-5 pt-3 d-flex flex-column align-items-center justify-content-start"
        >
          <h3 class="white-text">کاربران جدید</h3>
          <hr class="mb-3 mt-2" />
          <div class="NewUsers w-100" id="NewUserList"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
  name: 'MyChart',
  //   data
  data() {
    return {
      // charts
      chart: null,
      chartData: {
        labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'],
        datasets: [
          {
            label: 'My Dataset',
            data: [100, 120, 120, 80, 100, 200, 250],
            borderWidth: 0.5,
            borderColor: 'rgba(229, 9, 20)',
            backgroundColor: 'rgba(229, 9, 20)'
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      //   *****************************
      // newUsers
      NewUserList: document.getElementById('NewUserList'),
      newUserElem:null,
    }
  },
  //   functions
  methods: {
    // Charts
    renderChart() {
      this.chart = new Chart(this.$refs.myChart, {
        type: 'line',
        data: this.chartData,
        options: this.options
      })
    },
    // newUsers
    ShowNewUsers(user) {
      this.newUserElem = `<!-- new user -->
            <div class="newUser w-100 m-1 p-3 d-flex align-items-center align-self-start  ">
              <!-- user profile -->
               <div class="userProfile">
                <lord-icon
              src="https://cdn.lordicon.com/kdduutaw.json"
              trigger="hover"
              stroke="bold"
              state="hover-looking-around"
              colors="primary:#ffffff,secondary:#ffffff"
              style="width: 30px; height: 30px"
            >
            </lord-icon>
               </div> 
            <!-- user name -->
             <span class="white-text m-2 col-4">${this.user.firstName + this.user.lastName}</span>
             <span class="white-text m-2 col-6">${this.user.email}</span>
             
            
            </div>`
     this.NewUserList.insertAdjacentHTML('beforeend', this.newUserElem)
    }
  },
  mounted() {
    // charts
    this.renderChart()
    // New users
    // fetch data
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        const users = data.users.map((user) => ({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }))
        const randomNum = Math.floor(Math.random() * 15)
        const newUsersList = users.slice(0, randomNum)
        newUsersList.map((user) => this.ShowNewUsers(user))
      })
      .catch((error) => console.error('Error fetching users:', error))
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.destroy()
    }
  }
}
</script>

