# starbucks-clone

스타벅스 웹페이지 첫 랜더페이지 클론코딩

목적. 
오랜만의 코딩으로 html, css 퍼블리싱 스킬 그리고 dom 랜더 연습!

배운점. 

1. keyframes으로 slide 형성함으로서 애니메이션 형성
2. mouseout과 mouseleave의 차이를 통해서 이벤트 버블링 개념 다시 익힘.
--> 버블링이란 이벤트가 일어났을때 상위요소에 영향을 주는지에 대한 개념인데
mouseleave의 경우 버블링이 없고, mouseout의 경우 버블링이 존재함을 알 수 있었다. 이와 반대의 개념도 mouseover, mouseenter가 있다.
mouseenter, mouseleave / mouseover, mouseout 로 짝을 지을 수 있다.

느낀점. (항상 부족한 점을 인지하면서 많은 부분을 느낀다. )

1. 슬라이드 메뉴바를 만들때 마지막에 만듬으로써 고생을 많이 했다. 그저 mouseout, mouseleave, mouseover, mouseenter 이런 개념으로만 접근 하려다보니
다른 메뉴바로 갔을때의 여러가지 상황 하나하나를 전부 다 처리해야해서 고생을 했다. 그래서 그냥 부모, 자식 관계로 li안에 슬라이드 메뉴바를 만든 뒤
각 메뉴에 hover 했을때 나오는 개념으로 진행하니 훨씬 간단하고 편했다. 여기서 메뉴바를 다른 부분 진행하기 전에 미리 만들면 더 낫겠다 다른 점을 느끼게 되었고,
무분별하게 div를 사용하는 것이 아닌 정말 이벤트 버블링과 이 div안에 각 div의 역할에 맡게 div를 적절히 사용하는 것이 편리하다는 것을 다시 한번 느끼게 되었다.

2. css의 경우 너무 중복되거나 많은 코드 낭비가 있었다라는 점을 아쉽게 생각한다. 스스로 보기에도 css의 경우 너무 난잡하거나 한 부분이 심하다라고 느꼈고, 이래서
scss 등으로 간단하게 중복되는 부분을 많이 줄여주고 남들이 보기에도 편하게 진행해야 되는구나를 절실히 느끼게 되었다.

3. 아무래도 첫 랜더링 페이지만 제작하다보니 기능적인 부분이 안들어간 부분이 아쉬웠다. 추후에 클론코딩이 아닌 해보고 싶은 프로젝트에는 여러가지 기능을 넣을 수 있도록 해야겠다.

4. 대부분 정렬할 때 flex를 많이 사용하곤 했는데 flex로만 안되는 한계점들을 알 수 있었다. 또한 position 으로도 원하는 위치에 넣고 나중에 그 position이 문제가 생길 때 정말 
많은 부분을 수정해야해서 그 부분이 아쉬웠다.

5. 반응형 구현에 있어서 다음 프로젝트 부터는 반응형도 구현할 예정이다. 

![스타벅스클론](https://user-images.githubusercontent.com/81619737/201269616-5a7dc3b5-d96b-45c4-9c7f-bb09faad7ed2.PNG)


