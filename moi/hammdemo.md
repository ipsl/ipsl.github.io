---
layout: course-moi 
useECC: true
---
{{page.url}}
<p id="HammingCode"> The 16 permitted 7-bit strings are <br>
0000000,
0001111,
0010011,
0011100,
0100101,
0101010,
0110110,
0111001<br>
1000110,
1001001,
1010101,
1011010,
1100011,
1101100,
1110000,
1111111
</p>


<p>Enter the received vector, with at most one error, and click the "Decode" button to correct at most one error.</p>
<input type="text" id="recStr" value="0000000">
<button onclick="decode()">Decode</button>
<p id="decodedBits"></p>


<script>
function decode(){
  var recStr = document.getElementById("recStr").value;
  errIndx_correctedBits = decodeHamming(recStr);
  var correctedBits = errIndx_correctedBits[1].toString().replace(/,/g,'');
  var recmsg = "??";
  var corrmsg = "??";
  for (let i=0; i<HCS.length; ++i){
    if (HCS[i]==recStr){
      corrmsg = recmsg = "<span style='font-size:30px;'>&#"+msgs[i]+";</span>";
      break;
    }
    if (HCS[i]==correctedBits){
      corrmsg = "<span style='font-size:30px;'>&#"+msgs[i]+";</span>";
    }
  }
  document.getElementById("decodedBits").innerHTML =
     "<table> <thead><tr><th></th><th>Bits</th><th>Message</th></tr> </thead><tr>    <th>Received </th>    <td>"+recStr+"</td><td>"+recmsg+"</td>  </tr>  <tr>    <th>Corrected</th>    <td>"+correctedBits+"</td><td>"+corrmsg+"</td>   </tr></table>"
}
</script>  

<script>
var myTable = "";
myTable = "<table>  <thead>    <tr> <th>Message</th> <th>Bits</th></tr></thead><tbody>";
msgs = ["128025","128024","128009","128011","128018","128021","128039","129409","129423","129426","129427","129430","129413","129419","129417","128037"];
for (let i = 0; i<msgs.length; ++i){
  myTable += "<tr><td><span style='font-size:30px;'>&#" + msgs[i] + ";</span></td><td>" + HCS[i] + "</td></tr>";
}
myTable +=  "</tfoot></table>";

document.getElementById("HammingCode").innerHTML = myTable;
</script>



