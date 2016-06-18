var exec = require('child_process').exec;
var util = require('util');

var htmlFileName = 'pdf.html', 
    pdfFileName = 'page.pdf';

var child = exec('wkhtmltopdf -s A4 -L 15.05mm -R 19.05mm -T 19.05mm -B 19.05mm ' + htmlFileName + ' page.pdf', function(err, stdout, stderr) {
  if(err) { throw err; }
  util.log(stderr);
});