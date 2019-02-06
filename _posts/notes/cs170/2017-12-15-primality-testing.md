---
layout: post
title: Primality Testing
category: notes
tags: cs170
---

#### Fermat's Little Theorem
Given a prime number, *p*, for any integer *a*:

a<sup>p</sup> = a (mod p)
{: .note}
a<sup>p-1</sup> = 1 (mod p)
{: .note}

#### Miller-Rabin primality test
Given a number *p*, *p* is prime if and only if either:

a<sup>d</sup> = 1 (mod p)
{: .note}

a<sup>2<sup>r</sup>*d</sup> = -1 (mod p)
{: .note}

is true for any *a*.