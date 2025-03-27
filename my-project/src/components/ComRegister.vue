<template>
  <div>
    <!-- Toàn bộ nội dung trang web bên trong lớp content -->
    <div :class="{ content: true, blur: showDialog }">
      <img
        src="/Images/Logo-maker-project.png"
        alt="Clothes Logo"
        class="logo"
      />
      <h2>Đăng ký tài khoản</h2>
      <input v-model="fullName" placeholder="Tên người dùng" />
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="username" placeholder="Tên đăng nhập" />
      <input v-model="password" type="password" placeholder="Mật khẩu" />
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Xác nhận mật khẩu"
      />
      <button @click="register">Đăng ký</button>
      <p v-if="error" class="error">{{ error }}</p>
    </div>

    <!-- Hộp thoại hiển thị thông báo -->
    <div v-if="showDialog" class="dialog-overlay" @click="closeDialog">
      <div class="dialog">
        <p>{{ dialogMessage }}</p>
        <button @click="closeDialog">Đóng</button>
      </div>
    </div>
  </div>
</template>

<script>
import users from "@/data/users";

export default {
  data() {
    return {
      fullName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      error: "",
      users: users,
      showDialog: false,
      dialogMessage: "",
    };
  },
  methods: {
    register() {
      // Kiểm tra tên người dùng không để trống
      if (!this.fullName) {
        this.showDialogWithMessage("Tên người dùng không được để trống");
        return;
      }

      // Kiểm tra email hợp lệ
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(this.email)) {
        this.showDialogWithMessage("Email không hợp lệ");
        return;
      }

      // Kiểm tra tên đăng nhập có ít nhất 6 ký tự và không bắt đầu bằng số
      const usernameRegex = /^(?!\d)(?=[A-Za-z0-9]{6,}$)/;
      if (!usernameRegex.test(this.username)) {
        this.showDialogWithMessage(
          "Tên đăng nhập phải có ít nhất 6 ký tự và không được bắt đầu bằng số"
        );
        return;
      }

      // Kiểm tra mật khẩu
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      if (!passwordRegex.test(this.password)) {
        this.showDialogWithMessage(
          "Mật khẩu không hợp lệ (ít nhất 6 ký tự, bao gồm chữ cái và số)"
        );
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.showDialogWithMessage("Mật khẩu không trùng khớp");
        return;
      }

      const existingUser = this.users.find((x) => x.username === this.username);
      if (existingUser) {
        this.showDialogWithMessage("Tên đăng nhập đã tồn tại");
        return;
      }

      // Tạo user mới
      const newUser = {
        id: this.users.length + 1,
        fullName: this.fullName,
        email: this.email,
        username: this.username,
        password: this.password,
      };

      // Thêm user mới vào danh sách
      this.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(this.users));

      // Hiển thị thông báo thành công và chuyển hướng đến trang đăng nhập
      this.showDialogWithMessage("Đăng ký thành công!");
      setTimeout(() => {
        this.closeDialog();
        this.$router.push("/login");
      }, 500);
    },

    showDialogWithMessage(message) {
      this.dialogMessage = message;
      this.showDialog = true;
      this.error = message;
    },

    closeDialog() {
      this.showDialog = false;
      this.error = "";
    },

    clearForm() {
      this.fullName = "";
      this.email = "";
      this.username = "";
      this.password = "";
      this.confirmPassword = "";
      this.error = "";
    },
  },
};
</script>

<style scoped>
/* Đặt font mặc định cho toàn bộ trang */
body {
  font-family: "Arial", sans-serif;
  background-color: #e9ecef; /* Nền sáng hơn */
  margin: 0;
  padding: 0;
}

/* Căn giữa phần tiêu đề */
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Phong cách cho khung chứa với khoảng cách từ header */
.content {
  max-width: 400px;
  margin: 50px auto;
  margin-top: 150px; /* Khoảng cách từ phần header */
  padding: 30px; /* Tăng padding để tạo không gian */
  border: 5px solid #eed5d2; /* Đường viền xanh */
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Bóng đổ đậm hơn */
  background-color: #ffffff; /* Màu nền trắng sáng */
  transition: box-shadow 0.3s ease;
}

.content:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4); /* Bóng khi hover */
}

/* Hiệu ứng mờ khi hộp thoại hiện */
.blur {
  filter: blur(5px); /* Làm mờ toàn bộ nội dung */
  pointer-events: none; /* Vô hiệu hóa tương tác khi mờ */
}

/* Phong cách cho logo */
.logo {
  display: block;
  margin: -20px auto -40px; /* Căn giữa và thêm khoảng cách dưới logo */
  width: 60%; /* Điều chỉnh kích thước logo */
  height: auto; /* Tự động điều chỉnh chiều cao */
  border: 0; /* Đảm bảo ẩn viền */
  outline: none; /* Ẩn outline */
  border-radius: 10%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
}

/* Phong cách cho tiêu đề */
h2 {
  color: #333;
  font-size: 28px; /* Tăng kích thước tiêu đề */
  margin-bottom: 20px;
  text-align: center;
}

/* Phong cách cho các trường nhập */
input {
  width: 100%;
  padding: 12px;
  margin: 10px 0; /* Thay đổi margin cho input */
  border: 2px solid #ccc; /* Đường viền rõ nét */
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Hiệu ứng chuyển tiếp cho viền */
}

input:focus {
  border-color: #28a745; /* Đổi màu viền khi input được chọn */
  outline: none; /* Loại bỏ outline mặc định */
  box-shadow: 0 0 5px rgba(40, 167, 69, 0.5); /* Thêm bóng cho input khi focus */
}

/* Phong cách cho nút Đăng ký */
button {
  width: 100%;
  padding: 12px;
  color: #050505;
  background-color: #eed5d2; /* Màu nền nút xanh */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Thêm chuyển tiếp cho nút */
}

button:hover {
  background-color: #329d52; /* Thay đổi màu khi hover */
  color: #f5f5f5;
  transform: translateY(-3px); /* Nâng nút khi hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Thêm bóng cho nút khi hover */
}

/* Phong cách cho thông báo lỗi */
.error {
  color: #ff4d4d;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}

/* Phong cách cho dòng hỏi đăng ký */
.register-prompt {
  text-align: center;
  margin-top: 15px; /* Khoảng cách giữa ô nhập và dòng hỏi */
}

/* Phong cách cho đường link đăng ký */
.register-link {
  color: #007bff; /* Màu xanh cho đường link */
  text-decoration: none; /* Bỏ gạch chân */
}

.register-link:hover {
  text-decoration: underline; /* Gạch chân khi hover */
}

/* CSS cho hộp thoại thông báo với nền mờ */
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6); /* Nền tối hơn cho hộp thoại */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px); /* Hiệu ứng mờ nền */
}

.dialog {
  background-color: #fff;
  padding: 30px; /* Tăng padding */
  border-radius: 8px;
  width: 320px; /* Điều chỉnh kích thước */
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Bóng đổ đậm hơn cho hộp thoại */
}

.dialog button {
  background-color: #28a745; /* Nền nút hộp thoại */
  color: white;
  border: none;
  padding: 10px 20px; /* Tăng kích thước nút */
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease; /* Thêm chuyển tiếp cho nút */
}

.dialog button:hover {
  background-color: #218838; /* Thay đổi màu khi hover */
}
</style>
