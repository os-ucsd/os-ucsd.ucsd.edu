# How to Contribute to the OS Website 🚀

## Setup 💻 :

### Step 1: 
- Make sure you have node and npm on your local machine
- Do npm -v and node -v to see your current version (means that you have it installed)
- If you don’t have it installed, follow here: https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/

### Step 2:
- Fork https://github.com/os-ucsd/os-ucsd.ucsd.edu

### Step 3: 
- Clone the forked repo to local machine git clone [forked-repo-url]  
- cd into the cloned repo by doing: cd os-ucsd.ucsd.edu
  
### Step 4: 
- Set up origin as your forked repo and upstream as original repo
- git remote add origin [forked-repo-url] (same as clone url; if it says origin is already added then you’re all set for this step) 
- git remote add upstream [original-repo-url] 
- You’ll be doing git pull upstream to get updates from the original repo and git push origin master to push your changes to your forked repo
- git push origin master (push your changes to your forked repo)
  *this is for after you have made edits*
- git pull upstream master (get updates from original repo)

### Step 5: 
- Installing dependencies: npm install

### Step 6: 
- To see the current site: npm start

### Step 7: 
- you can start editing code now :)
  
  
## How to push your edited code and merge with original repository 👩‍💻:

### Step 1: 
- git add .  
- git commit -m "some message"
  
### Step 2: 
- git pull upstream master 
  *important: make sure you have set the upstream in setup^*
- Fix merge conflicts (if there is)
  
### Step 3: 
- git add . (yep, again)  
- git commit -m "another message"
  
### Step 4: 
- git push origin master (this should update the code in your forked repository; the original repo has not been changed yet)
  
### Step 5: 
- go to your forked repository on Github 
  *not the original one*
  
### Step 6: 
- Click where it says Pull requests (next to Code)
- Click New Pull Request
- Make sure it looks like this
  
### Step 7: 
- Complete the pull request - A collaborator will review/accept your pull request 
- The original repository now has your code
  
### Step 8: 
- EYYY you have successfully contributed to our website☺️ 

## To find the components (code):

### Step 1: 
- cd into the os-ucsd.ucsd.edu directory
  
### Step 2: 
- cd to os_site/src/routes
  
## Helpful debugging resources:

Breakpoints: https://www.npmjs.com/package/react-breakpoints

Website: http://os-ucsd.ucsd.edu/
