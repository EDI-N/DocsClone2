window.OneSignal = window.OneSignal || [];
var initOptions = {
  appId: "7b5d5a38-eca8-4bfd-a89b-623c20fbd404",
  subdomainName: 'onesignal-demo',
  autoRegister: true,
  notifyButton: {
    enable: true
  }
};

OneSignal.push(function() {
  OneSignal.init(initOptions);
});