---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
---
# Vectors and Spaces

## Motivation

### Linear equations and protecting information
Recall:
  1.   Fundamental Tenet V: Error-correction requires restricting possible messages
  2.   One way to enforce such restrictions is linear equations

Let us remind ourselves of the connection via an example: Consider a vector of 3 bits $(a, b, c)$ received from a transmitter. Suppose there is some small chance that one of these bits were decoded incorrectly. Can we determine if an error occurred? The answer is no.

Now, suppose the transmitter guarantees that $a + b + c$ will add up to an even number, that is $a\oplus b \oplus c =0$ in $\mathbb F_2$. Are we able to detect errors?

For more powerful error-correction and -detection, we will enforce more restrictions, and thus more equations. These equations will be represented in terms of _vectors_ and _matrices_, which are studied in _linear algebra_. Hence, the systematic study of error-correction relies on linear algebra.

<!--
<div style="float: right;"><img src="{{site.imgurl}}/ecccard.png" width="200px"></div>
Image credit: Wikipedia/Pete Birkinshaw 
These error correcting
codes were first
developed for detecting
errors in punched cards
used in early computers.-->

### Linear algebra and its applications

<div style="float: right;"><img src="https://imgs.xkcd.com/comics/machine_learning.png" width="300px"></div>
Linear algebra is the study of (linear) equations and operations. It is foundational to many elements of mathematics, science, and engineering.
* In the abstract sense, linear algebra describes the theory of vectors and operations involving them.
* In the practical sense, linear algebra concerns the computations involving vectors, including solving linear equations and analyzing vectors and matrices.


Some exciting areas that require a deep foundation in linear algebra:
* Machine learning
* Data science
* Robotics
* Computer Vision, and processing of images and signals

In addition to protecting information, which is our main focus, linear algebra connects to the
study of information in other ways, including the study of linear time-invariant systems and representation of signals as a combination of simpler components (principal component analysis).

### Linear algebra over fields
For error correction the algebra is performed over finite sets, e.g., $$\{0, 1\}$$, bytes, etc.
But in other applications, real or complex fields are more common. 
Generally, we can do linear algebra over _any_ field, finite or infinite. The basic principles are the same though, regardless of the field, and viewing them from the finite field point of view will help us understand the foundational ideas of linear algebra better. 
We will start with algebra over real numbers, also known as Euclidean space
* Easier to get intuition
* Useful in many applications
* Very few concepts depend on the underlying field
* We will see examples from finite fields along the way

In the next section, our focus will return to finite fields. 


## Introduction to Linear Algebra
### Linear Equations
What is a linear equation? Equations without products or powers greater than $1$ of the variables (no $xy$, $x^2$). More specifically, a linear equation is an equation of the form 

$$a_1 x_1 + a_2 x_2 +\dotsm + a_n x_n = a_0,$$

where $a_i$ are numbers (constants) and are called _coefficients_, and $x_i$ are variables, i.e., they can take different values. Notice that there are no terms of the form $x_1^2$ or $x_1x_2$, making the equation linear. Here's an  example:

$$3 x + 5 y = 2,$$

where the coefficients are 3, 5, 2 and the variables are $x$ and $y$.

If variables are viewed as coordinates, a linear equation describes a line or plane in two or more
dimensions:

<!-- linear/affine -->

<table width="100%">
<tr>
  <td width="45%"><div align="center"><img src="assets/img/lineq2d.png" width="200px"></div></td>
  <td width="45%"><div align="center"><img src="assets/img/lineq3d.svg" width="300px"></div></td>
</tr>
<tr>
  <td width="45%"><div align="center"> $$-x + 2y = 1$$</div></td>
  <td width="45%"><div align="center">$$x-y+z-4=0 $$</div></td>
</tr>
</table>

#### Reminder: equations and geometry
Since we will deal with geometric representations below, let's remind ourselves how lines and planes are represented.

<ul>
<li>A line in two dimensions is represented by an equation of the form

\begin{equation}  a x + b y + c = 0,\qquad a,b,c\in \mathbb R.\label{eq:line}\end{equation}

If $a\neq 0$, then we can write this equation (with different $a,b$) as

\begin{equation}  y = a x + b,\qquad a,b\in \mathbb R.\label{eq:line-can}\end{equation}

For example, the line $y = \frac x2 -1 \iff 2y-x +1 = 0$ is given in the graph below.

<center><div id="fig0" class="jxgbox" style="width:200px; height:200px;"></div></center>
<script>
JXG.Options.text.useMathJax = true;
var fig0 = JXG.JSXGraph.initBoard('fig0', {boundingbox: [-5, 5, 5, -5], axis: true, showCopyright: false, showNavigation: false});
var vec1 = fig0.create('line', [[0,- 1],[1,-.5]],{color:'red'});
</script>
<br/>

<br>
<div class="exercise">
Plot the line represented by $2x+y = 1.$
</div><br>
</li>
<li>A plain in three dimensions is represented by an equation of the form

\begin{equation}  a x + b y + c z + d = 0,\qquad a,b,c,d\in \mathbb R.\label{eq:plane}\end{equation}

If $a,b\neq 0$, then we can write the plane (with different $a,b,c$) as

\begin{equation}  z = a x + b y + c,\qquad a,b,c\in \mathbb R.\label{eq:plane-can}\end{equation}

</li>
<li>A line in three dimensions is the intersection of two planes and can be written as a system containing two equations of the form \eqref{eq:plane}.</li>
</ul>

### Vectors

A vector is:
* An ordered sequence of numbers, usually arranged in a column
* A line with a given length (aka magnitude) and direction, but no particular starting point




<!--A matrix is:
* An ordered set of vectors with the same number of elements arranged next to each other.

For example, below, $v$ is a vector and $M$ is a matrix:

$$v = \begin{pmatrix}1\\2\\3\end{pmatrix},\qquad v = \begin{pmatrix}1 & 4 & 7 & 10\\2 & 5 & 8 & 11\\3&6&9&12\end{pmatrix}.$$

Recall that 
* A vector describes an ordered sequence of numbers
* If the vector consists of  numbers, it is -dimensional

We can represent vectors geometrically. Some examples of vectors: 
* $(1,0,0)$ and $(0,0,1)$
* $3-2i$ (complex number as a vector)-->

For example,

$$v = \begin{pmatrix}1\\2\\3\end{pmatrix}$$

is a vector. We might also write a vector as a row,

$$v = (1,2,3).$$

In this section, we alternate between the column and row representations as convenient, that is, both notations represent the same object. Later, when we deal with matrices, we'll be more careful! The terms _column vector_ and _row vector_ are used to distinguish the arrangement if necessary. 

The number of elements in a vector is called its _dimension_. For example, $v$ is a 3-dimensional vector.

#### Geometric representation, magnitude and direction
<div  style="float: right;"><div id="box" class="jxgbox" style="width:200px; height:200px;"></div></div>
<script>
JXG.Options.text.useMathJax = true;
var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-1, 5, 5, -1], axis: true, showCopyright: false, showNavigation: false});
var vec1 = board.create('arrow', [[0,0],[2,3]]);
var vec2 = board.create('arrow', [[1,4],[4,3]],{color:'red'});
board.create('text',[1.05,1.5,'$$v_1$$'],{color:'blue',fontSize:18});
board.create('text',[2.5,4.4,'$$v_2$$'],{color:'red',fontSize:18});
</script>

We can represent vectors geometrically by interpreting their elements as coordinates in a coordinate system in the Euclidean space. We assume that the origin is the starting point of the vector and the end point is the point whose coordinates are given by the elements of the vector. So there is correspondence between vectors and points in the space. But note that the vector can be moved in the space. The geometric representation of the vectors 

$$v_1 = \begin{pmatrix}2\\3\end{pmatrix},\qquad v_2 = \begin{pmatrix}3\\-1\end{pmatrix}$$

are given, one starting at the origin and the other starting at $\begin{pmatrix}1\\\\4\end{pmatrix}$.

<div  style="float: right;"><div id="box2" class="jxgbox" style="width:200px; height:200px;"></div></div>
<script>
JXG.Options.text.useMathJax = true;
var board2 = JXG.JSXGraph.initBoard('box2', {boundingbox: [-1, 5, 5, -1], axis: true, showCopyright: false, showNavigation: false});
var vec1 = board2.create('arrow', [[0,0],[4,3]]);
board2.create('line',[[0,0],[4,0]],{straightFirst:false, straightLast:false, strokeWidth:2, color:'brown'});
board2.create('line',[[4,0],[4,3]],{straightFirst:false, straightLast:false, strokeWidth:2, color:'brown'});
board2.create('text',[1.05,2.5,'$$\\\\|v\\\\|$$'],{color:'blue',fontSize:18});
board2.create('text',[.6,.8 ,'$$\\\\alpha$$'],{color:'blue',fontSize:18});
</script>

For vectors in Euclidean space, we can define "magnitude" and "direction".
Magnitude is a measure of length or size. Direction describes the geometry or angle of the vector. For a vector $v$, the magnitude is shown by $\\|v\\|$.


In 2D Cartesian coordinates, the vector would correspond to the hypotenuse of a right
triangle. The magnitude is the length of the hypotenuse, and the direction is given by its angle relative to the $x$ axis:

$$v = \begin{pmatrix}a\\b\end{pmatrix},\qquad \|v\| = \sqrt{a^2+b^2},\qquad \alpha = \tan^{-1}\frac ba.$$

The magnitude can be found in a similar way for larger than 2 dimensions, e.g. as $ \sqrt{a^2+b^2+c^2}$ for $(a,b,c)$.

<!-- for visualization maybe redirect them to watch 3blue1brown, it is better than we reinvent the wheel here. -->

### Operations on Vectors



<div  style="float: right;"><div id="fig3" class="jxgbox" style="width:220px; height:200px;"></div></div>
<script>
JXG.Options.text.useMathJax = true;
var fig3 = JXG.JSXGraph.initBoard('fig3', {boundingbox: [-1, 5, 6, -1], axis: true, showCopyright: false, showNavigation: false});
var vec1 = fig3.create('arrow', [[0,0],[2,3]]);
var vec2 = fig3.create('arrow', [[2,3],[5,1]],{color:'red'});
var vec3 = fig3.create('arrow', [[0,0],[5,1]],{color:'brown'});
</script>

#### Addition
Definition: The sum of two vectors $(u_1 , u_2 ,  \cdots , u_n  )$ and $(v_1 , v_2 , \cdots  , v_n )$ is $(u_1 + v_1 , u_2 + v_2 , \cdots  , u_n + v_n)$.

Examples:
* $(2,3) + (3,-2) = (5,1)$. (The geometric representation is given in the figure.)
* $(-1,0,1) + (-2,2,0) = (-3, 2, 1)$.



<div  style="float: right;"><div id="fig4" class="jxgbox" style="width:220px; height:200px;"></div></div>
<script>
JXG.Options.text.useMathJax = true;
var fig4 = JXG.JSXGraph.initBoard('fig4', {boundingbox: [-1, 5, 6, -1], axis: true, showCopyright: false, showNavigation: false});
var vec2 = fig4.create('arrow', [[0,0.05],[6,4.05]],{color:'red',strokeWidth:2});
var vec1 = fig4.create('arrow', [[0,0],[3,2]],{strokeWidth:2});
</script>
#### Scalar Multiplication
We can also multiply vectors by numbers.                                                                              
* The result is a scaled version of the vector.
* In the context of linear algebra, numbers are called _scalars_. 
<!-- plot? -->

Definition: The product of a scalar $a$ and a vector $v = (v_1 , v_2 , \cdots , v_n )$ is $(av_1, av_2, \cdots, av_n)$.

Example: $2(3,2) = (6, 4)$

#### The zero vector
If we multiply any vector by the scalar 0, we get a vector all of whose elements are 0. This vector is represented by $\mathbf{0}$. It also has the property that adding it to any vector $v$ yields $v$ back: $v+\mathbf{0}= v$. The $\mathbf 0$ vector is specially important when dealing with spaces and linear transformations discussed below.

<!--(This is obvious for the vectors we deal with but not so in more complex settings.)
*  Any scaling of the zero vector should give the zero vector back.
*  Scaling any vector by the scalar 0 results in the $\mathbf{0}$ vector.
* In common cases: for the 2D coordinate vector, it is just $(0,0)$.-->


### Linear Transformations
Linear algebra also concerns itself with _linear transformations_.
An operation is linear if it satisfies the following properties:
* Scaling: $T(ax) = aT(x)$, for any number number $a$ and vector $x$
* Additivity: $ T(x + y) = T(x) + T(y)$ for any vectors $x,y$

This definition can be extended to any context in which multiplication by a number and addition are defined:
*  Expected value is linear: $E[aX] = aE[X], E[X+Y] = E[X] + E[Y]$
*  Other examples we will see: Matrix-vector multiplication, Fourier transform, linear filters

<div class="exercise">
  <button  onclick="showSolution(this,'linOp')" style="float:right;">Show Solution</button>
  For a vector $v$, define $T(v) = 2v$. 
  <ul>
    <li> Find $T((3,5,1))$.</li>
    <li> Verify that $T((3,5,1))+T((1,2,-1)) = T((3,5,1)+(1,2,-1))$.</li>
    <li> Prove that $T$ is linear.</li>
  </ul>
  <div id="linOp" style="display:none;" class="solution">
  <ul>
    <li> $T((3,5,1)) = T(6,10,2)$.</li>
    <li> $T((3,5,1))+T((1,2,-1)) = (6,10,2)+(2,4,-2) = (8,14,0) = T((4,7,0))=T((3,5,1)+(1,2,-1))$.</li>
    <li>\begin{align*}
      T(a v) &= 2av = a (2v) = a T(v) \\
     T(x+y)& = 2(x+y) = 2x+2y = T(x)+T(y).
  \end{align*}</li>
  </ul>
  </div>
</div>
<br/>

<div class="exercise">
Is $T(v) = 2v+(1,1)$, where $v$ is a 2-dimensional vector, linear? If so, prove it. If not, provide a counter example.
</div>
<br/>

<div class="exercise">
  <button  onclick="showSolution(this,'zero')" style="float:right;">Show Solution</button>
  For any linear transformation $T$ which takes an $n$-dimensional vector as input and produces an $n$-dimensional vector, prove that $T(\mathbf 0) = \mathbf0$.
  <div id="zero" style="display:none;" class="solution">
    Hint: use the scaling property of linear transformations with an appropriate choice of $a$.
  </div>
</div>
<br/>

<div class="exercise">
  <button  onclick="showSolution(this,'rot')" style="float:right;">Show Solution</button>
  For a vector $v=(a,b)$, define $T(v) = 3a-2b$. 
  <ul>
    <li>Find $T(1,-3)$.</li>
    <li>Prove or disprove the linearity of $T$.</li>
  </ul>
  <div id="rot" style="display:none;" class="solution">
    For the first part: $T(1,-3) = 3(1)-2(-3) = 3+6 = 9.$
    <p>For the second part, you need to show that for $v_1 = (a_1,b_1)$ and $v_2 = (a_2,b_2)$ and a scalar $c$, 
    \begin{align*}
     T(c v_1)& = cT(v_1).\\
      T(v_1+v_2) & = T(v_1) + T(v_2).
      \end{align*}</p>
  </div>
</div>
<br/>
<br/>


## Vector Spaces

Linear algebra defines three kinds of objects:
* Vector: the elementary object involved in linear algebra; for instance, a pair of coordinates $(x,y)$.
* Vector space: a collection of vectors that satisfies certain properties.
* Linear transformations: a mapping from one vector space to another that satisfies linearity.

Abstract linear algebra will work on theoretical versions of such objects; we'll work with concrete examples.


### Spaces
Working with vectors is more useful if we can manipulate them via operations, specifically, vector addition and scalar multiplication. But if these operations produce objects that we cannot represent, this can be problematic. For example, if we deal with binary vectors, their addition, if not defined properly, can lead to vectors that are not binary. The concept of vector spaces helps us avoid such issues. 

A _vector space_ is a collection of vectors, including the zero vector, that is
* closed under vector addition (sum of any two vectors is again a vector in the space) and
* closed under scaler multiplication (multiplying any vector by a scaler is again a vector in the space)

Some common vector spaces:
* $\mathbb{R}^n$ ($n$-dimensional Euclidean space): e.g., $\mathbb{R}^2$.
    *  Each vector is an ordered sequence of $n$ real numbers
    *  Scalars are also real numbers.
<!--* $\mathbb{C}$ (complex numbers): The set of complex numbers (representing real and imaginary parts as vector components). The scalars are also complex numbers -->
<!--* $\mathbb{C}$ is also a field. We can decide which way to look at it. _Not all vector spaces are fields._-->
* Binary vectors of length $n$
    * Vectors $(n=3)$: $(0,0,0), (0,0,1),(0,1,0),(0,1,1),(1,0,0),(1,0,1),(1,1,0),(1,1,1)$
    * Scalars are $$\{0,1\}$$
    * Computation performed in $\mathbb{F}_2$.
* Polynomials with real coefficients:
    * Vectors: $a_0 + a_1x  + a_2x^2 + \cdots, a_ix^i$ are real     <!-- ??? -->
    * Scalars: real numbers

<div class="exercise">
      <button  onclick="showSolution(this,'BinVecComp')" style="float:right;">Show Solution</button>
      Consider binary vectors of length 3 with scalar multiplication and vector addition defined in $\mathbb F_2$. Find 
      <ul>
        <li>$(1,0,1) + (0,1,1)$</li>
        <li>$0\cdot (1,0,1)$</li>
        <li>$1\cdot (1,0,1)$</li>
      </ul>
      <div id="BinVecComp" style="display:none;" class="solution">
      <ul>
        <li>$(1,0,1) + (0,1,1) = (1,1,0).$</li>
        <li>$0\cdot (1,0,1) = (0,0,0).$</li>
        <li>$1\cdot (1,0,1) = (1,0,1).$</li>
      </ul>      </div>
    </div>
<br/>


<div class="exercise">
  <button  onclick="showSolution(this,'BinNVec3')" style="float:right;">Show Solution</button>
  Show that the set of binary vectors of length $3$ with the addition and scalar multiplication operations defined above is a vector space.
  <div id="BinNVec3" style="display:none;" class="solution">
    For a binary vector $v$,
      \begin{align*}
       1 \cdot v & = v \\
       0 \cdot v & = (0,0,0).
        \end{align*}
        Note that the results, both $v$ and $(0,0,0)$ are in the set. 
        <p>Let $v = (a,b,c)$ and $u = (d,e,f)$ be binary vectors of length 3. Then
        $$u+v = (a\oplus d, b\oplus e, c\oplus f).$$
        Since each element, e.g., $a\oplus d$, on the right side is either 0 or 1, $u+v$ is in the set. (Recall that $a\oplus d = 0$ if $a=d$ and $a\oplus d = 1$ if $a\neq d$.)
      </p>
  </div>
</div>
<br/>

<div class="exercise">
  <button  onclick="showSolution(this,'BinVec3')" style="float:right;">Show Solution</button>
  Show that the set of binary vectors of length $3$ with the addition and scalar multiplication operations defined similar to integers is not a vector space.
  <div id="BinVec3" style="display:none;" class="solution">

    Consider the two vectors $(1,0,1)$ and $(0,1,1)$. Their sum is $(1,1,2)$, which is not a binary vectors. So Binary vectors with integer operations do not form a vector space.
  </div>
</div>
<br/>

Every vector space must contain the $\mathbf 0$ vector. This is because if we multiply 0 by any vector, the result is $\mathbf 0$, which must be contained in the space by definition. The smallest nonempty space is the space containing $\mathbf 0$ only, i.e., $\\{\mathbf 0\\}$.

### Subspaces

<div style="float: right;"><img src="assets/img/vSubspace.png" width="200px"></div>
Note that both $\mathbb R^2$ (two-dimensional Euclidean space) and $\mathbb R^3$ (three-dimensional Euclidean space) are spaces. But one of them can be contained in the other. Such structures are called subspaces.

A _subspace of a vector space_ is a collection of vectors which is itself a vector space.

What are the subspaces of $\mathbb{R}^2$?
* $\\{\mathbf 0\\}$.
* Any line that goes through $\mathbf 0$.
* $\mathbb R^2$ itself.

Examples are given in the figure below.

<center><div id="fig5" class="jxgbox" style="width:220px; height:200px;"></div></center>
<script>
JXG.Options.text.useMathJax = true;
var fig5 = JXG.JSXGraph.initBoard('fig5', {boundingbox: [-5, 5, 5, -5], axis: true, showCopyright: false, showNavigation: false});
var vec1 = fig5.create('point', [0,0], {color:'green',name:''});
var vec1 = fig5.create('line', [[0,0],[2,1]]);
var vec2 = fig5.create('line', [[2,3],[0,0]],{color:'red'});
var vec3 = fig5.create('line', [[0,0],[-5,1]],{color:'brown'});
</script>

Why are lines that go through the origin represent subspaces? Consider for example the line that goes through 

$$\mathbf 0 = \begin{pmatrix}0\\0\end{pmatrix}, \qquad v = \begin{pmatrix}2\\1\end{pmatrix}.$$

The elements of this subspace are the vectors that are scaled versions of $v$, so they are on the same line. Specifically, the set is

$$\{u: u = av\}$$

* This is closed under addition. Let $u_1 = a_1v,u_2 = a_2 v$. Then $u_1 + u_2 = a_1v+a_2v = (a_1+a_2)v.$
* It is also closed under scalar multiplication. Let $u = a v$ for some scalar $a$ and let $b$ be another scalar. Then $bu = bav = (ba)v$.

<center><div id="fig6" class="jxgbox" style="width:220px; height:200px;"></div></center>
<script>
JXG.Options.text.useMathJax = true;
var fig6 = JXG.JSXGraph.initBoard('fig6', {boundingbox: [-5, 5, 5, -5], axis: true, showCopyright: false, showNavigation: false});
var vec3 = fig6.create('arrow', [[0,0],[2,1]],{color:'brown'});
var vec1 = fig6.create('line', [[0,0],[2,1]],{strokeWidth:1});
</script>


What are the subspaces of $\mathbb{R}^3$ ?
* $\\{\mathbf 0\\}$.
* Any line that goes through $\mathbf 0$.
* Any plane that goes through $\mathbf 0$.
* $\mathbb R^3$ itself.
<!-- plot? -->

### Linear Combination
Given a set of vectors, if we multiply them by scalars and then add them, we have obtained a _linear combination_ of the vectors. For example,  $av_1 + bv_2 + cv_3$ is a linear combination of $v_1 , v_2 , v_3$.

For example, a linear combination of $\color{brown}{(3,1)},\color{blue}{(2,3)}$ is

$2\color{brown}{(3,1)}-1.5\color{blue}{(2,3)} = \color{purple}{(3,-2.5)}$.

One way to view a linear combination is by considering moving to a point by starting from the origin and taking steps equal to the vectors (the steps could also be a fraction of the vectors). 

In the graphs below, on the left you can see the vectors $\color{brown}{(3,1)}$ and $\color{blue}{(2,3)}$, and on the right you can see that moving two multiples of $\color{brown}{(3,1)}$ and -1.5 multiples of $(2,3)$, leads to $\color{blue}{(2,3)}$.


<table width="80%">
  <tr>
    <td width="50%"><div id="fig7" class="jxgbox" style="width:220px; height:200px;"></div></td>
    <td width="50%"><div id="fig8" class="jxgbox" style="width:220px; height:200px;"></div></td>
  </tr>
</table>

<script>
JXG.Options.text.useMathJax = true;
var fig7 = JXG.JSXGraph.initBoard('fig7', {boundingbox: [-1, 4, 7, -4], axis: true, showCopyright: false, showNavigation: false});
fig7.create('arrow', [[0,0],[3,1]],{color:'brown'});
fig7.create('arrow', [[0,0],[2,3]],{color:'blue'});
</script>


<script>
JXG.Options.text.useMathJax = true;
var fig8 = JXG.JSXGraph.initBoard('fig8', {boundingbox: [-1, 4, 7, -4], axis: true, showCopyright: false, showNavigation: false});
fig8.create('arrow', [[0,0],[3,1]],{color:'brown'});
fig8.create('arrow', [[3,1],[6,2]],{color:'brown'});
fig8.create('arrow', [[6,2],[4,-1]],{color:'blue'});
fig8.create('arrow', [[4,-1],[3,-2.5]],{color:'blue'});
fig8.create('arrow', [[0,0],[3,-2.5]],{color:'purple'});
</script>

As another example, a linear combination of $$\{(1,0,1),(0,1,2),(2,3,5)\}$$ is

$$2(1,0,1)-(0,1,2) + 3(2,-3,5) = (8,-10,15).$$

For a set of vectors $$\{v_1 , v_2 ,\cdots, v_n\}$$, the set of all linear combinations is called their **span**, shown by span$(v_1, v_2 ,\cdots, v_n )$. The set of all linear combinations of $$\{(1,0,1),(0,1,2)$$ are the vectors

$$a(1,0,1) + b(0,1,2) = (a, 0, a) + (0, b, 2b) = (a, b, a + 2b).$$ 

So 

$$\text{span}((1,0,1),(0,1,2)) = \{(a,b,a+2b):a,b\in\mathbb R\}$$

This is a plane in 3d space, given by $z = x+2y$ and shown in the figure below. The black and red lines are the vectors $(1,0,1),(0,1,2)$, which of course lie in the plane they span.

<div>
  <img src="assets/img/span1.svg" width="400px">
  <video width="400px" controls>
  <source src="assets/media/span1.mp4" type="video/mp4">
Your browser does not support the video tag.
</video></div>


<div class="exercise">
  <button  onclick="showSolution(this,'span1')" style="float:right;">Show Solution</button>
    Find the span of $v_1 = (1,1,2), v_2 = (0,1,1)$. 
  <div id="span1" style="display:none;" class="solution">
    $$av_1+bv_2 = (a,a,2a)+(0,b,b) = (a,a+b,2a+b).$$
    So the span is the set of all vectors of the form 
    $$\{(a,a+b,2a+b):a,b\in \mathbb R\}.$$
    Using MATLAB, we find that this also represent a plane in $\mathbb R^3$:
    <img src="assets/img/span1.svg">
  </div>
</div>
<br/>
<div class="exercise">
  Find the span of $v_1 = (0,1,2), v_2 = (0,2,4)$. 
</div>
<br/>
  
### Spans and subspaces
*The span of a set of vectors is a subspace!*

Recall that the subspaces of $\mathbb R^3$ are the origin, lines going through the origin, and planes going through the origin.
In $\mathbb{R}^3$ , let $v_1 = (1,0,0) , v_2 = (1,2,0) , v_3 = (0,0,1)$.
  * span$(v_1) =$ x-axis
  * span$(v_2) =$ $(a, 2a, 0)$
  * span$(v_1, v_2) =$ x,y-plane
  * span$(v_2, v_3) =$ $(a, 2a, b)$
  * span$(v_1, v_2, v_3) =$ $\mathbb{R}^3$

<div class="exercise">
  <button  onclick="showSolution(this,'span3')" style="float:right;">Show Solution</button>
  Prove that span$(v_2, v_3)$ is a subspace.
  <div id="span3" style="display:none;" class="solution">
    Let $u$ and $v$ be vectors in this subspace. Then we can write 
    $$ u = a v_2 + b v_3\\ v = c v_2 + dv_3,$$
    for scalars $a,b,c,d$.
    Then
    $$ u + v = (a+c) v_2 + (b+d) v_3,$$
    which is in span$(v_2, v_3)$. Also, for an scalar $a'$, 
    $$a'u = (a'a)v_2+(a'b)v_3,$$
 which is again in the span. So the span is closed under both vector addition and scalar multiplication and is thus a subspace.
  </div>
</div>
<br/>

### Linear Independence
In $\mathbb{R}^3$, let $v_1 = (1,0,0), v_2 = (1,2,0) , v_3 = (4,4,0)$.
*  span$(v_1 )=$ x-axis
*  span$(v_1 , v_2 )=$ x,y-plane
*  span$(v_1 , v_2 , v_3 )=$ x,y-plane

Why does adding $v_2$ make the subspace larger but adding $v_3$ doesn't? This is because $v_3 = 2v_1 + 2v_2$ and so whatever it can "provide" in terms of ability to construct new vectors is already provided by $v_1$ and $v_2$. 

Suppose we have a set of vectors $$\{v_1, v_2, \cdots , v_N\}$$. They are _linearly independent_ if there is no
vector that can be written as a linear combination of the others. For example, if $v_N$ can be written as  

$$v_N = a_1 v_1 + a_2 v_2 + \dotsm + a_{N-1}v_{N-1},$$

then the vectors are not linearly independent.

The vectors are linearly independent if and only if $a_1v_1 + a_2v_2 + \cdots + a_nv_n = \mathbf{0}$ implies that $a_1 = a_2 = \cdots = a_N = 0$ (and there are no other values of $a_i$ satisfying the equation).

<div class="exercise">
  <button  onclick="showSolution(this,'span4')" style="float:right;">Show Solution</button>
  Is this set linearly independent? $$(-1, 0, 1), (2, -1, 1), (1, 1, 1).$$ 
  <div id="span4" style="display:none;" class="solution">
$$a(-1, 0, 1) + b(2, -1, 1) + c(1, 1, 1)= \mathbf 0 \Rightarrow \begin{cases}-a+2b+c = 0\\ -b+c = 0\\ a+b+c = 0\end{cases}\Rightarrow b=c\Rightarrow \begin{cases}-a+3b = 0\\ a+2b= 0\end{cases}.$$
The only answer is $a=b=c=0$ so the vectors are linearly independent.
</div>
</div>
<br/>


### Basis and dimension
For a subspace $S$, a **basis** is a set of linearly independent vectors whose span is equal to $S$. We say that $S$ is spanned by its basis. In other words, we must have 

$$S = \text{Span}(v_1,\dotsc,v_N)$$

As this is an equality between sets, two conditions must be satisfied

$$\text{ if }v\in S,\text{ then }v\in \text{Span}(v_1,\dotsc,v_N)\\
\text{ if }v\in \text{Span}(v_1,\dotsc,v_N)\text{ then, }v\in S$$

<div class="exercise">
  <button  onclick="showSolution(this,'basis')" style="float:right;">Show Solution</button>
  Prove that $$\begin{pmatrix}1\\0\\0\end{pmatrix}, \begin{pmatrix}0\\1\\0\end{pmatrix}$$
is a basis for the $x$-$y$ plane in three dimensions. 
  <div id="basis" style="display:none;" class="solution">
Each vector in this x-y plane is of the form $\begin{pmatrix}x\\y\\0\end{pmatrix}$. We prove that such vectors are in the span 
$$\begin{pmatrix}x\\y\\0\end{pmatrix} = x \begin{pmatrix}1\\0\\0\end{pmatrix} + y \begin{pmatrix}0\\1\\0\end{pmatrix}\in \text{ Span}\left(\begin{pmatrix}1\\0\\0\end{pmatrix}, \begin{pmatrix}0\\1\\0\end{pmatrix}\right).$$

On the other hand, the vectors is the span are of the form 

$$a\begin{pmatrix}1\\0\\0\end{pmatrix}+b\begin{pmatrix}0\\1\\0\end{pmatrix} = \begin{pmatrix}a\\b\\0\end{pmatrix}.$$

As the $z$-coordinate is 0, the vector is in the $x$-$y$ plane.
  </div>
</div>
<br/>

Another basis for the $x,y$ plane is $\\{(1, 1, 0), (1, -1, 0)\\}$, while $\\{(1, 1, 0), (2, 2, 0)\\}$ is not a basis for the x-y plane.

<div class="exercise">
  <button  onclick="showSolution(this,'span5')" style="float:right;">Show Solution</button>
  Show that $\{(1, 1, 0), (1, -1, 0)\}$ is a basis for the $x$-$y$ plane.
  <div id="span5" style="display:none;" class="solution">
    The span of $\{(1, 1, 0), (1, -1, 0)\}$ is 
$$a(1, 1, 0)+b(1, -1, 0) = (a+b,a-b,0).$$ 
By letting $a = \frac{x+y}{2}$ and $b = \frac{x-y}{2}$, we can represent any point $(x,y,0)$ as the linear combination $a(1, 1, 0)+b(1, -1, 0)$. So each point on the plane is in the span. On the other hand, clearly $(a+b,a-b,0)$ lies on the $x$-$y$ plane.
  </div>
</div>
<br/>

<div class="exercise">
  Show that $\mathbb R^3$ has the basis $\{(1,0,0),(0,1,1),(0,0,1)\}$.
</div>
<br/>

### Basis and dimension
All bases have the same number of vectors. If a subspace is spanned by two sets of vectors with a different number of vectors in each, then at least one of them is not linearly independent, i.e., it has "extra" vectors that aren't needed. 

As an example, any basis of  the $x$-$y$ plane has exactly two vectors. One vector is not sufficient (gives a line not a plane) and three vectors is one too many (three vectors in the $x$-$y$ plane cannot be linearly independent.)

The number of vectors in the basis is the **dimension of the subspace**. In an $n$-dimensional space, we cannot find  $n + 1$ linearly independent vectors. If vectors are of dimension $n$, then at most $n$ vectors can be linearly independent.
  * Dimension of $\mathbb{R}^n$ is $n$. The standard basis for it is 

  $$(1, 0, 0, \cdots), (0, 1, 0, 0, \cdots), \cdots, (0, 0, \cdots, 0, 1).$$


### How to find a basis
Suppose we are given a set of vectors, $v_1,\dotsc,v_N$. How can we find a basis for $\text{Span}(v_1,\dotsc,v_n)$?
* If the vectors $v_1,\dotsc,v_N\\}$ are linearly independent, then the set $\\{v_1,\dotsc,v_N$ is a basis. But can we find other bases?
* If the vectors $v_1,\dotsc,v_N$ are _not_ linearly independent, then the set $\\{v_1,\dotsc,v_N\\}$ is a not a basis. How do we find a basis in this situation?

Observation: The span of a set of vectors does not change if we add a multiple of one to the other.
* Example: span$(v_1, v_2) = \text{span}(v_1, v_2 + av_1 )$


We can use this fact to find a basis:
*  Start from a set of vectors that span the subspace
*  Force a single nonzero value in each position

Let's see how this can work with an example: Find a basis for $\text{span}(v_1, v_2, v_3, v_4)$ where 

<div>
\begin{align}\label{eq:spanEx}
 v_1 &= (1,1,0,0),\\
 v_2 &= (2,4,0,4),\\
 v_3 &= (1,3,2,0),\\
 v_4 &= (2,6,2,4).
\end{align}
</div>

We subtract an appropriately scaled version of the first vector from the remaining vectors to make the first position of each the other ones 0:

$$\begin{matrix}
(1 & 1 & 0 & 0) \\
(2 & 4 & 0 & 4) \\
(1 & 3 & 2 & 0) \\
(2 & 6 & 2 & 4) \\
\end{matrix} \rightarrow \begin{matrix}
(\mathbf{1} & 1 & 0 & 0) \\
(0 & 2 & 0 & 4) \\
(0 & 2 & 2 & 0) \\
(0 & 4 & 2 & 4) \\
\end{matrix}$$

We then continue in the same way for all other positions. For example, we subtract the second vector from the ones below it so that the elements below the second element become 0:

$$\begin{matrix}
(\mathbf{1} & 1 & 0 & 0) \\
(0 & 2 & 0 & 4) \\
(0 & 2 & 2 & 0) \\
(0 & 4 & 2 & 4) \\
\end{matrix} \rightarrow \begin{matrix}
(1 & 1 & 0 & 0) \\
(0 & \mathbf{2} & 0 & 4) \\
(0 & 0 & 2 & - 4) \\
(0 & 0 & 2 & - 4) \\
\end{matrix}$$

We next do the same thing with the third row. This time, the fourth vector becomes all 0. But the $\mathbf 0$ vector does not contribute to any linear combination. So we discard it.

$$\begin{matrix}
(1 & 1 & 0 & 0) \\
(0 & \mathbf{2} & 0 & 4) \\
(0 & 0 & 2 & - 4) \\
(0 & 0 & 2 & - 4) \\
\end{matrix} \rightarrow \begin{matrix}
(1 & 1 & 0 & 0) \\
(0 & 2 & 0 & 4) \\
(0 & 0 & \mathbf{2} & - 4) \\
(0 & 0 & 0 & 0) \\
\end{matrix} \rightarrow \begin{matrix}
(1 & 1 & 0 & 0) \\
(0 & 2 & 0 & 4) \\
(0 & 0 & 2 & - 4) \\
\end{matrix}$$

The remaining vectors form a basis for span$(v_1,v_2,V_3,v_4)$, i.e.,

$$\text{Span}(v_1,v_2,v_3,v_4) = \{(1,1,0,0),(0,2,0,4),(0,0,2,-4)\}$$

The subspace has dimension 3.

Alternatively, when we are dealing with the $i$th vector, we can 
* make the $i$-th element of the $i$-th vector 1 by scaling it, and
* also make the elements above the $i$th element 0.

$$\begin{matrix}
(1 & 1 & 0 & 0) \\
(2 & 4 & 0 & 4) \\
(1 & 3 & 2 & 0) \\
(2 & 6 & 2 & 4) \\
\end{matrix} \rightarrow \begin{matrix}
(\mathbf{1} & 1 & 0 & 0) \\
(0 & 2 & 0 & 4) \\
(0 & 2 & 2 & 0) \\
(0 & 4 & 2 & 4) \\
\end{matrix} \rightarrow \begin{matrix}
(1 & 1 & 0 & 0) \\
(0 & \mathbf1 & 0 & 2) \\
(0 & 2 & 2 & 0) \\
(0 & 4 & 2 & 4) \\
\end{matrix} \rightarrow \\
~\\
\begin{matrix}
(1 & 0 & 0 & - 2) \\
(0 & \mathbf{1} & 0 & 2) \\
(0 & 0 & 2 & - 4) \\
(0 & 0 & 2 & - 4) \\
\end{matrix} \rightarrow 
\begin{matrix}
(1 & 0 & 0 & - 2) \\
(0 & 1 & 0 & 2) \\
(0 & 0 & \mathbf{1} & - 2) \\
(0 & 0 & 0 & 0) \\
\end{matrix} \rightarrow \begin{matrix}
(\mathbf{1} & 0 & 0 & - 2) \\
(0 & \mathbf{1} & 0 & 2) \\
(0 & 0 & \mathbf{1} & - 2) \\
\end{matrix}
$$

We called this form the **reduced** form of the basis.

<!--
Find a basis for $\text{span}(v_1 , v_2 , v_3 , v_4)$ where
$v_{1} = ( 1,1,0,0 ),v_{2} = ( 2,4,0,4 ),v_{3} = ( 1,3,2,0 ),v_{4} = ( 2,6,2,4 )$

$$\begin{matrix}
(1 & 1 & 0 & 0) \\
(2 & 4 & 0 & 4) \\
(1 & 3 & 2 & 0) \\
(2 & 6 & 2 & 4) \\
\end{matrix} \rightarrow \begin{matrix}
(\mathbf{1} & 1 & 0 & 0) \\
(0 & 2 & 0 & 4) \\
(0 & 2 & 2 & 0) \\
(0 & 4 & 2 & 4) \\
\end{matrix} \rightarrow \begin{matrix}
(1 & \color{red}{1} & 0 & 0) \\
(0 & \mathbf{2} & 0 & 4) \\
(0 & 0 & 2 & - 4) \\
(0 & 0 & 2 & - 4) \\
\end{matrix} \rightarrow \begin{matrix}
(1 & 1 & 0 & 0) \\
(0 & 2 & 0 & 4) \\
(0 & 0 & \mathbf{2} & - 4) \\
(0 & 0 & 0 & 0) \\
\end{matrix} \rightarrow \begin{matrix}
(1 & 1 & 0 & 0) \\
(0 & 2 & 0 & 4) \\
(0 & 0 & 2 & - 4) \\
\end{matrix}$$
-->

<div class="exercise">
  <button  onclick="showSolution(this,'span6')" style="float:right;">Show Solution</button>
  Find a basis for $\text{Span}(v_1,v_2,v_3)$ where 
  \begin{align*}
  v_1  & = (1,1,2),\\
  v_2  & = (-1,1,1), \\
  v_3  & = (-1,3,4). \\
  \end{align*}
  What is the dimension of this subspace?
  <div id="span6" style="display:none;" class="solution">
  Leaving the details to the reader, one possible basis is 
  \begin{align*}
  u_1  & = (1,1,2),\\
  u_2  & = (0,2,3). \\
  \end{align*}
  The subspace is 2-dimensional (a plane). The reduced basis for this subspace is
  \begin{align*}
  u_1'  & = (1,0,1/2),\\
  u_2'  & = (0,1,3/2). \\
  \end{align*} 
  The subspace is shown below. Note that all three vectors lie in th subspace spanned by them.<br>
  <img src="assets/img/span3.svg" width="400px">
  <video width="400px" controls>
  <source src="assets/media/span3.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
</div>
</div>
<br/>

#### Representing a subspace with free and dependent coordinates

When the vectors in the basis of a subspace are given in the reduced form, we can write the subspace as a set of vectors where some of the coordinates (elements) are **free** and others are given as functions of the free coordinates, i.e., are **dependent**. For example, for the vectors in equation \eqref{eq:spanEx}, we have 

<div>\begin{align*}
\text{Span}(v_1,\dotsc,v_4) &= \text{span}((1,0,0,-2),(0,1,0,2),(0,0,1,-2))\\
 &=\{a(1,0,0,-2)+b(0,1,0,2)+c(0,0,1,-2):a,b,c\in\mathbb R\}\\
 &=\{(a,b,c,-2a+2b-2c):a,b,c\in\mathbb R\}
\end{align*}</div>

Here, since the dimension of the subspace is three, we have three free coordinates and 1 dependent. As we will see later the _dependent coordinates are related to parity bits_.

<div class="exercise">
  <button  onclick="showSolution(this,'span7')" style="float:right;">Show Solution</button>
  Find the subspace of the previous Exercise as a set of vectors with free and dependent coordinates.
  <div id="span7" style="display:none;" class="solution">
    Let the subspace be denoted by $S$. We have
    \begin{align*}
    S & = \text{span}(u_1',u_2') \\
      & = \{a u_1'+bu_2': a,b\in \mathbb R\}\\
      & = \{(a,b,a/2+3b/2):a,b\in \mathbb R\}.
      \end{align*}
  </div>
</div>
<br/>

<div class="exercise">
  <button  onclick="showSolution(this,'span8')" style="float:right;">Show Solution</button>
  Find a basis for $S=\text{Span}(v_1,\dotsc,v_5)$ where
  \begin{align*}
   v_1 & = (1,0,0,1,0    )\\
   v_2 & = (2,2,0,0,0    )\\
   v_3 & = (1,2,0,-1,0   )\\
   v_4 & = (2,3,3,-1,3   )\\
   v_5 & = (2,-1,-3,3,-3 )\\
    \end{align*}
    and describe $S$ as a set of vectors with free and dependent coordinates.
  <div id="span8" style="display:none;" class="solution">
    It can be shown that the following is a basis:
    \begin{align*}
     u_1 & = (1,0,0,1,0) \\
     u_2 & = (0,1,0,-1,0)\\
     u_3 & = (0,0,1,0,1).
      \end{align*}
      The dimension is three and 
      \begin{align*}
      S & = \{au_1+bu_2+cu_3:a,b,c\in\mathbb R\} \\
        & = \{(a,b,c,a-b,c):a,b,c\in \mathbb R\}.
        \end{align*}
  </div>
</div>
<br/>

## Inner Product and Orthogonality
### Inner Product
The inner product of a pair of vectors measures how much of one vector points in the direction of another:

$$\langle ( a_{1},\ldots,a_{n} ),( b_{1},\ldots,b_{n} ) \rangle = a_{1}b_{1} + \cdots + a_{n}b_{n}.$$

<div class="exercise">
  <button  onclick="showSolution(this,'span80')" style="float:right;">Show Solution</button>
  Find the inner product of $(-1,3,1)$ and $(-1,2,-1)$.
  <div id="span80" style="display:none;" class="solution">
    $$-1\times -1+3\times 2 + 1\times -1 = 6.$$
  </div>
</div>
<br/>
 
 <div class="exercise">
   <button  onclick="showSolution(this,'span9')" style="float:right;">Show Solution</button>
   Let $X=(X_1,X_2,\dotsc,X_n)$ and $Y = (Y_1,Y_2,\dotsc,Y_n)$ be random vectors where each element is an independent Ber(1/2) random variable. What is the expected value of $\langle X,Y\rangle$?
   <div id="span9" style="display:none;" class="solution">
     \begin{align*}
      E[\langle X,Y\rangle]&=\sum_{i=1}^n E[X_i Y_i]=\sum_{i=1}^n (1/4)= \frac n 4,
       \end{align*}
       where we have used the fact that for each $i$, $X_iY_i$ is equal to 1 only if both $X_i$ and $Y_i$ are equal to 1, which occurs with probability 1/4.
   </div>
 </div>
 <br/>

 <div class="exercise">
   Let $x = (1,1,\dotsc,1)$ be the all-one vector of length $n$ and $Y$ be a random vector whose elements are independent Ber(1/2) random variables. Show that $E[\langle x,Y\rangle]=n/2$.
 </div>
 <br/>

The magnitude of a vector $u=(u_1,u_2,\dotsc,u_n)$ is the square root of its inner product with itself:

$$\|u\| = \sqrt{\langle u,u \rangle} = \sqrt{u_{1}^{2} + u_{2}^{2} + \cdots + u_{n}^{2} },$$

which in Euclidean space follows from the Pythagorean theorem. 


The angle between two vectors $u$ and $v$, denoted $\angle(u,v)$, is related to the inner product:

$$\langle u,v \rangle = \| u \| \| v \| \cos{\angle(u,v)}.$$

The notion of angle, while helpful in Euclidean space, does not necessarily generalize.


#### Linearity of the inner product

$$\langle u,v + w \rangle = \langle u,v \rangle + \langle u,w \rangle.$$

<!--
### Triangles and parallelograms

Generally speaking, the norm of a sum of vectors is governed by the *triangle inequality*: $$\left\| x + y \right\| \leq \|x\| + \|y\|$$.

Another useful property is the *parallelogram law* illustrated by the diagram on [shown at the beginning this page](#parall), for the squares of the usual Euclidean norm: $$\|x+y\|^2 + \|x-y\|^2 = 2\|x\|^2 + 2\|y\|^2$$.
<!-- not obvious to me in graph but can prove analytically -->

<!--
Another identity useful for norms and inner products of vectors is the *Cauchy-Schwarz inequality*: $$\vert \langle x, y \rangle \vert \leq \|x\|\|y\|$$.


Vectors and matrices have a wide rage of applications, including in geometry and algebra. For example, this diagram illustrates an important mathematical identity relating the lengths of vectors in a parallelogram. This allows us to easily compute the lengths of vectors added or subtracted together.
<!-- Image credit: Wikipedia/user:CheCheDaWaff    -->
<!--<div style="float: right;" id="parall"><img src="{{site.imgurl}}/vecpm.png" width="200px"></div>-->


### Orthogonality

#### Orthogonal vectors

Two vectors $u$ and $v$ are _orthogonal_ if $\langle u,v \rangle = 0$.

Example: What is $\langle u,v \rangle$ for $u = ( 8,2 ),v = ( - 1,4)$?

$$\langle u,v\rangle = -8+8 = 0.$$ 


<center><div id="fig9" class="jxgbox" style="width:220px; height:200px;"></div></center>

<script>
JXG.Options.text.useMathJax = true;
var fig9 = JXG.JSXGraph.initBoard('fig9', {boundingbox: [-2, 6, 9, -5], axis: true, showCopyright: false, showNavigation: false});
fig9.create('arrow', [[0,0],[8,2]],{color:'brown'});
fig9.create('arrow', [[0,0],[-1,4]],{color:'blue'});
</script>

<!-- 0 -->


In the Euclidean geometry this actually corresponds to the angle between the two vectors being 90 degrees, but this is not the case in other vector spaces, e.g., vectors over finite fields. Nevertheless, the concept of orthogonality is still valid in those spaces and, as we will see, is fundamental to error-correcting codes.

#### Orthogonal vectors to subspaces

Definition: A vector $v$ is orthogonal to a subspace $S$ if $v$ is orthogonal to each vector in the subspace.

Example: $v = (0,0,1)$ is orthogonal to the x,y-plane (subspace spanned by $$\{(1,0,0),(0,1,0)\}$$).

Example: $v = (1,2,3)$ is orthogonal to the subspace spanned by $$\{(3,0, - 1),(1,1, - 1)\}$$. This example is shown below. It can be observed that the blue vector, $(1,2,3)$ is orthogonal to the plane and thus to every vector in it.

<div>
  <img src="assets/img/span4.svg" width="400px">
  <video width="400px" controls>
  <source src="assets/media/span4.mp4" type="video/mp4">
Your browser does not support the video tag.
</video></div>

Fact: A vector is orthogonal to a subspace if it's orthogonal to every
vector in its basis.

#### Orthogonal subspaces

Definition: Two subspaces are orthogonal if every vector in one is
orthogonal to every vector in the other

Example: The z-axis (spanned by $(0,0,1)$) is orthogonal to the x-y
plane (spanned by $(1,0,0),(0,1,0)$)

Example: The subspace of vectors $(a,2a,3a)$ is orthogonal to the
subspace spanned by $(3,0, - 1),(1,1, - 1)$

#### Orthogonal complement

The orthogonal complement of a subspace is the set of all vector orthogonal to it. This is also a subspace.

If $S_{2}$ is the orthogonal complement of $S_{1}$, then $S_{1}$ is the orthogonal complement of $S_{2}$.

Examples:
* In ${\mathbb{R}}^{2}$, x-axis and y-axis are orthogonal complements.
* In ${\mathbb{R}}^{2}$, the subspace of vectors $(a,a)$ and subspace of vectors $(b,-b)$ are orthogonal complements.
* In ${\mathbb{R}}^{3}$, x-axis and y-axis are not orthogonal complements but the x-axis and y-z plane are.
* The subspace of vectors $(a,2a,3a)$ is orthogonal complement to the subspace spanned by $(3,0, - 1),(1,1, - 1)$.

The union of the bases of two orthogonal complement subspaces spans the whole space. For example $(1,0,0)$ is a basis for the x-axis and $\{(0,1,2),(0,0,1)\}$ is a basis for the y-z plane. The set $\\{(1,0,0),(0,1,2),(0,0,1)\\}$ is a basis for $\mathbb R^3$.

<div class="exercise">
  <button  onclick="showSolution(this,'span11')" style="float:right;">Show Solution</button>
  Show that the subspace spanned by $\{(1,0,0),(0,1,2),(0,0,1)\}$ is in fact equal to $\mathbb R^3$.
  <div id="span11" style="display:none;" class="solution">
     Hint: it is clear that the subspace is contained in $\mathbb R^3$. 
  It remains to show that each point in $\mathbb R^3$ can be written as a linear combination of the given vectors.
  </div>
</div>
<br/>
