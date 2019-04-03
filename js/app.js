const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const $pdfCheckbox = $("<label><input type='checkbox'> Allow PDF downloads</label>");


$secureLinks.attr('target', '_blank');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(e){
  // check if checkbox is checked
  // if zero checkboxes are checked
  if ($(':checked').length === 0){
    // prevent download of Documentation
    e.preventDefault();
    // alert the user
    alert('Please check the box to allow PDF download');
  }
  // else allow the download
});

$('#links').append($pdfCheckbox);
