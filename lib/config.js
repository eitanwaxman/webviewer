instance.UI.addEventListener(instance.UI.Events.VIEWER_LOADED, function() {
    console.log("config loaded");
    instance.UI.enableFeatures([instance.UI.Feature.ContentEdit]);
})  