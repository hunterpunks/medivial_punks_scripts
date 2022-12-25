# step size; this will also be random
#n = 600

# this number is the max that a class' member count might have
number_to_iterate = 4321

# the number to start the iteration
#rand_start = 100

max_iter_count = -1
hardest_n = -1
hardest_start = -1

for n in range(1, number_to_iterate):
    for rand_start in range(1, number_to_iterate):
        selected = []
        i = rand_start
        iteration_count = 0
        last_n = n
        while len(selected) < number_to_iterate // 2:
            iteration_count += 1
            if i in selected:
                # increase the step size with one (n, n+1 are always relatively prime)
                n = (n + 1) % number_to_iterate
                last_n = n
                i = (i + n) % number_to_iterate
                continue
            selected.append(i)
            i = (i + n) % number_to_iterate
        if iteration_count > max_iter_count:
            max_iter_count = iteration_count
            hardest_start = rand_start
            hardest_n = last_n
        print(rand_start)
    print(n)

print(hardest_n)
print(hardest_start)
print(max_iter_count)
