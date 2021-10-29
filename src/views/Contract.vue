<template>
  <div class="container">
    <div class="header mb-5">
      <h1>Khởi tạo hợp đồng</h1>
      <button type="button" class="btn btn-primary" @click="getContract()">
        Khởi tạo
      </button>
    </div>
    <div class="contract">
      <div class="contract-header">
        <h1>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h1>
        <p class="text-center">Độc lập – Tự do – Hạnh phúc</p>
      </div>
      <div class="contract-date">
        Ngày <input type="number" />, Tháng<input type="number" />, Năm<input
          type="number"
        />
      </div>
      <div class="contract-title">
        <h1>Hợp đồng lao động</h1>
        <span class="contract-number">Số: <input type="text" /></span>
      </div>
      <div class="contract-container">
        <p>Căn cứ Bộ luật Lao động 2019</p>

        <p>Căn cứ nhu cầu và năng lực của hai bên</p>
        <p><span>Hôm nay, tại:</span><input type="text" name="" /></p>
        <p>Chúng tôi gồm:</p>
        <div style="display: flex; flex-wrap: wrap">
          <div
            class="list-info form-group d-flex text-align-start"
            v-for="(question, index) in myContract.questions"
            :key="'question-' + index"
            :style="question.style"
          >
            <label for="">{{ question.question }}</label>
            <input
              type="text"
              :disabled="question.disabled"
              v-model="question.answer"
            />
          </div>
        </div>
        <p>
          Sau khi thỏa thuận, hai bên thống nhất ký Hợp đồng lao động (HĐLĐ) với
          các điều khoản sau đây:
        </p>
        <p class="fw-bold">Điều 1: Điều khoản chung</p>
        <p><span>1. Loại HĐLĐ:</span><input type="text" name="" /></p>
        <p><span>2. Thời hạn HĐLĐ:</span><input type="text" name="" /></p>
        <p><span>3. Thời điểm bắt đầu:</span><input type="text" name="" /></p>
        <p>
          <span>4. Thời điểm kết thúc (nếu có):</span
          ><input type="text" name="" />
        </p>
        <p><span>5. Địa điểm làm việc:</span><input type="text" name="" /></p>
        <p>
          <span>6. Bộ phận công tác: Phòng</span><input type="text" name="" />
        </p>
        <p>
          <span>7. Chức danh chuyên môn (vị trí công tác):</span
          ><input type="text" name="" />
        </p>
        <p>
          <span>8. Nhiệm vụ công việc như sau:</span
          ><input type="text" name="" />
        </p>
        <p>
          <span> - Chịu sự điều hành trực tiếp của ông/bà::</span
          ><input type="text" name="" />
        </p>
        <p>
          - Thực hiện công việc theo đúng chức danh chuyên môn của mình dưới sự
          quản lý, điều hành của người có thẩm quyền.
        </p>
        <p>
          - Phối hợp cùng với các bộ phận, phòng ban khác trong Công ty để phát
          huy tối đa hiệu quả công việc.
        </p>
        <p>
          - Hoàn thành những công việc khác tùy thuộc theo yêu cầu của Công ty
          và theo quyết định của Ban Giám đốc.
        </p>
        <div class="fw-bold text-left">Điều 2: Chế độ làm việc</div>
        <p><span>1. Thời gian làm việc:</span><input type="text" name="" /></p>
        <p>
          2. Do tính chất công việc, nhu cầu kinh doanh hay nhu cầu của tổ
          chức/bộ phận, Công ty có thể cho áp dụng thời gian làm việc linh hoạt.
          Những người được áp dụng thời gian làm việc linh hoạt có thể không
          tuân thủ lịch làm việc cố định bình thường mà làm theo ca, nhưng vẫn
          phải đảm bảo đủ số giờ làm việc theo quy định.
        </p>
        <p>
          3. Thiết bị và công cụ làm việc sẽ được Công ty cấp phát tùy theo nhu
          cầu của công việc.
        </p>
        <p>
          4. Điều kiện an toàn và vệ sinh lao động tại nơi làm việc theo quy
          định của pháp luật hiện hành.
        </p>
        <p class="fw-bold">Điều 3: Quyền và nghĩa vụ của người lao động</p>
        <p class="fw-bold">1. Quyền của người lao động</p>
        <p>a) Tiền lương và phụ cấp:</p>

        <p>
          <span>- Mức lương/Thù lao chính:</span><input type="text" name="" />
          <span> VNĐ/tháng </span>
        </p>
        <p>
          <span>- Phụ cấp trách nhiệm (nếu có):</span
          ><input type="text" name="" /> <span> VNĐ/tháng </span>
        </p>
        <p>
          - Phụ cấp hiệu suất công việc (nếu có): Theo đánh giá của quản lý.
        </p>
        <p>- Lương hiệu quả (nếu có): Theo quy định của phòng ban, công ty.</p>
        <p>
          - Công tác phí: Tùy từng vị trí, người lao động được hưởng theo quy
          định của công ty.
        </p>
        <p><span>- Hình thức trả lương:</span><input type="text" name="" /></p>
        <p>b) Các quyền lợi khác:</p>
        <p>
          - Khen thưởng: Người lao động được khuyến khích bằng vật chất và tinh
          thần khi có thành tích trong công tác hoặc theo quy định của công ty.
        </p>
        <p>
          - Chế độ nâng lương: Theo quy định của Nhà nước và Quy chế tiền lương
          của Công ty.
        </p>
        <p>- Chế độ nghỉ: Theo quy định chung của Nhà nước.</p>
        <p><span>+ Nghỉ hàng tuần</span><input type="text" name="" /></p>
        <p>
          <span
            >+ Nghỉ hàng năm: Những nhân viên được ký Hợp đồng chính thức và có
            thâm niên công tác 12 tháng thì sẽ được nghỉ phép năm có hưởng lương
            (mỗi năm 12 ngày phép). Nhân viên có thâm niên làm việc dưới 12
            tháng thì thời gian nghỉ hằng năm được tính theo tỷ lệ tương ứng với
            số thời gian làm việc.
          </span>
        </p>

        <p>+ Nghỉ ngày Lễ: Các ngày nghỉ lễ theo quy định của pháp luật.</p>
        <p>
          <span>- Chế độ Bảo hiểm theo quy định của Nhà nước:</span
          ><input type="text" name="" />
        </p>
        <p><span>- Chế độ phúc lợi:</span><input type="text" name="" /></p>
        <p>
          - Các chế độ được hưởng: Người lao động được hưởng các chế độ ngừng
          việc, trợ cấp thôi việc hoặc bồi thường theo quy định của pháp luật
          hiện hành.
        </p>
        <p>
          - Được đơn phương chấm dứt Hợp đồng theo quy định của pháp luật và nội
          quy Công ty.
        </p>
        <p class="fw-bold">2. Nghĩa vụ của người lao động</p>
        <p>
          a) Thực hiện công việc với hiệu quả cao nhất theo sự phân công, điều
          hành của người có thẩm quyền.
        </p>
        <p>
          b) Hoàn thành công việc được giao và sẵn sàng chấp nhận mọi sự điều
          động khi có yêu cầu.
        </p>
        <p>
          c) Nắm rõ và chấp hành nghiêm túc kỷ luật lao động, an toàn lao động,
          vệ sinh lao động, phòng cháy chữa cháy, văn hóa công ty, nội quy lao
          động và các chủ trương, chính sách của Công ty.
        </p>
        <p>
          d) Bồi thường vi phạm và vật chất theo quy chế, nội quy của Công ty và
          pháp luật Nhà nước quy định.
        </p>
        <p>
          e) Tham dự đầy đủ, nhiệt tình các buổi huấn luyện, đào tạo, hội thảo
          do Bộ phận hoặc Công ty tổ chức.
        </p>
        <p>
          f) Thực hiện đúng cam kết trong hợp đồng lao động và các thỏa thuận
          bằng văn bản khác với Công ty.
        </p>
        <p>g) Tuyệt đối thực hiện cam kết bảo mật thông tin.</p>
        <p>
          h) Đóng các loại bảo hiểm, thuế, phí đầy đủ theo quy định của pháp
          luật.
        </p>
        <p class="fw-bold">
          Điều 4: Quyền và nghĩa vụ của người sử dụng lao động
        </p>
        <p class="fw-bold">1. Quyền của người sử dụng lao động</p>
        <p>
          a) Điều hành người lao động hoàn thành công việc theo Hợp đồng (bố
          trí, điều chuyển công việc cho người lao động theo đúng chức năng
          chuyên môn).
        </p>
        <p>
          b) Có quyền tạm thời chuyển người lao động sang làm công việc khác,
          ngừng việc và áp dụng các biện pháp kỷ luật theo quy định của pháp
          luật hiện hành và theo nội quy Công ty trong thời gian Hợp đồng còn
          giá trị.
        </p>
        <p>
          c) Tạm hoãn, chấm dứt Hợp đồng, kỷ luật người lao động theo đúng quy
          định của pháp luật và nội quy Công ty.
        </p>
        <p>
          d) Có quyền đòi bồi thường, khiếu nại với cơ quan liên đới để bảo vệ
          quyền lợi của mình nếu người lao động vi phạm pháp luật hay các điều
          khoản của hợp đồng này.
        </p>
        <p class="fw-bold">2. Nghĩa vụ của người sử dụng lao động</p>
        <p>
          - Thực hiện đầy đủ những điều kiện cần thiết đã cam kết trong Hợp đồng
          lao động để người lao động đạt hiệu quả công việc cao. Bảo đảm việc
          làm cho người lao động theo Hợp đồng đã ký.
        </p>
        <p>
          - Thanh toán đầy đủ, đúng thời hạn các chế độ và quyền lợi cho người
          lao động.
        </p>
        <p class="fw-bold">Điều 5: Những thỏa thuận khác</p>
        <p>
          Trong quá trình thực hiện hợp đồng nếu một bên có nhu cầu thay đổi nội
          dung trong Hợp đồng phải báo cho bên kia trước ít nhất 03 ngày và ký
          kết bản Phụ lục Hợp đồng theo quy định của pháp luật. Trong thời gian
          tiến hành thỏa thuận hai bên vẫn tuân theo Hợp đồng lao động đã ký
          kết. Người lao động đọc kỹ, hiểu rõ và cam kết thực hiện các điều
          khoản và quy định ghi tại Hợp đồng lao động.
        </p>
        <p class="fw-bold">Điều 6: Điều khoản thi hành</p>
        <p>
          Những vấn đề về lao động không ghi trong Hợp đồng này thì áp dụng theo
          quy định của thỏa ước tập thể, nội quy lao động và pháp luật lao động.
        </p>
        <p>
          Khi hai bên ký kết Phụ lục Hợp đồng lao động thì nội dung của Phụ lục
          Hợp đồng lao động cũng có giá trị như các nội dung của bản hợp đồng
          này.
        </p>
        <p class="last-row">
          <span>Hợp đồng này được lập thành</span>
          <input type="text" class="width-40" />
          <span> bản có giá trị pháp lý như nhau, mỗi bên giữ </span>
          <input type="text" class="width-40" />
          <span>bản./. </span>
        </p>
      </div>
      <div class="contract-footer">
        <div class="contract-sign">
          <h1>NGƯỜI SỬ DỤNG LAO ĐỘNG</h1>
          <span> (Ký và ghi rõ họ tên) </span>
          <input type="text" />
        </div>
        <div class="contract-sign">
          <h1>NGƯỜI LAO ĐỘNG</h1>
          <span> (Ký và ghi rõ họ tên) </span>
          <input type="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _cloneDeep from "lodash/cloneDeep";
// import http from "../api/http-common.js";
export default {
  name: "contract",
  model: {
    prop: "contract",
    event: "update",
  },
  props: {
    contract: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.myContract = _cloneDeep(this.contract);
  },
  data() {
    return {
      myContract: {},
    };
  },
  watch: {
    myContract: {
      handler() {
        this.updateContract();
      },
      deep: true,
    },
  },
  methods: {
    updateContract() {
      this.$emit("update", this.myContract);
    },
    getContract() {
    },
  },
};
</script>

<style scoped>
.contract-container {
  width: 900px;
  margin: 0 auto;
}
.header {
  height: 5rem;
}
.header h1 {
  font-size: 2.4rem;
  text-align: center;
}
.header-option {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
.header-option__item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-option__item input {
  margin-right: 10px;
}

.header-option__item label {
  font-size: 1.4rem;
}
.contract {
  border-radius: 10px;
  background: #e4e4e4;
  padding: 40px 0;
}
.contract-header {
  text-align: center;
}
.contract-header h1 {
  font-size: 18px;
  margin-bottom: 5px;
}
.contract-header P {
  font-size: 14px;
  text-decoration: underline;
}
.contract-date {
  text-align: right;
  margin-right: 40px;
}
.contract-date input {
  padding: 0.2rem 0.6rem;
  width: 40px;
}
.contract-date input:nth-child(3) {
  width: 60px;
}
.contract-title {
  margin-top: 10px;
  text-align: center;
}
.contract-title h1 {
  font-size: 24px;
  margin-bottom: 5px;
}
.contract-container {
  width: 80%;
  margin: 0 auto;
}
.contract-container p {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
.contract-container p span {
  display: inline-block;
}
input {
  flex-grow: 1;
  flex-shrink: 1;
  outline: none;
  border: none;
  padding: 0 10px;
  margin-left: 10px;
  background-color: transparent;
  border-bottom: 1px dotted #000;
}
.fw-bold {
  font-size: 16px;
  font-weight: 700;
}

.width-40 {
  width: 30px;
}
.last-row {
  display: flex;
}
.contract-footer {
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}
.contract-sign {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.contract-sign span {
  margin: 10px 0;
}
.contract-footer h1 {
  font-size: 18px;
}
.contract-sign input {
  margin-top: 50px;
  font-size: 24px;
  text-align: center;
}
p {
  text-align: justify;
}
.text-center {
  text-align: center;
}
</style>
