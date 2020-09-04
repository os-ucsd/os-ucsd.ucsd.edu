# GIT GUD: Graffiti Wall Tutorial!

## Goals
    - Learn Linux commands (console/terminal)
    - Learn git commands and workflow
    - Make your first open-source contribution by tagging our graffiti wall!

Here is our virtual graffiti wall:
https://os-ucsd.github.io/graffiti-wall

Each every individual tag you see here is its own open source contribution - or, a **commit**. A contributor added their own tag by adding a `.json` file into the [Graffiti Wall repository](https://github.com/os-ucsd/graffiti-wall) - then sent a **pull request** **(PR for short)** to add their commit to the project. Finally, a maintainer of the graffiti wall project **reviewed and approved** the proposed changes, and the tags were added to the wall!

This workshop will guide you step-by-step how to do the same thing!

## Instructions

**Step 0: Pre-Requisites** 

Before we begin the workshop, make sure you:

1. Have a [GitHub](https://github.com/) account (use your UCSD email for more perks!)
2. Have a [Glitch](https://glitch.com/) account (can sign up with your GitHub account login info)
3. (optional) If you are unfamiliar with Linux commands, check out this tutorial first: https://beta.observablehq.com/@kaustubhlall/introduction-to-linux

**Step 1: “Fork” the Repository**

The **“repository”** you will be contributing to can be found here: 
https://github.com/os-ucsd/graffiti-wall

What is a repository?
You can think of a **repository (repo for short)** as a folder where all the code exists for a certain project. All of the code for our graffiti wall project can be found inside this repository, and you will make your contributions to this repository!

You are going to **“fork” this repo**. “Forking” means you’ll be duplicating this repo into your own GitHub account.

Do this by navigating to the graffiti wall repo (link above) and clicking on the “Fork” button in the upper right, like so:

**Warning**: gif is outdated. The repo should be os-ucsd/graffiti-wall instead, but the process is the same. 🤷‍♀️ 


![how to fork a repo in GitHub](https://paper-attachments.dropbox.com/s_316A2131CC31DC081E0DED8B0A9AA3DA49E09EFE7DF246B3D6917E29DF8D6A79_1539558706053_gitfork.gif)


Awesome! now, whatever changes you make to <username>/graffiti-wall will *only* effect your repo - they will have no effect on the original os-ucsd/graffiti-wall repo (until you make a pull request in Step 6!).

**Step 2: Open the Code in Glitch**

Okay, now you have your own repo - how can you run this code, and add your own changes?

Glitch to the rescue!

For this workshop, we will be using [Glitch](https://glitch.com/) to code and make our changes - however, normally, you will probably be doing this on your own computer. Setting up git/running code on your own computer can get messy and complicated, so we decided to use Glitch for this workshop to abstract away some complexities.

**NOTE:** If you’ve done stuff like this before and you have git installed on your computer, feel free to not use Glitch and do it how you normally do! But if this is your first time and you don’t know/have git, then continue using Glitch!

We will be using the console on Glitch to mimic the terminal (for the sake of simplifying the process). To access the console:

    1. Go to [glitch.com](http://glitch.com)
    2. Sign in with your GitHub account (top right corner)
    3. Click new project (top right corner)
    4. Select the first option (hello-webpage)
    5. At the bottom left corner, click the ‘Tools‘ button
    6. Choose ‘Logs’, then open ‘Console’ to access Glitch’s console
![](https://paper-attachments.dropbox.com/s_6CBBBBB17C75A61362D761A51418CAC644BC7DF3374BD3705B17481195DE7E50_1561708674421_image.png)
![](https://paper-attachments.dropbox.com/s_6CBBBBB17C75A61362D761A51418CAC644BC7DF3374BD3705B17481195DE7E50_1561708799150_image.png)


Now, you should see a terminal-like environment like such:

![Glitch console interface](https://paper-attachments.dropbox.com/s_9E5CF1A9EF15F156D86BAF4AC970B697E951B5DDBE01C223E398D160AC804672_1540064749070_2018-10-20.png)


**Step 3: Your Own Local Graffiti Wall**

Now, we need to “download” the files from your GitHub repo that you forked, and we do so by **cloning** the GitHub url on the console.

First, go to your graffiti-wall repo on your GitHub account (make sure your’re on the **<your_username>/graffiti-wall** one and not the **os-ucsd/graffiti-wall** one) and click the **“Clone or download”** button to copy the link.

![clone/download button in GitHub](https://paper-attachments.dropbox.com/s_6CBBBBB17C75A61362D761A51418CAC644BC7DF3374BD3705B17481195DE7E50_1539995960305_image.png)


  On the console, enter the command `git clone <your-repo-url>` and replace <your-repo-url> with the url you just copied (note: don’t include the <> brackets).
  
  Now, if you type the **‘ls’ command**, the graffiti-wall repo should appear as one of the directories.
  
**Step 4: Add Your Tag**

Okay, now you have your own local wall running - how can you add your own tag?

If you check out your forked repo, you’ll see a directory (a folder) called `tags`. Inside of this directory, there are a number of `.json` files that contain similar info - each `json` file corresponds to one tag on the graffiti wall.

For example, `alex.json` is owned by Alex Garcia. Using `cat alex.json` you can see its contents:

    {
      "grid":[
        [0,0,1,1,1,0,0],
        [0,0,1,1,1,0,0],
        [0,0,1,1,1,0,0],
        [0,0,1,1,1,0,0],
        [0,0,1,1,1,0,0],
        [0,0,1,1,1,0,0],
        [0,0,1,1,1,0,0]
      ],
    
      "color": "#007acc",
    
      "name":"Alex Garcia"
    }

Now, all you have to do is add your own `name.json` file inside of the `tags` folder, and you’ll be set!

Navigate inside the graffiti-wall directory and then the tags directory using the command `cd <directory-name>`

To make your own `name.json` file, first make a new empty file using `to``uch` `name.json`.

Type in `refresh` to sync the Glitch editor with the console. You should see your json file appear in the left hand column.

Go to this editor to try out your tagging skills!: https://os-ucsd.github.io/graffiti-wall-editor
You should see something like this:

![graffiti-wall editor](https://paper-attachments.dropbox.com/s_6CBBBBB17C75A61362D761A51418CAC644BC7DF3374BD3705B17481195DE7E50_1539996617123_image.png)


Play around with this (change the values for the grid, color, and name) to personalize your tag.

When you’re happy with what your tag looks like, copy the code to the right and paste it on your `name.json` file in Glitch! You can use vim/nano in the console or the Glitch editor if you’re unfamiliar with console-based text editors.

If you used the Glitch editor, go back to your console, and type in `refresh` for Glitch to sync with the console. Now, if you type `cat name.json`, your code should be there!

**Step 5:** **C****ommit/****P****ush** **Your Changes**

If you go back to your GitHub graffiti-wall repo, you still won’t see your `name.json` 😞 This is because you need to `push` your contribution back to your Github repo.

First, if you type `git status` on the console, it will show you the status of your git process. Hopefully you will see your `name.json` file in red.

Make sure you’re in the graffiti-wall directory (check with `pwd`). Use the command `git add .` to add all of the files in the current directory to the stage.

Now, if you `git status` again, your file should be in green, meaning it’s ready to be committed 👍 
To commit the file, use the command `git commit -m` `"``message``"`. Replace “message” with a meaningful comment that can help you differentiate your different commits. (example: “added `[your-name].json`")

You might get prompted to configure your git information.
`git config --global user.name "Your name``"`
`git config --global user.email "Your email"`

Enter your appropriate name and email between the quotes. You may need to commit again `git commit -m` `"``message``"`.

Once your file is committed, you’re ready “upload” your local content onto your remote repo (Github). Do that by using the command `git push origin master`.

If everything goes well, your updated files should appear in your own repo in GitHub, check it out to verify!

**Step 6: Make Pull Request**

Awesome, you’ve now added your own personalized tag on your own graffiti wall!

But, if you go back to the [graffiti wall](https://os-ucsd.github.io/graffiti-wall), your tag is not there 😦
And in the original os-ucsd/graffiti-wall repo ([https://github.com/os-ucsd/graffiti-wall](https://github.com/os-ucsd/graffiti-wall)), you’ll see that your tag doesn’t appear: what gives?? 😠

This is because you need to make a **pull request** to have your contributions reviewed and added to the original repository. A pull request is basically you sending a request to have your changes from your repository merged into the original repository. To make a pull request, go to your own graffiti-wall repo on GitHub and press the “New pull request” button as shown below:

![making a pull request](https://paper-attachments.dropbox.com/s_316A2131CC31DC081E0DED8B0A9AA3DA49E09EFE7DF246B3D6917E29DF8D6A79_1539558706183_gitpr.gif)

![](https://paper-attachments.dropbox.com/s_316A2131CC31DC081E0DED8B0A9AA3DA49E09EFE7DF246B3D6917E29DF8D6A79_1539558706093_image.png)


**Step 7: Wait for Approval**
Now that you’ve sent in your pull request, you’re good to go! We (Open Source @ UCSD) will review your code and merge your contribution to our repo 😁

**Step 8: Done!!**
Now your tag appears on the graffiti wall! Good job 🎉
Check out your sweet artwork here: https://os-ucsd.github.io/graffiti-wall

For a shorter/faster version of this tutorial as a refresher/future reference, check out this [Git Cheat-Sheet](https://beta.observablehq.com/@vmm2297/git-cheat-sheet).

