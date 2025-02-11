---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
# useTikz: true
---

# Codes, graphs, and algebra


Error-correcting codes are used for reliable communication and storage in the presence of noise and failure. In this section, we will learn about error detection and correction, 
graphs and their relationship to error-correcting codes, distances on graphs, and will also become familiar with some elementary codes based on parity bits and checksum.

## Errors and reliability

Let's start with two examples that again demonstrate the need for error correction.

### Reliable data storage

From 2013 study of a Facebook datacenter:
* Hundreds of thousands of terabytes of data
* Growing at a few thousand terabytes per week
* Composed of thousands of machines storing 24-36 TB each
* Due to hardware failures, an average of 50 machines unavailable at any given time

Amazon, Facebook, Google, Microsoft, etc. continue to expand their datacenters, and these numbers are likely now off by an order of magnitude. How do we deal with this situation? Losing user data is probably the surest way of destroying your company? 


### Reliable communication


It’s even worse when communicating wirelessly. There is a tremendous amount of noise and interference making communication difficult. How can we watch an HD movie when the wireless link is so unreliable? 

### Two types of errors

<div style="float: right;"><img src="assets/img/BSC.png" width="300px"></div>

We have already noted that real world measurements of signals are inherently noisy. If we threshold a digital signal to recover binary digits, the noise can cause random errors in our signal.  This leads to a **substitution** or bit flip error.
* Substitution error: 11001010 $\to$ 110<span style="color: red;">1</span>1010

But there is a second type of error, usually resulting from device failure. Bits stored on flash memory may become inaccessible due to cells failing. If a hard drive fails, the data is lost. These are **erasure** errors; similar to someone erasing your notes. 
* Erasure error: 11001010 $\to$ 110<span style="color: red;">?</span>1010

The difference between substitutions and erasures is that when a substitution occurs we don't know which bits are affected. So correcting substitutions is more difficult.


## The basics of error control

### Error detection and correction

To deal with errors, we have multiple tools at our disposal. These tools can be used to detect, and sometimes correct, bit errors.
* **Error detection:** we can determine correctly (with high probability) whether or not a signal contains an error (or multiple errors).
* **Error correction:** we can determine correctly (with high probability) the intended or corrected signal bits, in the presence of one or more errors.

Together, error detection and correction are sometimes referred to as **error control**. 

Since noise is random, we can only provide probabilistic guarantees for these methods, instead of strict, deterministic ones. More about that later…


### The basic idea

We have seen before that English, as well as any other language, have error-correction capability, enabling spell check and autocorrect. But how do these work? We can find the answer by asking a related question: Why isn't it possible to spell check/autocorrect email addresses? An email address can be any string of letters but not every sequence of letters is a word. 

When autocorrect sees a sequence of letters that is not a word, it has two possible choices:

* Error-correction: Replace it with a word that is close to it: teh → the, cancelled → canceled
* Error-detection: Indicate it as an error: <span style="text-decoration:underline; text-decoration-color: red; text-decoration-style:wavy;"> thas</span>


Same idea can be used for correcting bit errors

<div class="highlight">
<strong> Fundamental Tenet V:</strong>

<p>Correcting and detecting transmission and storage errors requires restricting the set of possible words (e.g., binary sequences).</p>
</div>

<br/>
<div class="example" markdown=1>
**Even parity.** Suppose we can send 3-bits. We decide that only 3-bit words that have an even number of ones are allowed: {000,011,101,110}

Which errors can be detected? 
* Any single bit flip.

Which errors can be corrected accurately? 
* We can't correct any errors with confidence. For example, if we receive $010$, there are three possible sequences that only differ in a single bit. The situation is similar to autocorrecting 'thas'. It could be 'this', 'that', or 'thus'.
</div>
<br>

<div class="exercise">
  <button  onclick="showSolution(this,'evenPar')" style="float:right;">Show Solution</button>
  Suppose only 4-bit sequences with an even number of 1s are allowed. List all permitted binary sequences. <p>If $1011$ is received, and assuming there is at most 1 error, what could be transmitted?</p>
  <div id="evenPar" style="display:none;" class="solution">
    Possible sequences are:
    $$\{0000,0011,0101,0110,1001,1010,1100,1111\}.$$

    <p> If 1011 is received, these could have been sent: 0011, 1111, 1001, 1010, all of whom have even parity.</p>
  </div>
</div>
<br/>


<div class="exercise">
  Suppose that the set of permitted binary sequences is ${000,001,010,011}$. Which errors can be corrected? Which errors can be detected? (Hints: The capability may depend on the position of the error. Also, this isn't a well designed code.)
</div>
<br/>


### Codes, encoding, and decoding

We said that to correct errors, we need to restrict the set of words (English words, binary sequences, ...), so that when an error happens, we are likely to find out. This restricted set of messages is called a _code_. The message is what we need to transmit or store. But instead of sending the actual message, we send a codeword corresponding to that message. While the message can be anything, codewords are from a restricted set, allowing us to detect or correct errors that occur in transmission.   

Let's make our terminology a bit more precise. For each definition, we provide an instance from the 3-bit even-parity code from above and also from English.



<table class="tabDefault" style="float:right;">
  <caption>Encoding Table</caption>
  <thead>
    <tr>
      <th>Message</th>
      <th>Codeword</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>00</td>
      <td>000</td>
    </tr>
    <tr>
      <td>01</td>
      <td>011</td>
    </tr>
    <tr>
      <td>10</td>
      <td>101</td>
    </tr>
    <tr>
      <td>11</td>
      <td>110</td>
    </tr>
  </tbody>
</table>


* **Code:** the set of permitted words
  * For 3-bit even parity, the code is {000,011,101,110}
  * The equivalent in English is the set of entries in the _Dictionary_
* **Codeword:** Each of the permitted words
  * 011 is a codeword in our example
  * The equivalent in English is a _word_, e.g., apple
* **Message:** This is what you need to send/store
  * A number of bits (e.g., part of the contents of a file). In our example, each message consists of two bits.
  * Equivalent to objects/concepts/ideas in English that you want to convey: e.g., 🍎
<table class="tabDefault" style="float: right;">
  <caption>Decoding Table</caption>
  <thead>
    <tr>
      <th>Received word</th>
      <th>Decoded message</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>000</td>
      <td>00</td>
    </tr>
    <tr>
      <td>001</td>
      <td>Error</td>
    </tr>
    <tr>
      <td>010</td>
      <td>Error</td>
    </tr>
    <tr>
      <td>011</td>
      <td>01</td>
    </tr>
    <tr>
      <td>100</td>
      <td>Error</td>
    </tr>
    <tr>
      <td>101</td>
      <td>10</td>
    </tr>
    <tr>
      <td>110</td>
      <td>11</td>
    </tr>
    <tr>
      <td>111</td>
      <td>Error</td>
    </tr>
  </tbody>
</table>
* **Encoding:** mapping message bits to codewords
  * Example: see right table
  * Equivalent to _mapping ideas to words_: 🍎 → apple
* **Decoding:** mapping received bits to message
  * Example: see table
  * Equivalent to mapping what we read to ideas: aaple → 🍎 

Let's compare using the even-parity code with using no coding at all. 
With no coding, if send 00 and 01 is received due to a bit flip, there is no way for the receiver to detect this. But if we use the even parity code with encoding table above and transmit 000, a bit flip may lead to 010. But as shown in the decoding table, this error can be detected.

The **length of the codes** is the number of bits in each codeword. The number of _information bits_ or _message bits_ are the number of bits in each message. For our 3-bit even parity code, the code length is 3 and the number of message bits is 2. The remaining bits are _redundancy bits_.  We have the following equality

$$\text{Number of codewords} = 2^{\text{Number of message bits}}.$$


## Graphs and distance


Graphs are a good way to visualize ideas about error control, especially "similarity" between codewords.

A _graph_ $𝐺=(𝑉,𝐸)$ consists of a set of vertices $V$ and a set of edges $E$, where each element of $E$ represents a specific relationship between two vertices. Two vertices with an edge between them are called _adjacent_.

**Examples:**
<ul>
<li> A graph representing friendships among students



<pre>
                         Alice --------------- Bob
                           |                    \                  
                           |                     \     
                           |                      \ 
                           |                       \ 
                           |                        \ 
                           |                         \ 
                         Charlie ------Dave---------Eve
</pre>
Here, Alice and Bob are friends but Alice and Eve aren't as there is no edge between Alice and Eve.</li>


<li> A graph of 3-bit words, with edges between those that differ in one position. More specifically, consider the set of binary sequences of length 3:
$$\{000,001,010,011,100,101,110,111\}$$
These are the vertices of the graph. There is an edge between two sequences if they only differ in one bit, e.g., 010 and 110
<div align="middle"><img src="assets/img/gc_cube.png" width="300px"></div>
</li>
</ul>

### Distance

The _distance between two nodes_ in a graph is the number of edges on the shortest path between them

<table width="100%">
	<td width="40%"  align="center"> <img src="assets/img/gc_distance_graph.png" width="250px"></td>
	<td width="50%">
<table class="tabDefault">
  <thead>
    <tr> <th>Distance</th> <th>$a$</th> <th>$b$</th> <th>$c$</th> <th>$d$</th> <th>$e$</th> </tr>
  </thead>
  <tbody>
    <tr> <th width="8%">$a$</th> <td>0</td> <td>1</td> <td>&nbsp;</td> <td>2</td> <td>&nbsp;</td> </tr>
    <tr> <th>$b$</th> <td>1</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr>
    <tr> <th>$c$</th> <td>&nbsp;</td> <td>&nbsp;</td> <td>0</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr>
    <tr> <th>$d$</th> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr>
    <tr> <th>$e$</th> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr>
  </tbody>
</table>
		</td>
</table>

<br>

<div class="exercise">
Complete the table above.
</div>
<br/>



### Hamming distance

<div style="float:right;"> <img src="assets/img/gc_hamming_cube_dist.png" width="200px"></div>

The Hamming distance between two words is the number of positions in which they are different. In other words, it is the number of bits that you need to flip to convert one binary sequence to the other. 

$$𝑑_𝐻 (000,101)=2$$


This coincides with the distance over the graph. This is because flipping one bit allows you to move along one edge, forming a path. For example, to convert 000 to 101 you can first flip the first bit, getting to 100 and then flip the last bit, getting 101.

<div class="exercise">
  <button  onclick="showSolution(this,'HammingDistance')" style="float:right;">Show Solution</button>
  Find the Hamming distance for each pair of sequences below:
  <ul>
    <li>$d_H(00000000,11111111)$</li>
    <li>$d_H(01010101,10101010)$</li>
    <li>$d_H(01001111,01010000)$</li>
  </ul>
  <div id="HammingDistance" style="display:none;" class="solution">
    8, 8, 5.
  </div>
</div>
<br/>

<div class="exercise">
  <button  onclick="showSolution(this,'expectedHdist')" style="float:right;">Show Solution</button>
  Two binary sequences of length $5$ are chosen at random. What is the expected Hamming distance between them?
  <div id="expectedHdist" style="display:none;" class="solution">
    Let $X_i$ be a random variable defined as follows:
    \begin{align*}
     X_i = \begin{cases}0, &\text{if the }i\text{th bits in the two sequences are equal} \\
     1, &\text{if the }i\text{th bits in the two sequences are different} 
     \end{cases}
      \end{align*}
      So 
    \begin{align*}
     X_i &= \begin{cases}0, &\text{with probability } 1/2 \\
     1, &\text{with probability }1/2 
     \end{cases}\\
     E[X_i] &= 1/2.
      \end{align*}
      Then the distance is $X_1+X_2+X_3+X_4+X_5$ and the expected distance is $E[X_1+X_2+X_3+X_4+X_5]=2.5$.
  </div>
</div>
<br/>
<br><br><br>


## A few simple codes

<div style="float:right;"><img src="assets/img/gc_even_parity.png" width="200px"></div>
We now discuss a few simple binary codes. We visualize these codes as graphs, which will help us better understand their error-detection and/or error-correction capabilities. When representing a binary code as a graph, we should indicate which of the vertices/sequences are codewords. The graph for the 3-bit even-parity code is given on the right. The codewords of this code are

$$\{000,011,101,110\},$$

which are shown with a blue color.
<br>



<div style="float:right;"><img src="assets/img/gc_DRC.png" width="200px"></div>
<strong>Double redundancy code</strong>

Let’s consider first the simple case of detecting an error via double redundancy.
* Encoding: <span class="answer">𝑥→𝑥𝑥</span>
* Decoding: <span class="answer">𝑥𝑥→𝑥, 01→error, 10→error</span>
* How many message bits can we send each time?      <span class="answer">  1 </span>
* How many errors can we detect reliably?       <span class="answer">  1</span>
* How many errors can we correct reliably?      <span class="answer"> 0 </span>
* What is the smallest distance between any two codewords?      <span class="answer"> 2 </span>
<br>
<br>



<div style="float:right;"><img src="assets/img/gc_even_parity.png" width="200px"></div><div class="exercise"> <strong>The even-parity redundancy code</strong><button  onclick="showSolution(this,['evePar-0','evePar-1','evePar-2','evePar-3','evePar-4','evePar-5'])" style="float:right;">Show solution</button>

<p>Only allowed to send 3-bit words that have an even number of 1s</p>
<ul>
  <li>Encoding: <span id="evePar-0" style="visibility:hidden;" class="answer"> 00→000, 01→011, …</span></li>
  <li>Decoding: <span id="evePar-1" style="visibility:hidden;" class="answer"> 000→00, 001→error , …</span></li>
  <li>How many message bits can we send each time?<span id="evePar-2" style="visibility:hidden;" class="answer"> 2</span></li>
  <li>How many errors can we detect reliably?<span id="evePar-3" style="visibility:hidden;" class="answer"> 1</span></li>
  <li>How many errors can we correct reliably?<span id="evePar-4" style="visibility:hidden;" class="answer"> 0</span></li>
  <li>What is the smallest distance between any two codewords?<span id="evePar-5" style="visibility:hidden;" class="answer"> 2</span></li>
</ul>
</div>



<br>

<div style="float:right;"><img src="assets/img/gc_TRC.png" width="200px"></div><div class="exercise"> <strong>The triple redundancy code</strong><button  onclick="showSolution(this,['3red-0','3red-1','3red-2','3red-3','3red-4','3red-5'])" style="float:right;">Show solution</button>

<p>Repeat each bit twice! For decoding, detect but do not try to correct!</p>
<ul>
  <li>Encoding: <span id="3red-0" style="visibility:hidden;" class="answer"> 0→000, 1→111</span></li>
  <li>Decoding: <span id="3red-1" style="visibility:hidden;" class="answer"> 000→0, 001→error , …</span></li>
  <li>How many message bits can we send each time?<span id="3red-2" style="visibility:hidden;" class="answer"> 1</span></li>
  <li>How many errors can we detect reliably?<span id="3red-3" style="visibility:hidden;" class="answer"> 2</span></li>
  <li>How many errors can we correct reliably?<span id="3red-4" style="visibility:hidden;" class="answer"> 0</span></li>
  <li>What is the smallest distance between any two codewords?<span id="3red-5" style="visibility:hidden;" class="answer"> 3</span></li>
</ul>
</div>



<br>

The same code can behave differently depending on the decoding strategy. The example below illustrates this fact.
<div style="float:right;"><img src="assets/img/gc_TRC.png" width="200px"></div><div class="exercise"> <strong>The triple redundancy code</strong><button  onclick="showSolution(this,['3red2-0','3red2-1','3red2-2','3red2-3','3red2-4','3red2-5'])" style="float:right;">Show solution</button>

<p>Repeat each bit twice! For decoding, find the closest valid codeword!</p>
<ul>
  <li>Encoding: <span id="3red2-0" style="visibility:hidden;" class="answer"> 0→000, 1→111</span></li>
  <li>Decoding: <span id="3red2-1" style="visibility:hidden;" class="answer"> 000→0, 001→000, …</span></li>
  <li>How many message bits can we send each time?<span id="3red2-2" style="visibility:hidden;" class="answer"> 1</span></li>
  <li>How many errors can we detect reliably?<span id="3red2-3" style="visibility:hidden;" class="answer"> 1</span></li>
  <li>How many errors can we correct reliably?<span id="3red2-4" style="visibility:hidden;" class="answer"> 1</span></li>
  <li>What is the smallest distance between any two codewords?<span id="3red2-5" style="visibility:hidden;" class="answer"> 3</span></li>
</ul>
</div>

## Decoding and errors

### Decoding strategy
As we saw with the triple redundancy code, when an invalid word is received, we have a couple of choices:

* Minimum distance decoding: find the closest valid codeword and then identify its corresponding message.
* Declare error

The first method allows correcting errors but it increases the probability that an error is corrected in the wrong way. For example, suppose in the triple redundancy code we receive 010 when 111 was sent. Minimum distance decoding will output 000 which is incorrect.

The graphs below show the possibilities when different strategies can be used for different received words:

<table width="100%">
<td><img src="assets/img/gc_error_detection.png" width="300px"></td>
<td><img src="assets/img/gc_error_correction.png" width="200px"></td>
<td><img src="assets/img/gc_error_mixed.png" width="200px"></td>
</table>

<div class="exercise">
Which strategy is more appropriate for communications and which one for storage?
</div>
<br/>

### Minimum distance and errors 



The minimum distance of a code is the smallest distance between codewords. The minimum distances of the even-parity code, the double redundancy code, and the triple redundancy code are 2, 2, and 3, respectively.

To detect $s$ errors, what should the minimum distance be?
* Need $d \geq s + 1$

<img src="assets/img/gc_error_detection.png" width="300px">



To correct $t$ errors, what should the minimum distance be?
* Need min distance $d \geq 2t + 1$

<img src="assets/img/gc_error_correction.png" width="300px">


<div class="highlight">
<strong>Fundamental Tenet VI:</strong>
<p>A Hamming distance (between codewords) of $s+1$ is needed to detect $s$ errors per word, and a Hamming distance of $2t+1$ is needed to correct $t$ errors per word.</p>
</div>



### Erasure errors

So far we have mostly discussed bit flip errors, where it is not known which bits may be erroneous. But sometimes we may know which bits are unreliable or inaccessible: 01010001→010?0?01
* A hard drive may fail,
* A letter in a word may be smudged
* Communication channel is momentarily obstructed

<div class="highlight">
<strong>Fundamental Tenet VII:</strong>
<p>A Hamming distance (between codewords) of $u+1$ is needed to correct $u$ erasure errors.</p>
</div>

<br>

<div class="exercise">
  <button  onclick="showSolution(this,'erasure')" style="float:right;">Show Solution</button>
  Let $c_1=10111000,c_2=11011011$ be codewords. For each $z_i$ below, determine whether it may result by erasing symbols from $c_1$ or $c_2$.
<ul>
  <li>$𝑧_1=10??10?0$</li>
  <li>$𝑧_2=1?1110??$</li>
  <li>$𝑧_3=1?0??011$</li>
  <li>$𝑧_4=1??110??$</li>
</ul>
  <div id="erasure" style="display:none;" class="solution">
    The positions that are not erased should match. So $z_1$ can be obtained from $c_1$ but not $c_2$.
  </div>
</div>
<br/>



A simple strategy can be used to recover data when a drive fails: We Store the bits of each codeword on different drives. An example with even-parity code is shown below.
Example: even parity 
<table class="tabDefault">
    <tr> <td>Disk 1</td> <td>$x_i$</td> <td>01011101111100100001…</td> </tr>
    <tr> <td>Disk 2</td> <td>$y_i$</td> <td>01111110010001110010…</td> </tr>
    <tr> <td>Disk 3</td> <td>$z_i = x_i+y_i$</td> <td>00100011101101010011…</td> </tr>
</table>






### The codes we have seen so far
Let us review all the codes that we have seen so far. Before doing so, let us also define the **Code rate**. The code rate is the number of message bits divided by the code length (number transmitted bits).

Example: the number of message bits in the 3-bit even-parity code is 2
* The rate is 2/3 = 0.66

Typically, when the code rate is high, the ability to correct error is low. (But there are also poorly designed codewords that have both low rate and low ability to correct errors.)

{:.tabDefault}
Code | Graph |Min distance | Rate | Error detection | Error correction
---|----|----|----|----|----
Double redundancy | <img src="assets/img/gc_DRC.png" width="120px">    | 2 | 1/2 | 1 | 0
Even parity |  <img src="assets/img/gc_even_parity.png" width="120px"> | 2 | 2/3 | 1 | 0
Triple redundancy<br> (Declare error for invalid words)| <img src="assets/img/gc_TRC.png" width="120px">    | 3 | 1/3 | 2 | 0
Triple redundancy<br> (Minimum distance decoding) | <img src="assets/img/gc_TRC.png" width="120px">    | 3 | 1/3 | 1 | 1

<br>
<div align="right"> These codes are not very impressive ... 😒. We'll learn how to do a better job!</div>


## Probability of error


Let the transmitted codeword be denoted by $x$ and the result of decoding be denoted by $y$. Three cases are possible:
* __Correct decoding__ ($x=y$): This is the desired outcome. Either no error has occurred or all errors have been corrected.
* __Errors detected but not corrected__ ($y=$ 'error'): The decoder may declare an error if it detects an error but is unable to correct it.
* __Undetected error__ ($x\neq y$): Errors have not been corrected, leading to erroneous data. 

When there is no coding, all errors will be undetected and the second event above does not occur. 

We should also note that given that things can go wrong in multiple ways, the term 'probability of error' is ambiguous. It may refer to the raw bit error rate, i.e., the probability of each bit being flipped by the channel. It may also refer to the probability of the 'undetected error' event described above. 

From a probabilistic point of view, the error-correcting capability of a code is determined by the probabilities of the three events above. We want the probability of correct decoding to be close to 1.




### The double redundancy code
<div style="float:right;">  <img src="assets/img/gc_DRC.png" width="200px">  </div>

Let the bit error probability be denoted by $e$, and suppose bit errors are symmetric and independent of each other (the BSC model). Let’s analyze the error probabilities for the double redundancy code. We consider the number of errors and then determine the decoding event they correspond to. The binomial distribution will be of use here.
* $P($no errors$) = (1-e)^2 = 1-2e+e^2$. No errors, leading to 'correct decoding'.
* $P($1 error$) = \binom{2}{1}(1-e)e = 2e-2e^2$. One error, and we detect it but not correct it, so we’re sort of good: 'detected but not corrected error'.
* $P($2 errors$) = e^2$. Two errors, and we don’t detect them, so we’re not good. 'Undetected errors'.

So the probabilities are:
* P(correct) = P(no errors)$ = (1-e)^2$.
* P(detected but not corrected error) $= 2e(1-e).$
* P(undetected error) = P(2 errors) $= e^2.$


How does this compare to no coding?
* P(correct) $= (1-e)$.
* P(undetected error) $=e$.

With no coding the probability of an undetected error is $e$, which is (much) larger than $e^2$. For example, if $e=0.1$, then $e^2 = 0.01$.

<div class="exercise">
  <button  onclick="showSolution(this,'10bit2red')" style="float:right;">Show Solution</button>
Suppose we need to send a message with 10 bits. Assume the channel error probability is 0.1. What is the probability of at least one undetected error if we
<ul>
  <li>use no coding.</li>
  <li>use the double redundancy code.</li>
</ul>

  <div id="10bit2red" style="display:none;" class="solution">
    
When we don't do any coding, the probability of no error is $(1-0.1)^{10} = 0.349$. So 

$$P(\text{at least one error with no coding}) = 1 - (1-0.1)^{10} = 0.651.$$

Double redundancy has two bits for each message bit. For a pair of bits, the only way that the error is undetected is if they are both incorrect, which happens with probability $0.1^2=0.01$. So with probability $0.01$ each 2-bit block is free of any undetected error. And with probability $0.99^{10}=0.904$, the whole sequence is free of any undetected error. So 

$$P(\text{at least one undetected error with double redundancy})=1-0.99^{10} = 0.096.$$
  </div>
</div>
<br/>

The cost of the transmission (time/energy) is doubled but undetected errors become much more unlikely.



### The triple redundancy code

Consider the triple-redundancy code with minimum distance decoding:
* P(no error) = $(1−𝑒)^3 = 1−3𝑒+3𝑒^2−𝑒^3$. $\to$ Correct decoding.
* P(1 error) = $3(1−𝑒)^2𝑒 = 3𝑒−6𝑒^2+3𝑒^3$. Error correctly detected and corrected. $\to$ Correct decoding.
* P(2 errors) = $3(1−𝑒)𝑒^2 = 3𝑒^2 – 3𝑒^3$. Errors not corrected properly (majority rule flips bit).
* P(3 errors) = $𝑒^3$. Errors not detected (bit remains flipped).

So the probability that triple redundancy fails to produce the transmitted sequence is  

$$3𝑒^2−2𝑒^3$$

How does this compare to the double/ no redundancy codes? For the double-redundancy code, the probability of undetected error is $e^2$ and with no coding, the probability of error is $e$. 

We can use the same scheme to detect two-bit errors if we don’t bother correcting. With the decoding rule that rejects any sequence other than 000 or 111, the probability of an undetected error for the triple-redundancy code is $e^3$.


<div class="exercise">
  <button  onclick="showSolution(this,'10bit3red')" style="float:right;">Show Solution</button>
  A 10-bit message is to be sent over a channel with bit error probability $e=0.1$. What is the probability of at least one undetected error if we use a triple redundancy code with minimum distance decoding?
  <div id="10bit3red" style="display:none;" class="solution">
    The probability of correctly decoding one codeword is $1-3e^2+2e^3$. The probability of correctly decoding all codewords is
    $$(1-3e^2+2e^3)^{10} \simeq (1-3e^2)^{10} = 0.97^{10} \simeq 0.74.$$
    So the probability of one undetected error is at least $1-0.74=0.26$.
  </div>
</div>
<br/>

In the previous example, if we send $n$ bits, the probability of correctly decoding is $0.97^n$. Observe as the message size grows or error probability increases, more redundancy may be needed to mitigate more errors.


$$0.97^n \to 0 \text{ as } n\to \infty $$




## Better codes

The triple redundancy code can only guarantee correcting 1 error. What if we need to correct more errors? Can we do better?

Yes! We need to find codes in which words are farther apart.

But then the codes will have to be longer, making it more difficult to deal with them with the tools that we have. For example, the number of nodes in a graph will get very large

Need more powerful mathematics:
* Finite fields
* Linear algebra

You may be familiar with linear algebra over real numbers. Here we will deal with linear algebra over finite fields.



### Finite fields


Recall that a field is a set in which we can do elementary computation 

* Add, subtract, multiply, divide (except divide by 0)

We have seen examples of infinite fields:
* Rational numbers, Real numbers, Complex numbers

For error correction, we deal with finite fields. 

The simplest example of a finite field is $\mathbb F_p$, where $p$ is a prime number:
* The elements of $\mathbb F_p$ are $$\{0,1,2,\cdots,p\}$$
* Arithmetic is performed modulo $p$: if the results is $\geq p$, replace it with remainder by $p$
* We can show the rules with $\oplus$ and $\otimes$ tables

Fields with $p^m$ elements, where $p$ is a prime number and $m$ is a natural number also exist. But no other finite field exists. For example, there is no field of size 6.

#### Finite fields and error correction

Computers work with binary so the natural field is $$\mathbb{F}_2$$. But working with $$\mathbb{F}_2$$ is somewhat restrictive,
 given that it has only two elements. This makes designing binary codes directly difficult. Fortunately, fields of size $2^m$ exist for any $m$. These are used in practice to design codes and then map them to binary. 
Unfortunately, they are more complex than prime fields like $$\mathbb{F}_2, \mathbb{F}_3, \cdots$$, so we’ll avoid them. To get an idea of how $$\mathbb{F}_{2^m}$$ can be used for ECC, we’ll occasionally see examples with $$\mathbb{F}_p, p>2$$, with the understanding that these are not common in practice.

<!--
#### Back to $𝐹_2$ 

For the most part we will limit our attention to 𝐹_2

<div class="row">
<div class="column">
<table cellpadding="15px" style="border-collapse:collapse;float:left;" class="tabDefault">
<thead> <tr> <th>\(\oplus\)</th> <th>0</th> <th>1</th> </tr> </thead>
<tbody> 
	<tr> <th>0</th> <td>0</td> <td>1</td> </tr>
	<tr> <th>1</th> <td>1</td> <td>0</td> </tr>
</tbody>
</table>
</div>
<div class="column">
<table cellpadding="15px" style="border-collapse:collapse;padding:100px;" class="tabDefault">
<thead>
  <tr> <th>\(\otimes\)</th> <th>0</th> <th>1</th> </tr>
</thead>
<tbody>
  <tr> <th>0</th> <td>0</td> <td>0</td> </tr>
  <tr> <th>1</th> <td>0</td> <td>1</td> </tr>
</tbody>
</table>
</div>
</div>

Difference compared with ordinary arithmetic
* 1+1=0. For clarity, we may write this as 1⊕1=0
* Addition and subtraction are the same: 1⊕1=1−1=0

We can have vector inner product:
* 𝑥=𝑥_1 𝑥_2⋯𝑥_𝑚, 𝑦=𝑦_1 𝑦_2⋯𝑦_𝑚, 𝑥𝑦^𝑇=𝑥_1 𝑦_1⊕𝑥_2 𝑦_2⊕𝑥_3 𝑦_3…⊕𝑥_𝑚 𝑦_𝑚
* (11010010) (01001010)^𝑇=? 

-->



### Parity checks

<table class="tabDefault" style="float:right;">
  <thead>
    <tr>
      <th>Message</th>
      <th>Codeword</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="msgBit"> 00</span></td>
      <td><span class="msgBit"> 00</span><span class="checkBit">0</span></td>
    </tr>
    <tr>
      <td><span class="msgBit"> 01</span></td>
      <td><span class="msgBit"> 01</span><span class="checkBit">1</span></td>
    </tr>
    <tr>
      <td><span class="msgBit"> 10</span></td>
      <td><span class="msgBit"> 10</span><span class="checkBit">1</span></td>
    </tr>
    <tr>
      <td><span class="msgBit"> 11</span></td>
      <td><span class="msgBit"> 11</span><span class="checkBit">0</span></td>
    </tr>
  </tbody>
</table>

Recall the 3-bit even parity code: {000,011,101,110}
* The last bit is chosen such that the total number of 1s is even

We can say that codewords $𝑥_1 𝑥_2 𝑥_3$ satisfy:

$$𝑥_1⊕𝑥_2⊕\color{blue}{𝑥_3}=0 \text{ or equivalently } \color{blue}{𝑥_3}=𝑥_1⊕𝑥_2$$

The first two bits are message bits and the third bit is a redundant bit which is called the <span class="checkBit">parity check bit</span>, since it ensures a specific parity for the whole sequence. This code has minimum distance 2, so it can detect 1 error

<div style="float:right;">
	<table class="tabDefault">
  <tbody>
    <tr> <th>Message</th> <th>Codeword</th> </tr>
    <tr> <td><span class="msgBit">000</span></td> <td><span class="msgBit">000</span><span class='checkBit'>000</span></td> </tr>
    <tr> <td><span class="msgBit">100</span></td> <td><span class="msgBit">100</span><span class='checkBit'>110</span></td> </tr>
    <tr> <td><span class="msgBit">010</span></td> <td><span class="msgBit">010</span><span class='checkBit'>___</span></td> </tr>
    <tr> <td><span class="msgBit">001</span></td> <td><span class="msgBit">001</span><span class='checkBit'>___</span></td> </tr>
    <tr> <td><span class="msgBit">110</span></td> <td><span class="msgBit">110</span><span class='checkBit'>___</span></td> </tr>
    <tr> <td><span class="msgBit">101</span></td> <td><span class="msgBit">101</span><span class='checkBit'>___</span></td> </tr>
    <tr> <td><span class="msgBit">011</span></td> <td><span class="msgBit">011</span><span class='checkBit'>___</span></td> </tr>
    <tr> <td><span class="msgBit">111</span></td> <td><span class="msgBit">111</span><span class='checkBit'>___</span></td> </tr>
  </tbody>
</table>
</div>

We can have more than one parity bit to make codes more reliable:


* Information bits: $\color{green}{x_1x_2x_3}$
* Codeword: $\color{green}{𝑥_1 𝑥_2 𝑥_3 }\color{blue}{𝑥_4 𝑥_5 𝑥_6}$
* Parity bits:
  * $ \color{blue}{x_4} = \color{green}{x_1} \oplus \color{green}{x_2} $
  * $ \color{blue}{x_5} = \color{green}{x_1} \oplus \color{green}{x_2} $
  * $ \color{blue}{x_6} = \color{green}{x_2} \oplus \color{green}{x_3} $

This is essentially a system of equations and, as we will see, that's where linear algebra will come in.
<br><br><br><br>
<div class="exercise">
  <button  onclick="showSolution(this,'3in3check')" style="float:right;">Show Solution</button>
  How many errors can this code correct? What is the rate of the code?
  <div id="3in3check" style="display:none;" class="solution">
    The minimum distance is 3, so it can correct 1 error. The rate is 3/6 = 1/2.
  </div>
</div>
<br/>

<div class="highlight">
The relationships enforced by the parity equations ensure that the codewords are at a certain distance from each other!
</div>


#### ISBN-10

<div style="float:right;"><img src="assets/img/gc_ISBN10.png" width="300px"><br><br>
$\mathbb F_{11}$ Multiplication table
<br>
<img src="assets/img/F11.png" width="300px">
</div>
An example of a code over a finite field is ISBN 10, which is over $\mathbb F_{11}$.
* The elements are {0,1,2,3,4,5,6,7,8,9,𝑋}, where 𝑋 represents 10

ISBN is a 10-digit string $\color{green}{𝑥_{10} 𝑥_9 𝑥_8⋯}\color{blue}{𝑥_1}$ where $𝑥_1$ is chosen such that in $\mathbb F_{11}$

$$\sum_{i=1}^{10} 𝑖𝑥_𝑖=0$$

<br>

<div class="exercise" style="width: 600px">
  <button  onclick="showSolution(this,'isbn10')" style="float:right;">Show Solution</button>
  A smudged ISBN reads as 0-471-2?195-4. What is the missing digit? What is the book?
  <div id="isbn10" style="display:none;" class="solution">
    $$10(0)+9(4)+8(7)+7(1)+6(2)+5𝑥_5+4(1)+3(9)+2(5)+4=\\5𝑥_5+156=5𝑥_5+2=0$$
    $$5𝑥_5+2=0⇒5𝑥_5=?$$
    $$5x_5 = -2 = 9  \Rightarrow x_5 = 4.$$
  </div>
</div>
<br/>






### Parity bits and redundancy

With parity bits, we are adding redundant information.
* Redundancy allows us to recover a message from a corrupted or imperfect copy, or to detect that copy is erroneous.
* This is because the parity bit values depend on the other signal bit values, and introduce an interdependency among signal bits that did not exist before.
* This interdependency restricts the set of valid bit strings.
* While the information being transmitted remains the same, the bits per message increases.
* Unfortunately, this means we have a trade-off: we can transmit data fast, or we can transmit data reliably, or hopefully strike the right balance between the two.



More redundancy $\to$ lower data rate, reduced transmission efficiency
* Can be worth it if error probability is high enough, or cost of errors is high enough

_A code is said to approach capacity if its rate is close to the capacity of the channel $𝐶$ and the probability of uncorrected errors can be made as small as we want._
* In a block of $𝑁$ bits, $𝐶𝑁$ bits are information bits and $(1−𝐶)𝑁$ bits are parity bits

More sophisticated codes can get better efficiency with same error correction performance (next time: block codes / Hamming codes)

Linear algebra is the key to formulating these block codes and showing how many errors they can detect or correct. To do that, we need to extend what we’ve learned about vectors and matrices to those involving binary variables.



























