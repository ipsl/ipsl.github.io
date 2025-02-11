---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
---


# Fields

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



## What is a field?

Rational numbers form a field. This roughly means that the set of natural numbers, along with the operations $$+$$ and $$\times$$, is a comprehensive computational system: You can add, multiply, subtract, and divide (except division by 0).

<div class="highlight">
<strong>The components of a field:</strong>
<ul>
<li> A set</li>
<li> Two operations: \(+\) and \(\times\) with associative, commutative, closure, and distributive (\(\times\) over \(+\)) properties.</li>
<li> Identity elements: there are elements, denoted 0 and 1, in the set such that </li>
  <ul>
    <li>$𝑎+0=𝑎$, (additive identity)</li>
    <li>$𝑎×1=𝑎$, (multiplicative identity)</li>
  </ul>
<li> Inverse elements: there are −𝑎 and 1/𝑎 such that</li>
  <ul>
    <li>$𝑎+(−𝑎)=0$, (additive inverse)</li>
    <li>$𝑎×(1/𝑎)=1$, ($𝑎≠0$, multiplicative inverse)</li>
  </ul>
</ul>
</div>  

<p/>

<div class="exercise"> Why do you think the additive inverse is defined in terms of 0, i.e., \(a+(-a)=0\), but the multiplicative inverse is defined in terms of 1, i.e., \(a\times (1/a)=1\)?</div>

#### Subtraction and division
We can define subtraction and division as follows:
<div>
\begin{align*}
  b-a &=b+(-a), & b/a &= b\times (1/a),
\end{align*}
where for division we assume $a\neq 0$.
</div>


#### Exponentiation
As a shorthand, for a positive integer $$n$$ define 

<div>
  \begin{align*}
    x^n &= \underbrace{x\times x\times \dotsm\times x}_{n\text{ times}}, & x^{-n} &= 1/(x^n).
  \end{align*}
</div>

Additionally, $$x^0=1$$ for all $$x\neq 0$$.
### Finite Fields

The set of rational numbers is a field but there are also fields that have a finite number of elements. We will present some examples. To clearly distinguish finite field operations, addition and multiplication in finite fields are shown by $$\oplus$$ and $$\otimes$$, respectively.

####  The binary field $$\mathbb F_2$$ {#bbf2}
The simplest field is the binary field, called $$\mathbb F_2$$:
* The set : {0,1}
* Addition: &emsp;&emsp;$$\,0\oplus0 = 0,\quad 0\oplus1=1,\quad 1\oplus0=1,\quad 1\oplus1 = 0$$.
* Multiplication: $$0\otimes 0 = 0, \quad 0\otimes 1 = 0, \quad 1\otimes 0 = 0, \quad 1\otimes 1 = 1.$$
* Subtraction is the same as addition!
* Division is the same as multiplication, except that you cannot divide by 0.

We can show the operations as tables:


<div class="row">
<div class="column">
<table cellpadding="15px" style="border-collapse:collapse;float:left;" class="tabDefault">
<thead>
  <tr>
    <th>\(\oplus\)</th>
    <th>0</th>
    <th>1</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th>0</th>
    <td>0</td>
    <td>1</td>
  </tr>
  <tr>
    <th>1</th>
    <td>1</td>
    <td>0</td>
  </tr>
</tbody>
</table>
</div>
<div class="column">
<table cellpadding="15px" style="border-collapse:collapse;padding:100px;" class="tabDefault">
<thead>
  <tr>
    <th>\(\otimes\)</th>
    <th>0</th>
    <th>1</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th>0</th>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <th>1</th>
    <td>0</td>
    <td>1</td>
  </tr>
</tbody>
</table>
</div>
</div>

<p/>


If you are familiar with logical operators, then you can see that addition/subtraction in this field are the same as XOR, and multiplication is the same as AND.

<div class="exercise">  Verify that additive and multiplicative identities and inverses exist.<button onclick="showSolution(this,'F2')" style="float:right;">Show Solution</button>
</div>
<div class="solution" >
<div id="F2" style="display:none;">The additive identity is 0, and the multiplicative identity is 1. Also, the inverses are given as $$-0=0,\ -1 = 1,\ 1/1 = 1.$$</div>
</div>

<p/>
<div class="exercise"> Can you fill the above tables in any other way and still have a field?</div>


#### The ternary field, $$\mathbb F_3$$: {#bbf3}
* The set: {0,1,2}
* Addition:       	$$\qquad 𝑎\oplus 𝑏 = \text{ remainder of normal addition by 3}$$
* Multiplication:  	$$\ 𝑎\otimes 𝑏= \text{ remainder of normal multiplication by 3}$$
* Define $$\quad 𝑎/𝑏=𝑎\otimes(1/𝑏)\quad$$ and $$\quad 𝑎−𝑏=𝑎\oplus (−𝑏)$$

<div class="row">
<div class="column">
<table cellpadding="15px" style="border-collapse:collapse;float:left;" class="tabDefault">
  <caption> Addition in $$GF(3)$$</caption>
<thead>
  <tr>
    <th>\(\oplus \)</th>
    <th>0</th>
    <th>1</th>
    <th>2</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th>0</th>
    <td>0</td>
    <td>1</td>
    <td>2</td>
  </tr>
  <tr>
    <th>1</th>
    <td>1</td>
    <td>2</td>
    <td>0</td>
  </tr>
  <tr>
    <th>2</th>
    <td>2</td>
    <td>0</td>
    <td>1</td>
  </tr>
</tbody>
</table>
</div>
<div class="column">
<table cellpadding="15px" style="border-collapse:collapse;padding:100px;" class="tabDefault">
<thead>
  <tr>
    <th>\(\otimes\)</th>
    <th>0</th>
    <th>1</th>
    <th>2</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th>0</th>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <th>1</th>
    <td>0</td>
    <td>1</td>
    <td>2</td>
  </tr>
  <tr>
    <th>2</th>
    <td>0</td>
    <td>2</td>
    <td>1</td>
  </tr>
</tbody>
</table>
</div>
</div>
These are also called addition and multiplication modulo 3.




<div class="exercise"> Find the identity elements.</div>
<p/>
<div class="exercise"> Find the inverse of each element.
<p>
\(-0\) = <span id="inv-0" style="visibility:hidden;" class="solution"> 0</span>
\(\qquad-1\) = <span id="inv-1" style="visibility:hidden;" class="solution"> 2</span>
\(\qquad-2\) = <span id="inv-2" style="visibility:hidden;" class="solution"> 1</span>
\(\qquad\)<button  onclick="showSolution(this,['inv-0','inv-1','inv-2','inv-3'])" style="float:right;">Show solution</button>
<div id="inv-3" style="display:none;" class="solution"> We can find \(-x\) from the addition table by finding the 0 in the row corresponding to \(x\). For example, in the row corresponding to 1, the 0 is in the last position, below 2, which means 1\oplus 2=0.</div>
</p>
<hr/>
<p>
\(1/1\) = <span id="inv-5" style="visibility:hidden;" class="solution"> 1</span>
\(\qquad1/2\) = <span id="inv-6" style="visibility:hidden;" class="solution"> 2</span>
\(\qquad\)<button  onclick="showSolution(this,['inv-5','inv-6','inv-7'])" style="float:right;">Show solution</button>
<div id="inv-7" style="display:none;" class="solution"> We can find \(1/x\) from the multiplication table by finding the 1 in the row corresponding to \(x\).</div>
</p>
</div>
<p/>
<div class="exercise"> Does the set {0,1,2,3} with \(+,\times\) computed modulo 4 form a field? If not, which properties are not satisfied?</div>


## Detour: finite fields and data protection

Regardless of its type, you can view the data stored on your hard drive as a number. Let's use a toy example to see how this data could be protected. Suppose we have hard drives that can stores a number from the set {0,1,2}. We have two such numbers to store, $$x_1$$ and $$x_2$$. How can we protect against the failure of one of these drives?

Obviously, we can get two additional hard drives and keep two copies of $$x_1$$ and two copies of $$x_2$$. But can we do better, i.e., use fewer drives? 

Idea: Add one new hard drive and write $$x_3=x_1+x_2$$ on it. 

But $$x_1+x_2$$ could be larger than 2, which won’t fit on the third drive. Instead of looking at these numbers as integers, let's view them as elements of $$\mathbb F_3$$. Then, we can write $$x_3=x_1\oplus x_2$$ (modulo 3).

So we have three drives with these values: $$\{x_1,x_2,x_3\}$$, where $$x_3 = x_1\oplus x_2$$. Let's see how we can recover our data if any one drive fails.
* If drive 1 fails, then $$x_1=x_3\ominus x_2$$.
* If drive 2 fails, then $$x_2 = x_3 \ominus x_1$$.
* If drive 3 fails, we haven't lost any data but to protect against future failures, we should store $$x_1\oplus x_2$$ on a new drive.

<div class="exercise">
  Suppose drive 1 has failed but we know \(x_2=2,x_3=1\). What was the data on drive 1?
  <button  onclick="showSolution(this,'1redun')" style="float:right;">Show Solution</button>

  <div id="1redun" style="display:none;" class="solution">
    \[x_1=x_3\ominus x_2=1 \ominus 2 = 1 \oplus (-2) = 1\oplus 1 = 2.\]
  </div>
</div>
<br/>


<div class="exercise">
  To protect against two failures we let 
  \begin{equation}\label{eq:4D}
  \begin{cases}
x_{3}=x_{1}\oplus x_{2}\\
x_4 = x_{1}\ominus x_{2}
  \end{cases} 
  \end{equation}
  Show that if any of two drives fail, we can recover our data.
  <button  onclick="showSolution(this,'redun2')" style="float:right;">Show Solution</button>

  <div id="redun2" style="display:none;" class="solution">
    We show this for the case when drives 1 and 2, the original drives, fail. The other cases are left as an exercise (it is enough to submit your solution for when 1,3 and 1,4 fail).
    \begin{align*}
\begin{cases}
    x_{1}\oplus x_{2}=x_{3}\\
    x_{1}\ominus x_{2}=x_{4}
\end{cases} & \Rightarrow2x_{1}=x_{3}\oplus x_{4}\Rightarrow x_{1}=\frac{x_{3}\oplus x_{4}}{2}\\
x_{2} & =x_{3}\ominus x_{1}=\frac{x_{3}\ominus x_{4}}{2}
\end{align*}
As an example for \(x_{3}=0\) and \(x_{4}=2\), we find \(x_{1}=1\), \(x_{2}=2\).
  </div>
</div>
<br/>

<div class="exercise">
  <p><strong>Why are fields needed?</strong> It seems that we only needed the modulo arithmetic and did not really need to be concerned with fields. However, this is not true, as the situation becomes complicated if we are not working with a field.</p>

  <p>For instance, modulo 4 operations do not form a field, and using them would fail. To see this, suppose our hard drives could store \(\{0,1,2,3\}\). We would then need to do modulo 4 arithmetic. Show that if $x_3=x_4=1$, equations \eqref{eq:4D} have another set of solution in addition to \(x_1=1,x_2=0\).</p>
</div>
<br/>
<div class="exercise">
  Write down one question that you still have about the material in this section.
</div>
<br/>

