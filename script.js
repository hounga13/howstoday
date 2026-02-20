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
    ]
};

// DOM 요소
const form = document.getElementById('fortune-form');
const nameInput = document.getElementById('user-name');
const birthInput = document.getElementById('user-birth');
const mainView = document.getElementById('main-view');
const resultView = document.getElementById('result-view');

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
    const moneyScore = 40 + (seed % 61);
    const loveScore = 40 + ((seed * 17) % 61);
    const interpersonalScore = 40 + ((seed * 19) % 61);
    const workScore = 40 + ((seed * 23) % 61);

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
        featuredImageEl.src = imageUrl;
        featuredImageEl.classList.remove('hidden');
    } else {
        featuredImageEl.classList.add('hidden');
    }

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
    }, 200); // fadeOut 효과 등을 위해 짧은 딜레이
}

// 다시하기 기능 (보상형 광고 시청 시뮬레이션)
btnRetry.addEventListener('click', () => {
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
    // 모바일 환경 Web Share API
    if (navigator.share) {
        navigator.share({
            title: '오늘 어때? - 나의 행운 점수 확인',
            text: `[오늘 어때?] 내 오늘의 행운 점수는 ${totalScoreEl.innerText}점! 너도 확인해봐 🔮`,
            url: window.location.href, // 배포 후 실제 url
        })
            .then(() => console.log('공유 성공'))
            .catch((error) => console.log('공유 실패', error));
    } else {
        // PC 등 미지원 환경에서는 클립보드 복사
        const dummy = document.createElement('textarea');
        const text = `[오늘 어때?]\n내 오늘의 행운 점수는 ${totalScoreEl.innerText}점이야!\n\n확인하러 가기: ${window.location.href}`;
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert('운세 결과가 클립보드에 복사되었습니다! 카톡으로 친구에게 붙여넣기 해보세요.');
    }
});
