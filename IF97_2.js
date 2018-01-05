// region2
// calculate state in region2 by using pressure and temperature

"use strict"
export function region_2(SP){
  var P;
  var T;
  var pai;
  var tau;
  var R;
  var w2;
  var G0;
  var Gp;
  var Gpp
  var Gt;
  var Gtt;
  var Gpt;
  var Gibbs;

  P = SP.P;
  T = SP.T;

  pai = P;
  
  if(P<=0.0 || T<=0.0){
    SP = null;
    return -1;
  }
  else{
    tau = 540.0/T;
  }
  R = 0.461526;
  Gibbs = {};
  if(Gibbs_2(pai, tau, Gibbs)==-1){
    SP =null;
    return -1;
  }

  G0 =Gibbs.G0;
  Gp =Gibbs.Gp;
  Gpp=Gibbs.Gpp;
  Gt =Gibbs.Gt;
  Gtt=Gibbs.Gtt;
  Gpt=Gibbs.Gpt;

  SP.g = G0 * R * T;
  SP.u = (tau * Gt - pai * Gp) * R * T;
  SP.v = pai * Gp * R * T / (P*1.0e3);
  SP.h = tau * Gt * R * T;
  SP.s = (tau * Gt - G0) * R;
  SP.cp = -tau * tau * Gtt * R;
  w2 = Gp * Gp / ((Gp - tau * Gpt)*(Gp - tau * Gpt)/(tau * tau * Gtt)-Gpp)* R * T * 1.0e3;
  if(w2 <0.0){ w2=0.0;}
  SP.w = Math.sqrt(w2);
  return 1; 
}

function Gibbs_2(pai,tau,Gibbs){
  var i;
  var J = [];
  var an = [];
  var II = [];
  var JJ = [];
  var bn = [];
  var tn;

  var G0;
  var Gp;
  var Gpp
  var Gt;
  var Gtt;
  var Gpt;

  J[ 1]=   0  ;  an[ 1]=  -0.96927686500217e+1  ;
  J[ 2]=   1  ;  an[ 2]=   0.10086655968018e+2  ;
  J[ 3]=  -5  ;  an[ 3]=  -0.56087911283020e-2  ;
  J[ 4]=  -4  ;  an[ 4]=   0.71452738081455e-1  ;
  J[ 5]=  -3  ;  an[ 5]=  -0.40710498223928e+0  ;
  J[ 6]=  -2  ;  an[ 6]=   0.14240819171444e+1  ;
  J[ 7]=  -1  ;  an[ 7]=  -0.43839511319450e+1  ;
  J[ 8]=   2  ;  an[ 8]=  -0.28408632460772e+0  ;
  J[ 9]=   3  ;  an[ 9]=   0.21268463753307e-1  ;
  
  II[ 1]=   1  ;  JJ[ 1]=   0  ;  bn[ 1]=  -0.17731742473213e-2  ;
  II[ 2]=   1  ;  JJ[ 2]=   1  ;  bn[ 2]=  -0.17834862292358e-1  ;
  II[ 3]=   1  ;  JJ[ 3]=   2  ;  bn[ 3]=  -0.45996013696365e-1  ;
  II[ 4]=   1  ;  JJ[ 4]=   3  ;  bn[ 4]=  -0.57581259083432e-1  ;
  II[ 5]=   1  ;  JJ[ 5]=   6  ;  bn[ 5]=  -0.50325278727930e-1  ;
  II[ 6]=   2  ;  JJ[ 6]=   1  ;  bn[ 6]=  -0.33032641670203e-4  ;
  II[ 7]=   2  ;  JJ[ 7]=   2  ;  bn[ 7]=  -0.18948987516315e-3  ;
  II[ 8]=   2  ;  JJ[ 8]=   4  ;  bn[ 8]=  -0.39392777243355e-2  ;
  II[ 9]=   2  ;  JJ[ 9]=   7  ;  bn[ 9]=  -0.43797295650573e-1  ;
  II[10]=   2  ;  JJ[10]=  36  ;  bn[10]=  -0.26674547914087e-4  ;
  II[11]=   3  ;  JJ[11]=   0  ;  bn[11]=   0.20481737692309e-7  ;
  II[12]=   3  ;  JJ[12]=   1  ;  bn[12]=   0.43870667284435e-6  ;
  II[13]=   3  ;  JJ[13]=   3  ;  bn[13]=  -0.32277677238570e-4  ;
  II[14]=   3  ;  JJ[14]=   6  ;  bn[14]=  -0.15033924542148e-2  ;
  II[15]=   3  ;  JJ[15]=  35  ;  bn[15]=  -0.40668253562649e-1  ;
  II[16]=   4  ;  JJ[16]=   1  ;  bn[16]=  -0.78847309559367e-9  ;
  II[17]=   4  ;  JJ[17]=   2  ;  bn[17]=   0.12790717852285e-7  ;
  II[18]=   4  ;  JJ[18]=   3  ;  bn[18]=   0.48225372718507e-6  ;
  II[19]=   5  ;  JJ[19]=   7  ;  bn[19]=   0.22922076337661e-5  ;
  II[20]=   6  ;  JJ[20]=   3  ;  bn[20]=  -0.16714766451061e-10  ;
  II[21]=   6  ;  JJ[21]=  16  ;  bn[21]=  -0.21171472321355e-2  ;
  II[22]=   6  ;  JJ[22]=  35  ;  bn[22]=  -0.23895741934104e+2  ;
  II[23]=   7  ;  JJ[23]=   0  ;  bn[23]=  -0.59059564324270e-17  ;
  II[24]=   7  ;  JJ[24]=  11  ;  bn[24]=  -0.12621808899101e-5  ;
  II[25]=   7  ;  JJ[25]=  25  ;  bn[25]=  -0.38946842435739e-1  ;
  II[26]=   8  ;  JJ[26]=   8  ;  bn[26]=   0.11256211360459e-10  ;
  II[27]=   8  ;  JJ[27]=  36  ;  bn[27]=  -0.82311340897998e+1  ;
  II[28]=   9  ;  JJ[28]=  13  ;  bn[28]=   0.19809712802088e-7  ;
  II[29]=  10  ;  JJ[29]=   4  ;  bn[29]=   0.10406965210174e-18  ;
  II[30]=  10  ;  JJ[30]=  10  ;  bn[30]=  -0.10234747095929e-12  ;
  II[31]=  10  ;  JJ[31]=  14  ;  bn[31]=  -0.10018179379511e-8  ;
  II[32]=  16  ;  JJ[32]=  29  ;  bn[32]=  -0.80882908646985e-10  ;
  II[33]=  16  ;  JJ[33]=  50  ;  bn[33]=   0.10693031879409e+0  ;
  II[34]=  18  ;  JJ[34]=  57  ;  bn[34]=  -0.33662250574171e+0  ;
  II[35]=  20  ;  JJ[35]=  20  ;  bn[35]=   0.89185845355421e-24  ;
  II[36]=  20  ;  JJ[36]=  35  ;  bn[36]=   0.30629316876232e-12  ;
  II[37]=  20  ;  JJ[37]=  48  ;  bn[37]=  -0.42002467698208e-5  ;
  II[38]=  21  ;  JJ[38]=  21  ;  bn[38]=  -0.59056029685639e-25  ;
  II[39]=  22  ;  JJ[39]=  53  ;  bn[39]=   0.37826947613457e-5  ;
  II[40]=  23  ;  JJ[40]=  39  ;  bn[40]=  -0.12768608934681e-14  ;
  II[41]=  24  ;  JJ[41]=  26  ;  bn[41]=   0.73087610595061e-28  ;
  II[42]=  24  ;  JJ[42]=  40  ;  bn[42]=   0.55414715350778e-16  ;
  II[43]=  24  ;  JJ[43]=  58  ;  bn[43]=  -0.94369707241210e-6  ;
 

  tn = tau - 0.5;
  
  G0 = 0.0;
  Gp = 0.0;
  Gpp= 0.0;
  Gt = 0.0;
  Gtt= 0.0;
  Gpt= 0.0;

  /*residual part*/
  for(i=1;i<=43;i++){
    G0 = G0 + bn[i]*Math.pow(pai,II[i])*Math.pow(tn,JJ[i]);
    Gp = Gp + bn[i]*II[i]*Math.pow(pai,II[i]-1)*Math.pow(tn,JJ[i]);
  }
  for(i=6;i<=43;i++){
    Gpp= Gpp + bn[i]*II[i]*(II[i]-1)*Math.pow(pai,II[i]-2)*Math.pow(tn,JJ[i]);
  }
  for(i=2;i<=43;i++){      
    Gt = Gt + bn[i]*Math.pow(pai,II[i])*JJ[i]*Math.pow(tn,JJ[i]-1);
    Gpt= Gpt+ bn[i]*II[i]*Math.pow(pai,II[i]-1)*JJ[i]*Math.pow(tn,JJ[i]-1);
  }      
  for(i=3;i<=43;i++){      
    Gtt= Gtt+ bn[i]*Math.pow(pai,II[i])*JJ[i]*(JJ[i]-1)*Math.pow(tn,JJ[i]-2);
  }

  /*add the second term of ideal gas part*/
  for(i=1;i<=9;i++){      
    G0 = G0 + an[i]*Math.pow(tau,J[i]);
    Gt = Gt + an[i]*J[i]*Math.pow(tau,J[i]-1);
    Gtt= Gtt+ an[i]*J[i]*(J[i]-1)*Math.pow(tau,J[i]-2);
  }

  /*finally add first term of ideal gas part*/
  if(pai<=0.0){
    Gibbs = null;
    return -1;
  }
  else{
    G0 = G0 + Math.log(pai);
    Gp = Gp + 1.0/pai;
    Gpp= Gpp- 1.0/(pai*pai);
  }
  
  Gibbs.G0 =G0;
  Gibbs.Gp =Gp;
  Gibbs.Gpp=Gpp;
  Gibbs.Gt =Gt;
  Gibbs.Gtt=Gtt;
  Gibbs.Gpt=Gpt;

  return 1;
}