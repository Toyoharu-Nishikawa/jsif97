/*******************************************************************/
/*  Tph1(P,h,T)                                                    */
/*  Tps1(P,s,T)                                                    */
/*******************************************************************/

/* backward function of region 1 */
/* based on Eq.(11) of IAPWS-IF97*/
"use strict"

  const II = []
  const JJ = []
  const an = []
  
  const I = []
  const J = []
  const bn = []
  const Hn= 2500.0

  II[ 1]=  0  ;  JJ[ 1]=   0  ;  an[ 1]=  -0.23872489924521e+3  ;
  II[ 2]=  0  ;  JJ[ 2]=   1  ;  an[ 2]=   0.40421188637945e+3  ;
  II[ 3]=  0  ;  JJ[ 3]=   2  ;  an[ 3]=   0.11349746881718e+3  ;
  II[ 4]=  0  ;  JJ[ 4]=   6  ;  an[ 4]=  -0.58457616048039e+1  ;
  II[ 5]=  0  ;  JJ[ 5]=  22  ;  an[ 5]=  -0.15285482413140e-3  ;
  II[ 6]=  0  ;  JJ[ 6]=  32  ;  an[ 6]=  -0.10866707695377e-5  ;
  II[ 7]=  1  ;  JJ[ 7]=   0  ;  an[ 7]=  -0.13391744872602e+2  ;
  II[ 8]=  1  ;  JJ[ 8]=   1  ;  an[ 8]=   0.43211039183559e+2  ;
  II[ 9]=  1  ;  JJ[ 9]=   2  ;  an[ 9]=  -0.54010067170506e+2  ;
  II[10]=  1  ;  JJ[10]=   3  ;  an[10]=   0.30535892203916e+2  ;
  II[11]=  1  ;  JJ[11]=   4  ;  an[11]=  -0.65964749423638e+1  ;
  II[12]=  1  ;  JJ[12]=  10  ;  an[12]=   0.93965400878363e-2  ;
  II[13]=  1  ;  JJ[13]=  32  ;  an[13]=   0.11573647505340e-6  ;
  II[14]=  2  ;  JJ[14]=  10  ;  an[14]=  -0.25858641282073e-4  ;
  II[15]=  2  ;  JJ[15]=  32  ;  an[15]=  -0.40644363084799e-8  ;
  II[16]=  3  ;  JJ[16]=  10  ;  an[16]=   0.66456186191635e-7  ;
  II[17]=  3  ;  JJ[17]=  32  ;  an[17]=   0.80670734103027e-10  ;
  II[18]=  4  ;  JJ[18]=  32  ;  an[18]=  -0.93477771213947e-12  ;
  II[19]=  5  ;  JJ[19]=  32  ;  an[19]=   0.58265442020601e-14  ;
  II[20]=  6  ;  JJ[20]=  32  ;  an[20]=  -0.15020185953503e-16  ;

  I[ 1]=  0  ;  J[ 1]=   0  ;  bn[ 1]=   0.17478268058307e+3  ;
  I[ 2]=  0  ;  J[ 2]=   1  ;  bn[ 2]=   0.34806930892873e+2  ;
  I[ 3]=  0  ;  J[ 3]=   2  ;  bn[ 3]=   0.65292584978455e+1  ;
  I[ 4]=  0  ;  J[ 4]=   3  ;  bn[ 4]=   0.33039981775489e+0  ;
  I[ 5]=  0  ;  J[ 5]=  11  ;  bn[ 5]=  -0.19281382923196e-6  ;
  I[ 6]=  0  ;  J[ 6]=  31  ;  bn[ 6]=  -0.24909197244573e-22  ;
  I[ 7]=  1  ;  J[ 7]=   0  ;  bn[ 7]=  -0.26107636489332e+0  ;
  I[ 8]=  1  ;  J[ 8]=   1  ;  bn[ 8]=   0.22592965981586e+0  ;
  I[ 9]=  1  ;  J[ 9]=   2  ;  bn[ 9]=  -0.64256463395226e-1  ;
  I[10]=  1  ;  J[10]=   3  ;  bn[10]=   0.78876289270526e-2  ;
  I[11]=  1  ;  J[11]=  12  ;  bn[11]=   0.35672110607366e-9  ;
  I[12]=  1  ;  J[12]=  31  ;  bn[12]=   0.17332496994895e-23  ;
  I[13]=  2  ;  J[13]=   0  ;  bn[13]=   0.56608900654837e-3  ;
  I[14]=  2  ;  J[14]=   1  ;  bn[14]=  -0.32635483139717e-3  ;
  I[15]=  2  ;  J[15]=   2  ;  bn[15]=   0.44778286690632e-4  ;
  I[16]=  2  ;  J[16]=   9  ;  bn[16]=  -0.51322156908507e-9  ;
  I[17]=  2  ;  J[17]=  31  ;  bn[17]=  -0.42522657042207e-25  ;
  I[18]=  3  ;  J[18]=  10  ;  bn[18]=   0.26400441360689e-12  ;
  I[19]=  3  ;  J[19]=  32  ;  bn[19]=   0.78124600459723e-28  ;
  I[20]=  4  ;  J[20]=  32  ;  bn[20]=  -0.30732199903668e-30  ;



export const Tph1 = (P, h) => {
  const eta = h / Hn
  const tau = eta + 1

  let T = 0.0

  for(let i=1;i<=20;i++){
    T +=  an[i]*Math.pow(P,II[i])*Math.pow(tau,JJ[i])
  }
  
  return T 
}

export const Tps1 = (P, s) => {
  const stau = s+2.0

  let T = 0.0

  for(let i=1;i<=20;i++){
    T += bn[i]*Math.pow(P,I[i])*Math.pow(stau,J[i]);
  }
  
  return T 
}
    