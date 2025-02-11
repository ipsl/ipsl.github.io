---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
---


# Natural numbers, integers, and rationals

<!--<table border="0" cellspacing="5" cellpadding="5" width="250" bgcolor="#b5cc82">
<tbody style="border:none;">
<tr>
<td style="text-align: rleft; border:none;">
<pre>God made the integers, all else is the work of man.</pre>
<pre>                                              -Kronecker</pre>
</td>
</tr>
</tbody>
</table>-->



A set, on its own, is not particularly useful. If we equip sets with operations, such as + and ×, we will have more useful objects. In this section, we will start from natural numbers and progressively create more powerful objects. Our goal is to construct fields, where you can add, multiply, subtract, divide, take limits and solve polynomial equations.

We are already familiar with many of the sets that we will discuss below, such as natural numbers. But we may not really know how they are constructed as mathematical objects. We may also not know why some very natural properties are true. For example, why $$(x+y)+z = x + (y+z)$$ is true? Perhaps we can show it is true for specific numbers, but what convinces us that this holds for all $$x,y,z$$?

For parts of this section, we will take an axiomatic approach. If you are not familiar with axiomatic mathematical systems, please review this [note](axiomatic.html). Learning about sets we are already familiar with in this way gives us a mathematical understanding that helps us learn about unfamiliar ones. For example, we will see that in a certain sense $$-1$$ is just as "_imaginary_" as $$\sqrt{-1}$$. It will also provide a good opportunity to become more comfortable with axiomatic systems, abstract mathematical objects, and practice proof techniques 

_So let us forget what we know about numbers and build everything from the ground up._ 

## Natural Numbers

<div class="highlight"> 
The set of natural numbers \(\mathbb N\) is a set with the following properties:
<ul>
  <li> 0 is a natural number</li>
  <li> Each natural number \(a\) has a <em>successor</em>, which is also a natural number,  denoted by \(a^{\to}\)</li>
  <li> 0 is not the successor of any natural number</li>
  <li> No two distinct natural numbers have the same successor</li>
  <li>(<em>Principle of induction</em>): If a property 
    <ul>
      <li>is satisfied for 0, and </li>
      <li>assuming it is satisfied for \(n\), it can be shown that it is satisfied for \(n^{\to}\), </li>
    </ul>
then the property is satisfied for all natural numbers.</li>
</ul>
</div>

The above statements can be _proven_ in axiomatic set theory. But here, we will _assume_ the existence of $$\mathbb N$$ with the above properties. So these will be our _axioms_. This is OK since these axioms match our intuition well, and they are more relevant to our discussions on computation and communications than set-theoretic proofs.

We can represent the set of natural numbers as 

$$\mathbb N = \{0,0^{\to},0^{\to\to},\dotsc\}.$$ 

But this becomes cumbersome. So we denote the successor of 0 as 1. The successor of 1 as 2. And so on. Then, we can represent the set of natural numbers in its familiar form 

$$\mathbb N = \{0,1,2,3,4,5,6,\dotsc\}.$$

It can be shown (using induction :trophy:) that for any number $$a\neq 0$$, there is a unique number $b$ whose successor is $$a$$, i.e., $$b^\to = a$$. Then $$b$$ is called the *predecessor* of $a$ and denoted $$a^{\leftarrow}$$. Clearly, $$\left(a^\to\right)^\leftarrow=a$$.

### Addition
Now we are ready to define **addition** for two natural numbers as repeated succession:
1. $$a+0 = a$$ : Adding 0 does not change the number.
2. $$a+b^\to = \left(a + b\right)^{\to}$$: Having found the sum of $$a$$ and $$b$$, we can find the sum of $$a$$ and $$b^\to$$.  

<div class="exercise"> Using the definition of addition, find \(3+2\).<button  onclick="showSolution(this,'3+2')" style="float:right;">Show Solution</button></div>
<div class="solution">

<div id="3+2" style="display:none;">
We can start by finding $3+0$ using the first part of the definition of addition and then build up to $3+2$ using the second property:
\begin{align*}
3+0 & = 3 \\
3+1 & = 3 + 0^\to = (3+0)^\to = 3^\to = 4\\
3+2 & = 3+1^\to = \left(3+1\right)^{\to}=4^{\to}=5.
\end{align*}
</div>
</div>

<p/>
Of course, we already knew the answer, but we now have a concrete proof for it, only using the properties of natural numbers and the definition of addition. 
<p/>


<div class="exercise"> Prove that for \(a,b\in\mathbb N,b\neq 0\), we have \(a+b=\left(a+b^{\leftarrow}\right)^\to\) and \(\left(a+b\right)^{\leftarrow}=a+b^{\leftarrow}\).<button  onclick="showSolution(this,'backAndForth')" style="float:right;">Show Solution</button></div>
<div class="solution">

<div id="backAndForth" style="display:none;">
Since $b\neq 0$, then $b^\leftarrow$ exists. From the second part of the definition of addition, by replacing $b$ with $b^\leftarrow$, we have $a+(b^\leftarrow)^\to = (a+b^\leftarrow)^\to$. Hence, $a+b = (a+b^\leftarrow)^\to$. The second statement follows immediately.
</div>
</div>



Addition has the following  properties, which follow from its definition:
1. **Closure Property**: The result of the addition of any two natural numbers is a natural number. We say that the set of natural numbers is _closed under addition_.
2. **Additive Identity**: There is a unique number, namely $$0$$, such that $$x+0=x$$ for any $$x\in\mathbb N$$.
2. **Commutative Property**: For any $$x,y\in\mathbb N$$, we have $$x+y = y+x$$.
3. **Associative Property**: For any $$x,y,z\in\mathbb N$$, we have $$(x+y)+z = x+(y+z)$$.

We can prove these properties using the definition of addition and the axioms of natural numbers, especially induction, as shown in the following example.
<div class="exercise"> :trophy: Prove the associative property.<button  onclick="showSolution(this,'commutative')" style="float:right;">Show Solution</button></div>
<div class="solution">

<div id="commutative" style="display:none;">
Let \(x,y,z\in\mathbb N\). For \(z=0\), the property follows from the definition of addition. We now show that if it holds for \(z\), i.e.,
\[
(x+y)+z = x + (y+z),
\]
it also holds for \(z^\to\), i.e.,
\[
(x+y)+z^\to = x + (y+z^\to).
\]
We have 
\begin{align*}
\left(x+y\right)+z^{\to} & =\left(\left(x+y\right)+z\right)^{\to}\\
 & =\left(x+\left(y+z\right)\right)^{\to},\\
x+\left(y+z^{\to}\right) & =x+\left(y+z\right)^{\to}\\
 & =\left(x+\left(y+z\right)\right)^{\to}.
\end{align*}
It then follows from the principle of induction that the property holds for all natural values of \(z\).
</div>
</div>

For natural numbers $$a,b$$, we say that $$b < a$$ if and only if there is a nonzero natural number $$c$$ such that $$ b+c = a$$.

### Multiplication

We define multiplication as follows:
* $$a\times 0 = 0$$: Multiplying any natural number by 0 results in 0.
* $$a\times b^\to = a\times b + a$$: Having found the product of $$a$$ and $$b$$, we can find the product of $$a$$ and $$b^\to$$. 

Multiplication has the following  properties, which follow from its definition:

{:start="5"}
1. **Closure Property**: The result of the multiplying any two natural numbers is a natural number. We say that the set of natural numbers is _closed under multiplication_.
2. **Multiplicative Identity**: There is a unique number, namely $$1$$, such that $$x\times 1=x$$ for any $$x\in\mathbb N$$.
3. **Commutative Property**: For any $$x,y\in\mathbb N$$, we have $$x\times y = y\times x$$.
4. **Associative Property**: For any $$x,y,z\in\mathbb N$$, we have $$(x\times y)\times z = x\times (y\times z)$$.

In addition, multiplication and addition have the following property:

{:start="9"}
9. **Distributive property** of multiplication over addition: $$a\times(b+c) = a\times b + a\times c$$.

<div class="exercise">
  Prove that 1 is the multiplicative identity, i.e., \(x\times 1 = x\).
  <button  onclick="showSolution(this,'mustID')" style="float:right;">Show Solution</button>

  <div id="mustID" style="display:none;" class="solution">
    \begin{align*}
    x\times 1 = x \times 0^\to  = x\times 0 + x = 0+x = x.
    \end{align*}
  </div>
</div>
<br/>

### What's missing from natural numbers?
The set of natural numbers has some significant deficiencies. The most immediate is that we cannot always solve even a simple equation of the form $$x+a=b$$ for $$x$$. For example, the solution to $$x+3=0$$ does not exist in the world of natural numbers.

<!-- If we can ask "what is $$a+b$$?" it is reasonable to also ask "what is the number that, if added to $$a$$, results in $$b$$?". For this purpose, we define the following operation over natural numbers, which we call _subtraction_:
* For $$a,b\in\mathbb N$$, $$a-b$$ is the solution to the equation $$b+x=a$$, where $$x$$ is the unknown.

The problem that we will face then is that $$\mathbb N$$ _is not closed under subtraction_. That is the result of subtraction is not guarnateed to be a natural number. For example, 0-3 does not exist. In other words, the solution to $$x+3=0$$ does not exist in our world.-->


## Integers


If the solution to $$x+3=0$$ does not exist, we define it into existence while no one’s looking! :eyes:

**Negative numbers**: For a $$𝑎∈ℕ$$ let’s call the solution to $$𝑥+𝑎=0$$ as $$-a$$. Further, if $$a\neq 0$$, $$a$$ is called a positive number while $$-a$$ is called a negative number. 0 is neither positive nor negative.

This leads to the set of integers:

$$ℤ=\{\dotsc,−3,−2,−1, 0, 1, 2, 3, \dotsc\}$$

Since $$a+(-a)=0$$, we call −𝑎 the **additive inverse** of 𝑎.

Of course, to fully take advantage of integers, we need to extend $$+,\times$$ to negative numbers. We skip the details, but it can be done in a rigorous and consistent manner similar to our definition of addition and multiplication for natural numbers. We can also define subtraction, but this is simply defined in terms of addition.

Hence, in the set of integers, we can perform the following operations:

* Addition +
* Multiplication ×
* Subtraction − : 
  * $$𝑎−𝑏=𝑎+(−𝑏)$$.

The properties of addition and multiplication stated above for natural numbers also hold for integers. In addition, each element has an additive inverse.

Note that the sign "$$-$$" has two meanings: it can be used to indicate the additive inverse and used to indicate subtraction. Subtraction is essentially a shorthand defined in terms of the additive inverse, rather than a separate operation. So this dual use does not cause confusion. But technically the meaning of "$$-$$" is different in $$-b$$ and in $$a-b$$. 


Things are getting better, since we can solve $$x+a=b$$ for any integer $$a,b$$ by using _additive inverses_:

$$ x+a = b \iff x+a+(-a) = b+(-a) \iff x = b-a$$ 

Here, we have used the additive inverse of $$a$$ to eliminate $$+a$$. It is critical to note that all steps need to be valid in both directions.


But  we still cannot solve an equation like $$ 3 x =1$$ or $$5x+2=11$$. There are no integers satisfying these. This is because integers (other than $$1,-1$$) do not have _multiplicative inverses_.



## Rational Numbers

For $$𝑎∈ℤ,a≠0$$, let’s call the solution to $$𝑎𝑥=1$$ as $$1/𝑎$$ and add it to the set of integers. Since $$a\times(1/a)=1$$, we call $$1/a$$ the multiplicative inverse of $$a$$. After adding $$1/a$$ for all nonzero $$a\in\mathbb Z$$, we'll need to add some more elements to make sure $$+,\times$$ have the closure property. The end result is the set of rational numbers:

$$ℚ=\left\{\frac ab:𝑎,𝑏∈ℤ,𝑏≠0\right\}.$$

Two rational numbers $$\frac ab$$ and $$\frac cd$$ are equal if and only if $$a\times d = c\times b$$. 

Operations over rational numbers:
* Addition: $$\frac ab+\frac cd = \frac{ad+bc}{bd}.$$
  * The additive inverse of $$\frac ab$$ is $$-\frac{a}{b}=\frac{-a}{b}=\frac{a}{-b}$$.
* Multiplication: $$\frac ab\times \frac cd = \frac{ac}{bd}.$$
  * If $$a\neq 0$$, the multiplicative inverse of $$\frac ab$$ is $$\frac{b}{a}$$.
* Subtraction: $$\frac ab-\frac cd = \frac ab+\left(-\frac cd\right)=\frac{ad-bc}{bd}.$$
* Division: $$\frac ab / \frac cd = \frac ab \times \frac db = \frac{ad}{bc}.$$ ($$b,c,d$$ are nonzero).

We can verify that $$\frac a1$$ and $$\frac b1$$  behave the same way as the integers $$a,b$$. So we consider $$a=\frac a1$$ and $$b=\frac b1$$. 

<div class="exercise">
  Using the appropriate definitions and the properties of addition and multiplication over integers, prove the distributive property for rationals, which states that <button  onclick="showSolution(this,'solID')" style="float:right;">Show Solution</button>
  \begin{equation*}
    \frac ab \left(\frac cd + \frac ef\right) = \frac {ac}{bd} + \frac{ae}{bf}.
  \end{equation*}
  In each step, indicate which property is used.
  <div id="solID" style="display:none;" class="solution">
    \begin{align*}
\frac{a}{b}\left(\frac{c}{d}+\frac{e}{f}\right) & \stackrel{i}{=}\frac{a}{b}\left(\frac{cf+de}{df}\right)\stackrel{ii}{=}\frac{a(cf+de)}{b(df)}\\
 & \stackrel{iii}{=}\frac{acf+ade}{bdf}\stackrel{iv}{=}\frac{acf}{bdf}+\frac{ade}{bdf}\\
 & \stackrel{v}{=}\frac{ac}{bd}+\frac{ae}{bf}
\end{align*}
<ol type="i">
  <li>Definition of addition of rationals</li>
  <li>Definition of multiplication of rationals</li>
  <li>Distributive property of multiplication over addition for integers and the associative property</li>
  <li>Definition of addition of rationals</li>
  <li>Equality of rational numbers (\(x/y=u/w\iff xw=yu\))</li>
</ol>
  </div>
</div>
<br/>

Now we have all we need to solve the equation $$5x+2=11$$:

\begin{align\*}
5x+2=11&\iff 5x+2-2 = 11 -2 \iff 5x=9\\\&\iff \frac15\times5 x = \frac15\times 9\iff x = \frac 95.
\end{align\*}

<div class="hw">
  Solve the equation \(ax+b=c\) over rational numbers, assuming \(a\neq0\).
</div>
<br/>


<div class="exercise">
  Write down a question that you still have about natural numbers, integers, or rationals.
</div>
<br/>
