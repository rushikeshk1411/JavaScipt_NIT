const uname = document.getElementById('uname')
const pass = document.getElementById('pass')
const email = document.getElementById('email')
const submit = document.getElementById('submit')

submit.addEventListener('click', ()=>{
    const text = uname.value()
    document.getElementById('uname').value();
    console.log(text)
})