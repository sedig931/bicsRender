<template>
  <div class="container-div flex-column">
    <!-- v-if="!this.showBar" -->
    <div
      class="row-menu-icon-div flex-row"
      @click="this.dropdownmenue = !this.dropdownmenue"
    >
      <i class="bi bi-list flex-row"></i>
      <div
        class="row-menue-div flex-column border text-center"
        v-if="this.dropdownmenue"
      >
        <div
          class="btn-menue-row-div btn-menue-row-div-first flex-row"
          data-windownum="0"
          @click="this.switchWindows"
        >
          <span
            class="pe-1 small-menue-lbl"
            :class="this.windows[0] === 1 ? 'active-nav-menue-item' : ''"
          >
            الرئيسية
          </span>
        </div>
        <div
          class="btn-menue-row-div flex-row"
          data-windownum="1"
          @click="this.switchWindows"
        >
          <span
            class="small-menue-lbl"
            :class="this.windows[1] === 1 ? 'active-nav-menue-item' : ''"
          >
            العملاء
          </span>
        </div>
        <div
          class="btn-menue-row-div flex-row"
          data-windownum="2"
          @click="this.switchWindows"
        >
          <span
            class="small-menue-lbl"
            :class="this.windows[2] === 1 ? 'active-nav-menue-item' : ''"
          >
            الدراجات النارية
          </span>
        </div>
        <div
          class="btn-menue-row-div flex-row"
          data-windownum="3"
          @click="this.switchWindows"
        >
          <span
            class="small-menue-lbl"
            :class="this.windows[3] === 1 ? 'active-nav-menue-item' : ''"
          >
            إعدادات
          </span>
        </div>
        <div
          class="btn-menue-row-div btn-menue-row-div-last flex-row"
          @click="this.logout"
        >
          <span class="small-menue-lbl"> تسجيل خروج </span>
        </div>
      </div>
      <!-- </div> -->
    </div>
    <!-- v-if="this.showBar" -->
    <div class="admin-page-container flex-row" dir="rtl">
      <div class="right-menue-div flex-column">
        <div
          class="btn-menue-div flex-row"
          data-windownum="0"
          @click="this.switchWindows"
        >
          <div
            class="point-active ms-3 mb-1"
            v-show="this.windows[0] === 1"
          ></div>
          <span :class="this.windows[0] === 1 ? 'active-nav-menue-item' : ''">
            الرئيسية
          </span>
        </div>
        <div
          class="btn-menue-div flex-row"
          data-windownum="1"
          @click="this.switchWindows"
        >
          <div
            class="point-active ms-3 mb-1"
            v-show="this.windows[1] === 1"
          ></div>
          <span :class="this.windows[1] === 1 ? 'active-nav-menue-item' : ''">
            العملاء
          </span>
        </div>
        <div
          class="btn-menue-div flex-row"
          data-windownum="2"
          @click="this.switchWindows"
        >
          <div
            class="point-active ms-3 mb-1"
            v-show="this.windows[2] === 1"
          ></div>
          <span :class="this.windows[2] === 1 ? 'active-nav-menue-item' : ''">
            الدراجات النارية
          </span>
        </div>
        <div
          class="btn-menue-div flex-row"
          data-windownum="3"
          @click="this.switchWindows"
        >
          <div
            class="point-active ms-3 mb-1"
            v-show="this.windows[3] === 1"
          ></div>
          <span :class="this.windows[3] === 1 ? 'active-nav-menue-item' : ''">
            إعدادات
          </span>
        </div>
        <div
          class="btn-menue-div btn-logout flex-row mt-5"
          @click="this.logout"
        >
          <span class="logout-div"> تسجيل خروج </span>
        </div>
      </div>
      <div class="body-div flex-row">
        <div class="home-body-div flex-column text-muted">
          <div class="spans-div flex-row border" v-show="this.windows[0] === 1">
            <div class="right-spans-div flex-column pe-3">
              <span class="single-span">عدد العملاء المسجلين</span>
              <span class="single-span">عدد العملاء الذين اشترو</span>
              <span class="single-span">عدد الدراجات النارية </span>
              <span class="single-span">إجمالي قيمة الدراجات النارية </span>
            </div>
            <div class="left-spans-div flex-column me-3">
              <span class="single-span"> {{ this.customersList.length }} </span>
              <span class="single-span"> {{ this.customers.length - 1 }} </span>
              <span class="single-span"> 150 </span>
              <span class="single-span"> {{ 150 * 5950 }} </span>
            </div>
          </div>

          <div
            class="table-container flex-column"
            v-show="this.windows[1] === 1"
          >
            <div class="search-container-div flex-row">
              <input
                type="text"
                class="search-input form-control"
                placeholder="إبحث عن عميل"
                @input="this.searchForCustomer"
                v-model="this.nameSearched"
              />
            </div>
            <div class="customer-info-container-div text-center flex-column">
              <div class="header-div flex-row">
                <span class="steps-bycnum-span">إسم العميل</span>
                <span class="steps-bycnum-span"> الخطوات</span>
                <span class="steps-bycnum-span"> عدد الدراجات</span>
                <span class="steps-bycnum-span">تاريخ التسجيل</span>
              </div>
              <div
                class="single-customer-div flex-row m-1"
                v-for="customer in this.customers"
                :key="customer.idnumber"
              >
                <span class="steps-bycnum-span name-span">{{
                  customer.name
                }}</span>
                <span class="steps-bycnum-span">completed</span>
                <span class="steps-bycnum-span"
                  >{{ customer.contracts[0].bycnumber }}
                </span>
                <span class="steps-bycnum-span">{{
                  customer.createdDate
                }}</span>
              </div>
            </div>
          </div>
          <div
            class="byc-number-div spans-div border flex-row"
            v-show="this.windows[2] === 1"
          >
            <div class="right-spans-div flex-column">
              <span class="single-span"
                >عدد الدراجات النارية المتاحة للشراء
              </span>
              <div class="number-div flex-row">
                <span class="number-span single-span">1568</span>
              </div>
              <span class="single-span"
                >إجمالي إجارات الدراجات النارية الشهرية
              </span>
              <div class="number-div flex-row">
                <span class="number-span single-span">156.8</span>
              </div>
            </div>
          </div>
          <div
            class="table-container flex-column"
            v-show="this.windows[3] === 1"
          >
            <div class="tabs-container-div flex-row text-center">
              <div class="tab-div ms-1 active-tab bg-primary flex-row">
                المستخدمين
              </div>
              <div class="tab-div m-1 flex-row">نص الإتفاقية</div>
              <div class="tab-div m-1 flex-row">إعتماد إيصال التحويل</div>
              <div class="tab-div me-1 flex-row">إعدادات عامة</div>
            </div>
            <div class="customer-info-container-div text-center flex-column">
              <div class="header-div flex-row">
                <span class="steps-bycnum-span">المستخدم</span>
                <span class="steps-bycnum-span"> البريد الإلكتروني</span>
                <span class="steps-bycnum-span"> صلاحية الدخول </span>
                <span class="steps-bycnum-span"></span>
              </div>
              <div
                class="single-customer-div flex-row m-1"
                v-for="customer in this.customers"
                :key="customer.idnumber"
              >
                <span class="steps-bycnum-span">{{ customer.name }}</span>
                <span class="steps-bycnum-span">{{ customer.email }}</span>
                <span class="steps-bycnum-span"
                  >{{ customer.status ? "نعم" : "لا" }}
                </span>
                <span class="steps-bycnum-span delete-span">حذف المستخدم</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllCustomers } from "../composable/modal.js";
export default {
  data() {
    return {
      customers: [{ contracts: [{}] }],
      nameSearched: "",
      customersList: [],
      showMainwidow: false,
      showBycWindow: false,
      showCustomersWindow: true,
      windows: [1, 0, 0, 0],
      showBar: true,
      dropdownmenue: false,
    };
  },
  methods: {
    async getAllCustomers() {
      try {
        this.customers = await getAllCustomers();
        this.customers.forEach(
          (customer) =>
            (customer.createdDate = new Intl.DateTimeFormat("en-US").format(
              new Date(customer.createdDate)
            ))
        );
        if (localStorage.getItem("localCustomers")) {
          const localCustomers1 = JSON.parse(
            localStorage.getItem("localCustomers")
          );
          localCustomers1.customers.forEach((localCustomer) =>
            this.customers.push(localCustomer)
          );
        }
        this.customersList = this.customers;
      } catch (err) {
        this.$router.push({
          name: "login",
        });
      }
    },
    searchForCustomer() {
      if (this.nameSearched === "") {
        this.customers = this.customersList;
      } else {
        this.customers = this.customers.filter((customer) =>
          customer.name.includes(this.nameSearched)
        );
      }
    },
    switchWindows(e) {
      this.windows[0] = 0;
      this.windows[1] = 0;
      this.windows[2] = 0;
      this.windows[3] = 0;
      this.windows[Number(e.currentTarget.dataset.windownum)] = 1;
    },
    async logout() {
      try {
        await fetch(`https://bicsserver24.netlify.app/api/destroy`, {
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
    this.getAllCustomers();
    if (document.documentElement.clientWidth < 700) {
      this.showBar = false;
    }
  },
};
</script>

<style scoped>
.flex-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.admin-page-container {
  width: 100%;
  height: 100vh;
  font-family: "Noto Kufi Arabic", sans-serif;
  background-image: var(--gradient-logincontainer-primary);
}
.body-div {
  height: 100%;
  width: 100%;
  /* background-color: white; */
}
/* ---------------------------------------------------------------ROW NAV---------------------------- */
.row-menu-icon-div {
  position: fixed;
  top: 47px;
  right: 10%;
  height: 32px;
  width: 32px;
  font-size: 23px;
  font-family: "Noto Kufi Arabic", sans-serif;
  cursor: pointer;
  color: white;
  /* border: 2px solid rgb(108, 108, 108); */
  border-radius: 5px;
  padding: 0;
  display: none;
  /* background-color: white; */
  background-image: var(--gradient-right-cont-primary);

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.row-menue-div {
  position: absolute;
  top: 35px;
  width: 80px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.small-menue-lbl {
  width: 100%;
}
.btn-menue-row-div {
  height: 20px;
  width: 100%;
  background-color: white;
  border-bottom: 0.5px solid rgb(180, 180, 180);
  color: rgb(46, 44, 44);
  padding: 0 5px 0 5px;
  justify-content: start;
  cursor: pointer;
  font-size: 10px;
}
.btn-menue-row-div-first {
  border-radius: 10px 10px 0 0;
}
.btn-menue-row-div-last {
  border-radius: 0 0 10px 10px;
  border-bottom: none;
}

/* ---------------------------------------------------------------RIGHT NAV---------------------------- */
.right-menue-div {
  height: 100%;
  width: 400px;
  margin: 30px 30px 0 0;
  /* background-color: rgb(46, 44, 44); */
  background-image: var(--gradient-right-cont-primary);
  border-radius: 20px 20px 0 0;
  font-size: 19px;
  display: flex;
}
.btn-menue-div {
  height: 35px;
  width: 80%;
  background-color: white;
  border-radius: 20px;
  color: rgb(46, 44, 44);
  justify-content: start;
  padding-right: 35px;
  margin-bottom: 10px;
  cursor: pointer;
}
.btn-logout {
  width: 40%;
  justify-content: center;
  padding: 0;
  font-size: 15px;
}
.point-active {
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: rgb(33, 30, 209);
}
.active-nav-menue-item {
  color: rgb(33, 30, 209);
}
/* ---------------------------------------------------------------HOME BODY---------------------------- */
.home-body-div {
  justify-content: space-evenly;
  height: 70%;
  width: 80%;
  /* background-image: var(--gradient-right-cont-primary); */
  color: rgb(46, 44, 44);
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
}
.right-spans-div {
  width: 100%;
  height: 100%;
  font-size: 16px;
  /* justify-content: end; */
}
.spans-div {
  width: 60%;
  height: 50%;
  border-radius: 15px;
  padding: 5%;
}
.left-spans-div {
  width: 50%;
  font-size: 16px;
}
.single-span {
  justify-content: start;
  width: 100%;
  /* margin-right: 20%; */
  margin-bottom: 2%;
}

/* --------------------------------------------byc number container-------------------- */
/* .byc-number-div {
  width: 60%;
  height: 50%;
  border-radius: 15px;
  padding: 5%;
} */
.number-span {
  width: 30%;
  border: 1.5px solid rgb(33, 30, 209);
  border-radius: 5px;
  padding-right: 15px;
}
.number-div {
  width: 100%;
  justify-content: start;
}
/* ------------------------------------------------CUSTOMERS VIEW------------------------ */
.table-container {
  font-size: 14px;
  height: 100%;
  width: 100%;
  margin: 15px;
}
.search-container-div {
  width: 90%;
  justify-content: end;
  padding-left: 25px;
  margin-bottom: 10px;
}
.search-input {
  width: 30%;
  height: 25px;
  font-size: 13px;
  border-radius: 8px;
  color: rgb(120, 120, 120);
  border: 1px solid rgb(180, 180, 180);
}
.customer-info-container-div {
  width: 90%;
  height: 80%;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 15px;
  justify-content: start;
  padding: 15px;
  /* margin: 15px; */
}
.header-div {
  width: 100%;
  justify-content: space-evenly;
  font-size: 18px;
}
.single-customer-div {
  width: 100%;
  justify-content: space-evenly;
  font-size: 13px;
}
.name-span {
  width: 150px;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 8px;
}
.steps-bycnum-span {
  width: 150px;
}
/* -------------------------------------------------SETTINGS--------------------- */
.tabs-container-div {
  font-size: 13px;
  width: 90%;
  margin-bottom: 10px;
}
.tab-div {
  flex: 1;
  height: 25px;
  border-radius: 8px;
  color: rgb(33, 30, 209);
  border: 1px solid rgb(33, 30, 209);
  cursor: pointer;
}
.tab-div:hover {
  background-color: rgba(46, 44, 44, 0.9);
  color: white;
  border: none;
}

.active-tab {
  border: none;
  color: white;
}

.delete-span {
  color: rgb(206, 67, 67);
}

/* home window change less than 1160px */
/* customer window change less than 1030px */
/* byc < 900 */
/* settings < 1080 */

/* --------------------------------home & bycs-------------------------------- */
@media (min-width: 940px) and (max-width: 1160px) {
  .spans-div {
    width: 80%;
  }
}
@media (max-width: 940px) {
  .right-menue-div {
    font-size: 15px;
  }
  .spans-div {
    width: 90%;
  }
  .search-input {
    width: 70%;
  }
}
@media (max-width: 965px) {
  .row-menu-icon-div {
    display: flex;
  }
  .right-menue-div {
    display: none;
  }
}
@media (max-width: 700px) {
  .name-span {
    border-radius: 8px;
  }
}
@media (max-width: 815px) {
  .right-spans-div {
    font-size: 12px;
  }
  .left-spans-div {
    font-size: 12px;
  }
}
@media (max-width: 415px) {
  .right-spans-div {
    font-size: 10px;
  }
  .left-spans-div {
    font-size: 10px;
  }
  .spans-div {
    width: 95%;
    padding: 1%;
  }
}
@media (max-width: 450px) {
  .tabs-container-div {
    font-size: 7px;
  }
}
/* --------------------------------Customer & Settings-------------------------------- */
@media (min-width: 450px) and (max-width: 1015px) {
  .tabs-container-div {
    font-size: 10px;
  }
}
@media (max-width: 1070px) {
  .header-div {
    font-size: 15px;
  }
}
@media (max-width: 990px) {
  .single-customer-div {
    font-size: 9px;
  }
}
@media (max-width: 636px) {
  .header-div {
    font-size: 10px;
  }
}
/* less than 572 hide row content */
</style>
