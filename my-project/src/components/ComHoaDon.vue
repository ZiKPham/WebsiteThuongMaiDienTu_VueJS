<template>
 <div class="invoice-container">
  <div class="invoice-header">
    <h2 class="invoice-title">
      <span class="gradient-text">HÓA ĐƠN</span>
    </h2>
    <div class="invoice-subtitle">ZiK-Clothes - Thời trang cho mọi người</div>
  </div>
  
  <div v-if="selectedProducts.length > 0" class="invoice-content">
    <!-- Cột trái - Thông tin sản phẩm và tổng tiền -->
    <div class="left-column">
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in selectedProducts" :key="item.id" class="product-row">
              <td class="product-name">{{ item.name }}</td>
              <td><img :src="item.image" alt="Product Image" class="product-image" /></td>
              <td class="price">
                <span class="price-badge" style="font-size: 16px">{{ formatPrice(item.price) }} VND</span>
              </td>
              <td class="quantity">
                <span class="quantity-badge">{{ item.quantity }}</span>
              </td>
              <td class="total-price">
                <span class="price-badge highlight">{{ formatPrice(item.price * item.quantity) }} VND</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="total-summary">
        <div class="total-details">
          <div class="subtotal">
            <span>Tạm tính:</span>
            <span class="price-badge">{{ formatPrice(totalAmount) }} VND</span>
          </div>
          <div class="shipping">
            <span>Phí vận chuyển:</span>
            <span class="price-badge free">Miễn phí</span>
          </div>
          <div class="grand-total">
            <span>Tổng cộng:</span>
            <span class="price-badge highlight">{{ formatPrice(totalAmount) }} VND</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Cột phải - Form thanh toán -->
    <div class="payment-info">
      <h3 class="title-info">Thông tin thanh toán</h3>
      <form @submit.prevent="submitPayment" class="payment-form">
        <div class="form-group">
          <label for="name">Tên khách hàng:</label>
          <input type="text" id="name" v-model="customerName" required class="input-field" placeholder="Nhập họ và tên"/>
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ giao hàng:</label>
          <input type="text" id="address" v-model="customerAddress" required class="input-field" placeholder="Nhập địa chỉ chi tiết"/>
        </div>
        <div class="form-group">
          <label for="phone">Số điện thoại:</label>
          <input type="text" id="phone" v-model="customerPhone" required pattern="^[0-9]{10,11}$" class="input-field" placeholder="Nhập số điện thoại"/>
        </div>
        <div class="form-group">
          <label for="payment-method">Phương thức thanh toán:</label>
          <select id="payment-method" v-model="paymentMethod" required class="select-field">
            <option value="" disabled selected>Chọn phương thức thanh toán</option>
            <option value="cash">Thanh toán khi nhận hàng</option>
            <option value="credit">Thanh toán qua thẻ tín dụng</option>
            <option value="momo">Ví điện tử MoMo</option>
            <option value="banking">Chuyển khoản ngân hàng</option>
          </select>
        </div>
        <div class="payment-button-container">
          <button type="submit" class="btn btn-primary">
            <i class="fas fa-lock"></i>
            Xác nhận thanh toán
          </button>
        </div>
      </form>
    </div>
  </div>

  <div v-else class="empty-cart">
    <i class="fas fa-shopping-cart empty-cart-icon"></i>
    <p>Chưa có sản phẩm nào trong giỏ hàng</p>
    <router-link to="/" class="continue-shopping">Tiếp tục mua sắm</router-link>
  </div>

  <!-- Dialog thông báo thanh toán thành công -->
  <dialog ref="successDialog" class="success-dialog">
    <div class="dialog-content">
      <i class="fas fa-check-circle success-icon"></i>
      <h3>Thanh toán thành công!</h3>
      <p>Cảm ơn bạn đã mua sắm tại ZiK-Clothes<br>
      Đơn hàng của bạn sẽ được xử lý trong thời gian sớm nhất</p>
      <button @click="closeDialog" class="btn btn-success">Đóng</button>
    </div>
  </dialog>

  <!-- Dialog thông báo lỗi -->
  <dialog ref="errorDialog" class="error-dialog">
    <div class="dialog-content">
      <i class="fas fa-exclamation-circle error-icon"></i>
      <h3>Thông tin chưa đầy đủ</h3>
      <p>Vui lòng kiểm tra và điền đầy đủ thông tin thanh toán</p>
      <button @click="closeDialog" class="btn btn-error">Đóng</button>
    </div>
  </dialog>
</div>
</template>

<script>
import eventBus from '@/utils/eventBus';

export default {
  data() {
    return {
      selectedProducts: [],
      customerName: "",
      customerAddress: "",
      customerPhone: "",
      paymentMethod: "",
      loading: false
    };
  },

  created() {
    const savedProducts = localStorage.getItem('selectedProducts');
    if (savedProducts) {
      this.selectedProducts = JSON.parse(savedProducts);
    }

    eventBus.on('open-invoice', (data) => {
      if (data && data.selectedProducts) {
        this.selectedProducts = data.selectedProducts;
      }
    });
  },
  
  beforeUnmount() {
    eventBus.off('open-invoice');
    localStorage.removeItem('selectedProducts');
  },

  computed: {
    totalAmount() {
      return this.selectedProducts.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  },
  
  methods: {
    formatPrice(price) {
      return price.toLocaleString('vi-VN');
    },
    
    async submitPayment() {
      if (this.customerName && this.customerAddress && this.customerPhone && this.paymentMethod) {
        this.loading = true;
        try {
          // Giả lập xử lý thanh toán
          await new Promise(resolve => setTimeout(resolve, 1000));
          this.$refs.successDialog.showModal();
          setTimeout(() => {
            this.$router.push('/');
          }, 2000);
        } catch (error) {
          this.$refs.errorDialog.showModal();
        } finally {
          this.loading = false;
        }
      } else {
        this.$refs.errorDialog.showModal();
      }
    },
    
    closeDialog() {
      this.$refs.successDialog.close();
      this.$refs.errorDialog.close();
    }
  },
};
</script>

<style scoped>
.invoice-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 40px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}

.invoice-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f0f0f0;
}

.invoice-title {
  padding-top: 80px;
  font-size: 32px;
  color: #1a1a1a;
  margin: 0;
  font-weight: 700;
  letter-spacing: 1px;
}

.gradient-text {
  background: linear-gradient(45deg, #2196F3, #E91E63);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  animation: glow 2s ease-in-out infinite alternate;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 8px;
  position: relative;
}

@keyframes glow {
  from {
    filter: drop-shadow(0 0 2px rgba(33,150,243,0.6));
  }
  to {
    filter: drop-shadow(0 0 10px rgba(233,30,99,0.6));
  }
}

.invoice-subtitle {
  color: #666;
  margin-top: 8px;
  font-size: 16px;
}

.invoice-content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.left-column {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
}

.table-container {
  margin-bottom: 30px;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
}

.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.table th {
  background: #f8f9fa;
  padding: 16px;
  font-weight: 600;
  font-size: 14px;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-row {
  transition: background-color 0.2s;
}

.product-row:hover {
  background-color: #f8f9fa;
}

.table td {
  padding: 16px;
  vertical-align: middle;
}

.product-name {
  font-weight: 500;
  color: #1a1a1a;
}

.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.product-image:hover {
  transform: scale(1.05);
}

.price-badge {
  background: #e8f0fe;
  padding: 8px 12px;
  border-radius: 20px;
  color: #1a73e8;
  font-weight: 500;
  display: inline-block;
}

.price-badge.highlight {
  background: #fef2e8;
  color: #f51f1f;
}

.price-badge.free {
  background: #e8f5e9;
  color: #4caf50;
}

.quantity-badge {
  background: #e8f0fe;
  padding: 6px 12px;
  border-radius: 20px;
  color: #1a73e8;
  font-weight: 500;
}

.total-summary {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}

.total-details > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px dashed #ddd;
}

.grand-total {
  font-size: 20px;
  font-weight: 700;
  color: #e53935;
}

.payment-info {
  width: 400px;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  position: sticky;
  top: 20px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
}

.title-info {
  font-size: 20px;
  color: #1a1a1a;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #f0f0f0;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

.input-field,
.select-field {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s;
}

.input-field:focus,
.select-field:focus {
  border-color: #1a73e8;
  box-shadow: 0 0 0 3px rgba(26,115,232,0.1);
}

.btn {
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-primary {
  background: #1a73e8;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background: #1557b0;
  transform: translateY(-1px);
}

.dialog-content {
  text-align: center;
  padding: 30px;
}

.success-icon,
.error-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.success-icon {
  color: #4caf50;
}

.error-icon {
  color: #f44336;
}

.empty-cart {
  text-align: center;
  padding: 60px 20px;
}

.empty-cart-icon {
  font-size: 64px;
  color: #ccc;
  margin-bottom: 20px;
}

.continue-shopping {
  display: inline-block;
  padding: 12px 24px;
  background: #1a73e8;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 20px;
  transition: all 0.3s;
}

.continue-shopping:hover {
  background: #1557b0;
  transform: translateY(-1px);
}

@media (max-width: 1024px) {
  .invoice-content {
    flex-direction: column;
  }

  .payment-info {
    width: 100%;
    position: static;
  }
}

@media (max-width: 768px) {
  .invoice-container {
    margin: 20px;
    padding: 20px;
  }

  .table th,
  .table td {
    padding: 12px;
  }

  .product-image {
    width: 60px;
    height: 60px;
  }
}
</style>
