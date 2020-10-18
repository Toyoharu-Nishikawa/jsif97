/*******************************************************************/
/*RegHS(H, S, M)
/*  (given H and S find the region)
/*******************************************************************/

//     M= 1: region 1
//       21: region 2a 
//       22: region 2b 
//       23: region 2c 
//       31: region 3a below critical specific entropy 4.41202148223476 kJ/kgK 
//       32: region 3b below critical specific entropy 4.41202148223476 kJ/kgK
//        4: region 4 wet region 
//        0: out of IF97

import {satproT} from "./satproT.mjs" 
import {ZPS1} from "./Aux_1.mjs" 
import {ZPS2} from "./Aux_2.mjs" 
import {ZPS30} from "./Aux_3.mjs" 
import {HS800C} from "./boundary/BTmax_HS.mjs" 

const minState = satproT(273.15)
const lmin = minState.l
const gmin = minState.g
const slmin = l.s
const sgmin = g.s
const hlmin = l.h
const hgmin = g.h

const Hmin = s => { 
  const x = (s-slmin)/(sgmin-slmin)
  const h = (1-x)*hlmin  + x*hgmin
  return h
}

const Hmin2 = s => { 
  const P = 0.000611
  const state = ZPS_2(P, s)
  const h = state.h
  return h
}


const Hmax = (s, MM) => {
  const P = 100
  const state = MM==1? ZPS_1(P, s):
                MM==2? ZPS_2(P, s):
                ZPS_30(P, s)
  const h = state.h
  return h
}

const Hmax2 = (s) => {
  const h = HS800C(s)
  return h
}



export const RegHS = ( h, s) => {
  /* input S: kJ/kg, H: kJ/kg */
  /* output M               */
  
  /* Test of maximum pressure */
  if(s < 0 ){
    const M = 0
    return M
  }
  else if(s<3.397782955){ //s1(100MPa, 623.15K)
    // 1 or 4 
    const hmin = Hmin(s)  
    const hsat = .... 
    const hmax = Hmax(s, 1)  
    const M = h < hmin ? 0 :
             h < hsat ? 4 :
             h < hmax ? 1 :
             0
    return M
  }
  else if(s<3.77828281340){ //s'(623.15K)
   //1 or 3a or 4
    const hmin = Hmin(s)  
    const hsat = .... 
    const hb13 = .... 
    const hmax = Hmax(s, 3)  
    const M = h < hmin ? 0 :
              h < hsat ? 4 :
              h < hb13 ? 1
              h < hmax ? 31 :
              0
    return M
  }
  else if(s<4.41202148223476){ //sc
    //3a or 4
    const hmin = Hmin(s)  
    const hsat = .... 
    const hb13 = .... 
    const hmax = Hmax(s, 3)  
    const M = h < hmin ? 0 :
              h < hsat ? 4 :
              h < hmax ? 31 :
              0
    return M

  }

  else if(s<5.048096828){ //sB23min
   //3b or4
    const hmin = Hmin(s)  
    const hsat = .... 
    const hb13 = .... 
    const hmax = Hmax(s, 3)  
    const M = h < hmin ? 0 :
              h < hsat ? 4 :
              h < hmax ? 32 :
              0
    return M

  }
  else if(s<5.260578707){ //sB23max
   //3b or 2c or4
    const hmin = Hmin(s)  
    const hsat = .... 
    const hmax = Hmax(s, 3)  
    const M = h < hmin ? 0 :
              h < hsat ? 4 :
              //h < hmax ? 32 :
              //h < hmax ? 32 :
              0
    return M

  }
  else if(s<5.85){ //s2bcmin
   //2c or 4
    const hmin = Hmin(s)  
    const hsat = .... 
    const hmax = Hmax(s, 2)  
    const M = h < hmin ? 0 :
              h < hsat ? 4 :
              h < hmax ?23 :
              0
    return M


  }
  else if(s<6.040){ //
   //2b or 4
    const hmin = Hmin(s)  
    const hsat = .... 
    const hmax = Hmax2(s)  
    const M = h < hmin ? 0 :
              h < hsat ? 4 :
              h < hmax ?22 :
              0
    return M
  }
  else if(s<6.076){ //s2bcmin
   //2b or 4
    const hmin = Hmin(s)  
    const hsat = .... 
    const hmax = Hmax2(s)  
    const M = h < hmin ? 0 :
              h < hsat ? 4 :
              h < hmax ?22 :
              0
    return M
  }
  else if(s<7.852){ 
   //2b or 2a or 4
    const hmin = Hmin(s)  
    const hsat = .... 
    const h2ab = .... 
    const hmax = Hmax2(s)  
    const M = h < hmin ? 0 :
              h < hsat ? 4 :
              h < h2ab ?21 :
              h < hmax ?22 :
              0
    return M

  }
  else if(s<9.155759395){ //s''(273.15K)
   //2a or 4
    const hmin = Hmin(s)  
    const hsat = .... 
    const hmax = Hmax2(s)  
    const M = h < hmin ? 0 :
              h < hsat ? 4 :
              h < hmax ?21 :
              0
    return M
  }
  else if(s<11.92){  //s''(1073.15K)
   //2a
    const hmin = Hmin2(s)  
    const hmax = Hmax2(s)  
    const M = h < hmin ? 0 :
              h < hmax ?21 :
              0
   return M
  }
  else{
    const M = 0
    return M
  }
}



