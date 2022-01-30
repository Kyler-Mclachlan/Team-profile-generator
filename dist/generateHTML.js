const populateStaff = staff => {
    return `
    `
}
function generateWebpage(staffData) {
return`
  <!DOCTYPE html>
  <html lang="en">
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./style.css">
      <title>My Team</title>
  </head>
  ${staffData[0]}
  <body>
  <header class="container-lg">
  <section class= "row d-flex justify-content-center mt-5 " id="grad"> 
        <div class="text-light h1 ">
          <!-- Title -->  My Team
        </div>
        <section>
</header>
    <main id="main">
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by </h3>
    </footer>
  </body>
  </html>
  `;
};


module.exports = generateWebpage;