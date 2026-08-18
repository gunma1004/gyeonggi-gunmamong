// 1. 경기 31개 시·군 및 구/동 상세 데이터 (키워드 최적화 적용)
const areaData = [
  { 
    id: "suwon",
    name: "수원 홈타이", 
    tag: "영통·인계·매탄·망포·권선·곡반정·화서·정자·원천", 
    img: "images/thumbs/massage-05.jpg",
    gus: [
      { name: "영통구", dongs: ["영통동", "매탄동", "망포동", "원천동", "이의동"] },
      { name: "권선구", dongs: ["권선동", "곡반정동", "세류동", "구운동", "탑동"] },
      { name: "장안구", dongs: ["정자동", "파장동", "율전동", "천천동", "조원동"] },
      { name: "팔달구", dongs: ["인계동", "화서동", "우만동", "지동", "매산동"] }
    ]
  },
  { 
    id: "seongnam",
    name: "성남 홈타이", 
    tag: "분당·정자·서현·야탑·삼평·판교·수내·백현·태평·신흥·상대원", 
    img: "images/thumbs/massage-06.jpg",
    gus: [
      { name: "분당구", dongs: ["분당동", "정자동", "서현동", "야탑동", "삼평동", "판교동", "수내동", "백현동"] },
      { name: "수정구", dongs: ["태평동", "신흥동", "수진동", "복정동", "창곡동"] },
      { name: "중원구", dongs: ["상대원동", "성남동", "금광동", "은행동"] }
    ]
  },
  { 
    id: "goyang",
    name: "고양 홈타이", 
    tag: "일산·화정·장항·백석·주엽·마두·행신·식사·삼송·덕이", 
    img: "images/thumbs/massage-07.jpg",
    gus: [
      { name: "일산동구", dongs: ["장항동", "백석동", "마두동", "식사동", "풍동"] },
      { name: "일산서구", dongs: ["일산동", "주엽동", "덕이동", "탄현동", "대화동"] },
      { name: "덕양구", dongs: ["화정동", "행신동", "삼송동", "원흥동", "신원동"] }
    ]
  },
  { 
    id: "yongin",
    name: "용인 홈타이", 
    tag: "수지·죽전·풍덕천·성복·동천·기흥·구갈·보라·보정·역북·유방", 
    img: "images/thumbs/massage-08.jpg",
    gus: [
      { name: "수지구", dongs: ["풍덕천동", "죽전동", "성복동", "동천동", "신봉동", "상현동"] },
      { name: "기흥구", dongs: ["구갈동", "보라동", "보정동", "영덕동", "신갈동", "마북동"] },
      { name: "처인구", dongs: ["역북동", "유방동", "김량장동", "포곡읍", "모현읍"] }
    ]
  },
  { 
    id: "bucheon",
    name: "부천 홈타이", 
    tag: "상동·중동·심곡·원미·소사·범박·괴안·오정·원종·삼정", 
    img: "images/thumbs/massage-09.jpg",
    gus: [
      { name: "원미구", dongs: ["상동", "중동", "심곡동", "원미동", "도당동", "춘의동"] },
      { name: "소사구", dongs: ["소사동", "범박동", "괴안동", "송내동"] },
      { name: "오정구", dongs: ["오정동", "원종동", "삼정동", "고강동"] }
    ]
  },
  { 
    id: "ansan",
    name: "안산 홈타이", 
    tag: "고잔·선부·성포·본오·사동·와동·월피·초지·신길·대부동", 
    img: "images/thumbs/massage-10.jpg",
    gus: [
      { name: "단원구", dongs: ["고잔동", "선부동", "초지동", "신길동", "대부동", "원곡동"] },
      { name: "상록구", dongs: ["성포동", "본오동", "사동", "월피동", "부곡동", "일동"] }
    ]
  },
  { 
    id: "anyang",
    name: "안양 홈타이", 
    tag: "평촌·안양·관양·비산·호계·박달·석수", 
    img: "images/thumbs/massage-11.jpg",
    gus: [
      { name: "동안구", dongs: ["평촌동", "관양동", "비산동", "호계동", "범계동"] },
      { name: "만안구", dongs: ["안양동", "박달동", "석수동"] }
    ]
  },
  { 
    id: "namyangju",
    name: "남양주 홈타이", 
    tag: "다산·별내·호평·평내·마석·진접·오남·와부·진건·화도읍", 
    img: "images/thumbs/massage-12.jpg",
    gus: [
      { name: "남양주시 관할", dongs: ["다산동", "별내동", "호평동", "평내동", "진접읍", "오남읍", "와부읍", "진건읍", "화도읍"] }
    ]
  },
  { 
    id: "hwaseong",
    name: "화성 홈타이", 
    tag: "동탄·병점·향남읍·봉담읍·남양·마도·송산·우정읍·새솔", 
    img: "images/thumbs/massage-13.jpg",
    gus: [
      { name: "동탄권역", dongs: ["동탄동", "영천동", "청계동", "목동", "산척동"] },
      { name: "서부/남부권역", dongs: ["병점동", "향남읍", "봉담읍", "남양읍", "마도면", "송산면", "새솔동"] }
    ]
  },
  { 
    id: "pyeongtaek",
    name: "평택 홈타이", 
    tag: "송탄·서정·비전·세교·동삭·칠원·팽성읍·포승읍·안중읍·고덕", 
    img: "images/thumbs/massage-14.jpg",
    gus: [
      { name: "평택시 관할", dongs: ["서정동", "비전동", "세교동", "동삭동", "칠원동", "팽성읍", "포승읍", "안중읍", "고덕면"] }
    ]
  },
  { 
    id: "uijeongbu",
    name: "의정부 홈타이", 
    tag: "의정부·호원·신곡·용현·민락·낙양·가능·녹양", 
    img: "images/thumbs/massage-15.jpg",
    gus: [
      { name: "의정부시 관할", dongs: ["의정부동", "호원동", "신곡동", "용현동", "민락동", "낙양동", "가능동", "녹양동"] }
    ]
  },
  { 
    id: "siheung",
    name: "시흥 홈타이", 
    tag: "정왕·배곧·은행·대야·신천·목감·장현·능곡·월곶", 
    img: "images/thumbs/massage-16.jpg",
    gus: [
      { name: "시흥시 관할", dongs: ["정왕동", "배곧동", "은행동", "대야동", "신천동", "목감동", "장현동", "능곡동", "월곶동"] }
    ]
  },
  { 
    id: "paju",
    name: "파주 홈타이", 
    tag: "금촌·운정·동패·목동·야당·교하·문산읍·조리읍·법원읍", 
    img: "images/thumbs/massage-17.jpg",
    gus: [
      { name: "파주시 관할", dongs: ["금촌동", "동패동", "목동동", "야당동", "다율동", "문산읍", "조리읍", "법원읍"] }
    ]
  },
  { 
    id: "gimpo",
    name: "김포 홈타이", 
    tag: "장기·구래·운양·풍무·사우·북변·마산·통진읍·양촌읍", 
    img: "images/thumbs/massage-18.jpg",
    gus: [
      { name: "김포시 관할", dongs: ["장기동", "구래동", "운양동", "풍무동", "사우동", "북변동", "마산동", "통진읍", "양촌읍"] }
    ]
  },
  { 
    id: "gwangmyeong",
    name: "광명 홈타이", 
    tag: "철산·하안·소하·일직·광명·옥길", 
    img: "images/thumbs/massage-19.jpg",
    gus: [
      { name: "광명시 관할", dongs: ["철산동", "하안동", "소하동", "일직동", "광명동", "옥길동"] }
    ]
  },
  { 
    id: "gwangju",
    name: "광주 홈타이", 
    tag: "태전·경안·쌍령·송정·오포읍·곤지암읍·초월읍·퇴촌면", 
    img: "images/thumbs/massage-20.jpg",
    gus: [
      { name: "광주시 관할", dongs: ["태전동", "경안동", "쌍령동", "송정동", "오포읍", "곤지암읍", "초월읍", "퇴촌면"] }
    ]
  },
  { 
    id: "gunpo",
    name: "군포 홈타이", 
    tag: "산본·금정·당동·당정·부곡·대야미", 
    img: "images/thumbs/massage-21.jpg",
    gus: [
      { name: "군포시 관할", dongs: ["산본동", "금정동", "당동", "당정동", "부곡동", "대야미동"] }
    ]
  },
  { 
    id: "icheon",
    name: "이천 홈타이", 
    tag: "창전·증포·중리·관고·안흥·부발읍·장호원읍·마장면", 
    img: "images/thumbs/massage-22.jpg",
    gus: [
      { name: "이천시 관할", dongs: ["창전동", "증포동", "중리동", "관고동", "안흥동", "부발읍", "장호원읍", "마장면"] }
    ]
  },
  { 
    id: "yangju",
    name: "양주 홈타이", 
    tag: "덕정·옥정·삼숭·고읍·광사·회정·백석읍·광적면", 
    img: "images/thumbs/massage-23.jpg",
    gus: [
      { name: "양주시 관할", dongs: ["덕정동", "옥정동", "삼숭동", "고읍동", "광사동", "회정동", "백석읍", "광적면"] }
    ]
  },
  { 
    id: "osan",
    name: "오산 홈타이", 
    tag: "오산·세교·원동·궐동·수청·금암·양산·외삼미", 
    img: "images/thumbs/massage-24.jpg",
    gus: [
      { name: "오산시 관할", dongs: ["오산동", "세교동", "원동", "궐동", "수청동", "금암동", "양산동", "외삼미동"] }
    ]
  },
  { 
    id: "guri",
    name: "구리 홈타이", 
    tag: "인창·수택·토평·교문·아천·갈매", 
    img: "images/thumbs/massage-25.jpg",
    gus: [
      { name: "구리시 관할", dongs: ["인창동", "수택동", "토평동", "교문동", "아천동", "갈매동"] }
    ]
  },
  { 
    id: "anseong",
    name: "안성 홈타이", 
    tag: "봉산·석정·옥산·아양·공도읍·대덕면·죽산면·일죽면", 
    img: "images/thumbs/massage-26.jpg",
    gus: [
      { name: "안성시 관할", dongs: ["봉산동", "석정동", "옥산동", "아양동", "공도읍", "대덕면", "죽산면", "일죽면"] }
    ]
  },
  { 
    id: "pocheon",
    name: "포천 홈타이", 
    tag: "신읍·선단·자작·소흘읍·내촌면·가산면·영북면", 
    img: "images/thumbs/massage-27.jpg",
    gus: [
      { name: "포천시 관할", dongs: ["신읍동", "선단동", "자작동", "소흘읍", "내촌면", "가산면", "영북면"] }
    ]
  },
  { 
    id: "uiwang",
    name: "의왕 홈타이", 
    tag: "내손·오전·포일·삼동·왕곡·청계", 
    img: "images/thumbs/massage-28.jpg",
    gus: [
      { name: "의왕시 관할", dongs: ["내손동", "오전동", "포일동", "삼동", "왕곡동", "청계동"] }
    ]
  },
  { 
    id: "hanam",
    name: "하남 홈타이", 
    tag: "미사·신장·덕풍·풍산·감일·위례·초이", 
    img: "images/thumbs/massage-29.jpg",
    gus: [
      { name: "하남시 관할", dongs: ["미사동", "신장동", "덕풍동", "풍산동", "감일동", "위례동", "초이동"] }
    ]
  },
  { 
    id: "yeoju",
    name: "여주 홈타이", 
    tag: "여흥·중앙·광대·점봉·가남읍·흥천면·금사면", 
    img: "images/thumbs/massage-30.jpg",
    gus: [
      { name: "여주시 관할", dongs: ["여흥동", "중앙동", "광대동", "점봉동", "가남읍", "흥천면", "금사면"] }
    ]
  },
  { 
    id: "yangpyeong",
    name: "양평군 홈타이", 
    tag: "양평읍·양서면·용문면·강상면·강하면·서종면", 
    img: "images/thumbs/massage-31.jpg",
    gus: [
      { name: "양평군 관할", dongs: ["양평읍", "양서면", "용문면", "강상면", "강하면", "서종면"] }
    ]
  },
  { 
    id: "dongducheon",
    name: "동두천 홈타이", 
    tag: "생연·지행·보산·동두천·상패·광암", 
    img: "images/thumbs/massage-05.jpg",
    gus: [
      { name: "동두천시 관할", dongs: ["생연동", "지행동", "보산동", "동두천동", "상패동", "광암동"] }
    ]
  },
  { 
    id: "gwacheon",
    name: "과천 홈타이", 
    tag: "별양·중앙·원문·갈현·문원·주암", 
    img: "images/thumbs/massage-06.jpg",
    gus: [
      { name: "과천시 관할", dongs: ["별양동", "중앙동", "원문동", "갈현동", "문원동", "주암동"] }
    ]
  },
  { 
    id: "gapyeong",
    name: "가평군 홈타이", 
    tag: "가평읍·청평면·설악면·조종면·상면·북면", 
    img: "images/thumbs/massage-07.jpg",
    gus: [
      { name: "가평군 관할", dongs: ["가평읍", "청평면", "설악면", "조종면", "상면", "북면"] }
    ]
  },
  { 
    id: "yeoncheon",
    name: "연천군 홈타이", 
    tag: "연천읍·전곡읍·군남면·신서면·청산면", 
    img: "images/thumbs/massage-08.jpg",
    gus: [
      { name: "연천읍", dongs: ["연천읍", "전곡읍", "군남면", "신서면", "청산면"] }
    ]
  }
];

// 2. 추천 제휴업체 5개 데이터
const shopsData = [
  {
    id: 1,
    name: "한국미인홈케어",
    phone: "0507-1280-3294",
    badge: "추천업체",
    desc: "24시 정성 가득한 방문 타이 & 아로마 전문 테라피 (전지역 30분 내 신속 방문)",
    img: "images/shop1.jpg",
    courses: [
      { name: "방문 아로마 케어 (60분)", price: "90,000원" },
      { name: "출장 스웨디시 케어 (60분)", price: "140,000원" }
    ]
  },
  {
    id: 2,
    name: "젊은애인홈타이",
    phone: "0507-1280-3191",
    badge: "인기폭발",
    desc: "지친 일상에 편안한 휴식을 선사하는 프리미엄 힐링 수기 케어",
    img: "images/shop2.jpg",
    courses: [
      { name: "건식 홈타이 (60분)", price: "60,000원" },
      { name: "방문 스웨디시 (60분)", price: "140,000원" }
    ]
  },
  {
    id: 3,
    name: "그녀의온도홈타이",
    phone: "0507-1280-3289",
    badge: "24시상시",
    desc: "빠른 방문과 철저한 위생 관리를 약속드립니다",
    img: "images/shop3.jpg",
    courses: [
      { name: "출장 타이 마사지 (60분)", price: "60,000원" },
      { name: "한국 스웨디시 케어 (60분)", price: "140,000원" }
    ]
  },
  {
    id: 4,
    name: "젊은미녀홈타이",
    phone: "0507-1280-3189",
    badge: "신규제휴",
    desc: "베테랑 관리사의 맞춤형 피로 회복 케어 프로그램",
    img: "images/shop4.jpg",
    courses: [
      { name: "홈타이 코스 (60분)", price: "60,000원" },
      { name: "출장 아로마 마사지 (90분)", price: "140,000원" }
    ]
  },
  {
    id: 5,
    name: "지금될까홈타이",
    phone: "0507-1280-3232",
    badge: "만족도1위",
    desc: "후불제 안심 이용, 해당 권역 25분 내 빠른 도착",
    img: "images/shop5.jpg",
    courses: [
      { name: "건식 타이 코스 (60분)", price: "60,000원" },
      { name: "방문 스웨디시 코스 (60분)", price: "140,000원" }
    ]
  }
];

// DOM 로드시 초기화
document.addEventListener("DOMContentLoaded", () => {
  renderShops();
  renderAreas();
  handleRoute();
});

// 브라우저 뒤로가기/앞으로가기(팝스테이트) 감지
window.addEventListener("popstate", () => {
  handleRoute();
});

// URL 경로 기반 페이지 라우팅 분기 처리
function handleRoute() {
  const pathSegments = window.location.pathname.replace(/^\/+/, '').split('/');
  const cityId = pathSegments[0] ? decodeURIComponent(pathSegments[0]) : "";
  const subName = pathSegments[1] ? decodeURIComponent(pathSegments[1]) : "";
  const dongName = pathSegments[2] ? decodeURIComponent(pathSegments[2]) : "";

  // 메인 페이지 구성요소 경로 처리
  const mainSections = ["shops", "service", "price-info", "travel", "food", "areas", "reviews"];
  if (!cityId || mainSections.includes(cityId)) {
    showMainPage();
    if (mainSections.includes(cityId)) {
      const target = document.getElementById(cityId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  const foundArea = areaData.find(a => a.id === cityId);
  if (foundArea) {
    showDetailPage(foundArea, subName, dongName);
  } else {
    showMainPage();
  }
}

// 5개 제휴업체 HTML 생성 함수
function getShopsHtml() {
  return shopsData.map(shop => {
    const cleanPhone = shop.phone.replace(/[^0-9]/g, '');
    const coursesHtml = shop.courses.map(c => `
      <div class="course-item">
        <span class="course-name">${c.name}</span>
        <span class="course-price">${c.price}</span>
      </div>
    `).join("");

    return `
      <div class="shop-card">
        <div class="shop-img-box" style="margin: -20px -20px 15px -20px; overflow: hidden; border-radius: 12px 12px 0 0; height: 180px;">
          <img src="${shop.img}" alt="${shop.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="shop-header">
          <span class="shop-badge">${shop.badge}</span>
          <h3 class="shop-title">${shop.name}</h3>
        </div>
        <p class="shop-desc">${shop.desc}</p>
        <div class="shop-courses">
          ${coursesHtml}
        </div>
        <a class="shop-call-btn" href="tel:${cleanPhone}">
          📞 전화예약 (${shop.phone})
        </a>
      </div>
    `;
  }).join("");
}

// 메인 제휴업체 및 지역 타일 생성
function renderShops() {
  const container = document.getElementById("shopGridContainer");
  if (container) container.innerHTML = getShopsHtml();
}

function renderAreas() {
  const container = document.getElementById("areaGridContainer");
  if (!container) return;

  container.innerHTML = areaData.map(area => `
    <a class="area-tile" href="/${area.id}" onclick="navigateArea(event, '${area.id}')">
      <div class="tile-img">
        <img alt="${area.name}" height="480" loading="lazy" src="${area.img}" width="480"/>
      </div>
      <div class="tile-body">
        <strong>${area.name}</strong>
        <span class="tile-tag">${area.tag}</span>
      </div>
    </a>
  `).join("");
}

// 지역 타일 클릭 시 페이지 새로고침 없이 History API로 이동
function navigateArea(event, areaId) {
  event.preventDefault();
  history.pushState({ area: areaId }, '', `/${areaId}`);
  handleRoute();
}

// 상세 페이지 내 동 버튼 클릭 시 이동
function navigateDong(event, urlPath) {
  event.preventDefault();
  history.pushState({}, '', urlPath);
  handleRoute();
}

// 메인으로 돌아가기 버튼 함수
function goBackToMain(event) {
  if (event) event.preventDefault();
  history.pushState({}, '', '/');
  handleRoute();
}

// 1. 메인 화면 표시 (브랜드명: 경기홈타이, 메인 키워드 최적화)
function showMainPage() {
  document.getElementById("mainView").style.display = "block";
  document.getElementById("detailView").style.display = "none";

  const mainTitle = "경기홈타이 - 경기 방문마사지 & 출장 타이 마사지 31개 시군 안내";
  const mainDesc = "경기홈타이 경기 전지역 홈타이, 방문마사지, 출장 타이 마사지, 출장 아로마 마사지 안내. 수원, 성남, 고양, 용인 등 31개 시군 구/동별 제휴업체 정보 및 후불 상담.";
  const mainImg = "https://gyeonggi-hometai.shop/images/logo.png";
  const mainUrl = "https://gyeonggi-hometai.shop/";

  document.title = mainTitle;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", mainDesc);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", mainTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", mainDesc);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute("content", mainImg);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", mainUrl);
  
  window.scrollTo(0, 0);
}

// 2. [시 - 구 - 동] 전용 단독 상세 페이지 표시 (SEO 동적 변경)
function showDetailPage(area, subName, dongName) {
  document.getElementById("mainView").style.display = "none";
  const detailView = document.getElementById("detailView");
  const detailContent = document.getElementById("detailContent");

  let pageTitle = area.name;
  if (subName) pageTitle = `${area.name.replace('홈타이','')} ${subName} 홈타이 · 방문마사지`;
  if (dongName) pageTitle = `${area.name.replace('홈타이','')} ${dongName} 홈타이 · 방문마사지`;

  const fullTitle = `${pageTitle} - 경기홈타이`;
  const fullDesc = `${pageTitle} 추천 제휴업체 안내. ${area.name.replace('홈타이','')} 전지역 30분 내 빠른 방문마사지, 출장 타이 마사지 후불제 케어 서비스.`;
  const fullImg = area.img.startsWith("http") ? area.img : `https://gyeonggi-hometai.shop/${area.img}`;

  document.title = fullTitle;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", fullDesc);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", fullTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", fullDesc);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute("content", fullImg);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", window.location.href);

  let subNavHtml = "";
  area.gus.forEach(gu => {
    subNavHtml += `
      <div class="gu-box">
        <h4 class="gu-title">${gu.name}</h4>
        <div class="dong-link-grid">
          ${gu.dongs.map(d => `<a href="/${area.id}/${encodeURIComponent(gu.name)}/${encodeURIComponent(d)}" onclick="navigateDong(event, '/${area.id}/${encodeURIComponent(gu.name)}/${encodeURIComponent(d)}')" class="dong-link-btn">${d}</a>`).join("")}
        </div>
      </div>
    `;
  });

  detailContent.innerHTML = `
    <!-- 1. 구/동 전용 상단 네비게이션 -->
    <div class="detail-nav-menu">
      <a href="/#service" onclick="goBackToMain(event)">서비스</a>
      <a href="/#price-info" onclick="goBackToMain(event)">가격안내</a>
      <a href="/#travel" onclick="goBackToMain(event)">근처여행</a>
      <a href="/#food" onclick="goBackToMain(event)">맛집숙소</a>
      <a href="/#areas" onclick="goBackToMain(event)">지역안내</a>
      <a href="/#reviews" onclick="goBackToMain(event)">후기</a>
    </div>

    <!-- 2. 구/동 전용 히어로 헤더 -->
    <div class="detail-hero">
      <img src="${area.img}" alt="${pageTitle}" class="detail-hero-img"/>
      <div class="detail-hero-text">
        <span class="eyebrow">GYEONGGI LOCAL PAGE</span>
        <h1>${pageTitle}</h1>
        <p>해당 권역 30분 내 빠른 방문마사지 배차와 정성 어린 출장 타이 케어를 약속드립니다.</p>
      </div>
    </div>

    <!-- 3. 제휴업체 5개 전용 카드 배치 -->
    <div class="detail-section">
      <h3 style="color:#ff3366; margin-bottom:15px;">🔥 ${pageTitle} 추천 제휴업체</h3>
      <div class="shop-grid">
        ${getShopsHtml()}
      </div>
    </div>

    <!-- 4. 하위 구 및 동 지역 선택 네비게이션 -->
    <div class="detail-section">
      <h3>📍 ${area.name.replace('홈타이','')} 세부 구/동 지역 선택</h3>
      <p style="color:#aaa; font-size:0.9rem; margin-bottom:15px;">원하시는 동을 클릭하시면 해당 동 전용 홈타이 & 방문마사지 안내 페이지로 이동합니다.</p>
      ${subNavHtml}
    </div>
  `;

  detailView.style.display = "block";
  window.scrollTo(0, 0);
}