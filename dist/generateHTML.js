// var topStaffDivEL = document.querySelector('#employee-section-top');
// var bottomStaffDivEL = document.querySelector('#employee-section-bottom');

const divOutline = (staffData) =>{
    return `
    <section class="genericDiv">
    ${staffData[0].name}
  </section>`;
}

const populateStaffTopRow = staff => {
    for (i=0; i<3; i++){
        
    }
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
  <body>
  <header class="container-lg">
  <section class= "row d-flex justify-content-center " id="grad"> 
        <div class="text-light h1 ">
          <!-- Title -->  My Team
        </div>
        <section>
</header>
    <main class="container-lg" id="main">
      <section id="employee-section-top">${divOutline(staffData)}</section>
      <section id="employee-section-bottom"></section>
    </main>
  </body>
  </html>
  `;
};


module.exports = generateWebpage;