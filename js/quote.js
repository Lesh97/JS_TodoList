const quotes = [
  {
    quote: "빠르게 돌아가는 세상에서 느리게 버티는 그 손이 좋았어요.",
    author: "-술꾼도시여자들2 / 한우주",
  },
  {
    quote:
      "잘 되는 것보다 잘 안되는게 많고 앞으로 뭘 하며 살 거냐고 물으면, 대답할 수 있는 것보다 없는게 더 많아요.",
    author: "-술꾼도시여자들2 / 한우주",
  },
  {
    quote:
      "힘들지 않으면, 그게 더 잘못하고 있는 거니까. 지금 당신은 잘하고 있는거에요. 충분히.",
    author: "-Lesh",
  },
  {
    quote: "시도하면 확률은 50%",
    author: "-Someone",
  },
  {
    quote:
      "포기하는 사람 뭐라고 하지 마요. 포기하는 거 그거 진짜 힘든거에요 누군가에겐.",
    author: "-Lesh",
  },
  {
    quote:
      "너도 그러라는 게 아니라, 그냥 좀... 천천히 깊게 들여다보라고 너를.. 시간은 많으니까.",
    author: "-술꾼도시여자들 / 강지구",
  },
  {
    quote: "지나간 시간보다 다가올 날들에 더 행복했으면 좋겠습니다.",
    author: "-그 남자의 기억법 / 이정훈",
  },
  {
    quote: "나도 좀 더 용감해져야겠다.",
    author: "-오 마이 베이비 / 최강으뜸",
  },
  {
    quote:
      "준비될 때까지 기다리지 마. 내가 살아보니까.. 완벽하게 준비되는 순간은 안 오더라고 그냥 지금 시작하면서 채워.",
    author: "-나빌레라 / 심덕출",
  },
  {
    quote:
      "해보고 안되면.. 그때 포기해도 되잖아. 내가 돼볼게. 네가 믿어주면 그걸 해내는 사람.. 오늘은 일단.. 일어나는 것부터 해볼까?",
    author: "-런온 / 기선겸",
  },
  {
    quote:
      "그래서 이번엔 후회를 남기고 싶지 않다? / 응, 이번엔...피하지 않으려고.",
    author: "-해피니스 / 정이현, 윤새봄",
  },
  {
    quote:
      "벌써부터 포기하지 말고, 마지막까지 최선을 다하다 보면 나중에 좋은 결과가 나오지 않을까?",
    author: "-허쉬 / 황정민",
  },
  {
    quote:
      "무슨 일 인지 정확히 모르겠지만, 도전 안 한 것보다 실패하는게 더 낫지 않아?",
    author: "-드라마스테이지-럭키 / 김우석",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
