from .lcm import lcm

def lcm_range(start, end):
    result = start
    for num in range(start, end + 1):
        result = lcm(result, num)
    return result