<template>
  <div class="main-container">
    <div class="content"></div>
    <footer>
      <div class="footer-container">
        <div class="footer-column contact">
          <h2 class="footer-title">Liên lạc với chúng tôi qua email:</h2>
          <div class="contact-info">
            <p><i class="fas fa-envelope"></i> Email: contact@zikclothes.vn</p>
            <p><i class="fas fa-map-marker-alt"></i> Địa chỉ: 123 Đường Thời Trang, Quận 1, TP. HCM</p>
            <p><i class="fas fa-phone"></i> Điện thoại: (+84) 123 456 789</p>
          </div>
        </div>

        <div class="footer-column">
          <h2 class="footer-title">Danh mục sản phẩm:</h2>
          <div class="footer-links">
            <a href="/sanpham/ao" class="hover-effect"><i class="fas fa-tshirt"></i> Áo</a>
            <a href="/sanpham/quan" class="hover-effect"><i class="fas fa-socks"></i> Quần</a>
            <a href="/sanpham/giay" class="hover-effect"><i class="fas fa-shoe-prints"></i> Giày</a>
          </div>
        </div>

        <div class="footer-column">
          <h2 class="footer-title">Chính sách:</h2>
          <div class="footer-links">
            <a href="/chinh-sach-doi-tra" class="hover-effect"><i class="fas fa-exchange-alt"></i> Chính sách đổi trả</a>
            <a href="/chinh-sach-bao-mat" class="hover-effect"><i class="fas fa-shield-alt"></i> Chính sách bảo mật</a>
            <a href="/dieu-khoan-dich-vu" class="hover-effect"><i class="fas fa-file-contract"></i> Điều khoản dịch vụ</a>
          </div>
        </div>

        <div class="footer-column">
          <h2 class="footer-title">Theo dõi chúng tôi:</h2>
          <div class="social-links">
            <a href="https://facebook.com" target="_blank" class="social-link hover-effect">
              <img src="//theme.hstatic.net/1000361985/1001103158/14/facebook.png?v=1400" loading="lazy" alt="Facebook" class="social-icon">
              <span class="social-text">Facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" class="social-link hover-effect">
              <img src="//theme.hstatic.net/1000361985/1001103158/14/instagram.png?v=1400" loading="lazy" alt="Instagram" class="social-icon">
              <span class="social-text">Instagram</span>
            </a>
            <a href="https://tiktok.com" target="_blank" class="social-link hover-effect">
              <img src="//theme.hstatic.net/1000361985/1001103158/14/tiktok.png?v=1400" loading="lazy" alt="TikTok" class="social-icon">
              <span class="social-text">TikTok</span>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 ZikStore. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ComFooter'
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 30vh;
}

.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  margin-top: auto;
}

footer {
  background: linear-gradient(to bottom, #eed5d2, #f5e6e4);
  color: #393737;
  padding: 40px 0 20px;
  width: 100%;
  box-shadow: 0 -5px 15px rgba(0,0,0,0.1);
}
.social-icon{
  margin-top: -12px;
}

.social-text{
  color:#333;
  margin-top: -12px;
}
.footer-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-column {
  flex: 1;
  padding: 20px;
  min-width: 250px;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}

.footer-column:hover {
  transform: translateY(-5px);
}

.footer-title {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  position: relative;
  padding-bottom: 10px;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: #ff6347;
  transition: width 0.3s ease;
}

.footer-column:hover .footer-title::after {
  width: 100px;
}

.contact-info p {
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-links a {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
}

.hover-effect {
  position: relative;
  padding: 5px 0;
}

.hover-effect::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #ff6347;
  transition: width 0.3s ease;
}

.hover-effect:hover::after {
  width: 100%;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.social-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.footer-bottom {
  text-align: center;
  margin-top: -10px;
  margin-bottom: -15px;
  padding-top: -10px;
  border-top: 1px solid rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-column {
    margin-bottom: 30px;
    width: 100%;
  }

  .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .contact-info p,
  .footer-links a {
    justify-content: center;
  }

  .social-links {
    align-items: center;
  }
}
</style>
