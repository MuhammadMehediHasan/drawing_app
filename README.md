# How to setup project

- Install gh and git the 

- `gh repo clone MuhammadMehediHasan/drawing_app`

- then cd into `drawing_app`

now you can work. :heart:

To push:
-

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

```bash
# add you changes
git add <file_name | (.)>
```

```bash
# review your changes
git status
```
`output`:
```bash
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   README
	new file:   index.html
	new file:   jsconfig.json
	new file:   libraries/p5.min.js
	new file:   libraries/p5.sound.min.js
	new file:   sketch.js
	new file:   style.css
```

```sh
# save changes
git commit -m "message"
```

```bash
git checkout dev_<your_name>
git pull origin main # if you need to update
git push origin dev_<your_name>
```


