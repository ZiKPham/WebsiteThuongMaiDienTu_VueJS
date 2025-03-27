<template>
  <div class="custom-menu">
    <div class="header">
      <div class="sort-container">
        <label for="sort">Sắp xếp theo giá:</label>
        <select id="sort" v-model="sortOrder">
          <option value="">Mặc định</option>
          <option value="asc">Tăng dần</option>
          <option value="desc">Giảm dần</option>
        </select>
      </div>
    </div>
    <div class="menu-carousel">
      <div
        class="menu-item"
        v-for="product in displayedProducts"
        :key="product.id"
      >
        <router-link
          :to="{ name: 'ProductDetail', params: { id: product.id } }"
        >
          <img :src="product.image" :alt="product.name" />
          <div class="menu-item-info">
            <h3>{{ product.name }}</h3>
            <p class="price">{{ formatPrice(product.price) }} VND</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="pagination">
      <button 
        v-for="page in totalPages" 
        :key="page"
        :class="['page-btn', { active: currentPage === page }]"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
import items from "@/data/items";
import cart from "@/data/cart";

export default {
  data() {
    return {
      products: items,
      cart: cart,
      sortOrder: "",
      currentPage: 1,
      itemsPerPage: 9,
    };
  },
  computed: {
    sortedProducts() {
      if (this.sortOrder === "") {
        return this.products; 
      }
      return [...this.products].sort((a, b) => {
        if (this.sortOrder === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    },
    totalPages() {
      return Math.ceil(this.sortedProducts.length / this.itemsPerPage)
    },
    displayedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.sortedProducts.slice(start, end)
    }
  },
  methods: {
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    goToPage(page) {
      this.currentPage = page;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0); 
    });
  },
};
</script>

<style>
.custom-menu {
  text-align: center;
  padding: 20px;
  background-color: #f4f4f9;
}

.header {
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  margin-bottom: 20px;
}

.sort-container {
  display: flex;
  align-items: center;
}

.sort-container label {
  margin-right: 10px;
  font-size: 18px;
}

.sort-container select {
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.custom-menu .menu-carousel {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.custom-menu .menu-item {
  flex: 0 1 calc(25% - 10px);
  margin-bottom: 10px;
  box-sizing: border-box;
}

.custom-menu .menu-item-info p.price {
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  margin: 5px 0;
  text-decoration: none; 
  color: inherit; 
}

.custom-menu .menu-item img {
  width: 50%;
  padding-bottom: 40px;
  transition: transform 0.3s ease;
}

.custom-menu .menu-item:hover .menu-item-info {
  opacity: 1;
}

.custom-menu .menu-item:hover img {
  transform: scale(1.1);
}

.custom-menu .menu-item-info h3 {
  font-size: 16px;
  margin: 0 0 5px;
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit color from parent */
}

.custom-menu .menu-item-info p {
  margin: 0;
  color: #ccc;
}

.custom-menu .menu-item-remaining {
  text-align: center;
  margin-top: 20px;
}

.custom-menu .menu-item-remaining .menu-title {
  font-size: 28px;
  margin-bottom: 10px;
}

.custom-menu .menu-item-remaining .menu-item {
  display: inline-block;
  margin: 0 5px;
  flex: none;
}

.custom-menu .menu-navigation {
  position: absolute;
  top: 50%;
  width: 100%;
  margin: 0 50px;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.custom-menu .menu-navigation i {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-menu .menu-navigation i:hover {
  background-color: #fcb034;
}

/* Updated Pagination Styles */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 40px 0;
  padding: 20px;
}

.page-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #fff;
  color: #2c3e50;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.page-btn:hover {
  background: #f8d9d5;
  transform: translateY(-2px);
}

.page-btn.active {
  background: #d9534f;
  color: #fff;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .pagination {
    gap: 8px;
  }

  .page-btn {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
}
</style>
