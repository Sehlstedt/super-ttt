//Construct game tracking
let g1, g2, g3, g4, g5, g6, g7, g8, g9 = 0;
var b11, b12, b13, b14, b15, b16, b17, b18, b19, b21, b22, b23, b24, b25, b26, b27, b28, b29, b31, b32, b33, b34, b35, b36, b37, b38, b39, b41, b42, b43, b44, b45, b46, b47, b48, b49, b51, b52, b53, b54, b55, b56, b57, b58, b59, b61, b62, b63, b64, b65, b66, b67, b68, b69, b71, b72, b73, b74, b75, b76, b77, b78, b79, b81, b82, b83, b84, b85, b86, b87, b88, b89, b91, b92, b93, b94, b95, b96, b97, b98, b99; 
var b11btn, b12btn, b13btn, b14btn, b15btn, b16btn, b17btn, b18btn, b19btn, b21btn, b22btn, b23btn, b24btn, b25btn, b26btn, b27btn, b28btn, b29btn, b31btn, b32btn, b33btn, b34btn, b35btn, b36btn, b37btn, b38btn, b39btn, b41btn, b42btn, b43btn, b44btn, b45btn, b46btn, b47btn, b48btn, b49btn, b51btn, b52btn, b53btn, b54btn, b55btn, b56btn, b57btn, b58btn, b59btn, b61btn, b62btn, b63btn, b64btn, b65btn, b66btn, b67btn, b68btn, b69btn, b71btn, b72btn, b73btn, b74btn, b75btn, b76btn, b77btn, b78btn, b79btn, b81btn, b82btn, b83btn, b84btn, b85btn, b86btn, b87btn, b88btn, b89btn, b91btn, b92btn, b93btn, b94btn, b95btn, b96btn, b97btn, b98btn, b99btn;

//Checking which games are finished;
function checkGames() {
    
    //Disable g1 tiles
    if (g1 == 1) {
        b11btn.style.backgroundColor = "darkgray"; 
        b12btn.style.backgroundColor = "darkgray"; 
        b13btn.style.backgroundColor = "darkgray"; 
        b21btn.style.backgroundColor = "darkgray";
        b22btn.style.backgroundColor = "darkgray";
        b23btn.style.backgroundColor = "darkgray";
        b31btn.style.backgroundColor = "darkgray";
        b32btn.style.backgroundColor = "darkgray";
        b33btn.style.backgroundColor = "darkgray";
        b11btn.disabled = true;
        b12btn.disabled = true;
        b13btn.disabled = true;
        b21btn.disabled = true;
        b22btn.disabled = true;
        b23btn.disabled = true;
        b31btn.disabled = true;
        b32btn.disabled = true;
        b33btn.disabled = true;
    }
    //Disable g2 tiles
    if (g2 == 1) {
        b14btn.style.backgroundColor = "darkgray";
        b15btn.style.backgroundColor = "darkgray";
        b16btn.style.backgroundColor = "darkgray";
        b24btn.style.backgroundColor = "darkgray";
        b25btn.style.backgroundColor = "darkgray";
        b26btn.style.backgroundColor = "darkgray";
        b34btn.style.backgroundColor = "darkgray";
        b35btn.style.backgroundColor = "darkgray";
        b36btn.style.backgroundColor = "darkgray";
        b14btn.disabled = true;
        b15btn.disabled = true;
        b16btn.disabled = true;
        b24btn.disabled = true;
        b25btn.disabled = true;
        b26btn.disabled = true;
        b34btn.disabled = true;
        b35btn.disabled = true;
        b36btn.disabled = true;
    }
    //Disable g3 tiles
    if (g3 == 1) {
        b17btn.style.backgroundColor = "darkgray";
        b18btn.style.backgroundColor = "darkgray";
        b19btn.style.backgroundColor = "darkgray";
        b27btn.style.backgroundColor = "darkgray";
        b28btn.style.backgroundColor = "darkgray";
        b29btn.style.backgroundColor = "darkgray";
        b37btn.style.backgroundColor = "darkgray";
        b38btn.style.backgroundColor = "darkgray";
        b39btn.style.backgroundColor = "darkgray";
    }
    //Disable g4 tiles
    if (g4 == 1) {
        b41btn.style.backgroundColor = "darkgray";
        b42btn.style.backgroundColor = "darkgray";
        b43btn.style.backgroundColor = "darkgray";
        b51btn.style.backgroundColor = "darkgray";
        b52btn.style.backgroundColor = "darkgray";
        b53btn.style.backgroundColor = "darkgray";
        b61btn.style.backgroundColor = "darkgray";
        b62btn.style.backgroundColor = "darkgray";
        b63btn.style.backgroundColor = "darkgray";
    }
    //Disable g5 tiles
    if (g5 == 1) {
        b44btn.style.backgroundColor = "darkgray";
        b45btn.style.backgroundColor = "darkgray";
        b46btn.style.backgroundColor = "darkgray";
        b54btn.style.backgroundColor = "darkgray";
        b55btn.style.backgroundColor = "darkgray";
        b56btn.style.backgroundColor = "darkgray";
        b64btn.style.backgroundColor = "darkgray";
        b65btn.style.backgroundColor = "darkgray";
        b66btn.style.backgroundColor = "darkgray";
    }
    //Disable g6 tiles
    if (g6 == 1) {
        b47btn.style.backgroundColor = "darkgray";
        b48btn.style.backgroundColor = "darkgray";
        b49btn.style.backgroundColor = "darkgray";
        b57btn.style.backgroundColor = "darkgray";
        b58btn.style.backgroundColor = "darkgray";
        b59btn.style.backgroundColor = "darkgray";
        b67btn.style.backgroundColor = "darkgray";
        b68btn.style.backgroundColor = "darkgray";
        b69btn.style.backgroundColor = "darkgray";
    }
    //Disable g7 tiles
    if (g7 == 1) {
        b71btn.style.backgroundColor = "darkgray";
        b72btn.style.backgroundColor = "darkgray";
        b73btn.style.backgroundColor = "darkgray";
        b81btn.style.backgroundColor = "darkgray";
        b82btn.style.backgroundColor = "darkgray";
        b83btn.style.backgroundColor = "darkgray";
        b91btn.style.backgroundColor = "darkgray";
        b92btn.style.backgroundColor = "darkgray";
        b93btn.style.backgroundColor = "darkgray";
    }
    //Disable g8 tiles
    if (g8 == 1) {
        b74btn.style.backgroundColor = "darkgray";
        b75btn.style.backgroundColor = "darkgray";
        b76btn.style.backgroundColor = "darkgray";
        b84btn.style.backgroundColor = "darkgray";
        b85btn.style.backgroundColor = "darkgray";
        b86btn.style.backgroundColor = "darkgray";
        b94btn.style.backgroundColor = "darkgray";
        b95btn.style.backgroundColor = "darkgray";
        b96btn.style.backgroundColor = "darkgray";
    }
    //Disable g9 tiles
    if (g9 == 1) {
        b77btn.style.backgroundColor = "darkgray";
        b78btn.style.backgroundColor = "darkgray";
        b79btn.style.backgroundColor = "darkgray";
        b87btn.style.backgroundColor = "darkgray";
        b88btn.style.backgroundColor = "darkgray";
        b89btn.style.backgroundColor = "darkgray";
        b97btn.style.backgroundColor = "darkgray";
        b98btn.style.backgroundColor = "darkgray";
        b99btn.style.backgroundColor = "darkgray";
    }
}

// Function called whenever user tab on any box 
function setupDom() { 
  
    // Setting DOM to all boxes or input field 

    b11 = document.getElementById("b11").value;
    b12 = document.getElementById("b12").value;
    b13 = document.getElementById("b13").value;
    b14 = document.getElementById("b14").value;
    b15 = document.getElementById("b15").value;
    b16 = document.getElementById("b16").value;
    b17 = document.getElementById("b17").value;
    b18 = document.getElementById("b18").value;
    b19 = document.getElementById("b19").value;
    
    b21 = document.getElementById("b21").value;
    b22 = document.getElementById("b22").value;
    b23 = document.getElementById("b23").value;
    b24 = document.getElementById("b24").value;
    b25 = document.getElementById("b25").value;
    b26 = document.getElementById("b26").value;
    b27 = document.getElementById("b27").value;
    b28 = document.getElementById("b28").value;
    b29 = document.getElementById("b29").value;
    
    b31 = document.getElementById("b31").value;
    b32 = document.getElementById("b32").value;
    b33 = document.getElementById("b33").value;
    b34 = document.getElementById("b34").value;
    b35 = document.getElementById("b35").value;
    b36 = document.getElementById("b36").value;
    b37 = document.getElementById("b37").value;
    b38 = document.getElementById("b38").value;
    b39 = document.getElementById("b39").value;
    
    b41 = document.getElementById("b41").value;
    b42 = document.getElementById("b42").value;
    b43 = document.getElementById("b43").value;
    b44 = document.getElementById("b44").value;
    b45 = document.getElementById("b45").value;
    b46 = document.getElementById("b46").value;
    b47 = document.getElementById("b47").value;
    b48 = document.getElementById("b48").value;
    b49 = document.getElementById("b49").value;
    
    b51 = document.getElementById("b51").value;
    b52 = document.getElementById("b52").value;
    b53 = document.getElementById("b53").value;
    b54 = document.getElementById("b54").value;
    b55 = document.getElementById("b55").value;
    b56 = document.getElementById("b56").value;
    b57 = document.getElementById("b57").value;
    b58 = document.getElementById("b58").value;
    b59 = document.getElementById("b59").value;

    b61 = document.getElementById("b61").value;
    b62 = document.getElementById("b62").value;
    b63 = document.getElementById("b63").value;
    b64 = document.getElementById("b64").value;
    b65 = document.getElementById("b65").value;
    b66 = document.getElementById("b66").value;
    b67 = document.getElementById("b67").value;
    b68 = document.getElementById("b68").value;
    b69 = document.getElementById("b69").value;

    b71 = document.getElementById("b71").value;
    b72 = document.getElementById("b72").value;
    b73 = document.getElementById("b73").value;
    b74 = document.getElementById("b74").value;
    b75 = document.getElementById("b75").value;
    b76 = document.getElementById("b76").value;
    b77 = document.getElementById("b77").value;
    b78 = document.getElementById("b78").value;
    b79 = document.getElementById("b79").value;

    b81 = document.getElementById("b81").value;
    b82 = document.getElementById("b82").value;
    b83 = document.getElementById("b83").value;
    b84 = document.getElementById("b84").value;
    b85 = document.getElementById("b85").value;
    b86 = document.getElementById("b86").value;
    b87 = document.getElementById("b87").value;
    b88 = document.getElementById("b88").value;
    b89 = document.getElementById("b89").value;

    b91 = document.getElementById("b91").value;
    b92 = document.getElementById("b92").value;
    b93 = document.getElementById("b93").value;
    b94 = document.getElementById("b94").value;
    b95 = document.getElementById("b95").value;
    b96 = document.getElementById("b96").value;
    b97 = document.getElementById("b97").value;
    b98 = document.getElementById("b98").value;
    b99 = document.getElementById("b99").value;


    //Construct Buttons
    b11btn = document.getElementById("b11"); 
    b12btn = document.getElementById("b12"); 
    b13btn = document.getElementById("b13"); 
    b14btn = document.getElementById("b14"); 
    b15btn = document.getElementById("b15"); 
    b16btn = document.getElementById("b16"); 
    b17btn = document.getElementById("b17"); 
    b18btn = document.getElementById("b18"); 
    b19btn = document.getElementById("b19"); 
  
    b21btn = document.getElementById("b21");
    b22btn = document.getElementById("b22");
    b23btn = document.getElementById("b23");
    b24btn = document.getElementById("b24");
    b25btn = document.getElementById("b25");
    b26btn = document.getElementById("b26");
    b27btn = document.getElementById("b27");
    b28btn = document.getElementById("b28");
    b29btn = document.getElementById("b29");
        
    b31btn = document.getElementById("b31");
    b32btn = document.getElementById("b32");
    b33btn = document.getElementById("b33");
    b34btn = document.getElementById("b34");
    b35btn = document.getElementById("b35");
    b36btn = document.getElementById("b36");
    b37btn = document.getElementById("b37");
    b38btn = document.getElementById("b38");
    b39btn = document.getElementById("b39");
        
    b41btn = document.getElementById("b41");
    b42btn = document.getElementById("b42");
    b43btn = document.getElementById("b43");
    b44btn = document.getElementById("b44");
    b45btn = document.getElementById("b45");
    b46btn = document.getElementById("b46");
    b47btn = document.getElementById("b47");
    b48btn = document.getElementById("b48");
    b49btn = document.getElementById("b49");
        
    b51btn = document.getElementById("b51");
    b52btn = document.getElementById("b52");
    b53btn = document.getElementById("b53");
    b54btn = document.getElementById("b54");
    b55btn = document.getElementById("b55");
    b56btn = document.getElementById("b56");
    b57btn = document.getElementById("b57");
    b58btn = document.getElementById("b58");
    b59btn = document.getElementById("b59");
    
    b61btn = document.getElementById("b61");
    b62btn = document.getElementById("b62");
    b63btn = document.getElementById("b63");
    b64btn = document.getElementById("b64");
    b65btn = document.getElementById("b65");
    b66btn = document.getElementById("b66");
    b67btn = document.getElementById("b67");
    b68btn = document.getElementById("b68");
    b69btn = document.getElementById("b69");
    
    b71btn = document.getElementById("b71");
    b72btn = document.getElementById("b72");
    b73btn = document.getElementById("b73");
    b74btn = document.getElementById("b74");
    b75btn = document.getElementById("b75");
    b76btn = document.getElementById("b76");
    b77btn = document.getElementById("b77");
    b78btn = document.getElementById("b78");
    b79btn = document.getElementById("b79");
    
    b81btn = document.getElementById("b81");
    b82btn = document.getElementById("b82");
    b83btn = document.getElementById("b83");
    b84btn = document.getElementById("b84");
    b85btn = document.getElementById("b85");
    b86btn = document.getElementById("b86");
    b87btn = document.getElementById("b87");
    b88btn = document.getElementById("b88");
    b89btn = document.getElementById("b89");
    
    b91btn = document.getElementById("b91");
    b92btn = document.getElementById("b92");
    b93btn = document.getElementById("b93");
    b94btn = document.getElementById("b94");
    b95btn = document.getElementById("b95");
    b96btn = document.getElementById("b96");
    b97btn = document.getElementById("b97");
    b98btn = document.getElementById("b98");
    b99btn = document.getElementById("b99");

    
    b11btn.disabled = false;
    b12btn.disabled = false;
    b13btn.disabled = false;
    b14btn.disabled = false;
    b15btn.disabled = false;
    b16btn.disabled = false;
    b17btn.disabled = false;
    b18btn.disabled = false;
    b19btn.disabled = false;
    b21btn.disabled = false;
    b22btn.disabled = false;
    b23btn.disabled = false;
    b24btn.disabled = false;
    b25btn.disabled = false;
    b26btn.disabled = false;
    b27btn.disabled = false;
    b28btn.disabled = false;
    b29btn.disabled = false;
    b31btn.disabled = false;
    b32btn.disabled = false;
    b33btn.disabled = false;
    b34btn.disabled = false;
    b35btn.disabled = false;
    b36btn.disabled = false;
    b37btn.disabled = false;
    b38btn.disabled = false;
    b39btn.disabled = false;
    b41btn.disabled = false;
    b42btn.disabled = false;
    b43btn.disabled = false;
    b44btn.disabled = false;
    b45btn.disabled = false;
    b46btn.disabled = false;
    b47btn.disabled = false;
    b48btn.disabled = false;
    b49btn.disabled = false;
    b51btn.disabled = false;
    b52btn.disabled = false;
    b53btn.disabled = false;
    b54btn.disabled = false;
    b55btn.disabled = false;
    b56btn.disabled = false;
    b57btn.disabled = false;
    b58btn.disabled = false;
    b59btn.disabled = false;
    b61btn.disabled = false;
    b62btn.disabled = false;
    b63btn.disabled = false;
    b64btn.disabled = false;
    b65btn.disabled = false;
    b66btn.disabled = false;
    b67btn.disabled = false;
    b68btn.disabled = false;
    b69btn.disabled = false;
    b71btn.disabled = false;
    b72btn.disabled = false;
    b73btn.disabled = false;
    b74btn.disabled = false;
    b75btn.disabled = false;
    b76btn.disabled = false;
    b77btn.disabled = false;
    b78btn.disabled = false;
    b79btn.disabled = false;
    b81btn.disabled = false;
    b82btn.disabled = false;
    b83btn.disabled = false;
    b84btn.disabled = false;
    b85btn.disabled = false;
    b86btn.disabled = false;
    b87btn.disabled = false;
    b88btn.disabled = false;
    b89btn.disabled = false;
    b91btn.disabled = false;
    b92btn.disabled = false;
    b93btn.disabled = false;
    b94btn.disabled = false;
    b95btn.disabled = false;
    b96btn.disabled = false;
    b97btn.disabled = false;
    b98btn.disabled = false;
    b99btn.disabled = false;




    //Game 1 Win Checks
    //Game 1 Checking "X" player
         if ((b11 == 'X') && (b12 == 'X') && (b13 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        //Mark winning symbols with red
        b11btn.style.color = "red";
        b12btn.style.color = "red";
        b13btn.style.color = "red";
        g1 = 1;

    }
    else if ((b11 == 'X') && (b21 == 'X') && (b31 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";
        
        //Mark winning symbols with red
        b11btn.style.color = "red"; 
        b21btn.style.color = "red"; 
        b31btn.style.color = "red";
        g1 = 1;
        
    }
    else if ((b31 == 'X') && (b32 == 'X') && (b33 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
  
        g1 = 1;
        //Disable remaining cells in game            
        b11btn.disabled = true; 
        b12btn.disabled = true; 
        b13btn.disabled = true; 
        b21btn.disabled = true; 
        b22btn.disabled = true; 
        b23btn.disabled = true;

        //Mark winning symbols with red  
        b31btn.style.color = "red"; 
        b32btn.style.color = "red"; 
        b33btn.style.color = "red"; 
    }
    else if ((b13 == 'X') && (b23 == 'X') && (b33 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g1 = 1;
        //Disable remaining cells in game
        b11btn.disabled = true; 
        b12btn.disabled = true; 
        b21btn.disabled = true; 
        b22btn.disabled = true; 
        b31btn.disabled = true; 
        b32btn.disabled = true; 

        //Mark winning symbols with red  
        b13btn.style.color = "red"; 
        b23btn.style.color = "red"; 
        b33btn.style.color = "red"; 
    }
    else if ((b11 == 'X') && (b22 == 'X') && (b33 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g1 = 1;
        //Disable remaining cells in game
        b12btn.disabled = true; 
        b13btn.disabled = true; 
        b21btn.disabled = true; 
        b23btn.disabled = true; 
        b31btn.disabled = true; 
        b32btn.disabled = true;

        //Mark winning symbols with red  
        b11btn.style.color = "red"; 
        b22btn.style.color = "red"; 
        b33btn.style.color = "red"; 
    }
    else if ((b13 == 'X') && (b22 == 'X') && (b31 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g1 = 1;
        //Disable remaining cells in game
        b11btn.disabled = true; 
        b12btn.disabled = true; 
        b21btn.disabled = true; 
        b23btn.disabled = true; 
        b32btn.disabled = true; 
        b33btn.disabled = true; 

        //Mark winning symbols with red
        b13btn.style.color = "red"; 
        b22btn.style.color = "red"; 
        b31btn.style.color = "red"; 
    } 
    else if ((b12 == 'X') && (b22 == 'X') && (b32 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g1 = 1;
        //Disable remaining cells in game
        b11btn.disabled = true; 
        b13btn.disabled = true; 
        b21btn.disabled = true; 
        b23btn.disabled = true; 
        b31btn.disabled = true; 
        b33btn.disabled = true; 

        //Mark winning symbols with red
        b12btn.style.color = "red"; 
        b22btn.style.color = "red"; 
        b32btn.style.color = "red"; 
    } 
    else if ((b21 == 'X') && (b22 == 'X') && (b23 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";

        g1 = 1;
        //Disable remaining cells in game
        b11btn.disabled = true; 
        b12btn.disabled = true; 
        b13btn.disabled = true; 
        b31btn.disabled = true; 
        b32btn.disabled = true; 
        b33btn.disabled = true; 

        //Mark winning symbols with red
        b21btn.style.color = "red"; 
        b22btn.style.color = "red"; 
        b23btn.style.color = "red"; 
    }
    //Game 1 Checking "0" player 
    else if ((b11 == '0') && (b12 == '0') && (b13 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        
        g1 = 1;
        //Disable remaining cells in game
        b21btn.disabled = true; 
        b22btn.disabled = true; 
        b23btn.disabled = true; 
        b31btn.disabled = true; 
        b32btn.disabled = true; 
        b33btn.disabled = true; 
    
        //Mark winning symbols with red
        b11btn.style.color = "red"; 
        b12btn.style.color = "red"; 
        b13btn.style.color = "red";
    } 
    else if ((b11 == '0') && (b21 == '0') && (b31 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won";

        g1 = 1;
        //Disable remaining cells in game
        b12btn.disabled = true; 
        b13btn.disabled = true; 
        b22btn.disabled = true; 
        b23btn.disabled = true; 
        b32btn.disabled = true; 
        b33btn.disabled = true; 
    
        //Mark winning symbols with red
        b11btn.style.color = "red"; 
        b21btn.style.color = "red"; 
        b31btn.style.color = "red";
    } 
    else if ((b31 == '0') && (b32 == '0') && (b33 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g1 = 1;
        //Disable remaining cells in game
        b11btn.disabled = true; 
        b12btn.disabled = true; 
        b13btn.disabled = true; 
        b21btn.disabled = true; 
        b22btn.disabled = true; 
        b23btn.disabled = true; 
    
        //Mark winning symbols with red
        b31btn.style.color = "red"; 
        b32btn.style.color = "red"; 
        b33btn.style.color = "red";
    } 
    else if ((b13 == '0') && (b23 == '0') && (b33 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
            
        g1 = 1;
        //Disable remaining cells in game
        b11btn.disabled = true; 
        b12btn.disabled = true; 
        b21btn.disabled = true; 
        b22btn.disabled = true; 
        b31btn.disabled = true; 
        b32btn.disabled = true; 
    
        //Mark winning symbols with red
        b13btn.style.color = "red"; 
        b23btn.style.color = "red"; 
        b33btn.style.color = "red";
    } 
    else if ((b11 == '0') && (b22 == '0') && (b33 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g1 = 1;
        //Disable remaining cells in game
        b12btn.disabled = true;
        b13btn.disabled = true;
        b21btn.disabled = true;
        b23btn.disabled = true;
        b31btn.disabled = true;
        b32btn.disabled = true;
    
        //Mark winning symbols with red
        b11btn.style.color = "red";
        b22btn.style.color = "red";
        b33btn.style.color = "red";
    } 
    else if ((b13 == '0') && (b22 == '0') && (b31 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
            
        g1 = 1;
        //Disable remaining cells in game
        b11btn.disabled = true;
        b12btn.disabled = true;
        b21btn.disabled = true;
        b23btn.disabled = true;
        b32btn.disabled = true;
        b33btn.disabled = true;
    
        //Mark winning symbols with red
        b13btn.style.color = "red";
        b22btn.style.color = "red";
        b31btn.style.color = "red";
    } 
    else if ((b12 == '0') && (b22 == '0') && (b32 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g1 = 1;
        //Disable remaining cells in game
        b11btn.disabled = true;
        b13btn.disabled = true;
        b21btn.disabled = true;
        b23btn.disabled = true;
        b31btn.disabled = true;
        b33btn.disabled = true;
    
        //Mark winning symbols with red
        b12btn.style.color = "red";
        b22btn.style.color = "red";
        b32btn.style.color = "red";
    }
    else if ((b21 == '0') && (b22 == '0') && (b23 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g1 = 1;
        //Disable remaining cells in game
        b11btn.disabled = true;
        b12btn.disabled = true;
        b13btn.disabled = true;
        b31btn.disabled = true;
        b32btn.disabled = true;
        b33btn.disabled = true;
    
        //Mark winning symbols with red
        b21btn.style.color = "red";
        b22btn.style.color = "red";
        b23btn.style.color = "red";
    } 
    //Game 1 Checking for Tie 
    else if ((b11 == 'X' || b11 == '0') && (b12 == 'X' || b12 == '0') && (b13 == 'X' || b13 == '0') && (b21 == 'X' || b21 == '0') && (b22 == 'X' || b22 == '0') && (b23 == 'X' || b23 == '0') && (b31 == 'X' || b31 == '0') && (b32 == 'X' || b32 == '0') && (b33 == 'X' || b33 == '0')) {
        g1 = 1; 
    } 
    //Game 1 Printing Results
    else {
         
        if (flag == 1) { 
            document.getElementById('print') 
                .innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print') 
                .innerHTML = "Player 0 Turn"; 
        } 
    }


    //Game 2 Win Checks
    //Game 2 Checking "X" player
         if ((b14 == 'X') && (b15 == 'X') && (b16 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g2 = 1;
        //Disable remaining cells in game
        b14btn.disabled = true;
        b15btn.disabled = true;
        b16btn.disabled = true;
        b24btn.disabled = true;
        b25btn.disabled = true;
        b26btn.disabled = true;
        b34btn.disabled = true;
        b35btn.disabled = true;
        b36btn.disabled = true;

        //Mark winning symbols with red
        b14btn.style.color = "red";
        b15btn.style.color = "red";
        b16btn.style.color = "red";

    }
    else if ((b14 == 'X') && (b24 == 'X') && (b34 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";
        
        g2 = 1;
        //Disable remaining cells in game
        b15btn.disabled = true; 
        b16btn.disabled = true; 
        b25btn.disabled = true; 
        b26btn.disabled = true; 
        b35btn.disabled = true; 
        b36btn.disabled = true;

        //Mark winning symbols with red
        b14btn.style.color = "red"; 
        b24btn.style.color = "red"; 
        b34btn.style.color = "red";
 
    }
    else if ((b34 == 'X') && (b35 == 'X') && (b36 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
  
        g2 = 1;
        //Disable remaining cells in game            
        b14btn.disabled = true; 
        b15btn.disabled = true; 
        b16btn.disabled = true; 
        b24btn.disabled = true; 
        b25btn.disabled = true; 
        b26btn.disabled = true;

        //Mark winning symbols with red  
        b34btn.style.color = "red"; 
        b35btn.style.color = "red"; 
        b36btn.style.color = "red"; 
    }
    else if ((b16 == 'X') && (b26 == 'X') && (b36 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g2 = 1;
        //Disable remaining cells in game
        b14btn.disabled = true; 
        b15btn.disabled = true; 
        b24btn.disabled = true; 
        b25btn.disabled = true; 
        b34btn.disabled = true; 
        b35btn.disabled = true; 

        //Mark winning symbols with red  
        b16btn.style.color = "red"; 
        b26btn.style.color = "red"; 
        b36btn.style.color = "red"; 
    }
    else if ((b14 == 'X') && (b25 == 'X') && (b36 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g2 = 1;
        //Disable remaining cells in game
        b15btn.disabled = true; 
        b16btn.disabled = true; 
        b24btn.disabled = true; 
        b26btn.disabled = true; 
        b34btn.disabled = true; 
        b35btn.disabled = true;

        //Mark winning symbols with red  
        b14btn.style.color = "red"; 
        b25btn.style.color = "red"; 
        b36btn.style.color = "red"; 
    }
    else if ((b16 == 'X') && (b25 == 'X') && (b34 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g2 = 1;
        //Disable remaining cells in game
        b14btn.disabled = true; 
        b15btn.disabled = true; 
        b24btn.disabled = true; 
        b26btn.disabled = true; 
        b35btn.disabled = true; 
        b36btn.disabled = true; 

        //Mark winning symbols with red
        b16btn.style.color = "red"; 
        b25btn.style.color = "red"; 
        b34btn.style.color = "red"; 
    } 
    else if ((b15 == 'X') && (b25 == 'X') && (b35 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g2 = 1;
        //Disable remaining cells in game
        b14btn.disabled = true; 
        b16btn.disabled = true; 
        b24btn.disabled = true; 
        b26btn.disabled = true; 
        b34btn.disabled = true; 
        b36btn.disabled = true; 

        //Mark winning symbols with red
        b15btn.style.color = "red"; 
        b25btn.style.color = "red"; 
        b35btn.style.color = "red"; 
    } 
    else if ((b24 == 'X') && (b25 == 'X') && (b26 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";

        g2 = 1;
        //Disable remaining cells in game
        b14btn.disabled = true; 
        b15btn.disabled = true; 
        b16btn.disabled = true; 
        b34btn.disabled = true; 
        b35btn.disabled = true; 
        b36btn.disabled = true; 

        //Mark winning symbols with red
        b24btn.style.color = "red"; 
        b25btn.style.color = "red"; 
        b26btn.style.color = "red"; 
    }
    //Game 2 Checking "0" player 
    else if ((b14 == '0') && (b15 == '0') && (b16 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
        
        g2 = 1;
        //Disable remaining cells in game
        b24btn.disabled = true; 
        b25btn.disabled = true; 
        b26btn.disabled = true; 
        b34btn.disabled = true; 
        b35btn.disabled = true; 
        b36btn.disabled = true; 
    
        //Mark winning symbols with red
        b14btn.style.color = "red"; 
        b15btn.style.color = "red"; 
        b16btn.style.color = "red";
    } 
    else if ((b14 == '0') && (b24 == '0') && (b34 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won";

        g2 = 1;
        //Disable remaining cells in game
        b15btn.disabled = true; 
        b16btn.disabled = true; 
        b25btn.disabled = true; 
        b26btn.disabled = true; 
        b35btn.disabled = true; 
        b36btn.disabled = true; 
    
        //Mark winning symbols with red
        b14btn.style.color = "red"; 
        b24btn.style.color = "red"; 
        b34btn.style.color = "red";
    } 
    else if ((b34 == '0') && (b35 == '0') && (b36 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g2 = 1;
        //Disable remaining cells in game
        b14btn.disabled = true; 
        b15btn.disabled = true; 
        b16btn.disabled = true; 
        b24btn.disabled = true; 
        b25btn.disabled = true; 
        b26btn.disabled = true; 
    
        //Mark winning symbols with red
        b31btn.style.color = "red"; 
        b32btn.style.color = "red"; 
        b33btn.style.color = "red";
    } 
    else if ((b16 == '0') && (b26 == '0') && (b36 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
            
        g2 = 1;
        //Disable remaining cells in game
        b14btn.disabled = true; 
        b15btn.disabled = true; 
        b24btn.disabled = true; 
        b25btn.disabled = true; 
        b34btn.disabled = true; 
        b35btn.disabled = true; 
    
        //Mark winning symbols with red
        b16btn.style.color = "red"; 
        b26btn.style.color = "red"; 
        b36btn.style.color = "red";
    } 
    else if ((b14 == '0') && (b25 == '0') && (b36 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g2 = 1;
        //Disable remaining cells in game
        b15btn.disabled = true;
        b16btn.disabled = true;
        b24btn.disabled = true;
        b26btn.disabled = true;
        b34btn.disabled = true;
        b35btn.disabled = true;
    
        //Mark winning symbols with red
        b14btn.style.color = "red";
        b25btn.style.color = "red";
        b36btn.style.color = "red";
    } 
    else if ((b16 == '0') && (b25 == '0') && (b34 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
            
        g2 = 1;
        //Disable remaining cells in game
        b14btn.disabled = true;
        b15btn.disabled = true;
        b24btn.disabled = true;
        b26btn.disabled = true;
        b35btn.disabled = true;
        b36btn.disabled = true;
    
        //Mark winning symbols with red
        b16btn.style.color = "red";
        b25btn.style.color = "red";
        b34btn.style.color = "red";
    } 
    else if ((b15 == '0') && (b25 == '0') && (b35 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g2 = 1;
        //Disable remaining cells in game
        b14btn.disabled = true;
        b16btn.disabled = true;
        b24btn.disabled = true;
        b26btn.disabled = true;
        b34btn.disabled = true;
        b36btn.disabled = true;
    
        //Mark winning symbols with red
        b15btn.style.color = "red";
        b25btn.style.color = "red";
        b35btn.style.color = "red";
    }
    else if ((b24 == '0') && (b25 == '0') && (b26 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g2 = 1;
        //Disable remaining cells in game
        b14btn.disabled = true;
        b15btn.disabled = true;
        b16btn.disabled = true;
        b34btn.disabled = true;
        b35btn.disabled = true;
        b36btn.disabled = true;
    
        //Mark winning symbols with red
        b24btn.style.color = "red";
        b25btn.style.color = "red";
        b26btn.style.color = "red";
    } 
    //Game 2 Checking for Tie 
    else if ((b14 == 'X' || b14 == '0') && (b15 == 'X' || b15 == '0') && (b16 == 'X' || b16 == '0') && (b24 == 'X' || b24 == '0') && (b25 == 'X' || b25 == '0') && (b26 == 'X' || b26 == '0') && (b34 == 'X' || b34 == '0') && (b35 == 'X' || b35 == '0') && (b36 == 'X' || b36 == '0')) {
        g2 = 1; 
    } 
    //Game 2 Printing Results
    else {
         
        if (flag == 1) { 
            document.getElementById('print') 
                .innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print') 
                .innerHTML = "Player 0 Turn"; 
        } 
    }


    //Game 3 Win Checksprint
    //Game 3 Checking "X" player
         if ((b17 == 'X') && (b18 == 'X') && (b19 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
            
        g3 = 1;
        //Disable remaining cells in game
        b27btn.disabled = true;
        b28btn.disabled = true;
        b29btn.disabled = true;
        b37btn.disabled = true;
        b38btn.disabled = true;
        b39btn.disabled = true;

        //Mark winning symbols with red
        b17btn.style.color = "red";
        b18btn.style.color = "red";
        b19btn.style.color = "red";
    }
    else if ((b17 == 'X') && (b27 == 'X') && (b37 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";
  
        g3 = 1;
        //Disable remaining cells in game
        b18btn.disabled = true; 
        b19btn.disabled = true; 
        b28btn.disabled = true; 
        b29btn.disabled = true; 
        b38btn.disabled = true; 
        b39btn.disabled = true;

        //Mark winning symbols with red
        b17btn.style.color = "red"; 
        b27btn.style.color = "red"; 
        b37btn.style.color = "red";
    }
    else if ((b37 == 'X') && (b38 == 'X') && (b39 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g3 = 1;
        //Disable remaining cells in game            
        b17btn.disabled = true; 
        b18btn.disabled = true; 
        b19btn.disabled = true; 
        b27btn.disabled = true; 
        b28btn.disabled = true; 
        b29btn.disabled = true;

        //Mark winning symbols with red  
        b37btn.style.color = "red"; 
        b38btn.style.color = "red"; 
        b39btn.style.color = "red";
    }
    else if ((b19 == 'X') && (b29 == 'X') && (b39 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g3 = 1;
        //Disable remaining cells in game
        b17btn.disabled = true; 
        b18btn.disabled = true; 
        b27btn.disabled = true; 
        b28btn.disabled = true; 
        b37btn.disabled = true; 
        b38btn.disabled = true; 

        //Mark winning symbols with red  
        b19btn.style.color = "red"; 
        b29btn.style.color = "red"; 
        b39btn.style.color = "red"; 
    }
    else if ((b17 == 'X') && (b28 == 'X') && (b39 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g3 = 1;
        //Disable remaining cells in game
        b18btn.disabled = true; 
        b19btn.disabled = true; 
        b27btn.disabled = true; 
        b29btn.disabled = true; 
        b37btn.disabled = true; 
        b38btn.disabled = true;

        //Mark winning symbols with red  
        b17btn.style.color = "red"; 
        b28btn.style.color = "red"; 
        b39btn.style.color = "red"; 
    }
    else if ((b19 == 'X') && (b28 == 'X') && (b37 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g3 = 1;
        //Disable remaining cells in game
        b17btn.disabled = true; 
        b18btn.disabled = true; 
        b27btn.disabled = true; 
        b29btn.disabled = true; 
        b38btn.disabled = true; 
        b39btn.disabled = true; 

        //Mark winning symbols with red
        b19btn.style.color = "red"; 
        b28btn.style.color = "red"; 
        b37btn.style.color = "red"; 
    } 
    else if ((b18 == 'X') && (b28 == 'X') && (b38 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g3 = 1;
        //Disable remaining cells in game
        b17btn.disabled = true; 
        b19btn.disabled = true; 
        b27btn.disabled = true; 
        b29btn.disabled = true; 
        b37btn.disabled = true; 
        b39btn.disabled = true; 

        //Mark winning symbols with red
        b18btn.style.color = "red";
        b28btn.style.color = "red";
        b38btn.style.color = "red";
    } 
    else if ((b27 == 'X') && (b28 == 'X') && (b29 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";

        g3 = 1;
        //Disable remaining cells in game
        b17btn.disabled = true; 
        b18btn.disabled = true; 
        b19btn.disabled = true; 
        b37btn.disabled = true; 
        b38btn.disabled = true; 
        b39btn.disabled = true; 

        //Mark winning symbols with red
        b27btn.style.color = "red"; 
        b28btn.style.color = "red"; 
        b29btn.style.color = "red"; 
    }
    //Game 3 Checking "0" player 
    else if ((b17 == '0') && (b18 == '0') && (b19 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
    
        g3 = 1;
        //Disable remaining cells in game
        b27btn.disabled = true; 
        b28btn.disabled = true; 
        b29btn.disabled = true; 
        b37btn.disabled = true; 
        b38btn.disabled = true; 
        b39btn.disabled = true; 
        
        //Mark winning symbols with red
        b17btn.style.color = "red"; 
        b18btn.style.color = "red"; 
        b19btn.style.color = "red";
    } 
    else if ((b17 == '0') && (b27 == '0') && (b37 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won";

        g3 = 1;
        //Disable remaining cells in game
        b18btn.disabled = true; 
        b19btn.disabled = true; 
        b28btn.disabled = true; 
        b29btn.disabled = true; 
        b38btn.disabled = true; 
        b39btn.disabled = true; 
 
        //Mark winning symbols with red
        b17btn.style.color = "red"; 
        b27btn.style.color = "red"; 
        b37btn.style.color = "red";
    } 
    else if ((b37 == '0') && (b38 == '0') && (b39 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g3 = 1;
        //Disable remaining cells in game
        b17btn.disabled = true; 
        b18btn.disabled = true; 
        b19btn.disabled = true; 
        b27btn.disabled = true; 
        b28btn.disabled = true; 
        b29btn.disabled = true; 
 
        //Mark winning symbols with red
        b37btn.style.color = "red"; 
        b38btn.style.color = "red"; 
        b39btn.style.color = "red";
    } 
    else if ((b19 == '0') && (b29 == '0') && (b39 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g3 = 1;
        //Disable remaining cells in game
        b17btn.disabled = true; 
        b18btn.disabled = true; 
        b27btn.disabled = true; 
        b28btn.disabled = true; 
        b37btn.disabled = true; 
        b38btn.disabled = true; 
 
        //Mark winning symbols with red
        b19btn.style.color = "red"; 
        b29btn.style.color = "red"; 
        b39btn.style.color = "red";
    } 
    else if ((b17 == '0') && (b28 == '0') && (b39 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g3 = 1;
        //Disable remaining cells in game
        b18btn.disabled = true;
        b19btn.disabled = true;
        b27btn.disabled = true;
        b29btn.disabled = true;
        b37btn.disabled = true;
        b38btn.disabled = true;
 
        //Mark winning symbols with red
        b17btn.style.color = "red";
        b28btn.style.color = "red";
        b39btn.style.color = "red";
    } 
    else if ((b19 == '0') && (b28 == '0') && (b37 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
            
        g3 = 1;
        //Disable remaining cells in game
        b17btn.disabled = true;
        b18btn.disabled = true;
        b27btn.disabled = true;
        b37btn.disabled = true;
        b38btn.disabled = true;
        b39btn.disabled = true;
 
        //Mark winning symbols with red
        b19btn.style.color = "red";
        b28btn.style.color = "red";
        b37btn.style.color = "red";
    } 
    else if ((b18 == '0') && (b28 == '0') && (b38 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g3 = 1;
        //Disable remaining cells in game
        b17btn.disabled = true;
        b19btn.disabled = true;
        b27btn.disabled = true;
        b29btn.disabled = true;
        b37btn.disabled = true;
        b39btn.disabled = true;
 
        //Mark winning symbols with red
        b18btn.style.color = "red";
        b28btn.style.color = "red";
        b38btn.style.color = "red";
    }
    else if ((b27 == '0') && (b28 == '0') && (b29 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g3 = 1;
        //Disable remaining cells in game
        b17btn.disabled = true;
        b18btn.disabled = true;
        b19btn.disabled = true;
        b37btn.disabled = true;
        b38btn.disabled = true;
        b39btn.disabled = true;
 
        //Mark winning symbols with red
        b27btn.style.color = "red";
        b28btn.style.color = "red";
        b29btn.style.color = "red";
    }
    //Game 3 Checking for Tie 
    else if ((b17 == 'X' || b17 == '0') && (b18 == 'X' || b18 == '0') && (b19 == 'X' || b19 == '0') && (b27 == 'X' || b27 == '0') && (b28 == 'X' || b28 == '0') && (b29 == 'X' || b29 == '0') && (b37 == 'X' || b37 == '0') && (b38 == 'X' || b38 == '0') && (b39 == 'X' || b39 == '0')) {
        g3 = 1; 
    }
    //Game 3 Printing Results
    else {
        if (flag == 1) { 
            document.getElementById('print').innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print').innerHTML = "Player 0 Turn"; 
        } 
    }


    //Game 4 Win Checksprint
    //Game 4 Checking "X" player
         if ((b41 == 'X') && (b42 == 'X') && (b43 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
            
        g4 = 1;
        //Disable remaining cells in game
        b51btn.disabled = true;
        b52btn.disabled = true;
        b53btn.disabled = true;
        b61btn.disabled = true;
        b62btn.disabled = true;
        b63btn.disabled = true;

        //Mark winning symbols with red
        b41btn.style.color = "red";
        b42btn.style.color = "red";
        b43btn.style.color = "red";
    }
    else if ((b41 == 'X') && (b51 == 'X') && (b61 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";
  
        g4 = 1;
        //Disable remaining cells in game
        b42btn.disabled = true; 
        b43btn.disabled = true; 
        b52btn.disabled = true; 
        b53btn.disabled = true; 
        b62btn.disabled = true; 
        b63btn.disabled = true;

        //Mark winning symbols with red
        b41btn.style.color = "red"; 
        b51btn.style.color = "red"; 
        b61btn.style.color = "red";
    }
    else if ((b61 == 'X') && (b62 == 'X') && (b63 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g4 = 1;
        //Disable remaining cells in game            
        b41btn.disabled = true; 
        b42btn.disabled = true; 
        b43btn.disabled = true; 
        b51btn.disabled = true; 
        b52btn.disabled = true; 
        b53btn.disabled = true;

        //Mark winning symbols with red  
        b61btn.style.color = "red"; 
        b62btn.style.color = "red"; 
        b63btn.style.color = "red";
    }
    else if ((b43 == 'X') && (b53 == 'X') && (b63 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g4 = 1;
        //Disable remaining cells in game
        b41btn.disabled = true; 
        b42btn.disabled = true; 
        b51btn.disabled = true; 
        b52btn.disabled = true; 
        b61btn.disabled = true; 
        b62btn.disabled = true; 

        //Mark winning symbols with red  
        b43btn.style.color = "red"; 
        b53btn.style.color = "red"; 
        b63btn.style.color = "red"; 
    }
    else if ((b41 == 'X') && (b52 == 'X') && (b63 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g4 = 1;
        //Disable remaining cells in game
        b42btn.disabled = true; 
        b43btn.disabled = true; 
        b51btn.disabled = true; 
        b53btn.disabled = true; 
        b61btn.disabled = true; 
        b62btn.disabled = true;

        //Mark winning symbols with red  
        b41btn.style.color = "red"; 
        b52btn.style.color = "red"; 
        b63btn.style.color = "red"; 
    }
    else if ((b43 == 'X') && (b52 == 'X') && (b61 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g4 = 1;
        //Disable remaining cells in game
        b41btn.disabled = true; 
        b42btn.disabled = true; 
        b51btn.disabled = true; 
        b53btn.disabled = true; 
        b62btn.disabled = true; 
        b63btn.disabled = true; 

        //Mark winning symbols with red
        b43btn.style.color = "red"; 
        b52btn.style.color = "red"; 
        b61btn.style.color = "red"; 
    } 
    else if ((b42 == 'X') && (b52 == 'X') && (b62 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g4 = 1;
        //Disable remaining cells in game
        b41btn.disabled = true; 
        b43btn.disabled = true; 
        b51btn.disabled = true; 
        b53btn.disabled = true; 
        b61btn.disabled = true; 
        b63btn.disabled = true; 

        //Mark winning symbols with red
        b42btn.style.color = "red";
        b52btn.style.color = "red";
        b62btn.style.color = "red";
    } 
    else if ((b51 == 'X') && (b52 == 'X') && (b53 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";

        g4 = 1;
        //Disable remaining cells in game
        b41btn.disabled = true; 
        b42btn.disabled = true; 
        b43btn.disabled = true; 
        b61btn.disabled = true; 
        b62btn.disabled = true; 
        b63btn.disabled = true; 

        //Mark winning symbols with red
        b51btn.style.color = "red"; 
        b52btn.style.color = "red"; 
        b53btn.style.color = "red"; 
    }
    //Game 4 Checking "0" player 
    else if ((b41 == '0') && (b42 == '0') && (b43 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
    
        g4 = 1;
        //Disable remaining cells in game
        b51btn.disabled = true; 
        b52btn.disabled = true; 
        b53btn.disabled = true; 
        b61btn.disabled = true; 
        b62btn.disabled = true; 
        b63btn.disabled = true; 
        
        //Mark winning symbols with red
        b41btn.style.color = "red"; 
        b42btn.style.color = "red"; 
        b43btn.style.color = "red";
    } 
    else if ((b41 == '0') && (b51 == '0') && (b61 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won";

        g4 = 1;
        //Disable remaining cells in game
        b42btn.disabled = true; 
        b43btn.disabled = true; 
        b52btn.disabled = true; 
        b53btn.disabled = true; 
        b62btn.disabled = true; 
        b63btn.disabled = true; 
 
        //Mark winning symbols with red
        b41btn.style.color = "red"; 
        b51btn.style.color = "red"; 
        b61btn.style.color = "red";
    } 
    else if ((b61 == '0') && (b62 == '0') && (b63 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g4 = 1;
        //Disable remaining cells in game
        b41btn.disabled = true; 
        b42btn.disabled = true; 
        b43btn.disabled = true; 
        b51btn.disabled = true; 
        b52btn.disabled = true; 
        b53btn.disabled = true; 
 
        //Mark winning symbols with red
        b61btn.style.color = "red"; 
        b62btn.style.color = "red"; 
        b63btn.style.color = "red";
    } 
    else if ((b43 == '0') && (b53 == '0') && (b63 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g4 = 1;
        //Disable remaining cells in game
        b41btn.disabled = true; 
        b42btn.disabled = true; 
        b51btn.disabled = true; 
        b52btn.disabled = true; 
        b61btn.disabled = true; 
        b62btn.disabled = true; 
 
        //Mark winning symbols with red
        b43btn.style.color = "red"; 
        b53btn.style.color = "red"; 
        b63btn.style.color = "red";
    } 
    else if ((b41 == '0') && (b52 == '0') && (b63 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g4 = 1;
        //Disable remaining cells in game
        b42btn.disabled = true;
        b43btn.disabled = true;
        b51btn.disabled = true;
        b53btn.disabled = true;
        b61btn.disabled = true;
        b62btn.disabled = true;
 
        //Mark winning symbols with red
        b41btn.style.color = "red";
        b52btn.style.color = "red";
        b63btn.style.color = "red";
    } 
    else if ((b43 == '0') && (b52 == '0') && (b61 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
            
        g4 = 1;
        //Disable remaining cells in game
        b41btn.disabled = true;
        b42btn.disabled = true;
        b51btn.disabled = true;
        b61btn.disabled = true;
        b62btn.disabled = true;
        b63btn.disabled = true;
 
        //Mark winning symbols with red
        b43btn.style.color = "red";
        b52btn.style.color = "red";
        b61btn.style.color = "red";
    } 
    else if ((b42 == '0') && (b52 == '0') && (b62 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g4 = 1;
        //Disable remaining cells in game
        b41btn.disabled = true;
        b43btn.disabled = true;
        b51btn.disabled = true;
        b53btn.disabled = true;
        b61btn.disabled = true;
        b63btn.disabled = true;
 
        //Mark winning symbols with red
        b42btn.style.color = "red";
        b52btn.style.color = "red";
        b62btn.style.color = "red";
    }
    else if ((b51 == '0') && (b52 == '0') && (b53 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g4 = 1;
        //Disable remaining cells in game
        b41btn.disabled = true;
        b42btn.disabled = true;
        b43btn.disabled = true;
        b61btn.disabled = true;
        b62btn.disabled = true;
        b63btn.disabled = true;
 
        //Mark winning symbols with red
        b51btn.style.color = "red";
        b52btn.style.color = "red";
        b53btn.style.color = "red";
    }
    //Game 4 Checking for Tie 
    else if ((b41 == 'X' || b41 == '0') && (b42 == 'X' || b42 == '0') && (b43 == 'X' || b43 == '0') && (b51 == 'X' || b51 == '0') && (b52 == 'X' || b52 == '0') && (b53 == 'X' || b53 == '0') && (b61 == 'X' || b61 == '0') && (b62 == 'X' || b62 == '0') && (b63 == 'X' || b63 == '0')) {
        g4 = 1;
    }
    //Game 4 Printing Results
    else {
        if (flag == 1) { 
            document.getElementById('print').innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print').innerHTML = "Player 0 Turn"; 
        } 
    }  


    //Game 5 Win Checksprint
    //Game 5 Checking "X" player
         if ((b44 == 'X') && (b45 == 'X') && (b46 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
            
        g5 = 1;
        //Disable remaining cells in game
        b54btn.disabled = true;
        b55btn.disabled = true;
        b56btn.disabled = true;
        b64btn.disabled = true;
        b65btn.disabled = true;
        b66btn.disabled = true;

        //Mark winning symbols with red
        b44btn.style.color = "red";
        b45btn.style.color = "red";
        b46btn.style.color = "red";
    }
    else if ((b44 == 'X') && (b54 == 'X') && (b64 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";
  
        g5 = 1;
        //Disable remaining cells in game
        b45btn.disabled = true; 
        b46btn.disabled = true; 
        b55btn.disabled = true; 
        b56btn.disabled = true; 
        b65btn.disabled = true; 
        b66btn.disabled = true;

        //Mark winning symbols with red
        b44btn.style.color = "red"; 
        b54btn.style.color = "red"; 
        b64btn.style.color = "red";
    }
    else if ((b64 == 'X') && (b65 == 'X') && (b66 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g5 = 1;
        //Disable remaining cells in game
        b44btn.disabled = true; 
        b45btn.disabled = true; 
        b46btn.disabled = true; 
        b54btn.disabled = true; 
        b55btn.disabled = true; 
        b56btn.disabled = true;

        //Mark winning symbols with red  
        b64btn.style.color = "red"; 
        b65btn.style.color = "red"; 
        b66btn.style.color = "red";
    }
    else if ((b46 == 'X') && (b56 == 'X') && (b66 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g5 = 1;
        //Disable remaining cells in game
        b44btn.disabled = true; 
        b45btn.disabled = true; 
        b54btn.disabled = true; 
        b55btn.disabled = true; 
        b64btn.disabled = true; 
        b65btn.disabled = true; 

        //Mark winning symbols with red  
        b46btn.style.color = "red"; 
        b56btn.style.color = "red"; 
        b66btn.style.color = "red"; 
    }
    else if ((b44 == 'X') && (b55 == 'X') && (b66 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g5 = 1;
        //Disable remaining cells in game
        b45btn.disabled = true; 
        b46btn.disabled = true; 
        b54btn.disabled = true; 
        b56btn.disabled = true; 
        b64btn.disabled = true; 
        b65btn.disabled = true;

        //Mark winning symbols with red  
        b44btn.style.color = "red"; 
        b55btn.style.color = "red"; 
        b66btn.style.color = "red"; 
    }
    else if ((b46 == 'X') && (b55 == 'X') && (b64 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g5 = 1;
        //Disable remaining cells in game
        b44btn.disabled = true; 
        b45btn.disabled = true; 
        b54btn.disabled = true; 
        b56btn.disabled = true; 
        b65btn.disabled = true; 
        b66btn.disabled = true; 

        //Mark winning symbols with red
        b46btn.style.color = "red"; 
        b55btn.style.color = "red"; 
        b64btn.style.color = "red"; 
    } 
    else if ((b45 == 'X') && (b55 == 'X') && (b65 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g5 = 1;
        //Disable remaining cells in game
        b44btn.disabled = true; 
        b46btn.disabled = true; 
        b54btn.disabled = true; 
        b56btn.disabled = true; 
        b64btn.disabled = true; 
        b66btn.disabled = true; 

        //Mark winning symbols with red
        b45btn.style.color = "red";
        b55btn.style.color = "red";
        b65btn.style.color = "red";
    } 
    else if ((b54 == 'X') && (b55 == 'X') && (b56 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";

        g5 = 1;
        //Disable remaining cells in game
        b44btn.disabled = true; 
        b45btn.disabled = true; 
        b46btn.disabled = true; 
        b64btn.disabled = true; 
        b65btn.disabled = true; 
        b66btn.disabled = true; 

        //Mark winning symbols with red
        b54btn.style.color = "red"; 
        b55btn.style.color = "red"; 
        b56btn.style.color = "red"; 
    }
    //Game 5 Checking "0" player 
    else if ((b44 == '0') && (b45 == '0') && (b46 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
    
        g5 = 1;
        //Disable remaining cells in game
        b54btn.disabled = true; 
        b55btn.disabled = true; 
        b56btn.disabled = true; 
        b64btn.disabled = true; 
        b65btn.disabled = true; 
        b66btn.disabled = true; 
        
        //Mark winning symbols with red
        b44btn.style.color = "red"; 
        b45btn.style.color = "red"; 
        b46btn.style.color = "red";
    } 
    else if ((b44 == '0') && (b54 == '0') && (b64 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won";

        g5 = 1;
        //Disable remaining cells in game
        b45btn.disabled = true; 
        b46btn.disabled = true; 
        b55btn.disabled = true; 
        b56btn.disabled = true; 
        b65btn.disabled = true; 
        b66btn.disabled = true; 
 
        //Mark winning symbols with red
        b44btn.style.color = "red"; 
        b54btn.style.color = "red"; 
        b64btn.style.color = "red";
    } 
    else if ((b64 == '0') && (b65 == '0') && (b66 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g5 = 1;
        //Disable remaining cells in game
        b44btn.disabled = true; 
        b45btn.disabled = true; 
        b46btn.disabled = true; 
        b54btn.disabled = true; 
        b55btn.disabled = true; 
        b56btn.disabled = true; 
 
        //Mark winning symbols with red
        b64btn.style.color = "red"; 
        b65btn.style.color = "red"; 
        b66btn.style.color = "red";
    } 
    else if ((b46 == '0') && (b56 == '0') && (b66 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g5 = 1;
        //Disable remaining cells in game
        b44btn.disabled = true; 
        b45btn.disabled = true; 
        b54btn.disabled = true; 
        b55btn.disabled = true; 
        b64btn.disabled = true; 
        b65btn.disabled = true; 
 
        //Mark winning symbols with red
        b46btn.style.color = "red"; 
        b56btn.style.color = "red"; 
        b66btn.style.color = "red";
    } 
    else if ((b44 == '0') && (b55 == '0') && (b66 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g5 = 1;
        //Disable remaining cells in game
        b45btn.disabled = true;
        b46btn.disabled = true;
        b54btn.disabled = true;
        b56btn.disabled = true;
        b64btn.disabled = true;
        b65btn.disabled = true;
 
        //Mark winning symbols with red
        b44btn.style.color = "red";
        b55btn.style.color = "red";
        b66btn.style.color = "red";
    } 
    else if ((b46 == '0') && (b55 == '0') && (b64 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
            
        g5 = 1;
        //Disable remaining cells in game
        b44btn.disabled = true;
        b45btn.disabled = true;
        b54btn.disabled = true;
        b64btn.disabled = true;
        b65btn.disabled = true;
        b66btn.disabled = true;
 
        //Mark winning symbols with red
        b46btn.style.color = "red";
        b55btn.style.color = "red";
        b64btn.style.color = "red";
    } 
    else if ((b45 == '0') && (b55 == '0') && (b65 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g5 = 1;
        //Disable remaining cells in game
        b44btn.disabled = true;
        b46btn.disabled = true;
        b54btn.disabled = true;
        b56btn.disabled = true;
        b64btn.disabled = true;
        b66btn.disabled = true;
 
        //Mark winning symbols with red
        b45btn.style.color = "red";
        b55btn.style.color = "red";
        b65btn.style.color = "red";
    }
    else if ((b54 == '0') && (b55 == '0') && (b56 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g5 = 1;
        //Disable remaining cells in game
        b44btn.disabled = true;
        b45btn.disabled = true;
        b46btn.disabled = true;
        b64btn.disabled = true;
        b65btn.disabled = true;
        b66btn.disabled = true;
 
        //Mark winning symbols with red
        b54btn.style.color = "red";
        b55btn.style.color = "red";
        b56btn.style.color = "red";
    }
    //Game 5 Checking for Tie 
    else if ((b44 == 'X' || b44 == '0') && (b45 == 'X' || b45 == '0') && (b46 == 'X' || b46 == '0') && (b54 == 'X' || b54 == '0') && (b55 == 'X' || b55 == '0') && (b56 == 'X' || b56 == '0') && (b64 == 'X' || b64 == '0') && (b65 == 'X' || b65 == '0') && (b66 == 'X' || b66 == '0')) {
        g5 = 1;
    }
    //Game 5 Printing Results
    else {
        if (flag == 1) { 
            document.getElementById('print').innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print').innerHTML = "Player 0 Turn"; 
        } 
    }


    //Game 6 Win Checksprint
    //Game 6 Checking "X" player
         if ((b47 == 'X') && (b48 == 'X') && (b49 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
            
        g6 = 1;
        //Disable remaining cells in game
        b57btn.disabled = true;
        b58btn.disabled = true;
        b59btn.disabled = true;
        b67btn.disabled = true;
        b68btn.disabled = true;
        b69btn.disabled = true;

        //Mark winning symbols with red
        b47btn.style.color = "red";
        b48btn.style.color = "red";
        b49btn.style.color = "red";
    }
    else if ((b47 == 'X') && (b57 == 'X') && (b67 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";
  
        g6 = 1;
        //Disable remaining cells in game
        b48btn.disabled = true; 
        b49btn.disabled = true; 
        b58btn.disabled = true; 
        b59btn.disabled = true; 
        b68btn.disabled = true; 
        b69btn.disabled = true;

        //Mark winning symbols with red
        b47btn.style.color = "red"; 
        b57btn.style.color = "red"; 
        b67btn.style.color = "red";
    }
    else if ((b67 == 'X') && (b68 == 'X') && (b69 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g6 = 1;
        //Disable remaining cells in game
        b47btn.disabled = true; 
        b48btn.disabled = true; 
        b49btn.disabled = true; 
        b57btn.disabled = true; 
        b58btn.disabled = true; 
        b59btn.disabled = true;

        //Mark winning symbols with red  
        b67btn.style.color = "red"; 
        b68btn.style.color = "red"; 
        b69btn.style.color = "red";
    }
    else if ((b49 == 'X') && (b59 == 'X') && (b69 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g6 = 1;
        //Disable remaining cells in game
        b47btn.disabled = true; 
        b48btn.disabled = true; 
        b57btn.disabled = true; 
        b58btn.disabled = true; 
        b67btn.disabled = true; 
        b68btn.disabled = true; 

        //Mark winning symbols with red  
        b49btn.style.color = "red"; 
        b59btn.style.color = "red"; 
        b69btn.style.color = "red"; 
    }
    else if ((b47 == 'X') && (b58 == 'X') && (b69 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g6 = 1;
        //Disable remaining cells in game
        b48btn.disabled = true; 
        b49btn.disabled = true; 
        b57btn.disabled = true; 
        b59btn.disabled = true; 
        b67btn.disabled = true; 
        b68btn.disabled = true;

        //Mark winning symbols with red  
        b47btn.style.color = "red"; 
        b58btn.style.color = "red"; 
        b69btn.style.color = "red"; 
    }
    else if ((b49 == 'X') && (b58 == 'X') && (b67 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g6 = 1;
        //Disable remaining cells in game
        b47btn.disabled = true; 
        b48btn.disabled = true; 
        b57btn.disabled = true; 
        b59btn.disabled = true; 
        b68btn.disabled = true; 
        b69btn.disabled = true; 

        //Mark winning symbols with red
        b49btn.style.color = "red"; 
        b58btn.style.color = "red"; 
        b67btn.style.color = "red"; 
    } 
    else if ((b48 == 'X') && (b58 == 'X') && (b68 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g6 = 1;
        //Disable remaining cells in game
        b47btn.disabled = true; 
        b49btn.disabled = true; 
        b57btn.disabled = true; 
        b59btn.disabled = true; 
        b67btn.disabled = true; 
        b69btn.disabled = true; 

        //Mark winning symbols with red
        b48btn.style.color = "red";
        b58btn.style.color = "red";
        b68btn.style.color = "red";
    } 
    else if ((b57 == 'X') && (b58 == 'X') && (b59 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";

        g6 = 1;
        //Disable remaining cells in game
        b47btn.disabled = true; 
        b48btn.disabled = true; 
        b49btn.disabled = true; 
        b67btn.disabled = true; 
        b68btn.disabled = true; 
        b69btn.disabled = true; 

        //Mark winning symbols with red
        b57btn.style.color = "red"; 
        b58btn.style.color = "red"; 
        b59btn.style.color = "red"; 
    }
    //Game 6 Checking "0" player 
    else if ((b47 == '0') && (b48 == '0') && (b49 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
    
        g6 = 1;
        //Disable remaining cells in game
        b57btn.disabled = true; 
        b58btn.disabled = true; 
        b59btn.disabled = true; 
        b67btn.disabled = true; 
        b68btn.disabled = true; 
        b69btn.disabled = true; 
        
        //Mark winning symbols with red
        b47btn.style.color = "red"; 
        b48btn.style.color = "red"; 
        b49btn.style.color = "red";
    } 
    else if ((b47 == '0') && (b57 == '0') && (b67 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won";

        g6 = 1;
        //Disable remaining cells in game
        b48btn.disabled = true; 
        b49btn.disabled = true; 
        b58btn.disabled = true; 
        b59btn.disabled = true; 
        b68btn.disabled = true; 
        b69btn.disabled = true; 
 
        //Mark winning symbols with red
        b47btn.style.color = "red"; 
        b57btn.style.color = "red"; 
        b67btn.style.color = "red";
    } 
    else if ((b67 == '0') && (b68 == '0') && (b69 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g6 = 1;
        //Disable remaining cells in game
        b47btn.disabled = true; 
        b48btn.disabled = true; 
        b49btn.disabled = true; 
        b57btn.disabled = true; 
        b58btn.disabled = true; 
        b59btn.disabled = true; 
 
        //Mark winning symbols with red
        b67btn.style.color = "red"; 
        b68btn.style.color = "red"; 
        b69btn.style.color = "red";
    } 
    else if ((b49 == '0') && (b59 == '0') && (b69 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g6 = 1;
        //Disable remaining cells in game
        b47btn.disabled = true; 
        b48btn.disabled = true; 
        b57btn.disabled = true; 
        b58btn.disabled = true; 
        b67btn.disabled = true; 
        b68btn.disabled = true; 
 
        //Mark winning symbols with red
        b49btn.style.color = "red"; 
        b59btn.style.color = "red"; 
        b69btn.style.color = "red";
    } 
    else if ((b47 == '0') && (b58 == '0') && (b69 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g6 = 1;
        //Disable remaining cells in game
        b48btn.disabled = true;
        b49btn.disabled = true;
        b57btn.disabled = true;
        b59btn.disabled = true;
        b67btn.disabled = true;
        b68btn.disabled = true;
 
        //Mark winning symbols with red
        b47btn.style.color = "red";
        b58btn.style.color = "red";
        b69btn.style.color = "red";
    } 
    else if ((b49 == '0') && (b58 == '0') && (b67 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
            
        g6 = 1;
        //Disable remaining cells in game
        b47btn.disabled = true;
        b48btn.disabled = true;
        b57btn.disabled = true;
        b67btn.disabled = true;
        b68btn.disabled = true;
        b69btn.disabled = true;
 
        //Mark winning symbols with red
        b49btn.style.color = "red";
        b58btn.style.color = "red";
        b67btn.style.color = "red";
    } 
    else if ((b48 == '0') && (b58 == '0') && (b68 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g6 = 1;
        //Disable remaining cells in game
        b47btn.disabled = true;
        b49btn.disabled = true;
        b57btn.disabled = true;
        b59btn.disabled = true;
        b67btn.disabled = true;
        b69btn.disabled = true;
 
        //Mark winning symbols with red
        b48btn.style.color = "red";
        b58btn.style.color = "red";
        b68btn.style.color = "red";
    }
    else if ((b57 == '0') && (b58 == '0') && (b59 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g6 = 1;
        //Disable remaining cells in game
        b47btn.disabled = true;
        b48btn.disabled = true;
        b49btn.disabled = true;
        b67btn.disabled = true;
        b68btn.disabled = true;
        b69btn.disabled = true;
 
        //Mark winning symbols with red
        b57btn.style.color = "red";
        b58btn.style.color = "red";
        b59btn.style.color = "red";
    }
    //Game 6 Checking for Tie 
    else if ((b47 == 'X' || b47 == '0') && (b48 == 'X' || b48 == '0') && (b49 == 'X' || b49 == '0') && (b57 == 'X' || b57 == '0') && (b58 == 'X' || b58 == '0') && (b59 == 'X' || b59 == '0') && (b67 == 'X' || b67 == '0') && (b68 == 'X' || b68 == '0') && (b69 == 'X' || b69 == '0')) {
        g6 = 1;
    }
    //Game 6 Printing Results
    else {
        if (flag == 1) { 
            document.getElementById('print').innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print').innerHTML = "Player 0 Turn"; 
        } 
    }


    //Game 7 Win Checksprint
    //Game 7 Checking "X" player
         if ((b71 == 'X') && (b72 == 'X') && (b73 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
            
        g7 = 1;
        //Disable remaining cells in game
        b81btn.disabled = true;
        b82btn.disabled = true;
        b83btn.disabled = true;
        b91btn.disabled = true;
        b92btn.disabled = true;
        b93btn.disabled = true;

        //Mark winning symbols with red
        b71btn.style.color = "red";
        b72btn.style.color = "red";
        b73btn.style.color = "red";
    }
    else if ((b71 == 'X') && (b81 == 'X') && (b91 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";
  
        g7 = 1;
        //Disable remaining cells in game
        b72btn.disabled = true; 
        b73btn.disabled = true; 
        b82btn.disabled = true; 
        b83btn.disabled = true; 
        b92btn.disabled = true; 
        b93btn.disabled = true;

        //Mark winning symbols with red
        b71btn.style.color = "red"; 
        b81btn.style.color = "red"; 
        b91btn.style.color = "red";
    }
    else if ((b91 == 'X') && (b92 == 'X') && (b93 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g7 = 1;
        //Disable remaining cells in game
        b71btn.disabled = true; 
        b72btn.disabled = true; 
        b73btn.disabled = true; 
        b81btn.disabled = true; 
        b82btn.disabled = true; 
        b83btn.disabled = true;

        //Mark winning symbols with red  
        b91btn.style.color = "red"; 
        b92btn.style.color = "red"; 
        b93btn.style.color = "red";
    }
    else if ((b73 == 'X') && (b83 == 'X') && (b93 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g7 = 1;
        //Disable remaining cells in game
        b71btn.disabled = true; 
        b72btn.disabled = true; 
        b81btn.disabled = true; 
        b82btn.disabled = true; 
        b91btn.disabled = true; 
        b92btn.disabled = true; 

        //Mark winning symbols with red  
        b73btn.style.color = "red"; 
        b83btn.style.color = "red"; 
        b93btn.style.color = "red"; 
    }
    else if ((b71 == 'X') && (b82 == 'X') && (b93 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g7 = 1;
        //Disable remaining cells in game
        b72btn.disabled = true; 
        b73btn.disabled = true; 
        b81btn.disabled = true; 
        b83btn.disabled = true; 
        b91btn.disabled = true; 
        b92btn.disabled = true;

        //Mark winning symbols with red  
        b71btn.style.color = "red"; 
        b82btn.style.color = "red"; 
        b93btn.style.color = "red"; 
    }
    else if ((b73 == 'X') && (b82 == 'X') && (b91 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g7 = 1;
        //Disable remaining cells in game
        b71btn.disabled = true; 
        b72btn.disabled = true; 
        b81btn.disabled = true; 
        b83btn.disabled = true; 
        b92btn.disabled = true; 
        b93btn.disabled = true; 

        //Mark winning symbols with red
        b73btn.style.color = "red"; 
        b82btn.style.color = "red"; 
        b91btn.style.color = "red"; 
    } 
    else if ((b72 == 'X') && (b82 == 'X') && (b92 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g7 = 1;
        //Disable remaining cells in game
        b71btn.disabled = true; 
        b73btn.disabled = true; 
        b81btn.disabled = true; 
        b83btn.disabled = true; 
        b91btn.disabled = true; 
        b93btn.disabled = true; 

        //Mark winning symbols with red
        b72btn.style.color = "red";
        b82btn.style.color = "red";
        b92btn.style.color = "red";
    } 
    else if ((b81 == 'X') && (b82 == 'X') && (b83 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";

        g7 = 1;
        //Disable remaining cells in game
        b71btn.disabled = true; 
        b72btn.disabled = true; 
        b73btn.disabled = true; 
        b91btn.disabled = true; 
        b92btn.disabled = true; 
        b93btn.disabled = true; 

        //Mark winning symbols with red
        b81btn.style.color = "red"; 
        b82btn.style.color = "red"; 
        b83btn.style.color = "red"; 
    }
    //Game 7 Checking "0" player 
    else if ((b71 == '0') && (b72 == '0') && (b73 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
    
        g7 = 1;
        //Disable remaining cells in game
        b81btn.disabled = true; 
        b82btn.disabled = true; 
        b83btn.disabled = true; 
        b91btn.disabled = true; 
        b92btn.disabled = true; 
        b93btn.disabled = true; 
        
        //Mark winning symbols with red
        b71btn.style.color = "red"; 
        b72btn.style.color = "red"; 
        b73btn.style.color = "red";
    } 
    else if ((b71 == '0') && (b81 == '0') && (b91 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won";

        g7 = 1;
        //Disable remaining cells in game
        b72btn.disabled = true; 
        b73btn.disabled = true; 
        b82btn.disabled = true; 
        b83btn.disabled = true; 
        b92btn.disabled = true; 
        b93btn.disabled = true; 
 
        //Mark winning symbols with red
        b71btn.style.color = "red"; 
        b81btn.style.color = "red"; 
        b91btn.style.color = "red";
    } 
    else if ((b91 == '0') && (b92 == '0') && (b93 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g7 = 1;
        //Disable remaining cells in game
        b71btn.disabled = true; 
        b72btn.disabled = true; 
        b73btn.disabled = true; 
        b81btn.disabled = true; 
        b82btn.disabled = true; 
        b83btn.disabled = true; 
 
        //Mark winning symbols with red
        b91btn.style.color = "red"; 
        b92btn.style.color = "red"; 
        b93btn.style.color = "red";
    } 
    else if ((b73 == '0') && (b83 == '0') && (b93 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g7 = 1;
        //Disable remaining cells in game
        b71btn.disabled = true; 
        b72btn.disabled = true; 
        b81btn.disabled = true; 
        b82btn.disabled = true; 
        b91btn.disabled = true; 
        b92btn.disabled = true; 
 
        //Mark winning symbols with red
        b73btn.style.color = "red"; 
        b83btn.style.color = "red"; 
        b93btn.style.color = "red";
    } 
    else if ((b71 == '0') && (b82 == '0') && (b93 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g7 = 1;
        //Disable remaining cells in game
        b72btn.disabled = true;
        b73btn.disabled = true;
        b81btn.disabled = true;
        b83btn.disabled = true;
        b91btn.disabled = true;
        b92btn.disabled = true;
 
        //Mark winning symbols with red
        b71btn.style.color = "red";
        b82btn.style.color = "red";
        b93btn.style.color = "red";
    } 
    else if ((b73 == '0') && (b82 == '0') && (b91 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
            
        g7 = 1;
        //Disable remaining cells in game
        b71btn.disabled = true;
        b72btn.disabled = true;
        b81btn.disabled = true;
        b91btn.disabled = true;
        b92btn.disabled = true;
        b93btn.disabled = true;
 
        //Mark winning symbols with red
        b73btn.style.color = "red";
        b82btn.style.color = "red";
        b91btn.style.color = "red";
    } 
    else if ((b72 == '0') && (b82 == '0') && (b92 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g7 = 1;
        //Disable remaining cells in game
        b71btn.disabled = true;
        b73btn.disabled = true;
        b81btn.disabled = true;
        b83btn.disabled = true;
        b91btn.disabled = true;
        b93btn.disabled = true;
 
        //Mark winning symbols with red
        b72btn.style.color = "red";
        b82btn.style.color = "red";
        b92btn.style.color = "red";
    }
    else if ((b81 == '0') && (b82 == '0') && (b83 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g7 = 1;
        //Disable remaining cells in game
        b71btn.disabled = true;
        b72btn.disabled = true;
        b73btn.disabled = true;
        b91btn.disabled = true;
        b92btn.disabled = true;
        b93btn.disabled = true;
 
        //Mark winning symbols with red
        b81btn.style.color = "red";
        b82btn.style.color = "red";
        b83btn.style.color = "red";
    }
    //Game 7 Checking for Tie 
    else if ((b71 == 'X' || b71 == '0') && (b72 == 'X' || b72 == '0') && (b73 == 'X' || b73 == '0') && (b81 == 'X' || b81 == '0') && (b82 == 'X' || b82 == '0') && (b83 == 'X' || b83 == '0') && (b91 == 'X' || b91 == '0') && (b92 == 'X' || b92 == '0') && (b93 == 'X' || b93 == '0')) {
        g7 = 1;
    }
    //Game 7 Printing Results
    else {
        if (flag == 1) { 
            document.getElementById('print').innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print').innerHTML = "Player 0 Turn"; 
        } 
    }


    //Game 8 Win Checksprint
    //Game 8 Checking "X" player
         if ((b74 == 'X') && (b75 == 'X') && (b76 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
            
        g8 = 1;
        //Disable remaining cells in game
        b84btn.disabled = true;
        b85btn.disabled = true;
        b86btn.disabled = true;
        b94btn.disabled = true;
        b95btn.disabled = true;
        b96btn.disabled = true;

        //Mark winning symbols with red
        b74btn.style.color = "red";
        b75btn.style.color = "red";
        b76btn.style.color = "red";
    }
    else if ((b74 == 'X') && (b84 == 'X') && (b94 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";
  
        g8 = 1;
        //Disable remaining cells in game
        b75btn.disabled = true; 
        b76btn.disabled = true; 
        b85btn.disabled = true; 
        b86btn.disabled = true; 
        b95btn.disabled = true; 
        b96btn.disabled = true;

        //Mark winning symbols with red
        b74btn.style.color = "red"; 
        b84btn.style.color = "red"; 
        b94btn.style.color = "red";
    }
    else if ((b94 == 'X') && (b95 == 'X') && (b96 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g8 = 1;
        //Disable remaining cells in game
        b74btn.disabled = true; 
        b75btn.disabled = true; 
        b76btn.disabled = true; 
        b84btn.disabled = true; 
        b85btn.disabled = true; 
        b86btn.disabled = true;

        //Mark winning symbols with red  
        b94btn.style.color = "red"; 
        b95btn.style.color = "red"; 
        b96btn.style.color = "red";
    }
    else if ((b76 == 'X') && (b86 == 'X') && (b96 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g8 = 1;
        //Disable remaining cells in game
        b74btn.disabled = true; 
        b75btn.disabled = true; 
        b84btn.disabled = true; 
        b85btn.disabled = true; 
        b94btn.disabled = true; 
        b95btn.disabled = true; 

        //Mark winning symbols with red  
        b76btn.style.color = "red"; 
        b86btn.style.color = "red"; 
        b96btn.style.color = "red"; 
    }
    else if ((b74 == 'X') && (b85 == 'X') && (b96 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g8 = 1;
        //Disable remaining cells in game
        b75btn.disabled = true; 
        b76btn.disabled = true; 
        b84btn.disabled = true; 
        b86btn.disabled = true; 
        b94btn.disabled = true; 
        b95btn.disabled = true;

        //Mark winning symbols with red  
        b74btn.style.color = "red"; 
        b85btn.style.color = "red"; 
        b96btn.style.color = "red"; 
    }
    else if ((b76 == 'X') && (b85 == 'X') && (b94 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g8 = 1;
        //Disable remaining cells in game
        b74btn.disabled = true; 
        b75btn.disabled = true; 
        b84btn.disabled = true; 
        b86btn.disabled = true; 
        b95btn.disabled = true; 
        b96btn.disabled = true; 

        //Mark winning symbols with red
        b76btn.style.color = "red"; 
        b85btn.style.color = "red"; 
        b94btn.style.color = "red"; 
    } 
    else if ((b75 == 'X') && (b85 == 'X') && (b95 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g8 = 1;
        //Disable remaining cells in game
        b74btn.disabled = true; 
        b76btn.disabled = true; 
        b84btn.disabled = true; 
        b86btn.disabled = true; 
        b94btn.disabled = true; 
        b96btn.disabled = true; 

        //Mark winning symbols with red
        b75btn.style.color = "red";
        b85btn.style.color = "red";
        b95btn.style.color = "red";
    } 
    else if ((b84 == 'X') && (b85 == 'X') && (b86 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";

        g8 = 1;
        //Disable remaining cells in game
        b74btn.disabled = true; 
        b75btn.disabled = true; 
        b76btn.disabled = true; 
        b94btn.disabled = true; 
        b95btn.disabled = true; 
        b96btn.disabled = true; 

        //Mark winning symbols with red
        b84btn.style.color = "red"; 
        b85btn.style.color = "red"; 
        b86btn.style.color = "red"; 
    }
    //Game 8 Checking "0" player 
    else if ((b74 == '0') && (b75 == '0') && (b76 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
    
        g8 = 1;
        //Disable remaining cells in game
        b84btn.disabled = true; 
        b85btn.disabled = true; 
        b86btn.disabled = true; 
        b94btn.disabled = true; 
        b95btn.disabled = true; 
        b96btn.disabled = true; 
        
        //Mark winning symbols with red
        b74btn.style.color = "red"; 
        b75btn.style.color = "red"; 
        b76btn.style.color = "red";
    } 
    else if ((b74 == '0') && (b84 == '0') && (b94 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won";

        g8 = 1;
        //Disable remaining cells in game
        b75btn.disabled = true; 
        b76btn.disabled = true; 
        b85btn.disabled = true; 
        b86btn.disabled = true; 
        b95btn.disabled = true; 
        b96btn.disabled = true; 
 
        //Mark winning symbols with red
        b74btn.style.color = "red"; 
        b84btn.style.color = "red"; 
        b94btn.style.color = "red";
    } 
    else if ((b94 == '0') && (b95 == '0') && (b96 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g8 = 1;
        //Disable remaining cells in game
        b74btn.disabled = true; 
        b75btn.disabled = true; 
        b76btn.disabled = true; 
        b84btn.disabled = true; 
        b85btn.disabled = true; 
        b86btn.disabled = true; 
 
        //Mark winning symbols with red
        b94btn.style.color = "red"; 
        b95btn.style.color = "red"; 
        b96btn.style.color = "red";
    } 
    else if ((b76 == '0') && (b86 == '0') && (b96 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g8 = 1;
        //Disable remaining cells in game
        b74btn.disabled = true; 
        b75btn.disabled = true; 
        b84btn.disabled = true; 
        b85btn.disabled = true; 
        b94btn.disabled = true; 
        b95btn.disabled = true; 
 
        //Mark winning symbols with red
        b76btn.style.color = "red"; 
        b86btn.style.color = "red"; 
        b96btn.style.color = "red";
    } 
    else if ((b74 == '0') && (b85 == '0') && (b96 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g8 = 1;
        //Disable remaining cells in game
        b75btn.disabled = true;
        b76btn.disabled = true;
        b84btn.disabled = true;
        b86btn.disabled = true;
        b94btn.disabled = true;
        b95btn.disabled = true;
 
        //Mark winning symbols with red
        b74btn.style.color = "red";
        b85btn.style.color = "red";
        b96btn.style.color = "red";
    } 
    else if ((b76 == '0') && (b85 == '0') && (b94 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
            
        g8 = 1;
        //Disable remaining cells in game
        b74btn.disabled = true;
        b75btn.disabled = true;
        b84btn.disabled = true;
        b94btn.disabled = true;
        b95btn.disabled = true;
        b96btn.disabled = true;
 
        //Mark winning symbols with red
        b76btn.style.color = "red";
        b85btn.style.color = "red";
        b94btn.style.color = "red";
    } 
    else if ((b75 == '0') && (b85 == '0') && (b95 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g8 = 1;
        //Disable remaining cells in game
        b74btn.disabled = true;
        b76btn.disabled = true;
        b84btn.disabled = true;
        b86btn.disabled = true;
        b94btn.disabled = true;
        b96btn.disabled = true;
 
        //Mark winning symbols with red
        b75btn.style.color = "red";
        b85btn.style.color = "red";
        b95btn.style.color = "red";
    }
    else if ((b84 == '0') && (b85 == '0') && (b86 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g8 = 1;
        //Disable remaining cells in game
        b74btn.disabled = true;
        b75btn.disabled = true;
        b76btn.disabled = true;
        b94btn.disabled = true;
        b95btn.disabled = true;
        b96btn.disabled = true;
 
        //Mark winning symbols with red
        b84btn.style.color = "red";
        b85btn.style.color = "red";
        b86btn.style.color = "red";
    }
    //Game 8 Checking for Tie 
    else if ((b74 == 'X' || b74 == '0') && (b75 == 'X' || b75 == '0') && (b76 == 'X' || b76 == '0') && (b84 == 'X' || b84 == '0') && (b85 == 'X' || b85 == '0') && (b86 == 'X' || b86 == '0') && (b94 == 'X' || b94 == '0') && (b95 == 'X' || b95 == '0') && (b96 == 'X' || b96 == '0')) {
        g8 = 1;
    }
    //Game 8 Printing Results
    else {
        if (flag == 1) { 
            document.getElementById('print').innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print').innerHTML = "Player 0 Turn"; 
        } 
    }


    //Game 9 Win Checksprint
    //Game 9 Checking "X" player
         if ((b77 == 'X') && (b78 == 'X') && (b79 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
            
        g9 = 1;
        //Disable remaining cells in game
        b87btn.disabled = true;
        b88btn.disabled = true;
        b89btn.disabled = true;
        b97btn.disabled = true;
        b98btn.disabled = true;
        b99btn.disabled = true;

        //Mark winning symbols with red
        b77btn.style.color = "red";
        b78btn.style.color = "red";
        b79btn.style.color = "red";
    }
    else if ((b77 == 'X') && (b87 == 'X') && (b97 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";
  
        g9 = 1;
        //Disable remaining cells in game
        b78btn.disabled = true; 
        b79btn.disabled = true; 
        b88btn.disabled = true; 
        b89btn.disabled = true; 
        b98btn.disabled = true; 
        b99btn.disabled = true;

        //Mark winning symbols with red
        b77btn.style.color = "red"; 
        b87btn.style.color = "red"; 
        b97btn.style.color = "red";
    }
    else if ((b97 == 'X') && (b98 == 'X') && (b99 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g9 = 1;
        //Disable remaining cells in game
        b77btn.disabled = true; 
        b78btn.disabled = true; 
        b79btn.disabled = true; 
        b87btn.disabled = true; 
        b88btn.disabled = true; 
        b89btn.disabled = true;

        //Mark winning symbols with red  
        b97btn.style.color = "red"; 
        b98btn.style.color = "red"; 
        b99btn.style.color = "red";
    }
    else if ((b79 == 'X') && (b89 == 'X') && (b99 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 

        g9 = 1;
        //Disable remaining cells in game
        b77btn.disabled = true; 
        b78btn.disabled = true; 
        b87btn.disabled = true; 
        b88btn.disabled = true; 
        b97btn.disabled = true; 
        b98btn.disabled = true; 

        //Mark winning symbols with red  
        b79btn.style.color = "red"; 
        b89btn.style.color = "red"; 
        b99btn.style.color = "red"; 
    }
    else if ((b77 == 'X') && (b88 == 'X') && (b99 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g9 = 1;
        //Disable remaining cells in game
        b78btn.disabled = true; 
        b79btn.disabled = true; 
        b87btn.disabled = true; 
        b89btn.disabled = true; 
        b97btn.disabled = true; 
        b98btn.disabled = true;

        //Mark winning symbols with red  
        b77btn.style.color = "red"; 
        b88btn.style.color = "red"; 
        b99btn.style.color = "red"; 
    }
    else if ((b79 == 'X') && (b88 == 'X') && (b97 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g9 = 1;
        //Disable remaining cells in game
        b77btn.disabled = true; 
        b78btn.disabled = true; 
        b87btn.disabled = true; 
        b89btn.disabled = true; 
        b98btn.disabled = true; 
        b99btn.disabled = true; 

        //Mark winning symbols with red
        b79btn.style.color = "red"; 
        b88btn.style.color = "red"; 
        b97btn.style.color = "red"; 
    } 
    else if ((b78 == 'X') && (b88 == 'X') && (b98 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
        
        g9 = 1;
        //Disable remaining cells in game
        b77btn.disabled = true; 
        b79btn.disabled = true; 
        b87btn.disabled = true; 
        b89btn.disabled = true; 
        b97btn.disabled = true; 
        b99btn.disabled = true; 

        //Mark winning symbols with red
        b78btn.style.color = "red";
        b88btn.style.color = "red";
        b98btn.style.color = "red";
    } 
    else if ((b87 == 'X') && (b88 == 'X') && (b89 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won";

        g9 = 1;
        //Disable remaining cells in game
        b77btn.disabled = true; 
        b78btn.disabled = true; 
        b79btn.disabled = true; 
        b97btn.disabled = true; 
        b98btn.disabled = true; 
        b99btn.disabled = true; 

        //Mark winning symbols with red
        b87btn.style.color = "red"; 
        b88btn.style.color = "red"; 
        b89btn.style.color = "red"; 
    }
    //Game 9 Checking "0" player 
    else if ((b77 == '0') && (b78 == '0') && (b79 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won";
    
        g9 = 1;
        //Disable remaining cells in game
        b87btn.disabled = true; 
        b88btn.disabled = true; 
        b89btn.disabled = true; 
        b97btn.disabled = true; 
        b98btn.disabled = true; 
        b99btn.disabled = true; 
        
        //Mark winning symbols with red
        b77btn.style.color = "red"; 
        b78btn.style.color = "red"; 
        b79btn.style.color = "red";
    } 
    else if ((b77 == '0') && (b87 == '0') && (b97 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won";

        g9 = 1;
        //Disable remaining cells in game
        b78btn.disabled = true; 
        b79btn.disabled = true; 
        b88btn.disabled = true; 
        b89btn.disabled = true; 
        b98btn.disabled = true; 
        b99btn.disabled = true; 
 
        //Mark winning symbols with red
        b77btn.style.color = "red"; 
        b87btn.style.color = "red"; 
        b97btn.style.color = "red";
    } 
    else if ((b97 == '0') && (b98 == '0') && (b99 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g9 = 1;
        //Disable remaining cells in game
        b77btn.disabled = true; 
        b78btn.disabled = true; 
        b79btn.disabled = true; 
        b87btn.disabled = true; 
        b88btn.disabled = true; 
        b89btn.disabled = true; 
 
        //Mark winning symbols with red
        b97btn.style.color = "red"; 
        b98btn.style.color = "red"; 
        b99btn.style.color = "red";
    } 
    else if ((b79 == '0') && (b89 == '0') && (b99 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g9 = 1;
        //Disable remaining cells in game
        b77btn.disabled = true; 
        b78btn.disabled = true; 
        b87btn.disabled = true; 
        b88btn.disabled = true; 
        b97btn.disabled = true; 
        b98btn.disabled = true; 
 
        //Mark winning symbols with red
        b79btn.style.color = "red"; 
        b89btn.style.color = "red"; 
        b99btn.style.color = "red";
    } 
    else if ((b77 == '0') && (b88 == '0') && (b99 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 

        g9 = 1;
        //Disable remaining cells in game
        b78btn.disabled = true;
        b79btn.disabled = true;
        b87btn.disabled = true;
        b89btn.disabled = true;
        b97btn.disabled = true;
        b98btn.disabled = true;
 
        //Mark winning symbols with red
        b77btn.style.color = "red";
        b88btn.style.color = "red";
        b99btn.style.color = "red";
    } 
    else if ((b79 == '0') && (b88 == '0') && (b97 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
            
        g9 = 1;
        //Disable remaining cells in game
        b77btn.disabled = true;
        b78btn.disabled = true;
        b87btn.disabled = true;
        b97btn.disabled = true;
        b98btn.disabled = true;
        b99btn.disabled = true;
 
        //Mark winning symbols with red
        b79btn.style.color = "red";
        b88btn.style.color = "red";
        b97btn.style.color = "red";
    } 
    else if ((b78 == '0') && (b88 == '0') && (b98 == '0')) { 
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g9 = 1;
        //Disable remaining cells in game
        b77btn.disabled = true;
        b79btn.disabled = true;
        b87btn.disabled = true;
        b89btn.disabled = true;
        b97btn.disabled = true;
        b99btn.disabled = true;
 
        //Mark winning symbols with red
        b78btn.style.color = "red";
        b88btn.style.color = "red";
        b98btn.style.color = "red";
    }
    else if ((b87 == '0') && (b88 == '0') && (b89 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won"; 
        
        g9 = 1;
        //Disable remaining cells in game
        b77btn.disabled = true;
        b78btn.disabled = true;
        b79btn.disabled = true;
        b97btn.disabled = true;
        b98btn.disabled = true;
        b99btn.disabled = true;
 
        //Mark winning symbols with red
        b87btn.style.color = "red";
        b88btn.style.color = "red";
        b89btn.style.color = "red";
    }
    //Game 9 Checking for Tie 
    else if ((b77 == 'X' || b77 == '0') && (b78 == 'X' || b78 == '0') && (b79 == 'X' || b79 == '0') && (b87 == 'X' || b87 == '0') && (b88 == 'X' || b88 == '0') && (b89 == 'X' || b89 == '0') && (b97 == 'X' || b97 == '0') && (b98 == 'X' || b98 == '0') && (b99 == 'X' || b99 == '0')) {
        g9 = 1;
    }
    //Game 9 Printing Results
    else {
        if (flag == 1) { 
            document.getElementById('print').innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print').innerHTML = "Player 0 Turn"; 
        } 
    }


//Disabling finished games
checkGames();
    
}

