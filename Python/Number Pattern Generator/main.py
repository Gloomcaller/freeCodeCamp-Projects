def number_pattern(n):
    if not isinstance(n, int):
        return "Argument must be an integer value."
    if n < 1:
        return "Argument must be an integer greater than 0."

    m = 1
    k = ""
    while m <= n:
        k += str(m) + " "
        m += 1

    return k.strip()


print(number_pattern(4))
print(number_pattern(12))
