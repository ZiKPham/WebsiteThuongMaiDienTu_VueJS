<template>
  <div class="intro-container">
    <h1 class="title">Chào mừng đến với ZikClothes!</h1>
    <p class="intro-paragraph">
      <strong>ZikClothes</strong> là thương hiệu thời trang hàng đầu, nơi bạn có thể tìm thấy những bộ trang phục phong cách và chất lượng nhất. Chúng tôi tự hào mang đến cho khách hàng những sản phẩm thời trang đa dạng, từ trang phục hàng ngày đến những bộ cánh sang trọng cho các dịp đặc biệt.
    </p>
    <h2 class="section-title">Sứ Mệnh Của Chúng Tôi</h2>
    <p class="section-paragraph">
      Tại <strong>ZikClothes</strong>, chúng tôi luôn đặt khách hàng lên hàng đầu. Sứ mệnh của chúng tôi là mang đến cho bạn những trải nghiệm mua sắm tuyệt vời nhất, với những sản phẩm thời trang chất lượng cao và dịch vụ khách hàng tận tâm. Mỗi bộ trang phục không chỉ là một món đồ mà còn là cách bạn thể hiện phong cách và cá tính của mình.
    </p>
    <h2 class="section-title">Bộ Sưu Tập Đa Dạng</h2>
    <ul class="collection-list">
      <li>Áo thun và áo sơ mi: Đa dạng kiểu dáng, màu sắc, phù hợp cho cả nam và nữ.</li>
      <li>Quần jeans và quần âu: Thiết kế tỉ mỉ, mang lại sự thoải mái và phong cách.</li>
      <li>Váy và đầm: Từ váy nhẹ nhàng cho ngày thường đến đầm lộng lẫy cho các buổi tiệc.</li>
      <li>Phụ kiện thời trang: Túi xách, giày dép, trang sức hoàn thiện phong cách của bạn.</li>
    </ul>
    <h2 class="section-title">Cam Kết Chất Lượng</h2>
    <p class="section-paragraph">
      Chúng tôi cam kết chỉ cung cấp các sản phẩm chất lượng cao, làm từ chất liệu tốt nhất. Mỗi sản phẩm đều qua quy trình kiểm tra chất lượng nghiêm ngặt trước khi đến tay khách hàng.
    </p>
    <h2 class="section-title">Dịch Vụ Khách Hàng</h2>
    <p class="section-paragraph">
      Đội ngũ nhân viên của chúng tôi sẵn sàng hỗ trợ bạn trong suốt quá trình mua sắm. Chúng tôi cung cấp dịch vụ tư vấn thời trang chuyên nghiệp, giúp bạn chọn trang phục phù hợp với phong cách và nhu cầu của mình.
    </p>
    <h2 class="section-title">Kết Nối Với Chúng Tôi</h2>
    <p class="section-paragraph">
      Hãy theo dõi <strong>ZikClothes</strong> trên các mạng xã hội để cập nhật những xu hướng thời trang mới nhất và nhận được những ưu đãi đặc biệt. Chúng tôi luôn mong muốn được lắng nghe ý kiến của bạn để ngày càng hoàn thiện và phát triển.
    </p>
    <p class="final-paragraph">
      <strong>ZikClothes</strong> - Nơi phong cách gặp gỡ chất lượng. Hãy đến và trải nghiệm mua sắm tại <strong>ZikClothes</strong> ngay hôm nay!
    </p>
  </div>
</template>

<script>
export default {
  name: "ComGioiTh",
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    });
  }
};
</script>

<style scoped>
.intro-container {
  max-width: 1200px;
  margin: 80px auto;
  padding: 40px;
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.8s ease-out;
  position: relative;
  overflow: hidden;
}

.intro-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(210, 152, 5, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
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
  animation: slideDown 0.8s ease-out;
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

.intro-paragraph, .section-paragraph {
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

.collection-list {
  background: white;
  border-radius: 15px;
  padding: 25px 45px;
  margin: 20px 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  animation: slideUp 1s ease-out;
}

.collection-list li {
  margin: 15px 0;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 25px;
}

.collection-list li::before {
  content: '•';
  color: #d29805;
  position: absolute;
  left: 0;
  font-size: 1.5rem;
}

.collection-list li:hover {
  transform: translateX(10px);
  color: #d29805;
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
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

/* Responsive Design */
@media (max-width: 768px) {
  .intro-container {
    margin: 60px 20px;
    padding: 20px;
  }

  .title {
    font-size: 2.5rem;
  }

  .intro-paragraph,
  .section-paragraph {
    font-size: 1rem;
    padding: 0;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .collection-list {
    padding: 15px 25px;
  }

  .final-paragraph {
    font-size: 1.1rem;
  }
}

/* Hover Effects */
.intro-container:hover {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

strong {
  color: #d29805;
  font-weight: 600;
  transition: color 0.3s ease;
}

strong:hover {
  color: #b88504;
}
</style>
