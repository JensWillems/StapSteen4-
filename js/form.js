let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let send = document.getElementById("send");
let main = document.getElementById("main");
let gender = document.getElementById("gender");

logThis();

function logThis() {
  send.addEventListener("click", () => {
    let html = `
    <div class="grid">
    <section id='nameCard'>
         <div class='deel1'>
         <img src="./full_projects_imgs/stapsteenlogov3.svg"/>
         <p>Hallo, welkom tot het Stapsteen team</p>
         <button><a href="./form.html">Close</a></button>
        </div>
        <div class='deel2'>
        <h1 id='firstName'>${fname.value}</h1><h2 id='lastName'>${lname.value}</h2>
        <h3 id='email'>${gender.value}</h3>
        <h3 id='email'>${email.value}</h3>
        <p id='subject'>${subject.value}</p>
        </div>
        </section>
        </div>`;

    main.innerHTML = html;
  });
}
