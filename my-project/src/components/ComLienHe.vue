<template>
  <div class="contact-container">
    <h1 class="title">Liên Hệ Với ZikClothes</h1>
    <p class="contact-paragraph">
      Cảm ơn bạn đã ghé thăm <strong>ZikClothes</strong>! Chúng tôi luôn sẵn sàng lắng nghe ý kiến và giải đáp mọi thắc mắc của bạn. Hãy liên hệ với chúng tôi thông qua các phương thức dưới đây để được hỗ trợ.
    </p>
    <h2 class="section-title">Thông Tin Liên Hệ</h2>
    <ul class="contact-info">
      <li><strong>Địa chỉ:</strong> 123 Đường Thời Trang, Quận 1, TP. HCM</li>
      <li><strong>Số điện thoại:</strong> (+84) 123 456 789</li>
      <li><strong>Email:</strong> contact@zikclothes.vn</li>
    </ul>
    <h2 class="section-title">Giờ Làm Việc</h2>
    <p class="contact-paragraph">
      Thứ Hai - Thứ Sáu: 9:00 AM - 8:00 PM<br />
      Thứ Bảy - Chủ Nhật: 10:00 AM - 6:00 PM
    </p>
    <h2 class="section-title">Kết Nối Với Chúng Tôi</h2>
    <p class="contact-paragraph">
      Hãy theo dõi <strong>ZikClothes</strong> trên các mạng xã hội để cập nhật xu hướng thời trang mới nhất và nhận các ưu đãi đặc biệt dành riêng cho khách hàng của chúng tôi.
    </p>
    <p class="final-paragraph">
      Chúng tôi mong chờ được kết nối với bạn!
    </p>
    <div class="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2887274078053!2d106.69744021531308!3d10.789454892314454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cea91f6a3f%3A0x8d6b2d79522c7f30!2zMTIzIMSQaeG7h24gQmnDqm4gUGjhu6csIFBoxrDhu51uZyAxNSwgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1647827838167!5m2!1svi!2s"
        width="100%" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComLienHe",
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    });
  }
};
</script>

<style scoped>
.contact-container {
  max-width: 1200px;
  margin: 80px auto 40px;
  padding: 40px;
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.8s ease-out;
}

.title {
  font-size: 3.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #d29805, #ffd700);
  border-radius: 2px;
}

.contact-paragraph {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
  padding: 0 20px;
  text-align: justify;
  animation: slideUp 0.8s ease-out;
}

.section-title {
  font-size: 2rem;
  color: #d29805;
  margin: 40px 0 20px;
  padding-left: 20px;
  position: relative;
  animation: slideInLeft 0.8s ease-out;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 25px;
  background: #d29805;
  border-radius: 2px;
}

.contact-info {
  list-style: none;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  animation: slideUp 0.8s ease-out;
}

.contact-info li {
  margin: 20px 0;
  padding: 15px;
  border-bottom: 1px solid #eee;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.contact-info li:last-child {
  border-bottom: none;
}

.contact-info li:hover {
  transform: translateX(10px);
  color: #d29805;
}

.contact-info li strong {
  min-width: 150px;
  color: #2c3e50;
  font-size: 1.1rem;
}

.final-paragraph {
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-top: 40px;
  padding: 20px;
  background: linear-gradient(135deg, #fff, #f8f9fa);
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  animation: fadeIn 1s ease-out;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
