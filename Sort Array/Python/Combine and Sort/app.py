sort1 = [2,4,6,8,10]
sort2 = [1,3,9,11,13]
sort3 = [1.5, 3.5, 6.5, 9.5, 11.5]
def combine_and_sort():
    cNS = sort1 + sort2 + sort3
    cNS.sort()
    return cNS
print(combine_and_sort())