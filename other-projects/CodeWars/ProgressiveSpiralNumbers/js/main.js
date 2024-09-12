function layers(n){
    //your code here
    return matchMedia.ceil((Math.sqrt(n)+1)/2)

    
    // 1, 8, 16, 24, 32, 

}








layers(1) // 1
layers(5) // 2
layers(25) // 3
layers(30) // 4
layers(50) // 5


/*
1 is 1 number
2-9 is 8 numbers
10-25 is 16 numbers
26-59 is 24 numbers
60 - 81 is 32 numbers



65 64 63 62 61 60 59 58 57
66 37 36 35 34 33 32 31 56
67 38 17 16 15 14 13 30 55
68 39 18 05 04 03 12 29 54
69 40 19 06 01 02 11 28 53
70 41 20 07 08 09 10 27 52
71 42 21 22 23 24 25 26 51
72 43 44 45 46 47 48 49 50
73 74 75 76 77 78 79 80 81




1 * 1 = 1
1 * 8 = 8
2 * 8 = 16
3 * 8 =  24
4 * 8 = 32


9


number = 1 + layer * 8

49 - 1 / 8 = ?



layer 1 has 1 number
layer 2 has 8 * 1 numbers
layer 3 has 8 * 2 numbers
layer 4 has 8 * 3 numbers



*/