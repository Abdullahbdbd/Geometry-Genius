
// BLOG BUTTON

document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'blog.html';
})


// Hover


// function randomColor() {
//     let color = [];
//     for (let i = 0; i < 3; i++) {
//       color.push(Math.floor(Math.random() * 2000));
//     }
//     return 'rgb(' + color.join(', ') + ')';
//   } 
  
//   document.addEventListener("mouseover", function(){
//     document.body.style.backgroundColor = randomColor();
//   });
  


// Triangle


let sirial = 0
document.getElementById('btn-first').addEventListener('click', function () {
      
    
sirial +=1;

    const firstInput = document.getElementById('first-input')
    const firstInputNumString = firstInput.value;
    const firstInputNum = parseFloat(firstInputNumString);
//----------------------------------
if(isNaN(firstInputNum) || firstInputNum < 1){
    alert('Please provide a valid Number')  
}
//-----------------------------------
    const firstInput2 = document.getElementById('first-input2')
    const firstInput2NumString = firstInput2.value;
    const firstInput2Num = parseFloat(firstInput2NumString);

    const totalInputNum = 0.5 * firstInputNum * firstInput2Num;
    const totalInputNumFixed = totalInputNum.toFixed(2);
    firstInput.value = '';
    firstInput2.value = '';


    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML = `
    
    <td>${sirial}</td>
    <td>${'Triangle'}</td>
    <td>${totalInputNumFixed}cm<sup>2</sup></td>
    <button class="btn btn-sm mt-3 bg-blue-500">Covert to m2</button>
    `
    tableContainer.appendChild(tr);
})


// Rectangle


document.getElementById('btn-second').addEventListener('click', function () {

    sirial +=1;
    const secondInput = document.getElementById('second-input')
    const secondInputNumString = secondInput.value;
    const secondInputNum = parseFloat(secondInputNumString);

    if(isNaN(secondInputNum) || secondInputNum < 1){
        alert('Please provide a valid Number')  
    }


    const secondInput2 = document.getElementById('second-input2')
    const secondInput2NumString = secondInput2.value;
    const secondInput2Num = parseFloat(secondInput2NumString);

    const totalInputNum = secondInputNum * secondInput2Num;
    const totalInputNumFixed = totalInputNum.toFixed(2);
    secondInput.value = '';
    secondInput2.value = '';



    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML = `
    
    <td>${sirial}</td>
    <td>${'Rectangle'}</td>
    <td>${totalInputNumFixed}cm<sup>2</sup></td>
    <button class="btn btn-sm mt-3 bg-blue-500">Covert to m2</button>
    `
    tableContainer.appendChild(tr);
})




// Parallelogram


document.getElementById('btn-third').addEventListener('click', function () {
    sirial +=1;

    const thirdInput = document.getElementById('third-input')
    const thirdInputNumString = thirdInput.value;
    const thirdInputNum = parseFloat(thirdInputNumString);


    if(isNaN(thirdInputNum) || thirdInputNum < 1){
        alert('Please provide a valid Number')  
    }

    const thirdInput2 = document.getElementById('third-input2')
    const thirdInput2NumString = thirdInput2.value;
    const thirdInput2Num = parseFloat(thirdInput2NumString);

    const totalInputNum = thirdInputNum * thirdInput2Num;
    const totalInputNumFixed = totalInputNum.toFixed(2);
    thirdInput.value = '';
    thirdInput2.value = '';



    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML = `
    
    <td>${sirial}</td>
    <td>${'Parallelogram'}</td>
    <td>${totalInputNumFixed}cm<sup>2</sup></td>
    <button class="btn btn-sm mt-3 bg-blue-500">Covert to m2</button>
    `
    tableContainer.appendChild(tr);
})



// Rhombus


document.getElementById('btn-fourth').addEventListener('click', function () {
    sirial +=1;

    const fourthInput = document.getElementById('fourth-input')
    const fourthInputNumString = fourthInput.value;
    const fourthInputNum = parseFloat(fourthInputNumString);

    if(isNaN(fourthInputNum) || fourthInputNum < 1){
        alert('Please provide a valid Number')  
    }

    const fourthInput2 = document.getElementById('fourth-input2')
    const fourthInput2NumString = fourthInput2.value;
    const fourthInput2Num = parseFloat(fourthInput2NumString);

    const totalInputNum = 0.5 * fourthInputNum * fourthInput2Num;
    const totalInputNumFixed = totalInputNum.toFixed(2);
    fourthInput.value = '';
    fourthInput2.value = '';



    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML = `
    
    <td>${sirial}</td>
    <td>${'Rhombus'}</td>
    <td>${totalInputNumFixed}cm<sup>2</sup></td>
    <button class="btn btn-sm mt-3 bg-blue-500">Covert to m2</button>
    `
    tableContainer.appendChild(tr);
})


// Pentagon


document.getElementById('btn-fifth').addEventListener('click', function () {
    sirial +=1;

    const fifthInput = document.getElementById('fifth-input')
    const fifthInputNumString = fifthInput.value;
    const fifthInputNum = parseFloat(fifthInputNumString);

    if(isNaN(fifthInputNum) || fifthInputNum < 1){
        alert('Please provide a valid Number')  
    }

    const fifthInput2 = document.getElementById('fifth-input2')
    const fifthInput2NumString = fifthInput2.value;
    const fifthInput2Num = parseFloat(fifthInput2NumString);

    const totalInputNum = 0.5 * fifthInputNum * fifthInput2Num;
    const totalInputNumFixed = totalInputNum.toFixed(2);
    fifthInput.value = '';
    fifthInput2.value = '';



    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML = `
    
    <td>${sirial}</td>
    <td>${'Pentagon'}</td>
    <td>${totalInputNumFixed}cm<sup>2</sup></td>
    <button class="btn btn-sm mt-3 bg-blue-500">Covert to m2</button>
    `
    tableContainer.appendChild(tr);
})



// Ellipse


document.getElementById('btn-sixth').addEventListener('click', function () {
    sirial +=1;

    const sixthInput = document.getElementById('sixth-input')
    const sixthInputNumString = sixthInput.value;
    const sixthInputNum = parseFloat(sixthInputNumString);

    if(isNaN(sixthInputNum) || sixthInputNum < 1){
        alert('Please provide a valid Number')  
    }

    const sixthInput2 = document.getElementById('sixth-input2')
    const sixthInput2NumString = sixthInput2.value;
    const sixthInput2Num = parseFloat(sixthInput2NumString);

    const totalInputNum = 3.14 * sixthInputNum * sixthInput2Num;
    const totalInputNumFixed = totalInputNum.toFixed(2);
    sixthInput.value = '';
    sixthInput2.value = '';



    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML = `
    
    <td>${sirial}</td>
    <td>${'Ellipse'}</td>
    <td>${totalInputNumFixed}cm<sup>2</sup></td>
    <button class="btn btn-sm mt-3 bg-blue-500">Covert to m2</button>
    `
    tableContainer.appendChild(tr);
})
