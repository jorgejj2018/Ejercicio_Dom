const d = document;
let x = 0, 
    y=0;
export function ball(ctnBall,ball,e){
const $ball = d.querySelector(ball),
      $ctnBall = d.querySelector(ctnBall),
      $limitBall = $ball.getBoundingClientRect(),
      $limitCtnBall = $ctnBall.getBoundingClientRect();
    
    /* console.log($ball)
    console.log($ctnBall) */
    console.log($limitBall)
    console.log($limitCtnBall)
    
    switch (e.keyCode) {
        /* LEFT */
        case 37:
            e.preventDefault()
        if($limitBall.left > $limitCtnBall.left){
            x--
        }
        break;
        case 65:
            e.preventDefault()
        if($limitBall.left > $limitCtnBall.left){
            x--
        }
        break;
        /* RIGHT */
        case 39:
            e.preventDefault()
        if($limitBall.right < $limitCtnBall.right){
            x++
        }
        break;
        case 68:
            e.preventDefault()
        if($limitBall.right < $limitCtnBall.right){
            x++
        }
        break;
        /* DOWN*/
        case 40:
            e.preventDefault()
        if($limitBall.bottom < $limitCtnBall.bottom){
            y++
        }
        break;
        case 83:
            e.preventDefault()
        if($limitBall.bottom < $limitCtnBall.bottom){
            y++
        }
        break;
        /* UP */
        case 38:
            e.preventDefault()
        if($limitBall.top > $limitCtnBall.top){
            y--
        }
        break;
        case 87:
            e.preventDefault()
        if($limitBall.top > $limitCtnBall.top){
            y--
        }
        break;

    default:
        break;  
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`
}