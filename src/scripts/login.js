const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
//hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

function Login(event) {
    event.preventDefault(); // Ngăn chặn hành vi submit mặc định
  
    // Lấy giá trị từ form
    const username = document.querySelector('input[id="email"]').value;
    const password = document.querySelector('input[id="pass"]').value;
  
    // Kiểm tra thông tin đăng nhập (ví dụ đơn giản)
    if (username === "user" && password === "pass") {
      // Chuyển hướng tới trang khác nếu đăng nhập thành công
      window.location.href = "../../index.html";
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  }

document.addEventListener("DOMContentLoaded", () => {
    showPopupBtn.click();
});