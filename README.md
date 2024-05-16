# COG PM FRONTEND

This is the new repository for COG PM Frontend, please try to follow the rules below to prevent the chaos that happened in the last repo. Thanks!

## REPO RULES🚨🚨🚨

- ALWAYS build (i.e `yarn  run build`) your code before you push to this repo, to prevent deployment errors👍🏾
- Don't edit the setup files without general permission (i.e .eslintrc.json, .prettierrc, .prettierignore, .vscode files, .husky files)
- The main styling for this website is "TailwindCSS", adhere from creating more `.scss` and `.css`("Use `globals.css" for your custom css)
- Create files in using the right NextJS folder structure routing. If you're not sure, here [Read it here...](https://nextjs.org/docs/pages/building-your-application/routing)
- Utility function should be created in the `utils` folder(preferrably in its `index.js` file)
- The `temp` folder is just "temporary" code for reference purposes, may be deleted soon
- Use the import alias (i.e `@/`) wherever you can to avoid import chaining (i.e "../../" or "../../") and so on😣
- Components should be capitilized to encourage consistency (i.e `Component.js` not `component.js`)

#### PS: "General permission" means permission from either [Tobi](https://github.com/tobiadetunji5) or [Leye](https://github.com/usernameisleye) or 2+ fellow developers or all

### FOLLOW THESE RULES EJOOR🙏🏾

## CONTRIBUTING TO THIS REPO

This is the process by which you can clone this repo, create your own branch, push the changes on your branch and make a Pull Request

#### If you don't have git on your machine, [install it](https://docs.github.com/en/get-started/quickstart/set-up-git)

## Clone the repository

#### Now clone this repository to your machine. Do this by clicking on the code button and then click the _copy to clipboard_ icon

Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository. See the previous steps to obtain the url

For example:

```
git clone https://github.com/this-is-you/cog-pm-frontend-new.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the repository on GitHub to your computer.

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd cog-pm-frontend-new
```

Now create a branch using the `git switch` command:

```
git switch -c your-new-branch-name
```

For example:

```
git switch -c tobi-adetunji-br
```

## Make necessary changes and commit those changes

Now add your code to the repo (while fillowing the rules above!!)

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```
git add .
```

Now commit those changes using the `git commit` command:

```
git commit -m "your-commit-message"
```

replacing `your-commit-message` with your actual commit message.

## Push changes to GitHub

Push your changes using the command `git push`:

```
git push -u origin your-branch-name
```

replacing `your-branch-name` with the name of the branch (in this case...`tobi-adetunji-br`) you created earlier.

## Submit your changes for review

If you then go to your branch on the repo on GitHub, you'll see a `Compare & pull request` button. Click on that button.

Now submit the pull request.

Soon I'll be merging all your changes into the main branch of this project. You will get a notification email once the changes have been merged.
