---
layout: course-moi 
usemathjax: true
---
# Complex numbers


### The square root of $$-1$$

The field of real numbers is quite powerful (and complex). Still, there are simple equations with no solutions, in particular,  $$𝑥^2+1=0$$ does not have a solution. Let’s represent a solution to $$𝑥^2+1=0$$ as $$\sqrt{-1}$$. So $$\sqrt {-1}$$ is defined as the number whose square is $$-1$$. It is also shown by 𝕚,𝑖,𝑗. This is called an imaginary number, but the way we arrived at it is similar to defining negative numbers, e.g., as the solution to $$x+1=0$$. So in a sense, $$\sqrt {-1}$$ is not less "real" than -1. 

If $$\sqrt{-1}$$ is a solution then $$−\sqrt{-1}=−𝕚$$ must be another solution:
$$(−𝕚)^2=(-𝕚)\times(-𝕚)=𝕚\times 𝕚 = -1$$


What is $$1/𝕚$$? In other words, what is $$x$$ such that $$𝕚\times x = 1$$? 

$$𝕚\times x = 1 \Rightarrow 𝕚\times 𝕚\times x = 𝕚\Rightarrow -1\times x = 𝕚 \Rightarrow x = -𝕚.$$


The set of complex numbers is defined as 

$$ℂ=\{𝑎+𝑏𝕚:𝑎,𝑏∈ℝ\}$$

with the following operations and inverses:
* Addition: 
$$(𝑎+𝑏𝕚)+(𝑐+𝑑𝕚)=𝑎+𝑐+𝕚(𝑏+𝑑)$$

* Multiplication:
$$(𝑎+𝑏𝕚)(𝑐+𝑑𝕚)=𝑎𝑐+𝑎𝑑𝕚+𝑏𝑐𝕚+𝑏𝑑𝕚^2=𝑎𝑐−𝑏𝑑+(𝑎𝑑+𝑏𝑐)𝕚$$

* Additive inverse: 
$$−(𝑎+𝑏𝕚)=(−𝑎)+(−𝑏)𝕚$$

* Multiplicative inverse: 
$$\frac{1}{(𝑎+𝑏𝕚)}=\frac{1}{(𝑎+𝑏𝕚)}\frac{(𝑎−𝑏𝕚)}{(𝑎−𝑏𝕚)}=\frac{(𝑎−𝑏𝕚)}{(𝑎^2+𝑏^2 )}=\frac{𝑎}{(𝑎^2+𝑏^2 )}−\frac{𝑏}{(𝑎^2+𝑏^2)} 𝕚$$




<div class="highlight">
<strong>The fundamental theorem of algebra</strong><hr/>
Every non-constant polynomial has a complex root. Furthermore, any polynomial of degree \(n\) can be written as a product of \(n\) first-degree polynomials and has precisely \(n\) roots.
</div>



Examples:

$$
\begin{align*}
𝑥^2+5&=(𝑥−𝕚\sqrt{5})(𝑥+𝕚\sqrt{5})\\
&⇒𝑟𝑜𝑜𝑡𝑠=𝕚\sqrt{5},−𝕚\sqrt{5}
\end{align*}
$$

$$
\begin{align*}
𝑥^3−1&=(𝑥−1)(𝑥^2+𝑥+1)\\
& =(𝑥−1)(𝑥^2+𝑥+1/4+3/4)\\
& =(𝑥−1)((𝑥+1/2)^2+3/4)\\
& =(𝑥−1)(𝑥+1/2+(𝕚\sqrt{3})/2)(𝑥+1/2−(𝕚\sqrt{3})/2)\\
& \Rightarrow roots = 1, -1/2-(𝕚\sqrt{3})/2, -1/2+(𝕚\sqrt{3})/2
\end{align*}
$$





## Numbers: Summary

{:.tabDefault}
Set | Symbol | Elements | Operations | What's missing?
---|---|---|---|---|---
Natural numbers |$$\mathbb N$$| 0,1,2,...| $$+ \times$$| Solve $$x+3=0$$
Integers| $$\mathbb Z$$| ...,-2,-1,0,1,2,...| $$+\times - /$$| Solve $$3x+1=0$$|
Rationals| $$\mathbb Q$$| $$0,\pm 1,\pm\frac12,...$$| $$+\times -/$$| Solve $$x^2=2$$<br>Perimeter of unit circle
Reals| $$\mathbb R$$| Limits of converging sequences in $$\mathbb Q$$| $$+\times -/$$| Solve $$x^2+1=1$$|
Complex numbers| $$\mathbb C$$| $$\{a+b\mathbb i: a,b\in\mathbb R\}$$| $$+\times -/$$|


Complex numbers are said to be complete (contain the limits of all converging sequences) and algebraically closed (all polynomial have roots).


## Geometric representation
Real numbers can be represented on (1-dimensional) real line

Complex numbers are represented on (2-dim) complex plane

$z = a + ib$

Real part: $Re(z) = a$

Imaginary part: $Im(z) = b$

Magnitude: distance from origin

$\left\vert z \right\vert = \sqrt{a^{2} + b^{2}}$

Phase: angle (counterclockwise) from the real line

$\angle z = \tan^{- 1}\frac{b}{a}$

![](.//media/complex/image1.png)
![](.//media/complex/image2.png)

Examples: $z_{1} = 1$, $z_{2} = i$, $z_{3} = 3 + 2i$,
$z_{4} = z_{2} + z_{3}$, $z_{5} = \frac{1}{z_{3}}$

## Multiplication by $i$

What do we get of we multiply $a + ib$ by $i$. Show on complex plane

What are the powers of $i$: $i$, $i^{2},i^{3},\ldots$

## Complex exponentiation

What is $a^{ix}$ when $a,x$ are real?

Let's start with $e^{ix}$.

One way to extend real functions to complex numbers is to define them
based on series:

$e^{x} = 1 + x + \frac{x^{2}}{2} + \frac{x^{3}}{3!} + \frac{x^{4}}{4!} + \frac{x^{5}}{5!} + \ldots$

$\cos x = 1 - \frac{x^{2}}{2} + \frac{x^{4}}{4!} - \ldots$

$\sin x = x - \frac{x^{3}}{3!} + \frac{x^{5}}{5!} - \ldots$

Can we write $e^{ix}$ in terms of $\cos x$ and $\sin x$?

### Euler's equation

$e^{ix} = \cos x + i\sin x$

Click on the [link](https://youtu.be/v0YEaeIClKY) for a visual proof.

More generally,

$z_{1}^{z_{2}} = e^{z_{2}\log z_{1}}$,

where for $z_{1} = re^{i\theta}$, $\log z_{1} = \ln r + i\theta$

Example: find $\sin\left( a + b \right)$ and $\cos\left( a + b \right)$
in terms of $\sin a,\sin b,\cos a,\cos b$using Euler's equation.

$e^{i\left( a + b \right)} = \cos\left( a + b \right) + i\sin{(a + b)}$
![](.//media/complex/image3.png)

$\begin{matrix}
e^{i\left( a + b \right)} = e^{ia}e^{ib} = \left( cosa + i\sin a \right) + \left( \cos b + i\sin b \right) \\
= \left( \cos a\cos b - \sin a\sin b \right) + i\left( \cos a\sin b + \sin a\cos b \right) \\
\end{matrix}$

$\cos\left( a + b \right) = \cos a\cos b - \sin a\sin b$

$\sin{(a + b)} = \cos a\sin b + \sin a\cos b$

## Two Representations
We can also represent complex numbers as $z = {re}^{i\theta}$

What are the real and imaginary parts?

$Re\left( z \right) = Re\left( r\left( \cos\theta + i\sin\theta \right) \right) = r\cos\theta$

$Im\left( z \right) = r\sin\theta$

What are the magnitude and phase of $z = re^{i\theta}$?

$z = re^{i\theta} = r\cos\theta + ir\sin\theta$

$\left\vert z \right\vert = \sqrt{r^{2}\left( \cos\theta \right)^{2} + r^{2}\left( \sin\theta \right)^{2}} = r$

$\angle z = \tan^{- 1}\frac{\sin\theta}{\cos\theta} = \theta$


We can represent a complex number $z$ in terms of

real and imaginary parts: $z = a + ib$ (Cartesian)

magnitude and phase: $z = re^{i\theta}$ (Polar)

$a = r\cos\theta,b = r\sin\theta$

$r = \sqrt{a^{2} + b^{2}},\theta = \tan^{- 1}\frac{b}{a}$


### Cartesian vs Polar

Related to these representation are two coordinate systems

![](.//media/complex/image4.png)
![](.//media/complex/image5.png)

Cartesian: (real part, imaginary part) Polar: (magnitude,
phase)

Note: We refer to $re^{i\theta}$ as the polar representation, even if we
don't necessarily use the polar axis shown on the right

Polar representation

Examples: $z_{1} = e^{i\pi}$, $z_{2} = e^{\frac{i\pi}{2}}$,
$z_{3} = e^{- \frac{i\pi}{2}}$, $z_{4} = 2e^{i\pi/6}$,
$z_{5} = 2e^{i13\pi/6}$

Examples: $z_{1} = 2e^{i\pi/6}$, $z_{2} = 3e^{- i2\pi/6}$,
$z_{3} = z_{1}z_{2}$, $z_{4} = 1/z_{2}$

## Arithmetic in the complex plane

The right representation simplifies computation.

Addition/subtraction:
$a + ib + c + id = \left( a + c \right) + i(b + d)$

Multiplication:
$re^{i\theta} \times \rho e^{i\phi} = r\rho e^{i\left( \theta + \phi \right)}$

Inverse: $\frac{1}{r e^{i\theta}} = \frac1r e ^{-i\theta}$

Division: $\frac{\rho e^{i\phi}}{r e^{i\theta}} = \frac{\rho}{\phi}e^{-i(\phi-\theta)} $

Power (to the power of $n$): ${(re^{i\theta})}^n = r^n e^{i n\theta}$

## Signals in the complex plane

We can represent real signals on a two-dimensional graph
![](.//media/complex/image1.gif)

How about complex signals?

Represent $e^{i2\pi t}$ as a path on the complex plane.

Signals of the form $e^{i\omega t}$ are called complex exponentials
and are very important!

Find $Re(e^{i2\pi t})$

Find $Im(e^{i2\pi t})$

Let $f\left( t \right) = t$.

Represent $f\left( t \right)e^{i2\pi t}$ as a path on the
complex plane.
![](.//media/complex/image2.gif)

## Fundamental theorem of algebra

<div class="highlight">
<strong>Every non-constant polynomial has a complex root. </strong>
</div>

Idea behind the proof:

Consider the polynomial $f\left( z \right) = a_{n}z^{n} + \ldots + a_{0},a_{0} \neq 0$

For a large value of $r$ what shape is formed by $f\left( re^{i\theta} \right),0 \leq \theta \leq 2\pi$?

What shape is formed by a small value of $r$?

What happens if we start from a large value of $r$ and gradually
make it equal to 0?

<!-- {:.highlight}
> Corollary: A degree $\mathbf{n}$ polynomial has $\mathbf{n}$ complex roots. -->

Proof by induction:

A degree 1 polynomial has 1 root.
Suppose degree $k$ polynomial has $k$ roots.
Given a degree $k + 1$ polynomial, find one of its roots, say $w$.
Divide the polynomial by $(z - w)$. This polynomial has degree $k$
and most have $k$ roots. So a degree $k + 1$ polynomial has $k + 1$
roots.

$x^{5} - x^{3} = x^{3}\left( x - 1 \right)\left( x + 1 \right) \Rightarrow roots = 0,0,0,1, - 1$

$x^{2} + 5 = \left( x - {\mathbb{i}}\sqrt{5} \right)\left( x + {\mathbb{i}}\sqrt{5} \right) \Rightarrow roots = {\mathbb{i}}\sqrt{5}, - {\mathbb{i}}\sqrt{5}$

$x^{3} - 1 = \left( x - 1 \right)\left( x^{2} + x + 1 \right) = \left( x - 1 \right)\left( x^{2} + x + \frac{1}{4} + \frac{3}{4} \right) = \left( x - 1 \right)\left( \left( x + \frac{1}{2} \right)^{2} + \frac{3}{4} \right)$

$= (x - 1)\left( x + \frac{1}{2} +  \frac{ \mathbb{i}\sqrt{3} }{2} \right)\left( x + \frac{1}{2} - \frac{\mathbb{i}\sqrt{3}}{2} \right)$

## Conjugate

The conjugate of a complex number $z = a + ib$ is $z^{\ast} = a - ib$

In polar form, the conjugate of $z = re^{i\theta}$ is
$z^{\ast} = re^{- i\theta}$

If a real polynomial has a complex root $w$, then $w^{\ast}$ is also a
root

Example:$x^{2} - 2x + 2$

![](.//media/complex/image6.png)$

## Roots of unity

What are the solutions to $z^{3} = 1$?

Recall: $re^{i\theta} = re^{i\left( 2\pi k + \theta \right)}$\
$z^{3} = 1 \Rightarrow \left( re^{i\theta} \right)^{3} = 1 \Rightarrow r^{3}e^{i3\theta} = 1e^{i0} \Rightarrow \begin{cases}
r = 1 \\
3\theta = 2\pi k \\
\end{cases} \Rightarrow \begin{cases}
r = 1 \\
\theta = \frac{2\pi k}{3} \\
\end{cases} \Rightarrow \begin{cases}
r = 1 \\
\theta = 0,\frac{2\pi}{3},\frac{4\pi}{3} \\
\end{cases}$

Check:

![](.//media/complex/image7.png)

What about $z^{n} = 1$?

Roots of $z^{n} = re^{i\theta}$?
