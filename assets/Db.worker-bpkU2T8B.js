var ic=Object.defineProperty;var ui=nt=>{throw TypeError(nt)};var oc=(nt,ot,ut)=>ot in nt?ic(nt,ot,{enumerable:!0,configurable:!0,writable:!0,value:ut}):nt[ot]=ut;var jr=(nt,ot,ut)=>oc(nt,typeof ot!="symbol"?ot+"":ot,ut),qn=(nt,ot,ut)=>ot.has(nt)||ui("Cannot "+ut);var ye=(nt,ot,ut)=>(qn(nt,ot,"read from private field"),ut?ut.call(nt):ot.get(nt)),wt=(nt,ot,ut)=>ot.has(nt)?ui("Cannot add the same private member more than once"):ot instanceof WeakSet?ot.add(nt):ot.set(nt,ut),At=(nt,ot,ut,ve)=>(qn(nt,ot,"write to private field"),ve?ve.call(nt,ut):ot.set(nt,ut),ut),Mr=(nt,ot,ut)=>(qn(nt,ot,"access private method"),ut);(function(){"use strict";const nt=n=>n.length>0,ot=n=>n.length>0,ut=(n,s)=>{throw new Error(s)},ve=n=>({ok:!0,value:n}),Ee=n=>({ok:!1,error:n}),Jt=n=>{if(n.ok)return n.value;throw new Error(`Result error: ${JSON.stringify(n.error)}`)},vn=(n,s)=>{try{return ve(n())}catch(l){return Ee(s(l))}};/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */if(!(new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68))throw new Error("Non little-endian hardware is not supported");const Lt={_0:48,_9:57,A:65,F:70,a:97,f:102};function En(n){if(n>=Lt._0&&n<=Lt._9)return n-Lt._0;if(n>=Lt.A&&n<=Lt.F)return n-(Lt.A-10);if(n>=Lt.a&&n<=Lt.f)return n-(Lt.a-10)}function Sn(n){if(typeof n!="string")throw new Error("hex string expected, got "+typeof n);const s=n.length,l=s/2;if(s%2)throw new Error("hex string expected, got unpadded hex of length "+s);const r=new Uint8Array(l);for(let _=0,h=0;_<l;_++,h+=2){const g=En(n.charCodeAt(h)),T=En(n.charCodeAt(h+1));if(g===void 0||T===void 0){const W=n[h]+n[h+1];throw new Error('hex string expected, got non-hex character "'+W+'" at index '+h)}r[_]=g*16+T}return r}let _i=class fi{constructor(s){jr(this,"value");jr(this,"length");this.value=s?new globalThis.Uint8Array(s):new globalThis.Uint8Array(512),this.length=s?s.length:0}unwrap(){return this.value.subarray(0,this.length)}getCapacity(){return this.value.length}getLength(){return this.length}extend(s){const l=s instanceof fi?s.unwrap():s,r=l.length+this.length;if(this.value.length<r){const _=this.value,h=Math.max(this.value.length*2,r);this.value=new globalThis.Uint8Array(h),this.value.set(_)}return this.value.set(l,this.length),this.length=this.length+l.length,this}shift(){if(this.length===0)return Ee({type:"BufferParseEndedPrematurelyError"});const s=this.value[0];return this.value=this.value.subarray(1),this.length--,ve(s)}shiftN(s){if(this.length<s)return Ee({type:"BufferParseEndedPrematurelyError"});const l=this.value.subarray(0,s);return this.value=this.value.subarray(s),this.length=this.length-s,ve(l)}};const kn=n=>{const s=l=>Object.getOwnPropertyNames(l).reduce((_,h)=>{const g=l[h];return h==="cause"&&g instanceof Error?_[h]=s(g):typeof g!="function"&&(_[h]=g),_},{});if(n instanceof Error)return{type:"TransferableError",error:s(n)};try{return{type:"TransferableError",error:structuredClone(n)}}catch{try{return{type:"TransferableError",error:String(n)}}catch{return{type:"TransferableError",error:"[Unserializable Object]"}}}};let di="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",hi=n=>crypto.getRandomValues(new Uint8Array(n)),pi=(n,s,l)=>{let r=(2<<Math.log(n.length-1)/Math.LN2)-1,_=-~(1.6*r*s/n.length);return(h=s)=>{let g="";for(;;){let T=l(_),W=_|0;for(;W--;)if(g+=n[T[W]&r]||"",g.length===h)return g}}},mi=(n,s=21)=>pi(n,s,hi),An=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((s,l)=>(l&=63,l<36?s+=l.toString(36):l<62?s+=(l-26).toString(36).toUpperCase():l>62?s+="-":s+="_",s),"");const In=n=>Object.prototype.toString.call(n)==="[object Object]",gi=n=>Object.entries(n),bi=(n,s)=>{if(n.byteLength>s.byteLength)return 1;if(n.byteLength<s.byteLength)return-1;for(let l=0;l<n.byteLength;l++){if(n[l]<s[l])return-1;if(n[l]>s[l])return 1}return 0};function Xt(n){if(!Number.isSafeInteger(n)||n<0)throw new Error("positive integer expected, got "+n)}function yi(n){return n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"}function pr(n,...s){if(!yi(n))throw new Error("Uint8Array expected");if(s.length>0&&!s.includes(n.length))throw new Error("Uint8Array expected of length "+s+", got length="+n.length)}function Tn(n){if(typeof n!="function"||typeof n.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Xt(n.outputLen),Xt(n.blockLen)}function mr(n,s=!0){if(n.destroyed)throw new Error("Hash instance has been destroyed");if(s&&n.finished)throw new Error("Hash#digest() has already been called")}function wi(n,s){pr(n);const l=s.outputLen;if(n.length<l)throw new Error("digestInto() expects output buffer of length at least "+l)}const Yt=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function gr(n){return new DataView(n.buffer,n.byteOffset,n.byteLength)}function It(n,s){return n<<32-s|n>>>s}function xi(n){if(typeof n!="string")throw new Error("utf8ToBytes expected string, got "+typeof n);return new Uint8Array(new TextEncoder().encode(n))}function lr(n){return typeof n=="string"&&(n=xi(n)),pr(n),n}class Fn{clone(){return this._cloneInto()}}function qi(n,s){if(s!==void 0&&{}.toString.call(s)!=="[object Object]")throw new Error("Options should be object or undefined");return Object.assign(n,s)}function On(n){const s=r=>n().update(lr(r)).digest(),l=n();return s.outputLen=l.outputLen,s.blockLen=l.blockLen,s.create=()=>n(),s}function vi(n=32){if(Yt&&typeof Yt.getRandomValues=="function")return Yt.getRandomValues(new Uint8Array(n));if(Yt&&typeof Yt.randomBytes=="function")return Yt.randomBytes(n);throw new Error("crypto.getRandomValues must be defined")}class Pn extends Fn{constructor(s,l){super(),this.finished=!1,this.destroyed=!1,Tn(s);const r=lr(l);if(this.iHash=s.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const _=this.blockLen,h=new Uint8Array(_);h.set(r.length>_?s.create().update(r).digest():r);for(let g=0;g<h.length;g++)h[g]^=54;this.iHash.update(h),this.oHash=s.create();for(let g=0;g<h.length;g++)h[g]^=106;this.oHash.update(h),h.fill(0)}update(s){return mr(this),this.iHash.update(s),this}digestInto(s){mr(this),pr(s,this.outputLen),this.finished=!0,this.iHash.digestInto(s),this.oHash.update(s),this.oHash.digestInto(s),this.destroy()}digest(){const s=new Uint8Array(this.oHash.outputLen);return this.digestInto(s),s}_cloneInto(s){s||(s=Object.create(Object.getPrototypeOf(this),{}));const{oHash:l,iHash:r,finished:_,destroyed:h,blockLen:g,outputLen:T}=this;return s=s,s.finished=_,s.destroyed=h,s.blockLen=g,s.outputLen=T,s.oHash=l._cloneInto(s.oHash),s.iHash=r._cloneInto(s.iHash),s}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const br=(n,s,l)=>new Pn(n,s).update(l).digest();br.create=(n,s)=>new Pn(n,s);function Ei(n,s,l,r){Tn(n);const _=qi({dkLen:32,asyncTick:10},r),{c:h,dkLen:g,asyncTick:T}=_;if(Xt(h),Xt(g),Xt(T),h<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const W=lr(s),ie=lr(l),fe=new Uint8Array(g),L=br.create(n,W),se=L._cloneInto().update(ie);return{c:h,dkLen:g,asyncTick:T,DK:fe,PRF:L,PRFSalt:se}}function Si(n,s,l,r,_){return n.destroy(),s.destroy(),r&&r.destroy(),_.fill(0),l}function ki(n,s,l,r){const{c:_,dkLen:h,DK:g,PRF:T,PRFSalt:W}=Ei(n,s,l,r);let ie;const fe=new Uint8Array(4),L=gr(fe),se=new Uint8Array(T.outputLen);for(let we=1,ke=0;ke<h;we++,ke+=T.outputLen){const Fe=g.subarray(ke,ke+T.outputLen);L.setInt32(0,we,!1),(ie=W._cloneInto(ie)).update(fe).digestInto(se),Fe.set(se.subarray(0,Fe.length));for(let Le=1;Le<_;Le++){T._cloneInto(ie).update(se).digestInto(se);for(let et=0;et<Fe.length;et++)Fe[et]^=se[et]}}return Si(T,W,g,ie,se)}function Ai(n,s,l,r){if(typeof n.setBigUint64=="function")return n.setBigUint64(s,l,r);const _=BigInt(32),h=BigInt(4294967295),g=Number(l>>_&h),T=Number(l&h),W=r?4:0,ie=r?0:4;n.setUint32(s+W,g,r),n.setUint32(s+ie,T,r)}function Ii(n,s,l){return n&s^~n&l}function Ti(n,s,l){return n&s^n&l^s&l}class Ln extends Fn{constructor(s,l,r,_){super(),this.blockLen=s,this.outputLen=l,this.padOffset=r,this.isLE=_,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(s),this.view=gr(this.buffer)}update(s){mr(this);const{view:l,buffer:r,blockLen:_}=this;s=lr(s);const h=s.length;for(let g=0;g<h;){const T=Math.min(_-this.pos,h-g);if(T===_){const W=gr(s);for(;_<=h-g;g+=_)this.process(W,g);continue}r.set(s.subarray(g,g+T),this.pos),this.pos+=T,g+=T,this.pos===_&&(this.process(l,0),this.pos=0)}return this.length+=s.length,this.roundClean(),this}digestInto(s){mr(this),wi(s,this),this.finished=!0;const{buffer:l,view:r,blockLen:_,isLE:h}=this;let{pos:g}=this;l[g++]=128,this.buffer.subarray(g).fill(0),this.padOffset>_-g&&(this.process(r,0),g=0);for(let L=g;L<_;L++)l[L]=0;Ai(r,_-8,BigInt(this.length*8),h),this.process(r,0);const T=gr(s),W=this.outputLen;if(W%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const ie=W/4,fe=this.get();if(ie>fe.length)throw new Error("_sha2: outputLen bigger than state");for(let L=0;L<ie;L++)T.setUint32(4*L,fe[L],h)}digest(){const{buffer:s,outputLen:l}=this;this.digestInto(s);const r=s.slice(0,l);return this.destroy(),r}_cloneInto(s){s||(s=new this.constructor),s.set(...this.get());const{blockLen:l,buffer:r,length:_,finished:h,destroyed:g,pos:T}=this;return s.length=_,s.pos=T,s.finished=h,s.destroyed=g,_%l&&s.buffer.set(r),s}}const Fi=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),jt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Mt=new Uint32Array(64);class Oi extends Ln{constructor(){super(64,32,8,!1),this.A=jt[0]|0,this.B=jt[1]|0,this.C=jt[2]|0,this.D=jt[3]|0,this.E=jt[4]|0,this.F=jt[5]|0,this.G=jt[6]|0,this.H=jt[7]|0}get(){const{A:s,B:l,C:r,D:_,E:h,F:g,G:T,H:W}=this;return[s,l,r,_,h,g,T,W]}set(s,l,r,_,h,g,T,W){this.A=s|0,this.B=l|0,this.C=r|0,this.D=_|0,this.E=h|0,this.F=g|0,this.G=T|0,this.H=W|0}process(s,l){for(let L=0;L<16;L++,l+=4)Mt[L]=s.getUint32(l,!1);for(let L=16;L<64;L++){const se=Mt[L-15],we=Mt[L-2],ke=It(se,7)^It(se,18)^se>>>3,Fe=It(we,17)^It(we,19)^we>>>10;Mt[L]=Fe+Mt[L-7]+ke+Mt[L-16]|0}let{A:r,B:_,C:h,D:g,E:T,F:W,G:ie,H:fe}=this;for(let L=0;L<64;L++){const se=It(T,6)^It(T,11)^It(T,25),we=fe+se+Ii(T,W,ie)+Fi[L]+Mt[L]|0,Fe=(It(r,2)^It(r,13)^It(r,22))+Ti(r,_,h)|0;fe=ie,ie=W,W=T,T=g+we|0,g=h,h=_,_=r,r=we+Fe|0}r=r+this.A|0,_=_+this.B|0,h=h+this.C|0,g=g+this.D|0,T=T+this.E|0,W=W+this.F|0,ie=ie+this.G|0,fe=fe+this.H|0,this.set(r,_,h,g,T,W,ie,fe)}roundClean(){Mt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Cn=On(()=>new Oi),yr=BigInt(2**32-1),Hr=BigInt(32);function Rn(n,s=!1){return s?{h:Number(n&yr),l:Number(n>>Hr&yr)}:{h:Number(n>>Hr&yr)|0,l:Number(n&yr)|0}}function Pi(n,s=!1){let l=new Uint32Array(n.length),r=new Uint32Array(n.length);for(let _=0;_<n.length;_++){const{h,l:g}=Rn(n[_],s);[l[_],r[_]]=[h,g]}return[l,r]}const Li=(n,s)=>BigInt(n>>>0)<<Hr|BigInt(s>>>0),Ci=(n,s,l)=>n>>>l,Ri=(n,s,l)=>n<<32-l|s>>>l,Ni=(n,s,l)=>n>>>l|s<<32-l,Di=(n,s,l)=>n<<32-l|s>>>l,Bi=(n,s,l)=>n<<64-l|s>>>l-32,Ui=(n,s,l)=>n>>>l-32|s<<64-l,ji=(n,s)=>s,Mi=(n,s)=>n,zi=(n,s,l)=>n<<l|s>>>32-l,Hi=(n,s,l)=>s<<l|n>>>32-l,$i=(n,s,l)=>s<<l-32|n>>>64-l,Wi=(n,s,l)=>n<<l-32|s>>>64-l;function Qi(n,s,l,r){const _=(s>>>0)+(r>>>0);return{h:n+l+(_/2**32|0)|0,l:_|0}}const Ue={fromBig:Rn,split:Pi,toBig:Li,shrSH:Ci,shrSL:Ri,rotrSH:Ni,rotrSL:Di,rotrBH:Bi,rotrBL:Ui,rotr32H:ji,rotr32L:Mi,rotlSH:zi,rotlSL:Hi,rotlBH:$i,rotlBL:Wi,add:Qi,add3L:(n,s,l)=>(n>>>0)+(s>>>0)+(l>>>0),add3H:(n,s,l,r)=>s+l+r+(n/2**32|0)|0,add4L:(n,s,l,r)=>(n>>>0)+(s>>>0)+(l>>>0)+(r>>>0),add4H:(n,s,l,r,_)=>s+l+r+_+(n/2**32|0)|0,add5H:(n,s,l,r,_,h)=>s+l+r+_+h+(n/2**32|0)|0,add5L:(n,s,l,r,_)=>(n>>>0)+(s>>>0)+(l>>>0)+(r>>>0)+(_>>>0)},[Vi,Gi]=Ue.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(n=>BigInt(n))),zt=new Uint32Array(80),Ht=new Uint32Array(80);class Ki extends Ln{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:s,Al:l,Bh:r,Bl:_,Ch:h,Cl:g,Dh:T,Dl:W,Eh:ie,El:fe,Fh:L,Fl:se,Gh:we,Gl:ke,Hh:Fe,Hl:Le}=this;return[s,l,r,_,h,g,T,W,ie,fe,L,se,we,ke,Fe,Le]}set(s,l,r,_,h,g,T,W,ie,fe,L,se,we,ke,Fe,Le){this.Ah=s|0,this.Al=l|0,this.Bh=r|0,this.Bl=_|0,this.Ch=h|0,this.Cl=g|0,this.Dh=T|0,this.Dl=W|0,this.Eh=ie|0,this.El=fe|0,this.Fh=L|0,this.Fl=se|0,this.Gh=we|0,this.Gl=ke|0,this.Hh=Fe|0,this.Hl=Le|0}process(s,l){for(let Pe=0;Pe<16;Pe++,l+=4)zt[Pe]=s.getUint32(l),Ht[Pe]=s.getUint32(l+=4);for(let Pe=16;Pe<80;Pe++){const Me=zt[Pe-15]|0,rt=Ht[Pe-15]|0,xt=Ue.rotrSH(Me,rt,1)^Ue.rotrSH(Me,rt,8)^Ue.shrSH(Me,rt,7),St=Ue.rotrSL(Me,rt,1)^Ue.rotrSL(Me,rt,8)^Ue.shrSL(Me,rt,7),Oe=zt[Pe-2]|0,$e=Ht[Pe-2]|0,ht=Ue.rotrSH(Oe,$e,19)^Ue.rotrBH(Oe,$e,61)^Ue.shrSH(Oe,$e,6),Rt=Ue.rotrSL(Oe,$e,19)^Ue.rotrBL(Oe,$e,61)^Ue.shrSL(Oe,$e,6),Vt=Ue.add4L(St,Rt,Ht[Pe-7],Ht[Pe-16]),H=Ue.add4H(Vt,xt,ht,zt[Pe-7],zt[Pe-16]);zt[Pe]=H|0,Ht[Pe]=Vt|0}let{Ah:r,Al:_,Bh:h,Bl:g,Ch:T,Cl:W,Dh:ie,Dl:fe,Eh:L,El:se,Fh:we,Fl:ke,Gh:Fe,Gl:Le,Hh:et,Hl:ct}=this;for(let Pe=0;Pe<80;Pe++){const Me=Ue.rotrSH(L,se,14)^Ue.rotrSH(L,se,18)^Ue.rotrBH(L,se,41),rt=Ue.rotrSL(L,se,14)^Ue.rotrSL(L,se,18)^Ue.rotrBL(L,se,41),xt=L&we^~L&Fe,St=se&ke^~se&Le,Oe=Ue.add5L(ct,rt,St,Gi[Pe],Ht[Pe]),$e=Ue.add5H(Oe,et,Me,xt,Vi[Pe],zt[Pe]),ht=Oe|0,Rt=Ue.rotrSH(r,_,28)^Ue.rotrBH(r,_,34)^Ue.rotrBH(r,_,39),Vt=Ue.rotrSL(r,_,28)^Ue.rotrBL(r,_,34)^Ue.rotrBL(r,_,39),H=r&h^r&T^h&T,he=_&g^_&W^g&W;et=Fe|0,ct=Le|0,Fe=we|0,Le=ke|0,we=L|0,ke=se|0,{h:L,l:se}=Ue.add(ie|0,fe|0,$e|0,ht|0),ie=T|0,fe=W|0,T=h|0,W=g|0,h=r|0,g=_|0;const ue=Ue.add3L(ht,Vt,he);r=Ue.add3H(ue,$e,Rt,H),_=ue|0}({h:r,l:_}=Ue.add(this.Ah|0,this.Al|0,r|0,_|0)),{h,l:g}=Ue.add(this.Bh|0,this.Bl|0,h|0,g|0),{h:T,l:W}=Ue.add(this.Ch|0,this.Cl|0,T|0,W|0),{h:ie,l:fe}=Ue.add(this.Dh|0,this.Dl|0,ie|0,fe|0),{h:L,l:se}=Ue.add(this.Eh|0,this.El|0,L|0,se|0),{h:we,l:ke}=Ue.add(this.Fh|0,this.Fl|0,we|0,ke|0),{h:Fe,l:Le}=Ue.add(this.Gh|0,this.Gl|0,Fe|0,Le|0),{h:et,l:ct}=Ue.add(this.Hh|0,this.Hl|0,et|0,ct|0),this.set(r,_,h,g,T,W,ie,fe,L,se,we,ke,Fe,Le,et,ct)}roundClean(){zt.fill(0),Ht.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const $r=On(()=>new Ki);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function wr(n){return n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"}function Nn(n,s){return Array.isArray(s)?s.length===0?!0:n?s.every(l=>typeof l=="string"):s.every(l=>Number.isSafeInteger(l)):!1}function Ji(n){if(typeof n!="function")throw new Error("function expected");return!0}function xr(n,s){if(typeof s!="string")throw new Error(`${n}: string expected`);return!0}function Zt(n){if(!Number.isSafeInteger(n))throw new Error(`invalid integer: ${n}`)}function qr(n){if(!Array.isArray(n))throw new Error("array expected")}function vr(n,s){if(!Nn(!0,s))throw new Error(`${n}: array of strings expected`)}function Dn(n,s){if(!Nn(!1,s))throw new Error(`${n}: array of numbers expected`)}function Xi(...n){const s=h=>h,l=(h,g)=>T=>h(g(T)),r=n.map(h=>h.encode).reduceRight(l,s),_=n.map(h=>h.decode).reduce(l,s);return{encode:r,decode:_}}function Yi(n){const s=typeof n=="string"?n.split(""):n,l=s.length;vr("alphabet",s);const r=new Map(s.map((_,h)=>[_,h]));return{encode:_=>(qr(_),_.map(h=>{if(!Number.isSafeInteger(h)||h<0||h>=l)throw new Error(`alphabet.encode: digit index outside alphabet "${h}". Allowed: ${n}`);return s[h]})),decode:_=>(qr(_),_.map(h=>{xr("alphabet.decode",h);const g=r.get(h);if(g===void 0)throw new Error(`Unknown letter: "${h}". Allowed: ${n}`);return g}))}}function Zi(n=""){return xr("join",n),{encode:s=>(vr("join.decode",s),s.join(n)),decode:s=>(xr("join.decode",s),s.split(n))}}function eo(n,s="="){return Zt(n),xr("padding",s),{encode(l){for(vr("padding.encode",l);l.length*n%8;)l.push(s);return l},decode(l){vr("padding.decode",l);let r=l.length;if(r*n%8)throw new Error("padding: invalid, string should have whole number of bytes");for(;r>0&&l[r-1]===s;r--)if((r-1)*n%8===0)throw new Error("padding: invalid, string has too much padding");return l.slice(0,r)}}}function Wr(n,s,l){if(s<2)throw new Error(`convertRadix: invalid from=${s}, base cannot be less than 2`);if(l<2)throw new Error(`convertRadix: invalid to=${l}, base cannot be less than 2`);if(qr(n),!n.length)return[];let r=0;const _=[],h=Array.from(n,T=>{if(Zt(T),T<0||T>=s)throw new Error(`invalid integer: ${T}`);return T}),g=h.length;for(;;){let T=0,W=!0;for(let ie=r;ie<g;ie++){const fe=h[ie],L=s*T,se=L+fe;if(!Number.isSafeInteger(se)||L/s!==T||se-fe!==L)throw new Error("convertRadix: carry overflow");const we=se/l;T=se%l;const ke=Math.floor(we);if(h[ie]=ke,!Number.isSafeInteger(ke)||ke*l+T!==se)throw new Error("convertRadix: carry overflow");if(W)ke?W=!1:r=ie;else continue}if(_.push(T),W)break}for(let T=0;T<n.length-1&&n[T]===0;T++)_.push(0);return _.reverse()}const Bn=(n,s)=>s===0?n:Bn(s,n%s),Er=(n,s)=>n+(s-Bn(n,s)),Qr=(()=>{let n=[];for(let s=0;s<40;s++)n.push(2**s);return n})();function Vr(n,s,l,r){if(qr(n),s<=0||s>32)throw new Error(`convertRadix2: wrong from=${s}`);if(l<=0||l>32)throw new Error(`convertRadix2: wrong to=${l}`);if(Er(s,l)>32)throw new Error(`convertRadix2: carry overflow from=${s} to=${l} carryBits=${Er(s,l)}`);let _=0,h=0;const g=Qr[s],T=Qr[l]-1,W=[];for(const ie of n){if(Zt(ie),ie>=g)throw new Error(`convertRadix2: invalid data word=${ie} from=${s}`);if(_=_<<s|ie,h+s>32)throw new Error(`convertRadix2: carry overflow pos=${h} from=${s}`);for(h+=s;h>=l;h-=l)W.push((_>>h-l&T)>>>0);const fe=Qr[h];if(fe===void 0)throw new Error("invalid carry");_&=fe-1}if(_=_<<l-h&T,!r&&h>=s)throw new Error("Excess padding");if(!r&&_>0)throw new Error(`Non-zero padding: ${_}`);return r&&h>0&&W.push(_>>>0),W}function to(n){Zt(n);const s=2**8;return{encode:l=>{if(!wr(l))throw new Error("radix.encode input should be Uint8Array");return Wr(Array.from(l),s,n)},decode:l=>(Dn("radix.decode",l),Uint8Array.from(Wr(l,n,s)))}}function ro(n,s=!1){if(Zt(n),n<=0||n>32)throw new Error("radix2: bits should be in (0..32]");if(Er(8,n)>32||Er(n,8)>32)throw new Error("radix2: carry overflow");return{encode:l=>{if(!wr(l))throw new Error("radix2.encode input should be Uint8Array");return Vr(Array.from(l),8,n,!s)},decode:l=>(Dn("radix2.decode",l),Uint8Array.from(Vr(l,n,8,s)))}}function no(n,s){return Zt(n),Ji(s),{encode(l){if(!wr(l))throw new Error("checksum.encode: input should be Uint8Array");const r=s(l).slice(0,n),_=new Uint8Array(l.length+n);return _.set(l),_.set(r,l.length),_},decode(l){if(!wr(l))throw new Error("checksum.decode: input should be Uint8Array");const r=l.slice(0,-n),_=l.slice(-n),h=s(r).slice(0,n);for(let g=0;g<n;g++)if(h[g]!==_[g])throw new Error("Invalid checksum");return r}}}const Sr={alphabet:Yi,chain:Xi,checksum:no,convertRadix:Wr,convertRadix2:Vr,radix:to,radix2:ro,join:Zi,padding:eo};/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const so=n=>n[0]==="あいこくしん";function Un(n){if(typeof n!="string")throw new TypeError("invalid mnemonic type: "+typeof n);return n.normalize("NFKD")}function jn(n){const s=Un(n),l=s.split(" ");if(![12,15,18,21,24].includes(l.length))throw new Error("Invalid mnemonic");return{nfkd:s,words:l}}function Mn(n){pr(n,16,20,24,28,32)}function io(n,s=128){if(Xt(s),s%32!==0||s>256)throw new TypeError("Invalid entropy");return lo(vi(s/8),n)}const oo=n=>{const s=8-n.length/4;return new Uint8Array([Cn(n)[0]>>s<<s])};function zn(n){if(!Array.isArray(n)||n.length!==2048||typeof n[0]!="string")throw new Error("Wordlist: expected array of 2048 strings");return n.forEach(s=>{if(typeof s!="string")throw new Error("wordlist: non-string element: "+s)}),Sr.chain(Sr.checksum(1,oo),Sr.radix2(11,!0),Sr.alphabet(n))}function ao(n,s){const{words:l}=jn(n),r=zn(s).decode(l);return Mn(r),r}function lo(n,s){return Mn(n),zn(s).encode(n).join(so(s)?"　":" ")}function co(n,s){try{ao(n,s)}catch{return!1}return!0}const uo=n=>Un("mnemonic"+n);function fo(n,s=""){return ki($r,jn(n).nfkd,uo(s),{c:2048,dkLen:64})}const Hn=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`),$n=n=>{throw new Error(`exhaustiveCheck unhandled case: ${JSON.stringify(n)}`)},er=n=>n,kr=()=>{},Gr=Symbol("evolu.Type"),Wn=n=>typeof n=="object"&&n!==null&&Gr in n,$t=(n,s)=>({...s,name:n,is:l=>s.fromUnknown(l).ok,from:s.fromUnknown,[Gr]:!0,Type:void 0,Input:void 0,Error:void 0,Parent:void 0,ParentError:void 0,Errors:void 0}),kt=(n,s)=>$t(n,{fromUnknown:s,to:er,fromParent:ve,toParent:er});kt("Unknown",ve);const ft=kt("String",n=>typeof n=="string"?ve(n):Ee({type:"String",value:n})),Tt=kt("Number",n=>typeof n=="number"?ve(n):Ee({type:"Number",value:n})),Qn=kt("BigInt",n=>typeof n=="bigint"?ve(n):Ee({type:"BigInt",value:n})),Vn=kt("Boolean",n=>typeof n=="boolean"?ve(n):Ee({type:"Boolean",value:n}));kt("Undefined",n=>n===void 0?ve(n):Ee({type:"Undefined",value:n}));const Gn=kt("Null",n=>n===null?ve(n):Ee({type:"Null",value:n}));kt("Function",n=>typeof n=="function"?ve(n):Ee({type:"Function",value:n}));const Kn=kt("Uint8Array",n=>n instanceof globalThis.Uint8Array?ve(n):Ee({type:"Uint8Array",value:n})),_o=(n=>({...kt("InstanceOf",s=>s instanceof n?ve(s):Ee({type:"InstanceOf",value:s,ctor:n.name})),ctor:n}))(globalThis.Date);kt("EvoluType",n=>Wn(n)?ve(n):Ee({type:"EvoluType",value:n}));function Ze(n,s,l){return{...$t("Brand",{fromUnknown:l?_=>{const h=s.fromUnknown(_);return h.ok?l(h.value):h}:_=>{const h=s.fromUnknown(_);return h.ok?ve(h.value):Ee({type:n,value:_,parentError:h.error})},to:er,fromParent:l??ve,toParent:er}),brand:n,parentType:s}}Ze("CurrencyCode",ft,n=>/^[A-Z]{3}$/.test(n)?ve(n):Ee({type:"CurrencyCode",value:n}));const Jn=Ze("DateIso",ft,n=>n.length!==24?Ee({type:"DateIsoString",value:n}):isNaN(globalThis.Date.parse(n))?Ee({type:"DateIsoString",value:n}):ve(n)),Xn=n=>Ze("Trimmed",n,s=>s.trim().length===s.length?ve(s):Ee({type:"Trimmed",value:s})),ho=n=>nr(n,Xn(n),s=>ve(s.trim()),s=>s),Kr=Xn(ft),tr=n=>s=>Ze(`MinLength${n}`,s,l=>l.length>=n?ve(l):Ee({type:"MinLength",value:l,min:n})),cr=n=>s=>Ze(`MaxLength${n}`,s,l=>l.length<=n?ve(l):Ee({type:"MaxLength",value:l,max:n})),po=n=>s=>Ze(`Length${n}`,s,l=>l.length===n?ve(l):Ee({type:"Length",value:l,exact:n}));tr(1)(ft);const mo=cr(1e3)(ft);tr(1)(mo);const Yn=tr(1)(Kr),go=cr(1e3)(Kr);tr(1)(go);const bo=Ze("Mnemonic",Yn,n=>co(n,Hn)?ve(n):Ee({type:"Mnemonic",value:n})),Ar=(n,s)=>{const l=new RegExp(s.source,s.flags);return r=>Ze(n,r,_=>(l.lastIndex=0,l.test(_)?ve(_):Ee({type:"Regex",name:n,value:_,pattern:s})))},Zn=Ar("Base64Url",/^[A-Za-z0-9_-]+$/)(ft);Ar("NanoId",/^[A-Za-z0-9_-]{21}$/)(ft),Ze("SimplePassword",tr(8)(cr(64)(Kr)));const yo=Ar("Id",/^[A-Za-z0-9_-]{21}$/)(ft),es=n=>Ze("Positive",n,s=>s>0?ve(s):Ee({type:"Positive",value:s}));es(Tt),(n=>Ze("Negative",n,s=>s<0?ve(s):Ee({type:"Negative",value:s})))(Tt),(n=>Ze("NonPositive",n,s=>s<=0?ve(s):Ee({type:"NonPositive",value:s})))(Tt);const ts=n=>Ze("NonNegative",n,s=>s>=0?ve(s):Ee({type:"NonNegative",value:s}));ts(Tt);const rs=(n=>Ze("Int",n,s=>globalThis.Number.isSafeInteger(s)?ve(s):Ee({type:"Int",value:s})))(Tt);es(rs);const rr=ts(rs),ns=n=>s=>Ze(`LessThanOrEqualTo${n}`,s,l=>l<=n?ve(l):Ee({type:"LessThanOrEqualTo",value:l,max:n}));(n=>Ze("NonNaN",n,s=>globalThis.Number.isNaN(s)?Ee({type:"NonNaN",value:s}):ve(s)))(Tt);const Jr=(n=>Ze("Finite",n,s=>globalThis.Number.isFinite(s)?ve(s):Ee({type:"Finite",value:s})))(Tt);((n,s)=>l=>Ze(`Between${n}-${s}`,l,r=>r>=n&&r<=s?ve(r):Ee({type:"Between",value:r,min:n,max:s})))(1,10)(Tt);const wo=n=>({...$t("Literal",{fromUnknown:l=>l===n?ve(n):Ee({type:"Literal",value:l,expected:n}),to:er,fromParent:ve,toParent:er}),expected:n}),nr=(n,s,l,r)=>({...$t("Transform",{fromUnknown:g=>{const T=n.fromUnknown(g);return T.ok?l(T.value):T},to:g=>n.to(r(g)),fromParent:l,toParent:r}),is:s.is,fromType:n,toType:s});ho(ft),nr(_o,Jn,n=>Jn.fromParent(n.toISOString()),n=>new globalThis.Date(n)),nr(Yn,Jr,n=>{const s=Jr.fromParent(globalThis.Number(n));return s.ok?s:Ee({type:"NumberFromString",value:n})},n=>n.toString());const xo=n=>({...$t("Array",{fromUnknown:h=>{if(!Array.isArray(h))return Ee({type:"Array",value:h,reason:{kind:"NotArray"}});const g=[];for(let T=0;T<h.length;T++){const W=n.fromUnknown(h[T]);if(!W.ok)return Ee({type:"Array",value:h,reason:{kind:"Element",index:T,error:W.error}});g.push(W.value)}return ve(g)},to:h=>h.map(n.to),fromParent:h=>{const g=[];for(let T=0;T<h.length;T++){const W=n.fromParent(h[T]);if(!W.ok)return Ee({type:"Array",value:h,reason:{kind:"Element",index:T,error:W.error}});g.push(W.value)}return ve(g)},toParent:h=>h.map(n.toParent)}),element:n}),qo=(n,s)=>({...$t("Record",{fromUnknown:g=>{if(!In(g))return Ee({type:"Record",value:g,reason:{kind:"NotRecord"}});const T={};for(const[W,ie]of Object.entries(g)){const fe=n.fromUnknown(W);if(!fe.ok)return Ee({type:"Record",value:g,reason:{kind:"Key",key:W,error:fe.error}});const L=s.fromUnknown(ie);if(!L.ok)return Ee({type:"Record",value:g,reason:{kind:"Value",key:W,error:L.error}});T[fe.value]=L.value}return ve(T)},to:g=>Object.fromEntries(Object.entries(g).map(([T,W])=>[n.to(T),s.to(W)])),fromParent:g=>{const T={};for(const[W,ie]of Object.entries(g)){const fe=n.fromParent(W);if(!fe.ok)return Ee({type:"Record",value:g,reason:{kind:"Key",key:W,error:fe.error}});const L=s.fromParent(ie);if(!L.ok)return Ee({type:"Record",value:g,reason:{kind:"Value",key:fe.value,error:L.error}});T[fe.value]=L.value}return ve(T)},toParent:g=>Object.fromEntries(Object.entries(g).map(([T,W])=>[n.toParent(T),s.toParent(W)]))}),key:n,value:s});function Xr(n,s){const l=Object.keys(n);return{...$t("Object",{fromUnknown:T=>{if(!In(T))return Ee({type:"Object",value:T,reason:{kind:"NotObject"}});const W={},ie={};for(const L of l){if(!(L in T)&&Ir(n[L]))continue;const se=n[L].fromUnknown(T[L]);se.ok?ie[L]=se.value:W[L]=se.error}const fe=Object.keys(T).filter(L=>!l.includes(L));return fe.length>0?Ee({type:"Object",value:T,reason:{kind:"ExtraKeys",extraKeys:fe}}):Object.keys(W).length>0?Ee({type:"Object",value:T,reason:{kind:"Props",errors:W}}):ve(ie)},to:T=>{const W=[];for(const ie of l)!(ie in T)&&Ir(n[ie])||W.push([ie,n[ie].to(T[ie])]);return Object.fromEntries(W)},fromParent:T=>{const W={},ie={};for(const fe of l){if(!(fe in T)&&Ir(n[fe]))continue;const L=n[fe].fromParent(T[fe]);L.ok?ie[fe]=L.value:W[fe]=L.error}return Object.keys(W).length>0?Ee({type:"Object",value:T,reason:{kind:"Props",errors:W}}):ve(ie)},toParent:T=>{const W=[];for(const ie of l)!(ie in T)&&Ir(n[ie])||W.push([ie,n[ie].toParent(T[ie])]);return Object.fromEntries(W)}}),props:n}}function Yr(...n){const s=n.map(_=>Wn(_)?_:wo(_)),l=_=>{const h=[];for(const g of s){const T=g.fromUnknown(_);if(T.ok)return T;h.push(T.error)}return Ee({type:"Union",value:_,errors:h})},r=_=>{for(const h of s)if(h.is(_))return h.to(_);ut(!1,"No matching member found in Union Type `to` function")};return{...$t("Union",{fromUnknown:l,to:r,fromParent:l,toParent:r}),members:s}}const vo=n=>{let s;return{name:"Recursive",from:l=>(s||(s=n()),s.from(l)),fromUnknown:l=>(s||(s=n()),s.fromUnknown(l)),to:l=>(s||(s=n()),s.to(l)),fromParent:l=>(s||(s=n()),s.fromParent(l)),toParent:l=>(s||(s=n()),s.toParent(l)),is:l=>(s||(s=n()),s.is(l)),[Gr]:!0,getParentType:()=>(s||(s=n()),s)}},Eo=Ze("Int64",Qn,n=>n>=-9223372036854775808n&&n<=9223372036854775807n?ve(n):Ee({type:"Int64",value:n})),So=nr(ft,Qn,n=>vn(()=>globalThis.BigInt(n),()=>({type:"BigIntFromString",value:n})),n=>n.toString());Ze("Int64",ft,n=>So.fromParent(n).ok&&Eo.fromParent(globalThis.BigInt(n)).ok?ve(n):Ee({type:"Int64String",value:n}));const Zr=vo(()=>Yr(ft,Jr,Vn,Gn,ko,Ao)),ko=xo(Zr),Ao=qo(ft,Zr),Io=nr(ft,Zr,n=>vn(()=>JSON.parse(n),s=>({type:"JsonValueFromString",value:n,message:globalThis.String(s)})),n=>JSON.stringify(n));Ze("Json",ft,n=>{const s=Io.fromParent(n);return s.ok?ve(n):Ee({type:"Json",value:n,message:s.error.message})});const Ir=n=>typeof n=="object"&&n!=null&&"name"in n&&n.name==="Optional",To=(n,s)=>{if(n===void 0)return[{op:"replaceAll",value:s}];if(n.length!==s.length)return[{op:"replaceAll",value:s}];const l=n.length,r=[];for(let _=0;_<l;_++){const h=n[_],g=s[_];for(const T in h)if(!Fo(h[T],g[T])){r.push({op:"replaceAt",value:g,index:_});break}}return l>0&&r.length===l?[{op:"replaceAll",value:s}]:r},Fo=(n,s)=>n instanceof Uint8Array&&s instanceof Uint8Array?bi(n,s)===0:n===s;An(),cr(256)(Zn),nr(Vn,Yr(0,1),n=>ve(n?1:0),n=>n===1);const ss=tr(1)(cr(42)(Zn));Ze("TableName",ss),Ze("ColumnName",ss),Yr(Gn,ft,Tt,Kn);const Oo=Ze("OwnerId",yo),Po=Ze("EncryptionKey",po(32)(Kn)),is=Ar("NodeId",/^[a-f0-9]{16}$/)(ft);Xr({mnemonic:bo,id:Oo,encryptionKey:Po,protocolVersion:Tt,nodeId:is});var en;try{en=new TextDecoder}catch{}var me,Ft,R=0,st={},Qe,Wt,vt=0,Ot=0,_t,Ct,yt=[],He,os={useRecords:!1,mapsAsObjects:!0};class as{}const ls=new as;ls.name="MessagePack 0xC1";var Qt=!1,cs=2,Lo;try{new Function("")}catch{cs=1/0}class ur{constructor(s){s&&(s.useRecords===!1&&s.mapsAsObjects===void 0&&(s.mapsAsObjects=!0),s.sequential&&s.trusted!==!1&&(s.trusted=!0,!s.structures&&s.useRecords!=!1&&(s.structures=[],s.maxSharedStructures||(s.maxSharedStructures=0))),s.structures?s.structures.sharedLength=s.structures.length:s.getStructures&&((s.structures=[]).uninitialized=!0,s.structures.sharedLength=0),s.int64AsNumber&&(s.int64AsType="number")),Object.assign(this,s)}unpack(s,l){if(me)return qs(()=>(on(),this?this.unpack(s,l):ur.prototype.unpack.call(os,s,l)));!s.buffer&&s.constructor===ArrayBuffer&&(s=typeof Buffer<"u"?Buffer.from(s):new Uint8Array(s)),typeof l=="object"?(Ft=l.end||s.length,R=l.start||0):(R=0,Ft=l>-1?l:s.length),Ot=0,Wt=null,_t=null,me=s;try{He=s.dataView||(s.dataView=new DataView(s.buffer,s.byteOffset,s.byteLength))}catch(r){throw me=null,s instanceof Uint8Array?r:new Error("Source must be a Uint8Array or Buffer but was a "+(s&&typeof s=="object"?s.constructor.name:typeof s))}if(this instanceof ur){if(st=this,this.structures)return Qe=this.structures,Tr(l);(!Qe||Qe.length>0)&&(Qe=[])}else st=os,(!Qe||Qe.length>0)&&(Qe=[]);return Tr(l)}unpackMultiple(s,l){let r,_=0;try{Qt=!0;let h=s.length,g=this?this.unpack(s,h):Fr.unpack(s,h);if(l){if(l(g,_,R)===!1)return;for(;R<h;)if(_=R,l(Tr(),_,R)===!1)return}else{for(r=[g];R<h;)_=R,r.push(Tr());return r}}catch(h){throw h.lastPosition=_,h.values=r,h}finally{Qt=!1,on()}}_mergeStructures(s,l){s=s||[],Object.isFrozen(s)&&(s=s.map(r=>r.slice(0)));for(let r=0,_=s.length;r<_;r++){let h=s[r];h&&(h.isShared=!0,r>=32&&(h.highByte=r-32>>5))}s.sharedLength=s.length;for(let r in l||[])if(r>=0){let _=s[r],h=l[r];h&&(_&&((s.restoreStructures||(s.restoreStructures=[]))[r]=_),s[r]=h)}return this.structures=s}decode(s,l){return this.unpack(s,l)}}function Tr(n){try{if(!st.trusted&&!Qt){let l=Qe.sharedLength||0;l<Qe.length&&(Qe.length=l)}let s;if(st.randomAccessStructure&&me[R]<64&&me[R]>=32&&Lo||(s=lt()),_t&&(R=_t.postBundlePosition,_t=null),Qt&&(Qe.restoreStructures=null),R==Ft)Qe&&Qe.restoreStructures&&us(),Qe=null,me=null,Ct&&(Ct=null);else{if(R>Ft)throw new Error("Unexpected end of MessagePack data");if(!Qt){let l;try{l=JSON.stringify(s,(r,_)=>typeof _=="bigint"?`${_}n`:_).slice(0,100)}catch(r){l="(JSON view not available "+r+")"}throw new Error("Data read, but end of buffer not reached "+l)}}return s}catch(s){throw Qe&&Qe.restoreStructures&&us(),on(),(s instanceof RangeError||s.message.startsWith("Unexpected end of buffer")||R>Ft)&&(s.incomplete=!0),s}}function us(){for(let n in Qe.restoreStructures)Qe[n]=Qe.restoreStructures[n];Qe.restoreStructures=null}function lt(){let n=me[R++];if(n<160)if(n<128){if(n<64)return n;{let s=Qe[n&63]||st.getStructures&&_s()[n&63];return s?(s.read||(s.read=tn(s,n&63)),s.read()):n}}else if(n<144)if(n-=128,st.mapsAsObjects){let s={};for(let l=0;l<n;l++){let r=bs();r==="__proto__"&&(r="__proto_"),s[r]=lt()}return s}else{let s=new Map;for(let l=0;l<n;l++)s.set(lt(),lt());return s}else{n-=144;let s=new Array(n);for(let l=0;l<n;l++)s[l]=lt();return st.freezeData?Object.freeze(s):s}else if(n<192){let s=n-160;if(Ot>=R)return Wt.slice(R-vt,(R+=s)-vt);if(Ot==0&&Ft<140){let l=s<16?nn(s):ps(s);if(l!=null)return l}return rn(s)}else{let s;switch(n){case 192:return null;case 193:return _t?(s=lt(),s>0?_t[1].slice(_t.position1,_t.position1+=s):_t[0].slice(_t.position0,_t.position0-=s)):ls;case 194:return!1;case 195:return!0;case 196:if(s=me[R++],s===void 0)throw new Error("Unexpected end of buffer");return sn(s);case 197:return s=He.getUint16(R),R+=2,sn(s);case 198:return s=He.getUint32(R),R+=4,sn(s);case 199:return Gt(me[R++]);case 200:return s=He.getUint16(R),R+=2,Gt(s);case 201:return s=He.getUint32(R),R+=4,Gt(s);case 202:if(s=He.getFloat32(R),st.useFloat32>2){let l=an[(me[R]&127)<<1|me[R+1]>>7];return R+=4,(l*s+(s>0?.5:-.5)>>0)/l}return R+=4,s;case 203:return s=He.getFloat64(R),R+=8,s;case 204:return me[R++];case 205:return s=He.getUint16(R),R+=2,s;case 206:return s=He.getUint32(R),R+=4,s;case 207:return st.int64AsType==="number"?(s=He.getUint32(R)*4294967296,s+=He.getUint32(R+4)):st.int64AsType==="string"?s=He.getBigUint64(R).toString():st.int64AsType==="auto"?(s=He.getBigUint64(R),s<=BigInt(2)<<BigInt(52)&&(s=Number(s))):s=He.getBigUint64(R),R+=8,s;case 208:return He.getInt8(R++);case 209:return s=He.getInt16(R),R+=2,s;case 210:return s=He.getInt32(R),R+=4,s;case 211:return st.int64AsType==="number"?(s=He.getInt32(R)*4294967296,s+=He.getUint32(R+4)):st.int64AsType==="string"?s=He.getBigInt64(R).toString():st.int64AsType==="auto"?(s=He.getBigInt64(R),s>=BigInt(-2)<<BigInt(52)&&s<=BigInt(2)<<BigInt(52)&&(s=Number(s))):s=He.getBigInt64(R),R+=8,s;case 212:if(s=me[R++],s==114)return ws(me[R++]&63);{let l=yt[s];if(l)return l.read?(R++,l.read(lt())):l.noBuffer?(R++,l()):l(me.subarray(R,++R));throw new Error("Unknown extension "+s)}case 213:return s=me[R],s==114?(R++,ws(me[R++]&63,me[R++])):Gt(2);case 214:return Gt(4);case 215:return Gt(8);case 216:return Gt(16);case 217:return s=me[R++],Ot>=R?Wt.slice(R-vt,(R+=s)-vt):Ro(s);case 218:return s=He.getUint16(R),R+=2,Ot>=R?Wt.slice(R-vt,(R+=s)-vt):No(s);case 219:return s=He.getUint32(R),R+=4,Ot>=R?Wt.slice(R-vt,(R+=s)-vt):Do(s);case 220:return s=He.getUint16(R),R+=2,ds(s);case 221:return s=He.getUint32(R),R+=4,ds(s);case 222:return s=He.getUint16(R),R+=2,hs(s);case 223:return s=He.getUint32(R),R+=4,hs(s);default:if(n>=224)return n-256;if(n===void 0){let l=new Error("Unexpected end of MessagePack data");throw l.incomplete=!0,l}throw new Error("Unknown MessagePack token "+n)}}}const Co=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function tn(n,s){function l(){if(l.count++>cs){let _=n.read=new Function("r","return function(){return "+(st.freezeData?"Object.freeze":"")+"({"+n.map(h=>h==="__proto__"?"__proto_:r()":Co.test(h)?h+":r()":"["+JSON.stringify(h)+"]:r()").join(",")+"})}")(lt);return n.highByte===0&&(n.read=fs(s,n.read)),_()}let r={};for(let _=0,h=n.length;_<h;_++){let g=n[_];g==="__proto__"&&(g="__proto_"),r[g]=lt()}return st.freezeData?Object.freeze(r):r}return l.count=0,n.highByte===0?fs(s,l):l}const fs=(n,s)=>function(){let l=me[R++];if(l===0)return s();let r=n<32?-(n+(l<<5)):n+(l<<5),_=Qe[r]||_s()[r];if(!_)throw new Error("Record id is not defined for "+r);return _.read||(_.read=tn(_,n)),_.read()};function _s(){let n=qs(()=>(me=null,st.getStructures()));return Qe=st._mergeStructures(n,Qe)}var rn=fr,Ro=fr,No=fr,Do=fr;function fr(n){let s;if(n<16&&(s=nn(n)))return s;if(n>64&&en)return en.decode(me.subarray(R,R+=n));const l=R+n,r=[];for(s="";R<l;){const _=me[R++];if((_&128)===0)r.push(_);else if((_&224)===192){const h=me[R++]&63;r.push((_&31)<<6|h)}else if((_&240)===224){const h=me[R++]&63,g=me[R++]&63;r.push((_&31)<<12|h<<6|g)}else if((_&248)===240){const h=me[R++]&63,g=me[R++]&63,T=me[R++]&63;let W=(_&7)<<18|h<<12|g<<6|T;W>65535&&(W-=65536,r.push(W>>>10&1023|55296),W=56320|W&1023),r.push(W)}else r.push(_);r.length>=4096&&(s+=dt.apply(String,r),r.length=0)}return r.length>0&&(s+=dt.apply(String,r)),s}function ds(n){let s=new Array(n);for(let l=0;l<n;l++)s[l]=lt();return st.freezeData?Object.freeze(s):s}function hs(n){if(st.mapsAsObjects){let s={};for(let l=0;l<n;l++){let r=bs();r==="__proto__"&&(r="__proto_"),s[r]=lt()}return s}else{let s=new Map;for(let l=0;l<n;l++)s.set(lt(),lt());return s}}var dt=String.fromCharCode;function ps(n){let s=R,l=new Array(n);for(let r=0;r<n;r++){const _=me[R++];if((_&128)>0){R=s;return}l[r]=_}return dt.apply(String,l)}function nn(n){if(n<4)if(n<2){if(n===0)return"";{let s=me[R++];if((s&128)>1){R-=1;return}return dt(s)}}else{let s=me[R++],l=me[R++];if((s&128)>0||(l&128)>0){R-=2;return}if(n<3)return dt(s,l);let r=me[R++];if((r&128)>0){R-=3;return}return dt(s,l,r)}else{let s=me[R++],l=me[R++],r=me[R++],_=me[R++];if((s&128)>0||(l&128)>0||(r&128)>0||(_&128)>0){R-=4;return}if(n<6){if(n===4)return dt(s,l,r,_);{let h=me[R++];if((h&128)>0){R-=5;return}return dt(s,l,r,_,h)}}else if(n<8){let h=me[R++],g=me[R++];if((h&128)>0||(g&128)>0){R-=6;return}if(n<7)return dt(s,l,r,_,h,g);let T=me[R++];if((T&128)>0){R-=7;return}return dt(s,l,r,_,h,g,T)}else{let h=me[R++],g=me[R++],T=me[R++],W=me[R++];if((h&128)>0||(g&128)>0||(T&128)>0||(W&128)>0){R-=8;return}if(n<10){if(n===8)return dt(s,l,r,_,h,g,T,W);{let ie=me[R++];if((ie&128)>0){R-=9;return}return dt(s,l,r,_,h,g,T,W,ie)}}else if(n<12){let ie=me[R++],fe=me[R++];if((ie&128)>0||(fe&128)>0){R-=10;return}if(n<11)return dt(s,l,r,_,h,g,T,W,ie,fe);let L=me[R++];if((L&128)>0){R-=11;return}return dt(s,l,r,_,h,g,T,W,ie,fe,L)}else{let ie=me[R++],fe=me[R++],L=me[R++],se=me[R++];if((ie&128)>0||(fe&128)>0||(L&128)>0||(se&128)>0){R-=12;return}if(n<14){if(n===12)return dt(s,l,r,_,h,g,T,W,ie,fe,L,se);{let we=me[R++];if((we&128)>0){R-=13;return}return dt(s,l,r,_,h,g,T,W,ie,fe,L,se,we)}}else{let we=me[R++],ke=me[R++];if((we&128)>0||(ke&128)>0){R-=14;return}if(n<15)return dt(s,l,r,_,h,g,T,W,ie,fe,L,se,we,ke);let Fe=me[R++];if((Fe&128)>0){R-=15;return}return dt(s,l,r,_,h,g,T,W,ie,fe,L,se,we,ke,Fe)}}}}}function ms(){let n=me[R++],s;if(n<192)s=n-160;else switch(n){case 217:s=me[R++];break;case 218:s=He.getUint16(R),R+=2;break;case 219:s=He.getUint32(R),R+=4;break;default:throw new Error("Expected string")}return fr(s)}function sn(n){return st.copyBuffers?Uint8Array.prototype.slice.call(me,R,R+=n):me.subarray(R,R+=n)}function Gt(n){let s=me[R++];if(yt[s]){let l;return yt[s](me.subarray(R,l=R+=n),r=>{R=r;try{return lt()}finally{R=l}})}else throw new Error("Unknown extension type "+s)}var gs=new Array(4096);function bs(){let n=me[R++];if(n>=160&&n<192){if(n=n-160,Ot>=R)return Wt.slice(R-vt,(R+=n)-vt);if(!(Ot==0&&Ft<180))return rn(n)}else return R--,ys(lt());let s=(n<<5^(n>1?He.getUint16(R):n>0?me[R]:0))&4095,l=gs[s],r=R,_=R+n-3,h,g=0;if(l&&l.bytes==n){for(;r<_;){if(h=He.getUint32(r),h!=l[g++]){r=1879048192;break}r+=4}for(_+=3;r<_;)if(h=me[r++],h!=l[g++]){r=1879048192;break}if(r===_)return R=r,l.string;_-=3,r=R}for(l=[],gs[s]=l,l.bytes=n;r<_;)h=He.getUint32(r),l.push(h),r+=4;for(_+=3;r<_;)h=me[r++],l.push(h);let T=n<16?nn(n):ps(n);return T!=null?l.string=T:l.string=rn(n)}function ys(n){if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="boolean"||typeof n=="bigint")return n.toString();if(n==null)return n+"";throw new Error("Invalid property type for record",typeof n)}const ws=(n,s)=>{let l=lt().map(ys),r=n;s!==void 0&&(n=n<32?-((s<<5)+n):(s<<5)+n,l.highByte=s);let _=Qe[n];return _&&(_.isShared||Qt)&&((Qe.restoreStructures||(Qe.restoreStructures=[]))[n]=_),Qe[n]=l,l.read=tn(l,r),l.read()};yt[0]=()=>{},yt[0].noBuffer=!0,yt[66]=n=>{let s=n.length,l=BigInt(n[0]&128?n[0]-256:n[0]);for(let r=1;r<s;r++)l<<=BigInt(8),l+=BigInt(n[r]);return l};let Bo={Error,TypeError,ReferenceError};yt[101]=()=>{let n=lt();return(Bo[n[0]]||Error)(n[1],{cause:n[2]})},yt[105]=n=>{if(st.structuredClone===!1)throw new Error("Structured clone extension is disabled");let s=He.getUint32(R-4);Ct||(Ct=new Map);let l=me[R],r;l>=144&&l<160||l==220||l==221?r=[]:r={};let _={target:r};Ct.set(s,_);let h=lt();return _.used?Object.assign(r,h):(_.target=h,h)},yt[112]=n=>{if(st.structuredClone===!1)throw new Error("Structured clone extension is disabled");let s=He.getUint32(R-4),l=Ct.get(s);return l.used=!0,l.target},yt[115]=()=>new Set(lt());const xs=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(n=>n+"Array");let Uo=typeof globalThis=="object"?globalThis:window;yt[116]=n=>{let s=n[0],l=xs[s];if(!l){if(s===16){let r=new ArrayBuffer(n.length-1);return new Uint8Array(r).set(n.subarray(1)),r}throw new Error("Could not find typed array for code "+s)}return new Uo[l](Uint8Array.prototype.slice.call(n,1).buffer)},yt[120]=()=>{let n=lt();return new RegExp(n[0],n[1])};const jo=[];yt[98]=n=>{let s=(n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3],l=R;return R+=s-n.length,_t=jo,_t=[ms(),ms()],_t.position0=0,_t.position1=0,_t.postBundlePosition=R,R=l,lt()},yt[255]=n=>n.length==4?new Date((n[0]*16777216+(n[1]<<16)+(n[2]<<8)+n[3])*1e3):n.length==8?new Date(((n[0]<<22)+(n[1]<<14)+(n[2]<<6)+(n[3]>>2))/1e6+((n[3]&3)*4294967296+n[4]*16777216+(n[5]<<16)+(n[6]<<8)+n[7])*1e3):n.length==12?new Date(((n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3])/1e6+((n[4]&128?-281474976710656:0)+n[6]*1099511627776+n[7]*4294967296+n[8]*16777216+(n[9]<<16)+(n[10]<<8)+n[11])*1e3):new Date("invalid");function qs(n){let s=Ft,l=R,r=vt,_=Ot,h=Wt,g=Ct,T=_t,W=new Uint8Array(me.slice(0,Ft)),ie=Qe,fe=Qe.slice(0,Qe.length),L=st,se=Qt,we=n();return Ft=s,R=l,vt=r,Ot=_,Wt=h,Ct=g,_t=T,me=W,Qt=se,Qe=ie,Qe.splice(0,Qe.length,...fe),st=L,He=new DataView(me.buffer,me.byteOffset,me.byteLength),we}function on(){me=null,Ct=null,Qe=null}const an=new Array(147);for(let n=0;n<256;n++)an[n]=+("1e"+Math.floor(45.15-n*.30103));var Fr=new ur({useRecords:!1});const Mo=Fr.unpack;Fr.unpackMultiple,Fr.unpack;let zo=new Float32Array(1);new Uint8Array(zo.buffer,0,4);let Or;try{Or=new TextEncoder}catch{}let ln,vs;const Pr=typeof Buffer<"u",Lr=Pr?function(n){return Buffer.allocUnsafeSlow(n)}:Uint8Array,Es=Pr?Buffer:Uint8Array,Ss=Pr?4294967296:2144337920;let j,_r,tt,D=0,gt,at=null,Ho;const $o=21760,Wo=/[\u0080-\uFFFF]/,sr=Symbol("record-id");class Qo extends ur{constructor(s){super(s),this.offset=0;let l,r,_,h,g=Es.prototype.utf8Write?function(H,he){return j.utf8Write(H,he,j.byteLength-he)}:Or&&Or.encodeInto?function(H,he){return Or.encodeInto(H,j.subarray(he)).written}:!1,T=this;s||(s={});let W=s&&s.sequential,ie=s.structures||s.saveStructures,fe=s.maxSharedStructures;if(fe==null&&(fe=ie?32:0),fe>8160)throw new Error("Maximum maxSharedStructure is 8160");s.structuredClone&&s.moreTypes==null&&(this.moreTypes=!0);let L=s.maxOwnStructures;L==null&&(L=ie?32:64),!this.structures&&s.useRecords!=!1&&(this.structures=[]);let se=fe>32||L+fe>64,we=fe+64,ke=fe+L+64;if(ke>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let Fe=[],Le=0,et=0;this.pack=this.encode=function(H,he){if(j||(j=new Lr(8192),tt=j.dataView||(j.dataView=new DataView(j.buffer,0,8192)),D=0),gt=j.length-10,gt-D<2048?(j=new Lr(j.length),tt=j.dataView||(j.dataView=new DataView(j.buffer,0,j.length)),gt=j.length-10,D=0):D=D+7&2147483640,l=D,he&Yo&&(D+=he&255),h=T.structuredClone?new Map:null,T.bundleStrings&&typeof H!="string"?(at=[],at.size=1/0):at=null,_=T.structures,_){_.uninitialized&&(_=T._mergeStructures(T.getStructures()));let le=_.sharedLength||0;if(le>fe)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+_.sharedLength);if(!_.transitions){_.transitions=Object.create(null);for(let pe=0;pe<le;pe++){let Ae=_[pe];if(!Ae)continue;let Ve,Ne=_.transitions;for(let Ke=0,We=Ae.length;Ke<We;Ke++){let mt=Ae[Ke];Ve=Ne[mt],Ve||(Ve=Ne[mt]=Object.create(null)),Ne=Ve}Ne[sr]=pe+64}this.lastNamedStructuresLength=le}W||(_.nextId=le+64)}r&&(r=!1);let ue;try{T.randomAccessStructure&&H&&H.constructor&&H.constructor===Object?Vt(H):Me(H);let le=at;if(at&&Is(l,Me,0),h&&h.idsToInsert){let pe=h.idsToInsert.sort((Ke,We)=>Ke.offset>We.offset?1:-1),Ae=pe.length,Ve=-1;for(;le&&Ae>0;){let Ke=pe[--Ae].offset+l;Ke<le.stringsPosition+l&&Ve===-1&&(Ve=0),Ke>le.position+l?Ve>=0&&(Ve+=6):(Ve>=0&&(tt.setUint32(le.position+l,tt.getUint32(le.position+l)+Ve),Ve=-1),le=le.previous,Ae++)}Ve>=0&&le&&tt.setUint32(le.position+l,tt.getUint32(le.position+l)+Ve),D+=pe.length*6,D>gt&&$e(D),T.offset=D;let Ne=Go(j.subarray(l,D),pe);return h=null,Ne}return T.offset=D,he&Jo?(j.start=l,j.end=D,j):j.subarray(l,D)}catch(le){throw ue=le,le}finally{if(_&&(ct(),r&&T.saveStructures)){let le=_.sharedLength||0,pe=j.subarray(l,D),Ae=Ko(_,T);if(!ue)return T.saveStructures(Ae,Ae.isCompatible)===!1?T.pack(H,he):(T.lastNamedStructuresLength=le,j.length>1073741824&&(j=null),pe)}j.length>1073741824&&(j=null),he&Xo&&(D=l)}};const ct=()=>{et<10&&et++;let H=_.sharedLength||0;if(_.length>H&&!W&&(_.length=H),Le>1e4)_.transitions=null,et=0,Le=0,Fe.length>0&&(Fe=[]);else if(Fe.length>0&&!W){for(let he=0,ue=Fe.length;he<ue;he++)Fe[he][sr]=0;Fe=[]}},Pe=H=>{var he=H.length;he<16?j[D++]=144|he:he<65536?(j[D++]=220,j[D++]=he>>8,j[D++]=he&255):(j[D++]=221,tt.setUint32(D,he),D+=4);for(let ue=0;ue<he;ue++)Me(H[ue])},Me=H=>{D>gt&&(j=$e(D));var he=typeof H,ue;if(he==="string"){let le=H.length;if(at&&le>=4&&le<4096){if((at.size+=le)>$o){let Ne,Ke=(at[0]?at[0].length*3+at[1].length:0)+10;D+Ke>gt&&(j=$e(D+Ke));let We;at.position?(We=at,j[D]=200,D+=3,j[D++]=98,Ne=D-l,D+=4,Is(l,Me,0),tt.setUint16(Ne+l-3,D-l-Ne)):(j[D++]=214,j[D++]=98,Ne=D-l,D+=4),at=["",""],at.previous=We,at.size=0,at.position=Ne}let Ve=Wo.test(H);at[Ve?0:1]+=H,j[D++]=193,Me(Ve?-le:le);return}let pe;le<32?pe=1:le<256?pe=2:le<65536?pe=3:pe=5;let Ae=le*3;if(D+Ae>gt&&(j=$e(D+Ae)),le<64||!g){let Ve,Ne,Ke,We=D+pe;for(Ve=0;Ve<le;Ve++)Ne=H.charCodeAt(Ve),Ne<128?j[We++]=Ne:Ne<2048?(j[We++]=Ne>>6|192,j[We++]=Ne&63|128):(Ne&64512)===55296&&((Ke=H.charCodeAt(Ve+1))&64512)===56320?(Ne=65536+((Ne&1023)<<10)+(Ke&1023),Ve++,j[We++]=Ne>>18|240,j[We++]=Ne>>12&63|128,j[We++]=Ne>>6&63|128,j[We++]=Ne&63|128):(j[We++]=Ne>>12|224,j[We++]=Ne>>6&63|128,j[We++]=Ne&63|128);ue=We-D-pe}else ue=g(H,D+pe);ue<32?j[D++]=160|ue:ue<256?(pe<2&&j.copyWithin(D+2,D+1,D+1+ue),j[D++]=217,j[D++]=ue):ue<65536?(pe<3&&j.copyWithin(D+3,D+2,D+2+ue),j[D++]=218,j[D++]=ue>>8,j[D++]=ue&255):(pe<5&&j.copyWithin(D+5,D+3,D+3+ue),j[D++]=219,tt.setUint32(D,ue),D+=4),D+=ue}else if(he==="number")if(H>>>0===H)H<32||H<128&&this.useRecords===!1||H<64&&!this.randomAccessStructure?j[D++]=H:H<256?(j[D++]=204,j[D++]=H):H<65536?(j[D++]=205,j[D++]=H>>8,j[D++]=H&255):(j[D++]=206,tt.setUint32(D,H),D+=4);else if(H>>0===H)H>=-32?j[D++]=256+H:H>=-128?(j[D++]=208,j[D++]=H+256):H>=-32768?(j[D++]=209,tt.setInt16(D,H),D+=2):(j[D++]=210,tt.setInt32(D,H),D+=4);else{let le;if((le=this.useFloat32)>0&&H<4294967296&&H>=-2147483648){j[D++]=202,tt.setFloat32(D,H);let pe;if(le<4||(pe=H*an[(j[D]&127)<<1|j[D+1]>>7])>>0===pe){D+=4;return}else D--}j[D++]=203,tt.setFloat64(D,H),D+=8}else if(he==="object"||he==="function")if(!H)j[D++]=192;else{if(h){let pe=h.get(H);if(pe){if(!pe.id){let Ae=h.idsToInsert||(h.idsToInsert=[]);pe.id=Ae.push(pe)}j[D++]=214,j[D++]=112,tt.setUint32(D,pe.id),D+=4;return}else h.set(H,{offset:D-l})}let le=H.constructor;if(le===Object)Oe(H);else if(le===Array)Pe(H);else if(le===Map)if(this.mapAsEmptyObject)j[D++]=128;else{ue=H.size,ue<16?j[D++]=128|ue:ue<65536?(j[D++]=222,j[D++]=ue>>8,j[D++]=ue&255):(j[D++]=223,tt.setUint32(D,ue),D+=4);for(let[pe,Ae]of H)Me(pe),Me(Ae)}else{for(let pe=0,Ae=ln.length;pe<Ae;pe++){let Ve=vs[pe];if(H instanceof Ve){let Ne=ln[pe];if(Ne.write){Ne.type&&(j[D++]=212,j[D++]=Ne.type,j[D++]=0);let Dt=Ne.write.call(this,H);Dt===H?Array.isArray(H)?Pe(H):Oe(H):Me(Dt);return}let Ke=j,We=tt,mt=D;j=null;let Nt;try{Nt=Ne.pack.call(this,H,Dt=>(j=Ke,Ke=null,D+=Dt,D>gt&&$e(D),{target:j,targetView:tt,position:D-Dt}),Me)}finally{Ke&&(j=Ke,tt=We,D=mt,gt=j.length-10)}Nt&&(Nt.length+D>gt&&$e(Nt.length+D),D=Vo(Nt,j,D,Ne.type));return}}if(Array.isArray(H))Pe(H);else{if(H.toJSON){const pe=H.toJSON();if(pe!==H)return Me(pe)}if(he==="function")return Me(this.writeFunction&&this.writeFunction(H));Oe(H)}}}else if(he==="boolean")j[D++]=H?195:194;else if(he==="bigint"){if(H<BigInt(1)<<BigInt(63)&&H>=-(BigInt(1)<<BigInt(63)))j[D++]=211,tt.setBigInt64(D,H);else if(H<BigInt(1)<<BigInt(64)&&H>0)j[D++]=207,tt.setBigUint64(D,H);else if(this.largeBigIntToFloat)j[D++]=203,tt.setFloat64(D,Number(H));else{if(this.largeBigIntToString)return Me(H.toString());if(this.useBigIntExtension&&H<BigInt(2)**BigInt(1023)&&H>-(BigInt(2)**BigInt(1023))){j[D++]=199,D++,j[D++]=66;let le=[],pe;do{let Ae=H&BigInt(255);pe=(Ae&BigInt(128))===(H<BigInt(0)?BigInt(128):BigInt(0)),le.push(Ae),H>>=BigInt(8)}while(!((H===BigInt(0)||H===BigInt(-1))&&pe));j[D-2]=le.length;for(let Ae=le.length;Ae>0;)j[D++]=Number(le[--Ae]);return}else throw new RangeError(H+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}D+=8}else if(he==="undefined")this.encodeUndefinedAsNil?j[D++]=192:(j[D++]=212,j[D++]=0,j[D++]=0);else throw new Error("Unknown type: "+he)},rt=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?H=>{let he;if(this.skipValues){he=[];for(let pe in H)(typeof H.hasOwnProperty!="function"||H.hasOwnProperty(pe))&&!this.skipValues.includes(H[pe])&&he.push(pe)}else he=Object.keys(H);let ue=he.length;ue<16?j[D++]=128|ue:ue<65536?(j[D++]=222,j[D++]=ue>>8,j[D++]=ue&255):(j[D++]=223,tt.setUint32(D,ue),D+=4);let le;if(this.coercibleKeyAsNumber)for(let pe=0;pe<ue;pe++){le=he[pe];let Ae=Number(le);Me(isNaN(Ae)?le:Ae),Me(H[le])}else for(let pe=0;pe<ue;pe++)Me(le=he[pe]),Me(H[le])}:H=>{j[D++]=222;let he=D-l;D+=2;let ue=0;for(let le in H)(typeof H.hasOwnProperty!="function"||H.hasOwnProperty(le))&&(Me(le),Me(H[le]),ue++);if(ue>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');j[he+++l]=ue>>8,j[he+l]=ue&255},xt=this.useRecords===!1?rt:s.progressiveRecords&&!se?H=>{let he,ue=_.transitions||(_.transitions=Object.create(null)),le=D++-l,pe;for(let Ae in H)if(typeof H.hasOwnProperty!="function"||H.hasOwnProperty(Ae)){if(he=ue[Ae],he)ue=he;else{let Ve=Object.keys(H),Ne=ue;ue=_.transitions;let Ke=0;for(let We=0,mt=Ve.length;We<mt;We++){let Nt=Ve[We];he=ue[Nt],he||(he=ue[Nt]=Object.create(null),Ke++),ue=he}le+l+1==D?(D--,ht(ue,Ve,Ke)):Rt(ue,Ve,le,Ke),pe=!0,ue=Ne[Ae]}Me(H[Ae])}if(!pe){let Ae=ue[sr];Ae?j[le+l]=Ae:Rt(ue,Object.keys(H),le,0)}}:H=>{let he,ue=_.transitions||(_.transitions=Object.create(null)),le=0;for(let Ae in H)(typeof H.hasOwnProperty!="function"||H.hasOwnProperty(Ae))&&(he=ue[Ae],he||(he=ue[Ae]=Object.create(null),le++),ue=he);let pe=ue[sr];pe?pe>=96&&se?(j[D++]=((pe-=96)&31)+96,j[D++]=pe>>5):j[D++]=pe:ht(ue,ue.__keys__||Object.keys(H),le);for(let Ae in H)(typeof H.hasOwnProperty!="function"||H.hasOwnProperty(Ae))&&Me(H[Ae])},St=typeof this.useRecords=="function"&&this.useRecords,Oe=St?H=>{St(H)?xt(H):rt(H)}:xt,$e=H=>{let he;if(H>16777216){if(H-l>Ss)throw new Error("Packed buffer would be larger than maximum buffer size");he=Math.min(Ss,Math.round(Math.max((H-l)*(H>67108864?1.25:2),4194304)/4096)*4096)}else he=(Math.max(H-l<<2,j.length-1)>>12)+1<<12;let ue=new Lr(he);return tt=ue.dataView||(ue.dataView=new DataView(ue.buffer,0,he)),H=Math.min(H,j.length),j.copy?j.copy(ue,0,l,H):ue.set(j.slice(l,H)),D-=l,l=0,gt=ue.length-10,j=ue},ht=(H,he,ue)=>{let le=_.nextId;le||(le=64),le<we&&this.shouldShareStructure&&!this.shouldShareStructure(he)?(le=_.nextOwnId,le<ke||(le=we),_.nextOwnId=le+1):(le>=ke&&(le=we),_.nextId=le+1);let pe=he.highByte=le>=96&&se?le-96>>5:-1;H[sr]=le,H.__keys__=he,_[le-64]=he,le<we?(he.isShared=!0,_.sharedLength=le-63,r=!0,pe>=0?(j[D++]=(le&31)+96,j[D++]=pe):j[D++]=le):(pe>=0?(j[D++]=213,j[D++]=114,j[D++]=(le&31)+96,j[D++]=pe):(j[D++]=212,j[D++]=114,j[D++]=le),ue&&(Le+=et*ue),Fe.length>=L&&(Fe.shift()[sr]=0),Fe.push(H),Me(he))},Rt=(H,he,ue,le)=>{let pe=j,Ae=D,Ve=gt,Ne=l;j=_r,D=0,l=0,j||(_r=j=new Lr(8192)),gt=j.length-10,ht(H,he,le),_r=j;let Ke=D;if(j=pe,D=Ae,gt=Ve,l=Ne,Ke>1){let We=D+Ke-1;We>gt&&$e(We);let mt=ue+l;j.copyWithin(mt+Ke,mt+1,D),j.set(_r.slice(0,Ke),mt),D=We}else j[ue+l]=_r[0]},Vt=H=>{let he=Ho(H,j,l,D,_,$e,(ue,le,pe)=>{if(pe)return r=!0;D=le;let Ae=j;return Me(ue),ct(),Ae!==j?{position:D,targetView:tt,target:j}:D},this);if(he===0)return Oe(H);D=he}}useBuffer(s){j=s,j.dataView||(j.dataView=new DataView(j.buffer,j.byteOffset,j.byteLength)),D=0}set position(s){D=s}get position(){return D}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}vs=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,as],ln=[{pack(n,s,l){let r=n.getTime()/1e3;if((this.useTimestamp32||n.getMilliseconds()===0)&&r>=0&&r<4294967296){let{target:_,targetView:h,position:g}=s(6);_[g++]=214,_[g++]=255,h.setUint32(g,r)}else if(r>0&&r<4294967296){let{target:_,targetView:h,position:g}=s(10);_[g++]=215,_[g++]=255,h.setUint32(g,n.getMilliseconds()*4e6+(r/1e3/4294967296>>0)),h.setUint32(g+4,r)}else if(isNaN(r)){if(this.onInvalidDate)return s(0),l(this.onInvalidDate());let{target:_,targetView:h,position:g}=s(3);_[g++]=212,_[g++]=255,_[g++]=255}else{let{target:_,targetView:h,position:g}=s(15);_[g++]=199,_[g++]=12,_[g++]=255,h.setUint32(g,n.getMilliseconds()*1e6),h.setBigInt64(g+4,BigInt(Math.floor(r)))}}},{pack(n,s,l){if(this.setAsEmptyObject)return s(0),l({});let r=Array.from(n),{target:_,position:h}=s(this.moreTypes?3:0);this.moreTypes&&(_[h++]=212,_[h++]=115,_[h++]=0),l(r)}},{pack(n,s,l){let{target:r,position:_}=s(this.moreTypes?3:0);this.moreTypes&&(r[_++]=212,r[_++]=101,r[_++]=0),l([n.name,n.message,n.cause])}},{pack(n,s,l){let{target:r,position:_}=s(this.moreTypes?3:0);this.moreTypes&&(r[_++]=212,r[_++]=120,r[_++]=0),l([n.source,n.flags])}},{pack(n,s){this.moreTypes?ks(n,16,s):As(Pr?Buffer.from(n):new Uint8Array(n),s)}},{pack(n,s){let l=n.constructor;l!==Es&&this.moreTypes?ks(n,xs.indexOf(l.name),s):As(n,s)}},{pack(n,s){let{target:l,position:r}=s(1);l[r]=193}}];function ks(n,s,l,r){let _=n.byteLength;if(_+1<256){var{target:h,position:g}=l(4+_);h[g++]=199,h[g++]=_+1}else if(_+1<65536){var{target:h,position:g}=l(5+_);h[g++]=200,h[g++]=_+1>>8,h[g++]=_+1&255}else{var{target:h,position:g,targetView:T}=l(7+_);h[g++]=201,T.setUint32(g,_+1),g+=4}h[g++]=116,h[g++]=s,n.buffer||(n=new Uint8Array(n)),h.set(new Uint8Array(n.buffer,n.byteOffset,n.byteLength),g)}function As(n,s){let l=n.byteLength;var r,_;if(l<256){var{target:r,position:_}=s(l+2);r[_++]=196,r[_++]=l}else if(l<65536){var{target:r,position:_}=s(l+3);r[_++]=197,r[_++]=l>>8,r[_++]=l&255}else{var{target:r,position:_,targetView:h}=s(l+5);r[_++]=198,h.setUint32(_,l),_+=4}r.set(n,_)}function Vo(n,s,l,r){let _=n.length;switch(_){case 1:s[l++]=212;break;case 2:s[l++]=213;break;case 4:s[l++]=214;break;case 8:s[l++]=215;break;case 16:s[l++]=216;break;default:_<256?(s[l++]=199,s[l++]=_):_<65536?(s[l++]=200,s[l++]=_>>8,s[l++]=_&255):(s[l++]=201,s[l++]=_>>24,s[l++]=_>>16&255,s[l++]=_>>8&255,s[l++]=_&255)}return s[l++]=r,s.set(n,l),l+=_,l}function Go(n,s){let l,r=s.length*6,_=n.length-r;for(;l=s.pop();){let h=l.offset,g=l.id;n.copyWithin(h+r,h,_),r-=6;let T=h+r;n[T++]=214,n[T++]=105,n[T++]=g>>24,n[T++]=g>>16&255,n[T++]=g>>8&255,n[T++]=g&255,_=h}return n}function Is(n,s,l){if(at.length>0){tt.setUint32(at.position+n,D+l-at.position-n),at.stringsPosition=D-n;let r=at;at=null,s(r[0]),s(r[1])}}function Ko(n,s){return n.isCompatible=l=>{let r=!l||(s.lastNamedStructuresLength||0)===l.length;return r||s._mergeStructures(l),r},n}let Ts=new Qo({useRecords:!1});Ts.pack,Ts.pack;const Jo=512,Xo=1024,Yo=2048,Zo=n=>Mo(Sn(n)),ea=()=>{let n=new Map;return{set:l=>{n=new Map([...n,...l])},get:()=>n}},Te=(n,...s)=>{let l="";const r=[];for(let _=0;_<n.length;_++)if(l+=n[_],_<s.length){const h=s[_];ra(h)||ta(h)?l+=h.sql:(l+="?",r.push(h))}return{sql:l,parameters:r}};Te.identifier=n=>({type:"SqlIdentifier",sql:`"${n.replace(/"/g,'""')}"`}),Te.raw=n=>({type:"RawSql",sql:n});const ta=n=>typeof n=="object"&&n!=null&&"type"in n&&n.type==="SqlIdentifier",ra=n=>typeof n=="object"&&n!=null&&"type"in n&&n.type==="RawSql";Te.prepared=(n,...s)=>({...Te(n,...s),options:{prepare:!0}});const na=new RegExp(`\\b(${["alter","create","delete","drop","insert","replace","update"].join("|")})\\b`),sa=n=>na.test(n),ia=n=>({exec:async s=>{n.log("[sql]",s);const l=await n.exec(s);return n.log("[sql]",l),l},transaction:s=>async l=>{await n.transaction(s)(async()=>{if(s==="shared"){await l();return}try{n.log("[sql] begin"),await n.exec(Te`begin;`),await l(),n.log("[sql] commit"),await n.exec(Te`commit;`)}catch(r){throw n.log("[sql] rollback"),await n.exec(Te`rollback;`),r}})},export:n.export}),oa=n=>async s=>{var h;if(!((h=n.options)!=null&&h.logQueryExecutionTime))return s();const l=performance.now(),r=await s(),_=performance.now()-l;return console.log(`QueryExecutionTime: ${_.toString()}ms`,n),r},aa=n=>async s=>{const{rows:l}=await n.exec({...s,sql:`EXPLAIN QUERY PLAN ${s.sql}`});console.log("ExplainQueryPlan",s),console.log(la(l))},la=n=>n.map(s=>{let l=s.parent,r=0;do{const _=n.find(h=>h.id===l);if(!_)break;l=_.parent,r++}while(!0);return`${"  ".repeat(r)}${s.detail}`}).join(`
`),cn=n=>s=>`evolu:${n.name}:${s}`,ca=Jt(rr.from(12)),ua=n=>Cn(n).slice(0,ca),fa=n=>{let s=BigInt(0),l=BigInt(0);for(let r=0;r<6;r++)s=s<<BigInt(8)|BigInt(n[r]);for(let r=6;r<12;r++)l=l<<BigInt(8)|BigInt(n[r]);return[s.toString(),l.toString()]},_a=Te`
  insert into evolu_message (l, t, h1, h2, c)
  values (1, $t, $h1, $h2, 1)
  on conflict do nothing;
`.sql,Et=(n,s)=>Te.raw(`(${n} | ${s}) - (${n} & ${s})`),da=Te`
  -- After a new timestamp at level=1 is inserted, higher levels must update their
  -- aggregated fingerprint (XOR) and increment the count c by 1.
  with
    -- 1) p: Build a list of parent rows, starting from the top (max(l)+1)
    --    and moving down to level=2. For each level:
    --    - Find the minimal timestamp t that is still greater than $t
    --      but less than p.t (the previous parent's timestamp).
    p(l, t, h1, h2) as (
      -- a) Initialize recursion from (max(l) + 1) with no timestamp/hashes
      select (select max(l) + 1 from evolu_message), null, null, null
      union all
      -- b) Step down one level at a time (l-1), picking the smallest timestamp
      --    larger than $t, but also less than p.t if p.t is not null.
      select
        p.l - 1,
        ifnull(
          (
            select t
            from evolu_message
            where l = p.l - 1 and t > $t and (p.t is null or t < p.t)
            order by t
            limit 1
          ),
          p.t
        ),
        (
          select h1
          from evolu_message
          where l = p.l - 1 and t > $t and (p.t is null or t < p.t)
          order by t
          limit 1
        ),
        (
          select h2
          from evolu_message
          where l = p.l - 1 and t > $t and (p.t is null or t < p.t)
          order by t
          limit 1
        )
      from p
      -- Stop when we have reached level=2 (no need to go down to level=1)
      where p.l > 2
    ),
    -- 2) u: For each row in p (i.e. each parent timestamp found),
    --    compute the XOR of the parent's fingerprint with the new
    --    timestamp's fingerprint ($h1, $h2). That becomes the "updated" fingerprint.
    u(t, h1, h2) as (
      select t, ${Et("$h1","h1")}, ${Et("$h2","h2")} from p where h1 is not null
    )
  -- 3) Update the parent rows in evolu_message:
  --    - Set h1, h2 to the XORed hashes
  --    - Increment c by 1 to reflect one more timestamp at the lower level
  update evolu_message
  set
    h1 = u.h1,
    h2 = u.h2,
    c = c + 1
  from u
  -- "WHERE changes() > 0" ensures this update only runs if the *previous* insert
  -- (insertLevel1) actually inserted a new row (i.e., we don't need to update
  -- if no new timestamp was added).
  where changes() > 0 and evolu_message.t = u.t;
`.sql,ha=Te`
  insert into evolu_message (t, l)
  values ($t, $l)
  on conflict do nothing;
`.sql,pa=Te`
  with
    -- 1) s: Find the "previous" timestamp below the new timestamp $t
    --    at any level >= $l. If none exists, default to 0.
    s(t) as (
      select
        ifnull((select max(t) from evolu_message where t < $t and l >= $l), 0)
    ),
    -- 2) c: Build a chain from level $l downwards, collecting timestamps and fingerprints
    --    that lie between the "previous" timestamp s.t and the new timestamp $t.
    --    - ut = the "upper" timestamp (the one we inserted)
    --    - l  = current level
    --    - t  = the latest known timestamp below ut
    --    - h1, h2 = new or existing fingerprints
    --    - c  = count of messages
    --    - mt = "max timestamp" boundary for the current recursion step
    c(ut, l, t, h1, h2, c, mt) as (
      -- a) Initialization: Start from (ut=$t, l=$l, t=s.t, h1=$h1, h2=$h2, c=1, mt=s.t)
      select $t, $l, (select t from s), $h1, $h2, 1, (select t from s)
      union all
      -- b) Recursively step downward: (l-1) gathering timestamps that are:
      --    - > c.t (previous "below" timestamp)
      --    - < $t  (our inserted timestamp)
      --    We pick the "max(t)" boundary again in case there are multiple times at that level.
      select
        null,
        c.l - 1,
        ifnull(m.t, c.t),
        m.h1,
        m.h2,
        m.c,
        ifnull(
          (
            select max(t)
            from evolu_message
            where t > c.t and t < $t and l = c.l - 1
          ),
          mt
        )
      from
        c
        left join evolu_message as m on m.l = c.l - 1 and m.t > c.t and m.t < $t
      -- Continue stepping down as long as c.t == c.mt (meaning c.t is still in the boundary)
      -- and there's another level below to explore (c.l > 1).
      where c.t = c.mt and c.l > 1
    ),
    -- 3) c2: Take all rows from c that have a non-null fingerprint (h1),
    --    and assign a row_number() for subsequent XOR aggregation.
    c2(rn, l, t, h1, h2, c) as (
      select row_number() over (order by l), l, ut, h1, h2, c
      from c
      where h1 is not null
    ),
    -- 4) c3: Recursively XOR adjacent rows from c2 to accumulate
    --    combined fingerprints. Also sum up their counts.
    c3(rn, l, t, h1, h2, c) as (
      -- a) Start with the first row (rn=1)
      select rn, l, t, h1, h2, c from c2 where rn = 1
      union all
      -- b) For each subsequent row, XOR h1/h2 with the previous row's h1/h2,
      --    and add the counts.
      select
        c3.rn + 1,
        c2.l,
        c2.t,
        ${Et("c2.h1","c3.h1")},
        ${Et("c2.h2","c3.h2")},
        c2.c + c3.c
      from
        c3
        join c2 on c2.rn = c3.rn + 1
    ),
    -- 5) c4: From c3, pick the final XORed result per level by grouping on l
    --    and taking the row with the max(rn). That final row represents
    --    the fully aggregated fingerprint and count at that level.
    c4(l, t, h1, h2, c, rn) as (
      select l, t, h1, h2, c, max(rn) from c3 group by l
    ),
    -- 6) n: Similar logic for going "above" the newly inserted level
    --    to find parent timestamps that must also be updated.
    --    - Start from (max(l)+1) and go down until reaching the min(l) from c4.
    n(l, t, h1, h2, c) as (
      -- a) Initialize at one level above the highest known
      select (select max(l) + 1 from evolu_message), null, null, null, null
      union all
      -- b) At each step, pick the smallest timestamp t above $t
      --    and below the previous parent's t, updating h1, h2, c as well.
      select
        n.l - 1,
        ifnull(
          (
            select t
            from evolu_message
            where l = n.l - 1 and t > $t and (n.t is null or t < n.t)
            order by t
            limit 1
          ),
          n.t
        ),
        (
          select h1
          from evolu_message
          where l = n.l - 1 and t > $t and (n.t is null or t < n.t)
          order by t
          limit 1
        ),
        (
          select h2
          from evolu_message
          where l = n.l - 1 and t > $t and (n.t is null or t < n.t)
          order by t
          limit 1
        ),
        (
          select c
          from evolu_message
          where l = n.l - 1 and t > $t and (n.t is null or t < n.t)
          order by t
          limit 1
        )
      from n
      where l - 1 > (select min(l) from c4)
    ),
    -- 7) u: Merge the aggregated results from c4 (the newly inserted level)
    --    and n (the parent levels above). The final output is the set of rows
    --    we need to update with new h1, h2, and c.
    u(ut, uh1, uh2, uc) as (
      -- a) Directly use rows from c4 where t is not null
      select t, h1, h2, c from c4 where t is not null
      union all
      -- b) For higher levels (l > $l), XOR them with the new level's fingerprint
      --    and increment counts. If l <= $l, compute new h1/h2 by XORing
      --    c4's and n's existing fingerprints. Adjust counts accordingly.
      select
        max(t),
        iif(
          l > $l,
          ${Et("$h1","h1")},
          (
            select ${Et("c4.h1","n.h1")}
            from c4
            where c4.l = (select max(l) from c4 where c4.l < n.l)
          )
        ),
        iif(
          l > $l,
          ${Et("$h2","h2")},
          (
            select ${Et("c4.h2","n.h2")}
            from c4
            where c4.l = (select max(l) from c4 where c4.l < n.l)
          )
        ),
        iif(
          l > $l,
          c + 1,
          (
            select n.c - c4.c
            from c4
            where c4.l = (select max(l) from c4 where c4.l < n.l)
          )
        )
      from n
      where t is not null
      group by t
    )
  update evolu_message
  set
    h1 = uh1,
    h2 = uh2,
    c = uc
  from u
  -- Only apply if a new row was actually inserted (i.e., the "insert" caused changes).
  where changes() > 0 and t = ut;
`.sql;Te`
  with
    -- 1) ml: Find the highest (max) level among all rows
    ml(ml) as (select max(l) from evolu_message),
    -- 2) sc: Recursively scan from (max level + 1) down to level=1,
    --    collecting the largest timestamp and sum of counts at each step.
    sc(l, mt, c) as (
      -- Initialization: start at ml + 1, with "no timestamp" (zeroblob) and count=0
      select (select ml + 1 from ml), zeroblob(0), 0
      union all
      -- Recursively go down one level at a time, finding:
      --   - mt = max(t) for that level > previous mt
      --   - c = sum of all counts (c) for that level > previous mt
      select
        sc.l - 1,
        ifnull(
          (
            select max(t)
            from evolu_message as m
            where sc.l > 1 and m.l = sc.l - 1 and m.t > sc.mt
          ),
          sc.mt
        ),
        ifnull(
          (
            select sum(m.c)
            from evolu_message as m
            where sc.l > 1 and m.l = sc.l - 1 and m.t > sc.mt
          ),
          0
        )
      from sc
      where sc.l > 1
    ),
    -- 3) tc: Sum up all counts from sc, i.e. total number of timestamps
    -- Using SUM(c) is much more efficient than COUNT(*) because it leverages
    -- precomputed incremental counts instead of scanning all rows.
    -- This reduces complexity from O(N) to O(log N), significantly improving performance.
    tc as (select sum(c) as tc from sc),
    -- 4) ts: If the data set is small, we just return up to (buckets * 2 - 1) rows
    --    from evolu_message. This is a quick fallback path when there's no need
    --    to do bucket partitioning.
    ts(t, b, h1, h2) as (
      -- AFAIK it's not possible to force SQLite query planner to skip
      -- this branch hence limit is necessary
      select t, null, null, null
      from evolu_message
      order by t
      limit ($buckets * 2) - 1
    ),
    -- 5) rs: Calculate ranges ("buckets") for larger data sets
    --    i  = bucket index
    --    l  = not used directly, but included for reference
    --    u  = cumulative upper boundary of item counts
    --    ipb = items per bucket
    --    bwe = remainder (to distribute leftover items across some buckets)
    rs(i, l, u, ipb, bwe) as (
      -- Initial row: bucket index=0, range starts at 0,
      -- itemsPerBucket = floor(tc/buckets), remainder = tc mod buckets
      select
        0,
        0,
        0,
        floor((select tc from tc) / $buckets),
        ((select tc from tc) % $buckets)
      union all
      -- Recursively create bucket boundaries up to the number of buckets
      select i + 1, u, u + (ipb + (iif(i < bwe, 1, 0))), ipb, bwe
      from rs
      where i < $buckets
    ),
    -- 6) rs2: Extract the upper boundary "u" from rs for each bucket (except i=0).
    rs2(c) as (select u from rs where i > 0),
    -- 7) rs3: For each bucket boundary c, recursively find timestamps and XOR them.
    --    b   = toggles between "find next timestamp" (b=1) and "process XOR" (b=0)
    --    nt  = next timestamp
    --    nc  = next count
    --    nh1, nh2 = next fingerprint parts
    --    ft, tt = from/to timestamps defining the bucket range
    --    dl  = current database level
    --    ic  = how many items we've processed within this bucket
    --    h1, h2 = ongoing aggregated XOR of fingerprint
    rs3(c, b, nt, nc, nh1, nh2, ft, tt, dl, ic, h1, h2) as (
      -- 7a) Initialization: set up starting boundaries for each bucket
      select
        c,
        1, -- b=1 means "find next timestamp"
        null,
        null,
        null,
        null,
        zeroblob(0), -- ft=0
        X'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF', -- tt=maximum
        ml, -- start from the top level
        0, -- processed items = 0
        0, -- aggregated fingerprint h1
        0 -- aggregated fingerprint h2
      from
        rs2,
        ml
      union all
      -- 7b) Recursively find timestamps and XOR them into h1/h2 until bucket is filled
      select
        c,
        not b, -- Flip the mode b -> if b=1 then next pass is b=0, or vice versa
        iif(
          b,
          (
            select t
            from evolu_message
            where l = dl and t > ft and t < tt
            order by t
            limit 1
          ),
          null
        ),
        iif(
          b,
          (
            select c
            from evolu_message
            where l = dl and t > ft and t < tt
            order by t
            limit 1
          ),
          null
        ),
        iif(
          b,
          (
            select h1
            from evolu_message
            where l = dl and t > ft and t < tt
            order by t
            limit 1
          ),
          null
        ),
        iif(
          b,
          (
            select h2
            from evolu_message
            where l = dl and t > ft and t < tt
            order by t
            limit 1
          ),
          null
        ),
        -- Update ft, tt, dl, ic, h1, h2 based on whether we found a new row (b=1)
        -- or are done processing that row (b=0).
        iif(b, ft, iif(ic + nc <= c, nt, ft)),
        iif(b, tt, iif(ic + nc <= c, tt, ifnull(nt, tt))),
        iif(b, dl, iif(ic + nc <= c, dl, dl - 1)),
        iif(b, ic, iif(ic + nc <= c, ic + nc, ic)),
        iif(b, h1, iif(ic + nc <= c, ${Et("h1","nh1")}, h1)),
        iif(b, h2, iif(ic + nc <= c, ${Et("h2","nh2")}, h2))
      from rs3
      -- The recursion continues as long as:
      --   - b=1 (still searching for new timestamps), or
      --   - ic != c (haven't processed the entire bucket).
      where iif(b, 1, ic != c)
    ),
    -- 8) rs4: After buckets are computed in rs3, produce a row_number() to help
    --    finalize the aggregated fingerprints with a minimal or first/next approach.
    rs4(h1, h2, t, rn) as (
      select
        h1,
        h2,
        (select min(t) from evolu_message where t > ft),
        row_number() over (order by c)
      from rs3
      where c = ic and b = 1
    ),
    -- 9) rs5: Recursively XOR adjacent rows in rs4 to produce cumulative hashing
    rs5(oh1, oh2, b, rn, h1, h2) as (
      -- Start with the first row
      select h1, h2, t, rn, h1, h2 from rs4 where rn = 1
      union all
      -- XOR the previous row's oh1/oh2 with the next row's h1/h2
      select
        rs4.h1,
        rs4.h2,
        t,
        rs4.rn,
        ${Et("rs5.oh1","rs4.h1")},
        ${Et("rs5.oh2","rs4.h2")}
      from
        rs4
        join rs5 on rs4.rn = rs5.rn + 1
    ),
    -- 10) rs6: Final formatting of the bucket info
    rs6(t, b, h1, h2) as (
      select null, b, cast(h1 as text) as h1, cast(h2 as text) as h2 from rs5
    )
  -- Final result:
  -- If tc < buckets*2 => the data is small; just return timestamps.
  -- Otherwise, return the bucket-based summary from rs6.
  select t, b, h1, h2
  from ts
  where (select tc from tc) < $buckets * 2
  union all
  select t, b, h1, h2 from rs6 where (select tc from tc) >= $buckets * 2;
`.sql;const ma=n=>n+1,Cr=Ze("Millis",ns(0xffffffffffff)(rr)),un=Ze("Counter",ns(65535)(rr));Xr({millis:Cr,counter:un,nodeId:is});const ga=Jt(Cr.from(0)),Fs=Jt(un.from(0)),Os=({millis:n=ga,counter:s=Fs,nodeId:l="0000000000000000"}={})=>({millis:n,counter:s,nodeId:l}),Ps=n=>[new Date(n.millis).toISOString(),n.counter.toString(16).toUpperCase().padStart(4,"0"),n.nodeId].join("-"),fn=n=>{const s=n.split("-");return{millis:Date.parse(s.slice(0,3).join("-")).valueOf(),counter:parseInt(s[3],16),nodeId:s[4]}},ba=n=>s=>{const l=Cr.from(n.now());if(!l.ok)return Ee({type:"TimestampTimeOutOfRangeError"});const r=Math.max(l.value,...s);return r-l.value>n.maxDrift?Ee({type:"TimestampDriftError",now:l.value,next:r}):ve(r)},ya=n=>{const s=un.from(ma(n));return s.ok?ve(s.value):Ee({type:"TimestampCounterOverflowError"})},wa=n=>s=>{const l=ba(n)([s.millis]);if(!l.ok)return l;const r=l.value===s.millis?ya(s.counter):ve(Fs);return r.ok?ve({millis:l.value,counter:r.value,nodeId:s.nodeId}):r};Jt(rr.from(16)),Sn("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");const Ls=n=>{const{millis:s,counter:l,nodeId:r}=n,_=new Uint8Array(16),h=BigInt(s);_[0]=Number(h>>40n&0xffn),_[1]=Number(h>>32n&0xffn),_[2]=Number(h>>24n&0xffn),_[3]=Number(h>>16n&0xffn),_[4]=Number(h>>8n&0xffn),_[5]=Number(h&0xffn),_[6]=l>>8&255,_[7]=l&255;for(let g=0;g<8;g++){const T=parseInt(r.slice(g*2,g*2+2),16);_[8+g]=T}return _},Cs=Jt(rr.from(1)),xa=n=>qa(n).unwrap(),qa=n=>Ea(n),va="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-",Ea=n=>{const s=n.length*6,l=Math.ceil(s/8),r=new globalThis.Uint8Array(l);let _=0,h=0,g=0;for(const T of n){const W=va.indexOf(T);for(_=_<<6|W,h+=6;h>=8;)h-=8,r[g++]=_>>h&255}return h>0&&g<l&&(r[g]=_<<8-h&255),new _i(r)},Rs=()=>({now:()=>Date.now()}),Sa={createLogger:n=>{const s=Rs();return{log:(...r)=>{if(n.logger.level==="off")return;const _=new Date(s.now()),h=_.getHours().toString().padStart(2,"0"),g=_.getMinutes().toString().padStart(2,"0"),T=_.getSeconds().toString().padStart(2,"0"),W=_.getMilliseconds().toString().padStart(3,"0"),ie=`${h}:${g}:${T}:${W}`;globalThis.console.log(`${ie} [${n.name}]`,...r)}}}},Ns=()=>({urlAlphabet:di,customAlphabet:mi,nanoid:An}),ka=()=>({next:()=>Math.random()}),Aa=n=>s=>{const l=Ia(s),r=Ds(l,["Evolu","Owner Id"]);let _="";for(let g=0;g<21;g++)_=_+n.urlAlphabet[r[g]&63];const h=Ds(l,["Evolu","Encryption Key"]);return{ownerId:_,encryptionKey:h}},Ia=n=>fo(n),Ds=(n,s)=>{let l=br($r,"Symmetric key seed",n);for(const r of s){const _=new TextEncoder().encode(r),h=new Uint8Array(_.byteLength+1);h[0]=0,h.set(_,1),l=br($r,l.slice(0,32),h)}return l.slice(32,64)},Ta=n=>{const l=n.customAlphabet("0123456789abcdef",16)();return Os({nodeId:l})};Jt(rr.from(8)),Xr({name:ft,sql:ft});const Bs=(n,s)=>n.name===s.name&&n.sql===s.sql,Fa=n=>{let s=kr;const{promise:l,resolve:r}=Promise.withResolvers(),_={init:async g=>{const{createSqlite:T,createLogger:W,...ie}=n,fe=W(g.config),L=ia({...fe,...T(g.config)}),se={...L,...fe,...ie,...g.config,...ea()};await L.transaction("exclusive")(async()=>{const we=await Rr(L)();await _n(L)(g.dbSchema,we),await Ua(se)(we);const ke=we.tables.some(Le=>Le.name==="evolu_owner"),Fe=ke?await Pa(L):await Us(se)(g.config.mnemonic);!ke&&ot(g.initialData)&&await Ws(se)(g.initialData),s({type:"onInit",owner:Fe}),r(se)})},mutate:async g=>{const T=await l;await T.transaction("exclusive")(async()=>{const W=[],ie=[];for(const L of g.changes)L.table.startsWith("_")?ie.push(L):W.push(L);for(const L of ie)if(L.values.isDeleted===1)await T.exec(Te`
              delete from ${Te.identifier(L.table)}
              where id = ${L.id};
            `);else{const se=Cr.from(T.now());if(!se.ok){s({type:"onError",error:{type:"TimestampTimeOutOfRangeError"}});return}const we={timestamp:Os({millis:se.value}),change:L};await Qs(T)(we)}const fe=async()=>{T.log("[db]","onChange"),s({type:"onChange",patches:await Gs(T)(g.subscribedQueries),onCompleteIds:g.onCompleteIds})};if(nt(W)){const L=await Ws(T)(W,fe);if(!L.ok){s({type:"onError",error:L.error});return}}else await fe()})},query:async g=>{const T=await l;await T.transaction("shared")(async()=>{s({type:"onChange",patches:await Gs(T)(g.queries),onCompleteIds:[]})})},reset:async g=>{const T=await l;await T.transaction("last")(async()=>{if(await ja(T),g.restore){const W=await Rr(T)();await _n(T)(g.restore.dbSchema,W),await Us(T)(g.restore.mnemonic)}s({type:"onReset",onCompleteId:g.onCompleteId,reload:g.reload})})},ensureSchema:async g=>{const T=await l;await T.transaction("exclusive")(async()=>{const W=await Rr(T)();await _n(T)(g.dbSchema,W)})},export:async g=>{const T=await l;await T.transaction("exclusive")(async()=>{const W=await T.export();s({type:"onExport",onCompleteId:g.onCompleteId,file:W})})}};return{postMessage:g=>{_[g.type](g).catch(T=>{s({type:"onError",error:kn(T)})})},onMessage:g=>{s=g}}},Rr=({exec:n})=>async s=>{const l=new Map,{rows:r}=await n(Te`
      select
        sqlite_master.name as tableName,
        table_info.name as columnName
      from
        sqlite_master
        join pragma_table_info(sqlite_master.name) as table_info;
    `);r.forEach(T=>{var fe;const{tableName:W,columnName:ie}=T;l.has(W)||l.set(W,[]),(fe=l.get(W))==null||fe.push(ie)});const _=Array.from(l,([T,W])=>({name:T,columns:W})),{rows:h}=await n(s?Te`
            select name, sql
            from sqlite_master
            where type = 'index' and name not like 'sqlite_%';
          `:Te`
            select name, sql
            from sqlite_master
            where
              type = 'index'
              and name not like 'sqlite_%'
              and name not like 'evolu_%';
          `),g=h.map(T=>({name:T.name,sql:T.sql.replace("CREATE INDEX","create index").replace("CREATE UNIQUE INDEX","create unique index")}));return{tables:_,indexes:g}},_n=({exec:n})=>async(s,l,r)=>{const _=[];s.tables.forEach(h=>{const g=l.tables.find(T=>T.name===h.name);g?h.columns.filter(T=>!g.columns.includes(T)).forEach(T=>{_.push(Te`
              alter table ${Te.identifier(h.name)}
              add column ${Te.identifier(T)} blob;
            `.sql)}):_.push(Oa(h.name,h.columns))}),(r==null?void 0:r.ignoreIndexes)!==!0&&(l.indexes.filter(h=>!s.indexes.some(g=>Bs(g,h))).forEach(h=>{_.push(Te`drop index ${Te.identifier(h.name)};`.sql)}),s.indexes.filter(h=>!l.indexes.some(g=>Bs(h,g))).forEach(h=>{_.push(`${h.sql};`)}));for(const h of _)await n({sql:h})},Oa=(n,s)=>`
      create table ${Te.identifier(n).sql} (
      "id" text primary key,
      ${s.filter(l=>l!=="id").map(l=>`${Te.identifier(l).sql} blob`).join(", ")}
    );
  `,Pa=async({exec:n})=>{const{rows:s}=await n(Te`
    select id, mnemonic, encryptionKey, timestamp, protocolVersion
    from evolu_owner
    limit 1;
  `),l=s[0];return{id:l.id,mnemonic:l.mnemonic,encryptionKey:l.encryptionKey,protocolVersion:l.protocolVersion,nodeId:fn(l.timestamp).nodeId}},La=()=>io(Hn,128),Us=n=>async(s=La())=>{const{ownerId:l,encryptionKey:r}=Aa(n)(s),_=Ta(n),h={mnemonic:s,id:l,encryptionKey:r,nodeId:_.nodeId,protocolVersion:Cs};for(const g of[js("client"),Ms,zs,Hs,$s,Ca,Te`
        insert into evolu_owner
          (id, mnemonic, encryptionKey, timestamp, protocolVersion)
        values
          (
            ${h.id},
            ${h.mnemonic},
            ${h.encryptionKey},
            ${Ps(_)},
            ${Cs}
          );
      `])await n.exec(g);return h},js=n=>n==="client"?Te`
        create table evolu_message (
          t blob primary key,
          h1 integer,
          h2 integer,
          c integer,
          l integer not null
        )
        strict;
      `:Te`
        create table evolu_message (
          t blob primary key,
          h1 integer,
          h2 integer,
          c integer,
          l integer not null,
          d blob not null
        )
        strict;
      `,Ms=Te`
  create index evolu_message_l_t_h1_h2_c on evolu_message (l, t, h1, h2, c);
`,zs=Te`
  create table evolu_history (
    timestamp blob not null,
    "table" text not null,
    "row" blob not null,
    "column" text not null,
    value any
  )
  strict;
`,Hs=Te`
  create unique index evolu_history_row_column_table_timestampDesc on evolu_history (
    "row",
    "column",
    "table",
    timestamp desc
  );
`,$s=Te`
  create index evolu_history_table_timestamp on evolu_history (timestamp);
`,Ca=Te`
  create table evolu_owner (
    id text not null,
    mnemonic text not null,
    encryptionKey blob not null,
    timestamp text not null,
    protocolVersion integer not null
  )
  strict;
`,Ws=n=>async(s,l)=>{let r=await n.exec(Te`select timestamp from evolu_owner limit 1;`).then(({rows:[h]})=>fn(h.timestamp));const _=[];for(const h of s){const g=wa(n)(r);if(!g.ok)return g;r=g.value,_.push({timestamp:r,change:h})}return await Ra(n)(_),l&&await l(),await n.exec(Te.prepared`
      update evolu_owner
      set timestamp = ${Ps(r)};
    `),ve(_)},Ra=n=>async s=>{for(const l of s)await Qs(n)(l),await Vs(n)(l)},Qs=n=>async s=>{const l=new Date(s.timestamp.millis).toISOString(),r=Ls(s.timestamp);for(const[_,h]of gi(s.change.values))await n.exec(Te.prepared`
        with
          lastTimestamp as (
            select timestamp
            from evolu_history
            where
              "row" = ${s.change.id}
              and "column" = ${_}
              and "table" = ${s.change.table}
            order by timestamp desc
            limit 1
          )
        insert into ${Te.identifier(s.change.table)}
          ("id", ${Te.identifier(_)}, createdAt, updatedAt)
        select ${s.change.id}, ${h}, ${l}, ${l}
        where
          (select timestamp from lastTimestamp) is null
          or (select timestamp from lastTimestamp) < ${r}
        on conflict ("id") do update
          set
            ${Te.identifier(_)} = ${h},
            updatedAt = ${l}
          where
            (select timestamp from lastTimestamp) is null
            or (select timestamp from lastTimestamp) < ${r};
      `)},Vs=n=>async s=>{const l=Ba(n),r=[],_=Ls(s.timestamp),[h,g]=fa(ua(_)),T=xa(s.change.id);l===1?r.push({sql:_a,parameters:{$t:_,$h1:h,$h2:g},options:{prepare:!0}},{sql:da,parameters:{$t:_,$h1:h,$h2:g},options:{prepare:!0}}):r.push({sql:ha,parameters:{$t:_,$l:l}},{sql:pa,parameters:{$t:_,$l:l,$h1:h,$h2:g}}),Object.entries(s.change.values).forEach(([W,ie])=>{r.push(Te.prepared`
        insert or ignore into evolu_history
          (timestamp, "table", "row", "column", value)
        values
          (${_}, ${s.change.table}, ${T}, ${W}, ${ie});
      `)});for(const W of r)await n.exec(W)},Na=.25,Da=32,Ba=n=>{let s=1;for(;n.next()<=Na&&s<Da;)s+=1;return s},Gs=n=>async s=>{var h;const l=[];for(const g of s){const T=Zo(g),{rows:W}=await n.exec(T);l.push([g,W]),(h=T.options)!=null&&h.logExplainQueryPlan&&await aa(n)(T)}const r=n.get();n.set(l);const _=n.get();return s.map(g=>({query:g,patches:To(r.get(g),_.get(g)??[])}))},Ua=({exec:n,...s})=>async l=>{if(!(l.tables.some(h=>h.name==="evolu_owner")&&!l.tables.some(h=>h.name==="evolu_history")))return;for(const h of[Te`alter table evolu_owner drop column merkleTree;`,Te`alter table evolu_owner add column protocolVersion blob;`,Te`update evolu_owner set protocolVersion = 1;`])await n(h);const{rows:_}=await n(Te`
      select timestamp, "table", "row", "column", value from evolu_message;
    `);for(const h of[Te`drop table evolu_message;`,js("client"),zs])await n(h);for(const h of _){const g=h.value;await Vs({exec:n,...s})({timestamp:fn(h.timestamp),change:{id:h.row,table:h.table,values:{[h.column]:g}}})}for(const h of[Ms,Hs,$s])await n(h)},ja=async n=>{const s=await Rr(n)();for(const l of s.tables)await n.exec(Te`drop table ${Te.identifier(l.name)};`)},Ma=n=>{n.onMessage(s=>{postMessage(s)}),self.onmessage=s=>{n.postMessage(s.data)}};var dn=(()=>{var n=self.location.href;return function(s={}){var l,r=s,_,h,g=new Promise((e,t)=>{_=e,h=t}),T=typeof window=="object",W=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer";const ie=globalThis.sqlite3InitModuleState||Object.assign(Object.create(null),{debugModule:()=>{}});delete globalThis.sqlite3InitModuleState,ie.debugModule("globalThis.location =",globalThis.location);var fe=Object.assign({},r),L="./this.program",se="";function we(e){return r.locateFile?r.locateFile(e,se):se+e}var ke,Fe;(T||W)&&(W?se=self.location.href:typeof document<"u"&&document.currentScript&&(se=document.currentScript.src),n&&(se=n),se.startsWith("blob:")?se="":se=se.substr(0,se.replace(/[?#].*/,"").lastIndexOf("/")+1),W&&(Fe=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),ke=e=>fetch(e,{credentials:"same-origin"}).then(t=>t.ok?t.arrayBuffer():Promise.reject(new Error(t.status+" : "+t.url))));var Le=r.print||console.log.bind(console),et=r.printErr||console.error.bind(console);Object.assign(r,fe),fe=null,r.arguments&&r.arguments,r.thisProgram&&(L=r.thisProgram);var ct=r.wasmBinary,Pe,Me=!1,rt,xt,St,Oe,$e,ht;function Rt(){var e=Pe.buffer;r.HEAP8=rt=new Int8Array(e),r.HEAP16=St=new Int16Array(e),r.HEAPU8=xt=new Uint8Array(e),r.HEAPU16=new Uint16Array(e),r.HEAP32=Oe=new Int32Array(e),r.HEAPU32=$e=new Uint32Array(e),r.HEAPF32=new Float32Array(e),r.HEAPF64=new Float64Array(e),r.HEAP64=ht=new BigInt64Array(e),r.HEAPU64=new BigUint64Array(e)}if(r.wasmMemory)Pe=r.wasmMemory;else{var Vt=r.INITIAL_MEMORY||16777216;Pe=new WebAssembly.Memory({initial:Vt/65536,maximum:32768})}Rt();var H=[],he=[],ue=[];function le(){var e=r.preRun;e&&(typeof e=="function"&&(e=[e]),e.forEach(Ve)),mn(H)}function pe(){!r.noFSInit&&!f.initialized&&f.init(),f.ignorePermissions=!1,mn(he)}function Ae(){var e=r.postRun;e&&(typeof e=="function"&&(e=[e]),e.forEach(Ke)),mn(ue)}function Ve(e){H.unshift(e)}function Ne(e){he.unshift(e)}function Ke(e){ue.unshift(e)}var We=0,mt=null;function Nt(e){return e}function Dt(e){var t;We++,(t=r.monitorRunDependencies)==null||t.call(r,We)}function Nr(e){var i;if(We--,(i=r.monitorRunDependencies)==null||i.call(r,We),We==0&&mt){var t=mt;mt=null,t()}}function hn(e){var i;(i=r.onAbort)==null||i.call(r,e),e="Aborted("+e+")",et(e),Me=!0,e+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(e);throw h(t),t}var Va="data:application/octet-stream;base64,",Js=e=>e.startsWith(Va);function Ga(){if(r.locateFile){var e="sqlite3.wasm";return Js(e)?e:we(e)}return new URL("/teimtrackr/assets/sqlite3-WT1HU0S9.wasm",self.location.href).href}var pn;function Xs(e){if(e==pn&&ct)return new Uint8Array(ct);if(Fe)return Fe(e);throw"both async and sync fetching of the wasm failed"}function Ka(e){return ct?Promise.resolve().then(()=>Xs(e)):ke(e).then(t=>new Uint8Array(t),()=>Xs(e))}function Ys(e,t,i){return Ka(e).then(o=>WebAssembly.instantiate(o,t)).then(i,o=>{et(`failed to asynchronously prepare wasm: ${o}`),hn(o)})}function Ja(e,t,i,o){return!e&&typeof WebAssembly.instantiateStreaming=="function"&&!Js(t)&&typeof fetch=="function"?fetch(t,{credentials:"same-origin"}).then(a=>{var c=WebAssembly.instantiateStreaming(a,i);return c.then(o,function(y){return et(`wasm streaming compile failed: ${y}`),et("falling back to ArrayBuffer instantiation"),Ys(t,i,o)})}):Ys(t,i,o)}function Xa(){return{env:ii,wasi_snapshot_preview1:ii}}function Ya(){var e=Xa();function t(o,a){return x=o.exports,Ne(x.__wasm_call_ctors),Nr(),x}Dt();function i(o){t(o.instance)}if(r.instantiateWasm)try{return r.instantiateWasm(e,t)}catch(o){et(`Module.instantiateWasm callback failed with error: ${o}`),h(o)}return pn??(pn=Ga()),Ja(ct,pn,e,i).catch(h),{}}var mn=e=>{e.forEach(t=>t(r))};r.noExitRuntime;var Ye={isAbs:e=>e.charAt(0)==="/",splitPath:e=>{var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return t.exec(e).slice(1)},normalizeArray:(e,t)=>{for(var i=0,o=e.length-1;o>=0;o--){var a=e[o];a==="."?e.splice(o,1):a===".."?(e.splice(o,1),i++):i&&(e.splice(o,1),i--)}if(t)for(;i;i--)e.unshift("..");return e},normalize:e=>{var t=Ye.isAbs(e),i=e.substr(-1)==="/";return e=Ye.normalizeArray(e.split("/").filter(o=>!!o),!t).join("/"),!e&&!t&&(e="."),e&&i&&(e+="/"),(t?"/":"")+e},dirname:e=>{var t=Ye.splitPath(e),i=t[0],o=t[1];return!i&&!o?".":(o&&(o=o.substr(0,o.length-1)),i+o)},basename:e=>{if(e==="/")return"/";e=Ye.normalize(e),e=e.replace(/\/$/,"");var t=e.lastIndexOf("/");return t===-1?e:e.substr(t+1)},join:(...e)=>Ye.normalize(e.join("/")),join2:(e,t)=>Ye.normalize(e+"/"+t)},Za=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return e=>crypto.getRandomValues(e);hn("initRandomDevice")},Zs=e=>(Zs=Za())(e),Bt={resolve:(...e)=>{for(var t="",i=!1,o=e.length-1;o>=-1&&!i;o--){var a=o>=0?e[o]:f.cwd();if(typeof a!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!a)return"";t=a+"/"+t,i=Ye.isAbs(a)}return t=Ye.normalizeArray(t.split("/").filter(c=>!!c),!i).join("/"),(i?"/":"")+t||"."},relative:(e,t)=>{e=Bt.resolve(e).substr(1),t=Bt.resolve(t).substr(1);function i(V){for(var ne=0;ne<V.length&&V[ne]==="";ne++);for(var ae=V.length-1;ae>=0&&V[ae]==="";ae--);return ne>ae?[]:V.slice(ne,ae-ne+1)}for(var o=i(e.split("/")),a=i(t.split("/")),c=Math.min(o.length,a.length),y=c,S=0;S<c;S++)if(o[S]!==a[S]){y=S;break}for(var Q=[],S=y;S<o.length;S++)Q.push("..");return Q=Q.concat(a.slice(y)),Q.join("/")}},ei=typeof TextDecoder<"u"?new TextDecoder:void 0,ir=(e,t=0,i=NaN)=>{for(var o=t+i,a=t;e[a]&&!(a>=o);)++a;if(a-t>16&&e.buffer&&ei)return ei.decode(e.subarray(t,a));for(var c="";t<a;){var y=e[t++];if(!(y&128)){c+=String.fromCharCode(y);continue}var S=e[t++]&63;if((y&224)==192){c+=String.fromCharCode((y&31)<<6|S);continue}var Q=e[t++]&63;if((y&240)==224?y=(y&15)<<12|S<<6|Q:y=(y&7)<<18|S<<12|Q<<6|e[t++]&63,y<65536)c+=String.fromCharCode(y);else{var V=y-65536;c+=String.fromCharCode(55296|V>>10,56320|V&1023)}}return c},gn=[],Dr=e=>{for(var t=0,i=0;i<e.length;++i){var o=e.charCodeAt(i);o<=127?t++:o<=2047?t+=2:o>=55296&&o<=57343?(t+=4,++i):t+=3}return t},bn=(e,t,i,o)=>{if(!(o>0))return 0;for(var a=i,c=i+o-1,y=0;y<e.length;++y){var S=e.charCodeAt(y);if(S>=55296&&S<=57343){var Q=e.charCodeAt(++y);S=65536+((S&1023)<<10)|Q&1023}if(S<=127){if(i>=c)break;t[i++]=S}else if(S<=2047){if(i+1>=c)break;t[i++]=192|S>>6,t[i++]=128|S&63}else if(S<=65535){if(i+2>=c)break;t[i++]=224|S>>12,t[i++]=128|S>>6&63,t[i++]=128|S&63}else{if(i+3>=c)break;t[i++]=240|S>>18,t[i++]=128|S>>12&63,t[i++]=128|S>>6&63,t[i++]=128|S&63}}return t[i]=0,i-a};function ti(e,t,i){var o=Dr(e)+1,a=new Array(o),c=bn(e,a,0,a.length);return a.length=c,a}var el=()=>{if(!gn.length){var e=null;if(typeof window<"u"&&typeof window.prompt=="function"&&(e=window.prompt("Input: "),e!==null&&(e+=`
`)),!e)return null;gn=ti(e)}return gn.shift()},Kt={ttys:[],init(){},shutdown(){},register(e,t){Kt.ttys[e]={input:[],output:[],ops:t},f.registerDevice(e,Kt.stream_ops)},stream_ops:{open(e){var t=Kt.ttys[e.node.rdev];if(!t)throw new f.ErrnoError(43);e.tty=t,e.seekable=!1},close(e){e.tty.ops.fsync(e.tty)},fsync(e){e.tty.ops.fsync(e.tty)},read(e,t,i,o,a){if(!e.tty||!e.tty.ops.get_char)throw new f.ErrnoError(60);for(var c=0,y=0;y<o;y++){var S;try{S=e.tty.ops.get_char(e.tty)}catch{throw new f.ErrnoError(29)}if(S===void 0&&c===0)throw new f.ErrnoError(6);if(S==null)break;c++,t[i+y]=S}return c&&(e.node.timestamp=Date.now()),c},write(e,t,i,o,a){if(!e.tty||!e.tty.ops.put_char)throw new f.ErrnoError(60);try{for(var c=0;c<o;c++)e.tty.ops.put_char(e.tty,t[i+c])}catch{throw new f.ErrnoError(29)}return o&&(e.node.timestamp=Date.now()),c}},default_tty_ops:{get_char(e){return el()},put_char(e,t){t===null||t===10?(Le(ir(e.output)),e.output=[]):t!=0&&e.output.push(t)},fsync(e){e.output&&e.output.length>0&&(Le(ir(e.output)),e.output=[])},ioctl_tcgets(e){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(e,t,i){return 0},ioctl_tiocgwinsz(e){return[24,80]}},default_tty1_ops:{put_char(e,t){t===null||t===10?(et(ir(e.output)),e.output=[]):t!=0&&e.output.push(t)},fsync(e){e.output&&e.output.length>0&&(et(ir(e.output)),e.output=[])}}},tl=(e,t)=>{xt.fill(0,e,e+t)},ri=(e,t)=>Math.ceil(e/t)*t,ni=e=>{e=ri(e,65536);var t=oi(65536,e);return t&&tl(t,e),t},Re={ops_table:null,mount(e){return Re.createNode(null,"/",16895,0)},createNode(e,t,i,o){if(f.isBlkdev(i)||f.isFIFO(i))throw new f.ErrnoError(63);Re.ops_table||(Re.ops_table={dir:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr,lookup:Re.node_ops.lookup,mknod:Re.node_ops.mknod,rename:Re.node_ops.rename,unlink:Re.node_ops.unlink,rmdir:Re.node_ops.rmdir,readdir:Re.node_ops.readdir,symlink:Re.node_ops.symlink},stream:{llseek:Re.stream_ops.llseek}},file:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr},stream:{llseek:Re.stream_ops.llseek,read:Re.stream_ops.read,write:Re.stream_ops.write,allocate:Re.stream_ops.allocate,mmap:Re.stream_ops.mmap,msync:Re.stream_ops.msync}},link:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr,readlink:Re.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr},stream:f.chrdev_stream_ops}});var a=f.createNode(e,t,i,o);return f.isDir(a.mode)?(a.node_ops=Re.ops_table.dir.node,a.stream_ops=Re.ops_table.dir.stream,a.contents={}):f.isFile(a.mode)?(a.node_ops=Re.ops_table.file.node,a.stream_ops=Re.ops_table.file.stream,a.usedBytes=0,a.contents=null):f.isLink(a.mode)?(a.node_ops=Re.ops_table.link.node,a.stream_ops=Re.ops_table.link.stream):f.isChrdev(a.mode)&&(a.node_ops=Re.ops_table.chrdev.node,a.stream_ops=Re.ops_table.chrdev.stream),a.timestamp=Date.now(),e&&(e.contents[t]=a,e.timestamp=a.timestamp),a},getFileDataAsTypedArray(e){return e.contents?e.contents.subarray?e.contents.subarray(0,e.usedBytes):new Uint8Array(e.contents):new Uint8Array(0)},expandFileStorage(e,t){var i=e.contents?e.contents.length:0;if(!(i>=t)){var o=1024*1024;t=Math.max(t,i*(i<o?2:1.125)>>>0),i!=0&&(t=Math.max(t,256));var a=e.contents;e.contents=new Uint8Array(t),e.usedBytes>0&&e.contents.set(a.subarray(0,e.usedBytes),0)}},resizeFileStorage(e,t){if(e.usedBytes!=t)if(t==0)e.contents=null,e.usedBytes=0;else{var i=e.contents;e.contents=new Uint8Array(t),i&&e.contents.set(i.subarray(0,Math.min(t,e.usedBytes))),e.usedBytes=t}},node_ops:{getattr(e){var t={};return t.dev=f.isChrdev(e.mode)?e.id:1,t.ino=e.id,t.mode=e.mode,t.nlink=1,t.uid=0,t.gid=0,t.rdev=e.rdev,f.isDir(e.mode)?t.size=4096:f.isFile(e.mode)?t.size=e.usedBytes:f.isLink(e.mode)?t.size=e.link.length:t.size=0,t.atime=new Date(e.timestamp),t.mtime=new Date(e.timestamp),t.ctime=new Date(e.timestamp),t.blksize=4096,t.blocks=Math.ceil(t.size/t.blksize),t},setattr(e,t){t.mode!==void 0&&(e.mode=t.mode),t.timestamp!==void 0&&(e.timestamp=t.timestamp),t.size!==void 0&&Re.resizeFileStorage(e,t.size)},lookup(e,t){throw f.genericErrors[44]},mknod(e,t,i,o){return Re.createNode(e,t,i,o)},rename(e,t,i){if(f.isDir(e.mode)){var o;try{o=f.lookupNode(t,i)}catch{}if(o)for(var a in o.contents)throw new f.ErrnoError(55)}delete e.parent.contents[e.name],e.parent.timestamp=Date.now(),e.name=i,t.contents[i]=e,t.timestamp=e.parent.timestamp},unlink(e,t){delete e.contents[t],e.timestamp=Date.now()},rmdir(e,t){var i=f.lookupNode(e,t);for(var o in i.contents)throw new f.ErrnoError(55);delete e.contents[t],e.timestamp=Date.now()},readdir(e){var t=[".",".."];for(var i of Object.keys(e.contents))t.push(i);return t},symlink(e,t,i){var o=Re.createNode(e,t,41471,0);return o.link=i,o},readlink(e){if(!f.isLink(e.mode))throw new f.ErrnoError(28);return e.link}},stream_ops:{read(e,t,i,o,a){var c=e.node.contents;if(a>=e.node.usedBytes)return 0;var y=Math.min(e.node.usedBytes-a,o);if(y>8&&c.subarray)t.set(c.subarray(a,a+y),i);else for(var S=0;S<y;S++)t[i+S]=c[a+S];return y},write(e,t,i,o,a,c){if(t.buffer===rt.buffer&&(c=!1),!o)return 0;var y=e.node;if(y.timestamp=Date.now(),t.subarray&&(!y.contents||y.contents.subarray)){if(c)return y.contents=t.subarray(i,i+o),y.usedBytes=o,o;if(y.usedBytes===0&&a===0)return y.contents=t.slice(i,i+o),y.usedBytes=o,o;if(a+o<=y.usedBytes)return y.contents.set(t.subarray(i,i+o),a),o}if(Re.expandFileStorage(y,a+o),y.contents.subarray&&t.subarray)y.contents.set(t.subarray(i,i+o),a);else for(var S=0;S<o;S++)y.contents[a+S]=t[i+S];return y.usedBytes=Math.max(y.usedBytes,a+o),o},llseek(e,t,i){var o=t;if(i===1?o+=e.position:i===2&&f.isFile(e.node.mode)&&(o+=e.node.usedBytes),o<0)throw new f.ErrnoError(28);return o},allocate(e,t,i){Re.expandFileStorage(e.node,t+i),e.node.usedBytes=Math.max(e.node.usedBytes,t+i)},mmap(e,t,i,o,a){if(!f.isFile(e.node.mode))throw new f.ErrnoError(43);var c,y,S=e.node.contents;if(!(a&2)&&S&&S.buffer===rt.buffer)y=!1,c=S.byteOffset;else{if(y=!0,c=ni(t),!c)throw new f.ErrnoError(48);S&&((i>0||i+t<S.length)&&(S.subarray?S=S.subarray(i,i+t):S=Array.prototype.slice.call(S,i,i+t)),rt.set(S,c))}return{ptr:c,allocated:y}},msync(e,t,i,o,a){return Re.stream_ops.write(e,t,0,o,i,!1),0}}},rl=(e,t,i,o)=>{var a=`al ${e}`;ke(e).then(c=>{t(new Uint8Array(c)),a&&Nr()},c=>{if(i)i();else throw`Loading data file "${e}" failed.`}),a&&Dt()},nl=(e,t,i,o,a,c)=>{f.createDataFile(e,t,i,o,a,c)},sl=r.preloadPlugins||[],il=(e,t,i,o)=>{typeof Browser<"u"&&Browser.init();var a=!1;return sl.forEach(c=>{a||c.canHandle(t)&&(c.handle(e,t,i,o),a=!0)}),a},ol=(e,t,i,o,a,c,y,S,Q,V)=>{var ne=t?Bt.resolve(Ye.join2(e,t)):e;function ae($){function N(J){V==null||V(),S||nl(e,t,J,o,a,Q),c==null||c(),Nr()}il($,ne,N,()=>{y==null||y(),Nr()})||N($)}Dt(),typeof i=="string"?rl(i,ae,y):ae(i)},al=e=>{var t={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},i=t[e];if(typeof i>"u")throw new Error(`Unknown file open mode: ${e}`);return i},yn=(e,t)=>{var i=0;return e&&(i|=365),t&&(i|=146),i},f={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(e){this.name="ErrnoError",this.errno=e}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(e){this.node=e}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(e){this.shared.flags=e}get position(){return this.shared.position}set position(e){this.shared.position=e}},FSNode:class{constructor(e,t,i,o){e||(e=this),this.parent=e,this.mount=e.mount,this.mounted=null,this.id=f.nextInode++,this.name=t,this.mode=i,this.node_ops={},this.stream_ops={},this.rdev=o,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(e){e?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(e){e?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return f.isDir(this.mode)}get isDevice(){return f.isChrdev(this.mode)}},lookupPath(e,t={}){if(e=Bt.resolve(e),!e)return{path:"",node:null};var i={follow_mount:!0,recurse_count:0};if(t=Object.assign(i,t),t.recurse_count>8)throw new f.ErrnoError(32);for(var o=e.split("/").filter(ae=>!!ae),a=f.root,c="/",y=0;y<o.length;y++){var S=y===o.length-1;if(S&&t.parent)break;if(a=f.lookupNode(a,o[y]),c=Ye.join2(c,o[y]),f.isMountpoint(a)&&(!S||S&&t.follow_mount)&&(a=a.mounted.root),!S||t.follow)for(var Q=0;f.isLink(a.mode);){var V=f.readlink(c);c=Bt.resolve(Ye.dirname(c),V);var ne=f.lookupPath(c,{recurse_count:t.recurse_count+1});if(a=ne.node,Q++>40)throw new f.ErrnoError(32)}}return{path:c,node:a}},getPath(e){for(var t;;){if(f.isRoot(e)){var i=e.mount.mountpoint;return t?i[i.length-1]!=="/"?`${i}/${t}`:i+t:i}t=t?`${e.name}/${t}`:e.name,e=e.parent}},hashName(e,t){for(var i=0,o=0;o<t.length;o++)i=(i<<5)-i+t.charCodeAt(o)|0;return(e+i>>>0)%f.nameTable.length},hashAddNode(e){var t=f.hashName(e.parent.id,e.name);e.name_next=f.nameTable[t],f.nameTable[t]=e},hashRemoveNode(e){var t=f.hashName(e.parent.id,e.name);if(f.nameTable[t]===e)f.nameTable[t]=e.name_next;else for(var i=f.nameTable[t];i;){if(i.name_next===e){i.name_next=e.name_next;break}i=i.name_next}},lookupNode(e,t){var i=f.mayLookup(e);if(i)throw new f.ErrnoError(i);for(var o=f.hashName(e.id,t),a=f.nameTable[o];a;a=a.name_next){var c=a.name;if(a.parent.id===e.id&&c===t)return a}return f.lookup(e,t)},createNode(e,t,i,o){var a=new f.FSNode(e,t,i,o);return f.hashAddNode(a),a},destroyNode(e){f.hashRemoveNode(e)},isRoot(e){return e===e.parent},isMountpoint(e){return!!e.mounted},isFile(e){return(e&61440)===32768},isDir(e){return(e&61440)===16384},isLink(e){return(e&61440)===40960},isChrdev(e){return(e&61440)===8192},isBlkdev(e){return(e&61440)===24576},isFIFO(e){return(e&61440)===4096},isSocket(e){return(e&49152)===49152},flagsToPermissionString(e){var t=["r","w","rw"][e&3];return e&512&&(t+="w"),t},nodePermissions(e,t){return f.ignorePermissions?0:t.includes("r")&&!(e.mode&292)||t.includes("w")&&!(e.mode&146)||t.includes("x")&&!(e.mode&73)?2:0},mayLookup(e){if(!f.isDir(e.mode))return 54;var t=f.nodePermissions(e,"x");return t||(e.node_ops.lookup?0:2)},mayCreate(e,t){try{var i=f.lookupNode(e,t);return 20}catch{}return f.nodePermissions(e,"wx")},mayDelete(e,t,i){var o;try{o=f.lookupNode(e,t)}catch(c){return c.errno}var a=f.nodePermissions(e,"wx");if(a)return a;if(i){if(!f.isDir(o.mode))return 54;if(f.isRoot(o)||f.getPath(o)===f.cwd())return 10}else if(f.isDir(o.mode))return 31;return 0},mayOpen(e,t){return e?f.isLink(e.mode)?32:f.isDir(e.mode)&&(f.flagsToPermissionString(t)!=="r"||t&512)?31:f.nodePermissions(e,f.flagsToPermissionString(t)):44},MAX_OPEN_FDS:4096,nextfd(){for(var e=0;e<=f.MAX_OPEN_FDS;e++)if(!f.streams[e])return e;throw new f.ErrnoError(33)},getStreamChecked(e){var t=f.getStream(e);if(!t)throw new f.ErrnoError(8);return t},getStream:e=>f.streams[e],createStream(e,t=-1){return e=Object.assign(new f.FSStream,e),t==-1&&(t=f.nextfd()),e.fd=t,f.streams[t]=e,e},closeStream(e){f.streams[e]=null},dupStream(e,t=-1){var o,a;var i=f.createStream(e,t);return(a=(o=i.stream_ops)==null?void 0:o.dup)==null||a.call(o,i),i},chrdev_stream_ops:{open(e){var i,o;var t=f.getDevice(e.node.rdev);e.stream_ops=t.stream_ops,(o=(i=e.stream_ops).open)==null||o.call(i,e)},llseek(){throw new f.ErrnoError(70)}},major:e=>e>>8,minor:e=>e&255,makedev:(e,t)=>e<<8|t,registerDevice(e,t){f.devices[e]={stream_ops:t}},getDevice:e=>f.devices[e],getMounts(e){for(var t=[],i=[e];i.length;){var o=i.pop();t.push(o),i.push(...o.mounts)}return t},syncfs(e,t){typeof e=="function"&&(t=e,e=!1),f.syncFSRequests++,f.syncFSRequests>1&&et(`warning: ${f.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var i=f.getMounts(f.root.mount),o=0;function a(y){return f.syncFSRequests--,t(y)}function c(y){if(y)return c.errored?void 0:(c.errored=!0,a(y));++o>=i.length&&a(null)}i.forEach(y=>{if(!y.type.syncfs)return c(null);y.type.syncfs(y,e,c)})},mount(e,t,i){var o=i==="/",a=!i,c;if(o&&f.root)throw new f.ErrnoError(10);if(!o&&!a){var y=f.lookupPath(i,{follow_mount:!1});if(i=y.path,c=y.node,f.isMountpoint(c))throw new f.ErrnoError(10);if(!f.isDir(c.mode))throw new f.ErrnoError(54)}var S={type:e,opts:t,mountpoint:i,mounts:[]},Q=e.mount(S);return Q.mount=S,S.root=Q,o?f.root=Q:c&&(c.mounted=S,c.mount&&c.mount.mounts.push(S)),Q},unmount(e){var t=f.lookupPath(e,{follow_mount:!1});if(!f.isMountpoint(t.node))throw new f.ErrnoError(28);var i=t.node,o=i.mounted,a=f.getMounts(o);Object.keys(f.nameTable).forEach(y=>{for(var S=f.nameTable[y];S;){var Q=S.name_next;a.includes(S.mount)&&f.destroyNode(S),S=Q}}),i.mounted=null;var c=i.mount.mounts.indexOf(o);i.mount.mounts.splice(c,1)},lookup(e,t){return e.node_ops.lookup(e,t)},mknod(e,t,i){var o=f.lookupPath(e,{parent:!0}),a=o.node,c=Ye.basename(e);if(!c||c==="."||c==="..")throw new f.ErrnoError(28);var y=f.mayCreate(a,c);if(y)throw new f.ErrnoError(y);if(!a.node_ops.mknod)throw new f.ErrnoError(63);return a.node_ops.mknod(a,c,t,i)},create(e,t){return t=t!==void 0?t:438,t&=4095,t|=32768,f.mknod(e,t,0)},mkdir(e,t){return t=t!==void 0?t:511,t&=1023,t|=16384,f.mknod(e,t,0)},mkdirTree(e,t){for(var i=e.split("/"),o="",a=0;a<i.length;++a)if(i[a]){o+="/"+i[a];try{f.mkdir(o,t)}catch(c){if(c.errno!=20)throw c}}},mkdev(e,t,i){return typeof i>"u"&&(i=t,t=438),t|=8192,f.mknod(e,t,i)},symlink(e,t){if(!Bt.resolve(e))throw new f.ErrnoError(44);var i=f.lookupPath(t,{parent:!0}),o=i.node;if(!o)throw new f.ErrnoError(44);var a=Ye.basename(t),c=f.mayCreate(o,a);if(c)throw new f.ErrnoError(c);if(!o.node_ops.symlink)throw new f.ErrnoError(63);return o.node_ops.symlink(o,a,e)},rename(e,t){var i=Ye.dirname(e),o=Ye.dirname(t),a=Ye.basename(e),c=Ye.basename(t),y,S,Q;if(y=f.lookupPath(e,{parent:!0}),S=y.node,y=f.lookupPath(t,{parent:!0}),Q=y.node,!S||!Q)throw new f.ErrnoError(44);if(S.mount!==Q.mount)throw new f.ErrnoError(75);var V=f.lookupNode(S,a),ne=Bt.relative(e,o);if(ne.charAt(0)!==".")throw new f.ErrnoError(28);if(ne=Bt.relative(t,i),ne.charAt(0)!==".")throw new f.ErrnoError(55);var ae;try{ae=f.lookupNode(Q,c)}catch{}if(V!==ae){var $=f.isDir(V.mode),N=f.mayDelete(S,a,$);if(N)throw new f.ErrnoError(N);if(N=ae?f.mayDelete(Q,c,$):f.mayCreate(Q,c),N)throw new f.ErrnoError(N);if(!S.node_ops.rename)throw new f.ErrnoError(63);if(f.isMountpoint(V)||ae&&f.isMountpoint(ae))throw new f.ErrnoError(10);if(Q!==S&&(N=f.nodePermissions(S,"w"),N))throw new f.ErrnoError(N);f.hashRemoveNode(V);try{S.node_ops.rename(V,Q,c),V.parent=Q}catch(J){throw J}finally{f.hashAddNode(V)}}},rmdir(e){var t=f.lookupPath(e,{parent:!0}),i=t.node,o=Ye.basename(e),a=f.lookupNode(i,o),c=f.mayDelete(i,o,!0);if(c)throw new f.ErrnoError(c);if(!i.node_ops.rmdir)throw new f.ErrnoError(63);if(f.isMountpoint(a))throw new f.ErrnoError(10);i.node_ops.rmdir(i,o),f.destroyNode(a)},readdir(e){var t=f.lookupPath(e,{follow:!0}),i=t.node;if(!i.node_ops.readdir)throw new f.ErrnoError(54);return i.node_ops.readdir(i)},unlink(e){var t=f.lookupPath(e,{parent:!0}),i=t.node;if(!i)throw new f.ErrnoError(44);var o=Ye.basename(e),a=f.lookupNode(i,o),c=f.mayDelete(i,o,!1);if(c)throw new f.ErrnoError(c);if(!i.node_ops.unlink)throw new f.ErrnoError(63);if(f.isMountpoint(a))throw new f.ErrnoError(10);i.node_ops.unlink(i,o),f.destroyNode(a)},readlink(e){var t=f.lookupPath(e),i=t.node;if(!i)throw new f.ErrnoError(44);if(!i.node_ops.readlink)throw new f.ErrnoError(28);return Bt.resolve(f.getPath(i.parent),i.node_ops.readlink(i))},stat(e,t){var i=f.lookupPath(e,{follow:!t}),o=i.node;if(!o)throw new f.ErrnoError(44);if(!o.node_ops.getattr)throw new f.ErrnoError(63);return o.node_ops.getattr(o)},lstat(e){return f.stat(e,!0)},chmod(e,t,i){var o;if(typeof e=="string"){var a=f.lookupPath(e,{follow:!i});o=a.node}else o=e;if(!o.node_ops.setattr)throw new f.ErrnoError(63);o.node_ops.setattr(o,{mode:t&4095|o.mode&-4096,timestamp:Date.now()})},lchmod(e,t){f.chmod(e,t,!0)},fchmod(e,t){var i=f.getStreamChecked(e);f.chmod(i.node,t)},chown(e,t,i,o){var a;if(typeof e=="string"){var c=f.lookupPath(e,{follow:!o});a=c.node}else a=e;if(!a.node_ops.setattr)throw new f.ErrnoError(63);a.node_ops.setattr(a,{timestamp:Date.now()})},lchown(e,t,i){f.chown(e,t,i,!0)},fchown(e,t,i){var o=f.getStreamChecked(e);f.chown(o.node,t,i)},truncate(e,t){if(t<0)throw new f.ErrnoError(28);var i;if(typeof e=="string"){var o=f.lookupPath(e,{follow:!0});i=o.node}else i=e;if(!i.node_ops.setattr)throw new f.ErrnoError(63);if(f.isDir(i.mode))throw new f.ErrnoError(31);if(!f.isFile(i.mode))throw new f.ErrnoError(28);var a=f.nodePermissions(i,"w");if(a)throw new f.ErrnoError(a);i.node_ops.setattr(i,{size:t,timestamp:Date.now()})},ftruncate(e,t){var i=f.getStreamChecked(e);if((i.flags&2097155)===0)throw new f.ErrnoError(28);f.truncate(i.node,t)},utime(e,t,i){var o=f.lookupPath(e,{follow:!0}),a=o.node;a.node_ops.setattr(a,{timestamp:Math.max(t,i)})},open(e,t,i){if(e==="")throw new f.ErrnoError(44);t=typeof t=="string"?al(t):t,t&64?(i=typeof i>"u"?438:i,i=i&4095|32768):i=0;var o;if(typeof e=="object")o=e;else{e=Ye.normalize(e);try{var a=f.lookupPath(e,{follow:!(t&131072)});o=a.node}catch{}}var c=!1;if(t&64)if(o){if(t&128)throw new f.ErrnoError(20)}else o=f.mknod(e,i,0),c=!0;if(!o)throw new f.ErrnoError(44);if(f.isChrdev(o.mode)&&(t&=-513),t&65536&&!f.isDir(o.mode))throw new f.ErrnoError(54);if(!c){var y=f.mayOpen(o,t);if(y)throw new f.ErrnoError(y)}t&512&&!c&&f.truncate(o,0),t&=-131713;var S=f.createStream({node:o,path:f.getPath(o),flags:t,seekable:!0,position:0,stream_ops:o.stream_ops,ungotten:[],error:!1});return S.stream_ops.open&&S.stream_ops.open(S),r.logReadFiles&&!(t&1)&&(e in f.readFiles||(f.readFiles[e]=1)),S},close(e){if(f.isClosed(e))throw new f.ErrnoError(8);e.getdents&&(e.getdents=null);try{e.stream_ops.close&&e.stream_ops.close(e)}catch(t){throw t}finally{f.closeStream(e.fd)}e.fd=null},isClosed(e){return e.fd===null},llseek(e,t,i){if(f.isClosed(e))throw new f.ErrnoError(8);if(!e.seekable||!e.stream_ops.llseek)throw new f.ErrnoError(70);if(i!=0&&i!=1&&i!=2)throw new f.ErrnoError(28);return e.position=e.stream_ops.llseek(e,t,i),e.ungotten=[],e.position},read(e,t,i,o,a){if(o<0||a<0)throw new f.ErrnoError(28);if(f.isClosed(e))throw new f.ErrnoError(8);if((e.flags&2097155)===1)throw new f.ErrnoError(8);if(f.isDir(e.node.mode))throw new f.ErrnoError(31);if(!e.stream_ops.read)throw new f.ErrnoError(28);var c=typeof a<"u";if(!c)a=e.position;else if(!e.seekable)throw new f.ErrnoError(70);var y=e.stream_ops.read(e,t,i,o,a);return c||(e.position+=y),y},write(e,t,i,o,a,c){if(o<0||a<0)throw new f.ErrnoError(28);if(f.isClosed(e))throw new f.ErrnoError(8);if((e.flags&2097155)===0)throw new f.ErrnoError(8);if(f.isDir(e.node.mode))throw new f.ErrnoError(31);if(!e.stream_ops.write)throw new f.ErrnoError(28);e.seekable&&e.flags&1024&&f.llseek(e,0,2);var y=typeof a<"u";if(!y)a=e.position;else if(!e.seekable)throw new f.ErrnoError(70);var S=e.stream_ops.write(e,t,i,o,a,c);return y||(e.position+=S),S},allocate(e,t,i){if(f.isClosed(e))throw new f.ErrnoError(8);if(t<0||i<=0)throw new f.ErrnoError(28);if((e.flags&2097155)===0)throw new f.ErrnoError(8);if(!f.isFile(e.node.mode)&&!f.isDir(e.node.mode))throw new f.ErrnoError(43);if(!e.stream_ops.allocate)throw new f.ErrnoError(138);e.stream_ops.allocate(e,t,i)},mmap(e,t,i,o,a){if((o&2)!==0&&(a&2)===0&&(e.flags&2097155)!==2)throw new f.ErrnoError(2);if((e.flags&2097155)===1)throw new f.ErrnoError(2);if(!e.stream_ops.mmap)throw new f.ErrnoError(43);if(!t)throw new f.ErrnoError(28);return e.stream_ops.mmap(e,t,i,o,a)},msync(e,t,i,o,a){return e.stream_ops.msync?e.stream_ops.msync(e,t,i,o,a):0},ioctl(e,t,i){if(!e.stream_ops.ioctl)throw new f.ErrnoError(59);return e.stream_ops.ioctl(e,t,i)},readFile(e,t={}){if(t.flags=t.flags||0,t.encoding=t.encoding||"binary",t.encoding!=="utf8"&&t.encoding!=="binary")throw new Error(`Invalid encoding type "${t.encoding}"`);var i,o=f.open(e,t.flags),a=f.stat(e),c=a.size,y=new Uint8Array(c);return f.read(o,y,0,c,0),t.encoding==="utf8"?i=ir(y):t.encoding==="binary"&&(i=y),f.close(o),i},writeFile(e,t,i={}){i.flags=i.flags||577;var o=f.open(e,i.flags,i.mode);if(typeof t=="string"){var a=new Uint8Array(Dr(t)+1),c=bn(t,a,0,a.length);f.write(o,a,0,c,void 0,i.canOwn)}else if(ArrayBuffer.isView(t))f.write(o,t,0,t.byteLength,void 0,i.canOwn);else throw new Error("Unsupported data type");f.close(o)},cwd:()=>f.currentPath,chdir(e){var t=f.lookupPath(e,{follow:!0});if(t.node===null)throw new f.ErrnoError(44);if(!f.isDir(t.node.mode))throw new f.ErrnoError(54);var i=f.nodePermissions(t.node,"x");if(i)throw new f.ErrnoError(i);f.currentPath=t.path},createDefaultDirectories(){f.mkdir("/tmp"),f.mkdir("/home"),f.mkdir("/home/web_user")},createDefaultDevices(){f.mkdir("/dev"),f.registerDevice(f.makedev(1,3),{read:()=>0,write:(o,a,c,y,S)=>y}),f.mkdev("/dev/null",f.makedev(1,3)),Kt.register(f.makedev(5,0),Kt.default_tty_ops),Kt.register(f.makedev(6,0),Kt.default_tty1_ops),f.mkdev("/dev/tty",f.makedev(5,0)),f.mkdev("/dev/tty1",f.makedev(6,0));var e=new Uint8Array(1024),t=0,i=()=>(t===0&&(t=Zs(e).byteLength),e[--t]);f.createDevice("/dev","random",i),f.createDevice("/dev","urandom",i),f.mkdir("/dev/shm"),f.mkdir("/dev/shm/tmp")},createSpecialDirectories(){f.mkdir("/proc");var e=f.mkdir("/proc/self");f.mkdir("/proc/self/fd"),f.mount({mount(){var t=f.createNode(e,"fd",16895,73);return t.node_ops={lookup(i,o){var a=+o,c=f.getStreamChecked(a),y={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>c.path}};return y.parent=y,y}},t}},{},"/proc/self/fd")},createStandardStreams(e,t,i){e?f.createDevice("/dev","stdin",e):f.symlink("/dev/tty","/dev/stdin"),t?f.createDevice("/dev","stdout",null,t):f.symlink("/dev/tty","/dev/stdout"),i?f.createDevice("/dev","stderr",null,i):f.symlink("/dev/tty1","/dev/stderr"),f.open("/dev/stdin",0),f.open("/dev/stdout",1),f.open("/dev/stderr",1)},staticInit(){[44].forEach(e=>{f.genericErrors[e]=new f.ErrnoError(e),f.genericErrors[e].stack="<generic error, no stack>"}),f.nameTable=new Array(4096),f.mount(Re,{},"/"),f.createDefaultDirectories(),f.createDefaultDevices(),f.createSpecialDirectories(),f.filesystems={MEMFS:Re}},init(e,t,i){f.initialized=!0,e??(e=r.stdin),t??(t=r.stdout),i??(i=r.stderr),f.createStandardStreams(e,t,i)},quit(){f.initialized=!1;for(var e=0;e<f.streams.length;e++){var t=f.streams[e];t&&f.close(t)}},findObject(e,t){var i=f.analyzePath(e,t);return i.exists?i.object:null},analyzePath(e,t){try{var i=f.lookupPath(e,{follow:!t});e=i.path}catch{}var o={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var i=f.lookupPath(e,{parent:!0});o.parentExists=!0,o.parentPath=i.path,o.parentObject=i.node,o.name=Ye.basename(e),i=f.lookupPath(e,{follow:!t}),o.exists=!0,o.path=i.path,o.object=i.node,o.name=i.node.name,o.isRoot=i.path==="/"}catch(a){o.error=a.errno}return o},createPath(e,t,i,o){e=typeof e=="string"?e:f.getPath(e);for(var a=t.split("/").reverse();a.length;){var c=a.pop();if(c){var y=Ye.join2(e,c);try{f.mkdir(y)}catch{}e=y}}return y},createFile(e,t,i,o,a){var c=Ye.join2(typeof e=="string"?e:f.getPath(e),t),y=yn(o,a);return f.create(c,y)},createDataFile(e,t,i,o,a,c){var y=t;e&&(e=typeof e=="string"?e:f.getPath(e),y=t?Ye.join2(e,t):e);var S=yn(o,a),Q=f.create(y,S);if(i){if(typeof i=="string"){for(var V=new Array(i.length),ne=0,ae=i.length;ne<ae;++ne)V[ne]=i.charCodeAt(ne);i=V}f.chmod(Q,S|146);var $=f.open(Q,577);f.write($,i,0,i.length,0,c),f.close($),f.chmod(Q,S)}},createDevice(e,t,i,o){var S;var a=Ye.join2(typeof e=="string"?e:f.getPath(e),t),c=yn(!!i,!!o);(S=f.createDevice).major??(S.major=64);var y=f.makedev(f.createDevice.major++,0);return f.registerDevice(y,{open(Q){Q.seekable=!1},close(Q){var V;(V=o==null?void 0:o.buffer)!=null&&V.length&&o(10)},read(Q,V,ne,ae,$){for(var N=0,J=0;J<ae;J++){var I;try{I=i()}catch{throw new f.ErrnoError(29)}if(I===void 0&&N===0)throw new f.ErrnoError(6);if(I==null)break;N++,V[ne+J]=I}return N&&(Q.node.timestamp=Date.now()),N},write(Q,V,ne,ae,$){for(var N=0;N<ae;N++)try{o(V[ne+N])}catch{throw new f.ErrnoError(29)}return ae&&(Q.node.timestamp=Date.now()),N}}),f.mkdev(a,c,y)},forceLoadFile(e){if(e.isDevice||e.isFolder||e.link||e.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{e.contents=Fe(e.url),e.usedBytes=e.contents.length}catch{throw new f.ErrnoError(29)}},createLazyFile(e,t,i,o,a){class c{constructor(){this.lengthKnown=!1,this.chunks=[]}get(N){if(!(N>this.length-1||N<0)){var J=N%this.chunkSize,I=N/this.chunkSize|0;return this.getter(I)[J]}}setDataGetter(N){this.getter=N}cacheLength(){var N=new XMLHttpRequest;if(N.open("HEAD",i,!1),N.send(null),!(N.status>=200&&N.status<300||N.status===304))throw new Error("Couldn't load "+i+". Status: "+N.status);var J=Number(N.getResponseHeader("Content-length")),I,O=(I=N.getResponseHeader("Accept-Ranges"))&&I==="bytes",U=(I=N.getResponseHeader("Content-Encoding"))&&I==="gzip",M=1024*1024;O||(M=J);var G=(X,oe)=>{if(X>oe)throw new Error("invalid range ("+X+", "+oe+") or no bytes requested!");if(oe>J-1)throw new Error("only "+J+" bytes available! programmer error!");var d=new XMLHttpRequest;if(d.open("GET",i,!1),J!==M&&d.setRequestHeader("Range","bytes="+X+"-"+oe),d.responseType="arraybuffer",d.overrideMimeType&&d.overrideMimeType("text/plain; charset=x-user-defined"),d.send(null),!(d.status>=200&&d.status<300||d.status===304))throw new Error("Couldn't load "+i+". Status: "+d.status);return d.response!==void 0?new Uint8Array(d.response||[]):ti(d.responseText||"")},C=this;C.setDataGetter(X=>{var oe=X*M,d=(X+1)*M-1;if(d=Math.min(d,J-1),typeof C.chunks[X]>"u"&&(C.chunks[X]=G(oe,d)),typeof C.chunks[X]>"u")throw new Error("doXHR failed!");return C.chunks[X]}),(U||!J)&&(M=J=1,J=this.getter(0).length,M=J,Le("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=J,this._chunkSize=M,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!W)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var y=new c,S={isDevice:!1,contents:y}}else var S={isDevice:!1,url:i};var Q=f.createFile(e,t,S,o,a);S.contents?Q.contents=S.contents:S.url&&(Q.contents=null,Q.url=S.url),Object.defineProperties(Q,{usedBytes:{get:function(){return this.contents.length}}});var V={},ne=Object.keys(Q.stream_ops);ne.forEach($=>{var N=Q.stream_ops[$];V[$]=(...J)=>(f.forceLoadFile(Q),N(...J))});function ae($,N,J,I,O){var U=$.node.contents;if(O>=U.length)return 0;var M=Math.min(U.length-O,I);if(U.slice)for(var G=0;G<M;G++)N[J+G]=U[O+G];else for(var G=0;G<M;G++)N[J+G]=U.get(O+G);return M}return V.read=($,N,J,I,O)=>(f.forceLoadFile(Q),ae($,N,J,I,O)),V.mmap=($,N,J,I,O)=>{f.forceLoadFile(Q);var U=ni(N);if(!U)throw new f.ErrnoError(48);return ae($,rt,U,N,J),{ptr:U,allocated:!0}},Q.stream_ops=V,Q}},ll=(e,t)=>e?ir(xt,e,t):"",je={DEFAULT_POLLMASK:5,calculateAt(e,t,i){if(Ye.isAbs(t))return t;var o;if(e===-100)o=f.cwd();else{var a=je.getStreamFromFD(e);o=a.path}if(t.length==0){if(!i)throw new f.ErrnoError(44);return o}return Ye.join2(o,t)},doStat(e,t,i){var o=e(t);Oe[i>>2]=o.dev,Oe[i+4>>2]=o.mode,$e[i+8>>2]=o.nlink,Oe[i+12>>2]=o.uid,Oe[i+16>>2]=o.gid,Oe[i+20>>2]=o.rdev,ht[i+24>>3]=BigInt(o.size),Oe[i+32>>2]=4096,Oe[i+36>>2]=o.blocks;var a=o.atime.getTime(),c=o.mtime.getTime(),y=o.ctime.getTime();return ht[i+40>>3]=BigInt(Math.floor(a/1e3)),$e[i+48>>2]=a%1e3*1e3*1e3,ht[i+56>>3]=BigInt(Math.floor(c/1e3)),$e[i+64>>2]=c%1e3*1e3*1e3,ht[i+72>>3]=BigInt(Math.floor(y/1e3)),$e[i+80>>2]=y%1e3*1e3*1e3,ht[i+88>>3]=BigInt(o.ino),0},doMsync(e,t,i,o,a){if(!f.isFile(t.node.mode))throw new f.ErrnoError(43);if(o&2)return 0;var c=xt.slice(e,e+i);f.msync(t,c,a,i,o)},getStreamFromFD(e){var t=f.getStreamChecked(e);return t},varargs:void 0,getStr(e){var t=ll(e);return t}};function cl(e,t){try{return e=je.getStr(e),f.chmod(e,t),0}catch(i){if(typeof f>"u"||i.name!=="ErrnoError")throw i;return-i.errno}}function ul(e,t,i,o){try{if(t=je.getStr(t),t=je.calculateAt(e,t),i&-8)return-28;var a=f.lookupPath(t,{follow:!0}),c=a.node;if(!c)return-44;var y="";return i&4&&(y+="r"),i&2&&(y+="w"),i&1&&(y+="x"),y&&f.nodePermissions(c,y)?-2:0}catch(S){if(typeof f>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function fl(e,t){try{return f.fchmod(e,t),0}catch(i){if(typeof f>"u"||i.name!=="ErrnoError")throw i;return-i.errno}}function _l(e,t,i){try{return f.fchown(e,t,i),0}catch(o){if(typeof f>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}function Br(){var e=Oe[+je.varargs>>2];return je.varargs+=4,e}var or=Br;function dl(e,t,i){je.varargs=i;try{var o=je.getStreamFromFD(e);switch(t){case 0:{var a=Br();if(a<0)return-28;for(;f.streams[a];)a++;var c;return c=f.dupStream(o,a),c.fd}case 1:case 2:return 0;case 3:return o.flags;case 4:{var a=Br();return o.flags|=a,0}case 12:{var a=or(),y=0;return St[a+y>>1]=2,0}case 13:case 14:return 0}return-28}catch(S){if(typeof f>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function hl(e,t){try{var i=je.getStreamFromFD(e);return je.doStat(f.stat,i.path,t)}catch(o){if(typeof f>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}var pl=9007199254740992,ml=-9007199254740992,dr=e=>e<ml||e>pl?NaN:Number(e);function gl(e,t){t=dr(t);try{return isNaN(t)?61:(f.ftruncate(e,t),0)}catch(i){if(typeof f>"u"||i.name!=="ErrnoError")throw i;return-i.errno}}var ar=(e,t,i)=>bn(e,xt,t,i);function bl(e,t){try{if(t===0)return-28;var i=f.cwd(),o=Dr(i)+1;return t<o?-68:(ar(i,e,t),o)}catch(a){if(typeof f>"u"||a.name!=="ErrnoError")throw a;return-a.errno}}function yl(e,t,i){je.varargs=i;try{var o=je.getStreamFromFD(e);switch(t){case 21509:return o.tty?0:-59;case 21505:{if(!o.tty)return-59;if(o.tty.ops.ioctl_tcgets){var a=o.tty.ops.ioctl_tcgets(o),c=or();Oe[c>>2]=a.c_iflag||0,Oe[c+4>>2]=a.c_oflag||0,Oe[c+8>>2]=a.c_cflag||0,Oe[c+12>>2]=a.c_lflag||0;for(var y=0;y<32;y++)rt[c+y+17]=a.c_cc[y]||0;return 0}return 0}case 21510:case 21511:case 21512:return o.tty?0:-59;case 21506:case 21507:case 21508:{if(!o.tty)return-59;if(o.tty.ops.ioctl_tcsets){for(var c=or(),S=Oe[c>>2],Q=Oe[c+4>>2],V=Oe[c+8>>2],ne=Oe[c+12>>2],ae=[],y=0;y<32;y++)ae.push(rt[c+y+17]);return o.tty.ops.ioctl_tcsets(o.tty,t,{c_iflag:S,c_oflag:Q,c_cflag:V,c_lflag:ne,c_cc:ae})}return 0}case 21519:{if(!o.tty)return-59;var c=or();return Oe[c>>2]=0,0}case 21520:return o.tty?-28:-59;case 21531:{var c=or();return f.ioctl(o,t,c)}case 21523:{if(!o.tty)return-59;if(o.tty.ops.ioctl_tiocgwinsz){var $=o.tty.ops.ioctl_tiocgwinsz(o.tty),c=or();St[c>>1]=$[0],St[c+2>>1]=$[1]}return 0}case 21524:return o.tty?0:-59;case 21515:return o.tty?0:-59;default:return-28}}catch(N){if(typeof f>"u"||N.name!=="ErrnoError")throw N;return-N.errno}}function wl(e,t){try{return e=je.getStr(e),je.doStat(f.lstat,e,t)}catch(i){if(typeof f>"u"||i.name!=="ErrnoError")throw i;return-i.errno}}function xl(e,t,i){try{return t=je.getStr(t),t=je.calculateAt(e,t),t=Ye.normalize(t),t[t.length-1]==="/"&&(t=t.substr(0,t.length-1)),f.mkdir(t,i,0),0}catch(o){if(typeof f>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}function ql(e,t,i,o){try{t=je.getStr(t);var a=o&256,c=o&4096;return o=o&-6401,t=je.calculateAt(e,t,c),je.doStat(a?f.lstat:f.stat,t,i)}catch(y){if(typeof f>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}function vl(e,t,i,o){je.varargs=o;try{t=je.getStr(t),t=je.calculateAt(e,t);var a=o?Br():0;return f.open(t,i,a).fd}catch(c){if(typeof f>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function El(e,t,i,o){try{if(t=je.getStr(t),t=je.calculateAt(e,t),o<=0)return-28;var a=f.readlink(t),c=Math.min(o,Dr(a)),y=rt[i+c];return ar(a,i,o+1),rt[i+c]=y,c}catch(S){if(typeof f>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function Sl(e){try{return e=je.getStr(e),f.rmdir(e),0}catch(t){if(typeof f>"u"||t.name!=="ErrnoError")throw t;return-t.errno}}function kl(e,t){try{return e=je.getStr(e),je.doStat(f.stat,e,t)}catch(i){if(typeof f>"u"||i.name!=="ErrnoError")throw i;return-i.errno}}function Al(e,t,i){try{return t=je.getStr(t),t=je.calculateAt(e,t),i===0?f.unlink(t):i===512?f.rmdir(t):hn("Invalid flags passed to unlinkat"),0}catch(o){if(typeof f>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}var si=e=>$e[e>>2]+Oe[e+4>>2]*4294967296;function Il(e,t,i,o){try{t=je.getStr(t),t=je.calculateAt(e,t,!0);var a=Date.now(),c,y;if(!i)c=a,y=a;else{var S=si(i),Q=Oe[i+8>>2];Q==1073741823?c=a:Q==1073741822?c=-1:c=S*1e3+Q/(1e3*1e3),i+=16,S=si(i),Q=Oe[i+8>>2],Q==1073741823?y=a:Q==1073741822?y=-1:y=S*1e3+Q/(1e3*1e3)}return(y!=-1||c!=-1)&&f.utime(t,c,y),0}catch(V){if(typeof f>"u"||V.name!=="ErrnoError")throw V;return-V.errno}}var Tl=1,Fl=()=>Tl,Ol=e=>e%4===0&&(e%100!==0||e%400===0),Pl=[0,31,60,91,121,152,182,213,244,274,305,335],Ll=[0,31,59,90,120,151,181,212,243,273,304,334],Cl=e=>{var t=Ol(e.getFullYear()),i=t?Pl:Ll,o=i[e.getMonth()]+e.getDate()-1;return o};function Rl(e,t){e=dr(e);var i=new Date(e*1e3);Oe[t>>2]=i.getSeconds(),Oe[t+4>>2]=i.getMinutes(),Oe[t+8>>2]=i.getHours(),Oe[t+12>>2]=i.getDate(),Oe[t+16>>2]=i.getMonth(),Oe[t+20>>2]=i.getFullYear()-1900,Oe[t+24>>2]=i.getDay();var o=Cl(i)|0;Oe[t+28>>2]=o,Oe[t+36>>2]=-(i.getTimezoneOffset()*60);var a=new Date(i.getFullYear(),0,1),c=new Date(i.getFullYear(),6,1).getTimezoneOffset(),y=a.getTimezoneOffset(),S=(c!=y&&i.getTimezoneOffset()==Math.min(y,c))|0;Oe[t+32>>2]=S}function Nl(e,t,i,o,a,c,y){a=dr(a);try{if(isNaN(a))return 61;var S=je.getStreamFromFD(o),Q=f.mmap(S,e,a,t,i),V=Q.ptr;return Oe[c>>2]=Q.allocated,$e[y>>2]=V,0}catch(ne){if(typeof f>"u"||ne.name!=="ErrnoError")throw ne;return-ne.errno}}function Dl(e,t,i,o,a,c){c=dr(c);try{var y=je.getStreamFromFD(a);i&2&&je.doMsync(e,y,t,o,c)}catch(S){if(typeof f>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}var Bl=(e,t,i,o)=>{var a=new Date().getFullYear(),c=new Date(a,0,1),y=new Date(a,6,1),S=c.getTimezoneOffset(),Q=y.getTimezoneOffset(),V=Math.max(S,Q);$e[e>>2]=V*60,Oe[t>>2]=+(S!=Q);var ne=N=>{var J=N>=0?"-":"+",I=Math.abs(N),O=String(Math.floor(I/60)).padStart(2,"0"),U=String(I%60).padStart(2,"0");return`UTC${J}${O}${U}`},ae=ne(S),$=ne(Q);Q<S?(ar(ae,i,17),ar($,o,17)):(ar(ae,o,17),ar($,i,17))},Ul=()=>Date.now(),jl=()=>performance.now(),Ml=()=>2147483648,zl=e=>{var t=Pe.buffer,i=(e-t.byteLength+65535)/65536|0;try{return Pe.grow(i),Rt(),1}catch{}},Hl=e=>{var t=xt.length;e>>>=0;var i=Ml();if(e>i)return!1;for(var o=1;o<=4;o*=2){var a=t*(1+.2/o);a=Math.min(a,e+100663296);var c=Math.min(i,ri(Math.max(e,a),65536)),y=zl(c);if(y)return!0}return!1},wn={},$l=()=>L||"./this.program",hr=()=>{if(!hr.strings){var e=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:e,_:$l()};for(var i in wn)wn[i]===void 0?delete t[i]:t[i]=wn[i];var o=[];for(var i in t)o.push(`${i}=${t[i]}`);hr.strings=o}return hr.strings},Wl=(e,t)=>{for(var i=0;i<e.length;++i)rt[t++]=e.charCodeAt(i);rt[t]=0},Ql=(e,t)=>{var i=0;return hr().forEach((o,a)=>{var c=t+i;$e[e+a*4>>2]=c,Wl(o,c),i+=o.length+1}),0},Vl=(e,t)=>{var i=hr();$e[e>>2]=i.length;var o=0;return i.forEach(a=>o+=a.length+1),$e[t>>2]=o,0};function Gl(e){try{var t=je.getStreamFromFD(e);return f.close(t),0}catch(i){if(typeof f>"u"||i.name!=="ErrnoError")throw i;return i.errno}}function Kl(e,t){try{var i=0,o=0,a=0,c=je.getStreamFromFD(e),y=c.tty?2:f.isDir(c.mode)?3:f.isLink(c.mode)?7:4;return rt[t]=y,St[t+2>>1]=a,ht[t+8>>3]=BigInt(i),ht[t+16>>3]=BigInt(o),0}catch(S){if(typeof f>"u"||S.name!=="ErrnoError")throw S;return S.errno}}var Jl=(e,t,i,o)=>{for(var a=0,c=0;c<i;c++){var y=$e[t>>2],S=$e[t+4>>2];t+=8;var Q=f.read(e,rt,y,S,o);if(Q<0)return-1;if(a+=Q,Q<S)break}return a};function Xl(e,t,i,o){try{var a=je.getStreamFromFD(e),c=Jl(a,t,i);return $e[o>>2]=c,0}catch(y){if(typeof f>"u"||y.name!=="ErrnoError")throw y;return y.errno}}function Yl(e,t,i,o){t=dr(t);try{if(isNaN(t))return 61;var a=je.getStreamFromFD(e);return f.llseek(a,t,i),ht[o>>3]=BigInt(a.position),a.getdents&&t===0&&i===0&&(a.getdents=null),0}catch(c){if(typeof f>"u"||c.name!=="ErrnoError")throw c;return c.errno}}function Zl(e){var i;try{var t=je.getStreamFromFD(e);return(i=t.stream_ops)!=null&&i.fsync?t.stream_ops.fsync(t):0}catch(o){if(typeof f>"u"||o.name!=="ErrnoError")throw o;return o.errno}}var ec=(e,t,i,o)=>{for(var a=0,c=0;c<i;c++){var y=$e[t>>2],S=$e[t+4>>2];t+=8;var Q=f.write(e,rt,y,S,o);if(Q<0)return-1;if(a+=Q,Q<S)break}return a};function tc(e,t,i,o){try{var a=je.getStreamFromFD(e),c=ec(a,t,i);return $e[o>>2]=c,0}catch(y){if(typeof f>"u"||y.name!=="ErrnoError")throw y;return y.errno}}f.createPreloadedFile=ol,f.staticInit();var ii={__syscall_chmod:cl,__syscall_faccessat:ul,__syscall_fchmod:fl,__syscall_fchown32:_l,__syscall_fcntl64:dl,__syscall_fstat64:hl,__syscall_ftruncate64:gl,__syscall_getcwd:bl,__syscall_ioctl:yl,__syscall_lstat64:wl,__syscall_mkdirat:xl,__syscall_newfstatat:ql,__syscall_openat:vl,__syscall_readlinkat:El,__syscall_rmdir:Sl,__syscall_stat64:kl,__syscall_unlinkat:Al,__syscall_utimensat:Il,_emscripten_get_now_is_monotonic:Fl,_localtime_js:Rl,_mmap_js:Nl,_munmap_js:Dl,_tzset_js:Bl,emscripten_date_now:Ul,emscripten_get_now:jl,emscripten_resize_heap:Hl,environ_get:Ql,environ_sizes_get:Vl,fd_close:Gl,fd_fdstat_get:Kl,fd_read:Xl,fd_seek:Yl,fd_sync:Zl,fd_write:tc,memory:Pe},x=Ya();r._sqlite3_status64=(e,t,i,o)=>(r._sqlite3_status64=x.sqlite3_status64)(e,t,i,o),r._sqlite3_status=(e,t,i,o)=>(r._sqlite3_status=x.sqlite3_status)(e,t,i,o),r._sqlite3_db_status=(e,t,i,o,a)=>(r._sqlite3_db_status=x.sqlite3_db_status)(e,t,i,o,a),r._sqlite3_msize=e=>(r._sqlite3_msize=x.sqlite3_msize)(e),r._sqlite3_vfs_find=e=>(r._sqlite3_vfs_find=x.sqlite3_vfs_find)(e),r._sqlite3_initialize=()=>(r._sqlite3_initialize=x.sqlite3_initialize)(),r._sqlite3_malloc=e=>(r._sqlite3_malloc=x.sqlite3_malloc)(e),r._sqlite3_free=e=>(r._sqlite3_free=x.sqlite3_free)(e),r._sqlite3_vfs_register=(e,t)=>(r._sqlite3_vfs_register=x.sqlite3_vfs_register)(e,t),r._sqlite3_vfs_unregister=e=>(r._sqlite3_vfs_unregister=x.sqlite3_vfs_unregister)(e),r._sqlite3_malloc64=e=>(r._sqlite3_malloc64=x.sqlite3_malloc64)(e),r._sqlite3_realloc=(e,t)=>(r._sqlite3_realloc=x.sqlite3_realloc)(e,t),r._sqlite3_realloc64=(e,t)=>(r._sqlite3_realloc64=x.sqlite3_realloc64)(e,t),r._sqlite3_value_text=e=>(r._sqlite3_value_text=x.sqlite3_value_text)(e),r._sqlite3_randomness=(e,t)=>(r._sqlite3_randomness=x.sqlite3_randomness)(e,t),r._sqlite3_stricmp=(e,t)=>(r._sqlite3_stricmp=x.sqlite3_stricmp)(e,t),r._sqlite3_strnicmp=(e,t,i)=>(r._sqlite3_strnicmp=x.sqlite3_strnicmp)(e,t,i),r._sqlite3_uri_parameter=(e,t)=>(r._sqlite3_uri_parameter=x.sqlite3_uri_parameter)(e,t),r._sqlite3_uri_boolean=(e,t,i)=>(r._sqlite3_uri_boolean=x.sqlite3_uri_boolean)(e,t,i),r._sqlite3_serialize=(e,t,i,o)=>(r._sqlite3_serialize=x.sqlite3_serialize)(e,t,i,o),r._sqlite3_prepare_v2=(e,t,i,o,a)=>(r._sqlite3_prepare_v2=x.sqlite3_prepare_v2)(e,t,i,o,a),r._sqlite3_step=e=>(r._sqlite3_step=x.sqlite3_step)(e),r._sqlite3_column_int64=(e,t)=>(r._sqlite3_column_int64=x.sqlite3_column_int64)(e,t),r._sqlite3_reset=e=>(r._sqlite3_reset=x.sqlite3_reset)(e),r._sqlite3_exec=(e,t,i,o,a)=>(r._sqlite3_exec=x.sqlite3_exec)(e,t,i,o,a),r._sqlite3_column_int=(e,t)=>(r._sqlite3_column_int=x.sqlite3_column_int)(e,t),r._sqlite3_finalize=e=>(r._sqlite3_finalize=x.sqlite3_finalize)(e),r._sqlite3_file_control=(e,t,i,o)=>(r._sqlite3_file_control=x.sqlite3_file_control)(e,t,i,o),r._sqlite3_column_name=(e,t)=>(r._sqlite3_column_name=x.sqlite3_column_name)(e,t),r._sqlite3_column_text=(e,t)=>(r._sqlite3_column_text=x.sqlite3_column_text)(e,t),r._sqlite3_column_type=(e,t)=>(r._sqlite3_column_type=x.sqlite3_column_type)(e,t),r._sqlite3_errmsg=e=>(r._sqlite3_errmsg=x.sqlite3_errmsg)(e),r._sqlite3_deserialize=(e,t,i,o,a,c)=>(r._sqlite3_deserialize=x.sqlite3_deserialize)(e,t,i,o,a,c),r._sqlite3_clear_bindings=e=>(r._sqlite3_clear_bindings=x.sqlite3_clear_bindings)(e),r._sqlite3_value_blob=e=>(r._sqlite3_value_blob=x.sqlite3_value_blob)(e),r._sqlite3_value_bytes=e=>(r._sqlite3_value_bytes=x.sqlite3_value_bytes)(e),r._sqlite3_value_double=e=>(r._sqlite3_value_double=x.sqlite3_value_double)(e),r._sqlite3_value_int=e=>(r._sqlite3_value_int=x.sqlite3_value_int)(e),r._sqlite3_value_int64=e=>(r._sqlite3_value_int64=x.sqlite3_value_int64)(e),r._sqlite3_value_subtype=e=>(r._sqlite3_value_subtype=x.sqlite3_value_subtype)(e),r._sqlite3_value_pointer=(e,t)=>(r._sqlite3_value_pointer=x.sqlite3_value_pointer)(e,t),r._sqlite3_value_type=e=>(r._sqlite3_value_type=x.sqlite3_value_type)(e),r._sqlite3_value_nochange=e=>(r._sqlite3_value_nochange=x.sqlite3_value_nochange)(e),r._sqlite3_value_frombind=e=>(r._sqlite3_value_frombind=x.sqlite3_value_frombind)(e),r._sqlite3_value_dup=e=>(r._sqlite3_value_dup=x.sqlite3_value_dup)(e),r._sqlite3_value_free=e=>(r._sqlite3_value_free=x.sqlite3_value_free)(e),r._sqlite3_result_blob=(e,t,i,o)=>(r._sqlite3_result_blob=x.sqlite3_result_blob)(e,t,i,o),r._sqlite3_result_error_toobig=e=>(r._sqlite3_result_error_toobig=x.sqlite3_result_error_toobig)(e),r._sqlite3_result_error_nomem=e=>(r._sqlite3_result_error_nomem=x.sqlite3_result_error_nomem)(e),r._sqlite3_result_double=(e,t)=>(r._sqlite3_result_double=x.sqlite3_result_double)(e,t),r._sqlite3_result_error=(e,t,i)=>(r._sqlite3_result_error=x.sqlite3_result_error)(e,t,i),r._sqlite3_result_int=(e,t)=>(r._sqlite3_result_int=x.sqlite3_result_int)(e,t),r._sqlite3_result_int64=(e,t)=>(r._sqlite3_result_int64=x.sqlite3_result_int64)(e,t),r._sqlite3_result_null=e=>(r._sqlite3_result_null=x.sqlite3_result_null)(e),r._sqlite3_result_pointer=(e,t,i,o)=>(r._sqlite3_result_pointer=x.sqlite3_result_pointer)(e,t,i,o),r._sqlite3_result_subtype=(e,t)=>(r._sqlite3_result_subtype=x.sqlite3_result_subtype)(e,t),r._sqlite3_result_text=(e,t,i,o)=>(r._sqlite3_result_text=x.sqlite3_result_text)(e,t,i,o),r._sqlite3_result_zeroblob=(e,t)=>(r._sqlite3_result_zeroblob=x.sqlite3_result_zeroblob)(e,t),r._sqlite3_result_zeroblob64=(e,t)=>(r._sqlite3_result_zeroblob64=x.sqlite3_result_zeroblob64)(e,t),r._sqlite3_result_error_code=(e,t)=>(r._sqlite3_result_error_code=x.sqlite3_result_error_code)(e,t),r._sqlite3_user_data=e=>(r._sqlite3_user_data=x.sqlite3_user_data)(e),r._sqlite3_context_db_handle=e=>(r._sqlite3_context_db_handle=x.sqlite3_context_db_handle)(e),r._sqlite3_vtab_nochange=e=>(r._sqlite3_vtab_nochange=x.sqlite3_vtab_nochange)(e),r._sqlite3_vtab_in_first=(e,t)=>(r._sqlite3_vtab_in_first=x.sqlite3_vtab_in_first)(e,t),r._sqlite3_vtab_in_next=(e,t)=>(r._sqlite3_vtab_in_next=x.sqlite3_vtab_in_next)(e,t),r._sqlite3_aggregate_context=(e,t)=>(r._sqlite3_aggregate_context=x.sqlite3_aggregate_context)(e,t),r._sqlite3_get_auxdata=(e,t)=>(r._sqlite3_get_auxdata=x.sqlite3_get_auxdata)(e,t),r._sqlite3_set_auxdata=(e,t,i,o)=>(r._sqlite3_set_auxdata=x.sqlite3_set_auxdata)(e,t,i,o),r._sqlite3_column_count=e=>(r._sqlite3_column_count=x.sqlite3_column_count)(e),r._sqlite3_data_count=e=>(r._sqlite3_data_count=x.sqlite3_data_count)(e),r._sqlite3_column_blob=(e,t)=>(r._sqlite3_column_blob=x.sqlite3_column_blob)(e,t),r._sqlite3_column_bytes=(e,t)=>(r._sqlite3_column_bytes=x.sqlite3_column_bytes)(e,t),r._sqlite3_column_double=(e,t)=>(r._sqlite3_column_double=x.sqlite3_column_double)(e,t),r._sqlite3_column_value=(e,t)=>(r._sqlite3_column_value=x.sqlite3_column_value)(e,t),r._sqlite3_column_decltype=(e,t)=>(r._sqlite3_column_decltype=x.sqlite3_column_decltype)(e,t),r._sqlite3_bind_blob=(e,t,i,o,a)=>(r._sqlite3_bind_blob=x.sqlite3_bind_blob)(e,t,i,o,a),r._sqlite3_bind_double=(e,t,i)=>(r._sqlite3_bind_double=x.sqlite3_bind_double)(e,t,i),r._sqlite3_bind_int=(e,t,i)=>(r._sqlite3_bind_int=x.sqlite3_bind_int)(e,t,i),r._sqlite3_bind_int64=(e,t,i)=>(r._sqlite3_bind_int64=x.sqlite3_bind_int64)(e,t,i),r._sqlite3_bind_null=(e,t)=>(r._sqlite3_bind_null=x.sqlite3_bind_null)(e,t),r._sqlite3_bind_pointer=(e,t,i,o,a)=>(r._sqlite3_bind_pointer=x.sqlite3_bind_pointer)(e,t,i,o,a),r._sqlite3_bind_text=(e,t,i,o,a)=>(r._sqlite3_bind_text=x.sqlite3_bind_text)(e,t,i,o,a),r._sqlite3_bind_parameter_count=e=>(r._sqlite3_bind_parameter_count=x.sqlite3_bind_parameter_count)(e),r._sqlite3_bind_parameter_name=(e,t)=>(r._sqlite3_bind_parameter_name=x.sqlite3_bind_parameter_name)(e,t),r._sqlite3_bind_parameter_index=(e,t)=>(r._sqlite3_bind_parameter_index=x.sqlite3_bind_parameter_index)(e,t),r._sqlite3_db_handle=e=>(r._sqlite3_db_handle=x.sqlite3_db_handle)(e),r._sqlite3_stmt_readonly=e=>(r._sqlite3_stmt_readonly=x.sqlite3_stmt_readonly)(e),r._sqlite3_stmt_isexplain=e=>(r._sqlite3_stmt_isexplain=x.sqlite3_stmt_isexplain)(e),r._sqlite3_stmt_explain=(e,t)=>(r._sqlite3_stmt_explain=x.sqlite3_stmt_explain)(e,t),r._sqlite3_stmt_busy=e=>(r._sqlite3_stmt_busy=x.sqlite3_stmt_busy)(e),r._sqlite3_stmt_status=(e,t,i)=>(r._sqlite3_stmt_status=x.sqlite3_stmt_status)(e,t,i),r._sqlite3_sql=e=>(r._sqlite3_sql=x.sqlite3_sql)(e),r._sqlite3_expanded_sql=e=>(r._sqlite3_expanded_sql=x.sqlite3_expanded_sql)(e),r._sqlite3_preupdate_old=(e,t,i)=>(r._sqlite3_preupdate_old=x.sqlite3_preupdate_old)(e,t,i),r._sqlite3_preupdate_count=e=>(r._sqlite3_preupdate_count=x.sqlite3_preupdate_count)(e),r._sqlite3_preupdate_depth=e=>(r._sqlite3_preupdate_depth=x.sqlite3_preupdate_depth)(e),r._sqlite3_preupdate_blobwrite=e=>(r._sqlite3_preupdate_blobwrite=x.sqlite3_preupdate_blobwrite)(e),r._sqlite3_preupdate_new=(e,t,i)=>(r._sqlite3_preupdate_new=x.sqlite3_preupdate_new)(e,t,i),r._sqlite3_value_numeric_type=e=>(r._sqlite3_value_numeric_type=x.sqlite3_value_numeric_type)(e),r._sqlite3_set_authorizer=(e,t,i)=>(r._sqlite3_set_authorizer=x.sqlite3_set_authorizer)(e,t,i),r._sqlite3_strglob=(e,t)=>(r._sqlite3_strglob=x.sqlite3_strglob)(e,t),r._sqlite3_strlike=(e,t,i)=>(r._sqlite3_strlike=x.sqlite3_strlike)(e,t,i),r._sqlite3_auto_extension=e=>(r._sqlite3_auto_extension=x.sqlite3_auto_extension)(e),r._sqlite3_cancel_auto_extension=e=>(r._sqlite3_cancel_auto_extension=x.sqlite3_cancel_auto_extension)(e),r._sqlite3_reset_auto_extension=()=>(r._sqlite3_reset_auto_extension=x.sqlite3_reset_auto_extension)(),r._sqlite3_prepare_v3=(e,t,i,o,a,c)=>(r._sqlite3_prepare_v3=x.sqlite3_prepare_v3)(e,t,i,o,a,c),r._sqlite3_create_module=(e,t,i,o)=>(r._sqlite3_create_module=x.sqlite3_create_module)(e,t,i,o),r._sqlite3_create_module_v2=(e,t,i,o,a)=>(r._sqlite3_create_module_v2=x.sqlite3_create_module_v2)(e,t,i,o,a),r._sqlite3_drop_modules=(e,t)=>(r._sqlite3_drop_modules=x.sqlite3_drop_modules)(e,t),r._sqlite3_declare_vtab=(e,t)=>(r._sqlite3_declare_vtab=x.sqlite3_declare_vtab)(e,t),r._sqlite3_vtab_on_conflict=e=>(r._sqlite3_vtab_on_conflict=x.sqlite3_vtab_on_conflict)(e),r._sqlite3_vtab_collation=(e,t)=>(r._sqlite3_vtab_collation=x.sqlite3_vtab_collation)(e,t),r._sqlite3_vtab_in=(e,t,i)=>(r._sqlite3_vtab_in=x.sqlite3_vtab_in)(e,t,i),r._sqlite3_vtab_rhs_value=(e,t,i)=>(r._sqlite3_vtab_rhs_value=x.sqlite3_vtab_rhs_value)(e,t,i),r._sqlite3_vtab_distinct=e=>(r._sqlite3_vtab_distinct=x.sqlite3_vtab_distinct)(e),r._sqlite3_keyword_name=(e,t,i)=>(r._sqlite3_keyword_name=x.sqlite3_keyword_name)(e,t,i),r._sqlite3_keyword_count=()=>(r._sqlite3_keyword_count=x.sqlite3_keyword_count)(),r._sqlite3_keyword_check=(e,t)=>(r._sqlite3_keyword_check=x.sqlite3_keyword_check)(e,t),r._sqlite3_complete=e=>(r._sqlite3_complete=x.sqlite3_complete)(e),r._sqlite3_libversion=()=>(r._sqlite3_libversion=x.sqlite3_libversion)(),r._sqlite3_libversion_number=()=>(r._sqlite3_libversion_number=x.sqlite3_libversion_number)(),r._sqlite3_shutdown=()=>(r._sqlite3_shutdown=x.sqlite3_shutdown)(),r._sqlite3_last_insert_rowid=e=>(r._sqlite3_last_insert_rowid=x.sqlite3_last_insert_rowid)(e),r._sqlite3_set_last_insert_rowid=(e,t)=>(r._sqlite3_set_last_insert_rowid=x.sqlite3_set_last_insert_rowid)(e,t),r._sqlite3_changes64=e=>(r._sqlite3_changes64=x.sqlite3_changes64)(e),r._sqlite3_changes=e=>(r._sqlite3_changes=x.sqlite3_changes)(e),r._sqlite3_total_changes64=e=>(r._sqlite3_total_changes64=x.sqlite3_total_changes64)(e),r._sqlite3_total_changes=e=>(r._sqlite3_total_changes=x.sqlite3_total_changes)(e),r._sqlite3_txn_state=(e,t)=>(r._sqlite3_txn_state=x.sqlite3_txn_state)(e,t),r._sqlite3_close_v2=e=>(r._sqlite3_close_v2=x.sqlite3_close_v2)(e),r._sqlite3_busy_handler=(e,t,i)=>(r._sqlite3_busy_handler=x.sqlite3_busy_handler)(e,t,i),r._sqlite3_progress_handler=(e,t,i,o)=>(r._sqlite3_progress_handler=x.sqlite3_progress_handler)(e,t,i,o),r._sqlite3_busy_timeout=(e,t)=>(r._sqlite3_busy_timeout=x.sqlite3_busy_timeout)(e,t),r._sqlite3_interrupt=e=>(r._sqlite3_interrupt=x.sqlite3_interrupt)(e),r._sqlite3_is_interrupted=e=>(r._sqlite3_is_interrupted=x.sqlite3_is_interrupted)(e),r._sqlite3_create_function=(e,t,i,o,a,c,y,S)=>(r._sqlite3_create_function=x.sqlite3_create_function)(e,t,i,o,a,c,y,S),r._sqlite3_create_function_v2=(e,t,i,o,a,c,y,S,Q)=>(r._sqlite3_create_function_v2=x.sqlite3_create_function_v2)(e,t,i,o,a,c,y,S,Q),r._sqlite3_create_window_function=(e,t,i,o,a,c,y,S,Q,V)=>(r._sqlite3_create_window_function=x.sqlite3_create_window_function)(e,t,i,o,a,c,y,S,Q,V),r._sqlite3_overload_function=(e,t,i)=>(r._sqlite3_overload_function=x.sqlite3_overload_function)(e,t,i),r._sqlite3_trace_v2=(e,t,i,o)=>(r._sqlite3_trace_v2=x.sqlite3_trace_v2)(e,t,i,o),r._sqlite3_commit_hook=(e,t,i)=>(r._sqlite3_commit_hook=x.sqlite3_commit_hook)(e,t,i),r._sqlite3_update_hook=(e,t,i)=>(r._sqlite3_update_hook=x.sqlite3_update_hook)(e,t,i),r._sqlite3_rollback_hook=(e,t,i)=>(r._sqlite3_rollback_hook=x.sqlite3_rollback_hook)(e,t,i),r._sqlite3_preupdate_hook=(e,t,i)=>(r._sqlite3_preupdate_hook=x.sqlite3_preupdate_hook)(e,t,i),r._sqlite3_error_offset=e=>(r._sqlite3_error_offset=x.sqlite3_error_offset)(e),r._sqlite3_errcode=e=>(r._sqlite3_errcode=x.sqlite3_errcode)(e),r._sqlite3_extended_errcode=e=>(r._sqlite3_extended_errcode=x.sqlite3_extended_errcode)(e),r._sqlite3_errstr=e=>(r._sqlite3_errstr=x.sqlite3_errstr)(e),r._sqlite3_limit=(e,t,i)=>(r._sqlite3_limit=x.sqlite3_limit)(e,t,i),r._sqlite3_open=(e,t)=>(r._sqlite3_open=x.sqlite3_open)(e,t),r._sqlite3_open_v2=(e,t,i,o)=>(r._sqlite3_open_v2=x.sqlite3_open_v2)(e,t,i,o),r._sqlite3_create_collation=(e,t,i,o,a)=>(r._sqlite3_create_collation=x.sqlite3_create_collation)(e,t,i,o,a),r._sqlite3_create_collation_v2=(e,t,i,o,a,c)=>(r._sqlite3_create_collation_v2=x.sqlite3_create_collation_v2)(e,t,i,o,a,c),r._sqlite3_collation_needed=(e,t,i)=>(r._sqlite3_collation_needed=x.sqlite3_collation_needed)(e,t,i),r._sqlite3_get_autocommit=e=>(r._sqlite3_get_autocommit=x.sqlite3_get_autocommit)(e),r._sqlite3_table_column_metadata=(e,t,i,o,a,c,y,S,Q)=>(r._sqlite3_table_column_metadata=x.sqlite3_table_column_metadata)(e,t,i,o,a,c,y,S,Q),r._sqlite3_extended_result_codes=(e,t)=>(r._sqlite3_extended_result_codes=x.sqlite3_extended_result_codes)(e,t),r._sqlite3_uri_key=(e,t)=>(r._sqlite3_uri_key=x.sqlite3_uri_key)(e,t),r._sqlite3_uri_int64=(e,t,i)=>(r._sqlite3_uri_int64=x.sqlite3_uri_int64)(e,t,i),r._sqlite3_db_name=(e,t)=>(r._sqlite3_db_name=x.sqlite3_db_name)(e,t),r._sqlite3_db_filename=(e,t)=>(r._sqlite3_db_filename=x.sqlite3_db_filename)(e,t),r._sqlite3_db_readonly=(e,t)=>(r._sqlite3_db_readonly=x.sqlite3_db_readonly)(e,t),r._sqlite3_compileoption_used=e=>(r._sqlite3_compileoption_used=x.sqlite3_compileoption_used)(e),r._sqlite3_compileoption_get=e=>(r._sqlite3_compileoption_get=x.sqlite3_compileoption_get)(e),r._sqlite3session_diff=(e,t,i,o)=>(r._sqlite3session_diff=x.sqlite3session_diff)(e,t,i,o),r._sqlite3session_attach=(e,t)=>(r._sqlite3session_attach=x.sqlite3session_attach)(e,t),r._sqlite3session_create=(e,t,i)=>(r._sqlite3session_create=x.sqlite3session_create)(e,t,i),r._sqlite3session_delete=e=>(r._sqlite3session_delete=x.sqlite3session_delete)(e),r._sqlite3session_table_filter=(e,t,i)=>(r._sqlite3session_table_filter=x.sqlite3session_table_filter)(e,t,i),r._sqlite3session_changeset=(e,t,i)=>(r._sqlite3session_changeset=x.sqlite3session_changeset)(e,t,i),r._sqlite3session_changeset_strm=(e,t,i)=>(r._sqlite3session_changeset_strm=x.sqlite3session_changeset_strm)(e,t,i),r._sqlite3session_patchset_strm=(e,t,i)=>(r._sqlite3session_patchset_strm=x.sqlite3session_patchset_strm)(e,t,i),r._sqlite3session_patchset=(e,t,i)=>(r._sqlite3session_patchset=x.sqlite3session_patchset)(e,t,i),r._sqlite3session_enable=(e,t)=>(r._sqlite3session_enable=x.sqlite3session_enable)(e,t),r._sqlite3session_indirect=(e,t)=>(r._sqlite3session_indirect=x.sqlite3session_indirect)(e,t),r._sqlite3session_isempty=e=>(r._sqlite3session_isempty=x.sqlite3session_isempty)(e),r._sqlite3session_memory_used=e=>(r._sqlite3session_memory_used=x.sqlite3session_memory_used)(e),r._sqlite3session_object_config=(e,t,i)=>(r._sqlite3session_object_config=x.sqlite3session_object_config)(e,t,i),r._sqlite3session_changeset_size=e=>(r._sqlite3session_changeset_size=x.sqlite3session_changeset_size)(e),r._sqlite3changeset_start=(e,t,i)=>(r._sqlite3changeset_start=x.sqlite3changeset_start)(e,t,i),r._sqlite3changeset_start_v2=(e,t,i,o)=>(r._sqlite3changeset_start_v2=x.sqlite3changeset_start_v2)(e,t,i,o),r._sqlite3changeset_start_strm=(e,t,i)=>(r._sqlite3changeset_start_strm=x.sqlite3changeset_start_strm)(e,t,i),r._sqlite3changeset_start_v2_strm=(e,t,i,o)=>(r._sqlite3changeset_start_v2_strm=x.sqlite3changeset_start_v2_strm)(e,t,i,o),r._sqlite3changeset_next=e=>(r._sqlite3changeset_next=x.sqlite3changeset_next)(e),r._sqlite3changeset_op=(e,t,i,o,a)=>(r._sqlite3changeset_op=x.sqlite3changeset_op)(e,t,i,o,a),r._sqlite3changeset_pk=(e,t,i)=>(r._sqlite3changeset_pk=x.sqlite3changeset_pk)(e,t,i),r._sqlite3changeset_old=(e,t,i)=>(r._sqlite3changeset_old=x.sqlite3changeset_old)(e,t,i),r._sqlite3changeset_new=(e,t,i)=>(r._sqlite3changeset_new=x.sqlite3changeset_new)(e,t,i),r._sqlite3changeset_conflict=(e,t,i)=>(r._sqlite3changeset_conflict=x.sqlite3changeset_conflict)(e,t,i),r._sqlite3changeset_fk_conflicts=(e,t)=>(r._sqlite3changeset_fk_conflicts=x.sqlite3changeset_fk_conflicts)(e,t),r._sqlite3changeset_finalize=e=>(r._sqlite3changeset_finalize=x.sqlite3changeset_finalize)(e),r._sqlite3changeset_invert=(e,t,i,o)=>(r._sqlite3changeset_invert=x.sqlite3changeset_invert)(e,t,i,o),r._sqlite3changeset_invert_strm=(e,t,i,o)=>(r._sqlite3changeset_invert_strm=x.sqlite3changeset_invert_strm)(e,t,i,o),r._sqlite3changeset_apply_v2=(e,t,i,o,a,c,y,S,Q)=>(r._sqlite3changeset_apply_v2=x.sqlite3changeset_apply_v2)(e,t,i,o,a,c,y,S,Q),r._sqlite3changeset_apply=(e,t,i,o,a,c)=>(r._sqlite3changeset_apply=x.sqlite3changeset_apply)(e,t,i,o,a,c),r._sqlite3changeset_apply_v2_strm=(e,t,i,o,a,c,y,S,Q)=>(r._sqlite3changeset_apply_v2_strm=x.sqlite3changeset_apply_v2_strm)(e,t,i,o,a,c,y,S,Q),r._sqlite3changeset_apply_strm=(e,t,i,o,a,c)=>(r._sqlite3changeset_apply_strm=x.sqlite3changeset_apply_strm)(e,t,i,o,a,c),r._sqlite3changegroup_new=e=>(r._sqlite3changegroup_new=x.sqlite3changegroup_new)(e),r._sqlite3changegroup_add=(e,t,i)=>(r._sqlite3changegroup_add=x.sqlite3changegroup_add)(e,t,i),r._sqlite3changegroup_output=(e,t,i)=>(r._sqlite3changegroup_output=x.sqlite3changegroup_output)(e,t,i),r._sqlite3changegroup_add_strm=(e,t,i)=>(r._sqlite3changegroup_add_strm=x.sqlite3changegroup_add_strm)(e,t,i),r._sqlite3changegroup_output_strm=(e,t,i)=>(r._sqlite3changegroup_output_strm=x.sqlite3changegroup_output_strm)(e,t,i),r._sqlite3changegroup_delete=e=>(r._sqlite3changegroup_delete=x.sqlite3changegroup_delete)(e),r._sqlite3changeset_concat=(e,t,i,o,a,c)=>(r._sqlite3changeset_concat=x.sqlite3changeset_concat)(e,t,i,o,a,c),r._sqlite3changeset_concat_strm=(e,t,i,o,a,c)=>(r._sqlite3changeset_concat_strm=x.sqlite3changeset_concat_strm)(e,t,i,o,a,c),r._sqlite3session_config=(e,t)=>(r._sqlite3session_config=x.sqlite3session_config)(e,t),r._sqlite3_sourceid=()=>(r._sqlite3_sourceid=x.sqlite3_sourceid)(),r._sqlite3__wasm_pstack_ptr=()=>(r._sqlite3__wasm_pstack_ptr=x.sqlite3__wasm_pstack_ptr)(),r._sqlite3__wasm_pstack_restore=e=>(r._sqlite3__wasm_pstack_restore=x.sqlite3__wasm_pstack_restore)(e),r._sqlite3__wasm_pstack_alloc=e=>(r._sqlite3__wasm_pstack_alloc=x.sqlite3__wasm_pstack_alloc)(e),r._sqlite3__wasm_pstack_remaining=()=>(r._sqlite3__wasm_pstack_remaining=x.sqlite3__wasm_pstack_remaining)(),r._sqlite3__wasm_pstack_quota=()=>(r._sqlite3__wasm_pstack_quota=x.sqlite3__wasm_pstack_quota)(),r._sqlite3__wasm_db_error=(e,t,i)=>(r._sqlite3__wasm_db_error=x.sqlite3__wasm_db_error)(e,t,i),r._sqlite3__wasm_test_struct=e=>(r._sqlite3__wasm_test_struct=x.sqlite3__wasm_test_struct)(e),r._sqlite3__wasm_enum_json=()=>(r._sqlite3__wasm_enum_json=x.sqlite3__wasm_enum_json)(),r._sqlite3__wasm_vfs_unlink=(e,t)=>(r._sqlite3__wasm_vfs_unlink=x.sqlite3__wasm_vfs_unlink)(e,t),r._sqlite3__wasm_db_vfs=(e,t)=>(r._sqlite3__wasm_db_vfs=x.sqlite3__wasm_db_vfs)(e,t),r._sqlite3__wasm_db_reset=e=>(r._sqlite3__wasm_db_reset=x.sqlite3__wasm_db_reset)(e),r._sqlite3__wasm_db_export_chunked=(e,t)=>(r._sqlite3__wasm_db_export_chunked=x.sqlite3__wasm_db_export_chunked)(e,t),r._sqlite3__wasm_db_serialize=(e,t,i,o,a)=>(r._sqlite3__wasm_db_serialize=x.sqlite3__wasm_db_serialize)(e,t,i,o,a),r._sqlite3__wasm_vfs_create_file=(e,t,i,o)=>(r._sqlite3__wasm_vfs_create_file=x.sqlite3__wasm_vfs_create_file)(e,t,i,o),r._sqlite3__wasm_posix_create_file=(e,t,i)=>(r._sqlite3__wasm_posix_create_file=x.sqlite3__wasm_posix_create_file)(e,t,i),r._sqlite3__wasm_kvvfsMakeKeyOnPstack=(e,t)=>(r._sqlite3__wasm_kvvfsMakeKeyOnPstack=x.sqlite3__wasm_kvvfsMakeKeyOnPstack)(e,t),r._sqlite3__wasm_kvvfs_methods=()=>(r._sqlite3__wasm_kvvfs_methods=x.sqlite3__wasm_kvvfs_methods)(),r._sqlite3__wasm_vtab_config=(e,t,i)=>(r._sqlite3__wasm_vtab_config=x.sqlite3__wasm_vtab_config)(e,t,i),r._sqlite3__wasm_db_config_ip=(e,t,i,o)=>(r._sqlite3__wasm_db_config_ip=x.sqlite3__wasm_db_config_ip)(e,t,i,o),r._sqlite3__wasm_db_config_pii=(e,t,i,o,a)=>(r._sqlite3__wasm_db_config_pii=x.sqlite3__wasm_db_config_pii)(e,t,i,o,a),r._sqlite3__wasm_db_config_s=(e,t,i)=>(r._sqlite3__wasm_db_config_s=x.sqlite3__wasm_db_config_s)(e,t,i),r._sqlite3__wasm_config_i=(e,t)=>(r._sqlite3__wasm_config_i=x.sqlite3__wasm_config_i)(e,t),r._sqlite3__wasm_config_ii=(e,t,i)=>(r._sqlite3__wasm_config_ii=x.sqlite3__wasm_config_ii)(e,t,i),r._sqlite3__wasm_config_j=(e,t)=>(r._sqlite3__wasm_config_j=x.sqlite3__wasm_config_j)(e,t),r._sqlite3__wasm_qfmt_token=(e,t)=>(r._sqlite3__wasm_qfmt_token=x.sqlite3__wasm_qfmt_token)(e,t),r._sqlite3__wasm_init_wasmfs=e=>(r._sqlite3__wasm_init_wasmfs=x.sqlite3__wasm_init_wasmfs)(e),r._sqlite3__wasm_test_intptr=e=>(r._sqlite3__wasm_test_intptr=x.sqlite3__wasm_test_intptr)(e),r._sqlite3__wasm_test_voidptr=e=>(r._sqlite3__wasm_test_voidptr=x.sqlite3__wasm_test_voidptr)(e),r._sqlite3__wasm_test_int64_max=()=>(r._sqlite3__wasm_test_int64_max=x.sqlite3__wasm_test_int64_max)(),r._sqlite3__wasm_test_int64_min=()=>(r._sqlite3__wasm_test_int64_min=x.sqlite3__wasm_test_int64_min)(),r._sqlite3__wasm_test_int64_times2=e=>(r._sqlite3__wasm_test_int64_times2=x.sqlite3__wasm_test_int64_times2)(e),r._sqlite3__wasm_test_int64_minmax=(e,t)=>(r._sqlite3__wasm_test_int64_minmax=x.sqlite3__wasm_test_int64_minmax)(e,t),r._sqlite3__wasm_test_int64ptr=e=>(r._sqlite3__wasm_test_int64ptr=x.sqlite3__wasm_test_int64ptr)(e),r._sqlite3__wasm_test_stack_overflow=e=>(r._sqlite3__wasm_test_stack_overflow=x.sqlite3__wasm_test_stack_overflow)(e),r._sqlite3__wasm_test_str_hello=e=>(r._sqlite3__wasm_test_str_hello=x.sqlite3__wasm_test_str_hello)(e),r._sqlite3__wasm_SQLTester_strglob=(e,t)=>(r._sqlite3__wasm_SQLTester_strglob=x.sqlite3__wasm_SQLTester_strglob)(e,t),r._malloc=e=>(r._malloc=x.malloc)(e),r._free=e=>(r._free=x.free)(e),r._realloc=(e,t)=>(r._realloc=x.realloc)(e,t);var oi=(e,t)=>(oi=x.emscripten_builtin_memalign)(e,t);r.wasmMemory=Pe;var Ur,ai;mt=function e(){Ur||li(),Ur||(mt=e)};function li(){if(We>0||!ai&&(ai=1,le(),We>0))return;function e(){var t;Ur||(Ur=1,r.calledRun=1,!Me&&(pe(),_(r),(t=r.onRuntimeInitialized)==null||t.call(r),Ae()))}r.setStatus?(r.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>r.setStatus(""),1),e()},1)):e()}if(r.preInit)for(typeof r.preInit=="function"&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return li(),r.runSQLite3PostLoadInit=function(e){if(globalThis.sqlite3ApiBootstrap=function t(i=globalThis.sqlite3ApiConfig||t.defaultConfig){if(t.sqlite3)return(t.sqlite3.config||console).warn("sqlite3ApiBootstrap() called multiple times.","Config and external initializers are ignored on calls after the first."),t.sqlite3;const o=Object.assign(Object.create(null),{exports:void 0,memory:void 0,bigIntEnabled:typeof r<"u"&&r.HEAPU64?!0:!!globalThis.BigInt64Array,debug:console.debug.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),log:console.log.bind(console),wasmfsOpfsDir:"/opfs",useStdAlloc:!1},i||{});Object.assign(o,{allocExportName:o.useStdAlloc?"malloc":"sqlite3_malloc",deallocExportName:o.useStdAlloc?"free":"sqlite3_free",reallocExportName:o.useStdAlloc?"realloc":"sqlite3_realloc"},o),["exports","memory","wasmfsOpfsDir"].forEach(u=>{typeof o[u]=="function"&&(o[u]=o[u]())}),delete globalThis.sqlite3ApiConfig,delete t.defaultConfig;const a=Object.create(null),c=Object.create(null),y=u=>a.sqlite3_js_rc_str&&a.sqlite3_js_rc_str(u)||"Unknown result code #"+u,S=u=>typeof u=="number"&&u===(u|0);class Q extends Error{constructor(...p){let k;if(p.length)if(S(p[0]))if(k=p[0],p.length===1)super(y(p[0]));else{const A=y(k);typeof p[1]=="object"?super(A,p[1]):(p[0]=A+":",super(p.join(" ")))}else p.length===2&&typeof p[1]=="object"?super(...p):super(p.join(" "));this.resultCode=k||a.SQLITE_ERROR,this.name="SQLite3Error"}}Q.toss=(...u)=>{throw new Q(...u)};const V=Q.toss;o.wasmfsOpfsDir&&!/^\/[^/]+$/.test(o.wasmfsOpfsDir)&&V("config.wasmfsOpfsDir must be falsy or in the form '/dir-name'.");const ne=u=>typeof u!="bigint"&&u===(u|0)&&u<=2147483647&&u>=-2147483648,ae=function u(p){return u._max||(u._max=BigInt("0x7fffffffffffffff"),u._min=~u._max),p>=u._min&&p<=u._max},$=u=>u>=-0x7fffffffn-1n&&u<=0x7fffffffn,N=function u(p){return u._min||(u._min=Number.MIN_SAFE_INTEGER,u._max=Number.MAX_SAFE_INTEGER),p>=u._min&&p<=u._max},J=u=>u&&u.constructor&&ne(u.constructor.BYTES_PER_ELEMENT)?u:!1,I=typeof SharedArrayBuffer>"u"?function(){}:SharedArrayBuffer,O=u=>u.buffer instanceof I,U=(u,p,k)=>O(u)?u.slice(p,k):u.subarray(p,k),M=u=>u&&(u instanceof Uint8Array||u instanceof Int8Array||u instanceof ArrayBuffer),G=u=>u&&(u instanceof Uint8Array||u instanceof Int8Array||u instanceof ArrayBuffer),C=u=>M(u)||V("Value is not of a supported TypedArray type."),X=new TextDecoder("utf-8"),oe=function(u,p,k){return X.decode(U(u,p,k))},d=function(u){return G(u)?oe(u instanceof ArrayBuffer?new Uint8Array(u):u):Array.isArray(u)?u.join(""):(c.isPtr(u)&&(u=c.cstrToJs(u)),u)};class E extends Error{constructor(...p){p.length===2&&typeof p[1]=="object"?super(...p):p.length?super(p.join(" ")):super("Allocation failed."),this.resultCode=a.SQLITE_NOMEM,this.name="WasmAllocError"}}E.toss=(...u)=>{throw new E(...u)},Object.assign(a,{sqlite3_bind_blob:void 0,sqlite3_bind_text:void 0,sqlite3_create_function_v2:(u,p,k,A,ee,ge,qe,Ce,Se)=>{},sqlite3_create_function:(u,p,k,A,ee,ge,qe,Ce)=>{},sqlite3_create_window_function:(u,p,k,A,ee,ge,qe,Ce,Se,Ie)=>{},sqlite3_prepare_v3:(u,p,k,A,ee,ge)=>{},sqlite3_prepare_v2:(u,p,k,A,ee)=>{},sqlite3_exec:(u,p,k,A,ee)=>{},sqlite3_randomness:(u,p)=>{}});const F={affirmBindableTypedArray:C,flexibleString:d,bigIntFits32:$,bigIntFits64:ae,bigIntFitsDouble:N,isBindableTypedArray:M,isInt32:ne,isSQLableTypedArray:G,isTypedArray:J,typedArrayToString:oe,isUIThread:()=>globalThis.window===globalThis&&!!globalThis.document,isSharedTypedArray:O,toss:function(...u){throw new Error(u.join(" "))},toss3:V,typedArrayPart:U,affirmDbHeader:function(u){u instanceof ArrayBuffer&&(u=new Uint8Array(u));const p="SQLite format 3";p.length>u.byteLength&&V("Input does not contain an SQLite3 database header.");for(let k=0;k<p.length;++k)p.charCodeAt(k)!==u[k]&&V("Input does not contain an SQLite3 database header.")},affirmIsDb:function(u){u instanceof ArrayBuffer&&(u=new Uint8Array(u));const p=u.byteLength;(p<512||p%512!==0)&&V("Byte array size",p,"is invalid for an SQLite3 db."),F.affirmDbHeader(u)}};Object.assign(c,{ptrSizeof:o.wasmPtrSizeof||4,ptrIR:o.wasmPtrIR||"i32",bigIntEnabled:!!o.bigIntEnabled,exports:o.exports||V("Missing API config.exports (WASM module exports)."),memory:o.memory||o.exports.memory||V("API config object requires a WebAssembly.Memory object","in either config.exports.memory (exported)","or config.memory (imported)."),alloc:void 0,realloc:void 0,dealloc:void 0}),c.allocFromTypedArray=function(u){u instanceof ArrayBuffer&&(u=new Uint8Array(u)),C(u);const p=c.alloc(u.byteLength||1);return c.heapForSize(u.constructor).set(u.byteLength?u:[0],p),p};{const u=o.allocExportName,p=o.deallocExportName,k=o.reallocExportName;for(const A of[u,p,k])c.exports[A]instanceof Function||V("Missing required exports[",A,"] function.");c.alloc=function A(ee){return A.impl(ee)||E.toss("Failed to allocate",ee," bytes.")},c.alloc.impl=c.exports[u],c.realloc=function A(ee,ge){const qe=A.impl(ee,ge);return ge?qe||E.toss("Failed to reallocate",ge," bytes."):0},c.realloc.impl=c.exports[k],c.dealloc=c.exports[p]}c.compileOptionUsed=function u(p){if(arguments.length){if(Array.isArray(p)){const k={};return p.forEach(A=>{k[A]=a.sqlite3_compileoption_used(A)}),k}else if(typeof p=="object")return Object.keys(p).forEach(k=>{p[k]=a.sqlite3_compileoption_used(k)}),p}else{if(u._result)return u._result;u._opt||(u._rx=/^([^=]+)=(.+)/,u._rxInt=/^-?\d+$/,u._opt=function(qe,Ce){const Se=u._rx.exec(qe);Ce[0]=Se?Se[1]:qe,Ce[1]=Se?u._rxInt.test(Se[2])?+Se[2]:Se[2]:!0});const k={},A=[0,0];let ee=0,ge;for(;ge=a.sqlite3_compileoption_get(ee++);)u._opt(ge,A),k[A[0]]=A[1];return u._result=k}return typeof p=="string"?!!a.sqlite3_compileoption_used(p):!1},c.pstack=Object.assign(Object.create(null),{restore:c.exports.sqlite3__wasm_pstack_restore,alloc:function(u){return typeof u=="string"&&!(u=c.sizeofIR(u))&&E.toss("Invalid value for pstack.alloc(",arguments[0],")"),c.exports.sqlite3__wasm_pstack_alloc(u)||E.toss("Could not allocate",u,"bytes from the pstack.")},allocChunks:function(u,p){typeof p=="string"&&!(p=c.sizeofIR(p))&&E.toss("Invalid size value for allocChunks(",arguments[1],")");const k=c.pstack.alloc(u*p),A=[];let ee=0,ge=0;for(;ee<u;++ee,ge+=p)A.push(k+ge);return A},allocPtr:(u=1,p=!0)=>u===1?c.pstack.alloc(p?8:c.ptrSizeof):c.pstack.allocChunks(u,p?8:c.ptrSizeof),call:function(u){const p=c.pstack.pointer;try{return u(q)}finally{c.pstack.restore(p)}}}),Object.defineProperties(c.pstack,{pointer:{configurable:!1,iterable:!0,writeable:!1,get:c.exports.sqlite3__wasm_pstack_ptr},quota:{configurable:!1,iterable:!0,writeable:!1,get:c.exports.sqlite3__wasm_pstack_quota},remaining:{configurable:!1,iterable:!0,writeable:!1,get:c.exports.sqlite3__wasm_pstack_remaining}}),a.sqlite3_randomness=(...u)=>{if(u.length===1&&F.isTypedArray(u[0])&&u[0].BYTES_PER_ELEMENT===1){const p=u[0];if(p.byteLength===0)return c.exports.sqlite3_randomness(0,0),p;const k=c.pstack.pointer;try{let A=p.byteLength,ee=0;const ge=c.exports.sqlite3_randomness,qe=c.heap8u(),Ce=A<512?A:512,Se=c.pstack.alloc(Ce);do{const Ie=A>Ce?Ce:A;ge(Ie,Se),p.set(U(qe,Se,Se+Ie),ee),A-=Ie,ee+=Ie}while(A>0)}catch(A){console.error("Highly unexpected (and ignored!) exception in sqlite3_randomness():",A)}finally{c.pstack.restore(k)}return p}c.exports.sqlite3_randomness(...u)};let te;if(a.sqlite3_wasmfs_opfs_dir=function(){if(te!==void 0)return te;const u=o.wasmfsOpfsDir;if(!u||!globalThis.FileSystemHandle||!globalThis.FileSystemDirectoryHandle||!globalThis.FileSystemFileHandle)return te="";try{return u&&c.xCallWrapped("sqlite3__wasm_init_wasmfs","i32",["string"],u)===0?te=u:te=""}catch{return te=""}},a.sqlite3_wasmfs_filename_is_persistent=function(u){const p=a.sqlite3_wasmfs_opfs_dir();return p&&u?u.startsWith(p+"/"):!1},a.sqlite3_js_db_uses_vfs=function(u,p,k=0){try{const A=a.sqlite3_vfs_find(p);return A?u?A===a.sqlite3_js_db_vfs(u,k)?A:!1:A===a.sqlite3_vfs_find(0)?A:!1:!1}catch{return!1}},a.sqlite3_js_vfs_list=function(){const u=[];let p=a.sqlite3_vfs_find(0);for(;p;){const k=new a.sqlite3_vfs(p);u.push(c.cstrToJs(k.$zName)),p=k.$pNext,k.dispose()}return u},a.sqlite3_js_db_export=function(u,p=0){u=c.xWrap.testConvertArg("sqlite3*",u),u||V("Invalid sqlite3* argument."),c.bigIntEnabled||V("BigInt64 support is not enabled.");const k=c.scopedAllocPush();let A;try{const ee=c.scopedAlloc(8+c.ptrSizeof),ge=ee+8,qe=p?c.isPtr(p)?p:c.scopedAllocCString(""+p):0;let Ce=c.exports.sqlite3__wasm_db_serialize(u,qe,ge,ee,0);Ce&&V("Database serialization failed with code",q.capi.sqlite3_js_rc_str(Ce)),A=c.peekPtr(ge);const Se=c.peek(ee,"i64");return Ce=Se?c.heap8u().slice(A,A+Number(Se)):new Uint8Array,Ce}finally{A&&c.exports.sqlite3_free(A),c.scopedAllocPop(k)}},a.sqlite3_js_db_vfs=(u,p=0)=>F.sqlite3__wasm_db_vfs(u,p),a.sqlite3_js_aggregate_context=(u,p)=>a.sqlite3_aggregate_context(u,p)||(p?E.toss("Cannot allocate",p,"bytes for sqlite3_aggregate_context()"):0),a.sqlite3_js_posix_create_file=function(u,p,k){let A;p&&c.isPtr(p)?A=p:p instanceof ArrayBuffer||p instanceof Uint8Array?(A=c.allocFromTypedArray(p),(arguments.length<3||!F.isInt32(k)||k<0)&&(k=p.byteLength)):Q.toss("Invalid 2nd argument for sqlite3_js_posix_create_file().");try{(!F.isInt32(k)||k<0)&&Q.toss("Invalid 3rd argument for sqlite3_js_posix_create_file().");const ee=F.sqlite3__wasm_posix_create_file(u,A,k);ee&&Q.toss("Creation of file failed with sqlite3 result code",a.sqlite3_js_rc_str(ee))}finally{c.dealloc(A)}},a.sqlite3_js_vfs_create_file=function(u,p,k,A){o.warn("sqlite3_js_vfs_create_file() is deprecated and","should be avoided because it can lead to C-level crashes.","See its documentation for alternative options.");let ee;k?(c.isPtr(k)?ee=k:k instanceof ArrayBuffer&&(k=new Uint8Array(k)),k instanceof Uint8Array?(ee=c.allocFromTypedArray(k),(arguments.length<4||!F.isInt32(A)||A<0)&&(A=k.byteLength)):Q.toss("Invalid 3rd argument type for sqlite3_js_vfs_create_file().")):ee=0,(!F.isInt32(A)||A<0)&&(c.dealloc(ee),Q.toss("Invalid 4th argument for sqlite3_js_vfs_create_file()."));try{const ge=F.sqlite3__wasm_vfs_create_file(u,p,ee,A);ge&&Q.toss("Creation of file failed with sqlite3 result code",a.sqlite3_js_rc_str(ge))}finally{c.dealloc(ee)}},a.sqlite3_js_sql_to_string=u=>{if(typeof u=="string")return u;const p=d(v);return p===v?void 0:p},F.isUIThread()){const u=function(p){const k=Object.create(null);return k.prefix="kvvfs-"+p,k.stores=[],(p==="session"||p==="")&&k.stores.push(globalThis.sessionStorage),(p==="local"||p==="")&&k.stores.push(globalThis.localStorage),k};a.sqlite3_js_kvvfs_clear=function(p=""){let k=0;const A=u(p);return A.stores.forEach(ee=>{const ge=[];let qe;for(qe=0;qe<ee.length;++qe){const Ce=ee.key(qe);Ce.startsWith(A.prefix)&&ge.push(Ce)}ge.forEach(Ce=>ee.removeItem(Ce)),k+=ge.length}),k},a.sqlite3_js_kvvfs_size=function(p=""){let k=0;const A=u(p);return A.stores.forEach(ee=>{let ge;for(ge=0;ge<ee.length;++ge){const qe=ee.key(ge);qe.startsWith(A.prefix)&&(k+=qe.length,k+=ee.getItem(qe).length)}}),k*2}}a.sqlite3_db_config=(function(u,p,...k){switch(p){case a.SQLITE_DBCONFIG_ENABLE_FKEY:case a.SQLITE_DBCONFIG_ENABLE_TRIGGER:case a.SQLITE_DBCONFIG_ENABLE_FTS3_TOKENIZER:case a.SQLITE_DBCONFIG_ENABLE_LOAD_EXTENSION:case a.SQLITE_DBCONFIG_NO_CKPT_ON_CLOSE:case a.SQLITE_DBCONFIG_ENABLE_QPSG:case a.SQLITE_DBCONFIG_TRIGGER_EQP:case a.SQLITE_DBCONFIG_RESET_DATABASE:case a.SQLITE_DBCONFIG_DEFENSIVE:case a.SQLITE_DBCONFIG_WRITABLE_SCHEMA:case a.SQLITE_DBCONFIG_LEGACY_ALTER_TABLE:case a.SQLITE_DBCONFIG_DQS_DML:case a.SQLITE_DBCONFIG_DQS_DDL:case a.SQLITE_DBCONFIG_ENABLE_VIEW:case a.SQLITE_DBCONFIG_LEGACY_FILE_FORMAT:case a.SQLITE_DBCONFIG_TRUSTED_SCHEMA:case a.SQLITE_DBCONFIG_STMT_SCANSTATUS:case a.SQLITE_DBCONFIG_REVERSE_SCANORDER:case a.SQLITE_DBCONFIG_ENABLE_ATTACH_CREATE:case a.SQLITE_DBCONFIG_ENABLE_ATTACH_WRITE:case a.SQLITE_DBCONFIG_ENABLE_COMMENTS:return this.ip||(this.ip=c.xWrap("sqlite3__wasm_db_config_ip","int",["sqlite3*","int","int","*"])),this.ip(u,p,k[0],k[1]||0);case a.SQLITE_DBCONFIG_LOOKASIDE:return this.pii||(this.pii=c.xWrap("sqlite3__wasm_db_config_pii","int",["sqlite3*","int","*","int","int"])),this.pii(u,p,k[0],k[1],k[2]);case a.SQLITE_DBCONFIG_MAINDBNAME:return this.s||(this.s=c.xWrap("sqlite3__wasm_db_config_s","int",["sqlite3*","int","string:static"])),this.s(u,p,k[0]);default:return a.SQLITE_MISUSE}}).bind(Object.create(null)),a.sqlite3_value_to_js=function(u,p=!0){let k;const A=a.sqlite3_value_type(u);switch(A){case a.SQLITE_INTEGER:c.bigIntEnabled?(k=a.sqlite3_value_int64(u),F.bigIntFitsDouble(k)&&(k=Number(k))):k=a.sqlite3_value_double(u);break;case a.SQLITE_FLOAT:k=a.sqlite3_value_double(u);break;case a.SQLITE_TEXT:k=a.sqlite3_value_text(u);break;case a.SQLITE_BLOB:{const ee=a.sqlite3_value_bytes(u),ge=a.sqlite3_value_blob(u);ee&&!ge&&q.WasmAllocError.toss("Cannot allocate memory for blob argument of",ee,"byte(s)"),k=ee?c.heap8u().slice(ge,ge+Number(ee)):null;break}case a.SQLITE_NULL:k=null;break;default:p&&V(a.SQLITE_MISMATCH,"Unhandled sqlite3_value_type():",A),k=void 0}return k},a.sqlite3_values_to_js=function(u,p,k=!0){let A;const ee=[];for(A=0;A<u;++A)ee.push(a.sqlite3_value_to_js(c.peekPtr(p+c.ptrSizeof*A),k));return ee},a.sqlite3_result_error_js=function(u,p){p instanceof E?a.sqlite3_result_error_nomem(u):a.sqlite3_result_error(u,""+p,-1)},a.sqlite3_result_js=function(u,p){if(p instanceof Error){a.sqlite3_result_error_js(u,p);return}try{switch(typeof p){case"undefined":break;case"boolean":a.sqlite3_result_int(u,p?1:0);break;case"bigint":F.bigIntFits32(p)?a.sqlite3_result_int(u,Number(p)):F.bigIntFitsDouble(p)?a.sqlite3_result_double(u,Number(p)):c.bigIntEnabled?F.bigIntFits64(p)?a.sqlite3_result_int64(u,p):V("BigInt value",p.toString(),"is too BigInt for int64."):V("BigInt value",p.toString(),"is too BigInt.");break;case"number":{let k;F.isInt32(p)?k=a.sqlite3_result_int:c.bigIntEnabled&&Number.isInteger(p)&&F.bigIntFits64(BigInt(p))?k=a.sqlite3_result_int64:k=a.sqlite3_result_double,k(u,p);break}case"string":{const[k,A]=c.allocCString(p,!0);a.sqlite3_result_text(u,k,A,a.SQLITE_WASM_DEALLOC);break}case"object":if(p===null){a.sqlite3_result_null(u);break}else if(F.isBindableTypedArray(p)){const k=c.allocFromTypedArray(p);a.sqlite3_result_blob(u,k,p.byteLength,a.SQLITE_WASM_DEALLOC);break}default:V("Don't not how to handle this UDF result value:",typeof p,p)}}catch(k){a.sqlite3_result_error_js(u,k)}},a.sqlite3_column_js=function(u,p,k=!0){const A=a.sqlite3_column_value(u,p);return A===0?void 0:a.sqlite3_value_to_js(A,k)};const m=(function(u,p,k){k=a[k],this.ptr?c.pokePtr(this.ptr,0):this.ptr=c.allocPtr();const A=k(u,p,this.ptr);if(A)return Q.toss(A,arguments[2]+"() failed with code "+A);const ee=c.peekPtr(this.ptr);return ee?a.sqlite3_value_to_js(ee,!0):void 0}).bind(Object.create(null));a.sqlite3_preupdate_new_js=(u,p)=>m(u,p,"sqlite3_preupdate_new"),a.sqlite3_preupdate_old_js=(u,p)=>m(u,p,"sqlite3_preupdate_old"),a.sqlite3changeset_new_js=(u,p)=>m(u,p,"sqlite3changeset_new"),a.sqlite3changeset_old_js=(u,p)=>m(u,p,"sqlite3changeset_old");const q={WasmAllocError:E,SQLite3Error:Q,capi:a,util:F,wasm:c,config:o,version:Object.create(null),client:void 0,asyncPostInit:async function u(){if(u.isReady instanceof Promise)return u.isReady;let p=t.initializersAsync;delete t.initializersAsync;const k=async()=>(q.__isUnderTest||(delete q.util,delete q.StructBinder),q),A=ge=>{throw o.error("an async sqlite3 initializer failed:",ge),ge};if(!p||!p.length)return u.isReady=k().catch(A);p=p.map(ge=>ge instanceof Function?async qe=>ge(q):ge),p.push(k);let ee=Promise.resolve(q);for(;p.length;)ee=ee.then(p.shift());return u.isReady=ee.catch(A)},scriptInfo:void 0};try{t.initializers.forEach(u=>{u(q)})}catch(u){throw console.error("sqlite3 bootstrap initializer threw:",u),u}return delete t.initializers,t.sqlite3=q,q},globalThis.sqlite3ApiBootstrap.initializers=[],globalThis.sqlite3ApiBootstrap.initializersAsync=[],globalThis.sqlite3ApiBootstrap.defaultConfig=Object.create(null),globalThis.sqlite3ApiBootstrap.sqlite3=void 0,globalThis.WhWasmUtilInstaller=function(t){t.bigIntEnabled===void 0&&(t.bigIntEnabled=!!globalThis.BigInt64Array);const i=(...d)=>{throw new Error(d.join(" "))};t.exports||Object.defineProperty(t,"exports",{enumerable:!0,configurable:!0,get:()=>t.instance&&t.instance.exports});const o=t.pointerIR||"i32",a=t.ptrSizeof=o==="i32"?4:o==="i64"?8:i("Unhandled ptrSizeof:",o),c=Object.create(null);c.heapSize=0,c.memory=null,c.freeFuncIndexes=[],c.scopedAlloc=[],c.utf8Decoder=new TextDecoder,c.utf8Encoder=new TextEncoder("utf-8"),t.sizeofIR=d=>{switch(d){case"i8":return 1;case"i16":return 2;case"i32":case"f32":case"float":return 4;case"i64":case"f64":case"double":return 8;case"*":return a;default:return(""+d).endsWith("*")?a:void 0}};const y=function(){if(!c.memory)c.memory=t.memory instanceof WebAssembly.Memory?t.memory:t.exports.memory;else if(c.heapSize===c.memory.buffer.byteLength)return c;const d=c.memory.buffer;return c.HEAP8=new Int8Array(d),c.HEAP8U=new Uint8Array(d),c.HEAP16=new Int16Array(d),c.HEAP16U=new Uint16Array(d),c.HEAP32=new Int32Array(d),c.HEAP32U=new Uint32Array(d),t.bigIntEnabled&&(c.HEAP64=new BigInt64Array(d),c.HEAP64U=new BigUint64Array(d)),c.HEAP32F=new Float32Array(d),c.HEAP64F=new Float64Array(d),c.heapSize=d.byteLength,c};t.heap8=()=>y().HEAP8,t.heap8u=()=>y().HEAP8U,t.heap16=()=>y().HEAP16,t.heap16u=()=>y().HEAP16U,t.heap32=()=>y().HEAP32,t.heap32u=()=>y().HEAP32U,t.heapForSize=function(d,E=!0){const F=c.memory&&c.heapSize===c.memory.buffer.byteLength?c:y();switch(d){case Int8Array:return F.HEAP8;case Uint8Array:return F.HEAP8U;case Int16Array:return F.HEAP16;case Uint16Array:return F.HEAP16U;case Int32Array:return F.HEAP32;case Uint32Array:return F.HEAP32U;case 8:return E?F.HEAP8U:F.HEAP8;case 16:return E?F.HEAP16U:F.HEAP16;case 32:return E?F.HEAP32U:F.HEAP32;case 64:if(F.HEAP64)return E?F.HEAP64U:F.HEAP64;break;default:if(t.bigIntEnabled){if(d===globalThis.BigUint64Array)return F.HEAP64U;if(d===globalThis.BigInt64Array)return F.HEAP64;break}}i("Invalid heapForSize() size: expecting 8, 16, 32,","or (if BigInt is enabled) 64.")},t.functionTable=function(){return t.exports.__indirect_function_table},t.functionEntry=function(d){const E=t.functionTable();return d<E.length?E.get(d):void 0},t.jsFuncToWasm=function d(E,F){if(d._||(d._={sigTypes:Object.assign(Object.create(null),{i:"i32",p:"i32",P:"i32",s:"i32",j:"i64",f:"f32",d:"f64"}),typeCodes:Object.assign(Object.create(null),{f64:124,f32:125,i64:126,i32:127}),uleb128Encode:function(q,u,p){p<128?q[u](p):q[u](p%128|128,p>>7)},rxJSig:/^(\w)\((\w*)\)$/,sigParams:function(q){const u=d._.rxJSig.exec(q);return u?u[2]:q.substr(1)},letterType:q=>d._.sigTypes[q]||i("Invalid signature letter:",q),pushSigType:(q,u)=>q.push(d._.typeCodes[d._.letterType(u)])}),typeof E=="string"){const q=F;F=E,E=q}const te=d._.sigParams(F),m=[1,96];d._.uleb128Encode(m,"push",te.length);for(const q of te)d._.pushSigType(m,q);return F[0]==="v"?m.push(0):(m.push(1),d._.pushSigType(m,F[0])),d._.uleb128Encode(m,"unshift",m.length),m.unshift(0,97,115,109,1,0,0,0,1),m.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array(m)),{e:{f:E}}).exports.f};const S=function(E,F,te){if(te&&!c.scopedAlloc.length&&i("No scopedAllocPush() scope is active."),typeof E=="string"){const p=F;F=E,E=p}(typeof F!="string"||!(E instanceof Function))&&i("Invalid arguments: expecting (function,signature) or (signature,function).");const m=t.functionTable(),q=m.length;let u;for(;c.freeFuncIndexes.length&&(u=c.freeFuncIndexes.pop(),m.get(u));){u=null;continue}u||(u=q,m.grow(1));try{return m.set(u,E),te&&c.scopedAlloc[c.scopedAlloc.length-1].push(u),u}catch(p){if(!(p instanceof TypeError))throw u===q&&c.freeFuncIndexes.push(q),p}try{const p=t.jsFuncToWasm(E,F);m.set(u,p),te&&c.scopedAlloc[c.scopedAlloc.length-1].push(u)}catch(p){throw u===q&&c.freeFuncIndexes.push(q),p}return u};t.installFunction=(d,E)=>S(d,E,!1),t.scopedInstallFunction=(d,E)=>S(d,E,!0),t.uninstallFunction=function(d){if(!d&&d!==0)return;const E=c.freeFuncIndexes,F=t.functionTable();E.push(d);const te=F.get(d);return F.set(d,null),te},t.peek=function(E,F="i8"){F.endsWith("*")&&(F=o);const te=c.memory&&c.heapSize===c.memory.buffer.byteLength?c:y(),m=Array.isArray(E)?[]:void 0;let q;do{switch(m&&(E=arguments[0].shift()),F){case"i1":case"i8":q=te.HEAP8[E>>0];break;case"i16":q=te.HEAP16[E>>1];break;case"i32":q=te.HEAP32[E>>2];break;case"float":case"f32":q=te.HEAP32F[E>>2];break;case"double":case"f64":q=Number(te.HEAP64F[E>>3]);break;case"i64":if(t.bigIntEnabled){q=BigInt(te.HEAP64[E>>3]);break}default:i("Invalid type for peek():",F)}m&&m.push(q)}while(m&&arguments[0].length);return m||q},t.poke=function(d,E,F="i8"){F.endsWith("*")&&(F=o);const te=c.memory&&c.heapSize===c.memory.buffer.byteLength?c:y();for(const m of Array.isArray(d)?d:[d])switch(F){case"i1":case"i8":te.HEAP8[m>>0]=E;continue;case"i16":te.HEAP16[m>>1]=E;continue;case"i32":te.HEAP32[m>>2]=E;continue;case"float":case"f32":te.HEAP32F[m>>2]=E;continue;case"double":case"f64":te.HEAP64F[m>>3]=E;continue;case"i64":if(te.HEAP64){te.HEAP64[m>>3]=BigInt(E);continue}default:i("Invalid type for poke(): "+F)}return this},t.peekPtr=(...d)=>t.peek(d.length===1?d[0]:d,o),t.pokePtr=(d,E=0)=>t.poke(d,E,o),t.peek8=(...d)=>t.peek(d.length===1?d[0]:d,"i8"),t.poke8=(d,E)=>t.poke(d,E,"i8"),t.peek16=(...d)=>t.peek(d.length===1?d[0]:d,"i16"),t.poke16=(d,E)=>t.poke(d,E,"i16"),t.peek32=(...d)=>t.peek(d.length===1?d[0]:d,"i32"),t.poke32=(d,E)=>t.poke(d,E,"i32"),t.peek64=(...d)=>t.peek(d.length===1?d[0]:d,"i64"),t.poke64=(d,E)=>t.poke(d,E,"i64"),t.peek32f=(...d)=>t.peek(d.length===1?d[0]:d,"f32"),t.poke32f=(d,E)=>t.poke(d,E,"f32"),t.peek64f=(...d)=>t.peek(d.length===1?d[0]:d,"f64"),t.poke64f=(d,E)=>t.poke(d,E,"f64"),t.getMemValue=t.peek,t.getPtrValue=t.peekPtr,t.setMemValue=t.poke,t.setPtrValue=t.pokePtr,t.isPtr32=d=>typeof d=="number"&&d===(d|0)&&d>=0,t.isPtr=t.isPtr32,t.cstrlen=function(d){if(!d||!t.isPtr(d))return null;const E=y().HEAP8U;let F=d;for(;E[F]!==0;++F);return F-d};const Q=typeof SharedArrayBuffer>"u"?function(){}:SharedArrayBuffer,V=function(d,E,F){return c.utf8Decoder.decode(d.buffer instanceof Q?d.slice(E,F):d.subarray(E,F))};t.cstrToJs=function(d){const E=t.cstrlen(d);return E?V(y().HEAP8U,d,d+E):E===null?E:""},t.jstrlen=function(d){if(typeof d!="string")return null;const E=d.length;let F=0;for(let te=0;te<E;++te){let m=d.charCodeAt(te);m>=55296&&m<=57343&&(m=65536+((m&1023)<<10)|d.charCodeAt(++te)&1023),m<=127?++F:m<=2047?F+=2:m<=65535?F+=3:F+=4}return F},t.jstrcpy=function(d,E,F=0,te=-1,m=!0){if((!E||!(E instanceof Int8Array)&&!(E instanceof Uint8Array))&&i("jstrcpy() target must be an Int8Array or Uint8Array."),te<0&&(te=E.length-F),!(te>0)||!(F>=0))return 0;let q=0,u=d.length;const p=F,k=F+te-(m?1:0);for(;q<u&&F<k;++q){let A=d.charCodeAt(q);if(A>=55296&&A<=57343&&(A=65536+((A&1023)<<10)|d.charCodeAt(++q)&1023),A<=127){if(F>=k)break;E[F++]=A}else if(A<=2047){if(F+1>=k)break;E[F++]=192|A>>6,E[F++]=128|A&63}else if(A<=65535){if(F+2>=k)break;E[F++]=224|A>>12,E[F++]=128|A>>6&63,E[F++]=128|A&63}else{if(F+3>=k)break;E[F++]=240|A>>18,E[F++]=128|A>>12&63,E[F++]=128|A>>6&63,E[F++]=128|A&63}}return m&&(E[F++]=0),F-p},t.cstrncpy=function(d,E,F){if((!d||!E)&&i("cstrncpy() does not accept NULL strings."),F<0)F=t.cstrlen(strPtr)+1;else if(!(F>0))return 0;const te=t.heap8u();let m=0,q;for(;m<F&&(q=te[E+m]);++m)te[d+m]=q;return m<F&&(te[d+m++]=0),m},t.jstrToUintArray=(d,E=!1)=>c.utf8Encoder.encode(E?d+"\0":d);const ne=(d,E)=>{(!(d.alloc instanceof Function)||!(d.dealloc instanceof Function))&&i("Object is missing alloc() and/or dealloc() function(s)","required by",E+"().")},ae=function(d,E,F,te){if(ne(t,te),typeof d!="string")return null;{const m=c.utf8Encoder.encode(d),q=F(m.length+1),u=y().HEAP8U;return u.set(m,q),u[q+m.length]=0,E?[q,m.length]:q}};t.allocCString=(d,E=!1)=>ae(d,E,t.alloc,"allocCString()"),t.scopedAllocPush=function(){ne(t,"scopedAllocPush");const d=[];return c.scopedAlloc.push(d),d},t.scopedAllocPop=function(d){ne(t,"scopedAllocPop");const E=arguments.length?c.scopedAlloc.indexOf(d):c.scopedAlloc.length-1;E<0&&i("Invalid state object for scopedAllocPop()."),arguments.length===0&&(d=c.scopedAlloc[E]),c.scopedAlloc.splice(E,1);for(let F;F=d.pop();)t.functionEntry(F)?t.uninstallFunction(F):t.dealloc(F)},t.scopedAlloc=function(d){c.scopedAlloc.length||i("No scopedAllocPush() scope is active.");const E=t.alloc(d);return c.scopedAlloc[c.scopedAlloc.length-1].push(E),E},Object.defineProperty(t.scopedAlloc,"level",{configurable:!1,enumerable:!1,get:()=>c.scopedAlloc.length,set:()=>i("The 'active' property is read-only.")}),t.scopedAllocCString=(d,E=!1)=>ae(d,E,t.scopedAlloc,"scopedAllocCString()");const $=function(d,E){const F=t[d?"scopedAlloc":"alloc"]((E.length+1)*t.ptrSizeof);let te=0;return E.forEach(m=>{t.pokePtr(F+t.ptrSizeof*te++,t[d?"scopedAllocCString":"allocCString"](""+m))}),t.pokePtr(F+t.ptrSizeof*te,0),F};t.scopedAllocMainArgv=d=>$(!0,d),t.allocMainArgv=d=>$(!1,d),t.cArgvToJs=(d,E)=>{const F=[];for(let te=0;te<d;++te){const m=t.peekPtr(E+t.ptrSizeof*te);F.push(m?t.cstrToJs(m):null)}return F},t.scopedAllocCall=function(d){t.scopedAllocPush();try{return d()}finally{t.scopedAllocPop()}};const N=function(d,E,F){ne(t,F);const te=E?"i64":o;let m=t[F](d*(E?8:a));if(t.poke(m,0,te),d===1)return m;const q=[m];for(let u=1;u<d;++u)m+=E?8:a,q[u]=m,t.poke(m,0,te);return q};t.allocPtr=(d=1,E=!0)=>N(d,E,"alloc"),t.scopedAllocPtr=(d=1,E=!0)=>N(d,E,"scopedAlloc"),t.xGet=function(d){return t.exports[d]||i("Cannot find exported symbol:",d)};const J=(d,E)=>i(d+"() requires",E,"argument(s).");t.xCall=function(d,...E){const F=d instanceof Function?d:t.xGet(d);return F instanceof Function||i("Exported symbol",d,"is not a function."),F.length!==E.length&&J(F===d?F.name:d,F.length),arguments.length===2&&Array.isArray(arguments[1])?F.apply(null,arguments[1]):F.apply(null,E)},c.xWrap=Object.create(null),c.xWrap.convert=Object.create(null),c.xWrap.convert.arg=new Map,c.xWrap.convert.result=new Map;const I=c.xWrap.convert.arg,O=c.xWrap.convert.result;t.bigIntEnabled&&I.set("i64",d=>BigInt(d));const U=o==="i32"?d=>d|0:d=>BigInt(d)|BigInt(0);I.set("i32",U).set("i16",d=>(d|0)&65535).set("i8",d=>(d|0)&255).set("f32",d=>Number(d).valueOf()).set("float",I.get("f32")).set("f64",I.get("f32")).set("double",I.get("f64")).set("int",I.get("i32")).set("null",d=>d).set(null,I.get("null")).set("**",U).set("*",U),O.set("*",U).set("pointer",U).set("number",d=>Number(d)).set("void",d=>{}).set("null",d=>d).set(null,O.get("null"));{const d=["i8","i16","i32","int","f32","float","f64","double"];t.bigIntEnabled&&d.push("i64");const E=I.get(o);for(const F of d)I.set(F+"*",E),O.set(F+"*",E),O.set(F,I.get(F)||i("Missing arg converter:",F))}const M=function(d){return typeof d=="string"?t.scopedAllocCString(d):d?U(d):null};I.set("string",M).set("utf8",M).set("pointer",M),O.set("string",d=>t.cstrToJs(d)).set("utf8",O.get("string")).set("string:dealloc",d=>{try{return d?t.cstrToJs(d):null}finally{t.dealloc(d)}}).set("utf8:dealloc",O.get("string:dealloc")).set("json",d=>JSON.parse(t.cstrToJs(d))).set("json:dealloc",d=>{try{return d?JSON.parse(t.cstrToJs(d)):null}finally{t.dealloc(d)}});const G=class{constructor(d){this.name=d.name||"unnamed adapter"}convertArg(d,E,F){i("AbstractArgAdapter must be subclassed.")}};I.FuncPtrAdapter=class Ut extends G{constructor(E){super(E),I.FuncPtrAdapter.warnOnUse&&console.warn("xArg.FuncPtrAdapter is an internal-only API","and is not intended to be invoked from","client-level code. Invoked with:",E),this.name=E.name||"unnamed",this.signature=E.signature,E.contextKey instanceof Function&&(this.contextKey=E.contextKey,E.bindScope||(E.bindScope="context")),this.bindScope=E.bindScope||i("FuncPtrAdapter options requires a bindScope (explicit or implied)."),Ut.bindScopes.indexOf(E.bindScope)<0&&i("Invalid options.bindScope ("+E.bindMod+") for FuncPtrAdapter. Expecting one of: ("+Ut.bindScopes.join(", ")+")"),this.isTransient=this.bindScope==="transient",this.isContext=this.bindScope==="context",this.isPermanent=this.bindScope==="permanent",this.singleton=this.bindScope==="singleton"?[]:void 0,this.callProxy=E.callProxy instanceof Function?E.callProxy:void 0}contextKey(E,F){return this}contextMap(E){const F=this.__cmap||(this.__cmap=new Map);let te=F.get(E);return te===void 0&&F.set(E,te=[]),te}convertArg(E,F,te){let m=this.singleton;if(!m&&this.isContext&&(m=this.contextMap(this.contextKey(F,te))),m&&m[0]===E)return m[1];if(E instanceof Function){this.callProxy&&(E=this.callProxy(E));const q=S(E,this.signature,this.isTransient);if(Ut.debugFuncInstall&&Ut.debugOut("FuncPtrAdapter installed",this,this.contextKey(F,te),"@"+q,E),m){if(m[1]){Ut.debugFuncInstall&&Ut.debugOut("FuncPtrAdapter uninstalling",this,this.contextKey(F,te),"@"+m[1],E);try{c.scopedAlloc[c.scopedAlloc.length-1].push(m[1])}catch{}}m[0]=E,m[1]=q}return q}else if(t.isPtr(E)||E===null||E===void 0){if(m&&m[1]&&m[1]!==E){Ut.debugFuncInstall&&Ut.debugOut("FuncPtrAdapter uninstalling",this,this.contextKey(F,te),"@"+m[1],E);try{c.scopedAlloc[c.scopedAlloc.length-1].push(m[1])}catch{}m[0]=m[1]=E|0}return E||0}else throw new TypeError("Invalid FuncPtrAdapter argument type. Expecting a function pointer or a "+(this.name?this.name+" ":"")+"function matching signature "+this.signature+".")}},I.FuncPtrAdapter.warnOnUse=!1,I.FuncPtrAdapter.debugFuncInstall=!1,I.FuncPtrAdapter.debugOut=console.debug.bind(console),I.FuncPtrAdapter.bindScopes=["transient","context","singleton","permanent"];const C=d=>I.get(d)||i("Argument adapter not found:",d),X=d=>O.get(d)||i("Result adapter not found:",d);c.xWrap.convertArg=(d,...E)=>C(d)(...E),c.xWrap.convertArgNoCheck=(d,...E)=>I.get(d)(...E),c.xWrap.convertResult=(d,E)=>d===null?E:d?X(d)(E):void 0,c.xWrap.convertResultNoCheck=(d,E)=>d===null?E:d?O.get(d)(E):void 0,t.xWrap=function(d,E,...F){arguments.length===3&&Array.isArray(arguments[2])&&(F=arguments[2]),t.isPtr(d)&&(d=t.functionEntry(d)||i("Function pointer not found in WASM function table."));const te=d instanceof Function,m=te?d:t.xGet(d);if(te&&(d=m.name||"unnamed function"),F.length!==m.length&&J(d,m.length),E===null&&m.length===0)return m;E!=null&&X(E);for(const u of F)u instanceof G?I.set(u,(...p)=>u.convertArg(...p)):C(u);const q=c.xWrap;return m.length===0?(...u)=>u.length?J(d,m.length):q.convertResult(E,m.call(null)):function(...u){u.length!==m.length&&J(d,m.length);const p=t.scopedAllocPush();try{let k=0;for(;k<u.length;++k)u[k]=q.convertArgNoCheck(F[k],u[k],u,k);return q.convertResultNoCheck(E,m.apply(null,u))}finally{t.scopedAllocPop(p)}}};const oe=function(d,E,F,te,m,q){if(typeof F=="string"){if(E===1)return q.get(F);if(E===2){if(te)te instanceof Function||i(m,"requires a function argument.");else return q.delete(F),d;return q.set(F,te),d}}i("Invalid arguments to",m)};return t.xWrap.resultAdapter=function d(E,F){return oe(d,arguments.length,E,F,"resultAdapter()",O)},t.xWrap.argAdapter=function d(E,F){return oe(d,arguments.length,E,F,"argAdapter()",I)},t.xWrap.FuncPtrAdapter=I.FuncPtrAdapter,t.xCallWrapped=function(d,E,F,...te){return Array.isArray(arguments[3])&&(te=arguments[3]),t.xWrap(d,E,F||[]).apply(null,te||[])},t.xWrap.testConvertArg=c.xWrap.convertArg,t.xWrap.testConvertResult=c.xWrap.convertResult,t},globalThis.WhWasmUtilInstaller.yawl=(function(t){const i=()=>fetch(t.uri,{credentials:"same-origin"}),o=this,a=function(y){if(t.wasmUtilTarget){const S=(...V)=>{throw new Error(V.join(" "))},Q=t.wasmUtilTarget;if(Q.module=y.module,Q.instance=y.instance,Q.instance.exports.memory||(Q.memory=t.imports&&t.imports.env&&t.imports.env.memory||S("Missing 'memory' object!")),!Q.alloc&&y.instance.exports.malloc){const V=y.instance.exports;Q.alloc=function(ne){return V.malloc(ne)||S("Allocation of",ne,"bytes failed.")},Q.dealloc=function(ne){V.free(ne)}}o(Q)}return t.onload&&t.onload(y,t),y};return WebAssembly.instantiateStreaming?function(){return WebAssembly.instantiateStreaming(i(),t.imports||{}).then(a)}:function(){return i().then(S=>S.arrayBuffer()).then(S=>WebAssembly.instantiate(S,t.imports||{})).then(a)}}).bind(globalThis.WhWasmUtilInstaller),globalThis.Jaccwabyt=function t(i){const o=(...b)=>{throw new Error(b.join(" "))};!(i.heap instanceof WebAssembly.Memory)&&!(i.heap instanceof Function)&&o("config.heap must be WebAssembly.Memory instance or a function."),["alloc","dealloc"].forEach(function(b){i[b]instanceof Function||o("Config option '"+b+"' must be a function.")});const a=t,c=i.heap instanceof Function?i.heap:()=>new Uint8Array(i.heap.buffer),y=i.alloc,S=i.dealloc,Q=i.log||console.log.bind(console),V=i.memberPrefix||"",ne=i.memberSuffix||"",ae=i.bigIntEnabled===void 0?!!globalThis.BigInt64Array:!!i.bigIntEnabled,$=globalThis.BigInt,N=globalThis.BigInt64Array,J=i.ptrSizeof||4,I=i.ptrIR||"i32";a.debugFlags||(a.__makeDebugFlags=function(b=null){b&&b.__flags&&(b=b.__flags);const P=function B(K){return arguments.length===0?B.__flags:(K<0?(delete B.__flags.getter,delete B.__flags.setter,delete B.__flags.alloc,delete B.__flags.dealloc):(B.__flags.getter=(1&K)!==0,B.__flags.setter=(2&K)!==0,B.__flags.alloc=(4&K)!==0,B.__flags.dealloc=(8&K)!==0),B._flags)};return Object.defineProperty(P,"__flags",{iterable:!1,writable:!1,value:Object.create(b)}),b||P(0),P},a.debugFlags=a.__makeDebugFlags());const O=function(){const b=new ArrayBuffer(2);return new DataView(b).setInt16(0,256,!0),new Int16Array(b)[0]===256}(),U=b=>b[1]==="(",M=b=>b==="P",G=b=>U(b)?"p":b[0],C=function(b){switch(G(b)){case"c":case"C":return"i8";case"i":return"i32";case"p":case"P":case"s":return I;case"j":return"i64";case"f":return"float";case"d":return"double"}o("Unhandled signature IR:",b)},X=N?()=>!0:()=>o("BigInt64Array is not available."),oe=function(b){switch(G(b)){case"p":case"P":case"s":{switch(J){case 4:return"getInt32";case 8:return X()&&"getBigInt64"}break}case"i":return"getInt32";case"c":return"getInt8";case"C":return"getUint8";case"j":return X()&&"getBigInt64";case"f":return"getFloat32";case"d":return"getFloat64"}o("Unhandled DataView getter for signature:",b)},d=function(b){switch(G(b)){case"p":case"P":case"s":{switch(J){case 4:return"setInt32";case 8:return X()&&"setBigInt64"}break}case"i":return"setInt32";case"c":return"setInt8";case"C":return"setUint8";case"j":return X()&&"setBigInt64";case"f":return"setFloat32";case"d":return"setFloat64"}o("Unhandled DataView setter for signature:",b)},E=function(b){switch(G(b)){case"i":case"f":case"c":case"C":case"d":return Number;case"j":return X()&&$;case"p":case"P":case"s":switch(J){case 4:return Number;case 8:return X()&&$}break}o("Unhandled DataView set wrapper for signature:",b)},F=(b,P)=>b+"::"+P,te=function(b,P){return()=>o(F(b,P),"is read-only.")},m=new WeakMap,q="(pointer-is-external)",u=function(b,P,B){if(B||(B=m.get(P)),B){if(m.delete(P),Array.isArray(P.ondispose)){let K;for(;K=P.ondispose.shift();)try{K instanceof Function?K.call(P):K instanceof ce?K.dispose():typeof K=="number"&&S(K)}catch(_e){console.warn("ondispose() for",b.structName,"@",B,"threw. NOT propagating it.",_e)}}else if(P.ondispose instanceof Function)try{P.ondispose()}catch(K){console.warn("ondispose() for",b.structName,"@",B,"threw. NOT propagating it.",K)}delete P.ondispose,b.debugFlags.__flags.dealloc&&Q("debug.dealloc:",P[q]?"EXTERNAL":"",b.structName,"instance:",b.structInfo.sizeof,"bytes @"+B),P[q]||S(B)}},p=b=>({configurable:!1,writable:!1,iterable:!1,value:b}),k=function(b,P,B){let K=!B;B?Object.defineProperty(P,q,p(B)):(B=y(b.structInfo.sizeof),B||o("Allocation of",b.structName,"structure failed."));try{b.debugFlags.__flags.alloc&&Q("debug.alloc:",K?"":"EXTERNAL",b.structName,"instance:",b.structInfo.sizeof,"bytes @"+B),K&&c().fill(0,B,B+b.structInfo.sizeof),m.set(P,B)}catch(_e){throw u(b,P,B),_e}},A=function(){const b=this.pointer;return b?new Uint8Array(c().slice(b,b+this.structInfo.sizeof)):null},ge=p(b=>V+b+ne),qe=function(b,P,B=!0){let K=b.members[P];if(!K&&(V||ne)){for(const _e of Object.values(b.members))if(_e.key===P){K=_e;break}!K&&B&&o(F(b.name,P),"is not a mapped struct member.")}return K},Ce=function b(P,B,K=!1){b._||(b._=xe=>xe.replace(/[^vipPsjrdcC]/g,"").replace(/[pPscC]/g,"i"));const _e=qe(P.structInfo,B,!0);return K?b._(_e.signature):_e.signature},Se={configurable:!1,enumerable:!1,get:function(){return m.get(this)},set:()=>o("Cannot assign the 'pointer' property of a struct.")},Ie=p(function(){const b=[];for(const P of Object.keys(this.structInfo.members))b.push(this.memberKey(P));return b}),De=new TextDecoder("utf-8"),ze=new TextEncoder,Je=typeof SharedArrayBuffer>"u"?function(){}:SharedArrayBuffer,Xe=function(b,P,B){return De.decode(b.buffer instanceof Je?b.slice(P,B):b.subarray(P,B))},pt=function(b,P,B=!1){const K=qe(b.structInfo,P,B);return K&&K.signature.length===1&&K.signature[0]==="s"?K:!1},it=function(b){b.signature!=="s"&&o("Invalid member type signature for C-string value:",JSON.stringify(b))},z=function(P,B){const K=qe(P.structInfo,B,!0);it(K);const _e=P[K.key];if(!_e)return null;let xe=_e;const Be=c();for(;Be[xe]!==0;++xe);return _e===xe?"":Xe(Be,_e,xe)},Y=function(b,...P){b.ondispose?Array.isArray(b.ondispose)||(b.ondispose=[b.ondispose]):b.ondispose=[],b.ondispose.push(...P)},re=function(b){const P=ze.encode(b),B=y(P.length+1);B||o("Allocation error while duplicating string:",b);const K=c();return K.set(P,B),K[B+P.length]=0,B},de=function(b,P,B){const K=qe(b.structInfo,P,!0);it(K);const _e=re(B);return b[K.key]=_e,Y(b,_e),b},ce=function(P,B){arguments[2]!==p&&o("Do not call the StructType constructor","from client-level code."),Object.defineProperties(this,{structName:p(P),structInfo:p(B)})};ce.prototype=Object.create(null,{dispose:p(function(){u(this.constructor,this)}),lookupMember:p(function(b,P=!0){return qe(this.structInfo,b,P)}),memberToJsString:p(function(b){return z(this,b)}),memberIsString:p(function(b,P=!0){return pt(this,b,P)}),memberKey:ge,memberKeys:Ie,memberSignature:p(function(b,P=!1){return Ce(this,b,P)}),memoryDump:p(A),pointer:Se,setMemberCString:p(function(b,P){return de(this,b,P)})}),Object.assign(ce.prototype,{addOnDispose:function(...b){return Y(this,...b),this}}),Object.defineProperties(ce,{allocCString:p(re),isA:p(b=>b instanceof ce),hasExternalPointer:p(b=>b instanceof ce&&!!b[q]),memberKey:ge});const be=b=>Number.isFinite(b)||b instanceof($||Number),Z=function b(P,B,K){if(!b._){b._={getters:{},setters:{},sw:{}};const bt=["i","c","C","p","P","s","f","d","v()"];ae&&bt.push("j"),bt.forEach(function(Pt){b._.getters[Pt]=oe(Pt),b._.setters[Pt]=d(Pt),b._.sw[Pt]=E(Pt)});const rc=/^[ipPsjfdcC]$/,nc=/^[vipPsjfdcC]\([ipPsjfdcC]*\)$/;b.sigCheck=function(Pt,sc,ci,xn){Object.prototype.hasOwnProperty.call(Pt,ci)&&o(Pt.structName,"already has a property named",ci+"."),rc.test(xn)||nc.test(xn)||o("Malformed signature for",F(Pt.structName,sc)+":",xn)}}const _e=P.memberKey(B);b.sigCheck(P.prototype,B,_e,K.signature),K.key=_e,K.name=B;const xe=G(K.signature),Be=F(P.prototype.structName,_e),Ge=P.prototype.debugFlags.__flags,qt=Object.create(null);qt.configurable=!1,qt.enumerable=!1,qt.get=function(){Ge.getter&&Q("debug.getter:",b._.getters[xe],"for",C(xe),Be,"@",this.pointer,"+",K.offset,"sz",K.sizeof);let bt=new DataView(c().buffer,this.pointer+K.offset,K.sizeof)[b._.getters[xe]](0,O);return Ge.getter&&Q("debug.getter:",Be,"result =",bt),bt},K.readOnly?qt.set=te(P.prototype.structName,_e):qt.set=function(bt){if(Ge.setter&&Q("debug.setter:",b._.setters[xe],"for",C(xe),Be,"@",this.pointer,"+",K.offset,"sz",K.sizeof,bt),this.pointer||o("Cannot set struct property on disposed instance."),bt===null)bt=0;else for(;!be(bt);){if(M(K.signature)&&bt instanceof ce){bt=bt.pointer||0,Ge.setter&&Q("debug.setter:",Be,"resolved to",bt);break}o("Invalid value for pointer-type",Be+".")}new DataView(c().buffer,this.pointer+K.offset,K.sizeof)[b._.setters[xe]](0,b._.sw[xe](bt),O)},Object.defineProperty(P.prototype,_e,qt)},w=function b(P,B){arguments.length===1?(B=P,P=B.name):B.name||(B.name=P),P||o("Struct name is required.");let K=!1;Object.keys(B.members).forEach(Be=>{const Ge=B.members[Be];Ge.sizeof?Ge.sizeof===1?Ge.signature==="c"||Ge.signature==="C"||o("Unexpected sizeof==1 member",F(B.name,Be),"with signature",Ge.signature):(Ge.sizeof%4!==0&&(console.warn("Invalid struct member description =",Ge,"from",B),o(P,"member",Be,"sizeof is not aligned. sizeof="+Ge.sizeof)),Ge.offset%4!==0&&(console.warn("Invalid struct member description =",Ge,"from",B),o(P,"member",Be,"offset is not aligned. offset="+Ge.offset))):o(P,"member",Be,"is missing sizeof."),(!K||K.offset<Ge.offset)&&(K=Ge)}),K?B.sizeof<K.offset+K.sizeof&&o("Invalid struct config:",P,"max member offset ("+K.offset+") ","extends past end of struct (sizeof="+B.sizeof+")."):o("No member property descriptions found.");const _e=p(a.__makeDebugFlags(b.debugFlags)),xe=function Be(Ge){this instanceof Be?arguments.length?((Ge!==(Ge|0)||Ge<=0)&&o("Invalid pointer value for",P,"constructor."),k(Be,this,Ge)):k(Be,this):o("The",P,"constructor may only be called via 'new'.")};return Object.defineProperties(xe,{debugFlags:_e,isA:p(Be=>Be instanceof xe),memberKey:ge,memberKeys:Ie,methodInfoForKey:p(function(Be){}),structInfo:p(B),structName:p(P)}),xe.prototype=new ce(P,B,p),Object.defineProperties(xe.prototype,{debugFlags:_e,constructor:p(xe)}),Object.keys(B.members).forEach(Be=>Z(xe,Be,B.members[Be])),xe};return w.StructType=ce,w.config=i,w.allocCString=re,w.debugFlags||(w.debugFlags=a.__makeDebugFlags(a.debugFlags)),w},globalThis.sqlite3ApiBootstrap.initializers.push(function(t){const i=(...I)=>{throw new Error(I.join(" "))};t.SQLite3Error.toss;const o=t.capi,a=t.wasm,c=t.util;if(globalThis.WhWasmUtilInstaller(a),delete globalThis.WhWasmUtilInstaller,a.bindingSignatures=[["sqlite3_aggregate_context","void*","sqlite3_context*","int"],["sqlite3_bind_double","int","sqlite3_stmt*","int","f64"],["sqlite3_bind_int","int","sqlite3_stmt*","int","int"],["sqlite3_bind_null",void 0,"sqlite3_stmt*","int"],["sqlite3_bind_parameter_count","int","sqlite3_stmt*"],["sqlite3_bind_parameter_index","int","sqlite3_stmt*","string"],["sqlite3_bind_parameter_name","string","sqlite3_stmt*","int"],["sqlite3_bind_pointer","int","sqlite3_stmt*","int","*","string:static","*"],["sqlite3_busy_handler","int",["sqlite3*",new a.xWrap.FuncPtrAdapter({signature:"i(pi)",contextKey:(I,O)=>I[0]}),"*"]],["sqlite3_busy_timeout","int","sqlite3*","int"],["sqlite3_changes","int","sqlite3*"],["sqlite3_clear_bindings","int","sqlite3_stmt*"],["sqlite3_collation_needed","int","sqlite3*","*","*"],["sqlite3_column_blob","*","sqlite3_stmt*","int"],["sqlite3_column_bytes","int","sqlite3_stmt*","int"],["sqlite3_column_count","int","sqlite3_stmt*"],["sqlite3_column_decltype","string","sqlite3_stmt*","int"],["sqlite3_column_double","f64","sqlite3_stmt*","int"],["sqlite3_column_int","int","sqlite3_stmt*","int"],["sqlite3_column_name","string","sqlite3_stmt*","int"],["sqlite3_column_text","string","sqlite3_stmt*","int"],["sqlite3_column_type","int","sqlite3_stmt*","int"],["sqlite3_column_value","sqlite3_value*","sqlite3_stmt*","int"],["sqlite3_commit_hook","void*",["sqlite3*",new a.xWrap.FuncPtrAdapter({name:"sqlite3_commit_hook",signature:"i(p)",contextKey:I=>I[0]}),"*"]],["sqlite3_compileoption_get","string","int"],["sqlite3_compileoption_used","int","string"],["sqlite3_complete","int","string:flexible"],["sqlite3_context_db_handle","sqlite3*","sqlite3_context*"],["sqlite3_data_count","int","sqlite3_stmt*"],["sqlite3_db_filename","string","sqlite3*","string"],["sqlite3_db_handle","sqlite3*","sqlite3_stmt*"],["sqlite3_db_name","string","sqlite3*","int"],["sqlite3_db_readonly","int","sqlite3*","string"],["sqlite3_db_status","int","sqlite3*","int","*","*","int"],["sqlite3_errcode","int","sqlite3*"],["sqlite3_errmsg","string","sqlite3*"],["sqlite3_error_offset","int","sqlite3*"],["sqlite3_errstr","string","int"],["sqlite3_exec","int",["sqlite3*","string:flexible",new a.xWrap.FuncPtrAdapter({signature:"i(pipp)",bindScope:"transient",callProxy:I=>{let O;return(U,M,G,C)=>{try{const X=a.cArgvToJs(M,G);return O||(O=a.cArgvToJs(M,C)),I(X,O)|0}catch(X){return X.resultCode||o.SQLITE_ERROR}}}}),"*","**"]],["sqlite3_expanded_sql","string","sqlite3_stmt*"],["sqlite3_extended_errcode","int","sqlite3*"],["sqlite3_extended_result_codes","int","sqlite3*","int"],["sqlite3_file_control","int","sqlite3*","string","int","*"],["sqlite3_finalize","int","sqlite3_stmt*"],["sqlite3_free",void 0,"*"],["sqlite3_get_autocommit","int","sqlite3*"],["sqlite3_get_auxdata","*","sqlite3_context*","int"],["sqlite3_initialize",void 0],["sqlite3_interrupt",void 0,"sqlite3*"],["sqlite3_is_interrupted","int","sqlite3*"],["sqlite3_keyword_count","int"],["sqlite3_keyword_name","int",["int","**","*"]],["sqlite3_keyword_check","int",["string","int"]],["sqlite3_libversion","string"],["sqlite3_libversion_number","int"],["sqlite3_limit","int",["sqlite3*","int","int"]],["sqlite3_malloc","*","int"],["sqlite3_open","int","string","*"],["sqlite3_open_v2","int","string","*","int","string"],["sqlite3_realloc","*","*","int"],["sqlite3_reset","int","sqlite3_stmt*"],["sqlite3_result_blob",void 0,"sqlite3_context*","*","int","*"],["sqlite3_result_double",void 0,"sqlite3_context*","f64"],["sqlite3_result_error",void 0,"sqlite3_context*","string","int"],["sqlite3_result_error_code",void 0,"sqlite3_context*","int"],["sqlite3_result_error_nomem",void 0,"sqlite3_context*"],["sqlite3_result_error_toobig",void 0,"sqlite3_context*"],["sqlite3_result_int",void 0,"sqlite3_context*","int"],["sqlite3_result_null",void 0,"sqlite3_context*"],["sqlite3_result_pointer",void 0,"sqlite3_context*","*","string:static","*"],["sqlite3_result_subtype",void 0,"sqlite3_value*","int"],["sqlite3_result_text",void 0,"sqlite3_context*","string","int","*"],["sqlite3_result_zeroblob",void 0,"sqlite3_context*","int"],["sqlite3_rollback_hook","void*",["sqlite3*",new a.xWrap.FuncPtrAdapter({name:"sqlite3_rollback_hook",signature:"v(p)",contextKey:I=>I[0]}),"*"]],["sqlite3_set_auxdata",void 0,["sqlite3_context*","int","*","*"]],["sqlite3_shutdown",void 0],["sqlite3_sourceid","string"],["sqlite3_sql","string","sqlite3_stmt*"],["sqlite3_status","int","int","*","*","int"],["sqlite3_step","int","sqlite3_stmt*"],["sqlite3_stmt_busy","int","sqlite3_stmt*"],["sqlite3_stmt_readonly","int","sqlite3_stmt*"],["sqlite3_stmt_status","int","sqlite3_stmt*","int","int"],["sqlite3_strglob","int","string","string"],["sqlite3_stricmp","int","string","string"],["sqlite3_strlike","int","string","string","int"],["sqlite3_strnicmp","int","string","string","int"],["sqlite3_table_column_metadata","int","sqlite3*","string","string","string","**","**","*","*","*"],["sqlite3_total_changes","int","sqlite3*"],["sqlite3_trace_v2","int",["sqlite3*","int",new a.xWrap.FuncPtrAdapter({name:"sqlite3_trace_v2::callback",signature:"i(ippp)",contextKey:(I,O)=>I[0]}),"*"]],["sqlite3_txn_state","int",["sqlite3*","string"]],["sqlite3_uri_boolean","int","sqlite3_filename","string","int"],["sqlite3_uri_key","string","sqlite3_filename","int"],["sqlite3_uri_parameter","string","sqlite3_filename","string"],["sqlite3_user_data","void*","sqlite3_context*"],["sqlite3_value_blob","*","sqlite3_value*"],["sqlite3_value_bytes","int","sqlite3_value*"],["sqlite3_value_double","f64","sqlite3_value*"],["sqlite3_value_dup","sqlite3_value*","sqlite3_value*"],["sqlite3_value_free",void 0,"sqlite3_value*"],["sqlite3_value_frombind","int","sqlite3_value*"],["sqlite3_value_int","int","sqlite3_value*"],["sqlite3_value_nochange","int","sqlite3_value*"],["sqlite3_value_numeric_type","int","sqlite3_value*"],["sqlite3_value_pointer","*","sqlite3_value*","string:static"],["sqlite3_value_subtype","int","sqlite3_value*"],["sqlite3_value_text","string","sqlite3_value*"],["sqlite3_value_type","int","sqlite3_value*"],["sqlite3_vfs_find","*","string"],["sqlite3_vfs_register","int","sqlite3_vfs*","int"],["sqlite3_vfs_unregister","int","sqlite3_vfs*"]],a.exports.sqlite3_progress_handler&&a.bindingSignatures.push(["sqlite3_progress_handler",void 0,["sqlite3*","int",new a.xWrap.FuncPtrAdapter({name:"xProgressHandler",signature:"i(p)",bindScope:"context",contextKey:(I,O)=>I[0]}),"*"]]),a.exports.sqlite3_stmt_explain&&a.bindingSignatures.push(["sqlite3_stmt_explain","int","sqlite3_stmt*","int"],["sqlite3_stmt_isexplain","int","sqlite3_stmt*"]),a.exports.sqlite3_set_authorizer&&a.bindingSignatures.push(["sqlite3_set_authorizer","int",["sqlite3*",new a.xWrap.FuncPtrAdapter({name:"sqlite3_set_authorizer::xAuth",signature:"i(pissss)",contextKey:(I,O)=>I[0],callProxy:I=>(O,U,M,G,C,X)=>{try{return M=M&&a.cstrToJs(M),G=G&&a.cstrToJs(G),C=C&&a.cstrToJs(C),X=X&&a.cstrToJs(X),I(O,U,M,G,C,X)||0}catch(oe){return oe.resultCode||o.SQLITE_ERROR}}}),"*"]]),a.bindingSignatures.int64=[["sqlite3_bind_int64","int",["sqlite3_stmt*","int","i64"]],["sqlite3_changes64","i64",["sqlite3*"]],["sqlite3_column_int64","i64",["sqlite3_stmt*","int"]],["sqlite3_deserialize","int","sqlite3*","string","*","i64","i64","int"],["sqlite3_last_insert_rowid","i64",["sqlite3*"]],["sqlite3_malloc64","*","i64"],["sqlite3_msize","i64","*"],["sqlite3_overload_function","int",["sqlite3*","string","int"]],["sqlite3_realloc64","*","*","i64"],["sqlite3_result_int64",void 0,"*","i64"],["sqlite3_result_zeroblob64","int","*","i64"],["sqlite3_serialize","*","sqlite3*","string","*","int"],["sqlite3_set_last_insert_rowid",void 0,["sqlite3*","i64"]],["sqlite3_status64","int","int","*","*","int"],["sqlite3_total_changes64","i64",["sqlite3*"]],["sqlite3_update_hook","*",["sqlite3*",new a.xWrap.FuncPtrAdapter({name:"sqlite3_update_hook",signature:"v(iippj)",contextKey:I=>I[0],callProxy:I=>(O,U,M,G,C)=>{I(O,U,a.cstrToJs(M),a.cstrToJs(G),C)}}),"*"]],["sqlite3_uri_int64","i64",["sqlite3_filename","string","i64"]],["sqlite3_value_int64","i64","sqlite3_value*"]],a.bigIntEnabled&&a.exports.sqlite3_declare_vtab&&a.bindingSignatures.int64.push(["sqlite3_create_module","int",["sqlite3*","string","sqlite3_module*","*"]],["sqlite3_create_module_v2","int",["sqlite3*","string","sqlite3_module*","*","*"]],["sqlite3_declare_vtab","int",["sqlite3*","string:flexible"]],["sqlite3_drop_modules","int",["sqlite3*","**"]],["sqlite3_vtab_collation","string","sqlite3_index_info*","int"],["sqlite3_vtab_distinct","int","sqlite3_index_info*"],["sqlite3_vtab_in","int","sqlite3_index_info*","int","int"],["sqlite3_vtab_in_first","int","sqlite3_value*","**"],["sqlite3_vtab_in_next","int","sqlite3_value*","**"],["sqlite3_vtab_nochange","int","sqlite3_context*"],["sqlite3_vtab_on_conflict","int","sqlite3*"],["sqlite3_vtab_rhs_value","int","sqlite3_index_info*","int","**"]),a.bigIntEnabled&&a.exports.sqlite3_preupdate_hook&&a.bindingSignatures.int64.push(["sqlite3_preupdate_blobwrite","int","sqlite3*"],["sqlite3_preupdate_count","int","sqlite3*"],["sqlite3_preupdate_depth","int","sqlite3*"],["sqlite3_preupdate_hook","*",["sqlite3*",new a.xWrap.FuncPtrAdapter({name:"sqlite3_preupdate_hook",signature:"v(ppippjj)",contextKey:I=>I[0],callProxy:I=>(O,U,M,G,C,X,oe)=>{I(O,U,M,a.cstrToJs(G),a.cstrToJs(C),X,oe)}}),"*"]],["sqlite3_preupdate_new","int",["sqlite3*","int","**"]],["sqlite3_preupdate_old","int",["sqlite3*","int","**"]]),a.bigIntEnabled&&a.exports.sqlite3changegroup_add&&a.exports.sqlite3session_create&&a.exports.sqlite3_preupdate_hook){const I={signature:"i(ps)",callProxy:O=>(U,M)=>{try{return O(U,a.cstrToJs(M))|0}catch(G){return G.resultCode||o.SQLITE_ERROR}}};a.bindingSignatures.int64.push(["sqlite3changegroup_add","int",["sqlite3_changegroup*","int","void*"]],["sqlite3changegroup_add_strm","int",["sqlite3_changegroup*",new a.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*"]],["sqlite3changegroup_delete",void 0,["sqlite3_changegroup*"]],["sqlite3changegroup_new","int",["**"]],["sqlite3changegroup_output","int",["sqlite3_changegroup*","int*","**"]],["sqlite3changegroup_output_strm","int",["sqlite3_changegroup*",new a.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppi)",bindScope:"transient"}),"void*"]],["sqlite3changeset_apply","int",["sqlite3*","int","void*",new a.xWrap.FuncPtrAdapter({name:"xFilter",bindScope:"transient",...I}),new a.xWrap.FuncPtrAdapter({name:"xConflict",signature:"i(pip)",bindScope:"transient"}),"void*"]],["sqlite3changeset_apply_strm","int",["sqlite3*",new a.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*",new a.xWrap.FuncPtrAdapter({name:"xFilter",bindScope:"transient",...I}),new a.xWrap.FuncPtrAdapter({name:"xConflict",signature:"i(pip)",bindScope:"transient"}),"void*"]],["sqlite3changeset_apply_v2","int",["sqlite3*","int","void*",new a.xWrap.FuncPtrAdapter({name:"xFilter",bindScope:"transient",...I}),new a.xWrap.FuncPtrAdapter({name:"xConflict",signature:"i(pip)",bindScope:"transient"}),"void*","**","int*","int"]],["sqlite3changeset_apply_v2_strm","int",["sqlite3*",new a.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*",new a.xWrap.FuncPtrAdapter({name:"xFilter",bindScope:"transient",...I}),new a.xWrap.FuncPtrAdapter({name:"xConflict",signature:"i(pip)",bindScope:"transient"}),"void*","**","int*","int"]],["sqlite3changeset_concat","int",["int","void*","int","void*","int*","**"]],["sqlite3changeset_concat_strm","int",[new a.xWrap.FuncPtrAdapter({name:"xInputA",signature:"i(ppp)",bindScope:"transient"}),"void*",new a.xWrap.FuncPtrAdapter({name:"xInputB",signature:"i(ppp)",bindScope:"transient"}),"void*",new a.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppi)",bindScope:"transient"}),"void*"]],["sqlite3changeset_conflict","int",["sqlite3_changeset_iter*","int","**"]],["sqlite3changeset_finalize","int",["sqlite3_changeset_iter*"]],["sqlite3changeset_fk_conflicts","int",["sqlite3_changeset_iter*","int*"]],["sqlite3changeset_invert","int",["int","void*","int*","**"]],["sqlite3changeset_invert_strm","int",[new a.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*",new a.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppi)",bindScope:"transient"}),"void*"]],["sqlite3changeset_new","int",["sqlite3_changeset_iter*","int","**"]],["sqlite3changeset_next","int",["sqlite3_changeset_iter*"]],["sqlite3changeset_old","int",["sqlite3_changeset_iter*","int","**"]],["sqlite3changeset_op","int",["sqlite3_changeset_iter*","**","int*","int*","int*"]],["sqlite3changeset_pk","int",["sqlite3_changeset_iter*","**","int*"]],["sqlite3changeset_start","int",["**","int","*"]],["sqlite3changeset_start_strm","int",["**",new a.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*"]],["sqlite3changeset_start_v2","int",["**","int","*","int"]],["sqlite3changeset_start_v2_strm","int",["**",new a.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*","int"]],["sqlite3session_attach","int",["sqlite3_session*","string"]],["sqlite3session_changeset","int",["sqlite3_session*","int*","**"]],["sqlite3session_changeset_size","i64",["sqlite3_session*"]],["sqlite3session_changeset_strm","int",["sqlite3_session*",new a.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppp)",bindScope:"transient"}),"void*"]],["sqlite3session_config","int",["int","void*"]],["sqlite3session_create","int",["sqlite3*","string","**"]],["sqlite3session_diff","int",["sqlite3_session*","string","string","**"]],["sqlite3session_enable","int",["sqlite3_session*","int"]],["sqlite3session_indirect","int",["sqlite3_session*","int"]],["sqlite3session_isempty","int",["sqlite3_session*"]],["sqlite3session_memory_used","i64",["sqlite3_session*"]],["sqlite3session_object_config","int",["sqlite3_session*","int","void*"]],["sqlite3session_patchset","int",["sqlite3_session*","*","**"]],["sqlite3session_patchset_strm","int",["sqlite3_session*",new a.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppp)",bindScope:"transient"}),"void*"]],["sqlite3session_table_filter",void 0,["sqlite3_session*",new a.xWrap.FuncPtrAdapter({name:"xFilter",...I,contextKey:(O,U)=>O[0]}),"*"]])}a.bindingSignatures.wasmInternal=[["sqlite3__wasm_db_reset","int","sqlite3*"],["sqlite3__wasm_db_vfs","sqlite3_vfs*","sqlite3*","string"],["sqlite3__wasm_vfs_create_file","int","sqlite3_vfs*","string","*","int"],["sqlite3__wasm_posix_create_file","int","string","*","int"],["sqlite3__wasm_vfs_unlink","int","sqlite3_vfs*","string"],["sqlite3__wasm_qfmt_token","string:dealloc","string","int"]],t.StructBinder=globalThis.Jaccwabyt({heap:a.heap8u,alloc:a.alloc,dealloc:a.dealloc,bigIntEnabled:a.bigIntEnabled,memberPrefix:"$"}),delete globalThis.Jaccwabyt;{const I=a.xWrap.argAdapter("string");a.xWrap.argAdapter("string:flexible",C=>I(c.flexibleString(C))),a.xWrap.argAdapter("string:static",(function(C){return a.isPtr(C)?C:(C=""+C,this[C]||(this[C]=a.allocCString(C)))}).bind(Object.create(null)));const O=a.xWrap.argAdapter("*"),U=function(){};a.xWrap.argAdapter("sqlite3_filename",O)("sqlite3_context*",O)("sqlite3_value*",O)("void*",O)("sqlite3_changegroup*",O)("sqlite3_changeset_iter*",O)("sqlite3_session*",O)("sqlite3_stmt*",C=>{var X;return O(C instanceof(((X=t==null?void 0:t.oo1)==null?void 0:X.Stmt)||U)?C.pointer:C)})("sqlite3*",C=>{var X;return O(C instanceof(((X=t==null?void 0:t.oo1)==null?void 0:X.DB)||U)?C.pointer:C)})("sqlite3_vfs*",C=>typeof C=="string"?o.sqlite3_vfs_find(C)||t.SQLite3Error.toss(o.SQLITE_NOTFOUND,"Unknown sqlite3_vfs name:",C):O(C instanceof(o.sqlite3_vfs||U)?C.pointer:C)),a.exports.sqlite3_declare_vtab&&a.xWrap.argAdapter("sqlite3_index_info*",C=>O(C instanceof(o.sqlite3_index_info||U)?C.pointer:C))("sqlite3_module*",C=>O(C instanceof(o.sqlite3_module||U)?C.pointer:C));const M=a.xWrap.resultAdapter("*");a.xWrap.resultAdapter("sqlite3*",M)("sqlite3_context*",M)("sqlite3_stmt*",M)("sqlite3_value*",M)("sqlite3_vfs*",M)("void*",M),a.exports.sqlite3_step.length===0&&(a.xWrap.doArgcCheck=!1,t.config.warn("Disabling sqlite3.wasm.xWrap.doArgcCheck due to environmental quirks."));for(const C of a.bindingSignatures)o[C[0]]=a.xWrap.apply(null,C);for(const C of a.bindingSignatures.wasmInternal)c[C[0]]=a.xWrap.apply(null,C);const G=function(C){return()=>i(C+"() is unavailable due to lack","of BigInt support in this build.")};for(const C of a.bindingSignatures.int64)o[C[0]]=a.bigIntEnabled?a.xWrap.apply(null,C):G(C[0]);if(delete a.bindingSignatures,a.exports.sqlite3__wasm_db_error){const C=a.xWrap("sqlite3__wasm_db_error","int","sqlite3*","int","string");c.sqlite3__wasm_db_error=function(X,oe,d){return oe instanceof t.WasmAllocError?(oe=o.SQLITE_NOMEM,d=0):oe instanceof Error&&(d=d||""+oe,oe=oe.resultCode||o.SQLITE_ERROR),X?C(X,oe,d):oe}}else c.sqlite3__wasm_db_error=function(C,X,oe){return console.warn("sqlite3__wasm_db_error() is not exported.",arguments),X}}{const I=a.xCall("sqlite3__wasm_enum_json");I||i("Maintenance required: increase sqlite3__wasm_enum_json()'s","static buffer size!"),a.ctype=JSON.parse(a.cstrToJs(I));const O=["access","authorizer","blobFinalizers","changeset","config","dataTypes","dbConfig","dbStatus","encodings","fcntl","flock","ioCap","limits","openFlags","prepareFlags","resultCodes","sqlite3Status","stmtStatus","syncFlags","trace","txnState","udfFlags","version"];a.bigIntEnabled&&O.push("serialize","session","vtab");for(const G of O)for(const C of Object.entries(a.ctype[G]))o[C[0]]=C[1];a.functionEntry(o.SQLITE_WASM_DEALLOC)||i("Internal error: cannot resolve exported function","entry SQLITE_WASM_DEALLOC (=="+o.SQLITE_WASM_DEALLOC+").");const U=Object.create(null);for(const G of["resultCodes"])for(const C of Object.entries(a.ctype[G]))U[C[1]]=C[0];o.sqlite3_js_rc_str=G=>U[G];const M=Object.assign(Object.create(null),{WasmTestStruct:!0,sqlite3_kvvfs_methods:!c.isUIThread(),sqlite3_index_info:!a.bigIntEnabled,sqlite3_index_constraint:!a.bigIntEnabled,sqlite3_index_orderby:!a.bigIntEnabled,sqlite3_index_constraint_usage:!a.bigIntEnabled});for(const G of a.ctype.structs)M[G.name]||(o[G.name]=t.StructBinder(G));if(o.sqlite3_index_info){for(const G of["sqlite3_index_constraint","sqlite3_index_orderby","sqlite3_index_constraint_usage"])o.sqlite3_index_info[G]=o[G],delete o[G];o.sqlite3_vtab_config=a.xWrap("sqlite3__wasm_vtab_config","int",["sqlite3*","int","int"])}}const y=(I,O,U)=>c.sqlite3__wasm_db_error(I,o.SQLITE_MISUSE,O+"() requires "+U+" argument"+(U===1?"":"s")+"."),S=I=>c.sqlite3__wasm_db_error(I,o.SQLITE_FORMAT,"SQLITE_UTF8 is the only supported encoding."),Q=I=>a.xWrap.argAdapter("sqlite3*")(I),V=I=>a.isPtr(I)?a.cstrToJs(I):I,ne=(function(I,O){I=Q(I);let U=this.dbMap.get(I);if(O)!U&&O>0&&this.dbMap.set(I,U=Object.create(null));else return this.dbMap.delete(I),U;return U}).bind(Object.assign(Object.create(null),{dbMap:new Map}));ne.addCollation=function(I,O){const U=ne(I,1);U.collation||(U.collation=new Set),U.collation.add(V(O).toLowerCase())},ne._addUDF=function(I,O,U,M){O=V(O).toLowerCase();let G=M.get(O);G||M.set(O,G=new Set),G.add(U<0?-1:U)},ne.addFunction=function(I,O,U){const M=ne(I,1);M.udf||(M.udf=new Map),this._addUDF(I,O,U,M.udf)},a.exports.sqlite3_create_window_function&&(ne.addWindowFunc=function(I,O,U){const M=ne(I,1);M.wudf||(M.wudf=new Map),this._addUDF(I,O,U,M.wudf)}),ne.cleanup=function(I){I=Q(I);const O=[I];for(const G of["sqlite3_busy_handler","sqlite3_commit_hook","sqlite3_preupdate_hook","sqlite3_progress_handler","sqlite3_rollback_hook","sqlite3_set_authorizer","sqlite3_trace_v2","sqlite3_update_hook"]){const C=a.exports[G];if(C){O.length=C.length;try{o[G](...O)}catch(X){t.config.warn("close-time call of",G+"(",O,") threw:",X)}}}const U=ne(I,0);if(!U)return;if(U.collation){for(const G of U.collation)try{o.sqlite3_create_collation_v2(I,G,o.SQLITE_UTF8,0,0,0)}catch{}delete U.collation}let M;for(M=0;M<2;++M){const G=M?U.wudf:U.udf;if(!G)continue;const C=M?o.sqlite3_create_window_function:o.sqlite3_create_function_v2;for(const X of G){const oe=X[0],d=X[1],E=[I,oe,0,o.SQLITE_UTF8,0,0,0,0,0];M&&E.push(0);for(const F of d)try{E[2]=F,C.apply(null,E)}catch{}d.clear()}G.clear()}delete U.udf,delete U.wudf};{const I=a.xWrap("sqlite3_close_v2","int","sqlite3*");o.sqlite3_close_v2=function(O){if(arguments.length!==1)return y(O,"sqlite3_close_v2",1);if(O)try{ne.cleanup(O)}catch{}return I(O)}}if(o.sqlite3session_create){const I=a.xWrap("sqlite3session_delete",void 0,["sqlite3_session*"]);o.sqlite3session_delete=function(O){if(arguments.length!==1)return y(pDb,"sqlite3session_delete",1);O&&o.sqlite3session_table_filter(O,0,0),I(O)}}{const I=(U,M)=>"argv["+M+"]:"+U[0]+":"+a.cstrToJs(U[1]).toLowerCase(),O=a.xWrap("sqlite3_create_collation_v2","int",["sqlite3*","string","int","*",new a.xWrap.FuncPtrAdapter({name:"xCompare",signature:"i(pipip)",contextKey:I}),new a.xWrap.FuncPtrAdapter({name:"xDestroy",signature:"v(p)",contextKey:I})]);o.sqlite3_create_collation_v2=function(U,M,G,C,X,oe){if(arguments.length!==6)return y(U,"sqlite3_create_collation_v2",6);if((G&15)===0)G|=o.SQLITE_UTF8;else if(o.SQLITE_UTF8!==(G&15))return S(U);try{const d=O(U,M,G,C,X,oe);return d===0&&X instanceof Function&&ne.addCollation(U,M),d}catch(d){return c.sqlite3__wasm_db_error(U,d)}},o.sqlite3_create_collation=(U,M,G,C,X)=>arguments.length===5?o.sqlite3_create_collation_v2(U,M,G,C,X,0):y(U,"sqlite3_create_collation",5)}{const I=function(G,C){return G[0]+":"+(G[2]<0?-1:G[2])+":"+C+":"+a.cstrToJs(G[1]).toLowerCase()},O=Object.assign(Object.create(null),{xInverseAndStep:{signature:"v(pip)",contextKey:I,callProxy:G=>(C,X,oe)=>{try{G(C,...o.sqlite3_values_to_js(X,oe))}catch(d){o.sqlite3_result_error_js(C,d)}}},xFinalAndValue:{signature:"v(p)",contextKey:I,callProxy:G=>C=>{try{o.sqlite3_result_js(C,G(C))}catch(X){o.sqlite3_result_error_js(C,X)}}},xFunc:{signature:"v(pip)",contextKey:I,callProxy:G=>(C,X,oe)=>{try{o.sqlite3_result_js(C,G(C,...o.sqlite3_values_to_js(X,oe)))}catch(d){o.sqlite3_result_error_js(C,d)}}},xDestroy:{signature:"v(p)",contextKey:I,callProxy:G=>C=>{try{G(C)}catch(X){console.error("UDF xDestroy method threw:",X)}}}}),U=a.xWrap("sqlite3_create_function_v2","int",["sqlite3*","string","int","int","*",new a.xWrap.FuncPtrAdapter({name:"xFunc",...O.xFunc}),new a.xWrap.FuncPtrAdapter({name:"xStep",...O.xInverseAndStep}),new a.xWrap.FuncPtrAdapter({name:"xFinal",...O.xFinalAndValue}),new a.xWrap.FuncPtrAdapter({name:"xDestroy",...O.xDestroy})]),M=a.exports.sqlite3_create_window_function?a.xWrap("sqlite3_create_window_function","int",["sqlite3*","string","int","int","*",new a.xWrap.FuncPtrAdapter({name:"xStep",...O.xInverseAndStep}),new a.xWrap.FuncPtrAdapter({name:"xFinal",...O.xFinalAndValue}),new a.xWrap.FuncPtrAdapter({name:"xValue",...O.xFinalAndValue}),new a.xWrap.FuncPtrAdapter({name:"xInverse",...O.xInverseAndStep}),new a.xWrap.FuncPtrAdapter({name:"xDestroy",...O.xDestroy})]):void 0;o.sqlite3_create_function_v2=function G(C,X,oe,d,E,F,te,m,q){if(G.length!==arguments.length)return y(C,"sqlite3_create_function_v2",G.length);if((d&15)===0)d|=o.SQLITE_UTF8;else if(o.SQLITE_UTF8!==(d&15))return S(C);try{const u=U(C,X,oe,d,E,F,te,m,q);return u===0&&(F instanceof Function||te instanceof Function||m instanceof Function||q instanceof Function)&&ne.addFunction(C,X,oe),u}catch(u){return console.error("sqlite3_create_function_v2() setup threw:",u),c.sqlite3__wasm_db_error(C,u,"Creation of UDF threw: "+u)}},o.sqlite3_create_function=function G(C,X,oe,d,E,F,te,m){return G.length===arguments.length?o.sqlite3_create_function_v2(C,X,oe,d,E,F,te,m,0):y(C,"sqlite3_create_function",G.length)},M?o.sqlite3_create_window_function=function G(C,X,oe,d,E,F,te,m,q,u){if(G.length!==arguments.length)return y(C,"sqlite3_create_window_function",G.length);if((d&15)===0)d|=o.SQLITE_UTF8;else if(o.SQLITE_UTF8!==(d&15))return S(C);try{const p=M(C,X,oe,d,E,F,te,m,q,u);return p===0&&(F instanceof Function||te instanceof Function||m instanceof Function||q instanceof Function||u instanceof Function)&&ne.addWindowFunc(C,X,oe),p}catch(p){return console.error("sqlite3_create_window_function() setup threw:",p),c.sqlite3__wasm_db_error(C,p,"Creation of UDF threw: "+p)}}:delete o.sqlite3_create_window_function,o.sqlite3_create_function_v2.udfSetResult=o.sqlite3_create_function.udfSetResult=o.sqlite3_result_js,o.sqlite3_create_window_function&&(o.sqlite3_create_window_function.udfSetResult=o.sqlite3_result_js),o.sqlite3_create_function_v2.udfConvertArgs=o.sqlite3_create_function.udfConvertArgs=o.sqlite3_values_to_js,o.sqlite3_create_window_function&&(o.sqlite3_create_window_function.udfConvertArgs=o.sqlite3_values_to_js),o.sqlite3_create_function_v2.udfSetError=o.sqlite3_create_function.udfSetError=o.sqlite3_result_error_js,o.sqlite3_create_window_function&&(o.sqlite3_create_window_function.udfSetError=o.sqlite3_result_error_js)}{const I=(U,M)=>(typeof U=="string"?M=-1:c.isSQLableTypedArray(U)?(M=U.byteLength,U=c.typedArrayToString(U instanceof ArrayBuffer?new Uint8Array(U):U)):Array.isArray(U)&&(U=U.join(""),M=-1),[U,M]),O={basic:a.xWrap("sqlite3_prepare_v3","int",["sqlite3*","string","int","int","**","**"]),full:a.xWrap("sqlite3_prepare_v3","int",["sqlite3*","*","int","int","**","**"])};o.sqlite3_prepare_v3=function U(M,G,C,X,oe,d){if(U.length!==arguments.length)return y(M,"sqlite3_prepare_v3",U.length);const[E,F]=I(G,C);switch(typeof E){case"string":return O.basic(M,E,F,X,oe,null);case"number":return O.full(M,E,F,X,oe,d);default:return c.sqlite3__wasm_db_error(M,o.SQLITE_MISUSE,"Invalid SQL argument type for sqlite3_prepare_v2/v3().")}},o.sqlite3_prepare_v2=function U(M,G,C,X,oe){return U.length===arguments.length?o.sqlite3_prepare_v3(M,G,C,0,X,oe):y(M,"sqlite3_prepare_v2",U.length)}}{const I=a.xWrap("sqlite3_bind_text","int",["sqlite3_stmt*","int","string","int","*"]),O=a.xWrap("sqlite3_bind_blob","int",["sqlite3_stmt*","int","*","int","*"]);o.sqlite3_bind_text=function U(M,G,C,X,oe){if(U.length!==arguments.length)return y(o.sqlite3_db_handle(M),"sqlite3_bind_text",U.length);if(a.isPtr(C)||C===null)return I(M,G,C,X,oe);C instanceof ArrayBuffer?C=new Uint8Array(C):Array.isArray(pMem)&&(C=pMem.join(""));let d,E;try{if(c.isSQLableTypedArray(C))d=a.allocFromTypedArray(C),E=C.byteLength;else if(typeof C=="string")[d,E]=a.allocCString(C);else return c.sqlite3__wasm_db_error(o.sqlite3_db_handle(M),o.SQLITE_MISUSE,"Invalid 3rd argument type for sqlite3_bind_text().");return I(M,G,d,E,o.SQLITE_WASM_DEALLOC)}catch(F){return a.dealloc(d),c.sqlite3__wasm_db_error(o.sqlite3_db_handle(M),F)}},o.sqlite3_bind_blob=function U(M,G,C,X,oe){if(U.length!==arguments.length)return y(o.sqlite3_db_handle(M),"sqlite3_bind_blob",U.length);if(a.isPtr(C)||C===null)return O(M,G,C,X,oe);C instanceof ArrayBuffer?C=new Uint8Array(C):Array.isArray(C)&&(C=C.join(""));let d,E;try{if(c.isBindableTypedArray(C))d=a.allocFromTypedArray(C),E=X>=0?X:C.byteLength;else if(typeof C=="string")[d,E]=a.allocCString(C);else return c.sqlite3__wasm_db_error(o.sqlite3_db_handle(M),o.SQLITE_MISUSE,"Invalid 3rd argument type for sqlite3_bind_blob().");return O(M,G,d,E,o.SQLITE_WASM_DEALLOC)}catch(F){return a.dealloc(d),c.sqlite3__wasm_db_error(o.sqlite3_db_handle(M),F)}}}o.sqlite3_config=function(I,...O){if(arguments.length<2)return o.SQLITE_MISUSE;switch(I){case o.SQLITE_CONFIG_COVERING_INDEX_SCAN:case o.SQLITE_CONFIG_MEMSTATUS:case o.SQLITE_CONFIG_SMALL_MALLOC:case o.SQLITE_CONFIG_SORTERREF_SIZE:case o.SQLITE_CONFIG_STMTJRNL_SPILL:case o.SQLITE_CONFIG_URI:return a.exports.sqlite3__wasm_config_i(I,O[0]);case o.SQLITE_CONFIG_LOOKASIDE:return a.exports.sqlite3__wasm_config_ii(I,O[0],O[1]);case o.SQLITE_CONFIG_MEMDB_MAXSIZE:return a.exports.sqlite3__wasm_config_j(I,O[0]);case o.SQLITE_CONFIG_GETMALLOC:case o.SQLITE_CONFIG_GETMUTEX:case o.SQLITE_CONFIG_GETPCACHE2:case o.SQLITE_CONFIG_GETPCACHE:case o.SQLITE_CONFIG_HEAP:case o.SQLITE_CONFIG_LOG:case o.SQLITE_CONFIG_MALLOC:case o.SQLITE_CONFIG_MMAP_SIZE:case o.SQLITE_CONFIG_MULTITHREAD:case o.SQLITE_CONFIG_MUTEX:case o.SQLITE_CONFIG_PAGECACHE:case o.SQLITE_CONFIG_PCACHE2:case o.SQLITE_CONFIG_PCACHE:case o.SQLITE_CONFIG_PCACHE_HDRSZ:case o.SQLITE_CONFIG_PMASZ:case o.SQLITE_CONFIG_SERIALIZED:case o.SQLITE_CONFIG_SINGLETHREAD:case o.SQLITE_CONFIG_SQLLOG:case o.SQLITE_CONFIG_WIN32_HEAPSIZE:default:return o.SQLITE_NOTFOUND}};{const I=new Set;o.sqlite3_auto_extension=function(O){if(O instanceof Function)O=a.installFunction("i(ppp)",O);else if(arguments.length!==1||!a.isPtr(O))return o.SQLITE_MISUSE;const U=a.exports.sqlite3_auto_extension(O);return O!==arguments[0]&&(U===0?I.add(O):a.uninstallFunction(O)),U},o.sqlite3_cancel_auto_extension=function(O){return!O||arguments.length!==1||!a.isPtr(O)?0:a.exports.sqlite3_cancel_auto_extension(O)},o.sqlite3_reset_auto_extension=function(){a.exports.sqlite3_reset_auto_extension();for(const O of I)a.uninstallFunction(O);I.clear()}}const ae=o.sqlite3_vfs_find("kvvfs");if(ae)if(c.isUIThread()){const I=new o.sqlite3_kvvfs_methods(a.exports.sqlite3__wasm_kvvfs_methods());delete o.sqlite3_kvvfs_methods;const O=a.exports.sqlite3__wasm_kvvfsMakeKeyOnPstack,U=a.pstack,M=C=>a.peek(C)===115?sessionStorage:localStorage,G={xRead:(C,X,oe,d)=>{const E=U.pointer,F=a.scopedAllocPush();try{const te=O(C,X);if(!te)return-3;const m=a.cstrToJs(te),q=M(C).getItem(m);if(!q)return-1;const u=q.length;if(d<=0)return u;if(d===1)return a.poke(oe,0),u;const p=a.scopedAllocCString(q);return d>u+1&&(d=u+1),a.heap8u().copyWithin(oe,p,p+d-1),a.poke(oe+d-1,0),d-1}catch(te){return console.error("kvstorageRead()",te),-2}finally{U.restore(E),a.scopedAllocPop(F)}},xWrite:(C,X,oe)=>{const d=U.pointer;try{const E=O(C,X);if(!E)return 1;const F=a.cstrToJs(E);return M(C).setItem(F,a.cstrToJs(oe)),0}catch(E){return console.error("kvstorageWrite()",E),o.SQLITE_IOERR}finally{U.restore(d)}},xDelete:(C,X)=>{const oe=U.pointer;try{const d=O(C,X);return d?(M(C).removeItem(a.cstrToJs(d)),0):1}catch(d){return console.error("kvstorageDelete()",d),o.SQLITE_IOERR}finally{U.restore(oe)}}};for(const C of Object.keys(G))I[I.memberKey(C)]=a.installFunction(I.memberSignature(C),G[C])}else o.sqlite3_vfs_unregister(ae);a.xWrap.FuncPtrAdapter.warnOnUse=!0;const $=t.StructBinder,N=function I(O,U,M,G=I.installMethodArgcCheck){if(O instanceof $.StructType?!(M instanceof Function)&&!a.isPtr(M)&&i("Usage errror: expecting a Function or WASM pointer to one."):i("Usage error: target object is-not-a StructType."),arguments.length===1)return(d,E)=>I(O,d,E,G);I.argcProxy||(I.argcProxy=function(d,E,F,te){return function(...m){return F.length!==arguments.length&&i("Argument mismatch for",d.structInfo.name+"::"+E+": Native signature is:",te),F.apply(this,m)}},I.removeFuncList=function(){this.ondispose.__removeFuncList&&(this.ondispose.__removeFuncList.forEach((d,E)=>{if(typeof d=="number")try{a.uninstallFunction(d)}catch{}}),delete this.ondispose.__removeFuncList)});const C=O.memberSignature(U);C.length<2&&i("Member",U,"does not have a function pointer signature:",C);const X=O.memberKey(U),oe=G&&!a.isPtr(M)?I.argcProxy(O,X,M,C):M;if(a.isPtr(oe))oe&&!a.functionEntry(oe)&&i("Pointer",oe,"is not a WASM function table entry."),O[X]=oe;else{const d=a.installFunction(oe,O.memberSignature(U,!0));O[X]=d,(!O.ondispose||!O.ondispose.__removeFuncList)&&(O.addOnDispose("ondispose.__removeFuncList handler",I.removeFuncList),O.ondispose.__removeFuncList=[]),O.ondispose.__removeFuncList.push(X,d)}return(d,E)=>I(O,d,E,G)};N.installMethodArgcCheck=!1;const J=function(I,O,U=N.installMethodArgcCheck){const M=new Map;for(const G of Object.keys(O)){const C=O[G],X=M.get(C);if(X){const oe=I.memberKey(G);I[oe]=I[I.memberKey(X)]}else N(I,G,C,U),M.set(C,G)}return I};$.StructType.prototype.installMethod=function(O,U,M=N.installMethodArgcCheck){return arguments.length<3&&O&&typeof O=="object"?J(this,...arguments):N(this,...arguments)},$.StructType.prototype.installMethods=function(I,O=N.installMethodArgcCheck){return J(this,I,O)}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){t.version={libVersion:"3.49.1",libVersionNumber:3049001,sourceId:"2025-02-18 13:38:58 873d4e274b4988d260ba8354a9718324a1c26187a4ab4c1cc0227c03d0f10e70",downloadVersion:3490100}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){const i=(...m)=>{throw new t.SQLite3Error(...m)},o=t.capi,a=t.wasm,c=t.util,y=new WeakMap,S=new WeakMap,Q=(m,q,u)=>{const p=Object.getOwnPropertyDescriptor(m,q);return p?p.value:u},V=function(m,q){return q&&(m instanceof N&&(m=m.pointer),i(q,"sqlite3 result code",q+":",m?o.sqlite3_errmsg(m):o.sqlite3_errstr(q))),arguments[0]},ne=a.installFunction("i(ippp)",(function(m,q,u,p){o.SQLITE_TRACE_STMT===m&&console.log("SQL TRACE #"+ ++this.counter+" via sqlite3@"+q+":",a.cstrToJs(p))}).bind({counter:0})),ae=Object.create(null),$=function m(...q){if(!m._name2vfs){m._name2vfs=Object.create(null);const Ie=typeof importScripts=="function"?De=>i("The VFS for",De,"is only available in the main window thread."):!1;m._name2vfs[":localStorage:"]={vfs:"kvvfs",filename:Ie||(()=>"local")},m._name2vfs[":sessionStorage:"]={vfs:"kvvfs",filename:Ie||(()=>"session")}}const u=m.normalizeArgs(...q);let p=u.filename,k=u.vfs,A=u.flags;(typeof p!="string"&&typeof p!="number"||typeof A!="string"||k&&typeof k!="string"&&typeof k!="number")&&(t.config.error("Invalid DB ctor args",u,arguments),i("Invalid arguments for DB constructor."));let ee=typeof p=="number"?a.cstrToJs(p):p;const ge=m._name2vfs[ee];ge&&(k=ge.vfs,p=ee=ge.filename(ee));let qe,Ce=0;A.indexOf("c")>=0&&(Ce|=o.SQLITE_OPEN_CREATE|o.SQLITE_OPEN_READWRITE),A.indexOf("w")>=0&&(Ce|=o.SQLITE_OPEN_READWRITE),Ce===0&&(Ce|=o.SQLITE_OPEN_READONLY),Ce|=o.SQLITE_OPEN_EXRESCODE;const Se=a.pstack.pointer;try{const Ie=a.pstack.allocPtr();let De=o.sqlite3_open_v2(p,Ie,Ce,k||0);qe=a.peekPtr(Ie),V(qe,De),o.sqlite3_extended_result_codes(qe,1),A.indexOf("t")>=0&&o.sqlite3_trace_v2(qe,o.SQLITE_TRACE_STMT,ne,qe)}catch(Ie){throw qe&&o.sqlite3_close_v2(qe),Ie}finally{a.pstack.restore(Se)}this.filename=ee,y.set(this,qe),S.set(this,Object.create(null));try{const Ie=o.sqlite3_js_db_vfs(qe)||i("Internal error: cannot get VFS for new db handle."),De=ae[Ie];De&&(De instanceof Function?De(this,t):V(qe,o.sqlite3_exec(qe,De,0,0,0)))}catch(Ie){throw this.close(),Ie}};$.setVfsPostOpenCallback=function(m,q){q instanceof Function||i("dbCtorHelper.setVfsPostOpenCallback() should not be used with a non-function argument.",arguments),ae[m]=q},$.normalizeArgs=function(m=":memory:",q="c",u=null){const p={};return arguments.length===1&&arguments[0]&&typeof arguments[0]=="object"?(Object.assign(p,arguments[0]),p.flags===void 0&&(p.flags="c"),p.vfs===void 0&&(p.vfs=null),p.filename===void 0&&(p.filename=":memory:")):(p.filename=m,p.flags=q,p.vfs=u),p};const N=function(...m){$.apply(this,m)};N.dbCtorHelper=$;const J={null:1,number:2,string:3,boolean:4,blob:5};J.undefined==J.null,a.bigIntEnabled&&(J.bigint=J.number);const I=function(){J!==arguments[2]&&i(o.SQLITE_MISUSE,"Do not call the Stmt constructor directly. Use DB.prepare()."),this.db=arguments[0],y.set(this,arguments[1]),this.parameterCount=o.sqlite3_bind_parameter_count(this.pointer)},O=function(m){return m.pointer||i("DB has been closed."),m},U=function(m,q){return(q!==(q|0)||q<0||q>=m.columnCount)&&i("Column index",q,"is out of range."),m},M=function(m,q){const u=Object.create(null);switch(u.opt=Object.create(null),q.length){case 1:typeof q[0]=="string"||c.isSQLableTypedArray(q[0])||Array.isArray(q[0])?u.sql=q[0]:q[0]&&typeof q[0]=="object"&&(u.opt=q[0],u.sql=u.opt.sql);break;case 2:u.sql=q[0],u.opt=q[1];break;default:i("Invalid argument count for exec().")}u.sql=c.flexibleString(u.sql),typeof u.sql!="string"&&i("Missing SQL argument or unsupported SQL value type.");const p=u.opt;switch(p.returnValue){case"resultRows":p.resultRows||(p.resultRows=[]),u.returnVal=()=>p.resultRows;break;case"saveSql":p.saveSql||(p.saveSql=[]),u.returnVal=()=>p.saveSql;break;case void 0:case"this":u.returnVal=()=>m;break;default:i("Invalid returnValue value:",p.returnValue)}if(!p.callback&&!p.returnValue&&p.rowMode!==void 0&&(p.resultRows||(p.resultRows=[]),u.returnVal=()=>p.resultRows),p.callback||p.resultRows)switch(p.rowMode===void 0?"array":p.rowMode){case"object":u.cbArg=(k,A)=>{A.columnNames||(A.columnNames=k.getColumnNames([]));const ee=k.get([]),ge=Object.create(null);for(const qe in A.columnNames)ge[A.columnNames[qe]]=ee[qe];return ge};break;case"array":u.cbArg=k=>k.get([]);break;case"stmt":Array.isArray(p.resultRows)&&i("exec(): invalid rowMode for a resultRows array: must","be one of 'array', 'object',","a result column number, or column name reference."),u.cbArg=k=>k;break;default:if(c.isInt32(p.rowMode)){u.cbArg=k=>k.get(p.rowMode);break}else if(typeof p.rowMode=="string"&&p.rowMode.length>1&&p.rowMode[0]==="$"){const k=p.rowMode.substr(1);u.cbArg=A=>{const ee=A.get(Object.create(null))[k];return ee===void 0?i(o.SQLITE_NOTFOUND,"exec(): unknown result column:",k):ee};break}i("Invalid rowMode:",p.rowMode)}return u},G=(m,q,u,...p)=>{const k=m.prepare(q);try{const A=k.bind(u).step()?k.get(...p):void 0;return k.reset(),A}finally{k.finalize()}},C=(m,q,u,p)=>m.exec({sql:q,bind:u,rowMode:p,returnValue:"resultRows"});N.checkRc=(m,q)=>V(m,q),N.prototype={isOpen:function(){return!!this.pointer},affirmOpen:function(){return O(this)},close:function(){if(this.pointer){if(this.onclose&&this.onclose.before instanceof Function)try{this.onclose.before(this)}catch{}const m=this.pointer;if(Object.keys(S.get(this)).forEach((q,u)=>{if(u&&u.pointer)try{u.finalize()}catch{}}),y.delete(this),S.delete(this),o.sqlite3_close_v2(m),this.onclose&&this.onclose.after instanceof Function)try{this.onclose.after(this)}catch{}delete this.filename}},changes:function(m=!1,q=!1){const u=O(this).pointer;return m?q?o.sqlite3_total_changes64(u):o.sqlite3_total_changes(u):q?o.sqlite3_changes64(u):o.sqlite3_changes(u)},dbFilename:function(m="main"){return o.sqlite3_db_filename(O(this).pointer,m)},dbName:function(m=0){return o.sqlite3_db_name(O(this).pointer,m)},dbVfsName:function(m=0){let q;const u=o.sqlite3_js_db_vfs(O(this).pointer,m);if(u){const p=new o.sqlite3_vfs(u);try{q=a.cstrToJs(p.$zName)}finally{p.dispose()}}return q},prepare:function(m){O(this);const q=a.pstack.pointer;let u,p;try{u=a.pstack.alloc(8),N.checkRc(this,o.sqlite3_prepare_v2(this.pointer,m,-1,u,null)),p=a.peekPtr(u)}finally{a.pstack.restore(q)}p||i("Cannot prepare empty SQL.");const k=new I(this,p,J);return S.get(this)[p]=k,k},exec:function(){O(this);const m=M(this,arguments);if(!m.sql)return i("exec() requires an SQL string.");const q=m.opt,u=q.callback,p=Array.isArray(q.resultRows)?q.resultRows:void 0;let k,A=q.bind,ee=!!(m.cbArg||q.columnNames||p);const ge=a.scopedAllocPush(),qe=Array.isArray(q.saveSql)?q.saveSql:void 0;try{const Ce=c.isSQLableTypedArray(m.sql);let Se=Ce?m.sql.byteLength:a.jstrlen(m.sql);const Ie=a.scopedAlloc(2*a.ptrSizeof+(Se+1)),De=Ie+a.ptrSizeof;let ze=De+a.ptrSizeof;const Je=ze+Se;for(Ce?a.heap8().set(m.sql,ze):a.jstrcpy(m.sql,a.heap8(),ze,Se,!1),a.poke(ze+Se,0);ze&&a.peek(ze,"i8");){a.pokePtr([Ie,De],0),N.checkRc(this,o.sqlite3_prepare_v3(this.pointer,ze,Se,0,Ie,De));const Xe=a.peekPtr(Ie);if(ze=a.peekPtr(De),Se=Je-ze,!!Xe){if(qe&&qe.push(o.sqlite3_sql(Xe).trim()),k=new I(this,Xe,J),A&&k.parameterCount&&(k.bind(A),A=null),ee&&k.columnCount){let pt=Array.isArray(q.columnNames)?0:1;if(ee=!1,m.cbArg||p){const it=Object.create(null);for(;k.step();k._lockedByExec=!1){pt++===0&&k.getColumnNames(it.columnNames=q.columnNames||[]),k._lockedByExec=!0;const z=m.cbArg(k,it);if(p&&p.push(z),u&&u.call(q,z,k)===!1)break}k._lockedByExec=!1}pt===0&&k.getColumnNames(q.columnNames)}else k.step();k.reset().finalize(),k=null}}}finally{a.scopedAllocPop(ge),k&&(delete k._lockedByExec,k.finalize())}return m.returnVal()},createFunction:function(q,u,p){const k=it=>it instanceof Function;switch(arguments.length){case 1:p=q,q=p.name,u=p.xFunc||0;break;case 2:k(u)||(p=u,u=p.xFunc||0);break}p||(p={}),typeof q!="string"&&i("Invalid arguments: missing function name.");let A=p.xStep||0,ee=p.xFinal||0;const ge=p.xValue||0,qe=p.xInverse||0;let Ce;k(u)?(Ce=!1,(k(A)||k(ee))&&i("Ambiguous arguments: scalar or aggregate?"),A=ee=null):k(A)?(k(ee)||i("Missing xFinal() callback for aggregate or window UDF."),u=null):k(ee)?i("Missing xStep() callback for aggregate or window UDF."):i("Missing function-type properties."),Ce===!1?(k(ge)||k(qe))&&i("xValue and xInverse are not permitted for non-window UDFs."):k(ge)?(k(qe)||i("xInverse must be provided if xValue is."),Ce=!0):k(qe)&&i("xValue must be provided if xInverse is.");const Se=p.pApp;Se!=null&&(typeof Se!="number"||!c.isInt32(Se))&&i("Invalid value for pApp property. Must be a legal WASM pointer value.");const Ie=p.xDestroy||0;Ie&&!k(Ie)&&i("xDestroy property must be a function.");let De=0;Q(p,"deterministic")&&(De|=o.SQLITE_DETERMINISTIC),Q(p,"directOnly")&&(De|=o.SQLITE_DIRECTONLY),Q(p,"innocuous")&&(De|=o.SQLITE_INNOCUOUS),q=q.toLowerCase();const ze=u||A,Je=Q(p,"arity"),Xe=typeof Je=="number"?Je:ze.length?ze.length-1:0;let pt;return Ce?pt=o.sqlite3_create_window_function(this.pointer,q,Xe,o.SQLITE_UTF8|De,Se||0,A,ee,ge,qe,Ie):pt=o.sqlite3_create_function_v2(this.pointer,q,Xe,o.SQLITE_UTF8|De,Se||0,u,A,ee,Ie),N.checkRc(this,pt),this},selectValue:function(m,q,u){return G(this,m,q,0,u)},selectValues:function(m,q,u){const p=this.prepare(m),k=[];try{for(p.bind(q);p.step();)k.push(p.get(0,u));p.reset()}finally{p.finalize()}return k},selectArray:function(m,q){return G(this,m,q,[])},selectObject:function(m,q){return G(this,m,q,{})},selectArrays:function(m,q){return C(this,m,q,"array")},selectObjects:function(m,q){return C(this,m,q,"object")},openStatementCount:function(){return this.pointer?Object.keys(S.get(this)).length:0},transaction:function(m){let q="BEGIN";arguments.length>1&&(/[^a-zA-Z]/.test(arguments[0])&&i(o.SQLITE_MISUSE,"Invalid argument for BEGIN qualifier."),q+=" "+arguments[0],m=arguments[1]),O(this).exec(q);try{const u=m(this);return this.exec("COMMIT"),u}catch(u){throw this.exec("ROLLBACK"),u}},savepoint:function(m){O(this).exec("SAVEPOINT oo1");try{const q=m(this);return this.exec("RELEASE oo1"),q}catch(q){throw this.exec("ROLLBACK to SAVEPOINT oo1; RELEASE SAVEPOINT oo1"),q}},checkRc:function(m){return V(this,m)}};const X=function(m){return m.pointer||i("Stmt has been closed."),m},oe=function(m){let q=J[m==null?"null":typeof m];switch(q){case J.boolean:case J.null:case J.number:case J.string:return q;case J.bigint:if(a.bigIntEnabled)return q;default:return c.isBindableTypedArray(m)?J.blob:void 0}},d=function(m){return oe(m)||i("Unsupported bind() argument type:",typeof m)},E=function(m,q){const u=typeof q=="number"?q:o.sqlite3_bind_parameter_index(m.pointer,q);return u===0||!c.isInt32(u)?i("Invalid bind() parameter name: "+q):(u<1||u>m.parameterCount)&&i("Bind index",q,"is out of range."),u},F=function(m,q){return m._lockedByExec&&i("Operation is illegal when statement is locked:",q),m},te=function m(q,u,p,k){F(X(q),"bind()"),m._||(m._tooBigInt=ee=>i("BigInt value is too big to store without precision loss:",ee),m._={string:function(ee,ge,qe,Ce){const[Se,Ie]=a.allocCString(qe,!0);return(Ce?o.sqlite3_bind_blob:o.sqlite3_bind_text)(ee.pointer,ge,Se,Ie,o.SQLITE_WASM_DEALLOC)}}),d(k),u=E(q,u);let A=0;switch(k==null?J.null:p){case J.null:A=o.sqlite3_bind_null(q.pointer,u);break;case J.string:A=m._.string(q,u,k,!1);break;case J.number:{let ee;c.isInt32(k)?ee=o.sqlite3_bind_int:typeof k=="bigint"?c.bigIntFits64(k)?a.bigIntEnabled?ee=o.sqlite3_bind_int64:c.bigIntFitsDouble(k)?(k=Number(k),ee=o.sqlite3_bind_double):m._tooBigInt(k):m._tooBigInt(k):(k=Number(k),a.bigIntEnabled&&Number.isInteger(k)?ee=o.sqlite3_bind_int64:ee=o.sqlite3_bind_double),A=ee(q.pointer,u,k);break}case J.boolean:A=o.sqlite3_bind_int(q.pointer,u,k?1:0);break;case J.blob:{if(typeof k=="string"){A=m._.string(q,u,k,!0);break}else k instanceof ArrayBuffer?k=new Uint8Array(k):c.isBindableTypedArray(k)||i("Binding a value as a blob requires","that it be a string, Uint8Array, Int8Array, or ArrayBuffer.");const ee=a.alloc(k.byteLength||1);a.heap8().set(k.byteLength?k:[0],ee),A=o.sqlite3_bind_blob(q.pointer,u,ee,k.byteLength,o.SQLITE_WASM_DEALLOC);break}default:t.config.warn("Unsupported bind() argument type:",k),i("Unsupported bind() argument type: "+typeof k)}return A&&N.checkRc(q.db.pointer,A),q._mayGet=!1,q};I.prototype={finalize:function(){if(this.pointer){F(this,"finalize()");const m=o.sqlite3_finalize(this.pointer);return delete S.get(this.db)[this.pointer],y.delete(this),delete this._mayGet,delete this.parameterCount,delete this._lockedByExec,delete this.db,m}},clearBindings:function(){return F(X(this),"clearBindings()"),o.sqlite3_clear_bindings(this.pointer),this._mayGet=!1,this},reset:function(m){F(this,"reset()"),m&&this.clearBindings();const q=o.sqlite3_reset(X(this).pointer);return this._mayGet=!1,V(this.db,q),this},bind:function(){X(this);let m,q;switch(arguments.length){case 1:m=1,q=arguments[0];break;case 2:m=arguments[0],q=arguments[1];break;default:i("Invalid bind() arguments.")}return q===void 0?this:(this.parameterCount||i("This statement has no bindable parameters."),this._mayGet=!1,q===null?te(this,m,J.null,q):Array.isArray(q)?(arguments.length!==1&&i("When binding an array, an index argument is not permitted."),q.forEach((u,p)=>te(this,p+1,d(u),u)),this):(q instanceof ArrayBuffer&&(q=new Uint8Array(q)),typeof q=="object"&&!c.isBindableTypedArray(q)?(arguments.length!==1&&i("When binding an object, an index argument is not permitted."),Object.keys(q).forEach(u=>te(this,u,d(q[u]),q[u])),this):te(this,m,d(q),q)))},bindAsBlob:function(m,q){X(this),arguments.length===1&&(q=m,m=1);const u=d(q);return J.string!==u&&J.blob!==u&&J.null!==u&&i("Invalid value type for bindAsBlob()"),te(this,m,J.blob,q)},step:function(){F(this,"step()");const m=o.sqlite3_step(X(this).pointer);switch(m){case o.SQLITE_DONE:return this._mayGet=!1;case o.SQLITE_ROW:return this._mayGet=!0;default:this._mayGet=!1,t.config.warn("sqlite3_step() rc=",m,o.sqlite3_js_rc_str(m),"SQL =",o.sqlite3_sql(this.pointer)),N.checkRc(this.db.pointer,m)}},stepReset:function(){return this.step(),this.reset()},stepFinalize:function(){try{const m=this.step();return this.reset(),m}finally{try{this.finalize()}catch{}}},get:function(m,q){if(X(this)._mayGet||i("Stmt.step() has not (recently) returned true."),Array.isArray(m)){let u=0;const p=this.columnCount;for(;u<p;)m[u]=this.get(u++);return m}else if(m&&typeof m=="object"){let u=0;const p=this.columnCount;for(;u<p;)m[o.sqlite3_column_name(this.pointer,u)]=this.get(u++);return m}switch(U(this,m),q===void 0?o.sqlite3_column_type(this.pointer,m):q){case o.SQLITE_NULL:return null;case o.SQLITE_INTEGER:if(a.bigIntEnabled){const u=o.sqlite3_column_int64(this.pointer,m);return u>=Number.MIN_SAFE_INTEGER&&u<=Number.MAX_SAFE_INTEGER?Number(u).valueOf():u}else{const u=o.sqlite3_column_double(this.pointer,m);return(u>Number.MAX_SAFE_INTEGER||u<Number.MIN_SAFE_INTEGER)&&i("Integer is out of range for JS integer range: "+u),c.isInt32(u)?u|0:u}case o.SQLITE_FLOAT:return o.sqlite3_column_double(this.pointer,m);case o.SQLITE_TEXT:return o.sqlite3_column_text(this.pointer,m);case o.SQLITE_BLOB:{const u=o.sqlite3_column_bytes(this.pointer,m),p=o.sqlite3_column_blob(this.pointer,m),k=new Uint8Array(u);return u&&k.set(a.heap8u().slice(p,p+u),0),u&&this.db._blobXfer instanceof Array&&this.db._blobXfer.push(k.buffer),k}default:i("Don't know how to translate","type of result column #"+m+".")}i("Not reached.")},getInt:function(m){return this.get(m,o.SQLITE_INTEGER)},getFloat:function(m){return this.get(m,o.SQLITE_FLOAT)},getString:function(m){return this.get(m,o.SQLITE_TEXT)},getBlob:function(m){return this.get(m,o.SQLITE_BLOB)},getJSON:function(m){const q=this.get(m,o.SQLITE_STRING);return q===null?q:JSON.parse(q)},getColumnName:function(m){return o.sqlite3_column_name(U(X(this),m).pointer,m)},getColumnNames:function(m=[]){U(X(this),0);const q=this.columnCount;for(let u=0;u<q;++u)m.push(o.sqlite3_column_name(this.pointer,u));return m},getParamIndex:function(m){return X(this).parameterCount?o.sqlite3_bind_parameter_index(this.pointer,m):void 0},getParamName:function(m){return X(this).parameterCount?o.sqlite3_bind_parameter_name(this.pointer,m):void 0},isBusy:function(){return o.sqlite3_stmt_busy(X(this))!==0},isReadOnly:function(){return o.sqlite3_stmt_readonly(X(this))!==0}};{const m={enumerable:!0,get:function(){return y.get(this)},set:()=>i("The pointer property is read-only.")};Object.defineProperty(I.prototype,"pointer",m),Object.defineProperty(N.prototype,"pointer",m)}if(Object.defineProperty(I.prototype,"columnCount",{enumerable:!1,get:function(){return o.sqlite3_column_count(this.pointer)},set:()=>i("The columnCount property is read-only.")}),t.oo1={DB:N,Stmt:I},c.isUIThread()){t.oo1.JsStorageDb=function(q="session"){const u=$.normalizeArgs(...arguments);q=u.filename,q!=="session"&&q!=="local"&&i("JsStorageDb db name must be one of 'session' or 'local'."),u.vfs="kvvfs",$.call(this,u)};const m=t.oo1.JsStorageDb;m.prototype=Object.create(N.prototype),m.clearStorage=o.sqlite3_js_kvvfs_clear,m.prototype.clearStorage=function(){return m.clearStorage(O(this).filename)},m.storageSize=o.sqlite3_js_kvvfs_size,m.prototype.storageSize=function(){return m.storageSize(O(this).filename)}}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){const i=t.util;t.initWorker1API=(function(){const o=(...$)=>{throw new Error($.join(" "))};globalThis.WorkerGlobalScope instanceof Function||o("initWorker1API() must be run from a Worker thread.");const a=this.sqlite3||o("Missing this.sqlite3 object."),c=a.oo1.DB,y=function($){let N=S.idMap.get($);return N||(N="db#"+ ++S.idSeq+"@"+$.pointer,S.idMap.set($,N),N)},S={dbList:[],idSeq:0,idMap:new WeakMap,xfer:[],open:function($){const N=new c($);return this.dbs[y(N)]=N,this.dbList.indexOf(N)<0&&this.dbList.push(N),N},close:function($,N){if($){delete this.dbs[y($)];const J=$.filename,I=i.sqlite3__wasm_db_vfs($.pointer,0);$.close();const O=this.dbList.indexOf($);O>=0&&this.dbList.splice(O,1),N&&J&&I&&i.sqlite3__wasm_vfs_unlink(I,J)}},post:function($,N){N&&N.length?(globalThis.postMessage($,Array.from(N)),N.length=0):globalThis.postMessage($)},dbs:Object.create(null),getDb:function($,N=!0){return this.dbs[$]||(N?o("Unknown (or closed) DB ID:",$):void 0)}},Q=function($=S.dbList[0]){return $&&$.pointer?$:o("DB is not opened.")},V=function($,N=!0){const J=S.getDb($.dbId,!1)||S.dbList[0];return N?Q(J):J},ne=function(){return S.dbList[0]&&y(S.dbList[0])},ae={open:function($){const N=Object.create(null),J=$.args||Object.create(null);J.simulateError&&o("Throwing because of simulateError flag.");const I=Object.create(null);N.vfs=J.vfs,N.filename=J.filename||"";const O=S.open(N);return I.filename=O.filename,I.persistent=!!a.capi.sqlite3_js_db_uses_vfs(O.pointer,"opfs"),I.dbId=y(O),I.vfs=O.dbVfsName(),I},close:function($){const N=V($,!1),J={filename:N&&N.filename};if(N){const I=$.args&&typeof $.args=="object"?!!$.args.unlink:!1;S.close(N,I)}return J},exec:function($){const N=typeof $.args=="string"?{sql:$.args}:$.args||Object.create(null);N.rowMode==="stmt"?o("Invalid rowMode for 'exec': stmt mode","does not work in the Worker API."):N.sql||o("'exec' requires input SQL.");const J=V($);(N.callback||Array.isArray(N.resultRows))&&(J._blobXfer=S.xfer);const I=N.callback;let O=0;const U=!!N.columnNames;typeof I=="string"&&(U||(N.columnNames=[]),N.callback=function(M,G){S.post({type:I,columnNames:N.columnNames,rowNumber:++O,row:M},S.xfer)});try{const M=N.countChanges?J.changes(!0,N.countChanges===64):void 0;J.exec(N),M!==void 0&&(N.changeCount=J.changes(!0,N.countChanges===64)-M),N.callback instanceof Function&&(N.callback=I,S.post({type:I,columnNames:N.columnNames,rowNumber:null,row:void 0}))}finally{delete J._blobXfer,N.callback&&(N.callback=I)}return N},"config-get":function(){const $=Object.create(null),N=a.config;return["bigIntEnabled"].forEach(function(J){Object.getOwnPropertyDescriptor(N,J)&&($[J]=N[J])}),$.version=a.version,$.vfsList=a.capi.sqlite3_js_vfs_list(),$},export:function($){const N=V($),J={byteArray:a.capi.sqlite3_js_db_export(N.pointer),filename:N.filename,mimetype:"application/x-sqlite3"};return S.xfer.push(J.byteArray.buffer),J},toss:function($){o("Testing worker exception")}};globalThis.onmessage=async function($){$=$.data;let N,J=$.dbId,I=$.type;const O=performance.now();try{ae.hasOwnProperty(I)&&ae[I]instanceof Function?N=await ae[I]($):o("Unknown db worker message type:",$.type)}catch(U){I="error",N={operation:$.type,message:U.message,errorClass:U.name,input:$},U.stack&&(N.stack=typeof U.stack=="string"?U.stack.split(/\n\s*/):U.stack)}J||(J=N.dbId||ne()),S.post({type:I,dbId:J,messageId:$.messageId,workerReceivedTime:O,workerRespondTime:performance.now(),departureTime:$.departureTime,result:N},S.xfer)},globalThis.postMessage({type:"sqlite3-api",result:"worker1-ready"})}).bind({sqlite3:t})}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){const i=t.wasm,o=t.capi,a=t.util.toss3,c=Object.create(null);t.vfs=c,o.sqlite3_vfs.prototype.registerVfs=function(y=!1){this instanceof t.capi.sqlite3_vfs||a("Expecting a sqlite3_vfs-type argument.");const S=o.sqlite3_vfs_register(this,y?1:0);return S&&a("sqlite3_vfs_register(",this,") failed with rc",S),this.pointer!==o.sqlite3_vfs_find(this.$zName)&&a("BUG: sqlite3_vfs_find(vfs.$zName) failed for just-installed VFS",this),this},c.installVfs=function(y){let S=0;const Q=["io","vfs"];for(const V of Q){const ne=y[V];ne&&(++S,ne.struct.installMethods(ne.methods,!!ne.applyArgcCheck),V==="vfs"&&(!ne.struct.$zName&&typeof ne.name=="string"&&ne.struct.addOnDispose(ne.struct.$zName=i.allocCString(ne.name)),ne.struct.registerVfs(!!ne.asDefault)))}return S||a("Misuse: installVfs() options object requires at least","one of:",Q),this}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){if(!t.wasm.exports.sqlite3_declare_vtab)return;const i=t.wasm,o=t.capi,a=t.util.toss3,c=Object.create(null);t.vtab=c;const y=o.sqlite3_index_info;y.prototype.nthConstraint=function(V,ne=!1){if(V<0||V>=this.$nConstraint)return!1;const ae=this.$aConstraint+y.sqlite3_index_constraint.structInfo.sizeof*V;return ne?ae:new y.sqlite3_index_constraint(ae)},y.prototype.nthConstraintUsage=function(V,ne=!1){if(V<0||V>=this.$nConstraint)return!1;const ae=this.$aConstraintUsage+y.sqlite3_index_constraint_usage.structInfo.sizeof*V;return ne?ae:new y.sqlite3_index_constraint_usage(ae)},y.prototype.nthOrderBy=function(V,ne=!1){if(V<0||V>=this.$nOrderBy)return!1;const ae=this.$aOrderBy+y.sqlite3_index_orderby.structInfo.sizeof*V;return ne?ae:new y.sqlite3_index_orderby(ae)};const S=function(V,ne){return(function(ae,$=!1){if(arguments.length===0&&(ae=new ne),ae instanceof ne)return this.set(ae.pointer,ae),ae;i.isPtr(ae)||t.SQLite3Error.toss("Invalid argument to",V+"()");let N=this.get(ae);return $&&this.delete(ae),N}).bind(new Map)},Q=function(V,ne){const ae=S(V,ne);return Object.assign(Object.create(null),{StructType:ne,create:$=>{const N=ae();return i.pokePtr($,N.pointer),N},get:$=>ae($),unget:$=>ae($,!0),dispose:$=>{const N=ae($,!0);N&&N.dispose()}})};c.xVtab=Q("xVtab",o.sqlite3_vtab),c.xCursor=Q("xCursor",o.sqlite3_vtab_cursor),c.xIndexInfo=V=>new o.sqlite3_index_info(V),c.xError=function V(ne,ae,$){if(V.errorReporter instanceof Function)try{V.errorReporter("sqlite3_module::"+ne+"(): "+ae.message)}catch{}let N;return ae instanceof t.WasmAllocError?N=o.SQLITE_NOMEM:arguments.length>2?N=$:ae instanceof t.SQLite3Error&&(N=ae.resultCode),N||o.SQLITE_ERROR},c.xError.errorReporter=console.error.bind(console),c.xRowid=(V,ne)=>i.poke(V,ne,"i64"),c.setupModule=function(V){let ne=!1;const ae=this instanceof o.sqlite3_module?this:V.struct||(ne=new o.sqlite3_module);try{const $=V.methods||a("Missing 'methods' object.");for(const N of Object.entries({xConnect:"xCreate",xDisconnect:"xDestroy"})){const J=N[0],I=N[1];$[J]===!0?$[J]=$[I]:$[I]===!0&&($[I]=$[J])}if(V.catchExceptions){const N=function(O,U){return["xConnect","xCreate"].indexOf(O)>=0?function(M,G,C,X,oe,d){try{return U(...arguments)||0}catch(E){return E instanceof t.WasmAllocError||(i.dealloc(i.peekPtr(d)),i.pokePtr(d,i.allocCString(E.message))),c.xError(O,E)}}:function(...M){try{return U(...M)||0}catch(G){return c.xError(O,G)}}},J=["xCreate","xConnect","xBestIndex","xDisconnect","xDestroy","xOpen","xClose","xFilter","xNext","xEof","xColumn","xRowid","xUpdate","xBegin","xSync","xCommit","xRollback","xFindFunction","xRename","xSavepoint","xRelease","xRollbackTo","xShadowName"],I=Object.create(null);for(const O of J){const U=$[O];if(U instanceof Function)O==="xConnect"&&$.xCreate===U?I[O]=$.xCreate:O==="xCreate"&&$.xConnect===U?I[O]=$.xConnect:I[O]=N(O,U);else continue}ae.installMethods(I,!1)}else ae.installMethods($,!!V.applyArgcCheck);if(ae.$iVersion===0){let N;typeof V.iVersion=="number"?N=V.iVersion:ae.$xShadowName?N=3:ae.$xSavePoint||ae.$xRelease||ae.$xRollbackTo?N=2:N=1,ae.$iVersion=N}}catch($){throw ne&&ne.dispose(),$}return ae},o.sqlite3_module.prototype.setupModule=function(V){return c.setupModule.call(this,V)}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){const i=function o(a){var S;if(!globalThis.SharedArrayBuffer||!globalThis.Atomics)return Promise.reject(new Error("Cannot install OPFS: Missing SharedArrayBuffer and/or Atomics. The server must emit the COOP/COEP response headers to enable those. See https://sqlite.org/wasm/doc/trunk/persistence.md#coop-coep"));if(typeof WorkerGlobalScope>"u")return Promise.reject(new Error("The OPFS sqlite3_vfs cannot run in the main thread because it requires Atomics.wait()."));if(!globalThis.FileSystemHandle||!globalThis.FileSystemDirectoryHandle||!globalThis.FileSystemFileHandle||!globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle||!((S=navigator==null?void 0:navigator.storage)!=null&&S.getDirectory))return Promise.reject(new Error("Missing required OPFS APIs."));(!a||typeof a!="object")&&(a=Object.create(null));const c=new URL(globalThis.location.href).searchParams;return c.has("opfs-disable")?Promise.resolve(t):(a.verbose===void 0&&(a.verbose=c.has("opfs-verbose")?+c.get("opfs-verbose")||2:1),a.sanityChecks===void 0&&(a.sanityChecks=c.has("opfs-sanity-check")),a.proxyUri===void 0&&(a.proxyUri=o.defaultProxyUri),typeof a.proxyUri=="function"&&(a.proxyUri=a.proxyUri()),new Promise(function(Q,V){const ne=[t.config.error,t.config.warn,t.config.log],ae=(z,...Y)=>{a.verbose>z&&ne[z]("OPFS syncer:",...Y)},$=(...z)=>ae(2,...z),N=(...z)=>ae(1,...z),J=(...z)=>ae(0,...z),I=t.util.toss,O=t.capi,U=t.util,M=t.wasm,G=O.sqlite3_vfs,C=O.sqlite3_file,X=O.sqlite3_io_methods,oe=Object.create(null),d=()=>{var z;return globalThis.FileSystemHandle&&globalThis.FileSystemDirectoryHandle&&globalThis.FileSystemFileHandle&&globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle&&((z=navigator==null?void 0:navigator.storage)==null?void 0:z.getDirectory)};oe.metrics={dump:function(){let z,Y=0,re=0,de=0;for(z in A.opIds){const ce=ee[z];Y+=ce.count,re+=ce.time,de+=ce.wait,ce.avgTime=ce.count&&ce.time?ce.time/ce.count:0,ce.avgWait=ce.count&&ce.wait?ce.wait/ce.count:0}t.config.log(globalThis.location.href,"metrics for",globalThis.location.href,":",ee,`
Total of`,Y,"op(s) for",re,"ms (incl. "+de+" ms of waiting on the async side)"),t.config.log("Serialization metrics:",ee.s11n),u.postMessage({type:"opfs-async-metrics"})},reset:function(){let z;const Y=de=>de.count=de.time=de.wait=0;for(z in A.opIds)Y(ee[z]=Object.create(null));let re=ee.s11n=Object.create(null);re=re.serialize=Object.create(null),re.count=re.time=0,re=ee.s11n.deserialize=Object.create(null),re.count=re.time=0}};const E=new X,F=new G().addOnDispose(()=>E.dispose());let te;const m=z=>(te=!0,F.dispose(),V(z)),q=()=>(te=!1,Q(t)),u=new Worker(new URL("/teimtrackr/assets/sqlite3-opfs-async-proxy-DZdsd1Kz.js",self.location.href));setTimeout(()=>{te===void 0&&m(new Error("Timeout while waiting for OPFS async proxy worker."))},4e3),u._originalOnError=u.onerror,u.onerror=function(z){J("Error initializing OPFS asyncer:",z),m(new Error("Loading OPFS async Worker failed for unknown reasons."))};const p=O.sqlite3_vfs_find(null),k=p?new G(p):null;E.$iVersion=1,F.$iVersion=2,F.$szOsFile=O.sqlite3_file.structInfo.sizeof,F.$mxPathname=1024,F.$zName=M.allocCString("opfs"),F.$xDlOpen=F.$xDlError=F.$xDlSym=F.$xDlClose=null,F.addOnDispose("$zName",F.$zName,"cleanup default VFS wrapper",()=>k?k.dispose():null);const A=Object.create(null);A.verbose=a.verbose,A.littleEndian=(()=>{const z=new ArrayBuffer(2);return new DataView(z).setInt16(0,256,!0),new Int16Array(z)[0]===256})(),A.asyncIdleWaitTime=150,A.asyncS11nExceptions=1,A.fileBufferSize=1024*64,A.sabS11nOffset=A.fileBufferSize,A.sabS11nSize=F.$mxPathname*2,A.sabIO=new SharedArrayBuffer(A.fileBufferSize+A.sabS11nSize),A.opIds=Object.create(null);const ee=Object.create(null);{let z=0;A.opIds.whichOp=z++,A.opIds.rc=z++,A.opIds.xAccess=z++,A.opIds.xClose=z++,A.opIds.xDelete=z++,A.opIds.xDeleteNoWait=z++,A.opIds.xFileSize=z++,A.opIds.xLock=z++,A.opIds.xOpen=z++,A.opIds.xRead=z++,A.opIds.xSleep=z++,A.opIds.xSync=z++,A.opIds.xTruncate=z++,A.opIds.xUnlock=z++,A.opIds.xWrite=z++,A.opIds.mkdir=z++,A.opIds["opfs-async-metrics"]=z++,A.opIds["opfs-async-shutdown"]=z++,A.opIds.retry=z++,A.sabOP=new SharedArrayBuffer(z*4),oe.metrics.reset()}A.sq3Codes=Object.create(null),["SQLITE_ACCESS_EXISTS","SQLITE_ACCESS_READWRITE","SQLITE_BUSY","SQLITE_CANTOPEN","SQLITE_ERROR","SQLITE_IOERR","SQLITE_IOERR_ACCESS","SQLITE_IOERR_CLOSE","SQLITE_IOERR_DELETE","SQLITE_IOERR_FSYNC","SQLITE_IOERR_LOCK","SQLITE_IOERR_READ","SQLITE_IOERR_SHORT_READ","SQLITE_IOERR_TRUNCATE","SQLITE_IOERR_UNLOCK","SQLITE_IOERR_WRITE","SQLITE_LOCK_EXCLUSIVE","SQLITE_LOCK_NONE","SQLITE_LOCK_PENDING","SQLITE_LOCK_RESERVED","SQLITE_LOCK_SHARED","SQLITE_LOCKED","SQLITE_MISUSE","SQLITE_NOTFOUND","SQLITE_OPEN_CREATE","SQLITE_OPEN_DELETEONCLOSE","SQLITE_OPEN_MAIN_DB","SQLITE_OPEN_READONLY"].forEach(z=>{(A.sq3Codes[z]=O[z])===void 0&&I("Maintenance required: not found:",z)}),A.opfsFlags=Object.assign(Object.create(null),{OPFS_UNLOCK_ASAP:1,OPFS_UNLINK_BEFORE_OPEN:2,defaultUnlockAsap:!1});const ge=(z,...Y)=>{const re=A.opIds[z]||I("Invalid op ID:",z);A.s11n.serialize(...Y),Atomics.store(A.sabOPView,A.opIds.rc,-1),Atomics.store(A.sabOPView,A.opIds.whichOp,re),Atomics.notify(A.sabOPView,A.opIds.whichOp);const de=performance.now();for(;Atomics.wait(A.sabOPView,A.opIds.rc,-1)!=="not-equal";);const ce=Atomics.load(A.sabOPView,A.opIds.rc);if(ee[z].wait+=performance.now()-de,ce&&A.asyncS11nExceptions){const be=A.s11n.deserialize();be&&J(z+"() async error:",...be)}return ce};oe.debug={asyncShutdown:()=>{N("Shutting down OPFS async listener. The OPFS VFS will no longer work."),ge("opfs-async-shutdown")},asyncRestart:()=>{N("Attempting to restart OPFS VFS async listener. Might work, might not."),u.postMessage({type:"opfs-async-restart"})}};const qe=()=>{if(A.s11n)return A.s11n;const z=new TextDecoder,Y=new TextEncoder("utf-8"),re=new Uint8Array(A.sabIO,A.sabS11nOffset,A.sabS11nSize),de=new DataView(A.sabIO,A.sabS11nOffset,A.sabS11nSize);A.s11n=Object.create(null);const ce=Object.create(null);ce.number={id:1,size:8,getter:"getFloat64",setter:"setFloat64"},ce.bigint={id:2,size:8,getter:"getBigInt64",setter:"setBigInt64"},ce.boolean={id:3,size:4,getter:"getInt32",setter:"setInt32"},ce.string={id:4};const be=w=>ce[typeof w]||I("Maintenance required: this value type cannot be serialized.",w),Z=w=>{switch(w){case ce.number.id:return ce.number;case ce.bigint.id:return ce.bigint;case ce.boolean.id:return ce.boolean;case ce.string.id:return ce.string;default:I("Invalid type ID:",w)}};return A.s11n.deserialize=function(w=!1){++ee.s11n.deserialize.count;const b=performance.now(),P=re[0],B=P?[]:null;if(P){const K=[];let _e=1,xe,Be,Ge;for(xe=0;xe<P;++xe,++_e)K.push(Z(re[_e]));for(xe=0;xe<P;++xe){const qt=K[xe];qt.getter?(Ge=de[qt.getter](_e,A.littleEndian),_e+=qt.size):(Be=de.getInt32(_e,A.littleEndian),_e+=4,Ge=z.decode(re.slice(_e,_e+Be)),_e+=Be),B.push(Ge)}}return w&&(re[0]=0),ee.s11n.deserialize.time+=performance.now()-b,B},A.s11n.serialize=function(...w){const b=performance.now();if(++ee.s11n.serialize.count,w.length){const P=[];let B=0,K=1;for(re[0]=w.length&255;B<w.length;++B,++K)P.push(be(w[B])),re[K]=P[B].id;for(B=0;B<w.length;++B){const _e=P[B];if(_e.setter)de[_e.setter](K,w[B],A.littleEndian),K+=_e.size;else{const xe=Y.encode(w[B]);de.setInt32(K,xe.byteLength,A.littleEndian),K+=4,re.set(xe,K),K+=xe.byteLength}}}else re[0]=0;ee.s11n.serialize.time+=performance.now()-b},A.s11n},Ce=function z(Y=16){z._chars||(z._chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789",z._n=z._chars.length);const re=[];let de=0;for(;de<Y;++de){const ce=Math.random()*(z._n*64)%z._n|0;re[de]=z._chars[ce]}return re.join("")},Se=Object.create(null),Ie=Object.create(null);Ie.op=void 0,Ie.start=void 0;const De=z=>{Ie.start=performance.now(),Ie.op=z,++ee[z].count},ze=()=>ee[Ie.op].time+=performance.now()-Ie.start,Je={xCheckReservedLock:function(z,Y){return M.poke(Y,0,"i32"),0},xClose:function(z){De("xClose");let Y=0;const re=Se[z];return re&&(delete Se[z],Y=ge("xClose",z),re.sq3File&&re.sq3File.dispose()),ze(),Y},xDeviceCharacteristics:function(z){return O.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN},xFileControl:function(z,Y,re){return O.SQLITE_NOTFOUND},xFileSize:function(z,Y){De("xFileSize");let re=ge("xFileSize",z);if(re==0)try{const de=A.s11n.deserialize()[0];M.poke(Y,de,"i64")}catch(de){J("Unexpected error reading xFileSize() result:",de),re=A.sq3Codes.SQLITE_IOERR}return ze(),re},xLock:function(z,Y){De("xLock");const re=Se[z];let de=0;return re.lockType?re.lockType=Y:(de=ge("xLock",z,Y),de===0&&(re.lockType=Y)),ze(),de},xRead:function(z,Y,re,de){De("xRead");const ce=Se[z];let be;try{be=ge("xRead",z,re,Number(de)),(be===0||O.SQLITE_IOERR_SHORT_READ===be)&&M.heap8u().set(ce.sabView.subarray(0,re),Y)}catch(Z){J("xRead(",arguments,") failed:",Z,ce),be=O.SQLITE_IOERR_READ}return ze(),be},xSync:function(z,Y){De("xSync"),++ee.xSync.count;const re=ge("xSync",z,Y);return ze(),re},xTruncate:function(z,Y){De("xTruncate");const re=ge("xTruncate",z,Number(Y));return ze(),re},xUnlock:function(z,Y){De("xUnlock");const re=Se[z];let de=0;return O.SQLITE_LOCK_NONE===Y&&re.lockType&&(de=ge("xUnlock",z,Y)),de===0&&(re.lockType=Y),ze(),de},xWrite:function(z,Y,re,de){De("xWrite");const ce=Se[z];let be;try{ce.sabView.set(M.heap8u().subarray(Y,Y+re)),be=ge("xWrite",z,re,Number(de))}catch(Z){J("xWrite(",arguments,") failed:",Z,ce),be=O.SQLITE_IOERR_WRITE}return ze(),be}},Xe={xAccess:function(z,Y,re,de){De("xAccess");const ce=ge("xAccess",M.cstrToJs(Y));return M.poke(de,ce?0:1,"i32"),ze(),0},xCurrentTime:function(z,Y){return M.poke(Y,24405875e-1+new Date().getTime()/864e5,"double"),0},xCurrentTimeInt64:function(z,Y){return M.poke(Y,24405875e-1*864e5+new Date().getTime(),"i64"),0},xDelete:function(z,Y,re){De("xDelete");const de=ge("xDelete",M.cstrToJs(Y),re,!1);return ze(),de},xFullPathname:function(z,Y,re,de){return M.cstrncpy(de,Y,re)<re?0:O.SQLITE_CANTOPEN},xGetLastError:function(z,Y,re){return N("OPFS xGetLastError() has nothing sensible to return."),0},xOpen:function(Y,re,de,ce,be){De("xOpen");let Z=0;re===0?re=Ce():M.isPtr(re)&&(O.sqlite3_uri_boolean(re,"opfs-unlock-asap",0)&&(Z|=A.opfsFlags.OPFS_UNLOCK_ASAP),O.sqlite3_uri_boolean(re,"delete-before-open",0)&&(Z|=A.opfsFlags.OPFS_UNLINK_BEFORE_OPEN),re=M.cstrToJs(re));const w=Object.create(null);w.fid=de,w.filename=re,w.sab=new SharedArrayBuffer(A.fileBufferSize),w.flags=ce,w.readOnly=!(t.SQLITE_OPEN_CREATE&ce)&&!!(ce&O.SQLITE_OPEN_READONLY);const b=ge("xOpen",de,re,ce,Z);return b||(w.readOnly&&M.poke(be,O.SQLITE_OPEN_READONLY,"i32"),Se[de]=w,w.sabView=A.sabFileBufView,w.sq3File=new C(de),w.sq3File.$pMethods=E.pointer,w.lockType=O.SQLITE_LOCK_NONE),ze(),b}};k&&(F.$xRandomness=k.$xRandomness,F.$xSleep=k.$xSleep),F.$xRandomness||(Xe.xRandomness=function(z,Y,re){const de=M.heap8u();let ce=0;for(;ce<Y;++ce)de[re+ce]=Math.random()*255e3&255;return ce}),F.$xSleep||(Xe.xSleep=function(z,Y){return Atomics.wait(A.sabOPView,A.opIds.xSleep,0,Y),0}),oe.getResolvedPath=function(z,Y){const re=new URL(z,"file://irrelevant").pathname;return Y?re.split("/").filter(de=>!!de):re},oe.getDirForFilename=async function(Y,re=!1){const de=oe.getResolvedPath(Y,!0),ce=de.pop();let be=oe.rootDirectory;for(const Z of de)Z&&(be=await be.getDirectoryHandle(Z,{create:!!re}));return[be,ce]},oe.mkdir=async function(z){try{return await oe.getDirForFilename(z+"/filepart",!0),!0}catch{return!1}},oe.entryExists=async function(z){try{const[Y,re]=await oe.getDirForFilename(z);return await Y.getFileHandle(re),!0}catch{return!1}},oe.randomFilename=Ce,oe.treeList=async function(){const z=async function re(de,ce){ce.name=de.name,ce.dirs=[],ce.files=[];for await(const be of de.values())if(be.kind==="directory"){const Z=Object.create(null);ce.dirs.push(Z),await re(be,Z)}else ce.files.push(be.name)},Y=Object.create(null);return await z(oe.rootDirectory,Y),Y},oe.rmfr=async function(){const z=oe.rootDirectory,Y={recurse:!0};for await(const re of z.values())z.removeEntry(re.name,Y)},oe.unlink=async function(z,Y=!1,re=!1){try{const[de,ce]=await oe.getDirForFilename(z,!1);return await de.removeEntry(ce,{recursive:Y}),!0}catch(de){if(re)throw new Error("unlink(",arguments[0],") failed: "+de.message,{cause:de});return!1}},oe.traverse=async function(z){const Y={recursive:!0,directory:oe.rootDirectory};typeof z=="function"&&(z={callback:z}),z=Object.assign(Y,z||{}),async function de(ce,be){for await(const Z of ce.values()){if(z.callback(Z,ce,be)===!1)return!1;if(z.recursive&&Z.kind==="directory"&&await de(Z,be+1)===!1)break}}(z.directory,0)};const pt=async function(z,Y){const[re,de]=await oe.getDirForFilename(z,!0);let be=await(await re.getFileHandle(de,{create:!0})).createSyncAccessHandle(),Z=0,w,b=!1;try{for(be.truncate(0);(w=await Y())!==void 0;)w instanceof ArrayBuffer&&(w=new Uint8Array(w)),Z===0&&w.byteLength>=15&&(U.affirmDbHeader(w),b=!0),be.write(w,{at:Z}),Z+=w.byteLength;if((Z<512||Z%512!==0)&&I("Input size",Z,"is not correct for an SQLite database."),!b){const P=new Uint8Array(20);be.read(P,{at:0}),U.affirmDbHeader(P)}return be.write(new Uint8Array([1,1]),{at:18}),Z}catch(P){throw await be.close(),be=void 0,await re.removeEntry(de).catch(()=>{}),P}finally{be&&await be.close()}};if(oe.importDb=async function(z,Y){if(Y instanceof Function)return pt(z,Y);Y instanceof ArrayBuffer&&(Y=new Uint8Array(Y)),U.affirmIsDb(Y);const re=Y.byteLength,[de,ce]=await oe.getDirForFilename(z,!0);let be,Z=0;try{return be=await(await de.getFileHandle(ce,{create:!0})).createSyncAccessHandle(),be.truncate(0),Z=be.write(Y,{at:0}),Z!=re&&I("Expected to write "+re+" bytes but wrote "+Z+"."),be.write(new Uint8Array([1,1]),{at:18}),Z}catch(w){throw be&&(await be.close(),be=void 0),await de.removeEntry(ce).catch(()=>{}),w}finally{be&&await be.close()}},t.oo1){const z=function(...Y){const re=t.oo1.DB.dbCtorHelper.normalizeArgs(...Y);re.vfs=F.$zName,t.oo1.DB.dbCtorHelper.call(this,re)};z.prototype=Object.create(t.oo1.DB.prototype),t.oo1.OpfsDb=z,z.importDb=oe.importDb,t.oo1.DB.dbCtorHelper.setVfsPostOpenCallback(F.pointer,function(Y,re){re.capi.sqlite3_busy_timeout(Y,1e4)})}const it=function(){const z=M.scopedAllocPush(),Y=new C;try{const re=Y.pointer,de=O.SQLITE_OPEN_CREATE|O.SQLITE_OPEN_READWRITE|O.SQLITE_OPEN_MAIN_DB,ce=M.scopedAlloc(8),be="/sanity/check/file"+Ce(8),Z=M.scopedAllocCString(be);let w;if(A.s11n.serialize("This is ä string."),w=A.s11n.deserialize(),$("deserialize() says:",w),w[0]!=="This is ä string."&&I("String d13n error."),Xe.xAccess(F.pointer,Z,0,ce),w=M.peek(ce,"i32"),$("xAccess(",be,") exists ?=",w),w=Xe.xOpen(F.pointer,Z,re,de,ce),$("open rc =",w,"state.sabOPView[xOpen] =",A.sabOPView[A.opIds.xOpen]),w!==0){J("open failed with code",w);return}Xe.xAccess(F.pointer,Z,0,ce),w=M.peek(ce,"i32"),w||I("xAccess() failed to detect file."),w=Je.xSync(Y.pointer,0),w&&I("sync failed w/ rc",w),w=Je.xTruncate(Y.pointer,1024),w&&I("truncate failed w/ rc",w),M.poke(ce,0,"i64"),w=Je.xFileSize(Y.pointer,ce),w&&I("xFileSize failed w/ rc",w),$("xFileSize says:",M.peek(ce,"i64")),w=Je.xWrite(Y.pointer,Z,10,1),w&&I("xWrite() failed!");const b=M.scopedAlloc(16);w=Je.xRead(Y.pointer,b,6,2),M.poke(b+6,0);let P=M.cstrToJs(b);$("xRead() got:",P),P!=="sanity"&&I("Unexpected xRead() value."),Xe.xSleep&&($("xSleep()ing before close()ing..."),Xe.xSleep(F.pointer,2e3),$("waking up from xSleep()")),w=Je.xClose(re),$("xClose rc =",w,"sabOPView =",A.sabOPView),$("Deleting file:",be),Xe.xDelete(F.pointer,Z,4660),Xe.xAccess(F.pointer,Z,0,ce),w=M.peek(ce,"i32"),w&&I("Expecting 0 from xAccess(",be,") after xDelete()."),N("End of OPFS sanity checks.")}finally{Y.dispose(),M.scopedAllocPop(z)}};u.onmessage=function({data:z}){switch(z.type){case"opfs-unavailable":m(new Error(z.payload.join(" ")));break;case"opfs-async-loaded":u.postMessage({type:"opfs-async-init",args:A});break;case"opfs-async-inited":{if(te===!0)break;try{t.vfs.installVfs({io:{struct:E,methods:Je},vfs:{struct:F,methods:Xe}}),A.sabOPView=new Int32Array(A.sabOP),A.sabFileBufView=new Uint8Array(A.sabIO,0,A.fileBufferSize),A.sabS11nView=new Uint8Array(A.sabIO,A.sabS11nOffset,A.sabS11nSize),qe(),a.sanityChecks&&(N("Running sanity checks because of opfs-sanity-check URL arg..."),it()),d()?navigator.storage.getDirectory().then(Y=>{u.onerror=u._originalOnError,delete u._originalOnError,t.opfs=oe,oe.rootDirectory=Y,$("End of OPFS sqlite3_vfs setup.",F),q()}).catch(m):q()}catch(Y){J(Y),m(Y)}break}default:{const Y="Unexpected message from the OPFS async worker: "+JSON.stringify(z);J(Y),m(new Error(Y));break}}}}))};i.defaultProxyUri="sqlite3-opfs-async-proxy.js",globalThis.sqlite3ApiBootstrap.initializersAsync.push(async o=>{try{let a=i.defaultProxyUri;return o.scriptInfo.sqlite3Dir&&(i.defaultProxyUri=o.scriptInfo.sqlite3Dir+a),i().catch(c=>{o.config.warn("Ignoring inability to install OPFS sqlite3_vfs:",c.message)})}catch(a){return o.config.error("installOpfsVfs() exception:",a),Promise.reject(a)}})}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){var Se,Ie,De,ze,Je,Xe,pt,it,z,Y,re,de,zr,be;const i=t.util.toss,o=t.util.toss3,a=Object.create(null),c=t.capi,y=t.util,S=t.wasm,Q=4096,V=512,ne=4,ae=8,$=V+ne,N=V,J=$,I=Q,O=c.SQLITE_OPEN_MAIN_DB|c.SQLITE_OPEN_MAIN_JOURNAL|c.SQLITE_OPEN_SUPER_JOURNAL|c.SQLITE_OPEN_WAL,U=".opaque",M=()=>Math.random().toString(36).slice(2),G=new TextDecoder,C=new TextEncoder,X=Object.assign(Object.create(null),{name:"opfs-sahpool",directory:void 0,initialCapacity:6,clearOnInit:!1,verbosity:2,forceReinitIfPreviouslyFailed:!1}),oe=[t.config.error,t.config.warn,t.config.log];t.config.log;const d=t.config.warn;t.config.error;const E=new Map,F=Z=>E.get(Z),te=(Z,w)=>{w?E.set(Z,w):E.delete(Z)},m=new Map,q=Z=>m.get(Z),u=(Z,w)=>{w?m.set(Z,w):m.delete(Z)},p={xCheckReservedLock:function(Z,w){const b=q(Z);return b.log("xCheckReservedLock"),b.storeErr(),S.poke32(w,1),0},xClose:function(Z){const w=q(Z);w.storeErr();const b=w.getOFileForS3File(Z);if(b)try{w.log(`xClose ${b.path}`),w.mapS3FileToOFile(Z,!1),b.sah.flush(),b.flags&c.SQLITE_OPEN_DELETEONCLOSE&&w.deletePath(b.path)}catch(P){return w.storeErr(P,c.SQLITE_IOERR)}return 0},xDeviceCharacteristics:function(Z){return c.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN},xFileControl:function(Z,w,b){return c.SQLITE_NOTFOUND},xFileSize:function(Z,w){const b=q(Z);b.log("xFileSize");const B=b.getOFileForS3File(Z).sah.getSize()-I;return S.poke64(w,BigInt(B)),0},xLock:function(Z,w){const b=q(Z);b.log(`xLock ${w}`),b.storeErr();const P=b.getOFileForS3File(Z);return P.lockType=w,0},xRead:function(Z,w,b,P){const B=q(Z);B.storeErr();const K=B.getOFileForS3File(Z);B.log(`xRead ${K.path} ${b} @ ${P}`);try{const _e=K.sah.read(S.heap8u().subarray(w,w+b),{at:I+Number(P)});return _e<b?(S.heap8u().fill(0,w+_e,w+b),c.SQLITE_IOERR_SHORT_READ):0}catch(_e){return B.storeErr(_e,c.SQLITE_IOERR)}},xSectorSize:function(Z){return Q},xSync:function(Z,w){const b=q(Z);b.log(`xSync ${w}`),b.storeErr();const P=b.getOFileForS3File(Z);try{return P.sah.flush(),0}catch(B){return b.storeErr(B,c.SQLITE_IOERR)}},xTruncate:function(Z,w){const b=q(Z);b.log(`xTruncate ${w}`),b.storeErr();const P=b.getOFileForS3File(Z);try{return P.sah.truncate(I+Number(w)),0}catch(B){return b.storeErr(B,c.SQLITE_IOERR)}},xUnlock:function(Z,w){const b=q(Z);b.log("xUnlock");const P=b.getOFileForS3File(Z);return P.lockType=w,0},xWrite:function(Z,w,b,P){const B=q(Z);B.storeErr();const K=B.getOFileForS3File(Z);B.log(`xWrite ${K.path} ${b} ${P}`);try{const _e=K.sah.write(S.heap8u().subarray(w,w+b),{at:I+Number(P)});return b===_e?0:i("Unknown write() failure.")}catch(_e){return B.storeErr(_e,c.SQLITE_IOERR)}}},k=new c.sqlite3_io_methods;k.$iVersion=1,t.vfs.installVfs({io:{struct:k,methods:p}});const A={xAccess:function(Z,w,b,P){const B=F(Z);B.storeErr();try{const K=B.getPath(w);S.poke32(P,B.hasFilename(K)?1:0)}catch{S.poke32(P,0)}return 0},xCurrentTime:function(Z,w){return S.poke(w,24405875e-1+new Date().getTime()/864e5,"double"),0},xCurrentTimeInt64:function(Z,w){return S.poke(w,24405875e-1*864e5+new Date().getTime(),"i64"),0},xDelete:function(Z,w,b){const P=F(Z);P.log(`xDelete ${S.cstrToJs(w)}`),P.storeErr();try{return P.deletePath(P.getPath(w)),0}catch(B){return P.storeErr(B),c.SQLITE_IOERR_DELETE}},xFullPathname:function(Z,w,b,P){return S.cstrncpy(P,w,b)<b?0:c.SQLITE_CANTOPEN},xGetLastError:function(Z,w,b){const P=F(Z),B=P.popErr();if(P.log(`xGetLastError ${w} e =`,B),B){const K=S.scopedAllocPush();try{const[_e,xe]=S.scopedAllocCString(B.message,!0);S.cstrncpy(b,_e,w),xe>w&&S.poke8(b+w-1,0)}catch{return c.SQLITE_NOMEM}finally{S.scopedAllocPop(K)}}return B?B.sqlite3Rc||c.SQLITE_IOERR:0},xOpen:function(w,b,P,B,K){const _e=F(w);try{_e.log(`xOpen ${S.cstrToJs(b)} ${B}`);const xe=b&&S.peek8(b)?_e.getPath(b):M();let Be=_e.getSAHForPath(xe);!Be&&B&c.SQLITE_OPEN_CREATE&&(_e.getFileCount()<_e.getCapacity()?(Be=_e.nextAvailableSAH(),_e.setAssociatedPath(Be,xe,B)):i("SAH pool is full. Cannot create file",xe)),Be||i("file not found:",xe);const Ge={path:xe,flags:B,sah:Be};_e.mapS3FileToOFile(P,Ge),Ge.lockType=c.SQLITE_LOCK_NONE;const qt=new c.sqlite3_file(P);return qt.$pMethods=k.pointer,qt.dispose(),S.poke32(K,B),0}catch(xe){return _e.storeErr(xe),c.SQLITE_CANTOPEN}}},ee=function(Z){t.capi.sqlite3_vfs_find(Z)&&o("VFS name is already registered:",Z);const w=new c.sqlite3_vfs,b=c.sqlite3_vfs_find(null),P=b?new c.sqlite3_vfs(b):null;return w.$iVersion=2,w.$szOsFile=c.sqlite3_file.structInfo.sizeof,w.$mxPathname=V,w.addOnDispose(w.$zName=S.allocCString(Z),()=>te(w.pointer,0)),P&&(w.$xRandomness=P.$xRandomness,w.$xSleep=P.$xSleep,P.dispose()),!w.$xRandomness&&!A.xRandomness&&(A.xRandomness=function(B,K,_e){const xe=S.heap8u();let Be=0;for(;Be<K;++Be)xe[_e+Be]=Math.random()*255e3&255;return Be}),!w.$xSleep&&!A.xSleep&&(A.xSleep=(B,K)=>0),t.vfs.installVfs({vfs:{struct:w,methods:A}}),w};class ge{constructor(w=Object.create(null)){wt(this,de);jr(this,"vfsDir");wt(this,Se);wt(this,Ie);wt(this,De);wt(this,ze,new Map);wt(this,Je,new Map);wt(this,Xe,new Set);wt(this,pt,new Map);wt(this,it,new Uint8Array($));wt(this,z);wt(this,Y);wt(this,re);At(this,re,w.verbosity??X.verbosity),this.vfsName=w.name||X.name,At(this,Y,ee(this.vfsName)),te(ye(this,Y).pointer,this),this.vfsDir=w.directory||"."+this.vfsName,At(this,z,new DataView(ye(this,it).buffer,ye(this,it).byteOffset)),this.isReady=this.reset(!!(w.clearOnInit??X.clearOnInit)).then(()=>{if(this.$error)throw this.$error;return this.getCapacity()?Promise.resolve(void 0):this.addCapacity(w.initialCapacity||X.initialCapacity)})}log(...w){Mr(this,de,zr).call(this,2,...w)}warn(...w){Mr(this,de,zr).call(this,1,...w)}error(...w){Mr(this,de,zr).call(this,0,...w)}getVfs(){return ye(this,Y)}getCapacity(){return ye(this,ze).size}getFileCount(){return ye(this,Je).size}getFileNames(){const w=[],b=ye(this,Je).keys();for(const P of b)w.push(P);return w}async addCapacity(w){for(let b=0;b<w;++b){const P=M(),K=await(await ye(this,Ie).getFileHandle(P,{create:!0})).createSyncAccessHandle();ye(this,ze).set(K,P),this.setAssociatedPath(K,"",0)}return this.getCapacity()}async reduceCapacity(w){let b=0;for(const P of Array.from(ye(this,Xe))){if(b===w||this.getFileCount()===this.getCapacity())break;const B=ye(this,ze).get(P);P.close(),await ye(this,Ie).removeEntry(B),ye(this,ze).delete(P),ye(this,Xe).delete(P),++b}return b}releaseAccessHandles(){for(const w of ye(this,ze).keys())w.close();ye(this,ze).clear(),ye(this,Je).clear(),ye(this,Xe).clear()}async acquireAccessHandles(w){const b=[];for await(const[P,B]of ye(this,Ie))B.kind==="file"&&b.push([P,B]);return Promise.all(b.map(async([P,B])=>{try{const K=await B.createSyncAccessHandle();if(ye(this,ze).set(K,P),w)K.truncate(I),this.setAssociatedPath(K,"",0);else{const _e=this.getAssociatedPath(K);_e?ye(this,Je).set(_e,K):ye(this,Xe).add(K)}}catch(K){throw this.storeErr(K),this.releaseAccessHandles(),K}}))}getAssociatedPath(w){w.read(ye(this,it),{at:0});const b=ye(this,z).getUint32(N);if(ye(this,it)[0]&&(b&c.SQLITE_OPEN_DELETEONCLOSE||(b&O)===0))return d(`Removing file with unexpected flags ${b.toString(16)}`,ye(this,it)),this.setAssociatedPath(w,"",0),"";const P=new Uint32Array(ae/4);w.read(P,{at:J});const B=this.computeDigest(ye(this,it));if(P.every((K,_e)=>K===B[_e])){const K=ye(this,it).findIndex(_e=>_e===0);return K===0&&w.truncate(I),K?G.decode(ye(this,it).subarray(0,K)):""}else return d("Disassociating file with bad digest."),this.setAssociatedPath(w,"",0),""}setAssociatedPath(w,b,P){const B=C.encodeInto(b,ye(this,it));V<=B.written+1&&i("Path too long:",b),ye(this,it).fill(0,B.written,V),ye(this,z).setUint32(N,P);const K=this.computeDigest(ye(this,it));w.write(ye(this,it),{at:0}),w.write(K,{at:J}),w.flush(),b?(ye(this,Je).set(b,w),ye(this,Xe).delete(w)):(w.truncate(I),ye(this,Xe).add(w))}computeDigest(w){let b=3735928559,P=1103547991;for(const B of w)b=31*b+B*307,P=31*P+B*307;return new Uint32Array([b>>>0,P>>>0])}async reset(w){await this.isReady;let b=await navigator.storage.getDirectory(),P;for(const B of this.vfsDir.split("/"))B&&(P=b,b=await b.getDirectoryHandle(B,{create:!0}));return At(this,Se,b),At(this,De,P),At(this,Ie,await ye(this,Se).getDirectoryHandle(U,{create:!0})),this.releaseAccessHandles(),this.acquireAccessHandles(w)}getPath(w){return S.isPtr(w)&&(w=S.cstrToJs(w)),(w instanceof URL?w:new URL(w,"file://localhost/")).pathname}deletePath(w){const b=ye(this,Je).get(w);return b&&(ye(this,Je).delete(w),this.setAssociatedPath(b,"",0)),!!b}storeErr(w,b){return w&&(w.sqlite3Rc=b||c.SQLITE_IOERR,this.error(w)),this.$error=w,b}popErr(){const w=this.$error;return this.$error=void 0,w}nextAvailableSAH(){const[w]=ye(this,Xe).keys();return w}getOFileForS3File(w){return ye(this,pt).get(w)}mapS3FileToOFile(w,b){b?(ye(this,pt).set(w,b),u(w,this)):(ye(this,pt).delete(w),u(w,!1))}hasFilename(w){return ye(this,Je).has(w)}getSAHForPath(w){return ye(this,Je).get(w)}async removeVfs(){if(!ye(this,Y).pointer||!ye(this,Ie))return!1;c.sqlite3_vfs_unregister(ye(this,Y).pointer),ye(this,Y).dispose(),delete a[this.vfsName];try{this.releaseAccessHandles(),await ye(this,Se).removeEntry(U,{recursive:!0}),At(this,Ie,void 0),await ye(this,De).removeEntry(ye(this,Se).name,{recursive:!0}),At(this,Se,At(this,De,void 0))}catch(w){t.config.error(this.vfsName,"removeVfs() failed:",w)}return!0}exportFile(w){const b=ye(this,Je).get(w)||i("File not found:",w),P=b.getSize()-I,B=new Uint8Array(P>0?P:0);if(P>0){const K=b.read(B,{at:I});K!=P&&i("Expected to read "+P+" bytes but read "+K+".")}return B}async importDbChunked(w,b){const P=ye(this,Je).get(w)||this.nextAvailableSAH()||i("No available handles to import to.");P.truncate(0);let B=0,K,_e=!1;try{for(;(K=await b())!==void 0;)K instanceof ArrayBuffer&&(K=new Uint8Array(K)),B===0&&K.byteLength>=15&&(y.affirmDbHeader(K),_e=!0),P.write(K,{at:I+B}),B+=K.byteLength;if((B<512||B%512!==0)&&i("Input size",B,"is not correct for an SQLite database."),!_e){const xe=new Uint8Array(20);P.read(xe,{at:0}),y.affirmDbHeader(xe)}P.write(new Uint8Array([1,1]),{at:I+18})}catch(xe){throw this.setAssociatedPath(P,"",0),xe}return this.setAssociatedPath(P,w,c.SQLITE_OPEN_MAIN_DB),B}importDb(w,b){if(b instanceof ArrayBuffer)b=new Uint8Array(b);else if(b instanceof Function)return this.importDbChunked(w,b);const P=ye(this,Je).get(w)||this.nextAvailableSAH()||i("No available handles to import to."),B=b.byteLength;(B<512||B%512!=0)&&i("Byte array size is invalid for an SQLite db.");const K="SQLite format 3";for(let xe=0;xe<K.length;++xe)K.charCodeAt(xe)!==b[xe]&&i("Input does not contain an SQLite database header.");const _e=P.write(b,{at:I});return _e!=B?(this.setAssociatedPath(P,"",0),i("Expected to write "+B+" bytes but wrote "+_e+".")):(P.write(new Uint8Array([1,1]),{at:I+18}),this.setAssociatedPath(P,w,c.SQLITE_OPEN_MAIN_DB)),_e}}Se=new WeakMap,Ie=new WeakMap,De=new WeakMap,ze=new WeakMap,Je=new WeakMap,Xe=new WeakMap,pt=new WeakMap,it=new WeakMap,z=new WeakMap,Y=new WeakMap,re=new WeakMap,de=new WeakSet,zr=function(w,...b){ye(this,re)>w&&oe[w](this.vfsName+":",...b)};class qe{constructor(w){wt(this,be);At(this,be,w),this.vfsName=w.vfsName}async addCapacity(w){return ye(this,be).addCapacity(w)}async reduceCapacity(w){return ye(this,be).reduceCapacity(w)}getCapacity(){return ye(this,be).getCapacity(ye(this,be))}getFileCount(){return ye(this,be).getFileCount()}getFileNames(){return ye(this,be).getFileNames()}async reserveMinimumCapacity(w){const b=ye(this,be).getCapacity();return b<w?ye(this,be).addCapacity(w-b):b}exportFile(w){return ye(this,be).exportFile(w)}importDb(w,b){return ye(this,be).importDb(w,b)}async wipeFiles(){return ye(this,be).reset(!0)}unlink(w){return ye(this,be).deletePath(w)}async removeVfs(){return ye(this,be).removeVfs()}}be=new WeakMap;const Ce=async()=>{const Z=await navigator.storage.getDirectory(),w=".opfs-sahpool-sync-check-"+M(),B=(await(await Z.getFileHandle(w,{create:!0})).createSyncAccessHandle()).close();return await B,await Z.removeEntry(w),B!=null&&B.then&&i("The local OPFS API is too old for opfs-sahpool:","it has an async FileSystemSyncAccessHandle.close() method."),!0};t.installOpfsSAHPoolVfs=async function(Z=Object.create(null)){var b;Z=Object.assign(Object.create(null),X,Z||{});const w=Z.name;if(Z.$testThrowPhase1)throw Z.$testThrowPhase1;if(a[w])try{return await a[w]}catch(P){if(Z.forceReinitIfPreviouslyFailed)delete a[w];else throw P}return!globalThis.FileSystemHandle||!globalThis.FileSystemDirectoryHandle||!globalThis.FileSystemFileHandle||!globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle||!((b=navigator==null?void 0:navigator.storage)!=null&&b.getDirectory)?a[w]=Promise.reject(new Error("Missing required OPFS APIs.")):a[w]=Ce().then(async function(){if(Z.$testThrowPhase2)throw Z.$testThrowPhase2;const P=new ge(Z);return P.isReady.then(async()=>{const B=new qe(P);if(t.oo1){const K=t.oo1,_e=P.getVfs(),xe=function(...Be){const Ge=K.DB.dbCtorHelper.normalizeArgs(...Be);Ge.vfs=_e.$zName,K.DB.dbCtorHelper.call(this,Ge)};xe.prototype=Object.create(K.DB.prototype),B.OpfsSAHPoolDb=xe}return P.log("VFS initialized."),B}).catch(async B=>{throw await P.removeVfs().catch(()=>{}),B})}).catch(P=>a[w]=Promise.reject(P))}}),typeof r<"u"){const t=Object.assign(Object.create(null),{exports:typeof x>"u"?r.asm:x,memory:r.wasmMemory},globalThis.sqlite3ApiConfig||{});globalThis.sqlite3ApiConfig=t;let i;try{i=globalThis.sqlite3ApiBootstrap()}catch(o){throw console.error("sqlite3ApiBootstrap() error:",o),o}finally{delete globalThis.sqlite3ApiBootstrap,delete globalThis.sqlite3ApiConfig}r.sqlite3=i}else console.warn("This is not running in an Emscripten module context, so","globalThis.sqlite3ApiBootstrap() is _not_ being called due to lack","of config info for the WASM environment.","It must be called manually.")},l=g,l}})();dn=function(){var l,r;const n=dn;if(!n)throw new Error("Expecting globalThis.sqlite3InitModule to be defined by the Emscripten build.");const s=globalThis.sqlite3InitModuleState=Object.assign(Object.create(null),{moduleScript:(l=globalThis==null?void 0:globalThis.document)==null?void 0:l.currentScript,isWorker:typeof WorkerGlobalScope<"u",location:globalThis.location,urlParams:(r=globalThis==null?void 0:globalThis.location)!=null&&r.href?new URL(globalThis.location.href).searchParams:new URLSearchParams});if(s.debugModule=s.urlParams.has("sqlite3.debugModule")?(..._)=>console.warn("sqlite3.debugModule:",..._):()=>{},s.urlParams.has("sqlite3.dir"))s.sqlite3Dir=s.urlParams.get("sqlite3.dir")+"/";else if(s.moduleScript){const _=s.moduleScript.src.split("/");_.pop(),s.sqlite3Dir=_.join("/")+"/"}if(globalThis.sqlite3InitModule=function _(...h){return n(...h).then(g=>{g.runSQLite3PostLoadInit(g);const T=g.sqlite3;T.scriptInfo=s,_.__isUnderTest&&(T.__isUnderTest=!0);const W=T.asyncPostInit;return delete T.asyncPostInit,W()}).catch(g=>{throw console.error("Exception loading sqlite3 module:",g),g})},globalThis.sqlite3InitModule.ready=n.ready,globalThis.sqlite3InitModuleState.moduleScript){const _=globalThis.sqlite3InitModuleState;let h=_.moduleScript.src.split("/");h.pop(),_.scriptDir=h.join("/")+"/"}return s.debugModule("sqlite3InitModuleState =",s),globalThis.sqlite3InitModule}();var za=dn;globalThis.sqlite3Worker1Promiser=function n(s=n.defaultConfig){if(arguments.length===1&&typeof arguments[0]=="function"){const L=s;s=Object.assign(Object.create(null),n.defaultConfig),s.onready=L}else s=Object.assign(Object.create(null),n.defaultConfig,s);const l=Object.create(null),r=function(){},_=s.onerror||r,h=s.debug||r,g=s.generateMessageId?void 0:Object.create(null),T=s.generateMessageId||function(L){return L.type+"#"+(g[L.type]=(g[L.type]||0)+1)},W=(...L)=>{throw new Error(L.join(" "))};s.worker||(s.worker=n.defaultConfig.worker),typeof s.worker=="function"&&(s.worker=s.worker());let ie,fe;return s.worker.onmessage=function(L){L=L.data,h("worker1.onmessage",L);let se=l[L.messageId];if(!se){if(L&&L.type==="sqlite3-api"&&L.result==="worker1-ready"){s.onready&&s.onready(fe);return}if(se=l[L.type],se&&se.onrow){se.onrow(L);return}s.onunhandled?s.onunhandled(arguments[0]):_("sqlite3Worker1Promiser() unhandled worker message:",L);return}switch(delete l[L.messageId],L.type){case"error":se.reject(L);return;case"open":ie||(ie=L.dbId);break;case"close":L.dbId===ie&&(ie=void 0);break}try{se.resolve(L)}catch(we){se.reject(we)}},fe=function(){let L;arguments.length===1?L=arguments[0]:arguments.length===2?(L=Object.create(null),L.type=arguments[0],L.args=arguments[1],L.dbId=L.args.dbId):W("Invalid arguments for sqlite3Worker1Promiser()-created factory."),!L.dbId&&L.type!=="open"&&(L.dbId=ie),L.messageId=T(L),L.departureTime=performance.now();const se=Object.create(null);se.message=L;let we;L.type==="exec"&&L.args&&(typeof L.args.callback=="function"?(we=L.messageId+":row",se.onrow=L.args.callback,L.args.callback=we,l[we]=se):typeof L.args.callback=="string"&&W("exec callback may not be a string when using the Promise interface."));let ke=new Promise(function(Fe,Le){se.resolve=Fe,se.reject=Le,l[L.messageId]=se,h("Posting",L.type,"message to Worker dbId="+(ie||"default")+":",L),s.worker.postMessage(L)});return we&&(ke=ke.finally(()=>delete l[we])),ke}},globalThis.sqlite3Worker1Promiser.defaultConfig={worker:function(){return new Worker(new URL("/teimtrackr/assets/sqlite3-worker1-bundler-friendly-CSke2g1q.js",self.location.href),{type:"module"})},onerror:(...n)=>console.error("worker1 promiser error",...n)},sqlite3Worker1Promiser.v2=(function(n){let s;typeof n=="function"?(s=n,n={}):typeof(n==null?void 0:n.onready)=="function"&&(s=n.onready,delete n.onready);const l=Object.create(null);n=Object.assign(n||Object.create(null),{onready:async function(_){try{s&&await s(_),l.resolve(_)}catch(h){l.reject(h)}}});const r=new Promise(function(_,h){l.resolve=_,l.reject=h});try{this.original(n)}catch(_){l.reject(_)}return r}).bind({original:sqlite3Worker1Promiser}),sqlite3Worker1Promiser.v2,globalThis.sqlite3ApiConfig={warn:kr};const Ha=za(),$a={createSqlite:n=>{const{nanoid:s}=Ns(),l=Wa(n),r=new Map,_=L=>{const se=r.get(L.id);se&&(r.delete(L.id),se(L))};let h=[];l.onMessage=L=>{switch(L.type){case"Exec":{h=[...h,L];break}case"ExecError":case"ExecSuccess":{h=h.filter(se=>se.id!==L.id),_(L);break}default:$n(L)}};const{promise:g,resolve:T}=Promise.withResolvers(),W=cn(n)("SqliteConnection");navigator.locks.request(W,()=>new Promise(()=>{T(!0)})),g.then(async()=>{const L=await Ha,se=await L.installOpfsSAHPoolVfs({name:n.name}),we=new se.OpfsSAHPoolDb("/evolu1.db"),ke=new Map,Fe=(Le,et)=>{oa(Le)(()=>{var ct;if(Le.sql===Ks.sql){const Pe=L.capi.sqlite3_js_db_export(we);return Promise.resolve([{file:Pe}])}if((ct=Le.options)!=null&&ct.prepare){let Pe=ke.get(Le.sql);if(Pe||(Pe=we.prepare(Le.sql),ke.set(Le.sql,Pe)),Pe.bind(Le.parameters??[]),sa(Le.sql))return Pe.stepReset(),Promise.resolve([]);const Me=[];for(;Pe.step();)Me.push(Pe.get({}));return Pe.reset(),Promise.resolve(Me)}return Promise.resolve(we.exec(Le.sql,{returnValue:"resultRows",rowMode:"object",bind:Le.parameters??[]}))}).then(ct=>{l.postMessage({type:"ExecSuccess",id:et,result:{rows:ct,changes:we.changes()}})},ct=>{l.postMessage({type:"ExecError",id:et,error:kn(ct)})})};l.onMessage=Le=>{switch(Le.type){case"Exec":Fe(Le.query,Le.id);break;case"ExecSuccess":case"ExecError":_(Le);break;default:$n(Le)}},h.forEach(Le=>{Fe(Le.query,Le.id)}),h=[]});const ie=cn(n)("SqliteTransaction");return{exec:L=>{const se=s();return new Promise((we,ke)=>{r.set(se,Fe=>{switch(Fe.type){case"ExecSuccess":we(Fe.result);break;case"ExecError":ke(Fe.error);break}}),l.postMessage({type:"Exec",id:se,query:L})})},transaction:L=>async se=>{await navigator.locks.request(ie,{mode:L==="last"?"exclusive":L},async()=>{await se(),L==="last"&&await new Promise(kr)})},export:()=>{const L=s();return new Promise((se,we)=>{r.set(L,ke=>{switch(ke.type){case"ExecSuccess":se(ke.result.rows[0].file);break;case"ExecError":we(ke.error);break}}),l.postMessage({type:"Exec",id:L,query:Ks})})}}}},Wa=n=>{const s=cn(n)("SqliteBroadcastChannel"),l=new BroadcastChannel(s),r={postMessage:_=>{l.postMessage(_),r.onMessage(_)},onMessage:kr};return l.onmessage=_=>{r.onMessage(_.data)},r},Ks={sql:"export database",parameters:[]},Qa=Fa({...ka(),...Rs(),...Sa,...Ns(),...$a});Ma(Qa)})();
