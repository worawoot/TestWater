
// ใส่ LIFF ID ของคุณที่นี่
const MY_LIFF_ID = '1657790891-jb82nQBm'; 

// ใส่ URL ของ Google Apps Script ที่คุณได้มา
const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbx45OxfmUd2BR7kNxCmuWo9i0nwmP60eMjQh_vm_7SbhrBNk4gEVO6tbtTrNKHgyWJE/exec';

// ฟังก์ชันหลักที่จะทำงานเมื่อหน้าเว็บโหลด
document.addEventListener('DOMContentLoaded', () => {
  initializeLIFF();
  
  // ตั้งค่าการคลิกปุ่ม
  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', sendDataToSheet);
});

// 1. ฟังก์ชันเริ่มต้น LIFF
async function initializeLIFF() {
  try {
    await liff.init({ liffId: MY_LIFF_ID });
    if (!liff.isLoggedIn()) {
      liff.login();
    }
    // ถ้า Login แล้ว ก็ไม่ต้องทำอะไร รอผู้ใช้กดปุ่ม
  } catch (error) {
    console.error('LIFF initialization failed:', error);
    alert('ไม่สามารถเปิด LIFF ได้');
  }
}

// 2. ฟังก์ชันส่งข้อมูล (จากคำตอบที่แล้ว)
async function sendDataToSheet() {
  try {
    const profile = await liff.getProfile();
    const userEmail = document.getElementById('email-input').value;

    if (!userEmail) {
      alert('กรุณากรอกอีเมล');
      return;
    }

    const dataToSend = {
      userId: profile.userId,
      displayName: profile.displayName,
      email: userEmail
    };

    // แสดงสถานะว่ากำลังโหลด
    document.getElementById('submit-button').innerText = 'กำลังบันทึก...';
    document.getElementById('submit-button').disabled = true;

    // ยิง
    const response = await fetch(GAS_WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors', // หรือ 'cors' ถ้า GAS ตั้งค่าถูกต้อง
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend)
    });

    alert('บันทึกข้อมูลสำเร็จ!');
    liff.closeWindow();

  } catch (error) {
    console.error('Error sending data:', error);
    alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
    // คืนค่าปุ่มให้กดได้อีกครั้ง
    document.getElementById('submit-button').innerText = 'บันทึกข้อมูล';
    document.getElementById('submit-button').disabled = false;
  }
}
