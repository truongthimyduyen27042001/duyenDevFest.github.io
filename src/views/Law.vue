<template>
  <div class="profile-container d-flex">
    <ul class="sliderbar" style="width: 20%; height: fit-content">
      <li class="header item">Account User</li>
      <li class="item active">
        <i class="el-icon-user"></i> Persional Information
      </li>
      <li class="item"><i class="el-icon-edit"></i> Login &amp; Password</li>
      <li class="item"><i class="el-icon-setting"></i> Membership Settings</li>
      <li class="item"><i class="el-icon-key"></i> Logout</li>
    </ul>
    <div class="personalInfo text-left ml-5" style="width: 80%">
      <div class="content"><h3>Personal Information</h3></div>
      <el-row class="personal-info d-flex">
        <el-col :span="12"
          ><div class="grid-content d-flex bg-purple-dark">
            <div class="person-img">
              <img
                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/248345510_2801240470168006_2527653137861523928_n.jpg?_nc_cat=102&_nc_rgb565=1&ccb=1-5&_nc_sid=825194&_nc_ohc=z8Ff-4rpARAAX9m-f55&_nc_ht=scontent.fsgn2-5.fna&oh=43d921acb9e83175e74af980ec1879bd&oe=61A32034"
                alt=""
              />
            </div>
            <div class="perosn-name">
              <div class="name">Truong my duyen</div>
              <div class="person-change">
                <router-link to="/">Change your avatar</router-link>
              </div>
            </div>
          </div></el-col
        >
        <el-col :span="12" class="change-info"
          ><div class="grid-content bg-purple-dark">
            <el-button type="primary" plain>Change your information</el-button>
          </div></el-col
        >
      </el-row>
      <div class="header">Account Information</div>
      <el-row class="personal-role" :gutter="14">
        <el-col :span="11" class="item-role"
          ><div class="grid-content bg-purple">
            <div class="choice">
              <el-radio v-model="radio" label="1">Option A</el-radio>
              <div class="role">Personal Account</div>
              Empoyee
            </div>
            <div class="img-role"><i class="el-icon-user"></i></div></div
        ></el-col>
        <el-col :span="12" class="item-role"
          ><div class="grid-content bg-purple-light">
            <div class="choice">
              <el-radio v-model="radio" label="1">Option A</el-radio>
              <div class="role">Personal Account</div>
              Empoyee
            </div>
            <div class="img-role"><i class="el-icon-user"></i></div></div
        ></el-col>
      </el-row>
      <div class="list-info">
        <div
          class="item-info"
          v-for="(question, index) in employeeQuestions"
          :key="'question-' + index"
          style="display: flex; flex-direction: column"
        >
          <label for="" style="margin-top: 1em">{{ question.label }}</label>
          <el-input
            placeholder="Please input"
            style="width: 45em"
            v-model="input"
          ></el-input>
        </div>
        <el-button type="primary" style="margin-top: 2em" plain
          >Xác nhận</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Law",
  data() {
    return {
      employeeQuestions: [
        {
          key: "employee_name",
          label: "Bên B (Người lao động)",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          key: "employee_dateOfBirth",
          label: "Ngày sinh nhật",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          key: "employee_Sex",
          label: "Giới tính",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          key: "empoyee_address",
          label: "Địa chỉ",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          key: "employee_CMND",
          label: "Số chứng minh nhân dân",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          key: "employee_dateConfirm",
          label: "Ngày xác nhận",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          key: "employee_level",
          label: "Trình độ",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
        {
          key: "employee_major",
          label: "Chuyên ngành",
          answer: "",
          checkAns: true,
          isRequired: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-container {
  padding: 50px;
  background-color: #f4f6f8;
  .sliderbar {
    list-style: none;
    text-align: left;
    background: #fff;
    border-radius: 10px;
    .header {
      padding: 20px 30px;
      border-bottom: 1px solid #e8e9ea;
    }
    .item {
      padding: 15px 30px;
      cursor: pointer;
      text-align: bold;
      font-weight: 700;
      font-size: 17px;
      i {
        margin-right: 5px;
      }
    }
    .active {
      background-color: #f9fbfc;
    }
    .item:hover {
      background-color: #f9fbfc;
    }
  }
  .personalInfo {
    padding: 20px;
    border-radius: 10px;
    background: #fff;
    .content {
      padding: 20px 0px;
    }
    .personal-info {
      padding: 10px;
      border: 1px solid #e8e9ea;
      border-radius: 10px;
      .person-img {
        img {
          width: 80px;
          border-radius: 50%;
        }
        margin-right: 10px;
      }
      .person-name {
        margin: auto;
      }
      .change-info {
        display: flex;
        justify-content: end;
        align-items: center;
      }
    }
  }
  .personal-role {
    .item-role {
      padding: 10px;
      border: 1px solid #e8e9ea;
      border-radius: 10px;
      .grid-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .choice {
      .role {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
}
.list-info {
  padding: 30px 0px;
  .item-info {
    width: fit-content;
  }
}
.header {
  padding: 30px 0px;
  font-size: 30px;
  font-weight: 600;
}
</style>
