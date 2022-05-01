



var FileReader = require('filereader')
  , fileReader = new FileReader()
  ;
 
fileReader.setNodeChunkedEncoding(true || false);
fileReader.readAsDataURL(new File('out.wav'));
 
// non-standard alias of `addEventListener` listening to non-standard `data` event
fileReader.on('data', function (data) {
  console.log("chunkSize:", data.length);
});
 
// `onload` as listener
fileReader.addEventListener('load', function (ev) {
  console.log("dataUrlSize:", ev.target.result.length);
});
 