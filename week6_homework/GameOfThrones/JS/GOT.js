



// $(()=>{

//     let fullCharList = [];
//     let flag = false;

//     for(let index = 1; index <=50; index++){
//         $.get(`https://www.anapioficeandfire.com/api/characters?page=${index}&pageSize=10`)
//         .done((charList)=>{

//             // fullCharList.push(charList)
//             fullCharList = [...fullCharList, ...charList]
//         })
//         .done(()=>{
//             console.log(fullCharList);

//             if(fullCharList.length >= 2130 && flag==false){
//                 flag = true;
//                 console.log(fullCharList);
//                 //dom manipulation

//             }
//         })
//     }
//     console.log("outside for loop");

// })

// $(()=>{

//     let pageNum = 0;

//     function getNames(pageNum){

//         if(pageNum >= 3){
//             return "I've completed my loop"
//         }

//         pageNum += 1;

//         return getNames()
//     }
//     console.log(getNames(pageNum));
// })

//return getNames() // pageNum 1

//return getNames() // pageNum 2

//return getNames() // pageNum 3
$(()=>{

    let pageNum = 0;
    let charArr = [];
    function getNames(pageNum){

        $.get('https://anapioficeandfire.com/api/characters/?page=' + pageNum + '&pageSize=50')
        .done((response)=> {

            if(response.length > 0) {

                pageNum += 1;
                charArr = [...charArr, ...response];

                getNames(pageNum);
                }
                else{
//Add ELSE code for alliaces if a name does not come up
                    console.log(charArr);

                    let $listGroupContainer = $('.list-group')

                    let liTags = charArr.map((char)=>{
                        return `<a href="${char.url}" class="list-group-item list-group-item-action">${char.name} <b>Houses</b> ${char.allegiances.length}</a>`
                    })
                    $listGroupContainer.html(liTags.join(' '))
                    
                }
    })


}

getNames(pageNum);

console.log(`I'm done ${pageNum}`);

let $div = $(".list-group");
$div.click((e)=>{
    e.preventDefault();

    console.log(e.target.href);

    $.get(e.target.href)
    .done((detailedCharObj)=>{

        let $modalBody = $('.modal-body');

        let $modalTitle = $('#exampleModalLabel');

        $modalBody.html("");

        $modalTitle.html(detailedCharObj.name)

        //console.log(detailedCharObj.allegiances.length);

        if(detailedCharObj.allegiances.length > 0){
            detailedCharObj.allegiances.forEach((houseUrl)=>{
                $.get(houseUrl)
                .done((houseObj)=>{
                    console.log(houseObj.name);
                    $modalBody.html(`<br>${modalBody.html()}<br>${houseObj.name}`)


                })
            })
        }

        $('#exampleModal').modal('show');

    })//end of done statement
})

})
