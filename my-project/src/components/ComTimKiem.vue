<template>
  <div>
    <div v-if="searchQuery === '' && query === ''">
      <div class="not-found-container">
        <img src="/Images/blank-page.png" alt="Không tìm thấy sản phẩm" class="not-found-image" />
      </div>
    </div>
    <div v-else-if="filteredProducts.length">
      <div class="menu">
        <div class="menu-item" v-for="product in filteredProducts" :key="product.id">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <div class="menu-item-info">
            <h2>{{ product.name }}</h2>
            <p class="description">{{ product.description }}</p>
            <p class="price">{{ formatPrice(product.price) }} VND</p>
            <div v-if="product.quality == 0">Hết hàng</div>
            <div v-else-if="!isFull">
              <button @click="addToCart(product)">Thêm vào giỏ hàng</button>
            </div>
            <div v-else>
              <p>Không thể thêm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="not-found-container">
        <img src="/Images/blank-page.png" alt="Không tìm thấy sản phẩm" class="not-found-image" />
      </div>
    </div>
  </div>
</template>

<script>
import items from "@/data/items";
import cart from "../data/cart";

export default {
  data() {
    return {
      query: this.$route.query.q || "",
      searchQuery: this.$route.query.q || "",
      products: items, // Danh sách sản phẩm
      cart: cart,
      isFull: false,
      showSearch: false, // Biến để kiểm soát hiển thị ô tìm kiếm
    };
  },
  computed: {
    filteredProducts() {
      // Lọc sản phẩm theo tên dựa trên truy vấn tìm kiếm
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.query.toLowerCase())
      );
    },
  },
  methods: {
    addToCart(product) {
      const inforproduct = this.cart.find(item => item.id == product.id);
      if (inforproduct) {
        inforproduct.quantity++;
      } else {
        const newProduct = { ...product, quantity: 1 }; // Thêm sản phẩm mới vào giỏ hàng
        this.cart.push(newProduct);
      }
    },
    formatPrice(price) {
      if (price === undefined || price === null) {
        return "0"; 
      }
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    performSearch() {
      if (this.searchQuery.trim() === "") {
        this.query = ""; // Xóa từ khóa tìm kiếm
        this.hideSearch(); // Ẩn ô tìm kiếm
      } else {
        // Chuyển hướng đến trang tìm kiếm, truyền từ khóa tìm kiếm
        this.$router.push({ path: '/search', query: { q: this.searchQuery } });
        this.query = this.searchQuery; // Cập nhật query để lọc sản phẩm
        this.searchQuery = ""; // Xóa từ khóa tìm kiếm
        this.hideSearch(); // Ẩn ô tìm kiếm sau khi tìm kiếm
      }
    },
    hideSearch() {
      this.showSearch = false; // Ẩn ô tìm kiếm
    }
  },
  watch: {
    '$route.query.q'(newQuery) {
      this.query = newQuery || "";
    }
  },
  mounted() {
      this.$nextTick(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      });
    },
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}

body {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.menu {
  text-align: center;
  padding: 40px 20px;
  background-color: #fff;
}

.menu-title {
  font-size: 32px;
  padding-top: 10px;
  margin-bottom: 20px;
}

.menu-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  padding-top: 100px;
  transition: transform 0.3s ease;
  margin: 20px auto;
  max-width: 1000px;
}

.product-image {
  height: 40%;
  width: 40%;
}

.menu-item-info {
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: left;
  padding: 20px;
}

.menu-item-info h2 {
  font-size: 40px;
  margin: 0 0 10px;
}

.menu-item-info p {
  margin: 5px 0;
}

button {
  background-color: #f3f3f3;
  color: #030303;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-top: 15px;
}

button:hover {
  background-color: #e0a020;
}

.description {
  font-size: 20px;
}

.price {
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
  margin: 5px 0;
}

.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  position: sticky;
  bottom: 0;
  width: 100%;
}

button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.not-found-container {
  position: relative;        
  text-align: center;       
}

.not-found-image {
  width: 400px;             
  height: auto;             
  display: block;           
  margin: 0 auto;          
  padding-top: 150px; 
  padding-bottom: 50px;
}
</style>
