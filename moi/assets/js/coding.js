// Contains encoding/decoding, ecc, and linear algebra javascript

function matMult(a, b, mod) { // Multiply matrix a by b. They need to be two dimensional arrays. If mod is , the result is modulo mod
  var m = a.length;
  var k = a[0].length;
  var n = b[0].length;
  var c = new Array(m);
  if (k !== b.length) {
    console.log("Matrix size mismatch");
  }
  for (let i = 0; i < m; i++) {
    c[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      c[i][j] = 0;
      for (let l = 0; l < k; l++) {
        c[i][j] += a[i][l] * b[l][j];
        if (typeof mod !== 'undefined') c[i][j] = c[i][j] % mod;
      }
    }
  }
  return c;
}

function matInnerVec(M, Vec, mod) { // Multiply matrix M by vector Vec. M must be 2D array and Vec must be 1D array. If mod is , the result is modulo mod
  var m = M.length;
  var n = M[0].length;
  var c = new Array(m);
  if (n !== Vec.length) {
    console.log("Size mismatch!");
  }
  for (let i = 0; i < m; i++) {
    c[i] = 0;
    for (let j = 0; j < n; j++) {
      c[i] += M[i][j] * Vec[j];
      if (typeof mod !== 'undefined') c[i] = c[i] % mod;
    }
  }
  return c;
}


function Vec2Mat(a) { // Convert a 1D array to a 2D colum vector (2D array with dimensions n by 1)
  var m = a.length;
  for (let i = 0; i<m; ++i){
    a[i] = [a[i]];
  }
  return a;
}


function findEqCol(mat,vec){ // If vec exists as a column of mat, its index is returned; otherwise undefined  
  found = false;
  for (let j=0; j<mat[0].length; ++j){
    thisColEq = true;
    for (let i = 0; i<mat.length; ++i){
      if (vec[i]!==mat[i][j]){
        thisColEq = false;
	break;  
      }
    }
    if (thisColEq){
      return j;
    }
  }
}


function HammingEncoder(msg){
  checkBits = [0,0,0];
  checkBits[0] = (msg[0] + msg[1] + msg[3]) % 2
  checkBits[1] = (msg[0] + msg[2] + msg[3]) % 2
  checkBits[2] = (msg[1] + msg[2] + msg[3]) % 2
  return ([msg[0], msg[1], msg[2], msg[3], checkBits[0], checkBits[1], checkBits[2]])
}

// Hamming code as strings
var HCS = ["0000000",
"0001111",
"0010011",
"0011100",
"0100101",
"0101010",
"0110110",
"0111001",
"1000110",
"1001001",
"1010101",
"1011010",
"1100011",
"1101100",
"1110000",
"1111111"];


function decodeHamming(recStr) {
  var H = [[1,1,0,1,1,0,0],[1,0,1,1,0,1,0],[0,1,1,1,0,0,1]];
  var recBits = [];
  for (let i = 0; i<recStr.length; ++i) recBits[i]=parseInt(recStr[i],10);
  var correctedBits = recBits;
  let syndrome = matInnerVec(H,recBits,2);
  if (syndrome !== [0,0,0]) {
    var errIndx = findEqCol(H,syndrome);
    correctedBits[errIndx] = 1 - recBits[errIndx]; 
  }
  return [errIndx,correctedBits];
}
 


function encode(seq,map) { // encode the sequence seq by replacing each element using map
  var encoded = '';
  for (var i = 0; i<seq.length; i++) {
    encoded += map[seq[i]];
  }
  return encoded;
}
