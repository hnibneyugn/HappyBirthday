const openVideoButton = document.getElementById('openVideoButton');
const videoModal = document.getElementById('videoModal');        
const overlay = document.getElementById('overlay');
const videoPlayer = document.getElementById('videoPlayer');

let clickCount = 0; // Biến đếm số lần nhấn

// Hàm mở video pop-up
openVideoButton.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        // Lần nhấn đầu tiên: hiển thị video
        videoModal.style.display = 'block';
        overlay.style.display = 'block';
        videoPlayer.play();
    } else if (clickCount === 2) {
        // Lần nhấn thứ hai: hiển thị thông báo và đặt lại trạng thái
        Swal.fire({
            iconHtml: '🎉', 
            title: '🎉 Chúc mừng! 🎉',
            html: `
                <img src="img/voucher.jpg" style="width: 200px; border-radius: 10px; margin-top: 10px;">
                <p>Bạn đã nhận được một chiếc lắc tay xinh xắn và một voucher bao ăn trị giá 100k :D!</p>
                <p class="expire" style = "margin-top: 15px">Hạn sử dụng: 20/11/2025</p>`,
            background: '#f9f9f9',
            confirmButtonText: 'Sử dụng',
            confirmButtonColor: '#6c5ce7',
            width: 400,
            customClass: {
                title: 'complete-title',
                htmlContainer: 'complete-content'
            },
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            preConfirm: () => {
                // Chuyển hướng đến Facebook
                window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScCcqrtffQD7SG4RtbB_HvRFU-5zWcVoJccqZuHwPvOMrtQMQ/viewform?usp=dialog';
            }
        }).then(() => {
            // Đặt lại trạng thái clickCount sau khi hiển thị thông báo
            clickCount = 0;
        });
    }
});

// Đóng video pop-up và hiển thị thông báo khi video kết thúc
videoPlayer.addEventListener('ended', function() {
    videoModal.style.display = 'none';
    overlay.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0; // Đưa video về đầu
    Swal.fire({
        title: 'Trôn trôn :>> nhập lại lần nữa ikk',
        html: `
            <img src="img/hehe-cat.gif" style="width: 200px; border-radius: 10px; margin-top: 10px;">`,
        background: '#f9f9f9',
        confirmButtonText: 'Đóng',
        confirmButtonColor: '#6c5ce7',
        width: 400
    });
});

// Đóng video khi nhấp vào overlay
overlay.addEventListener('click', function() {
    videoModal.style.display = 'none';
    overlay.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.currentTime = 0; // Đưa video về đầu
});