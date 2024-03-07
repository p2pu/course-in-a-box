---
title: Hands-on exercises

---

## Basic tutorial on nextflow

For this exercise, we will follow the tutorial on
<https://training.nextflow.io/basic_training/setup/> and use
[Gitpod](https://www.gitpod.io/) - an open-source Kubernetes application for
ready-to-code cloud development environments that spins up fresh, automated dev
environments for each task, in the cloud, in seconds. It enables you to describe
your dev environment as code and start instant, remote and cloud development
environments directly from your browser or your Desktop IDE.


## Hands-on Exercise 2
For this exercise, we will create a nextflow workflow that has two processes: 
**fetching sequence data** and **preprocessing** the data using
[fastp](https://github.com/OpenGene/fastp)

### Instructions

1. Create a directory in your Gitpod workspace and name it `nextflow-exercise`
2. Copy the file `file_list1.csv` from the remote host shell.sanbi.ac.za to your
   newly created directory
	**Hint**: explore the usage of `rsync` or `scp` commands for file transfer
	between servers/hosts
3. Implement the bash script from 
[lesson 1](https://pathogen-genomics-march-2024.sanbi.ac.za/modules/unix-linux-introduction/task-two/) in a process to download the sequence data
	**Hint**: <https://www.nextflow.io/docs/latest/process.html#shell>
4. Write a process that will utilize the bioinformatics tool `fastp` for
   preprocessing the sequence data.
           **Options**: You can create a channel that reads the sequence data
           you have downloaded or use operators to transform the output channel
           from the first process (downloading the data)

    - Execute the workflow with conda  with installation of `fastp`
    - **Bonus**: Use `directives` to enable the execution of the workflow with
      `docker`
    

# Solution

1. Create the directory `nextflow-exercise` and change into the directory

```
mkdir nextflow-exercise
cd nextflow-exercise
```

2. Fetch the metadata file using the command

```
wget -c https://pathogen-genomics-march-2024.sanbi.ac.za/data/shell/file_list1.csv
```

3. Create a `nextflow` script and name it `exercise2.nf`

```
#!/usr/bin/env nextflow

nextflow.enable.dsl=2

params.input = 'file_list1.csv'
params.outdir = "./outdir"
input_ch = Channel.fromPath(params.input, checkIfExists: true)



process DOWNLOAD_FILES_BASH {

    tag "$csv_file"
    publishDir "${params.outdir}/data", mode: 'copy'

    input:
    path csv_file

    output:
    path "*.fastq.gz" // , emit: reads

    shell:
    '''
    #!/bin/bash

    set -u
    set -e

    LISTFILE=!{csv_file}
    if [[ ! -f $LISTFILE ]] ; then
            echo "Incorrect filename, $LISTFILE not found" >&2
            exit 1
    fi

    if [[ ! -d tracking ]] ; then
            mkdir tracking
    fi

    for URL in $(cut -d, -f2 $LISTFILE); do
            # links look like
            # https://pathogen-genomics-march-2024.sanbi.ac.za/data/shell/reads/SRR8364252_1.fastq.gz
            OUTPUT=${URL##*/}
            if [[ ! -f tracking/$OUTPUT ]] ; then
                    wget -c -O $OUTPUT $URL
                    # curl -L -O $OUTPUT $URL
                    touch tracking/$OUTPUT
            fi
    done
    '''
}

process FASTP_RUN {

    tag "$sample_id"
    cpus 4
    conda 'bioconda::fastp=0.22.0'
    container 'quay.io/biocontainers/fastp:0.22.0--h2e03b76_0'
    publishDir "${params.outdir}/fastp", mode: 'copy'

    input:
    tuple val(sample_id), path(reads)

    output:
    tuple val(sample_id), path('*.trim.fastq.gz') //, emit: reads
    tuple val(sample_id), path('*.json') //,          emit: json
    tuple val(sample_id), path('*.html') //,          emit: html
    tuple val(sample_id), path('*.log') //,           emit: log

    script:
    def prefix = sample_id

    """
    fastp \\
        --in1 ${reads[0]} \\
        --in2 ${reads[1]} \\
        --out1 ${prefix}_1.trim.fastq.gz \\
        --out2 ${prefix}_2.trim.fastq.gz \\
        --json ${prefix}.fastp.json \\
        --html ${prefix}.fastp.html \\
        --thread $task.cpus \\
        --detect_adapter_for_pe \\
        2> ${prefix}.fastp.log

    """


}

workflow {

    // execute the first process
    files_ch = DOWNLOAD_FILES_BASH(input_ch)

    // Channel of reads files from the output data directory
    ch_raw_reads = Channel
        .fromFilePairs("${params.outdir}/data/*_{1,2}.fastq.gz")
    
    // Create channel from the output channel of the first process
    // ch_read_pairs = files_ch
    //             .flatten()
    //             .map { filename -> 
    //                 def key = filename.baseName.toString().tokenize("_").get(0)
    //                 [ key,  filename  ]
    //                 }.groupTuple()
    // ch_read_pairs.view()


    // execute the second process
    ch_fastp = FASTP_RUN(ch_raw_reads)
    
}
```

4. Create a `nextflow.config` configuration file with the contents:

```
process {
    withName:FASTP_RUN {
        container = 'quay.io/biocontainers/fastp:0.22.0--h2e03b76_0'
    }
}

profiles {
    conda {
        conda.enabled = true
    }
    docker {
        docker.enabled = true
    }
}
```


5. Execute the nextflow script with `conda` as:

```
nextflow run exercise2.nf --input file_list1.csv -profile conda
```

6. Execute the nextflow script with `docker` as:
```
nextflow run exercise2.nf --input file_list1.csv -profile docker
```






## Simple RNA-seq workflow
<https://training.nextflow.io/basic_training/rnaseq_pipeline/>
