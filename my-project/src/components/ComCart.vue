<template>
  <div class="cart-container">
    <h2 class="cart-title">GIỎ HÀNG</h2>
    <div v-if="cart.length === 0">
      <img
        src= "https://theme.hstatic.net/1000361985/1001103158/14/cart_empty_background.png?v=1400"
        alt="Giỏ hàng chưa có hàng"
        class="image-cart"
      />
      <p class="empty-cart">Giỏ hàng chưa có hàng</p>
    </div>
    <div v-else class="modal-content">
      <table style="width: 100%" class="text-center table">
        <tr>
          <th>
            <input type="checkbox" v-model="isAllSelected" @change="toggleSelectAll" />
          </th>
          <th>HÌNH</th>
          <th>SẢN PHẨM</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Tiền</th>
          <th></th>
        </tr>
        <tr v-for="item in cart" :key="item.id">
          <td class="align-middle">
            <input type="checkbox" v-model="selectedItems" :value="item.id" />
          </td>
          <td><img :src="item.image" style="height: 100px; width: 100px" /></td>
          <td class="align-middle">{{ item.name }}</td>
          <td class="align-middle">{{ formatPrice(item.price) }} VND</td>
          <td class="align-middle">
            <button class="btn-quantity" @click="decrementQuantity(item)">-</button>
            {{ item.quantity }}
            <button class="btn-quantity" @click="incrementQuantity(item)">+</button>
          </td>
          <td class="align-middle">{{ formatPrice(item.price * item.quantity) }} VND</td>
          <td class="align-middle text-center">
            <button class="btn btn-danger" @click="deleteProduct(item)">
              Xóa
            </button>
          </td>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>Tổng tiền</th>
          <th>{{ tongSoLuong }}</th>
          <th>{{ formatPrice(tongTien) }} VND</th>
          <th>
            <button class="btn btn-danger" @click="xoaHet()">Xóa tất cả</button>
          </th>
        </tr>
      </table>
      <div class="actions">
        <button class="btn btn-primary" @click="checkout">Thanh toán</button>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/data/items';
import eventBus from '@/utils/eventBus';

export default {
  data() {
    return {
      cart: JSON.parse(localStorage.getItem("cart")) || [], // Load cart from localStorage
      selectedItems: [],
    };
  },

  computed: {
    tongTien() {
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    tongSoLuong() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
    isAllSelected() {
      return this.selectedItems.length === this.cart.length;
    },
  },

  methods: {
    incrementQuantity(item) {
      const product = items.find(i => i.id === item.id);
      if (product && item.quantity < product.quality) {
        item.quantity++;
        this.updateLocalStorage();
      }
    },

    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
        const product = items.find(p => p.id === item.id);
        if (product) {
        product.quality++;
      }
        this.updateLocalStorage();
      } else {
        this.deleteProduct(item);
      }
    },

    deleteProduct(item) {
      this.cart = this.cart.filter((x) => x.id !== item.id);
      const product = items.find(p => p.id === item.id);
    if (product) {
      product.quality += item.quantity;
    }
      this.selectedItems = this.selectedItems.filter(id => id !== item.id);
      this.updateLocalStorage();
    },

    xoaHet() {
      this.cart.forEach(item => {
      const product = items.find(p => p.id === item.id);
      if (product) {
        product.quality += item.quantity;
      }
    });
      this.cart = [];
      this.selectedItems = [];
      this.updateLocalStorage();
    },

    formatPrice(price) {
      if (price === undefined || price === null) {
        return "0";
      }
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },

    toggleSelectAll() {
      this.selectedItems = this.isAllSelected ? [] : this.cart.map(item => item.id);
    },

    updateLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

   checkout() {
      const selectedProducts = this.cart.filter(item => this.selectedItems.includes(item.id));

      const currentUser = JSON.parse(localStorage.getItem("currentuser"));
      if (!currentUser) {
        alert("Vui lòng đăng nhập để thanh toán.");
        this.$router.push("/login");
        return;
      }

      if (selectedProducts.length > 0) {
        // Lưu vào localStorage trước
        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
        
        // Emit event
        eventBus.emit('open-invoice', {
          selectedProducts: selectedProducts
        });
        
        // Xóa sản phẩm đã chọn khỏi giỏ hàng
        this.cart = this.cart.filter(item => !this.selectedItems.includes(item.id));
        this.selectedItems = [];
        this.updateLocalStorage();
        
        this.$router.push("/hoadon");
      } else {
        alert("Vui lòng chọn sản phẩm để thanh toán.");
      }
    },
  },
  
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style>
.cart-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Căn giữa theo chiều ngang */
  padding-top: 50px; /* Khoảng cách trên */
  padding-bottom: 150px;
  background-color: #fff;
  min-height: 80vh;
}

.cart-title {
  margin-top: 70px;
  font-size: 32px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 30px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.cart-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #d29805, #ffd700);
}

.empty-cart {
  text-align: center;
  font-size: 30px;
  margin-top: 60px;
  margin-bottom: 100px;
  color: #666;
  animation: fadeIn 0.5s ease-in;
  color: #2c3e50;
  font-weight: 500;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.image-cart {
  width: 40%; /* Thu nhỏ hình ảnh còn 40% kích thước gốc */
  height: auto; /* Giữ nguyên tỷ lệ */
  display: block; /* Để áp dụng margin auto */
  margin: -20px auto; 
}

.modal-content {
  display: flex;
  flex-direction: column;
  width: 100%; /* Đảm bảo bảng chiếm toàn bộ chiều rộng có sẵn */
  max-width: 1200px; /* Có thể điều chỉnh tùy ý */
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.modal-content:hover {
  transform: translateY(-5px);
}

.table {
  width: 100%; /* Đảm bảo bảng chiếm toàn bộ chiều rộng của modal-content */
  border-collapse: collapse;
  margin-top: 20px;
}

.table th, .table td {
  padding: 10px;
  border: 1px solid #ddd;
  vertical-align: middle; /* Ensure vertical alignment */
}

.table th {
  background-color: #f1f1f1;
}

.btn {
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow */
}

.btn:hover {
  transform: translateY(-2px); /* Lift the button slightly */
}

.btn-danger {
  background-color: #ff4d4d;
  color: white;
}

.btn-danger:hover {
  background-color: #ff1a1a;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  margin-top: 20px;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-quantity {
  background-color: #f1f1f1;
  color: #333;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  border-radius: 5px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add shadow */
}

.btn-quantity:hover {
  background-color: #ddd;
  transform: translateY(-2px); /* Lift the button slightly */
}

.align-middle {
  vertical-align: middle; /* Căn giữa theo chiều dọc */
}

.text-center {
  text-align: center; /* Căn giữa theo chiều ngang */
}

.actions {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
}

.table th {
  background: #2c3e50;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  padding: 15px;
}

.table td {
  padding: 15px;
  transition: background-color 0.3s ease;
}

.table tr:hover td {
  background-color: #f8f9fa;
}

.btn {
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.btn-danger {
  background: #ff4757;
  border: none;
}

.btn-danger:hover {
  background: #ff6b81;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255,71,87,0.3);
}

.btn-primary {
  background: #2e86de;
  border: none;
  padding: 12px 30px;
}

.btn-primary:hover {
  background: #54a0ff;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(46,134,222,0.3);
}

.btn-quantity {
  background: #f1f2f6;
  color: #2c3e50;
  font-weight: bold;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}

.btn-quantity:hover {
  background: #dfe4ea;
  transform: scale(1.1);
}

/* Animation cho empty cart */
.empty-cart {
  animation: fadeIn 0.5s ease-in;
  color: #2c3e50;
  font-weight: 500;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Style cho checkbox */
input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #2e86de;
}

/* Responsive image */
td img {
  border-radius: 8px;
  transition: transform 0.3s ease;
}

td img:hover {
  transform: scale(1.05);
}

/* Price formatting */
td:nth-child(4), 
td:nth-child(6) {
  font-weight: 600;
  color: #2c3e50;
}

/* Total row styling */
tr:last-child th {
  background: #f8f9fa;
  color: #2c3e50;
  font-weight: 600;
}
</style>
