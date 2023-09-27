
    dic = dict(list)
    for word in strs:
        sorted_word = ''.join(sorted(word))
        dic[sorted_word].append(word)
    return list(dic.values())    


print()