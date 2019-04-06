# CodeWorksAcademy

## Create Project
```
npm install -g create-project 
create-project new-project-name jakeoverall/cw-app-template
```

## Project setup
```
npm i
cd client npm i
```

### Compiles and hot-reloads client
```
npm run serve
```

### ctrl + shift + b 
Compiles server and watches for changes
```
tsc: watch - tsconfig.json
```

### f5
```
starts the server
```

### CSS

- Colors
  - --blue: #3e91d5;
  - --indigo: #6610f2;
  - --purple: #6f42c1;
  - --pink: #e83e8c;
  - --red: #e3624c;
  - --orange: #fd7e14;
  - --yellow: #918d71;
  - --green: #00cbfe;
  - --teal: #20c997;
  - --cyan: #757575;
  - --white: #fafafa;
  - --gray: #6c757d;
  - --gray-dark: #343a40;
  - --primary: #3e91d5;
  - --secondary: #353942;
  - --success: #00cbfe;
  - --info: #757575;
  - --warning: #918d71;
  - --danger: #e3624c;
  - --light: #f8f9fa;
  - --dark: #221f1f;



# Deploying a subfolder to GitHub Pages
### Step 1
Remove the `dist` directory from the project’s `.gitignore` file.

```sh
npm run rebuild
```

### Step 2
Make sure git knows about your subtree (the subfolder with your site).

```sh
git add dist && git commit -m "Initial dist subtree commit"
```

### Step 3
Use subtree push to send it to the `stage` branch on GitHub.

```sh
npm run deploy
```


### Include SubModules

CodeWorks-Entities
QuickComponents