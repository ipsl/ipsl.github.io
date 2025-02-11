### Counting

Enough theory. Now, we are going to learn how to count…

Why are we interested in counting?
In the symmetric case, when all outcomes are equally likely,
𝑃(𝐴)=|𝐴|/(|Ω|)
where |𝐸| is the number of elements in 𝐸.
We will be counting outcomes in events.
How many cards are “hearts” in a standard deck?
How many ways can we roll a pair of dice to add up to 7?
How many possible three-person teams are there among students in this classroom?


### Examples

If a two-digit number is chosen at random, what is the probability that it is divisible by 4?



If three cards are drawn at random from a deck, what is the probability that there are at least two cards of the same suit?



### Drawing with replacement

Let’s draw from a deck of cards.
How many possibilities are there for the first card drawn?
Now, let’s replace it, reshuffle, and draw another. How many possibilities now?
How many possible pairs of cards could I have drawn?

We call this drawing with replacement.

For N things, draw K items with replacement: # of possibilities = NK


### Counting permutations

Usually, when we draw from a deck of cards, we don’t bother to replace and reshuffle before we draw another.
Let’s assume order still matters. So (A♥,K♠) is different from (K♠, A♥)
We draw two cards. What changes with this count?
First card:
Second card:
How many ordered pairs?

We call this ordered draw without replacement a permutation of cards.
For N things, choose K items in order: # of permutations = 𝑁(𝑁−1)…(𝑁−𝐾+1)=𝑁! / (𝑁−𝐾)!, where 𝑛! is the factorial operator:
𝑛!=1×2×3×…×𝑛


### Permutations

We randomly shuffle five cards
What is the probability that they are in order
What is the number of possible outcomes?
5 possibilities for first card, 4 possibilities for second card, …, 1 possibility for fifth card
5×4×3×2×1=5!=120
P(each outcome) = 1/120
P(sorted) = 1/120
N!= the number of ways N objects can be arranged (from N things, choose N in order)
What is the probability that a deck of 52 cards is in order after a random shuffle?
1/52!= 1.24×10^(−68)


### Aside: how large is 52! ?

"52! = 80658175170943878571660636856403766975289505440883277824000000000000"=8.066×10^67
If everyone who has ever lived shuffled a deck once every second since the beginning of time, the probability that there are no decks with the same order is…

≤(10^11×"4.32 " ×"1017" )^2/(8.066×10^67)=2.31×10^(−11)

How many bits do we need to represent to represent the order of a deck of cards?
Method 1: 6 𝑏𝑖𝑡𝑠/𝑐𝑎𝑟𝑑×52 𝑐𝑎𝑟𝑑𝑠=312 𝑏𝑖𝑡𝑠
Method 2: Give the lexicographic order of the permutation representing the deck: log_2⁡52!=225.58 b


### Permutations

Suppose this time we pick three cards
What is the probability that we pick JQK, in that order?
What is the number of possible outcomes?
5 possibilities for first card, 4 possibilities for second card, 3 possibilities for third card
5!/((5−3)!)=5×4×3=60
P(each outcome) = 1/60
P(JQK) = 1/60
𝑛!/((𝑛−𝑘)!)=(_𝑛^)𝑃_𝑘 = the number of ways 𝑘 objects can be arranged from a 𝑛 objects
What is the probability that five cards drawn from deck of 52 are A,2,3,4,5 of hearts in that order?
1/(52!/47!)="3.2"×10^(−9) " "


### Counting combinations

Now suppose that order doesn’t matter anymore, so {A♥,K♠} is the same as {K♠, A♥}
What changes with this count?
First card:
Second card:
How many pairs?

We call this draw without replacement a combination of cards.

For N things, choose K items: # of combinations = N! / (K! (N-K)!), also shown as
(𝑁¦𝐾)


### Combinations: explained

Suppose we pick three cards
What is the probability that we pick Jack, Queen and King (order is not important)?
What is the number of possible outcomes?
5 possibilities for first card, 4 possibilities for second card, 3 possibilities for third card
5×4×3=5!/2!=60
But since order is not important, we are over-counting:
eg., 10QA = 10AQ = Q10A= QA10 = AQ10 = A10Q
each case is counted 3! times
total number of outcomes = 5!/(2!×3!)=10
P({J,Q,K}) = 1/10
𝑛!/(𝑛−𝑘)!𝑘!=(█(𝑛@𝑘))=(_𝑛^)𝐶_𝑘 = the number of ways 𝑘 objects can be chosen from a 𝑛 objects
The probability that five cards drawn from deck of 52 are A,2,3,4,5 of hearts?
1/(52!/(47!×5!))="3." 8×10^(−7) " "


### Combinations

If we pick three out of these five cards, what is the probability that queen is one of them?
 (5¦3)=10 possible cases
If queen is one of the cards, we only need to choose 2 out of 4 cards
(4¦2)=6
P(Queen) = 6/10

Relation to binary sequences:
We can list all possibilities; 1 denotes a given card is chosen
10 possible outcomes, probability of each is 1/10
In 6, a queen is chosen
P(Queen) = 6/10 



### Your turn

How many 4-bit unsigned numbers are there?

How many (unordered) pairs of unsigned 4-bit numbers are there? 
The numbers must be different
The numbers can be the same


How many ordered pairs of unsigned 4-bit numbers are there?

How many unsigned 4-bit numbers are there with 2 ones?



### Your turn

If three cards are drawn at random from a deck, what is the probability that there are at least two cards of the same suit?



### A note about duplication

Consider the word “remove”.
How many different letters are there?
Suppose we pick a letter. How many possible different letters?

How many different unordered pairs of letters?

How many different ordered pairs of letters? Note: (e,e) is the same as (e,e)

What changed?


### Gumball machine

Suppose a gumball machine contains red, green, pink, blue, purple, and yellow (many of each color). Each gumball costs 25 cents.
Suppose we spend a dollar. How many different combinations of gumballs are there?



How many combinations are there where at least a pair of them are the same color?


### Counting

k items out of n
Order matters
Order doesn’t matter
With replacement
n^k
((n-1+k)¦k)
With no replacement
n!/(n-k)!=(n¦k)k!
(n¦k)


### Probabilities and counting

Why are we counting again?

If an event 𝐴 consists of outcomes all with the same probability 𝑝, then
𝑃(𝐴)=|𝐴|×𝑝
In the symmetric case, when all outcomes are equally likely,
𝑃(𝐴)=|𝐴|/(|Ω|)
Example: We draw a hand of five cards from a standard deck. What is the probability of drawing a flush (all five cards are the same suit)?


### Probabilities and counting

Your turn: compute the probabilities for each of the following events.
We flip a fair coin (P(heads) = P(tails) = ½) 3 times. How likely is the same outcome to occur 3 times in a row?


We roll a pair of fair six-sided dice (1-6 each). What is the probability of rolling an even sum?


Suppose there are 30 students in this classroom (including you). What is the probability that at least one other student shares the same birthday with you? (assume 366 days equally likely)


### Bernoulli trials

A series of repeated, identical trials with two possible outcomes that do not influence each other in any way are called Bernoulli trials. The probability of observing a particular combination of outcomes is given by the Binomial formula:


Here, P(n) is the probability of observing n occurrences, where each occurrence has a probability of p, out of N total trials. The binomial coefficient (𝑁¦𝑛) is equal to the number of combinations of choosing n items from N things (without replacement, ordering, or duplicates).


### Pascal’s triangle

Pascal’s triangle describes the number of combinations, where the row # (zero-indexed) is the total # of items, and the column # (zero-indexed) is the # of items chosen.

What is (3¦1)?

Several properties of combinations are evident from the triangle:
1) (𝑁¦0)=1				2) (𝑁¦1)=𝑁
3) (𝑁¦𝑛)=(𝑁¦(𝑁−𝑛))				4) ((𝑁+1)¦𝑛)=(𝑁¦(𝑛−1))+(𝑁¦𝑛)


### Divide and conquer

We flip a fair coin (P(heads) = P(tails) = ½) 10 times. How likely is the same outcome to occur 5 times in a row?