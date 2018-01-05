import {region_1} from './IF97_1.js'
import {region_2} from './IF97_2.js'
import {region_3} from './IF97_3.js'
import {region_5} from './IF97_5.js'
import {PsatT,TsatP} from './IF97_Sat.js'
import {ZPH_1,ZPS_1} from './Aux_1.js'
import {ZPH_2,ZPS_2} from './Aux_2.js'

var SP= {
  P: 10,
  h: 3000 
};
ZPH_2(SP)
console.log(SP)
