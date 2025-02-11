---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
---


# Sets and set theory
In this section, we will briefly review the basics of set theory, given their use in the rest of the course.

## Sets
A **set** is a *well-determined*, *logically consistent* collection of distinct objects, for example, the set of all teapots, or prime numbers less than 100.

**Set theory** is the mathematical language for describing sets and operations on them.

We usually use "{" and "}" to enclose the elements of a set. Sets are usually unordered, so the set {dime, quarter} is the same as the set {quarter, dime}. If $$x$$ is in $$A$$, we say that it is a *member* of $$A$$ and write $$x\in A$$. 


Some examples:
* The set of prime numbers less than 10: $$\{2,3,5,7\}$$ 
* The set of *natural numbers*: $$\mathbb{N}=\{0,1,2,\dotsc\}$$
* The set of my favorite TV shows: {futurama, psych, breaking bad}
* The set of the first 13 letters of the English alphabet. 
* The set of even numbers: $$\{x\in\mathbb{N}: \exists k\in \mathbb N, x=2k\}$$.  This last one needs a bit of unpacking. 
    - What appears on the right of : restricts what appears on the left via some condition. 
    - $$\exists$$ is read as "there exists." 
    - So you can read the expression as the set of all natural numbers $$x$$ for which there exists a natural number $$k$$ such that $$x=2k$$.

<div class="exercise">
	Mathematically describe the set \(\{4,7,10,13,16,\dotsc\}\).
	<button  onclick="showSolution(this,'1mod3')" style="float:right;">Show Solution</button>

	<div id="1mod3" style="display:none;" class="solution">
		\(\{x\in\mathbb N: \exists k\in \mathbb N, x = 3k+4\}\)
	</div>
</div>
<br/>


*Why study set theory?* We study sets because they are foundational in mathematics. Also, information can be described as identifying a state among a *set* of possible states. Information is also closely related to probability, for which we again need sets. Finally, sets will be helpful in understanding analog and digital signals.

### Defining sets
To define a set, we can list its elements explicitly, e.g., $$A=\{1,3,5,7,9\}$$. We can also define a set as the collection of objects satisfying a precise property, e.g., the set of "positive odd integers". For any object $$x$$, we can determine whether or not it is a positive odd integer, so this property defines a set. 

If the property is vague or logically inconsistent, it cannot be used to define a set:
* A = "The set of tall students in this class". Is Jacob in this set? Being tall is not defined precisely, and so the set is ambiguous.
* B = "Set of all objects not in the B”. Is 5 in the set, or is it not? For a given element, to check if it satisfies the property, we already need to know what B is.

<div class="note">
<h3> <span class="note_emoji"></span>Naive Set Theory</h3>
<p>Our approach to set theory is called <strong>naive set theory</strong>. Naive set theory assumes that any precisely defined property can be used to define a set. This seemingly straightforward assumption leads to contradictions!</p>
 
<p><strong>Russell’s paradox:</strong> For any set, we can determine if it satisfies the property of being a member of itself. For example, \(A=\{A,2,7\}\) satisfies it but \(B=\{2,7\}\) does not. So let us define a set based on it: "Let \(R\) be the set of all sets that are not members of themselves". Is \(R\) a member of \(R\)?</p>

<p>Another way to illustrate the same paradox: Suppose a barber shaves all and only those who do not shave themselves. Does the barber shave himself? </p>
</div>

## Sets: relationships and operations

* Two sets are equal if they contain exactly the same members: 𝐴=𝐵
* Set $$A$$ contains set $$B$$ if all the elements of $$B$$ are members of $$A$$. This is written as $$B\subseteq A$$
* If $$A$$ contains $$B$$, and $$A$$ is contained in $$B$$, then $$A$$ and $$B$$ are equal.
* The *empty set* is the set with no elements. It is shown by: $$\varnothing$$. For any other set $$A$$, we have $$\varnothing\subseteq A$$.
* The universal set contains absolutely everything (where we get to define what everything is). It is shown by $$U$$. For any other set $$A$$, we have $$A\subseteq U$$.
* The complementary set, or complement, of a set is the set of everything that is not in the set. For a set $$A$$, its complement is shown by $$A^c$$. That is, $$A^c = \{x:x\not\in A\}.$$


<center><svg width="200" height="100" style="border:1px solid #000000;">
<rect x="0" y="0" width="200" height="100" style="fill:rgba(0,128,256,.1);"/>
<circle cx="90" cy="50" r="40" style="fill:rgba(0,256,128,.5);stroke:black"/>
<text x="2" y="20" font-style="italic">U</text>
<text x="60" y="50" font-style="italic">A</text>
<foreignObject x="150" y="33" width="30" height="20"> <div> \(A^c\) </div> </foreignObject>
</svg> </center>


### Set operations:
* Intersection: Elements that are in both $$A$$ and $$B$$: $$A\cap B = \{x:x\in A, x\in B\}$$.
* Union: Elements that are in $$A$$, in $$B$$, or in both: $$A\cup B = \{x:x\in A \text{ or }  x\in B\}$$.
* Difference: Elements that are in $$A$$ but not in $$B$$: $$A\setminus B = \{x:x\in A, x\not\in B\}$$.
  - Note: $$A\setminus B = A\cap B^c$$.

<center><svg id="setops" width="400" height="200" style="border:1px solid #000000;">
<rect x="0" y="0" width="400" height="200" style="fill:rgba(0,128,256,.1);"/>
<circle cx="150" cy="100" r="90" style="fill:rgba(0,256,128,.5);stroke:black"/>
<circle cx="250" cy="100" r="75" style="fill:rgba(256,128,0,.3);stroke:black"/>
<text x="2" y="20" font-style="italic">U</text>
<text x="85" y="30" font-style="italic">A</text>
<text x="270" y="30" font-style="italic">B</text>
<foreignObject x="100" y="90" width="50" height="20"> <div> \(A\setminus B\) </div> </foreignObject>
<foreignObject x="180" y="90" width="50" height="20"> <div> \(A\cap B\) </div> </foreignObject>
<foreignObject x="270" y="90" width="50" height="20"> <div> \(B\setminus A\) </div> </foreignObject>
<foreignObject x="192" y="165" width="50" height="20"> <div> \(A\cup B\) </div> </foreignObject>
</svg> </center>

<br/>

<div class="exercise">
	Let \(U=\mathbb N\), \(A\) be the set of even numbers, and \(B\) be the set of multiples of three. Write the following sets in a form similar to \[\{x\in \mathbb N: \exists k\in \mathbb N, x = k a + b \text{ or } \dotsm\},\] where \(a,b\in\mathbb N\).
		<button  onclick="showSolution(this,'sets1')" style="float:right;">Show Solution</button>
	<ol type='i'>
		<li>\(A^c\)</li>
		<li>\(A\setminus B\)</li>
		<li>\(B\setminus A\)</li>
		<li>\(A\cap B\)</li>
		<li>\((A\cup B)^c\)</li>
	</ol>
	<div id="sets1" style="display:none;" class="solution">
	<ol type='i'>
		<li>\(A^c=\{x\in\mathbb N: \exists k\in \mathbb N, x = 2k+1\}\)</li>
		<li>\(A\setminus B=\{x\in\mathbb N: \exists k\in \mathbb N, x = 6k+2 \text{ or } x=6k+4\}\)</li>
		<li>\(B\setminus A=\{x\in\mathbb N: \exists k\in \mathbb N, x = 6k+3\}\)</li>
		<li>\(A\cap B=\{x\in\mathbb N: \exists k\in \mathbb N, x = 6k\}\)</li>
		<li>\((A\cup B)^c=\{x\in\mathbb N: \exists k\in \mathbb N, x = 6k+1 \text{ or } x=6k+5\}\)</li>
	</ol>
	</div>
</div>
<br/>

<div class="exercise">
	Write down a question that you still have about sets and set theory.
</div>
<br/>