document.getElementById('downloadPdfBtn')
    .addEventListener('click', function(e){
      let today = new Date().toISOString().slice(0, 10);

      SejdaJsApi.htmlToPdf({
        filename: 'Resume Verweij ' + today + '.pdf',

        viewportWidth: 1200,
        pageMarginUnits: 'px',
        pageMargin: 20,
        scrollPage: true,
        publishableKey: 'api_public_9fa53768d2c641de956d716c98aaa6ee',
        url: 'https://davidverweij.com/about',
        /* url: window.location.href */
        always: function(){
          // PDF download should have started
        }
      });
    })

let today = new Date().toISOString().slice(0, 10);
document.getElementById("datenow").innerHTML = today;
