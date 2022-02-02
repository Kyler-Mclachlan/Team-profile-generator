const isolatingStaff = staffData => {
    var htmlCard = ``;
    for (i =0; i<staffData.length; i++ ){
        console.log(staffData[i])
        // console.log('found Engineer',i)
        if (staffData[i].getRole() === 'Manager'){
            console.log('found an Manager');
            htmlCard += managerCard(staffData[i]);
        }
        else if (staffData[i].getRole() === 'Intern'){
            console.log('found an Intern');
            htmlCard += internCard(staffData[i]);
        }
        else if (staffData[i].getRole() === 'Engineer'){
            console.log('found an Engineer');
            htmlCard += engineerCard(staffData[i]);
        }
    }
    return htmlCard;
    // engineerArray = staffData(getElementsByClassName(Engineer));
    console.log(staffData);
    // console.log(staffData.hasOwnProperty(staffData.github));
}

const managerCard = (staffData) => {
    return `
    <section class="genericDiv">
    ${staffData.getName()}
    ${staffData.id}
    ${staffData.email}
    ${staffData.officeNumber}
    </section>`;
}

const internCard = (staffData) => {
    return `
    <section class="genericDiv">
    ${staffData.name}
    ${staffData.id}
    ${staffData.email}
    ${staffData.school}
    </section>`;
}

const engineerCard = (staffData) => {
    return `
    <section class="genericDiv">
    ${staffData.name}
    ${staffData.id}
    ${staffData.email}
    ${staffData.github}
    </section>`;
}

const divOutline = (staffData) => {
    if (staffData.length >= 4){
        for (i=0;i<4;i++){
            isolatingEngineers(staffData); 
            return `
            <section class="genericDiv">

            </section>`;
            
        }
    } 
    else {
        for (i=0; i<staffData.length; i++){
            isolatingEngineers(staffData); 
            return `
            <section class="genericDiv">

            </section>`;
        }  
    }
};

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
      <section id="employee-section-top">${isolatingStaff(staffData)}</section>
      <section id="employee-section-bottom"></section>
    </main>
  </body>
  </html>
  `;
};


module.exports = generateWebpage;