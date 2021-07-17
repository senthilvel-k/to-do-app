# TO-DO APP

A simple, user-friendly To-do App done with React Native

![PicsArt_07-16-06 53 52](https://user-images.githubusercontent.com/86486178/125955155-56b4b807-e36e-4daf-9020-e7366f46bbb5.jpg)


## About this App

Simply create any task with your most important to-dos.
You can mark your to-do list completed or delete it when its done and you can also delete all your work when its done with a single option.

### How to create this app?

Install **React Native** into your pc and setup the environment with Android Studio with the help of https://reactnative.dev/

Use the following command after installing React-Native

```` 
npx react-native init "Your App Name"
````
After initializing your app install the required dependencies. 

The required dependencies of the app are given as a command below

```` 
npm install react-navigation
npm install react-native-vector-icons
npm install react-native-screens
npm install react-native-safe-area-context
npm install react-native-paper
npm install react-native-material-ripple
npm install react-native-gesture-handler
npm install @react-navigation/stack
npm install @react-navigation/native
npm install @react-native-community/masked-view
npm install @react-native-async-storage/async-storage
````
Don't forget to link the assets to your app. Give the following command.
```` 
npx react-native link
```` 

## Details of each screen

### Home Screen

This screen consists of a image, title and a button to navigate to To-do Screen.

When you press the **Go to your work** button, it takes you to the to-do screen.

The ripple effect is also added.

**You can check out the HomeScreen screenrecording in the Output Video folder**.

### To-do List

Input yout text in the text input section and add your work.

You can mark it completed or delete it or uncomplete it with the respective icons.

If you didn't add any text and click the **+** floating icon, it shows an alert screen.

If you click the delete all icon, it will ask your comformation about the process.

Ripple effect is also added in each flatlist.

![Alert Boxes](https://user-images.githubusercontent.com/86486178/125961186-42876098-e905-4c11-8685-7a23947717ce.png)

## Future Work in this App

1. Dark Mode
2. Separate tabs for completed work and starred work

## Required Files

Code of the main app is in _App.js_ file and the code for each screen is in _src/HomeScreen.js_ and _src/Todo.js_

The image added in the mainscreen is given in _src/Todo.png_ 

Output demo videos and screenshots are in _Output/Video_ and _Output/Screenshots_ folder

**The apk file of the app is also given in the _Output/App_ folder**

Link for demo video and files https://drive.google.com/drive/folders/11efP62ZYIjySoEeFPBTd2xE2djcm9ef0?usp=sharing







