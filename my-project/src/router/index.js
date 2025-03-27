import { createWebHistory,createRouter } from "vue-router";
import Home from '@/components/ComHome.vue'
import SanPham from '@/components/ComSanPham.vue'
import GioiThieu from '@/components/ComGioiTh.vue'
import LienHe from '@/components/ComLienHe.vue'
import ProductDetail from '@/components/ComProductDetail.vue'
import Cart from '@/components/ComCart.vue'
import Search from '@/components/ComTimKiem.vue'
import Ao from '@/components/ComAo.vue'
import Quan from '@/components/ComQuan.vue'
import Giay from '@/components/ComGiay.vue'
import ChinhSachDoiTra from '@/components/ComChinhSachDoiTra.vue'
import ChinhSachBaoMat from '@/components/ComChinhSachBaoMat'
import DieuKhoanDichVu from '@/components/ComDieuKhoanDichVu.vue'
import HoaDon from '@/components/ComHoaDon.vue'
import Login from '@/components/ComLogin.vue'
import Register from '@/components/ComRegister.vue'
// tạo mảng chứa những đường link
const routes=[
    // đối tượng trang chủ
    {
        path:"/",
        name:"Home",
        component:Home
    },
    // đường link ko phải là trang chủ path:"/ten"
    {
        path:"/sanpham",
        name:"SanPham",
        component:SanPham
    },
    {
        path:"/gioithieu",
        name:"GioiThieu",
        component:GioiThieu
    },
    {
        path:"/lienhe",
        name:"LienHe",
        component:LienHe
    },

    {
        path:"/product/:id",
        name:"ProductDetail",
        component:ProductDetail
    },
    {
        path:"/cart",
        name:"Cart",
        component:Cart
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/sanpham/ao',
        name: 'Ao',
        component: Ao
    },
    {
        path: '/sanpham/quan',
        name: 'Quan',
        component: Quan
    },
    {
        path: '/sanpham/giay',
        name: 'Giay',
        component: Giay
    },
    {
        path: '/chinh-sach-doi-tra',
        name: 'Chinh-sach-doi-tra',
        component: ChinhSachDoiTra
    },
    {
        path: '/chinh-sach-bao-mat',
        name: 'Chinh-sach-bao-mat',
        component: ChinhSachBaoMat
    },
    {
        path: '/dieu-khoan-dich-vu',
        name: 'Dieu-khoan-dich-vu',
        component: DieuKhoanDichVu
    },
    {
        path: '/hoadon',
        name: 'Hoadon',
        component: HoaDon
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
]

// tạo đối tượng router
const router=createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }; // Scroll to the top on route change
    }
})
export default router