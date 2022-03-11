import re


#primer ejercicio
def execute():
    for number in range(1, 101):
        if is_pair(number) and is_multiple(number):
            print(number, "buzz - bazz")
        elif is_pair(number):
            print(number, "buzz")
        elif is_multiple(number):
            print(number, "bazz")
        else:
            print(number)

def is_pair(number):
    if number % 2 == 0:
        return True
    else:
        return False

def is_multiple(number):
    if number % 5 == 0:
        return True
    else:
        return False



#segundo ejercicio
def execute_pokemon(file_name):
    # leer los nombres
    with open(file_name, 'r') as f:
        names = re.findall(r'\w+', f.read())

    longest_series, current_series = [], []


    def starts_with(lastletter, names):
        for index, name in enumerate(names):
            if name.startswith(lastletter):
                return index
        return False


    for name in names:
        current_name = name
        current_series.append(current_name)

        namelist = names[:] 
        namelist.pop(namelist.index(current_name)) 

        index = starts_with(current_name[-1], namelist)

        while index is not False:
            current_name = namelist[index] 
            current_series.append(current_name)
            namelist.pop(index)
            index = starts_with(current_name[-1], namelist)
        if len(current_series) > len(longest_series):
            longest_series = current_series

        current_series = []


    print(longest_series)


print("================= primer ejercicio =================")
execute()

print("\n================= segundo ejercicio =================")
execute_pokemon('names.txt')
