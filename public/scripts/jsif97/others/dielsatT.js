//      program dielsatT
//
//c  Link information
//c      dielsatT.for (this file)
//c      physdisp.for
//c      dielec.for
//c    * aux_3.for
//c    * IF97_1.for
//c    * IF97_2.for
//c    * IF97_3.for
//c    * IF97_Sat.for
//c    * IF97_B23.for
//
//c    This program calls IF97 subroutines in the files marked with *.
//
//c     P:      pressure in MPa
//c     T:      temperature in K
//c     epsiron: static dielectric constant
//c     v:      specific volume in m^3/kg
//c     rho:    density in kg/m^3

import {PsatT,TsatP} from '../thermdyn/IF97_Sat.js'
import {Vsatl_3, Vsatg_3} from "../thermdyn/Aux_3.js"
import {region_3} from '../thermdyn/IF97_3.js'
import {region_1} from "../thermdyn/IF97_1.js"
import {region_2} from "../thermdyn/IF97_2.js"
import {dielec} from "./dielec.js"

export const dielsatT = (T) => {
  if(T < 273.15){
    throw new RangeError("function dielsatp T<273.15 in dielsatT.js")
  }
  if(T > 647.096){
    throw new RangeError("function dielsatp T>647.096 in dielsatT.js")
  }
  
  const P =  PsatT(T)
  let state1
  let state2
  if (T <= 623.15){
    state1 = region_1(P, T)
    state2 = region_2(P, T)
  }
  else{
    const vl = Vsatl_3(T)
    const vg = Vsatg_3(T)
    stete1 = region_3(vl, T)
    state2 = region_3(vg, T)
  } 
  const v1 = state1.v
  const v2 = state2.v

  const rho1 = 1 / v1
  const rho2 = 1 / v2

  const epsiron1 = dielec(T, rho1)
  const epsiron2 = dielec(T, rho2)

  const epsiron = {
    l: epsiron1,
    g: epsiron2,
  }

  return epsiron


}
