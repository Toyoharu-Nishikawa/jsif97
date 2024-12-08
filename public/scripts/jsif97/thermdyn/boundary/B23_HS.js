

//Table 2.75
  const Ia = [] // lengthen is 34
  const Ja = [] // lengthen is 34
  const na = [] // lengthen is 34

  Ia[ 1]= -12;   Ja[ 1]=  10;   na[ 1]=   0.629096260829810e-3; 
  Ia[ 2]= -10;   Ja[ 2]=   8;   na[ 2]=  -0.823453502583165e-3; 
  Ia[ 3]=  -8;   Ja[ 3]=   3;   na[ 3]=   0.515446951519474e-7; 
  Ia[ 4]=  -4;   Ja[ 4]=   4;   na[ 4]=  -0.117565945784945e+1; 
  Ia[ 5]=  -3;   Ja[ 5]=   3;   na[ 5]=   0.348519684726192e+1; 
  Ia[ 6]=  -2;   Ja[ 6]=  -6;   na[ 6]=  -0.507837382408313e-11; 
  Ia[ 7]=  -2;   Ja[ 7]=   2;   na[ 7]=  -0.284637670005479e+1; 
  Ia[ 8]=  -2;   Ja[ 8]=   3;   na[ 8]=  -0.236092263939673e+1; 
  Ia[ 9]=  -2;   Ja[ 9]=   4;   na[ 9]=   0.601492324973779e+1; 
  Ia[10]=   0;   Ja[10]=   0;   na[10]=   0.148039650824546e+1; 
  Ia[11]=   1;   Ja[11]=  -3;   na[11]=   0.360075182221907e-3; 
  Ia[12]=   1;   Ja[12]=  -2;   na[12]=  -0.126700045009952e-1; 
  Ia[13]=   1;   Ja[13]=  10;   na[13]=  -0.122184332521413e+7; 
  Ia[14]=   3;   Ja[14]=  -2;   na[14]=   0.149276502463272   ; 
  Ia[15]=   3;   Ja[15]=  -1;   na[15]=   0.698733471798484   ; 
  Ia[16]=   5;   Ja[16]=  -5;   na[16]=  -0.252207040114321e-1; 
  Ia[17]=   6;   Ja[17]=  -6;   na[17]=   0.147151930985213e-1; 
  Ia[18]=   6;   Ja[18]=  -3;   na[18]=  -0.108618917681849e+1; 
  Ia[19]=   8;   Ja[19]=  -8;   na[19]=  -0.936875039816322e-3; 
  Ia[20]=   8;   Ja[20]=  -2;   na[20]=   0.819877897570217e+2; 
  Ia[21]=   8;   Ja[21]=  -1;   na[21]=  -0.182041861521835e+3; 
  Ia[22]=  12;   Ja[22]= -12;   na[22]=   0.261907376402688e-5; 
  Ia[23]=  12;   Ja[23]=  -1;   na[23]=  -0.291626417025961e+5; 
  Ia[24]=  14;   Ja[24]= -12;   na[24]=   0.140660774926165e-4; 
  Ia[25]=  14;   Ja[25]=   1;   na[25]=   0.783237062349385e+7; 
 

export const TB23 = (h, s) => {

  const T_ = 900 //[K] 
  const h_ = 3000 //[kJ/kg] 
  const s_ = 5.3 //[kJ/(kgK)] 

  const etaA = 0.727 
  const sigmaB = 0.864 

  const etaPow = []
  const sigmaPow = []

  const eta = h/h_
  const sigma = s/s_

  const eta1 = eta - etaA 
  const sigma1 = sigma - sigmaB

  for(let i=1;i<=25;i++){
    etaPow[i] = Math.pow(eta1, Ia[i])
    sigmaPow[i] = Math.pow(sigma1, Ja[i])
  }

  let theta = 0
  for(let i=1;i<=25;i++){
    theta += na[i] * etaPow[i] * sigmaPow[i] 
  }
  const T = theta * T_

  return T 
}


