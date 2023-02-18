
// Triangle



document.getElementById('btn-first').addEventListener('click', function () {


    const firstInput = document.getElementById('first-input')
    const firstInputNumString = firstInput.value;
    const firstInputNum = parseFloat(firstInputNumString);

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
    
    <td>${1}</td>
    <td>${'Triangle'}</td>
    <td>${totalInputNumFixed}cm<sup>2</sup></td>
    <button class="btn btn-sm mt-3 bg-blue-500">Covert to m2</button>
    `
    tableContainer.appendChild(tr);
})



// Rectangle


document.getElementById('btn-second').addEventListener('click', function () {


    const secondInput = document.getElementById('second-input')
    const secondInputNumString = secondInput.value;
    const secondInputNum = parseFloat(secondInputNumString);

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
    
    <td>${1}</td>
    <td>${'Rectangle'}</td>
    <td>${totalInputNumFixed}cm<sup>2</sup></td>
    <button class="btn btn-sm mt-3 bg-blue-500">Covert to m2</button>
    `
    tableContainer.appendChild(tr);
})




// Parallelogram


document.getElementById('btn-third').addEventListener('click', function () {


    const thirdInput = document.getElementById('third-input')
    const thirdInputNumString = thirdInput.value;
    const thirdInputNum = parseFloat(thirdInputNumString);

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
    
    <td>${1}</td>
    <td>${'Parallelogram'}</td>
    <td>${totalInputNumFixed}cm<sup>2</sup></td>
    <button class="btn btn-sm mt-3 bg-blue-500">Covert to m2</button>
    `
    tableContainer.appendChild(tr);
})
