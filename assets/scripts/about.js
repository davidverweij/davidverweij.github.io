function downloadResume() {
  let today = new Date().toISOString().slice(0, 10);

  SejdaJsApi.htmlToPdf({
    filename: 'Resume Verweij ' + today + '.pdf',

    viewportWidth: 1200,
    pageMarginUnits: 'px',
    pageMargin: 20,
    pageOrientation: 'portrait',
    publishableKey: 'api_public_9fa53768d2c641de956d716c98aaa6ee',
    url: 'https://davidverweij.com/about',
    /* url: window.location.href */
    always: function() {
      // PDF download should have started
      document.getElementById('downloadPdfBtn').innerHTML = "Think before you print!";
    },
    error: function(err) {
      console.error(err);
      alert('Sorry, something went wrong. Please try again or contact me via email.');
    }
  });
};

let today = new Date().toISOString().slice(0, 10);
document.getElementById("datenow").innerHTML = today;
