document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('#image-container');
    const previewPic = document.querySelector('#previewPic');

    // Hàm Update để thay đổi văn bản và hình nền của phần tử
    function update() {
        console.log('Hình ảnh đang được cập nhật...');
        console.log('Alt:', previewPic.alt);
        console.log('Nguồn:', previewPic.src);

        // Cập nhật văn bản của phần tử
        imageContainer.textContent = 'Bạn đã di chuột qua hình ảnh!';
        // Cập nhật hình nền của div
        imageContainer.style.backgroundImage = `url(${previewPic.src})`;
        imageContainer.style.backgroundSize = 'cover';
        previewPic.style.display = 'block'; // Hiển thị hình ảnh
    }

    // Hàm hoàn tác để quay lại trạng thái ban đầu
    function undo() {
        console.log('Quay lại trạng thái ban đầu...');
        // Cập nhật lại văn bản
        imageContainer.textContent = 'Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.';
        // Quay lại hình nền ban đầu
        imageContainer.style.backgroundImage = 'none';
        previewPic.style.display = 'none'; // Ẩn hình ảnh
    }

    // Lắng nghe sự kiện hover (di chuột vào phần tử)
    imageContainer.addEventListener('mouseover', update);

    // Lắng nghe sự kiện hoàn tác (di chuột ra ngoài phần tử)
    imageContainer.addEventListener('mouseout', undo);
});
