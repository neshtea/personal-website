---
title: Bidirectional Data Transformations accepted to FUNARCH 2024 (ICFP)
pubDate: 2024-08-16
description: Our paper "Bidirectional Data Transformations" was accepted for The Second ACM SIGPLAN Workshop on Functional Programming - FP in the Large.
---

<p class="mb-2">
Our paper <a href="https://icfp24.sigplan.org/details/funarch-2024-papers/6/Bidirectional-Data-Transformations?ref=defmarco.com" class="text-accent hover:underline">"Bidirectional Data Transformations"</a> was accepted for <a href="https://icfp24.sigplan.org/home/funarch-2024?ref=defmarco.com#the-second-acm-sigplan-workshop-on-functional-software-architecture-fp-in-the-large" class="text-accent hover:underline">The Second
ACM SIGPLAN Workshop on Functional Software Architecture - FP in the Large</a>.
This is the first paper coauthored by Marcus Crestani, Markus Schlegel and I
(all from <a href="https://active-group.de" class="text-accent hover:underline">Active Group GmbH</a>) and given the time constraints I’m quite happy how
I turned out. We're super happy – contributing to an ICPF-related event in
some small capacity is something I never thought I would be able to do.
</p>

<p class="mb-2">
Markus is going to present the paper at FUNARCH 2024 in Milan on our behalf.
If you're there, come and say hi 👋 
</p>

<p class="mb-2"><b>Thanks a lot to Perdita Stevens for mentoring!</b> From our abstract:</p>

<blockquote class="italic mt-2">
"Data structures are the foundation of software. Different components of a system may need the same information but may have different demands on its structure for reasons of performance, resource efficiency, technical constraints, convenience, and so on. For instance, transmitting data over a network requires a format that is suitable for serialization, while persisting data requires a format that is more suitable for storage. Thus, programmers need to translate data between several data structures and formats all the time. Authoring these translations manually is a lot of work because programmers need to implement the logic twice, once for each direction. This is redundant, tedious, and error-prone, and a case of low coherence. We show how using bidirectional data transformations that use functional optics like lenses and projections simplify the conversions. These ideas and techniques make converting data simple and straightforward and foster understanding of the relationship between data structures by explicitly describing their connections in a composable manner."
</blockquote>
