<template>
  <div class="outer-approval-div" @click="this.showHideApprovalDiv">
    <div class="approval-div">
      <span class="text-muted">
        it's not going to save your data in our database becaouse of su-domain ,
        if you are programmer ou know what it's mean, we need to save you data
        in your local brouser sorgae if agree please press approve, if not the
        proccess must be cancele
      </span>
      <div class="bottom-div">
        <button @click="this.showHideApprovalDiv" class="cancel-btn">
          Cancel
        </button>
        <button @click="this.$emit('okApproved')" class="approve-btn">
          Approve
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showHideApprovalDiv() {
      this.$emit("showHideApprovalDiv");
    },
  },
};
</script>

<style scoped>
.outer-approval-div {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(1px);
}
.approval-div {
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 17px;
  font-family: "Tauri";
  padding: 10px 30px 10px 30px;
  margin: 10px;
  min-height: 250px;
  max-width: 800px;
  border: none;
  border-radius: 13px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.bottom-div {
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
}
.approve-btn,
.cancel-btn {
  border: none;
  padding: 5px 2px 5px 2px;
  margin: 0 5px 0 5px;
  width: 100px;
  border-radius: 12px;
  color: white;
  background-color: var(--color-primary-darker);
}
.approve-btn:hover {
  background-color: var(--color-primary);
}
.cancel-btn {
  background-color: var(--color-tertiary-darker);
}
.cancel-btn:hover {
  background-color: var(--color-tertiary);
}

@media (min-width: 630px) and (max-width: 900px) {
  .approval-div {
    max-width: 600px;
    font-size: 15px;
  }
}
@media (max-width: 630px) {
  .approval-div {
    max-width: 500px;
    font-size: 15px;
  }
}
</style>