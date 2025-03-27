<template>
  <main>
    <div class="menu">
      <h2 class="menu-title">THÔNG TIN CHI TIẾT</h2>
      <div class="menu-carousel">
        <div class="menu-item">
          <img
            :src="product.image"
            alt="Pumpkin Spice Juice"
            class="product-image"
          />
          <div class="menu-item-info">
            <h2>{{ product.name }}</h2>
            <p class="description">{{ product.description }}</p>
            <p class="price">{{ formatPrice(product.price) }} VND</p>
            <p class="quantity">Số lượng còn: {{ product.quality }}</p>
            <div v-if="product.quality === 0" class="sold-out">Hết hàng</div>
            <div v-else>
              <button @click="addToCart(product)">Thêm vào giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import items from "../data/items";


export default {
  data() {
    return {
      product: {},
      cart: JSON.parse(localStorage.getItem("cart")) || [], // Load cart from localStorage
    };
  },

  mounted() {
    let id = this.$route.params.id;
    this.product = items.find((item) => item.id == id);
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi sản phẩm được tải
  },

  methods: {
    addToCart(product)
        {
            // kiem tra hàng có trong giỏ hay chưa
            const infoproduct=this.cart.find(item=>item.id==product.id)
            if(infoproduct && product.quality>0)
            {
              
                infoproduct.quantity+=1
                
            }
            else
            {
                if(product.quality>0)
                {
                    const newproduct={...this.product,quantity:1}
                    this.cart.push(newproduct)
                }
                
            }
            product.quality--

      
      // Cập nhật giỏ hàng vào localStorage sau khi thêm hoặc thay đổi
      this.updateCart();
    },

    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    formatPrice(price) {
      if (price === undefined || price === null) {
        return "0";
      }
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
};
</script>


<style>
html,
body {
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
  padding: 60px 20px;
  background-color: #f4f4f9;
  min-height: 100vh;
  animation: fadeIn 0.8s ease-out;
}

.menu-title {
  font-size: 2.5rem;
  margin: 70px 0 40px;
  color: #333;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
}

.menu-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, transparent, #d29805, transparent);
}

.menu-carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.menu-item {
  display: flex;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;
  animation: slideUp 0.8s ease-out;
}

.product-image {
  width: 50%;
  height: 00px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-image:hover {
  transform: scale(1.05);
}

.menu-item-info {
  flex: 1;
  padding: 40px;
  background: linear-gradient(135deg, #000000);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu-item-info h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 20px 0;
  color: #eee;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #d29805;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.quantity {
  font-size: 1.2rem;
  color: #d29805;
  margin: 15px 0;
  font-weight: 500;
}

button {
  background: #d29805;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 20px;
  font-weight: 600;
}

button:hover {
  background: #b88504;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(210, 152, 5, 0.3);
}

.sold-out {
  background: rgba(255, 59, 59, 0.1);
  color: #ff3b3b;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 20px;
  border: 2px solid #ff3b3b;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: pulse 2s infinite;
}

button.disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.7;
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

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .menu-item {
    flex-direction: column;
  }
  
  .product-image {
    width: 100%;
    height: 400px;
  }
  
  .menu-item-info {
    padding: 30px;
  }
  
  .menu-item-info h2 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .menu-title {
    font-size: 2rem;
  }
  
  .product-image {
    height: 300px;
  }
  
  .menu-item-info h2 {
    font-size: 1.8rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .price {
    font-size: 1.5rem;
  }
}
</style>
