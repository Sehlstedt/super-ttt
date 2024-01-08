
function clearCells() {
    b11btn.style.backgroundColor = "white";
    b12btn.style.backgroundColor = "white";
    b13btn.style.backgroundColor = "white";
    b14btn.style.backgroundColor = "white";
    b15btn.style.backgroundColor = "white";
    b16btn.style.backgroundColor = "white";
    b17btn.style.backgroundColor = "white";
    b18btn.style.backgroundColor = "white";
    b19btn.style.backgroundColor = "white";

    b21btn.style.backgroundColor = "white";
    b22btn.style.backgroundColor = "white";
    b23btn.style.backgroundColor = "white";
    b24btn.style.backgroundColor = "white";
    b25btn.style.backgroundColor = "white";
    b26btn.style.backgroundColor = "white";
    b27btn.style.backgroundColor = "white";
    b28btn.style.backgroundColor = "white";
    b29btn.style.backgroundColor = "white";

    b31btn.style.backgroundColor = "white";
    b32btn.style.backgroundColor = "white";
    b33btn.style.backgroundColor = "white";
    b34btn.style.backgroundColor = "white";
    b35btn.style.backgroundColor = "white";
    b36btn.style.backgroundColor = "white";
    b37btn.style.backgroundColor = "white";
    b38btn.style.backgroundColor = "white";
    b39btn.style.backgroundColor = "white";

    b41btn.style.backgroundColor = "white";
    b42btn.style.backgroundColor = "white";
    b43btn.style.backgroundColor = "white";
    b44btn.style.backgroundColor = "white";
    b45btn.style.backgroundColor = "white";
    b46btn.style.backgroundColor = "white";
    b47btn.style.backgroundColor = "white";
    b48btn.style.backgroundColor = "white";
    b49btn.style.backgroundColor = "white";

    b51btn.style.backgroundColor = "white";
    b52btn.style.backgroundColor = "white";
    b53btn.style.backgroundColor = "white";
    b54btn.style.backgroundColor = "white";
    b55btn.style.backgroundColor = "white";
    b56btn.style.backgroundColor = "white";
    b57btn.style.backgroundColor = "white";
    b58btn.style.backgroundColor = "white";
    b59btn.style.backgroundColor = "white";

    b61btn.style.backgroundColor = "white";
    b62btn.style.backgroundColor = "white";
    b63btn.style.backgroundColor = "white";
    b64btn.style.backgroundColor = "white";
    b65btn.style.backgroundColor = "white";
    b66btn.style.backgroundColor = "white";
    b67btn.style.backgroundColor = "white";
    b68btn.style.backgroundColor = "white";
    b69btn.style.backgroundColor = "white";

    b71btn.style.backgroundColor = "white";
    b72btn.style.backgroundColor = "white";
    b73btn.style.backgroundColor = "white";
    b74btn.style.backgroundColor = "white";
    b75btn.style.backgroundColor = "white";
    b76btn.style.backgroundColor = "white";
    b77btn.style.backgroundColor = "white";
    b78btn.style.backgroundColor = "white";
    b79btn.style.backgroundColor = "white";

    b81btn.style.backgroundColor = "white";
    b82btn.style.backgroundColor = "white";
    b83btn.style.backgroundColor = "white";
    b84btn.style.backgroundColor = "white";
    b85btn.style.backgroundColor = "white";
    b86btn.style.backgroundColor = "white";
    b87btn.style.backgroundColor = "white";
    b88btn.style.backgroundColor = "white";
    b89btn.style.backgroundColor = "white";

    b91btn.style.backgroundColor = "white";
    b92btn.style.backgroundColor = "white";
    b93btn.style.backgroundColor = "white";
    b94btn.style.backgroundColor = "white";
    b95btn.style.backgroundColor = "white";
    b96btn.style.backgroundColor = "white";
    b97btn.style.backgroundColor = "white";
    b98btn.style.backgroundColor = "white";
    b99btn.style.backgroundColor = "white";
}






function sendto1() {
    if (g1 == 1) {
        console.log("game 1 is complete already");
        clearCells();
        checkGames();
    } 
    else {
        clearCells();
        checkGames();
        console.log("disable all but game 1");
        //Disable g2 tiles
        b14btn.style.backgroundColor = "darkgray";
        b15btn.style.backgroundColor = "darkgray";
        b16btn.style.backgroundColor = "darkgray";
        b24btn.style.backgroundColor = "darkgray";
        b25btn.style.backgroundColor = "darkgray";
        b26btn.style.backgroundColor = "darkgray";
        b34btn.style.backgroundColor = "darkgray";
        b35btn.style.backgroundColor = "darkgray";
        b36btn.style.backgroundColor = "darkgray";
    
        //Disable g3 tiles
        b17btn.style.backgroundColor = "darkgray";
        b18btn.style.backgroundColor = "darkgray";
        b19btn.style.backgroundColor = "darkgray";
        b27btn.style.backgroundColor = "darkgray";
        b28btn.style.backgroundColor = "darkgray";
        b29btn.style.backgroundColor = "darkgray";
        b37btn.style.backgroundColor = "darkgray";
        b38btn.style.backgroundColor = "darkgray";
        b39btn.style.backgroundColor = "darkgray";
    
        //Disable g4 tiles
        b41btn.style.backgroundColor = "darkgray";
        b42btn.style.backgroundColor = "darkgray";
        b43btn.style.backgroundColor = "darkgray";
        b51btn.style.backgroundColor = "darkgray";
        b52btn.style.backgroundColor = "darkgray";
        b53btn.style.backgroundColor = "darkgray";
        b61btn.style.backgroundColor = "darkgray";
        b62btn.style.backgroundColor = "darkgray";
        b63btn.style.backgroundColor = "darkgray";
    
        //Disable g5 tiles
        b44btn.style.backgroundColor = "darkgray";
        b45btn.style.backgroundColor = "darkgray";
        b46btn.style.backgroundColor = "darkgray";
        b54btn.style.backgroundColor = "darkgray";
        b55btn.style.backgroundColor = "darkgray";
        b56btn.style.backgroundColor = "darkgray";
        b64btn.style.backgroundColor = "darkgray";
        b65btn.style.backgroundColor = "darkgray";
        b66btn.style.backgroundColor = "darkgray";
    
        //Disable g6 tiles
        b47btn.style.backgroundColor = "darkgray";
        b48btn.style.backgroundColor = "darkgray";
        b49btn.style.backgroundColor = "darkgray";
        b57btn.style.backgroundColor = "darkgray";
        b58btn.style.backgroundColor = "darkgray";
        b59btn.style.backgroundColor = "darkgray";
        b67btn.style.backgroundColor = "darkgray";
        b68btn.style.backgroundColor = "darkgray";
        b69btn.style.backgroundColor = "darkgray";
    
        //Disable g7 tiles
        b71btn.style.backgroundColor = "darkgray";
        b72btn.style.backgroundColor = "darkgray";
        b73btn.style.backgroundColor = "darkgray";
        b81btn.style.backgroundColor = "darkgray";
        b82btn.style.backgroundColor = "darkgray";
        b83btn.style.backgroundColor = "darkgray";
        b91btn.style.backgroundColor = "darkgray";
        b92btn.style.backgroundColor = "darkgray";
        b93btn.style.backgroundColor = "darkgray";
    
        //Disable g8 tiles
        b74btn.style.backgroundColor = "darkgray";
        b75btn.style.backgroundColor = "darkgray";
        b76btn.style.backgroundColor = "darkgray";
        b84btn.style.backgroundColor = "darkgray";
        b85btn.style.backgroundColor = "darkgray";
        b86btn.style.backgroundColor = "darkgray";
        b94btn.style.backgroundColor = "darkgray";
        b95btn.style.backgroundColor = "darkgray";
        b96btn.style.backgroundColor = "darkgray";
    
        //Disable g9 tiles
        b77btn.style.backgroundColor = "darkgray";
        b78btn.style.backgroundColor = "darkgray";
        b79btn.style.backgroundColor = "darkgray";
        b87btn.style.backgroundColor = "darkgray";
        b88btn.style.backgroundColor = "darkgray";
        b89btn.style.backgroundColor = "darkgray";
        b97btn.style.backgroundColor = "darkgray";
        b98btn.style.backgroundColor = "darkgray";
        b99btn.style.backgroundColor = "darkgray";

        //Disable g2 tiles
        b14btn.disabled = true;
        b15btn.disabled = true;
        b16btn.disabled = true;
        b24btn.disabled = true;
        b25btn.disabled = true;
        b26btn.disabled = true;
        b34btn.disabled = true;
        b35btn.disabled = true;
        b36btn.disabled = true;

        //Disable g3 tiles
        b17btn.disabled = true;
        b18btn.disabled = true;
        b19btn.disabled = true;
        b27btn.disabled = true;
        b28btn.disabled = true;
        b29btn.disabled = true;
        b37btn.disabled = true;
        b38btn.disabled = true;
        b39btn.disabled = true;

        //Disable g4 tiles
        b41btn.disabled = true;
        b42btn.disabled = true;
        b43btn.disabled = true;
        b51btn.disabled = true;
        b52btn.disabled = true;
        b53btn.disabled = true;
        b61btn.disabled = true;
        b62btn.disabled = true;
        b63btn.disabled = true;

        //Disable g5 tiles
        b44btn.disabled = true;
        b45btn.disabled = true;
        b46btn.disabled = true;
        b54btn.disabled = true;
        b55btn.disabled = true;
        b56btn.disabled = true;
        b64btn.disabled = true;
        b65btn.disabled = true;
        b66btn.disabled = true;

        //Disable g6 tiles
        b47btn.disabled = true;
        b48btn.disabled = true;
        b49btn.disabled = true;
        b57btn.disabled = true;
        b58btn.disabled = true;
        b59btn.disabled = true;
        b67btn.disabled = true;
        b68btn.disabled = true;
        b69btn.disabled = true;

        //Disable g7 tiles
        b71btn.disabled = true;
        b72btn.disabled = true;
        b73btn.disabled = true;
        b81btn.disabled = true;
        b82btn.disabled = true;
        b83btn.disabled = true;
        b91btn.disabled = true;
        b92btn.disabled = true;
        b93btn.disabled = true;

        //Disable g8 tiles
        b74btn.disabled = true;
        b75btn.disabled = true;
        b76btn.disabled = true;
        b84btn.disabled = true;
        b85btn.disabled = true;
        b86btn.disabled = true;
        b94btn.disabled = true;
        b95btn.disabled = true;
        b96btn.disabled = true;

        //Disable g9 tiles
        b77btn.disabled = true;
        b78btn.disabled = true;
        b79btn.disabled = true;
        b87btn.disabled = true;
        b88btn.disabled = true;
        b89btn.disabled = true;
        b97btn.disabled = true;
        b98btn.disabled = true;
        b99btn.disabled = true;

    }
}

function sendto2() {
    if (g2 == 1) {
        console.log("game 2 is complete already");
        clearCells();
        checkGames();
    } 
    else {
        clearCells();
        checkGames();
        console.log("disable all but game 2");
        //Disable g1 tiles
        b11btn.style.backgroundColor = "darkgray";
        b12btn.style.backgroundColor = "darkgray";
        b13btn.style.backgroundColor = "darkgray";
        b21btn.style.backgroundColor = "darkgray";
        b22btn.style.backgroundColor = "darkgray";
        b23btn.style.backgroundColor = "darkgray";
        b31btn.style.backgroundColor = "darkgray";
        b32btn.style.backgroundColor = "darkgray";
        b33btn.style.backgroundColor = "darkgray";
    
        //Disable g3 tiles
        b17btn.style.backgroundColor = "darkgray";
        b18btn.style.backgroundColor = "darkgray";
        b19btn.style.backgroundColor = "darkgray";
        b27btn.style.backgroundColor = "darkgray";
        b28btn.style.backgroundColor = "darkgray";
        b29btn.style.backgroundColor = "darkgray";
        b37btn.style.backgroundColor = "darkgray";
        b38btn.style.backgroundColor = "darkgray";
        b39btn.style.backgroundColor = "darkgray";
    
        //Disable g4 tiles
        b41btn.style.backgroundColor = "darkgray";
        b42btn.style.backgroundColor = "darkgray";
        b43btn.style.backgroundColor = "darkgray";
        b51btn.style.backgroundColor = "darkgray";
        b52btn.style.backgroundColor = "darkgray";
        b53btn.style.backgroundColor = "darkgray";
        b61btn.style.backgroundColor = "darkgray";
        b62btn.style.backgroundColor = "darkgray";
        b63btn.style.backgroundColor = "darkgray";
    
        //Disable g5 tiles
        b44btn.style.backgroundColor = "darkgray";
        b45btn.style.backgroundColor = "darkgray";
        b46btn.style.backgroundColor = "darkgray";
        b54btn.style.backgroundColor = "darkgray";
        b55btn.style.backgroundColor = "darkgray";
        b56btn.style.backgroundColor = "darkgray";
        b64btn.style.backgroundColor = "darkgray";
        b65btn.style.backgroundColor = "darkgray";
        b66btn.style.backgroundColor = "darkgray";
    
        //Disable g6 tiles
        b47btn.style.backgroundColor = "darkgray";
        b48btn.style.backgroundColor = "darkgray";
        b49btn.style.backgroundColor = "darkgray";
        b57btn.style.backgroundColor = "darkgray";
        b58btn.style.backgroundColor = "darkgray";
        b59btn.style.backgroundColor = "darkgray";
        b67btn.style.backgroundColor = "darkgray";
        b68btn.style.backgroundColor = "darkgray";
        b69btn.style.backgroundColor = "darkgray";
    
        //Disable g7 tiles
        b71btn.style.backgroundColor = "darkgray";
        b72btn.style.backgroundColor = "darkgray";
        b73btn.style.backgroundColor = "darkgray";
        b81btn.style.backgroundColor = "darkgray";
        b82btn.style.backgroundColor = "darkgray";
        b83btn.style.backgroundColor = "darkgray";
        b91btn.style.backgroundColor = "darkgray";
        b92btn.style.backgroundColor = "darkgray";
        b93btn.style.backgroundColor = "darkgray";
    
        //Disable g8 tiles
        b74btn.style.backgroundColor = "darkgray";
        b75btn.style.backgroundColor = "darkgray";
        b76btn.style.backgroundColor = "darkgray";
        b84btn.style.backgroundColor = "darkgray";
        b85btn.style.backgroundColor = "darkgray";
        b86btn.style.backgroundColor = "darkgray";
        b94btn.style.backgroundColor = "darkgray";
        b95btn.style.backgroundColor = "darkgray";
        b96btn.style.backgroundColor = "darkgray";
    
        //Disable g9 tiles
        b77btn.style.backgroundColor = "darkgray";
        b78btn.style.backgroundColor = "darkgray";
        b79btn.style.backgroundColor = "darkgray";
        b87btn.style.backgroundColor = "darkgray";
        b88btn.style.backgroundColor = "darkgray";
        b89btn.style.backgroundColor = "darkgray";
        b97btn.style.backgroundColor = "darkgray";
        b98btn.style.backgroundColor = "darkgray";
        b99btn.style.backgroundColor = "darkgray";

        //Disable g1 tiles
        b11btn.disabled = true;
        b12btn.disabled = true;
        b13btn.disabled = true;
        b21btn.disabled = true;
        b22btn.disabled = true;
        b23btn.disabled = true;
        b31btn.disabled = true;
        b32btn.disabled = true;
        b33btn.disabled = true;

        //Disable g3 tiles
        b17btn.disabled = true;
        b18btn.disabled = true;
        b19btn.disabled = true;
        b27btn.disabled = true;
        b28btn.disabled = true;
        b29btn.disabled = true;
        b37btn.disabled = true;
        b38btn.disabled = true;
        b39btn.disabled = true;

        //Disable g4 tiles
        b41btn.disabled = true;
        b42btn.disabled = true;
        b43btn.disabled = true;
        b51btn.disabled = true;
        b52btn.disabled = true;
        b53btn.disabled = true;
        b61btn.disabled = true;
        b62btn.disabled = true;
        b63btn.disabled = true;

        //Disable g5 tiles
        b44btn.disabled = true;
        b45btn.disabled = true;
        b46btn.disabled = true;
        b54btn.disabled = true;
        b55btn.disabled = true;
        b56btn.disabled = true;
        b64btn.disabled = true;
        b65btn.disabled = true;
        b66btn.disabled = true;

        //Disable g6 tiles
        b47btn.disabled = true;
        b48btn.disabled = true;
        b49btn.disabled = true;
        b57btn.disabled = true;
        b58btn.disabled = true;
        b59btn.disabled = true;
        b67btn.disabled = true;
        b68btn.disabled = true;
        b69btn.disabled = true;

        //Disable g7 tiles
        b71btn.disabled = true;
        b72btn.disabled = true;
        b73btn.disabled = true;
        b81btn.disabled = true;
        b82btn.disabled = true;
        b83btn.disabled = true;
        b91btn.disabled = true;
        b92btn.disabled = true;
        b93btn.disabled = true;

        //Disable g8 tiles
        b74btn.disabled = true;
        b75btn.disabled = true;
        b76btn.disabled = true;
        b84btn.disabled = true;
        b85btn.disabled = true;
        b86btn.disabled = true;
        b94btn.disabled = true;
        b95btn.disabled = true;
        b96btn.disabled = true;

        //Disable g9 tiles
        b77btn.disabled = true;
        b78btn.disabled = true;
        b79btn.disabled = true;
        b87btn.disabled = true;
        b88btn.disabled = true;
        b89btn.disabled = true;
        b97btn.disabled = true;
        b98btn.disabled = true;
        b99btn.disabled = true;

    }
}

function sendto3() {
    if (g3 == 1) {
        console.log("game 3 is complete already");
        clearCells();
        checkGames();
    } 
    else {
        clearCells();
        checkGames();
        console.log("disable all but game 3");
        //Disable g1 tiles
        b11btn.style.backgroundColor = "darkgray";
        b12btn.style.backgroundColor = "darkgray";
        b13btn.style.backgroundColor = "darkgray";
        b21btn.style.backgroundColor = "darkgray";
        b22btn.style.backgroundColor = "darkgray";
        b23btn.style.backgroundColor = "darkgray";
        b31btn.style.backgroundColor = "darkgray";
        b32btn.style.backgroundColor = "darkgray";
        b33btn.style.backgroundColor = "darkgray";
    
        //Disable g2 tiles
        b14btn.style.backgroundColor = "darkgray";
        b15btn.style.backgroundColor = "darkgray";
        b16btn.style.backgroundColor = "darkgray";
        b24btn.style.backgroundColor = "darkgray";
        b25btn.style.backgroundColor = "darkgray";
        b26btn.style.backgroundColor = "darkgray";
        b34btn.style.backgroundColor = "darkgray";
        b35btn.style.backgroundColor = "darkgray";
        b36btn.style.backgroundColor = "darkgray";
    
        //Disable g4 tiles
        b41btn.style.backgroundColor = "darkgray";
        b42btn.style.backgroundColor = "darkgray";
        b43btn.style.backgroundColor = "darkgray";
        b51btn.style.backgroundColor = "darkgray";
        b52btn.style.backgroundColor = "darkgray";
        b53btn.style.backgroundColor = "darkgray";
        b61btn.style.backgroundColor = "darkgray";
        b62btn.style.backgroundColor = "darkgray";
        b63btn.style.backgroundColor = "darkgray";
    
        //Disable g5 tiles
        b44btn.style.backgroundColor = "darkgray";
        b45btn.style.backgroundColor = "darkgray";
        b46btn.style.backgroundColor = "darkgray";
        b54btn.style.backgroundColor = "darkgray";
        b55btn.style.backgroundColor = "darkgray";
        b56btn.style.backgroundColor = "darkgray";
        b64btn.style.backgroundColor = "darkgray";
        b65btn.style.backgroundColor = "darkgray";
        b66btn.style.backgroundColor = "darkgray";
    
        //Disable g6 tiles
        b47btn.style.backgroundColor = "darkgray";
        b48btn.style.backgroundColor = "darkgray";
        b49btn.style.backgroundColor = "darkgray";
        b57btn.style.backgroundColor = "darkgray";
        b58btn.style.backgroundColor = "darkgray";
        b59btn.style.backgroundColor = "darkgray";
        b67btn.style.backgroundColor = "darkgray";
        b68btn.style.backgroundColor = "darkgray";
        b69btn.style.backgroundColor = "darkgray";
    
        //Disable g7 tiles
        b71btn.style.backgroundColor = "darkgray";
        b72btn.style.backgroundColor = "darkgray";
        b73btn.style.backgroundColor = "darkgray";
        b81btn.style.backgroundColor = "darkgray";
        b82btn.style.backgroundColor = "darkgray";
        b83btn.style.backgroundColor = "darkgray";
        b91btn.style.backgroundColor = "darkgray";
        b92btn.style.backgroundColor = "darkgray";
        b93btn.style.backgroundColor = "darkgray";
    
        //Disable g8 tiles
        b74btn.style.backgroundColor = "darkgray";
        b75btn.style.backgroundColor = "darkgray";
        b76btn.style.backgroundColor = "darkgray";
        b84btn.style.backgroundColor = "darkgray";
        b85btn.style.backgroundColor = "darkgray";
        b86btn.style.backgroundColor = "darkgray";
        b94btn.style.backgroundColor = "darkgray";
        b95btn.style.backgroundColor = "darkgray";
        b96btn.style.backgroundColor = "darkgray";
    
        //Disable g9 tiles
        b77btn.style.backgroundColor = "darkgray";
        b78btn.style.backgroundColor = "darkgray";
        b79btn.style.backgroundColor = "darkgray";
        b87btn.style.backgroundColor = "darkgray";
        b88btn.style.backgroundColor = "darkgray";
        b89btn.style.backgroundColor = "darkgray";
        b97btn.style.backgroundColor = "darkgray";
        b98btn.style.backgroundColor = "darkgray";
        b99btn.style.backgroundColor = "darkgray";

        //Disable g1 tiles
        b11btn.disabled = true;
        b12btn.disabled = true;
        b13btn.disabled = true;
        b21btn.disabled = true;
        b22btn.disabled = true;
        b23btn.disabled = true;
        b31btn.disabled = true;
        b32btn.disabled = true;
        b33btn.disabled = true;

        //Disable g3 tiles
        b14btn.disabled = true;
        b15btn.disabled = true;
        b16btn.disabled = true;
        b24btn.disabled = true;
        b25btn.disabled = true;
        b26btn.disabled = true;
        b34btn.disabled = true;
        b35btn.disabled = true;
        b36btn.disabled = true;

        //Disable g4 tiles
        b41btn.disabled = true;
        b42btn.disabled = true;
        b43btn.disabled = true;
        b51btn.disabled = true;
        b52btn.disabled = true;
        b53btn.disabled = true;
        b61btn.disabled = true;
        b62btn.disabled = true;
        b63btn.disabled = true;

        //Disable g5 tiles
        b44btn.disabled = true;
        b45btn.disabled = true;
        b46btn.disabled = true;
        b54btn.disabled = true;
        b55btn.disabled = true;
        b56btn.disabled = true;
        b64btn.disabled = true;
        b65btn.disabled = true;
        b66btn.disabled = true;

        //Disable g6 tiles
        b47btn.disabled = true;
        b48btn.disabled = true;
        b49btn.disabled = true;
        b57btn.disabled = true;
        b58btn.disabled = true;
        b59btn.disabled = true;
        b67btn.disabled = true;
        b68btn.disabled = true;
        b69btn.disabled = true;

        //Disable g7 tiles
        b71btn.disabled = true;
        b72btn.disabled = true;
        b73btn.disabled = true;
        b81btn.disabled = true;
        b82btn.disabled = true;
        b83btn.disabled = true;
        b91btn.disabled = true;
        b92btn.disabled = true;
        b93btn.disabled = true;

        //Disable g8 tiles
        b74btn.disabled = true;
        b75btn.disabled = true;
        b76btn.disabled = true;
        b84btn.disabled = true;
        b85btn.disabled = true;
        b86btn.disabled = true;
        b94btn.disabled = true;
        b95btn.disabled = true;
        b96btn.disabled = true;

        //Disable g9 tiles
        b77btn.disabled = true;
        b78btn.disabled = true;
        b79btn.disabled = true;
        b87btn.disabled = true;
        b88btn.disabled = true;
        b89btn.disabled = true;
        b97btn.disabled = true;
        b98btn.disabled = true;
        b99btn.disabled = true;

    }
}

function sendto4() {
    if (g4 == 1) {
        console.log("game 4 is complete already");
        clearCells();
        checkGames();
    } 
    else {
        clearCells();
        checkGames();
        console.log("disable all but game 4");
        //Disable g1 tiles
        b11btn.style.backgroundColor = "darkgray";
        b12btn.style.backgroundColor = "darkgray";
        b13btn.style.backgroundColor = "darkgray";
        b21btn.style.backgroundColor = "darkgray";
        b22btn.style.backgroundColor = "darkgray";
        b23btn.style.backgroundColor = "darkgray";
        b31btn.style.backgroundColor = "darkgray";
        b32btn.style.backgroundColor = "darkgray";
        b33btn.style.backgroundColor = "darkgray";
    
        //Disable g2 tiles
        b14btn.style.backgroundColor = "darkgray";
        b15btn.style.backgroundColor = "darkgray";
        b16btn.style.backgroundColor = "darkgray";
        b24btn.style.backgroundColor = "darkgray";
        b25btn.style.backgroundColor = "darkgray";
        b26btn.style.backgroundColor = "darkgray";
        b34btn.style.backgroundColor = "darkgray";
        b35btn.style.backgroundColor = "darkgray";
        b36btn.style.backgroundColor = "darkgray";
    
        //Disable g3 tiles
        b17btn.style.backgroundColor = "darkgray";
        b18btn.style.backgroundColor = "darkgray";
        b19btn.style.backgroundColor = "darkgray";
        b27btn.style.backgroundColor = "darkgray";
        b28btn.style.backgroundColor = "darkgray";
        b29btn.style.backgroundColor = "darkgray";
        b37btn.style.backgroundColor = "darkgray";
        b38btn.style.backgroundColor = "darkgray";
        b39btn.style.backgroundColor = "darkgray";
    
        //Disable g5 tiles
        b44btn.style.backgroundColor = "darkgray";
        b45btn.style.backgroundColor = "darkgray";
        b46btn.style.backgroundColor = "darkgray";
        b54btn.style.backgroundColor = "darkgray";
        b55btn.style.backgroundColor = "darkgray";
        b56btn.style.backgroundColor = "darkgray";
        b64btn.style.backgroundColor = "darkgray";
        b65btn.style.backgroundColor = "darkgray";
        b66btn.style.backgroundColor = "darkgray";
    
        //Disable g6 tiles
        b47btn.style.backgroundColor = "darkgray";
        b48btn.style.backgroundColor = "darkgray";
        b49btn.style.backgroundColor = "darkgray";
        b57btn.style.backgroundColor = "darkgray";
        b58btn.style.backgroundColor = "darkgray";
        b59btn.style.backgroundColor = "darkgray";
        b67btn.style.backgroundColor = "darkgray";
        b68btn.style.backgroundColor = "darkgray";
        b69btn.style.backgroundColor = "darkgray";
    
        //Disable g7 tiles
        b71btn.style.backgroundColor = "darkgray";
        b72btn.style.backgroundColor = "darkgray";
        b73btn.style.backgroundColor = "darkgray";
        b81btn.style.backgroundColor = "darkgray";
        b82btn.style.backgroundColor = "darkgray";
        b83btn.style.backgroundColor = "darkgray";
        b91btn.style.backgroundColor = "darkgray";
        b92btn.style.backgroundColor = "darkgray";
        b93btn.style.backgroundColor = "darkgray";
    
        //Disable g8 tiles
        b74btn.style.backgroundColor = "darkgray";
        b75btn.style.backgroundColor = "darkgray";
        b76btn.style.backgroundColor = "darkgray";
        b84btn.style.backgroundColor = "darkgray";
        b85btn.style.backgroundColor = "darkgray";
        b86btn.style.backgroundColor = "darkgray";
        b94btn.style.backgroundColor = "darkgray";
        b95btn.style.backgroundColor = "darkgray";
        b96btn.style.backgroundColor = "darkgray";
    
        //Disable g9 tiles
        b77btn.style.backgroundColor = "darkgray";
        b78btn.style.backgroundColor = "darkgray";
        b79btn.style.backgroundColor = "darkgray";
        b87btn.style.backgroundColor = "darkgray";
        b88btn.style.backgroundColor = "darkgray";
        b89btn.style.backgroundColor = "darkgray";
        b97btn.style.backgroundColor = "darkgray";
        b98btn.style.backgroundColor = "darkgray";
        b99btn.style.backgroundColor = "darkgray";

        //Disable g1 tiles
        b11btn.disabled = true;
        b12btn.disabled = true;
        b13btn.disabled = true;
        b21btn.disabled = true;
        b22btn.disabled = true;
        b23btn.disabled = true;
        b31btn.disabled = true;
        b32btn.disabled = true;
        b33btn.disabled = true;

        //Disable g2 tiles
        b14btn.disabled = true;
        b15btn.disabled = true;
        b16btn.disabled = true;
        b24btn.disabled = true;
        b25btn.disabled = true;
        b26btn.disabled = true;
        b34btn.disabled = true;
        b35btn.disabled = true;
        b36btn.disabled = true;

        //Disable g3 tiles
        b17btn.disabled = true;
        b18btn.disabled = true;
        b19btn.disabled = true;
        b27btn.disabled = true;
        b28btn.disabled = true;
        b29btn.disabled = true;
        b37btn.disabled = true;
        b38btn.disabled = true;
        b39btn.disabled = true;

        //Disable g5 tiles
        b44btn.disabled = true;
        b45btn.disabled = true;
        b46btn.disabled = true;
        b54btn.disabled = true;
        b55btn.disabled = true;
        b56btn.disabled = true;
        b64btn.disabled = true;
        b65btn.disabled = true;
        b66btn.disabled = true;

        //Disable g6 tiles
        b47btn.disabled = true;
        b48btn.disabled = true;
        b49btn.disabled = true;
        b57btn.disabled = true;
        b58btn.disabled = true;
        b59btn.disabled = true;
        b67btn.disabled = true;
        b68btn.disabled = true;
        b69btn.disabled = true;

        //Disable g7 tiles
        b71btn.disabled = true;
        b72btn.disabled = true;
        b73btn.disabled = true;
        b81btn.disabled = true;
        b82btn.disabled = true;
        b83btn.disabled = true;
        b91btn.disabled = true;
        b92btn.disabled = true;
        b93btn.disabled = true;

        //Disable g8 tiles
        b74btn.disabled = true;
        b75btn.disabled = true;
        b76btn.disabled = true;
        b84btn.disabled = true;
        b85btn.disabled = true;
        b86btn.disabled = true;
        b94btn.disabled = true;
        b95btn.disabled = true;
        b96btn.disabled = true;

        //Disable g9 tiles
        b77btn.disabled = true;
        b78btn.disabled = true;
        b79btn.disabled = true;
        b87btn.disabled = true;
        b88btn.disabled = true;
        b89btn.disabled = true;
        b97btn.disabled = true;
        b98btn.disabled = true;
        b99btn.disabled = true;

    }
}

function sendto5() {
    if (g5 == 1) {
        console.log("game 5 is complete already");
        clearCells();
        checkGames();
    } 
    else {
        clearCells();
        checkGames();
        console.log("disable all but game 5");
        //Disable g1 tiles
        b11btn.style.backgroundColor = "darkgray";
        b12btn.style.backgroundColor = "darkgray";
        b13btn.style.backgroundColor = "darkgray";
        b21btn.style.backgroundColor = "darkgray";
        b22btn.style.backgroundColor = "darkgray";
        b23btn.style.backgroundColor = "darkgray";
        b31btn.style.backgroundColor = "darkgray";
        b32btn.style.backgroundColor = "darkgray";
        b33btn.style.backgroundColor = "darkgray";
    
        //Disable g2 tiles
        b14btn.style.backgroundColor = "darkgray";
        b15btn.style.backgroundColor = "darkgray";
        b16btn.style.backgroundColor = "darkgray";
        b24btn.style.backgroundColor = "darkgray";
        b25btn.style.backgroundColor = "darkgray";
        b26btn.style.backgroundColor = "darkgray";
        b34btn.style.backgroundColor = "darkgray";
        b35btn.style.backgroundColor = "darkgray";
        b36btn.style.backgroundColor = "darkgray";
    
        //Disable g3 tiles
        b17btn.style.backgroundColor = "darkgray";
        b18btn.style.backgroundColor = "darkgray";
        b19btn.style.backgroundColor = "darkgray";
        b27btn.style.backgroundColor = "darkgray";
        b28btn.style.backgroundColor = "darkgray";
        b29btn.style.backgroundColor = "darkgray";
        b37btn.style.backgroundColor = "darkgray";
        b38btn.style.backgroundColor = "darkgray";
        b39btn.style.backgroundColor = "darkgray";
    
        //Disable g4 tiles
        b41btn.style.backgroundColor = "darkgray";
        b42btn.style.backgroundColor = "darkgray";
        b43btn.style.backgroundColor = "darkgray";
        b51btn.style.backgroundColor = "darkgray";
        b52btn.style.backgroundColor = "darkgray";
        b53btn.style.backgroundColor = "darkgray";
        b61btn.style.backgroundColor = "darkgray";
        b62btn.style.backgroundColor = "darkgray";
        b63btn.style.backgroundColor = "darkgray";
    
        //Disable g6 tiles
        b47btn.style.backgroundColor = "darkgray";
        b48btn.style.backgroundColor = "darkgray";
        b49btn.style.backgroundColor = "darkgray";
        b57btn.style.backgroundColor = "darkgray";
        b58btn.style.backgroundColor = "darkgray";
        b59btn.style.backgroundColor = "darkgray";
        b67btn.style.backgroundColor = "darkgray";
        b68btn.style.backgroundColor = "darkgray";
        b69btn.style.backgroundColor = "darkgray";
    
        //Disable g7 tiles
        b71btn.style.backgroundColor = "darkgray";
        b72btn.style.backgroundColor = "darkgray";
        b73btn.style.backgroundColor = "darkgray";
        b81btn.style.backgroundColor = "darkgray";
        b82btn.style.backgroundColor = "darkgray";
        b83btn.style.backgroundColor = "darkgray";
        b91btn.style.backgroundColor = "darkgray";
        b92btn.style.backgroundColor = "darkgray";
        b93btn.style.backgroundColor = "darkgray";
    
        //Disable g8 tiles
        b74btn.style.backgroundColor = "darkgray";
        b75btn.style.backgroundColor = "darkgray";
        b76btn.style.backgroundColor = "darkgray";
        b84btn.style.backgroundColor = "darkgray";
        b85btn.style.backgroundColor = "darkgray";
        b86btn.style.backgroundColor = "darkgray";
        b94btn.style.backgroundColor = "darkgray";
        b95btn.style.backgroundColor = "darkgray";
        b96btn.style.backgroundColor = "darkgray";
    
        //Disable g9 tiles
        b77btn.style.backgroundColor = "darkgray";
        b78btn.style.backgroundColor = "darkgray";
        b79btn.style.backgroundColor = "darkgray";
        b87btn.style.backgroundColor = "darkgray";
        b88btn.style.backgroundColor = "darkgray";
        b89btn.style.backgroundColor = "darkgray";
        b97btn.style.backgroundColor = "darkgray";
        b98btn.style.backgroundColor = "darkgray";
        b99btn.style.backgroundColor = "darkgray";

        //Disable g1 tiles
        b11btn.disabled = true;
        b12btn.disabled = true;
        b13btn.disabled = true;
        b21btn.disabled = true;
        b22btn.disabled = true;
        b23btn.disabled = true;
        b31btn.disabled = true;
        b32btn.disabled = true;
        b33btn.disabled = true;

        //Disable g2 tiles
        b14btn.disabled = true;
        b15btn.disabled = true;
        b16btn.disabled = true;
        b24btn.disabled = true;
        b25btn.disabled = true;
        b26btn.disabled = true;
        b34btn.disabled = true;
        b35btn.disabled = true;
        b36btn.disabled = true;

        //Disable g3 tiles
        b17btn.disabled = true;
        b18btn.disabled = true;
        b19btn.disabled = true;
        b27btn.disabled = true;
        b28btn.disabled = true;
        b29btn.disabled = true;
        b37btn.disabled = true;
        b38btn.disabled = true;
        b39btn.disabled = true;

        //Disable g4 tiles
        b41btn.disabled = true;
        b42btn.disabled = true;
        b43btn.disabled = true;
        b51btn.disabled = true;
        b52btn.disabled = true;
        b53btn.disabled = true;
        b61btn.disabled = true;
        b62btn.disabled = true;
        b63btn.disabled = true;

        //Disable g6 tiles
        b47btn.disabled = true;
        b48btn.disabled = true;
        b49btn.disabled = true;
        b57btn.disabled = true;
        b58btn.disabled = true;
        b59btn.disabled = true;
        b67btn.disabled = true;
        b68btn.disabled = true;
        b69btn.disabled = true;

        //Disable g7 tiles
        b71btn.disabled = true;
        b72btn.disabled = true;
        b73btn.disabled = true;
        b81btn.disabled = true;
        b82btn.disabled = true;
        b83btn.disabled = true;
        b91btn.disabled = true;
        b92btn.disabled = true;
        b93btn.disabled = true;

        //Disable g8 tiles
        b74btn.disabled = true;
        b75btn.disabled = true;
        b76btn.disabled = true;
        b84btn.disabled = true;
        b85btn.disabled = true;
        b86btn.disabled = true;
        b94btn.disabled = true;
        b95btn.disabled = true;
        b96btn.disabled = true;

        //Disable g9 tiles
        b77btn.disabled = true;
        b78btn.disabled = true;
        b79btn.disabled = true;
        b87btn.disabled = true;
        b88btn.disabled = true;
        b89btn.disabled = true;
        b97btn.disabled = true;
        b98btn.disabled = true;
        b99btn.disabled = true;

    }
}

function sendto6() {
    if (g6 == 1) {
        console.log("game 6 is complete already");
        clearCells();
        checkGames();
    } 
    else {
        clearCells();
        checkGames();
        console.log("disable all but game 6");
        //Disable g1 tiles
        b11btn.style.backgroundColor = "darkgray";
        b12btn.style.backgroundColor = "darkgray";
        b13btn.style.backgroundColor = "darkgray";
        b21btn.style.backgroundColor = "darkgray";
        b22btn.style.backgroundColor = "darkgray";
        b23btn.style.backgroundColor = "darkgray";
        b31btn.style.backgroundColor = "darkgray";
        b32btn.style.backgroundColor = "darkgray";
        b33btn.style.backgroundColor = "darkgray";
    
        //Disable g2 tiles
        b14btn.style.backgroundColor = "darkgray";
        b15btn.style.backgroundColor = "darkgray";
        b16btn.style.backgroundColor = "darkgray";
        b24btn.style.backgroundColor = "darkgray";
        b25btn.style.backgroundColor = "darkgray";
        b26btn.style.backgroundColor = "darkgray";
        b34btn.style.backgroundColor = "darkgray";
        b35btn.style.backgroundColor = "darkgray";
        b36btn.style.backgroundColor = "darkgray";
    
        //Disable g3 tiles
        b17btn.style.backgroundColor = "darkgray";
        b18btn.style.backgroundColor = "darkgray";
        b19btn.style.backgroundColor = "darkgray";
        b27btn.style.backgroundColor = "darkgray";
        b28btn.style.backgroundColor = "darkgray";
        b29btn.style.backgroundColor = "darkgray";
        b37btn.style.backgroundColor = "darkgray";
        b38btn.style.backgroundColor = "darkgray";
        b39btn.style.backgroundColor = "darkgray";
    
        //Disable g4 tiles
        b41btn.style.backgroundColor = "darkgray";
        b42btn.style.backgroundColor = "darkgray";
        b43btn.style.backgroundColor = "darkgray";
        b51btn.style.backgroundColor = "darkgray";
        b52btn.style.backgroundColor = "darkgray";
        b53btn.style.backgroundColor = "darkgray";
        b61btn.style.backgroundColor = "darkgray";
        b62btn.style.backgroundColor = "darkgray";
        b63btn.style.backgroundColor = "darkgray";
    
        //Disable g5 tiles
        b44btn.style.backgroundColor = "darkgray";
        b45btn.style.backgroundColor = "darkgray";
        b46btn.style.backgroundColor = "darkgray";
        b54btn.style.backgroundColor = "darkgray";
        b55btn.style.backgroundColor = "darkgray";
        b56btn.style.backgroundColor = "darkgray";
        b64btn.style.backgroundColor = "darkgray";
        b65btn.style.backgroundColor = "darkgray";
        b66btn.style.backgroundColor = "darkgray";
    
        //Disable g7 tiles
        b71btn.style.backgroundColor = "darkgray";
        b72btn.style.backgroundColor = "darkgray";
        b73btn.style.backgroundColor = "darkgray";
        b81btn.style.backgroundColor = "darkgray";
        b82btn.style.backgroundColor = "darkgray";
        b83btn.style.backgroundColor = "darkgray";
        b91btn.style.backgroundColor = "darkgray";
        b92btn.style.backgroundColor = "darkgray";
        b93btn.style.backgroundColor = "darkgray";
    
        //Disable g8 tiles
        b74btn.style.backgroundColor = "darkgray";
        b75btn.style.backgroundColor = "darkgray";
        b76btn.style.backgroundColor = "darkgray";
        b84btn.style.backgroundColor = "darkgray";
        b85btn.style.backgroundColor = "darkgray";
        b86btn.style.backgroundColor = "darkgray";
        b94btn.style.backgroundColor = "darkgray";
        b95btn.style.backgroundColor = "darkgray";
        b96btn.style.backgroundColor = "darkgray";
    
        //Disable g9 tiles
        b77btn.style.backgroundColor = "darkgray";
        b78btn.style.backgroundColor = "darkgray";
        b79btn.style.backgroundColor = "darkgray";
        b87btn.style.backgroundColor = "darkgray";
        b88btn.style.backgroundColor = "darkgray";
        b89btn.style.backgroundColor = "darkgray";
        b97btn.style.backgroundColor = "darkgray";
        b98btn.style.backgroundColor = "darkgray";
        b99btn.style.backgroundColor = "darkgray";

        //Disable g1 tiles
        b11btn.disabled = true;
        b12btn.disabled = true;
        b13btn.disabled = true;
        b21btn.disabled = true;
        b22btn.disabled = true;
        b23btn.disabled = true;
        b31btn.disabled = true;
        b32btn.disabled = true;
        b33btn.disabled = true;

        //Disable g2 tiles
        b14btn.disabled = true;
        b15btn.disabled = true;
        b16btn.disabled = true;
        b24btn.disabled = true;
        b25btn.disabled = true;
        b26btn.disabled = true;
        b34btn.disabled = true;
        b35btn.disabled = true;
        b36btn.disabled = true;

        //Disable g3 tiles
        b17btn.disabled = true;
        b18btn.disabled = true;
        b19btn.disabled = true;
        b27btn.disabled = true;
        b28btn.disabled = true;
        b29btn.disabled = true;
        b37btn.disabled = true;
        b38btn.disabled = true;
        b39btn.disabled = true;

        //Disable g4 tiles
        b41btn.disabled = true;
        b42btn.disabled = true;
        b43btn.disabled = true;
        b51btn.disabled = true;
        b52btn.disabled = true;
        b53btn.disabled = true;
        b61btn.disabled = true;
        b62btn.disabled = true;
        b63btn.disabled = true;

        //Disable g5 tiles
        b44btn.disabled = true;
        b45btn.disabled = true;
        b46btn.disabled = true;
        b54btn.disabled = true;
        b55btn.disabled = true;
        b56btn.disabled = true;
        b64btn.disabled = true;
        b65btn.disabled = true;
        b66btn.disabled = true;

        //Disable g7 tiles
        b71btn.disabled = true;
        b72btn.disabled = true;
        b73btn.disabled = true;
        b81btn.disabled = true;
        b82btn.disabled = true;
        b83btn.disabled = true;
        b91btn.disabled = true;
        b92btn.disabled = true;
        b93btn.disabled = true;

        //Disable g8 tiles
        b74btn.disabled = true;
        b75btn.disabled = true;
        b76btn.disabled = true;
        b84btn.disabled = true;
        b85btn.disabled = true;
        b86btn.disabled = true;
        b94btn.disabled = true;
        b95btn.disabled = true;
        b96btn.disabled = true;

        //Disable g9 tiles
        b77btn.disabled = true;
        b78btn.disabled = true;
        b79btn.disabled = true;
        b87btn.disabled = true;
        b88btn.disabled = true;
        b89btn.disabled = true;
        b97btn.disabled = true;
        b98btn.disabled = true;
        b99btn.disabled = true;

    }
}

function sendto7() {
    if (g7 == 1) {
        console.log("game 7 is complete already");
        clearCells();
        checkGames();
    } 
    else {
        clearCells();
        checkGames();
        console.log("disable all but game 7");
        //Disable g1 tiles
        b11btn.style.backgroundColor = "darkgray";
        b12btn.style.backgroundColor = "darkgray";
        b13btn.style.backgroundColor = "darkgray";
        b21btn.style.backgroundColor = "darkgray";
        b22btn.style.backgroundColor = "darkgray";
        b23btn.style.backgroundColor = "darkgray";
        b31btn.style.backgroundColor = "darkgray";
        b32btn.style.backgroundColor = "darkgray";
        b33btn.style.backgroundColor = "darkgray";
    
        //Disable g2 tiles
        b14btn.style.backgroundColor = "darkgray";
        b15btn.style.backgroundColor = "darkgray";
        b16btn.style.backgroundColor = "darkgray";
        b24btn.style.backgroundColor = "darkgray";
        b25btn.style.backgroundColor = "darkgray";
        b26btn.style.backgroundColor = "darkgray";
        b34btn.style.backgroundColor = "darkgray";
        b35btn.style.backgroundColor = "darkgray";
        b36btn.style.backgroundColor = "darkgray";
    
        //Disable g3 tiles
        b17btn.style.backgroundColor = "darkgray";
        b18btn.style.backgroundColor = "darkgray";
        b19btn.style.backgroundColor = "darkgray";
        b27btn.style.backgroundColor = "darkgray";
        b28btn.style.backgroundColor = "darkgray";
        b29btn.style.backgroundColor = "darkgray";
        b37btn.style.backgroundColor = "darkgray";
        b38btn.style.backgroundColor = "darkgray";
        b39btn.style.backgroundColor = "darkgray";
    
        //Disable g4 tiles
        b41btn.style.backgroundColor = "darkgray";
        b42btn.style.backgroundColor = "darkgray";
        b43btn.style.backgroundColor = "darkgray";
        b51btn.style.backgroundColor = "darkgray";
        b52btn.style.backgroundColor = "darkgray";
        b53btn.style.backgroundColor = "darkgray";
        b61btn.style.backgroundColor = "darkgray";
        b62btn.style.backgroundColor = "darkgray";
        b63btn.style.backgroundColor = "darkgray";
    
        //Disable g5 tiles
        b44btn.style.backgroundColor = "darkgray";
        b45btn.style.backgroundColor = "darkgray";
        b46btn.style.backgroundColor = "darkgray";
        b54btn.style.backgroundColor = "darkgray";
        b55btn.style.backgroundColor = "darkgray";
        b56btn.style.backgroundColor = "darkgray";
        b64btn.style.backgroundColor = "darkgray";
        b65btn.style.backgroundColor = "darkgray";
        b66btn.style.backgroundColor = "darkgray";
    
        //Disable g6 tiles
        b47btn.style.backgroundColor = "darkgray";
        b48btn.style.backgroundColor = "darkgray";
        b49btn.style.backgroundColor = "darkgray";
        b57btn.style.backgroundColor = "darkgray";
        b58btn.style.backgroundColor = "darkgray";
        b59btn.style.backgroundColor = "darkgray";
        b67btn.style.backgroundColor = "darkgray";
        b68btn.style.backgroundColor = "darkgray";
        b69btn.style.backgroundColor = "darkgray";
    
        //Disable g8 tiles
        b74btn.style.backgroundColor = "darkgray";
        b75btn.style.backgroundColor = "darkgray";
        b76btn.style.backgroundColor = "darkgray";
        b84btn.style.backgroundColor = "darkgray";
        b85btn.style.backgroundColor = "darkgray";
        b86btn.style.backgroundColor = "darkgray";
        b94btn.style.backgroundColor = "darkgray";
        b95btn.style.backgroundColor = "darkgray";
        b96btn.style.backgroundColor = "darkgray";
    
        //Disable g9 tiles
        b77btn.style.backgroundColor = "darkgray";
        b78btn.style.backgroundColor = "darkgray";
        b79btn.style.backgroundColor = "darkgray";
        b87btn.style.backgroundColor = "darkgray";
        b88btn.style.backgroundColor = "darkgray";
        b89btn.style.backgroundColor = "darkgray";
        b97btn.style.backgroundColor = "darkgray";
        b98btn.style.backgroundColor = "darkgray";
        b99btn.style.backgroundColor = "darkgray";

        //Disable g1 tiles
        b11btn.disabled = true;
        b12btn.disabled = true;
        b13btn.disabled = true;
        b21btn.disabled = true;
        b22btn.disabled = true;
        b23btn.disabled = true;
        b31btn.disabled = true;
        b32btn.disabled = true;
        b33btn.disabled = true;

        //Disable g2 tiles
        b14btn.disabled = true;
        b15btn.disabled = true;
        b16btn.disabled = true;
        b24btn.disabled = true;
        b25btn.disabled = true;
        b26btn.disabled = true;
        b34btn.disabled = true;
        b35btn.disabled = true;
        b36btn.disabled = true;

        //Disable g3 tiles
        b17btn.disabled = true;
        b18btn.disabled = true;
        b19btn.disabled = true;
        b27btn.disabled = true;
        b28btn.disabled = true;
        b29btn.disabled = true;
        b37btn.disabled = true;
        b38btn.disabled = true;
        b39btn.disabled = true;

        //Disable g4 tiles
        b41btn.disabled = true;
        b42btn.disabled = true;
        b43btn.disabled = true;
        b51btn.disabled = true;
        b52btn.disabled = true;
        b53btn.disabled = true;
        b61btn.disabled = true;
        b62btn.disabled = true;
        b63btn.disabled = true;

        //Disable g5 tiles
        b44btn.disabled = true;
        b45btn.disabled = true;
        b46btn.disabled = true;
        b54btn.disabled = true;
        b55btn.disabled = true;
        b56btn.disabled = true;
        b64btn.disabled = true;
        b65btn.disabled = true;
        b66btn.disabled = true;

        //Disable g6 tiles
        b47btn.disabled = true;
        b48btn.disabled = true;
        b49btn.disabled = true;
        b57btn.disabled = true;
        b58btn.disabled = true;
        b59btn.disabled = true;
        b67btn.disabled = true;
        b68btn.disabled = true;
        b69btn.disabled = true;

        //Disable g8 tiles
        b74btn.disabled = true;
        b75btn.disabled = true;
        b76btn.disabled = true;
        b84btn.disabled = true;
        b85btn.disabled = true;
        b86btn.disabled = true;
        b94btn.disabled = true;
        b95btn.disabled = true;
        b96btn.disabled = true;

        //Disable g9 tiles
        b77btn.disabled = true;
        b78btn.disabled = true;
        b79btn.disabled = true;
        b87btn.disabled = true;
        b88btn.disabled = true;
        b89btn.disabled = true;
        b97btn.disabled = true;
        b98btn.disabled = true;
        b99btn.disabled = true;

    }
}

function sendto8() {
    if (g8 == 1) {
        console.log("game 8 is complete already");
        clearCells();
        checkGames();
    } 
    else {
        clearCells();
        checkGames();
        console.log("disable all but game 8");
        //Disable g1 tiles
        b11btn.style.backgroundColor = "darkgray";
        b12btn.style.backgroundColor = "darkgray";
        b13btn.style.backgroundColor = "darkgray";
        b21btn.style.backgroundColor = "darkgray";
        b22btn.style.backgroundColor = "darkgray";
        b23btn.style.backgroundColor = "darkgray";
        b31btn.style.backgroundColor = "darkgray";
        b32btn.style.backgroundColor = "darkgray";
        b33btn.style.backgroundColor = "darkgray";
    
        //Disable g2 tiles
        b14btn.style.backgroundColor = "darkgray";
        b15btn.style.backgroundColor = "darkgray";
        b16btn.style.backgroundColor = "darkgray";
        b24btn.style.backgroundColor = "darkgray";
        b25btn.style.backgroundColor = "darkgray";
        b26btn.style.backgroundColor = "darkgray";
        b34btn.style.backgroundColor = "darkgray";
        b35btn.style.backgroundColor = "darkgray";
        b36btn.style.backgroundColor = "darkgray";
    
        //Disable g3 tiles
        b17btn.style.backgroundColor = "darkgray";
        b18btn.style.backgroundColor = "darkgray";
        b19btn.style.backgroundColor = "darkgray";
        b27btn.style.backgroundColor = "darkgray";
        b28btn.style.backgroundColor = "darkgray";
        b29btn.style.backgroundColor = "darkgray";
        b37btn.style.backgroundColor = "darkgray";
        b38btn.style.backgroundColor = "darkgray";
        b39btn.style.backgroundColor = "darkgray";
    
        //Disable g4 tiles
        b41btn.style.backgroundColor = "darkgray";
        b42btn.style.backgroundColor = "darkgray";
        b43btn.style.backgroundColor = "darkgray";
        b51btn.style.backgroundColor = "darkgray";
        b52btn.style.backgroundColor = "darkgray";
        b53btn.style.backgroundColor = "darkgray";
        b61btn.style.backgroundColor = "darkgray";
        b62btn.style.backgroundColor = "darkgray";
        b63btn.style.backgroundColor = "darkgray";
    
        //Disable g5 tiles
        b44btn.style.backgroundColor = "darkgray";
        b45btn.style.backgroundColor = "darkgray";
        b46btn.style.backgroundColor = "darkgray";
        b54btn.style.backgroundColor = "darkgray";
        b55btn.style.backgroundColor = "darkgray";
        b56btn.style.backgroundColor = "darkgray";
        b64btn.style.backgroundColor = "darkgray";
        b65btn.style.backgroundColor = "darkgray";
        b66btn.style.backgroundColor = "darkgray";
    
        //Disable g6 tiles
        b47btn.style.backgroundColor = "darkgray";
        b48btn.style.backgroundColor = "darkgray";
        b49btn.style.backgroundColor = "darkgray";
        b57btn.style.backgroundColor = "darkgray";
        b58btn.style.backgroundColor = "darkgray";
        b59btn.style.backgroundColor = "darkgray";
        b67btn.style.backgroundColor = "darkgray";
        b68btn.style.backgroundColor = "darkgray";
        b69btn.style.backgroundColor = "darkgray";
    
        //Disable g7 tiles
        b71btn.style.backgroundColor = "darkgray";
        b72btn.style.backgroundColor = "darkgray";
        b73btn.style.backgroundColor = "darkgray";
        b81btn.style.backgroundColor = "darkgray";
        b82btn.style.backgroundColor = "darkgray";
        b83btn.style.backgroundColor = "darkgray";
        b91btn.style.backgroundColor = "darkgray";
        b92btn.style.backgroundColor = "darkgray";
        b93btn.style.backgroundColor = "darkgray";
    
        //Disable g9 tiles
        b77btn.style.backgroundColor = "darkgray";
        b78btn.style.backgroundColor = "darkgray";
        b79btn.style.backgroundColor = "darkgray";
        b87btn.style.backgroundColor = "darkgray";
        b88btn.style.backgroundColor = "darkgray";
        b89btn.style.backgroundColor = "darkgray";
        b97btn.style.backgroundColor = "darkgray";
        b98btn.style.backgroundColor = "darkgray";
        b99btn.style.backgroundColor = "darkgray";

        //Disable g1 tiles
        b11btn.disabled = true;
        b12btn.disabled = true;
        b13btn.disabled = true;
        b21btn.disabled = true;
        b22btn.disabled = true;
        b23btn.disabled = true;
        b31btn.disabled = true;
        b32btn.disabled = true;
        b33btn.disabled = true;

        //Disable g2 tiles
        b14btn.disabled = true;
        b15btn.disabled = true;
        b16btn.disabled = true;
        b24btn.disabled = true;
        b25btn.disabled = true;
        b26btn.disabled = true;
        b34btn.disabled = true;
        b35btn.disabled = true;
        b36btn.disabled = true;

        //Disable g3 tiles
        b17btn.disabled = true;
        b18btn.disabled = true;
        b19btn.disabled = true;
        b27btn.disabled = true;
        b28btn.disabled = true;
        b29btn.disabled = true;
        b37btn.disabled = true;
        b38btn.disabled = true;
        b39btn.disabled = true;

        //Disable g4 tiles
        b41btn.disabled = true;
        b42btn.disabled = true;
        b43btn.disabled = true;
        b51btn.disabled = true;
        b52btn.disabled = true;
        b53btn.disabled = true;
        b61btn.disabled = true;
        b62btn.disabled = true;
        b63btn.disabled = true;

        //Disable g5 tiles
        b44btn.disabled = true;
        b45btn.disabled = true;
        b46btn.disabled = true;
        b54btn.disabled = true;
        b55btn.disabled = true;
        b56btn.disabled = true;
        b64btn.disabled = true;
        b65btn.disabled = true;
        b66btn.disabled = true;

        //Disable g6 tiles
        b47btn.disabled = true;
        b48btn.disabled = true;
        b49btn.disabled = true;
        b57btn.disabled = true;
        b58btn.disabled = true;
        b59btn.disabled = true;
        b67btn.disabled = true;
        b68btn.disabled = true;
        b69btn.disabled = true;

        //Disable g7 tiles
        b71btn.disabled = true;
        b72btn.disabled = true;
        b73btn.disabled = true;
        b81btn.disabled = true;
        b82btn.disabled = true;
        b83btn.disabled = true;
        b91btn.disabled = true;
        b92btn.disabled = true;
        b93btn.disabled = true;

        //Disable g9 tiles
        b77btn.disabled = true;
        b78btn.disabled = true;
        b79btn.disabled = true;
        b87btn.disabled = true;
        b88btn.disabled = true;
        b89btn.disabled = true;
        b97btn.disabled = true;
        b98btn.disabled = true;
        b99btn.disabled = true;

    }
}

function sendto9() {
    if (g9 == 1) {
        console.log("game 9 is complete already");
        clearCells();
        checkGames();
    } 
    else {
        clearCells();
        checkGames();
        console.log("disable all but game 9");
        //Disable g1 tiles
        b11btn.style.backgroundColor = "darkgray";
        b12btn.style.backgroundColor = "darkgray";
        b13btn.style.backgroundColor = "darkgray";
        b21btn.style.backgroundColor = "darkgray";
        b22btn.style.backgroundColor = "darkgray";
        b23btn.style.backgroundColor = "darkgray";
        b31btn.style.backgroundColor = "darkgray";
        b32btn.style.backgroundColor = "darkgray";
        b33btn.style.backgroundColor = "darkgray";
    
        //Disable g2 tiles
        b14btn.style.backgroundColor = "darkgray";
        b15btn.style.backgroundColor = "darkgray";
        b16btn.style.backgroundColor = "darkgray";
        b24btn.style.backgroundColor = "darkgray";
        b25btn.style.backgroundColor = "darkgray";
        b26btn.style.backgroundColor = "darkgray";
        b34btn.style.backgroundColor = "darkgray";
        b35btn.style.backgroundColor = "darkgray";
        b36btn.style.backgroundColor = "darkgray";
    
        //Disable g3 tiles
        b17btn.style.backgroundColor = "darkgray";
        b18btn.style.backgroundColor = "darkgray";
        b19btn.style.backgroundColor = "darkgray";
        b27btn.style.backgroundColor = "darkgray";
        b28btn.style.backgroundColor = "darkgray";
        b29btn.style.backgroundColor = "darkgray";
        b37btn.style.backgroundColor = "darkgray";
        b38btn.style.backgroundColor = "darkgray";
        b39btn.style.backgroundColor = "darkgray";
    
        //Disable g4 tiles
        b41btn.style.backgroundColor = "darkgray";
        b42btn.style.backgroundColor = "darkgray";
        b43btn.style.backgroundColor = "darkgray";
        b51btn.style.backgroundColor = "darkgray";
        b52btn.style.backgroundColor = "darkgray";
        b53btn.style.backgroundColor = "darkgray";
        b61btn.style.backgroundColor = "darkgray";
        b62btn.style.backgroundColor = "darkgray";
        b63btn.style.backgroundColor = "darkgray";
    
        //Disable g5 tiles
        b44btn.style.backgroundColor = "darkgray";
        b45btn.style.backgroundColor = "darkgray";
        b46btn.style.backgroundColor = "darkgray";
        b54btn.style.backgroundColor = "darkgray";
        b55btn.style.backgroundColor = "darkgray";
        b56btn.style.backgroundColor = "darkgray";
        b64btn.style.backgroundColor = "darkgray";
        b65btn.style.backgroundColor = "darkgray";
        b66btn.style.backgroundColor = "darkgray";
    
        //Disable g6 tiles
        b47btn.style.backgroundColor = "darkgray";
        b48btn.style.backgroundColor = "darkgray";
        b49btn.style.backgroundColor = "darkgray";
        b57btn.style.backgroundColor = "darkgray";
        b58btn.style.backgroundColor = "darkgray";
        b59btn.style.backgroundColor = "darkgray";
        b67btn.style.backgroundColor = "darkgray";
        b68btn.style.backgroundColor = "darkgray";
        b69btn.style.backgroundColor = "darkgray";
    
        //Disable g7 tiles
        b71btn.style.backgroundColor = "darkgray";
        b72btn.style.backgroundColor = "darkgray";
        b73btn.style.backgroundColor = "darkgray";
        b81btn.style.backgroundColor = "darkgray";
        b82btn.style.backgroundColor = "darkgray";
        b83btn.style.backgroundColor = "darkgray";
        b91btn.style.backgroundColor = "darkgray";
        b92btn.style.backgroundColor = "darkgray";
        b93btn.style.backgroundColor = "darkgray";
    
        //Disable g8 tiles
        b74btn.style.backgroundColor = "darkgray";
        b75btn.style.backgroundColor = "darkgray";
        b76btn.style.backgroundColor = "darkgray";
        b84btn.style.backgroundColor = "darkgray";
        b85btn.style.backgroundColor = "darkgray";
        b86btn.style.backgroundColor = "darkgray";
        b94btn.style.backgroundColor = "darkgray";
        b95btn.style.backgroundColor = "darkgray";
        b96btn.style.backgroundColor = "darkgray";

        //Disable g1 tiles
        b11btn.disabled = true;
        b12btn.disabled = true;
        b13btn.disabled = true;
        b21btn.disabled = true;
        b22btn.disabled = true;
        b23btn.disabled = true;
        b31btn.disabled = true;
        b32btn.disabled = true;
        b33btn.disabled = true;

        //Disable g2 tiles
        b14btn.disabled = true;
        b15btn.disabled = true;
        b16btn.disabled = true;
        b24btn.disabled = true;
        b25btn.disabled = true;
        b26btn.disabled = true;
        b34btn.disabled = true;
        b35btn.disabled = true;
        b36btn.disabled = true;

        //Disable g3 tiles
        b17btn.disabled = true;
        b18btn.disabled = true;
        b19btn.disabled = true;
        b27btn.disabled = true;
        b28btn.disabled = true;
        b29btn.disabled = true;
        b37btn.disabled = true;
        b38btn.disabled = true;
        b39btn.disabled = true;

        //Disable g4 tiles
        b41btn.disabled = true;
        b42btn.disabled = true;
        b43btn.disabled = true;
        b51btn.disabled = true;
        b52btn.disabled = true;
        b53btn.disabled = true;
        b61btn.disabled = true;
        b62btn.disabled = true;
        b63btn.disabled = true;

        //Disable g5 tiles
        b44btn.disabled = true;
        b45btn.disabled = true;
        b46btn.disabled = true;
        b54btn.disabled = true;
        b55btn.disabled = true;
        b56btn.disabled = true;
        b64btn.disabled = true;
        b65btn.disabled = true;
        b66btn.disabled = true;

        //Disable g6 tiles
        b47btn.disabled = true;
        b48btn.disabled = true;
        b49btn.disabled = true;
        b57btn.disabled = true;
        b58btn.disabled = true;
        b59btn.disabled = true;
        b67btn.disabled = true;
        b68btn.disabled = true;
        b69btn.disabled = true;

        //Disable g7 tiles
        b71btn.disabled = true;
        b72btn.disabled = true;
        b73btn.disabled = true;
        b81btn.disabled = true;
        b82btn.disabled = true;
        b83btn.disabled = true;
        b91btn.disabled = true;
        b92btn.disabled = true;
        b93btn.disabled = true;

        //Disable g8 tiles
        b74btn.disabled = true;
        b75btn.disabled = true;
        b76btn.disabled = true;
        b84btn.disabled = true;
        b85btn.disabled = true;
        b86btn.disabled = true;
        b94btn.disabled = true;
        b95btn.disabled = true;
        b96btn.disabled = true;

    }
}