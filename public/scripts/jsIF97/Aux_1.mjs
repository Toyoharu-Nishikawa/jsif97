/*******************************************************************/
/*  ZPH_1(P,H,t,v,g,u,s,Cp,w)                                      */
/*  (given P and H, calculate t and other properties in the region1*/
/*  (Newton method)                                                */
/*  ZPS_1(P,S,t,v,g,u,h,Cp,w)                                      */
/*  (given P and S, calculate t and other properties in the region1*/ 
/*******************************************************************/

/* Backward functions for region 1*/
/* iteration process */

"use strict" 
import {Tph1,Tps1} from "./IF97_BK1.mjs" 
import {region_1,Gibbs_1} from "./IF97_1.mjs" 

const R=0.461526


export const ZPH_1 = (P, h) => {
  const eps=1.0e-6

  let T = Tph1(P, h)
  let Flag=0

  for(let n=1;n<=10;n++){
    const state = region_1(P, T)
    const dlt = h - state.h;
    if (Math.abs(dlt) <= eps){
      Flag=1
      break
    } 
    T += dlt/state.cp;
  }
  if(Flag===0){
    throw new RangeError("ZPH_1 not converged")
  }  
  return state 
}

export ZPS_1 = (P, s) => {
  const eps=1.0e-9

  let T = Tps1(P, s)
  
  const pai=P/16.53;
  
  let Flag=0
  let Gibbs
  for(let n=1;n<=10;n++){
    const tau = 1386.0 / T
    Gibbs = Gibbs_1(pai,tau)
    s1= (tau*Gibbs.Gt - Gibbs.G0) * R
    dlt = s - s1;
    if (Math.abs(dlt) <= eps){
      Flag=1
      break
    } 
    const dsdt = -R*tau*tau*Gibbs.Gtt/T;
    T = T + dlt/dsdt;
  }
  if(Flag==0){
    throw new RangeError("ZPS_1 not converged")
  }
  
  const g  = Gibbs.G0*R*T
  const u  = (tau*Gibbs.Gt - pai*Gibbs.Gp) * R * T
  const v  = pai * Gibbs.Gp * R * T / (P*1e+3)
  const h  = tau * Gibbs.Gt * R * T
  const cp = -tau*tau * Gibbs.Gtt * R
  const tmp = Gibbs.Gp-tau*Gibbs.Gpt
  const tmp2 = tmp * tmp
  const w2 = Gibbs.Gp*Gibbs.Gp/tmp2/(tau*tau*Gibbs.Gtt)-Gibbs.Gpp)*R*T*1e+3
  const w  = w2 <0 ? 0 : Math.sqrt(w2)
 
  const state = {
    g: g,
    u: u,
    v: v,
    P: P,
    T: T,
    h: h
    cp: cp,
    w: w,
    MM: 1,
    x: 0,
  }
  
  return state
}
    
