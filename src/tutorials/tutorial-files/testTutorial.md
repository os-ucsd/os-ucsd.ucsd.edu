**Goal** - By the end of this tutorial, you will have your own ACSWeb site set up, and a repository on Github that will sync your site automatically on every push!

**WARNING** - If you do this, and you already have files in your acsweb server, they will be deleted! You can back them up by using `scp` to [save them locally](https://unix.stackexchange.com/questions/188285/how-to-copy-a-file-from-a-remote-server-to-a-local-machine). 


## TL;DR

In a hurry? Here's what you have to do to get this working ASAP:

1. Setup your acsweb site [here](https://ucsdservicedesk.service-now.com/its?id=kb_article_view&sys_kb_id=a7d72b1bdbc67bc09736f35aaf961975). Enable the `public_html` option.
2. Create a new repository on Gitub. Initialize with a README.
3. Create an `index.html` file in that new repo. Just put "Hello World!" inside of it. Commit the file.
4. In your repo, go to Settings->Secrets->Add new Secret. Create a Secret with the label `password` and the value of your UCSD password.
5. Create a file called `.github/workflows/main.yml`. Use [this](https://github.com/asg017/my-acsweb-site/blob/master/.github/workflows/main.yml) as a sample - copy and paste that into your file. Change `asg017` to your own UCSD username. Commit the file.
6. Open your http://acsweb.ucsd.edu/~your_username site. See if you see your "Hello World!" `index.html` file.
7. Change your `index.html` file in your Github repo. So if it synced automatically to your acsweb site. 