1. The code will print `3` because the variable `i` will be incremeted to 3 (length of `prices`) by the for loop 
2. The code will print `150` because the variable `discountedPrice` will be set to 150 at line 7 (`300 * (1 - 0.5)` is 150)
3. The code will print `150` because the variable `finalPrice` will be set to 150 at line 9 during the 3rd iteration of the for loop
4. This function will return a list of the discounted prices `[ 50, 100, 150 ]`, each of which correspond to the price in the `prices` array discounted by the `discount` variable in the for loop
5. The code causes an error because `i` is only declared within the for loop scope by `let`, but line 12 attempts to use it outside of the for loop
6. The code causes an error because `discountedPrice` is only declared within the for loop scope by `let`, but line 13 attempts to use it outside of the for loop
7. The code will print `150` because the variable `finalPrice` will be set to 150 at line 9 during the 3rd iteration of the for loop
8. This function will return a list of the discounted prices `[ 50, 100, 150 ]`, each of which correspond to the price in the `prices` array discounted by the `discount` variable in the for loop 
9. The code causes an error because `i` is only declared within the for loop scope by `let`, but line 11 attempts to use it outside of the for loop
10. The code will print `3` because the const `length` will be initialized to 3 (length of `prices`) at line 4
11. This function will return a list of the discounted prices `[ 50, 100, 150 ]`, each of which correspond to the price in the `prices` array discounted by the `discount` variable in the for loop. No error is caused because `discounted` did not get reassigned by the code - only the content inside is modified
12. See below
    
    A. `student.name`

    B. `student['Grad Year']`

    C. `student.greeting()`

    D. `student['Favorite Teacher'].name`

    E. `student.courseLoad[0]`

13. See below
    
    A. '32' since `2` map to string representation

    B. 1 since `'3'` map to number representation

    C. 3 since `null` map to number representation `0`

    D. '3null' since `null` map to string representation

    E. 4 since `true` map to number representation `1`

    F. 0 since both `false` and `null` map to number representation `0`

    G. '3undefined' since `undefined` map to string representation

    H. NaN since `undefined` map to number representation `NaN`

14. See below

    A. true since `'2'` map to number representation

    B. false since `'2'` is lexicographically behind `'12'`

    C. true since `'2'` map to number representation

    D. false since the values are not strictly equal

    E. false since `true` map to number representation `1`

    F. true since `Boolean(2)` evaluate to `true`

15. Regular equality check `==` does type conversion before making comparison, while strict equality `===` checks the equality without type conversion
16. See part2-question16.js
17. It would be `[ 2, 4, 6 ]`. The `callback` function returns a value that doubles the input, and in modify array, the returning array `newArr` is appended by the results of `callback` inputting each number in the input array `[ 1, 2, 3 ]`.
18. See part2-question18.js
19. It will be
    ```
    1
    4
    3
    2
    ```