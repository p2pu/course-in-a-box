---
title: Channels and Operators
---

## Channels and Operators

Channels are **asynchronous**, which means that outputs from a set of processes
will not necessarily be produced in the same order as the corresponding inputs
went in. However, the first element into a channel queue is the first out of the
queue **(First in - First out)**. This allows processes to run as soon as they
receive input from a channel. Channels only send data in one direction, from a
producer (a process/operator), to a consumer (another process/operator).

<br>

<center><img src="/img/nextflow-Figure7.png" alt="Figure 2. " width="75%"/></center>

<br>

## Channels types

Nextflow distinguishes between two different kinds of channels: **queue** and
**value** channels.

### 1. Queue channel
Queue channels are a type of channel in which data is consumed (used up) to make
input for a process/operator. Queue channels can be created in two ways:

- As the outputs of a process.
- Explicitly using channel factory methods such as Channel.of or Channel.fromPath.

### 2. Value channels
The second type of Nextflow channel is a value channel. A value channel is bound
to a single value (singleton). A value channel can be used an unlimited number
times since its content is not consumed. This is also useful for processes that
need to reuse input from a channel, for example, a reference genome sequence
file that is required by multiple steps within a process, or by more than one
process.

In Nextflow **DSL1** queue channels can only be used **once** in a workflow,
either connecting workflow input to process input, or process output to input
for another process. In **DSL2** we can use a queue channel **multiple times**.


## Queue channel factory

Queue (consumable) channels can be created using the following channel factory methods.

- `Channel.of`
- `Channel.fromList`
- `Channel.fromPath`
- `Channel.fromFilePairs`
- `Channel.fromSRA`



<br>
<h3 style="text-align: center;" markdown="1">`ch1 = Channel.value('GRCh38')`</h3>
<center><img src="/img/nextflow-Figure8.png" alt="Figure 8. " width="40%"/></center>

<br>


<br>
<h3 style="text-align: center;" markdown="1">`ch2 = Channel.value(['chr1','chr2','chr3','chr4','chr5'])
`</h3>
<center><img src="/img/nextflow-Figure9.png" alt="Figure 9. " width="40%"/></center>

<br>

<br>
<h3 style="text-align: center;" markdown="1">`chromosome_ch = Channel.of( 'chr1','chr3','chr5','chr7')`</h3>
<center><img src="/img/nextflow-Figure10.png" alt="Figure 10. " width="65%"/></center>

<br>

<br>
<h3 style="text-align: center;" markdown="1">`ch1.mix(ch2).collect()`</h3>
<center><img src="/img/nextflow-Figure11-2.png" alt="Figure 11. " width="75%"/></center>

<br>


<br>
<h3 style="text-align: center;" markdown="1">`Channel.fromPath(“/data/yeast/reads/*”)`</h3>
<center><img src="/img/nextflow-Figure12.png" alt="Figure 12. " width="75%"/></center>

<br>


<br>
<h3 style="text-align: center;" markdown="1">`Channel.fromPath(“/data/yeast/reads/*_{1,2}.fq”)`</h3>
<center><img src="/img/nextflow-Figure13.1.png" alt="Figure 13.1. " width="75%"/></center>

<br>


<br>
<h3 style="text-align: center;" markdown="1">`Channel.fromFilePairs(“/data/yeast/reads/*_{1,2}.fq”,size:2)`</h3>
<center><img src="/img/nextflow-Figure13.2.png" alt="Figure 13.2. " width="75%"/></center>

<br>


### Filtering

<br>

<center><img src="/img/nextflow-Figure14.1.png" alt="Figure 14.1. " width="75%"/></center>
<h3 style="text-align: center;" markdown="1">`filter(Number)`</h3>
<center><img src="/img/nextflow-Figure14.2.png" alt="Figure 14.2. " width="40%"/></center>

<br>


### Transforming

<br>

<center><img src="/img/nextflow-Figure15.1.png" alt="Figure 15.1. " width="75%"/></center>
<h3 style="text-align: center;" markdown="1">`map({it.replaceAll(“chr”,””)})`</h3>
<center><img src="/img/nextflow-Figure15.2.png" alt="Figure 15.2. " width="75%"/></center>

<br>

<br>

<center><img src="/img/nextflow-Figure16.1.png" alt="Figure 16.1. " width="75%"/></center>
<h3 style="text-align: center;" markdown="1">`flatten()`</h3>
<center><img src="/img/nextflow-Figure16.2.png" alt="Figure 16.2. " width="75%"/></center>

<br>

<br>

<center><img src="/img/nextflow-Figure17.1.png" alt="Figure 17.1. " width="75%"/></center>
<h3 style="text-align: center;" markdown="1">`collect()`</h3>
<center><img src="/img/nextflow-Figure17.2.png" alt="Figure 17.2. " width="75%"/></center>

<br>


<br>
<center><img src="/img/nextflow-Figure18.1.png" alt="Figure 18.1. " width="75%"/></center>
<h3 style="text-align: center;" markdown="1">`collect()`</h3>
<center><img src="/img/nextflow-Figure18.2.png" alt="Figure 18.2. " width="20%"/></center>

<br>


### Milestones

<br>
<center><img src="/img/nextflow-Figure19.png" alt="Figure 19. " width="75%"/></center>
<h3 style="text-align: center;" markdown="1">Nextflow milestones</h3>
<br>