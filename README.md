# text-avatar
Helper directive for **Ionic Angular 4.x** to generate circular avatar, based upon first letter of given text. Color can be generated automatically or can be submitted by the user.

> For Ionic version 3 and below refer to [text-avatar version 1.0.0](https://github.com/mumairofficial/text-avatar/tree/1.0.0)

### Tested with:
```
@angular/*: 7.x
@ionic/angular: 4.1.0
```

### Outline
* [Installation](#installation)
* [How to use?](#how-to-use)
* [Example](#example)
* [Sample project](#sample-project)
* [Quick Preview](#quick-preview)

### Installation
> #### Ionic CLI version 5.x
> Open up ionic-cli and execute command ```ionic g c text-avatar``` and copy all files from **dist** folder to your `your -> cool-app/src/components/text-avatar/` folder.
>

and last thing register our new directive **TextAvatar** in *app.module.ts* file in `imports` sections of *@NgModule* decorator.

```ts
@NgModule({
  imports: [
    ...
    TextAvatarModule,
    ...
  ],
})
```


### How to use?
Just create selector `<text-avatar>` and provide your string in `[text]="text"` property.
It will generate nice and cool text based circular avatar.
Optionally `[color]="#ff0000"` and/or `[textColor]="#00ff00"` properties can be added
to create an avatar with red background and green text.  
Following example will show its use in `ion-list`


#### Example

```ts
<ion-list>
  <ion-item *ngFor="let user of users" (click)="myClickHandler(user)">
      <ion-avatar slot="start">
        <text-avatar [text]="user.name" [color]="user.color"></text-avatar>
      </ion-avatar>
      
      <ion-label>
        <ion-text>
          <h3>{{ user.name }}</h3>
        </ion-text>

        <p>{{ user.company }} - {{ user.job_title }}</p>
      </ion-label>
    </ion-item>
</ion-list>
```

### Sample project
Open terminal or command prompt and follow these steps:

* ```cd example-app```
* ```npm i ``` or ```npm install ```
* ```ionic serve ```

### Quick Preview
![image](https://cloud.githubusercontent.com/assets/6498132/25974351/195fc332-36c2-11e7-801f-6c634c3f97d3.png)
