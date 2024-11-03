def gcd(x, y):        
    if x == 0:
      return y
    
    if y == 0:
      return x
    
    if x == y:
      return x
  
    if x > y:
        limit = y
    else:
        limit = x
    for i in range(1, limit + 1):
        if((x % i == 0) and (y % i == 0)):
            result = i
            
    return result