const unparsedInput = [[74, 76, 78, 79, 76],
[38, 40, 43, 44, 44],
[1, 2, 4, 6, 8, 9, 13],
[65, 68, 70, 72, 75, 76, 81],
[89, 91, 92, 95, 93, 94],
[15, 17, 16, 18, 19, 17],
[46, 47, 45, 48, 51, 52, 52],
[77, 78, 79, 82, 79, 83],
[55, 58, 59, 57, 60, 61, 68],
[79, 82, 84, 84, 85, 86],
[23, 24, 25, 25, 23],
[23, 26, 27, 28, 31, 31, 31],
[42, 43, 43, 44, 48],
[72, 74, 74, 77, 82],
[85, 86, 87, 88, 89, 93, 94],
[48, 50, 51, 53, 57, 59, 62, 61],
[29, 32, 34, 38, 38],
[71, 73, 75, 78, 82, 85, 88, 92],
[1, 4, 7, 8, 12, 18],
[16, 17, 20, 25, 27, 30, 33],
[49, 52, 55, 62, 63, 66, 68, 67],
[69, 71, 74, 76, 78, 80, 85, 85],
[34, 36, 39, 42, 48, 49, 53],
[48, 51, 52, 55, 61, 67],
[55, 54, 57, 60, 61],
[34, 33, 34, 37, 39, 40, 43, 40],
[23, 20, 23, 24, 26, 29, 29],
[22, 21, 23, 26, 27, 30, 31, 35],
[79, 76, 78, 81, 82, 89],
[39, 38, 41, 38, 39, 42],
[47, 45, 48, 50, 51, 52, 50, 48],
[57, 55, 58, 59, 62, 60, 61, 61],
[94, 92, 89, 91, 92, 96],
[67, 66, 69, 70, 71, 72, 71, 78],
[41, 39, 42, 45, 45, 46],
[39, 38, 41, 41, 44, 41],
[21, 20, 22, 23, 26, 26, 29, 29],
[36, 35, 36, 39, 39, 43],
[60, 57, 58, 58, 63],
[12, 11, 13, 17, 18],
[49, 46, 47, 49, 52, 56, 53],
[30, 28, 29, 31, 32, 36, 36],
[81, 80, 82, 86, 89, 91, 95],
[60, 59, 63, 66, 71],
[71, 68, 69, 75, 76, 78],
[24, 22, 25, 27, 28, 30, 37, 35],
[6, 5, 12, 14, 17, 20, 20],
[56, 54, 60, 62, 66],
[82, 81, 88, 89, 94],
[52, 52, 54, 57, 60, 62, 64],
[3, 3, 4, 6, 9, 12, 10],
[89, 89, 92, 95, 97, 97],
[67, 67, 69, 72, 75, 78, 82],
[8, 8, 10, 12, 19],
[10, 10, 12, 13, 10, 11],
[59, 59, 60, 63, 61, 64, 65, 64],
[68, 68, 70, 71, 70, 70],
[31, 31, 30, 31, 33, 37],
[63, 63, 60, 63, 68],
[52, 52, 52, 55, 58, 60, 61, 64],
[34, 34, 37, 39, 42, 42, 43, 41],
[35, 35, 36, 39, 39, 40, 40],
[69, 69, 69, 72, 73, 74, 78],
[41, 41, 41, 43, 50],
[27, 27, 30, 33, 37, 40, 42],
[61, 61, 63, 65, 69, 67],
[3, 3, 5, 7, 11, 14, 14],
[58, 58, 60, 62, 64, 68, 69, 73],
[21, 21, 25, 26, 29, 35],
[76, 76, 79, 85, 88],
[49, 49, 50, 53, 55, 60, 58],
[79, 79, 84, 87, 87],
[63, 63, 64, 66, 67, 72, 74, 78],
[68, 68, 70, 72, 78, 81, 82, 87],
[43, 47, 49, 50, 53, 56, 59, 61],
[62, 66, 68, 70, 73, 74, 75, 72],
[21, 25, 26, 29, 31, 31],
[16, 20, 21, 23, 24, 27, 31],
[23, 27, 30, 31, 33, 40],
[42, 46, 47, 50, 47, 50],
[76, 80, 81, 83, 85, 84, 83],
[13, 17, 20, 23, 26, 27, 25, 25],
[8, 12, 9, 10, 13, 14, 15, 19],
[18, 22, 23, 26, 27, 29, 27, 34],
[42, 46, 46, 48, 49],
[52, 56, 59, 60, 60, 62, 64, 61],
[77, 81, 82, 82, 84, 84],
[76, 80, 80, 82, 86],
[53, 57, 60, 62, 63, 64, 64, 70],
[16, 20, 24, 27, 29, 32],
[51, 55, 57, 61, 63, 65, 62],
[82, 86, 90, 91, 91],
[61, 65, 66, 69, 73, 77],
[38, 42, 44, 48, 50, 53, 55, 62],
[13, 17, 19, 25, 27, 28, 31],
[32, 36, 41, 43, 41],
[63, 67, 68, 71, 77, 77],
[23, 27, 28, 31, 38, 40, 44],
[45, 49, 50, 55, 56, 58, 59, 64],
[71, 77, 78, 81, 83],
[26, 33, 35, 36, 37, 35],
[57, 64, 65, 66, 66],
[11, 16, 18, 20, 22, 24, 25, 29],
[35, 41, 44, 47, 48, 49, 50, 55],
[52, 59, 60, 57, 60, 63],
[51, 58, 57, 59, 61, 59],
[4, 10, 8, 9, 12, 13, 15, 15],
[27, 33, 35, 32, 33, 35, 39],
[20, 26, 25, 26, 27, 29, 31, 38],
[36, 41, 43, 44, 44, 47],
[48, 54, 57, 60, 61, 61, 63, 62],
[40, 46, 49, 50, 52, 52, 52],
[13, 20, 22, 22, 25, 29],
[45, 52, 52, 55, 61],
[73, 78, 79, 82, 85, 88, 92, 95],
[51, 57, 60, 61, 65, 67, 70, 67],
[6, 12, 16, 19, 20, 22, 23, 23],
[12, 18, 22, 25, 26, 30],
[56, 61, 65, 66, 72],
[25, 30, 33, 38, 41, 43],
[64, 70, 76, 79, 77],
[36, 41, 48, 49, 49],
[59, 64, 66, 68, 74, 77, 81],
[44, 51, 57, 59, 64],
[87, 86, 83, 82, 81, 78, 77, 80],
[55, 52, 51, 49, 49],
[46, 43, 41, 39, 38, 37, 33],
[33, 31, 28, 27, 26, 24, 22, 17],
[83, 80, 78, 77, 79, 76, 73],
[51, 49, 47, 46, 48, 46, 44, 46],
[56, 55, 52, 55, 52, 52],
[13, 10, 9, 12, 11, 7],
[36, 33, 31, 34, 27],
[77, 76, 75, 75, 73, 70, 68],
[93, 91, 91, 89, 88, 86, 83, 86],
[92, 89, 89, 86, 86],
[51, 48, 48, 46, 42],
[41, 38, 38, 37, 34, 29],
[51, 50, 48, 46, 42, 40],
[84, 83, 79, 78, 80],
[19, 16, 13, 11, 9, 5, 5],
[70, 67, 66, 62, 61, 57],
[73, 71, 70, 69, 68, 64, 58],
[93, 92, 91, 88, 81, 80, 78],
[56, 54, 52, 50, 45, 46],
[51, 48, 45, 43, 37, 37],
[82, 80, 74, 71, 67],
[59, 56, 54, 52, 50, 47, 40, 35],
[17, 20, 19, 18, 16, 13, 10, 7],
[74, 76, 73, 72, 69, 67, 65, 67],
[95, 96, 93, 92, 92],
[25, 28, 26, 23, 20, 17, 13],
[43, 45, 42, 40, 38, 32],
[91, 92, 93, 91, 88],
[41, 44, 42, 39, 38, 39, 42],
[41, 43, 42, 41, 42, 40, 40],
[63, 66, 68, 67, 63],
[65, 66, 64, 62, 64, 61, 59, 53],
[84, 85, 82, 82, 81, 78, 77, 75],
[23, 26, 25, 24, 24, 22, 23],
[30, 31, 29, 27, 25, 25, 25],
[31, 32, 31, 31, 29, 28, 26, 22],
[12, 15, 15, 13, 6],
[13, 14, 12, 9, 5, 2],
[10, 12, 10, 6, 8],
[61, 64, 62, 60, 58, 54, 51, 51],
[92, 93, 89, 86, 82],
[69, 70, 67, 66, 63, 59, 54],
[80, 81, 79, 77, 74, 68, 66],
[64, 67, 61, 59, 56, 58],
[65, 67, 60, 57, 56, 54, 52, 52],
[51, 52, 51, 49, 47, 40, 38, 34],
[51, 52, 51, 49, 43, 36],
[87, 87, 84, 82, 81, 78, 75, 73],
[37, 37, 36, 35, 33, 36],
[71, 71, 69, 68, 65, 63, 63],
[16, 16, 15, 13, 9],
[49, 49, 46, 44, 38],
[64, 64, 67, 65, 63],
[7, 7, 10, 8, 6, 3, 5],
[30, 30, 27, 24, 21, 19, 21, 21],
[57, 57, 56, 58, 56, 52],
[79, 79, 82, 79, 74],
[23, 23, 21, 19, 16, 16, 14, 13],
[91, 91, 91, 88, 87, 84, 83, 84],
[98, 98, 95, 94, 94, 94],
[93, 93, 91, 88, 88, 87, 83],
[32, 32, 31, 29, 29, 28, 22],
[33, 33, 31, 30, 28, 24, 23, 22],
[49, 49, 46, 43, 41, 37, 34, 35],
[65, 65, 61, 58, 58],
[56, 56, 55, 54, 50, 47, 45, 41],
[17, 17, 16, 12, 5],
[63, 63, 60, 59, 58, 51, 50, 47],
[48, 48, 43, 42, 41, 40, 37, 39],
[90, 90, 84, 83, 83],
[48, 48, 42, 40, 39, 35],
[50, 50, 47, 44, 41, 36, 34, 29],
[34, 30, 27, 24, 23],
[84, 80, 79, 78, 80],
[79, 75, 73, 71, 69, 67, 64, 64],
[16, 12, 11, 9, 8, 4],
[30, 26, 25, 23, 22, 21, 20, 15],
[13, 9, 11, 8, 7],
[26, 22, 21, 20, 19, 20, 21],
[27, 23, 25, 22, 20, 18, 18],
[37, 33, 31, 32, 29, 25],
[45, 41, 38, 37, 34, 32, 35, 28],
[56, 52, 50, 50, 48],
[19, 15, 13, 10, 10, 8, 11],
[18, 14, 14, 12, 12],
[81, 77, 76, 76, 72],
[81, 77, 77, 74, 68],
[43, 39, 38, 36, 32, 31, 28, 27],
[98, 94, 93, 89, 92],
[64, 60, 56, 53, 52, 51, 51],
[93, 89, 88, 85, 81, 77],
[31, 27, 23, 21, 18, 17, 16, 9],
[84, 80, 79, 77, 75, 69, 68],
[80, 76, 73, 68, 65, 68],
[97, 93, 86, 83, 81, 81],
[47, 43, 38, 36, 35, 34, 33, 29],
[69, 65, 63, 58, 53],
[37, 30, 27, 24, 22, 19, 16],
[95, 88, 85, 84, 83, 85],
[22, 17, 14, 11, 11],
[93, 88, 87, 86, 83, 81, 80, 76],
[86, 81, 80, 77, 76, 73, 66],
[96, 91, 89, 90, 89, 87],
[84, 77, 75, 78, 76, 73, 76],
[12, 7, 9, 7, 7],
[99, 94, 92, 94, 92, 90, 87, 83],
[32, 25, 23, 20, 17, 16, 17, 10],
[94, 89, 88, 88, 86, 84, 83, 80],
[56, 51, 51, 50, 49, 47, 46, 48],
[89, 84, 82, 80, 80, 77, 77],
[71, 64, 63, 63, 59],
[71, 64, 62, 62, 55],
[41, 35, 32, 29, 25, 22, 19],
[76, 69, 67, 65, 64, 60, 58, 60],
[50, 44, 43, 41, 40, 36, 36],
[43, 37, 33, 32, 28],
[33, 27, 23, 21, 18, 15, 14, 9],
[60, 53, 47, 46, 45],
[52, 45, 39, 37, 34, 35],
[20, 13, 10, 8, 3, 3],
[47, 40, 38, 32, 30, 28, 26, 22],
[72, 65, 58, 55, 50],
[9, 10, 11, 14, 17, 19, 17],
[47, 49, 51, 54, 57, 57],
[38, 40, 41, 43, 45, 49],
[39, 40, 41, 43, 44, 45, 52],
[18, 20, 18, 21, 24, 25, 27, 30],
[86, 89, 87, 88, 90, 93, 94, 91],
[85, 86, 88, 90, 88, 90, 93, 93],
[51, 53, 54, 56, 54, 58],
[27, 30, 28, 31, 32, 37],
[57, 60, 63, 63, 65],
[52, 54, 54, 56, 55],
[25, 27, 30, 30, 30],
[69, 70, 73, 74, 74, 76, 80],
[15, 16, 18, 18, 19, 21, 28],
[23, 24, 27, 31, 33],
[24, 27, 30, 34, 36, 37, 35],
[50, 52, 54, 56, 59, 63, 66, 66],
[78, 79, 83, 84, 87, 88, 92],
[17, 18, 20, 21, 25, 31],
[39, 42, 44, 51, 54, 56, 58],
[10, 13, 20, 23, 20],
[8, 9, 10, 15, 18, 18],
[49, 50, 56, 58, 60, 62, 65, 69],
[11, 14, 21, 22, 29],
[88, 87, 90, 93, 94, 96],
[90, 87, 88, 90, 87],
[48, 45, 47, 48, 48],
[37, 36, 39, 41, 42, 45, 46, 50],
[3, 1, 2, 3, 4, 10],
[77, 76, 75, 78, 81, 82],
[38, 35, 33, 34, 31],
[41, 38, 41, 44, 42, 42],
[13, 12, 10, 12, 16],
[19, 17, 14, 15, 16, 22],
[14, 12, 14, 15, 15, 18, 20, 22],
[29, 27, 30, 30, 31, 30],
[60, 57, 59, 59, 59],
[78, 76, 77, 80, 80, 82, 86],
[57, 54, 57, 57, 63],
[36, 35, 37, 40, 44, 46],
[42, 40, 41, 44, 48, 45],
[74, 72, 74, 77, 78, 82, 82],
[12, 11, 12, 16, 20],
[79, 77, 78, 81, 83, 86, 90, 95],
[39, 37, 43, 46, 48],
[53, 51, 57, 58, 59, 58],
[23, 20, 21, 26, 26],
[77, 74, 81, 84, 87, 91],
[66, 63, 69, 72, 79],
[27, 27, 30, 31, 33, 35, 36, 38],
[30, 30, 33, 34, 36, 38, 41, 40],
[56, 56, 57, 58, 58],
[75, 75, 76, 79, 83],
[33, 33, 34, 35, 38, 40, 42, 49],
[8, 8, 11, 14, 12, 14, 16, 18],
[36, 36, 39, 41, 42, 44, 42, 40],
[48, 48, 50, 51, 50, 52, 52],
[20, 20, 18, 19, 22, 25, 29],
[54, 54, 53, 56, 62],
[68, 68, 68, 70, 72, 74, 76, 78],
[22, 22, 22, 24, 25, 28, 27],
[93, 93, 93, 95, 95],
[70, 70, 70, 72, 74, 77, 79, 83],
[79, 79, 80, 82, 82, 83, 85, 92],
[52, 52, 56, 59, 61],
[1, 1, 4, 7, 10, 12, 16, 15],
[41, 41, 43, 47, 47],
[39, 39, 43, 44, 46, 48, 49, 53],
[38, 38, 41, 45, 50],
[71, 71, 72, 75, 81, 83, 84, 87],
[79, 79, 85, 87, 88, 86],
[29, 29, 31, 37, 37],
[41, 41, 43, 46, 48, 51, 57, 61],
[62, 62, 63, 65, 70, 71, 74, 79],
[39, 43, 46, 49, 50, 52],
[37, 41, 42, 45, 48, 47],
[4, 8, 9, 12, 14, 14],
[26, 30, 31, 34, 36, 37, 39, 43],
[1, 5, 7, 9, 12, 14, 15, 20],
[18, 22, 25, 27, 24, 26, 28],
[35, 39, 40, 42, 43, 41, 44, 43],
[69, 73, 71, 73, 74, 76, 76],
[6, 10, 12, 13, 12, 14, 16, 20],
[77, 81, 82, 81, 84, 89],
[37, 41, 41, 44, 46, 48, 49, 50],
[47, 51, 52, 53, 53, 56, 54],
[7, 11, 12, 13, 15, 15, 16, 16],
[51, 55, 56, 58, 61, 63, 63, 67],
[55, 59, 59, 60, 62, 64, 66, 71],
[47, 51, 52, 55, 57, 58, 62, 64],
[23, 27, 31, 32, 34, 36, 34],
[75, 79, 83, 84, 87, 87],
[20, 24, 25, 27, 31, 35],
[62, 66, 70, 72, 78],
[4, 8, 9, 11, 18, 20, 23],
[65, 69, 71, 76, 77, 79, 78],
[43, 47, 48, 53, 56, 57, 59, 59],
[36, 40, 43, 46, 51, 55],
[14, 18, 21, 24, 29, 34],
[44, 50, 51, 54, 56],
[1, 6, 9, 10, 11, 14, 13],
[24, 30, 31, 34, 37, 38, 41, 41],
[11, 18, 21, 22, 26],
[50, 56, 59, 60, 62, 68],
[21, 26, 25, 27, 30],
[37, 44, 41, 44, 41],
[61, 66, 67, 70, 68, 68],
[89, 94, 91, 92, 94, 95, 99],
[53, 60, 63, 61, 62, 68],
[8, 15, 16, 16, 17, 18],
[64, 70, 70, 73, 76, 75],
[74, 81, 81, 83, 83],
[10, 16, 19, 19, 22, 26],
[57, 63, 63, 64, 70],
[53, 59, 62, 63, 66, 70, 73],
[6, 13, 17, 19, 17],
[16, 22, 24, 28, 29, 31, 31],
[65, 70, 72, 76, 80],
[56, 63, 64, 67, 71, 73, 80],
[65, 72, 74, 76, 78, 84, 87],
[37, 42, 47, 49, 50, 48],
[63, 69, 72, 77, 78, 79, 79],
[67, 73, 76, 83, 87],
[59, 66, 68, 73, 79],
[35, 33, 32, 29, 31],
[29, 26, 25, 24, 22, 20, 20],
[53, 52, 51, 48, 44],
[42, 39, 37, 34, 33, 31, 26],
[14, 12, 9, 8, 5, 3, 4, 1],
[89, 87, 89, 88, 86, 88],
[50, 47, 48, 45, 42, 40, 39, 39],
[22, 20, 17, 20, 17, 13],
[86, 84, 87, 85, 82, 75],
[86, 84, 82, 81, 80, 80, 78],
[20, 19, 17, 15, 13, 10, 10, 13],
[14, 13, 12, 12, 12],
[85, 82, 82, 79, 77, 74, 71, 67],
[77, 74, 74, 72, 65],
[21, 18, 15, 12, 10, 6, 5],
[22, 20, 19, 17, 13, 10, 7, 9],
[61, 60, 57, 56, 52, 52],
[74, 72, 69, 65, 63, 60, 59, 55],
[74, 73, 71, 70, 66, 63, 61, 55],
[79, 78, 75, 68, 66, 65, 63],
[21, 19, 16, 13, 6, 7],
[91, 89, 82, 81, 78, 77, 74, 74],
[57, 55, 54, 52, 47, 43],
[82, 79, 78, 75, 68, 66, 60],
[79, 82, 80, 78, 76],
[89, 91, 90, 89, 88, 89],
[22, 23, 21, 20, 20],
[90, 92, 90, 89, 85],
[86, 89, 86, 85, 84, 79],
[80, 83, 85, 82, 80],
[59, 60, 58, 55, 57, 59],
[59, 60, 61, 59, 58, 57, 57],
[28, 30, 28, 29, 27, 23],
[5, 7, 5, 8, 1],
[12, 14, 14, 11, 9, 7],
[17, 20, 17, 17, 18],
[27, 30, 30, 27, 24, 24],
[24, 27, 26, 26, 24, 22, 18],
[21, 23, 21, 18, 15, 15, 8],
[33, 35, 31, 28, 27, 24, 21],
[60, 62, 58, 57, 58],
[9, 11, 8, 7, 5, 1, 1],
[51, 54, 50, 47, 43],
[61, 63, 60, 58, 56, 52, 50, 45],
[90, 91, 88, 81, 79, 78, 77],
[53, 56, 55, 48, 45, 48],
[31, 32, 31, 26, 24, 21, 18, 18],
[31, 34, 32, 25, 23, 19],
[17, 18, 11, 8, 3],
[95, 95, 93, 90, 87, 84, 81, 80],
[92, 92, 91, 89, 87, 85, 87],
[64, 64, 62, 61, 58, 58],
[14, 14, 11, 8, 6, 2],
[81, 81, 80, 78, 72],
[24, 24, 22, 20, 23, 20],
[73, 73, 70, 72, 70, 73],
[50, 50, 49, 46, 48, 48],
[28, 28, 26, 28, 24],
[81, 81, 84, 81, 75],
[91, 91, 89, 89, 87, 85, 82],
[32, 32, 32, 30, 28, 29],
[33, 33, 32, 29, 26, 26, 26],
[82, 82, 82, 81, 77],
[56, 56, 55, 52, 52, 50, 47, 42],
[29, 29, 25, 23, 22, 19, 16],
[55, 55, 52, 49, 45, 42, 44],
[85, 85, 81, 78, 78],
[19, 19, 16, 13, 9, 8, 5, 1],
[29, 29, 26, 24, 20, 19, 14],
[99, 99, 96, 90, 87, 84],
[27, 27, 21, 18, 15, 18],
[50, 50, 43, 40, 40],
[65, 65, 63, 62, 61, 56, 52],
[37, 37, 30, 29, 23],
[82, 78, 77, 76, 73, 72, 71],
[58, 54, 52, 51, 48, 47, 44, 47],
[29, 25, 22, 21, 18, 17, 15, 15],
[67, 63, 62, 61, 59, 56, 52],
[38, 34, 32, 29, 22],
[86, 82, 81, 79, 81, 80, 78, 76],
[49, 45, 46, 44, 46],
[94, 90, 92, 89, 88, 88],
[39, 35, 36, 35, 34, 31, 30, 26],
[84, 80, 77, 76, 79, 78, 76, 71],
[16, 12, 9, 9, 8, 5],
[57, 53, 51, 51, 52],
[26, 22, 22, 19, 16, 14, 13, 13],
[62, 58, 57, 57, 56, 53, 49],
[54, 50, 48, 45, 45, 42, 35],
[70, 66, 62, 60, 58, 55, 53],
[45, 41, 37, 36, 33, 32, 34],
[39, 35, 32, 28, 26, 23, 23],
[94, 90, 86, 83, 82, 79, 75],
[73, 69, 65, 63, 62, 55],
[98, 94, 93, 90, 83, 80],
[80, 76, 74, 73, 71, 66, 65, 66],
[75, 71, 68, 65, 58, 55, 55],
[21, 17, 15, 14, 9, 8, 5, 1],
[72, 68, 62, 59, 58, 56, 50],
[89, 83, 81, 79, 78, 77, 75],
[67, 60, 57, 54, 52, 50, 49, 51],
[74, 68, 67, 64, 61, 61],
[99, 94, 91, 90, 89, 85],
[68, 63, 62, 61, 60, 57, 54, 47],
[71, 65, 63, 60, 61, 58, 56, 53],
[43, 36, 33, 32, 33, 35],
[20, 15, 14, 16, 16],
[23, 18, 20, 18, 17, 13],
[32, 27, 24, 23, 26, 25, 19],
[69, 64, 64, 61, 60, 57, 54, 51],
[27, 20, 17, 17, 19],
[80, 75, 75, 72, 69, 66, 66],
[99, 92, 91, 90, 90, 89, 85],
[74, 68, 68, 65, 63, 56],
[64, 59, 56, 53, 52, 49, 45, 44],
[94, 89, 86, 84, 80, 83],
[34, 27, 23, 20, 19, 18, 18],
[41, 34, 32, 28, 27, 26, 24, 20],
[70, 65, 64, 63, 61, 57, 51],
[50, 43, 42, 40, 39, 34, 33, 32],
[79, 72, 67, 65, 66],
[76, 70, 68, 67, 62, 59, 59],
[19, 12, 7, 6, 2],
[35, 29, 26, 25, 18, 13],
[32, 30, 29, 28, 25, 25],
[65, 68, 70, 73, 75, 77, 80, 84],
[80, 80, 77, 80, 82],
[88, 90, 88, 86, 83, 80, 80, 76],
[70, 72, 75, 73, 74],
[14, 10, 9, 6, 4, 3, 2, 1],
[84, 85, 84, 82, 79, 79, 78],
[62, 60, 61, 63, 64, 63, 64, 66],
[85, 89, 91, 94, 94, 96],
[22, 22, 26, 27, 28, 28],
[46, 46, 44, 43, 39, 37, 32],
[43, 49, 50, 53, 52, 54, 58],
[65, 66, 65, 61, 56],
[31, 35, 41, 42, 39],
[32, 29, 26, 24, 21, 20, 16, 16],
[19, 14, 11, 10, 9, 5],
[16, 20, 23, 30, 30],
[1, 1, 3, 7, 10],
[24, 22, 20, 23, 20, 16],
[15, 14, 16, 19, 20, 21, 20],
[53, 53, 49, 48, 51],
[57, 57, 54, 51, 48, 50],
[89, 85, 85, 84, 80],
[57, 55, 50, 47, 46, 42],
[26, 29, 28, 25, 25, 23, 17],
[16, 18, 16, 11, 10],
[6, 13, 13, 16, 21],
[88, 88, 90, 91, 93, 93, 95, 92],
[20, 16, 13, 11, 7],
[26, 33, 35, 36, 37, 40, 39],
[30, 25, 23, 21, 19, 17, 19, 13],
[26, 26, 29, 32, 33, 40, 42, 46],
[69, 63, 59, 57, 55, 50],
[90, 93, 90, 89, 86, 86],
[74, 78, 81, 84, 88],
[39, 40, 40, 42, 46],
[87, 84, 84, 83, 81, 79],
[77, 72, 68, 65, 64, 62],
[41, 41, 39, 42, 44],
[82, 82, 85, 92, 98],
[11, 11, 8, 6, 4, 4],
[89, 83, 82, 84, 83, 80],
[5, 3, 7, 8, 11, 8],
[36, 41, 44, 44, 48],
[26, 19, 17, 15, 13, 12, 10, 7],
[52, 49, 50, 49, 48, 47],
[26, 32, 32, 33, 33],
[38, 42, 45, 46, 46, 46],
[66, 69, 66, 63, 64],
[37, 42, 43, 44, 47, 48, 51],
[75, 75, 73, 70, 66, 62],
[97, 93, 86, 85, 85],
[63, 63, 66, 69, 71, 73, 75, 82],
[20, 16, 15, 13, 13],
[77, 77, 76, 73, 73, 71, 70],
[12, 16, 17, 15, 16, 21],
[68, 65, 58, 57, 57],
[56, 56, 60, 63, 60],
[16, 16, 19, 16, 14, 13, 10, 7],
[59, 55, 54, 50, 53],
[43, 39, 33, 31, 30],
[79, 80, 78, 78, 79],
[49, 47, 46, 44, 41, 41, 41],
[23, 25, 23, 21, 20, 17, 19, 19],
[28, 35, 38, 41, 42, 42, 44],
[56, 60, 62, 60, 64],
[18, 18, 20, 19, 19],
[75, 74, 78, 79, 80, 83, 83],
[58, 55, 53, 47, 44, 45],
[24, 24, 23, 21, 17, 16, 16],
[27, 20, 19, 15, 12, 11, 8, 9],
[59, 56, 53, 51, 49, 47, 43, 39],
[64, 64, 62, 61, 54, 52, 55],
[66, 66, 71, 74, 75, 77, 78, 75],
[77, 77, 76, 69, 66, 64, 57],
[30, 28, 29, 32, 38, 40],
[72, 71, 72, 73, 75, 76, 77, 77],
[81, 80, 83, 81, 83],
[40, 40, 39, 37, 36, 35, 34, 32],
[52, 52, 55, 54, 56, 59, 65],
[18, 15, 18, 19, 21, 28],
[48, 46, 49, 47, 48, 48],
[51, 47, 45, 43, 45],
[16, 19, 19, 20, 22, 25, 27, 29],
[8, 12, 11, 14, 17, 20],
[77, 82, 85, 86, 85, 88, 94],
[47, 44, 49, 52, 53, 57],
[64, 60, 55, 53, 46],
[93, 92, 89, 87, 85, 81, 79, 80],
[95, 92, 93, 96, 94, 97, 95],
[93, 91, 91, 90, 86],
[21, 15, 13, 11, 12, 14],
[25, 26, 25, 22, 21, 18, 14],
[41, 41, 39, 38, 33, 29],
[18, 22, 26, 29, 27],
[88, 86, 89, 91, 91, 98],
[55, 55, 55, 53, 51, 49, 49],
[32, 35, 32, 33, 30],
[61, 60, 60, 57, 56, 51],
[12, 11, 14, 13, 15, 19],
[68, 64, 64, 62, 61, 61],
[20, 27, 30, 36, 39, 41],
[17, 17, 19, 23, 24, 26, 33],
[51, 49, 50, 51, 55, 56, 60],
[21, 16, 15, 12, 11, 8, 11],
[36, 35, 38, 43, 44, 44],
[18, 18, 20, 26, 26],
[24, 29, 31, 34, 34, 36, 33],
[75, 76, 74, 72, 71, 71, 71],
[88, 88, 87, 85, 80, 78],
[74, 73, 72, 68, 67, 65, 64, 57],
[74, 67, 67, 64, 63, 58],
[71, 70, 73, 74, 77],
[69, 63, 60, 57, 55, 50],
[3, 5, 11, 12, 14, 19],
[64, 68, 70, 71, 69],
[40, 36, 35, 38, 36, 34],
[38, 39, 35, 32, 31, 30, 27, 24],
[59, 58, 60, 63, 67, 68, 75],
[80, 78, 77, 76, 77, 77],
[72, 79, 81, 82, 84, 90, 92, 91],
[46, 39, 39, 37, 38],
[10, 17, 18, 19, 21, 21],
[67, 73, 74, 73, 74, 72],
[57, 57, 55, 58, 54],
[57, 59, 61, 61, 63, 66, 65],
[6, 10, 10, 11, 14, 19],
[6, 7, 10, 11, 15, 16, 19, 19],
[60, 62, 63, 66, 73],
[26, 19, 19, 16, 14, 14],
[28, 32, 39, 42, 44, 46],
[78, 84, 85, 92, 96],
[52, 52, 56, 58, 60, 64],
[46, 44, 50, 53, 59],
[56, 52, 49, 47, 46, 42, 39, 36],
[32, 32, 34, 35, 36, 38, 41, 38],
[38, 32, 29, 23, 21],
[70, 71, 76, 79, 80, 82, 83, 87],
[40, 36, 35, 32, 34, 31, 32],
[51, 57, 60, 64, 65, 67, 70],
[31, 31, 32, 33, 32, 33, 33],
[37, 38, 36, 30, 26],
[71, 67, 65, 60, 58, 55, 51],
[84, 80, 80, 77, 74, 75],
[32, 38, 35, 36, 39, 42],
[60, 60, 62, 63, 63, 66, 73],
[42, 42, 43, 46, 49],
[58, 59, 56, 53, 52, 50, 47],
[67, 67, 64, 58, 56, 53, 52, 52],
[42, 48, 50, 54, 58],
[80, 83, 78, 77, 76, 75, 73, 67],
[77, 78, 74, 71, 72],
[48, 50, 52, 54, 61, 63, 65, 66],
[46, 50, 51, 54, 54, 56, 54],
[20, 24, 25, 28, 31, 38],
[46, 48, 49, 50, 53, 53],
[21, 18, 20, 21, 25, 26, 29],
[54, 60, 64, 67, 69, 71, 71],
[67, 60, 53, 51, 50, 49, 48, 48],
[44, 45, 45, 46, 47, 48, 50, 57],
[55, 58, 61, 61, 62, 64, 65, 65],
[49, 48, 48, 51, 52, 54, 55, 59],
[38, 34, 32, 28, 24],
[78, 82, 85, 87, 89, 92, 94, 95],
[35, 31, 29, 28, 31, 27],
[71, 72, 73, 70, 70],
[54, 50, 46, 44, 43, 37],
[29, 22, 17, 16, 17],
[58, 59, 60, 64, 67, 71],
[21, 25, 26, 27, 27],
[19, 23, 25, 28, 29, 26, 29, 27],
[77, 77, 79, 81, 81, 82, 82],
[34, 34, 32, 29, 27, 25, 21, 20],
[22, 29, 31, 33, 36, 34, 37, 37],
[14, 20, 23, 26, 33],
[40, 37, 34, 30, 29],
[85, 89, 91, 90, 92, 92],
[65, 64, 67, 68, 70, 72, 73, 77],
[63, 63, 66, 71, 72, 73],
[15, 13, 16, 16, 19, 22],
[11, 13, 9, 7, 7],
[88, 88, 88, 89, 90, 93, 94],
[89, 89, 88, 88, 86, 85, 84, 87],
[2, 1, 2, 3, 3, 5, 5],
[61, 63, 70, 72, 73, 73],
[53, 48, 47, 50, 48, 47, 46, 42],
[37, 41, 44, 48, 53],
[47, 50, 48, 44, 43, 40, 36],
[19, 24, 25, 31, 37],
[70, 70, 69, 67, 65, 65, 61],
[38, 44, 45, 48, 54, 57, 58, 58],
[54, 49, 46, 44, 42, 38, 38],
[81, 82, 84, 86, 91, 92, 91],
[15, 13, 12, 10, 9, 6, 2],
[51, 56, 59, 60, 61, 65],
[44, 45, 44, 41, 34],
[75, 77, 74, 75, 77, 76],
[51, 45, 44, 41, 39, 37, 37],
[19, 23, 27, 29, 30, 30],
[89, 85, 83, 81, 80, 79, 73],
[18, 19, 12, 10, 9, 7, 5, 6],
[41, 40, 34, 32, 29, 28],
[88, 84, 80, 78, 77, 76, 76],
[86, 89, 86, 85, 83, 85, 83, 79],
[43, 43, 44, 43, 44, 45, 48, 52],
[74, 68, 62, 61, 60, 57, 55, 49],
[60, 60, 63, 63, 67],
[13, 17, 19, 21, 27, 31],
[41, 41, 39, 39, 36, 29],
[85, 85, 82, 79, 72],
[61, 59, 57, 54, 53, 55],
[59, 55, 54, 54, 53, 50],
[80, 79, 79, 77, 74, 76],
[24, 21, 23, 29, 28],
[1, 7, 8, 10, 14, 13],
[95, 95, 94, 97, 94, 89],
[79, 77, 75, 74, 67, 64, 58],
[5, 6, 8, 5, 7, 8, 10, 16],
[44, 41, 39, 37, 36, 35, 28],
[64, 67, 71, 74, 75, 78, 77],
[49, 49, 48, 47, 45, 42, 38],
[63, 59, 58, 58, 56, 51],
[26, 26, 25, 28, 30, 29],
[77, 77, 79, 82, 82],
[11, 18, 19, 23, 30],
[17, 14, 11, 13, 8],
[98, 92, 91, 90, 87, 85, 81, 77],
[65, 62, 65, 63, 65, 72],
[11, 15, 16, 21, 28],
[95, 93, 95, 95, 96, 98, 97],
[87, 80, 79, 76, 75, 75, 72],
[66, 67, 66, 59, 58, 55, 55],
[24, 19, 13, 10, 9, 6, 5, 1],
[4, 8, 8, 11, 15],
[72, 73, 76, 74, 73, 68],
[95, 91, 89, 87, 90, 90],
[1, 2, 5, 3, 4, 7],
[60, 55, 52, 52, 49, 45],
[62, 55, 54, 51, 52, 52],
[7, 11, 13, 15, 17, 21, 25],
[2, 4, 5, 7, 11, 12, 14],
[60, 62, 63, 64, 67, 68, 72, 79],
[8, 8, 9, 10, 11, 13, 17],
[83, 79, 77, 78, 75, 70],
[73, 69, 62, 61, 59, 57, 60],
[75, 77, 80, 83, 82],
[47, 50, 51, 52, 51, 55],
[95, 93, 91, 89, 86, 85, 84, 81],
[96, 95, 92, 91, 88, 85, 82],
[14, 15, 16, 17, 20, 21, 23],
[3, 4, 7, 8, 10, 11, 13, 15],
[43, 45, 48, 51, 53, 56, 59, 62],
[67, 66, 65, 64, 63, 62],
[34, 31, 30, 28, 25],
[64, 61, 60, 59, 58, 56, 55],
[2, 5, 8, 9, 11, 13, 15],
[48, 51, 52, 54, 55, 58, 60, 61],
[33, 34, 35, 36, 38],
[12, 14, 17, 20, 23, 24, 25],
[4, 7, 9, 11, 13, 16, 19, 22],
[34, 32, 31, 28, 26, 24, 21, 19],
[58, 57, 56, 55, 54, 53],
[72, 73, 76, 78, 81, 84, 85],
[66, 68, 70, 73, 75, 76, 79],
[40, 42, 44, 46, 47],
[13, 15, 18, 21, 22, 25],
[49, 51, 52, 55, 56, 57],
[49, 50, 52, 53, 54, 57, 59],
[24, 27, 28, 30, 31],
[4, 5, 7, 10, 12, 13, 14, 15],
[59, 58, 56, 55, 54],
[18, 16, 14, 13, 12],
[1, 4, 6, 9, 12, 15, 16],
[66, 64, 63, 62, 59, 57, 54, 53],
[90, 88, 86, 85, 83, 82, 80],
[67, 70, 72, 74, 76, 79, 82, 85],
[57, 56, 54, 52, 49, 48],
[11, 14, 16, 18, 20, 23, 25],
[50, 53, 55, 57, 59, 62, 64],
[77, 78, 81, 82, 84, 86],
[67, 70, 72, 74, 76, 79, 81, 84],
[70, 69, 67, 65, 64, 62, 60, 58],
[6, 9, 12, 14, 17, 18, 21, 23],
[72, 74, 76, 77, 78, 81, 83, 86],
[43, 40, 39, 36, 34, 32, 29],
[49, 47, 46, 44, 43, 40],
[65, 62, 60, 57, 56],
[71, 73, 76, 79, 80],
[74, 71, 69, 68, 66],
[21, 22, 25, 28, 31],
[85, 84, 82, 81, 78],
[42, 44, 46, 47, 48, 50, 51, 54],
[54, 53, 51, 50, 48, 47, 44, 42],
[95, 92, 90, 89, 86],
[80, 81, 82, 84, 85, 86],
[59, 58, 55, 54, 51],
[58, 57, 56, 55, 52],
[32, 35, 36, 38, 41],
[30, 28, 26, 23, 22, 19],
[36, 33, 31, 30, 29, 26, 25, 23],
[53, 55, 56, 58, 59, 61, 62],
[40, 42, 44, 47, 49],
[49, 52, 54, 57, 58],
[71, 74, 77, 78, 81, 83],
[18, 16, 14, 12, 10, 8, 7, 4],
[28, 31, 34, 37, 38, 41],
[5, 8, 11, 14, 16, 19],
[10, 13, 16, 19, 22, 24],
[77, 79, 82, 83, 85, 86, 88, 90],
[49, 46, 43, 40, 38, 37],
[7, 8, 10, 12, 13, 15, 18, 19],
[69, 70, 71, 72, 73, 76],
[52, 51, 48, 47, 45, 42, 40, 39],
[19, 21, 23, 24, 27],
[47, 44, 42, 39, 36, 34],
[35, 36, 37, 38, 40, 42, 44, 46],
[70, 73, 75, 78, 79, 82, 84, 85],
[33, 34, 35, 36, 39, 40, 42],
[71, 73, 76, 78, 80, 83, 85],
[77, 75, 74, 73, 71, 68],
[84, 82, 81, 78, 76, 75],
[32, 31, 29, 28, 26, 23, 22],
[34, 31, 30, 28, 26],
[83, 82, 81, 80, 77, 74, 72],
[81, 79, 78, 77, 75, 74, 71],
[9, 12, 14, 16, 18, 19, 21],
[30, 29, 28, 25, 24],
[46, 47, 48, 50, 52, 54, 57, 59],
[27, 25, 22, 19, 16, 14],
[50, 48, 47, 44, 42],
[27, 24, 22, 21, 19, 18, 17, 15],
[24, 25, 27, 30, 32, 35],
[54, 57, 59, 62, 65, 67, 69],
[90, 88, 85, 83, 82, 81, 79, 76],
[52, 50, 47, 44, 43, 42, 40, 39],
[53, 56, 59, 61, 63, 65, 68, 70],
[75, 74, 72, 70, 69],
[71, 74, 75, 77, 78, 79, 82],
[11, 14, 15, 17, 20, 22, 25, 26],
[23, 21, 19, 17, 16, 14, 12],
[83, 84, 86, 89, 92, 93],
[83, 80, 78, 77, 74, 71, 68, 67],
[51, 52, 55, 57, 60, 63, 64, 66],
[60, 62, 64, 65, 68],
[70, 68, 65, 63, 62, 60, 58],
[82, 83, 85, 86, 89, 90, 92, 93],
[62, 65, 68, 70, 72, 75, 76, 79],
[55, 57, 60, 63, 66, 67, 70, 71],
[23, 26, 29, 31, 34, 35, 36],
[46, 48, 49, 52, 53, 56],
[44, 41, 38, 35, 33, 31, 28],
[74, 75, 77, 80, 82, 83],
[27, 30, 32, 33, 36, 39, 40, 43],
[39, 42, 43, 46, 49, 52, 55, 58],
[29, 27, 25, 22, 19],
[31, 34, 35, 38, 39, 40],
[57, 56, 53, 51, 50, 47],
[36, 34, 33, 31, 29],
[76, 77, 78, 79, 80, 83, 84, 86],
[69, 70, 73, 76, 79, 82, 84],
[84, 87, 90, 92, 93, 94],
[79, 78, 77, 74, 71, 68, 67],
[50, 51, 53, 55, 57, 60],
[43, 46, 49, 52, 53],
[87, 86, 84, 83, 82, 79, 76, 74],
[18, 15, 12, 11, 8, 7, 6, 4],
[87, 85, 84, 83, 82],
[30, 33, 35, 38, 39],
[76, 74, 72, 71, 68, 67, 64],
[56, 57, 59, 62, 63, 65],
[47, 49, 52, 53, 55, 56, 58, 61],
[63, 66, 67, 69, 70],
[51, 52, 54, 56, 58, 61],
[73, 75, 78, 81, 82, 84, 86, 89],
[50, 51, 54, 57, 58, 60, 62],
[92, 89, 86, 84, 82, 79],
[45, 48, 51, 54, 57, 60],
[9, 12, 13, 15, 17, 18],
[13, 12, 9, 6, 5, 4, 2, 1],
[26, 24, 22, 21, 18],
[57, 59, 61, 64, 67],
[2, 5, 7, 9, 10, 12],
[11, 10, 8, 7, 6, 3],
[45, 46, 48, 51, 53, 55, 56, 57],
[27, 28, 30, 33, 35, 36, 37],
[23, 22, 21, 18, 15, 13, 10],
[72, 74, 75, 78, 81, 84, 86, 89],
[38, 40, 42, 45, 47],
[1, 4, 7, 8, 10, 11, 14, 16],
[71, 73, 74, 75, 78, 80, 83, 85],
[16, 19, 20, 23, 26, 29],
[65, 64, 62, 61, 60, 59, 58, 56],
[51, 49, 48, 45, 44, 42, 41],
[80, 81, 84, 87, 88, 90, 93],
[37, 35, 34, 32, 31, 29],
[89, 90, 91, 93, 94, 95, 96],
[62, 64, 66, 69, 70, 72, 75, 78],
[85, 86, 89, 90, 91, 93],
[54, 52, 50, 47, 44, 42, 41, 39],
[79, 80, 81, 83, 84, 86, 89],
[15, 18, 21, 22, 25, 27, 30, 31],
[68, 65, 64, 62, 60, 58],
[80, 81, 83, 84, 85, 87, 90],
[53, 54, 55, 57, 58],
[20, 21, 24, 25, 28, 30, 33, 35],
[78, 79, 82, 85, 86],
[12, 15, 17, 19, 21, 24, 26],
[36, 33, 32, 30, 28, 26, 25],
[68, 70, 73, 75, 78, 81, 82],
[33, 32, 30, 27, 24, 23, 20],
[32, 31, 30, 29, 26],
[82, 79, 76, 75, 74, 72, 71],
[37, 34, 31, 28, 25, 24],
[55, 58, 59, 62, 64, 65, 68, 69],
[27, 28, 31, 33, 36, 38, 41],
[60, 59, 58, 56, 55, 53, 52],
[81, 78, 76, 74, 72, 69],
[72, 70, 68, 65, 64, 63, 60],
[43, 41, 40, 37, 34, 31],
[66, 69, 70, 73, 76],
[24, 25, 28, 31, 32, 34],
[69, 70, 72, 75, 78, 81],
[26, 27, 29, 31, 33, 34],
[7, 8, 10, 12, 15, 16],
[61, 64, 65, 66, 67, 68, 71],
[65, 62, 60, 58, 57, 55],
[15, 18, 21, 23, 24, 26, 28, 31],
[89, 90, 92, 93, 94, 96, 97],
[17, 20, 22, 24, 27],
[45, 44, 41, 39, 37],
[53, 55, 58, 60, 62, 64],
[18, 17, 16, 15, 14, 11, 9],
[60, 61, 64, 66, 69, 72],
[90, 88, 87, 86, 84, 81, 79, 77],
[49, 52, 53, 56, 58, 61, 63],
[84, 82, 81, 80, 78, 76],
[15, 13, 12, 11, 9, 8, 5],
[11, 13, 15, 17, 19, 22, 24, 27],
[85, 82, 80, 77, 75, 72, 70],
[51, 54, 57, 59, 62, 65],
[86, 83, 82, 81, 79, 78, 77],
[25, 22, 20, 18, 16],
[69, 67, 64, 61, 58, 55, 52],
[61, 59, 58, 57, 55],
[97, 95, 94, 91, 88, 85, 84, 83],
[73, 72, 69, 68, 65, 62],
[56, 58, 61, 62, 63, 64, 65, 67],
[31, 34, 36, 37, 39, 41],
[95, 94, 91, 89, 88, 87],
[71, 72, 73, 76, 77, 79, 82, 85],
[44, 47, 49, 52, 55],
[69, 70, 72, 75, 77],
[65, 68, 69, 72, 75, 77, 79],
[33, 32, 29, 28, 27, 26],
[78, 77, 75, 73, 71, 70, 69, 68],
[44, 46, 48, 49, 52, 53, 54],
[56, 53, 51, 48, 47, 46],
[50, 52, 53, 55, 58, 60, 63, 66],
[35, 36, 37, 40, 43, 46, 48, 51],
[32, 35, 37, 39, 42],
[17, 14, 13, 10, 7, 6],
[50, 53, 55, 57, 58, 59, 60, 63],
[26, 29, 32, 33, 35],
[62, 63, 65, 66, 67, 70, 72, 73],
[65, 66, 69, 72, 73, 75],
[41, 39, 37, 36, 35, 34, 32, 29],
[77, 74, 72, 70, 67, 66, 65, 62],
[89, 91, 92, 95, 96, 98, 99],
[21, 19, 17, 15, 13, 10],
[75, 78, 79, 80, 83, 85, 88, 91],
[12, 13, 14, 15, 17, 18, 19, 22],
[23, 20, 19, 17, 14],
[55, 52, 49, 47, 45, 44],
[33, 30, 29, 27, 24, 22, 20],
[92, 91, 90, 87, 84, 81, 78],
[54, 55, 58, 61, 64, 66, 69, 71],
[66, 68, 70, 72, 75, 77],
[37, 34, 31, 28, 26],
[74, 76, 79, 81, 82, 85],
[39, 36, 35, 32, 31, 29, 26, 25],
[55, 54, 51, 48, 46, 45],
[20, 19, 17, 14, 12, 9],
[71, 70, 69, 66, 64],
[11, 9, 6, 5, 4, 2, 1],
[66, 63, 62, 59, 57, 55, 54],
[59, 56, 53, 52, 49, 46, 43, 42],
[66, 67, 70, 71, 74, 76, 79],
[23, 22, 21, 20, 18, 17],
[86, 83, 81, 78, 77, 75],
[38, 39, 40, 41, 42],
[42, 41, 39, 37, 34],
[62, 60, 58, 56, 54],
[92, 91, 89, 86, 84, 83, 81],
[31, 33, 36, 37, 40, 42, 43, 44],
[35, 32, 31, 28, 26, 25],
[62, 61, 60, 59, 57, 56, 53],
[65, 64, 62, 61, 60, 57, 55],
[78, 76, 75, 73, 71],
[95, 94, 92, 89, 88, 86],
[54, 51, 50, 47, 46, 44, 43],
[58, 61, 62, 65, 67, 70, 73],
[40, 37, 34, 33, 32, 31],
[47, 50, 53, 54, 57, 58, 60, 61],
[59, 58, 55, 53, 52]];

const isValidField = (lineToTest) => {
    let j = 0;
    let isUpOrDown = 0;

    while (++j < lineToTest.length) {
        if (Math.abs(lineToTest[j] - lineToTest[j - 1]) >= 4) {
            // Too big of a diff
            return false;
        }

        if (lineToTest[j] === lineToTest[j - 1]) {
            return false;
        }

        if (isUpOrDown === 0) {
            if (lineToTest[j] > lineToTest[j - 1]) {
                isUpOrDown = 1;
            } else {
                isUpOrDown = -1;
            }
        } else {
            if (isUpOrDown === 1) {
                if (lineToTest[j] < lineToTest[j - 1]) {
                    return false;
                }
            } else {
                if (lineToTest[j] > lineToTest[j - 1]) {
                    return false;
                }
            }
        }
    }

    return true;
}

let i = -1;
let amountOfCorrect = 0;

while (++i < unparsedInput.length) {
    if (isValidField(unparsedInput[i])) {
        amountOfCorrect = amountOfCorrect + 1;
    } else {
        // Now we try to remove each level one by one, and see what would work
        let j = -1;
        while (++j < unparsedInput[i].length) {
            let newLine = [...unparsedInput[i]];
            newLine.splice(j, 1);

            if (isValidField(newLine)) {
                amountOfCorrect = amountOfCorrect + 1;
                break;
            }
        }
    }
}

console.log(amountOfCorrect);
