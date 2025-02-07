
// HS curve on T=1073.15K

//s<8.50236101271032
const an = []
an[ 0]=   1.041008306267515
an[ 1]=   0.05690139476516404
an[ 2]=  -1.234131765471632
an[ 3]=  -124.55630723653583
an[ 4]=  -4015.9014320799683
an[ 5]=  -75173.9448312273
an[ 6]=  -947172.6362177163
an[ 7]=  -8511606.516722996
an[ 8]=  -56120097.665483385
an[ 9]=  -274540056.18835366
an[10]=  -995206595.1954986
an[11]=  -2636981704.4018393
an[12]=  -4958804452.349042
an[13]=  -6262252075.510178
an[14]=  -4758780396.099077
an[15]=  -1643801037.8139696

//s>=8.50236101271032

const bn = []

bn[ 0]=  1.0397795095325333
bn[ 1]=  0.0075201531121490296
bn[ 2]= -0.07301799677534918
bn[ 3]=  0.47181793125694443
bn[ 4]= -2.2861711302414567
bn[ 5]=  8.59423768241119
bn[ 6]= -22.491976546207045
bn[ 7]=  28.70547177692422



export const HS800C = (s) => {
  if(s<6.04 || s>11.92){
    throw Error("range error BTmax_HS.mjs")
  }
  const sb = 8.50236101271032
  const s_= 9
  const h_= 4000 
  const cs = 1

  const ds = s/s_ - cs
  if(s<sb){
    let sum=0
    for(let i=0;i<16;i++){
      sum += an[i] * Math.pow(ds, i) 
    }
    const h = sum * h_
    return h
  }
  else{
    let sum=0
    for(let i=0;i<8;i++){
      sum += bn[i] * Math.pow(ds, i) 
    }
    const h = sum * h_
    return h
  }
}
