import"./assets/modulepreload-polyfill-3cfb730f.js";let e={email:"",message:""};function t(){localStorage.setItem("feedback-form-state",JSON.stringify(e))}function o(){const a=localStorage.getItem("feedback-form-state");a&&(e=JSON.parse(a),document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message)}function m(){localStorage.removeItem("feedback-form-state"),e={email:"",message:""},document.querySelector('input[name="email"]').value="",document.querySelector('textarea[name="message"]').value=""}window.addEventListener("load",o);document.querySelector(".feedback-form").addEventListener("input",function(a){e[a.target.name]=a.target.value,t()});document.querySelector(".feedback-form").addEventListener("submit",function(a){a.preventDefault(),e.email===""||e.message===""?alert("Fill please all fields"):(console.log(e),m())});
//# sourceMappingURL=commonHelpers2.js.map
