import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js';

// 파이어베이스 API를 활용하여 웹 서비스를 제공받기 위한 초기화 작업. 

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBhUqa4ek-tIbhbOqXBaLw-eEq4HSoiBXI",
    authDomain: "cloud251110-junhwan1310.firebaseapp.com",
    projectId: "cloud251110-junhwan1310",
    storageBucket: "cloud251110-junhwan1310.firebasestorage.app",
    messagingSenderId: "955110549507",
    appId: "1:955110549507:web:86590dc8f33a6bdb3e4636"
  };

  // Initialize Firebase
  // 변수(app) 앞에 export를 붙여서 외부(html, js)에서 사용가능하도록 구현함. 
  export const app = initializeApp(firebaseConfig);