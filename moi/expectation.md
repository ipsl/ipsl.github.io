---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
---

# Expectation and variance

Distributions are very useful as they can fully describe random variables. But there are two problems that make it necessary to find other ways of describing random variables. The first is that determining the distribution of a random variable in a real-world problem is usually difficult. For example, what is the distribution of the amount of rain in a particular location in June? This is hard to say without measuring the rainfall in June for many years. The second is distributions are complicated and difficult to understand. Even if we have the distribution of rainfall, it might be difficult to use to make decisions about crops, etc. 

So we are after ways to describe random variables via metrics that are both easier to determine and easier to understand. The most common such metrics are the expected value, which describes the average, and variance, which tells us how much variation about the average we can expect. 

## Expected value (mean)
If we roll a die many times, what will be the average of the values that we obtain? Intuitively, we may expect the average to be the average of the outcomes, i.e., $\frac{1+2+3+4+5+6}{6}=\frac{21}6=3.5$, since they are equally likely. Let's see if this agrees with what we know from probability theory. Let the number of times we repeat the experiment be $N$, where $N$ is a very large number. The number of times 1 will show is approximately $\frac N6$ since the probability of 1 is $\frac16$. The same holds for any other number. So the average will approximately be

$$ \frac{\frac N6\times1+\frac N6 \times 2+\frac N6 \times 3+\frac N6 \times 4+\frac N6 \times 5+\frac N6 \times 6}{N}=\frac{1+2+3+4+5+6}{6}=3.5,$$

which agrees with our guess. 

Let's also test this via simulation. The following is the numbers showing when a die is rolled 60 times

$$424332216461654325215554335255644631643624431132536542626231$$

We would expect each number to appear around 10 times. Based on the actual counts, the average is

$$\frac{7\times1+11 \times 2+11 \times 3+11 \times 4+10 \times 5+10\times 6}{60}=3.6.$$

What if we have a loaded die, where the probability of $i$ is $p_i$ for $$i\in \{1,2,3,4,5,6\}$$? This time, $i$ appears in $N$ trials approximately $Np_i$ times if $N$ is large. The same argument as above then tells us the average over many throws is approximately

$$ \frac{Np_1\times1+Np_2 \times 2+Np_3\times3+Np_4  \times 4+Np_5  \times 5+Np_6  \times 6}N =p_1+2p_2+3p_3+4p_4 +5p_5+6p_6 = \sum_{i=1}^6 i p_i.$$

Our discussion above motivates the  expected value of a random variable, defined such that if the experiment repeated many times, the average of the values will be close to the expected value.

<div class="highlight">
	Let $X$ be a random variable which is equal to $x$ with probability $p_x$. Then the <strong>expected value</strong> or <strong>mean</strong> of $X$ is defined as
	$$	E[X] = \sum_{x} xp_x,$$
	where the sum is over all values of $x$ in the range of the random variable $X$.
</div>
<br/>
<div class="exercise">
	What is the expected value of $X$ if $X\sim Bernoulli(p)$? The result should be a function of $p$.
	<button  onclick="showSolution(this,'solID')" style="float:right;">Show Solution</button>
	<div id="solID" style="display:none;" class="solution">
		$$E[X]=p\times 1+(1-p)\times 0=p.$$
	</div>
</div>
<br/>

<div class="exercise">
	A card is randomly drawn from a standard deck. Let $X$ be value of the card, where all number cards have value equal to their number and all face cards have value 10. What is the expected value of $X$?
	<button  onclick="showSolution(this,'expecDeck')" style="float:right;">Show Solution</button>
	<div id="expecDeck" style="display:none;" class="solution">
	There are 12 face cards in a standard deck so the probability of a face card is $\frac{12}{52}=\frac3{13}$. There are also $4$ of each number card, so the probability of each is $\frac1{13}$. So the expected value is
	$$\frac{3}{13}\times 10+\sum_{i=1}^{10}\frac i{13}=\frac1{13}\left(30+\sum_{i=1}^{10} i\right)=\frac{85}{13}.$$
	</div>
</div>
<br/>
<div class="exercise" id="exer_bin">
	A fair coin is flipped twice. What is the expected number of heads?
</div>
<br/>
<div class="exercise">
	What is the expected value of the sum of two die rolls?
	<button  onclick="showSolution(this,'expecDieRoll')" style="float:right;">Show Solution</button>
	<div id="expecDieRoll" style="display:none;" class="solution">
	$$2(\frac{1}{36})+3(\frac{2}{36})+4(\frac{3}{36})+5(\frac{4}{36})+6(\frac{5}{36})+7(\frac{6}{36})+8(\frac{5}{36})+9(\frac{4}{36})+10(\frac{3}{36})+11(\frac{2}{36})+12(\frac{1}{36})=7.$$
	</div>
</div>
<br/>

### Prediction and expected value
Suppose we want to use probability to predict the outcome of an experiment. Given a random variable $X$ for the outcome and a known probability distribution for that random variable, how do we come up with the best prediction of $X$?
Here are some candidates:
* The most likely outcome (mode)
* The average if the experiment is repeated many times (expected value/mean)
* The “middle” outcome (median)

The mode is often not a good solution as the most likely value could be isolated and far from other likely values. The mean is a decent choice. In addition to being close to the average of many trials, the difference between the mean and the actual outcome is on average the smallest compared to other predictions. But it is susceptible to outliers. That is, a single very large outcome, even it has very small probability, has a significant effect on the mean. For this reason, sometimes median is preferred.  (If Bill Gates walks into a bar, it increases the mean income substantially but the median will change little.) 

<!--
<div class="exercise">
Why not the most likely (mode) is not a good candidate? You can provide a counterexample to illustrate the answer. 
<button onclick="showSolution(this,'modemeanmed')" style="float:right;">Show Solution</button>
<div id="modemeanmed" style="display:none;" class="solution"> Here’s a counterexample:
  <img src="assets/img/modemeanmed.png" width="300" alt="">
</div>
</div>


Better alternative: mean (easy).
Even better alternative: median (harder)
-->


### Expected values of functions of random variables
Sometimes we need to compute the expected value of a function of a random variable. An example of this is the power of a signal, which is equal to the square of the value of the signal. There are two ways in which we can find the expectation of a function of a random variable. As an example, consider the following random variable

<div>
\begin{equation*}
	X = 
	\begin{cases}
	-1, & \text{with probability } 1/6 \\
	0, & \text{with probability } 2/6 \\
	1, & \text{with probability } 3/6 
	\end{cases}
\end{equation*}
</div>

For the expected value of $X$, we have

<div>
	\begin{equation*}
	E[X] = -1 \times \frac16 + 0\times \frac26 + 1 \times \frac36 = \frac13.
	\end{equation*}
</div>

What is the expected value of $X^2$? For each value that $X$ can take, we can find the value of $X^2$ and multiply by the corresponding probability,
<div>
	\begin{equation*}
	E[X^2] = (-1)^2 \times \frac16 + 0^2\times \frac26 + 1^2 \times \frac36 = \frac23.
	\end{equation*}
</div>
As natural as this approach is, it does not directly follow the definition of the expected value given above. To follow that definition, we first need to define another random variable, $Y$, as $Y=X^2$. Then we find the distribution of $Y$ and compute its expected value. We have
<div>
\begin{equation*}
	Y = 
	\begin{cases}
	0, & \text{with probability } 2/6 \\
	1, & \text{with probability } 4/6 
	\end{cases}
\end{equation*}
</div>

and 

<div>
	\begin{equation*}
	E[Y] =  0^2\times \frac26 + 1^2 \times \frac46 = \frac23.
	\end{equation*}
</div>

It is not difficult to show that both methods lead to the same result. This is called the [Law Of The Unconscious Statistician](https://en.wikipedia.org/wiki/Law_of_the_unconscious_statistician) or LOTUS. Specifically, 

<div>$$E[g(X)] = \sum_{x} g(x) p_x.$$</div>

For example, for a random variable $X$, the expected value of $X^2$ is 

$$E[X^2] = \sum_{x} x^2 p_x.$$


<div class="exercise">
	Let $X$ be the result of a die roll. What is the expected value of $\sin (\pi X/2)$?
	<button  onclick="showSolution(this,'expecSquare')" style="float:right;">Show Solution</button>
	<div id="expecSquare" style="display:none;" class="solution">
		$$\frac16\cdot \sin(\pi/2) + \frac16\cdot \sin(\pi) + \frac16\cdot \sin(3\pi/2) + \frac16\cdot \sin(2\pi) + \frac16\cdot \sin(5\pi/2) + \frac16\cdot \sin(3\pi) = \frac{1+0+(-1)+0+1+0}{6}=\frac16.$$
	</div>
</div>

<br/>

### Linearity of expectation
From the last exercise, we see that the expected value of the sum of two die rolls is equal to the sum of the expected values of the die rolls. Is this a coincidence? No, it follows from an important property of expectation.
<div class="highlight">
	<strong>Linearity of Expectation</strong>
	<p>For two random variables $X$ and $Y$, we have
	$$E[X+Y] = E[X]+E[Y]$$ 
	and more generally,
	$$E[aX+bY+c] = aE[X]+bE[Y]+c,$$
	where $a,b,c$ are constants (numbers). </p>
</div> 

<br/>

<div class="exercise">
	A die is rolled three times. What is the expected value of the sum?
</div>

Let $X_i$ for $i=1,\dotsc,N,$ be random variables with the same mean $\mu$. Furthermore, let $X = X_1+\dotsm+X_N$. By the linearity of expectation, 
<div>
	\begin{equation}\label{eq:LinExpIdentical}
E[X]=\sum_{i=1}^{N}E[X_i]=N\mu.
\end{equation}
</div>
<div class="exercise">
	Each customer entering a store is expected to spend $50. If 15 customer shop in one hour, what is their expected total spending?
	<button  onclick="showSolution(this,'expecShop')" style="float:right;">Show Solution</button>
	<div id="expecShop" style="display:none;" class="solution">
		$$15\times 50=750.$$
	</div>
</div>
<br/>
A special case of \eqref{eq:LinExpIdentical} occurs when $X_i\sim Bernoulli(p)$ for all $i$. Since $E[X_i]=p$, we have 
<div>
\begin{equation}\label{eq:LinExpIdBer}
E[X]=\sum_{i=1}^{N}E[X_i]=Np
\end{equation}
</div>
<div class="exercise">
Every bit written to a 3 TB HDD is incorrect with probability \(10^{-3}\). What is the expected number of errors for the full drive?
<button onclick="showSolution(this,'hddexpt')" style="float:right;">Show Solution</button>
<div id="hddexpt" style="display:none;" class="solution"> 
There are a total of \(8\times 3 \times 10^{12}\) bits. So the expected number of errors in the drive is $$24\times 10^{12}\times 10^{-3}=2.4 \times 10^{10}.$$
</div>
</div>
We can use \eqref{eq:LinExpIdBer} to find the expected value of random variables with binomial distribution. Let us consider our archer again, who hits the target in each try with probability $p$. The number $X$ of hits in $N$ tries has a binomial distribution, i.e., 

$$X\sim Binomial(N,p).$$

 What is the expected number of hits? Define random variables $X_i$ for $i=1,2,\dotsc,N$ as follows: If the $i$th try is successful, then $X_i=1$. Otherwise, $X_i=0$. Then $X=X_1+\dotsm+X_N$ and 

$$E[X]=E[X_1]+\dotsm+E[X_N]=Np.$$

<br/>
<div class="exercise">
	Find the solution to <a href="#exer_bin">this exercise</a> using the fact that $E[X]=Np$ for $X\sim Binomial(N,p)$. Does it agree with your previous answer?
</div>
<br/>
Note that in \eqref{eq:LinExpIdBer}, we did not need to assume independence between the random variables $X_1,X_2,\dotsc,X_N$. This makes the equation very powerful, allowing us to obtain results that would be difficult to find otherwise. 
<div class="exercise"><br/>
A. What is the probability that two people have the same birthday (without considering leap years)? <button onclick="showSolution(this,'birthexpt0')" style="float:right;">Show Solution</button>
<br/>
B. In a class with 100 students, what is the expected number of pairs of students who have the same birthday (without considering leap years)?
<button onclick="showSolution(this,'birthexpt')" style="float:right;">Show Solution</button>
<br/>
C. What is the smallest number $N$ of students such that we can expect at least one pair of students to share a birthday (without considering leap years)?
<button onclick="showSolution(this,'birthexpt1')" style="float:right;">Show Solution</button>
<div id="birthexpt0" style="display:none;" class="solution"> 
$$A.\quad \frac{365}{365\cdot365}=\frac1{365}.$$
</div>
<div id="birthexpt" style="display:none;" class="solution"> 
$$B. \quad {100 \choose 2} \times \frac1{365} = \frac{100 \times 99}{2} \cdot \frac1{365} = 13.56.$$
</div>
<div id="birthexpt1" style="display:none;" class="solution"> 
	C. We need $$\quad {N \choose 2} \times \frac1{365} = \frac{N \times (N-1)}{730} = 1.$$
	The solution to this equation is $N=27.523$. So it suffices to have $28$ students in the class.
</div>
</div>

<br/>

<!--
By linearity of expectation
$$E[X] = N p$$.-->
<!-- Alternatly we have $$\sum_{n=0}^N {N \choose n} p^n (1-p)^(N-n) n = Np$$. 
How do you calculate the summation? -->

<!-- Alternatly we have $$\sum_{n=0}^N {N \choose n} p^n (1-p)^N (n-nP)^2$$. 
How do you calculate the summation? -->


<!--
#### A questionable example!
Suupose that we have an urn with $$N$$ balls, numbered $$1, 2, 3, \cdots, N$$. We pick one ball at random. Let the number be $$X$$.
What is $$E[X]$$? 

$$\frac{N+1}2$$.

Now the opposite problem. We don't know what $$N$$ is but the ball that we pick has number $$k$$.
What is a good guess of $$N$$? 

$$2k-1$$.
-->
<div class="exercise">
	<button  onclick="showSolution(this,'hatCheck')" style="float:right;">Show Solution</button>
	In a restaurant, $n$ diners sit around a table and each orders a different food. The forgetful waiter, named Rachel, puts the food at random in front of the diners. For a given person (say Joey), what is the probability that they get the food they ordered? What is the expected number of people who get the food they ordered?
	<div id="hatCheck" style="display:none;" class="solution">
		Joey's food can be put in front of any of $n$ diners, with equal probabilities. So the probability that he gets it is $1/n$. There are $n$ people each with probability $1/n$ of getting their own food. So the expected number of people getting the correct food is $n\times (1/n)=1$.
	</div>
</div>
<br/>


## Variance

#### Is the mean enough?
Suppose someone offers you a game in which your expected winning is $100. Will you accept?

Which game would you play?
1. You always win exactly $100.
2. You win <span>&#x24;</span>0 with probability ½ and $200 with probability ½.
3. You win <span>&#x24;</span>1200 with probability ½ and lose $1000 with probability ½.

<div class="exercise">
	Are you willing to play each of these games? Why or why not?
</div>

All three have the same mean. So what’s different between them?

The mean does not capture the variability, or how much the outcome is expected to change from trial to trial. It is possible for random outcomes to be consistently close to the expected value or vary widely from it. How do we quantify such behaviors?

<div class="highlight"><strong>Variance</strong>
Let $X$ be a random variable with mean $X$, which takes value $x$ with probability $X$. The <strong>Variance</strong> of $X$ is 
$$\sigma^2_X = Var(X) = E[(X-\mu)^2] = \sum_x(x-\mu)^2p_x.$$
</div>
The square root of the variance of $X$ is called its **standard deviation** and usually shown by $$\sigma_X$$.

Assuming that the mean is $\mu$, why don't we define the variance as the expected difference $$E[X-\mu]$$? This is because this quantity is always 0:  $$E[(X-\mu)] = E[X] - \mu = \mu - \mu = 0$$.

<div class="exercise">
	Find the standard deviations for the games mentioned at the beginning of this section. 
	<button  onclick="showSolution(this,'vargame')" style="float:right;">Show Solution</button>
	<div id="vargame" style="display:none;" class="solution">
	The first case is deterministic, so the value is always 100, which is also the mean. The difference between the outcome and the mean is 0, so the variance and standard deviation are 0. Is the second case, the mean is 100 and the variance is 
	$$\sqrt{\frac12(0-100)^2+\frac12(200-100)^2}=100.$$
	In the third case
	$$\sqrt{\frac12(1200-100)^2+\frac12(-1000-100)^2}=1100.$$ 
	</div>
</div>
<br/>

<div class="exercise">
	Find the variance of $X\sim Bernoulli(p)$.
	<button  onclick="showSolution(this,'varBer')" style="float:right;">Show Solution</button>
 	<div id="varBer" style="display:none;" class="solution">
 		$$ E[X] = p, \qquad Var(X) = (0 - p)^2 (1-p) + (1 - p)^2p = p (1 - p).$$
	</div>
</div>


<br/>
<div class="exercise">
Calculate the variance of the number \(X\) showing after rolling a fair die.
<button onclick="showSolution(this,'dievar')" style="float:right;">Show Solution</button>
<div id="dievar" style="display:none;" class="solution"> 
$$
\begin{align*}
Var(X) &= \sum_{i=1}^6 \frac16(i-3.5)^2 = \frac{35}{12}.
\end{align*}
$$
</div>
</div>

We can also find the variance of a function of a random variable. From the definition,

<div>
	\begin{equation*}
	Var(g(X)) = E\left[(g(X)-\mu_g)^2\right]=\sum_{x} p_x\left(g(x)-\mu_g\right)^2,
	\end{equation*}
</div>
where $\mu_g = E[g(X)]$.

<div class="exercise">
Let \(X\) be the number showing after rolling a fair die. Find $Var(X^2)$.
<button onclick="showSolution(this,'die2var')" style="float:right;">Show Solution</button>
<div id="die2var" style="display:none;" class="solution"> 
	Before finding the variance of $X^2$, we need to find its expected value, i.e., $E[X^2]$:
	$$E[X^2] = \sum_{x=1}^6x^2\times \frac16 = \frac{1+4+9+16+25+36}{6}=\frac{91}{6}.$$
$$
\begin{align*}
Var(X^2) &= \sum_{x=1}^6 \frac16\left(x^2-\frac{91}{6}\right)^2 = 149.139.
\end{align*}
$$
</div>
</div>

### Properties of variance
Just like expected value, the variance has certain properties:
* If we scale random variable X by a constant $$a$$, then $$Var(aX) = \vert a \vert^2Var(X)$$.
* If we add a constant to a random variable, the variance does not change.
* The variance of the sum of _independent_ random variables is the sum of the variances: If $X$ and $Y$ are independent, then $Var(X+Y) = Var(X)+Var(Y)$.


Viewing a binomial random variable $$X \sim \text{Binomial}(N,p)$$ as the sum of $N$ Bernoulli($p$) random variable, we find that

<div>$$Var(X) = N p (1-p).$$</div>

<br/><br/>
<!--
$$
\begin{align*}
Var(X+Y) &= E[(X+Y - \mu_X - \mu_Y)^2] \\
&= E[(X - \mu_X)^2 + (Y -\mu_Y)^2 + (X - \mu_X)(Y-\mu_Y)] \\
&= Var(X) + Var(Y)
\end{align*}$$
-->

<div class="exercise">
What is the variance of sum of two independent die rolls.
</div>  

<br/>
<div class="exercise">
	Write down a question that you still have about expectation and variance.
</div>
<!--
#### Chebyshev’s inequality
How spread can a distribution with small variance be?
In the extreme case, if variance is 0, there is no randomness.
We have Chebyshev’s inequality to describe this:
$$P(\mu_X - k \sigma_X \leq X \leq \mu_X + k \sigma_X) \leq 1- \frac1{k^2}$$.
In words, the probability of being within $$k$$ standard deviation of the mean is at least $$1 - \frac1{k^2}$$. For the Gaussian distribution below, the probablity is actually significantly more concentrated.
<img src="assets/img/gaussstd.svg" alt="Image credit: M. W. Toews - Own work, based (in concept) on figure by Jeremy Kemp">

|Number of std from mean | 2 | 3 | 4 | 5 | 10 |
|Probability from Chebyshev’s inequality | 75% | 89% | 93% | 96% | 99%
-->

