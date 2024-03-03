# Workflows
## Creating an analysis with multiple steps
<br>

Now that you have created your own dataset, you can run an analysis or several analyses, which eventually becomes what is known as a **workflow.**

<br>

These are some of the things you can do around workflows:
<br>
**a)** Build your own
<br>
**b)** Import someone else
<br>
**c)** Edit it
<br>
**d)** Share it

<br>
<br>

> :hammer_and_wrench: Let’s build a very simple workflow that runs two tools. 

<br>

Galaxy offers a variety of different NGS reads trimming/filtering tools. 
<br>
 - Here, we will use the **fastp** tool, which is straightforward to configure, and when combined with the **MultiQC** tool, enables nice and easy-to-interpret visualizations of the effects of preprocessing, in particular for multiple samples.

<br>
<br>

**1.** Search for **fastp** in your toolshed.
First scroll all the way to the bottom of this new information that popped up. Here you can read what you can do with the tool, how it works (input and output files) and even tutorials about the tool.
<br>
<br>

**2.** Click the drop-down under Single or Paired-end reads, and choose **Paired Collection**
<br>
- You will see that it automatically selects the dataset you created the **Select paired collection(s)**, because you only have one collection in your current History
  
![Search_fastp](/img/8_Search_fastp_Galaxy.png)
<br>
<br>
<br>
**3.** Fill out the parameters as shown below and click on **Run Tool** at the bottom of the page.
<br>
![Fastp_parameters](/img/9_Fastp_parameters_Galaxy.png)
<br>
<br>
<br>

> [!WARNING]
>  When doing Bioinformatics, it’s important to plan your workflow and to understand the input an output formats of each subsequent tools.

<br>

If you don’t have that many samples, or your plan on looking at each quality report from fastp individually, then you only really need to use the HTML report as output.

<br>

If we want to collate our reports to see a summary and do a comparison across samples, we need to use a tool such as MultiQC. However, MultiQC accepts a **JSON** file as input; which is why we also selected this format for output in the previous step.

<br>
<br>
<br>

> :hammer_and_wrench: Let’s analyze the output

<br>

### :question: Questions: 

**1.** What do you notice about the samples from the General statistics?

**2.** Does anything stand out under the Filtered Reads section?

**3.** Is there a change in the N-content for the forward and reverse reads after cleaning it up with fastp?

**4.** What do you notice about GC content of samples?

**5.** What do you think this could mean?

**6.** What type of test can you do to validate the sample?

<br>
<br>

> [!TIP]
> In the case where you are not sure if your sample is contaminated, you can run a tool called **Kraken2**, which will compare your sequence to the sequences of other organisms in the database you select, and it will report back to you what (micro)organism/biological entity your sequence most likely is.
<br>
<br>

---

### Kraken


**1.** Search for Kraken2
<br>
<br>
**2.** Select a single read (image below).
<br>
<br>
**3.** Select the read you want to interrogate (image below).
<br>
<br>
**4.** Select a Confidence of **0.1.** (image below).
<br>
![Kraken_single_file](/img/10_Kraken_single_file_Galaxy.png)
<br>
<br>

**5.** Under Select a Kraken2 database, choose the most recent **Standard (2021/05/17)** database.
<br>
![Kraken_aggregate](/img/11_Kraken_aggregate_new_Galaxy.png)
<br>
<br>

<br>

---

### Creating your workflow

<br>

If this is the type of analyses that you usually have to do on your samples, and you don’t want to keep doing this from scratch.
<br>
It is advisable to turn your analysis into a **workflow**.

<br>

**1.** At the top right corner, click on the drop-down arrow to expand the options for your History, and select **Extract Workflow**
<br>
![Extract_workflow_](/img/12_Extract_workflow_Galaxy.png)
<br>
<br>

**2.** Change the workflow name to something intuitive and click on **Create Workflow**
<br>
![Create_workflow](/img/13_Create_workflow_Galaxy.png)
<br>
<br>
You will now be able to click on the Workflow tab all the way at the top and see your very own created workflow.
<br>
- You can either click on the **Run** button at the far right. This will allow you to run it on any new samples you want to process in a new History.

- Or you can click on the dropdown to the left of the workflow name to **Edit, View, Share, Export, etc.**
<br>
<br>

---

### Edit a workflow
<br>

**1.** To make changes to an existing workflow, click on **Edit**
<br>

![Edit_workflow](/img/14_Edit_workflow_Galaxy.png)
<br>
<br>

> [!NOTE]  
> You can now delete any tools or inputs/outputs from tools.
> <br>
> You can also build upon an existing workflow.
<br>
<br>

**2.** Let’s search for **snippy** in the toolshed.
<br>

**3.** Click on the tool and it will add it to your workflow.
<br>

**4.** You can not connect the input for this file by dragging the arrow from the input data to where it should go on your snippy tool.
<br>
![Expand_workflow](/img/15_Expand_workflow_Galaxy.png)
<br>
<br>


**5.** Click on a tool to change any parameters/variables. Here I clicked on snippy. So, on the right, I can choose how to modify how snippy will run on my samples.


**6.** Click the save icon at the top to save your edited workflow.

<br>
<br>

---

### Share a workflow
<br>

**1.** To Share your workflow, click on the drop-down arrow of the workflow you wish to share, and select **Share.**
<br>
![Share_workflow](/img/16_Share_workflow_Galaxy.png)
<br>
<br>

**2.** If you click on **Make workflow accessible**, a second box appears. 
Here you can either make it publicly available to anyone on Galaxy, or you can send the url of your workflow to your peers. 
<br>
<br>
**3.** You may also share your workflow with individuals via their email address.
<br>
![Publish_workflow](/img/17_Publish_workflow_Galaxy.png)
<br>
<br>
<br>

---

### Publicly available workflows
<br>
Anyone can publish a workflow on Galaxy. 
<br>
<br>

**1.** To retrieve one of these workflows, click back on **Workflows** at the top if you’re not already there. Select **Import** at the top right.
<br>
<br>
**2.** Here you can choose to import a workflow using several different means. Let’s choose the middle tab, which says **GA4GH servers**

- Note that it is automatically on **workflowhub.eu**, but you may also import using the Dockstore if you click on the dropdown.
  
<br>

![Import_public_workflow](/img/18_Import_public_workflow_Galaxy.png)
<br>
<br>
<br>

>  Unfortunately, no one has built one yet for cholera. Perhaps that will be one of you :wink: 

<br>

**3.** Let’s search for **SARS** in the search bar. You will see many published workflows. Try to find one created by SANBI.
<br>
![20_SANBI_public_workflow](/img/20_SANBI_public_workflow_Galaxy.png)
<br>
<br>




4. Click on the Version button and it will import the workflow. Even though this workflow may not be appropriate for cholera, this is also a way to save yourself time. You can always modify this one with tools and parameters for a a cholera analysis and rename it appropriately.
<br>
<br>

## **Well done. You are now a Bioinformatician!!** :fist_oncoming:
