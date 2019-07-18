/*******************************************************************/
/*  Tph2(P,h,T)                                                    */
/*  Tps2(P,s,T)                                                    */
/*  Tph2A(P,h,T)                                                   */
/*  Tph2B(P,h,T)                                                   */
/*  Tph2C(P,h,T)                                                   */
/*  Tps2A(P,h,T)                                                   */
/*  Tps2B(P,h,T)                                                   */
/*  Tps2C(P,h,T)                                                   */
/*******************************************************************/

/* backward function of region 2 */
/* based on Eqs.(22), (23), and (24) of IAPWS-IF97 */
"use strict"

  const IA = []
  const JA = []
  const an = []
  
  const Hn= 2000.0
  IA[ 1]=  0  ;  JA[ 1]=   0  ;  an[ 1]=   0.10898952318288e+4  ;
  IA[ 2]=  0  ;  JA[ 2]=   1  ;  an[ 2]=   0.84951654495535e+3  ;
  IA[ 3]=  0  ;  JA[ 3]=   2  ;  an[ 3]=  -0.10781748091826e+3  ;
  IA[ 4]=  0  ;  JA[ 4]=   3  ;  an[ 4]=   0.33153654801263e+2  ;
  IA[ 5]=  0  ;  JA[ 5]=   7  ;  an[ 5]=  -0.74232016790248e+1  ;
  IA[ 6]=  0  ;  JA[ 6]=  20  ;  an[ 6]=   0.11765048724356e+2  ;
  IA[ 7]=  1  ;  JA[ 7]=   0  ;  an[ 7]=   0.18445749355790e+1  ;
  IA[ 8]=  1  ;  JA[ 8]=   1  ;  an[ 8]=  -0.41792700549624e+1  ;
  IA[ 9]=  1  ;  JA[ 9]=   2  ;  an[ 9]=   0.62478196935812e+1  ;
  IA[10]=  1  ;  JA[10]=   3  ;  an[10]=  -0.17344563108114e+2  ;
  IA[11]=  1  ;  JA[11]=   7  ;  an[11]=  -0.20058176862096e+3  ;
  IA[12]=  1  ;  JA[12]=   9  ;  an[12]=   0.27196065473796e+3  ;
  IA[13]=  1  ;  JA[13]=  11  ;  an[13]=  -0.45511318285818e+3  ;
  IA[14]=  1  ;  JA[14]=  18  ;  an[14]=   0.30919688604755e+4  ;
  IA[15]=  1  ;  JA[15]=  44  ;  an[15]=   0.25226640357872e+6  ;
  IA[16]=  2  ;  JA[16]=   0  ;  an[16]=  -0.61707422868339e-2  ;
  IA[17]=  2  ;  JA[17]=   2  ;  an[17]=  -0.31078046629583e+0  ;
  IA[18]=  2  ;  JA[18]=   7  ;  an[18]=   0.11670873077107e+2  ;
  IA[19]=  2  ;  JA[19]=  36  ;  an[19]=   0.12812798404046e+9  ;
  IA[20]=  2  ;  JA[20]=  38  ;  an[20]=  -0.98554909623276e+9  ;
  IA[21]=  2  ;  JA[21]=  40  ;  an[21]=   0.28224546973002e+10 ;
  IA[22]=  2  ;  JA[22]=  42  ;  an[22]=  -0.35948971410703e+10 ;
  IA[23]=  2  ;  JA[23]=  44  ;  an[23]=   0.17227349913197e+10 ;
  IA[24]=  3  ;  JA[24]=  24  ;  an[24]=  -0.13551334240775e+5  ;
  IA[25]=  3  ;  JA[25]=  44  ;  an[25]=   0.12848734664650e+8  ;
  IA[26]=  4  ;  JA[26]=  12  ;  an[26]=   0.13865724283226e+1  ;
  IA[27]=  4  ;  JA[27]=  32  ;  an[27]=   0.23598832556514e+6  ;
  IA[28]=  4  ;  JA[28]=  44  ;  an[28]=  -0.13105236545054e+8  ;
  IA[29]=  5  ;  JA[29]=  32  ;  an[29]=   0.73999835474766e+4  ;
  IA[30]=  5  ;  JA[30]=  36  ;  an[30]=  -0.55196697030060e+6  ;
  IA[31]=  5  ;  JA[31]=  42  ;  an[31]=   0.37154085996233e+7  ;
  IA[32]=  6  ;  JA[32]=  34  ;  an[32]=   0.19127729239660e+5  ;
  IA[33]=  6  ;  JA[33]=  44  ;  an[33]=  -0.41535164835634e+6  ;
  IA[34]=  7  ;  JA[34]=  28  ;  an[34]=  -0.62459855192507e+2  ;

  const IB = []
  const JB = []
  const bn = []

  IB[ 1]=  0  ;  JB[ 1]=   0   ;  bn[ 1]=   0.14895041079516e+4  ;
  IB[ 2]=  0  ;  JB[ 2]=   1   ;  bn[ 2]=   0.74307798314034e+3  ;
  IB[ 3]=  0  ;  JB[ 3]=   2   ;  bn[ 3]=  -0.97708318797837e+2  ;
  IB[ 4]=  0  ;  JB[ 4]=  12   ;  bn[ 4]=   0.24742464705674e+1  ;
  IB[ 5]=  0  ;  JB[ 5]=  18   ;  bn[ 5]=  -0.63281320016026e+0  ;
  IB[ 6]=  0  ;  JB[ 6]=  24   ;  bn[ 6]=   0.11385952129658e+1  ;
  IB[ 7]=  0  ;  JB[ 7]=  28   ;  bn[ 7]=  -0.47811863648625e+0  ;
  IB[ 8]=  0  ;  JB[ 8]=  40   ;  bn[ 8]=   0.85208123431544e-2  ;
  IB[ 9]=  1  ;  JB[ 9]=   0   ;  bn[ 9]=   0.93747147377932e+0  ;
  IB[10]=  1  ;  JB[10]=   2   ;  bn[10]=   0.33593118604916e+1  ;
  IB[11]=  1  ;  JB[11]=   6   ;  bn[11]=   0.33809355601454e+1  ;
  IB[12]=  1  ;  JB[12]=  12   ;  bn[12]=   0.16844539671904e+0  ;
  IB[13]=  1  ;  JB[13]=  18   ;  bn[13]=   0.73875745236695e+0  ;
  IB[14]=  1  ;  JB[14]=  24   ;  bn[14]=  -0.47128737436186e+0  ;
  IB[15]=  1  ;  JB[15]=  28   ;  bn[15]=   0.15020273139707e+0  ;
  IB[16]=  1  ;  JB[16]=  40   ;  bn[16]=  -0.21764114219750e-2  ;
  IB[17]=  2  ;  JB[17]=   2   ;  bn[17]=  -0.21810755324761e-1  ;
  IB[18]=  2  ;  JB[18]=   8   ;  bn[18]=  -0.10829784403677e+0  ;
  IB[19]=  2  ;  JB[19]=  18   ;  bn[19]=  -0.46333324635812e-1  ;
  IB[20]=  2  ;  JB[20]=  40   ;  bn[20]=   0.71280351959551e-4  ;
  IB[21]=  3  ;  JB[21]=   1   ;  bn[21]=   0.11032831789999e-3  ;
  IB[22]=  3  ;  JB[22]=   2   ;  bn[22]=   0.18955248387902e-3  ;
  IB[23]=  3  ;  JB[23]=  12   ;  bn[23]=   0.30891541160537e-2  ;
  IB[24]=  3  ;  JB[24]=  24   ;  bn[24]=   0.13555504554949e-2  ;
  IB[25]=  4  ;  JB[25]=   2   ;  bn[25]=   0.28640237477456e-6  ;
  IB[26]=  4  ;  JB[26]=  12   ;  bn[26]=  -0.10779857357512e-4  ;
  IB[27]=  4  ;  JB[27]=  18   ;  bn[27]=  -0.76462712454814e-4  ;
  IB[28]=  4  ;  JB[28]=  24   ;  bn[28]=   0.14052392818316e-4  ;
  IB[29]=  4  ;  JB[29]=  28   ;  bn[29]=  -0.31083814331434e-4  ;
  IB[30]=  4  ;  JB[30]=  40   ;  bn[30]=  -0.10302738212103e-5  ;
  IB[31]=  5  ;  JB[31]=  18   ;  bn[31]=   0.28217281635040e-6  ;
  IB[32]=  5  ;  JB[32]=  24   ;  bn[32]=   0.12704902271945e-5  ;
  IB[33]=  5  ;  JB[33]=  40   ;  bn[33]=   0.73803353468292e-7  ;
  IB[34]=  6  ;  JB[34]=  28   ;  bn[34]=  -0.11030139238909e-7  ;
  IB[35]=  7  ;  JB[35]=   2   ;  bn[35]=  -0.81456365207833e-13 ;
  IB[36]=  7  ;  JB[36]=  28   ;  bn[36]=  -0.25180545682962e-10 ;
  IB[37]=  9  ;  JB[37]=   1   ;  bn[37]=  -0.17565233969407e-17 ;
  IB[38]=  9  ;  JB[38]=  40   ;  bn[38]=   0.86934156344163e-14 ;  

  const IC = []
  const JC = []
  const cn = []

  IC[ 1]=  -7   ;  JC[ 1]=   0  ;  cn[ 1]=  -0.32368398555242e+13  ;
  IC[ 2]=  -7   ;  JC[ 2]=   4  ;  cn[ 2]=   0.73263350902181e+13  ;
  IC[ 3]=  -6   ;  JC[ 3]=   0  ;  cn[ 3]=   0.35825089945447e+12  ;
  IC[ 4]=  -6   ;  JC[ 4]=   2  ;  cn[ 4]=  -0.58340131851590e+12  ;
  IC[ 5]=  -5   ;  JC[ 5]=   0  ;  cn[ 5]=  -0.10783068217470e+11  ;
  IC[ 6]=  -5   ;  JC[ 6]=   2  ;  cn[ 6]=   0.20825544563171e+11  ;
  IC[ 7]=  -2   ;  JC[ 7]=   0  ;  cn[ 7]=   0.61074783564516e+6   ;
  IC[ 8]=  -2   ;  JC[ 8]=   1  ;  cn[ 8]=   0.85977722535580e+6   ;
  IC[ 9]=  -1   ;  JC[ 9]=   0  ;  cn[ 9]=  -0.25745723604170e+5   ;
  IC[10]=  -1   ;  JC[10]=   2  ;  cn[10]=   0.31081088422714e+5   ;
  IC[11]=   0   ;  JC[11]=   0  ;  cn[11]=   0.12082315865936e+4   ;
  IC[12]=   0   ;  JC[12]=   1  ;  cn[12]=   0.48219755109255e+3   ;
  IC[13]=   1   ;  JC[13]=   4  ;  cn[13]=   0.37966001272486e+1   ;
  IC[14]=   1   ;  JC[14]=   8  ;  cn[14]=  -0.10842984880077e+2   ;
  IC[15]=   2   ;  JC[15]=   4  ;  cn[15]=  -0.45364172676660e-1   ;
  IC[16]=   6   ;  JC[16]=   0  ;  cn[16]=   0.14559115658698e-12  ;
  IC[17]=   6   ;  JC[17]=   1  ;  cn[17]=   0.11261597407230e-11  ;
  IC[18]=   6   ;  JC[18]=   4  ;  cn[18]=  -0.17804982240686e-10  ;
  IC[19]=   6   ;  JC[19]=  10  ;  cn[19]=   0.12324579690832e-6   ;
  IC[20]=   6   ;  JC[20]=  12  ;  cn[20]=  -0.11606921130984e-5   ;
  IC[21]=   6   ;  JC[21]=  16  ;  cn[21]=   0.27846367088554e-4   ;
  IC[22]=   6   ;  JC[22]=  20  ;  cn[22]=  -0.59270038474176e-3   ;
  IC[23]=   6   ;  JC[23]=  22  ;  cn[23]=   0.12918582991878e-2   ;
 
  const IIA = []
  const JJA = []
  const An = []
  
  const SAn= 2.0
  IIA[ 1]=  -1.5e+0    ;  JJA[ 1]=  -24  ;  An[ 1]=  -0.39235983861984e+6  ;
  IIA[ 2]=  -1.5e+0    ;  JJA[ 2]=  -23  ;  An[ 2]=   0.51526573827270e+6  ;
  IIA[ 3]=  -1.5e+0    ;  JJA[ 3]=  -19  ;  An[ 3]=   0.40482443161048e+5  ;
  IIA[ 4]=  -1.5e+0    ;  JJA[ 4]=  -13  ;  An[ 4]=  -0.32193790923902e+3  ;
  IIA[ 5]=  -1.5e+0    ;  JJA[ 5]=  -11  ;  An[ 5]=   0.96961424218694e+2  ;
  IIA[ 6]=  -1.5e+0    ;  JJA[ 6]=  -10  ;  An[ 6]=  -0.22867846371773e+2  ;
  IIA[ 7]=  -1.25e+0   ;  JJA[ 7]=  -19  ;  An[ 7]=  -0.44942914124357e+6  ;
  IIA[ 8]=  -1.25e+0   ;  JJA[ 8]=  -15  ;  An[ 8]=  -0.50118336020166e+4  ;
  IIA[ 9]=  -1.25e+0   ;  JJA[ 9]=  -6   ;  An[ 9]=   0.35684463560015e+0  ;
  IIA[10]=  -1.0e+0    ;  JJA[10]=  -26  ;  An[10]=   0.44235335848190e+5  ;
  IIA[11]=  -1.0e+0    ;  JJA[11]=  -21  ;  An[11]=  -0.13673388811708e+5  ;
  IIA[12]=  -1.0e+0    ;  JJA[12]=  -17  ;  An[12]=   0.42163260207864e+6  ;
  IIA[13]=  -1.0e+0    ;  JJA[13]=  -16  ;  An[13]=   0.22516925837475e+5  ;
  IIA[14]=  -1.0e+0    ;  JJA[14]=  -9   ;  An[14]=   0.47442144865646e+3  ;
  IIA[15]=  -1.0e+0    ;  JJA[15]=  -8   ;  An[15]=  -0.14931130797647e+3  ;
  IIA[16]=  -0.75e+0   ;  JJA[16]=  -15  ;  An[16]=  -0.19781126320452e+6  ;
  IIA[17]=  -0.75e+0   ;  JJA[17]=  -14  ;  An[17]=  -0.23554399470760e+5  ;
  IIA[18]=  -0.5e+0    ;  JJA[18]=  -26  ;  An[18]=  -0.19070616302076e+5  ;
  IIA[19]=  -0.5e+0    ;  JJA[19]=  -13  ;  An[19]=   0.55375669883164e+5  ;
  IIA[20]=  -0.5e+0    ;  JJA[20]=  -9   ;  An[20]=   0.38293691437363e+4  ;
  IIA[21]=  -0.5e+0    ;  JJA[21]=  -7   ;  An[21]=  -0.60391860580567e+3  ;
  IIA[22]=  -0.25e+0   ;  JJA[22]=  -27  ;  An[22]=   0.19363102620331e+4  ;
  IIA[23]=  -0.25e+0   ;  JJA[23]=  -25  ;  An[23]=   0.42660643698610e+4  ;
  IIA[24]=  -0.25e+0   ;  JJA[24]=  -11  ;  An[24]=  -0.59780638872718e+4  ;
  IIA[25]=  -0.25e+0   ;  JJA[25]=  -6   ;  An[25]=  -0.70401463926862e+3  ;
  IIA[26]=   0.25e+0   ;  JJA[26]=  1    ;  An[26]=   0.33836784107553e+3  ;
  IIA[27]=   0.25e+0   ;  JJA[27]=  4    ;  An[27]=   0.20862786635187e+2  ;
  IIA[28]=   0.25e+0   ;  JJA[28]=  8    ;  An[28]=   0.33834172656196e-1  ;
  IIA[29]=   0.25e+0   ;  JJA[29]=  11   ;  An[29]=  -0.43124428414893e-4  ;
  IIA[30]=   0.5e+0    ;  JJA[30]=  0    ;  An[30]=   0.16653791356412e+3  ;
  IIA[31]=   0.5e+0    ;  JJA[31]=  1    ;  An[31]=  -0.13986292055898e+3  ;
  IIA[32]=   0.5e+0    ;  JJA[32]=  5    ;  An[32]=  -0.78849547999872e+0  ;
  IIA[33]=   0.5e+0    ;  JJA[33]=  6    ;  An[33]=   0.72132411753872e-1  ;
  IIA[34]=   0.5e+0    ;  JJA[34]=  10   ;  An[34]=  -0.59754839398283e-2  ;
  IIA[35]=   0.5e+0    ;  JJA[35]=  14   ;  An[35]=  -0.12141358953904e-4  ;
  IIA[36]=   0.5e+0    ;  JJA[36]=  16   ;  An[36]=   0.23227096733871e-6  ;
  IIA[37]=   0.75e+0   ;  JJA[37]=  0    ;  An[37]=  -0.10538463566194e+2  ;
  IIA[38]=   0.75e+0   ;  JJA[38]=  4    ;  An[38]=   0.20718925496502e+1  ;
  IIA[39]=   0.75e+0   ;  JJA[39]=  9    ;  An[39]=  -0.72193155260427e-1  ;
  IIA[40]=   0.75e+0   ;  JJA[40]=  17   ;  An[40]=   0.20749887081120e-6  ;
  IIA[41]=   1.0e+0    ;  JJA[41]=  7    ;  An[41]=  -0.18340657911379e-1  ;
  IIA[42]=   1.0e+0    ;  JJA[42]=  18   ;  An[42]=   0.29036272348696e-6  ;
  IIA[43]=   1.25e+0   ;  JJA[43]=  3    ;  An[43]=   0.21037527893619e+0  ;
  IIA[44]=   1.25e+0   ;  JJA[44]=  15   ;  An[44]=   0.25681239729999e-3  ;
  IIA[45]=   1.5e+0    ;  JJA[45]=  5    ;  An[45]=  -0.12799002933781e-1  ;
  IIA[46]=   1.5e+0    ;  JJA[46]=  18   ;  An[46]=  -0.82198102652018e-5  ;

  const IIB = []
  const JJB = []
  const Bn = []
 
  const SBn=  0.7853
  IIB[ 1]=  -6  ;  JJB[ 1]=   0  ;  Bn[ 1]=   0.31687665083497e+6  ;
  IIB[ 2]=  -6  ;  JJB[ 2]=  11  ;  Bn[ 2]=   0.20864175881858e+2  ;
  IIB[ 3]=  -5  ;  JJB[ 3]=   0  ;  Bn[ 3]=  -0.39859399803599e+6  ;
  IIB[ 4]=  -5  ;  JJB[ 4]=  11  ;  Bn[ 4]=  -0.21816058518877e+2  ;
  IIB[ 5]=  -4  ;  JJB[ 5]=   0  ;  Bn[ 5]=   0.22369785194242e+6  ;
  IIB[ 6]=  -4  ;  JJB[ 6]=   1  ;  Bn[ 6]=  -0.27841703445817e+4  ;
  IIB[ 7]=  -4  ;  JJB[ 7]=  11  ;  Bn[ 7]=   0.99207436071480e+1  ;
  IIB[ 8]=  -3  ;  JJB[ 8]=   0  ;  Bn[ 8]=  -0.75197512299157e+5  ;
  IIB[ 9]=  -3  ;  JJB[ 9]=   1  ;  Bn[ 9]=   0.29708605951158e+4  ;
  IIB[10]=  -3  ;  JJB[10]=  11  ;  Bn[10]=  -0.34406878548526e+1  ;
  IIB[11]=  -3  ;  JJB[11]=  12  ;  Bn[11]=   0.38815564249115e+0  ;
  IIB[12]=  -2  ;  JJB[12]=   0  ;  Bn[12]=   0.17511295085750e+5  ;
  IIB[13]=  -2  ;  JJB[13]=   1  ;  Bn[13]=  -0.14237112854449e+4  ;
  IIB[14]=  -2  ;  JJB[14]=   6  ;  Bn[14]=   0.10943803364167e+1  ;
  IIB[15]=  -2  ;  JJB[15]=  10  ;  Bn[15]=   0.89971619308495e+0  ;
  IIB[16]=  -1  ;  JJB[16]=   0  ;  Bn[16]=  -0.33759740098958e+4  ;
  IIB[17]=  -1  ;  JJB[17]=   1  ;  Bn[17]=   0.47162885818355e+3  ;
  IIB[18]=  -1  ;  JJB[18]=   5  ;  Bn[18]=  -0.19188241993679e+1  ;
  IIB[19]=  -1  ;  JJB[19]=   8  ;  Bn[19]=   0.41078580492196e+0  ;
  IIB[20]=  -1  ;  JJB[20]=   9  ;  Bn[20]=  -0.33465378172097e+0  ;
  IIB[21]=   0  ;  JJB[21]=   0  ;  Bn[21]=   0.13870034777505e+4  ;
  IIB[22]=   0  ;  JJB[22]=   1  ;  Bn[22]=  -0.40663326195838e+3  ;
  IIB[23]=   0  ;  JJB[23]=   2  ;  Bn[23]=   0.41727347159610e+2  ;
  IIB[24]=   0  ;  JJB[24]=   4  ;  Bn[24]=   0.21932549434532e+1  ;
  IIB[25]=   0  ;  JJB[25]=   5  ;  Bn[25]=  -0.10320050009077e+1  ;
  IIB[26]=   0  ;  JJB[26]=   6  ;  Bn[26]=   0.35882943516703e+0  ;
  IIB[27]=   0  ;  JJB[27]=   9  ;  Bn[27]=   0.52511453726066e-2  ;
  IIB[28]=   1  ;  JJB[28]=   0  ;  Bn[28]=   0.12838916450705e+2  ;
  IIB[29]=   1  ;  JJB[29]=   1  ;  Bn[29]=  -0.28642437219381e+1  ;
  IIB[30]=   1  ;  JJB[30]=   2  ;  Bn[30]=   0.56912683664855e+0  ;
  IIB[31]=   1  ;  JJB[31]=   3  ;  Bn[31]=  -0.99962954584931e-1  ;
  IIB[32]=   1  ;  JJB[32]=   7  ;  Bn[32]=  -0.32632037778459e-2  ;
  IIB[33]=   1  ;  JJB[33]=   8  ;  Bn[33]=   0.23320922576723e-3  ;
  IIB[34]=   2  ;  JJB[34]=   0  ;  Bn[34]=  -0.15334809857450e+0  ;
  IIB[35]=   2  ;  JJB[35]=   1  ;  Bn[35]=   0.29072288239902e-1  ;
  IIB[36]=   2  ;  JJB[36]=   5  ;  Bn[36]=   0.37534702741167e-3  ;
  IIB[37]=   3  ;  JJB[37]=   0  ;  Bn[37]=   0.17296691702411e-2  ;
  IIB[38]=   3  ;  JJB[38]=   1  ;  Bn[38]=  -0.38556050844504e-3  ;
  IIB[38]=   3  ;  JJB[38]=   1  ;  Bn[38]=  -0.38556050844504e-3  ;
  IIB[39]=   3  ;  JJB[39]=   3  ;  Bn[39]=  -0.35017712292608e-4  ;
  IIB[40]=   4  ;  JJB[40]=   0  ;  Bn[40]=  -0.14566393631492e-4  ;
  IIB[41]=   4  ;  JJB[41]=   1  ;  Bn[41]=   0.56420857267269e-5  ;
  IIB[42]=   5  ;  JJB[42]=   0  ;  Bn[42]=   0.41286150074605e-7  ;
  IIB[43]=   5  ;  JJB[43]=   1  ;  Bn[43]=  -0.20684671118824e-7  ;
  IIB[44]=   5  ;  JJB[44]=   2  ;  Bn[44]=   0.16409393674725e-8  ;
 
  const IIC = []
  const JJC = []
  const Cn = []

  const SCn=  2.9251
  IIC[ 1]=  -2  ;  JJC[ 1]=  0  ;  Cn[ 1]=   0.90968501005365e+3  ;
  IIC[ 2]=  -2  ;  JJC[ 2]=  1  ;  Cn[ 2]=   0.24045667088420e+4  ;
  IIC[ 3]=  -1  ;  JJC[ 3]=  0  ;  Cn[ 3]=  -0.59162326387130e+3  ;
  IIC[ 4]=   0  ;  JJC[ 4]=  0  ;  Cn[ 4]=   0.54145404128074e+3  ;
  IIC[ 5]=   0  ;  JJC[ 5]=  1  ;  Cn[ 5]=  -0.27098308411192e+3  ;
  IIC[ 6]=   0  ;  JJC[ 6]=  2  ;  Cn[ 6]=   0.97976525097926e+3  ;
  IIC[ 7]=   0  ;  JJC[ 7]=  3  ;  Cn[ 7]=  -0.46966772959435e+3  ;
  IIC[ 8]=   1  ;  JJC[ 8]=  0  ;  Cn[ 8]=   0.14399274604723e+2  ;
  IIC[ 9]=   1  ;  JJC[ 9]=  1  ;  Cn[ 9]=  -0.19104204230429e+2  ;
  IIC[10]=   1  ;  JJC[10]=  3  ;  Cn[10]=   0.53299167111971e+1  ;
  IIC[11]=   1  ;  JJC[11]=  4  ;  Cn[11]=  -0.21252975375934e+2  ;
  IIC[12]=   2  ;  JJC[12]=  0  ;  Cn[12]=  -0.31147334413760e+0  ;
  IIC[13]=   2  ;  JJC[13]=  1  ;  Cn[13]=   0.60334840894623e+0  ;
  IIC[14]=   2  ;  JJC[14]=  2  ;  Cn[14]=  -0.42764839702509e-1  ;
  IIC[15]=   3  ;  JJC[15]=  0  ;  Cn[15]=   0.58185597255259e-2  ;
  IIC[16]=   3  ;  JJC[16]=  1  ;  Cn[16]=  -0.14597008284753e-1  ;
  IIC[17]=   3  ;  JJC[17]=  5  ;  Cn[17]=   0.56631175631027e-2  ;
  IIC[18]=   4  ;  JJC[18]=  0  ;  Cn[18]=  -0.76155864584577e-4  ;
  IIC[19]=   4  ;  JJC[19]=  1  ;  Cn[19]=   0.22440342919332e-3  ;
  IIC[20]=   4  ;  JJC[20]=  4  ;  Cn[20]=  -0.12561095013413e-4  ;
  IIC[21]=   5  ;  JJC[21]=  0  ;  Cn[21]=   0.63323132660934e-6  ;
  IIC[22]=   5  ;  JJC[22]=  1  ;  Cn[22]=  -0.20541989675375e-5  ;
  IIC[23]=   5  ;  JJC[23]=  2  ;  Cn[23]=   0.36405370390082e-7  ;
  IIC[24]=   6  ;  JJC[24]=  0  ;  Cn[24]=  -0.29759897789215e-8  ;
  IIC[25]=   6  ;  JJC[25]=  1  ;  Cn[25]=   0.10136618529763e-7  ;
  IIC[26]=   7  ;  JJC[26]=  0  ;  Cn[26]=   0.59925719692351e-11 ;
  IIC[27]=   7  ;  JJC[27]=  1  ;  Cn[27]=  -0.20677870105164e-10 ;
  IIC[28]=   7  ;  JJC[28]=  3  ;  Cn[28]=  -0.20874278181886e-10 ;
  IIC[29]=   7  ;  JJC[29]=  4  ;  Cn[29]=   0.10162166825089e-9  ;
  IIC[30]=   7  ;  JJC[30]=  5  ;  Cn[30]=  -0.16429828281347e-9  ;
 
export const Tph2 = (P, h) => {
  if(P <= 4.0){
    const T = Tph2A(P, h) 
    return T
  }
  else{
    const p585= (0.12809002730136e-3 * h - 0.67955786399241e+0) * h
         +0.90584278514723e+3;

    if(P <= p585){
      const T = Tph2B(P, h)
      return T
    }
    else{
      const T = Tph2C(P, h)
      return T
    }
  }
}

export const Tps2 = (P, s) => {
  if(P <= 4.0){
    const s = Tps2A(P, s)
    return s
  }
  else{
    if(s >= 5.85){
      const s = Tps2B(P, s)
      return s
    }
    else{    
      const s = Tps2C(P, s)
      return s
    }
  }  
}

const Tph2A = (P, h) => {
  const eta = h / Hn
  const etau = eta - 2.1

  let T = 0.0

  for(let i=1;i<=34;i++){
    T += an[i]*Math.pow(P, IA[i])*Math.pow(etau, JA[i])
  }
  
  return T 
}

const Tph2B = (P, h) => {
  const eta = h / Hn;
  const pai = P -2.0
  const etau= eta - 2.6

  let T = 0.0

  for(let i=1;i<=38;i++){
    T += bn[i]*Math.pow(pai,IB[i])*Math.pow(etau,JB[i])
  }
  
  return T 
}

const Tph2C = (P, h) => {
  const eta = h / Hn
  const pai = P + 25.0
  const etau = eta - 1.8

  let T = 0.0

  for(let i=1;i<=23;i++){
    T += cn[i]*Math.pow(pai,IC[i])*Math.pow(etau, JC[i])
  }
  
  return T 
}


const Tps2A = (P, s) =>{
  const sigma = s / SAn
  const stau = sigma - 2

  let T = 0.0
  
  for(let i=1;i<=46;i++){
    T += An[i]*Math.pow(P,IIA[i])*Math.pow(stau, JJA[i])
  }
  
  return T
}

const Tps2B = (P, s) => {
  const sigma = s / SBn
  const stau = 10.0-sigma
  let T = 0.0

  for(let i=1;i<=44;i++){
    T +=  Bn[i]*Math.pow(P, IIB[i])*Math.pow(stau, JJB[i])
  }
  
  return T 
}

const Tps2C = (P, s) => {
  const sigma = s / SCn
  const stau = 2 -sigma

  let T = 0.0

  for(let i=1;i<=30;i++){
    T += Cn[i]*Math.pow(P, IIC[i])*Math.pow(stau, JJC[i])
  }
  
  return T 
}
    
