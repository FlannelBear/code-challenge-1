console.log('js');

$(document).ready(setUp);

let totalClicks = 0;


function setUp(){
    $('#generateBtn').on('click', generateBtnHandler);
    $(document).on('click', '#swapBtn', swapBtnHandler);
    $(document).on('click', '#deleteBtn', deleteBtnHandler);
}

function generateBtnHandler(){
    updateClicks();
    appendDiv();
    appendButtons();
}

function appendDiv(){
    $('#divAppend').append(`<div id="genDiv${totalClicks}" class="red"><p>${totalClicks}</p></div>`);
}

function updateClicks(){
    totalClicks++;
    $('#displayClicks').empty();
    $('#displayClicks').append(totalClicks);
}

function appendButtons(){
    $(`#genDiv${totalClicks}`).append(`<button id="swapBtn">Swap</button>
                         <button id="deleteBtn">Delete</button>`);
}

function swapBtnHandler(){
    console.log('swap');
    let parentDiv = $(this).parent();
    if(parentDiv.hasClass('red')){
        parentDiv.removeClass('red');
        parentDiv.addClass('yellow');
    } else {
        parentDiv.removeClass('yellow');
        parentDiv.addClass('red');
    } // end class toggle
}

function deleteBtnHandler(){
    let parentDiv = $(this).parent();
    parentDiv.remove();
}
