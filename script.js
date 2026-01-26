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

const studentList = [
    { fullname: "นายรัตนโกสินทร์ สาดแสง", nickname: "สิงโต", ig: "li0nnnx45", fb: "61580489709518", img: "std1.jpeg" },
    { fullname: "นายธัญวิน อร่ามวงศ์วิทย์", nickname: "อะฟิฟ", ig: "afifthanyawin", fb: "@afif.Thanyawin", img: "std2.jpeg" },
    { fullname: "นายกันตภณ เพชรพูล", nickname: "เซียมซี", ig: "siamsi0107", fb: "@kan.tphn.phechr.phul", img: "std3.jpeg" },
    { fullname: "นายวิชัย หลีหมัด", nickname: "รุก", ig: "wwucx_", fb: "@wichai.lheemad", img: "std4.jpeg" },
    { fullname: "นายกิตติพัทธ์ แช่ลิ่ม", nickname: "น็อต", ig: "not_kitti.pat", fb: "@Not.Kittipat", img: "std5.jpeg" },
    { fullname: "นายธีรัตม์ ทองชูช่วย", nickname: "เท็น", ig: "tenn_tn10", fb: "@ten.teerat.2024", img: "std6.jpeg" },
    { fullname: "นายศิระศิลป์ เบ็ญหยีหมาน", nickname: "อิลญีน", ig: "eenyeen.sirasin", fb: "@sirasin.benyeeman", img: "std7.jpeg" },
    { fullname: "นายแสงอรุณ ไพโรจน์", nickname: "ฟีโน่", ig: "sxxzl_p", fb: "@SAngxrun.PAirot", img: "std8.jpeg" },
    { fullname: "นายอธิวัชร์ เภอโส๊ะ", nickname: "ธาม", ig: "thxmgojiraaaa", fb: "@athiwat.persoh", img: "std9.jpeg" },
    { fullname: "นายภานุพัฒน์ หลังปูเต๊ะ", nickname: "ไก่มีน", ig: "panupat175", fb: "@pha.nu.phat.hn.hlang.pu.tea.kc.sadao.songkhla", img: "std10.jpeg" },
    { fullname: "นายฐาปณวัชร์ แช่วุ่น", nickname: "วัชร์", ig: "w_t1353", fb: "@thapanawatsaewun", img: "std11.jpeg" },
    { fullname: "นายฐาปณวิชญ์ แช่วุ่น", nickname: "วิชญ์", ig: "w_t._.panawit", fb: "@thapn.wichy.ese.wun", img: "std12.jpeg" },
    { fullname: "นายธีระพิชัย ศุภณัฏฐ์ปทุม", nickname: "หมิง", ig: "seetabnueng", fb: "@thira.phichai.2025", img: "std13.jpeg" },
    { fullname: "นายอัฟฟาน หลีเส็ม", nickname: "อัฟฟาน", ig: "qffqn_52", fb: "@affanlisem", img: "std14.jpeg" },
    { fullname: "นางสาวธนัสถา แช่เจ่", nickname: "เม่ย", ig: "mxzis_", fb: "@thanattha.saeje", img: "std15.jpeg" },
    { fullname: "นางสาวหนึ่งฤทัย รัตนอุดม", nickname: "มี่", ig: "nmiiqxx_", fb: "@mi.mee.7545", img: "std16.jpeg" },
    { fullname: "นางสาวธมน ชาลีเปรี่ยม", nickname: "ธมน", ig: "seetabnueng", fb: "@thamon.chaleepaen", img: "std17.jpeg" },
    { fullname: "นางสาวปัณณิกา มัณฑะนานนท์", nickname: "ปัน", ig: "puuuuuuuuuuuu.n", fb: "@ppun.nika2", img: "std18.jpeg" },
    { fullname: "นางสาวนภาศิริ อาทรวิริยกุล", nickname: "นภา", ig: "nnnnpsriii_", fb: "@napasiri.arthonwiriyakun", img: "std19.jpeg" },
    { fullname: "นางสาวพิมพ์นานา เกียรติเสนกุล", nickname: "นานา", ig: "pipim._.o", fb: "@pimnana.kiatisenkul", img: "std20.jpeg" },
    { fullname: "นางสาวธัญวรัตน์ รัตนกาญจน์", nickname: "ยิม", ig: "yyieeim", fb: "@yim.thanwarat.2024", img: "std21.jpeg" },
    { fullname: "นางสาวฐิติวรดา หมานหมัด", nickname: "โมจิ", ig: "mxgogi", fb: "@mxjii.mx", img: "std22.jpeg" },
    { fullname: "นางสาวนิจิตตา พิพัฒน์นิธิกุลชัย", nickname: "ชมพู่", ig: "somjeed_52", fb: "@nijtjta.ja", img: "std23.jpeg" },
    { fullname: "นางสาวอรสา กิ้มลั่น", nickname: "มิลล์", ig: "m1lkmx_", fb: "@ourasa.kimlan.5", img: "std24.jpeg" },
    { fullname: "นางสาวรัญชิดา หมานหนับ", nickname: "ชิดา", ig: "chi_.dx", fb: "@ranchida.mannab.2025", img: "std25.jpeg" },
    { fullname: "นางสาวกานต์สิรี สุขมิ่ง", nickname: "ปาน", ig: "seetabnueng", fb: "@kansiree.sukming", img: "std26.jpeg" },
    { fullname: "นางสาวลลนา สังข์แก้ว", nickname: "ตอง", ig: "txng._o", fb: "@lalana.sangkaew", img: "std27.jpeg" },
    { fullname: "นางสาวธัญญรัตน์ เส้งนนท์", nickname: "เทียน", ig: "thayyratnesngnnth", fb: "@thay.y.ratn.seng.nnth", img: "std28.jpeg" },
    { fullname: "นางสาวภูริชญา โสะบิลเมาะ", nickname: "นานะ", ig: "nanaann.p", fb: "@purichaya.nana.7", img: "std29.jpeg" },
    { fullname: "นางสาวกัญญาภัทร แวงรักษ์", nickname: "ด้า", ig: "nourida_78", fb: "@kanyaphat.sangrak", img: "std30.jpeg" }
];

// --- 1. สร้างรายชื่อพร้อมรูปและชื่อเล่น ---
const recipientSelect = document.getElementById('recipientSelect');
const filterChips = document.getElementById('filterChips');

studentList.forEach((std, index) => {
    const stdNo = index + 1;
    const label = `เลขที่ ${stdNo} (${std.nickname})`;

    // สร้างตัวเลือกในหน้าส่ง
    let opt = document.createElement('option');
    opt.value = label;
    opt.text = `👤 เลขที่ ${stdNo} : ${std.nickname}`;
    recipientSelect.appendChild(opt);

    // สร้างปุ่ม Chip (รูป + ชื่อเล่น) ในหน้าดู
    let btn = document.createElement('button');
    btn.className = 'chip';
    btn.innerHTML = `
        <img src="img/${std.img}" onerror="this.src='https://ui-avatars.com/api/?name=${std.nickname}&background=random'">
        <span>${std.nickname}</span>
    `;
    btn.onclick = function () { filterBy(label, this); };
    filterChips.appendChild(btn);
});

// --- 2. ฟังก์ชันส่งข้อความ ---
function sendMessage() {
    const msgInput = document.getElementById('messageInput');
    const recipient = recipientSelect.value;
    const text = msgInput.value.trim();

    if (!text) return alert("พิมพ์ข้อความก่อนนะ!");

    db.ref('messages').push({
        to: recipient,
        text: text,
        timestamp: Date.now()
    }).then(() => {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.7 } });
        msgInput.value = "";
        document.getElementById('count').innerText = "0";
        alert("ส่งสำเร็จ!");
    });
}

// --- 3. ฟังก์ชันกรองข้อความ ---
let currentFilter = 'all';
function filterBy(val, el) {
    currentFilter = val;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    renderMessages();
}

// --- 4. ฟังก์ชันแสดงผลการ์ดข้อความ (เลขที่ ชื่อเล่น รูป) ---
function renderMessages() {
    const listDiv = document.getElementById('messageList');
    db.ref('messages').once('value', (snapshot) => {
        listDiv.innerHTML = "";
        const data = snapshot.val();
        if (!data) return listDiv.innerHTML = "<p style='text-align:center; color:#999;'>ยังไม่มีข้อความ</p>";

        const filtered = Object.values(data).reverse().filter(m =>
            currentFilter === 'all' ? true : m.to === currentFilter
        );

        filtered.forEach(item => {
            // ค้นหาข้อมูลนักเรียนเพื่อดึงรูปภาพ
            const stdData = studentList.find((s, i) => `เลขที่ ${i + 1} (${s.nickname})` === item.to);

            const d = new Date(item.timestamp);
            const dateStr = d.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
            const timeStr = d.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });

            listDiv.innerHTML += `
                <div class="msg-card">
                    <div class="msg-header" style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                        <img src="img/${stdData ? stdData.img : 'all.png'}" 
                             style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;"
                             onerror="this.src='https://ui-avatars.com/api/?name=ALL&background=6366f1&color=fff'">
                        <div class="msg-info">
                            <div class="msg-to" style="font-weight: 600; color: #6366f1; font-size: 0.9rem;">ถึง: ${item.to}</div>
                            <span class="msg-time" style="font-size: 0.7rem; color: #94a3b8;"><i class="fa-regular fa-clock"></i> ${dateStr} | ${timeStr}</span>
                        </div>
                    </div>
                    <div class="msg-text" style="line-height: 1.5; color: #333; word-break: break-word;">${item.text}</div>
                </div>
            `;
        });
    });
}

// อัปเดต Realtime
db.ref('messages').on('value', renderMessages);

function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// นับตัวอักษร
document.getElementById('messageInput').addEventListener('input', function () {
    document.getElementById('count').innerText = this.value.length;
});