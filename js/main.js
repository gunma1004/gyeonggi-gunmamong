// 1. 경기 31개 시·군 및 구/동 상세 데이터 (영문 영문 슬러그 id 추가 적용)
const areaData = [
  { 
    id: "suwon",
    slug: "suwon",
    name: "수원 홈타이", 
    tag: "영통·인계·매탄·망포·권선·곡반정·화서·정자·원천", 
    img: "images/thumbs/massage-05.jpg",
    gus: [
      { name: "영통구", slug: "yeongtong-gu", dongs: [{name:"영통동", slug:"yeongtong-dong"}, {name:"매탄동", slug:"maetan-dong"}, {name:"망포동", slug:"mangpo-dong"}, {name:"원천동", slug:"woncheon-dong"}, {name:"이의동", slug:"ui-dong"}] },
      { name: "권선구", slug: "gwonseon-gu", dongs: [{name:"권선동", slug:"gwonseon-dong"}, {name:"곡반정동", slug:"gokbanjeong-dong"}, {name:"세류동", slug:"seryu-dong"}, {name:"구운동", slug:"guun-dong"}, {name:"탑동", slug:"tap-dong"}] },
      { name: "장안구", slug: "jangan-gu", dongs: [{name:"정자동", slug:"jeongja-dong"}, {name:"파장동", slug:"pajang-dong"}, {name:"율전동", slug:"yuljeon-dong"}, {name:"천천동", slug:"cheoncheon-dong"}, {name:"조원동", slug:"jowon-dong"}] },
      { name: "팔달구", slug: "paldal-gu", dongs: [{name:"인계동", slug:"ingye-dong"}, {name:"화서동", slug:"hwaseo-dong"}, {name:"우만동", slug:"uman-dong"}, {name:"지동", slug:"ji-dong"}, {name:"매산동", slug:"maesan-dong"}] }
    ]
  },
  { 
    id: "seongnam",
    slug: "seongnam",
    name: "성남 홈타이", 
    tag: "분당·정자·서현·야탑·삼평·판교·수내·백현·태평·신흥·상대원", 
    img: "images/thumbs/massage-06.jpg",
    gus: [
      { name: "분당구", slug: "bundang-gu", dongs: [{name:"분당동", slug:"bundang-dong"}, {name:"정자동", slug:"jeongja-dong"}, {name:"서현동", slug:"seohyeon-dong"}, {name:"야탑동", slug:"yatap-dong"}, {name:"삼평동", slug:"sampyeong-dong"}, {name:"판교동", slug:"pangyo-dong"}, {name:"수내동", slug:"sunae-dong"}, {name:"백현동", slug:"baekhyeon-dong"}] },
      { name: "수정구", slug: "sujeong-gu", dongs: [{name:"태평동", slug:"taepyeong-dong"}, {name:"신흥동", slug:"sinheung-dong"}, {name:"수진동", slug:"sujin-dong"}, {name:"복정동", slug:"bokjeong-dong"}, {name:"창곡동", slug:"changgok-dong"}] },
      { name: "중원구", slug: "jungwon-gu", dongs: [{name:"상대원동", slug:"sangdaewon-dong"}, {name:"성남동", slug:"seongnam-dong"}, {name:"금광동", slug:"geumgwang-dong"}, {name:"은행동", slug:"eunhaeng-dong"}] }
    ]
  },
  { 
    id: "goyang",
    slug: "goyang",
    name: "고양 홈타이", 
    tag: "일산·화정·장항·백석·주엽·마두·행신·식사·삼송·덕이", 
    img: "images/thumbs/massage-07.jpg",
    gus: [
      { name: "일산동구", slug: "ilsandong-gu", dongs: [{name:"장항동", slug:"janghang-dong"}, {name:"백석동", slug:"baekseok-dong"}, {name:"마두동", slug:"madu-dong"}, {name:"식사동", slug:"siksa-dong"}, {name:"풍동", slug:"pung-dong"}] },
      { name: "일산서구", slug: "ilsanseo-gu", dongs: [{name:"일산동", slug:"ilsan-dong"}, {name:"주엽동", slug:"juyeop-dong"}, {name:"덕이동", slug:"deogi-dong"}, {name:"탄현동", slug:"tanhyeon-dong"}, {name:"대화동", slug:"daehwa-dong"}] },
      { name: "덕양구", slug: "deogyang-gu", dongs: [{name:"화정동", slug:"hwajeong-dong"}, {name:"행신동", slug:"haengsin-dong"}, {name:"삼송동", slug:"samsong-dong"}, {name:"원흥동", slug:"wonheung-dong"}, {name:"신원동", slug:"sinwon-dong"}] }
    ]
  },
  { 
    id: "yongin",
    slug: "yongin",
    name: "용인 홈타이", 
    tag: "수지·죽전·풍덕천·성복·동천·기흥·구갈·보라·보정·역북·유방", 
    img: "images/thumbs/massage-08.jpg",
    gus: [
      { name: "수지구", slug: "suji-gu", dongs: [{name:"풍덕천동", slug:"pungdeokcheon-dong"}, {name:"죽전동", slug:"jukjeon-dong"}, {name:"성복동", slug:"seongbok-dong"}, {name:"동천동", slug:"dongcheon-dong"}, {name:"신봉동", slug:"sinbong-dong"}, {name:"상현동", slug:"sanghyeon-dong"}] },
      { name: "기흥구", slug: "giheung-gu", dongs: [{name:"구갈동", slug:"gugal-dong"}, {name:"보라동", slug:"bora-dong"}, {name:"보정동", slug:"bojeong-dong"}, {name:"영덕동", slug:"yeongdeok-dong"}, {name:"신갈동", slug:"singal-dong"}, {name:"마북동", slug:"mabuk-dong"}] },
      { name: "처인구", slug: "cheoin-gu", dongs: [{name:"역북동", slug:"yeokbuk-dong"}, {name:"유방동", slug:"yubang-dong"}, {name:"김량장동", slug:"gimnyangjang-dong"}, {name:"포곡읍", slug:"pogok-eup"}, {name:"모현읍", slug:"mohyeon-eup"}] }
    ]
  },
  { 
    id: "bucheon",
    slug: "bucheon",
    name: "부천 홈타이", 
    tag: "상동·중동·심곡·원미·소사·범박·괴안·오정·원종·삼정", 
    img: "images/thumbs/massage-09.jpg",
    gus: [
      { name: "원미구", slug: "wonmi-gu", dongs: [{name:"상동", slug:"sang-dong"}, {name:"중동", slug:"jung-dong"}, {name:"심곡동", slug:"simgok-dong"}, {name:"원미동", slug:"wonmi-dong"}, {name:"도당동", slug:"dodang-dong"}, {name:"춘의동", slug:"chunui-dong"}] },
      { name: "소사구", slug: "sosa-gu", dongs: [{name:"소사동", slug:"sosa-dong"}, {name:"범박동", slug:"beombak-dong"}, {name:"괴안동", slug:"goean-dong"}, {name:"송내동", slug:"songnae-dong"}] },
      { name: "오정구", slug: "ojeong-gu", dongs: [{name:"오정동", slug:"ojeong-dong"}, {name:"원종동", slug:"wonjong-dong"}, {name:"삼정동", slug:"samjeong-dong"}, {name:"고강동", slug:"gogang-dong"}] }
    ]
  },
  { 
    id: "ansan",
    slug: "ansan",
    name: "안산 홈타이", 
    tag: "고잔·선부·성포·본오·사동·와동·월피·초지·신길·대부동", 
    img: "images/thumbs/massage-10.jpg",
    gus: [
      { name: "단원구", slug: "danwon-gu", dongs: [{name:"고잔동", slug:"gojan-dong"}, {name:"선부동", slug:"seonbu-dong"}, {name:"초지동", slug:"choji-dong"}, {name:"신길동", slug:"singil-dong"}, {name:"대부동", slug:"daebu-dong"}, {name:"원곡동", slug:"wongok-dong"}] },
      { name: "상록구", slug: "sangnok-gu", dongs: [{name:"성포동", slug:"seongpo-dong"}, {name:"본오동", slug:"bono-dong"}, {name:"사동", slug:"sa-dong"}, {name:"월피동", slug:"wolpi-dong"}, {name:"부곡동", slug:"bugok-dong"}, {name:"일동", slug:"il-dong"}] }
    ]
  },
  { 
    id: "anyang",
    slug: "anyang",
    name: "안양 홈타이", 
    tag: "평촌·안양·관양·비산·호계·박달·석수", 
    img: "images/thumbs/massage-11.jpg",
    gus: [
      { name: "동안구", slug: "dongan-gu", dongs: [{name:"평촌동", slug:"pyeongchon-dong"}, {name:"관양동", slug:"gwanyang-dong"}, {name:"비산동", slug:"bisan-dong"}, {name:"호계동", slug:"hoge-dong"}, {name:"범계동", slug:"beomgye-dong"}] },
      { name: "만안구", slug: "manan-gu", dongs: [{name:"안양동", slug:"anyang-dong"}, {name:"박달동", slug:"bakdal-dong"}, {name:"석수동", slug:"seoksu-dong"}] }
    ]
  },
  { 
    id: "namyangju",
    slug: "namyangju",
    name: "남양주 홈타이", 
    tag: "다산·별내·호평·평내·마석·진접·오남·와부·진건·화도읍", 
    img: "images/thumbs/massage-12.jpg",
    gus: [
      { name: "남양주시 관할", slug: "namyangju-gwanhal", dongs: [{name:"다산동", slug:"dasan-dong"}, {name:"별내동", slug:"byeollae-dong"}, {name:"호평동", slug:"hopyeong-dong"}, {name:"평내동", slug:"pyeongnae-dong"}, {name:"진접읍", slug:"jinjeop-eup"}, {name:"오남읍", slug:"onam-eup"}, {name:"와부읍", slug:"wabu-eup"}, {name:"진건읍", slug:"jingeon-eup"}, {name:"화도읍", slug:"hwado-eup"}] }
    ]
  },
  { 
    id: "hwaseong",
    slug: "hwaseong",
    name: "화성 홈타이", 
    tag: "동탄·병점·향남읍·봉담읍·남양·마도·송산·우정읍·새솔", 
    img: "images/thumbs/massage-13.jpg",
    gus: [
      { name: "동탄권역", slug: "dongtan-gwon", dongs: [{name:"동탄동", slug:"dongtan-dong"}, {name:"영천동", slug:"yeongcheon-dong"}, {name:"청계동", slug:"cheonggye-dong"}, {name:"목동", slug:"mok-dong"}, {name:"산척동", slug:"sancheok-dong"}] },
      { name: "서부/남부권역", slug: "seobu-nambu", dongs: [{name:"병점동", slug:"byeongjeom-dong"}, {name:"향남읍", slug:"hyangnam-eup"}, {name:"봉담읍", slug:"bongdam-eup"}, {name:"남양읍", slug:"namyang-eup"}, {name:"마도면", slug:"mado-myeon"}, {name:"송산면", slug:"songsan-myeon"}, {name:"새솔동", slug:"saesol-dong"}] }
    ]
  },
  { 
    id: "pyeongtaek",
    slug: "pyeongtaek",
    name: "평택 홈타이", 
    tag: "송탄·서정·비전·세교·동삭·칠원·팽성읍·포승읍·안중읍·고덕", 
    img: "images/thumbs/massage-14.jpg",
    gus: [
      { name: "평택시 관할", slug: "pyeongtaek-gwanhal", dongs: [{name:"서정동", slug:"seojeong-dong"}, {name:"비전동", slug:"bijeon-dong"}, {name:"세교동", slug:"segyo-dong"}, {name:"동삭동", slug:"dongsak-dong"}, {name:"칠원동", slug:"chilwon-dong"}, {name:"팽성읍", slug:"paengseong-eup"}, {name:"포승읍", slug:"poseung-eup"}, {name:"안중읍", slug:"anjung-eup"}, {name:"고덕면", slug:"godeok-myeon"}] }
    ]
  },
  { 
    id: "uijeongbu",
    slug: "uijeongbu",
    name: "의정부 홈타이", 
    tag: "의정부·호원·신곡·용현·민락·낙양·가능·녹양", 
    img: "images/thumbs/massage-15.jpg",
    gus: [
      { name: "의정부시 관할", slug: "uijeongbu-gwanhal", dongs: [{name:"의정부동", slug:"uijeongbu-dong"}, {name:"호원동", slug:"howon-dong"}, {name:"신곡동", slug:"singok-dong"}, {name:"용현동", slug:"yonghyeon-dong"}, {name:"민락동", slug:"minrak-dong"}, {name:"낙양동", slug:"nakyang-dong"}, {name:"가능동", slug:"ganeung-dong"}, {name:"녹양동", slug:"nokyang-dong"}] }
    ]
  },
  { 
    id: "siheung",
    slug: "siheung",
    name: "시흥 홈타이", 
    tag: "정왕·배곧·은행·대야·신천·목감·장현·능곡·월곶", 
    img: "images/thumbs/massage-16.jpg",
    gus: [
      { name: "시흥시 관할", slug: "siheung-gwanhal", dongs: [{name:"정왕동", slug:"jeongwang-dong"}, {name:"배곧동", slug:"baegot-dong"}, {name:"은행동", slug:"eunhaeng-dong"}, {name:"대야동", slug:"daeya-dong"}, {name:"신천동", slug:"sincheon-dong"}, {name:"목감동", slug:"mokgam-dong"}, {name:"장현동", slug:"janghyeon-dong"}, {name:"능곡동", slug:"neunggok-dong"}, {name:"월곶동", slug:"wolgot-dong"}] }
    ]
  },
  { 
    id: "paju",
    slug: "paju",
    name: "파주 홈타이", 
    tag: "금촌·운정·동패·목동·야당·교하·문산읍·조리읍·법원읍", 
    img: "images/thumbs/massage-17.jpg",
    gus: [
      { name: "파주시 관할", slug: "paju-gwanhal", dongs: [{name:"금촌동", slug:"geumchon-dong"}, {name:"동패동", slug:"dongpae-dong"}, {name:"목동동", slug:"mokdong-dong"}, {name:"야당동", slug:"yadang-dong"}, {name:"다율동", slug:"dayul-dong"}, {name:"문산읍", slug:"munsan-eup"}, {name:"조리읍", slug:"jori-eup"}, {name:"법원읍", slug:"beopwon-eup"}] }
    ]
  },
  { 
    id: "gimpo",
    slug: "gimpo",
    name: "김포 홈타이", 
    tag: "장기·구래·운양·풍무·사우·북변·마산·통진읍·양촌읍", 
    img: "images/thumbs/massage-18.jpg",
    gus: [
      { name: "김포시 관할", slug: "gimpo-gwanhal", dongs: [{name:"장기동", slug:"janggi-dong"}, {name:"구래동", slug:"gurae-dong"}, {name:"운양동", slug:"unyang-dong"}, {name:"풍무동", slug:"pungmu-dong"}, {name:"사우동", slug:"sau-dong"}, {name:"북변동", slug:"bukbyeon-dong"}, {name:"마산동", slug:"masan-dong"}, {name:"통진읍", slug:"tongjin-eup"}, {name:"양촌읍", slug:"yangchon-eup"}] }
    ]
  },
  { 
    id: "gwangmyeong",
    slug: "gwangmyeong",
    name: "광명 홈타이", 
    tag: "철산·하안·소하·일직·광명·옥길", 
    img: "images/thumbs/massage-19.jpg",
    gus: [
      { name: "광명시 관할", slug: "gwangmyeong-gwanhal", dongs: [{name:"철산동", slug:"cheolsan-dong"}, {name:"하안동", slug:"haan-dong"}, {name:"소하동", slug:"soha-dong"}, {name:"일직동", slug:"iljig-dong"}, {name:"광명동", slug:"gwangmyeong-dong"}, {name:"옥길동", slug:"okgil-dong"}] }
    ]
  },
  { 
    id: "gwangju",
    slug: "gwangju",
    name: "광주 홈타이", 
    tag: "태전·경안·쌍령·송정·오포읍·곤지암읍·초월읍·퇴촌면", 
    img: "images/thumbs/massage-20.jpg",
    gus: [
      { name: "광주시 관할", slug: "gwangju-gwanhal", dongs: [{name:"태전동", slug:"taejeon-dong"}, {name:"경안동", slug:"gyeong-an-dong"}, {name:"쌍령동", slug:"ssangryeong-dong"}, {name:"송정동", slug:"songjeong-dong"}, {name:"오포읍", slug:"opo-eup"}, {name:"곤지암읍", slug:"gonjiam-eup"}, {name:"초월읍", slug:"chowol-eup"}, {name:"퇴촌면", slug:"toechon-myeon"}] }
    ]
  },
  { 
    id: "gunpo",
    slug: "gunpo",
    name: "군포 홈타이", 
    tag: "산본·금정·당동·당정·부곡·대야미", 
    img: "images/thumbs/massage-21.jpg",
    gus: [
      { name: "군포시 관할", slug: "gunpo-gwanhal", dongs: [{name:"산본동", slug:"sanbon-dong"}, {name:"금정동", slug:"geumjeong-dong"}, {name:"당동", slug:"dang-dong"}, {name:"당정동", slug:"dangjeong-dong"}, {name:"부곡동", slug:"bugok-dong"}, {name:"대야미동", slug:"daeyami-dong"}] }
    ]
  },
  { 
    id: "icheon",
    slug: "icheon",
    name: "이천 홈타이", 
    tag: "창전·증포·중리·관고·안흥·부발읍·장호원읍·마장면", 
    img: "images/thumbs/massage-22.jpg",
    gus: [
      { name: "이천시 관할", slug: "icheon-gwanhal", dongs: [{name:"창전동", slug:"changjeon-dong"}, {name:"증포동", slug:"jeungpo-dong"}, {name:"중리동", slug:"jungni-dong"}, {name:"관고동", slug:"gwango-dong"}, {name:"안흥동", slug:"anhung-dong"}, {name:"부발읍", slug:"bubal-eup"}, {name:"장호원읍", slug:"janghowon-eup"}, {name:"마장면", slug:"majang-myeon"}] }
    ]
  },
  { 
    id: "yangju",
    slug: "yangju",
    name: "양주 홈타이", 
    tag: "덕정·옥정·삼숭·고읍·광사·회정·백석읍·광적면", 
    img: "images/thumbs/massage-23.jpg",
    gus: [
      { name: "양주시 관할", slug: "yangju-gwanhal", dongs: [{name:"덕정동", slug:"deokjeong-dong"}, {name:"옥정동", slug:"okjeong-dong"}, {name:"삼숭동", slug:"samsung-dong"}, {name:"고읍동", slug:"gohup-dong"}, {name:"광사동", slug:"gwangsa-dong"}, {name:"회정동", slug:"hoejeong-dong"}, {name:"백석읍", slug:"baekseok-eup"}, {name:"광적면", slug:"gwangjeok-myeon"}] }
    ]
  },
  { 
    id: "osan",
    slug: "osan",
    name: "오산 홈타이", 
    tag: "오산·세교·원동·궐동·수청·금암·양산·외삼미", 
    img: "images/thumbs/massage-24.jpg",
    gus: [
      { name: "오산시 관할", slug: "osan-gwanhal", dongs: [{name:"오산동", slug:"osan-dong"}, {name:"세교동", slug:"segyo-dong"}, {name:"원동", slug:"won-dong"}, {name:"궐동", slug:"gwol-dong"}, {name:"수청동", slug:"sucheong-dong"}, {name:"금암동", slug:"geumam-dong"}, {name:"양산동", slug:"yangsan-dong"}, {name:"외삼미동", slug:"oesammi-dong"}] }
    ]
  },
  { 
    id: "guri",
    slug: "guri",
    name: "구리 홈타이", 
    tag: "인창·수택·토평·교문·아천·갈매", 
    img: "images/thumbs/massage-25.jpg",
    gus: [
      { name: "구리시 관할", slug: "guri-gwanhal", dongs: [{name:"인창동", slug:"inchang-dong"}, {name:"수택동", slug:"sutaek-dong"}, {name:"토평동", slug:"topyeong-dong"}, {name:"교문동", slug:"gyomun-dong"}, {name:"아천동", slug:"acheon-dong"}, {name:"갈매동", slug:"galmae-dong"}] }
    ]
  },
  { 
    id: "anseong",
    slug: "anseong",
    name: "안성 홈타이", 
    tag: "봉산·석정·옥산·아양·공도읍·대덕면·죽산면·일죽면", 
    img: "images/thumbs/massage-26.jpg",
    gus: [
      { name: "안성시 관할", slug: "anseong-gwanhal", dongs: [{name:"봉산동", slug:"bongsan-dong"}, {name:"석정동", slug:"seokjeong-dong"}, {name:"옥산동", slug:"oksan-dong"}, {name:"아양동", slug:"ayang-dong"}, {name:"공도읍", slug:"gongdo-eup"}, {name:"대덕면", slug:"daedeok-myeon"}, {name:"죽산면", slug:"juksan-myeon"}, {name:"일죽면", slug:"iljuk-myeon"}] }
    ]
  },
  { 
    id: "pocheon",
    slug: "pocheon",
    name: "포천 홈타이", 
    tag: "신읍·선단·자작·소흘읍·내촌면·가산면·영북면", 
    img: "images/thumbs/massage-27.jpg",
    gus: [
      { name: "포천시 관할", slug: "pocheon-gwanhal", dongs: [{name:"신읍동", slug:"sineup-dong"}, {name:"선단동", slug:"seondan-dong"}, {name:"자작동", slug:"jajak-dong"}, {name:"소흘읍", slug:"soheul-eup"}, {name:"내촌면", slug:"naechon-myeon"}, {name:"가산면", slug:"gasan-myeon"}, {name:"영북면", slug:"yeongbuk-myeon"}] }
    ]
  },
  { 
    id: "uiwang",
    slug: "uiwang",
    name: "의왕 홈타이", 
    tag: "내손·오전·포일·삼동·왕곡·청계", 
    img: "images/thumbs/massage-28.jpg",
    gus: [
      { name: "의왕시 관할", slug: "uiwang-gwanhal", dongs: [{name:"내손동", slug:"naeson-dong"}, {name:"오전동", slug:"ojeon-dong"}, {name:"포일동", slug:"poil-dong"}, {name:"삼동", slug:"sam-dong"}, {name:"왕곡동", slug:"wanggok-dong"}, {name:"청계동", slug:"cheonggye-dong"}] }
    ]
  },
  { 
    id: "hanam",
    slug: "hanam",
    name: "하남 홈타이", 
    tag: "미사·신장·덕풍·풍산·감일·위례·초이", 
    img: "images/thumbs/massage-29.jpg",
    gus: [
      { name: "하남시 관할", slug: "hanam-gwanhal", dongs: [{name:"미사동", slug:"misa-dong"}, {name:"신장동", slug:"sinjang-dong"}, {name:"덕풍동", slug:"deokpung-dong"}, {name:"풍산동", slug:"pungsan-dong"}, {name:"감일동", slug:"gamil-dong"}, {name:"위례동", slug:"wirye-dong"}, {name:"초이동", slug:"choi-dong"}] }
    ]
  },
  { 
    id: "yeoju",
    slug: "yeoju",
    name: "여주 홈타이", 
    tag: "여흥·중앙·광대·점봉·가남읍·흥천면·금사면", 
    img: "images/thumbs/massage-30.jpg",
    gus: [
      { name: "여주시 관할", slug: "yeoju-gwanhal", dongs: [{name:"여흥동", slug:"yeohung-dong"}, {name:"중앙동", slug:"jungang-dong"}, {name:"광대동", slug:"gwangdae-dong"}, {name:"점봉동", slug:"jembong-dong"}, {name:"가남읍", slug:"ganam-eup"}, {name:"흥천면", slug:"heungcheon-myeon"}, {name:"금사면", slug:"geumsa-myeon"}] }
    ]
  },
  { 
    id: "yangpyeong",
    slug: "yangpyeong",
    name: "양평군 홈타이", 
    tag: "양평읍·양서면·용문면·강상면·강하면·서종면", 
    img: "images/thumbs/massage-31.jpg",
    gus: [
      { name: "양평군 관할", slug: "yangpyeong-gwanhal", dongs: [{name:"양평읍", slug:"yangpyeong-eup"}, {name:"양서면", slug:"yangseo-myeon"}, {name:"용문면", slug:"yongmun-myeon"}, {name:"강상면", slug:"gangsang-myeon"}, {name:"강하면", slug:"gangha-myeon"}, {name:"서종면", slug:"seojong-myeon"}] }
    ]
  },
  { 
    id: "dongducheon",
    slug: "dongducheon",
    name: "동두천 홈타이", 
    tag: "생연·지행·보산·동두천·상패·광암", 
    img: "images/thumbs/massage-05.jpg",
    gus: [
      { name: "동두천시 관할", slug: "dongducheon-gwanhal", dongs: [{name:"생연동", slug:"saengyeon-dong"}, {name:"지행동", slug:"jihaeng-dong"}, {name:"보산동", slug:"bosan-dong"}, {name:"동두천동", slug:"dongducheon-dong"}, {name:"상패동", slug:"sangpae-dong"}, {name:"광암동", slug:"gwangam-dong"}] }
    ]
  },
  { 
    id: "gwacheon",
    slug: "gwacheon",
    name: "과천 홈타이", 
    tag: "별양·중앙·원문·갈현·문원·주암", 
    img: "images/thumbs/massage-06.jpg",
    gus: [
      { name: "과천시 관할", slug: "gwacheon-gwanhal", dongs: [{name:"별양동", slug:"byeolyang-dong"}, {name:"중앙동", slug:"jungang-dong"}, {name:"원문동", slug:"wonmun-dong"}, {name:"갈현동", slug:"galhyeon-dong"}, {name:"문원동", slug:"munwon-dong"}, {name:"주암동", slug:"juam-dong"}] }
    ]
  },
  { 
    id: "gapyeong",
    slug: "gapyeong",
    name: "가평군 홈타이", 
    tag: "가평읍·청평면·설악면·조종면·상면·북면", 
    img: "images/thumbs/massage-07.jpg",
    gus: [
      { name: "가평군 관할", slug: "gapyeong-gwanhal", dongs: [{name:"가평읍", slug:"gapyeong-eup"}, {name:"청평면", slug:"cheongpyeong-myeon"}, {name:"설악면", slug:"seorak-myeon"}, {name:"조종면", slug:"jojong-myeon"}, {name:"상면", slug:"sang-myeon"}, {name:"북면", slug:"buk-myeon"}] }
    ]
  },
  { 
    id: "yeoncheon",
    slug: "yeoncheon",
    name: "연천군 홈타이", 
    tag: "연천읍·전곡읍·군남면·신서면·청산면", 
    img: "images/thumbs/massage-08.jpg",
    gus: [
      { name: "연천읍 관할", slug: "yeoncheon-gwanhal", dongs: [{name:"연천읍", slug:"yeoncheon-eup"}, {name:"전곡읍", slug:"jeongok-eup"}, {name:"군남면", slug:"gunnam-myeon"}, {name:"신서면", slug:"sinseo-myeon"}, {name:"청산면", slug:"cheongsan-myeon"}] }
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
    img: "/images/shop1.jpg",
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
    img: "/images/shop2.jpg",
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
    img: "/images/shop3.jpg",
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
    img: "/images/shop4.jpg",
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
    img: "/images/shop5.jpg",
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

// URL 경로 기반 페이지 라우팅 분기 처리 (영문 슬러그 매칭)
function handleRoute() {
  const pathSegments = window.location.pathname.replace(/^\/+/, '').split('/');
  const citySlug = pathSegments[0] ? decodeURIComponent(pathSegments[0]) : "";
  const guSlug = pathSegments[1] ? decodeURIComponent(pathSegments[1]) : "";
  const dongSlug = pathSegments[2] ? decodeURIComponent(pathSegments[2]) : "";

  const mainSections = ["shops", "service", "price-info", "travel", "food", "areas", "reviews"];
  if (!citySlug || mainSections.includes(citySlug)) {
    showMainPage();
    if (mainSections.includes(citySlug)) {
      const target = document.getElementById(citySlug);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  const foundArea = areaData.find(a => a.slug === citySlug);
  if (foundArea) {
    let foundGuName = "";
    let foundDongName = "";

    if (guSlug) {
      const guObj = foundArea.gus.find(g => g.slug === guSlug);
      if (guObj) {
        foundGuName = guObj.name;
        if (dongSlug) {
          const dongObj = guObj.dongs.find(d => d.slug === dongSlug);
          if (dongObj) {
            foundDongName = dongObj.name;
          }
        }
      }
    }
    showDetailPage(foundArea, foundGuName, foundDongName);
  } else {
    showMainPage();
  }
}

// 5개 제휴업체 HTML 생성 함수 (절대 경로 적용)
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

// 메인 제휴업체 및 지역 타일 생성 (영문 슬러그 경로 적용)
function renderShops() {
  const container = document.getElementById("shopGridContainer");
  if (container) container.innerHTML = getShopsHtml();
}

function renderAreas() {
  const container = document.getElementById("areaGridContainer");
  if (!container) return;

  container.innerHTML = areaData.map(area => `
    <a class="area-tile" href="/${area.slug}" onclick="navigateArea(event, '${area.slug}')">
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

// 지역 타일 클릭 이동
function navigateArea(event, areaSlug) {
  event.preventDefault();
  history.pushState({ area: areaSlug }, '', `/${areaSlug}`);
  handleRoute();
}

// 상세 페이지 내 동 버튼 클릭 이동 (영문 슬러그 결합)
function navigateDong(event, urlPath) {
  event.preventDefault();
  history.pushState({}, '', urlPath);
  handleRoute();
}

// 메인으로 돌아가기
function goBackToMain(event) {
  if (event) event.preventDefault();
  history.pushState({}, '', '/');
  handleRoute();
}

// 1. 메인 화면 표시
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

// 2. [시 - 구 - 동] 영문 슬러그 전용 단독 상세 페이지 표시
function showDetailPage(area, guName, dongName) {
  document.getElementById("mainView").style.display = "none";
  const detailView = document.getElementById("detailView");
  const detailContent = document.getElementById("detailContent");

  let pageTitle = area.name;
  if (guName && guName !== "시 관할" && guName !== "권역") {
    pageTitle = `${area.name.replace('홈타이','')} ${guName} 홈타이 · 방문마사지`;
  }
  if (dongName) {
    pageTitle = `${area.name.replace('홈타이','')} ${dongName} 홈타이 · 방문마사지`;
  }

  const fullTitle = `${pageTitle} - 경기홈타이`;
  const fullDesc = `${pageTitle} 추천 제휴업체 안내. ${area.name.replace('홈타이','')} 전지역 30분 내 빠른 방문마사지, 출장 타이 마사지 후불제 케어 서비스.`;
  const fullImg = area.img.startsWith("http") ? area.img : `https://gyeonggi-hometai.shop${area.img}`;

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
          ${gu.dongs.map(d => `<a href="/${area.slug}/${gu.slug}/${d.slug}" onclick="navigateDong(event, '/${area.slug}/${gu.slug}/${d.slug}')" class="dong-link-btn">${d.name}</a>`).join("")}
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