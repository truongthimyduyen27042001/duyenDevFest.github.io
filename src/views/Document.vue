<template>
  <div class="document-container">
    <div class="document__left">
      <sliderbar />
    </div>
    <div class="document__right">
      <miniNav
        :statusContract="statusContract"
        v-on:changeStatus="setStatus($event)"
      />
      <div
        class="listContract-container"
        v-for="contract in listChoiceContract"
        :key="contract.id"
      >
        <boxInMain :contract="contract" />
      </div>
    </div>
  </div>
</template>

<script>
import sliderbar from "../components/Slidebar.vue";
import miniNav from "../components/MiniNav.vue";
import boxInMain from "../components/BoxInMain.vue";
export default {
  name: "document",
  components: {
    sliderbar,
    miniNav,
    boxInMain,
  },
  data() {
    return {
      statusContract: "All",
      listContract: [
        {
          id: "contract1",
          name_contract: "Shareholder AgreementRRRRRRR",
          time_contract: "2009",
          type_contract: "Short tearm",
          company: {
            name: "Paradox",
            role: "lorem ipsum dolor sit atmet consectur adiciping elit",
          },
          employee: {
            name: "Nguyen Khanh Linh",
            role: "Thuc tap sinh",
          },
          status_contract: "Signed",
        },
        {
          id: "contract1",
          name_contract: "Shareholder AgreementQQQ",
          time_contract: "2019",
          type_contract: "Short tearm",
          company: {
            name: "Paradox",
            role: "lorem ipsum dolor sit atmet consectur adiciping elit",
          },
          employee: {
            name: "Duyennnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
            role: "Thuc tap sinh",
          },
          status_contract: "Draft",
        },
        {
          id: "contract1",
          name_contract: "Shareholder AgreementAAA",
          time_contract: "2010",
          type_contract: "Long tearm",
          company: {
            name: "Paradox",
            role: "lorem ipsum dolor sit atmet consectur adiciping elit",
          },
          employee: {
            name: "Le Tuan",
            role: "Thuc tap sinh",
          },
          status_contract: "Pending",
        },
        {
          id: "contract1",
          name_contract: "Shareholder AgreementBBBB",
          time_contract: "2010",
          type_contract: "Long tearm",
          company: {
            name: "Paradox",
            role: "lorem ipsum dolor sit atmet consectur adiciping elit",
          },
          employee: {
            name: "Truong My Duyen",
            role: "Thuc tap sinh",
          },
          status_contract: "Signed",
        },
      ],
    };
  },
  methods: {
    setStatus: function (status) {
      this.statusContract = status;
    },
  },
  computed: {
    listChoiceContract() {
      if (this.statusContract === "All") return this.listContract;
      if (this.statusContract === "Draft") {
        var result = this.listContract.filter(
          (item) => item.status_contract === "Draft"
        );
        return result;
      } else if (this.statusContract === "Pending") {
        var listPending = this.listContract.filter(
          (item) => item.status_contract === "Pending"
        );
        return listPending;
      } else if (this.statusContract === "Signed") {
        var listSigned = this.listContract.filter(
          (item) => item.status_contract === "Signed"
        );
        return listSigned;
      } else return "sdsdjsjdi";
    },
  },
};
</script>

<style scoped>
.document-container {
  display: flex;
}
.document__right {
  width: 100%;
}
</style>
