//1-Right half pyramid
/*
*
* *
* * *
* * * *
* * * * *
*/
let number = Number(prompt('Enter number'));
for (let row = 0; row < number; row++) {
    for (let col = 0; col < number; col++) {
        if (row >= col) {
            document.write("* &nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}
document.write("<hr>");
/*
2-inverted right half pyramid
 * * * * *
 * * * *
 * * *
 *  *
 * 
*/
for (let row = 0; row < number; row++) {
    for (let col = 0; col < number; col++) {
        if (row <= col) {
            document.write("* &nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}
document.write("<hr>");
/*
3-rectangle
* * * * *
* * * * *
* * * * *
* * * * *
 */
for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= number + 1; col++) {
        // if (row <= col) {
        document.write("* &nbsp;&nbsp;");
        // }
    }
    document.write("<br>");
}
document.write("<hr>");
/**
 *4- Hollow Rectangle
 * * * * *
 *       *
 *       *
 * * * * *
 */
for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= number + 1; col++) {
        if (row == 1 || col == 1 || row == number || col == number + 1) {
            document.write("* &nbsp;&nbsp;");
        } else {
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}
document.write("<hr>");
/* 5
- -  -*
- - * *
- * * *
* * * *
 */
for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= number - row; col++) {
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    }
    for (let col = 1; col <= row; col++) {
        document.write("* &nbsp;&nbsp;");
    }
    document.write("<br>");
}
document.write("<hr>");
/*
6 Butterfly Pattern
* - - - - - - *
* * - - - - * *
* * * - - * * *
* * * * * * * *
* * * * * * * *
* * * - - * * *
* * - - - - * *
* - - - - - - *
 */
// 1st half 
for (let row = 1; row <= number; row++) {
    for (let col = 1; col <= row; col++) {
        document.write("* &nbsp;&nbsp;");
    }
    for (let col = 1; col <= 2 * (number - row); col++) {
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    }
    for (let col = 1; col <= row; col++) {
        document.write("* &nbsp;&nbsp;");
    }
    document.write("<br>");
}
for (let row = number; row >= 1; row--) {
    for (let col = 1; col <= row; col++) {
        document.write("* &nbsp;&nbsp;");
    }
    for (let col = 1; col <= 2 * (number - row); col++) {
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    }
    for (let col = 1; col <= row; col++) {
        document.write("* &nbsp;&nbsp;");
    }
    document.write("<br>");
}
document.write("<hr>");
/*
7 Solid Rhombus
- - - - * * * *
- - - * * * *
- - * * * *
- * * * *
 */
for (let row = 1; row <= number; row++) {
    for (let col = 1; col < number - row; col++) {
        document.write("&nbsp;&nbsp;");
    }
    for (let col = 1; col <= number; col++) {
        document.write("* &nbsp;");
    }
    document.write("<br>");
}
document.write("<hr>");