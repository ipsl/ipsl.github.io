---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
---

# Random variables, distributions, and independence
In this section, we will first introduce random variables, which will enable us to model diverse random experiments in a unified mathematical framework. We will also learn about probability distributions, which are useful for describing and predicting how likely random events are to occur, and expected values which summarize distributions as a single value. <!-- Histogram plots like the red, green, and blue color plots for the image above provide empirical probability distributions for real-world signals such as digital images.-->
<!-- Image credit: Daniel Schwen/Wikipedia. -->


## Random variables

Sample spaces of random experiments are fairly arbitrary objects (e.g., {heads, tails}, values showing on dice, playing cards). This generality makes probability theory powerful. But unfortunately, such generality is also inconvenient – mathematics works best with concrete definitions. 

So how can we develop a uniform framework for coin flips, die rolls, card draws, etc.? We define random variables to represent random outcomes. 
A random variable (RV) assigns a **real number** to any possible outcome of a trial or experiment. Sometimes the RV can be defined in a natural way for example for a die roll, the random variable can be defined as the number showing on the die. In other case, we have to define an arbitrary mapping such as $$heads \to 0, tails \to 1$$. 

We actually represented outcomes with numbers with foresight in the last section; we just didn't mention the term random variables (it's a good idea to review [this table](probability_basics.html#experiment_table) and the examples after it).

Random variable are shown by capital letters, such as $$X$$. When a particular outcomes occurs the random variable takes the corresponding value. For example, let $$X$$ be the random variable defined for a coin toss, where we assign $$heads\to 0, tails\to 1$$. Then if heads shows, we say $$X=0$$ while if tails shows we say $$X=1$$.

Random variables allow us to translate general ideas about probability to **numeric concepts**:
* Finite or discrete sample space: finite or discrete range of random variables (The range of a random variable is the set of values it can take)
* Continuous sample space: continuous range of random variable
* Events as sets of outcomes: events as sets of numbers, intervals, or collections of intervals, on real number line
* Probability function on events: probability function on intervals, or ranges, on real number line


A random variable whose range is discrete, is called a discrete random variable and those with continuous ranges are called continuous random variables.
<div class="exercise">
Define a random variable for<ul>
	<li>a birthdate (discrete)</li>
	<li> a temperature (continuous)</li>
</ul>
</div>

Consider a random variable $$X$$, defined as the number showing on a die. We can now represent events as membership in a set of numbers. For example, the event that an odd number shows on the die can be written as $$X\in\{1,3,5\}$$ and its probability can be written as $$P(X\in\{1,3,5\}).$$
<div class="exercise">
A die is rolled and the number showing on it is denoted by \(X\). Find the probability of the events below.
<p>
\(P(X=2)=\)  <span id="x2" style="visibility:hidden;" class="solution"> \(\frac16\)</span>, 
\(\qquad P(3 \leq X \leq 5)=\) <span id="x35" style="visibility:hidden;" class="solution"> \(P(X\in\{3,4,5\})=\frac36=\frac12\)</span>
<button onclick="showSolution(this,['x2','x35'])" style="float:right;">Show solution</button>
</p>
</div>
<br/>


When an experiment has more than one component, for example, when an action is repeated, we can describe the outcomes as a tuple of random variables. For example, suppose a die is rolled twice. Let the result of the first roll be denoted by $$X$$ and the result of the second roll be denoted by $$Y$$. We can represent each outcome with a pair of numbers, i.e., $(X,Y)$. For example, (2,3) represents the first die showing 2 and the second die showing 3.

Random variables can also be functions of other random variables. Continuing the two dice example, we can define a third random variable as the sum of $$X$$ and $$Y$$, i.e., $$Z=X+Y$$.

<div class="exercise">
	What is the range of the random variable \(Z\) defined above (i.e., the set of possible values)? What is the probability of \(Z=3\). (I strongly recommend  reviewing <a href="probability_basics.html#dicePair">this example</a> and also <a href="probability_basics.html#dicePair2">this example</a>.)
	<button  onclick="showSolution(this,'Z')" style="float:right;">Show Solution</button>
	<div id="Z" style="display:none;" class="solution">
		The smallest value for \(Z\) is 2, which occurs when \(X=Y=1\). It largest value is \(12\) which occurs when \(X=Y=6\). So the range of \(Z\) is \(\{2,3,4,5,6,7,8,9,10,11,12\}\). There are two cases where \(Z=3\), i.e., \(X=1,Y=2\) and \(X=2,Y=1\). So the probability is \(\frac 2{36}=\frac1{18}\).
	</div>
</div>
<br/>

<div class="exercise">
	A fair coin is flipped twice (all outcomes are equally likely). Let \(X\) be the number of heads. What is \(P(X=1)\).
     <button  onclick="showSolution(this,'coin')" style="float:right;">Show Solution</button>  
     <div id="coin" style="display:none;" class="solution">
     The sample space is $\Omega = \{HH,HT,TH,TT\}$. Then $P(X=1)=P(\{HT,TH\})=2/4=1/2$.
     </div>
</div>
<br/>

<div class="exercise">
	A binary sequence of length 3 is chosen at random with all choices equally likely. Let \(X\) be the number of 0s and \(Y\) be the number of 1s in this sequence. What is the probability that \(X>Y\)?
	<button  onclick="showSolution(this,'X>Y')" style="float:right;">Show Solution</button>
	<div id="X>Y" style="display:none;" class="solution">
		The possibilities are 
		\begin{align*}
		000 \to X=3,\ & Y=0\\
		001 \to X=2,\ & Y=1\\
		010 \to X=2,\ & Y=1\\
		100 \to X=2,\ & Y=1\\
		011 \to X=1,\ & Y=2\\
		101 \to X=1,\ & Y=2\\
		110 \to X=1,\ & Y=2\\
		111 \to X=0,\ & Y=3.
		\end{align*}
		So the event \(X>Y\) consists of sequences 000,001,010,100 so its probability is \(4/8=0.5\). We could have also arrived at this by symmetry. Either \(X>Y\) or \(Y>X\) as \(X=Y\) is not possible. By symmetry, the probability must be \(1/2\).
	</div>
</div>
<br/>

<!-- hidden slides in original document not converted -->
<!-- ### Probability functions
Probabilities assigned to events satisfy a set of important axioms:
* A probability of an event is a non-negative real number between 0 and 1. (higher = more likely)
* The probability of the sample space $$\Pr(\Omega) = 1$$.
* For a collection of events $$E_1, E_2, \cdots$$, that are *mutually exclusive*: $$\Pr(\cup_n E_n) = \sum_n \Pr(E_n))$$.
In this note we are going to translate these probability axioms from outcomes to random variables, from events to intervals. Instead of talking about $$P(heads)$$, we will talk about $$P(X=1)$$. 

Probability functions
Recall: the probability function is defined on a collection of events.
This collection has certain requirements:
1)2)3)

It turns out this is not enough to guarantee we can talk about probabilities for random variables.
To do that, we would need what’s called a Borel σ-algebra and a way of constructing set theoretic topologies containing minimal closed collections of “open sets”.
Instead, what we will do is work backwards and assume that any interval of random variable X we want to measure has a well-defined event. It turns out topological theory would lead to this anyway.

7
Cumulative distribution functions
 
8
Image credit: Incnis Mrsi/Wikipedia.
Cumulative distribution functions
Example: temperature range in the classroom
Example: sum of values from a roll of a pair of fair 6-sided dice
9
Cumulative distribution function
-->

When dealing with more than one random variable, say $X$ and $Y$, we can write $P(X=i,Y=j)$ to indicate the intersection of the two events $X=i$ and $Y=j$, i.e., $P(X=i\cap Y=j)$.


## Describing probabilities: distributions
### Probability over discrete sets
Suppose a die is rolled twice, with all outcomes equally likely. Consider the random variable $Z$ defined as the sum of the two die rolls. The sample space, with all outcomes equally likely, is 

<div>
\begin{equation*}
\Omega = \{(x,y):x,y\in \mathbb N, 1\le x \le 6, 1\le y \le 6\}
\end{equation*}
</div> 

and the range of the random variable $$Z$$ is the set {2,3,4,5,6,7,8,9,10,11,12}. We can find the probability of each of these values: 
<div>
	\begin{align*}
		P(Z=2) &= 1/{36} & \text{since }&\quad \{Z=2\}=\{(1,1)\}\\
		P(Z=3) &= 2/{36} & \text{since }&\quad \{Z=3\}=\{(1,2),(2,1)\}\\
		P(Z=4) &= 3/{36} & \text{since }&\quad \{Z=4\}=\{(1,3),(2,2),(3,1)\}\\
		P(Z=5) &= 4/{36} & \text{since }&\quad \{Z=5\}=\{(1,4),(2,3),(3,2),(4,1)\}\\
		P(Z=6) &= 5/{36} & \text{since }&\quad \{Z=6\}=\{(1,5),(2,4),(3,3),(4,2),(5,1)\}\\
		P(Z=7) &= 6/{36} & \text{since }&\quad \{Z=7\}=\{(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\}\\
		P(Z=8) &= 5/{36} & \text{since }&\quad \{Z=8\}=\{(2,6),(3,5),(4,4),(5,3),(6,2)\}\\
		P(Z=9) &= 4/{36} & \text{since }&\quad \{Z=9\}=\{(3,6),(4,5),(5,4),(6,3)\}\\
		P(Z=10) &= 3/{36} & \text{since }&\quad \{Z=10\}=\{(4,6),(5,5),(6,4)\}\\
		P(Z=11) &= 2/{36} & \text{since }&\quad \{Z=11\}=\{(5,6),(6,5)\}\\
		P(Z=12) &= 1/{36} & \text{since }&\quad \{Z=12\}=\{(6,6)\}\\
	\end{align*}
</div>

Now that we have these probabilities, we can plot $$P(Z=z)$$, for $$z\in\{2,3,4,5,6,7,8,9,10,11,12\}$$, which you can see below:
<center><div id="box" class="jxgbox" style="width:600px; height:300px;"></div></center>
<script>
JXG.Options.text.useMathJax = true;
var b2 = JXG.JSXGraph.initBoard('box', {boundingbox: [-1, .2, 14, -.05], axis: true, showCopyright: false, showNavigation: false});
var pmf = [1,2,3,4,5,6,5,4,3,2,1];
for (var i=2; i<13; i++){
	var p = b2.create('point',[i,pmf[i-2]/36], {name:'',size:2,color:'blue'});
	b2.create('line',[[i,0],p],{straightFirst:false, straightLast:false, strokeWidth:2});
}
b2.create('text',[0.1,.18,'$$P(Z=z)$$'],{color:'blue',fontSize:18});
b2.create('text',[13.5,.03,'$$z$$'],{color:'blue',fontSize:18});
</script>

The function $$P(Z=z)$$ is the **distribution** of $$Z$$. It _determines the probability of each value that $$Z$$ can take_. This is useful for a few reasons. First, after we determine the distribution, we no longer need to recalculate the probabilities of outcomes of interest. Second, we can calculate the probabilities of different events by summing the probabilities of the relevant outcomes. Finally, as we will see, it will allow us to define quantities such as the expected value, which help us better understand the behavior of $$Z$$.

<div class="exercise">
     <button  onclick="showSolution(this,'twodice')" style="float:right;">Show Solution</button>
Let $Z$ be the sum of two die rolls as above.
<ul>
	<li>Find \(P(Z>10)\).</li>
	<li>What is the most likely value?</li>
</ul>
         <div id="twodice" style="display:none;" class="solution">
         \begin{equation*}
            P(Z>10) = P(Z=11)+P(Z=12) = 3/36 = 1/12.
         \end{equation*}
         As we can see in the distribution in the graph, the most likely value is $Z=7$.
         </div>
</div>

In this example, our random variable was discrete. The distribution of a discrete random variable is called a **probability mass function (pmf)**. Note that pmf’s **do not** apply to continuous random variables. We will discuss continuous probability distributions later, albeit much more briefly.

For brevity, instead of $$P(X = x)$$ we may write $$P(x)$$ or $$p(x)$$.
 
<div class="exercise">
 	Let  \(X\) denote the number showing when a die is rolled. Plot the distribution of \(X\).
 	<button  onclick="showSolution(this,'dieDist')" style="float:right;">Show Solution</button>
 	<div id="dieDist" style="display:none;" class="solution">
 		Since all outcomes are equally likely, \(P(X=x)=1/6\) for \(x\in\{1,2,3,4,5,6\}\).<br/>
   <br/>      
 		<center><div id="box3" class="jxgbox" style="width:600px; height:300px;"></div></center>
<script>
JXG.Options.text.useMathJax = true;
var b3 = JXG.JSXGraph.initBoard('box3', {boundingbox: [-1, .22, 7, -.05], axis: true, showCopyright: false, showNavigation: false});
for (var i=1; i<7; i++){
	var p = b3.create('point',[i,1/6], {name:'',size:2,color:'blue'});
	b3.create('line',[[i,0],p],{straightFirst:false, straightLast:false, strokeWidth:2});
}
b3.create('text',[0.1,.21,'$$P(X=x)$$'],{color:'blue',fontSize:18});
b3.create('text',[6.5,.03,'$$x$$'],{color:'blue',fontSize:18});
</script>
 	</div>
 </div>
 <br/> 



<div class="exercise">      <button  onclick="showSolution(this,'threeBits')" style="float:right;">Show Solution</button>
A binary sequence of length 3 is chosen at random with all choices equally likely. Let $X$ be the number of 0s this sequence.
<ul>
	<li>Find the pmf of \(X\).</li>
	<li>\(P(X\ge 1)\)</li>
	<li>What is the most likely value(s)?</li>
</ul>
<div id="threeBits" style="display:none;" class="solution">
The sample space is $\Omega=\{000,001,010,011,100,101,110,111\}$. We thus have 
    \begin{align*}
        P(X=0) &= 1/{8} & \text{since }&\quad \{X=0\}=\{000\}\\
        P(X=1) &= 3/{8} & \text{since }&\quad \{X=1\}=\{001,010,100\}\\
        P(X=2) &= 3/{8} & \text{since }&\quad \{X=2\}=\{011,101,110\}\\
        P(X=3) &= 1/{8} & \text{since }&\quad \{X=3\}=\{111\}.
    \end{align*} 
             <center><div id="box31" class="jxgbox" style="width:400px; height:200px;"></div></center>
    <script>
JXG.Options.text.useMathJax = true;
var b31 = JXG.JSXGraph.initBoard('box31', {boundingbox: [-1, .5, 4, -.05], axis: true, showCopyright: false, showNavigation: false});
var pmf = [1,3,3,1];
for (var i=0; i<4; i++){
    var p = b31.create('point',[i,pmf[i]/8], {name:'',size:2,color:'blue'});
    b31.create('line',[[i,0],p],{straightFirst:false, straightLast:false, strokeWidth:2});
}
b31.create('text',[0.1,.5,'$$P(X=x)$$'],{color:'blue',fontSize:18});
b31.create('text',[3.7,.08,'$$x$$'],{color:'blue',fontSize:18});
</script>
<br/>
$P(X\ge 1 ) = 1-P(X=0) = 7/8.$

$X=1$ and $X=2$ are the most likely values. 
</div>
</div>


## Independence
Suppose we have a fair die, which when rolled has equal probability of showing each of the numbers 1 to 6, and a fair coin with equal probability of heads and tails. Let $X$ denote the number showing on the die and $Y$ be equal to 0 if heads shows and equal to 1 if tails shows. If you know what $X$ is, does that provide any information about $Y$? It doesn't seem so. For example, if $X=4$, that doesn't affect the probability of $Y=0$. The latter probability is still $1/2$. 


Two random variables $X$ and $Y$ are called **independent** if the value of one does not affect the other. 


We described above what independence intuitively mean. What about a mathematical definition? 

<div class='highlight'>
Two random variables $X$ and $Y$ are called <strong>independent</strong> if for any possible values $i$ and $j$,
$$P(X=i,Y=j) = P(X=i)P(Y=j).$$
</div>

This definition may seem strange at first sight but it agrees with our intuitive understanding of independence. For example, what is the probability $P(X=4,Y=0)$, with $X$ and $Y$ defined as above?  The mathematical definition of independence says if $X$ and $Y$ are independent, as we believe they are, then 

$$P(X=4,Y=0)=P(X=4)\times P(Y=0)=1/6\times1/2=1/12.$$ 

Suppose the experiment is performed many many times. Would we intuitively expect to see $X=4,Y=0$ in a twelfth of the trials? Yes!  In 1/6 of the trials, we would expect to see $X=4$. Since the coin doesn't care about the die, among the trials in which $4$ shows, in about half of them the coin should show heads ($Y=0$). So overall, in $1/6\times1/2$ of the trials, we would expect to see both $X=4$ and $Y=0$. 

Let's give this a try:

<div class="exercise">
	Click the button below to simulate 60 die roll and coin flip trials (heads are shown with 🙂 and tails with 🏛️). In what fraction of the trials do you observe a 4? In what fraction do you observe heads? In what fraction do you observe both 4 and heads?
	<button  onclick="showSolution(this,'prb5')" style="float:right;">Show Solution</button>
	<div id="prb5" style="display:none;" class="solution">
		In my experiment, I observed 11 4s, 36 heads, and 7 cases with both 4 and heads. So equation we need for independence nearly holds:
		$$\frac{11}{60}\times\frac{36}{60}=0.110\simeq \frac7{60} = 0.117.$$
	</div>
</div>

<br/>
<div style="text-align: center;"><button onclick="rollDieFlipCoin('dieRoll2')">Roll Die and Flip Coin</button></div>

<span id='dieRoll2'></span>

<script type="text/javascript">
	function rollDieFlipCoin(id){
		document.getElementById(id).innerHTML='';
		var a =b =c=0;
		var cl;
		for (var i=0;i<60;++i){
			var face = Math.floor(getRandomReal(0,6));
			var flip = Math.floor(getRandomReal(0,2));
			if (face==3 && flip==0) c += 1;
			if (face==3) {
				a += 1;
				cl = 'color:brown;'
			} else {
				cl = '';
			}
			if (flip==0) b += 1;
			document.getElementById(id).innerHTML+='<span style="font-size: 150%;'+cl+'">'+DieFaces[face]+'</span>'+'<span style="font-size: 100%;">'+coinFaces[flip]+'</span>&nbsp;&nbsp; ';
		}
	console.log(a,b,c);
	}
</script>
<br/>


<div class="exercise">
	Suppose two dice are rolled, with all outcomes equally likely. Let $X$ be the first die, $Y$ be the second die, and \(Z\) be their sum.
<ul>
	<li>Show that $X$ and $Y$ are independent (using the mathematical definition and the fact that all outcomes are equally likely).</li>
	<li>Show that $Z$ and $X$ are not independent by considering the probability $P(X=1,Z=3)$.</li>
</ul>
Note that to prove independence you need to prove it for all possible values, but to prove that two random variables are not independent, it suffices to show that the equality in the definition does not hold for one pair of values.
	<button  onclick="showSolution(this,'indepDice')" style="float:right;">Show Solution</button>
	<div id="indepDice" style="display:none;" class="solution">
	We'll only solve the first part. For each $1\le i\le 6, 1\le j\le 6$, 
	\begin{align*}
	P(X=i) &= 1/6,\\
	P(Y=j) &=1/6,\\
	P(X=i,Y=j) & = 1/36.
	\end{align*}	
	So 
	$$P(X=i,Y=j) = P(X=i)P(Y=j),$$
	proving independence.
	</div>
</div>


<!--
<div class="exercise">
Why \(P(A \cap B) = P(A)P(B)\)? 
</div>

<div class="exercise">
Two random variables are uncorrelated if \(E[(X-\mu_X)(Y-\mu_Y)] = 0\). Independent random variables are also uncorrelated, but the converse frequently is not true. Why?
</div>
-->


The definition of independence also extends to events:


<div class='highlight'>
Two events $A$ and $B$ are called <strong>independent</strong> if $P(A\cap B) = P(A)P(B).$ 
</div>


Sometimes the components of an experiment are physically independent from each other, for example, when two dice are rolled, one by one. In such cases, independence is very natural. But independence also may be the case when the two events are physically related or may result from a single action. For example, consider a deck of cards from which you draw a card at random. The color of the card could be red or black; its suit can be heart, diamond, club or spade; and its rank may be $$A, 2, 3, 4, \cdots, J, Q, K$$. Let's check the independence of a few events:
* 'heart' and 'ace' are independent:

$$P(heart) = \frac14,\quad P(ace) = \frac1{13},\quad P(heart \cap ace) = \frac1{52} = \frac14 \cdot \frac1{13}$$

* 'red' and 'heart' are not independent:

$$P(red) = \frac12,\quad P(red \cap heart) = \frac14 \neq \frac12 \cdot \frac14$$

* 'black' and 'heart' are not independent:

$$P(black) = \frac12, \quad P(black \cap heart) = 0 \neq \frac12 \cdot \frac14$$

* 'ace' and 'red' are independent:

$$P(ace \cap red) =\frac2{52} = \frac1{13} \cdot \frac12.$$

The examples above show that color and suit are not independent. Since the first example works for any rank, not just ace, and for any color, not just red, the rank and color are independent. Similarly, rank and suit are independent.

<div class="exercise">
	Let $A$ denote the probability of rain and let $B$ denote the probability that UVa wins in a given basketball game. We can assume $A$ and $B$ are independent and $P(A)=0.3$, $P(B)=0.8$. Find 
		<button  onclick="showSolution(this,'rainIndep')" style="float:right;">Show Solution</button>
	<ul>
		<li> $P(A\cap B).$</li>
		<li> $P(A\cup B).$</li>
	</ul>
	<div id="rainIndep" style="display:none;" class="solution">
	<ul>
		<li> $P(A\cap B)=.3\times .8=0.24.$</li>
		<li> $P(A\cup B)=P(A)+P(B)-P(A\cap B) = .8+.3-.24=0.86.$</li>
	</ul>
	</div>
</div>
<br/>


<div class="exercise">
	Show that if $A$ and $B$ are independent, then $A$ and $B^c$ are also independent.
	<button  onclick="showSolution(this,'compIndep')" style="float:right;">Show Solution</button>
	<div id="compIndep" style="display:none;" class="solution">
\begin{align*}
P(A)P(B^{c}) & =P(A)\left(1-P(B)\right)\\
 & =P\left(A\right)-P\left(A\cap B\right)\\
 & =P\left(A\setminus B\right)\\
 & =P\left(A\cap B^{c}\right)
\end{align*}
where we have used <a href="probability_basics.html#setMinus">this fact</a> for the third equality.
	</div>
</div>
<br/>

 <!-- mutually exclusive is not independant. -->

**Events defined using random variables:** If two random variables $X$ and $Y$ are independent, any event defined based on these will also be independent. (This is an important result but we will not prove it.) For example, if $X$ and $Y$ are two independent die rolls, then 

$$P(X<4,Y=3) = P(X<4)P(Y=3)=\frac36\times\frac16=\frac3{36}=\frac1{12}.$$ 

Specifically, $X<4,Y=3$ corresponds to the event $$\{(1,3),(2,3),(3,3)\}$$.


What about **more than two random variables**?
* We can talk about the independence of any pair of random variables.
* We can talk about independence among any group of random variables:
$$P( X=x, Y=y, Z=z,\cdots) = P(X=x)P(Y=y)P(Z=z)\cdots$$
* If an entire group of random variables are independent, we say they are *mutually independent*.
  - Mutual independence implies pairwise independence, but the converse is not true.
<!-- looks like a coin flip example inset text here -->


### Bernoulli and binomial distributions
#### Bernoulli distribution
The distribution of a random variable $X$ that takes only two values, typically 0 and 1, is called a Bernoulli distribution, where the probability of 1 is usually denoted by $p$, i.e., $p=P(X=1)$. Such a random variable results from an experiment with two outcomes such as flipping a coin, playing a game (no draw), performing any task that may lead to success or failure, etc. The distribution is determined in full by  $p$:

$$P(X=1) = p, \qquad P(X=0) = 1-p.$$

As an example, for $p=0.3$, the plot of the pmf is given below.
 	
 <center><div id="box4" class="jxgbox" style="width:400px; height:200px;"></div></center>
<script>
JXG.Options.text.useMathJax = true;
var b4 = JXG.JSXGraph.initBoard('box4', {boundingbox: [-.5, 1, 1.5, -.15], axis: true, showCopyright: false, showNavigation: false});
var p = b4.create('point',[0,.3], {name:'',size:2,color:'blue'});
b4.create('line',[[0,0],p],{straightFirst:false, straightLast:false, strokeWidth:2});
var p = b4.create('point',[1,.7], {name:'',size:2,color:'blue'});
b4.create('line',[[1,0],p],{straightFirst:false, straightLast:false, strokeWidth:2});
b4.create('text',[0.05,.91,'$$P(X=x)$$'],{color:'blue',fontSize:18});
b4.create('text',[1.4,0.15,'$$x$$'],{color:'blue',fontSize:18});
</script>

If the distribution of $X$ is Bernoulli with probability of 1 equal to $p$, we write $X\sim\text{Bernoulli}(p)$. The most common case is $p=1/2$ resulting from a fair coin.

#### Binomial distribution

An archer hits the target with probability $p$. She participates in a competition that involves shooting three times and we can assume each shot is independent from the others. Let $X$ denote the number of times she hits the target. What is the distribution of $X$? 

Let's show each outcome as a binary sequence of length 3, with 1 denoting hitting the target. We have

<div>\begin{align*}
\left\{ X=0\right\}  & =\left\{ 000\right\} \\
\left\{ X=1\right\}  & =\left\{ 001,010,100\right\} \\
\left\{ X=2\right\}  & =\left\{ 011,101,110\right\} \\
\left\{ X=3\right\}  & =\left\{ 111\right\} 
\end{align*}</div>

Let us now find the probability of each event. $X=3$ corresponds to three hits. Since each hit has probability $p$ and they are independent, 

$$ P(X=3) = p\times p\times p =p^3.$$

Similarly, the probability of $X=0$ is 

$$ P(X=0) = (1-p)\times (1-p)\times (1-p) =(1-p)^3.$$

The case of $X=1$ is trickier. There are three outcomes in this event. But they all have the same probability:
<div>\begin{align*}
P(\{001\}) & = (1-p)(1-p)p\\
P(\{010\}) & = (1-p)p(1-p)\\
P(\{100\}) & = p(1-p)(1-p)
\end{align*}</div>
So $P(X=1)=3 p (1-p)^2$. Similarly, $P(X=2) = 3p^2(1-p)$.

Now let us consider the general case, when the archer tries $N$ times. What is the probability of $k$ hits, i.e., $P(X=k)$? The probability of a particular sequence of $k$ hits and $N-k$ misses is $p^k(1-p)^{N-k}$. But we also need to consider the number of such sequences. Each sequence of $k$ hits and $N-k$ misses is equivalent to a binary sequence with $k$ 1s and $N-k$ 0s. There are ${N\choose k}$ such sequences. Putting thing together,

$$P(X=k) = {N\choose k}p^k (1-p)^{N-k}.$$

This is called the **binomial distribution**, written as $X\sim\text{Binomial}(N,p)$.


Below, you can plot the Binomial pmf for different values of $N$ and $p$.

<div class="slidecontainer">
  <input type="range" min="1" max="100" value="50" class="slider" id="nRange">
  <input type="range" min="0" max="100" value="50" class="slider" id="pRange">
  <button  onclick="plotBinomial()">Plot pmf</button>
  <p>$N=$ <span id="n_demo"></span>, $\quad p=$ <span id="p_demo"></span></p>
</div>
<center><div id="box5" class="jxgbox" style="width:1000px; height:600px;"></div></center>
<script>
var nSlider = document.getElementById("nRange");
var pSlider = document.getElementById("pRange");
var nOutput = document.getElementById("n_demo");
var pOutput = document.getElementById("p_demo");
var N = document.getElementById("nRange").value;
var p = document.getElementById("pRange").value/100;
nOutput.innerHTML = N;
pOutput.innerHTML = p;
plotBinomial();

nSlider.oninput = function() {
	N = document.getElementById("nRange").value;
	p = document.getElementById("pRange").value/100;
	nOutput.innerHTML = N;
	pOutput.innerHTML = p;
	plotBinomial();
}

pSlider.oninput = function() {
	N = document.getElementById("nRange").value;
	p = document.getElementById("pRange").value/100;
	nOutput.innerHTML = N;
	pOutput.innerHTML = p;
	plotBinomial();
}

function binProb(N,p,k){
	return factorial[N]/factorial[k]/factorial[N-k]*Math.pow(p,k)*Math.pow(1-p,N-k);
}
function plotBinomial(){
	N = parseInt(document.getElementById("nRange").value);
	p = parseInt(document.getElementById("pRange").value)/100;
	JXG.Options.text.useMathJax = true;
	var maxVal = Math.max(binProb(N,p,Math.floor(N*p)),binProb(N,p,Math.ceil(N*p)))*1.3;
	var upLim = Math.max(maxVal,.5);
	upLim = 1.05;
	//var b5 = JXG.JSXGraph.initBoard('box5', {boundingbox: [-N/10, upLim, +N+1, -upLim/10], axis: true, showCopyright: false, showNavigation: false});
	var b5 = JXG.JSXGraph.initBoard('box5', {boundingbox: [-10, 1.05, 100, -.1], axis: true, showCopyright: false, showNavigation: false});
	for (var i=0; i<N+1; i++){
		var point = b5.create('point',[i,factorial[N]/factorial[i]/factorial[N-i]*Math.pow(p,i)*Math.pow(1-p,N-i)], {name:'',size:2,color:'blue'});
		b5.create('line',[[i,0],point],{straightFirst:false, straightLast:false, strokeWidth:2});
}
}
</script>
<br/>

<div class="exercise">
	An archer hits the target with probability 0.1. If she shoots 10 times, find the following probabilities: she hits the target once; she hits the target at least once; and she hits the target 5 or 6 times.
    <button  onclick="showSolution(this,'archer')" style="float:right;">Show Solution</button>
    <div id="archer" style="display:none;" class="solution">
    Let $X$ denote the number of times that the archer hits the target. We have  
    \begin{align*}
        P(X=1) &= {10 \choose 1} (0.1)^1 (0.9)^9 = 0.387420489\\
        P(X\ge 1) &= 1-P(X=0) = {10 \choose 0} (0.1)^0 (0.9)^{10} = 1-0.3486784401 = 0.6513215599\\
        P(X=5) + P(X=6) &= 0.0014880348 + 0.000137781 =  0.0016258158.
    \end{align*}  
    </div>
</div>
<br/>

### Probability over continuous sets
What if we are interested in the amount of rainfall, blood pressure, etc.? Here the probability is over a continuous set.
The distribution is then shown with a **probability density function**, or *pdf* for short, which is a continuous curve. An example is shown below. Intuitively, wherever pdf is larger, the surrounding region has a higher probability.

<center><div id="box7" class="jxgbox" style="width:600px; height:300px;"></div></center>
<script>
  JXG.Options.text.useMathJax = true;
  var b = 10;
  var b7 = JXG.JSXGraph.initBoard('box7', {boundingbox: [-5, .6, 5, -.2], axis: true, showCopyright: false, showNavigation: false});
  b7.create('functiongraph', [function(x){return Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);},-10,10],{strokeWidth:2});
</script>

The pdf shown above is for a random variable $X$ with _Gaussian_ distribution, whose formula is

$$f(x) = \frac1{\sqrt{2\pi\sigma^2}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

where $\mu$ and $\sigma$ control the shape of the distribution (similar to $N$ and $p$ for binomial distribution.) In the figure $\sigma=1,\mu=0$. 


If the pdf is given by a function $f(x)$, then we can compute event probabilities using integrals:

$$P(a\le X\le b) = \int_{a}^{b} f(x)dx$$ 

If we are interested in the probability that $X$ is between -1 and 1, we can find it as 

$$ P(-1\le X\le 1) = \int_{-1}^1 f(x)d(x) = 0.6827,$$

which is the area of the shaded region in the graph below.



<center><div id="box6" class="jxgbox" style="width:600px; height:300px;"></div></center>
<script>
  JXG.Options.text.useMathJax = true;
  var b = 10;
  var b6 = JXG.JSXGraph.initBoard('box6', {boundingbox: [-5, .6, 5, -.2], axis: true, showCopyright: false, showNavigation: false});
  b6.create('functiongraph', [function(x){return Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);},-10,10],{strokeWidth:2});
  var curve = b6.create('curve', [[], []], {strokeWidth:1, fillColor:'brown', fillOpacity: 0.3});
  var curve2 = b6.create('functiongraph', [function(x){return Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);},-1,1]);
  curve.updateDataArray = function() {
  	// Start with (-1, 0)
  	this.dataX = [-1];
  	this.dataY = [0];
  
   // Copy all points from top
  this.dataX = this.dataX.concat( curve2.points.map( p => p.usrCoords[1] ) );
  this.dataY = this.dataY.concat( curve2.points.map( p => p.usrCoords[2] ) );
  
  // Close the curve by adding (0,0)
  this.dataX.push(1);
  this.dataY.push(0);
  // Close the curve by adding (0,0)
  this.dataX.push(-1);
  this.dataY.push(0);
};
b6.update();
</script>

Below, we simulate 20 values from this distribution:

<span style="color: brown;">0.48889</span>,  1.0347, 
<span style="color: brown;">0.72689</span>, 
<span style="color: brown;">-0.30344</span>, 
<span style="color: brown;">0.29387</span>, 
<span style="color: brown;">-0.78728</span>,
<span style="color: brown;">0.8884</span>,  -1.1471, -1.0689, 
<span style="color: brown;">-0.8095</span>, -2.9443,  1.4384, 
<span style="color: brown;">0.32519</span>,
<span style="color: brown;">-0.75493</span>, 1.3703, -1.7115,
<span style="color: brown;">-0.10224</span>, 
<span style="color: brown;">-0.24145</span>, 
<span style="color: brown;">0.31921</span>, 
<span style="color: brown;">0.31286</span>

13 of them are in the interval of interest, a fraction of $13/20=0.65$ which is close to the probability $0.68$. 

Our discussion of continuous distributions will for the most part be limited to the above. We won't need to compute integrals and Gaussian distribution is the only one we will consider, although there are many more common continuous distributions.



<div class="exercise">
	Write a question that you still have about this section.
</div>
<br/>





















