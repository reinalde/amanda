class g {
    constructor(e, t) {
        this.finished = !1,
        this.destroyed = !1,
        function(e) {
            if ("function" != typeof e || "function" != typeof e.create)
                throw new Error("Hash should be wrapped by utils.wrapConstructor");
            i(e.outputLen),
            i(e.blockLen)
        }(e);
        const n = f(t);
        if (this.iHash = e.create(),
        "function" != typeof this.iHash.update)
            throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen,
        this.outputLen = this.iHash.outputLen;
        const r = this.blockLen
          , o = new Uint8Array(r);
        o.set(n.length > r ? e.create().update(n).digest() : n);
        for (let i = 0; i < o.length; i++)
            o[i] ^= 54;
        this.iHash.update(o),
        this.oHash = e.create();
        for (let i = 0; i < o.length; i++)
            o[i] ^= 106;
        this.oHash.update(o),
        o.fill(0)
    }
}


const T = h(( () => {}))
, A = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298])
, C = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])
, I = new Uint32Array(64);


// function h(e) {
//     const t = t => e().update(f(t)).digest()
//       , n = e();
//     return t.outputLen = n.outputLen,
//     t.blockLen = n.blockLen,
//     t.create = () => e(),
//     t
// }

const v = (e, t, n) => new g(e,t).update(n).digest();
v.create = (e, t) => new ge(e,t);
const y = (e, t, n) => e & t ^ ~e & n
  , b = (e, t, n) => e & t ^ e & n ^ t & n;

class Oe {
static generate({secret: e, algorithm: t, digits: n, counter: r}) {

const i = ( (e, t, n) => {
            
            return v(r, t, n)
        }
        )(t, e.bytes, (e => {
            const t = new ArrayBuffer(8)
              , n = new Uint8Array(t);
            let r = e;
            for (let i = 7; i >= 0 && 0 !== r; i--)
                n[i] = 255 & r,
                r -= n[i],
                r /= 256;
            return n
        }
        )(r))
          , o = 15 & i[i.byteLength - 1];

}

// generate({counter: e=this.counter++}={}) {

// }
}

Oe.generate({secret: {
"bytes": {
"0": 53,
"1": 53,
"2": 48,
"3": 55,
"4": 49,
"5": 52,
"6": 53,
"7": 56,
"8": 53,
"9": 51,
"10": 52,
"11": 56,
"12": 55,
"13": 52,
"14": 57,
"15": 57,
"16": 53,
"17": 57,
"18": 50,
"19": 50,
"20": 52,
"21": 56,
"22": 54,
"23": 51,
"24": 48,
"25": 51,
"26": 50,
"27": 57,
"28": 51,
"29": 52,
"30": 55
}
}, algorithm: 'SHA1', digits: 6, counter: Math.floor(Date.now() / 1e3 / 30)})