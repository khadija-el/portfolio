# App web 
[lien]:(https://mohamed-mourabit.com)

## Le projet à éte developpé par les technologies suivantes : 
[Node js et NPM] :(https://nodejs.org/en/download/) & [Angular 11](https://cli.angular.io/) : 

## Les étapes d'instalation : 

### la commande pour récuperer le repository du git est : 
```
get clone  https://github.com/djm2x/me.git
```

### Pour installer les dependences éxécuter la commande suivante : 
```
npm install
```

### pour lancer le projet front-end angular éxécuter la commande suivante :  
```
ng serve --port 4206 --hmr
```

### configuration deheroku pour le deploiment de l'application

- Crée un compte sur [Heroku](https://www.heroku.com/)
- Dans le Dashboard cliquer sur new => `create a new app`
- Attribuer un nom à l'application et choisissez  la région la plus proche de vous => `create app`
- Dans l'ongle Settings -> `add Buildpacks` : https://github.com/anuraj/dotnetcore-buildpack (pour qui Heroku support ASP.NET Core)
- Dans l'ongle `Deploy`, choisir comme `Deployment method` GitHub, connectez-vous après avoir choisie votre repo est cliqué sur `connect` -> `Enable Automatic Deploy`
- Pour genere la base de donne install ce package de entity framwork core
```
dotnet tool install --global dotnet-ef
```


### pour deployer le projet sur GITHUB page : 
```
npm run ci 
```

### AJouter source-map-explorer
```
ng add @ngx-builders/analyze
```

apres

```
npm run analyze
```
