# Git Commands – Complete README Cheat Sheet

This README lists commonly used **Git commands**, grouped by purpose, from beginner to advanced. 

**Git** is a version control system used to track changes in code and help multiple people work on the same project safely.

1. Saves a complete history of changes (who changed what and when)

2. Allows you to undo mistakes by reverting to earlier versions

3. Enables team collaboration without overwriting each other’s work

4. Helps manage multiple versions of a project using branches

---

## 1. Git Setup & Configuration

```bash
git --version # Check git version
git config --global user.name "Your Name"  # Set global username
git config --global user.email "you@example.com" # Set global email
```

Local config (per project):

```bash
git config user.name "Your Name" # Set local username
git config user.email "you@example.com" # Set local email
```

---

## 2. Initializing & Cloning Repositories

```bash
git init # Initialize a new git repository
git clone <repo-url> # Clone an existing repository
```

---

## 3. Basic Workflow Commands

### Check Status

```bash
git status # Provides detailed status such as modified, staged, untracked files
git status -s # Provides a short summary of status
```

### Add Files (Staging Area)

```bash
git add <file> # Stage a specific file means adding a specific file to the staging area
git add . # Stage all changes in the current directory
git add *.js # Stage all .js files
```

### Commit Changes

```bash
git commit -m "message" # Commit staged changes with a message
git commit -a -m "message" # Stage and commit all tracked files in one step
```

---

## 4. Viewing History & Logs

```bash
git log # Shows detailed commit history
git log --oneline # Shows commit history in short and oneline format
```

---

## 5. Branching

### Branch Commands

```bash
git branch # List all branches with current branch highlighted with *
git branch <branch-name> # Create a new branch
git branch -d <branch-name> # Delete a branch
git branch -D <branch-name> # Force delete a branch
```

### Switch / Checkout

```bash
git checkout <branch-name> # Switch to a branch
git checkout -b <new-branch> # Create and switch to a new branch
git switch <branch-name> # Switch to a branch (alternative to checkout)
```

---

## 6. Merging & Rebasing

### Merge

```bash
git merge <branch-name> # Merge a specific branch into the current branch

Types of merging:
1. Fast-forward merge: Suppose we have a file named a.txt in the master branch. Now we made two commits say A and B in master branch. Then we create a new branch feature from master and make two commits C and D in feature branch. Now if we merge feature branch into master branch, git will perform a fast-forward merge because there is no new commit in master branch after branching out feature branch. So git will simply move the pointer of master branch to the latest commit of feature branch. No new commit is created in this type of merge.

2. Recursive merge: Suppose we have a file named a.txt in the master branch. Now we made two commits say A and B in master branch. Then we create a new branch feature from master and make two commits C and D in feature branch. Now if we make another commit E in master branch and then try to merge feature branch into master branch, git will perform a recursive merge because there is a new commit in master branch after branching out feature branch. So git will create a new commit F in master branch which will have two parents E and D. This new commit F will contain the changes from both branches.

```

### Rebase

```bash
git rebase <branch-name> # Rebase specific branch onto the current branch
git rebase --abort # Cancels the rebase process
git rebase --continue # Continues the rebase process after resolving conflicts

Suppose we have a file named `a.txt` in the `master` branch. We first make two commits A and B on the `master` branch. Then we create a new branch `feature` from `master` and make two commits C and D on the `feature` branch. After that, we switch back to `master` and make another commit E. Now, if we rebase the `feature` branch onto the `master` branch (`git checkout feature` → `git rebase master`), Git moves the base of the `feature` branch to the latest commit of `master`. During the rebase, if a conflict occurs, we resolve it, then run `git add a.txt` followed by `git rebase --continue`. At this point, Git opens the default editor (Vim) to confirm the commit message; press `Esc`, type `:wq`, and press `Enter` to save and continue. This process repeats for each commit being rebased. After completion, the new commit history becomes A → B → E → C′ → D′, where C′ and D′ are rewritten versions of commits C and D. No merge commit is created, but new commit hashes are generated for the rebased commits. Then we can switch back to `master` and fast-forward merge the `feature` branch (`git checkout master` → `git merge feature`).

```

## 7. Remote Repositories

### View & Manage Remotes

```bash
git remote add origin <url> # Add a remote repository to your local repository
git remote remove origin # Remove a remote repository from your local repository
```

### Push & Pull

```bash
git push origin <branch> # Push changes to a specific branch on the remote repository
git push -u origin <branch> # Push changes and set upstream tracking for the branch
git pull origin <branch> # Pull changes from a specific branch from the remote repository to the local repository
```
---

## 8. Undoing Changes

### Staging Area

```bash
git reset <file> # Unstage a specific file
git reset # Unstage all files
```

### Commits

```bash
git reset --soft HEAD~1 # Undo last commit but keep changes staged
git reset --mixed HEAD~1 # Undo last commit and unstage changes
git reset --hard HEAD~1 # Undo last commit and discard changes
```

---

## 9. Stashing

```bash
git stash
git stash list
git stash apply
git stash pop
git stash drop
git stash clear
```

---

## 10. Diff & Comparison

```bash
git diff
git diff --staged
git diff <branch1> <branch2>
git diff <commit1> <commit2>
```

---

## 11. Tags

```bash
git tag
git tag v1.0
git tag -a v1.0 -m "version 1.0"
git push origin v1.0
git push origin --tags
```


---

## 12. Cherry Pick

```bash
git cherry-pick <commit-id>
git cherry-pick --abort
```

---


## 13. Fetch

```bash
git fetch # Fetch changes from remote without merging
git fetch origin <branch> # Fetch specific branch from remote without merging
``` 
---

## 14. Useful Shortcuts

```bash
git clean -f # Remove untracked files
git clean -fd # Remove untracked files and directories
git show  # Show details of a last commit
git show <commit-id> # Show details of a specific commit
```

### ✅ Tip

* **Working Directory → Staging → Commit → Push** is the core Git flow.
* Use branches for every new feature or bug fix.


