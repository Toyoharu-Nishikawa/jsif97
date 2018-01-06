import {propPT} from "propPT.js"
import {propPH} from "propPH.js"
import {propPS} from "propPS.js"
import {propHS} from "propHS.js"


//version
export function version() {
  //version
  var version = "ver 2.3 updated  by Toyoharu Nishikawa in 2018.1.6";

  return version; 
}

// pt
export function pt2g(P, T) { 
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // g:Gibbs free enagy [kJ/kg]
  
  var g;
  var SP;
  
  SP = {};
  SP.P = P;
  SP.T = T;
  
  if (propPT(SP) == -1) { SP = null; return -1; }
  g = SP.g;
  
  return g;
}

export function pt2u(P, T){
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // u:internal energy [kJ/kg]
  
  var u;
  var SP;
  
  SP = {};
  SP.P = P;
  SP.T = T;
  
  if (propPT(SP) == -1) { SP = null; return -1; }
  u = SP.u;
  
  return u;
}

export function pt2v(P, T){
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // v:specific volume [m^3/kg]
  
  var v;
  var SP;
  
  SP = {};
  SP.P = P;
  SP.T = T;
  
  if (propPT(SP) == -1) { SP = null; return -1; }
  v = SP.v;
  
  return v;
}

export function pt2h(P, T){
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // h:specific enthalpy [kJ/kg]
  
  var h;
  var SP;
  
  SP = {};
  SP.P = P;
  SP.T = T;
  
  if (propPT(SP) == -1) { SP = null; return -1; }
  h = SP.h;
  
  return h;
}

export function pt2s(P, T){
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // s:specific entropy [kJ/kgK]
  
  var s;
  var SP;
  
  SP = {};
  SP.P = P;
  SP.T = T;
  
  if (propPT(SP) == -1) { SP = null; return -1; }
  s = SP.s;
  
  return s;
}
  
export function pt2w(P, T) { 
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // w: speed of sound in m/s
  
  var w;
  var SP;
  
  SP = {};
  SP.P = P;
  SP.T = T;
  
  if (propPT(SP) == -1) { SP = null; return -1; }
  w = SP.w;
  
  return w;
}
  
export function pt2MM(P, T){ 
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // MM: Region
  
  int MM;
  var SP;
  
  SP = {};
  SP.P = P;
  SP.T = T;
  
  if (propPT(SP) == -1) { SP = null; return -1; }
  MM = SP.MM;
  
  return SP.M;
}
  
export function pt2cp(p, t) {
  // input
  // p:puressure [MPa] , t:temperature [K]
  
  // output
  // cp: isobaric spcific heat in kJ/kgK
  
  var cp;
  var SP;
  
  SP = {};
  SP.P = p;
  SP.T = t;
  
  if (EXPISPT(SP) == -1) { SP = null; return -1; }
  cp = SP.cp;
  return cp;
}
  
export function pt2cv(p, t) {
  // input
  // p:puressure [MPa] , t:temperature [K]
  
  // output
  // cv: isobaric spcific heat in kJ/kgK
  
  var cv;
  var SP;
  
  SP = {};
  SP.P = p;
  SP.T = t;
  
  if (EXPISPT(SP) == -1) { SP = null; return -1; }
  cv = SP.cv;
  return cv;
}
  
export function pt2k(P, T){
  // input
  // P:pressure [Pa], T:temperature [K]
  
  // output
  // kappa: isentropic exponent [-]
  
  var kappa;
  var SP;
  
  SP ={}; 
  SP.P = P;
  SP.T = T;
  
  if (EXPISPT(SP) == -1) { SP = null; return -1; }
  kappa = SP.kappa;
  
  return kappa;
}
  
export function pt2mu(p, t) {
  // input
  // p:puressure [MPa] , t:temperature [K]
  
  // output ( sturation line is included in gas regeion)
  // mu:viscosity [Pa-s]
  
  var mu;
  
  var SP;
  
  SP = null;
  SP.P = p;
  SP.T = t;
  
  if (TRANSPT(SP) == -1) { SP = null; return -1; }
  mu = SP.mu;
  return mu;
}
  
  //ph
export function ph2g(P, h) {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // g:specific volume [m^3/kg]
  
  var g;
  var SP;
  
  SP = null;
  SP.P = P;
  SP.h = h;
  
  if (propPH(SP) == -1) { SP = null; return -1; }
  g = SP.g;
  
  return g;
}
  
export function ph2u(P, h) {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // u:internal energy [m^3/kg]
  
  var u;
  var SP;
  
  SP = null;
  SP.P = P;
  SP.h = h;
  
  if (propPH(SP) == -1) { SP = null; return -1; }
  u = SP.u;
  
  return u;
}
  
export function ph2v(P, h) {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // v:specific volume [m^3/kg]
  
  var v;
  var SP;
  
  SP = null;
  SP.P = P;
  SP.h = h;
  
  if (propPH(SP) == -1) { SP = null; return -1; }
  v = SP.v;
  
  return v;
}
  
export function ph2t(P, h) {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // t:temperature [K]
  
  var T;
  var SP;
  
  SP = null;
  SP.P = P;
  SP.h = h;
  
  if (propPH(SP) == -1) { SP = null; return -1; }
  T = SP.T;
  
  return T;
}
  
export function ph2s(P, h) {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // s:specific entropy [kJ/kgK]
  
  var s;
  var SP;
  
  SP = null;
  SP.P = P;
  SP.h = h;
  
  if (propPH(SP) == -1) { SP = null; return -1; }
  s = SP.s;
  
  return s;
}
  
export function ph2w(P, h) {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // w:speed of sound [m/s]
  
  var w;
  var kappa;
  var del;
  var SP;
  var SP1;
  
  del = 1.0E-6;
  
  SP = null;
  ZeroSetSP(SP1);
  SP.P = P;
  SP.h = h;
  
  if (propPH(SP) == -1) { SP = null; return -1; }
  if (SP.MM != 4) {
  w = SP.w;
}
  else {
  SP1.P = P + del;
  SP1.s = SP.s;
  if (propPS(SP1) == -1) { SP = null; return -1; }
  kappa = -log(SP1.P / P) / log(SP1.v / SP.v);
  w = sqrt(kappa*SP.v*SP.P*1.0E+6);
}
  
  return w;
}
  
export function ph2x(P, h) {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // x:dryness [-]
  
  var x;
  var SP;
  
  SP = null;
  SP.P = P;
  SP.h = h;
  
  if (propPH(SP) == -1) { SP = null; return -1; }
  x = SP.x;
  
  return x;
}
  
  int IF97_ph2MM(P, h) {
  // input
  // P:pressure [Pa], h:specific enthalpy [kJ/kg]
  
  // output
  // MM:region [-]
  
  int MM;
  var SP;
  
  SP = null;
  SP.P = P;
  SP.h = h;
  
  if (propPH(SP) == -1) { SP = null; return -1; }
  MM = SP.MM;
  
  return MM;
}
  
export function ph2mu(p, h, n) {
  // input
  // p:puressure [MPa] , h:specific enthalpy [kJ/kg]
  // n:0:harmonic mean, 1:weighted mean, 2:gas viscosity, 3:liquid viscosity,else: harmonic mean
  
  // output
  // mu:viscosity [Pa-s]
  
  var mu;
  int MM;
  var x;
  
  var SP;
  var SP1;
  
  SP = null;
  ZeroSetSP(SP1);
  SP.P = p;
  SP.h = h;
  
  if (propPH(SP) == -1) { SP = null; return -1; }
  MM = SP.MM;
  if (MM != 4) {
  if (TRANSPT(SP) == -1) { SP = null; return -1; }
  mu = SP.mu;
}
  else {
  x = SP.x;
  if (TRANSATP(p, SP, SP1) == -1) { SP = null; return -1; }
  if (n == 0) {
  mu = 1 / (x / SP1.mu + (1.0 - x) / SP.mu);
}
  else if (n == 1) {
  mu = SP1.mu*x + SP.mu*(1.0 - x);
}
  else if (n == 2) {
  mu = SP1.mu;
}
  else if (n == 3) {
  mu = SP.mu;
}
  else {
  mu = 1 / (x / SP1.mu + (1.0 - x) / SP.mu);
}
}
  return mu;
}
  
export function ph2cp(p, h) {
  // input
  // p:puressure [MPa] , h:specific enthalpy [kJ/kg]
  
  // output
  // cp:heat capacity [kJ/(kg-K)]
  
  var cp;
  int MM;
  
  var SP;
  
  SP = null;
  SP.P = p;
  SP.h = h;
  
  if (propPH(SP) == -1) { SP = null; return -1; }
  MM = SP.MM;
  if (MM != 4) {
  if (EXPISPT(SP) == -1) { SP = null; return -1; }
  cp = SP.cp;
}
  else {
  return -1;
}
  return cp;
}
  
export function ph2cv(p, h) {
  // input
  // p:puressure [MPa] , h:specific enthalpy [kJ/kg]
  
  // output
  // cv:heat capacity [kJ/(kg-K)]
  
  var cv;
  int MM;
  
  var SP;
  
  SP = null;
  SP.P = p;
  SP.h = h;
  
  if (propPH(SP) == -1) { SP = null; return -1; }
  MM = SP.MM;
  if (MM != 4) {
  if (EXPISPT(SP) == -1) { SP = null; return -1; }
  cv = SP.cv;
}
  else {
  return -1;
}
  return cv;
}
  
export function ph2k(p, h) {
  // input
  // p:puressure [MPa] , h:specific enthalpy [kJ/kg]
  
  // output
  // kappa: isentropic exponent [-]
  
  var kappa;
  var del;
  int MM;
  
  var SP;
  var SP1;
  
  del = 1.0E-6;
  
  SP = null;
  ZeroSetSP(SP1);
  SP.P = p;
  SP.h = h;
  
  if (propPH(SP) == -1) { SP = null; return -1; }
  MM = SP.MM;
  if (MM != 4) {
  EXPISPT(SP);
  kappa = SP.kappa;
}
  else {
  SP1.P = p + del;
  SP1.s = SP.s;
  if (propPS(SP1) == -1) { SP = null; return -1; }
  kappa = -log(SP1.P / p) / log(SP1.v / SP.v);
}
  return kappa;
}
  
  //ps
export function ps2g(P, s) {
  // input
  // P:pressure [Pa], s:specific entropy [kJ/kgK]
  
  // output
  // g:Gibbs free enagy [kJ/kg]
  
  var g;
  var SP;
  
  SP = null;
  SP.P = P;
  SP.s = s;
  
  if (propPS(SP) == -1) { SP = null; return -1; }
  g = SP.g;
  
  return g;
}
  
export function ps2u(P, s) {
  // input
  // P:pressure [Pa], s:specific entropy [kJ/kgK]
  
  // output
  // u:internal enagy [kJ/kg]
  
  var u;
  var SP;
  
  SP.P = P;
  SP.s = s;
  
  SP = null;
  if (propPS(SP) == -1) { SP = null; return -1; }
  u = SP.u;
  
  return u;
}
  
export function ps2v(P, s) {
  // input
  // P:pressure [Pa], s:specific entropy [kJ/kgK]
  
  // output
  // v:specific volume [m^3/kg]
  
  var v;
  var SP;
  
  SP = null;
  SP.P = P;
  SP.s = s;
  
  if (propPS(SP) == -1) { SP = null; return -1; }
  v = SP.v;
  
  return v;
}
  
export function ps2t(P, s) {
  // input
  // P:pressure [Pa], s:specific entropy [kJ/kgK]
  
  // output
  // t:temperature [K]
  
  var t;
  var SP;
  
  SP = null;
  SP.P = P;
  SP.s = s;
  
  if (propPS(SP) == -1) { SP = null; return -1; }
  t = SP.T;
  
  return t;
}
  
export function ps2h(P, s) {
  // input
  // P:pressure [Pa], s:specific entropy [kJ/kgK]
  
  // output
  // h:specific enthalpy [kJ/kg]
  
  var h;
  var SP;
  
  SP = null;
  SP.P = P;
  SP.s = s;
  
  if (propPS(SP) == -1) { SP = null; return -1; }
  h = SP.h;
  
  return h;
}
  
export function ps2w(P, s) {
  // input
  // P:pressure [MPa], s:specific entropy [kJ/kgK]
  
  // output
  // w:speed of sound [m/s]
  
  var w;
  var kappa;
  var del;
  var SP;
  var SP1;
  
  del = 1.0E-6;
  
  SP = null;
  ZeroSetSP(SP1);
  
  SP.P = P;
  SP.s = s;
  
  if (propPS(SP) == -1) { SP = null; return -1; }
  if (SP.MM != 4) {
  w = SP.w;
}
  else {
  SP1.P = P + del;
  SP1.s = SP.s;
  if (propPS(SP1) == -1) { SP = null; return -1; }
  kappa = -log(SP1.P / P) / log(SP1.v / SP.v);
  w = sqrt(kappa*SP.v*SP.P*1.0E+6);
}
  
  return w;
}
  
export function ps2x(P, s) {
  // input
  // P:pressure [MPa], s:specific entropy [kJ/kgK]
  
  // output
  // x:dryness [-]
  
  var x;
  var SP;
  
  SP = null;
  SP.P = P;
  SP.s = s;
  
  if (propPS(SP) == -1) { SP = null; return -1; }
  x = SP.x;
  
  return x;
}
  
export function ps2k(P, s) {
  // input
  // P:pressure [MPa], s:specific entropy [kJ/kgK]
  
  // output
  // kappa: isentropic exponent [-]
  
  var kappa;
  var del;
  var SP;
  var SP1;
  
  del = 1.0E-6;
  
  SP = null;
  ZeroSetSP(SP1);
  
  SP.P = P;
  SP.s = s;
  
  if (propPS(SP) == -1) { SP = null; return -1; }
  if (SP.MM != 4) {
  EXPISPT(SP);
  kappa = SP.kappa;
}
  else {
  SP1.P = P + del;
  SP1.s = SP.s;
  if (propPS(SP1) == -1) { SP = null; return -1; }
  kappa = -log(SP1.P / P) / log(SP1.v / SP.v);
}
  return kappa;
}
  
  int IF97_ps2MM(P, s) {
  // input
  // P:pressure [MPa], s:specific entropy [kJ/kgK]
  
  // output
  // MM:Region [-]
  
  int MM;
  var SP;
  
  SP = null;
  SP.P = P;
  SP.s = s;
  
  if (propPS(SP) == -1) { SP = null; return -1; }
  MM = SP.MM;
  
  return MM;
}
  
  //hs
export function hs2g(h, s) {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // g:gibbs free energy [kJ/kg]
  
  var g;
  var SP;
  
  SP = null;
  SP.h = h;
  SP.s = s;
  
  if (propHS(SP) == -1) { SP = null; return -1; }
  g = SP.g;
  
  return g;
}
  
export function hs2u(h, s) {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // u:internal energy [kJ/kg]
  
  var u;
  var SP;
  
  SP = null;
  SP.h = h;
  SP.s = s;
  
  if (propHS(SP) == -1) { SP = null; return -1; }
  u = SP.u;
  
  return u;
}
  
export function hs2p(h, s) {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // P:pressure [MPa]
  
  var p;
  var SP;
  
  SP = null;
  SP.h = h;
  SP.s = s;
  
  if (propHS(SP) == -1) { SP = null; return -1; }
  p = SP.P;
  
  return p;
}
  
export function hs2t(h, s) {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // t:temperature [K]
  
  var t;
  var SP;
  
  SP = null;
  SP.h = h;
  SP.s = s;
  
  if (propHS(SP) == -1) { SP = null; return -1; }
  t = SP.T;
  
  return t;
}
  
export function hs2v(h, s) {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // v:specific volume [m^3/kg]
  
  var v;
  var SP;
  
  SP = null;
  SP.h = h;
  SP.s = s;
  
  if (propHS(SP) == -1) { SP = null; return -1; }
  v = SP.v;
  
  return v;
}
  
export function hs2w(h, s) {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // w:speed of sound [m/s]
  
  var w;
  var SP;
  
  SP = null;
  SP.h = h;
  SP.s = s;
  
  if (propHS(SP) == -1) { SP = null; return -1; }
  w = SP.w;
  
  return w;
}
  
export function hs2x(h, s) {
  // input
  // h:specific enthalpy [kJ/kg] , s:specific entropy [kJ/kgK]
  
  // output
  // w:speed of sound [m/s]
  
  var x;
  var SP;
  
  SP = null;
  SP.h = h;
  SP.s = s;
  
  if (propHS(SP) == -1) { SP = null; return -1; }
  x = SP.x;
  
  return x;
}
  
  //SAT
export function SATp2t(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // t:temperature [K]
  
  var t;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  t = SPl.T;
  
  return t;
}
  
export function SATt2p(t) {
  // input
  // t:temperature [K]
  
  // output
  // p:pressure [MPa]
  
  var p;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  p = SPl.P;
  
  return p;
}
  
  //SATlp
export function SATlp2g(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // g:gibbs free energy [kJ/kg]
  
  var g;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  g = SPl.g;
  
  return g;
}
  
export function SATlp2u(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // u:internal energy [kJ/kg]
  
  var u;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  u = SPl.u;
  
  return u;
}
  
export function SATlp2t(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // t:temperature [K]
  
  var t;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  t = SPl.T;
  
  return t;
}
  
export function SATlp2v(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // v:specific volume [m^3/kg]
  
  var v;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  v = SPl.v;
  
  return v;
}
  
export function SATlp2h(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // h:specific enthalpy [kJ/kg]
  
  var h;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  h = SPl.h;
  
  return h;
}
  
export function SATlp2s(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // s:specific entropy [kJ/kg]
  
  var s;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  s = SPl.s;
  
  return s;
}
  
export function SATlp2w(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // w:speed of sound [m/s]
  
  var w;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  w = SPl.w;
  
  return w;
}
  
export function SATlp2cp(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // cp:specific heat ratio [kJ/(kg-K)]
  
  var cp;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  cp = SPl.cp;
  
  return cp;
}
  
export function SATlp2cv(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // cv:specific heat ratio [kJ/(kg-K)]
  
  var cv;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  expisen1(SPl);
  
  cv = SPl.cv;
  
  return cv;
}
  
export function SATlp2k(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // kappa: isentropic exponent [-]
  
  var kappa;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  expisen1(SPl);
  
  kappa = SPl.kappa;
  
  return kappa;
}
  
  //SATgp
export function SATgp2g(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // g:gibbs free energy [kJ/kg]
  
  var g;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  g = SPg.g;
  
  return g;
}
  
export function SATgp2u(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // u:internal energy [kJ/kg]
  
  var u;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  u = SPg.u;
  
  return u;
}
  
export function SATgp2t(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // t:temperature [K]
  
  var t;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  t = SPg.T;
  
  return t;
}
  
export function SATgp2v(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // v:specific volume [m^3/kg]
  
  var v;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  v = SPg.v;
  
  return v;
}
  
export function SATgp2h(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // h:specific enthalpy [kJ/kg]
  
  var h;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  h = SPg.h;
  
  return h;
}
  
export function SATgp2s(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // s:specific entropy [kJ/kg]
  
  var s;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  s = SPg.s;
  
  return s;
}
  
export function SATgp2w(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // w:speed of sound [m/s]
  
  var w;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  w = SPg.w;
  
  return w;
}
  
export function SATgp2cp(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // cp:specific heat ratio [kJ/(kg-K)]
  
  var cp;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  cp = SPg.cp;
  
  return cp;
}
  
export function SATgp2cv(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // cv:specific heat ratio [kJ/(kg-K)]
  
  var cv;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  expisen1(SPg);
  
  cv = SPg.cv;
  
  return cv;
}
  
export function SATgp2k(p) {
  // input
  // p:pressure [MPa]
  
  // output
  // kappa: isentropic exponent [-]
  
  var kappa;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(p, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  expisen1(SPg);
  
  kappa = SPg.kappa;
  
  return kappa;
}
  
  //SATlt
export function SATlt2g(t) {
  // input
  // t:temperature [K]
  
  // output
  // g:gibbs free energy [kJ/kg]
  
  var g;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  g = SPl.g;
  
  return g;
}
  
export function SATlt2u(t) {
  // input
  // t:temperature [K]
  
  // output
  // u:internal energy [kJ/kg]
  
  var u;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  u = SPl.u;
  
  return u;
}
  
export function SATlt2p(t) {
  // input
  // t:temperature [K]
  
  // output
  // p:pressure [MPa]
  
  var p;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  p = SPl.P;
  
  return p;
}
  
export function SATlt2v(t) {
  // input
  // t:temperature [K]
  
  // output
  // v:specific volume [m^3/kg]
  
  var v;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  v = SPl.v;
  
  return v;
}
  
export function SATlt2h(t) {
  // input
  // t:temperature [K]
  
  // output
  // h:specific enthalpy [kJ/kg]
  
  var h;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  h = SPl.h;
  
  return h;
}
  
export function SATlt2s(t) {
  // input
  // t:temperature [K]
  
  // output
  // s:specific entropy [kJ/kg]
  
  var s;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  s = SPl.s;
  
  return s;
}
  
export function SATlt2w(t) {
  // input
  // t:temperature [K]
  
  // output
  // w:speed of sound [m/s]
  
  var w;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  w = SPl.w;
  
  return w;
}
  
export function SATlt2cp(t) {
  // input
  // t:temperature [K]
  
  // output
  // cp:specific heat ratio [kJ/(kg-K)]
  
  var cp;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  cp = SPl.cp;
  
  return cp;
}
  
export function SATlt2cv(t) {
  // input
  // t:temperature [K]
  
  // output
  // cv:specific heat ratio [kJ/(kg-K)]
  
  var cv;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  expisen1(SPl);
  
  cv = SPl.cv;
  
  return cv;
}
  
export function SATlt2k(t) {
  // input
  // t:temperature [K]
  
  // output
  // kappa: isentropic exponent [-]
  
  var kappa;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  expisen1(SPl);
  
  kappa = SPl.kappa;
  
  return kappa;
}
  
  //SATgt
export function SATgt2g(t) {
  // input
  // t:temperature [K]
  
  // output
  // g:gibbs free energy [kJ/kg]
  
  var g;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  g = SPg.g;
  
  return g;
}
  
export function SATgt2u(t) {
  // input
  // t:temperature [K]
  
  // output
  // u:internal energy [kJ/kg]
  
  var u;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  u = SPg.u;
  
  return u;
}
  
export function SATgt2p(t) {
  // input
  // t:temperature [K]
  
  // output
  // p:pressure [MPa]
  
  var p;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  p = SPg.P;
  
  return p;
}
  
export function SATgt2v(t) {
  // input
  // t:temperature [K]
  
  // output
  // v:specific volume [m^3/kg]
  
  var v;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  v = SPg.v;
  
  return v;
}
  
export function SATgt2h(t) {
  // input
  // t:temperature [K]
  
  // output
  // h:specific enthalpy [kJ/kg]
  
  var h;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  h = SPg.h;
  
  return h;
}
  
export function SATgt2s(t) {
  // input
  // t:temperature [K]
  
  // output
  // s:specific entropy [kJ/kg]
  
  var s;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  s = SPg.s;
  
  return s;
}
  
export function SATgt2w(t) {
  // input
  // t:temperature [K]
  
  // output
  // w:speed of sound [m/s]
  
  var w;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  w = SPg.w;
  
  return w;
}
  
export function SATgt2cp(t) {
  // input
  // t:temperature [K]
  
  // output
  // cp:specific heat ratio [kJ/(kg-K)]
  
  var cp;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROT(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  cp = SPg.cp;
  
  return cp;
}
  
export function SATgt2cv(t) {
  // input
  // t:temperature [K]
  
  // output
  // cv:specific heat ratio [kJ/(kg-K)]
  
  var cv;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  expisen1(SPg);
  
  cv = SPg.cv;
  
  return cv;
}
  
export function SATgt2k(t) {
  // input
  // t:temperature [K]
  
  // output
  // kappa: isentropic exponent [-]
  
  var kappa;
  var SPl;
  var SPg;
  
  SPl = {};
  SPg = {};
  if (SATPROP(t, SPl, SPg) == -1) { SPl = {}; SPg = {}; return -1; }
  expisen1(SPg);
  
  kappa = SPg.kappa;
  
  return kappa;
}
