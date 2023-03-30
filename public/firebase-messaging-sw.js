// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.

importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

if (firebase.messaging.isSupported()) {
  // Initialize the Firebase app in the service worker by passing in
  // your app's Firebase config object.
  // https://firebase.google.com/docs/web/setup#config-object
  firebase.initializeApp({
    apiKey: "AIzaSyBvD5Pdw7xPvmgmd9IAIi1cjKuzx6EJDX0",
    authDomain: "dating-demo-c61ce.firebaseapp.com",
    projectId: "dating-demo-c61ce",
    storageBucket: "dating-demo-c61ce.appspot.com",
    messagingSenderId: "200243273967",
    appId: "1:200243273967:web:0b4c048dbee50926d9fb1a",
    measurementId: "G-K50VJ6B578",
  });

  // Retrieve an instance of Firebase Messaging so that it can handle background
  // messages.
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage((payload) => {
    console.log(
      "[firebase-messaging-sw.js] Received background message ",
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: "Background Message body.",
      icon: "/logo.svg",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  });
} else {
}
