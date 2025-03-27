<template>
  <header>
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="/Images/Logo-maker-project.png" alt="Clothes Logo" />
        </router-link>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Trang Chủ</router-link></li>
          <li class="dropdown">
            <router-link to="/sanpham">Sản Phẩm</router-link>
            <ul class="dropdown-content">
              <li><router-link to="/sanpham/ao">Áo</router-link></li>
              <li><router-link to="/sanpham/quan">Quần</router-link></li>
              <li><router-link to="/sanpham/giay">Giày</router-link></li>
            </ul>
          </li>
          <li><router-link to="/gioithieu">Giới Thiệu</router-link></li>
          <li><router-link to="/lienhe">Liên Hệ</router-link></li>
        </ul>
      </nav>
      <div class="cta">
        <input
          ref="searchInput"
          type="text"
          placeholder="Tìm kiếm..."
          class="search-input"
          v-model="searchQuery"
          @keyup.enter="performSearch"
        />
        <router-link to="/cart" class="cta-button">
          <img src="/Images/shopping-cart.png" alt="Giỏ hàng" class="cart-image" />
          <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
        </router-link>
        
        <!-- Move the login and register links here -->
        <li v-if="!user" class="login"><router-link to="/login">Đăng nhập</router-link></li>
        <li v-if="!user" class="register"><router-link to="/register">Đăng ký</router-link></li>
        
        <div v-if="user" class="user-info">
          <p>Xin chào, {{ user.fullName }}</p>
          <button @click="logout">Đăng xuất</button>
        </div>
      </div>
    </div>
  </header>
  <router-view />
  <div v-if="showLogoutDialog" class="dialog-overlay">
    <div class="dialog">
      <h3>Xác nhận đăng xuất</h3>
      <p>Bạn có chắc chắn muốn đăng xuất không?</p>
      <div class="dialog-buttons">
        <button @click="confirmLogout" class="confirm-btn">Đồng ý</button>
        <button @click="cancelLogout" class="cancel-btn">Hủy bỏ</button>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "@/eventBus";
import items from "@/data/items";
export default {
  data() {
    return {
      user: null, // Đảm bảo user mặc định là null (không đăng nhập)
      searchQuery: "",
      products: items,
      showLogoutDialog: false,
    };
  },
  created() {
    eventBus.on("loginSuccess", (user) => {
      this.user = user;
    });
  },
  beforeUnmount() {
    eventBus.off("loginSuccess");
  },
  methods: {
    logout() {
      if (confirm('Bạn có chắc chắn muốn đăng xuất không?')) {
            localStorage.removeItem('currentuser');
            this.user = null;
            this.$router.push('/');
            
        }
    },
    confirmLogout() {
      localStorage.removeItem("currentuser");
      this.user = null;
      this.$router.push("/");
      this.showLogoutDialog = false;
    },
    cancelLogout() {
      this.showLogoutDialog = false;
    },
    performSearch() {
      if (this.searchQuery.trim() !== "") {
        this.$router.push({ path: "/search", query: { q: this.searchQuery } });
      }
    },
  },
  mounted() {
    const currentUser = localStorage.getItem('currentuser');
      if (currentUser) {
          this.user = JSON.parse(currentUser);
      }

      // Listen for login events
      eventBus.on('loginSuccess', (user) => {
          this.user = user;
      });

      this.$nextTick(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      });
  },
};
</script>

<style>
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

body {
  margin: 0;
  padding-top: 100px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 15px 60px;
  background: linear-gradient(135deg, #eed5d2, #f8e5e3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}

.logo {
  height: 80px;
  overflow: hidden;
}

.logo img {
  height: 110%;
  width: auto;
  object-fit: contain;
  transform: scale(1.7);
  transform-origin: center;
  transition: transform 0.3s ease;
  padding-left: 40px;
  padding-right: 40px;
  display: block;
}

.logo img:hover {
  transform: scale(1.6);
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 50px;
  white-space: nowrap;
}

nav ul li {
  white-space: nowrap;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 1.1em;
  padding: 8px 15px;
  position: relative;
  transition: all 0.3s ease;
  white-space: nowrap;
}

nav ul li a:hover {
  color: #ffffff;
  background-color: rgba(9, 9, 9, 0.7);
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #eed5d2;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}


.dropdown-content li a {
  color: black;
  background-color: transparent;
  text-decoration: none;
  display: block;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dropdown-content li a:hover {
  color: #fff;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-info p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5; /* Ensures consistent vertical alignment */
}

.user-info button {
  padding: 6px 12px;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid #fbfbfb;
  background-color: #d29805;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  line-height: 1.5; /* Ensures consistent vertical alignment */
  margin-top: 0; /* Removes extra spacing above */
}

.user-info button:hover {
  background-color: #f0f0f0;
}

.cta {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.cta .login,
.cta .register {
  list-style: none;
  margin-left: 10px; /* Adjust this margin to position closer to the search input */
}

.cta .login a,
.cta .register a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.cta .login a:hover,
.cta .register a:hover {
  color: #fff;
  background-color: rgba(9, 9, 9, 0.7);
}

.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.search-icon {
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-right: 10px;
}

.search-icon:hover {
  transform: scale(1.1);
}

.cta-button {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: #fff;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  margin-right: 10px;
}

.cart-image {
  width: 25px;
  height: 25px;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  background-color: #ffa726;
  transform: scale(1.05);
}

.cta-button:hover .cart-image {
  transform: scale(1.1);
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.dialog {
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  min-width: 350px;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.dialog h3 {
  margin-top: 0;
  color: #333;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.dialog p {
  color: #666;
  font-size: 16px;
  text-align: center;
  margin: 20px 0;
}

.dialog-buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
}

.confirm-btn, .cancel-btn {
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  width: 48%;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.confirm-btn {
  background-color: #d29805;
  color: white;
}

.confirm-btn:hover {
  background-color: #b88504;
  transform: scale(1.05);
}

.cancel-btn {
  background-color: #f1f1f1;
  color: #333;
}

.cancel-btn:hover {
  background-color: #e0e0e0;
  transform: scale(1.05);
}

@media (max-width: 1200px) {
  .container {
    padding: 15px 30px;
    gap: 30px;
  }
  
  nav ul {
    gap: 30px;
  }
  
  .search-input {
    min-width: 200px;
    margin: 0 20px;
  }
}

</style>
