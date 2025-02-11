---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
---
<script type="text/javascript">
	var DNAColor = {};
	DNAColor['A'] = '<span style="color:brown;">A</span>';
	DNAColor['C'] = '<span style="color:green;">C</span>';
	DNAColor['G'] = '<span style="color:blue;">G</span>';
	DNAColor['T'] = '<span style="color:black;">T</span>';

	var DNACnormal = {};
	DNACnormal['A'] = '<span style="color:brown;">00</span>';
	DNACnormal['C'] = '<span style="color:green;">01</span>';
	DNACnormal['G'] = '<span style="color:blue;">10</span>';
	DNACnormal['T'] = '<span style="color:black;">11</span>';

	var DNAChighA = {};
	DNAChighA['A'] = '<span style="color:brown;">0</span>';
	DNAChighA['C'] = '<span style="color:green;">10</span>';
	DNAChighA['G'] = '<span style="color:blue;">110</span>';
	DNAChighA['T'] = '<span style="color:black;">111</span>';

	var DNAnormal = {};
	DNAnormal['A'] = '00';
	DNAnormal['C'] = '01';
	DNAnormal['G'] = '10';
	DNAnormal['T'] = '11';

	var DNAhighA = {};
	DNAhighA['A'] = '0';
	DNAhighA['C'] = '10';
	DNAhighA['G'] = '110';
	DNAhighA['T'] = '111';
</script>

# Defining and quantifying information: Introduction
Our goal in this chapter is  defining and quantifying information. It may seem at first glance that defining information mathematically and trying to measure it is a theoretical exercise. However, the elegance of the resulting theory is that while the definition is mathematical and abstract, it underlies a wide range of applications from cell phones to data centers.

## Information: three different views 

In this section, we consider three different ways of looking at information: information content of signals; information capacity of storage devices and communication channels; and our intuitive perception of information. The definition of information, which we will provide in the following sections, should be compatible with all three views.

Disclaimer: In this section, we are mostly posing questions and motivating future discussions so some of the statements I make are not 100% mathematically precise.

### Information and the shortest representation of a signal

We have seen before how a digital sequence can be encoded as binary. For example, with the mapping $$A\to00,C\to01,G\to10,T\to11,$$
we can represent the sequence <span id='dna1'></span> as <span id='dna2'></span> (colors are only for clarity and not part of the signal). So we have encoded a DNA sequence of length 8 as a binary sequence of length 16 bits, which we can store in the memory of a computer. Given that we need 16 bits to represent this sequence, it seems reasonable to say that it has at most 16 bits of information.

But we have the freedom to choose the mapping. In particular, we do not need to choose binary representations of the same lengths for all symbols. For example, using the mapping 

$$A\to0,C\to10,G\to110,T\to111,$$

the sequence <span id='dna3'></span> becomes  <span id='dna4'></span>, which has 13 bits. So, when stored on a computer this will take less space (around 20% less). 

Note that even though DNA symbols are mapped to binary sequences of different lengths, we can still recover the DNA sequence from the binary sequence as illustrated by the following exercise.
<div class="exercise">
	Using the mapping \(A\to0,C\to10,G\to110,T\to111\), a DNA sequence is encoded as <span id="dna5"></span>. Find the DNA sequence.
	<button  onclick="showSolution(this,'highAexer')" style="float:right;">Show Solution</button>
	<div id="highAexer" style="display:none;" class="solution">
		<span id="dna6"></span>
	</div>
</div>
<br/>

<script type="text/javascript">
	document.getElementById('dna1').innerHTML=encode('AAATAGCA',DNAColor);
	document.getElementById('dna3').innerHTML=encode('AAATAGCA',DNAColor);
	document.getElementById('dna2').innerHTML=encode('AAATAGCA',DNACnormal);
	document.getElementById('dna4').innerHTML=encode('AAATAGCA',DNAChighA);
	document.getElementById('dna6').innerHTML='ATACACGCAAACC';
	document.getElementById('dna5').innerHTML=encode('ATACACGCAAACC',DNAhighA);
</script>


<span id="dnaseq"></span>
So, there are different ways to represent a sequence in binary. Among these, there is a shortest representation. What is the relationship between the information content of a signal and the length of its shortest representation? If two signals have the same length but one of them can be represented using fewer bits, can we say that it carries less information than the other? The table below provides an example of this with two DNA sequences of length 500. We are able to represent the one on the right with fewer than 1000 bits. Can we say its information content is lower than the one on the left?

<table style="font-family:'Courier New', Courier, monospace;width:1000px;word-break:break-all;" class="tabDefault">
	 <colgroup>
       <col span="1" style="width: 50%;">
       <col span="1" style="width: 50%;">
    </colgroup>
  <tbody>
    <tr>
      <td id="seq1" style="text-align: left;font-size:80%;"></td>
      <td id="seq2" style="text-align: left;font-size:80%;"></td>
    </tr>
    <tr>
      <td id="seq3" style="text-align: left;font-size:61%"></td>
      <td id="seq4" style="text-align: left;font-size:61%;vertical-align:top"></td>
    </tr>
  </tbody>
</table>

<script type="text/javascript">
	var seq1 = 'AGTGACAAATTCTTGCCACGCGGTACGAGAGTCCAATTCACTTGTTAGCATCTACGAGCTGCCCTCCCTATACTCGCAGGGCCGTAAGTTACGCTCAGATTCAACTGCCCTTGGGAGACCAATGCCAACCTCCATGTGTTCGGCTAAAAGGCCATGCATTTCTTAATCCTTTGTCACCGAAATTGTTTATGACTTAGTAACACCCTCCAAAAGAGCAGCAGATGTTTGGGCGTAGCTGTGTCGAGTGCTATAGGGCCGTGTAGAGGATCTCAAATAAAAAGGAAACAGCCGTCGCCTTGAAGCCGAGAACATTCACCGCTTTCCTAAGTCAATGCGTCGATGACGTGGGTACCGTCTCGCTGTACTAACTCGCAGTCAAGCGAGCACGTTTTTTGCAGTCTACCAGCTCGAGGTGTTAATACCGATTGCAGAAACGTCACGTCCTGGCCTCCCGGGCCCACTTGTTTTTACCCATGAAGCACATTAGGCTCAATGTGTAC';
	var seq2 = 'AAATAGCTAAATAGGGAAAGATAAAAGCCAGCACAAAAAAAATTAAATAAGAAAAATTCAAAGAAACCCACACACAACGATGAAAACCGGCAGCATTCCCAAAAGAAAAAATAATTAAAACACCAAAAACAAGATCACAATCCAACCAATATTGAAACACACAGCTTACAACCATCCGGCAATAAATCCAACAACAGGCACCTCGAAGAAAAGGAACACCAAATAAAAAATTACAACTATACCCCCAATAACTCAAATAGCAAAAACAACAACAGTCACATTGACAAAAAAACACCCAAACCAGCTCAACGAAAAAACATCTCTACACCAAACGAGCACATAAAAGAGAAACAAACACATAGAAACCCACCCCTACAACAACGACAGGACCCGAAATCACCCCCCTAAAAAAAGCGTTAACACCGAACCCAACAAGAACACACCAAAAAAGATAGAGGAAGTACAGGAGTCTCAAACGGACAAACAAAAAGCTCCGTTAG';
	document.getElementById('seq1').innerHTML = encode(seq1,DNAColor);
	document.getElementById('seq2').innerHTML = encode(seq2,DNAColor);
	document.getElementById('seq3').innerHTML = encode(seq1,DNACnormal);
	document.getElementById('seq4').innerHTML = encode(seq2,DNAChighA);
</script>

### Information capacity of storage devices and communication channels

Suppose that we have a storage device that can store 1000 bits, but because of noise each bit can flip. (This happens in all storage devices such as hard drives, [flash drives](https://ieeexplore.ieee.org/document/4558857){:target="_blank"}, etc.) For example, suppose that if we write 1000 bits, when we read this data again, on average 10 random bits have been flipped. The _information capacity_ of the device is the amount of information we can store on it _reliably_. But is it possible to store information reliably on a noisy device? If so, how can we determine how much? In our example, we clearly cannot store 1000 bits reliably. How is the amount of information that we can store related to how likely bits are to flip? 

A similar problem arises in the context of communication. For example, the link between a cell tower and a cell phone is almost always noisy. Nevertheless, we are able to communicate reliably over these noisy links. What is the maximum amount of information that we can transmit in unit time while still maintaining reliability?

### Information and perception

Ideally, our mathematical definition of information should be compatible with how we perceive informativeness. Let us consider the following statements:
* Tomorrow the sun will rise in the east.
* It is raining in Seattle.
* It is raining in the Sahara.
<div class="exercise">
	Which statement would you say has more information? Why? 
</div>

You will probably agree that the second statement has more information than the first, while the third has more information than the second. The first statement is obvious, so it carries little if any information for us; we already know this. The second statement is reasonably informative. The third statement is about an event that is very unlikely, so knowing that it has indeed occurred changes our knowledge about the world in a significant way. 

It seems that statements that are obvious or about events that almost surely will happen, carry little information while those that are surprising or report unlikely events, carry more. Our intuition then suggests the following:

<div class="highlight"> Information content is inversely related to probability.</div>

Can we quantify information mathematically in a way that agrees with our intuition? 

## Information theory

The questions that we asked above, and many more, are answered by information theory. Information theory is a mathematical field that studies information and fundamental limits on its transformation, communication, and storage. Information theory was founded by [Claude E. Shannon](https://en.wikipedia.org/wiki/Claude_Shannon){:target="_blank"} in his paper: "[A Mathematical Theory of Communication,](http://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf){:target="_blank"}" in The Bell System Technical Journal in 1948.

Shannon, along with Alan Turing and others, developed the mathematical foundation that makes a device such as an iPhone possible.


### Information theory and probability
The common component in the three contexts above, as you may have noticed, is probability. 
* In encoding signals, if a symbol is more likely, we can choose to represent it with fewer bits compared with symbols that are less likely, as we did [above](#information-and-the-shortest-representation-of-a-signal). 
* In information capacity, the probability of bit flips determines how much information we can store on a device.
* And finally, our perception of informativeness is also affected by the probability of the event: surprising statements carry more information.

Hence, to understand information better, we will first learn about probability theory in this chapter. We will then return to information theory, including data compression and reliable data storage/communication.
<div class="exercise">
  Write a question that you still have about this section.
</div>
<br/>