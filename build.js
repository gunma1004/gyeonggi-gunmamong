const fs = require('fs');
const path = require('path');

// main.js에 있는 areaData와 동일한 데이터 (또는 main.js에서 불러와도 됩니다)
// 여기서는 예시로 구조를 보여드립니다.
const areaData = [
  { 
    id: "suwon", slug: "suwon", name: "수원 홈타이", 
    gus: [
      { name: "영통구", slug: "yeongtong-gu", dongs: [{name:"영통동", slug:"yeongtong-dong"}, {name:"매탄동", slug:"maetan-dong"}] }
      // ... 다른 구/동 데이터
    ]
  },
  // ... 나머지 시/군 데이터
];

// 원본 index.html 읽기
const templatePath = path.join(__dirname, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('index.html이 없습니다!');
  process.exit(1);
}
let templateHtml = fs.readFileSync(templatePath, 'utf8');

// dist 또는 public 폴더를 빌드 폴더로 사용 (Vercel 설정에 맞게 조절)
// 여기서는 편의상 dist 폴더를 만든다고 가정하거나, 현재 폴더 구조 유지 시 각 경로에 폴더 생성
areaData.forEach(area => {
  const areaDir = path.join(__dirname, area.slug);
  if (!fs.existsSync(areaDir)) fs.mkdirSync(areaDir, { recursive: true });

  // 시/군 메인 페이지 파일 생성 (예: /suwon/index.html)
  let areaHtml = templateHtml
    .replace(/<title>.*?<\/title>/, `<title>${area.name} - 경기 방문마사지 & 출장 타이 마사지</title>`)
    .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${area.name} 경기 전지역 홈타이, 방문마사지, 출장 타이 마사지 제휴업체 안내."`);
  
  fs.writeFileSync(path.join(areaDir, 'index.html'), areaHtml);

  // 구/동 하위 페이지 생성
  if (area.gus) {
    area.gus.forEach(gu => {
      const guDir = path.join(areaDir, gu.slug);
      if (!fs.existsSync(guDir)) fs.mkdirSync(guDir, { recursive: true });

      if (gu.dongs) {
        gu.dongs.forEach(dong => {
          const dongDir = path.join(guDir, dong.slug);
          if (!fs.existsSync(dongDir)) fs.mkdirSync(dongDir, { recursive: true });

          // 동별 고유 타이틀 및 설명 생성
          const pageTitle = `${area.name.replace('홈타이','')} ${dong.name} 홈타이 · 출장 방문마사지 안내`;
          const pageDesc = `${area.name.replace('홈타이','')} ${dong.name} 지역 맞춤형 출장 타이 마사지, 방문마사지 제휴업체 정보 및 실시간 후불제 예약 상담.`;

          let dongHtml = templateHtml
            .replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`)
            .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${pageDesc}"`)
            .replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${pageTitle}"`)
            .replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${pageDesc}"`);

          fs.writeFileSync(path.join(dongDir, 'index.html'), dongHtml);
        });
      }
    });
  }
});

console.log('✨ 모든 지역별 정적 HTML 파일 생성 완료!');