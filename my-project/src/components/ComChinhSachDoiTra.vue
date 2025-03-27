<template>
  <div class="intro-container">
    <h1 class="title">Chính Sách Đổi Trả</h1>
    <div class="intro-content">
      <p class="intro-paragraph">
        Chào mừng bạn đến với chính sách đổi trả của <strong class="brand">ZikClothes</strong>! Chúng tôi cam kết mang đến cho bạn trải nghiệm mua sắm tốt nhất với chính sách đổi trả linh hoạt và thuận tiện.
      </p>
    </div>
    
    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-sync-alt"></i> 1. Điều Kiện Đổi Trả</h2>
      <p class="section-paragraph">
        Các trường hợp được chấp nhận đổi trả:
      </p>
      <ul class="collection-list">
        <li><i class="fas fa-check-circle"></i> Sản phẩm còn nguyên tem mác, chưa qua sử dụng</li>
        <li><i class="fas fa-exclamation-circle"></i> Sản phẩm bị lỗi do nhà sản xuất</li>
        <li><i class="fas fa-box-open"></i> Sản phẩm không đúng size, màu sắc như đơn hàng</li>
      </ul>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-clock"></i> 2. Thời Gian Đổi Trả</h2>
      <p class="section-paragraph">
        Quy định về thời gian đổi trả:
      </p>
      <ul class="collection-list">
        <li><i class="fas fa-calendar-check"></i> 7 ngày đối với sản phẩm lỗi từ nhà sản xuất</li>
        <li><i class="fas fa-calendar-alt"></i> 3 ngày đối với trường hợp đổi size, màu sắc</li>
        <li><i class="fas fa-shipping-fast"></i> Thời gian xử lý đổi trả trong vòng 24h</li>
      </ul>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-clipboard-list"></i> 3. Quy Trình Đổi Trả</h2>
      <p class="section-paragraph">
        Các bước thực hiện đổi trả sản phẩm:
      </p>
      <ul class="collection-list">
        <li><i class="fas fa-phone-alt"></i> Liên hệ hotline để được hướng dẫn</li>
        <li><i class="fas fa-camera"></i> Chụp ảnh sản phẩm cần đổi trả</li>
        <li><i class="fas fa-box"></i> Đóng gói sản phẩm như ban đầu</li>
        <li><i class="fas fa-truck"></i> Gửi hàng về theo địa chỉ được cung cấp</li>
      </ul>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-hand-holding-usd"></i> 4. Chi Phí Đổi Trả</h2>
      <p class="section-paragraph">
        ZikClothes sẽ chịu toàn bộ chi phí đổi trả trong trường hợp lỗi từ phía công ty. Đối với các trường hợp khác, quý khách vui lòng chịu phí vận chuyển 2 chiều.
      </p>
    </div>

    <div class="section-block">
      <h2 class="section-title"><i class="fas fa-exclamation-triangle"></i> 5. Trường Hợp Không Áp Dụng</h2>
      <p class="section-paragraph">
        Chúng tôi không chấp nhận đổi trả trong các trường hợp:
      </p>
      <ul class="collection-list">
        <li><i class="fas fa-times-circle"></i> Sản phẩm đã qua sử dụng hoặc giặt là</li>
        <li><i class="fas fa-tag"></i> Sản phẩm không còn nguyên tem mác</li>
        <li><i class="fas fa-cut"></i> Sản phẩm đã bị chỉnh sửa, can thiệp</li>
      </ul>
    </div>

    <div class="section-block contact-section">
      <h2 class="section-title"><i class="fas fa-headset"></i> 6. Hỗ Trợ Khách Hàng</h2>
      <p class="section-paragraph">
        Mọi thắc mắc về chính sách đổi trả, vui lòng liên hệ:
      </p>
      <div class="contact-info">
        <p><i class="fas fa-envelope"></i> Email: <strong>zikstore@gmail.com</strong></p>
        <p><i class="fas fa-phone"></i> Hotline: <strong>0123-456-789</strong></p>
      </div>
    </div>

    <div class="final-block">
      <p class="final-paragraph">
        <strong class="brand">ZikClothes</strong> - Cam kết mang đến sự hài lòng tuyệt đối cho khách hàng!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComChinhSachDoiTra",
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
