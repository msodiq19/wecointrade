/* gettin all element in the nav section in aside */
const navs = document.querySelectorAll('.m-nav');
const msg = document.querySelector('.drop-btn-msg');
const admin = document.querySelector('.drop-btn-admin');
const bars = document.querySelector('.bars');
const pag = document.querySelector('.pag-num');
const pagP = document.querySelector('.pag-p')
const options = document.querySelectorAll('option');
const select  = document.querySelector('select');

/* Menu bar handler */
bars.addEventListener('click',(e)=>{
     document.querySelector('.main-aside').classList.toggle('res');
     document.querySelector('.alt-aside').classList.toggle('res');
     document.querySelector('main').classList.toggle('expand');
})

/* dropdownlist in the header section */
msg.addEventListener('click',()=>{
     admin.nextElementSibling.classList.remove('active');
     msg.nextElementSibling.classList.toggle('active');
});
admin.addEventListener("click", () => {
     admin.previousElementSibling.classList.remove('active');
     admin.nextElementSibling.classList.toggle("active");
});

/* Transversing the DOM */
navs.forEach(nav => {
    nav.addEventListener('click',(e)=>{
        const current = document.querySelector('.current');
        if (nav.classList.contains("db")) {
          current.classList.remove('current');
          document.querySelector(".dashboard").classList.add('current');

        } 
        else if (nav.classList.contains("td")) {
           current.classList.remove("current");
           document.querySelector(".trades").classList.add("current");
        } 
        else if (nav.classList.contains("dp")) {
           current.classList.remove("current");
           document.querySelector(".deposits").classList.add("current");
        }
        else if (nav.classList.contains('wd')){
             current.classList.remove("current");
             document.querySelector(".withdrawals").classList.add("current");
        }
        else if (nav.classList.contains("tps")){
             current.classList.remove("current");
             document.querySelector(".third-party").classList.add("current");
        }
        else if(nav.classList.contains('mu')){
             /* creating a dropdown list in the nav */
             nav.nextElementSibling.classList.toggle('active');
             nav.nextElementSibling.addEventListener('click',()=>{
                  current.classList.remove("current");
                  document
                    .querySelector(".manage-users")
                    .classList.add("current");
               nav.nextElementSibling.classList.remove('active');
             })
        }
        else if(nav.classList.contains("cp")){
             current.classList.remove("current");
             document.querySelector(".change-passwd").classList.add("current");
        }
        else if(nav.classList.contains('lg')){
             current.classList.remove("current");
             document.querySelector(".logout").classList.add("current");
        }else{
            
        }
    })
});

/* Redirecting back to dashboard */
document.querySelectorAll('.dash-home').forEach(dash=>{
     dash.addEventListener('click',()=>{
          const current = document.querySelector(".current");
          current.classList.remove('current');
          document.querySelector('.dashboard').classList.add('current');
     })
})
/* home icon returning back to dashoard */
document.querySelector('.return-home').addEventListener('click',()=>{
      const current = document.querySelector(".current");
      current.classList.remove("current");
      document.querySelector(".dashboard").classList.add("current");
})

/* dashboard handler */
document.querySelectorAll('.card-foot').forEach((card,index)=>{
     card.addEventListener('click',(e)=>{
          const current = document.querySelector('.current');
          if(index == 0){
               current.classList.remove("current");
               document.querySelector(".withdrawals").classList.add("current");
          }else if(index == 1){
               current.classList.remove("current");
               document.querySelector(".deposits").classList.add("current");
          }else if(index == 2){
               current.classList.remove("current");
               document.querySelector(".manage-users").classList.add("current");
          }else{
               current.classList.remove("current");
               document.querySelector(".trades").classList.add("current");
          }
     })
})

document.querySelectorAll('.box-foot').forEach((box,index)=>{
     box.addEventListener('click',()=>{
          const current = document.querySelector(".current");
          if(index == 0){
               current.classList.remove('current');
               document.querySelector('.admin-section').classList.add('current');
          }else if(index == 1){
               current.classList.remove("current");
               document
                 .querySelector(".notification")
                 .classList.add("current");
          }else{
               current.classList.remove("current");
               document
                 .querySelector(".profit-loss")
                 .classList.add("current");
          }
     })
})
/* admin list event handler */
document.querySelector('.admin-link').addEventListener('click',()=>{
     const current = document.querySelector('.current');
     current.classList.remove('current');
     document.querySelector('.admin-list').classList.add('current')
})

/* user statistics handler */
document.querySelectorAll('.stat-body').forEach((stat,index)=>{
     stat.addEventListener('click',()=>{
          const current = document.querySelector(".current");
          if (index == 0) {
            current.classList.remove("current");
            document.querySelector(".manage-users").classList.add("current");
          } else if (index == 1) {
            current.classList.remove("current");
            document.querySelector(".active-users").classList.add("current");
          } else if (index == 2) {
            current.classList.remove("current");
            document.querySelector(".blocked-users").classList.add("current");
          }
     })
})

/* setting and security event handler */
document.querySelectorAll('.items').forEach((item,index)=>{
     item.addEventListener('click',()=>{
          const current =  document.querySelector('.current');
          if(index == 0){
               current.classList.remove("current");
               document.querySelector(".app-settings").classList.add("current");
          }else if(index == 1){
               current.classList.remove("current");
               document.querySelector(".change-passwd").classList.add("current");
          }else if(index == 2){
               current.classList.remove("current");
               document.querySelector(".admin-list").classList.add("current");
          }else if(index == 3){
               current.classList.remove("current");
               document.querySelector(".payment-methods").classList.add("current");
          }
     })
})
/* payment referance handler */
document.querySelectorAll(".payment-box").forEach((payment, index) => {
  payment.addEventListener("click", () => {
     const current = document.querySelector(".current");
     if (index == 0) {
       current.classList.remove("current");
       document.querySelector(".confirmed-withdrawals").classList.add("current");
     } else if (index == 1) {
       current.classList.remove("current");
       document.querySelector(".pending1-withdrawals").classList.add("current");
     } else if (index == 2) {
       current.classList.remove("current");
       document.querySelector(".pending2-withdrawals").classList.add("current");
     }
  });
});

/* user edit handler */
document.querySelectorAll('.options a').forEach((userOption,index)=>{
     userOption.addEventListener('click',(e)=>{
          const current = document.querySelector(".current");
          if (index == 0) {
            current.classList.remove("current");
            document
              .querySelector(".user-edit")
              .classList.add("current");
          } else if (index == 1) {
            current.classList.remove("current");
            document
              .querySelector(".del-user")
              .classList.add("current");
          }
     })
})

/* Edit user details */
document.querySelectorAll('.edit-flex-foot').forEach((edit,index)=>{
     edit.addEventListener('click',(e)=>{
          /* created header and footer template */
          const modalHead = `
               <div class="modal-head">
                    <div class="modal-title">
                         ${e.target.previousElementSibling.innerHTML}
                    </div>
                    <a class="close-btn">x</a>
               </div>
          `;
          const modalFoot = `
               <div class="modal-foot">
                    <a class="modal-close">close</a>
               </div>
          `;

          const modal = document.querySelector(".modal");
          const current = document.querySelector('.current');

          if (index == 0) {
            document.querySelector(".modal-content").innerHTML = `
                    ${modalHead}
                    <div class="modal-body">
                         <form action="">
                              <p>to deduct enter a negative amount</p>
                              <label for="live-amount">amount</label>
                              <input type="number" name="live-amount" id="live-amount">
                              <input type="submit" value="submit">      
                         </form>
                    </div>
                    ${modalFoot}
              `;
            modal.style.display = "block";
          } else if (index == 1) {
            document.querySelector(".modal-content").innerHTML = `
                    ${modalHead}
                    <div class="modal-body">
                         <p>to deduct enter a negative amount</p>
                         <label for="demo-amount">amount</label>
                         <input type="number" name="demo-amount" id="demo-amount">
                         <input type="submit" value="submit">
                    </div>
                    ${modalFoot}
              `;
            modal.style.display = "block";
          } else if (index == 2) {
            document.querySelector(".modal-content").innerHTML = `
                    ${modalHead}
                    <div class="modal-body">
                         <h4>change demo trade status</h4>
                         <label for="current-status">current status</label>
                         <input type="text" name="current-status" id="current-status" value="active" disabled>

                         <label for="update-status">update status</label>
                         <select name="update-status" id="update-status">
                              <option value="active">active</option>
                              <option value="inactive">inactive</option>
                         </select>

                         <input type="submit" value="update demo status">
                    </div>
                    ${modalFoot}
              `;
            modal.style.display = "block";
          } else if (index == 3) {
            current.classList.remove("current");
            document
              .querySelector(".generated-predictions")
              .classList.add("current");
          } else if (index == 4) {
            document.querySelector(".modal-content").innerHTML = `
                    ${modalHead}
                    <div class="modal-body">

                    </div>
                    ${modalFoot}
              `;
            modal.style.display = "block";
          } else if (index == 5) {
            document.querySelector(".modal-content").innerHTML = `
                    ${modalHead}
                    <div class="modal-body">
                         <h4>change user password</h4>

                         <label for="new-pass">new password</label>
                         <input type="password" name="new-pass" id="new-pass">

                         <label for="verify-pass">verify password</label>
                         <input type="password" name="verify-pass" id="verify-pass">

                         <input type="submit" value="update user password">
                    </div>
                    ${modalFoot}
              `;
            modal.style.display = "block";
          } else if (index == 6) {
            current.classList.remove("current");
            document.querySelector(".manage-users").classList.add("current");
          } else if (index == 7) {
            document.querySelector(".modal-content").innerHTML = `
                    ${modalHead}
                    <div class="modal-body">
                         <label for="min-amount">minimum amount</label>
                         <input type="number" name="min-amount" id="min-amount">

                         <label for="max-amount">maximum amount</label>
                         <input type="number" name="max-amount" id="max-amount">

                         <label for="predict">no. of predictions</label>
                         <input type="number" name="predict" id="predict">

                         <label for="acct-type">acct type</label>
                         <select name="acct-type" id="acct-type">type
                              <option value="demo">demo</option>
                              <option value="live">live</option>
                         </select>

                         <label for="asset">assets</label>
                         <select name="asset" id="asset">
                              <option value="btcusd" selected>BTCUSD</option>
                              <option value="btcusdt">BTCUSDT</option>
                              <option value="ethusdt">ETHUSDT</option>
                              <option value="ltcusdt">LTCUSDT</option>
                         </select>

                         <label for="time">time</label>
                         <select name="time" id="time">
                              <option value="1min" selected>1 min</option>
                              <option value="2mins">2 mins</option>
                              <option value="3mins">3 mins</option>
                              <option value="4mins">4 mins</option>
                         </select>

                         <label for="trade-type">trade type</label>
                         <select name="trade-type" id="trade-type">
                              <option value="buy">buy</option>
                              <option value="sell">sell</option>
                         </select>
                         
                         <input type="submit" value="generate prediction">
                    </div>
                    ${modalFoot}
              `;
            modal.style.display = "block";
          } else if (index == 8) {
            current.classList.remove("current");
            document
              .querySelector(".unused-live-predict")
              .classList.add("current");
          } else if (index == 9) {
              current.classList.remove("current");
              document
                .querySelector(".unused-demo-predict")
                .classList.add("current");
          } else if (index == 10) {
               current.classList.remove("current");
               document
                 .querySelector(".live-trade-history")
                 .classList.add("current");
          } else if (index == 11) {
               current.classList.remove("current");
               document
                 .querySelector(".demo-trade-history")
                 .classList.add("current");
          } else if (index == 12) {
            document.querySelector(".modal-content").innerHTML = `
                    ${modalHead}
                    <div class="modal-body">
                         <h4>change plan</h4>
                         <label for="current-plan">current plan</label>
                         <input type="text" name="current-plan" id="current-plan" value="silver" disabled>

                         <label for="new-plan">new plan</label>
                         <select name="new-plan" id="new-plan">
                              <option value="silver">silver</option>
                              <option value="gold">gold</option>
                              <option value="diamond">diamond</option>
                              <option value="platinum">platinum</option>
                         </select>

                         <input type="submit" value="update plan">
                    </div>
                    ${modalFoot}
              `;
            modal.style.display = "block";
          } else if (index == 13) {
            document.querySelector(".modal-content").innerHTML = `
                    ${modalHead}
                    <div class="modal-body">

                    </div>
                    ${modalFoot}
              `;
            modal.style.display = "block";
          } else if (index == 14) {
            document.querySelector(".modal-content").innerHTML = `
                    ${modalHead}
                    <div class="modal-body">
                         <h4>set deposit wallet address</h4>
                         <label for="btc-address">bitcoin address</label>
                         <input type="text" name="btc-address" id="btc-address">
                         <label for="eth-address">ethereum address</label>
                         <input type="text" name="eth-address" id="eth-address">
                         <label for="ltc-address">litcoin address</label>
                         <input type="text" name="ltc-address" id="ltc-address">
                         <input type="submit" value="submit">
                    </div>
                    ${modalFoot}
              `;
            modal.style.display = "block";
          } else if (index == 15) {
            document.querySelector(".modal-content").innerHTML = `
                    ${modalHead}
                    <div class="modal-body">

                    </div>
                    ${modalFoot}
              `;
            modal.style.display = "block";
          }

          const closeBtn = document.querySelector(".close-btn");
          const close = document.querySelector(".modal-close");
          /* handling modal event */
          closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
          });
          window.addEventListener("click", (e) => {
            if (e.target == modal) {
              modal.style.display = "none";
            }
          });
          close.addEventListener('click',()=>{
               modal.style.display = "none";
          })
          
     })
})


