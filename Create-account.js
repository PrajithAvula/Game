 function togglePassword(inputClass) {
  const passwordInput = document.querySelector(`.${inputClass}`);
  const toggleIcon = document.getElementById(`toggle${inputClass === 'js-input-password' ? 'Password' : 'ConfirmPassword'}`);

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.classList.remove('far', 'fa-eye');
    toggleIcon.classList.add('far', 'fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    toggleIcon.classList.remove('far', 'fa-eye-slash');
    toggleIcon.classList.add('far', 'fa-eye');
  }
}

 
document.addEventListener('DOMContentLoaded', function () {
  const storedInputArray = JSON.parse(localStorage.getItem('inputArray')) || [];
  inputArray.push(...storedInputArray); 
  enterMainPage();
  document.querySelector(".js-not-valid").innerHTML = "";
  document.querySelector(".js-username").value ="";

  
  
});
 function redirectToLoginPage() {
  document.title ='redirecting to Login Page' 
  document.querySelector('.js-to-login').innerHTML = 'Redirecting to Login Page';
  setTimeout(() => {
    window.location.href ='login-page.html'

  },1000);
}

 let inputArray = [];
 function pushValues() {
  const name = document.querySelector('.js-input-name').value;
  const password = document.querySelector('.js-input-password').value;
  const confirmPassword = document.querySelector('.js-confirm-password').value;
  let isThere = false;
  inputArray.forEach(entry=>{
      if(entry.name === name){
        isThere = true;
      }


  })

  if(password === "" || name === "" || confirmPassword === "")  {
    document.querySelector('.js-no-match').innerHTML =`Some fields are empty`;
    allData();
  } else if(isThere === true) {
    document.querySelector('.js-name-exist').innerHTML = "Username already taken";
    setTimeout(()=> {
      document.querySelector('.js-name-exist').innerHTML =``;
    },2000);
    
  } else if(password === confirmPassword) {
    inputArray.push({
      name,
      password
    });
    document.querySelector('.js-no-match').innerHTML = "";
    setTimeout(() => {
      window.location.href = "login-page.html";
    },1000);
    allData();
  }  else if(password !== confirmPassword) {
    document.querySelector('.js-no-match').innerHTML = "Passwords doesnot match";
    setTimeout(()=> {
      document.querySelector('.js-no-match').innerHTML =``;
    },2000);
    
  } 
    localStorage.setItem('inputArray',JSON.stringify(inputArray));
    


}

function allData() {
  setTimeout(()=>{
    document.querySelector('.js-no-match').innerHTML =``;
    document.querySelector('.js-name-exist').innerHTML = "";
    document.querySelector('.js-input-name').value = "";
    document.querySelector('.js-input-password').value="";
    document.querySelector(".js-confirm-password").value="";
  },2000);
}

 

//  Js code for Login-Page

 function redirectToCreateAccountPage() {
  document.title ='redirecting to Create Account Page' 
  document.querySelector('.js-to-create').innerHTML = 'Redirecting to Create Account Page';
  setTimeout(() => {
    window.location.href ='create-account.html'
    
  },1000);
  
}

 function enterMainPage() {
  let isThere= false;
  
  
  for(const entry of inputArray) {
    
    nameOfUser = entry.name;
    passwordOfUser = entry.password;
    userName = document.querySelector(".js-username").value;
    userPassword = document.querySelector(".js-password").value;
    if(userName === nameOfUser && userPassword === passwordOfUser) {
      document.querySelector(".js-not-valid").innerHTML = "Login Successful";
     
     
      setTimeout(() => {
        window.location.href = "MainPage.html";

      },2000); 
      isThere = true;
      
      break;
    }
  }
  
  if(isThere === false) {
    document.querySelector(".js-not-valid").innerHTML = "User Name and Password doesnot match";
    setTimeout(()=> {
    document.querySelector(".js-not-valid").innerHTML = "";
    },2000);
    
  }
  
  
}


function togglePassword1(inputClass) {
  const passwordInput = document.querySelector(`.${inputClass}`);
  const toggleIcon = document.getElementById(`togglePassword`);

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleIcon.classList.remove('far', 'fa-eye');
    toggleIcon.classList.add('far', 'fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    toggleIcon.classList.remove('far', 'fa-eye-slash');
    toggleIcon.classList.add('far', 'fa-eye');
  }
}


// Js code for Main Page HTML

function enterRPS() {
  document.querySelector(".js-play").innerHTML = "Now You are Playing Rock Paper Scissors";
  setInterval(()=> {
    window.location.href ="rock-paper-scissors.html";
  },2000);
  
};

function enterHT(){
  document.querySelector(".js-play").innerHTML = "Now You are Playing Heads or Tails";
  setInterval(()=> {
    window.location.href ="CoinsGame.html";
  },2000);
};

function goToLogin() {
  setTimeout(()=> {
    window.location.href = "login-page.html";
  }, 1000);
};


let isClicked = false;
function showProfile() {
  const profileElement = document.querySelector(".js-yes-clicked");
  const logoutScrollElement = document.querySelector(".js-logout-scroll");
  if (!isClicked) {
    profileElement.classList.add("logo-info-scroll");
    logoutScrollElement.innerHTML = "Log Out";
    isClicked = true;
  } else {
    isClicked = false;
    profileElement.classList.remove("logo-info-scroll");
    logoutScrollElement.innerHTML = "";
  }
}