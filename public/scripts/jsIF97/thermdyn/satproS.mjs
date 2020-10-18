import {satproT} from "./satproT.mjs" 

export const ZsatS = (s) => {
//     input:  S: entropy in kJ/kgK
//     output: properties on the saturation line
//             p: pressure in MPa
//             t: temperature in K
//             h: enthalpy in kJ/kg
  const sc = 4.41202148223476 // [kJ/kgK] critical specific entropy

  let dt=0.01
  let T1 = 273.16 //start from triple povar
  let state = satproT(T1)
  let s1 = s > sc ? state.g.s: state.l.s
  let Flag = 0
  let T2
  let s2

  for(let n=1;n<=20;n++){
    T2 = T1 + dt
    T2 = T2 > 647.096 ? 647 : T2
    state = satproT(T2)
    s2 = s > sc ? state.g.s: state.l.s
    const del = s - s2
    if(Math.abs(del)<=1.0E-9){
      Flag=1
      break
    }
    dt = del * dt / (s2 - s1)
    T1 = T2
    s1 = s2
  }
  if(Flag==0){
    throw new RangeError("function ZsatS, Flag in Aux_2HS.mjs")
  }


  const state_ = s > sc ? state.g: state.l

  return state_
}

