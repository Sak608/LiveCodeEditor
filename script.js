const htmlCode = document.getElementById("htmlCode");
   const cssCode = document.getElementById("cssCode");
   const jsCode = document.getElementById("jsCode");
   const output = document.getElementById("output");

   htmlCode.onkeyup = () => run();
   cssCode.onkeyup = () => run();
   jsCode.onkeyup = () => run();

   function run() {
       localStorage.setItem("htmlCode", htmlCode.value);
       localStorage.setItem("cssCode", cssCode.value);
       localStorage.setItem("jsCode", jsCode.value);

       const iframeContent = `
           <html>
               <head>
                   <style>${cssCode.value}</style>
               </head>
               <body>
                   ${htmlCode.value}
                   <script>
                       ${jsCode.value}
                   </script>
               </body>
           </html>`;
       output.srcdoc = iframeContent;
   }

   htmlCode.value = localStorage.getItem("htmlCode") || "";
   cssCode.value = localStorage.getItem("cssCode") || "";
   jsCode.value = localStorage.getItem("jsCode") || "";

   // Run initially to populate the iframe with saved content
   run();