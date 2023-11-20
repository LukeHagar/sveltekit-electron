# SvelteKit-Electron
a Full implementation of an adpater-node built SvelteKit app nested inside an Electron application for desktop use.

## Development
> in the `/SvelteKit-App` folder

With the current implementation, the developer experience is fantastic, 99% of the work being done will be in the SvelteKit app, which has great dev features like HMR.

To begin developing, start the dev server by going to the `/SvelteKit-App` folder

and run the below command:
```
npm run dev
``` 


## Building

### Step 1: SvelteKit
> in the `/SvelteKit-App` folder

When you are happy with the state of your app you can then run the below command 
```
npm run build
```


### Step 1: Electron
> in the `/Electron-App` folder

Once the SvelteKit app is built you can then navigate to the `/Electron-App` folder and run the below command 
```
npm run make
```


## Publishing
> in the `/Electron-App` folder
This implementation utilizes the electron forge project, allowing you to use all their amazing methods for making and publishing distributable.

This is typically done by running the below command while you are in the `/Electron-App` folder

```
npm run publish
```
