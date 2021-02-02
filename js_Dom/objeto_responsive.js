const d = document,
      w  = window;

      export default function responsiveM(id,mq,mobileCtn,deskCtn){
        let breakPoint = w.matchMedia(mq)
        
        const responsive = (e) =>{
            if(e.matches){
                d.getElementById(id).innerHTML = deskCtn
            }
            else{
                d.getElementById(id).innerHTML = mobileCtn
            }
        }
        breakPoint.addListener(responsive)
        responsive(breakPoint)
      }