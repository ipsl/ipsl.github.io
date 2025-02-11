---
layout: course-moi
usemathjax: true
useJSXGraph: true
---
# Sampling signals

Information in the real world is analog. To store them on a computer, we sample the signal:
<div style="float;"><img src=".//media/image1.png" width="250px"></div>
<div style="float;"><img src=".//media/image2.png" width="250px"></div>
<div style="float;"><img src=".//media/image3.png" width="250px"></div>

Reconstruction
But how can recover the original signal? There are many analog signals (an infinite number, actually) that fit these samples:
<!-- missing 2 imgs -->

Only sampled (and quantized) values are stored

## Sampling and the spectrum

We know that any signal can be viewed as a weighted sum (integral) of complex exponentials. So let's first consider sampling a complex exponential. A complex exponential is defined by its magnitude, frequency, and initial phase like: $Ae^{i2\pi ft + \phi}$.
So the goal is to find these quantities from samples. For simplicity, we will assume that $A = 1$ and $\phi = 0$. Let's see under what conditions we can recover $f$ from samples

<div style="float;"><img src=".//media/image1.gif" width="250px"></div>

### Sampling complex exponentials

<div style="float: right;"><img src=".//media/image4.png" width="250px"></div>
<!-- need gif -->
The animation on the right is a sampled exponential at the rate of three samples per second

What is the frequency of the original signal? $f = 1 Hz$.

What is the sampling frequency? That is, how many samples are taken per second? $f_{s} = 3 Hz$.

We can see that the sampled signal coincides with the original signal
(time is slowed by a factor of 12)


<!-- need fig --> f=1 f=1 sampled at f_s = 3 samples per second

Let's overlap these to make sure the samples agree with the original signal.
The samples are taken at 0s, 1/3s, 2/3s, ...
Is there any other frequency that would result in the same samples?


## Bandwidth and sampling

If we sample with frequency $f_{s}$ signals with the following frequencies appear the same

$f,f \pm f_{s},f \pm 2f_{s},\ldots$

<div style="float;"><img src=".//media/image5.png" width="250px"></div>

How can we ensure that we can recover the correct frequency? Not possible if we don't make any additional assumption about the range of possible frequencies

If the true frequency $f$ satisfies
$- \frac{f_{s}}{2} < f < \frac{f_{s}}{2}$, then it can be recovered correctly.
<div style="float;"><img src=".//media/image6.png" width="250px"></div>

### Bandlimited signals

So the true frequency must be restricted in a certain sense. But how can we ensure this is the case?

Fortunately, real signals are band-limited, i.e., there is a number
$B$ such that all their frequency content is between $- B$ and $B$

An analog (continuous-time) signal that has a finite range of nonzero frequency content is called *bandlimited*.

If our bandlimited signal has content up to positive frequency B, we call B the *bandwidth* of the signal. The signal's frequency content spans $[-B, B]$

Suppose our signal is a sinusoid: $x(t) = 2cos(2π(500)t + π/4)$.

What does the analog spectrum look like?

What is the bandwidth of this signal?

<!-- #### Bandwidth and sampling -->

Let's make our observations precise.

If for $f$ in the range $[-B,B]$, to recover it without ambiguity:

$f \pm f_{s}$must fall outside the range $\lbrack - B,B\rbrack$ that is, $f + f_{s} > B$ and $f - f_{s} < - B$

Example: If $f_{s} = 3$, what is the largest value for $B$?

So what is the relationship between $f_{s}$ and $B$ for correct recovery?

The largest frequency is $B$. We need $B + f_{s} > B$ (obvious) and $B - f_{s} < - B \Rightarrow f_{s} > 2B$

The smallest frequency is $- B$. We need $- B + f_{s} > B \Rightarrow f_{s} > 2B$ and $- B - f_{s} < - B$ (obvious)

So we need $f_{s} > 2B$.

### The sampling theorem

If $2B < f_{s}$ then given samples from a complex exponential with frequency $f$in the range $\lbrack - B,B\rbrack$, we can correctly recover $f$

The same holds for a combination of complex exponentials if all their frequencies are in the range $\lbrack - B,B\rbrack$, and so for all bandlimited signal with bandwidth $B$

<div class="highlight">
<strong>Fundamental Tenet IIX (Sampling Theorem):</strong>
<p>Perfect reconstruction of a bandlimited signal with bandwidth $B$ from a finite number of samples is possible by sampling with frequency $f_{s} > 2B$. </p>
</div>


The bandwidth of human voice (speaking) is 4kHz. At quantization bit depth of 8 bits/sample, what data rate is needed to transmit human voice?

$f_{s} = 8kHz,Rate = 8000\frac{samples}{second} \times 8\frac{bits}{sample} = 64000\frac{bits}{second} = 64kbps$

This is what happens on your phone

In the old modems it was the opposite. Data was converted to analog signal with bandwidth of 4kHz, since phone circuits could carry analog signals with bandwidth of 4kHz

But why were modems 56kbps instead of 64kpbs? One out of each 8 bits was used for control purposes when transmitting data

