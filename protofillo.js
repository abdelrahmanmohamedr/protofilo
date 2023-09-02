let b = window.innerWidth
let c = window.innerHeight
let s = document.getElementById("mimg");
let n = document.getElementById("name");
let w = s.clientWidth;
let h = s.clientHeight;
let wn = n.clientWidth;
let hn = n.clientHeight;


if (b >= 1050){
function right(ee , w , h , wn , hn) { ee.style.transform =  `translate(${w-hn}px) rotate(90deg)`
ee.style.fontSize = "17px"};
function down(ee , w , h , wn , hn){ee.style.transform = `translate(${w}px, ${h-hn-15}px) rotate(180deg)`
ee.style.fontSize = "20px"};
function left(ee , w , h , wn , hn){ee.style.transform = `translate( 15px , calc(${h}px - ${hn}px)) rotate(270deg)`
ee.style.fontSize = "23px"};
function upp(ee , w , h , wn , hn){ee.style.transform = `translate(15px , calc(calc(${h}px / 2) - ${hn}px)) rotate(360deg)`
ee.style.fontSize = "26px"};
function center(ee , w , h , wn , hn){ee.style.transform = `translate(calc(${(w/2)-wn}px) , calc(calc(${h}px / 2) - ${hn}px)) rotate(360deg)`
ee.style.fontSize = "31px"};
}else{
function right(ee , w , h , wn , hn) { ee.style.transform =  `translate(${w-hn}px) rotate(90deg)`
ee.style.fontSize = "13px"};
function down(ee , w , h , wn , hn){ee.style.transform = `translate(${w}px, ${h-hn-15}px) rotate(180deg)`
ee.style.fontSize = "27px"};
function left(ee , w , h , wn , hn){ee.style.transform = `translate( 15px , calc(${h}px - ${hn}px)) rotate(270deg)`
ee.style.fontSize = "20px"};
function upp(ee , w , h , wn , hn){ee.style.transform = `translate(15px , calc(calc(${h}px / 2) - ${hn}px)) rotate(360deg)`
ee.style.fontSize = "22px"};
function center(ee , w , h , wn , hn){ee.style.transform = `translate(calc(${(w/2)-wn}px) , calc(calc(${h}px / 2) - ${hn}px)) rotate(360deg)`
ee.style.fontSize = "26px"};
}

setTimeout(() => {right(n , w , h, wn, hn)}

, 500);

setTimeout(() => {down(n , w , h, wn, hn)}

, 990);

setTimeout(() => {left(n , w , h, wn, hn)}

, 1500);

setTimeout(() => {upp(n , w , h, wn, hn)}

, 2150);

setTimeout(() => {center(n , w , h, wn, hn)}

, 2700);

// _______________________________________________________________________________________________________________________________________________________________________________

let side = document.getElementById("side");
let [img,a,i,sk,p,ce] = document.querySelectorAll(".main > div");
let f = document.getElementById("fotter");
let up = document.getElementById("up");
let [i1,i2,i3] = document.querySelectorAll(".prosec div img");
let [i_,ii,iii ,iv ,v ,vi] = document.querySelectorAll(".cersec div img");

up.style.display = 'none'

console.log(i1)

console.log(b)

window.onscroll = function(){
    console.log(window.scrollY)
    console.log(b)
    if (b >= 1600){ 
        if(window.scrollY >= 3038.1064453125){
         side.style.cssText = `position : absolute;
         bottom:0;
         height:969px`
        }else{
         side.style.cssText = `position : fixed;`
        }}
        if (b >= 1600){ 
        if(window.scrollY < 400){
        up.style = `display : none`;
        }else {
        up.setAttribute("style" , `
        display : inline;
        transition-duration: 3s; 
        ` )
        }
        }
        else{
        if(window.scrollY < 50){
        up.style = `display : none`;
        }else {
        up.setAttribute("style" , `
        display : inline;
        transition-duration: 3s; 
        ` )
        }
        }
        if (b >= 1600){
        if(window.scrollY >= 135.35000610351562){
        a.style.display = "block"
        a.style.opacity = "1";
        a.style.transform = "translate(0px)"
        i.style.display = "block"
        }
        if(window.scrollY >= 615.5){
        i.style.opacity = "1";
        i.style.transform = "translate(0px)"
        sk.style.display = "block"
        }
        if(window.scrollY >= 1200.39990234375){
        sk.style.opacity = "1";
        sk.style.transform = "translate(0px)"
        p.style.display = "grid"
        }
        if(window.scrollY >= 2370){
        p.style.opacity = "1";
        i1.style.animation = "pop 1.5s"
        i2.style.animation = "pop 1.5s"
        i3.style.animation = "pop 1.5s"
        ce.style.display = "grid"
        }
        if(window.scrollY >= 2648.541015625){
        ce.style.opacity = "1";
        i_.style.animation = "pop 1.5s"
        ii.style.animation = "pop 1.5s"
        iii.style.animation = "pop 1.5s"
        vi.style.animation = "pop 1.5s"
        v.style.animation = "pop 1.5s"
        iv.style.animation = "pop 1.5s"
        f.style.opacity = "1"
        }
    }else{
        if(window.scrollY >= 0){
        a.style.display = "block"
        a.style.opacity = "1";
        a.style.transform = "translate(0px)"
        i.style.display = "block"
        }
        if(window.scrollY >= 615.5){
            i.style.opacity = "1";
            i.style.transform = "translate(0px)"
            sk.style.display = "block"
            }
            if(window.scrollY >= 670){
            sk.style.opacity = "1";
            sk.style.transform = "translate(0px)"
            p.style.display = "grid"
            }
            if(window.scrollY >= 2300){
            p.style.opacity = "1";
            ce.style.display = "grid"
            }
            if(window.scrollY >= 2648.541015625){
            ce.style.opacity = "1";
            i_.style.animation = "pop 1.5s"
            ii.style.animation = "pop 1.5s"
            iii.style.animation = "pop 1.5s"
            vi.style.animation = "pop 1.5s"
            v.style.animation = "pop 1.5s"
            iv.style.animation = "pop 1.5s"
            f.style.opacity = "1"
            }
    }
}
//_______________________________________________________________________________________________________________________________________________________________________________

up.onclick = function(){

    window.scrollTo({

        top : 0,

        behavior : "smooth"
        
    })
}