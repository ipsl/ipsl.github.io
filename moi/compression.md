---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
---

# Data Compression

In the last section, we defined information mathematically based on a set of desirable properties. From an engineering standpoint, such a definition is useful if it allows us to do some relevant task better. In this section, we study data compression and show how it is related to entropy. We will answer two important question: 
1. What is the best we can do? 
2. How can we do it? 

The answer to the first question is one of the most elegant and useful results in information theory. As we will see, regardless of the computational resources available to us and the type of compression algorithm we use, for a given source of information, there is a strict mathematical limit for the compression ratio that we can achieve.

Data compression is possible because real signals do not have a uniform distribution: [they have a lot of redundancy/predictability](information_theory.html#comppic). This means that data compression can reduce the memory required to store or transmit the information with no or little loss.
The departure from complete randomness comes in two forms:
* Nonuniform probabilities: Not all possibilities have the same probability (e.g., specific colors more common in a given image; some letters are more common in English)
* Dependence and patterns: Adjacent pixels likely to have identical/similar values; Q is often followed by U.

As the answer to the second question above, we'll learn about Huffman codes (well-suited for nonuniform probabilities) and Lempel-Ziv compression (great for exploiting dependence and predictable patterns). Both are in widespread everyday use (e.g., .jpeg, .mp3, .zip formats rely on these).





## Fixed- and variable-length codes
First, a bit of terminology:

* A _code_ is a mapping between  symbols (single pieces of information, e.g., colors of pixels, letters, ...) and binary words (non-binary is also possible but uncommon). It can also be a mapping from binary sequences to binary sequences (e.g., in the case of Lempel-Ziv compression). 
* The process of transforming symbols to binary sequences is called _encoding_, which is performed by an _encoder_. 
* Each of the binary sequences used to represent a symbol is called a _codeword_.

In a fixed-length code, the same number of bits is used to represent each symbol. A variable-length code uses different numbers of bits for different symbols. 
<table width="100%" id="varLenGenome">
	<tr><td>Fixed-length code</td><td>Variable-length code</td></tr>
	<tr>
		<td>

<table class="tabDefault">
  <thead>
    <tr> <th>Genome symbol</th> <th> Codeword</th> </tr>
  </thead>
  <tbody>
    <tr> <td>A</td> <td>000</td> </tr>
    <tr> <td>C</td> <td>001</td> </tr>
    <tr> <td>G</td> <td>010</td> </tr>
    <tr> <td>T</td> <td>011</td> </tr>
    <tr> <td>N</td> <td>100</td> </tr>
  </tbody>
</table>
</td>
<td>

<table class="tabDefault" >
  <thead>
    <tr> <th>Genome symbol</th> <th> Codeword</th> </tr>
  </thead>
  <tbody>
    <tr> <td>A</td> <td>0</td> </tr>
    <tr> <td>C</td> <td>10</td> </tr>
    <tr> <td>G</td> <td>110</td> </tr>
    <tr> <td>T</td> <td>1111</td> </tr>
    <tr> <td>N</td> <td>1110</td> </tr>
  </tbody>
</table>
</td>
	</tr>
</table>

### Fixed-Length Codes

Fixed-length codes have a simple decoding process since the boundaries of each codeword are immediately clear. But fixed-length codes can be very wasteful. You use the same number of bits to represent symbols that occur frequently and infrequently.
<!-- Here is an example of fixed-length codes that waste a lot of space. A fixed-length code would use the same number of bits to describe each image pixel:
use self-generated image here -->
<!-- Rothko                                       Pollock -->



Despite being potentially wasteful, due to their simplicity, fixed-length codes are common:
* A number stored in a computer (e.g., 32-bit integer)
* Credit card magnetic stripe
* DNA and RNA: a sequence of 3 nucleic acids represent a _codon_ for a specific amino acid when constructing a protein.
* American Standard Code for Information Interchange (ASCII)
    * Originally a 7-bit code for alphanumeric symbols and some keyboard commands like <code>ENTER</code> or <code>ESC</code>.
    * 7 bits give $2^7$ = 128 possible symbols (_seems_ like a lot).
    * Extended ASCII allows 8 bits, but there are multiple such codes.
* UTF-32 uses 32 bits to represent text (letters, emoji, non-printable characters), but it's not in common use


<!-- * Extended ASCII allows 8 bits, permits some additional characters, including those used in some other languages. Beyond extended ASCII, there are other character sets to cover even more languages. (it is not accurate to say this). Unicode, usually 16 bits, is a standard scheme for unifying all these. -->
<!-- Extended ASCII allows 8 bits, afaik this is correct. Though there are multiple standards, see here for an interesting example: http://feedmechocolate.com/2010/07/08/this-letter-was-sent-to-a-russian-student-by-her.html. Beyond extended ASCII, those encodings are usually not fixed-length. For example GB2312 is not fixed length (we were taught in Chinese very young that GB2312 is also an ASCII extension). Nevertheless, it uses 1 byte for ascii and 2 bytes for CJK chars). Unicode is a confusing term, and windows Notepad.exe is partially to be blamed. Unicode is a general term for a consortium and a set of encoding standards including UTF-8, UTF-16(compartible with UCS-2 which is the format windows' notepad referring 'unicode' to). UTF-8 is the most prevelent encoding for source code(the current file you are editing is this encoding) and web page (99%?). UTF-8 is var-length coding, using 1 byte for ascii <=127, and 3 bytes for CJK, not sure about others, wikipedia has a table showing the length for each language. I haven't seen many people use UTF-16 to exchange information, some program internally use it for speed but no people read it. So saying usually 16-bit is not accurate. -->
<!-- Charater encoding is a big subject and even most CS dept don't teach it. We learn this the hard way in practice when deciphering the codes decoded using the wrong codebook just like the Russian postperson. Say the files circulating around me has 3 most common encoding, then all the encoding and decoding combinations are 9 out of which 6 is going to display some irregularities. Each of these 6 ways has its unique characteristics, so we can re-decode it using the correct code book and reencode it into utf-8. I can make this into an example, but takes time, so let me know if this helps and I will do it.-->

<div class="exercise" markdown=1>
   * If there are $M$ different possible symbols, how many bits are needed for fixed-length encoding?
   * ASCII uses a fixed number of bits to encode English characters. We could use the same approach to encode each English _word_. Assuming that English has half a million words, how many bits would we need for each word? Apart from being wasteful, why is encoding words instead of characters not a good idea?
</div>
<br/>


### Variable-length Code
Variable length coding is an essential step in efficiently encoding text, audio and images. Morse Code is the longest-lasting electrical signaling code in existence. MP3 uses a variable-length coding method called the Huffman code which we are going to discuss later.

The fundamental idea is to use short codewords for common (high probability) symbols and use longer codewords to represent less-probable symbols. Advantages: less storage space, faster transmission. Disadvantage: more difficult to decode (computation/circuit cost).


ASCII and Mores code are given for some characters in the table below. The alphabet of Mores code are '.' (dot, short beep) and '-' (dash, long beep).

<!-- insert morse table here -->


<table width="100%">
<tr>
<td>
<table id="tab1" align="right" class="tabDefault">
	<tr><th>Symbol</th><th>ASCII Binary</th><th>ASCII Decimal</th><th> Morse Code</th></tr>
</table>
</td>
<td>

<table id="tab2" align="left" class="tabDefault">
	<tr><th>Symbol</th><th>ASCII Binary</th><th>ASCII Decimal</th><th> Morse Code</th></tr>
</table>
</td>
	</tr>
</table>
<script type="text/javascript">
	var symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','0','1','2','3','4','5','6','7','8','9'];
	var morsecode = ['.-' , '-...' , '-.-.' , '-..' , '.' , '..-.' , '--.' , '....' , '..' , '.---' , '-.-' , '.-..' , '--' , '-.' , '---' , '.--.' , '--.-' , '.-.' , '...' , '-' , '..-' , '...-' , '.--' , '-..-' , '-.--' , '--..' , '-----' , '.----' , '..---' , '...--' , '....-' , '.....' , '-....' , '--...' , '---..' , '----.'];
	var tabs = ['tab1','tab2']
	for (var j=0; j<2; ++j){
	var table = document.getElementById(tabs[j]);
	for (var i = 0; i<18; ++i){
		var symb  = symbols[18*j+i];
		var row = table.insertRow(i+1);
		var cell0 = row.insertCell(0);
		cell0.innerHTML = symb;
		var cell1 = row.insertCell(1);
		var bin = symb.charCodeAt(0).toString(2); if (bin.length<7) bin = 0+bin;
		cell1.innerHTML = bin;
		var cell2 = row.insertCell(2);
		cell2.innerHTML = symb.charCodeAt(0).toString(10);
		var cell3 = row.insertCell(3);
		cell3.innerHTML = morsecode[i];
	}}
</script>


<br/>

<table class="tabDefault" style="float: right">
  <thead>
    <tr> <th>Rank</th> <th>Word</th> <th>&nbsp;</th> <th>Rank</th> <th>Word</th> </tr>
  </thead>
  <tbody>
    <tr> <td>1</td> <td>the</td> <td>&nbsp;</td> <td>901</td> <td>shot</td> </tr>
     <tr> <td>2</td> <td>of</td> <td>&nbsp;</td> <td>902</td> <td>poet</td> </tr>
     <tr> <td>3</td> <td>and</td> <td>&nbsp;</td> <td>903</td> <td>sever</td> </tr>
    <tr> <td>4</td> <td>a</td> <td>&nbsp;</td> <td>904</td> <td>moving</td> </tr>
    <tr> <td>5</td> <td>to</td> <td>&nbsp;</td> <td>905</td> <td>mass</td> </tr>
    <tr> <td>6</td> <td>in</td> <td>&nbsp;</td> <td>906</td> <td>plane</td> </tr>
    <tr> <td>7</td> <td>is</td> <td>&nbsp;</td> <td>907</td> <td>proper</td> </tr>
    <tr> <td>8</td> <td>be</td> <td>&nbsp;</td> <td>908</td> <td>propose</td> </tr>
    <tr> <td>9</td> <td>that</td> <td>&nbsp;</td> <td>909</td> <td>drink</td> </tr>
    <tr> <td>10</td> <td>was</td> <td>&nbsp;</td> <td>910</td> <td>obviously</td> </tr>
  </tbody>
</table>

Other examples of variable-length codes:
* English language (words have different lengths). The table shows the ranks of several words based on how common they are. You can see that common words are generally shorter.
* Compression programs like WinZip (Lempel-Ziv)
* UTF-8 encodes English characters, characters from other languages, emoji, etc. The length may be 1, 2, 3, or 4 bytes, which is determined by the [first few bits](https://tools.ietf.org/html/rfc3629#section-3), as shown below. It includes ASCII as a subset. If the first bit is 0, then the length is 8 bits and the other 7 bits are used as in ASCII.
    * 1 Byte:  &nbsp; <code>0xxxxxxx</code>
    * 2 Bytes: <code>110xxxxx 10xxxxxx</code>
    * 3 Bytes: <code>1110xxxx 10xxxxxx 10xxxxxx</code>
    * 4 Bytes: <code>11110xxx 10xxxxxx 10xxxxxx 10xxxxxx</code>



#### Prefix codes -- dealing with variable length
One difficulty with variable-length codes is determining when one codeword ends and another begins. There are two simple ways to solve this problem: 

<ol>
	<li><strong>Using a separator symbol:</strong> space in English, comma in csv. This is generally wasteful and especially so in binary since we have to use either 0 or 1 as separator. 
 <div class="exercise">
 	<button  onclick="showSolution(this,'binSep')" style="float:right;">Show Solution</button>
 	Design a binary variable-length code for representing capital English letters using method 1 above. If all letters are equally likely, what is the expected number of bits needed to encode one letter?
 	<div id="binSep" style="display:none;" class="solution">
 		Suppose we use 1 as the separator. The only way to encode information using only 0s is to use different numbers of 0s for different characters. For example, we can use $i$ 0s for the $i$-th letter of the alphabet. For example, <code>beef</code> would be encoded as <code>001000001000001000000</code>.
 	</div>
 </div>
 	</li><br/>
  <li>
<strong>Prefix(-free) codes:</strong> A prefix code assigns a unique bit string to each possible symbol in the message such that no codeword is the prefix of another codeword.

Here is a code for digits 0-9 to binary strings: <br> $$0 \to 0000, 1 \to 0001, 2 \to 001,
3 \to 0100, 4 \to 0101, 5 \to 0110,
6 \to 0111, 7 \to 100, 8 \to 101,
9 \to 11$$

<div class="exercise">
    Decode <code>0010011100000100</code> (from left to right).
</div>
<br/>


<br/>
<!--22903<code>-->
</li>
</ol>
<div class="exercise">
Prove that UTF-8 is a prefix code.
</div>
<!-- fax machine RLE skipped




Question 1: revisited [the DNA sequence](./defining_information.html#dnaseq)
Each sequence has a length of 500.
Is it possible to represent any of these sequences with less than 1000 bits? -->




## Entropy and expected code length for iid sequences
What is the smallest number of bits/symbols for storing data produced by a source? 

Let's make this question more precise. First, we assume the data is produced by a _source_ according to a distribution. As an example, consider a DNA sequence with symbols {A,C,G,T,N} where

<div>
	\begin{equation}\label{eq:probs}
	P(A)=P(T) = 1/4, \quad P(C)=P(G) = P(N) = 1/6
	\end{equation}
</div>

and also consider the following code

<table class="tabDefault" id="varLenGenome2">
 <thead>
    <tr> <th>Genome symbol</th> <th>Codeword</th> </tr>
  </thead>
  <tbody>
    <tr> <td>A</td> <td>00</td> </tr>
    <tr> <td>T</td> <td>01</td> </tr>
    <tr> <td>C</td> <td>100</td> </tr>
    <tr> <td>G</td> <td>101</td> </tr>
    <tr> <td>N</td> <td>111</td> </tr>
  </tbody>
</table>

The length of the binary sequence used for different symbols is different. But we can find the _expected code length_. For $x\in${A,C,G,T,N}, let $e(x)$ be the codeword representing $x$ and let $l(x)$ be the length of $e(x)$. Then the expected code length is 

$$L = \sum_x l(x)P(X=x).$$


<div class="exercise">
	<button  onclick="showSolution(this,'exCL')" style="float:right;">Show Solution</button>
	For the code in the table above and the probabilities given in \eqref{eq:probs}, find the expected code length.
	<div id="exCL" style="display:none;" class="solution">
		$$2\times P(A) + 2\times P(T) + 3\times P(C) + 3\times P(G) + 3\times P(N)  = 2.5\ bits.$$
	</div>
</div>
<br/>

<div class="exercise">
    For the codes given in <a href="#varLenGenome">these table</a> and probabilities given in \eqref{eq:probs}, find the expected code lengths.
</div>
<br/>

If we encode an iid sequence of length $N$ using a code with expected length $L$, then the expected length of the binary representation of this sequence is $NL$. The true value will also be close to $NL$ based on the frequentist interpretation of probability. So approximately, we use $L$ bits per symbol. So we are after codes for which the expected code length is as small as possible.

<div class="exercise" id="dieRolls"> 
	Consider a loaded die with the following probabilities:
	$$P(1) = P(2) = 1/4,\quad P(3)=P(4)=P(5) = 3/20,\quad P(6)=1/20.$$ 
	<ol>
	<li> Consider the code:
	$$1\to 00,\quad 2\to 01,\quad 3\to 111, \quad 4\to 100, \quad 5\to 101, 
	\quad 6\to 110$$
	What is the expected length of this code?
	</li>
	<li>
		What is the expected length of encoding an iid sequence of 10 die rolls?
	</li>
	<li>
		Find the length of the encoding of the following sequence of die rolls:	5144225213. Compare with previous part.
	</li>
	<li>
		If we use a fixed-length code, how many bits would we need to represent a sequence of 10 die rolls?
	</li>
</ol>
</div>
<br/>


For a source with a given distribution, what is the smallest possible code length?

### A fundamental lower bound

Let us start with a lower bound that is always satisfied, regardless of how good our code is:

<div class="highlight">
	<strong> The fundamental lower bound on expected length</strong>: The expected code length is not less than the entropy, i.e., $$L \geq H.$$
</div>

We will not provide a formal proof of this. But intuitively:
* Since we can decode and recover the original symbol, _the information conveyed by the encoded version_ cannot be less than entropy.
* The encoded version is represented by $L$ bits on average and each bit (binary digit) carries at most 1 bit of information, so _the information conveyed by the encoded version_ is at most $L$.


<div class="exercise">
    Find the entropy of the source of information given in \eqref{eq:probs} and compare it with the expected code length for <a href="#varLenGenome2">this code</a>, as well as <a href="#varLenGenome">these codes</a>.
</div>
<br/>

<div class="exercise">
    Find the entropy of the die roll given in the <a href="#dieRolls">example above</a>. How does the entropy compare with the expected code length.
</div>
<br/>

### A close upper bound

We now know that the expected code length cannot be smaller than the entropy. But how close to the entropy can we get? What is the expected length of the best code?

As an example, let us consider storing DNA data, where the symbols are {A, C, G, T}. The length of the fixed-length code is 2 bits/symbol. This is actually equal to the entropy when all symbols are equally likely, since the entropy is $\log_2 4 = 2$ bits per symbol. So our code matches the entropy of the signal and this is the best possible.

But what if some symbols are more probable. Then the entropy will be less than 2 bits/symbol and our fixed-length code is no longer necessarily optimal. For example, suppose 

$$P(A)=1/2,\quad P(C)=1/4,\quad P(G)=1/8,\quad P(T)=1/8.$$

Then, the entropy is $H=1.75$ bits, 
<div>
	\begin{align}\label{eq:entGen}
		H &= P(A) I(A) + P(C) I(C) + P(G) I(G) + P(T) I(T) \\
		 & =\frac12\times 1 + \frac14\times 2 + \frac18\times 3 + \frac18\times 3 = 1.75\ bits\nonumber
	\end{align}
</div>
which is less than 2. Can we encode this source so that we use 1.75 bits/symbol? Yes, we can use a variable-length code:

{:.tabDefault}
Symbol (x)        |   A      |      C      |     G       |     T
:--------------|----------|-------------|-------------|-----------
Probability $P(x)$    |  1/2     |     1/4     |     1/8     |    1/8
Self-information $I(x)$   |$\log_2 2=1$ |$\log_2 4=2$ |   $\log_2 8=3$   |   $\log_2 8=3$
Codeword $e(x)$       |   0      |     10      |     110     |    111
Codeword length $l(x)$|   1      |     2       |      3      |        3 |



What is the expected code length? 
<div>
	\begin{align}\label{eq:entGen2}
		L &= P(A) l(A) + P(C) l(C) + P(G) l(G) + P(T) l(T) \\
		 & =\frac12\times 1 + \frac14\times 2 + \frac18\times 3 + \frac18\times 3 = 1.75\ bits\nonumber
	\end{align}
</div>

The value is exactly equal to entropy. Not only that, equation  \eqref{eq:entGen} for computing the entropy and equation \eqref{eq:entGen2} for computing the expected code length look almost identical. 
This is because we have managed to **choose a codeword for each symbol with length equal to the self-information of that symbol.** In other words, $I(x) = l(x)$ for all outcomes.


But of course, this is not possible if $I(x)$ is not always an integer. As an example, let us revisit our die roll example above:


{:.tabDefault}
Symbol         |    1      |      2      |    3       |     4 | 5 | 6
:--------------|----------|-------------|-------------|-----------|--|--
Probability, $P(x)$    |  1/4     |     1/4     |     3/20 |3/20|  3/20  |    1/20
Self-information, $I(x)$   |2 |2 |   2.74   |  2.74   |  2.74   |   4.32
Codeword, $e(x)$       |      |          |       |   
Codeword length $l(x)$|         |          |        |      |


What is the best way to fill in the rest of this table? We can't have codewords with length $I(x)$ for all symbols $x$ but **we can always find codewords whose length is $\lceil I(x)\rceil$,** where $\lceil y\rceil$ is the smallest integer that is equal to or larger than $y$, e.g., $\lceil 2.7\rceil=3, \lceil 2\rceil=2$. So we can fill in the table as 

<span id="GeneShannonCode">

{:.tabDefault}
Symbol         |    1      |      2      |    3       |     4 | 5 | 6
:--------------|----------|-------------|-------------|-----------|--|--
Probability, $P(x)$    |  1/4     |     1/4     |     3/20 |3/20|  3/20  |    1/20
Self-information, $I(x)$   |2 |2 |   2.74   |  2.74   |  2.74   |   4.32
$\lceil I(x)\rceil$    |  2    |   2       |   3    |  3 | 3 | 5
Codeword, $e(x)$     |00|01|100|101|110|11100
Codeword length $l(x)$|    2     |     2     |      3  |  3    |3|5

<br/>

<div class="exercise">
Find the expected length of the code for the code in the table above.
</div>
<br/>

Note that $\lceil y\rceil < y+1$. Hence,

$$
L = \sum_x P(x) l(x) = \sum_x P(x) \lceil I(x)\rceil < \sum_x P(x) (I(x)+1) = \sum_x P(x) I(x) +  \sum_x P(x) = H + 1. 
$$

<div class="highlight">
	<strong> Shannon Coding:</strong> We can always find a code such that the length of each code word satisfies $l(x) = \lceil I(x)\rceil$. Such a code is called a <em>Shannon code</em>. The expected length of the Shannon code satisfies
	$$L<H+1. $$
</div>

Note that we didn't provide a way to find a Shannon code since we will discuss a better method called the Huffman code later. 

Putting the upper and lower bounds together, we arrive at Shannon's source coding theorem:

<div class="highlight">
	<strong> Mathematics of Information Tenet II </strong> (Shanon's source coding theorem): The expected code length satisfies $$H\le L < H+1.$$
</div>

### Optimal codes
While Shannon codes can get close to entropy, they are not necessarily optimal. For example, in the [table above](#GeneShannonCode), we could simply choose 111 to represent 5. Even after such obvious improvements are applied, this coding method still may not be optimal.

#### Binary search: toward optimal codes
Suppose you are participating in a 20-question game with the goal of identifying one of the following foods, which your friend has chosen at random:

<div align="center"><img src="assets/img/foods.png" width="300px"></div>


What is your strategy? 


The optimal strategy is _binary search_:
* Divide the set of possibilities into two equal parts. If this is not possible, make each part as close to half as possible. 
* Choose one of the halves and ask whether it contains the item.

For the food items in the image above, this strategy can be implemented by dividing the possible items into the left half and the right half. Then after identifying the half that contains the chosen food, we can divide it again into the left half and the right half. At this point we will have arrived at a column that contains the selected food. We cannot divide three items into equal halves so we divide them into {top item, middle item} and {bottom item}. If it turns out to be in {top item, bottom item}, we will ask one more question to determine which one it is.

For example, if the item is 🍕 then your questions and your friend's answers will be:
* Is it in the set {burger, pancakes, cheese, pizza, salad, beef}? _yes_
* Is it in the set {burger, pancakes, cheese}? _no_
* Is it in the set {pizza, salad}? _yes_
* Is it pizza? _yes_

<div class="exercise">
	Write the questions/answers for an item other than pizza.
</div>
<br/>

An informal proof of the optimality of this method is as follows: Binary search works well because you get the maximum amount of information for every question. Since the two sets are as close to half the items as possible, the entropy of each answer is either 1 or as close to 1 as possible. So _on average_, you will ask the smallest number of questions.


<div class="exercise">
	<button  onclick="showSolution(this,'foodBinSearch')" style="float:right;">Show Solution</button>
	What is the expected number of questions, assuming your friend chooses the food at random with all foods having equal probability?
	<div id="foodBinSearch" style="display:none;" class="solution">
		Since all foods have the same probability, we take the average of the number of questions for each food. For example, for burger, the number of questions is 4. By finding this for all items (your solution must provide this), we will find that the average number of questions 3.67 questions.
	</div>
</div>
<br/>

<div class="exercise">
	<button  onclick="showSolution(this,'foodLinSearch')" style="float:right;">Show Solution</button>
	Consider an alternative strategy in which you ask about each item in order. That is, you first ask "Is it a burger?". If the answer is no, you ask "Is it pancakes?". If the answer is no, you ask "Is it cheese?" and so on. What is the expected number of questions in this case? Is it smaller or larger than binary search?
	<div id="foodLinSearch" style="display:none;" class="solution">
		If the selected food is the $i$-th food, we need $i$ questions. So the average is 
		$$\frac{1}{12}\sum_{i=1}^{12}i = \frac{12\times13}{12\times2}=6.5,$$
		which is larger than binary search, as expected.
	</div>
</div>
<br/>

#### 20 questions and codes
If we fix our strategy (the way we divide the set of options and ask questions), we can turn our 20 question game into a _prefix code_ for the food items as given in the graph below.
<table width="1000px">
	<td width="700px"><img src="assets/img/foodTree.png" width="700px"></td>
	<td width="300px" align="right"><img src="assets/img/foodsCode.png" width="150px"></td>
</table>
<div align="center"></div>
The structure above is called a _tree_. A tree consists of _nodes_ and _edges_. The edges connect the nodes. Each node in the tree above indicates a set of possible choices. The two edges going out of each node, divide the possible choices into two nearly equal set.  We label one of the edges with 0 and the other with 1. The sequence of labels leading to an item represent its codeword. For example, pizza is 0100.

The expected number of questions is equal to the average length of the code and very close the entropy:

$$L = \frac4{12}\times 3 + \frac8{12}\times 4 = 3.66\ bits/symbol$$

$$H = \log 12 = 3.58\ bits/symbol$$

The above discussion shows a bijection between trees and prefix codes. 

<div class="exercise">
   Suppose your friend rolls a die and you want to find out what it is using the minimum number of questions. Draw a tree for this problem and find the corresponding codeword for each value in the set {1,2,3,4,5,6}.
</div>
<br/>

#### Unequal probabilities

Now let us consider a problem in which the probabilities are unequal: Suppose your friend has chosen a random point in the rectangle below and you want to find out its color with a minimum number of questions. The probability of each color is proportional to the area and is given in each rectangle.

<div align="center"><img src="assets/img/squares.png" width="300px"></div>
<br/>
<div class="exercise">
	What is the entropy of the color of the random point? Design a strategy for finding the color of the point and draw the corresponding tree. Two examples are given below. Your solution must be different from these but doesn't have to be optimal. What is the codeword corresponding to each color and what is the expected code length?
</div>
<br/>

The entropy of the color is $0.4\log (10/4)+.2\log(10/2)+.3\log(1/0.15) = 2.15$. One possibility is the following tree. The numbers in the parenthesis show the probability of the colors. R stands for Red, B for Blue, and so on.

<pre>
               RGBPY (1)
            _______|_______________
           |                       |
          RG (.5)                BPY (0.5)
         __|____                ___|____
        |       |              |        |
       R (.4)   G (0.1)       B (0.2)   PY (0.3)
                                      __|_________
                                     |            |
                                    P (0.15)     Y (0.15)
</pre>
If we assign 0 to the left branch and 1 to the right branch, then the codeword for P is 110. The expected code length is 2.3 bits/symbol.

In the tree above we have seemingly divided the probability in half in each step to the extent possible. It turns out we still haven't obtained the best possible code. This is because it is possible to divide the probability in a way that we're closer to half. This optimal answer is given below, along with the probabilities and the codewords:
		
<pre>
                RGBPY (1)
             ______|___________
            |                  |
           R (.4)            GBPY (.6)
             0            _____|__________
                         |                |
                      GY(.25)           BP (.35)
                   ___|___              __|______
                  |       |            |         |
                G (.1)   Y (0.15)    B (.2)      P(.15)
                 100      101         110         111
</pre>


<div class="exercise">
Find the expected code length for the optimal code given above.
</div>
<br/>

### Huffman codes

To find the optimal code, we must divide the probability into halves in each step. As we saw in the color example above, seemingly optimal answers may not be actually optimal. So is there a way to find the optimal code? Yes, the answer is Huffman codes, which are _extensively_ used in various file formats for storage and communications. For a long time, many people searched for this optimal algorithm, including Shannon and Fano, who was Huffman's professor (more about the story later). The problem was that everyone was trying to divide the probability mass into halves using a top-down approach. That is, they thought the first step should be to divide the whole set of outcomes into two sets with nearly equal probabilities. Huffman realized that solution is a bottom-up approach, first considering outcomes with smallest probabilities.  

The following observations are critical to realizing a bottom-up approach is optimal. 

In an optimal code:
* The two symbols with smallest probabilities will have the longest codewords assigned.
* The last bit for one of these two symbols is 0 and for the other 1.
* If we can distinguish between these two symbols, we can combine them into a new symbol.

<div class="highlight" markdown=1>
A Huffman code is a prefix code with a _binary tree_ structure, generated using the following algorithm:
1. Initialize: each symbol gets its own node.
2. Iterate until a tree is created:
   * Choose pair of nodes with lowest probabilities.
   * Create a new node and assign to it the sum of the two nodes' probabilities.
   * Connect the original nodes to the new node with two edges.
3. Assign left branches 0 or 1 and right branches the other.
</div>

Let's see an example. Suppose the following DNA symbols have the given probabilities: 

<table class="tabDefault" >
  <thead>
    <tr> <th>Genome symbol</th> <th> Probability</th> </tr>
  </thead>
  <tbody>
    <tr> <td>A</td> <td>0.3</td> </tr>
    <tr> <td>C</td> <td>0.24</td> </tr>
    <tr> <td>G</td> <td>0.2</td> </tr>
    <tr> <td>T</td> <td>0.16</td> </tr>
    <tr> <td>N</td> <td>0.1</td> </tr>
  </tbody>
</table>

We start by setting up nodes for each outcomes, also writing their probabilities in parentheses.

<pre>
	A (0.3)        C (0.24)         G (0.2)         T (0.16)         N (0.1)
</pre>
<br/>

We then identify the two nodes with the smallest probabilities, which are N and T, and combine them:
<pre>
	A (0.3)        C (0.24)         G (0.2)         T (0.16)         N (0.1)
	                                                |________________|
	                                                NT (0.26)
</pre>
<br/>

We now have 4 nodes with probabilities 0.3, 0.24, 0.2, 0.26. The smallest pair are C, G, which we combine:

<pre>
	A (0.3)        C (0.24)         G (0.2)         T (0.16)         N (0.1)
	               |________________|               |________________|
	               CG (0.44)                        NT (0.26)
</pre>
<br/>

We now have 3 nodes with probabilities 0.3, 0.44, 0.26. The smallest pair are those with probabilities 0.26 and 0.3. We rearrange the nodes to be able to combine them. If you are doing this with pen and paper, you don't need to rearrange them. 

<pre>
	C (0.24)         G (0.2)         A (0.3)        T (0.16)         N (0.1)
	|________________|               |              |________________|
	CG (0.44)                        |______________NT (0.26)
	                                ANT (0.56)
</pre>
<br/>

Finally, we combine the last two remaining nodes to obtain a tree:
<pre>
	C (0.24)         G (0.2)         A (0.3)        T (0.16)         N (0.1)
	|________________|               |              |________________|
	CG (0.44)                        |______________NT (0.26)
	|                                ANT (0.56)
	|________________________________|
	ACGTN (1)
</pre>

We assign 0 to the left branches and 1 to the right branches,

<pre>
	 C (0.24)         G (0.2)         A (0.3)        T (0.16)         N (0.1)
	 |                |               |              |                |
	0|                |1             0|             0|                |1
	 |________________|               |              |________________|
	 CG (0.44)                        |___________1__NT (0.26)
	 |                                ANT (0.56)
	0|                                |
	 |________________________________|1
	 ACGTN (1)
</pre>
leading to the following code:
<table class="tabDefault" >
  <thead>
    <tr> <th>Genome symbol</th> <th> Probability</th> <th> Codeword</th> </tr>
  </thead>
  <tbody>
    <tr> <td>A</td> <td>0.3</td> <td> 10  </td></tr>
    <tr> <td>C</td> <td>0.24</td><td> 00  </td></tr>
    <tr> <td>G</td> <td>0.2</td> <td> 01  </td></tr>
    <tr> <td>T</td> <td>0.16</td><td> 110 </td></tr>
    <tr> <td>N</td> <td>0.1</td> <td> 111 </td></tr>
  </tbody>
</table>

<br/>
<div class="exercise">
   Find the expected code length and entropy.
</div>
<br/>


Let's see another example. Consider loaded die with the following probabilities:

$$P(1)=1/4, \quad P(2)=1/4, \quad P(3)=1/4,\quad P(4)=1/8, \quad P(5)=1/16, \quad P(6)=1/16$$


We start by setting up nodes for each outcome. We also write their probabilities. Then we proceed as in the Huffman algorithm.

<pre>
1(1/4)     2(1/4)  3(1/4)     4(1/8)   5(1/16)    6(1/16)   Initialization: nodes (p)
 |         |       |          |           |_________|                                              
 |         |       |          |__________56 (1/8)           Combine 5 and 6      =>   56                          
 |         |       |_________456 (1/4)                      Combine 4 and 56     =>   456              
 |_________|     3456 (1/2)                                 Combine 3 and 456    =>   3456   
12(1/2)            |                                        Combine 1 and 2      =>   12
 |_____123456 (1)__|                                        Combine 12 and 3456  =>   12456
</pre>

In this case, the entropy and the expected length of the Huffman code are both equal to 2.375 bits/symbol as the codeword lengths turn out to be equal to the self-informations.

{:.tabDefault}
Symbol $x$| Codeword $e(x)$|$ P(x)$ | $I(x) $| $l(x) $|
-------|:---------|------|------|------|
1 | 00 | 1/4 | 2 | 2 |
2 | 01 | 1/4 | 2 | 2 |
3 | 10 | 1/4 | 2 | 2 |
4 | 110 | 1/8 | 3 | 3 |
5 | 1110 | 1/16 | 4 | 4 |
6 | 1111 | 1/16 | 4 | 4 |


Note: The average code length of Huffman codes won't exactly match H, unless the probabilities are all powers of two. But, it will still be a lot closer for nonuniform data than fixed-length codes.

The story of Huffman codes:
<blockquote markdown=1>
❝In 1951 David A. Huffman and his classmates in an electrical engineering graduate course on information theory were given the choice of a term paper or a final exam. For the term paper, Huffman’s professor, Robert M. Fano, had assigned what at first appeared to be a simple problem. Students were asked to find the most efficient method of representing numbers, letters or other symbols using a binary code. […] Huffman worked on the problem for months, developing a number of approaches, but none that he could prove to be the most efficient. Finally, he despaired of ever reaching a solution and decided to start studying for the final. Just as he was throwing his notes in the garbage, the solution came to him. “It was the most singular moment of my life,” Huffman says. “There was the absolute lightning of sudden realization.”[...] Huffman says he might never have tried his hand at the problem — much less solved it at the age of 25 — if he had known that Fano, his professor, and Claude E. Shannon, the creator of information theory, had struggled with it. “It was my luck to be there at the right time and also not have my professor discourage me by telling me that other good people had struggled with this problem,” he says. ❞

<div align="right"> <em>Scientific American, Sept. 1991</em> </div>
</blockquote>

#### Huffman codes for binary data
For the binary alphabet, if each bit is equally likely to be 0 or 1, then the entropy is 1 and the expected code length of any code will also be 1, so there is nothing to be gained from encoding.

Now, suppose we have an information sources that produces an iid binary sequence where 𝑃(0)=0.1 and 𝑃(1)=0.9. What is the entropy?

$$H = 0.1\log 10 + 0.9\log \frac1{0.9} = 0.469\ bits\ per\ symbol$$

What is the Huffman code? Given that there are already only two symbols, the Huffman code is the same as the original symbols: $0\to 0, 1\to 1$. The expected length of the Huffman code is $L=1$. So the condition 

$$H\le L < H+1$$

is satisfied. Yet the Huffman code does not provide any advantage, even though the entropy is well below 1. 

**Block encoding to improve code length:** The solution is to combine bits to create more than two symbols. This is called block encoding. Let's group every pair of symbols and using the iid property find their probability:

$$P(00) = 0.01,\quad P(01)= P(10) = 0.09,\quad P(11) = 0.81.$$

The Huffman code is given by
<pre id="huff2BinComp">
  00 (0.01)       01 (0.09)      10 (0.09)     11(0.81)
    |_________________|             |             |   
                  00,01(0.1)        |             |  
                      |_____________|             |  
                   00,01,10 (0.19)                | 
                         |________________________|
                       00,01,10,11 (1)
</pre>

So the expected code length is 

$$ 0.01\cdot 3 + 0.09\cdot 3 + 0.09\cdot 2 + 0.81\cdot 1 = 1.29\ bits$$

But this is the expected length for representing two symbols. The expected number of bits used to encode each input bit is 1.29/2 = 0.645, which is less than 1 and only 0.176 bits away from entropy. 


<div class="exercise">
	<button  onclick="showSolution(this,'block3')" style="float:right;">Show Solution</button>
	Find the Huffman code and its expected length <em>per binary symbol</em> if we group each three input binary bits into a block.
	<div id="block3" style="display:none;" class="solution">
		Finding the Huffman code is left as an exercise. Its expected length is 1.589 bits/3 symbols. So for each input bit, we use $0.53$ bits, which is only 0.064 bits away from entropy.
	</div>
</div>
<br/>

If we group $n$ symbols, then the Huffman code will be at most $1/n$ bits away from entropy. Why?

#### Compression ratio

<div class="exercise">
	<button  onclick="showSolution(this,'2binComp')" style="float:right;">Show Solution</button>
	Find the code produced by the Huffman coding <a href="#huff2BinComp">above</a> and use it to encode the binary sequence 11110111110111111111. Find and compare the lengths of the original and encoded binary sequences.
	<div id="2binComp" style="display:none;" class="solution">
		The code is 
		$$00\to 000, 01\to 001, 10 \to 01, 11\to 1.$$
		So, $11 11 01 11 11 01 11 11 11 11 \to 1 1 001 1 1 001 1 1 1 1 $. The original sequences has 20 bits and the encoded one has 14 bits, which is smaller.
	</div>
</div>
<br/>

When the input sequence and the encoded sequence are both binary, we define

$$\text{Compression Ratio}=\frac{\text{Length of original sequence}}{\text{Length of encoded sequence}}$$

For the preceding exercise, the compression ratio (CR) is 

$$\text{CR} = \frac{20}{14}=1.43.$$

Clearly, the higher the compression ratio the better.

If we are not dealing with a file and are instead discussing a probabilistic source of information and a code without actually using it for compression, we can define the compression ratio for the code as 

$$\text{Compression Ratio of a Code}=\frac{1}{\text{Expected Code Length Per Symbol}}\ .$$

For example, for the code of the previous exercise, the compression ratio is

$$\text{CR} = \frac{1}{0.645}=1.55,$$

which is reasonably close to the empirical CR of 1.43.


#### The codebook
When encoding data using Huffman codes or any other code, we need to also store the code, so that we can later use it for decoding. This information is referred to as the _codebook_ or the _dictionary_. In practical problems, the number of bits used for the dictionary is typically much smaller than the length of the sequence, so we usually ignore it when computing the size of the compressed sequence.

### Other coding methods
For a given block size (the number of symbols grouped together), the Huffman code is optimal. But to achieve a good code length, we may have to use large blocks. The issue is that the number of possible blocks quickly grows with the size of the block. For example, for binary, there are 4 possible blocks of length 2 bits, 8 blocks of length 3 bits, and so on. This leads to complex encoding and decoding tasks. In such situations, there are simpler alternatives:


* Shannon-Fano coding – a simple prefix code generator
    * Guaranteed to generate a prefix code that is reasonably good, but not necessarily optimal
    * It relies on the _cumulative distribution function_.

* Arithmetic coding – prefix code generated on the fly from input data
    * Generates codes for sequences of symbols.
    * Asymptotically achieves entropy limit, even if relative frequencies in data are not exactly powers of two.


## Compression of non-iid data

Shannon's result also holds for non-iid data, including Markov chains. In this case, it says if the length of data is long, the best expected code length that can be achieved is essentially equal to the entropy per symbol of the random sequence. We will discuss two approaches for achieving this.

### Huffman codes, again
Huffman codes can also be used when there is dependence between the sequence's symbols, such as an image, where adjacent pixels are likely to be similar. But in this case, we have to create blocks larger than one symbol to be able to take advantage of the dependence between symbols. Let us see two examples:

#### An image
Consider the eye image we saw before:

<div align="center">
<img src="assets/img/eye.png" width="310px"></div>

We can group $2\times 2$ blocks of pixels as blocks for Huffman code. There will be many completely black blocks and some completely white blocks. There will be a few blocks with mixed colors too. The Huffman code will assign short codewords to black and to white blocks and long codewords to mixed blocks, leading to a smaller number of bits than the 744 original bits.

#### A Markov chain

Let us consider the Markov chain with transition matrix:

$$A= \left(\begin{array} 0.9&.1\\.1&.9\end{array}\right).$$

State 1 may for example correspond to cloudy weather and state 2 to sunny weather. To keep our alphabet binary, we use 0 instead of 2. The following sequence of length 50 is generated by this Markov chain:

$$00000000001000000000000111110000000011111111111111$$

We compress it using Huffman coding. We use the data itself to estimate the probabilities rather than the transition matrix of the Markov chain. We group the symbols into blocks of size 2:

$$00, 00, 00, 00, 00, 10, 00, 00, 00, 00, 00, 01, 11, 11, 00, 00, 00, 00, 11, 11, 11, 11, 11, 11, 11$$

Then

$$P(00)=\frac{14}{25},\quad P(11)=\frac{9}{25}, \quad P(01)=\frac1{25},\quad P(10) = \frac1{25},$$

leading to the Huffman code

$$00\to 0, \quad 11\to 10,\quad 01\to 110,\quad  10\to 111.$$ 

Then the sequence can be encoded as 

$$0 0 0 0 0 111 0 0 0 0 0 110 10 10 0 0 0 0 10 10 10 10 10 10 10$$

which has length 38, or 0.76 bits per symbol and a compression ratio of $50/38=1.32$. The entropy of the Markov chain is 0.469 per symbol. If we had a longer chain and used larger blocks, Huffman code would be able to get closer to the entropy.

<div class="exercise">
	Consider a Markov chain with the transition matrix 
	$$B= \left(\begin{array} 0.1&.9\\.9&.1\end{array}\right),$$
	which has produced the following sequence of length 50
    $$01011011010101010101010101010110101010101011011010$$
    Use a Huffman code with an appropriate block size to compress the sequence and compare the length of the resulting sequence with the entropy of the Markov chain and the length of the original sequence.
</div>
<br/>

### Lempel-Ziv, the universal compression method
Suppose we are given a text file to compress. What should we take as symbols? Letters? Words? Sentences?
* If each letter was independent of others, we could take letters as symbols, but text has a lot of structure, repeated patterns, …
* Taking words or sentences as symbols makes probability estimation and encoding much more complex

Lempel-Ziv (LZ) compression does not use or track probabilities. It also operates “on the fly”, reading the data one symbol at a time. In fact, Lempel-Ziv is a universal compression method as it does not need to know the probabilities beforehand and so can be applied to any type of data. It is used in all-purpose compression tools such as gzip. 

LZ vs HC:
* If the file is sufficiently large, LZ is nearly optimal
* If the symbols are independent, Huffman is optimal, for any data size
* LZ is a universal compression method and does not need to know the probabilities in advance.


#### The Lempel-Ziv algorithm
LZ works by identifying sequences of symbols that have appeared before and instead of repeating them, it points to their previous occurrence. The algorithm is given below in detail, but it's optional.
<div class="note" markdown=1>
1. The sequence is divided into "phrases", i.e., the shortest sequences that have not appeared before. 
  * For example, if the sequences is <code>aaabababaaabba...</code>, we divide it as <code>a,aa,b,ab,aba,aab,ba,...</code>. 
    + The first symbol is <code>a</code>, which obviously has not been seen before, so this become a phrase. 
    + The second symbol is <code>a</code>, but this is already a phrase, so we read the next symbol. This gives us <code>aa</code>, which has not been seen before, so <code>aa</code> becomes the second phrase. 
    + The next phrase is <code>b</code>, as <code>b</code> has not appeared before. And so on. 
1. Assign a number to each phrase, from 1 to $C$, in order, where $C$ is the number of phrases. 
  * <code>a</code> $\to$ 1, <code>aa</code> $\to$ 2, <code>b</code> $\to$ 3, <code>ab</code> $\to$ 4, <code>aba</code> $\to$ 5, <code>aab</code> $\to$ 6, <code>ba</code> $\to$ 7
1. If we discard the last element of each phrase, it has occurred before. So we can represent each phrase as <code>(n,s)</code> where <code>n</code> is the index of the aforementioned previous occurrence and <code>s</code> is the last symbol. <code>n</code> is referred to as a pointer. We do this for all the phrases. 
  * For example, for the phrase <code>aab</code>, <code>aa</code> has occurred before as phrase 2. So we can represent <code>aab</code> as the pair <code>(2,b)</code>.
  * We represent phrases that contain a single symbol <code>s</code> as <code>(0,s)</code>.
  * The whole sequence can then be represented as <code>(0,a),(1,a),(0,b),(1,b),(4,a),(2,b),(3,a)</code>.
1. Choose a binary sequences for each possible symbol <code>s</code>. 
  * For example, we may choose <code>a</code> $\to$ 0 and <code>b</code> $\to$ 1.
1. Represent each pair <code>(n,s)</code> by representing <code>n</code> as a binary number and representing <code>s</code> as its binary encoding. 
  * Since the largest pointer is 4, we need 3 bits to represent the pointers.
  * Our sequence then becomes <code>(000,0),(001,0),(000,1),(001,1),(100,0),(010,1),(011,0)</code>.
1. We can remove the parentheses and commas since the length of each part is fixed.
  * Our encoded sequence becomes: <code>0000001000010011100001010110</code>.


In our toy example, the sequence actually became longer. This is because the example is too small. As mentioned before, Lempel-Ziv is optimal when the size of the data is large.
</div>

<br/>



<div class="exercise">
  Write a question that you still have about this section.
</div>
<br/>






































