<template>
  <div class="parent-div flex-row">
    <div class="login-outer-container-div flex-row p-3" dir="rtl">
      <form
        class="login-form"
        @submit.prevent="this.goToUserPage"
        v-if="this.showLoginPage"
      >
        <input
          type="email"
          class="input-contr input-email form-control text-muted mb-2"
          placeholder="عنوان البريد"
          v-model="this.user.email"
          required
        />
        <input
          type="password"
          class="input-contr input-password form-control text-muted mb-2"
          placeholder="رقم التحقق"
          v-model="this.user.verfnumber"
          required
        />
        <label @click="this.createUsersForms" class="newuser-label mb-2">
          مستخدم جديد ؟</label
        >
        <button type="submit" class="btn-submit btn btn-success">
          تسجيل دخول
        </button>
      </form>
      <!-- ------------------------------regestreation form -------------------------------------- -->
      <!-- ------------------------------email Verfication -------------------------------------- -->
      <form
        class="regester-form m-3"
        @submit.prevent="this.sendVervNumber"
        v-if="this.showEmailVerf"
      >
        <div class="row p-0 m-0" v-if="!this.verfNumber">
          <div class="col">
            <label class="lbl email-label text-muted"> عنوان البريد</label>
            <span class="dot-span">:</span>
          </div>
          <div class="col">
            <input
              type="email"
              class="input-contr input-email form-control text-muted mb-2"
              placeholder="ادخل عنوان بريدك الخاص"
              v-model="this.user.email"
              required
            />
          </div>
        </div>
        <div class="flex-column p-0 m-0" v-if="this.verfNumber">
          <span class="lbl lbl-4digit-sent mb-2 text-muted">
            قم بإدخال رمز التحقق</span
          >
          <div class="col">
            <input
              type="text"
              class="input-contr input-user-verf form-control mb-2 text-muted"
              placeholder="ادخل رمز التحقق"
              required
            />
          </div>
        </div>
        <button type="submit" class="btn-submit btn btn-primary" id="getVerf">
          {{ !this.verfNumber ? "إرسال رمز التحقق" : "تحقق من الرمز" }}
        </button>
      </form>
      <!-- ------------------------------gel all user info and -------------------------------------- -->
      <!-- ------------------------------gel all user info and -------------------------------------- -->
      <!-- ------------------------------gel all user info and -------------------------------------- -->
      <!-- ------------------------------gel all user info and -------------------------------------- -->
      <form
        class="regester-form text-muted m-3"
        @submit.prevent="this.createNewUser"
        v-if="this.showFullRegesterInfo"
      >
        <div class="row p-0 m-0">
          <div class="col">
            <label class="lbl">عنوان البريد </label>
            <span class="dot-span">:</span>
          </div>
          <div class="col">
            <input
              type="text"
              class="input-contr input-name form-control mb-2"
              placeholder="قم بإدخال عنوان البريد"
              v-model="this.user.email"
              required
            />
          </div>
        </div>
        <div class="row p-0 m-0">
          <div class="col">
            <label class="lbl"> الأسم بالكامل </label>
            <span class="dot-span">:</span>
          </div>
          <div class="col">
            <input
              type="text"
              class="input-contr input-name form-control mb-2"
              placeholder="قم بإدخال الإسم رباعي"
              v-model="this.user.name"
              required
            />
          </div>
        </div>
        <div class="row p-0 m-0">
          <div class="col">
            <label class="lbl"> رقم الهوية </label>
            <span class="dot-span">:</span>
          </div>
          <div class="col">
            <input
              type="text"
              class="input-contr input-idnumber form-control mb-2"
              placeholder="ادخل رقم الهوية"
              v-model="this.user.idnumber"
              required
            />
          </div>
        </div>
        <div class="row p-0 m-0">
          <div class="col">
            <label class="lbl"> الهاتف </label>
            <span class="dot-span">:</span>
          </div>
          <div class="col">
            <input
              type="text"
              class="input-contr input-phone form-control mb-2"
              placeholder="ادخل رقم الهاتف"
              v-model="this.user.phone"
              required
            />
          </div>
        </div>
        <div class="row p-0 m-0">
          <div class="col">
            <label class="lbl"> عدد الدراجات </label>
            <span class="dot-span">:</span>
          </div>
          <div class="col rtl">
            <input
              type="text"
              class="input-contr input-bycnumber form-control mb-2"
              placeholder="عدد الدراجات التي ترغب بشرائها"
              v-model="this.contract.bycnumber"
              required
            />
          </div>
        </div>
        <div class="row p-0 m-0">
          <div class="col">
            <label class="lbl"> مستند الإيصال</label>
            <span class="dot-span">:</span>
          </div>
          <div class="col">
            <input
              type="file"
              class="input-contr input-file form-control mb-2"
              required
            />
          </div>
        </div>

        <button type="submit" class="btn-submit btn btn-success">
          حفظ و إنشاء حساب
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import {
  addNewCustomer,
  getUserInfo,
  addNewAdmin,
  sendVerfNum,
} from "../composable/modal.js";
export default {
  name: "Login-View",
  data() {
    return {
      showLoginPage: true,
      showEmailVerf: false,
      showFullRegesterInfo: false,
      verfNumber: "",
      user: {
        email: "",
        verfnumber: "",
        contracts: [],
      },
      contract: { bycnumber: "" },
    };
  },
  methods: {
    async goToUserPage() {
      try {
        const activeUserID = await getUserInfo(
          this.user.email,
          String(this.user.verfnumber)
        );
        if (activeUserID.admin) {
          this.$router.push({
            name: "admin",
            params: { id: activeUserID._id },
          });
        } else {
          this.$router.push({
            name: "home",
            params: { id: activeUserID._id },
          });
        }
        // await addNewAdmin({});
      } catch (err) {
        console.log(err.message);
      }
    },
    createUsersForms() {
      this.showLoginPage = false;
      this.showEmailVerf = true;
    },
    async sendVervNumber(e) {
      try {
        if (!this.verfNumber) {
          // 1 greate random number of 4 degit and send it to email
          this.verfNumber = Math.floor(
            Math.random() * (9999 - 2000 + 1) + 2000
          );
          // verf numver less than 2000 it shoud be admin..
          await sendVerfNum({
            receverMail: this.user.email,
            verfNumber: String(this.verfNumber),
          });
          // 2 compare number send to email and random number created.
          // 3 if thy equal save email to new user data and then go to next regsetration page..
        } else {
          const userVerfNumber =
            document.querySelector(".input-user-verf").value;
          if (Number(userVerfNumber) === Number(this.verfNumber)) {
            console.log("true code..");
            this.showEmailVerf = false;
            this.showFullRegesterInfo = true;
            this.user.verfnumber = this.verfNumber;
          } else {
            console.log("wrong code..");
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    async createNewUser() {
      try {
        // add contract to user...
        //create random contract number...
        this.contract.contractnumber = Math.floor(
          Math.random() * (999999 - 100000 + 1) + 100000
        );

        this.contract.modbuye = this.contract.bycnumber;
        this.contract.docfile = document.querySelector(".input-file").files[0];

        this.user.contracts.push(this.contract);

        const formdata = new FormData();
        formdata.append("name", this.user.name);
        formdata.append("idnumber", this.user.idnumber);
        formdata.append("phone", this.user.phone);
        formdata.append("email", this.user.email);
        formdata.append("verfnumber", this.user.verfnumber);

        formdata.append("contractnumber", this.contract.contractnumber);
        formdata.append("bycnumber", this.contract.bycnumber);
        formdata.append("modbuye", this.contract.modbuye);
        formdata.append("docfile", this.contract.docfile);

        await addNewCustomer(formdata);

        // if execute true go call function goToUserPage();
        this.goToUserPage();
        this.user = { email: "", verfnumber: "" };
        this.contract = {};
        document.querySelector(".input-file").value = null;
      } catch (err) {
        console.log(err.message);
        console.log("customer exist..");
      }
    },
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

.parent-div {
  height: 100vh;
  width: 100%;
  background-image: var(--gradient-logincontainer-primary);
}
.login-outer-container-div {
  height: 70%;
  width: 70%;
  border: none;
  border-radius: 15px;
  font-family: "Noto Kufi Arabic", sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
  /* background-image: var(--gradient-logincontainer-primary); */
}
/* ---------------------------------------LOGIN FORM--------------------------------------------------- */
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
}
.input-contr {
  font-size: 13px;
  height: 30px;
  width: 250px;
}
.input-file {
  font-size: 13px;
}
::-webkit-input-placeholder {
  color: rgb(160, 160, 160);
}
.lbl {
  min-width: 125px;
  font-size: 14px;
}
.lbl-4digit-sent {
  font-size: 12px;
}
.newuser-label {
  font-size: 12px;
  color: rgb(33, 30, 209);
  cursor: pointer;
}
.btn-submit {
  margin-top: 7px;
  padding: 2px 10px 2px 10px;
  font-size: 13px;
}

/* ---------------------------------------REGESTER FORM--------------------------------------------------- */
.regester-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

/* ---------------------------------------MEDIA QUERY--------------------------------------------------- */

@media (min-width: 381px) and (max-width: 702px) {
  .input-contr {
    width: 200px;
    height: 27px;
    font-size: 12px;
  }
  .lbl {
    font-size: 12px;
  }
}
@media (max-width: 380px) {
  .input-contr {
    width: 170px;
    height: 25px;
    font-size: 10.5px;
  }
  .lbl {
    font-size: 11px;
  }
  .btn-submit {
    font-size: 11px;
  }
  .newuser-label {
    font-size: 10px;
  }
}
@media (max-width: 705px) {
  .dot-span {
    opacity: 0;
  }
}
</style>
