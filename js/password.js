$("#submitName").click(function () {
    var userName = $("#userName").val(); // Lấy tên người dùng nhập
    var pwd = $("#pwd").val(); // Lấy mật khẩu người dùng nhập

    // Kiểm tra nếu cả tên và mật khẩu đều nhập
    if (userName && pwd) 
    {
      // Kiểm tra tên và mật khẩu chính xác
      if (userName === "Lưu Lê Khả Trân" && pwd === "0111") 
      {
        window.location.href = "welcome.html"; // Chuyển hướng trang welcome
      } else 
      {
        Swal.fire
        ({
          icon: "warning",
          title: "Nhập sai ngày sinh hoặc tên rồi nha",
          html: `<img src="img/Whut.jpg" style="width:250px;">`,
          customClass: {
            title: 'weird-title',
            content: 'weird-content'
          }
        });
      }
    } 
      else 
      {
      // Xử lý khi không nhập tên
      Swal.fire({
        icon: "error",
        title: "Nhập thông tin vô cho tui!",
        html: `<img src="img/Haizz.jpg" style="width:300px;">`,
        customClass: {
          title: 'error-title',
          content: 'error-content'
        }
      });
    }
})