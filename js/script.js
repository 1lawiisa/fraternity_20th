function checkFlag() {
    const flagInput = document.getElementById('flagInput').value;
    console.log("Flag input:", flagInput); // ตรวจสอบค่าที่กรอกเข้ามา

    // เช็ค flag ที่กรอก
    if (flagInput === "flag{20th_gen_secret_4bcd3f!_decode_this}") {
        console.log("Flag ถูกต้อง");

        const accessToken = generateToken();
        console.log("Generated token:", accessToken); // ดู token ที่สร้าง

        sessionStorage.setItem('ctfAccessToken', accessToken); // เก็บค่า token ใน sessionStorage
        setTimeout(() => {
            window.location.href = 'success.html';
        }, 2000);
    } else {
        console.log("Flag ผิด");
        showMessage("❌ Wrong flag, try again!");
    }
}

// สร้าง token
function generateToken() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// แสดงข้อความ
function showMessage(message) {
    const messageElement = document.getElementById('flagMessage');
    messageElement.textContent = message;
    messageElement.classList.add('show');
    
    if (message.includes("Wrong")) {
        messageElement.classList.add('shake');
        setTimeout(() => {
            messageElement.classList.remove('shake');
        }, 500);
    }
}
