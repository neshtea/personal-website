---
title: Bidirectional Data Transformations accepted to FUNARCH 2024 (ICFP)
pubDate: 2024-08-16
description: Unser Paper "Bidirectional Data Transformations" wurde beim The Second ACM SIGPLAN Workshop on Functional Programming - FP in the Large angenommen.
---

<p class="mb-2">
Unser Paper <a href="https://icfp24.sigplan.org/details/funarch-2024-papers/6/Bidirectional-Data-Transformations?ref=defmarco.com" class="text-accent hover:underline">"Bidirectional Data Transformations"</a> wurde beim <a href="https://icfp24.sigplan.org/home/funarch-2024?ref=defmarco.com#the-second-acm-sigplan-workshop-on-functional-software-architecture-fp-in-the-large" class="text-accent hover:underline">The Second
ACM SIGPLAN Workshop on Functional Software Architecture - FP in the Large</a> angenommen. Es handelt sich um das erste Paper das ich gemeinsam mit meinen Koautoren Marcus Crestani, Markus Schlegel (alle von der <a href="https://active-group.de" class="text-accent hover:underline">Active Group GmbH</a>) verfasst habe. Gegeben der kurzen Zeit, die uns zur Verfügung stand, bin ich mit dem Ergebnis zufrieden.
Wir sind super glücklich – einen Beitrag zur einem ICFP-Event beizusteuern hätte ich mir nie denken lassen.
</p>

<p class="mb-2">
Markus wird uns auf der FUNARCH 2024 in Mailand vertreten. Wenn du da bist, komm vorbei uns sag Hallo 👋 
</p>

<p class="mb-2"><b>Vielen Dank an unsere Mentorin Perdita Stevens!</b> Aus dem Abstract:</p>

<blockquote class="italic mt-2">
"Data structures are the foundation of software. Different components of a system may need the same information but may have different demands on its structure for reasons of performance, resource efficiency, technical constraints, convenience, and so on. For instance, transmitting data over a network requires a format that is suitable for serialization, while persisting data requires a format that is more suitable for storage. Thus, programmers need to translate data between several data structures and formats all the time. Authoring these translations manually is a lot of work because programmers need to implement the logic twice, once for each direction. This is redundant, tedious, and error-prone, and a case of low coherence. We show how using bidirectional data transformations that use functional optics like lenses and projections simplify the conversions. These ideas and techniques make converting data simple and straightforward and foster understanding of the relationship between data structures by explicitly describing their connections in a composable manner."
</blockquote>
