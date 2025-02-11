---
layout: course-moi
usemathjax: true
useJSXGraph: true
---
# Multiple access communication

Multiuser communications

Orthogonal coding and multiplexing

Multiple access communication schemes

Multiuser communications

Early modes of multiuser communications went to great lengths to provide dedicated communications links for each pair of users. For instance, cities were blanketed with massive webs of wires:

This is no longer the case, thanks to wireless communication (and underground links).

The wireless spectrum

Wireless communication relies on radio spectrum, i.e., electromagnetic waves from 3kHz to 300 GHz

By modulating signals at different frequencies and separating them using filters, multiple users can communicate simultaneously

Picture of spectrum.

To regulate wireless communications, the Federal Communications
Commission created licenses that users (e.g., radio or TV stations) could buy to provide dedicated bandwidth that others could not use:

However, providing every single user with their own dedicated spectrum is very wasteful -- why?

In today's lecture, we will begin to understand other ways of sharing communications channels among many users.

[spectrum_wall_chart](https://www.ntia.doc.gov/files/ntia/publications/january_2016_spectrum_wall_chart.pdf)

In the US, FCC auctions the wireless spectrum, which is bought by cell phone carriers, etc.

Here's how much major carriers spent in recent 5G (24 GHz, 28 GHz) auctions:
- ATT $\geq$ $982.5 million
- T-mobile $\geq$ $803.2 million
- Verizon $\geq$ $506 million
- US Cellular $\geq$ 126.6 million

Sources:
[[https://docs.fcc.gov/public/attachments/DA-19-485A2.pdf]](https://docs.fcc.gov/public/attachments/DA-19-485A2.pdf) and
[[https://arstechnica.com/?post_type=post&p=1517273](https://arstechnica.com/?post_type=post&p=1517273)

Cellular networks: leading the way

Before modern cellular networks, mobile wireless radio communications generally operated in an **uncoordinated way.**

As users moved around, their communications could clash with other users relying on the same channel or bandwidth.

Cellular networking changed this by dividing a region into a multitude of *cells*, each containing its own base station responsible for communicating with the users within its cell.

Depending on the expected density of users, the **size of cells** can be quite large or very small.

The base stations are responsible for **handing off users**
(e.g., phones) from one cell to another as they move among them.

This way, **frequency ranges could be shared among users and recycled as they relocate.**

**In the beginning: 1G cellular networks**

The analog Advanced Mobile Phone System (AMPS) was deployed in the US in\
1983. It assigned different frequency ranges to users, via a scheme called\
**Frequency Division Multiple Access (FDMA).**

We'll learn more about FDMA later.

Each user in a cell had a dedicated frequency band; base stations had to keep track of which bands were in use as users moved between cells and reallocate bands to prevent multiple users' transmissions from clashing with each other.

FCC only allocated about **25 MHz for downlink** and **25 MHz for uplink frequencies**, allowing up to **832 downlink/uplink channels of about 30 kHz each**.

This approach is not scalable -- more channels would require more bandwidth.

From analog to digital: 2G was born

Analog transmissions were **bandwidth hungry**, mostly **limited to speech/audio**, and had **limited privacy or security** (they were unencrypted).

Two other multi-access approaches were adopted for digital transmissions:\
Time Division Multiple Access (TDMA) and Code Division Multiple Access
(CDMA).

**TDMA** allocated users with brief time slots for transmitting part of their digital signal.

**CDMA** employed "codes" to allow users to label their messages, enabling simultaneous transmission.

2G networks enabled **digital media** such as SMS (text messages), ringtones, and even data to be shared over a cellular network. Thus the smartphone became possible!

Need for speed: 3G mobile broadband

Building on the digital multiple access technologies of 2G, 3G gained speed through more efficient use of bandwidth. Whereas 2G used
*circuit-switching*, 3G introduced *packet-switching* for data:

Circuit-switching: All information in a signal travels together on the same path, at the same speed.

Packet-switching: Information is divided into packets, which are transmitted separately, possibly using a multitude of different paths.

This move to higher speeds is a major evolutionary step in cellular communications:

In 3G, the minimum speed was boosted to 2 Mbps for stationary/walking users and 384 kbps for moving vehicles -- much faster than 2G networks could achieve!

Thus, wireless broadband and data applications became more common, and even more demanding applications like video streaming became possible in limited cases.

However, packet-switching was used solely for data in these networks, to ensure compatibility with the older 2G networks for making phone calls. It's not until 4G that packet switching became the norm for [all]{.ul} communications.

Cellular like the internet: 4G LTE

By moving to a full internet-like communications architecture with packet-switching for all communications, 4G networks could make use of bandwidth more efficiently than ever before.

Voice/audio is sent via packets

Users are identified via internet-style addressing; the cellular network takes on modern routing capabilities

Data rates improved by a factor of 10; streaming video and other data-intensive applications become widespread

The Long-Term Evolution (LTE) standard guided 4G development in a coordinated way over the last 15 years through the 3rd
Generation Partnership Project (3GPP).

The future of wireless: 5G

Future efforts to expand the capabilities and applications of cellular networks fall under the heading of "5G"

A major piece of many next-generation technologies including smart cities, self-driving cars, Internet of Things, AI everywhere

Some characteristics of 5G:

Higher frequencies: 24GHz-100GHz. Less crowded and higher bandwidth.
(but shorter range, meaning smaller cells)

More antennas: higher frequencies need smaller antennas
$\rightarrow$ more antenna $\rightarrow$ higher data rates

Smaller cells: a necessity but also an advantage in dense areas.
Suitable for dense urban areas and a future where everything is connected, i.e., Internet of things (IoT)

Time Division Multiple Access

Let's see how these technologies work. First, let's start with Time
Division Multiple Access (TDMA):

<div style="float;"><img src=".//media/image69.png" width="250px"></div>


Idea: enable multiple users to share a single channel by assigning each user a "slice" of time during which only that user can communicate.

How are time slices assigned?

Each base station tracks user requests for transmit/receive time

Requests are prioritized by type (e.g., voice calls, then data)

Balancing assures users do not have to wait too long due to other users' heavy usage (therefore many networks will throttle excessive usage)

However, users are responsible for honoring time slice allocations; base station does not explicitly control user transmission times.

<div style="float;"><img src=".//media/image70.png" width="250px"></div> 
<div style="float;"><img src=".//media/image71.png" width="250px"></div>

Frequency Division Multiple Access

Instead of assigning a time slice to the entire channel, a base station can assign users different ranges of non-overlapping frequencies they are allowed to use:

However, as users relocate, and their needs change, maintain a fixed assignment of frequencies becomes wasteful. Hence, modern FDMA is actually a time-frequency assignment hybrid:

<div style="float;"><img src=".//media/image72.png" width="250px"></div>

This is the norm for 2G TDMA/FDMA networks like Global system for mobile
(GSM) networks

TDMA, FDMA, and orthogonality

By ensuring frequencies are not shared at a given slice or moment in time, TDMA and FDMA both implement a form of orthogonality, since only a single user is transmitting a nonzero sinusoid at any given frequency at any given time.

Different time slices are orthogonal

Different frequency ranges are orthogonal

Different time/frequency slice ranges are orthogonal

Is this the only way to ensure orthogonality? No.

In fact, data coding provides another

Code Division Multiple Access

Code Division Multiple Access uses orthogonal data coding sequences to separate user signals without enforcing either time slicing or frequency range constraints:

CDMA: Each user has access to all frequencies, all the time!

<div style="float;"><img src=".//media/image73.png" width="250px"></div> 

Unlike TDMA/FDMA, each user can transmit continuously and has access to the full channel.

Robust in challenging environments with varying channel characteristics
(e.g., during bad weather)

Does not require waiting to communicate, reducing latency and avoiding excessive delays

CDMA: Each user users a different code to transmit.

If the receiver knows the transmitter's code, the receiver can extract the data from just the transmitting user, irrespective of other transmissions on the same channel.

This requires the transmissions' codes to be orthogonal to each other. This way, multiplying a received signal by one user's code will automatically zero out the contributions from every other user.

Start with a low-bandwidth signal, and multiple by a high-bandwidth
"spreading code". The result will be high bandwidth, but allow simultaneous reuse of that bandwidth by other users.

Number of concurrent users not directly limited by bandwidth available, but by number of orthogonal codes!

Orthogonality: review

Two vectors are orthogonal if their inner product is 0.

Example: $a = \left( 1, - 1,1, - 1 \right),b = \left( 1,1,1,1 \right)$,
$c = \left( - 1, - 1,1,1 \right)$

Find

$\left\langle a,b \right\rangle$ $\left\langle a,a \right\rangle$

$\left\langle a,c \right\rangle$ $\left\langle b,b \right\rangle$

$\left\langle b,c \right\rangle$ $\left\langle c,c \right\rangle$


$\left\langle a,b + c \right\rangle$

$\left\langle a,a + b \right\rangle$

$\left\langle a, - a + b \right\rangle$

CDMA orthogonality

Suppose code length is $N$ bits

User A has codeword (a vector of length $N$ consisting of $\pm 1$) $a$, user B has codeword $b$.

Then, choose $a$ and $b$ to be orthogonal:
$\left\langle a,b \right\rangle = 0$

To send 1, user A transmits $a$ and to send $0$, she transmits $- a$

User B sends 1 as $b$ and 0 as $- b$.

At the receiver end, we get $\pm a \pm b$.

If we multiply by $a$, what do we get?

What if we multiply by$b$?

This is why orthogonality is important.

Let's look at this in more detail:

Let $m_{A},m_{B}$ indicate the bit that each wants to transmit: +1 for 1 and -1 for 0

At the receiver we receive $s = m_{A}a + m_{B}b$

The result of decoding for A:

$\left\langle a,s \right\rangle = \left\langle a,m_{A}a + m_{B}b \right\rangle = \left\langle a,m_{A}a \right\rangle + \left\langle a,m_{B}b \right\rangle = \ldots$

If there are three or more users whose codewords are all pairwise orthogonal, the computation is exactly the same.

Consider a system with three users:

A with codeword $a = \left( + 1, + 1, + 1, + 1 \right)$

B with codeword $b = \left( - 1, + 1, + 1, - 1 \right)$

C with codeword $c = \left( + 1, - 1, + 1, - 1 \right)$

D with codeword $d = \left( + 1, + 1, - 1, - 1 \right)$

The users simultaneously transmit. The received signal is

$s = ( + 2, + 2, - 2, + 2)$

Find the bit that each user intended to transmit

What if $s^{\prime} = \left( 2,0, - 2,0 \right)$ is received?

CDMA and noise

But there's always noise!

Let $m_{A},m_{B}$ indicate the bit that each wants to transmit: +1 for 1 and -1 for 0

Also let $n$ be the noise vector

At the receiver we receive $s = m_{A}a + m_{B}b + n$

The result of decoding for A:

$\left\langle a,s \right\rangle = \left\langle a,m_{A}a + m_{B}b + n \right\rangle = \left\langle a,m_{A}a \right\rangle + \left\langle a,m_{B}b \right\rangle + \left\langle a,n \right\rangle = \ldots$

Key idea: noise is random, so inner product between noise and $a$,
$\left\langle a,n \right\rangle,$will be small.

This is a random quantity with a complex distribution, so let's look at its expected value and variance:

$E\left\lbrack \left\langle a,n \right\rangle \right\rbrack = E\left\lbrack \sum_{i = 1}^{N}{a_{i}n_{i}} \right\rbrack = \sum_{i = 1}^{N}{E\left\lbrack a_{i}n_{i} \right\rbrack} = \sum_{i = 1}^{N}{a_{i}E\left\lbrack n_{i} \right\rbrack} = 0$ where the last step is because we assume noise has mean zero

If the standard deviation is small, the effect of noise is small
(concentrated around 0)

SD is of the order of $\sqrt{N}$, which is much smaller than $N$, if $N$ is large

This allows CDMA to work even when the noise is very high

Let's assume noise in each interval has the following distribution

$$n_{i} = \begin{cases}
 -M & \text{with probabailty} & p/2 \\
0 & \text{with probabailty} & 1 - p \\
M & \text{with probabailty} &  p/2 \\
\end{cases} $$

What's $Var(n_{i})$?

What's
$Var\left( \left\langle a,n \right\rangle \right) = Var\left( \sum_{i = 1}^{N}{a_{i}n_{i}} \right) = \sum_{i = 1}^{N}{\left( a_{i} \right)^{2}Var\left( n_{i} \right) = NVar(n_{i})} = NM^{2}$

So standard deviation is $\sqrt{N}M$

Thus we know that with at least 99% probability,
$\left\langle a,n \right\rangle$ is less than $10\sqrt{N}M$. (why?)

For fixed $M$, how does this compare with $\pm N$, as $N$ becomes large?

Consider a system with three users:

A with codeword
$a = \left( + 1, + 1, + 1, + 1, + 1, + 1, + 1, + 1, + 1, + 1 \right)$

B with codeword
$b = \left( - 1, - 1, - 1, - 1, - 1, + 1, + 1, + 1, + 1, + 1 \right)$

The users simultaneously transmit. The received signal is

<div style="float;"><img src=".//media/image74.png" width="250px"></div>

$s = (1,3,3,0,0,0,2, - 1,0, - 1)$

Find the bit that each user intended to transmit and the noise vector

In fact, CDMA can decode signals (red line) well below the "noise floor
(blue line)":

Let's see an example of this for a digital signal:

Call one period of this spreading code, $a$

What if we multiply the mixed high-bandwidth signal by the spreading code again?

<div style="float;"><img src=".//media/image75.png" width="250px"></div>
<div style="float;"><img src=".//media/image76.png" width="250px"></div> 

How does this compare to the original message?

What if we take a different spreading code, orthogonal to this code?
\<*a,b*\> = 0

Call one period of this code, *b. Not consistent.*

If we decode with the right spreading code,

The eight decoded bits all match (all +1 or all -1)

<div style="float;"><img src=".//media/image77.png" width="250px"></div>
<div style="float;"><img src=".//media/image76.png" width="250px"></div> 

Averaging the eight decoded bits yields the original low-bandwidth signal

If we decode with an orthogonal code,

The eight decoded bits will be sort of "random" (not all the same)

Averaging the eight decoded bits equals zero.

<div style="float;"><img src=".//media/image77.png" width="250px"></div> 
