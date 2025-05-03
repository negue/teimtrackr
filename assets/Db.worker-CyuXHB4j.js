var ru=Object.defineProperty;var Ri=st=>{throw TypeError(st)};var nu=(st,at,ft)=>at in st?ru(st,at,{enumerable:!0,configurable:!0,writable:!0,value:ft}):st[at]=ft;var en=(st,at,ft)=>nu(st,typeof at!="symbol"?at+"":at,ft),Bn=(st,at,ft)=>at.has(st)||Ri("Cannot "+ft);var xe=(st,at,ft)=>(Bn(st,at,"read from private field"),ft?ft.call(st):at.get(st)),vt=(st,at,ft)=>at.has(st)?Ri("Cannot add the same private member more than once"):at instanceof WeakSet?at.add(st):at.set(st,ft),Ft=(st,at,ft,Ie)=>(Bn(st,at,"write to private field"),Ie?Ie.call(st,ft):at.set(st,ft),ft),tn=(st,at,ft)=>(Bn(st,at,"access private method"),ft);(function(){"use strict";const st=n=>n.length>0,at=n=>n.length>0,ft=(n,r)=>{throw new Error(r)},Ie=n=>({ok:!0,value:n}),Te=n=>({ok:!1,error:n}),nr=n=>{if(n.ok)return n.value;throw new Error(`Result error: ${JSON.stringify(n.error)}`)},Un=(n,r)=>{try{return Ie(n())}catch(a){return Te(r(a))}};/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */if(!(new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68))throw new Error("Non little-endian hardware is not supported");const Nt={_0:48,_9:57,A:65,F:70,a:97,f:102};function jn(n){if(n>=Nt._0&&n<=Nt._9)return n-Nt._0;if(n>=Nt.A&&n<=Nt.F)return n-(Nt.A-10);if(n>=Nt.a&&n<=Nt.f)return n-(Nt.a-10)}function Mn(n){if(typeof n!="string")throw new Error("hex string expected, got "+typeof n);const r=n.length,a=r/2;if(r%2)throw new Error("hex string expected, got unpadded hex of length "+r);const s=new Uint8Array(a);for(let u=0,d=0;u<a;u++,d+=2){const m=jn(n.charCodeAt(d)),b=jn(n.charCodeAt(d+1));if(m===void 0||b===void 0){const B=n[d]+n[d+1];throw new Error('hex string expected, got non-hex character "'+B+'" at index '+d)}s[u]=m*16+b}return s}let Bi=class Ni{constructor(r){en(this,"value");en(this,"length");this.value=r?new globalThis.Uint8Array(r):new globalThis.Uint8Array(512),this.length=r?r.length:0}unwrap(){return this.value.subarray(0,this.length)}getCapacity(){return this.value.length}getLength(){return this.length}extend(r){const a=r instanceof Ni?r.unwrap():r,s=a.length+this.length;if(this.value.length<s){const u=this.value,d=Math.max(this.value.length*2,s);this.value=new globalThis.Uint8Array(d),this.value.set(u)}return this.value.set(a,this.length),this.length=this.length+a.length,this}shift(){if(this.length===0)return Te({type:"BufferParseEndedPrematurelyError"});const r=this.value[0];return this.value=this.value.subarray(1),this.length--,Ie(r)}shiftN(r){if(this.length<r)return Te({type:"BufferParseEndedPrematurelyError"});const a=this.value.subarray(0,r);return this.value=this.value.subarray(r),this.length=this.length-r,Ie(a)}};const Hn=n=>{const r=a=>Object.getOwnPropertyNames(a).reduce((u,d)=>{const m=a[d];return d==="cause"&&m instanceof Error?u[d]=r(m):typeof m!="function"&&(u[d]=m),u},{});if(n instanceof Error)return{type:"TransferableError",error:r(n)};try{return{type:"TransferableError",error:structuredClone(n)}}catch{try{return{type:"TransferableError",error:String(n)}}catch{return{type:"TransferableError",error:"[Unserializable Object]"}}}};let Ui="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",ji=n=>crypto.getRandomValues(new Uint8Array(n)),Mi=(n,r,a)=>{let s=(2<<Math.log(n.length-1)/Math.LN2)-1,u=-~(1.6*s*r/n.length);return(d=r)=>{let m="";for(;;){let b=a(u),B=u|0;for(;B--;)if(m+=n[b[B]&s]||"",m.length===d)return m}}},Hi=(n,r=21)=>Mi(n,r,ji),$n=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((r,a)=>(a&=63,a<36?r+=a.toString(36):a<62?r+=(a-26).toString(36).toUpperCase():a>62?r+="-":r+="_",r),"");const zn=n=>Object.prototype.toString.call(n)==="[object Object]",$i=n=>Object.entries(n),zi=(n,r)=>{if(n.byteLength>r.byteLength)return 1;if(n.byteLength<r.byteLength)return-1;for(let a=0;a<n.byteLength;a++){if(n[a]<r[a])return-1;if(n[a]>r[a])return 1}return 0};function sr(n){if(!Number.isSafeInteger(n)||n<0)throw new Error("positive integer expected, got "+n)}function Wi(n){return n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"}function Sr(n,...r){if(!Wi(n))throw new Error("Uint8Array expected");if(r.length>0&&!r.includes(n.length))throw new Error("Uint8Array expected of length "+r+", got length="+n.length)}function Wn(n){if(typeof n!="function"||typeof n.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");sr(n.outputLen),sr(n.blockLen)}function kr(n,r=!0){if(n.destroyed)throw new Error("Hash instance has been destroyed");if(r&&n.finished)throw new Error("Hash#digest() has already been called")}function Qi(n,r){Sr(n);const a=r.outputLen;if(n.length<a)throw new Error("digestInto() expects output buffer of length at least "+a)}const ir=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ar(n){return new DataView(n.buffer,n.byteOffset,n.byteLength)}function Ot(n,r){return n<<32-r|n>>>r}typeof Uint8Array.from([]).toHex=="function"&&Uint8Array.fromHex;function Vi(n){if(typeof n!="string")throw new Error("utf8ToBytes expected string, got "+typeof n);return new Uint8Array(new TextEncoder().encode(n))}function br(n){return typeof n=="string"&&(n=Vi(n)),Sr(n),n}let Qn=class{clone(){return this._cloneInto()}};function Gi(n,r){if(r!==void 0&&{}.toString.call(r)!=="[object Object]")throw new Error("Options should be object or undefined");return Object.assign(n,r)}function Vn(n){const r=s=>n().update(br(s)).digest(),a=n();return r.outputLen=a.outputLen,r.blockLen=a.blockLen,r.create=()=>n(),r}function Ki(n=32){if(ir&&typeof ir.getRandomValues=="function")return ir.getRandomValues(new Uint8Array(n));if(ir&&typeof ir.randomBytes=="function")return Uint8Array.from(ir.randomBytes(n));throw new Error("crypto.getRandomValues must be defined")}let Gn=class extends Qn{constructor(r,a){super(),this.finished=!1,this.destroyed=!1,Wn(r);const s=br(a);if(this.iHash=r.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const u=this.blockLen,d=new Uint8Array(u);d.set(s.length>u?r.create().update(s).digest():s);for(let m=0;m<d.length;m++)d[m]^=54;this.iHash.update(d),this.oHash=r.create();for(let m=0;m<d.length;m++)d[m]^=106;this.oHash.update(d),d.fill(0)}update(r){return kr(this),this.iHash.update(r),this}digestInto(r){kr(this),Sr(r,this.outputLen),this.finished=!0,this.iHash.digestInto(r),this.oHash.update(r),this.oHash.digestInto(r),this.destroy()}digest(){const r=new Uint8Array(this.oHash.outputLen);return this.digestInto(r),r}_cloneInto(r){r||(r=Object.create(Object.getPrototypeOf(this),{}));const{oHash:a,iHash:s,finished:u,destroyed:d,blockLen:m,outputLen:b}=this;return r=r,r.finished=u,r.destroyed=d,r.blockLen=m,r.outputLen=b,r.oHash=a._cloneInto(r.oHash),r.iHash=s._cloneInto(r.iHash),r}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}};const Kn=(n,r,a)=>new Gn(n,r).update(a).digest();Kn.create=(n,r)=>new Gn(n,r);function Ji(n,r,a,s){Wn(n);const u=Gi({dkLen:32,asyncTick:10},s),{c:d,dkLen:m,asyncTick:b}=u;if(sr(d),sr(m),sr(b),d<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const B=br(r),X=br(a),ie=new Uint8Array(m),F=Kn.create(n,B),J=F._cloneInto().update(X);return{c:d,dkLen:m,asyncTick:b,DK:ie,PRF:F,PRFSalt:J}}function Xi(n,r,a,s,u){return n.destroy(),r.destroy(),s&&s.destroy(),u.fill(0),a}function Yi(n,r,a,s){const{c:u,dkLen:d,DK:m,PRF:b,PRFSalt:B}=Ji(n,r,a,s);let X;const ie=new Uint8Array(4),F=Ar(ie),J=new Uint8Array(b.outputLen);for(let de=1,qe=0;qe<d;de++,qe+=b.outputLen){const ve=m.subarray(qe,qe+b.outputLen);F.setInt32(0,de,!1),(X=B._cloneInto(X)).update(ie).digestInto(J),ve.set(J.subarray(0,ve.length));for(let ke=1;ke<u;ke++){b._cloneInto(X).update(J).digestInto(J);for(let Ke=0;Ke<ve.length;Ke++)ve[Ke]^=J[Ke]}}return Xi(b,B,m,X,J)}function Zi(n,r,a,s){if(typeof n.setBigUint64=="function")return n.setBigUint64(r,a,s);const u=BigInt(32),d=BigInt(4294967295),m=Number(a>>u&d),b=Number(a&d),B=s?4:0,X=s?0:4;n.setUint32(r+B,m,s),n.setUint32(r+X,b,s)}function eo(n,r,a){return n&r^~n&a}function to(n,r,a){return n&r^n&a^r&a}let Jn=class extends Qn{constructor(r,a,s,u){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=r,this.outputLen=a,this.padOffset=s,this.isLE=u,this.buffer=new Uint8Array(r),this.view=Ar(this.buffer)}update(r){kr(this);const{view:a,buffer:s,blockLen:u}=this;r=br(r);const d=r.length;for(let m=0;m<d;){const b=Math.min(u-this.pos,d-m);if(b===u){const B=Ar(r);for(;u<=d-m;m+=u)this.process(B,m);continue}s.set(r.subarray(m,m+b),this.pos),this.pos+=b,m+=b,this.pos===u&&(this.process(a,0),this.pos=0)}return this.length+=r.length,this.roundClean(),this}digestInto(r){kr(this),Qi(r,this),this.finished=!0;const{buffer:a,view:s,blockLen:u,isLE:d}=this;let{pos:m}=this;a[m++]=128,this.buffer.subarray(m).fill(0),this.padOffset>u-m&&(this.process(s,0),m=0);for(let F=m;F<u;F++)a[F]=0;Zi(s,u-8,BigInt(this.length*8),d),this.process(s,0);const b=Ar(r),B=this.outputLen;if(B%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const X=B/4,ie=this.get();if(X>ie.length)throw new Error("_sha2: outputLen bigger than state");for(let F=0;F<X;F++)b.setUint32(4*F,ie[F],d)}digest(){const{buffer:r,outputLen:a}=this;this.digestInto(r);const s=r.slice(0,a);return this.destroy(),s}_cloneInto(r){r||(r=new this.constructor),r.set(...this.get());const{blockLen:a,buffer:s,length:u,finished:d,destroyed:m,pos:b}=this;return r.length=u,r.pos=b,r.finished=d,r.destroyed=m,u%a&&r.buffer.set(s),r}};const ro=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),zt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Wt=new Uint32Array(64);let no=class extends Jn{constructor(r=32){super(64,r,8,!1),this.A=zt[0]|0,this.B=zt[1]|0,this.C=zt[2]|0,this.D=zt[3]|0,this.E=zt[4]|0,this.F=zt[5]|0,this.G=zt[6]|0,this.H=zt[7]|0}get(){const{A:r,B:a,C:s,D:u,E:d,F:m,G:b,H:B}=this;return[r,a,s,u,d,m,b,B]}set(r,a,s,u,d,m,b,B){this.A=r|0,this.B=a|0,this.C=s|0,this.D=u|0,this.E=d|0,this.F=m|0,this.G=b|0,this.H=B|0}process(r,a){for(let F=0;F<16;F++,a+=4)Wt[F]=r.getUint32(a,!1);for(let F=16;F<64;F++){const J=Wt[F-15],de=Wt[F-2],qe=Ot(J,7)^Ot(J,18)^J>>>3,ve=Ot(de,17)^Ot(de,19)^de>>>10;Wt[F]=ve+Wt[F-7]+qe+Wt[F-16]|0}let{A:s,B:u,C:d,D:m,E:b,F:B,G:X,H:ie}=this;for(let F=0;F<64;F++){const J=Ot(b,6)^Ot(b,11)^Ot(b,25),de=ie+J+eo(b,B,X)+ro[F]+Wt[F]|0,ve=(Ot(s,2)^Ot(s,13)^Ot(s,22))+to(s,u,d)|0;ie=X,X=B,B=b,b=m+de|0,m=d,d=u,u=s,s=de+ve|0}s=s+this.A|0,u=u+this.B|0,d=d+this.C|0,m=m+this.D|0,b=b+this.E|0,B=B+this.F|0,X=X+this.G|0,ie=ie+this.H|0,this.set(s,u,d,m,b,B,X,ie)}roundClean(){Wt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}};const so=Vn(()=>new no),Ir=BigInt(2**32-1),nn=BigInt(32);function Xn(n,r=!1){return r?{h:Number(n&Ir),l:Number(n>>nn&Ir)}:{h:Number(n>>nn&Ir)|0,l:Number(n&Ir)|0}}function io(n,r=!1){let a=new Uint32Array(n.length),s=new Uint32Array(n.length);for(let u=0;u<n.length;u++){const{h:d,l:m}=Xn(n[u],r);[a[u],s[u]]=[d,m]}return[a,s]}const oo=(n,r)=>BigInt(n>>>0)<<nn|BigInt(r>>>0),ao=(n,r,a)=>n>>>a,lo=(n,r,a)=>n<<32-a|r>>>a,co=(n,r,a)=>n>>>a|r<<32-a,uo=(n,r,a)=>n<<32-a|r>>>a,fo=(n,r,a)=>n<<64-a|r>>>a-32,_o=(n,r,a)=>n>>>a-32|r<<64-a,ho=(n,r)=>r,po=(n,r)=>n,mo=(n,r,a)=>n<<a|r>>>32-a,go=(n,r,a)=>r<<a|n>>>32-a,bo=(n,r,a)=>r<<a-32|n>>>64-a,yo=(n,r,a)=>n<<a-32|r>>>64-a;function wo(n,r,a,s){const u=(r>>>0)+(s>>>0);return{h:n+a+(u/2**32|0)|0,l:u|0}}const Me={fromBig:Xn,split:io,toBig:oo,shrSH:ao,shrSL:lo,rotrSH:co,rotrSL:uo,rotrBH:fo,rotrBL:_o,rotr32H:ho,rotr32L:po,rotlSH:mo,rotlSL:go,rotlBH:bo,rotlBL:yo,add:wo,add3L:(n,r,a)=>(n>>>0)+(r>>>0)+(a>>>0),add3H:(n,r,a,s)=>r+a+s+(n/2**32|0)|0,add4L:(n,r,a,s)=>(n>>>0)+(r>>>0)+(a>>>0)+(s>>>0),add4H:(n,r,a,s,u)=>r+a+s+u+(n/2**32|0)|0,add5H:(n,r,a,s,u,d)=>r+a+s+u+d+(n/2**32|0)|0,add5L:(n,r,a,s,u)=>(n>>>0)+(r>>>0)+(a>>>0)+(s>>>0)+(u>>>0)},[xo,qo]=Me.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(n=>BigInt(n))),Qt=new Uint32Array(80),Vt=new Uint32Array(80);let vo=class extends Jn{constructor(r=64){super(128,r,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:r,Al:a,Bh:s,Bl:u,Ch:d,Cl:m,Dh:b,Dl:B,Eh:X,El:ie,Fh:F,Fl:J,Gh:de,Gl:qe,Hh:ve,Hl:ke}=this;return[r,a,s,u,d,m,b,B,X,ie,F,J,de,qe,ve,ke]}set(r,a,s,u,d,m,b,B,X,ie,F,J,de,qe,ve,ke){this.Ah=r|0,this.Al=a|0,this.Bh=s|0,this.Bl=u|0,this.Ch=d|0,this.Cl=m|0,this.Dh=b|0,this.Dl=B|0,this.Eh=X|0,this.El=ie|0,this.Fh=F|0,this.Fl=J|0,this.Gh=de|0,this.Gl=qe|0,this.Hh=ve|0,this.Hl=ke|0}process(r,a){for(let ye=0;ye<16;ye++,a+=4)Qt[ye]=r.getUint32(a),Vt[ye]=r.getUint32(a+=4);for(let ye=16;ye<80;ye++){const Ce=Qt[ye-15]|0,Ve=Vt[ye-15]|0,pt=Me.rotrSH(Ce,Ve,1)^Me.rotrSH(Ce,Ve,8)^Me.shrSH(Ce,Ve,7),bt=Me.rotrSL(Ce,Ve,1)^Me.rotrSL(Ce,Ve,8)^Me.shrSL(Ce,Ve,7),Se=Qt[ye-2]|0,De=Vt[ye-2]|0,ct=Me.rotrSH(Se,De,19)^Me.rotrBH(Se,De,61)^Me.shrSH(Se,De,6),Et=Me.rotrSL(Se,De,19)^Me.rotrBL(Se,De,61)^Me.shrSL(Se,De,6),St=Me.add4L(bt,Et,Vt[ye-7],Vt[ye-16]),H=Me.add4H(St,pt,ct,Qt[ye-7],Qt[ye-16]);Qt[ye]=H|0,Vt[ye]=St|0}let{Ah:s,Al:u,Bh:d,Bl:m,Ch:b,Cl:B,Dh:X,Dl:ie,Eh:F,El:J,Fh:de,Fl:qe,Gh:ve,Gl:ke,Hh:Ke,Hl:nt}=this;for(let ye=0;ye<80;ye++){const Ce=Me.rotrSH(F,J,14)^Me.rotrSH(F,J,18)^Me.rotrBH(F,J,41),Ve=Me.rotrSL(F,J,14)^Me.rotrSL(F,J,18)^Me.rotrBL(F,J,41),pt=F&de^~F&ve,bt=J&qe^~J&ke,Se=Me.add5L(nt,Ve,bt,qo[ye],Vt[ye]),De=Me.add5H(Se,Ke,Ce,pt,xo[ye],Qt[ye]),ct=Se|0,Et=Me.rotrSH(s,u,28)^Me.rotrBH(s,u,34)^Me.rotrBH(s,u,39),St=Me.rotrSL(s,u,28)^Me.rotrBL(s,u,34)^Me.rotrBL(s,u,39),H=s&d^s&b^d&b,he=u&m^u&B^m&B;Ke=ve|0,nt=ke|0,ve=de|0,ke=qe|0,de=F|0,qe=J|0,{h:F,l:J}=Me.add(X|0,ie|0,De|0,ct|0),X=b|0,ie=B|0,b=d|0,B=m|0,d=s|0,m=u|0;const ue=Me.add3L(ct,St,he);s=Me.add3H(ue,De,Et,H),u=ue|0}({h:s,l:u}=Me.add(this.Ah|0,this.Al|0,s|0,u|0)),{h:d,l:m}=Me.add(this.Bh|0,this.Bl|0,d|0,m|0),{h:b,l:B}=Me.add(this.Ch|0,this.Cl|0,b|0,B|0),{h:X,l:ie}=Me.add(this.Dh|0,this.Dl|0,X|0,ie|0),{h:F,l:J}=Me.add(this.Eh|0,this.El|0,F|0,J|0),{h:de,l:qe}=Me.add(this.Fh|0,this.Fl|0,de|0,qe|0),{h:ve,l:ke}=Me.add(this.Gh|0,this.Gl|0,ve|0,ke|0),{h:Ke,l:nt}=Me.add(this.Hh|0,this.Hl|0,Ke|0,nt|0),this.set(s,u,d,m,b,B,X,ie,F,J,de,qe,ve,ke,Ke,nt)}roundClean(){Qt.fill(0),Vt.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}};const Eo=Vn(()=>new vo);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Tr(n){return n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"}function Yn(n,r){return Array.isArray(r)?r.length===0?!0:n?r.every(a=>typeof a=="string"):r.every(a=>Number.isSafeInteger(a)):!1}function So(n){if(typeof n!="function")throw new Error("function expected");return!0}function Fr(n,r){if(typeof r!="string")throw new Error(`${n}: string expected`);return!0}function or(n){if(!Number.isSafeInteger(n))throw new Error(`invalid integer: ${n}`)}function Or(n){if(!Array.isArray(n))throw new Error("array expected")}function Pr(n,r){if(!Yn(!0,r))throw new Error(`${n}: array of strings expected`)}function Zn(n,r){if(!Yn(!1,r))throw new Error(`${n}: array of numbers expected`)}function ko(...n){const r=d=>d,a=(d,m)=>b=>d(m(b)),s=n.map(d=>d.encode).reduceRight(a,r),u=n.map(d=>d.decode).reduce(a,r);return{encode:s,decode:u}}function Ao(n){const r=typeof n=="string"?n.split(""):n,a=r.length;Pr("alphabet",r);const s=new Map(r.map((u,d)=>[u,d]));return{encode:u=>(Or(u),u.map(d=>{if(!Number.isSafeInteger(d)||d<0||d>=a)throw new Error(`alphabet.encode: digit index outside alphabet "${d}". Allowed: ${n}`);return r[d]})),decode:u=>(Or(u),u.map(d=>{Fr("alphabet.decode",d);const m=s.get(d);if(m===void 0)throw new Error(`Unknown letter: "${d}". Allowed: ${n}`);return m}))}}function Io(n=""){return Fr("join",n),{encode:r=>(Pr("join.decode",r),r.join(n)),decode:r=>(Fr("join.decode",r),r.split(n))}}function To(n,r="="){return or(n),Fr("padding",r),{encode(a){for(Pr("padding.encode",a);a.length*n%8;)a.push(r);return a},decode(a){Pr("padding.decode",a);let s=a.length;if(s*n%8)throw new Error("padding: invalid, string should have whole number of bytes");for(;s>0&&a[s-1]===r;s--)if((s-1)*n%8===0)throw new Error("padding: invalid, string has too much padding");return a.slice(0,s)}}}function sn(n,r,a){if(r<2)throw new Error(`convertRadix: invalid from=${r}, base cannot be less than 2`);if(a<2)throw new Error(`convertRadix: invalid to=${a}, base cannot be less than 2`);if(Or(n),!n.length)return[];let s=0;const u=[],d=Array.from(n,b=>{if(or(b),b<0||b>=r)throw new Error(`invalid integer: ${b}`);return b}),m=d.length;for(;;){let b=0,B=!0;for(let X=s;X<m;X++){const ie=d[X],F=r*b,J=F+ie;if(!Number.isSafeInteger(J)||F/r!==b||J-ie!==F)throw new Error("convertRadix: carry overflow");const de=J/a;b=J%a;const qe=Math.floor(de);if(d[X]=qe,!Number.isSafeInteger(qe)||qe*a+b!==J)throw new Error("convertRadix: carry overflow");if(B)qe?B=!1:s=X;else continue}if(u.push(b),B)break}for(let b=0;b<n.length-1&&n[b]===0;b++)u.push(0);return u.reverse()}const es=(n,r)=>r===0?n:es(r,n%r),Lr=(n,r)=>n+(r-es(n,r)),on=(()=>{let n=[];for(let r=0;r<40;r++)n.push(2**r);return n})();function an(n,r,a,s){if(Or(n),r<=0||r>32)throw new Error(`convertRadix2: wrong from=${r}`);if(a<=0||a>32)throw new Error(`convertRadix2: wrong to=${a}`);if(Lr(r,a)>32)throw new Error(`convertRadix2: carry overflow from=${r} to=${a} carryBits=${Lr(r,a)}`);let u=0,d=0;const m=on[r],b=on[a]-1,B=[];for(const X of n){if(or(X),X>=m)throw new Error(`convertRadix2: invalid data word=${X} from=${r}`);if(u=u<<r|X,d+r>32)throw new Error(`convertRadix2: carry overflow pos=${d} from=${r}`);for(d+=r;d>=a;d-=a)B.push((u>>d-a&b)>>>0);const ie=on[d];if(ie===void 0)throw new Error("invalid carry");u&=ie-1}if(u=u<<a-d&b,!s&&d>=r)throw new Error("Excess padding");if(!s&&u>0)throw new Error(`Non-zero padding: ${u}`);return s&&d>0&&B.push(u>>>0),B}function Fo(n){or(n);const r=2**8;return{encode:a=>{if(!Tr(a))throw new Error("radix.encode input should be Uint8Array");return sn(Array.from(a),r,n)},decode:a=>(Zn("radix.decode",a),Uint8Array.from(sn(a,n,r)))}}function Oo(n,r=!1){if(or(n),n<=0||n>32)throw new Error("radix2: bits should be in (0..32]");if(Lr(8,n)>32||Lr(n,8)>32)throw new Error("radix2: carry overflow");return{encode:a=>{if(!Tr(a))throw new Error("radix2.encode input should be Uint8Array");return an(Array.from(a),8,n,!r)},decode:a=>(Zn("radix2.decode",a),Uint8Array.from(an(a,n,8,r)))}}function Po(n,r){return or(n),So(r),{encode(a){if(!Tr(a))throw new Error("checksum.encode: input should be Uint8Array");const s=r(a).slice(0,n),u=new Uint8Array(a.length+n);return u.set(a),u.set(s,a.length),u},decode(a){if(!Tr(a))throw new Error("checksum.decode: input should be Uint8Array");const s=a.slice(0,-n),u=a.slice(-n),d=r(s).slice(0,n);for(let m=0;m<n;m++)if(d[m]!==u[m])throw new Error("Invalid checksum");return s}}}const Cr={alphabet:Ao,chain:ko,checksum:Po,convertRadix:sn,convertRadix2:an,radix:Fo,radix2:Oo,join:Io,padding:To};/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const Lo=n=>n[0]==="あいこくしん";function ts(n){if(typeof n!="string")throw new TypeError("invalid mnemonic type: "+typeof n);return n.normalize("NFKD")}function rs(n){const r=ts(n),a=r.split(" ");if(![12,15,18,21,24].includes(a.length))throw new Error("Invalid mnemonic");return{nfkd:r,words:a}}function ns(n){Sr(n,16,20,24,28,32)}function Co(n,r=128){if(sr(r),r%32!==0||r>256)throw new TypeError("Invalid entropy");return No(Ki(r/8),n)}const Do=n=>{const r=8-n.length/4;return new Uint8Array([so(n)[0]>>r<<r])};function ss(n){if(!Array.isArray(n)||n.length!==2048||typeof n[0]!="string")throw new Error("Wordlist: expected array of 2048 strings");return n.forEach(r=>{if(typeof r!="string")throw new Error("wordlist: non-string element: "+r)}),Cr.chain(Cr.checksum(1,Do),Cr.radix2(11,!0),Cr.alphabet(n))}function Ro(n,r){const{words:a}=rs(n),s=ss(r).decode(a);return ns(s),s}function No(n,r){return ns(n),ss(r).encode(n).join(Lo(r)?"　":" ")}function Bo(n,r){try{Ro(n,r)}catch{return!1}return!0}const Uo=n=>ts("mnemonic"+n);function jo(n,r=""){return Yi(Eo,rs(n).nfkd,Uo(r),{c:2048,dkLen:64})}const is=`abandon
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
`),os=n=>{throw new Error(`exhaustiveCheck unhandled case: ${JSON.stringify(n)}`)},ar=n=>n,Dr=()=>{},ln=Symbol("evolu.Type"),as=n=>typeof n=="object"&&n!==null&&ln in n,Gt=(n,r)=>({...r,name:n,is:a=>r.fromUnknown(a).ok,from:r.fromUnknown,[ln]:!0,Type:void 0,Input:void 0,Error:void 0,Parent:void 0,ParentError:void 0,Errors:void 0}),Tt=(n,r)=>Gt(n,{fromUnknown:r,to:ar,fromParent:Ie,toParent:ar});Tt("Unknown",Ie);const _t=Tt("String",n=>typeof n=="string"?Ie(n):Te({type:"String",value:n})),Pt=Tt("Number",n=>typeof n=="number"?Ie(n):Te({type:"Number",value:n})),ls=Tt("BigInt",n=>typeof n=="bigint"?Ie(n):Te({type:"BigInt",value:n})),cs=Tt("Boolean",n=>typeof n=="boolean"?Ie(n):Te({type:"Boolean",value:n}));Tt("Undefined",n=>n===void 0?Ie(n):Te({type:"Undefined",value:n}));const us=Tt("Null",n=>n===null?Ie(n):Te({type:"Null",value:n}));Tt("Function",n=>typeof n=="function"?Ie(n):Te({type:"Function",value:n}));const fs=Tt("Uint8Array",n=>n instanceof globalThis.Uint8Array?Ie(n):Te({type:"Uint8Array",value:n})),Mo=(n=>({...Tt("InstanceOf",r=>r instanceof n?Ie(r):Te({type:"InstanceOf",value:r,ctor:n.name})),ctor:n}))(globalThis.Date);Tt("EvoluType",n=>as(n)?Ie(n):Te({type:"EvoluType",value:n}));function tt(n,r,a){return{...Gt("Brand",{fromUnknown:a?u=>{const d=r.fromUnknown(u);return d.ok?a(d.value):d}:u=>{const d=r.fromUnknown(u);return d.ok?Ie(d.value):Te({type:n,value:u,parentError:d.error})},to:ar,fromParent:a??Ie,toParent:ar}),brand:n,parentType:r}}tt("CurrencyCode",_t,n=>/^[A-Z]{3}$/.test(n)?Ie(n):Te({type:"CurrencyCode",value:n}));const _s=tt("DateIso",_t,n=>n.length!==24?Te({type:"DateIsoString",value:n}):isNaN(globalThis.Date.parse(n))?Te({type:"DateIsoString",value:n}):Ie(n)),ds=n=>tt("Trimmed",n,r=>r.trim().length===r.length?Ie(r):Te({type:"Trimmed",value:r})),Ho=n=>ur(n,ds(n),r=>Ie(r.trim()),r=>r),cn=ds(_t),lr=n=>r=>tt(`MinLength${n}`,r,a=>a.length>=n?Ie(a):Te({type:"MinLength",value:a,min:n})),yr=n=>r=>tt(`MaxLength${n}`,r,a=>a.length<=n?Ie(a):Te({type:"MaxLength",value:a,max:n})),$o=n=>r=>tt(`Length${n}`,r,a=>a.length===n?Ie(a):Te({type:"Length",value:a,exact:n}));lr(1)(_t);const zo=yr(1e3)(_t);lr(1)(zo);const hs=lr(1)(cn),Wo=yr(1e3)(cn);lr(1)(Wo);const Qo=tt("Mnemonic",hs,n=>Bo(n,is)?Ie(n):Te({type:"Mnemonic",value:n})),Rr=(n,r)=>{const a=new RegExp(r.source,r.flags);return s=>tt(n,s,u=>(a.lastIndex=0,a.test(u)?Ie(u):Te({type:"Regex",name:n,value:u,pattern:r})))},ps=Rr("Base64Url",/^[A-Za-z0-9_-]+$/)(_t);Rr("NanoId",/^[A-Za-z0-9_-]{21}$/)(_t),tt("SimplePassword",lr(8)(yr(64)(cn)));const Vo=Rr("Id",/^[A-Za-z0-9_-]{21}$/)(_t),ms=n=>tt("Positive",n,r=>r>0?Ie(r):Te({type:"Positive",value:r}));ms(Pt),(n=>tt("Negative",n,r=>r<0?Ie(r):Te({type:"Negative",value:r})))(Pt),(n=>tt("NonPositive",n,r=>r<=0?Ie(r):Te({type:"NonPositive",value:r})))(Pt);const gs=n=>tt("NonNegative",n,r=>r>=0?Ie(r):Te({type:"NonNegative",value:r}));gs(Pt);const bs=(n=>tt("Int",n,r=>globalThis.Number.isSafeInteger(r)?Ie(r):Te({type:"Int",value:r})))(Pt);ms(bs);const cr=gs(bs),ys=n=>r=>tt(`LessThanOrEqualTo${n}`,r,a=>a<=n?Ie(a):Te({type:"LessThanOrEqualTo",value:a,max:n}));(n=>tt("NonNaN",n,r=>globalThis.Number.isNaN(r)?Te({type:"NonNaN",value:r}):Ie(r)))(Pt);const un=(n=>tt("Finite",n,r=>globalThis.Number.isFinite(r)?Ie(r):Te({type:"Finite",value:r})))(Pt);((n,r)=>a=>tt(`Between${n}-${r}`,a,s=>s>=n&&s<=r?Ie(s):Te({type:"Between",value:s,min:n,max:r})))(1,10)(Pt);const Go=n=>({...Gt("Literal",{fromUnknown:a=>a===n?Ie(n):Te({type:"Literal",value:a,expected:n}),to:ar,fromParent:Ie,toParent:ar}),expected:n}),ur=(n,r,a,s)=>({...Gt("Transform",{fromUnknown:m=>{const b=n.fromUnknown(m);return b.ok?a(b.value):b},to:m=>n.to(s(m)),fromParent:a,toParent:s}),is:r.is,fromType:n,toType:r});Ho(_t),ur(Mo,_s,n=>_s.fromParent(n.toISOString()),n=>new globalThis.Date(n)),ur(hs,un,n=>{const r=un.fromParent(globalThis.Number(n));return r.ok?r:Te({type:"NumberFromString",value:n})},n=>n.toString());const Ko=n=>({...Gt("Array",{fromUnknown:d=>{if(!Array.isArray(d))return Te({type:"Array",value:d,reason:{kind:"NotArray"}});const m=[];for(let b=0;b<d.length;b++){const B=n.fromUnknown(d[b]);if(!B.ok)return Te({type:"Array",value:d,reason:{kind:"Element",index:b,error:B.error}});m.push(B.value)}return Ie(m)},to:d=>d.map(n.to),fromParent:d=>{const m=[];for(let b=0;b<d.length;b++){const B=n.fromParent(d[b]);if(!B.ok)return Te({type:"Array",value:d,reason:{kind:"Element",index:b,error:B.error}});m.push(B.value)}return Ie(m)},toParent:d=>d.map(n.toParent)}),element:n}),Jo=(n,r)=>({...Gt("Record",{fromUnknown:m=>{if(!zn(m))return Te({type:"Record",value:m,reason:{kind:"NotRecord"}});const b={};for(const[B,X]of Object.entries(m)){const ie=n.fromUnknown(B);if(!ie.ok)return Te({type:"Record",value:m,reason:{kind:"Key",key:B,error:ie.error}});const F=r.fromUnknown(X);if(!F.ok)return Te({type:"Record",value:m,reason:{kind:"Value",key:B,error:F.error}});b[ie.value]=F.value}return Ie(b)},to:m=>Object.fromEntries(Object.entries(m).map(([b,B])=>[n.to(b),r.to(B)])),fromParent:m=>{const b={};for(const[B,X]of Object.entries(m)){const ie=n.fromParent(B);if(!ie.ok)return Te({type:"Record",value:m,reason:{kind:"Key",key:B,error:ie.error}});const F=r.fromParent(X);if(!F.ok)return Te({type:"Record",value:m,reason:{kind:"Value",key:ie.value,error:F.error}});b[ie.value]=F.value}return Ie(b)},toParent:m=>Object.fromEntries(Object.entries(m).map(([b,B])=>[n.toParent(b),r.toParent(B)]))}),key:n,value:r});function fn(n,r){const a=Object.keys(n);return{...Gt("Object",{fromUnknown:b=>{if(!zn(b))return Te({type:"Object",value:b,reason:{kind:"NotObject"}});const B={},X={};for(const F of a){if(!(F in b)&&Nr(n[F]))continue;const J=n[F].fromUnknown(b[F]);J.ok?X[F]=J.value:B[F]=J.error}const ie=Object.keys(b).filter(F=>!a.includes(F));return ie.length>0?Te({type:"Object",value:b,reason:{kind:"ExtraKeys",extraKeys:ie}}):Object.keys(B).length>0?Te({type:"Object",value:b,reason:{kind:"Props",errors:B}}):Ie(X)},to:b=>{const B=[];for(const X of a)!(X in b)&&Nr(n[X])||B.push([X,n[X].to(b[X])]);return Object.fromEntries(B)},fromParent:b=>{const B={},X={};for(const ie of a){if(!(ie in b)&&Nr(n[ie]))continue;const F=n[ie].fromParent(b[ie]);F.ok?X[ie]=F.value:B[ie]=F.error}return Object.keys(B).length>0?Te({type:"Object",value:b,reason:{kind:"Props",errors:B}}):Ie(X)},toParent:b=>{const B=[];for(const X of a)!(X in b)&&Nr(n[X])||B.push([X,n[X].toParent(b[X])]);return Object.fromEntries(B)}}),props:n}}function _n(...n){const r=n.map(u=>as(u)?u:Go(u)),a=u=>{const d=[];for(const m of r){const b=m.fromUnknown(u);if(b.ok)return b;d.push(b.error)}return Te({type:"Union",value:u,errors:d})},s=u=>{for(const d of r)if(d.is(u))return d.to(u);ft(!1,"No matching member found in Union Type `to` function")};return{...Gt("Union",{fromUnknown:a,to:s,fromParent:a,toParent:s}),members:r}}const Xo=n=>{let r;return{name:"Recursive",from:a=>(r||(r=n()),r.from(a)),fromUnknown:a=>(r||(r=n()),r.fromUnknown(a)),to:a=>(r||(r=n()),r.to(a)),fromParent:a=>(r||(r=n()),r.fromParent(a)),toParent:a=>(r||(r=n()),r.toParent(a)),is:a=>(r||(r=n()),r.is(a)),[ln]:!0,getParentType:()=>(r||(r=n()),r)}},Yo=tt("Int64",ls,n=>n>=-9223372036854775808n&&n<=9223372036854775807n?Ie(n):Te({type:"Int64",value:n})),Zo=ur(_t,ls,n=>Un(()=>globalThis.BigInt(n),()=>({type:"BigIntFromString",value:n})),n=>n.toString());tt("Int64",_t,n=>Zo.fromParent(n).ok&&Yo.fromParent(globalThis.BigInt(n)).ok?Ie(n):Te({type:"Int64String",value:n}));const dn=Xo(()=>_n(_t,un,cs,us,ea,ta)),ea=Ko(dn),ta=Jo(_t,dn),ra=ur(_t,dn,n=>Un(()=>JSON.parse(n),r=>({type:"JsonValueFromString",value:n,message:globalThis.String(r)})),n=>JSON.stringify(n));tt("Json",_t,n=>{const r=ra.fromParent(n);return r.ok?Ie(n):Te({type:"Json",value:n,message:r.error.message})});const Nr=n=>typeof n=="object"&&n!=null&&"name"in n&&n.name==="Optional",na=(n,r)=>{if(n===void 0)return[{op:"replaceAll",value:r}];if(n.length!==r.length)return[{op:"replaceAll",value:r}];const a=n.length,s=[];for(let u=0;u<a;u++){const d=n[u],m=r[u];for(const b in d)if(!sa(d[b],m[b])){s.push({op:"replaceAt",value:m,index:u});break}}return a>0&&s.length===a?[{op:"replaceAll",value:r}]:s},sa=(n,r)=>n instanceof Uint8Array&&r instanceof Uint8Array?zi(n,r)===0:n===r;$n(),yr(256)(ps),ur(cs,_n(0,1),n=>Ie(n?1:0),n=>n===1);const ws=lr(1)(yr(42)(ps));tt("TableName",ws),tt("ColumnName",ws),_n(us,_t,Pt,fs);const ia=tt("OwnerId",Vo),oa=tt("EncryptionKey",$o(32)(fs)),xs=Rr("NodeId",/^[a-f0-9]{16}$/)(_t);fn({mnemonic:Qo,id:ia,encryptionKey:oa,protocolVersion:Pt,nodeId:xs});var hn;try{hn=new TextDecoder}catch{}var ge,Lt,D=0,it={},Qe,Kt,At=0,Ct=0,dt,Bt,qt=[],ze,qs={useRecords:!1,mapsAsObjects:!0};class vs{}const Es=new vs;Es.name="MessagePack 0xC1";var Jt=!1,Ss=2,aa;try{new Function("")}catch{Ss=1/0}class wr{constructor(r){r&&(r.useRecords===!1&&r.mapsAsObjects===void 0&&(r.mapsAsObjects=!0),r.sequential&&r.trusted!==!1&&(r.trusted=!0,!r.structures&&r.useRecords!=!1&&(r.structures=[],r.maxSharedStructures||(r.maxSharedStructures=0))),r.structures?r.structures.sharedLength=r.structures.length:r.getStructures&&((r.structures=[]).uninitialized=!0,r.structures.sharedLength=0),r.int64AsNumber&&(r.int64AsType="number")),Object.assign(this,r)}unpack(r,a){if(ge)return Bs(()=>(yn(),this?this.unpack(r,a):wr.prototype.unpack.call(qs,r,a)));!r.buffer&&r.constructor===ArrayBuffer&&(r=typeof Buffer<"u"?Buffer.from(r):new Uint8Array(r)),typeof a=="object"?(Lt=a.end||r.length,D=a.start||0):(D=0,Lt=a>-1?a:r.length),Ct=0,Kt=null,dt=null,ge=r;try{ze=r.dataView||(r.dataView=new DataView(r.buffer,r.byteOffset,r.byteLength))}catch(s){throw ge=null,r instanceof Uint8Array?s:new Error("Source must be a Uint8Array or Buffer but was a "+(r&&typeof r=="object"?r.constructor.name:typeof r))}if(this instanceof wr){if(it=this,this.structures)return Qe=this.structures,Br(a);(!Qe||Qe.length>0)&&(Qe=[])}else it=qs,(!Qe||Qe.length>0)&&(Qe=[]);return Br(a)}unpackMultiple(r,a){let s,u=0;try{Jt=!0;let d=r.length,m=this?this.unpack(r,d):Ur.unpack(r,d);if(a){if(a(m,u,D)===!1)return;for(;D<d;)if(u=D,a(Br(),u,D)===!1)return}else{for(s=[m];D<d;)u=D,s.push(Br());return s}}catch(d){throw d.lastPosition=u,d.values=s,d}finally{Jt=!1,yn()}}_mergeStructures(r,a){r=r||[],Object.isFrozen(r)&&(r=r.map(s=>s.slice(0)));for(let s=0,u=r.length;s<u;s++){let d=r[s];d&&(d.isShared=!0,s>=32&&(d.highByte=s-32>>5))}r.sharedLength=r.length;for(let s in a||[])if(s>=0){let u=r[s],d=a[s];d&&(u&&((r.restoreStructures||(r.restoreStructures=[]))[s]=u),r[s]=d)}return this.structures=r}decode(r,a){return this.unpack(r,a)}}function Br(n){try{if(!it.trusted&&!Jt){let a=Qe.sharedLength||0;a<Qe.length&&(Qe.length=a)}let r;if(it.randomAccessStructure&&ge[D]<64&&ge[D]>=32&&aa||(r=ut()),dt&&(D=dt.postBundlePosition,dt=null),Jt&&(Qe.restoreStructures=null),D==Lt)Qe&&Qe.restoreStructures&&ks(),Qe=null,ge=null,Bt&&(Bt=null);else{if(D>Lt)throw new Error("Unexpected end of MessagePack data");if(!Jt){let a;try{a=JSON.stringify(r,(s,u)=>typeof u=="bigint"?`${u}n`:u).slice(0,100)}catch(s){a="(JSON view not available "+s+")"}throw new Error("Data read, but end of buffer not reached "+a)}}return r}catch(r){throw Qe&&Qe.restoreStructures&&ks(),yn(),(r instanceof RangeError||r.message.startsWith("Unexpected end of buffer")||D>Lt)&&(r.incomplete=!0),r}}function ks(){for(let n in Qe.restoreStructures)Qe[n]=Qe.restoreStructures[n];Qe.restoreStructures=null}function ut(){let n=ge[D++];if(n<160)if(n<128){if(n<64)return n;{let r=Qe[n&63]||it.getStructures&&Is()[n&63];return r?(r.read||(r.read=pn(r,n&63)),r.read()):n}}else if(n<144)if(n-=128,it.mapsAsObjects){let r={};for(let a=0;a<n;a++){let s=Cs();s==="__proto__"&&(s="__proto_"),r[s]=ut()}return r}else{let r=new Map;for(let a=0;a<n;a++)r.set(ut(),ut());return r}else{n-=144;let r=new Array(n);for(let a=0;a<n;a++)r[a]=ut();return it.freezeData?Object.freeze(r):r}else if(n<192){let r=n-160;if(Ct>=D)return Kt.slice(D-At,(D+=r)-At);if(Ct==0&&Lt<140){let a=r<16?gn(r):Os(r);if(a!=null)return a}return mn(r)}else{let r;switch(n){case 192:return null;case 193:return dt?(r=ut(),r>0?dt[1].slice(dt.position1,dt.position1+=r):dt[0].slice(dt.position0,dt.position0-=r)):Es;case 194:return!1;case 195:return!0;case 196:if(r=ge[D++],r===void 0)throw new Error("Unexpected end of buffer");return bn(r);case 197:return r=ze.getUint16(D),D+=2,bn(r);case 198:return r=ze.getUint32(D),D+=4,bn(r);case 199:return tr(ge[D++]);case 200:return r=ze.getUint16(D),D+=2,tr(r);case 201:return r=ze.getUint32(D),D+=4,tr(r);case 202:if(r=ze.getFloat32(D),it.useFloat32>2){let a=wn[(ge[D]&127)<<1|ge[D+1]>>7];return D+=4,(a*r+(r>0?.5:-.5)>>0)/a}return D+=4,r;case 203:return r=ze.getFloat64(D),D+=8,r;case 204:return ge[D++];case 205:return r=ze.getUint16(D),D+=2,r;case 206:return r=ze.getUint32(D),D+=4,r;case 207:return it.int64AsType==="number"?(r=ze.getUint32(D)*4294967296,r+=ze.getUint32(D+4)):it.int64AsType==="string"?r=ze.getBigUint64(D).toString():it.int64AsType==="auto"?(r=ze.getBigUint64(D),r<=BigInt(2)<<BigInt(52)&&(r=Number(r))):r=ze.getBigUint64(D),D+=8,r;case 208:return ze.getInt8(D++);case 209:return r=ze.getInt16(D),D+=2,r;case 210:return r=ze.getInt32(D),D+=4,r;case 211:return it.int64AsType==="number"?(r=ze.getInt32(D)*4294967296,r+=ze.getUint32(D+4)):it.int64AsType==="string"?r=ze.getBigInt64(D).toString():it.int64AsType==="auto"?(r=ze.getBigInt64(D),r>=BigInt(-2)<<BigInt(52)&&r<=BigInt(2)<<BigInt(52)&&(r=Number(r))):r=ze.getBigInt64(D),D+=8,r;case 212:if(r=ge[D++],r==114)return Rs(ge[D++]&63);{let a=qt[r];if(a)return a.read?(D++,a.read(ut())):a.noBuffer?(D++,a()):a(ge.subarray(D,++D));throw new Error("Unknown extension "+r)}case 213:return r=ge[D],r==114?(D++,Rs(ge[D++]&63,ge[D++])):tr(2);case 214:return tr(4);case 215:return tr(8);case 216:return tr(16);case 217:return r=ge[D++],Ct>=D?Kt.slice(D-At,(D+=r)-At):ca(r);case 218:return r=ze.getUint16(D),D+=2,Ct>=D?Kt.slice(D-At,(D+=r)-At):ua(r);case 219:return r=ze.getUint32(D),D+=4,Ct>=D?Kt.slice(D-At,(D+=r)-At):fa(r);case 220:return r=ze.getUint16(D),D+=2,Ts(r);case 221:return r=ze.getUint32(D),D+=4,Ts(r);case 222:return r=ze.getUint16(D),D+=2,Fs(r);case 223:return r=ze.getUint32(D),D+=4,Fs(r);default:if(n>=224)return n-256;if(n===void 0){let a=new Error("Unexpected end of MessagePack data");throw a.incomplete=!0,a}throw new Error("Unknown MessagePack token "+n)}}}const la=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function pn(n,r){function a(){if(a.count++>Ss){let u=n.read=new Function("r","return function(){return "+(it.freezeData?"Object.freeze":"")+"({"+n.map(d=>d==="__proto__"?"__proto_:r()":la.test(d)?d+":r()":"["+JSON.stringify(d)+"]:r()").join(",")+"})}")(ut);return n.highByte===0&&(n.read=As(r,n.read)),u()}let s={};for(let u=0,d=n.length;u<d;u++){let m=n[u];m==="__proto__"&&(m="__proto_"),s[m]=ut()}return it.freezeData?Object.freeze(s):s}return a.count=0,n.highByte===0?As(r,a):a}const As=(n,r)=>function(){let a=ge[D++];if(a===0)return r();let s=n<32?-(n+(a<<5)):n+(a<<5),u=Qe[s]||Is()[s];if(!u)throw new Error("Record id is not defined for "+s);return u.read||(u.read=pn(u,n)),u.read()};function Is(){let n=Bs(()=>(ge=null,it.getStructures()));return Qe=it._mergeStructures(n,Qe)}var mn=xr,ca=xr,ua=xr,fa=xr;function xr(n){let r;if(n<16&&(r=gn(n)))return r;if(n>64&&hn)return hn.decode(ge.subarray(D,D+=n));const a=D+n,s=[];for(r="";D<a;){const u=ge[D++];if((u&128)===0)s.push(u);else if((u&224)===192){const d=ge[D++]&63;s.push((u&31)<<6|d)}else if((u&240)===224){const d=ge[D++]&63,m=ge[D++]&63;s.push((u&31)<<12|d<<6|m)}else if((u&248)===240){const d=ge[D++]&63,m=ge[D++]&63,b=ge[D++]&63;let B=(u&7)<<18|d<<12|m<<6|b;B>65535&&(B-=65536,s.push(B>>>10&1023|55296),B=56320|B&1023),s.push(B)}else s.push(u);s.length>=4096&&(r+=ht.apply(String,s),s.length=0)}return s.length>0&&(r+=ht.apply(String,s)),r}function Ts(n){let r=new Array(n);for(let a=0;a<n;a++)r[a]=ut();return it.freezeData?Object.freeze(r):r}function Fs(n){if(it.mapsAsObjects){let r={};for(let a=0;a<n;a++){let s=Cs();s==="__proto__"&&(s="__proto_"),r[s]=ut()}return r}else{let r=new Map;for(let a=0;a<n;a++)r.set(ut(),ut());return r}}var ht=String.fromCharCode;function Os(n){let r=D,a=new Array(n);for(let s=0;s<n;s++){const u=ge[D++];if((u&128)>0){D=r;return}a[s]=u}return ht.apply(String,a)}function gn(n){if(n<4)if(n<2){if(n===0)return"";{let r=ge[D++];if((r&128)>1){D-=1;return}return ht(r)}}else{let r=ge[D++],a=ge[D++];if((r&128)>0||(a&128)>0){D-=2;return}if(n<3)return ht(r,a);let s=ge[D++];if((s&128)>0){D-=3;return}return ht(r,a,s)}else{let r=ge[D++],a=ge[D++],s=ge[D++],u=ge[D++];if((r&128)>0||(a&128)>0||(s&128)>0||(u&128)>0){D-=4;return}if(n<6){if(n===4)return ht(r,a,s,u);{let d=ge[D++];if((d&128)>0){D-=5;return}return ht(r,a,s,u,d)}}else if(n<8){let d=ge[D++],m=ge[D++];if((d&128)>0||(m&128)>0){D-=6;return}if(n<7)return ht(r,a,s,u,d,m);let b=ge[D++];if((b&128)>0){D-=7;return}return ht(r,a,s,u,d,m,b)}else{let d=ge[D++],m=ge[D++],b=ge[D++],B=ge[D++];if((d&128)>0||(m&128)>0||(b&128)>0||(B&128)>0){D-=8;return}if(n<10){if(n===8)return ht(r,a,s,u,d,m,b,B);{let X=ge[D++];if((X&128)>0){D-=9;return}return ht(r,a,s,u,d,m,b,B,X)}}else if(n<12){let X=ge[D++],ie=ge[D++];if((X&128)>0||(ie&128)>0){D-=10;return}if(n<11)return ht(r,a,s,u,d,m,b,B,X,ie);let F=ge[D++];if((F&128)>0){D-=11;return}return ht(r,a,s,u,d,m,b,B,X,ie,F)}else{let X=ge[D++],ie=ge[D++],F=ge[D++],J=ge[D++];if((X&128)>0||(ie&128)>0||(F&128)>0||(J&128)>0){D-=12;return}if(n<14){if(n===12)return ht(r,a,s,u,d,m,b,B,X,ie,F,J);{let de=ge[D++];if((de&128)>0){D-=13;return}return ht(r,a,s,u,d,m,b,B,X,ie,F,J,de)}}else{let de=ge[D++],qe=ge[D++];if((de&128)>0||(qe&128)>0){D-=14;return}if(n<15)return ht(r,a,s,u,d,m,b,B,X,ie,F,J,de,qe);let ve=ge[D++];if((ve&128)>0){D-=15;return}return ht(r,a,s,u,d,m,b,B,X,ie,F,J,de,qe,ve)}}}}}function Ps(){let n=ge[D++],r;if(n<192)r=n-160;else switch(n){case 217:r=ge[D++];break;case 218:r=ze.getUint16(D),D+=2;break;case 219:r=ze.getUint32(D),D+=4;break;default:throw new Error("Expected string")}return xr(r)}function bn(n){return it.copyBuffers?Uint8Array.prototype.slice.call(ge,D,D+=n):ge.subarray(D,D+=n)}function tr(n){let r=ge[D++];if(qt[r]){let a;return qt[r](ge.subarray(D,a=D+=n),s=>{D=s;try{return ut()}finally{D=a}})}else throw new Error("Unknown extension type "+r)}var Ls=new Array(4096);function Cs(){let n=ge[D++];if(n>=160&&n<192){if(n=n-160,Ct>=D)return Kt.slice(D-At,(D+=n)-At);if(!(Ct==0&&Lt<180))return mn(n)}else return D--,Ds(ut());let r=(n<<5^(n>1?ze.getUint16(D):n>0?ge[D]:0))&4095,a=Ls[r],s=D,u=D+n-3,d,m=0;if(a&&a.bytes==n){for(;s<u;){if(d=ze.getUint32(s),d!=a[m++]){s=1879048192;break}s+=4}for(u+=3;s<u;)if(d=ge[s++],d!=a[m++]){s=1879048192;break}if(s===u)return D=s,a.string;u-=3,s=D}for(a=[],Ls[r]=a,a.bytes=n;s<u;)d=ze.getUint32(s),a.push(d),s+=4;for(u+=3;s<u;)d=ge[s++],a.push(d);let b=n<16?gn(n):Os(n);return b!=null?a.string=b:a.string=mn(n)}function Ds(n){if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="boolean"||typeof n=="bigint")return n.toString();if(n==null)return n+"";throw new Error("Invalid property type for record",typeof n)}const Rs=(n,r)=>{let a=ut().map(Ds),s=n;r!==void 0&&(n=n<32?-((r<<5)+n):(r<<5)+n,a.highByte=r);let u=Qe[n];return u&&(u.isShared||Jt)&&((Qe.restoreStructures||(Qe.restoreStructures=[]))[n]=u),Qe[n]=a,a.read=pn(a,s),a.read()};qt[0]=()=>{},qt[0].noBuffer=!0,qt[66]=n=>{let r=n.length,a=BigInt(n[0]&128?n[0]-256:n[0]);for(let s=1;s<r;s++)a<<=BigInt(8),a+=BigInt(n[s]);return a};let _a={Error,TypeError,ReferenceError};qt[101]=()=>{let n=ut();return(_a[n[0]]||Error)(n[1],{cause:n[2]})},qt[105]=n=>{if(it.structuredClone===!1)throw new Error("Structured clone extension is disabled");let r=ze.getUint32(D-4);Bt||(Bt=new Map);let a=ge[D],s;a>=144&&a<160||a==220||a==221?s=[]:s={};let u={target:s};Bt.set(r,u);let d=ut();return u.used?Object.assign(s,d):(u.target=d,d)},qt[112]=n=>{if(it.structuredClone===!1)throw new Error("Structured clone extension is disabled");let r=ze.getUint32(D-4),a=Bt.get(r);return a.used=!0,a.target},qt[115]=()=>new Set(ut());const Ns=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(n=>n+"Array");let da=typeof globalThis=="object"?globalThis:window;qt[116]=n=>{let r=n[0],a=Ns[r];if(!a){if(r===16){let s=new ArrayBuffer(n.length-1);return new Uint8Array(s).set(n.subarray(1)),s}throw new Error("Could not find typed array for code "+r)}return new da[a](Uint8Array.prototype.slice.call(n,1).buffer)},qt[120]=()=>{let n=ut();return new RegExp(n[0],n[1])};const ha=[];qt[98]=n=>{let r=(n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3],a=D;return D+=r-n.length,dt=ha,dt=[Ps(),Ps()],dt.position0=0,dt.position1=0,dt.postBundlePosition=D,D=a,ut()},qt[255]=n=>n.length==4?new Date((n[0]*16777216+(n[1]<<16)+(n[2]<<8)+n[3])*1e3):n.length==8?new Date(((n[0]<<22)+(n[1]<<14)+(n[2]<<6)+(n[3]>>2))/1e6+((n[3]&3)*4294967296+n[4]*16777216+(n[5]<<16)+(n[6]<<8)+n[7])*1e3):n.length==12?new Date(((n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3])/1e6+((n[4]&128?-281474976710656:0)+n[6]*1099511627776+n[7]*4294967296+n[8]*16777216+(n[9]<<16)+(n[10]<<8)+n[11])*1e3):new Date("invalid");function Bs(n){let r=Lt,a=D,s=At,u=Ct,d=Kt,m=Bt,b=dt,B=new Uint8Array(ge.slice(0,Lt)),X=Qe,ie=Qe.slice(0,Qe.length),F=it,J=Jt,de=n();return Lt=r,D=a,At=s,Ct=u,Kt=d,Bt=m,dt=b,ge=B,Jt=J,Qe=X,Qe.splice(0,Qe.length,...ie),it=F,ze=new DataView(ge.buffer,ge.byteOffset,ge.byteLength),de}function yn(){ge=null,Bt=null,Qe=null}const wn=new Array(147);for(let n=0;n<256;n++)wn[n]=+("1e"+Math.floor(45.15-n*.30103));var Ur=new wr({useRecords:!1});const pa=Ur.unpack;Ur.unpackMultiple,Ur.unpack;let ma=new Float32Array(1);new Uint8Array(ma.buffer,0,4);let jr;try{jr=new TextEncoder}catch{}let xn,Us;const Mr=typeof Buffer<"u",Hr=Mr?function(n){return Buffer.allocUnsafeSlow(n)}:Uint8Array,js=Mr?Buffer:Uint8Array,Ms=Mr?4294967296:2144337920;let M,qr,rt,N=0,wt,lt=null,ga;const ba=21760,ya=/[\u0080-\uFFFF]/,fr=Symbol("record-id");class wa extends wr{constructor(r){super(r),this.offset=0;let a,s,u,d,m=js.prototype.utf8Write?function(H,he){return M.utf8Write(H,he,M.byteLength-he)}:jr&&jr.encodeInto?function(H,he){return jr.encodeInto(H,M.subarray(he)).written}:!1,b=this;r||(r={});let B=r&&r.sequential,X=r.structures||r.saveStructures,ie=r.maxSharedStructures;if(ie==null&&(ie=X?32:0),ie>8160)throw new Error("Maximum maxSharedStructure is 8160");r.structuredClone&&r.moreTypes==null&&(this.moreTypes=!0);let F=r.maxOwnStructures;F==null&&(F=X?32:64),!this.structures&&r.useRecords!=!1&&(this.structures=[]);let J=ie>32||F+ie>64,de=ie+64,qe=ie+F+64;if(qe>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let ve=[],ke=0,Ke=0;this.pack=this.encode=function(H,he){if(M||(M=new Hr(8192),rt=M.dataView||(M.dataView=new DataView(M.buffer,0,8192)),N=0),wt=M.length-10,wt-N<2048?(M=new Hr(M.length),rt=M.dataView||(M.dataView=new DataView(M.buffer,0,M.length)),wt=M.length-10,N=0):N=N+7&2147483640,a=N,he&ka&&(N+=he&255),d=b.structuredClone?new Map:null,b.bundleStrings&&typeof H!="string"?(lt=[],lt.size=1/0):lt=null,u=b.structures,u){u.uninitialized&&(u=b._mergeStructures(b.getStructures()));let ce=u.sharedLength||0;if(ce>ie)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+u.sharedLength);if(!u.transitions){u.transitions=Object.create(null);for(let me=0;me<ce;me++){let Oe=u[me];if(!Oe)continue;let Ge,Be=u.transitions;for(let Xe=0,We=Oe.length;Xe<We;Xe++){let yt=Oe[Xe];Ge=Be[yt],Ge||(Ge=Be[yt]=Object.create(null)),Be=Ge}Be[fr]=me+64}this.lastNamedStructuresLength=ce}B||(u.nextId=ce+64)}s&&(s=!1);let ue;try{b.randomAccessStructure&&H&&H.constructor&&H.constructor===Object?St(H):Ce(H);let ce=lt;if(lt&&zs(a,Ce,0),d&&d.idsToInsert){let me=d.idsToInsert.sort((Xe,We)=>Xe.offset>We.offset?1:-1),Oe=me.length,Ge=-1;for(;ce&&Oe>0;){let Xe=me[--Oe].offset+a;Xe<ce.stringsPosition+a&&Ge===-1&&(Ge=0),Xe>ce.position+a?Ge>=0&&(Ge+=6):(Ge>=0&&(rt.setUint32(ce.position+a,rt.getUint32(ce.position+a)+Ge),Ge=-1),ce=ce.previous,Oe++)}Ge>=0&&ce&&rt.setUint32(ce.position+a,rt.getUint32(ce.position+a)+Ge),N+=me.length*6,N>wt&&De(N),b.offset=N;let Be=qa(M.subarray(a,N),me);return d=null,Be}return b.offset=N,he&Ea?(M.start=a,M.end=N,M):M.subarray(a,N)}catch(ce){throw ue=ce,ce}finally{if(u&&(nt(),s&&b.saveStructures)){let ce=u.sharedLength||0,me=M.subarray(a,N),Oe=va(u,b);if(!ue)return b.saveStructures(Oe,Oe.isCompatible)===!1?b.pack(H,he):(b.lastNamedStructuresLength=ce,M.length>1073741824&&(M=null),me)}M.length>1073741824&&(M=null),he&Sa&&(N=a)}};const nt=()=>{Ke<10&&Ke++;let H=u.sharedLength||0;if(u.length>H&&!B&&(u.length=H),ke>1e4)u.transitions=null,Ke=0,ke=0,ve.length>0&&(ve=[]);else if(ve.length>0&&!B){for(let he=0,ue=ve.length;he<ue;he++)ve[he][fr]=0;ve=[]}},ye=H=>{var he=H.length;he<16?M[N++]=144|he:he<65536?(M[N++]=220,M[N++]=he>>8,M[N++]=he&255):(M[N++]=221,rt.setUint32(N,he),N+=4);for(let ue=0;ue<he;ue++)Ce(H[ue])},Ce=H=>{N>wt&&(M=De(N));var he=typeof H,ue;if(he==="string"){let ce=H.length;if(lt&&ce>=4&&ce<4096){if((lt.size+=ce)>ba){let Be,Xe=(lt[0]?lt[0].length*3+lt[1].length:0)+10;N+Xe>wt&&(M=De(N+Xe));let We;lt.position?(We=lt,M[N]=200,N+=3,M[N++]=98,Be=N-a,N+=4,zs(a,Ce,0),rt.setUint16(Be+a-3,N-a-Be)):(M[N++]=214,M[N++]=98,Be=N-a,N+=4),lt=["",""],lt.previous=We,lt.size=0,lt.position=Be}let Ge=ya.test(H);lt[Ge?0:1]+=H,M[N++]=193,Ce(Ge?-ce:ce);return}let me;ce<32?me=1:ce<256?me=2:ce<65536?me=3:me=5;let Oe=ce*3;if(N+Oe>wt&&(M=De(N+Oe)),ce<64||!m){let Ge,Be,Xe,We=N+me;for(Ge=0;Ge<ce;Ge++)Be=H.charCodeAt(Ge),Be<128?M[We++]=Be:Be<2048?(M[We++]=Be>>6|192,M[We++]=Be&63|128):(Be&64512)===55296&&((Xe=H.charCodeAt(Ge+1))&64512)===56320?(Be=65536+((Be&1023)<<10)+(Xe&1023),Ge++,M[We++]=Be>>18|240,M[We++]=Be>>12&63|128,M[We++]=Be>>6&63|128,M[We++]=Be&63|128):(M[We++]=Be>>12|224,M[We++]=Be>>6&63|128,M[We++]=Be&63|128);ue=We-N-me}else ue=m(H,N+me);ue<32?M[N++]=160|ue:ue<256?(me<2&&M.copyWithin(N+2,N+1,N+1+ue),M[N++]=217,M[N++]=ue):ue<65536?(me<3&&M.copyWithin(N+3,N+2,N+2+ue),M[N++]=218,M[N++]=ue>>8,M[N++]=ue&255):(me<5&&M.copyWithin(N+5,N+3,N+3+ue),M[N++]=219,rt.setUint32(N,ue),N+=4),N+=ue}else if(he==="number")if(H>>>0===H)H<32||H<128&&this.useRecords===!1||H<64&&!this.randomAccessStructure?M[N++]=H:H<256?(M[N++]=204,M[N++]=H):H<65536?(M[N++]=205,M[N++]=H>>8,M[N++]=H&255):(M[N++]=206,rt.setUint32(N,H),N+=4);else if(H>>0===H)H>=-32?M[N++]=256+H:H>=-128?(M[N++]=208,M[N++]=H+256):H>=-32768?(M[N++]=209,rt.setInt16(N,H),N+=2):(M[N++]=210,rt.setInt32(N,H),N+=4);else{let ce;if((ce=this.useFloat32)>0&&H<4294967296&&H>=-2147483648){M[N++]=202,rt.setFloat32(N,H);let me;if(ce<4||(me=H*wn[(M[N]&127)<<1|M[N+1]>>7])>>0===me){N+=4;return}else N--}M[N++]=203,rt.setFloat64(N,H),N+=8}else if(he==="object"||he==="function")if(!H)M[N++]=192;else{if(d){let me=d.get(H);if(me){if(!me.id){let Oe=d.idsToInsert||(d.idsToInsert=[]);me.id=Oe.push(me)}M[N++]=214,M[N++]=112,rt.setUint32(N,me.id),N+=4;return}else d.set(H,{offset:N-a})}let ce=H.constructor;if(ce===Object)Se(H);else if(ce===Array)ye(H);else if(ce===Map)if(this.mapAsEmptyObject)M[N++]=128;else{ue=H.size,ue<16?M[N++]=128|ue:ue<65536?(M[N++]=222,M[N++]=ue>>8,M[N++]=ue&255):(M[N++]=223,rt.setUint32(N,ue),N+=4);for(let[me,Oe]of H)Ce(me),Ce(Oe)}else{for(let me=0,Oe=xn.length;me<Oe;me++){let Ge=Us[me];if(H instanceof Ge){let Be=xn[me];if(Be.write){Be.type&&(M[N++]=212,M[N++]=Be.type,M[N++]=0);let Mt=Be.write.call(this,H);Mt===H?Array.isArray(H)?ye(H):Se(H):Ce(Mt);return}let Xe=M,We=rt,yt=N;M=null;let jt;try{jt=Be.pack.call(this,H,Mt=>(M=Xe,Xe=null,N+=Mt,N>wt&&De(N),{target:M,targetView:rt,position:N-Mt}),Ce)}finally{Xe&&(M=Xe,rt=We,N=yt,wt=M.length-10)}jt&&(jt.length+N>wt&&De(jt.length+N),N=xa(jt,M,N,Be.type));return}}if(Array.isArray(H))ye(H);else{if(H.toJSON){const me=H.toJSON();if(me!==H)return Ce(me)}if(he==="function")return Ce(this.writeFunction&&this.writeFunction(H));Se(H)}}}else if(he==="boolean")M[N++]=H?195:194;else if(he==="bigint"){if(H<BigInt(1)<<BigInt(63)&&H>=-(BigInt(1)<<BigInt(63)))M[N++]=211,rt.setBigInt64(N,H);else if(H<BigInt(1)<<BigInt(64)&&H>0)M[N++]=207,rt.setBigUint64(N,H);else if(this.largeBigIntToFloat)M[N++]=203,rt.setFloat64(N,Number(H));else{if(this.largeBigIntToString)return Ce(H.toString());if(this.useBigIntExtension&&H<BigInt(2)**BigInt(1023)&&H>-(BigInt(2)**BigInt(1023))){M[N++]=199,N++,M[N++]=66;let ce=[],me;do{let Oe=H&BigInt(255);me=(Oe&BigInt(128))===(H<BigInt(0)?BigInt(128):BigInt(0)),ce.push(Oe),H>>=BigInt(8)}while(!((H===BigInt(0)||H===BigInt(-1))&&me));M[N-2]=ce.length;for(let Oe=ce.length;Oe>0;)M[N++]=Number(ce[--Oe]);return}else throw new RangeError(H+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}N+=8}else if(he==="undefined")this.encodeUndefinedAsNil?M[N++]=192:(M[N++]=212,M[N++]=0,M[N++]=0);else throw new Error("Unknown type: "+he)},Ve=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?H=>{let he;if(this.skipValues){he=[];for(let me in H)(typeof H.hasOwnProperty!="function"||H.hasOwnProperty(me))&&!this.skipValues.includes(H[me])&&he.push(me)}else he=Object.keys(H);let ue=he.length;ue<16?M[N++]=128|ue:ue<65536?(M[N++]=222,M[N++]=ue>>8,M[N++]=ue&255):(M[N++]=223,rt.setUint32(N,ue),N+=4);let ce;if(this.coercibleKeyAsNumber)for(let me=0;me<ue;me++){ce=he[me];let Oe=Number(ce);Ce(isNaN(Oe)?ce:Oe),Ce(H[ce])}else for(let me=0;me<ue;me++)Ce(ce=he[me]),Ce(H[ce])}:H=>{M[N++]=222;let he=N-a;N+=2;let ue=0;for(let ce in H)(typeof H.hasOwnProperty!="function"||H.hasOwnProperty(ce))&&(Ce(ce),Ce(H[ce]),ue++);if(ue>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');M[he+++a]=ue>>8,M[he+a]=ue&255},pt=this.useRecords===!1?Ve:r.progressiveRecords&&!J?H=>{let he,ue=u.transitions||(u.transitions=Object.create(null)),ce=N++-a,me;for(let Oe in H)if(typeof H.hasOwnProperty!="function"||H.hasOwnProperty(Oe)){if(he=ue[Oe],he)ue=he;else{let Ge=Object.keys(H),Be=ue;ue=u.transitions;let Xe=0;for(let We=0,yt=Ge.length;We<yt;We++){let jt=Ge[We];he=ue[jt],he||(he=ue[jt]=Object.create(null),Xe++),ue=he}ce+a+1==N?(N--,ct(ue,Ge,Xe)):Et(ue,Ge,ce,Xe),me=!0,ue=Be[Oe]}Ce(H[Oe])}if(!me){let Oe=ue[fr];Oe?M[ce+a]=Oe:Et(ue,Object.keys(H),ce,0)}}:H=>{let he,ue=u.transitions||(u.transitions=Object.create(null)),ce=0;for(let Oe in H)(typeof H.hasOwnProperty!="function"||H.hasOwnProperty(Oe))&&(he=ue[Oe],he||(he=ue[Oe]=Object.create(null),ce++),ue=he);let me=ue[fr];me?me>=96&&J?(M[N++]=((me-=96)&31)+96,M[N++]=me>>5):M[N++]=me:ct(ue,ue.__keys__||Object.keys(H),ce);for(let Oe in H)(typeof H.hasOwnProperty!="function"||H.hasOwnProperty(Oe))&&Ce(H[Oe])},bt=typeof this.useRecords=="function"&&this.useRecords,Se=bt?H=>{bt(H)?pt(H):Ve(H)}:pt,De=H=>{let he;if(H>16777216){if(H-a>Ms)throw new Error("Packed buffer would be larger than maximum buffer size");he=Math.min(Ms,Math.round(Math.max((H-a)*(H>67108864?1.25:2),4194304)/4096)*4096)}else he=(Math.max(H-a<<2,M.length-1)>>12)+1<<12;let ue=new Hr(he);return rt=ue.dataView||(ue.dataView=new DataView(ue.buffer,0,he)),H=Math.min(H,M.length),M.copy?M.copy(ue,0,a,H):ue.set(M.slice(a,H)),N-=a,a=0,wt=ue.length-10,M=ue},ct=(H,he,ue)=>{let ce=u.nextId;ce||(ce=64),ce<de&&this.shouldShareStructure&&!this.shouldShareStructure(he)?(ce=u.nextOwnId,ce<qe||(ce=de),u.nextOwnId=ce+1):(ce>=qe&&(ce=de),u.nextId=ce+1);let me=he.highByte=ce>=96&&J?ce-96>>5:-1;H[fr]=ce,H.__keys__=he,u[ce-64]=he,ce<de?(he.isShared=!0,u.sharedLength=ce-63,s=!0,me>=0?(M[N++]=(ce&31)+96,M[N++]=me):M[N++]=ce):(me>=0?(M[N++]=213,M[N++]=114,M[N++]=(ce&31)+96,M[N++]=me):(M[N++]=212,M[N++]=114,M[N++]=ce),ue&&(ke+=Ke*ue),ve.length>=F&&(ve.shift()[fr]=0),ve.push(H),Ce(he))},Et=(H,he,ue,ce)=>{let me=M,Oe=N,Ge=wt,Be=a;M=qr,N=0,a=0,M||(qr=M=new Hr(8192)),wt=M.length-10,ct(H,he,ce),qr=M;let Xe=N;if(M=me,N=Oe,wt=Ge,a=Be,Xe>1){let We=N+Xe-1;We>wt&&De(We);let yt=ue+a;M.copyWithin(yt+Xe,yt+1,N),M.set(qr.slice(0,Xe),yt),N=We}else M[ue+a]=qr[0]},St=H=>{let he=ga(H,M,a,N,u,De,(ue,ce,me)=>{if(me)return s=!0;N=ce;let Oe=M;return Ce(ue),nt(),Oe!==M?{position:N,targetView:rt,target:M}:N},this);if(he===0)return Se(H);N=he}}useBuffer(r){M=r,M.dataView||(M.dataView=new DataView(M.buffer,M.byteOffset,M.byteLength)),N=0}set position(r){N=r}get position(){return N}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}Us=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,vs],xn=[{pack(n,r,a){let s=n.getTime()/1e3;if((this.useTimestamp32||n.getMilliseconds()===0)&&s>=0&&s<4294967296){let{target:u,targetView:d,position:m}=r(6);u[m++]=214,u[m++]=255,d.setUint32(m,s)}else if(s>0&&s<4294967296){let{target:u,targetView:d,position:m}=r(10);u[m++]=215,u[m++]=255,d.setUint32(m,n.getMilliseconds()*4e6+(s/1e3/4294967296>>0)),d.setUint32(m+4,s)}else if(isNaN(s)){if(this.onInvalidDate)return r(0),a(this.onInvalidDate());let{target:u,targetView:d,position:m}=r(3);u[m++]=212,u[m++]=255,u[m++]=255}else{let{target:u,targetView:d,position:m}=r(15);u[m++]=199,u[m++]=12,u[m++]=255,d.setUint32(m,n.getMilliseconds()*1e6),d.setBigInt64(m+4,BigInt(Math.floor(s)))}}},{pack(n,r,a){if(this.setAsEmptyObject)return r(0),a({});let s=Array.from(n),{target:u,position:d}=r(this.moreTypes?3:0);this.moreTypes&&(u[d++]=212,u[d++]=115,u[d++]=0),a(s)}},{pack(n,r,a){let{target:s,position:u}=r(this.moreTypes?3:0);this.moreTypes&&(s[u++]=212,s[u++]=101,s[u++]=0),a([n.name,n.message,n.cause])}},{pack(n,r,a){let{target:s,position:u}=r(this.moreTypes?3:0);this.moreTypes&&(s[u++]=212,s[u++]=120,s[u++]=0),a([n.source,n.flags])}},{pack(n,r){this.moreTypes?Hs(n,16,r):$s(Mr?Buffer.from(n):new Uint8Array(n),r)}},{pack(n,r){let a=n.constructor;a!==js&&this.moreTypes?Hs(n,Ns.indexOf(a.name),r):$s(n,r)}},{pack(n,r){let{target:a,position:s}=r(1);a[s]=193}}];function Hs(n,r,a,s){let u=n.byteLength;if(u+1<256){var{target:d,position:m}=a(4+u);d[m++]=199,d[m++]=u+1}else if(u+1<65536){var{target:d,position:m}=a(5+u);d[m++]=200,d[m++]=u+1>>8,d[m++]=u+1&255}else{var{target:d,position:m,targetView:b}=a(7+u);d[m++]=201,b.setUint32(m,u+1),m+=4}d[m++]=116,d[m++]=r,n.buffer||(n=new Uint8Array(n)),d.set(new Uint8Array(n.buffer,n.byteOffset,n.byteLength),m)}function $s(n,r){let a=n.byteLength;var s,u;if(a<256){var{target:s,position:u}=r(a+2);s[u++]=196,s[u++]=a}else if(a<65536){var{target:s,position:u}=r(a+3);s[u++]=197,s[u++]=a>>8,s[u++]=a&255}else{var{target:s,position:u,targetView:d}=r(a+5);s[u++]=198,d.setUint32(u,a),u+=4}s.set(n,u)}function xa(n,r,a,s){let u=n.length;switch(u){case 1:r[a++]=212;break;case 2:r[a++]=213;break;case 4:r[a++]=214;break;case 8:r[a++]=215;break;case 16:r[a++]=216;break;default:u<256?(r[a++]=199,r[a++]=u):u<65536?(r[a++]=200,r[a++]=u>>8,r[a++]=u&255):(r[a++]=201,r[a++]=u>>24,r[a++]=u>>16&255,r[a++]=u>>8&255,r[a++]=u&255)}return r[a++]=s,r.set(n,a),a+=u,a}function qa(n,r){let a,s=r.length*6,u=n.length-s;for(;a=r.pop();){let d=a.offset,m=a.id;n.copyWithin(d+s,d,u),s-=6;let b=d+s;n[b++]=214,n[b++]=105,n[b++]=m>>24,n[b++]=m>>16&255,n[b++]=m>>8&255,n[b++]=m&255,u=d}return n}function zs(n,r,a){if(lt.length>0){rt.setUint32(lt.position+n,N+a-lt.position-n),lt.stringsPosition=N-n;let s=lt;lt=null,r(s[0]),r(s[1])}}function va(n,r){return n.isCompatible=a=>{let s=!a||(r.lastNamedStructuresLength||0)===a.length;return s||r._mergeStructures(a),s},n}let Ws=new wa({useRecords:!1});Ws.pack,Ws.pack;const Ea=512,Sa=1024,ka=2048,Aa=n=>pa(Mn(n)),Ia=()=>{let n=new Map;return{set:a=>{n=new Map([...n,...a])},get:()=>n}},Le=(n,...r)=>{let a="";const s=[];for(let u=0;u<n.length;u++)if(a+=n[u],u<r.length){const d=r[u];Fa(d)||Ta(d)?a+=d.sql:(a+="?",s.push(d))}return{sql:a,parameters:s}};Le.identifier=n=>({type:"SqlIdentifier",sql:`"${n.replace(/"/g,'""')}"`}),Le.raw=n=>({type:"RawSql",sql:n});const Ta=n=>typeof n=="object"&&n!=null&&"type"in n&&n.type==="SqlIdentifier",Fa=n=>typeof n=="object"&&n!=null&&"type"in n&&n.type==="RawSql";Le.prepared=(n,...r)=>({...Le(n,...r),options:{prepare:!0}});const Oa=new RegExp(`\\b(${["alter","create","delete","drop","insert","replace","update"].join("|")})\\b`),Pa=n=>Oa.test(n),La=n=>({exec:async r=>{n.log("[sql]",r);const a=await n.exec(r);return n.log("[sql]",a),a},transaction:r=>async a=>{await n.transaction(r)(async()=>{if(r==="shared"){await a();return}try{n.log("[sql] begin"),await n.exec(Le`begin;`),await a(),n.log("[sql] commit"),await n.exec(Le`commit;`)}catch(s){throw n.log("[sql] rollback"),await n.exec(Le`rollback;`),s}})},export:n.export}),Ca=n=>async r=>{var d;if(!((d=n.options)!=null&&d.logQueryExecutionTime))return r();const a=performance.now(),s=await r(),u=performance.now()-a;return console.log(`QueryExecutionTime: ${u.toString()}ms`,n),s},Da=n=>async r=>{const{rows:a}=await n.exec({...r,sql:`EXPLAIN QUERY PLAN ${r.sql}`});console.log("ExplainQueryPlan",r),console.log(Ra(a))},Ra=n=>n.map(r=>{let a=r.parent,s=0;do{const u=n.find(d=>d.id===a);if(!u)break;a=u.parent,s++}while(!0);return`${"  ".repeat(s)}${r.detail}`}).join(`
`),qn=n=>r=>`evolu:${n.name}:${r}`;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Na(n){return n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"}function Qs(n){if(!Number.isSafeInteger(n)||n<0)throw new Error("positive integer expected, got "+n)}function $r(n,...r){if(!Na(n))throw new Error("Uint8Array expected");if(r.length>0&&!r.includes(n.length))throw new Error("Uint8Array expected of length "+r+", got length="+n.length)}function Ba(n){if(typeof n!="function"||typeof n.create!="function")throw new Error("Hash should be wrapped by utils.createHasher");Qs(n.outputLen),Qs(n.blockLen)}function zr(n,r=!0){if(n.destroyed)throw new Error("Hash instance has been destroyed");if(r&&n.finished)throw new Error("Hash#digest() has already been called")}function Ua(n,r){$r(n);const a=r.outputLen;if(n.length<a)throw new Error("digestInto() expects output buffer of length at least "+a)}function _r(...n){for(let r=0;r<n.length;r++)n[r].fill(0)}function vn(n){return new DataView(n.buffer,n.byteOffset,n.byteLength)}function Dt(n,r){return n<<32-r|n>>>r}function ja(n){if(typeof n!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(n))}function En(n){return typeof n=="string"&&(n=ja(n)),$r(n),n}class Vs{}function Gs(n){const r=s=>n().update(En(s)).digest(),a=n();return r.outputLen=a.outputLen,r.blockLen=a.blockLen,r.create=()=>n(),r}function Ma(n,r,a,s){if(typeof n.setBigUint64=="function")return n.setBigUint64(r,a,s);const u=BigInt(32),d=BigInt(4294967295),m=Number(a>>u&d),b=Number(a&d),B=s?4:0,X=s?0:4;n.setUint32(r+B,m,s),n.setUint32(r+X,b,s)}function Ha(n,r,a){return n&r^~n&a}function $a(n,r,a){return n&r^n&a^r&a}class Ks extends Vs{constructor(r,a,s,u){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=r,this.outputLen=a,this.padOffset=s,this.isLE=u,this.buffer=new Uint8Array(r),this.view=vn(this.buffer)}update(r){zr(this),r=En(r),$r(r);const{view:a,buffer:s,blockLen:u}=this,d=r.length;for(let m=0;m<d;){const b=Math.min(u-this.pos,d-m);if(b===u){const B=vn(r);for(;u<=d-m;m+=u)this.process(B,m);continue}s.set(r.subarray(m,m+b),this.pos),this.pos+=b,m+=b,this.pos===u&&(this.process(a,0),this.pos=0)}return this.length+=r.length,this.roundClean(),this}digestInto(r){zr(this),Ua(r,this),this.finished=!0;const{buffer:a,view:s,blockLen:u,isLE:d}=this;let{pos:m}=this;a[m++]=128,_r(this.buffer.subarray(m)),this.padOffset>u-m&&(this.process(s,0),m=0);for(let F=m;F<u;F++)a[F]=0;Ma(s,u-8,BigInt(this.length*8),d),this.process(s,0);const b=vn(r),B=this.outputLen;if(B%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const X=B/4,ie=this.get();if(X>ie.length)throw new Error("_sha2: outputLen bigger than state");for(let F=0;F<X;F++)b.setUint32(4*F,ie[F],d)}digest(){const{buffer:r,outputLen:a}=this;this.digestInto(r);const s=r.slice(0,a);return this.destroy(),s}_cloneInto(r){r||(r=new this.constructor),r.set(...this.get());const{blockLen:a,buffer:s,length:u,finished:d,destroyed:m,pos:b}=this;return r.destroyed=m,r.finished=d,r.length=u,r.pos=b,u%a&&r.buffer.set(s),r}clone(){return this._cloneInto()}}const Xt=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),gt=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),Wr=BigInt(2**32-1),Js=BigInt(32);function za(n,r=!1){return r?{h:Number(n&Wr),l:Number(n>>Js&Wr)}:{h:Number(n>>Js&Wr)|0,l:Number(n&Wr)|0}}function Wa(n,r=!1){const a=n.length;let s=new Uint32Array(a),u=new Uint32Array(a);for(let d=0;d<a;d++){const{h:m,l:b}=za(n[d],r);[s[d],u[d]]=[m,b]}return[s,u]}const Xs=(n,r,a)=>n>>>a,Ys=(n,r,a)=>n<<32-a|r>>>a,dr=(n,r,a)=>n>>>a|r<<32-a,hr=(n,r,a)=>n<<32-a|r>>>a,Qr=(n,r,a)=>n<<64-a|r>>>a-32,Vr=(n,r,a)=>n>>>a-32|r<<64-a;function Ut(n,r,a,s){const u=(r>>>0)+(s>>>0);return{h:n+a+(u/2**32|0)|0,l:u|0}}const Qa=(n,r,a)=>(n>>>0)+(r>>>0)+(a>>>0),Va=(n,r,a,s)=>r+a+s+(n/2**32|0)|0,Ga=(n,r,a,s)=>(n>>>0)+(r>>>0)+(a>>>0)+(s>>>0),Ka=(n,r,a,s,u)=>r+a+s+u+(n/2**32|0)|0,Ja=(n,r,a,s,u)=>(n>>>0)+(r>>>0)+(a>>>0)+(s>>>0)+(u>>>0),Xa=(n,r,a,s,u,d)=>r+a+s+u+d+(n/2**32|0)|0,Ya=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Yt=new Uint32Array(64);class Za extends Ks{constructor(r=32){super(64,r,8,!1),this.A=Xt[0]|0,this.B=Xt[1]|0,this.C=Xt[2]|0,this.D=Xt[3]|0,this.E=Xt[4]|0,this.F=Xt[5]|0,this.G=Xt[6]|0,this.H=Xt[7]|0}get(){const{A:r,B:a,C:s,D:u,E:d,F:m,G:b,H:B}=this;return[r,a,s,u,d,m,b,B]}set(r,a,s,u,d,m,b,B){this.A=r|0,this.B=a|0,this.C=s|0,this.D=u|0,this.E=d|0,this.F=m|0,this.G=b|0,this.H=B|0}process(r,a){for(let F=0;F<16;F++,a+=4)Yt[F]=r.getUint32(a,!1);for(let F=16;F<64;F++){const J=Yt[F-15],de=Yt[F-2],qe=Dt(J,7)^Dt(J,18)^J>>>3,ve=Dt(de,17)^Dt(de,19)^de>>>10;Yt[F]=ve+Yt[F-7]+qe+Yt[F-16]|0}let{A:s,B:u,C:d,D:m,E:b,F:B,G:X,H:ie}=this;for(let F=0;F<64;F++){const J=Dt(b,6)^Dt(b,11)^Dt(b,25),de=ie+J+Ha(b,B,X)+Ya[F]+Yt[F]|0,ve=(Dt(s,2)^Dt(s,13)^Dt(s,22))+$a(s,u,d)|0;ie=X,X=B,B=b,b=m+de|0,m=d,d=u,u=s,s=de+ve|0}s=s+this.A|0,u=u+this.B|0,d=d+this.C|0,m=m+this.D|0,b=b+this.E|0,B=B+this.F|0,X=X+this.G|0,ie=ie+this.H|0,this.set(s,u,d,m,b,B,X,ie)}roundClean(){_r(Yt)}destroy(){this.set(0,0,0,0,0,0,0,0),_r(this.buffer)}}const Zs=Wa(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(n=>BigInt(n))),el=Zs[0],tl=Zs[1],Zt=new Uint32Array(80),er=new Uint32Array(80);class rl extends Ks{constructor(r=64){super(128,r,16,!1),this.Ah=gt[0]|0,this.Al=gt[1]|0,this.Bh=gt[2]|0,this.Bl=gt[3]|0,this.Ch=gt[4]|0,this.Cl=gt[5]|0,this.Dh=gt[6]|0,this.Dl=gt[7]|0,this.Eh=gt[8]|0,this.El=gt[9]|0,this.Fh=gt[10]|0,this.Fl=gt[11]|0,this.Gh=gt[12]|0,this.Gl=gt[13]|0,this.Hh=gt[14]|0,this.Hl=gt[15]|0}get(){const{Ah:r,Al:a,Bh:s,Bl:u,Ch:d,Cl:m,Dh:b,Dl:B,Eh:X,El:ie,Fh:F,Fl:J,Gh:de,Gl:qe,Hh:ve,Hl:ke}=this;return[r,a,s,u,d,m,b,B,X,ie,F,J,de,qe,ve,ke]}set(r,a,s,u,d,m,b,B,X,ie,F,J,de,qe,ve,ke){this.Ah=r|0,this.Al=a|0,this.Bh=s|0,this.Bl=u|0,this.Ch=d|0,this.Cl=m|0,this.Dh=b|0,this.Dl=B|0,this.Eh=X|0,this.El=ie|0,this.Fh=F|0,this.Fl=J|0,this.Gh=de|0,this.Gl=qe|0,this.Hh=ve|0,this.Hl=ke|0}process(r,a){for(let ye=0;ye<16;ye++,a+=4)Zt[ye]=r.getUint32(a),er[ye]=r.getUint32(a+=4);for(let ye=16;ye<80;ye++){const Ce=Zt[ye-15]|0,Ve=er[ye-15]|0,pt=dr(Ce,Ve,1)^dr(Ce,Ve,8)^Xs(Ce,Ve,7),bt=hr(Ce,Ve,1)^hr(Ce,Ve,8)^Ys(Ce,Ve,7),Se=Zt[ye-2]|0,De=er[ye-2]|0,ct=dr(Se,De,19)^Qr(Se,De,61)^Xs(Se,De,6),Et=hr(Se,De,19)^Vr(Se,De,61)^Ys(Se,De,6),St=Ga(bt,Et,er[ye-7],er[ye-16]),H=Ka(St,pt,ct,Zt[ye-7],Zt[ye-16]);Zt[ye]=H|0,er[ye]=St|0}let{Ah:s,Al:u,Bh:d,Bl:m,Ch:b,Cl:B,Dh:X,Dl:ie,Eh:F,El:J,Fh:de,Fl:qe,Gh:ve,Gl:ke,Hh:Ke,Hl:nt}=this;for(let ye=0;ye<80;ye++){const Ce=dr(F,J,14)^dr(F,J,18)^Qr(F,J,41),Ve=hr(F,J,14)^hr(F,J,18)^Vr(F,J,41),pt=F&de^~F&ve,bt=J&qe^~J&ke,Se=Ja(nt,Ve,bt,tl[ye],er[ye]),De=Xa(Se,Ke,Ce,pt,el[ye],Zt[ye]),ct=Se|0,Et=dr(s,u,28)^Qr(s,u,34)^Qr(s,u,39),St=hr(s,u,28)^Vr(s,u,34)^Vr(s,u,39),H=s&d^s&b^d&b,he=u&m^u&B^m&B;Ke=ve|0,nt=ke|0,ve=de|0,ke=qe|0,de=F|0,qe=J|0,{h:F,l:J}=Ut(X|0,ie|0,De|0,ct|0),X=b|0,ie=B|0,b=d|0,B=m|0,d=s|0,m=u|0;const ue=Qa(ct,St,he);s=Va(ue,De,Et,H),u=ue|0}({h:s,l:u}=Ut(this.Ah|0,this.Al|0,s|0,u|0)),{h:d,l:m}=Ut(this.Bh|0,this.Bl|0,d|0,m|0),{h:b,l:B}=Ut(this.Ch|0,this.Cl|0,b|0,B|0),{h:X,l:ie}=Ut(this.Dh|0,this.Dl|0,X|0,ie|0),{h:F,l:J}=Ut(this.Eh|0,this.El|0,F|0,J|0),{h:de,l:qe}=Ut(this.Fh|0,this.Fl|0,de|0,qe|0),{h:ve,l:ke}=Ut(this.Gh|0,this.Gl|0,ve|0,ke|0),{h:Ke,l:nt}=Ut(this.Hh|0,this.Hl|0,Ke|0,nt|0),this.set(s,u,d,m,b,B,X,ie,F,J,de,qe,ve,ke,Ke,nt)}roundClean(){_r(Zt,er)}destroy(){_r(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const nl=Gs(()=>new Za),sl=Gs(()=>new rl),il=nl,ol=nr(cr.from(12)),al=n=>il(n).slice(0,ol),ll=n=>{let r=BigInt(0),a=BigInt(0);for(let s=0;s<6;s++)r=r<<BigInt(8)|BigInt(n[s]);for(let s=6;s<12;s++)a=a<<BigInt(8)|BigInt(n[s]);return[r.toString(),a.toString()]},cl=Le`
  insert into evolu_message (l, t, h1, h2, c)
  values (1, $t, $h1, $h2, 1)
  on conflict do nothing;
`.sql,It=(n,r)=>Le.raw(`(${n} | ${r}) - (${n} & ${r})`),ul=Le`
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
      select t, ${It("$h1","h1")}, ${It("$h2","h2")} from p where h1 is not null
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
`.sql,fl=Le`
  insert into evolu_message (t, l)
  values ($t, $l)
  on conflict do nothing;
`.sql,_l=Le`
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
        ${It("c2.h1","c3.h1")},
        ${It("c2.h2","c3.h2")},
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
          ${It("$h1","h1")},
          (
            select ${It("c4.h1","n.h1")}
            from c4
            where c4.l = (select max(l) from c4 where c4.l < n.l)
          )
        ),
        iif(
          l > $l,
          ${It("$h2","h2")},
          (
            select ${It("c4.h2","n.h2")}
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
`.sql;Le`
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
        iif(b, h1, iif(ic + nc <= c, ${It("h1","nh1")}, h1)),
        iif(b, h2, iif(ic + nc <= c, ${It("h2","nh2")}, h2))
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
        ${It("rs5.oh1","rs4.h1")},
        ${It("rs5.oh2","rs4.h2")}
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
`.sql;const dl=n=>n+1,Gr=tt("Millis",ys(0xffffffffffff)(cr)),Sn=tt("Counter",ys(65535)(cr));fn({millis:Gr,counter:Sn,nodeId:xs});const hl=nr(Gr.from(0)),ei=nr(Sn.from(0)),ti=({millis:n=hl,counter:r=ei,nodeId:a="0000000000000000"}={})=>({millis:n,counter:r,nodeId:a}),ri=n=>[new Date(n.millis).toISOString(),n.counter.toString(16).toUpperCase().padStart(4,"0"),n.nodeId].join("-"),kn=n=>{const r=n.split("-");return{millis:Date.parse(r.slice(0,3).join("-")).valueOf(),counter:parseInt(r[3],16),nodeId:r[4]}},pl=n=>r=>{const a=Gr.from(n.now());if(!a.ok)return Te({type:"TimestampTimeOutOfRangeError"});const s=Math.max(a.value,...r);return s-a.value>n.maxDrift?Te({type:"TimestampDriftError",now:a.value,next:s}):Ie(s)},ml=n=>{const r=Sn.from(dl(n));return r.ok?Ie(r.value):Te({type:"TimestampCounterOverflowError"})},gl=n=>r=>{const a=pl(n)([r.millis]);if(!a.ok)return a;const s=a.value===r.millis?ml(r.counter):Ie(ei);return s.ok?Ie({millis:a.value,counter:s.value,nodeId:r.nodeId}):s};nr(cr.from(16)),Mn("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");const ni=n=>{const{millis:r,counter:a,nodeId:s}=n,u=new Uint8Array(16),d=BigInt(r);u[0]=Number(d>>40n&0xffn),u[1]=Number(d>>32n&0xffn),u[2]=Number(d>>24n&0xffn),u[3]=Number(d>>16n&0xffn),u[4]=Number(d>>8n&0xffn),u[5]=Number(d&0xffn),u[6]=a>>8&255,u[7]=a&255;for(let m=0;m<8;m++){const b=parseInt(s.slice(m*2,m*2+2),16);u[8+m]=b}return u},si=nr(cr.from(1)),bl=n=>yl(n).unwrap(),yl=n=>xl(n),wl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-",xl=n=>{const r=n.length*6,a=Math.ceil(r/8),s=new globalThis.Uint8Array(a);let u=0,d=0,m=0;for(const b of n){const B=wl.indexOf(b);for(u=u<<6|B,d+=6;d>=8;)d-=8,s[m++]=u>>d&255}return d>0&&m<a&&(s[m]=u<<8-d&255),new Bi(s)},ii=()=>({now:()=>Date.now()}),ql={createLogger:n=>{const r=ii();return{log:(...s)=>{if(n.logger.level==="off")return;const u=new Date(r.now()),d=u.getHours().toString().padStart(2,"0"),m=u.getMinutes().toString().padStart(2,"0"),b=u.getSeconds().toString().padStart(2,"0"),B=u.getMilliseconds().toString().padStart(3,"0"),X=`${d}:${m}:${b}:${B}`;globalThis.console.log(`${X} [${n.name}]`,...s)}}}},oi=()=>({urlAlphabet:Ui,customAlphabet:Hi,nanoid:$n}),vl=()=>({next:()=>Math.random()});class ai extends Vs{constructor(r,a){super(),this.finished=!1,this.destroyed=!1,Ba(r);const s=En(a);if(this.iHash=r.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const u=this.blockLen,d=new Uint8Array(u);d.set(s.length>u?r.create().update(s).digest():s);for(let m=0;m<d.length;m++)d[m]^=54;this.iHash.update(d),this.oHash=r.create();for(let m=0;m<d.length;m++)d[m]^=106;this.oHash.update(d),_r(d)}update(r){return zr(this),this.iHash.update(r),this}digestInto(r){zr(this),$r(r,this.outputLen),this.finished=!0,this.iHash.digestInto(r),this.oHash.update(r),this.oHash.digestInto(r),this.destroy()}digest(){const r=new Uint8Array(this.oHash.outputLen);return this.digestInto(r),r}_cloneInto(r){r||(r=Object.create(Object.getPrototypeOf(this),{}));const{oHash:a,iHash:s,finished:u,destroyed:d,blockLen:m,outputLen:b}=this;return r=r,r.finished=u,r.destroyed=d,r.blockLen=m,r.outputLen=b,r.oHash=a._cloneInto(r.oHash),r.iHash=s._cloneInto(r.iHash),r}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const An=(n,r,a)=>new ai(n,r).update(a).digest();An.create=(n,r)=>new ai(n,r);const li=sl,El=n=>r=>{const a=Sl(r),s=ci(a,["Evolu","Owner Id"]);let u="";for(let m=0;m<21;m++)u=u+n.urlAlphabet[s[m]&63];const d=ci(a,["Evolu","Encryption Key"]);return{ownerId:u,encryptionKey:d}},Sl=n=>jo(n),ci=(n,r)=>{let a=An(li,"Symmetric key seed",n);for(const s of r){const u=new TextEncoder().encode(s),d=new Uint8Array(u.byteLength+1);d[0]=0,d.set(u,1),a=An(li,a.slice(0,32),d)}return a.slice(32,64)},kl=n=>{const a=n.customAlphabet("0123456789abcdef",16)();return ti({nodeId:a})};nr(cr.from(8)),fn({name:_t,sql:_t});const ui=(n,r)=>n.name===r.name&&n.sql===r.sql,Al=n=>{let r=Dr;const{promise:a,resolve:s}=Promise.withResolvers(),u={init:async m=>{const{createSqlite:b,createLogger:B,...X}=n,ie=B(m.config),F=La({...ie,...b(m.config)}),J={...F,...ie,...X,...m.config,...Ia()};await F.transaction("exclusive")(async()=>{const de=await Kr(F)();await In(F)(m.dbSchema,de),await Rl(J)(de);const qe=de.tables.some(ke=>ke.name==="evolu_owner"),ve=qe?await Tl(F):await fi(J)(m.config.mnemonic);!qe&&at(m.initialData)&&await gi(J)(m.initialData),r({type:"onInit",owner:ve}),s(J)})},mutate:async m=>{const b=await a;await b.transaction("exclusive")(async()=>{const B=[],X=[];for(const F of m.changes)F.table.startsWith("_")?X.push(F):B.push(F);for(const F of X)if(F.values.isDeleted===1)await b.exec(Le`
              delete from ${Le.identifier(F.table)}
              where id = ${F.id};
            `);else{const J=Gr.from(b.now());if(!J.ok){r({type:"onError",error:{type:"TimestampTimeOutOfRangeError"}});return}const de={timestamp:ti({millis:J.value}),change:F};await bi(b)(de)}const ie=async()=>{b.log("[db]","onChange"),r({type:"onChange",patches:await wi(b)(m.subscribedQueries),onCompleteIds:m.onCompleteIds})};if(st(B)){const F=await gi(b)(B,ie);if(!F.ok){r({type:"onError",error:F.error});return}}else await ie()})},query:async m=>{const b=await a;await b.transaction("shared")(async()=>{r({type:"onChange",patches:await wi(b)(m.queries),onCompleteIds:[]})})},reset:async m=>{const b=await a;await b.transaction("last")(async()=>{if(await Nl(b),m.restore){const B=await Kr(b)();await In(b)(m.restore.dbSchema,B),await fi(b)(m.restore.mnemonic)}r({type:"onReset",onCompleteId:m.onCompleteId,reload:m.reload})})},ensureSchema:async m=>{const b=await a;await b.transaction("exclusive")(async()=>{const B=await Kr(b)();await In(b)(m.dbSchema,B)})},export:async m=>{const b=await a;await b.transaction("exclusive")(async()=>{const B=await b.export();r({type:"onExport",onCompleteId:m.onCompleteId,file:B})})}};return{postMessage:m=>{u[m.type](m).catch(b=>{r({type:"onError",error:Hn(b)})})},onMessage:m=>{r=m}}},Kr=({exec:n})=>async r=>{const a=new Map,{rows:s}=await n(Le`
      select
        sqlite_master.name as tableName,
        table_info.name as columnName
      from
        sqlite_master
        join pragma_table_info(sqlite_master.name) as table_info;
    `);s.forEach(b=>{var ie;const{tableName:B,columnName:X}=b;a.has(B)||a.set(B,[]),(ie=a.get(B))==null||ie.push(X)});const u=Array.from(a,([b,B])=>({name:b,columns:B})),{rows:d}=await n(r?Le`
            select name, sql
            from sqlite_master
            where type = 'index' and name not like 'sqlite_%';
          `:Le`
            select name, sql
            from sqlite_master
            where
              type = 'index'
              and name not like 'sqlite_%'
              and name not like 'evolu_%';
          `),m=d.map(b=>({name:b.name,sql:b.sql.replace("CREATE INDEX","create index").replace("CREATE UNIQUE INDEX","create unique index")}));return{tables:u,indexes:m}},In=({exec:n})=>async(r,a,s)=>{const u=[];r.tables.forEach(d=>{const m=a.tables.find(b=>b.name===d.name);m?d.columns.filter(b=>!m.columns.includes(b)).forEach(b=>{u.push(Le`
              alter table ${Le.identifier(d.name)}
              add column ${Le.identifier(b)} blob;
            `.sql)}):u.push(Il(d.name,d.columns))}),(s==null?void 0:s.ignoreIndexes)!==!0&&(a.indexes.filter(d=>!r.indexes.some(m=>ui(m,d))).forEach(d=>{u.push(Le`drop index ${Le.identifier(d.name)};`.sql)}),r.indexes.filter(d=>!a.indexes.some(m=>ui(d,m))).forEach(d=>{u.push(`${d.sql};`)}));for(const d of u)await n({sql:d})},Il=(n,r)=>`
      create table ${Le.identifier(n).sql} (
      "id" text primary key,
      ${r.filter(a=>a!=="id").map(a=>`${Le.identifier(a).sql} blob`).join(", ")}
    );
  `,Tl=async({exec:n})=>{const{rows:r}=await n(Le`
    select id, mnemonic, encryptionKey, timestamp, protocolVersion
    from evolu_owner
    limit 1;
  `),a=r[0];return{id:a.id,mnemonic:a.mnemonic,encryptionKey:a.encryptionKey,protocolVersion:a.protocolVersion,nodeId:kn(a.timestamp).nodeId}},Fl=()=>Co(is,128),fi=n=>async(r=Fl())=>{const{ownerId:a,encryptionKey:s}=El(n)(r),u=kl(n),d={mnemonic:r,id:a,encryptionKey:s,nodeId:u.nodeId,protocolVersion:si};for(const m of[_i("client"),di,hi,pi,mi,Ol,Le`
        insert into evolu_owner
          (id, mnemonic, encryptionKey, timestamp, protocolVersion)
        values
          (
            ${d.id},
            ${d.mnemonic},
            ${d.encryptionKey},
            ${ri(u)},
            ${si}
          );
      `])await n.exec(m);return d},_i=n=>n==="client"?Le`
        create table evolu_message (
          t blob primary key,
          h1 integer,
          h2 integer,
          c integer,
          l integer not null
        )
        strict;
      `:Le`
        create table evolu_message (
          t blob primary key,
          h1 integer,
          h2 integer,
          c integer,
          l integer not null,
          d blob not null
        )
        strict;
      `,di=Le`
  create index evolu_message_l_t_h1_h2_c on evolu_message (l, t, h1, h2, c);
`,hi=Le`
  create table evolu_history (
    timestamp blob not null,
    "table" text not null,
    "row" blob not null,
    "column" text not null,
    value any
  )
  strict;
`,pi=Le`
  create unique index evolu_history_row_column_table_timestampDesc on evolu_history (
    "row",
    "column",
    "table",
    timestamp desc
  );
`,mi=Le`
  create index evolu_history_table_timestamp on evolu_history (timestamp);
`,Ol=Le`
  create table evolu_owner (
    id text not null,
    mnemonic text not null,
    encryptionKey blob not null,
    timestamp text not null,
    protocolVersion integer not null
  )
  strict;
`,gi=n=>async(r,a)=>{let s=await n.exec(Le`select timestamp from evolu_owner limit 1;`).then(({rows:[d]})=>kn(d.timestamp));const u=[];for(const d of r){const m=gl(n)(s);if(!m.ok)return m;s=m.value,u.push({timestamp:s,change:d})}return await Pl(n)(u),a&&await a(),await n.exec(Le.prepared`
      update evolu_owner
      set timestamp = ${ri(s)};
    `),Ie(u)},Pl=n=>async r=>{for(const a of r)await bi(n)(a),await yi(n)(a)},bi=n=>async r=>{const a=new Date(r.timestamp.millis).toISOString(),s=ni(r.timestamp);for(const[u,d]of $i(r.change.values))await n.exec(Le.prepared`
        with
          lastTimestamp as (
            select timestamp
            from evolu_history
            where
              "row" = ${r.change.id}
              and "column" = ${u}
              and "table" = ${r.change.table}
            order by timestamp desc
            limit 1
          )
        insert into ${Le.identifier(r.change.table)}
          ("id", ${Le.identifier(u)}, createdAt, updatedAt)
        select ${r.change.id}, ${d}, ${a}, ${a}
        where
          (select timestamp from lastTimestamp) is null
          or (select timestamp from lastTimestamp) < ${s}
        on conflict ("id") do update
          set
            ${Le.identifier(u)} = ${d},
            updatedAt = ${a}
          where
            (select timestamp from lastTimestamp) is null
            or (select timestamp from lastTimestamp) < ${s};
      `)},yi=n=>async r=>{const a=Dl(n),s=[],u=ni(r.timestamp),[d,m]=ll(al(u)),b=bl(r.change.id);a===1?s.push({sql:cl,parameters:{$t:u,$h1:d,$h2:m},options:{prepare:!0}},{sql:ul,parameters:{$t:u,$h1:d,$h2:m},options:{prepare:!0}}):s.push({sql:fl,parameters:{$t:u,$l:a}},{sql:_l,parameters:{$t:u,$l:a,$h1:d,$h2:m}}),Object.entries(r.change.values).forEach(([B,X])=>{s.push(Le.prepared`
        insert or ignore into evolu_history
          (timestamp, "table", "row", "column", value)
        values
          (${u}, ${r.change.table}, ${b}, ${B}, ${X});
      `)});for(const B of s)await n.exec(B)},Ll=.25,Cl=32,Dl=n=>{let r=1;for(;n.next()<=Ll&&r<Cl;)r+=1;return r},wi=n=>async r=>{var d;const a=[];for(const m of r){const b=Aa(m),{rows:B}=await n.exec(b);a.push([m,B]),(d=b.options)!=null&&d.logExplainQueryPlan&&await Da(n)(b)}const s=n.get();n.set(a);const u=n.get();return r.map(m=>({query:m,patches:na(s.get(m),u.get(m)??[])}))},Rl=({exec:n,...r})=>async a=>{if(!(a.tables.some(d=>d.name==="evolu_owner")&&!a.tables.some(d=>d.name==="evolu_history")))return;for(const d of[Le`alter table evolu_owner drop column merkleTree;`,Le`alter table evolu_owner add column protocolVersion blob;`,Le`update evolu_owner set protocolVersion = 1;`])await n(d);const{rows:u}=await n(Le`
      select timestamp, "table", "row", "column", value from evolu_message;
    `);for(const d of[Le`drop table evolu_message;`,_i("client"),hi])await n(d);for(const d of u){const m=d.value;await yi({exec:n,...r})({timestamp:kn(d.timestamp),change:{id:d.row,table:d.table,values:{[d.column]:m}}})}for(const d of[di,pi,mi])await n(d)},Nl=async n=>{const r=await Kr(n)();for(const a of r.tables)await n.exec(Le`drop table ${Le.identifier(a.name)};`)},Bl=n=>{n.onMessage(r=>{postMessage(r)}),self.onmessage=r=>{n.postMessage(r.data)}};var Tn=(()=>{var n=self.location.href;return function(r={}){var a,s=r,u,d,m=new Promise((e,t)=>{u=e,d=t}),b=typeof window=="object",B=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer";const X=globalThis.sqlite3InitModuleState||Object.assign(Object.create(null),{debugModule:()=>{}});delete globalThis.sqlite3InitModuleState,X.debugModule("globalThis.location =",globalThis.location);var ie=Object.assign({},s),F="./this.program",J="";function de(e){return s.locateFile?s.locateFile(e,J):J+e}var qe,ve;(b||B)&&(B?J=self.location.href:typeof document<"u"&&document.currentScript&&(J=document.currentScript.src),n&&(J=n),J.startsWith("blob:")?J="":J=J.substr(0,J.replace(/[?#].*/,"").lastIndexOf("/")+1),B&&(ve=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),qe=e=>fetch(e,{credentials:"same-origin"}).then(t=>t.ok?t.arrayBuffer():Promise.reject(new Error(t.status+" : "+t.url))));var ke=s.print||console.log.bind(console),Ke=s.printErr||console.error.bind(console);Object.assign(s,ie),ie=null,s.arguments&&s.arguments,s.thisProgram&&(F=s.thisProgram);var nt=s.wasmBinary,ye,Ce=!1,Ve,pt,bt,Se,De,ct;function Et(){var e=ye.buffer;s.HEAP8=Ve=new Int8Array(e),s.HEAP16=bt=new Int16Array(e),s.HEAPU8=pt=new Uint8Array(e),s.HEAPU16=new Uint16Array(e),s.HEAP32=Se=new Int32Array(e),s.HEAPU32=De=new Uint32Array(e),s.HEAPF32=new Float32Array(e),s.HEAPF64=new Float64Array(e),s.HEAP64=ct=new BigInt64Array(e),s.HEAPU64=new BigUint64Array(e)}if(s.wasmMemory)ye=s.wasmMemory;else{var St=s.INITIAL_MEMORY||16777216;ye=new WebAssembly.Memory({initial:St/65536,maximum:32768})}Et();var H=[],he=[],ue=[];function ce(){var e=s.preRun;e&&(typeof e=="function"&&(e=[e]),e.forEach(Ge)),Pn(H)}function me(){!s.noFSInit&&!_.initialized&&_.init(),_.ignorePermissions=!1,Pn(he)}function Oe(){var e=s.postRun;e&&(typeof e=="function"&&(e=[e]),e.forEach(Xe)),Pn(ue)}function Ge(e){H.unshift(e)}function Be(e){he.unshift(e)}function Xe(e){ue.unshift(e)}var We=0,yt=null;function jt(e){return e}function Mt(e){var t;We++,(t=s.monitorRunDependencies)==null||t.call(s,We)}function Jr(e){var i;if(We--,(i=s.monitorRunDependencies)==null||i.call(s,We),We==0&&yt){var t=yt;yt=null,t()}}function Fn(e){var i;(i=s.onAbort)==null||i.call(s,e),e="Aborted("+e+")",Ke(e),Ce=!0,e+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(e);throw d(t),t}var zl="data:application/octet-stream;base64,",qi=e=>e.startsWith(zl);function Wl(){if(s.locateFile){var e="sqlite3.wasm";return qi(e)?e:de(e)}return new URL("/teimtrackr/assets/sqlite3-WT1HU0S9.wasm",self.location.href).href}var On;function vi(e){if(e==On&&nt)return new Uint8Array(nt);if(ve)return ve(e);throw"both async and sync fetching of the wasm failed"}function Ql(e){return nt?Promise.resolve().then(()=>vi(e)):qe(e).then(t=>new Uint8Array(t),()=>vi(e))}function Ei(e,t,i){return Ql(e).then(o=>WebAssembly.instantiate(o,t)).then(i,o=>{Ke(`failed to asynchronously prepare wasm: ${o}`),Fn(o)})}function Vl(e,t,i,o){return!e&&typeof WebAssembly.instantiateStreaming=="function"&&!qi(t)&&typeof fetch=="function"?fetch(t,{credentials:"same-origin"}).then(l=>{var c=WebAssembly.instantiateStreaming(l,i);return c.then(o,function(w){return Ke(`wasm streaming compile failed: ${w}`),Ke("falling back to ArrayBuffer instantiation"),Ei(t,i,o)})}):Ei(t,i,o)}function Gl(){return{env:Oi,wasi_snapshot_preview1:Oi}}function Kl(){var e=Gl();function t(o,l){return q=o.exports,Be(q.__wasm_call_ctors),Jr(),q}Mt();function i(o){t(o.instance)}if(s.instantiateWasm)try{return s.instantiateWasm(e,t)}catch(o){Ke(`Module.instantiateWasm callback failed with error: ${o}`),d(o)}return On??(On=Wl()),Vl(nt,On,e,i).catch(d),{}}var Pn=e=>{e.forEach(t=>t(s))};s.noExitRuntime;var et={isAbs:e=>e.charAt(0)==="/",splitPath:e=>{var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return t.exec(e).slice(1)},normalizeArray:(e,t)=>{for(var i=0,o=e.length-1;o>=0;o--){var l=e[o];l==="."?e.splice(o,1):l===".."?(e.splice(o,1),i++):i&&(e.splice(o,1),i--)}if(t)for(;i;i--)e.unshift("..");return e},normalize:e=>{var t=et.isAbs(e),i=e.substr(-1)==="/";return e=et.normalizeArray(e.split("/").filter(o=>!!o),!t).join("/"),!e&&!t&&(e="."),e&&i&&(e+="/"),(t?"/":"")+e},dirname:e=>{var t=et.splitPath(e),i=t[0],o=t[1];return!i&&!o?".":(o&&(o=o.substr(0,o.length-1)),i+o)},basename:e=>{if(e==="/")return"/";e=et.normalize(e),e=e.replace(/\/$/,"");var t=e.lastIndexOf("/");return t===-1?e:e.substr(t+1)},join:(...e)=>et.normalize(e.join("/")),join2:(e,t)=>et.normalize(e+"/"+t)},Jl=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return e=>crypto.getRandomValues(e);Fn("initRandomDevice")},Si=e=>(Si=Jl())(e),Ht={resolve:(...e)=>{for(var t="",i=!1,o=e.length-1;o>=-1&&!i;o--){var l=o>=0?e[o]:_.cwd();if(typeof l!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!l)return"";t=l+"/"+t,i=et.isAbs(l)}return t=et.normalizeArray(t.split("/").filter(c=>!!c),!i).join("/"),(i?"/":"")+t||"."},relative:(e,t)=>{e=Ht.resolve(e).substr(1),t=Ht.resolve(t).substr(1);function i(V){for(var oe=0;oe<V.length&&V[oe]==="";oe++);for(var le=V.length-1;le>=0&&V[le]==="";le--);return oe>le?[]:V.slice(oe,le-oe+1)}for(var o=i(e.split("/")),l=i(t.split("/")),c=Math.min(o.length,l.length),w=c,k=0;k<c;k++)if(o[k]!==l[k]){w=k;break}for(var Q=[],k=w;k<o.length;k++)Q.push("..");return Q=Q.concat(l.slice(w)),Q.join("/")}},ki=typeof TextDecoder<"u"?new TextDecoder:void 0,pr=(e,t=0,i=NaN)=>{for(var o=t+i,l=t;e[l]&&!(l>=o);)++l;if(l-t>16&&e.buffer&&ki)return ki.decode(e.subarray(t,l));for(var c="";t<l;){var w=e[t++];if(!(w&128)){c+=String.fromCharCode(w);continue}var k=e[t++]&63;if((w&224)==192){c+=String.fromCharCode((w&31)<<6|k);continue}var Q=e[t++]&63;if((w&240)==224?w=(w&15)<<12|k<<6|Q:w=(w&7)<<18|k<<12|Q<<6|e[t++]&63,w<65536)c+=String.fromCharCode(w);else{var V=w-65536;c+=String.fromCharCode(55296|V>>10,56320|V&1023)}}return c},Ln=[],Xr=e=>{for(var t=0,i=0;i<e.length;++i){var o=e.charCodeAt(i);o<=127?t++:o<=2047?t+=2:o>=55296&&o<=57343?(t+=4,++i):t+=3}return t},Cn=(e,t,i,o)=>{if(!(o>0))return 0;for(var l=i,c=i+o-1,w=0;w<e.length;++w){var k=e.charCodeAt(w);if(k>=55296&&k<=57343){var Q=e.charCodeAt(++w);k=65536+((k&1023)<<10)|Q&1023}if(k<=127){if(i>=c)break;t[i++]=k}else if(k<=2047){if(i+1>=c)break;t[i++]=192|k>>6,t[i++]=128|k&63}else if(k<=65535){if(i+2>=c)break;t[i++]=224|k>>12,t[i++]=128|k>>6&63,t[i++]=128|k&63}else{if(i+3>=c)break;t[i++]=240|k>>18,t[i++]=128|k>>12&63,t[i++]=128|k>>6&63,t[i++]=128|k&63}}return t[i]=0,i-l};function Ai(e,t,i){var o=Xr(e)+1,l=new Array(o),c=Cn(e,l,0,l.length);return l.length=c,l}var Xl=()=>{if(!Ln.length){var e=null;if(typeof window<"u"&&typeof window.prompt=="function"&&(e=window.prompt("Input: "),e!==null&&(e+=`
`)),!e)return null;Ln=Ai(e)}return Ln.shift()},rr={ttys:[],init(){},shutdown(){},register(e,t){rr.ttys[e]={input:[],output:[],ops:t},_.registerDevice(e,rr.stream_ops)},stream_ops:{open(e){var t=rr.ttys[e.node.rdev];if(!t)throw new _.ErrnoError(43);e.tty=t,e.seekable=!1},close(e){e.tty.ops.fsync(e.tty)},fsync(e){e.tty.ops.fsync(e.tty)},read(e,t,i,o,l){if(!e.tty||!e.tty.ops.get_char)throw new _.ErrnoError(60);for(var c=0,w=0;w<o;w++){var k;try{k=e.tty.ops.get_char(e.tty)}catch{throw new _.ErrnoError(29)}if(k===void 0&&c===0)throw new _.ErrnoError(6);if(k==null)break;c++,t[i+w]=k}return c&&(e.node.timestamp=Date.now()),c},write(e,t,i,o,l){if(!e.tty||!e.tty.ops.put_char)throw new _.ErrnoError(60);try{for(var c=0;c<o;c++)e.tty.ops.put_char(e.tty,t[i+c])}catch{throw new _.ErrnoError(29)}return o&&(e.node.timestamp=Date.now()),c}},default_tty_ops:{get_char(e){return Xl()},put_char(e,t){t===null||t===10?(ke(pr(e.output)),e.output=[]):t!=0&&e.output.push(t)},fsync(e){e.output&&e.output.length>0&&(ke(pr(e.output)),e.output=[])},ioctl_tcgets(e){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(e,t,i){return 0},ioctl_tiocgwinsz(e){return[24,80]}},default_tty1_ops:{put_char(e,t){t===null||t===10?(Ke(pr(e.output)),e.output=[]):t!=0&&e.output.push(t)},fsync(e){e.output&&e.output.length>0&&(Ke(pr(e.output)),e.output=[])}}},Yl=(e,t)=>{pt.fill(0,e,e+t)},Ii=(e,t)=>Math.ceil(e/t)*t,Ti=e=>{e=Ii(e,65536);var t=Pi(65536,e);return t&&Yl(t,e),t},Ne={ops_table:null,mount(e){return Ne.createNode(null,"/",16895,0)},createNode(e,t,i,o){if(_.isBlkdev(i)||_.isFIFO(i))throw new _.ErrnoError(63);Ne.ops_table||(Ne.ops_table={dir:{node:{getattr:Ne.node_ops.getattr,setattr:Ne.node_ops.setattr,lookup:Ne.node_ops.lookup,mknod:Ne.node_ops.mknod,rename:Ne.node_ops.rename,unlink:Ne.node_ops.unlink,rmdir:Ne.node_ops.rmdir,readdir:Ne.node_ops.readdir,symlink:Ne.node_ops.symlink},stream:{llseek:Ne.stream_ops.llseek}},file:{node:{getattr:Ne.node_ops.getattr,setattr:Ne.node_ops.setattr},stream:{llseek:Ne.stream_ops.llseek,read:Ne.stream_ops.read,write:Ne.stream_ops.write,allocate:Ne.stream_ops.allocate,mmap:Ne.stream_ops.mmap,msync:Ne.stream_ops.msync}},link:{node:{getattr:Ne.node_ops.getattr,setattr:Ne.node_ops.setattr,readlink:Ne.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Ne.node_ops.getattr,setattr:Ne.node_ops.setattr},stream:_.chrdev_stream_ops}});var l=_.createNode(e,t,i,o);return _.isDir(l.mode)?(l.node_ops=Ne.ops_table.dir.node,l.stream_ops=Ne.ops_table.dir.stream,l.contents={}):_.isFile(l.mode)?(l.node_ops=Ne.ops_table.file.node,l.stream_ops=Ne.ops_table.file.stream,l.usedBytes=0,l.contents=null):_.isLink(l.mode)?(l.node_ops=Ne.ops_table.link.node,l.stream_ops=Ne.ops_table.link.stream):_.isChrdev(l.mode)&&(l.node_ops=Ne.ops_table.chrdev.node,l.stream_ops=Ne.ops_table.chrdev.stream),l.timestamp=Date.now(),e&&(e.contents[t]=l,e.timestamp=l.timestamp),l},getFileDataAsTypedArray(e){return e.contents?e.contents.subarray?e.contents.subarray(0,e.usedBytes):new Uint8Array(e.contents):new Uint8Array(0)},expandFileStorage(e,t){var i=e.contents?e.contents.length:0;if(!(i>=t)){var o=1024*1024;t=Math.max(t,i*(i<o?2:1.125)>>>0),i!=0&&(t=Math.max(t,256));var l=e.contents;e.contents=new Uint8Array(t),e.usedBytes>0&&e.contents.set(l.subarray(0,e.usedBytes),0)}},resizeFileStorage(e,t){if(e.usedBytes!=t)if(t==0)e.contents=null,e.usedBytes=0;else{var i=e.contents;e.contents=new Uint8Array(t),i&&e.contents.set(i.subarray(0,Math.min(t,e.usedBytes))),e.usedBytes=t}},node_ops:{getattr(e){var t={};return t.dev=_.isChrdev(e.mode)?e.id:1,t.ino=e.id,t.mode=e.mode,t.nlink=1,t.uid=0,t.gid=0,t.rdev=e.rdev,_.isDir(e.mode)?t.size=4096:_.isFile(e.mode)?t.size=e.usedBytes:_.isLink(e.mode)?t.size=e.link.length:t.size=0,t.atime=new Date(e.timestamp),t.mtime=new Date(e.timestamp),t.ctime=new Date(e.timestamp),t.blksize=4096,t.blocks=Math.ceil(t.size/t.blksize),t},setattr(e,t){t.mode!==void 0&&(e.mode=t.mode),t.timestamp!==void 0&&(e.timestamp=t.timestamp),t.size!==void 0&&Ne.resizeFileStorage(e,t.size)},lookup(e,t){throw _.genericErrors[44]},mknod(e,t,i,o){return Ne.createNode(e,t,i,o)},rename(e,t,i){if(_.isDir(e.mode)){var o;try{o=_.lookupNode(t,i)}catch{}if(o)for(var l in o.contents)throw new _.ErrnoError(55)}delete e.parent.contents[e.name],e.parent.timestamp=Date.now(),e.name=i,t.contents[i]=e,t.timestamp=e.parent.timestamp},unlink(e,t){delete e.contents[t],e.timestamp=Date.now()},rmdir(e,t){var i=_.lookupNode(e,t);for(var o in i.contents)throw new _.ErrnoError(55);delete e.contents[t],e.timestamp=Date.now()},readdir(e){var t=[".",".."];for(var i of Object.keys(e.contents))t.push(i);return t},symlink(e,t,i){var o=Ne.createNode(e,t,41471,0);return o.link=i,o},readlink(e){if(!_.isLink(e.mode))throw new _.ErrnoError(28);return e.link}},stream_ops:{read(e,t,i,o,l){var c=e.node.contents;if(l>=e.node.usedBytes)return 0;var w=Math.min(e.node.usedBytes-l,o);if(w>8&&c.subarray)t.set(c.subarray(l,l+w),i);else for(var k=0;k<w;k++)t[i+k]=c[l+k];return w},write(e,t,i,o,l,c){if(t.buffer===Ve.buffer&&(c=!1),!o)return 0;var w=e.node;if(w.timestamp=Date.now(),t.subarray&&(!w.contents||w.contents.subarray)){if(c)return w.contents=t.subarray(i,i+o),w.usedBytes=o,o;if(w.usedBytes===0&&l===0)return w.contents=t.slice(i,i+o),w.usedBytes=o,o;if(l+o<=w.usedBytes)return w.contents.set(t.subarray(i,i+o),l),o}if(Ne.expandFileStorage(w,l+o),w.contents.subarray&&t.subarray)w.contents.set(t.subarray(i,i+o),l);else for(var k=0;k<o;k++)w.contents[l+k]=t[i+k];return w.usedBytes=Math.max(w.usedBytes,l+o),o},llseek(e,t,i){var o=t;if(i===1?o+=e.position:i===2&&_.isFile(e.node.mode)&&(o+=e.node.usedBytes),o<0)throw new _.ErrnoError(28);return o},allocate(e,t,i){Ne.expandFileStorage(e.node,t+i),e.node.usedBytes=Math.max(e.node.usedBytes,t+i)},mmap(e,t,i,o,l){if(!_.isFile(e.node.mode))throw new _.ErrnoError(43);var c,w,k=e.node.contents;if(!(l&2)&&k&&k.buffer===Ve.buffer)w=!1,c=k.byteOffset;else{if(w=!0,c=Ti(t),!c)throw new _.ErrnoError(48);k&&((i>0||i+t<k.length)&&(k.subarray?k=k.subarray(i,i+t):k=Array.prototype.slice.call(k,i,i+t)),Ve.set(k,c))}return{ptr:c,allocated:w}},msync(e,t,i,o,l){return Ne.stream_ops.write(e,t,0,o,i,!1),0}}},Zl=(e,t,i,o)=>{var l=`al ${e}`;qe(e).then(c=>{t(new Uint8Array(c)),l&&Jr()},c=>{if(i)i();else throw`Loading data file "${e}" failed.`}),l&&Mt()},ec=(e,t,i,o,l,c)=>{_.createDataFile(e,t,i,o,l,c)},tc=s.preloadPlugins||[],rc=(e,t,i,o)=>{typeof Browser<"u"&&Browser.init();var l=!1;return tc.forEach(c=>{l||c.canHandle(t)&&(c.handle(e,t,i,o),l=!0)}),l},nc=(e,t,i,o,l,c,w,k,Q,V)=>{var oe=t?Ht.resolve(et.join2(e,t)):e;function le(W){function R(Y){V==null||V(),k||ec(e,t,Y,o,l,Q),c==null||c(),Jr()}rc(W,oe,R,()=>{w==null||w(),Jr()})||R(W)}Mt(),typeof i=="string"?Zl(i,le,w):le(i)},sc=e=>{var t={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},i=t[e];if(typeof i>"u")throw new Error(`Unknown file open mode: ${e}`);return i},Dn=(e,t)=>{var i=0;return e&&(i|=365),t&&(i|=146),i},_={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(e){this.name="ErrnoError",this.errno=e}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(e){this.node=e}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(e){this.shared.flags=e}get position(){return this.shared.position}set position(e){this.shared.position=e}},FSNode:class{constructor(e,t,i,o){e||(e=this),this.parent=e,this.mount=e.mount,this.mounted=null,this.id=_.nextInode++,this.name=t,this.mode=i,this.node_ops={},this.stream_ops={},this.rdev=o,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(e){e?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(e){e?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return _.isDir(this.mode)}get isDevice(){return _.isChrdev(this.mode)}},lookupPath(e,t={}){if(e=Ht.resolve(e),!e)return{path:"",node:null};var i={follow_mount:!0,recurse_count:0};if(t=Object.assign(i,t),t.recurse_count>8)throw new _.ErrnoError(32);for(var o=e.split("/").filter(le=>!!le),l=_.root,c="/",w=0;w<o.length;w++){var k=w===o.length-1;if(k&&t.parent)break;if(l=_.lookupNode(l,o[w]),c=et.join2(c,o[w]),_.isMountpoint(l)&&(!k||k&&t.follow_mount)&&(l=l.mounted.root),!k||t.follow)for(var Q=0;_.isLink(l.mode);){var V=_.readlink(c);c=Ht.resolve(et.dirname(c),V);var oe=_.lookupPath(c,{recurse_count:t.recurse_count+1});if(l=oe.node,Q++>40)throw new _.ErrnoError(32)}}return{path:c,node:l}},getPath(e){for(var t;;){if(_.isRoot(e)){var i=e.mount.mountpoint;return t?i[i.length-1]!=="/"?`${i}/${t}`:i+t:i}t=t?`${e.name}/${t}`:e.name,e=e.parent}},hashName(e,t){for(var i=0,o=0;o<t.length;o++)i=(i<<5)-i+t.charCodeAt(o)|0;return(e+i>>>0)%_.nameTable.length},hashAddNode(e){var t=_.hashName(e.parent.id,e.name);e.name_next=_.nameTable[t],_.nameTable[t]=e},hashRemoveNode(e){var t=_.hashName(e.parent.id,e.name);if(_.nameTable[t]===e)_.nameTable[t]=e.name_next;else for(var i=_.nameTable[t];i;){if(i.name_next===e){i.name_next=e.name_next;break}i=i.name_next}},lookupNode(e,t){var i=_.mayLookup(e);if(i)throw new _.ErrnoError(i);for(var o=_.hashName(e.id,t),l=_.nameTable[o];l;l=l.name_next){var c=l.name;if(l.parent.id===e.id&&c===t)return l}return _.lookup(e,t)},createNode(e,t,i,o){var l=new _.FSNode(e,t,i,o);return _.hashAddNode(l),l},destroyNode(e){_.hashRemoveNode(e)},isRoot(e){return e===e.parent},isMountpoint(e){return!!e.mounted},isFile(e){return(e&61440)===32768},isDir(e){return(e&61440)===16384},isLink(e){return(e&61440)===40960},isChrdev(e){return(e&61440)===8192},isBlkdev(e){return(e&61440)===24576},isFIFO(e){return(e&61440)===4096},isSocket(e){return(e&49152)===49152},flagsToPermissionString(e){var t=["r","w","rw"][e&3];return e&512&&(t+="w"),t},nodePermissions(e,t){return _.ignorePermissions?0:t.includes("r")&&!(e.mode&292)||t.includes("w")&&!(e.mode&146)||t.includes("x")&&!(e.mode&73)?2:0},mayLookup(e){if(!_.isDir(e.mode))return 54;var t=_.nodePermissions(e,"x");return t||(e.node_ops.lookup?0:2)},mayCreate(e,t){try{var i=_.lookupNode(e,t);return 20}catch{}return _.nodePermissions(e,"wx")},mayDelete(e,t,i){var o;try{o=_.lookupNode(e,t)}catch(c){return c.errno}var l=_.nodePermissions(e,"wx");if(l)return l;if(i){if(!_.isDir(o.mode))return 54;if(_.isRoot(o)||_.getPath(o)===_.cwd())return 10}else if(_.isDir(o.mode))return 31;return 0},mayOpen(e,t){return e?_.isLink(e.mode)?32:_.isDir(e.mode)&&(_.flagsToPermissionString(t)!=="r"||t&512)?31:_.nodePermissions(e,_.flagsToPermissionString(t)):44},MAX_OPEN_FDS:4096,nextfd(){for(var e=0;e<=_.MAX_OPEN_FDS;e++)if(!_.streams[e])return e;throw new _.ErrnoError(33)},getStreamChecked(e){var t=_.getStream(e);if(!t)throw new _.ErrnoError(8);return t},getStream:e=>_.streams[e],createStream(e,t=-1){return e=Object.assign(new _.FSStream,e),t==-1&&(t=_.nextfd()),e.fd=t,_.streams[t]=e,e},closeStream(e){_.streams[e]=null},dupStream(e,t=-1){var o,l;var i=_.createStream(e,t);return(l=(o=i.stream_ops)==null?void 0:o.dup)==null||l.call(o,i),i},chrdev_stream_ops:{open(e){var i,o;var t=_.getDevice(e.node.rdev);e.stream_ops=t.stream_ops,(o=(i=e.stream_ops).open)==null||o.call(i,e)},llseek(){throw new _.ErrnoError(70)}},major:e=>e>>8,minor:e=>e&255,makedev:(e,t)=>e<<8|t,registerDevice(e,t){_.devices[e]={stream_ops:t}},getDevice:e=>_.devices[e],getMounts(e){for(var t=[],i=[e];i.length;){var o=i.pop();t.push(o),i.push(...o.mounts)}return t},syncfs(e,t){typeof e=="function"&&(t=e,e=!1),_.syncFSRequests++,_.syncFSRequests>1&&Ke(`warning: ${_.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var i=_.getMounts(_.root.mount),o=0;function l(w){return _.syncFSRequests--,t(w)}function c(w){if(w)return c.errored?void 0:(c.errored=!0,l(w));++o>=i.length&&l(null)}i.forEach(w=>{if(!w.type.syncfs)return c(null);w.type.syncfs(w,e,c)})},mount(e,t,i){var o=i==="/",l=!i,c;if(o&&_.root)throw new _.ErrnoError(10);if(!o&&!l){var w=_.lookupPath(i,{follow_mount:!1});if(i=w.path,c=w.node,_.isMountpoint(c))throw new _.ErrnoError(10);if(!_.isDir(c.mode))throw new _.ErrnoError(54)}var k={type:e,opts:t,mountpoint:i,mounts:[]},Q=e.mount(k);return Q.mount=k,k.root=Q,o?_.root=Q:c&&(c.mounted=k,c.mount&&c.mount.mounts.push(k)),Q},unmount(e){var t=_.lookupPath(e,{follow_mount:!1});if(!_.isMountpoint(t.node))throw new _.ErrnoError(28);var i=t.node,o=i.mounted,l=_.getMounts(o);Object.keys(_.nameTable).forEach(w=>{for(var k=_.nameTable[w];k;){var Q=k.name_next;l.includes(k.mount)&&_.destroyNode(k),k=Q}}),i.mounted=null;var c=i.mount.mounts.indexOf(o);i.mount.mounts.splice(c,1)},lookup(e,t){return e.node_ops.lookup(e,t)},mknod(e,t,i){var o=_.lookupPath(e,{parent:!0}),l=o.node,c=et.basename(e);if(!c||c==="."||c==="..")throw new _.ErrnoError(28);var w=_.mayCreate(l,c);if(w)throw new _.ErrnoError(w);if(!l.node_ops.mknod)throw new _.ErrnoError(63);return l.node_ops.mknod(l,c,t,i)},create(e,t){return t=t!==void 0?t:438,t&=4095,t|=32768,_.mknod(e,t,0)},mkdir(e,t){return t=t!==void 0?t:511,t&=1023,t|=16384,_.mknod(e,t,0)},mkdirTree(e,t){for(var i=e.split("/"),o="",l=0;l<i.length;++l)if(i[l]){o+="/"+i[l];try{_.mkdir(o,t)}catch(c){if(c.errno!=20)throw c}}},mkdev(e,t,i){return typeof i>"u"&&(i=t,t=438),t|=8192,_.mknod(e,t,i)},symlink(e,t){if(!Ht.resolve(e))throw new _.ErrnoError(44);var i=_.lookupPath(t,{parent:!0}),o=i.node;if(!o)throw new _.ErrnoError(44);var l=et.basename(t),c=_.mayCreate(o,l);if(c)throw new _.ErrnoError(c);if(!o.node_ops.symlink)throw new _.ErrnoError(63);return o.node_ops.symlink(o,l,e)},rename(e,t){var i=et.dirname(e),o=et.dirname(t),l=et.basename(e),c=et.basename(t),w,k,Q;if(w=_.lookupPath(e,{parent:!0}),k=w.node,w=_.lookupPath(t,{parent:!0}),Q=w.node,!k||!Q)throw new _.ErrnoError(44);if(k.mount!==Q.mount)throw new _.ErrnoError(75);var V=_.lookupNode(k,l),oe=Ht.relative(e,o);if(oe.charAt(0)!==".")throw new _.ErrnoError(28);if(oe=Ht.relative(t,i),oe.charAt(0)!==".")throw new _.ErrnoError(55);var le;try{le=_.lookupNode(Q,c)}catch{}if(V!==le){var W=_.isDir(V.mode),R=_.mayDelete(k,l,W);if(R)throw new _.ErrnoError(R);if(R=le?_.mayDelete(Q,c,W):_.mayCreate(Q,c),R)throw new _.ErrnoError(R);if(!k.node_ops.rename)throw new _.ErrnoError(63);if(_.isMountpoint(V)||le&&_.isMountpoint(le))throw new _.ErrnoError(10);if(Q!==k&&(R=_.nodePermissions(k,"w"),R))throw new _.ErrnoError(R);_.hashRemoveNode(V);try{k.node_ops.rename(V,Q,c),V.parent=Q}catch(Y){throw Y}finally{_.hashAddNode(V)}}},rmdir(e){var t=_.lookupPath(e,{parent:!0}),i=t.node,o=et.basename(e),l=_.lookupNode(i,o),c=_.mayDelete(i,o,!0);if(c)throw new _.ErrnoError(c);if(!i.node_ops.rmdir)throw new _.ErrnoError(63);if(_.isMountpoint(l))throw new _.ErrnoError(10);i.node_ops.rmdir(i,o),_.destroyNode(l)},readdir(e){var t=_.lookupPath(e,{follow:!0}),i=t.node;if(!i.node_ops.readdir)throw new _.ErrnoError(54);return i.node_ops.readdir(i)},unlink(e){var t=_.lookupPath(e,{parent:!0}),i=t.node;if(!i)throw new _.ErrnoError(44);var o=et.basename(e),l=_.lookupNode(i,o),c=_.mayDelete(i,o,!1);if(c)throw new _.ErrnoError(c);if(!i.node_ops.unlink)throw new _.ErrnoError(63);if(_.isMountpoint(l))throw new _.ErrnoError(10);i.node_ops.unlink(i,o),_.destroyNode(l)},readlink(e){var t=_.lookupPath(e),i=t.node;if(!i)throw new _.ErrnoError(44);if(!i.node_ops.readlink)throw new _.ErrnoError(28);return Ht.resolve(_.getPath(i.parent),i.node_ops.readlink(i))},stat(e,t){var i=_.lookupPath(e,{follow:!t}),o=i.node;if(!o)throw new _.ErrnoError(44);if(!o.node_ops.getattr)throw new _.ErrnoError(63);return o.node_ops.getattr(o)},lstat(e){return _.stat(e,!0)},chmod(e,t,i){var o;if(typeof e=="string"){var l=_.lookupPath(e,{follow:!i});o=l.node}else o=e;if(!o.node_ops.setattr)throw new _.ErrnoError(63);o.node_ops.setattr(o,{mode:t&4095|o.mode&-4096,timestamp:Date.now()})},lchmod(e,t){_.chmod(e,t,!0)},fchmod(e,t){var i=_.getStreamChecked(e);_.chmod(i.node,t)},chown(e,t,i,o){var l;if(typeof e=="string"){var c=_.lookupPath(e,{follow:!o});l=c.node}else l=e;if(!l.node_ops.setattr)throw new _.ErrnoError(63);l.node_ops.setattr(l,{timestamp:Date.now()})},lchown(e,t,i){_.chown(e,t,i,!0)},fchown(e,t,i){var o=_.getStreamChecked(e);_.chown(o.node,t,i)},truncate(e,t){if(t<0)throw new _.ErrnoError(28);var i;if(typeof e=="string"){var o=_.lookupPath(e,{follow:!0});i=o.node}else i=e;if(!i.node_ops.setattr)throw new _.ErrnoError(63);if(_.isDir(i.mode))throw new _.ErrnoError(31);if(!_.isFile(i.mode))throw new _.ErrnoError(28);var l=_.nodePermissions(i,"w");if(l)throw new _.ErrnoError(l);i.node_ops.setattr(i,{size:t,timestamp:Date.now()})},ftruncate(e,t){var i=_.getStreamChecked(e);if((i.flags&2097155)===0)throw new _.ErrnoError(28);_.truncate(i.node,t)},utime(e,t,i){var o=_.lookupPath(e,{follow:!0}),l=o.node;l.node_ops.setattr(l,{timestamp:Math.max(t,i)})},open(e,t,i){if(e==="")throw new _.ErrnoError(44);t=typeof t=="string"?sc(t):t,t&64?(i=typeof i>"u"?438:i,i=i&4095|32768):i=0;var o;if(typeof e=="object")o=e;else{e=et.normalize(e);try{var l=_.lookupPath(e,{follow:!(t&131072)});o=l.node}catch{}}var c=!1;if(t&64)if(o){if(t&128)throw new _.ErrnoError(20)}else o=_.mknod(e,i,0),c=!0;if(!o)throw new _.ErrnoError(44);if(_.isChrdev(o.mode)&&(t&=-513),t&65536&&!_.isDir(o.mode))throw new _.ErrnoError(54);if(!c){var w=_.mayOpen(o,t);if(w)throw new _.ErrnoError(w)}t&512&&!c&&_.truncate(o,0),t&=-131713;var k=_.createStream({node:o,path:_.getPath(o),flags:t,seekable:!0,position:0,stream_ops:o.stream_ops,ungotten:[],error:!1});return k.stream_ops.open&&k.stream_ops.open(k),s.logReadFiles&&!(t&1)&&(e in _.readFiles||(_.readFiles[e]=1)),k},close(e){if(_.isClosed(e))throw new _.ErrnoError(8);e.getdents&&(e.getdents=null);try{e.stream_ops.close&&e.stream_ops.close(e)}catch(t){throw t}finally{_.closeStream(e.fd)}e.fd=null},isClosed(e){return e.fd===null},llseek(e,t,i){if(_.isClosed(e))throw new _.ErrnoError(8);if(!e.seekable||!e.stream_ops.llseek)throw new _.ErrnoError(70);if(i!=0&&i!=1&&i!=2)throw new _.ErrnoError(28);return e.position=e.stream_ops.llseek(e,t,i),e.ungotten=[],e.position},read(e,t,i,o,l){if(o<0||l<0)throw new _.ErrnoError(28);if(_.isClosed(e))throw new _.ErrnoError(8);if((e.flags&2097155)===1)throw new _.ErrnoError(8);if(_.isDir(e.node.mode))throw new _.ErrnoError(31);if(!e.stream_ops.read)throw new _.ErrnoError(28);var c=typeof l<"u";if(!c)l=e.position;else if(!e.seekable)throw new _.ErrnoError(70);var w=e.stream_ops.read(e,t,i,o,l);return c||(e.position+=w),w},write(e,t,i,o,l,c){if(o<0||l<0)throw new _.ErrnoError(28);if(_.isClosed(e))throw new _.ErrnoError(8);if((e.flags&2097155)===0)throw new _.ErrnoError(8);if(_.isDir(e.node.mode))throw new _.ErrnoError(31);if(!e.stream_ops.write)throw new _.ErrnoError(28);e.seekable&&e.flags&1024&&_.llseek(e,0,2);var w=typeof l<"u";if(!w)l=e.position;else if(!e.seekable)throw new _.ErrnoError(70);var k=e.stream_ops.write(e,t,i,o,l,c);return w||(e.position+=k),k},allocate(e,t,i){if(_.isClosed(e))throw new _.ErrnoError(8);if(t<0||i<=0)throw new _.ErrnoError(28);if((e.flags&2097155)===0)throw new _.ErrnoError(8);if(!_.isFile(e.node.mode)&&!_.isDir(e.node.mode))throw new _.ErrnoError(43);if(!e.stream_ops.allocate)throw new _.ErrnoError(138);e.stream_ops.allocate(e,t,i)},mmap(e,t,i,o,l){if((o&2)!==0&&(l&2)===0&&(e.flags&2097155)!==2)throw new _.ErrnoError(2);if((e.flags&2097155)===1)throw new _.ErrnoError(2);if(!e.stream_ops.mmap)throw new _.ErrnoError(43);if(!t)throw new _.ErrnoError(28);return e.stream_ops.mmap(e,t,i,o,l)},msync(e,t,i,o,l){return e.stream_ops.msync?e.stream_ops.msync(e,t,i,o,l):0},ioctl(e,t,i){if(!e.stream_ops.ioctl)throw new _.ErrnoError(59);return e.stream_ops.ioctl(e,t,i)},readFile(e,t={}){if(t.flags=t.flags||0,t.encoding=t.encoding||"binary",t.encoding!=="utf8"&&t.encoding!=="binary")throw new Error(`Invalid encoding type "${t.encoding}"`);var i,o=_.open(e,t.flags),l=_.stat(e),c=l.size,w=new Uint8Array(c);return _.read(o,w,0,c,0),t.encoding==="utf8"?i=pr(w):t.encoding==="binary"&&(i=w),_.close(o),i},writeFile(e,t,i={}){i.flags=i.flags||577;var o=_.open(e,i.flags,i.mode);if(typeof t=="string"){var l=new Uint8Array(Xr(t)+1),c=Cn(t,l,0,l.length);_.write(o,l,0,c,void 0,i.canOwn)}else if(ArrayBuffer.isView(t))_.write(o,t,0,t.byteLength,void 0,i.canOwn);else throw new Error("Unsupported data type");_.close(o)},cwd:()=>_.currentPath,chdir(e){var t=_.lookupPath(e,{follow:!0});if(t.node===null)throw new _.ErrnoError(44);if(!_.isDir(t.node.mode))throw new _.ErrnoError(54);var i=_.nodePermissions(t.node,"x");if(i)throw new _.ErrnoError(i);_.currentPath=t.path},createDefaultDirectories(){_.mkdir("/tmp"),_.mkdir("/home"),_.mkdir("/home/web_user")},createDefaultDevices(){_.mkdir("/dev"),_.registerDevice(_.makedev(1,3),{read:()=>0,write:(o,l,c,w,k)=>w}),_.mkdev("/dev/null",_.makedev(1,3)),rr.register(_.makedev(5,0),rr.default_tty_ops),rr.register(_.makedev(6,0),rr.default_tty1_ops),_.mkdev("/dev/tty",_.makedev(5,0)),_.mkdev("/dev/tty1",_.makedev(6,0));var e=new Uint8Array(1024),t=0,i=()=>(t===0&&(t=Si(e).byteLength),e[--t]);_.createDevice("/dev","random",i),_.createDevice("/dev","urandom",i),_.mkdir("/dev/shm"),_.mkdir("/dev/shm/tmp")},createSpecialDirectories(){_.mkdir("/proc");var e=_.mkdir("/proc/self");_.mkdir("/proc/self/fd"),_.mount({mount(){var t=_.createNode(e,"fd",16895,73);return t.node_ops={lookup(i,o){var l=+o,c=_.getStreamChecked(l),w={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>c.path}};return w.parent=w,w}},t}},{},"/proc/self/fd")},createStandardStreams(e,t,i){e?_.createDevice("/dev","stdin",e):_.symlink("/dev/tty","/dev/stdin"),t?_.createDevice("/dev","stdout",null,t):_.symlink("/dev/tty","/dev/stdout"),i?_.createDevice("/dev","stderr",null,i):_.symlink("/dev/tty1","/dev/stderr"),_.open("/dev/stdin",0),_.open("/dev/stdout",1),_.open("/dev/stderr",1)},staticInit(){[44].forEach(e=>{_.genericErrors[e]=new _.ErrnoError(e),_.genericErrors[e].stack="<generic error, no stack>"}),_.nameTable=new Array(4096),_.mount(Ne,{},"/"),_.createDefaultDirectories(),_.createDefaultDevices(),_.createSpecialDirectories(),_.filesystems={MEMFS:Ne}},init(e,t,i){_.initialized=!0,e??(e=s.stdin),t??(t=s.stdout),i??(i=s.stderr),_.createStandardStreams(e,t,i)},quit(){_.initialized=!1;for(var e=0;e<_.streams.length;e++){var t=_.streams[e];t&&_.close(t)}},findObject(e,t){var i=_.analyzePath(e,t);return i.exists?i.object:null},analyzePath(e,t){try{var i=_.lookupPath(e,{follow:!t});e=i.path}catch{}var o={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var i=_.lookupPath(e,{parent:!0});o.parentExists=!0,o.parentPath=i.path,o.parentObject=i.node,o.name=et.basename(e),i=_.lookupPath(e,{follow:!t}),o.exists=!0,o.path=i.path,o.object=i.node,o.name=i.node.name,o.isRoot=i.path==="/"}catch(l){o.error=l.errno}return o},createPath(e,t,i,o){e=typeof e=="string"?e:_.getPath(e);for(var l=t.split("/").reverse();l.length;){var c=l.pop();if(c){var w=et.join2(e,c);try{_.mkdir(w)}catch{}e=w}}return w},createFile(e,t,i,o,l){var c=et.join2(typeof e=="string"?e:_.getPath(e),t),w=Dn(o,l);return _.create(c,w)},createDataFile(e,t,i,o,l,c){var w=t;e&&(e=typeof e=="string"?e:_.getPath(e),w=t?et.join2(e,t):e);var k=Dn(o,l),Q=_.create(w,k);if(i){if(typeof i=="string"){for(var V=new Array(i.length),oe=0,le=i.length;oe<le;++oe)V[oe]=i.charCodeAt(oe);i=V}_.chmod(Q,k|146);var W=_.open(Q,577);_.write(W,i,0,i.length,0,c),_.close(W),_.chmod(Q,k)}},createDevice(e,t,i,o){var k;var l=et.join2(typeof e=="string"?e:_.getPath(e),t),c=Dn(!!i,!!o);(k=_.createDevice).major??(k.major=64);var w=_.makedev(_.createDevice.major++,0);return _.registerDevice(w,{open(Q){Q.seekable=!1},close(Q){var V;(V=o==null?void 0:o.buffer)!=null&&V.length&&o(10)},read(Q,V,oe,le,W){for(var R=0,Y=0;Y<le;Y++){var T;try{T=i()}catch{throw new _.ErrnoError(29)}if(T===void 0&&R===0)throw new _.ErrnoError(6);if(T==null)break;R++,V[oe+Y]=T}return R&&(Q.node.timestamp=Date.now()),R},write(Q,V,oe,le,W){for(var R=0;R<le;R++)try{o(V[oe+R])}catch{throw new _.ErrnoError(29)}return le&&(Q.node.timestamp=Date.now()),R}}),_.mkdev(l,c,w)},forceLoadFile(e){if(e.isDevice||e.isFolder||e.link||e.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{e.contents=ve(e.url),e.usedBytes=e.contents.length}catch{throw new _.ErrnoError(29)}},createLazyFile(e,t,i,o,l){class c{constructor(){this.lengthKnown=!1,this.chunks=[]}get(R){if(!(R>this.length-1||R<0)){var Y=R%this.chunkSize,T=R/this.chunkSize|0;return this.getter(T)[Y]}}setDataGetter(R){this.getter=R}cacheLength(){var R=new XMLHttpRequest;if(R.open("HEAD",i,!1),R.send(null),!(R.status>=200&&R.status<300||R.status===304))throw new Error("Couldn't load "+i+". Status: "+R.status);var Y=Number(R.getResponseHeader("Content-length")),T,P=(T=R.getResponseHeader("Accept-Ranges"))&&T==="bytes",j=(T=R.getResponseHeader("Content-Encoding"))&&T==="gzip",$=1024*1024;P||($=Y);var G=(Z,ae)=>{if(Z>ae)throw new Error("invalid range ("+Z+", "+ae+") or no bytes requested!");if(ae>Y-1)throw new Error("only "+Y+" bytes available! programmer error!");var h=new XMLHttpRequest;if(h.open("GET",i,!1),Y!==$&&h.setRequestHeader("Range","bytes="+Z+"-"+ae),h.responseType="arraybuffer",h.overrideMimeType&&h.overrideMimeType("text/plain; charset=x-user-defined"),h.send(null),!(h.status>=200&&h.status<300||h.status===304))throw new Error("Couldn't load "+i+". Status: "+h.status);return h.response!==void 0?new Uint8Array(h.response||[]):Ai(h.responseText||"")},C=this;C.setDataGetter(Z=>{var ae=Z*$,h=(Z+1)*$-1;if(h=Math.min(h,Y-1),typeof C.chunks[Z]>"u"&&(C.chunks[Z]=G(ae,h)),typeof C.chunks[Z]>"u")throw new Error("doXHR failed!");return C.chunks[Z]}),(j||!Y)&&($=Y=1,Y=this.getter(0).length,$=Y,ke("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Y,this._chunkSize=$,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!B)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var w=new c,k={isDevice:!1,contents:w}}else var k={isDevice:!1,url:i};var Q=_.createFile(e,t,k,o,l);k.contents?Q.contents=k.contents:k.url&&(Q.contents=null,Q.url=k.url),Object.defineProperties(Q,{usedBytes:{get:function(){return this.contents.length}}});var V={},oe=Object.keys(Q.stream_ops);oe.forEach(W=>{var R=Q.stream_ops[W];V[W]=(...Y)=>(_.forceLoadFile(Q),R(...Y))});function le(W,R,Y,T,P){var j=W.node.contents;if(P>=j.length)return 0;var $=Math.min(j.length-P,T);if(j.slice)for(var G=0;G<$;G++)R[Y+G]=j[P+G];else for(var G=0;G<$;G++)R[Y+G]=j.get(P+G);return $}return V.read=(W,R,Y,T,P)=>(_.forceLoadFile(Q),le(W,R,Y,T,P)),V.mmap=(W,R,Y,T,P)=>{_.forceLoadFile(Q);var j=Ti(R);if(!j)throw new _.ErrnoError(48);return le(W,Ve,j,R,Y),{ptr:j,allocated:!0}},Q.stream_ops=V,Q}},ic=(e,t)=>e?pr(pt,e,t):"",He={DEFAULT_POLLMASK:5,calculateAt(e,t,i){if(et.isAbs(t))return t;var o;if(e===-100)o=_.cwd();else{var l=He.getStreamFromFD(e);o=l.path}if(t.length==0){if(!i)throw new _.ErrnoError(44);return o}return et.join2(o,t)},doStat(e,t,i){var o=e(t);Se[i>>2]=o.dev,Se[i+4>>2]=o.mode,De[i+8>>2]=o.nlink,Se[i+12>>2]=o.uid,Se[i+16>>2]=o.gid,Se[i+20>>2]=o.rdev,ct[i+24>>3]=BigInt(o.size),Se[i+32>>2]=4096,Se[i+36>>2]=o.blocks;var l=o.atime.getTime(),c=o.mtime.getTime(),w=o.ctime.getTime();return ct[i+40>>3]=BigInt(Math.floor(l/1e3)),De[i+48>>2]=l%1e3*1e3*1e3,ct[i+56>>3]=BigInt(Math.floor(c/1e3)),De[i+64>>2]=c%1e3*1e3*1e3,ct[i+72>>3]=BigInt(Math.floor(w/1e3)),De[i+80>>2]=w%1e3*1e3*1e3,ct[i+88>>3]=BigInt(o.ino),0},doMsync(e,t,i,o,l){if(!_.isFile(t.node.mode))throw new _.ErrnoError(43);if(o&2)return 0;var c=pt.slice(e,e+i);_.msync(t,c,l,i,o)},getStreamFromFD(e){var t=_.getStreamChecked(e);return t},varargs:void 0,getStr(e){var t=ic(e);return t}};function oc(e,t){try{return e=He.getStr(e),_.chmod(e,t),0}catch(i){if(typeof _>"u"||i.name!=="ErrnoError")throw i;return-i.errno}}function ac(e,t,i,o){try{if(t=He.getStr(t),t=He.calculateAt(e,t),i&-8)return-28;var l=_.lookupPath(t,{follow:!0}),c=l.node;if(!c)return-44;var w="";return i&4&&(w+="r"),i&2&&(w+="w"),i&1&&(w+="x"),w&&_.nodePermissions(c,w)?-2:0}catch(k){if(typeof _>"u"||k.name!=="ErrnoError")throw k;return-k.errno}}function lc(e,t){try{return _.fchmod(e,t),0}catch(i){if(typeof _>"u"||i.name!=="ErrnoError")throw i;return-i.errno}}function cc(e,t,i){try{return _.fchown(e,t,i),0}catch(o){if(typeof _>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}function Yr(){var e=Se[+He.varargs>>2];return He.varargs+=4,e}var mr=Yr;function uc(e,t,i){He.varargs=i;try{var o=He.getStreamFromFD(e);switch(t){case 0:{var l=Yr();if(l<0)return-28;for(;_.streams[l];)l++;var c;return c=_.dupStream(o,l),c.fd}case 1:case 2:return 0;case 3:return o.flags;case 4:{var l=Yr();return o.flags|=l,0}case 12:{var l=mr(),w=0;return bt[l+w>>1]=2,0}case 13:case 14:return 0}return-28}catch(k){if(typeof _>"u"||k.name!=="ErrnoError")throw k;return-k.errno}}function fc(e,t){try{var i=He.getStreamFromFD(e);return He.doStat(_.stat,i.path,t)}catch(o){if(typeof _>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}var _c=9007199254740992,dc=-9007199254740992,vr=e=>e<dc||e>_c?NaN:Number(e);function hc(e,t){t=vr(t);try{return isNaN(t)?61:(_.ftruncate(e,t),0)}catch(i){if(typeof _>"u"||i.name!=="ErrnoError")throw i;return-i.errno}}var gr=(e,t,i)=>Cn(e,pt,t,i);function pc(e,t){try{if(t===0)return-28;var i=_.cwd(),o=Xr(i)+1;return t<o?-68:(gr(i,e,t),o)}catch(l){if(typeof _>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function mc(e,t,i){He.varargs=i;try{var o=He.getStreamFromFD(e);switch(t){case 21509:return o.tty?0:-59;case 21505:{if(!o.tty)return-59;if(o.tty.ops.ioctl_tcgets){var l=o.tty.ops.ioctl_tcgets(o),c=mr();Se[c>>2]=l.c_iflag||0,Se[c+4>>2]=l.c_oflag||0,Se[c+8>>2]=l.c_cflag||0,Se[c+12>>2]=l.c_lflag||0;for(var w=0;w<32;w++)Ve[c+w+17]=l.c_cc[w]||0;return 0}return 0}case 21510:case 21511:case 21512:return o.tty?0:-59;case 21506:case 21507:case 21508:{if(!o.tty)return-59;if(o.tty.ops.ioctl_tcsets){for(var c=mr(),k=Se[c>>2],Q=Se[c+4>>2],V=Se[c+8>>2],oe=Se[c+12>>2],le=[],w=0;w<32;w++)le.push(Ve[c+w+17]);return o.tty.ops.ioctl_tcsets(o.tty,t,{c_iflag:k,c_oflag:Q,c_cflag:V,c_lflag:oe,c_cc:le})}return 0}case 21519:{if(!o.tty)return-59;var c=mr();return Se[c>>2]=0,0}case 21520:return o.tty?-28:-59;case 21531:{var c=mr();return _.ioctl(o,t,c)}case 21523:{if(!o.tty)return-59;if(o.tty.ops.ioctl_tiocgwinsz){var W=o.tty.ops.ioctl_tiocgwinsz(o.tty),c=mr();bt[c>>1]=W[0],bt[c+2>>1]=W[1]}return 0}case 21524:return o.tty?0:-59;case 21515:return o.tty?0:-59;default:return-28}}catch(R){if(typeof _>"u"||R.name!=="ErrnoError")throw R;return-R.errno}}function gc(e,t){try{return e=He.getStr(e),He.doStat(_.lstat,e,t)}catch(i){if(typeof _>"u"||i.name!=="ErrnoError")throw i;return-i.errno}}function bc(e,t,i){try{return t=He.getStr(t),t=He.calculateAt(e,t),t=et.normalize(t),t[t.length-1]==="/"&&(t=t.substr(0,t.length-1)),_.mkdir(t,i,0),0}catch(o){if(typeof _>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}function yc(e,t,i,o){try{t=He.getStr(t);var l=o&256,c=o&4096;return o=o&-6401,t=He.calculateAt(e,t,c),He.doStat(l?_.lstat:_.stat,t,i)}catch(w){if(typeof _>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function wc(e,t,i,o){He.varargs=o;try{t=He.getStr(t),t=He.calculateAt(e,t);var l=o?Yr():0;return _.open(t,i,l).fd}catch(c){if(typeof _>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function xc(e,t,i,o){try{if(t=He.getStr(t),t=He.calculateAt(e,t),o<=0)return-28;var l=_.readlink(t),c=Math.min(o,Xr(l)),w=Ve[i+c];return gr(l,i,o+1),Ve[i+c]=w,c}catch(k){if(typeof _>"u"||k.name!=="ErrnoError")throw k;return-k.errno}}function qc(e){try{return e=He.getStr(e),_.rmdir(e),0}catch(t){if(typeof _>"u"||t.name!=="ErrnoError")throw t;return-t.errno}}function vc(e,t){try{return e=He.getStr(e),He.doStat(_.stat,e,t)}catch(i){if(typeof _>"u"||i.name!=="ErrnoError")throw i;return-i.errno}}function Ec(e,t,i){try{return t=He.getStr(t),t=He.calculateAt(e,t),i===0?_.unlink(t):i===512?_.rmdir(t):Fn("Invalid flags passed to unlinkat"),0}catch(o){if(typeof _>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}var Fi=e=>De[e>>2]+Se[e+4>>2]*4294967296;function Sc(e,t,i,o){try{t=He.getStr(t),t=He.calculateAt(e,t,!0);var l=Date.now(),c,w;if(!i)c=l,w=l;else{var k=Fi(i),Q=Se[i+8>>2];Q==1073741823?c=l:Q==1073741822?c=-1:c=k*1e3+Q/(1e3*1e3),i+=16,k=Fi(i),Q=Se[i+8>>2],Q==1073741823?w=l:Q==1073741822?w=-1:w=k*1e3+Q/(1e3*1e3)}return(w!=-1||c!=-1)&&_.utime(t,c,w),0}catch(V){if(typeof _>"u"||V.name!=="ErrnoError")throw V;return-V.errno}}var kc=1,Ac=()=>kc,Ic=e=>e%4===0&&(e%100!==0||e%400===0),Tc=[0,31,60,91,121,152,182,213,244,274,305,335],Fc=[0,31,59,90,120,151,181,212,243,273,304,334],Oc=e=>{var t=Ic(e.getFullYear()),i=t?Tc:Fc,o=i[e.getMonth()]+e.getDate()-1;return o};function Pc(e,t){e=vr(e);var i=new Date(e*1e3);Se[t>>2]=i.getSeconds(),Se[t+4>>2]=i.getMinutes(),Se[t+8>>2]=i.getHours(),Se[t+12>>2]=i.getDate(),Se[t+16>>2]=i.getMonth(),Se[t+20>>2]=i.getFullYear()-1900,Se[t+24>>2]=i.getDay();var o=Oc(i)|0;Se[t+28>>2]=o,Se[t+36>>2]=-(i.getTimezoneOffset()*60);var l=new Date(i.getFullYear(),0,1),c=new Date(i.getFullYear(),6,1).getTimezoneOffset(),w=l.getTimezoneOffset(),k=(c!=w&&i.getTimezoneOffset()==Math.min(w,c))|0;Se[t+32>>2]=k}function Lc(e,t,i,o,l,c,w){l=vr(l);try{if(isNaN(l))return 61;var k=He.getStreamFromFD(o),Q=_.mmap(k,e,l,t,i),V=Q.ptr;return Se[c>>2]=Q.allocated,De[w>>2]=V,0}catch(oe){if(typeof _>"u"||oe.name!=="ErrnoError")throw oe;return-oe.errno}}function Cc(e,t,i,o,l,c){c=vr(c);try{var w=He.getStreamFromFD(l);i&2&&He.doMsync(e,w,t,o,c)}catch(k){if(typeof _>"u"||k.name!=="ErrnoError")throw k;return-k.errno}}var Dc=(e,t,i,o)=>{var l=new Date().getFullYear(),c=new Date(l,0,1),w=new Date(l,6,1),k=c.getTimezoneOffset(),Q=w.getTimezoneOffset(),V=Math.max(k,Q);De[e>>2]=V*60,Se[t>>2]=+(k!=Q);var oe=R=>{var Y=R>=0?"-":"+",T=Math.abs(R),P=String(Math.floor(T/60)).padStart(2,"0"),j=String(T%60).padStart(2,"0");return`UTC${Y}${P}${j}`},le=oe(k),W=oe(Q);Q<k?(gr(le,i,17),gr(W,o,17)):(gr(le,o,17),gr(W,i,17))},Rc=()=>Date.now(),Nc=()=>performance.now(),Bc=()=>2147483648,Uc=e=>{var t=ye.buffer,i=(e-t.byteLength+65535)/65536|0;try{return ye.grow(i),Et(),1}catch{}},jc=e=>{var t=pt.length;e>>>=0;var i=Bc();if(e>i)return!1;for(var o=1;o<=4;o*=2){var l=t*(1+.2/o);l=Math.min(l,e+100663296);var c=Math.min(i,Ii(Math.max(e,l),65536)),w=Uc(c);if(w)return!0}return!1},Rn={},Mc=()=>F||"./this.program",Er=()=>{if(!Er.strings){var e=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:e,_:Mc()};for(var i in Rn)Rn[i]===void 0?delete t[i]:t[i]=Rn[i];var o=[];for(var i in t)o.push(`${i}=${t[i]}`);Er.strings=o}return Er.strings},Hc=(e,t)=>{for(var i=0;i<e.length;++i)Ve[t++]=e.charCodeAt(i);Ve[t]=0},$c=(e,t)=>{var i=0;return Er().forEach((o,l)=>{var c=t+i;De[e+l*4>>2]=c,Hc(o,c),i+=o.length+1}),0},zc=(e,t)=>{var i=Er();De[e>>2]=i.length;var o=0;return i.forEach(l=>o+=l.length+1),De[t>>2]=o,0};function Wc(e){try{var t=He.getStreamFromFD(e);return _.close(t),0}catch(i){if(typeof _>"u"||i.name!=="ErrnoError")throw i;return i.errno}}function Qc(e,t){try{var i=0,o=0,l=0,c=He.getStreamFromFD(e),w=c.tty?2:_.isDir(c.mode)?3:_.isLink(c.mode)?7:4;return Ve[t]=w,bt[t+2>>1]=l,ct[t+8>>3]=BigInt(i),ct[t+16>>3]=BigInt(o),0}catch(k){if(typeof _>"u"||k.name!=="ErrnoError")throw k;return k.errno}}var Vc=(e,t,i,o)=>{for(var l=0,c=0;c<i;c++){var w=De[t>>2],k=De[t+4>>2];t+=8;var Q=_.read(e,Ve,w,k,o);if(Q<0)return-1;if(l+=Q,Q<k)break}return l};function Gc(e,t,i,o){try{var l=He.getStreamFromFD(e),c=Vc(l,t,i);return De[o>>2]=c,0}catch(w){if(typeof _>"u"||w.name!=="ErrnoError")throw w;return w.errno}}function Kc(e,t,i,o){t=vr(t);try{if(isNaN(t))return 61;var l=He.getStreamFromFD(e);return _.llseek(l,t,i),ct[o>>3]=BigInt(l.position),l.getdents&&t===0&&i===0&&(l.getdents=null),0}catch(c){if(typeof _>"u"||c.name!=="ErrnoError")throw c;return c.errno}}function Jc(e){var i;try{var t=He.getStreamFromFD(e);return(i=t.stream_ops)!=null&&i.fsync?t.stream_ops.fsync(t):0}catch(o){if(typeof _>"u"||o.name!=="ErrnoError")throw o;return o.errno}}var Xc=(e,t,i,o)=>{for(var l=0,c=0;c<i;c++){var w=De[t>>2],k=De[t+4>>2];t+=8;var Q=_.write(e,Ve,w,k,o);if(Q<0)return-1;if(l+=Q,Q<k)break}return l};function Yc(e,t,i,o){try{var l=He.getStreamFromFD(e),c=Xc(l,t,i);return De[o>>2]=c,0}catch(w){if(typeof _>"u"||w.name!=="ErrnoError")throw w;return w.errno}}_.createPreloadedFile=nc,_.staticInit();var Oi={__syscall_chmod:oc,__syscall_faccessat:ac,__syscall_fchmod:lc,__syscall_fchown32:cc,__syscall_fcntl64:uc,__syscall_fstat64:fc,__syscall_ftruncate64:hc,__syscall_getcwd:pc,__syscall_ioctl:mc,__syscall_lstat64:gc,__syscall_mkdirat:bc,__syscall_newfstatat:yc,__syscall_openat:wc,__syscall_readlinkat:xc,__syscall_rmdir:qc,__syscall_stat64:vc,__syscall_unlinkat:Ec,__syscall_utimensat:Sc,_emscripten_get_now_is_monotonic:Ac,_localtime_js:Pc,_mmap_js:Lc,_munmap_js:Cc,_tzset_js:Dc,emscripten_date_now:Rc,emscripten_get_now:Nc,emscripten_resize_heap:jc,environ_get:$c,environ_sizes_get:zc,fd_close:Wc,fd_fdstat_get:Qc,fd_read:Gc,fd_seek:Kc,fd_sync:Jc,fd_write:Yc,memory:ye},q=Kl();s._sqlite3_status64=(e,t,i,o)=>(s._sqlite3_status64=q.sqlite3_status64)(e,t,i,o),s._sqlite3_status=(e,t,i,o)=>(s._sqlite3_status=q.sqlite3_status)(e,t,i,o),s._sqlite3_db_status=(e,t,i,o,l)=>(s._sqlite3_db_status=q.sqlite3_db_status)(e,t,i,o,l),s._sqlite3_msize=e=>(s._sqlite3_msize=q.sqlite3_msize)(e),s._sqlite3_vfs_find=e=>(s._sqlite3_vfs_find=q.sqlite3_vfs_find)(e),s._sqlite3_initialize=()=>(s._sqlite3_initialize=q.sqlite3_initialize)(),s._sqlite3_malloc=e=>(s._sqlite3_malloc=q.sqlite3_malloc)(e),s._sqlite3_free=e=>(s._sqlite3_free=q.sqlite3_free)(e),s._sqlite3_vfs_register=(e,t)=>(s._sqlite3_vfs_register=q.sqlite3_vfs_register)(e,t),s._sqlite3_vfs_unregister=e=>(s._sqlite3_vfs_unregister=q.sqlite3_vfs_unregister)(e),s._sqlite3_malloc64=e=>(s._sqlite3_malloc64=q.sqlite3_malloc64)(e),s._sqlite3_realloc=(e,t)=>(s._sqlite3_realloc=q.sqlite3_realloc)(e,t),s._sqlite3_realloc64=(e,t)=>(s._sqlite3_realloc64=q.sqlite3_realloc64)(e,t),s._sqlite3_value_text=e=>(s._sqlite3_value_text=q.sqlite3_value_text)(e),s._sqlite3_randomness=(e,t)=>(s._sqlite3_randomness=q.sqlite3_randomness)(e,t),s._sqlite3_stricmp=(e,t)=>(s._sqlite3_stricmp=q.sqlite3_stricmp)(e,t),s._sqlite3_strnicmp=(e,t,i)=>(s._sqlite3_strnicmp=q.sqlite3_strnicmp)(e,t,i),s._sqlite3_uri_parameter=(e,t)=>(s._sqlite3_uri_parameter=q.sqlite3_uri_parameter)(e,t),s._sqlite3_uri_boolean=(e,t,i)=>(s._sqlite3_uri_boolean=q.sqlite3_uri_boolean)(e,t,i),s._sqlite3_serialize=(e,t,i,o)=>(s._sqlite3_serialize=q.sqlite3_serialize)(e,t,i,o),s._sqlite3_prepare_v2=(e,t,i,o,l)=>(s._sqlite3_prepare_v2=q.sqlite3_prepare_v2)(e,t,i,o,l),s._sqlite3_step=e=>(s._sqlite3_step=q.sqlite3_step)(e),s._sqlite3_column_int64=(e,t)=>(s._sqlite3_column_int64=q.sqlite3_column_int64)(e,t),s._sqlite3_reset=e=>(s._sqlite3_reset=q.sqlite3_reset)(e),s._sqlite3_exec=(e,t,i,o,l)=>(s._sqlite3_exec=q.sqlite3_exec)(e,t,i,o,l),s._sqlite3_column_int=(e,t)=>(s._sqlite3_column_int=q.sqlite3_column_int)(e,t),s._sqlite3_finalize=e=>(s._sqlite3_finalize=q.sqlite3_finalize)(e),s._sqlite3_file_control=(e,t,i,o)=>(s._sqlite3_file_control=q.sqlite3_file_control)(e,t,i,o),s._sqlite3_column_name=(e,t)=>(s._sqlite3_column_name=q.sqlite3_column_name)(e,t),s._sqlite3_column_text=(e,t)=>(s._sqlite3_column_text=q.sqlite3_column_text)(e,t),s._sqlite3_column_type=(e,t)=>(s._sqlite3_column_type=q.sqlite3_column_type)(e,t),s._sqlite3_errmsg=e=>(s._sqlite3_errmsg=q.sqlite3_errmsg)(e),s._sqlite3_deserialize=(e,t,i,o,l,c)=>(s._sqlite3_deserialize=q.sqlite3_deserialize)(e,t,i,o,l,c),s._sqlite3_clear_bindings=e=>(s._sqlite3_clear_bindings=q.sqlite3_clear_bindings)(e),s._sqlite3_value_blob=e=>(s._sqlite3_value_blob=q.sqlite3_value_blob)(e),s._sqlite3_value_bytes=e=>(s._sqlite3_value_bytes=q.sqlite3_value_bytes)(e),s._sqlite3_value_double=e=>(s._sqlite3_value_double=q.sqlite3_value_double)(e),s._sqlite3_value_int=e=>(s._sqlite3_value_int=q.sqlite3_value_int)(e),s._sqlite3_value_int64=e=>(s._sqlite3_value_int64=q.sqlite3_value_int64)(e),s._sqlite3_value_subtype=e=>(s._sqlite3_value_subtype=q.sqlite3_value_subtype)(e),s._sqlite3_value_pointer=(e,t)=>(s._sqlite3_value_pointer=q.sqlite3_value_pointer)(e,t),s._sqlite3_value_type=e=>(s._sqlite3_value_type=q.sqlite3_value_type)(e),s._sqlite3_value_nochange=e=>(s._sqlite3_value_nochange=q.sqlite3_value_nochange)(e),s._sqlite3_value_frombind=e=>(s._sqlite3_value_frombind=q.sqlite3_value_frombind)(e),s._sqlite3_value_dup=e=>(s._sqlite3_value_dup=q.sqlite3_value_dup)(e),s._sqlite3_value_free=e=>(s._sqlite3_value_free=q.sqlite3_value_free)(e),s._sqlite3_result_blob=(e,t,i,o)=>(s._sqlite3_result_blob=q.sqlite3_result_blob)(e,t,i,o),s._sqlite3_result_error_toobig=e=>(s._sqlite3_result_error_toobig=q.sqlite3_result_error_toobig)(e),s._sqlite3_result_error_nomem=e=>(s._sqlite3_result_error_nomem=q.sqlite3_result_error_nomem)(e),s._sqlite3_result_double=(e,t)=>(s._sqlite3_result_double=q.sqlite3_result_double)(e,t),s._sqlite3_result_error=(e,t,i)=>(s._sqlite3_result_error=q.sqlite3_result_error)(e,t,i),s._sqlite3_result_int=(e,t)=>(s._sqlite3_result_int=q.sqlite3_result_int)(e,t),s._sqlite3_result_int64=(e,t)=>(s._sqlite3_result_int64=q.sqlite3_result_int64)(e,t),s._sqlite3_result_null=e=>(s._sqlite3_result_null=q.sqlite3_result_null)(e),s._sqlite3_result_pointer=(e,t,i,o)=>(s._sqlite3_result_pointer=q.sqlite3_result_pointer)(e,t,i,o),s._sqlite3_result_subtype=(e,t)=>(s._sqlite3_result_subtype=q.sqlite3_result_subtype)(e,t),s._sqlite3_result_text=(e,t,i,o)=>(s._sqlite3_result_text=q.sqlite3_result_text)(e,t,i,o),s._sqlite3_result_zeroblob=(e,t)=>(s._sqlite3_result_zeroblob=q.sqlite3_result_zeroblob)(e,t),s._sqlite3_result_zeroblob64=(e,t)=>(s._sqlite3_result_zeroblob64=q.sqlite3_result_zeroblob64)(e,t),s._sqlite3_result_error_code=(e,t)=>(s._sqlite3_result_error_code=q.sqlite3_result_error_code)(e,t),s._sqlite3_user_data=e=>(s._sqlite3_user_data=q.sqlite3_user_data)(e),s._sqlite3_context_db_handle=e=>(s._sqlite3_context_db_handle=q.sqlite3_context_db_handle)(e),s._sqlite3_vtab_nochange=e=>(s._sqlite3_vtab_nochange=q.sqlite3_vtab_nochange)(e),s._sqlite3_vtab_in_first=(e,t)=>(s._sqlite3_vtab_in_first=q.sqlite3_vtab_in_first)(e,t),s._sqlite3_vtab_in_next=(e,t)=>(s._sqlite3_vtab_in_next=q.sqlite3_vtab_in_next)(e,t),s._sqlite3_aggregate_context=(e,t)=>(s._sqlite3_aggregate_context=q.sqlite3_aggregate_context)(e,t),s._sqlite3_get_auxdata=(e,t)=>(s._sqlite3_get_auxdata=q.sqlite3_get_auxdata)(e,t),s._sqlite3_set_auxdata=(e,t,i,o)=>(s._sqlite3_set_auxdata=q.sqlite3_set_auxdata)(e,t,i,o),s._sqlite3_column_count=e=>(s._sqlite3_column_count=q.sqlite3_column_count)(e),s._sqlite3_data_count=e=>(s._sqlite3_data_count=q.sqlite3_data_count)(e),s._sqlite3_column_blob=(e,t)=>(s._sqlite3_column_blob=q.sqlite3_column_blob)(e,t),s._sqlite3_column_bytes=(e,t)=>(s._sqlite3_column_bytes=q.sqlite3_column_bytes)(e,t),s._sqlite3_column_double=(e,t)=>(s._sqlite3_column_double=q.sqlite3_column_double)(e,t),s._sqlite3_column_value=(e,t)=>(s._sqlite3_column_value=q.sqlite3_column_value)(e,t),s._sqlite3_column_decltype=(e,t)=>(s._sqlite3_column_decltype=q.sqlite3_column_decltype)(e,t),s._sqlite3_bind_blob=(e,t,i,o,l)=>(s._sqlite3_bind_blob=q.sqlite3_bind_blob)(e,t,i,o,l),s._sqlite3_bind_double=(e,t,i)=>(s._sqlite3_bind_double=q.sqlite3_bind_double)(e,t,i),s._sqlite3_bind_int=(e,t,i)=>(s._sqlite3_bind_int=q.sqlite3_bind_int)(e,t,i),s._sqlite3_bind_int64=(e,t,i)=>(s._sqlite3_bind_int64=q.sqlite3_bind_int64)(e,t,i),s._sqlite3_bind_null=(e,t)=>(s._sqlite3_bind_null=q.sqlite3_bind_null)(e,t),s._sqlite3_bind_pointer=(e,t,i,o,l)=>(s._sqlite3_bind_pointer=q.sqlite3_bind_pointer)(e,t,i,o,l),s._sqlite3_bind_text=(e,t,i,o,l)=>(s._sqlite3_bind_text=q.sqlite3_bind_text)(e,t,i,o,l),s._sqlite3_bind_parameter_count=e=>(s._sqlite3_bind_parameter_count=q.sqlite3_bind_parameter_count)(e),s._sqlite3_bind_parameter_name=(e,t)=>(s._sqlite3_bind_parameter_name=q.sqlite3_bind_parameter_name)(e,t),s._sqlite3_bind_parameter_index=(e,t)=>(s._sqlite3_bind_parameter_index=q.sqlite3_bind_parameter_index)(e,t),s._sqlite3_db_handle=e=>(s._sqlite3_db_handle=q.sqlite3_db_handle)(e),s._sqlite3_stmt_readonly=e=>(s._sqlite3_stmt_readonly=q.sqlite3_stmt_readonly)(e),s._sqlite3_stmt_isexplain=e=>(s._sqlite3_stmt_isexplain=q.sqlite3_stmt_isexplain)(e),s._sqlite3_stmt_explain=(e,t)=>(s._sqlite3_stmt_explain=q.sqlite3_stmt_explain)(e,t),s._sqlite3_stmt_busy=e=>(s._sqlite3_stmt_busy=q.sqlite3_stmt_busy)(e),s._sqlite3_stmt_status=(e,t,i)=>(s._sqlite3_stmt_status=q.sqlite3_stmt_status)(e,t,i),s._sqlite3_sql=e=>(s._sqlite3_sql=q.sqlite3_sql)(e),s._sqlite3_expanded_sql=e=>(s._sqlite3_expanded_sql=q.sqlite3_expanded_sql)(e),s._sqlite3_preupdate_old=(e,t,i)=>(s._sqlite3_preupdate_old=q.sqlite3_preupdate_old)(e,t,i),s._sqlite3_preupdate_count=e=>(s._sqlite3_preupdate_count=q.sqlite3_preupdate_count)(e),s._sqlite3_preupdate_depth=e=>(s._sqlite3_preupdate_depth=q.sqlite3_preupdate_depth)(e),s._sqlite3_preupdate_blobwrite=e=>(s._sqlite3_preupdate_blobwrite=q.sqlite3_preupdate_blobwrite)(e),s._sqlite3_preupdate_new=(e,t,i)=>(s._sqlite3_preupdate_new=q.sqlite3_preupdate_new)(e,t,i),s._sqlite3_value_numeric_type=e=>(s._sqlite3_value_numeric_type=q.sqlite3_value_numeric_type)(e),s._sqlite3_set_authorizer=(e,t,i)=>(s._sqlite3_set_authorizer=q.sqlite3_set_authorizer)(e,t,i),s._sqlite3_strglob=(e,t)=>(s._sqlite3_strglob=q.sqlite3_strglob)(e,t),s._sqlite3_strlike=(e,t,i)=>(s._sqlite3_strlike=q.sqlite3_strlike)(e,t,i),s._sqlite3_auto_extension=e=>(s._sqlite3_auto_extension=q.sqlite3_auto_extension)(e),s._sqlite3_cancel_auto_extension=e=>(s._sqlite3_cancel_auto_extension=q.sqlite3_cancel_auto_extension)(e),s._sqlite3_reset_auto_extension=()=>(s._sqlite3_reset_auto_extension=q.sqlite3_reset_auto_extension)(),s._sqlite3_prepare_v3=(e,t,i,o,l,c)=>(s._sqlite3_prepare_v3=q.sqlite3_prepare_v3)(e,t,i,o,l,c),s._sqlite3_create_module=(e,t,i,o)=>(s._sqlite3_create_module=q.sqlite3_create_module)(e,t,i,o),s._sqlite3_create_module_v2=(e,t,i,o,l)=>(s._sqlite3_create_module_v2=q.sqlite3_create_module_v2)(e,t,i,o,l),s._sqlite3_drop_modules=(e,t)=>(s._sqlite3_drop_modules=q.sqlite3_drop_modules)(e,t),s._sqlite3_declare_vtab=(e,t)=>(s._sqlite3_declare_vtab=q.sqlite3_declare_vtab)(e,t),s._sqlite3_vtab_on_conflict=e=>(s._sqlite3_vtab_on_conflict=q.sqlite3_vtab_on_conflict)(e),s._sqlite3_vtab_collation=(e,t)=>(s._sqlite3_vtab_collation=q.sqlite3_vtab_collation)(e,t),s._sqlite3_vtab_in=(e,t,i)=>(s._sqlite3_vtab_in=q.sqlite3_vtab_in)(e,t,i),s._sqlite3_vtab_rhs_value=(e,t,i)=>(s._sqlite3_vtab_rhs_value=q.sqlite3_vtab_rhs_value)(e,t,i),s._sqlite3_vtab_distinct=e=>(s._sqlite3_vtab_distinct=q.sqlite3_vtab_distinct)(e),s._sqlite3_keyword_name=(e,t,i)=>(s._sqlite3_keyword_name=q.sqlite3_keyword_name)(e,t,i),s._sqlite3_keyword_count=()=>(s._sqlite3_keyword_count=q.sqlite3_keyword_count)(),s._sqlite3_keyword_check=(e,t)=>(s._sqlite3_keyword_check=q.sqlite3_keyword_check)(e,t),s._sqlite3_complete=e=>(s._sqlite3_complete=q.sqlite3_complete)(e),s._sqlite3_libversion=()=>(s._sqlite3_libversion=q.sqlite3_libversion)(),s._sqlite3_libversion_number=()=>(s._sqlite3_libversion_number=q.sqlite3_libversion_number)(),s._sqlite3_shutdown=()=>(s._sqlite3_shutdown=q.sqlite3_shutdown)(),s._sqlite3_last_insert_rowid=e=>(s._sqlite3_last_insert_rowid=q.sqlite3_last_insert_rowid)(e),s._sqlite3_set_last_insert_rowid=(e,t)=>(s._sqlite3_set_last_insert_rowid=q.sqlite3_set_last_insert_rowid)(e,t),s._sqlite3_changes64=e=>(s._sqlite3_changes64=q.sqlite3_changes64)(e),s._sqlite3_changes=e=>(s._sqlite3_changes=q.sqlite3_changes)(e),s._sqlite3_total_changes64=e=>(s._sqlite3_total_changes64=q.sqlite3_total_changes64)(e),s._sqlite3_total_changes=e=>(s._sqlite3_total_changes=q.sqlite3_total_changes)(e),s._sqlite3_txn_state=(e,t)=>(s._sqlite3_txn_state=q.sqlite3_txn_state)(e,t),s._sqlite3_close_v2=e=>(s._sqlite3_close_v2=q.sqlite3_close_v2)(e),s._sqlite3_busy_handler=(e,t,i)=>(s._sqlite3_busy_handler=q.sqlite3_busy_handler)(e,t,i),s._sqlite3_progress_handler=(e,t,i,o)=>(s._sqlite3_progress_handler=q.sqlite3_progress_handler)(e,t,i,o),s._sqlite3_busy_timeout=(e,t)=>(s._sqlite3_busy_timeout=q.sqlite3_busy_timeout)(e,t),s._sqlite3_interrupt=e=>(s._sqlite3_interrupt=q.sqlite3_interrupt)(e),s._sqlite3_is_interrupted=e=>(s._sqlite3_is_interrupted=q.sqlite3_is_interrupted)(e),s._sqlite3_create_function=(e,t,i,o,l,c,w,k)=>(s._sqlite3_create_function=q.sqlite3_create_function)(e,t,i,o,l,c,w,k),s._sqlite3_create_function_v2=(e,t,i,o,l,c,w,k,Q)=>(s._sqlite3_create_function_v2=q.sqlite3_create_function_v2)(e,t,i,o,l,c,w,k,Q),s._sqlite3_create_window_function=(e,t,i,o,l,c,w,k,Q,V)=>(s._sqlite3_create_window_function=q.sqlite3_create_window_function)(e,t,i,o,l,c,w,k,Q,V),s._sqlite3_overload_function=(e,t,i)=>(s._sqlite3_overload_function=q.sqlite3_overload_function)(e,t,i),s._sqlite3_trace_v2=(e,t,i,o)=>(s._sqlite3_trace_v2=q.sqlite3_trace_v2)(e,t,i,o),s._sqlite3_commit_hook=(e,t,i)=>(s._sqlite3_commit_hook=q.sqlite3_commit_hook)(e,t,i),s._sqlite3_update_hook=(e,t,i)=>(s._sqlite3_update_hook=q.sqlite3_update_hook)(e,t,i),s._sqlite3_rollback_hook=(e,t,i)=>(s._sqlite3_rollback_hook=q.sqlite3_rollback_hook)(e,t,i),s._sqlite3_preupdate_hook=(e,t,i)=>(s._sqlite3_preupdate_hook=q.sqlite3_preupdate_hook)(e,t,i),s._sqlite3_error_offset=e=>(s._sqlite3_error_offset=q.sqlite3_error_offset)(e),s._sqlite3_errcode=e=>(s._sqlite3_errcode=q.sqlite3_errcode)(e),s._sqlite3_extended_errcode=e=>(s._sqlite3_extended_errcode=q.sqlite3_extended_errcode)(e),s._sqlite3_errstr=e=>(s._sqlite3_errstr=q.sqlite3_errstr)(e),s._sqlite3_limit=(e,t,i)=>(s._sqlite3_limit=q.sqlite3_limit)(e,t,i),s._sqlite3_open=(e,t)=>(s._sqlite3_open=q.sqlite3_open)(e,t),s._sqlite3_open_v2=(e,t,i,o)=>(s._sqlite3_open_v2=q.sqlite3_open_v2)(e,t,i,o),s._sqlite3_create_collation=(e,t,i,o,l)=>(s._sqlite3_create_collation=q.sqlite3_create_collation)(e,t,i,o,l),s._sqlite3_create_collation_v2=(e,t,i,o,l,c)=>(s._sqlite3_create_collation_v2=q.sqlite3_create_collation_v2)(e,t,i,o,l,c),s._sqlite3_collation_needed=(e,t,i)=>(s._sqlite3_collation_needed=q.sqlite3_collation_needed)(e,t,i),s._sqlite3_get_autocommit=e=>(s._sqlite3_get_autocommit=q.sqlite3_get_autocommit)(e),s._sqlite3_table_column_metadata=(e,t,i,o,l,c,w,k,Q)=>(s._sqlite3_table_column_metadata=q.sqlite3_table_column_metadata)(e,t,i,o,l,c,w,k,Q),s._sqlite3_extended_result_codes=(e,t)=>(s._sqlite3_extended_result_codes=q.sqlite3_extended_result_codes)(e,t),s._sqlite3_uri_key=(e,t)=>(s._sqlite3_uri_key=q.sqlite3_uri_key)(e,t),s._sqlite3_uri_int64=(e,t,i)=>(s._sqlite3_uri_int64=q.sqlite3_uri_int64)(e,t,i),s._sqlite3_db_name=(e,t)=>(s._sqlite3_db_name=q.sqlite3_db_name)(e,t),s._sqlite3_db_filename=(e,t)=>(s._sqlite3_db_filename=q.sqlite3_db_filename)(e,t),s._sqlite3_db_readonly=(e,t)=>(s._sqlite3_db_readonly=q.sqlite3_db_readonly)(e,t),s._sqlite3_compileoption_used=e=>(s._sqlite3_compileoption_used=q.sqlite3_compileoption_used)(e),s._sqlite3_compileoption_get=e=>(s._sqlite3_compileoption_get=q.sqlite3_compileoption_get)(e),s._sqlite3session_diff=(e,t,i,o)=>(s._sqlite3session_diff=q.sqlite3session_diff)(e,t,i,o),s._sqlite3session_attach=(e,t)=>(s._sqlite3session_attach=q.sqlite3session_attach)(e,t),s._sqlite3session_create=(e,t,i)=>(s._sqlite3session_create=q.sqlite3session_create)(e,t,i),s._sqlite3session_delete=e=>(s._sqlite3session_delete=q.sqlite3session_delete)(e),s._sqlite3session_table_filter=(e,t,i)=>(s._sqlite3session_table_filter=q.sqlite3session_table_filter)(e,t,i),s._sqlite3session_changeset=(e,t,i)=>(s._sqlite3session_changeset=q.sqlite3session_changeset)(e,t,i),s._sqlite3session_changeset_strm=(e,t,i)=>(s._sqlite3session_changeset_strm=q.sqlite3session_changeset_strm)(e,t,i),s._sqlite3session_patchset_strm=(e,t,i)=>(s._sqlite3session_patchset_strm=q.sqlite3session_patchset_strm)(e,t,i),s._sqlite3session_patchset=(e,t,i)=>(s._sqlite3session_patchset=q.sqlite3session_patchset)(e,t,i),s._sqlite3session_enable=(e,t)=>(s._sqlite3session_enable=q.sqlite3session_enable)(e,t),s._sqlite3session_indirect=(e,t)=>(s._sqlite3session_indirect=q.sqlite3session_indirect)(e,t),s._sqlite3session_isempty=e=>(s._sqlite3session_isempty=q.sqlite3session_isempty)(e),s._sqlite3session_memory_used=e=>(s._sqlite3session_memory_used=q.sqlite3session_memory_used)(e),s._sqlite3session_object_config=(e,t,i)=>(s._sqlite3session_object_config=q.sqlite3session_object_config)(e,t,i),s._sqlite3session_changeset_size=e=>(s._sqlite3session_changeset_size=q.sqlite3session_changeset_size)(e),s._sqlite3changeset_start=(e,t,i)=>(s._sqlite3changeset_start=q.sqlite3changeset_start)(e,t,i),s._sqlite3changeset_start_v2=(e,t,i,o)=>(s._sqlite3changeset_start_v2=q.sqlite3changeset_start_v2)(e,t,i,o),s._sqlite3changeset_start_strm=(e,t,i)=>(s._sqlite3changeset_start_strm=q.sqlite3changeset_start_strm)(e,t,i),s._sqlite3changeset_start_v2_strm=(e,t,i,o)=>(s._sqlite3changeset_start_v2_strm=q.sqlite3changeset_start_v2_strm)(e,t,i,o),s._sqlite3changeset_next=e=>(s._sqlite3changeset_next=q.sqlite3changeset_next)(e),s._sqlite3changeset_op=(e,t,i,o,l)=>(s._sqlite3changeset_op=q.sqlite3changeset_op)(e,t,i,o,l),s._sqlite3changeset_pk=(e,t,i)=>(s._sqlite3changeset_pk=q.sqlite3changeset_pk)(e,t,i),s._sqlite3changeset_old=(e,t,i)=>(s._sqlite3changeset_old=q.sqlite3changeset_old)(e,t,i),s._sqlite3changeset_new=(e,t,i)=>(s._sqlite3changeset_new=q.sqlite3changeset_new)(e,t,i),s._sqlite3changeset_conflict=(e,t,i)=>(s._sqlite3changeset_conflict=q.sqlite3changeset_conflict)(e,t,i),s._sqlite3changeset_fk_conflicts=(e,t)=>(s._sqlite3changeset_fk_conflicts=q.sqlite3changeset_fk_conflicts)(e,t),s._sqlite3changeset_finalize=e=>(s._sqlite3changeset_finalize=q.sqlite3changeset_finalize)(e),s._sqlite3changeset_invert=(e,t,i,o)=>(s._sqlite3changeset_invert=q.sqlite3changeset_invert)(e,t,i,o),s._sqlite3changeset_invert_strm=(e,t,i,o)=>(s._sqlite3changeset_invert_strm=q.sqlite3changeset_invert_strm)(e,t,i,o),s._sqlite3changeset_apply_v2=(e,t,i,o,l,c,w,k,Q)=>(s._sqlite3changeset_apply_v2=q.sqlite3changeset_apply_v2)(e,t,i,o,l,c,w,k,Q),s._sqlite3changeset_apply=(e,t,i,o,l,c)=>(s._sqlite3changeset_apply=q.sqlite3changeset_apply)(e,t,i,o,l,c),s._sqlite3changeset_apply_v2_strm=(e,t,i,o,l,c,w,k,Q)=>(s._sqlite3changeset_apply_v2_strm=q.sqlite3changeset_apply_v2_strm)(e,t,i,o,l,c,w,k,Q),s._sqlite3changeset_apply_strm=(e,t,i,o,l,c)=>(s._sqlite3changeset_apply_strm=q.sqlite3changeset_apply_strm)(e,t,i,o,l,c),s._sqlite3changegroup_new=e=>(s._sqlite3changegroup_new=q.sqlite3changegroup_new)(e),s._sqlite3changegroup_add=(e,t,i)=>(s._sqlite3changegroup_add=q.sqlite3changegroup_add)(e,t,i),s._sqlite3changegroup_output=(e,t,i)=>(s._sqlite3changegroup_output=q.sqlite3changegroup_output)(e,t,i),s._sqlite3changegroup_add_strm=(e,t,i)=>(s._sqlite3changegroup_add_strm=q.sqlite3changegroup_add_strm)(e,t,i),s._sqlite3changegroup_output_strm=(e,t,i)=>(s._sqlite3changegroup_output_strm=q.sqlite3changegroup_output_strm)(e,t,i),s._sqlite3changegroup_delete=e=>(s._sqlite3changegroup_delete=q.sqlite3changegroup_delete)(e),s._sqlite3changeset_concat=(e,t,i,o,l,c)=>(s._sqlite3changeset_concat=q.sqlite3changeset_concat)(e,t,i,o,l,c),s._sqlite3changeset_concat_strm=(e,t,i,o,l,c)=>(s._sqlite3changeset_concat_strm=q.sqlite3changeset_concat_strm)(e,t,i,o,l,c),s._sqlite3session_config=(e,t)=>(s._sqlite3session_config=q.sqlite3session_config)(e,t),s._sqlite3_sourceid=()=>(s._sqlite3_sourceid=q.sqlite3_sourceid)(),s._sqlite3__wasm_pstack_ptr=()=>(s._sqlite3__wasm_pstack_ptr=q.sqlite3__wasm_pstack_ptr)(),s._sqlite3__wasm_pstack_restore=e=>(s._sqlite3__wasm_pstack_restore=q.sqlite3__wasm_pstack_restore)(e),s._sqlite3__wasm_pstack_alloc=e=>(s._sqlite3__wasm_pstack_alloc=q.sqlite3__wasm_pstack_alloc)(e),s._sqlite3__wasm_pstack_remaining=()=>(s._sqlite3__wasm_pstack_remaining=q.sqlite3__wasm_pstack_remaining)(),s._sqlite3__wasm_pstack_quota=()=>(s._sqlite3__wasm_pstack_quota=q.sqlite3__wasm_pstack_quota)(),s._sqlite3__wasm_db_error=(e,t,i)=>(s._sqlite3__wasm_db_error=q.sqlite3__wasm_db_error)(e,t,i),s._sqlite3__wasm_test_struct=e=>(s._sqlite3__wasm_test_struct=q.sqlite3__wasm_test_struct)(e),s._sqlite3__wasm_enum_json=()=>(s._sqlite3__wasm_enum_json=q.sqlite3__wasm_enum_json)(),s._sqlite3__wasm_vfs_unlink=(e,t)=>(s._sqlite3__wasm_vfs_unlink=q.sqlite3__wasm_vfs_unlink)(e,t),s._sqlite3__wasm_db_vfs=(e,t)=>(s._sqlite3__wasm_db_vfs=q.sqlite3__wasm_db_vfs)(e,t),s._sqlite3__wasm_db_reset=e=>(s._sqlite3__wasm_db_reset=q.sqlite3__wasm_db_reset)(e),s._sqlite3__wasm_db_export_chunked=(e,t)=>(s._sqlite3__wasm_db_export_chunked=q.sqlite3__wasm_db_export_chunked)(e,t),s._sqlite3__wasm_db_serialize=(e,t,i,o,l)=>(s._sqlite3__wasm_db_serialize=q.sqlite3__wasm_db_serialize)(e,t,i,o,l),s._sqlite3__wasm_vfs_create_file=(e,t,i,o)=>(s._sqlite3__wasm_vfs_create_file=q.sqlite3__wasm_vfs_create_file)(e,t,i,o),s._sqlite3__wasm_posix_create_file=(e,t,i)=>(s._sqlite3__wasm_posix_create_file=q.sqlite3__wasm_posix_create_file)(e,t,i),s._sqlite3__wasm_kvvfsMakeKeyOnPstack=(e,t)=>(s._sqlite3__wasm_kvvfsMakeKeyOnPstack=q.sqlite3__wasm_kvvfsMakeKeyOnPstack)(e,t),s._sqlite3__wasm_kvvfs_methods=()=>(s._sqlite3__wasm_kvvfs_methods=q.sqlite3__wasm_kvvfs_methods)(),s._sqlite3__wasm_vtab_config=(e,t,i)=>(s._sqlite3__wasm_vtab_config=q.sqlite3__wasm_vtab_config)(e,t,i),s._sqlite3__wasm_db_config_ip=(e,t,i,o)=>(s._sqlite3__wasm_db_config_ip=q.sqlite3__wasm_db_config_ip)(e,t,i,o),s._sqlite3__wasm_db_config_pii=(e,t,i,o,l)=>(s._sqlite3__wasm_db_config_pii=q.sqlite3__wasm_db_config_pii)(e,t,i,o,l),s._sqlite3__wasm_db_config_s=(e,t,i)=>(s._sqlite3__wasm_db_config_s=q.sqlite3__wasm_db_config_s)(e,t,i),s._sqlite3__wasm_config_i=(e,t)=>(s._sqlite3__wasm_config_i=q.sqlite3__wasm_config_i)(e,t),s._sqlite3__wasm_config_ii=(e,t,i)=>(s._sqlite3__wasm_config_ii=q.sqlite3__wasm_config_ii)(e,t,i),s._sqlite3__wasm_config_j=(e,t)=>(s._sqlite3__wasm_config_j=q.sqlite3__wasm_config_j)(e,t),s._sqlite3__wasm_qfmt_token=(e,t)=>(s._sqlite3__wasm_qfmt_token=q.sqlite3__wasm_qfmt_token)(e,t),s._sqlite3__wasm_init_wasmfs=e=>(s._sqlite3__wasm_init_wasmfs=q.sqlite3__wasm_init_wasmfs)(e),s._sqlite3__wasm_test_intptr=e=>(s._sqlite3__wasm_test_intptr=q.sqlite3__wasm_test_intptr)(e),s._sqlite3__wasm_test_voidptr=e=>(s._sqlite3__wasm_test_voidptr=q.sqlite3__wasm_test_voidptr)(e),s._sqlite3__wasm_test_int64_max=()=>(s._sqlite3__wasm_test_int64_max=q.sqlite3__wasm_test_int64_max)(),s._sqlite3__wasm_test_int64_min=()=>(s._sqlite3__wasm_test_int64_min=q.sqlite3__wasm_test_int64_min)(),s._sqlite3__wasm_test_int64_times2=e=>(s._sqlite3__wasm_test_int64_times2=q.sqlite3__wasm_test_int64_times2)(e),s._sqlite3__wasm_test_int64_minmax=(e,t)=>(s._sqlite3__wasm_test_int64_minmax=q.sqlite3__wasm_test_int64_minmax)(e,t),s._sqlite3__wasm_test_int64ptr=e=>(s._sqlite3__wasm_test_int64ptr=q.sqlite3__wasm_test_int64ptr)(e),s._sqlite3__wasm_test_stack_overflow=e=>(s._sqlite3__wasm_test_stack_overflow=q.sqlite3__wasm_test_stack_overflow)(e),s._sqlite3__wasm_test_str_hello=e=>(s._sqlite3__wasm_test_str_hello=q.sqlite3__wasm_test_str_hello)(e),s._sqlite3__wasm_SQLTester_strglob=(e,t)=>(s._sqlite3__wasm_SQLTester_strglob=q.sqlite3__wasm_SQLTester_strglob)(e,t),s._malloc=e=>(s._malloc=q.malloc)(e),s._free=e=>(s._free=q.free)(e),s._realloc=(e,t)=>(s._realloc=q.realloc)(e,t);var Pi=(e,t)=>(Pi=q.emscripten_builtin_memalign)(e,t);s.wasmMemory=ye;var Zr,Li;yt=function e(){Zr||Ci(),Zr||(yt=e)};function Ci(){if(We>0||!Li&&(Li=1,ce(),We>0))return;function e(){var t;Zr||(Zr=1,s.calledRun=1,!Ce&&(me(),u(s),(t=s.onRuntimeInitialized)==null||t.call(s),Oe()))}s.setStatus?(s.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>s.setStatus(""),1),e()},1)):e()}if(s.preInit)for(typeof s.preInit=="function"&&(s.preInit=[s.preInit]);s.preInit.length>0;)s.preInit.pop()();return Ci(),s.runSQLite3PostLoadInit=function(e){if(globalThis.sqlite3ApiBootstrap=function t(i=globalThis.sqlite3ApiConfig||t.defaultConfig){if(t.sqlite3)return(t.sqlite3.config||console).warn("sqlite3ApiBootstrap() called multiple times.","Config and external initializers are ignored on calls after the first."),t.sqlite3;const o=Object.assign(Object.create(null),{exports:void 0,memory:void 0,bigIntEnabled:typeof s<"u"&&s.HEAPU64?!0:!!globalThis.BigInt64Array,debug:console.debug.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),log:console.log.bind(console),wasmfsOpfsDir:"/opfs",useStdAlloc:!1},i||{});Object.assign(o,{allocExportName:o.useStdAlloc?"malloc":"sqlite3_malloc",deallocExportName:o.useStdAlloc?"free":"sqlite3_free",reallocExportName:o.useStdAlloc?"realloc":"sqlite3_realloc"},o),["exports","memory","wasmfsOpfsDir"].forEach(f=>{typeof o[f]=="function"&&(o[f]=o[f]())}),delete globalThis.sqlite3ApiConfig,delete t.defaultConfig;const l=Object.create(null),c=Object.create(null),w=f=>l.sqlite3_js_rc_str&&l.sqlite3_js_rc_str(f)||"Unknown result code #"+f,k=f=>typeof f=="number"&&f===(f|0);class Q extends Error{constructor(...p){let A;if(p.length)if(k(p[0]))if(A=p[0],p.length===1)super(w(p[0]));else{const I=w(A);typeof p[1]=="object"?super(I,p[1]):(p[0]=I+":",super(p.join(" ")))}else p.length===2&&typeof p[1]=="object"?super(...p):super(p.join(" "));this.resultCode=A||l.SQLITE_ERROR,this.name="SQLite3Error"}}Q.toss=(...f)=>{throw new Q(...f)};const V=Q.toss;o.wasmfsOpfsDir&&!/^\/[^/]+$/.test(o.wasmfsOpfsDir)&&V("config.wasmfsOpfsDir must be falsy or in the form '/dir-name'.");const oe=f=>typeof f!="bigint"&&f===(f|0)&&f<=2147483647&&f>=-2147483648,le=function f(p){return f._max||(f._max=BigInt("0x7fffffffffffffff"),f._min=~f._max),p>=f._min&&p<=f._max},W=f=>f>=-0x7fffffffn-1n&&f<=0x7fffffffn,R=function f(p){return f._min||(f._min=Number.MIN_SAFE_INTEGER,f._max=Number.MAX_SAFE_INTEGER),p>=f._min&&p<=f._max},Y=f=>f&&f.constructor&&oe(f.constructor.BYTES_PER_ELEMENT)?f:!1,T=typeof SharedArrayBuffer>"u"?function(){}:SharedArrayBuffer,P=f=>f.buffer instanceof T,j=(f,p,A)=>P(f)?f.slice(p,A):f.subarray(p,A),$=f=>f&&(f instanceof Uint8Array||f instanceof Int8Array||f instanceof ArrayBuffer),G=f=>f&&(f instanceof Uint8Array||f instanceof Int8Array||f instanceof ArrayBuffer),C=f=>$(f)||V("Value is not of a supported TypedArray type."),Z=new TextDecoder("utf-8"),ae=function(f,p,A){return Z.decode(j(f,p,A))},h=function(f){return G(f)?ae(f instanceof ArrayBuffer?new Uint8Array(f):f):Array.isArray(f)?f.join(""):(c.isPtr(f)&&(f=c.cstrToJs(f)),f)};class S extends Error{constructor(...p){p.length===2&&typeof p[1]=="object"?super(...p):p.length?super(p.join(" ")):super("Allocation failed."),this.resultCode=l.SQLITE_NOMEM,this.name="WasmAllocError"}}S.toss=(...f)=>{throw new S(...f)},Object.assign(l,{sqlite3_bind_blob:void 0,sqlite3_bind_text:void 0,sqlite3_create_function_v2:(f,p,A,I,re,be,Ae,Re,Fe)=>{},sqlite3_create_function:(f,p,A,I,re,be,Ae,Re)=>{},sqlite3_create_window_function:(f,p,A,I,re,be,Ae,Re,Fe,Pe)=>{},sqlite3_prepare_v3:(f,p,A,I,re,be)=>{},sqlite3_prepare_v2:(f,p,A,I,re)=>{},sqlite3_exec:(f,p,A,I,re)=>{},sqlite3_randomness:(f,p)=>{}});const O={affirmBindableTypedArray:C,flexibleString:h,bigIntFits32:W,bigIntFits64:le,bigIntFitsDouble:R,isBindableTypedArray:$,isInt32:oe,isSQLableTypedArray:G,isTypedArray:Y,typedArrayToString:ae,isUIThread:()=>globalThis.window===globalThis&&!!globalThis.document,isSharedTypedArray:P,toss:function(...f){throw new Error(f.join(" "))},toss3:V,typedArrayPart:j,affirmDbHeader:function(f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));const p="SQLite format 3";p.length>f.byteLength&&V("Input does not contain an SQLite3 database header.");for(let A=0;A<p.length;++A)p.charCodeAt(A)!==f[A]&&V("Input does not contain an SQLite3 database header.")},affirmIsDb:function(f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));const p=f.byteLength;(p<512||p%512!==0)&&V("Byte array size",p,"is invalid for an SQLite3 db."),O.affirmDbHeader(f)}};Object.assign(c,{ptrSizeof:o.wasmPtrSizeof||4,ptrIR:o.wasmPtrIR||"i32",bigIntEnabled:!!o.bigIntEnabled,exports:o.exports||V("Missing API config.exports (WASM module exports)."),memory:o.memory||o.exports.memory||V("API config object requires a WebAssembly.Memory object","in either config.exports.memory (exported)","or config.memory (imported)."),alloc:void 0,realloc:void 0,dealloc:void 0}),c.allocFromTypedArray=function(f){f instanceof ArrayBuffer&&(f=new Uint8Array(f)),C(f);const p=c.alloc(f.byteLength||1);return c.heapForSize(f.constructor).set(f.byteLength?f:[0],p),p};{const f=o.allocExportName,p=o.deallocExportName,A=o.reallocExportName;for(const I of[f,p,A])c.exports[I]instanceof Function||V("Missing required exports[",I,"] function.");c.alloc=function I(re){return I.impl(re)||S.toss("Failed to allocate",re," bytes.")},c.alloc.impl=c.exports[f],c.realloc=function I(re,be){const Ae=I.impl(re,be);return be?Ae||S.toss("Failed to reallocate",be," bytes."):0},c.realloc.impl=c.exports[A],c.dealloc=c.exports[p]}c.compileOptionUsed=function f(p){if(arguments.length){if(Array.isArray(p)){const A={};return p.forEach(I=>{A[I]=l.sqlite3_compileoption_used(I)}),A}else if(typeof p=="object")return Object.keys(p).forEach(A=>{p[A]=l.sqlite3_compileoption_used(A)}),p}else{if(f._result)return f._result;f._opt||(f._rx=/^([^=]+)=(.+)/,f._rxInt=/^-?\d+$/,f._opt=function(Ae,Re){const Fe=f._rx.exec(Ae);Re[0]=Fe?Fe[1]:Ae,Re[1]=Fe?f._rxInt.test(Fe[2])?+Fe[2]:Fe[2]:!0});const A={},I=[0,0];let re=0,be;for(;be=l.sqlite3_compileoption_get(re++);)f._opt(be,I),A[I[0]]=I[1];return f._result=A}return typeof p=="string"?!!l.sqlite3_compileoption_used(p):!1},c.pstack=Object.assign(Object.create(null),{restore:c.exports.sqlite3__wasm_pstack_restore,alloc:function(f){return typeof f=="string"&&!(f=c.sizeofIR(f))&&S.toss("Invalid value for pstack.alloc(",arguments[0],")"),c.exports.sqlite3__wasm_pstack_alloc(f)||S.toss("Could not allocate",f,"bytes from the pstack.")},allocChunks:function(f,p){typeof p=="string"&&!(p=c.sizeofIR(p))&&S.toss("Invalid size value for allocChunks(",arguments[1],")");const A=c.pstack.alloc(f*p),I=[];let re=0,be=0;for(;re<f;++re,be+=p)I.push(A+be);return I},allocPtr:(f=1,p=!0)=>f===1?c.pstack.alloc(p?8:c.ptrSizeof):c.pstack.allocChunks(f,p?8:c.ptrSizeof),call:function(f){const p=c.pstack.pointer;try{return f(E)}finally{c.pstack.restore(p)}}}),Object.defineProperties(c.pstack,{pointer:{configurable:!1,iterable:!0,writeable:!1,get:c.exports.sqlite3__wasm_pstack_ptr},quota:{configurable:!1,iterable:!0,writeable:!1,get:c.exports.sqlite3__wasm_pstack_quota},remaining:{configurable:!1,iterable:!0,writeable:!1,get:c.exports.sqlite3__wasm_pstack_remaining}}),l.sqlite3_randomness=(...f)=>{if(f.length===1&&O.isTypedArray(f[0])&&f[0].BYTES_PER_ELEMENT===1){const p=f[0];if(p.byteLength===0)return c.exports.sqlite3_randomness(0,0),p;const A=c.pstack.pointer;try{let I=p.byteLength,re=0;const be=c.exports.sqlite3_randomness,Ae=c.heap8u(),Re=I<512?I:512,Fe=c.pstack.alloc(Re);do{const Pe=I>Re?Re:I;be(Pe,Fe),p.set(j(Ae,Fe,Fe+Pe),re),I-=Pe,re+=Pe}while(I>0)}catch(I){console.error("Highly unexpected (and ignored!) exception in sqlite3_randomness():",I)}finally{c.pstack.restore(A)}return p}c.exports.sqlite3_randomness(...f)};let ne;if(l.sqlite3_wasmfs_opfs_dir=function(){if(ne!==void 0)return ne;const f=o.wasmfsOpfsDir;if(!f||!globalThis.FileSystemHandle||!globalThis.FileSystemDirectoryHandle||!globalThis.FileSystemFileHandle)return ne="";try{return f&&c.xCallWrapped("sqlite3__wasm_init_wasmfs","i32",["string"],f)===0?ne=f:ne=""}catch{return ne=""}},l.sqlite3_wasmfs_filename_is_persistent=function(f){const p=l.sqlite3_wasmfs_opfs_dir();return p&&f?f.startsWith(p+"/"):!1},l.sqlite3_js_db_uses_vfs=function(f,p,A=0){try{const I=l.sqlite3_vfs_find(p);return I?f?I===l.sqlite3_js_db_vfs(f,A)?I:!1:I===l.sqlite3_vfs_find(0)?I:!1:!1}catch{return!1}},l.sqlite3_js_vfs_list=function(){const f=[];let p=l.sqlite3_vfs_find(0);for(;p;){const A=new l.sqlite3_vfs(p);f.push(c.cstrToJs(A.$zName)),p=A.$pNext,A.dispose()}return f},l.sqlite3_js_db_export=function(f,p=0){f=c.xWrap.testConvertArg("sqlite3*",f),f||V("Invalid sqlite3* argument."),c.bigIntEnabled||V("BigInt64 support is not enabled.");const A=c.scopedAllocPush();let I;try{const re=c.scopedAlloc(8+c.ptrSizeof),be=re+8,Ae=p?c.isPtr(p)?p:c.scopedAllocCString(""+p):0;let Re=c.exports.sqlite3__wasm_db_serialize(f,Ae,be,re,0);Re&&V("Database serialization failed with code",E.capi.sqlite3_js_rc_str(Re)),I=c.peekPtr(be);const Fe=c.peek(re,"i64");return Re=Fe?c.heap8u().slice(I,I+Number(Fe)):new Uint8Array,Re}finally{I&&c.exports.sqlite3_free(I),c.scopedAllocPop(A)}},l.sqlite3_js_db_vfs=(f,p=0)=>O.sqlite3__wasm_db_vfs(f,p),l.sqlite3_js_aggregate_context=(f,p)=>l.sqlite3_aggregate_context(f,p)||(p?S.toss("Cannot allocate",p,"bytes for sqlite3_aggregate_context()"):0),l.sqlite3_js_posix_create_file=function(f,p,A){let I;p&&c.isPtr(p)?I=p:p instanceof ArrayBuffer||p instanceof Uint8Array?(I=c.allocFromTypedArray(p),(arguments.length<3||!O.isInt32(A)||A<0)&&(A=p.byteLength)):Q.toss("Invalid 2nd argument for sqlite3_js_posix_create_file().");try{(!O.isInt32(A)||A<0)&&Q.toss("Invalid 3rd argument for sqlite3_js_posix_create_file().");const re=O.sqlite3__wasm_posix_create_file(f,I,A);re&&Q.toss("Creation of file failed with sqlite3 result code",l.sqlite3_js_rc_str(re))}finally{c.dealloc(I)}},l.sqlite3_js_vfs_create_file=function(f,p,A,I){o.warn("sqlite3_js_vfs_create_file() is deprecated and","should be avoided because it can lead to C-level crashes.","See its documentation for alternative options.");let re;A?(c.isPtr(A)?re=A:A instanceof ArrayBuffer&&(A=new Uint8Array(A)),A instanceof Uint8Array?(re=c.allocFromTypedArray(A),(arguments.length<4||!O.isInt32(I)||I<0)&&(I=A.byteLength)):Q.toss("Invalid 3rd argument type for sqlite3_js_vfs_create_file().")):re=0,(!O.isInt32(I)||I<0)&&(c.dealloc(re),Q.toss("Invalid 4th argument for sqlite3_js_vfs_create_file()."));try{const be=O.sqlite3__wasm_vfs_create_file(f,p,re,I);be&&Q.toss("Creation of file failed with sqlite3 result code",l.sqlite3_js_rc_str(be))}finally{c.dealloc(re)}},l.sqlite3_js_sql_to_string=f=>{if(typeof f=="string")return f;const p=h(v);return p===v?void 0:p},O.isUIThread()){const f=function(p){const A=Object.create(null);return A.prefix="kvvfs-"+p,A.stores=[],(p==="session"||p==="")&&A.stores.push(globalThis.sessionStorage),(p==="local"||p==="")&&A.stores.push(globalThis.localStorage),A};l.sqlite3_js_kvvfs_clear=function(p=""){let A=0;const I=f(p);return I.stores.forEach(re=>{const be=[];let Ae;for(Ae=0;Ae<re.length;++Ae){const Re=re.key(Ae);Re.startsWith(I.prefix)&&be.push(Re)}be.forEach(Re=>re.removeItem(Re)),A+=be.length}),A},l.sqlite3_js_kvvfs_size=function(p=""){let A=0;const I=f(p);return I.stores.forEach(re=>{let be;for(be=0;be<re.length;++be){const Ae=re.key(be);Ae.startsWith(I.prefix)&&(A+=Ae.length,A+=re.getItem(Ae).length)}}),A*2}}l.sqlite3_db_config=(function(f,p,...A){switch(p){case l.SQLITE_DBCONFIG_ENABLE_FKEY:case l.SQLITE_DBCONFIG_ENABLE_TRIGGER:case l.SQLITE_DBCONFIG_ENABLE_FTS3_TOKENIZER:case l.SQLITE_DBCONFIG_ENABLE_LOAD_EXTENSION:case l.SQLITE_DBCONFIG_NO_CKPT_ON_CLOSE:case l.SQLITE_DBCONFIG_ENABLE_QPSG:case l.SQLITE_DBCONFIG_TRIGGER_EQP:case l.SQLITE_DBCONFIG_RESET_DATABASE:case l.SQLITE_DBCONFIG_DEFENSIVE:case l.SQLITE_DBCONFIG_WRITABLE_SCHEMA:case l.SQLITE_DBCONFIG_LEGACY_ALTER_TABLE:case l.SQLITE_DBCONFIG_DQS_DML:case l.SQLITE_DBCONFIG_DQS_DDL:case l.SQLITE_DBCONFIG_ENABLE_VIEW:case l.SQLITE_DBCONFIG_LEGACY_FILE_FORMAT:case l.SQLITE_DBCONFIG_TRUSTED_SCHEMA:case l.SQLITE_DBCONFIG_STMT_SCANSTATUS:case l.SQLITE_DBCONFIG_REVERSE_SCANORDER:case l.SQLITE_DBCONFIG_ENABLE_ATTACH_CREATE:case l.SQLITE_DBCONFIG_ENABLE_ATTACH_WRITE:case l.SQLITE_DBCONFIG_ENABLE_COMMENTS:return this.ip||(this.ip=c.xWrap("sqlite3__wasm_db_config_ip","int",["sqlite3*","int","int","*"])),this.ip(f,p,A[0],A[1]||0);case l.SQLITE_DBCONFIG_LOOKASIDE:return this.pii||(this.pii=c.xWrap("sqlite3__wasm_db_config_pii","int",["sqlite3*","int","*","int","int"])),this.pii(f,p,A[0],A[1],A[2]);case l.SQLITE_DBCONFIG_MAINDBNAME:return this.s||(this.s=c.xWrap("sqlite3__wasm_db_config_s","int",["sqlite3*","int","string:static"])),this.s(f,p,A[0]);default:return l.SQLITE_MISUSE}}).bind(Object.create(null)),l.sqlite3_value_to_js=function(f,p=!0){let A;const I=l.sqlite3_value_type(f);switch(I){case l.SQLITE_INTEGER:c.bigIntEnabled?(A=l.sqlite3_value_int64(f),O.bigIntFitsDouble(A)&&(A=Number(A))):A=l.sqlite3_value_double(f);break;case l.SQLITE_FLOAT:A=l.sqlite3_value_double(f);break;case l.SQLITE_TEXT:A=l.sqlite3_value_text(f);break;case l.SQLITE_BLOB:{const re=l.sqlite3_value_bytes(f),be=l.sqlite3_value_blob(f);re&&!be&&E.WasmAllocError.toss("Cannot allocate memory for blob argument of",re,"byte(s)"),A=re?c.heap8u().slice(be,be+Number(re)):null;break}case l.SQLITE_NULL:A=null;break;default:p&&V(l.SQLITE_MISMATCH,"Unhandled sqlite3_value_type():",I),A=void 0}return A},l.sqlite3_values_to_js=function(f,p,A=!0){let I;const re=[];for(I=0;I<f;++I)re.push(l.sqlite3_value_to_js(c.peekPtr(p+c.ptrSizeof*I),A));return re},l.sqlite3_result_error_js=function(f,p){p instanceof S?l.sqlite3_result_error_nomem(f):l.sqlite3_result_error(f,""+p,-1)},l.sqlite3_result_js=function(f,p){if(p instanceof Error){l.sqlite3_result_error_js(f,p);return}try{switch(typeof p){case"undefined":break;case"boolean":l.sqlite3_result_int(f,p?1:0);break;case"bigint":O.bigIntFits32(p)?l.sqlite3_result_int(f,Number(p)):O.bigIntFitsDouble(p)?l.sqlite3_result_double(f,Number(p)):c.bigIntEnabled?O.bigIntFits64(p)?l.sqlite3_result_int64(f,p):V("BigInt value",p.toString(),"is too BigInt for int64."):V("BigInt value",p.toString(),"is too BigInt.");break;case"number":{let A;O.isInt32(p)?A=l.sqlite3_result_int:c.bigIntEnabled&&Number.isInteger(p)&&O.bigIntFits64(BigInt(p))?A=l.sqlite3_result_int64:A=l.sqlite3_result_double,A(f,p);break}case"string":{const[A,I]=c.allocCString(p,!0);l.sqlite3_result_text(f,A,I,l.SQLITE_WASM_DEALLOC);break}case"object":if(p===null){l.sqlite3_result_null(f);break}else if(O.isBindableTypedArray(p)){const A=c.allocFromTypedArray(p);l.sqlite3_result_blob(f,A,p.byteLength,l.SQLITE_WASM_DEALLOC);break}default:V("Don't not how to handle this UDF result value:",typeof p,p)}}catch(A){l.sqlite3_result_error_js(f,A)}},l.sqlite3_column_js=function(f,p,A=!0){const I=l.sqlite3_column_value(f,p);return I===0?void 0:l.sqlite3_value_to_js(I,A)};const g=(function(f,p,A){A=l[A],this.ptr?c.pokePtr(this.ptr,0):this.ptr=c.allocPtr();const I=A(f,p,this.ptr);if(I)return Q.toss(I,arguments[2]+"() failed with code "+I);const re=c.peekPtr(this.ptr);return re?l.sqlite3_value_to_js(re,!0):void 0}).bind(Object.create(null));l.sqlite3_preupdate_new_js=(f,p)=>g(f,p,"sqlite3_preupdate_new"),l.sqlite3_preupdate_old_js=(f,p)=>g(f,p,"sqlite3_preupdate_old"),l.sqlite3changeset_new_js=(f,p)=>g(f,p,"sqlite3changeset_new"),l.sqlite3changeset_old_js=(f,p)=>g(f,p,"sqlite3changeset_old");const E={WasmAllocError:S,SQLite3Error:Q,capi:l,util:O,wasm:c,config:o,version:Object.create(null),client:void 0,asyncPostInit:async function f(){if(f.isReady instanceof Promise)return f.isReady;let p=t.initializersAsync;delete t.initializersAsync;const A=async()=>(E.__isUnderTest||(delete E.util,delete E.StructBinder),E),I=be=>{throw o.error("an async sqlite3 initializer failed:",be),be};if(!p||!p.length)return f.isReady=A().catch(I);p=p.map(be=>be instanceof Function?async Ae=>be(E):be),p.push(A);let re=Promise.resolve(E);for(;p.length;)re=re.then(p.shift());return f.isReady=re.catch(I)},scriptInfo:void 0};try{t.initializers.forEach(f=>{f(E)})}catch(f){throw console.error("sqlite3 bootstrap initializer threw:",f),f}return delete t.initializers,t.sqlite3=E,E},globalThis.sqlite3ApiBootstrap.initializers=[],globalThis.sqlite3ApiBootstrap.initializersAsync=[],globalThis.sqlite3ApiBootstrap.defaultConfig=Object.create(null),globalThis.sqlite3ApiBootstrap.sqlite3=void 0,globalThis.WhWasmUtilInstaller=function(t){t.bigIntEnabled===void 0&&(t.bigIntEnabled=!!globalThis.BigInt64Array);const i=(...h)=>{throw new Error(h.join(" "))};t.exports||Object.defineProperty(t,"exports",{enumerable:!0,configurable:!0,get:()=>t.instance&&t.instance.exports});const o=t.pointerIR||"i32",l=t.ptrSizeof=o==="i32"?4:o==="i64"?8:i("Unhandled ptrSizeof:",o),c=Object.create(null);c.heapSize=0,c.memory=null,c.freeFuncIndexes=[],c.scopedAlloc=[],c.utf8Decoder=new TextDecoder,c.utf8Encoder=new TextEncoder("utf-8"),t.sizeofIR=h=>{switch(h){case"i8":return 1;case"i16":return 2;case"i32":case"f32":case"float":return 4;case"i64":case"f64":case"double":return 8;case"*":return l;default:return(""+h).endsWith("*")?l:void 0}};const w=function(){if(!c.memory)c.memory=t.memory instanceof WebAssembly.Memory?t.memory:t.exports.memory;else if(c.heapSize===c.memory.buffer.byteLength)return c;const h=c.memory.buffer;return c.HEAP8=new Int8Array(h),c.HEAP8U=new Uint8Array(h),c.HEAP16=new Int16Array(h),c.HEAP16U=new Uint16Array(h),c.HEAP32=new Int32Array(h),c.HEAP32U=new Uint32Array(h),t.bigIntEnabled&&(c.HEAP64=new BigInt64Array(h),c.HEAP64U=new BigUint64Array(h)),c.HEAP32F=new Float32Array(h),c.HEAP64F=new Float64Array(h),c.heapSize=h.byteLength,c};t.heap8=()=>w().HEAP8,t.heap8u=()=>w().HEAP8U,t.heap16=()=>w().HEAP16,t.heap16u=()=>w().HEAP16U,t.heap32=()=>w().HEAP32,t.heap32u=()=>w().HEAP32U,t.heapForSize=function(h,S=!0){const O=c.memory&&c.heapSize===c.memory.buffer.byteLength?c:w();switch(h){case Int8Array:return O.HEAP8;case Uint8Array:return O.HEAP8U;case Int16Array:return O.HEAP16;case Uint16Array:return O.HEAP16U;case Int32Array:return O.HEAP32;case Uint32Array:return O.HEAP32U;case 8:return S?O.HEAP8U:O.HEAP8;case 16:return S?O.HEAP16U:O.HEAP16;case 32:return S?O.HEAP32U:O.HEAP32;case 64:if(O.HEAP64)return S?O.HEAP64U:O.HEAP64;break;default:if(t.bigIntEnabled){if(h===globalThis.BigUint64Array)return O.HEAP64U;if(h===globalThis.BigInt64Array)return O.HEAP64;break}}i("Invalid heapForSize() size: expecting 8, 16, 32,","or (if BigInt is enabled) 64.")},t.functionTable=function(){return t.exports.__indirect_function_table},t.functionEntry=function(h){const S=t.functionTable();return h<S.length?S.get(h):void 0},t.jsFuncToWasm=function h(S,O){if(h._||(h._={sigTypes:Object.assign(Object.create(null),{i:"i32",p:"i32",P:"i32",s:"i32",j:"i64",f:"f32",d:"f64"}),typeCodes:Object.assign(Object.create(null),{f64:124,f32:125,i64:126,i32:127}),uleb128Encode:function(E,f,p){p<128?E[f](p):E[f](p%128|128,p>>7)},rxJSig:/^(\w)\((\w*)\)$/,sigParams:function(E){const f=h._.rxJSig.exec(E);return f?f[2]:E.substr(1)},letterType:E=>h._.sigTypes[E]||i("Invalid signature letter:",E),pushSigType:(E,f)=>E.push(h._.typeCodes[h._.letterType(f)])}),typeof S=="string"){const E=O;O=S,S=E}const ne=h._.sigParams(O),g=[1,96];h._.uleb128Encode(g,"push",ne.length);for(const E of ne)h._.pushSigType(g,E);return O[0]==="v"?g.push(0):(g.push(1),h._.pushSigType(g,O[0])),h._.uleb128Encode(g,"unshift",g.length),g.unshift(0,97,115,109,1,0,0,0,1),g.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array(g)),{e:{f:S}}).exports.f};const k=function(S,O,ne){if(ne&&!c.scopedAlloc.length&&i("No scopedAllocPush() scope is active."),typeof S=="string"){const p=O;O=S,S=p}(typeof O!="string"||!(S instanceof Function))&&i("Invalid arguments: expecting (function,signature) or (signature,function).");const g=t.functionTable(),E=g.length;let f;for(;c.freeFuncIndexes.length&&(f=c.freeFuncIndexes.pop(),g.get(f));){f=null;continue}f||(f=E,g.grow(1));try{return g.set(f,S),ne&&c.scopedAlloc[c.scopedAlloc.length-1].push(f),f}catch(p){if(!(p instanceof TypeError))throw f===E&&c.freeFuncIndexes.push(E),p}try{const p=t.jsFuncToWasm(S,O);g.set(f,p),ne&&c.scopedAlloc[c.scopedAlloc.length-1].push(f)}catch(p){throw f===E&&c.freeFuncIndexes.push(E),p}return f};t.installFunction=(h,S)=>k(h,S,!1),t.scopedInstallFunction=(h,S)=>k(h,S,!0),t.uninstallFunction=function(h){if(!h&&h!==0)return;const S=c.freeFuncIndexes,O=t.functionTable();S.push(h);const ne=O.get(h);return O.set(h,null),ne},t.peek=function(S,O="i8"){O.endsWith("*")&&(O=o);const ne=c.memory&&c.heapSize===c.memory.buffer.byteLength?c:w(),g=Array.isArray(S)?[]:void 0;let E;do{switch(g&&(S=arguments[0].shift()),O){case"i1":case"i8":E=ne.HEAP8[S>>0];break;case"i16":E=ne.HEAP16[S>>1];break;case"i32":E=ne.HEAP32[S>>2];break;case"float":case"f32":E=ne.HEAP32F[S>>2];break;case"double":case"f64":E=Number(ne.HEAP64F[S>>3]);break;case"i64":if(t.bigIntEnabled){E=BigInt(ne.HEAP64[S>>3]);break}default:i("Invalid type for peek():",O)}g&&g.push(E)}while(g&&arguments[0].length);return g||E},t.poke=function(h,S,O="i8"){O.endsWith("*")&&(O=o);const ne=c.memory&&c.heapSize===c.memory.buffer.byteLength?c:w();for(const g of Array.isArray(h)?h:[h])switch(O){case"i1":case"i8":ne.HEAP8[g>>0]=S;continue;case"i16":ne.HEAP16[g>>1]=S;continue;case"i32":ne.HEAP32[g>>2]=S;continue;case"float":case"f32":ne.HEAP32F[g>>2]=S;continue;case"double":case"f64":ne.HEAP64F[g>>3]=S;continue;case"i64":if(ne.HEAP64){ne.HEAP64[g>>3]=BigInt(S);continue}default:i("Invalid type for poke(): "+O)}return this},t.peekPtr=(...h)=>t.peek(h.length===1?h[0]:h,o),t.pokePtr=(h,S=0)=>t.poke(h,S,o),t.peek8=(...h)=>t.peek(h.length===1?h[0]:h,"i8"),t.poke8=(h,S)=>t.poke(h,S,"i8"),t.peek16=(...h)=>t.peek(h.length===1?h[0]:h,"i16"),t.poke16=(h,S)=>t.poke(h,S,"i16"),t.peek32=(...h)=>t.peek(h.length===1?h[0]:h,"i32"),t.poke32=(h,S)=>t.poke(h,S,"i32"),t.peek64=(...h)=>t.peek(h.length===1?h[0]:h,"i64"),t.poke64=(h,S)=>t.poke(h,S,"i64"),t.peek32f=(...h)=>t.peek(h.length===1?h[0]:h,"f32"),t.poke32f=(h,S)=>t.poke(h,S,"f32"),t.peek64f=(...h)=>t.peek(h.length===1?h[0]:h,"f64"),t.poke64f=(h,S)=>t.poke(h,S,"f64"),t.getMemValue=t.peek,t.getPtrValue=t.peekPtr,t.setMemValue=t.poke,t.setPtrValue=t.pokePtr,t.isPtr32=h=>typeof h=="number"&&h===(h|0)&&h>=0,t.isPtr=t.isPtr32,t.cstrlen=function(h){if(!h||!t.isPtr(h))return null;const S=w().HEAP8U;let O=h;for(;S[O]!==0;++O);return O-h};const Q=typeof SharedArrayBuffer>"u"?function(){}:SharedArrayBuffer,V=function(h,S,O){return c.utf8Decoder.decode(h.buffer instanceof Q?h.slice(S,O):h.subarray(S,O))};t.cstrToJs=function(h){const S=t.cstrlen(h);return S?V(w().HEAP8U,h,h+S):S===null?S:""},t.jstrlen=function(h){if(typeof h!="string")return null;const S=h.length;let O=0;for(let ne=0;ne<S;++ne){let g=h.charCodeAt(ne);g>=55296&&g<=57343&&(g=65536+((g&1023)<<10)|h.charCodeAt(++ne)&1023),g<=127?++O:g<=2047?O+=2:g<=65535?O+=3:O+=4}return O},t.jstrcpy=function(h,S,O=0,ne=-1,g=!0){if((!S||!(S instanceof Int8Array)&&!(S instanceof Uint8Array))&&i("jstrcpy() target must be an Int8Array or Uint8Array."),ne<0&&(ne=S.length-O),!(ne>0)||!(O>=0))return 0;let E=0,f=h.length;const p=O,A=O+ne-(g?1:0);for(;E<f&&O<A;++E){let I=h.charCodeAt(E);if(I>=55296&&I<=57343&&(I=65536+((I&1023)<<10)|h.charCodeAt(++E)&1023),I<=127){if(O>=A)break;S[O++]=I}else if(I<=2047){if(O+1>=A)break;S[O++]=192|I>>6,S[O++]=128|I&63}else if(I<=65535){if(O+2>=A)break;S[O++]=224|I>>12,S[O++]=128|I>>6&63,S[O++]=128|I&63}else{if(O+3>=A)break;S[O++]=240|I>>18,S[O++]=128|I>>12&63,S[O++]=128|I>>6&63,S[O++]=128|I&63}}return g&&(S[O++]=0),O-p},t.cstrncpy=function(h,S,O){if((!h||!S)&&i("cstrncpy() does not accept NULL strings."),O<0)O=t.cstrlen(strPtr)+1;else if(!(O>0))return 0;const ne=t.heap8u();let g=0,E;for(;g<O&&(E=ne[S+g]);++g)ne[h+g]=E;return g<O&&(ne[h+g++]=0),g},t.jstrToUintArray=(h,S=!1)=>c.utf8Encoder.encode(S?h+"\0":h);const oe=(h,S)=>{(!(h.alloc instanceof Function)||!(h.dealloc instanceof Function))&&i("Object is missing alloc() and/or dealloc() function(s)","required by",S+"().")},le=function(h,S,O,ne){if(oe(t,ne),typeof h!="string")return null;{const g=c.utf8Encoder.encode(h),E=O(g.length+1),f=w().HEAP8U;return f.set(g,E),f[E+g.length]=0,S?[E,g.length]:E}};t.allocCString=(h,S=!1)=>le(h,S,t.alloc,"allocCString()"),t.scopedAllocPush=function(){oe(t,"scopedAllocPush");const h=[];return c.scopedAlloc.push(h),h},t.scopedAllocPop=function(h){oe(t,"scopedAllocPop");const S=arguments.length?c.scopedAlloc.indexOf(h):c.scopedAlloc.length-1;S<0&&i("Invalid state object for scopedAllocPop()."),arguments.length===0&&(h=c.scopedAlloc[S]),c.scopedAlloc.splice(S,1);for(let O;O=h.pop();)t.functionEntry(O)?t.uninstallFunction(O):t.dealloc(O)},t.scopedAlloc=function(h){c.scopedAlloc.length||i("No scopedAllocPush() scope is active.");const S=t.alloc(h);return c.scopedAlloc[c.scopedAlloc.length-1].push(S),S},Object.defineProperty(t.scopedAlloc,"level",{configurable:!1,enumerable:!1,get:()=>c.scopedAlloc.length,set:()=>i("The 'active' property is read-only.")}),t.scopedAllocCString=(h,S=!1)=>le(h,S,t.scopedAlloc,"scopedAllocCString()");const W=function(h,S){const O=t[h?"scopedAlloc":"alloc"]((S.length+1)*t.ptrSizeof);let ne=0;return S.forEach(g=>{t.pokePtr(O+t.ptrSizeof*ne++,t[h?"scopedAllocCString":"allocCString"](""+g))}),t.pokePtr(O+t.ptrSizeof*ne,0),O};t.scopedAllocMainArgv=h=>W(!0,h),t.allocMainArgv=h=>W(!1,h),t.cArgvToJs=(h,S)=>{const O=[];for(let ne=0;ne<h;++ne){const g=t.peekPtr(S+t.ptrSizeof*ne);O.push(g?t.cstrToJs(g):null)}return O},t.scopedAllocCall=function(h){t.scopedAllocPush();try{return h()}finally{t.scopedAllocPop()}};const R=function(h,S,O){oe(t,O);const ne=S?"i64":o;let g=t[O](h*(S?8:l));if(t.poke(g,0,ne),h===1)return g;const E=[g];for(let f=1;f<h;++f)g+=S?8:l,E[f]=g,t.poke(g,0,ne);return E};t.allocPtr=(h=1,S=!0)=>R(h,S,"alloc"),t.scopedAllocPtr=(h=1,S=!0)=>R(h,S,"scopedAlloc"),t.xGet=function(h){return t.exports[h]||i("Cannot find exported symbol:",h)};const Y=(h,S)=>i(h+"() requires",S,"argument(s).");t.xCall=function(h,...S){const O=h instanceof Function?h:t.xGet(h);return O instanceof Function||i("Exported symbol",h,"is not a function."),O.length!==S.length&&Y(O===h?O.name:h,O.length),arguments.length===2&&Array.isArray(arguments[1])?O.apply(null,arguments[1]):O.apply(null,S)},c.xWrap=Object.create(null),c.xWrap.convert=Object.create(null),c.xWrap.convert.arg=new Map,c.xWrap.convert.result=new Map;const T=c.xWrap.convert.arg,P=c.xWrap.convert.result;t.bigIntEnabled&&T.set("i64",h=>BigInt(h));const j=o==="i32"?h=>h|0:h=>BigInt(h)|BigInt(0);T.set("i32",j).set("i16",h=>(h|0)&65535).set("i8",h=>(h|0)&255).set("f32",h=>Number(h).valueOf()).set("float",T.get("f32")).set("f64",T.get("f32")).set("double",T.get("f64")).set("int",T.get("i32")).set("null",h=>h).set(null,T.get("null")).set("**",j).set("*",j),P.set("*",j).set("pointer",j).set("number",h=>Number(h)).set("void",h=>{}).set("null",h=>h).set(null,P.get("null"));{const h=["i8","i16","i32","int","f32","float","f64","double"];t.bigIntEnabled&&h.push("i64");const S=T.get(o);for(const O of h)T.set(O+"*",S),P.set(O+"*",S),P.set(O,T.get(O)||i("Missing arg converter:",O))}const $=function(h){return typeof h=="string"?t.scopedAllocCString(h):h?j(h):null};T.set("string",$).set("utf8",$).set("pointer",$),P.set("string",h=>t.cstrToJs(h)).set("utf8",P.get("string")).set("string:dealloc",h=>{try{return h?t.cstrToJs(h):null}finally{t.dealloc(h)}}).set("utf8:dealloc",P.get("string:dealloc")).set("json",h=>JSON.parse(t.cstrToJs(h))).set("json:dealloc",h=>{try{return h?JSON.parse(t.cstrToJs(h)):null}finally{t.dealloc(h)}});const G=class{constructor(h){this.name=h.name||"unnamed adapter"}convertArg(h,S,O){i("AbstractArgAdapter must be subclassed.")}};T.FuncPtrAdapter=class $t extends G{constructor(S){super(S),T.FuncPtrAdapter.warnOnUse&&console.warn("xArg.FuncPtrAdapter is an internal-only API","and is not intended to be invoked from","client-level code. Invoked with:",S),this.name=S.name||"unnamed",this.signature=S.signature,S.contextKey instanceof Function&&(this.contextKey=S.contextKey,S.bindScope||(S.bindScope="context")),this.bindScope=S.bindScope||i("FuncPtrAdapter options requires a bindScope (explicit or implied)."),$t.bindScopes.indexOf(S.bindScope)<0&&i("Invalid options.bindScope ("+S.bindMod+") for FuncPtrAdapter. Expecting one of: ("+$t.bindScopes.join(", ")+")"),this.isTransient=this.bindScope==="transient",this.isContext=this.bindScope==="context",this.isPermanent=this.bindScope==="permanent",this.singleton=this.bindScope==="singleton"?[]:void 0,this.callProxy=S.callProxy instanceof Function?S.callProxy:void 0}contextKey(S,O){return this}contextMap(S){const O=this.__cmap||(this.__cmap=new Map);let ne=O.get(S);return ne===void 0&&O.set(S,ne=[]),ne}convertArg(S,O,ne){let g=this.singleton;if(!g&&this.isContext&&(g=this.contextMap(this.contextKey(O,ne))),g&&g[0]===S)return g[1];if(S instanceof Function){this.callProxy&&(S=this.callProxy(S));const E=k(S,this.signature,this.isTransient);if($t.debugFuncInstall&&$t.debugOut("FuncPtrAdapter installed",this,this.contextKey(O,ne),"@"+E,S),g){if(g[1]){$t.debugFuncInstall&&$t.debugOut("FuncPtrAdapter uninstalling",this,this.contextKey(O,ne),"@"+g[1],S);try{c.scopedAlloc[c.scopedAlloc.length-1].push(g[1])}catch{}}g[0]=S,g[1]=E}return E}else if(t.isPtr(S)||S===null||S===void 0){if(g&&g[1]&&g[1]!==S){$t.debugFuncInstall&&$t.debugOut("FuncPtrAdapter uninstalling",this,this.contextKey(O,ne),"@"+g[1],S);try{c.scopedAlloc[c.scopedAlloc.length-1].push(g[1])}catch{}g[0]=g[1]=S|0}return S||0}else throw new TypeError("Invalid FuncPtrAdapter argument type. Expecting a function pointer or a "+(this.name?this.name+" ":"")+"function matching signature "+this.signature+".")}},T.FuncPtrAdapter.warnOnUse=!1,T.FuncPtrAdapter.debugFuncInstall=!1,T.FuncPtrAdapter.debugOut=console.debug.bind(console),T.FuncPtrAdapter.bindScopes=["transient","context","singleton","permanent"];const C=h=>T.get(h)||i("Argument adapter not found:",h),Z=h=>P.get(h)||i("Result adapter not found:",h);c.xWrap.convertArg=(h,...S)=>C(h)(...S),c.xWrap.convertArgNoCheck=(h,...S)=>T.get(h)(...S),c.xWrap.convertResult=(h,S)=>h===null?S:h?Z(h)(S):void 0,c.xWrap.convertResultNoCheck=(h,S)=>h===null?S:h?P.get(h)(S):void 0,t.xWrap=function(h,S,...O){arguments.length===3&&Array.isArray(arguments[2])&&(O=arguments[2]),t.isPtr(h)&&(h=t.functionEntry(h)||i("Function pointer not found in WASM function table."));const ne=h instanceof Function,g=ne?h:t.xGet(h);if(ne&&(h=g.name||"unnamed function"),O.length!==g.length&&Y(h,g.length),S===null&&g.length===0)return g;S!=null&&Z(S);for(const f of O)f instanceof G?T.set(f,(...p)=>f.convertArg(...p)):C(f);const E=c.xWrap;return g.length===0?(...f)=>f.length?Y(h,g.length):E.convertResult(S,g.call(null)):function(...f){f.length!==g.length&&Y(h,g.length);const p=t.scopedAllocPush();try{let A=0;for(;A<f.length;++A)f[A]=E.convertArgNoCheck(O[A],f[A],f,A);return E.convertResultNoCheck(S,g.apply(null,f))}finally{t.scopedAllocPop(p)}}};const ae=function(h,S,O,ne,g,E){if(typeof O=="string"){if(S===1)return E.get(O);if(S===2){if(ne)ne instanceof Function||i(g,"requires a function argument.");else return E.delete(O),h;return E.set(O,ne),h}}i("Invalid arguments to",g)};return t.xWrap.resultAdapter=function h(S,O){return ae(h,arguments.length,S,O,"resultAdapter()",P)},t.xWrap.argAdapter=function h(S,O){return ae(h,arguments.length,S,O,"argAdapter()",T)},t.xWrap.FuncPtrAdapter=T.FuncPtrAdapter,t.xCallWrapped=function(h,S,O,...ne){return Array.isArray(arguments[3])&&(ne=arguments[3]),t.xWrap(h,S,O||[]).apply(null,ne||[])},t.xWrap.testConvertArg=c.xWrap.convertArg,t.xWrap.testConvertResult=c.xWrap.convertResult,t},globalThis.WhWasmUtilInstaller.yawl=(function(t){const i=()=>fetch(t.uri,{credentials:"same-origin"}),o=this,l=function(w){if(t.wasmUtilTarget){const k=(...V)=>{throw new Error(V.join(" "))},Q=t.wasmUtilTarget;if(Q.module=w.module,Q.instance=w.instance,Q.instance.exports.memory||(Q.memory=t.imports&&t.imports.env&&t.imports.env.memory||k("Missing 'memory' object!")),!Q.alloc&&w.instance.exports.malloc){const V=w.instance.exports;Q.alloc=function(oe){return V.malloc(oe)||k("Allocation of",oe,"bytes failed.")},Q.dealloc=function(oe){V.free(oe)}}o(Q)}return t.onload&&t.onload(w,t),w};return WebAssembly.instantiateStreaming?function(){return WebAssembly.instantiateStreaming(i(),t.imports||{}).then(l)}:function(){return i().then(k=>k.arrayBuffer()).then(k=>WebAssembly.instantiate(k,t.imports||{})).then(l)}}).bind(globalThis.WhWasmUtilInstaller),globalThis.Jaccwabyt=function t(i){const o=(...y)=>{throw new Error(y.join(" "))};!(i.heap instanceof WebAssembly.Memory)&&!(i.heap instanceof Function)&&o("config.heap must be WebAssembly.Memory instance or a function."),["alloc","dealloc"].forEach(function(y){i[y]instanceof Function||o("Config option '"+y+"' must be a function.")});const l=t,c=i.heap instanceof Function?i.heap:()=>new Uint8Array(i.heap.buffer),w=i.alloc,k=i.dealloc,Q=i.log||console.log.bind(console),V=i.memberPrefix||"",oe=i.memberSuffix||"",le=i.bigIntEnabled===void 0?!!globalThis.BigInt64Array:!!i.bigIntEnabled,W=globalThis.BigInt,R=globalThis.BigInt64Array,Y=i.ptrSizeof||4,T=i.ptrIR||"i32";l.debugFlags||(l.__makeDebugFlags=function(y=null){y&&y.__flags&&(y=y.__flags);const L=function U(K){return arguments.length===0?U.__flags:(K<0?(delete U.__flags.getter,delete U.__flags.setter,delete U.__flags.alloc,delete U.__flags.dealloc):(U.__flags.getter=(1&K)!==0,U.__flags.setter=(2&K)!==0,U.__flags.alloc=(4&K)!==0,U.__flags.dealloc=(8&K)!==0),U._flags)};return Object.defineProperty(L,"__flags",{iterable:!1,writable:!1,value:Object.create(y)}),y||L(0),L},l.debugFlags=l.__makeDebugFlags());const P=function(){const y=new ArrayBuffer(2);return new DataView(y).setInt16(0,256,!0),new Int16Array(y)[0]===256}(),j=y=>y[1]==="(",$=y=>y==="P",G=y=>j(y)?"p":y[0],C=function(y){switch(G(y)){case"c":case"C":return"i8";case"i":return"i32";case"p":case"P":case"s":return T;case"j":return"i64";case"f":return"float";case"d":return"double"}o("Unhandled signature IR:",y)},Z=R?()=>!0:()=>o("BigInt64Array is not available."),ae=function(y){switch(G(y)){case"p":case"P":case"s":{switch(Y){case 4:return"getInt32";case 8:return Z()&&"getBigInt64"}break}case"i":return"getInt32";case"c":return"getInt8";case"C":return"getUint8";case"j":return Z()&&"getBigInt64";case"f":return"getFloat32";case"d":return"getFloat64"}o("Unhandled DataView getter for signature:",y)},h=function(y){switch(G(y)){case"p":case"P":case"s":{switch(Y){case 4:return"setInt32";case 8:return Z()&&"setBigInt64"}break}case"i":return"setInt32";case"c":return"setInt8";case"C":return"setUint8";case"j":return Z()&&"setBigInt64";case"f":return"setFloat32";case"d":return"setFloat64"}o("Unhandled DataView setter for signature:",y)},S=function(y){switch(G(y)){case"i":case"f":case"c":case"C":case"d":return Number;case"j":return Z()&&W;case"p":case"P":case"s":switch(Y){case 4:return Number;case 8:return Z()&&W}break}o("Unhandled DataView set wrapper for signature:",y)},O=(y,L)=>y+"::"+L,ne=function(y,L){return()=>o(O(y,L),"is read-only.")},g=new WeakMap,E="(pointer-is-external)",f=function(y,L,U){if(U||(U=g.get(L)),U){if(g.delete(L),Array.isArray(L.ondispose)){let K;for(;K=L.ondispose.shift();)try{K instanceof Function?K.call(L):K instanceof fe?K.dispose():typeof K=="number"&&k(K)}catch(_e){console.warn("ondispose() for",y.structName,"@",U,"threw. NOT propagating it.",_e)}}else if(L.ondispose instanceof Function)try{L.ondispose()}catch(K){console.warn("ondispose() for",y.structName,"@",U,"threw. NOT propagating it.",K)}delete L.ondispose,y.debugFlags.__flags.dealloc&&Q("debug.dealloc:",L[E]?"EXTERNAL":"",y.structName,"instance:",y.structInfo.sizeof,"bytes @"+U),L[E]||k(U)}},p=y=>({configurable:!1,writable:!1,iterable:!1,value:y}),A=function(y,L,U){let K=!U;U?Object.defineProperty(L,E,p(U)):(U=w(y.structInfo.sizeof),U||o("Allocation of",y.structName,"structure failed."));try{y.debugFlags.__flags.alloc&&Q("debug.alloc:",K?"":"EXTERNAL",y.structName,"instance:",y.structInfo.sizeof,"bytes @"+U),K&&c().fill(0,U,U+y.structInfo.sizeof),g.set(L,U)}catch(_e){throw f(y,L,U),_e}},I=function(){const y=this.pointer;return y?new Uint8Array(c().slice(y,y+this.structInfo.sizeof)):null},be=p(y=>V+y+oe),Ae=function(y,L,U=!0){let K=y.members[L];if(!K&&(V||oe)){for(const _e of Object.values(y.members))if(_e.key===L){K=_e;break}!K&&U&&o(O(y.name,L),"is not a mapped struct member.")}return K},Re=function y(L,U,K=!1){y._||(y._=Ee=>Ee.replace(/[^vipPsjrdcC]/g,"").replace(/[pPscC]/g,"i"));const _e=Ae(L.structInfo,U,!0);return K?y._(_e.signature):_e.signature},Fe={configurable:!1,enumerable:!1,get:function(){return g.get(this)},set:()=>o("Cannot assign the 'pointer' property of a struct.")},Pe=p(function(){const y=[];for(const L of Object.keys(this.structInfo.members))y.push(this.memberKey(L));return y}),Ue=new TextDecoder("utf-8"),$e=new TextEncoder,Ye=typeof SharedArrayBuffer>"u"?function(){}:SharedArrayBuffer,Ze=function(y,L,U){return Ue.decode(y.buffer instanceof Ye?y.slice(L,U):y.subarray(L,U))},mt=function(y,L,U=!1){const K=Ae(y.structInfo,L,U);return K&&K.signature.length===1&&K.signature[0]==="s"?K:!1},ot=function(y){y.signature!=="s"&&o("Invalid member type signature for C-string value:",JSON.stringify(y))},z=function(L,U){const K=Ae(L.structInfo,U,!0);ot(K);const _e=L[K.key];if(!_e)return null;let Ee=_e;const je=c();for(;je[Ee]!==0;++Ee);return _e===Ee?"":Ze(je,_e,Ee)},ee=function(y,...L){y.ondispose?Array.isArray(y.ondispose)||(y.ondispose=[y.ondispose]):y.ondispose=[],y.ondispose.push(...L)},se=function(y){const L=$e.encode(y),U=w(L.length+1);U||o("Allocation error while duplicating string:",y);const K=c();return K.set(L,U),K[U+L.length]=0,U},pe=function(y,L,U){const K=Ae(y.structInfo,L,!0);ot(K);const _e=se(U);return y[K.key]=_e,ee(y,_e),y},fe=function(L,U){arguments[2]!==p&&o("Do not call the StructType constructor","from client-level code."),Object.defineProperties(this,{structName:p(L),structInfo:p(U)})};fe.prototype=Object.create(null,{dispose:p(function(){f(this.constructor,this)}),lookupMember:p(function(y,L=!0){return Ae(this.structInfo,y,L)}),memberToJsString:p(function(y){return z(this,y)}),memberIsString:p(function(y,L=!0){return mt(this,y,L)}),memberKey:be,memberKeys:Pe,memberSignature:p(function(y,L=!1){return Re(this,y,L)}),memoryDump:p(I),pointer:Fe,setMemberCString:p(function(y,L){return pe(this,y,L)})}),Object.assign(fe.prototype,{addOnDispose:function(...y){return ee(this,...y),this}}),Object.defineProperties(fe,{allocCString:p(se),isA:p(y=>y instanceof fe),hasExternalPointer:p(y=>y instanceof fe&&!!y[E]),memberKey:be});const we=y=>Number.isFinite(y)||y instanceof(W||Number),te=function y(L,U,K){if(!y._){y._={getters:{},setters:{},sw:{}};const xt=["i","c","C","p","P","s","f","d","v()"];le&&xt.push("j"),xt.forEach(function(Rt){y._.getters[Rt]=ae(Rt),y._.setters[Rt]=h(Rt),y._.sw[Rt]=S(Rt)});const Zc=/^[ipPsjfdcC]$/,eu=/^[vipPsjfdcC]\([ipPsjfdcC]*\)$/;y.sigCheck=function(Rt,tu,Di,Nn){Object.prototype.hasOwnProperty.call(Rt,Di)&&o(Rt.structName,"already has a property named",Di+"."),Zc.test(Nn)||eu.test(Nn)||o("Malformed signature for",O(Rt.structName,tu)+":",Nn)}}const _e=L.memberKey(U);y.sigCheck(L.prototype,U,_e,K.signature),K.key=_e,K.name=U;const Ee=G(K.signature),je=O(L.prototype.structName,_e),Je=L.prototype.debugFlags.__flags,kt=Object.create(null);kt.configurable=!1,kt.enumerable=!1,kt.get=function(){Je.getter&&Q("debug.getter:",y._.getters[Ee],"for",C(Ee),je,"@",this.pointer,"+",K.offset,"sz",K.sizeof);let xt=new DataView(c().buffer,this.pointer+K.offset,K.sizeof)[y._.getters[Ee]](0,P);return Je.getter&&Q("debug.getter:",je,"result =",xt),xt},K.readOnly?kt.set=ne(L.prototype.structName,_e):kt.set=function(xt){if(Je.setter&&Q("debug.setter:",y._.setters[Ee],"for",C(Ee),je,"@",this.pointer,"+",K.offset,"sz",K.sizeof,xt),this.pointer||o("Cannot set struct property on disposed instance."),xt===null)xt=0;else for(;!we(xt);){if($(K.signature)&&xt instanceof fe){xt=xt.pointer||0,Je.setter&&Q("debug.setter:",je,"resolved to",xt);break}o("Invalid value for pointer-type",je+".")}new DataView(c().buffer,this.pointer+K.offset,K.sizeof)[y._.setters[Ee]](0,y._.sw[Ee](xt),P)},Object.defineProperty(L.prototype,_e,kt)},x=function y(L,U){arguments.length===1?(U=L,L=U.name):U.name||(U.name=L),L||o("Struct name is required.");let K=!1;Object.keys(U.members).forEach(je=>{const Je=U.members[je];Je.sizeof?Je.sizeof===1?Je.signature==="c"||Je.signature==="C"||o("Unexpected sizeof==1 member",O(U.name,je),"with signature",Je.signature):(Je.sizeof%4!==0&&(console.warn("Invalid struct member description =",Je,"from",U),o(L,"member",je,"sizeof is not aligned. sizeof="+Je.sizeof)),Je.offset%4!==0&&(console.warn("Invalid struct member description =",Je,"from",U),o(L,"member",je,"offset is not aligned. offset="+Je.offset))):o(L,"member",je,"is missing sizeof."),(!K||K.offset<Je.offset)&&(K=Je)}),K?U.sizeof<K.offset+K.sizeof&&o("Invalid struct config:",L,"max member offset ("+K.offset+") ","extends past end of struct (sizeof="+U.sizeof+")."):o("No member property descriptions found.");const _e=p(l.__makeDebugFlags(y.debugFlags)),Ee=function je(Je){this instanceof je?arguments.length?((Je!==(Je|0)||Je<=0)&&o("Invalid pointer value for",L,"constructor."),A(je,this,Je)):A(je,this):o("The",L,"constructor may only be called via 'new'.")};return Object.defineProperties(Ee,{debugFlags:_e,isA:p(je=>je instanceof Ee),memberKey:be,memberKeys:Pe,methodInfoForKey:p(function(je){}),structInfo:p(U),structName:p(L)}),Ee.prototype=new fe(L,U,p),Object.defineProperties(Ee.prototype,{debugFlags:_e,constructor:p(Ee)}),Object.keys(U.members).forEach(je=>te(Ee,je,U.members[je])),Ee};return x.StructType=fe,x.config=i,x.allocCString=se,x.debugFlags||(x.debugFlags=l.__makeDebugFlags(l.debugFlags)),x},globalThis.sqlite3ApiBootstrap.initializers.push(function(t){const i=(...T)=>{throw new Error(T.join(" "))};t.SQLite3Error.toss;const o=t.capi,l=t.wasm,c=t.util;if(globalThis.WhWasmUtilInstaller(l),delete globalThis.WhWasmUtilInstaller,l.bindingSignatures=[["sqlite3_aggregate_context","void*","sqlite3_context*","int"],["sqlite3_bind_double","int","sqlite3_stmt*","int","f64"],["sqlite3_bind_int","int","sqlite3_stmt*","int","int"],["sqlite3_bind_null",void 0,"sqlite3_stmt*","int"],["sqlite3_bind_parameter_count","int","sqlite3_stmt*"],["sqlite3_bind_parameter_index","int","sqlite3_stmt*","string"],["sqlite3_bind_parameter_name","string","sqlite3_stmt*","int"],["sqlite3_bind_pointer","int","sqlite3_stmt*","int","*","string:static","*"],["sqlite3_busy_handler","int",["sqlite3*",new l.xWrap.FuncPtrAdapter({signature:"i(pi)",contextKey:(T,P)=>T[0]}),"*"]],["sqlite3_busy_timeout","int","sqlite3*","int"],["sqlite3_changes","int","sqlite3*"],["sqlite3_clear_bindings","int","sqlite3_stmt*"],["sqlite3_collation_needed","int","sqlite3*","*","*"],["sqlite3_column_blob","*","sqlite3_stmt*","int"],["sqlite3_column_bytes","int","sqlite3_stmt*","int"],["sqlite3_column_count","int","sqlite3_stmt*"],["sqlite3_column_decltype","string","sqlite3_stmt*","int"],["sqlite3_column_double","f64","sqlite3_stmt*","int"],["sqlite3_column_int","int","sqlite3_stmt*","int"],["sqlite3_column_name","string","sqlite3_stmt*","int"],["sqlite3_column_text","string","sqlite3_stmt*","int"],["sqlite3_column_type","int","sqlite3_stmt*","int"],["sqlite3_column_value","sqlite3_value*","sqlite3_stmt*","int"],["sqlite3_commit_hook","void*",["sqlite3*",new l.xWrap.FuncPtrAdapter({name:"sqlite3_commit_hook",signature:"i(p)",contextKey:T=>T[0]}),"*"]],["sqlite3_compileoption_get","string","int"],["sqlite3_compileoption_used","int","string"],["sqlite3_complete","int","string:flexible"],["sqlite3_context_db_handle","sqlite3*","sqlite3_context*"],["sqlite3_data_count","int","sqlite3_stmt*"],["sqlite3_db_filename","string","sqlite3*","string"],["sqlite3_db_handle","sqlite3*","sqlite3_stmt*"],["sqlite3_db_name","string","sqlite3*","int"],["sqlite3_db_readonly","int","sqlite3*","string"],["sqlite3_db_status","int","sqlite3*","int","*","*","int"],["sqlite3_errcode","int","sqlite3*"],["sqlite3_errmsg","string","sqlite3*"],["sqlite3_error_offset","int","sqlite3*"],["sqlite3_errstr","string","int"],["sqlite3_exec","int",["sqlite3*","string:flexible",new l.xWrap.FuncPtrAdapter({signature:"i(pipp)",bindScope:"transient",callProxy:T=>{let P;return(j,$,G,C)=>{try{const Z=l.cArgvToJs($,G);return P||(P=l.cArgvToJs($,C)),T(Z,P)|0}catch(Z){return Z.resultCode||o.SQLITE_ERROR}}}}),"*","**"]],["sqlite3_expanded_sql","string","sqlite3_stmt*"],["sqlite3_extended_errcode","int","sqlite3*"],["sqlite3_extended_result_codes","int","sqlite3*","int"],["sqlite3_file_control","int","sqlite3*","string","int","*"],["sqlite3_finalize","int","sqlite3_stmt*"],["sqlite3_free",void 0,"*"],["sqlite3_get_autocommit","int","sqlite3*"],["sqlite3_get_auxdata","*","sqlite3_context*","int"],["sqlite3_initialize",void 0],["sqlite3_interrupt",void 0,"sqlite3*"],["sqlite3_is_interrupted","int","sqlite3*"],["sqlite3_keyword_count","int"],["sqlite3_keyword_name","int",["int","**","*"]],["sqlite3_keyword_check","int",["string","int"]],["sqlite3_libversion","string"],["sqlite3_libversion_number","int"],["sqlite3_limit","int",["sqlite3*","int","int"]],["sqlite3_malloc","*","int"],["sqlite3_open","int","string","*"],["sqlite3_open_v2","int","string","*","int","string"],["sqlite3_realloc","*","*","int"],["sqlite3_reset","int","sqlite3_stmt*"],["sqlite3_result_blob",void 0,"sqlite3_context*","*","int","*"],["sqlite3_result_double",void 0,"sqlite3_context*","f64"],["sqlite3_result_error",void 0,"sqlite3_context*","string","int"],["sqlite3_result_error_code",void 0,"sqlite3_context*","int"],["sqlite3_result_error_nomem",void 0,"sqlite3_context*"],["sqlite3_result_error_toobig",void 0,"sqlite3_context*"],["sqlite3_result_int",void 0,"sqlite3_context*","int"],["sqlite3_result_null",void 0,"sqlite3_context*"],["sqlite3_result_pointer",void 0,"sqlite3_context*","*","string:static","*"],["sqlite3_result_subtype",void 0,"sqlite3_value*","int"],["sqlite3_result_text",void 0,"sqlite3_context*","string","int","*"],["sqlite3_result_zeroblob",void 0,"sqlite3_context*","int"],["sqlite3_rollback_hook","void*",["sqlite3*",new l.xWrap.FuncPtrAdapter({name:"sqlite3_rollback_hook",signature:"v(p)",contextKey:T=>T[0]}),"*"]],["sqlite3_set_auxdata",void 0,["sqlite3_context*","int","*","*"]],["sqlite3_shutdown",void 0],["sqlite3_sourceid","string"],["sqlite3_sql","string","sqlite3_stmt*"],["sqlite3_status","int","int","*","*","int"],["sqlite3_step","int","sqlite3_stmt*"],["sqlite3_stmt_busy","int","sqlite3_stmt*"],["sqlite3_stmt_readonly","int","sqlite3_stmt*"],["sqlite3_stmt_status","int","sqlite3_stmt*","int","int"],["sqlite3_strglob","int","string","string"],["sqlite3_stricmp","int","string","string"],["sqlite3_strlike","int","string","string","int"],["sqlite3_strnicmp","int","string","string","int"],["sqlite3_table_column_metadata","int","sqlite3*","string","string","string","**","**","*","*","*"],["sqlite3_total_changes","int","sqlite3*"],["sqlite3_trace_v2","int",["sqlite3*","int",new l.xWrap.FuncPtrAdapter({name:"sqlite3_trace_v2::callback",signature:"i(ippp)",contextKey:(T,P)=>T[0]}),"*"]],["sqlite3_txn_state","int",["sqlite3*","string"]],["sqlite3_uri_boolean","int","sqlite3_filename","string","int"],["sqlite3_uri_key","string","sqlite3_filename","int"],["sqlite3_uri_parameter","string","sqlite3_filename","string"],["sqlite3_user_data","void*","sqlite3_context*"],["sqlite3_value_blob","*","sqlite3_value*"],["sqlite3_value_bytes","int","sqlite3_value*"],["sqlite3_value_double","f64","sqlite3_value*"],["sqlite3_value_dup","sqlite3_value*","sqlite3_value*"],["sqlite3_value_free",void 0,"sqlite3_value*"],["sqlite3_value_frombind","int","sqlite3_value*"],["sqlite3_value_int","int","sqlite3_value*"],["sqlite3_value_nochange","int","sqlite3_value*"],["sqlite3_value_numeric_type","int","sqlite3_value*"],["sqlite3_value_pointer","*","sqlite3_value*","string:static"],["sqlite3_value_subtype","int","sqlite3_value*"],["sqlite3_value_text","string","sqlite3_value*"],["sqlite3_value_type","int","sqlite3_value*"],["sqlite3_vfs_find","*","string"],["sqlite3_vfs_register","int","sqlite3_vfs*","int"],["sqlite3_vfs_unregister","int","sqlite3_vfs*"]],l.exports.sqlite3_progress_handler&&l.bindingSignatures.push(["sqlite3_progress_handler",void 0,["sqlite3*","int",new l.xWrap.FuncPtrAdapter({name:"xProgressHandler",signature:"i(p)",bindScope:"context",contextKey:(T,P)=>T[0]}),"*"]]),l.exports.sqlite3_stmt_explain&&l.bindingSignatures.push(["sqlite3_stmt_explain","int","sqlite3_stmt*","int"],["sqlite3_stmt_isexplain","int","sqlite3_stmt*"]),l.exports.sqlite3_set_authorizer&&l.bindingSignatures.push(["sqlite3_set_authorizer","int",["sqlite3*",new l.xWrap.FuncPtrAdapter({name:"sqlite3_set_authorizer::xAuth",signature:"i(pissss)",contextKey:(T,P)=>T[0],callProxy:T=>(P,j,$,G,C,Z)=>{try{return $=$&&l.cstrToJs($),G=G&&l.cstrToJs(G),C=C&&l.cstrToJs(C),Z=Z&&l.cstrToJs(Z),T(P,j,$,G,C,Z)||0}catch(ae){return ae.resultCode||o.SQLITE_ERROR}}}),"*"]]),l.bindingSignatures.int64=[["sqlite3_bind_int64","int",["sqlite3_stmt*","int","i64"]],["sqlite3_changes64","i64",["sqlite3*"]],["sqlite3_column_int64","i64",["sqlite3_stmt*","int"]],["sqlite3_deserialize","int","sqlite3*","string","*","i64","i64","int"],["sqlite3_last_insert_rowid","i64",["sqlite3*"]],["sqlite3_malloc64","*","i64"],["sqlite3_msize","i64","*"],["sqlite3_overload_function","int",["sqlite3*","string","int"]],["sqlite3_realloc64","*","*","i64"],["sqlite3_result_int64",void 0,"*","i64"],["sqlite3_result_zeroblob64","int","*","i64"],["sqlite3_serialize","*","sqlite3*","string","*","int"],["sqlite3_set_last_insert_rowid",void 0,["sqlite3*","i64"]],["sqlite3_status64","int","int","*","*","int"],["sqlite3_total_changes64","i64",["sqlite3*"]],["sqlite3_update_hook","*",["sqlite3*",new l.xWrap.FuncPtrAdapter({name:"sqlite3_update_hook",signature:"v(iippj)",contextKey:T=>T[0],callProxy:T=>(P,j,$,G,C)=>{T(P,j,l.cstrToJs($),l.cstrToJs(G),C)}}),"*"]],["sqlite3_uri_int64","i64",["sqlite3_filename","string","i64"]],["sqlite3_value_int64","i64","sqlite3_value*"]],l.bigIntEnabled&&l.exports.sqlite3_declare_vtab&&l.bindingSignatures.int64.push(["sqlite3_create_module","int",["sqlite3*","string","sqlite3_module*","*"]],["sqlite3_create_module_v2","int",["sqlite3*","string","sqlite3_module*","*","*"]],["sqlite3_declare_vtab","int",["sqlite3*","string:flexible"]],["sqlite3_drop_modules","int",["sqlite3*","**"]],["sqlite3_vtab_collation","string","sqlite3_index_info*","int"],["sqlite3_vtab_distinct","int","sqlite3_index_info*"],["sqlite3_vtab_in","int","sqlite3_index_info*","int","int"],["sqlite3_vtab_in_first","int","sqlite3_value*","**"],["sqlite3_vtab_in_next","int","sqlite3_value*","**"],["sqlite3_vtab_nochange","int","sqlite3_context*"],["sqlite3_vtab_on_conflict","int","sqlite3*"],["sqlite3_vtab_rhs_value","int","sqlite3_index_info*","int","**"]),l.bigIntEnabled&&l.exports.sqlite3_preupdate_hook&&l.bindingSignatures.int64.push(["sqlite3_preupdate_blobwrite","int","sqlite3*"],["sqlite3_preupdate_count","int","sqlite3*"],["sqlite3_preupdate_depth","int","sqlite3*"],["sqlite3_preupdate_hook","*",["sqlite3*",new l.xWrap.FuncPtrAdapter({name:"sqlite3_preupdate_hook",signature:"v(ppippjj)",contextKey:T=>T[0],callProxy:T=>(P,j,$,G,C,Z,ae)=>{T(P,j,$,l.cstrToJs(G),l.cstrToJs(C),Z,ae)}}),"*"]],["sqlite3_preupdate_new","int",["sqlite3*","int","**"]],["sqlite3_preupdate_old","int",["sqlite3*","int","**"]]),l.bigIntEnabled&&l.exports.sqlite3changegroup_add&&l.exports.sqlite3session_create&&l.exports.sqlite3_preupdate_hook){const T={signature:"i(ps)",callProxy:P=>(j,$)=>{try{return P(j,l.cstrToJs($))|0}catch(G){return G.resultCode||o.SQLITE_ERROR}}};l.bindingSignatures.int64.push(["sqlite3changegroup_add","int",["sqlite3_changegroup*","int","void*"]],["sqlite3changegroup_add_strm","int",["sqlite3_changegroup*",new l.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*"]],["sqlite3changegroup_delete",void 0,["sqlite3_changegroup*"]],["sqlite3changegroup_new","int",["**"]],["sqlite3changegroup_output","int",["sqlite3_changegroup*","int*","**"]],["sqlite3changegroup_output_strm","int",["sqlite3_changegroup*",new l.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppi)",bindScope:"transient"}),"void*"]],["sqlite3changeset_apply","int",["sqlite3*","int","void*",new l.xWrap.FuncPtrAdapter({name:"xFilter",bindScope:"transient",...T}),new l.xWrap.FuncPtrAdapter({name:"xConflict",signature:"i(pip)",bindScope:"transient"}),"void*"]],["sqlite3changeset_apply_strm","int",["sqlite3*",new l.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*",new l.xWrap.FuncPtrAdapter({name:"xFilter",bindScope:"transient",...T}),new l.xWrap.FuncPtrAdapter({name:"xConflict",signature:"i(pip)",bindScope:"transient"}),"void*"]],["sqlite3changeset_apply_v2","int",["sqlite3*","int","void*",new l.xWrap.FuncPtrAdapter({name:"xFilter",bindScope:"transient",...T}),new l.xWrap.FuncPtrAdapter({name:"xConflict",signature:"i(pip)",bindScope:"transient"}),"void*","**","int*","int"]],["sqlite3changeset_apply_v2_strm","int",["sqlite3*",new l.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*",new l.xWrap.FuncPtrAdapter({name:"xFilter",bindScope:"transient",...T}),new l.xWrap.FuncPtrAdapter({name:"xConflict",signature:"i(pip)",bindScope:"transient"}),"void*","**","int*","int"]],["sqlite3changeset_concat","int",["int","void*","int","void*","int*","**"]],["sqlite3changeset_concat_strm","int",[new l.xWrap.FuncPtrAdapter({name:"xInputA",signature:"i(ppp)",bindScope:"transient"}),"void*",new l.xWrap.FuncPtrAdapter({name:"xInputB",signature:"i(ppp)",bindScope:"transient"}),"void*",new l.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppi)",bindScope:"transient"}),"void*"]],["sqlite3changeset_conflict","int",["sqlite3_changeset_iter*","int","**"]],["sqlite3changeset_finalize","int",["sqlite3_changeset_iter*"]],["sqlite3changeset_fk_conflicts","int",["sqlite3_changeset_iter*","int*"]],["sqlite3changeset_invert","int",["int","void*","int*","**"]],["sqlite3changeset_invert_strm","int",[new l.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*",new l.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppi)",bindScope:"transient"}),"void*"]],["sqlite3changeset_new","int",["sqlite3_changeset_iter*","int","**"]],["sqlite3changeset_next","int",["sqlite3_changeset_iter*"]],["sqlite3changeset_old","int",["sqlite3_changeset_iter*","int","**"]],["sqlite3changeset_op","int",["sqlite3_changeset_iter*","**","int*","int*","int*"]],["sqlite3changeset_pk","int",["sqlite3_changeset_iter*","**","int*"]],["sqlite3changeset_start","int",["**","int","*"]],["sqlite3changeset_start_strm","int",["**",new l.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*"]],["sqlite3changeset_start_v2","int",["**","int","*","int"]],["sqlite3changeset_start_v2_strm","int",["**",new l.xWrap.FuncPtrAdapter({name:"xInput",signature:"i(ppp)",bindScope:"transient"}),"void*","int"]],["sqlite3session_attach","int",["sqlite3_session*","string"]],["sqlite3session_changeset","int",["sqlite3_session*","int*","**"]],["sqlite3session_changeset_size","i64",["sqlite3_session*"]],["sqlite3session_changeset_strm","int",["sqlite3_session*",new l.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppp)",bindScope:"transient"}),"void*"]],["sqlite3session_config","int",["int","void*"]],["sqlite3session_create","int",["sqlite3*","string","**"]],["sqlite3session_diff","int",["sqlite3_session*","string","string","**"]],["sqlite3session_enable","int",["sqlite3_session*","int"]],["sqlite3session_indirect","int",["sqlite3_session*","int"]],["sqlite3session_isempty","int",["sqlite3_session*"]],["sqlite3session_memory_used","i64",["sqlite3_session*"]],["sqlite3session_object_config","int",["sqlite3_session*","int","void*"]],["sqlite3session_patchset","int",["sqlite3_session*","*","**"]],["sqlite3session_patchset_strm","int",["sqlite3_session*",new l.xWrap.FuncPtrAdapter({name:"xOutput",signature:"i(ppp)",bindScope:"transient"}),"void*"]],["sqlite3session_table_filter",void 0,["sqlite3_session*",new l.xWrap.FuncPtrAdapter({name:"xFilter",...T,contextKey:(P,j)=>P[0]}),"*"]])}l.bindingSignatures.wasmInternal=[["sqlite3__wasm_db_reset","int","sqlite3*"],["sqlite3__wasm_db_vfs","sqlite3_vfs*","sqlite3*","string"],["sqlite3__wasm_vfs_create_file","int","sqlite3_vfs*","string","*","int"],["sqlite3__wasm_posix_create_file","int","string","*","int"],["sqlite3__wasm_vfs_unlink","int","sqlite3_vfs*","string"],["sqlite3__wasm_qfmt_token","string:dealloc","string","int"]],t.StructBinder=globalThis.Jaccwabyt({heap:l.heap8u,alloc:l.alloc,dealloc:l.dealloc,bigIntEnabled:l.bigIntEnabled,memberPrefix:"$"}),delete globalThis.Jaccwabyt;{const T=l.xWrap.argAdapter("string");l.xWrap.argAdapter("string:flexible",C=>T(c.flexibleString(C))),l.xWrap.argAdapter("string:static",(function(C){return l.isPtr(C)?C:(C=""+C,this[C]||(this[C]=l.allocCString(C)))}).bind(Object.create(null)));const P=l.xWrap.argAdapter("*"),j=function(){};l.xWrap.argAdapter("sqlite3_filename",P)("sqlite3_context*",P)("sqlite3_value*",P)("void*",P)("sqlite3_changegroup*",P)("sqlite3_changeset_iter*",P)("sqlite3_session*",P)("sqlite3_stmt*",C=>{var Z;return P(C instanceof(((Z=t==null?void 0:t.oo1)==null?void 0:Z.Stmt)||j)?C.pointer:C)})("sqlite3*",C=>{var Z;return P(C instanceof(((Z=t==null?void 0:t.oo1)==null?void 0:Z.DB)||j)?C.pointer:C)})("sqlite3_vfs*",C=>typeof C=="string"?o.sqlite3_vfs_find(C)||t.SQLite3Error.toss(o.SQLITE_NOTFOUND,"Unknown sqlite3_vfs name:",C):P(C instanceof(o.sqlite3_vfs||j)?C.pointer:C)),l.exports.sqlite3_declare_vtab&&l.xWrap.argAdapter("sqlite3_index_info*",C=>P(C instanceof(o.sqlite3_index_info||j)?C.pointer:C))("sqlite3_module*",C=>P(C instanceof(o.sqlite3_module||j)?C.pointer:C));const $=l.xWrap.resultAdapter("*");l.xWrap.resultAdapter("sqlite3*",$)("sqlite3_context*",$)("sqlite3_stmt*",$)("sqlite3_value*",$)("sqlite3_vfs*",$)("void*",$),l.exports.sqlite3_step.length===0&&(l.xWrap.doArgcCheck=!1,t.config.warn("Disabling sqlite3.wasm.xWrap.doArgcCheck due to environmental quirks."));for(const C of l.bindingSignatures)o[C[0]]=l.xWrap.apply(null,C);for(const C of l.bindingSignatures.wasmInternal)c[C[0]]=l.xWrap.apply(null,C);const G=function(C){return()=>i(C+"() is unavailable due to lack","of BigInt support in this build.")};for(const C of l.bindingSignatures.int64)o[C[0]]=l.bigIntEnabled?l.xWrap.apply(null,C):G(C[0]);if(delete l.bindingSignatures,l.exports.sqlite3__wasm_db_error){const C=l.xWrap("sqlite3__wasm_db_error","int","sqlite3*","int","string");c.sqlite3__wasm_db_error=function(Z,ae,h){return ae instanceof t.WasmAllocError?(ae=o.SQLITE_NOMEM,h=0):ae instanceof Error&&(h=h||""+ae,ae=ae.resultCode||o.SQLITE_ERROR),Z?C(Z,ae,h):ae}}else c.sqlite3__wasm_db_error=function(C,Z,ae){return console.warn("sqlite3__wasm_db_error() is not exported.",arguments),Z}}{const T=l.xCall("sqlite3__wasm_enum_json");T||i("Maintenance required: increase sqlite3__wasm_enum_json()'s","static buffer size!"),l.ctype=JSON.parse(l.cstrToJs(T));const P=["access","authorizer","blobFinalizers","changeset","config","dataTypes","dbConfig","dbStatus","encodings","fcntl","flock","ioCap","limits","openFlags","prepareFlags","resultCodes","sqlite3Status","stmtStatus","syncFlags","trace","txnState","udfFlags","version"];l.bigIntEnabled&&P.push("serialize","session","vtab");for(const G of P)for(const C of Object.entries(l.ctype[G]))o[C[0]]=C[1];l.functionEntry(o.SQLITE_WASM_DEALLOC)||i("Internal error: cannot resolve exported function","entry SQLITE_WASM_DEALLOC (=="+o.SQLITE_WASM_DEALLOC+").");const j=Object.create(null);for(const G of["resultCodes"])for(const C of Object.entries(l.ctype[G]))j[C[1]]=C[0];o.sqlite3_js_rc_str=G=>j[G];const $=Object.assign(Object.create(null),{WasmTestStruct:!0,sqlite3_kvvfs_methods:!c.isUIThread(),sqlite3_index_info:!l.bigIntEnabled,sqlite3_index_constraint:!l.bigIntEnabled,sqlite3_index_orderby:!l.bigIntEnabled,sqlite3_index_constraint_usage:!l.bigIntEnabled});for(const G of l.ctype.structs)$[G.name]||(o[G.name]=t.StructBinder(G));if(o.sqlite3_index_info){for(const G of["sqlite3_index_constraint","sqlite3_index_orderby","sqlite3_index_constraint_usage"])o.sqlite3_index_info[G]=o[G],delete o[G];o.sqlite3_vtab_config=l.xWrap("sqlite3__wasm_vtab_config","int",["sqlite3*","int","int"])}}const w=(T,P,j)=>c.sqlite3__wasm_db_error(T,o.SQLITE_MISUSE,P+"() requires "+j+" argument"+(j===1?"":"s")+"."),k=T=>c.sqlite3__wasm_db_error(T,o.SQLITE_FORMAT,"SQLITE_UTF8 is the only supported encoding."),Q=T=>l.xWrap.argAdapter("sqlite3*")(T),V=T=>l.isPtr(T)?l.cstrToJs(T):T,oe=(function(T,P){T=Q(T);let j=this.dbMap.get(T);if(P)!j&&P>0&&this.dbMap.set(T,j=Object.create(null));else return this.dbMap.delete(T),j;return j}).bind(Object.assign(Object.create(null),{dbMap:new Map}));oe.addCollation=function(T,P){const j=oe(T,1);j.collation||(j.collation=new Set),j.collation.add(V(P).toLowerCase())},oe._addUDF=function(T,P,j,$){P=V(P).toLowerCase();let G=$.get(P);G||$.set(P,G=new Set),G.add(j<0?-1:j)},oe.addFunction=function(T,P,j){const $=oe(T,1);$.udf||($.udf=new Map),this._addUDF(T,P,j,$.udf)},l.exports.sqlite3_create_window_function&&(oe.addWindowFunc=function(T,P,j){const $=oe(T,1);$.wudf||($.wudf=new Map),this._addUDF(T,P,j,$.wudf)}),oe.cleanup=function(T){T=Q(T);const P=[T];for(const G of["sqlite3_busy_handler","sqlite3_commit_hook","sqlite3_preupdate_hook","sqlite3_progress_handler","sqlite3_rollback_hook","sqlite3_set_authorizer","sqlite3_trace_v2","sqlite3_update_hook"]){const C=l.exports[G];if(C){P.length=C.length;try{o[G](...P)}catch(Z){t.config.warn("close-time call of",G+"(",P,") threw:",Z)}}}const j=oe(T,0);if(!j)return;if(j.collation){for(const G of j.collation)try{o.sqlite3_create_collation_v2(T,G,o.SQLITE_UTF8,0,0,0)}catch{}delete j.collation}let $;for($=0;$<2;++$){const G=$?j.wudf:j.udf;if(!G)continue;const C=$?o.sqlite3_create_window_function:o.sqlite3_create_function_v2;for(const Z of G){const ae=Z[0],h=Z[1],S=[T,ae,0,o.SQLITE_UTF8,0,0,0,0,0];$&&S.push(0);for(const O of h)try{S[2]=O,C.apply(null,S)}catch{}h.clear()}G.clear()}delete j.udf,delete j.wudf};{const T=l.xWrap("sqlite3_close_v2","int","sqlite3*");o.sqlite3_close_v2=function(P){if(arguments.length!==1)return w(P,"sqlite3_close_v2",1);if(P)try{oe.cleanup(P)}catch{}return T(P)}}if(o.sqlite3session_create){const T=l.xWrap("sqlite3session_delete",void 0,["sqlite3_session*"]);o.sqlite3session_delete=function(P){if(arguments.length!==1)return w(pDb,"sqlite3session_delete",1);P&&o.sqlite3session_table_filter(P,0,0),T(P)}}{const T=(j,$)=>"argv["+$+"]:"+j[0]+":"+l.cstrToJs(j[1]).toLowerCase(),P=l.xWrap("sqlite3_create_collation_v2","int",["sqlite3*","string","int","*",new l.xWrap.FuncPtrAdapter({name:"xCompare",signature:"i(pipip)",contextKey:T}),new l.xWrap.FuncPtrAdapter({name:"xDestroy",signature:"v(p)",contextKey:T})]);o.sqlite3_create_collation_v2=function(j,$,G,C,Z,ae){if(arguments.length!==6)return w(j,"sqlite3_create_collation_v2",6);if((G&15)===0)G|=o.SQLITE_UTF8;else if(o.SQLITE_UTF8!==(G&15))return k(j);try{const h=P(j,$,G,C,Z,ae);return h===0&&Z instanceof Function&&oe.addCollation(j,$),h}catch(h){return c.sqlite3__wasm_db_error(j,h)}},o.sqlite3_create_collation=(j,$,G,C,Z)=>arguments.length===5?o.sqlite3_create_collation_v2(j,$,G,C,Z,0):w(j,"sqlite3_create_collation",5)}{const T=function(G,C){return G[0]+":"+(G[2]<0?-1:G[2])+":"+C+":"+l.cstrToJs(G[1]).toLowerCase()},P=Object.assign(Object.create(null),{xInverseAndStep:{signature:"v(pip)",contextKey:T,callProxy:G=>(C,Z,ae)=>{try{G(C,...o.sqlite3_values_to_js(Z,ae))}catch(h){o.sqlite3_result_error_js(C,h)}}},xFinalAndValue:{signature:"v(p)",contextKey:T,callProxy:G=>C=>{try{o.sqlite3_result_js(C,G(C))}catch(Z){o.sqlite3_result_error_js(C,Z)}}},xFunc:{signature:"v(pip)",contextKey:T,callProxy:G=>(C,Z,ae)=>{try{o.sqlite3_result_js(C,G(C,...o.sqlite3_values_to_js(Z,ae)))}catch(h){o.sqlite3_result_error_js(C,h)}}},xDestroy:{signature:"v(p)",contextKey:T,callProxy:G=>C=>{try{G(C)}catch(Z){console.error("UDF xDestroy method threw:",Z)}}}}),j=l.xWrap("sqlite3_create_function_v2","int",["sqlite3*","string","int","int","*",new l.xWrap.FuncPtrAdapter({name:"xFunc",...P.xFunc}),new l.xWrap.FuncPtrAdapter({name:"xStep",...P.xInverseAndStep}),new l.xWrap.FuncPtrAdapter({name:"xFinal",...P.xFinalAndValue}),new l.xWrap.FuncPtrAdapter({name:"xDestroy",...P.xDestroy})]),$=l.exports.sqlite3_create_window_function?l.xWrap("sqlite3_create_window_function","int",["sqlite3*","string","int","int","*",new l.xWrap.FuncPtrAdapter({name:"xStep",...P.xInverseAndStep}),new l.xWrap.FuncPtrAdapter({name:"xFinal",...P.xFinalAndValue}),new l.xWrap.FuncPtrAdapter({name:"xValue",...P.xFinalAndValue}),new l.xWrap.FuncPtrAdapter({name:"xInverse",...P.xInverseAndStep}),new l.xWrap.FuncPtrAdapter({name:"xDestroy",...P.xDestroy})]):void 0;o.sqlite3_create_function_v2=function G(C,Z,ae,h,S,O,ne,g,E){if(G.length!==arguments.length)return w(C,"sqlite3_create_function_v2",G.length);if((h&15)===0)h|=o.SQLITE_UTF8;else if(o.SQLITE_UTF8!==(h&15))return k(C);try{const f=j(C,Z,ae,h,S,O,ne,g,E);return f===0&&(O instanceof Function||ne instanceof Function||g instanceof Function||E instanceof Function)&&oe.addFunction(C,Z,ae),f}catch(f){return console.error("sqlite3_create_function_v2() setup threw:",f),c.sqlite3__wasm_db_error(C,f,"Creation of UDF threw: "+f)}},o.sqlite3_create_function=function G(C,Z,ae,h,S,O,ne,g){return G.length===arguments.length?o.sqlite3_create_function_v2(C,Z,ae,h,S,O,ne,g,0):w(C,"sqlite3_create_function",G.length)},$?o.sqlite3_create_window_function=function G(C,Z,ae,h,S,O,ne,g,E,f){if(G.length!==arguments.length)return w(C,"sqlite3_create_window_function",G.length);if((h&15)===0)h|=o.SQLITE_UTF8;else if(o.SQLITE_UTF8!==(h&15))return k(C);try{const p=$(C,Z,ae,h,S,O,ne,g,E,f);return p===0&&(O instanceof Function||ne instanceof Function||g instanceof Function||E instanceof Function||f instanceof Function)&&oe.addWindowFunc(C,Z,ae),p}catch(p){return console.error("sqlite3_create_window_function() setup threw:",p),c.sqlite3__wasm_db_error(C,p,"Creation of UDF threw: "+p)}}:delete o.sqlite3_create_window_function,o.sqlite3_create_function_v2.udfSetResult=o.sqlite3_create_function.udfSetResult=o.sqlite3_result_js,o.sqlite3_create_window_function&&(o.sqlite3_create_window_function.udfSetResult=o.sqlite3_result_js),o.sqlite3_create_function_v2.udfConvertArgs=o.sqlite3_create_function.udfConvertArgs=o.sqlite3_values_to_js,o.sqlite3_create_window_function&&(o.sqlite3_create_window_function.udfConvertArgs=o.sqlite3_values_to_js),o.sqlite3_create_function_v2.udfSetError=o.sqlite3_create_function.udfSetError=o.sqlite3_result_error_js,o.sqlite3_create_window_function&&(o.sqlite3_create_window_function.udfSetError=o.sqlite3_result_error_js)}{const T=(j,$)=>(typeof j=="string"?$=-1:c.isSQLableTypedArray(j)?($=j.byteLength,j=c.typedArrayToString(j instanceof ArrayBuffer?new Uint8Array(j):j)):Array.isArray(j)&&(j=j.join(""),$=-1),[j,$]),P={basic:l.xWrap("sqlite3_prepare_v3","int",["sqlite3*","string","int","int","**","**"]),full:l.xWrap("sqlite3_prepare_v3","int",["sqlite3*","*","int","int","**","**"])};o.sqlite3_prepare_v3=function j($,G,C,Z,ae,h){if(j.length!==arguments.length)return w($,"sqlite3_prepare_v3",j.length);const[S,O]=T(G,C);switch(typeof S){case"string":return P.basic($,S,O,Z,ae,null);case"number":return P.full($,S,O,Z,ae,h);default:return c.sqlite3__wasm_db_error($,o.SQLITE_MISUSE,"Invalid SQL argument type for sqlite3_prepare_v2/v3().")}},o.sqlite3_prepare_v2=function j($,G,C,Z,ae){return j.length===arguments.length?o.sqlite3_prepare_v3($,G,C,0,Z,ae):w($,"sqlite3_prepare_v2",j.length)}}{const T=l.xWrap("sqlite3_bind_text","int",["sqlite3_stmt*","int","string","int","*"]),P=l.xWrap("sqlite3_bind_blob","int",["sqlite3_stmt*","int","*","int","*"]);o.sqlite3_bind_text=function j($,G,C,Z,ae){if(j.length!==arguments.length)return w(o.sqlite3_db_handle($),"sqlite3_bind_text",j.length);if(l.isPtr(C)||C===null)return T($,G,C,Z,ae);C instanceof ArrayBuffer?C=new Uint8Array(C):Array.isArray(pMem)&&(C=pMem.join(""));let h,S;try{if(c.isSQLableTypedArray(C))h=l.allocFromTypedArray(C),S=C.byteLength;else if(typeof C=="string")[h,S]=l.allocCString(C);else return c.sqlite3__wasm_db_error(o.sqlite3_db_handle($),o.SQLITE_MISUSE,"Invalid 3rd argument type for sqlite3_bind_text().");return T($,G,h,S,o.SQLITE_WASM_DEALLOC)}catch(O){return l.dealloc(h),c.sqlite3__wasm_db_error(o.sqlite3_db_handle($),O)}},o.sqlite3_bind_blob=function j($,G,C,Z,ae){if(j.length!==arguments.length)return w(o.sqlite3_db_handle($),"sqlite3_bind_blob",j.length);if(l.isPtr(C)||C===null)return P($,G,C,Z,ae);C instanceof ArrayBuffer?C=new Uint8Array(C):Array.isArray(C)&&(C=C.join(""));let h,S;try{if(c.isBindableTypedArray(C))h=l.allocFromTypedArray(C),S=Z>=0?Z:C.byteLength;else if(typeof C=="string")[h,S]=l.allocCString(C);else return c.sqlite3__wasm_db_error(o.sqlite3_db_handle($),o.SQLITE_MISUSE,"Invalid 3rd argument type for sqlite3_bind_blob().");return P($,G,h,S,o.SQLITE_WASM_DEALLOC)}catch(O){return l.dealloc(h),c.sqlite3__wasm_db_error(o.sqlite3_db_handle($),O)}}}o.sqlite3_config=function(T,...P){if(arguments.length<2)return o.SQLITE_MISUSE;switch(T){case o.SQLITE_CONFIG_COVERING_INDEX_SCAN:case o.SQLITE_CONFIG_MEMSTATUS:case o.SQLITE_CONFIG_SMALL_MALLOC:case o.SQLITE_CONFIG_SORTERREF_SIZE:case o.SQLITE_CONFIG_STMTJRNL_SPILL:case o.SQLITE_CONFIG_URI:return l.exports.sqlite3__wasm_config_i(T,P[0]);case o.SQLITE_CONFIG_LOOKASIDE:return l.exports.sqlite3__wasm_config_ii(T,P[0],P[1]);case o.SQLITE_CONFIG_MEMDB_MAXSIZE:return l.exports.sqlite3__wasm_config_j(T,P[0]);case o.SQLITE_CONFIG_GETMALLOC:case o.SQLITE_CONFIG_GETMUTEX:case o.SQLITE_CONFIG_GETPCACHE2:case o.SQLITE_CONFIG_GETPCACHE:case o.SQLITE_CONFIG_HEAP:case o.SQLITE_CONFIG_LOG:case o.SQLITE_CONFIG_MALLOC:case o.SQLITE_CONFIG_MMAP_SIZE:case o.SQLITE_CONFIG_MULTITHREAD:case o.SQLITE_CONFIG_MUTEX:case o.SQLITE_CONFIG_PAGECACHE:case o.SQLITE_CONFIG_PCACHE2:case o.SQLITE_CONFIG_PCACHE:case o.SQLITE_CONFIG_PCACHE_HDRSZ:case o.SQLITE_CONFIG_PMASZ:case o.SQLITE_CONFIG_SERIALIZED:case o.SQLITE_CONFIG_SINGLETHREAD:case o.SQLITE_CONFIG_SQLLOG:case o.SQLITE_CONFIG_WIN32_HEAPSIZE:default:return o.SQLITE_NOTFOUND}};{const T=new Set;o.sqlite3_auto_extension=function(P){if(P instanceof Function)P=l.installFunction("i(ppp)",P);else if(arguments.length!==1||!l.isPtr(P))return o.SQLITE_MISUSE;const j=l.exports.sqlite3_auto_extension(P);return P!==arguments[0]&&(j===0?T.add(P):l.uninstallFunction(P)),j},o.sqlite3_cancel_auto_extension=function(P){return!P||arguments.length!==1||!l.isPtr(P)?0:l.exports.sqlite3_cancel_auto_extension(P)},o.sqlite3_reset_auto_extension=function(){l.exports.sqlite3_reset_auto_extension();for(const P of T)l.uninstallFunction(P);T.clear()}}const le=o.sqlite3_vfs_find("kvvfs");if(le)if(c.isUIThread()){const T=new o.sqlite3_kvvfs_methods(l.exports.sqlite3__wasm_kvvfs_methods());delete o.sqlite3_kvvfs_methods;const P=l.exports.sqlite3__wasm_kvvfsMakeKeyOnPstack,j=l.pstack,$=C=>l.peek(C)===115?sessionStorage:localStorage,G={xRead:(C,Z,ae,h)=>{const S=j.pointer,O=l.scopedAllocPush();try{const ne=P(C,Z);if(!ne)return-3;const g=l.cstrToJs(ne),E=$(C).getItem(g);if(!E)return-1;const f=E.length;if(h<=0)return f;if(h===1)return l.poke(ae,0),f;const p=l.scopedAllocCString(E);return h>f+1&&(h=f+1),l.heap8u().copyWithin(ae,p,p+h-1),l.poke(ae+h-1,0),h-1}catch(ne){return console.error("kvstorageRead()",ne),-2}finally{j.restore(S),l.scopedAllocPop(O)}},xWrite:(C,Z,ae)=>{const h=j.pointer;try{const S=P(C,Z);if(!S)return 1;const O=l.cstrToJs(S);return $(C).setItem(O,l.cstrToJs(ae)),0}catch(S){return console.error("kvstorageWrite()",S),o.SQLITE_IOERR}finally{j.restore(h)}},xDelete:(C,Z)=>{const ae=j.pointer;try{const h=P(C,Z);return h?($(C).removeItem(l.cstrToJs(h)),0):1}catch(h){return console.error("kvstorageDelete()",h),o.SQLITE_IOERR}finally{j.restore(ae)}}};for(const C of Object.keys(G))T[T.memberKey(C)]=l.installFunction(T.memberSignature(C),G[C])}else o.sqlite3_vfs_unregister(le);l.xWrap.FuncPtrAdapter.warnOnUse=!0;const W=t.StructBinder,R=function T(P,j,$,G=T.installMethodArgcCheck){if(P instanceof W.StructType?!($ instanceof Function)&&!l.isPtr($)&&i("Usage errror: expecting a Function or WASM pointer to one."):i("Usage error: target object is-not-a StructType."),arguments.length===1)return(h,S)=>T(P,h,S,G);T.argcProxy||(T.argcProxy=function(h,S,O,ne){return function(...g){return O.length!==arguments.length&&i("Argument mismatch for",h.structInfo.name+"::"+S+": Native signature is:",ne),O.apply(this,g)}},T.removeFuncList=function(){this.ondispose.__removeFuncList&&(this.ondispose.__removeFuncList.forEach((h,S)=>{if(typeof h=="number")try{l.uninstallFunction(h)}catch{}}),delete this.ondispose.__removeFuncList)});const C=P.memberSignature(j);C.length<2&&i("Member",j,"does not have a function pointer signature:",C);const Z=P.memberKey(j),ae=G&&!l.isPtr($)?T.argcProxy(P,Z,$,C):$;if(l.isPtr(ae))ae&&!l.functionEntry(ae)&&i("Pointer",ae,"is not a WASM function table entry."),P[Z]=ae;else{const h=l.installFunction(ae,P.memberSignature(j,!0));P[Z]=h,(!P.ondispose||!P.ondispose.__removeFuncList)&&(P.addOnDispose("ondispose.__removeFuncList handler",T.removeFuncList),P.ondispose.__removeFuncList=[]),P.ondispose.__removeFuncList.push(Z,h)}return(h,S)=>T(P,h,S,G)};R.installMethodArgcCheck=!1;const Y=function(T,P,j=R.installMethodArgcCheck){const $=new Map;for(const G of Object.keys(P)){const C=P[G],Z=$.get(C);if(Z){const ae=T.memberKey(G);T[ae]=T[T.memberKey(Z)]}else R(T,G,C,j),$.set(C,G)}return T};W.StructType.prototype.installMethod=function(P,j,$=R.installMethodArgcCheck){return arguments.length<3&&P&&typeof P=="object"?Y(this,...arguments):R(this,...arguments)},W.StructType.prototype.installMethods=function(T,P=R.installMethodArgcCheck){return Y(this,T,P)}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){t.version={libVersion:"3.49.1",libVersionNumber:3049001,sourceId:"2025-02-18 13:38:58 873d4e274b4988d260ba8354a9718324a1c26187a4ab4c1cc0227c03d0f10e70",downloadVersion:3490100}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){const i=(...g)=>{throw new t.SQLite3Error(...g)},o=t.capi,l=t.wasm,c=t.util,w=new WeakMap,k=new WeakMap,Q=(g,E,f)=>{const p=Object.getOwnPropertyDescriptor(g,E);return p?p.value:f},V=function(g,E){return E&&(g instanceof R&&(g=g.pointer),i(E,"sqlite3 result code",E+":",g?o.sqlite3_errmsg(g):o.sqlite3_errstr(E))),arguments[0]},oe=l.installFunction("i(ippp)",(function(g,E,f,p){o.SQLITE_TRACE_STMT===g&&console.log("SQL TRACE #"+ ++this.counter+" via sqlite3@"+E+":",l.cstrToJs(p))}).bind({counter:0})),le=Object.create(null),W=function g(...E){if(!g._name2vfs){g._name2vfs=Object.create(null);const Pe=typeof importScripts=="function"?Ue=>i("The VFS for",Ue,"is only available in the main window thread."):!1;g._name2vfs[":localStorage:"]={vfs:"kvvfs",filename:Pe||(()=>"local")},g._name2vfs[":sessionStorage:"]={vfs:"kvvfs",filename:Pe||(()=>"session")}}const f=g.normalizeArgs(...E);let p=f.filename,A=f.vfs,I=f.flags;(typeof p!="string"&&typeof p!="number"||typeof I!="string"||A&&typeof A!="string"&&typeof A!="number")&&(t.config.error("Invalid DB ctor args",f,arguments),i("Invalid arguments for DB constructor."));let re=typeof p=="number"?l.cstrToJs(p):p;const be=g._name2vfs[re];be&&(A=be.vfs,p=re=be.filename(re));let Ae,Re=0;I.indexOf("c")>=0&&(Re|=o.SQLITE_OPEN_CREATE|o.SQLITE_OPEN_READWRITE),I.indexOf("w")>=0&&(Re|=o.SQLITE_OPEN_READWRITE),Re===0&&(Re|=o.SQLITE_OPEN_READONLY),Re|=o.SQLITE_OPEN_EXRESCODE;const Fe=l.pstack.pointer;try{const Pe=l.pstack.allocPtr();let Ue=o.sqlite3_open_v2(p,Pe,Re,A||0);Ae=l.peekPtr(Pe),V(Ae,Ue),o.sqlite3_extended_result_codes(Ae,1),I.indexOf("t")>=0&&o.sqlite3_trace_v2(Ae,o.SQLITE_TRACE_STMT,oe,Ae)}catch(Pe){throw Ae&&o.sqlite3_close_v2(Ae),Pe}finally{l.pstack.restore(Fe)}this.filename=re,w.set(this,Ae),k.set(this,Object.create(null));try{const Pe=o.sqlite3_js_db_vfs(Ae)||i("Internal error: cannot get VFS for new db handle."),Ue=le[Pe];Ue&&(Ue instanceof Function?Ue(this,t):V(Ae,o.sqlite3_exec(Ae,Ue,0,0,0)))}catch(Pe){throw this.close(),Pe}};W.setVfsPostOpenCallback=function(g,E){E instanceof Function||i("dbCtorHelper.setVfsPostOpenCallback() should not be used with a non-function argument.",arguments),le[g]=E},W.normalizeArgs=function(g=":memory:",E="c",f=null){const p={};return arguments.length===1&&arguments[0]&&typeof arguments[0]=="object"?(Object.assign(p,arguments[0]),p.flags===void 0&&(p.flags="c"),p.vfs===void 0&&(p.vfs=null),p.filename===void 0&&(p.filename=":memory:")):(p.filename=g,p.flags=E,p.vfs=f),p};const R=function(...g){W.apply(this,g)};R.dbCtorHelper=W;const Y={null:1,number:2,string:3,boolean:4,blob:5};Y.undefined==Y.null,l.bigIntEnabled&&(Y.bigint=Y.number);const T=function(){Y!==arguments[2]&&i(o.SQLITE_MISUSE,"Do not call the Stmt constructor directly. Use DB.prepare()."),this.db=arguments[0],w.set(this,arguments[1]),this.parameterCount=o.sqlite3_bind_parameter_count(this.pointer)},P=function(g){return g.pointer||i("DB has been closed."),g},j=function(g,E){return(E!==(E|0)||E<0||E>=g.columnCount)&&i("Column index",E,"is out of range."),g},$=function(g,E){const f=Object.create(null);switch(f.opt=Object.create(null),E.length){case 1:typeof E[0]=="string"||c.isSQLableTypedArray(E[0])||Array.isArray(E[0])?f.sql=E[0]:E[0]&&typeof E[0]=="object"&&(f.opt=E[0],f.sql=f.opt.sql);break;case 2:f.sql=E[0],f.opt=E[1];break;default:i("Invalid argument count for exec().")}f.sql=c.flexibleString(f.sql),typeof f.sql!="string"&&i("Missing SQL argument or unsupported SQL value type.");const p=f.opt;switch(p.returnValue){case"resultRows":p.resultRows||(p.resultRows=[]),f.returnVal=()=>p.resultRows;break;case"saveSql":p.saveSql||(p.saveSql=[]),f.returnVal=()=>p.saveSql;break;case void 0:case"this":f.returnVal=()=>g;break;default:i("Invalid returnValue value:",p.returnValue)}if(!p.callback&&!p.returnValue&&p.rowMode!==void 0&&(p.resultRows||(p.resultRows=[]),f.returnVal=()=>p.resultRows),p.callback||p.resultRows)switch(p.rowMode===void 0?"array":p.rowMode){case"object":f.cbArg=(A,I)=>{I.columnNames||(I.columnNames=A.getColumnNames([]));const re=A.get([]),be=Object.create(null);for(const Ae in I.columnNames)be[I.columnNames[Ae]]=re[Ae];return be};break;case"array":f.cbArg=A=>A.get([]);break;case"stmt":Array.isArray(p.resultRows)&&i("exec(): invalid rowMode for a resultRows array: must","be one of 'array', 'object',","a result column number, or column name reference."),f.cbArg=A=>A;break;default:if(c.isInt32(p.rowMode)){f.cbArg=A=>A.get(p.rowMode);break}else if(typeof p.rowMode=="string"&&p.rowMode.length>1&&p.rowMode[0]==="$"){const A=p.rowMode.substr(1);f.cbArg=I=>{const re=I.get(Object.create(null))[A];return re===void 0?i(o.SQLITE_NOTFOUND,"exec(): unknown result column:",A):re};break}i("Invalid rowMode:",p.rowMode)}return f},G=(g,E,f,...p)=>{const A=g.prepare(E);try{const I=A.bind(f).step()?A.get(...p):void 0;return A.reset(),I}finally{A.finalize()}},C=(g,E,f,p)=>g.exec({sql:E,bind:f,rowMode:p,returnValue:"resultRows"});R.checkRc=(g,E)=>V(g,E),R.prototype={isOpen:function(){return!!this.pointer},affirmOpen:function(){return P(this)},close:function(){if(this.pointer){if(this.onclose&&this.onclose.before instanceof Function)try{this.onclose.before(this)}catch{}const g=this.pointer;if(Object.keys(k.get(this)).forEach((E,f)=>{if(f&&f.pointer)try{f.finalize()}catch{}}),w.delete(this),k.delete(this),o.sqlite3_close_v2(g),this.onclose&&this.onclose.after instanceof Function)try{this.onclose.after(this)}catch{}delete this.filename}},changes:function(g=!1,E=!1){const f=P(this).pointer;return g?E?o.sqlite3_total_changes64(f):o.sqlite3_total_changes(f):E?o.sqlite3_changes64(f):o.sqlite3_changes(f)},dbFilename:function(g="main"){return o.sqlite3_db_filename(P(this).pointer,g)},dbName:function(g=0){return o.sqlite3_db_name(P(this).pointer,g)},dbVfsName:function(g=0){let E;const f=o.sqlite3_js_db_vfs(P(this).pointer,g);if(f){const p=new o.sqlite3_vfs(f);try{E=l.cstrToJs(p.$zName)}finally{p.dispose()}}return E},prepare:function(g){P(this);const E=l.pstack.pointer;let f,p;try{f=l.pstack.alloc(8),R.checkRc(this,o.sqlite3_prepare_v2(this.pointer,g,-1,f,null)),p=l.peekPtr(f)}finally{l.pstack.restore(E)}p||i("Cannot prepare empty SQL.");const A=new T(this,p,Y);return k.get(this)[p]=A,A},exec:function(){P(this);const g=$(this,arguments);if(!g.sql)return i("exec() requires an SQL string.");const E=g.opt,f=E.callback,p=Array.isArray(E.resultRows)?E.resultRows:void 0;let A,I=E.bind,re=!!(g.cbArg||E.columnNames||p);const be=l.scopedAllocPush(),Ae=Array.isArray(E.saveSql)?E.saveSql:void 0;try{const Re=c.isSQLableTypedArray(g.sql);let Fe=Re?g.sql.byteLength:l.jstrlen(g.sql);const Pe=l.scopedAlloc(2*l.ptrSizeof+(Fe+1)),Ue=Pe+l.ptrSizeof;let $e=Ue+l.ptrSizeof;const Ye=$e+Fe;for(Re?l.heap8().set(g.sql,$e):l.jstrcpy(g.sql,l.heap8(),$e,Fe,!1),l.poke($e+Fe,0);$e&&l.peek($e,"i8");){l.pokePtr([Pe,Ue],0),R.checkRc(this,o.sqlite3_prepare_v3(this.pointer,$e,Fe,0,Pe,Ue));const Ze=l.peekPtr(Pe);if($e=l.peekPtr(Ue),Fe=Ye-$e,!!Ze){if(Ae&&Ae.push(o.sqlite3_sql(Ze).trim()),A=new T(this,Ze,Y),I&&A.parameterCount&&(A.bind(I),I=null),re&&A.columnCount){let mt=Array.isArray(E.columnNames)?0:1;if(re=!1,g.cbArg||p){const ot=Object.create(null);for(;A.step();A._lockedByExec=!1){mt++===0&&A.getColumnNames(ot.columnNames=E.columnNames||[]),A._lockedByExec=!0;const z=g.cbArg(A,ot);if(p&&p.push(z),f&&f.call(E,z,A)===!1)break}A._lockedByExec=!1}mt===0&&A.getColumnNames(E.columnNames)}else A.step();A.reset().finalize(),A=null}}}finally{l.scopedAllocPop(be),A&&(delete A._lockedByExec,A.finalize())}return g.returnVal()},createFunction:function(E,f,p){const A=ot=>ot instanceof Function;switch(arguments.length){case 1:p=E,E=p.name,f=p.xFunc||0;break;case 2:A(f)||(p=f,f=p.xFunc||0);break}p||(p={}),typeof E!="string"&&i("Invalid arguments: missing function name.");let I=p.xStep||0,re=p.xFinal||0;const be=p.xValue||0,Ae=p.xInverse||0;let Re;A(f)?(Re=!1,(A(I)||A(re))&&i("Ambiguous arguments: scalar or aggregate?"),I=re=null):A(I)?(A(re)||i("Missing xFinal() callback for aggregate or window UDF."),f=null):A(re)?i("Missing xStep() callback for aggregate or window UDF."):i("Missing function-type properties."),Re===!1?(A(be)||A(Ae))&&i("xValue and xInverse are not permitted for non-window UDFs."):A(be)?(A(Ae)||i("xInverse must be provided if xValue is."),Re=!0):A(Ae)&&i("xValue must be provided if xInverse is.");const Fe=p.pApp;Fe!=null&&(typeof Fe!="number"||!c.isInt32(Fe))&&i("Invalid value for pApp property. Must be a legal WASM pointer value.");const Pe=p.xDestroy||0;Pe&&!A(Pe)&&i("xDestroy property must be a function.");let Ue=0;Q(p,"deterministic")&&(Ue|=o.SQLITE_DETERMINISTIC),Q(p,"directOnly")&&(Ue|=o.SQLITE_DIRECTONLY),Q(p,"innocuous")&&(Ue|=o.SQLITE_INNOCUOUS),E=E.toLowerCase();const $e=f||I,Ye=Q(p,"arity"),Ze=typeof Ye=="number"?Ye:$e.length?$e.length-1:0;let mt;return Re?mt=o.sqlite3_create_window_function(this.pointer,E,Ze,o.SQLITE_UTF8|Ue,Fe||0,I,re,be,Ae,Pe):mt=o.sqlite3_create_function_v2(this.pointer,E,Ze,o.SQLITE_UTF8|Ue,Fe||0,f,I,re,Pe),R.checkRc(this,mt),this},selectValue:function(g,E,f){return G(this,g,E,0,f)},selectValues:function(g,E,f){const p=this.prepare(g),A=[];try{for(p.bind(E);p.step();)A.push(p.get(0,f));p.reset()}finally{p.finalize()}return A},selectArray:function(g,E){return G(this,g,E,[])},selectObject:function(g,E){return G(this,g,E,{})},selectArrays:function(g,E){return C(this,g,E,"array")},selectObjects:function(g,E){return C(this,g,E,"object")},openStatementCount:function(){return this.pointer?Object.keys(k.get(this)).length:0},transaction:function(g){let E="BEGIN";arguments.length>1&&(/[^a-zA-Z]/.test(arguments[0])&&i(o.SQLITE_MISUSE,"Invalid argument for BEGIN qualifier."),E+=" "+arguments[0],g=arguments[1]),P(this).exec(E);try{const f=g(this);return this.exec("COMMIT"),f}catch(f){throw this.exec("ROLLBACK"),f}},savepoint:function(g){P(this).exec("SAVEPOINT oo1");try{const E=g(this);return this.exec("RELEASE oo1"),E}catch(E){throw this.exec("ROLLBACK to SAVEPOINT oo1; RELEASE SAVEPOINT oo1"),E}},checkRc:function(g){return V(this,g)}};const Z=function(g){return g.pointer||i("Stmt has been closed."),g},ae=function(g){let E=Y[g==null?"null":typeof g];switch(E){case Y.boolean:case Y.null:case Y.number:case Y.string:return E;case Y.bigint:if(l.bigIntEnabled)return E;default:return c.isBindableTypedArray(g)?Y.blob:void 0}},h=function(g){return ae(g)||i("Unsupported bind() argument type:",typeof g)},S=function(g,E){const f=typeof E=="number"?E:o.sqlite3_bind_parameter_index(g.pointer,E);return f===0||!c.isInt32(f)?i("Invalid bind() parameter name: "+E):(f<1||f>g.parameterCount)&&i("Bind index",E,"is out of range."),f},O=function(g,E){return g._lockedByExec&&i("Operation is illegal when statement is locked:",E),g},ne=function g(E,f,p,A){O(Z(E),"bind()"),g._||(g._tooBigInt=re=>i("BigInt value is too big to store without precision loss:",re),g._={string:function(re,be,Ae,Re){const[Fe,Pe]=l.allocCString(Ae,!0);return(Re?o.sqlite3_bind_blob:o.sqlite3_bind_text)(re.pointer,be,Fe,Pe,o.SQLITE_WASM_DEALLOC)}}),h(A),f=S(E,f);let I=0;switch(A==null?Y.null:p){case Y.null:I=o.sqlite3_bind_null(E.pointer,f);break;case Y.string:I=g._.string(E,f,A,!1);break;case Y.number:{let re;c.isInt32(A)?re=o.sqlite3_bind_int:typeof A=="bigint"?c.bigIntFits64(A)?l.bigIntEnabled?re=o.sqlite3_bind_int64:c.bigIntFitsDouble(A)?(A=Number(A),re=o.sqlite3_bind_double):g._tooBigInt(A):g._tooBigInt(A):(A=Number(A),l.bigIntEnabled&&Number.isInteger(A)?re=o.sqlite3_bind_int64:re=o.sqlite3_bind_double),I=re(E.pointer,f,A);break}case Y.boolean:I=o.sqlite3_bind_int(E.pointer,f,A?1:0);break;case Y.blob:{if(typeof A=="string"){I=g._.string(E,f,A,!0);break}else A instanceof ArrayBuffer?A=new Uint8Array(A):c.isBindableTypedArray(A)||i("Binding a value as a blob requires","that it be a string, Uint8Array, Int8Array, or ArrayBuffer.");const re=l.alloc(A.byteLength||1);l.heap8().set(A.byteLength?A:[0],re),I=o.sqlite3_bind_blob(E.pointer,f,re,A.byteLength,o.SQLITE_WASM_DEALLOC);break}default:t.config.warn("Unsupported bind() argument type:",A),i("Unsupported bind() argument type: "+typeof A)}return I&&R.checkRc(E.db.pointer,I),E._mayGet=!1,E};T.prototype={finalize:function(){if(this.pointer){O(this,"finalize()");const g=o.sqlite3_finalize(this.pointer);return delete k.get(this.db)[this.pointer],w.delete(this),delete this._mayGet,delete this.parameterCount,delete this._lockedByExec,delete this.db,g}},clearBindings:function(){return O(Z(this),"clearBindings()"),o.sqlite3_clear_bindings(this.pointer),this._mayGet=!1,this},reset:function(g){O(this,"reset()"),g&&this.clearBindings();const E=o.sqlite3_reset(Z(this).pointer);return this._mayGet=!1,V(this.db,E),this},bind:function(){Z(this);let g,E;switch(arguments.length){case 1:g=1,E=arguments[0];break;case 2:g=arguments[0],E=arguments[1];break;default:i("Invalid bind() arguments.")}return E===void 0?this:(this.parameterCount||i("This statement has no bindable parameters."),this._mayGet=!1,E===null?ne(this,g,Y.null,E):Array.isArray(E)?(arguments.length!==1&&i("When binding an array, an index argument is not permitted."),E.forEach((f,p)=>ne(this,p+1,h(f),f)),this):(E instanceof ArrayBuffer&&(E=new Uint8Array(E)),typeof E=="object"&&!c.isBindableTypedArray(E)?(arguments.length!==1&&i("When binding an object, an index argument is not permitted."),Object.keys(E).forEach(f=>ne(this,f,h(E[f]),E[f])),this):ne(this,g,h(E),E)))},bindAsBlob:function(g,E){Z(this),arguments.length===1&&(E=g,g=1);const f=h(E);return Y.string!==f&&Y.blob!==f&&Y.null!==f&&i("Invalid value type for bindAsBlob()"),ne(this,g,Y.blob,E)},step:function(){O(this,"step()");const g=o.sqlite3_step(Z(this).pointer);switch(g){case o.SQLITE_DONE:return this._mayGet=!1;case o.SQLITE_ROW:return this._mayGet=!0;default:this._mayGet=!1,t.config.warn("sqlite3_step() rc=",g,o.sqlite3_js_rc_str(g),"SQL =",o.sqlite3_sql(this.pointer)),R.checkRc(this.db.pointer,g)}},stepReset:function(){return this.step(),this.reset()},stepFinalize:function(){try{const g=this.step();return this.reset(),g}finally{try{this.finalize()}catch{}}},get:function(g,E){if(Z(this)._mayGet||i("Stmt.step() has not (recently) returned true."),Array.isArray(g)){let f=0;const p=this.columnCount;for(;f<p;)g[f]=this.get(f++);return g}else if(g&&typeof g=="object"){let f=0;const p=this.columnCount;for(;f<p;)g[o.sqlite3_column_name(this.pointer,f)]=this.get(f++);return g}switch(j(this,g),E===void 0?o.sqlite3_column_type(this.pointer,g):E){case o.SQLITE_NULL:return null;case o.SQLITE_INTEGER:if(l.bigIntEnabled){const f=o.sqlite3_column_int64(this.pointer,g);return f>=Number.MIN_SAFE_INTEGER&&f<=Number.MAX_SAFE_INTEGER?Number(f).valueOf():f}else{const f=o.sqlite3_column_double(this.pointer,g);return(f>Number.MAX_SAFE_INTEGER||f<Number.MIN_SAFE_INTEGER)&&i("Integer is out of range for JS integer range: "+f),c.isInt32(f)?f|0:f}case o.SQLITE_FLOAT:return o.sqlite3_column_double(this.pointer,g);case o.SQLITE_TEXT:return o.sqlite3_column_text(this.pointer,g);case o.SQLITE_BLOB:{const f=o.sqlite3_column_bytes(this.pointer,g),p=o.sqlite3_column_blob(this.pointer,g),A=new Uint8Array(f);return f&&A.set(l.heap8u().slice(p,p+f),0),f&&this.db._blobXfer instanceof Array&&this.db._blobXfer.push(A.buffer),A}default:i("Don't know how to translate","type of result column #"+g+".")}i("Not reached.")},getInt:function(g){return this.get(g,o.SQLITE_INTEGER)},getFloat:function(g){return this.get(g,o.SQLITE_FLOAT)},getString:function(g){return this.get(g,o.SQLITE_TEXT)},getBlob:function(g){return this.get(g,o.SQLITE_BLOB)},getJSON:function(g){const E=this.get(g,o.SQLITE_STRING);return E===null?E:JSON.parse(E)},getColumnName:function(g){return o.sqlite3_column_name(j(Z(this),g).pointer,g)},getColumnNames:function(g=[]){j(Z(this),0);const E=this.columnCount;for(let f=0;f<E;++f)g.push(o.sqlite3_column_name(this.pointer,f));return g},getParamIndex:function(g){return Z(this).parameterCount?o.sqlite3_bind_parameter_index(this.pointer,g):void 0},getParamName:function(g){return Z(this).parameterCount?o.sqlite3_bind_parameter_name(this.pointer,g):void 0},isBusy:function(){return o.sqlite3_stmt_busy(Z(this))!==0},isReadOnly:function(){return o.sqlite3_stmt_readonly(Z(this))!==0}};{const g={enumerable:!0,get:function(){return w.get(this)},set:()=>i("The pointer property is read-only.")};Object.defineProperty(T.prototype,"pointer",g),Object.defineProperty(R.prototype,"pointer",g)}if(Object.defineProperty(T.prototype,"columnCount",{enumerable:!1,get:function(){return o.sqlite3_column_count(this.pointer)},set:()=>i("The columnCount property is read-only.")}),t.oo1={DB:R,Stmt:T},c.isUIThread()){t.oo1.JsStorageDb=function(E="session"){const f=W.normalizeArgs(...arguments);E=f.filename,E!=="session"&&E!=="local"&&i("JsStorageDb db name must be one of 'session' or 'local'."),f.vfs="kvvfs",W.call(this,f)};const g=t.oo1.JsStorageDb;g.prototype=Object.create(R.prototype),g.clearStorage=o.sqlite3_js_kvvfs_clear,g.prototype.clearStorage=function(){return g.clearStorage(P(this).filename)},g.storageSize=o.sqlite3_js_kvvfs_size,g.prototype.storageSize=function(){return g.storageSize(P(this).filename)}}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){const i=t.util;t.initWorker1API=(function(){const o=(...W)=>{throw new Error(W.join(" "))};globalThis.WorkerGlobalScope instanceof Function||o("initWorker1API() must be run from a Worker thread.");const l=this.sqlite3||o("Missing this.sqlite3 object."),c=l.oo1.DB,w=function(W){let R=k.idMap.get(W);return R||(R="db#"+ ++k.idSeq+"@"+W.pointer,k.idMap.set(W,R),R)},k={dbList:[],idSeq:0,idMap:new WeakMap,xfer:[],open:function(W){const R=new c(W);return this.dbs[w(R)]=R,this.dbList.indexOf(R)<0&&this.dbList.push(R),R},close:function(W,R){if(W){delete this.dbs[w(W)];const Y=W.filename,T=i.sqlite3__wasm_db_vfs(W.pointer,0);W.close();const P=this.dbList.indexOf(W);P>=0&&this.dbList.splice(P,1),R&&Y&&T&&i.sqlite3__wasm_vfs_unlink(T,Y)}},post:function(W,R){R&&R.length?(globalThis.postMessage(W,Array.from(R)),R.length=0):globalThis.postMessage(W)},dbs:Object.create(null),getDb:function(W,R=!0){return this.dbs[W]||(R?o("Unknown (or closed) DB ID:",W):void 0)}},Q=function(W=k.dbList[0]){return W&&W.pointer?W:o("DB is not opened.")},V=function(W,R=!0){const Y=k.getDb(W.dbId,!1)||k.dbList[0];return R?Q(Y):Y},oe=function(){return k.dbList[0]&&w(k.dbList[0])},le={open:function(W){const R=Object.create(null),Y=W.args||Object.create(null);Y.simulateError&&o("Throwing because of simulateError flag.");const T=Object.create(null);R.vfs=Y.vfs,R.filename=Y.filename||"";const P=k.open(R);return T.filename=P.filename,T.persistent=!!l.capi.sqlite3_js_db_uses_vfs(P.pointer,"opfs"),T.dbId=w(P),T.vfs=P.dbVfsName(),T},close:function(W){const R=V(W,!1),Y={filename:R&&R.filename};if(R){const T=W.args&&typeof W.args=="object"?!!W.args.unlink:!1;k.close(R,T)}return Y},exec:function(W){const R=typeof W.args=="string"?{sql:W.args}:W.args||Object.create(null);R.rowMode==="stmt"?o("Invalid rowMode for 'exec': stmt mode","does not work in the Worker API."):R.sql||o("'exec' requires input SQL.");const Y=V(W);(R.callback||Array.isArray(R.resultRows))&&(Y._blobXfer=k.xfer);const T=R.callback;let P=0;const j=!!R.columnNames;typeof T=="string"&&(j||(R.columnNames=[]),R.callback=function($,G){k.post({type:T,columnNames:R.columnNames,rowNumber:++P,row:$},k.xfer)});try{const $=R.countChanges?Y.changes(!0,R.countChanges===64):void 0;Y.exec(R),$!==void 0&&(R.changeCount=Y.changes(!0,R.countChanges===64)-$),R.callback instanceof Function&&(R.callback=T,k.post({type:T,columnNames:R.columnNames,rowNumber:null,row:void 0}))}finally{delete Y._blobXfer,R.callback&&(R.callback=T)}return R},"config-get":function(){const W=Object.create(null),R=l.config;return["bigIntEnabled"].forEach(function(Y){Object.getOwnPropertyDescriptor(R,Y)&&(W[Y]=R[Y])}),W.version=l.version,W.vfsList=l.capi.sqlite3_js_vfs_list(),W},export:function(W){const R=V(W),Y={byteArray:l.capi.sqlite3_js_db_export(R.pointer),filename:R.filename,mimetype:"application/x-sqlite3"};return k.xfer.push(Y.byteArray.buffer),Y},toss:function(W){o("Testing worker exception")}};globalThis.onmessage=async function(W){W=W.data;let R,Y=W.dbId,T=W.type;const P=performance.now();try{le.hasOwnProperty(T)&&le[T]instanceof Function?R=await le[T](W):o("Unknown db worker message type:",W.type)}catch(j){T="error",R={operation:W.type,message:j.message,errorClass:j.name,input:W},j.stack&&(R.stack=typeof j.stack=="string"?j.stack.split(/\n\s*/):j.stack)}Y||(Y=R.dbId||oe()),k.post({type:T,dbId:Y,messageId:W.messageId,workerReceivedTime:P,workerRespondTime:performance.now(),departureTime:W.departureTime,result:R},k.xfer)},globalThis.postMessage({type:"sqlite3-api",result:"worker1-ready"})}).bind({sqlite3:t})}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){const i=t.wasm,o=t.capi,l=t.util.toss3,c=Object.create(null);t.vfs=c,o.sqlite3_vfs.prototype.registerVfs=function(w=!1){this instanceof t.capi.sqlite3_vfs||l("Expecting a sqlite3_vfs-type argument.");const k=o.sqlite3_vfs_register(this,w?1:0);return k&&l("sqlite3_vfs_register(",this,") failed with rc",k),this.pointer!==o.sqlite3_vfs_find(this.$zName)&&l("BUG: sqlite3_vfs_find(vfs.$zName) failed for just-installed VFS",this),this},c.installVfs=function(w){let k=0;const Q=["io","vfs"];for(const V of Q){const oe=w[V];oe&&(++k,oe.struct.installMethods(oe.methods,!!oe.applyArgcCheck),V==="vfs"&&(!oe.struct.$zName&&typeof oe.name=="string"&&oe.struct.addOnDispose(oe.struct.$zName=i.allocCString(oe.name)),oe.struct.registerVfs(!!oe.asDefault)))}return k||l("Misuse: installVfs() options object requires at least","one of:",Q),this}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){if(!t.wasm.exports.sqlite3_declare_vtab)return;const i=t.wasm,o=t.capi,l=t.util.toss3,c=Object.create(null);t.vtab=c;const w=o.sqlite3_index_info;w.prototype.nthConstraint=function(V,oe=!1){if(V<0||V>=this.$nConstraint)return!1;const le=this.$aConstraint+w.sqlite3_index_constraint.structInfo.sizeof*V;return oe?le:new w.sqlite3_index_constraint(le)},w.prototype.nthConstraintUsage=function(V,oe=!1){if(V<0||V>=this.$nConstraint)return!1;const le=this.$aConstraintUsage+w.sqlite3_index_constraint_usage.structInfo.sizeof*V;return oe?le:new w.sqlite3_index_constraint_usage(le)},w.prototype.nthOrderBy=function(V,oe=!1){if(V<0||V>=this.$nOrderBy)return!1;const le=this.$aOrderBy+w.sqlite3_index_orderby.structInfo.sizeof*V;return oe?le:new w.sqlite3_index_orderby(le)};const k=function(V,oe){return(function(le,W=!1){if(arguments.length===0&&(le=new oe),le instanceof oe)return this.set(le.pointer,le),le;i.isPtr(le)||t.SQLite3Error.toss("Invalid argument to",V+"()");let R=this.get(le);return W&&this.delete(le),R}).bind(new Map)},Q=function(V,oe){const le=k(V,oe);return Object.assign(Object.create(null),{StructType:oe,create:W=>{const R=le();return i.pokePtr(W,R.pointer),R},get:W=>le(W),unget:W=>le(W,!0),dispose:W=>{const R=le(W,!0);R&&R.dispose()}})};c.xVtab=Q("xVtab",o.sqlite3_vtab),c.xCursor=Q("xCursor",o.sqlite3_vtab_cursor),c.xIndexInfo=V=>new o.sqlite3_index_info(V),c.xError=function V(oe,le,W){if(V.errorReporter instanceof Function)try{V.errorReporter("sqlite3_module::"+oe+"(): "+le.message)}catch{}let R;return le instanceof t.WasmAllocError?R=o.SQLITE_NOMEM:arguments.length>2?R=W:le instanceof t.SQLite3Error&&(R=le.resultCode),R||o.SQLITE_ERROR},c.xError.errorReporter=console.error.bind(console),c.xRowid=(V,oe)=>i.poke(V,oe,"i64"),c.setupModule=function(V){let oe=!1;const le=this instanceof o.sqlite3_module?this:V.struct||(oe=new o.sqlite3_module);try{const W=V.methods||l("Missing 'methods' object.");for(const R of Object.entries({xConnect:"xCreate",xDisconnect:"xDestroy"})){const Y=R[0],T=R[1];W[Y]===!0?W[Y]=W[T]:W[T]===!0&&(W[T]=W[Y])}if(V.catchExceptions){const R=function(P,j){return["xConnect","xCreate"].indexOf(P)>=0?function($,G,C,Z,ae,h){try{return j(...arguments)||0}catch(S){return S instanceof t.WasmAllocError||(i.dealloc(i.peekPtr(h)),i.pokePtr(h,i.allocCString(S.message))),c.xError(P,S)}}:function(...$){try{return j(...$)||0}catch(G){return c.xError(P,G)}}},Y=["xCreate","xConnect","xBestIndex","xDisconnect","xDestroy","xOpen","xClose","xFilter","xNext","xEof","xColumn","xRowid","xUpdate","xBegin","xSync","xCommit","xRollback","xFindFunction","xRename","xSavepoint","xRelease","xRollbackTo","xShadowName"],T=Object.create(null);for(const P of Y){const j=W[P];if(j instanceof Function)P==="xConnect"&&W.xCreate===j?T[P]=W.xCreate:P==="xCreate"&&W.xConnect===j?T[P]=W.xConnect:T[P]=R(P,j);else continue}le.installMethods(T,!1)}else le.installMethods(W,!!V.applyArgcCheck);if(le.$iVersion===0){let R;typeof V.iVersion=="number"?R=V.iVersion:le.$xShadowName?R=3:le.$xSavePoint||le.$xRelease||le.$xRollbackTo?R=2:R=1,le.$iVersion=R}}catch(W){throw oe&&oe.dispose(),W}return le},o.sqlite3_module.prototype.setupModule=function(V){return c.setupModule.call(this,V)}}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){const i=function o(l){var k;if(!globalThis.SharedArrayBuffer||!globalThis.Atomics)return Promise.reject(new Error("Cannot install OPFS: Missing SharedArrayBuffer and/or Atomics. The server must emit the COOP/COEP response headers to enable those. See https://sqlite.org/wasm/doc/trunk/persistence.md#coop-coep"));if(typeof WorkerGlobalScope>"u")return Promise.reject(new Error("The OPFS sqlite3_vfs cannot run in the main thread because it requires Atomics.wait()."));if(!globalThis.FileSystemHandle||!globalThis.FileSystemDirectoryHandle||!globalThis.FileSystemFileHandle||!globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle||!((k=navigator==null?void 0:navigator.storage)!=null&&k.getDirectory))return Promise.reject(new Error("Missing required OPFS APIs."));(!l||typeof l!="object")&&(l=Object.create(null));const c=new URL(globalThis.location.href).searchParams;return c.has("opfs-disable")?Promise.resolve(t):(l.verbose===void 0&&(l.verbose=c.has("opfs-verbose")?+c.get("opfs-verbose")||2:1),l.sanityChecks===void 0&&(l.sanityChecks=c.has("opfs-sanity-check")),l.proxyUri===void 0&&(l.proxyUri=o.defaultProxyUri),typeof l.proxyUri=="function"&&(l.proxyUri=l.proxyUri()),new Promise(function(Q,V){const oe=[t.config.error,t.config.warn,t.config.log],le=(z,...ee)=>{l.verbose>z&&oe[z]("OPFS syncer:",...ee)},W=(...z)=>le(2,...z),R=(...z)=>le(1,...z),Y=(...z)=>le(0,...z),T=t.util.toss,P=t.capi,j=t.util,$=t.wasm,G=P.sqlite3_vfs,C=P.sqlite3_file,Z=P.sqlite3_io_methods,ae=Object.create(null),h=()=>{var z;return globalThis.FileSystemHandle&&globalThis.FileSystemDirectoryHandle&&globalThis.FileSystemFileHandle&&globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle&&((z=navigator==null?void 0:navigator.storage)==null?void 0:z.getDirectory)};ae.metrics={dump:function(){let z,ee=0,se=0,pe=0;for(z in I.opIds){const fe=re[z];ee+=fe.count,se+=fe.time,pe+=fe.wait,fe.avgTime=fe.count&&fe.time?fe.time/fe.count:0,fe.avgWait=fe.count&&fe.wait?fe.wait/fe.count:0}t.config.log(globalThis.location.href,"metrics for",globalThis.location.href,":",re,`
Total of`,ee,"op(s) for",se,"ms (incl. "+pe+" ms of waiting on the async side)"),t.config.log("Serialization metrics:",re.s11n),f.postMessage({type:"opfs-async-metrics"})},reset:function(){let z;const ee=pe=>pe.count=pe.time=pe.wait=0;for(z in I.opIds)ee(re[z]=Object.create(null));let se=re.s11n=Object.create(null);se=se.serialize=Object.create(null),se.count=se.time=0,se=re.s11n.deserialize=Object.create(null),se.count=se.time=0}};const S=new Z,O=new G().addOnDispose(()=>S.dispose());let ne;const g=z=>(ne=!0,O.dispose(),V(z)),E=()=>(ne=!1,Q(t)),f=new Worker(new URL("/teimtrackr/assets/sqlite3-opfs-async-proxy-DZdsd1Kz.js",self.location.href));setTimeout(()=>{ne===void 0&&g(new Error("Timeout while waiting for OPFS async proxy worker."))},4e3),f._originalOnError=f.onerror,f.onerror=function(z){Y("Error initializing OPFS asyncer:",z),g(new Error("Loading OPFS async Worker failed for unknown reasons."))};const p=P.sqlite3_vfs_find(null),A=p?new G(p):null;S.$iVersion=1,O.$iVersion=2,O.$szOsFile=P.sqlite3_file.structInfo.sizeof,O.$mxPathname=1024,O.$zName=$.allocCString("opfs"),O.$xDlOpen=O.$xDlError=O.$xDlSym=O.$xDlClose=null,O.addOnDispose("$zName",O.$zName,"cleanup default VFS wrapper",()=>A?A.dispose():null);const I=Object.create(null);I.verbose=l.verbose,I.littleEndian=(()=>{const z=new ArrayBuffer(2);return new DataView(z).setInt16(0,256,!0),new Int16Array(z)[0]===256})(),I.asyncIdleWaitTime=150,I.asyncS11nExceptions=1,I.fileBufferSize=1024*64,I.sabS11nOffset=I.fileBufferSize,I.sabS11nSize=O.$mxPathname*2,I.sabIO=new SharedArrayBuffer(I.fileBufferSize+I.sabS11nSize),I.opIds=Object.create(null);const re=Object.create(null);{let z=0;I.opIds.whichOp=z++,I.opIds.rc=z++,I.opIds.xAccess=z++,I.opIds.xClose=z++,I.opIds.xDelete=z++,I.opIds.xDeleteNoWait=z++,I.opIds.xFileSize=z++,I.opIds.xLock=z++,I.opIds.xOpen=z++,I.opIds.xRead=z++,I.opIds.xSleep=z++,I.opIds.xSync=z++,I.opIds.xTruncate=z++,I.opIds.xUnlock=z++,I.opIds.xWrite=z++,I.opIds.mkdir=z++,I.opIds["opfs-async-metrics"]=z++,I.opIds["opfs-async-shutdown"]=z++,I.opIds.retry=z++,I.sabOP=new SharedArrayBuffer(z*4),ae.metrics.reset()}I.sq3Codes=Object.create(null),["SQLITE_ACCESS_EXISTS","SQLITE_ACCESS_READWRITE","SQLITE_BUSY","SQLITE_CANTOPEN","SQLITE_ERROR","SQLITE_IOERR","SQLITE_IOERR_ACCESS","SQLITE_IOERR_CLOSE","SQLITE_IOERR_DELETE","SQLITE_IOERR_FSYNC","SQLITE_IOERR_LOCK","SQLITE_IOERR_READ","SQLITE_IOERR_SHORT_READ","SQLITE_IOERR_TRUNCATE","SQLITE_IOERR_UNLOCK","SQLITE_IOERR_WRITE","SQLITE_LOCK_EXCLUSIVE","SQLITE_LOCK_NONE","SQLITE_LOCK_PENDING","SQLITE_LOCK_RESERVED","SQLITE_LOCK_SHARED","SQLITE_LOCKED","SQLITE_MISUSE","SQLITE_NOTFOUND","SQLITE_OPEN_CREATE","SQLITE_OPEN_DELETEONCLOSE","SQLITE_OPEN_MAIN_DB","SQLITE_OPEN_READONLY"].forEach(z=>{(I.sq3Codes[z]=P[z])===void 0&&T("Maintenance required: not found:",z)}),I.opfsFlags=Object.assign(Object.create(null),{OPFS_UNLOCK_ASAP:1,OPFS_UNLINK_BEFORE_OPEN:2,defaultUnlockAsap:!1});const be=(z,...ee)=>{const se=I.opIds[z]||T("Invalid op ID:",z);I.s11n.serialize(...ee),Atomics.store(I.sabOPView,I.opIds.rc,-1),Atomics.store(I.sabOPView,I.opIds.whichOp,se),Atomics.notify(I.sabOPView,I.opIds.whichOp);const pe=performance.now();for(;Atomics.wait(I.sabOPView,I.opIds.rc,-1)!=="not-equal";);const fe=Atomics.load(I.sabOPView,I.opIds.rc);if(re[z].wait+=performance.now()-pe,fe&&I.asyncS11nExceptions){const we=I.s11n.deserialize();we&&Y(z+"() async error:",...we)}return fe};ae.debug={asyncShutdown:()=>{R("Shutting down OPFS async listener. The OPFS VFS will no longer work."),be("opfs-async-shutdown")},asyncRestart:()=>{R("Attempting to restart OPFS VFS async listener. Might work, might not."),f.postMessage({type:"opfs-async-restart"})}};const Ae=()=>{if(I.s11n)return I.s11n;const z=new TextDecoder,ee=new TextEncoder("utf-8"),se=new Uint8Array(I.sabIO,I.sabS11nOffset,I.sabS11nSize),pe=new DataView(I.sabIO,I.sabS11nOffset,I.sabS11nSize);I.s11n=Object.create(null);const fe=Object.create(null);fe.number={id:1,size:8,getter:"getFloat64",setter:"setFloat64"},fe.bigint={id:2,size:8,getter:"getBigInt64",setter:"setBigInt64"},fe.boolean={id:3,size:4,getter:"getInt32",setter:"setInt32"},fe.string={id:4};const we=x=>fe[typeof x]||T("Maintenance required: this value type cannot be serialized.",x),te=x=>{switch(x){case fe.number.id:return fe.number;case fe.bigint.id:return fe.bigint;case fe.boolean.id:return fe.boolean;case fe.string.id:return fe.string;default:T("Invalid type ID:",x)}};return I.s11n.deserialize=function(x=!1){++re.s11n.deserialize.count;const y=performance.now(),L=se[0],U=L?[]:null;if(L){const K=[];let _e=1,Ee,je,Je;for(Ee=0;Ee<L;++Ee,++_e)K.push(te(se[_e]));for(Ee=0;Ee<L;++Ee){const kt=K[Ee];kt.getter?(Je=pe[kt.getter](_e,I.littleEndian),_e+=kt.size):(je=pe.getInt32(_e,I.littleEndian),_e+=4,Je=z.decode(se.slice(_e,_e+je)),_e+=je),U.push(Je)}}return x&&(se[0]=0),re.s11n.deserialize.time+=performance.now()-y,U},I.s11n.serialize=function(...x){const y=performance.now();if(++re.s11n.serialize.count,x.length){const L=[];let U=0,K=1;for(se[0]=x.length&255;U<x.length;++U,++K)L.push(we(x[U])),se[K]=L[U].id;for(U=0;U<x.length;++U){const _e=L[U];if(_e.setter)pe[_e.setter](K,x[U],I.littleEndian),K+=_e.size;else{const Ee=ee.encode(x[U]);pe.setInt32(K,Ee.byteLength,I.littleEndian),K+=4,se.set(Ee,K),K+=Ee.byteLength}}}else se[0]=0;re.s11n.serialize.time+=performance.now()-y},I.s11n},Re=function z(ee=16){z._chars||(z._chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789",z._n=z._chars.length);const se=[];let pe=0;for(;pe<ee;++pe){const fe=Math.random()*(z._n*64)%z._n|0;se[pe]=z._chars[fe]}return se.join("")},Fe=Object.create(null),Pe=Object.create(null);Pe.op=void 0,Pe.start=void 0;const Ue=z=>{Pe.start=performance.now(),Pe.op=z,++re[z].count},$e=()=>re[Pe.op].time+=performance.now()-Pe.start,Ye={xCheckReservedLock:function(z,ee){return $.poke(ee,0,"i32"),0},xClose:function(z){Ue("xClose");let ee=0;const se=Fe[z];return se&&(delete Fe[z],ee=be("xClose",z),se.sq3File&&se.sq3File.dispose()),$e(),ee},xDeviceCharacteristics:function(z){return P.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN},xFileControl:function(z,ee,se){return P.SQLITE_NOTFOUND},xFileSize:function(z,ee){Ue("xFileSize");let se=be("xFileSize",z);if(se==0)try{const pe=I.s11n.deserialize()[0];$.poke(ee,pe,"i64")}catch(pe){Y("Unexpected error reading xFileSize() result:",pe),se=I.sq3Codes.SQLITE_IOERR}return $e(),se},xLock:function(z,ee){Ue("xLock");const se=Fe[z];let pe=0;return se.lockType?se.lockType=ee:(pe=be("xLock",z,ee),pe===0&&(se.lockType=ee)),$e(),pe},xRead:function(z,ee,se,pe){Ue("xRead");const fe=Fe[z];let we;try{we=be("xRead",z,se,Number(pe)),(we===0||P.SQLITE_IOERR_SHORT_READ===we)&&$.heap8u().set(fe.sabView.subarray(0,se),ee)}catch(te){Y("xRead(",arguments,") failed:",te,fe),we=P.SQLITE_IOERR_READ}return $e(),we},xSync:function(z,ee){Ue("xSync"),++re.xSync.count;const se=be("xSync",z,ee);return $e(),se},xTruncate:function(z,ee){Ue("xTruncate");const se=be("xTruncate",z,Number(ee));return $e(),se},xUnlock:function(z,ee){Ue("xUnlock");const se=Fe[z];let pe=0;return P.SQLITE_LOCK_NONE===ee&&se.lockType&&(pe=be("xUnlock",z,ee)),pe===0&&(se.lockType=ee),$e(),pe},xWrite:function(z,ee,se,pe){Ue("xWrite");const fe=Fe[z];let we;try{fe.sabView.set($.heap8u().subarray(ee,ee+se)),we=be("xWrite",z,se,Number(pe))}catch(te){Y("xWrite(",arguments,") failed:",te,fe),we=P.SQLITE_IOERR_WRITE}return $e(),we}},Ze={xAccess:function(z,ee,se,pe){Ue("xAccess");const fe=be("xAccess",$.cstrToJs(ee));return $.poke(pe,fe?0:1,"i32"),$e(),0},xCurrentTime:function(z,ee){return $.poke(ee,24405875e-1+new Date().getTime()/864e5,"double"),0},xCurrentTimeInt64:function(z,ee){return $.poke(ee,24405875e-1*864e5+new Date().getTime(),"i64"),0},xDelete:function(z,ee,se){Ue("xDelete");const pe=be("xDelete",$.cstrToJs(ee),se,!1);return $e(),pe},xFullPathname:function(z,ee,se,pe){return $.cstrncpy(pe,ee,se)<se?0:P.SQLITE_CANTOPEN},xGetLastError:function(z,ee,se){return R("OPFS xGetLastError() has nothing sensible to return."),0},xOpen:function(ee,se,pe,fe,we){Ue("xOpen");let te=0;se===0?se=Re():$.isPtr(se)&&(P.sqlite3_uri_boolean(se,"opfs-unlock-asap",0)&&(te|=I.opfsFlags.OPFS_UNLOCK_ASAP),P.sqlite3_uri_boolean(se,"delete-before-open",0)&&(te|=I.opfsFlags.OPFS_UNLINK_BEFORE_OPEN),se=$.cstrToJs(se));const x=Object.create(null);x.fid=pe,x.filename=se,x.sab=new SharedArrayBuffer(I.fileBufferSize),x.flags=fe,x.readOnly=!(t.SQLITE_OPEN_CREATE&fe)&&!!(fe&P.SQLITE_OPEN_READONLY);const y=be("xOpen",pe,se,fe,te);return y||(x.readOnly&&$.poke(we,P.SQLITE_OPEN_READONLY,"i32"),Fe[pe]=x,x.sabView=I.sabFileBufView,x.sq3File=new C(pe),x.sq3File.$pMethods=S.pointer,x.lockType=P.SQLITE_LOCK_NONE),$e(),y}};A&&(O.$xRandomness=A.$xRandomness,O.$xSleep=A.$xSleep),O.$xRandomness||(Ze.xRandomness=function(z,ee,se){const pe=$.heap8u();let fe=0;for(;fe<ee;++fe)pe[se+fe]=Math.random()*255e3&255;return fe}),O.$xSleep||(Ze.xSleep=function(z,ee){return Atomics.wait(I.sabOPView,I.opIds.xSleep,0,ee),0}),ae.getResolvedPath=function(z,ee){const se=new URL(z,"file://irrelevant").pathname;return ee?se.split("/").filter(pe=>!!pe):se},ae.getDirForFilename=async function(ee,se=!1){const pe=ae.getResolvedPath(ee,!0),fe=pe.pop();let we=ae.rootDirectory;for(const te of pe)te&&(we=await we.getDirectoryHandle(te,{create:!!se}));return[we,fe]},ae.mkdir=async function(z){try{return await ae.getDirForFilename(z+"/filepart",!0),!0}catch{return!1}},ae.entryExists=async function(z){try{const[ee,se]=await ae.getDirForFilename(z);return await ee.getFileHandle(se),!0}catch{return!1}},ae.randomFilename=Re,ae.treeList=async function(){const z=async function se(pe,fe){fe.name=pe.name,fe.dirs=[],fe.files=[];for await(const we of pe.values())if(we.kind==="directory"){const te=Object.create(null);fe.dirs.push(te),await se(we,te)}else fe.files.push(we.name)},ee=Object.create(null);return await z(ae.rootDirectory,ee),ee},ae.rmfr=async function(){const z=ae.rootDirectory,ee={recurse:!0};for await(const se of z.values())z.removeEntry(se.name,ee)},ae.unlink=async function(z,ee=!1,se=!1){try{const[pe,fe]=await ae.getDirForFilename(z,!1);return await pe.removeEntry(fe,{recursive:ee}),!0}catch(pe){if(se)throw new Error("unlink(",arguments[0],") failed: "+pe.message,{cause:pe});return!1}},ae.traverse=async function(z){const ee={recursive:!0,directory:ae.rootDirectory};typeof z=="function"&&(z={callback:z}),z=Object.assign(ee,z||{}),async function pe(fe,we){for await(const te of fe.values()){if(z.callback(te,fe,we)===!1)return!1;if(z.recursive&&te.kind==="directory"&&await pe(te,we+1)===!1)break}}(z.directory,0)};const mt=async function(z,ee){const[se,pe]=await ae.getDirForFilename(z,!0);let we=await(await se.getFileHandle(pe,{create:!0})).createSyncAccessHandle(),te=0,x,y=!1;try{for(we.truncate(0);(x=await ee())!==void 0;)x instanceof ArrayBuffer&&(x=new Uint8Array(x)),te===0&&x.byteLength>=15&&(j.affirmDbHeader(x),y=!0),we.write(x,{at:te}),te+=x.byteLength;if((te<512||te%512!==0)&&T("Input size",te,"is not correct for an SQLite database."),!y){const L=new Uint8Array(20);we.read(L,{at:0}),j.affirmDbHeader(L)}return we.write(new Uint8Array([1,1]),{at:18}),te}catch(L){throw await we.close(),we=void 0,await se.removeEntry(pe).catch(()=>{}),L}finally{we&&await we.close()}};if(ae.importDb=async function(z,ee){if(ee instanceof Function)return mt(z,ee);ee instanceof ArrayBuffer&&(ee=new Uint8Array(ee)),j.affirmIsDb(ee);const se=ee.byteLength,[pe,fe]=await ae.getDirForFilename(z,!0);let we,te=0;try{return we=await(await pe.getFileHandle(fe,{create:!0})).createSyncAccessHandle(),we.truncate(0),te=we.write(ee,{at:0}),te!=se&&T("Expected to write "+se+" bytes but wrote "+te+"."),we.write(new Uint8Array([1,1]),{at:18}),te}catch(x){throw we&&(await we.close(),we=void 0),await pe.removeEntry(fe).catch(()=>{}),x}finally{we&&await we.close()}},t.oo1){const z=function(...ee){const se=t.oo1.DB.dbCtorHelper.normalizeArgs(...ee);se.vfs=O.$zName,t.oo1.DB.dbCtorHelper.call(this,se)};z.prototype=Object.create(t.oo1.DB.prototype),t.oo1.OpfsDb=z,z.importDb=ae.importDb,t.oo1.DB.dbCtorHelper.setVfsPostOpenCallback(O.pointer,function(ee,se){se.capi.sqlite3_busy_timeout(ee,1e4)})}const ot=function(){const z=$.scopedAllocPush(),ee=new C;try{const se=ee.pointer,pe=P.SQLITE_OPEN_CREATE|P.SQLITE_OPEN_READWRITE|P.SQLITE_OPEN_MAIN_DB,fe=$.scopedAlloc(8),we="/sanity/check/file"+Re(8),te=$.scopedAllocCString(we);let x;if(I.s11n.serialize("This is ä string."),x=I.s11n.deserialize(),W("deserialize() says:",x),x[0]!=="This is ä string."&&T("String d13n error."),Ze.xAccess(O.pointer,te,0,fe),x=$.peek(fe,"i32"),W("xAccess(",we,") exists ?=",x),x=Ze.xOpen(O.pointer,te,se,pe,fe),W("open rc =",x,"state.sabOPView[xOpen] =",I.sabOPView[I.opIds.xOpen]),x!==0){Y("open failed with code",x);return}Ze.xAccess(O.pointer,te,0,fe),x=$.peek(fe,"i32"),x||T("xAccess() failed to detect file."),x=Ye.xSync(ee.pointer,0),x&&T("sync failed w/ rc",x),x=Ye.xTruncate(ee.pointer,1024),x&&T("truncate failed w/ rc",x),$.poke(fe,0,"i64"),x=Ye.xFileSize(ee.pointer,fe),x&&T("xFileSize failed w/ rc",x),W("xFileSize says:",$.peek(fe,"i64")),x=Ye.xWrite(ee.pointer,te,10,1),x&&T("xWrite() failed!");const y=$.scopedAlloc(16);x=Ye.xRead(ee.pointer,y,6,2),$.poke(y+6,0);let L=$.cstrToJs(y);W("xRead() got:",L),L!=="sanity"&&T("Unexpected xRead() value."),Ze.xSleep&&(W("xSleep()ing before close()ing..."),Ze.xSleep(O.pointer,2e3),W("waking up from xSleep()")),x=Ye.xClose(se),W("xClose rc =",x,"sabOPView =",I.sabOPView),W("Deleting file:",we),Ze.xDelete(O.pointer,te,4660),Ze.xAccess(O.pointer,te,0,fe),x=$.peek(fe,"i32"),x&&T("Expecting 0 from xAccess(",we,") after xDelete()."),R("End of OPFS sanity checks.")}finally{ee.dispose(),$.scopedAllocPop(z)}};f.onmessage=function({data:z}){switch(z.type){case"opfs-unavailable":g(new Error(z.payload.join(" ")));break;case"opfs-async-loaded":f.postMessage({type:"opfs-async-init",args:I});break;case"opfs-async-inited":{if(ne===!0)break;try{t.vfs.installVfs({io:{struct:S,methods:Ye},vfs:{struct:O,methods:Ze}}),I.sabOPView=new Int32Array(I.sabOP),I.sabFileBufView=new Uint8Array(I.sabIO,0,I.fileBufferSize),I.sabS11nView=new Uint8Array(I.sabIO,I.sabS11nOffset,I.sabS11nSize),Ae(),l.sanityChecks&&(R("Running sanity checks because of opfs-sanity-check URL arg..."),ot()),h()?navigator.storage.getDirectory().then(ee=>{f.onerror=f._originalOnError,delete f._originalOnError,t.opfs=ae,ae.rootDirectory=ee,W("End of OPFS sqlite3_vfs setup.",O),E()}).catch(g):E()}catch(ee){Y(ee),g(ee)}break}default:{const ee="Unexpected message from the OPFS async worker: "+JSON.stringify(z);Y(ee),g(new Error(ee));break}}}}))};i.defaultProxyUri="sqlite3-opfs-async-proxy.js",globalThis.sqlite3ApiBootstrap.initializersAsync.push(async o=>{try{let l=i.defaultProxyUri;return o.scriptInfo.sqlite3Dir&&(i.defaultProxyUri=o.scriptInfo.sqlite3Dir+l),i().catch(c=>{o.config.warn("Ignoring inability to install OPFS sqlite3_vfs:",c.message)})}catch(l){return o.config.error("installOpfsVfs() exception:",l),Promise.reject(l)}})}),globalThis.sqlite3ApiBootstrap.initializers.push(function(t){var Fe,Pe,Ue,$e,Ye,Ze,mt,ot,z,ee,se,pe,rn,we;const i=t.util.toss,o=t.util.toss3,l=Object.create(null),c=t.capi,w=t.util,k=t.wasm,Q=4096,V=512,oe=4,le=8,W=V+oe,R=V,Y=W,T=Q,P=c.SQLITE_OPEN_MAIN_DB|c.SQLITE_OPEN_MAIN_JOURNAL|c.SQLITE_OPEN_SUPER_JOURNAL|c.SQLITE_OPEN_WAL,j=".opaque",$=()=>Math.random().toString(36).slice(2),G=new TextDecoder,C=new TextEncoder,Z=Object.assign(Object.create(null),{name:"opfs-sahpool",directory:void 0,initialCapacity:6,clearOnInit:!1,verbosity:2,forceReinitIfPreviouslyFailed:!1}),ae=[t.config.error,t.config.warn,t.config.log];t.config.log;const h=t.config.warn;t.config.error;const S=new Map,O=te=>S.get(te),ne=(te,x)=>{x?S.set(te,x):S.delete(te)},g=new Map,E=te=>g.get(te),f=(te,x)=>{x?g.set(te,x):g.delete(te)},p={xCheckReservedLock:function(te,x){const y=E(te);return y.log("xCheckReservedLock"),y.storeErr(),k.poke32(x,1),0},xClose:function(te){const x=E(te);x.storeErr();const y=x.getOFileForS3File(te);if(y)try{x.log(`xClose ${y.path}`),x.mapS3FileToOFile(te,!1),y.sah.flush(),y.flags&c.SQLITE_OPEN_DELETEONCLOSE&&x.deletePath(y.path)}catch(L){return x.storeErr(L,c.SQLITE_IOERR)}return 0},xDeviceCharacteristics:function(te){return c.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN},xFileControl:function(te,x,y){return c.SQLITE_NOTFOUND},xFileSize:function(te,x){const y=E(te);y.log("xFileSize");const U=y.getOFileForS3File(te).sah.getSize()-T;return k.poke64(x,BigInt(U)),0},xLock:function(te,x){const y=E(te);y.log(`xLock ${x}`),y.storeErr();const L=y.getOFileForS3File(te);return L.lockType=x,0},xRead:function(te,x,y,L){const U=E(te);U.storeErr();const K=U.getOFileForS3File(te);U.log(`xRead ${K.path} ${y} @ ${L}`);try{const _e=K.sah.read(k.heap8u().subarray(x,x+y),{at:T+Number(L)});return _e<y?(k.heap8u().fill(0,x+_e,x+y),c.SQLITE_IOERR_SHORT_READ):0}catch(_e){return U.storeErr(_e,c.SQLITE_IOERR)}},xSectorSize:function(te){return Q},xSync:function(te,x){const y=E(te);y.log(`xSync ${x}`),y.storeErr();const L=y.getOFileForS3File(te);try{return L.sah.flush(),0}catch(U){return y.storeErr(U,c.SQLITE_IOERR)}},xTruncate:function(te,x){const y=E(te);y.log(`xTruncate ${x}`),y.storeErr();const L=y.getOFileForS3File(te);try{return L.sah.truncate(T+Number(x)),0}catch(U){return y.storeErr(U,c.SQLITE_IOERR)}},xUnlock:function(te,x){const y=E(te);y.log("xUnlock");const L=y.getOFileForS3File(te);return L.lockType=x,0},xWrite:function(te,x,y,L){const U=E(te);U.storeErr();const K=U.getOFileForS3File(te);U.log(`xWrite ${K.path} ${y} ${L}`);try{const _e=K.sah.write(k.heap8u().subarray(x,x+y),{at:T+Number(L)});return y===_e?0:i("Unknown write() failure.")}catch(_e){return U.storeErr(_e,c.SQLITE_IOERR)}}},A=new c.sqlite3_io_methods;A.$iVersion=1,t.vfs.installVfs({io:{struct:A,methods:p}});const I={xAccess:function(te,x,y,L){const U=O(te);U.storeErr();try{const K=U.getPath(x);k.poke32(L,U.hasFilename(K)?1:0)}catch{k.poke32(L,0)}return 0},xCurrentTime:function(te,x){return k.poke(x,24405875e-1+new Date().getTime()/864e5,"double"),0},xCurrentTimeInt64:function(te,x){return k.poke(x,24405875e-1*864e5+new Date().getTime(),"i64"),0},xDelete:function(te,x,y){const L=O(te);L.log(`xDelete ${k.cstrToJs(x)}`),L.storeErr();try{return L.deletePath(L.getPath(x)),0}catch(U){return L.storeErr(U),c.SQLITE_IOERR_DELETE}},xFullPathname:function(te,x,y,L){return k.cstrncpy(L,x,y)<y?0:c.SQLITE_CANTOPEN},xGetLastError:function(te,x,y){const L=O(te),U=L.popErr();if(L.log(`xGetLastError ${x} e =`,U),U){const K=k.scopedAllocPush();try{const[_e,Ee]=k.scopedAllocCString(U.message,!0);k.cstrncpy(y,_e,x),Ee>x&&k.poke8(y+x-1,0)}catch{return c.SQLITE_NOMEM}finally{k.scopedAllocPop(K)}}return U?U.sqlite3Rc||c.SQLITE_IOERR:0},xOpen:function(x,y,L,U,K){const _e=O(x);try{_e.log(`xOpen ${k.cstrToJs(y)} ${U}`);const Ee=y&&k.peek8(y)?_e.getPath(y):$();let je=_e.getSAHForPath(Ee);!je&&U&c.SQLITE_OPEN_CREATE&&(_e.getFileCount()<_e.getCapacity()?(je=_e.nextAvailableSAH(),_e.setAssociatedPath(je,Ee,U)):i("SAH pool is full. Cannot create file",Ee)),je||i("file not found:",Ee);const Je={path:Ee,flags:U,sah:je};_e.mapS3FileToOFile(L,Je),Je.lockType=c.SQLITE_LOCK_NONE;const kt=new c.sqlite3_file(L);return kt.$pMethods=A.pointer,kt.dispose(),k.poke32(K,U),0}catch(Ee){return _e.storeErr(Ee),c.SQLITE_CANTOPEN}}},re=function(te){t.capi.sqlite3_vfs_find(te)&&o("VFS name is already registered:",te);const x=new c.sqlite3_vfs,y=c.sqlite3_vfs_find(null),L=y?new c.sqlite3_vfs(y):null;return x.$iVersion=2,x.$szOsFile=c.sqlite3_file.structInfo.sizeof,x.$mxPathname=V,x.addOnDispose(x.$zName=k.allocCString(te),()=>ne(x.pointer,0)),L&&(x.$xRandomness=L.$xRandomness,x.$xSleep=L.$xSleep,L.dispose()),!x.$xRandomness&&!I.xRandomness&&(I.xRandomness=function(U,K,_e){const Ee=k.heap8u();let je=0;for(;je<K;++je)Ee[_e+je]=Math.random()*255e3&255;return je}),!x.$xSleep&&!I.xSleep&&(I.xSleep=(U,K)=>0),t.vfs.installVfs({vfs:{struct:x,methods:I}}),x};class be{constructor(x=Object.create(null)){vt(this,pe);en(this,"vfsDir");vt(this,Fe);vt(this,Pe);vt(this,Ue);vt(this,$e,new Map);vt(this,Ye,new Map);vt(this,Ze,new Set);vt(this,mt,new Map);vt(this,ot,new Uint8Array(W));vt(this,z);vt(this,ee);vt(this,se);Ft(this,se,x.verbosity??Z.verbosity),this.vfsName=x.name||Z.name,Ft(this,ee,re(this.vfsName)),ne(xe(this,ee).pointer,this),this.vfsDir=x.directory||"."+this.vfsName,Ft(this,z,new DataView(xe(this,ot).buffer,xe(this,ot).byteOffset)),this.isReady=this.reset(!!(x.clearOnInit??Z.clearOnInit)).then(()=>{if(this.$error)throw this.$error;return this.getCapacity()?Promise.resolve(void 0):this.addCapacity(x.initialCapacity||Z.initialCapacity)})}log(...x){tn(this,pe,rn).call(this,2,...x)}warn(...x){tn(this,pe,rn).call(this,1,...x)}error(...x){tn(this,pe,rn).call(this,0,...x)}getVfs(){return xe(this,ee)}getCapacity(){return xe(this,$e).size}getFileCount(){return xe(this,Ye).size}getFileNames(){const x=[],y=xe(this,Ye).keys();for(const L of y)x.push(L);return x}async addCapacity(x){for(let y=0;y<x;++y){const L=$(),K=await(await xe(this,Pe).getFileHandle(L,{create:!0})).createSyncAccessHandle();xe(this,$e).set(K,L),this.setAssociatedPath(K,"",0)}return this.getCapacity()}async reduceCapacity(x){let y=0;for(const L of Array.from(xe(this,Ze))){if(y===x||this.getFileCount()===this.getCapacity())break;const U=xe(this,$e).get(L);L.close(),await xe(this,Pe).removeEntry(U),xe(this,$e).delete(L),xe(this,Ze).delete(L),++y}return y}releaseAccessHandles(){for(const x of xe(this,$e).keys())x.close();xe(this,$e).clear(),xe(this,Ye).clear(),xe(this,Ze).clear()}async acquireAccessHandles(x){const y=[];for await(const[L,U]of xe(this,Pe))U.kind==="file"&&y.push([L,U]);return Promise.all(y.map(async([L,U])=>{try{const K=await U.createSyncAccessHandle();if(xe(this,$e).set(K,L),x)K.truncate(T),this.setAssociatedPath(K,"",0);else{const _e=this.getAssociatedPath(K);_e?xe(this,Ye).set(_e,K):xe(this,Ze).add(K)}}catch(K){throw this.storeErr(K),this.releaseAccessHandles(),K}}))}getAssociatedPath(x){x.read(xe(this,ot),{at:0});const y=xe(this,z).getUint32(R);if(xe(this,ot)[0]&&(y&c.SQLITE_OPEN_DELETEONCLOSE||(y&P)===0))return h(`Removing file with unexpected flags ${y.toString(16)}`,xe(this,ot)),this.setAssociatedPath(x,"",0),"";const L=new Uint32Array(le/4);x.read(L,{at:Y});const U=this.computeDigest(xe(this,ot));if(L.every((K,_e)=>K===U[_e])){const K=xe(this,ot).findIndex(_e=>_e===0);return K===0&&x.truncate(T),K?G.decode(xe(this,ot).subarray(0,K)):""}else return h("Disassociating file with bad digest."),this.setAssociatedPath(x,"",0),""}setAssociatedPath(x,y,L){const U=C.encodeInto(y,xe(this,ot));V<=U.written+1&&i("Path too long:",y),xe(this,ot).fill(0,U.written,V),xe(this,z).setUint32(R,L);const K=this.computeDigest(xe(this,ot));x.write(xe(this,ot),{at:0}),x.write(K,{at:Y}),x.flush(),y?(xe(this,Ye).set(y,x),xe(this,Ze).delete(x)):(x.truncate(T),xe(this,Ze).add(x))}computeDigest(x){let y=3735928559,L=1103547991;for(const U of x)y=31*y+U*307,L=31*L+U*307;return new Uint32Array([y>>>0,L>>>0])}async reset(x){await this.isReady;let y=await navigator.storage.getDirectory(),L;for(const U of this.vfsDir.split("/"))U&&(L=y,y=await y.getDirectoryHandle(U,{create:!0}));return Ft(this,Fe,y),Ft(this,Ue,L),Ft(this,Pe,await xe(this,Fe).getDirectoryHandle(j,{create:!0})),this.releaseAccessHandles(),this.acquireAccessHandles(x)}getPath(x){return k.isPtr(x)&&(x=k.cstrToJs(x)),(x instanceof URL?x:new URL(x,"file://localhost/")).pathname}deletePath(x){const y=xe(this,Ye).get(x);return y&&(xe(this,Ye).delete(x),this.setAssociatedPath(y,"",0)),!!y}storeErr(x,y){return x&&(x.sqlite3Rc=y||c.SQLITE_IOERR,this.error(x)),this.$error=x,y}popErr(){const x=this.$error;return this.$error=void 0,x}nextAvailableSAH(){const[x]=xe(this,Ze).keys();return x}getOFileForS3File(x){return xe(this,mt).get(x)}mapS3FileToOFile(x,y){y?(xe(this,mt).set(x,y),f(x,this)):(xe(this,mt).delete(x),f(x,!1))}hasFilename(x){return xe(this,Ye).has(x)}getSAHForPath(x){return xe(this,Ye).get(x)}async removeVfs(){if(!xe(this,ee).pointer||!xe(this,Pe))return!1;c.sqlite3_vfs_unregister(xe(this,ee).pointer),xe(this,ee).dispose(),delete l[this.vfsName];try{this.releaseAccessHandles(),await xe(this,Fe).removeEntry(j,{recursive:!0}),Ft(this,Pe,void 0),await xe(this,Ue).removeEntry(xe(this,Fe).name,{recursive:!0}),Ft(this,Fe,Ft(this,Ue,void 0))}catch(x){t.config.error(this.vfsName,"removeVfs() failed:",x)}return!0}exportFile(x){const y=xe(this,Ye).get(x)||i("File not found:",x),L=y.getSize()-T,U=new Uint8Array(L>0?L:0);if(L>0){const K=y.read(U,{at:T});K!=L&&i("Expected to read "+L+" bytes but read "+K+".")}return U}async importDbChunked(x,y){const L=xe(this,Ye).get(x)||this.nextAvailableSAH()||i("No available handles to import to.");L.truncate(0);let U=0,K,_e=!1;try{for(;(K=await y())!==void 0;)K instanceof ArrayBuffer&&(K=new Uint8Array(K)),U===0&&K.byteLength>=15&&(w.affirmDbHeader(K),_e=!0),L.write(K,{at:T+U}),U+=K.byteLength;if((U<512||U%512!==0)&&i("Input size",U,"is not correct for an SQLite database."),!_e){const Ee=new Uint8Array(20);L.read(Ee,{at:0}),w.affirmDbHeader(Ee)}L.write(new Uint8Array([1,1]),{at:T+18})}catch(Ee){throw this.setAssociatedPath(L,"",0),Ee}return this.setAssociatedPath(L,x,c.SQLITE_OPEN_MAIN_DB),U}importDb(x,y){if(y instanceof ArrayBuffer)y=new Uint8Array(y);else if(y instanceof Function)return this.importDbChunked(x,y);const L=xe(this,Ye).get(x)||this.nextAvailableSAH()||i("No available handles to import to."),U=y.byteLength;(U<512||U%512!=0)&&i("Byte array size is invalid for an SQLite db.");const K="SQLite format 3";for(let Ee=0;Ee<K.length;++Ee)K.charCodeAt(Ee)!==y[Ee]&&i("Input does not contain an SQLite database header.");const _e=L.write(y,{at:T});return _e!=U?(this.setAssociatedPath(L,"",0),i("Expected to write "+U+" bytes but wrote "+_e+".")):(L.write(new Uint8Array([1,1]),{at:T+18}),this.setAssociatedPath(L,x,c.SQLITE_OPEN_MAIN_DB)),_e}}Fe=new WeakMap,Pe=new WeakMap,Ue=new WeakMap,$e=new WeakMap,Ye=new WeakMap,Ze=new WeakMap,mt=new WeakMap,ot=new WeakMap,z=new WeakMap,ee=new WeakMap,se=new WeakMap,pe=new WeakSet,rn=function(x,...y){xe(this,se)>x&&ae[x](this.vfsName+":",...y)};class Ae{constructor(x){vt(this,we);Ft(this,we,x),this.vfsName=x.vfsName}async addCapacity(x){return xe(this,we).addCapacity(x)}async reduceCapacity(x){return xe(this,we).reduceCapacity(x)}getCapacity(){return xe(this,we).getCapacity(xe(this,we))}getFileCount(){return xe(this,we).getFileCount()}getFileNames(){return xe(this,we).getFileNames()}async reserveMinimumCapacity(x){const y=xe(this,we).getCapacity();return y<x?xe(this,we).addCapacity(x-y):y}exportFile(x){return xe(this,we).exportFile(x)}importDb(x,y){return xe(this,we).importDb(x,y)}async wipeFiles(){return xe(this,we).reset(!0)}unlink(x){return xe(this,we).deletePath(x)}async removeVfs(){return xe(this,we).removeVfs()}}we=new WeakMap;const Re=async()=>{const te=await navigator.storage.getDirectory(),x=".opfs-sahpool-sync-check-"+$(),U=(await(await te.getFileHandle(x,{create:!0})).createSyncAccessHandle()).close();return await U,await te.removeEntry(x),U!=null&&U.then&&i("The local OPFS API is too old for opfs-sahpool:","it has an async FileSystemSyncAccessHandle.close() method."),!0};t.installOpfsSAHPoolVfs=async function(te=Object.create(null)){var y;te=Object.assign(Object.create(null),Z,te||{});const x=te.name;if(te.$testThrowPhase1)throw te.$testThrowPhase1;if(l[x])try{return await l[x]}catch(L){if(te.forceReinitIfPreviouslyFailed)delete l[x];else throw L}return!globalThis.FileSystemHandle||!globalThis.FileSystemDirectoryHandle||!globalThis.FileSystemFileHandle||!globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle||!((y=navigator==null?void 0:navigator.storage)!=null&&y.getDirectory)?l[x]=Promise.reject(new Error("Missing required OPFS APIs.")):l[x]=Re().then(async function(){if(te.$testThrowPhase2)throw te.$testThrowPhase2;const L=new be(te);return L.isReady.then(async()=>{const U=new Ae(L);if(t.oo1){const K=t.oo1,_e=L.getVfs(),Ee=function(...je){const Je=K.DB.dbCtorHelper.normalizeArgs(...je);Je.vfs=_e.$zName,K.DB.dbCtorHelper.call(this,Je)};Ee.prototype=Object.create(K.DB.prototype),U.OpfsSAHPoolDb=Ee}return L.log("VFS initialized."),U}).catch(async U=>{throw await L.removeVfs().catch(()=>{}),U})}).catch(L=>l[x]=Promise.reject(L))}}),typeof s<"u"){const t=Object.assign(Object.create(null),{exports:typeof q>"u"?s.asm:q,memory:s.wasmMemory},globalThis.sqlite3ApiConfig||{});globalThis.sqlite3ApiConfig=t;let i;try{i=globalThis.sqlite3ApiBootstrap()}catch(o){throw console.error("sqlite3ApiBootstrap() error:",o),o}finally{delete globalThis.sqlite3ApiBootstrap,delete globalThis.sqlite3ApiConfig}s.sqlite3=i}else console.warn("This is not running in an Emscripten module context, so","globalThis.sqlite3ApiBootstrap() is _not_ being called due to lack","of config info for the WASM environment.","It must be called manually.")},a=m,a}})();Tn=function(){var a,s;const n=Tn;if(!n)throw new Error("Expecting globalThis.sqlite3InitModule to be defined by the Emscripten build.");const r=globalThis.sqlite3InitModuleState=Object.assign(Object.create(null),{moduleScript:(a=globalThis==null?void 0:globalThis.document)==null?void 0:a.currentScript,isWorker:typeof WorkerGlobalScope<"u",location:globalThis.location,urlParams:(s=globalThis==null?void 0:globalThis.location)!=null&&s.href?new URL(globalThis.location.href).searchParams:new URLSearchParams});if(r.debugModule=r.urlParams.has("sqlite3.debugModule")?(...u)=>console.warn("sqlite3.debugModule:",...u):()=>{},r.urlParams.has("sqlite3.dir"))r.sqlite3Dir=r.urlParams.get("sqlite3.dir")+"/";else if(r.moduleScript){const u=r.moduleScript.src.split("/");u.pop(),r.sqlite3Dir=u.join("/")+"/"}if(globalThis.sqlite3InitModule=function u(...d){return n(...d).then(m=>{m.runSQLite3PostLoadInit(m);const b=m.sqlite3;b.scriptInfo=r,u.__isUnderTest&&(b.__isUnderTest=!0);const B=b.asyncPostInit;return delete b.asyncPostInit,B()}).catch(m=>{throw console.error("Exception loading sqlite3 module:",m),m})},globalThis.sqlite3InitModule.ready=n.ready,globalThis.sqlite3InitModuleState.moduleScript){const u=globalThis.sqlite3InitModuleState;let d=u.moduleScript.src.split("/");d.pop(),u.scriptDir=d.join("/")+"/"}return r.debugModule("sqlite3InitModuleState =",r),globalThis.sqlite3InitModule}();var Ul=Tn;globalThis.sqlite3Worker1Promiser=function n(r=n.defaultConfig){if(arguments.length===1&&typeof arguments[0]=="function"){const F=r;r=Object.assign(Object.create(null),n.defaultConfig),r.onready=F}else r=Object.assign(Object.create(null),n.defaultConfig,r);const a=Object.create(null),s=function(){},u=r.onerror||s,d=r.debug||s,m=r.generateMessageId?void 0:Object.create(null),b=r.generateMessageId||function(F){return F.type+"#"+(m[F.type]=(m[F.type]||0)+1)},B=(...F)=>{throw new Error(F.join(" "))};r.worker||(r.worker=n.defaultConfig.worker),typeof r.worker=="function"&&(r.worker=r.worker());let X,ie;return r.worker.onmessage=function(F){F=F.data,d("worker1.onmessage",F);let J=a[F.messageId];if(!J){if(F&&F.type==="sqlite3-api"&&F.result==="worker1-ready"){r.onready&&r.onready(ie);return}if(J=a[F.type],J&&J.onrow){J.onrow(F);return}r.onunhandled?r.onunhandled(arguments[0]):u("sqlite3Worker1Promiser() unhandled worker message:",F);return}switch(delete a[F.messageId],F.type){case"error":J.reject(F);return;case"open":X||(X=F.dbId);break;case"close":F.dbId===X&&(X=void 0);break}try{J.resolve(F)}catch(de){J.reject(de)}},ie=function(){let F;arguments.length===1?F=arguments[0]:arguments.length===2?(F=Object.create(null),F.type=arguments[0],F.args=arguments[1],F.dbId=F.args.dbId):B("Invalid arguments for sqlite3Worker1Promiser()-created factory."),!F.dbId&&F.type!=="open"&&(F.dbId=X),F.messageId=b(F),F.departureTime=performance.now();const J=Object.create(null);J.message=F;let de;F.type==="exec"&&F.args&&(typeof F.args.callback=="function"?(de=F.messageId+":row",J.onrow=F.args.callback,F.args.callback=de,a[de]=J):typeof F.args.callback=="string"&&B("exec callback may not be a string when using the Promise interface."));let qe=new Promise(function(ve,ke){J.resolve=ve,J.reject=ke,a[F.messageId]=J,d("Posting",F.type,"message to Worker dbId="+(X||"default")+":",F),r.worker.postMessage(F)});return de&&(qe=qe.finally(()=>delete a[de])),qe}},globalThis.sqlite3Worker1Promiser.defaultConfig={worker:function(){return new Worker(new URL("/teimtrackr/assets/sqlite3-worker1-bundler-friendly-CSke2g1q.js",self.location.href),{type:"module"})},onerror:(...n)=>console.error("worker1 promiser error",...n)},sqlite3Worker1Promiser.v2=(function(n){let r;typeof n=="function"?(r=n,n={}):typeof(n==null?void 0:n.onready)=="function"&&(r=n.onready,delete n.onready);const a=Object.create(null);n=Object.assign(n||Object.create(null),{onready:async function(u){try{r&&await r(u),a.resolve(u)}catch(d){a.reject(d)}}});const s=new Promise(function(u,d){a.resolve=u,a.reject=d});try{this.original(n)}catch(u){a.reject(u)}return s}).bind({original:sqlite3Worker1Promiser}),sqlite3Worker1Promiser.v2,globalThis.sqlite3ApiConfig={warn:Dr};const jl=Ul(),Ml={createSqlite:n=>{const{nanoid:r}=oi(),a=Hl(n),s=new Map,u=F=>{const J=s.get(F.id);J&&(s.delete(F.id),J(F))};let d=[];a.onMessage=F=>{switch(F.type){case"Exec":{d=[...d,F];break}case"ExecError":case"ExecSuccess":{d=d.filter(J=>J.id!==F.id),u(F);break}default:os(F)}};const{promise:m,resolve:b}=Promise.withResolvers(),B=qn(n)("SqliteConnection");navigator.locks.request(B,()=>new Promise(()=>{b(!0)})),m.then(async()=>{const F=await jl,J=await F.installOpfsSAHPoolVfs({name:n.name}),de=new J.OpfsSAHPoolDb("/evolu1.db"),qe=new Map,ve=(ke,Ke)=>{Ca(ke)(()=>{var nt;if(ke.sql===xi.sql){const ye=F.capi.sqlite3_js_db_export(de);return Promise.resolve([{file:ye}])}if((nt=ke.options)!=null&&nt.prepare){let ye=qe.get(ke.sql);if(ye||(ye=de.prepare(ke.sql),qe.set(ke.sql,ye)),ye.bind(ke.parameters??[]),Pa(ke.sql))return ye.stepReset(),Promise.resolve([]);const Ce=[];for(;ye.step();)Ce.push(ye.get({}));return ye.reset(),Promise.resolve(Ce)}return Promise.resolve(de.exec(ke.sql,{returnValue:"resultRows",rowMode:"object",bind:ke.parameters??[]}))}).then(nt=>{a.postMessage({type:"ExecSuccess",id:Ke,result:{rows:nt,changes:de.changes()}})},nt=>{a.postMessage({type:"ExecError",id:Ke,error:Hn(nt)})})};a.onMessage=ke=>{switch(ke.type){case"Exec":ve(ke.query,ke.id);break;case"ExecSuccess":case"ExecError":u(ke);break;default:os(ke)}},d.forEach(ke=>{ve(ke.query,ke.id)}),d=[]});const X=qn(n)("SqliteTransaction");return{exec:F=>{const J=r();return new Promise((de,qe)=>{s.set(J,ve=>{switch(ve.type){case"ExecSuccess":de(ve.result);break;case"ExecError":qe(ve.error);break}}),a.postMessage({type:"Exec",id:J,query:F})})},transaction:F=>async J=>{await navigator.locks.request(X,{mode:F==="last"?"exclusive":F},async()=>{await J(),F==="last"&&await new Promise(Dr)})},export:()=>{const F=r();return new Promise((J,de)=>{s.set(F,qe=>{switch(qe.type){case"ExecSuccess":J(qe.result.rows[0].file);break;case"ExecError":de(qe.error);break}}),a.postMessage({type:"Exec",id:F,query:xi})})}}}},Hl=n=>{const r=qn(n)("SqliteBroadcastChannel"),a=new BroadcastChannel(r),s={postMessage:u=>{a.postMessage(u),s.onMessage(u)},onMessage:Dr};return a.onmessage=u=>{s.onMessage(u.data)},s},xi={sql:"export database",parameters:[]},$l=Al({...vl(),...ii(),...ql,...oi(),...Ml});Bl($l)})();
