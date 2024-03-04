#!/bin/bash

url=https://pathogen-genomics-march-2024.sanbi.ac.za/data/shell/reads

for file in $(ls reads/) ; do
    sample=${file%*_[12].fastq.gz}
    echo $sample,${url}/${sample}_1.fastq.gz\;${url}/${sample}_2.fastq.gz
done