<template>
  <div class="home-container">
    <div class="logo-container">
      <img src="/Images/Logo-maker-project.png" alt="Clothes Logo" class="logo" />
    </div>
    <h1 class="welcome-title">CHÀO MỪNG ĐẾN VỚI ZIK-CLOTHES</h1>
    <h2 class="h2">TẤT CẢ SẢN PHẨM</h2>
    <hr class="divider" />
    <Product/>
  </div>
</template>

<script>
import Product from './ComProduct.vue'
import items from '../data/items'
export default {
    name: 'ComHome',
    components: {
      Product
    },
    data() {
      return {
        products: items
      }
    },
    mounted() {
      this.$nextTick(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      });
    }
}
</script>

<style scoped>
.home-container {
    text-align: center;
    padding-top: 80px;
    background-color: #f4f4f9;
    font-family: 'Arial', sans-serif;
    animation: fadeIn 1s ease-out;
}

.logo-container {
    overflow: hidden;
    padding-top: 40px;
    margin-bottom: 20px;
}

.logo {
    max-width: 400px;
    height: auto;
    margin: 20px auto;
    animation: logoFloat 3s ease-in-out infinite;
    transition: transform 0.3s ease;
}

.logo:hover {
    transform: scale(1.05) rotate(2deg);
}

.welcome-title {
    font-size: 3rem;
    margin: 30px 0;
    color: #d9534f;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    animation: slideInFromLeft 1s ease-out;
    opacity: 0;
    animation-fill-mode: forwards;
}

.h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    margin-top: 10px;
    animation: slideInFromRight 1s ease-out 0.5s;
    opacity: 0;
    animation-fill-mode: forwards;
}

.divider {
    border: none;
    border-top: 2px solid #ddd;
    margin: 10px auto 20px auto;
    width: 80%;
    animation: expandWidth 1.5s ease-out;
}

/* Định nghĩa các keyframes */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes logoFloat {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes slideInFromLeft {
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInFromRight {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes expandWidth {
    from {
        width: 0;
    }
    to {
        width: 80%;
    }
}

/* Thêm hiệu ứng smooth scroll cho toàn trang */
html {
    scroll-behavior: smooth;
}

/* Hiệu ứng hover cho các phần tử */
.welcome-title:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
}

.h2:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
    color: #d9534f;
}

/* Media queries cho responsive */
@media (max-width: 768px) {
    .welcome-title {
        font-size: 2rem;
    }
    
    .logo {
        max-width: 300px;
    }
}

.home-description {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.product {
    width: 250px;
    padding: 15px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.product:hover {
    transform: scale(1.05);
}
</style>
