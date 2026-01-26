const firebaseConfig = {
    apiKey: "AIzaSyCe_0BqX0rOHe3QVrJfnrRbq7W_wPSH_5k",
    authDomain: "fakbok4-1.firebaseapp.com",
    databaseURL: "https://fakbok4-1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fakbok4-1",
    storageBucket: "fakbok4-1.firebasestorage.app",
    messagingSenderId: "831219804144",
    appId: "1:831219804144:web:d2dfe762eb274824179f35"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// สร้างรายชื่อเพื่อน 30 คนใน Dropdown
const select = document.getElementById('recipientSelect');
for (let i = 1; i <= 30; i++) {
    let option = document.createElement('option');
    option.value = `เลขที่ ${i}`;
    option.text = `👤 เลขที่ ${i}`;
    select.appendChild(option);
}

const msgInput = document.getElementById('messageInput');
msgInput.addEventListener('input', () => {
    document.getElementById('count').innerText = msgInput.value.length;
});

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function sendMessage() {
    const text = msgInput.value.trim();
    const recipient = document.getElementById('recipientSelect').value;

    if (!text) return alert('พิมพ์ข้อความก่อนส่งนะ');

    db.ref('messages').push({
        to: recipient, // เก็บข้อมูลว่าส่งถึงใคร
        text: text,
        timestamp: Date.now()
    }).then(() => {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.7 } });
        msgInput.value = "";
        document.getElementById('count').innerText = "0";
        alert('ส่งถึง ' + recipient + ' เรียบร้อย!');
    });
}

db.ref('messages').on('value', (snapshot) => {
    const listDiv = document.getElementById('messageList');
    listDiv.innerHTML = "";
    const data = snapshot.val();

    if (!data) {
        listDiv.innerHTML = "<p style='text-align:center; color:#999;'>ยังไม่มีใครฝากบอกเลย...</p>";
        return;
    }

    // แปลง Object เป็น Array และเรียงลำดับใหม่ไปเก่า
    Object.values(data).reverse().forEach(item => {
        // --- ส่วนการจัดการวันที่และเวลา ---
        const dateObj = new Date(item.timestamp);

        // รูปแบบวันที่: 26 ม.ค. 69
        const dateText = dateObj.toLocaleDateString('th-TH', {
            day: 'numeric',
            month: 'short',
            year: '2-digit'
        });

        // รูปแบบเวลา: 15:30
        const timeText = dateObj.toLocaleTimeString('th-TH', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        const fullDateTime = `${dateText} | ${timeText}`;
        // -----------------------------

        listDiv.innerHTML += `
            <div class="msg-card">
                <div class="msg-to"><i class="fa-solid fa-thumbtack"></i> ถึง: ${item.to || 'ทุกคนในห้อง'}</div>
                <span class="msg-time">
                    <i class="fa-regular fa-clock"></i> ${fullDateTime}
                </span>
                <div class="msg-text">${item.text}</div>
            </div>
        `;
    });
});