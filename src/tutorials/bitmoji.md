# Create a Bitmoji Workshop

## Goals:

- Create your own Bitmoji
- Make an Open Source contribution by adding to our Bitmoji Wall
- Learn git commands and workflow

Here is our Bitmoji wall: https://os-bitmoji.glitch.me/

Here is the github repository: https://github.com/os-ucsd/bitmoji

Each every individual bitmoji you see here is its own open
source contribution - or, a commit. A contributor added their
own bitmoji by adding a .json file into the OS Bitmoji
repository - then sent a pull request (PR for short) to add
their commit to the project. Finally, a maintainer of the
bitmoji project reviewed and approved the proposed changes,
and the bitmojis were added to the wall!

This workshop will guide you step-by-step how to do the same
thing!

## Instructions

Step 0: Pre-Requisites

Before we begin the workshop, make sure you:

```
1. Have a GitHub account (use your UCSD email for more
perks!)
2. Have a Glitch account (can sign up with your GitHub
account login info)
3. (optional) If you are unfamiliar with Linux commands,
check out this tutorial first:
https://beta.observablehq.com/@kaustubhlall/introduction-
to-linux
```
## Step 1: “Fork” the Repository


The “repository” you will be contributing to can be found
here: https://github.com/os-ucsd/bitmoji

What is a repository? You can think of a repository (repo for
short) as a folder where all the code exists for a certain
project. All of the code for our bitmoji project can be found
inside this repository, and you will make your contributions
to this repository!

You are going to “fork” this repo. “Forking” means you’ll be
duplicating this repo into your own GitHub account.

Do this by navigating to the bitmoji repo (link above) and
clicking on the “Fork” button in the upper right, like so:

![how to fork a repo in GitHub](https://i.imgur.com/pi5KiF5.gif)

Awesome! Now, whatever changes you make to <username>/bitmoji
will only effect your repo - they will have no effect on the
original os-ucsd/bitmoji repo (until you make a pull request
in Step 6!).

## Step 2: Open the Code in Glitch

Okay, now you have your own repo - how can you run this code,
and add your own changes?

Glitch to the rescue!

For this workshop, we will be using Glitch to code and make
our changes - however, normally, you will probably be doing
this on your own computer. Setting up git/running code on your
own computer can get messy and complicated, so we decided to
use Glitch for this workshop to abstract away some
complexities.


NOTE: If you’ve done stuff like this before and you have git
installed on your computer, feel free to not use Glitch and do
it how you normally do! But if this is your first time and you
don’t know/have git, then continue using Glitch!

Use this button to remix (create your own version of the
project):

![Glitch](https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726)

We will be using Glitch's console to mimic a terminal
environment. To access Glitch’s console, open the Tools menu
at the bottom left corner of the screen and select Logs. From
there, select Console.

![](https://paper-attachments.dropbox.com/s_6CBBBBB17C75A61362D761A51418CAC644BC7DF3374BD3705B17481195DE7E50_1561708674421_image.png)
![](https://paper-attachments.dropbox.com/s_6CBBBBB17C75A61362D761A51418CAC644BC7DF3374BD3705B17481195DE7E50_1561708799150_image.png)

Now, you should see a terminal-like environment like such:

![](https://paper-attachments.dropbox.com/s_9E5CF1A9EF15F156D86BAF4AC970B697E951B5DDBE01C223E398D160AC804672_1540064749070_2018-10-20.png)

## Step 3: Your Own Local Bitmoji

Now, we need to “download” the files from your GitHub repo
that you forked, and we do so by cloning the GitHub url on the
console.

First, go to your bitmoji repo on your GitHub account (make
sure you’re on the <your_username>/bitmoji one and not the os-
ucsd/bitmoji one) and click the “Clone or download” button to
copy the link.

![](https://i.imgur.com/3XAwW4h.png)

On the console, enter the command git clone <your-repo-url> and
replace \<your-repo-url> with the url you just copied (note:
don’t include the \<> brackets).

Now, if you type the ‘ls’ (list) command, the bitmoji repo
should appear as one of the directories.

## Step 4: Add Your Tag

Okay, now you have your own local wall running - how can you
add your own tag?

If you look around in your forked Bitmoji repository on
Github, you’ll see a directory (a folder) called bitmojis.
Inside of this directory, there are a number of .json files


that contain similar info - each json file corresponds to one
bitmoji on the Bitmoji Wall.

For example, test.json was created by us:

```
{
"name": "test test",
"gender": "female",
"traits" : {
"brow": "766",
"cheek_details": "-1",
"eyelash": "-1",
"eye_details": "-1",
"face_lines": "-1",
"glasses": "-1",
"hair": "1260",
"hat": "-1",
"mouth": "1055",
"nose": "762",
"blush_tone": "-1",
"brow_tone": "0",
"eyeshadow_tone": "-1",
"hair_tone": "2039326",
"lipstick_tone": "-1",
"pupil_tone": "5977116",
"skin_tone": "9655597",
"body": "7",
"breast": "3",
"face_proportion": "0"
},
"outfit": "889504"
}
```

Now, all you have to do is add your own `name.json` file inside of
the `bitmojis` folder with the characteristic code of your choice,
and you’ll have your own bitmoji!

First, navigate inside the bitmoji directory and then the
bitmojis directory using the command `cd <directory-name>`

To make your own name.json file, first make a new empty file
using the command `touch <your-name>.json`.

Type in `refresh` to sync the Glitch editor with the console. You
should see your json file appear in the left hand menu.

![](https://i.imgur.com/hkEBJAF.png)

Here comes the exciting part! Go to this editor to try out
your bitmoji-designing skills:

[Bitmoji Editor](https://os-bitmoji.glitch.me/editor)

You should see something like this:

![](https://i.imgur.com/vn53Bw5.png)

Play around with this (change all the values of each attribute
to your liking).

When you’re happy with what your bitmoji looks like, copy the
code at the bottom of the page and paste it on your `name.json`
file in Glitch! You can use vim/nano in the console or the
Glitch editor if you’re unfamiliar with console-based text
editors.

If you used the Glitch editor, go back to your console, and
type in refresh for Glitch to sync with the console. Now, if you
type cat `name.json`, your code should be there!

## Step 5: Commit/Push Your Changes

If you go back to your GitHub bitmoji repo, you still won’t
see your `name.json`. This is because you need to push your
contribution back to your Github repo.

First, if you type git status on the console, it will show you
the status of your git process. Hopefully you will see your
`name.json` file in red.

Make sure you’re in the bitmoji directory (check with `pwd`). Use
the command `git add .` to add all of the files in the current
directory to the stage.


Now, if you `git status` again, your file should be in green,
meaning it’s ready to be committed.  To commit the file, use
the command `git commit -m "message"`. Replace “message” with a
meaningful comment that can help you differentiate your
different commits. (example: “added `[your-name].json"`)

You might get prompted to configure your git information.

`git config --global user.name "Your name"`

`git config --global user.email "Your email"`

Enter your appropriate name and email between the quotes. You
may need to commit again `git commit -m "message"`.

Once your file is committed, you’re ready “upload” your local
content onto your remote repo (Github). Do that by using the
command `git push origin master`.

If everything goes well, your updated files should appear in
your own repo in GitHub, check it out to verify!

## Step 6: Make Pull Request

Awesome, you’ve now added your own personalized bitmoji on
your own bitmoji repo!

But, if you go back to the [Bitmoji page](https://os-bitmoji.glitch.me/), your tag is not there.
And in the original [os-ucsd/bitmoji](https://github.com/os-ucsd/bitmoji) repo, you’ll see that
your tag doesn’t appear: what gives??

This is because you need to make a **pull request** to have your
contributions reviewed and added to the original repository. A
pull request is basically you sending a request to have your
changes from your repository merged into the original
repository. To make a pull request, go to your own bitmoji
repo on GitHub and press the “New pull request” button as
shown below:

![](https://i.imgur.com/Yls6Ebx.gif)

### Step 7: Wait for Approval

Now that you’ve sent in your pull request, you’re good to go!
We (Open Source @ UCSD) will review your code and merge your
contribution to our repo.

### Step 8: Done!!

Once you're approved, your bitmoji will appear on the Bitmoji
Wall!

# Check out your sweet artwork

# here: https://os-bitmoji.glitch.me/
