import {ver} from "./version.mjs"
import {propPT} from "./propPT.mjs"
import {propPH} from "./propPH.mjs"
import {propPS} from "./propPS.mjs"
import {propHS} from "./propHS.mjs"
import {expisPT} from "./expisPT.mjs"
import {transPT} from "./transPT.mjs"
import {transatP} from "./transatP.mjs"
import {satproP} from "./satproP.mjs"
import {satproT} from "./satproT.mjs"

//version()

//pt2all(P, T) 
//pt2g(P, T) 
//pt2u(P, T)
//pt2v(P, T)
//pt2h(P, T)
//pt2s(P, T)
//pt2w(P, T) 
//pt2MM(P, T) 
//pt2cp(p, t)
//pt2cv(p, t)
//pt2k(P, T)
//pt2mu(P, T)

//ph2all(P, h)
//ph2g(P, h)
//ph2u(P, h)
//ph2v(P, h)
//ph2t(P, h)
//ph2s(P, h)
//ph2w(P, h)
//ph2x(P, h)
//ph2MM(P, h)
//ph2mu(P, h, n)
//ph2cp(P, h)
//ph2cv(P, h)
//ph2k(P, h)

//ps2all(P, s)
//ps2g(P, s)
//ps2u(P, s)
//ps2v(P, s)
//ps2t(P, s)
//ps2h(P, s)
//ps2w(P, s)
//ps2x(P, s)
//ps2k(P, s)
//ps2MM(P, s)

//hs2all(h, s)
//hs2g(h, s)
//hs2u(h, s)
//hs2p(h, s)
//hs2t(h, s)
//hs2v(h, s)
//hs2w(h, s)
//hs2x(h, s)

//SATp2t(P)
//SATt2p(T)

//SATp2all(P)
//SATt2all(T)

"use strict"

//version
export const version = ()=> {
  //version
  return ver
}

// pt
export const pt2all = (P, T) => {
  const state = propPT(P, T)
  return state
}

export const pt2g = (P, T) => { 
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // g:Gibbs free enagy [kJ/kg]
  
  const state = pt2all(P, T) 
  const g = state.g
  
  return g
}

export const pt2u = (P, T) => {
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // u:internal energy [kJ/kg]
  
  const state = pt2all(P, T) 
  const u = state.u
  
  return u
}

export const pt2v = (P, T) => {
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // v:specific volume [m^3/kg]

  const state = pt2all(P, T) 
  const v = state.v
  
  return v
}

export const pt2h = (P, T) => {
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // h:specific enthalpy [kJ/kg]
  
  const state = pt2all(P, T) 
  const h = state.h
  
  return h
}

export const pt2s = (P, T) => {
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // s:specific entropy [kJ/kgK]
  
  const state = pt2all(P, T)
  const s = state.s
  
  return s
}
  
export const pt2w = (P, T) => { 
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // w: speed of sound in m/s
  
  const state = pt2all(P, T)
  const w = state.w

  return w
}
  
export const pt2MM = (P, T) => { 
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // MM: Region
  
  const state = pt2all(P, T)
  const MM = state.MM

  return MM
}
  
export const pt2cp = (P, T) => {
  // input
  // p:puressure [MPa] , t:temperature [K]
  
  // output
  // cp: isobaric spcific heat in kJ/kgK
  
  const state = pt2all(P, T)
  const cp = state.cp

  return cp 
}

export const pt2expis = (P, T) => {

  const expis = expisPT(P, T)

  return expis
}
  
export const pt2cv = (P, T) => {
  // input
  // p:puressure [MPa] , t:temperature [K]
  
  // output
  // cv: isobaric spcific heat in kJ/kgK
  
  const expis = expisPT(P, T)
  const cv = expis.cv
  
  return cv
}
  
export const pt2k = (P, T) => {
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // kappa: isentropic exponent [-]

  const state = pt2all(P, T)
  const k = state.k
  
  return k 
}

export const pt2trans = (P, T) => {

  const trans = transPT(P, T)

  return trans 
}

export const  pt2mu = (P, T) => {
  // input
  // p:puressure [MPa] , t:temperature [K]
  
  // output ( sturation line is included in gas regeion)
  // mu:viscosity [Pa-s]
  const trans = pt2trans(P, T)
  const mu = trans.mu
  
  return mu  
}

export const  pt2lambda = (P, T) => {
  // input
  // p:puressure [MPa] , t:temperature [K]
  
  // output ( sturation line is included in gas regeion)
  // lambda:thermal conductivity [W /(m-K)]
  const trans = pt2trans(P, T)
  const lambda = trans.lambda
  
  return lambda  
}

export const  pt2nu = (P, T) => {
  // input
  // p:puressure [MPa] , t:temperature [K]
  
  // output ( sturation line is included in gas regeion)
  // nu:Nusselt number  [-]
  const trans = pt2trans(P, T)
  const nu = trans.nu
  
  return nu  
}

export const  pt2Pr = (P, T) => {
  // input
  // p:puressure [MPa] , t:temperature [K]
  
  // output ( sturation line is included in gas regeion)
  // Pr:Prandtl number [-]
  const trans = pt2trans(P, T)
  const Pr = trans.Pr
  
  return Pr  
}


//ph
export const ph2all = (P, h) => {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
 
  const state = propPH(P, h)

  return state
}

export const ph2g = (P, h) => {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // g:gibbs specific energy [kJ/kg]
  
  const state = propPH(P, h)
  const g = state.g
  
  return g
}
  
export const ph2u = (P, h) => {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // u:internal energy [m^3/kg]

  const state = propPH(P, h)
  const u = state.u
  
  return u
}
  
export const ph2v = (P, h) => {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // v:specific volume [m^3/kg]
  
  const state = propPH(P, h)
  const v = state.v
  
  return v
}
  
export const ph2t = (P, h) => {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // t:temperature [K]
  
  const state = propPH(P, h)
  const T = state.T
  
  return T
}
  
export const ph2s = (P, h) => {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // s:specific entropy [kJ/kgK]
  
  const state = propPH(P, h)
  const s = state.s
  
  return s
}
  
export const ph2w = (P, h) => {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // w:speed of sound [m/s]
  
  const state = propPH(P, h)
  const w = state.w

  return w
}
  
export const ph2x = (P, h) => {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // x:dryness [-]
  
  const state = propPH(P, h)
  const x = state.x
  
  return x
}
  
export const ph2MM = (P, h) => {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // MM:region [-]
  
  const state = propPH(P, h)
  const MM = state.MM
  
  return MM
}
  
export const ph2mu = (P, h, n) => {
  // input
  // p:puressure [MPa] , h:specific enthalpy [kJ/kg]
  // n:0:harmonic mean, 1:weighted mean, 2:gas viscosity, 3:liquid viscosity,else: harmonic mean
  
  // output
  // mu:viscosity [Pa-s]
 
  const state = ph2all(P, h)
  const T = state.T
  const MM = state.MM
  if(MM != 4) {
    const trans = pt2trans(P, T)
    const mu = trans.mu
    return mu
  }
  else {
    const x = state.x
    const {l, g} = transatP(P)
    switch(n){
      case 0 : {
        const mu = 1 / (x / g.mu + (1.0 - x) / l.mu)
        return mu
      }
      case 1 : {
        const mu = g.mu * x + l.mu * (1.0 - x)
      } 
      case 2 : {
        const mu = g.mu
        return mu
      }
      case 3 : {
        const mu = l.mu
        return mu
      }
      default : {
        const  mu = 1 / (x / g.mu + (1.0 - x) / l.mu)
        return mu
      }
    }
  }
}
  
export const ph2cp = (P, h) => {
  // input
  // p:puressure [MPa] , h:specific enthalpy [kJ/kg]
  
  // output
  // cp:heat capacity [kJ/(kg-K)]
  
  const state = ph2all(P, h) 
  const T = state.T
  const MM = state.MM
  if(MM != 4) {
    //const expis = pt2expis(P, T)
    //if (expisPT(SP) == -1) { SP = null; return -1; }
    const cp = state.cp
  }
  else {
    const cp = -1
    return cp 
  }
}
  
export const ph2cv = (P, h) => {
  // input
  // p:puressure [MPa] , h:specific enthalpy [kJ/kg]
  
  // output
  // cv:heat capacity [kJ/(kg-K)]
  
  const state = ph2all(P, h)  
  const T = state.T
  const MM = state.MM
  if (MM != 4) {
    const expis = pt2expis(P, T)
    const cv = expis.cv
    return cv
  }
  else {
    const cv = -1
    return cv 
  }
}
  
export const ph2k = (P, h) => {
  // input
  // p:puressure [MPa] , h:specific enthalpy [kJ/kg]
  
  // output
  // kappa: isentropic exponent [-]
  
  
  const state = ph2all(P, h) 
  const k = state.k

  return k
//  const del = 1.0e-6
//  const state = ph2all(P, h) 
//  const MM = state.MM 
//  const T = state.T 
//  if (MM != 4) {
//    const expis = expisPT(P, T)
//    const kappa = expis.kappa;
//    return kappa
//  }
//  else {
//    const P1 = P + del
//    const state1 = ps2all(P1, s)
//    const v = state.v
//    const v1 = state1.v
//    const  kappa = -Math.log(P1 / P) / Math.log(v1 / v)
//    return kappa
//  }
}
  
//ps
export const ps2all = (P, s) => {
  const state = propPS(P, s)
  return state
}

export const ps2g = (P, s) => {
  // input
  // P:pressure [Pa], s:specific entropy [kJ/kgK]
  
  // output
  // g:Gibbs free enagy [kJ/kg]
  
  const state = ps2all(P, s)  
  const g = state.g
  
  return g
}
  
export const ps2u = (P, s) => {
  // input
  // P:pressure [Pa], s:specific entropy [kJ/kgK]
  
  // output
  // u:internal enagy [kJ/kg]
  
  const state = ps2all(P, s)  
  const u = state.u
  
  return u
}
  
export const ps2v = (P, s) => {
  // input
  // P:pressure [Pa], s:specific entropy [kJ/kgK]
  
  // output
  // v:specific volume [m^3/kg]
  
  const state = ps2all(P, s)  
  const v = state.v
  
  return v
}
  
export const ps2t = (P, s) => {
  // input
  // P:pressure [Pa], s:specific entropy [kJ/kgK]
  
  // output
  // t:temperature [K]
  
  const state = ps2all(P, s)  
  const T = state.T

  return T 
}
  
export const ps2h = (P, s) => {
  // input
  // P:pressure [Pa], s:specific entropy [kJ/kgK]
  
  // output
  // h:specific enthalpy [kJ/kg]

  const state = ps2all(P, s)  
  const h = state.h
  
  return h;
}
  
export const ps2w = (P, s) => {
  // input
  // P:pressure [MPa], s:specific entropy [kJ/kgK]
  
  // output
  // w:speed of sound [m/s]

  const state = ps2all(P, s)  
  const w = state.w
  
  return w
}
  
export const ps2x = (P, s) => {
  // input
  // P:pressure [MPa], s:specific entropy [kJ/kgK]
  
  // output
  // x:dryness [-]

  const state = ps2all(P, s)  
  const x = state.x
  
  return x
}
  
export const ps2k = (P, s) => {
  // input
  // P:pressure [MPa], s:specific entropy [kJ/kgK]
  
  // output
  // kappa: isentropic exponent [-]
  
  const state = ps2all(P, s)  
  const k = state.k

  return k

}
  
export const ps2MM = (P, s) => {
  // input
  // P:pressure [MPa], s:specific entropy [kJ/kgK]
  
  // output
  // MM:Region [-]
  
  const state = ps2all(P, s)  
  const MM = state.MM

  return MM
}
  
//hs
export const hs2all = (h, s) => {
  const state = propHS(h, s)
  return state
}

export const hs2g = (h, s) => {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // g:gibbs free energy [kJ/kg]
  
  const state = hs2all(h, s)
  const g = state.g

  return g
}
  
export const hs2u = (h, s) => {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // u:internal energy [kJ/kg]
  
  const state = hs2all(h, s)
  const u = state.u
  
  return u
}
  
export const hs2p = (h, s) => {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // P:pressure [MPa]
  
  const state = hs2all(h, s)
  const p = state.p
  
  return p
}
  
export const hs2t = (h, s) => {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // t:temperature [K]

  const state = hs2all(h, s)
  const T = state.T
  
  return T 
}
  
export const hs2v = (h, s) => {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // v:specific volume [m^3/kg]
  
  const state = hs2all(h, s)
  const v = state.v
  
  return v
}
  
export const hs2w = (h, s) => {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // w:speed of sound [m/s]
  
  const state = hs2all(h, s)
  const w = state.w
  
  return w
}
  
export const hs2x = (h, s) => {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // w:speed of sound [m/s]

  const state = hs2all(h, s)
  const x = state.x
  
  return x
}
  
//SAT
export const SATp2t = (P) => {
  // input
  // p:pressure [MPa]
  
  // output
  // t:temperature [K]
  
  const {l, g} = satproP(P)
  const T = l.T
  
  return T 
}
  
export const SATt2p = (T) => {
  // input
  // t:temperature [K]
  
  // output
  // p:pressure [MPa]
  
  
  const {l, g} = satproT(T)
  P = l.P
  
  return P 
}
  
//SATlp
export const SATp2all = (P) => {
  // input
  // p:pressure [MPa]
 
  // output
  //  l: { liquid
  //    g:Gibbs free energy,
  //    u:internal energy,
  //    T:temperature,
  //    h:specific enthalpy,
  //    s:specific entropy,
  //    v:specific volume, 
  //    cp:specific heat ratio, 
  //   },
  //  g: { gas 
  //    g:Gibbs free energy,
  //    u:internal energy,
  //    T:temperature,
  //    h:specific enthalpy,
  //    s:specific entropy,
  //    v:specific volume, 
  //    cp:specific heat ratio, 
  //   }

  const state= satproP(P)
  return state
}
 
  
  
//SATlt
export const SATt2all = (T) => {
  // input
  // T:temperature [K]
 
  // output
  //  l: { liquid
  //    g:Gibbs free energy,
  //    u:internal energy,
  //    T:temperature,
  //    h:specific enthalpy,
  //    s:specific entropy,
  //    v:specific volume, 
  //    cp:specific heat ratio, 
  //   },
  //  g: { gas 
  //    g:Gibbs free energy,
  //    u:internal energy,
  //    T:temperature,
  //    h:specific enthalpy,
  //    s:specific entropy,
  //    v:specific volume, 
  //    cp:specific heat ratio, 
  //   }

  const state= satproT(T)
  return state
}

