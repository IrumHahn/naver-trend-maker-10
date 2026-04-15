import type { TrendCategoryNode } from "@runacademy/shared";

export const STATIC_TREND_ROOT_CATEGORIES: TrendCategoryNode[] = [
  {
    cid: 50000000,
    name: "패션의류",
    fullPath: "패션의류",
    level: 1,
    leaf: false
  },
  {
    cid: 50000001,
    name: "패션잡화",
    fullPath: "패션잡화",
    level: 1,
    leaf: false
  },
  {
    cid: 50000002,
    name: "화장품/미용",
    fullPath: "화장품/미용",
    level: 1,
    leaf: false
  },
  {
    cid: 50000003,
    name: "디지털/가전",
    fullPath: "디지털/가전",
    level: 1,
    leaf: false
  },
  {
    cid: 50000004,
    name: "가구/인테리어",
    fullPath: "가구/인테리어",
    level: 1,
    leaf: false
  },
  {
    cid: 50000005,
    name: "출산/육아",
    fullPath: "출산/육아",
    level: 1,
    leaf: false
  },
  {
    cid: 50000006,
    name: "식품",
    fullPath: "식품",
    level: 1,
    leaf: false
  },
  {
    cid: 50000007,
    name: "스포츠/레저",
    fullPath: "스포츠/레저",
    level: 1,
    leaf: false
  },
  {
    cid: 50000008,
    name: "생활/건강",
    fullPath: "생활/건강",
    level: 1,
    leaf: false
  },
  {
    cid: 50000009,
    name: "여가/생활편의",
    fullPath: "여가/생활편의",
    level: 1,
    leaf: false
  },
  {
    cid: 50000010,
    name: "면세점",
    fullPath: "면세점",
    level: 1,
    leaf: false
  },
  {
    cid: 50005542,
    name: "도서",
    fullPath: "도서",
    level: 1,
    leaf: false
  }
];

const STATIC_TREND_CATEGORY_CHILDREN: Record<number, TrendCategoryNode[]> = {
  50000000: [
  {
    cid: 50000167,
    name: "여성의류",
    fullPath: "패션의류 > 여성의류",
    level: 2,
    leaf: false
  },
  {
    cid: 50000168,
    name: "여성언더웨어/잠옷",
    fullPath: "패션의류 > 여성언더웨어/잠옷",
    level: 2,
    leaf: false
  },
  {
    cid: 50000169,
    name: "남성의류",
    fullPath: "패션의류 > 남성의류",
    level: 2,
    leaf: false
  },
  {
    cid: 50000170,
    name: "남성언더웨어/잠옷",
    fullPath: "패션의류 > 남성언더웨어/잠옷",
    level: 2,
    leaf: false
  }
],
  50000001: [
  {
    cid: 50000173,
    name: "여성신발",
    fullPath: "패션잡화 > 여성신발",
    level: 2,
    leaf: false
  },
  {
    cid: 50000174,
    name: "남성신발",
    fullPath: "패션잡화 > 남성신발",
    level: 2,
    leaf: false
  },
  {
    cid: 50000175,
    name: "신발용품",
    fullPath: "패션잡화 > 신발용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000176,
    name: "여성가방",
    fullPath: "패션잡화 > 여성가방",
    level: 2,
    leaf: false
  },
  {
    cid: 50000177,
    name: "남성가방",
    fullPath: "패션잡화 > 남성가방",
    level: 2,
    leaf: false
  },
  {
    cid: 50000178,
    name: "여행용가방/소품",
    fullPath: "패션잡화 > 여행용가방/소품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000179,
    name: "지갑",
    fullPath: "패션잡화 > 지갑",
    level: 2,
    leaf: false
  },
  {
    cid: 50000180,
    name: "벨트",
    fullPath: "패션잡화 > 벨트",
    level: 2,
    leaf: false
  },
  {
    cid: 50000181,
    name: "모자",
    fullPath: "패션잡화 > 모자",
    level: 2,
    leaf: false
  },
  {
    cid: 50000182,
    name: "장갑",
    fullPath: "패션잡화 > 장갑",
    level: 2,
    leaf: false
  },
  {
    cid: 50000166,
    name: "양말",
    fullPath: "패션잡화 > 양말",
    level: 2,
    leaf: false
  },
  {
    cid: 50000183,
    name: "선글라스/안경테",
    fullPath: "패션잡화 > 선글라스/안경테",
    level: 2,
    leaf: false
  },
  {
    cid: 50000184,
    name: "헤어액세서리",
    fullPath: "패션잡화 > 헤어액세서리",
    level: 2,
    leaf: false
  },
  {
    cid: 50000185,
    name: "패션소품",
    fullPath: "패션잡화 > 패션소품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000186,
    name: "시계",
    fullPath: "패션잡화 > 시계",
    level: 2,
    leaf: false
  },
  {
    cid: 50000188,
    name: "순금",
    fullPath: "패션잡화 > 순금",
    level: 2,
    leaf: false
  },
  {
    cid: 50000189,
    name: "주얼리",
    fullPath: "패션잡화 > 주얼리",
    level: 2,
    leaf: false
  }
],
  50000002: [
  {
    cid: 50000190,
    name: "스킨케어",
    fullPath: "화장품/미용 > 스킨케어",
    level: 2,
    leaf: false
  },
  {
    cid: 50000194,
    name: "베이스메이크업",
    fullPath: "화장품/미용 > 베이스메이크업",
    level: 2,
    leaf: false
  },
  {
    cid: 50000195,
    name: "색조메이크업",
    fullPath: "화장품/미용 > 색조메이크업",
    level: 2,
    leaf: false
  },
  {
    cid: 50000192,
    name: "클렌징",
    fullPath: "화장품/미용 > 클렌징",
    level: 2,
    leaf: false
  },
  {
    cid: 50000193,
    name: "마스크/팩",
    fullPath: "화장품/미용 > 마스크/팩",
    level: 2,
    leaf: false
  },
  {
    cid: 50000191,
    name: "선케어",
    fullPath: "화장품/미용 > 선케어",
    level: 2,
    leaf: false
  },
  {
    cid: 50000202,
    name: "남성화장품",
    fullPath: "화장품/미용 > 남성화장품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000200,
    name: "향수",
    fullPath: "화장품/미용 > 향수",
    level: 2,
    leaf: false
  },
  {
    cid: 50000197,
    name: "바디케어",
    fullPath: "화장품/미용 > 바디케어",
    level: 2,
    leaf: false
  },
  {
    cid: 50000198,
    name: "헤어케어",
    fullPath: "화장품/미용 > 헤어케어",
    level: 2,
    leaf: false
  },
  {
    cid: 50000199,
    name: "헤어스타일링",
    fullPath: "화장품/미용 > 헤어스타일링",
    level: 2,
    leaf: false
  },
  {
    cid: 50000196,
    name: "네일케어",
    fullPath: "화장품/미용 > 네일케어",
    level: 2,
    leaf: false
  },
  {
    cid: 50000201,
    name: "뷰티소품",
    fullPath: "화장품/미용 > 뷰티소품",
    level: 2,
    leaf: false
  }
],
  50000003: [
  {
    cid: 50000151,
    name: "노트북",
    fullPath: "디지털/가전 > 노트북",
    level: 2,
    leaf: true
  },
  {
    cid: 50000091,
    name: "노트북액세서리",
    fullPath: "디지털/가전 > 노트북액세서리",
    level: 2,
    leaf: false
  },
  {
    cid: 50000205,
    name: "휴대폰액세서리",
    fullPath: "디지털/가전 > 휴대폰액세서리",
    level: 2,
    leaf: false
  },
  {
    cid: 50000089,
    name: "PC",
    fullPath: "디지털/가전 > PC",
    level: 2,
    leaf: false
  },
  {
    cid: 50000153,
    name: "모니터",
    fullPath: "디지털/가전 > 모니터",
    level: 2,
    leaf: true
  },
  {
    cid: 50000208,
    name: "영상가전",
    fullPath: "디지털/가전 > 영상가전",
    level: 2,
    leaf: false
  },
  {
    cid: 50000209,
    name: "음향가전",
    fullPath: "디지털/가전 > 음향가전",
    level: 2,
    leaf: false
  },
  {
    cid: 50000210,
    name: "생활가전",
    fullPath: "디지털/가전 > 생활가전",
    level: 2,
    leaf: false
  },
  {
    cid: 50000211,
    name: "이미용가전",
    fullPath: "디지털/가전 > 이미용가전",
    level: 2,
    leaf: false
  },
  {
    cid: 50000206,
    name: "카메라/캠코더용품",
    fullPath: "디지털/가전 > 카메라/캠코더용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000213,
    name: "주방가전",
    fullPath: "디지털/가전 > 주방가전",
    level: 2,
    leaf: false
  },
  {
    cid: 50000214,
    name: "자동차기기",
    fullPath: "디지털/가전 > 자동차기기",
    level: 2,
    leaf: false
  },
  {
    cid: 50000212,
    name: "계절가전",
    fullPath: "디지털/가전 > 계절가전",
    level: 2,
    leaf: false
  },
  {
    cid: 50000204,
    name: "휴대폰",
    fullPath: "디지털/가전 > 휴대폰",
    level: 2,
    leaf: false
  },
  {
    cid: 50000087,
    name: "학습기기",
    fullPath: "디지털/가전 > 학습기기",
    level: 2,
    leaf: false
  },
  {
    cid: 50000088,
    name: "게임기/타이틀",
    fullPath: "디지털/가전 > 게임기/타이틀",
    level: 2,
    leaf: false
  },
  {
    cid: 50000090,
    name: "PC액세서리",
    fullPath: "디지털/가전 > PC액세서리",
    level: 2,
    leaf: false
  },
  {
    cid: 50000152,
    name: "태블릿PC",
    fullPath: "디지털/가전 > 태블릿PC",
    level: 2,
    leaf: true
  },
  {
    cid: 50000092,
    name: "태블릿PC액세서리",
    fullPath: "디지털/가전 > 태블릿PC액세서리",
    level: 2,
    leaf: false
  },
  {
    cid: 50000093,
    name: "모니터주변기기",
    fullPath: "디지털/가전 > 모니터주변기기",
    level: 2,
    leaf: false
  },
  {
    cid: 50000094,
    name: "주변기기",
    fullPath: "디지털/가전 > 주변기기",
    level: 2,
    leaf: false
  },
  {
    cid: 50000095,
    name: "멀티미디어장비",
    fullPath: "디지털/가전 > 멀티미디어장비",
    level: 2,
    leaf: false
  },
  {
    cid: 50000096,
    name: "저장장치",
    fullPath: "디지털/가전 > 저장장치",
    level: 2,
    leaf: false
  },
  {
    cid: 50000097,
    name: "PC부품",
    fullPath: "디지털/가전 > PC부품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000098,
    name: "네트워크장비",
    fullPath: "디지털/가전 > 네트워크장비",
    level: 2,
    leaf: false
  },
  {
    cid: 50000099,
    name: "소프트웨어",
    fullPath: "디지털/가전 > 소프트웨어",
    level: 2,
    leaf: false
  },
  {
    cid: 50000207,
    name: "광학기기/용품",
    fullPath: "디지털/가전 > 광학기기/용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50015460,
    name: "청소기",
    fullPath: "디지털/가전 > 청소기",
    level: 2,
    leaf: false
  }
],
  50000004: [
  {
    cid: 50000100,
    name: "침실가구",
    fullPath: "가구/인테리어 > 침실가구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000101,
    name: "거실가구",
    fullPath: "가구/인테리어 > 거실가구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000102,
    name: "주방가구",
    fullPath: "가구/인테리어 > 주방가구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000103,
    name: "수납가구",
    fullPath: "가구/인테리어 > 수납가구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000104,
    name: "아동/주니어가구",
    fullPath: "가구/인테리어 > 아동/주니어가구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000105,
    name: "서재/사무용가구",
    fullPath: "가구/인테리어 > 서재/사무용가구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000106,
    name: "아웃도어가구",
    fullPath: "가구/인테리어 > 아웃도어가구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000107,
    name: "DIY자재/용품",
    fullPath: "가구/인테리어 > DIY자재/용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000108,
    name: "인테리어소품",
    fullPath: "가구/인테리어 > 인테리어소품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000109,
    name: "침구단품",
    fullPath: "가구/인테리어 > 침구단품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000110,
    name: "침구세트",
    fullPath: "가구/인테리어 > 침구세트",
    level: 2,
    leaf: false
  },
  {
    cid: 50000111,
    name: "솜류",
    fullPath: "가구/인테리어 > 솜류",
    level: 2,
    leaf: false
  },
  {
    cid: 50000112,
    name: "카페트/러그",
    fullPath: "가구/인테리어 > 카페트/러그",
    level: 2,
    leaf: false
  },
  {
    cid: 50000113,
    name: "커튼/블라인드",
    fullPath: "가구/인테리어 > 커튼/블라인드",
    level: 2,
    leaf: false
  },
  {
    cid: 50000154,
    name: "홈데코",
    fullPath: "가구/인테리어 > 홈데코",
    level: 2,
    leaf: false
  },
  {
    cid: 50000114,
    name: "수예",
    fullPath: "가구/인테리어 > 수예",
    level: 2,
    leaf: false
  },
  {
    cid: 50016860,
    name: "베개",
    fullPath: "가구/인테리어 > 베개",
    level: 2,
    leaf: false
  }
],
  50000005: [
  {
    cid: 50000115,
    name: "분유",
    fullPath: "출산/육아 > 분유",
    level: 2,
    leaf: false
  },
  {
    cid: 50000116,
    name: "기저귀",
    fullPath: "출산/육아 > 기저귀",
    level: 2,
    leaf: false
  },
  {
    cid: 50000117,
    name: "물티슈",
    fullPath: "출산/육아 > 물티슈",
    level: 2,
    leaf: false
  },
  {
    cid: 50000118,
    name: "이유식",
    fullPath: "출산/육아 > 이유식",
    level: 2,
    leaf: false
  },
  {
    cid: 50000119,
    name: "아기간식",
    fullPath: "출산/육아 > 아기간식",
    level: 2,
    leaf: false
  },
  {
    cid: 50000120,
    name: "수유용품",
    fullPath: "출산/육아 > 수유용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000121,
    name: "유모차",
    fullPath: "출산/육아 > 유모차",
    level: 2,
    leaf: false
  },
  {
    cid: 50000122,
    name: "카시트",
    fullPath: "출산/육아 > 카시트",
    level: 2,
    leaf: false
  },
  {
    cid: 50000123,
    name: "외출용품",
    fullPath: "출산/육아 > 외출용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000124,
    name: "목욕용품",
    fullPath: "출산/육아 > 목욕용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000125,
    name: "스킨/바디용품",
    fullPath: "출산/육아 > 스킨/바디용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000126,
    name: "위생/건강용품",
    fullPath: "출산/육아 > 위생/건강용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000127,
    name: "구강청결용품",
    fullPath: "출산/육아 > 구강청결용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000128,
    name: "유아세제",
    fullPath: "출산/육아 > 유아세제",
    level: 2,
    leaf: false
  },
  {
    cid: 50000129,
    name: "소독/살균용품",
    fullPath: "출산/육아 > 소독/살균용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000130,
    name: "매트/안전용품",
    fullPath: "출산/육아 > 매트/안전용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000131,
    name: "유아가구",
    fullPath: "출산/육아 > 유아가구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000132,
    name: "이유식용품",
    fullPath: "출산/육아 > 이유식용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000133,
    name: "임부복",
    fullPath: "출산/육아 > 임부복",
    level: 2,
    leaf: false
  },
  {
    cid: 50000134,
    name: "임산부용품",
    fullPath: "출산/육아 > 임산부용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000135,
    name: "유아침구",
    fullPath: "출산/육아 > 유아침구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000136,
    name: "출산/돌기념품",
    fullPath: "출산/육아 > 출산/돌기념품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000137,
    name: "신생아의류",
    fullPath: "출산/육아 > 신생아의류",
    level: 2,
    leaf: false
  },
  {
    cid: 50000138,
    name: "유아동의류",
    fullPath: "출산/육아 > 유아동의류",
    level: 2,
    leaf: false
  },
  {
    cid: 50007135,
    name: "유아동언더웨어/잠옷",
    fullPath: "출산/육아 > 유아동언더웨어/잠옷",
    level: 2,
    leaf: false
  },
  {
    cid: 50000139,
    name: "유아동잡화",
    fullPath: "출산/육아 > 유아동잡화",
    level: 2,
    leaf: false
  },
  {
    cid: 50000140,
    name: "수영복/용품",
    fullPath: "출산/육아 > 수영복/용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50007127,
    name: "유아동 주얼리",
    fullPath: "출산/육아 > 유아동 주얼리",
    level: 2,
    leaf: false
  },
  {
    cid: 50000141,
    name: "유아발육용품",
    fullPath: "출산/육아 > 유아발육용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000142,
    name: "완구/인형",
    fullPath: "출산/육아 > 완구/인형",
    level: 2,
    leaf: false
  },
  {
    cid: 50000144,
    name: "교구",
    fullPath: "출산/육아 > 교구",
    level: 2,
    leaf: false
  }
],
  50000006: [
  {
    cid: 50000145,
    name: "축산물",
    fullPath: "식품 > 축산물",
    level: 2,
    leaf: false
  },
  {
    cid: 50000159,
    name: "수산물",
    fullPath: "식품 > 수산물",
    level: 2,
    leaf: false
  },
  {
    cid: 50000160,
    name: "농산물",
    fullPath: "식품 > 농산물",
    level: 2,
    leaf: false
  },
  {
    cid: 50000146,
    name: "반찬",
    fullPath: "식품 > 반찬",
    level: 2,
    leaf: false
  },
  {
    cid: 50000147,
    name: "김치",
    fullPath: "식품 > 김치",
    level: 2,
    leaf: false
  },
  {
    cid: 50000148,
    name: "음료",
    fullPath: "식품 > 음료",
    level: 2,
    leaf: false
  },
  {
    cid: 50000149,
    name: "과자/베이커리",
    fullPath: "식품 > 과자/베이커리",
    level: 2,
    leaf: false
  },
  {
    cid: 50000150,
    name: "유가공품",
    fullPath: "식품 > 유가공품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000026,
    name: "냉동/간편조리식품",
    fullPath: "식품 > 냉동/간편조리식품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000023,
    name: "건강식품",
    fullPath: "식품 > 건강식품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000024,
    name: "다이어트식품",
    fullPath: "식품 > 다이어트식품",
    level: 2,
    leaf: false
  },
  {
    cid: 50011940,
    name: "통조림/캔",
    fullPath: "식품 > 통조림/캔",
    level: 2,
    leaf: false
  },
  {
    cid: 50012460,
    name: "제과/제빵재료",
    fullPath: "식품 > 제과/제빵재료",
    level: 2,
    leaf: false
  },
  {
    cid: 50012520,
    name: "조미료",
    fullPath: "식품 > 조미료",
    level: 2,
    leaf: false
  },
  {
    cid: 50012620,
    name: "식용유/오일",
    fullPath: "식품 > 식용유/오일",
    level: 2,
    leaf: false
  },
  {
    cid: 50012782,
    name: "소스/드레싱",
    fullPath: "식품 > 소스/드레싱",
    level: 2,
    leaf: false
  },
  {
    cid: 50013360,
    name: "가루/분말류",
    fullPath: "식품 > 가루/분말류",
    level: 2,
    leaf: false
  },
  {
    cid: 50013520,
    name: "잼/시럽",
    fullPath: "식품 > 잼/시럽",
    level: 2,
    leaf: false
  },
  {
    cid: 50013960,
    name: "라면/면류",
    fullPath: "식품 > 라면/면류",
    level: 2,
    leaf: false
  },
  {
    cid: 50013881,
    name: "장류",
    fullPath: "식품 > 장류",
    level: 2,
    leaf: false
  },
  {
    cid: 50014240,
    name: "밀키트",
    fullPath: "식품 > 밀키트",
    level: 2,
    leaf: false
  },
  {
    cid: 50014520,
    name: "주류",
    fullPath: "식품 > 주류",
    level: 2,
    leaf: false
  },
  {
    cid: 50019139,
    name: "떡류",
    fullPath: "식품 > 떡류",
    level: 2,
    leaf: false
  },
  {
    cid: 50020779,
    name: "즉석밥/즉석국",
    fullPath: "식품 > 즉석밥/즉석국",
    level: 2,
    leaf: false
  }
],
  50000007: [
  {
    cid: 50000027,
    name: "등산",
    fullPath: "스포츠/레저 > 등산",
    level: 2,
    leaf: false
  },
  {
    cid: 50000028,
    name: "캠핑",
    fullPath: "스포츠/레저 > 캠핑",
    level: 2,
    leaf: false
  },
  {
    cid: 50000029,
    name: "골프",
    fullPath: "스포츠/레저 > 골프",
    level: 2,
    leaf: false
  },
  {
    cid: 50000161,
    name: "자전거",
    fullPath: "스포츠/레저 > 자전거",
    level: 2,
    leaf: false
  },
  {
    cid: 50000162,
    name: "스키/보드",
    fullPath: "스포츠/레저 > 스키/보드",
    level: 2,
    leaf: false
  },
  {
    cid: 50000163,
    name: "낚시",
    fullPath: "스포츠/레저 > 낚시",
    level: 2,
    leaf: false
  },
  {
    cid: 50000164,
    name: "수영",
    fullPath: "스포츠/레저 > 수영",
    level: 2,
    leaf: false
  },
  {
    cid: 50000030,
    name: "헬스",
    fullPath: "스포츠/레저 > 헬스",
    level: 2,
    leaf: false
  },
  {
    cid: 50000031,
    name: "요가/필라테스",
    fullPath: "스포츠/레저 > 요가/필라테스",
    level: 2,
    leaf: false
  },
  {
    cid: 50000034,
    name: "스케이트/보드/롤러",
    fullPath: "스포츠/레저 > 스케이트/보드/롤러",
    level: 2,
    leaf: false
  },
  {
    cid: 50000035,
    name: "오토바이/스쿠터",
    fullPath: "스포츠/레저 > 오토바이/스쿠터",
    level: 2,
    leaf: false
  },
  {
    cid: 50000036,
    name: "축구",
    fullPath: "스포츠/레저 > 축구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000037,
    name: "야구",
    fullPath: "스포츠/레저 > 야구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000038,
    name: "농구",
    fullPath: "스포츠/레저 > 농구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000039,
    name: "배구",
    fullPath: "스포츠/레저 > 배구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000040,
    name: "탁구",
    fullPath: "스포츠/레저 > 탁구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000041,
    name: "배드민턴",
    fullPath: "스포츠/레저 > 배드민턴",
    level: 2,
    leaf: false
  },
  {
    cid: 50000042,
    name: "테니스",
    fullPath: "스포츠/레저 > 테니스",
    level: 2,
    leaf: false
  },
  {
    cid: 50000043,
    name: "스쿼시",
    fullPath: "스포츠/레저 > 스쿼시",
    level: 2,
    leaf: false
  },
  {
    cid: 50000044,
    name: "족구",
    fullPath: "스포츠/레저 > 족구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000045,
    name: "볼링",
    fullPath: "스포츠/레저 > 볼링",
    level: 2,
    leaf: false
  },
  {
    cid: 50000046,
    name: "스킨스쿠버",
    fullPath: "스포츠/레저 > 스킨스쿠버",
    level: 2,
    leaf: false
  },
  {
    cid: 50000047,
    name: "검도",
    fullPath: "스포츠/레저 > 검도",
    level: 2,
    leaf: false
  },
  {
    cid: 50000048,
    name: "댄스",
    fullPath: "스포츠/레저 > 댄스",
    level: 2,
    leaf: false
  },
  {
    cid: 50000049,
    name: "권투",
    fullPath: "스포츠/레저 > 권투",
    level: 2,
    leaf: false
  },
  {
    cid: 50000050,
    name: "보호용품",
    fullPath: "스포츠/레저 > 보호용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000051,
    name: "무술용품",
    fullPath: "스포츠/레저 > 무술용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000052,
    name: "수련용품",
    fullPath: "스포츠/레저 > 수련용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000053,
    name: "스포츠액세서리",
    fullPath: "스포츠/레저 > 스포츠액세서리",
    level: 2,
    leaf: false
  },
  {
    cid: 50019439,
    name: "러닝용품",
    fullPath: "스포츠/레저 > 러닝용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000021,
    name: "당구용품",
    fullPath: "스포츠/레저 > 당구용품",
    level: 2,
    leaf: true
  },
  {
    cid: 50000022,
    name: "기타스포츠용품",
    fullPath: "스포츠/레저 > 기타스포츠용품",
    level: 2,
    leaf: true
  }
],
  50000008: [
  {
    cid: 50000165,
    name: "공구",
    fullPath: "생활/건강 > 공구",
    level: 2,
    leaf: false
  },
  {
    cid: 50000158,
    name: "문구/사무용품",
    fullPath: "생활/건강 > 문구/사무용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000054,
    name: "화방용품",
    fullPath: "생활/건강 > 화방용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000055,
    name: "자동차용품",
    fullPath: "생활/건강 > 자동차용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000056,
    name: "수집품",
    fullPath: "생활/건강 > 수집품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000057,
    name: "관상어용품",
    fullPath: "생활/건강 > 관상어용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000156,
    name: "악기",
    fullPath: "생활/건강 > 악기",
    level: 2,
    leaf: false
  },
  {
    cid: 50000155,
    name: "반려동물",
    fullPath: "생활/건강 > 반려동물",
    level: 2,
    leaf: false
  },
  {
    cid: 50000058,
    name: "음반",
    fullPath: "생활/건강 > 음반",
    level: 2,
    leaf: false
  },
  {
    cid: 50000059,
    name: "DVD",
    fullPath: "생활/건강 > DVD",
    level: 2,
    leaf: false
  },
  {
    cid: 50000060,
    name: "종교",
    fullPath: "생활/건강 > 종교",
    level: 2,
    leaf: false
  },
  {
    cid: 50000061,
    name: "주방용품",
    fullPath: "생활/건강 > 주방용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000062,
    name: "세탁용품",
    fullPath: "생활/건강 > 세탁용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000063,
    name: "건강측정용품",
    fullPath: "생활/건강 > 건강측정용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000064,
    name: "건강관리용품",
    fullPath: "생활/건강 > 건강관리용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000065,
    name: "당뇨관리용품",
    fullPath: "생활/건강 > 당뇨관리용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000066,
    name: "의료용품",
    fullPath: "생활/건강 > 의료용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000067,
    name: "실버용품",
    fullPath: "생활/건강 > 실버용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000068,
    name: "재활운동용품",
    fullPath: "생활/건강 > 재활운동용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000069,
    name: "물리치료/저주파용품",
    fullPath: "생활/건강 > 물리치료/저주파용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000070,
    name: "좌욕/좌훈용품",
    fullPath: "생활/건강 > 좌욕/좌훈용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000071,
    name: "냉온/찜질용품",
    fullPath: "생활/건강 > 냉온/찜질용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000072,
    name: "구강위생용품",
    fullPath: "생활/건강 > 구강위생용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000073,
    name: "눈건강용품",
    fullPath: "생활/건강 > 눈건강용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000074,
    name: "발건강용품",
    fullPath: "생활/건강 > 발건강용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000079,
    name: "원예/식물",
    fullPath: "생활/건강 > 원예/식물",
    level: 2,
    leaf: false
  },
  {
    cid: 50000080,
    name: "정원/원예용품",
    fullPath: "생활/건강 > 정원/원예용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000075,
    name: "안마용품",
    fullPath: "생활/건강 > 안마용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000081,
    name: "블루레이",
    fullPath: "생활/건강 > 블루레이",
    level: 2,
    leaf: false
  },
  {
    cid: 50000157,
    name: "욕실용품",
    fullPath: "생활/건강 > 욕실용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000076,
    name: "수납/정리용품",
    fullPath: "생활/건강 > 수납/정리용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000077,
    name: "청소용품",
    fullPath: "생활/건강 > 청소용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000078,
    name: "생활용품",
    fullPath: "생활/건강 > 생활용품",
    level: 2,
    leaf: false
  },
  {
    cid: 50018840,
    name: "자동차",
    fullPath: "생활/건강 > 자동차",
    level: 2,
    leaf: true
  }
],
  50000009: [
  {
    cid: 50007198,
    name: "원데이클래스",
    fullPath: "여가/생활편의 > 원데이클래스",
    level: 2,
    leaf: false
  },
  {
    cid: 50007252,
    name: "국내여행/체험",
    fullPath: "여가/생활편의 > 국내여행/체험",
    level: 2,
    leaf: false
  },
  {
    cid: 50007256,
    name: "해외여행",
    fullPath: "여가/생활편의 > 해외여행",
    level: 2,
    leaf: false
  },
  {
    cid: 50007261,
    name: "국내렌터카",
    fullPath: "여가/생활편의 > 국내렌터카",
    level: 2,
    leaf: false
  },
  {
    cid: 50007286,
    name: "생활편의",
    fullPath: "여가/생활편의 > 생활편의",
    level: 2,
    leaf: false
  },
  {
    cid: 50007319,
    name: "예체능레슨",
    fullPath: "여가/생활편의 > 예체능레슨",
    level: 2,
    leaf: false
  },
  {
    cid: 50007333,
    name: "자기계발/취미 레슨",
    fullPath: "여가/생활편의 > 자기계발/취미 레슨",
    level: 2,
    leaf: false
  },
  {
    cid: 50007342,
    name: "홈케어서비스",
    fullPath: "여가/생활편의 > 홈케어서비스",
    level: 2,
    leaf: false
  }
],
  50000010: [
  {
    cid: 50000013,
    name: "화장품",
    fullPath: "면세점 > 화장품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000014,
    name: "향수",
    fullPath: "면세점 > 향수",
    level: 2,
    leaf: false
  },
  {
    cid: 50000015,
    name: "시계/기프트",
    fullPath: "면세점 > 시계/기프트",
    level: 2,
    leaf: false
  },
  {
    cid: 50000016,
    name: "주얼리",
    fullPath: "면세점 > 주얼리",
    level: 2,
    leaf: false
  },
  {
    cid: 50000017,
    name: "패션/잡화",
    fullPath: "면세점 > 패션/잡화",
    level: 2,
    leaf: false
  },
  {
    cid: 50000018,
    name: "전자제품",
    fullPath: "면세점 > 전자제품",
    level: 2,
    leaf: false
  },
  {
    cid: 50000019,
    name: "식품/건강",
    fullPath: "면세점 > 식품/건강",
    level: 2,
    leaf: false
  }
],
  50000013: [
  {
    cid: 50000793,
    name: "스킨케어",
    fullPath: "면세점 > 화장품 > 스킨케어",
    level: 3,
    leaf: false
  },
  {
    cid: 50000794,
    name: "메이크업",
    fullPath: "면세점 > 화장품 > 메이크업",
    level: 3,
    leaf: false
  },
  {
    cid: 50001657,
    name: "클렌징",
    fullPath: "면세점 > 화장품 > 클렌징",
    level: 3,
    leaf: true
  },
  {
    cid: 50001658,
    name: "선케어",
    fullPath: "면세점 > 화장품 > 선케어",
    level: 3,
    leaf: true
  },
  {
    cid: 50001659,
    name: "바디케어",
    fullPath: "면세점 > 화장품 > 바디케어",
    level: 3,
    leaf: true
  },
  {
    cid: 50001660,
    name: "헤어케어",
    fullPath: "면세점 > 화장품 > 헤어케어",
    level: 3,
    leaf: true
  },
  {
    cid: 50001661,
    name: "남성화장품",
    fullPath: "면세점 > 화장품 > 남성화장품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001662,
    name: "아동화장품",
    fullPath: "면세점 > 화장품 > 아동화장품",
    level: 3,
    leaf: true
  }
],
  50000014: [
  {
    cid: 50001663,
    name: "여성향수",
    fullPath: "면세점 > 향수 > 여성향수",
    level: 3,
    leaf: true
  },
  {
    cid: 50001664,
    name: "남성향수",
    fullPath: "면세점 > 향수 > 남성향수",
    level: 3,
    leaf: true
  }
],
  50000015: [
  {
    cid: 50000795,
    name: "시계",
    fullPath: "면세점 > 시계/기프트 > 시계",
    level: 3,
    leaf: false
  },
  {
    cid: 50001667,
    name: "필기도구",
    fullPath: "면세점 > 시계/기프트 > 필기도구",
    level: 3,
    leaf: true
  },
  {
    cid: 50001668,
    name: "라이터",
    fullPath: "면세점 > 시계/기프트 > 라이터",
    level: 3,
    leaf: true
  },
  {
    cid: 50001670,
    name: "크리스탈",
    fullPath: "면세점 > 시계/기프트 > 크리스탈",
    level: 3,
    leaf: true
  },
  {
    cid: 50001671,
    name: "수첩/다이어리",
    fullPath: "면세점 > 시계/기프트 > 수첩/다이어리",
    level: 3,
    leaf: true
  },
  {
    cid: 50001672,
    name: "생활소품",
    fullPath: "면세점 > 시계/기프트 > 생활소품",
    level: 3,
    leaf: true
  }
],
  50000016: [
  {
    cid: 50001673,
    name: "귀걸이",
    fullPath: "면세점 > 주얼리 > 귀걸이",
    level: 3,
    leaf: true
  },
  {
    cid: 50001674,
    name: "목걸이",
    fullPath: "면세점 > 주얼리 > 목걸이",
    level: 3,
    leaf: true
  },
  {
    cid: 50001675,
    name: "반지",
    fullPath: "면세점 > 주얼리 > 반지",
    level: 3,
    leaf: true
  },
  {
    cid: 50001676,
    name: "펜던트",
    fullPath: "면세점 > 주얼리 > 펜던트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001677,
    name: "팔찌",
    fullPath: "면세점 > 주얼리 > 팔찌",
    level: 3,
    leaf: true
  },
  {
    cid: 50001678,
    name: "발찌",
    fullPath: "면세점 > 주얼리 > 발찌",
    level: 3,
    leaf: true
  },
  {
    cid: 50001679,
    name: "헤어",
    fullPath: "면세점 > 주얼리 > 헤어",
    level: 3,
    leaf: true
  },
  {
    cid: 50001680,
    name: "넥타이핀",
    fullPath: "면세점 > 주얼리 > 넥타이핀",
    level: 3,
    leaf: true
  },
  {
    cid: 50001681,
    name: "커프스",
    fullPath: "면세점 > 주얼리 > 커프스",
    level: 3,
    leaf: true
  },
  {
    cid: 50001682,
    name: "브로치",
    fullPath: "면세점 > 주얼리 > 브로치",
    level: 3,
    leaf: true
  },
  {
    cid: 50001683,
    name: "키홀더",
    fullPath: "면세점 > 주얼리 > 키홀더",
    level: 3,
    leaf: true
  },
  {
    cid: 50001684,
    name: "휴대폰줄",
    fullPath: "면세점 > 주얼리 > 휴대폰줄",
    level: 3,
    leaf: true
  },
  {
    cid: 50001685,
    name: "장식소품",
    fullPath: "면세점 > 주얼리 > 장식소품",
    level: 3,
    leaf: true
  }
],
  50000017: [
  {
    cid: 50000796,
    name: "가방",
    fullPath: "면세점 > 패션/잡화 > 가방",
    level: 3,
    leaf: false
  },
  {
    cid: 50000797,
    name: "지갑",
    fullPath: "면세점 > 패션/잡화 > 지갑",
    level: 3,
    leaf: false
  },
  {
    cid: 50001686,
    name: "벨트",
    fullPath: "면세점 > 패션/잡화 > 벨트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001687,
    name: "선글라스",
    fullPath: "면세점 > 패션/잡화 > 선글라스",
    level: 3,
    leaf: true
  },
  {
    cid: 50001688,
    name: "안경",
    fullPath: "면세점 > 패션/잡화 > 안경",
    level: 3,
    leaf: true
  },
  {
    cid: 50001561,
    name: "넥타이",
    fullPath: "면세점 > 패션/잡화 > 넥타이",
    level: 3,
    leaf: true
  },
  {
    cid: 50001562,
    name: "스카프/머플러",
    fullPath: "면세점 > 패션/잡화 > 스카프/머플러",
    level: 3,
    leaf: true
  },
  {
    cid: 50000798,
    name: "의류",
    fullPath: "면세점 > 패션/잡화 > 의류",
    level: 3,
    leaf: false
  },
  {
    cid: 50000799,
    name: "신발",
    fullPath: "면세점 > 패션/잡화 > 신발",
    level: 3,
    leaf: false
  },
  {
    cid: 50001563,
    name: "언더웨어",
    fullPath: "면세점 > 패션/잡화 > 언더웨어",
    level: 3,
    leaf: true
  },
  {
    cid: 50001564,
    name: "모자",
    fullPath: "면세점 > 패션/잡화 > 모자",
    level: 3,
    leaf: true
  },
  {
    cid: 50001565,
    name: "장갑",
    fullPath: "면세점 > 패션/잡화 > 장갑",
    level: 3,
    leaf: true
  },
  {
    cid: 50001566,
    name: "양말",
    fullPath: "면세점 > 패션/잡화 > 양말",
    level: 3,
    leaf: true
  },
  {
    cid: 50001567,
    name: "우산/양산",
    fullPath: "면세점 > 패션/잡화 > 우산/양산",
    level: 3,
    leaf: true
  },
  {
    cid: 50001568,
    name: "패션소품",
    fullPath: "면세점 > 패션/잡화 > 패션소품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001569,
    name: "여행소품",
    fullPath: "면세점 > 패션/잡화 > 여행소품",
    level: 3,
    leaf: true
  }
],
  50000018: [
  {
    cid: 50001570,
    name: "노트북/주변기기",
    fullPath: "면세점 > 전자제품 > 노트북/주변기기",
    level: 3,
    leaf: true
  },
  {
    cid: 50000800,
    name: "카메라/캠코더",
    fullPath: "면세점 > 전자제품 > 카메라/캠코더",
    level: 3,
    leaf: false
  },
  {
    cid: 50000801,
    name: "가전제품",
    fullPath: "면세점 > 전자제품 > 가전제품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000802,
    name: "MP3/이어폰/헤드폰",
    fullPath: "면세점 > 전자제품 > MP3/이어폰/헤드폰",
    level: 3,
    leaf: false
  },
  {
    cid: 50001611,
    name: "기타전자제품",
    fullPath: "면세점 > 전자제품 > 기타전자제품",
    level: 3,
    leaf: true
  }
],
  50000019: [
  {
    cid: 50001612,
    name: "건강식품",
    fullPath: "면세점 > 식품/건강 > 건강식품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001613,
    name: "홍삼/인삼",
    fullPath: "면세점 > 식품/건강 > 홍삼/인삼",
    level: 3,
    leaf: true
  },
  {
    cid: 50001614,
    name: "기호식품",
    fullPath: "면세점 > 식품/건강 > 기호식품",
    level: 3,
    leaf: true
  }
],
  50000023: [
  {
    cid: 50001899,
    name: "건강환/정",
    fullPath: "식품 > 건강식품 > 건강환/정",
    level: 3,
    leaf: true
  },
  {
    cid: 50001090,
    name: "비타민제",
    fullPath: "식품 > 건강식품 > 비타민제",
    level: 3,
    leaf: false
  },
  {
    cid: 50001902,
    name: "인삼",
    fullPath: "식품 > 건강식품 > 인삼",
    level: 3,
    leaf: true
  },
  {
    cid: 50001091,
    name: "한방재료",
    fullPath: "식품 > 건강식품 > 한방재료",
    level: 3,
    leaf: false
  },
  {
    cid: 50001905,
    name: "꿀",
    fullPath: "식품 > 건강식품 > 꿀",
    level: 3,
    leaf: true
  },
  {
    cid: 50001092,
    name: "영양제",
    fullPath: "식품 > 건강식품 > 영양제",
    level: 3,
    leaf: false
  },
  {
    cid: 50007000,
    name: "건강즙/과일즙",
    fullPath: "식품 > 건강식품 > 건강즙/과일즙",
    level: 3,
    leaf: false
  },
  {
    cid: 50012060,
    name: "홍삼",
    fullPath: "식품 > 건강식품 > 홍삼",
    level: 3,
    leaf: false
  },
  {
    cid: 50011861,
    name: "환자식/영양보충식",
    fullPath: "식품 > 건강식품 > 환자식/영양보충식",
    level: 3,
    leaf: true
  },
  {
    cid: 50017060,
    name: "로얄제리",
    fullPath: "식품 > 건강식품 > 로얄제리",
    level: 3,
    leaf: true
  },
  {
    cid: 50017080,
    name: "효모",
    fullPath: "식품 > 건강식품 > 효모",
    level: 3,
    leaf: true
  },
  {
    cid: 50016742,
    name: "숙취해소제",
    fullPath: "식품 > 건강식품 > 숙취해소제",
    level: 3,
    leaf: true
  },
  {
    cid: 50017220,
    name: "효소",
    fullPath: "식품 > 건강식품 > 효소",
    level: 3,
    leaf: true
  },
  {
    cid: 50018919,
    name: "건강분말",
    fullPath: "식품 > 건강식품 > 건강분말",
    level: 3,
    leaf: false
  }
],
  50000024: [
  {
    cid: 50001907,
    name: "다이어트차",
    fullPath: "식품 > 다이어트식품 > 다이어트차",
    level: 3,
    leaf: true
  },
  {
    cid: 50001911,
    name: "가르시니아",
    fullPath: "식품 > 다이어트식품 > 가르시니아",
    level: 3,
    leaf: true
  },
  {
    cid: 50001908,
    name: "식이섬유",
    fullPath: "식품 > 다이어트식품 > 식이섬유",
    level: 3,
    leaf: true
  },
  {
    cid: 50001912,
    name: "CLA",
    fullPath: "식품 > 다이어트식품 > CLA",
    level: 3,
    leaf: true
  },
  {
    cid: 50001767,
    name: "기타다이어트식품",
    fullPath: "식품 > 다이어트식품 > 기타다이어트식품",
    level: 3,
    leaf: true
  },
  {
    cid: 50007037,
    name: "콜라겐",
    fullPath: "식품 > 다이어트식품 > 콜라겐",
    level: 3,
    leaf: true
  },
  {
    cid: 50007038,
    name: "와일드망고",
    fullPath: "식품 > 다이어트식품 > 와일드망고",
    level: 3,
    leaf: true
  },
  {
    cid: 50007039,
    name: "잔티젠",
    fullPath: "식품 > 다이어트식품 > 잔티젠",
    level: 3,
    leaf: true
  },
  {
    cid: 50007040,
    name: "카테킨",
    fullPath: "식품 > 다이어트식품 > 카테킨",
    level: 3,
    leaf: true
  },
  {
    cid: 50007041,
    name: "히알루론산",
    fullPath: "식품 > 다이어트식품 > 히알루론산",
    level: 3,
    leaf: true
  },
  {
    cid: 50007219,
    name: "레몬밤",
    fullPath: "식품 > 다이어트식품 > 레몬밤",
    level: 3,
    leaf: true
  },
  {
    cid: 50012260,
    name: "단백질보충제",
    fullPath: "식품 > 다이어트식품 > 단백질보충제",
    level: 3,
    leaf: false
  },
  {
    cid: 50012301,
    name: "시서스",
    fullPath: "식품 > 다이어트식품 > 시서스",
    level: 3,
    leaf: true
  },
  {
    cid: 50012320,
    name: "시네트롤",
    fullPath: "식품 > 다이어트식품 > 시네트롤",
    level: 3,
    leaf: true
  },
  {
    cid: 50017201,
    name: "락토페린",
    fullPath: "식품 > 다이어트식품 > 락토페린",
    level: 3,
    leaf: true
  }
],
  50000026: [
  {
    cid: 50001867,
    name: "피자",
    fullPath: "식품 > 냉동/간편조리식품 > 피자",
    level: 3,
    leaf: true
  },
  {
    cid: 50001868,
    name: "핫도그",
    fullPath: "식품 > 냉동/간편조리식품 > 핫도그",
    level: 3,
    leaf: true
  },
  {
    cid: 50001869,
    name: "햄버거",
    fullPath: "식품 > 냉동/간편조리식품 > 햄버거",
    level: 3,
    leaf: true
  },
  {
    cid: 50001871,
    name: "만두/딤섬",
    fullPath: "식품 > 냉동/간편조리식품 > 만두/딤섬",
    level: 3,
    leaf: true
  },
  {
    cid: 50001873,
    name: "샐러드",
    fullPath: "식품 > 냉동/간편조리식품 > 샐러드",
    level: 3,
    leaf: true
  },
  {
    cid: 50001874,
    name: "어묵",
    fullPath: "식품 > 냉동/간편조리식품 > 어묵",
    level: 3,
    leaf: true
  },
  {
    cid: 50001877,
    name: "튀김류",
    fullPath: "식품 > 냉동/간편조리식품 > 튀김류",
    level: 3,
    leaf: true
  },
  {
    cid: 50006199,
    name: "도시락",
    fullPath: "식품 > 냉동/간편조리식품 > 도시락",
    level: 3,
    leaf: true
  },
  {
    cid: 50012340,
    name: "떡볶이",
    fullPath: "식품 > 냉동/간편조리식품 > 떡볶이",
    level: 3,
    leaf: true
  },
  {
    cid: 50012302,
    name: "카레/짜장",
    fullPath: "식품 > 냉동/간편조리식품 > 카레/짜장",
    level: 3,
    leaf: true
  },
  {
    cid: 50012360,
    name: "함박/미트볼",
    fullPath: "식품 > 냉동/간편조리식품 > 함박/미트볼",
    level: 3,
    leaf: true
  },
  {
    cid: 50012380,
    name: "맛살/게살",
    fullPath: "식품 > 냉동/간편조리식품 > 맛살/게살",
    level: 3,
    leaf: true
  },
  {
    cid: 50012400,
    name: "누룽지",
    fullPath: "식품 > 냉동/간편조리식품 > 누룽지",
    level: 3,
    leaf: true
  },
  {
    cid: 50012303,
    name: "스프",
    fullPath: "식품 > 냉동/간편조리식품 > 스프",
    level: 3,
    leaf: true
  },
  {
    cid: 50012440,
    name: "죽",
    fullPath: "식품 > 냉동/간편조리식품 > 죽",
    level: 3,
    leaf: true
  },
  {
    cid: 50017122,
    name: "라이스페이퍼",
    fullPath: "식품 > 냉동/간편조리식품 > 라이스페이퍼",
    level: 3,
    leaf: true
  },
  {
    cid: 50018480,
    name: "묵",
    fullPath: "식품 > 냉동/간편조리식품 > 묵",
    level: 3,
    leaf: true
  },
  {
    cid: 50018500,
    name: "동그랑땡/완자",
    fullPath: "식품 > 냉동/간편조리식품 > 동그랑땡/완자",
    level: 3,
    leaf: true
  },
  {
    cid: 50001878,
    name: "기타냉동/간편조리식품",
    fullPath: "식품 > 냉동/간편조리식품 > 기타냉동/간편조리식품",
    level: 3,
    leaf: true
  }
],
  50000027: [
  {
    cid: 50001768,
    name: "등산화",
    fullPath: "스포츠/레저 > 등산 > 등산화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001096,
    name: "등산의류",
    fullPath: "스포츠/레저 > 등산 > 등산의류",
    level: 3,
    leaf: false
  },
  {
    cid: 50001769,
    name: "등산가방",
    fullPath: "스포츠/레저 > 등산 > 등산가방",
    level: 3,
    leaf: true
  },
  {
    cid: 50001098,
    name: "등산장비",
    fullPath: "스포츠/레저 > 등산 > 등산장비",
    level: 3,
    leaf: false
  },
  {
    cid: 50001097,
    name: "등산잡화",
    fullPath: "스포츠/레저 > 등산 > 등산잡화",
    level: 3,
    leaf: false
  },
  {
    cid: 50001303,
    name: "기타등산장비",
    fullPath: "스포츠/레저 > 등산 > 기타등산장비",
    level: 3,
    leaf: true
  }
],
  50000028: [
  {
    cid: 50001099,
    name: "텐트",
    fullPath: "스포츠/레저 > 캠핑 > 텐트",
    level: 3,
    leaf: false
  },
  {
    cid: 50001770,
    name: "타프",
    fullPath: "스포츠/레저 > 캠핑 > 타프",
    level: 3,
    leaf: true
  },
  {
    cid: 50009360,
    name: "텐트/타프용품",
    fullPath: "스포츠/레저 > 캠핑 > 텐트/타프용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001771,
    name: "천막",
    fullPath: "스포츠/레저 > 캠핑 > 천막",
    level: 3,
    leaf: true
  },
  {
    cid: 50001775,
    name: "침낭",
    fullPath: "스포츠/레저 > 캠핑 > 침낭",
    level: 3,
    leaf: true
  },
  {
    cid: 50005341,
    name: "캠핑매트",
    fullPath: "스포츠/레저 > 캠핑 > 캠핑매트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001100,
    name: "랜턴",
    fullPath: "스포츠/레저 > 캠핑 > 랜턴",
    level: 3,
    leaf: false
  },
  {
    cid: 50001101,
    name: "취사용품",
    fullPath: "스포츠/레저 > 캠핑 > 취사용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50009500,
    name: "캠핑가구",
    fullPath: "스포츠/레저 > 캠핑 > 캠핑가구",
    level: 3,
    leaf: false
  },
  {
    cid: 50017740,
    name: "파워뱅크",
    fullPath: "스포츠/레저 > 캠핑 > 파워뱅크",
    level: 3,
    leaf: true
  },
  {
    cid: 50017720,
    name: "워터저그",
    fullPath: "스포츠/레저 > 캠핑 > 워터저그",
    level: 3,
    leaf: true
  },
  {
    cid: 50009182,
    name: "캠핑왜건",
    fullPath: "스포츠/레저 > 캠핑 > 캠핑왜건",
    level: 3,
    leaf: true
  },
  {
    cid: 50009740,
    name: "아이스박스",
    fullPath: "스포츠/레저 > 캠핑 > 아이스박스",
    level: 3,
    leaf: true
  },
  {
    cid: 50001304,
    name: "기타캠핑용품",
    fullPath: "스포츠/레저 > 캠핑 > 기타캠핑용품",
    level: 3,
    leaf: true
  }
],
  50000029: [
  {
    cid: 50001102,
    name: "골프클럽",
    fullPath: "스포츠/레저 > 골프 > 골프클럽",
    level: 3,
    leaf: false
  },
  {
    cid: 50001103,
    name: "골프백",
    fullPath: "스포츠/레저 > 골프 > 골프백",
    level: 3,
    leaf: false
  },
  {
    cid: 50001104,
    name: "골프의류",
    fullPath: "스포츠/레저 > 골프 > 골프의류",
    level: 3,
    leaf: false
  },
  {
    cid: 50001105,
    name: "골프잡화",
    fullPath: "스포츠/레저 > 골프 > 골프잡화",
    level: 3,
    leaf: false
  },
  {
    cid: 50001106,
    name: "골프연습용품",
    fullPath: "스포츠/레저 > 골프 > 골프연습용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001107,
    name: "골프필드용품",
    fullPath: "스포츠/레저 > 골프 > 골프필드용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001740,
    name: "골프화",
    fullPath: "스포츠/레저 > 골프 > 골프화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001741,
    name: "골프공",
    fullPath: "스포츠/레저 > 골프 > 골프공",
    level: 3,
    leaf: true
  },
  {
    cid: 50001742,
    name: "로스트볼",
    fullPath: "스포츠/레저 > 골프 > 로스트볼",
    level: 3,
    leaf: true
  },
  {
    cid: 50009260,
    name: "파크골프/그라운드골프",
    fullPath: "스포츠/레저 > 골프 > 파크골프/그라운드골프",
    level: 3,
    leaf: false
  }
],
  50000030: [
  {
    cid: 50017520,
    name: "러닝머신",
    fullPath: "스포츠/레저 > 헬스 > 러닝머신",
    level: 3,
    leaf: true
  },
  {
    cid: 50001003,
    name: "웨이트기구",
    fullPath: "스포츠/레저 > 헬스 > 웨이트기구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001004,
    name: "헬스소품",
    fullPath: "스포츠/레저 > 헬스 > 헬스소품",
    level: 3,
    leaf: false
  },
  {
    cid: 50020339,
    name: "복근운동기구",
    fullPath: "스포츠/레저 > 헬스 > 복근운동기구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001522,
    name: "진동운동기",
    fullPath: "스포츠/레저 > 헬스 > 진동운동기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001524,
    name: "거꾸리",
    fullPath: "스포츠/레저 > 헬스 > 거꾸리",
    level: 3,
    leaf: true
  },
  {
    cid: 50001525,
    name: "벨트마사지",
    fullPath: "스포츠/레저 > 헬스 > 벨트마사지",
    level: 3,
    leaf: true
  },
  {
    cid: 50001526,
    name: "승마운동기",
    fullPath: "스포츠/레저 > 헬스 > 승마운동기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001603,
    name: "헬스사이클",
    fullPath: "스포츠/레저 > 헬스 > 헬스사이클",
    level: 3,
    leaf: true
  },
  {
    cid: 50009321,
    name: "로잉머신",
    fullPath: "스포츠/레저 > 헬스 > 로잉머신",
    level: 3,
    leaf: true
  },
  {
    cid: 50001604,
    name: "아령",
    fullPath: "스포츠/레저 > 헬스 > 아령",
    level: 3,
    leaf: true
  },
  {
    cid: 50001605,
    name: "줄넘기",
    fullPath: "스포츠/레저 > 헬스 > 줄넘기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001606,
    name: "훌라후프",
    fullPath: "스포츠/레저 > 헬스 > 훌라후프",
    level: 3,
    leaf: true
  },
  {
    cid: 50001607,
    name: "일립티컬",
    fullPath: "스포츠/레저 > 헬스 > 일립티컬",
    level: 3,
    leaf: true
  },
  {
    cid: 50001608,
    name: "스텝퍼",
    fullPath: "스포츠/레저 > 헬스 > 스텝퍼",
    level: 3,
    leaf: true
  },
  {
    cid: 50001609,
    name: "트위스트",
    fullPath: "스포츠/레저 > 헬스 > 트위스트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001610,
    name: "트램펄린",
    fullPath: "스포츠/레저 > 헬스 > 트램펄린",
    level: 3,
    leaf: true
  },
  {
    cid: 50007245,
    name: "케틀벨",
    fullPath: "스포츠/레저 > 헬스 > 케틀벨",
    level: 3,
    leaf: true
  }
],
  50000031: [
  {
    cid: 50001005,
    name: "요가복",
    fullPath: "스포츠/레저 > 요가/필라테스 > 요가복",
    level: 3,
    leaf: false
  },
  {
    cid: 50001527,
    name: "요가매트",
    fullPath: "스포츠/레저 > 요가/필라테스 > 요가매트",
    level: 3,
    leaf: true
  },
  {
    cid: 50009481,
    name: "요가링/필라테스링",
    fullPath: "스포츠/레저 > 요가/필라테스 > 요가링/필라테스링",
    level: 3,
    leaf: true
  },
  {
    cid: 50001528,
    name: "기타요가용품",
    fullPath: "스포츠/레저 > 요가/필라테스 > 기타요가용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001529,
    name: "필라테스",
    fullPath: "스포츠/레저 > 요가/필라테스 > 필라테스",
    level: 3,
    leaf: true
  }
],
  50000034: [
  {
    cid: 50001538,
    name: "스케이트보드",
    fullPath: "스포츠/레저 > 스케이트/보드/롤러 > 스케이트보드",
    level: 3,
    leaf: true
  },
  {
    cid: 50001542,
    name: "아이스스케이트",
    fullPath: "스포츠/레저 > 스케이트/보드/롤러 > 아이스스케이트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001543,
    name: "롤러슈즈",
    fullPath: "스포츠/레저 > 스케이트/보드/롤러 > 롤러슈즈",
    level: 3,
    leaf: true
  },
  {
    cid: 50001544,
    name: "킥보드",
    fullPath: "스포츠/레저 > 스케이트/보드/롤러 > 킥보드",
    level: 3,
    leaf: true
  },
  {
    cid: 50001540,
    name: "스케이트보드용품",
    fullPath: "스포츠/레저 > 스케이트/보드/롤러 > 스케이트보드용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50005286,
    name: "핑거보드",
    fullPath: "스포츠/레저 > 스케이트/보드/롤러 > 핑거보드",
    level: 3,
    leaf: true
  },
  {
    cid: 50016261,
    name: "인라인스케이트",
    fullPath: "스포츠/레저 > 스케이트/보드/롤러 > 인라인스케이트",
    level: 3,
    leaf: true
  },
  {
    cid: 50017580,
    name: "인라인용품",
    fullPath: "스포츠/레저 > 스케이트/보드/롤러 > 인라인용품",
    level: 3,
    leaf: true
  }
],
  50000035: [
  {
    cid: 50001546,
    name: "오토바이",
    fullPath: "스포츠/레저 > 오토바이/스쿠터 > 오토바이",
    level: 3,
    leaf: true
  },
  {
    cid: 50001008,
    name: "오토바이용품",
    fullPath: "스포츠/레저 > 오토바이/스쿠터 > 오토바이용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001007,
    name: "오토바이부품",
    fullPath: "스포츠/레저 > 오토바이/스쿠터 > 오토바이부품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001009,
    name: "오토바이의류/잡화",
    fullPath: "스포츠/레저 > 오토바이/스쿠터 > 오토바이의류/잡화",
    level: 3,
    leaf: false
  },
  {
    cid: 50006189,
    name: "전동휠",
    fullPath: "스포츠/레저 > 오토바이/스쿠터 > 전동휠",
    level: 3,
    leaf: true
  },
  {
    cid: 50017600,
    name: "스쿠터",
    fullPath: "스포츠/레저 > 오토바이/스쿠터 > 스쿠터",
    level: 3,
    leaf: true
  }
],
  50000036: [
  {
    cid: 50001548,
    name: "축구화",
    fullPath: "스포츠/레저 > 축구 > 축구화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001549,
    name: "풋살화",
    fullPath: "스포츠/레저 > 축구 > 풋살화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001550,
    name: "축구공",
    fullPath: "스포츠/레저 > 축구 > 축구공",
    level: 3,
    leaf: true
  },
  {
    cid: 50001010,
    name: "축구가방",
    fullPath: "스포츠/레저 > 축구 > 축구가방",
    level: 3,
    leaf: false
  },
  {
    cid: 50001551,
    name: "축구장갑",
    fullPath: "스포츠/레저 > 축구 > 축구장갑",
    level: 3,
    leaf: true
  },
  {
    cid: 50001552,
    name: "축구보호대",
    fullPath: "스포츠/레저 > 축구 > 축구보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001553,
    name: "축구양말",
    fullPath: "스포츠/레저 > 축구 > 축구양말",
    level: 3,
    leaf: true
  },
  {
    cid: 50001554,
    name: "축구연습용품",
    fullPath: "스포츠/레저 > 축구 > 축구연습용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001555,
    name: "기타축구용품",
    fullPath: "스포츠/레저 > 축구 > 기타축구용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50020039,
    name: "축구의류",
    fullPath: "스포츠/레저 > 축구 > 축구의류",
    level: 3,
    leaf: false
  }
],
  50000037: [
  {
    cid: 50001180,
    name: "포수장비",
    fullPath: "스포츠/레저 > 야구 > 포수장비",
    level: 3,
    leaf: true
  },
  {
    cid: 50001433,
    name: "야구보호대",
    fullPath: "스포츠/레저 > 야구 > 야구보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001434,
    name: "야구공",
    fullPath: "스포츠/레저 > 야구 > 야구공",
    level: 3,
    leaf: true
  },
  {
    cid: 50001435,
    name: "야구양말",
    fullPath: "스포츠/레저 > 야구 > 야구양말",
    level: 3,
    leaf: true
  },
  {
    cid: 50001436,
    name: "야구가방",
    fullPath: "스포츠/레저 > 야구 > 야구가방",
    level: 3,
    leaf: true
  },
  {
    cid: 50001437,
    name: "기타야구용품",
    fullPath: "스포츠/레저 > 야구 > 기타야구용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001556,
    name: "글러브",
    fullPath: "스포츠/레저 > 야구 > 글러브",
    level: 3,
    leaf: true
  },
  {
    cid: 50001557,
    name: "헬멧",
    fullPath: "스포츠/레저 > 야구 > 헬멧",
    level: 3,
    leaf: true
  },
  {
    cid: 50001558,
    name: "야구화",
    fullPath: "스포츠/레저 > 야구 > 야구화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001559,
    name: "야구배트",
    fullPath: "스포츠/레저 > 야구 > 야구배트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001560,
    name: "야구장갑",
    fullPath: "스포츠/레저 > 야구 > 야구장갑",
    level: 3,
    leaf: true
  },
  {
    cid: 50020119,
    name: "야구의류",
    fullPath: "스포츠/레저 > 야구 > 야구의류",
    level: 3,
    leaf: false
  }
],
  50000038: [
  {
    cid: 50001438,
    name: "농구화",
    fullPath: "스포츠/레저 > 농구 > 농구화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001439,
    name: "농구대",
    fullPath: "스포츠/레저 > 농구 > 농구대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001440,
    name: "농구공",
    fullPath: "스포츠/레저 > 농구 > 농구공",
    level: 3,
    leaf: true
  },
  {
    cid: 50001441,
    name: "농구공가방",
    fullPath: "스포츠/레저 > 농구 > 농구공가방",
    level: 3,
    leaf: true
  },
  {
    cid: 50001442,
    name: "기타농구용품",
    fullPath: "스포츠/레저 > 농구 > 기타농구용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50020079,
    name: "농구의류",
    fullPath: "스포츠/레저 > 농구 > 농구의류",
    level: 3,
    leaf: false
  }
],
  50000039: [
  {
    cid: 50001443,
    name: "배구공",
    fullPath: "스포츠/레저 > 배구 > 배구공",
    level: 3,
    leaf: true
  },
  {
    cid: 50001444,
    name: "배구네트",
    fullPath: "스포츠/레저 > 배구 > 배구네트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001445,
    name: "배구화",
    fullPath: "스포츠/레저 > 배구 > 배구화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001447,
    name: "기타배구용품",
    fullPath: "스포츠/레저 > 배구 > 기타배구용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50005250,
    name: "배구의류",
    fullPath: "스포츠/레저 > 배구 > 배구의류",
    level: 3,
    leaf: true
  }
],
  50000040: [
  {
    cid: 50001448,
    name: "탁구라켓",
    fullPath: "스포츠/레저 > 탁구 > 탁구라켓",
    level: 3,
    leaf: true
  },
  {
    cid: 50001449,
    name: "탁구공",
    fullPath: "스포츠/레저 > 탁구 > 탁구공",
    level: 3,
    leaf: true
  },
  {
    cid: 50001450,
    name: "탁구대",
    fullPath: "스포츠/레저 > 탁구 > 탁구대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001451,
    name: "탁구화",
    fullPath: "스포츠/레저 > 탁구 > 탁구화",
    level: 3,
    leaf: true
  },
  {
    cid: 50005251,
    name: "탁구의류",
    fullPath: "스포츠/레저 > 탁구 > 탁구의류",
    level: 3,
    leaf: true
  },
  {
    cid: 50017661,
    name: "탁구러버",
    fullPath: "스포츠/레저 > 탁구 > 탁구러버",
    level: 3,
    leaf: true
  },
  {
    cid: 50001348,
    name: "기타탁구용품",
    fullPath: "스포츠/레저 > 탁구 > 기타탁구용품",
    level: 3,
    leaf: true
  }
],
  50000041: [
  {
    cid: 50001349,
    name: "배드민턴라켓",
    fullPath: "스포츠/레저 > 배드민턴 > 배드민턴라켓",
    level: 3,
    leaf: true
  },
  {
    cid: 50001350,
    name: "배드민턴화",
    fullPath: "스포츠/레저 > 배드민턴 > 배드민턴화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001351,
    name: "배드민턴가방",
    fullPath: "스포츠/레저 > 배드민턴 > 배드민턴가방",
    level: 3,
    leaf: true
  },
  {
    cid: 50001352,
    name: "셔틀콕",
    fullPath: "스포츠/레저 > 배드민턴 > 셔틀콕",
    level: 3,
    leaf: true
  },
  {
    cid: 50001353,
    name: "스트링",
    fullPath: "스포츠/레저 > 배드민턴 > 스트링",
    level: 3,
    leaf: true
  },
  {
    cid: 50001354,
    name: "그립",
    fullPath: "스포츠/레저 > 배드민턴 > 그립",
    level: 3,
    leaf: true
  },
  {
    cid: 50001355,
    name: "배드민턴네트",
    fullPath: "스포츠/레저 > 배드민턴 > 배드민턴네트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001356,
    name: "연습용품",
    fullPath: "스포츠/레저 > 배드민턴 > 연습용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001357,
    name: "기타배드민턴용품",
    fullPath: "스포츠/레저 > 배드민턴 > 기타배드민턴용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50005252,
    name: "배드민턴의류",
    fullPath: "스포츠/레저 > 배드민턴 > 배드민턴의류",
    level: 3,
    leaf: true
  }
],
  50000042: [
  {
    cid: 50001358,
    name: "테니스라켓",
    fullPath: "스포츠/레저 > 테니스 > 테니스라켓",
    level: 3,
    leaf: true
  },
  {
    cid: 50001359,
    name: "테니스화",
    fullPath: "스포츠/레저 > 테니스 > 테니스화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001360,
    name: "테니스공",
    fullPath: "스포츠/레저 > 테니스 > 테니스공",
    level: 3,
    leaf: true
  },
  {
    cid: 50001361,
    name: "테니스가방",
    fullPath: "스포츠/레저 > 테니스 > 테니스가방",
    level: 3,
    leaf: true
  },
  {
    cid: 50001362,
    name: "그립",
    fullPath: "스포츠/레저 > 테니스 > 그립",
    level: 3,
    leaf: true
  },
  {
    cid: 50001363,
    name: "스트링",
    fullPath: "스포츠/레저 > 테니스 > 스트링",
    level: 3,
    leaf: true
  },
  {
    cid: 50001364,
    name: "기타테니스용품",
    fullPath: "스포츠/레저 > 테니스 > 기타테니스용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50005253,
    name: "테니스의류",
    fullPath: "스포츠/레저 > 테니스 > 테니스의류",
    level: 3,
    leaf: true
  }
],
  50000043: [
  {
    cid: 50001365,
    name: "스쿼시라켓",
    fullPath: "스포츠/레저 > 스쿼시 > 스쿼시라켓",
    level: 3,
    leaf: true
  },
  {
    cid: 50001366,
    name: "스쿼시공",
    fullPath: "스포츠/레저 > 스쿼시 > 스쿼시공",
    level: 3,
    leaf: true
  },
  {
    cid: 50001368,
    name: "기타스쿼시용품",
    fullPath: "스포츠/레저 > 스쿼시 > 기타스쿼시용품",
    level: 3,
    leaf: true
  }
],
  50000044: [
  {
    cid: 50001241,
    name: "족구공",
    fullPath: "스포츠/레저 > 족구 > 족구공",
    level: 3,
    leaf: true
  },
  {
    cid: 50001242,
    name: "족구네트",
    fullPath: "스포츠/레저 > 족구 > 족구네트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001243,
    name: "족구의류",
    fullPath: "스포츠/레저 > 족구 > 족구의류",
    level: 3,
    leaf: true
  },
  {
    cid: 50001244,
    name: "족구화",
    fullPath: "스포츠/레저 > 족구 > 족구화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001246,
    name: "기타족구용품",
    fullPath: "스포츠/레저 > 족구 > 기타족구용품",
    level: 3,
    leaf: true
  }
],
  50000045: [
  {
    cid: 50001247,
    name: "볼링공",
    fullPath: "스포츠/레저 > 볼링 > 볼링공",
    level: 3,
    leaf: true
  },
  {
    cid: 50001248,
    name: "볼링용품",
    fullPath: "스포츠/레저 > 볼링 > 볼링용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001249,
    name: "볼링화",
    fullPath: "스포츠/레저 > 볼링 > 볼링화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001250,
    name: "아대",
    fullPath: "스포츠/레저 > 볼링 > 아대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001251,
    name: "볼링가방",
    fullPath: "스포츠/레저 > 볼링 > 볼링가방",
    level: 3,
    leaf: true
  },
  {
    cid: 50005254,
    name: "볼링의류",
    fullPath: "스포츠/레저 > 볼링 > 볼링의류",
    level: 3,
    leaf: true
  }
],
  50000046: [
  {
    cid: 50001252,
    name: "다이빙슈트",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 다이빙슈트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001253,
    name: "부력재킷",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 부력재킷",
    level: 3,
    leaf: true
  },
  {
    cid: 50001254,
    name: "부츠",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 부츠",
    level: 3,
    leaf: true
  },
  {
    cid: 50001255,
    name: "다이빙칼",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 다이빙칼",
    level: 3,
    leaf: true
  },
  {
    cid: 50001256,
    name: "글러브",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 글러브",
    level: 3,
    leaf: true
  },
  {
    cid: 50001257,
    name: "게이지",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 게이지",
    level: 3,
    leaf: true
  },
  {
    cid: 50001258,
    name: "기어백",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 기어백",
    level: 3,
    leaf: true
  },
  {
    cid: 50001259,
    name: "레귤레이터",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 레귤레이터",
    level: 3,
    leaf: true
  },
  {
    cid: 50001260,
    name: "리트렉터",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 리트렉터",
    level: 3,
    leaf: true
  },
  {
    cid: 50001261,
    name: "수중전등",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 수중전등",
    level: 3,
    leaf: true
  },
  {
    cid: 50001262,
    name: "수중총/작살",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 수중총/작살",
    level: 3,
    leaf: true
  },
  {
    cid: 50001264,
    name: "호스",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 호스",
    level: 3,
    leaf: true
  },
  {
    cid: 50001265,
    name: "납",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 납",
    level: 3,
    leaf: true
  },
  {
    cid: 50001266,
    name: "기타스킨스쿠버용품",
    fullPath: "스포츠/레저 > 스킨스쿠버 > 기타스킨스쿠버용품",
    level: 3,
    leaf: true
  }
],
  50000047: [
  {
    cid: 50001267,
    name: "죽도",
    fullPath: "스포츠/레저 > 검도 > 죽도",
    level: 3,
    leaf: true
  },
  {
    cid: 50001268,
    name: "죽도집/부속품",
    fullPath: "스포츠/레저 > 검도 > 죽도집/부속품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001269,
    name: "타격대",
    fullPath: "스포츠/레저 > 검도 > 타격대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001270,
    name: "도복",
    fullPath: "스포츠/레저 > 검도 > 도복",
    level: 3,
    leaf: true
  },
  {
    cid: 50001276,
    name: "기타검도용품",
    fullPath: "스포츠/레저 > 검도 > 기타검도용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50006844,
    name: "검도보호용품",
    fullPath: "스포츠/레저 > 검도 > 검도보호용품",
    level: 3,
    leaf: true
  }
],
  50000048: [
  {
    cid: 50001278,
    name: "댄스소품",
    fullPath: "스포츠/레저 > 댄스 > 댄스소품",
    level: 3,
    leaf: true
  },
  {
    cid: 50005461,
    name: "댄스복",
    fullPath: "스포츠/레저 > 댄스 > 댄스복",
    level: 3,
    leaf: true
  }
],
  50000049: [
  {
    cid: 50001279,
    name: "글러브",
    fullPath: "스포츠/레저 > 권투 > 글러브",
    level: 3,
    leaf: true
  },
  {
    cid: 50001280,
    name: "미트",
    fullPath: "스포츠/레저 > 권투 > 미트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001281,
    name: "샌드백",
    fullPath: "스포츠/레저 > 권투 > 샌드백",
    level: 3,
    leaf: true
  },
  {
    cid: 50007149,
    name: "핸드랩",
    fullPath: "스포츠/레저 > 권투 > 핸드랩",
    level: 3,
    leaf: true
  }
],
  50000050: [
  {
    cid: 50001282,
    name: "마우스피스",
    fullPath: "스포츠/레저 > 보호용품 > 마우스피스",
    level: 3,
    leaf: true
  },
  {
    cid: 50001283,
    name: "머리보호대",
    fullPath: "스포츠/레저 > 보호용품 > 머리보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001284,
    name: "급소보호대",
    fullPath: "스포츠/레저 > 보호용품 > 급소보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001285,
    name: "몸통보호대",
    fullPath: "스포츠/레저 > 보호용품 > 몸통보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001286,
    name: "배보호대",
    fullPath: "스포츠/레저 > 보호용품 > 배보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001287,
    name: "팔보호대",
    fullPath: "스포츠/레저 > 보호용품 > 팔보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50007238,
    name: "테이핑요법",
    fullPath: "스포츠/레저 > 보호용품 > 테이핑요법",
    level: 3,
    leaf: true
  },
  {
    cid: 50007239,
    name: "손목보호대",
    fullPath: "스포츠/레저 > 보호용품 > 손목보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50007240,
    name: "다리보호대",
    fullPath: "스포츠/레저 > 보호용품 > 다리보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50007241,
    name: "무릎보호대",
    fullPath: "스포츠/레저 > 보호용품 > 무릎보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50007242,
    name: "발목보호대",
    fullPath: "스포츠/레저 > 보호용품 > 발목보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50007243,
    name: "허리보호대",
    fullPath: "스포츠/레저 > 보호용품 > 허리보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50007244,
    name: "어깨보호대",
    fullPath: "스포츠/레저 > 보호용품 > 어깨보호대",
    level: 3,
    leaf: true
  }
],
  50000051: [
  {
    cid: 50001288,
    name: "목검/가검",
    fullPath: "스포츠/레저 > 무술용품 > 목검/가검",
    level: 3,
    leaf: true
  },
  {
    cid: 50001289,
    name: "봉/곤/창",
    fullPath: "스포츠/레저 > 무술용품 > 봉/곤/창",
    level: 3,
    leaf: true
  },
  {
    cid: 50001290,
    name: "기타무술용품",
    fullPath: "스포츠/레저 > 무술용품 > 기타무술용품",
    level: 3,
    leaf: true
  }
],
  50000052: [
  {
    cid: 50001291,
    name: "무도복",
    fullPath: "스포츠/레저 > 수련용품 > 무도복",
    level: 3,
    leaf: true
  },
  {
    cid: 50001292,
    name: "수련화",
    fullPath: "스포츠/레저 > 수련용품 > 수련화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001293,
    name: "띠/벨트",
    fullPath: "스포츠/레저 > 수련용품 > 띠/벨트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001294,
    name: "격파용품",
    fullPath: "스포츠/레저 > 수련용품 > 격파용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001296,
    name: "기타수련용품",
    fullPath: "스포츠/레저 > 수련용품 > 기타수련용품",
    level: 3,
    leaf: true
  }
],
  50000053: [
  {
    cid: 50001297,
    name: "스포츠선글라스",
    fullPath: "스포츠/레저 > 스포츠액세서리 > 스포츠선글라스",
    level: 3,
    leaf: true
  },
  {
    cid: 50001301,
    name: "스포츠헤어밴드",
    fullPath: "스포츠/레저 > 스포츠액세서리 > 스포츠헤어밴드",
    level: 3,
    leaf: true
  },
  {
    cid: 50001302,
    name: "스포츠토시",
    fullPath: "스포츠/레저 > 스포츠액세서리 > 스포츠토시",
    level: 3,
    leaf: true
  },
  {
    cid: 50006374,
    name: "스포츠마스크",
    fullPath: "스포츠/레저 > 스포츠액세서리 > 스포츠마스크",
    level: 3,
    leaf: true
  },
  {
    cid: 50006375,
    name: "스포츠넥워머",
    fullPath: "스포츠/레저 > 스포츠액세서리 > 스포츠넥워머",
    level: 3,
    leaf: true
  },
  {
    cid: 50006376,
    name: "아이스머플러/스카프",
    fullPath: "스포츠/레저 > 스포츠액세서리 > 아이스머플러/스카프",
    level: 3,
    leaf: true
  },
  {
    cid: 50005302,
    name: "볼캐리어",
    fullPath: "스포츠/레저 > 스포츠액세서리 > 볼캐리어",
    level: 3,
    leaf: true
  },
  {
    cid: 50001177,
    name: "스코어보드/작전판",
    fullPath: "스포츠/레저 > 스포츠액세서리 > 스코어보드/작전판",
    level: 3,
    leaf: true
  },
  {
    cid: 50001179,
    name: "호각/호루라기",
    fullPath: "스포츠/레저 > 스포츠액세서리 > 호각/호루라기",
    level: 3,
    leaf: true
  }
],
  50000054: [
  {
    cid: 50000636,
    name: "우드락/폼보드",
    fullPath: "생활/건강 > 화방용품 > 우드락/폼보드",
    level: 3,
    leaf: true
  },
  {
    cid: 50000923,
    name: "서예/동양화용품",
    fullPath: "생활/건강 > 화방용품 > 서예/동양화용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000924,
    name: "미술도구수납용품",
    fullPath: "생활/건강 > 화방용품 > 미술도구수납용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000925,
    name: "미술보조용품",
    fullPath: "생활/건강 > 화방용품 > 미술보조용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000926,
    name: "전문지류/미술지류",
    fullPath: "생활/건강 > 화방용품 > 전문지류/미술지류",
    level: 3,
    leaf: false
  },
  {
    cid: 50000927,
    name: "페인트/염료/잉크",
    fullPath: "생활/건강 > 화방용품 > 페인트/염료/잉크",
    level: 3,
    leaf: false
  },
  {
    cid: 50000928,
    name: "붓",
    fullPath: "생활/건강 > 화방용품 > 붓",
    level: 3,
    leaf: false
  },
  {
    cid: 50000929,
    name: "물감/포스터컬러",
    fullPath: "생활/건강 > 화방용품 > 물감/포스터컬러",
    level: 3,
    leaf: false
  },
  {
    cid: 50000930,
    name: "스케치/드로잉용품",
    fullPath: "생활/건강 > 화방용품 > 스케치/드로잉용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000931,
    name: "애니메이션용품",
    fullPath: "생활/건강 > 화방용품 > 애니메이션용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000932,
    name: "조소/판화용품",
    fullPath: "생활/건강 > 화방용품 > 조소/판화용품",
    level: 3,
    leaf: false
  }
],
  50000055: [
  {
    cid: 50000933,
    name: "DIY용품",
    fullPath: "생활/건강 > 자동차용품 > DIY용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000934,
    name: "램프",
    fullPath: "생활/건강 > 자동차용품 > 램프",
    level: 3,
    leaf: false
  },
  {
    cid: 50000936,
    name: "배터리용품",
    fullPath: "생활/건강 > 자동차용품 > 배터리용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000937,
    name: "공기청정용품",
    fullPath: "생활/건강 > 자동차용품 > 공기청정용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000938,
    name: "세차용품",
    fullPath: "생활/건강 > 자동차용품 > 세차용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000939,
    name: "키용품",
    fullPath: "생활/건강 > 자동차용품 > 키용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000940,
    name: "편의용품",
    fullPath: "생활/건강 > 자동차용품 > 편의용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000941,
    name: "오일/소모품",
    fullPath: "생활/건강 > 자동차용품 > 오일/소모품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000942,
    name: "익스테리어용품",
    fullPath: "생활/건강 > 자동차용품 > 익스테리어용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000943,
    name: "인테리어용품",
    fullPath: "생활/건강 > 자동차용품 > 인테리어용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000944,
    name: "전기용품",
    fullPath: "생활/건강 > 자동차용품 > 전기용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000945,
    name: "수납용품",
    fullPath: "생활/건강 > 자동차용품 > 수납용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000946,
    name: "휴대폰용품",
    fullPath: "생활/건강 > 자동차용품 > 휴대폰용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000947,
    name: "타이어/휠",
    fullPath: "생활/건강 > 자동차용품 > 타이어/휠",
    level: 3,
    leaf: false
  },
  {
    cid: 50000948,
    name: "튜닝용품",
    fullPath: "생활/건강 > 자동차용품 > 튜닝용품",
    level: 3,
    leaf: false
  }
],
  50000056: [
  {
    cid: 50000373,
    name: "서예/글씨",
    fullPath: "생활/건강 > 수집품 > 서예/글씨",
    level: 3,
    leaf: true
  },
  {
    cid: 50000374,
    name: "LP",
    fullPath: "생활/건강 > 수집품 > LP",
    level: 3,
    leaf: true
  },
  {
    cid: 50000375,
    name: "공예품",
    fullPath: "생활/건강 > 수집품 > 공예품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000376,
    name: "포스터",
    fullPath: "생활/건강 > 수집품 > 포스터",
    level: 3,
    leaf: true
  },
  {
    cid: 50000378,
    name: "이색수집품",
    fullPath: "생활/건강 > 수집품 > 이색수집품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000949,
    name: "게임",
    fullPath: "생활/건강 > 수집품 > 게임",
    level: 3,
    leaf: false
  },
  {
    cid: 50000950,
    name: "퍼즐/블록",
    fullPath: "생활/건강 > 수집품 > 퍼즐/블록",
    level: 3,
    leaf: false
  },
  {
    cid: 50000951,
    name: "모형/프라모델/피규어",
    fullPath: "생활/건강 > 수집품 > 모형/프라모델/피규어",
    level: 3,
    leaf: false
  },
  {
    cid: 50000952,
    name: "무선/RC",
    fullPath: "생활/건강 > 수집품 > 무선/RC",
    level: 3,
    leaf: false
  },
  {
    cid: 50000954,
    name: "서바이벌",
    fullPath: "생활/건강 > 수집품 > 서바이벌",
    level: 3,
    leaf: false
  },
  {
    cid: 50000955,
    name: "화폐",
    fullPath: "생활/건강 > 수집품 > 화폐",
    level: 3,
    leaf: false
  },
  {
    cid: 50000956,
    name: "우표/씰",
    fullPath: "생활/건강 > 수집품 > 우표/씰",
    level: 3,
    leaf: false
  },
  {
    cid: 50000958,
    name: "코스튬플레이",
    fullPath: "생활/건강 > 수집품 > 코스튬플레이",
    level: 3,
    leaf: false
  },
  {
    cid: 50007079,
    name: "아이돌굿즈",
    fullPath: "생활/건강 > 수집품 > 아이돌굿즈",
    level: 3,
    leaf: false
  }
],
  50000057: [
  {
    cid: 50000380,
    name: "사료",
    fullPath: "생활/건강 > 관상어용품 > 사료",
    level: 3,
    leaf: true
  },
  {
    cid: 50000381,
    name: "수조장식용품",
    fullPath: "생활/건강 > 관상어용품 > 수조장식용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000382,
    name: "수조청소용품",
    fullPath: "생활/건강 > 관상어용품 > 수조청소용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000383,
    name: "수족관/어항",
    fullPath: "생활/건강 > 관상어용품 > 수족관/어항",
    level: 3,
    leaf: true
  },
  {
    cid: 50000384,
    name: "수초",
    fullPath: "생활/건강 > 관상어용품 > 수초",
    level: 3,
    leaf: true
  },
  {
    cid: 50000385,
    name: "에어/기포",
    fullPath: "생활/건강 > 관상어용품 > 에어/기포",
    level: 3,
    leaf: true
  },
  {
    cid: 50000386,
    name: "모터",
    fullPath: "생활/건강 > 관상어용품 > 모터",
    level: 3,
    leaf: true
  },
  {
    cid: 50000387,
    name: "히터",
    fullPath: "생활/건강 > 관상어용품 > 히터",
    level: 3,
    leaf: true
  },
  {
    cid: 50000388,
    name: "조명",
    fullPath: "생활/건강 > 관상어용품 > 조명",
    level: 3,
    leaf: true
  },
  {
    cid: 50000389,
    name: "여과기/여과재",
    fullPath: "생활/건강 > 관상어용품 > 여과기/여과재",
    level: 3,
    leaf: true
  }
],
  50000058: [
  {
    cid: 50000234,
    name: "국내앨범",
    fullPath: "생활/건강 > 음반 > 국내앨범",
    level: 3,
    leaf: true
  },
  {
    cid: 50000235,
    name: "해외앨범",
    fullPath: "생활/건강 > 음반 > 해외앨범",
    level: 3,
    leaf: true
  }
],
  50000059: [
  {
    cid: 50000879,
    name: "영화",
    fullPath: "생활/건강 > DVD > 영화",
    level: 3,
    leaf: false
  },
  {
    cid: 50000880,
    name: "드라마",
    fullPath: "생활/건강 > DVD > 드라마",
    level: 3,
    leaf: false
  },
  {
    cid: 50000236,
    name: "애니메이션",
    fullPath: "생활/건강 > DVD > 애니메이션",
    level: 3,
    leaf: true
  },
  {
    cid: 50000237,
    name: "뮤직비디오",
    fullPath: "생활/건강 > DVD > 뮤직비디오",
    level: 3,
    leaf: true
  },
  {
    cid: 50000238,
    name: "취미/스포츠",
    fullPath: "생활/건강 > DVD > 취미/스포츠",
    level: 3,
    leaf: true
  },
  {
    cid: 50000240,
    name: "교육",
    fullPath: "생활/건강 > DVD > 교육",
    level: 3,
    leaf: true
  },
  {
    cid: 50000241,
    name: "교양/다큐멘터리",
    fullPath: "생활/건강 > DVD > 교양/다큐멘터리",
    level: 3,
    leaf: true
  },
  {
    cid: 50000242,
    name: "유아/어린이",
    fullPath: "생활/건강 > DVD > 유아/어린이",
    level: 3,
    leaf: true
  },
  {
    cid: 50000239,
    name: "종교",
    fullPath: "생활/건강 > DVD > 종교",
    level: 3,
    leaf: true
  }
],
  50000060: [
  {
    cid: 50000245,
    name: "기독교용품",
    fullPath: "생활/건강 > 종교 > 기독교용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000244,
    name: "천주교용품",
    fullPath: "생활/건강 > 종교 > 천주교용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000243,
    name: "불교용품",
    fullPath: "생활/건강 > 종교 > 불교용품",
    level: 3,
    leaf: true
  }
],
  50000061: [
  {
    cid: 50000216,
    name: "도마",
    fullPath: "생활/건강 > 주방용품 > 도마",
    level: 3,
    leaf: true
  },
  {
    cid: 50000881,
    name: "식기",
    fullPath: "생활/건강 > 주방용품 > 식기",
    level: 3,
    leaf: false
  },
  {
    cid: 50000882,
    name: "잔/컵",
    fullPath: "생활/건강 > 주방용품 > 잔/컵",
    level: 3,
    leaf: false
  },
  {
    cid: 50000883,
    name: "냄비/솥",
    fullPath: "생활/건강 > 주방용품 > 냄비/솥",
    level: 3,
    leaf: false
  },
  {
    cid: 50000884,
    name: "프라이팬",
    fullPath: "생활/건강 > 주방용품 > 프라이팬",
    level: 3,
    leaf: false
  },
  {
    cid: 50000885,
    name: "주전자/티포트",
    fullPath: "생활/건강 > 주방용품 > 주전자/티포트",
    level: 3,
    leaf: false
  },
  {
    cid: 50000886,
    name: "보관/밀폐용기",
    fullPath: "생활/건강 > 주방용품 > 보관/밀폐용기",
    level: 3,
    leaf: false
  },
  {
    cid: 50000887,
    name: "칼/커팅기구",
    fullPath: "생활/건강 > 주방용품 > 칼/커팅기구",
    level: 3,
    leaf: false
  },
  {
    cid: 50000888,
    name: "교자상/밥상",
    fullPath: "생활/건강 > 주방용품 > 교자상/밥상",
    level: 3,
    leaf: false
  },
  {
    cid: 50000889,
    name: "주방수납용품",
    fullPath: "생활/건강 > 주방용품 > 주방수납용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000890,
    name: "조리기구",
    fullPath: "생활/건강 > 주방용품 > 조리기구",
    level: 3,
    leaf: false
  },
  {
    cid: 50000891,
    name: "커피용품",
    fullPath: "생활/건강 > 주방용품 > 커피용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000892,
    name: "와인용품",
    fullPath: "생활/건강 > 주방용품 > 와인용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000893,
    name: "제과/제빵용품",
    fullPath: "생활/건강 > 주방용품 > 제과/제빵용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000894,
    name: "주방잡화",
    fullPath: "생활/건강 > 주방용품 > 주방잡화",
    level: 3,
    leaf: false
  },
  {
    cid: 50000895,
    name: "제수용품",
    fullPath: "생활/건강 > 주방용품 > 제수용품",
    level: 3,
    leaf: false
  }
],
  50000062: [
  {
    cid: 50000901,
    name: "빨래건조대",
    fullPath: "생활/건강 > 세탁용품 > 빨래건조대",
    level: 3,
    leaf: false
  },
  {
    cid: 50002034,
    name: "다림판",
    fullPath: "생활/건강 > 세탁용품 > 다림판",
    level: 3,
    leaf: true
  },
  {
    cid: 50002035,
    name: "다림풀",
    fullPath: "생활/건강 > 세탁용품 > 다림풀",
    level: 3,
    leaf: true
  },
  {
    cid: 50002036,
    name: "빨래바구니",
    fullPath: "생활/건강 > 세탁용품 > 빨래바구니",
    level: 3,
    leaf: true
  },
  {
    cid: 50002037,
    name: "빨래삶통",
    fullPath: "생활/건강 > 세탁용품 > 빨래삶통",
    level: 3,
    leaf: true
  },
  {
    cid: 50002038,
    name: "빨랫줄",
    fullPath: "생활/건강 > 세탁용품 > 빨랫줄",
    level: 3,
    leaf: true
  },
  {
    cid: 50002039,
    name: "빨래집게",
    fullPath: "생활/건강 > 세탁용품 > 빨래집게",
    level: 3,
    leaf: true
  },
  {
    cid: 50002040,
    name: "빨래판",
    fullPath: "생활/건강 > 세탁용품 > 빨래판",
    level: 3,
    leaf: true
  },
  {
    cid: 50002041,
    name: "세탁망",
    fullPath: "생활/건강 > 세탁용품 > 세탁망",
    level: 3,
    leaf: true
  },
  {
    cid: 50002042,
    name: "세탁볼",
    fullPath: "생활/건강 > 세탁용품 > 세탁볼",
    level: 3,
    leaf: true
  },
  {
    cid: 50002043,
    name: "세탁솔",
    fullPath: "생활/건강 > 세탁용품 > 세탁솔",
    level: 3,
    leaf: true
  },
  {
    cid: 50002044,
    name: "세탁잡화",
    fullPath: "생활/건강 > 세탁용품 > 세탁잡화",
    level: 3,
    leaf: true
  }
],
  50000063: [
  {
    cid: 50000902,
    name: "체중계",
    fullPath: "생활/건강 > 건강측정용품 > 체중계",
    level: 3,
    leaf: false
  },
  {
    cid: 50002045,
    name: "만보계",
    fullPath: "생활/건강 > 건강측정용품 > 만보계",
    level: 3,
    leaf: true
  },
  {
    cid: 50002046,
    name: "신장계",
    fullPath: "생활/건강 > 건강측정용품 > 신장계",
    level: 3,
    leaf: true
  },
  {
    cid: 50002047,
    name: "체온계",
    fullPath: "생활/건강 > 건강측정용품 > 체온계",
    level: 3,
    leaf: true
  },
  {
    cid: 50002049,
    name: "혈압계",
    fullPath: "생활/건강 > 건강측정용품 > 혈압계",
    level: 3,
    leaf: true
  },
  {
    cid: 50002050,
    name: "심박계",
    fullPath: "생활/건강 > 건강측정용품 > 심박계",
    level: 3,
    leaf: true
  },
  {
    cid: 50002051,
    name: "청진기",
    fullPath: "생활/건강 > 건강측정용품 > 청진기",
    level: 3,
    leaf: true
  }
],
  50000064: [
  {
    cid: 50002052,
    name: "건강목걸이",
    fullPath: "생활/건강 > 건강관리용품 > 건강목걸이",
    level: 3,
    leaf: true
  },
  {
    cid: 50002053,
    name: "건강팔찌",
    fullPath: "생활/건강 > 건강관리용품 > 건강팔찌",
    level: 3,
    leaf: true
  },
  {
    cid: 50002054,
    name: "금연용품",
    fullPath: "생활/건강 > 건강관리용품 > 금연용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50002055,
    name: "뜸/뜸기구",
    fullPath: "생활/건강 > 건강관리용품 > 뜸/뜸기구",
    level: 3,
    leaf: true
  },
  {
    cid: 50002056,
    name: "수지침",
    fullPath: "생활/건강 > 건강관리용품 > 수지침",
    level: 3,
    leaf: true
  },
  {
    cid: 50002057,
    name: "먼지차단마스크",
    fullPath: "생활/건강 > 건강관리용품 > 먼지차단마스크",
    level: 3,
    leaf: true
  },
  {
    cid: 50002058,
    name: "풋/레그패치",
    fullPath: "생활/건강 > 건강관리용품 > 풋/레그패치",
    level: 3,
    leaf: true
  },
  {
    cid: 50002059,
    name: "지압기",
    fullPath: "생활/건강 > 건강관리용품 > 지압기",
    level: 3,
    leaf: true
  },
  {
    cid: 50002060,
    name: "코건강용품",
    fullPath: "생활/건강 > 건강관리용품 > 코건강용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50002061,
    name: "코클리너",
    fullPath: "생활/건강 > 건강관리용품 > 코클리너",
    level: 3,
    leaf: true
  },
  {
    cid: 50002062,
    name: "파라핀용품",
    fullPath: "생활/건강 > 건강관리용품 > 파라핀용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50002063,
    name: "기타건강관리용품",
    fullPath: "생활/건강 > 건강관리용품 > 기타건강관리용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50006130,
    name: "전자담배",
    fullPath: "생활/건강 > 건강관리용품 > 전자담배",
    level: 3,
    leaf: true
  },
  {
    cid: 50006131,
    name: "전자담배 액세서리",
    fullPath: "생활/건강 > 건강관리용품 > 전자담배 액세서리",
    level: 3,
    leaf: true
  },
  {
    cid: 50006958,
    name: "소음방지귀마개",
    fullPath: "생활/건강 > 건강관리용품 > 소음방지귀마개",
    level: 3,
    leaf: true
  },
  {
    cid: 50009060,
    name: "위생마스크",
    fullPath: "생활/건강 > 건강관리용품 > 위생마스크",
    level: 3,
    leaf: true
  },
  {
    cid: 50009061,
    name: "마스크액세서리",
    fullPath: "생활/건강 > 건강관리용품 > 마스크액세서리",
    level: 3,
    leaf: true
  }
],
  50000065: [
  {
    cid: 50002064,
    name: "침/바늘",
    fullPath: "생활/건강 > 당뇨관리용품 > 침/바늘",
    level: 3,
    leaf: true
  },
  {
    cid: 50002065,
    name: "혈당측정지",
    fullPath: "생활/건강 > 당뇨관리용품 > 혈당측정지",
    level: 3,
    leaf: true
  },
  {
    cid: 50002066,
    name: "혈당계",
    fullPath: "생활/건강 > 당뇨관리용품 > 혈당계",
    level: 3,
    leaf: true
  }
],
  50000066: [
  {
    cid: 50002067,
    name: "거즈/붕대/솜류",
    fullPath: "생활/건강 > 의료용품 > 거즈/붕대/솜류",
    level: 3,
    leaf: true
  },
  {
    cid: 50002068,
    name: "구급/응급용품",
    fullPath: "생활/건강 > 의료용품 > 구급/응급용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50002069,
    name: "석션기/네블라이저",
    fullPath: "생활/건강 > 의료용품 > 석션기/네블라이저",
    level: 3,
    leaf: true
  },
  {
    cid: 50002070,
    name: "핀셋/포셉/겸자류",
    fullPath: "생활/건강 > 의료용품 > 핀셋/포셉/겸자류",
    level: 3,
    leaf: true
  },
  {
    cid: 50005258,
    name: "의료용가구",
    fullPath: "생활/건강 > 의료용품 > 의료용가구",
    level: 3,
    leaf: true
  }
],
  50000067: [
  {
    cid: 50000903,
    name: "휠체어",
    fullPath: "생활/건강 > 실버용품 > 휠체어",
    level: 3,
    leaf: false
  },
  {
    cid: 50001945,
    name: "보행보조용품",
    fullPath: "생활/건강 > 실버용품 > 보행보조용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001946,
    name: "보행차/실버카",
    fullPath: "생활/건강 > 실버용품 > 보행차/실버카",
    level: 3,
    leaf: true
  },
  {
    cid: 50001947,
    name: "목욕보조용품",
    fullPath: "생활/건강 > 실버용품 > 목욕보조용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001948,
    name: "배변보조용품",
    fullPath: "생활/건강 > 실버용품 > 배변보조용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001949,
    name: "욕창방지용품",
    fullPath: "생활/건강 > 실버용품 > 욕창방지용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001950,
    name: "장례용품/수의",
    fullPath: "생활/건강 > 실버용품 > 장례용품/수의",
    level: 3,
    leaf: true
  },
  {
    cid: 50002071,
    name: "돋보기",
    fullPath: "생활/건강 > 실버용품 > 돋보기",
    level: 3,
    leaf: true
  },
  {
    cid: 50002072,
    name: "보청기",
    fullPath: "생활/건강 > 실버용품 > 보청기",
    level: 3,
    leaf: true
  }
],
  50000068: [
  {
    cid: 50001952,
    name: "목보호대",
    fullPath: "생활/건강 > 재활운동용품 > 목보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001959,
    name: "자세교정용품",
    fullPath: "생활/건강 > 재활운동용품 > 자세교정용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001960,
    name: "의료용압박스타킹",
    fullPath: "생활/건강 > 재활운동용품 > 의료용압박스타킹",
    level: 3,
    leaf: true
  },
  {
    cid: 50001961,
    name: "재활운동기구",
    fullPath: "생활/건강 > 재활운동용품 > 재활운동기구",
    level: 3,
    leaf: true
  },
  {
    cid: 50001962,
    name: "기타재활운동용품",
    fullPath: "생활/건강 > 재활운동용품 > 기타재활운동용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50007229,
    name: "상반신보조기",
    fullPath: "생활/건강 > 재활운동용품 > 상반신보조기",
    level: 3,
    leaf: true
  },
  {
    cid: 50007230,
    name: "하반신보조기",
    fullPath: "생활/건강 > 재활운동용품 > 하반신보조기",
    level: 3,
    leaf: true
  }
],
  50000069: [
  {
    cid: 50001922,
    name: "저주파안마기",
    fullPath: "생활/건강 > 물리치료/저주파용품 > 저주파안마기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001923,
    name: "저주파자극기",
    fullPath: "생활/건강 > 물리치료/저주파용품 > 저주파자극기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001924,
    name: "저주파패드",
    fullPath: "생활/건강 > 물리치료/저주파용품 > 저주파패드",
    level: 3,
    leaf: true
  },
  {
    cid: 50001925,
    name: "적외선조사기",
    fullPath: "생활/건강 > 물리치료/저주파용품 > 적외선조사기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001926,
    name: "디스크/관절용품",
    fullPath: "생활/건강 > 물리치료/저주파용품 > 디스크/관절용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001927,
    name: "부항기",
    fullPath: "생활/건강 > 물리치료/저주파용품 > 부항기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001928,
    name: "물리치료용품",
    fullPath: "생활/건강 > 물리치료/저주파용품 > 물리치료용품",
    level: 3,
    leaf: true
  }
],
  50000070: [
  {
    cid: 50001929,
    name: "좌욕기",
    fullPath: "생활/건강 > 좌욕/좌훈용품 > 좌욕기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001930,
    name: "좌훈기",
    fullPath: "생활/건강 > 좌욕/좌훈용품 > 좌훈기",
    level: 3,
    leaf: true
  }
],
  50000071: [
  {
    cid: 50001931,
    name: "찜질기",
    fullPath: "생활/건강 > 냉온/찜질용품 > 찜질기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001932,
    name: "찜질팩",
    fullPath: "생활/건강 > 냉온/찜질용품 > 찜질팩",
    level: 3,
    leaf: true
  }
],
  50000072: [
  {
    cid: 50001933,
    name: "구강청정제/가글",
    fullPath: "생활/건강 > 구강위생용품 > 구강청정제/가글",
    level: 3,
    leaf: true
  },
  {
    cid: 50001935,
    name: "치실/치간칫솔",
    fullPath: "생활/건강 > 구강위생용품 > 치실/치간칫솔",
    level: 3,
    leaf: true
  },
  {
    cid: 50001936,
    name: "치아미백제",
    fullPath: "생활/건강 > 구강위생용품 > 치아미백제",
    level: 3,
    leaf: true
  },
  {
    cid: 50001937,
    name: "치약",
    fullPath: "생활/건강 > 구강위생용품 > 치약",
    level: 3,
    leaf: true
  },
  {
    cid: 50001938,
    name: "칫솔",
    fullPath: "생활/건강 > 구강위생용품 > 칫솔",
    level: 3,
    leaf: true
  },
  {
    cid: 50001939,
    name: "칫솔치약세트",
    fullPath: "생활/건강 > 구강위생용품 > 칫솔치약세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001940,
    name: "혀클리너",
    fullPath: "생활/건강 > 구강위생용품 > 혀클리너",
    level: 3,
    leaf: true
  },
  {
    cid: 50001941,
    name: "마우스피스",
    fullPath: "생활/건강 > 구강위생용품 > 마우스피스",
    level: 3,
    leaf: true
  },
  {
    cid: 50001942,
    name: "틀니관리용품",
    fullPath: "생활/건강 > 구강위생용품 > 틀니관리용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001943,
    name: "치석제거기",
    fullPath: "생활/건강 > 구강위생용품 > 치석제거기",
    level: 3,
    leaf: true
  }
],
  50000073: [
  {
    cid: 50001817,
    name: "렌즈세정액",
    fullPath: "생활/건강 > 눈건강용품 > 렌즈세정액",
    level: 3,
    leaf: true
  },
  {
    cid: 50001818,
    name: "렌즈세척기",
    fullPath: "생활/건강 > 눈건강용품 > 렌즈세척기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001819,
    name: "안대",
    fullPath: "생활/건강 > 눈건강용품 > 안대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001944,
    name: "기타렌즈용품",
    fullPath: "생활/건강 > 눈건강용품 > 기타렌즈용품",
    level: 3,
    leaf: true
  }
],
  50000074: [
  {
    cid: 50001820,
    name: "건강슬리퍼",
    fullPath: "생활/건강 > 발건강용품 > 건강슬리퍼",
    level: 3,
    leaf: true
  },
  {
    cid: 50001821,
    name: "다리/발마사지기",
    fullPath: "생활/건강 > 발건강용품 > 다리/발마사지기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001822,
    name: "발지압/발매트",
    fullPath: "생활/건강 > 발건강용품 > 발지압/발매트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001823,
    name: "족욕/족탕기",
    fullPath: "생활/건강 > 발건강용품 > 족욕/족탕기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001824,
    name: "발보호대/패드",
    fullPath: "생활/건강 > 발건강용품 > 발보호대/패드",
    level: 3,
    leaf: true
  },
  {
    cid: 50001825,
    name: "발가락교정기",
    fullPath: "생활/건강 > 발건강용품 > 발가락교정기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001826,
    name: "발냄새제거제",
    fullPath: "생활/건강 > 발건강용품 > 발냄새제거제",
    level: 3,
    leaf: true
  },
  {
    cid: 50001827,
    name: "발각질제거기",
    fullPath: "생활/건강 > 발건강용품 > 발각질제거기",
    level: 3,
    leaf: true
  }
],
  50000075: [
  {
    cid: 50001828,
    name: "안마의자",
    fullPath: "생활/건강 > 안마용품 > 안마의자",
    level: 3,
    leaf: true
  },
  {
    cid: 50001830,
    name: "안마기",
    fullPath: "생활/건강 > 안마용품 > 안마기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001832,
    name: "쿠션안마기",
    fullPath: "생활/건강 > 안마용품 > 쿠션안마기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001833,
    name: "안마매트",
    fullPath: "생활/건강 > 안마용품 > 안마매트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001834,
    name: "기타안마용품",
    fullPath: "생활/건강 > 안마용품 > 기타안마용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50016460,
    name: "마사지건",
    fullPath: "생활/건강 > 안마용품 > 마사지건",
    level: 3,
    leaf: true
  }
],
  50000076: [
  {
    cid: 50000904,
    name: "선반/진열대",
    fullPath: "생활/건강 > 수납/정리용품 > 선반/진열대",
    level: 3,
    leaf: false
  },
  {
    cid: 50000905,
    name: "정리함",
    fullPath: "생활/건강 > 수납/정리용품 > 정리함",
    level: 3,
    leaf: false
  },
  {
    cid: 50000906,
    name: "옷걸이",
    fullPath: "생활/건강 > 수납/정리용품 > 옷걸이",
    level: 3,
    leaf: false
  },
  {
    cid: 50001836,
    name: "소품걸이",
    fullPath: "생활/건강 > 수납/정리용품 > 소품걸이",
    level: 3,
    leaf: true
  },
  {
    cid: 50001837,
    name: "옷커버",
    fullPath: "생활/건강 > 수납/정리용품 > 옷커버",
    level: 3,
    leaf: true
  },
  {
    cid: 50001838,
    name: "압축팩",
    fullPath: "생활/건강 > 수납/정리용품 > 압축팩",
    level: 3,
    leaf: true
  },
  {
    cid: 50001839,
    name: "선풍기커버",
    fullPath: "생활/건강 > 수납/정리용품 > 선풍기커버",
    level: 3,
    leaf: true
  },
  {
    cid: 50005381,
    name: "마네킹",
    fullPath: "생활/건강 > 수납/정리용품 > 마네킹",
    level: 3,
    leaf: true
  },
  {
    cid: 50019359,
    name: "바구니",
    fullPath: "생활/건강 > 수납/정리용품 > 바구니",
    level: 3,
    leaf: false
  }
],
  50000077: [
  {
    cid: 50000907,
    name: "휴지통",
    fullPath: "생활/건강 > 청소용품 > 휴지통",
    level: 3,
    leaf: false
  },
  {
    cid: 50001840,
    name: "밀대/패드",
    fullPath: "생활/건강 > 청소용품 > 밀대/패드",
    level: 3,
    leaf: true
  },
  {
    cid: 50001841,
    name: "빗자루/쓰레받기",
    fullPath: "생활/건강 > 청소용품 > 빗자루/쓰레받기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001842,
    name: "걸레",
    fullPath: "생활/건강 > 청소용품 > 걸레",
    level: 3,
    leaf: true
  },
  {
    cid: 50001843,
    name: "먼지떨이/먼지제거기",
    fullPath: "생활/건강 > 청소용품 > 먼지떨이/먼지제거기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001844,
    name: "솔",
    fullPath: "생활/건강 > 청소용품 > 솔",
    level: 3,
    leaf: true
  },
  {
    cid: 50001845,
    name: "유리닦이용품",
    fullPath: "생활/건강 > 청소용품 > 유리닦이용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001846,
    name: "테이프클리너",
    fullPath: "생활/건강 > 청소용품 > 테이프클리너",
    level: 3,
    leaf: true
  },
  {
    cid: 50001847,
    name: "회전청소기",
    fullPath: "생활/건강 > 청소용품 > 회전청소기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001848,
    name: "매직블럭",
    fullPath: "생활/건강 > 청소용품 > 매직블럭",
    level: 3,
    leaf: true
  },
  {
    cid: 50001849,
    name: "기타청소용품",
    fullPath: "생활/건강 > 청소용품 > 기타청소용품",
    level: 3,
    leaf: true
  }
],
  50000078: [
  {
    cid: 50000908,
    name: "화장지",
    fullPath: "생활/건강 > 생활용품 > 화장지",
    level: 3,
    leaf: false
  },
  {
    cid: 50000909,
    name: "생리대",
    fullPath: "생활/건강 > 생활용품 > 생리대",
    level: 3,
    leaf: false
  },
  {
    cid: 50000910,
    name: "성인용기저귀",
    fullPath: "생활/건강 > 생활용품 > 성인용기저귀",
    level: 3,
    leaf: false
  },
  {
    cid: 50000911,
    name: "세제/세정제",
    fullPath: "생활/건강 > 생활용품 > 세제/세정제",
    level: 3,
    leaf: false
  },
  {
    cid: 50000912,
    name: "섬유유연제",
    fullPath: "생활/건강 > 생활용품 > 섬유유연제",
    level: 3,
    leaf: false
  },
  {
    cid: 50000913,
    name: "제습/방향/탈취",
    fullPath: "생활/건강 > 생활용품 > 제습/방향/탈취",
    level: 3,
    leaf: false
  },
  {
    cid: 50000914,
    name: "해충퇴치용품",
    fullPath: "생활/건강 > 생활용품 > 해충퇴치용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000915,
    name: "생활잡화",
    fullPath: "생활/건강 > 생활용품 > 생활잡화",
    level: 3,
    leaf: false
  },
  {
    cid: 50000916,
    name: "보안용품",
    fullPath: "생활/건강 > 생활용품 > 보안용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001780,
    name: "생활선물세트",
    fullPath: "생활/건강 > 생활용품 > 생활선물세트",
    level: 3,
    leaf: true
  }
],
  50000079: [
  {
    cid: 50001782,
    name: "공기정화식물",
    fullPath: "생활/건강 > 원예/식물 > 공기정화식물",
    level: 3,
    leaf: true
  },
  {
    cid: 50001783,
    name: "관엽식물",
    fullPath: "생활/건강 > 원예/식물 > 관엽식물",
    level: 3,
    leaf: true
  },
  {
    cid: 50001784,
    name: "다육식물",
    fullPath: "생활/건강 > 원예/식물 > 다육식물",
    level: 3,
    leaf: true
  },
  {
    cid: 50001785,
    name: "수경식물",
    fullPath: "생활/건강 > 원예/식물 > 수경식물",
    level: 3,
    leaf: true
  },
  {
    cid: 50001786,
    name: "식용식물",
    fullPath: "생활/건강 > 원예/식물 > 식용식물",
    level: 3,
    leaf: true
  },
  {
    cid: 50001787,
    name: "넝쿨식물",
    fullPath: "생활/건강 > 원예/식물 > 넝쿨식물",
    level: 3,
    leaf: true
  },
  {
    cid: 50001788,
    name: "허브식물",
    fullPath: "생활/건강 > 원예/식물 > 허브식물",
    level: 3,
    leaf: true
  },
  {
    cid: 50001789,
    name: "천연잔디",
    fullPath: "생활/건강 > 원예/식물 > 천연잔디",
    level: 3,
    leaf: true
  },
  {
    cid: 50001790,
    name: "미니화분",
    fullPath: "생활/건강 > 원예/식물 > 미니화분",
    level: 3,
    leaf: true
  },
  {
    cid: 50001791,
    name: "분재",
    fullPath: "생활/건강 > 원예/식물 > 분재",
    level: 3,
    leaf: true
  },
  {
    cid: 50001792,
    name: "숯부작",
    fullPath: "생활/건강 > 원예/식물 > 숯부작",
    level: 3,
    leaf: true
  },
  {
    cid: 50001793,
    name: "토피어리",
    fullPath: "생활/건강 > 원예/식물 > 토피어리",
    level: 3,
    leaf: true
  },
  {
    cid: 50001805,
    name: "씨앗/모종",
    fullPath: "생활/건강 > 원예/식물 > 씨앗/모종",
    level: 3,
    leaf: true
  },
  {
    cid: 50001806,
    name: "조화",
    fullPath: "생활/건강 > 원예/식물 > 조화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001807,
    name: "보존화",
    fullPath: "생활/건강 > 원예/식물 > 보존화",
    level: 3,
    leaf: true
  },
  {
    cid: 50001808,
    name: "금꽃",
    fullPath: "생활/건강 > 원예/식물 > 금꽃",
    level: 3,
    leaf: true
  },
  {
    cid: 50001809,
    name: "비누꽃",
    fullPath: "생활/건강 > 원예/식물 > 비누꽃",
    level: 3,
    leaf: true
  },
  {
    cid: 50001810,
    name: "종이꽃",
    fullPath: "생활/건강 > 원예/식물 > 종이꽃",
    level: 3,
    leaf: true
  },
  {
    cid: 50006880,
    name: "플라워소품만들기",
    fullPath: "생활/건강 > 원예/식물 > 플라워소품만들기",
    level: 3,
    leaf: true
  },
  {
    cid: 50006881,
    name: "테라리엄",
    fullPath: "생활/건강 > 원예/식물 > 테라리엄",
    level: 3,
    leaf: true
  }
],
  50000080: [
  {
    cid: 50001794,
    name: "물조리개",
    fullPath: "생활/건강 > 정원/원예용품 > 물조리개",
    level: 3,
    leaf: true
  },
  {
    cid: 50001795,
    name: "수반",
    fullPath: "생활/건강 > 정원/원예용품 > 수반",
    level: 3,
    leaf: true
  },
  {
    cid: 50001796,
    name: "원예부자재",
    fullPath: "생활/건강 > 정원/원예용품 > 원예부자재",
    level: 3,
    leaf: true
  },
  {
    cid: 50001797,
    name: "자갈/모래/흙",
    fullPath: "생활/건강 > 정원/원예용품 > 자갈/모래/흙",
    level: 3,
    leaf: true
  },
  {
    cid: 50001798,
    name: "정원데코",
    fullPath: "생활/건강 > 정원/원예용품 > 정원데코",
    level: 3,
    leaf: true
  },
  {
    cid: 50001799,
    name: "정원부자재",
    fullPath: "생활/건강 > 정원/원예용품 > 정원부자재",
    level: 3,
    leaf: true
  },
  {
    cid: 50001800,
    name: "조경수/묘목",
    fullPath: "생활/건강 > 정원/원예용품 > 조경수/묘목",
    level: 3,
    leaf: true
  },
  {
    cid: 50001801,
    name: "화분",
    fullPath: "생활/건강 > 정원/원예용품 > 화분",
    level: 3,
    leaf: true
  },
  {
    cid: 50001802,
    name: "화분대",
    fullPath: "생활/건강 > 정원/원예용품 > 화분대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001803,
    name: "화분받침",
    fullPath: "생활/건강 > 정원/원예용품 > 화분받침",
    level: 3,
    leaf: true
  },
  {
    cid: 50001804,
    name: "화분영양제/비료",
    fullPath: "생활/건강 > 정원/원예용품 > 화분영양제/비료",
    level: 3,
    leaf: true
  }
],
  50000081: [
  {
    cid: 50000917,
    name: "영화",
    fullPath: "생활/건강 > 블루레이 > 영화",
    level: 3,
    leaf: false
  },
  {
    cid: 50000918,
    name: "드라마",
    fullPath: "생활/건강 > 블루레이 > 드라마",
    level: 3,
    leaf: false
  },
  {
    cid: 50001689,
    name: "유아/어린이",
    fullPath: "생활/건강 > 블루레이 > 유아/어린이",
    level: 3,
    leaf: true
  },
  {
    cid: 50001811,
    name: "애니메이션",
    fullPath: "생활/건강 > 블루레이 > 애니메이션",
    level: 3,
    leaf: true
  },
  {
    cid: 50001812,
    name: "뮤직비디오",
    fullPath: "생활/건강 > 블루레이 > 뮤직비디오",
    level: 3,
    leaf: true
  },
  {
    cid: 50001813,
    name: "취미/스포츠",
    fullPath: "생활/건강 > 블루레이 > 취미/스포츠",
    level: 3,
    leaf: true
  },
  {
    cid: 50001814,
    name: "종교",
    fullPath: "생활/건강 > 블루레이 > 종교",
    level: 3,
    leaf: true
  },
  {
    cid: 50001815,
    name: "교육",
    fullPath: "생활/건강 > 블루레이 > 교육",
    level: 3,
    leaf: true
  },
  {
    cid: 50001816,
    name: "교양/다큐멘터리",
    fullPath: "생활/건강 > 블루레이 > 교양/다큐멘터리",
    level: 3,
    leaf: true
  }
],
  50000087: [
  {
    cid: 50001728,
    name: "전자사전",
    fullPath: "디지털/가전 > 학습기기 > 전자사전",
    level: 3,
    leaf: true
  },
  {
    cid: 50001729,
    name: "전자책",
    fullPath: "디지털/가전 > 학습기기 > 전자책",
    level: 3,
    leaf: true
  },
  {
    cid: 50001730,
    name: "어학학습기",
    fullPath: "디지털/가전 > 학습기기 > 어학학습기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001731,
    name: "학습보조기",
    fullPath: "디지털/가전 > 학습기기 > 학습보조기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001732,
    name: "보이스레코더",
    fullPath: "디지털/가전 > 학습기기 > 보이스레코더",
    level: 3,
    leaf: true
  },
  {
    cid: 50001198,
    name: "학습기기액세서리",
    fullPath: "디지털/가전 > 학습기기 > 학습기기액세서리",
    level: 3,
    leaf: false
  }
],
  50000088: [
  {
    cid: 50001733,
    name: "가정용게임기",
    fullPath: "디지털/가전 > 게임기/타이틀 > 가정용게임기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001734,
    name: "휴대용게임기",
    fullPath: "디지털/가전 > 게임기/타이틀 > 휴대용게임기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001735,
    name: "PC게임",
    fullPath: "디지털/가전 > 게임기/타이틀 > PC게임",
    level: 3,
    leaf: true
  },
  {
    cid: 50001736,
    name: "게임타이틀",
    fullPath: "디지털/가전 > 게임기/타이틀 > 게임타이틀",
    level: 3,
    leaf: true
  },
  {
    cid: 50001199,
    name: "게임기주변기기",
    fullPath: "디지털/가전 > 게임기/타이틀 > 게임기주변기기",
    level: 3,
    leaf: false
  }
],
  50000089: [
  {
    cid: 50001737,
    name: "브랜드PC",
    fullPath: "디지털/가전 > PC > 브랜드PC",
    level: 3,
    leaf: true
  },
  {
    cid: 50001738,
    name: "조립/베어본PC",
    fullPath: "디지털/가전 > PC > 조립/베어본PC",
    level: 3,
    leaf: true
  },
  {
    cid: 50001739,
    name: "서버/워크스테이션",
    fullPath: "디지털/가전 > PC > 서버/워크스테이션",
    level: 3,
    leaf: true
  }
],
  50000090: [
  {
    cid: 50001200,
    name: "USB액세서리",
    fullPath: "디지털/가전 > PC액세서리 > USB액세서리",
    level: 3,
    leaf: false
  },
  {
    cid: 50001571,
    name: "마우스패드",
    fullPath: "디지털/가전 > PC액세서리 > 마우스패드",
    level: 3,
    leaf: true
  },
  {
    cid: 50001572,
    name: "손목받침대",
    fullPath: "디지털/가전 > PC액세서리 > 손목받침대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001574,
    name: "PC받침대",
    fullPath: "디지털/가전 > PC액세서리 > PC받침대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001575,
    name: "PC홀더/브라켓",
    fullPath: "디지털/가전 > PC액세서리 > PC홀더/브라켓",
    level: 3,
    leaf: true
  },
  {
    cid: 50001576,
    name: "키보드키스킨/스티커",
    fullPath: "디지털/가전 > PC액세서리 > 키보드키스킨/스티커",
    level: 3,
    leaf: true
  },
  {
    cid: 50001577,
    name: "클리너",
    fullPath: "디지털/가전 > PC액세서리 > 클리너",
    level: 3,
    leaf: true
  },
  {
    cid: 50001578,
    name: "케이블타이/정리함",
    fullPath: "디지털/가전 > PC액세서리 > 케이블타이/정리함",
    level: 3,
    leaf: true
  },
  {
    cid: 50001579,
    name: "기타PC액세서리",
    fullPath: "디지털/가전 > PC액세서리 > 기타PC액세서리",
    level: 3,
    leaf: true
  }
],
  50000091: [
  {
    cid: 50001580,
    name: "노트북가방/케이스",
    fullPath: "디지털/가전 > 노트북액세서리 > 노트북가방/케이스",
    level: 3,
    leaf: true
  },
  {
    cid: 50001581,
    name: "노트북받침대/쿨러",
    fullPath: "디지털/가전 > 노트북액세서리 > 노트북받침대/쿨러",
    level: 3,
    leaf: true
  },
  {
    cid: 50001201,
    name: "노트북보호필름",
    fullPath: "디지털/가전 > 노트북액세서리 > 노트북보호필름",
    level: 3,
    leaf: false
  },
  {
    cid: 50001582,
    name: "노트북보안기",
    fullPath: "디지털/가전 > 노트북액세서리 > 노트북보안기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001583,
    name: "노트북어댑터",
    fullPath: "디지털/가전 > 노트북액세서리 > 노트북어댑터",
    level: 3,
    leaf: true
  },
  {
    cid: 50001584,
    name: "노트북용배터리",
    fullPath: "디지털/가전 > 노트북액세서리 > 노트북용배터리",
    level: 3,
    leaf: true
  },
  {
    cid: 50001585,
    name: "노트북키스킨",
    fullPath: "디지털/가전 > 노트북액세서리 > 노트북키스킨",
    level: 3,
    leaf: true
  },
  {
    cid: 50001586,
    name: "노트북도난방지",
    fullPath: "디지털/가전 > 노트북액세서리 > 노트북도난방지",
    level: 3,
    leaf: true
  },
  {
    cid: 50001587,
    name: "기타노트북액세서리",
    fullPath: "디지털/가전 > 노트북액세서리 > 기타노트북액세서리",
    level: 3,
    leaf: true
  }
],
  50000092: [
  {
    cid: 50001588,
    name: "케이스/파우치",
    fullPath: "디지털/가전 > 태블릿PC액세서리 > 케이스/파우치",
    level: 3,
    leaf: true
  },
  {
    cid: 50001589,
    name: "스탠드/Dock",
    fullPath: "디지털/가전 > 태블릿PC액세서리 > 스탠드/Dock",
    level: 3,
    leaf: true
  },
  {
    cid: 50001202,
    name: "태블릿PC보호필름",
    fullPath: "디지털/가전 > 태블릿PC액세서리 > 태블릿PC보호필름",
    level: 3,
    leaf: false
  },
  {
    cid: 50007236,
    name: "터치펜/기타",
    fullPath: "디지털/가전 > 태블릿PC액세서리 > 터치펜/기타",
    level: 3,
    leaf: true
  }
],
  50000093: [
  {
    cid: 50001590,
    name: "모니터받침대",
    fullPath: "디지털/가전 > 모니터주변기기 > 모니터받침대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001591,
    name: "모니터어댑터",
    fullPath: "디지털/가전 > 모니터주변기기 > 모니터어댑터",
    level: 3,
    leaf: true
  },
  {
    cid: 50001592,
    name: "모니터브라켓",
    fullPath: "디지털/가전 > 모니터주변기기 > 모니터브라켓",
    level: 3,
    leaf: true
  },
  {
    cid: 50006203,
    name: "모니터암",
    fullPath: "디지털/가전 > 모니터주변기기 > 모니터암",
    level: 3,
    leaf: true
  },
  {
    cid: 50016620,
    name: "모니터 액정필름/커버",
    fullPath: "디지털/가전 > 모니터주변기기 > 모니터 액정필름/커버",
    level: 3,
    leaf: true
  },
  {
    cid: 50001593,
    name: "기타모니터주변기기",
    fullPath: "디지털/가전 > 모니터주변기기 > 기타모니터주변기기",
    level: 3,
    leaf: true
  }
],
  50000094: [
  {
    cid: 50001203,
    name: "마우스",
    fullPath: "디지털/가전 > 주변기기 > 마우스",
    level: 3,
    leaf: false
  },
  {
    cid: 50001204,
    name: "키보드",
    fullPath: "디지털/가전 > 주변기기 > 키보드",
    level: 3,
    leaf: false
  },
  {
    cid: 50001594,
    name: "키보드/마우스세트",
    fullPath: "디지털/가전 > 주변기기 > 키보드/마우스세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001205,
    name: "타블렛/액세서리",
    fullPath: "디지털/가전 > 주변기기 > 타블렛/액세서리",
    level: 3,
    leaf: false
  },
  {
    cid: 50001206,
    name: "복합기",
    fullPath: "디지털/가전 > 주변기기 > 복합기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001207,
    name: "프린터",
    fullPath: "디지털/가전 > 주변기기 > 프린터",
    level: 3,
    leaf: false
  },
  {
    cid: 50001208,
    name: "복합기/프린터소모품",
    fullPath: "디지털/가전 > 주변기기 > 복합기/프린터소모품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001209,
    name: "스캐너",
    fullPath: "디지털/가전 > 주변기기 > 스캐너",
    level: 3,
    leaf: false
  }
],
  50000095: [
  {
    cid: 50001595,
    name: "Divx플레이어",
    fullPath: "디지털/가전 > 멀티미디어장비 > Divx플레이어",
    level: 3,
    leaf: true
  },
  {
    cid: 50001211,
    name: "DVR",
    fullPath: "디지털/가전 > 멀티미디어장비 > DVR",
    level: 3,
    leaf: false
  },
  {
    cid: 50001596,
    name: "PC마이크",
    fullPath: "디지털/가전 > 멀티미디어장비 > PC마이크",
    level: 3,
    leaf: true
  },
  {
    cid: 50001212,
    name: "PC스피커",
    fullPath: "디지털/가전 > 멀티미디어장비 > PC스피커",
    level: 3,
    leaf: false
  },
  {
    cid: 50001597,
    name: "휴대용스피커",
    fullPath: "디지털/가전 > 멀티미디어장비 > 휴대용스피커",
    level: 3,
    leaf: true
  },
  {
    cid: 50001598,
    name: "웹캠",
    fullPath: "디지털/가전 > 멀티미디어장비 > 웹캠",
    level: 3,
    leaf: true
  },
  {
    cid: 50001599,
    name: "PC헤드셋",
    fullPath: "디지털/가전 > 멀티미디어장비 > PC헤드셋",
    level: 3,
    leaf: true
  },
  {
    cid: 50001213,
    name: "영상수신장비",
    fullPath: "디지털/가전 > 멀티미디어장비 > 영상수신장비",
    level: 3,
    leaf: false
  },
  {
    cid: 50001214,
    name: "사운드카드",
    fullPath: "디지털/가전 > 멀티미디어장비 > 사운드카드",
    level: 3,
    leaf: false
  },
  {
    cid: 50001215,
    name: "영상편집카드",
    fullPath: "디지털/가전 > 멀티미디어장비 > 영상편집카드",
    level: 3,
    leaf: false
  }
],
  50000096: [
  {
    cid: 50001600,
    name: "외장HDD",
    fullPath: "디지털/가전 > 저장장치 > 외장HDD",
    level: 3,
    leaf: true
  },
  {
    cid: 50001601,
    name: "외장SSD",
    fullPath: "디지털/가전 > 저장장치 > 외장SSD",
    level: 3,
    leaf: true
  },
  {
    cid: 50017860,
    name: "외장스토리지",
    fullPath: "디지털/가전 > 저장장치 > 외장스토리지",
    level: 3,
    leaf: true
  },
  {
    cid: 50017761,
    name: "도킹스테이션",
    fullPath: "디지털/가전 > 저장장치 > 도킹스테이션",
    level: 3,
    leaf: true
  },
  {
    cid: 50001602,
    name: "NAS",
    fullPath: "디지털/가전 > 저장장치 > NAS",
    level: 3,
    leaf: true
  },
  {
    cid: 50001615,
    name: "USB메모리",
    fullPath: "디지털/가전 > 저장장치 > USB메모리",
    level: 3,
    leaf: true
  },
  {
    cid: 50001616,
    name: "HDD",
    fullPath: "디지털/가전 > 저장장치 > HDD",
    level: 3,
    leaf: true
  },
  {
    cid: 50001617,
    name: "SSD",
    fullPath: "디지털/가전 > 저장장치 > SSD",
    level: 3,
    leaf: true
  },
  {
    cid: 50001216,
    name: "ODD",
    fullPath: "디지털/가전 > 저장장치 > ODD",
    level: 3,
    leaf: false
  },
  {
    cid: 50001217,
    name: "공미디어",
    fullPath: "디지털/가전 > 저장장치 > 공미디어",
    level: 3,
    leaf: false
  },
  {
    cid: 50001618,
    name: "기타저장장치",
    fullPath: "디지털/가전 > 저장장치 > 기타저장장치",
    level: 3,
    leaf: true
  },
  {
    cid: 50001619,
    name: "저장장치액세서리",
    fullPath: "디지털/가전 > 저장장치 > 저장장치액세서리",
    level: 3,
    leaf: true
  }
],
  50000097: [
  {
    cid: 50001620,
    name: "CPU",
    fullPath: "디지털/가전 > PC부품 > CPU",
    level: 3,
    leaf: true
  },
  {
    cid: 50001218,
    name: "RAM",
    fullPath: "디지털/가전 > PC부품 > RAM",
    level: 3,
    leaf: false
  },
  {
    cid: 50001219,
    name: "그래픽카드",
    fullPath: "디지털/가전 > PC부품 > 그래픽카드",
    level: 3,
    leaf: false
  },
  {
    cid: 50001220,
    name: "메인보드",
    fullPath: "디지털/가전 > PC부품 > 메인보드",
    level: 3,
    leaf: false
  },
  {
    cid: 50001621,
    name: "PC케이스",
    fullPath: "디지털/가전 > PC부품 > PC케이스",
    level: 3,
    leaf: true
  },
  {
    cid: 50001221,
    name: "파워서플라이",
    fullPath: "디지털/가전 > PC부품 > 파워서플라이",
    level: 3,
    leaf: false
  },
  {
    cid: 50001222,
    name: "PC케이블",
    fullPath: "디지털/가전 > PC부품 > PC케이블",
    level: 3,
    leaf: false
  },
  {
    cid: 50001223,
    name: "인터페이스카드",
    fullPath: "디지털/가전 > PC부품 > 인터페이스카드",
    level: 3,
    leaf: false
  },
  {
    cid: 50001224,
    name: "쿨러",
    fullPath: "디지털/가전 > PC부품 > 쿨러",
    level: 3,
    leaf: false
  },
  {
    cid: 50001225,
    name: "튜닝용품",
    fullPath: "디지털/가전 > PC부품 > 튜닝용품",
    level: 3,
    leaf: false
  }
],
  50000098: [
  {
    cid: 50001226,
    name: "공유기",
    fullPath: "디지털/가전 > 네트워크장비 > 공유기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001227,
    name: "랜카드",
    fullPath: "디지털/가전 > 네트워크장비 > 랜카드",
    level: 3,
    leaf: false
  },
  {
    cid: 50001622,
    name: "라우터",
    fullPath: "디지털/가전 > 네트워크장비 > 라우터",
    level: 3,
    leaf: true
  },
  {
    cid: 50001623,
    name: "AP",
    fullPath: "디지털/가전 > 네트워크장비 > AP",
    level: 3,
    leaf: true
  },
  {
    cid: 50001624,
    name: "KVM스위치",
    fullPath: "디지털/가전 > 네트워크장비 > KVM스위치",
    level: 3,
    leaf: true
  },
  {
    cid: 50001497,
    name: "KVM케이블",
    fullPath: "디지털/가전 > 네트워크장비 > KVM케이블",
    level: 3,
    leaf: true
  },
  {
    cid: 50001498,
    name: "네트워크모듈",
    fullPath: "디지털/가전 > 네트워크장비 > 네트워크모듈",
    level: 3,
    leaf: true
  },
  {
    cid: 50001499,
    name: "네트워크테스트기",
    fullPath: "디지털/가전 > 네트워크장비 > 네트워크테스트기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001500,
    name: "리피터장비",
    fullPath: "디지털/가전 > 네트워크장비 > 리피터장비",
    level: 3,
    leaf: true
  },
  {
    cid: 50001502,
    name: "무선모뎀",
    fullPath: "디지털/가전 > 네트워크장비 > 무선모뎀",
    level: 3,
    leaf: true
  },
  {
    cid: 50001503,
    name: "모뎀",
    fullPath: "디지털/가전 > 네트워크장비 > 모뎀",
    level: 3,
    leaf: true
  },
  {
    cid: 50001504,
    name: "블루투스동글",
    fullPath: "디지털/가전 > 네트워크장비 > 블루투스동글",
    level: 3,
    leaf: true
  },
  {
    cid: 50001505,
    name: "선택기",
    fullPath: "디지털/가전 > 네트워크장비 > 선택기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001506,
    name: "스위칭허브",
    fullPath: "디지털/가전 > 네트워크장비 > 스위칭허브",
    level: 3,
    leaf: true
  },
  {
    cid: 50001507,
    name: "시리얼장비",
    fullPath: "디지털/가전 > 네트워크장비 > 시리얼장비",
    level: 3,
    leaf: true
  },
  {
    cid: 50001508,
    name: "안테나",
    fullPath: "디지털/가전 > 네트워크장비 > 안테나",
    level: 3,
    leaf: true
  },
  {
    cid: 50001509,
    name: "컨버터장비",
    fullPath: "디지털/가전 > 네트워크장비 > 컨버터장비",
    level: 3,
    leaf: true
  },
  {
    cid: 50001510,
    name: "프린터공유기",
    fullPath: "디지털/가전 > 네트워크장비 > 프린터공유기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001511,
    name: "기타네트워크장비",
    fullPath: "디지털/가전 > 네트워크장비 > 기타네트워크장비",
    level: 3,
    leaf: true
  }
],
  50000099: [
  {
    cid: 50001512,
    name: "운영체제",
    fullPath: "디지털/가전 > 소프트웨어 > 운영체제",
    level: 3,
    leaf: true
  },
  {
    cid: 50001513,
    name: "보안/백신",
    fullPath: "디지털/가전 > 소프트웨어 > 보안/백신",
    level: 3,
    leaf: true
  },
  {
    cid: 50001514,
    name: "사무/회계",
    fullPath: "디지털/가전 > 소프트웨어 > 사무/회계",
    level: 3,
    leaf: true
  },
  {
    cid: 50001515,
    name: "개발툴",
    fullPath: "디지털/가전 > 소프트웨어 > 개발툴",
    level: 3,
    leaf: true
  },
  {
    cid: 50001516,
    name: "그래픽/멀티미디어",
    fullPath: "디지털/가전 > 소프트웨어 > 그래픽/멀티미디어",
    level: 3,
    leaf: true
  },
  {
    cid: 50001517,
    name: "번역",
    fullPath: "디지털/가전 > 소프트웨어 > 번역",
    level: 3,
    leaf: true
  },
  {
    cid: 50001518,
    name: "유틸리티",
    fullPath: "디지털/가전 > 소프트웨어 > 유틸리티",
    level: 3,
    leaf: true
  }
],
  50000100: [
  {
    cid: 50001228,
    name: "침대",
    fullPath: "가구/인테리어 > 침실가구 > 침대",
    level: 3,
    leaf: false
  },
  {
    cid: 50001230,
    name: "장롱/붙박이장",
    fullPath: "가구/인테리어 > 침실가구 > 장롱/붙박이장",
    level: 3,
    leaf: false
  },
  {
    cid: 50001231,
    name: "화장대",
    fullPath: "가구/인테리어 > 침실가구 > 화장대",
    level: 3,
    leaf: false
  },
  {
    cid: 50001232,
    name: "거울",
    fullPath: "가구/인테리어 > 침실가구 > 거울",
    level: 3,
    leaf: false
  },
  {
    cid: 50001307,
    name: "협탁",
    fullPath: "가구/인테리어 > 침실가구 > 협탁",
    level: 3,
    leaf: true
  },
  {
    cid: 50001308,
    name: "부부테이블",
    fullPath: "가구/인테리어 > 침실가구 > 부부테이블",
    level: 3,
    leaf: true
  },
  {
    cid: 50001309,
    name: "침실세트",
    fullPath: "가구/인테리어 > 침실가구 > 침실세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50007189,
    name: "서랍장",
    fullPath: "가구/인테리어 > 침실가구 > 서랍장",
    level: 3,
    leaf: true
  },
  {
    cid: 50018859,
    name: "매트리스",
    fullPath: "가구/인테리어 > 침실가구 > 매트리스",
    level: 3,
    leaf: true
  }
],
  50000101: [
  {
    cid: 50001234,
    name: "소파",
    fullPath: "가구/인테리어 > 거실가구 > 소파",
    level: 3,
    leaf: false
  },
  {
    cid: 50001235,
    name: "테이블",
    fullPath: "가구/인테리어 > 거실가구 > 테이블",
    level: 3,
    leaf: false
  },
  {
    cid: 50001310,
    name: "TV거실장",
    fullPath: "가구/인테리어 > 거실가구 > TV거실장",
    level: 3,
    leaf: true
  },
  {
    cid: 50001311,
    name: "장식장",
    fullPath: "가구/인테리어 > 거실가구 > 장식장",
    level: 3,
    leaf: true
  }
],
  50000102: [
  {
    cid: 50001236,
    name: "식탁/의자",
    fullPath: "가구/인테리어 > 주방가구 > 식탁/의자",
    level: 3,
    leaf: false
  },
  {
    cid: 50001313,
    name: "레인지대",
    fullPath: "가구/인테리어 > 주방가구 > 레인지대",
    level: 3,
    leaf: true
  },
  {
    cid: 50001315,
    name: "왜건/카트",
    fullPath: "가구/인테리어 > 주방가구 > 왜건/카트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001316,
    name: "주방수납장",
    fullPath: "가구/인테리어 > 주방가구 > 주방수납장",
    level: 3,
    leaf: true
  },
  {
    cid: 50001317,
    name: "그릇장/컵보드",
    fullPath: "가구/인테리어 > 주방가구 > 그릇장/컵보드",
    level: 3,
    leaf: true
  },
  {
    cid: 50001318,
    name: "기타주방가구",
    fullPath: "가구/인테리어 > 주방가구 > 기타주방가구",
    level: 3,
    leaf: true
  }
],
  50000103: [
  {
    cid: 50001319,
    name: "행거",
    fullPath: "가구/인테리어 > 수납가구 > 행거",
    level: 3,
    leaf: true
  },
  {
    cid: 50001320,
    name: "수납장",
    fullPath: "가구/인테리어 > 수납가구 > 수납장",
    level: 3,
    leaf: true
  },
  {
    cid: 50001321,
    name: "선반",
    fullPath: "가구/인테리어 > 수납가구 > 선반",
    level: 3,
    leaf: true
  },
  {
    cid: 50001322,
    name: "공간박스",
    fullPath: "가구/인테리어 > 수납가구 > 공간박스",
    level: 3,
    leaf: true
  },
  {
    cid: 50001323,
    name: "고가구",
    fullPath: "가구/인테리어 > 수납가구 > 고가구",
    level: 3,
    leaf: true
  },
  {
    cid: 50001324,
    name: "나비장",
    fullPath: "가구/인테리어 > 수납가구 > 나비장",
    level: 3,
    leaf: true
  },
  {
    cid: 50001325,
    name: "CD/DVD장",
    fullPath: "가구/인테리어 > 수납가구 > CD/DVD장",
    level: 3,
    leaf: true
  },
  {
    cid: 50001326,
    name: "신발장",
    fullPath: "가구/인테리어 > 수납가구 > 신발장",
    level: 3,
    leaf: true
  },
  {
    cid: 50001327,
    name: "우산꽂이",
    fullPath: "가구/인테리어 > 수납가구 > 우산꽂이",
    level: 3,
    leaf: true
  },
  {
    cid: 50001328,
    name: "잡지꽂이",
    fullPath: "가구/인테리어 > 수납가구 > 잡지꽂이",
    level: 3,
    leaf: true
  },
  {
    cid: 50001329,
    name: "코너장",
    fullPath: "가구/인테리어 > 수납가구 > 코너장",
    level: 3,
    leaf: true
  },
  {
    cid: 50001330,
    name: "소품수납함",
    fullPath: "가구/인테리어 > 수납가구 > 소품수납함",
    level: 3,
    leaf: true
  }
],
  50000104: [
  {
    cid: 50001332,
    name: "책상",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 책상",
    level: 3,
    leaf: true
  },
  {
    cid: 50001333,
    name: "책상의자",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 책상의자",
    level: 3,
    leaf: true
  },
  {
    cid: 50001334,
    name: "책상의자세트",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 책상의자세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001336,
    name: "책꽂이",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 책꽂이",
    level: 3,
    leaf: true
  },
  {
    cid: 50001335,
    name: "책장",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 책장",
    level: 3,
    leaf: true
  },
  {
    cid: 50001237,
    name: "침대",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 침대",
    level: 3,
    leaf: false
  },
  {
    cid: 50001337,
    name: "옷장",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 옷장",
    level: 3,
    leaf: true
  },
  {
    cid: 50001338,
    name: "행거",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 행거",
    level: 3,
    leaf: true
  },
  {
    cid: 50001339,
    name: "서랍장",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 서랍장",
    level: 3,
    leaf: true
  },
  {
    cid: 50001340,
    name: "수납장",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 수납장",
    level: 3,
    leaf: true
  },
  {
    cid: 50001341,
    name: "의자",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 의자",
    level: 3,
    leaf: true
  },
  {
    cid: 50001342,
    name: "소파",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 소파",
    level: 3,
    leaf: true
  },
  {
    cid: 50001344,
    name: "소품가구",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 소품가구",
    level: 3,
    leaf: true
  },
  {
    cid: 50001345,
    name: "아동침실세트",
    fullPath: "가구/인테리어 > 아동/주니어가구 > 아동침실세트",
    level: 3,
    leaf: true
  }
],
  50000105: [
  {
    cid: 50001238,
    name: "책상",
    fullPath: "가구/인테리어 > 서재/사무용가구 > 책상",
    level: 3,
    leaf: false
  },
  {
    cid: 50001239,
    name: "의자",
    fullPath: "가구/인테리어 > 서재/사무용가구 > 의자",
    level: 3,
    leaf: false
  },
  {
    cid: 50001346,
    name: "책장",
    fullPath: "가구/인테리어 > 서재/사무용가구 > 책장",
    level: 3,
    leaf: true
  },
  {
    cid: 50001347,
    name: "책꽂이",
    fullPath: "가구/인테리어 > 서재/사무용가구 > 책꽂이",
    level: 3,
    leaf: true
  },
  {
    cid: 50001240,
    name: "사무/교구용가구",
    fullPath: "가구/인테리어 > 서재/사무용가구 > 사무/교구용가구",
    level: 3,
    leaf: false
  }
],
  50000106: [
  {
    cid: 50001054,
    name: "야외테이블",
    fullPath: "가구/인테리어 > 아웃도어가구 > 야외테이블",
    level: 3,
    leaf: true
  },
  {
    cid: 50001055,
    name: "야외의자",
    fullPath: "가구/인테리어 > 아웃도어가구 > 야외의자",
    level: 3,
    leaf: true
  },
  {
    cid: 50001056,
    name: "정원그네",
    fullPath: "가구/인테리어 > 아웃도어가구 > 정원그네",
    level: 3,
    leaf: true
  },
  {
    cid: 50001057,
    name: "정자",
    fullPath: "가구/인테리어 > 아웃도어가구 > 정자",
    level: 3,
    leaf: true
  },
  {
    cid: 50001058,
    name: "야외벤치",
    fullPath: "가구/인테리어 > 아웃도어가구 > 야외벤치",
    level: 3,
    leaf: true
  },
  {
    cid: 50001059,
    name: "기타아웃도어가구",
    fullPath: "가구/인테리어 > 아웃도어가구 > 기타아웃도어가구",
    level: 3,
    leaf: true
  }
],
  50000107: [
  {
    cid: 50001060,
    name: "목재",
    fullPath: "가구/인테리어 > DIY자재/용품 > 목재",
    level: 3,
    leaf: true
  },
  {
    cid: 50001061,
    name: "반제품",
    fullPath: "가구/인테리어 > DIY자재/용품 > 반제품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001113,
    name: "가구부속품",
    fullPath: "가구/인테리어 > DIY자재/용품 > 가구부속품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001114,
    name: "바닥재",
    fullPath: "가구/인테리어 > DIY자재/용품 > 바닥재",
    level: 3,
    leaf: false
  },
  {
    cid: 50001062,
    name: "손잡이",
    fullPath: "가구/인테리어 > DIY자재/용품 > 손잡이",
    level: 3,
    leaf: true
  },
  {
    cid: 50001115,
    name: "타일",
    fullPath: "가구/인테리어 > DIY자재/용품 > 타일",
    level: 3,
    leaf: false
  },
  {
    cid: 50001063,
    name: "파벽돌",
    fullPath: "가구/인테리어 > DIY자재/용품 > 파벽돌",
    level: 3,
    leaf: true
  },
  {
    cid: 50001064,
    name: "몰딩",
    fullPath: "가구/인테리어 > DIY자재/용품 > 몰딩",
    level: 3,
    leaf: true
  },
  {
    cid: 50001065,
    name: "패널",
    fullPath: "가구/인테리어 > DIY자재/용품 > 패널",
    level: 3,
    leaf: true
  },
  {
    cid: 50001116,
    name: "벽지",
    fullPath: "가구/인테리어 > DIY자재/용품 > 벽지",
    level: 3,
    leaf: false
  },
  {
    cid: 50001117,
    name: "시트지",
    fullPath: "가구/인테리어 > DIY자재/용품 > 시트지",
    level: 3,
    leaf: false
  },
  {
    cid: 50001066,
    name: "데코스티커",
    fullPath: "가구/인테리어 > DIY자재/용품 > 데코스티커",
    level: 3,
    leaf: true
  },
  {
    cid: 50001067,
    name: "접착제/보수용품",
    fullPath: "가구/인테리어 > DIY자재/용품 > 접착제/보수용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50008168,
    name: "리모델링",
    fullPath: "가구/인테리어 > DIY자재/용품 > 리모델링",
    level: 3,
    leaf: false
  }
],
  50000108: [
  {
    cid: 50001118,
    name: "스탠드",
    fullPath: "가구/인테리어 > 인테리어소품 > 스탠드",
    level: 3,
    leaf: false
  },
  {
    cid: 50001119,
    name: "조명",
    fullPath: "가구/인테리어 > 인테리어소품 > 조명",
    level: 3,
    leaf: false
  },
  {
    cid: 50001120,
    name: "시계",
    fullPath: "가구/인테리어 > 인테리어소품 > 시계",
    level: 3,
    leaf: false
  },
  {
    cid: 50001121,
    name: "액자",
    fullPath: "가구/인테리어 > 인테리어소품 > 액자",
    level: 3,
    leaf: false
  },
  {
    cid: 50001122,
    name: "아로마/캔들용품",
    fullPath: "가구/인테리어 > 인테리어소품 > 아로마/캔들용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000962,
    name: "우체통",
    fullPath: "가구/인테리어 > 인테리어소품 > 우체통",
    level: 3,
    leaf: true
  },
  {
    cid: 50000963,
    name: "도어벨",
    fullPath: "가구/인테리어 > 인테리어소품 > 도어벨",
    level: 3,
    leaf: true
  },
  {
    cid: 50000964,
    name: "디자인문패",
    fullPath: "가구/인테리어 > 인테리어소품 > 디자인문패",
    level: 3,
    leaf: true
  },
  {
    cid: 50000965,
    name: "냉장고자석",
    fullPath: "가구/인테리어 > 인테리어소품 > 냉장고자석",
    level: 3,
    leaf: true
  },
  {
    cid: 50001069,
    name: "장식인형",
    fullPath: "가구/인테리어 > 인테리어소품 > 장식인형",
    level: 3,
    leaf: true
  },
  {
    cid: 50001070,
    name: "장식미니어처",
    fullPath: "가구/인테리어 > 인테리어소품 > 장식미니어처",
    level: 3,
    leaf: true
  },
  {
    cid: 50001071,
    name: "화병",
    fullPath: "가구/인테리어 > 인테리어소품 > 화병",
    level: 3,
    leaf: true
  },
  {
    cid: 50001072,
    name: "인테리어파티션",
    fullPath: "가구/인테리어 > 인테리어소품 > 인테리어파티션",
    level: 3,
    leaf: true
  },
  {
    cid: 50001073,
    name: "인테리어창문",
    fullPath: "가구/인테리어 > 인테리어소품 > 인테리어창문",
    level: 3,
    leaf: true
  },
  {
    cid: 50001074,
    name: "인터폰박스",
    fullPath: "가구/인테리어 > 인테리어소품 > 인터폰박스",
    level: 3,
    leaf: true
  },
  {
    cid: 50001075,
    name: "인테리어분수",
    fullPath: "가구/인테리어 > 인테리어소품 > 인테리어분수",
    level: 3,
    leaf: true
  },
  {
    cid: 50001076,
    name: "오르골",
    fullPath: "가구/인테리어 > 인테리어소품 > 오르골",
    level: 3,
    leaf: true
  },
  {
    cid: 50000961,
    name: "워터볼",
    fullPath: "가구/인테리어 > 인테리어소품 > 워터볼",
    level: 3,
    leaf: true
  },
  {
    cid: 50000966,
    name: "앤틱소품",
    fullPath: "가구/인테리어 > 인테리어소품 > 앤틱소품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000967,
    name: "전통공예소품",
    fullPath: "가구/인테리어 > 인테리어소품 > 전통공예소품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000968,
    name: "기타장식용품",
    fullPath: "가구/인테리어 > 인테리어소품 > 기타장식용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50006309,
    name: "미술작품",
    fullPath: "가구/인테리어 > 인테리어소품 > 미술작품",
    level: 3,
    leaf: false
  },
  {
    cid: 50016960,
    name: "패브릭포스터",
    fullPath: "가구/인테리어 > 인테리어소품 > 패브릭포스터",
    level: 3,
    leaf: true
  }
],
  50000109: [
  {
    cid: 50000969,
    name: "스프레드",
    fullPath: "가구/인테리어 > 침구단품 > 스프레드",
    level: 3,
    leaf: true
  },
  {
    cid: 50000970,
    name: "차렵이불",
    fullPath: "가구/인테리어 > 침구단품 > 차렵이불",
    level: 3,
    leaf: true
  },
  {
    cid: 50000971,
    name: "홑이불",
    fullPath: "가구/인테리어 > 침구단품 > 홑이불",
    level: 3,
    leaf: true
  },
  {
    cid: 50001125,
    name: "패드",
    fullPath: "가구/인테리어 > 침구단품 > 패드",
    level: 3,
    leaf: false
  },
  {
    cid: 50001126,
    name: "요",
    fullPath: "가구/인테리어 > 침구단품 > 요",
    level: 3,
    leaf: false
  },
  {
    cid: 50000972,
    name: "이불커버",
    fullPath: "가구/인테리어 > 침구단품 > 이불커버",
    level: 3,
    leaf: true
  },
  {
    cid: 50000973,
    name: "담요",
    fullPath: "가구/인테리어 > 침구단품 > 담요",
    level: 3,
    leaf: true
  },
  {
    cid: 50000974,
    name: "무릎담요",
    fullPath: "가구/인테리어 > 침구단품 > 무릎담요",
    level: 3,
    leaf: true
  },
  {
    cid: 50000975,
    name: "전기매트커버",
    fullPath: "가구/인테리어 > 침구단품 > 전기매트커버",
    level: 3,
    leaf: true
  },
  {
    cid: 50000976,
    name: "기타침구단품",
    fullPath: "가구/인테리어 > 침구단품 > 기타침구단품",
    level: 3,
    leaf: true
  },
  {
    cid: 50007048,
    name: "토퍼",
    fullPath: "가구/인테리어 > 침구단품 > 토퍼",
    level: 3,
    leaf: true
  },
  {
    cid: 50007049,
    name: "토퍼커버",
    fullPath: "가구/인테리어 > 침구단품 > 토퍼커버",
    level: 3,
    leaf: true
  },
  {
    cid: 50020679,
    name: "매트/침대커버",
    fullPath: "가구/인테리어 > 침구단품 > 매트/침대커버",
    level: 3,
    leaf: true
  }
],
  50000110: [
  {
    cid: 50001131,
    name: "요이불세트",
    fullPath: "가구/인테리어 > 침구세트 > 요이불세트",
    level: 3,
    leaf: false
  },
  {
    cid: 50001128,
    name: "매트커버세트",
    fullPath: "가구/인테리어 > 침구세트 > 매트커버세트",
    level: 3,
    leaf: false
  },
  {
    cid: 50001129,
    name: "이불베개세트",
    fullPath: "가구/인테리어 > 침구세트 > 이불베개세트",
    level: 3,
    leaf: false
  },
  {
    cid: 50001130,
    name: "이불패드세트",
    fullPath: "가구/인테리어 > 침구세트 > 이불패드세트",
    level: 3,
    leaf: false
  },
  {
    cid: 50000977,
    name: "한실예단세트",
    fullPath: "가구/인테리어 > 침구세트 > 한실예단세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50020659,
    name: "침대커버세트",
    fullPath: "가구/인테리어 > 침구세트 > 침대커버세트",
    level: 3,
    leaf: true
  }
],
  50000111: [
  {
    cid: 50001134,
    name: "이불솜",
    fullPath: "가구/인테리어 > 솜류 > 이불솜",
    level: 3,
    leaf: false
  },
  {
    cid: 50001132,
    name: "베개솜/속통",
    fullPath: "가구/인테리어 > 솜류 > 베개솜/속통",
    level: 3,
    leaf: false
  },
  {
    cid: 50001133,
    name: "요솜/매트솜",
    fullPath: "가구/인테리어 > 솜류 > 요솜/매트솜",
    level: 3,
    leaf: false
  },
  {
    cid: 50000979,
    name: "쿠션솜",
    fullPath: "가구/인테리어 > 솜류 > 쿠션솜",
    level: 3,
    leaf: true
  },
  {
    cid: 50000980,
    name: "방석솜",
    fullPath: "가구/인테리어 > 솜류 > 방석솜",
    level: 3,
    leaf: true
  }
],
  50000112: [
  {
    cid: 50001135,
    name: "카페트",
    fullPath: "가구/인테리어 > 카페트/러그 > 카페트",
    level: 3,
    leaf: false
  },
  {
    cid: 50000981,
    name: "러그",
    fullPath: "가구/인테리어 > 카페트/러그 > 러그",
    level: 3,
    leaf: true
  },
  {
    cid: 50000852,
    name: "쿨매트",
    fullPath: "가구/인테리어 > 카페트/러그 > 쿨매트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000983,
    name: "대자리",
    fullPath: "가구/인테리어 > 카페트/러그 > 대자리",
    level: 3,
    leaf: true
  },
  {
    cid: 50000984,
    name: "왕골자리",
    fullPath: "가구/인테리어 > 카페트/러그 > 왕골자리",
    level: 3,
    leaf: true
  },
  {
    cid: 50000982,
    name: "발매트",
    fullPath: "가구/인테리어 > 카페트/러그 > 발매트",
    level: 3,
    leaf: true
  }
],
  50000113: [
  {
    cid: 50001136,
    name: "커튼",
    fullPath: "가구/인테리어 > 커튼/블라인드 > 커튼",
    level: 3,
    leaf: false
  },
  {
    cid: 50000857,
    name: "로만셰이드",
    fullPath: "가구/인테리어 > 커튼/블라인드 > 로만셰이드",
    level: 3,
    leaf: true
  },
  {
    cid: 50000859,
    name: "블라인드",
    fullPath: "가구/인테리어 > 커튼/블라인드 > 블라인드",
    level: 3,
    leaf: true
  },
  {
    cid: 50000860,
    name: "버티컬",
    fullPath: "가구/인테리어 > 커튼/블라인드 > 버티컬",
    level: 3,
    leaf: true
  },
  {
    cid: 50000861,
    name: "롤스크린",
    fullPath: "가구/인테리어 > 커튼/블라인드 > 롤스크린",
    level: 3,
    leaf: true
  },
  {
    cid: 50000862,
    name: "바란스",
    fullPath: "가구/인테리어 > 커튼/블라인드 > 바란스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000863,
    name: "캐노피",
    fullPath: "가구/인테리어 > 커튼/블라인드 > 캐노피",
    level: 3,
    leaf: true
  },
  {
    cid: 50000866,
    name: "자바라",
    fullPath: "가구/인테리어 > 커튼/블라인드 > 자바라",
    level: 3,
    leaf: true
  },
  {
    cid: 50000867,
    name: "기타액세서리",
    fullPath: "가구/인테리어 > 커튼/블라인드 > 기타액세서리",
    level: 3,
    leaf: true
  },
  {
    cid: 50006168,
    name: "콤비블라인드",
    fullPath: "가구/인테리어 > 커튼/블라인드 > 콤비블라인드",
    level: 3,
    leaf: true
  }
],
  50000114: [
  {
    cid: 50001140,
    name: "뜨개질",
    fullPath: "가구/인테리어 > 수예 > 뜨개질",
    level: 3,
    leaf: false
  },
  {
    cid: 50001141,
    name: "자수",
    fullPath: "가구/인테리어 > 수예 > 자수",
    level: 3,
    leaf: false
  },
  {
    cid: 50001142,
    name: "퀼트/펠트",
    fullPath: "가구/인테리어 > 수예 > 퀼트/펠트",
    level: 3,
    leaf: false
  },
  {
    cid: 50000849,
    name: "원단",
    fullPath: "가구/인테리어 > 수예 > 원단",
    level: 3,
    leaf: true
  },
  {
    cid: 50000850,
    name: "수예용품/부자재",
    fullPath: "가구/인테리어 > 수예 > 수예용품/부자재",
    level: 3,
    leaf: true
  },
  {
    cid: 50000851,
    name: "기타수예",
    fullPath: "가구/인테리어 > 수예 > 기타수예",
    level: 3,
    leaf: true
  },
  {
    cid: 50006874,
    name: "보석십자수",
    fullPath: "가구/인테리어 > 수예 > 보석십자수",
    level: 3,
    leaf: true
  }
],
  50000115: [
  {
    cid: 50000854,
    name: "국내분유",
    fullPath: "출산/육아 > 분유 > 국내분유",
    level: 3,
    leaf: true
  },
  {
    cid: 50000855,
    name: "수입분유",
    fullPath: "출산/육아 > 분유 > 수입분유",
    level: 3,
    leaf: true
  },
  {
    cid: 50000856,
    name: "특수분유",
    fullPath: "출산/육아 > 분유 > 특수분유",
    level: 3,
    leaf: true
  }
],
  50000116: [
  {
    cid: 50016720,
    name: "일회용기저귀",
    fullPath: "출산/육아 > 기저귀 > 일회용기저귀",
    level: 3,
    leaf: false
  },
  {
    cid: 50016740,
    name: "수영장기저귀",
    fullPath: "출산/육아 > 기저귀 > 수영장기저귀",
    level: 3,
    leaf: true
  },
  {
    cid: 50016760,
    name: "천기저귀",
    fullPath: "출산/육아 > 기저귀 > 천기저귀",
    level: 3,
    leaf: true
  },
  {
    cid: 50016780,
    name: "기저귀커버/기저귀밴드",
    fullPath: "출산/육아 > 기저귀 > 기저귀커버/기저귀밴드",
    level: 3,
    leaf: true
  }
],
  50000117: [
  {
    cid: 50005401,
    name: "캡형",
    fullPath: "출산/육아 > 물티슈 > 캡형",
    level: 3,
    leaf: true
  },
  {
    cid: 50005402,
    name: "리필형",
    fullPath: "출산/육아 > 물티슈 > 리필형",
    level: 3,
    leaf: true
  },
  {
    cid: 50005403,
    name: "휴대용",
    fullPath: "출산/육아 > 물티슈 > 휴대용",
    level: 3,
    leaf: true
  },
  {
    cid: 50005405,
    name: "혼합세트",
    fullPath: "출산/육아 > 물티슈 > 혼합세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50009620,
    name: "기능성물티슈",
    fullPath: "출산/육아 > 물티슈 > 기능성물티슈",
    level: 3,
    leaf: false
  },
  {
    cid: 50009680,
    name: "코인티슈/업소용",
    fullPath: "출산/육아 > 물티슈 > 코인티슈/업소용",
    level: 3,
    leaf: true
  },
  {
    cid: 50009700,
    name: "물티슈워머/물티슈캡",
    fullPath: "출산/육아 > 물티슈 > 물티슈워머/물티슈캡",
    level: 3,
    leaf: true
  }
],
  50000118: [
  {
    cid: 50009344,
    name: "가공이유식",
    fullPath: "출산/육아 > 이유식 > 가공이유식",
    level: 3,
    leaf: true
  },
  {
    cid: 50009720,
    name: "수제이유식",
    fullPath: "출산/육아 > 이유식 > 수제이유식",
    level: 3,
    leaf: true
  },
  {
    cid: 50009345,
    name: "이유식재료",
    fullPath: "출산/육아 > 이유식 > 이유식재료",
    level: 3,
    leaf: true
  }
],
  50000119: [
  {
    cid: 50000738,
    name: "유아두유",
    fullPath: "출산/육아 > 아기간식 > 유아두유",
    level: 3,
    leaf: true
  },
  {
    cid: 50000739,
    name: "유아과자",
    fullPath: "출산/육아 > 아기간식 > 유아과자",
    level: 3,
    leaf: true
  },
  {
    cid: 50005467,
    name: "유아유제품",
    fullPath: "출산/육아 > 아기간식 > 유아유제품",
    level: 3,
    leaf: true
  },
  {
    cid: 50005468,
    name: "유아음료",
    fullPath: "출산/육아 > 아기간식 > 유아음료",
    level: 3,
    leaf: true
  }
],
  50000120: [
  {
    cid: 50000743,
    name: "젖병",
    fullPath: "출산/육아 > 수유용품 > 젖병",
    level: 3,
    leaf: true
  },
  {
    cid: 50000745,
    name: "젖꼭지",
    fullPath: "출산/육아 > 수유용품 > 젖꼭지",
    level: 3,
    leaf: true
  },
  {
    cid: 50000746,
    name: "노리개젖꼭지",
    fullPath: "출산/육아 > 수유용품 > 노리개젖꼭지",
    level: 3,
    leaf: true
  },
  {
    cid: 50000673,
    name: "유축기",
    fullPath: "출산/육아 > 수유용품 > 유축기",
    level: 3,
    leaf: true
  },
  {
    cid: 50000674,
    name: "분유케이스",
    fullPath: "출산/육아 > 수유용품 > 분유케이스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000675,
    name: "보틀워머",
    fullPath: "출산/육아 > 수유용품 > 보틀워머",
    level: 3,
    leaf: true
  },
  {
    cid: 50000677,
    name: "모유보관비닐팩",
    fullPath: "출산/육아 > 수유용품 > 모유보관비닐팩",
    level: 3,
    leaf: true
  },
  {
    cid: 50000679,
    name: "수유쿠션/시트",
    fullPath: "출산/육아 > 수유용품 > 수유쿠션/시트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000680,
    name: "수유가리개",
    fullPath: "출산/육아 > 수유용품 > 수유가리개",
    level: 3,
    leaf: true
  },
  {
    cid: 50000681,
    name: "수유패드",
    fullPath: "출산/육아 > 수유용품 > 수유패드",
    level: 3,
    leaf: true
  },
  {
    cid: 50000684,
    name: "유두케어/젖몸살용품",
    fullPath: "출산/육아 > 수유용품 > 유두케어/젖몸살용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000685,
    name: "기타수유용품",
    fullPath: "출산/육아 > 수유용품 > 기타수유용품",
    level: 3,
    leaf: true
  }
],
  50000121: [
  {
    cid: 50000686,
    name: "초경량/휴대용",
    fullPath: "출산/육아 > 유모차 > 초경량/휴대용",
    level: 3,
    leaf: true
  },
  {
    cid: 50000687,
    name: "절충형/디럭스형",
    fullPath: "출산/육아 > 유모차 > 절충형/디럭스형",
    level: 3,
    leaf: true
  },
  {
    cid: 50005406,
    name: "쌍둥이용",
    fullPath: "출산/육아 > 유모차 > 쌍둥이용",
    level: 3,
    leaf: true
  },
  {
    cid: 50005407,
    name: "유모차/카시트 세트",
    fullPath: "출산/육아 > 유모차 > 유모차/카시트 세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001147,
    name: "유모차용품",
    fullPath: "출산/육아 > 유모차 > 유모차용품",
    level: 3,
    leaf: false
  }
],
  50000122: [
  {
    cid: 50005408,
    name: "신생아카시트",
    fullPath: "출산/육아 > 카시트 > 신생아카시트",
    level: 3,
    leaf: true
  },
  {
    cid: 50005409,
    name: "영유아카시트",
    fullPath: "출산/육아 > 카시트 > 영유아카시트",
    level: 3,
    leaf: true
  },
  {
    cid: 50005410,
    name: "주니어카시트",
    fullPath: "출산/육아 > 카시트 > 주니어카시트",
    level: 3,
    leaf: true
  },
  {
    cid: 50016640,
    name: "부스터카시트",
    fullPath: "출산/육아 > 카시트 > 부스터카시트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001148,
    name: "카시트용품",
    fullPath: "출산/육아 > 카시트 > 카시트용품",
    level: 3,
    leaf: false
  }
],
  50000123: [
  {
    cid: 50000692,
    name: "아기띠",
    fullPath: "출산/육아 > 외출용품 > 아기띠",
    level: 3,
    leaf: true
  },
  {
    cid: 50000693,
    name: "아기띠쿨러/패드",
    fullPath: "출산/육아 > 외출용품 > 아기띠쿨러/패드",
    level: 3,
    leaf: true
  },
  {
    cid: 50000694,
    name: "아기띠침받이",
    fullPath: "출산/육아 > 외출용품 > 아기띠침받이",
    level: 3,
    leaf: true
  },
  {
    cid: 50000695,
    name: "기저귀가방",
    fullPath: "출산/육아 > 외출용품 > 기저귀가방",
    level: 3,
    leaf: true
  },
  {
    cid: 50000697,
    name: "힙시트",
    fullPath: "출산/육아 > 외출용품 > 힙시트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000698,
    name: "포대기/처네",
    fullPath: "출산/육아 > 외출용품 > 포대기/처네",
    level: 3,
    leaf: true
  },
  {
    cid: 50000702,
    name: "망토/워머",
    fullPath: "출산/육아 > 외출용품 > 망토/워머",
    level: 3,
    leaf: true
  },
  {
    cid: 50000701,
    name: "슬링",
    fullPath: "출산/육아 > 외출용품 > 슬링",
    level: 3,
    leaf: true
  },
  {
    cid: 50000703,
    name: "미아방지용품",
    fullPath: "출산/육아 > 외출용품 > 미아방지용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000704,
    name: "기타외출용품",
    fullPath: "출산/육아 > 외출용품 > 기타외출용품",
    level: 3,
    leaf: true
  }
],
  50000124: [
  {
    cid: 50000705,
    name: "유아욕조",
    fullPath: "출산/육아 > 목욕용품 > 유아욕조",
    level: 3,
    leaf: true
  },
  {
    cid: 50000706,
    name: "유아목욕의자",
    fullPath: "출산/육아 > 목욕용품 > 유아목욕의자",
    level: 3,
    leaf: true
  },
  {
    cid: 50000707,
    name: "유아목욕가운",
    fullPath: "출산/육아 > 목욕용품 > 유아목욕가운",
    level: 3,
    leaf: true
  },
  {
    cid: 50000708,
    name: "유아목욕타월",
    fullPath: "출산/육아 > 목욕용품 > 유아목욕타월",
    level: 3,
    leaf: true
  },
  {
    cid: 50000709,
    name: "유아샴푸캡",
    fullPath: "출산/육아 > 목욕용품 > 유아샴푸캡",
    level: 3,
    leaf: true
  },
  {
    cid: 50000710,
    name: "유아목욕장갑/스펀지",
    fullPath: "출산/육아 > 목욕용품 > 유아목욕장갑/스펀지",
    level: 3,
    leaf: true
  },
  {
    cid: 50000711,
    name: "유아세면대/수도꼭지",
    fullPath: "출산/육아 > 목욕용품 > 유아세면대/수도꼭지",
    level: 3,
    leaf: true
  },
  {
    cid: 50000713,
    name: "유아욕탕온도계",
    fullPath: "출산/육아 > 목욕용품 > 유아욕탕온도계",
    level: 3,
    leaf: true
  },
  {
    cid: 50000714,
    name: "유아목욕장난감",
    fullPath: "출산/육아 > 목욕용품 > 유아목욕장난감",
    level: 3,
    leaf: true
  },
  {
    cid: 50000715,
    name: "욕실정리망/정리함",
    fullPath: "출산/육아 > 목욕용품 > 욕실정리망/정리함",
    level: 3,
    leaf: true
  },
  {
    cid: 50000716,
    name: "기타목욕용품",
    fullPath: "출산/육아 > 목욕용품 > 기타목욕용품",
    level: 3,
    leaf: true
  }
],
  50000125: [
  {
    cid: 50000717,
    name: "기저귀크림",
    fullPath: "출산/육아 > 스킨/바디용품 > 기저귀크림",
    level: 3,
    leaf: true
  },
  {
    cid: 50000718,
    name: "유아크림",
    fullPath: "출산/육아 > 스킨/바디용품 > 유아크림",
    level: 3,
    leaf: true
  },
  {
    cid: 50000719,
    name: "유아로션",
    fullPath: "출산/육아 > 스킨/바디용품 > 유아로션",
    level: 3,
    leaf: true
  },
  {
    cid: 50015380,
    name: "유아선케어",
    fullPath: "출산/육아 > 스킨/바디용품 > 유아선케어",
    level: 3,
    leaf: false
  },
  {
    cid: 50000720,
    name: "유아오일",
    fullPath: "출산/육아 > 스킨/바디용품 > 유아오일",
    level: 3,
    leaf: true
  },
  {
    cid: 50000722,
    name: "유아파우더",
    fullPath: "출산/육아 > 스킨/바디용품 > 유아파우더",
    level: 3,
    leaf: true
  },
  {
    cid: 50000723,
    name: "유아립케어",
    fullPath: "출산/육아 > 스킨/바디용품 > 유아립케어",
    level: 3,
    leaf: true
  },
  {
    cid: 50000724,
    name: "유아비누",
    fullPath: "출산/육아 > 스킨/바디용품 > 유아비누",
    level: 3,
    leaf: true
  },
  {
    cid: 50000726,
    name: "유아바스/샴푸",
    fullPath: "출산/육아 > 스킨/바디용품 > 유아바스/샴푸",
    level: 3,
    leaf: true
  },
  {
    cid: 50000727,
    name: "유아입욕제",
    fullPath: "출산/육아 > 스킨/바디용품 > 유아입욕제",
    level: 3,
    leaf: true
  },
  {
    cid: 50005411,
    name: "혼합세트",
    fullPath: "출산/육아 > 스킨/바디용품 > 혼합세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50006148,
    name: "색조화장품",
    fullPath: "출산/육아 > 스킨/바디용품 > 색조화장품",
    level: 3,
    leaf: true
  },
  {
    cid: 50007108,
    name: "어린이네일케어",
    fullPath: "출산/육아 > 스킨/바디용품 > 어린이네일케어",
    level: 3,
    leaf: true
  },
  {
    cid: 50000728,
    name: "기타스킨/바디용품",
    fullPath: "출산/육아 > 스킨/바디용품 > 기타스킨/바디용품",
    level: 3,
    leaf: true
  }
],
  50000126: [
  {
    cid: 50000601,
    name: "유아변기/커버",
    fullPath: "출산/육아 > 위생/건강용품 > 유아변기/커버",
    level: 3,
    leaf: true
  },
  {
    cid: 50015720,
    name: "유아마스크",
    fullPath: "출산/육아 > 위생/건강용품 > 유아마스크",
    level: 3,
    leaf: false
  },
  {
    cid: 50000603,
    name: "유아면봉",
    fullPath: "출산/육아 > 위생/건강용품 > 유아면봉",
    level: 3,
    leaf: true
  },
  {
    cid: 50000604,
    name: "유아손톱가위/손톱깎이",
    fullPath: "출산/육아 > 위생/건강용품 > 유아손톱가위/손톱깎이",
    level: 3,
    leaf: true
  },
  {
    cid: 50000606,
    name: "유아손세정제",
    fullPath: "출산/육아 > 위생/건강용품 > 유아손세정제",
    level: 3,
    leaf: true
  },
  {
    cid: 50000610,
    name: "기저귀휴지통",
    fullPath: "출산/육아 > 위생/건강용품 > 기저귀휴지통",
    level: 3,
    leaf: true
  },
  {
    cid: 50000611,
    name: "분통/파우더통",
    fullPath: "출산/육아 > 위생/건강용품 > 분통/파우더통",
    level: 3,
    leaf: true
  },
  {
    cid: 50000612,
    name: "유아이발용품",
    fullPath: "출산/육아 > 위생/건강용품 > 유아이발용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000613,
    name: "제균스프레이",
    fullPath: "출산/육아 > 위생/건강용품 > 제균스프레이",
    level: 3,
    leaf: true
  },
  {
    cid: 50000614,
    name: "콧물흡입기",
    fullPath: "출산/육아 > 위생/건강용품 > 콧물흡입기",
    level: 3,
    leaf: true
  },
  {
    cid: 50000615,
    name: "키재기",
    fullPath: "출산/육아 > 위생/건강용품 > 키재기",
    level: 3,
    leaf: true
  },
  {
    cid: 50000616,
    name: "투약기",
    fullPath: "출산/육아 > 위생/건강용품 > 투약기",
    level: 3,
    leaf: true
  },
  {
    cid: 50000617,
    name: "해열시트",
    fullPath: "출산/육아 > 위생/건강용품 > 해열시트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000624,
    name: "유아항균팩",
    fullPath: "출산/육아 > 위생/건강용품 > 유아항균팩",
    level: 3,
    leaf: true
  }
],
  50000127: [
  {
    cid: 50000619,
    name: "유아칫솔",
    fullPath: "출산/육아 > 구강청결용품 > 유아칫솔",
    level: 3,
    leaf: true
  },
  {
    cid: 50000620,
    name: "유아치약",
    fullPath: "출산/육아 > 구강청결용품 > 유아치약",
    level: 3,
    leaf: true
  },
  {
    cid: 50000621,
    name: "유아구강세정제",
    fullPath: "출산/육아 > 구강청결용품 > 유아구강세정제",
    level: 3,
    leaf: true
  },
  {
    cid: 50000622,
    name: "유아구강청결티슈",
    fullPath: "출산/육아 > 구강청결용품 > 유아구강청결티슈",
    level: 3,
    leaf: true
  },
  {
    cid: 50000623,
    name: "손가락빨기방지용품",
    fullPath: "출산/육아 > 구강청결용품 > 손가락빨기방지용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000625,
    name: "기타구강청결용품",
    fullPath: "출산/육아 > 구강청결용품 > 기타구강청결용품",
    level: 3,
    leaf: true
  }
],
  50000128: [
  {
    cid: 50000626,
    name: "유아세탁세제",
    fullPath: "출산/육아 > 유아세제 > 유아세탁세제",
    level: 3,
    leaf: true
  },
  {
    cid: 50000627,
    name: "유아유연제",
    fullPath: "출산/육아 > 유아세제 > 유아유연제",
    level: 3,
    leaf: true
  },
  {
    cid: 50000628,
    name: "유아세탁비누",
    fullPath: "출산/육아 > 유아세제 > 유아세탁비누",
    level: 3,
    leaf: true
  },
  {
    cid: 50005412,
    name: "유아표백제/얼룩제거제",
    fullPath: "출산/육아 > 유아세제 > 유아표백제/얼룩제거제",
    level: 3,
    leaf: true
  },
  {
    cid: 50005413,
    name: "혼합세트",
    fullPath: "출산/육아 > 유아세제 > 혼합세트",
    level: 3,
    leaf: true
  }
],
  50000129: [
  {
    cid: 50000629,
    name: "젖병소독기",
    fullPath: "출산/육아 > 소독/살균용품 > 젖병소독기",
    level: 3,
    leaf: true
  },
  {
    cid: 50016161,
    name: "젖병소독기용품",
    fullPath: "출산/육아 > 소독/살균용품 > 젖병소독기용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000630,
    name: "젖병세정제",
    fullPath: "출산/육아 > 소독/살균용품 > 젖병세정제",
    level: 3,
    leaf: true
  },
  {
    cid: 50000631,
    name: "젖병솔",
    fullPath: "출산/육아 > 소독/살균용품 > 젖병솔",
    level: 3,
    leaf: true
  },
  {
    cid: 50000632,
    name: "젖병집게",
    fullPath: "출산/육아 > 소독/살균용품 > 젖병집게",
    level: 3,
    leaf: true
  },
  {
    cid: 50000633,
    name: "젖병건조대",
    fullPath: "출산/육아 > 소독/살균용품 > 젖병건조대",
    level: 3,
    leaf: true
  },
  {
    cid: 50000634,
    name: "장난감소독기",
    fullPath: "출산/육아 > 소독/살균용품 > 장난감소독기",
    level: 3,
    leaf: true
  }
],
  50000130: [
  {
    cid: 50016540,
    name: "놀이방매트",
    fullPath: "출산/육아 > 매트/안전용품 > 놀이방매트",
    level: 3,
    leaf: false
  },
  {
    cid: 50000576,
    name: "안전문",
    fullPath: "출산/육아 > 매트/안전용품 > 안전문",
    level: 3,
    leaf: true
  },
  {
    cid: 50000577,
    name: "모서리보호대",
    fullPath: "출산/육아 > 매트/안전용품 > 모서리보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50000578,
    name: "머리보호대",
    fullPath: "출산/육아 > 매트/안전용품 > 머리보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50000579,
    name: "무릎보호대",
    fullPath: "출산/육아 > 매트/안전용품 > 무릎보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50000580,
    name: "문닫힘방지",
    fullPath: "출산/육아 > 매트/안전용품 > 문닫힘방지",
    level: 3,
    leaf: true
  },
  {
    cid: 50000582,
    name: "디딤대",
    fullPath: "출산/육아 > 매트/안전용품 > 디딤대",
    level: 3,
    leaf: true
  },
  {
    cid: 50000583,
    name: "모기밴드/퇴치용품",
    fullPath: "출산/육아 > 매트/안전용품 > 모기밴드/퇴치용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000584,
    name: "안전잠금장치",
    fullPath: "출산/육아 > 매트/안전용품 > 안전잠금장치",
    level: 3,
    leaf: true
  },
  {
    cid: 50000586,
    name: "콘센트안전커버",
    fullPath: "출산/육아 > 매트/안전용품 > 콘센트안전커버",
    level: 3,
    leaf: true
  }
],
  50000131: [
  {
    cid: 50000593,
    name: "유아이유식의자",
    fullPath: "출산/육아 > 유아가구 > 유아이유식의자",
    level: 3,
    leaf: true
  },
  {
    cid: 50000587,
    name: "유아침대",
    fullPath: "출산/육아 > 유아가구 > 유아침대",
    level: 3,
    leaf: true
  },
  {
    cid: 50000589,
    name: "유아책상",
    fullPath: "출산/육아 > 유아가구 > 유아책상",
    level: 3,
    leaf: true
  },
  {
    cid: 50000590,
    name: "유아공부상",
    fullPath: "출산/육아 > 유아가구 > 유아공부상",
    level: 3,
    leaf: true
  },
  {
    cid: 50000591,
    name: "유아의자",
    fullPath: "출산/육아 > 유아가구 > 유아의자",
    level: 3,
    leaf: true
  },
  {
    cid: 50000592,
    name: "유아소파",
    fullPath: "출산/육아 > 유아가구 > 유아소파",
    level: 3,
    leaf: true
  },
  {
    cid: 50000598,
    name: "유아옷걸이",
    fullPath: "출산/육아 > 유아가구 > 유아옷걸이",
    level: 3,
    leaf: true
  },
  {
    cid: 50000600,
    name: "장난감정리함",
    fullPath: "출산/육아 > 유아가구 > 장난감정리함",
    level: 3,
    leaf: true
  },
  {
    cid: 50000473,
    name: "기저귀정리함",
    fullPath: "출산/육아 > 유아가구 > 기저귀정리함",
    level: 3,
    leaf: true
  },
  {
    cid: 50000476,
    name: "기타유아가구",
    fullPath: "출산/육아 > 유아가구 > 기타유아가구",
    level: 3,
    leaf: true
  }
],
  50000132: [
  {
    cid: 50000477,
    name: "유아컵",
    fullPath: "출산/육아 > 이유식용품 > 유아컵",
    level: 3,
    leaf: true
  },
  {
    cid: 50000478,
    name: "유아식기",
    fullPath: "출산/육아 > 이유식용품 > 유아식기",
    level: 3,
    leaf: true
  },
  {
    cid: 50000479,
    name: "유아스푼/포크",
    fullPath: "출산/육아 > 이유식용품 > 유아스푼/포크",
    level: 3,
    leaf: true
  },
  {
    cid: 50000481,
    name: "연습용젓가락",
    fullPath: "출산/육아 > 이유식용품 > 연습용젓가락",
    level: 3,
    leaf: true
  },
  {
    cid: 50000482,
    name: "턱받이",
    fullPath: "출산/육아 > 이유식용품 > 턱받이",
    level: 3,
    leaf: true
  },
  {
    cid: 50000483,
    name: "조리기",
    fullPath: "출산/육아 > 이유식용품 > 조리기",
    level: 3,
    leaf: true
  },
  {
    cid: 50000485,
    name: "과즙망",
    fullPath: "출산/육아 > 이유식용품 > 과즙망",
    level: 3,
    leaf: true
  },
  {
    cid: 50000486,
    name: "기타이유식용품",
    fullPath: "출산/육아 > 이유식용품 > 기타이유식용품",
    level: 3,
    leaf: true
  }
],
  50000133: [
  {
    cid: 50000487,
    name: "수유복",
    fullPath: "출산/육아 > 임부복 > 수유복",
    level: 3,
    leaf: true
  },
  {
    cid: 50000488,
    name: "원피스",
    fullPath: "출산/육아 > 임부복 > 원피스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000496,
    name: "바지",
    fullPath: "출산/육아 > 임부복 > 바지",
    level: 3,
    leaf: true
  },
  {
    cid: 50000497,
    name: "청바지",
    fullPath: "출산/육아 > 임부복 > 청바지",
    level: 3,
    leaf: true
  },
  {
    cid: 50000498,
    name: "트레이닝복/요가복",
    fullPath: "출산/육아 > 임부복 > 트레이닝복/요가복",
    level: 3,
    leaf: true
  },
  {
    cid: 50000499,
    name: "스커트",
    fullPath: "출산/육아 > 임부복 > 스커트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000500,
    name: "스타킹",
    fullPath: "출산/육아 > 임부복 > 스타킹",
    level: 3,
    leaf: true
  },
  {
    cid: 50000501,
    name: "레깅스",
    fullPath: "출산/육아 > 임부복 > 레깅스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000502,
    name: "임부용수영복",
    fullPath: "출산/육아 > 임부복 > 임부용수영복",
    level: 3,
    leaf: true
  },
  {
    cid: 50001149,
    name: "임부속옷",
    fullPath: "출산/육아 > 임부복 > 임부속옷",
    level: 3,
    leaf: false
  }
],
  50000134: [
  {
    cid: 50000507,
    name: "임산부화장품",
    fullPath: "출산/육아 > 임산부용품 > 임산부화장품",
    level: 3,
    leaf: true
  },
  {
    cid: 50006841,
    name: "모유수유차",
    fullPath: "출산/육아 > 임산부용품 > 모유수유차",
    level: 3,
    leaf: true
  },
  {
    cid: 50000505,
    name: "전자파차단앞치마",
    fullPath: "출산/육아 > 임산부용품 > 전자파차단앞치마",
    level: 3,
    leaf: true
  },
  {
    cid: 50000503,
    name: "산모방석",
    fullPath: "출산/육아 > 임산부용품 > 산모방석",
    level: 3,
    leaf: true
  },
  {
    cid: 50000508,
    name: "임산부보호대",
    fullPath: "출산/육아 > 임산부용품 > 임산부보호대",
    level: 3,
    leaf: true
  },
  {
    cid: 50000276,
    name: "임산부바디필로우",
    fullPath: "출산/육아 > 임산부용품 > 임산부바디필로우",
    level: 3,
    leaf: true
  },
  {
    cid: 50001150,
    name: "태교용품",
    fullPath: "출산/육아 > 임산부용품 > 태교용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000277,
    name: "기타임산부용품",
    fullPath: "출산/육아 > 임산부용품 > 기타임산부용품",
    level: 3,
    leaf: true
  }
],
  50000135: [
  {
    cid: 50000509,
    name: "속싸개",
    fullPath: "출산/육아 > 유아침구 > 속싸개",
    level: 3,
    leaf: true
  },
  {
    cid: 50000510,
    name: "겉싸개",
    fullPath: "출산/육아 > 유아침구 > 겉싸개",
    level: 3,
    leaf: true
  },
  {
    cid: 50005304,
    name: "유아베개",
    fullPath: "출산/육아 > 유아침구 > 유아베개",
    level: 3,
    leaf: true
  },
  {
    cid: 50005305,
    name: "낮잠이불",
    fullPath: "출산/육아 > 유아침구 > 낮잠이불",
    level: 3,
    leaf: true
  },
  {
    cid: 50000512,
    name: "아기이불/요/패드",
    fullPath: "출산/육아 > 유아침구 > 아기이불/요/패드",
    level: 3,
    leaf: true
  },
  {
    cid: 50000514,
    name: "방수요",
    fullPath: "출산/육아 > 유아침구 > 방수요",
    level: 3,
    leaf: true
  },
  {
    cid: 50000516,
    name: "DIY 아기용품",
    fullPath: "출산/육아 > 유아침구 > DIY 아기용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000513,
    name: "보낭/슬리핑백",
    fullPath: "출산/육아 > 유아침구 > 보낭/슬리핑백",
    level: 3,
    leaf: true
  },
  {
    cid: 50000517,
    name: "기타유아침구",
    fullPath: "출산/육아 > 유아침구 > 기타유아침구",
    level: 3,
    leaf: true
  }
],
  50000136: [
  {
    cid: 50006990,
    name: "셀프촬영",
    fullPath: "출산/육아 > 출산/돌기념품 > 셀프촬영",
    level: 3,
    leaf: false
  },
  {
    cid: 50006993,
    name: "돌잔치용품",
    fullPath: "출산/육아 > 출산/돌기념품 > 돌잔치용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000518,
    name: "기저귀케이크",
    fullPath: "출산/육아 > 출산/돌기념품 > 기저귀케이크",
    level: 3,
    leaf: true
  },
  {
    cid: 50006988,
    name: "유치보관함",
    fullPath: "출산/육아 > 출산/돌기념품 > 유치보관함",
    level: 3,
    leaf: true
  },
  {
    cid: 50000519,
    name: "탯줄보관함",
    fullPath: "출산/육아 > 출산/돌기념품 > 탯줄보관함",
    level: 3,
    leaf: true
  },
  {
    cid: 50000520,
    name: "손발도장",
    fullPath: "출산/육아 > 출산/돌기념품 > 손발도장",
    level: 3,
    leaf: true
  },
  {
    cid: 50000521,
    name: "탯줄도장",
    fullPath: "출산/육아 > 출산/돌기념품 > 탯줄도장",
    level: 3,
    leaf: true
  },
  {
    cid: 50006989,
    name: "성장카드",
    fullPath: "출산/육아 > 출산/돌기념품 > 성장카드",
    level: 3,
    leaf: true
  },
  {
    cid: 50000522,
    name: "성장앨범/액자",
    fullPath: "출산/육아 > 출산/돌기념품 > 성장앨범/액자",
    level: 3,
    leaf: true
  },
  {
    cid: 50000524,
    name: "기타출산/돌기념품",
    fullPath: "출산/육아 > 출산/돌기념품 > 기타출산/돌기념품",
    level: 3,
    leaf: true
  }
],
  50000137: [
  {
    cid: 50000526,
    name: "레그/스패츠",
    fullPath: "출산/육아 > 신생아의류 > 레그/스패츠",
    level: 3,
    leaf: true
  },
  {
    cid: 50000528,
    name: "바디슈트/롬퍼",
    fullPath: "출산/육아 > 신생아의류 > 바디슈트/롬퍼",
    level: 3,
    leaf: true
  },
  {
    cid: 50000529,
    name: "배냇저고리",
    fullPath: "출산/육아 > 신생아의류 > 배냇저고리",
    level: 3,
    leaf: true
  },
  {
    cid: 50000530,
    name: "손/발싸개",
    fullPath: "출산/육아 > 신생아의류 > 손/발싸개",
    level: 3,
    leaf: true
  },
  {
    cid: 50000531,
    name: "신생아모자/보닛",
    fullPath: "출산/육아 > 신생아의류 > 신생아모자/보닛",
    level: 3,
    leaf: true
  },
  {
    cid: 50000532,
    name: "우주복",
    fullPath: "출산/육아 > 신생아의류 > 우주복",
    level: 3,
    leaf: true
  },
  {
    cid: 50005306,
    name: "가제손수건",
    fullPath: "출산/육아 > 신생아의류 > 가제손수건",
    level: 3,
    leaf: true
  },
  {
    cid: 50005307,
    name: "세트",
    fullPath: "출산/육아 > 신생아의류 > 세트",
    level: 3,
    leaf: true
  }
],
  50000138: [
  {
    cid: 50000535,
    name: "티셔츠",
    fullPath: "출산/육아 > 유아동의류 > 티셔츠",
    level: 3,
    leaf: true
  },
  {
    cid: 50000536,
    name: "블라우스",
    fullPath: "출산/육아 > 유아동의류 > 블라우스",
    level: 3,
    leaf: true
  },
  {
    cid: 50007114,
    name: "셔츠/남방",
    fullPath: "출산/육아 > 유아동의류 > 셔츠/남방",
    level: 3,
    leaf: true
  },
  {
    cid: 50000270,
    name: "조끼",
    fullPath: "출산/육아 > 유아동의류 > 조끼",
    level: 3,
    leaf: true
  },
  {
    cid: 50000409,
    name: "니트/스웨터",
    fullPath: "출산/육아 > 유아동의류 > 니트/스웨터",
    level: 3,
    leaf: true
  },
  {
    cid: 50000410,
    name: "카디건",
    fullPath: "출산/육아 > 유아동의류 > 카디건",
    level: 3,
    leaf: true
  },
  {
    cid: 50000414,
    name: "원피스",
    fullPath: "출산/육아 > 유아동의류 > 원피스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000271,
    name: "상하세트",
    fullPath: "출산/육아 > 유아동의류 > 상하세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000418,
    name: "재킷",
    fullPath: "출산/육아 > 유아동의류 > 재킷",
    level: 3,
    leaf: true
  },
  {
    cid: 50000419,
    name: "점퍼",
    fullPath: "출산/육아 > 유아동의류 > 점퍼",
    level: 3,
    leaf: true
  },
  {
    cid: 50000420,
    name: "코트",
    fullPath: "출산/육아 > 유아동의류 > 코트",
    level: 3,
    leaf: true
  },
  {
    cid: 50007116,
    name: "레깅스",
    fullPath: "출산/육아 > 유아동의류 > 레깅스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000411,
    name: "바지",
    fullPath: "출산/육아 > 유아동의류 > 바지",
    level: 3,
    leaf: true
  },
  {
    cid: 50007115,
    name: "청바지",
    fullPath: "출산/육아 > 유아동의류 > 청바지",
    level: 3,
    leaf: true
  },
  {
    cid: 50000412,
    name: "스커트",
    fullPath: "출산/육아 > 유아동의류 > 스커트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000416,
    name: "트레이닝복",
    fullPath: "출산/육아 > 유아동의류 > 트레이닝복",
    level: 3,
    leaf: true
  },
  {
    cid: 50000415,
    name: "정장",
    fullPath: "출산/육아 > 유아동의류 > 정장",
    level: 3,
    leaf: true
  },
  {
    cid: 50000413,
    name: "드레스",
    fullPath: "출산/육아 > 유아동의류 > 드레스",
    level: 3,
    leaf: true
  },
  {
    cid: 50007123,
    name: "공주드레스",
    fullPath: "출산/육아 > 유아동의류 > 공주드레스",
    level: 3,
    leaf: true
  },
  {
    cid: 50007117,
    name: "점프슈트",
    fullPath: "출산/육아 > 유아동의류 > 점프슈트",
    level: 3,
    leaf: true
  },
  {
    cid: 50007124,
    name: "패밀리룩",
    fullPath: "출산/육아 > 유아동의류 > 패밀리룩",
    level: 3,
    leaf: true
  },
  {
    cid: 50007125,
    name: "레인코트",
    fullPath: "출산/육아 > 유아동의류 > 레인코트",
    level: 3,
    leaf: true
  },
  {
    cid: 50007118,
    name: "교복",
    fullPath: "출산/육아 > 유아동의류 > 교복",
    level: 3,
    leaf: true
  },
  {
    cid: 50007119,
    name: "한복",
    fullPath: "출산/육아 > 유아동의류 > 한복",
    level: 3,
    leaf: true
  },
  {
    cid: 50007120,
    name: "스키복",
    fullPath: "출산/육아 > 유아동의류 > 스키복",
    level: 3,
    leaf: true
  },
  {
    cid: 50007121,
    name: "댄스복",
    fullPath: "출산/육아 > 유아동의류 > 댄스복",
    level: 3,
    leaf: true
  },
  {
    cid: 50016680,
    name: "발레복",
    fullPath: "출산/육아 > 유아동의류 > 발레복",
    level: 3,
    leaf: true
  },
  {
    cid: 50007122,
    name: "코스튬의상",
    fullPath: "출산/육아 > 유아동의류 > 코스튬의상",
    level: 3,
    leaf: true
  }
],
  50000139: [
  {
    cid: 50001152,
    name: "신발",
    fullPath: "출산/육아 > 유아동잡화 > 신발",
    level: 3,
    leaf: false
  },
  {
    cid: 50001153,
    name: "가방",
    fullPath: "출산/육아 > 유아동잡화 > 가방",
    level: 3,
    leaf: false
  },
  {
    cid: 50000348,
    name: "지갑",
    fullPath: "출산/육아 > 유아동잡화 > 지갑",
    level: 3,
    leaf: true
  },
  {
    cid: 50000349,
    name: "모자",
    fullPath: "출산/육아 > 유아동잡화 > 모자",
    level: 3,
    leaf: true
  },
  {
    cid: 50000223,
    name: "양말",
    fullPath: "출산/육아 > 유아동잡화 > 양말",
    level: 3,
    leaf: true
  },
  {
    cid: 50007126,
    name: "타이즈",
    fullPath: "출산/육아 > 유아동잡화 > 타이즈",
    level: 3,
    leaf: true
  },
  {
    cid: 50000350,
    name: "장갑",
    fullPath: "출산/육아 > 유아동잡화 > 장갑",
    level: 3,
    leaf: true
  },
  {
    cid: 50000351,
    name: "귀마개",
    fullPath: "출산/육아 > 유아동잡화 > 귀마개",
    level: 3,
    leaf: true
  },
  {
    cid: 50000352,
    name: "목도리",
    fullPath: "출산/육아 > 유아동잡화 > 목도리",
    level: 3,
    leaf: true
  },
  {
    cid: 50000353,
    name: "스카프",
    fullPath: "출산/육아 > 유아동잡화 > 스카프",
    level: 3,
    leaf: true
  },
  {
    cid: 50000356,
    name: "앞치마/토시/두건",
    fullPath: "출산/육아 > 유아동잡화 > 앞치마/토시/두건",
    level: 3,
    leaf: true
  },
  {
    cid: 50000357,
    name: "넥타이",
    fullPath: "출산/육아 > 유아동잡화 > 넥타이",
    level: 3,
    leaf: true
  },
  {
    cid: 50000358,
    name: "선글라스",
    fullPath: "출산/육아 > 유아동잡화 > 선글라스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000227,
    name: "벨트/멜빵",
    fullPath: "출산/육아 > 유아동잡화 > 벨트/멜빵",
    level: 3,
    leaf: true
  },
  {
    cid: 50000226,
    name: "우산",
    fullPath: "출산/육아 > 유아동잡화 > 우산",
    level: 3,
    leaf: true
  },
  {
    cid: 50007110,
    name: "헤어액세서리",
    fullPath: "출산/육아 > 유아동잡화 > 헤어액세서리",
    level: 3,
    leaf: false
  },
  {
    cid: 50016660,
    name: "한복소품",
    fullPath: "출산/육아 > 유아동잡화 > 한복소품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000269,
    name: "기타유아동잡화",
    fullPath: "출산/육아 > 유아동잡화 > 기타유아동잡화",
    level: 3,
    leaf: true
  }
],
  50000140: [
  {
    cid: 50000361,
    name: "남아수영복",
    fullPath: "출산/육아 > 수영복/용품 > 남아수영복",
    level: 3,
    leaf: true
  },
  {
    cid: 50000362,
    name: "여아수영복",
    fullPath: "출산/육아 > 수영복/용품 > 여아수영복",
    level: 3,
    leaf: true
  },
  {
    cid: 50000363,
    name: "수경/수모/귀마개",
    fullPath: "출산/육아 > 수영복/용품 > 수경/수모/귀마개",
    level: 3,
    leaf: true
  },
  {
    cid: 50000365,
    name: "수영가방/비치백",
    fullPath: "출산/육아 > 수영복/용품 > 수영가방/비치백",
    level: 3,
    leaf: true
  }
],
  50000141: [
  {
    cid: 50000367,
    name: "바운서/흔들침대",
    fullPath: "출산/육아 > 유아발육용품 > 바운서/흔들침대",
    level: 3,
    leaf: true
  },
  {
    cid: 50000368,
    name: "보행기",
    fullPath: "출산/육아 > 유아발육용품 > 보행기",
    level: 3,
    leaf: true
  },
  {
    cid: 50000369,
    name: "쏘서",
    fullPath: "출산/육아 > 유아발육용품 > 쏘서",
    level: 3,
    leaf: true
  },
  {
    cid: 50000370,
    name: "점퍼루",
    fullPath: "출산/육아 > 유아발육용품 > 점퍼루",
    level: 3,
    leaf: true
  }
],
  50000142: [
  {
    cid: 50001154,
    name: "작동완구",
    fullPath: "출산/육아 > 완구/인형 > 작동완구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001155,
    name: "감각발달완구",
    fullPath: "출산/육아 > 완구/인형 > 감각발달완구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001156,
    name: "공간놀이기구",
    fullPath: "출산/육아 > 완구/인형 > 공간놀이기구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001157,
    name: "물놀이용품",
    fullPath: "출산/육아 > 완구/인형 > 물놀이용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001158,
    name: "미술놀이",
    fullPath: "출산/육아 > 완구/인형 > 미술놀이",
    level: 3,
    leaf: false
  },
  {
    cid: 50001159,
    name: "블록",
    fullPath: "출산/육아 > 완구/인형 > 블록",
    level: 3,
    leaf: false
  },
  {
    cid: 50001160,
    name: "스포츠완구",
    fullPath: "출산/육아 > 완구/인형 > 스포츠완구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001161,
    name: "승용완구",
    fullPath: "출산/육아 > 완구/인형 > 승용완구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001162,
    name: "유아/어린이자전거",
    fullPath: "출산/육아 > 완구/인형 > 유아/어린이자전거",
    level: 3,
    leaf: false
  },
  {
    cid: 50001163,
    name: "신생아/영유아완구",
    fullPath: "출산/육아 > 완구/인형 > 신생아/영유아완구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001164,
    name: "언어/학습완구",
    fullPath: "출산/육아 > 완구/인형 > 언어/학습완구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001165,
    name: "역할놀이/소꿉놀이",
    fullPath: "출산/육아 > 완구/인형 > 역할놀이/소꿉놀이",
    level: 3,
    leaf: false
  },
  {
    cid: 50001166,
    name: "원목교구/가베",
    fullPath: "출산/육아 > 완구/인형 > 원목교구/가베",
    level: 3,
    leaf: false
  },
  {
    cid: 50001167,
    name: "자연/과학완구",
    fullPath: "출산/육아 > 완구/인형 > 자연/과학완구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001168,
    name: "유아동퍼즐",
    fullPath: "출산/육아 > 완구/인형 > 유아동퍼즐",
    level: 3,
    leaf: false
  },
  {
    cid: 50001169,
    name: "음악/악기놀이",
    fullPath: "출산/육아 > 완구/인형 > 음악/악기놀이",
    level: 3,
    leaf: false
  },
  {
    cid: 50000343,
    name: "캐릭터카드/딱지",
    fullPath: "출산/육아 > 완구/인형 > 캐릭터카드/딱지",
    level: 3,
    leaf: true
  },
  {
    cid: 50016360,
    name: "인형",
    fullPath: "출산/육아 > 완구/인형 > 인형",
    level: 3,
    leaf: false
  }
],
  50000144: [
  {
    cid: 50006392,
    name: "학습교구",
    fullPath: "출산/육아 > 교구 > 학습교구",
    level: 3,
    leaf: false
  },
  {
    cid: 50000221,
    name: "학습보드게임",
    fullPath: "출산/육아 > 교구 > 학습보드게임",
    level: 3,
    leaf: true
  },
  {
    cid: 50000222,
    name: "비디오/DVD",
    fullPath: "출산/육아 > 교구 > 비디오/DVD",
    level: 3,
    leaf: true
  }
],
  50000145: [
  {
    cid: 50001170,
    name: "돼지고기",
    fullPath: "식품 > 축산물 > 돼지고기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001171,
    name: "쇠고기",
    fullPath: "식품 > 축산물 > 쇠고기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001172,
    name: "닭고기",
    fullPath: "식품 > 축산물 > 닭고기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001173,
    name: "알류",
    fullPath: "식품 > 축산물 > 알류",
    level: 3,
    leaf: false
  },
  {
    cid: 50001174,
    name: "축산가공식품",
    fullPath: "식품 > 축산물 > 축산가공식품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000215,
    name: "기타육류",
    fullPath: "식품 > 축산물 > 기타육류",
    level: 3,
    leaf: true
  },
  {
    cid: 50013600,
    name: "오리고기",
    fullPath: "식품 > 축산물 > 오리고기",
    level: 3,
    leaf: false
  },
  {
    cid: 50017700,
    name: "양고기",
    fullPath: "식품 > 축산물 > 양고기",
    level: 3,
    leaf: false
  }
],
  50000146: [
  {
    cid: 50002015,
    name: "절임류",
    fullPath: "식품 > 반찬 > 절임류",
    level: 3,
    leaf: true
  },
  {
    cid: 50002016,
    name: "조림류",
    fullPath: "식품 > 반찬 > 조림류",
    level: 3,
    leaf: true
  },
  {
    cid: 50001916,
    name: "장아찌",
    fullPath: "식품 > 반찬 > 장아찌",
    level: 3,
    leaf: true
  },
  {
    cid: 50014360,
    name: "볶음류",
    fullPath: "식품 > 반찬 > 볶음류",
    level: 3,
    leaf: true
  },
  {
    cid: 50001917,
    name: "장조림",
    fullPath: "식품 > 반찬 > 장조림",
    level: 3,
    leaf: true
  },
  {
    cid: 50014340,
    name: "단무지",
    fullPath: "식품 > 반찬 > 단무지",
    level: 3,
    leaf: true
  },
  {
    cid: 50002017,
    name: "반찬세트",
    fullPath: "식품 > 반찬 > 반찬세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50002018,
    name: "기타반찬류",
    fullPath: "식품 > 반찬 > 기타반찬류",
    level: 3,
    leaf: true
  },
  {
    cid: 50018341,
    name: "무침류",
    fullPath: "식품 > 반찬 > 무침류",
    level: 3,
    leaf: true
  }
],
  50000147: [
  {
    cid: 50002019,
    name: "포기김치",
    fullPath: "식품 > 김치 > 포기김치",
    level: 3,
    leaf: true
  },
  {
    cid: 50002020,
    name: "갓김치",
    fullPath: "식품 > 김치 > 갓김치",
    level: 3,
    leaf: true
  },
  {
    cid: 50002021,
    name: "총각김치",
    fullPath: "식품 > 김치 > 총각김치",
    level: 3,
    leaf: true
  },
  {
    cid: 50002022,
    name: "깍두기",
    fullPath: "식품 > 김치 > 깍두기",
    level: 3,
    leaf: true
  },
  {
    cid: 50002023,
    name: "겉절이",
    fullPath: "식품 > 김치 > 겉절이",
    level: 3,
    leaf: true
  },
  {
    cid: 50002024,
    name: "나박김치",
    fullPath: "식품 > 김치 > 나박김치",
    level: 3,
    leaf: true
  },
  {
    cid: 50002025,
    name: "동치미",
    fullPath: "식품 > 김치 > 동치미",
    level: 3,
    leaf: true
  },
  {
    cid: 50002026,
    name: "묵은지",
    fullPath: "식품 > 김치 > 묵은지",
    level: 3,
    leaf: true
  },
  {
    cid: 50002027,
    name: "백김치",
    fullPath: "식품 > 김치 > 백김치",
    level: 3,
    leaf: true
  },
  {
    cid: 50002028,
    name: "열무김치",
    fullPath: "식품 > 김치 > 열무김치",
    level: 3,
    leaf: true
  },
  {
    cid: 50002030,
    name: "별미김치",
    fullPath: "식품 > 김치 > 별미김치",
    level: 3,
    leaf: true
  },
  {
    cid: 50002031,
    name: "절임배추",
    fullPath: "식품 > 김치 > 절임배추",
    level: 3,
    leaf: true
  },
  {
    cid: 50002029,
    name: "파김치",
    fullPath: "식품 > 김치 > 파김치",
    level: 3,
    leaf: true
  },
  {
    cid: 50014081,
    name: "오이소박이",
    fullPath: "식품 > 김치 > 오이소박이",
    level: 3,
    leaf: true
  }
],
  50000148: [
  {
    cid: 50002032,
    name: "생수",
    fullPath: "식품 > 음료 > 생수",
    level: 3,
    leaf: true
  },
  {
    cid: 50002033,
    name: "탄산수",
    fullPath: "식품 > 음료 > 탄산수",
    level: 3,
    leaf: true
  },
  {
    cid: 50001079,
    name: "청량/탄산음료",
    fullPath: "식품 > 음료 > 청량/탄산음료",
    level: 3,
    leaf: false
  },
  {
    cid: 50001080,
    name: "주스/과즙음료",
    fullPath: "식품 > 음료 > 주스/과즙음료",
    level: 3,
    leaf: false
  },
  {
    cid: 50001081,
    name: "커피",
    fullPath: "식품 > 음료 > 커피",
    level: 3,
    leaf: false
  },
  {
    cid: 50001082,
    name: "차류",
    fullPath: "식품 > 음료 > 차류",
    level: 3,
    leaf: false
  },
  {
    cid: 50012140,
    name: "건강/기능성음료",
    fullPath: "식품 > 음료 > 건강/기능성음료",
    level: 3,
    leaf: false
  },
  {
    cid: 50012200,
    name: "전통/차음료",
    fullPath: "식품 > 음료 > 전통/차음료",
    level: 3,
    leaf: false
  },
  {
    cid: 50012800,
    name: "두유",
    fullPath: "식품 > 음료 > 두유",
    level: 3,
    leaf: true
  },
  {
    cid: 50012820,
    name: "우유/요거트",
    fullPath: "식품 > 음료 > 우유/요거트",
    level: 3,
    leaf: false
  },
  {
    cid: 50012701,
    name: "파우더/스무디",
    fullPath: "식품 > 음료 > 파우더/스무디",
    level: 3,
    leaf: true
  },
  {
    cid: 50012960,
    name: "코코아",
    fullPath: "식품 > 음료 > 코코아",
    level: 3,
    leaf: true
  }
],
  50000149: [
  {
    cid: 50002000,
    name: "초콜릿",
    fullPath: "식품 > 과자/베이커리 > 초콜릿",
    level: 3,
    leaf: true
  },
  {
    cid: 50002001,
    name: "사탕",
    fullPath: "식품 > 과자/베이커리 > 사탕",
    level: 3,
    leaf: true
  },
  {
    cid: 50002002,
    name: "껌",
    fullPath: "식품 > 과자/베이커리 > 껌",
    level: 3,
    leaf: true
  },
  {
    cid: 50001763,
    name: "젤리",
    fullPath: "식품 > 과자/베이커리 > 젤리",
    level: 3,
    leaf: true
  },
  {
    cid: 50001764,
    name: "푸딩",
    fullPath: "식품 > 과자/베이커리 > 푸딩",
    level: 3,
    leaf: true
  },
  {
    cid: 50001765,
    name: "캐러멜",
    fullPath: "식품 > 과자/베이커리 > 캐러멜",
    level: 3,
    leaf: true
  },
  {
    cid: 50001918,
    name: "팝콘/강냉이류",
    fullPath: "식품 > 과자/베이커리 > 팝콘/강냉이류",
    level: 3,
    leaf: true
  },
  {
    cid: 50001920,
    name: "가공안주류",
    fullPath: "식품 > 과자/베이커리 > 가공안주류",
    level: 3,
    leaf: true
  },
  {
    cid: 50001921,
    name: "기타과자",
    fullPath: "식품 > 과자/베이커리 > 기타과자",
    level: 3,
    leaf: true
  },
  {
    cid: 50013220,
    name: "아이스크림/빙수",
    fullPath: "식품 > 과자/베이커리 > 아이스크림/빙수",
    level: 3,
    leaf: false
  },
  {
    cid: 50013280,
    name: "케이크",
    fullPath: "식품 > 과자/베이커리 > 케이크",
    level: 3,
    leaf: true
  },
  {
    cid: 50016901,
    name: "스낵",
    fullPath: "식품 > 과자/베이커리 > 스낵",
    level: 3,
    leaf: false
  },
  {
    cid: 50017861,
    name: "시리얼",
    fullPath: "식품 > 과자/베이커리 > 시리얼",
    level: 3,
    leaf: false
  },
  {
    cid: 50018300,
    name: "빵",
    fullPath: "식품 > 과자/베이커리 > 빵",
    level: 3,
    leaf: false
  },
  {
    cid: 50018640,
    name: "전통과자",
    fullPath: "식품 > 과자/베이커리 > 전통과자",
    level: 3,
    leaf: false
  }
],
  50000150: [
  {
    cid: 50001085,
    name: "치즈",
    fullPath: "식품 > 유가공품 > 치즈",
    level: 3,
    leaf: false
  },
  {
    cid: 50001757,
    name: "생크림",
    fullPath: "식품 > 유가공품 > 생크림",
    level: 3,
    leaf: true
  },
  {
    cid: 50001758,
    name: "마가린",
    fullPath: "식품 > 유가공품 > 마가린",
    level: 3,
    leaf: true
  },
  {
    cid: 50001759,
    name: "버터",
    fullPath: "식품 > 유가공품 > 버터",
    level: 3,
    leaf: true
  },
  {
    cid: 50013180,
    name: "연유",
    fullPath: "식품 > 유가공품 > 연유",
    level: 3,
    leaf: true
  },
  {
    cid: 50013200,
    name: "휘핑크림",
    fullPath: "식품 > 유가공품 > 휘핑크림",
    level: 3,
    leaf: true
  }
],
  50000154: [
  {
    cid: 50001137,
    name: "커버류",
    fullPath: "가구/인테리어 > 홈데코 > 커버류",
    level: 3,
    leaf: false
  },
  {
    cid: 50001138,
    name: "주방데코",
    fullPath: "가구/인테리어 > 홈데코 > 주방데코",
    level: 3,
    leaf: false
  },
  {
    cid: 50001139,
    name: "쿠션/방석",
    fullPath: "가구/인테리어 > 홈데코 > 쿠션/방석",
    level: 3,
    leaf: false
  }
],
  50000155: [
  {
    cid: 50000233,
    name: "기타반려동물용품",
    fullPath: "생활/건강 > 반려동물 > 기타반려동물용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50006630,
    name: "강아지 사료",
    fullPath: "생활/건강 > 반려동물 > 강아지 사료",
    level: 3,
    leaf: false
  },
  {
    cid: 50006636,
    name: "강아지 간식",
    fullPath: "생활/건강 > 반려동물 > 강아지 간식",
    level: 3,
    leaf: false
  },
  {
    cid: 50006646,
    name: "강아지 배변용품",
    fullPath: "생활/건강 > 반려동물 > 강아지 배변용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50006654,
    name: "강아지 건강/관리용품",
    fullPath: "생활/건강 > 반려동물 > 강아지 건강/관리용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50006662,
    name: "미용/목욕",
    fullPath: "생활/건강 > 반려동물 > 미용/목욕",
    level: 3,
    leaf: false
  },
  {
    cid: 50006673,
    name: "강아지 장난감/훈련",
    fullPath: "생활/건강 > 반려동물 > 강아지 장난감/훈련",
    level: 3,
    leaf: false
  },
  {
    cid: 50006678,
    name: "고양이 사료",
    fullPath: "생활/건강 > 반려동물 > 고양이 사료",
    level: 3,
    leaf: false
  },
  {
    cid: 50006684,
    name: "고양이 간식",
    fullPath: "생활/건강 > 반려동물 > 고양이 간식",
    level: 3,
    leaf: false
  },
  {
    cid: 50006694,
    name: "고양이 배변용품",
    fullPath: "생활/건강 > 반려동물 > 고양이 배변용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50006704,
    name: "고양이 건강/관리용품",
    fullPath: "생활/건강 > 반려동물 > 고양이 건강/관리용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50006718,
    name: "고양이 장난감",
    fullPath: "생활/건강 > 반려동물 > 고양이 장난감",
    level: 3,
    leaf: false
  },
  {
    cid: 50006724,
    name: "리빙용품",
    fullPath: "생활/건강 > 반려동물 > 리빙용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50006728,
    name: "패션용품",
    fullPath: "생활/건강 > 반려동물 > 패션용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50006734,
    name: "식기/급수기",
    fullPath: "생활/건강 > 반려동물 > 식기/급수기",
    level: 3,
    leaf: false
  },
  {
    cid: 50008469,
    name: "서비스",
    fullPath: "생활/건강 > 반려동물 > 서비스",
    level: 3,
    leaf: false
  },
  {
    cid: 50015400,
    name: "캣타워/스크래쳐",
    fullPath: "생활/건강 > 반려동물 > 캣타워/스크래쳐",
    level: 3,
    leaf: false
  },
  {
    cid: 50015801,
    name: "외출용품",
    fullPath: "생활/건강 > 반려동물 > 외출용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50016180,
    name: "소동물용품",
    fullPath: "생활/건강 > 반려동물 > 소동물용품",
    level: 3,
    leaf: false
  }
],
  50000156: [
  {
    cid: 50000868,
    name: "기타(guitar)",
    fullPath: "생활/건강 > 악기 > 기타(guitar)",
    level: 3,
    leaf: false
  },
  {
    cid: 50000959,
    name: "피아노",
    fullPath: "생활/건강 > 악기 > 피아노",
    level: 3,
    leaf: false
  },
  {
    cid: 50000869,
    name: "건반악기",
    fullPath: "생활/건강 > 악기 > 건반악기",
    level: 3,
    leaf: false
  },
  {
    cid: 50000870,
    name: "현악기",
    fullPath: "생활/건강 > 악기 > 현악기",
    level: 3,
    leaf: false
  },
  {
    cid: 50000871,
    name: "관악기",
    fullPath: "생활/건강 > 악기 > 관악기",
    level: 3,
    leaf: false
  },
  {
    cid: 50000872,
    name: "타악기",
    fullPath: "생활/건강 > 악기 > 타악기",
    level: 3,
    leaf: false
  },
  {
    cid: 50000873,
    name: "국악기",
    fullPath: "생활/건강 > 악기 > 국악기",
    level: 3,
    leaf: false
  },
  {
    cid: 50000874,
    name: "음향기자재",
    fullPath: "생활/건강 > 악기 > 음향기자재",
    level: 3,
    leaf: false
  },
  {
    cid: 50000875,
    name: "기타악기",
    fullPath: "생활/건강 > 악기 > 기타악기",
    level: 3,
    leaf: false
  }
],
  50000157: [
  {
    cid: 50000896,
    name: "비데/비데용품",
    fullPath: "생활/건강 > 욕실용품 > 비데/비데용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000897,
    name: "욕조/반신욕용품",
    fullPath: "생활/건강 > 욕실용품 > 욕조/반신욕용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000898,
    name: "욕실잡화",
    fullPath: "생활/건강 > 욕실용품 > 욕실잡화",
    level: 3,
    leaf: false
  },
  {
    cid: 50000900,
    name: "면도용품",
    fullPath: "생활/건강 > 욕실용품 > 면도용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50008528,
    name: "샤워/목욕용품",
    fullPath: "생활/건강 > 욕실용품 > 샤워/목욕용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50008568,
    name: "수건/타월",
    fullPath: "생활/건강 > 욕실용품 > 수건/타월",
    level: 3,
    leaf: false
  },
  {
    cid: 50008628,
    name: "욕실장/선반",
    fullPath: "생활/건강 > 욕실용품 > 욕실장/선반",
    level: 3,
    leaf: false
  },
  {
    cid: 50008509,
    name: "욕실청소용품",
    fullPath: "생활/건강 > 욕실용품 > 욕실청소용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50008708,
    name: "욕실용기/홀더",
    fullPath: "생활/건강 > 욕실용품 > 욕실용기/홀더",
    level: 3,
    leaf: false
  },
  {
    cid: 50008768,
    name: "욕실발판/욕실매트",
    fullPath: "생활/건강 > 욕실용품 > 욕실발판/욕실매트",
    level: 3,
    leaf: false
  },
  {
    cid: 50008808,
    name: "위생도기",
    fullPath: "생활/건강 > 욕실용품 > 위생도기",
    level: 3,
    leaf: false
  },
  {
    cid: 50019519,
    name: "샤워기",
    fullPath: "생활/건강 > 욕실용품 > 샤워기",
    level: 3,
    leaf: false
  },
  {
    cid: 50019599,
    name: "세면대/수전용품",
    fullPath: "생활/건강 > 욕실용품 > 세면대/수전용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50019679,
    name: "욕실화",
    fullPath: "생활/건강 > 욕실용품 > 욕실화",
    level: 3,
    leaf: true
  }
],
  50000158: [
  {
    cid: 50001041,
    name: "필기도구",
    fullPath: "생활/건강 > 문구/사무용품 > 필기도구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001040,
    name: "노트/수첩",
    fullPath: "생활/건강 > 문구/사무용품 > 노트/수첩",
    level: 3,
    leaf: false
  },
  {
    cid: 50001039,
    name: "다이어리/플래너",
    fullPath: "생활/건강 > 문구/사무용품 > 다이어리/플래너",
    level: 3,
    leaf: false
  },
  {
    cid: 50001042,
    name: "앨범",
    fullPath: "생활/건강 > 문구/사무용품 > 앨범",
    level: 3,
    leaf: false
  },
  {
    cid: 50000922,
    name: "이벤트/파티용품",
    fullPath: "생활/건강 > 문구/사무용품 > 이벤트/파티용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001044,
    name: "데스크용품",
    fullPath: "생활/건강 > 문구/사무용품 > 데스크용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001043,
    name: "보드/칠판",
    fullPath: "생활/건강 > 문구/사무용품 > 보드/칠판",
    level: 3,
    leaf: false
  },
  {
    cid: 50001047,
    name: "용지",
    fullPath: "생활/건강 > 문구/사무용품 > 용지",
    level: 3,
    leaf: false
  },
  {
    cid: 50001048,
    name: "사무기기",
    fullPath: "생활/건강 > 문구/사무용품 > 사무기기",
    level: 3,
    leaf: false
  },
  {
    cid: 50000921,
    name: "제도용품",
    fullPath: "생활/건강 > 문구/사무용품 > 제도용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50007588,
    name: "스티커",
    fullPath: "생활/건강 > 문구/사무용품 > 스티커",
    level: 3,
    leaf: false
  },
  {
    cid: 50007748,
    name: "스탬프/도장",
    fullPath: "생활/건강 > 문구/사무용품 > 스탬프/도장",
    level: 3,
    leaf: false
  },
  {
    cid: 50007749,
    name: "문구용품",
    fullPath: "생활/건강 > 문구/사무용품 > 문구용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50008028,
    name: "파일/바인더",
    fullPath: "생활/건강 > 문구/사무용품 > 파일/바인더",
    level: 3,
    leaf: false
  },
  {
    cid: 50008108,
    name: "지도/지구본",
    fullPath: "생활/건강 > 문구/사무용품 > 지도/지구본",
    level: 3,
    leaf: false
  },
  {
    cid: 50008110,
    name: "카드/엽서/봉투",
    fullPath: "생활/건강 > 문구/사무용품 > 카드/엽서/봉투",
    level: 3,
    leaf: false
  },
  {
    cid: 50008248,
    name: "사무용품",
    fullPath: "생활/건강 > 문구/사무용품 > 사무용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50019699,
    name: "독서용품",
    fullPath: "생활/건강 > 문구/사무용품 > 독서용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50019759,
    name: "테이프",
    fullPath: "생활/건강 > 문구/사무용품 > 테이프",
    level: 3,
    leaf: false
  }
],
  50000159: [
  {
    cid: 50001175,
    name: "생선",
    fullPath: "식품 > 수산물 > 생선",
    level: 3,
    leaf: false
  },
  {
    cid: 50001176,
    name: "김/해초",
    fullPath: "식품 > 수산물 > 김/해초",
    level: 3,
    leaf: false
  },
  {
    cid: 50001049,
    name: "해산물/어패류",
    fullPath: "식품 > 수산물 > 해산물/어패류",
    level: 3,
    leaf: false
  },
  {
    cid: 50001050,
    name: "젓갈/장류",
    fullPath: "식품 > 수산물 > 젓갈/장류",
    level: 3,
    leaf: false
  },
  {
    cid: 50001051,
    name: "건어물",
    fullPath: "식품 > 수산물 > 건어물",
    level: 3,
    leaf: false
  },
  {
    cid: 50013900,
    name: "수산가공식품",
    fullPath: "식품 > 수산물 > 수산가공식품",
    level: 3,
    leaf: false
  }
],
  50000160: [
  {
    cid: 50001052,
    name: "쌀",
    fullPath: "식품 > 농산물 > 쌀",
    level: 3,
    leaf: false
  },
  {
    cid: 50001053,
    name: "잡곡/혼합곡",
    fullPath: "식품 > 농산물 > 잡곡/혼합곡",
    level: 3,
    leaf: false
  },
  {
    cid: 50000960,
    name: "과일",
    fullPath: "식품 > 농산물 > 과일",
    level: 3,
    leaf: false
  },
  {
    cid: 50001077,
    name: "채소",
    fullPath: "식품 > 농산물 > 채소",
    level: 3,
    leaf: false
  },
  {
    cid: 50001078,
    name: "견과류",
    fullPath: "식품 > 농산물 > 견과류",
    level: 3,
    leaf: false
  },
  {
    cid: 50001093,
    name: "건과류",
    fullPath: "식품 > 농산물 > 건과류",
    level: 3,
    leaf: false
  },
  {
    cid: 50018700,
    name: "냉동과일",
    fullPath: "식품 > 농산물 > 냉동과일",
    level: 3,
    leaf: false
  }
],
  50000161: [
  {
    cid: 50001108,
    name: "자전거/MTB",
    fullPath: "스포츠/레저 > 자전거 > 자전거/MTB",
    level: 3,
    leaf: false
  },
  {
    cid: 50001111,
    name: "자전거의류/잡화",
    fullPath: "스포츠/레저 > 자전거 > 자전거의류/잡화",
    level: 3,
    leaf: false
  },
  {
    cid: 50001110,
    name: "자전거부품",
    fullPath: "스포츠/레저 > 자전거 > 자전거부품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001109,
    name: "자전거용품",
    fullPath: "스포츠/레저 > 자전거 > 자전거용품",
    level: 3,
    leaf: false
  }
],
  50000162: [
  {
    cid: 50000986,
    name: "보드복",
    fullPath: "스포츠/레저 > 스키/보드 > 보드복",
    level: 3,
    leaf: false
  },
  {
    cid: 50001112,
    name: "스키복",
    fullPath: "스포츠/레저 > 스키/보드 > 스키복",
    level: 3,
    leaf: false
  },
  {
    cid: 50000988,
    name: "스키/보드방한용품",
    fullPath: "스포츠/레저 > 스키/보드 > 스키/보드방한용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000987,
    name: "스노보드장비",
    fullPath: "스포츠/레저 > 스키/보드 > 스노보드장비",
    level: 3,
    leaf: false
  },
  {
    cid: 50000985,
    name: "스키장비",
    fullPath: "스포츠/레저 > 스키/보드 > 스키장비",
    level: 3,
    leaf: false
  },
  {
    cid: 50000989,
    name: "스키/보드용품",
    fullPath: "스포츠/레저 > 스키/보드 > 스키/보드용품",
    level: 3,
    leaf: false
  }
],
  50000163: [
  {
    cid: 50000990,
    name: "낚싯대",
    fullPath: "스포츠/레저 > 낚시 > 낚싯대",
    level: 3,
    leaf: false
  },
  {
    cid: 50000991,
    name: "낚시릴",
    fullPath: "스포츠/레저 > 낚시 > 낚시릴",
    level: 3,
    leaf: false
  },
  {
    cid: 50000992,
    name: "낚싯줄",
    fullPath: "스포츠/레저 > 낚시 > 낚싯줄",
    level: 3,
    leaf: false
  },
  {
    cid: 50000993,
    name: "루어낚시",
    fullPath: "스포츠/레저 > 낚시 > 루어낚시",
    level: 3,
    leaf: false
  },
  {
    cid: 50000994,
    name: "민물낚시",
    fullPath: "스포츠/레저 > 낚시 > 민물낚시",
    level: 3,
    leaf: false
  },
  {
    cid: 50000995,
    name: "바다낚시",
    fullPath: "스포츠/레저 > 낚시 > 바다낚시",
    level: 3,
    leaf: false
  },
  {
    cid: 50000996,
    name: "낚시용품",
    fullPath: "스포츠/레저 > 낚시 > 낚시용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000997,
    name: "낚시의류/잡화",
    fullPath: "스포츠/레저 > 낚시 > 낚시의류/잡화",
    level: 3,
    leaf: false
  },
  {
    cid: 50021139,
    name: "보트",
    fullPath: "스포츠/레저 > 낚시 > 보트",
    level: 3,
    leaf: false
  }
],
  50000164: [
  {
    cid: 50000998,
    name: "남성수영복",
    fullPath: "스포츠/레저 > 수영 > 남성수영복",
    level: 3,
    leaf: false
  },
  {
    cid: 50000999,
    name: "여성수영복",
    fullPath: "스포츠/레저 > 수영 > 여성수영복",
    level: 3,
    leaf: false
  },
  {
    cid: 50001000,
    name: "비치웨어",
    fullPath: "스포츠/레저 > 수영 > 비치웨어",
    level: 3,
    leaf: false
  },
  {
    cid: 50001001,
    name: "수영용품",
    fullPath: "스포츠/레저 > 수영 > 수영용품",
    level: 3,
    leaf: false
  }
],
  50000165: [
  {
    cid: 50001027,
    name: "전동공구",
    fullPath: "생활/건강 > 공구 > 전동공구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001026,
    name: "수작업공구",
    fullPath: "생활/건강 > 공구 > 수작업공구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001029,
    name: "측정공구",
    fullPath: "생활/건강 > 공구 > 측정공구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001020,
    name: "목공공구",
    fullPath: "생활/건강 > 공구 > 목공공구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001021,
    name: "설비공구",
    fullPath: "생활/건강 > 공구 > 설비공구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001028,
    name: "절삭공구",
    fullPath: "생활/건강 > 공구 > 절삭공구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001022,
    name: "용접공구",
    fullPath: "생활/건강 > 공구 > 용접공구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001023,
    name: "예초기",
    fullPath: "생활/건강 > 공구 > 예초기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001024,
    name: "원예공구",
    fullPath: "생활/건강 > 공구 > 원예공구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001025,
    name: "에어공구",
    fullPath: "생활/건강 > 공구 > 에어공구",
    level: 3,
    leaf: false
  },
  {
    cid: 50001030,
    name: "소형기계",
    fullPath: "생활/건강 > 공구 > 소형기계",
    level: 3,
    leaf: false
  },
  {
    cid: 50001032,
    name: "전기용품",
    fullPath: "생활/건강 > 공구 > 전기용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001035,
    name: "페인트",
    fullPath: "생활/건강 > 공구 > 페인트",
    level: 3,
    leaf: false
  },
  {
    cid: 50001036,
    name: "페인트용품",
    fullPath: "생활/건강 > 공구 > 페인트용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001037,
    name: "운반용품",
    fullPath: "생활/건강 > 공구 > 운반용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001038,
    name: "포장용품",
    fullPath: "생활/건강 > 공구 > 포장용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001033,
    name: "접착용품",
    fullPath: "생활/건강 > 공구 > 접착용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001034,
    name: "체결용품",
    fullPath: "생활/건강 > 공구 > 체결용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001031,
    name: "안전용품",
    fullPath: "생활/건강 > 공구 > 안전용품",
    level: 3,
    leaf: false
  }
],
  50000166: [
  {
    cid: 50001476,
    name: "여성양말",
    fullPath: "패션잡화 > 양말 > 여성양말",
    level: 3,
    leaf: false
  },
  {
    cid: 50001477,
    name: "남성양말",
    fullPath: "패션잡화 > 양말 > 남성양말",
    level: 3,
    leaf: false
  }
],
  50000167: [
  {
    cid: 50021279,
    name: "니트",
    fullPath: "패션의류 > 여성의류 > 니트",
    level: 3,
    leaf: false
  },
  {
    cid: 50000807,
    name: "원피스",
    fullPath: "패션의류 > 여성의류 > 원피스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000803,
    name: "티셔츠",
    fullPath: "패션의류 > 여성의류 > 티셔츠",
    level: 3,
    leaf: true
  },
  {
    cid: 50000804,
    name: "블라우스/셔츠",
    fullPath: "패션의류 > 여성의류 > 블라우스/셔츠",
    level: 3,
    leaf: true
  },
  {
    cid: 50021359,
    name: "아우터",
    fullPath: "패션의류 > 여성의류 > 아우터",
    level: 3,
    leaf: false
  },
  {
    cid: 50000814,
    name: "점퍼",
    fullPath: "패션의류 > 여성의류 > 점퍼",
    level: 3,
    leaf: true
  },
  {
    cid: 50000810,
    name: "바지",
    fullPath: "패션의류 > 여성의류 > 바지",
    level: 3,
    leaf: true
  },
  {
    cid: 50000809,
    name: "청바지",
    fullPath: "패션의류 > 여성의류 > 청바지",
    level: 3,
    leaf: true
  },
  {
    cid: 50000808,
    name: "스커트",
    fullPath: "패션의류 > 여성의류 > 스커트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000812,
    name: "레깅스",
    fullPath: "패션의류 > 여성의류 > 레깅스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000818,
    name: "트레이닝복",
    fullPath: "패션의류 > 여성의류 > 트레이닝복",
    level: 3,
    leaf: true
  },
  {
    cid: 50000816,
    name: "정장세트",
    fullPath: "패션의류 > 여성의류 > 정장세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000819,
    name: "한복",
    fullPath: "패션의류 > 여성의류 > 한복",
    level: 3,
    leaf: true
  },
  {
    cid: 50000821,
    name: "유니폼/단체복",
    fullPath: "패션의류 > 여성의류 > 유니폼/단체복",
    level: 3,
    leaf: true
  },
  {
    cid: 50000820,
    name: "파티복",
    fullPath: "패션의류 > 여성의류 > 파티복",
    level: 3,
    leaf: true
  },
  {
    cid: 50000811,
    name: "점프슈트",
    fullPath: "패션의류 > 여성의류 > 점프슈트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000778,
    name: "코디세트",
    fullPath: "패션의류 > 여성의류 > 코디세트",
    level: 3,
    leaf: true
  }
],
  50000168: [
  {
    cid: 50000823,
    name: "브라",
    fullPath: "패션의류 > 여성언더웨어/잠옷 > 브라",
    level: 3,
    leaf: true
  },
  {
    cid: 50000824,
    name: "팬티",
    fullPath: "패션의류 > 여성언더웨어/잠옷 > 팬티",
    level: 3,
    leaf: true
  },
  {
    cid: 50000825,
    name: "브라팬티세트",
    fullPath: "패션의류 > 여성언더웨어/잠옷 > 브라팬티세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000826,
    name: "잠옷/홈웨어",
    fullPath: "패션의류 > 여성언더웨어/잠옷 > 잠옷/홈웨어",
    level: 3,
    leaf: true
  },
  {
    cid: 50001453,
    name: "시즌성내의",
    fullPath: "패션의류 > 여성언더웨어/잠옷 > 시즌성내의",
    level: 3,
    leaf: false
  },
  {
    cid: 50001452,
    name: "보정속옷",
    fullPath: "패션의류 > 여성언더웨어/잠옷 > 보정속옷",
    level: 3,
    leaf: false
  },
  {
    cid: 50000827,
    name: "슬립",
    fullPath: "패션의류 > 여성언더웨어/잠옷 > 슬립",
    level: 3,
    leaf: true
  },
  {
    cid: 50000828,
    name: "러닝/캐미솔",
    fullPath: "패션의류 > 여성언더웨어/잠옷 > 러닝/캐미솔",
    level: 3,
    leaf: true
  },
  {
    cid: 50000829,
    name: "속치마/속바지",
    fullPath: "패션의류 > 여성언더웨어/잠옷 > 속치마/속바지",
    level: 3,
    leaf: true
  },
  {
    cid: 50001454,
    name: "언더웨어소품",
    fullPath: "패션의류 > 여성언더웨어/잠옷 > 언더웨어소품",
    level: 3,
    leaf: false
  }
],
  50000169: [
  {
    cid: 50021559,
    name: "니트",
    fullPath: "패션의류 > 남성의류 > 니트",
    level: 3,
    leaf: false
  },
  {
    cid: 50000830,
    name: "티셔츠",
    fullPath: "패션의류 > 남성의류 > 티셔츠",
    level: 3,
    leaf: true
  },
  {
    cid: 50000833,
    name: "셔츠/남방",
    fullPath: "패션의류 > 남성의류 > 셔츠/남방",
    level: 3,
    leaf: true
  },
  {
    cid: 50021639,
    name: "아우터",
    fullPath: "패션의류 > 남성의류 > 아우터",
    level: 3,
    leaf: false
  },
  {
    cid: 50000837,
    name: "점퍼",
    fullPath: "패션의류 > 남성의류 > 점퍼",
    level: 3,
    leaf: true
  },
  {
    cid: 50000835,
    name: "청바지",
    fullPath: "패션의류 > 남성의류 > 청바지",
    level: 3,
    leaf: true
  },
  {
    cid: 50000836,
    name: "바지",
    fullPath: "패션의류 > 남성의류 > 바지",
    level: 3,
    leaf: true
  },
  {
    cid: 50000840,
    name: "정장세트",
    fullPath: "패션의류 > 남성의류 > 정장세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000841,
    name: "트레이닝복",
    fullPath: "패션의류 > 남성의류 > 트레이닝복",
    level: 3,
    leaf: true
  },
  {
    cid: 50000842,
    name: "한복",
    fullPath: "패션의류 > 남성의류 > 한복",
    level: 3,
    leaf: true
  },
  {
    cid: 50000843,
    name: "유니폼/단체복",
    fullPath: "패션의류 > 남성의류 > 유니폼/단체복",
    level: 3,
    leaf: true
  },
  {
    cid: 50006328,
    name: "코디세트",
    fullPath: "패션의류 > 남성의류 > 코디세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50008960,
    name: "점프슈트",
    fullPath: "패션의류 > 남성의류 > 점프슈트",
    level: 3,
    leaf: true
  }
],
  50000170: [
  {
    cid: 50000845,
    name: "팬티",
    fullPath: "패션의류 > 남성언더웨어/잠옷 > 팬티",
    level: 3,
    leaf: true
  },
  {
    cid: 50000846,
    name: "러닝",
    fullPath: "패션의류 > 남성언더웨어/잠옷 > 러닝",
    level: 3,
    leaf: true
  },
  {
    cid: 50000847,
    name: "러닝팬티세트",
    fullPath: "패션의류 > 남성언더웨어/잠옷 > 러닝팬티세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000848,
    name: "잠옷/홈웨어",
    fullPath: "패션의류 > 남성언더웨어/잠옷 > 잠옷/홈웨어",
    level: 3,
    leaf: true
  },
  {
    cid: 50001456,
    name: "시즌성내의",
    fullPath: "패션의류 > 남성언더웨어/잠옷 > 시즌성내의",
    level: 3,
    leaf: false
  },
  {
    cid: 50001455,
    name: "보정속옷",
    fullPath: "패션의류 > 남성언더웨어/잠옷 > 보정속옷",
    level: 3,
    leaf: false
  }
],
  50000173: [
  {
    cid: 50001462,
    name: "부츠",
    fullPath: "패션잡화 > 여성신발 > 부츠",
    level: 3,
    leaf: false
  },
  {
    cid: 50000779,
    name: "부티",
    fullPath: "패션잡화 > 여성신발 > 부티",
    level: 3,
    leaf: true
  },
  {
    cid: 50001461,
    name: "워커",
    fullPath: "패션잡화 > 여성신발 > 워커",
    level: 3,
    leaf: false
  },
  {
    cid: 50001459,
    name: "단화",
    fullPath: "패션잡화 > 여성신발 > 단화",
    level: 3,
    leaf: false
  },
  {
    cid: 50001460,
    name: "힐/펌프스",
    fullPath: "패션잡화 > 여성신발 > 힐/펌프스",
    level: 3,
    leaf: false
  },
  {
    cid: 50001463,
    name: "운동화",
    fullPath: "패션잡화 > 여성신발 > 운동화",
    level: 3,
    leaf: false
  },
  {
    cid: 50000781,
    name: "실내화",
    fullPath: "패션잡화 > 여성신발 > 실내화",
    level: 3,
    leaf: true
  },
  {
    cid: 50000780,
    name: "슬리퍼",
    fullPath: "패션잡화 > 여성신발 > 슬리퍼",
    level: 3,
    leaf: true
  },
  {
    cid: 50001464,
    name: "샌들",
    fullPath: "패션잡화 > 여성신발 > 샌들",
    level: 3,
    leaf: false
  },
  {
    cid: 50001465,
    name: "기능화",
    fullPath: "패션잡화 > 여성신발 > 기능화",
    level: 3,
    leaf: false
  }
],
  50000174: [
  {
    cid: 50001466,
    name: "운동화",
    fullPath: "패션잡화 > 남성신발 > 운동화",
    level: 3,
    leaf: false
  },
  {
    cid: 50000792,
    name: "부츠",
    fullPath: "패션잡화 > 남성신발 > 부츠",
    level: 3,
    leaf: true
  },
  {
    cid: 50000791,
    name: "워커",
    fullPath: "패션잡화 > 남성신발 > 워커",
    level: 3,
    leaf: true
  },
  {
    cid: 50000784,
    name: "모카신/털신",
    fullPath: "패션잡화 > 남성신발 > 모카신/털신",
    level: 3,
    leaf: true
  },
  {
    cid: 50000788,
    name: "스니커즈",
    fullPath: "패션잡화 > 남성신발 > 스니커즈",
    level: 3,
    leaf: true
  },
  {
    cid: 50000787,
    name: "구두",
    fullPath: "패션잡화 > 남성신발 > 구두",
    level: 3,
    leaf: true
  },
  {
    cid: 50000666,
    name: "실내화",
    fullPath: "패션잡화 > 남성신발 > 실내화",
    level: 3,
    leaf: true
  },
  {
    cid: 50000790,
    name: "슬리퍼",
    fullPath: "패션잡화 > 남성신발 > 슬리퍼",
    level: 3,
    leaf: true
  },
  {
    cid: 50000665,
    name: "웰트화",
    fullPath: "패션잡화 > 남성신발 > 웰트화",
    level: 3,
    leaf: true
  },
  {
    cid: 50000783,
    name: "슬립온",
    fullPath: "패션잡화 > 남성신발 > 슬립온",
    level: 3,
    leaf: true
  },
  {
    cid: 50000785,
    name: "보트슈즈",
    fullPath: "패션잡화 > 남성신발 > 보트슈즈",
    level: 3,
    leaf: true
  },
  {
    cid: 50000789,
    name: "샌들",
    fullPath: "패션잡화 > 남성신발 > 샌들",
    level: 3,
    leaf: true
  },
  {
    cid: 50001467,
    name: "기능화",
    fullPath: "패션잡화 > 남성신발 > 기능화",
    level: 3,
    leaf: false
  }
],
  50000175: [
  {
    cid: 50000667,
    name: "신발깔창",
    fullPath: "패션잡화 > 신발용품 > 신발깔창",
    level: 3,
    leaf: true
  },
  {
    cid: 50000668,
    name: "신발끈",
    fullPath: "패션잡화 > 신발용품 > 신발끈",
    level: 3,
    leaf: true
  },
  {
    cid: 50000669,
    name: "보호쿠션/패드",
    fullPath: "패션잡화 > 신발용품 > 보호쿠션/패드",
    level: 3,
    leaf: true
  },
  {
    cid: 50000670,
    name: "부츠키퍼",
    fullPath: "패션잡화 > 신발용품 > 부츠키퍼",
    level: 3,
    leaf: true
  },
  {
    cid: 50000671,
    name: "구둣주걱",
    fullPath: "패션잡화 > 신발용품 > 구둣주걱",
    level: 3,
    leaf: true
  },
  {
    cid: 50006909,
    name: "슈즈커버",
    fullPath: "패션잡화 > 신발용품 > 슈즈커버",
    level: 3,
    leaf: true
  },
  {
    cid: 50000672,
    name: "기타신발용품",
    fullPath: "패션잡화 > 신발용품 > 기타신발용품",
    level: 3,
    leaf: true
  }
],
  50000176: [
  {
    cid: 50000644,
    name: "백팩",
    fullPath: "패션잡화 > 여성가방 > 백팩",
    level: 3,
    leaf: true
  },
  {
    cid: 50000641,
    name: "크로스백",
    fullPath: "패션잡화 > 여성가방 > 크로스백",
    level: 3,
    leaf: true
  },
  {
    cid: 50000639,
    name: "숄더백",
    fullPath: "패션잡화 > 여성가방 > 숄더백",
    level: 3,
    leaf: true
  },
  {
    cid: 50000640,
    name: "토트백",
    fullPath: "패션잡화 > 여성가방 > 토트백",
    level: 3,
    leaf: true
  },
  {
    cid: 50015340,
    name: "에코백",
    fullPath: "패션잡화 > 여성가방 > 에코백",
    level: 3,
    leaf: true
  },
  {
    cid: 50000645,
    name: "힙색/슬링백",
    fullPath: "패션잡화 > 여성가방 > 힙색/슬링백",
    level: 3,
    leaf: true
  },
  {
    cid: 50000642,
    name: "클러치백",
    fullPath: "패션잡화 > 여성가방 > 클러치백",
    level: 3,
    leaf: true
  },
  {
    cid: 50000643,
    name: "파우치",
    fullPath: "패션잡화 > 여성가방 > 파우치",
    level: 3,
    leaf: true
  },
  {
    cid: 50017400,
    name: "메신저백",
    fullPath: "패션잡화 > 여성가방 > 메신저백",
    level: 3,
    leaf: true
  },
  {
    cid: 50001468,
    name: "가방소품",
    fullPath: "패션잡화 > 여성가방 > 가방소품",
    level: 3,
    leaf: false
  }
],
  50000177: [
  {
    cid: 50000651,
    name: "백팩",
    fullPath: "패션잡화 > 남성가방 > 백팩",
    level: 3,
    leaf: true
  },
  {
    cid: 50000648,
    name: "크로스백",
    fullPath: "패션잡화 > 남성가방 > 크로스백",
    level: 3,
    leaf: true
  },
  {
    cid: 50000646,
    name: "숄더백",
    fullPath: "패션잡화 > 남성가방 > 숄더백",
    level: 3,
    leaf: true
  },
  {
    cid: 50000647,
    name: "토트백",
    fullPath: "패션잡화 > 남성가방 > 토트백",
    level: 3,
    leaf: true
  },
  {
    cid: 50015341,
    name: "에코백",
    fullPath: "패션잡화 > 남성가방 > 에코백",
    level: 3,
    leaf: true
  },
  {
    cid: 50000650,
    name: "브리프케이스",
    fullPath: "패션잡화 > 남성가방 > 브리프케이스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000649,
    name: "클러치백",
    fullPath: "패션잡화 > 남성가방 > 클러치백",
    level: 3,
    leaf: true
  },
  {
    cid: 50000652,
    name: "힙색/슬링백",
    fullPath: "패션잡화 > 남성가방 > 힙색/슬링백",
    level: 3,
    leaf: true
  },
  {
    cid: 50017420,
    name: "메신저백",
    fullPath: "패션잡화 > 남성가방 > 메신저백",
    level: 3,
    leaf: true
  }
],
  50000178: [
  {
    cid: 50007808,
    name: "기내용 캐리어",
    fullPath: "패션잡화 > 여행용가방/소품 > 기내용 캐리어",
    level: 3,
    leaf: true
  },
  {
    cid: 50007948,
    name: "중대형 캐리어",
    fullPath: "패션잡화 > 여행용가방/소품 > 중대형 캐리어",
    level: 3,
    leaf: true
  },
  {
    cid: 50000658,
    name: "여행소품케이스",
    fullPath: "패션잡화 > 여행용가방/소품 > 여행소품케이스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000653,
    name: "보스턴가방",
    fullPath: "패션잡화 > 여행용가방/소품 > 보스턴가방",
    level: 3,
    leaf: true
  },
  {
    cid: 50000654,
    name: "복대",
    fullPath: "패션잡화 > 여행용가방/소품 > 복대",
    level: 3,
    leaf: true
  },
  {
    cid: 50000655,
    name: "이민/유학용 가방",
    fullPath: "패션잡화 > 여행용가방/소품 > 이민/유학용 가방",
    level: 3,
    leaf: true
  },
  {
    cid: 50000656,
    name: "슈트케이스",
    fullPath: "패션잡화 > 여행용가방/소품 > 슈트케이스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000657,
    name: "여권지갑/케이스",
    fullPath: "패션잡화 > 여행용가방/소품 > 여권지갑/케이스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000659,
    name: "네임태그",
    fullPath: "패션잡화 > 여행용가방/소품 > 네임태그",
    level: 3,
    leaf: true
  },
  {
    cid: 50000660,
    name: "잠금벨트/자물쇠",
    fullPath: "패션잡화 > 여행용가방/소품 > 잠금벨트/자물쇠",
    level: 3,
    leaf: true
  },
  {
    cid: 50005464,
    name: "캐리어소품",
    fullPath: "패션잡화 > 여행용가방/소품 > 캐리어소품",
    level: 3,
    leaf: true
  },
  {
    cid: 50006908,
    name: "캐리어커버",
    fullPath: "패션잡화 > 여행용가방/소품 > 캐리어커버",
    level: 3,
    leaf: true
  }
],
  50000179: [
  {
    cid: 50001471,
    name: "여성지갑",
    fullPath: "패션잡화 > 지갑 > 여성지갑",
    level: 3,
    leaf: false
  },
  {
    cid: 50001472,
    name: "남성지갑",
    fullPath: "패션잡화 > 지갑 > 남성지갑",
    level: 3,
    leaf: false
  },
  {
    cid: 50000661,
    name: "머니클립",
    fullPath: "패션잡화 > 지갑 > 머니클립",
    level: 3,
    leaf: true
  },
  {
    cid: 50000662,
    name: "카드/명함지갑",
    fullPath: "패션잡화 > 지갑 > 카드/명함지갑",
    level: 3,
    leaf: true
  },
  {
    cid: 50000664,
    name: "동전지갑",
    fullPath: "패션잡화 > 지갑 > 동전지갑",
    level: 3,
    leaf: true
  },
  {
    cid: 50000663,
    name: "열쇠지갑",
    fullPath: "패션잡화 > 지갑 > 열쇠지갑",
    level: 3,
    leaf: true
  },
  {
    cid: 50000537,
    name: "통장지갑",
    fullPath: "패션잡화 > 지갑 > 통장지갑",
    level: 3,
    leaf: true
  },
  {
    cid: 50000538,
    name: "지갑기타세트",
    fullPath: "패션잡화 > 지갑 > 지갑기타세트",
    level: 3,
    leaf: true
  }
],
  50000180: [
  {
    cid: 50000539,
    name: "여성벨트",
    fullPath: "패션잡화 > 벨트 > 여성벨트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001473,
    name: "남성벨트",
    fullPath: "패션잡화 > 벨트 > 남성벨트",
    level: 3,
    leaf: false
  },
  {
    cid: 50000540,
    name: "멜빵",
    fullPath: "패션잡화 > 벨트 > 멜빵",
    level: 3,
    leaf: true
  }
],
  50000181: [
  {
    cid: 50001475,
    name: "스냅백",
    fullPath: "패션잡화 > 모자 > 스냅백",
    level: 3,
    leaf: false
  },
  {
    cid: 50000541,
    name: "군모",
    fullPath: "패션잡화 > 모자 > 군모",
    level: 3,
    leaf: true
  },
  {
    cid: 50001474,
    name: "야구모자",
    fullPath: "패션잡화 > 모자 > 야구모자",
    level: 3,
    leaf: false
  },
  {
    cid: 50000543,
    name: "비니",
    fullPath: "패션잡화 > 모자 > 비니",
    level: 3,
    leaf: true
  },
  {
    cid: 50000548,
    name: "귀달이모자",
    fullPath: "패션잡화 > 모자 > 귀달이모자",
    level: 3,
    leaf: true
  },
  {
    cid: 50000549,
    name: "방울털모자",
    fullPath: "패션잡화 > 모자 > 방울털모자",
    level: 3,
    leaf: true
  },
  {
    cid: 50000550,
    name: "귀마개",
    fullPath: "패션잡화 > 모자 > 귀마개",
    level: 3,
    leaf: true
  },
  {
    cid: 50000544,
    name: "페도라",
    fullPath: "패션잡화 > 모자 > 페도라",
    level: 3,
    leaf: true
  },
  {
    cid: 50000545,
    name: "두건/반다나",
    fullPath: "패션잡화 > 모자 > 두건/반다나",
    level: 3,
    leaf: true
  },
  {
    cid: 50000546,
    name: "사파리모자",
    fullPath: "패션잡화 > 모자 > 사파리모자",
    level: 3,
    leaf: true
  },
  {
    cid: 50000547,
    name: "헌팅캡",
    fullPath: "패션잡화 > 모자 > 헌팅캡",
    level: 3,
    leaf: true
  },
  {
    cid: 50000542,
    name: "선캡",
    fullPath: "패션잡화 > 모자 > 선캡",
    level: 3,
    leaf: true
  },
  {
    cid: 50006868,
    name: "베레모",
    fullPath: "패션잡화 > 모자 > 베레모",
    level: 3,
    leaf: true
  }
],
  50000182: [
  {
    cid: 50000551,
    name: "여성장갑",
    fullPath: "패션잡화 > 장갑 > 여성장갑",
    level: 3,
    leaf: true
  },
  {
    cid: 50000552,
    name: "남성장갑",
    fullPath: "패션잡화 > 장갑 > 남성장갑",
    level: 3,
    leaf: true
  },
  {
    cid: 50000553,
    name: "암워머/토시",
    fullPath: "패션잡화 > 장갑 > 암워머/토시",
    level: 3,
    leaf: true
  }
],
  50000183: [
  {
    cid: 50000554,
    name: "선글라스",
    fullPath: "패션잡화 > 선글라스/안경테 > 선글라스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000555,
    name: "선글라스 케이스/소품",
    fullPath: "패션잡화 > 선글라스/안경테 > 선글라스 케이스/소품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000556,
    name: "안경테",
    fullPath: "패션잡화 > 선글라스/안경테 > 안경테",
    level: 3,
    leaf: true
  },
  {
    cid: 50000557,
    name: "안경케이스",
    fullPath: "패션잡화 > 선글라스/안경테 > 안경케이스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000558,
    name: "안경소품",
    fullPath: "패션잡화 > 선글라스/안경테 > 안경소품",
    level: 3,
    leaf: true
  },
  {
    cid: 50000559,
    name: "안경줄",
    fullPath: "패션잡화 > 선글라스/안경테 > 안경줄",
    level: 3,
    leaf: true
  }
],
  50000184: [
  {
    cid: 50001478,
    name: "가발",
    fullPath: "패션잡화 > 헤어액세서리 > 가발",
    level: 3,
    leaf: false
  },
  {
    cid: 50000560,
    name: "헤어밴드",
    fullPath: "패션잡화 > 헤어액세서리 > 헤어밴드",
    level: 3,
    leaf: true
  },
  {
    cid: 50000561,
    name: "헤어핀",
    fullPath: "패션잡화 > 헤어액세서리 > 헤어핀",
    level: 3,
    leaf: true
  },
  {
    cid: 50000562,
    name: "헤어끈",
    fullPath: "패션잡화 > 헤어액세서리 > 헤어끈",
    level: 3,
    leaf: true
  },
  {
    cid: 50000563,
    name: "헤어액세서리소품",
    fullPath: "패션잡화 > 헤어액세서리 > 헤어액세서리소품",
    level: 3,
    leaf: true
  }
],
  50000185: [
  {
    cid: 50001479,
    name: "스카프",
    fullPath: "패션잡화 > 패션소품 > 스카프",
    level: 3,
    leaf: false
  },
  {
    cid: 50001480,
    name: "손수건",
    fullPath: "패션잡화 > 패션소품 > 손수건",
    level: 3,
    leaf: false
  },
  {
    cid: 50001481,
    name: "넥타이",
    fullPath: "패션잡화 > 패션소품 > 넥타이",
    level: 3,
    leaf: false
  },
  {
    cid: 50000564,
    name: "커프스",
    fullPath: "패션잡화 > 패션소품 > 커프스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000565,
    name: "머플러",
    fullPath: "패션잡화 > 패션소품 > 머플러",
    level: 3,
    leaf: true
  },
  {
    cid: 50000566,
    name: "넥워머",
    fullPath: "패션잡화 > 패션소품 > 넥워머",
    level: 3,
    leaf: true
  },
  {
    cid: 50000567,
    name: "숄",
    fullPath: "패션잡화 > 패션소품 > 숄",
    level: 3,
    leaf: true
  },
  {
    cid: 50000568,
    name: "넥케이프",
    fullPath: "패션잡화 > 패션소품 > 넥케이프",
    level: 3,
    leaf: true
  },
  {
    cid: 50000569,
    name: "행커치프",
    fullPath: "패션잡화 > 패션소품 > 행커치프",
    level: 3,
    leaf: true
  },
  {
    cid: 50001482,
    name: "우산",
    fullPath: "패션잡화 > 패션소품 > 우산",
    level: 3,
    leaf: false
  },
  {
    cid: 50001483,
    name: "양산",
    fullPath: "패션잡화 > 패션소품 > 양산",
    level: 3,
    leaf: false
  },
  {
    cid: 50001484,
    name: "스타킹",
    fullPath: "패션잡화 > 패션소품 > 스타킹",
    level: 3,
    leaf: false
  },
  {
    cid: 50001485,
    name: "브로치",
    fullPath: "패션잡화 > 패션소품 > 브로치",
    level: 3,
    leaf: false
  },
  {
    cid: 50000570,
    name: "키홀더",
    fullPath: "패션잡화 > 패션소품 > 키홀더",
    level: 3,
    leaf: true
  },
  {
    cid: 50000571,
    name: "부채",
    fullPath: "패션잡화 > 패션소품 > 부채",
    level: 3,
    leaf: true
  },
  {
    cid: 50000572,
    name: "와펜",
    fullPath: "패션잡화 > 패션소품 > 와펜",
    level: 3,
    leaf: true
  },
  {
    cid: 50000573,
    name: "코르사주",
    fullPath: "패션잡화 > 패션소품 > 코르사주",
    level: 3,
    leaf: true
  },
  {
    cid: 50000574,
    name: "한복소품",
    fullPath: "패션잡화 > 패션소품 > 한복소품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001486,
    name: "라이터/담배용품",
    fullPath: "패션잡화 > 패션소품 > 라이터/담배용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000434,
    name: "기타패션소품",
    fullPath: "패션잡화 > 패션소품 > 기타패션소품",
    level: 3,
    leaf: true
  }
],
  50000186: [
  {
    cid: 50000425,
    name: "커플시계",
    fullPath: "패션잡화 > 시계 > 커플시계",
    level: 3,
    leaf: true
  },
  {
    cid: 50000426,
    name: "아동시계",
    fullPath: "패션잡화 > 시계 > 아동시계",
    level: 3,
    leaf: true
  },
  {
    cid: 50000435,
    name: "시계수리용품",
    fullPath: "패션잡화 > 시계 > 시계수리용품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001487,
    name: "패션시계",
    fullPath: "패션잡화 > 시계 > 패션시계",
    level: 3,
    leaf: false
  },
  {
    cid: 50001488,
    name: "시계소품",
    fullPath: "패션잡화 > 시계 > 시계소품",
    level: 3,
    leaf: false
  }
],
  50000188: [
  {
    cid: 50000432,
    name: "골드바",
    fullPath: "패션잡화 > 순금 > 골드바",
    level: 3,
    leaf: true
  },
  {
    cid: 50006911,
    name: "실버바",
    fullPath: "패션잡화 > 순금 > 실버바",
    level: 3,
    leaf: true
  },
  {
    cid: 50000433,
    name: "순금기념품",
    fullPath: "패션잡화 > 순금 > 순금기념품",
    level: 3,
    leaf: true
  }
],
  50000189: [
  {
    cid: 50001489,
    name: "반지",
    fullPath: "패션잡화 > 주얼리 > 반지",
    level: 3,
    leaf: false
  },
  {
    cid: 50001490,
    name: "귀걸이",
    fullPath: "패션잡화 > 주얼리 > 귀걸이",
    level: 3,
    leaf: false
  },
  {
    cid: 50001491,
    name: "목걸이",
    fullPath: "패션잡화 > 주얼리 > 목걸이",
    level: 3,
    leaf: false
  },
  {
    cid: 50001495,
    name: "팔찌",
    fullPath: "패션잡화 > 주얼리 > 팔찌",
    level: 3,
    leaf: false
  },
  {
    cid: 50001492,
    name: "펜던트",
    fullPath: "패션잡화 > 주얼리 > 펜던트",
    level: 3,
    leaf: false
  },
  {
    cid: 50001493,
    name: "주얼리세트",
    fullPath: "패션잡화 > 주얼리 > 주얼리세트",
    level: 3,
    leaf: false
  },
  {
    cid: 50001494,
    name: "주얼리소품",
    fullPath: "패션잡화 > 주얼리 > 주얼리소품",
    level: 3,
    leaf: false
  },
  {
    cid: 50006174,
    name: "발찌",
    fullPath: "패션잡화 > 주얼리 > 발찌",
    level: 3,
    leaf: false
  },
  {
    cid: 50017500,
    name: "피어싱",
    fullPath: "패션잡화 > 주얼리 > 피어싱",
    level: 3,
    leaf: false
  }
],
  50000190: [
  {
    cid: 50000342,
    name: "넥케어",
    fullPath: "화장품/미용 > 스킨케어 > 넥케어",
    level: 3,
    leaf: true
  },
  {
    cid: 50000437,
    name: "스킨/토너",
    fullPath: "화장품/미용 > 스킨케어 > 스킨/토너",
    level: 3,
    leaf: true
  },
  {
    cid: 50000438,
    name: "로션",
    fullPath: "화장품/미용 > 스킨케어 > 로션",
    level: 3,
    leaf: true
  },
  {
    cid: 50000439,
    name: "에센스",
    fullPath: "화장품/미용 > 스킨케어 > 에센스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000440,
    name: "크림",
    fullPath: "화장품/미용 > 스킨케어 > 크림",
    level: 3,
    leaf: true
  },
  {
    cid: 50000441,
    name: "아이케어",
    fullPath: "화장품/미용 > 스킨케어 > 아이케어",
    level: 3,
    leaf: true
  },
  {
    cid: 50000442,
    name: "미스트",
    fullPath: "화장품/미용 > 스킨케어 > 미스트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000443,
    name: "페이스오일",
    fullPath: "화장품/미용 > 스킨케어 > 페이스오일",
    level: 3,
    leaf: true
  },
  {
    cid: 50000444,
    name: "화장품세트",
    fullPath: "화장품/미용 > 스킨케어 > 화장품세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50008980,
    name: "톤업크림",
    fullPath: "화장품/미용 > 스킨케어 > 톤업크림",
    level: 3,
    leaf: true
  },
  {
    cid: 50015500,
    name: "토너패드/앰플패드",
    fullPath: "화장품/미용 > 스킨케어 > 토너패드/앰플패드",
    level: 3,
    leaf: true
  }
],
  50000191: [
  {
    cid: 50000445,
    name: "선크림",
    fullPath: "화장품/미용 > 선케어 > 선크림",
    level: 3,
    leaf: true
  },
  {
    cid: 50000446,
    name: "선스프레이",
    fullPath: "화장품/미용 > 선케어 > 선스프레이",
    level: 3,
    leaf: true
  },
  {
    cid: 50000447,
    name: "선스틱",
    fullPath: "화장품/미용 > 선케어 > 선스틱",
    level: 3,
    leaf: true
  },
  {
    cid: 50000448,
    name: "선파우더/쿠션",
    fullPath: "화장품/미용 > 선케어 > 선파우더/쿠션",
    level: 3,
    leaf: true
  },
  {
    cid: 50000449,
    name: "애프터선",
    fullPath: "화장품/미용 > 선케어 > 애프터선",
    level: 3,
    leaf: true
  },
  {
    cid: 50000450,
    name: "선케어세트",
    fullPath: "화장품/미용 > 선케어 > 선케어세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001496,
    name: "태닝",
    fullPath: "화장품/미용 > 선케어 > 태닝",
    level: 3,
    leaf: false
  }
],
  50000192: [
  {
    cid: 50000451,
    name: "클렌징폼",
    fullPath: "화장품/미용 > 클렌징 > 클렌징폼",
    level: 3,
    leaf: true
  },
  {
    cid: 50000452,
    name: "클렌징오일",
    fullPath: "화장품/미용 > 클렌징 > 클렌징오일",
    level: 3,
    leaf: true
  },
  {
    cid: 50000453,
    name: "클렌징크림",
    fullPath: "화장품/미용 > 클렌징 > 클렌징크림",
    level: 3,
    leaf: true
  },
  {
    cid: 50000454,
    name: "클렌징밀크",
    fullPath: "화장품/미용 > 클렌징 > 클렌징밀크",
    level: 3,
    leaf: true
  },
  {
    cid: 50000455,
    name: "클렌징젤",
    fullPath: "화장품/미용 > 클렌징 > 클렌징젤",
    level: 3,
    leaf: true
  },
  {
    cid: 50000456,
    name: "클렌징워터",
    fullPath: "화장품/미용 > 클렌징 > 클렌징워터",
    level: 3,
    leaf: true
  },
  {
    cid: 50000457,
    name: "클렌징티슈",
    fullPath: "화장품/미용 > 클렌징 > 클렌징티슈",
    level: 3,
    leaf: true
  },
  {
    cid: 50000458,
    name: "클렌징비누",
    fullPath: "화장품/미용 > 클렌징 > 클렌징비누",
    level: 3,
    leaf: true
  },
  {
    cid: 50000459,
    name: "클렌징파우더",
    fullPath: "화장품/미용 > 클렌징 > 클렌징파우더",
    level: 3,
    leaf: true
  },
  {
    cid: 50000460,
    name: "립앤아이리무버",
    fullPath: "화장품/미용 > 클렌징 > 립앤아이리무버",
    level: 3,
    leaf: true
  },
  {
    cid: 50000461,
    name: "스크럽/필링",
    fullPath: "화장품/미용 > 클렌징 > 스크럽/필링",
    level: 3,
    leaf: true
  },
  {
    cid: 50000462,
    name: "클렌징세트",
    fullPath: "화장품/미용 > 클렌징 > 클렌징세트",
    level: 3,
    leaf: true
  }
],
  50000193: [
  {
    cid: 50000463,
    name: "마스크시트",
    fullPath: "화장품/미용 > 마스크/팩 > 마스크시트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000464,
    name: "필오프팩",
    fullPath: "화장품/미용 > 마스크/팩 > 필오프팩",
    level: 3,
    leaf: true
  },
  {
    cid: 50000465,
    name: "워시오프팩",
    fullPath: "화장품/미용 > 마스크/팩 > 워시오프팩",
    level: 3,
    leaf: true
  },
  {
    cid: 50000466,
    name: "코팩",
    fullPath: "화장품/미용 > 마스크/팩 > 코팩",
    level: 3,
    leaf: true
  },
  {
    cid: 50000467,
    name: "수면팩",
    fullPath: "화장품/미용 > 마스크/팩 > 수면팩",
    level: 3,
    leaf: true
  },
  {
    cid: 50000468,
    name: "마사지크림/젤",
    fullPath: "화장품/미용 > 마스크/팩 > 마사지크림/젤",
    level: 3,
    leaf: true
  },
  {
    cid: 50000469,
    name: "마스크/팩세트",
    fullPath: "화장품/미용 > 마스크/팩 > 마스크/팩세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50017000,
    name: "모델링팩",
    fullPath: "화장품/미용 > 마스크/팩 > 모델링팩",
    level: 3,
    leaf: true
  }
],
  50000194: [
  {
    cid: 50000470,
    name: "BB/CC크림",
    fullPath: "화장품/미용 > 베이스메이크업 > BB/CC크림",
    level: 3,
    leaf: true
  },
  {
    cid: 50000345,
    name: "메이크업베이스",
    fullPath: "화장품/미용 > 베이스메이크업 > 메이크업베이스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000472,
    name: "프라이머",
    fullPath: "화장품/미용 > 베이스메이크업 > 프라이머",
    level: 3,
    leaf: true
  },
  {
    cid: 50001370,
    name: "파운데이션",
    fullPath: "화장품/미용 > 베이스메이크업 > 파운데이션",
    level: 3,
    leaf: false
  },
  {
    cid: 50001369,
    name: "파우더",
    fullPath: "화장품/미용 > 베이스메이크업 > 파우더",
    level: 3,
    leaf: false
  },
  {
    cid: 50000347,
    name: "컨실러",
    fullPath: "화장품/미용 > 베이스메이크업 > 컨실러",
    level: 3,
    leaf: true
  },
  {
    cid: 50000390,
    name: "베이스메이크업세트",
    fullPath: "화장품/미용 > 베이스메이크업 > 베이스메이크업세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50020859,
    name: "쿠션",
    fullPath: "화장품/미용 > 베이스메이크업 > 쿠션",
    level: 3,
    leaf: true
  }
],
  50000195: [
  {
    cid: 50000391,
    name: "립스틱",
    fullPath: "화장품/미용 > 색조메이크업 > 립스틱",
    level: 3,
    leaf: true
  },
  {
    cid: 50000392,
    name: "립케어",
    fullPath: "화장품/미용 > 색조메이크업 > 립케어",
    level: 3,
    leaf: true
  },
  {
    cid: 50000393,
    name: "립글로스",
    fullPath: "화장품/미용 > 색조메이크업 > 립글로스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000394,
    name: "립틴트",
    fullPath: "화장품/미용 > 색조메이크업 > 립틴트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000395,
    name: "립라이너",
    fullPath: "화장품/미용 > 색조메이크업 > 립라이너",
    level: 3,
    leaf: true
  },
  {
    cid: 50000396,
    name: "아이섀도",
    fullPath: "화장품/미용 > 색조메이크업 > 아이섀도",
    level: 3,
    leaf: true
  },
  {
    cid: 50001371,
    name: "아이라이너",
    fullPath: "화장품/미용 > 색조메이크업 > 아이라이너",
    level: 3,
    leaf: false
  },
  {
    cid: 50000397,
    name: "마스카라",
    fullPath: "화장품/미용 > 색조메이크업 > 마스카라",
    level: 3,
    leaf: true
  },
  {
    cid: 50000398,
    name: "아이브로",
    fullPath: "화장품/미용 > 색조메이크업 > 아이브로",
    level: 3,
    leaf: true
  },
  {
    cid: 50000399,
    name: "블러셔",
    fullPath: "화장품/미용 > 색조메이크업 > 블러셔",
    level: 3,
    leaf: true
  },
  {
    cid: 50000400,
    name: "하이라이터/쉐이딩",
    fullPath: "화장품/미용 > 색조메이크업 > 하이라이터/쉐이딩",
    level: 3,
    leaf: true
  },
  {
    cid: 50000401,
    name: "색조메이크업세트",
    fullPath: "화장품/미용 > 색조메이크업 > 색조메이크업세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50009080,
    name: "속눈썹영양제",
    fullPath: "화장품/미용 > 색조메이크업 > 속눈썹영양제",
    level: 3,
    leaf: true
  }
],
  50000196: [
  {
    cid: 50000402,
    name: "매니큐어/젤네일",
    fullPath: "화장품/미용 > 네일케어 > 매니큐어/젤네일",
    level: 3,
    leaf: true
  },
  {
    cid: 50000403,
    name: "네일아트",
    fullPath: "화장품/미용 > 네일케어 > 네일아트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000404,
    name: "네일영양제",
    fullPath: "화장품/미용 > 네일케어 > 네일영양제",
    level: 3,
    leaf: true
  },
  {
    cid: 50000405,
    name: "네일리무버",
    fullPath: "화장품/미용 > 네일케어 > 네일리무버",
    level: 3,
    leaf: true
  },
  {
    cid: 50000406,
    name: "네일케어도구",
    fullPath: "화장품/미용 > 네일케어 > 네일케어도구",
    level: 3,
    leaf: true
  },
  {
    cid: 50000407,
    name: "네일케어세트",
    fullPath: "화장품/미용 > 네일케어 > 네일케어세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50017040,
    name: "네일팁/페디팁",
    fullPath: "화장품/미용 > 네일케어 > 네일팁/페디팁",
    level: 3,
    leaf: true
  }
],
  50000197: [
  {
    cid: 50000281,
    name: "바디크림",
    fullPath: "화장품/미용 > 바디케어 > 바디크림",
    level: 3,
    leaf: true
  },
  {
    cid: 50000282,
    name: "바디오일",
    fullPath: "화장품/미용 > 바디케어 > 바디오일",
    level: 3,
    leaf: true
  },
  {
    cid: 50000283,
    name: "바디미스트/샤워코롱",
    fullPath: "화장품/미용 > 바디케어 > 바디미스트/샤워코롱",
    level: 3,
    leaf: true
  },
  {
    cid: 50000284,
    name: "바디파우더",
    fullPath: "화장품/미용 > 바디케어 > 바디파우더",
    level: 3,
    leaf: true
  },
  {
    cid: 50000285,
    name: "바디클렌저",
    fullPath: "화장품/미용 > 바디케어 > 바디클렌저",
    level: 3,
    leaf: true
  },
  {
    cid: 50000286,
    name: "바디스크럽",
    fullPath: "화장품/미용 > 바디케어 > 바디스크럽",
    level: 3,
    leaf: true
  },
  {
    cid: 50000287,
    name: "여성청결제",
    fullPath: "화장품/미용 > 바디케어 > 여성청결제",
    level: 3,
    leaf: true
  },
  {
    cid: 50000288,
    name: "목욕비누",
    fullPath: "화장품/미용 > 바디케어 > 목욕비누",
    level: 3,
    leaf: true
  },
  {
    cid: 50000290,
    name: "풋케어",
    fullPath: "화장품/미용 > 바디케어 > 풋케어",
    level: 3,
    leaf: true
  },
  {
    cid: 50000291,
    name: "입욕제",
    fullPath: "화장품/미용 > 바디케어 > 입욕제",
    level: 3,
    leaf: true
  },
  {
    cid: 50000292,
    name: "아로마테라피",
    fullPath: "화장품/미용 > 바디케어 > 아로마테라피",
    level: 3,
    leaf: true
  },
  {
    cid: 50000293,
    name: "데오드란트",
    fullPath: "화장품/미용 > 바디케어 > 데오드란트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000294,
    name: "제모제",
    fullPath: "화장품/미용 > 바디케어 > 제모제",
    level: 3,
    leaf: true
  },
  {
    cid: 50000295,
    name: "바디슬리밍",
    fullPath: "화장품/미용 > 바디케어 > 바디슬리밍",
    level: 3,
    leaf: true
  },
  {
    cid: 50000296,
    name: "바디케어세트",
    fullPath: "화장품/미용 > 바디케어 > 바디케어세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000408,
    name: "바디로션",
    fullPath: "화장품/미용 > 바디케어 > 바디로션",
    level: 3,
    leaf: true
  },
  {
    cid: 50020699,
    name: "핸드케어",
    fullPath: "화장품/미용 > 바디케어 > 핸드케어",
    level: 3,
    leaf: false
  }
],
  50000198: [
  {
    cid: 50000297,
    name: "샴푸",
    fullPath: "화장품/미용 > 헤어케어 > 샴푸",
    level: 3,
    leaf: true
  },
  {
    cid: 50000298,
    name: "린스/컨디셔너",
    fullPath: "화장품/미용 > 헤어케어 > 린스/컨디셔너",
    level: 3,
    leaf: true
  },
  {
    cid: 50000299,
    name: "트리트먼트/헤어팩",
    fullPath: "화장품/미용 > 헤어케어 > 트리트먼트/헤어팩",
    level: 3,
    leaf: true
  },
  {
    cid: 50000300,
    name: "헤어에센스",
    fullPath: "화장품/미용 > 헤어케어 > 헤어에센스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000302,
    name: "헤어미스트",
    fullPath: "화장품/미용 > 헤어케어 > 헤어미스트",
    level: 3,
    leaf: true
  },
  {
    cid: 50000303,
    name: "두피케어",
    fullPath: "화장품/미용 > 헤어케어 > 두피케어",
    level: 3,
    leaf: true
  },
  {
    cid: 50000304,
    name: "탈모케어",
    fullPath: "화장품/미용 > 헤어케어 > 탈모케어",
    level: 3,
    leaf: true
  },
  {
    cid: 50000305,
    name: "헤어케어세트",
    fullPath: "화장품/미용 > 헤어케어 > 헤어케어세트",
    level: 3,
    leaf: true
  }
],
  50000199: [
  {
    cid: 50000306,
    name: "헤어왁스",
    fullPath: "화장품/미용 > 헤어스타일링 > 헤어왁스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000307,
    name: "헤어스프레이",
    fullPath: "화장품/미용 > 헤어스타일링 > 헤어스프레이",
    level: 3,
    leaf: true
  },
  {
    cid: 50000308,
    name: "헤어무스",
    fullPath: "화장품/미용 > 헤어스타일링 > 헤어무스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000309,
    name: "헤어젤",
    fullPath: "화장품/미용 > 헤어스타일링 > 헤어젤",
    level: 3,
    leaf: true
  },
  {
    cid: 50000311,
    name: "염색약",
    fullPath: "화장품/미용 > 헤어스타일링 > 염색약",
    level: 3,
    leaf: true
  },
  {
    cid: 50001372,
    name: "파마약",
    fullPath: "화장품/미용 > 헤어스타일링 > 파마약",
    level: 3,
    leaf: false
  }
],
  50000200: [
  {
    cid: 50000312,
    name: "여성향수",
    fullPath: "화장품/미용 > 향수 > 여성향수",
    level: 3,
    leaf: true
  },
  {
    cid: 50000313,
    name: "남성향수",
    fullPath: "화장품/미용 > 향수 > 남성향수",
    level: 3,
    leaf: true
  },
  {
    cid: 50000314,
    name: "남녀공용향수",
    fullPath: "화장품/미용 > 향수 > 남녀공용향수",
    level: 3,
    leaf: true
  },
  {
    cid: 50000315,
    name: "향수세트",
    fullPath: "화장품/미용 > 향수 > 향수세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50017020,
    name: "고체향수",
    fullPath: "화장품/미용 > 향수 > 고체향수",
    level: 3,
    leaf: true
  }
],
  50000201: [
  {
    cid: 50001373,
    name: "아이소품",
    fullPath: "화장품/미용 > 뷰티소품 > 아이소품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001374,
    name: "페이스소품",
    fullPath: "화장품/미용 > 뷰티소품 > 페이스소품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001375,
    name: "헤어소품",
    fullPath: "화장품/미용 > 뷰티소품 > 헤어소품",
    level: 3,
    leaf: false
  },
  {
    cid: 50000316,
    name: "바디소품",
    fullPath: "화장품/미용 > 뷰티소품 > 바디소품",
    level: 3,
    leaf: true
  },
  {
    cid: 50001376,
    name: "메이크업브러시",
    fullPath: "화장품/미용 > 뷰티소품 > 메이크업브러시",
    level: 3,
    leaf: false
  },
  {
    cid: 50000317,
    name: "타투",
    fullPath: "화장품/미용 > 뷰티소품 > 타투",
    level: 3,
    leaf: true
  },
  {
    cid: 50000319,
    name: "화장품케이스",
    fullPath: "화장품/미용 > 뷰티소품 > 화장품케이스",
    level: 3,
    leaf: true
  },
  {
    cid: 50005289,
    name: "DIY화장품재료",
    fullPath: "화장품/미용 > 뷰티소품 > DIY화장품재료",
    level: 3,
    leaf: true
  }
],
  50000202: [
  {
    cid: 50000327,
    name: "선케어",
    fullPath: "화장품/미용 > 남성화장품 > 선케어",
    level: 3,
    leaf: true
  },
  {
    cid: 50000328,
    name: "클렌징",
    fullPath: "화장품/미용 > 남성화장품 > 클렌징",
    level: 3,
    leaf: true
  },
  {
    cid: 50000329,
    name: "스크럽/필링",
    fullPath: "화장품/미용 > 남성화장품 > 스크럽/필링",
    level: 3,
    leaf: true
  },
  {
    cid: 50000330,
    name: "마스크/팩",
    fullPath: "화장품/미용 > 남성화장품 > 마스크/팩",
    level: 3,
    leaf: true
  },
  {
    cid: 50000333,
    name: "남성청결제",
    fullPath: "화장품/미용 > 남성화장품 > 남성청결제",
    level: 3,
    leaf: true
  },
  {
    cid: 50000334,
    name: "남성화장품세트",
    fullPath: "화장품/미용 > 남성화장품 > 남성화장품세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50020879,
    name: "메이크업",
    fullPath: "화장품/미용 > 남성화장품 > 메이크업",
    level: 3,
    leaf: false
  },
  {
    cid: 50020919,
    name: "스킨케어",
    fullPath: "화장품/미용 > 남성화장품 > 스킨케어",
    level: 3,
    leaf: false
  }
],
  50000204: [
  {
    cid: 50000246,
    name: "SKT",
    fullPath: "디지털/가전 > 휴대폰 > SKT",
    level: 3,
    leaf: true
  },
  {
    cid: 50000247,
    name: "KT",
    fullPath: "디지털/가전 > 휴대폰 > KT",
    level: 3,
    leaf: true
  },
  {
    cid: 50000248,
    name: "LG U+",
    fullPath: "디지털/가전 > 휴대폰 > LG U+",
    level: 3,
    leaf: true
  },
  {
    cid: 50000249,
    name: "공기계/중고폰",
    fullPath: "디지털/가전 > 휴대폰 > 공기계/중고폰",
    level: 3,
    leaf: true
  },
  {
    cid: 50000250,
    name: "해외출시폰",
    fullPath: "디지털/가전 > 휴대폰 > 해외출시폰",
    level: 3,
    leaf: true
  },
  {
    cid: 50000251,
    name: "MVNO",
    fullPath: "디지털/가전 > 휴대폰 > MVNO",
    level: 3,
    leaf: true
  },
  {
    cid: 50001519,
    name: "자급제폰",
    fullPath: "디지털/가전 > 휴대폰 > 자급제폰",
    level: 3,
    leaf: true
  },
  {
    cid: 50001520,
    name: "선불폰",
    fullPath: "디지털/가전 > 휴대폰 > 선불폰",
    level: 3,
    leaf: true
  }
],
  50000205: [
  {
    cid: 50001377,
    name: "휴대폰케이스",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 휴대폰케이스",
    level: 3,
    leaf: false
  },
  {
    cid: 50001378,
    name: "휴대폰보호필름",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 휴대폰보호필름",
    level: 3,
    leaf: false
  },
  {
    cid: 50001379,
    name: "휴대폰충전기",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 휴대폰충전기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001380,
    name: "휴대폰배터리",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 휴대폰배터리",
    level: 3,
    leaf: false
  },
  {
    cid: 50000252,
    name: "휴대폰케이블",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 휴대폰케이블",
    level: 3,
    leaf: true
  },
  {
    cid: 50000254,
    name: "휴대폰렌즈",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 휴대폰렌즈",
    level: 3,
    leaf: true
  },
  {
    cid: 50000255,
    name: "휴대폰거치대",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 휴대폰거치대",
    level: 3,
    leaf: true
  },
  {
    cid: 50000256,
    name: "휴대폰줄",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 휴대폰줄",
    level: 3,
    leaf: true
  },
  {
    cid: 50000257,
    name: "휴대폰이어캡",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 휴대폰이어캡",
    level: 3,
    leaf: true
  },
  {
    cid: 50000259,
    name: "핸드셋",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 핸드셋",
    level: 3,
    leaf: true
  },
  {
    cid: 50000261,
    name: "휴대폰DMB수신기",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 휴대폰DMB수신기",
    level: 3,
    leaf: true
  },
  {
    cid: 50000262,
    name: "웨어러블 디바이스",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 웨어러블 디바이스",
    level: 3,
    leaf: true
  },
  {
    cid: 50000263,
    name: "휴대폰쿨링패드",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 휴대폰쿨링패드",
    level: 3,
    leaf: true
  },
  {
    cid: 50000264,
    name: "기타휴대폰액세서리",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 기타휴대폰액세서리",
    level: 3,
    leaf: true
  },
  {
    cid: 50006369,
    name: "짐벌",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 짐벌",
    level: 3,
    leaf: true
  },
  {
    cid: 50006370,
    name: "셀카봉",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 셀카봉",
    level: 3,
    leaf: true
  },
  {
    cid: 50006371,
    name: "웨어러블 디바이스 액세서리",
    fullPath: "디지털/가전 > 휴대폰액세서리 > 웨어러블 디바이스 액세서리",
    level: 3,
    leaf: true
  }
],
  50000206: [
  {
    cid: 50000265,
    name: "DSLR카메라",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > DSLR카메라",
    level: 3,
    leaf: true
  },
  {
    cid: 50000266,
    name: "미러리스디카",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 미러리스디카",
    level: 3,
    leaf: true
  },
  {
    cid: 50000267,
    name: "일반디카",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 일반디카",
    level: 3,
    leaf: true
  },
  {
    cid: 50000268,
    name: "캠코더",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 캠코더",
    level: 3,
    leaf: true
  },
  {
    cid: 50001381,
    name: "카메라렌즈",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 카메라렌즈",
    level: 3,
    leaf: false
  },
  {
    cid: 50001382,
    name: "렌즈용품",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 렌즈용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001383,
    name: "즉석카메라",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 즉석카메라",
    level: 3,
    leaf: false
  },
  {
    cid: 50001384,
    name: "필름카메라",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 필름카메라",
    level: 3,
    leaf: false
  },
  {
    cid: 50001385,
    name: "메모리카드",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 메모리카드",
    level: 3,
    leaf: false
  },
  {
    cid: 50001386,
    name: "카드리더기",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 카드리더기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001387,
    name: "카메라가방/케이스",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 카메라가방/케이스",
    level: 3,
    leaf: false
  },
  {
    cid: 50001388,
    name: "카메라스트랩/그립",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 카메라스트랩/그립",
    level: 3,
    leaf: false
  },
  {
    cid: 50001389,
    name: "삼각대/헤드",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 삼각대/헤드",
    level: 3,
    leaf: false
  },
  {
    cid: 50001390,
    name: "플래시/조명용품",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 플래시/조명용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001391,
    name: "충전기/배터리",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 충전기/배터리",
    level: 3,
    leaf: false
  },
  {
    cid: 50001392,
    name: "LCD용품/보호필름",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > LCD용품/보호필름",
    level: 3,
    leaf: false
  },
  {
    cid: 50001393,
    name: "필름/관련용품",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 필름/관련용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001394,
    name: "카메라/캠코더 관련용품",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 카메라/캠코더 관련용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50007073,
    name: "액션캠",
    fullPath: "디지털/가전 > 카메라/캠코더용품 > 액션캠",
    level: 3,
    leaf: true
  }
],
  50000207: [
  {
    cid: 50002009,
    name: "망원경",
    fullPath: "디지털/가전 > 광학기기/용품 > 망원경",
    level: 3,
    leaf: true
  },
  {
    cid: 50002010,
    name: "쌍안경",
    fullPath: "디지털/가전 > 광학기기/용품 > 쌍안경",
    level: 3,
    leaf: true
  },
  {
    cid: 50002011,
    name: "천체망원경",
    fullPath: "디지털/가전 > 광학기기/용품 > 천체망원경",
    level: 3,
    leaf: true
  },
  {
    cid: 50002012,
    name: "현미경",
    fullPath: "디지털/가전 > 광학기기/용품 > 현미경",
    level: 3,
    leaf: true
  },
  {
    cid: 50002013,
    name: "광학용품액세서리",
    fullPath: "디지털/가전 > 광학기기/용품 > 광학용품액세서리",
    level: 3,
    leaf: true
  }
],
  50000208: [
  {
    cid: 50001395,
    name: "TV",
    fullPath: "디지털/가전 > 영상가전 > TV",
    level: 3,
    leaf: false
  },
  {
    cid: 50001396,
    name: "영상가전액세서리",
    fullPath: "디지털/가전 > 영상가전 > 영상가전액세서리",
    level: 3,
    leaf: false
  },
  {
    cid: 50001397,
    name: "프로젝터",
    fullPath: "디지털/가전 > 영상가전 > 프로젝터",
    level: 3,
    leaf: false
  },
  {
    cid: 50001398,
    name: "프로젝터주변기기",
    fullPath: "디지털/가전 > 영상가전 > 프로젝터주변기기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001399,
    name: "영상플레이어",
    fullPath: "디지털/가전 > 영상가전 > 영상플레이어",
    level: 3,
    leaf: false
  },
  {
    cid: 50002014,
    name: "디지털액자",
    fullPath: "디지털/가전 > 영상가전 > 디지털액자",
    level: 3,
    leaf: true
  },
  {
    cid: 50007071,
    name: "사이니지",
    fullPath: "디지털/가전 > 영상가전 > 사이니지",
    level: 3,
    leaf: true
  }
],
  50000209: [
  {
    cid: 50001400,
    name: "홈시어터",
    fullPath: "디지털/가전 > 음향가전 > 홈시어터",
    level: 3,
    leaf: false
  },
  {
    cid: 50001401,
    name: "오디오",
    fullPath: "디지털/가전 > 음향가전 > 오디오",
    level: 3,
    leaf: false
  },
  {
    cid: 50001404,
    name: "마이크",
    fullPath: "디지털/가전 > 음향가전 > 마이크",
    level: 3,
    leaf: false
  },
  {
    cid: 50001963,
    name: "데크",
    fullPath: "디지털/가전 > 음향가전 > 데크",
    level: 3,
    leaf: true
  },
  {
    cid: 50001964,
    name: "리시버/앰프",
    fullPath: "디지털/가전 > 음향가전 > 리시버/앰프",
    level: 3,
    leaf: true
  },
  {
    cid: 50001965,
    name: "튜너",
    fullPath: "디지털/가전 > 음향가전 > 튜너",
    level: 3,
    leaf: true
  },
  {
    cid: 50001966,
    name: "오디오믹서",
    fullPath: "디지털/가전 > 음향가전 > 오디오믹서",
    level: 3,
    leaf: true
  },
  {
    cid: 50001967,
    name: "턴테이블",
    fullPath: "디지털/가전 > 음향가전 > 턴테이블",
    level: 3,
    leaf: true
  },
  {
    cid: 50001968,
    name: "방송음향기기",
    fullPath: "디지털/가전 > 음향가전 > 방송음향기기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001402,
    name: "스피커",
    fullPath: "디지털/가전 > 음향가전 > 스피커",
    level: 3,
    leaf: false
  },
  {
    cid: 50001969,
    name: "DAC",
    fullPath: "디지털/가전 > 음향가전 > DAC",
    level: 3,
    leaf: true
  },
  {
    cid: 50001970,
    name: "라디오",
    fullPath: "디지털/가전 > 음향가전 > 라디오",
    level: 3,
    leaf: true
  },
  {
    cid: 50001403,
    name: "카세트플레이어",
    fullPath: "디지털/가전 > 음향가전 > 카세트플레이어",
    level: 3,
    leaf: false
  },
  {
    cid: 50001971,
    name: "CD플레이어",
    fullPath: "디지털/가전 > 음향가전 > CD플레이어",
    level: 3,
    leaf: true
  },
  {
    cid: 50001972,
    name: "MD플레이어",
    fullPath: "디지털/가전 > 음향가전 > MD플레이어",
    level: 3,
    leaf: true
  },
  {
    cid: 50001973,
    name: "노래반주기",
    fullPath: "디지털/가전 > 음향가전 > 노래반주기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001974,
    name: "MP3",
    fullPath: "디지털/가전 > 음향가전 > MP3",
    level: 3,
    leaf: true
  },
  {
    cid: 50001975,
    name: "PMP",
    fullPath: "디지털/가전 > 음향가전 > PMP",
    level: 3,
    leaf: true
  },
  {
    cid: 50001405,
    name: "MP3/PMP액세서리",
    fullPath: "디지털/가전 > 음향가전 > MP3/PMP액세서리",
    level: 3,
    leaf: false
  },
  {
    cid: 50001406,
    name: "블루투스셋",
    fullPath: "디지털/가전 > 음향가전 > 블루투스셋",
    level: 3,
    leaf: false
  },
  {
    cid: 50001976,
    name: "이어폰",
    fullPath: "디지털/가전 > 음향가전 > 이어폰",
    level: 3,
    leaf: true
  },
  {
    cid: 50001977,
    name: "헤드폰",
    fullPath: "디지털/가전 > 음향가전 > 헤드폰",
    level: 3,
    leaf: true
  },
  {
    cid: 50001407,
    name: "이어폰/헤드폰액세서리",
    fullPath: "디지털/가전 > 음향가전 > 이어폰/헤드폰액세서리",
    level: 3,
    leaf: false
  }
],
  50000210: [
  {
    cid: 50001408,
    name: "세탁/건조기",
    fullPath: "디지털/가전 > 생활가전 > 세탁/건조기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001411,
    name: "다리미",
    fullPath: "디지털/가전 > 생활가전 > 다리미",
    level: 3,
    leaf: false
  },
  {
    cid: 50001412,
    name: "디지털도어록",
    fullPath: "디지털/가전 > 생활가전 > 디지털도어록",
    level: 3,
    leaf: false
  },
  {
    cid: 50001413,
    name: "무전기",
    fullPath: "디지털/가전 > 생활가전 > 무전기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001414,
    name: "스탠드",
    fullPath: "디지털/가전 > 생활가전 > 스탠드",
    level: 3,
    leaf: false
  },
  {
    cid: 50001978,
    name: "재봉틀",
    fullPath: "디지털/가전 > 생활가전 > 재봉틀",
    level: 3,
    leaf: true
  },
  {
    cid: 50001415,
    name: "전화기",
    fullPath: "디지털/가전 > 생활가전 > 전화기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001416,
    name: "구강청정기",
    fullPath: "디지털/가전 > 생활가전 > 구강청정기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001979,
    name: "보풀제거기",
    fullPath: "디지털/가전 > 생활가전 > 보풀제거기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001980,
    name: "손소독기/손세정기",
    fullPath: "디지털/가전 > 생활가전 > 손소독기/손세정기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001981,
    name: "자외선소독기",
    fullPath: "디지털/가전 > 생활가전 > 자외선소독기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001982,
    name: "핸드드라이어",
    fullPath: "디지털/가전 > 생활가전 > 핸드드라이어",
    level: 3,
    leaf: true
  },
  {
    cid: 50001983,
    name: "연수기",
    fullPath: "디지털/가전 > 생활가전 > 연수기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001984,
    name: "이온수기",
    fullPath: "디지털/가전 > 생활가전 > 이온수기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001985,
    name: "해충퇴치기",
    fullPath: "디지털/가전 > 생활가전 > 해충퇴치기",
    level: 3,
    leaf: true
  },
  {
    cid: 50006964,
    name: "업소용자외선소독기",
    fullPath: "디지털/가전 > 생활가전 > 업소용자외선소독기",
    level: 3,
    leaf: true
  },
  {
    cid: 50007070,
    name: "전신건조기",
    fullPath: "디지털/가전 > 생활가전 > 전신건조기",
    level: 3,
    leaf: true
  }
],
  50000211: [
  {
    cid: 50018120,
    name: "전기면도기",
    fullPath: "디지털/가전 > 이미용가전 > 전기면도기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001418,
    name: "면도기소모품",
    fullPath: "디지털/가전 > 이미용가전 > 면도기소모품",
    level: 3,
    leaf: false
  },
  {
    cid: 50015561,
    name: "헤어기기",
    fullPath: "디지털/가전 > 이미용가전 > 헤어기기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001991,
    name: "코털제거기",
    fullPath: "디지털/가전 > 이미용가전 > 코털제거기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001992,
    name: "눈썹정리기",
    fullPath: "디지털/가전 > 이미용가전 > 눈썹정리기",
    level: 3,
    leaf: true
  },
  {
    cid: 50015583,
    name: "속눈썹고데기",
    fullPath: "디지털/가전 > 이미용가전 > 속눈썹고데기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001993,
    name: "손발톱정리기",
    fullPath: "디지털/가전 > 이미용가전 > 손발톱정리기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001994,
    name: "두피케어기기",
    fullPath: "디지털/가전 > 이미용가전 > 두피케어기기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001995,
    name: "피부케어기기",
    fullPath: "디지털/가전 > 이미용가전 > 피부케어기기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001996,
    name: "제모기",
    fullPath: "디지털/가전 > 이미용가전 > 제모기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001997,
    name: "이발기",
    fullPath: "디지털/가전 > 이미용가전 > 이발기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001864,
    name: "기타이미용가전",
    fullPath: "디지털/가전 > 이미용가전 > 기타이미용가전",
    level: 3,
    leaf: true
  },
  {
    cid: 50001850,
    name: "이미용가전액세서리",
    fullPath: "디지털/가전 > 이미용가전 > 이미용가전액세서리",
    level: 3,
    leaf: true
  }
],
  50000212: [
  {
    cid: 50001428,
    name: "전기매트/장판",
    fullPath: "디지털/가전 > 계절가전 > 전기매트/장판",
    level: 3,
    leaf: false
  },
  {
    cid: 50001429,
    name: "전기요/담요/방석",
    fullPath: "디지털/가전 > 계절가전 > 전기요/담요/방석",
    level: 3,
    leaf: false
  },
  {
    cid: 50001422,
    name: "온풍기",
    fullPath: "디지털/가전 > 계절가전 > 온풍기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001424,
    name: "보일러",
    fullPath: "디지털/가전 > 계절가전 > 보일러",
    level: 3,
    leaf: false
  },
  {
    cid: 50001423,
    name: "온수기",
    fullPath: "디지털/가전 > 계절가전 > 온수기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001521,
    name: "에어커튼",
    fullPath: "디지털/가전 > 계절가전 > 에어커튼",
    level: 3,
    leaf: true
  },
  {
    cid: 50006971,
    name: "업소용냉온풍기",
    fullPath: "디지털/가전 > 계절가전 > 업소용냉온풍기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001853,
    name: "라디에이터",
    fullPath: "디지털/가전 > 계절가전 > 라디에이터",
    level: 3,
    leaf: true
  },
  {
    cid: 50006835,
    name: "컨벡터",
    fullPath: "디지털/가전 > 계절가전 > 컨벡터",
    level: 3,
    leaf: true
  },
  {
    cid: 50001421,
    name: "에어컨",
    fullPath: "디지털/가전 > 계절가전 > 에어컨",
    level: 3,
    leaf: false
  },
  {
    cid: 50001427,
    name: "제습기",
    fullPath: "디지털/가전 > 계절가전 > 제습기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001851,
    name: "냉온풍기",
    fullPath: "디지털/가전 > 계절가전 > 냉온풍기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001425,
    name: "가습기",
    fullPath: "디지털/가전 > 계절가전 > 가습기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001426,
    name: "공기정화기",
    fullPath: "디지털/가전 > 계절가전 > 공기정화기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001419,
    name: "냉풍기",
    fullPath: "디지털/가전 > 계절가전 > 냉풍기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001420,
    name: "선풍기",
    fullPath: "디지털/가전 > 계절가전 > 선풍기",
    level: 3,
    leaf: false
  },
  {
    cid: 50006834,
    name: "에어컨주변기기",
    fullPath: "디지털/가전 > 계절가전 > 에어컨주변기기",
    level: 3,
    leaf: false
  },
  {
    cid: 50009120,
    name: "냉/온수매트",
    fullPath: "디지털/가전 > 계절가전 > 냉/온수매트",
    level: 3,
    leaf: true
  },
  {
    cid: 50009180,
    name: "히터",
    fullPath: "디지털/가전 > 계절가전 > 히터",
    level: 3,
    leaf: false
  }
],
  50000213: [
  {
    cid: 50001430,
    name: "냉장고",
    fullPath: "디지털/가전 > 주방가전 > 냉장고",
    level: 3,
    leaf: false
  },
  {
    cid: 50001431,
    name: "김치냉장고",
    fullPath: "디지털/가전 > 주방가전 > 김치냉장고",
    level: 3,
    leaf: false
  },
  {
    cid: 50001854,
    name: "냉동고",
    fullPath: "디지털/가전 > 주방가전 > 냉동고",
    level: 3,
    leaf: true
  },
  {
    cid: 50001432,
    name: "전용냉장고",
    fullPath: "디지털/가전 > 주방가전 > 전용냉장고",
    level: 3,
    leaf: false
  },
  {
    cid: 50017820,
    name: "냉장고세트",
    fullPath: "디지털/가전 > 주방가전 > 냉장고세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001305,
    name: "가스레인지",
    fullPath: "디지털/가전 > 주방가전 > 가스레인지",
    level: 3,
    leaf: false
  },
  {
    cid: 50001855,
    name: "가스레인지후드",
    fullPath: "디지털/가전 > 주방가전 > 가스레인지후드",
    level: 3,
    leaf: true
  },
  {
    cid: 50001306,
    name: "전기밥솥",
    fullPath: "디지털/가전 > 주방가전 > 전기밥솥",
    level: 3,
    leaf: false
  },
  {
    cid: 50001856,
    name: "전자레인지",
    fullPath: "디지털/가전 > 주방가전 > 전자레인지",
    level: 3,
    leaf: true
  },
  {
    cid: 50001181,
    name: "오븐",
    fullPath: "디지털/가전 > 주방가전 > 오븐",
    level: 3,
    leaf: false
  },
  {
    cid: 50001857,
    name: "인덕션",
    fullPath: "디지털/가전 > 주방가전 > 인덕션",
    level: 3,
    leaf: true
  },
  {
    cid: 50001858,
    name: "하이라이트",
    fullPath: "디지털/가전 > 주방가전 > 하이라이트",
    level: 3,
    leaf: true
  },
  {
    cid: 50007109,
    name: "하이브리드",
    fullPath: "디지털/가전 > 주방가전 > 하이브리드",
    level: 3,
    leaf: true
  },
  {
    cid: 50001859,
    name: "핫플레이트",
    fullPath: "디지털/가전 > 주방가전 > 핫플레이트",
    level: 3,
    leaf: true
  },
  {
    cid: 50001182,
    name: "식기세척/건조기",
    fullPath: "디지털/가전 > 주방가전 > 식기세척/건조기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001183,
    name: "전기포트",
    fullPath: "디지털/가전 > 주방가전 > 전기포트",
    level: 3,
    leaf: false
  },
  {
    cid: 50001184,
    name: "정수기",
    fullPath: "디지털/가전 > 주방가전 > 정수기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001185,
    name: "커피머신/메이커",
    fullPath: "디지털/가전 > 주방가전 > 커피머신/메이커",
    level: 3,
    leaf: false
  },
  {
    cid: 50001186,
    name: "토스터기",
    fullPath: "디지털/가전 > 주방가전 > 토스터기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001706,
    name: "진공포장기",
    fullPath: "디지털/가전 > 주방가전 > 진공포장기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001707,
    name: "음식물처리기",
    fullPath: "디지털/가전 > 주방가전 > 음식물처리기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001710,
    name: "제빵기",
    fullPath: "디지털/가전 > 주방가전 > 제빵기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001711,
    name: "거품/반죽기",
    fullPath: "디지털/가전 > 주방가전 > 거품/반죽기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001712,
    name: "전기그릴",
    fullPath: "디지털/가전 > 주방가전 > 전기그릴",
    level: 3,
    leaf: true
  },
  {
    cid: 50001713,
    name: "생선그릴",
    fullPath: "디지털/가전 > 주방가전 > 생선그릴",
    level: 3,
    leaf: true
  },
  {
    cid: 50001860,
    name: "쥬서기/녹즙기",
    fullPath: "디지털/가전 > 주방가전 > 쥬서기/녹즙기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001861,
    name: "믹서기",
    fullPath: "디지털/가전 > 주방가전 > 믹서기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001862,
    name: "빙수기",
    fullPath: "디지털/가전 > 주방가전 > 빙수기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001863,
    name: "분쇄기",
    fullPath: "디지털/가전 > 주방가전 > 분쇄기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001720,
    name: "요구르트제조기",
    fullPath: "디지털/가전 > 주방가전 > 요구르트제조기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001719,
    name: "두부두유제조기",
    fullPath: "디지털/가전 > 주방가전 > 두부두유제조기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001718,
    name: "식품건조기",
    fullPath: "디지털/가전 > 주방가전 > 식품건조기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001717,
    name: "홍삼제조기",
    fullPath: "디지털/가전 > 주방가전 > 홍삼제조기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001721,
    name: "아이스크림제조기",
    fullPath: "디지털/가전 > 주방가전 > 아이스크림제조기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001716,
    name: "핸드블렌더",
    fullPath: "디지털/가전 > 주방가전 > 핸드블렌더",
    level: 3,
    leaf: true
  },
  {
    cid: 50001187,
    name: "전기쿠커",
    fullPath: "디지털/가전 > 주방가전 > 전기쿠커",
    level: 3,
    leaf: false
  },
  {
    cid: 50001715,
    name: "튀김기",
    fullPath: "디지털/가전 > 주방가전 > 튀김기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001714,
    name: "전기팬",
    fullPath: "디지털/가전 > 주방가전 > 전기팬",
    level: 3,
    leaf: true
  },
  {
    cid: 50001722,
    name: "죽제조기",
    fullPath: "디지털/가전 > 주방가전 > 죽제조기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001723,
    name: "샌드위치제조기",
    fullPath: "디지털/가전 > 주방가전 > 샌드위치제조기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001724,
    name: "와플제조기",
    fullPath: "디지털/가전 > 주방가전 > 와플제조기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001725,
    name: "탄산수제조기",
    fullPath: "디지털/가전 > 주방가전 > 탄산수제조기",
    level: 3,
    leaf: true
  },
  {
    cid: 50001726,
    name: "기타주방가전",
    fullPath: "디지털/가전 > 주방가전 > 기타주방가전",
    level: 3,
    leaf: true
  },
  {
    cid: 50006961,
    name: "업소용튀김기",
    fullPath: "디지털/가전 > 주방가전 > 업소용튀김기",
    level: 3,
    leaf: true
  },
  {
    cid: 50006965,
    name: "업소용음식물처리기",
    fullPath: "디지털/가전 > 주방가전 > 업소용음식물처리기",
    level: 3,
    leaf: true
  },
  {
    cid: 50006966,
    name: "업소용믹서기",
    fullPath: "디지털/가전 > 주방가전 > 업소용믹서기",
    level: 3,
    leaf: true
  },
  {
    cid: 50006969,
    name: "업소용진공포장기",
    fullPath: "디지털/가전 > 주방가전 > 업소용진공포장기",
    level: 3,
    leaf: true
  },
  {
    cid: 50006967,
    name: "업소용빙수기",
    fullPath: "디지털/가전 > 주방가전 > 업소용빙수기",
    level: 3,
    leaf: true
  },
  {
    cid: 50006970,
    name: "업소용거품/반죽기",
    fullPath: "디지털/가전 > 주방가전 > 업소용거품/반죽기",
    level: 3,
    leaf: true
  },
  {
    cid: 50007072,
    name: "에어프라이어",
    fullPath: "디지털/가전 > 주방가전 > 에어프라이어",
    level: 3,
    leaf: true
  },
  {
    cid: 50015962,
    name: "식물재배기",
    fullPath: "디지털/가전 > 주방가전 > 식물재배기",
    level: 3,
    leaf: true
  },
  {
    cid: 50016042,
    name: "식물재배기액세서리",
    fullPath: "디지털/가전 > 주방가전 > 식물재배기액세서리",
    level: 3,
    leaf: true
  },
  {
    cid: 50007234,
    name: "기타주방가전부속품",
    fullPath: "디지털/가전 > 주방가전 > 기타주방가전부속품",
    level: 3,
    leaf: true
  }
],
  50000214: [
  {
    cid: 50001188,
    name: "블랙박스/액세서리",
    fullPath: "디지털/가전 > 자동차기기 > 블랙박스/액세서리",
    level: 3,
    leaf: false
  },
  {
    cid: 50001189,
    name: "내비게이션/액세서리",
    fullPath: "디지털/가전 > 자동차기기 > 내비게이션/액세서리",
    level: 3,
    leaf: false
  },
  {
    cid: 50001190,
    name: "하이패스/GPS",
    fullPath: "디지털/가전 > 자동차기기 > 하이패스/GPS",
    level: 3,
    leaf: false
  },
  {
    cid: 50001191,
    name: "전방/후방카메라",
    fullPath: "디지털/가전 > 자동차기기 > 전방/후방카메라",
    level: 3,
    leaf: false
  },
  {
    cid: 50001192,
    name: "자동차TV/모니터",
    fullPath: "디지털/가전 > 자동차기기 > 자동차TV/모니터",
    level: 3,
    leaf: false
  },
  {
    cid: 50001193,
    name: "카오디오음향기기",
    fullPath: "디지털/가전 > 자동차기기 > 카오디오음향기기",
    level: 3,
    leaf: false
  },
  {
    cid: 50001194,
    name: "카팩",
    fullPath: "디지털/가전 > 자동차기기 > 카팩",
    level: 3,
    leaf: false
  },
  {
    cid: 50001195,
    name: "헤드유닛",
    fullPath: "디지털/가전 > 자동차기기 > 헤드유닛",
    level: 3,
    leaf: false
  },
  {
    cid: 50001197,
    name: "자동차AV용품",
    fullPath: "디지털/가전 > 자동차기기 > 자동차AV용품",
    level: 3,
    leaf: false
  },
  {
    cid: 50001727,
    name: "핸즈프리",
    fullPath: "디지털/가전 > 자동차기기 > 핸즈프리",
    level: 3,
    leaf: true
  }
],
  50005542: [
  {
    cid: 50005543,
    name: "소설",
    fullPath: "도서 > 소설",
    level: 2,
    leaf: false
  },
  {
    cid: 50005544,
    name: "시/에세이",
    fullPath: "도서 > 시/에세이",
    level: 2,
    leaf: false
  },
  {
    cid: 50005549,
    name: "경제/경영",
    fullPath: "도서 > 경제/경영",
    level: 2,
    leaf: false
  },
  {
    cid: 50005550,
    name: "자기계발",
    fullPath: "도서 > 자기계발",
    level: 2,
    leaf: false
  },
  {
    cid: 50005545,
    name: "인문",
    fullPath: "도서 > 인문",
    level: 2,
    leaf: false
  },
  {
    cid: 50005552,
    name: "역사",
    fullPath: "도서 > 역사",
    level: 2,
    leaf: false
  },
  {
    cid: 50005551,
    name: "사회/정치",
    fullPath: "도서 > 사회/정치",
    level: 2,
    leaf: false
  },
  {
    cid: 50005558,
    name: "자연/과학",
    fullPath: "도서 > 자연/과학",
    level: 2,
    leaf: false
  },
  {
    cid: 50005554,
    name: "예술/대중문화",
    fullPath: "도서 > 예술/대중문화",
    level: 2,
    leaf: false
  },
  {
    cid: 50005553,
    name: "종교",
    fullPath: "도서 > 종교",
    level: 2,
    leaf: false
  },
  {
    cid: 50005564,
    name: "유아",
    fullPath: "도서 > 유아",
    level: 2,
    leaf: false
  },
  {
    cid: 50005565,
    name: "어린이",
    fullPath: "도서 > 어린이",
    level: 2,
    leaf: false
  },
  {
    cid: 50005546,
    name: "가정/요리",
    fullPath: "도서 > 가정/요리",
    level: 2,
    leaf: false
  },
  {
    cid: 50005560,
    name: "여행",
    fullPath: "도서 > 여행",
    level: 2,
    leaf: false
  },
  {
    cid: 50005556,
    name: "국어/외국어",
    fullPath: "도서 > 국어/외국어",
    level: 2,
    leaf: false
  },
  {
    cid: 50005561,
    name: "컴퓨터/IT",
    fullPath: "도서 > 컴퓨터/IT",
    level: 2,
    leaf: false
  },
  {
    cid: 50005563,
    name: "청소년",
    fullPath: "도서 > 청소년",
    level: 2,
    leaf: false
  },
  {
    cid: 50005559,
    name: "수험서/자격증",
    fullPath: "도서 > 수험서/자격증",
    level: 2,
    leaf: false
  },
  {
    cid: 50005566,
    name: "만화",
    fullPath: "도서 > 만화",
    level: 2,
    leaf: false
  },
  {
    cid: 50005562,
    name: "잡지",
    fullPath: "도서 > 잡지",
    level: 2,
    leaf: false
  },
  {
    cid: 50005567,
    name: "외국도서",
    fullPath: "도서 > 외국도서",
    level: 2,
    leaf: false
  },
  {
    cid: 50009920,
    name: "건강/취미",
    fullPath: "도서 > 건강/취미",
    level: 2,
    leaf: false
  },
  {
    cid: 50010342,
    name: "고등학교 참고서",
    fullPath: "도서 > 고등학교 참고서",
    level: 2,
    leaf: false
  },
  {
    cid: 50010027,
    name: "중학교 참고서",
    fullPath: "도서 > 중학교 참고서",
    level: 2,
    leaf: false
  },
  {
    cid: 50010481,
    name: "초등학교 참고서",
    fullPath: "도서 > 초등학교 참고서",
    level: 2,
    leaf: false
  },
  {
    cid: 50011040,
    name: "중고도서",
    fullPath: "도서 > 중고도서",
    level: 2,
    leaf: false
  }
],
  50005543: [
  {
    cid: 50005568,
    name: "세계 각국 소설",
    fullPath: "도서 > 소설 > 세계 각국 소설",
    level: 3,
    leaf: false
  },
  {
    cid: 50005569,
    name: "고전/문학",
    fullPath: "도서 > 소설 > 고전/문학",
    level: 3,
    leaf: false
  },
  {
    cid: 50005570,
    name: "장르소설",
    fullPath: "도서 > 소설 > 장르소설",
    level: 3,
    leaf: false
  },
  {
    cid: 50005571,
    name: "테마문학",
    fullPath: "도서 > 소설 > 테마문학",
    level: 3,
    leaf: false
  },
  {
    cid: 50010002,
    name: "한국소설",
    fullPath: "도서 > 소설 > 한국소설",
    level: 3,
    leaf: true
  },
  {
    cid: 50010320,
    name: "비평/창작/이론",
    fullPath: "도서 > 소설 > 비평/창작/이론",
    level: 3,
    leaf: false
  },
  {
    cid: 50010420,
    name: "신화/전설/설화",
    fullPath: "도서 > 소설 > 신화/전설/설화",
    level: 3,
    leaf: false
  },
  {
    cid: 50010401,
    name: "희곡/시나리오",
    fullPath: "도서 > 소설 > 희곡/시나리오",
    level: 3,
    leaf: true
  },
  {
    cid: 50011340,
    name: "eBook",
    fullPath: "도서 > 소설 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011360,
    name: "오디오북",
    fullPath: "도서 > 소설 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50005544: [
  {
    cid: 50011720,
    name: "한국시",
    fullPath: "도서 > 시/에세이 > 한국시",
    level: 3,
    leaf: true
  },
  {
    cid: 50011740,
    name: "외국시",
    fullPath: "도서 > 시/에세이 > 외국시",
    level: 3,
    leaf: true
  },
  {
    cid: 50005579,
    name: "그림/사진 에세이",
    fullPath: "도서 > 시/에세이 > 그림/사진 에세이",
    level: 3,
    leaf: true
  },
  {
    cid: 50005577,
    name: "독서 에세이",
    fullPath: "도서 > 시/에세이 > 독서 에세이",
    level: 3,
    leaf: true
  },
  {
    cid: 50005578,
    name: "명상 에세이",
    fullPath: "도서 > 시/에세이 > 명상 에세이",
    level: 3,
    leaf: true
  },
  {
    cid: 50005576,
    name: "성공 에세이",
    fullPath: "도서 > 시/에세이 > 성공 에세이",
    level: 3,
    leaf: true
  },
  {
    cid: 50005575,
    name: "여행 에세이",
    fullPath: "도서 > 시/에세이 > 여행 에세이",
    level: 3,
    leaf: true
  },
  {
    cid: 50005580,
    name: "연애/사랑 에세이",
    fullPath: "도서 > 시/에세이 > 연애/사랑 에세이",
    level: 3,
    leaf: true
  },
  {
    cid: 50005574,
    name: "명사/연예인 에세이",
    fullPath: "도서 > 시/에세이 > 명사/연예인 에세이",
    level: 3,
    leaf: true
  },
  {
    cid: 50005581,
    name: "명언/잠언록",
    fullPath: "도서 > 시/에세이 > 명언/잠언록",
    level: 3,
    leaf: true
  },
  {
    cid: 50010360,
    name: "음식/요리 에세이",
    fullPath: "도서 > 시/에세이 > 음식/요리 에세이",
    level: 3,
    leaf: true
  },
  {
    cid: 50010026,
    name: "예술 에세이",
    fullPath: "도서 > 시/에세이 > 예술 에세이",
    level: 3,
    leaf: false
  },
  {
    cid: 50011280,
    name: "한국 에세이",
    fullPath: "도서 > 시/에세이 > 한국 에세이",
    level: 3,
    leaf: true
  },
  {
    cid: 50011300,
    name: "외국 에세이",
    fullPath: "도서 > 시/에세이 > 외국 에세이",
    level: 3,
    leaf: true
  },
  {
    cid: 50011380,
    name: "eBook",
    fullPath: "도서 > 시/에세이 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011400,
    name: "오디오북",
    fullPath: "도서 > 시/에세이 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50005545: [
  {
    cid: 50005582,
    name: "인문일반",
    fullPath: "도서 > 인문 > 인문일반",
    level: 3,
    leaf: false
  },
  {
    cid: 50005583,
    name: "심리",
    fullPath: "도서 > 인문 > 심리",
    level: 3,
    leaf: false
  },
  {
    cid: 50005585,
    name: "철학",
    fullPath: "도서 > 인문 > 철학",
    level: 3,
    leaf: false
  },
  {
    cid: 50005587,
    name: "언어학/기호학",
    fullPath: "도서 > 인문 > 언어학/기호학",
    level: 3,
    leaf: false
  },
  {
    cid: 50005588,
    name: "종교학/신화학",
    fullPath: "도서 > 인문 > 종교학/신화학",
    level: 3,
    leaf: false
  },
  {
    cid: 50011421,
    name: "eBook",
    fullPath: "도서 > 인문 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011440,
    name: "오디오북",
    fullPath: "도서 > 인문 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50005546: [
  {
    cid: 50005590,
    name: "결혼/가족",
    fullPath: "도서 > 가정/요리 > 결혼/가족",
    level: 3,
    leaf: false
  },
  {
    cid: 50005591,
    name: "임신/출산",
    fullPath: "도서 > 가정/요리 > 임신/출산",
    level: 3,
    leaf: false
  },
  {
    cid: 50005592,
    name: "자녀교육",
    fullPath: "도서 > 가정/요리 > 자녀교육",
    level: 3,
    leaf: false
  },
  {
    cid: 50005593,
    name: "인테리어/살림",
    fullPath: "도서 > 가정/요리 > 인테리어/살림",
    level: 3,
    leaf: false
  },
  {
    cid: 50005594,
    name: "요리",
    fullPath: "도서 > 가정/요리 > 요리",
    level: 3,
    leaf: false
  },
  {
    cid: 50009984,
    name: "육아",
    fullPath: "도서 > 가정/요리 > 육아",
    level: 3,
    leaf: false
  },
  {
    cid: 50011581,
    name: "eBook",
    fullPath: "도서 > 가정/요리 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011600,
    name: "오디오북",
    fullPath: "도서 > 가정/요리 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50005549: [
  {
    cid: 50005617,
    name: "경제",
    fullPath: "도서 > 경제/경영 > 경제",
    level: 3,
    leaf: false
  },
  {
    cid: 50005618,
    name: "경영",
    fullPath: "도서 > 경제/경영 > 경영",
    level: 3,
    leaf: false
  },
  {
    cid: 50005619,
    name: "마케팅/세일즈",
    fullPath: "도서 > 경제/경영 > 마케팅/세일즈",
    level: 3,
    leaf: false
  },
  {
    cid: 50005620,
    name: "재테크/투자",
    fullPath: "도서 > 경제/경영 > 재테크/투자",
    level: 3,
    leaf: false
  },
  {
    cid: 50010480,
    name: "CEO/비즈니스맨",
    fullPath: "도서 > 경제/경영 > CEO/비즈니스맨",
    level: 3,
    leaf: true
  },
  {
    cid: 50011420,
    name: "eBook",
    fullPath: "도서 > 경제/경영 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011341,
    name: "오디오북",
    fullPath: "도서 > 경제/경영 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50005550: [
  {
    cid: 50005626,
    name: "대화/협상",
    fullPath: "도서 > 자기계발 > 대화/협상",
    level: 3,
    leaf: true
  },
  {
    cid: 50005622,
    name: "성공/처세",
    fullPath: "도서 > 자기계발 > 성공/처세",
    level: 3,
    leaf: true
  },
  {
    cid: 50005623,
    name: "시간관리",
    fullPath: "도서 > 자기계발 > 시간관리",
    level: 3,
    leaf: true
  },
  {
    cid: 50005624,
    name: "자기능력계발",
    fullPath: "도서 > 자기계발 > 자기능력계발",
    level: 3,
    leaf: true
  },
  {
    cid: 50005625,
    name: "인간관계",
    fullPath: "도서 > 자기계발 > 인간관계",
    level: 3,
    leaf: true
  },
  {
    cid: 50010141,
    name: "취업",
    fullPath: "도서 > 자기계발 > 취업",
    level: 3,
    leaf: true
  },
  {
    cid: 50011342,
    name: "eBook",
    fullPath: "도서 > 자기계발 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011422,
    name: "오디오북",
    fullPath: "도서 > 자기계발 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50005551: [
  {
    cid: 50005627,
    name: "정치/외교",
    fullPath: "도서 > 사회/정치 > 정치/외교",
    level: 3,
    leaf: false
  },
  {
    cid: 50005628,
    name: "행정",
    fullPath: "도서 > 사회/정치 > 행정",
    level: 3,
    leaf: false
  },
  {
    cid: 50005629,
    name: "국방/군사",
    fullPath: "도서 > 사회/정치 > 국방/군사",
    level: 3,
    leaf: false
  },
  {
    cid: 50005630,
    name: "법",
    fullPath: "도서 > 사회/정치 > 법",
    level: 3,
    leaf: false
  },
  {
    cid: 50005631,
    name: "사회학",
    fullPath: "도서 > 사회/정치 > 사회학",
    level: 3,
    leaf: false
  },
  {
    cid: 50005632,
    name: "사회복지",
    fullPath: "도서 > 사회/정치 > 사회복지",
    level: 3,
    leaf: false
  },
  {
    cid: 50005633,
    name: "언론/미디어",
    fullPath: "도서 > 사회/정치 > 언론/미디어",
    level: 3,
    leaf: false
  },
  {
    cid: 50010200,
    name: "여성학",
    fullPath: "도서 > 사회/정치 > 여성학",
    level: 3,
    leaf: true
  },
  {
    cid: 50010220,
    name: "교육학",
    fullPath: "도서 > 사회/정치 > 교육학",
    level: 3,
    leaf: false
  },
  {
    cid: 50011460,
    name: "eBook",
    fullPath: "도서 > 사회/정치 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011461,
    name: "오디오북",
    fullPath: "도서 > 사회/정치 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50005552: [
  {
    cid: 50005634,
    name: "역사학/이론/비평",
    fullPath: "도서 > 역사 > 역사학/이론/비평",
    level: 3,
    leaf: false
  },
  {
    cid: 50005635,
    name: "세계사",
    fullPath: "도서 > 역사 > 세계사",
    level: 3,
    leaf: false
  },
  {
    cid: 50005636,
    name: "서양사",
    fullPath: "도서 > 역사 > 서양사",
    level: 3,
    leaf: false
  },
  {
    cid: 50005637,
    name: "동양사",
    fullPath: "도서 > 역사 > 동양사",
    level: 3,
    leaf: false
  },
  {
    cid: 50005638,
    name: "한국사",
    fullPath: "도서 > 역사 > 한국사",
    level: 3,
    leaf: false
  },
  {
    cid: 50010341,
    name: "주제별 역사/문화",
    fullPath: "도서 > 역사 > 주제별 역사/문화",
    level: 3,
    leaf: true
  },
  {
    cid: 50011500,
    name: "eBook",
    fullPath: "도서 > 역사 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011381,
    name: "오디오북",
    fullPath: "도서 > 역사 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50005553: [
  {
    cid: 50005640,
    name: "개신교",
    fullPath: "도서 > 종교 > 개신교",
    level: 3,
    leaf: true
  },
  {
    cid: 50005641,
    name: "천주교(가톨릭)",
    fullPath: "도서 > 종교 > 천주교(가톨릭)",
    level: 3,
    leaf: true
  },
  {
    cid: 50005642,
    name: "불교",
    fullPath: "도서 > 종교 > 불교",
    level: 3,
    leaf: true
  },
  {
    cid: 50005639,
    name: "종교일반",
    fullPath: "도서 > 종교 > 종교일반",
    level: 3,
    leaf: true
  },
  {
    cid: 50005643,
    name: "기타 종교",
    fullPath: "도서 > 종교 > 기타 종교",
    level: 3,
    leaf: true
  },
  {
    cid: 50011780,
    name: "eBook",
    fullPath: "도서 > 종교 > eBook",
    level: 3,
    leaf: true
  }
],
  50005554: [
  {
    cid: 50005644,
    name: "예술일반/예술사",
    fullPath: "도서 > 예술/대중문화 > 예술일반/예술사",
    level: 3,
    leaf: false
  },
  {
    cid: 50005645,
    name: "미술",
    fullPath: "도서 > 예술/대중문화 > 미술",
    level: 3,
    leaf: false
  },
  {
    cid: 50005646,
    name: "음악",
    fullPath: "도서 > 예술/대중문화 > 음악",
    level: 3,
    leaf: false
  },
  {
    cid: 50005647,
    name: "건축",
    fullPath: "도서 > 예술/대중문화 > 건축",
    level: 3,
    leaf: false
  },
  {
    cid: 50005648,
    name: "만화/애니메이션",
    fullPath: "도서 > 예술/대중문화 > 만화/애니메이션",
    level: 3,
    leaf: false
  },
  {
    cid: 50005649,
    name: "사진",
    fullPath: "도서 > 예술/대중문화 > 사진",
    level: 3,
    leaf: false
  },
  {
    cid: 50005650,
    name: "연극/공연/영화",
    fullPath: "도서 > 예술/대중문화 > 연극/공연/영화",
    level: 3,
    leaf: false
  },
  {
    cid: 50005651,
    name: "TV/라디오",
    fullPath: "도서 > 예술/대중문화 > TV/라디오",
    level: 3,
    leaf: false
  },
  {
    cid: 50011580,
    name: "eBook",
    fullPath: "도서 > 예술/대중문화 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011521,
    name: "오디오북",
    fullPath: "도서 > 예술/대중문화 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50005556: [
  {
    cid: 50005657,
    name: "국어",
    fullPath: "도서 > 국어/외국어 > 국어",
    level: 3,
    leaf: false
  },
  {
    cid: 50005658,
    name: "영어",
    fullPath: "도서 > 국어/외국어 > 영어",
    level: 3,
    leaf: false
  },
  {
    cid: 50005659,
    name: "일본어",
    fullPath: "도서 > 국어/외국어 > 일본어",
    level: 3,
    leaf: false
  },
  {
    cid: 50005660,
    name: "중국어",
    fullPath: "도서 > 국어/외국어 > 중국어",
    level: 3,
    leaf: false
  },
  {
    cid: 50005661,
    name: "기타외국어",
    fullPath: "도서 > 국어/외국어 > 기타외국어",
    level: 3,
    leaf: false
  },
  {
    cid: 50010740,
    name: "한자사전",
    fullPath: "도서 > 국어/외국어 > 한자사전",
    level: 3,
    leaf: true
  },
  {
    cid: 50010683,
    name: "기타 국가 사전",
    fullPath: "도서 > 국어/외국어 > 기타 국가 사전",
    level: 3,
    leaf: true
  },
  {
    cid: 50010684,
    name: "백과/전문사전",
    fullPath: "도서 > 국어/외국어 > 백과/전문사전",
    level: 3,
    leaf: true
  },
  {
    cid: 50011520,
    name: "eBook",
    fullPath: "도서 > 국어/외국어 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011540,
    name: "오디오북",
    fullPath: "도서 > 국어/외국어 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50005558: [
  {
    cid: 50005677,
    name: "공학일반/산업공학",
    fullPath: "도서 > 자연/과학 > 공학일반/산업공학",
    level: 3,
    leaf: true
  },
  {
    cid: 50005678,
    name: "기계/전기/전자",
    fullPath: "도서 > 자연/과학 > 기계/전기/전자",
    level: 3,
    leaf: true
  },
  {
    cid: 50005679,
    name: "농수산/축산",
    fullPath: "도서 > 자연/과학 > 농수산/축산",
    level: 3,
    leaf: true
  },
  {
    cid: 50005676,
    name: "도시/토목/건설",
    fullPath: "도서 > 자연/과학 > 도시/토목/건설",
    level: 3,
    leaf: true
  },
  {
    cid: 50005672,
    name: "물리학",
    fullPath: "도서 > 자연/과학 > 물리학",
    level: 3,
    leaf: true
  },
  {
    cid: 50005674,
    name: "생물학",
    fullPath: "도서 > 자연/과학 > 생물학",
    level: 3,
    leaf: true
  },
  {
    cid: 50005671,
    name: "수학",
    fullPath: "도서 > 자연/과학 > 수학",
    level: 3,
    leaf: true
  },
  {
    cid: 50005675,
    name: "천문/지구과학",
    fullPath: "도서 > 자연/과학 > 천문/지구과학",
    level: 3,
    leaf: true
  },
  {
    cid: 50005673,
    name: "화학",
    fullPath: "도서 > 자연/과학 > 화학",
    level: 3,
    leaf: true
  },
  {
    cid: 50010661,
    name: "과학",
    fullPath: "도서 > 자연/과학 > 과학",
    level: 3,
    leaf: false
  },
  {
    cid: 50011361,
    name: "eBook",
    fullPath: "도서 > 자연/과학 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011480,
    name: "오디오북",
    fullPath: "도서 > 자연/과학 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50005559: [
  {
    cid: 50005681,
    name: "취업/상식/적성검사",
    fullPath: "도서 > 수험서/자격증 > 취업/상식/적성검사",
    level: 3,
    leaf: false
  },
  {
    cid: 50005682,
    name: "공무원",
    fullPath: "도서 > 수험서/자격증 > 공무원",
    level: 3,
    leaf: false
  },
  {
    cid: 50005683,
    name: "고등고시/전문직",
    fullPath: "도서 > 수험서/자격증 > 고등고시/전문직",
    level: 3,
    leaf: false
  },
  {
    cid: 50005685,
    name: "검정고시",
    fullPath: "도서 > 수험서/자격증 > 검정고시",
    level: 3,
    leaf: false
  },
  {
    cid: 50010800,
    name: "교원임용고시",
    fullPath: "도서 > 수험서/자격증 > 교원임용고시",
    level: 3,
    leaf: true
  },
  {
    cid: 50010761,
    name: "경제/금융/회계/물류",
    fullPath: "도서 > 수험서/자격증 > 경제/금융/회계/물류",
    level: 3,
    leaf: false
  },
  {
    cid: 50010840,
    name: "공인중개/주택관리",
    fullPath: "도서 > 수험서/자격증 > 공인중개/주택관리",
    level: 3,
    leaf: false
  },
  {
    cid: 50010860,
    name: "국가자격/전문사무",
    fullPath: "도서 > 수험서/자격증 > 국가자격/전문사무",
    level: 3,
    leaf: false
  },
  {
    cid: 50010764,
    name: "편입/대학원",
    fullPath: "도서 > 수험서/자격증 > 편입/대학원",
    level: 3,
    leaf: true
  },
  {
    cid: 50010880,
    name: "독학사",
    fullPath: "도서 > 수험서/자격증 > 독학사",
    level: 3,
    leaf: true
  },
  {
    cid: 50010765,
    name: "컴퓨터수험서",
    fullPath: "도서 > 수험서/자격증 > 컴퓨터수험서",
    level: 3,
    leaf: false
  },
  {
    cid: 50011160,
    name: "보건/위생/의학",
    fullPath: "도서 > 수험서/자격증 > 보건/위생/의학",
    level: 3,
    leaf: false
  },
  {
    cid: 50011680,
    name: "eBook",
    fullPath: "도서 > 수험서/자격증 > eBook",
    level: 3,
    leaf: true
  }
],
  50005560: [
  {
    cid: 50005686,
    name: "국내여행",
    fullPath: "도서 > 여행 > 국내여행",
    level: 3,
    leaf: false
  },
  {
    cid: 50005687,
    name: "해외여행",
    fullPath: "도서 > 여행 > 해외여행",
    level: 3,
    leaf: false
  },
  {
    cid: 50005688,
    name: "테마여행",
    fullPath: "도서 > 여행 > 테마여행",
    level: 3,
    leaf: false
  },
  {
    cid: 50005689,
    name: "지도",
    fullPath: "도서 > 여행 > 지도",
    level: 3,
    leaf: false
  },
  {
    cid: 50011642,
    name: "eBook",
    fullPath: "도서 > 여행 > eBook",
    level: 3,
    leaf: true
  }
],
  50005561: [
  {
    cid: 50005692,
    name: "그래픽/멀티미디어",
    fullPath: "도서 > 컴퓨터/IT > 그래픽/멀티미디어",
    level: 3,
    leaf: false
  },
  {
    cid: 50005693,
    name: "오피스활용도서",
    fullPath: "도서 > 컴퓨터/IT > 오피스활용도서",
    level: 3,
    leaf: false
  },
  {
    cid: 50010881,
    name: "웹사이트",
    fullPath: "도서 > 컴퓨터/IT > 웹사이트",
    level: 3,
    leaf: true
  },
  {
    cid: 50010702,
    name: "컴퓨터 입문/활용",
    fullPath: "도서 > 컴퓨터/IT > 컴퓨터 입문/활용",
    level: 3,
    leaf: true
  },
  {
    cid: 50010862,
    name: "게임",
    fullPath: "도서 > 컴퓨터/IT > 게임",
    level: 3,
    leaf: true
  },
  {
    cid: 50010586,
    name: "OS/데이터베이스",
    fullPath: "도서 > 컴퓨터/IT > OS/데이터베이스",
    level: 3,
    leaf: true
  },
  {
    cid: 50010920,
    name: "프로그래밍 언어",
    fullPath: "도서 > 컴퓨터/IT > 프로그래밍 언어",
    level: 3,
    leaf: true
  },
  {
    cid: 50010766,
    name: "네트워크/보안",
    fullPath: "도서 > 컴퓨터/IT > 네트워크/보안",
    level: 3,
    leaf: true
  },
  {
    cid: 50010921,
    name: "컴퓨터공학",
    fullPath: "도서 > 컴퓨터/IT > 컴퓨터공학",
    level: 3,
    leaf: true
  },
  {
    cid: 50011641,
    name: "eBook",
    fullPath: "도서 > 컴퓨터/IT > eBook",
    level: 3,
    leaf: true
  }
],
  50005562: [
  {
    cid: 50005697,
    name: "문예/교양지",
    fullPath: "도서 > 잡지 > 문예/교양지",
    level: 3,
    leaf: false
  },
  {
    cid: 50005698,
    name: "자연/공학",
    fullPath: "도서 > 잡지 > 자연/공학",
    level: 3,
    leaf: false
  },
  {
    cid: 50005699,
    name: "컴퓨터/게임/그래픽",
    fullPath: "도서 > 잡지 > 컴퓨터/게임/그래픽",
    level: 3,
    leaf: false
  },
  {
    cid: 50005700,
    name: "어학/고시/교육",
    fullPath: "도서 > 잡지 > 어학/고시/교육",
    level: 3,
    leaf: false
  },
  {
    cid: 50005701,
    name: "연예/영화/만화",
    fullPath: "도서 > 잡지 > 연예/영화/만화",
    level: 3,
    leaf: false
  },
  {
    cid: 50005702,
    name: "여행/취미/스포츠",
    fullPath: "도서 > 잡지 > 여행/취미/스포츠",
    level: 3,
    leaf: false
  },
  {
    cid: 50005703,
    name: "외국잡지",
    fullPath: "도서 > 잡지 > 외국잡지",
    level: 3,
    leaf: false
  },
  {
    cid: 50010561,
    name: "여성/남성/패션",
    fullPath: "도서 > 잡지 > 여성/남성/패션",
    level: 3,
    leaf: true
  },
  {
    cid: 50010801,
    name: "요리/건강",
    fullPath: "도서 > 잡지 > 요리/건강",
    level: 3,
    leaf: true
  },
  {
    cid: 50010562,
    name: "리빙/육아",
    fullPath: "도서 > 잡지 > 리빙/육아",
    level: 3,
    leaf: false
  },
  {
    cid: 50010382,
    name: "경제/시사",
    fullPath: "도서 > 잡지 > 경제/시사",
    level: 3,
    leaf: false
  },
  {
    cid: 50010941,
    name: "종교",
    fullPath: "도서 > 잡지 > 종교",
    level: 3,
    leaf: true
  },
  {
    cid: 50010501,
    name: "예술/사진/건축",
    fullPath: "도서 > 잡지 > 예술/사진/건축",
    level: 3,
    leaf: false
  },
  {
    cid: 50011621,
    name: "eBook",
    fullPath: "도서 > 잡지 > eBook",
    level: 3,
    leaf: true
  }
],
  50005563: [
  {
    cid: 50005706,
    name: "학습법/진학 가이드",
    fullPath: "도서 > 청소년 > 학습법/진학 가이드",
    level: 3,
    leaf: true
  },
  {
    cid: 50005707,
    name: "청소년 경제/자기계발",
    fullPath: "도서 > 청소년 > 청소년 경제/자기계발",
    level: 3,
    leaf: true
  },
  {
    cid: 50005711,
    name: "청소년 과학",
    fullPath: "도서 > 청소년 > 청소년 과학",
    level: 3,
    leaf: true
  },
  {
    cid: 50005708,
    name: "청소년 문학",
    fullPath: "도서 > 청소년 > 청소년 문학",
    level: 3,
    leaf: true
  },
  {
    cid: 50005710,
    name: "청소년 예술",
    fullPath: "도서 > 청소년 > 청소년 예술",
    level: 3,
    leaf: true
  },
  {
    cid: 50005709,
    name: "청소년 인문/사회",
    fullPath: "도서 > 청소년 > 청소년 인문/사회",
    level: 3,
    leaf: true
  },
  {
    cid: 50010642,
    name: "논술/면접대비",
    fullPath: "도서 > 청소년 > 논술/면접대비",
    level: 3,
    leaf: false
  },
  {
    cid: 50011424,
    name: "eBook",
    fullPath: "도서 > 청소년 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011560,
    name: "오디오북",
    fullPath: "도서 > 청소년 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50005564: [
  {
    cid: 50005714,
    name: "유아놀이책",
    fullPath: "도서 > 유아 > 유아놀이책",
    level: 3,
    leaf: false
  },
  {
    cid: 50005715,
    name: "유아그림책",
    fullPath: "도서 > 유아 > 유아그림책",
    level: 3,
    leaf: false
  },
  {
    cid: 50005716,
    name: "유아학습",
    fullPath: "도서 > 유아 > 유아학습",
    level: 3,
    leaf: false
  },
  {
    cid: 50011100,
    name: "정가제free",
    fullPath: "도서 > 유아 > 정가제free",
    level: 3,
    leaf: false
  },
  {
    cid: 50011800,
    name: "eBook",
    fullPath: "도서 > 유아 > eBook",
    level: 3,
    leaf: true
  }
],
  50005565: [
  {
    cid: 50005721,
    name: "어린이영어",
    fullPath: "도서 > 어린이 > 어린이영어",
    level: 3,
    leaf: false
  },
  {
    cid: 50010842,
    name: "어린이 문학",
    fullPath: "도서 > 어린이 > 어린이 문학",
    level: 3,
    leaf: true
  },
  {
    cid: 50010144,
    name: "학습/학습만화",
    fullPath: "도서 > 어린이 > 학습/학습만화",
    level: 3,
    leaf: true
  },
  {
    cid: 50010884,
    name: "어린이 교양",
    fullPath: "도서 > 어린이 > 어린이 교양",
    level: 3,
    leaf: true
  },
  {
    cid: 50010980,
    name: "어린이 세트",
    fullPath: "도서 > 어린이 > 어린이 세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50011161,
    name: "정가제free",
    fullPath: "도서 > 어린이 > 정가제free",
    level: 3,
    leaf: true
  },
  {
    cid: 50011343,
    name: "eBook",
    fullPath: "도서 > 어린이 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011423,
    name: "오디오북",
    fullPath: "도서 > 어린이 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50005566: [
  {
    cid: 50005730,
    name: "공포/추리",
    fullPath: "도서 > 만화 > 공포/추리",
    level: 3,
    leaf: true
  },
  {
    cid: 50005722,
    name: "교양만화",
    fullPath: "도서 > 만화 > 교양만화",
    level: 3,
    leaf: true
  },
  {
    cid: 50005723,
    name: "드라마",
    fullPath: "도서 > 만화 > 드라마",
    level: 3,
    leaf: true
  },
  {
    cid: 50005724,
    name: "성인만화",
    fullPath: "도서 > 만화 > 성인만화",
    level: 3,
    leaf: true
  },
  {
    cid: 50005729,
    name: "명랑/코믹만화",
    fullPath: "도서 > 만화 > 명랑/코믹만화",
    level: 3,
    leaf: true
  },
  {
    cid: 50005725,
    name: "순정만화",
    fullPath: "도서 > 만화 > 순정만화",
    level: 3,
    leaf: true
  },
  {
    cid: 50005726,
    name: "스포츠만화",
    fullPath: "도서 > 만화 > 스포츠만화",
    level: 3,
    leaf: true
  },
  {
    cid: 50005728,
    name: "액션/무협만화",
    fullPath: "도서 > 만화 > 액션/무협만화",
    level: 3,
    leaf: true
  },
  {
    cid: 50005732,
    name: "웹툰/카툰에세이",
    fullPath: "도서 > 만화 > 웹툰/카툰에세이",
    level: 3,
    leaf: true
  },
  {
    cid: 50005731,
    name: "학원만화",
    fullPath: "도서 > 만화 > 학원만화",
    level: 3,
    leaf: true
  },
  {
    cid: 50005734,
    name: "일본어판 만화",
    fullPath: "도서 > 만화 > 일본어판 만화",
    level: 3,
    leaf: true
  },
  {
    cid: 50005735,
    name: "영문판 만화",
    fullPath: "도서 > 만화 > 영문판 만화",
    level: 3,
    leaf: true
  },
  {
    cid: 50005727,
    name: "SF/판타지",
    fullPath: "도서 > 만화 > SF/판타지",
    level: 3,
    leaf: true
  },
  {
    cid: 50005733,
    name: "기타만화",
    fullPath: "도서 > 만화 > 기타만화",
    level: 3,
    leaf: true
  },
  {
    cid: 50011660,
    name: "eBook",
    fullPath: "도서 > 만화 > eBook",
    level: 3,
    leaf: true
  }
],
  50005567: [
  {
    cid: 50005743,
    name: "가족/생활",
    fullPath: "도서 > 외국도서 > 가족/생활",
    level: 3,
    leaf: true
  },
  {
    cid: 50005739,
    name: "건축/예술",
    fullPath: "도서 > 외국도서 > 건축/예술",
    level: 3,
    leaf: true
  },
  {
    cid: 50005738,
    name: "경영경제",
    fullPath: "도서 > 외국도서 > 경영경제",
    level: 3,
    leaf: true
  },
  {
    cid: 50005747,
    name: "자연/과학",
    fullPath: "도서 > 외국도서 > 자연/과학",
    level: 3,
    leaf: true
  },
  {
    cid: 50005736,
    name: "문학/소설",
    fullPath: "도서 > 외국도서 > 문학/소설",
    level: 3,
    leaf: true
  },
  {
    cid: 50005744,
    name: "외국어/사전",
    fullPath: "도서 > 외국도서 > 외국어/사전",
    level: 3,
    leaf: true
  },
  {
    cid: 50005741,
    name: "요리",
    fullPath: "도서 > 외국도서 > 요리",
    level: 3,
    leaf: true
  },
  {
    cid: 50005737,
    name: "유아청소년/교육",
    fullPath: "도서 > 외국도서 > 유아청소년/교육",
    level: 3,
    leaf: true
  },
  {
    cid: 50005742,
    name: "취미/여행",
    fullPath: "도서 > 외국도서 > 취미/여행",
    level: 3,
    leaf: true
  },
  {
    cid: 50005740,
    name: "컴퓨터",
    fullPath: "도서 > 외국도서 > 컴퓨터",
    level: 3,
    leaf: true
  },
  {
    cid: 50005749,
    name: "독일",
    fullPath: "도서 > 외국도서 > 독일",
    level: 3,
    leaf: true
  },
  {
    cid: 50005751,
    name: "스페인",
    fullPath: "도서 > 외국도서 > 스페인",
    level: 3,
    leaf: true
  },
  {
    cid: 50005752,
    name: "일본도서",
    fullPath: "도서 > 외국도서 > 일본도서",
    level: 3,
    leaf: true
  },
  {
    cid: 50005750,
    name: "프랑스",
    fullPath: "도서 > 외국도서 > 프랑스",
    level: 3,
    leaf: true
  },
  {
    cid: 50011000,
    name: "인문/사회/종교",
    fullPath: "도서 > 외국도서 > 인문/사회/종교",
    level: 3,
    leaf: false
  },
  {
    cid: 50011700,
    name: "eBook",
    fullPath: "도서 > 외국도서 > eBook",
    level: 3,
    leaf: true
  }
],
  50007127: [
  {
    cid: 50007128,
    name: "목걸이/펜던트",
    fullPath: "출산/육아 > 유아동 주얼리 > 목걸이/펜던트",
    level: 3,
    leaf: true
  },
  {
    cid: 50007129,
    name: "귀걸이",
    fullPath: "출산/육아 > 유아동 주얼리 > 귀걸이",
    level: 3,
    leaf: true
  },
  {
    cid: 50007130,
    name: "팔찌",
    fullPath: "출산/육아 > 유아동 주얼리 > 팔찌",
    level: 3,
    leaf: true
  },
  {
    cid: 50007132,
    name: "순금돌반지",
    fullPath: "출산/육아 > 유아동 주얼리 > 순금돌반지",
    level: 3,
    leaf: true
  },
  {
    cid: 50007133,
    name: "순금주얼리",
    fullPath: "출산/육아 > 유아동 주얼리 > 순금주얼리",
    level: 3,
    leaf: true
  },
  {
    cid: 50007134,
    name: "주얼리세트",
    fullPath: "출산/육아 > 유아동 주얼리 > 주얼리세트",
    level: 3,
    leaf: true
  }
],
  50007135: [
  {
    cid: 50007136,
    name: "잠옷/홈웨어",
    fullPath: "출산/육아 > 유아동언더웨어/잠옷 > 잠옷/홈웨어",
    level: 3,
    leaf: true
  },
  {
    cid: 50007137,
    name: "수면조끼",
    fullPath: "출산/육아 > 유아동언더웨어/잠옷 > 수면조끼",
    level: 3,
    leaf: true
  },
  {
    cid: 50007138,
    name: "내의/내복",
    fullPath: "출산/육아 > 유아동언더웨어/잠옷 > 내의/내복",
    level: 3,
    leaf: true
  },
  {
    cid: 50007139,
    name: "러닝",
    fullPath: "출산/육아 > 유아동언더웨어/잠옷 > 러닝",
    level: 3,
    leaf: true
  },
  {
    cid: 50007140,
    name: "팬티",
    fullPath: "출산/육아 > 유아동언더웨어/잠옷 > 팬티",
    level: 3,
    leaf: true
  },
  {
    cid: 50007141,
    name: "브라",
    fullPath: "출산/육아 > 유아동언더웨어/잠옷 > 브라",
    level: 3,
    leaf: true
  },
  {
    cid: 50007142,
    name: "러닝팬티세트",
    fullPath: "출산/육아 > 유아동언더웨어/잠옷 > 러닝팬티세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50007143,
    name: "브라팬티세트",
    fullPath: "출산/육아 > 유아동언더웨어/잠옷 > 브라팬티세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50007144,
    name: "속치마/속바지",
    fullPath: "출산/육아 > 유아동언더웨어/잠옷 > 속치마/속바지",
    level: 3,
    leaf: true
  },
  {
    cid: 50007145,
    name: "배변훈련팬티",
    fullPath: "출산/육아 > 유아동언더웨어/잠옷 > 배변훈련팬티",
    level: 3,
    leaf: true
  }
],
  50007198: [
  {
    cid: 50007199,
    name: "수공예 클래스",
    fullPath: "여가/생활편의 > 원데이클래스 > 수공예 클래스",
    level: 3,
    leaf: false
  },
  {
    cid: 50007200,
    name: "쿠킹 클래스",
    fullPath: "여가/생활편의 > 원데이클래스 > 쿠킹 클래스",
    level: 3,
    leaf: false
  },
  {
    cid: 50007215,
    name: "기타클래스",
    fullPath: "여가/생활편의 > 원데이클래스 > 기타클래스",
    level: 3,
    leaf: true
  }
],
  50007252: [
  {
    cid: 50007253,
    name: "국내패키지/기타",
    fullPath: "여가/생활편의 > 국내여행/체험 > 국내패키지/기타",
    level: 3,
    leaf: true
  },
  {
    cid: 50007254,
    name: "국내숙박",
    fullPath: "여가/생활편의 > 국내여행/체험 > 국내숙박",
    level: 3,
    leaf: true
  },
  {
    cid: 50007255,
    name: "국내항공권",
    fullPath: "여가/생활편의 > 국내여행/체험 > 국내항공권",
    level: 3,
    leaf: true
  },
  {
    cid: 50007264,
    name: "공연/티켓",
    fullPath: "여가/생활편의 > 국내여행/체험 > 공연/티켓",
    level: 3,
    leaf: false
  },
  {
    cid: 50007274,
    name: "액티비티",
    fullPath: "여가/생활편의 > 국내여행/체험 > 액티비티",
    level: 3,
    leaf: false
  }
],
  50007256: [
  {
    cid: 50007257,
    name: "해외패키지/기타",
    fullPath: "여가/생활편의 > 해외여행 > 해외패키지/기타",
    level: 3,
    leaf: true
  },
  {
    cid: 50007258,
    name: "해외숙박",
    fullPath: "여가/생활편의 > 해외여행 > 해외숙박",
    level: 3,
    leaf: true
  },
  {
    cid: 50007259,
    name: "해외항공권",
    fullPath: "여가/생활편의 > 해외여행 > 해외항공권",
    level: 3,
    leaf: true
  },
  {
    cid: 50015003,
    name: "이동/교통편의",
    fullPath: "여가/생활편의 > 해외여행 > 이동/교통편의",
    level: 3,
    leaf: false
  },
  {
    cid: 50015241,
    name: "입장권",
    fullPath: "여가/생활편의 > 해외여행 > 입장권",
    level: 3,
    leaf: false
  },
  {
    cid: 50020439,
    name: "와이파이/USIM",
    fullPath: "여가/생활편의 > 해외여행 > 와이파이/USIM",
    level: 3,
    leaf: false
  }
],
  50007261: [
  {
    cid: 50007263,
    name: "단기렌터카",
    fullPath: "여가/생활편의 > 국내렌터카 > 단기렌터카",
    level: 3,
    leaf: true
  },
  {
    cid: 50007262,
    name: "장기렌터카",
    fullPath: "여가/생활편의 > 국내렌터카 > 장기렌터카",
    level: 3,
    leaf: true
  }
],
  50007286: [
  {
    cid: 50007287,
    name: "e쿠폰",
    fullPath: "여가/생활편의 > 생활편의 > e쿠폰",
    level: 3,
    leaf: false
  },
  {
    cid: 50007304,
    name: "사진/영상 촬영",
    fullPath: "여가/생활편의 > 생활편의 > 사진/영상 촬영",
    level: 3,
    leaf: true
  },
  {
    cid: 50007305,
    name: "지류/카드 상품권",
    fullPath: "여가/생활편의 > 생활편의 > 지류/카드 상품권",
    level: 3,
    leaf: false
  },
  {
    cid: 50007314,
    name: "온라인 콘텐츠",
    fullPath: "여가/생활편의 > 생활편의 > 온라인 콘텐츠",
    level: 3,
    leaf: false
  },
  {
    cid: 50007343,
    name: "꽃/케이크배달",
    fullPath: "여가/생활편의 > 생활편의 > 꽃/케이크배달",
    level: 3,
    leaf: false
  }
],
  50007319: [
  {
    cid: 50007320,
    name: "무예/무도",
    fullPath: "여가/생활편의 > 예체능레슨 > 무예/무도",
    level: 3,
    leaf: true
  },
  {
    cid: 50007321,
    name: "골프레슨",
    fullPath: "여가/생활편의 > 예체능레슨 > 골프레슨",
    level: 3,
    leaf: true
  },
  {
    cid: 50007322,
    name: "구기 스포츠",
    fullPath: "여가/생활편의 > 예체능레슨 > 구기 스포츠",
    level: 3,
    leaf: true
  },
  {
    cid: 50007323,
    name: "아웃도어스포츠",
    fullPath: "여가/생활편의 > 예체능레슨 > 아웃도어스포츠",
    level: 3,
    leaf: false
  },
  {
    cid: 50007327,
    name: "댄스/무용",
    fullPath: "여가/생활편의 > 예체능레슨 > 댄스/무용",
    level: 3,
    leaf: true
  },
  {
    cid: 50007328,
    name: "보컬/악기",
    fullPath: "여가/생활편의 > 예체능레슨 > 보컬/악기",
    level: 3,
    leaf: true
  },
  {
    cid: 50007329,
    name: "미술",
    fullPath: "여가/생활편의 > 예체능레슨 > 미술",
    level: 3,
    leaf: true
  },
  {
    cid: 50007330,
    name: "피트니스",
    fullPath: "여가/생활편의 > 예체능레슨 > 피트니스",
    level: 3,
    leaf: true
  },
  {
    cid: 50007331,
    name: "필라테스/요가",
    fullPath: "여가/생활편의 > 예체능레슨 > 필라테스/요가",
    level: 3,
    leaf: true
  },
  {
    cid: 50007332,
    name: "기타",
    fullPath: "여가/생활편의 > 예체능레슨 > 기타",
    level: 3,
    leaf: true
  },
  {
    cid: 50021519,
    name: "PT",
    fullPath: "여가/생활편의 > 예체능레슨 > PT",
    level: 3,
    leaf: true
  }
],
  50007333: [
  {
    cid: 50007334,
    name: "외국어",
    fullPath: "여가/생활편의 > 자기계발/취미 레슨 > 외국어",
    level: 3,
    leaf: false
  },
  {
    cid: 50007337,
    name: "공예",
    fullPath: "여가/생활편의 > 자기계발/취미 레슨 > 공예",
    level: 3,
    leaf: true
  },
  {
    cid: 50007338,
    name: "뷰티",
    fullPath: "여가/생활편의 > 자기계발/취미 레슨 > 뷰티",
    level: 3,
    leaf: true
  },
  {
    cid: 50007339,
    name: "커피/요리",
    fullPath: "여가/생활편의 > 자기계발/취미 레슨 > 커피/요리",
    level: 3,
    leaf: true
  },
  {
    cid: 50007340,
    name: "취업/자격증/기타",
    fullPath: "여가/생활편의 > 자기계발/취미 레슨 > 취업/자격증/기타",
    level: 3,
    leaf: true
  }
],
  50007342: [
  {
    cid: 50007346,
    name: "가전/가구 설치",
    fullPath: "여가/생활편의 > 홈케어서비스 > 가전/가구 설치",
    level: 3,
    leaf: true
  },
  {
    cid: 50007347,
    name: "이사/청소",
    fullPath: "여가/생활편의 > 홈케어서비스 > 이사/청소",
    level: 3,
    leaf: true
  }
],
  50009920: [
  {
    cid: 50009940,
    name: "건강",
    fullPath: "도서 > 건강/취미 > 건강",
    level: 3,
    leaf: false
  },
  {
    cid: 50010001,
    name: "취미/레저",
    fullPath: "도서 > 건강/취미 > 취미/레저",
    level: 3,
    leaf: false
  },
  {
    cid: 50011320,
    name: "정가제free",
    fullPath: "도서 > 건강/취미 > 정가제free",
    level: 3,
    leaf: true
  },
  {
    cid: 50011620,
    name: "eBook",
    fullPath: "도서 > 건강/취미 > eBook",
    level: 3,
    leaf: true
  },
  {
    cid: 50011640,
    name: "오디오북",
    fullPath: "도서 > 건강/취미 > 오디오북",
    level: 3,
    leaf: true
  }
],
  50010027: [
  {
    cid: 50010343,
    name: "중1 자습서",
    fullPath: "도서 > 중학교 참고서 > 중1 자습서",
    level: 3,
    leaf: true
  },
  {
    cid: 50010344,
    name: "중1 문제집",
    fullPath: "도서 > 중학교 참고서 > 중1 문제집",
    level: 3,
    leaf: true
  },
  {
    cid: 50010441,
    name: "중2 자습서",
    fullPath: "도서 > 중학교 참고서 > 중2 자습서",
    level: 3,
    leaf: true
  },
  {
    cid: 50010580,
    name: "중2 문제집",
    fullPath: "도서 > 중학교 참고서 > 중2 문제집",
    level: 3,
    leaf: true
  },
  {
    cid: 50010600,
    name: "중3 자습서",
    fullPath: "도서 > 중학교 참고서 > 중3 자습서",
    level: 3,
    leaf: true
  },
  {
    cid: 50010620,
    name: "중3 문제집",
    fullPath: "도서 > 중학교 참고서 > 중3 문제집",
    level: 3,
    leaf: true
  },
  {
    cid: 50010345,
    name: "EBS 중등",
    fullPath: "도서 > 중학교 참고서 > EBS 중등",
    level: 3,
    leaf: true
  },
  {
    cid: 50010521,
    name: "예비 고1",
    fullPath: "도서 > 중학교 참고서 > 예비 고1",
    level: 3,
    leaf: true
  },
  {
    cid: 50010640,
    name: "특목고 대비",
    fullPath: "도서 > 중학교 참고서 > 특목고 대비",
    level: 3,
    leaf: true
  },
  {
    cid: 50010641,
    name: "기타",
    fullPath: "도서 > 중학교 참고서 > 기타",
    level: 3,
    leaf: true
  }
],
  50010342: [
  {
    cid: 50009963,
    name: "자습서",
    fullPath: "도서 > 고등학교 참고서 > 자습서",
    level: 3,
    leaf: true
  },
  {
    cid: 50010222,
    name: "문제집",
    fullPath: "도서 > 고등학교 참고서 > 문제집",
    level: 3,
    leaf: true
  },
  {
    cid: 50010142,
    name: "수능문제집",
    fullPath: "도서 > 고등학교 참고서 > 수능문제집",
    level: 3,
    leaf: true
  },
  {
    cid: 50010560,
    name: "EBS 고등",
    fullPath: "도서 > 고등학교 참고서 > EBS 고등",
    level: 3,
    leaf: true
  },
  {
    cid: 50010223,
    name: "기타",
    fullPath: "도서 > 고등학교 참고서 > 기타",
    level: 3,
    leaf: true
  }
],
  50010481: [
  {
    cid: 50010482,
    name: "초등1학년",
    fullPath: "도서 > 초등학교 참고서 > 초등1학년",
    level: 3,
    leaf: true
  },
  {
    cid: 50010346,
    name: "초등2학년",
    fullPath: "도서 > 초등학교 참고서 > 초등2학년",
    level: 3,
    leaf: true
  },
  {
    cid: 50010483,
    name: "초등3학년",
    fullPath: "도서 > 초등학교 참고서 > 초등3학년",
    level: 3,
    leaf: true
  },
  {
    cid: 50010347,
    name: "초등4학년",
    fullPath: "도서 > 초등학교 참고서 > 초등4학년",
    level: 3,
    leaf: true
  },
  {
    cid: 50010348,
    name: "초등5학년",
    fullPath: "도서 > 초등학교 참고서 > 초등5학년",
    level: 3,
    leaf: true
  },
  {
    cid: 50010349,
    name: "초등6학년",
    fullPath: "도서 > 초등학교 참고서 > 초등6학년",
    level: 3,
    leaf: true
  },
  {
    cid: 50010484,
    name: "한글/한자",
    fullPath: "도서 > 초등학교 참고서 > 한글/한자",
    level: 3,
    leaf: true
  },
  {
    cid: 50010581,
    name: "EBS 초등",
    fullPath: "도서 > 초등학교 참고서 > EBS 초등",
    level: 3,
    leaf: true
  },
  {
    cid: 50010582,
    name: "기타",
    fullPath: "도서 > 초등학교 참고서 > 기타",
    level: 3,
    leaf: true
  }
],
  50011040: [
  {
    cid: 50011060,
    name: "도서",
    fullPath: "도서 > 중고도서 > 도서",
    level: 3,
    leaf: true
  },
  {
    cid: 50011080,
    name: "만화",
    fullPath: "도서 > 중고도서 > 만화",
    level: 3,
    leaf: true
  }
],
  50011940: [
  {
    cid: 50011941,
    name: "참치/연어",
    fullPath: "식품 > 통조림/캔 > 참치/연어",
    level: 3,
    leaf: true
  },
  {
    cid: 50011960,
    name: "꽁치/고등어",
    fullPath: "식품 > 통조림/캔 > 꽁치/고등어",
    level: 3,
    leaf: true
  },
  {
    cid: 50011980,
    name: "골뱅이/번데기",
    fullPath: "식품 > 통조림/캔 > 골뱅이/번데기",
    level: 3,
    leaf: true
  },
  {
    cid: 50012000,
    name: "옥수수/콩",
    fullPath: "식품 > 통조림/캔 > 옥수수/콩",
    level: 3,
    leaf: true
  },
  {
    cid: 50011942,
    name: "황도/과일",
    fullPath: "식품 > 통조림/캔 > 황도/과일",
    level: 3,
    leaf: true
  },
  {
    cid: 50011943,
    name: "햄",
    fullPath: "식품 > 통조림/캔 > 햄",
    level: 3,
    leaf: true
  },
  {
    cid: 50011921,
    name: "피클/올리브",
    fullPath: "식품 > 통조림/캔 > 피클/올리브",
    level: 3,
    leaf: true
  },
  {
    cid: 50012020,
    name: "세트",
    fullPath: "식품 > 통조림/캔 > 세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50012040,
    name: "기타통조림/캔",
    fullPath: "식품 > 통조림/캔 > 기타통조림/캔",
    level: 3,
    leaf: true
  }
],
  50012460: [
  {
    cid: 50012480,
    name: "베이킹파우더",
    fullPath: "식품 > 제과/제빵재료 > 베이킹파우더",
    level: 3,
    leaf: true
  },
  {
    cid: 50012201,
    name: "제과/제빵믹스",
    fullPath: "식품 > 제과/제빵재료 > 제과/제빵믹스",
    level: 3,
    leaf: true
  },
  {
    cid: 50012441,
    name: "호떡믹스",
    fullPath: "식품 > 제과/제빵재료 > 호떡믹스",
    level: 3,
    leaf: true
  },
  {
    cid: 50012500,
    name: "기타제과/제빵재료",
    fullPath: "식품 > 제과/제빵재료 > 기타제과/제빵재료",
    level: 3,
    leaf: true
  }
],
  50012520: [
  {
    cid: 50012540,
    name: "고춧가루",
    fullPath: "식품 > 조미료 > 고춧가루",
    level: 3,
    leaf: true
  },
  {
    cid: 50012461,
    name: "식초",
    fullPath: "식품 > 조미료 > 식초",
    level: 3,
    leaf: true
  },
  {
    cid: 50012521,
    name: "액젓",
    fullPath: "식품 > 조미료 > 액젓",
    level: 3,
    leaf: true
  },
  {
    cid: 50012442,
    name: "고추냉이",
    fullPath: "식품 > 조미료 > 고추냉이",
    level: 3,
    leaf: true
  },
  {
    cid: 50012304,
    name: "후추",
    fullPath: "식품 > 조미료 > 후추",
    level: 3,
    leaf: true
  },
  {
    cid: 50012560,
    name: "겨자",
    fullPath: "식품 > 조미료 > 겨자",
    level: 3,
    leaf: true
  },
  {
    cid: 50011944,
    name: "물엿/올리고당",
    fullPath: "식품 > 조미료 > 물엿/올리고당",
    level: 3,
    leaf: true
  },
  {
    cid: 50012580,
    name: "소금",
    fullPath: "식품 > 조미료 > 소금",
    level: 3,
    leaf: true
  },
  {
    cid: 50012600,
    name: "천연감미료",
    fullPath: "식품 > 조미료 > 천연감미료",
    level: 3,
    leaf: true
  },
  {
    cid: 50012581,
    name: "설탕",
    fullPath: "식품 > 조미료 > 설탕",
    level: 3,
    leaf: true
  },
  {
    cid: 50012421,
    name: "기타조미료",
    fullPath: "식품 > 조미료 > 기타조미료",
    level: 3,
    leaf: true
  },
  {
    cid: 50018501,
    name: "맛가루/후리가케",
    fullPath: "식품 > 조미료 > 맛가루/후리가케",
    level: 3,
    leaf: true
  }
],
  50012620: [
  {
    cid: 50012640,
    name: "대두유",
    fullPath: "식품 > 식용유/오일 > 대두유",
    level: 3,
    leaf: true
  },
  {
    cid: 50012660,
    name: "올리브유",
    fullPath: "식품 > 식용유/오일 > 올리브유",
    level: 3,
    leaf: true
  },
  {
    cid: 50012680,
    name: "카놀라유",
    fullPath: "식품 > 식용유/오일 > 카놀라유",
    level: 3,
    leaf: true
  },
  {
    cid: 50012700,
    name: "포도씨유",
    fullPath: "식품 > 식용유/오일 > 포도씨유",
    level: 3,
    leaf: true
  },
  {
    cid: 50012720,
    name: "해바라기씨유",
    fullPath: "식품 > 식용유/오일 > 해바라기씨유",
    level: 3,
    leaf: true
  },
  {
    cid: 50012740,
    name: "들기름",
    fullPath: "식품 > 식용유/오일 > 들기름",
    level: 3,
    leaf: true
  },
  {
    cid: 50012760,
    name: "참기름",
    fullPath: "식품 > 식용유/오일 > 참기름",
    level: 3,
    leaf: true
  },
  {
    cid: 50012780,
    name: "아보카도오일",
    fullPath: "식품 > 식용유/오일 > 아보카도오일",
    level: 3,
    leaf: true
  },
  {
    cid: 50012761,
    name: "기타기름",
    fullPath: "식품 > 식용유/오일 > 기타기름",
    level: 3,
    leaf: true
  }
],
  50012782: [
  {
    cid: 50013162,
    name: "마요네즈",
    fullPath: "식품 > 소스/드레싱 > 마요네즈",
    level: 3,
    leaf: true
  },
  {
    cid: 50013300,
    name: "케첩",
    fullPath: "식품 > 소스/드레싱 > 케첩",
    level: 3,
    leaf: true
  },
  {
    cid: 50013021,
    name: "스파게티/파스타소스",
    fullPath: "식품 > 소스/드레싱 > 스파게티/파스타소스",
    level: 3,
    leaf: true
  },
  {
    cid: 50013241,
    name: "칠리/핫소스",
    fullPath: "식품 > 소스/드레싱 > 칠리/핫소스",
    level: 3,
    leaf: true
  },
  {
    cid: 50013221,
    name: "돈가스소스",
    fullPath: "식품 > 소스/드레싱 > 돈가스소스",
    level: 3,
    leaf: true
  },
  {
    cid: 50013320,
    name: "스테이크/바베큐소스",
    fullPath: "식품 > 소스/드레싱 > 스테이크/바베큐소스",
    level: 3,
    leaf: true
  },
  {
    cid: 50013340,
    name: "굴소스",
    fullPath: "식품 > 소스/드레싱 > 굴소스",
    level: 3,
    leaf: true
  },
  {
    cid: 50013121,
    name: "발사믹드레싱",
    fullPath: "식품 > 소스/드레싱 > 발사믹드레싱",
    level: 3,
    leaf: true
  },
  {
    cid: 50013261,
    name: "오리엔탈드레싱",
    fullPath: "식품 > 소스/드레싱 > 오리엔탈드레싱",
    level: 3,
    leaf: true
  },
  {
    cid: 50014500,
    name: "머스타드소스",
    fullPath: "식품 > 소스/드레싱 > 머스타드소스",
    level: 3,
    leaf: true
  },
  {
    cid: 50018401,
    name: "쯔유",
    fullPath: "식품 > 소스/드레싱 > 쯔유",
    level: 3,
    leaf: true
  },
  {
    cid: 50018460,
    name: "피쉬소스",
    fullPath: "식품 > 소스/드레싱 > 피쉬소스",
    level: 3,
    leaf: true
  },
  {
    cid: 50013262,
    name: "기타소스/드레싱",
    fullPath: "식품 > 소스/드레싱 > 기타소스/드레싱",
    level: 3,
    leaf: true
  }
],
  50013360: [
  {
    cid: 50012841,
    name: "튀김가루",
    fullPath: "식품 > 가루/분말류 > 튀김가루",
    level: 3,
    leaf: true
  },
  {
    cid: 50013380,
    name: "부침가루",
    fullPath: "식품 > 가루/분말류 > 부침가루",
    level: 3,
    leaf: true
  },
  {
    cid: 50013400,
    name: "빵가루",
    fullPath: "식품 > 가루/분말류 > 빵가루",
    level: 3,
    leaf: true
  },
  {
    cid: 50013420,
    name: "오트밀",
    fullPath: "식품 > 가루/분말류 > 오트밀",
    level: 3,
    leaf: true
  },
  {
    cid: 50013440,
    name: "밀가루",
    fullPath: "식품 > 가루/분말류 > 밀가루",
    level: 3,
    leaf: true
  },
  {
    cid: 50013460,
    name: "찹쌀가루",
    fullPath: "식품 > 가루/분말류 > 찹쌀가루",
    level: 3,
    leaf: true
  },
  {
    cid: 50013480,
    name: "쌀가루",
    fullPath: "식품 > 가루/분말류 > 쌀가루",
    level: 3,
    leaf: true
  },
  {
    cid: 50013321,
    name: "콩가루",
    fullPath: "식품 > 가루/분말류 > 콩가루",
    level: 3,
    leaf: true
  },
  {
    cid: 50013500,
    name: "아몬드가루",
    fullPath: "식품 > 가루/분말류 > 아몬드가루",
    level: 3,
    leaf: true
  },
  {
    cid: 50017880,
    name: "미숫가루",
    fullPath: "식품 > 가루/분말류 > 미숫가루",
    level: 3,
    leaf: true
  },
  {
    cid: 50013421,
    name: "기타분말가루",
    fullPath: "식품 > 가루/분말류 > 기타분말가루",
    level: 3,
    leaf: true
  }
],
  50013520: [
  {
    cid: 50013441,
    name: "딸기잼",
    fullPath: "식품 > 잼/시럽 > 딸기잼",
    level: 3,
    leaf: true
  },
  {
    cid: 50013540,
    name: "사과잼",
    fullPath: "식품 > 잼/시럽 > 사과잼",
    level: 3,
    leaf: true
  },
  {
    cid: 50013560,
    name: "땅콩잼",
    fullPath: "식품 > 잼/시럽 > 땅콩잼",
    level: 3,
    leaf: true
  },
  {
    cid: 50013521,
    name: "초코잼",
    fullPath: "식품 > 잼/시럽 > 초코잼",
    level: 3,
    leaf: true
  },
  {
    cid: 50012981,
    name: "메이플시럽",
    fullPath: "식품 > 잼/시럽 > 메이플시럽",
    level: 3,
    leaf: true
  },
  {
    cid: 50013561,
    name: "커피시럽",
    fullPath: "식품 > 잼/시럽 > 커피시럽",
    level: 3,
    leaf: true
  },
  {
    cid: 50013580,
    name: "초코시럽",
    fullPath: "식품 > 잼/시럽 > 초코시럽",
    level: 3,
    leaf: true
  },
  {
    cid: 50013501,
    name: "기타잼/시럽",
    fullPath: "식품 > 잼/시럽 > 기타잼/시럽",
    level: 3,
    leaf: true
  }
],
  50013881: [
  {
    cid: 50014141,
    name: "고추장",
    fullPath: "식품 > 장류 > 고추장",
    level: 3,
    leaf: true
  },
  {
    cid: 50013621,
    name: "된장",
    fullPath: "식품 > 장류 > 된장",
    level: 3,
    leaf: true
  },
  {
    cid: 50014121,
    name: "간장",
    fullPath: "식품 > 장류 > 간장",
    level: 3,
    leaf: true
  },
  {
    cid: 50014180,
    name: "청국장",
    fullPath: "식품 > 장류 > 청국장",
    level: 3,
    leaf: true
  },
  {
    cid: 50014200,
    name: "쌈장",
    fullPath: "식품 > 장류 > 쌈장",
    level: 3,
    leaf: true
  },
  {
    cid: 50013882,
    name: "메주",
    fullPath: "식품 > 장류 > 메주",
    level: 3,
    leaf: true
  },
  {
    cid: 50013841,
    name: "낫토",
    fullPath: "식품 > 장류 > 낫토",
    level: 3,
    leaf: true
  },
  {
    cid: 50014181,
    name: "기타장류",
    fullPath: "식품 > 장류 > 기타장류",
    level: 3,
    leaf: true
  },
  {
    cid: 50018380,
    name: "양념장",
    fullPath: "식품 > 장류 > 양념장",
    level: 3,
    leaf: false
  }
],
  50013960: [
  {
    cid: 50013961,
    name: "라면",
    fullPath: "식품 > 라면/면류 > 라면",
    level: 3,
    leaf: false
  },
  {
    cid: 50014020,
    name: "면류",
    fullPath: "식품 > 라면/면류 > 면류",
    level: 3,
    leaf: false
  }
],
  50014240: [
  {
    cid: 50014260,
    name: "밥/죽",
    fullPath: "식품 > 밀키트 > 밥/죽",
    level: 3,
    leaf: true
  },
  {
    cid: 50013821,
    name: "찌개/국",
    fullPath: "식품 > 밀키트 > 찌개/국",
    level: 3,
    leaf: true
  },
  {
    cid: 50014201,
    name: "면/파스타",
    fullPath: "식품 > 밀키트 > 면/파스타",
    level: 3,
    leaf: true
  },
  {
    cid: 50013781,
    name: "구이",
    fullPath: "식품 > 밀키트 > 구이",
    level: 3,
    leaf: true
  },
  {
    cid: 50014280,
    name: "볶음/튀김",
    fullPath: "식품 > 밀키트 > 볶음/튀김",
    level: 3,
    leaf: true
  },
  {
    cid: 50014101,
    name: "조림/찜",
    fullPath: "식품 > 밀키트 > 조림/찜",
    level: 3,
    leaf: true
  },
  {
    cid: 50014001,
    name: "간식/디저트",
    fullPath: "식품 > 밀키트 > 간식/디저트",
    level: 3,
    leaf: true
  },
  {
    cid: 50014042,
    name: "세트요리",
    fullPath: "식품 > 밀키트 > 세트요리",
    level: 3,
    leaf: true
  }
],
  50014520: [
  {
    cid: 50014540,
    name: "전통주",
    fullPath: "식품 > 주류 > 전통주",
    level: 3,
    leaf: false
  },
  {
    cid: 50014720,
    name: "수입와인",
    fullPath: "식품 > 주류 > 수입와인",
    level: 3,
    leaf: true
  },
  {
    cid: 50014740,
    name: "양주",
    fullPath: "식품 > 주류 > 양주",
    level: 3,
    leaf: true
  },
  {
    cid: 50014760,
    name: "맥주",
    fullPath: "식품 > 주류 > 맥주",
    level: 3,
    leaf: true
  },
  {
    cid: 50014741,
    name: "사케/기타수입주류",
    fullPath: "식품 > 주류 > 사케/기타수입주류",
    level: 3,
    leaf: true
  }
],
  50015460: [
  {
    cid: 50015540,
    name: "유선청소기",
    fullPath: "디지털/가전 > 청소기 > 유선청소기",
    level: 3,
    leaf: false
  },
  {
    cid: 50015660,
    name: "무선청소기",
    fullPath: "디지털/가전 > 청소기 > 무선청소기",
    level: 3,
    leaf: false
  },
  {
    cid: 50015760,
    name: "스팀청소기",
    fullPath: "디지털/가전 > 청소기 > 스팀청소기",
    level: 3,
    leaf: true
  },
  {
    cid: 50015541,
    name: "로봇청소기",
    fullPath: "디지털/가전 > 청소기 > 로봇청소기",
    level: 3,
    leaf: true
  },
  {
    cid: 50015780,
    name: "침구청소기",
    fullPath: "디지털/가전 > 청소기 > 침구청소기",
    level: 3,
    leaf: true
  },
  {
    cid: 50015581,
    name: "물걸레청소기",
    fullPath: "디지털/가전 > 청소기 > 물걸레청소기",
    level: 3,
    leaf: true
  },
  {
    cid: 50015860,
    name: "고압세척기",
    fullPath: "디지털/가전 > 청소기 > 고압세척기",
    level: 3,
    leaf: true
  },
  {
    cid: 50015900,
    name: "창문청소기",
    fullPath: "디지털/가전 > 청소기 > 창문청소기",
    level: 3,
    leaf: true
  },
  {
    cid: 50015820,
    name: "업소용청소기",
    fullPath: "디지털/가전 > 청소기 > 업소용청소기",
    level: 3,
    leaf: true
  },
  {
    cid: 50015582,
    name: "청소기액세서리",
    fullPath: "디지털/가전 > 청소기 > 청소기액세서리",
    level: 3,
    leaf: true
  }
],
  50016860: [
  {
    cid: 50016880,
    name: "계절베개",
    fullPath: "가구/인테리어 > 베개 > 계절베개",
    level: 3,
    leaf: true
  },
  {
    cid: 50016741,
    name: "라텍스베개",
    fullPath: "가구/인테리어 > 베개 > 라텍스베개",
    level: 3,
    leaf: true
  },
  {
    cid: 50016900,
    name: "메모리폼베개",
    fullPath: "가구/인테리어 > 베개 > 메모리폼베개",
    level: 3,
    leaf: true
  },
  {
    cid: 50016920,
    name: "베개커버",
    fullPath: "가구/인테리어 > 베개 > 베개커버",
    level: 3,
    leaf: true
  },
  {
    cid: 50016940,
    name: "베개커버세트",
    fullPath: "가구/인테리어 > 베개 > 베개커버세트",
    level: 3,
    leaf: true
  }
],
  50019139: [
  {
    cid: 50019159,
    name: "가래떡/떡국떡/절편",
    fullPath: "식품 > 떡류 > 가래떡/떡국떡/절편",
    level: 3,
    leaf: true
  },
  {
    cid: 50019179,
    name: "인절미",
    fullPath: "식품 > 떡류 > 인절미",
    level: 3,
    leaf: true
  },
  {
    cid: 50019180,
    name: "모찌/찹쌀떡",
    fullPath: "식품 > 떡류 > 모찌/찹쌀떡",
    level: 3,
    leaf: true
  },
  {
    cid: 50019199,
    name: "떡케이크/세트",
    fullPath: "식품 > 떡류 > 떡케이크/세트",
    level: 3,
    leaf: true
  },
  {
    cid: 50019000,
    name: "꿀떡/경단",
    fullPath: "식품 > 떡류 > 꿀떡/경단",
    level: 3,
    leaf: true
  },
  {
    cid: 50019181,
    name: "오메기떡/두텁떡",
    fullPath: "식품 > 떡류 > 오메기떡/두텁떡",
    level: 3,
    leaf: true
  },
  {
    cid: 50019219,
    name: "송편",
    fullPath: "식품 > 떡류 > 송편",
    level: 3,
    leaf: true
  },
  {
    cid: 50019239,
    name: "기타떡",
    fullPath: "식품 > 떡류 > 기타떡",
    level: 3,
    leaf: true
  },
  {
    cid: 50020239,
    name: "백설기",
    fullPath: "식품 > 떡류 > 백설기",
    level: 3,
    leaf: true
  }
],
  50019439: [
  {
    cid: 50019459,
    name: "러닝벨트",
    fullPath: "스포츠/레저 > 러닝용품 > 러닝벨트",
    level: 3,
    leaf: true
  },
  {
    cid: 50019479,
    name: "러닝장갑",
    fullPath: "스포츠/레저 > 러닝용품 > 러닝장갑",
    level: 3,
    leaf: true
  },
  {
    cid: 50019499,
    name: "기타러닝용품",
    fullPath: "스포츠/레저 > 러닝용품 > 기타러닝용품",
    level: 3,
    leaf: true
  }
],
  50020779: [
  {
    cid: 50020799,
    name: "일반즉석밥/잡곡밥",
    fullPath: "식품 > 즉석밥/즉석국 > 일반즉석밥/잡곡밥",
    level: 3,
    leaf: true
  },
  {
    cid: 50020819,
    name: "볶음밥/컵밥/덮밥",
    fullPath: "식품 > 즉석밥/즉석국 > 볶음밥/컵밥/덮밥",
    level: 3,
    leaf: true
  },
  {
    cid: 50020839,
    name: "주먹밥/김밥",
    fullPath: "식품 > 즉석밥/즉석국 > 주먹밥/김밥",
    level: 3,
    leaf: true
  },
  {
    cid: 50020820,
    name: "국/탕/찌개",
    fullPath: "식품 > 즉석밥/즉석국 > 국/탕/찌개",
    level: 3,
    leaf: true
  },
  {
    cid: 50020821,
    name: "전투식량",
    fullPath: "식품 > 즉석밥/즉석국 > 전투식량",
    level: 3,
    leaf: true
  }
]
};

export function getStaticTrendCategoryChildren(cid: number) {
  return STATIC_TREND_CATEGORY_CHILDREN[cid] ?? [];
}
