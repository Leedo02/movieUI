import './App.css';
import app from './firebase';
import MovieList from './component/MovieList.js';

import movie20_1 from './img/movie20_1.jpg';
import movie20_2 from './img/movie20_2.jpg';
import movie20_3 from './img/movie20_3.jpg';
import movie20_4 from './img/movie20_4.jpg';
import movie20_5 from './img/movie20_5.jpg';

import movie21_1 from './img/movie21_1.jpg';
import movie21_2 from './img/movie21_2.jpg';
import movie21_3 from './img/movie21_3.jpg';
import movie21_4 from './img/movie21_4.jpg';
import movie21_5 from './img/movie21_5.jpg';

import movie22_1 from './img/movie22_1.jpg';
import movie22_2 from './img/movie22_2.jpg';
import movie22_3 from './img/movie22_3.jpg';
import movie22_4 from './img/movie22_4.jpg';
import movie22_5 from './img/movie22_5.jpg';

import movie23_1 from './img/movie23_1.jpg';
import movie23_2 from './img/movie23_2.jpg';
import movie23_3 from './img/movie23_3.jpg';
import movie23_4 from './img/movie23_4.jpg';
import movie23_5 from './img/movie23_5.jpg';

import watchingAll from './img/watchingAll.svg';
import watching12 from './img/watching12.svg';
import watching15 from './img/watching15.svg';
import watching19 from './img/watching19.svg';
import { useState } from 'react';

const dummy = [
  {
    id : 0,
    mImg : movie20_1,
    mAge : watchingAll,
    mTitle : '울고 싶은 나는 고양이 가면을 쓴다',
    mTime : '104분',
    mRating : '8.57',
    mYear : '2020년',
    director : '사토 준이치',
    actor : '시다 미라이, 하나에 나츠키',
    summary : '좋아하는 남자친구에게 고백하기 위해 고양이가 된 소녀의 여정을 그린 애니메이션'
  },
  {
    id : 1,
    mImg : movie20_2,
    mAge : watching15,
    mTitle : '극장판 귀멸의 칼날: 무한열차편',
    mTime : '117분',
    mRating : '9.59',
    mYear : '2020년',
    director : '소토자키 하루오',
    actor : '시모노 히로, 마츠오카 요시츠구, 히노 사토시, 히라카와 다이스케',
    summary : '혈귀로 변한 여동생 ‘네즈코’를 되돌리기 위해 귀살대가 된 ‘탄지로’! 어둠 속을 달리는 무한열차에서 승객들이 흔적 없이 사라진다는 소식에 ‘젠이츠’, ‘이노스케’와 함께 임무 수행을 위해 무한열차에 탑승한다. 그리고 그 곳에서 만난 귀살대 최강 검사 염주 ‘렌고쿠’! 이들은 무한열차에 숨어 있는 혈귀의 존재를 직감하고 모두를 구하기 위해 목숨을 건 혈전을 시작하는데… 그 칼로 악몽을 끊어라!'
  },
  {
    id : 2,
    mImg : movie20_3,
    mAge : watchingAll,
    mTitle : '소울',
    mTime : '107분',
    mRating : '9.32',
    mYear : '2020년',
    director : '피트 닥터',
    actor : '제이미 폭스, 티나 페이, 다비스 딕스',
    summary : '뉴욕에서 음악 선생님으로 일하던 ‘조’는 꿈에 그리던 최고의 밴드와 재즈 클럽에서 연주하게 된 그 날, 예기치 못한 사고로 영혼이 되어 ‘태어나기 전 세상’에 떨어진다. 탄생 전 영혼들이 멘토와 함께 자신의 관심사를 발견하면 지구 통행증을 발급하는 ‘태어나기 전 세상’ ‘조’는 그 곳에서 유일하게 지구에 가고 싶어하지 않는 시니컬한 영혼 ‘22’의 멘토가 된다. 링컨, 간디, 테레사 수녀도 멘토되길 포기한 영혼 ‘22’ 꿈의 무대에 서려면 ‘22’의 지구 통행증이 필요한 ‘조’ 그는 다시 지구로 돌아가 꿈의 무대에 설 수 있을까?'
  },
  {
    id : 3,
    mImg : movie20_4,
    mAge : watchingAll,
    mTitle : '극장판 바이올렛 에버가든',
    mTime : '140분',
    mRating : '9.68',
    mYear : '2020년',
    director : '이시다테 타이치',
    actor : '이시카와 유이, 나미카와 다이스케',
    summary : '애하는 길베르트 소령님, 오늘도 또 당신을 떠올리고 말았습니다. 무엇을 보든 무엇을 하든 당신이 떠오릅니다. 시간이 지나도 당신과 보냈던 기억은 선명하게 되살아납니다. 당신은 날 곁에 두었고 아무것도 모르는 제게 살아가는 방법을 가르쳐 주셨고 처음으로 사랑이라는 감정을 알려주셨습니다. 그래서 이렇게 또 편지를 쓰게 됩니다. -언젠가 이 편지가 당신에게 닿기를 바라며-'
  },
  {
    id : 4,
    mImg : movie20_5,
    mAge : watchingAll,
    mTitle : '도라에몽: 스탠바이미2',
    mTime : '96분',
    mRating : '8.82',
    mYear : '2020년',
    director : '야기 류이치, 야마자키 다카시',
    actor : '미즈타 와사비, 오오하라 메구미, 카카즈 유미, 키무라 스바루',
    summary : '“할머니를 만나고 싶어!” 어느 날 진구는 돌아가신 할머니와의 추억이 담긴 낡은 곰 인형을 발견하고 할머니가 보고 싶은 마음에 도라에몽의 4차원 비밀도구 타임머신을 타고 과거로 향한다. 느닷없이 찾아온 소년을 금세 진구라고 믿어주시는 할머니는 한 가지 소원을 말씀하시는데… “진구의 아내를 만나보고 싶구나” 결혼식을 보여 드리기 위해 미래로 간 도라에몽과 진구! 하지만 이슬이와의 결혼식 당일 신랑 진구는 도망가 버리고 퉁퉁이와 비실이가 진구를 찾는 동안 이슬이는 진구를 믿고 기다리는데… 할머니의 소원을 위해, 그리고 가족과 친구들, 좋아하는 이슬이와의 약속을 위해 도라에몽과 진구의 과거와 현재, 미래를 넘나드는 스펙터클한 대모험이 시작된다!'
  },
  {
    id : 5,
    mImg : movie21_1,
    mAge : watching19,
    mTitle : '어른들은 몰라요',
    mTime : '127분',
    mRating : '6.92',
    mYear : '2021년',
    director : '이환',
    actor : '이유미, 하니, 신햇빛, 이환',
    summary : '18세 ‘세진’, 덜컥 임산부가 되어버렸다. 무책임한 어른들에 지쳐 거리를 떠돌던 ‘세진’은 가출 경력 4년 차, 동갑내기 ‘주영’을 만난다. 처음 만났지만 절친이 된 ‘세진’과 ‘주영’, 위기의 순간 나타난 파랑머리 ‘재필’과 ‘신지’까지 왠지 닮은 듯한 네 명이 모여 ‘세진’의 유산 프로젝트가 시작된다. “우리도 살아야 되잖아요.” 어른들은 모르는 가장 솔직한 10대들의 이야기'
  },
  {
    id : 6,
    mImg : movie21_2,
    mAge : watching12,
    mTitle : '스파이더맨: 노 웨이 홈',
    mTime : '148분',
    mRating : '9.09',
    mYear : '2021년',
    director : '존 왓츠',
    actor : '톰 홀랜드, 젠데이아 콜먼, 베네딕트 컴버배치, 존 파브로, 제이콥 배덜런, 마리사 토메이, 알프리드 몰리나',
    summary : '‘미스테리오’의 계략으로 세상에 정체가 탄로난 스파이더맨 ‘피터 파커’는 하루 아침에 평범한 일상을 잃게 된다. 문제를 해결하기 위해 ‘닥터 스트레인지’를 찾아가 도움을 청하지만 뜻하지 않게 멀티버스가 열리면서 각기 다른 차원의 불청객들이 나타난다. ‘닥터 옥토퍼스’를 비롯해 스파이더맨에게 깊은 원한을 가진 숙적들의 강력한 공격에 ‘피터 파커’는 사상 최악의 위기를 맞게 되는데…'
  },
  {
    id : 7,
    mImg : movie21_3,
    mAge : watching15,
    mTitle : '극장판 주술회전 0',
    mTime : '105분',
    mRating : '9.5',
    mYear : '2021년',
    director : '이토 텟페이',
    actor : '오가타 메구미, 코마츠 미카코, 우치야마 코우키, 세키 토모카즈, 나카무라 유이치, 사쿠라이 타카히로',
    summary : '자신을 따라다니는 악령 리카에 의해 동급생을 다치게 만든 옷코츠 유타는 처분의 위기를 넘기고 고죠 사토루의 도움을 받아 도쿄 도립 주술 고등전문학교로 전학을 가게 된다.'
  },
  {
    id : 8,
    mImg : movie21_4,
    mAge : watchingAll,
    mTitle : '보스 베이비 2',
    mTime : '107분',
    mRating : '8.98',
    mYear : '2021년',
    director : '톰 맥그라스',
    actor : '알렉 볼드윈, 제임스 마스던, 에이미 세다리스',
    summary : '베이비 주식회사의 레전드 보스 베이비에서 인생 만렙 CEO가 된 ‘테드’. 베이비인 줄 알았던 조카 ‘티나’가 알고 보니 베이비 주식회사 소속 임원으로 밝혀진다. 뉴 보스 베이비 ‘티나’의 지시로 다시 베이비로 돌아간 ‘테드’와 형 ‘팀’에게 주어진 시간은 48시간! 세상을 구하기 위한 미션을 무사히 완수할 수 있을 것인가?'
  },
  {
    id : 9,
    mImg : movie21_5,
    mAge : watching15,
    mTitle : '쿠폰의 여왕',
    mTime : '110분',
    mRating : '7.10',
    mYear : '2021년',
    director : '아론 고뎃, 기타 펄라필리',
    actor : '크리스틴 벨, 커비 하월바티스트, 폴 월터 하우저, 비비 렉사, 빈스 본',
    summary : '쿠폰 모으기를 삶의 낙으로 삼으며 마트 직원에게 ‘쿠폰으로 창조 경제’를 설파하던 주부 코니. 어느 날, 공짜 쿠폰으로 돈을 벌 수 있는 획기적인 아이디어를 떠올리고 이웃집 절친이자 유튜버 꿈나무인 조조를 설득해 실행에 착수, 대박을 터뜨린다. 비즈니스 대성공의 기쁨을 만끽하며 명품부터 슈퍼카, 최신 무기 쇼핑까지 돈세탁에 열중하던 그때, 수상함을 감지한 마트 손실 방지 전문가 켄이 본격 수사에 나서는데…! 역대 최고 규모! 쿠폰으로 백만장자 된 여자들의 쿠폰 실화! 골 때리는 범죄 코미디가 온다!'
  },
  {
    id : 10,
    mImg : movie22_1,
    mAge : watching12,
    mTitle : '오늘 밤, 세계에서 이 사랑이 사라진다 해도',
    mTime : '121분',
    mRating : '7.94',
    mYear : '2022년',
    director : '미키 타카히로',
    actor : '미치에다 슌스케, 후쿠모토 리코, 후루카와 코토네, 마츠모토 호노카',
    summary : '“카미야 토루에 대해 잊지 말 것” 자고 일어나면 전날의 기억을 잃는 ‘선행성 기억상실증’에 걸린 소녀 ‘마오리’ “내일의 마오리도 내가 즐겁게 해줄 거야" 누구에게도 기억되지 않는 무색무취의 평범한 소년 ‘토루’ 매일 밤 사랑이 사라지는 세계, 그럼에도 불구하고, 다음 날 서로를 향한 애틋한 고백을 반복하는 두 소년, 소녀의 가장 슬픈 청춘담'
  },
  {
    id : 11,
    mImg : movie22_2,
    mAge : watching12,
    mTitle : '스즈메의 문단속',
    mTime : '122분',
    mRating : '8.13',
    mYear : '2022년',
    director : '신카이 마코토',
    actor : '하라 나노카, 마츠무라 호쿠토, 후카츠 에리, 마츠모토 코시로, 소메타니 쇼타, 이토 사이리, 하나세 코토네, 하나자와 카나, 카미키 류노스케',
    summary : '큐슈의 작은 마을에서 살고 있는 소녀 ‘스즈메’는 어느 날, 여행을 하며 ‘문’을 찾고 있는 한 청년을 만난다. 그의 뒤를 쫓아간 소녀는 산속 폐허에서 덩그러니 남겨진 낡은 문을 발견한다.'
  },
  {
    id : 12,
    mImg : movie22_3,
    mAge : watching12,
    mTitle : '아바타: 물의 길',
    mTime : '192분',
    mRating : '8.83',
    mYear : '2022년',
    director : '제임스 카메론',
    actor : '조 샐다나, 샘 워싱턴, 시고니 위버, 우나 채플린, 지오바니 리비시, 스티븐 랭, 케이튼 윈슬렛',
    summary : '<아바타: 물의 길>은 판도라 행성에서 ‘제이크 설리’와 ‘네이티리’가 이룬 가족이 겪게 되는 무자비한 위협과 살아남기 위해 떠나야 하는 긴 여정과 전투, 그리고 견뎌내야 할 상처에 대한 이야기를 그렸다. 월드와이드 역대 흥행 순위 1위를 기록한 전편 <아바타>에 이어 제임스 카메론 감독이 13년만에 선보이는 영화로, 샘 워싱턴, 조 샐다나, 시고니 위버, 스티븐 랭, 케이트 윈슬렛이 출연하고 존 랜도가 프로듀싱을 맡았다.'
  },
  {
    id : 13,
    mImg : movie22_4,
    mAge : watching12,
    mTitle : '원피스 필름 레드',
    mTime : '115분',
    mRating : '6.86',
    mYear : '2022년',
    director : '타니구치 고로',
    actor : '타나카 마유미, 이케다 슈이치, 나카이 카즈야, 오카무라 아케미, 야마구치 캇페이, 히라타 히로아키, 오오타니 이쿠에',
    summary : '오직 목소리 하나로 전 세계를 사로잡은 디바 ‘우타’. 그녀가 모습을 드러내는 첫 라이브 콘서트가 음악의 섬 ‘엘레지아’에서 열리고 ‘루피’가 이끄는 밀짚모자 해적단과 함께 수많은 ‘우타’ 팬들로 공연장은 가득 찬다. 그리고 이 콘서트를 둘러싼 해적들과 해군들의 수상한 움직임이 시작되는데… 드디어 전세계가 애타게 기다리던 ‘우타’의 등장과 함께 노래가 울려 퍼지고, 그녀가 ‘샹크스의 딸’이라는 충격적인 사실이 드러난다. ‘루피’, ‘우타’, ‘샹크스’, 세 사람의 과거가 그녀의 노랫소리와 함께 밝혀진다!'
  },
  {
    id : 14,
    mImg : movie22_5,
    mAge : watchingAll,
    mTitle : '미니언즈2',
    mTime : '87분',
    mRating : '평점',
    mYear : '2022년',
    director : '카일 발다',
    actor : '스티브 카렐, 타라지 P.헨슨, 양자경, 루시 로리스, 장 끌로드 반담',
    summary : '세계 최고의 슈퍼 악당을 꿈꾸는 미니보스 ‘그루’와 그를 따라다니는 미니언들. 어느 날 그루는 최고의 악당 조직 ‘빌런6’의 마법 스톤을 훔치는데 성공하지만 뉴페이스 미니언 ‘오토’의 실수로 스톤을 잃어버리고 빌런6에게 납치까지 당한다. 미니보스를 구하기 위해 잃어버린 스톤을 되찾아야 하는 ‘오토’, 그리고 쿵푸를 마스터해야 하는 ‘케빈’, ‘스튜어트’, ‘밥’! 올여름 극장가를 점령할 MCU(미니언즈 시네마틱 유니버스)가 돌아온다!'
  },
  {
    id : 15,
    mImg : movie23_1,
    mAge : watching12,
    mTitle : '서울의 봄',
    mTime : '141분',
    mRating : '9.59',
    mYear : '2023년',
    director : '김성수',
    actor : '황정민, 정우성, 이성민, 박해준, 김성균',
    summary : '1979년 12월 12일, 수도 서울 군사반란 발생 그날, 대한민국의 운명이 바뀌었다 대한민국을 뒤흔든 10월 26일 이후, 서울에 새로운 바람이 불어온 것도 잠시 12월 12일, 보안사령관 전두광이 반란을 일으키고 군 내 사조직을 총동원하여 최전선의 전방부대까지 서울로 불러들인다. 권력에 눈이 먼 전두광의 반란군과 이에 맞선 수도경비사령관 이태신을 비롯한 진압군 사이, 일촉즉발의 9시간이 흘러가는데… 목숨을 건 두 세력의 팽팽한 대립 오늘 밤, 대한민국 수도에서 가장 치열한 전쟁이 펼쳐진다!'
  },
  {
    id : 16,
    mImg : movie23_2,
    mAge : watchingAll,
    mTitle : '그대들은 어떻게 살 것인가',
    mTime : '124분',
    mRating : '6.96',
    mYear : '2023년',
    director : '미야자키 하야오',
    actor : '산토키 소마, 스다 마사키, 시바사키 코우, 아이묭, 기무라 요시노, 기무라 타쿠야',
    summary : '화재로 어머니를 잃은 11살 소년 ‘마히토’는 아버지와 함께 어머니의 고향으로 간다. 어머니에 대한 그리움과 새로운 보금자리에 적응하느라 힘들어하던 ‘마히토’ 앞에 정체를 알 수 없는 왜가리 한 마리가 나타나고, 저택에서 일하는 일곱 할멈으로부터 왜가리가 살고 있는 탑에 대한 신비로운 이야기를 듣게 된다. 그러던 어느 날, ‘마히토’는 사라져버린 새엄마 ‘나츠코’를 찾기 위해 탑으로 들어가고, 왜가리가 안내하는 대로 이세계(異世界)의 문을 통과하는데…!'
  },
  {
    id : 17,
    mImg : movie23_3,
    mAge : watching15,
    mTitle : '범죄도시3',
    mTime : '105분',
    mRating : '7.70',
    mYear : '2023년',
    director : '이상용',
    actor : '마동석, 이준혁, 아오키 무네타카',
    summary : '대체불가 괴물형사 마석도, 서울 광수대로 발탁! 베트남 납치 살해범 검거 후 7년 뒤, ‘마석도’(마동석)는 새로운 팀원들과 함께 살인사건을 조사한다. 사건 조사 중, ‘마석도’는 신종 마약 사건이 연루되었음을 알게 되고 수사를 확대한다. 한편, 마약 사건의 배후인 ‘주성철’(이준혁)은 계속해서 판을 키워가고 약을 유통하던 일본 조직과 ‘리키’(아오키 무네타카)까지 한국에 들어오며 사건의 규모는 점점 더 커져가는데... 나쁜 놈들 잡는 데 이유 없고 제한 없다. 커진 판도 시원하게 싹 쓸어버린다!'
  },
  {
    id : 18,
    mImg : movie23_4,
    mAge : watching15,
    mTitle : '오펜하이머',
    mTime : '180분',
    mRating : '8.53',
    mYear : '2023년',
    director : '크리스토퍼 놀란',
    actor : '킬리언 머피, 에밀리 블런트, 맷 데이먼, 로버트 다우니 주니어, 플로렌스 퓨, 조쉬 하트넷, 케이시 애플렉',
    summary : '“나는 이제 죽음이요, 세상의 파괴자가 되었다.” 세상을 구하기 위해 세상을 파괴할 지도 모르는 선택을 해야 하는 천재 과학자의 핵개발 프로젝트.'
  },
  {
    id : 19,
    mImg : movie23_5,
    mAge : watchingAll,
    mTitle : '엘리멘탈',
    mTime : '109분',
    mRating : '8.93',
    mYear : '2023년',
    director : '피터 손',
    actor : ' 레아 루이스, 마무두 아티',
    summary : '불, 물, 공기, 흙 4개의 원소들이 살고 있는 ‘엘리멘트 시티’ 재치 있고 불처럼 열정 넘치는 ‘앰버’는 어느 날 우연히 유쾌하고 감성적이며 물 흐르듯 사는 ‘웨이드’를 만나 특별한 우정을 쌓으며, 지금껏 믿어온 모든 것들이 흔들리는 새로운 경험을 하게 되는데... 웰컴 투 ‘엘리멘트 시티’!'
  },
]

function App() {

  const [movieYear, setMovieYear] = useState('all');
  const [selectYear, setSelectYear] = useState('all');

  const clickYearBtn = (myearName) => {
      setSelectYear(myearName);
      setMovieYear(myearName);
  }

  return (
    <div className="App">
    <div className='Header'>
      <h2>연도별 Movie List</h2>
      <div className='years'>
        <button
          onClic={() => clickYearBtn('all')}
          className='active'
        >전체</button>
        <button
          onClick={() => clickYearBtn('2020년')}
          className='active'
        >2020년</button>
        <button
          onClick={() => clickYearBtn('2021년')}
          className='active'
        >2021년</button>
        <button
          onClick={() => clickYearBtn('2022년')}
          className='active'
        >2022년</button>
        <button
          onClick={() => clickYearBtn('2023년')}
          className='active'
        >2023년</button>
      </div>
    </div>
      <MovieList dummy={dummy} movieYear={movieYear} />
    </div>
  );
}

export default App;
