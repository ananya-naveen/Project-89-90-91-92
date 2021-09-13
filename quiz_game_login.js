function adduser(){
    player1_name=document.getElementById("player1_input").value;
    player2_name=document.getElementById("player2_input").value;
    localStorage.setItem("Player_1:",player1_name);
    localStorage.setItem("Player_2:",player2_name);
    window.location="quiz_game_page.html";
}