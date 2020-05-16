## Create a react app from scratch

### STEPS

- create project directory `mkdir project`
- `npx gitignore node`
- `git init`
- `npm init -y`
- confirm using `ls -lah`
- `npm i react react-dom`
- `npm i -D parcel-bundler`
- `touch index.html index.js styles.scss`
- open in editor
  - in package.json script `"start": "parcel index.html"`
  - `!` in index.html to create template
  - `<script src='index.html' defer></script>`
  - in styles.scss
    '''css
    - {
      box-sizing: border-box;
      }
      '''

#### References

- [Creating a React App (Without CRA)](https://www.youtube.com/watch?v=gIHpRf2MoB0&feature=youtu.be)
