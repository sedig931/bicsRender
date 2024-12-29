<template>
  <div class="home-div flex-column" dir="rtl">
    <div class="outer-container-div flex-column">
      <div class="body-container-div">
        <div class="body-right-div flex-column">
          <div class="right-name-div pe-3">
            <span>
              مرحباً <span>{{ this.activeUser.name }}</span>
            </span>
          </div>
          <div class="spans-div flex-row">
            <div class="right-spans-div flex-column pe-3">
              <span class="right-single-span">عدد الدراجات النارية</span>
              <span class="right-single-span">عدد العقود </span>
              <span class="right-single-span">الإجارات المدفوعة </span>
            </div>
            <div class="left-spans-div flex-column me-3">
              <span class="right-single-span">
                {{ this.activeUser.contracts[0].bycnumber }}
              </span>
              <span class="right-single-span">{{
                this.activeUser.contracts.length
              }}</span>
              <span class="right-single-span">{{
                this.activeUser.contracts[0].bycnumber * 5950
              }}</span>
            </div>
          </div>
          <div class="loading-div">
            <span>18/16</span>
            <div class="loading">
              <div class="inside-loading"></div>
            </div>
          </div>
        </div>
        <div class="body-left-div flex-column">
          <div class="body-left-right-spans-div flex-column pe-3">
            <span class="right-single-span">رقم العقد</span>
            <span class="right-single-span">86549856</span>
            <span class="right-single-span"> عدد الدراجات النارية </span>
            <span class="right-single-span">2</span>
            <span class="right-single-span">عدد دفعات الإيجار المتبقية </span>
            <span class="right-single-span">75.240</span>
          </div>
        </div>
      </div>
      <div class="footer-container-div flex-row">
        <div class="add-byc-div flex-row">
          <span class="add-byc-span">تقدر تأجر دراجات إضافية من هنا</span>
          <div class="add-div flex-row">
            <span class="add-span">+</span>
            <!-- <i class="bi bi-plus flex-row"></i> -->
          </div>
        </div>
      </div>
      <div class="logout-div-here flex-row" @click="this.logout">
        <span>Logout</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentUser } from "../composable/modal.js";

export default {
  name: "HomeView",
  props: ["id"],
  data() {
    return {
      activeUser: {
        contracts: [{}],
      },
    };
  },
  methods: {
    async getUserInfo() {
      try {
        this.activeUser = await getCurrentUser(this.id);
      } catch (err) {
        // backto login page..
        this.$router.push({
          name: "login",
        });
      }
    },
    async logout() {
      try {
        await fetch(`http://localhost:300/destroy`, {
          credentials: "include",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.$router.push({
          name: "login",
        });
      } catch (err) {
        this.$router.push({
          name: "login",
        });
      }
    },
  },
  mounted() {
    // if session expired go to login page..
    this.getUserInfo();
  },
};
</script>

<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home-div {
  height: 100vh;
  width: 100%;
}

.outer-container-div {
  height: 80%;
  width: 80%;
  justify-content: space-evenly;
  font-family: "Noto Kufi Arabic", sans-serif;
}

.header-name-div {
  width: 100%;
  height: 70px;
}
.body-container-div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 80%;
  width: 100%;
}
.right-name-div {
  position: absolute;
  top: -50px;
  color: rgb(76, 76, 235);
  width: 100%;
}
/* ----------------------------right--------------------------------------- */
.body-right-div {
  position: relative;
  justify-content: space-evenly;
  height: 60%;
  width: 400px;
  background-image: var(--gradient-right-cont-primary);
  color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.spans-div {
  width: 100%;
}
.right-spans-div {
  width: 50%;
}
.left-spans-div {
  width: 50%;
}
.right-single-span {
  width: 100%;
}
.loading-div {
  width: 70%;
}
.loading {
  height: 15px;
  width: 100%;
  background-color: white;
  border-radius: 15px;
}
.inside-loading {
  width: 20%;
  height: 100%;
  border-radius: 0 15px 15px 0;
  background-color: rgb(172, 21, 41);
}
/* ----------------------------------------LEFT---------------------- */
.body-left-div {
  height: 60%;
  width: 300px;
  border: 2px solid rgba(76, 76, 235, 0.6);
  border-radius: 15px;
  color: rgb(76, 76, 235);
  margin-right: 20px;
}
.body-left-right-spans-div {
  width: 100%;
}
.footer-container-div {
  width: 100%;
  height: 70px;
}
/* -------------------------------------ADD BYC--------------------------------- */
.add-byc-div {
  width: 450px;
  height: 35px;
  background-image: var(--gradient-right-cont-primary);

  color: white;
  justify-content: space-around;
  border-radius: 15px;
  padding: 0 10px 0 10px;
  cursor: pointer;
}
.add-div {
  background-color: white;
  color: rgba(76, 76, 235, 0.6);
  height: 25px;
  width: 25px;
  border-radius: 12.5px;
  font-size: 24.5px;
}
.logout-div-here {
  width: 150px;
  height: 35px;
  border-radius: 15px;
  background-color: rgb(172, 21, 41);
  color: white;
  cursor: pointer;
}
/* ----------------------------------------------MEDIA QUERY----------------------------------------- */
@media (max-width: 920px) {
  .body-container-div {
    font-size: 15px;
  }
}
@media (max-width: 705px) {
  .body-container-div {
    font-size: 12px;
  }

  .add-byc-div {
    width: 250px;
    font-size: 14px;
  }
  .add-div {
    height: 15px;
    width: 15px;
    border-radius: 12.5px;
    font-size: 15px;
  }
}
@media (max-width: 610px) {
  .body-container-div {
    flex-direction: column;
  }
  .body-right-div {
    width: 70%;
    margin: 0;
  }
  .body-left-div {
    width: 70%;
    margin-right: 0;
    margin-top: 20px;
  }
  .right-name-div {
    top: -22px;
  }
}
@media (min-width: 50px) and (max-width: 450px) {
  .body-container-div {
    font-size: 9px;
  }
  .add-byc-div {
    width: 200px;
    font-size: 9px;
  }
  .add-div {
    height: 15px;
    width: 15px;
    border-radius: 12.5px;
    font-size: 15px;
  }
}
</style>
