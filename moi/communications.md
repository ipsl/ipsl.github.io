---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
# useTikz: true
---

# Mathematics of Communications

<!-- ## Latency and bandwidth -->

<!-- A big cell tower such as that pictured above is
a critical element of modern communication
infrastructure, as it connects nearby cellular
phones with the backbone telephone and
data networks. -->

In communications and storage, we want the signal we transmit or write to be the same as the signal received or read from the medium. In general, we cannot expect an error-free outcome, since real signals get corrupted by noise. One way of quantifying information loss is to measure how much information is shared between the transmitted and received signals. This measure of shared information is called _mutual information_. Mutual information allows us to determine _capacity_, i.e., the maximum amount of information that can be stored on a flash drive or transmitted via a WiFi link.


## Noise, errors, and channels
Let's start by examining how noise affects the value of digital signals in a storage device and a communication link.
### Flash memory
Conceptually we can think of flash memory as a bunch of buckets, called _cells_, which we fill with electrons to represent 1 or leave empty to represent 0. Electrons, unfortunately, don't always stay where they need to and they may leak out, possibly to a neighboring cell. They are also affected by thermal noise. So in reality we may get a different charge level from the one we put on the cell, which leads to bit flip errors.
<!-- ls -->
<table width="100%">
  <td width="45%"><div align="center"><img src="assets/img/nand-ok.png" width="450px"></div></td>
  <td width="10%">$\xrightarrow{\text{Noise}}$</td>
  <td width="45%"><div align="center"><img src="assets/img/nand-ng.png" width="450px"></div></td>
</table>



<!-- Toshiba TSB3234X68354TWNA1 64GB flash memory in an iPhone (iFixit) -->

<!-- <table class="tabDefault">
<tbody>
  <tr>
  <td class="cell">e ee eee</td>
  <td class="cell"></td>
  <td class="cell"></td>
  <td class="cell">e e e e ee</td>
  <td class="cell">ee ee e e</td>
  <td class="cell"></td>
  <td class="cell">eeeeee</td>
  <td class="cell"></td>
  </tr>
  <tr>
    <td class="binnum">1</td>
    <td class="binnum">0</td>
    <td class="binnum">0</td>
    <td class="binnum">1</td>
    <td class="binnum">1</td>
    <td class="binnum">0</td>
    <td class="binnum">1</td>
    <td class="binnum">0</td>
  </tr>
</tbody>
</table>
 | | | | | | |
 ---|--- |--- | ---| ---| ---| ---|
  e   |      |      |  e   | e    |   e|      |  |               
      |      |      |      |      |    |   e  |  |        
  e   |      |      |  e   | e    |    |      |  |                                             
  e e |      |      |  e e | e e  |    | e e  |  |             
  e e |      |      |  e e | e e  |    | ee   |  |            
  1   |  0   |    0 |  1   |  1   | 0  | 1    | 0|

                                  e
                  e           e e
                            e     e
                  e e       e e e   e
e e       e       e e e e     e ee    e
0     0       0   1    0    1    1    0 -->

### RS-232
For transmission along a wire, we can encode 0 as low voltage and 1 as high voltage. This is used in RS-232. At the other end, we can sample the signal in the middle of each interval. A similar method is used in USB, where the signal is carried by a pair of the wires with opposite voltages (_differential signaling_). Differential signaling is more robust but still susceptible to noise.

<table width="100%">
  <td width="45%"><div align="center"><img src="assets/img/rs232-ok.png" width="450px"></div></td>
  <td width="10%">$\xrightarrow{\text{Noise}}$</td>
  <td width="45%"><div align="center"><img src="assets/img/rs232-ng.png" width="450px"></div></td>
</table>

### Sources of noise
Where does noise come from? A major source of noise is electromagnetic waves, which can interfere with communication and storage devices. Electrical currents and transmitter antennas can create electromagnetic waves. Here are some common sources:
* Power lines
* Motors and electrical appliances (radiating EM waves)
* Fluorescent lights
* Radio, TV, radar transmitters
* Computers, monitors, printers
* Other cell phones, cordless phones

In short, one man's signal is another man's noise. 

### Storage vs communications

The goal of communication is moving information from one location to another, i.e., through space. The goal of storage is typically to carry information in time. Although, storage devices are also used to move data in space (for example, Backblaze allows you to receive your back up on a hard drive instead of downloading it).  



<div class="exercise">
  <button  onclick="showSolution(this,'commStorage')" style="float:right;">Show Solution</button>
  Despite their similarities, there is a significant difference between communication and storage in terms of their reliability requirements. Can you identify it?
  <div id="commStorage" style="display:none;" class="solution">
    Typically, we expect storage devices to be much more reliable than communication links. If a hard drive fails, there may be no way to recover the data, while if a file download fails, it can be requested again.
  </div>
</div>
<br/>

### Communication channels

To avoid discussing both storage and communication, we often only consider communication. The physical process that carries the information-bearing signal is abstracted as a _communication channel_, even when we deal with storage. 

<div align="center"><img src="assets/img/commChannel.svg"></div>

The channel may for example represent a flash drive or a wireless transmitter/receiver pair. 

#### Binary symmetric channel

 For both RS-232 and flash drives, we can model the communication channel as a _binary symmetric channel_ (BSC), i.e., a channel in which errors can flip 0 to 1 and 1 to 0 with a given probability.  Suppose that the input to the channel is $X_1,X_2,\dotsc,X_n$ and the output $Y_1,Y_2,\dotsc,Y_n$. Then, for a channel with probability of error $e$, 

 $$P(X_i\neq Y_i) = e,\qquad P(X_i=Y_i) = 1-e.$$

 for each $i$, independent of others. Graphically, we can show this channel as 

<!-- <script type="text/tikz">
  \begin{tikzpicture}
    \begin{pgfonlayer}{nodelayer}
      \node [style=none] (0) at (-2, 2) {};
      \node [style=none] (1) at (2, 2) {};
      \node [style=none] (3) at (2, -2) {};
      \node [style=none] (4) at (-2, -2) {};
    \end{pgfonlayer}
    \begin{pgfonlayer}{edgelayer}
      \draw [in=135, out=45, loop] (0.center) to ();
      \draw (0.center) to (3.center);
      \draw (4.center) to (1.center);
      \draw (0.center) to (1.center);
      \draw (4.center) to (3.center);
    \end{pgfonlayer}
  \end{tikzpicture}
</script> -->

<center><svg id="bsc" width="600" height="200">
  <defs>
    <marker id="arrowhead" markerWidth="8" markerHeight="8" 
    refX="3" refY="4" orient="auto">
      <polygon points="-4 0, 6 4, -4 8, 3 4" />
    </marker>
  </defs>
<rect x="144" y="5" width="230" height="150" style="fill:#F5F5FF;stroke: #000000"/>
<text x="0" y="75">01011100</text>
<line x1="90" y1="70" x2="140" y2="70" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
<foreignObject x="430" y="60" width="100" height="20">
    <div>
    01<span style="color: red">1</span>1<span style="color: red">0</span>100
    </div>
</foreignObject>
<line x1="375" y1="70" x2="420" y2="70" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
<text x="150" y="35">0</text>
<text x="350" y="35">0</text>
<foreignObject x="230" y="10" width="50" height="20">
    <div>
    \(1 - e\)
    </div>
</foreignObject>
<foreignObject x="230" y="120" width="50" height="20">
    <div>
    \(1 - e\)
    </div>
</foreignObject>
<foreignObject x="180" y="45" width="50" height="20">
    <div>
    \(e\)
    </div>
</foreignObject>
<foreignObject x="180" y="80" width="50" height="20">
    <div>
    \(e\)
    </div>
</foreignObject>
<text x="150" y="130">1</text>
<text x="350" y="130">1</text>
<line x1="165" y1="120" x2="335" y2="40" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
<line x1="165" y1="30" x2="335" y2="110" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
<line x1="165" y1="120" x2="335" y2="120" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
<line x1="165" y1="30" x2="335" y2="30" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)" />
</svg>
</center>
where the message $01011100$ is sent. At the receiver end, two bits are flipped, which are colored in red.

<div class="exercise">
  <button  onclick="showSolution(this,'BSC')" style="float:right;">Show Solution</button>
  Considering a BSC with error probability $e=0.1$, for each of the following cases, find $P(Y_i=1)$, where $1\le i \le n$. Also find and compare $H(X_i)$ and $H(Y_i)$.
  <ul>
    <li>$P(X_i = 1) = 0.75$ </li>
    <li>$P(X_i = 1) = 0.5 $</li>
    <li>$P(X_i = 1) = 1 $</li>
    </ul> 
  <div id="BSC" style="display:none;" class="solution">
    We will only solve the first case. First, $H(X_i) = H_b(0.25) \simeq 0.81$ bits. For $Y_i$,
    \begin{align*}
    P(Y_i = 1) &= P(Y_i=1,X_i=0) + P(Y_i=1,X_i=1) \\
    &= P(X_i=0)P(Y_i=1|X_i=0)+P(X_i=1)P(Y_i=1|X_i=1)\\
    &=0.25\times 0.1+0.75\times 0.9 \\
    &= 0.7,
    \end{align*}
    and $H(Y_i)=H_b(0.7) = 0.61$ bits. Interestingly, $Y_i$ has more information than $X_i$ but part of this information is irrelevant to $X_i$ and thus of no interest.
  </div>
</div>
<br/>

## Error-correction: how we communicate over noisy channels
Even though noise and errors are common, most times when you read data from your computer's hard drive or your phone's SSD, the data is intact. How is this possible? 

To be able to communicate over a noisy channel or store information in a noisy device, we use _error correction_, which enables us to determine the correct sequences of bits that were stored/transmitted even when there are errors. This may seem difficult, even impossible. But the idea is surprisingly simple, and we use it everyday, even when we're not using computers/phones. 

Consider written English, for example. Even though words may be misspelled, we can usually determine the intended words. Misspellings are similar to bit errors. Try reading the following sentences with a bunch of letters missing (being missing is different from being wrong, but it's easier to illustrate):

* “I w-nt t- li-e f-re-er; so fa-, s- g-od!”
* “Th-s -s wh- pe-p-e can rea- my ha-dwr-ti-g!”

Similarly, spell-checkers do a pretty good job correcting spelling errors

How is this possible? There is redundancy in English. Not every letter provides fresh information. In fact, some of them may not even be needed. 

* This redundancy is why we need data compression. If there is no redundancy, there is no need to do data compression (and data compression would not be possible.)
* This redundancy also allows us to correct errors.

So, how can we correct errors when sending digital data? The solution is again to add redundancy. For example, suppose we have 4 bits to send and want to be able to correct up to 1 error. A simple solution is to repeat each bit three times. For example, instead of sending 0100, we send 000111000000. Here, we are sending 12 bits but actually transmitting only 4 bits of information. In other words, out of the 12 bits, 4 bits are _information bits_, and 8 bits are _redundant bits_. Information bits are also called _message bits_. 

<div class="exercise">
  Suppose the coding method repeats each bit three times. If the sequence 111010111111 has been received  and there has been at most 1 bit error, what was the transmitted sequence.
</div>
<br/>

### Codes and code rate
We can view the repetition scheme discussed above as a code. If each bit is repeated 3 times, then the codewords are 

<div align="center"><span class="msgBit">0</span><span class="checkBit">00</span>,&emsp;<span class="msgBit">1</span><span class="checkBit">11</span></div>

transmitted instead of 0 and 1 respectively. This code has 1 _information bit_ or _message bit_, which is shown <span class="msgBit">in this style</span> and is identical to the bit we intend to send, and 2 redundancy bits. Recall that instead of sending just the information bits, we also send the redundancy bits along with them to protect against errors. 

Another example is the _Hamming code_:

<pre align="center">
<span class="msgBit">0000</span><span class="checkBit">000</span>   <span class="msgBit">0001</span><span class="checkBit">111</span>   <span class="msgBit">0110</span><span class="checkBit">110</span>   <span class="msgBit">1011</span><span class="checkBit">010</span>  <br/>
<span class="msgBit">1000</span><span class="checkBit">110</span>   <span class="msgBit">1100</span><span class="checkBit">011</span>   <span class="msgBit">0101</span><span class="checkBit">010</span>   <span class="msgBit">1101</span><span class="checkBit">100</span>  <br/>
<span class="msgBit">0100</span><span class="checkBit">101</span>   <span class="msgBit">1010</span><span class="checkBit">101</span>   <span class="msgBit">0011</span><span class="checkBit">100</span>   <span class="msgBit">1110</span><span class="checkBit">000</span>  <br/>
<span class="msgBit">0010</span><span class="checkBit">011</span>   <span class="msgBit">1001</span><span class="checkBit">001</span>   <span class="msgBit">0111</span><span class="checkBit">001</span>   <span class="msgBit">1111</span><span class="checkBit">111</span>  <br/>
</pre>

So instead of just sending, for example, 0100,  we transmit 0100101. It is unclear at this point how the redundancy bits protect the message bits, but this will be a future topic. We are concerned now with understanding what a code means in the context of error correction.



Repeating each bit 3 times works, but the overhead is large. To quantify this overhead precisely, let us define the _code rate_.

<div class="highlight"> For a given code, the <strong> code rate </strong> is defined as 

$$\text{Code Rate} = \frac{\text{Number of information bits}}{\text{Total number of bits}}.$$

In other words, the code rate is the amount of information that is transmitted for each bit sent through the channel. 

</div>

If each bit is repeated three times, then the code rate is 1/3. That is, each bit actually contains 0.33 bits of information. Note that while the compression ratio is typically larger than 1, the code rate for error-correcting codes is always less than or equal to 1. The code rate of 1/3 for correcting a single bit error is too high, leading to slow communication or expensive data storage. Hamming code can also correct a single error but its rate is 4/7.



For a given error-correction capability, we are after a code with the largest possible code rate. So in this sense, the Hamming code is better that the repetition code with 3 repeats. 

### Probability of incorrect decoding

<div class="exercise">
  <button  onclick="showSolution(this,'codeRateRel')" style="float:right;">Show Solution</button>
  To transmit a single bit, we repeat it $k$ times. For example, if $k=5$, to transmit 1, we send 11111 over the channel. We decode the bits by taking a majority vote. For example, if 11010 is received, we declare 1 was meant but if 01100 is received we declare that a 0 was meant. Assume that the probability of error for each bit is $e=0.1$. 
  <ul>
    <li>If $k=1$, what is the probability of incorrect decoding? Note that in this case, we are just sending the bit, with no repeats.</li>
    <li>If $k=3$, what is the probability of incorrect decoding?</li>
    <li>If $k=5$, what is the probability of incorrect decoding?</li>
  </ul>
  <div id="codeRateRel" style="display:none;" class="solution">
    <ul>
      <li> For $k=1$, an error happens with probability $e=0.1$. </li>
      <li>An error happens when the number of errors is 2 or 3. For example, 000 is transmitted but 101 is received. The probability of such an event is obtained using the binomial distribution
      $$P(2 \text{ errors})+P(3 \text{ errors}) = \binom{3}{2} e^2(1-e)^1 + \binom{3}{3} e^3 = 0.028. $$
      Note that this is significantly smaller than 0.1.
    </li>
      <li>The details of $k=5$ is left as an exercise, but the final probability of incorrect decoding is 0.00856, which is again smaller.</li>
    </ul>
  </div>
</div>
<br/>

Continuing the previous exercise, let us find an expression for the probability of incorrect decoding for general values of $k$ and $e$, assuming $k$ is odd. If the bit is repeated $k$ times, it will be incorrectly decoded if the number of errors is at least $\frac{k+1}2$. This event has probability

$$P\left(\text{at least }\frac{k+1}{2}\text{ errors}\right) = \sum_{i=(k+1)/2}^{k} \binom{k}{i}e^i(1-e)^{k-i}.$$

The plot below shows this probability decreases quickly as $k$ becomes larger. However, there is a trade-off as the code rate also decreases, meaning that we can send less information per transmitted bit (the code rate is $1/k$).

<div align="center"><img src="assets/img/rep_code.svg"></div>

We'll leave further details about codes to later in the course. Now, we are concerned with the fundamental limit of error correction (analogous to the fundamental limit of data compression). 

## Channel capacity
To transmit information over a channel, we can try using a code with any rate. However, if the noise is too high, a code with high rate will be unreliable. The _capacity_ of a channel is the maximum code rate for which reliable communication can be achieved, meaning that the probability of incorrect decoding can be made arbitrary small. 

We can also view capacity as the amount of information we can _reliably_ transmit every time we use the channel. An imperfect analogy is the amount of water that can be carried by a pipe. In this analogy, we can think of noise as holes in the pipe, which reduce the capacity. 

<div class="highlight">
  The <strong>capacity</strong> $C$ of a channel is the largest code rate for which reliable communication is possible.
</div>

Let's choose an arbitrary level to define reliability. I'll choose to call a system reliable if the probability of incorrect decoding is at most $10^{-50}$. If you don't think this is reliable enough, you can choose a smaller number. In any case, if $R<C$, then there exists a code with rate $R$ such that the probability of incorrect decoding is smaller than the reliability level that we have chosen. Finding this code may be a difficult task, but it can be mathematically proven that it exists. So reliable communications with rate $R<C$ is possible, but not if $R>C$.

For a channel with capacity $C$, if we send $N$ bits (use the channel $N$ times), we will be able to have $CN$ bits of information and $(1-C)N$ redundancy bits, added to protect the information bits (recall the encoding method that repeated each symbol three times).

What is the capacity of a BSC with error probability  $e$? If we send $1000$ bits, what is the maximum number of information bits?

* First guess: Suppose $e=0.1$. Out of the 1000 bits, we can expect around $900$ bits to be received correctly so the capacity must be $\frac{900}{1000}=0.9$. Is this argument correct? Is the capacity $1-e$? As the next case shows, the answer is not quite as simple.
* Corner case: Suppose $e=0.5$. In this case, the input and the output of the channel are unrelated to each other. So we cannot transmit any information. But if the capacity is $1-e=0.5$, then we could transmit 500 information bits reliably. So our guess that the capacity is $1-e$ is incorrect.

The key to finding the capacity correctly is related, unsurprisingly, to entropy.

## Joint, conditional entropy and mutual information

### Joint entropy
Recall that the joint entropy of a collection of random variables determines the amount of information contained in all of them together. For two random variables $X$ and $Y$, their joint entropy is 

$$H(X, Y) = E\left[\log{\frac{1}{P(X,Y)}}\right] = \sum_{x, y} P(X=x, Y=y)\log\frac{1}{P(X=x,Y=y)}.$$ 


Suppose $X$ and $Y$ are independent Bernoulli(1/2) random variables and let $Z=X+Y$. 

<div class="exercise">
  Repeat <a href="information_theory.html#twoFairCoins">this exercise</a>.
</div>
<br/>

Recall that the joint entropies for this exercise can be shown as follows.
<table width="100%">
  <td width="50%"><img src="assets/img/HXY.png"  width="300px"></td><td width="50%"><img src="assets/img/HXZ.png" width="270px"></td>
</table>




### Conditional entropy

Let $X,Z$ be random variables. We can compute the entropy of $X$ given that we know $Z=z$ as

$$H(X|Z=z) = \sum_x P(X=x|Z=z)\log \frac{1}{P(X=x|Z=z)}.$$

This represents the amount of information left in $X$ if we know $Z=z$.

<div class="exercise">
  <button  onclick="showSolution(this,'twoFairCoins')" style="float:right;">Show Solution</button>
  Suppose $X$ and $Y$ are independent Bernoulli(1/2) random variables and let $Z=X+Y$. 
  <ul>
    <li>Find $H(X|Z=0)$</li>
    <li>Find $H(X|Z=1)$</li>
    <li>Find $H(X|Z=2)$</li>
  </ul> 
  <div id="twoFairCoins" style="display:none;" class="solution">
    We first find the conditional distribution of $X$ given $Z$
    <div class="tabDefault" markdown="1" align="center">

| $P(X \vert Z)$ | $X=0$ | $X=1$ |
|---|---|---|
|$Z = 0$ |  1 |  0 | 
|$Z = 1$ | $\frac12$ | $\frac12$ |
|$Z = 2$ |  0 |  1 |

</div>
We have 
$$H(X|Z=0) = 1 \log \frac 11 + 0 \log \frac10 = 0,$$
where we have used the fact that in computing entropy $0\log\frac10=0$.
Similarly,
$$H(X|Z=1) = \frac12\log\frac21 + \frac 12\log\frac21 = 1.$$
These show that when $Z=0$, we know $X$ with certainty, so there is no information left. But $Z=1$ does not provide any information about $X$ since $H(X) = H(X|Z=1)$.
The last part is left as an exercise.
  </div>
</div>
<br/>


We can also ask what is the information left in $X$ if we know $Z$ (without specifying a value for $Z$). This is given by the conditional entropy of $X$ given $Z$ defined as 

$$H(X|Z) = \sum_z P(Z=z) H(X|Z=z) = \sum_z P(z) \sum_x P(x|z) \log{\frac1{p(x|z)}}.$$ 


<div class="exercise">
  <button  onclick="showSolution(this,'ZgivenX')" style="float:right;">Show Solution</button>
  With the random variables same as the previous example, show that $H(Z\vert X) = 1$. Compare this with $H(Z)$. What does this say in terms of the information $X$ provides about $Z$. Find $H(Y|X)$ and compare with $H(Y)$.
  <div id="ZgivenX" style="display:none;" class="solution">
  The conditional distribution is given as a hint:

<div class="tabDefault" markdown="1">

| $P(Z \vert X)$ | $Z=0$ | $Z=1$ | $Z=2$ 
|---|---|---|---|
|$X = 0$ | $\frac12$ |  $\frac12$ | 0 |
|$X = 1$ | 0 | $\frac12$ | $\frac12$ |

</div>
  </div>
</div>
<br/>


The relationship between joint and conditional entropies can be written as 

$$H(X,Z) = H(X) + H(Z \vert X) = H(Z) + H(X \vert Z) .$$

That is, the total information in $X$ and $Z$ is equal to the information in $X$ plus the remaining uncertainty about $Z$ when $X$ is known. Note that if two random variables $X$ and $Z$ are independent, then $H(X\vert Z) = H(X)$.


### Mutual Information
For two random variables $X$ and $Y$, conditional entropy provides a way to determine how much information $X$ provides about $Y$. This quantity is called <strong> mutual information</strong> and is defined as

$$I(X;Y) = H(X)-H(X|Y) = H(Y) - H(Y|X).$$ 

Mutual information can be viewed as the relevant information $X$ has about $Y$ (and vice versa) and as the reduction of uncertainty about $X$ due to knowledge of $Y$. Mutual information is symmetric, unlike conditional entropy.

We can show the relationships between $H(X),H(Y),H(X,Y),H(X \vert Y),H(Y \vert X)$, and $I(X;Y)$ graphically as a Venn diagram, similar to how [set operations]({{site.baseurl}}/sets.html#setops) are visualized.

<center><svg width="400" height="200" style="border:1px #000000;">
<circle cx="150" cy="100" r="90" style="fill:rgba(0,256,128,.5);stroke:black"/>
<circle cx="250" cy="100" r="75" style="fill:rgba(256,128,0,.3);stroke:black"/>
<foreignObject x="5" y="30" width="120" height="25"> <div> \(H(X)\) </div> </foreignObject>
<foreignObject x="250" y="20" width="120" height="25"> <div> \(H(Y)\) </div> </foreignObject>
<foreignObject x="55" y="90" width="120" height="25"> <div> \(H(X|Y)\) </div> </foreignObject>
<foreignObject x="135" y="90" width="150" height="25"> <div> \(I(X;Y)\) </div> </foreignObject>
<foreignObject x="210" y="90" width="150" height="25"> <div> \(H(Y|X)\) </div> </foreignObject>
<foreignObject x="120" y="170" width="190" height="25"> <div> \(H(X,Y)\) </div> </foreignObject>
</svg> </center>

If two random variables $X$ and $Y$ are independent, then $I(X;Y) = 0$ since $H(X)=H(X\vert Y)$.

<div class="exercise">
  Suppose $X$ and $Y$ are Bernoulli(1/2) and $Z=X+Y$. Find $I(X;Y), I(X;Z), I(Y;Z).$
</div>
<br/>

The Venn diagrams for the entropies of the previous exercise are given below

<center><svg width="400" height="220" style="border:1px #000000;">
<circle cx="80" cy="100" r="75" style="fill:rgba(0,256,128,.5);stroke:black"/>
<circle cx="250" cy="100" r="75" style="fill:rgba(256,128,0,.3);stroke:black"/>
<foreignObject x="25" y="40" width="120" height="25"> <div> \(H(X) = 1\) </div> </foreignObject>
<foreignObject x="200" y="40" width="120" height="25"> <div> \(H(Y) = 1\) </div> </foreignObject>
<foreignObject x="25" y="90" width="120" height="25"> <div> \(H(X|Y) = 1\) </div> </foreignObject>
<foreignObject x="190" y="90" width="150" height="25"> <div> \(H(Y|X) = 1 \) </div> </foreignObject>
<foreignObject x="90" y="165" width="150" height="25"> <div> \(I(X;Y) = 0\) </div> </foreignObject>
<foreignObject x="90" y="190" width="150" height="25"> <div> \(H(X,Y) = 2\) </div> </foreignObject>
</svg> </center>

<br/><br/>

<center><svg width="400" height="300" style="border:1px #000000;">
<circle cx="150" cy="150" r="75" style="fill:rgba(0,256,128,.5);stroke:black"/>
<circle cx="250" cy="150" r="106" style="fill:rgba(256,128,128,.3);stroke:black"/>
<foreignObject x="55" y="60" width="120" height="25"> <div> \(H(X) = 1\) </div> </foreignObject>
<foreignObject x="180" y="26" width="120" height="25"> <div> \(H(Z) = 1.5\) </div> </foreignObject>
<foreignObject x="50" y="105" width="120" height="90"> <div> $$H(X|Z) \\= 0.5$$ </div> </foreignObject>
<foreignObject x="105" y="90" width="150" height="90"> <div> $$I(X;Z) \\= 0.5$$ </div> </foreignObject>
<foreignObject x="210" y="140" width="150" height="25"> <div> \(H(Z|X) = 1 \) </div> </foreignObject>
<foreignObject x="70" y="230" width="190" height="25"> <div> \(H(X,Z) = 2\) </div> </foreignObject>
</svg> </center>

<!-- TODO: replace above with jsx js script code -->
<!-- TODO: can replace the graph in Quantifying information ...  -->


Entropy and mutual information both represent information. What is the different between them? Mutual information measures relevant information while entropy measures information.
* Noise has high entropy but its mutual information to things that we care about (signals) is 0.
* Other (cynical) examples of low mutual information: ads & reality; social network content & facts, Instagram & real life
<!-- copyright images -->

## The capacity of the binary symmetric channel

Let $Y = X \oplus  E$, where 
* $X$ is a Bernoulli(1/2) RV, indicating the input bit to the channel,
* $E$ is a Bernoulli($e$) RV, indicating the noise,
* $X,E$ are independent,  
* $\oplus$ is addition in $\mathbb F_2$ (the binary _exclusive OR_ operator),
* $Y$ is the channel output.

If $E=1$, then $Y\neq X$. This formulation can model the noise in a [BSC](#bsc) with $e = P(E = 1)$. The larger the value of $e$, the noisier the channel. 

Let us explore how different values of $e$ affect the relationship between the input $X$ and output $Y$ of the channel.

<ul>
  <li markdown=1>$P(E = 1) = 0$. This is the error-free case, where $Y=X$ always. We have $I(X; Y) = H(Y) - H(Y \vert X) = 1 - 0 = 1$. 

</li>
  <li>$P(E = 1) = 0.5.$ This is the completely noisy case, in which $X$ and $Y$ are independent from one another. <br/>
    <div class="exercise">
      <button  onclick="showSolution(this,'halferror')" style="float:right;">Show Solution</button>
      Prove that $X$ and $Y$ are independent and find $I(X;Y)$.
      <div id="halferror" style="display:none;" class="solution">
        We show that $P(Y=y|X=x) = P(Y=y)$.
        $$P(Y = 0|X = 0) = P(E = 0) = 0.5, \quad P(Y = 1|X = 0) = P(E = 1) = 0.5. \\
        P(Y = 0|X = 1) = P(E = 1) = 0.5, \quad P(Y = 1|X = 1) = P(E = 0) = 0.5.$$

To find $P(Y)$, we use the law of total probability,
$$P(Y=0)=P(X=0)P(Y=0 \vert X=0) + P(X=1)P(Y=0 \vert X=1) = 0.5 \times 0.5 + 0.5 \times 0.5 = 0.5.$$ 
This implies that $P(Y=1)=0.5$ as well, proving independence. Since $X$ and $Y$ are independent, $I(X;Y)=0$ and $X$ and $Y$ share no information.
      </div>
    </div>
    <br/>
</li>
  <li>$P(E = 1) = 0.1$. Although the channel is noisy, $Y$ still provides information about $X$ and the mutual information can be shown to be $I(X;Y) = 0.531$ bits.

<div class="exercise">
  <button  onclick="showSolution(this,'.1err')" style="float:right;">Show Solution</button>
  What is the conditional distribution $P(Y=y \vert X=x)$? What is $P(Y=y)$?
  <div id=".1err" style="display:none;" class="solution">
$$P(Y = 0|X = 0) = P(E = 0) = 0.9,\quad P(Y = 1|X = 0) = P(E = 1) = 0.1, \\
P(Y = 0|X = 1) = P(E = 1) = 0.1,\quad P(Y = 1|X = 1) = P(E = 0) = 0.9.$$ 
$$P(Y=0) = P(X=0) P(Y=0\vert X=0) + P(X=1) P(Y=0\vert X=1) =
0.5 \times 0.9 + 0.5 \times 0.1 = 0.5.$$
$$P(Y=1)=0.5.$$ 
  </div>
</div>
<br/>

Clearly, $H(Y)=1$. To find $H(Y|X)$, first note that

$$H(Y|X) = \sum_x P(X=x)H(Y|X=x).$$

But for any given value of $X=x$, $Y$ can take two values with probabilities $e$ and $1-e$, so 

$$H(Y|X=0) = H_b(e),\qquad H(Y|X=1) = H_b(e).$$

So $H(Y|X) = H_b(e)$ and

$$I(X;Y) = H(Y) - H_b(e) = 1 - H_b(e).$$

For $e=0.1$, we have $I(X;Y) = 0.531$ bits.
</li>
</ul>

In summary, we have
* $e = 0.5 \Rightarrow  I (X; Y) = 0 $
* $e = 0.1 \Rightarrow  I (X; Y) = 0.531 $
* $e = 0.0 \Rightarrow  I (X; Y) = 1 $

In which case can we transmit more information? It seems plausible that the higher the mutual information between the input and output, the more information we can transmit.

One way to look at this is as follows: We receive $H(Y)$ bits of information at the output. Out of that, $H(Y\vert X)$ is irrelevant to the input $X$. The relevant information is $I(X;Y) = H(Y) - H(Y \vert X) = 1-H_b(e)$. It turns out the capacity is actually equal to the mutual information:

<div class="highlight"> The capacity of a BSC with probability of bit error $e$ is equal to the mutual information between $X$ and $Y$, when $X$ is Ber(1/2). That is,
$$C = 1-H_b(e).$$
</div>

We will not prove this statement, but as we have seen we can justify it as follows: There is 1 bit of information in $Y$, but $H(Y\vert X) = H_b(e)$ bits of it is irrelevant to $X$. 

The plot for capacity,  $C = 1 - H_b(e) = 1 + e \log{e} + (1-e) \log{(1-e)}$ is given below.



<center><div id="cplot" class="jxgbox" style="width:300px; height:300px;"></div></center>
<script>
JXG.Options.text.useMathJax = true;
var b2 = JXG.JSXGraph.initBoard('cplot', {boundingbox: [-0.2, 1.1, 1.1, -0.2], axis: true, showCopyright: false, showNavigation: false});
b2.create('functiongraph', [function(x){return 1 + x * Math.log2(x) + (1 - x) * Math.log2(1 - x);}, 0, 1], {strokeWidth: 1});
b2.create('text', [-0.15, 0.6, '$$C$$'], {color:'blue', fontSize:18});
b2.create('text', [0.45, -.05, '$$e$$'], {color:'blue', fontSize:18});
</script>

For example, when $e=0.1$, if we send $N=1000$ bits, out of those, we could have $CN=531$ information bits and the rest will be redundancy bits. It is important to note to get close to capacity we need to design appropriate codes, which we have not discussed in any detail. Furthermore, to be able to have $CN$ information bits out of $N$ transmitted bits, $N$ typically must be a large number.

## Mutual information and capacity: the general case
For a general communication channel, not necessarily binary, Shannon showed that the capacity is given as follows.

<div class="highlight">
	<strong> Mathematics of Information Tenet III (Shannon's channel coding theorem)</strong> 
<br/>
 The capacity of a communications channel (or system) is
the maximum mutual information between source and
receiver, $$C = \max_{P(X)} I(X;Y)$$
where the max is over probability distributions for the
input $X$.
</div>

But a peculiar aspect of the above statement is that we need to find some distribution for $X$ that maximizes the mutual information. A poor choice for the distribution of $X$, e.g., $P(X)=1$ leads to suboptimal results. In our discussion for the BSC, we assumed $P(X=1)=P(X=0)=1/2$. The following proof shows that this is the correct choice.

<div class="note" markdown="1">
**Proof of the capacity of BSC (optional)** 

The probabilities of $X$ and $E$ are 

$$X = \begin{cases}
1 & \text{with probability } p \\
0 & \text{with probability } 1 - p \\
\end{cases}\qquad
 E = \begin{cases}
1 & w.p. & e \\
0 & w.p. & 1 - e \\
\end{cases}$$

We furthermore assume $e < \frac{1}{2}$ and $E$ and $X$ are independent.


Let us now find the mutual information as a function of $e$ and $p$:

$$Y = X \oplus E \Rightarrow P( Y ) =  \begin{cases}
1 & w.p. & p( 1 - e ) + ( 1 - p )e \\
0 & w.p. & ( 1 - p )( 1 - e ) + pe \\
\end{cases}$$

<div>\begin{align*}
H( Y ) &= H_{b}( p + e - 2pe ),\\
H( Y \vert X ) &= H( E \oplus X \vert X ) = H( E|X ) = H( E ) = H_{b}(e)\\
I( X; Y ) &= H_{b}( p + e - 2pe ) - H_{b}(e).
\end{align*}</div>

To find the value of $p$ that maximizes the mutual information, we need to maximize the first term as the second term is only a function of $e$. To maximize $H_b(p+e-2pe)$, we note that binary entropy $H_b(q)$ is maximized with $q=1/2$. Hence the maximum is achieved when $p + e - 2pe = e + p( 1 - 2e ) = \frac{1}{2} \Rightarrow p = \frac{1}{2}$.
So $$\max_{p}{I(X;Y)} = \max_{p}( H_{b}( p + e - 2pe ) ) - H_{b}( e ) = 1 - H_{b}(e).$$
</div>


<br/>
<div class="exercise">
  <button  onclick="showSolution(this,'fileCap')" style="float:right;">Show Solution</button>
  A file of size 1 MB (8000000 bits) is to be stored on a flash drive in which the probability of error for each bit is $10^{-6}$. Assuming a code that can achieve capacity, how many flash memory cells are required to store this file?
  <div id="fileCap" style="display:none;" class="solution">
    The capacity is 
    $$C = 1-H_b(10^{-6})=0.9999786\ bits.$$
    We thus have 
    $$8\times 10^6 = CN = 0.9999786 \times N\Rightarrow N = 8000171\ cells.$$
    So we need $171$ bits for error correction. The error rate of flash memory increases with use (writing and erasing data) and with the duration of time it stores data. Of course, as a user you do not need to deal with the error probabilities; the flash memory controller takes care of that.
  </div>
</div>
<br/>





### Finding capacity-achieving codes
Shannon proved the existence of codes whose rate is close to capacity and their probability of a decoding error is  small from a mathematical point of view (and impossible to do any better). But he didn't provide a way of finding them in a practical way. The problem of finding good codes is still an open problem. Finding such codes is the subject of _coding theory_. The following are some of the major advances in this area:
*  Hamming codes (Hamming 1950)
*  LDPC codes (Gallager, 1961)
*  Turbo codes (Berrou, 1993)
*  Polar codes (Arikan, 2009)

We will learn more about codes later.

<!-- Richard Hamming   Robert Gallager
Claude Berrou          Erdal Arkan -->

## Signal to noise ratio (SNR)
Back to probability of error. Capacity is determined by the probability of error. What determines the probability of error and can we influence it? Probability of error depends on the relative power of signal and noise, which is called Signal/Noise Ratio (SNR). How can we characterize noise and its power?


### Noise distributions
Noise is random, so we can't predict it (deterministically). But we can make statistical observations.
Noise takes values from a continuous set, for example the set of real numbers. So its distribution is [represented by a pdf](distributions.html#probability-over-continuous-sets).
Recall: The height of the pdf at $x$ is proportional to how likely values close to $x$ are.
The most common noise distribution is called the Normal or Gaussian distribution. The mean of the noise is usually 0, meaning that the pdf is symmetric around the origin. The variance of the noise determines how likely it is to take on large values. The three graphs below show the pdf of Gaussian noise with mean 0 and variances 1, 0.1, 0.01 from left to right.

<table width="100%">
<td width="33%"><center><div id="box1" class="jxgbox" style="width:300px; height:300px;"></div></center></td>
<td width="33%"><center><div id="box2" class="jxgbox" style="width:300px; height:300px;"></div></center></td>
<td width="33%"><center><div id="box3" class="jxgbox" style="width:300px; height:300px;"></div></center></td>
</table>

<script>
  JXG.Options.text.useMathJax = true;
  var b = 10;
  var b6 = JXG.JSXGraph.initBoard('box1', {boundingbox: [-5, 2, 5, -.2], axis: true, showCopyright: false, showNavigation: false});
  b6.create('functiongraph', [function(x){return Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);},-10,10],{strokeWidth:2});
b6.update();
</script>
<script>
  JXG.Options.text.useMathJax = true;
  var b = 10;
  var sig2 = 0.1;
  var b6 = JXG.JSXGraph.initBoard('box2', {boundingbox: [-5, 2, 5, -.2], axis: true, showCopyright: false, showNavigation: false});
  b6.create('functiongraph', [function(x){return Math.exp(-x*x/2/sig2)/Math.sqrt(2*Math.PI*sig2);},-10,10],{strokeWidth:2});
b6.update();
</script>
<script>
  JXG.Options.text.useMathJax = true;
  var b = 10;
  var sig2 = 0.01;
  var b6 = JXG.JSXGraph.initBoard('box3', {boundingbox: [-5, 2, 5, -.2], axis: true, showCopyright: false, showNavigation: false});
  b6.create('functiongraph', [function(x){return Math.exp(-x*x/2/sig2)/Math.sqrt(2*Math.PI*sig2);},-10,10],{strokeWidth:2});
b6.update();
</script>

While the noise distribution on the left is likely to produce large noise values, say around 1, the one on the right is very unlikely to do so, thus damaging the signal less. The ability of the noise to cause errors is quantified by its power. If the noise is denoted by an RV $W$, then its power is defined as $E[W^2]$, which for zero-mean noise is equal to its variance. So in the figures above the power of the noise for each pdf is 1, 0.1, 0.01, from left to right. 

<!--#### Normal distribution
The distribution is centered around its mean $\mu$ and has a spread determined by its standard deviation $\sigma$.

If we add many independent RVs, the distribution is almost normal. Any quantity that is the sum of many different causes can be approximated as normal.

#### SNR
What determines how harmful noise is?
The _mean_? Not really! The average value of the noise is usually 0.
Even if it isn't, we just subtract the mean from the received signal.
It's the _variability_ of noise that causes error.

How can we measure variability? The variance: $E[(N - \mu)^2] = E[N^2]$, since we assumed $\mu = 0$.
For normal noise $\mathcal{N}(0, \sigma^2)$, $E[N^2] = \int x^2 \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{x^2}{2\sigma^2}} = \sigma^2$.
The integral is analogous to the sum in the discrete case. This is called the **power of the noise**.

<table>
<tbody>
<tr>
  <td><div align="center"><img src="assets/img/snrp1.png" width="400px"></div></td>
  <td><div align="center"><img src="assets/img/snrp2.png" width="400px"></div></td>
</tr>
</tbody>
</table>

The power of the noise is the same.
Will the probability of error also be the same?
No, the average power of signal also matters.
If the signal level is $A$, the power is $A^2$.
Average power is $\frac12$ on the left and $2$ on the right.-->

#### SNR and probability of error

The ratio of the power of the signal to the power of the noise is called the SNR. Assuming that the signal has power equal to 1, the noise distributions given above give SNRs equal to 1, 10, and 100. It is clear from the image below that the higher the value of SNR, the lower the probability of error.

<div align="center"><img src="assets/img/snr110.png" width="800px"></div>


<!--Given estimates for the input signal and noise
power, we can measure the signal-to-noise ratio of
the received signal combining these two:
$$SNR = \frac{singal power}{noise power}$$.
 
<div align="center"><img src="assets/img/snrlog.png" width="500px"></div>

Example: if our signal has amplitudes $0$ and $A$ for $0$ and $1$, its power is $A^2/2$. If our noise has zero mean
and variance $\sigma^2$, then its power is  $\sigma^2$. The SNR is $\frac{A^2}{2\sigma^2}$. The exact relationship depends on the system
(modulation method) but the lower our SNR, the higher the probability of error. -->

## Shannon-Hartley Law
When discussing BSCs, we assumed we can send only two levels, e.g., low and high voltages. While this model works well for many channels, such as flash memory, in general, there is no reason to limit ourselves to two levels only. In practice, we are only limited by the amount of power that we can transmit. If the signal value is given by an RV $X$, its power is given by $E[X^2]$. Power may be limited for different reasons. Your phone has a limited battery, but the power of the cell tower or your WiFi base station is limited mostly to avoid interference with other signals. The power of the Gaussian noise is, as discussed earlier, given by its variance. So we can find the SNR. The capacity of such a communication channel is given by the Shannon-Hartley law, which can be proven using Shannon's channel coding theorem. 


<div class="highlight">
<strong>Mathematics of Information Tenet IV</strong>
<br/>
The capacity of a channel with Gaussian noise per transmission is $C = \frac12 \log_2(1 + SNR)$.
</div>
