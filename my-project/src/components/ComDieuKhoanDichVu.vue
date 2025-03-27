<template>
  <div class="intro-container">
    <h1 class="title">Điều Khoản Dịch Vụ</h1>
    <div class="intro-content">
      <p class="intro-paragraph">
        Chào mừng bạn đến với <strong class="brand">ZikClothes</strong>! Dưới đây là các điều khoản dịch vụ mà bạn cần biết khi sử dụng dịch vụ của chúng tôi.
      </p>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-file-contract"></i> 1. Chấp Nhận Điều Khoản</h2>
      <p class="section-paragraph">
        Khi bạn truy cập hoặc sử dụng dịch vụ của chúng tôi, bạn đồng ý với các điều khoản và điều kiện này. Nếu bạn không đồng ý, vui lòng không sử dụng dịch vụ.
      </p>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-sync"></i> 2. Thay Đổi Điều Khoản</h2>
      <p class="section-paragraph">
        Chúng tôi có quyền thay đổi, điều chỉnh hoặc cập nhật các điều khoản này bất cứ lúc nào. Những thay đổi sẽ có hiệu lực ngay khi được công bố trên trang web.
      </p>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-user-check"></i> 3. Quyền Sử Dụng</h2>
      <p class="section-paragraph">
        Bạn đồng ý sử dụng dịch vụ của chúng tôi chỉ cho mục đích hợp pháp và theo các điều khoản này. Bạn không được sử dụng dịch vụ để vi phạm pháp luật hoặc xâm phạm quyền lợi của người khác.
      </p>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-user-shield"></i> 4. Tài Khoản Người Dùng</h2>
      <p class="section-paragraph">
        Bạn có trách nhiệm bảo mật thông tin tài khoản của mình và chịu trách nhiệm về mọi hoạt động xảy ra trên tài khoản đó. Nếu bạn phát hiện bất kỳ hoạt động không hợp lệ nào, vui lòng thông báo ngay cho chúng tôi.
      </p>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-credit-card"></i> 5. Chính Sách Thanh Toán</h2>
      <p class="section-paragraph">
        Tất cả giao dịch đều phải được thanh toán đầy đủ. Chúng tôi chấp nhận nhiều hình thức thanh toán, và bạn chịu trách nhiệm đảm bảo rằng thông tin thanh toán của bạn là chính xác và đầy đủ.
      </p>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-ban"></i> 6. Hủy Bỏ Đơn Hàng</h2>
      <p class="section-paragraph">
        Bạn có quyền hủy bỏ đơn hàng trong vòng 24 giờ sau khi đặt hàng. Sau thời gian này, đơn hàng sẽ được xử lý và không thể hủy.
      </p>
    </div>

    <div class="section-block contact-section">
      <h2 class="section-title"><i class="fas fa-envelope"></i> 7. Liên Hệ</h2>
      <p class="section-paragraph">
        Nếu bạn có bất kỳ câu hỏi nào về điều khoản dịch vụ, vui lòng liên hệ với chúng tôi:
      </p>
      <div class="contact-info">
        <p><i class="fas fa-envelope"></i> Email: <strong>zikstore@gmail.com</strong></p>
        <p><i class="fas fa-phone"></i> Điện thoại: <strong>0123-456-789</strong></p>
      </div>
    </div>

    <div class="final-block">
      <p class="final-paragraph">
        Cảm ơn bạn đã chọn <strong class="brand">ZikClothes</strong>. Chúng tôi mong muốn mang đến cho bạn trải nghiệm mua sắm tuyệt vời!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComDieuKhoanDichVu",
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  }
};
</script>

<style scoped>
.intro-container {
  font-family: 'Roboto', sans-serif;
  color: #333;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  margin: 30px auto;
  max-width: 1200px;
}

.title {
  font-size: 52px;
  color: #1a73e8;
  text-align: center;
  padding-top: 40px;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(45deg, #1a73e8, #34a853);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.intro-content {
  background: linear-gradient(135deg, #f5f9ff 0%, #ecf4ff 100%);
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.intro-paragraph, .section-paragraph {
  font-size: 18px;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 20px;
  color: #444;
}

.section-block {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.section-block:hover {
  transform: translateY(-5px);
}

.section-title {
  font-size: 28px;
  color: #1a73e8;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-title i {
  color: #34a853;
}

.contact-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
}

.contact-info i {
  color: #1a73e8;
}

.final-block {
  text-align: center;
  margin-top: 40px;
}

.final-paragraph {
  text-align: center;
  font-size: 22px;
  color: #1a73e8;
  margin-top: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #f5f9ff 0%, #ecf4ff 100%);
  border-radius: 12px;
}

.brand {
  color: #1a73e8;
  font-weight: 700;
}

@media (max-width: 768px) {
  .intro-container {
    margin: 15px;
    padding: 20px;
  }

  .title {
    font-size: 36px;
  }

  .section-title {
    font-size: 24px;
  }

  .intro-paragraph, .section-paragraph {
    font-size: 16px;
  }
}
</style>
