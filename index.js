
// Triangle



document.getElementById('btn-first').addEventListener('click', function(){
    
    
    const firstInput = document.getElementById('first-input')
    const firstInputNumString = firstInput.value;
    const firstInputNum =parseFloat(firstInputNumString);

    const firstInput2 = document.getElementById('first-input2')
    const firstInput2NumString = firstInput2.value;
    const firstInput2Num =parseFloat(firstInput2NumString);

    const totalInputNum =0.5 * firstInputNum * firstInput2Num;
    const totalInputNumFixed = totalInputNum.toFixed(2);
       firstInput.value = '';
       firstInput2.value = '';



    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML=`
    
    <td>${1}</td>
    <td>${'Triangle'}</td>
    <td>${totalInputNumFixed}cm<sup>2</sup></td>
    <button class="btn btn-sm mt-3 bg-blue-500">Covert to m2</button>
    `
    tableContainer.appendChild(tr);
})



