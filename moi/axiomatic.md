---
layout: course-moi 
usemathjax: true
# useJSXGraph: true
---
# Axiomatic Systems 

We will first discuss briefly two different ways to develop and learn mathematics. 

The informal approach relies _heavily_ on our intuition and explains concepts via demonstration and example rather than precisely defining them. For example, in arithmetic it does not _define_ addition or multiplication. This is sufficient for many purposes but it has its drawbacks. Our intuition may lead us astray. Additionally, it will make learning about more abstract or advanced topics, with which we are not intuitively familiar such as complex numbers, more difficult since we are not used to abstract thinking and rigorous derivation. 

On the other hand, the _axiomatic approach_ is more principled and systematic. It produces new results, such as theorems, using existing objects and facts. We will review the components of an axiomatic system, with examples from geometry, which is incidentally one of the topics that we will not discuss in the course. 

**The components of an axiomatic system**:
1. Undefined terms: Even in the axiomatic approach, we cannot define everything in terms of existing objects. So there are undefined terms. Our understanding of these relies on our intuition and their relationships to each other as expressed by the axioms. (So our intuition still plays a role, albeit a diminished one.) Examples from geometry include points, lines, and planes.
2. Axioms: These are statements assumed to be true. For example: "There is only one line that passes through two distinct points."
3. Definitions: These create new objects using existing ones. For example: "A circle is the set of points on the plane that are at the same distance from a point, called its center."
4. Theorems: These are statements that can be proven. In other words, they can be derived from previous statements. For example: "The sum of the interior angles of a triangle is 180 degrees."

**Proofs**: Theorems can generally be written in the form: "If statement $$p$$ is true, then statement $$q$$ is true," summarized as "$$p\Rightarrow q$$." There are several ways of proving such a theorem. 
* First, we can have a *direct* proof. We start by assuming $$p$$ is true, as well as the axioms and previous theorems, and then using these, prove one or more intermediate results and then prove $$q$$ to be true.
* In *proof by contraposition*, we prove "If $$p$$ is true then $$q$$ is true" by proving "If $$q$$ is false, then $$p$$ is false." These two are equivalent. For example, the statements "If it is raining then the ground is wet" is equivalent to "If the ground is not wet, then it is not raining."
* In *proof by contradiction*, we assume the opposite of what the theorem says is true and show that this leads to a result that cannot possibly be true. For example, the opposite (negation) of "If $$p$$ is true, then $$q$$ is true" is "$$p$$ is true but $$q$$ is false. So we take  $$p$$ as true and $$q$$ as false and show that this is not possible since it leads to an obviously false statement.
