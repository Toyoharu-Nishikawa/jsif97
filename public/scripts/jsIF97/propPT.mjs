/*******************************************************************/
/*  propPT.for
/*  (given P and T calculate properties of the regions 1, 2, 3, and 5) 
/*******************************************************************/

import {region_1} from "./IF97_1.mjs"
import {region_2} from "./IF97_2.mjs"
import {region_3} from "./IF97_3.mjs"
import {region_5} from "./IF97_5.mjs"
import {VPT_3} from "./Aux_3.mjs"
import {RegPT} from "./Reg_pt.mjs"

"use strict"

export const propPT = (P, T) => {
  const NP=2
  const M = RegPT(P, T, NP)
  switch(M){
    case 1:{
      const state = region_1(P, T)
      return state
    }
    case 2 :{
      const state = region_2(P, T)
      return state
    }
    case 3 :{
      SP.MM = 3;
      if(VPT_3(SP)==-1){SP = null;return -1;}
      if(region_3(SP)==-1){SP = null;return -1;}
      break
    }
    case 5 :{
      SP.MM = 5;
      if(region_5(SP)==-1){SP = null;return -1;}
      break
    }
    default: {
      console.log("Out of IF97 applicable range.");
      throw new RangeEror("function propPT in propPT.mjs")
      return -1;
    }
  }
}

    
