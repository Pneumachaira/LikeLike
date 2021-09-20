var likeArray = [0, 0, 0];

function addLike1(){
    likeArray[0]++;
    document.querySelector("#postLikes1").innerText=`${likeArray[0]}` + " like(s)";
}

function addLike2(){
    likeArray[1]++;
    document.querySelector("#postLikes2").innerText=`${likeArray[1]}` + " like(s)";
}

function addLike3(){
    likeArray[2]++;
    document.querySelector("#postLikes3").innerText=`${likeArray[2]}` + " like(s)";
}