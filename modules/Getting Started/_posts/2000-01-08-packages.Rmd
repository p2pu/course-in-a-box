---
  title: Installing Packages!
---



<div id="installing-packages" class="section level1">
<h1>Installing Packages</h1>
<p>In order to use the tidyverse and any other package that is not included in Base R, we must learn to install packages. These packages that we install contain unique functions, tools, code, data and even examples.</p>
<p>The easiest way to install packages is to use the command:</p>
<pre><code>install.packages()</code></pre>
<p>For example, go ahead and install the <code>tidyverse</code> package on your own:</p>
<pre><code>install.packages(&quot;tidyverse&quot;)</code></pre>
<div id="calling-installed-packages" class="section level2">
<h2>Calling Installed Packages</h2>
<p>Once we have installed packages, we must call them into R in order to use them. This must be done each time you start a new document or R session. We call packages with the following command:</p>
<pre class="r"><code>library(tidyverse)</code></pre>
<pre><code>## Loading tidyverse: ggplot2
## Loading tidyverse: tibble
## Loading tidyverse: tidyr
## Loading tidyverse: readr
## Loading tidyverse: purrr
## Loading tidyverse: dplyr</code></pre>
<pre><code>## Conflicts with tidy packages ----------------------------------------------</code></pre>
<pre><code>## filter(): dplyr, stats
## lag():    dplyr, stats</code></pre>
<p>When we call this package we can see that it has loaded into R. The first lines explain what has been loaded. Then what follows are conflicts.</p>
<div id="what-are-conflicts" class="section level3">
<h3>What are Conflicts?</h3>
<p>Conflicts happen when packages have functions with the same names as other functions. This is OK when you prefer the function in a package like <code>tidyverse</code> rather than some other function. Basically the last package loaded in will mask over other functions if they have common names.</p>
<p>We can see a further example of this below:</p>
<pre class="r"><code>library(MASS)</code></pre>
<pre><code>## 
## Attaching package: 'MASS'</code></pre>
<pre><code>## The following object is masked from 'package:dplyr':
## 
##     select</code></pre>
</div>
</div>
</div>




</div>

<script>

// add bootstrap table styles to pandoc tables
function bootstrapStylePandocTables() {
  $('tr.header').parent('thead').parent('table').addClass('table table-condensed');
}
$(document).ready(function () {
  bootstrapStylePandocTables();
});


</script>

<!-- dynamically load mathjax for compatibility with self-contained -->
<script>
  (function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src  = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
    document.getElementsByTagName("head")[0].appendChild(script);
  })();
</script>