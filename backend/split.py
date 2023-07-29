with open('D:\YEP\Lighthouse\data.txt', 'r', encoding='UTF-8') as file:
    content = file.read()
    lines = content.split(";")
    list_of_requirements = []
    for i in range(0,len(lines)):
        dictionary = {}
        separate_words = []
        requirements = []
        line = lines[i]
        separate_words = line.split(",")
        name = separate_words[0]
        for n in range( 0 , len(separate_words)):
            if n >=1:
                requirements.append(separate_words[n])
        dictionary.update({name: requirements})
        list_of_requirements.append(dictionary)

        #dictionary.update(separate_words[i][1] : )
