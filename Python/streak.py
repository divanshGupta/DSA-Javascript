def streak(array):
    current = 0
    longest = 0

    for num in array:
        if(num):
            current += 1
        else:
            longest = current
            current = 0

    if(current > longest):
        longest = current

    print(current, longest)


streak([1, 22, 0, 3, 4, 7, 8, 0, 1])