



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
                console.log(pageNum);
                console.log(response);
                getNames(pageNum);
                }
                else{

                    console.log("dom manip");
                }
    })


}

getNames();

console.log(`I'm done ${pageNum}`);

})
