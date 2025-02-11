---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
---
# Matrices and fundamental spaces

## Matrices, the basics
### What is a Matrix?

A matrix is a finite, ordered sequence of numbers arranged in a rectangle with a number of rows and columns.

Examples: 

$$A = \begin{pmatrix}
3 & -1 \\
1 & 2 \\
\end{pmatrix},\qquad B = \begin{pmatrix}
-1 & 1 \\
7 & 4 \\
0 & 3 \\
\end{pmatrix}.$$

To refer the element in row $i$ and column $j$ of $A$, we write $A_{ij}$. For example, above, $A_{12}=-1.$ 

The dimension of a matrix is written as $m\times n$, where $m$ is the number of rows and $n$ is the number of columns. We write $A_{m\times n}$ to denote a matrix of dimension $m\times n$.

**Addition**: Matrices can be added and multiplied together. The addition of two matrices with the same dimensions is obtained by adding the elements in the same positions, as shown below. Multiplication is discussed later in detail.

$$
\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix} + \begin{pmatrix}7&8&9\\10&11&12\end{pmatrix} = \begin{pmatrix}8&10&12\\14&16&18\end{pmatrix}.
$$

<br>

**Transposition**: We can _transpose_ a matrix by mirroring it with respect to the diagonal:

$$\begin{pmatrix}
2 & -3 \\
-1 & 4 \\
1 & 0 \\
\end{pmatrix}^{T} = \begin{pmatrix}
2 & -1 & 1 \\
-3 & 4 & 0 \\
\end{pmatrix}$$

<br>

**Vectors as matrices**: Vectors are special cases of matrices, where either one row or one column:

* Column vector: elements arranged in a single column; a D-dimensional column vector is a $D\times1$ matrix. These are more common and the default format for vectors.
* Row vector: elements arranged in a single row; a D-dimensional row vector is a $1\times D$ matrix.

We use the notation $v = \left( v_{1},v_{2},\ldots,v_{n} \right)$ for both row and column vectors. If we want to be precise, to write a column vector as a row vector, we can write $v^T=\left( v_{1},v_{2},\ldots,v_{n} \right)$. If $v$ is a column vector, $v^T$ is a row vector and vice versa.


It is  usually helpful to think of a matrix as a collection of (usually column) vectors. 

$$
\begin{pmatrix}
\color{blue}{ - 1} & \color{blue}{1} \\
\color{brown}{0} & \color{brown}{3} \\
\color{green}{2 }& \color{green}{- 2} \\
\end{pmatrix},\qquad
\begin{pmatrix}
\color{blue}{ -5 }& \color{brown}{-6} & \color{green}{-4 }\\
\color{blue}{5 }& \color{brown}{8 }& \color{green}{7} \\
\color{blue}{ -1 }& \color{brown}{0} & \color{green}{1 }\\
\end{pmatrix}.
$$

### Matrix-vector multiplication

We can multiply a vector $x$ and a matrix $A$ in two different ways: $$Ax$$ and $$xA$$
-   For $Ax$, the number of **columns** of $A$ must be the same as the  number of elements of $x$. $x$ must be a column vector. The result is the linear combination of the **columns** of $A$, where the coefficients are the elements of $x$:


$$\begin{pmatrix}
\color{blue}{1}  & \color{brown}{-1} \\
\color{blue}{3}  & \color{brown}{-4} \\
\color{blue}{-1} & \color{brown}{2} \\
\end{pmatrix}
\begin{pmatrix}
\color{blue}{2} \\
\color{brown}{1} \\
\end{pmatrix} = 
\color{blue}{2} \begin{pmatrix}
\color{blue}{1} \\
\color{blue}{3} \\
\color{blue}{-1}\\
\end{pmatrix}
+
\color{brown}{1}
\begin{pmatrix}
\color{brown}{-1} \\
\color{brown}{-4} \\
\color{brown}{2} \\
\end{pmatrix}
=
\begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix}$$

More generally, for 
$$A = \begin{pmatrix}
\color{blue}{a_{11}} & a_{12} & a_{13} \\
\color{blue}{a_{21}} & a_{22} & a_{23} \\
\color{blue}{a_{31}} & a_{32} & a_{33} \\
\color{blue}{a_{41}} & a_{42} & a_{43} \\
\end{pmatrix},x = \begin{pmatrix}
\color{blue}{x_{1}} \\
x_{2} \\
x_{3} \\
\end{pmatrix},$$
we have

$$Ax =  \color{blue}{x_{1}}\begin{pmatrix}
\color{blue}{a_{11}} \\
\color{blue}{a_{21}} \\
\color{blue}{a_{31}} \\
\color{blue}{a_{41}} \\
\end{pmatrix} + x_{2}\begin{pmatrix}
a_{12} \\
a_{22} \\
a_{32} \\
a_{42} \\
\end{pmatrix} + x_{3}\begin{pmatrix}
a_{13} \\
a_{23} \\
a_{33} \\
a_{43} \\
\end{pmatrix}=
\begin{pmatrix}
\color{blue}{x_{1}a_{11}} + x_{2}a_{12} + x_{3}a_{13} \\
\color{blue}{x_{1}a_{21}} + x_{2}a_{22} + x_{3}a_{23} \\
\color{blue}{x_{1}a_{31}} + x_{2}a_{32} + x_{3}a_{33} \\
\color{blue}{x_{1}a_{41}} + x_{2}a_{42} + x_{3}a_{43} \\
\end{pmatrix}$$

   
-   For $xA$, the number of **rows** of $A$ must be the same as the  number of elements of $x$. $x$ must be a row vector. The result is the linear combination of the **rows** of $A$, where the $i$-th element of $x$ is the coefficient of the $i$-th column of $A$:

$$\begin{pmatrix}
\color{blue}{ - 1} & \color{brown}{1 }& \color{green}{0} \\
\end{pmatrix}\begin{pmatrix}
\color{blue}{ - 1} & \color{blue}{1} \\
\color{brown}{0} & \color{brown}{3} \\
\color{green}{2 }& \color{green}{- 2} \\
\end{pmatrix} = 
\color{blue}{ - 1}
\begin{pmatrix}
\color{blue}{ - 1} & \color{blue}{1} \\
\end{pmatrix} +
\color{brown}{1 }
\begin{pmatrix}
\color{brown}{0} & \color{brown}{3} \\
\end{pmatrix} +
\color{green}{0}
\begin{pmatrix}
\color{green}{2 }& \color{green}{- 2} \\
\end{pmatrix}
 = \begin{pmatrix}
1 & 2 \\
\end{pmatrix}$$

We can multiply a column vector $v$ by a matrix from the left by first writing it as row vector, i.e., $v^T A$.

<!--


${\mathbf{x}}^{\mathbf{T}}{\mathbf{A}}$ **is a linear combination of
    the rows of** $\mathbf{A}$. 
$$x = \begin{pmatrix}x_{1} \\
x_{2} \\
x_{3} \\
x_{4} \\
\end{pmatrix}, A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
a_{41} & a_{42} & a_{43} \\
\end{pmatrix}$$

$$x^{T}A = \begin{pmatrix}
\color{blue}{x_{1} }& x_{2} & x_{3} & x_{4} \\
\end{pmatrix}\begin{pmatrix}
\color{blue}{a_{11}} & \color{blue}{a_{12}} & \color{blue}{a_{13}} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
a_{41} & a_{42} & a_{43} \\
\end{pmatrix} $$
$$= \color{blue}{x_{1}\begin{pmatrix}
  a_{11} & a_{12} & a_{13} \\
  \end{pmatrix}} + x_{2}\begin{pmatrix}
  a_{21} & a_{22} & a_{23} \\
  \end{pmatrix} + x_{3}\begin{pmatrix}
  a_{31} & a_{32} & a_{33} \\
  \end{pmatrix}$ $+ x_{4}\begin{pmatrix}
  a_{41} & a_{42} & a_{43} \\
  \end{pmatrix}$$
-->

<div style="float: right;"><img src="https://imgs.xkcd.com/comics/matrix_transform.png" width="300px"></div>

We can view matrix-vector multiplication (also vector-matrix multiplication) as a transformation.  The input to the transformation is $x$ and the output is $Ax$ (or $xA$).
<br><br><br><br>

<div class="exercise">
    <button  onclick="showSolution(this,'rotate')" style="float:right;">Show Solution</button>
    Let $$A = \begin{pmatrix}0 & 1 \\ -1 & 0\end{pmatrix}.$$ Find $Ax$ and $Ay$, where
    $$x = \begin{pmatrix}1\\2\end{pmatrix},\qquad y = \begin{pmatrix}4\\3\end{pmatrix}.$$
Show $x,y,Ax,Ay$ on Cartesian axes. Viewed as a transformation, what does this matrix do?
        <div id="rotate" style="display:none;" class="solution">
        <div  style="float: right;"><div id="fig1" class="jxgbox" style="width:200px; height:320px;"></div></div>
        For $x$, we have
        $$Ax = \begin{pmatrix}2\\-1\end{pmatrix}.$$
        We can see that $x$ is rotated clockwise by 90 degrees. Plotting $y$ and $Ay$ is left as an exercise. But $y$ will also be rotated by 90 degrees. In general,
        $$A\begin{pmatrix}a\\b\end{pmatrix} = \begin{pmatrix}b\\-a\end{pmatrix},$$
        which can be shown to be equivalent to a 90 degree clockwise rotation.
<script>
JXG.Options.text.useMathJax = true;
var fig1 = JXG.JSXGraph.initBoard('fig1', {boundingbox: [-1, 4, 4, -4], axis: true, showCopyright: false, showNavigation: false});
fig1.create('point',[1,2],{name:'$x$',fontSize:18,color:'blue'});
fig1.create('arrow',[[0,0],[1,2]],{color:'blue'});
fig1.create('point',[2,-1],{name:'$Ax$',fontSize:18});
fig1.create('arrow',[[0,0],[2,-1]],{color:'red'});
</script>
<br><br>
    </div>
</div>
<br/>

Matrix-vector multiplication $Ax$ is a linear transformation:
* Scaling: $A(cx) = c(Ax)$
* Additivity: $A(x+y) = Ax + Ay$

Note: this also holds for the vector-matrix multiplication $xA$.

### Matrix multiplication

We can also multiply two matrices together. In this case, the $i$-th column of the result is obtained by multiplying the $i$-th column of the second matrix by the first matrix. For example,

$$\begin{pmatrix}
2 & -3 \\
 -1 & 4 \\
1 & 0 \\
\end{pmatrix}\begin{pmatrix}
\color{blue}{ -1 }&\color{brown}{ 0 }&\color{green}{ 1 }\\
\color{blue}{1 }&\color{brown}{ 2 }& \color{green}{2 }\\
\end{pmatrix} = \begin{pmatrix}
\color{blue}{ -5 }& \color{brown}{-6} & \color{green}{-4 }\\
\color{blue}{5 }& \color{brown}{8 }& \color{green}{7} \\
\color{blue}{ -1 }& \color{brown}{0} & \color{green}{1 }\\
\end{pmatrix}$$

Note for example that the first column of the result is obtained by multiplying the first column of the second matrix by the first matrix:

$$\begin{pmatrix}
2 & -3 \\
 -1 & 4 \\
1 & 0 \\
\end{pmatrix}\begin{pmatrix}
-1\\
1\\
\end{pmatrix} = (-1)\begin{pmatrix}
2 \\
 -1 \\
1  \\
\end{pmatrix}+ (1) \begin{pmatrix}
-3 \\
4 \\
0 \\
\end{pmatrix}=
\begin{pmatrix}
-5\\
5\\
-1\\
\end{pmatrix}$$

We can also view matrix multiplication as follows: If $C=AB$, then $C_{ij}$ is the result of the inner product of the $i$-th row of $A$ and the $j$-th column of $B$. The number of columns of $A$ must equal the number of rows of $B$. $A_{n\times m} B_{m \times p} = C_{n \times p}$.

<div class="exercise">
    <button  onclick="showSolution(this,'matmul')" style="float:right;">Show Solution</button>
    Find
    $$\begin{pmatrix}
 -1 & 1 \\
2 & 2 \\
\end{pmatrix}\begin{pmatrix}
 -2 & 3 & 0 \\
2 & 0 & 1 \\
\end{pmatrix}. $$
    <div id="matmul" style="display:none;" class="solution">
     $$\begin{pmatrix}
4 & -3 & 1 \\
0 & 6 & 2
\end{pmatrix}$$
    </div>
</div>
<br/>

Note that matrix-vector multiplication can be viewed as a special case of matrix multiplication.



#### Properties of matrix multiplication

* Matrix multiplication is **not commutative**. If $AB$ and $BA$ are both defined, they may be different.
* Matrix multiplication is **associative**: $A(BC) = (AB)C$. Similarly, for a vector $x$, $A(Bx)=(AB)x$.
* Matrix multiplication is **distributive**: $A(B+C) = AB+AC$.
* **Transposition**: $(AB)^T = B^TA^T.$

<div class="exercise">
    <button  onclick="showSolution(this,'rot2')" style="float:right;">Show Solution</button>
    Recall that $A = \begin{pmatrix}0 & 1 \\ -1 & 0\end{pmatrix}$
    rotates any vector by 90 degrees. 
    <ul>
        <li> Let $x = \begin{pmatrix}a\\b\end{pmatrix}$. Find $y=Ax$. </li>
        <li> Find $z = Ay$.</li>
        <li> Compute $A^2 = A\times A$.</li>
        <li> Show that $z=A^2 x$.</li>
        <li> What does $A^2$ do?</li>
     </ul> 
      

    <div id="rot2" style="display:none;" class="solution">
        The computation is left to the reader but it will be clear that $A^2$ rotates any vector by $180$ degrees, which is equivalent to applying $A$ twice.
    </div>
</div>
<br/>



### The identity matrix
The $n \times n$ identity matrix has 1s on the diagonal and 0s elsewhere
$$I_{n} = \begin{pmatrix}
1 & \ldots & 0 \\
 \vdots & \ddots & \vdots \\
0 & \ldots & 1 \\
\end{pmatrix}$$

<div class="exercise"> Find the result:
$A_{m \times n}I_{n}$ = <span id="ind-0" style="visibility:hidden;" class="solution"> $A_{m \times n}$</span>
$,\quad I_{m}A_{m \times n}$ = <span id="ind-1" style="visibility:hidden;" class="solution"> $A_{m \times n}$</span>
$,\quad x^{T}I$ = <span id="ind-2" style="visibility:hidden;" class="solution"> $x^T$</span>
$,\quad Ix$ = <span id="ind-3" style="visibility:hidden;" class="solution"> $x$</span>
\(\qquad\)<button  onclick="showSolution(this,['ind-0','ind-1','ind-2','ind-3'])" style="float:right;">Show solution</button>
</div>

* Matrix multiplication has the identity property: $IA = AI = A$. 


## The four fundamental spaces of a matrix
There are four subspaces associated with each matrix. The column space, the row space, the null space, and the left null space. The column space and the null space are particularly important in error correction.

### The row space

The row space of $A$ is the span of the rows of $A$
-  linear combinations of rows of $A$
-  the set of vectors obtained by $x^{T}A$ for all $x$
-  we show the row space as $RS(A)$.

To represent the row space in a simple way, we can find a basis for it. We can do so as explained in the last section, where we discussed <a href="vectors.html#how-to-find-a-basis">how to find a basis for a subspace</a>. When we apply this method to rows of a matrix, adding the multiple of a row to the other is called an _elementary row operation_ and if we find the basis in the reduced form, this form is called the **reduced row-echelon form**. We can then represent the row space as a <a href="vectors.html#representing-a-subspace-with-free-and-dependent-coordinates"> set of vectors with free and dependent coordinates.</a>

The **row rank** of a matrix is the dimension of its row space.



<div class="exercise">
<button  onclick="showSolution(this,'ros')" style="float:right;">Show solution</button>
    Find a basis for the row space of $$B = \begin{pmatrix}
    1 & 1 & 3 \\
    1 & 3 & 2 \\
    2 & 4 & 5 \\
    \end{pmatrix}.$$
    Write the row space as a set of vectors with free and dependent coordinates. What is the row rank of the matrix.
    <div id="ros" style="display:none;" class="solution"> 
    $$ \begin{pmatrix}
    1 & 1 & 3 \\
    0 & 2 & -1 \\
    0 & 2 & -1 \\
    \end{pmatrix} \rightarrow \begin{pmatrix}
    1 & 0 & 3.5 \\
    0 & 2 & -1 \\
    \end{pmatrix} \rightarrow \begin{pmatrix}
    1 & 0 & 3.5 \\
    0 & 1 & -0.5 
    \end{pmatrix}.$$
    The row space is the set of vectors of the form
    $$x_1 \begin{pmatrix}1\\0\\3.5\end{pmatrix} + x_2 \begin{pmatrix}0\\1\\-.5\end{pmatrix},$$
    which we can write as
    $$RS = \left\{\begin{pmatrix}x_1\\ x_2\\ 3.5x_1 - 0.5x_2\end{pmatrix} : x_1, x_2 \in \mathbb{R} \right\}.$$
    The row rank is 2.
    </div>
</div>


<br/>

### The column space

The column space of $A$ is the span of the columns of $A$
-   linear combinations of columns of $A$
-   the set of vectors obtained by $Ax$ for all $x$
-   we show the column space as $CS(A)$.

Finding a basis for the column space is similar to row space, except that here we manipulate the columns. As an example, let us find a basis for the column space of $$A = \begin{pmatrix}
1 & 1 & 3 \\
1 & 3 & 2 \\
2 & 4 & 6 \\
\end{pmatrix}$$ 

$$A \rightarrow 
\begin{pmatrix}
1 & 0 & 0 \\
1 & 2 & -1 \\
2 & 2 & 0 \\
\end{pmatrix} 
\rightarrow 
\begin{pmatrix}
1 & 0 & 0 \\
1 & 1 & -1 \\
2 & 1 & 0 \\
\end{pmatrix} 
\rightarrow 
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
1 & 1 & 1 \\
\end{pmatrix} 
\rightarrow 
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} 
\rightarrow 
\left\{\begin{pmatrix}
a \\
b \\
c \\
\end{pmatrix} \vert a, b, c \in \mathbb{R} \right\}.$$

For example, in the first step, we have subtracted the first column from the second column and 3 times the first column from the third column. In the second step, we scaled the second column and then subtracted scaled versions of it from the other columns and so on. These are called elementary column operations.

The dimension of the column space is called the column rank.

<div class="exercise">
<button  onclick="showSolution(this,'cs1')" style="float:right;">Show solution</button>
Find a reduced basis for the column space of $$A = \begin{pmatrix}
    1 & 1 & 1 & 1 \\
    1 & 2 & 3 & 4 \\
    4 & 9 & 14 & 19 \\
\end{pmatrix}$$
and find the column rank.
    <div id="cs1" style="display:none;" class="solution"> $$ \begin{pmatrix}
    1 & 1 & 1 & 1 \\
    1 & 2 & 3 & 4 \\
    4 & 9 & 14 & 19 \\
\end{pmatrix}\to\begin{pmatrix}
    1 & 0 & 0 & 0 \\
    1 & 1 & 2 & 3 \\
    4 & 5 & 10 & 15 \\
    \end{pmatrix} \rightarrow \begin{pmatrix}
    1 & 0 & 0 & 0 \\
    0 & 1 & 0 & 0 \\
    -1 & 5 & 0 & 0 \\
    \end{pmatrix} \rightarrow \begin{pmatrix}
    1 & 0 \\
    0 & 1 \\
    -1 & 5 \\
    \end{pmatrix}
    $$
    The column rank is  2.
    </div>
</div>

<br>

<div class="exercise"> Find a basis for the column space of $B = \begin{pmatrix}
1 & 1 & 3 \\
1 & 3 & 2 \\
2 & 4 & 5 \\
\end{pmatrix}.$ Find the column space as a set of vectors with free and dependent coordinates and find its dimension.
<!-- <span id="cos" style="visibility:hidden;" class="solution">  -->
<!-- </span> -->
<!-- \(\qquad\)<button  onclick="showSolution(this,'cos')" style="float:right;">Show solution</button> -->
</div>

### Rank of a matrix
<!--
Recall: The row and column spaces of a matrix are formed from linear
    combinations of the rows/columns of the matrix.
-   The *row rank* of the matrix is the dimension of the row space.
        If all the rows are linearly independent, we say the matrix has
        *full row rank*.
-   The *column rank* of the matrix is the dimension of the column
    space. If all the columns are linearly independent, we say the
    matrix has *full column rank*.
-->

What is the relationship between row and column ranks? They are equal, as we saw above for 

$$B = \begin{pmatrix}
1 & 1 & 3 \\
1 & 3 & 2 \\
2 & 4 & 5 \\
\end{pmatrix}.$$

As another example, recall that the column rank of the matrix $A$ given below is 2. Let's find its row rank

$$A = \begin{pmatrix}
    1 & 1 & 1 & 1 \\
    1 & 2 & 3 & 4 \\
    4 & 9 & 14 & 19 \\
\end{pmatrix}$$


$$\begin{pmatrix}
1 & 1 & 1 & 1 \\
1 & 2 & 3 & 4 \\
4 & 9 & 14 & 19 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & 1 & 1 & 1 \\
0 & 1 & 2 & 3 \\
0 & 5 & 10 & 15 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & 0 & -1 & -2 \\
0 & 1 & 2 & 3 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & 0 & -1 & -2 \\
0 & 1 & 2 & 3 \\
\end{pmatrix}. $$ 

and so the row rank of $A$ is also 2.

<div class="highlight">
    The row rank is equal to the column rank and is called the <strong>rank</strong> of the matrix.
</div>
<!--
Suppose $A$ is a $p \times q$ matrix, whose rows are independent and
    whose columns are independent.

Can $q > p$?
-   The column space of $A$ has dimension $\leq p$
-   There are at most $p$ independent vectors in the column space of
    $A$
-   $A$ has $q$ independent columns
-   So $q \leq p$

Similarly, $p \leq q$

If the rows of a matrix are independent and its columns are independent, it is necessarily square!

<div style="float: right;"><img src="{{site.imgurl}}/matpq.png" width="200px"></div>



Consider an $m \times n$ matrix $A$.

By removing dependent rows one-by-one, we can find a matrix whose
row space is the same as $A$, and so is its row rank (dimension of
row space).

Fact (proof omitted): Removing a dependent row does not change the
row rank nor the column rank. Similarly, removing a dependent column
does not change the column rank nor the row rank.

Remove all such rows and columns. We will get a $p \times q$ matrix
whose rows and columns are independent. So $p = q$. But $p$ is the
row rank and $q$ is the column rank. Thus:

The row rank and the column rank of the matrix **are necessarily
equal**. Thus, we usually just call these the *rank* of the matrix.
If the matrix is both full column rank and full row rank, then we
say it is also *full rank*.

See [here](https://www.maa.org/sites/default/files/Loehr-1-0708496.pdf)
for reference.
-->

### The null space

Let $A$ be an $m\times n$ matrix. The null space of $A$, denoted $NS(A)$, is the set of $n$-dimensional vectors $x$ satisfying $Ax=\mathbf 0$.

-   The null space of any matrix, at a minimum, is a vector space
containing the zero vector since $A\mathbf 0 =\mathbf 0$.
-   If the row rank is smaller than the number of rows, then the dimension of the null space is larger than 0, i.e., it contains other vectors than $\mathbf 0$.

Note that elementary row operations are like adding one equation to another one and so they don't change the set of vectors satisfying $Ax=\mathbf 0$. So to find the null space, we first write the matrix in the reduced row echelon form.

Example: the null space of

$$A = \begin{pmatrix}
1 & - 1 & 2 & 1 \\
-1 & 2 & 1 & 2 \\
2 & 1 & 2 & - 2 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & - 1 & 2 & 1 \\
0 & 1 & 3 & 3 \\
0 & 3 & -2 & -4 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & 0 & 5 & 4 \\
0 & 1 & 3 & 3 \\
0 & 0 & -11 & -13 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & 0 & 0 & - 21/11 \\
0 & 1 & 0 & - 6/11 \\
0 & 0 & 1 & 13/11 \\
\end{pmatrix}$$

So the null space of $A$ is the set of solutions to 

$$
\begin{pmatrix}
1 & 0 & 0 & - 21/11 \\
0 & 1 & 0 & - 6/11 \\
0 & 0 & 1 & 13/11 \\
\end{pmatrix}
\begin{pmatrix}x_1\\ x_2\\ x_3\\ x_4\end{pmatrix}=\begin{pmatrix}0\\0\\0\\0\end{pmatrix},
$$

which we can write as

$$\begin{matrix}
x_{1} - \frac{21}{11}x_{4} = 0 \\
x_{2} - \frac{6}{11}x_{4} = 0 \\
x_{3} + \frac{13}{11}x_{4} = 0 \\
\end{matrix}$$

This allows us to express $x_1, x_2, x_3$ in terms of $x_4$, then write out the null space vector as:

$$NS(A) = \left\{ \begin{pmatrix}
\frac{21}{11}x_{4} \\
\frac{6}{11}x_{4} \\
-\frac{13}{11}x_{4} \\
x_{4} \\
\end{pmatrix} \vert x_4 \in \mathbb{R} \right\}$$

On the other hand, the row space of $A$ is given by

$$RS(A) = \left\{ \begin{pmatrix}
x_1 \\
x_2\\
x_3\\
\frac{-21x_1-6x_2+13x_3}{11}\\
\end{pmatrix} \vert x_1,x_2,x_3 \in \mathbb{R} \right\}.$$

We can see the set of free and dependent coordinates complement each other in the row space and the null space. This shows the following fact:

<div class="highlight"> For a matrix with $n$ columns, the row rank plus the dimension of the null space is equal to $n$.</div>

<br>

<div class="exercise">
<button  onclick="showSolution(this,'RSNS')" style="float:right;">Show Solution</button>
Find the null space and the row space of the matrix 
$$A = \begin{pmatrix}
 -1 & 1 & 0 & 1 \\
3 & 1 & -2 & -1 \\
4 & -2 & -1 & -3 \\
\end{pmatrix}$$
<div id="RSNS" style="display:none;" class="solution">
       
Compute reduced echelon form:

$$\begin{pmatrix}
 -1 & 1 & 0 & 1 \\
3 & 1 & -2 & -1 \\
4 & - 2 & -1 & -3 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
 -1 & 1 & 0 & 1 \\
0 & 4 & -2 & 2 \\
0 & 2 & -1 & 1 \\
\end{pmatrix} \rightarrow\\ \begin{pmatrix}
 -1 & 1 & 0 & 1 \\
0 & 4 & -2 & 2 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & -1 & 0 & -1 \\
0 & 1 & -0.5 & 0.5 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & 0 & -0.5 & -0.5 \\
0 & 1 & -0.5 & 0.5 \\
\end{pmatrix} $$

For the null space, $x_1 = \frac{x_3 + x_4}{2}, x_2 = \frac{x_3 - x_4}{2}$.

$$NS = \left\{ \begin{pmatrix} \frac{x_3 + x_4}{2} \\ \frac{x_3 - x_4}{2} \\ x_3 \\ x_4 \end{pmatrix} \vert x_3, x_4 \in \mathbb{R} \right\}$$

So the null space has two free variables $x_3, x_4$.

<p>For the row space, 
$$RS = \left\{ \begin{pmatrix} x_1\\x_2\\-\frac{x_1 + x_2}{2} \\ \frac{x_1 + x_2}{2} \end{pmatrix} \vert x_1, x_2 \in \mathbb{R} \right\}.$$
The dimension of both spaces is 2, which add up to 4.</p>
</div>
</div>
<br/>

#### The generator matrix

Note that in the previous example, we can write the null space of the matrix $A$ as a linear combination:

$$\begin{pmatrix}
(x_{3} + x_{4})/2 \\
(x_{3} - x_{4})/2 \\
x_{3} \\
x_{4} \\
\end{pmatrix} = \begin{pmatrix}
1/2 \\
1/2 \\
1 \\
0 \\
\end{pmatrix}x_{3} + \begin{pmatrix}
1/2 \\
-1/2 \\
0 \\
1 \\
\end{pmatrix}x_{4}$$

The null space of $A$ is the column space of the matrix


$$G = \begin{pmatrix}
\begin{matrix}
1/2 \\
1/2 \\
1 \\
0 \\
\end{matrix} & \begin{matrix}
1/2 \\
-1/2 \\
0 \\
1 \\
\end{matrix} \\
\end{pmatrix}$$

We call this the *generator* of the null space. That is, the null space is the set of vectors of the form $$G\begin{pmatrix}
x_{1} \\
x_{2} \\
\end{pmatrix}.$$


This generator matrix is not unique. For example, we can start the row operations from the opposite side (bottom right) of the matrix:

$$\begin{pmatrix}
 -1 & 1 & 0 & 1 \\
3 & 1 & -2 & -1 \\
4 & -2 & -1 & -3 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
1/3 & 1/3 & -1/3 & 0 \\
5/3 & 5/3 & -5/3 & 0 \\
4 & -2 & -1 & -3 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
0 & 0 & 0 & 0 \\
5/3 & 5/3 & -5/3 & 0 \\
4 & -2 & -1 & -3 \\
\end{pmatrix} \rightarrow \\ \begin{pmatrix}
1 & 1 & -1 & 0 \\
-4/3 & 2/3 & 1/3 & 1 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
-1 & -1 & 1 & 0 \\
-1 & 1 & 0 & 1 \\
\end{pmatrix} $$

$$\rightarrow \begin{cases} x_3 = x_1 + x_2 \\ x_4 = x_1 - x_2 \end{cases}$$

$$\begin{pmatrix}
x_{1} \\
x_{2} \\
x_{1} + x_{2} \\
x_{1} - x_{2} \\
\end{pmatrix} = \begin{pmatrix}
1 \\
0 \\
1 \\
1 \\
\end{pmatrix} x_{1} + \begin{pmatrix}
0 \\
1 \\
1 \\
-1 \\
\end{pmatrix} x_{2} \rightarrow G = \begin{pmatrix}
1 & 0 \\
0 & 1 \\
1 & 1 \\
1 & -1 \\
\end{pmatrix},NS = \left\{ G\begin{pmatrix}
x_{1} \\
x_{2} \\
\end{pmatrix}:x_{1},x_{2} \in {\mathbb{R}} \right\}$$


<div class="hw">
    <button  onclick="showSolution(this,'RSNS2')" style="float:right;">Show Solution</button>
    What are the row and null spaces of 
    $$A = \begin{pmatrix}
    0 & 0 & 1 \\
    0 & 0 & 2 \\
    \end{pmatrix}$$
    Find a generator for the null space.
    <div id="RSNS2" style="display:none;" class="solution">
        The reduced row echelon form is
        $$\begin{pmatrix}0 & 0 &1\end{pmatrix}.$$
        The null space is the solution to 
        $$\begin{pmatrix}0 & 0 &1\end{pmatrix} \begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix} = \mathbf 0$$.
        So the null space is defined by the equation $x_3 =0$:
        $$
        NS = \left\{\begin{pmatrix}x_1\\x_2\\0\end{pmatrix}: x_1,x_2\in\mathbb R\right\}.
        $$
        Since we have only a single row, the row space is the scaled versions of this row:
        $$
        RS = \left\{\begin{pmatrix}0\\0\\x_3\end{pmatrix}, x_3\in \mathbb R.\right\}.
        $$
        The dimension of the null space is 2 and the row space 1, summing to 3.

        Since 
        $$
        \begin{pmatrix}x_1\\x_2\\0\end{pmatrix} = x_1 \begin{pmatrix}1\\0\\0\end{pmatrix}+x_2 \begin{pmatrix}0\\1\\0\end{pmatrix},
        $$
        the generator matirx is
        $$G = \begin{pmatrix}1&0\\0&1\\0&0\end{pmatrix}.$$
    </div>
</div>
<br/>

<div class="exercise">
    <button  onclick="showSolution(this,'RSNS3')" style="float:right;">Show Solution</button>
    What are the row and null spaces and a generator matrix of
$$A = \begin{pmatrix}
1 & 1 & 2 \\
2 & 1 & 4 \\
\end{pmatrix}$$
    <div id="RSNS3" style="display:none;" class="solution">
        $$A \rightarrow \begin{pmatrix}
        1 & 1 & 2 \\
        0 & -1 & 0 \\
        \end{pmatrix} \rightarrow \begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & 0 \\
\end{pmatrix}.$$
The row space is 
$$
RS = \left\{\begin{pmatrix}x_1\\x_2\\2x_1\end{pmatrix}:x_1,x_2\in \mathbb R\right\}.
$$

The null space is given by the equations $x_1 = - 2x_3, x_2 = 0$, leading to
$$NS = \left\{\begin{pmatrix}-2x_3\\0\\x_3\end{pmatrix}: x_3\in\mathbb R\right\},$$
with 
$$G = \begin{pmatrix}-2\\0\\1\end{pmatrix}.$$
    </div>
</div>
<br/>


### The column space and left null space
The left null space (LNS) of $A$: the set of vectors $x$ such that
$x^TA = 0$

For an $m \times n$ matrix $A$, the CS and LNS contain
$m$-dimensional vectors

What is the relationship between CS and LNS of $A$?
$dim(CS) + dim(LNS) = m$, where dim stands for dimension. 

The left null space is not useful for us in the future, so it will not be discussed in detail.


<!--
What are CS and LNS of $$A = \begin{pmatrix}
0 & 0 & 1 \\
0 & 0 & 2 \\
\end{pmatrix}$$

What are CS and LNS of $$A = \begin{pmatrix}
1 & 2 & 1 \\
2 & 4 & 1 \\
\end{pmatrix}$$
 
 TODO -->


### In summary

Suppose we have a matrix A with M rows and N columns. Then, we can
define four vector spaces:
-   Row space (RS): the span of the M rows = the set of vectors $x^{T}A$
    for all $x$. This vector space contains vectors of dimension N.
-   Column space (CS): the span of the N columns = the set of vectors
    $Ax$ for all $x$. This vector space contains vectors of
    dimension M.
-   Null space (NS): the vector space containing all N-dimensional
    vectors x such that Ax = **0**.
-   Left null space (LNS): the vector space containing all M-dimensional
    vectors y such that $y^{T}A = \mathbf{0}$.

It turns out these spaces tell us a lot about the underlying linear
    operation performed by A. To understand why, we need to introduce a
    couple more definitions about vectors.

### The fundamental theorem of linear algebra

<!-- image: mathworld -->
Theorem: For an $m \times n$ matrix $A$:
-   dim(RS) = dim(CS), called rank
-   NS is orthogonal to RS
-   dim(NS) + dim(RS) = n
-   LNS is orthogonal to CS
-   dim(LNS) + dim(CS) = m

<!--
Other facts:
- CS is the image of RS
- 0 is the image of NS
- A vector $x$ can be written as\
the sum of $x_{r}$ from RS and $x_{n}$ from NS.
But only the RS component matters
when finding $Ax$.
-->

<!--

<div style="float: right;"><img src="{{site.imgurl}}/linspace.gif" width="400px"></div>
<div style="float: right;"><img src="{{site.imgurl}}/rscs.png" width="400px"></div>
## Linear systems of equation

Consider the system

$$\begin{matrix}
a_{11}x_{1} + \cdots + a_{1n}x_{n} = b_{1} \\
 \vdots \\
a_{m1}x_{1} + \cdots + a_{mn}x_{n} = b_{m} \\
\end{matrix}$$

We can write it as $Ax = b$ where

$$A = \begin{pmatrix}
a_{11} & \ldots & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{m1} & \ldots & a_{mn} \\
\end{pmatrix}, x = \begin{pmatrix}
x_{1} \\
\vdots \\
x_{n} \\
\end{pmatrix}, b = \begin{pmatrix}
b_{1} \\
\vdots \\
b_{m} \\
\end{pmatrix}$$

Possibilities:
-   No solution
-   Unique solution
-   Many solutions

A **solution exists** for every $b$
-   iff (if & only if) the **columns span** ${\mathbb{R}}^{m}$
-   iff the left null space has dimension 0
-   iff matrix has full row rank
-   only possible if $m \leq n$

The solution, if any, **is unique**
-   iff the **columns are linearly independent**
-   iff the null space has dimension 0
-   iff matrix has full column rank
-   only possible if $n \leq m$

### Solving linear systems
How can we solve the system $Ax = b$?

Two powerful techniques:
1. Elimination -- construct a matrix form of the linear system and
solve through transformations. This is essentially the same as the
process we used to find a basis
1. Matrix inversion -- for a square matrix $A$, find the *inverse*
$A^{-1}$ such that $A^{-1}A = AA^{-1} = I$, then $Ax = b \Leftrightarrow x = A^{-1}b$.

#### Elimination

Suppose we want to solve:

$$\begin{matrix}
2x_{1} + 6x_{2} + 3x_{3} = -1 \\
4x_{1} + 3x_{2} - 1x_{3} = 5 \\
 - 2x_{1} + x_{3} = - 3 \\
\end{matrix}$$

Collect coefficients into a matrix:

$$\begin{pmatrix}
\begin{matrix}
2 & 6 & 3 \\
4 & 3 & -1 \\
 -2 & 0 & 1 \\
\end{matrix} & \begin{matrix}
 -1 \\
5 \\
 -3 \\
\end{matrix} \\
\end{pmatrix}$$

Row operations in this augmented matrix are equivalent to adding a
    multiple of one equation to another, which does not change the
    solution. In this example:

$$\begin{pmatrix}
\begin{matrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{matrix} & \begin{matrix}
1 \\
0 \\
 -1 \\
\end{matrix} \\
\end{pmatrix}$$

Then $x_{1} = 1,x_{2} = 0,x_{3} = -1$.

#### Gauss-Jordan Elimination

Elimination is equivalent to finding a basis for the row space, and
    at the same time keeping track of how $b$ is affected by row
    operations.

**Elimination in more detail:** After forming the augmented matrix
(A b), here are the steps:

1. Starting from the first column, let the pivot be the first
equation (row) with a nonzero value. If that's not the first row,
swap rows. From each of the equations (rows), multiply by the entry
to eliminate and subtract entry-by-entry from that row. The result
should have eliminated (set to zero) all the values below the first
row in the first column.
2. Proceed to the next column. Let the pivot be the next row with a
nonzero value; if that's not the next row, swap rows. From each of
the other equations (rows), multiply by the entry to eliminate and
subtract entry-by-entry from that row. The result should have
eliminated the values other than the pivot for that column.
3. Proceed to the next column, and repeat, until we've reduced the
A part of the augmented matrix to be diagonal (zeros in non-pivot
positions). This is the *reduced row echelon form*.


Use elimination to solve 

$$\begin{matrix}
x_{1} + 2x_{2} - x_{3} = 1 \\
4x_{1} + 9x_{2} - 3x_{3} = 8 \\
 - 2x_{1} - 3x_{2} + 7x_{3} = 10 \\
\end{matrix}$$

$$\begin{pmatrix}
1 & 2 & -1 & 1 \\
4 & 9 & -3 & 8 \\
-2 & -3 & 7 & 10 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & 2 & -1 & 1 \\
0 & 1 & 1 & 4 \\
0 & 1 & 5 & 12 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & 0 & -3 & -7 \\
0 & 1 & 1 & 4 \\
0 & 0 & 4 & 8 \\
\end{pmatrix}$$

$$\rightarrow \begin{pmatrix}
1 & 0 & -3 & -7 \\
0 & 1 & 1 & 4 \\
0 & 0 & 1 & 2 \\
\end{pmatrix} \rightarrow \begin{pmatrix}
1 & 0 & 0 & -1 \\
0 & 1 & 0 & 2 \\
0 & 0 & 1 & 2 \\
\end{pmatrix} \Rightarrow \begin{cases}
x_1 = -1 \\
x_2 = 2 \\
x_3 = 2
\end{cases} $$

<div class="exercise"> Use elimination to solve $$\begin{matrix}
x_{1} + x_{2} + x_{3} = 6 \\
x_{1} + 2x_{2} + 2x_{3} = 9 \\
x_{1} + 2x_{2} + 3x_{3} = 10 \\
\end{matrix}.$$
</div>

#### Elimination to compute inverse

We can use Gaussian elimination to solve simultaneous linear systems
    (with the same A matrix): $Ax_{1} = b_{1},Ax_{2} = b_{2},Ax_{3} = b_{3} \Rightarrow AX = B$.

Construct augmented matrix $(A B)$ and repeat pivot/elimination steps
    for all A columns.

We can also do this for $B = I$: perform elimination of (A I), where
    I is the identity matrix $$\begin{pmatrix}
    1 & 0 & 0 \\
    0 & \ddots & 0 \\
    0 & 0 & 1 \\
    \end{pmatrix}$$.

We will then find a matrix that is the solution to $AX = I$

The solution is the inverse of $A$, denoted $A^{-1}$ and satisfies $AA^{-1} = I$

Compute the matrix inverse of $$A = \begin{pmatrix}
2 & -1 & 1 \\
1 & 2 & 1 \\
    -1 & 1 & 1 \\
\end{pmatrix}$$

$$\left( \begin{array}{c:c} 
\begin{matrix}
2 & -1 & 1 \\
1 & 2 & 1 \\
 -1 & 1 & 1 \\
\end{matrix} & \begin{matrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{matrix} 
\end{array} \right)

\rightarrow

\left( \begin{array}{c:c} 
\begin{matrix}
2 & -1 & 1 \\
0 & 5/2 & 1/2 \\
0 & 1/2 & 3/2 \\
\end{matrix} & \begin{matrix}
1 & 0 & 0 \\
 -1/2 & 1 & 0 \\
1/2 & 0 & 1 \\
\end{matrix} 
\end{array} \right)$$

$$ \rightarrow \left( \begin{array}{c:c} 
\begin{matrix}
2 & -1 & 1 \\
0 & 5/2 & 1/2 \\
0 & 0 & 7/5 \\
\end{matrix} & \begin{matrix}
1 & 0 & 0 \\
 -1/2 & 1 & 0 \\
3/5 & -1/5 & 1 \\
\end{matrix} 
\end{array} \right)

\rightarrow

\left( \begin{array}{c:c} 
\begin{matrix}
2 & -1 & 0 \\
0 & 5/2 & 0 \\
0 & 0 & 7/5 \\
\end{matrix} & \begin{matrix}
4/7 & 1/7 & -5/7 \\
 -5/7 & 15/14 & -5/14 \\
3/5 & -1/5 & 1 \\
\end{matrix} 
\end{array} \right)$$

$$\rightarrow \left( \begin{array}{c:c} 
\begin{matrix}
2 & 0 & 0 \\
0 & 5/2 & 0 \\
0 & 0 & 7/5 \\
\end{matrix} & \begin{matrix}
2/7 & 4/7 & -6/7 \\
 -5/7 & 15/14 & -5/14 \\
3/5 & -1/5 & 1 \\
\end{matrix} 
\end{array} \right)

\rightarrow

\left( \begin{array}{c:c} 
\begin{matrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{matrix} & \begin{matrix}
1/7 & 2/7 & -3/7 \\
 -2/7 & 3/7 & -1/7 \\
3/7 & -1/7 & 5/7 \\
\end{matrix} 
\end{array} \right)$$

<div class="exercise">
Compute the matrix inverse of $$A = \begin{pmatrix}
2 & -1 & 0 \\
    -1 & 2 & -1 \\
0 & -1 & 2 \\
\end{pmatrix}$$ using Gauss-Jordan elimination.

Check your answer: multiple $A^{-1}$ by $A$, and $A$ by $A^{-1}$: (inverse
    should satisfy $A^{-1}A = AA^{-1} = I$).
</div>


### Invertibility

Recall that a solution exists for every $b$ if and only if the rows
    of $A$ are linearly independent

As we have seen when finding a basis, we end up with a degenerate
case of rows that are equal to **0**. Then the matrix cannot be
inverted. This means A is *singular*, does not have full rank, has a
determinant equal to zero, and is not invertible. Thus, the Gaussian
elimination procedure is a test for invertibility!

Example: try elimination on $$A = \begin{pmatrix}
2 & -1 & -1 \\
-1 & 2 & -1 \\
-1 & -1 & 2 \\
\end{pmatrix}$$.

For invertible matrices, the equations $Ax = b$ can be solved easily
as
$Ax = b \Rightarrow A^{-1}Ax = A^{-1}b \Rightarrow x = A^{-1}b$

### Matrix determinant

Given a square matrix, we can determine if it's full rank by
    computing the determinant:

For a 2x2 matrix, $$\begin{vmatrix}
a & b \\
c & d \\
\end{vmatrix}  = ad - bc$$

For an NxN matrix, we can compute determinants by taking all
possible N-permutations (α, β, ..., ω) of the N columns (1, 2,
..., N) and computing the sum

$$\begin{vmatrix}
a_{11} & \cdots & a_{1N} \\
    \vdots & \ddots & \vdots \\
a_{N1} & \cdots & a_{NN} \\
\end{vmatrix} = \sum\left( -1 \right)^{flips}a_{1\alpha}a_{2\beta}\cdots a_{N\omega}$$

N! terms -- yikes!

Flips for a permutation is how many interchanges we have to do to get from (1, 2, ..., N) to (α, β, ..., ω). We'll skip how to computed the determinant more efficiently (use MATLAB!) If the determinant is nonzero, the matrix is full rank and invertible


### More about matrices

Recall: a matrix is a finite, ordered sequence of numbers arranged
in a rectangle with some number of rows and columns.

We already observed that these numbers influence the rank of the
matrix, and the number of linearly independent vectors in the
row/column spaces and corresponding null spaces of the matrix.

The shape and numbers in a matrix also yield other important
properties that will be useful.

## Matrix symmetry

If a matrix A is square, and its off-diagonal elements satisfy $A(i,j) = A(j,i)$, we call the matrix *symmetric*.

Below are to symmetric matrices. 

$$\begin{pmatrix}
0 & -1 \\
 -1 & 2 \\
\end{pmatrix}$$

$$\begin{pmatrix}
2 & 3 & 4 \\
3 & -1 & -2 \\
4 & -2 & 1 \\
\end{pmatrix}$$

Suppose a matrix measures N columns and N rows. How many degrees of freedom does it have?
Now suppose it is also symmetric. How many degrees of freedom now?

For a general matrix A, with M rows and N columns, we call its
*transpose* $A^T$, another matrix with N rows and M columns, such
that $A^T(i,j) = A(j,i)$.

For a symmetric matrix, $A = A^T$

If we have a square matrix A, we can decompose it into *symmetric* and *antisymmetric* parts:

Verify $A_S$ is symmetric:

$$A_{S} = \frac{1}{2}\left( A + A^{T} \right),A_{-S} = \frac{1}{2}\left( A -A^{T} \right)$$

What does antisymmetric mean?

$$A = \begin{pmatrix}
3 & -1 \\
1 & 2 \\
\end{pmatrix}$$

Example:
Given a square matrix, another important property is positive
definiteness (or semidefiniteness). To understand this property, we
should first introduce the matrix determinant:

### *Positive definite matrices*

In general, positive definite matrices have nice properties (especially when they are also symmetric). For example, when A is positive definite, the quadratic function $x^TAx - b^Tx + c$ always has a unique minimum. This also implies that the linear system $Ax = b$ has a unique solution.

It also means that the matrix transformation $A$ preserves some information about the size or length of a vector x, so that $y = Ax$ grows as $x$ grows.

Positive semidefinite matrices are less well-behaved, as the linear system $Ax = b$ no longer has a unique solution, and the quadratic function does not have a unique minimum.

### Gram Matrix

For a general matrix $A$ with $M$ rows and $N$ columns, we can construct
its *Gramian*, or *Gram matrix*, $G$, by taking the matrix product
$A^TA$.
-  This Gram matrix is always symmetric and positive semidefinite.
-  This Gram matrix is always square.
- The rank of G is the same as the rank of A. If G is full rank, G
is also positive definite.

<div class="exercise">
What is the Gram matrix of $$A = \begin{pmatrix}
2 & 1 \\
1 & 0 \\
-1 & 1 \\
\end{pmatrix}$$?
</div>
-->