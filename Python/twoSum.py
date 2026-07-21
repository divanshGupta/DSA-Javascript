

def two_sum(nums: list[int], target: int) -> list[int]:
    seen = {}

    for index, num in enumerate(nums):
        needed = target - num
        if needed in seen:
            print(seen[needed], index)
        
        seen[num] = index

    return [] # return empty list if no solutions is found


two_sum([2, 7, 11, 15, 3, 6, 0, 4, 6, 3, 9, 10], 12)