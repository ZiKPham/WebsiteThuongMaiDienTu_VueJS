<template>
  <div class="intro-container">
    <h1 class="title">Chính Sách Bảo Mật</h1>
    <div class="intro-content">
      <p class="intro-paragraph">
        Chào mừng bạn đến với chính sách bảo mật của <strong class="brand">ZikClothes</strong>! Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và thông báo về cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn.
      </p>
    </div>
    
    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-info-circle"></i> 1. Thông Tin Chúng Tôi Thu Thập</h2>
      <p class="section-paragraph">
        Chúng tôi có thể thu thập các loại thông tin sau:
      </p>
      <ul class="collection-list">
        <li><i class="fas fa-user"></i> Thông tin cá nhân: tên, địa chỉ email, số điện thoại, địa chỉ giao hàng.</li>
        <li><i class="fas fa-shopping-cart"></i> Thông tin giao dịch: lịch sử mua sắm, chi tiết thanh toán.</li>
        <li><i class="fas fa-mouse-pointer"></i> Thông tin sử dụng: cách bạn tương tác với website và ứng dụng của chúng tôi.</li>
      </ul>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-cogs"></i> 2. Cách Chúng Tôi Sử Dụng Thông Tin</h2>
      <p class="section-paragraph">
        Chúng tôi sử dụng thông tin mà chúng tôi thu thập để:
      </p>
      <ul class="collection-list">
        <li><i class="fas fa-tasks"></i> Xử lý đơn hàng và cung cấp dịch vụ khách hàng.</li>
        <li><i class="fas fa-star"></i> Cải thiện trải nghiệm mua sắm của bạn trên trang web.</li>
        <li><i class="fas fa-bell"></i> Gửi thông tin khuyến mãi và cập nhật về sản phẩm mới.</li>
        <li><i class="fas fa-shield-alt"></i> Đảm bảo an ninh và bảo mật cho thông tin của bạn.</li>
      </ul>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-lock"></i> 3. Bảo Vệ Thông Tin Của Bạn</h2>
      <p class="section-paragraph">
        Chúng tôi thực hiện các biện pháp bảo mật để bảo vệ thông tin cá nhân của bạn khỏi việc truy cập trái phép, sử dụng hoặc tiết lộ.
      </p>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-share-alt"></i> 4. Chia Sẻ Thông Tin</h2>
      <p class="section-paragraph">
        Chúng tôi không chia sẻ thông tin cá nhân của bạn với bên thứ ba trừ khi cần thiết để hoàn thành giao dịch hoặc tuân thủ pháp luật.
      </p>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-user-shield"></i> 5. Quyền Của Bạn</h2>
      <p class="section-paragraph">
        Bạn có quyền truy cập, sửa đổi và yêu cầu xóa thông tin cá nhân của mình. Nếu bạn muốn thực hiện các quyền này, hãy liên hệ với chúng tôi.
      </p>
    </div>

    <div class="section-block contact-section">
      <h2 class="section-title"><i class="fas fa-envelope"></i> 6. Liên Hệ</h2>
      <p class="section-paragraph">
        Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật, vui lòng liên hệ với chúng tôi:
      </p>
      <div class="contact-info">
        <p><i class="fas fa-envelope"></i> Email: <strong>zikstore@gmail.com</strong></p>
        <p><i class="fas fa-phone"></i> Điện thoại: <strong>0123-456-789</strong></p>
      </div>
    </div>

    <div class="final-block">
      <p class="final-paragraph">
        <strong class="brand">ZikClothes</strong> - Chúng tôi cam kết bảo vệ thông tin của bạn và mang đến sự an tâm khi mua sắm!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComChinhSachBaoMat",
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

.collection-list {
  font-size: 18px;
  line-height: 1.8;
  padding-left: 20px;
  margin: 20px 0;
  list-style: none;
}

.collection-list li {
  margin-bottom: 15px;
  padding-left: 30px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.collection-list li i {
  color: #1a73e8;
  font-size: 20px;
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

  .intro-paragraph, .section-paragraph, .collection-list {
    font-size: 16px;
  }
}
</style>
