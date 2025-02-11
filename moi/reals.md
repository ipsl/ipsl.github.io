---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
kramdown:
  toc_levels: 1;
---


# Reals numbers
{:.no_toc}

In this section, we will motivate and introduce real numbers and also briefly discuss complex numbers. 

## Extending rational numbers

The set of rational numbers allows us to perform arithmetic and solve equations of the form $$ax+b=c$$. But we are still unable to solve simple polynomial equations such as $$x^2=2$$. (You may, for example, be interested in finding the length of the hypotenuse of a right triangle with two side of length 1.) The solution does not exist within the rational numbers. But we can get arbitrarily close to it:
* We know $$1^2 < x^2 < 2^2$$. So $$1 < x < 2$$
* We can find the next decimal place by finding $$a^2$$ for $$a=1.1,1.2,1.3,\dotsc$$ and find the smallest value for $$a$$ such that $$a^2\le 2$$. This occurs for $$a=1.4$$ for which $$a^2=1.96$$.
* We can continue in this way to find a sequence of numbers whose square gets closer and closer to 2:


<table align="center" class="tabDefault">
  <tbody>
    <tr>
      <th>𝑎</th>
      <td>1</td>
      <td>1.4</td>
      <td>1.41</td>
      <td>1.414</td>
      <td>1.4142</td>
      <td>1.41421</td>
      <td>1.414213</td>
      <td>1.4142135</td>
      <td>1.41421356</td>
    </tr>
    <tr>
      <th>\(a^2\)</th>
      <td>1</td>
      <td>1.96</td>
      <td>1.9881</td>
      <td>1.999396</td>
      <td>1.99996164</td>
      <td>1.9999899241</td>
      <td>1.999998409369</td>
      <td>1.99999982358225</td>
      <td>1.9999999932878736</td>
    </tr>
  </tbody>
</table>

<!--* We know $$1^2 < x^2 < 2^2$$. So

$$1 < x < 2$$

* Choosing $$3/2$$ is in the above interval, we find $$\left(\frac32\right)^2 = \frac94 >x^2$$. So

$$1< x < \frac32$$

* Choosing $$4/3$$ in the interval, we find $$\left(\frac43\right)^2=\frac{16}{9}< x^2$$. So

$$\frac43 < x<\frac32$$

* Choosing $$7/5$$ in the interval, we find $$\left(\frac75\right)^2=\frac{49}{25}>x^2$$. So

$$\frac75 < x < \frac 32$$

The last inequality tells us that $$1.4 < x < 1.5$$ and we can make the interval smaller if we want to. So it appears that there are rational numbers such that if we take their second power, that gets as close to the solution as desired. In fact, if we take the middle point of the intervals above, we'll get a sequence that seems to get closer and closer to a certain value (we use a truncated decimal represenation for clearity):

$$1.25, 1.4166, 1.45, 1.4143, 1.4083, 1.4142, \dotsc $$-->

<!--<p id="sequence" align="center"></p>

<center><div id="box" class="jxgbox" style="width:600px; height:300px;"></div></center>
<script>
var N = 10;
var sq = 2;
var b2 = JXG.JSXGraph.initBoard('box', {boundingbox: [-N/10, sq, N, 1], axis: true, showCopyright: false, showNavigation: false});
var seq = document.getElementById('sequence');
var seqStr = '';
var a,b,c,d;
var x = [];
var y = [];
for (var i = 0; i < N; i++){
  if (i==0){
    a=b=d=1;
    c=sq;
  } else {
      if ((a+c)*(a+c)/((b+d)*(b+d))>sq) {
      c = a+c; d = b+d;
    } else {
      a = a+c; b = b+d;
    }
  }
  //console.log(a,b,c,d);
  x[i] = i;
  y[i] = 1/2*((a/b)+(c/d));
  b2.create('point', [x[i],y[i]],{name:(i+1).toString()});
  if (i>0) seqStr += ', ';
  seqStr += Math.round(y[i]*100000)/100000;
  console.log(y[i]*y[i]);
}
seqStr += ', ...';
seq.innerHTML = seqStr;
console.log(y);
</script>-->


Yet, it can be shown that there is no rational number for which $$x^2=2$$ is satisfied precisely. One way to remedy this situation is to define a new number as the "limit" of the above sequence, i.e., what we would get if we continued this process ad infinitum, and call it $$\sqrt 2$$. We can't really write down the value of $$\sqrt 2$$ in decimal form since we will have to stop at some point, but we can get as close as we want. 

We can now add $$\sqrt 2$$ to the set of rational numbers, leading to the new field

$$𝐹=\{𝑎+𝑏\sqrt{2}:𝑎,𝑏∈ℚ\}$$

Arithmetic on $$F$$ is as usual, except that we have $$\sqrt{2}×\sqrt{2}=2$$:

<div>
\begin{align}
(𝑎+𝑏\sqrt{2})+(𝑐+𝑑\sqrt{2})&=(𝑎+𝑐)+(𝑏+𝑑) \sqrt{2}\label{eq:Fsqr2add}\\
(𝑎+𝑏\sqrt{2})×(𝑐+𝑑\sqrt{2})&=𝑎𝑐+𝑎𝑑\sqrt{2}+𝑏𝑐\sqrt{2}+2𝑏𝑑=(𝑎𝑐+2𝑏𝑑)+(𝑎𝑑+𝑏𝑐) \sqrt{2}\label{eq:Fsqr2mul}
\end{align}
</div>

The additive and multiplicative inverses are:  
<div>
\begin{align*}
-(𝑎+𝑏\sqrt{2})&=(-𝑎)+(-𝑏) \sqrt{2}\\
\frac{1}{(𝑎+𝑏\sqrt{2})}&=\frac{1}{(𝑎+𝑏\sqrt{2})}×\frac{(𝑎−𝑏\sqrt{2})}{(𝑎−𝑏\sqrt{2})}=\frac{(𝑎−𝑏\sqrt{2})}{(𝑎^2−2𝑏^2 )}=\frac{𝑎}{(𝑎^2−2𝑏^2)}+\sqrt{2} \frac{(−𝑏)}{(𝑎^2−2𝑏^2 )}
\end{align*}
</div>

<div class="exercise">
  Using equations \eqref{eq:Fsqr2add} and \eqref{eq:Fsqr2mul}, verify that \((-𝑎)+(-𝑏) \sqrt{2}\) and \(\frac{𝑎}{(𝑎^2−2𝑏^2)}+\sqrt{2} \frac{(−𝑏)}{(𝑎^2−2𝑏^2 )}\) are the additive and multiplicative inverses of \(𝑎+𝑏\sqrt{2}\), respectively.   <button  onclick="showSolution(this,'Fsq2inv')" style="float:right;">Show Solution</button>

  <div id="Fsq2inv" style="display:none;" class="solution">
    We'll only do this for the multiplicative inverse:
    \begin{align*}
\left(a+b\sqrt{2}\right)\left(\frac{a}{a^{2}-2b^{2}}+\sqrt{2}\frac{-b}{a^{2}-2b^{2}}\right) & =\frac{a\left(a+b\sqrt{2}\right)}{a^{2}-2b^{2}}-\sqrt{2}\frac{b\left(a+b\sqrt{2}\right)}{a^{2}-2b^{2}}\\
 & =\frac{a^{2}+ab\sqrt{2}}{a^{2}-2b^{2}}-\sqrt{2}\frac{ab+b^{2}\sqrt{2}}{a^{2}-2b^{2}}\\
 & =\frac{a^{2}+ab\sqrt{2}}{a^{2}-2b^{2}}-\frac{ab\sqrt{2}+2b^{2}}{a^{2}-2b^{2}}\\
 & =\frac{a^{2}-2b^{2}}{a^{2}-2b^{2}}\\
 & =1.
\end{align*}
  </div>
</div>
<br/>



### What else is missing from rational numbers?

Just as we added $$\sqrt 2$$ to the rational numbers, we can add all missing square roots. But it turns out that is still not enough.

Let us consider the example of _compound interest_: Suppose we put <span>&#x24;</span>1 in a savings account with an annual interest rate 𝑟. If interest is compounded annually at the end of the year we will have <span>&#x24;</span>1+𝑟. If it is compounded twice a year, we would have $$(1+r/2)^2$$ dollars. More generally, if the interest is compounded $$n$$ times, we would have $$(1+𝑟/𝑛)^𝑛$$ dollars.

We can let $$n$$ grow larger and compound increasingly more frequently. For $$𝑟=1$$, how much will be in the account at year end if we compounded continuously (every instant)? In other words, what is the limit of $$(1+1/1)^1,(1+1/2)^2,(1+1/3)^3,…$$? The first few values in the sequence are given below.

<p id="exp_seq" align="center"></p>

<center><div id="exp" class="jxgbox" style="width:600px; height:300px;"></div></center>
<script>
var N = 10;
var b2 = JXG.JSXGraph.initBoard('exp', {boundingbox: [-N/10, 3, N+1, -.5], axis: true, showCopyright: false, showNavigation: false});
var seq = document.getElementById('exp_seq');
var seqStr = '';
var x = [];
var y = [];
for (var i = 1; i <= N; i++){
  x[i] = i;
  y[i] = Math.pow(1+1/i,i);
  b2.create('point', [x[i],y[i]],{name:(i).toString()});
  if (i>1) seqStr += ', ';
  seqStr += Math.round(y[i]*100000)/100000;
}
seqStr += ', ...';
seq.innerHTML = seqStr;
</script>

This is again a sequence with a limit; this time it is called $$e$$, which can be shown neither to be a rational number nor even the solution to any algebraic equation with rational coefficients. Such numbers are called _transcendental_. Another well-known transcendental number is $$\pi$$, the circumference of a circle with diameter 1. 


## Real numbers

We have seen that even the set of rational numbers is seriously deficient, lacking both solutions to certain simple equations and transcendental numbers. In both cases however, the missing numbers could be defined using sequences of rational numbers. We will skip a formal treatment, which would rely on rigorous definitions of convergence and limit, and will instead use the examples provided above to shape our understanding. 

Essentially, there are some numbers that we cannot express as a ratio of integers, but we can find sequences of rational numbers that get closer and closer to them, so we define them via those sequences. This does not cause any practical problems since in real-world situations, we are not interested in infinite accuracy. 


$$ℝ =ℚ\cup \{\text{limits of converging sequences of rational numbers}\}$$

Real numbers that are not rational are creatively called **irrational**.


### Computing using real numbers 
Representing real numbers as sequences has significance from computational and communication point of view. 
<div class="highlight">
You can store a rational number explicitly and exactly on a computer using a finite amount of memory, either as ratio of two integers or a terminating or repeating decimal number. But you can't do the same for irrational numbers. For example \(\pi\) in python is represented as 3.141592653589793 and in your browser's javascript as <span id='pi'></span>, different from the true value of $\pi$. In some applications you may need a more accurate representation than what is readily available. This is ok since we can find a more precise representation by computing more precise approximations (computing later numbers in the sequence or including more terms in a sum).
</div>

Here are some examples of sequences of rational numbers that define an irrational number.

$$𝑒=\lim_{𝑛→∞}⁡ (1+1/𝑛)^𝑛$$

$$𝜋=4(1−1/3+1/5−1/7+\dotsm)$$

$$\cos ⁡𝑥 =1−𝑥^2/2!+𝑥^4/4!−\dotsm$$

<script type="text/javascript">document.getElementById('pi').innerHTML=Math.PI</script>

<div class="exercise">
  Use the summation given above to find 4 different rational approximation for \(\pi\), along with their decimal representations.
  <button  onclick="showSolution(this,'pi_approx')" style="float:right;">Show Solution</button>

  <div id="pi_approx" style="display:none;" class="solution">
    Let's call these approximations \(p_1,p_2,p_3,p_4\). For the decimal representation a bar on top indicates repeating digits.
    \begin{align*}
      p_1 &= 4\\
      p_2 &= 4-\frac43 = \frac83 =  2.\overline{6}\\
      p_3 &= \frac83 + \frac45 = \frac{40+12}{15} = \frac{52}{15} = 3.4\overline6\\
      p_4 &= \frac{52}{15} - \frac47 = \frac{364-60}{105} = \frac{304}{105} = 2.8\overline{952380}
    \end{align*}
    As far as rational approximations of \(\pi\) go, this one is quite slow in achieving high accuracy. There are many more efficient ones.
  </div>
</div>
<br/>

### The field of real numbers
Building upon rational numbers, the set of real numbers is also a field. If a real number $$x$$ is defined by the sequence $$x_1,x_2,\dotsc$$ then its additive inverse is defined by $$-x_1,-x_2,\dotsc$$ and its multiplicative inverse is $$1/x_1,1/x_2,\dotsc$$. In other words, if we have a way to approximate $$x$$ as accurately as we want, then we can also approximate $$-x$$ and $$1/x$$ (assuming $$x\neq 0$$).

## Exponentiation and logarithm
### Exponentiation
For a real positive number $$b$$ and a positive integer $$n$$, our existing definition of exponentiation tells us that
<div>
  \begin{align*}
    b^n& = \underbrace{b\times b\times \dotsm\times b}_{n \ times}
  \end{align*}
</div>

But how about non-integer exponents? Are they meaningful? For a rational number $$\frac mn$$, we can define $$b^{m/n}$$ as the positive number $$x$$ such that

$$b^m = x^n$$ 

which may be rational or irrational. So for example, $$5^{2/3}$$ is the solution to $$x^3 = 5^2 = 25$$. In this case, the solution is irrational, but as before, we can find a sequence of rational numbers $$x_1,x_2,x_3, \dotsc$$ such that $$x_i^3$$ gets as close as possible to $$25$$.

The trickiest case is that of $$b^x$$ for an irrational number $$x$$. In this case, we use a sequence of rational numbers $$x_1,x_2,\dotsc$$ that approach $$x$$. Then $$b^x$$ is represented by the sequence $$b^{x_1},b^{x_2},\dotsc$$. Note that $$b^{x_i}$$ has already been defined.

Now, we have, for example, defined strange-looking expressions such as $$e^\pi$$. Your browser's approximation for $$e^\pi$$ is <span id='etopi'></span>.

<script>document.getElementById('etopi').innerHTML=Math.exp(Math.PI)</script>



For a positive real number, a 0 exponent results in 1 and negative exponents can be defined using positive exponents:
<div>
  \begin{align*}
    b^0& = 1,&    b^{-n} &= \frac1{b^n}
  \end{align*}
</div>

Putting all of these together, we can define exponential functions. The graph below gives $$e^x,2^x$$.

<br/>

Exponentiation, for positive reals $$a,b$$ and real numbers $$x,y$$, has the following property:
* $$b^x b^y = b^{x+y}$$, 
* $$\left(b^x\right)^y=b^{xy}$$,
* $$(ab)^x = a^xb^x$$.

### Logarithm
We can now define _logarithm_ which is equally important. For positive reals $$b,y$$, 

$$ \log_b y = x \iff b^x = y.$$




Logarithm, for positive reals $$a,b,x,y$$  has the following properties:
* $$\log_b(xy) = \log_b x+\log_b y$$, 
* $$\log_b(x^y)=y\log_b x$$, and in particular, $$\log_b(\frac1x)=-\log_b x$$,
* $$\log_b x = (\log_b a)(\log_a x)$$.

We denote logarithm in base $$e$$ by $$\ln$$. The functions $$\ln x$$ and $$\log_2 x$$ are given below.

<div class="row">
  <div class="column" align="center"><div id="expx" class="jxgbox" style="width:400px; height:400px;"></div></div>
  <div class="column"><div id="log" class="jxgbox" style="width:400px; height:400px;"></div></div>
</div>

<br/>
<div class="exercise">
  Simplify the following expression. For the latter, verify your answer.
  <button  onclick="showSolution(this,'logexp')" style="float:right;">Show Solution</button>
  <ol type="i">
    <li>\(2^3\times 2^5-\left(\frac43\right)^7\times\left(\frac32\right)^7\)</li>
    <li>\(\log_48\)</li>
  </ol>

  <div id="logexp" style="display:none;" class="solution">
  <ol type="i">
    <li>\(2^3\times 2^5-\left(\frac43\right)^7\times\left(\frac32\right)^7=2^8-\left(\frac{4\times3}{3\times2}\right)^7=2^8-2^7=2^7\left(2-1\right)=2^7\)</li>
    <li>\(\log_48=\frac{\log_2 8}{\log_2 4}=\frac32\). We note that \[\log_48=\frac32\iff4^{3/2}=8\iff4^3=8^2\iff64=64\  \checkmark\]</li>
  </ol>
  </div>
</div>
<br/>

<script>
  JXG.Options.text.useMathJax = true;
  var b = 10;
  var b3 = JXG.JSXGraph.initBoard('log', {boundingbox: [-1, 5, 10, -5], axis: true, showCopyright: false, showNavigation: false});
  b3.create('functiongraph', [function(x){return Math.log(x);},-10,10]);
  b3.create('functiongraph', [function(x){return Math.log(x)/Math.log(2);},-10,10],{strokeColor:'red'});
  b3.create('legend', [5, -3], {labels:['\\(\\ln x\\)','\\(\\log_2 x\\)'], colors: ['blue','red'], strokeWidth:2} );
</script>
<script>
  JXG.Options.text.useMathJax = true;
  var b = 10;
  var b3 = JXG.JSXGraph.initBoard('expx', {boundingbox: [-5, 10, 5, -1], axis: true, showCopyright: false, showNavigation: false});
  b3.create('functiongraph', [function(x){return Math.exp(x);},-10,10]);
  b3.create('functiongraph', [function(x){return Math.pow(2,x);},-10,10],{strokeColor:'red'});
  b3.create('legend', [-4, 5], {labels:['\\(e^x\\)','\\(2^x\\)'], colors: ['blue','red'], strokeWidth:2} );
</script>
## A preview of complex numbers
The field of real numbers is quite powerful. Still, there are simple equations with no solutions, in particular,  $$𝑥^2+1=0$$ does not have a solution. Let’s represent a solution to $$𝑥^2+1=0$$ as $$\sqrt{-1}$$. Adding $$\sqrt{-1}$$ to the set of real numbers eventually leads to the set of **complex** numbers,

$$ℂ=\{𝑎+𝑏\sqrt{-1}:𝑎,𝑏∈ℝ\}$$

which we will discuss in further detail later in the course. For now, we only mention that complex numbers are said to be complete (contain the limits of all converging sequences) and algebraically closed (all polynomial have roots). So we cannot make it bigger with the methods that we have used so far, and we do not need to.

## Numbers: Summary

{:.tabDefault}
Set | Symbol | Elements | Operations | What's missing?
---|---|---|---|---|---
Natural numbers |$$\mathbb N$$| 0,1,2,...| $$+ \times$$| Solve $$x+3=0$$
Integers| $$\mathbb Z$$| ...,-2,-1,0,1,2,...| $$+\times - $$| Solve $$3x+1=0$$|
Rationals| $$\mathbb Q$$| $$0,\pm 1,\pm\frac12,...$$| $$+\times -/$$| Solve $$x^2=2$$<br>Perimeter of unit circle
Reals| $$\mathbb R$$| Limits of converging sequences in $$\mathbb Q$$| $$+\times -/$$| Solve $$x^2+1=0$$|
Complex numbers| $$\mathbb C$$| $$\{a+b\sqrt{-1}: a,b\in\mathbb R\}$$| $$+\times -/$$| :smiley:
