---
title: Set a Custom Domain
---

## Set a Custom Domain

Your course will live freely and indefinitely at the following link which will be automatically generated when you fork Course-in-a-Box:

[https://your-github-username.github.io/course-in-a-box/](https://your-github-username.github.io/course-in-a-box/)

If you’d prefer to share your course on a different website, you can set it up under a custom domain name. 
If you or your organization don’t already own the domain name where you want to host your course, you’ll need to buy one. Domains typically start at $10–15 per year. There are hundreds of services for this, many of which offer discounts or specialty domains. We recommend starting with [namecheap](https://www.namecheap.com/) or [gandi](https://www.gandi.net/en-US). 

#### Linking the Custom Domain

Once you’ve registered the domain, there are two steps needed to route it to your course: adding a CNAME and configuring your DNS record.

Remember that CNAME file you deleted when you first forked your course? Er, well, you’ll have to make that again in order to use a custom domain. In the main repository of your course, create a new file titled `CNAME` and paste your custom domain into the file. 

[https://your-github-username.github.io/course-in-a-box/CNAME](https://your-github-username.github.io/course-in-a-box/CNAME.)

Finally, you need to configure your new domain to point to your course on GitHub. For this, we recommend following [GitHub’s official documentation](https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).
