# text-avatar
Helper directive for **Ionic 2.0** & **Ionic 3.x** to generate circular avatar, based upon first letter of given text. Color can be generated automatically or can be submitted by the user.


### Outline
* [Installation](#installation)
* [How to use?](#how-to-use)
* [Example](#example)
* [Sample project](#sample-project)
* [Quick Preview](#quick-preview)

### Installation
> #### Ionic CLI version 2.x
> Open up ionic-cli and execute command ```ionic g directive text-avatar``` and copy all three files from **dist** folder to your `your-> cool-app/src/components/text-avatar/` folder.

> #### Ionic CLI version 3.x 
> Open up ionic-cli and execute command ```ionic g directive text-avatar``` and copy all three files from **dist** folder to your `your-> cool-app/src/directives/text-avatar/` folder.

and last thing register our new directive **TextAvatar** in *app.module.ts* file in `declarations` sections of *@NgModule* decorator.

```ts
@NgModule({
  declarations: [
    ...
    TextAvatarDirective],
    ...
    )
```


### How to use?
Just create selector `<text-avatar>` and provide your string in `[text]="text"` property. it will generate nice and cool text based circular avatar. Following example will show its use in `ion-list`


#### Example

```ts
<ion-list>
  <button ion-item *ngFor="let user of users" (click)="presentUserInfoAlert(user)">
    <text-avatar [text]="user.name" [color]="user.color" item-left></text-avatar>
    <h2>{{ user.name || upper}}</h2>
    <p>{{ user.company }} - {{ user.job_title }}</p>
  </button>
</ion-list>
```

### Sample project
Open terminal or command prompt and follow these steps:

* ```cd example-app```
* ```npm i ``` or ```npm install ```
* ```ionic serve ```

### Important Notes
Given example is generated via Ionic CLI 3.0.0 so in older version you might notice that upon generating `ionic g directive text-avatar` the folder title was **components** but now in latest version it is called **directives**

### Quick Preview
![image](https://cloud.githubusercontent.com/assets/6498132/25974351/195fc332-36c2-11e7-801f-6c634c3f97d3.png)

