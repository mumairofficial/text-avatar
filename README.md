# text-avatar
Helper directive for **Ionic 2.0** & **Ionic 3.x** to generate circular avatar, based upon first letter of given text.


### Outline
* [Installation](#installation)
* [How to use?](#how-to-use)
* [Example](#example)
* [Sample project](#sample-project)
* [Quick Preview](#quick-preview)

### Installation
Open up ionic-cli and execute command ```ionic g directive text-avatar``` and copy all three files from **dist** folder to your `your-cool-app/src/components/text-avatar/` folder.

and last thing register our new directive **TextAvatar** in *app.module.ts* file in `declarations` sections of *@NgModule* decorator.

```ts
@NgModule({
  declarations: [
    ...
    TextAvatar],
    ...
    )
```


### How to use?
Just create selector `<text-avatar>` and provide your string in `[text]="text"` property. it will generate nice and cool text based circular avatar. Following example will show its use in `ion-list`


#### Example

```ts
<ion-list>
  <button ion-item *ngFor="let user of users" (click)="presentUserInfoAlert(user)">
    <text-avatar [text]="user.name" item-left></text-avatar>
    <h2>{{ user.name || upper}}</h2>
    <p>{{ user.company }} - {{ user.job_title }}</p>
  </button>
</ion-list>
```

### Sample project
* ```sh cd example-app ```
* ```sh npm i ``` or ```sh npm install ```
* ```sh ionic serve ```


### Quick Preview
![image](https://cloud.githubusercontent.com/assets/6498132/25268065/c3049e36-2690-11e7-8185-f4cc04d4a47b.png)
