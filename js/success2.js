function checkFlag() {  
    // รับค่าจาก input  
    // flag{20th_gen_secret_4bcd3f!_decode_this}
    const flagInput = document.getElementById('flagInput').value;  
    const correctFlag = "flag{20th_gen_secret_4bcd3f!_decode_this}"; // Flag ที่ถูกต้อง  

    // เช็คว่า flag ที่ผู้ใช้กรอกถูกต้องหรือไม่  
    if (flagInput === correctFlag) {  
        // ถ้าถูกต้อง เก็บค่าลง sessionStorage  
        sessionStorage.setItem('ctfPassword', correctFlag);  
        // เปลี่ยนไปยังหน้า Success Page  
        window.location.href = 'success.html';   
    } else {  
        // ถ้าผิดแสดงข้อความเตือน  
        alert("❌ Wrong flag, try again!");  
    }  
}  

// เพิ่ม event listener สำหรับการกด Enter
document.getElementById('flagInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkFlag();
    }
});

// ตรวจสอบ token เมื่อโหลดหน้า  
document.addEventListener('DOMContentLoaded', function() {  
    const correctPassword = "flag{20th_gen_secret_4bcd3f!_decode_this}";  
    const storedPassword = sessionStorage.getItem('ctfPassword');  
    
    if (storedPassword === correctPassword) {  
        window.location.href = 'success.html';  
    }  
});  

// ตรวจสอบ token ต่อเนื่อง  
setInterval(function() {  
    const correctPassword = "flag{20th_gen_secret_4bcd3f!_decode_this}";  
    const storedPassword = sessionStorage.getItem('ctfPassword');  
    
    if (storedPassword === correctPassword) {  
        window.location.href = 'success.html';  
    }  
}, 1000);  

// ป้องกันการใช้ Developer Tools  
document.addEventListener('contextmenu', function(e) {  
    e.preventDefault();  
});  

document.addEventListener('keydown', function(e) {  
    if (e.key === 'F12' ||   
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||   
        ((e.ctrlKey || e.metaKey) && e.key === 'u')) {  
        e.preventDefault();  
    }  
});
