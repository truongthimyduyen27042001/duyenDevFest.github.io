<template>
  <div class="box">
    <svg class="checkbox-symbol">
      <symbol id="check" viewbox="0 0 12 10">
        <polyline
          points="1.5 6 4.5 9 10.5 1"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></polyline>
      </symbol>
    </svg>

    <div class="checkbox-container">
      <input class="checkbox-input" id="apples" type="checkbox" />
      <label class="checkbox" for="apples">
        <span>
          <svg width="12px" height="10px">
            <use xlink:href="#check"></use>
          </svg>
        </span>
      </label>
    </div>
    <div class="box-content">
      <h4 class="box-heading">{{ contract.name_contract }}</h4>
      <p class="box-desc">
        {{contract.numberContract}}
      </p>
      <div class="box-tags">
      <div class="box-tag bg-dark">
          <i class="fas fa-tag"></i>
          <p>{{ contract.position }}</p>
        </div>
        <div class="box-tag bg-dark">
          <i class="fas fa-tag"></i>
          <p>{{ contract.type_contract }}</p>
        </div>
        <div class="box-tag bg-dark">
          <i class="fas fa-tag"></i>
          <p>{{contract.time_contract}}</p>
        </div>
      </div>
    </div>
    <div class="box-right">
      <div class="box-right__item">
        <div class="box-right__icon">
          <i class="fas fa-arrow-right"></i>
          <i class="fas fa-lock"></i>
        </div>
        <div class="box-right__content">
          <h3 class="box-right__heading">{{ contract.company.name }}</h3>
          <p class="box-right__desc">
            {{ contract.company.role }}
          </p>
        </div>
      </div>
      <div class="box-right__item">
        <div class="box-right__icon">
          <i class="far fa-eye"></i>
          <i class="fas fa-lock"></i>
        </div>
        <div class="box-right__content">
          <h3 class="box-right__heading">{{ contract.employee.name }}</h3>
          <p class="box-right__desc">
            {{ contract.employee.role }}
          </p>
        </div>
      </div>
    </div>
    <div class="box-right__button">
      <button class="btn">{{ contract.status_contract }}</button>
      <i class="fas fa-ellipsis-v"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "boxInMain",
  props: ["contract"],
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.box {
  width: 90%;
  padding: 0.2rem 1.4rem;
  display: flex;
  margin: 0 auto;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  margin-bottom: 30px;
  cursor: pointer;
}
.box-right__content {
  text-align: left;
  width: 20rem;
}
.box-right__content h3 {
  font-size: 1.4rem;
}
.checkbox-container {
  box-sizing: border-box;
  color: #222;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  margin: 0 0.8rem;
}

.checkbox-container * {
  box-sizing: border-box;
}

.checkbox-input {
  position: absolute;
  visibility: hidden;
}

.checkbox {
  user-select: none;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
}

.checkbox:not(:last-child) {
  margin-right: 6px;
}

.checkbox:hover {
  background: rgba(0, 119, 255, 0.06);
}

.checkbox span {
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}

.checkbox span:first-child {
  position: relative;
  flex: 0 0 18px;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  transform: scale(1);
  border: 1px solid #cccfdb;
  transition: all 0.3s ease;
}

.checkbox span:first-child svg {
  position: absolute;
  top: 3px;
  left: 2px;
  fill: none;
  stroke: #fff;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transform: translate3d(0, 0, 0);
}

.checkbox span:last-child {
  padding-left: 8px;
  line-height: 18px;
}

.checkbox:hover span:first-child {
  border-color: #4e9f3d;
}

.checkbox-input:checked + .checkbox span:first-child {
  background: #4e9f3d;
  border-color: #4e9f3d;
  animation: zoom-in-out 0.3s ease;
}

.checkbox-input:checked + .checkbox span:first-child svg {
  stroke-dashoffset: 0;
}

@keyframes zoom-in-out {
  50% {
    transform: scale(0.9);
  }
}

.checkbox-symbol {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}

.box-content {
  max-width: 30rem;
}
.box-heading {
  text-align: left;
  font-size: 1rem;

  font-weight: 700;
}
.box-desc {
  margin: 0.4rem 0;
  font-size: 0.8rem;
  line-height: 1.4;
  text-align: left;
}
.box-tags {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.box-tag {
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 0.2rem;
  margin: 0 0.2rem;
  border: 1px solid #e0e0e0;
  background: #1d163f!important;
}
.bg-dark {
  background: #e0e0e0;
  color: #a7a7a7a2;
}
.cl-dark {
  color: rgb(255, 255, 255);
  font-weight: 700;
}
.tag-center {
  padding: 0.3rem 0.4rem;
}
.box-tag i {
  margin-right: 0.5rem;
}

.box-right {
  flex-shrink: 1;
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
}
.box-right i {
  color: #49c79f!important;

}
.box-right__heading {
  font-size: 1rem;
}
.box-right__desc {
  font-size: 0.8rem;
}
.box-right__item {
  display: flex;
  align-items: center;
  margin: 0.8rem 0;
}
.box-right__icon {
  display: flex;
}
.box-right__icon i {
  font-size: 0.8rem;
  margin-right: 1rem;
}
.box-right__icon i:nth-child(1) {
  margin-right: 0.4rem;
}
.box-right__button {
  margin-left: auto;
  align-items: center;
  display: flex;
}
.btn {
  padding: 0.3rem 0.8rem;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #6ee65746;
  color: #4e9f3d;
  font-weight: 700;
  font-size: 0.8rem;
  width: 5rem;
  margin-right: 0.4rem;
}
.box-right__button i {
  margin-right: 1.2rem;
  color: #a7a7a7;
}
</style>
