<template>
  <div class="home-container">
    <div class="title-container">
      <h1 class="home-title">TẤT CẢ SẢN PHẨM</h1>
      <hr class="divider" />
    </div>
    <div class="product-section">
      <Product/>
    </div>
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
        window.scrollTo(0, 0);
        this.addScrollAnimation();
      });
    },
    methods: {
      addScrollAnimation() {
        window.addEventListener('scroll', () => {
          const products = document.querySelectorAll('.product');
          products.forEach(product => {
            const rect = product.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.75) {
              product.classList.add('fade-in');
            }
          });
        });
      }
    }
}
</script>

<style scoped>
.home-container {
    text-align: center;
    padding: 80px 125px;
    background: linear-gradient(135deg, #f4f4f9 0%, #e8e8f3 100%);
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
}

.title-container {
    margin-bottom: 40px;
    animation: slideDown 0.8s ease-out;
}

.home-title {
    font-size: 3rem;
    font-weight: 700;
    color: #2c3e50;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 20px;
    padding-top: 50px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.divider {
    border: none;
    background: linear-gradient(90deg, #d29805, #ffd700);
    height: 3px;
    margin: 15px auto 30px;
    width: 60%;
    animation: expandWidth 1s ease-out;
}

.product-section {
    position: relative;
    z-index: 1;
}

.products-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
    padding: 20px;
}

.product {
    background-color: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    opacity: 0;
    transform: translateY(20px);
}

.product.fade-in {
    opacity: 1;
    transform: translateY(0);
}

.product:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes expandWidth {
    from {
        width: 0;
    }
    to {
        width: 60%;
    }
}

@media (max-width: 768px) {
    .home-container {
        padding: 60px 20px;
    }
    
    .home-title {
        font-size: 2rem;
    }
}
</style>
