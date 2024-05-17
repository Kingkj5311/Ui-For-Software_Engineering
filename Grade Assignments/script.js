// const progress1 = document.getElementById('progress1');
// const progress2 = document.getElementById('progress2');
// // Function to update progress
// function updateProgress(element, progress) {
//     element.style.width = progress + '%';
// }
// // Example usage: updating progress of progress1 to 50% and progress2 to 75%
// updateProgress(progress1, 100);
// updateProgress(progress2, 75);
document.getElementById('file-input').addEventListener('change', function() {
    const fileName = this.files[0].name;
    const fileSize = (this.files[0].size / 1024).toFixed(2) + ' KB';
    document.querySelector('.file-name').textContent = fileName;
    document.querySelector('.file-size').textContent = fileSize;
});