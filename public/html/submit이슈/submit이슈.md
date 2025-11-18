## Submit 이슈
1. submit이란? 
HTML <form> 태그는 버튼을 클릭하거나 엔터를 누르면 자동으로 서버로 요청을 전송함

```html

<from action="백엔드쪽에 엔드포인트이름온다" method="get">
  <input>
  <button>로그인</button>
</from>
```

-> 버튼 클릭시 브라우저가 action="/login" 주소로 데이터를 보내버린다.
-> 3000 -> 8000
-> 페이지가 새로고침되거나 이동됨 

2. submit 이슈란?
- 버튼을 눌렀는데 새로고침되거나 페이지가 사라진다. 

예시상황
- form태그안에 버튼이 있을때 -> submit발생함 -> 리액트 리렌더링발생으로 문제가 됨. 
- JS로 입력값을 처리하려는데 submit이 먼저 일어나서 값이 사라진다. 
- ajax로 요청을 보내는데 submit이 발동해서 페이지 전체가 reload된다. (SPA)
- React/Vue에서 form을 쓰면 이벤트가 적용되지 않고 새로고침이 된다. 
- 화면이 SPA인데 갑자기 SSR처럼 이동되어 버림.

사례
1. 버튼을 눌렀을 때 페이지가 새로고침 된다.
2. JS에서 이벤트 발동하기 전에 submit되어버렸다. 
3. AJAX로 처리하는데 새로고침이 발동함.
4. 리액트에서 form들어가면 새로고침됨. - form태그 쓰지마

해결방법
1. form의 기본 submit 동작을 막아라 - > e.preventDefault()

2. submit 말고 button으로 전환 
```html
<button type="button" onclick=login()>
```

3. form태그를 쓰지 않는 방식 
- 태그를 커스텀하게 사용할 수 있다.
- 개발자가 태그를 만들어 쓴다.
- 리액트에서 태그는 함수이다. 
```jsx
<Login />
function Login(){
  function onSubmit(e){
    e.preventDefault()
  }
  return (
    <form onSubmit={onSubmit}>
      <button type="submit">로그인</button>
    </form>
  )
}
```