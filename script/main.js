document.querySelector("#btn01").addEventListener("click", () => {
    alert("무등산 상세페이지로 이동합니다!");
    location.href="https://seorak.knps.or.kr/front/portal/visit/visitCourseSubMain.do?parkId=122000&parkNavGb=park&menuNo=7020090"
});
document.querySelector("#btn02").addEventListener("click",() => {
    alert("지리산 상세페이지로 이동합니다!");
    location.href="https://www.knps.or.kr/front/portal/visit/visitCourseSubMain.do?parkId=120100&menuNo=7020100"
});
document.querySelector("#btn03").addEventListener("click",() => {
    alert("덕유산 상세페이지로 이동합니다!");
    location.href="https://www.knps.or.kr/front/portal/visit/visitCourseMain.do?parkId=120800&menuNo=7020089"
});
document.querySelector("#btn04").addEventListener("click",() => {
    alert("광안리 상세페이지로 이동합니다!");
    location.href="https://namu.wiki/w/%EA%B4%91%EC%95%88%EB%A6%AC%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5"
});
document.querySelector("#btn05").addEventListener("click",() => {
    alert("월정리 상세페이지로 이동합니다!");
    location.href="https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500496"
});
document.querySelector("#btn06").addEventListener("click",() => {
    alert("안목해변 상세페이지로 이동합니다!");
    location.href="http://anmokbeach.co.kr/"
});


//모달 창 닫기 버튼
let closeBTN = document.querySelector("#close_modal");
let modalBOX = document.querySelector(".modal")
//console.log(closeBTN);
closeBTN.addEventListener("click",()=>{
    //console.log(modalBOX.style);
    modalBOX.style.display = "none";
});