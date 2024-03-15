---
title: Introduction to Bactopia
---

### Introduction to Bactopia

[Bactopia](https://bactopia.github.io/latest/) is a flexible, Nextflow based, set of workflows for
analysis of bacterial genomes. The default workflow is based on de-novo assembly but workflows
for reference based assembly with snippy and several other auxiliary tools and workflows are
also provided.

Bactopia can be installed with conda from the [Bioconda](https://bioconda.github.io/) channels
by running:

```bash
conda create -n bactopia bactopia
```

This installs the `bactopia` tool and supporting scripts. Remember to always make sure that your
conda environment is correctly configured including with the bioconda channels before running
this command.

Bactopia stores some additional data used by the tool in the bactopia directory, which
by default is `$HOME/.bactopia`. These include datasets used for species identification
and AMR prediction which can be downloaded using the `bactopia datasets` command.

For running tools, `bactopia` supports conda as well as both the Docker and Singularity
container systems. This support is provided by the Nextflow workflow engine.

### Preparing your reads for analysis

The `bactopia prepare` command scans a directory of FASTQs and prepares a sample sheet
for use by `bactopia`. For example:

```bash
bactopia prepare --path reads/ >sample-sheet.tsv
```

This command looks for files ending in `.fastq.gz` and with paired end identifiers like `_1`
or `_R1`. These patterns can be configured e.g. using the `--fastq-ext`, `--pe1-pattern`
and `--pe2-pattern` options. See `bactopia prepare --help` for more details.

### Configuring how workflows are run

Since Bactopia provides multiple workflow, it is useful to have a common setup to
configure the `bactopia` runs. A `bactopia_common.sh` script can look like:

```
#!/bin/bash

if [[ -z $(which bactopia) ]] ; then
    echo "Please ensure that bactopia is in your PATH" >&2
    exit 1
fi

NXF_SINGULARITY_CACHEDIR=${NXF_SINGULARITY_CACHEDIR:-$HOME/singularity_cache}
export NXF_SINGULARITY_CACHEDIR

if [[ ! -d $NXF_SINGULARITY_CACHEDIR ]] ; then
    mkdir $NXF_SINGULARITY_CACHEDIR
fi

MAX_MEM=8
MAX_CPUS=2
MAX_RETRY=1

# Singularity
PROFILE="-profile singularity"
#Docker
#PROFILE="-profile docker"
#Conda
#PROFILE=""

BACTOPIA="bactopia --max_memory $MAX_MEM --max_cpus $MAX_CPUS --max_retry $MAX_RETRY $PROFILE -resume -ansi-log false" 
```

This `bactopia_common.sh` script should be in the same directory from which you run bactopia. It does a few things:

1. Check that bactopia is actually in the path (i.e. you have run `conda activate bactopia` or similar).

2. Set up a directory (referred to by the environment variable `NXF_SINGULARITY_CACHEDIR`) where Singularity container images are stored (cached). If the user has already
set the `NXF_SINGULARITY_CACHEDIR` variable, this is used, otherwith `$HOME/singularity_cache` is used by default.

3. Set the maximum memory and maximum CPUs that a task run by `bactopia` can take. This is done to both ensure that the resources
of the computer running the workflow aren't exausted and also to make efficient use of resources so that more tasks can be run in
parallel.

4. Set the maximum number of times that `bactopia` will retry running a task. This is set to the conservative value of `1` because
if tasks fail to run they often won't run successfully on retries.

5. Configure three different profiles, for running with Singularity containers, Docker containers or with conda. Uncomment the
`PROFILE` line that corresponds to the system that you want to use to manage your software dependencies.

You can download this file using:

```
wget https://gist.githubusercontent.com/pvanheus/c30fe84e8c6671a44f7d25f800840ca6/raw/1d5e8a4bb3d2c8061e38358017f5ee0596d47a9b/bactopia_common.sh
```

or

```
curl -O https://gist.githubusercontent.com/pvanheus/c30fe84e8c6671a44f7d25f800840ca6/raw/1d5e8a4bb3d2c8061e38358017f5ee0596d47a9b/bactopia_common.sh
```

### Running a Bactopia workflow

For the purposes of our workflow we'll focus on using Nextflow for reference based construction of a bacterial genome consensus using the Bactopia
`snippy` workflow. To prepare for using this workflow we need to do quality control on our reads, which we can do using the `cleanyerreads`
workflow.

With the `sample-sheet.tsv` prepared using `bactopia prepare` and our `bactopia_common.sh` in place, we can run the workflow with this simple
script:

```bash
#!/bin/bash

set -e
set -u

. bactopia_common.sh

$BACTOPIA --wf cleanyerreads --samples sample-sheet.tsv --outdir cleaned_reads
```

This script can be downloaded (using `wget` or `curl`) here: <https://gist.githubusercontent.com/pvanheus/ac575a1c1adab47c9b44e60eb355650b/raw/5b3649b3db5387de2b2453a7237581d671fd1b2b/run_bactopia_cleanyerreads.sh>

This runs the [cleanyerreads](https://github.com/bactopia/bactopia/blob/master/workflows/clean-yer-reads.nf) quality control workflow that,
for Illumina data, using `fastp` by default to trim adapters and remove low quality bases. The output of the workflow is placed in the
`cleaned_reads` directory. This output includes:

1. a directory for each input sample (e.g. SRR8364253). Within these directories there is a `main` directory (because this is a main
Bactopia workflow) and a directory for outputs from each workflow step. The `qc` subdirectory has a `summary` subdirectory with outputs
from tools such as `fastp`.

2. a `bactopia-runs` folder that contains info on the overall workflow run. Within this directory there will be timestamped directories with
names like `cleanyerreads-20240313-151308` where the format is `WORKFLOWNAME-YYYYMMDD-HHMMSS` based on when the workflow run started. Inside
this directory is a `nf-reports` directory that contains HTML format reports on the steps of the workflow, how long they took and how many
resources they consumed.

It is useful to consolidate the QC reports from the `cleanyerreads` workflow. This can be done using [MultiQC](https://multiqc.info/), which
can be installed with `conda create -n multiqc multiqc`. To switch between `conda` environments, deactivate your current environment
and activate your new environment like this:

```bash
conda deactivate
conda activate multiqc
```

In the same directory where you ran `fastqc` run `multiqc` like this:

```bash
multiqc --module fastp --outdir fastp_summary cleaned_reads/SRR*
```

This will gather the `fastp` output summaries into a folder called `fastp_summary`. In your web browser, open the `multiqc_report.html` file
from the `fastp_summary` to view the consolidated report. An example output is at <a href="/data/cholera/fastp_summary/multiqc_report.html" target="_blank">this 
link</a>.
