// script.js

// 운세 데이터 풀 (풍성하게 확장됨)
const fortunes = {
    summaries: [
        { score: 98, text: "완벽한 하루! 로또라도 사볼까요? 🎉" },
        { score: 96, text: "무엇을 하든 운이 따르는 마법 같은 날입니다! ✨" },
        { score: 92, text: "기대 이상의 성과를 얻을 수 있는 하루입니다. 🚀" },
        { score: 88, text: "활기가 넘치고 기분 좋은 소식이 들려올 거예요. 😊" },
        { score: 85, text: "평소보다 일들이 수월하게 풀리는 날입니다. 🍀" },
        { score: 82, text: "소소하지만 확실한 행복을 발견할 수 있어요. 🍩" },
        { score: 78, text: "안정적이고 편안한 하루가 예상됩니다. ☕" },
        { score: 75, text: "조용히 내실을 다지기 좋은 무난한 날입니다. 📚" },
        { score: 70, text: "평범함 속에 숨겨진 작고 소중한 기쁨이 있어요. 🌼" },
        { score: 65, text: "조금 지칠 수 있지만 끝은 나쁘지 않습니다. 💪" },
        { score: 60, text: "서두르지 말고 한 템포 쉬어가는 건 어떨까요? 🛋️" },
        { score: 55, text: "예상치 못한 변수가 생길 수 있으니 침착하세요. ☂️" },
        { score: 50, text: "중요한 결정은 내일로 미루는 것이 좋습니다. 🐢" },
        { score: 45, text: "오늘은 무리하지 않고 컨디션 관리에 집중하세요. 🍵" },
        { score: 40, text: "가벼운 스트레칭으로 긴장을 풀고 주의를 기울이세요. 🧘" }
    ],
    money: [
        "뜻밖의 용돈이나 수익이 생길 수 있어요. 기분 좋은 하루!",
        "길을 걷다 동전을 줍거나 잊고 있던 비상금을 발견할지도 몰라요.",
        "오늘은 재물운이 상승 곡선을 그립니다. 적극적으로 움직이세요.",
        "평소 눈여겨 보던 물건을 사도 좋은 날입니다. 나를 위한 투자를 해보세요.",
        "금전 흐름이 매우 원활합니다. 저축이나 재테크 계획을 세우기 좋습니다.",
        "지출과 수입이 엇비슷하여 안정적인 재무 상태를 유지합니다.",
        "소소한 금전적 행운이 따릅니다. 커피 값 정도는 굳을 수 있겠네요.",
        "오늘은 지갑을 열지 마세요. 충동구매의 유혹을 참아야 합니다.",
        "예상치 못한 지출이 생길 수 있으니 꼭 필요한 것인지 두 번 생각하세요.",
        "돈을 빌려주거나 거래를 하는 것은 피하는 것이 상책입니다."
    ],
    love: [
        "마음에 두던 사람과 눈이 마주칠 확률이 높습니다. 용기를 내어 웃어보세요! 💗",
        "우연한 만남이 깊은 인연으로 발전할 수 있는 낭만적인 하루입니다.",
        "연인 또는 호감 있는 사람과의 사이가 더욱 돈독해집니다. 다정한 말을 건네보세요.",
        "매력이 넘치는 날입니다. 가벼운 향수나 예쁜 옷으로 매력을 어필해보세요.",
        "새로운 만남이 기다리고 있습니다. 동호회나 모임에 나가는 건 어떨까요?",
        "오늘은 혼자만의 시간을 가지는 것이 오히려 마음 편해요. 나를 사랑하는 시간을 가지세요.",
        "평범한 일상 속에서 잔잔하고 따뜻한 사랑의 감정을 느낄 수 있습니다.",
        "연락을 기다리던 사람에게서 먼저 문자가 올지도 모릅니다.",
        "오해로 인한 작은 다툼이 있을 수 있으니 부드러운 말투를 의식해 보세요.",
        "감정 기복이 생길 수 있습니다. 질투나 서운함을 겉으로 드러내지 않는 게 좋습니다."
    ],
    interpersonal: [
        "어디를 가나 환영받는 날입니다. 사람들과의 대화가 즐겁습니다.",
        "주변 사람들에게서 생각지도 못한 작은 도움을 받을 수 있는 하루입니다.",
        "뜻밖의 귀인을 만나 문제를 해결하거나 좋은 제안을 받을 수 있어요.",
        "친구나 동료에게 먼저 안부를 묻고 커피 한 잔을 건네보세요. 운이 2배가 됩니다.",
        "오해로 멀어졌던 사람과 자연스럽게 다시 가까워질 수 있는 좋은 타이밍입니다.",
        "부탁할 일이 있다면 오늘이 기회입니다. 흔쾌히 수락받을 수 있습니다.",
        "오늘은 경청하는 자세가 필요합니다. 다른 사람의 말에 귀 기울이세요.",
        "구설수에 오를 수 있으니 다른 사람의 뒷담화에 동조하는 것은 절대 금물입니다.",
        "친한 사이일수록 예의를 지켜야 합니다. 장난이 선을 넘지 않게 주의하세요.",
        "약속 시간이 늦어지거나 어긋날 수 있으니 미리 스케줄을 점검하시길 바랍니다."
    ],
    work: [
        "상사나 선생님, 고객에게 크게 칭찬받을 일이 생깁니다. 자신감을 가지세요! 👍",
        "꽉 막혔던 문제가 시원하게 해결됩니다. 실력을 마음껏 발휘하세요.",
        "새로운 아이디어가 샘솟는 하루! 번뜩이는 생각은 잊기 전에 꼭 메모로 남기세요.",
        "노력한 만큼 성과가 눈에 봅니다. 뿌듯함으로 가득 찬 퇴근길/하굣길이 될 거예요.",
        "중요한 발표나 시험이 있다면 결과가 긍정적입니다. 긴장하지 마세요.",
        "동료와의 협업이 빛을 발하는 날입니다. 팀 플레이에 집중하세요.",
        "평범하고 루틴한 일상이 이어집니다. 묵묵히 내 할 일을 해내는 것도 중요합니다.",
        "집중력이 조금 흩어질 수 있으니, 작은 목표를 세우고 하나씩 체크하며 해결하세요.",
        "오늘은 쓸데없는 야근이나 보충을 피하고, 정시에 끝내 휴식을 취하는 게 이득입니다.",
        "실수가 발생할 수 있으니 제출하기 전에 한 번 더 꼼꼼히 검토하는 습관을 지키세요."
    ],
    memes: [
        "자본주의 괴물 💰", "맑은 눈의 광인 👀", "무념무상 은둔자 🍵", "열정 만수르 🔥",
        "소신파 불도저 🚀", "파워 생존주의자 ⛺", "프로 귀차니스트 🦥", "감성 끝판왕 🌸",
        "인간 비타민 🍋", "프로 소비러 🛍️", "아마추어 철학자 🧐", "강철 멘탈 소유자 🛡️",
        "프로 걱정러 😟", "행복 회로 풀가동 🌈", "방구석 예술가 🎨", "도파민 중독자 🎮",
        "갓생러 도전중 💪", "알뜰살뜰 요정 🧚", "마이웨이 독불장군 🦄", "프로 오지라퍼 🦸"
    ],
    colors: [
        "토마토 레드 🔴", "스카이 블루 🔵", "레몬 옐로우 🟡", "포레스트 그린 🟢", "피치 핑크 🍑",
        "미드나잇 퍼플 🟣", "크림 화이트 ☁️", "애플 민트 🌿", "선셋 오렌지 🍊", "매트 블랙 🖤",
        "올리브 카키 🫒", "머스타드 옐로우 🌭", "체리 버건디 🍒", "파스텔 라벤더 🪻", "네온 그린 🔋",
        "사파이어 블루 💎", "로즈 골드 🎀", "초코 브라운 🍫", "밀크티 베이지 🧋", "스모키 그레이 🐘",
        "코랄 핑크 🌺", "민트 초코 🍦", "스파클링 실버 🥄", "클래식 네이비 👔", "베이비 블루 🍼",
        "머스캣 그린 🍇", "피스타치오 🌰", "다크 시안 🌊", "핫 핑크 💘", "딥 차콜 🎱"
    ],
    numbers: [
        "0", "1", "2", "3", "4", "5", "7", "8", "9", "11", "13", "17", "22", "24", "27", "33",
        "44", "50", "55", "66", "77", "88", "99", "100", "101", "333", "777", "1004", "8282", "9999"
    ],
    items: [
        "편의점 아메리카노 ☕", "노이즈캔슬링 이어폰 🎧", "접이식 우산 ☂️", "달달한 초콜릿 🍫", "미니 핸드크림 🧴",
        "비타민 영양제 💊", "예쁜 포스트잇 📝", "캐릭터 볼펜 🖊️", "새싹 화분 🌵", "포근한 양말 🧦",
        "따뜻한 밀크티 🧋", "바삭한 쿠키 🍪", "무선 이어폰 케이스 🎧", "스마트폰 그립톡 📱", "향기로운 립밤 💄",
        "푹신한 무릎 담요 🛌", "작은 손거울 🪞", "미니 다이어리 📕", "보조 배터리 🔋", "향수 샘플 🧪",
        "따뜻한 핫팩 🔥", "시원한 생수 💧", "청량한 콤부차 🥂", "캐릭터 키링 🔑", "포근한 후드 집업 🧥",
        "마카롱 한 알 🍡", "베스트셀러 책 한 권 📖", "미니 머리빗 🪮", "피로 회복 안대 😴", "반짝이는 100원짜리 동전 🪙"
    ],
    lastNames: ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임", "한", "오", "서", "신", "권", "황", "안", "송", "류", "전"],
    mbti: ["ENFP", "ENTP", "INFP", "INTP", "ENFJ", "ENTJ", "INFJ", "INTJ", "ESFP", "ESTP", "ISFP", "ISTP", "ESFJ", "ESTJ", "ISFJ", "ISTJ"]
};

// DOM 요소
const form = document.getElementById('fortune-form');
const nameInput = document.getElementById('user-name');
const birthInput = document.getElementById('user-birth');
const mainView = document.getElementById('main-view');
const resultView = document.getElementById('result-view');

const userTitleEl = document.getElementById('user-title');
const luckyColorEl = document.getElementById('lucky-color');
const luckyNumberEl = document.getElementById('lucky-number');
const luckyItemEl = document.getElementById('lucky-item');
const luckyPersonEl = document.getElementById('lucky-person');

const totalScoreEl = document.getElementById('total-score');
const totalSummaryEl = document.getElementById('total-summary');
const featuredImageEl = document.getElementById('result-featured-image');

const moneyLuckEl = document.getElementById('money-luck');
const moneyScoreEl = document.getElementById('money-score');

const loveLuckEl = document.getElementById('love-luck');
const loveScoreEl = document.getElementById('love-score');

const interpersonalLuckEl = document.getElementById('interpersonal-luck');
const interpersonalScoreEl = document.getElementById('interpersonal-score');

const workLuckEl = document.getElementById('work-luck');
const workScoreEl = document.getElementById('work-score');

const btnRetry = document.getElementById('btn-retry');
const btnShare = document.getElementById('btn-share');
const btnDownload = document.getElementById('btn-download');
const adModal = document.getElementById('ad-modal');
const adTimer = document.getElementById('ad-timer');

// 날짜 포매팅 헬퍼 (예: 20261225)
function getTodayString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
}

// 간단한 문자열 해시 함수 -> 시드 (결정론적 난수 생성용)
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

// 구글 애널리틱스 이벤트 전송 헬퍼
function trackGAEvent(eventName, eventParams = {}) {
    if (typeof gtag === 'function') {
        gtag('event', eventName, eventParams);
    }
}

// 폼 서브밋 이벤트
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const birth = birthInput.value;

    if (!name || !birth) {
        alert("이름과 정확한 생년월일을 입력해주세요!");
        return;
    }

    // 만약 브라우저 설정에 의해 5자리 이상 연도가 입력되었을 경우 방지
    const year = birth.split('-')[0];
    if (year && year.length > 4) {
        alert("생년월일의 연도를 4자리로 정확하게 맞춰주세요!");
        return;
    }

    // 약간의 로딩 효과 후 운세 보여주기
    const btnSubmit = form.querySelector('button[type="submit"]');
    const originalText = btnSubmit.innerText;
    btnSubmit.innerText = "운세 보는 중... 🔮";
    btnSubmit.style.opacity = '0.8';
    btnSubmit.disabled = true;

    setTimeout(() => {
        generateFortune(name, birth);
        btnSubmit.innerText = originalText;
        btnSubmit.style.opacity = '1';
        btnSubmit.disabled = false;
    }, 600); // 0.6초 딜레이 조미료
});

// 운세 생성 및 화면 전환
function generateFortune(name, birth) {
    // 1. 시드 생성: 이름 + 생일 + 오늘날짜
    const todayStr = getTodayString();
    const seedString = `${name}-${birth}-${todayStr}`;
    const seed = hashCode(seedString);

    // 2. 난수에 따른 결과 매칭
    const summaryIndex = seed % fortunes.summaries.length;
    const moneyIndex = (seed * 3) % fortunes.money.length;
    const loveIndex = (seed * 7) % fortunes.love.length;
    const interpersonalIndex = (seed * 13) % fortunes.interpersonal.length;
    const workIndex = (seed * 11) % fortunes.work.length;

    // 점수 생성 (40~100 사이의 난수 생성)
    let moneyScore = 40 + (seed % 61);
    let loveScore = 40 + ((seed * 17) % 61);
    let interpersonalScore = 40 + ((seed * 19) % 61);
    let workScore = 40 + ((seed * 23) % 61);

    // 무조건 기분 좋게 공유할 수 있도록, 최소 한 분야는 특출나게 높게 (90~100점) 보정
    const maxScoreIndex = seed % 4;
    const boostScore = 90 + (seed % 11); // 90 ~ 100

    if (maxScoreIndex === 0) moneyScore = Math.max(moneyScore, boostScore);
    else if (maxScoreIndex === 1) loveScore = Math.max(loveScore, boostScore);
    else if (maxScoreIndex === 2) interpersonalScore = Math.max(interpersonalScore, boostScore);
    else if (maxScoreIndex === 3) workScore = Math.max(workScore, boostScore);

    // 개인화 데이터 추출
    const memeIndex = seed % fortunes.memes.length;
    const colorIndex = (seed * 5) % fortunes.colors.length;
    const numberIndex = (seed * 11) % fortunes.numbers.length;
    const itemIndex = (seed * 17) % fortunes.items.length;

    // 귀인 매칭
    const goodPersonIndex = (seed * 19) % fortunes.lastNames.length;
    const goodMbtiIndex = (seed * 31) % fortunes.mbti.length;

    userTitleEl.innerHTML = `${name}님,<br>오늘의 모드: <span class="highlight-meme">${fortunes.memes[memeIndex]}</span>`;
    luckyColorEl.innerText = fortunes.colors[colorIndex];
    luckyNumberEl.innerText = fortunes.numbers[numberIndex];
    luckyItemEl.innerText = fortunes.items[itemIndex];
    luckyPersonEl.innerText = `'${fortunes.lastNames[goodPersonIndex]}'씨 성을 가진 ${fortunes.mbti[goodMbtiIndex]}`;

    // 3. 결과 텍스트 삽입
    const summary = fortunes.summaries[summaryIndex];
    // 총운 점수는 약간의 변동을 줌
    const variedScore = Math.min(100, summary.score + (seed % 9) - 4);

    // 가장 높은 점수의 운 종류 찾아서 이미지 설정
    const scores = [
        { type: 'money', score: moneyScore, file: 'img_money_*.png' },
        { type: 'love', score: loveScore, file: 'img_love_*.png' },
        { type: 'interpersonal', score: interpersonalScore, file: 'img_interpersonal_*.png' },
        { type: 'work', score: workScore, file: 'img_work_*.png' }
    ];

    // 점수 최고 순으로 정렬 (동점이면 앞의 것)
    scores.sort((a, b) => b.score - a.score);
    const topLuck = scores[0].type;

    // 실제 파일명을 하드코딩 (우리가 생성한 이미지 파일들)
    let imageUrl = '';
    if (topLuck === 'money') imageUrl = 'img_money_1771556155050.png';
    else if (topLuck === 'love') imageUrl = 'img_love_1771556171517.png';
    else if (topLuck === 'interpersonal') imageUrl = 'img_interpersonal_1771556186391.png';
    else if (topLuck === 'work') imageUrl = 'img_work_1771556206555.png';

    if (imageUrl) {
        // iOS Safari 렌더링(보안/CORS) 버그 우회: 이미지를 미리 Base64로 가져와서 <img> 태그에 완전히 박아넣기
        fetch(imageUrl)
            .then(res => res.blob())
            .then(blob => {
                const reader = new FileReader();
                reader.onloadend = function () {
                    featuredImageEl.src = reader.result;
                    featuredImageEl.classList.remove('hidden');
                }
                reader.readAsDataURL(blob);
            })
            .catch(err => {
                console.warn('이미지 로딩 실패', err);
                featuredImageEl.src = imageUrl;
                featuredImageEl.classList.remove('hidden');
            });
    } else {
        featuredImageEl.classList.add('hidden');
    }

    // 기존 강조 표시 및 배지 초기화 후, 최고 운세에만 적용
    ['money', 'love', 'interpersonal', 'work'].forEach(type => {
        const cardEl = document.getElementById(`card-${type}`);
        const badgeEl = document.getElementById(`badge-${type}`);
        if (cardEl) cardEl.classList.remove('best-luck-card');
        if (badgeEl) badgeEl.classList.add('hidden');
    });

    const bestCardEl = document.getElementById(`card-${topLuck}`);
    const bestBadgeEl = document.getElementById(`badge-${topLuck}`);
    if (bestCardEl) bestCardEl.classList.add('best-luck-card');
    if (bestBadgeEl) bestBadgeEl.classList.remove('hidden');

    totalScoreEl.innerText = variedScore;
    totalSummaryEl.innerText = `${name}님, ${summary.text}`;

    moneyLuckEl.innerText = fortunes.money[moneyIndex];
    moneyScoreEl.innerText = moneyScore;

    loveLuckEl.innerText = fortunes.love[loveIndex];
    loveScoreEl.innerText = loveScore;

    interpersonalLuckEl.innerText = fortunes.interpersonal[interpersonalIndex];
    interpersonalScoreEl.innerText = interpersonalScore;

    workLuckEl.innerText = fortunes.work[workIndex];
    workScoreEl.innerText = workScore;

    // 스크롤 맨 위로
    window.scrollTo(0, 0);

    // 4. 화면 전환
    mainView.classList.remove('active');
    setTimeout(() => {
        mainView.classList.add('hidden');
        resultView.classList.remove('hidden');
        resultView.classList.add('active');
        fireConfetti();

        // 데이터 분석: 운세 결과 시청 성공
        trackGAEvent('fortune_generated', {
            'top_luck': topLuck,
            'total_score': variedScore
        });
    }, 200); // fadeOut 효과 등을 위해 짧은 딜레이
}

// Confetti 효과 (폭죽)
function fireConfetti() {
    if (typeof confetti !== 'undefined') {
        const duration = 1.25 * 1000; // 시간을 절반(1.25초)으로 단축
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#F7323F', '#FEE500', '#212529', '#E9ECEF']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#F7323F', '#FEE500', '#212529', '#E9ECEF']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
}

// 다시하기 기능 (보상형 광고 시청 시뮬레이션)
btnRetry.addEventListener('click', () => {
    // 데이터 분석: 광고 보고 다시하기 클릭
    trackGAEvent('click_retry_ad');

    // 1. 광고 모달 띄우기
    adModal.classList.remove('hidden');
    // 실제 광고로 전환 시 5~15초 사이가 적당함. 모의 광고는 사용자 피로도를 줄이기 위해 5초로 설정.
    let timeLeft = 5; // 5초 대기
    adTimer.innerText = timeLeft;

    const timerInterval = setInterval(() => {
        timeLeft--;
        adTimer.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // 2. 광고 시청 완료 후 화면 전환
            adModal.classList.add('hidden');

            window.scrollTo(0, 0);
            resultView.classList.remove('active');
            setTimeout(() => {
                resultView.classList.add('hidden');
                mainView.classList.remove('hidden');
                mainView.classList.add('active');
            }, 200);
        }
    }, 1000);
});

// 공유하기 기능
btnShare.addEventListener('click', () => {
    // 데이터 분석: 카카오톡/링크 공유 클릭
    trackGAEvent('click_share');

    // 공유할 내용을 풍성하게 구성
    const userName = nameInput.value.trim();
    const rankScore = totalScoreEl.innerText;

    // .highlight-meme의 내용만 가져옴
    const memeName = document.querySelector('.highlight-meme').innerText;
    // float: right 속성 때문에 innerText에 줄바꿈이 생기는 것을 방지
    const bestLuckHeader = document.querySelector('.best-luck-card h3');
    const bestLuckTitle = bestLuckHeader.childNodes[0].textContent.trim().split(' ')[1];
    const bestLuckScore = document.querySelector('.best-luck-card .sub-score span').innerText;

    const luckyColor = luckyColorEl.innerText;
    const luckyPersona = luckyPersonEl.innerText;

    const shareTitle = `🔮 오늘 어때? - ${userName}님의 운세`;
    const shareText = `[나의 오늘 모드: ${memeName}]\n\n✨ 오늘의 행운 점수: ${rankScore}점!\n🏆 최고 운세: ${bestLuckTitle} (${bestLuckScore}점)\n\n🎨 럭키 컬러: ${luckyColor}\n🤝 행운의 귀인: ${luckyPersona}\n\n👇 내일은 어떨까? 친구 운세도 확인해봐!`;
    const shareUrl = window.location.href;

    // 모바일 환경 Web Share API
    if (navigator.share) {
        navigator.share({
            title: shareTitle,
            text: shareText,
            url: shareUrl,
        })
            .then(() => console.log('공유 성공'))
            .catch((error) => console.log('공유 실패', error));
    } else {
        // PC 등 미지원 환경에서는 클립보드 복사
        const dummy = document.createElement('textarea');
        const text = `${shareTitle}\n\n${shareText}\n${shareUrl}`;
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert('✨ 나만의 맞춤 운세 텍스트가 복사되었습니다! 카카오톡에 붙여넣기 해보세요.');
    }
});

// 부적(이미지) 다운로드 기능
btnDownload.addEventListener('click', () => {
    // 데이터 분석: 이미지 다운로드 클릭
    trackGAEvent('click_download_image');

    // 1. 다운로드 중임을 알리고 버튼 비활성화
    const originalText = btnDownload.innerText;
    btnDownload.innerText = "캡처 중... 📸";
    btnDownload.disabled = true;

    // 2. 화면 캡처 시, 아래쪽 버튼과 광고 영역은 보이지 않게 잠시 숨김 및 iOS 렌더링 버그용 클래스 추가
    const actionButtons = document.querySelector('.action-buttons');
    const adArea = document.querySelector('#result-view .ad-area');

    actionButtons.style.display = 'none';
    adArea.style.display = 'none';
    resultView.classList.add('capture-mode');

    // 3. html-to-image 로 캡처 (result-view 전체)
    // 기기 화면 비율(DPI)에 맞춰 스케일을 대폭 키워 사파리/아이폰 흐림 현상 방지
    const pixelRatio = window.devicePixelRatio || 1;
    const captureScale = Math.max(2, pixelRatio);

    htmlToImage.toPng(resultView, {
        pixelRatio: captureScale, // 초고해상도 캡처를 통한 폰트 깨짐 방지
        backgroundColor: '#F8F9FA', // 배경색 지정
        style: {
            margin: '0' // iOS 사파리 렌더링 시 일부 여백이 틀어지는 것 방지
        }
    }).then(dataUrl => {
        // 원래대로 복구 (빈 문자열 처리하여 CSS 속성에 따르게 함)
        actionButtons.style.display = '';
        adArea.style.display = '';
        resultView.classList.remove('capture-mode');
        btnDownload.innerText = originalText;
        btnDownload.disabled = false;

        // 4. 생성된 이미지를 파일로 다운로드
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `오늘어때_운세결과_${getTodayString()}.png`;
        link.click();
    }).catch(err => {
        console.error('캡처 실패:', err);
        alert('이미지 저장에 실패했습니다. 다시 시도해주세요.');
        actionButtons.style.display = '';
        adArea.style.display = '';
        resultView.classList.remove('capture-mode');
        btnDownload.innerText = originalText;
        btnDownload.disabled = false;
    });
});
