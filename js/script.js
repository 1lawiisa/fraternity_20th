function checkFlag() {
    // flag{20th_gen_secret_4bcd3f!_decode_this}
    const flagInput = document.getElementById('flagInput').value;
    
    if (flagInput === "flag{20th_gen_secret_4bcd3f!_decode_this}") {
        showMessage("🎉 Congratulations! That's the correct flag!");
        document.getElementById('flagMessage').style.color = "#1db954";
        
        createFireworks();
        
        // เก็บค่า token ใน Session Storage
        const accessToken = generateToken();
        sessionStorage.setItem('ctfAccessToken', accessToken);
        
        setTimeout(() => {
            window.location.href = '/success.html';
        }, 2000);
    } else {
        showMessage("❌ Wrong flag, try again!");
        document.getElementById('flagMessage').style.color = "#ff4444";
    }
}

// ฟังก์ชันสร้าง token
function generateToken() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// เพิ่มฟังก์ชัน effect พลุ
function createFireworks() {
    const fireworks = document.createElement('div');
    fireworks.className = 'fireworks';
    document.body.appendChild(fireworks);
    
    // ลบ element พลุหลังจาก animation จบ
    setTimeout(() => {
        fireworks.remove();
    }, 2000);
}

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


