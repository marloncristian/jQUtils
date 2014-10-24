jQUtils
=======
Simple browser check for jquery

1 - Get browser version
  var b = $.browser.get();
  console.log(b.name);
  console.log(b.version);

2 - Check for minimal browser version 
    if (!$.browser.checkBrowserVersion([
        { name: 'msie', minVersion: 10 },
        { name: 'chrome', minVersion: 13 },
        { name: 'safari', minVersion: 6 },
        { name: 'opera', minVersion: 12 },
        { name: 'firefox', minVersion: 4 }])) 
    {
        throw 'this functionality is not supported in this browser.';
    }
