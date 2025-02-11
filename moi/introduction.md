---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
---
# Welcome to Mathematics of Information
## What is the course about?
This course focuses on the mathematical foundations needed to understand the principles governing the storage, processing, and transmission of information (on any device). It will allow us, for example, to better understand
* How does a cellphone, which has mostly digital components, interact with an analog world?
* How does it store different types of data (music, video, apps) reliably, when the storage device itself (flash memory) is unreliable? 
* What makes it possible to stream music over noisy wireless channels that sound so good (well, most of the time)? 


#### Topics include: 
* Mathematical representation of information 
* Probability, uncertainty, and information
* Linear/abstract algebra and error correction 
* Spectral analysis and communication 
* Number theory and encryption 
* Boolean algebra and computation

## Mathematics vs Engineering:
The course aims to make abstract and/or advanced mathematics, e.g., complex numbers and finite fields, tangible through applications in information science and technology.
We will learn the basics of several branches of mathematics, e.g., probability, linear algebra, Fourier analysis. Based on each, we will develop a theory related to information, e.g., communication, privacy. 

Given the history of the course, I need to explain how it balances mathematics with engineering applications. We will study both the mathematical foundations and the engineering solutions enabled by these foundations, but our focus will be on the former. **Hence, while the topics are motivated by application, we will also discuss material without direct applications, with the goal of providing solid foundations for the topics we study.**


<img src="https://imgs.xkcd.com/comics/purity.png" width="1000">
Credit: <a href="https://xkcd.com/1683/" target="_blank">XKCD</a>

Although we are at the right end of the spectrum, what we study has many applications in electrical and computer engineering and computer science.



 
## What is information?
<div class="highlight">
Information describes the state of the world around us. This is usually in the form of <strong>identifying one state among a set of possible states</strong>.
</div>

Mathematically, we can consider a set $$\mathcal{X}$$ of all possibilities and a variable $$X$$ that indicates a realization (i.e., an actual occurrence). For example, for weather we may let

<center>\(\mathcal X=\{\)&#x2600;&#xFE0F;, &#x2601;&#xFE0F;, &#x26C5;&#xFE0F;, &#x1F327;&#xFE0F;, &#x2744;&#xFE0F;\(\}\)</center>

and then "$$X=$$ &#x2601;&#xFE0F;" indicates cloudy weather on a given day.

Information is closely related to uncertainty, and by extension probability.

<div class="exercise">
  For the following cases, describe the set of all possibilities. :trophy: (optional): Try to come up with rough estimates of the number of possibilities.
  <button  onclick="showSolution(this,'solID')" style="float:right;">Show Solution</button>
  <ol type='i'>
    <li> a person’s DNA sequence </li>
    <li> outside temperature <em>measured</em> by a thermometer </li>
    <li> loudness of someone's voice at a given time instant</li>
    <li> color of a pixel in an image</li>
    <li> the contents of a page of a novel </li>
  </ol>

  <div id="solID" style="display:none;" class="solution">
    <ol type="i">  
   <li>Human DNA is a sequence of approximately 3.2 billion <q>bases</q> long, where each base is one of the following \(A,C,G,T\), each representing a certain chemical structure. So the set of possibilities is a sequence of length \(3.2\times 10^9\) with symbols from the set \(\{A,C,G,T\}\). <br/>
   :trophy: The number of such sequences is approximately 1 followed by 2 billion 0s! (We will later discuss how this and similar counting problems are solved.)</li>
   <li>Assuming the thermometer displays 1 decimal place, the set of possibilities consists of numbers of the form \(\pm xxx.x\). (The true temperature is a real value that can't be written down.) :trophy: Assuming temperatures from -30 to 140, there are around 1700 possibilities. </li>
   <li>Loudness is air pressure, so theoretically it can be any positive real number. :trophy: The number of possibilities is infinite.</li>
   <li>Color is our perception of the wavelength of light. In an image it is represented in different ways, for example, as three values for red, blue, and green, each with 256 levels. :trophy: The number of possibilities is in the millions.</li>
   <li>A typical page contains around 3000 characters of English alphabet. :trophy: Assuming there are 100 symbols (capital and small letters, punctuation, new line, etc.), there are \(10^{6000}\) possibilities. </li>
 </ol>
 As we see above, the number of possibilities can be very large. For comparison, less than \(10^{18}\) seconds have passed since the big bang.
  </div>
</div>
<br/>


We will study information in multiple ways:
* As numbers representing signals, audio, images, or video
* Through probability
* As related to noise and errors
* Privacy and protecting information
* Via processing using a computer


## Some applications of what we will study
The mathematical concepts have many applications in how *any* device that senses, transmits, or stores information works. Some of the applications are:
* Sensing, for example in a camera: sampling, quantization, compression, ...
* Streaming music: digitization and reconstruction, spectrum, communication, ...
* Data storage in flash and hard drives: data compression, encoding and decoding, error correction, ...
* Computation in a processor: logic gates, computation via physics, ...
* Privacy and security: encryption, ...

<div class="exercise">
<strong>Reliable data storage</strong>
<p>I have 4TB of vitally important data that I need to store reliably. I have put this data on 4 1TB hard drives. It is possible for these hard drives to fail. </p>
 
<hr/>
<p>i: If I have a bunch of empty drives, do you think I can do something to make sure if one drive fails, I don’t lose any data? If so, what is the smallest number of extra hard drives needed?</p>


<button onclick="Q1(this.id)" id="A">A</button> 1 &emsp;
<button onclick="Q1(this.id)" id="B">B</button> 2 &emsp;
<button onclick="Q1(this.id)" id="C">C</button> 3 &emsp;
<button onclick="Q1(this.id)" id="D">D</button> 4 &emsp;
<button onclick="Q1(this.id)" id="E">E</button> It's impossible &emsp;

<p style="color:blue" id="Q1ans"></p>



<script>
  var choicesQ1 = ["A","B","C","D","E"];
  var answersQ1 = [
  "&#9989;  We will discuss how later in the course.",
  "&#10060; Choose another answer.",
  "&#10060; Choose another answer.",
  "&#10060; You are probably suggesting copying each drive. This works but it's not the best possible.",
  "&#10060; It is possible to do this; see choice D for example."
  ];
  function Q1(id){
    let i = choicesQ1.indexOf(id);
    document.getElementById("Q1ans").innerHTML = answersQ1[i];
  }
</script>

<p>ii: I’ve bought cheap drives, so two of them can fail at the same time. How many  drives (in addition to the original 4) do you think  I need so that I don’t lose data if that happens?</p>

<p>
<button onclick="Q2(this.id)" id="A">A</button> 1 &emsp;
<button onclick="Q2(this.id)" id="B">B</button> 3 &emsp;
<button onclick="Q2(this.id)" id="C">C</button> 8 &emsp;
<button onclick="Q2(this.id)" id="D">D</button> 12 &emsp;
<button onclick="Q2(this.id)" id="E">E</button> It's impossible &emsp;</p>

<p style="color:blue" id="Q2ans"></p>



<script>
  var choicesQ2 = ["A","B","C","D","E"];
  var answersQ2 = [
  "&#10060; For example, if the extra drive and one of the original drives fail, we cannot recover all of the lost data.",
  "&#9989; We will discuss how this can be done with 3 extra drives.",
  "&#10060; You are probably thinking to copy each drive twice. This works but it's not the best possible.",
  "&#10060; Choose another answer.",
  "&#10060; It is possible to do this; see choice C for example."
  ];
  function Q2(id){
    let i = choicesQ2.indexOf(id);
    document.getElementById("Q2ans").innerHTML = answersQ2[i];
  }
</script>

<hr/>

iii: Can you guess how the answers to the two previous questions can be related to linear algebra?


</div>

## Course overview

Now let's see an overview of what we'll see in the course. In each case, we'll start with a question related to the applications of the mathematical topic.

### Part 1: Numbers and signals

_Q: The real world is, for practical purposes, analog and continuous. How is it represented on a computer, which is digital?_

Topics:

* Set theory
* Sets of numbers and operations
* Countable and uncountable sets
* Digital and analog signals
* Number representations
* Quantization
* Analog-to-digital conversion


### Part 2: Probability theory & Information

_Q: The human genome is a sequence of 3 Billion bases of {A,C,G,T}. How much storage do we need to store someone’s DNA (standalone)?_

Topics:

* Probability, likelihood, uncertainty, and information
* Counting
* Probability distributions
* Expected value
* Independence and conditional distributions
* Repeated (e.g., Bernoulli) trials
* Entropy, mutual information, and capacity
* Data Compression
* Mathematics of communication


### Part 3: Linear algebra
_Q: Hard drives, flash drives, WiFi, and cellphone signals all suffer from noise. How is it then possible to store and transmit information without errors?_

Topics:
* Vectors and matrices
* Matrix operations
* Matrix equations
* Finite fields
* Error detection and error correction
* Parity checking and Hamming codes



### Part 4: The frequency domain

_Q: If we all start talking at the same time, no one will be able to understand anything. How is it possible for a large number of cell phones to communicate simultaneously?_

Topics:

* Frequency and spectrum
* Complex numbers
* The Fourier transform
* Filtering signals and images
* Sampling and reconstructing signals
* Multiple-access communication and orthogonal coding
* Amplitude, frequency, and phase modulation


### Part 5: Number theory

_Q: Can we talk privately in public?_

Topics:
* Number systems and binary arithmetic
* Number theory and encryption
* Divisibility, prime numbers, congruences
* Public key cryptography and Chinese remainder theorem


### Part 6: Boolean algebra
_Q: How to compute with physics?_

Topics:
* Logic
* Boolean algebra
* Digital Computation





### Some other comments:
* **Read all course policies** on the course info document on Collab/Overview. 
* Review the material often. Don’t wait for exams. 
* Due to the broad, yet particular, nature of this class, we will not be following a specific textbook. However, occasionally links to external resources will be provided.

### Conventions
To improve clarity, you'll see the following environments in the notes:
<div class="exercise">
  These are examples and exercises. Optional exercises are indicated by (optional) or :trophy:. Sometimes a solution is available but initially, hidden. You can view it by clicking the button on the right.
  <button  onclick="showSolution(this,'exerEnv')" style="float:right;">Show Solution</button>

  <div id="exerEnv" style="display:none;" class="solution">
    2 + 2 = 4. :trophy: 2+3 = 5.
  </div>
</div>
<br/>

<div class="highlight">
  This is a highlight, representing important material.
</div>
<br/>
<div class="note">
<span class="note_emoji"></span>These are extra material that are not part of the course, but you are encouraged to read them.
</div>
<br/>
<div class="hw">
  These are HW problems. They may be included in a HW problem set posted on Collab.
</div>
<br/>



