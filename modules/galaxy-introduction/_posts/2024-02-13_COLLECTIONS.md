---
title: COLLECTIONS 
---
## Making Collections in Galaxy

<br>

When doing Bioinformatics analyses, it’s a more common practice to process multiple samples at once. This often also requires the grouping of these samples. 
- For example, paired short reads, such as Illumina reads, are usually grouped. However, grouping may extend to any specific way in which one wishes to classify ones data. 


- Similarly, we may want to compare a set of drug resistant strains to drug sensitive strains. Similarly, we may want to compare a dataset containing samples from Namibia to those of Cape Verde, etc. We would call each of these grouping of samples, a **dataset.** 


Galaxy allows us to do this in one step. That is, we can make sure a **forward** and **reverse read** belonging to the same sample is paired.
<br>
We can then group these paired reads into a dataset or **collection** of paired reads, so that we can run analyses on all of our samples at once, rather than doing them one by one.

<br>
<br>

:hammer_and_wrench: **Let’s see this in action.**
<br>
<br>

> [!NOTE]
>The samples for this lesson can be found at https://zenodo.org/records/10760705
<br>
<br>

> You have **two** options.
>   1. You may click on this url to download the zip file with all the files, and then upload the files to Galaxy from your local machine.
>   2. Or you may paste the links below, which correspond to the individual samples, into Galaxy.

> :exclamation: However, you will need to change the file names **individually** in Galaxy, if you use the second method.
<br>
<br>

```
https://zenodo.org/records/10760705/files/SRR24446250_1.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446250_2.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446252_1.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446252_2.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446254_1.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446254_2.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446261_1.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446261_2.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446273_1.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446273_2.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446275_1.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446275_2.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446288_1.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446288_2.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446302_1.fastq.gz?download=1
https://zenodo.org/records/10760705/files/SRR24446302_2.fastq.gz?download=1
```

<br>
<br>

**1.** **Import** the selection of cholera samples


**2.** Rename your History to **Cholera paired collection**
<br>
![checked_samples_Galaxy](/img/1_checked_samples_Galaxy.png)
<br>
<br>

**3.** Just above your imported samples, you will see a small blue box with a checked sign :ballot_box_with_check:.
<br>
Uncheck that box. This will allow you to individually select each sample.
<br>
![UNchecked_samples_Galaxy](/img/2_UNchecked_samples_Galaxy.png)
<br>
<br>
<br>
**4.** Click on the **Select All** button on the right.
<br>
<br>
**5.** Click the drop-down arrow in the box that says **All 10 selected**
<br>
<br>
**6.** Choose the option that says **Build List of Dataset Pairs**
<br>
![Build_List_Dataset_Pairs](/img/3_Build_List_Dataset_Pairs_Galaxy.png)
<br>
<br>
<br>
This new box gives you the ability to pair your samples, by looking for any common pattern in one group, that distinguished them from another group. For example, what pattern do you see in the file name of the forward reads, that is not in the reverse reads.
<br>
<br>
In our case, the algorithm predicted that the _forward reads_ will all have a **_1** in their name and the _reverse reads_ all have an **_2**. So, it already paired our forward and reverse reads for us based on this pattern.
<br>
<br>
But we can look at the view we would get if the samples were named differently, and the algorithm may not have gotten it right. For example, forward and reverse reads are sometimes labelled with R1 and R2 to distinguish read pairs.
<br>
<br>
<br>
**7.** So let’s click on **Unpair all**, which is just above the green coloured samples 
![Unpair_all](/img/4_Unpair_all_Galaxy.png)
<br>
<br>
<br>
<br>
Your box should now look like this (BELOW).
<br>

- Thus, if your samples were named differently, and Galaxy couldn’t successfully pair it, the samples will all appear on top (in the white space above) and you would have to figure out a pattern in your sample names to allow the correct classification. E.g. **R1** in the box on the top left and **R2** in the box on the top right. In the worse case scenario, you may need to rename all of your samples to enforce a common pattern.

![Pair_forward_reverse_reads](/img/5_Pair_forward_reverse_reads_Galaxy.png)
<br>
<br>
**8.** You can manually pair the set of reads by clicking the white button in the middle that says **Pair these datasets**, and it will move them all to the bottom as they were before.
<br>
<br>

**9.** **BEFORE** clicking on Create Collection at the bottom, give your dataset a name. For example “Cholera paired reads”, and click on “Create Collection”
![Create_collection](/img/6_Create_collection_Galaxy.png)
<br>
<br>
<br>
**10.** You now have all your samples grouped. You can deselect the collection by unchecking the box, you originally selected at number 3.
<br>
![Uncheck_box](/img/7_Uncheck_box_Galaxy.png)
<br>
<br>

Below is a tutorial called [Using dataset collections](https://training.galaxyproject.org/training-material/topics/galaxy-interface/tutorials/collections/tutorial.html) that you can follow if you ever need to revisit this topic
