var exec = require('child_process').exec;
var util = require('util');

var htmlFileName = 'pdf.html', 
    pdfFileName = 'page.pdf';

var child = exec('wkhtmltopdf -L 5mm -R 5mm ' + htmlFileName + ' page.pdf', function(err, stdout, stderr) {
  if(err) { throw err; }
  util.log(stderr);
});