---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: course-moi 
usemathjax: true
useJSXGraph: true
---
# Joint and conditional probability
In this section, we will study relationships between random variables in more detail. So far, we have often assumed different random variables to be independent from each other. But the more interesting case is when one random variable can provide information about the other. As an example, denote the data that you write on a flash drive as $X$ and let $Y$ be the data that you read from it. If $X$ and $Y$ are independent from each other, then the flash drive is completely useless. Ideally, you want $Y=X$, but in reality this is seldom the case, because noise is everywhere. So $X$ and $Y$ are neither independent nor can they be assumed to be equal. But $Y$ does provide information about $X$. We can study such relationships through joint and conditional probabilities.

## Joint probability distributions
We have seen that a distribution can fully describe a single random variable. We have also seen that for two _independent_ random variables, $X$ and $Y$, we have $P(X=i,Y=j)=P(X=i)P(Y=j)$. What about random variables that are not independent? 

Suppose a coin is flipped twice. Let $X$ denote the result of the first flip ($X=1$ represents heads and $X=0$ represents tails). Also, let $Y$ be the total number of heads. Clearly, $Y$ and $X$ are not independent. For example, if we know $Y=2$, then necessarily $X=1$. How can we fully describe this relationship? We can do so using their _joint probability distribution_, which is essentially the set of values $P(X=i,Y=j)$ for all possible $i,j$. We can show it using a table. Let's first find the probability values:
<div>
\begin{align*}
P\left(X=0,Y=0\right) & =P\left(\left\{ TT\right\} \right)=\frac{1}{4},\\
P\left(X=0,Y=1\right) & =P\left(\left\{ TH\right\} \right)=\frac{1}{4},\\
P\left(X=0,Y=2\right) & =P\left(\left\{ \right\} \right)=0,\\
P\left(X=1,Y=0\right) & =P\left(\left\{ \right\} \right)=,\\
P\left(X=1,Y=1\right) & =P\left(\left\{ HT\right\} \right)=\frac{1}{4},\\
P\left(X=1,Y=2\right) & =P\left(\left\{ HH\right\} \right)=\frac{1}{4}.
\end{align*}
</div>

Now we can represent the distribution as a table (or a 3D plot):

<table class="tabDefault" align="center">
  <tbody>
    <tr>
      <th><span>$P(X=i,Y=j)$</span></th>
      <th>$Y=0$</th>
      <th>$Y=1$</th>
      <th>$Y=2$</th>
    </tr>
    <tr>
      <th>$X=0$</th>
      <td>1/4</td>
      <td>1/4</td>
      <td>0</td>
    </tr>
    <tr>
      <th>$X=1$</th>
      <td>0</td>
      <td>1/4</td>
      <td>1/4</td>
    </tr>
  </tbody>
</table>
<br/>

If we have the joint probability distribution, how can we find the distribution of each random variable? To find $P(Y=i)$ say, we can sum up the corresponding row or column. In our example,

$$P(Y=1) = P(X=0,Y=1) + P(X=1,Y=1) = 1/4+1/4=1/2.$$

We can add this information to the table to present all the information at once:

<table class="tabDefault" align="center" id="sumBin">
  <thead>
    <tr>
      <th>$P(X=i,Y=j)$</th>
      <th>$Y=0$</th>
      <th>$Y=1$</th>
      <th>$Y=2$</th>
      <th></th>
      <th style="background-color: #CFEFEF;">$P(X=i)$</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>$X=0$</th>
      <td>1/4</td>
      <td>1/4</td>
      <td>0</td>
      <td></td>
      <td style="background-color: #CFEFEF;">1/2</td>
    </tr>
    <tr>
      <th>$X=1$</th>
      <td>0</td>
      <td>1/4</td>
      <td>1/4</td>
      <td></td>
      <td style="background-color: #CFEFEF;">1/2</td>
    </tr>
    <tr><td colspan="100%"></td></tr>
    <tr>
      <td style="background-color: #EFCFEF;">$P(Y=j)$</td>
      <td style="background-color: #EFCFEF;">1/4</td>
      <td style="background-color: #EFCFEF;">1/2</td>
      <td style="background-color: #EFCFEF;">1/4</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

    
<br/>


<div class="exercise" id="Feller">
	<button  onclick="showSolution(this,'jointballs')" style="float:right;">Show Solution</button>
	<p>
	(Feller, 1968) A red ball, a blue ball, and a green ball are randomly distributed into three bins numbered 1,2,3. Note that since for each ball we have three options, there are 27 outcomes. All 27 outcomes are equally likely.</p>
	<p> Let $X_1$ be the number of balls in the first bin and $X_2$ the number of balls in the second bin. 
<ul>
	<li>Find the outcomes in the event $X_1=1,X_2=2$ and the event $X_1=2,X_2=2$.</li>
	<li> Find the joint distribution of $X_1$ and $X_2$ as a table.</li>
	<li>Find the distribution of $X_1$ and the distribution of $X_2$.</li>
</ul>
		</p>
	<div id="jointballs" style="display:none;" class="solution">	
		We'll only give the distributions.
		<table class="tabDefault" align="center">
  <tbody>
    <tr>
      <th><span>$P(X_1=i,X_2=j)$</span></th>
      <th>$X_2=0$</th>
      <th>$X_2=1$</th>
      <th>$X_2=2$</th>
      <th>$X_2=3$</th>
    </tr>
    <tr>
      <th>$X_1=0$</th>
      <td>1/27</td>
      <td>3/27</td>
      <td>3/27</td>
      <td>1/27</td>
    </tr>
    <tr>
      <th>$X_1=1$</th>
      <td>3/27</td>
      <td>6/27</td>
      <td>3/27</td>
      <td>0/27</td>
    </tr>
    <tr>
      <th>$X_1=2$</th>
      <td>3/27</td>
      <td>3/27</td>
      <td>0/27</td>
      <td>0/27</td>
    </tr>
    <tr>
      <th>$X_1=3$</th>
      <td>1/27</td>
      <td>0/27</td>
      <td>0/27</td>
      <td>0/27</td>
    </tr>
  </tbody>
</table>
<br/>
By summing the rows, we find the distribution of $X_1$ as $$P(X_1=0)=8/27,\quad P(X_1=1) = 12/27,\quad P(X_1=2) = 6/27,\quad P(X_1=3) = 1/27.$$ The distribution for $X_2$ is the same since the joint distribution is symmetric.
	</div>
</div>
<br/>

<div class="exercise">
	Let $X$, $Y$ be independent binary random variables, each taking values of 0 and 1 with equal probability. Let $Z=X\oplus Y$, where the the sum is in $\mathbb F_2$ (similar to normal sum except that $1\oplus 1= 0$). Find the joint distribution of $X$ and $Z$ as well as the distribution of $X$ and the distribution of $Z$, and show them in a single table.
	</div>
<br/>
## Conditional probability

Suppose we have collected the following data over a year about traffic collisions and weather on a given road:

<table class="tabDefault" align="center">
  <tbody>
    <tr>
      <td></td>
      <th>Bad weather</th>
      <th>Good weather</th>
    </tr>
    <tr>
      <th>Days with car crashes</th>
      <td>5</td>
      <td>5</td>
    </tr>
    <tr>
      <th>Days with no car crash</th>
      <td>60</td>
      <td>295</td>
    </tr>
  </tbody>
</table>

Let's assume that this data is representative and we can use it to estimate probabilities. 
* Let $B$ be the event that the weather is bad. Then $P(B)= ({60+5})/{365}=18\%$.
* Let $G$ be the event that the weather is good. Then $P(G) = (300)/(365) = 72\%$.
* Let $C$ be the event that there is a car clash. Then $P(C) = ({5+5})/{365}=2.7\%$.
* The probability of bad weather and car crash is $P(B\cap C) = 5/365=1.4\%$.

Now, we'd like to consider the effect of weather on the probability of car crash. To find the probability of a car crash when the weather is bad, we limit our attention to the 65 days in which we have bad weather. Among these, in 5 days there were car crashes. So we can estimate this probability as 

$$P(\text{car crash given that the weather is bad}) = \frac{5}{65}=7.7\%.$$

This is a conditional probability. We assume some event to hold and then find the probability of another event under that assumption. We write the conditional probability of an event $A$ assuming $B$  as $P(A\|B)$. So above we have found 

$$P(C|B) = \frac{5}{65}=7.7\%.$$

Similarly, 

$$P(C|G) = \frac{5}{300}=1.7\%,$$

which is smaller as can be expected. 

The key point is that when computing the conditional probability of $A$ given $B$, in the denominator, we only consider those cases (days in our example) in which $B$ has occurred, and in the numerator, we consider cases in which both $A$ and $B$ occurred. While above we were dealing with cases (days), we can apply the same logic to probabilities (and get the same result):

$$P(C|B) = \frac{P(C\cap B)}{P(B)}=\frac{5/365}{65/365}=\frac 5{65}=7.7\%.$$

<div class="highlight">
	The probability of an event $A$ given that $B$ has occurred is defined as 
	$$P(A|B)=\frac{P(A\cap B)}{P(B)}.$$ 
  We require that $P(B)\neq0$.
</div>
<br/>
If two events $A$ and $B$ are independent, then 

$$P(A|B) = \frac{P(A\cap B)}{P(B)} = \frac{P(A)P(B)}{P(B)}=P(A).$$

So whether or not $B$ has occurred does not affect the probability of $A$.

<div class="exercise">
	<button  onclick="showSolution(this,'condComp')" style="float:right;">Show Solution</button>
	Prove that $P(A^c|B)=1-P(A|B)$.
	<div id="condComp" style="display:none;" class="solution">
		$$P\left(A^{c}|B\right)=\frac{P\left(A^{c}\cap B\right)}{P\left(B\right)}=\frac{P\left(B\backslash A\right)}{P\left(B\right)}=\frac{P\left(B\right)-P\left(A\cap B\right)}{P\left(B\right)}=1-P\left(A|B\right).$$
	</div>
</div>
<br/>

<div class="exercise">
	<button  onclick="showSolution(this,'contNum')" style="float:right;">Show Solution</button>
	A positive integer less than or equal to 18 is chosen at random, with all outcomes equally likely. 
	<ul>
		<li>What is the probability that it is divisible by 8?</li>
		<li>What is the probability that it is divisible by 8 given that it is divisible by 4?</li>
		<li>What is the probability that it is divisible by 2?</li>
		<li>What is the probability that it is divisible by 2 given that it is divisible by 3?</li>
	</ul>
	<div id="contNum" style="display:none;" class="solution">
		<ul>
			<li>There are 2 outcomes that are divisible by 8. So the probability is $2/18=1/9$.</li>
			<li>There are 4 outcomes that are divisible by 4. Among these, 2 are divisible by both 4 and 8. So the desired conditional probability is $2/4=1/2$.</li>
			<li>There are 9 outcomes that are divisible by 2. So the probability is $9/18=1/2$</li>
			<li>There are 6 outcomes that are divisible by 3. Among these, 3 are divisible by both 2 and 3. So the desired conditional probability is $3/6=1/2$. So divisibility by 2 and by 3 are independent in this example.</li>
		</ul>
	</div>
</div>
<br/>

### The law of total probability
Conditional probability can be helpful for finding the (unconditional) probability of events too. Note that 

$$P(A)  = P(B)P(A|B)+ P(B^c)P(A|B^c).$$

<div class="exercise">
    Prove the above equality.
</div>
<br/>

<div class="exercise">
  <button  onclick="showSolution(this,'totalProb')" style="float:right;">Show Solution</button>
  A coin is flipped. If tails shows, it is flipped two more times, and if heads shows, it is flipped once more. What is the probability that we observe two heads.
  <div id="totalProb" style="display:none;" class="solution">
    Let $B$ be the event that tails shows on the first flip and $A$ the event that we observe two heads. Then
    $$P(A) = P(B)P(A|B)+P(B^c)P(A|B^c) = \frac12\cdot\left(\frac12\cdot\frac12\right) + \frac12\cdot\frac12 = \frac38.$$
  </div>
</div>
<br/>

This approach can be extended further. For example, suppose $B_1,B_2,B_3$ are events that that are pairwise disjoint (the intersection of any two of them is empty) and $B_1\cup B_2\cup B_3=\Omega$. Then, 

\begin{equation}\label{eq:totProb}
P(A)  = P(B_1)P(A|B_1)+ P(B_2)P(A|B_2)+ P(B_3)P(A|B_3).
\end{equation}

Let's see an example. Suppose a random 2-digit number (between 10 and 99, inclusive) is selected by choosing each digit at random. What is the probability of the event $A$ that it is larger than 63? It is easy to see that all choices are equally likely so we can easily find the desired probability by finding the number of choices that are larger than 63 and dividing by the total number of cases,

$$\frac{99-63}{99-9} = \frac{36}{90} = 0.4.$$ 

Let us also find it using conditional probability. The chosen number is larger than 63 if 'the first digit (from the left) is larger than 6' or 'the first digit is equal to 6 and the second digit is larger than 3'. Let $B_1,B_2,B_3$ be the events that the first digit is less than 6, equal to 6, and larger than 6, respectively. Using \eqref{eq:totProb}

$$P(A)  =  \frac59\cdot 0 + \frac19\cdot\frac6{10} + \frac 39 \cdot 1=\frac{36}{90}=0.4.$$

#### The Monty Hall problem

In the Monty Hall game, a prize is hidden behind one of three doors. After you pick a door, the host opens another one without the prize and gives you the option to switch to the unopened door. There are two strategies. One is sticking with your original choice and the other is switching to the unopened door. Does the strategy you pick affect your chance of winning?

You can play the game below. A car and two goats are hidden behind the doors and your goal is to win the car (although I have heard goats are pretty good pets!). Play a few rounds of this game. After each round, clicking any of the door or prize resets the game.

<table width="100%">
  <td width="30%" style="text-align: center; cursor: pointer;" id="door0" onclick="choose(this,0)"></td>
  <td width="30%" style="text-align: center; cursor: pointer;" id="door1" onclick="choose(this,1)"></td>
  <td width="30%" style="text-align: center; cursor: pointer;" id="door2" onclick="choose(this,2)"></td>
</table>

<div id="result" align="center" style="visibility: hidden;">Play the game to win a 🚗</div>


<button onclick="clear_record()">Reset Record</button> <span id="results"></span>

<script>
  function clear_record(){
    document.getElementById('results').innerHTML = '';
  }
</script>
<script>
  function initialize_game(){
    prize_door = Math.floor(getRandomReal(0,3));
    selected_door = -1;
    opened_door = -1; 
    game_ended = false;   
    if (prize_door == 0) goat_doors = [1,2];
    if (prize_door == 1) goat_doors = [0,2];
    if (prize_door == 2) goat_doors = [0,1];
    document.getElementById('door0').innerHTML =  door;
    document.getElementById('door1').innerHTML =  door;
    document.getElementById('door2').innerHTML =  door;
    document.getElementById('door0').style.backgroundColor = '#FFFFFF';
    document.getElementById('door1').style.backgroundColor = '#FFFFFF';
    document.getElementById('door2').style.backgroundColor = '#FFFFFF';
    document.getElementById('door0').style.cursor = 'pointer';
    document.getElementById('door1').style.cursor = 'pointer';
    document.getElementById('door2').style.cursor = 'pointer';
    //document.getElementById('result').innerHTML = ' ';
    document.getElementById('result').style.visibility = 'hidden';
  }
</script>

<script>
  var door = '<span style="font-size: 1000%">🚪</span>';
  var car = '<span style="font-size: 500%">🚗</span>';
  var goat = '<span style="font-size: 500%">🐐</span>';
  var selected_door;
  var opened_door;
  var prize_door;
  var goat_doors;
  var game_ended;
  initialize_game();
</script>


<script>
  function choose(tabCell,door_num){
    if (game_ended) {initialize_game(); return}; // If the game has ended re-initialize the game
    if (door_num==opened_door) return;
    if (selected_door != -1) document.getElementById('door'+selected_door).innerHTML =  door;
    if (selected_door != -1) document.getElementById('door'+selected_door).style.backgroundColor =  '#FFFFFF';
    selected_door = door_num;
    if (opened_door == -1){
      document.getElementById('door'+selected_door).innerHTML =  door;
      document.getElementById('door'+selected_door).style.backgroundColor =  '#CEE3F6';
      if (selected_door!=prize_door && goat_doors[0] == selected_door) opened_door = goat_doors[1];
      if (selected_door!=prize_door && goat_doors[1] == selected_door) opened_door = goat_doors[0];
      if (selected_door==prize_door) opened_door = goat_doors[Math.floor(getRandomReal(0,2))];
      document.getElementById('door'+opened_door).innerHTML =  goat;
      document.getElementById('door'+opened_door).style.cursor = 'not-allowed';
    } else {
      game_ended = true;
    document.getElementById('door0').style.cursor = 'pointer';
    document.getElementById('door1').style.cursor = 'pointer';
    document.getElementById('door2').style.cursor = 'pointer';
      if (selected_door==prize_door) {
        document.getElementById('door'+selected_door).innerHTML = car;
        document.getElementById('result').innerHTML = 'You won a car! 🚗';
        document.getElementById('result').style.visibility = 'visible';
        document.getElementById('results').innerHTML += '🚗';
      }
      if (selected_door!=prize_door) {
        document.getElementById('door'+selected_door).innerHTML = goat;
        document.getElementById('result').innerHTML = 'You won a goat! 🐐';
        document.getElementById('result').style.visibility = 'visible';
        document.getElementById('results').innerHTML += '🐐';
      }
      document.getElementById('door'+selected_door).style.backgroundColor =  '#CEE3F6';
    }
  }
</script>



<div class="exercise">
  <button  onclick="showSolution(this,'montyHall')" style="float:right;">Show Solution</button>
  After the host reveals the door, should you switch or not? Play the game at least 10 times with each strategy. Is the number of wins larger with the strategy you think is better?
  <div id="montyHall" style="display:none;" class="solution">
    Let $W$ be the event that you win the prize and $D_i$ the event that the prize is behind door $i$. If your strategy is not to switch, then $P(W)=1/3$. Now let's assume that your strategy is to switch. Suppose without loss of generality that you picked the first door. Then
    \begin{align*}
    P(W) & = P(W|D_1)P(D_1) + P(W|D_2)P(D_2) + P(W|D_3)P(D_3) \\
         & = \frac13 \left(P(W|D_1)+P(W|D_2)+ P(W|D_3)\right)\\
         & = \frac13 (0 + 1 + 1)\\
         & = \frac23.
    \end{align*}
    So it's best to switch. Deciding this problem based on one's intuition can be misleading. If you are surprised by the result, you are in good company, which <a href="https://www.wired.com/2014/11/monty-hall-erdos-limited-minds/">includes</a> one of the most prominent mathematicians of the 20th century, Paul Erdos.
  </div>
</div>
<br/>

## Conditional distributions

Conditional probability also naturally applies to random variables. As an example, consider a coin 	being flipped twice. Let $X$ be the number of heads in the first flip (so either 0 or 1) and $Y$ be the total number of heads. Let us find $$P(X=i\vert Y=j)$$ for $$i\in\{0,1\}$$ and $$j\in\{0,1,2\}$$. Let us repeat the joint distribution table [found above](#sumBin)

<table class="tabDefault" align="center" id="sumBin">
  <thead>
    <tr> <th>$P(X=i,Y=j)$</th> <th>$Y=0$</th> <th>$Y=1$</th> <th>$Y=2$</th> <th></th> <th style="background-color: #CFEFEF;">$P(X=i)$</th> </tr>
  </thead>
  <tbody>
    <tr> <th>$X=0$</th> <td>1/4</td> <td>1/4</td> <td>0</td> <td></td> <td style="background-color: #CFEFEF;">1/2</td> </tr>
    <tr> <th>$X=1$</th> <td>0</td> <td>1/4</td> <td>1/4</td> <td></td> <td style="background-color: #CFEFEF;">1/2</td> </tr>
    <tr><td colspan="100%"></td></tr>
    <tr> <td style="background-color: #EFCFEF;">$P(Y=j)$</td> <td style="background-color: #EFCFEF;">1/4</td> <td style="background-color: #EFCFEF;">1/2</td> <td style="background-color: #EFCFEF;">1/4</td> <td></td> <td></td> </tr>
  </tbody>
</table>

Then, 

<div>\begin{align*}
P\left(X=0|Y=0\right) & =\frac{P\left(X=0,Y=0\right)}{P\left(Y=0\right)}=\frac{1/4}{1/4}=1, & P\left(X=1|Y=0\right) & =1-P\left(X=0|Y=0\right)=0,\\
P\left(X=0|Y=1\right) & =\frac{P\left(X=0,Y=1\right)}{P\left(Y=1\right)}=\frac{1/4}{1/2}=\frac{1}{2}, & P\left(X=1|Y=1\right) & =1-P\left(X=0|Y=1\right)=\frac{1}{2},\\
P\left(X=0|Y=2\right) & =\frac{P\left(X=0,Y=2\right)}{P\left(Y=2\right)}=\frac{0}{1/4}=0, & P\left(X=1|Y=2\right) & =1-P\left(X=0|Y=2\right)=0.
\end{align*}</div>

The function $P(X=i\vert B)$ for an event $B$ and all possible values of $i$, is called the _conditional distribution_ of $X$ given $B$.

<div class="exercise">
	<button  onclick="showSolution(this,'condDist')" style="float:right;">Show Solution</button>
	Let $X_1$ and $X_2$ be defined as in <a href="#Feller" onclick="window.open('#Feller', 'newwindow', 'width=1200'); return false;">this exercise</a>. Find the distribution $P(X_2=i|X_1=1).$
	<div id="condDist" style="display:none;" class="solution">
		$$P(X_2=i|X_1=1) = \frac {P(X_2=i,X_1=1)}{P(X_1=1)}=\frac {P(X_2=i,X_1=1)}{12/27}.$$
		$$P(X_2=0|X_1=1) = 3/12,\quad P(X_2=1|X_1=1) = 6/12,\quad P(X_2=2|X_1=1) = 3/12,\quad P(X_2=3|X_1=1) = 0.$$
	</div>
</div>
<br/>
<div class="exercise">
	A die is rolled twice, showing first $X$ and then $Y$. Let $Z=X+Y$. What is $P(Z=4)$. Find the conditional distribution of $X$ given $Z=4$. That is, find $P(X=i|Z=4)$ for all possible values of $i$.
</div>
<br/>
<div class="hw">
A die is rolled and $X$ is shown. A coin is flipped $X$ times. The number of heads is denoted by $Y$. What is the conditional distribution of $Y$ given $X=3$, i.e., $P(Y=j|X=3)$?
</div>
