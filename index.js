// Listen on port 9001
var gith = require('gith').create( 8082 );

var sites = require('sites');

gith({
    repo: 'iojs/iojs-vi'
})
.on( 'all', sites.iojsvi);

gith({
    repo: 'particle4dev/test-git-hook'
})
.on( 'all', sites.test);
